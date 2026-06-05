
var t = require("../../../@babel/runtime/helpers/defineProperty"),
    e = require("../../../utils/api"),
    a = require("../../../utils/wxutil.js");
Page({
    data: t(t(t(t(t(t(t({
        ok: !1,
        dataArr: [],
        visitor: {},
        selectVisitor: {},
        dataInit: !1
    }, "dataArr", []), "page", 0), "size", 10), "moreData", !0), "currDateFormatStr", ""), "recordList", []), "numberCodeExpire", 0),
    onLoad: function(t) {
        var e = a.getToday();
        this.setData({
            selectVisitor: t.selectVisitorStr && JSON.parse(t.selectVisitorStr) || {},
            startTime: e + " 00:00:00",
            endTime: e + " 23:59:59"
        })
    },
    onReady: function() {},
    onShow: function() {
        var t = (0, e.getGlobalRegistered)();
        if (this.setData({
                ok: t
            }), t) {
            a.setNavigationBarTitle("爽约记录");
            var i = (0, e.getGlobalCardInfo)(),
                o = this.data.selectVisitor;
            if (a.isEmpty(o))
                for (var r = 0; r < i.length; r++)
                    if ("1" == i[r].isDefaultFlag) {
                        o = i[r];
                        break
                    }
            a.isEmpty(o) && (o = i[0]), this.setData({
                visitor: i,
                selectVisitor: o
            })
        } else this.setData({
            dataInit: !0
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return a.getShareMessage()
    },
    doctorListFun: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = this,
            o = i.data.page,
            r = i.data.totalPages;
        o < r && (0, e._request)({
            url: "/api/breakAppointmentRecord/getBreakAppointmentRecord.json",
            data: {
                idCardNo: i.data.selectVisitor.idCardNo,
                startTime: i.data.startTime,
                endTime: i.data.endTime,
                page: i.data.page,
                size: i.data.size
            },
            loading: t,
            success: function(t) {
                console.log(t);
                var e = i.data.recordList;
                t.data.totalPages > 0 ? i.setData({
                    recordList: a ? t.data.content : e.concat(t.data.content),
                    totalPages: t.data.totalPages,
                    page: o + 1,
                    isMore: o + 1 >= t.data.totalPages,
                    isLoading: o + 1 < t.data.totalPages,
                    isShow: !0,
                    isError: !1,
                    triggered: !1
                }) : i.setData({
                    tempArr: [],
                    isLoading: !1,
                    isMore: !0,
                    isShow: !0,
                    isError: !1,
                    triggered: !1
                })
            },
            fail: function(t) {
                console.log(t, "errerrerr"), i.setData({
                    isShow: !0,
                    isError: !0,
                    errorMsg: t
                })
            },
            complete: function() {
                i.setData({
                    dataInit: !0
                })
            }
        })
    },
    getSelevtVisitor: function(t) {
        this.setData({
            selectVisitor: t.detail.selectVisitor,
            dataArr: []
        }), this.resetData(), this.doctorListFun(!0)
    },
    getData: function(t) {
        console.log(t.detail.startTime, "父组件接收的开始时间"), console.log(t.detail.endTime, "父组件接收的结束时间"), this.setData({
            startTime: t.detail.startTime + " 00:00:00",
            endTime: t.detail.endTime + " 23:59:59"
        }, (function() {
            this.doctorListFun(!0, !0)
        }))
    },
    onRefresh: function() {
        this.resetData(), this.doctorListFun(!1, !0)
    },
    resetData: function() {
        this.setData({
            isShow: !1,
            isError: !1,
            isMore: !0,
            isLoading: !1,
            totalPages: 1,
            page: 0,
            triggered: !0
        })
    },
    invalidateData: function() {
        this.setData({
            moreData: !0,
            loading: !1,
            page: 0,
            recordList: []
        })
    }
});