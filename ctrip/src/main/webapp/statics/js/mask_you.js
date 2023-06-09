﻿var sso_envi = gerEnvi();

var ssoVariables = {
    H1: sso_envi == "prd" ? 'https' : 'https',
    AjaxUrl: sso_envi == "dev" ? 'accounts.fat466.qa.nt.ctripcorp.com' : (sso_envi == "fat" ? 'accounts.fat466.qa.nt.ctripcorp.com' : (sso_envi == "uat" ? 'accounts.uat.qa.nt.ctripcorp.com' : 'accounts.ctrip.com'))
};

function gerEnvi() {
    var currentHost = window.location.host;
    if (currentHost.indexOf(".dev.") > 0 || currentHost.indexOf("localhost") >= 0)
        return "dev";
    else if (currentHost.indexOf(".fat") > 0)
        return "fat";
    else if (currentHost.indexOf(".uat") > 0)
        return "uat";
    else
        return "prd";
}

var createScript = function (url, isAsync) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = isAsync;
    s.src = url;
    var h = document.getElementsByTagName('head')[0];
    h.appendChild(s);
};

sso_createCss(ssoVariables.H1 + "://webresource.c-ctrip.com/ResCRMOnline/R6/member/common/css/login_popup_new.css?20140617");
//createScript(ssoVariables.H1 + '://webresource.c-ctrip.com/ResCRMOnline/R6/member/common/js/Globle_young.js?20140617', true);
//createScript(ssoVariables.H1 + '://webresource.c-ctrip.com/ResCRMOnline/R6/member/common/js/client_you.js?20140617', true);
document.write("<script type='text/javascript' src='" + ssoVariables.H1 + "://webresource.c-ctrip.com/ResCRMOnline/R6/member/common/js/Globle_young.js?20140617' charset='utf-8' ></script>");
document.write("<script type='text/javascript' src='" + ssoVariables.H1 + "://webresource.c-ctrip.com/ResCRMOnline/R6/member/common/js/client_you.js?20150924' charset='utf-8' ></script>");

var bussinessType = '';
var buttonId, isMask, maskType, isCallback;
SSO_isNoneLogin = false;
sso_buttonID = "";

function __SSO_init() {
    var hideIsNoneLogin = document.getElementById("HideIsNoneLogin");
    SSO_isNoneLogin = hideIsNoneLogin ? (hideIsNoneLogin.value == "T") : false;
    SSO_isNoneLogin = sso_popLogin.getCookie("login_uid") == "" && SSO_isNoneLogin;

    if (typeof (Alliances) === 'undefined') {
        createScript(sso_Config.jsonpUrl.getChannelData, false);
    }
}

function __SSO_booking(a, t) {
    sso_buttonID = a;
    maskType = t;
    isCallback = true;
    __SSO_init()
    sso_popLogin.isLogin('T');
}

function __SSO_booking_1(a, t) {
    sso_buttonID = a;
    maskType = t;
    isCallback = true;
    __SSO_init();
    sso_popLogin.isLogin('N');
}


//a:button id;s:是否弹蒙版；t:蒙版类型，n:
function __SSO_loginShow(a, s, t, n) {

    __SSO_init();
    sso_buttonID = a;
    isMask = s;
    maskType = t;
    isCallback = n;

    if (isMask)
        SSO_NotLoginCallBack('T');
    else
        sso_hideMask();
}

function __SSO_loginShow_1(a, s, t, n) {

    __SSO_init();
    sso_buttonID = a;
    isMask = s;
    maskType = t;
    isCallback = n;

    if (isMask)
        sso_showMask();
    else
        sso_hideMask();

}

