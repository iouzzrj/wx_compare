
var t = require("../../../utils/api"),
    o = require("../../../utils/wxutil.js"),
    e = require("../../../wxParse/wxParse.js");
Page({
    data: {
        dataInit: !1,
        deptDetailStatus: "0",
        deptCode: "",
        deptName: "",
        deptIntroduct: "",
        doctorArr: [],
        displayDoctorArr: []
    },
    onLoad: function(t) {
        this.setData({
            deptCode: t.deptCode,
            deptName: t.deptName,
            dataInit: !0
        });
        this._loadDeptIntroduct(), this._loadDoctorList()
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return o.getShareMessage()
    },
    changeDetail: function() {
        this.setData({
            deptDetailStatus: "0" == this.data.deptDetailStatus ? "1" : "0"
        })
    },
    _loadDeptIntroduct: function() {
        var a = this;
        (0, t._request)({
            dataInit: a.data.dataInit,
            url: "/api/dept/queryDeptIntroduct.json",
            data: {
                deptCode: a.data.deptCode
            },
            success: function(t) {
                if ("0000" == t.state) {
                    var d = t.data;
                    if (e.wxParse("articlea1", "html", t.data.introduction, a, 1), o.isEmpty(d.introduction)) return void a.setData({
                        deptIntroduct: ""
                    });
                    a.setData({
                        deptIntroduct: d.introduction
                    })
                }
            },
            fail: function() {},
            complete: function() {}
        })
    },
    _loadDoctorList: function() {
        var e = this;
        (0, t._request)({
            url: "/api/doctor/queryDoctorList.json",
            data: {
                deptCode: e.data.deptCode
            },
            success: function(t) {
                if ("0000" == t.state) {
                    var a = t.list;
                    if (!o.isEmpty(a)) {
                        for (var d = [], i = 0; i < a.length; i++) {
                            var r = a[i];
                            d.push({
                                officeId: r.dept_code,
                                officeName: e.data.deptName,
                                doctorId: r.doctor_code,
                                doctorName: r.doctor_name,
                                doctorTitle: r.doctor_title,
                                doctorPhoto: r.doctor_photo,
                                serviceSex: r.doctor_sex
                            })
                        }
                        e.setData({
                            doctorArr: d,
                            displayDoctorArr: o.arraySplit(d, 3, !0, {})
                        })
                    }
                }
            },
            complete: function() {}
        })
    }
});