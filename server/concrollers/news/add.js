/**
 * Created by Administrator on 2018/10/19.
 */
const Add = require('../../modules/');

const add =async function (ctx, next) {
    let obj = ctx.request.body;
    let  res = await Add.newsAdd.add(obj);

    ctx.body = res
}

module.exports = {add: add}