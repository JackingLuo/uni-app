(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherPage/otherPage"],{"2f66":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("9ba8"),o={data:function(){return{requestCont:null}},onLoad:function(e){t.showToast({title:"上一页路由带过来的参数"+e.test,duration:2e3,icon:"none"})},methods:{startRequest:function(){this.requestCont=(0,u.GET_VIDEO_LIST)(),this.requestCont.get().then(function(e){t.showToast({title:e.data,duration:2e3,icon:"none"})})},stopRequest:function(){this.requestCont.stop()}}};e.default=o}).call(this,n("6e42")["default"])},"43ca":function(t,e,n){"use strict";(function(t){n("0d86"),n("921b");u(n("66fd"));var e=u(n("5c84"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5c84":function(t,e,n){"use strict";n.r(e);var u=n("e621"),o=n("bb0d");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r=n("2877"),c=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},bb0d:function(t,e,n){"use strict";n.r(e);var u=n("2f66"),o=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=o.a},e621:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})}},[["43ca","common/runtime","common/vendor"]]]);