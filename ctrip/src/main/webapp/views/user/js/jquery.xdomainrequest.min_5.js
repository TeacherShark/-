!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){if(e.support.cors||!e.ajaxTransport||!window.XDomainRequest)return e;var t=/^(https?:)?\/\//i,n=/^get|post$/i,o=new RegExp("^(//|"+location.protocol+")","i");return e.ajaxTransport("* text html xml json",function(r,s,a){if(r.crossDomain&&r.async&&n.test(r.type)&&t.test(r.url)&&o.test(r.url)){var i=null;return{send:function(t,n){var o="",a=(s.dataType||"").toLowerCase();i=new XDomainRequest,/^\d+$/.test(s.timeout)&&(i.timeout=s.timeout),i.ontimeout=function(){n(500,"timeout")},i.onload=function(){var t="Content-Length: "+i.responseText.length+"\r\nContent-Type: "+i.contentType,o={code:200,message:"success"},r={text:i.responseText};try{if("html"===a||/text\/html/i.test(i.contentType))r.html=i.responseText;else if("json"===a||"text"!==a&&/\/json/i.test(i.contentType))try{r.json=e.parseJSON(i.responseText)}catch(c){o.code=500,o.message="parseerror"}else if("xml"===a||"text"!==a&&/\/xml/i.test(i.contentType)){var s=new ActiveXObject("Microsoft.XMLDOM");s.async=!1;try{s.loadXML(i.responseText)}catch(c){s=undefined}if(!s||!s.documentElement||s.getElementsByTagName("parsererror").length)throw o.code=500,o.message="parseerror","Invalid XML: "+i.responseText;r.xml=s}}catch(p){throw p}finally{n(o.code,o.message,r,t)}},i.onprogress=function(){},i.onerror=function(){n(500,"error",{text:i.responseText})},s.data&&(o="string"===e.type(s.data)?s.data:e.param(s.data)),i.open(r.type,r.url),i.send(o)},abort:function(){i&&i.abort()}}}}),e});