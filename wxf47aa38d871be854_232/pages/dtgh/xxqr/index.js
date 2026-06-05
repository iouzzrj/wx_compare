
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js"),
    i = "";
Page({
    data: {
        imgBase: e.getImgBase(),
        sch: {},
        hids: {},
        visitor: [],
        selectVisitor: {},
        selectIndex: 0,
        visitorId: "",
        visitorName: "",
        visitorCardNo: "",
        defaultCardId: "",
        defaultClientId: "",
        visitorSelectorArr: [],
        visitorCardType: "",
        limitAge: 14,
        numsource: {},
        wexinPayParams: {},
        appointmentRecord: {},
        isBtn: !0,
        showTip: !1,
        showTable: !1,
        notice: "",
        recordList: []
    },
    onLoad: function(t) {
        var e = t.hids && JSON.parse(t.hids) || {},
            i = t.scheduleId;
        this.setData({
            scheduleId: i,
            hids: e
        })
    },
    onReady: function() {
        this._initSelector(), this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        var i = {},
            s = (0, t.getGlobalCardInfo)();
        if (e.isEmpty(i))
            for (var a = 0; a < s.length; a++)
                if ("1" == s[a].isDefaultFlag) {
                    i = s[a];
                    break
                }
        e.isEmpty(i) && (i = s[0]), this.setData({
            visitor: s,
            selectVisitor: i
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    toSelect: function() {
        this.selector.show()
    },
    doSelect: function(t) {
        this.setData({
            selectVisitor: this.data.visitor[t.detail.value],
            isBtn: !0
        })
    },
    _initSelector: function() {
        return e.isEmpty(this.selector) && (this.selector = e.selectComponent(this, "#selector")), e.isNotEmpty(this.selector)
    },
    beforeConfirm: (0, t.throttle)((function(t) {
        var s = this;
        i = t, this.setData({
            isBtn: !1
        }), e.showModal({
            showCancel: !0,
            content: "占号成功后,请在规定时间内及时支付,否则将自动取消占号",
            success: function(t) {
                t.confirm ? s.setData({
                    showTip: !0
                }) : s.setData({
                    isBtn: !0
                })
            }
        })
    }), 2e3),
    doNext: function() {
        this.setData({
            showTip: !1
        }), (0, t.authSubMessage)(i, "appointmentToday", this.doConfirm, this)
    },
    doConfirm: function(i) {
        var s = this,
            a = {
                detail: {
                    type: "当日挂号",
                    officeName: s.data.hids.deptname,
                    doctorName: s.data.hids.doctor,
                    serviceDate: s.data.hids.clinicdate,
                    hbTime: s.data.hids.timeflag,
                    doctorFee: s.data.hids.clinicfee,
                    selectVisitor: s.data.selectVisitor
                }
            };
        (0, t._request)({
            loading: !0,
            url: "/api/appointmentRecord/sameDayAppointment.json",
            data: {
                patientId: s.data.selectVisitor.clientId,
                scheduleId: s.data.scheduleId,
                visiDate: e.timestampToTime2(s.data.hids.visitDate),
                deptId: s.data.hids.deptId
            },
            method: "post",
            success: function(t) {
                if (0 == t.status) return s.setData({
                    appointmentRecord: t.data.appointmentRecord
                }), e.setStorage("regInfo", t.data), e.hideLoading(), void e.reLaunch("/pages/dtgh/result/result?recordId=" + t.data.appointmentRecord.recordId);
                if (-1 != t.status) {
                    if (-2 != t.status) return -3 == t.status ? void s.setData({
                        showTable: !0,
                        recordList: t.data,
                        notice: t.message
                    }) : void s.toptips.show({
                        text: "系统繁忙,请稍后再试"
                    });
                    s.toptips.show({
                        text: t.message
                    });
                    setTimeout((function() {
                        e.reLaunch("/pages/index/index?page=/pages/dtgh/ghjl/index")
                    }), 3e3)
                } else s.toptips.show({
                    text: t.message
                })
            },
            fail: function(t) {
                Object.assign(a, {
                    success: !1,
                    message: "系统繁忙，请稍后再试"
                })
            }
        })
    },
    toJump: function() {
        e.navigateTo("/pages/healthCard/index/index")
    },
    cancel: function() {
        this.setData({
            showTable: !1
        })
    }
});