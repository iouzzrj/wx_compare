
var t = require("../../../@babel/runtime/helpers/defineProperty"),
    e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
    a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
    s = require("../../../utils/api"),
    i = require("../../../utils/wxutil.js"),
    r = "";
Page({
    data: {
        imgBase: i.getImgBase(),
        statesList: [{
            title: "待支付",
            value: "0"
        }, {
            title: "待就诊",
            value: "1"
        }, {
            title: "已取消",
            value: "2"
        }, {
            title: "已退费",
            value: "3"
        }, {
            title: "已过期",
            value: "4"
        }, {
            title: "全部",
            value: "5"
        }],
        ok: !1,
        dataArr: [],
        visitor: {},
        selectVisitor: {},
        dataInit: !1,
        moreData: !0,
        currDateFormatStr: "",
        recordList: [],
        tempArr: [],
        numberCodeExpire: 9e5,
        selectTypeItem: "0",
        showTip: !1,
        showTip2: !1,
        _top: 180,
        isTop: 0,
        dactorHight: 0,
        tslx: 3,
        visitorSelf: {},
        endTime: "",
        startTime: "",
        page: 0,
        size: 2,
        totalPages: 1,
        isMore: !0,
        isLoading: !1,
        triggered: !0,
        isError: !1,
        errorMsg: "",
        isShow: "",
        businessStatus: "",
        visitDateEnd: "",
        visitDateStart: "",
        orderChange: !1
    },
    onLoad: function(t) {
        var e = i.getToday(),
            a = i.getBefday(7);
        this.setData({
            selectVisitor: t.selectVisitorStr && JSON.parse(t.selectVisitorStr) || {},
            startTime: a + " 00:00:00",
            endTime: e + " 23:59:59"
        })
    },
    onReady: function() {},
    _initSelector: function() {},
    onShow: function() {
        var t = (0, s.getGlobalRegistered)();
        if (this.setData({
                ok: t
            }), t) {
            i.setNavigationBarTitle("挂号记录");
            var e = (0, s.getGlobalCardInfo)(),
                a = this.data.selectVisitor;
            if (i.isEmpty(a))
                for (var r = 0; r < e.length; r++) "1" == e[r].isDefaultFlag && (a = e[r]), "1" == e[r].relationship && (this.data.visitorSelf = e[r]);
            this.setData({
                visitor: e,
                selectVisitor: a,
                visitorSelf: this.data.visitorSelf
            })
        } else this.setData({
            dataInit: !0
        })
    },
    getSelevtVisitor: function(t) {
        this.setData({
            selectVisitor: t.detail.selectVisitor,
            dataArr: []
        }), this.resetData(), this.doctorListFun(!0, !0)
    },
    onHide: function() {
        this._clearTimer()
    },
    onPageScroll: function(t) {
        var e = this.data._top;
        t.scrollTop >= e ? this.setData({
            isTop: 1
        }) : this.setData({
            isTop: 0,
            showOptions1: !1
        })
    },
    onShareAppMessage: function() {
        return i.getShareMessage()
    },
    getData: function(t) {
        console.log(t.detail.startTime, "父组件接收的开始时间"), console.log(t.detail.endTime, "父组件接收的结束时间");
        var e = t.detail.startTime,
            a = t.detail.endTime,
            s = t.detail.defaultStates,
            r = "",
            n = "";
        "1" == t.detail.defaultStates ? (r = i.getToday() + " 23:59:59", s = "1") : "4" == t.detail.defaultStates ? (n = i.getToday() + " 00:00:00", s = "1") : "5" == t.detail.defaultStates && (s = ""), this.setData({
            startTime: e + " 00:00:00",
            endTime: a + " 23:59:59",
            businessStatus: s,
            visitDateStart: r,
            visitDateEnd: n
        }, (function() {
            this.resetData(), this.doctorListFun(!0, !0)
        }))
    },
    showMoreData: function() {
        this.doctorListFun(!1, !1)
    },
    onRefresh: function() {
        this.resetData(), this.doctorListFun(!1, !0)
    },
    refresh: function() {
        this.resetData(), this.doctorListFun(!0, !0)
    },
    resetData: function() {
        this.setData({
            recordList: [],
            isShow: !1,
            isError: !1,
            isMore: !0,
            isLoading: !1,
            totalPages: 1,
            page: 0,
            triggered: !0
        })
    },
    doctorListFun: function() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = this,
            c = o.data.page,
            u = o.data.totalPages;
        c < u && (0, s._request)({
            url: "/api/appointmentRecord/getAppointmentRecord.json",
            data: {
                page: c,
                size: o.data.size,
                patientId: o.data.selectVisitor.clientId,
                startTime: o.data.startTime,
                endTime: o.data.endTime,
                businessStatus: o.data.businessStatus,
                visitDateStart: o.data.visitDateStart,
                visitDateEnd: o.data.visitDateEnd
            },
            loading: r,
            success: (t = a(e().mark((function t(a) {
                var s;
                return e().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (console.log(a), s = o.data.recordList, !(a.data.totalPages > 0)) {
                                t.next = 11;
                                break
                            }
                            if (o.groupDataArr2(a.data.content), !n || "0" != a.data.content[0].businessStatus) {
                                t.next = 8;
                                break
                            }
                            return t.next = 7, o.queryOrder(a.data.content[0].threeOrderNo);
                        case 7:
                            o.data.orderChange && (o.setData({
                                orderChange: !1
                            }), i.showModal({
                                content: "订单支付状态有更新，请刷新后重新操作",
                                success: function(t) {
                                    o.onRefresh()
                                }
                            }));
                        case 8:
                            o.setData({
                                numberCodeExpire: a.data.content[0].surplusTime,
                                recordList: n ? a.data.content : s.concat(a.data.content),
                                totalPages: a.data.totalPages,
                                page: c + 1,
                                isMore: c + 1 >= a.data.totalPages,
                                isLoading: c + 1 < a.data.totalPages,
                                isShow: !0,
                                isError: !1,
                                triggered: !1
                            }, (function() {
                                o.data.numberCodeExpire > 0 && (o._clearTimer(), o._startTimer())
                            })), t.next = 12;
                            break;
                        case 11:
                            o.setData({
                                recordList: [],
                                isLoading: !1,
                                isMore: !1,
                                isShow: !0,
                                isError: !1,
                                triggered: !1
                            });
                        case 12:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), function(e) {
                return t.apply(this, arguments)
            }),
            fail: function(t) {
                console.log(t, "errerrerr"), o.setData({
                    isShow: !0,
                    isError: !0,
                    errorMsg: t
                })
            },
            complete: function() {
                o.setData({
                    dataInit: !0
                })
            }
        })
    },
    invalidateData: function() {
        this.setData({
            isShow: !1,
            isMore: !0,
            isLoading: !1,
            totalPages: 1,
            page: 0,
            triggered: !0
        })
    },
    doCancel: (0, s.throttle)(function() {
        var r = a(e().mark((function r(n) {
            var o, c, u;
            return e().wrap((function(r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        o = this, c = n.currentTarget.dataset.index, u = "recordList[" + c + "].businessStatus", i.showModal({
                            showCancel: !0,
                            content: "一周内只能挂3个号,取消未支付订单将计入挂号总量限额,是否取消？",
                            success: function() {
                                var r = a(e().mark((function a(r) {
                                    var c, d;
                                    return e().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r.confirm) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return e.next = 4, o.queryOrder(n.target.dataset.info.threeOrderNo);
                                            case 4:
                                                if (!o.data.orderChange) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return o.setData({
                                                    orderChange: !1
                                                }), i.showModal({
                                                    content: "订单支付状态有更新，请刷新后重新操作",
                                                    success: function(t) {
                                                        o.onRefresh()
                                                    }
                                                }), e.abrupt("return");
                                            case 8:
                                                if ("0" == (d = n.target.dataset.info).recordType ? c = "/api/appointmentRecord/cancelYyAppointment.json" : "1" == d.recordType && (c = "/api/appointmentRecord/cancelAppointment.json"), c) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 12:
                                                (0, s._request)({
                                                    url: c,
                                                    data: {
                                                        recordId: d.recordId
                                                    },
                                                    success: function(e) {
                                                        0 == e.status ? (o.setData(t(t({}, u, "2"), "numberCodeExpire", -1)), i.showToast({
                                                            icon: "success",
                                                            title: "取消成功"
                                                        }), o.groupDataArr("0")) : i.showToast({
                                                            title: "取消失败，请稍后再试"
                                                        })
                                                    }
                                                });
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), a)
                                })));
                                return function(t) {
                                    return r.apply(this, arguments)
                                }
                            }()
                        });
                    case 4:
                    case "end":
                        return r.stop()
                }
            }), r, this)
        })));
        return function(t) {
            return r.apply(this, arguments)
        }
    }(), 2e3),
    queryOrder: function(t) {
        var e = this;
        return new Promise((function(a, i) {
            (0, s._request)({
                url: "/api/appointmentRecord/queryOrder.json",
                data: {
                    threeOrderNo: t
                },
                success: function(t) {
                    0 == t.status && ("SUCCESS" == t.data.trade_status && e.setData({
                        orderChange: !0
                    }))
                }
            }), a()
        })).then((function(t) {})).catch((function(t) {
            reject(t)
        }))
    },
    beforeCancelBooking: (0, s.throttle)((function(t) {
        var e = this;
        r = t, i.showModal({
            showCancel: !0,
            content: "确认取消吗？",
            success: function(t) {
                t.confirm && e.setData({
                    showTip: !0
                })
            }
        })
    }), 2e3),
    doNext: function() {
        this.setData({
            showTip: !1
        }), (0, s.authSubMessage)(r, "appointmentCancel", this.doCancelBooking, this)
    },
    doCancelBooking: (0, s.throttle)((function(e) {
        var a = this,
            i = "recordList[" + e.currentTarget.dataset.index + "].businessStatus";
        (0, s._request)({
            url: "/api/appointmentRecord/cancelBooking.json",
            data: {
                recordId: e.target.dataset.info.recordId
            },
            success: function(s) {
                0 == s.status ? (a.setData(t(t({}, i, "2"), "numberCodeExpire", -1)), a._cancelSuccess(e.target.dataset.info.recordId)) : a._cancelFail(s.message)
            }
        })
    }), 2e3),
    beforeGoOnPay: (0, s.throttle)((function(t) {
        this.payParam = t;
        var e = this;
        (0, s.needSubMessage)("appointmentToday", (function(t) {
            t ? e.setData({
                showTip2: !0
            }) : (0, s.authSubMessage)(e.payParam, "appointmentToday", e.goOnPay, e)
        }))
    }), 2e3),
    doNext2: function(t) {
        this.setData({
            showTip2: !1
        }), (0, s.authSubMessage)(this.payParam, "appointmentToday", this.goOnPay, this)
    },
    goOnPay: (0, s.throttle)((function(e) {
        var a = this,
            s = "recordList[" + e.currentTarget.dataset.index + "].businessStatus",
            r = e.target.dataset.info.payString,
            n = JSON.parse(r);
        wx.requestPayment({
            timeStamp: n.timeStamp,
            nonceStr: n.nonceStr,
            package: n.package,
            signType: n.signType,
            paySign: n.sign,
            success: function(i) {
                "requestPayment:ok" == i.errMsg && (a.setData(t(t({}, s, "1"), "numberCodeExpire", -1)), a._paySuccess(e.target.dataset.info.recordId))
            },
            fail: function(t) {
                i.showToast({
                    title: "用户取消支付，超时不支付将自动取消占号"
                })
            },
            complete: function() {}
        })
    }), 2e3),
    _startTimer: function() {
        if (!(this.data.numberCodeExpire > 0)) return this._clearTimer(), this.resetData(), void this.doctorListFun(!0, !0);
        this.setData({
            numberCodeExpire: this.data.numberCodeExpire - 1e3
        }), this.timer = setTimeout(function() {
            this._startTimer()
        }.bind(this), 1e3)
    },
    _clearTimer: function() {
        this.timer && (clearTimeout(this.timer), this.timer = void 0)
    },
    _paySuccess: function(t) {
        for (var e = this.data.recordList, a = 0; a < e.length; a++)
            if (e[a].recordId == t) {
                e[a].businessStatus = "1";
                break
            }
        this.setData({
            recordList: e
        }, (function() {
            i.hideLoading(), i.showToast({
                icon: "success",
                title: "支付成功"
            })
        }))
    },
    _cancelSuccess: function(t) {
        for (var e = this.data.recordList, a = 0; a < e.length; a++)
            if (e[a].recordId == t) {
                e[a].businessStatus = "3";
                break
            }
        this.setData({
            recordList: e
        }, (function() {
            i.hideLoading(), i.showToast({
                icon: "success",
                title: "取消成功"
            })
        }))
    },
    _cancelFail: function(t) {
        i.hideLoading(), i.showToast({
            title: t
        })
    },
    changeTypeItem: function(t) {
        var e = t.currentTarget.dataset.index;
        this.groupDataArr(e)
    },
    groupDataArr: function(t) {
        var e = t,
            a = [];
        if ("0" == e) a = i.searchByKey3(this.data.tempArr, "businessStatus", "0");
        else if ("1" == e) {
            a = i.searchByKey3(this.data.tempArr, "businessStatus", "1").filter((function(t) {
                return new Date(i.getToday().replace(/-/g, "/")).getTime() <= t.visitDate
            }))
        } else if ("2" == e) a = i.searchByKey3(this.data.tempArr, "businessStatus", "2");
        else if ("3" == e) a = i.searchByKey3(this.data.tempArr, "businessStatus", "3");
        else if ("4" == e) a = this.data.tempArr;
        else if ("5" == e) {
            var s;
            s = this.data.tempArr.filter((function(t) {
                return new Date(i.getToday().replace(/-/g, "/")).getTime() > t.visitDate
            })), a = i.searchByKey3(s, "businessStatus", "1")
        }
        this.setData({
            selectTypeItem: e,
            recordList: a
        })
    },
    groupDataArr2: function(t) {
        var e;
        e = i.searchByKey3(t, "businessStatus", "0");
        var a = 3;
        a = i.searchByKey3(t, "businessStatus", "1").length > 0 ? 2 : e.length > 0 ? 1 : 3, this.setData({
            tslx: a
        })
    },
    daohang: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.info.deptId,
            a = "pages/index?id=Dx4EVOZfd4&poi=" + e + "&appKey=KRzcpL6OH5";
        1 == t.currentTarget.dataset.info.dist && (a = "pages/index?id=QkNOhuFUkR&poi=" + e + "&appKey=KRzcpL6OH5"), i.navigateToMiniProgram("wx8735a8a39cf58b5e", a)
    }
});