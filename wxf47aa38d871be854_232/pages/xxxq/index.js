
var t = require("../../utils/api"),
    e = require("../../utils/wxutil.js"),
    a = require("../../wxParse/wxParse.js");
Page({
    data: {
        id: 0,
        detailInfo: {},
        dataInit: !1
    },
    onLoad: function(t) {
        var e = t.noticeId;
        this.getNoticeDetail(e)
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
    getNoticeDetail: function(n) {
        var i = this,
            o = "notice_" + n,
            s = e.getStorage(o);
        if (e.isNotEmpty(s)) return a.wxParse("articlea1", "html", s.content, i, 1), void i.setData({
            dataInit: !0,
            detailInfo: s
        });
        (0, t._request)({
            loading: !0,
            url: "/api/hosAdvise/queryNoticeDetail.json",
            data: {
                noticeId: n
            },
            success: function(t) {
                var n = t.data;
                console.log("noticeContent:", n), e.isEmpty(n) ? i.setData({
                    detailInfo: {}
                }) : (a.wxParse("articlea1", "html", n.content, i, 1), i.setData({
                    detailInfo: n
                }), e.setStorage(o, n, 36e5))
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