
var e = require("../../../common/vendor.js"),
    t = e.defineComponent({
        name: "PartDropdownFooter",
        props: {
            resetText: {
                type: String,
                default: "重置"
            },
            confirmText: {
                type: String,
                default: "确定"
            }
        },
        emits: ["confirm", "reset"],
        setup: function(e, t) {
            var n = t.emit;
            return {
                handleReset: function() {
                    n("reset")
                },
                handleConfirm: function() {
                    n("confirm")
                }
            }
        }
    }),
    n = e._export_sfc(t, [
        ["render", function(t, n, r, o, i, c) {
            return {
                a: e.t(t.resetText || "重置"),
                b: e.o((function(e) {
                    return t.handleReset()
                }), "31"),
                c: e.t(t.confirmText || "确定"),
                d: e.o((function(e) {
                    return t.handleConfirm()
                }), "40")
            }
        }],
        ["__scopeId", "data-v-b0b9bbcc"]
    ]);
wx.createComponent(n);