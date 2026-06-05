
var t = require("../../utils/api"),
    a = require("../../utils/wxutil.js"),
    e = (a.getToday(), require("../../utils/dictUtil.js"));
Page({
    data: {
        dataInit: !1,
        dataType: 1,
        step: 1,
        selectVisitor: {},
        isEnable: !1,
        pName: "",
        pSex: "男",
        pCode: "1",
        pBirthday: "请选择",
        pDist: {
            code: "",
            name: "请选择"
        },
        pFeetype: {
            code: "",
            name: "请选择"
        },
        pNation: {
            code: "",
            name: "请选择"
        },
        pCountry: {
            code: "",
            name: "请选择"
        },
        pMaritalstatus: {
            code: "",
            name: "请选择"
        },
        pProfession: {
            code: "",
            name: "请选择"
        },
        pBirthplace: {
            code: "",
            name: "请选择"
        },
        pCardtype: {
            code: "",
            name: "请选择"
        },
        pCardNo: "",
        pPhoneNo: "",
        pWorkPlace: "",
        pPostalOfWork: "",
        pHomePlace: "",
        pPostalOfHome: "",
        pIdCardNoOfGuardian: "",
        pLinkerName: "",
        pLinkerrelation: {
            code: "26",
            name: "请选择"
        },
        pLinkerPhone: "",
        indexMar: 1,
        indexMen: 1,
        cs: {}
    },
    onLoad: function(t) {
        this.setData({
            dataType: t.type || "1",
            distArray: e.Dist(),
            feeTypeArray: e.FeeType(),
            cardTypeArray: e.Cardtype(),
            maritalsArray: e.Maritalstatus(),
            linkerRelationArray: e.Linkerrelation()
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        var e = (0, t.getGlobalRegistered)();
        this.setData({
            ok: e,
            dataInit: !0
        }), e && ("1" == this.data.dataType ? a.setNavigationBarTitle("门诊建档") : "2" == this.data.dataType ? a.setNavigationBarTitle("住院建档") : this.setData({
            dataInit: !1
        }))
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return a.getShareMessage()
    },
    bindPickerChange: function(t) {
        var a = t.currentTarget.dataset.type,
            e = t.detail.value;
        "p_dist" == a && this.setData({
            pDist: this.data.distArray[e]
        }), "p_feetype" == a && this.setData({
            pFeetype: this.data.feeTypeArray[e]
        }), "p_birthday" == a && this.setData({
            pBirthday: e
        }), "p_nation" == a && this.setData({
            pNation: this.data.nationArray[e]
        }), "p_counrty" == a && this.setData({
            pCountry: this.data.countryArray[e]
        }), "p_maritalstatus" == a && this.setData({
            pMaritalstatus: this.data.maritalsArray[e]
        }), "p_profession" == a && this.setData({
            pProfession: this.data.professionArray[e]
        }), "p_birthplace" == a && this.setData({
            pBirthplace: this.data.birthPlaceArray[e]
        }), "p_cardtype" == a && (0 == e ? this.setData({
            pCardtype: this.data.cardTypeArray[e],
            isEnable: !0
        }) : this.setData({
            pCardtype: this.data.cardTypeArray[e],
            isEnable: !1
        })), "p_linkerrelation" == a && this.setData({
            pLinkerrelation: this.data.linkerRelationArray[e]
        })
    },
    textInput: function(t) {
        var e = t.currentTarget.dataset.type,
            i = t.detail.value;
        if ("p_name" == e && this.setData({
                pName: i
            }), "p_cardno" == e) {
            if ("身份证" == this.data.pCardtype.name) {
                if (1 == a.checkIdCard(i)) {
                    var s = a.getInfoByIdCard(i, 1),
                        o = a.getInfoByIdCard(i, 2),
                        h = "1";
                    "女" == o && (h = "2"), this.setData({
                        pBirthday: s,
                        pSex: o,
                        pCode: h,
                        pCardNo: i,
                        isEnable: !0
                    })
                }
                return
            }
            this.setData({
                pCardNo: i
            })
        }
        "p_phoneno" == e && this.setData({
            pPhoneNo: i
        }), "p_workplace" == e && this.setData({
            pWorkPlace: i
        }), "p_postalcode_work" == e && this.setData({
            pPostalOfWork: i
        }), "p_homeplace" == e && this.setData({
            pHomePlace: i
        }), "p_postalcode_home" == e && this.setData({
            pPostalOfHome: i
        }), "p_idcardno_guardian" == e && this.setData({
            pIdCardNoOfGuardian: i
        }), "p_linker_name" == e && this.setData({
            pLinkerName: i
        }), "p_linker_phone" == e && this.setData({
            pLinkerPhone: i
        }), "p_cardno" == e && this.setData({
            pCardNo: i
        })
    },
    doSubmit: function() {
        var t = this;
        this._checkSecondFormData() && a.showModal({
            showCancel: !0,
            content: "请确认信息无误，提交后不可修改，确认要继续吗？",
            success: function(a) {
                a.confirm && t.createRecord()
            }
        })
    },
    createRecord: function() {
        a.showLoading(), (0, t._request)({
            loading: !1,
            url: "/api/patientBasicInfo/addPatientBasicInfo.json",
            data: {
                dataType: this.data.dataType,
                dist: this.data.pDist.code,
                feeType: this.data.pFeetype.code,
                patientName: this.data.pName,
                cardType: this.data.pCardtype.code,
                cardNo: this.data.pCardNo,
                gender: this.data.pSex,
                birthday: this.data.pBirthday,
                country: this.data.pCountry.code,
                nation: this.data.pNation.code,
                maritalStatus: this.data.pMaritalstatus.code,
                profession: this.data.pProfession.code,
                birthPlace: this.data.pBirthplace.code,
                homePlace: this.data.pHomePlace,
                postalCodeOfHome: this.data.pPostalOfHome,
                workPlace: this.data.pWorkPlace,
                postalCodeOfwork: this.data.pPostalOfWork,
                phoneNo: this.data.pPhoneNo,
                linkerName: this.data.pLinkerName,
                linkerRelation: this.data.pLinkerrelation.code,
                linkerPhone: this.data.pLinkerPhone,
                idcardNoOfguardian: this.data.pIdCardNoOfGuardian
            },
            method: "post",
            success: function(t) {
                a.hideLoading(), 0 != t.status ? a.showToast({
                    title: t.message || "提交失败，请稍后再试"
                }) : a.showModal({
                    content: "提交成功",
                    success: function(t) {
                        wx.switchTab({
                            url: "/pages/index/index"
                        })
                    }
                })
            },
            fail: function(t) {
                a.showToast({
                    title: t.errMsg || "提交失败，请稍后再试"
                })
            }
        })
    },
    _checkFirstFormData: function() {
        var t = !0;
        return "1" == this.data.dataType ? t = this._checkchoose(this.data.pDist.name, "请选择就诊院区") : "2" == this.data.dataType && (t = this._checkchoose(this.data.pDist.name, "请选择就诊院区") && this._checkchoose(this.data.pFeetype.name, "请选择报销类型")), "身份证" == this.data.pCardtype.name ? t && this._checkpname() && this._checkchoose(this.data.pCardtype.name, "请选择证件类型") && this._checkpcardno() && this._checkchoose(this.data.pCountry.name, "请选择国籍") && this._checkchoose(this.data.pNation.name, "请选择民族") && this._checkchoose(this.data.pMaritalstatus.name, "请选择婚姻状况") && this._checkchoose(this.data.pProfession.name, "请选择职业") && this._checkchoose(this.data.pBirthplace.name, "请选择出生地") : t && this._checkpname() && this._checkchoose(this.data.pCardtype.name, "请选择证件类型") && this._checkpcardno() && this._checkchoose(this.data.pBirthday, "请选择出生年月") && this._checkchoose(this.data.pCountry.name, "请选择国籍") && this._checkchoose(this.data.pNation.name, "请选择民族") && this._checkchoose(this.data.pMaritalstatus.name, "请选择婚姻状况") && this._checkchoose(this.data.pProfession.name, "请选择职业") && this._checkchoose(this.data.pBirthplace.name, "请选择出生地")
    },
    _checkSecondFormData: function() {
        return this._checkphomeplace() && this._checkpphoneno() && this._checkplinkername() && this._checkchoose(this.data.pLinkerrelation.name, "请选择联系人关系") && this._checkplinkerphone() && this._checkpidcardnoofguardian()
    },
    _checkPhoneIsSame: function() {
        return this.data.pPhoneNo != this.data.pLinkerPhone || (this.toptips.show({
            text: message
        }), !1)
    },
    _checkchoose: function(t, a) {
        return "请选择" != t || (this.toptips.show({
            text: a
        }), !1)
    },
    _checkpname: function() {
        var t = this.data.pName;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入患者姓名"
        }), !1)
    },
    _checkpcardno: function() {
        var t = this.data.pCardNo;
        return "身份证" == this.data.pCardtype.name ? !!a.checkIdCard(t) || (this.toptips.show({
            text: "身份证号填写错误"
        }), !1) : !a.isEmpty(t) || (this.toptips.show({
            text: "请输入证件号"
        }), !1)
    },
    _checkpphoneno: function() {
        var t = this.data.pPhoneNo;
        return a.isEmpty(t) ? (this.toptips.show({
            text: "请输入本人联系电话"
        }), !1) : !!a.checklength(t) || (this.toptips.show({
            text: "本人联系电话格式错误"
        }), !1)
    },
    _checkpworkplace: function() {
        var t = this.data.pWorkPlace;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入工作单位"
        }), !1)
    },
    _checkppostalcodeofwork: function() {
        var t = this.data.pPostalOfWork;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入工作单位邮编"
        }), !1)
    },
    _checkphomeplace: function() {
        var t = this.data.pHomePlace;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入家庭地址"
        }), !1)
    },
    _checkppostalcodeofhome: function() {
        var t = this.data.pPostalOfHome;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入家庭地址邮编"
        }), !1)
    },
    _checkpidcardnoofguardian: function() {
        var t = this.data.pIdCardNoOfGuardian,
            i = this.data.pBirthday;
        if (e.getAges(i + "") <= 16) {
            if (a.isEmpty(t)) return this.toptips.show({
                text: "请输入监护人身份证号"
            }), !1;
            if (!a.checkIdCard(t)) return this.toptips.show({
                text: "监护人身份证号填写错误"
            }), !1
        }
        return !0
    },
    _checkplinkername: function() {
        var t = this.data.pLinkerName;
        return !a.isEmpty(t) || (this.toptips.show({
            text: "请输入联系人姓名"
        }), !1)
    },
    _checkplinkerphone: function() {
        var t = this.data.pLinkerPhone;
        return a.isEmpty(t) ? (this.toptips.show({
            text: "请输入联系人电话"
        }), !1) : !!a.checklength(t) || (this.toptips.show({
            text: "联系人电话格式错误"
        }), !1)
    },
    doSelectSex: function(t) {
        this.setData({
            pSex: t.currentTarget.dataset.name,
            pCode: t.currentTarget.dataset.code
        })
    },
    doNextStep: function() {
        if (1 == this.data.step) {
            if (1 != this._checkFirstFormData()) return;
            this.setData({
                step: this.data.step < 2 ? this.data.step + 1 : 2
            })
        }
    },
    doPreviousStep: function() {
        this.setData({
            step: this.data.step > 1 ? this.data.step - 1 : 1
        })
    }
});