/**
 * Created by Administrator on 2018/10/19.
 */
const sha1 = require('../../node_modules/wafer-node-sdk/lib/helper/sha1');
const aesDecrypt = require('../../node_modules/wafer-node-sdk/lib/helper/aesDecrypt');
const mysql = require('../db')
const moment = require('moment')
const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
const lastVisiteTime = moment().format('YYYY-MM-DD HH:mm:ss')
const random = require('../../random')
const add = function (obj) {
    return mysql('user').insert({
        openId: sha1(random.generateMixed(16)),
        createTime: createTime,
        lastVisiteTime: lastVisiteTime,
        user: sha1(obj.user),
        password: sha1(obj.password),
        skey: 'skey',
        userInfo: 'userInfo'
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