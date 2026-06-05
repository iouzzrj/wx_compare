
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js");
Page({
    data: {
        scrollHeight: 0,
        userName: "",
        idCard: "",
        phone: ""
    },
    onLoad: function(t) {},
    onReady: function() {
        this.setData({
            scrollHeight: e.getSystemInfo().windowHeight - 10
        }), this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    userNameInput: function(t) {
        this.setData({
            userName: t.detail.value
        })
    },
    idCardInput: function(t) {
        this.setData({
            idCard: (t.detail.value || "").toUpperCase()
        })
    },
    phoneNoInput: function(t) {
        this.setData({
            phone: t.detail.value
        })
    },
    permanentAddressInput: function(t) {
        this.setData({
            permanentAddress: t.detail.value
        })
    },
    contactNameInput: function(t) {
        this.setData({
            contactName: t.detail.value
        })
    },
    contactPhoneInput: function(t) {
        this.setData({
            contactPhone: t.detail.value
        })
    },
    toAdd: function(t) {
        var n = this,
            i = t.detail.value;
        this._checkFormData(i) && (e.getAge(i.in_idcard) < 16 ? n._verifyUserSuccess(i) : e.showModal({
            showCancel: !0,
            content: "本系统采取的人脸识别个人身份绑定均由腾讯公司提供服务，本系统及北大口腔医院均不记录任何个人照片以及人脸标记等任何个人生物特征信息。本次操作需要人脸识别认证，确定要继续吗？",
            success: function(t) {
                t.confirm && e.startFacialRecognitionVerify(i.in_username, i.in_idcard, "2", (function(t) {
                    n._verifyUserSuccess(i, t.verifyResult)
                }), (function(t) {
                    n._verifyUserFail(t.errMsg || "人脸核身失败，请稍后再试")
                }))
            }
        }))
    },
    _verifyUserSuccess: function(n, i) {
        var s = this;
        e.showLoading(), (0, t.bindPatientInfo)({
            name: n.in_username,
            idCard: n.in_idcard,
            phone: n.in_phone,
            permanentAddress: n.in_permanentAddress,
            contactName: n.in_contactName,
            contactPhone: n.in_contactPhone,
            verifyResult: i || ""
        }, (function(t) {
            0 == t.status ? s._addSuccess() : s._addFail(t.message || "添加就诊人失败，请稍后再试")
        }), (function(t) {
            s._addFail(t.errMsg || "添加就诊人失败，请稍后再试")
        }))
    },
    _verifyUserFail: function(t) {
        e.showToast({
            title: t
        })
    },
    _addSuccess: function() {
        (0, t.login)((function() {
            e.hideLoading(), e.showToast({
                icon: "success",
                title: "添加就诊人成功"
            }), setTimeout((function() {
                e.navigateBack()
            }), 1500)
        }), (function(t) {
            that._addFail(t || "添加就诊人失败，请稍后再试")
        }))
    },
    _addFail: function(t) {
        e.hideLoading(), e.showToast({
            title: t
        })
    },
    _checkFormData: function(t) {
        return this._checkUserName(t.in_username) && this._checkIdCard(t.in_idcard) && this._checkPhone(t.in_phone) && this._checkExists(t.in_idcard) && this._checkPermanentAddress(t.in_permanentAddress) && this._checkContactName(t.in_contactName) && this._checkContactPhone(t.in_contactPhone) && this._checkSameName(t.in_username, t.in_contactName) && this._checkSamePhone(t.in_phone, t.in_contactPhone)
    },
    _checkUserName: function(t) {
        return !e.isEmpty(t) || (this.toptips.show({
            text: "请输入姓名"
        }), !1)
    },
    _checkIdCard: function(t) {
        return e.isEmpty(t) ? (this.toptips.show({
            text: "请输入身份证号"
        }), !1) : !!e.checkIdCard(t) || (this.toptips.show({
            text: "证件号码填写错误"
        }), !1)
    },
    _checkPhone: function(t) {
        return e.isEmpty(t) ? (this.toptips.show({
            text: "请输入手机号"
        }), !1) : !!e.checkPhone(t) || (this.toptips.show({
            text: "手机号格式错误"
        }), !1)
    },
    _checkPermanentAddress: function(t) {
        return !e.isEmpty(t) || (this.toptips.show({
            text: "请输入常住地址"
        }), !1)
    },
    _checkContactName: function(t) {
        return !e.isEmpty(t) || (this.toptips.show({
            text: "请输入紧急联系人"
        }), !1)
    },
    _checkContactPhone: function(t) {
        return e.isEmpty(t) ? (this.toptips.show({
            text: "请输入紧急联系人电话"
        }), !1) : !!e.checkPhone(t) || (this.toptips.show({
            text: "紧急联系人电话格式错误"
        }), !1)
    },
    _checkSameName: function(t, e) {
        return t != e || (this.toptips.show({
            text: "紧急联系人不能为当前就诊人"
        }), !1)
    },
    _checkSamePhone: function(t, e) {
        return t != e || (this.toptips.show({
            text: "紧急联系人电话不能为当前就诊人电话"
        }), !1)
    },
    _checkExists: function(e) {
        for (var n = (0, t.getGlobalCardInfo)(), i = !1, s = 0; s < n.length; s++) {
            e == n[s].idCardNo && (i = !0)
        }
        return !i || (this.toptips.show({
            text: "就诊人已存在，请勿重复添加"
        }), !1)
    },
    gospz: function() {
        wx.navigateTo({
            url: "/pages/rarelyUsed/xxtx/index?type=1"
        })
    }
});