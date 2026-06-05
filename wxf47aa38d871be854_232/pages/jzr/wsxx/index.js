
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js");
Page({
    data: {
        scrollHeight: 0,
        visitor: {},
        clientId: "",
        userName: "",
        idCard: "",
        phoneNo: "",
        permanentAddress: "",
        contactName: "",
        contactPhone: ""
    },
    onLoad: function(t) {
        var e = JSON.parse(t.visitor);
        this.setData({
            visitor: e,
            clientId: e.clientId,
            userName: e.clientName,
            idCard: e.idCardNo,
            phoneNo: e.phone,
            permanentAddress: e.permanentAddress || "",
            contactName: e.contactName || "",
            contactPhone: e.contactPhone || ""
        })
    },
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
            a = t.detail.value;
        this._checkFormData(a) && (e.getAge(n.data.idCard) < 16 ? n._verifyUserSuccess(a) : e.showModal({
            showCancel: !0,
            content: "本次操作需要人脸识别认证，确定要继续吗？",
            success: function(t) {
                t.confirm && e.startFacialRecognitionVerify(n.data.userName, n.data.idCard, "2", (function(t) {
                    n._verifyUserSuccess(a, t.verifyResult)
                }), (function(t) {
                    n._verifyUserFail(t.errMsg || "人脸核身失败，请稍后再试")
                }))
            }
        }))
    },
    _verifyUserSuccess: function(n, a) {
        var i = this;
        e.showLoading(), (0, t.updatePatientInfo)({
            clientId: i.data.clientId,
            name: i.data.userName,
            idCard: i.data.idCard,
            phone: i.data.phoneNo,
            permanentAddress: n.in_permanentAddress,
            contactName: n.in_contactName,
            contactPhone: n.in_contactPhone,
            verifyResult: a || ""
        }, (function(t) {
            0 == t.status ? i._addSuccess() : i._addFail(t.message || "信息更新失败，请稍后再试")
        }), (function(t) {
            i._addFail(t.errMsg || "信息更新失败，请稍后再试")
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
                title: "信息更新成功"
            }), setTimeout((function() {
                e.navigateBack()
            }), 1500)
        }), (function(t) {
            that._addFail(t || "信息更新失败，请稍后再试")
        }))
    },
    _addFail: function(t) {
        e.hideLoading(), e.showToast({
            title: t
        })
    },
    _checkFormData: function(t) {
        return this._checkPermanentAddress(t.in_permanentAddress) && this._checkContactName(t.in_contactName) && this._checkContactPhone(t.in_contactPhone) && this._checkSameName(this.data.userName, t.in_contactName) && this._checkSamePhone(this.data.phoneNo, t.in_contactPhone)
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
    }
});