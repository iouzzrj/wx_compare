
var e = require("../../../utils/api"),
    t = (getApp(), require("../../../utils/wxutil.js"));
Page({
    data: {
        step: 1,
        phone: "",
        phoneLable: "",
        realName: "",
        realNameLable: "",
        idCard: "",
        idCardLable: "",
        address: "",
        emername: "",
        emerphone: "",
        verifyResult: "",
        vftCode: "1",
        isValidity: !0,
        agreeAgreement: !1,
        currentStep: 1,
        showPopup: !0
    },
    onLoad: function(e) {
        var a = this;
        if (t.isNotEmpty(e.showPopup) && a.setData({
                showPopup: !1
            }), 3 == e.currentStep) {
            var n = e.putOnRecordObj && JSON.parse(decodeURIComponent(e.putOnRecordObj)) || {};
            a.setData({
                currentStep: 3,
                phone: n.phone,
                phoneLable: n.phoneLable,
                realName: n.realName,
                realNameLable: n.realNameLable,
                idCard: n.idCard,
                idCardLable: n.idCardLable,
                verifyResult: n.verifyResult
            }, (function() {
                setTimeout((function() {
                    a.setData({
                        isValidity: !1
                    })
                }), 9e5)
            }))
        }
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        wx.checkSession({
            fail: function() {
                (0, e.login)()
            }
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getPhoneNumber: function(a) {
        if ("getPhoneNumber:ok" == a.detail.errMsg) {
            var n = this;
            t.showLoading(), (0, e.getPhoneNumber)({
                encryptedData: a.detail.encryptedData,
                ivStr: a.detail.iv
            }, (function(e) {
                if (t.hideLoading(), 0 == e.status) {
                    var a = e.data;
                    n.setData({
                        phone: a,
                        phoneLable: a.substring(0, 3) + "****" + a.substring(7),
                        currentStep: 2
                    })
                } else t.showToast({
                    title: e.message || "获取手机号码失败，请稍后再试"
                })
            }), (function(e) {
                t.hideLoading(), t.showToast({
                    title: e.errMsg || "获取手机号码失败，请稍后再试"
                })
            }))
        } else t.showToast({
            title: "获取手机号码失败，请确认授权"
        })
    },
    getRealnameAuthInfo: function() {
        2 == this.data.currentStep && t.redirectTo("/pages/jzr/smhs/index?phone=" + this.data.phone + "&phoneLable=" + this.data.phoneLable)
    },
    doAgree: function() {
        this.setData({
            agreeAgreement: !this.data.agreeAgreement
        })
    },
    _checkPermanentAddress: function() {
        return !t.isEmpty(this.data.address) || (this.toptips.show({
            text: "请输入常住地址"
        }), !1)
    },
    _checkContactName: function() {
        return !t.isEmpty(this.data.emername) || (this.toptips.show({
            text: "请输入紧急联系人"
        }), !1)
    },
    _checkContactPhone: function() {
        return t.isEmpty(this.data.emerphone) ? (this.toptips.show({
            text: "请输入紧急联系人电话"
        }), !1) : !!t.checkPhone(this.data.emerphone) || (this.toptips.show({
            text: "紧急联系人电话格式错误"
        }), !1)
    },
    _checkSameName: function() {
        return this.data.realName != this.data.emername || (this.toptips.show({
            text: "紧急联系人不能为当前就诊人"
        }), !1)
    },
    _checkSamePhone: function() {
        return this.data.phone != this.data.emerphone || (this.toptips.show({
            text: "紧急联系人电话不能为当前就诊人电话"
        }), !1)
    },
    _userRegister: function() {
        if (this._checkPermanentAddress() && this._checkContactName() && this._checkContactPhone() && this._checkSameName() && this._checkSamePhone())
            if (this.data.agreeAgreement)
                if (this.data.isValidity) {
                    var a = this;
                    t.showLoading(), (0, e.userRegister)({
                        name: a.data.realName,
                        idCard: a.data.idCard,
                        phone: a.data.phone,
                        permanentAddress: a.data.address,
                        contactName: a.data.emername,
                        contactPhone: a.data.emerphone,
                        verifyResult: a.data.verifyResult
                    }, (function(e) {
                        0 == e.status ? a._bindSuccess() : a._bindFail(e.message || "实名认证失败，请稍后再试")
                    }), (function(e) {
                        a._bindFail(e.errMsg || "实名认证失败，请稍后再试")
                    }))
                } else this.toptips.show({
                    text: "实名凭证已过期，请重新认证"
                });
        else this.toptips.show({
            text: "请阅读并同意《用户协议》"
        })
    },
    _bindSuccess: function() {
        var a = this;
        (0, e.login)((function() {
            t.hideLoading(), t.showModal({
                content: "认证成功，是否添加其他就诊人？",
                confirmText: "立即添加",
                confirmColor: "#13ba84",
                cancelText: "暂不需要",
                cancelColor: "#404040",
                showCancel: !0,
                success: function(e) {
                    e.confirm ? t.redirectTo("/pages/jzr/tjjzr/index") : t.navigateBack()
                }
            })
        }), (function(e) {
            a._bindFail(e || "刷新实名信息失败，请稍后再试")
        }))
    },
    _bindFail: function(e) {
        t.hideLoading(), t.showModal({
            content: e
        })
    },
    doClose: function() {
        this.setData({
            showPopup: !1
        })
    }
});