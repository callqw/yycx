import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\_normalize.css@8.0.0@normalize.css\\normalize.css'

import '..\\node_modules\\_highlight.js@9.13.1@highlight.js\\styles\\github.css'

import '..\\assets\\scss\\index.scss'

import '..\\assets\\element-ui\\theme-chalk\\index.css'


import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"腾讯分分彩官网-桃花彩","titleTemplate":"桃花彩对接团队","meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"Cache-Control"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"桃花彩（thccn）是CP技能带单学习平台。桃花彩(thccn)提供了丰富的腾讯分分彩带单、重庆时时彩带单、北京PK拾官网、腾讯分分彩一天刷40万流水以及分分彩最聪明的玩法。并且正规富有交互性的玩彩趣味，你还可以和朋友一起玩彩盈利,桃花彩对接团队TT2017930。"},{"hid":"keywords","name":"keywords","content":"腾讯分分彩带单|重庆时时彩带单|北京PK拾官网|腾讯分分彩是国家的吗|\t腾讯分分彩1个月赢50w|分分彩最聪明的玩法|分分彩一天刷10万流水|pk10如何将100玩到一万|腾讯分分彩计划 精准版"},{"name":"author","content":"TT2017930"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"~static\u002Ffavicon.ico"}],"noscript":[{"innerHTML":"This website requires JavaScript."}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
      
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
