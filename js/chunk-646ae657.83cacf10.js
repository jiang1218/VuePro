(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-646ae657"],{"7abe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("el-container",[i("el-aside",{staticStyle:{transition:"all .6s"},attrs:{width:t.fold?"60px":"200px"}},[i("img",{attrs:{src:n("891e"),alt:"",width:"140"}}),i("el-row",{staticClass:"tac"},[i("el-col",{attrs:{span:24}},[i("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"border-right":"0px"},attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:t.fold,"collapse-transition":!1,router:"","default-active":t.$route.path}},[i("el-menu-item",{style:t.fold?"width:60px":"width:200px",attrs:{index:"/home"}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),i("el-submenu",{style:t.fold?"width:60px":"width:200px",attrs:{index:"2"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-location"}),i("span",[t._v("内容管理")])]),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/articleAdd"}},[t._v("发布文章")]),i("el-menu-item",{attrs:{index:"/article"}},[t._v("内容列表")]),i("el-menu-item",{attrs:{index:"/material"}},[t._v("素材管理")])],1)],2),i("el-menu-item",{style:t.fold?"width:60px":"width:200px",attrs:{index:"/fans"}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("粉丝管理")])]),i("el-menu-item",{style:t.fold?"width:60px":"width:200px",attrs:{index:"/account"}},[i("i",{staticClass:"el-icon-setting"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户信息")])])],1)],1)],1)],1),i("el-container",[i("el-header",[i("el-row",[i("el-col",{attrs:{span:10}},[i("div",{staticClass:"grid-content bg-purple"},[i("i",{class:t.fold?"el-icon-s-unfold":" el-icon-s-fold",on:{click:function(e){t.fold=!t.fold}}}),i("span",[t._v("这是一个根据饿了么插件库写的Vue")])])]),i("el-col",{attrs:{span:14}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),i("span",{attrs:{id:"infor"}},[t._v("消息")]),i("img",{attrs:{src:t.photo,alt:"",width:"40",height:"40"}}),i("el-dropdown",{attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.name)+" "),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[t._v("个人信息")]),i("el-dropdown-item",{nativeOn:{click:function(e){return t.togit(e)}}},[t._v("git地址")]),i("el-dropdown-item",{nativeOn:{click:function(e){return t.loginOut(e)}}},[t._v("退出")])],1)],1)],1)])],1)],1),i("el-main",[i("router-view")],1)],1)],1)],1)},o=[],a=(n("b0c0"),n("880d")),s={name:"Home",data:function(){return{input2:"",fold:!1,nameData:"",photoData:""}},methods:{loginOut:function(){var t=this;this.$confirm("确定要提出系统?","退出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){window.sessionStorage.clear(),t.$router.push("/login")})).catch((function(){}))},togit:function(){window.open("https://github.com/jiang1218")}},computed:{name:function(){return this.nameData||JSON.parse(window.sessionStorage.getItem("userinfo")).name},photo:function(){return this.photoData||JSON.parse(window.sessionStorage.getItem("userinfo")).photo}},created:function(){var t=this;a["a"].$on("pass",(function(e){t.nameData=e.data.data.name;var n=JSON.parse(window.sessionStorage.getItem("userinfo"));n.name=t.nameData,window.sessionStorage.setItem("userinfo",JSON.stringify(n))})),a["a"].$on("Photo",(function(e){t.photoData=e;var n=JSON.parse(window.sessionStorage.getItem("userinfo"));n.photo=e,window.sessionStorage.setItem("userinfo",JSON.stringify(n))}))}},l=s,r=(n("a89f"),n("2877")),c=Object(r["a"])(l,i,o,!1,null,"e77ce48a",null);e["default"]=c.exports},"880d":function(t,e,n){"use strict";var i=n("8bbf"),o=n.n(i);e["a"]=new o.a},"891e":function(t,e,n){t.exports=n.p+"img/logo.0ddf1524.png"},a89f:function(t,e,n){"use strict";var i=n("b92a"),o=n.n(i);o.a},b0c0:function(t,e,n){var i=n("83ab"),o=n("9bf2").f,a=Function.prototype,s=a.toString,l=/^\s*function ([^ (]*)/,r="name";!i||r in a||o(a,r,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(t){return""}}})},b92a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-646ae657.83cacf10.js.map