//未登录显示蒙版
function SSO_NotLoginCallBack(isnoLogin) {
    if (SSO_isNoneLogin && isnoLogin == 'T') {
        var backUrl = sso_popLogin.getProcxyUrl() + sso_popLogin.gettmp('?', 10000),
            idoc = sso_ifrprocxy.contentDocument || sso_ifrprocxy.contentWindow.document,
            ifrm = idoc.createElement('form');
        if (!idoc.body) { // ie
            var bd = document.createElement('body');
            idoc.appendChild(bd);
        }
        var createHidden = function (frm, id, val) {
            var hid = idoc.createElement('input');
            hid.id = hid.name = id;
            hid.value = val;
            frm.appendChild(hid);
        };

        // 加表单
        ifrm.name = 'NewPostLogin';
        ifrm.id = 'NewPostLogin';
        ifrm.action = sso_Config.jsonpUrl.login + sso_popLogin.gettmp('&', 1000);
        ifrm.method = 'POST';
        createHidden(ifrm, 'buttonId', sso_buttonID);
        createHidden(ifrm, 'sem', "NoneLogin");
        createHidden(ifrm, 'signin_uid', "N");
        createHidden(ifrm, 'signin_pwd', "N");
        createHidden(ifrm, 'txtCode', '');
        createHidden(ifrm, 'IsAuto', "F");
        createHidden(ifrm, 'NewSSO', 'T');
        createHidden(ifrm, 'NewSSOBackURL', backUrl);
        createHidden(ifrm, 'NewSSOToken', jsptoken);
        createHidden(ifrm, 'NewSSOLoginType', 3); //0：个人用户登陆 1：合作卡登陆 2:动态密码登陆 4:直接登录
        idoc.body.appendChild(ifrm);
        ifrm.submit();
    } else {
        sso_showMask();
    }
}

//未登录显示蒙版
function sso_showMask() {
    //    document.getElementById('sso_popWindow').style.display = "block";
    //    sso_maskDIv.style.display = "block";

    //    if (maskType === 0 || maskType === "0") {
    //        changeSmallMask();
    //    }
    //    if (maskType === 1 || maskType === "1") {
    //        changeBigMask();
    //    }

    //    if (!sso_browser.IE8)
    //        sso_maskDIv.style.height = "566px";


    sso_maskShow(sso_maskDIv, true);
}

//登陆成功后隐藏蒙版
function sso_hideMask() {
    sso_maskShow(null, true);
    //    document.getElementById('sso_popWindow').style.display = "none";
    //    sso_maskDIv.style.display = "none";
    if (isCallback) {
        __SSO_submit(sso_buttonID);
    }
}

//大蒙版
//function changeBigMask() {
//    sso_noneloginDiv.style.display = "block";
//    sso_divClose.style.display = "none";
//    sso_maskDIv.style.width = "684px"
//    //    sso_maskDIv.style.marginLeft = "-342px";
//}

////小蒙版
//function changeSmallMask() {
//    sso_noneloginDiv.style.display = "none";
//    sso_divClose.style.display = "block";
//    sso_maskDIv.style.width = "378px"
//    //    sso_maskDIv.style.marginLeft = "-189px";
//}

//elementID:按钮ID
//maskType:蒙版类型，1：大蒙版 0：小蒙版
//isNoneLogin:true 接免登，false 不接免登；
//isBooking:true 订单填写页面
//示例：
//  预订页接免登 __SSO_booking(elementID, maskType) ==> __SSO_DivMask(elementID, maskType,isNoneLogin, true,true)
//  预订页不接免登 __SSO_booking_1(elementID, maskType) ==> __SSO_DivMask(elementID, maskType,false, true,true)
//  非预订页不接免登 __SSO_loginShow_1(elementID, true, maskType, isCallBack) ==> __SSO_DivMask(elementID, maskType,false, false,isCallBack)
function __SSO_DivMask(elementID, maskType, isNoneLogin, isBooking, isNeedCallBack) {
    try {
        sso_buttonID = elementID;
        maskType = maskType;
        SSO_isNoneLogin = sso_popLogin.getCookie("login_uid") == "" && isNoneLogin;
        if (isBooking) {
            isCallback = true;
            if (isNoneLogin) {
                sso_popLogin.isLogin('T');
            } else {
                sso_popLogin.isLogin('N');
            }
        } else {
            if (!isNoneLogin) {

                isMask = true;
                isCallback = isNeedCallBack;
                if (isMask)
                    SSO_NotLoginCallBack('T');
                else
                    sso_hideMask();
            }
        }
    } catch (e) {
        window.location.href = "https://accounts.ctrip.com/member/login.aspx";
    }
}

function sso_createCss(cssfile) {
    var head = document.getElementsByTagName('HEAD').item(0);
    var style = document.createElement('link');
    style.href = cssfile;
    style.rel = "stylesheet";
    style.type = 'text/css';
    head.appendChild(style);
}
