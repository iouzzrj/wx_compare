
var t = require("../../utils/wxutil.js");
Page({
    data: {
        scrollHeight: 0,
        placeholderHeight: 0,
        selectClassify: "1",
        selectView: "v_mzl",
        _v_mzl_bottom: 0,
        _v_zybbl_bottom: 0,
        _v_zybnl_bottom: 0
    },
    onLoad: function(t) {},
    onReady: function() {
        var e = this;
        t.selectElement("#v_zybbl", (function(s) {
            var a = t.getSystemInfo().windowHeight - 10,
                l = a - s.height;
            e.setData({
                scrollHeight: a,
                placeholderHeight: l
            })
        }), this), t.selectElement("#v_mzl", (function(t) {
            e.data._v_mzl_bottom = t.bottom - 10 - 10
        }), this), t.selectElement("#v_zybbl", (function(t) {
            e.data._v_zybbl_bottom = t.bottom - 10 - 10
        }), this)
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return t.getShareMessage()
    },
    changeClassify: function(t) {
        this.setData({
            selectClassify: t.currentTarget.dataset.classify,
            selectView: t.currentTarget.dataset.view
        })
    },
    doScroll: function(t) {
        var e = t.detail.scrollTop;
        e < this.data._v_mzl_bottom ? "1" != this.data.selectClassify && this.setData({
            selectClassify: "1"
        }) : e >= this.data._v_mzl_bottom && e < this.data._v_zybbl_bottom ? "2" != this.data.selectClassify && this.setData({
            selectClassify: "2"
        }) : e >= this.data._v_zybbl_bottom && e < this.data._v_zybnl_bottom ? "3" != this.data.selectClassify && this.setData({
            selectClassify: "3"
        }) : e >= this.data._v_zybnl_bottom && "4" != this.data.selectClassify && this.setData({
            selectClassify: "4"
        })
    }
});