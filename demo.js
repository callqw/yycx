/**
 * Created by xj on 2018/12/17.
 */
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);