
require("../../../utils/util");
Page({
    data: {
        result: {}
    },
    onLoad: function(n) {
        console.log(n);
        var o = JSON.parse(n.result) || {};
        console.log(o), this.setData({
            result: o
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goBack: function() {
        wx.switchTab({
            url: "/pages/index/index"
        })
    },
    checkRecord: function() {
        wx.reLaunch({
            url: "/pages/grzx/index?page=" + encodeURIComponent("/pages/bayy/record/index")
        })
    }
});