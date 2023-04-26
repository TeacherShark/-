function clearInput(){$(":input").each(function(){var e=this.type;"text"==e||"password"==e||"hidden"==e?this.value="":"checkbox"==e&&(this.checked=!0)})}function selectCountry(e,t,s){var r={needSMS:1,countryCode:t.val(),countryName:s.val(),onSelect:function(r){t.val(r.code),s.val(r.cn),e.html(e.html()+"<a href='javascript:;' class='link_code'></a>")}};e.selectCountryCode(r)}function countDown(e,t,s,r){if(0==e)return void 0!=s&&(s.val()?s.val(e+(void 0!=r?r:"")):s.html(e+(void 0!=r?r:""))),void t();void 0!=s&&(s.val()?s.val(e+(void 0!=r?r:"")):s.html(e+(void 0!=r?r:"")));window.setTimeout(function(){countDown(--e,t,s,r)},1e3)}function checkMobile(e,t,s){var r=e.val(),n=s.val();return 0===r.length||"可用作登录名"===r?(e.addClass("input_error"),errShow(t,!0,getMessageTemplate("checkMobileResult").empty),!1):r.isMobile(n)?(e.removeClass("input_error"),errShow(t,!1,""),!0):(e.addClass("input_error"),errShow(t,!0,getMessageTemplate("checkMobileResult").wrong),!1)}function errShow(e,t,s){t?(e.css("display",""),e.html("<i></i>"+s)):(e.css("display","none"),e.html("<i></i>"+s))}function checkValcodeFormat(e,t){var s=t.val();return 0===s.length||"6位数字"===s?(e.removeClass("base_success"),e.addClass("base_error"),errShow(e,!0,getMessageTemplate("checkValcodeResult").empty),!1):6!==s.length?(e.removeClass("base_success"),e.addClass("base_error"),errShow(e,!0,getMessageTemplate("checkValcodeResult").wrong),!1):(errShow(e,!1,""),!0)}function loadSlider(e,t,s,r,n){slidObj=new slidingVerification({id:r,appId:slideAppId.gateway,businessSite:n,width:"300px",height:"40px",language:"zh-CN",chooseOpt:{width:"280px",height:"200px",type:"pop"},selectBeforeHandler:function(){},hideBgHandler:function(){},resultHandler:function(r){return"hidden"===r.checkState?(e.css("display","none"),t.val(r.token),void s.val(r.version)):"success"===r.checkState&&"success"===r.checkState?(t.val(r.token),void s.val(r.version)):void 0}})}function checkslider(e,t){return 0===t.val().length?(errShow(e,!0,getMessageTemplate("checkSliderResult").wrong),!1):(errShow(e,!1,""),!0)}function checkEmail(e,t){var s=e.val();return 0===s.length||"可用作登录名"===s?(errShow(t,!0,getMessageTemplate("checkEmailResult").empty),!1):checkIsEmail(s)?(errShow(t,!1,""),!0):(errShow(t,!0,getMessageTemplate("checkEmailResult").wrong),!1)}function checkIsEmail(e){return/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/.test(e)}function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}function checkIsPwd(e){return/^\S{8,20}$/.test(e)}function getRmsToken(){var e;return window.__rmsbfi=window.__rmsbfi||[],window.__rmsbfi.push(["_getRmsToken",function(t){e=t}],!1),e}function checkIsLoginName(e){return/^[-_0-9a-zA-Z@.]{4,}$/g.test(e)}function setPwdStrong(e,t,s,r){switch(e.removeClass(),t.removeClass(),s.removeClass(),r){case 1:e.addClass("curr");break;case 2:e.addClass("curr"),t.addClass("curr");break;case 3:e.addClass("curr"),t.addClass("curr"),s.addClass("curr")}}function checkPwdStrength(e,t,s,r,n){var a=e.val();if(0===a.length)setPwdStrong(s,r,n,0);else if(checkIsPwd(a)){var c=window.pwdLevel(a);if(1003==c)setPwdStrong(s,r,n,0);else{switch(c){case 1e3:setPwdStrong(s,r,n,1);break;case 1001:setPwdStrong(s,r,n,3);break;case 1002:setPwdStrong(s,r,n,2)}errShow(t,!1,"")}}}function checkPwd(e,t,s,r,n,a,c){var o=e.val(),l=t.val();return 0===o.length?(errShow(s,!0,getMessageTemplate("checkPwdResult").empty),setPwdStrong(n,a,c,0),!1):checkIsPwd(o)?1003==window.pwdLevel(o)?(errShow(s,!0,getMessageTemplate("checkPwdResult").simple),!1):(errShow(s,!1,""),0!==l.length&&l!==o?(errShow(r,!0,getMessageTemplate("checkPwdResult").inconsistent),!1):(errShow(r,!1,""),!0)):(errShow(s,!0,getMessageTemplate("checkPwdResult").wrong),!1)}function checkRePwd(e,t,s){var r=e.val(),n=t.val();return 0===r.length?(errShow(s,!0,getMessageTemplate("checkPwdResult").reempty),!1):r!==n?(errShow(s,!0,getMessageTemplate("checkPwdResult").inconsistent),!1):(errShow(s,!1,""),!0)}