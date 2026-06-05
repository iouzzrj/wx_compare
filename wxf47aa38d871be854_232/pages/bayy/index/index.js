
var t = require("../../../utils/api"),
    e = require("../../../utils/http"),
    a = require("../../../utils/wxutil.js");
getApp();
Page({
    data: {
        goback: !1,
        myFaceImg: "",
        upMyFaceImg: "",
        myBackImg: "",
        upMyBackImg: "",
        otherFaceImg: "",
        upOtherFaceImg: "",
        otherBackImg: "",
        upOtherBackImg: "",
        myToMyFaceImg: "",
        upMyToMyFaceImg: "",
        otherToOtherFaceImg: "",
        upOtherToOtherFaceImg: "",
        myUpBustImg: "",
        upMyUpBustImg: "",
        userName: "",
        idCard: "",
        phone: "",
        relational: "",
        step: 0,
        selectInhosArr: [],
        inhosArr: [],
        pic_type_name: [],
        purpose: {
            name: "常规",
            is: !1
        },
        otherPurpose: "",
        takeType: "2",
        deliverPayType: "1",
        region: ["请选择", "", ""],
        takeProvince: "",
        takeCity: "",
        takeCounty: "",
        takeAddr: "",
        maxLength: "100",
        takeName: "",
        takePhoneNo: "",
        printNum: 0,
        printNumArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        relationArr: ["父女", "父子", "母女", "母子", "夫妻", "亲属", "朋友", "同事"],
        navIndex: 1,
        params: {},
        editFlag: !1,
        relationIndex: 0,
        recordId: 0,
        isShowMask: !0,
        isShowpup: !0
    },
    onLoad: function(e) {
        var i = (0, t.getGlobalCardInfo)(),
            s = [];
        if (a._isEmpty(JSON.stringify(e)))
            for (l = 0; l < i.length; l++) {
                var n = i[l];
                "1" != n.relationship && 1 != i.length || (s = n)
            } else {
                var o = e.params && JSON.parse(e.params) || {};
                console.log(o), s = o.selectVisitor;
                var h = o.medicalAppointmentRecord.extendField1 && JSON.parse(o.medicalAppointmentRecord.extendField1) || {};
                console.log(h);
                for (var r = h.relational ? h.relational : "", c = 0, d = this.data.relationArr, l = 0; l < d.length; l++) {
                    d[l] == r && (c = l)
                }
                var u = this.data.purpose,
                    m = this.data.otherPurpose,
                    p = o.medicalAppointmentInfo[0].printContent,
                    g = p.split(",");
                console.log(g);
                var I = g.length;
                if (1 == I) "常规" == g[0] ? u.is = !0 : m = p;
                else if (I > 1 && "常规" == g[0]) {
                    u.is = !0;
                    for (var l = 1; l < I; l++) m += l < I - 1 ? g[l] + "," : g[l]
                } else m = p;
                var y = this.data.myFaceImg,
                    k = this.data.upMyFaceImg,
                    f = this.data.myBackImg,
                    v = this.data.upMyBackImg,
                    _ = this.data.otherFaceImg,
                    T = this.data.upOtherFaceImg,
                    w = this.data.otherBackImg,
                    N = this.data.upOtherBackImg,
                    A = this.data.myToMyFaceImg,
                    x = this.data.upMyToMyFaceImg,
                    F = this.data.otherToOtherFaceImg,
                    P = this.data.upOtherToOtherFaceImg,
                    D = this.data.myUpBustImg,
                    M = this.data.upMyUpBustImg,
                    C = o.attachmentInfo;
                if (3 == o.attachmentInfo.length) y = C[0].attachmentDomainName + C[0].attachmentPath, k = C[0].attachmentPath, f = C[1].attachmentDomainName + C[1].attachmentPath, v = C[1].attachmentPath, A = C[2].attachmentDomainName + C[2].attachmentPath, x = C[2].attachmentPath;
                else y = C[0].attachmentDomainName + C[0].attachmentPath, k = C[0].attachmentPath, f = C[1].attachmentDomainName + C[1].attachmentPath, v = C[1].attachmentPath, _ = C[2].attachmentDomainName + C[2].attachmentPath, T = C[2].attachmentPath, w = C[3].attachmentDomainName + C[3].attachmentPath, N = C[3].attachmentPath, F = C[4].attachmentDomainName + C[4].attachmentPath, P = C[4].attachmentPath, D = C[5].attachmentDomainName + C[5].attachmentPath, M = C[5].attachmentPath;
                this.setData({
                    params: o,
                    purpose: u,
                    otherPurpose: m,
                    myFaceImg: y,
                    upMyFaceImg: k,
                    myBackImg: f,
                    upMyBackImg: v,
                    otherFaceImg: _,
                    upOtherFaceImg: T,
                    otherBackImg: w,
                    upOtherBackImg: N,
                    myToMyFaceImg: A,
                    upMyToMyFaceImg: x,
                    otherToOtherFaceImg: F,
                    upOtherToOtherFaceImg: P,
                    myUpBustImg: D,
                    upMyUpBustImg: M,
                    takeType: o.medicalAppointmentRecord.takeType,
                    printNum: o.medicalAppointmentInfo[0].printCount,
                    editFlag: !0,
                    recordId: o.medicalAppointmentRecord.recordId,
                    userName: o.medicalAppointmentRecord.patientName ? o.medicalAppointmentRecord.patientName : "",
                    idCard: o.medicalAppointmentRecord.idCardNo ? o.medicalAppointmentRecord.idCardNo : "",
                    phone: o.medicalAppointmentRecord.phoneNo ? o.medicalAppointmentRecord.phoneNo : "",
                    relational: r,
                    relationIndex: c,
                    navIndex: h.navIndex ? h.navIndex : 1
                })
            }
        this.setData({
            selectVisitor: s,
            visitorArr: i,
            contentInfo: a.getStorage("content_info").BAFYGZ[0]
        }), console.log(s), this.setData({
            dataInit: !0
        })
    },
    RegionChange: function(t) {
        console.log("11:", t), this.setData({
            region: t.detail.value,
            takeProvince: t.detail.value[0],
            takeCity: t.detail.value[1],
            takeCounty: t.detail.value[2]
        })
    },
    takeAddrInput: function(t) {
        console.log(t), this.setData({
            takeAddr: t.detail.cursor > this.data.maxLength ? t.detail.value.slice(0, this.data.maxLength) : t.detail.value
        })
    },
    onReady: function() {
        this._initSelector(), this._initSelector2(), this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doChangeNum: function(t) {
        console.log(t);
        var e = t.detail.value,
            a = this.data.printNumArr;
        this.setData({
            printNum: a[e]
        })
    },
    doChangeRelation: function(t) {
        console.log(t);
        var e = t.detail.value,
            a = this.data.relationArr;
        this.setData({
            relational: a[e]
        })
    },
    doCheckInhos: function(t) {
        var e = t.detail.value;
        if (this.setData({
                muiltIndex: e
            }), 0 != this.data.inhosArr.length) {
            var a = this.data.inhosArr[e];
            console.log(this.data.inhosArr), a && "undefined" != a && this.setData({
                selectInhosObj: a
            })
        } else wx.showModal({
            showCancel: !1,
            content: "未查到住院信息！",
            success: function(t) {}
        })
    },
    getInhosRecord: function() {
        var t = this,
            a = this;
        console.log(a);
        var i = a.data.selectVisitor,
            s = a.data.navIndex;
        console.log(s);
        var n = {};
        if (1 == s) n = {
            clientName: i.clientName,
            idCardNo: i.idCardNo
        };
        else {
            if (!a.checkData()) return;
            n = {
                clientName: a.data.userName,
                idCardNo: a.data.idCard
            }
        }
        console.log(n), (0, e.getInhospitalRecord)(!0, n).then((function(e) {
            if (console.log(e), 0 == e.status) {
                for (var i = e.data, s = 0; s < i.length; s++) {
                    i[s].checked = !1
                }
                return i.sort((function(t, e) {
                    return t.inhospitalNo - e.inhospitalNo
                })), console.log(i), a.setData({
                    inhosArr: i
                }), void t.renderInhos(i)
            }
            wx.showToast({
                title: "暂无住院记录",
                icon: "none"
            }), a.setData({
                inhosArr: [],
                selectInhosArr: []
            })
        })).catch((function(t) {
            wx.showToast({
                title: "系统异常",
                icon: "none"
            }), a.setData({
                inhosArr: []
            })
        }))
    },
    renderInhos: function(t) {
        var e = this.data.params;
        if (console.log(e), a._isEmpty(JSON.stringify(e))) this.setData({
            selectInhosArr: []
        });
        else if (e.medicalAppointmentInfo.length <= 0) this.setData({
            selectInhosArr: []
        });
        else {
            for (var i = [], s = 0; s < t.length; s++)
                for (var n = 0; n < e.medicalAppointmentInfo.length; n++) t[s].inhospitalNo == e.medicalAppointmentInfo[n].visitNo && (i.push(t[s]), t[s].checked = !0);
            this.setData({
                inhosArr: t,
                selectInhosArr: i
            })
        }
    },
    check: function(t) {
        this.setData({
            check: !this.data.check
        })
    },
    doNextStep: function() {
        this._checkFormData() && (0 != this.data.step ? 1 != this.data.step ? 2 != this.data.step || this.setData({
            step: 3,
            takePhoneNo: 1 == this.data.navIndex ? this.data.selectVisitor.phone : this.data.phone,
            takeName: 1 == this.data.navIndex ? this.data.selectVisitor.clientName : this.data.userName
        }) : this.setData({
            step: 2
        }) : this.setData({
            step: 1
        }))
    },
    doPrevStep: function(t) {
        if ("prev" == t.currentTarget.dataset.id) {
            if (this.data.goback) return void this.setData({
                goback: !1,
                step: 3
            });
            this.setData({
                step: this.data.step > 0 ? Number(this.data.step) - 1 : 0
            })
        } else this.setData({
            step: t.currentTarget.dataset.index
        })
    },
    userNameInput: function(t) {
        this.setData({
            userName: t.detail.value
        }), this.getInhosRecord()
    },
    takeNameInput: function(t) {
        this.setData({
            takeName: t.detail.value
        })
    },
    idCardInput: function(t) {
        this.setData({
            idCard: t.detail.value
        }), this.getInhosRecord()
    },
    phoneInput: function(t) {
        this.setData({
            phone: t.detail.value
        }), this.getInhosRecord()
    },
    takePhoneNoInput: function(t) {
        this.setData({
            takePhoneNo: t.detail.value
        })
    },
    relationInput: function(t) {
        this.setData({
            relational: t.detail.value
        })
    },
    _checkFormData: function() {
        var t = this.data.step;
        console.log(t);
        var e = this.data.selectVisitor;
        if (0 == t) return "1" == this.data.navIndex ? this._checkUserName(e.clientName) && this._checkIdCard(e.idCardNo) && this._checkPhone(e.phone) && this._checkSelectInHosArr(this.data.selectInhosArr) : this._checkUserName(e.clientName) && this._checkIdCard(e.idCardNo) && this._checkPhone(e.phone) && this._checkOtherUserName(this.data.userName) && this._checkOtherIdCard(this.data.idCard) && this._checkOtherPhone(this.data.phone) && this._checkRelation(this.data.relational) && this._idCardCompare(e.idCardNo, this.data.idCard) && this._checkSelectInHosArr(this.data.selectInhosArr);
        if (1 == t) {
            var a = this.data.otherPurpose;
            if (!this.data.purpose.is && !this._checkOtherPurpose(a)) return wx.showToast({
                title: "请选择病案内容",
                icon: "none"
            }), !1;
            for (var i = a.split(","), s = 0; s < i.length; s++)
                if ("常规" == i[s]) return wx.showToast({
                    title: "其他内容不可选择常规！",
                    icon: "none"
                }), !1;
            return !0
        }
        if (2 == t) {
            if ("1" == this.data.navIndex) return this._checkMyFaceImg(this.data.upMyFaceImg) && this._checkMyBackImg(this.data.upMyBackImg) && this._checkMyToMyFaceImg(this.data.upMyToMyFaceImg);
            if ("2" == this.data.navIndex) return this._checkOtherFaceImg(this.data.upOtherFaceImg) && this._checkOtherBackImg(this.data.upOtherBackImg) && this._checkMyFaceImg(this.data.upMyFaceImg) && this._checkMyBackImg(this.data.upMyBackImg) && this._checkOtherToOtherFaceImg(this.data.upOtherToOtherFaceImg) && this._checkMyUpBustImg(this.data.upMyUpBustImg)
        } else if (3 == t) return this._checkIsAuthed(this.data.isAuthed)
    },
    checkData: function() {
        return !a._isEmpty(this.data.userName) && (!a._isEmpty(this.data.idCard) && (18 == this.data.idCard.length && (!a._isEmpty(this.data.phone) && 11 == this.data.phone.length)))
    },
    _checkMyFaceImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传本人身份证正面照片",
            icon: "none"
        }), !1)
    },
    _checkMyBackImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传本人身份证背面照片",
            icon: "none"
        }), !1)
    },
    _checkOtherFaceImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传就诊人身份证正面照片",
            icon: "none"
        }), !1)
    },
    _checkOtherBackImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传就诊人身份证背面照片",
            icon: "none"
        }), !1)
    },
    _checkMyToMyFaceImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传本人手举本人身份证正面照片",
            icon: "none"
        }), !1)
    },
    _checkOtherToOtherFaceImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传就诊人手举就诊人身份证正面照片",
            icon: "none"
        }), !1)
    },
    _checkMyUpBustImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传代办人手举身份证半身照片",
            icon: "none"
        }), !1)
    },
    _checkTypeName: function(t) {
        return !a._isEmpty(t)
    },
    _checkOtherPurpose: function(t) {
        return !a._isEmpty(t)
    },
    _checkUserName: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请输入姓名",
            icon: "none"
        }), !1)
    },
    _checkIdCard: function(t) {
        return a._isEmpty(t) ? (wx.showToast({
            title: "请输入身份证号",
            icon: "none"
        }), !1) : !!a._checkIdCard(t) || (wx.showToast({
            title: "身份证号填写错误",
            icon: "none"
        }), !1)
    },
    _checkPhone: function(t) {
        return a._isEmpty(t) ? (wx.showToast({
            title: "请输入手机号",
            icon: "none"
        }), !1) : !!a._checkPhone(t) || (wx.showToast({
            title: "手机号填写错误",
            icon: "none"
        }), !1)
    },
    _checkOtherUserName: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请输入患者姓名",
            icon: "none"
        }), !1)
    },
    _checkOtherIdCard: function(t) {
        return a._isEmpty(t) ? (wx.showToast({
            title: "请输入患者身份证号",
            icon: "none"
        }), !1) : !!a._checkIdCard(t) || (wx.showToast({
            title: "患者身份证号填写错误",
            icon: "none"
        }), !1)
    },
    _checkOtherPhone: function(t) {
        return a._isEmpty(t) ? (wx.showToast({
            title: "请输入患者手机号",
            icon: "none"
        }), !1) : !!a._checkPhone(t) || (wx.showToast({
            title: "患者手机号填写错误",
            icon: "none"
        }), !1)
    },
    _checkRelation: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请输入关系",
            icon: "none"
        }), !1)
    },
    _idCardCompare: function(t, e) {
        return t != e || (wx.showToast({
            title: "患者与代办人身份证不可相同！",
            icon: "none"
        }), !1)
    },
    _checkSelectInHosArr: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请选择住院号",
            icon: "none"
        }), !1)
    },
    _checkRecord: function(t) {
        var e = this.data.dataArr;
        console.log(e, "dataList");
        for (var a = 0; a < e.length; a++) {
            if (t == e[a].infoList[0].visit_no) {
                var i = e[a].approveStatus,
                    s = e[a].payStatus,
                    n = e[a].businessStatus;
                if (i < 2 && "0" == s && "1" == n) return wx.showToast({
                    title: "尚有订单未完成",
                    icon: "none"
                }), !1
            }
        }
        return !0
    },
    _checkAddress: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请输入详细地址",
            icon: "none"
        }), !1)
    },
    _checkIdCardImg: function(t) {
        return !a._isEmpty(t) || (wx.showToast({
            title: "请上传证件照片",
            icon: "none"
        }), !1)
    },
    _checkIsAuthed: function(t) {
        return !!t || (wx.showToast({
            title: "请选择认证方式！",
            icon: "none"
        }), !1)
    },
    _checkPrintNum: function(t) {
        return 0 != t || (wx.showToast({
            title: "请选择打印份数！",
            icon: "none"
        }), !1)
    },
    useCamera: function(t) {
        var e = this,
            i = t.currentTarget.dataset.id;
        wx.chooseImage({
            count: 1,
            sourceType: ["album", "camera"],
            sizeType: ["compressed"],
            success: function(t) {
                var s = t.tempFilePaths;
                console.log(s, "faceImgfaceImg"), a.uploadFile({
                    url: "/common/file/upload.json",
                    filePath: s[0],
                    name: "file",
                    success: function(t) {
                        if (console.log(t), 0 == t.status) {
                            var a = t;
                            10 != i && 22 != i ? 11 != i && 23 != i ? 12 != i ? 20 != i ? 21 != i ? 24 != i ? 25 == i && e.setData({
                                myUpBustImg: s[0],
                                upMyUpBustImg: a.data
                            }) : e.setData({
                                otherToOtherFaceImg: s[0],
                                upOtherToOtherFaceImg: a.data
                            }) : e.setData({
                                otherBackImg: s[0],
                                upOtherBackImg: a.data
                            }) : e.setData({
                                otherFaceImg: s[0],
                                upOtherFaceImg: a.data
                            }) : e.setData({
                                myToMyFaceImg: s[0],
                                upMyToMyFaceImg: a.data
                            }) : e.setData({
                                myBackImg: s[0],
                                upMyBackImg: a.data
                            }) : e.setData({
                                myFaceImg: s[0],
                                upMyFaceImg: a.data
                            })
                        } else wx.showToast({
                            title: "上传照片失败！",
                            icon: "none"
                        })
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: "上传失败，请稍后再试",
                            icon: "none"
                        })
                    }
                })
            },
            complete: function() {}
        })
    },
    _getUserFail: function(t) {
        wx.showToast({
            title: t,
            icon: "none"
        })
    },
    _initSelector: function() {
        return a._isEmpty(this.selector) && (this.selector = a._selectComponent(this, "#selector")), a._isNotEmpty(this.selector)
    },
    _initSelector2: function() {
        return a._isEmpty(this.selectorInHospital) && (this.selectorInHospital = a._selectComponent(this, "#selectorInHospital")), a._isNotEmpty(this.selectorInHospital)
    },
    otherTypeFocus: function(t) {
        var e = this;
        if (null !== this.data.otherPurpose && "" != this.data.otherPurpose) {
            var a = this.data.pic_type_name;
            console.log("移除前" + a), a = a.filter((function(t) {
                return t != e.data.otherPurpose
            })), console.log("移除后" + a), this.setData({
                pic_type_name: a
            }), console.log(this.data.pic_type_name)
        }
    },
    otherTypeInput: function(t) {
        this.setData({
            otherPurpose: t.detail.value
        })
    },
    addPurpose: function(t) {
        var e = this.data.purpose;
        e.is = !e.is, this.setData({
            purpose: e
        }), console.log(this.data.purpose)
    },
    toSelect: function(t) {
        var e = this.data.navIndex;
        if (console.log(e), 1 != e) {
            var a = t.currentTarget.dataset.visitor,
                i = {
                    content: this.data.visitorArr,
                    defaultValue: a
                };
            console.log(i), this.selector.show(i)
        } else wx.showToast({
            title: "本人不可以切换就诊人",
            icon: "none"
        })
    },
    selectInhosTime: function(t) {
        if (console.log(this.data.inhosArr), 0 != this.data.inhosArr.length) {
            var e = {
                inhosArr: this.data.inhosArr,
                selectInhosArr: this.data.selectInhosArr,
                title: "选择住出院时间"
            };
            console.log(e), this.selectorInHospital.show(e)
        } else wx.showToast({
            title: "暂无住院记录",
            icon: "none"
        })
    },
    doSelect: function(t) {
        console.log(t), 2 != this.data.navIndex ? (this.setData({
            selectVisitor: this.data.visitorArr[t.detail.value],
            inhosArr: [],
            selectInhosArr: []
        }), this.getInhosRecord()) : this.setData({
            selectVisitor: this.data.visitorArr[t.detail.value]
        })
    },
    assembleList: function() {
        var t, e, a, i = [];
        if ("1" == this.data.navIndex) return (t = {}).path = this.data.upMyFaceImg, t.name = "本人身份证件正面照片", (e = {}).path = this.data.upMyBackImg, e.name = "本人身份证件背面照片", (a = {}).path = this.data.upMyToMyFaceImg, a.name = "本人手举本人身份证件正面照片", i.push(t), i.push(e), i.push(a), i;
        (t = {}).path = this.data.upOtherFaceImg, t.name = "患者身份证件正面照片", (e = {}).path = this.data.upOtherBackImg, e.name = "患者身份证件背面照片", (a = {}).path = this.data.upMyFaceImg, a.name = "代办人身份证件正面照片";
        var s = {};
        s.path = this.data.upMyBackImg, s.name = "代办人身份证件背面照片";
        var n = {};
        n.path = this.data.upOtherToOtherFaceImg, n.name = "患者手举患者身份证件正面照片";
        var o = {};
        return o.path = this.data.upMyUpBustImg, o.name = "患者手举身份证半身照片", i.push(t), i.push(e), i.push(a), i.push(s), i.push(n), i.push(o), i
    },
    checkTake: function() {
        return !(a._isEmpty(this.data.takeName) || a._isEmpty(this.data.takePhoneNo) || a._isEmpty(this.data.takeProvince) || a._isEmpty(this.data.takeCity) || a._isEmpty(this.data.takeCounty) || a._isEmpty(this.data.takeAddr)) || (wx.showToast({
            title: "请填写收货信息",
            icon: "none"
        }), !1)
    },
    submitAudit: a.throttle((function(e) {
        this._checkPrintNum(this.data.printNum) && this._checkSelectInHosArr(this.data.selectInhosArr) && this.checkTake() && (0, t.authSubMessage)(e, "medicalAppointment", this.submit, this)
    })),
    submit: function(t) {
        var a = this.assembleList(),
            i = this.data.selectVisitor,
            s = {
                selectInhosArr: this.data.selectInhosArr,
                selectVisitor: i,
                purpose: this.data.purpose.is ? this.data.purpose.name : "",
                otherPurpose: this.data.otherPurpose,
                upImgList: a,
                takeType: this.data.takeType,
                deliverPayType: "1" == this.data.takeType ? this.data.deliverPayType : "",
                takeName: "1" == this.data.takeType ? this.data.takeName : "",
                takePhoneNo: "1" == this.data.takeType ? this.data.takePhoneNo : "",
                takeProvince: "1" == this.data.takeType ? this.data.takeProvince : "",
                takeCity: "1" == this.data.takeType ? this.data.takeCity : "",
                takeCounty: "1" == this.data.takeType ? this.data.takeCounty : "",
                takeAddr: "1" == this.data.takeType ? this.data.takeAddr : "",
                printNum: this.data.printNum,
                editFlag: this.data.editFlag,
                navIndex: this.data.navIndex,
                userName: this.data.userName,
                idCard: this.data.idCard,
                phone: this.data.phone,
                relational: this.data.relational
            };
        this.data.editFlag && Object.assign(s, {
            recordId: this.data.recordId
        }), console.log(s), (0, e.MedicalRecordCopySubmitAudit)(!0, s).then((function(t) {
            if (console.log(t), -1 == t.status) return Object.assign(s, {
                flag: !1,
                reason: t.message
            }), void wx.reLaunch({
                url: "/pages/bayy/result/index?result=" + JSON.stringify(s)
            });
            Object.assign(s, {
                flag: !0
            }), wx.reLaunch({
                url: "/pages/bayy/result/index?result=" + JSON.stringify(s)
            })
        })).catch((function(t) {
            wx.showToast({
                title: "系统异常，请稍后重试!",
                icon: "none"
            })
        }))
    },
    changeTakeType: function(t) {
        console.log(t.currentTarget.dataset.type);
        var e = t.currentTarget.dataset.type;
        this.setData({
            takeType: e
        })
    },
    changeDeliverPayType: function(t) {
        console.log(t.currentTarget.dataset.type);
        var e = t.currentTarget.dataset.type;
        this.setData({
            deliverPayType: e
        })
    },
    clicknav: function(t) {
        var e = t.currentTarget.dataset.index,
            a = this.data.selectVisitor;
        if (1 == e)
            for (var i = this.data.visitorArr, s = 0; s < i.length; s++) {
                var n = i[s];
                "1" != n.relationship && 1 != i.length || (a = n)
            }
        this.setData({
            inhosArr: [],
            selectInhosArr: [],
            navIndex: e,
            params: {},
            selectVisitor: a
        }), this.getInhosRecord()
    },
    close: function(t) {
        console.log(t), this.setData({
            inhosArr: t.detail.inhosArr
        })
    },
    confirm: function(t) {
        console.log(t), this.setData({
            inhosArr: t.detail.inhosArr,
            selectInhosArr: t.detail.selectInhosArr
        })
    },
    hidepup: function() {
        this.setData({
            isShowMask: !1,
            isShowpup: !1
        }), this.getInhosRecord()
    }
});