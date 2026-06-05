
Page({
    data: {
        isClose: !0
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doOpen: function() {
        this.setData({
            isClose: !this.data.isClose
        })
    }
});