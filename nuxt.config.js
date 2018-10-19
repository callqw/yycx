module.exports = {
    cache: {
        max: 1000,
        maxAge: 900000
    },
    head: {
        title: '码农，读书，民谣2',
        titleTemplate: '%s | 三毛',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'cleartype', content: 'on' },
            { 'http-equiv': 'Cache-Control' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { hid: 'description', name: 'description', content: '民谣，读书，码农。' },
            { hid: 'keywords', name: 'keywords', content: '前端开发，JavaScript, Node, Vue，nuxt' },
            { name: 'author', content: 'jkchaom@gmail.com' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    router: {
        middleware: ['layout']
    },
    dev: (process.env.NODE_ENV !== 'production'),
    css: [
        'normalize.css',
        'highlight.js/styles/github.css',
        'element-ui/packages/theme-chalk/src/index.scss',
        // { src: 'mint-ui/lib/button/style.css', lang: 'css' },
        { src: '~assets/scss/index.scss', lang: 'scss' },
        // { src: '~assets/element-ui/theme-chalk/index.css', lang: 'css' }
    ],
    build: {
        analyze: true,
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
}