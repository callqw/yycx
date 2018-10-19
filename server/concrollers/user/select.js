/**
 * Created by Administrator on 2018/10/19.
 */
const login = function (ctx, next) {
    ctx.body = '<form method="post" action="add"><label for="user">帐号</label><input id="user" name="user" value="'+this.text+'"/><label for="password">密码 </label><input name="password" value="'+this.text+'" id="password"/><button type="submit">提交</button></form>'
}

module.exports = {login: login}