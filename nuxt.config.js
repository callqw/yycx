module.exports = {
    cache: {
        max: 1000,
        maxAge: 900000
    },
    head: {
        title: '腾讯分分彩官网-桃花彩',
        titleTemplate: '桃花彩对接团队',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'cleartype', content: 'on' },
            { 'http-equiv': 'Cache-Control' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { hid: 'description', name: 'description', content: '桃花彩（thccn）是CP技能带单学习平台。桃花彩(thccn)提供了丰富的腾讯分分彩带单、重庆时时彩带单、北京PK拾官网、腾讯分分彩一天刷40万流水以及分分彩最聪明的玩法。并且正规富有交互性的玩彩趣味，你还可以和朋友一起玩彩盈利,桃花彩对接团队TT2017930。' },
            { hid: 'keywords', name: 'keywords', content: '腾讯分分彩带单|重庆时时彩带单|北京PK拾官网|腾讯分分彩是国家的吗|	腾讯分分彩1个月赢50w|分分彩最聪明的玩法|分分彩一天刷10万流水|pk10如何将100玩到一万|腾讯分分彩计划 精准版' },
            { name: 'author', content: 'TT2017930' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '~static/favicon.ico' }
        ],
        // script: [
        //   {
        //     async: 'async',
        //     type: 'text/javascript',
        //     src: '//jkchao.disqus.com/count.js',
        //     id: 'dsq-count-scr'
        //   }
        // ],
        noscript: [
            { innerHTML: 'This website requires JavaScript.' }
        ]
    },
    // router
    // router: {
    //     middleware: ['layout']
    // },
    // dev: (process.env.NODE_ENV === 'development'),
    css: [
        'normalize.css',
        'highlight.js/styles/github.css',
        // 'element-ui/packages/theme-chalk/src/index.scss',
        // { src: 'mint-ui/lib/button/style.css', lang: 'css' },
        { src: '~assets/scss/index.scss', lang: 'scss' },
        { src: '~assets/element-ui/theme-chalk/index.css', lang: 'css' }
    ],
    build: {
        analyze: false,
        vendor: ['vue','axios'
            ,'element-ui'
            ,'jquery'
            // ,'mint-ui'
        ]
    },
    plugins: [
    //     {
    //     src: '~plugins/mint-ui',
    //     ssr: true,
    // },
    //     {
    //         src: '~plugins/jquery.min.js',
    //         ssr: true,
    //     },
        {
        src: '~plugins/element-ui',
        ssr: true,
    },

    ],
    modules: [
        // npm install @nuxtjs/proxy -D
        ['@nuxtjs/proxy']
    ],
    // 配置代理
    axios: {
        proxy: true
    },
    proxy: {
        '/news': {
            target: 'news.zyyywh.cn',
        }
    }
}