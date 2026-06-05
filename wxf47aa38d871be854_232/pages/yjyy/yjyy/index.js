
var e = require("../../../@babel/runtime/helpers/defineProperty"),
    t = require("../../../utils/api"),
    i = require("../../../utils/wxutil.js");
Page({
    data: {
        index: 1,
        visitors: [],
        selectVisitor: {},
        items: [{
            year: "2018-06-03",
            time: "14:04:12",
            recharge_money: "21.00",
            refund_money: "22.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }, {
            year: "2018-06-21",
            time: "10:33:12",
            recharge_money: "50.00",
            refund_money: "50.00",
            checked: !1
        }]
    },
    onLoad: function(e) {
        var a = {},
            s = (0, t.getGlobalCardInfo)();
        if (i.isEmpty(a))
            for (var n = 0; n < s.length; n++)
                if ("1" == s[n].isDefaultFlag) {
                    a = s[n];
                    break
                }
        i.isEmpty(a) && (a = s[0]), this.setData({
            visitor: s,
            selectVisitor: a
        })
    },
    onReady: function() {
        this._initSelector()
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    repeat: function(t) {
        for (var i = 0; i < this.data.items.length; i++) {
            var a = "items[" + i + "].checked";
            this.setData(e(e({}, a, t), "has", t))
        }
    },
    repeat_b: function(t, i) {
        for (var a = 0; a < this.data.items.length; a++) {
            var s = "items[" + i + "].checked";
            this.setData(e({}, s, t))
        }
        return this.data.items[i].checked
    },
    selectAll: function(e) {
        var t = this.data.selectAll;
        this.setData({
            selectAll: !t
        }), this.data.selectAll ? this.repeat(!0) : this.repeat(!1)
    },
    select: function(e) {
        var t = e.currentTarget.dataset.index,
            i = this.data.items[t].checked;
        this.repeat_b(!i, t);
        for (var a = [], s = this.data.items.length, n = 0; n < s; n++) this.data.items[n].checked && a.push(n);
        0 == a.length ? this.setData({
            has: !1,
            selectAll: !1
        }) : a.length > 0 && a.length < this.data.items.length ? this.setData({
            has: !0,
            selectAll: !1
        }) : this.setData({
            has: !0,
            selectAll: !0
        })
    },
    toSelect: function() {
        this.selector.show()
    },
    doSelect: function(e) {
        var t = this;
        this.invalidateData(), this.setData({
            selectVisitor: this.data.visitor[e.detail.value]
        }, (function() {
            t._loadPageRecord()
        }))
    },
    _initSelector: function() {
        return i.isEmpty(this.selector) && (this.selector = i.selectComponent(this, "#selector")), i.isNotEmpty(this.selector)
    },
    cutReservation: function(e) {
        this.setData({
            index: e.currentTarget.dataset.index
        })
    },
    goOder: function() {
        i.navigateTo("/pages/yjyy/yyqr/index")
    }
});