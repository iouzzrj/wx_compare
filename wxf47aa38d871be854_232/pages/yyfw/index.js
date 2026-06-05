
var n = getApp();
Page({
    data: {},
    onLoad: function(t) {
        this.setData({
            agreement: n.globalData.yyghInfoObj || {
                info_title: "预约服务协议",
                info_content: ""
            },
            selectVisitorStr: t.selectVisitor || {},
            tapIndex: t.tapIndex
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});