
var e = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../common/vendor.js"),
    o = require("../utils.js"),
    t = n.defineComponent({
        components: {
            PartDropdownFooter: function() {
                return "./part-dropdown-footer.js"
            }
        },
        props: {
            dropdownItem: {
                type: Object,
                default: null
            },
            dropdownIndex: {
                type: Number
            }
        },
        emits: ["success", "change"],
        setup: function(t, r) {
            var l = r.emit,
                i = n.ref(null);
             function a(e) {
                var n, t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = e.options,
                    a = void 0 === l ? [] : l,
                    u = e.value,
                    d = void 0 === u ? {} : u;
                if (null == a ? void 0 : a.length) {
                    for (var c = o.deepClone(a), p = function() {
                            var e = c[v];
                            !0 === r || !d[e.prop] && 0 !== d[e.prop] || (e.value = d[e.prop]), "checkbox" === e.type && (null == (n = e.value) ? void 0 : n.length) && (null == (t = e.options) ? void 0 : t.length) && e.options.forEach((function(n) {
                                var o;
                                n.isActived = null == (o = e.value) ? void 0 : o.includes(n.value)
                            }))
                        }, v = 0; v < c.length; v++) p();
                    i.value = c
                } else i.value = []
            }
            return n.watch((function() {
                return t.dropdownItem
            }), (function(e) {
                a(e || null)
            }), {
                immediate: !0
            }), {
                filterList: i,
                handleRadioChange: function(e, n, o, t) {
                    e.value = n.value
                },
                handleCheckboxChange: function(e, n, o, t) {
                    var r, l;
                    if (n.isActived)
                        if (n.isActived = !1, null == (r = e.value) ? void 0 : r.length) {
                            var i = e.value.findIndex((function(e) {
                                return e === n.value
                            }));
                            e.value.splice(i, 1)
                        } else e.value = [];
                    else(null == (l = e.value) ? void 0 : l.length) ? e.value.push(n.value) : e.value = [n.value], n.isActived = !0
                },
                handleSliderChange: function(e, n, o) {
                    var t = e.detail.value;
                    n.value = t
                },
                handleReset: function() {
                    a(t.dropdownItem || [], !0)
                },
                handleConfirm: function() {
                    var n, r = o.deepClone(i.value);
                    if (null == (n = t.dropdownItem) ? void 0 : n.prop) {
                        for (var a = {}, u = 0; u < r.length; u++) {
                            var d = r[u];
                            (d.value || 0 === d.value) && (a[d.prop] = d.value)
                        }
                        var c = e({}, t.dropdownItem.prop, a);
                        l("success", c, a, t.dropdownIndex)
                    } else console.error("菜单项".concat(t.dropdownItem.title, "未定义prop，返回内容失败"))
                }
            }
        }
    });
Array || n.resolveComponent("PartDropdownFooter")();
var r = n._export_sfc(t, [
    ["render", function(e, o, t, r, l, i) {
        return {
            a: n.f(e.filterList, (function(o, t, r) {
                return n.e({
                    a: n.t(o.title),
                    b: "radio" === o.type
                }, "radio" === o.type ? {
                    c: n.f(o.options, (function(r, l, i) {
                        return {
                            a: n.t(r.label),
                            b: n.n(o.value === r.value ? "is-actived" : ""),
                            c: l,
                            d: n.o((function(n) {
                                return e.handleRadioChange(o, r, l, t)
                            }), l)
                        }
                    }))
                } : "checkbox" === o.type ? {
                    e: n.f(o.options, (function(r, l, i) {
                        return {
                            a: n.t(r.label),
                            b: n.n(r.isActived ? "is-actived" : ""),
                            c: l,
                            d: n.o((function(n) {
                                return e.handleCheckboxChange(o, r, l, t)
                            }), l)
                        }
                    }))
                } : "slider" === o.type ? {
                    g: o.value,
                    h: o.componentProps.min || 0,
                    i: o.componentProps.max || 100,
                    j: o.componentProps.step || 1,
                    k: o.componentProps.activeColor,
                    l: o.componentProps.showValue,
                    m: n.o((function(n) {
                        return e.handleSliderChange(n, o, t)
                    }), t)
                } : {}, {
                    d: "checkbox" === o.type,
                    f: "slider" === o.type,
                    n: t
                })
            })),
            b: n.o((function(n) {
                return e.handleReset()
            })),
            c: n.o((function(n) {
                return e.handleConfirm()
            })),
            d: n.p({
                resetText: e.dropdownItem.resetText,
                confirmText: e.dropdownItem.confirmText
            })
        }
    }],
    ["__scopeId", "data-v-49f4ecbc"]
]);
wx.createComponent(r);