import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
            // 是否有侧栏
            isAsidePage: false,

            // 错误页面
            isError: false,

            // 是否为移动端
            mobileLayout: false,

            // 移动端侧边栏
            mobileSidebar: false,

            // ua
            userAgent: '',

            // 博主信息
            adminInfo: {},

            // 网站信息
            option: {},

            isWelcome: true
    },
    mutations: {
        // 错误页面
        SET_ERROR_PAGE (state, data) {
            state.isError = data
        },
        // 设置UA
        SET_USER_AGENT (state, action) {
            state.userAgent = action
        },

        // 设置是否移动端状态
        SET_MOBILE_LAYOUT (state, action) {
            state.mobileLayout = action
        }
    },
    actions: {
        nuxtServerInit (store, { req }) {
            const userAgent = req.headers['user-agent']
            const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
            store.commit('SET_MOBILE_LAYOUT', isMobile)
            store.commit('SET_USER_AGENT', userAgent)


        }
    }
})

export default store