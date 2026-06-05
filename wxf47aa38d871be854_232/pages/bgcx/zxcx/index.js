
require("../../../utils/api");
var t = require("../../../utils/wxutil.js");
Page({
    data: {
        ok: !1,
        dataInit: !0,
        dataArr: [],
        visitor: {},
        selectVisitor: {},
        selectIndex: [],
        index: 1
    },
    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: "1" == a.index ? "检验列表" : "检查列表"
        }), t.isEmpty(a.dataArr) ? this.setData({
            index: a.index
        }) : this.setData({
            dataArr: JSON.parse(a.dataArr) || a.dataArr,
            index: a.index
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    toJyDetail: function(a) {
        t.navigateTo("/pages/bgcx/jybg/index?dataArr=" + JSON.stringify(a.currentTarget.dataset.item))
    },
    toJcDetail: function(a) {
        t.navigateTo("/pages/bgcx/jcbg/index?dataArr=" + [])
    }
});