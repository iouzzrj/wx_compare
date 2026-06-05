
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js");
Page({
    data: {
        doctorDetailStatus: 1,
        doctorAttentionStatus: 0,
        dataInit: !1,
        displayHids: [],
        paramObj: {},
        paramObjStr: "",
        numsource: [],
        scheduleId: "",
        tapIndex: "",
        showTable: !1,
        notice: "",
        recordList: [],
        otherAreaNum: []
    },
    onLoad: function(t) {
        console.log("options:", t);
        var e = decodeURIComponent(t.tapIndex),
            o = decodeURIComponent(t.deptObj),
            a = decodeURIComponent(t.doctInfo),
            n = decodeURIComponent(t.time),
            s = t.schedule && JSON.parse(decodeURIComponent(t.schedule)) || {},
            i = t.selectVisitor && JSON.parse(decodeURIComponent(t.selectVisitor)) || {};
        this.setData({
            tapIndex: e,
            deptObj: JSON.parse(o),
            paramObj: s,
            paramObjStr: JSON.stringify(s),
            doctInfo: JSON.parse(a),
            time: n,
            selectVisitor: i
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        var o = this;
        (0, t._request)({
            url: "/api/appointmentInfo/getYyScheduleInfo.json",
            data: {
                tapIndex: o.data.tapIndex,
                deptId: o.data.deptObj.deptCode,
                doctId: o.data.doctInfo.doctId,
                time: o.data.time
            },
            method: "post",
            success: function(t) {
                var a = t.data;
                e.isEmpty(a) || o.setData({
                    numsource: a,
                    deptName: a[0].deptName
                })
            },
            complete: function() {
                o.setData({
                    dataInit: !0
                })
            }
        }), (0, t._request)({
            url: "/api/appointmentInfo/queryYyOtherAreaNumber.json",
            data: {
                tapIndex: o.data.tapIndex,
                doctId: o.data.doctInfo.doctId
            },
            method: "post",
            success: function(t) {
                console.log("该医生其他院区号源推荐res:", t), 0 != t.status || o.setData({
                    otherAreaNum: t.data
                })
            },
            complete: function() {}
        })
    },
    goOtherAreaNumber: function(t) {
        console.log(t);
        var o = t.currentTarget.dataset.item,
            a = {
                deptCode: o.majorDetailId,
                deptName: o.deptName
            };
        e.redirectTo("/pages/yygh/xzhy/index?schedule=" + encodeURIComponent(o.scheduleId) + "&address=&deptObj=" + encodeURIComponent(JSON.stringify(a)) + "&doctInfo=" + encodeURIComponent(JSON.stringify(o)) + "&time=" + encodeURIComponent(e.toDate(o.visitDate / 1e3, !0)) + "&selectVisitor=" + encodeURIComponent(JSON.stringify(this.data.selectVisitor)) + "&tapIndex=" + encodeURIComponent(o.dist))
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    changeDetail: function() {
        this.setData({
            doctorDetailStatus: "0" == this.data.doctorDetailStatus ? "1" : "0"
        })
    },
    changeAttention: function() {
        var t = "0" == this.data.doctorAttentionStatus ? "1" : "0";
        this.setData({
            doctorAttentionStatus: t
        })
    },
    changeTime: function(t) {
        var e = t.currentTarget.dataset.id;
        this.setData({
            selectTimeItem: e
        })
    },
    doConfirm: (0, t.throttle)((function(o) {
        var a = this,
            n = o.currentTarget.dataset.hids;
        if (!(n.numbers <= 0)) {
            var s = "您选择的就诊人为" + a.data.selectVisitor.clientName + "，请确认无误后进行下一步操作！"; - 1 != a.data.deptName.indexOf("特需") && (s = "您选择的就诊人为" + a.data.selectVisitor.clientName + "，所挂是特需费用较高，请确认无误后进行下一步操作！"), wx.showModal({
                title: "温馨提示",
                content: s,
                showCancel: !0,
                cancelText: "取消",
                cancelColor: "#404040",
                confirmText: "确定",
                confirmColor: "#14c79d",
                success: function(o) {
                    if (o.confirm) {
                        var s = {
                            detail: {
                                type: "预约挂号",
                                officeName: n.deptname,
                                doctorName: n.doctor,
                                serviceDate: n.clinicdate,
                                hbTime: n.timeflag,
                                doctorFee: n.clinicfee,
                                selectVisitor: a.data.selectVisitor
                            }
                        };
                        (0, t._request)({
                            loading: !0,
                            url: "/api/appointmentRecord/YySameDayAppointment.json",
                            data: {
                                patientId: a.data.selectVisitor.clientId,
                                scheduleId: n.scheduleId,
                                visitDate: e.timestampToTime2(n.visitDate),
                                deptId: n.deptId,
                                sguId: n.sguID,
                                dist: a.data.tapIndex
                            },
                            method: "post",
                            success: function(t) {
                                if (0 == t.status) return a.setData({
                                    appointmentRecord: t.data.appointmentRecord
                                }), e.setStorage("regInfo", t.data), e.hideLoading(), void e.reLaunch("/pages/yygh/result/result?recordId=" + t.data.appointmentRecord.recordId + "&selectVisitor=" + JSON.stringify(a.data.selectVisitor));
                                if (-1 != t.status) {
                                    if (-2 != t.status) return -3 == t.status ? void a.setData({
                                        showTable: !0,
                                        recordList: t.data,
                                        notice: t.message
                                    }) : void a.toptips.show({
                                        text: "系统繁忙,请稍后再试"
                                    });
                                    a.toptips.show({
                                        text: t.message
                                    });
                                    setTimeout((function() {
                                        e.reLaunch("/pages/index/index?page=/pages/dtgh/ghjl/index")
                                    }), 3e3)
                                } else a.toptips.show({
                                    text: t.message
                                })
                            },
                            fail: function(t) {
                                Object.assign(s, {
                                    success: !1,
                                    message: "系统繁忙，请稍后再试"
                                })
                            }
                        })
                    }
                },
                fail: function() {}
            })
        }
    }), 2e3),
    cancel: function() {
        this.setData({
            showTable: !1
        })
    }
});