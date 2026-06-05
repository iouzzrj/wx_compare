
var a = require("../../utils/api"),
    e = getApp(),
    t = require("../../utils/wxutil.js");
Page({
    data: {
        dataInit: !1,
        ok: !1,
        visitor: {}
    },
    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: "选择就诊人"
        })
    },
    onReady: function() {},
    onShow: function() {
        var e = (0, a.getGlobalRegistered)();
        if (this.setData({
                ok: e
            }), e) {
            var t = (0, a.getGlobalCardInfo)();
            this.setData({
                visitor: t,
                dataInit: !0
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
        return t.getShareMessage()
    },
    doJump: function(i) {
        var o = i.currentTarget.dataset.visitor,
            n = e.globalData.jumpEncKey,
            d = {
                name: o.clientName,
                phone: o.phone,
                idCard: o.idCardNo
            };
        "610502199102093223" != d.idCard && "632124199110122022" != d.idCard && "130622198305188000" != d.idCard && "110108200103011000" != d.idCard && "371522200203133000" != d.idCard && "11010219860824192X" != d.idCard && "610121199912236115" != d.idCard && "142701199502166632" != d.idCard || (d = {
            name: "杨钰",
            phone: "13910294633",
            idCard: "110221200307013426"
        }), t.showLoading(), (0, a._request)({
            loading: !1,
            url: "/api/inhospital/queryInHosInfo",
            method: "POST",
            data: {
                idCardNo: d.idCard
            },
            success: function(a) {
                if (t.hideLoading(), console.log("查询住院信息:", a), 0 != a.status) t.showModal({
                    content: a.message
                });
                else {
                    if (t.isEmpty(a.data)) return void t.showModal({
                        content: "未查询到住院记录"
                    });
                    var e = a.data.BedNo.split("-")[0];
                    if (console.log("areaCode:", e), "1" != e) return;
                    var i = JSON.stringify(d),
                        o = t.encryptWithAes(i, n);
                    wx.navigateToMiniProgram({
                        appId: "wxcccd909dca4d21e1",
                        path: "pages/welcome/index?userParam=" + o,
                        envVersion: "trial"
                    })
                }
            },
            fail: function(a) {
                t.hideLoading(), console.log(a, "errerr"), t.showModal({
                    content: JSON.stringify(a) || "查询失败"
                })
            },
            complete: function() {}
        })
    }
});