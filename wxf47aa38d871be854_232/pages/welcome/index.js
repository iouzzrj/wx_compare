
var t = getApp(),
    e = require("../../utils/wxutil.js");
Page({
    data: {
        imgBase: e.getImgBase(),
        screenHeight: 0,
        redirectPage: "/pages/index/index",
        error: !1,
        miniVersion: "",
        isShow: !1,
        timestamp: 0,
        hospital: "北京大学口腔医院",
        oauthUrl: e.getOauthUrl(),
        version: "1.0"
    },
    onLoad: function(o) {
        console.log("welcome options:", o);
        var a = this,
            n = o.q;
        if (a.setData({
                miniVersion: e.getMiniGrogVersion()
            }), e.isNotEmpty(n)) {
            var i = decodeURIComponent(n),
                r = e.getQueryString(i, "path"),
                s = e.getQueryString(i, "join");
            e.isNotEmpty(r) && wx.setStorage({
                key: "redirectPage",
                data: decodeURIComponent(r)
            }), e.isNotEmpty(s) && e.setInviteCode(s)
        }
        var g = o.page;
        e.isNotEmpty(g) && wx.setStorage({
            key: "redirectPage",
            data: decodeURIComponent(g)
        });
        var c = o.code;
        t.globalData.gzhCode = c, a.setData({
            isShow: e.isEmpty(c) && !e.isDesktop(),
            timestamp: e.string((new Date).getTime())
        }, (function() {
            e.isNotEmpty(c) && a.doSignin()
        }))
    },
    doSignin: function() {
        var t = this;
        t.setData({
            error: !1
        }), e.login((function() {
            return t._resolve()
        }), (function(e) {
            return t._reject(e)
        }))
    },
    _resolve: function() {
        var o = this,
            a = wx.getStorageSync("redirectPage");
        a && (o.setData({
            redirectPage: a
        }), wx.removeStorage({
            key: "redirectPage",
            success: function(t) {
                console.log(t)
            }
        }));
        var n = e.getStorage("content_info");
        if (e.isNotEmpty(n)) return t.globalData.noticeList = n.noticeList || [], t.globalData.dtghInfoObj = n.dtghInfoObj || {}, t.globalData.yyghInfoObj = n.yyghInfoObj || {}, t.globalData.clInfoObj = n.clInfoObj || {}, void e.reLaunch(o.data.redirectPage);
        e.request({
            loading: !1,
            url: "/api/hosAdvise/getHisAdviseList.json",
            method: "post",
            data: {
                typeId: "05,12,hlwfzxz,cfjftx,BAFYGZ,YYXZ"
            },
            success: function(o) {
                if (console.log("YYGG：", o), 0 == o.status) {
                    var a, n, i, r = [],
                        s = [],
                        g = [],
                        c = [],
                        l = [],
                        f = [];
                    (o.data || []).forEach((function(t) {
                        var e = t.info_type || "";
                        if ("05" == e) r.push(t);
                        else if ("12" == e) s.push(t);
                        else if ("hlwfzxz" == e) c.push(t);
                        else if ("cfjftx" == e) l.push(t);
                        else if ("BAFYGZ" == e) {
                            var o = t.info_content;
                            t.info_content = o.substring(0, 2) + " style='text-align: left; text-indent: 0em;'" + o.substring(2), f.push(t)
                        } else "YYXZ" == e && g.push(t)
                    })), t.globalData.noticeList = r, t.globalData.hlwyyFz = c, t.globalData.jftx = l, t.globalData.BAFYGZ = f, s.forEach((function(t) {
                        var e = t.info_order || "";
                        "1" == e ? a = t : "2" == e ? n = t : "3" == e && (i = t)
                    })), g.forEach((function(t) {
                        "1130" == (t.info_id || "") && (i = t)
                    })), console.log(i), t.globalData.dtghInfoObj = a, t.globalData.yyghInfoObj = n, t.globalData.clInfoObj = i;
                    var d = {
                        dtghInfoObj: a,
                        yyghInfoObj: n,
                        clInfoObj: i,
                        noticeList: r,
                        hlwyyFz: c,
                        jftx: l,
                        BAFYGZ: f
                    };
                    e.setStorage("content_info", d, 864e5)
                }
            },
            complete: function() {
                e.reLaunch(o.data.redirectPage)
            }
        })
    },
    _reject: function(t) {
        this.setData({
            error: !0,
            errorMsg: t || "系统繁忙，请稍后再试"
        })
    },
    showErrorMsg: function() {
        e.showModal({
            title: "登录失败",
            content: this.data.errorMsg,
            showCancel: !1,
            confirmText: "知道了",
            confirmColor: "#14c79d"
        })
    }
});