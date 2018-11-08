/**
 * Created by Administrator on 2018/10/19.
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const debug = require('debug')('koa-weapp-demo')
const config = require('./config')
const router = require('./router')

const app = new Koa();

app.use(bodyParser());

app.use((ctx, next )=> {
    const start = Date.now();
    return next().then(() => {
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
})

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(config.port, ()=>{
        debug(`listening on port ${config.port}`),console.log(`listening on port ${config.port}`)
})