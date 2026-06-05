
var t = require("../../utils/api"),
    e = require("../../utils/wxutil.js"),
    n = require("../../wxParse/wxParse.js");
Page({
    data: {
        id: 0,
        dataInit: !1
    },
    onLoad: function(t) {
        var e = t.contentId;
        this.getContentDetail(e)
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
    getContentDetail: function(a) {
        var i = this,
            o = "advise_" + a,
            s = e.getStorage(o);
        if (e.isNotEmpty(s)) return n.wxParse("articlea1", "html", s.info_content, i, 1), void i.setData({
            dataInit: !0,
            detailInfo: s
        });
        (0, t._request)({
            loading: !0,
            url: "/api/hosAdvise/getHisAdviseDetial.json",
            data: {
                contentId: a
            },
            success: function(t) {
                var a = t.data;
                e.isEmpty(a) ? i.setData({
                    detailInfo: {}
                }) : (n.wxParse("articlea1", "html", a.info_content, i, 1), i.setData({
                    detailInfo: a
                }), e.setStorage(o, a, 864e5))
            },
            fail: function() {
                i.setData({
                    detailInfo: {}
                })
            },
            complete: function() {
                i.setData({
                    dataInit: !0
                })
            }
        })
    }
});