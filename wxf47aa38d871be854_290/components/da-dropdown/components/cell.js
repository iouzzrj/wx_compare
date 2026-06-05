
var e = require("../../../@babel/runtime/helpers/defineProperty"),
    n = require("../../../common/vendor.js"),
    o = require("../utils.js"),
    r = n.defineComponent({
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
        setup: function(r, t) {
            var d = t.emit,
                c = n.ref([]),
                i = n.ref(!1);
            return n.watch((function() {
                return r.dropdownItem
            }), (function(e) {
                var n;
                (null == (n = null == e ? void 0 : e.options) ? void 0 : n.length) ? function(e, n) {
                    for (var r = o.deepClone(e), t = 0; t < r.length; t++) {
                        var d = r[t];
                        if (d.value === n) {
                            d.checked = !0;
                            break
                        }
                    }
                    c.value = r
                }(e.options, e.value) : c.value = [], i.value = (null == e ? void 0 : e.showIcon) || !1
            }), {
                immediate: !0,
                deep: !0
            }), {
                cellOptions: c,
                showIcon: i,
                handleSelect: function(n) {
                    var o;
                    if (!n.disabled)
                        if (null == (o = r.dropdownItem) ? void 0 : o.prop) {
                            var t = e({}, r.dropdownItem.prop, n.value);
                            d("success", t, n, r.dropdownIndex)
                        } else console.error("菜单项".concat(r.dropdownItem.title, "未定义prop，返回内容失败"))
                }
            }
        }
    }),
    t = n._export_sfc(r, [
        ["render", function(e, o, r, t, d, c) {
            return {
                a: n.f(e.cellOptions, (function(o, r, t) {
                    return n.e({
                        a: n.t(o.label),
                        b: n.t(o.suffix),
                        c: o.checked && e.showIcon
                    }, (o.checked && e.showIcon, {}), {
                        d: n.n(o.checked ? "is-actived" : ""),
                        e: n.n(o.disabled ? "is-disabled" : ""),
                        f: r,
                        g: n.o((function(n) {
                            return e.handleSelect(o)
                        }), r)
                    })
                }))
            }
        }],
        ["__scopeId", "data-v-b2bf96d3"]
    ]);
wx.createComponent(t);