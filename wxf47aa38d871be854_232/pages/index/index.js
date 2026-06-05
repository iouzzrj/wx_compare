
var t = require("../../utils/api.js"),
    e = require("../../utils/wxutil.js"),
    a = getApp();
Page({
    data: {
        redirectPage: "",
        showNotice: !1,
        contentInfo: [],
        contentInfoList: [],
        check: !1,
        popupModel: "",
        flag: "1",
        campus: "0",
        page: "",
        miniVersion: "",
        isShow: !1,
        subscribeWeb: !1,
        showAtt: !0,
        isRegistered: !1,
        ttarr: [],
        ghName: "明日挂号"
    },
    onLoad: function(i) {
        var o = this,
            n = i.page,
            s = a.globalData.lastWeekData;
        this.setData({
            miniVersion: e.getMiniGrogVersion(),
            isRegistered: (0, t.getGlobalRegistered)(),
            lastWeekData: s
        }, (function() {
            console.log(o.data.isRegistered, "是否认证")
        })), e.isNotEmpty(n) && this.setData({
            redirectPage: decodeURIComponent(n)
        });
        var c = a.globalData.noticeList || [];
        if (e.isNotEmpty(c)) {
            for (var r = {}, d = 0; d < c.length; d++) {
                var g = c[d];
                if ("1" == g.force_remind) {
                    r = g;
                    break
                }
            }
            if (e.isNotEmpty(r)) {
                var p = 60 * Number(r.remind_period) * 1e3 || 0;
                e.justRun("notice-" + r.content_id, p, (function() {
                    e.isNotEmpty(r.theme_picture) ? (e.hideTabBar(), o.setData({
                        showNotice: !0,
                        contentInfo: r
                    })) : e.showModal({
                        title: r.info_title,
                        content: r.info_desc,
                        confirmText: "立即查看",
                        cancelText: "稍后再看",
                        showCancel: !0,
                        success: function(t) {
                            t.confirm && (e.isNotEmpty(r.external_link) ? e.navigateToWebPage(r.external_link) : e.navigateTo("/pages/ggxq/index?contentId=" + r.content_id))
                        }
                    })
                }))
            }
            this.setData({
                contentInfoList: e.chunk(c, 2)
            });
            var h = [];
            this.data.contentInfoList.forEach((function(t) {
                t.forEach((function(t) {
                    h.push(t)
                }))
            })), this.setData({
                ttarr: h
            }), console.log(this.data.contentInfoList, "contentInfoListcontentInfoListcontentInfoList")
        }
        var u = this.checkAuditTime("00:00", "05:00");
        this.setData({
            ghName: u ? "当日挂号" : "明日挂号"
        })
    },
    closeAtt: function() {
        this.setData({
            showAtt: !1
        })
    },
    goGzh: function() {
        wx.navigateTo({
            url: "/pages/gzgzh/index"
        })
    },
    goAsk: function() {
        this.data.isRegistered ? e.navigateTo("/online-inquiry/pages/home/index") : e.navigateTo("/pages/jzr/jzrrz/index")
    },
    onReady: function() {
        this._adjustContact();
        var t = this.data.redirectPage;
        e.isNotEmpty(t) && e.navigateTo(t)
    },
    onShow: function() {
        var e = (new Date).getHours();
        console.log(a.globalData.subscribeWeb, "subscribeWeb"), this.setData({
            flag: e < 5 ? "1" : "2",
            subscribeWeb: a.globalData.subscribeWeb,
            showAtt: !0,
            isRegistered: (0, t.getGlobalRegistered)()
        })
    },
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    _adjustContact: function() {},
    toMedicalCert: function() {
        e.navigateToMiniProgram("wx7ec43a6a6c80544d")
    },
    toNotice: function(t) {
        var a = this;
        a.setData({
            showNotice: !1
        }, (function() {
            e.showTabBar(), a._adjustContact();
            var i = t.currentTarget.dataset.id,
                o = t.currentTarget.dataset.link;
            e.isNotEmpty(o) ? e.navigateToWebPage(o) : e.navigateTo("/pages/ggxq/index?contentId=" + i)
        }))
    },
    hideNotice: function(t) {
        var a = this;
        a.setData({
            showNotice: !1
        }, (function() {
            e.showTabBar(), a._adjustContact()
        }))
    },
    noMove: function(t) {},
    toGgList: function() {
        e.navigateTo("/pages/yygg/index")
    },
    doJumpDTgh: function() {
        this.setData({
            popupModel: "dtgh"
        }), this.data.isRegistered ? e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel)) : e.navigateTo("/pages/jzr/jzrrz/index")
    },
    doJumpZJjs: function() {
        this.setData({
            popupModel: "zjjs"
        }), e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel))
    },
    doJumpTSks: function() {
        this.setData({
            popupModel: "tsks"
        }), e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel))
    },
    doJump: function() {
        this.setData({
            popupModel: "yygh"
        }), console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel)) : e.navigateTo("/pages/jzr/jzrrz/index")
    },
    doNavigate: function() {
        this.setData({
            popupModel: "lydh"
        }), e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel))
    },
    toWeb: function() {
        e.navigateTo("/pages/yygw/index")
    },
    toFydc: function() {
        e.navigateTo("/pages/fydc/xxxq/index")
    },
    doTouchStart: function(t) {
        var e = t.currentTarget || {},
            a = t.touches[0] || {};
        this.setData({
            relativelyX: a.clientX - e.offsetLeft,
            relativelyY: a.clientY - e.offsetTop
        })
    },
    doTouchMove: function(t) {
        var e = t.touches[0] || {},
            a = e.clientX - this.data.relativelyX;
        a < 0 && (a = 0), a + this.data.contactWidth > this.data.winWidth && (a = this.data.winWidth - this.data.contactWidth);
        var i = e.clientY - this.data.relativelyY;
        i < 0 && (i = 0), i + this.data.contactHeight > this.data.winHeight && (i = this.data.winHeight - this.data.contactHeight), this.setData({
            leftDistance: a,
            topDistance: i
        })
    },
    showActionSheet: function(t) {
        function e(e) {
            return t.apply(this, arguments)
        }
        return e.toString = function() {
            return t.toString()
        }, e
    }((function(t) {
        if (t.itemList.length > 6) {
            var e = {};
            for (var a in t) e[a] = t[a];
            e.page = 1, e.itemListBak = t.itemList, e.itemList = [];
            var i = t.success;
            return e.success = function(t) {
                5 == t.tapIndex ? (e.page++, showActionSheet(e)) : (t.tapIndex = t.tapIndex + 5 * (e.page - 1), i(t))
            }, void showActionSheet(e)
        }
        if (t.page) {
            var o = t.page,
                n = t.itemListBak,
                s = [];
            for (a = 5 * (o - 1); a < 5 * o && a < n.length; a++) s.push(n[a]);
            5 * o < n.length && s.push("下一页"), t.itemList = s, wx.showActionSheet(t)
        } else wx.showActionSheet(t)
    })),
    doBayy: function() {
        wx.showToast({
            title: "暂未开通!",
            icon: "none",
            mask: !0
        })
    },
    hidepup: function() {
        e.navigateTo("/pages/bayy/index/index")
    },
    checkAuditTime: function(t, e) {
        var a = new Date,
            i = "".concat(a.getFullYear(), "-").concat(a.getMonth() + 1, "-").concat(a.getDate(), " "),
            o = new Date(i + t).getTime(),
            n = new Date(i + e).getTime(),
            s = a.getTime(),
            c = o > n;
        if (c) {
            var r = [n, o];
            o = r[0], n = r[1]
        }
        return s > o && s < n ? !c : !!c
    },
    toYygh: function(t) {
        var a = t.currentTarget.dataset.code,
            i = t.currentTarget.dataset.name;
        "6" == a ? e.showModal({
            confirmText: "已知晓",
            content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n正畸门诊（2层）价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
            success: function(t) {
                t.cancel || e.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + a + "&showPopup=false&area=" + i)
            }
        }) : "7" == a ? e.showModal({
            confirmText: "已知晓",
            content: "天竺门诊部费用标准与总院一致，暂未开通医保，均为自费；暂不提供住院服务；天竺门诊电话预约可提前一周：010-81418000",
            success: function(t) {
                t.cancel || e.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + a + "&showPopup=false&area=" + i)
            }
        }) : "100" == a ? e.navigateToMiniProgram("wxdaca93aa687cc531", "/pages/welcome/index") : e.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + a + "&showPopup=false&area=" + i)
    },
    toCzxx: function() {
        this.setData({
            popupModel: "czxx"
        }), e.navigateTo("/pages/select/index?popupModel=".concat(this.data.popupModel))
    },
    toYhcx: function() {
        e.navigateTo("/integrated-query/pages/yhcx/index")
    }
});