
var t = require("../../../utils/api"),
    e = require("../../../wxParse/wxParse.js"),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        imgBase: a.getImgBase(),
        deptIntroduct: ""
    },
    onLoad: function(t) {
        this.setData({
            tapIndex: t.tapIndex,
            deptCode: t.deptCode,
            deptName: t.deptName
        });
        this._loadDeptIntroduct()
    },
    _loadDeptIntroduct: function() {
        var n = this,
            o = "dept_info_" + n.data.tapIndex + "_" + n.data.deptCode,
            d = a.getStorage(o);
        if (a.isNotEmpty(d)) return n.setData({
            dataInit: !0,
            deptInfo: d
        }), void(a.isNotEmpty(d.introduction) && e.wxParse("articlea1", "html", d.introduction, n, 1));
        (0, t._request)({
            dataInit: n.data.dataInit,
            url: "/api/dept/queryDeptIntroduct.json",
            data: {
                tapIndex: n.data.tapIndex,
                deptCode: n.data.deptCode
            },
            success: function(t) {
                var d = t.data;
                "0000" != t.state || a.isEmpty(d) ? n.setData({
                    deptInfo: {}
                }) : (n.setData({
                    deptInfo: d
                }), a.isNotEmpty(d.introduction) && e.wxParse("articlea1", "html", d.introduction, n, 1), a.setStorage(o, d, 864e5))
            },
            fail: function() {
                n.setData({
                    deptInfo: {}
                })
            },
            complete: function() {
                n.setData({
                    dataInit: !0
                })
            }
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return a.getShareMessage()
    }
});