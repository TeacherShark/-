/* 2019-02-19 16:12:43 fangluo */
(function (b) {
    b.pageEventBind = function () {
        function d(g, c, f) {
            "" == g || "0" == g || g > c || /\D/g.test(g) ? (f.val(""), a(f)) : b.pageLinkJump && b.pageLinkJump(g, f)
        }

        function a(a) {
            var b = a.clone(), f = a.offset(), e = 0;
            a.css("visibility", "hidden");
            b.css({
                position: "absolute",
                top: f.top + "px",
                left: f.left + "px",
                width: "18px",
                height: "16px",
                border: "1px solid #ccc"
            }).appendTo("body");
            var r = setInterval(function () {
                e++;
                b.css({top: f.top + 2 * Math.sin(e) + "px", left: f.left + 1 * Math.cos(e) + "px"});
                15 == e && (clearInterval(r), a.css("visibility", "visible"),
                    b.remove())
            }, 30)
        }

        b(".pager_v1").each(function () {
            var a = parseInt(b(this).find(".numpage").text()), c = b(this).find("span input");
            c.on("keyup", function (f) {
                var e = b(this).val();
                /\D/g.test(e) && b(this).val("");
                13 == f.keyCode && d(e, a, c)
            }).parent("span").siblings(".gopage").on("click", function () {
                var b = c.val();
                d(b, a, c)
            })
        })
    };
    b.pageEventBind()
})(jQuery);
(function (b) {
    b.cookiedb = function (d) {
        d = b.extend({name: "cookiedb", value: "", fenge: "_", isfind: 0, maxlength: 10, expires: 360}, d);
        if (void 0 === b.cookie) return window.console && console.log("no $.cookie"), !1;
        var a = b.cookie(d.name);
        cookieDB = null != a ? a.split(d.fenge) : [];
        if (-1 != b.inArray(d.value.toString(), cookieDB)) return "repeat";
        if (d.isfind) return "nofound";
        cookieDB.length >= d.maxlength && cookieDB.shift();
        cookieDB.push(d.value);
        b.cookie(d.name, cookieDB.join(d.fenge), {expires: d.expires, path: "/"});
        return "success"
    }
})(jQuery);
(function (b) {
    b.fn.POIpopCard = function (d) {
        d = b.extend({
            initHTML: '<div class="gs_poi_iefix" id="POIpopCard_v1" style="display:none;position: absolute;"><div class="gs_poi_pop_outer gs_pop_outer_500 cf"><div class="gs_poi_pop cf"></div></div></div>',
            closeHTML: '<a href="javascript:;" class="btn_close">&times;</a>',
            arrowHTML: "<s></s>",
            lineHeight: 30,
            outTIME: 2E3,
            callback: function () {
            },
            colseCallback: function () {
            },
            delayTIME: 50
        }, d);
        b(this);
        var a = null, g = {}, c = null, f = !1;
        b("#POIpopCard_v1").parent().is("body") || b("body").append(b(d.initHTML));
        g = b("#POIpopCard_v1");
        $popC = g.find(".gs_poi_pop");
        var e = function () {
            !f && g.hide()
        };
        b("body").on("mouseenter", b(this).selector, function () {
            var e = b(this);
            a = window.setTimeout(function () {
                window.clearTimeout(c);
                f = !0;
                var a = 0, l = 7, n = 0;
                e.outerHeight() > d.lineHeight ? (e.prepend(b("<span></span>")), a = e.find("span").offset().left, n = 1) : (a = e.offset().left, l = e.outerWidth());
                d.callback(e, function (c) {
                    var f = a, p = e.offset().top, q = l, t = n, s;
                    s = a;
                    var w = b(document.body).outerWidth();
                    s = 0 > s - 230 ? "bot_arrow left_arrow" : s + 230 > w ? "bot_arrow right_arrow" :
                        "bot_arrow";
                    $popC.html("");
                    $popC.append(b(d.closeHTML)).append(b(c)).append(b(d.arrowHTML).addClass(s));
                    c = 0;
                    w = $popC.outerWidth();
                    switch (s) {
                        case "bot_arrow left_arrow":
                            break;
                        case "bot_arrow right_arrow":
                            c = -1 * w + q / 2 + 25;
                            break;
                        default:
                            c = -1 * (w / 2) + q / 2
                    }
                    1 == t && (c += q);
                    f = {top: p, left: f, marginLeft: c, marginTop: -1 * g.outerHeight() - 10};
                    g.css(f).show()
                })
            }, d.delayTIME)
        }).on("mouseleave", b(this).selector, function () {
            f = !1;
            c = window.setTimeout(e, d.outTIME);
            window.clearInterval(a)
        });
        g.on("click", ".btn_close", function (a) {
            g.hide();
            window.clearTimeout(c);
            a.stopPropagation()
        }).on("mouseenter", function () {
            f = !0;
            window.clearTimeout(c)
        }).on("mouseleave", function () {
            f = !1;
            c = window.setTimeout(e, d.outTIME)
        });
        b(window).resize(function () {
            g.hide()
        });
        return this
    };
    b.fn.POIpop = function (d) {
        d = b.extend({
            initHTML: '<div class="journeys_pop pop_poi cf" id="journeys_pop_v1" style="display:none"></div>',
            closeHTML: '<a href="javascript:;" class="btn_close">&times;</a>',
            arrowHTML: '<s class="bot_arrow"><em>\u25c6</em><span>\u25c6</span></s>',
            node: "dd > a",
            outTIME: 2E3,
            callback: function () {
            },
            colseCallback: function () {
            }
        }, d);
        var a = {}, g = null, c = !1, f = b(this);
        b("#journeys_pop_v1").parent().is("body") || b("body").append(b(d.initHTML));
        var a = b("#journeys_pop_v1"), e = function () {
            !c && a.hide()
        };
        f.on("mouseover", d.node, function (e) {
            window.clearTimeout(g);
            c = !0;
            $node = b(e.target);
            d.callback($node, function (e) {
                var c = $node.offset().left, g = $node.offset().top, f = $node.outerWidth() / 2;
                a.html("");
                a.append(b(d.closeHTML)).append(b(e)).append(b(d.arrowHTML));
                a.css({
                    top: g, left: c, position: "absolute",
                    marginLeft: -230 + f, marginTop: -1 * a.outerHeight() - 10
                }).show()
            })
        }).on("mouseout", d.node, function (a) {
            c = !1;
            g = window.setTimeout(e, d.outTIME)
        });
        a.on("click", ".btn_close", function (b) {
            a.hide();
            window.clearTimeout(g);
            b.stopPropagation()
        }).on("mouseenter", function () {
            c = !0;
            window.clearTimeout(g)
        }).on("mouseleave", function () {
            c = !1;
            g = window.setTimeout(e, d.outTIME)
        });
        b(window).resize(function () {
            a.hide()
        });
        return this
    }
})(jQuery);
$(function () {
    var b = [];
    GS._getchannel = function () {
        return window.location.pathname.match(/\/.*?\//ig)[0].replace(/\//g, "").toLowerCase()
    };
    GS._make_pageid_url = function (a) {
        if (void 0 == a) return "";
        var b = $("#page_id").val();
        return a.replace("{pageid}", b).replace("{travelid}", INTERFACE.TravelId)
    };
    var d = function (a, b) {
        var c = function (a) {
            return GS._make_pageid_url(a)
        }, f = {1: "hotel", 2: "restaurant", 3: "sight", 6: "amusement"}, e = [], d = function (a) {
            var b = "";
            "" != a.photoUrl && (b = '<img src="' + a.photoUrl + '" alt="">');
            return '<a target="_blank" href="' +
                c(a.url) + '" class="poipic">' + b + "</a>"
        }, k = function (a) {
            var b = "";
            0 < a.rstar && (b = '<span class="hotel_stars0' + a.rstar + '" title="' + a.hotelStarTitle + '"></span>', a.score && (b += ' <span class="score"><b>' + a.score + "</b>/5\u5206</span>"));
            return b
        }, l = function (a) {
            return 1 === a ? "" : '<span class="discount">' + parseFloat(10 * a).toFixed(1) + "\u6298</span>"
        }, n = function (a, b) {
            if (3 > a.length) return a;
            var e = [], c;
            for (c in a) e.push(a[c]);
            c = [];
            for (var g = 0; g < b; g++) if (0 < e.length) {
                var f = Math.floor(Math.random() * e.length);
                c[g] = e[f];
                e.splice(f, 1)
            } else break;
            return c
        };
        switch (b) {
            case 1:
                var l = n(a.interestHotelList, 3), h = "";
                1 > l.length && (h = "noline");
                a.isSale ? (e.push('<div class="hotel_info ' + h + '">'), e.push(d(a)), e.push('<dl class="cf">'), e.push('<dt><i class="' + f[b] + '"></i><a target="_blank" href="' + c(a.url) + '">' + a.name + "</a></dt>"), e.push('<dd class="special_3">' + k(a) + "</span>"), e.push('<span class="fenline">|</span>' + 100 * a.recommendRate + '%\u7528\u6237\u63a8\u8350<span class="fenline">|</span>\u6e90\u81ea' + a.commentCount + "\u4f4d\u4f4f\u5ba2\u70b9\u8bc4</dd>"),
                    e.push('<dd class="special_2">'), e.push('<ul><li class="hotelprice"><span class="price">\u00a5<em>' + a.price + "</em>\u8d77</span></li>")) : (e.push('<div class="hotel_nosale ' + h + '">'), e.push('<dl class="cf">'), e.push('<dt><i class="' + f[b] + '"></i><a target="_blank" href="' + c(a.url) + '">' + a.name + "</a></dt>"), e.push('<dd class="special_2">'), e.push('<ul><li class="hoteladdress">' + a.address + "</li>"));
                e.push('<li><a target="_blank" href="' + c(a.url) + '" class="b_orange_m">\u67e5\u770b\u8be6\u60c5</a></li></ul>');
                e.push("</dd></dl></div>");
                if (0 < l.length) for (e.push('<h4 class="hotel_title"><span>\u4f60\u53ef\u80fd\u611f\u5174\u8da3\u7684\u9152\u5e97</span></h4>'), e.push('<div class="hotel_datelist cf">'), h = 0; h < l.length; h++) f = 0 == h ? " first" : "", e.push('<div class="listouter' + f + '"><ul data-url="' + l[h].bookUrl + '">'), e.push('<li><span class="f_hotelname" title="' + l[h].name + '">' + l[h].name + "</span></li>"), e.push("<li>" + k(l[h]) + "</li>"), e.push('<li><span class="price">\u00a5<em>' + l[h].price + "</em>\u8d77</span></li>"),
                    e.push("</ul></div>");
                e.push("</div>");
                break;
            case 2:
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><i class="' + f[b] + '"></i><a target="_blank" href="' + c(a.url) + '">' + a.name + "</a></dt>");
                a.averagePrice = "0" == a.averagePrice ? "\u6682\u65e0" : '<span class="price">' + a.averagePrice + "</span>\u5143";
                0 != a.commentCount ? e.push('<dd> <span class="starlist_12"> <span style="width:' + 100 * (a.score / 5) + '%;"> </span> </span>' + a.commentCount + '\u6761\u70b9\u8bc4<span class="g_line">|</span>\u4eba\u5747\uff1a' + a.averagePrice +
                    "</dd>") : e.push("<dd>\u6682\u65e0\u70b9\u8bc4</dd>");
                e.push("<dd>" + a.address + "</dd>");
                e.push('<dd><a target="_blank" href="' + c(a.url) + '" class="b_blue_s">\u67e5\u770b\u8be6\u60c5</a></dd>');
                e.push("</dl>");
                break;
            case 3:
                l = n(a.interestHotelList, 3);
                e.push('<div class="sight_info">');
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><i class="sight"></i><a target="_blank" href="' + c(a.url) + '">' + a.name + "</a></dt>");
                e.push('<dd> <span class="starlist_12"> <span style="width:' + 100 * (a.score / 5) + '%;"> </span> </span> ' +
                    a.commentCount + "\u6761\u70b9\u8bc4</dd>");
                e.push("<dd>" + a.address + "</dd>");
                0 == a.price ? e.push('<dd><a target="_blank" href="' + c(a.url) + '" class="b_blue_s">\u67e5\u770b\u8be6\u60c5</a></dd></dl>') : e.push('<dd class="sightprice"><span class="price">\u00a5<em>' + a.marketPrice + '</em>\u8d77</span><a target="_blank" class="b_orange_s" href="' + c(a.ticketBookUrl) + '">\u7acb\u5373\u9884\u8ba2</a></dd>');
                e.push("</dl>");
                e.push("</div>");
                if (0 < l.length) for (e.push('<h4 class="hotel_title"><span>\u4f60\u53ef\u80fd\u611f\u5174\u8da3\u7684\u9152\u5e97</span></h4>'),
                                           e.push('<div class="hotel_datelist cf">'), h = 0; h < l.length; h++) f = 0 == h ? " first" : "", e.push('<div class="listouter' + f + '"><ul data-url="' + l[h].bookUrl + '">'), e.push('<li><span class="f_hotelname" title="' + l[h].name + '">' + l[h].name + "</span></li>"), e.push("<li>" + k(l[h]) + "</li>"), e.push('<li><span class="price">\u00a5<em>' + l[h].price + "</em>\u8d77</span></li>"), e.push("</ul></div>");
                e.push("</div>");
                break;
            case 4:
                e.push(d(a));
                e.push('<dl class="cf">');
                if (a.isInChina) {
                    e.push('<dt><a target="_blank" href="' + c(a.url) +
                        '">' + a.name + " " + a.parentName + "</a></dt>");
                    if (null != a.specialSightList && 0 < a.specialSightList.length) for (h in e.push("<dd>\u7279\u4ef7\u666f\u533a\uff1a"), a.specialSightList) a.specialSightList.hasOwnProperty(h) && e.push('<a target="_blank" href="' + c(a.specialSightList[h].url) + '" class="poilink">' + a.specialSightList[h].name + "</a>");
                    e.push("</dd>");
                    e.push('<dd><a target="_blank" href="' + c(a.travelUrl) + '" class="count">' + a.travelCount + '</a>\u7bc7\u6e38\u8bb0\u5206\u4eab<span class="g_line">|</span><a target="_blank" href="' +
                        c(a.albumUrl) + '" class="count">' + a.photoCount + "</a>\u5f20\u7cbe\u5f69\u7167\u7247</dd>");
                    e.push('<dd class="gs_visa_pop">');
                    a.holidayUrl && 0 != a.holidayPrice && e.push('<a target="_blank" href="' + c(a.holidayUrl) + '" class="b_gray_s citycount">\u5ea6\u5047<em>\u00a5' + a.holidayPrice + "\u8d77</em></a>");
                    a.sightUrl && 0 != a.sightPrice && e.push('<a target="_blank" href="' + c(a.sightUrl) + '" class="b_gray_s citycount">\u95e8\u7968<em>\u00a5' + a.sightPrice + "\u8d77</em></a>");
                    a.lowPriceHotelUrl && 0 != a.hotelPrice && e.push('<a target="_blank" href="' +
                        c(a.lowPriceHotelUrl) + '" class="b_gray_s citycount">\u9152\u5e97<em>\u00a5' + a.hotelPrice + "\u8d77</em></a>");
                    a.flightUrl && 0 != a.flightPrice && e.push('<a target="_blank" href="' + c(a.flightUrl) + '" class="b_gray_s citycount">\u673a\u7968<em>\u00a5' + a.flightPrice + "\u8d77</em></a>");
                    if (!(a.holidayUrl || a.sightUrl || a.lowPriceHotelUrl || a.flightUrl)) {
                        if (a.hotelUrl || a.vacationUrl) a.hotelUrl == a.vacationUrl ? e.push('<a target="_blank" href="' + c(a.hotelUrl) + '" class="productlink">\u5f53\u5730\u9152\u5e97\u65c5\u6e38\u4ea7\u54c1</a>') :
                            ("" !== a.hotelUrl && e.push('<a target="_blank" href="' + c(a.hotelUrl) + '" class="productlink">\u5f53\u5730\u9152\u5e97</a>'), "" !== a.vacationUrl && e.push('<a target="_blank" href="' + c(a.vacationUrl) + '" class="productlink">\u65c5\u6e38\u4ea7\u54c1</a>'));
                        "" !== a.visaUrl && e.push('<a target="_blank" href="' + c(a.visaUrl) + '" class="b_gray_s">\u7b7e\u8bc1\u670d\u52a1</a>')
                    }
                } else {
                    e.push('<dt><a target="_blank" href="' + c(a.url) + '">' + a.name + " " + a.parentName + "</a></dt>");
                    if (null != a.sightList && 0 < a.sightList.length) for (h in e.push("<dd>\u5fc5\u6e38\u666f\u70b9\uff1a"),
                        a.sightList) a.sightList.hasOwnProperty(h) && e.push('<a target="_blank" href="' + c(a.sightList[h].url) + '" class="poilink">' + a.sightList[h].name + "</a>");
                    if (null != a.hotDestList && 0 < a.hotDestList.length) for (h in e.push("<dd>\u70ed\u95e8\u76ee\u7684\u5730\uff1a"), a.hotDestList) a.hotDestList.hasOwnProperty(h) && e.push('<a target="_blank" href="' + c(a.hotDestList[h].url) + '" class="poilink">' + a.hotDestList[h].name + "</a>");
                    e.push("</dd>");
                    e.push('<dd><a target="_blank" href="' + c(a.travelUrl) + '" class="count">' +
                        a.travelCount + '</a>\u7bc7\u6e38\u8bb0\u5206\u4eab<span class="g_line">|</span><a target="_blank" href="' + c(a.albumUrl) + '" class="count">' + a.photoCount + "</a>\u5f20\u7cbe\u5f69\u7167\u7247</dd>");
                    e.push('<dd class="gs_visa_pop"><a target="_blank" href="' + c(a.url) + '" class="b_blue_s">\u67e5\u770b\u8be6\u60c5</a>');
                    if (a.hotelUrl || a.vacationUrl) a.hotelUrl == a.vacationUrl ? e.push('<a target="_blank" href="' + c(a.hotelUrl) + '" class="b_gray_s">\u5f53\u5730\u9152\u5e97\u65c5\u6e38\u4ea7\u54c1</a>') : ("" !== a.hotelUrl &&
                    e.push('<a target="_blank" href="' + c(a.hotelUrl) + '" class="b_gray_s">\u5f53\u5730\u9152\u5e97</a>'), "" !== a.vacationUrl && e.push('<a target="_blank" href="' + c(a.vacationUrl) + '" class="b_gray_s">\u65c5\u6e38\u4ea7\u54c1</a>'));
                    "" !== a.visaUrl && e.push('<a target="_blank" href="' + c(a.visaUrl) + '" class="b_gray_s">\u7b7e\u8bc1\u670d\u52a1</a>')
                }
                e.push("</dd>");
                e.push("</dl>");
                break;
            case 6:
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><i class="' + f[b] + '"></i><a target="_blank" href="' + c(a.url) + '">' + a.name +
                    "</a></dt>");
                0 != a.commentCount ? e.push('<dd> <span class="starlist_12"> <span style="width:' + 100 * (a.score / 5) + '%;"></span></span> ' + a.commentCount + "\u6761\u70b9\u8bc4</dd>") : e.push("<dd>\u6682\u65e0\u70b9\u8bc4</dd>");
                e.push("<dd>" + a.address + "</dd>");
                0 < a.price && (e.push("<dd>"), e.push('<a target="_blank" href="' + c(a.ticketBookUrl) + '" class="b_orange_s">\u7acb\u5373\u9884\u8ba2</a><span class="price">\u00a5<em>' + a.price + "</em></span>"), 0 < a.marketPrice && e.push('<span class="delspace">\u5e02\u573a\u4ef7\uff1a<del>\u00a5' +
                    a.marketPrice + "</del></span>"), e.push("</dd>"));
                e.push("</dl>");
                break;
            case 11:
            case 12:
            case 13:
            case 8:
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><a target="_blank" href="' + c(a.url) + '">' + a.name + "</a></dt>");
                if (8 != b && null != a.portList && 0 < a.portList.length) for (e.push("<dd>\u51fa\u53d1\u6e2f\uff1a"), l = a.portList.length, 5 < l && (l = 5), h = 0; h < l && !(e.push('<a target="_blank" href="' + c(a.portList[h].url) + '" class="poilink">' + a.portList[h].name + "</a>"), 5 <= h); h++) ;
                e.push("</dd>");
                0 < a.price ? e.push('<dd><span class="price">\u00a5<em>' +
                    a.price + "</em>\u8d77</span></dd>") : e.push('<dd><span class="price"><em>\u5b9e\u65f6\u8ba1\u4ef7</em></span></dd>');
                e.push('<dd><a target="_blank" href="' + c(a.url) + '" class="b_blue_s">\u67e5\u770b\u8be6\u60c5</a></dd>');
                e.push("</dl>");
                break;
            case 15:
            case 18:
                e.push('<div class="plane_info">');
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><a target="_blank" href="' + c(a.url) + '">' + a.airportName + "</a></dt>");
                e.push('<dd class="special_1">\u51fa\u53d1\u57ce\u5e02<span class="cityname">' + a.ticketList[0].fromCityName +
                    '</span>\u5230\u8fbe\u57ce\u5e02<span class="cityname">' + a.ticketList[0].toCityName + "</span></dd>");
                e.push('<dd class="special_2">');
                e.push('<ul><li class="priceline"><span class="price">\u00a5<em>' + a.ticketList[0].price + "</em>\u8d77</span><br>" + a.ticketList[0].date + '\u51fa\u53d1</li><li><a target="_blank" href="' + c(a.ticketList[0].url) + '" class="b_orange_m">\u67e5\u770b\u8be6\u60c5</a></li>');
                e.push('<li class="morelink"><a target="_blank" href="' + c(a.lowPriceUrl) + '">\u66f4\u591a\u7279\u4ef7\u673a\u7968 &gt;</a></li>');
                e.push("</ul></dd></dl></div>");
                e.push('<div class="plane_datelist cf">');
                for (h = 1; h < a.ticketList.length; h++) f = 1 == h ? " first" : "", e.push('<div class="listouter' + f + '"><ul data-url="' + a.ticketList[h].url + '">'), e.push('<li><span class="f_city">' + a.ticketList[h].fromCityName + "-" + a.ticketList[h].toCityName + "</span></li>"), e.push("<li>\u51fa\u53d1\u65e5\u671f\uff1a" + a.ticketList[h].date + "</li>"), e.push('<li><span class="price">\u00a5<em>' + a.ticketList[h].price + "</em>\u8d77</span>" + l(a.ticketList[h].discount) +
                    "</li>"), e.push("</ul></div>");
                e.push("</div>");
                break;
            case 16:
                k = a.ticketList;
                h = "";
                2 > k.length && (h = "noline");
                e.push('<div class="plane_city ' + h + '">');
                e.push('<h3><i></i><span class="cityname">' + k[0].fromCityName + '</span>\u51fa\u53d1\u81f3<span class="cityname">' + k[0].toCityName + "</span></h3>");
                e.push('<p><span class="f_lately">\u8fd1\u671f\u6700\u4f4e\u4ef7</span><span class="price">\u00a5<em>' + k[0].price + "</em>\u8d77</span>" + k[0].date + '\u51fa\u53d1<a target="_blank" href="' + c(k[0].url) + '" class="b_orange_m">\u67e5\u770b\u8be6\u60c5</a></p>');
                e.push("</div>");
                e.push('<div class="plane_datelist plane_listspecial cf">');
                for (h = 1; h < k.length; h++) f = 1 == h ? " first" : "", e.push('<div class="listouter' + f + '">'), e.push('<ul data-url="' + k[h].url + '">'), e.push("<li>\u51fa\u53d1\u65e5\u671f\uff1a" + k[h].date + "</li>"), e.push('<li><span class="price">\u00a5<em>' + k[h].price + "</em>\u8d77</span>" + l(k[h].discount) + "</li>"), e.push("</ul>"), e.push("</div>");
                e.push("</div>");
                break;
            case 17:
                e.push('<div class="plane_info">');
                e.push(d(a));
                e.push('<dl class="cf">');
                e.push('<dt><a target="_blank" href="' +
                    c(a.url) + '">' + a.stationName + "</a></dt>");
                e.push('<dd class="special_1">\u51fa\u53d1\u57ce\u5e02<span class="cityname">' + a.trainTicketInfo.fromCityName + '</span>\u5230\u8fbe\u57ce\u5e02<span class="cityname">' + a.trainTicketInfo.toCityName + "</span></dd>");
                e.push('<dd class="special_2">');
                e.push('<ul class="train"><li class="priceline"><span class="price">\u00a5<em>' + a.trainTicketInfo.price + "</em>\u8d77</span>" + a.trainTicketInfo.date + '\u51fa\u53d1</li><li><a target="_blank" href="' + c(a.trainTicketInfo.url) +
                    '" class="b_orange_m">\u67e5\u770b\u8be6\u60c5</a></li>');
                e.push("</ul></dd></dl></div>");
                e.push('<div class="plane_datelist plane cf">');
                k = a.ticketList.length;
                3 < k && (k = 3);
                for (h = 0; h < k; h++) f = 0 == h ? " first" : "", e.push('<div class="listouter' + f + '"><ul data-url="' + a.ticketList[h].url + '">'), e.push('<li><i></i><span class="f_city">' + a.ticketList[h].fromCityName + "-" + a.ticketList[h].toCityName + "</span></li>"), e.push("<li>\u51fa\u53d1\u65e5\u671f\uff1a" + a.ticketList[h].date + "</li>"), e.push('<li><span class="price">\u00a5<em>' +
                    a.ticketList[h].price + "</em>\u8d77</span>" + l(a.ticketList[h].discount) + "</li>"), e.push("</ul></div>");
                e.push("</div>\x3c!-- plane_datelist --\x3e")
        }
        return e.join("")
    };
    GS.poi_json2html = d;
    $("body").on("click", ".listouter ul", function (a) {
        a = GS._make_pageid_url($(this).data("url"));
        window.open(a)
    });
    $(".gs_a_poi[data-classType=1]").POIpopCard({
        outTIME: 200, callback: function (a, g) {
            var c = a.data("id"), f = a.data("type");
            if (void 0 !== b[c]) g(d(b[c], f, c)); else {
                var e = INTERFACE.SaleDistrictId || 0, r = INTERFACE.TravelId ||
                    0, k = GS._getchannel();
                $.getJSON(INTERFACE.poi_server_url, {
                    ugcId: r,
                    ugcType: k,
                    id: c,
                    type: f,
                    gsUserId: void 0 == window._USER.userid ? 0 : window._USER.userid,
                    saleDistrictId: e
                }, function (a) {
                    void 0 != a && "" !== a.id && (b[c + ":" + f] = a, g(d(a, f, c)))
                })
            }
        }
    })
});
var cQuery = {};
$(function () {
    var b = $("<div></div>");
    $(document.body).append(b);
    var d = function (a, b) {
        var c = this, f = $(a);
        this.$element = f;
        this.oldValue = "";
        this.alignRight = b.alignRight || !1;
        this.title = b.title || "\u652f\u6301\u4e2d\u6587/\u62fc\u97f3/\u7b80\u62fc\u8f93";
        this.drawHtml = b.drawHtml;
        this.eventControl = b.eventControl || function () {
        };
        this.addBox();
        f.keyup(function () {
            $(this).val() != c.oldValue && c.blur()
        });
        f.click(function (a) {
            c.focus();
            c.$element.select();
            a.stopPropagation()
        });
        $(document).click(function () {
            c.blur()
        });
        $(window).resize(function () {
            c.blur()
        })
    };
    d.prototype = {
        container: "",
        tabContainer: "",
        hasHtml: !1,
        selectHtml: '<div class="city_select_popup"><a class="close" href="javascript:;">\u00d7</a><p class="title"></p><ul class="tab_box"></ul></div>',
        addBox: function () {
            this.container = $(this.selectHtml);
            this.tabContainer = this.container.find(".tab_box");
            b.append(this.container);
            this.container.find(".title").text(this.title)
        },
        focus: function () {
            this.$element.focus();
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            this.oldValue = this.$element.val();
            this.hasHtml ? (this.setOffset(), this.container.show()) : this.displayPopup()
        },
        blur: function () {
            this.container.hide()
        },
        setOffset: function () {
            var a = this.$element.offset(), b = this.$element.outerHeight() - 1, c = a.left;
            this.alignRight && (c = c + this.$element.outerWidth() - this.container.outerWidth());
            this.container.css({top: a.top + b, left: c})
        },
        displayPopup: function () {
            var a = this;
            this.drawHtml(function (b) {
                a.container.find(".city_item").remove();
                a.tabContainer.empty();
                a.container.append(b.html);
                a.tabContainer.append(b.tabHtml);
                a.setOffset();
                a.addEventListener();
                a.eventControl(a);
                a.container.show();
                a.hasHtml = !0
            }, a)
        },
        addEventListener: function () {
            var a = this, b = this.tabContainer, c = this.container.find(".city_item");
            this.container.click(function (a) {
                a.stopPropagation()
            });
            this.container.find(".close").click(function (b) {
                a.blur();
                b.stopPropagation()
            });
            b.find("li").on("click", function (a) {
                var e = $(this).index();
                b.find("li").removeClass("current");
                $(this).addClass("current");
                c.removeClass("current");
                c.eq(e).addClass("current");
                a.stopPropagation()
            })
        }
    };
    $.fn.citySelect = function (a) {
        return this.each(function () {
            new d(this, a)
        })
    }
});
cQuery = {};
$(function () {
    var b = $("<div></div>");
    $(document.body).append(b);
    var d = function (a, b) {
        var c = this, f = $(a);
        this.$element = f;
        this.container = "";
        this.firstData = null;
        this.placeholder = b.placeholder || "";
        this.formatData = b.formatData;
        this.eventControl = b.eventControl || function () {
        };
        this.cannotToCache = b.cannotToCache || !1;
        this.gos = 0;
        this.oldValue = f.val();
        this.pageNum = 0;
        this.totlePage = 1;
        this.cache = {};
        this.addBox();
        this.timer = null;
        f.keyup(function (a) {
            c.onKeyup(a)
        });
        f.click(function (a) {
            c.oldValue = c.$element.val();
            a.stopPropagation()
        });
        $(document).click(function () {
            c.hidePopup()
        });
        $(window).resize(function () {
            c.hidePopup()
        })
    };
    d.prototype = {
        kCode: {ENTER: 13, UP: 38, DOWN: 40, ESC: 27},
        perPageNum: 10,
        suggestHtml: '<div class="city_suggest_popup"></div>',
        addBox: function () {
            var a = this;
            this.container = $(this.suggestHtml);
            b.append(this.container);
            this.container.click(function (b) {
                a.$element.focus();
                b.stopPropagation()
            })
        },
        addToCache: function (a, b) {
            !this.cannotToCache && 0 < b.length && (this.cache[a] = [], this.cache[a] = b)
        },
        checkCache: function (a) {
            return this.cache[a] ?
                !0 : !1
        },
        setOffset: function () {
            var a = this.$element.offset(), b = this.$element.outerHeight() - 1;
            this.container.css({top: a.top + b, left: a.left})
        },
        checkValue: function () {
            "" != this.$element.val() && this.$element.val() != this.placeholder || this.hidePopup();
            if (this.$element.val() != this.oldValue) {
                var a = this, b = function () {
                    a.showPopup();
                    clearTimeout(a.timer);
                    a.timer = null
                };
                a.timer || (a.timer = setTimeout(b, 200))
            }
            this.oldValue = this.$element.val()
        },
        onKeyup: function (a) {
            switch (a.keyCode) {
                case this.kCode.UP:
                    a = this.container.find(".city_suggest_item");
                    1 < a.length ? (this.gos--, -1 == this.gos && (this.gos = a.length - 1), this.selected(a.eq(this.gos))) : 1 == a.length && this.selected(a.eq(0));
                    break;
                case this.kCode.DOWN:
                    a = this.container.find(".city_suggest_item");
                    1 < a.length ? (this.gos++, 1 != this.gos || a.hasClass("current") || (this.gos = 0), this.gos == a.length && (this.gos = 0), this.selected(a.eq(this.gos))) : 1 == a.length && this.selected(a.eq(0));
                    break;
                case this.kCode.ENTER:
                    this.container.find(".city_suggest_item").eq(this.gos).trigger("click");
                    break;
                case this.kCode.ESC:
                    this.$element.val("");
                    this.hidePopup();
                    break;
                default:
                    this.checkValue()
            }
        },
        selected: function (a) {
            this.container.find(".city_suggest_item").removeClass("current");
            a.addClass("current")
        },
        hidePopup: function () {
            clearTimeout(this.timer);
            this.timer = null;
            this.container.hide()
        },
        showPopup: function (a) {
            var b = this;
            (a = this.$element.val()) && (this.checkCache(a) ? this.displayPopup(this.cache[a]) : b.formatData(a, function (c) {
                b.addToCache(a, c);
                b.displayPopup(c)
            }))
        },
        displayPopup: function (a) {
            this.pageNum = 0;
            this.drawHtml(a);
            this.drawPageHtml();
            this.setOffset();
            this.eventControl(this);
            this.container.show();
            this.pageControl(a)
        },
        drawHtml: function (a) {
            this.container.find("div").not(".city_suggest_pager").remove();
            this.gos = 0;
            var b = "", c = a.length, f = Math.ceil(c / this.perPageNum), e = this.pageNum * this.perPageNum,
                d = (this.pageNum + 1) * this.perPageNum, d = d > c ? c : d;
            this.totlePage = f;
            if (0 < c) for (this.firstData = a[0]; e < d; e++) if (c = a[e], c.showRight) b += '<div class="city_suggest_item" data="' + c.data + '"><span class="fl">' + c.text + '</span><span class="fr">' + c.right + "</span></div>"; else {
                if (b =
                    c.noAirPort ? b + ('<div class="city_suggest_noAir" data="' + c.data + '">' + c.text + '<span class="orange">&nbsp;-\u8be5\u57ce\u5e02\u6ca1\u6709\u673a\u573a</span></div>') : b + ('<div class="city_suggest_item" data="' + c.data + '">' + c.text + "</div>"), c.airPort && 0 < c.airPort.length) for (var f = 0, k = c.airPort.length; f < k; f++) b += '<div class="city_suggest_item gray" data="' + c.data + '" data-airPort="' + c.airPort[f] + '">' + c.airPortText[f] + "</div>"
            } else this.firstData = "", b += '<div class="city_suggest_null">\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u5173\u952e\u5b57</div>';
            this.container.prepend(b)
        },
        drawPageHtml: function () {
            this.container.find(".city_suggest_pager").remove();
            var a = "", b = this.totlePage, c = 0;
            if (1 < b) {
                for (; c < b; c++) a = 0 === c ? a + '<a class="page_num active" href="javascript:;">1</a>' : 3 > c ? a + ('<a class="page_num" href="javascript:;">' + (c + 1) + "</a>") : a + ('<a class="page_num" href="javascript:;" style="display: none;">' + (c + 1) + "</a>");
                a = '<div class="city_suggest_pager">' + ('<a class="gray page_prev" href="javascript:;">&lt;</a>' + a + '<a class="page_next" href="javascript:;">&gt;</a>') +
                    "</div>"
            }
            this.container.append(a)
        },
        pageControl: function (a) {
            var b = this, c = this.container.find(".city_suggest_pager");
            c.find("a").click(function (f) {
                f = $(this);
                var e = c.find(".page_prev"), d = c.find(".page_next"), k = c.find(".page_num"), l = b.pageNum,
                    n = b.totlePage;
                if (!f.hasClass("gray") && !f.hasClass("active")) {
                    f.hasClass("page_prev") ? (l -= 1, d.removeClass("gray")) : f.hasClass("page_next") ? (l += 1, e.removeClass("gray")) : l = parseInt(f.text(), 10) - 1;
                    var h = l - 1, m = l + 1;
                    0 >= h && (m = 2);
                    m >= n && (h = n - 3);
                    k.each(function (a) {
                        a >= h && a <=
                        m ? $(this).show() : $(this).hide()
                    });
                    0 === l ? (e.addClass("gray"), d.removeClass("gray")) : l === n - 1 ? (d.addClass("gray"), e.removeClass("gray")) : (e.removeClass("gray"), d.removeClass("gray"));
                    c.find("a.page_num").removeClass("active").eq(l).addClass("active");
                    b.pageNum = l;
                    b.drawHtml(a);
                    b.eventControl(b)
                }
            })
        }
    };
    $.fn.citySuggest = function (a) {
        return this.each(function () {
            new d(this, a)
        })
    }
});
var CitySuggestFilter = function (b) {
    this._init(b)
};
CitySuggestFilter.prototype = {
    sort: "^0$ ^1$ ^3+$ ^0 ^1 ^3+ 0 1 3+".split(" "),
    _colsHash: null,
    _displayHash: {left: 0, right: 1, text: 1},
    message: {sort: []},
    _init: function (b) {
        b = b || {};
        var d = $.type(b.sort);
        if (b.sort && "array" == d || "function" == d) this.sort = b.sort, this._sortReString = null;
        this.sortFunction = b.sortFunction || this.sortFunction;
        b.message && (this.message = $.extend(!0, {}, this.message, b.message));
        this._colsHash = b._colsHash || this._colsHash;
        b._displayHash && (this._displayHash = $.extend(!0, {}, this._displayHash, b._displayHash))
    },
    sortFunction: function (b, d) {
        return b.left > d.left ? 1 : b.left == d.left ? 0 : -1
    },
    _initSort: function () {
        if (!this._sortReString) {
            var b = this._sortReString = {accurate: [], vague: []}, d = 0, a = 0;
            switch ($.type(this.sort)) {
                case "array":
                    for (var g = 0, c = this.sort.length; g < c; g++) {
                        var f = this.sort[g].match(/^(\^?)([^\^\$\|@\r\n\+]+)(\+?)(\$?)$/);
                        if (f) {
                            if (/^\d$/.test(f[2])) f[2] = parseInt(f[2], 10); else if (f[2] in this._colsHash) f[2] = this._colsHash[f[2]]; else continue;
                            var e = +f[2] || f[3] ? "([^\\|@]*\\|){" + f[2] + (f[3] ? "," : "") + "}" : "";
                            b.accurate[d++] =
                                ["@(" + e, "", "(\\|[^@]*)?)(?=@)"];
                            b.vague[a++] = ["@(" + e + (f[1] ? "" : "[^\\|@]*"), "", (f[4] ? "(\\|[^@]*)?" : "[^@]*") + ")(?=@)"]
                        }
                    }
            }
        }
    },
    getfilterData: function (b, d, a, g) {
        this._initSort();
        var c = this, f = [], e = 0, r = b;
        switch ($.type(this.sort)) {
            case "array":
                b = this._sortReString[a ? "accurate" : "vague"];
                a = "array" == $.type(this.message.sort) ? this.message.sort : [];
                for (var k = 0, l = b.length; k < l; k++) {
                    b[k][1] = d;
                    var n = RegExp(b[k].join(""), "gi"), h = [], m = 0, r = r.replace(n, function (a, b) {
                        var e = b.split("|"), e = {
                            left: e[c._displayHash.left] || "", right: e[c._displayHash.right] ||
                                "", text: e[c._displayHash.text] || "", data: b
                        };
                        h[m++] = e;
                        return ""
                    });
                    if (m) {
                        h.sort(this.sortFunction);
                        if (g) return h[0].data;
                        a[k] && h.unshift($.tmpl.render(a[k], {val: d, items: h}));
                        f[e++] = h
                    }
                }
                if (g) return !1;
                break;
            case "function":
                h = this.sort(b, d, a, g);
                if (g) return h.length ? h[0].data : !1;
                f[e++] = h;
                break;
            default:
                return !1
        }
        return f = Array.prototype.concat.apply([], f)
    }
};
(function (b) {
    function d() {
        var a = 7, b = 8;
        INTERFACE.isChina || (a = 10, b = 15);
        $("#hotelStartDate").val(getDateStr(a));
        $("#hotelEndDate").val(getDateStr(b));
        $("#hotelStartDate,#hotelEndDate").calendar({
            callback: function (a, b) {
                var e = a.match(/-[\d]{1}\b/g), g = b.attr("id"), d = $("#hotelStartDate"), l = $("#hotelEndDate");
                if (null != e) for (var n = 0; n < e.length; n++) {
                    var h = e[n].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, h)
                }
                switch (g) {
                    case "hotelEndDate":
                        l = d.val();
                        checkDate(l, a) || (a = getDateStr(1, l));
                        break;
                    case "hotelStartDate":
                        e =
                            l.val(), checkDate(a, e) || (l.val(getDateStr(1, a)), l.focus())
                }
                b.val(a)
            }
        });
        $("#hotelKeyword").placeholder();
        0 === $("#btnSearchHotel").length ? $("#cate_hotel .b_blue_s").click(function () {
            var a = $.trim($("#hotelTo").val());
            if ("" == a) return $("#hotelTo").focus(), !1;
            "\u9152\u5e97\u540d/\u5730\u6807/\u5546\u5708" == $("#hotelKeyword").val() && $("#hotelKeyword").val("");
            a = {
                destination: GS.xssFilter(a),
                destinationData: $("#hotelTo").attr("data") || "",
                startDate: $("#hotelStartDate").val(),
                endDate: $("#hotelEndDate").val(),
                hotelLevel: $("#cate_hotel .select-txt").attr("data-value") || 0,
                keyword: GS.xssFilter($.trim($("#hotelKeyword").val()))
            };
            INTERFACE.searchHotelFn(a)
        }) : $("#btnSearchHotel").click(function () {
            var a = $.trim($("#hotelTo").val());
            if ("" == a) return $("#hotelTo").focus(), !1;
            "\u9152\u5e97\u540d/\u5730\u6807/\u5546\u5708" == $("#hotelKeyword").val() && $("#hotelKeyword").val("");
            a = {
                destination: GS.xssFilter(a),
                destinationData: $("#hotelTo").attr("data") || "",
                startDate: $("#hotelStartDate").val(),
                endDate: $("#hotelEndDate").val(),
                hotelLevel: $("#cate_hotel .select-txt").attr("data-value") || 0,
                keyword: GS.xssFilter($.trim($("#hotelKeyword").val()))
            };
            INTERFACE.searchHotelFn(a)
        })
    }

    b = this[b] = this && this[b] || {};
    b.initHotel = function () {
        $(".tabitem .gsn-select").on("click", function (a) {
            var b = $(this);
            "none" == b.children("ul").css("display") ? (b.children("ul").show(), b.children("span").addClass("arrow-cur")) : (b.children("ul").hide(), b.children("span").removeClass("arrow-cur"));
            a.stopPropagation()
        });
        $(document).on("click", function () {
            var a = $(".tabitem .gsn-select");
            a.children("ul").hide();
            a.children("span").removeClass("arrow-cur")
        });
        $(".tabitem .gsn-select a").click(function (a) {
            var b = $(this), f = b.attr("data-value");
            b.parents(".gsn-select").find(".select-txt").html(b.html()).addClass("select-txt-cur").attr("data-value", f);
            b.parents("ul").hide();
            b.parents(".gsn-select").children("span").removeClass("arrow-cur");
            a.stopPropagation()
        });
        var a = $("#hotelTo").val();
        d();
        $("#hotelTo").citySelect({
            alignRight: !0, drawHtml: function (a) {
                $.getScript("http://hotels.ctrip.com/Domestic/Tool/AjaxGetCitySuggestion.aspx",
                    function () {
                        var b = cQuery.jsonpResponse.suggestion, f = [], e = [], d;
                        for (d in b) {
                            var k = [], l = {}, n = b[d], h = n.length, m = 0, p = 0;
                            if ("\u70ed\u95e8" != d) {
                                for (e.push("<li><span>" + d + "</span></li>"); m < h; m++) {
                                    var q = n[m];
                                    (p = q.group || "") && (l[p] = l[p] ? l[p] + ('<a href="javascript:void(0);" data="' + q.data + '">' + q.display + "</a>") : '<div class="city_item_in cf"><span class="city_item_letter">' + p + '</span><a href="javascript:void(0);" data="' + q.data + '">' + q.display + "</a>")
                                }
                                k.push('<div class="city_item">');
                                for (var t in l) l[t] += "</div>",
                                    k.push(l[t]);
                                k.push("</div>")
                            } else {
                                e.push('<li class="current"><span>' + d + "</span></li>");
                                for (k.push('<div class="city_item current"><div>'); p < h; p++) q = n[p], k.push('<a href="javascript:void(0);" data="' + q.data + '">' + q.display + "</a>");
                                k.push("</div></div>")
                            }
                            f.push(k.join(""))
                        }
                        a({html: f.join(""), tabHtml: e.join("")})
                    })
            }, eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    var f = $.trim($(this).text());
                    a != f && ($("#hotelKeyword").val(""), c.val(f), c.attr("data", $(this).attr("data")),
                        a = f);
                    b.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (a, b) {
                var f = "http://hotels.ctrip.com/Domestic/Tool/AjaxIndexCityNew.aspx?keyword=" + escape(a);
                $.getScript(f, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a = a.data.split("@"), f = a.length, g = 0, d = []; g < f; g++) if (0 != g && g != f - 1) {
                            var n = a[g], h = n.split("|"), m = {};
                            0 < h.length && (m.text = h[7] + "" + h[5], m.data = n, m.keyword = h[4], d.push(m))
                        }
                        b(d)
                    }
                })
            }, eventControl: function (b) {
                var c = b.container, f = b.$element;
                c.find(".city_suggest_item").click(function () {
                    var e =
                        $(this).attr("data"), c = e.split("|"), f = c[1], c = c[4];
                    f == c && (c = "");
                    $("#hotelTo").val(f);
                    $("#hotelTo").attr("data", e);
                    a != f && ($("#hotelKeyword").val(c), a = f);
                    b.hidePopup();
                    b.firstData = null
                });
                $(document).one("click", function () {
                    var a = b.firstData;
                    a ? a.keyword && c.find(".city_suggest_item").eq(0).trigger("click") : "" === a && (f.val(""), f.attr("data", ""));
                    b.firstData = null
                })
            }
        })
    };
    b.initForeignHotel = function () {
        var a = $("#hotelTo").val();
        d();
        $("#hotelTo").citySelect({
            alignRight: !0, drawHtml: function (a) {
                $.getScript("http://hotels.ctrip.com/international/Tool/citySource_J.aspx?charset=UTF8",
                    function () {
                        var b = cQuery.jsonpResponse.suggestion.cities, f = [], e = [], d;
                        for (d in b) {
                            var k = [], l = b[d], n = l.length, h = 0;
                            "\u70ed\u95e8" != d ? (e.push("<li><span>" + d + "</span></li>"), k.push('<div class="city_item"><div></div>')) : (e.push('<li class="current"><span>' + d + "</span></li>"), k.push('<div class="city_item current"><div>'));
                            for (; h < n; h++) {
                                var m = l[h];
                                k.push('<a href="javascript:void(0);" data="' + m.data + '">' + m.display + "</a>")
                            }
                            k.push("</div></div>");
                            f.push(k.join(""))
                        }
                        a({html: f.join(""), tabHtml: e.join("")})
                    })
            },
            eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    var f = $.trim($(this).text()), e = $(this).attr("data").split("|"), d = e[2];
                    e[2] = e[3];
                    e[3] = d;
                    a != f && ($("#hotelKeyword").val(""), c.val(f), c.attr("data", e.join("|")), a = f);
                    b.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (a, b) {
                var f = "http://hotels.ctrip.com/international/Tool/cityFilter.aspx?charset=UTF8&IsUseNewStyle=T&keyword=" + escape(a);
                $.getScript(f, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a =
                            a.data.split("@"), f = a.length, d = 0, g = []; d < f; d++) if (0 != d && d != f - 1) {
                            var n = a[d], h = n.split("|"), m = {};
                            0 < h.length && (m.text = h[1], m.data = n, g.push(m))
                        }
                        b(g)
                    }
                })
            }, eventControl: function (b) {
                var c = b.container, f = b.$element;
                c.find(".city_suggest_item").click(function () {
                    var e = $(this).attr("data"), c = e.split("|")[1];
                    $("#hotelTo").val(c);
                    $("#hotelTo").attr("data", e);
                    a != c && ($("#hotelKeyword").val(""), a = c);
                    b.hidePopup();
                    b.firstData = null
                });
                $(document).one("click", function () {
                    var a = b.firstData;
                    a ? c.find(".city_suggest_item").eq(0).trigger("click") :
                        "" === a && (f.val(""), f.attr("data", ""));
                    b.firstData = null
                })
            }
        })
    }
})("SearchControl");
(function (b) {
    function d() {
        $("#flightOneWay")[0].checked = !0;
        $("#flightBackForth")[0].checked = !1;
        $("input[name='flyType']").change(function () {
            0 == $("input[name='flyType']:checked").val() ? $("#cate_flight .sformline").eq(4).addClass("gray") : $("#cate_flight .sformline").eq(4).removeClass("gray")
        });
        $("#flightStartDate").val("yyyy-mm-dd");
        $("#flightEndDate").val("yyyy-mm-dd");
        $("#flightStartDate,#flightEndDate").calendar({
            callback: function (a, b) {
                var c = a.match(/-[\d]{1}\b/g), f = b.attr("id"), e = $("#flightStartDate"),
                    d = $("#flightEndDate");
                if (null != c) for (var k = 0; k < c.length; k++) {
                    var l = c[k].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, l)
                }
                switch (f) {
                    case "flightStartDate":
                        1 == $("input[name='flyType']:checked").val() && (c = d.val(), "yyyy-mm-dd" == c ? (d.val(getDateStr(1, a)), d.focus()) : checkDate(a, c) || (d.val(getDateStr(1, a)), d.focus()));
                        break;
                    case "flightEndDate":
                        c = e.val(), "yyyy-mm-dd" == c || checkDate(c, a) || (a = getDateStr(1, c)), d.parents(".sformline").removeClass("gray"), $("input[name='flyType']").attr("checked", "1")
                }
                b.val(a)
            }
        });
        $("#cate_flight .changeinput a").click(function () {
            var a = $("#flightFrom"), b = $("#flightTo"), c = a.val();
            a.val(b.val());
            b.val(c);
            c = a.attr("data");
            a.attr("data", b.attr("data"));
            b.attr("data", c)
        });
        $("#cate_flight .radiobox").click(function (a) {
            "flyType" != a.target.name && ($(this).find("input[type='radio']").attr("checked", !0), 0 == $("input[name='flyType']:checked").val() ? $("#cate_flight .sformline").eq(4).addClass("gray") : $("#cate_flight .sformline").eq(4).removeClass("gray"))
        });
        0 === $("#btnSearchFlight").length ?
            $("#cate_flight .b_blue_s").click(function () {
                if ("" == $.trim($("#flightFrom").val())) return $("#flightFrom").focus(), !1;
                if ("" == $.trim($("#flightTo").val())) return $("#flightTo").focus(), !1;
                if ("yyyy-mm-dd" == $.trim($("#flightStartDate").val())) return $("#flightStartDate").focus(), !1;
                var a = {
                    type: $("#cate_flight input[type='radio']:checked").val(),
                    from: GS.xssFilter($.trim($("#flightFrom").val())),
                    fromData: $("#flightFrom").attr("data") || "",
                    destination: GS.xssFilter($.trim($("#flightTo").val())),
                    destinationData: $("#flightTo").attr("data") ||
                        "",
                    startDate: $("#flightStartDate").val(),
                    endDate: $("#flightEndDate").val()
                };
                INTERFACE.searchFlightFn(a)
            }) : $("#btnSearchFlight").click(function () {
                if ("" == $.trim($("#flightFrom").val())) return $("#flightFrom").focus(), !1;
                if ("" == $.trim($("#flightTo").val())) return $("#flightTo").focus(), !1;
                if ("yyyy-mm-dd" == $.trim($("#flightStartDate").val())) return $("#flightStartDate").focus(), !1;
                var a = {
                    type: $("#cate_flight input[type='radio']:checked").val(),
                    from: GS.xssFilter($.trim($("#flightFrom").val())),
                    fromData: $("#flightFrom").attr("data") ||
                        "",
                    destination: GS.xssFilter($.trim($("#flightTo").val())),
                    destinationData: $("#flightTo").attr("data") || "",
                    startDate: $("#flightStartDate").val(),
                    endDate: $("#flightEndDate").val()
                };
                INTERFACE.searchFlightFn(a)
            })
    }

    b = this[b] = this && this[b] || {};
    b.initFlight = function () {
        function a(a) {
            var b = [], c = [], f;
            for (f in a) {
                var d = [];
                if ("\u70ed\u95e8" != f) {
                    c.push("<li><span>" + f + "</span></li>");
                    d.push('<div class="city_item">');
                    var g = a[f], m;
                    for (m in g) {
                        var p = g[m], q = p.length, t = 0;
                        for (d.push('<div class="city_item_in cf"><span class="city_item_letter">' +
                            m + "</span>"); t < q; t++) {
                            var s = p[t];
                            d.push('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>")
                        }
                        d.push("</div>")
                    }
                    d.push("</div>")
                } else {
                    p = a[f];
                    q = p.length;
                    g = 0;
                    c.push('<li class="current"><span>' + f + "</span></li>");
                    d.push('<div class="city_item current"><div>');
                    for (g = 0; g < q; g++) s = p[g], d.push('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>");
                    d.push("</div></div>")
                }
                b.push(d.join(""))
            }
            return {html: b.join(""), tabHtml: c.join("")}
        }

        var b = null, c = null;
        d();
        $("#flightFrom,#flightTo").citySelect({
            alignRight: !0,
            drawHtml: function (e) {
                b ? e(a(b)) : $.ajax({
                    dataType: "script",
                    scriptCharset: "UTF8",
                    url: "http://webresource.c-ctrip.com/code/cquery/resource/address/flight/flight_new_UTF8.js",
                    success: function () {
                        b = cQuery.jsonpResponse.suggestion;
                        c = cQuery.jsonpResponse.data;
                        e(a(b))
                    }
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    b.val() != $(this).text() && (b.val($(this).text()), b.attr("data", $(this).attr("data")));
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.blur()
                })
            }
        });
        var f = new CitySuggestFilter({
            sort: function (a, b, c, d) {
                var f = [], g = 0, m = RegExp("@" + b + ".+", "i"), p = RegExp("@.+\\|([a-z]{3},)*" + b + ".+", "i"),
                    q = /[a-z]/i;
                a.replace(RegExp("@([^@]*" + b + "[^@]*)", "gi"), function (a, e) {
                    var c = 0, k = !1, u = e.split("|");
                    d ? u[1] == b && (f[g++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: e,
                        sortPrioity: c
                    }) : ("" != u[6] && (c -= 200), 0 < u[1].indexOf("(") && (c -= 1), -1 < u[0].indexOf("Shanhaiguan") && (c -= 5), 1 == b.length ? q.test(b) ? (k = m.test(a), c += 100) : (k = p.test(a), c += 50) : 1 < b.length && (m.test(a) && (c += 100, k =
                        !0), p.test(a) && (0 == u[4].indexOf(b.toUpperCase()) && (c += 50), 0 == u[2].indexOf(b.toUpperCase()) && (c += 10), k = !0)), k && isNaN(b) && (f[g++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: e,
                        priority: c
                    }))
                });
                d || f.sort(function (a, b) {
                    return a.priority == b.priority ? a.data < b.data ? -1 : a.data > b.data ? 1 : 0 : a.priority > b.priority ? -1 : 1
                });
                return f
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (a, b) {
                var d = [];
                c && (d = f.getfilterData(c, a, !1, !1));
                if (d && 0 < d.length) for (var g = d.length, n = 0; n < g; n++) {
                    var h = d[n];
                    str = h.data;
                    arr = str.split("|");
                    airPort = arr[5];
                    distance = arr[6];
                    if ("-" != airPort) {
                        h.noAirPort = !0;
                        airPort = airPort.split("javascript:void(0)");
                        distance = distance.split("javascript:void(0)");
                        h.airPort = [];
                        h.airPortText = [];
                        for (var m = 0; m < airPort.length; m++) {
                            var p = airPort[m].replace("-", "");
                            h.airPortText.push("-\u90bb\u8fd1\u673a\u573a\uff1a" + p + "-" + distance[m] + "");
                            h.airPort.push(p)
                        }
                    }
                }
                b(d)
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var d = $(this).attr("data").split("|"), f = d[1], d = d[2];
                    $(this).attr("data-airPort") ? (f = $(this).attr("data-airPort"),
                        b.val(f), b.trigger("keyup")) : (b.val(f), a.hidePopup(), b.attr("data", "|" + f + "|" + d), "flightFrom" == b.attr("id") && $("#flightTo").trigger("click"));
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click", function () {
                    var c = a.firstData;
                    c ? c.noAirPort && 0 < c.airPort.length ? (b.val(""), b.attr("data", "")) : (b.val(c.text), c = c.data.split("|"), b.attr("data", "|" + c[1] + "|" + c[2])) : "" === c && (b.val(""), b.attr("data", ""));
                    a.firstData = null
                })
            }
        })
    };
    b.initForeignFlight = function () {
        d();
        $("#flightFrom,#flightTo").citySelect({
            alignRight: !0,
            drawHtml: function (a, b) {
                var c = "",
                    c = "flightFrom" == b.$element.attr("id") ? "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_start_new_UTF8.js" : "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_dest_new_UTF8.js";
                $.ajax({
                    dataType: "script", scriptCharset: "UTF8", url: c, success: function () {
                        var b = cQuery.jsonpResponse.suggestion, e = [], c = [], d = 0, g;
                        for (g in b) {
                            var n = [], h = b[g], m = h.length, p = 0;
                            0 !== d ? (c.push("<li><span>" + g + "</span></li>"), n.push('<div class="city_item"><div>')) :
                                (c.push('<li class="current"><span>' + g + "</span></li>"), n.push('<div class="city_item current"><div>'));
                            for (p = 0; p < m; p++) {
                                var q = h[p];
                                n.push('<a href="javascript:void(0);" data="' + q.data + '">' + q.display + "</a>")
                            }
                            n.push("</div></div>");
                            e.push(n.join(""));
                            d++
                        }
                        a({html: e.join(""), tabHtml: c.join("")})
                    }
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    if (b.val() != $(this).text()) {
                        var c = escape($(this).text());
                        $.ajax({
                            dataType: "script",
                            scriptCharset: "UTF8",
                            url: "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" +
                                c + "&a=0&t=0",
                            success: function () {
                                var a = cQuery.jsonpResponse, e = a.data;
                                a.data && 1 < a.data.split("|").length && (c = e.split("|")[1], a = c.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"), b.val(c), b.attr("data", a))
                            }
                        })
                    }
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.blur()
                })
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (a, b) {
                var c = "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" + escape(a) + "&a=0&t=0";
                $.getScript(c, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a =
                            a.data.split("@"), c = a.length, d = 0, k = []; d < c; d++) if (a[d]) {
                            var l = a[d], n = l.split("|"), h = {};
                            0 < n.length && (h.text = n[3], h.data = l, h.value = n[1], k.push(h))
                        }
                        b(k)
                    } else b([])
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var d = $(this).attr("data").split("|")[1];
                    b.val(d);
                    b.attr("data", d.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"));
                    a.hidePopup();
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click",
                    function () {
                        var c = a.firstData;
                        c ? (b.val(c.value), b.attr("data", c.value.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"))) : "" === c && (b.val(""), b.attr("data", ""));
                        a.firstData = null
                    })
            }
        })
    }
})("SearchControl");
var Cmd = {};
(function (b) {
    function d() {
        $("#cate_travel .radiobox").click(function () {
            $(this).find("input[type='radio']").attr("checked", !0);
            $(this).parents(".checkul").find(".radiobox").not(this).find("input[type='radio']").attr("checked", !1)
        });
        0 === $("#btnSearchTravel").length ? $("#cate_travel .b_blue_s").click(function () {
            if ("" == $.trim($("#travelTo").val())) return $("#travelTo").focus(), !1;
            var a = {
                from: $.trim($("#travelFrom").val()),
                fromData: $("#travelFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#travelTo").val())),
                destinationData: $("#travelTo").attr("data") || ""
            };
            INTERFACE.searchTravelFn(a)
        }) : $("#btnSearchTravel").click(function () {
            if ("" == $.trim($("#travelTo").val())) return $("#travelTo").focus(), !1;
            var a = {
                from: $.trim($("#travelFrom").val()),
                fromData: $("#travelFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#travelTo").val())),
                destinationData: $("#travelTo").attr("data") || ""
            };
            INTERFACE.searchTravelFn(a)
        })
    }

    b = this[b] = this && this[b] || {};
    b.initTravel = function () {
        d();
        var a = $("#travelFrom").attr("data") || 2,
            b = {}, c = {
                "\u70ed\u95e8\u57ce\u5e02": [{display: "\u5317\u4eac", data: "1"}, {
                    display: "\u4e0a\u6d77",
                    data: "2"
                }, {display: "\u5929\u6d25", data: "3"}, {
                    display: "\u91cd\u5e86",
                    data: "4"
                }, {display: "\u54c8\u5c14\u6ee8", data: "5"}, {
                    display: "\u5927\u8fde",
                    data: "6"
                }, {display: "\u9752\u5c9b", data: "7"}, {display: "\u897f\u5b89", data: "10"}, {
                    display: "\u6566\u714c",
                    data: "11"
                }, {display: "\u5357\u4eac", data: "12"}],
                ABCD: {
                    B: [{display: "\u5317\u4eac", data: "1"}, {display: "\u5305\u5934", data: "141"}],
                    C: [{display: "\u91cd\u5e86", data: "4"},
                        {display: "\u6210\u90fd", data: "28"}, {
                            display: "\u957f\u6625",
                            data: "158"
                        }, {display: "\u957f\u6c99", data: "206"}, {display: "\u5e38\u5dde", data: "213"}],
                    D: [{display: "\u5927\u8fde", data: "6"}, {display: "\u4e1c\u839e", data: "223"}]
                },
                EFGH: {
                    F: [{display: "\u4f5b\u5c71", data: "251"}, {display: "\u798f\u5dde", data: "258"}],
                    G: [{display: "\u5e7f\u5dde", data: "32"}, {display: "\u8d35\u9633", data: "38"}],
                    H: [{display: "\u54c8\u5c14\u6ee8", data: "5"}, {
                        display: "\u676d\u5dde",
                        data: "17"
                    }, {display: "\u6d77\u53e3", data: "42"}, {
                        display: "\u547c\u548c\u6d69\u7279",
                        data: "103"
                    }, {display: "\u6d77\u62c9\u5c14", data: "142"}, {display: "\u5408\u80a5", data: "278"}]
                },
                JKLM: {
                    J: [{display: "\u6d4e\u5357", data: "144"}, {display: "\u6c5f\u95e8", data: "316"}],
                    K: [{display: "\u6606\u660e", data: "34"}, {display: "\u5580\u4ec0\u5e02", data: "109"}],
                    L: [{display: "\u4e3d\u6c5f", data: "37"}, {
                        display: "\u62c9\u8428",
                        data: "41"
                    }, {display: "\u5170\u5dde", data: "100"}],
                    M: [{display: "\u7ef5\u9633", data: "370"}]
                },
                NOPQRS: {
                    N: [{display: "\u5357\u4eac", data: "12"}, {display: "\u5357\u901a", data: "82"}, {
                        display: "\u5b81\u6ce2",
                        data: "375"
                    }, {display: "\u5357\u660c", data: "376"}, {display: "\u5357\u5b81", data: "380"}],
                    Q: [{display: "\u9752\u5c9b", data: "7"}, {display: "\u6cc9\u5dde", data: "406"}],
                    S: [{display: "\u4e0a\u6d77", data: "2"}, {
                        display: "\u82cf\u5dde",
                        data: "14"
                    }, {display: "\u6df1\u5733", data: "30"}, {
                        display: "\u4e09\u4e9a",
                        data: "43"
                    }, {display: "\u77f3\u5bb6\u5e84", data: "428"}, {
                        display: "\u6c55\u5934",
                        data: "447"
                    }, {display: "\u6c88\u9633", data: "451"}]
                },
                TUVWX: {
                    T: [{display: "\u5929\u6d25", data: "3"}, {display: "\u592a\u539f", data: "105"}, {
                        display: "\u53f0\u5dde",
                        data: "578"
                    }],
                    W: [{display: "\u65e0\u9521", data: "13"}, {
                        display: "\u4e4c\u9c81\u6728\u9f50",
                        data: "39"
                    }, {display: "\u6b66\u6c49", data: "477"}, {
                        display: "\u5a01\u6d77",
                        data: "47"
                    }, {display: "\u6e29\u5dde", data: "491"}],
                    X: [{display: "\u897f\u5b89", data: "10"}, {
                        display: "\u53a6\u95e8",
                        data: "25"
                    }, {display: "\u897f\u5b81", data: "124"}, {
                        display: "\u897f\u660c",
                        data: "494"
                    }, {display: "\u5f90\u5dde", data: "512"}]
                },
                YZ: {
                    Y: [{display: "\u94f6\u5ddd", data: "99"}, {
                        display: "\u8fd0\u57ce",
                        data: "140"
                    }, {display: "\u5ef6\u5409", data: "523"},
                        {display: "\u6986\u6797", data: "527"}, {
                            display: "\u70df\u53f0",
                            data: "533"
                        }, {display: "\u4e49\u4e4c", data: "536"}],
                    Z: [{display: "\u73e0\u6d77", data: "31"}, {
                        display: "\u4e2d\u5c71",
                        data: "553"
                    }, {display: "\u90d1\u5dde", data: "559"}]
                }
            };
        $("#travelFrom,#travelPlayFrom").citySelect({
            alignRight: !0, drawHtml: function (a) {
                var b = [], d = [], f;
                for (f in c) {
                    var g = [];
                    if ("\u70ed\u95e8\u57ce\u5e02" != f) {
                        d.push("<li><span>" + f + "</span></li>");
                        g.push('<div class="city_item">');
                        var h = c[f], m;
                        for (m in h) {
                            var p = h[m], q = p.length, t = 0;
                            for (g.push('<div class="city_item_in cf"><span class="city_item_letter">' +
                                m + "</span>"); t < q; t++) {
                                var s = p[t];
                                g.push('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>")
                            }
                            g.push("</div>")
                        }
                        g.push("</div>")
                    } else {
                        p = c[f];
                        q = p.length;
                        h = 0;
                        d.push('<li class="current"><span>' + f + "</span></li>");
                        g.push('<div class="city_item current"><div>');
                        for (h = 0; h < q; h++) s = p[h], g.push('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>");
                        g.push("</div></div>")
                    }
                    b.push(g.join(""))
                }
                a({html: b.join(""), tabHtml: d.join("")})
            }, eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    c.val() !=
                    $(this).text() && (c.val($(this).text()), c.attr("data", $(this).attr("data")));
                    if ("travelFrom" == c.attr("id")) a = $(this).attr("data") || 2; else if ("travelPlayFrom" == c.attr("id")) {
                        var d = $(this).attr("data") || 2;
                        INTERFACE.travelPlaySearch(d)
                    }
                    b.blur()
                })
            }
        });
        var f = new CitySuggestFilter;
        $("#travelTo").citySuggest({
            cannotToCache: !0, formatData: function (c, d) {
                b[a] ? (data = b[a], d(f.getfilterData(data, c, !1, !1))) : $.getScript("http://vacations.ctrip.com/booking/PageTools/HomeStatic/DestSelector2013.ashx?startCity=" + a, function () {
                    var k =
                        Cmd.JsonPData;
                    k && (b[a] = k, d(f.getfilterData(k, c, !1, !1)))
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function () {
                    var c = $(this).attr("data").split("|")[1];
                    b.val(c);
                    a.hidePopup()
                })
            }
        })
    }
})("SearchControl");
(function (b) {
    b = this[b] = this && this[b] || {};
    b.initTicket = function () {
        $("#ticketText").placeholder();
        new CitySuggestFilter;
        $("#ticketText").citySuggest({
            formatData: function (b, a) {
                $.ajax({
                    type: "GET",
                    url: "http://piao.ctrip.com/thingstodo-booking-bookingwebsite/api/AutoComplete?keyWords=" + b + "&pageIndex=1&count=10",
                    dataType: "jsonp",
                    success: function (b) {
                        b = b.SearchList;
                        for (var c = 0, d = b.length, e = []; c < d; c++) {
                            var r = b[c];
                            dataStr = r.ID + "|" + r.Name + "|" + r.ParentName + "|" + r.Type;
                            e.push({
                                data: dataStr, left: r.Name, right: r.ParentName,
                                text: r.Name, showRight: !0
                            })
                        }
                        a(e, !0)
                    }
                })
            }, eventControl: function (b) {
                var a = b.$element;
                b.container.find(".city_suggest_item").click(function () {
                    var g = $(this).attr("data"), c = g.split("|")[1];
                    a.val(c).attr("data", g);
                    b.hidePopup()
                })
            }
        });
        0 === $("#btnSearchTicket").length ? $("#cate_ticket .b_blue_s").click(function () {
            var b = $("#ticketText"), a = b.attr("data"), b = $.trim(b.val());
            if ("" == b || "\u8bf7\u8f93\u5165\u666f\u70b9\u540d\u79f0" == b) return $("#ticketText").focus(), !1;
            var a = a.split("|"), g = a[0], c = "", c = "4" === a[3] ? "http://piao.ctrip.com/dest/t" +
                g + ".html" : "http://piao.ctrip.com/piao.html?keyword=" + encodeURIComponent(b);
            window.open(c)
        }) : $("#btnSearchTicket").click(function () {
            var b = $("#ticketText"), a = b.attr("data"), b = $.trim(b.val());
            if ("" == b || "\u8bf7\u8f93\u5165\u666f\u70b9\u540d\u79f0" == b) return $("#ticketText").focus(), !1;
            var a = a.split("|"), g = a[0], c = "",
                c = "4" === a[3] ? "http://piao.ctrip.com/dest/t" + g + ".html" : "http://piao.ctrip.com/piao.html?keyword=" + encodeURIComponent(b);
            window.open(c)
        })
    }
})("SearchControl");
(function (b) {
    function d() {
        var a = 7;
        INTERFACE.isChina || (a = 10);
        $("#trainStartDate").val(getDateStr(a));
        $("#trainStartDate").calendar({
            callback: function (a, b) {
                var d = a.match(/-[\d]{1}\b/g);
                if (null != d) for (var e = 0; e < d.length; e++) {
                    var r = d[e].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, r)
                }
                b.val(a)
            }
        });
        $("#cate_train .radiobox").click(function () {
            $(this).find("input[type='radio']").attr("checked", !0);
            $(this).siblings(".radiobox").find("input[type='radio']").attr("checked", !1)
        });
        $("#cate_train .changeinput a").click(function () {
            var a =
                $("#trainFrom"), b = $("#trainTo"), d = a.val();
            a.val(b.val());
            b.val(d);
            d = a.attr("data");
            a.attr("data", b.attr("data"));
            b.attr("data", d)
        });
        $("#cate_train .b_blue_s").click(function () {
            if ("" == $.trim($("#trainFrom").val())) return $("#trainFrom").focus(), !1;
            if ("" == $.trim($("#trainTo").val())) return $("#trainTo").focus(), !1;
            var a = {
                from: GS.xssFilter($.trim($("#trainFrom").val())),
                fromData: $("#trainFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#trainTo").val())),
                destinationData: $("#trainTo").attr("data") ||
                    "",
                startDate: $("#trainStartDate").val()
            };
            INTERFACE.searchTrainFn(a)
        })
    }

    b = this[b] = this && this[b] || {};
    b.initTrain = function () {
        function a(a) {
            var b = [], c = [], d;
            for (d in a) {
                var f = [], g = {}, m = a[d], p = m.length, q = 0, t = 0;
                if ("\u70ed\u95e8" != d) {
                    for (c.push("<li><span>" + d + "</span></li>"); q < p; q++) {
                        var s = m[q];
                        (t = s.data.split("|")[2].substring(0, 1).toUpperCase()) && (g[t] = g[t] ? g[t] + ('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>") : '<div class="city_item_in cf"><span class="city_item_letter">' + t + '</span><a href="javascript:void(0);" data="' +
                            s.data + '">' + s.display + "</a>")
                    }
                    f.push('<div class="city_item">');
                    for (var w in g) g[w] += "</div>", f.push(g[w]);
                    f.push("</div>")
                } else {
                    c.push('<li class="current"><span>' + d + "</span></li>");
                    for (f.push('<div class="city_item current"><div>'); t < p; t++) s = m[t], f.push('<a href="javascript:void(0);" data="' + s.data + '">' + s.display + "</a>");
                    f.push("</div></div>")
                }
                b.push(f.join(""))
            }
            return {html: b.join(""), tabHtml: c.join("")}
        }

        d();
        var b = null, c = null;
        $("#trainFrom,#trainTo").citySelect({
            alignRight: !0, drawHtml: function (e) {
                b ?
                    e(a(b)) : $.ajax({
                        dataType: "script",
                        scriptCharset: "UTF8",
                        url: "http://webresource.ctrip.com/code/cquery/resource/address/train_new/station_UTF8.js",
                        success: function () {
                            b = cQuery.jsonpResponse.suggestion;
                            c = cQuery.jsonpResponse.data;
                            e(a(b))
                        }
                    })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    b.val() != $(this).text() && (b.val($(this).text()), b.attr("data", $(this).attr("data")));
                    "trainFrom" == b.attr("id") && $("#trainTo").trigger("click");
                    a.blur()
                })
            }
        });
        var f = new CitySuggestFilter({sort: "^0$ ^1$ ^3+$ ^0 ^1 ^3+".split(" ")});
        $("#trainFrom,#trainTo").citySuggest({
            formatData: function (a, b) {
                b(f.getfilterData(c, a, !1, !1))
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var d = $(this).attr("data").split("|"), f = d[1], d = $.trim(d[0]), d = "|" + f + "|" + d;
                    b.val(f);
                    b.attr("data", d);
                    a.hidePopup();
                    "trainFrom" == b.attr("id") && $("#trainTo").trigger("click");
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click", function () {
                    var c = a.firstData;
                    if (c) {
                        var d = c.data.split("|"), f = d[1], d = $.trim(d[0]),
                            f = "|" + f + "|" + d;
                        b.val(c.text);
                        b.attr("data", f)
                    } else "" === c && (b.val(""), b.attr("data", ""));
                    a.firstData = null
                })
            }
        })
    }
})("SearchControl");

