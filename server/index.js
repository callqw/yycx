
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = new Koa();

app.use(bodyParser());

app.use((ctx, next )=> {
    const start = Date.now();
    return next().then(() => {
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
})
router.get('/', (ctx,next)=>{
    ctx.body='success'
})
app.use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, ()=>{
       console.log(`listening on port 3000`)
    })