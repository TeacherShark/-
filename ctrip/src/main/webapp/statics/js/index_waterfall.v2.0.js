/* 2018-08-01 23:33:20 j.zhou */
$(function(a){a.fn.lpMasonry=function(b){b=a.extend({cellspace:15,cols:4,cellwidth:226,cellele:"div.item",url:"",ajaxpage:1,loading:"#fall-loading",pagesize:16},b);return this.each(function(){var e=[],d=0,h=b.cellwidth+b.cellspace,c=a(this),f=this,l=b.loading,m=b.ajaxpage,k=!1,n=a.browser.msie;this.position=function(a){for(var f=a.outerHeight(!0),p=Math.min.apply(Math,e),g=0,k=b.cols;g<k;g++)if(e[g]===p){a.css({position:"absolute",left:g*h,top:e[g],opacity:!n&&0}).attr({"data-index":d,col:g});e[g]+=
f;break}!n&&this.animate({opacity:1},300);c.height(Math.max.apply(Math,e));d++};this.add=function(){var d=b.pagesize;a.ajax({type:"GET",url:b.url,data:a.extend({p:m},b.data||{}),success:function(b){var e=a(b).appendTo(c).css({opacity:!a.browser.msie&&0}),g=1;a(l).hide();e.each(function(){f.position.call(e,a(this));g++});g<d?k=!0:(m++,k=!1)}})};a(window).scroll(function(){!k&&c.offset().top+c.height()-600<a(document).scrollTop()+a(window).height()&&(a(l).show(),f.add(),k=!0)});this.init=function(){var d=
c.find(b.cellele);c.css({position:"relative"});for(var h=0,k=b.cols;h<k;h++)e[h]=0;0<d.length?d.each(function(){f.position.call(d,a(this))}):f.add()}()})}});
(function(a){a.fn.imgloaded=function(b){b=a.extend({srcAttr:"",errorSrc:"http://you.ctrip.com/newimg/nophoto.jpg",width:"",height:""},b);return this.each(function(){var e=a(this).attr(b.srcAttr||"realSrc")||"",d=this;e&&new imgReadyObj(e,function(){var a=this.width/this.height;a>=b.width/b.height?(d.height=b.height,d.width=b.height*a):(d.width=b.width,d.height=b.width/a);"function"===typeof b.readyCallback&&setTimeout(function(){b.readyCallback.call(d)},10)},function(){d.src=e;"function"===typeof b.loadCallback&&
setTimeout(function(){b.loadCallback.call(d)},10)},function(){d.src=b.errorSrc;"function"===typeof b.errorCallback&&b.errorCallback.call(d)})})}})(jQuery);function imgReadyObj(a,b,e,d){this.arrfn=[];this.intervalId=null;this.url=a;this.ready=b;this.load=e;this.error=d;this.inte()}
imgReadyObj.prototype={exec:function(){this.arrfn[0].end?this.arrfn.length=0:this.arrfn[0]();!this.arrfn.length&&this.stop()},stop:function(){clearInterval(this.intervalId);this.intervalId=null},inte:function(){var a,b,e,d,h,c=new Image,f=this;c.src=this.url;c.complete?(this.ready.call(c),this.load&&this.load.call(c)):(b=c.width,e=c.height,c.onerror=function(){f.error&&f.error.call(c);a.end=!0;c=c.onload=c.onerror=null},a=function(){d=c.width;h=c.height;if(d!==b||h!==e||1024<d*h)f.ready.call(c),a.end=
!0},c.onload=function(){!a.end&&a();f.load&&f.load.call(c);c=c.onload=c.onerror=null},c.src=this.url,a.end||(f.arrfn.push(a),null===this.intervalId&&(this.intervalId=setInterval(function(){f.exec.apply(f)},40))))}};
