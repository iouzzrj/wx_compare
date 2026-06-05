
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    n = require("../../@babel/runtime/helpers/objectSpread2"),
    t = require("../../@babel/runtime/helpers/defineProperty"),
    r = require("../../@babel/runtime/helpers/asyncToGenerator"),
    o = require("../../common/vendor.js"),
    a = require("./utils.js"),
    i = o.defineComponent({
        components: {
            DropdownPicker: function() {
                return "./components/picker.js"
            },
            DropdownCell: function() {
                return "./components/cell.js"
            },
            DropdownFilter: function() {
                return "./components/filter.js"
            },
            DropdownDaterange: function() {
                return "./components/daterange.js"
            }
        },
        props: {
            dropdownMenu: {
                type: Array,
                default: function() {
                    return []
                }
            },
            themeColor: {
                type: String,
                default: "#007aff"
            },
            textColor: {
                type: String,
                default: "#333333"
            },
            bgColor: {
                type: String,
                default: "#ffffff"
            },
            fixedTop: {
                type: Boolean,
                default: !1
            },
            fixedTopValue: {
                type: Number,
                default: 0
            },
            duration: {
                type: [Number, String],
                default: 300
            }
        },
        emits: ["open", "close", "confirm"],
        setup: function(i, l) {
            var u = l.emit,
                c = o.ref(-1),
                d = o.ref(!1),
                s = o.ref(!1),
                p = o.ref([]),
                v = o.ref(!1),
                f = o.ref(null),
                h = o.computed((function() {
                    return "\n        --dropdown-theme-color: ".concat(i.themeColor, ";\n        --dropdown-text-color: ").concat(i.textColor, ";\n        --dropdown-background-color: ").concat(i.bgColor, ";\n        --dropdown-popup-duration: ").concat(i.duration / 1e3, "s;\n        --dropdown-fixed-top: ").concat(i.fixedTopValue || 0, "px;\n      ")
                }));
             function m() {
                return x.apply(this, arguments)
            }
             function x() {
                return (x = r(e().mark((function t() {
                    var r, o, l, u, c, d, s, h, m = this;
                    return e().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (c = a.deepClone(i.dropdownMenu || []), d = {
                                        label: "不限",
                                        value: "-9999"
                                    }, !c || 0 === c.length) {
                                    t.next = 12;
                                    break
                                }
                                s = e().mark((function t(i) {
                                    var s, h;
                                    return e().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if ((null == (s = c[i]) ? void 0 : s.type) && (s = n(n({}, a.menuInitOpts[c[i].type] || {}), s)), "function" == typeof s.syncDataFn && (s.isLoading = !0, s.syncDataFn(s, i).then((function(e) {
                                                        p.value[i].options = a.checkDataField(s.syncDataKey ? a.getValueByKey(e, s.syncDataKey) : e, s.field), m.menuList[i].showAll && -1 === m.menuList[i].options.findIndex((function(e) {
                                                            return e.value === d.value
                                                        })) && m.menuList[i].options.unshift(d), p.value[i].isLoading = !1
                                                    })).catch((function() {
                                                        p.value[i].isLoading = !1
                                                    }))), (null == (r = s.options) ? void 0 : r.length) && (s.options = a.checkDataField(s.options, s.field), s.showAll && -1 === s.options.findIndex((function(e) {
                                                        return e.value === d.value
                                                    })) && s.options.unshift(d)), void 0 === s.value) {
                                                    e.next = 27;
                                                    break
                                                }
                                                e.t0 = s.type, e.next = "cell" === e.t0 ? 5 : "click" === e.t0 ? 14 : "sort" === e.t0 ? 16 : "filter" === e.t0 ? 18 : "picker" === e.t0 ? 20 : "daterange" === e.t0 ? 22 : "slot" === e.t0 ? 24 : 25;
                                                break;
                                            case 5:
                                                h = 0;
                                            case 6:
                                                if (!(h < s.options.length)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                if (s.options[h].value !== s.value) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return s.isActived = !0, e.abrupt("break", 13);
                                            case 10:
                                                h++, e.next = 6;
                                                break;
                                            case 13:
                                                return e.abrupt("break", 25);
                                            case 14:
                                                return s.isActived = !0 === s.value, e.abrupt("break", 25);
                                            case 16:
                                                return s.isActived = "asc" === s.value || "desc" === s.value, e.abrupt("break", 25);
                                            case 18:
                                                return s.isActived = "{}" !== JSON.stringify(s.value || {}), e.abrupt("break", 25);
                                            case 20:
                                                return s.isActived = null == (o = s.value) ? void 0 : o.length, e.abrupt("break", 25);
                                            case 22:
                                                return s.isActived = (null == (l = s.value) ? void 0 : l.start) && (null == (u = s.value) ? void 0 : u.end), e.abrupt("break", 25);
                                            case 24:
                                                s.isActived = !!s.value;
                                            case 25:
                                                e.next = 28;
                                                break;
                                            case 27:
                                                s.isActived = !1;
                                            case 28:
                                                v.value || "search" !== s.type || (s.isHidden = "true", f.value = s, v.value = !0), c[i] = s;
                                            case 29:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), t)
                                })), h = 0;
                            case 4:
                                if (!(h < c.length)) {
                                    t.next = 9;
                                    break
                                }
                                return t.delegateYield(s(h), "t0", 6);
                            case 6:
                                h++, t.next = 4;
                                break;
                            case 9:
                                p.value = c, t.next = 13;
                                break;
                            case 12:
                                p.value = [];
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
             function y(e) {
                return p.value.findIndex((function(n) {
                    return n.prop === e
                }))
            }
             function k() {
                var e;
                (null == (e = p.value) ? void 0 : e.length) && p.value.forEach((function(e) {
                    e.isClick = !1
                })), s.value = !1, setTimeout((function() {
                    d.value = !1, b()
                }), i.duration), u("close", c.value, p.value)
            }
             function b() {
                c.value = -1
            }
             function g() {
                var e = {};
                return p.value.forEach((function(n) {
                    e[n.prop] = n.value
                })), e
            }
            return o.onMounted((function() {
                m()
            })), {
                initData: m,
                menuList: p,
                updateMenu: function(e, n, t) {
                    if (t) {
                        var r = y(e);
                        p.value[r][t] = "options" === t ? a.checkDataField(n, p.value[r].field || null) : n, "value" !== t || n || 0 === n || (p.value[r].isActived = !1)
                    } else console.error("updateMenu 错误，key不存在")
                },
                setMenuLoading: function(e, n) {
                    var t = y(e);
                    p.value[t].isLoading = n
                },
                getMenuIndex: y,
                getMenuList: function() {
                    return p.value
                },
                dropdownStyle: h,
                currentIndex: c,
                isShow: s,
                isVisible: d,
                hasSearch: v,
                searchItem: f,
                handleSearchChange: function(e) {
                    var n;
                    f.value.value = null == (n = null == e ? void 0 : e.detail) ? void 0 : n.value
                },
                handleSearch: function() {
                    var e;
                    if (null == (e = f.value) ? void 0 : e.prop) {
                        var n = t({}, f.value.prop, f.value.value);
                        u("confirm", n, g())
                    } else console.error("菜单项".concat(f.value.title, "未定义prop，返回内容失败"))
                },
                handleMenuClick: function(e, n) {
                    if (!n.isLoading) {
                        var r = p.value,
                            o = r[e];
                        return r.forEach((function(e) {
                            e.isClick = !1
                        })), "click" === o.type ? function(e, n) {
                            if (k(), -1 === c.value ? (c.value = n, e.value = !0, e.isActived = !0) : (e.value = !1, e.isActived = !1, b()), null == e ? void 0 : e.prop) {
                                var r = t({}, e.prop, e.value);
                                u("confirm", r, g())
                            } else console.error("菜单项".concat(e.title, "未定义prop，返回内容失败"))
                        }(o, e) : "sort" === o.type ? function(e, n) {
                            if (k(), "asc" === e.value ? (e.value = "desc", c.value = n, e.isActived = !0) : "desc" === e.value ? (e.value = void 0, e.isActived = !1, b()) : (e.value = "asc", c.value = n, e.isActived = !0), null == e ? void 0 : e.prop) {
                                var r = t({}, e.prop, e.value);
                                u("confirm", r, g())
                            } else console.error("菜单项".concat(e.title, "未定义prop，返回内容失败"))
                        }(o, e) : e === c.value ? (n.isClick = !1, void k()) : (n.isClick = !0, void
                            function(e) {
                                s.value = !0, d.value = !0, c.value = e, p.value[e].isClick = !0, u("open", c.value)
                            }(e))
                    }
                },
                handlePopupMask: function() {
                    k()
                },
                handleMove: function() {
                    return !1
                },
                getMenuValue: g,
                handleCellSelect: function(e, n, t) {
                    var r = p.value[t];
                    r.isClick = !1, "-9999" === n.value ? (r.isActived = !1, r.value = null) : (r.isActived = !0, r.value = n.value), k(), u("confirm", e, g())
                },
                handleFilterConfirm: function(e, n, t) {
                    var r = p.value[t];
                    r.isClick = !1, r.isActived = "{}" !== JSON.stringify(n || {}), r.value = n, k(), u("confirm", e, g())
                },
                handlePickerConfirm: function(e, n, t) {
                    var r = p.value[t];
                    r.isClick = !1, n && "-9999" !== n[0] ? (r.isActived = !0, r.value = n) : (r.isActived = !1, r.value = null), k(), u("confirm", e, g())
                },
                handleDaterangeConfirm: function(e, n, t) {
                    var r = p.value[t];
                    r.isClick = !1, (null == n ? void 0 : n.start) && (null == n ? void 0 : n.end) ? (r.isActived = !0, r.value = n) : (r.isActived = !1, r.value = null), k(), u("confirm", e, g())
                }
            }
        }
    });
Array || (o.resolveComponent("DropdownCell") + o.resolveComponent("DropdownFilter") + o.resolveComponent("DropdownPicker") + o.resolveComponent("DropdownDaterange"))();
var l = o._export_sfc(i, [
    ["render", function(e, n, t, r, a, i) {
        return o.e({
            a: e.hasSearch
        }, e.hasSearch ? {
            b: e.searchItem.value,
            c: o.o((function() {
                return e.handleSearchChange && e.handleSearchChange.apply(e, arguments)
            }), "a8"),
            d: e.searchItem.placeholder || "请输入",
            e: o.o((function() {
                return e.handleSearch && e.handleSearch.apply(e, arguments)
            }), "6a"),
            f: o.o((function() {
                return e.handleSearch && e.handleSearch.apply(e, arguments)
            }), "b8"),
            g: o.o((function() {
                return e.handleMove && e.handleMove.apply(e, arguments)
            }), "f7")
        } : {}, {
            h: o.f(e.menuList, (function(n, t, r) {
                return o.e({
                    a: o.t(n.title),
                    b: o.n(n.isActived ? "is-actived" : ""),
                    c: n.showArrow
                }, n.showArrow ? o.e({
                    d: n.isLoading
                }, (n.isLoading || n.isClick, {}), {
                    e: n.isClick
                }) : n.showSort ? {
                    g: o.n("is--" + n.value)
                } : {}, {
                    f: n.showSort,
                    h: "true" === n.isHidden ? 1 : "",
                    i: t,
                    j: o.o((function(r) {
                        return e.handleMenuClick(t, n)
                    }), t)
                })
            })),
            i: o.o((function() {
                return e.handleMove && e.handleMove.apply(e, arguments)
            }), "42"),
            j: o.f(e.menuList, (function(n, t, r) {
                return o.e({
                    a: "cell" === n.type && t === e.currentIndex
                }, "cell" === n.type && t === e.currentIndex ? {
                    b: o.o(e.handleCellSelect, t),
                    c: "b6554ae1-0-" + r,
                    d: o.p({
                        dropdownItem: n,
                        dropdownIndex: t
                    })
                } : {}, {
                    e: "filter" === n.type && t === e.currentIndex
                }, "filter" === n.type && t === e.currentIndex ? {
                    f: o.o(e.handleFilterConfirm, t),
                    g: "b6554ae1-1-" + r,
                    h: o.p({
                        dropdownItem: n,
                        dropdownIndex: t
                    })
                } : {}, {
                    i: "picker" === n.type && t === e.currentIndex
                }, "picker" === n.type && t === e.currentIndex ? {
                    j: o.o(e.handlePickerConfirm, t),
                    k: "b6554ae1-2-" + r,
                    l: o.p({
                        dropdownItem: n,
                        dropdownIndex: t
                    })
                } : {}, {
                    m: "daterange" === n.type && t === e.currentIndex
                }, "daterange" === n.type && t === e.currentIndex ? {
                    n: o.o(e.handleDaterangeConfirm, t),
                    o: "b6554ae1-3-" + r,
                    p: o.p({
                        dropdownItem: n,
                        dropdownIndex: t
                    })
                } : {}, {
                    q: "slot1" === n.type && t === e.currentIndex
                }, "slot1" === n.type && t === e.currentIndex ? {
                    r: "slot1-" + r,
                    s: o.r("slot1", {
                        item: n,
                        index: t
                    }, r)
                } : {}, {
                    t: "slot2" === n.type && t === e.currentIndex
                }, "slot2" === n.type && t === e.currentIndex ? {
                    v: "slot2-" + r,
                    w: o.r("slot2", {
                        item: n,
                        index: t
                    }, r)
                } : {}, {
                    x: "slot3" === n.type && t === e.currentIndex
                }, "slot3" === n.type && t === e.currentIndex ? {
                    y: "slot3-" + r,
                    z: o.r("slot3", {
                        item: n,
                        index: t
                    }, r)
                } : {}, {
                    A: "slot4" === n.type && t === e.currentIndex
                }, "slot4" === n.type && t === e.currentIndex ? {
                    B: "slot4-" + r,
                    C: o.r("slot4", {
                        item: n,
                        index: t
                    }, r)
                } : {}, {
                    D: "slot5" === n.type && t === e.currentIndex
                }, "slot5" === n.type && t === e.currentIndex ? {
                    E: "slot5-" + r,
                    F: o.r("slot5", {
                        item: n,
                        index: t
                    }, r)
                } : {}, {
                    G: t
                })
            })),
            k: o.n(e.isShow ? "is-show" : ""),
            l: e.fixedTop
        }, e.fixedTop ? {
            m: o.o((function() {
                return e.handlePopupMask && e.handlePopupMask.apply(e, arguments)
            }), "64"),
            n: o.o((function() {
                return e.handleMove && e.handleMove.apply(e, arguments)
            }), "f2")
        } : {}, {
            o: e.isShow ? 1 : "",
            p: e.isVisible ? 1 : "",
            q: e.fixedTop
        }, (e.fixedTop, {}), {
            r: e.fixedTop ? 1 : "",
            s: e.hasSearch ? 1 : "",
            t: o.s(e.dropdownStyle)
        })
    }],
    ["__scopeId", "data-v-b6554ae1"]
]);
wx.createComponent(l);