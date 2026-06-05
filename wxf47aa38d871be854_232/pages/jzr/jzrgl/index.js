
var t = require("../../../utils/api"),
    n = require("../../../utils/wxutil.js");
Page({
    data: {
        bindLimit: 3,
        dataInit: !1,
        ok: !1,
        patientInfoCardGroup: [],
        visitor: {},
        dataType: 1
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var n = (0, t.getGlobalRegistered)();
        if (this.setData({
                ok: n
            }), n) {
            var a = (0, t.getGlobalCardInfo)();
            this.setData({
                visitor: a,
                dataInit: !0
            }), console.log(a)
        } else this.setData({
            dataInit: !0
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return n.getShareMessage()
    },
    toAuth: function() {
        n.navigateTo("/pages/jzr/jzrrz/index")
    },
    doAdd: function() {
        n.navigateTo("/pages/jzr/tjjzr/index")
    },
    doUnbind: function(a) {
        var e = this;
        n.showModal({
            showCancel: !0,
            content: "确定要解绑此就诊人吗？",
            success: function(o) {
                o.confirm && (n.showLoading(), (0, t.unbindPatientInfo)({
                    clientId: a.currentTarget.dataset.id
                }, (function(t) {
                    0 == t.status ? e._opSuccess() : e._opFail(t.message || "解绑就诊人失败，请稍后再试")
                }), (function(t) {
                    e._opFail(t.errMsg || "解绑就诊人失败，请稍后再试")
                })))
            }
        })
    },
    setDefault: function(a) {
        var e = this;
        n.showLoading(), (0, t.setDefaultPatientInfo)({
            clientId: a.currentTarget.dataset.id
        }, (function(t) {
            0 == t.status ? e._opSuccess() : e._opFail(t.message || "设置默认就诊人失败，请稍后再试")
        }), (function(t) {
            e._opFail(t.errMsg || "设置默认就诊人失败，请稍后再试")
        }))
    },
    _opSuccess: function(a) {
        var e = this;
        (0, t.login)((function() {
            n.hideLoading();
            var a = (0, t.getGlobalRegistered)();
            if (e.setData({
                    ok: a
                }), a) {
                var o = (0, t.getGlobalCardInfo)();
                e.setData({
                    visitor: o
                })
            }
        }), (function(t) {
            e._opFail(t || "刷新就诊人信息失败，请稍后再试")
        }))
    },
    _opFail: function(t) {
        n.hideLoading(), n.showToast({
            title: t
        })
    },
    menuSelect: function() {
        n.showActionSheet({
            itemList: ["重新认证"],
            success: function(t) {
                0 == t.tapIndex && n.navigateTo("/pages/jzr/jzrrz/index")
            }
        })
    },
    doCreate: function(a) {
        var e = this,
            o = a.target.dataset.item;
        (0, t._request)({
            loading: !1,
            url: "/api/patientBasicInfo/queryArchiveInfo.json",
            data: {
                name: o.clientName,
                idCard: o.idCardNo
            },
            method: "post",
            success: function(t) {
                console.log("病人档案查询", t), n.hideLoading(), 0 == t.status && e.setData({
                    dataType: t.data.dataType || "1"
                }, (function() {
                    var t = "确定要身份证建档吗？";
                    "1" == e.data.dataType && (t = "您已有档案，点击确定查看档案"), n.showModal({
                        showCancel: !0,
                        content: t,
                        success: function(t) {
                            t.confirm && n.navigateTo("/pages/hzjd/index?item=" + JSON.stringify(o))
                        }
                    })
                }))
            },
            fail: function(t) {
                n.hideLoading(), console.log("病人档案查询 失败", t)
            }
        })
    }
});