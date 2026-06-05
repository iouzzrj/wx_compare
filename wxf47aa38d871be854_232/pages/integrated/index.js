
var e = require("../../utils/util.js"),
    t = require("../../utils/api.js"),
    i = require("../../utils/wxutil.js");
Page({
    data: {
        miniVersion: "",
        winWidth: 0,
        winHeight: 0,
        contactWidth: 0,
        contactHeight: 0,
        relativelyX: 0,
        relativelyY: 0,
        leftDistance: 0,
        topDistance: 0,
        contactAvailable: i.canIUse("button.open-type.contact"),
        isRegistered: !1,
        isShowMask: !1,
        isShowpup: !1,
        modalName: ""
    },
    onLoad: function(e) {
        this.setData({
            isRegistered: (0, t.getGlobalRegistered)(),
            miniVersion: i.getMiniGrogVersion()
        })
    },
    noKf: function() {
        i.showToast({
            title: "功能暂未开放"
        })
    },
    dzpj: function(e) {
        wx.navigateToMiniProgram({
            appId: "wx8e0b79a7f627ca18",
            path: "pages/index/index?agencyCode=64e55178027c48708c876725a9160fd1"
        })
    },
    gomyd: function(e) {
        (console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered) ? 1 == e.currentTarget.dataset.id ? i.navigateTo("/integrated-query/pages/dcwj/index?templateCode=MZMYD&templateId=54") : i.navigateTo("/integrated-query/pages/dcwj/index?templateCode=ZYMYD&templateId=55"): i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goTextPage: function(t) {
        console.log(t.currentTarget.dataset.index);
        var i = t.currentTarget.dataset.index;
        0 == i ? (0, e.navigateTo)("/integrated-query/pages/textPage1/index") : 1 == i ? (0, e.navigateTo)("/integrated-query/pages/textPage2/index") : 2 == i && (0, e.navigateTo)("/integrated-query/pages/textPage3/index")
    },
    _adjustContact: function() {
        var e = this;
        i.selectElement("#v_contact", (function(t) {
            var a = t.width,
                n = t.height,
                o = i.getSystemInfo().windowWidth,
                s = i.getSystemInfo().windowHeight;
            e.setData({
                winWidth: o,
                winHeight: s,
                contactWidth: a,
                contactHeight: n,
                leftDistance: o - a - 10,
                topDistance: s - n - 10 - 120
            })
        }), this)
    },
    doTouchStart: i.throttle((function(e) {
        var t = e.currentTarget || {},
            i = e.touches[0] || {};
        this.setData({
            relativelyX: i.clientX - t.offsetLeft,
            relativelyY: i.clientY - t.offsetTop
        })
    })),
    doTouchMove: i.throttle((function(e) {
        var t = e.touches[0] || {},
            i = t.clientX - this.data.relativelyX;
        i < 0 && (i = 0), i + this.data.contactWidth > this.data.winWidth && (i = this.data.winWidth - this.data.contactWidth);
        var a = t.clientY - this.data.relativelyY;
        a < 0 && (a = 0), a + this.data.contactHeight > this.data.winHeight && (a = this.data.winHeight - this.data.contactHeight), this.setData({
            leftDistance: i,
            topDistance: a
        })
    }), 100),
    goHztx: function() {
        i.navigateTo("/integrated-query/pages/hztxPage/index")
    },
    goMzjf: function() {
        this.data.isRegistered ? i.navigateTo("/hospital-introduce/pages/mzjf/zxjf/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goYhcx: function() {
        i.navigateTo("/integrated-query/pages/yhcxPage/index")
    },
    goHygh: function() {
        this.setData({
            modalName: "Modal1"
        })
    },
    goCyjs: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/cyjs/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goTzgs: function() {
        i.navigateTo("/pages/select/index?popupModel=tzgs")
    },
    goYnbm: function() {
        i.navigateTo("/integrated-query/pages/ynbm/index")
    },
    gobl: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/zybl/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    gofzgh: function() {
        i.navigateTo("/online-inquiry/pages/fzgh/index?idCard=110105196308132633&ghrq=2024-05-09&ghje=20&dist=0&deptCode=kqnmk&doctorCode=2337")
    },
    toDiancan: function() {
        i.navigateTo("/pages/xzjzr/index")
    },
    goDownLoadCf: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/downloadCf/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goCyxjrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/cyxjrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goZyyjrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/zyyjrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goZyyj: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/zxcz/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goCydyrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/cydyrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goMzfyrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/mzfyrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goYyrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/yyrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goJzrecord: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/jzrecord/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goMyreport: function() {
        console.log(this.data.isRegistered, "是否实名"), this.data.isRegistered ? i.navigateTo("/integrated-query/pages/myreport/index") : i.navigateTo("/pages/jzr/jzrrz/index")
    },
    goBayyNew: function() {
        wx.navigateToMiniProgram({
            appId: "wxff4273542debbc64",
            path: "pages/index/index?hosId=1031",
            success: function(e) {}
        })
    },
    onReady: function() {
        this._adjustContact();
        var e = this.data.redirectPage;
        i.isNotEmpty(e) && i.navigateTo(e)
    },
    onShow: function() {
        this.setData({
            isRegistered: (0, t.getGlobalRegistered)()
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goYpcs: function() {
        i.navigateTo("/integrated-query/pages/drugsList/index")
    },
    somefunction: function() {},
    clickCancle: i.throttle((function(e) {
        this.setData({
            modalName: ""
        })
    }), 800),
    clickGh: i.throttle((function(e) {
        var t = e.currentTarget.dataset.index;
        this.clickCancle(), i.navigateTo("/pages/select/index?popupModel=hygs&myToday=".concat(t))
    }), 800)
});