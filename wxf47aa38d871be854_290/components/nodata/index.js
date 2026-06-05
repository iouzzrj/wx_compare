
var t = require("../../common/vendor.js"),
    e = require("../../common/assets.js"),
    a = {
        __name: "index",
        props: {
            isData: {
                type: Boolean,
                default: !0
            },
            top: {
                type: String,
                default: "20"
            },
            content: {
                type: String,
                default: "暂无记录~"
            }
        },
        setup: function(a) {
            var n = a;
            return function(o, r) {
                return t.e({
                    a: a.isData
                }, a.isData ? {
                    b: e._imports_0$32
                } : {}, {
                    c: a.isData
                }, a.isData ? {
                    d: t.t(a.content)
                } : {}, {
                    e: n.top + "vh"
                })
            }
        }
    };
wx.createComponent(a);