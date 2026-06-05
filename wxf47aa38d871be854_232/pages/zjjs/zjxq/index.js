
var t = require("../../../utils/api"),
    o = require("../../../utils/wxutil.js"),
    e = require("../../../wxParse/wxParse.js");
Page({
    data: {
        deptIntroduct: !0
    },
    onLoad: function(t) {
        this.setData({
            tapIndex: t.tapIndex,
            deptCode: t.deptCode,
            doctorCode: t.doctorCode,
            doctorTitle: t.doctorTitle
        })
    },
    onReady: function() {},
    onShow: function() {
        var a = this,
            d = "doctor_info_" + a.data.tapIndex + "_" + a.data.deptCode + "_" + a.data.doctorCode,
            n = o.getStorage(d);
        if (o.isNotEmpty(n)) return a.setData({
            dataInit: !0,
            doctorInfo: n
        }), void(o.isNotEmpty(n.introduction) && e.wxParse("articlea1", "html", n.introduction, a, 1));
        (0, t._request)({
            dataInit: a.data.dataInit,
            url: "/api/doctor/queryDoctorIntroduct.json",
            data: {
                tapIndex: a.data.tapIndex,
                deptCode: a.data.deptCode,
                doctorCode: a.data.doctorCode
            },
            success: function(t) {
                var n = t.data;
                "0000" != t.state || o.isEmpty(n) ? a.setData({
                    doctorInfo: {}
                }) : (a.setData({
                    doctorInfo: n
                }), o.isNotEmpty(n.introduction) && e.wxParse("articlea1", "html", n.introduction, a, 1), o.setStorage(d, n, 864e5))
            },
            fail: function() {
                a.setData({
                    doctorInfo: {}
                })
            },
            complete: function() {
                a.setData({
                    dataInit: !0
                })
            }
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return o.getShareMessage()
    },
    doJump: function() {
        var e = this;
        o.showLoading(), (0, t._request)({
            loading: !1,
            url: "/api/appointmentInfo/getDoctorInfo.json",
            data: {
                deptCode: e.data.depid
            },
            method: "post",
            success: function(t) {
                var a = t.data;
                if ("0" != t.status || 0 == a.length) return o.hideLoading(), void o.showToast({
                    title: "此日暂无出诊信息"
                });
                for (var d = {}, n = 0; n < a.length; n++) e.data.docid == a[n].doctId && (d = a[n]);
                if (o.jsonObjectIsEmpty(d)) o.hideLoading(), o.showToast({
                    title: "此日暂无出诊信息"
                });
                else {
                    var i = d.scheduleId,
                        r = {
                            deptCode: e.data.depid,
                            deptName: e.data.doctorInfo.dept_name
                        };
                    o.navigateTo("/pages/dtgh/xzhy/index?schedule=" + encodeURIComponent(i) + "&deptObj=" + encodeURIComponent(JSON.stringify(r)) + "&doctInfo=" + encodeURIComponent(JSON.stringify(d)))
                }
            },
            complete: function() {}
        })
    }
});