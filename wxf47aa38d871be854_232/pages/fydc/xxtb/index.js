
var t = require("../../../@babel/runtime/helpers/defineProperty"),
    s = require("../../../utils/wxutil.js");
Page({
    data: {
        imgBase: s.getImgBase(),
        userArr: [],
        historyArr: [],
        branchArr: ["魏公村总院区", "第一门诊部(西城区西四)", "第二门诊部(北四环大屯路)", "第三门诊部(北三环花园东路)", "第四门诊部(东四环慈云寺)", "第五门诊部(东二环朝阳门)", "国合门诊部(中关村南大街)", "天竺门诊部(顺义区金航西路)", "一门诊C楼"],
        dataInit: !1,
        dataObject: {},
        input_name: "",
        input_idCard: "",
        input_phone: "",
        input_address: "",
        input_branch: "",
        input_region: "",
        status_1_1: "",
        status_1_2: "",
        status_1_3: "",
        status_1_4: "",
        status_1_5: "",
        status_1_6: "",
        status_1_7: "",
        status_1_8: "",
        status_1_9: "",
        status_1_10: "",
        status_2_1: "",
        status_2_2: "",
        status_2_3: "",
        status_2_4: "",
        status_2_5: "",
        status_2_1_obj: {},
        agree: !1,
        scrollWhere: ""
    },
    onLoad: function(t) {
        var a;
        try {
            a = t.dataObj && JSON.parse(decodeURIComponent(t.dataObj))
        } catch (t) {
            a = {}, console.error(t)
        }
        if (s.isNotEmpty(a)) this._initData(a);
        else {
            var i = this;
            s.showLoading(), s.request({
                loading: !1,
                url: "/api/epidemic-survey/getSurvey.json",
                success: function(t) {
                    s.hideLoading(), 0 == t.status ? i._initData(t.data) : s.showToast({
                        title: t.message || "数据加载失败，请稍后再试"
                    })
                },
                fail: function(t) {
                    s.hideLoading(), s.showToast({
                        title: t || "数据加载失败，请稍后再试"
                    })
                }
            })
        }
    },
    onReady: function() {
        this.toptips = s.selectComponent(this, "#tips")
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return s.getShareMessage()
    },
    changeInput: function(a) {
        console.log(a);
        var i = a.currentTarget.dataset.tag,
            e = a.currentTarget.dataset.key,
            _ = this.data[e];
        if ("tap" == a.type ? _ = a.currentTarget.dataset.value : "input" != a.type && "blur" != a.type && "change" != a.type || (_ = a.detail.value), s.isNotEmpty(i)) {
            var n = this.data[i];
            n[e] = _.trim(), this.setData(t({}, i, n), (function() {
                this._saveCache()
            }))
        } else this.setData(t({}, e, _.toString().trim()), (function() {
            this._saveCache()
        }))
    },
    changeUser: function(t) {
        var s = t.detail.value,
            a = this.data.historyArr[s];
        this.setData({
            input_name: a.name,
            input_idCard: a.idCard,
            input_phone: a.phone,
            input_region: a.address.split("-")[0],
            input_address: a.address.split("-")[1],
            input_branch: this.data.branchArr.indexOf(a.branch).toString()
        }, (function() {
            this._saveCache()
        }))
    },
    doAgree: function(t) {
        this.setData({
            agree: !this.data.agree
        })
    },
    doSubmit: function() {
        if (this._checkForm()) {
            var t = this;
            s.showModal({
                showCancel: !0,
                content: "请确认信息无误，提交后不可修改，确认要继续吗？",
                success: function(a) {
                    a.confirm && (s.showLoading(), s.request({
                        loading: !1,
                        url: "/api/epidemic-survey/saveSurvey.json",
                        method: "post",
                        data: {
                            name: t.data.input_name,
                            idCard: t.data.input_idCard,
                            phone: t.data.input_phone,
                            address: t.data.input_region.replaceAll(",", "") + "-" + t.data.input_address,
                            branch: t.data.branchArr[t.data.input_branch],
                            content: Object.assign({
                                status_1_1: t.data.status_1_1,
                                status_1_2: t.data.status_1_2,
                                status_1_3: t.data.status_1_3,
                                status_1_4: t.data.status_1_4,
                                status_1_5: t.data.status_1_5,
                                status_1_6: t.data.status_1_6,
                                status_1_7: t.data.status_1_7,
                                status_1_8: t.data.status_1_8,
                                status_1_9: t.data.status_1_9,
                                status_1_10: t.data.status_1_10,
                                status_2_1: t.data.status_2_1,
                                status_2_2: t.data.status_2_2,
                                status_2_3: t.data.status_2_3,
                                status_2_4: t.data.status_2_4,
                                status_2_5: t.data.status_2_5
                            }, t.data.status_2_1_obj)
                        },
                        success: function(t) {
                            if (s.hideLoading(), 0 == t.status) {
                                s.showToast({
                                    icon: "success",
                                    title: "提交成功"
                                });
                                s.removeStorage("input_cache_epidemic_survey"), setTimeout((function() {
                                    s.redirectTo("/pages/fydc/xxxq/index?dataObj=" + encodeURIComponent(JSON.stringify(t.data)))
                                }), 1500)
                            } else s.showToast({
                                title: t.message || "提交失败，请稍后再试"
                            })
                        },
                        fail: function(t) {
                            s.hideLoading(), s.showToast({
                                title: t.errMsg || "提交失败，请稍后再试"
                            })
                        }
                    }))
                }
            })
        }
    },
    _initData: function(t) {
        if ((t.record || []).length >= t.count) s.showModal({
            content: "已达到最大填报次数",
            success: function() {
                s.redirectTo("/pages/fydc/xxxq/index?dataObj=" + encodeURIComponent(JSON.stringify(t)))
            }
        });
        else {
            for (var a = [], i = t.history || [], e = 0; e < i.length; e++) {
                var _ = i[e];
                a.push(_.name + "(" + s.handleIdCardSensitive(_.idCard) + ")")
            }
            if ("2" == t.mode && t.area_2_1.length > 0) {
                var n = {};
                t.area_2_1.forEach((function(t) {
                    n[t.key] = ""
                })), this.setData({
                    status_2_1: "0",
                    status_2_1_obj: n
                })
            }
            this.setData({
                dataInit: !0,
                dataObject: t,
                userArr: a,
                historyArr: i
            }, (function() {
                var t = s.getStorage("input_cache_epidemic_survey");
                s.isNotEmpty(t) && this.setData(t)
            }))
        }
    },
    _checkForm: function() {
        if (s.isEmpty(this.data.input_name)) return this.setData({
            scrollWhere: "input_name"
        }), this._showTip("请输入姓名"), !1;
        if (s.isEmpty(this.data.input_idCard)) return this.setData({
            scrollWhere: "input_idCard"
        }), this._showTip("请输入身份证号"), !1;
        if (!s.checkIdCard(this.data.input_idCard)) return this.setData({
            scrollWhere: "input_idCard"
        }), this._showTip("身份证号格式错误"), !1;
        if (s.isEmpty(this.data.input_phone)) return this.setData({
            scrollWhere: "input_phone"
        }), this._showTip("请输入联系电话"), !1;
        if (!s.checkPhone(this.data.input_phone)) return this.setData({
            scrollWhere: "input_phone"
        }), this._showTip("联系电话格式错误"), !1;
        if (s.isEmpty(this.data.input_region)) return this.setData({
            scrollWhere: "input_region"
        }), this._showTip("请输入家庭住址"), !1;
        if (s.isEmpty(this.data.input_address)) return this.setData({
            scrollWhere: "input_address"
        }), this._showTip("请输入详细住址"), !1;
        if (this.data.input_address.length < 5) return this.setData({
            scrollWhere: "input_address"
        }), this._showTip("详细住址不得少于五个字"), !1;
        if (!/\d/.test(this.data.input_address)) return this.setData({
            scrollWhere: "input_address"
        }), this._showTip("详细住址必须包含数字"), !1;
        if (s.isEmpty(this.data.input_branch)) return this.setData({
            scrollWhere: "input_branch"
        }), this._showTip("请选择就诊院区"), !1;
        if (s.isEmpty(this.data.status_1_1) || s.isEmpty(this.data.status_1_2) || s.isEmpty(this.data.status_1_3) || s.isEmpty(this.data.status_1_4) || s.isEmpty(this.data.status_1_5) || s.isEmpty(this.data.status_1_6) || s.isEmpty(this.data.status_1_7) || s.isEmpty(this.data.status_1_8) || s.isEmpty(this.data.status_1_9) || s.isEmpty(this.data.status_1_10)) return this.setData({
            scrollWhere: "jkzk"
        }), this._showTip("请填写【健康状况调查】"), !1;
        if (s.isEmpty(this.data.status_2_1) || s.isEmpty(this.data.status_2_2) || s.isEmpty(this.data.status_2_3) || s.isEmpty(this.data.status_2_4) || s.isEmpty(this.data.status_2_5)) return this._showTip("请填写【流行病学调查】"), !1;
        var t = this.data.status_2_1_obj;
        if (s.isNotEmpty(t))
            for (var a in t) {
                var i = t[a];
                if (s.isEmpty(i)) return this._showTip("请填写【流行病学调查】"), !1
            }
        return !0
    },
    _saveCache: function() {
        var t = {
            input_name: this.data.input_name,
            input_idCard: this.data.input_idCard,
            input_phone: this.data.input_phone,
            input_address: this.data.input_address,
            input_region: this.data.input_region,
            input_branch: this.data.input_branch,
            status_1_1: this.data.status_1_1,
            status_1_2: this.data.status_1_2,
            status_1_3: this.data.status_1_3,
            status_1_4: this.data.status_1_4,
            status_1_5: this.data.status_1_5,
            status_1_6: this.data.status_1_6,
            status_1_7: this.data.status_1_7,
            status_1_8: this.data.status_1_8,
            status_1_9: this.data.status_1_9,
            status_1_10: this.data.status_1_10,
            status_2_1: this.data.status_2_1,
            status_2_2: this.data.status_2_2,
            status_2_3: this.data.status_2_3,
            status_2_4: this.data.status_2_4,
            status_2_5: this.data.status_2_5,
            status_2_1_obj: this.data.status_2_1_obj
        };
        s.setStorage("input_cache_epidemic_survey", t, 6e5)
    },
    _showTip: function(t) {
        s.isNotEmpty(this.toptips) ? this.toptips.show({
            text: t
        }) : s.showToast({
            title: t
        })
    }
});