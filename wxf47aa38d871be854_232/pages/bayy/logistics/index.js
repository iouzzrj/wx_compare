
var o = require("../../../utils/http");
Page({
    data: {
        orderNo: "",
        takePhoneNo: "",
        deliveryTime: "",
        deliverOrderNo: "",
        dataArray: []
    },
    onLoad: function(o) {
        console.log(o), this.getWuLiuInfo(o.orderId)
    },
    getWuLiuInfo: function(t) {
        var n = this,
            e = {
                orderId: t
            };
        wx.showLoading({
            title: "加载中...",
            mask: !0,
            icon: "none"
        }), (0, o.queryOrderTrajectory)(!0, e).then((function(o) {
            if (console.log("查询物流", o), 0 == o.status) {
                if (0 == o.data.logistics.mailInfoCount) return wx.showToast({
                    title: "医院尚未发送",
                    icon: "none"
                }), void n.setData({
                    trajectory: "未发送快递"
                });
                for (var t = o.data.logistics.mailInfos, e = [], a = 0; a < t.length; a++) {
                    var i = t[a];
                    e.push({
                        context: i.opDesc,
                        time: i.opTime
                    })
                }
                n.setData({
                    trajectory: "已发送快递",
                    dataArray: e
                })
            }
        })).catch((function(o) {
            console.log(o), wx.showToast({
                title: "系统异常，请重新再试!",
                icon: "none"
            }), n.setData({
                isTap: !0
            })
        }))
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});