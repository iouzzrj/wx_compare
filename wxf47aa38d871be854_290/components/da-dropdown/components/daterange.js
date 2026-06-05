
var e = require("../../../@babel/runtime/helpers/defineProperty"),
    t = require("../../../common/vendor.js"),
    n = require("../utils.js"),
    a = t.defineComponent({
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
        emits: ["success"],
        setup: function(a, r) {
            var o = r.emit,
                d = t.ref(null),
                l = t.ref(""),
                u = t.ref([{
                    value: "-7",
                    label: "本周"
                }, {
                    value: "-14",
                    label: "上周"
                }, {
                    value: "-30",
                    label: "本月"
                }, {
                    value: "-60",
                    label: "上月"
                }, {
                    value: "7",
                    label: "近7天"
                }, {
                    value: "15",
                    label: "近15天"
                }, {
                    value: "30",
                    label: "近30天"
                }]);
             function i(e) {
                var t, a, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = n.deepClone(e || null);
                !0 === r ? (d.value = {
                    start: "",
                    end: ""
                }, l.value = "") : d.value = {
                    start: (null == (t = o.value) ? void 0 : t.start) || "",
                    end: (null == (a = o.value) ? void 0 : a.end) || ""
                }
            }
            return t.watch((function() {
                return a.dropdownItem
            }), (function(e) {
                i(e)
            }), {
                immediate: !0
            }), {
                daterange: d,
                datetag: l,
                dateTagList: u,
                handleStartDate: function(e) {
                    d.value.start = e.detail.value, d.value.end = "", l.value = ""
                },
                handleEndDate: function(e) {
                    var t;
                    (null == (t = d.value) ? void 0 : t.start) && (d.value.end = e.detail.value, l.value = "")
                },
                handleTagDate: function(e) {
                    d.value = n.getRangeDate(e), l.value = e
                },
                handleReset: function() {
                    i(a.dropdownItem, !0)
                },
                handleConfirm: function() {
                    var t;
                    if (null == (t = a.dropdownItem) ? void 0 : t.prop) {
                        var r = e({}, a.dropdownItem.prop, n.deepClone(d.value));
                        o("success", r, d.value, a.dropdownIndex)
                    } else console.error("菜单项".concat(a.dropdownItem.title, "未定义prop，返回内容失败"))
                }
            }
        }
    });
Array || t.resolveComponent("PartDropdownFooter")();
var r = t._export_sfc(a, [
    ["render", function(e, n, a, r, o, d) {
        return t.e({
            a: t.t(e.daterange.start || "请选择日期"),
            b: e.daterange.start,
            c: t.o((function() {
                return e.handleStartDate && e.handleStartDate.apply(e, arguments)
            })),
            d: t.n(e.daterange.start ? "is-actived" : ""),
            e: t.t(e.daterange.end || "请选择日期"),
            f: e.daterange.end,
            g: !e.daterange.start,
            h: e.daterange.start,
            i: t.o((function() {
                return e.handleEndDate && e.handleEndDate.apply(e, arguments)
            })),
            j: t.n(e.daterange.end ? "is-actived" : ""),
            k: e.dropdownItem.showQuick
        }, e.dropdownItem.showQuick ? {
            l: t.f(e.dateTagList, (function(n, a, r) {
                return {
                    a: t.t(n.label),
                    b: t.n(e.datetag === n.value ? "is-actived" : ""),
                    c: t.o((function(t) {
                        return e.handleTagDate(n.value)
                    }), a),
                    d: a
                }
            }))
        } : {}, {
            m: t.o((function(t) {
                return e.handleReset()
            })),
            n: t.o((function(t) {
                return e.handleConfirm()
            })),
            o: t.p({
                resetText: e.dropdownItem.resetText,
                confirmText: e.dropdownItem.confirmText
            })
        })
    }],
    ["__scopeId", "data-v-a4486dcf"]
]);
wx.createComponent(r);