function initCitySelect() {
    var b = INTERFACE.isChina;
    $("#cateSTab li a").click(function () {
        var d = $(this);
        if (!d.parent().hasClass("active")) {
            d.parent().siblings("li").removeClass("active");
            d.parent().addClass("active");
            var a = d.attr("href");
            $(a).siblings(".tabitem").removeClass("active");
            $(a).addClass("active");
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            if (!d.data("withoutFn")) switch (a) {
                case "#cate_flight":
                    b ? SearchControl.initFlight() : SearchControl.initForeignFlight();
                    d.data("withoutFn",
                        !0);
                    break;
                case "#cate_ticket":
                    SearchControl.initTicket();
                    d.data("withoutFn", !0);
                    break;
                case "#cate_train":
                    SearchControl.initTrain(), d.data("withoutFn", !0)
            }
        }
        return !1
    });
    b ? SearchControl.initHotel() : SearchControl.initForeignHotel();
    SearchControl.initTravel()
}

function submitForm(b) {
    if (b.action) {
        var d = document.createElement("FORM"), a = b.charset || "utf-8", g = b.method || "post", c = b.target || "",
            f = [], e = b.action;
        b = b.param || {};
        for (var r in b) f.push('<input type="hidden" name="' + r + '" value="' + b[r] + '" />');
        d.setAttribute("accept-charset", a);
        d.target = c;
        d.method = g;
        d.action = e;
        d.innerHTML = f.join("");
        document.body.appendChild(d);
        document.charset = "UTF8";
        jQuery(window).on("beforeunload", function () {
            document.charset = "UTF-8";
            jQuery(window).off("beforeunload")
        });
        d.submit()
    }
}

