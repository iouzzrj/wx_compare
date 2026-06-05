
var e = require("../../utils/api"),
    a = require("../../utils/wxutil.js");
Page({
    data: {
        items: [{
            value: "0",
            name: "魏公村总院区",
            phone: "010-62179977",
            checked: "true",
            distance: "",
            img: "/assets/images/hospital/rBsAEGGXYKSAUu-bAACTzLfasqY064.jpg",
            address: "北京市海淀区中关村南大街22号",
            latitude: 39.95227,
            longitude: 116.32524
        }, {
            value: "6",
            name: "国合门诊部(国际门诊)",
            distance: "",
            phone: "",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM990.jpg",
            address: "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼",
            latitude: 39.953164,
            longitude: 116.324532
        }, {
            value: "1",
            name: "第一门诊部",
            distance: "",
            phone: "010-53295000",
            img: "/assets/images/hospital/rBsAEGGXYR-AXjLHAACOaFR5-gw843.jpg",
            address: "北京市西城区西黄城根北街10号",
            latitude: 39.924101,
            longitude: 116.378039
        }, {
            value: "2",
            name: "第二门诊部",
            distance: "",
            phone: "010-82196299",
            img: "/assets/images/hospital/rBsAEGGXYT-ADlMrAACgLhkSsOU501.jpg",
            address: "北京市朝阳区安立路66号安立写字楼C座5楼",
            latitude: 40.00346,
            longitude: 116.4083
        }, {
            value: "3",
            name: "第三门诊部",
            distance: "",
            phone: "010-82037030",
            img: "/assets/images/hospital/rBsAEGGXYVKAOWBtAACbu7RrOBU123.jpg",
            address: "北京市海淀区花园东路10号高德大厦A座2层203室",
            latitude: 39.98277,
            longitude: 116.37011
        }, {
            value: "4",
            name: "第四门诊部(非医保单位)",
            distance: "",
            phone: "010-85715955",
            img: "/assets/images/hospital/rBsAEGGXYWSAMCXuAADTmOei2yI612.jpg",
            address: "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼(家乐福慈云寺店南侧)",
            latitude: 39.91692,
            longitude: 116.48834
        }, {
            value: "5",
            name: "第五门诊部(非医保单位)",
            distance: "",
            phone: "010-65538893",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM989.jpg",
            address: "北京市朝阳区朝阳门外大街吉庆里14号佳汇国际中心A座305室",
            latitude: 39.92742,
            longitude: 116.44106
        }, {
            value: "7",
            name: "天竺门诊部(非医保单位)",
            distance: "",
            phone: "",
            img: "/assets/images/hospital/rBsAEGGXYXKAIS9HAAB9Jc8wRPM991.jpg",
            address: "北京市顺义区金航西路4号院绿地自由港B座一层",
            latitude: 40.114408,
            longitude: 116.580015
        }],
        popupModel: "",
        distance: "",
        longitude: "",
        latitude: "",
        selectTypeItem: "1",
        jgList: [{
            value: "0",
            name: "魏公村总院区"
        }, {
            value: "6",
            name: "国合门诊部(国际门诊)"
        }, {
            value: "1",
            name: "第一门诊部"
        }, {
            value: "2",
            name: "第二门诊部"
        }, {
            value: "3",
            name: "第三门诊部"
        }, {
            value: "4",
            name: "第四门诊部(非医保单位)"
        }, {
            value: "5",
            name: "第五门诊部(非医保单位)"
        }, {
            value: "7",
            name: "天竺门诊部(非医保单位)"
        }],
        selectClassify: "0",
        selectView: "0",
        selectArea: "魏公村总院区",
        officeArr: [],
        dataInit: !1
    },
    consult: function(e) {
        var t = e.currentTarget.dataset.item.value,
            s = e.currentTarget.dataset.item.name;
        if ("yygh" == this.data.popupModel) 6 == t ? a.showModal({
            confirmText: "已知晓",
            content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n正畸门诊（2层）价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
            success: function(e) {
                e.cancel || a.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s)
            }
        }) : 7 == t ? a.showModal({
            confirmText: "已知晓",
            content: "天竺门诊部费用标准与总院一致，暂未开通医保，均为自费；暂不提供住院服务；天竺门诊电话预约可提前一周：010-81418000",
            success: function(e) {
                e.cancel || a.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s)
            }
        }) : a.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s);
        else if ("dtgh" == this.data.popupModel) 6 == t ? a.showModal({
            confirmText: "已知晓",
            content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n正畸门诊（2层）价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
            success: function(e) {
                e.cancel || a.navigateTo("/pages/dtgh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s)
            }
        }) : 7 == t ? a.showModal({
            confirmText: "已知晓",
            content: "天竺门诊部费用标准与总院一致，暂未开通医保，均为自费；暂不提供住院服务；天竺门诊电话预约可提前一周：010-81418000",
            success: function(e) {
                e.cancel || a.navigateTo("/pages/dtgh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s)
            }
        }) : a.navigateTo("/pages/dtgh/xzjzr/index?tapIndex=" + t + "&showPopup=false&area=" + s);
        else if ("hygs" == this.data.popupModel) a.navigateTo("/integrated-query/pages/hygs/xzks/index?tapIndex=" + t + "&myToday=" + this.data.myToday);
        else if ("tzgs" == this.data.popupModel) a.navigateTo("/integrated-query/pages/hygs/index?tapIndex=" + t + "&popupModel=tzgs");
        else if ("tsks" == this.data.popupModel) a.navigateTo("/pages/tsks/xzks/index?tapIndex=" + t);
        else if ("zjjs" == this.data.popupModel) a.navigateTo("/pages/zjjs/kslb/index?tapIndex=" + t);
        else if ("czxx" == this.data.popupModel) a.navigateTo("/hospital-introduce/pages/fyjj/index?code=" + t + "&name=" + s);
        else if ("lydh" == this.data.popupModel) {
            if (0 == t) var n = "北京大学口腔医院",
                i = "北京市海淀区中关村南大街22号",
                o = 39.95227,
                d = 116.32524,
                p = 16;
            else 1 == t ? (n = "北京大学口腔医院（西什库门诊部）", i = "北京市西城区西黄城根北街10号", o = 39.924101, d = 116.378039, p = 16) : 2 == t ? (n = "北京大学口腔医院第二门诊部", i = " 北京市朝阳区安立路66号安立写字楼C座5楼", o = 40.00346, d = 116.4083, p = 16) : 3 == t ? (n = "北京大学口腔医院第三门诊部", i = "北京市海淀区花园东路10号高德大厦A座2层203室", o = 39.98277, d = 116.37011, p = 16) : 4 == t ? (n = "北京大学口腔医院第四门诊部", i = "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼(家乐福慈云寺店南侧)", o = 39.91692, d = 116.48834, p = 16) : 5 == t ? (n = "北京大学口腔医院第五门诊部", i = "北京市朝阳区朝阳门外大街吉庆里14号佳汇国际中心A座305室", o = 39.92742, d = 116.44106) : 6 == t ? (n = "北京大学口腔医院国合门诊部", i = "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼", o = 39.953164, d = 116.324532) : 7 == t ? (n = "北京大学口腔医院天竺门诊部", i = "北京市顺义区金航西路4号院绿地自由港B座一层", o = 40.114408, d = 116.580015) : 99 == t && (n = "北京大学口腔医院第一门诊部C楼", i = "北京市西城区西黄城根北街10号", o = 39.923957, d = 116.378626);
            a.openLocation({
                name: n,
                address: i,
                latitude: o,
                longitude: d,
                scale: p
            })
        }
    },
    goSearch: function() {
        "dtgh" != this.data.popupModel && "yygh" != this.data.popupModel ? "hygs" != this.data.popupModel ? wx.showToast({
            title: "暂未开通！",
            icon: "none"
        }) : a.navigateTo("../../integrated-query/pages/hygs/gsSearch/index?myToday=" + this.data.myToday) : a.navigateTo("../yqSearch/index?popupModel=".concat(this.data.popupModel))
    },
    distance: function(e, a, t, s) {
        var n = e * Math.PI / 180,
            i = t * Math.PI / 180,
            o = n - i,
            d = a * Math.PI / 180 - s * Math.PI / 180,
            p = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(o / 2), 2) + Math.cos(n) * Math.cos(i) * Math.pow(Math.sin(d / 2), 2)));
        return p *= 6378.137, p = (p = Math.round(1e4 * p) / 1e4).toFixed(2)
    },
    makePhoneCall: function(e) {
        console.log(e.currentTarget.dataset.phone), wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone,
            success: function(e) {},
            fail: function(e) {
                console.log(e)
            }
        })
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            popupModel: e.popupModel,
            myToday: e.myToday
        }), wx.showLoading({
            title: "加载中..."
        }), wx.getLocation({
            type: "wgs84",
            success: function(e) {
                a.setData({
                    latitude: e.latitude,
                    longitude: e.longitude
                }), a.data.items.forEach((function(e, t) {
                    e.distance = a.distance(a.data.latitude, a.data.longitude, e.latitude, e.longitude)
                })), a.setData({
                    items: a.data.items
                }), wx.hideLoading()
            },
            fail: function() {
                wx.hideLoading()
            }
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    changeTypeItem: function(e) {
        var a = this,
            t = e.currentTarget.dataset.id;
        a.setData({
            selectTypeItem: t
        }, (function() {
            "2" == t && a._loadOffice(a.data.selectClassify)
        }))
    },
    changeClassify: function(e) {
        var a = this,
            t = e.currentTarget.dataset.classify;
        a.setData({
            officeArr: [],
            dataInit: !1,
            selectClassify: t,
            selectView: e.currentTarget.dataset.view,
            selectArea: e.currentTarget.dataset.area
        }, (function() {
            a._loadOffice(t)
        }))
    },
    toJzr: function(e) {
        var t = e.currentTarget.dataset.value;
        t.remainNum <= 0 || ("yygh" == this.data.popupModel ? a.navigateTo("/pages/yygh/xzjzr/index?tapIndex=" + t.tapIndex + "&&showPopup=false&area=" + this.data.selectArea + "&deptCode=" + t.majorDetailId + "&deptName=" + t.deptName + "&showJzxz=true") : "dtgh" == this.data.popupModel && a.navigateTo("/pages/dtgh/xzjzr/index?tapIndex=" + t.tapIndex + "&&showPopup=false&area=" + this.data.selectArea + "&deptCode=" + t.majorDetailId + "&deptName=" + t.deptName + "&showJzxz=true"))
    },
    _loadOffice: function(a) {
        var t = this,
            s = "/api/appointmentInfo/getAfterDayDepartment.json";
        "dtgh" == t.data.popupModel && (s = "/api/appointmentInfo/getTodayDepartment.json"), (0, e._request)({
            dataInit: t.data.dataInit,
            url: s,
            data: {
                tapIndex: a,
                withRemain: "1"
            },
            success: function(e) {
                var a = e.data;
                console.log("科室列表:", e);
                var s = a.lists;
                0 != s.length ? (s.sort((function(e, a) {
                    return a.remainNum - e.remainNum
                })), t.setData({
                    officeArr: s
                })) : t.setData({
                    officeArr: []
                })
            },
            fail: function() {},
            complete: function() {
                t.setData({
                    dataInit: !0
                })
            }
        })
    }
});