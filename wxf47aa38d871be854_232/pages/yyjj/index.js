
var e = require("../../utils/wxutil.js");
Page({
    data: {
        scrollHeight: 0,
        selectTypeItem: "1"
    },
    onLoad: function(e) {},
    onReady: function() {
        this.setData({
            scrollHeight: e.getSystemInfo().windowHeight - 57
        })
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    changeTypeItem: function(e) {
        this.setData({
            selectTypeItem: e.currentTarget.dataset.id
        })
    },
    doCallPhone: function(t) {
        e.makePhoneCall(t.currentTarget.dataset.phone)
    }
});