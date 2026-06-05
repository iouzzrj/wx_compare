
require("../../utils/api");
var n = require("../../utils/wxutil.js");
require("../../wxParse/wxParse.js");
Page({
    data: {
        version: "0.0.0"
    },
    onLoad: function(n) {
        var o = wx.getAccountInfoSync();
        console.log(o), this.setData({
            version: o.miniProgram.version || "0.0.0"
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
    }
});