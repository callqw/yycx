/**
 * Created by Administrator on 2018/10/23.
 */
const select = function (ctx, next) {
    let obj = ctx.request.body
    let baseUrl = obj.crawlingUrl;
    let crawlingUrlSplice = obj.crawlingUrlSplice;
    let startPage = obj.crawlingStartPage;
    let endPage = obj.crawlingEndPage;
    let pageUrls = [];
    for (var _i = startPage; _i <= endPage; _i++) {
        pageUrls.push(baseUrl + crawlingUrlSplice + _i);
    }
    ctx.body = '<span>'+pageUrls+'</span>'
}
module.exports= {
        select: select
}