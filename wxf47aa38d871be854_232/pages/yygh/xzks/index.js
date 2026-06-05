
var t = require("../../../utils/api"),
    a = getApp(),
    e = require("../../../utils/wxutil.js");
Page({
    data: {
        showPopup: !0,
        dataInit: !1,
        officeArr: [],
        list: [],
        rightList: [],
        selectClassify: [],
        content: "暂无可预约科室",
        tapIndex: "",
        area: "",
        txModel: !1
    },
    onLoad: function(t) {
        this.setData({
            agreement: a.globalData.yyghInfoObj || {
                info_title: "预约服务协议",
                info_content: ""
            },
            area: t.area || "",
            selectVisitorStr: t.selectVisitor || {},
            tapIndex: t.tapIndex
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    _loadOffice: function(a) {
        var e = this;
        (0, t._request)({
            dataInit: e.data.dataInit,
            url: "/api/appointmentInfo/getAfterDayDepartment.json",
            data: {
                tapIndex: a
            },
            success: function(t) {
                var a = t.data;
                console.log("科室列表:", t);
                var i = e.dataArrGroup(a.lists);
                0 != i.length ? e.setData({
                    officeArr: a.lists,
                    list: i,
                    rightList: i[0].data,
                    selectClassify: i[0]
                }) : e.setData({
                    officeArr: [],
                    list: [],
                    rightList: [],
                    selectClassify: []
                })
            },
            fail: function() {},
            complete: function() {
                e.setData({
                    dataInit: !0
                })
            }
        })
    },
    cutReservation: function(t) {
        this.setData({
            index: t.currentTarget.dataset.index
        })
    },
    toSearch: function() {
        e.navigateTo("../ssks/index?officeArrStr=" + JSON.stringify(this.data.officeArr) + "&selectVisitor=" + this.data.selectVisitorStr + "&tapIndex=" + this.data.tapIndex + "&area=" + this.data.area)
    },
    toView: function(t) {
        var a = this,
            e = t.currentTarget.dataset.letter;
        this.setData({
            letter: e,
            isShow: !0
        }), setTimeout((function() {
            a.setData({
                isShow: !1
            })
        }), 300)
    },
    check: function(t) {
        this.setData({
            check: !this.data.check
        })
    },
    consult: function(t) {
        var a = this;
        a.data.check ? a.setData({
            showPopup: !1
        }, (function() {
            a._loadOffice(a.data.tapIndex)
        })) : e.showToast({
            title: "请阅读并同意《挂号须知》"
        })
    },
    cancel: function(t) {
        wx.navigateBack()
    },
    dataArrGroup: function(t) {
        for (var a = {}, e = [], i = 0; i < t.length; i++) {
            var s = t[i],
                n = "0";
            if (-1 != s.majorName.indexOf("特需") && (s.showBold = "1", n = "1"), a[s.majorName])
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    if (r.deptName == s.majorName) {
                        r.data.push(s);
                        break
                    }
                } else e.push({
                    deptName: s.majorName,
                    data: [s],
                    showBold: n
                }), a[s.majorName] = s
        }
        return e
    },
    changeClassify: function(t) {
        this.setData({
            selectClassify: this.data.list[t.currentTarget.dataset.id],
            rightList: this.data.list[t.currentTarget.dataset.id].data
        })
    },
    txCancel: function() {
        this.setData({
            txModel: !1
        })
    },
    txConsult: function() {
        this.setData({
            txModel: !1
        });
        var t = this.data.selectItem,
            a = t.majorDetailId,
            i = t.deptName;
        e.navigateTo("/pages/yygh/xzys/index?deptCode=" + a + "&deptName=" + i + "&selectVisitor=" + this.data.selectVisitorStr + "&tapIndex=" + this.data.tapIndex + "&area=" + this.data.area)
    },
    doJump: function(t) {
        console.log(t);
        var a = t.detail.target.dataset.item,
            i = a.majorDetailId,
            s = a.deptName,
            n = a.remind;
        console.log(n), -1 == a.majorName.indexOf("特需") ? void 0 !== n ? this.remind(i, s, n) : e.navigateTo("/pages/yygh/xzys/index?deptCode=" + i + "&deptName=" + s + "&selectVisitor=" + this.data.selectVisitorStr + "&tapIndex=" + this.data.tapIndex + "&area=" + this.data.area) : this.setData({
            txModel: !0,
            selectItem: a
        })
    },
    remind: function(t, a, i) {
        var s = this;
        e.showModal({
            showCancel: !1,
            content: i,
            success: function(i) {
                e.navigateTo("/pages/yygh/xzys/index?deptCode=" + t + "&deptName=" + a + "&selectVisitor=" + s.data.selectVisitorStr + "&tapIndex=" + s.data.tapIndex + "&area=" + s.data.area)
            }
        })
    }
});