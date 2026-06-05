
var e = require("../../common/vendor.js"),
    t = require("../../common/assets.js");
Array || e.resolveComponent("template")();
var r = {
        __name: "voiceTip",
        props: {
            tipStr: {
                type: String,
                value: "手指上滑，取消发送"
            },
            maxTime: {
                type: Number,
                value: 60
            },
            time: {
                type: Number,
                value: 0
            }
        },
        setup: function(r) {
            return function(m, i) {
                return {
                    a: t._imports_0$34,
                    b: e.t(r.maxTime - r.time),
                    c: e.p({
                        "wx:if": "{{maxTime-time<=9}}"
                    }),
                    d: e.t(r.tipStr),
                    e: e.p({
                        "wx:else": ""
                    })
                }
            }
        }
    },
    m = e._export_sfc(r, [
        ["__scopeId", "data-v-a6d32394"]
    ]);
wx.createComponent(m);