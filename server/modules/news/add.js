/**
 * Created by Administrator on 2018/10/19.
 */
const mysql = require('../db')
const moment = require('moment')
const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
const lastVisiteTime = moment().format('YYYY-MM-DD HH:mm:ss')
const add = function (obj) {
    return mysql('news').insert({
        userId: '1',
        createTime: createTime,
        lastVisiteTime: lastVisiteTime,
        title: obj.title,
        description: obj.description,
        tab: 'tab',
        content: obj.content
    }).then((res) => {
        return {
            loginState: 'LOGIN_STATE.SUCCESS',
            msg: '新增成功'
        }
    });
}
module.exports = {
    add: add
}