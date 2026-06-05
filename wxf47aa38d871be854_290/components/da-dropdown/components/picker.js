
var e = require("../../../@babel/runtime/helpers/defineProperty"),
    n = require("../../../common/vendor.js"),
    l = require("../utils.js"),
    o = n.defineComponent({
        props: {
            dropdownItem: {
                type: Object,
                default: null
            },
            dropdownIndex: {
                type: Number
            }
        },
        emits: ["success"],
        setup: function(o, r) {
            var t = r.emit,
                u = n.ref([]),
                c = n.ref([]);
             function i(e) {
                var n, o = l.deepClone((null == e ? void 0 : e.options) || []);
                (null == o ? void 0 : o.length) ? (null == (n = e.value) ? void 0 : n.length) ? (u.value = [], c.value = [], function e(n, l) {
                    for (var o, r = 0; r < l.length; r++)
                        for (var t = l[r], i = 0; i < n.length; i++) {
                            var a = n[i];
                            if (t.value === a) {
                                t.checked = !0, u.value.push(t.value), c.value.push(l), (null == (o = t.children) ? void 0 : o.length) && e(n, t.children);
                                break
                            }
                        }
                }(e.value, o)) : (u.value.push("tmpValue"), c.value.push(o)) : (u.value = [], c.value = [])
            }
            return n.watch((function() {
                return o.dropdownItem
            }), (function(e) {
                i(e)
            }), {
                immediate: !0
            }), {
                viewCol: u,
                viewRow: c,
                handleSelect: function(n, r, i) {
                    var a, d, v, h = !1;
                    u.value.splice(r), u.value[r] = n.value, (null == (a = c.value[r]) ? void 0 : a.length) && c.value[r].forEach((function(e) {
                        e.checked = !1
                    })), n.checked = !0;
                    var p = (null == n ? void 0 : n.children) || null;
                    (null == p ? void 0 : p.length) ? (u.value[r + 1] = "tmpValue", c.value[r + 1] = p, h = !1) : (console.warn("最后一项", n), h = !0);
                    try {
                        (null == (d = c.value[r + 1]) ? void 0 : d.length) && c.value[r + 1].forEach((function(e) {
                            e.checked = !1
                        }))
                    } catch (e) {
                        console.warn("try clean row data", e)
                    }
                    if (h)
                        if (null == (v = o.dropdownItem) ? void 0 : v.prop) {
                            var f = e({}, o.dropdownItem.prop, l.deepClone(u.value));
                            t("success", f, u.value, o.dropdownIndex)
                        } else console.error("菜单项".concat(o.dropdownItem.title, "未定义prop，返回内容失败"))
                }
            }
        }
    }),
    r = n._export_sfc(o, [
        ["render", function(e, l, o, r, t, u) {
            return n.e({
                a: e.viewCol && e.viewCol.length
            }, e.viewCol && e.viewCol.length ? {
                b: n.f(e.viewCol, (function(l, o, r) {
                    return {
                        a: n.f(e.viewRow[o], (function(l, r, t) {
                            return n.e({
                                a: n.t(l.label),
                                b: l.children && l.children.length
                            }, (l.children && l.children.length, {}), {
                                c: l.checked && (!l.children || 0 === l.children.length)
                            }, (!l.checked || l.children && l.children.length, {}), {
                                d: n.n(l.checked ? "is-actived" : ""),
                                e: r,
                                f: n.o((function(n) {
                                    return e.handleSelect(l, o, r)
                                }), r)
                            })
                        })),
                        b: o
                    }
                }))
            } : {})
        }],
        ["__scopeId", "data-v-59131b8c"]
    ]);
wx.createComponent(r);