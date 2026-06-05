
var e = require("../../common/vendor.js"),
    t = {
        __name: "i-icon",
        props: {
            type: {
                type: String,
                default: "mogujie"
            },
            size: {
                type: [Number, String],
                default: 26
            },
            color: {
                type: String,
                default: "#333333"
            }
        },
        setup: function(t) {
            return function(n, o) {
                return {
                    a: e.n("icon icon--" + t.type),
                    b: e.s("font-size:" + t.size + "rpx;color:" + t.color)
                }
            }
        }
    };
wx.createComponent(t);