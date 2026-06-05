
var e = require("../../common/vendor.js"),
    t = require("../../common/assets.js"),
    n = require("../../utils/util.js"),
    o = {
        __name: "select-people-add",
        props: {
            patient: {
                type: JSON,
                default: {}
            },
            selectPatient: {
                type: JSON,
                default: {}
            }
        },
        emits: ["selected"],
        setup: function(o, a) {
            var i = a.expose,
                r = o,
                c = a.emit;
            i({
                show: function() {
                    console.log(333), l.value = !0
                },
                hide: function() {
                    l.value = !1
                }
            }), getApp();
            var l = e.ref(!1),
                u = e.ref(""),
                s = e.reactive({}),
                p = e.reactive({});
             function f() {
                l.value = !1
            }
            return console.log("组件patient:", r.patient), console.log("组件selectPatient:", r.selectPatient), s = r.patient, p = r.selectPatient, console.log("patient:", s), console.log("isShow:", l.value), p && s.forEach((function(e, t) {
                    e.idCardNo == p.idCardNo && (u.value = t)
                })),
                function(o, a) {
                    return e.e({
                        a: e.unref(l)
                    }, e.unref(l) ? {
                        b: t._imports_0$10,
                        c: e.f(e.unref(s), (function(t, a, i) {
                            return {
                                a: e.t(t.clientName),
                                b: e.o((function() {
                                    return o.selectShow && o.selectShow.apply(o, arguments)
                                }), a),
                                c: e.t(e.unref(n.util)._hideIdCard(t.idCardNo)),
                                d: e.n(a == e.unref(u) ? "peopleName_active" : "peopleName"),
                                e: e.o((function(e) {
                                    return function(e, t) {
                                        u.value = t, l.value = !1, c("selected", {
                                            selectPatient: e
                                        })
                                    }(t, a)
                                }), a),
                                f: a
                            }
                        })),
                        d: t._imports_1$21,
                        e: e.o(f)
                    } : {})
                }
        }
    },
    a = e._export_sfc(o, [
        ["__scopeId", "data-v-9a271bfa"]
    ]);
wx.createComponent(a);