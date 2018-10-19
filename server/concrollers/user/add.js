/**
 * Created by Administrator on 2018/10/19.
 */
const Add = require('../../modules')
const add = async function (ctx, next) {
    console.log(ctx.request.body, 'body')
    let res = await Add.userAdd.add(ctx.request.body)
    ctx.body = res
}
module.exports = { add: add }