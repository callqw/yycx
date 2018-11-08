/**
 * Created by Administrator on 2018/10/19.
 */
const Select = require('../../modules');
const select =async function (ctx, next) {
    let  res = await Select.newsSelect.select();

    ctx.body = res
    // ctx.body = '<form method="post" action="news"><label for="title">title</label><input id="title" name="title" value="'+this.text+'"/><label for="description">description </label><input name="description" value="'+this.text+'" id="description"/><label for="content">content </label><input type="text" name="content" value="'+this.text+'" id="content"/><button type="submit">提交</button></form>'
}

module.exports = {select: select}