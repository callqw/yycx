require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Koa = __webpack_require__(1);
const { Nuxt, Builder } = __webpack_require__(2);
var sitemap = __webpack_require__(3);
sitemap.init({
  href: 'https://www.yixingcx.com',
  save_path: 'sitemap.txt'
});
async function start() {
  const app = new Koa();
  // const host = process.env.HOST || '127.0.0.1'
  const port = 3000;

  // Import and Set Nuxt.js options
  let config = __webpack_require__(4);
  config.dev = !(app.env === 'production');

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(async (ctx, next) => {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port);
  console.log('Server listening on :' + port); // eslint-disable-line no-console
}

start();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sitemap-nodejs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    cache: {
        max: 1000,
        maxAge: 900000
    },
    head: {
        title: '腾讯分分彩官网-桃花彩',
        titleTemplate: '桃花彩对接团队',
        meta: [{ charset: 'utf-8' }, { 'http-equiv': 'cleartype', content: 'on' }, { 'http-equiv': 'Cache-Control' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }, { hid: 'description', name: 'description', content: '桃花彩（thccn）是CP技能带单学习平台。桃花彩(thccn)提供了丰富的腾讯分分彩带单、重庆时时彩带单、北京PK拾官网、腾讯分分彩一天刷40万流水以及分分彩最聪明的玩法。并且正规富有交互性的玩彩趣味，你还可以和朋友一起玩彩盈利,桃花彩对接团队TT2017930。' }, { hid: 'keywords', name: 'keywords', content: '腾讯分分彩带单|重庆时时彩带单|北京PK拾官网|腾讯分分彩是国家的吗|	腾讯分分彩1个月赢50w|分分彩最聪明的玩法|分分彩一天刷10万流水|pk10如何将100玩到一万|腾讯分分彩计划 精准版' }, { name: 'author', content: 'TT2017930' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '~static/favicon.ico' }],
        // script: [
        //   {
        //     async: 'async',
        //     type: 'text/javascript',
        //     src: '//jkchao.disqus.com/count.js',
        //     id: 'dsq-count-scr'
        //   }
        // ],
        noscript: [{ innerHTML: 'This website requires JavaScript.' }]
    },
    // router
    // router: {
    //     middleware: ['layout']
    // },
    dev: "production" !== 'production',
    css: ['normalize.css', 'highlight.js/styles/github.css',
    // 'element-ui/packages/theme-chalk/src/index.scss',
    // { src: 'mint-ui/lib/button/style.css', lang: 'css' },
    { src: '~assets/scss/index.scss', lang: 'scss' }, { src: '~assets/element-ui/theme-chalk/index.css', lang: 'css' }],
    build: {
        analyze: false,
        vendor: ['vue', 'axios', 'element-ui', 'jquery'
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
        ssr: true
    }],
    modules: [
    // npm install @nuxtjs/proxy -D
    ['@nuxtjs/proxy']],
    // 配置代理
    axios: {
        proxy: true
    },
    proxy: {
        '/news': {
            target: 'news.zyyywh.cn'
        }
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map