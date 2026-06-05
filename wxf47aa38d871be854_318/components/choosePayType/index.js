
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
                f = e.ref(!1),
                i = e.ref(!0),
                a = e.ref(!1),
                s = e.ref(1);
             function c() {
                f.value = !1
            }
             function l(e) {
                console.log("选择支付类型", e), s.value = e, 1 == e ? (i.value = !0, a.value = !1) : (a.value = !0, i.value = !1)
            }
             function p() {
                u("go-pay", {
                    type: s.value
                })
            }
            return r({
                    show: function() {
                        f.value = !0
                    },
                    hide: function() {
                        f.value = !1
                    }
                }),
                function(t, r) {
                    return e.e({
                        a: e.unref(f)
                    }, e.unref(f) ? {
                        b: e.o(c, "bf"),
                        c: n._imports_0$9,
                        d: n._imports_1$21,
                        e: n._imports_2$17,
                        f: e.t("1" == o.selfRelation ? "医保移动支付" : "医保移动支付-亲情付"),
                        g: e.unref(i),
                        h: e.o((function(e) {
                            return l(1)
                        }), "0d"),
                        i: n._imports_3$9,
                        j: e.unref(a),
                        k: e.o((function(e) {
                            return l(2)
                        }), "06"),
                        l: e.o(p, "3f")
                    } : {})
                }
        }
    },
    t = e._export_sfc(o, [
        ["__scopeId", "data-v-96d1879f"]
    ]);
wx.createComponent(t);