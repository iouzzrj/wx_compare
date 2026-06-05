
var e = require("../../common/vendor.js"),
    t = require("../../common/assets.js"),
    n = require("../../utils/util.js"),
    u = {
        __name: "index",
        props: {
            patient: {
                type: JSON,
                default: {}
            },
            listIndex: {
                type: Number,
                default: 0
            },
            isShowScreening: {
                type: Boolean,
                default: !1
            },
            waiNum: {
                type: Number,
                default: 0
            },
            defaultStatesNum: {
                type: String,
                default: ""
            },
            statesList: {
                type: Array,
                default: null
            },
            dateRange: {
                type: Number,
                default: 0
            },
            addShow: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["show", "selected", "handleGetDate", "addPatient"],
        setup: function(u, a) {
            var l = a.emit,
                i = u,
                r = l,
                o = e.ref(0),
                f = e.ref(0),
                s = e.ref(!1),
                c = e.ref(!1),
                v = e.ref(!1),
                d = e.reactive({}),
                m = e.ref(0),
                g = e.ref("");
            g.value = i.defaultStatesNum, console.log("statesActiveValue:", g.value), m.value = i.waiNum, console.log("showDateSelect:", v.value);
            var h = e.ref(!1);
            console.log("组件isShowScreening:", i.isShowScreening), h.value = i.isShowScreening;
            var p = i.dateRange,
                w = e.ref(i.addShow);
            e.watchEffect((function() {
                h.value = i.isShowScreening
            }));
            var S = function(e) {
                var t = new Date((new Date).getTime() - 24 * e * 60 * 60 * 1e3),
                    n = t.getFullYear(),
                    u = t.getMonth() + 1,
                    a = t.getDate();
                return u = u < 10 ? "0" + u : u, a = a < 10 ? "0" + a : a, n.toString() + "-" + u.toString() + "-" + a.toString()
            };
             function x() {
                r("addPatient")
            }
            var B = function() {
                    s.value = !c.value, c.value = !c.value, v.value = !1, r("show")
                },
                _ = function() {
                    s.value = !v.value, c.value = !1, v.value = !v.value
                },
                N = function(e) {
                    console.log("startTimeChange:", e), 0 != p && n.util.twoDateTimeDifference(e.detail.value, P.value) > p ? n.util.showToast({
                        title: "查询时间不能大于" + p + "天"
                    }) : A.value = e.detail.value
                },
                D = function(e) {
                    console.log("endTimeChange:", e), 0 != p && n.util.twoDateTimeDifference(A.value, e.detail.value) > p ? n.util.showToast({
                        title: "查询时间不能大于" + p + "天"
                    }) : P.value = e.detail.value
                },
                T = function(e) {
                    m.value = e, A.value = S(e), console.log("startTime:", A), P.value = S(0)
                },
                y = function() {
                    A.value = "", P.value = "", m.value = "", g.value = i.defaultStatesNum
                },
                b = function() {
                    if ("" != A.value)
                        if ("" != P.value) {
                            s.value = !1, v.value = !1;
                            var t = {
                                startTime: A.value,
                                endTime: P.value,
                                defaultStates: g.value,
                                waiNum: m.value
                            };
                            r("handleGetDate", t)
                        } else e.index.showToast({
                            title: "请选择结束时间！",
                            icon: "none"
                        });
                    else e.index.showToast({
                        title: "请选择开始时间！",
                        icon: "none"
                    })
                },
                C = i.patient;
            console.log("bindPatients:", C);
            var I = i.patient;
            console.log("组件patient:", I), C.forEach((function(e, t) {
                "1" == e.isDefaultFlag && (o.value = i.listIndex ? i.listIndex : t, d = i.listIndex ? C[i.listIndex] : e)
            })), n.util._isEmpty(d) && C.length > 0 && (d = C[0]), console.log("selectPatient:", d);
            var A = e.ref("");
            A.value = S(m.value);
            var P = e.ref("");
            return P.value = S(0), e.onMounted((function() {
                    r("selected", {
                        selectPatient: d,
                        first: !0
                    })
                })),
                function(a, l) {
                    return e.e({
                        a: e.unref(s),
                        b: e.t(e.unref(d).clientName),
                        c: e.t(e.unref(n.util)._hideIdCard(e.unref(d).idCardNo)),
                        d: t._imports_0$33,
                        e: e.o(B),
                        f: e.unref(h)
                    }, e.unref(h) ? {
                        g: t._imports_1$19,
                        h: e.o(_)
                    } : {}, {
                        i: e.f(e.unref(I), (function(t, u, a) {
                            return e.e({
                                a: e.t(t.clientName),
                                b: e.t(e.unref(n.util)._hideIdCard(t.idCardNo)),
                                c: u == e.unref(o) || ""
                            }, (e.unref(o), {}), {
                                d: e.n(u == e.unref(o) ? "listbox active2" : "listbox"),
                                e: e.o((function(e) {
                                    return function(e) {
                                        console.log("index:", e);
                                        var t = I[e];
                                        d = t, s.value = !1, c.value = !1, v.value = !1, o.value = e, r("selected", {
                                            selectPatient: d
                                        })
                                    }(u)
                                }), u),
                                f: u
                            })
                        })),
                        j: e.unref(I).length < 3 && w.value
                    }, e.unref(I).length < 3 && w.value ? {
                        k: t._imports_2$13,
                        l: e.t(a.patientContent),
                        m: e.o(x)
                    } : {}, {
                        n: e.n(e.unref(c) ? "slidown" : "sliup"),
                        o: e.unref(c),
                        p: e.unref(v)
                    }, e.unref(v) ? e.e({
                        q: 1 == e.unref(f) || 0 == e.unref(f)
                    }, 1 == e.unref(f) || 0 == e.unref(f) ? {
                        r: e.n(0 == e.unref(m) ? "selectBtnActive selectBtn" : "selectBtn"),
                        s: e.o((function(e) {
                            return T(0)
                        }))
                    } : {}, {
                        t: 0 == e.unref(f)
                    }, 0 == e.unref(f) ? {
                        v: e.n(7 == e.unref(m) ? "selectBtnActive selectBtn" : "selectBtn"),
                        w: e.o((function(e) {
                            return T(7)
                        }))
                    } : {}, {
                        x: 1 == e.unref(f)
                    }, 1 == e.unref(f) ? {
                        y: e.n(15 == e.unref(m) ? "selectBtnActive selectBtn" : "selectBtn"),
                        z: e.o((function(e) {
                            return T(15)
                        }))
                    } : {}, {
                        A: 1 == e.unref(f) || 0 == e.unref(f)
                    }, 1 == e.unref(f) || 0 == e.unref(f) ? {
                        B: e.n(30 == e.unref(m) ? "selectBtnActive selectBtn" : "selectBtn"),
                        C: e.o((function(e) {
                            return T(30)
                        }))
                    } : {}, {
                        D: e.t(e.unref(A) || "请选择时间"),
                        E: e.unref(A),
                        F: e.o(N),
                        G: e.t(e.unref(P) || "请选择时间"),
                        H: e.unref(P),
                        I: e.o(D),
                        J: u.statesList
                    }, u.statesList ? {
                        K: e.f(u.statesList, (function(t, n, u) {
                            return {
                                a: e.t(t.title),
                                b: e.n(e.unref(g) == t.value ? "statesActive" : ""),
                                c: e.o((function(e) {
                                    return function(e) {
                                        g.value = e.value
                                    }(t)
                                }), n),
                                d: e.s(t.title.length < 6 ? "width: 180rpx!important" : "width: 150px!important"),
                                e: n
                            }
                        }))
                    } : {}, {
                        L: e.o(y),
                        M: e.o(b)
                    }) : {})
                }
        }
    },
    a = e._export_sfc(u, [
        ["__scopeId", "data-v-4cc7924b"]
    ]);
wx.createComponent(a);