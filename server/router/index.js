/**
 * Created by Administrator on 2018/10/19.
 */
const concrollers = require('../concrollers')
const router = require('koa-router')({
    prefix: '/api'
})
router.get('/user', concrollers.userSelect.login)
//热点新闻
router.get('/news', concrollers.newsSelect.select)
//爬虫首页
router.get('/crawling', concrollers.crawling.crawling)


//登录
router.post('/user', concrollers.userAdd.add)
router.post('/news', concrollers.newsAdd.add)
//爬取信息
router.post('/crawling/select', concrollers.crawlingSelect.select)


module.exports = router;