
var t = require("../../utils/api"),
    n = require("../../utils/wxutil.js"),
    e = getApp();
Page({
    data: {
        contentInfoList: []
    },
    onLoad: function(n) {
        var o = this;
        (0, t._request)({
            loading: !1,
            url: "/api/hosAdvise/getHisAdviseList.json",
            method: "post",
            data: {
                typeId: "05"
            },
            success: function(t) {
                console.log(t), 0 == t.status && (e.globalData.noticeList = t.data, o.setData({
                    contentInfoList: t.data || []
                }))
            },
            complete: function() {}
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return n.getShareMessage()
    },
    toNotice: function(t) {
        var e = t.currentTarget.dataset.id,
            o = t.currentTarget.dataset.link;
        n.isNotEmpty(o) ? n.navigateToWebPage(o) : n.navigateTo("/pages/ggxq/index?contentId=" + e)
    }
});