
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
        tapIndex: ""
    },
    onLoad: function(t) {
        var e = decodeURIComponent(t.tapIndex),
            a = decodeURIComponent(t.deptObj),
            o = decodeURIComponent(t.doctInfo),
            n = t.selectVisitor && JSON.parse(decodeURIComponent(t.selectVisitor)) || {},
            s = t.schedule && JSON.parse(decodeURIComponent(t.schedule)) || {};
        this.setData({
            tapIndex: e,
            deptObj: JSON.parse(a),
            paramObj: s,
            paramObjStr: JSON.stringify(s),
            doctInfo: JSON.parse(o),
            selectVisitor: n
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {
        var a = this;
        (0, t._request)({
            url: "/api/appointmentInfo/getScheduleInfo.json",
            data: {
                tapIndex: a.data.tapIndex,
                deptId: a.data.deptObj.deptCode,
                doctId: a.data.doctInfo.doctId
            },
            method: "post",
            success: function(t) {
                var o = t.data;
                e.isEmpty(o) || a.setData({
                    numsource: o,
                    deptName: o[0].deptName
                })
            },
            complete: function() {
                a.setData({
                    dataInit: !0
                })
            }
        }), (0, t._request)({
            url: "/api/appointmentInfo/queryOtherAreaNumber.json",
            data: {
                tapIndex: a.data.tapIndex,
                doctId: a.data.doctInfo.doctId
            },
            method: "post",
            success: function(t) {
                console.log("该医生其他院区号源推荐res:", t), 0 != t.status || a.setData({
                    otherAreaNum: t.data
                })
            },
            complete: function() {}
        })
    },
    goOtherAreaNumber: function(t) {
        var a = t.currentTarget.dataset.item,
            o = {
                deptCode: a.majorDetailId,
                deptName: a.deptName
            };
        e.redirectTo("/pages/dtgh/xzhy/index?&address=&deptObj=" + encodeURIComponent(JSON.stringify(o)) + "&doctInfo=" + encodeURIComponent(JSON.stringify(a)) + "&selectVisitor=" + encodeURIComponent(JSON.stringify(this.data.selectVisitor)) + "&tapIndex=" + encodeURIComponent(a.dist))
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
    doSelect: function(t) {
        var a = t.currentTarget.dataset.hids,
            o = t.currentTarget.dataset.scheduleId;
        e.navigateTo("/pages/dtgh/xxqr/index?scheduleId=" + o + "&hids=" + JSON.stringify(a))
    },
    doConfirm: (0, t.throttle)((function(a) {
        var o = this,
            n = a.currentTarget.dataset.hids;
        if (!(n.numbers <= 0)) {
            var s = "您选择的就诊人为" + o.data.selectVisitor.clientName + "，请确认无误后进行下一步操作！"; - 1 != o.data.deptName.indexOf("特需") && (s = "您选择的就诊人为" + o.data.selectVisitor.clientName + "，所挂是特需费用较高，请确认无误后进行下一步操作！"), wx.showModal({
                title: "温馨提示",
                content: s,
                showCancel: !0,
                cancelText: "取消",
                cancelColor: "#404040",
                confirmText: "确定",
                confirmColor: "#14c79d",
                success: function(a) {
                    if (a.confirm) {
                        var s = {
                            detail: {
                                type: "当日挂号",
                                officeName: n.deptname,
                                doctorName: n.doctor,
                                serviceDate: n.clinicdate,
                                hbTime: n.timeflag,
                                doctorFee: n.clinicfee,
                                selectVisitor: o.data.selectVisitor
                            }
                        };
                        (0, t._request)({
                            loading: !0,
                            url: "/api/appointmentRecord/sameDayAppointment.json",
                            data: {
                                patientId: o.data.selectVisitor.clientId,
                                scheduleId: n.scheduleId,
                                visitDate: e.timestampToTime2(n.visitDate),
                                deptId: n.deptId,
                                sguId: n.sguID,
                                dist: o.data.tapIndex
                            },
                            method: "post",
                            success: function(t) {
                                if (0 == t.status) return o.setData({
                                    appointmentRecord: t.data.appointmentRecord
                                }), e.setStorage("regInfo", t.data), e.hideLoading(), void e.reLaunch("/pages/dtgh/result/result?recordId=" + t.data.appointmentRecord.recordId + "&selectVisitor=" + JSON.stringify(o.data.selectVisitor));
                                if (-1 != t.status) {
                                    if (-2 != t.status) return -3 == t.status ? void o.setData({
                                        showTable: !0,
                                        recordList: t.data,
                                        notice: t.message
                                    }) : void o.toptips.show({
                                        text: "系统繁忙,请稍后再试"
                                    });
                                    o.toptips.show({
                                        text: t.message
                                    });
                                    setTimeout((function() {
                                        e.reLaunch("/pages/index/index?page=/pages/dtgh/ghjl/index")
                                    }), 3e3)
                                } else o.toptips.show({
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
                }
            })
        }
    }), 2e3)
});