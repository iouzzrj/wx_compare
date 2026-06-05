
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js"),
    a = getApp();
Page({
    data: {
        scrollHeight: 0,
        dataInit: !1,
        selectHospital: !1,
        deptName: "",
        nav: [],
        list: []
    },
    onLoad: function(t) {
        e.setNavigationBarTitle("科室列表"), this.setData({
            tap_index: t.tapIndex
        }), this._loadDeptList(t.tapIndex)
    },
    onReady: function() {
        this.setData({
            scrollHeight: e.getSystemInfo().windowHeight - 57
        })
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    selectHospital: function() {
        this.setData({
            selectHospital: !this.data.selectHospital
        })
    },
    doSelectHos: function(t) {
        this.setData({
            deptName: t.currentTarget.dataset.name,
            hospitalId: t.currentTarget.dataset.orgId,
            selectHospital: !0
        })
    },
    _loadDeptList: function(a) {
        var s = this,
            i = "dept_list_" + a,
            n = e.getStorage(i);
        e.isNotEmpty(n) ? s.setData({
            dataInit: !0,
            nav: n.nav,
            list: n.lists,
            letter: n.lists[0].indexLetter
        }) : (0, t._request)({
            dataInit: s.data.dataInit,
            url: "/api/dept/queryDeptList.json",
            data: {
                tapIndex: a
            },
            success: function(t) {
                var a = t.data;
                "0000" != t.state || e.isEmpty(a) ? s.setData({
                    nav: [],
                    list: [],
                    letter: ""
                }) : (s.setData({
                    nav: a.nav,
                    list: a.lists,
                    letter: a.lists[0].indexLetter
                }), e.setStorage(i, a, 864e5))
            },
            fail: function() {
                s.setData({
                    nav: [],
                    list: [],
                    letter: ""
                })
            },
            complete: function() {
                s.setData({
                    dataInit: !0
                })
            }
        })
    },
    toView: function(t) {
        var e = this,
            a = t.currentTarget.dataset.letter;
        this.setData({
            letter: a,
            isShow: !0
        }), setTimeout((function() {
            e.setData({
                isShow: !1
            })
        }), 300)
    },
    toSearch: function() {
        for (var t = this.data.list, s = [], i = 0; i < t.length; i++)
            for (var n = t[i].departments, o = 0; o < n.length; o++) {
                var l = n[o];
                s.push(l)
            }
        a.globalData.tsksList = s, e.navigateTo("/pages/tsks/ssks/index")
    }
});