
var n = require("../../../utils/wxutil.js");
Page({
    data: {
        status: !0
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    doConfirm: function() {
        n.reLaunch("/pages/index/index")
    }
});