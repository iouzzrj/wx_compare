
var t = require("../../utils/api"),
    e = require("../../utils/wxutil.js"),
    n = require("../../utils/util.js");
getApp();
Page({
    data: {
        redirectPage: "",
        dataInit: !1
    },
    onLoad: function(t) {
        var n = t.page;
        e.isNotEmpty(n) && this.setData({
            redirectPage: decodeURIComponent(n)
        })
    },
    goAskRecord: function() {
        wx.navigateTo({
            url: "/online-inquiry/pages/askRecord/index"
        })
    },
    onReady: function() {
        var t = this.data.redirectPage;
        e.isNotEmpty(t) && e.navigateTo(t)
    },
    onShow: function() {
        var n = (0, t.getGlobalRegistered)();
        if (this.setData({
                ok: n
            }), n) {
            var o = {},
                i = (0, t.getGlobalCardInfo)();
            if (e.isEmpty(o))
                for (var a = 0; a < i.length; a++)
                    if ("1" == i[a].isDefaultFlag) {
                        o = i[a];
                        break
                    }
            e.isEmpty(o) && (o = i[0]), this.setData({
                visitor: i,
                selectVisitor: o,
                dataInit: !0
            })
        } else this.setData({
            dataInit: !0
        })
    },
    real: function() {
        wx.navigateTo({
            url: "/pages/jzr/jzrrz/index"
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    logout: function() {
        if ((0, t.getGlobalRegistered)()) {
            var e = this;
            wx.showModal({
                showCancel: !0,
                content: "注销账户会清除账户下所有就医数据，清除后数据不可恢复，确认要继续吗？",
                success: function(t) {
                    t.cancel || e._logoutUser()
                }
            })
        } else wx.showToast({
            title: "用户已注销",
            icon: "none"
        })
    },
    _logoutUser: function() {
        var e = this;
        (0, t.logOffUser)({}, (function(o) {
            0 == o.status ? wx.showModal({
                showCancel: !1,
                content: "注销成功！感谢您的使用，如需再次使用请重新实名认证即可",
                success: function(n) {
                    wx.setStorageSync("cacheData.visitors", []), wx.setStorageSync("isRegistered", !1), (0, t.setGlobalRegistered)(!1), wx.reLaunch({
                        url: "/pages/grzx/index"
                    }), e.doSignin()
                }
            }) : n._showTips("toast", "注销失败，请重试")
        }), (function(t) {
            n._showTips("toast", "注销失败，请重试")
        }))
    },
    doSignin: function() {
        var e = this;
        e.setData({
            error: !1
        }), (0, t.login)((function() {
            return e._resolve()
        }), (function(t) {
            return e._reject(t)
        }))
    },
    _resolve: function() {},
    _reject: function(t) {
        this.setData({
            error: !0,
            errorMsg: t || "系统繁忙，请稍后再试"
        })
    },
    doCreate: function(t) {
        var n = t.target.dataset.item;
        e.showModal({
            showCancel: !0,
            content: "确定要身份证建档吗？",
            success: function(t) {
                t.confirm && e.navigateTo("/pages/hzjd/index?item=" + JSON.stringify(n))
            }
        })
    }
});