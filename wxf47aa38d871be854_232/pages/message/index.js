
var e = require("../../utils/util.js"),
    t = require("../../utils/http.js"),
    n = require("../../utils/api.js");
Page({
    data: {
        messageGroupArr: [],
        dataInit: !0,
        isRegistered: !1,
        num: 0,
        newArray4: [],
        newArray5: []
    },
    onLoad: function(e) {
        this.setData({
            isRegistered: (0, n.getGlobalRegistered)()
        }), console.log(this.data.isRegistered, "是否实名")
    },
    onShow: function() {},
    groupList: function(e) {
        var t = [],
            n = e.filter((function(e, t, n) {
                return "01-001" == e.message_type || "01-002" == e.message_type || "01-003" == e.message_type || "01-004" == e.message_type || "01-005" == e.message_type
            })),
            i = e.filter((function(e, t, n) {
                return "01-008" == e.message_type || "01-009" == e.message_type
            })),
            r = e.filter((function(e, t, n) {
                return "01-006" == e.message_type
            })),
            s = e.filter((function(e, t, n) {
                return "01-007" == e.message_type
            })),
            o = e.filter((function(e, t, n) {
                return "03-004" == e.message_type || "03-006" == e.message_type || "03-007" == e.message_type
            }));
        if (n.length > 0) {
            n.sort((function(e, t) {
                return e.time < t.time ? 1 : -1
            }));
            var a = 0;
            for (var u in n) a += n[u].not_read_size;
            n[0].num = a, t.push(n)
        }
        if (i.length > 0) {
            i.sort((function(e, t) {
                return e.time < t.time ? 1 : -1
            }));
            var l = 0;
            for (var f in i) l += i[f].not_read_size;
            i[0].num = l, t.push(i)
        }
        if (r.length > 0) {
            r.sort((function(e, t) {
                return e.time < t.time ? 1 : -1
            }));
            var g = 0;
            for (var c in r) g += r[c].not_read_size;
            r[0].num = g, t.push(r)
        }
        if (s.length > 0) {
            s.sort((function(e, t) {
                return e.time < t.time ? 1 : -1
            }));
            var m = 0;
            for (var d in s) m += s[d].not_read_size;
            s[0].num = m, t.push(s)
        }
        if (o.length > 0) {
            o.sort((function(e, t) {
                return e.time < t.time ? 1 : -1
            }));
            var h = 0;
            for (var p in o) h += o[p].not_read_size;
            o[0].num = h, t.push(o)
        }
        return t
    },
    clickGo: function(t) {
        var n = 1 == t.currentTarget.dataset.id ? this.data.newArray4 : this.data.newArray5;
        for (var i in n) n[i].length > 0 && (n[i][0].isShow = !1);
        1 == t.currentTarget.dataset.id ? this.setData({
            newArray4: n
        }) : this.setData({
            newArray5: n
        });
        var r, s = t.currentTarget.dataset.index,
            o = t.currentTarget.dataset.indexi;
        if (console.log(s), console.log(o), 0 == s) r = "01-001,01-002,01-003,01-004,01-005";
        else {
            if (1 == s) return void wx.showToast({
                title: "暂未开放!",
                icon: "none"
            });
            if (2 == s) return void wx.showToast({
                title: "暂未开放!",
                icon: "none"
            });
            if (3 == s) r = "01-007";
            else if (4 == s) return void wx.showToast({
                title: "暂未开放!",
                icon: "none"
            })
        }
        console.log(t), console.log(r);
        var a = {
            messageTpye: r
        };
        (0, e.navigateTo)("/message-model/pages/msgDetails/index", a)
    },
    clickReadAll: function() {
        var e = this;
        wx.showToast({
            title: "加载中...",
            icon: "loading"
        });
        (0, t.setReadBatch)({
            messageType: "01-001,01-002,01-003,01-004,01-005,01-007,01-008,01-009,01-006,03-004,03-006,03-007"
        }).then((function(t) {
            console.log(t), e.onShow()
        }))
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});