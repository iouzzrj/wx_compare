
var e = require("../../common/vendor.js"),
    t = require("../../utils/util.js"),
    r = require("../../request/request.js"),
    o = require("../../common/assets.js"),
    i = getApp(),
    n = {
        data: function() {
            return {
                errorMsg: "",
                imgBase: t.util.getImgBase(),
                screenHeight: 0,
                redirectPage: "/pages/home/index",
                error: !1,
                miniVersion: "",
                isShow: !1,
                timestamp: 0,
                hospital: "北京大学口腔医院",
                oauthUrl: t.util.getOauthUrl(),
                version: "1.0"
            }
        },
        components: {
            privacyAgreement: function() {
                return "../../components/privacyAgreement/index.js"
            }
        },
        onLoad: function(r) {
            console.log(r, "欢迎页面"), this.miniVersion = t.util.getMiniGrogVersion();
            var o = r.q;
            if (t.util._isNotEmpty(o)) {
                var n = decodeURIComponent(o),
                    s = t.util.getQueryString(n, "path"),
                    c = t.util.getQueryString(n, "join");
                t.util._isNotEmpty(s) && (console.log("path:", s), e.index.setStorageSync("redirectPath", decodeURIComponent(s))), t.util._isNotEmpty(c) && t.util.setInviteCode(c)
            }
            var a = r.page;
            t.util._isNotEmpty(a) && e.index.setStorageSync("redirectPage", decodeURIComponent(a));
            var g = r.code;
            i.globalData.gzhCode = g, this.isShow = t.util._isEmpty(g) && !t.util.isDesktop(), this.timestamp = t.util.string((new Date).getTime())
        },
        methods: {
            showErrorMsg: function() {
                var e = {
                    title: "错误信息",
                    content: this.errorMsg
                };
                console.log("1", e), t.util.showModal(e)
            },
            agree: function() {
                console.log("2"), this.loginXcx()
            },
            loginXcx: function() {
                var e = this;
                this.error = !1, r.login().then((function(t) {
                    e._resolve()
                })).catch((function(t) {
                    console.log(t), e._reject(t)
                }))
            },
            _resolve: function() {
                var r = e.index.getStorageSync("redirectPage");
                r && (this.redirectPage = r, e.index.removeStorage({
                    key: "redirectPage",
                    success: function(e) {
                        console.log(e)
                    }
                })), t.util.reLaunch(this.redirectPage)
            },
            _reject: function(e) {
                this.error = !0, this.errorMsg = e.message || "系统繁忙，请稍后再试"
            }
        }
    };
Array || e.resolveComponent("privacy-agreement")();
var s = e._export_sfc(n, [
    ["render", function(t, r, i, n, s, c) {
        return e.e({
            a: !s.error
        }, s.error ? {} : {
            b: o._imports_0,
            c: e.t(s.miniVersion)
        }, {
            d: s.error
        }, s.error ? {
            e: o._imports_1,
            f: e.o((function() {
                return c.loginXcx && c.loginXcx.apply(c, arguments)
            }), "3f"),
            g: e.o((function() {
                return c.showErrorMsg && c.showErrorMsg.apply(c, arguments)
            }), "b0")
        } : {}, {
            h: e.o(c.agree, "f4"),
            i: e.p({
                hospital: s.hospital
            })
        })
    }]
]);
wx.createPage(s);