function getDateStr(b, d) {
    var a = new Date;
    if (d) var a = d.split("-"), g = parseInt(a[0], 10), c = parseInt(a[1], 10) - 1, a = parseInt(a[2], 10),
        a = new Date(g, c, a);
    a.setDate(a.getDate() + b);
    g = a.getFullYear();
    c = 10 > a.getMonth() + 1 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1;
    a = 10 > a.getDate() ? "0" + a.getDate() : a.getDate();
    return g + "-" + c + "-" + a
}

function checkDate(b, d) {
    var a = b.split("-"), g = d.split("-"), c = parseInt(a[0], 10), f = parseInt(g[0], 10), e = parseInt(a[1], 10),
        r = parseInt(g[1], 10), a = parseInt(a[2], 10), g = parseInt(g[2], 10);
    return c < f || c == f && e < r || c == f && e == r && a < g ? !0 : !1
}

function GetDateDiff(b) {
    var d = new Date;
    b = new Date(Date.parse(b.replace(/-/g, "/")));
    return Math.ceil(parseFloat((b - d) / 864E5, 10))
}

(function (b) {
    var d = document.referrer, a = parseInt(5 * Math.random());
    if (-1 == d.indexOf("ctrip") && 0 != a) b(window).one("load", function () {
        window.setTimeout(function () {
            void 0 == window._USER.userid && INTERFACE.pop_pv_url && window.open(INTERFACE.pop_pv_url, "newwindow", "height=447,width=610,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
        }, 1E4)
    })
})(jQuery);

function con_focus(b) {
    var d = $(b), a = d.val().length;
    d.focus();
    document.selection ? d[0].createTextRange ? (b = d[0].createTextRange(), b.moveStart("character", a), b.collapse(), b.select()) : d.focus() : "number" == typeof b.selectionStart && "number" == typeof b.selectionEnd && (b.selectionStart = b.selectionEnd = a)
}

function toFixed(b, d) {
    with (Math) return round(b * pow(10, d)) / pow(10, d)
}

var doReply = function () {
    $(".ctd_comments_box").hover(function () {
        $(this).find(".ctd_comments_contrl .contrl_01").css("color", "#999")
    }, function () {
        $(this).find(".ctd_comments_contrl .contrl_01").css("color", "#f2f2f2")
    });
    $("[data-onsubmit]").each(function () {
        $(this).data("isOne", 0)
    });
    $(".ctd_comments .link_reply").click(function () {
        if (!$(this).hasClass("a_popup_login")) {
            var b = $(this).parent().siblings(".ctd_comments_reply");
            if (b.is(":visible")) b.slideUp(200); else {
                b.slideDown(200);
                b.find("textarea").val("");
                var d = $(this).parents(".ctd_comments_box").find(".ctd_comments_username").text(),
                    d = "@" + $.trim(d) + "\n";
                b.find("textarea").val(d);
                b.find("textarea").data("name", d);
                con_focus(b.find("textarea")[0])
            }
        }
    });
    $(".ctd_comments .ctd_comments_reply .contrl_01").click(function () {
        $(this).parent().slideUp(200);
        return !1
    });
    $(".ctd_comments_reply textarea").each(function () {
        var b = $(this);
        b.gsInputLen(function (d) {
            var a = b.parents(".ctd_comments_reply"), g = a.find(".word_length");
            d = 1E3 - d;
            -1 >= d ? (g = b.val(), g = $.gsSubstring(g,
                1E3, 1), b.val(g)) : g.html(d);
            a.find(".error_tip").hide()
        })
    });
    $(".ctd_comments_reply .gs_btn_v2").click(function () {
        var b = $(this).siblings(".textarea").find("textarea"), d = $(this).siblings(".error_tip");
        areaVal = $.trim(b.val());
        var a = $.trim(b.data("name")), a = areaVal.replace(a, ""), g = b.attr("data-referenceCategory") || "",
            c = b.attr("data-referenceids") || "", f = $(this);
        a ? CRealName.realNameView(function (b, a) {
            b && a && f.gsdisable({
                callback: function () {
                    INTERFACE.add_comment({
                        TravelId: INTERFACE.TravelId, ReferenceIds: c,
                        ReferenceCategory: g, RemarkContent: encodeURIComponent(areaVal)
                    }, function () {
                        addCommentNum()
                    })
                }
            })
        }, function (b) {
        }, !0) : d.show()
    })
};

function addCommentTotal(b) {
    var d = INTERFACE.isHost;
    b = b || 0;
    if (d) {
        var d = $(".ctd_data .ctd_georgia.color_05"), a = d.text(), a = b;
        1E5 < a && (a = toFixed(a / 1E5, 0) + "<em>\u4e07+</em>");
        d.text(a);
        d.attr("title", b)
    } else d = $(".ctd_controls .link_comment").find("span"), d.text(b);
    $(".ctd_comments .ctd_comments_title span").html("(" + b + ")")
}

function addCommentNum() {
    var b = 0;
    if (INTERFACE.isHost) {
        var d = $(".ctd_data .ctd_georgia.color_05"), a = d.text(), b = parseInt(d.attr("title"), 10),
            b = isNaN(b) ? 0 : b;
        b++;
        a = b;
        1E5 < a && (a = toFixed(a / 1E5, 0) + "<em>\u4e07+</em>");
        d.text(a);
        d.attr("title", b)
    } else d = $(".ctd_controls .link_comment").find("span"), b = parseInt(d.text(), 10), b = isNaN(b) ? 0 : b, b++, d.text(b);
    $(".ctd_comments .ctd_comments_title span").html("(" + b + ")")
}

$(function () {
    function b() {
        "0" == privateObject.CurrentUserId && $.cookiedb({name: "gs_link_like", value: INTERFACE.TravelId})
    }

    function d(b) {
        b = $(b);
        var a = $(".ctd_data .color_03"), d = a.text(), e = parseInt(a.attr("title"), 10), e = isNaN(e) ? 0 : e;
        e++;
        d = e;
        1E5 < d && (d = toFixed(d / 1E5, 0));
        a.text(d);
        a.attr("title", e);
        b.html("<i></i>\u5df2\u81ea\u604b");
        b.attr("title", "\u5df2\u81ea\u604b")
    }

    var a = INTERFACE.isHost;
    $(".ctd_controls .link_collect").gsbasecollect({
        requestFn: function (b) {
            $(".float_div .btn_collect").addClass("click_collect");
            INTERFACE.collectRequestFn({
                favouriteid: $(b).data("favouriteid"),
                favouritecategory: $(b).data("favouritecategory")
            })
        }
    });
    $(".float_div .btn_collect").gsbasecollect({
        requestFn: function (b) {
            $(".ctd_controls .link_collect").addClass("click_collect");
            INTERFACE.collectRequestFn({
                favouriteid: $(b).data("favouriteid"),
                favouritecategory: $(b).data("favouritecategory")
            })
        }
    });
    "0" == privateObject.CurrentUserId && "repeat" == $.cookiedb({
        name: "gs_link_like",
        value: INTERFACE.TravelId,
        isfind: 1
    }) && ($(".float_div .btn_like").addClass("click_like"),
        $(".ctd_controls .link_like").addClass("click_like"));
    $(".ctd_controls .link_like").gsbaselike({
        requestFn: function () {
        }, callback: function (g) {
            a ? (d(g), $(".float_div .btn_like").addClass("click_like_host")) : ($(".float_div .btn_like").addClass("click_like"), b());
            INTERFACE.likeRequestFn({likeid: $(g).data("likeid"), likecategory: $(g).data("likecategory")})
        }
    });
    $(".float_div .btn_like").gsbaselike({
        requestFn: function () {
        }, callback: function (g) {
            var c = $(".ctd_controls .link_like");
            if (a) d(c), $(".float_div .btn_like").addClass("click_like_host");
            else {
                var f = c.find("span"), f = parseInt(f.text(), 10), f = isNaN(f) ? 0 : f;
                f++;
                c.html("<i></i>\u5df2\u559c\u6b22<span>" + f + "</span>");
                $(".float_div .btn_like").addClass("click_like");
                b()
            }
            c.addClass("click_like");
            INTERFACE.likeRequestFn({likeid: $(g).data("likeid"), likecategory: $(g).data("likecategory")})
        }
    })
});
$(function () {
    (function () {
        var b = $("#report_area"), d = b.parents(".textarea_box").find(".error_tip");
        total = 1E3;
        b.val("");
        b.placeholder();
        b.focus(function () {
            d.hide()
        });
        var a = b.next(".ctd_comments_tip").find("em.word_length");
        b.gsInputLen(function (d) {
            -1 >= total - d ? (d = b.val(), d = $.gsSubstring(d, total, 1), b.val(d), a.text(total)) : a.text(d);
            $(".reportmain").find(".gsn-tiptext").show();
            $(".reportmain").find(".journal-comment-tip").hide()
        });
        $(".float_div .btn_comment").add(".ctd_controls .link_comment").click(function () {
            var a =
                $(".ctd_comments").offset().top - 55;
            $("body,html").animate({scrollTop: a}, 500, function () {
                con_focus(b[0])
            })
        });
        $(".ctd_comments_box .btn_publish").click(function () {
            if (!$(this).hasClass("a_popup_login")) {
                var g = b.val(), c = $(this), g = $.trim(g);
                (g = g.replace("Hi\uff0c\u697c\u4e3b\u7b49\u4f60\u7684\u56de\u590d\u5462~", "")) ? CRealName.realNameView(function (d, e) {
                    if (d && e) {
                        var r = b.attr("data-referencecategory") || "", k = b.attr("data-referenceids") || "";
                        c.gsdisable({
                            disable: "gs_btn_v2_gray",
                            text: '<img class="btn_ajax" src="http://youresource.c-ctrip.com/img/load.gif" />\u63d0\u4ea4\u4e2d...',
                            callback: function () {
                                INTERFACE.add_comment({
                                    TravelId: INTERFACE.TravelId,
                                    ReferenceIds: k,
                                    ReferenceCategory: r,
                                    RemarkContent: encodeURIComponent(g)
                                }, function () {
                                    addCommentNum();
                                    b.val("");
                                    a.text("0")
                                })
                            }
                        })
                    }
                }, function (b) {
                }, !0) : d.show()
            }
        })
    })()
});
$(function () {
    function b() {
        var b = g.offset().top + 8, a = g.offset().left, d = g.width(), e = c.width(), d = d - e - 5;
        (e = g.attr("data-already-like")) && "true" === e ? c.find(".link_like").addClass("click_like") : c.find(".link_like").removeClass("click_like");
        c.css({top: b, left: a + d});
        c.fadeIn("fast")
    }

    function d() {
        r = 0;
        clearTimeout(e);
        e = setTimeout(function () {
            0 == r && c.fadeOut("fast")
        }, 50)
    }

    var a = INTERFACE.isHost, g = null, c = $("#imgControls");
    if (0 === c.length) {
        var f = [];
        f.push('<div id="imgControls" class="img_controls">');
        f.push(' <a class="link_like" href="javascript:;" title="\u559c\u6b22"><i></i></a>');
        f.push(' <a class="link_comment" href="javascript:;" title="\u5f15\u7528\u5230\u8bc4\u8bba"><i></i></a>');
        f.push("</div>");
        c = $(f.join(""));
        c.appendTo($(document.body))
    }
    var e = null, r = 0;
    a || GS.ismoblie || ($(".ctd_main_body").on("mouseenter", ".img,.w_img", function () {
        r = 1;
        g = $(this);
        b();
        c.hover(function () {
            r = 2
        }, function () {
            d()
        })
    }), $(".ctd_main_body").on("mouseleave", ".img,.w_img", function () {
        d()
    }));
    c.find(".link_like").gsbaselike({
        requestFn: function () {
        }, callback: function (b) {
            b = $(b);
            a && b.attr("title", "\u5df2\u81ea\u604b");
            g.attr("data-already-like", "true");
            INTERFACE.likeRequestFn({likeid: g.data("likeid"), likecategory: g.data("likecategory")})
        }
    });
    (function () {
        var b = $("#picComment"), a = $("#pic_content"), c = "", d = "", e = b.find(".count"),
            f = parseInt(e.text(), 10);
        $(".img_controls .link_comment").click(function () {
            b.find(".gsn-tiptext").show();
            b.find(".journal-comment-tip").hide();
            a.click();
            if (!$(this).hasClass("a_popup_login")) {
                $.popupbox.show({id: "picComment"});
                c = g.attr("data-referenceCategory") || "";
                d = g.attr("data-referenceids") ||
                    "";
                var e = $("#authorDisplayName").html(), e = $.trim(e);
                a.val("\u5f15\u7528 @" + e + " \u7684\u7167\u7247\n")
            }
            con_focus(a[0])
        });
        a.gsInputLen(function (c) {
            c = f - c;
            -1 >= c ? (c = a.val(), c = $.gsSubstring(c, f, 1), a.val(c)) : e.html(c);
            b.find(".gsn-tiptext").show();
            b.find(".journal-comment-tip").hide()
        });
        b.on("click", ".close, .gsn-btn-6", function () {
            e.text(f);
            a.val("");
            $.popupbox.close()
        });
        b.on("click", ".gsn-btn-2", function () {
            var g = a.val();
            (g = $.trim(g)) ? (b.find(".gsn-tiptext").show(), b.find(".journal-comment-tip").hide(),
                $(this).gsdisable({
                    callback: function () {
                        INTERFACE.add_comment({
                            TravelId: INTERFACE.TravelId,
                            ReferenceIds: d,
                            ReferenceCategory: c,
                            RemarkContent: encodeURIComponent(g)
                        }, function () {
                            addCommentNum();
                            e.text(f);
                            a.val("");
                            $.popupbox.close()
                        })
                    }
                })) : (b.find(".gsn-tiptext").hide(), b.find(".journal-comment-tip").show())
        })
    })()
});
$(function () {
    function b() {
        var g = $("#generatPDF"), c = setInterval(function () {
            $.get(INTERFACE.pdfCheckUrl + "?travelId=" + INTERFACE.TravelId + "&rnd=" + new Date, function (f) {
                switch (f.Status) {
                    case 2:
                        clearInterval(c);
                        var e = f.Title;
                        f = parseInt(10 * f.FileSize / 1024) / 10;
                        e = "<h2>\u8ba9\u4f60\u4e45\u7b49\u4e86\uff0c\u6e38\u8bb0\u5df2\u5236\u4f5c\u6210PDF</h2><div><i></i><h4>" + e + "</h4><p>PDF\u5927\u5c0f\uff1a" + f + 'MB</p><p>\u4e0b\u8f7d\u4f60\u559c\u7231\u7684\u6e38\u8bb0\u4e00\u8d77\u53bb\u65c5\u884c\u5427\uff01</p><a class="generat_btn" href="javascript:;">\u70b9\u51fb\u4e0b\u8f7dPDF</a></div>';
                        d.attr("class", "generat_success").html(e);
                        g.find(".generat_btn").add(".btn_pdf, .link_pdf").attr({
                            href: INTERFACE.pdfDownUrl + "?travelId=" + INTERFACE.TravelId,
                            target: "_blank"
                        });
                        break;
                    case 4:
                        clearInterval(c), e = '<div></div><p>\u670d\u52a1\u5668\u597d\u50cf\u51fa\u4e86\u70b9\u95ee\u9898\uff0cPDF\u751f\u6210\u5931\u8d25\u2026</p><a class="generat_btn" href="javascript:;">\u91cd\u65b0\u5236\u4f5cPDF</a>', d.attr("class", "generat_failure").html(e), g.find(".generat_btn").click(function () {
                            g.find(".generat_failure").attr("class",
                                "generat_loading").html(a);
                            b();
                            return !1
                        })
                }
            })
        }, 5E3);
        g.find(".close").click(function () {
            $.popupbox.close();
            clearInterval(c)
        })
    }

    var d = $("#generatPDF").find(".generat_loading"), a = d.html();
    $(".btn_pdf, .link_pdf").click(function () {
        $(this).hasClass("a_popup_login") || "javascript:;" != $(this).attr("href") || $.get(INTERFACE.pdfCheckUrl + "?travelId=" + INTERFACE.TravelId + "&rnd=" + new Date, function (g) {
            5 == g.Status ? (d.attr("class", "generat_failure").html("<div></div><p>\u6e38\u8bb0PDF\u4e0b\u8f7d\u5f02\u5e38\u706b\u7206\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u4e00\u4e0b\uff0c\u7a0d\u540e\u518d\u8bd5\uff01</p>"),
                $.popupbox.show({id: "generatPDF"}), $("#generatPDF").find(".close").click(function () {
                $.popupbox.close()
            })) : 2 != g.Status && ($("#generatPDF > div").attr("class", "generat_loading").html(a), $.popupbox.show({
                id: "generatPDF",
                callback: b
            }))
        })
    })
});
(function (b) {
    function d() {
        var c = b(".ctd_cover").css("width", "100%"), d = new Image;
        d.src = c.attr("src");
        b.browser.msie ? d.onreadystatechange = function () {
            "complete" != d.readyState && "loaded" != d.readyState || a(c)
        } : d.onload = function () {
            !0 === d.complete && a(c)
        }
    }

    function a(a) {
        var c = a.height(), d = parseInt(a.attr("data-CoverLocationY")) / 1E4 * c;
        450 < c + d && a.css({width: "100%", height: "auto", top: d});
        a = a.attr("src");
        b(".backmask").css({
            "background-image": '-moz-linear-gradient(center top , rgba(255, 255, 255, 0.5), rgba(242, 242, 242, 1)), url("' +
                a + '")',
            "background-image": '-webkit-linear-gradient(center top , rgba(255, 255, 255, 0.5), rgba(242, 242, 242, 1)), url("' + a + '")',
            "background-image": '-ms-linear-gradient(center top , rgba(255, 255, 255, 0.5), rgba(242, 242, 242, 1)), url("' + a + '")',
            "background-image": '-o-linear-gradient(center top , rgba(255, 255, 255, 0.5), rgba(242, 242, 242, 1)), url("' + a + '")'
        })
    }

    b.cookie.raw = !0;
    !0 !== INTERFACE.isHost && INTERFACE.accessState(function (a, c) {
        var d = c.VisitCount, e = function (a) {
            0 === a && (a = "");
            return a
        };
        if (1E5 <
            d) {
            with (Math) d = round(d / 1E4 * pow(10, 0)) / pow(10, 0);
            d += "\u4e07+"
        }
        b(".link_browse").find("span").text(e(d));
        b(".link_comment").find("span").text(e(c.CommentCount));
        b(".ctd_comments_title").find("span").text("(" + c.CommentCount + ")");
        b(".link_share").find("span").text(e(c.ShareCount));
        b(".link_like").find("span").text(e(c.LikeCount));
        b(".link_collect").find("span").text(e(c.FavouriteCount));
        !0 === c.CanDownLoadPDF && b(".link_pdf,.btn_pdf").attr("href", c.DownLoadPDFUrl);
        if (0 === a.RetCode) return window.setTimeout(function () {
                b("#imgControls a.link_comment").addClass("a_popup_login")
            },
            1E3), !1;
        e = '<a class="img" title="' + a.UserInfo.DisplayName + '" target="_blank" href="' + a.UserInfo.HomePageUrl + '"><img src="' + a.UserInfo.HeadPhotoUrl + '"></a>';
        if (1 == a.RetCode || 2 == a.RetCode) b(".a_popup_login").removeClass("a_popup_login"), b(".ctd_comments_box:first").append(e), 2 == a.RetCode && b(".ctd_head_box").prepend('<a class="edit" href="' + a.TravelMasterUrl + '"><i></i>\u7f16\u8f91\u6e38\u8bb0</a>')
    });
    d();
    b.browser.msie && 9 > b.browser.version && b(".badge_box").addClass("hack_ie8");
    GS.ismoblie ? (b(".ctd_head_right").on("click",
        ".info_badge a", function (a) {
            b("#bdshare").hide();
            b(".badge_box").hide();
            var c = b(this), d = b(this).attr("class"), d = b(".badge_box." + d), c = c.offset(),
                e = d.outerWidth() / 2, f = d.outerHeight(), f = c.top - f - 15, g = c.left - e + 11, h = -67,
                k = b(window).width(), c = c.left + e, k = 980 < k ? k : 980;
            c > k && (g = g - (c - k) - 15, h += c - k + 16);
            d.css({top: f, left: g, "z-index": 2, display: "block"}).find(".badge_box_arr").css({"margin-left": h});
            a.stopPropagation()
        }), b(".bgf2f2f2, .badge_box").on("click", function () {
    }), b(document.body).on("click", function () {
        b(".badge_box").hide()
    }),
        b(".ctd_controls .link_share, .float_div .btn_share").on("click", function (a) {
            b(".badge_box").hide();
            a.stopPropagation()
        })) : (b(".ctd_head_right").on("mouseover", ".info_badge a", function () {
        var a = b(this), c = b(this).attr("class"), c = b(".badge_box." + c), a = a.offset(), d = c.outerWidth() / 2,
            e = c.outerHeight(), e = a.top - e - 15, f = a.left - d + 11, g = -67, h = b(window).width(),
            a = a.left + d, h = 980 < h ? h : 980;
        a > h && (f = f - (a - h) - 15, g += a - h + 16);
        c.css({top: e, left: f, "z-index": 2, display: "block"}).find(".badge_box_arr").css({"margin-left": g})
    }).on("mouseout",
        ".info_badge a", function () {
            var a = b(this).attr("class");
            b(".badge_box." + a).hide()
        }), b("body").on("mouseover", ".badge_box", function () {
        b(this).show()
    }).on("mouseout", ".badge_box", function () {
        b(this).hide()
    }));
    var g = INTERFACE.continueWrite, c = b(".float_div"), f = b("#ctd_ttd_tab"), e = b(".ctd_side"),
        r = b(".ctd_main_body"), k = r.offset().top, l = 1 == b(".ttd_title").length ? b(".ttd_title").outerWidth() : 0,
        l = b(".btn_index").outerWidth() + l, n = b(".item_div:first").outerWidth() * b(".item_div").length,
        h = function (a) {
            if (0 === f.length) return !1;
            var c = f.outerHeight(), d = e.outerHeight(), g = b("#ctd_ttd_stop").offset().top;
            a > e.offset().top + d && a <= g - 80 - c ? f[0].style.cssText = "position:fixed;top:70px;left:" + e.offset().left + ";" : a < e.offset().top + d ? f[0].style.cssText = "" : a > g - 80 - c && (f[0].style.cssText = "position:absolute;top:" + (g - e.offset().top - c - 70) + "px;right:0;")
        }, m = function (a) {
            var d = r.outerHeight() - 50, e = 100 * ((a - k) / d);
            c.width(980 >= document.documentElement.clientWidth ? 980 : "100%");
            b(".progress_line").find(".line").width(e + "%").siblings(".point").css("left",
                e - 0.85 + "%");
            a > k + d && b(".progress_line").find(".line").css("width", "100%");
            a >= k ? c.show() : c.hide();
            a = b(".ctd_title").width();
            d = b(".gltextdown_blk").width();
            b(".ctd_title_statement").css("width", a - d - 25)
        }, p = function (a) {
            b(".ctd_content").each(function () {
                if (g) {
                    var a = b(this).index(".ctd_content"),
                        c = 100 * ((b(this).offset().top - r.offset().top) / r.outerHeight()) - 0.7 + "%";
                    if (1 != b(this).data("hadP") && 0 < a) {
                        b(this).data("hadP", 1);
                        var d = b(this).find("h3").text().replace("\u7f16\u8f91", "");
                        b(".progress_line").append('<p class="p_content_' +
                            a + '" style="left:' + c + ';"><i></i><span>' + d + "<em></em></span></p>")
                    } else 0 < a && b(".p_content_" + a).css("left", c)
                }
            })
        };
    if (1 == f.length) {
        f.on("mouseover", ".fl", function () {
            b(this).css("background-color", "#fff")
        }).on("mouseout", ".fl", function () {
            b(this).css("background-color", "transparent")
        });
        b.phBackground = function () {
            var a = b(".ctd_ttd_box"), c = 0, d = 0;
            a.each(function () {
                var a = b(this).find("div.ctd_items").length + b(this).find("div.ttd2_type_infor").length;
                a > d && (d = a, c = b(this).attr("data-districtId"))
            });
            0 < c ? a.each(function () {
                    if (b(this).attr("data-districtId") ==
                        c) {
                        b(this).parent("li").show();
                        var d = b(this).find("div.ctd_items").length, e = b(this).find("div.ttd2_type_infor").length,
                            f = 429;
                        alert(d);
                        1 > d && 1 > e ? f = 85 : 1 <= d && 1 > e ? f = 300 : 1 > d && 1 <= e ? f = 216 : 1 <= d && 1 <= e && (f = 429);
                        b(".ctd_ttd").height(f);
                        d = a.index(this);
                        b(".ctd_ttd_ctrl span").text(d + 1 + "/" + a.length);
                        0 === d ? b(".ctd_ttd_ctrl .prev").addClass("disable") : b(".ctd_ttd_ctrl .prev").removeClass("disable");
                        d == a.length - 1 ? b(".ctd_ttd_ctrl .next").addClass("disable") : b(".ctd_ttd_ctrl .next").removeClass("disable")
                    } else b(this).parent("li").hide()
                }) :
                b(".ctd_ttd").height(85)
        };
        var q = f.find(".ctd_ttd");
        1 < q.find("li").length && f.find(".ctd_ttd_ctrl").show();
        f.data("moveAble", 1).find(".ctd_ttd_ctrl a").click(function () {
            b(this).hasClass("disable") || (b(this).hasClass("prev") && t(1), b(this).hasClass("next") && t(0));
            return !1
        });
        var t = function (a) {
            a = a ? q.find("li:visible").prev() : q.find("li:visible").next();
            if (1 == f.data("moveAble")) {
                f.data("moveAble", 0);
                var c = a.find("div.ctd_items").length, d = a.find("div.ttd2_type_infor").length, e = 429;
                1 > c && 1 > d ? e = 85 : 1 <= c && 1 > d ?
                    e = 300 : 1 > c && 1 <= d ? e = 216 : 1 <= c && 1 <= d && (e = 429);
                q.height(e);
                b.browser.msie && "6.0" == b.browser.version ? (a.siblings("li").hide(), a.show(0, s)) : (a.siblings("li").fadeOut(300), a.fadeIn(300, s))
            }
        }, s = function () {
            var a = q.find("li:visible"), b = a.index(".ctd_ttd li") + 1;
            f.find(".ctd_ttd_ctrl a").removeClass("disable");
            f.find(".ctd_ttd_ctrl span").html(b + "/" + f.find(".ctd_ttd li").length);
            a.is(".ctd_ttd li:last") && f.find(".ctd_ttd_ctrl .next").addClass("disable");
            a.is(".ctd_ttd li:first") && f.find(".ctd_ttd_ctrl .prev").addClass("disable");
            f.data("moveAble", 1)
        }
    }
    b(".progress_bar").css({"margin-left": l, "margin-right": n}).data("imgShow", 1);
    var w = null;
    c.on("mouseover", ".progress_line p", function () {
        b(this).find("span").show()
    }).on("mouseout", ".progress_line p", function () {
        b(this).find("span").hide()
    }).on("click", ".progress_line p", function () {
        if (0 != b(".progress_line").data("isClick")) {
            b(".progress_line").data("isClick", 0);
            var a = parseInt(b(this).attr("class").replace("p_content_", "")),
                a = b(".ctd_content").eq(a).offset().top - 50;
            b("html, body").animate({scrollTop: a},
                500);
            clearTimeout(w);
            w = setTimeout(function () {
                b(".progress_line").data("isClick", 1)
            }, 600)
        }
    });
    if (b.browser.msie && "6.0" == b.browser.version) b(window).resize(function () {
        d()
    }); else {
        var x = null;
        b(function () {
            setTimeout(function () {
                p(b(".progress_bar").data("imgShow"));
                m(b(window).scrollTop())
            }, 500)
        });
        b(window).scroll(function () {
            u()
        });
        b(window).resize(function () {
            d();
            u()
        });
        var u = function () {
            var a = b(window).scrollTop();
            clearTimeout(x);
            x = setTimeout(function () {
                p(b(".progress_bar").data("imgShow"))
            }, 500);
            m(a);
            h(a)
        }
    }
    b(".ctd_controls .fl, .text_pic").on("click",
        function () {
            var a = b(".ctd_content").find(".img, img").not(".travel_commercial img"), c = b(this).is(".text_pic");
            a.is(":visible") ? (c ? b(".ctd_controls .fl").html("<i></i>\u56fe\u6587\u6a21\u5f0f") : b(this).html("<i></i>\u56fe\u6587\u6a21\u5f0f"), b(".ctd_controls .fl, .text_pic").addClass("clicked").attr("title", "\u56fe\u6587\u6a21\u5f0f"), a.hide(), b(".progress_bar").data("imgShow", 0)) : (c ? b(".ctd_controls .fl").html("<i></i>\u53ea\u770b\u6587\u5b57") : b(this).html("<i></i>\u53ea\u770b\u6587\u5b57"), b(".ctd_controls .fl, .text_pic").removeClass("clicked").attr("title",
                "\u53ea\u770b\u6587\u5b57"), a.show(), b(".progress_bar").data("imgShow", 1));
            b.browser.msie && "6.0" == b.browser.version || (p(b(".progress_bar").data("imgShow")), m(b(window).scrollTop()))
        });
    var v = b("#del_comment");
    b(".ctd_comments").on("click", ".link_delete", function () {
        var a = b(this).attr("data-replyId"), c = b(this).offset();
        "none" == v.css("display") ? v.show().offset({
            top: c.top - v.outerHeight() - 3,
            left: c.left - v.outerWidth() + 28
        }).data("replyId", a) : v.hide();
        return !1
    });
    v.hover(function () {
        v.data("isHover", 1)
    }, function () {
        v.data("isHover",
            0)
    }).find(".confirm, .color_white").click(function () {
        b(this).hasClass("confirm") && INTERFACE.del_reply({replyId: v.data("replyId")});
        v.hide()
    });
    b(document).click(function () {
        0 == v.data("isHover") && v.hide()
    });
    b(".ctd_travels").on("mouseover", ".img", function () {
        b(this).find(".text").show()
    }).on("mouseout", ".img", function () {
        b(this).find(".text").hide()
    });
    b.pageLinkJump = function (a) {
        INTERFACE.page_link({pageNum: a})
    };
    b(".ctd_comments").on("click", ".pager_v1 a:not(.gopage)", function () {
        var a = b(this).attr("data-page");
        "0" != a && INTERFACE.page_link({pageNum: a})
    });
    6 < b(".travel_commercial ul li").length && (b(".p_toggle").show(), b(".travel_commercial ul").css("height", "160"));
    b(".p_toggle span").toggle(function () {
        b(this).parent().prev("ul").css("height", "auto");
        b(this).html("\u6536\u8d77\u66f4\u591a\u9152\u5e97<i class='current'></i>")
    }, function () {
        b(this).parent().prev("ul").css("height", "160");
        b(this).html("\u5c55\u5f00\u66f4\u591a\u9152\u5e97<i></i>")
    });
    b("body").on("click", ".ctd_items", function () {
        GS.tracklog("you.ttd.district.basic.online",
            "")
    })
})(jQuery);
