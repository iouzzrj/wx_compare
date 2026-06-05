
var t = require("../../../utils/api"),
    e = getApp(),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        imgBase: a.getImgBase(),
        scrollHeight: 0,
        isOpen: !1,
        dataInit: !1,
        timeRangeArr: [],
        selectTimeItem: "",
        selectWeekItem: "",
        selectTypeItem: 0,
        doctorArr: [],
        sort: "按日期排",
        showSort: !0,
        showMask: !0,
        docotorClassifyArr: [],
        moreDoctor: [],
        tapIndex: "",
        showJzxz: !1,
        agreement: "",
        area: ""
    },
    onLoad: function(t) {
        var a = {
            deptCode: t.deptCode,
            deptName: t.deptName,
            deptId: t.deptId
        };
        this.setData({
            agreement: e.globalData.yyghInfoObj || {
                info_title: "预约服务协议",
                info_content: ""
            },
            showJzxz: t.showJzxz || !1,
            area: t.area || "",
            tapIndex: t.tapIndex,
            deptObj: a,
            deptObjStr: JSON.stringify(a),
            selectVisitorStr: t.selectVisitor || {}
        })
    },
    onReady: function() {
        var t = "6" == this.data.tapIndex;
        this.setData({
            scrollHeight: a.getSystemInfo().windowHeight - (t ? 124 : 70)
        })
    },
    onShow: function() {
        this._loadDoctor()
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    doSelect: function(t) {
        var e = t.currentTarget.dataset.address,
            o = this.data.deptObj,
            n = t.currentTarget.dataset.item;
        a.navigateTo("/pages/dtgh/xzhy/index?&address=" + encodeURIComponent(e) + "&deptObj=" + encodeURIComponent(JSON.stringify(o)) + "&doctInfo=" + encodeURIComponent(JSON.stringify(n)) + "&selectVisitor=" + encodeURIComponent(this.data.selectVisitorStr) + "&tapIndex=" + encodeURIComponent(this.data.tapIndex))
    },
    _loadDoctor: function() {
        var e = this;
        (0, t._request)({
            url: "/api/appointmentInfo/getDoctorInfo.json",
            data: {
                deptCode: e.data.deptObj.deptCode,
                tapIndex: e.data.tapIndex
            },
            method: "post",
            success: function(t) {
                var a = t.data;
                "0" == t.status && 0 != a.length ? e.setData({
                    doctorArr: a
                }) : e.setData({
                    doctorArr: []
                })
            },
            complete: function() {
                e.setData({
                    dataInit: !0
                })
            }
        })
    },
    check: function(t) {
        this.setData({
            check: !this.data.check
        })
    },
    consult: function(t) {
        this.data.check ? this.setData({
            showJzxz: !1
        }) : a.showToast({
            title: "请阅读并同意《挂号须知》"
        })
    },
    cancel: function(t) {
        wx.navigateBack()
    },
    makeCall: function(t) {
        var e = t.target.dataset.phone;
        a.makePhoneCall(e)
    },
    toSuggest: function(t) {
        a.redirectTo("/integrated-query/pages/xgzy/index?dataType=1&areaCode=" + this.data.tapIndex + "&deptCode=" + this.data.deptObj.deptCode + "&selectVisitor=" + this.data.selectVisitorStr)
    }
});