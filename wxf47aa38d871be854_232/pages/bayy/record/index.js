
var t = require("../../../@babel/runtime/helpers/defineProperty"),
    a = require("../../../utils/http"),
    e = require("../../../utils/api"),
    o = require("../../../utils/wxutil");
Page({
    data: t(t(t({
        ok: !0,
        dataInit: !1,
        dataArr: [],
        dataList: [],
        pageNo: 0,
        pageSize: 10,
        moreData: !0,
        visitor: "",
        isTap: !0,
        selectVisitor: "",
        isShowMask: !1,
        isShowpup: !1,
        isMask: !1,
        isPup: !1,
        bottom: !1,
        triggered: !0
    }, "visitor", {}), "selectVisitor", {}), "visitorSelf", {}),
    onLoad: function(t) {
        var a = o.getStorage("contentInfo-WLGZ");
        console.log(a), o.isEmpty(a) ? this.getContentInfo("WLGZ") : this.setData({
            contentInfo: a
        }), this.setData({
            startDate: o.getToday(),
            endDate: o.getBefday(-1)
        })
    },
    onReady: function() {},
    onShow: function() {
        var t = (0, e.getGlobalRegistered)();
        if (this.setData({
                ok: t
            }), t) {
            var a = (0, e.getGlobalCardInfo)(),
                s = this.data.selectVisitor;
            if (o.isEmpty(s))
                for (var i = 0; i < a.length; i++) "1" == a[i].isDefaultFlag && (s = a[i]), "1" == a[i].relationship && (this.data.visitorSelf = a[i]);
            this.setData({
                visitor: a,
                selectVisitor: s,
                visitorSelf: this.data.visitorSelf,
                dataInit: !0
            })
        }
        console.log(this.data.ok)
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function(t) {
        wx.stopPullDownRefresh(), this.setData({
            pageNo: 0,
            dataList: []
        }), this._loadRecord(this.data.selectVisitor)
    },
    onReachBottom: function() {},
    onRefresh: function() {
        this.resetData(), this._loadRecord(this.data.selectVisitor)
    },
    resetData: function() {
        this.setData({
            dataList: [],
            isShow: !1,
            isError: !1,
            isMore: !0,
            isLoading: !1,
            totalPages: 1,
            pageNo: 0,
            triggered: !0
        })
    },
    getData: function(t) {
        console.log(t.detail.startTime, "父组件接收的开始时间"), console.log(t.detail.endTime, "父组件接收的结束时间"), this.setData({
            startDate: t.detail.startTime,
            endDate: t.detail.endTime,
            pageNo: 0,
            dataList: []
        }, (function() {
            this._loadRecord(this.data.selectVisitor)
        }))
    },
    getSelevtVisitor: function(t) {
        this.setData({
            selectVisitor: t.detail.selectVisitor,
            pageNo: 0,
            dataList: []
        }), this._loadRecord(t.detail.selectVisitor)
    },
    doCheck: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.item.record.approveOpinion.split("|");
        console.log(a), this.setData({
            isMask: !0,
            isPup: !0,
            content: a
        })
    },
    _loadRecord: function(t) {
        var a = this;
        this._loadPageRecord(t, this.data.pageNo, this.data.pageSize, (function(t) {
            if (o.isNotEmpty(t)) {
                for (var e = [], s = 0; s < a.data.dataList.length; s++) {
                    var i = a.data.dataList[s];
                    i.currentPage != a.data.pageNo && e.push(i)
                }
                a.setData({
                    dataList: t
                })
            }
            var r = t.length == a.data.pageSize,
                n = a.data.pageNo;
            r && n++, a.setData({
                pageNo: n,
                moreData: r
            })
        }))
    },
    _loadPageRecord: function(t, e, o, s) {
        var i = this;
        console.log(t);
        var r = {
            startDate: i.data.startDate,
            endDate: i.data.endDate,
            clientId: t.clientId,
            page: e,
            limit: o
        };
        console.log(r), (0, a.queryMedicalRecordPage)(!0, r).then((function(t) {
            if (console.log(t), -1 == t.status) return i.setData({
                isShow: !0,
                isError: !1,
                dataArr: [],
                dataInit: !0
            }), void s([]);
            var a = t.data;
            i.setData({
                isShow: !0,
                isError: !1,
                dataArr: a,
                dataInit: !0
            }), s(a)
        })).catch((function(t) {
            i.setData({
                isShow: !0,
                isError: !0,
                errorMsg: t,
                dataArr: [],
                dataInit: !0
            }), s([])
        }))
    },
    doPayBefore: o.throttle((function(t) {
        this.setData({
            isShowMask: !0,
            isShowpup: !0,
            totalPrice: t.currentTarget.dataset.price,
            recordId: t.currentTarget.dataset.recordid,
            item: t.currentTarget.dataset.item
        })
    })),
    doPay: function(t) {
        wx.showLoading();
        var e = this,
            s = {
                totalPrice: e.data.totalPrice,
                recordId: e.data.recordId,
                selectVisitor: e.data.selectVisitor
            };
        console.log(s), (0, a.createOrder)(!0, s).then((function(t) {
            console.log(t), wx.hideLoading();
            var a = t.data;
            0 != t.status ? (e.setData({
                isTap: !0
            }), o._showToast({
                title: t.message
            })) : wx.requestPayment({
                timeStamp: a.timeStamp,
                nonceStr: a.nonceStr,
                package: a.package,
                signType: a.signType,
                paySign: a.sign,
                success: function(t) {
                    console.log(t), "requestPayment:ok" == t.errMsg && (e.setData({
                        isTap: !0,
                        pageNo: 0,
                        dataList: []
                    }), o._showToast({
                        title: "支付成功!"
                    }), e._loadRecord(e.data.selectVisitor))
                },
                fail: function(t) {
                    console.log(t), e.setData({
                        isTap: !0
                    }), o._showToast({
                        title: "用户取消支付!"
                    })
                }
            })
        })).catch((function(t) {
            wx.hideLoading(), e.setData({
                isTap: !0
            }), o._showToast({
                title: "系统异常，请稍后再试！"
            })
        }))
    },
    doCancel: o.throttle((function(t) {
        console.log(t);
        var e = this,
            s = t.currentTarget.dataset.recordid;
        e.data.isTap && (e.setData({
            isTap: !1
        }), wx.showModal({
            showCancel: !0,
            content: "确定要取消预约吗？",
            success: function(t) {
                if (console.log(t), t.cancel) e.setData({
                    isTap: !0
                });
                else {
                    var i = {
                        recordId: s
                    };
                    console.log(s), (0, a.cancelRecord)(!0, i).then((function(t) {
                        console.log(t), e.setData({
                            pageNo: 0,
                            dataList: [],
                            isTap: !0
                        }), -1 != t.status ? e._loadRecord(e.data.selectVisitor) : o._showToast({
                            title: t.message
                        })
                    })).catch((function(t) {
                        o._showToast({
                            title: "系统异常，请重新再试!"
                        }), e.setData({
                            isTap: !0
                        })
                    }))
                }
            }
        }))
    })),
    queryOrderTrajectory: o.throttle((function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.item.record.hisOrderNo;
        o.navigateTo("/pages/bayy/logistics/index?orderId=" + a)
    })),
    getContentInfo: function(t) {
        o.showLoading();
        var a = this;
        (0, e._request)({
            loading: !1,
            url: "/api/hosAdvise/getHisAdviseList.json",
            method: "post",
            data: {
                typeId: t
            },
            success: function(e) {
                if (console.log(e), o.hideLoading(), 0 == e.status) {
                    var s = e.data || [];
                    a.setData({
                        contentInfo: s[0]
                    }), o.setStorage("contentInfo-" + t, s[0], 864e5)
                }
            }
        })
    },
    hidepup: function(t) {
        var a = this;
        a.setData({
            isShowMask: !1,
            isShowpup: !1
        }), wx.showModal({
            title: "温馨提示",
            content: "是否确认支付!",
            success: function(o) {
                o.cancel ? console.log("用户点击取消") : a.data.isTap && (a.setData({
                    isTap: !1
                }), "2" == a.data.item.takeType ? (0, e.authSubMessage)(t, "medicalTakeCode", a.doPay, a) : a.doPay())
            }
        })
    },
    pullUp: function(t) {
        this.data.dataArr.length < this.data.pageSize ? this.setData({
            bottom: !0
        }) : this._loadRecord(this.data.selectVisitor)
    },
    hide: function(t) {
        this.setData({
            isMask: !1,
            isPup: !1
        })
    },
    reEdit: function(t) {
        var e = this;
        console.log(t);
        var s = t.currentTarget.dataset.item,
            i = {
                bayyRecord: s.record,
                bayyInfo: s.info
            };
        (0, a.repeatEditMedical)(!0, i).then((function(t) {
            if (console.log(t), 0 == t.status) {
                var a = t.data;
                return Object.assign(a, {
                    selectVisitor: e.data.selectVisitor
                }), console.log(a), void o.navigateTo("/pages/bayy/index/index?params=" + JSON.stringify(a))
            }
            o._showToast({
                title: "查询病案记录失败！"
            })
        })).catch((function(t) {
            o._showToast({
                title: "系统异常，请重新再试!"
            })
        }))
    }
});