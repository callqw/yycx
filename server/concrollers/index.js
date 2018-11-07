/**
 * Created by Administrator on 2018/10/19.
 */
//登录
const userSelect = require('./user/select')
const userAdd = require('./user/add')
//新闻
const newsSelect = require('./news/select')
const newsAdd = require('./news/add')
//爬虫
const crawling = require('./splider/crawling')
const crawlingSelect = require('./splider/select')

module.exports = {
    userSelect: userSelect,
    userAdd: userAdd,
    newsSelect: newsSelect,
    newsAdd: newsAdd,
    crawling: crawling,
    crawlingSelect: crawlingSelect
}