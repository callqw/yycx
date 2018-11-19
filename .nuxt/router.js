import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _e97c823a = () => import('..\\pages\\wall.vue' /* webpackChunkName: "pages_wall" */).then(m => m.default || m)
const _5f42ef29 = () => import('..\\pages\\think.vue' /* webpackChunkName: "pages_think" */).then(m => m.default || m)
const _903e9fe0 = () => import('..\\pages\\fuck.vue' /* webpackChunkName: "pages_fuck" */).then(m => m.default || m)
const _38bdc844 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _211e7efc = () => import('..\\pages\\book.vue' /* webpackChunkName: "pages_book" */).then(m => m.default || m)
const _720dd1ac = () => import('..\\pages\\sitemap.vue' /* webpackChunkName: "pages_sitemap" */).then(m => m.default || m)
const _44381186 = () => import('..\\pages\\code.vue' /* webpackChunkName: "pages_code" */).then(m => m.default || m)
const _3202e7ac = () => import('..\\pages\\tag\\_tag.vue' /* webpackChunkName: "pages_tag__tag" */).then(m => m.default || m)
const _5e00736b = () => import('..\\pages\\search\\_keyword.vue' /* webpackChunkName: "pages_search__keyword" */).then(m => m.default || m)
const _5e8afbc6 = () => import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */).then(m => m.default || m)
const _2980d3d4 = () => import('..\\pages\\date\\_date.vue' /* webpackChunkName: "pages_date__date" */).then(m => m.default || m)
const _5875a309 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/wall",
			component: _e97c823a,
			name: "wall"
		},
		{
			path: "/think",
			component: _5f42ef29,
			name: "think"
		},
		{
			path: "/fuck",
			component: _903e9fe0,
			name: "fuck"
		},
		{
			path: "/about",
			component: _38bdc844,
			name: "about"
		},
		{
			path: "/book",
			component: _211e7efc,
			name: "book"
		},
		{
			path: "/sitemap",
			component: _720dd1ac,
			name: "sitemap"
		},
		{
			path: "/code",
			component: _44381186,
			name: "code"
		},
		{
			path: "/tag/:tag?",
			component: _3202e7ac,
			name: "tag-tag"
		},
		{
			path: "/search/:keyword?",
			component: _5e00736b,
			name: "search-keyword"
		},
		{
			path: "/article/:id?",
			component: _5e8afbc6,
			name: "article-id"
		},
		{
			path: "/date/:date?",
			component: _2980d3d4,
			name: "date-date"
		},
		{
			path: "/",
			component: _5875a309,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
