/**
 * Created by Administrator on 2018/10/21 0021.
 */
var eventproxy = require('eventproxy');  //
var cheerio = require('cheerio'); //服务器jquery
var superagent = require('superagent');  //HTTP客户端功能
var async = require('async');   //异步数据控制
var ep = eventproxy();

const crawling = function (ctx, next) {
    ctx.body = '<form method="post" action="crawling/select"><label for="url">URL</label><input id="url" name="crawlingUrl" value="' + this.text + '"/>' +
        '<label for="crawlingUrlSplice">URL字符串拼接 </label><input name="crawlingUrlSplice" value="' + this.text + '" id="crawlingUrlSplice"/>' +
        '<label for="startPage">开始页 </label><input name="crawlingStartPage" value="' + this.text + '" id="startPage"/>' +
        '<label for="endPage">结束页 </label><input name="crawlingEndPage" value="' + this.text + '" id="endPage"/>' +
        '<button type="submit">提交</button></form>'

    var baseUrl = 'http://blog.csdn.net/web/index.vue';
    var pageUrls = [];
    for (var _i = 1; _i < 2; _i++) {
        pageUrls.push(baseUrl + '?&page=' + _i);
    }
    var authorUrls = [];
    pageUrls.forEach(function (pageUrl) {
        superagent.get(pageUrl).end(function (err, res) {
            // 常规的错误处理
            if (err) {
                return next(err);
            }

            ctx.body = res
            // 提取作者博客链接，注意去重
            var $ = cheerio.load(res.text);

            $('.blog_list').each(function (i, e) {
                var u = $('.blog_list dt a', e).attr('href');
                if (authorUrls.indexOf(u) === -1) {
                    authorUrls.push(u);
                }
            });
            ep.emit('get_topic_html', 'get authorUrls successful');


        });

    });
    ep.after('get_topic_html', pageUrls.length, function (eps) {
        // 控制最大并发数为5，在结果中取出callback返回来的整个结果数组。
        let concurrencyCount = 0;
        let fetchUrl = function (myurl, callback) {
            let fetchStart = new Date().getTime();
            concurrencyCount++;
            console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', myurl);
            superagent.get(myurl)
                .end(function (err, res) {
                    if (err) {
                        callback(err, myurl + ' error happened!');
                    }

                    var time = new Date().getTime() - fetchStart;
                    console.log('抓取 ' + myurl + ' 成功', '，耗时' + time + '毫秒');
                    concurrencyCount--;
                    let datas = []
                    let $ = cheerio.load(res.text);

                    $('.article-list> div').each(function (i, e) {
                        let u = $('h4 a', e).attr('href');
                        if (datas.indexOf(u) === -1 && u != undefined) {
                            datas.push(u);
                        }
                    });
                    superagent.get(datas).end(function (err, res) {
                        if (err) {
                            callback(err, myurl + ' error happened!');
                        }

                    })
                    callback(null, datas);
                });
        };
        async.mapLimit(authorUrls, 5, function (myurl, callback) {
            fetchUrl(myurl, callback);
        }, function (err, result) {
            console.log('=========== result: ===========\n', result);
        });
    })

}
module.exports = {crawling: crawling}