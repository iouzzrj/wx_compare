
var e = require("../../../utils/wxutil.js");
Page({
    data: {
        officeArr: [],
        searchResultArr: [],
        showSearchResult: !1,
        tapIndex: "",
        area: ""
    },
    onLoad: function(e) {
        var t = e.officeArrStr && JSON.parse(e.officeArrStr) || [];
        this.setData({
            dataInit: !0,
            officeArr: t,
            searchResultArr: t,
            selectVisitorStr: e.selectVisitor || {},
            tapIndex: e.tapIndex,
            area: e.area || ""
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareMessage()
    },
    doSearch: function(t) {
        var a = t.detail.value;
        e.isEmpty(a) ? this.setData({
            searchResultArr: this.data.officeArr
        }) : this.setData({
            searchResultArr: e.searchByKey(this.data.officeArr, "deptName", a)
        })
    },
    doReadySearch: function() {
        this.setData({
            showSearchResult: !1
        })
    },
    doConfirmSearch: function() {
        this.setData({
            showSearchResult: !0
        })
    }
});