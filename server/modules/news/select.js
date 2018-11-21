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
const select = function (obj) {
    return mysql('news').select().then((res) => {
        return {
            loginState: 'LOGIN_STATE.SUCCESS',
            msg: res
        }
    });
}
module.exports = {
    select: select
}