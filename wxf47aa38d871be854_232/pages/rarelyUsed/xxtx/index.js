
var t = require("../../../utils/api"),
    a = require("../../../utils/wxutil.js"),
    e = getApp();
Page({
    data: {
        array: ["护照", "港澳通行证", "台湾居民居住证", "外国人永久居留身份证", "大陆居民身份证", "军官证"],
        type: "",
        zjlx: "",
        phone: "",
        phoneLable: "",
        isgo: !0,
        name: "",
        idcard: "",
        address: "",
        jjName: "",
        jjPhone: "",
        birthday: "",
        isclose: !0
    },
    onLoad: function(a) {
        console.log(a);
        var e = (0, t.getGlobalCardInfo)(),
            i = (0, t.getGlobalRegistered)();
        this.setData({
            type: a.type,
            phone: a.phone,
            phoneLable: a.phoneLable,
            visitor: e,
            isRegistered: i
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        this.setData({
            zjlx: e.globalData.zjlx,
            isclose: !0
        })
    },
    onHide: function() {
        console.log("1"), this.setData({
            isclose: !1
        })
    },
    onUnload: function() {
        console.log("2"), e.globalData.zjlx = "", this.setData({
            isclose: !1
        })
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindPickerChange: function(t) {
        var a = t.detail.value,
            i = this.data.array[a];
        e.globalData.zjlx = i, this.setData({
            zjlx: i
        })
    },
    bindPickerDateChange: function(t) {
        var a = t.detail.value;
        this.setData({
            birthday: a
        })
    },
    getPhoneNumber: function(e) {
        if ("getPhoneNumber:ok" == e.detail.errMsg) {
            var i = this;
            a.showLoading(), (0, t.getPhoneNumber)({
                encryptedData: e.detail.encryptedData,
                ivStr: e.detail.iv
            }, (function(t) {
                if (a.hideLoading(), 0 == t.status) {
                    var e = t.data;
                    i.setData({
                        phone: e,
                        phoneLable: e.substring(0, 3) + "****" + e.substring(7),
                        currentStep: 2
                    })
                } else a.showToast({
                    title: t.message || "获取手机号码失败，请稍后再试"
                })
            }), (function(t) {
                a.hideLoading(), a.showToast({
                    title: t.errMsg || "获取手机号码失败，请稍后再试"
                })
            }))
        } else a.showToast({
            title: "获取手机号码失败，请确认授权"
        })
    },
    nameInput: function(t) {
        this.setData({
            name: t.detail.value
        })
    },
    idcardInput: function(t) {
        var a = t.detail.value;
        null != a.match(/[^\w\.\/]/gi) && a.match(/[^\w\.\/]/gi).length > 0 && this.toptips.show({
            text: "不支持输入汉字"
        }), this.setData({
            idcard: a.replace(/[^\w\.\/]/gi, "")
        })
    },
    addressInput: function(t) {
        this.setData({
            address: t.detail.value
        })
    },
    phoneInput: function(t) {
        this.setData({
            phone: t.detail.value
        })
    },
    jjPhoneInput: function(t) {
        this.setData({
            jjPhone: t.detail.value
        })
    },
    jjNameInput: function(t) {
        this.setData({
            jjName: t.detail.value
        })
    },
    checkInput: function() {
        var t = this;
        if (a.isEmpty(this.data.name)) return this.toptips.show({
            text: "请输入姓名"
        }), !1;
        if (a.isEmpty(this.data.zjlx)) return this.toptips.show({
            text: "请选择证件类型"
        }), !1;
        if (a.isEmpty(this.data.idcard)) return this.toptips.show({
            text: "请输入证件号码"
        }), !1;
        if ("大陆居民身份证" == this.data.zjlx && !a.checkIdCard(this.data.idcard)) return this.toptips.show({
            text: "大陆居民身份证号格式有误"
        }), !1;
        if ("大陆居民身份证" != this.data.zjlx && a.isEmpty(this.data.birthday)) return this.toptips.show({
            text: "请选择出生日期"
        }), !1;
        if (a.isEmpty(this.data.phone)) return this.toptips.show({
            text: "请点击获取手机号"
        }), !1;
        if (a.isEmpty(this.data.address)) return this.toptips.show({
            text: "请输入常住地址"
        }), !1;
        if (a.isEmpty(this.data.jjName)) return this.toptips.show({
            text: "请输入紧急联系人"
        }), !1;
        if (a.isEmpty(this.data.phone)) return this.toptips.show({
            text: "请输入就诊人手机号"
        }), !1;
        if (!a.checkPhone(this.data.phone)) return this.toptips.show({
            text: "就诊人手机号格式有误"
        }), !1;
        if (a.isEmpty(this.data.jjPhone)) return this.toptips.show({
            text: "请输入紧急联系人手机号"
        }), !1;
        if (!a.checkPhone(this.data.jjPhone)) return this.toptips.show({
            text: "紧急联系手机号格式有误"
        }), !1;
        if (this.data.phone == this.data.jjPhone) return this.toptips.show({
            text: "手机号和紧急联系人手机不能一致"
        }), !1;
        var e = !0;
        return !this.data.isRegistered || (this.data.visitor.forEach((function(a) {
            t.data.idcard == a.idCardNo && (t.toptips.show({
                text: "就诊人已绑定请勿重复绑定"
            }), e = !1)
        })), e)
    },
    gonext: function() {
        if (this.checkInput()) {
            var t = this.data.isRegistered,
                a = this.data.visitor,
                e = "";
            t && a.length > 0 && (e = a[0].userId);
            var i = {
                rareName: this.data.name,
                rareIdCardType: this.data.zjlx,
                rareIdCard: this.data.idcard,
                rarePhone: this.data.phone,
                rareAddress: this.data.address,
                rareEmergencyContact: this.data.jjName,
                rareEmergencyContactPhone: this.data.jjPhone,
                rareBirthday: this.data.birthday,
                phoneLable: this.data.phone.substring(0, 3) + "****" + this.data.phone.substring(7)
            };
            wx.navigateTo({
                url: "/pages/rarelyUsed/sczj/index?type=" + this.data.type + "&obj=" + JSON.stringify(i) + "&userId=" + e
            })
        }
    }
});