
var t = require("../../../utils/wxutil.js");
Page({
    data: {
        dataInit: !1,
        dataObject: {},
        userArray: [],
        displayUser: "0",
        displayView: "0",
        firstShow: !0
    },
    onLoad: function(e) {
        var a;
        try {
            a = e.dataObj && JSON.parse(decodeURIComponent(e.dataObj))
        } catch (t) {
            a = {}, console.error(t)
        }
        if (t.isNotEmpty(a)) this._initData(a);
        else {
            var s = this;
            t.showLoading(), t.request({
                loading: !1,
                url: "/api/epidemic-survey/getSurvey.json",
                success: function(e) {
                    t.hideLoading(), 0 == e.status ? s._initData(e.data) : t.showToast({
                        title: e.message || "数据加载失败，请稍后再试"
                    })
                },
                fail: function(e) {
                    t.hideLoading(), t.showToast({
                        title: e || "数据加载失败，请稍后再试"
                    })
                }
            })
        }
    },
    onReady: function() {
        this.selector = t.selectComponent(this, "#selector")
    },
    onShow: function() {
        if (this.data.firstShow) this.setData({
            firstShow: !1
        });
        else {
            var e = this;
            t.request({
                dataInit: e.data.dataInit,
                url: "/api/epidemic-survey/getSurvey.json",
                success: function(t) {
                    0 == t.status && e._initData(t.data)
                }
            })
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return t.getShareMessage()
    },
    changeView: function(t) {
        "tap" == t.type ? this.setData({
            displayView: t.currentTarget.dataset.current
        }) : "change" == t.type && "touch" == t.detail.source && this.setData({
            displayView: t.detail.current
        })
    },
    toChangeUser: function() {
        this.selector.show()
    },
    doChangeUser: function(e) {
        var a = e.detail.value;
        "-1" != a ? this.setData({
            displayUser: a,
            displayView: "0"
        }) : t.redirectTo("/pages/fydc/xxtb/index?dataObj=" + encodeURIComponent(JSON.stringify(this.data.dataObject)))
    },
    _initData: function(e) {
        var a = e.record || [];
        if (0 != a.length) {
            if (JSON.stringify(e) != JSON.stringify(this.data.dataObject)) {
                for (var s = [], i = 0; i < a.length; i++) {
                    var n = a[i];
                    s.push({
                        icon: "/assets/images/fydc/sex_" + t.getSex(n.idCard) + ".png",
                        selectIcon: "/assets/images/fydc/select_user_" + n.flag + ".png",
                        text: n.name + "(" + t.handleIdCardSensitive(n.idCard) + ")",
                        textColor: "#404040",
                        value: i + "",
                        disable: !1
                    })
                }
                s.length < e.count && s.push({
                    icon: "/assets/images/fydc/add_user.png",
                    selectIcon: "",
                    text: "填写调查表",
                    textColor: "#999999",
                    value: "-1",
                    disable: !1
                }), this.setData({
                    dataInit: !0,
                    dataObject: e,
                    userArray: s,
                    displayUser: "0",
                    displayView: "0"
                })
            }
        } else t.redirectTo("/pages/fydc/xxtb/index?dataObj=" + encodeURIComponent(JSON.stringify(e)))
    }
});