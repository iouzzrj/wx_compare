
require("../../../utils/api"), getApp();
var t = require("../../../utils/wxutil.js");
Page({
    data: {
        selectIndex: 1,
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
        return t.isEmpty(this.selector) && (this.selector = t.selectComponent(this, "#selector")), t.isNotEmpty(this.selector)
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doChange: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            selectIndex: e
        })
    },
    toAuth: function() {
        this._checkFormData() && this.getRealnameAuthInfo()
    },
    _checkFormData: function() {
        return this._checkpname() && this._checkpcardno()
    },
    _checkpname: function() {
        return !t.isEmpty(this.data.username) || (this.toptips.show({
            text: "请输入微信持有者姓名"
        }), !1)
    },
    _checkpcardno: function() {
        return t.isEmpty(this.data.idcardno) ? (this.toptips.show({
            text: "请输入微信持有者身份证"
        }), !1) : !!t.checkIdCard(this.data.idcardno) || (this.toptips.show({
            text: "身份证格式不正确"
        }), !1)
    },
    getRealnameAuthInfo: function() {
        var e = this,
            n = this.data.username,
            i = this.data.idcardno,
            a = this.data.selectIndex;
        t.startFacialRecognitionVerify(n, i, a, (function(t) {
            e._getUserSuccess(t.verifyResult)
        }), (function(t) {
            e._getUserFail(t.errMsg || "人脸核身失败，请稍后再试")
        }))
    },
    _getUserSuccess: function(e) {
        var n = {
            phone: this.data.phone,
            phoneLable: this.data.phoneLable,
            realName: this.data.username,
            idCard: this.data.idcardno,
            realNameLable: this.data.username,
            idCardLable: this.data.idcardno.substring(0, 4) + "**********" + this.data.idcardno.substring(14),
            verifyResult: e
        };
        t.redirectTo("/pages/jzr/jzrrz/index?showPopup=false&currentStep=3&putOnRecordObj=" + encodeURIComponent(JSON.stringify(n)))
    },
    _getUserFail: function(t) {
        this.toptips.show({
            text: t
        })
    }
});