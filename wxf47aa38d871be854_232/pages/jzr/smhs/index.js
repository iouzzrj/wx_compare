
var t = require("../../../utils/api"),
    e = getApp(),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        verify: !1,
        username: "",
        idcardno: ""
    },
    onLoad: function(t) {
        this.setData({
            phone: t.phone || "",
            phoneLable: t.phoneLable || ""
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    _initSelector: function() {
        return a.isEmpty(this.selector) && (this.selector = a.selectComponent(this, "#selector")), a.isNotEmpty(this.selector)
    },
    onShow: function() {
        this.data.verify && this._verifyUser(e.globalData.authCode)
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    gospz: function() {
        wx.navigateTo({
            url: "/pages/rarelyUsed/xxtx/index?type=0&phone=" + this.data.phone + "&phoneLable=" + this.data.phoneLable
        })
    },
    toAuth: function() {
        this._checkFormData() && this.getRealnameAuthInfo()
    },
    _checkFormData: function() {
        return this._checkpname() && this._checkpcardno()
    },
    _checkpname: function() {
        return !a.isEmpty(this.data.username) || (this.toptips.show({
            text: "请输入微信持有者姓名"
        }), !1)
    },
    _checkpcardno: function() {
        return a.isEmpty(this.data.idcardno) ? (this.toptips.show({
            text: "请输入微信持有者身份证"
        }), !1) : !!a.checkIdCard(this.data.idcardno) || (this.toptips.show({
            text: "身份证格式不正确"
        }), !1)
    },
    getRealnameAuthInfo: function() {
        this.setData({
            verify: !0
        }), wx.navigateToMiniProgram({
            appId: "wx308bd2aeb83d3345",
            path: "subPages/city/wxpay-auth/main",
            envVersion: "release"
        })
    },
    _verifyUser: function(e) {
        if (!a.isEmpty(e)) {
            this.setData({
                verify: !1
            });
            var n = this;
            a.showLoading(), (0, t.verifyUser)({
                name: n.data.username,
                idCard: n.data.idcardno,
                phone: n.data.phone,
                verifyResult: e
            }, (function(t) {
                a.hideLoading(), 0 == t.status ? n._getUserSuccess(e) : n._getUserFail(t.message || "实名校验失败，请稍后再试")
            }), (function(t) {
                a.hideLoading(), n._getUserFail(t.errMsg || "实名校验失败，请稍后再试")
            }))
        }
    },
    _getUserSuccess: function(t) {
        var e = {
            phone: this.data.phone,
            phoneLable: this.data.phoneLable,
            realName: this.data.username,
            idCard: this.data.idcardno,
            realNameLable: this.data.username,
            idCardLable: this.data.idcardno.substring(0, 4) + "**********" + this.data.idcardno.substring(14),
            verifyResult: t
        };
        a.redirectTo("/pages/jzr/jzrrz/index?showPopup=false&currentStep=3&putOnRecordObj=" + encodeURIComponent(JSON.stringify(e)))
    },
    _getUserFail: function(t) {
        a.showModal({
            content: t
        })
    }
});