
var t = require("../../../utils/api"),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        dataInit: !1,
        jlxq: ""
    },
    onLoad: function(e) {
        if (a.setNavigationBarTitle("挂号单"), a.isEmpty(e.recordId)) this.setData({
            jlxq: "",
            visitorRecharge: !1
        });
        else {
            var i = this;
            (0, t._request)({
                url: "/api/appointmentRecord/queryAppointmentDetails.json",
                data: {
                    recordId: e.recordId
                },
                success: function(t) {
                    0 == t.status ? i.setData({
                        jlxq: t.data,
                        visitorRecharge: !0
                    }) : i.setData({
                        jlxq: "",
                        visitorRecharge: !1
                    })
                },
                fail: function() {},
                complete: function() {
                    i.setData({
                        dataInit: !0
                    })
                }
            })
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    _queryRegister: function() {
        if (a.isEmpty(this.data.recordId)) this.setData({
            dataInit: !0
        });
        else {
            var e = this;
            (0, t._request)({
                url: "/api/appointmentRecord/queryAppointmentDetails.json",
                data: {
                    recordId: this.data.recordId
                },
                success: function(t) {
                    0 == t.status ? e.setData({
                        jlxq: t.data,
                        visitorRecharge: !0
                    }) : e.setData({
                        jlxq: "",
                        visitorRecharge: !1
                    })
                },
                fail: function() {},
                complete: function() {
                    e.setData({
                        dataInit: !0
                    })
                }
            })
        }
    },
    toReturn: function() {
        a.switchTab("/pages/index/index")
    },
    daohang: function() {
        console.log(this.data.jlxq);
        var t = this.data.jlxq.deptId,
            e = "pages/index?id=Dx4EVOZfd4&poi=" + t + "&appKey=KRzcpL6OH5";
        1 == this.data.jlxq.dist && (e = "pages/index?id=QkNOhuFUkR&poi=" + t + "&appKey=KRzcpL6OH5"), a.navigateToMiniProgram("wx8735a8a39cf58b5e", e)
    }
});