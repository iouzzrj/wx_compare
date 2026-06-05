
var e = require("../../common/vendor.js"),
    n = require("../../common/assets.js"),
    o = {
        __name: "index",
        props: {
            selfRelation: {
                type: String,
                default: "1"
            }
        },
        emits: ["go-pay"],
        setup: function(o, t) {
            var r = t.expose,
                u = t.emit,
                i = e.ref(!1),
                f = e.ref(!0),
                a = e.ref(!1),
                s = e.ref(1);
             function c() {
                i.value = !1
            }
             function l(e) {
                console.log("选择支付类型", e), s.value = e, 1 == e ? (f.value = !0, a.value = !1) : (a.value = !0, f.value = !1)
            }
             function p() {
                u("go-pay", {
                    type: s.value
                })
            }
            return r({
                    show: function() {
                        i.value = !0
                    },
                    hide: function() {
                        i.value = !1
                    }
                }),
                function(t, r) {
                    return e.e({
                        a: e.unref(i)
                    }, e.unref(i) ? {
                        b: e.o(c),
                        c: n._imports_0$10,
                        d: n._imports_1$20,
                        e: n._imports_2$14,
                        f: e.t("1" == o.selfRelation ? "医保移动支付" : "医保移动支付-亲情付"),
                        g: e.unref(f),
                        h: e.o((function(e) {
                            return l(1)
                        })),
                        i: n._imports_3$8,
                        j: e.unref(a),
                        k: e.o((function(e) {
                            return l(2)
                        })),
                        l: e.o(p)
                    } : {})
                }
        }
    },
    t = e._export_sfc(o, [
        ["__scopeId", "data-v-96d1879f"]
    ]);
wx.createComponent(t);