
var e = require("../../../utils/api"),
    t = require("../../../utils/wxutil.js");
Page({
    data: {
        imgBase: t.getImgBase(),
        ellipsis: !0,
        appointmentInfo: null,
        payParameter: null,
        doctorInfo: null,
        numberCodeExpire: 9e5,
        dataInit: !1,
        passAptParams: {}
    },
    onLoad: function(e) {
        var i = t.getStorage("regInfo");
        this.setData({
            recordId: e.recordId,
            regInfo: i,
            passAptParams: i.appointmentRecord,
            selectVisitor: e.selectVisitor && JSON.parse(e.selectVisitor) || {}
        }), t.removeStorage("regInfo")
    },
    onReady: function() {},
    _clearTimer: function() {
        this.timer && (clearTimeout(this.timer), this.timer = void 0)
    },
    _startTimer: function() {
        this.data.numberCodeExpire > 0 ? this.setData({
            numberCodeExpire: this.data.numberCodeExpire - 1e3
        }) : t.redirectTo("/pages/dtgh/ghjl/index"), this.timer = setTimeout(function() {
            this._startTimer()
        }.bind(this), 1e3)
    },
    onShow: function() {
        this._getSurplusTime(this.data.recordId), this._startTimer()
    },
    onHide: function() {
        this._clearTimer()
    },
    onUnload: function() {
        this._clearTimer()
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return t.getShareMessage()
    },
    changeEllipsis: function(e) {
        this.setData({
            ellipsis: !this.data.ellipsis
        })
    },
    beforeDoPay: (0, e.throttle)((function(t) {
        this.payParam = t;
        var i = this;
        (0, e.needSubMessage)("appointmentAfterday", (function(t) {
            t ? i.setData({
                showTip: !0
            }) : (0, e.authSubMessage)(i.payParam, "appointmentAfterday", i.doPay, i)
        }))
    }), 2e3),
    doNext: function() {
        this.setData({
            showTip: !1
        }), (0, e.authSubMessage)(this.payParam, "appointmentAfterday", this.doPay, this)
    },
    doPay: function() {
        var e = this.data.regInfo.order;
        wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.sign,
            success: function(e) {
                "requestPayment:ok" == e.errMsg && (t.showLoading(!1, "检测支付状态..."), setTimeout((function() {
                    t.reLaunch("/pages/grzx/index?page=" + encodeURIComponent("/pages/dtgh/ghjl/index"))
                }), 1500))
            },
            fail: function(e) {
                t.showToast({
                    title: "用户取消支付，超时不支付将自动取消占号"
                })
            }
        })
    },
    _noPayment: (0, e.throttle)((function(e) {
        t.showModal({
            showCancel: !1,
            content: "离开后可去个人中心挂号记录里继续支付",
            confirmText: "知道了",
            success: function(e) {
                t.reLaunch("/pages/index/index")
            }
        })
    }), 2e3),
    _getSurplusTime: function(t) {
        var i = this;
        (0, e._request)({
            loading: !0,
            url: "/api/appointmentRecord/getYySurplusTime.json",
            data: {
                recordId: t
            },
            success: function(e) {
                0 == e.status && i.setData({
                    numberCodeExpire: e.data
                })
            },
            fail: function(e) {}
        })
    }
});