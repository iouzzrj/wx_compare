
var t = require("../../utils/api"),
    e = require("../../utils/wxutil.js");
Page({
    data: {
        value: "",
        historyArr: [],
        tempArray: [],
        items: [{
            value: "0",
            name: "魏公村总院区",
            phone: "010-62179977",
            checked: "true",
            distance: "",
            img: "/assets/images/hospital/rBsAEGGXYKSAUu-bAACTzLfasqY064.jpg"
        }, {
            value: "1",
            name: "第一门诊部(西城区西四)",
            distance: "",
            phone: "010-53295000",
            img: "/assets/images/hospital/rBsAEGGXYR-AXjLHAACOaFR5-gw843.jpg"
        }, {
            value: "2",
            name: "第二门诊部(北四环大屯路)",
            distance: "",
            phone: "010-82196299",
            img: "/assets/images/hospital/rBsAEGGXYT-ADlMrAACgLhkSsOU501.jpg"
        }, {
            value: "3",
            name: "第三门诊部(北三环花园东路)",
            distance: "",
            phone: "010-82037030",
            img: "/assets/images/hospital/rBsAEGGXYVKAOWBtAACbu7RrOBU123.jpg"
        }, {
            value: "4",
            name: "第四门诊部(东四环慈云寺)",
            distance: "",
            phone: "010-85715955",
            img: "/assets/images/hospital/rBsAEGGXYWSAMCXuAADTmOei2yI612.jpg"
        }, {
            value: "5",
            name: "第五门诊部(东二环朝阳门)",
            distance: "",
            phone: "010-65538893",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM989.jpg"
        }, {
            value: "6",
            name: "国合门诊部(中关村南大街)",
            distance: "",
            phone: "",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM990.jpg"
        }, {
            value: "7",
            name: "天竺门诊部(顺义区金航西路)",
            distance: "",
            phone: "",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM991.jpg"
        }, {
            value: "99",
            name: "一门诊C楼",
            distance: "",
            phone: "010-53295000",
            img: "/assets/images/hospital/rBsAEGGXYR-AXjLHAACOaFR5-gw843.jpg"
        }],
        delDlsplay: !1,
        dataArr: []
    },
    confirm: function(t) {
        var a = t.detail.value;
        if (!e.isEmpty(t.detail.value)) {
            -1 == this.data.historyArr.indexOf(t.detail.value) || this.data.historyArr.splice(this.data.historyArr.indexOf(t.detail.value), 1), this.data.historyArr.unshift(t.detail.value), wx.setStorage({
                data: this.data.historyArr,
                key: "search"
            }), this.setData({
                historyArr: this.data.historyArr,
                delDlsplay: !0
            });
            for (var s = [], i = [], o = this.data.dataArr, n = 0; n < o.length; n++) {
                var d = o[n].deptId + "#" + o[n].doctId + "#" + o[n].dist; - 1 != o[n].doctName.indexOf(a) && -1 == s.indexOf(d) && (o[n].searchKeyDept = !0, i.push(o[n]), s.push(d), console.log("yisheng"))
            }
            var r = [];
            for (n = 0; n < o.length; n++) {
                var p = o[n].deptId + "#" + o[n].dist; - 1 != o[n].deptName.indexOf(a) && -1 == r.indexOf(p) && (o[n].searchKeyDept = !1, i.push(o[n]), r.push(p), console.log(p))
            }
            this.setData({
                tempArray: i
            })
        }
    },
    del: function() {
        console.log(11111), this.setData({
            delDlsplay: !1,
            value: ""
        })
    },
    null: function() {
        console.log(222), wx.removeStorage({
            key: "search",
            success: function(t) {}
        }), this.setData({
            historyArr: []
        })
    },
    history: function(t) {
        console.log(t.currentTarget.dataset.item), this.confirm({
            detail: {
                value: t.currentTarget.dataset.item
            }
        }), this.setData({
            value: t.currentTarget.dataset.item
        })
    },
    toDetails: function(t) {
        var a = t.currentTarget.dataset.item;
        "yygh" == this.data.popupModel ? e.navigateTo("/pages/yygh/xzjzr/index?tapIndex=".concat(a.dist, "&&showPopup=false&&deptCode=").concat(a.deptId, "&&deptName=").concat(a.deptName)) : "dtgh" == this.data.popupModel && e.navigateTo("/pages/dtgh/xzjzr/index?tapIndex=".concat(a.dist, "&&showPopup=false&&deptCode=").concat(a.deptId, "&&deptName=").concat(a.deptName))
    },
    getYySearchInfo: function() {
        var e = this;
        "dtgh" != this.data.popupModel ? (0, t._request)({
            url: "/api/appointmentInfo/getYySearchInfo",
            success: function(t) {
                var a = t.data.lists;
                a.forEach((function(t, e) {
                    0 == t.dist ? t.type = "魏公村总院区" : 1 == t.dist ? t.type = "第一门诊部(西城区西四)" : 2 == t.dist ? t.type = "第二门诊部(北四环大屯路)" : 3 == t.dist ? t.type = "第三门诊部(北三环花园东路)" : 4 == t.dist ? t.type = "第四门诊部(东四环慈云寺)" : 5 == t.dist ? t.type = "第五门诊部(东二环朝阳门)" : 6 == t.dist ? t.type = "国合门诊部(中关村南大街)" : 7 == t.dist ? t.type = "天竺门诊部(顺义区金航西路)" : 99 == t.dist && (t.type = "一门诊C楼")
                })), e.setData({
                    dataArr: a
                })
            }
        }) : (0, t._request)({
            url: "/api/appointmentInfo/getTodaySearchInfo",
            success: function(t) {
                if (console.log(t), t.data.lists) {
                    var a = t.data.lists;
                    a.forEach((function(t, e) {
                        0 == t.dist ? t.type = "魏公村总院区" : 1 == t.dist ? t.type = "第一门诊部(西城区西四)" : 2 == t.dist ? t.type = "第二门诊部(北四环大屯路)" : 3 == t.dist ? t.type = "第三门诊部(北三环花园东路)" : 4 == t.dist ? t.type = "第四门诊部(东四环慈云寺)" : 5 == t.dist ? t.type = "第五门诊部(东二环朝阳门)" : 6 == t.dist ? t.type = "国合门诊部(中关村南大街)" : 7 == t.dist ? t.type = "天竺门诊部(顺义区金航西路)" : 99 == t.dist && (t.type = "一门诊C楼")
                    })), e.setData({
                        dataArr: a
                    })
                }
            }
        })
    },
    inputValue: function(t) {
        this.setData({
            value: t.detail.value
        }), "" == t.detail.value && this.setData({
            tempArray: []
        })
    },
    onLoad: function(t) {
        var e = this;
        "dtgh" == t.popupModel && wx.showModal({
            title: "温馨提示",
            content: "尊敬的患者朋友:我院预约挂号时间为每天17时至次日早5时。今日号源预约已结束，17时可预约明日号源。请您根据就诊需要另行预约，感谢您的配合。",
            showCancel: !1,
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消")
            }
        }), this.setData({
            popupModel: t.popupModel
        }), wx.getStorage({
            key: "search",
            success: function(t) {
                e.setData({
                    historyArr: t.data
                })
            }
        }), this.getYySearchInfo()
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});