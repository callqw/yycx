webpackJsonp([10],{"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gBIw"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a("0uL3"),r=!1;var c=function(t){r||a("8qJU")},l=a("C7Lr")(o.a,s.a,!1,c,"data-v-2a183b29",null);l.options.__file="pages/index.vue",e.default=l.exports},"0uL3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"welcome",class:{mobil:t.mobileLayout}},[a("div",{staticClass:"haiyan"},[a("h4",{staticClass:"mune"},[a("nuxt-link",{attrs:{to:"/code"}},[t._v("码农")]),a("span",[t._v("/")]),a("nuxt-link",{attrs:{to:"/think"}},[t._v("读书")]),a("span",[t._v("/")]),a("nuxt-link",{attrs:{to:"/fuck"}},[t._v("民谣")])],1)]),t.mobileLayout?t._e():a("div",{staticClass:"will"},[a("img",{attrs:{src:"https://static.jkchao.cn/will.png",alt:"",width:"80"}})])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"8qJU":function(t,e,a){var i=a("H7fb");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("3faf5c1c",i,!1,{sourceMap:!1})},H7fb:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,'.welcome[data-v-2a183b29]{position:fixed;top:0;right:0;width:100%;height:100%;background:url("https://static.jkchao.cn/main_bg.jpg") no-repeat 20% 20%;background-size:cover}.welcome .haiyan[data-v-2a183b29]{position:absolute;right:80px;top:280px;color:#eee}.welcome .haiyan .mune span[data-v-2a183b29]{padding:.35rem}.welcome .will[data-v-2a183b29]{position:absolute;right:40px;top:40px}.welcome.mobil .haiyan[data-v-2a183b29]{top:70px;left:60px}',""])},gBIw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a("rVsN"));e.default={scrollToTop:!0,transition:"fade",computed:{mobileLayout:function(){return this.$store.state.options.mobileLayout}},mounted:function(){var t=this;this.$nextTick(function(){i.default.all([t.$store.dispatch("getArtList",{type:1}),t.$store.dispatch("getArtList",{type:2}),t.$store.dispatch("getArtList",{type:3})])})}}}});