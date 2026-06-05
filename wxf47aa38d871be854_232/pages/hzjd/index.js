
var a = require("../../utils/api"),
    t = require("../../utils/wxutil.js");
Page({
    data: {
        dataInit: !1,
        dataType: 1,
        itemData: {},
        pName: "",
        pCardNo: "",
        pSex: "男",
        pBirthday: "",
        pPhoneNo: "",
        ybCardNo: "",
        pNation: {
            code: "1",
            name: "请选择"
        },
        pCountry: {
            code: "1",
            name: "请选择"
        },
        pBirthplace: {
            code: "",
            name: "请选择"
        },
        patientId: "",
        patientNum: ""
    },
    onLoad: function(t) {
        var e = this,
            o = (0, a.getGlobalRegistered)(),
            n = JSON.parse(decodeURIComponent(t.item)) || {};
        e.setData({
            ok: o,
            dataInit: !0,
            itemData: n,
            pName: n.clientName,
            pCardNo: n.idCardNo,
            pSex: n.sex,
            pBirthday: n.birthday,
            pPhoneNo: n.phone
        }, (function() {
            e.queryArchiveInfo()
        }))
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return t.getShareMessage()
    },
    queryArchiveInfo: function() {
        var e = this;
        t.showLoading(), (0, a._request)({
            loading: !1,
            url: "/api/patientBasicInfo/queryArchiveInfo.json",
            data: {
                name: e.data.pName,
                idCard: e.data.pCardNo
            },
            method: "post",
            success: function(a) {
                console.log("病人档案查询", a), t.hideLoading(), 0 == a.status && e.setData({
                    dataType: a.data.dataType || "1",
                    patientId: a.data.patientid || "",
                    patientNum: a.data.patientnum || "",
                    ybCardNo: a.data.card_no || ""
                }, (function() {
                    "1" == e.data.dataType ? (t.setNavigationBarTitle("身份证已建档"), t.createBarcode("blBarCode", e.data.patientNum, 520, 160)) : t.setNavigationBarTitle("身份证建档")
                }))
            },
            fail: function(a) {
                t.hideLoading(), console.log("病人档案查询 失败", a)
            }
        })
    },
    bindPickerChange: function(a) {
        var t = a.currentTarget.dataset.type,
            e = a.detail.value;
        "p_nation" == t && this.setData({
            pNation: this.data.nationArray[e]
        }), "p_counrty" == t && this.setData({
            pCountry: this.data.countryArray[e]
        }), "p_birthplace" == t && this.setData({
            pBirthplace: this.data.birthPlaceArray[e]
        })
    },
    textInput: function(a) {
        var t = a.currentTarget.dataset.type,
            e = a.detail.value;
        "p_phoneno" == t && this.setData({
            pPhoneNo: e
        }), "p_ybCardNo" == t && this.setData({
            ybCardNo: e
        })
    },
    doSubmit: function() {
        var a = this;
        this._checkFormData() && t.showModal({
            showCancel: !0,
            content: "请确认信息无误，提交后不可修改，确认要继续吗？",
            success: function(t) {
                t.confirm && a.createInfo()
            }
        })
    },
    createInfo: function() {
        var e = this;
        t.showLoading(), (0, a._request)({
            loading: !1,
            url: "/api/patientBasicInfo/createArchive.json",
            data: {
                patientName: e.data.pName,
                cardType: "1",
                idCardNo: e.data.pCardNo,
                gender: e.data.pSex,
                birthday: e.data.pBirthday,
                countryCode: e.data.pCountry.code || "1",
                countryName: e.data.pCountry.name || "中国",
                nationCode: e.data.pNation.code || "1",
                nationName: e.data.pNation.name || "汉族1",
                phoneNo: e.data.pPhoneNo,
                birthPlaceCode: e.data.pBirthplace.code,
                birthPlaceName: e.data.pBirthplace.name,
                ybCardNo: e.data.ybCardNo || ""
            },
            method: "post",
            success: function(a) {
                t.hideLoading(), 0 != a.status ? t.showToast({
                    title: a.message || "提交失败，请稍后再试"
                }) : t.showModal({
                    content: "提交成功",
                    success: function(a) {
                        e.queryArchiveInfo()
                    }
                })
            },
            fail: function(a) {
                t.showToast({
                    title: a.errMsg || "提交失败，请稍后再试"
                })
            }
        })
    },
    _checkFormData: function() {
        return this._checkchoose(this.data.pCountry.name, "请选择国籍") && this._checkchoose(this.data.pNation.name, "请选择民族")
    },
    _checkchoose: function(a, t) {
        return "请选择" != a || (this.toptips.show({
            text: t
        }), !1)
    }
});