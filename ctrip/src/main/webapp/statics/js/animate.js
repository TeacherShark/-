;window.replace=function(){return ''};(function(ca){function I(){}function C(a){var b=a.length,c=d.type(a);return (d.isWindow(a)?!1:(1===a.nodeType&&b?!0:"array"===c||"function"!==c&&(0===b||"number"===typeof b&&0<b&&b-1 in a)))}function da(a){var b=J[a]={};d.each(a.match(ea)||[],function(a,d){b[d]=!0});return b}function K(a,b,c){if(d.acceptData(a)){var g,e,f=a.nodeType,h=(f?d.cache:a),k=(f?a[d.expando]:d.expando);if(h[k]){if(b&&(g=(c?h[k]:h[k].data))){(d.isArray(b)?b=b.concat(d.map(b,d.camelCase)):(b in g?b=[b]:(b=d.camelCase(b),b=(b in g?[b]:b.split(" ")))));
    for(e=b.length;e--;)delete g[b[e]];if(c?!D(g):!d.isEmptyObject(g))return}if(!c&&(delete h[k].data,!D(h[k])))return;(f?d.cleanData([a],!0):(d.support.deleteExpando||h!=h.window?delete h[k]:h[k]=null))}}}function L(a,b,c,g){if(d.acceptData(a)){var e=d.expando,f=a.nodeType,h=(f?d.cache:a),k=(f?a[e]:a[e]&&e);if(k&&h[k]&&(g||h[k].data)||!(void 0===c&&"string"===typeof b)){k||(k=(f?a[e]=v.pop()||d.guid++:e));h[k]||(h[k]=(f?{}:{toJSON:d.noop}));if("object"===typeof b||"function"===typeof b)(g?h[k]=d.extend(h[k],b):h[k].data=
    d.extend(h[k].data,b));a=h[k];g||(a.data||(a.data={}),a=a.data);void 0!==c&&(a[d.camelCase(b)]=c);("string"===typeof b?(c=a[b],null==c&&(c=a[d.camelCase(b)])):c=a);return c}}}function D(a){for(var b in a)if(!("data"===b&&d.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function M(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=N.length;e--;)if(b=N[e]+c,b in a)return b;return d}function m(a,b,c,d,e){return new m.prototype.init(a,b,c,d,e)}function E(a,b){var c,d={height:a},
    e=0;for(b=(b?1:0);4>e;e+=2-b)c=q[e],d["margin"+c]=d["padding"+c]=a;b&&(d.opacity=d.width=a);return d}function O(a){var b=document,c=P[a];if(!c){c=Q(a,b);if("none"===c||!c)c=document.createElement("iframe"),c.frameborder=0,c.width=0,c.height=0,c.cssText="display:block !important",w=cQuery(w||c).appendTo(b.documentElement),b=(w[0].contentWindow||w[0].contentDocument).document,b.write("<!doctype html><html><body>"),b.close(),c=Q(a,b),w.remove();P[a]=c}return c}function Q(a,b){var c=cQuery(b.createElement(a)).appendTo(b.body),
    g=d.css(c[0],"display");c.remove();return g}function R(){setTimeout(function(){s=void 0});return s=d.now()}function S(a,b,c){for(var d,e=(T[b]||[]).concat(T["*"]),f=0,h=e.length;f<h;f++)if(d=e[f].call(c,b,a))return d}function fa(a,b,c){var g,e=0,f=U.length,h=d.Deferred().always(function(){delete k.elem}),k=function(){if(g)return!1;for(var b=s||R(),b=Math.max(0,l.startTime+l.duration-b),c=1-(b/l.duration||0),e=0,d=l.tweens.length;e<d;e++)l.tweens[e].run(c);h.notifyWith(a,[l,c,b]);if(1>c&&d)return b;
    h.resolveWith(a,[l]);return!1},l=h.promise({elem:a,props:d.extend({},b),opts:d.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:s||R(),duration:c.duration,tweens:[],createTween:function(b,c){var e=d.Tween(a,l.opts,b,c,l.opts.specialEasing[b]||l.opts.easing);l.tweens.push(e);return e},stop:function(b){var c=0,e=(b?l.tweens.length:0);if(g)return this;for(g=!0;c<e;c++)l.tweens[c].run(1);(b?h.resolveWith(a,[l,b]):h.rejectWith(a,[l,b]));return this}});c=l.props;for(ga(c,l.opts.specialEasing);e<
f;e++)if(b=U[e].call(l,a,c,l.opts))return b;d.map(c,S,l);d.isFunction(l.opts.start)&&l.opts.start.call(a,l);d.fx.timer(d.extend(k,{elem:a,anim:l,queue:l.opts.queue}));return l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function ga(a,b){var c,g,e,f,h;for(c in a)if(g=d.camelCase(c),e=b[g],f=a[c],d.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==g&&(a[g]=f,delete a[c]),(h=d.cssHooks[g])&&"expand"in h)for(c in f=h.expand(f),delete a[g],f)c in a||(a[c]=f[c],
    b[c]=e);else b[g]=e}function y(a,b){a=b||a;return"none"===d.css(a,"display")||!Sizzle.contains(a.ownerDocument,a)}function z(a,b){for(var c,g,e,f=[],h=0,k=a.length;h<k;h++)if(g=a[h],g.style)if(f[h]=d._data(g,"olddisplay"),c=g.style.display,b)!f[h]&&"none"===c&&(g.style.display=""),""===g.style.display&&y(g)&&(f[h]=d._data(g,"olddisplay",O(g.nodeName)));else if(!f[h]&&(e=y(g),c&&"none"!==c||!e))d._data(g,"olddisplay",(e?c:d.css(g,"display")));for(h=0;h<k;h++)if(g=a[h],g.style&&(!b||"none"===g.style.display||
    ""===g.style.display))g.style.display=(b?f[h]||"":"none");return a}function V(a,b,c){return((a=ha.exec(b))?Math.max(0,a[1]-(c||0))+(a[2]||"px"):b)}function W(a,b,c,g,e){b=(c===(g?"border":"content")?4:("width"===b?1:0));for(var f=0;4>b;b+=2)"margin"===c&&(f+=d.css(a,c+q[b],!0,e)),(g?("content"===c&&(f-=d.css(a,"padding"+q[b],!0,e)),"margin"!==c&&(f-=d.css(a,"border"+q[b]+"Width",!0,e))):(f+=d.css(a,"padding"+q[b],!0,e),"padding"!==c&&(f+=d.css(a,"border"+q[b]+"Width",!0,e))));return f}function X(a,b,c){var g=
    !0,e=("width"===b?a.offsetWidth:a.offsetHeight),f=t(a),h=d.support.boxSizing&&"border-box"===d.css(a,"boxSizing",!1,f);if(0>=e||null==e){e=x(a,b,f);if(0>e||null==e)e=a.style[b];if(A.test(e))return e;g=h&&(d.support.boxSizingReliable||e===a.style[b]);e=parseFloat(e)||0}return e+W(a,b,c||(h?"border":"content"),g,f)+"px"}var ia={name:"animate",version:"1.0",init:function(){},uninit:function(){},module:I};I.prototype={init:function(){}};var d=function(){},F={},ja=F.toString,N=["Webkit","O","Moz","ms"],
    q=["Top","Right","Bottom","Left"],ka={position:"absolute",visibility:"hidden",display:"block"},G="1.10.2".trim,v=[],la=v.push,Y=v.indexOf,ma=v.concat,Z=(/^margin/),ha=RegExp("^("+u+")(.*)$","i"),A=RegExp("^("+u+")(?!px)[a-z%]+$","i"),$=RegExp("^([+-])=("+u+")","i"),na=(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),oa=(/^(none|table(?!-c[ea]).+)/),pa=(/^-ms-/),qa=(/-([\da-z])/gi),ea=(/\S+/g),H=(/alpha\([^)]*\)/i),ra=(/opacity\s*=\s*([^)]*)/),aa=(/^(top|right|bottom|left)$/),sa=function(a,b){return b.toUpperCase()};d.extend=
    function(){var a,b,c,g,e,f=arguments[0]||{},h=1,k=arguments.length,l=!1;"boolean"===typeof f&&(l=f,f=arguments[1]||{},h=2);"object"!==typeof f&&!d.isFunction(f)&&(f={});k===h&&(f=this,--h);for(;h<k;h++)if(null!=(e=arguments[h]))for(g in e)a=f[g],c=e[g],f!==c&&(l&&c&&(d.isPlainObject(c)||(b=d.isArray(c)))?((b?(b=!1,a=(a&&d.isArray(a)?a:[])):a=(a&&d.isPlainObject(a)?a:{})),f[g]=d.extend(l,a,c)):void 0!==c&&(f[g]=c));return f};d.extend({expando:"miniQuery"+("1.10.2"+Math.random()).replace((/\D/g),"")});d.extend({now:function(){return(new Date).getTime()},
    swap:function(a,b,c,d){var e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];c=c.apply(a,d||[]);for(e in b)a.style[e]=f[e];return c},noop:function(){},guid:1,trim:(G&&!G.call("\ufeff\u00a0")?function(a){return (null==a?"":G.call(a))}:function(a){return (null==a?"":(a+"").replace(na,""))}),makeArray:function(a,b){var c=b||[];null!=a&&(C(Object(a))?d.merge(c,("string"===typeof a?[a]:a)):la.call(c,a));return c},map:function(a,b,c){var d,e=0,f=a.length,h=[];if(C(a))for(;e<f;e++)d=b(a[e],e,c),null!=d&&(h[h.length]=
        d);else for(e in a)d=b(a[e],e,c),null!=d&&(h[h.length]=d);return ma.apply([],h)},inArray:function(a,b,c){var d;if(b){if(Y)return Y.call(b,a,c);d=b.length;for(c=(c?(0>c?Math.max(0,d+c):c):0);c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=b.length,d=a.length,e=0;if("number"===typeof c)for(;e<c;e++)a[d++]=b[e];else for(;void 0!==b[e];)a[d++]=b[e++];a.length=d;return a},isFunction:function(a){return"function"===d.type(a)},isArray:Array.isArray||function(a){return"array"===d.type(a)},
    isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},isPlainObject:cQuery.isPlainObject,isEmptyObject:function(a){for(var b in a)return!1;return!0},type:function(a){return (null==a?String(a):("object"===typeof a||"function"===typeof a?F[ja.call(a)]||"object":typeof a))},each:function(a,b,c){var d,e=0,f=a.length;d=C(a);if(c)if(d)for(;e<f&&!(d=b.apply(a[e],c),!1===d);e++);else for(e in a){if(d=b.apply(a[e],c),!1===d)break}else if(d)for(;e<f&&
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        !(d=b.call(a[e],e,a[e]),!1===d);e++);else for(e in a)if(d=b.call(a[e],e,a[e]),!1===d)break;return a},camelCase:function(a){return a.replace(pa,"ms-").replace(qa,sa)}});var J={};d.Callbacks=function(a){a=("string"===typeof a?J[a]||da(a):d.extend({},a));var b,c,g,e,f,h,k=[],l=!a.once&&[],n=function(d){c=a.memory&&d;g=!0;f=h||0;h=0;e=k.length;for(b=!0;k&&f<e;f++)if(!1===k[f].apply(d[0],d[1])&&a.stopOnFalse){c=!1;break}b=!1;k&&(l?l.length&&n(l.shift()):(c?k=[]:p.disable()))},p={add:function(){if(k){var f=
        k.length;(function r(b){d.each(b,function(b,c){var e=d.type(c);("function"===e?(!a.unique||!p.has(c))&&k.push(c):c&&(c.length&&"string"!==e)&&r(c))})})(arguments);(b?e=k.length:c&&(h=f,n(c)))}return this},remove:function(){k&&d.each(arguments,function(a,c){for(var g;-1<(g=d.inArray(c,k,g));)k.splice(g,1),b&&(g<=e&&e--,g<=f&&f--)});return this},has:function(a){return (a?-1<d.inArray(a,k):!(!k||!k.length))},empty:function(){k=[];e=0;return this},disable:function(){k=l=c=void 0;return this},disabled:function(){return!k},
    lock:function(){l=void 0;c||p.disable();return this},locked:function(){return!l},fireWith:function(a,c){if(k&&(!g||l))c=c||[],c=[a,(c.slice?c.slice():c)],(b?l.push(c):n(c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!g}};return p};d.extend({Deferred:function(a){var b=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],c="pending",g={state:function(){return c},
        always:function(){e.done(arguments).fail(arguments);return this},then:function(){var a=arguments;return d.Deferred(function(c){d.each(b,function(b,l){var n=l[0],p=d.isFunction(a[b])&&a[b];e[l[1]](function(){var a=p&&p.apply(this,arguments);if(a&&d.isFunction(a.promise))a.promise().done(c.resolve).fail(c.reject).progress(c.notify);else c[n+"With"]((this===g?c.promise():this),(p?[a]:arguments))})});a=null}).promise()},promise:function(a){return (null!=a?d.extend(a,g):g)}},e={};g.pipe=g.then;d.each(b,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d){var k=d[2],l=d[3];g[d[1]]=k.add;l&&k.add(function(){c=l},b[a^1][2].disable,b[2][2].lock);e[d[0]]=function(){e[d[0]+"With"]((this===e?g:this),arguments);return this};e[d[0]+"With"]=k.fireWith});g.promise(e);a&&a.call(e,e);return e},when:function(a){var b=0,c=core_slice.call(arguments),g=c.length,e=(1!==g||a&&d.isFunction(a.promise)?g:0),f=(1===e?a:d.Deferred()),h=function(a,c,b){return function(d){c[a]=this;b[a]=(1<arguments.length?core_slice.call(arguments):d);(b===k?f.notifyWith(c,b):--e||f.resolveWith(c,
        b))}},k,l,n;if(1<g){k=Array(g);l=Array(g);for(n=Array(g);b<g;b++)(c[b]&&d.isFunction(c[b].promise)?c[b].promise().done(h(b,n,c)).fail(f.reject).progress(h(b,l,k)):--e)}e||f.resolveWith(n,c);return f.promise()}});d.support=function(a){var b,c,g,e=document.createElement("div");e.setAttribute("className","t");e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";b=e.getElementsByTagName("*")||[];c=e.getElementsByTagName("a")[0];if(!c||!c.style||!b.length)return a;c.style.cssText=
    "top:1px;float:left;opacity:.5";a.cssFloat=!!c.style.cssFloat;e.style.backgroundClip="content-box";e.cloneNode(!0).style.backgroundClip="";a.clearCloneStyle="content-box"===e.style.backgroundClip;a.inlineBlockNeedsLayout=!1;a.shrinkWrapBlocks=!1;a.deleteExpando=!0;a.boxSizingReliable=!0;a.opacity=(/^0.5/).test(c.style.opacity);try{delete e.test}catch(f){a.deleteExpando=!1}cQuery(function(){var c,b,f=document.getElementsByTagName("body")[0];f&&(c=document.createElement("div"),c.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
    f.appendChild(c).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",g=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",a.reliableHiddenOffsets=g&&0===b[0].offsetHeight,e.innerHTML="",e.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
window.getComputedStyle&&(a.pixelPosition="1%"!==(window.getComputedStyle(e,null)||{}).top,a.boxSizingReliable="4px"===(window.getComputedStyle(e,null)||{width:"4px"}).width),"undefined"!==typeof e.style.zoom&&(e.innerHTML="",e.style.cssText="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1",a.inlineBlockNeedsLayout=3===e.offsetWidth,e.style.display="block",e.innerHTML="<div></div>",
    e.firstChild.style.width="5px",a.shrinkWrapBlocks=3!==e.offsetWidth),f.removeChild(c),d.swap(f,(null!=f.style.zoom?{zoom:1}:{}),function(){a.boxSizing=4===e.offsetWidth}),c=e=b=null)});b=c=null;return a}({});d.extend({cleanData:function(a,b){for(var c,g,e,f,h=0,k=d.expando,l=d.cache,n=d.support.deleteExpando;null!=(c=a[h]);h++)if(b||d.acceptData(c))if(f=(e=c[k])&&l[e]){if(f.events)for(g in f.events)d.removeEvent(c,g,f.handle);l[e]&&(delete l[e],(n?delete c[k]:("undefined"!==typeof c.removeAttribute?c.removeAttribute(k):
        c[k]=null)),v.push(e))}},cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){a=(a.nodeType?d.cache[a[d.expando]]:a[d.expando]);return!!a&&!D(a)},data:function(a,b,c){return L(a,b,c)},removeData:function(a,b){return K(a,b)},_data:function(a,b,c){return L(a,b,c,!0)},_removeData:function(a,b){return K(a,b,!0)},acceptData:function(a){if(a.nodeType&&1!==a.nodeType&&9!==a.nodeType)return!1;var b=a.nodeName&&d.noData[a.nodeName.toLowerCase()];return!b||
        !0!==b&&a.getAttribute("classid")===b}});var t,x,u=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source,aa=(/^(top|right|bottom|left)$/),A=RegExp("^("+u+")(?!px)[a-z%]+$","i"),$=RegExp("^([+-])=("+u+")","i");(window.getComputedStyle?(t=function(a){return window.getComputedStyle(a,null)},x=function(a,b,c){var g,e=((c=c||t(a))?c.getPropertyValue(b)||c[b]:void 0),f=a.style;c&&(""===e&&!Sizzle.contains(a.ownerDocument,a)&&(e=d.style(a,b)),A.test(e)&&Z.test(b)&&(a=f.width,b=f.minWidth,g=f.maxWidth,f.minWidth=f.maxWidth=
    f.width=e,e=c.width,f.width=a,f.minWidth=b,f.maxWidth=g));return e}):document.documentElement.currentStyle&&(t=function(a){return a.currentStyle},x=function(a,b,c){var d,e,f=((c=c||t(a))?c[b]:void 0),h=a.style;null==f&&(h&&h[b])&&(f=h[b]);if(A.test(f)&&!aa.test(b)){c=h.left;if(e=(d=a.runtimeStyle)&&d.left)d.left=a.currentStyle.left;h.left=("fontSize"===b?"1em":f);f=h.pixelLeft+"px";h.left=c;e&&(d.left=e)}return(""===f?"auto":f)}));d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=x(a,"opacity");
                return(""===c?"1":c)}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":(d.support.cssFloat?"cssFloat":"styleFloat")},style:function(a,b,c,g){if(a&&!(3===a.nodeType||8===a.nodeType||!a.style)){var e,f,h,k=d.camelCase(b),l=a.style;b=d.cssProps[k]||(d.cssProps[k]=M(l,k));h=d.cssHooks[b]||d.cssHooks[k];if(void 0!==c){f=typeof c;if("string"===f&&(e=$.exec(c)))c=(e[1]+1)*e[2]+parseFloat(d.css(a,b)),f="number";
        if(!(null==c||"number"===f&&isNaN(c)))if("number"===f&&!d.cssNumber[k]&&(c+="px"),!d.support.clearCloneStyle&&(""===c&&0===b.indexOf("background"))&&(l[b]="inherit"),!h||!("set"in h)||void 0!==(c=h.set(a,c,g)))try{l[b]=c}catch(n){}}else return (h&&"get"in h&&void 0!==(e=h.get(a,!1,g))?e:l[b])}},css:function(a,b,c,g){var e,f;f=d.camelCase(b);b=d.cssProps[f]||(d.cssProps[f]=M(a.style,f));(f=d.cssHooks[b]||d.cssHooks[f])&&"get"in f&&(e=f.get(a,!0,c));void 0===e&&(e=x(a,b,g));"normal"===e&&b in cssNormalTransform&&
    (e=cssNormalTransform[b]);return(""===c||c?(a=parseFloat(e),(!0===c||d.isNumeric(a)?a||0:e)):e)}});d.easing={linear:function(a){return a},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2}};d.Tween=m;m.prototype={constructor:m,init:function(a,b,c,g,e,f){this.elem=a;this.prop=c;this.easing=e||"swing";this.options=b;this.start=this.now=this.cur();this.end=g;this.unit=f||(d.cssNumber[c]?"":"px")},cur:function(){var a=m.propHooks[this.prop];return (a&&a.get?a.get(this):m.propHooks._default.get(this))},run:function(a){var b,
        c=m.propHooks[this.prop];this.pos=(this.options.duration?b=d.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):b=a);this.now=(this.end-this.start)*b+this.start;this.options.step&&this.options.step.call(this.elem,this.now,this);(c&&c.set?c.set(this):m.propHooks._default.set(this));return this}};m.prototype.init.prototype=m.prototype;m.propHooks={_default:{get:function(a){if(null!=a.elem[a.prop]&&(!a.elem.style||null==a.elem.style[a.prop]))return a.elem[a.prop];a=d.css(a.elem,a.prop,
            "");return(!a||"auto"===a?0:a)},set:function(a){if(d.fx.step[a.prop])d.fx.step[a.prop](a);else (a.elem.style&&(null!=a.elem.style[d.cssProps[a.prop]]||d.cssHooks[a.prop])?d.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now)}}};m.propHooks.scrollTop=m.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}};d.timers=[];d.fx=m.prototype.init;d.fx.tick=function(){var a,b=d.timers,c=0;for(s=d.now();c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||
d.fx.stop();s=void 0};d.fx.timer=function(a){a()&&d.timers.push(a)&&d.fx.start()};d.fx.interval=13;d.fx.start=function(){B||(B=setInterval(d.fx.tick,d.fx.interval))};d.fx.stop=function(){clearInterval(B);B=null};d.fx.speeds={slow:600,fast:200,_default:400};d.fx.step={};d.extend({queue:function(a,b,c){var g;if(a)return b=(b||"fx")+"queue",g=d._data(a,b),c&&(!g||d.isArray(c)?g=d._data(a,b,d.makeArray(c)):g.push(c)),g||[]},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),g=c.length,e=c.shift(),f=d._queueHooks(a,
        b),h=function(){d.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),g--);e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,h,f));!g&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return d._data(a,c)||d._data(a,c,{empty:d.Callbacks("once memory").add(function(){d._removeData(a,b+"queue");d._removeData(a,c)})})}});d.speed=function(a,b,c){var g=(a&&"object"===typeof a?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b});g.duration=
    (d.fx.off?0:("number"===typeof g.duration?g.duration:(g.duration in d.fx.speeds?d.fx.speeds[g.duration]:d.fx.speeds._default)));if(null==g.queue||!0===g.queue)g.queue="fx";g.old=g.complete;g.complete=function(){d.isFunction(g.old)&&g.old.call(this);g.queue&&d.dequeue(this,g.queue)};return g};"Boolean Number String Function Array Date RegExp Object Error".split(" ").each(function(a,b){F["[object "+a+"]"]=a.toLowerCase()});var P={BODY:"block"},w,s,B,ta=(/^(?:toggle|show|hide)$/),ba=RegExp("^(?:([+-])=|)("+
    u+")([a-z%]*)$","i"),U=[function(a,b,c){var g,e,f,h,k,l,n=this,p={},m=a.style,q=a.nodeType&&y(a),r=d._data(a,"fxshow");c.queue||(k=d._queueHooks(a,"fx"),null==k.unqueued&&(k.unqueued=0,l=k.empty.fire,k.empty.fire=function(){k.unqueued||l()}),k.unqueued++,n.always(function(){n.always(function(){k.unqueued--;d.queue(a,"fx").length||k.empty.fire()})}));if(1===a.nodeType&&("height"in b||"width"in b))c.overflow=[m.overflow,m.overflowX,m.overflowY],"inline"===d.css(a,"display")&&"none"===d.css(a,"float")&&
(!d.support.inlineBlockNeedsLayout||"inline"===O(a.nodeName)?m.display="inline-block":m.zoom=1);c.overflow&&(m.overflow="hidden",d.support.shrinkWrapBlocks||n.always(function(){m.overflow=c.overflow[0];m.overflowX=c.overflow[1];m.overflowY=c.overflow[2]}));for(g in b)if(e=b[g],ta.exec(e)&&(delete b[g],f=f||"toggle"===e,e!==(q?"hide":"show")))p[g]=r&&r[g]||d.style(a,g);d.isEmptyObject(p)||((r?"hidden"in r&&(q=r.hidden):r=d._data(a,"fxshow",{})),f&&(r.hidden=!q),(q?cQuery(a).mini_show():n.done(function(){cQuery(a).mini_hide()})),
    n.done(function(){d._removeData(a,"fxshow");for(var c in p)d.style(a,c,p[c])}),function(){for(var a in p)h=S((q?r[a]:0),a,n),a in r||(r[a]=h.start,q&&(h.end=h.start,h.start=("width"===a||"height"===a?1:0)))}())}],T={"*":[function(a,b){var c=this.createTween(a,b),g=c.cur(),e=ba.exec(b),f=e&&e[3]||(d.cssNumber[a]?"":"px"),h=(d.cssNumber[a]||"px"!==f&&+g)&&ba.exec(d.css(c.elem,a)),k=1,l=20;if(h&&h[3]!==f){f=f||h[3];e=e||[];h=+g||1;do k=k||".5",h/=k,d.style(c.elem,a,h+f);while(k!==(k=c.cur()/g)&&1!==k&&--l)}e&&
    (h=c.start=+h||+g||0,c.unit=f,c.end=(e[1]?h+(e[1]+1)*e[2]:+e[2]));return c}]};d.extend(cQuery.fn,{mini_show:function(){return z(this,!0)},mini_hide:function(){return z(this)},show:function(){return z(this,!0)},hide:function(){return z(this)},mini_each:function(a,b){return d.each(this,a,b)},mini_queue:function(a,b){var c=2;"string"!==typeof a&&(b=a,a="fx",c--);return (arguments.length<c?d.queue(this[0],a):(void 0===b?this:this.mini_each(function(){var c=d.queue(this,a,b);d._queueHooks(this,a);"fx"===a&&
    "inprogress"!==c[0]&&d.dequeue(this,a)})))},animate:function(a,b,c,g){var e=d.isEmptyObject(a),f=d.speed(b,c,g);b=function(){var c=fa(this,d.extend({},a),f);(e||d._data(this,"finish"))&&c.stop(!0)};b.finish=b;return (e||!1===f.queue?this.mini_each(b):this.mini_queue(f.queue,b))},toggle:function(a){return("boolean"===typeof a?(a?this.mini_show():this.mini_hide()):this.mini_each(function(){(y(this)?cQuery(this).mini_show():cQuery(this).mini_hide())}))}});d.each(["height","width"],function(a,b){d.cssHooks[b]=
    {get:function(a,g,e){if(g)return (0===a.offsetWidth&&oa.test(d.css(a,"display"))?d.swap(a,ka,function(){return X(a,b,e)}):X(a,b,e))},set:function(a,g,e){var f=e&&t(a);return V(a,g,(e?W(a,b,e,d.support.boxSizing&&"border-box"===d.css(a,"boxSizing",!1,f),f):0))}}});d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return (ra.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":(b?"1":""))},set:function(a,b){var c=a.style,g=a.currentStyle,e=(d.isNumeric(b)?
        "alpha(opacity="+100*b+")":""),f=g&&g.filter||c.filter||"";c.zoom=1;if((1<=b||""===b)&&""===d.trim(f.replace(H,""))&&c.removeAttribute)if(c.removeAttribute("filter"),""===b||g&&!g.filter)return;c.filter=(H.test(f)?f.replace(H,e):f+" "+e)}});d.each({margin:"",padding:"",border:"Width"},function(a,b){d.cssHooks[a+b]={expand:function(c){var d=0,e={};for(c=("string"===typeof c?c.split(" "):[c]);4>d;d++)e[a+q[d]+b]=c[d]||c[d-2]||c[0];return e}};Z.test(a)||(d.cssHooks[a+b].set=V)});d.each({slideDown:E("show"),
    slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){cQuery.fn[a]=function(a,d,e){return this.animate(b,a,d,e)}});ca.mod.reg(ia)})(cQuery);