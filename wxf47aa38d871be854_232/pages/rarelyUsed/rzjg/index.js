
Page({
    data: {
        dataInit: !1,
        result: !0,
        type: ""
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            type: e.type,
            result: e.result,
            message: e.message,
            dataInit: !0,
            phoneLable: e.phoneLable,
            phone: e.phone
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goback: function() {
        wx.switchTab({
            url: "/pages/index/index"
        })
    },
    fillagain: function() {
        "0" == this.data.type ? wx.redirectTo({
            url: "/pages/rarelyUsed/xxtx/index?phoneLable=" + this.data.phoneLable + "&phone=" + this.data.phone + "&type=" + this.data.type
        }) : wx.redirectTo({
            url: "/pages/rarelyUsed/xxtx/index?type=" + this.data.type
        })
    }
});