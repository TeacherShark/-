webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=a(n(2)),u=a(n(170)),o=a(n(199)),c=a(n(200));n.p=window.__PUBLIC_PATH__+"/";var i=window.__APP_SETTINGS__||{},d=function(e){return e["default"]||e},f={render:r["default"].render},s=o["default"].getFlatList(Array.isArray(c["default"])?c["default"]:Object.values(c["default"])),p=l({hashType:"hashbang",container:"#root"},i,{context:l({preload:{}},i.context,{isClient:!0,isServer:!1}),loader:function(e){return"function"==typeof e?new Promise(e).then(d):d(e)},routes:s,viewEngine:f}),m={};Array.from(document.querySelectorAll("[data-preload]")).forEach(function(e){var t=e.getAttribute("data-preload"),n=e.textContent||e.innerHTML;m[t]=n}),p.context.preload=m,(0,u["default"])(p).start()},200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(201));a(n(233))["default"].locale("zh-cn"),t["default"]={ttd:l["default"]}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(174),l=[{path:["/dest/t:id.html"],controller:n(202)},{path:[a("/dest/:keyword/(s-tickets/?)?")],controller:n(305)},{path:["/","/index","/citylist"],controller:n(321)},{path:["/booking"],controller:n(345)},{path:["/captcha"],controller:n(349)}];t["default"]=l},202:function(e,t,n){e.exports=function(e){n.e(1,function(t){e(n(203))})}},239:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(210)),u=n(240),o=a(n(250)),c=a(n(251)),i=a(n(252)),d=a(n(253)),f=a(n(254)),s=a(n(244)),p=a(n(243));t["default"]=(0,s["default"])(function(e){var t=e.state,n=t.commonErrorInfo||{},a=n.showErrorPage,l=n.errorCallback;return{isIOSApp:t.isIOSApp,bodyClass:t.bodyClass||"",showErrorPage:a,errorCallback:l,hiddenHeader:t.hiddenHeader||!1}})(function(e){var t,n=e.bodyClass,a=void 0===n?"":n,s=e.children,m=e.isIOSApp,v=e.hiddenHeader,_=void 0!==v&&v,h=e.showErrorPage,b=e.errorCallback,E=(0,p["default"])((l(t={body:!0},a,!!a),l(t,"body_ios_hybrid",m),t));return r["default"].createElement("div",{className:E},r["default"].createElement(u.Style,{name:"paginationCss"}),r["default"].createElement(u.Style,{name:"detailCss"}),!_&&r["default"].createElement(o["default"],null),h?r["default"].createElement(f["default"],{callback:b}):s,r["default"].createElement(d["default"],null),r["default"].createElement(c["default"],null),r["default"].createElement(i["default"],null))})},250:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(210)),r=n(240),u=a(n(244)),o=a(n(243));t["default"]=(0,u["default"])(function(e){var t=e.state,n=e.handlers;return{hideHeader:t.hideHeader,pageTitle:t.pageTitle||"",pageSubTitle:t.pageSubTitle||"",rightBtns:t.rightBtns||[],leftBtn:t.leftBtn||{},handleBack:n.handleBack,headerClass:t.headerClass||""}})(function(e){if(e.hideHeader)return null;var t=(0,o["default"])(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({header:!0},e.headerClass,!!e.headerClass));return l["default"].createElement("div",{id:"headerview",className:"header_col"},l["default"].createElement("div",{className:t},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return l["default"].createElement(r.Link,{as:"i",className:"fl header_icon",onClick:t},e.icon||"")}(e.leftBtn,e.handleBack),function(e){return e&&e.length?e.map(function(e,t){return l["default"].createElement(r.Link,{key:t,as:"i",className:"fr "+(e.className||"header_text"),onClick:function(){e.callback&&e.callback()}},e.content)}):null}(e.rightBtns),function(e){var t=e.pageTitle,n=e.pageSubTitle;return n?l["default"].createElement("div",{className:"header_title_l"},l["default"].createElement("h1",null,t),l["default"].createElement("p",null,n)):l["default"].createElement("h1",{className:"header_title"},t)}(e)))})},251:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=a(n(210)),u=a(n(244));t["default"]=(0,u["default"])(function(e){var t=e.state;return l({},t.alertInfo)})(function(e){if(!e||0===Object.keys(e).length)return null;var t=e.hideAlert,n=(e.title,e.content),a=e.btns,l=e.maskToHide;return r["default"].createElement("div",null,r["default"].createElement("div",{className:"dp_pop_box"},r["default"].createElement("div",{className:"pop_bd"},n),r["default"].createElement("div",{className:"pop_foot flexbox"},a.map(function(e,n){var a="";return 0===n&&(a="pop_btn flex_1"),1===n&&(a="pop_btn flex_1 f_ctrip"),a=e.className||a,r["default"].createElement("span",{key:n,className:a,onClick:function(){e.action&&e.action(),t()}},e.name)}))),r["default"].createElement("div",{className:"pop_mask",onClick:l&&t}))})},252:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(210)),r=a(n(244));t["default"]=(0,r["default"])(function(e){return{toastContent:e.state.toastContent}})(function(e){var t=e.toastContent;return t?l["default"].createElement("div",{className:"toast"},t):null})},253:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=a(n(210)),u=a(n(244));t["default"]=(0,u["default"])(function(e){var t=e.state.loadingInfo;return l({},t)})(function(e){var t=e.show,n=e.content,a=void 0===n?"加载中...":n;return t?r["default"].createElement("div",null,r["default"].createElement("div",{className:"dp_page_loading"},r["default"].createElement("img",{src:"https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/loading.gif"}),r["default"].createElement("div",null,a)),r["default"].createElement("div",{className:"pop_mask"})):null})},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{"default":e}}(n(210));t["default"]=function(e){var t=e.callback;return a["default"].createElement("div",{className:"full_failure"},a["default"].createElement("p",null,"很抱歉，加载失败"),a["default"].createElement("div",{className:"full_failure_btn",onClick:t},"重新加载"))}},305:function(e,t,n){e.exports=function(e){n.e(2,function(t){e(n(306))})}},321:function(e,t,n){e.exports=function(e){n.e(3,function(t){e(n(322))})}},345:function(e,t,n){e.exports=function(e){n.e(4,function(t){e(n(346))})}},349:function(e,t,n){e.exports=function(e){n.e(5,function(t){e(n(350))})}}});
//# sourceMappingURL=index-ba71c4.js.b5001e56.map