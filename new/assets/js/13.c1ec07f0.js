(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{304:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api参考"}},[t._v("#")]),t._v(" API参考")]),t._v(" "),a("p",[t._v("mpx和mpx-webpack-plugin中暴露出的api文档")]),t._v(" "),a("h2",{attrs:{id:"createapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createapp"}},[t._v("#")]),t._v(" createApp")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"createpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createpage"}},[t._v("#")]),t._v(" createPage")]),t._v(" "),a("blockquote",[a("p",[t._v("类微信小程序（微信、百度、头条等）内部使用"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component的方式创建页面"),a("OutboundLink")],1),t._v("，所以除了支持页面的生命周期之外还同时"),a("code",[t._v("支持组件的一切特性")]),t._v("。当使用Component创建页面时，"),a("code",[t._v("页面生命周期")]),t._v("需要写在"),a("code",[t._v("methods内部")]),t._v("（微信小程序原生规则），mpx进行了统一封装转换，"),a("code",[t._v("页面生命周期都写在最外层")]),t._v("即可")])]),t._v(" "),a("blockquote",[a("p",[t._v("options的具体形式，除了computed、watch这类mpx扩展特性之外，其他的属性都参照原生小程序的官方文档即可。")])]),t._v(" "),a("p",[t._v("用法："),a("code",[t._v("createPage(options, config?)")])]),t._v(" "),a("p",[t._v("config是一个可选参数，应为一个对象。\n如果希望标识一个组件是最纯粹的原生组件，不用数据响应等能力，可通过config.isNative传true声明。\n如果有需要复写/改写最终调用的创建页面的构造器，可以通过config对象的customCtor提供。"),a("code",[t._v("注意：mpx本身是用component来创建页面的，如果传page可能在初始化时候生命周期不正常导致取props有一点问题")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"createcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createcomponent"}},[t._v("#")]),t._v(" createComponent")]),t._v(" "),a("blockquote",[a("p",[t._v("options的具体形式，除了computed、watch这类mpx扩展特性之外，其他的属性都参照原生小程序的官方文档即可。")])]),t._v(" "),a("p",[t._v("用法："),a("code",[t._v("createComponent(options, config?)")])]),t._v(" "),a("p",[t._v("config是一个可选参数，应为一个对象。\n如果希望标识一个组件是最纯粹的原生组件，不用数据响应等能力，可通过config.isNative传true声明。\n如果有需要复写/改写最终调用的创建组件的构造器，可以通过config对象的customCtor提供。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    prop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      immediate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否首次执行一次")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"createstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createstore"}},[t._v("#")]),t._v(" createStore")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"options选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options选项"}},[t._v("#")]),t._v(" options选项")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("state")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("store的根 state 对象。"),a("RouterLink",{attrs:{to:"/api/store/#state"}},[t._v("详细介绍")])],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("mutations")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),a("p",[t._v("在 store 上注册 mutation，处理函数总是接受 "),a("code",[t._v("state")]),t._v(" 作为第一个参数（如果定义在模块中，则为模块的局部状态），"),a("code",[t._v("payload")]),t._v(" 作为第二个参数（可选）。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/store/#mutation"}},[t._v("详细介绍")])],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("actions")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),a("p",[t._v("在 store 上注册 action。处理函数总是接受 "),a("code",[t._v("context")]),t._v(" 作为第一个参数，"),a("code",[t._v("payload")]),t._v(" 作为第二个参数（可选）。")]),t._v(" "),a("p",[a("code",[t._v("context")]),t._v(" 对象包含以下属性：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于 `store.state`")]),t._v("\n  commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于 `store.commit`")]),t._v("\n  dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于 `store.dispatch`")]),t._v("\n  getters     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于 `store.getters`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("同时如果有第二个参数 "),a("code",[t._v("payload")]),t._v(" 的话也能够接收。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/store/#action"}},[t._v("详细介绍")])],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("getters")])]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("{ [key: string]: Function }")])])]),t._v(" "),a("p",[t._v("在 store 上注册 getter，getter 方法接受以下参数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("state,     // 如果在模块中定义则为模块的局部状态\ngetters,   // 等同于 store.getters\n")])])]),a("p",[t._v("注册的 getter 暴露为 "),a("code",[t._v("store.getters")]),t._v("。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/store/#getters"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("modules")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("包含了子模块的对象，会被合并到 store，大概长这样：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    actions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("与根模块的选项一样，每个模块也包含 "),a("code",[t._v("state")]),t._v(" 和 "),a("code",[t._v("mutations")]),t._v(" 选项。模块的状态使用 key 关联到 store 的根状态。模块的 mutation 和 getter 只会接收 module 的局部状态作为第一个参数，而不是根状态，并且模块 action 的 "),a("code",[t._v("context.state")]),t._v(" 同样指向局部状态。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/store/#module"}},[t._v("详细介绍")])],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("deps")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("包含了当前store依赖的第三方store：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  store1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" storeA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" storeB\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/api/store/#多实例"}},[t._v("详细介绍")])],1)])])])]),t._v(" "),a("h4",{attrs:{id:"store-实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-实例属性"}},[t._v("#")]),t._v(" Store 实例属性")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("state")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("根状态。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("getters")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("暴露出注册的 getter。")])])])])]),t._v(" "),a("h4",{attrs:{id:"store-实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-实例方法"}},[t._v("#")]),t._v(" Store 实例方法")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("commit(type: string, payload?: any, options?: Object) | commit(mutation: Object, options?: Object)")])])]),t._v(" "),a("p",[t._v("提交 mutation。"),a("RouterLink",{attrs:{to:"/api/store/#mutation"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("dispatch(type: string, payload?: any, options?: Object) | dispatch(action: Object, options?: Object)")])])]),t._v(" "),a("p",[t._v("分发 action。返回一个Promise。"),a("RouterLink",{attrs:{to:"/api/store/#action"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("mapState(map: Array<string> | Object): Object")])])]),t._v(" "),a("p",[t._v("为组件创建计算属性以返回 store 中的状态。"),a("RouterLink",{attrs:{to:"/api/store/#mapstate-辅助函数"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("mapGetters(map: Array<string> | Object): Object")])])]),t._v(" "),a("p",[t._v("为组件创建计算属性以返回 getter 的返回值。"),a("RouterLink",{attrs:{to:"/api/store/#mapgetters-辅助函数"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("mapActions(map: Array<string> | Object): Object")])])]),t._v(" "),a("p",[t._v("创建组件方法分发 action。"),a("RouterLink",{attrs:{to:"/api/store/#在组件中分发-action"}},[t._v("详细介绍")])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("mapMutations(map: Array<string> | Object): Object")])])]),t._v(" "),a("p",[t._v("创建组件方法提交 mutation。"),a("RouterLink",{attrs:{to:"/api/store/#在组件中提交-mutation"}},[t._v("详细介绍")])],1)])]),t._v(" "),a("h2",{attrs:{id:"topureobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topureobject"}},[t._v("#")]),t._v(" toPureObject")]),t._v(" "),a("p",[t._v("由于使用的mobx的响应式数据，所以业务拿到的数据可能是mobx响应式数据实例（包含了些其他属性），使用toPureObject可以将响应式的数据转化成纯js对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("toPureObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pureObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPureObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable"}},[t._v("#")]),t._v(" observable")]),t._v(" "),a("p",[t._v("用于创建响应式数据，属于mobx提供的能力")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mpx.observable(...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"extendobservable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendobservable"}},[t._v("#")]),t._v(" extendObservable")]),t._v(" "),a("p",[t._v("用于扩展响应式数据，属于mobx提供的能力, 主要用于添加新的可观察数据, "),a("code",[t._v("并不会触发订阅者更新")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extendObservable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mpx.extendObservable(...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendObservable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("newProp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"watch-context-expr-handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-context-expr-handler"}},[t._v("#")]),t._v(" watch(context, expr, handler)")]),t._v(" "),a("p",[t._v("用于观察数据从而触发相应操作")]),t._v(" "),a("ul",[a("li",[t._v("context 回调执行的上下文")]),t._v(" "),a("li",[t._v("expr 观察的表达式[String | Function]。可以是path字符串（取值将在context上进行查找），也可以是函数")]),t._v(" "),a("li",[t._v("handler 响应函数[Function | Object]。如果是对象，则handler.handler为回调函数，其他参数作为options，与组件的watch一致")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mpx.watch(...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update a.name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("h3",{attrs:{id:"mpx-set-mpx-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpx-set-mpx-remove"}},[t._v("#")]),t._v(" mpx.set & mpx.remove")]),t._v(" "),a("p",[t._v("用于对一个响应式对象新增或删除属性，会"),a("code",[t._v("触发订阅者更新操作")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"mpx-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpx-use"}},[t._v("#")]),t._v(" mpx.use")]),t._v(" "),a("p",[t._v("mpx.use用于安装外部扩展, 支持多参数，如果第二个参数是一个包含（prefix or postfix）的option，\n那么将会对插件扩展的属性添加前缀或后缀（主要考虑插件开发者直接导出的属性可能存在同名问题，use时指定\n前缀或后缀能在业务角度去处理这种情况）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test'")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mpx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'otherparams'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/api/extend/"}},[t._v("具体例子")])],1),t._v(" "),a("h2",{attrs:{id:"mpx-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpx-mixin"}},[t._v("#")]),t._v(" mpx.mixin")]),t._v(" "),a("p",[t._v("用于注入mixin")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/core'")]),t._v("\nmpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$fetch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"types选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types选项"}},[t._v("#")]),t._v(" types选项")]),t._v(" "),a("p",[t._v("types决定了mixin会注入到哪种实例上，app | page | component")]),t._v(" "),a("ul",[a("li",[t._v("String, 'app' | 'page' | 'component'")]),t._v(" "),a("li",[t._v("Array, ['app', 'page', 'component']")]),t._v(" "),a("li",[t._v("如果不传，默认为['app', 'page', 'component']")])])])}),[],!1,null,null,null);s.default=e.exports}}]);