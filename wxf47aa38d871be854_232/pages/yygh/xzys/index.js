
var t = require("../../../utils/api"),
    e = getApp(),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        imgBase: a.getImgBase(),
        scrollHeight: 0,
        isOpen: !1,
        dataInit: !1,
        timeRangeArr: [],
        selectTimeItem: "",
        selectWeekItem: "",
        selectTypeItem: 0,
        doctorArr: [],
        sort: "按日期排",
        showSort: !0,
        showMask: !0,
        docotorClassifyArr: [],
        moreDoctor: [],
        showTouch: !1,
        tapIndex: "",
        showJzxz: !1,
        agreement: "",
        area: "",
        openClickChangeTimeItem: !1
    },
    onLoad: function(t) {
        console.log("options:", t);
        var a = {
            deptCode: t.deptCode,
            deptName: t.deptName,
            deptId: t.deptId
        };
        this.setData({
            agreement: e.globalData.yyghInfoObj || {
                info_title: "预约服务协议",
                info_content: ""
            },
            showJzxz: t.showJzxz || !1,
            area: t.area || "",
            tapIndex: t.tapIndex,
            deptObj: a,
            deptObjStr: JSON.stringify(a),
            selectVisitorStr: t.selectVisitor || {}
        }), this._getAppointmentTimes()
    },
    onReady: function() {
        var t = "6" == this.data.tapIndex;
        this.setData({
            scrollHeight: a.getSystemInfo().windowHeight - (t ? 200 : 150)
        })
    },
    onShow: function() {
        var t = this.data.selectTimeItem;
        a.isNotEmpty(t) && this._loadDoctor(t)
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    doSelect: function(t) {
        var e = t.currentTarget.dataset.schedule,
            o = t.currentTarget.dataset.address,
            n = this.data.deptObj,
            i = t.currentTarget.dataset.item;
        a.navigateTo("/pages/yygh/xzhy/index?schedule=" + encodeURIComponent(e) + "&address=" + encodeURIComponent(o) + "&deptObj=" + encodeURIComponent(JSON.stringify(n)) + "&doctInfo=" + encodeURIComponent(JSON.stringify(i)) + "&time=" + encodeURIComponent(this.data.selectTimeItem) + "&selectVisitor=" + encodeURIComponent(this.data.selectVisitorStr) + "&tapIndex=" + encodeURIComponent(this.data.tapIndex))
    },
    _getAppointmentTimes: function() {
        var e = this;
        a.showLoading(), (0, t._request)({
            loading: !1,
            url: "/api/system/getAppointmentTimes.json",
            data: {
                distCode: e.data.tapIndex,
                deptCode: e.data.deptObj.deptCode
            },
            success: function(t) {
                if (0 != t.status) return a.hideLoading(), void a.showToast({
                    title: "获取数据失败，请稍后再试"
                });
                for (var o = [], n = 0; n < t.data.length; n++) {
                    var i, s = t.data[n];
                    i = 0 == s.amount ? "已约满" : s.amount > 0 ? "可预约" : -1 == s.amount ? "即将放号" : "未放号", o.push({
                        date: s.date,
                        displayDate: s.displayDate,
                        displayWeek: s.displayWeek,
                        displayNum: i
                    })
                }
                var d = o.length > 0 ? o[0].date : "",
                    r = o.length > 0 ? o[0].displayWeek : "";
                e.setData({
                    showTouch: o.length > 6,
                    timeRangeArr: o,
                    selectTimeItem: d,
                    selectWeekItem: r
                }), e._loadDoctor(d)
            },
            fail: function() {
                a.hideLoading(), a.showToast({
                    title: "获取数据失败，请稍后再试"
                })
            }
        })
    },
    _loadDoctor: function(e) {
        var a = this;
        (0, t._request)({
            url: "/api/appointmentInfo/getYyDoctorInfo.json",
            data: {
                time: e,
                deptCode: a.data.deptObj.deptCode,
                tapIndex: a.data.tapIndex
            },
            method: "post",
            success: function(t) {
                var o = t.data;
                "0" == t.status && 0 != o.length ? a.setData({
                    doctorArr: o
                }, (function() {
                    var t = 0;
                    o.forEach((function(e) {
                        t += e.numbers
                    })), a.changeLocalNumber(e, t)
                })) : a.setData({
                    doctorArr: []
                }, (function() {
                    "1" == t.status ? a.changeLocalNumber(e, -1) : a.changeLocalNumber(e, null)
                }))
            },
            complete: function() {
                a.setData({
                    dataInit: !0
                }), setTimeout((function() {
                    a.setData({
                        openClickChangeTimeItem: !0
                    })
                }), 1e3)
            }
        })
    },
    changeLocalNumber: function(t, e) {
        var o = this.data.timeRangeArr;
        if (a.isNotEmpty(o)) {
            for (var n in o)
                if (o[n].date == t) {
                    var i;
                    i = 0 == e ? "已约满" : e > 0 ? "可预约" : -1 == e ? "即将放号" : "未放号", o[n].displayNum = i;
                    break
                }
            this.setData({
                timeRangeArr: o
            })
        }
    },
    changeTimeItem: a.throttle((function(t) {
        var e = this,
            a = t.currentTarget.dataset.id;
        e.setData({
            dataInit: !1,
            selectTimeItem: a,
            selectWeekItem: t.currentTarget.dataset.time_week,
            selectTypeItem: "0",
            doctorArr: []
        }, (function() {
            e._loadDoctor(a)
        }))
    })),
    doTouch: function(t) {
        this.setData({
            showTouch: !1
        })
    },
    check: function(t) {
        this.setData({
            check: !this.data.check
        })
    },
    consult: function(t) {
        this.data.check ? this.setData({
            showJzxz: !1
        }) : a.showToast({
            title: "请阅读并同意《挂号须知》"
        })
    },
    cancel: function(t) {
        wx.navigateBack()
    },
    makeCall: function(t) {
        var e = t.target.dataset.phone;
        a.makePhoneCall(e)
    },
    toSuggest: function(t) {
        a.redirectTo("/integrated-query/pages/xgzy/index?dataType=0&areaCode=" + this.data.tapIndex + "&deptCode=" + this.data.deptObj.deptCode + "&selectVisitor=" + this.data.selectVisitorStr)
    }
});