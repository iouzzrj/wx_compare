
getApp();
var n = require("../../utils/wxutil.js");
Page({
    data: {
        content: "",
        imgBase: n.getImgBase()
    },
    onLoad: function(o) {
        this.setData({
            content: n.getStorage("out-of-service")
        })
    },
    onReady: function() {
        n.hideHomeButton()
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doExit: function() {
        n.exitMiniProgram()
    }
});