
var t = require("../../../utils/api"),
    e = require("../../../utils/wxutil.js");
Page({
    data: {
        dataInit: !1,
        nav: [],
        deptList: [],
        doctorList: [],
        selected: "",
        dataInit2: !1
    },
    onLoad: function(t) {
        e.setNavigationBarTitle("医生列表"), this.setData({
            tap_index: t.tapIndex
        }), this._loadDeptList(t.tapIndex)
    },
    _loadDeptList: function(a) {
        var s = this,
            i = "dept_list_" + a,
            o = e.getStorage(i);
        e.isNotEmpty(o) ? s.setData({
            dataInit: !0,
            nav: o.nav,
            deptList: o.lists,
            letter: o.lists[0].indexLetter,
            defaultDeptCode: o.lists[0].departments[0].dept_code,
            selected: o.lists[0].departments[0].dept_code
        }, (function() {
            s.queryDoctorList(a, s.data.defaultDeptCode)
        })) : (0, t._request)({
            dataInit: s.data.dataInit,
            url: "/api/dept/queryDeptList.json",
            data: {
                tapIndex: a
            },
            success: function(t) {
                var o = t.data;
                "0000" != t.state || e.isEmpty(o.lists) ? s.setData({
                    nav: [],
                    deptList: [],
                    letter: "",
                    defaultDeptCode: "",
                    selected: ""
                }) : (s.setData({
                    nav: o.nav,
                    deptList: o.lists,
                    letter: o.lists[0].indexLetter,
                    defaultDeptCode: o.lists[0].departments[0].dept_code,
                    selected: o.lists[0].departments[0].dept_code
                }, (function() {
                    s.queryDoctorList(a, s.data.defaultDeptCode)
                })), e.setStorage(i, o, 864e5))
            },
            fail: function() {
                s.setData({
                    nav: [],
                    deptList: [],
                    letter: "",
                    defaultDeptCode: "",
                    selected: ""
                })
            },
            complete: function() {
                s.setData({
                    dataInit: !0
                })
            }
        })
    },
    queryDoctorList: function(a, s) {
        var i = this,
            o = "doctor_list_" + a + "_" + s,
            n = e.getStorage(o);
        e.isNotEmpty(n) ? i.setData({
            dataInit2: !0,
            doctorList: n
        }) : (0, t._request)({
            url: "/api/doctor/queryDoctorList.json",
            data: {
                tapIndex: a,
                deptCode: s
            },
            success: function(t) {
                console.log(t);
                var a = t.list;
                "0000" != t.state || e.isEmpty(a) ? i.setData({
                    doctorList: []
                }) : (i.setData({
                    doctorList: a
                }), e.setStorage(o, a, 864e5))
            },
            complete: function() {
                i.setData({
                    dataInit2: !0
                })
            }
        })
    },
    doQuery: function(t) {
        var e = t.currentTarget.dataset.tapindex,
            a = t.currentTarget.dataset.deptcode;
        this.setData({
            selected: a
        }), this.queryDoctorList(e, a)
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
        e.navigateTo("/pages/zjjs/ssys/index?officeArrStr=" + JSON.stringify(this.data.officeArr))
    }
});