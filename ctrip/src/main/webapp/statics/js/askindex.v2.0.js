/* 2015-03-10 14:40:45 r_zou */
$(function(){function f(){$("#asktop_ssinput").placeholder();$("body").append('<div id="asktitle_sspop" class="asktitle_sspop"><div class="sspop_ajax"></div><div class="sspop_tag cf"></div><a class="sspop_blink" title="" href="javascript:;" target="_blank">\u641c\u7d22\u66f4\u591a\u5173\u4e8e\u201c<b></b>\u201d<i class="icon_rightarrow"></i></a></div>');$("#asktop_ssinput").keyup(function(a){0<=$(this).val().indexOf("<script>")&&$(this).val($(this).val().replace(/<script>/g,"\uff1cscript\uff1e"));
var b=$("#asktitle_sspop");$(this);var e=$(this).val(),h=ASKSEARCH_API.AskSiteLink+"?keywords="+encodeURIComponent(e);b.find(".sspop_blink").find("b").html(e);b.find(".sspop_blink").attr("title","\u641c\u7d22\u66f4\u591a\u5173\u4e8e\u201c"+e+"\u201d");b.find(".sspop_blink").attr({href:h});if(""!=$.trim(e))switch(a.keyCode){case 40:b.find(".current").index()==b.find(".sspop_ajax").find("a").length-1?(a=b.find(".current"),a.removeClass("current"),b.find("a").eq(0).addClass("current")):0<b.find(".current").length?
(a=b.find(".current"),a.next("a").addClass("current"),a.removeClass("current")):b.find("a").eq(0).addClass("current");break;case 38:b.find(".current").hasClass("sspop_blink")?(a=b.find(".current"),b.find("a").eq(b.find(".sspop_ajax").find("a").length-1).addClass("current"),a.removeClass("current")):0==b.find(".current").index()?b.find(".current").removeClass("current"):0<b.find(".current").length&&(a=b.find(".current"),a.prev("a").addClass("current"),a.removeClass("current"));break;case 13:a=0<b.find(".current").length?
b.find(".current").attr("href"):ASKSEARCH_API.AskSiteLink+"?keywords="+encodeURIComponent(e);window.location.href=a;break;case 27:b.fadeOut(300);break;default:clearTimeout(g),g=setTimeout(function(){if(c[e]){var a=$("#asktop_ssinput").offset();b.css({top:a.top+40,left:a.left}).fadeIn(300);b.find(".sspop_ajax").html("");a="";for(i=0;i<c[e].Asks.length;i++)a=a+'<a target="_blank" title="'+c[e].Asks[i].HighlighterTitle+'" href="'+c[e].Asks[i].AskLinkUrl+'"><span class="asktitle">'+c[e].Asks[i].AskTitle+
'</span><span class="answernum">'+c[e].Asks[i].ReplyCount+"\u56de\u7b54</span></a>";b.find(".sspop_ajax").html(a);if(null!=c[e].MatchTags){a='<span class="lefttitle">\u76f8\u5173\u8bdd\u9898</span>';b.find(".sspop_tag").html("");for(i=0;i<c[e].MatchTags.length;i++)a=a+'<a class="asktag_item" target="_blank" title="'+c[e].MatchTags[i].TagName+'" href="'+c[e].TagAggregateLink+'"><span>'+c[e].MatchTags[i].TagName+"</span></a>";b.find(".sspop_tag").show().html(a)}else b.find(".sspop_tag").hide()}else $.getJSON(ASKSEARCH_API.GetAskSearch+
"&Jsoncallback=?",{Keyword:encodeURIComponent(e)},function(a){if(void 0!=a){var d=$("#asktop_ssinput").offset();b.css({top:d.top+40,left:d.left}).fadeIn(300);b.find(".sspop_ajax").html("");d="";for(i=0;i<a.Asks.length;i++)d=d+'<a target="_blank" title="'+a.Asks[i].HighlighterTitle+'" href="'+a.Asks[i].AskLinkUrl+'"><span class="asktitle">'+a.Asks[i].AskTitle+'</span><span class="answernum">'+a.Asks[i].ReplyCount+"\u56de\u7b54</span></a>";b.find(".sspop_ajax").html(d);if(null!=a.MatchTags){d='<span class="lefttitle">\u76f8\u5173\u8bdd\u9898</span>';
b.find(".sspop_tag").html("");for(i=0;i<a.MatchTags.length;i++)d=d+'<a class="asktag_item" target="_blank" title="'+a.MatchTags[i].TagName+'" href="'+a.TagAggregateLink+'"><span>'+a.MatchTags[i].TagName+"</span></a>";b.find(".sspop_tag").show().html(d)}else b.find(".sspop_tag").hide();c[e]={};c[e]=a}else b.find(".sspop_ajax").html(""),b.find(".sspop_tag").html(""),b.fadeOut(300)})},200)}else clearTimeout(g),b.fadeOut(300)})}var g=0,c={};0<$("#asktop_ssinput").length&&f();$(".asksearch .askss_button").click(function(){var a=
$("#asktop_ssinput").val();if(""==a.replace(/(^\s*)|(\s*$)/g,"")||"\u63d0\u95ee\u524d\u4e0d\u59a8\u5148\u641c\u7d22\u4e0b\uff0c\u770b\u770b\u4f60\u7684\u95ee\u9898\u662f\u5426\u5df2\u7ecf\u6709\u4eba\u8be2\u95ee\u8fc7"==a)return!1;a=ASKSEARCH_API.AskSiteLink+"?keywords="+encodeURIComponent(a);window.location.href=a});$(".abouttdd").on("click",".abouttdd ul li h3",function(){$this=$(this);$this.addClass("cur");$this.parent("li").siblings("li").find("h3").removeClass("cur");$this.siblings(".abouttdd_licon").slideDown(300);
$this.parent("li").siblings("li").find(".abouttdd_licon").slideUp(300)});$(".abouttdd").on("click",".tddcitytab_t a",function(){$(this).addClass("on").siblings().removeClass("on");$(this).parent().siblings(".tddcitytab_c").hide();$(this).parent().siblings(".tddcitytab_c").eq($(this).index()).fadeIn(300)});$("body").on("mouseenter",".asklist li",function(){$(this).addClass("on");$(this).find(".asktag_item").addClass("listhover")}).on("mouseleave",".asklist li",function(){$(this).removeClass("on");
$(this).find(".asktag_item").removeClass("listhover")}).on("click",".asklist li,.asklist .asktag_item,.asklist .ask_user",function(){window.open($(this).attr("data-href"));return!1});$.pageLinkJump=function(a){a=$(".pager_v1 input").val();askpageJump({pageNum:a})}});
(function(f){f.pageEventBind=function(){function g(a){""==a||a>c?b():f.pageLinkJump&&f.pageLinkJump()}var c=parseInt(f(".pager_v1").find(".numpage").text()),a=f(".pager_v1").find("span input"),b=function(){var b=a.clone(),h=a.offset(),d=0;a.css("visibility","hidden");b.css({position:"absolute",top:h.top+"px",left:h.left+"px",width:"18px",height:"16px",border:"1px solid #ccc"}).appendTo("body");var c=setInterval(function(){d++;b.css({top:h.top+2*Math.sin(d)+"px",left:h.left+1*Math.cos(d)+"px"});15==
d&&(clearInterval(c),a.css("visibility","visible"),b.remove())},30)};a.keyup(function(a){var b=f(this).val();/\D/g.test(b)&&f(this).val("");13==a.keyCode&&g(b)}).parent("span").siblings(".gopage").click(function(){var b=a.val();g(b)})};f.pageEventBind()})(jQuery);
$(function(){$(".askgx_list .title .askgx_w").click(function(){$(this).hasClass("on")||($(this).addClass("on").siblings("a").removeClass("on"),$(this).parent().siblings("ul").hide(),$(this).parent().siblings("ul").eq(1).fadeIn(300),250<$(".askgx_list").width()?$(this).siblings(".onarrow").animate({left:"196px"},300):$(this).siblings(".onarrow").animate({left:"146px"},300))});$(".askgx_list .title .askgx_y").click(function(){$(this).hasClass("on")||($(this).addClass("on").siblings("a").removeClass("on"),
$(this).parent().siblings("ul").hide(),$(this).parent().siblings("ul").eq(0).fadeIn(300),250<$(".askgx_list").width()?$(this).siblings(".onarrow").animate({left:"249px"},300):$(this).siblings(".onarrow").animate({left:"199px"},300))});var f=$(".askcontent .abouttdd"),g=$(".side");ttdObjFixed=function(c){if(0==f.length)return!1;var a=f.outerHeight(),b=g.outerHeight(),e=0<$(".footerseo").length?$(".footerseo").offset().top:$(".footgray").offset().top;c>g.offset().top+b&&c<=e-80-a?f[0].style.cssText=
"position:fixed;top:70px;left:"+g.offset().left+";z-index:10;":c<g.offset().top+b?f[0].style.cssText="":c>e-80-a&&(f[0].style.cssText="position:absolute;top:"+(e-g.offset().top-a-30)+"px;right:0;z-index:10;")};$.browser.msie&&"6.0"==$.browser.version||$(window).scroll(function(){var c=$(window).scrollTop();ttdObjFixed(c)});$(window).resize(function(){var c=$(window).scrollTop();ttdObjFixed(c)})});
$(function(){var f=0,g={},c=$("#addgoodat_input"),a=$("#goodadtag_sspop");c.keyup(function(b){var d=$(this);GS.xssFilter(d.val());var c=d.val();if(c)switch(b.keyCode){case 40:0<a.find(".current").length?(d=a.find(".current"),0<d.next("a").length?d.next("a").addClass("current"):a.find("a").eq(0).addClass("current"),d.removeClass("current")):a.find("a").eq(0).addClass("current");break;case 38:0==a.find(".current").index()?(d=a.find(".current"),d.removeClass("current")):0<a.find(".current").length&&
(d=a.find(".current"),d.prev("a").addClass("current"),d.removeClass("current"));break;case 13:b=d.parents(".addgoodad_block").siblings(".asktag_show").length;if(20<=b)$.gs_alert({text:'<p style="color:#333;">\u6700\u591a\u53ef\u4ee5\u6dfb\u52a020\u4e2a\u64c5\u957f\u6807\u7b7e</p>'});else{if(0<a.find(".current").length){var e=$.trim(a.find(".current").text()),k=a.find(".current").attr("data-tagid");for(i=0;i<b;i++)if(d.parents(".addgoodad_block").siblings(".asktag_show").eq(i).text()==e)return $.gs_alert({text:'<p style="color:#333;">\u4e0d\u80fd\u6dfb\u52a0\u76f8\u540c\u6807\u7b7e</p>'}),
a.html(""),!1;b='<span data-tagid="'+k+'" class="asktag_show"><b class="asktagtext"><span>'+e+'</span><a class="delasktag" href="javascript:;"></a></b></span>';d.parents(".addgoodad_block").before(b)}else if(0<a.find("a").eq(0).length){e=$.trim(a.find("a").eq(0).text());k=a.find("a").eq(0).attr("data-tagid");for(i=0;i<b;i++)if(d.parents(".addgoodad_block").siblings(".asktag_show").eq(i).text()==e)return $.gs_alert({text:'<p style="color:#333;">\u4e0d\u80fd\u6dfb\u52a0\u76f8\u540c\u6807\u7b7e</p>'}),
a.html(""),!1;b='<span data-tagid="'+k+'" class="asktag_show"><b class="asktagtext"><span>'+e+'</span><a class="delasktag" href="javascript:;"></a></b></span>';d.parents(".addgoodad_block").before(b)}else return!1;d.val("");a.html("")}break;case 27:d.val("");a.html("");break;default:clearTimeout(f),$.trim(c)&&(f=setTimeout(function(){if(g[c]){a.html("");var b="";for(i=0;i<g[c].length;i++)b=b+"<a title='"+g[c][i].TagName+"' data-tagid= '"+g[c][i].TagId+"' href='javascript:;'>"+g[c][i].TagName+"</a>";
a.html(b)}else $.getJSON(INTERFACE.GetGoodatAskTagsByAdd+"&Jsoncallback=?",{Keyword:encodeURIComponent(c)},function(b){if(void 0!=b){c=$.trim(c);a.html("");var d="";for(i=0;i<b.length;i++)d=d+"<a title='"+b[i].TagName+"' data-tagid= '"+b[i].TagId+"' href='javascript:;'>"+b[i].TagName+"</a>";a.html(d);g[c]=[];g[c]=b}else a.html("")})},200))}else clearTimeout(f),a.html("")});a.on("click","a",function(){var b=$(".goodat_block .askgoodat_tag").find(".asktag_show").length;if(20<=b)$.gs_alert({text:'<p style="color:#333;">\u6700\u591a\u53ef\u4ee5\u6dfb\u52a020\u4e2a\u64c5\u957f\u6807\u7b7e</p>'});
else{var d=$.trim($(this).text()),e=$(this).attr("data-tagid"),d=d.replace("<","&lt;").replace(">","&gt;");for(i=0;i<b;i++)if($(".goodat_block .askgoodat_tag").find(".asktag_show").eq(i).text()==d)return $.gs_alert({text:'<p style="color:#333;">\u4e0d\u80fd\u6dfb\u52a0\u76f8\u540c\u6807\u7b7e</p>'}),a.html(""),!1;b='<span data-tagid="'+e+'" class="asktag_show"><b class="asktagtext"><span>'+d+'</span><a class="delasktag" href="javascript:;"></a></b></span>';c.parents(".addgoodad_block").before(b);
c.val("");c.placeholder();a.html("")}});var b=$(".goodat_block .askgoodat_tag").find(".asktag_show").length,e=[];for(i=0;i<b;i++)e[i]=$(".goodat_block .askgoodat_tag").find(".asktag_show").eq(i).attr("data-tagid");$(".goodat_block .goodat_savebtn").click(function(){var a=$(".goodat_block .askgoodat_tag").find(".asktag_show").length,b=[];for(i=0;i<a;i++)b[i]=$(".goodat_block .askgoodat_tag").find(".asktag_show").eq(i).attr("data-tagid");e.sort().toString()==b.sort().toString()?$.gs_alert({text:'<p style="color:#333;">\u64c5\u957f\u6807\u7b7e\u672a\u66f4\u6539</p>'}):
(e=b,INTERFACE.goodatSavaFn(b))});$(".goodat_block").on("click",".delasktag",function(){1==$(".goodat_block .askgoodat_tag").find(".asktag_show").length?$.gs_alert({text:'<p style="color:#333;">\u81f3\u5c11\u4fdd\u7559\u4e00\u4e2a\u64c5\u957f\u6807\u7b7e</p>'}):($(this).parent().parent().remove(),$(".addgoodad_block").show())});$(document).click(function(b){$(b.target).hasClass("asktitle_sspop")||$(b.target).hasClass("askss_input")?a.html(""):0<$(b.target).parents("addgoodad_block").length?$("#asktitle_sspop").hide():
($("#asktitle_sspop").hide(),a.html(""))})});
