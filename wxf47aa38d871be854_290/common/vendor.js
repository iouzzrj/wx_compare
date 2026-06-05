
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
var e = require("../@babel/runtime/helpers/assertThisInitialized");
require("../@babel/runtime/helpers/Arrayincludes");
var t = require("../@babel/runtime/helpers/regeneratorRuntime"),
    n = require("../@babel/runtime/helpers/asyncToGenerator"),
    r = require("../@babel/runtime/helpers/objectSpread2"),
    i = require("../@babel/runtime/helpers/wrapNativeSuper"),
    o = require("../@babel/runtime/helpers/inherits"),
    a = require("../@babel/runtime/helpers/createSuper"),
    s = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
    u = require("../@babel/runtime/helpers/classCallCheck"),
    c = require("../@babel/runtime/helpers/createClass"),
    l = require("../@babel/runtime/helpers/defineProperty"),
    f = require("../@babel/runtime/helpers/slicedToArray"),
    h = require("../@babel/runtime/helpers/toConsumableArray"),
    p = require("../@babel/runtime/helpers/typeof");
 function d(e, t) {
    var n = new Set(e.split(","));
    return t ? function(e) {
        return n.has(e.toLowerCase())
    } : function(e) {
        return n.has(e)
    }
}
var g = {},
    v = [],
    m = function() {},
    y = function() {
        return !1
    },
    _ = function(e) {
        return 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
    },
    b = function(e) {
        return e.startsWith("onUpdate:")
    },
    w = Object.assign,
    x = function(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    k = Object.prototype.hasOwnProperty,
    S = function(e, t) {
        return k.call(e, t)
    },
    T = Array.isArray,
    I = function(e) {
        return "[object Map]" === j(e)
    },
    E = function(e) {
        return "[object Set]" === j(e)
    },
    A = function(e) {
        return "function" == typeof e
    },
    C = function(e) {
        return "string" == typeof e
    },
    O = function(e) {
        return "symbol" == p(e)
    },
    B = function(e) {
        return null !== e && "object" == p(e)
    },
    P = function(e) {
        return (B(e) || A(e)) && A(e.then) && A(e.catch)
    },
    F = Object.prototype.toString,
    j = function(e) {
        return F.call(e)
    },
    R = function(e) {
        return "[object Object]" === j(e)
    },
    L = function(e) {
        return C(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e
    },
    M = d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    U = function(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    },
    D = /-(\w)/g,
    N = U((function(e) {
        return e.replace(D, (function(e, t) {
            return t ? t.toUpperCase() : ""
        }))
    })),
    q = /\B([A-Z])/g,
    z = U((function(e) {
        return e.replace(q, "-$1").toLowerCase()
    })),
    $ = U((function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })),
    H = U((function(e) {
        return e ? "on".concat($(e)) : ""
    })),
    K = function(e, t) {
        return !Object.is(e, t)
    },
    V = function(e, t) {
        for (var n = 0; n < e.length; n++) e[n](t)
    },
    W = function(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    };
var Z = /;(?![^(]*\))/g,
    J = /:([^]+)/,
    Q = /\/\*[^]*?\*\//g;
 function Y(e) {
    var t = {};
    return e.replace(Q, "").split(Z).forEach((function(e) {
        if (e) {
            var n = e.split(J);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    })), t
}
var G = function e(t, n) {
        return n && n.__v_isRef ? e(t, n.value) : I(n) ? l({}, "Map(".concat(n.size, ")"), h(n.entries()).reduce((function(e, t, n) {
            var r = f(t, 2),
                i = r[0],
                o = r[1];
            return e[X(i, n) + " =>"] = o, e
        }), {})) : E(n) ? l({}, "Set(".concat(n.size, ")"), h(n.values()).map((function(e) {
            return X(e)
        }))) : O(n) ? X(n) : !B(n) || T(n) || R(n) ? n : String(n)
    },
    X = function(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return O(e) ? "Symbol(".concat(null != (t = e.description) ? t : n, ")") : e
    };
 function ee(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return function() {
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return e && (t = e.apply(n, i), e = null), t
    }
}
 function te(e) {
    var t = {};
    return R(e) && Object.keys(e).sort().forEach((function(n) {
        var r = n;
        t[r] = e[r]
    })), Object.keys(t) ? t : e
}
var ne = /:/g,
    re = encodeURIComponent;
 function ie(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re,
        n = e ? Object.keys(e).map((function(n) {
            var r = e[n];
            return void 0 === p(r) || null === r ? r = "" : R(r) && (r = JSON.stringify(r)), t(n) + "=" + t(r)
        })).filter((function(e) {
            return e.length > 0
        })).join("&") : null;
    return n ? "?".concat(n) : ""
}
var oe, ae = ["onInit", "onLoad", "onShow", "onHide", "onUnload", "onBackPress", "onPageScroll", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onShareTimeline", "onShareAppMessage", "onShareChat", "onAddToFavorites", "onSaveExitState", "onNavigationBarButtonTap", "onNavigationBarSearchInputClicked", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputFocusChanged"],
    se = ["onShow", "onHide", "onLaunch", "onError", "onThemeChange", "onPageNotFound", "onUnhandledRejection", "onExit", "onInit", "onLoad", "onReady", "onUnload", "onResize", "onBackPress", "onPageScroll", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onShareTimeline", "onAddToFavorites", "onShareAppMessage", "onShareChat", "onSaveExitState", "onNavigationBarButtonTap", "onNavigationBarSearchInputClicked", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputFocusChanged"],
    ue = {
        onPageScroll: 1,
        onShareAppMessage: 2,
        onShareTimeline: 4
    };
 function ce(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    return !(n && !A(t)) && (se.indexOf(e) > -1 || 0 === e.indexOf("on"))
}
var le = [],
    fe = ee((function(e, t) {
        return t(e)
    })),
    he = function() {};
he.prototype = {
    _id: 1,
    on: function(e, t, n) {
        var r = this.e || (this.e = {});
        return (r[e] || (r[e] = [])).push({
            fn: t,
            ctx: n,
            _id: this._id
        }), this._id++
    },
    once: function(e, t, n) {
        var r = this;
         function i() {
            r.off(e, i), t.apply(n, arguments)
        }
        return i._ = t, this.on(e, i, n)
    },
    emit: function(e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
        return this
    },
    off: function(e, t) {
        var n = this.e || (this.e = {}),
            r = n[e],
            i = [];
        if (r && t) {
            for (var o = r.length - 1; o >= 0; o--)
                if (r[o].fn === t || r[o].fn._ === t || r[o]._id === t) {
                    r.splice(o, 1);
                    break
                }
            i = r
        }
        return i.length ? n[e] = i : delete n[e], this
    }
};
var pe = he,
    de = ["{", "}"],
    ge = /^(?:\d)+/,
    ve = /^(?:\w)+/,
    me = Object.prototype.hasOwnProperty,
    ye = function(e, t) {
        return me.call(e, t)
    },
    _e = new(function() {
        function e() {
            u(this, e), this._caches = Object.create(null)
        }
        return c(e, [{
            key: "interpolate",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : de;
                if (!t) return [e];
                var r = this._caches[e];
                return r || (r = function(e, t) {
                        for (var n = f(t, 2), r = n[0], i = n[1], o = [], a = 0, s = ""; a < e.length;) {
                            var u = e[a++];
                            if (u === r) {
                                s && o.push({
                                    type: "text",
                                    value: s
                                }), s = "";
                                var c = "";
                                for (u = e[a++]; void 0 !== u && u !== i;) c += u, u = e[a++];
                                var l = u === i,
                                    h = ge.test(c) ? "list" : l && ve.test(c) ? "named" : "unknown";
                                o.push({
                                    value: c,
                                    type: h
                                })
                            } else s += u
                        }
                        return s && o.push({
                            type: "text",
                            value: s
                        }), o
                    }(e, n), this._caches[e] = r),
                    function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = Array.isArray(t) ? "list" : null !== (n = t) && "object" == p(n) ? "named" : "unknown";
                        if ("unknown" === o) return r;
                        for (; i < e.length;) {
                            var a = e[i];
                            switch (a.type) {
                                case "text":
                                    r.push(a.value);
                                    break;
                                case "list":
                                    r.push(t[parseInt(a.value, 10)]);
                                    break;
                                case "named":
                                    "named" === o && r.push(t[a.value])
                            }
                            i++
                        }
                        return r
                    }(r, t)
            }
        }]), e
    }());
 function be(e, t) {
    if (e) {
        if (e = e.trim().replace(/_/g, "-"), t && t[e]) return e;
        if ("chinese" === (e = e.toLowerCase())) return "zh-Hans";
        if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 ? "zh-Hant" : (n = e, ["-tw", "-hk", "-mo", "-cht"].find((function(e) {
            return -1 !== n.indexOf(e)
        })) ? "zh-Hant" : "zh-Hans");
        var n, r = ["en", "fr", "es"];
        return t && Object.keys(t).length > 0 && (r = Object.keys(t)),
            function(e, t) {
                return t.find((function(t) {
                    return 0 === e.indexOf(t)
                }))
            }(e, r) || void 0
    }
}
var we = function() {
    function e(t) {
        var n = t.locale,
            r = t.fallbackLocale,
            i = t.messages,
            o = t.watcher,
            a = t.formater;
        u(this, e), this.locale = "en", this.fallbackLocale = "en", this.message = {}, this.messages = {}, this.watchers = [], r && (this.fallbackLocale = r), this.formater = a || _e, this.messages = i || {}, this.setLocale(n || "en"), o && this.watchLocale(o)
    }
    return c(e, [{
        key: "setLocale",
        value: function(e) {
            var t = this,
                n = this.locale;
            this.locale = be(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], n !== this.locale && this.watchers.forEach((function(e) {
                e(t.locale, n)
            }))
        }
    }, {
        key: "getLocale",
        value: function() {
            return this.locale
        }
    }, {
        key: "watchLocale",
        value: function(e) {
            var t = this,
                n = this.watchers.push(e) - 1;
            return function() {
                t.watchers.splice(n, 1)
            }
        }
    }, {
        key: "add",
        value: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = this.messages[e];
            r ? n ? Object.assign(r, t) : Object.keys(t).forEach((function(e) {
                ye(r, e) || (r[e] = t[e])
            })) : this.messages[e] = t
        }
    }, {
        key: "f",
        value: function(e, t, n) {
            return this.formater.interpolate(e, t, n).join("")
        }
    }, {
        key: "t",
        value: function(e, t, n) {
            var r = this.message;
            return "string" == typeof t ? (t = be(t, this.messages)) && (r = this.messages[t]) : n = t, ye(r, e) ? this.formater.interpolate(r[e], n).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), e)
        }
    }]), e
}();
 function xe(e) {
    return function() {
        try {
            return e.apply(e, arguments)
        } catch (e) {
            console.error(e)
        }
    }
}
var ke = 1,
    Se = {};
 function Te(e, t, n) {
    if ("number" == typeof e) {
        var r = Se[e];
        if (r) return r.keepAlive || delete Se[e], r.callback(t, n)
    }
    return t
}
var Ie = "success",
    Ee = "fail",
    Ae = "complete";
var Ce = "success",
    Oe = "fail",
    Be = "complete",
    Pe = {},
    Fe = {};
 function je(e, t) {
    return function(n) {
        return e(n, t) || n
    }
}
 function Re(e, t, n) {
    for (var r = !1, i = 0; i < e.length; i++) {
        var o = e[i];
        if (r) r = Promise.resolve(je(o, n));
        else {
            var a = o(t, n);
            if (P(a) && (r = Promise.resolve(a)), !1 === a) return {
                then: function() {},
                catch: function() {}
            }
        }
    }
    return r || {
        then: function(e) {
            return e(t)
        },
        catch: function() {}
    }
}
 function Le(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return [Ce, Oe, Be].forEach((function(n) {
        var r = e[n];
        if (T(r)) {
            var i = t[n];
            t[n] = function(e) {
                Re(r, e, t).then((function(e) {
                    return A(i) && i(e) || e
                }))
            }
        }
    })), t
}
 function Me(e, t) {
    var n = [];
    T(Pe.returnValue) && n.push.apply(n, h(Pe.returnValue));
    var r = Fe[e];
    return r && T(r.returnValue) && n.push.apply(n, h(r.returnValue)), n.forEach((function(e) {
        t = e(t) || t
    })), t
}
 function Ue(e) {
    var t = Object.create(null);
    Object.keys(Pe).forEach((function(e) {
        "returnValue" !== e && (t[e] = Pe[e].slice())
    }));
    var n = Fe[e];
    return n && Object.keys(n).forEach((function(e) {
        "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]))
    })), t
}
 function De(e, t, n, r) {
    var i = Ue(e);
    return i && Object.keys(i).length ? T(i.invoke) ? Re(i.invoke, n).then((function(n) {
        return t.apply(void 0, [Le(Ue(e), n)].concat(h(r)))
    })) : t.apply(void 0, [Le(i, n)].concat(h(r))) : t.apply(void 0, [n].concat(h(r)))
}
 function Ne(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = t + ":fail",
        o = "";
    return o = n ? 0 === n.indexOf(i) ? n : i + " " + n : i, delete r.errCode, Te(e, w({
        errMsg: o
    }, r))
}
 function qe(e, t, n, r) {
    var i = function(e, t) {
        e[0]
    }(t);
    if (i) return i
}
 function ze(e, t, n, r) {
    return function(n) {
        var i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.beforeAll,
                    i = n.beforeSuccess;
                R(t) || (t = {});
                var o = function(e) {
                        var t = {};
                        for (var n in e) {
                            var r = e[n];
                            A(r) && (t[n] = xe(r), delete e[n])
                        }
                        return t
                    }(t),
                    a = o.success,
                    s = o.fail,
                    u = o.complete,
                    c = A(a),
                    l = A(s),
                    f = A(u),
                    h = ke++;
                return function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    Se[e] = {
                        name: t,
                        keepAlive: r,
                        callback: n
                    }
                }(h, e, (function(n) {
                    (n = n || {}).errMsg = function(e, t) {
                        return e && -1 !== e.indexOf(":fail") ? t + e.substring(e.indexOf(":fail")) : t + ":ok"
                    }(n.errMsg, e), A(r) && r(n), n.errMsg === e + ":ok" ? (A(i) && i(n, t), c && a(n)) : l && s(n), f && u(n)
                })), h
            }(e, n, r),
            o = qe(0, [n]);
        return o ? Ne(i, e, o) : t(n, {
            resolve: function(t) {
                return function(e, t, n) {
                    return Te(e, w(n || {}, {
                        errMsg: t + ":ok"
                    }))
                }(i, e, t)
            },
            reject: function(t, n) {
                return Ne(i, e, function(e) {
                    return !e || C(e) ? e : e.stack ? ("undefined" != typeof globalThis && globalThis.harmonyChannel || console.error(e.message + "\n" + e.stack), e.message) : e
                }(t), n)
            }
        })
    }
}
 function $e(e, t, n, r) {
    return function(e, t, n, r) {
        return function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var i = qe(0, n);
            if (i) throw new Error(i);
            return t.apply(null, n)
        }
    }(0, t)
}
var He = !1,
    Ke = 0,
    Ve = 0,
    We = $e(0, (function(e, t) {
        if (0 === Ke && function() {
                var e, t, n, r, i, o = (null === (e = wx.getWindowInfo) || void 0 === e ? void 0 : e.call(wx)) || wx.getSystemInfoSync(),
                    a = (null === (t = wx.getDeviceInfo) || void 0 === t ? void 0 : t.call(wx)) || wx.getSystemInfoSync();
                n = o.windowWidth, r = o.pixelRatio, i = a.platform, Ke = n, Ve = r, He = "ios" === i
            }(), 0 === (e = Number(e))) return 0;
        var n = e / 750 * (t || Ke);
        return n < 0 && (n = -n), 0 === (n = Math.floor(n + 1e-4)) && (n = 1 !== Ve && He ? .5 : 1), e < 0 ? -n : n
    }));
 function Ze(e, t) {
    Object.keys(t).forEach((function(n) {
        A(t[n]) && (e[n] = function(e, t) {
            var n = t ? e ? e.concat(t) : T(t) ? t : [t] : e;
            return n ? function(e) {
                for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(n) : n
        }(e[n], t[n]))
    }))
}
 function Je(e, t) {
    e && t && Object.keys(t).forEach((function(n) {
        var r = e[n],
            i = t[n];
        T(r) && A(i) && x(r, i)
    }))
}
var Qe, Ye, Ge, Xe = $e(0, (function(e, t) {
        C(e) && R(t) ? Ze(Fe[e] || (Fe[e] = {}), t) : R(e) && Ze(Pe, e)
    })),
    et = $e(0, (function(e, t) {
        C(e) ? R(t) ? Je(Fe[e], t) : delete Fe[e] : R(e) && Je(Pe, e)
    })),
    tt = new(function() {
        function e() {
            u(this, e), this.$emitter = new pe
        }
        return c(e, [{
            key: "on",
            value: function(e, t) {
                return this.$emitter.on(e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                return this.$emitter.once(e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                e ? this.$emitter.off(e, t) : this.$emitter.e = {}
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                (t = this.$emitter).emit.apply(t, [e].concat(r))
            }
        }]), e
    }()),
    nt = $e(0, (function(e, t) {
        return tt.on(e, t),
            function() {
                return tt.off(e, t)
            }
    })),
    rt = $e(0, (function(e, t) {
        return tt.once(e, t),
            function() {
                return tt.off(e, t)
            }
    })),
    it = $e(0, (function(e, t) {
        T(e) || (e = e ? [e] : []), e.forEach((function(e) {
            tt.off(e, t)
        }))
    })),
    ot = $e(0, (function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        tt.emit.apply(tt, [e].concat(n))
    }));
 function at(e) {
    try {
        return JSON.parse(e)
    } catch (e) {}
    return e
}
var st = [];
 function ut(e, t) {
    st.forEach((function(n) {
        n(e, t)
    })), st.length = 0
}
var ct = function(e, t) {
        return function() {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
            return function(e) {
                return !(!R(e) || ![Ie, Ee, Ae].find((function(t) {
                    return A(e[t])
                })))
            }(n) ? Me(e, De(e, t, w({}, n), i)) : Me(e, new Promise((function(r, o) {
                De(e, t, w({}, n, {
                    success: r,
                    fail: o
                }), i)
            })))
        }
    }("getPushClientId", ze("getPushClientId", (function(e, t) {
        var n = t.resolve,
            r = t.reject;
        Promise.resolve().then((function() {
            void 0 === Ge && (Ge = !1, Qe = "", Ye = "uniPush is not enabled"), st.push((function(e, t) {
                e ? n({
                    cid: e
                }) : r(t)
            })), void 0 !== Qe && ut(Qe, Ye)
        }))
    }), 0, void 0)),
    lt = [],
    ft = /^\$|__f__|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|rpx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/,
    ht = /^create|Manager$/,
    pt = ["createBLEConnection"],
    dt = ["request", "downloadFile", "uploadFile", "connectSocket"],
    gt = ["createBLEConnection"],
    vt = /^on|^off/;
 function mt(e) {
    return ht.test(e) && -1 === pt.indexOf(e)
}
 function yt(e) {
    return ft.test(e) && -1 === gt.indexOf(e)
}
 function _t(e) {
    return -1 !== dt.indexOf(e)
}
 function bt(e, t) {
    return function(e) {
        return !(mt(e) || yt(e) || function(e) {
            return vt.test(e) && "onPush" !== e
        }(e))
    }(e) && A(t) ? function() {
        for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
        return A(n.success) || A(n.fail) || A(n.complete) ? Me(e, De(e, t, w({}, n), i)) : Me(e, new Promise((function(r, o) {
            De(e, t, w({}, n, {
                success: r,
                fail: o
            }), i)
        })))
    } : t
}
Promise.prototype.finally || (Promise.prototype.finally = function(e) {
    var t = this.constructor;
    return this.then((function(n) {
        return t.resolve(e && e()).then((function() {
            return n
        }))
    }), (function(n) {
        return t.resolve(e && e()).then((function() {
            throw n
        }))
    }))
});
var wt, xt = ["success", "fail", "cancel", "complete"],
    kt = function() {
        var e = A(getApp) && getApp({
            allowDefault: !0
        });
        return e && e.$vm ? e.$vm.$locale : function() {
            var e, t = (null === (e = wx.getAppBaseInfo) || void 0 === e ? void 0 : e.call(wx)) || wx.getSystemInfoSync();
            return be(t && t.language ? t.language : "en") || "en"
        }()
    },
    St = [];
 function Tt() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wx;
    return function(t, n) {
        (wt = wt || e.getStorageSync("__DC_STAT_UUID")) || (wt = Date.now() + "" + Math.floor(1e7 * Math.random()), wx.setStorage({
            key: "__DC_STAT_UUID",
            data: wt
        })), n.deviceId = wt
    }
}
 function It(e, t) {
    if (e.safeArea) {
        var n = e.safeArea;
        t.safeAreaInsets = {
            top: n.top,
            left: n.left,
            right: e.windowWidth - n.right,
            bottom: e.screenHeight - n.bottom
        }
    }
}
 function Et(e, t) {
    var n, r = "";
    switch (r = e.split(" ")[0] || t, n = e.split(" ")[1] || "", r = r.toLowerCase()) {
        case "harmony":
        case "ohos":
        case "openharmony":
            r = "harmonyos";
            break;
        case "iphone os":
            r = "ios";
            break;
        case "mac":
        case "darwin":
            r = "macos";
            break;
        case "windows_nt":
            r = "windows"
    }
    return {
        osName: r,
        osVersion: n
    }
}
 function At(e, t) {
    for (var n = e.deviceType || "phone", r = {
            ipad: "pad",
            windows: "pc",
            mac: "pc"
        }, i = Object.keys(r), o = t.toLowerCase(), a = 0; a < i.length; a++) {
        var s = i[a];
        if (-1 !== o.indexOf(s)) {
            n = r[s];
            break
        }
    }
    return n
}
 function Ct(e) {
    var t = e;
    return t && (t = t.toLowerCase()), t
}
 function Ot(e) {
    return kt ? kt() : e
}
 function Bt(e) {
    var t = e.hostName || "WeChat";
    return e.environment ? t = e.environment : e.host && e.host.env && (t = e.host.env), t
}
"undefined" != typeof global && (global.getLocale = kt);
var Pt = {
        returnValue: function(e, t) {
            It(e, t), Tt()(e, t),
                function(e, t) {
                    var n = e.brand,
                        r = void 0 === n ? "" : n,
                        i = e.model,
                        o = void 0 === i ? "" : i,
                        a = e.system,
                        s = void 0 === a ? "" : a,
                        u = e.language,
                        c = void 0 === u ? "" : u,
                        l = e.theme,
                        f = e.version,
                        h = e.platform,
                        p = e.fontSizeSetting,
                        d = e.SDKVersion,
                        g = e.pixelRatio,
                        v = e.deviceOrientation,
                        m = Et(s, h),
                        y = m.osName,
                        _ = m.osVersion,
                        b = f,
                        x = At(e, o),
                        k = Ct(r),
                        S = Bt(e),
                        T = v,
                        I = g,
                        E = d,
                        A = (c || "").replace(/_/g, "-"),
                        C = {
                            appId: "__UNI__E9A0D15",
                            appName: "xcx-bjdxkqyy-wx",
                            appVersion: "1.0.0",
                            appVersionCode: "100",
                            appLanguage: Ot(A),
                            uniCompileVersion: "4.76",
                            uniCompilerVersion: "4.76",
                            uniRuntimeVersion: "4.76",
                            uniPlatform: "mp-weixin",
                            deviceBrand: k,
                            deviceModel: o,
                            deviceType: x,
                            devicePixelRatio: I,
                            deviceOrientation: T,
                            osName: y,
                            osVersion: _,
                            hostTheme: l,
                            hostVersion: b,
                            hostLanguage: A,
                            hostName: S,
                            hostSDKVersion: E,
                            hostFontSizeSetting: p,
                            windowTop: 0,
                            windowBottom: 0,
                            osLanguage: void 0,
                            osTheme: void 0,
                            ua: void 0,
                            hostPackageName: void 0,
                            browserName: void 0,
                            browserVersion: void 0,
                            isUniAppX: !1
                        };
                    w(t, C)
                }(e, t)
        }
    },
    Ft = Pt,
    jt = {
        args: function(e, t) {
            var n = parseInt(e.current);
            if (!isNaN(n)) {
                var r = e.urls;
                if (T(r)) {
                    var i = r.length;
                    return i ? (n < 0 ? n = 0 : n >= i && (n = i - 1), n > 0 ? (t.current = r[n], t.urls = r.filter((function(e, t) {
                        return !(t < n) || e !== r[n]
                    }))) : t.current = r[0], {
                        indicator: !1,
                        loop: !1
                    }) : void 0
                }
            }
        }
    },
    Rt = {
        returnValue: function(e, t) {
            var n = e.brand,
                r = e.model,
                i = e.system,
                o = void 0 === i ? "" : i,
                a = e.platform,
                s = void 0 === a ? "" : a,
                u = At(e, r),
                c = Ct(n);
            Tt()(e, t);
            var l = Et(o, s),
                f = l.osName,
                h = l.osVersion;
            t = te(w(t, {
                deviceType: u,
                deviceBrand: c,
                deviceModel: r,
                osName: f,
                osVersion: h
            }))
        }
    },
    Lt = {
        returnValue: function(e, t) {
            var n = e.version,
                r = e.language,
                i = e.SDKVersion,
                o = e.theme,
                a = Bt(e),
                s = (r || "").replace(/_/g, "-"),
                u = {
                    hostVersion: n,
                    hostLanguage: s,
                    hostName: a,
                    hostSDKVersion: i,
                    hostTheme: o,
                    appId: "__UNI__E9A0D15",
                    appName: "xcx-bjdxkqyy-wx",
                    appVersion: "1.0.0",
                    appVersionCode: "100",
                    appLanguage: Ot(s),
                    isUniAppX: !1,
                    uniPlatform: "mp-weixin",
                    uniCompileVersion: "4.76",
                    uniCompilerVersion: "4.76",
                    uniRuntimeVersion: "4.76"
                };
            w(t, u)
        }
    },
    Mt = {
        returnValue: function(e, t) {
            It(e, t), t = te(w(t, {
                windowTop: 0,
                windowBottom: 0
            }))
        }
    },
    Ut = {
        args: function(e) {
            var t = getApp({
                allowDefault: !0
            }) || {};
            t.$vm ? _i("onError", e, t.$vm.$) : (wx.$onErrorHandlers || (wx.$onErrorHandlers = []), wx.$onErrorHandlers.push(e))
        }
    },
    Dt = {
        args: function(e) {
            var t = getApp({
                allowDefault: !0
            }) || {};
            if (t.$vm) {
                if (e.__weh) {
                    var n = t.$vm.$.onError;
                    if (n) {
                        var r = n.indexOf(e.__weh);
                        r > -1 && n.splice(r, 1)
                    }
                }
            } else {
                if (!wx.$onErrorHandlers) return;
                var i = wx.$onErrorHandlers.findIndex((function(t) {
                    return t === e
                })); - 1 !== i && wx.$onErrorHandlers.splice(i, 1)
            }
        }
    },
    Nt = {
        args: function() {
            if (wx.__uni_console__) {
                if (wx.__uni_console_warned__) return;
                wx.__uni_console_warned__ = !0, console.warn("开发模式下小程序日志回显会使用 socket 连接，为了避免冲突，建议使用 SocketTask 的方式去管理 WebSocket 或手动关闭日志回显功能。[详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)")
            }
        }
    },
    qt = Nt,
    zt = {
        $on: nt,
        $off: it,
        $once: rt,
        $emit: ot,
        upx2px: We,
        rpx2px: We,
        interceptors: {},
        addInterceptor: Xe,
        removeInterceptor: et,
        onCreateVueApp: function(e) {
            if (oe) return e(oe);
            le.push(e)
        },
        invokeCreateVueAppHook: function(e) {
            oe = e, le.forEach((function(t) {
                return t(e)
            }))
        },
        getLocale: kt,
        setLocale: function(e) {
            var t = A(getApp) && getApp();
            return !!t && (t.$vm.$locale !== e && (t.$vm.$locale = e, St.forEach((function(t) {
                return t({
                    locale: e
                })
            })), !0))
        },
        onLocaleChange: function(e) {
            -1 === St.indexOf(e) && St.push(e)
        },
        getPushClientId: ct,
        onPushMessage: function(e) {
            -1 === lt.indexOf(e) && lt.push(e)
        },
        offPushMessage: function(e) {
            if (e) {
                var t = lt.indexOf(e);
                t > -1 && lt.splice(t, 1)
            } else lt.length = 0
        },
        invokePushCallback: function(e) {
            if ("enabled" === e.type) Ge = !0;
            else if ("clientId" === e.type) Qe = e.cid, Ye = e.errMsg, ut(Qe, e.errMsg);
            else if ("pushMsg" === e.type)
                for (var t = {
                        type: "receive",
                        data: at(e.message)
                    }, n = 0; n < lt.length && ((0, lt[n])(t), !t.stopped); n++);
            else "click" === e.type && lt.forEach((function(t) {
                t({
                    type: "click",
                    data: at(e.message)
                })
            }))
        },
        __f__: function(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
            t && r.push(t), console[e].apply(console, r)
        }
    },
    $t = ["qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__"],
    Ht = ["lanDebug", "router", "worklet"],
    Kt = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
 function Vt(e) {
    return (!Kt || 1154 !== Kt.scene || !Ht.includes(e)) && ($t.indexOf(e) > -1 || "function" == typeof wx[e])
}
 function Wt() {
    var e = {};
    for (var t in wx) Vt(t) && (e[t] = wx[t]);
    return "undefined" != typeof globalThis && "undefined" == typeof requireMiniProgram && (globalThis.wx = e), e
}
var Zt, Jt = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"],
    Qt = (Zt = {
        oauth: ["weixin"],
        share: ["weixin"],
        payment: ["wxpay"],
        push: ["weixin"]
    }, function(e) {
        var t, n = e.service,
            r = e.success,
            i = e.fail,
            o = e.complete;
        Zt[n] ? (t = {
            errMsg: "getProvider:ok",
            service: n,
            provider: Zt[n]
        }, A(r) && r(t)) : (t = {
            errMsg: "getProvider:fail:服务[" + n + "]不存在"
        }, A(i) && i(t)), A(o) && o(t)
    }),
    Yt = Wt();
Yt.canIUse("getAppBaseInfo") || (Yt.getAppBaseInfo = Yt.getSystemInfoSync), Yt.canIUse("getWindowInfo") || (Yt.getWindowInfo = Yt.getSystemInfoSync), Yt.canIUse("getDeviceInfo") || (Yt.getDeviceInfo = Yt.getSystemInfoSync);
var Gt = Yt.getAppBaseInfo && Yt.getAppBaseInfo();
Gt || (Gt = Yt.getSystemInfoSync());
var Xt, en, tn = Gt ? Gt.host : null,
    nn = tn && "SAAASDK" === tn.env ? Yt.miniapp.shareVideoMessage : Yt.shareVideoMessage,
    rn = Object.freeze({
        __proto__: null,
        createSelectorQuery: function() {
            var e = Yt.createSelectorQuery(),
                t = e.in;
            return e.in = function(e) {
                return e.$scope ? t.call(this, e.$scope) : t.call(this, function(e) {
                    var t = Object.create(null);
                    return Jt.forEach((function(n) {
                        t[n] = e[n]
                    })), t
                }(e))
            }, e
        },
        getProvider: Qt,
        shareVideoMessage: nn
    }),
    on = Object.freeze({
        __proto__: null,
        compressImage: {
            args: function(e, t) {
                e.compressedHeight && !t.compressHeight && (t.compressHeight = e.compressedHeight), e.compressedWidth && !t.compressWidth && (t.compressWidth = e.compressedWidth)
            }
        },
        getAppAuthorizeSetting: {
            returnValue: function(e, t) {
                var n = e.locationReducedAccuracy;
                t.locationAccuracy = "unsupported", !0 === n ? t.locationAccuracy = "reduced" : !1 === n && (t.locationAccuracy = "full")
            }
        },
        getAppBaseInfo: Lt,
        getDeviceInfo: Rt,
        getSystemInfo: Pt,
        getSystemInfoSync: Ft,
        getWindowInfo: Mt,
        offError: Dt,
        onError: Ut,
        onSocketMessage: qt,
        onSocketOpen: Nt,
        previewImage: jt,
        redirectTo: {},
        showActionSheet: {
            args: function(e, t) {
                t.alertText = e.title
            }
        }
    }),
    an = Wt(),
    sn = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wx,
            r = function(e) {
                function t(e, t, n) {
                    return function(i) {
                        return t(r(e, i, n))
                    }
                }
                 function n(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    if (R(n)) {
                        var a = !0 === o ? n : {};
                        for (var s in A(r) && (r = r(n, a) || {}), n)
                            if (S(r, s)) {
                                var u = r[s];
                                A(u) && (u = u(n[s], n, a)), u ? C(u) ? a[u] = n[s] : R(u) && (a[u.name ? u.name : s] = u.value) : console.warn("微信小程序 ".concat(e, " 暂不支持 ").concat(s))
                            } else if (-1 !== xt.indexOf(s)) {
                            var c = n[s];
                            A(c) && (a[s] = t(e, c, i))
                        } else o || S(a, s) || (a[s] = n[s]);
                        return a
                    }
                    return A(n) && (A(r) && r(n, {}), n = t(e, n, i)), n
                }
                 function r(t, r, i) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return A(e.returnValue) && (r = e.returnValue(t, r)), n(t, r, i, {}, o || !1)
                }
                return function(t, i) {
                    var o = S(e, t);
                    if (!o && "function" != typeof wx[t]) return i;
                    var a = o || A(e.returnValue) || mt(t) || _t(t),
                        s = o || A(i);
                    if (!o && !i) return function() {
                        console.error("微信小程序 暂不支持".concat(t))
                    };
                    if (!a || !s) return i;
                    var u = e[t];
                    return function(e, i) {
                        var o = u || {};
                        A(u) && (o = u(e));
                        var a = [e = n(t, e, o.args, o.returnValue)];
                        void 0 !== i && a.push(i);
                        var s = wx[o.name || t].apply(wx, a);
                        return (mt(t) || _t(t)) && s && !s.__v_skip && (s.__v_skip = !0), yt(t) ? r(t, s, o.returnValue, mt(t)) : s
                    }
                }
            }(t);
        return new Proxy({}, {get: function(t, i) {
                return S(t, i) ? t[i] : S(e, i) ? bt(i, e[i]) : S(zt, i) ? bt(i, zt[i]) : bt(i, r(i, n[i]))
            }
        })
    }(rn, on, an),
    un = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            u(this, e), this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Xt, !t && Xt && (this.index = (Xt.scopes || (Xt.scopes = [])).push(this) - 1)
        }
        return c(e, [{
            key: "active",
            get: function() {
                return this._active
            }
        }, {
            key: "run",
            value: function(e) {
                if (this._active) {
                    var t = Xt;
                    try {
                        return Xt = this, e()
                    } finally {
                        Xt = t
                    }
                }
            }
        }, {
            key: "on",
            value: function() {
                Xt = this
            }
        }, {
            key: "off",
            value: function() {
                Xt = this.parent
            }
        }, {
            key: "stop",
            value: function(e) {
                if (this._active) {
                    var t, n;
                    for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
                    for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                    if (this.scopes)
                        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                    if (!this.detached && this.parent && !e) {
                        var r = this.parent.scopes.pop();
                        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                    }
                    this.parent = void 0, this._active = !1
                }
            }
        }]), e
    }(),
    cn = function() {
        function e(t, n, r, i) {
            u(this, e), this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0,
                function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xt;
                    t && t.active && t.effects.push(e)
                }(this, i)
        }
        return c(e, [{
            key: "dirty",
            get: function() {
                if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
                    this._dirtyLevel = 1, vn();
                    for (var e = 0; e < this._depsLength; e++) {
                        var t = this.deps[e];
                        if (t.computed && (t.computed.value, this._dirtyLevel >= 4)) break
                    }
                    1 === this._dirtyLevel && (this._dirtyLevel = 0), mn()
                }
                return this._dirtyLevel >= 4
            },
            set: function(e) {
                this._dirtyLevel = e ? 4 : 0
            }
        }, {
            key: "run",
            value: function() {
                if (this._dirtyLevel = 0, !this.active) return this.fn();
                var e = pn,
                    t = en;
                try {
                    return pn = !0, en = this, this._runnings++, ln(this), this.fn()
                } finally {
                    fn(this), this._runnings--, en = t, pn = e
                }
            }
        }, {
            key: "stop",
            value: function() {
                var e;
                this.active && (ln(this), fn(this), null == (e = this.onStop) || e.call(this), this.active = !1)
            }
        }]), e
    }();
 function ln(e) {
    e._trackId++, e._depsLength = 0
}
 function fn(e) {
    if (e.deps.length > e._depsLength) {
        for (var t = e._depsLength; t < e.deps.length; t++) hn(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
 function hn(e, t) {
    var n = e.get(t);
    void 0 !== n && t._trackId !== n && (e.delete(t), 0 === e.size && e.cleanup())
}
var pn = !0,
    dn = 0,
    gn = [];
 function vn() {
    gn.push(pn), pn = !1
}
 function mn() {
    var e = gn.pop();
    pn = void 0 === e || e
}
 function yn() {
    dn++
}
 function _n() {
    for (dn--; !dn && wn.length;) wn.shift()()
}
 function bn(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        var r = e.deps[e._depsLength];
        r !== t ? (r && hn(r, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
var wn = [];
 function xn(e, t, n) {
    yn();
    var r, i = s(e.keys());
    try {
        for (i.s(); !(r = i.n()).done;) {
            var o = r.value,
                a = void 0;
            o._dirtyLevel < t && (null != a ? a : a = e.get(o) === o._trackId) && (o._shouldSchedule || (o._shouldSchedule = 0 === o._dirtyLevel), o._dirtyLevel = t), o._shouldSchedule && (null != a ? a : a = e.get(o) === o._trackId) && (o.trigger(), o._runnings && !o.allowRecurse || 2 === o._dirtyLevel || (o._shouldSchedule = !1, o.scheduler && wn.push(o.scheduler)))
        }
    } catch (e) {
        i.e(e)
    } finally {
        i.f()
    }
    _n()
}
var kn = function(e, t) {
        var n = new Map;
        return n.cleanup = e, n.computed = t, n
    },
    Sn = new WeakMap,
    Tn = Symbol(""),
    In = Symbol("");
 function En(e, t, n) {
    if (pn && en) {
        var r = Sn.get(e);
        r || Sn.set(e, r = new Map);
        var i = r.get(n);
        i || r.set(n, i = kn((function() {
            return r.delete(n)
        }))), bn(en, i)
    }
}
 function An(e, t, n, r, i, o) {
    var a = Sn.get(e);
    if (a) {
        var u = [];
        if ("clear" === t) u = h(a.values());
        else if ("length" === n && T(e)) {
            var c = Number(r);
            a.forEach((function(e, t) {
                ("length" === t || !O(t) && t >= c) && u.push(e)
            }))
        } else switch (void 0 !== n && u.push(a.get(n)), t) {
            case "add":
                T(e) ? L(n) && u.push(a.get("length")) : (u.push(a.get(Tn)), I(e) && u.push(a.get(In)));
                break;
            case "delete":
                T(e) || (u.push(a.get(Tn)), I(e) && u.push(a.get(In)));
                break;
            case "set":
                I(e) && u.push(a.get(Tn))
        }
        yn();
        var l, f = s(u);
        try {
            for (f.s(); !(l = f.n()).done;) {
                var p = l.value;
                p && xn(p, 4)
            }
        } catch (e) {
            f.e(e)
        } finally {
            f.f()
        }
        _n()
    }
}
var Cn = d("__proto__,__v_isRef,__isVue"),
    On = new Set(Object.getOwnPropertyNames(Symbol).filter((function(e) {
        return "arguments" !== e && "caller" !== e
    })).map((function(e) {
        return Symbol[e]
    })).filter(O)),
    Bn = function() {
        var e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach((function(t) {
            e[t] = function() {
                for (var e = mr(this), n = 0, r = this.length; n < r; n++) En(e, 0, n + "");
                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                var s = e[t].apply(e, o);
                return -1 === s || !1 === s ? e[t].apply(e, h(o.map(mr))) : s
            }
        })), ["push", "pop", "shift", "unshift", "splice"].forEach((function(t) {
            e[t] = function() {
                vn(), yn();
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                var i = mr(this)[t].apply(this, n);
                return _n(), mn(), i
            }
        })), e
    }();
 function Pn(e) {
    var t = mr(this);
    return En(t, 0, e), t.hasOwnProperty(e)
}
var Fn = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            u(this, e), this._isReadonly = t, this._isShallow = n
        }
        return c(e, [{
            key: "get",
            value: function(e, t, n) {
                var r = this._isReadonly,
                    i = this._isShallow;
                if ("__v_isReactive" === t) return !r;
                if ("__v_isReadonly" === t) return r;
                if ("__v_isShallow" === t) return i;
                if ("__v_raw" === t) return n === (r ? i ? lr : cr : i ? ur : sr).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
                var o = T(e);
                if (!r) {
                    if (o && S(Bn, t)) return Reflect.get(Bn, t, n);
                    if ("hasOwnProperty" === t) return Pn
                }
                var a = Reflect.get(e, t, n);
                return (O(t) ? On.has(t) : Cn(t)) ? a : (r || En(e, 0, t), i ? a : Sr(a) ? o && L(t) ? a : a.value : B(a) ? r ? hr(a) : fr(a) : a)
            }
        }]), e
    }(),
    jn = function(e) {
        o(n, Fn);
        var t = a(n);
         function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return u(this, n), t.call(this, !1, e)
        }
        return c(n, [{
            key: "set",
            value: function(e, t, n, r) {
                var i = e[t];
                if (!this._isShallow) {
                    var o = gr(i);
                    if (vr(n) || gr(n) || (i = mr(i), n = mr(n)), !T(e) && Sr(i) && !Sr(n)) return !o && (i.value = n, !0)
                }
                var a = T(e) && L(t) ? Number(t) < e.length : S(e, t),
                    s = Reflect.set(e, t, n, r);
                return e === mr(r) && (a ? K(n, i) && An(e, "set", t, n) : An(e, "add", t, n)), s
            }
        }, {
            key: "deleteProperty",
            value: function(e, t) {
                var n = S(e, t);
                e[t];
                var r = Reflect.deleteProperty(e, t);
                return r && n && An(e, "delete", t, void 0), r
            }
        }, {
            key: "has",
            value: function(e, t) {
                var n = Reflect.has(e, t);
                return O(t) && On.has(t) || En(e, 0, t), n
            }
        }, {
            key: "ownKeys",
            value: function(e) {
                return En(e, 0, T(e) ? "length" : Tn), Reflect.ownKeys(e)
            }
        }]), n
    }(),
    Rn = function(e) {
        o(n, Fn);
        var t = a(n);
         function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return u(this, n), t.call(this, !0, e)
        }
        return c(n, [{
            key: "set",
            value: function(e, t) {
                return !0
            }
        }, {
            key: "deleteProperty",
            value: function(e, t) {
                return !0
            }
        }]), n
    }(),
    Ln = new jn,
    Mn = new Rn,
    Un = new jn(!0),
    Dn = function(e) {
        return e
    },
    Nn = function(e) {
        return Reflect.getPrototypeOf(e)
    };
 function qn(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = mr(e = e.__v_raw),
        o = mr(t);
    n || (K(t, o) && En(i, 0, t), En(i, 0, o));
    var a = Nn(i),
        s = a.has,
        u = r ? Dn : n ? br : _r;
    return s.call(i, t) ? u(e.get(t)) : s.call(i, o) ? u(e.get(o)) : void(e !== i && e.get(t))
}
 function zn(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = this.__v_raw,
        r = mr(n),
        i = mr(e);
    return t || (K(e, i) && En(r, 0, e), En(r, 0, i)), e === i ? n.has(e) : n.has(e) || n.has(i)
}
 function $n(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e = e.__v_raw, !t && En(mr(e), 0, Tn), Reflect.get(e, "size", e)
}
 function Hn(e) {
    e = mr(e);
    var t = mr(this);
    return Nn(t).has.call(t, e) || (t.add(e), An(t, "add", e, e)), this
}
 function Kn(e, t) {
    t = mr(t);
    var n = mr(this),
        r = Nn(n),
        i = r.has,
        o = r.get,
        a = i.call(n, e);
    a || (e = mr(e), a = i.call(n, e));
    var s = o.call(n, e);
    return n.set(e, t), a ? K(t, s) && An(n, "set", e, t) : An(n, "add", e, t), this
}
 function Vn(e) {
    var t = mr(this),
        n = Nn(t),
        r = n.has,
        i = n.get,
        o = r.call(t, e);
    o || (e = mr(e), o = r.call(t, e)), i && i.call(t, e);
    var a = t.delete(e);
    return o && An(t, "delete", e, void 0), a
}
 function Wn() {
    var e = mr(this),
        t = 0 !== e.size,
        n = e.clear();
    return t && An(e, "clear", void 0, void 0), n
}
 function Zn(e, t) {
    return function(n, r) {
        var i = this,
            o = i.__v_raw,
            a = mr(o),
            s = t ? Dn : e ? br : _r;
        return !e && En(a, 0, Tn), o.forEach((function(e, t) {
            return n.call(r, s(e), s(t), i)
        }))
    }
}
 function Jn(e, t, n) {
    return function() {
        var r = this.__v_raw,
            i = mr(r),
            o = I(i),
            a = "entries" === e || e === Symbol.iterator && o,
            s = "keys" === e && o,
            u = r[e].apply(r, arguments),
            c = n ? Dn : t ? br : _r;
        return !t && En(i, 0, s ? In : Tn), l({
            next: function() {
                var e = u.next(),
                    t = e.value,
                    n = e.done;
                return n ? {
                    value: t,
                    done: n
                } : {
                    value: a ? [c(t[0]), c(t[1])] : c(t),
                    done: n
                }
            }
        }, Symbol.iterator, (function() {
            return this
        }))
    }
}
 function Qn(e) {
    return function() {
        return "delete" !== e && ("clear" === e ? void 0 : this)
    }
}
var Yn = function() {
        var e = {get: function(e) {
                    return qn(this, e)
                },
                get size() {
                    return $n(this)
                },
                has: zn,
                add: Hn,
                set: Kn,
                delete: Vn,
                clear: Wn,
                forEach: Zn(!1, !1)
            },
            t = {get: function(e) {
                    return qn(this, e, !1, !0)
                },
                get size() {
                    return $n(this)
                },
                has: zn,
                add: Hn,
                set: Kn,
                delete: Vn,
                clear: Wn,
                forEach: Zn(!1, !0)
            },
            n = {get: function(e) {
                    return qn(this, e, !0)
                },
                get size() {
                    return $n(this, !0)
                },
                has: function(e) {
                    return zn.call(this, e, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: Zn(!0, !1)
            },
            r = {get: function(e) {
                    return qn(this, e, !0, !0)
                },
                get size() {
                    return $n(this, !0)
                },
                has: function(e) {
                    return zn.call(this, e, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: Zn(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach((function(i) {
            e[i] = Jn(i, !1, !1), n[i] = Jn(i, !0, !1), t[i] = Jn(i, !1, !0), r[i] = Jn(i, !0, !0)
        })), [e, n, t, r]
    }(),
    Gn = f(Yn, 4),
    Xn = Gn[0],
    er = Gn[1],
    tr = Gn[2],
    nr = Gn[3];
 function rr(e, t) {
    var n = t ? e ? nr : tr : e ? er : Xn;
    return function(t, r, i) {
        return "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(S(n, r) && r in t ? n : t, r, i)
    }
}
var ir = {get: rr(!1, !1)
    },
    or = {get: rr(!1, !0)
    },
    ar = {get: rr(!0, !1)
    },
    sr = new WeakMap,
    ur = new WeakMap,
    cr = new WeakMap,
    lr = new WeakMap;
 function fr(e) {
    return gr(e) ? e : pr(e, !1, Ln, ir, sr)
}
 function hr(e) {
    return pr(e, !0, Mn, ar, cr)
}
 function pr(e, t, n, r, i) {
    if (!B(e)) return e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    var o = i.get(e);
    if (o) return o;
    var a = function(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : function(e) {
            switch (e) {
                case "Object":
                case "Array":
                    return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                    return 2;
                default:
                    return 0
            }
        }(function(e) {
            return j(e).slice(8, -1)
        }(e))
    }(e);
    if (0 === a) return e;
    var s = new Proxy(e, 2 === a ? r : n);
    return i.set(e, s), s
}
 function dr(e) {
    return gr(e) ? dr(e.__v_raw) : !(!e || !e.__v_isReactive)
}
 function gr(e) {
    return !(!e || !e.__v_isReadonly)
}
 function vr(e) {
    return !(!e || !e.__v_isShallow)
}
 function mr(e) {
    var t = e && e.__v_raw;
    return t ? mr(t) : e
}
 function yr(e) {
    return Object.isExtensible(e) && function(e, t, n) {
        Object.defineProperty(e, "__v_skip", {
            configurable: !0,
            enumerable: !1,
            value: !0
        })
    }(e), e
}
var _r = function(e) {
        return B(e) ? fr(e) : e
    },
    br = function(e) {
        return B(e) ? hr(e) : e
    },
    wr = function() {
        function e(t, n, r, i) {
            var o = this;
            u(this, e), this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new cn((function() {
                return t(o._value)
            }), (function() {
                return kr(o, 2 === o.effect._dirtyLevel ? 2 : 3)
            })), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r
        }
        return c(e, [{
            key: "value",
            get: function() {
                var e = mr(this);
                return e._cacheable && !e.effect.dirty || !K(e._value, e._value = e.effect.run()) || kr(e, 4), xr(e), e.effect._dirtyLevel >= 2 && kr(e, 2), e._value
            },
            set: function(e) {
                this._setter(e)
            }
        }, {
            key: "_dirty",
            get: function() {
                return this.effect.dirty
            },
            set: function(e) {
                this.effect.dirty = e
            }
        }]), e
    }();
 function xr(e) {
    var t;
    pn && en && (e = mr(e), bn(en, null != (t = e.dep) ? t : e.dep = kn((function() {
        return e.dep = void 0
    }), e instanceof wr ? e : void 0)))
}
 function kr(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        n = (e = mr(e)).dep;
    n && xn(n, t)
}
 function Sr(e) {
    return !(!e || !0 !== e.__v_isRef)
}
 function Tr(e) {
    return function(e, t) {
        return Sr(e) ? e : new Ir(e, !1)
    }(e)
}
var Ir = function() {
    function e(t, n) {
        u(this, e), this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : mr(t), this._value = n ? t : _r(t)
    }
    return c(e, [{
        key: "value",
        get: function() {
            return xr(this), this._value
        },
        set: function(e) {
            var t = this.__v_isShallow || vr(e) || gr(e);
            e = t ? e : mr(e), K(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : _r(e), kr(this, 4))
        }
    }]), e
}();
 function Er(e) {
    return Sr(e) ? e.value : e
}
var Ar = {get: function(e, t, n) {
        return Er(Reflect.get(e, t, n))
    },
    set: function(e, t, n, r) {
        var i = e[t];
        return Sr(i) && !Sr(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r)
    }
};
 function Cr(e) {
    return dr(e) ? e : new Proxy(e, Ar)
}
var Or = function() {
    function e(t, n, r) {
        u(this, e), this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    return c(e, [{
        key: "value",
        get: function() {
            var e = this._object[this._key];
            return void 0 === e ? this._defaultValue : e
        },
        set: function(e) {
            this._object[this._key] = e
        }
    }, {
        key: "dep",
        get: function() {
            return e = mr(this._object), t = this._key, null == (n = Sn.get(e)) ? void 0 : n.get(t);
            var e, t, n
        }
    }]), e
}();
 function Br(e, t, n) {
    var r = e[t];
    return Sr(r) ? r : new Or(e, t, n)
}
 function Pr(e, t, n, r) {
    try {
        return r ? e.apply(void 0, h(r)) : e()
    } catch (e) {
        jr(e, t, n)
    }
}
 function Fr(e, t, n, r) {
    if (A(e)) {
        var i = Pr(e, t, n, r);
        return i && P(i) && i.catch((function(e) {
            jr(e, t, n)
        })), i
    }
    for (var o = [], a = 0; a < e.length; a++) o.push(Fr(e[a], t, n, r));
    return o
}
 function jr(e, t, n) {
    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        i = t ? t.vnode : null;
    if (t) {
        for (var o = t.parent, a = t.proxy, s = "https://vuejs.org/error-reference/#runtime-".concat(n); o;) {
            var u = o.ec;
            if (u)
                for (var c = 0; c < u.length; c++)
                    if (!1 === u[c](e, a, s)) return;
            o = o.parent
        }
        var l = t.appContext.config.errorHandler;
        if (l) return void Pr(l, null, 10, [e, a, s])
    }
    Rr(e, n, i, r)
}
 function Rr(e, t, n) {
    console.error(e)
}
var Lr = !1,
    Mr = !1,
    Ur = [],
    Dr = 0,
    Nr = [],
    qr = null,
    zr = 0,
    $r = Promise.resolve(),
    Hr = null;
 function Kr(e) {
    var t = Hr || $r;
    return e ? t.then(this ? e.bind(this) : e) : t
}
 function Vr(e) {
    Ur.length && Ur.includes(e, Lr && e.allowRecurse ? Dr + 1 : Dr) || (null == e.id ? Ur.push(e) : Ur.splice(function(e) {
        for (var t = Dr + 1, n = Ur.length; t < n;) {
            var r = t + n >>> 1,
                i = Ur[r],
                o = Qr(i);
            o < e || o === e && i.pre ? t = r + 1 : n = r
        }
        return t
    }(e.id), 0, e), Wr())
}
 function Wr() {
    Lr || Mr || (Mr = !0, Hr = $r.then(Gr))
}
 function Zr(e) {
    T(e) ? Nr.push.apply(Nr, h(e)) : qr && qr.includes(e, e.allowRecurse ? zr + 1 : zr) || Nr.push(e), Wr()
}
 function Jr(e, t) {
    for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lr ? Dr + 1 : 0; n < Ur.length; n++) {
        var r = Ur[n];
        r && r.pre && (Ur.splice(n, 1), n--, r())
    }
}
var Qr = function(e) {
        return null == e.id ? 1 / 0 : e.id
    },
    Yr = function(e, t) {
        var n = Qr(e) - Qr(t);
        if (0 === n) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };
 function Gr(e) {
    Mr = !1, Lr = !0, Ur.sort(Yr);
    try {
        for (Dr = 0; Dr < Ur.length; Dr++) {
            var t = Ur[Dr];
            t && !1 !== t.active && Pr(t, null, 14)
        }
    } finally {
        Dr = 0, Ur.length = 0,
            function(e) {
                if (Nr.length) {
                    var t, n = h(new Set(Nr)).sort((function(e, t) {
                        return Qr(e) - Qr(t)
                    }));
                    if (Nr.length = 0, qr) return void(t = qr).push.apply(t, h(n));
                    for (qr = n, zr = 0; zr < qr.length; zr++) qr[zr]();
                    qr = null, zr = 0
                }
            }(), Lr = !1, Hr = null, (Ur.length || Nr.length) && Gr()
    }
}
 function Xr(e, t) {
    if (!e.isUnmounted) {
        for (var n = e.vnode.props || g, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
        var a = i,
            s = t.startsWith("update:"),
            u = s && t.slice(7);
        if (u && u in n) {
            var c = "".concat("modelValue" === u ? "model" : u, "Modifiers"),
                l = n[c] || g,
                f = l.number,
                h = l.trim;
            h && (a = i.map((function(e) {
                return C(e) ? e.trim() : e
            }))), f && (a = i.map(W))
        }
        var p, d = n[p = H(t)] || n[p = H(N(t))];
        !d && s && (d = n[p = H(z(t))]), d && Fr(d, e, 6, a);
        var v = n[p + "Once"];
        if (v) {
            if (e.emitted) {
                if (e.emitted[p]) return
            } else e.emitted = {};
            e.emitted[p] = !0, Fr(v, e, 6, a)
        }
    }
}
 function ei(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = t.emitsCache,
        i = r.get(e);
    if (void 0 !== i) return i;
    var o = e.emits,
        a = {},
        s = !1;
    if (!A(e)) {
        var u = function(e) {
            var n = ei(e, t, !0);
            n && (s = !0, w(a, n))
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    return o || s ? (T(o) ? o.forEach((function(e) {
        return a[e] = null
    })) : w(a, o), B(e) && r.set(e, a), a) : (B(e) && r.set(e, null), null)
}
 function ti(e, t) {
    return !(!e || !_(t)) && (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, z(t)) || S(e, t))
}
var ni = null;
 function ri(e) {
    var t = ni;
    return ni = e, e && e.type.__scopeId, t
}
 function ii(e, t) {
    return e && (e[t] || e[N(t)] || e[$(N(t))])
}
var oi = {};
 function ai(e, t, n) {
    return si(e, t, n)
}
 function si(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g,
        r = n.immediate,
        i = n.deep,
        o = n.flush,
        a = n.once;
    n.onTrack, n.onTrigger;
    if (t && a) {
        var s = t;
        t = function() {
            s.apply(void 0, arguments), S()
        }
    }
    var u, c, l = so,
        f = function(e) {
            return !0 === i ? e : li(e, !1 === i ? 1 : void 0)
        },
        h = !1,
        p = !1;
    if (Sr(e) ? (u = function() {
            return e.value
        }, h = vr(e)) : dr(e) ? (u = function() {
            return f(e)
        }, h = !0) : T(e) ? (p = !0, h = e.some((function(e) {
            return dr(e) || vr(e)
        })), u = function() {
            return e.map((function(e) {
                return Sr(e) ? e.value : dr(e) ? f(e) : A(e) ? Pr(e, l, 2) : void 0
            }))
        }) : u = A(e) ? t ? function() {
            return Pr(e, l, 2)
        } : function() {
            return c && c(), Fr(e, l, 3, [y])
        } : m, t && i) {
        var d = u;
        u = function() {
            return li(d())
        }
    }
    var v, y = function(e) {
            c = w.onStop = function() {
                Pr(e, l, 4), c = w.onStop = void 0
            }
        },
        _ = p ? new Array(e.length).fill(oi) : oi,
        b = function() {
            if (w.active && w.dirty)
                if (t) {
                    var e = w.run();
                    (i || h || (p ? e.some((function(e, t) {
                        return K(e, _[t])
                    })) : K(e, _))) && (c && c(), Fr(t, l, 3, [e, _ === oi ? void 0 : p && _[0] === oi ? [] : _, y]), _ = e)
                } else w.run()
        };
    b.allowRecurse = !!t, "sync" === o ? v = b : "post" === o ? v = function() {
        return to(b, l && l.suspense)
    } : (b.pre = !0, l && (b.id = l.uid), v = function() {
        return Vr(b)
    });
    var w = new cn(u, m, v),
        k = Xt,
        S = function() {
            w.stop(), k && x(k.effects, w)
        };
    return t ? r ? b() : _ = w.run() : "post" === o ? to(w.run.bind(w), l && l.suspense) : w.run(), S
}
 function ui(e, t, n) {
    var r, i = this.proxy,
        o = C(e) ? e.includes(".") ? ci(i, e) : function() {
            return i[e]
        } : e.bind(i, i);
    A(t) ? r = t : (r = t.handler, n = t);
    var a = co(this),
        s = si(o, r.bind(i), n);
    return a(), s
}
 function ci(e, t) {
    var n = t.split(".");
    return function() {
        for (var t = e, r = 0; r < n.length && t; r++) t = t[n[r]];
        return t
    }
}
 function li(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (!B(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (n >= t) return e;
        n++
    }
    if ((r = r || new Set).has(e)) return e;
    if (r.add(e), Sr(e)) li(e.value, t, n, r);
    else if (T(e))
        for (var i = 0; i < e.length; i++) li(e[i], t, n, r);
    else if (E(e) || I(e)) e.forEach((function(e) {
        li(e, t, n, r)
    }));
    else if (R(e))
        for (var o in e) li(e[o], t, n, r);
    return e
}
 function fi() {
    return {
        app: null,
        config: {
            isNativeTag: y,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
var hi = 0,
    pi = null;
 function di(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = so || ni;
        if (r || pi) {
            var i = r ? null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : pi._context.provides;
            if (i && e in i) return i[e];
            if (arguments.length > 1) return n && A(t) ? t.call(r && r.proxy) : t
        }
    }
    /*! #__NO_SIDE_EFFECTS__ */
function gi(e, t) {
    mi(e, "a", t)
}
 function vi(e, t) {
    mi(e, "da", t)
}
 function mi(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : so,
        r = e.__wdc || (e.__wdc = function() {
            for (var t = n; t;) {
                if (t.isDeactivated) return;
                t = t.parent
            }
            return e()
        });
    if (_i(t, r, n), n)
        for (var i = n.parent; i && i.parent;) i.parent.vnode.type.__isKeepAlive && yi(r, t, n, i), i = i.parent
}
 function yi(e, t, n, r) {
    var i = _i(t, e, r, !0);
    Ii((function() {
        x(r[t], i)
    }), n)
}
 function _i(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : so,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (n) {
        (function(e) {
            return ae.indexOf(e) > -1
        })(e) && (n = n.root);
        var i = n[e] || (n[e] = []),
            o = t.__weh || (t.__weh = function() {
                if (!n.isUnmounted) {
                    vn();
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    var a = co(n),
                        s = Fr(t, n, e, i);
                    return a(), mn(), s
                }
            });
        return r ? i.unshift(o) : i.push(o), o
    }
}
var bi = function(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : so;
            return (!ho || "sp" === e) && _i(e, (function() {
                return t.apply(void 0, arguments)
            }), n)
        }
    },
    wi = bi("bm"),
    xi = bi("m"),
    ki = bi("bu"),
    Si = bi("u"),
    Ti = bi("bum"),
    Ii = bi("um"),
    Ei = bi("sp"),
    Ai = bi("rtg"),
    Ci = bi("rtc");
 function Oi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : so;
    _i("ec", e, t)
}
var Bi = function e(t) {
        return t ? fo(t) ? go(t) || t.proxy : e(t.parent) : null
    },
    Pi = w(Object.create(null), {
        $: function(e) {
            return e
        },
        $el: function(e) {
            return e.__$el || (e.__$el = {})
        },
        $data: function(e) {
            return e.data
        },
        $props: function(e) {
            return e.props
        },
        $attrs: function(e) {
            return e.attrs
        },
        $slots: function(e) {
            return e.slots
        },
        $refs: function(e) {
            return e.refs
        },
        $parent: function(e) {
            return Bi(e.parent)
        },
        $root: function(e) {
            return Bi(e.root)
        },
        $emit: function(e) {
            return e.emit
        },
        $options: function(e) {
            return Di(e)
        },
        $forceUpdate: function(e) {
            return e.f || (e.f = function() {
                e.effect.dirty = !0, Vr(e.update)
            })
        },
        $watch: function(e) {
            return ui.bind(e)
        }
    }),
    Fi = function(e, t) {
        return e !== g && !e.__isScriptSetup && S(e, t)
    },
    ji = {get: function(e, t) {
            var n, r = e._,
                i = r.ctx,
                o = r.setupState,
                a = r.data,
                s = r.props,
                u = r.accessCache,
                c = r.type,
                l = r.appContext;
            if ("$" !== t[0]) {
                var f = u[t];
                if (void 0 !== f) switch (f) {
                    case 1:
                        return o[t];
                    case 2:
                        return a[t];
                    case 4:
                        return i[t];
                    case 3:
                        return s[t]
                } else {
                    if (Fi(o, t)) return u[t] = 1, o[t];
                    if (a !== g && S(a, t)) return u[t] = 2, a[t];
                    if ((n = r.propsOptions[0]) && S(n, t)) return u[t] = 3, s[t];
                    if (i !== g && S(i, t)) return u[t] = 4, i[t];
                    Li && (u[t] = 0)
                }
            }
            var h, p, d = Pi[t];
            return d ? ("$attrs" === t && En(r, 0, t), d(r)) : (h = c.__cssModules) && (h = h[t]) ? h : i !== g && S(i, t) ? (u[t] = 4, i[t]) : (p = l.config.globalProperties, S(p, t) ? p[t] : void 0)
        },
        set: function(e, t, n) {
            var r = e._,
                i = r.data,
                o = r.setupState,
                a = r.ctx;
            return Fi(o, t) ? (o[t] = n, !0) : i !== g && S(i, t) ? (i[t] = n, !0) : !(S(r.props, t) || "$" === t[0] && t.slice(1) in r || (a[t] = n, 0))
        },
        has: function(e, t) {
            var n, r = e._,
                i = r.data,
                o = r.setupState,
                a = r.accessCache,
                s = r.ctx,
                u = r.appContext,
                c = r.propsOptions;
            return !!a[t] || i !== g && S(i, t) || Fi(o, t) || (n = c[0]) && S(n, t) || S(s, t) || S(Pi, t) || S(u.config.globalProperties, t)
        },
        defineProperty: function(e, t, n) {
            return null != n.get ? e._.accessCache[t] = 0 : S(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };
 function Ri(e) {
    return T(e) ? e.reduce((function(e, t) {
        return e[t] = null, e
    }), {}) : e
}
var Li = !0;
 function Mi(e, t, n) {
    Fr(T(e) ? e.map((function(e) {
        return e.bind(t.proxy)
    })) : e.bind(t.proxy), t, n)
}
 function Ui(e, t, n, r) {
    var i = r.includes(".") ? ci(n, r) : function() {
        return n[r]
    };
    if (C(e)) {
        var o = t[e];
        A(o) && ai(i, o)
    } else if (A(e)) ai(i, e.bind(n));
    else if (B(e))
        if (T(e)) e.forEach((function(e) {
            return Ui(e, t, n, r)
        }));
        else {
            var a = A(e.handler) ? e.handler.bind(n) : t[e.handler];
            A(a) && ai(i, a, e)
        }
}
 function Di(e) {
    var t, n = e.type,
        r = n.mixins,
        i = n.extends,
        o = e.appContext,
        a = o.mixins,
        s = o.optionsCache,
        u = o.config.optionMergeStrategies,
        c = s.get(n);
    return c ? t = c : a.length || r || i ? (t = {}, a.length && a.forEach((function(e) {
        return Ni(t, e, u, !0)
    })), Ni(t, n, u)) : t = n, B(n) && s.set(n, t), t
}
 function Ni(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.mixins,
        o = t.extends;
    for (var a in o && Ni(e, o, n, !0), i && i.forEach((function(t) {
            return Ni(e, t, n, !0)
        })), t)
        if (r && "expose" === a);
        else {
            var s = qi[a] || n && n[a];
            e[a] = s ? s(e[a], t[a]) : t[a]
        }
    return e
}
var qi = {
    data: zi,
    props: Vi,
    emits: Vi,
    methods: Ki,
    computed: Ki,
    beforeCreate: Hi,
    created: Hi,
    beforeMount: Hi,
    mounted: Hi,
    beforeUpdate: Hi,
    updated: Hi,
    beforeDestroy: Hi,
    beforeUnmount: Hi,
    destroyed: Hi,
    unmounted: Hi,
    activated: Hi,
    deactivated: Hi,
    errorCaptured: Hi,
    serverPrefetch: Hi,
    components: Ki,
    directives: Ki,
    watch: function(e, t) {
        if (!e) return t;
        if (!t) return e;
        var n = w(Object.create(null), e);
        for (var r in t) n[r] = Hi(e[r], t[r]);
        return n
    },
    provide: zi,
    inject: function(e, t) {
        return Ki($i(e), $i(t))
    }
};
 function zi(e, t) {
    return t ? e ? function() {
        return w(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t)
    } : t : e
}
 function $i(e) {
    if (T(e)) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}
 function Hi(e, t) {
    return e ? h(new Set([].concat(e, t))) : t
}
 function Ki(e, t) {
    return e ? w(Object.create(null), e, t) : t
}
 function Vi(e, t) {
    return e ? T(e) && T(t) ? h(new Set([].concat(h(e), h(t)))) : w(Object.create(null), Ri(e), Ri(null != t ? t : {})) : t
}
 function Wi(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {},
        o = {};
    for (var a in e.propsDefaults = Object.create(null), Zi(e, t, i, o), e.propsOptions[0]) a in i || (i[a] = void 0);
    n ? e.props = r ? i : pr(i, !1, Un, or, ur) : e.type.props ? e.props = i : e.props = o, e.attrs = o
}
 function Zi(e, t, n, r) {
    var i, o = f(e.propsOptions, 2),
        a = o[0],
        s = o[1],
        u = !1;
    if (t)
        for (var c in t)
            if (!M(c)) {
                var l = t[c],
                    h = void 0;
                a && S(a, h = N(c)) ? s && s.includes(h) ? (i || (i = {}))[h] = l : n[h] = l : ti(e.emitsOptions, c) || c in r && l === r[c] || (r[c] = l, u = !0)
            }
    if (s)
        for (var p = mr(n), d = i || g, v = 0; v < s.length; v++) {
            var m = s[v];
            n[m] = Ji(a, p, m, d[m], e, !S(d, m))
        }
    return u
}
 function Ji(e, t, n, r, i, o) {
    var a = e[n];
    if (null != a) {
        var s = S(a, "default");
        if (s && void 0 === r) {
            var u = a.default;
            if (a.type !== Function && !a.skipFactory && A(u)) {
                var c = i.propsDefaults;
                if (n in c) r = c[n];
                else {
                    var l = co(i);
                    r = c[n] = u.call(null, t), l()
                }
            } else r = u
        }
        a[0] && (o && !s ? r = !1 : !a[1] || "" !== r && r !== z(n) || (r = !0))
    }
    return r
}
 function Qi(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = t.propsCache,
        i = r.get(e);
    if (i) return i;
    var o = e.props,
        a = {},
        s = [],
        u = !1;
    if (!A(e)) {
        var c = function(e) {
            u = !0;
            var n = Qi(e, t, !0),
                r = f(n, 2),
                i = r[0],
                o = r[1];
            w(a, i), o && s.push.apply(s, h(o))
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!o && !u) return B(e) && r.set(e, v), v;
    if (T(o))
        for (var l = 0; l < o.length; l++) {
            var p = N(o[l]);
            Yi(p) && (a[p] = g)
        } else if (o)
            for (var d in o) {
                var m = N(d);
                if (Yi(m)) {
                    var y = o[d],
                        _ = a[m] = T(y) || A(y) ? {
                            type: y
                        } : w({}, y);
                    if (_) {
                        var b = eo(Boolean, _.type),
                            x = eo(String, _.type);
                        _[0] = b > -1, _[1] = x < 0 || b < x, (b > -1 || S(_, "default")) && s.push(m)
                    }
                }
            }
        var k = [a, s];
    return B(e) && r.set(e, k), k
}
 function Yi(e) {
    return "$" !== e[0] && !M(e)
}
 function Gi(e) {
    return null === e ? "null" : "function" == typeof e ? e.name || "" : "object" == p(e) && e.constructor && e.constructor.name || ""
}
 function Xi(e, t) {
    return Gi(e) === Gi(t)
}
 function eo(e, t) {
    return T(t) ? t.findIndex((function(t) {
        return Xi(t, e)
    })) : A(t) && Xi(t, e) ? 0 : -1
}
var to = Zr;
var no = fi(),
    ro = 0;
 function io(e, t, n) {
    var r = e.type,
        i = (t ? t.appContext : e.appContext) || no,
        o = {
            uid: ro++,
            vnode: e,
            type: r,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new un(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Qi(r, i),
            emitsOptions: ei(r, i),
            emit: null,
            emitted: null,
            propsDefaults: g,
            inheritAttrs: r.inheritAttrs,
            ctx: g,
            data: g,
            props: g,
            attrs: g,
            slots: g,
            refs: g,
            setupState: g,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
            $uniElements: new Map,
            $templateUniElementRefs: [],
            $templateUniElementStyles: {},
            $eS: {},
            $eA: {}
        };
    return o.ctx = {
        _: o
    }, o.root = t ? t.root : o, o.emit = Xr.bind(null, o), e.ce && e.ce(o), o
}
var oo, ao, so = null,
    uo = function() {
        return so || ni
    };
oo = function(e) {
    so = e
}, ao = function(e) {
    ho = e
};
var co = function(e) {
        var t = so;
        return oo(e), e.scope.on(),
            function() {
                e.scope.off(), oo(t)
            }
    },
    lo = function() {
        so && so.scope.off(), oo(null)
    };
 function fo(e) {
    return 4 & e.vnode.shapeFlag
}
var ho = !1;
 function po(e, t, n) {
    var r = e.type;
    e.render || (e.render = r.render || m);
    var i = co(e);
    vn();
    try {
        ! function(e) {
            var t = Di(e),
                n = e.proxy,
                r = e.ctx;
            Li = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
            var i = t.data,
                o = t.computed,
                a = t.methods,
                s = t.watch,
                u = t.provide,
                c = t.inject,
                l = t.created,
                f = t.beforeMount,
                h = t.mounted,
                p = t.beforeUpdate,
                d = t.updated,
                g = t.activated,
                v = t.deactivated,
                y = (t.beforeDestroy, t.beforeUnmount),
                _ = (t.destroyed, t.unmounted),
                b = t.render,
                w = t.renderTracked,
                x = t.renderTriggered,
                k = t.errorCaptured,
                S = t.serverPrefetch,
                I = t.expose,
                E = t.inheritAttrs,
                C = t.components,
                O = t.directives;
            if (t.filters, c && function(e, t) {
                    T(e) && (e = $i(e));
                    var n = function() {
                        var n, i = e[r];
                        Sr(n = B(i) ? "default" in i ? di(i.from || r, i.default, !0) : di(i.from || r) : di(i)) ? Object.defineProperty(t, r, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return n.value
                            },
                            set: function(e) {
                                return n.value = e
                            }
                        }) : t[r] = n
                    };
                    for (var r in e) n()
                }(c, r, null), a)
                for (var P in a) {
                    var F = a[P];
                    A(F) && (r[P] = F.bind(n))
                }
            if (i) {
                var j = i.call(n, n);
                B(j) && (e.data = fr(j))
            }
            if (Li = !0, o) {
                var R = function() {
                    var e = o[L],
                        t = A(e) ? e.bind(n, n) : A(e.get) ? e.get.bind(n, n) : m,
                        i = !A(e) && A(e.set) ? e.set.bind(n) : m,
                        a = vo({get: t,
                            set: i
                        });
                    Object.defineProperty(r, L, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return a.value
                        },
                        set: function(e) {
                            return a.value = e
                        }
                    })
                };
                for (var L in o) R()
            }
            if (s)
                for (var M in s) Ui(s[M], r, n, M);
             function U(e, t) {
                T(t) ? t.forEach((function(t) {
                    return e(t.bind(n))
                })) : t && e(t.bind(n))
            }
            if (function() {
                    if (u) {
                        var e = A(u) ? u.call(n) : u;
                        Reflect.ownKeys(e).forEach((function(t) {
                            ! function(e, t) {
                                if (so) {
                                    var n = so.provides,
                                        r = so.parent && so.parent.provides;
                                    r === n && (n = so.provides = Object.create(r)), n[e] = t, "app" === so.type.mpType && so.appContext.app.provide(e, t)
                                }
                            }(t, e[t])
                        }))
                    }
                }(), l && Mi(l, e, "c"), U(wi, f), U(xi, h), U(ki, p), U(Si, d), U(gi, g), U(vi, v), U(Oi, k), U(Ci, w), U(Ai, x), U(Ti, y), U(Ii, _), U(Ei, S), T(I))
                if (I.length) {
                    var D = e.exposed || (e.exposed = {});
                    I.forEach((function(e) {
                        Object.defineProperty(D, e, {get: function() {
                                return n[e]
                            },
                            set: function(t) {
                                return n[e] = t
                            }
                        })
                    }))
                } else e.exposed || (e.exposed = {});
            b && e.render === m && (e.render = b), null != E && (e.inheritAttrs = E), C && (e.components = C), O && (e.directives = O), e.ctx.$onApplyOptions && e.ctx.$onApplyOptions(t, e, n)
        }(e)
    } finally {
        mn(), i()
    }
}
 function go(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Cr(yr(e.exposed)), {get: function(t, n) {
            return n in t ? t[n] : e.proxy[n]
        },
        has: function(e, t) {
            return t in e || t in Pi
        }
    }))
}
var vo = function(e, t) {
    return function(e, t) {
        var n, r, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = A(e);
        return o ? (n = e, r = m) : (n = e.get, r = e.set), new wr(n, r, o || !r, i)
    }(e, 0, ho)
};
 function mo(e) {
    return Er(e)
}
var yo = "[object Array]",
    _o = "[object Object]";
 function bo(e, t) {
    var n = {};
    return function e(t, n) {
            if ((t = mo(t)) === n) return;
            var r = j(t),
                i = j(n);
            if (r == _o && i == _o)
                for (var o in n) {
                    var a = t[o];
                    void 0 === a ? t[o] = null : e(a, n[o])
                } else r == yo && i == yo && t.length >= n.length && n.forEach((function(n, r) {
                    e(t[r], n)
                }))
        }(e, t),
        function e(t, n, r, i) {
            if ((t = mo(t)) === n) return;
            var o = j(t),
                a = j(n);
            if (o == _o)
                if (a != _o || Object.keys(t).length < Object.keys(n).length) wo(i, r, t);
                else {
                    var s = function(o) {
                        var a = mo(t[o]),
                            s = n[o],
                            u = j(a),
                            c = j(s);
                        if (u != yo && u != _o) a != s && wo(i, ("" == r ? "" : r + ".") + o, a);
                        else if (u == yo) c != yo || a.length < s.length ? wo(i, ("" == r ? "" : r + ".") + o, a) : a.forEach((function(t, n) {
                            e(t, s[n], ("" == r ? "" : r + ".") + o + "[" + n + "]", i)
                        }));
                        else if (u == _o)
                            if (c != _o || Object.keys(a).length < Object.keys(s).length) wo(i, ("" == r ? "" : r + ".") + o, a);
                            else
                                for (var l in a) e(a[l], s[l], ("" == r ? "" : r + ".") + o + "." + l, i)
                    };
                    for (var u in t) s(u)
                } else o == yo ? a != yo || t.length < n.length ? wo(i, r, t) : t.forEach((function(t, o) {
                e(t, n[o], r + "[" + o + "]", i)
            })) : wo(i, r, t)
        }(e, t, "", n), n
}
 function wo(e, t, n) {
    e[t] = n
}
 function xo(e) {
    var t = e.ctx.__next_tick_callbacks;
    if (t && t.length) {
        var n = t.slice(0);
        t.length = 0;
        for (var r = 0; r < n.length; r++) n[r]()
    }
}
 function ko(e, t) {
    var n, r = e.ctx;
    return r.__next_tick_pending || function(e) {
        return Ur.includes(e.update)
    }(e) ? (r.__next_tick_callbacks || (r.__next_tick_callbacks = []), r.__next_tick_callbacks.push((function() {
        t ? Pr(t.bind(e.proxy), e, 14) : n && n(e.proxy)
    })), new Promise((function(e) {
        n = e
    }))) : Kr(t && t.bind(e.proxy))
}
 function So(e) {
    return function e(t, n) {
        var r = p(t = mo(t));
        if ("object" === r && null !== t) {
            var i = n.get(t);
            if (void 0 !== i) return i;
            if (T(t)) {
                var o = t.length;
                i = new Array(o), n.set(t, i);
                for (var a = 0; a < o; a++) i[a] = e(t[a], n)
            } else
                for (var s in i = {}, n.set(t, i), t) S(t, s) && (i[s] = e(t[s], n));
            return i
        }
        if ("symbol" !== r) return t
    }(e, "undefined" != typeof WeakMap ? new WeakMap : new Map)
}
 function To(e, t, n) {
    if (t) {
        (t = So(t)).$eS = e.$eS || {}, t.$eA = e.$eA || {};
        var r = e.ctx,
            i = r.mpType;
        if ("page" === i || "component" === i) {
            t.r0 = 1;
            var o = r.$scope,
                a = Object.keys(t),
                s = bo(t, n || function(e, t) {
                    var n = e.data,
                        r = Object.create(null);
                    return t.forEach((function(e) {
                        r[e] = n[e]
                    })), r
                }(o, a));
            Object.keys(s).length ? (r.__next_tick_pending = !0, o.setData(s, (function() {
                r.__next_tick_pending = !1, xo(e)
            })), Jr()) : xo(e)
        }
    }
}
 function Io(e, t, n) {
    t.appContext.config.globalProperties.$applyOptions(e, t, n);
    var r = e.computed;
    if (r) {
        var i = Object.keys(r);
        if (i.length) {
            var o, a = t.ctx;
            a.$computedKeys || (a.$computedKeys = []), (o = a.$computedKeys).push.apply(o, i)
        }
    }
    delete t.ctx.$onApplyOptions
}
 function Eo(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.setupState,
        r = e.$templateRefs,
        i = e.$templateUniElementRefs,
        o = e.ctx,
        a = o.$scope,
        s = o.$mpPlatform;
    if ("mp-alipay" !== s && a && (r || i)) {
        if (t) return r && r.forEach((function(e) {
            return Ao(e, null, n)
        })), void(i && i.forEach((function(e) {
            return Ao(e, null, n)
        })));
        var u = "mp-baidu" === s || "mp-toutiao" === s,
            c = function(e) {
                if (0 === e.length) return [];
                var t = (a.selectAllComponents(".r") || []).concat(a.selectAllComponents(".r-i-f") || []);
                return e.filter((function(e) {
                    var r = function(e, t) {
                        var n = e.find((function(e) {
                            return e && (e.properties || e.props).uI === t
                        }));
                        if (n) {
                            var r = n.$vm;
                            return r ? go(r.$) || r : function(e) {
                                return B(e) && yr(e), e
                            }(n)
                        }
                        return null
                    }(t, e.i);
                    return !(!u || null !== r) || (Ao(e, r, n), !1)
                }))
            },
            l = function() {
                if (r) {
                    var t = c(r);
                    t.length && e.proxy && e.proxy.$scope && e.proxy.$scope.setData({
                        r1: 1
                    }, (function() {
                        c(t)
                    }))
                }
            };
        i && i.length && ko(e, (function() {
            i.forEach((function(e) {
                T(e.v) ? e.v.forEach((function(t) {
                    Ao(e, t, n)
                })) : Ao(e, e.v, n)
            }))
        })), a._$setRef ? a._$setRef(l) : ko(e, l)
    }
}
 function Ao(e, t, n) {
    var r = e.r,
        i = e.f;
    if (A(r)) r(t, {});
    else {
        var o = C(r),
            a = Sr(r);
        if (o || a)
            if (i) {
                if (!a) return;
                T(r.value) || (r.value = []);
                var s = r.value;
                if (-1 === s.indexOf(t)) {
                    if (s.push(t), !t) return;
                    t.$ && Ti((function() {
                        return x(s, t)
                    }), t.$)
                }
            } else o ? S(n, r) && (n[r] = t) : Sr(r) && (r.value = t)
    }
}
var Co = Zr;
 function Oo(e, t) {
    var n = e.component = io(e, t.parentComponent, null);
    return n.renderer = t.mpType ? t.mpType : "component", n.ctx.$onApplyOptions = Io, n.ctx.$children = [], "app" === t.mpType && (n.render = m), t.onBeforeSetup && t.onBeforeSetup(n, t),
        function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && ao(t);
            var n = e.vnode.props,
                r = fo(e);
            Wi(e, n, r, t);
            var i = r ? function(e, t) {
                var n = e.type;
                e.accessCache = Object.create(null), e.proxy = yr(new Proxy(e.ctx, ji));
                var r = n.setup;
                if (r) {
                    var i = e.setupContext = r.length > 1 ? function(e) {
                            return {get attrs() {
                                    return function(e) {
                                        return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {get: function(t, n) {
                                                return En(e, 0, "$attrs"), t[n]
                                            }
                                        }))
                                    }(e)
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: function(t) {
                                    e.exposed = t || {}
                                }
                            }
                        }(e) : null,
                        o = co(e);
                    vn();
                    var a = Pr(r, e, 0, [e.props, i]);
                    mn(), o(), P(a) ? a.then(lo, lo) : function(e, t, n) {
                        A(t) ? e.render = t : B(t) && (e.setupState = Cr(t)), po(e)
                    }(e, a)
                } else po(e)
            }(e) : void 0;
            t && ao(!1)
        }(n), t.parentComponent && n.proxy && t.parentComponent.ctx.$children.push(go(n) || n.proxy),
        function(e) {
            var t = Fo.bind(e);
            e.$updateScopedSlots = function() {
                return Kr((function() {
                    return Vr(t)
                }))
            };
            var n = e.effect = new cn((function() {
                    if (e.isMounted) {
                        e.next;
                        var t = e.bu,
                            n = e.u;
                        jo(e, !1), vn(), Jr(), mn(), t && V(t), jo(e, !0), To(e, Bo(e)), n && Co(n)
                    } else Ti((function() {
                        Eo(e, !0)
                    }), e), To(e, Bo(e))
                }), m, (function() {
                    return Vr(r)
                }), e.scope),
                r = e.update = function() {
                    n.dirty && n.run()
                };
            r.id = e.uid, jo(e, !0), r()
        }(n), n.proxy
}
 function Bo(e) {
    var t, n = e.type,
        r = e.vnode,
        i = e.proxy,
        o = e.withProxy,
        a = e.props,
        s = f(e.propsOptions, 1)[0],
        u = e.slots,
        c = e.attrs,
        l = e.emit,
        h = e.render,
        p = e.renderCache,
        d = e.data,
        g = e.setupState,
        v = e.ctx,
        m = e.uid,
        y = e.appContext.app.config.globalProperties.pruneComponentPropsCache,
        b = e.inheritAttrs;
    e.$uniElementIds = new Map, e.$templateRefs = [], e.$templateUniElementRefs = [], e.$templateUniElementStyles = {}, e.$ei = 0, y(m), e.__counter = 0 === e.__counter ? 1 : 0;
    var w = ri(e);
    try {
        if (4 & r.shapeFlag) {
            Po(b, a, s, c);
            var x = o || i;
            t = h.call(x, x, p, a, g, d, v)
        } else {
            Po(b, a, s, n.props ? c : function(e) {
                var t;
                for (var n in e)("class" === n || "style" === n || _(n)) && ((t || (t = {}))[n] = e[n]);
                return t
            }(c));
            var k = n;
            t = k.length > 1 ? k(a, {
                attrs: c,
                slots: u,
                emit: l
            }) : k(a, null)
        }
    } catch (n) {
        jr(n, e, 1), t = !1
    }
    return Eo(e), ri(w), t
}
 function Po(e, t, n, r) {
    if (t && r && !1 !== e) {
        var i = Object.keys(r).filter((function(e) {
            return "class" !== e && "style" !== e
        }));
        if (!i.length) return;
        n && i.some(b) ? i.forEach((function(e) {
            b(e) && e.slice(9) in n || (t[e] = r[e])
        })) : i.forEach((function(e) {
            return t[e] = r[e]
        }))
    }
}
 function Fo() {
    var e = this.$scopedSlotsData;
    if (e && 0 !== e.length) {
        var t = this.ctx.$scope,
            n = t.data,
            r = Object.create(null);
        e.forEach((function(e) {
            var t = e.path,
                i = e.index,
                o = e.data,
                a = function e(t, n) {
                    if (C(n)) {
                        var r = (n = n.replace(/\[(\d+)\]/g, ".$1")).split("."),
                            i = r[0];
                        return t || (t = {}), 1 === r.length ? t[i] : e(t[i], r.slice(1).join("."))
                    }
                }(n, t),
                s = C(i) ? "".concat(t, ".").concat(i) : "".concat(t, "[").concat(i, "]");
            if (void 0 === a || void 0 === a[i]) r[s] = o;
            else {
                var u = bo(o, a[i]);
                Object.keys(u).forEach((function(e) {
                    r[s + "." + e] = u[e]
                }))
            }
        })), e.length = 0, Object.keys(r).length && t.setData(r)
    }
}
 function jo(e, t) {
    var n = e.effect,
        r = e.update;
    n.allowRecurse = r.allowRecurse = t
}
var Ro, Lo = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    A(e) || (e = w({}, e)), null == t || B(t) || (t = null);
    var n = fi(),
        r = new WeakSet,
        i = n.app = {
            _uid: hi++,
            _component: e,
            _props: t,
            _container: null,
            _context: n,
            _instance: null,
            version: "3.4.21",
            get config() {
                return n.config
            },
            set config(e) {},
            use: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                return r.has(e) || (e && A(e.install) ? (r.add(e), e.install.apply(e, [i].concat(n))) : A(e) && (r.add(e), e.apply(void 0, [i].concat(n)))), i
            },
            mixin: function(e) {
                return n.mixins.includes(e) || n.mixins.push(e), i
            },
            component: function(e, t) {
                return t ? (n.components[e] = t, i) : n.components[e]
            },
            directive: function(e, t) {
                return t ? (n.directives[e] = t, i) : n.directives[e]
            },
            mount: function() {},
            unmount: function() {},
            provide: function(e, t) {
                return n.provides[e] = t, i
            },
            runWithContext: function(e) {
                var t = pi;
                pi = i;
                try {
                    return e()
                } finally {
                    pi = t
                }
            }
        };
    return i
};
 function Mo(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    ("undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof my ? my : void 0).__VUE__ = !0;
    var n = Lo(e, t),
        r = n._context;
    r.config.globalProperties.$nextTick = function(e) {
        return ko(this.$, e)
    };
    var i = function(e) {
            return e.appContext = r, e.shapeFlag = 6, e
        },
        o = function(e, t) {
            return Oo(i(e), t)
        },
        a = function(e) {
            return e && function(e) {
                var t = e.bum,
                    n = e.scope,
                    r = e.update,
                    i = e.um;
                t && V(t);
                var o = e.parent;
                if (o) {
                    var a = o.ctx.$children,
                        s = go(e) || e.proxy,
                        u = a.indexOf(s);
                    u > -1 && a.splice(u, 1)
                }
                n.stop(), r && (r.active = !1), i && Co(i), Co((function() {
                    e.isUnmounted = !0
                }))
            }(e.$)
        };
    return n.mount = function() {
        e.render = m;
        var t = Oo(i({
            type: e
        }), {
            mpType: "app",
            mpInstance: null,
            parentComponent: null,
            slots: [],
            props: null
        });
        return n._instance = t.$, t.$app = n, t.$createComponent = o, t.$destroyComponent = a, r.$appInstance = t, t
    }, n.unmount = function() {}, n
}
 function Uo(e, t, n, r) {
    A(t) && _i(e, t.bind(n), r)
}
 function Do(e, t, n) {
    ! function(e, t, n) {
        var r = e.mpType || n.$mpType;
        !r || "component" === r || "page" === r && "component" === t.renderer || Object.keys(e).forEach((function(r) {
            if (ce(r, e[r], !1)) {
                var i = e[r];
                T(i) ? i.forEach((function(e) {
                    return Uo(r, e, n, t)
                })) : Uo(r, i, n, t)
            }
        }))
    }(e, t, n)
}
 function No(e, t, n) {
    return e[t] = n
}
 function qo(e) {
    for (var t = this[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return t ? t.apply(void 0, r) : (console.error("method ".concat(e, " not found")), null)
}
 function zo(e) {
    var t = e.config.errorHandler;
    return function(n, r, i) {
        t && t(n, r, i);
        var o = e._instance;
        if (!o || !o.proxy) throw n;
        o.onError ? o.proxy.$callHook("onError", n) : Rr(n, 0, r && r.$.vnode, !1)
    }
}
 function $o(e, t) {
    return e ? h(new Set([].concat(e, t))) : t
}
var Ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Ko = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
 function Vo() {
    var e, t, n = sn.getStorageSync("uni_id_token") || "",
        r = n.split(".");
    if (!n || 3 !== r.length) return {
        uid: null,
        role: [],
        permission: [],
        tokenExpired: 0
    };
    try {
        e = JSON.parse((t = r[1], decodeURIComponent(Ro(t).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        })).join(""))))
    } catch (e) {
        throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message)
    }
    return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e
}
Ro = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Ko.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t;
    e += "==".slice(2 - (3 & e.length));
    for (var n, r, i = "", o = 0; o < e.length;) t = Ho.indexOf(e.charAt(o++)) << 18 | Ho.indexOf(e.charAt(o++)) << 12 | (n = Ho.indexOf(e.charAt(o++))) << 6 | (r = Ho.indexOf(e.charAt(o++))), i += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
    return i
} : atob;
var Wo = Object.create(null);
 function Zo(e) {
    delete Wo[e]
}
 function Jo(e) {
    if (e) {
        var t = e.split(","),
            n = f(t, 2),
            r = n[0],
            i = n[1];
        return Wo[r] ? Wo[r][parseInt(i)] : void 0
    }
}
var Qo = {
    install: function(e) {
        (function(e) {
            var t, n = e.config;
            n.errorHandler = fe(e, zo), t = n.optionMergeStrategies, se.forEach((function(e) {
                t[e] = $o
            }));
            var r = n.globalProperties;
            ! function(e) {
                e.uniIDHasRole = function(e) {
                    return Vo().role.indexOf(e) > -1
                }, e.uniIDHasPermission = function(e) {
                    var t = Vo().permission;
                    return this.uniIDHasRole("admin") || t.indexOf(e) > -1
                }, e.uniIDTokenValid = function() {
                    return Vo().tokenExpired > Date.now()
                }
            }(r), r.$set = No, r.$applyOptions = Do, r.$callMethod = qo, sn.invokeCreateVueAppHook(e)
        })(e), e.config.globalProperties.pruneComponentPropsCache = Zo;
        var t = e.mount;
        e.mount = function(n) {
            var r = t.call(e, n),
                i = function() {
                    var e = "createApp";
                    return "undefined" != typeof global && void 0 !== global[e] ? global[e] : "undefined" != typeof my ? my[e] : void 0
                }();
            return i ? i(r) : "undefined" != typeof createMiniProgramApp && createMiniProgramApp(r), r
        }
    }
};
 function Yo(e) {
    return C(e) ? e : function(e) {
        var t = "";
        if (!e || C(e)) return t;
        for (var n in e) t += "".concat(n.startsWith("--") ? n : z(n), ":").concat(e[n], ";");
        return t
    }(function e(t) {
        if (T(t)) {
            for (var n = {}, r = 0; r < t.length; r++) {
                var i = t[r],
                    o = C(i) ? Y(i) : e(i);
                if (o)
                    for (var a in o) n[a] = o[a]
            }
            return n
        }
        if (C(t) || B(t)) return t
    }(e))
}
var Go = ["tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend", "touchforcechange"];
var Xo = ["externalClasses"],
    ea = /_(.*)_worklet_factory_/;
var ta = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];
 function na(e, t) {
    var n = e.ctx;
    n.mpType = t.mpType, n.$mpType = t.mpType, n.$mpPlatform = "mp-weixin", n.$scope = t.mpInstance, Object.defineProperties(n, {
        virtualHostId: {get: function() {
                var e = this.$scope.data.virtualHostId;
                return void 0 === e ? "" : e
            }
        }
    }), n.$mp = {}, n._self = {}, e.slots = {}, T(t.slots) && t.slots.length && (t.slots.forEach((function(t) {
        e.slots[t] = !0
    })), e.slots.d && (e.slots.default = !0)), n.getOpenerEventChannel = function() {
        return t.mpInstance.getOpenerEventChannel()
    }, n.$hasHook = ra, n.$callHook = ia, e.emit = function(e, t) {
        return function(n) {
            for (var r = t.$scope, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
            if (r && n) {
                var s = {
                    __args__: o
                };
                r.triggerEvent(n, s)
            }
            return e.apply(this, [n].concat(o))
        }
    }(e.emit, n)
}
 function ra(e) {
    var t = this.$[e];
    return !(!t || !t.length)
}
 function ia(e, t) {
    "mounted" === e && (ia.call(this, "bm"), this.$.isMounted = !0, e = "m");
    var n = this.$[e];
    return n && function(e, t) {
        for (var n, r = 0; r < e.length; r++) n = e[r](t);
        return n
    }(n, t)
}
var oa = ["onLoad", "onShow", "onHide", "onUnload", "onResize", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onAddToFavorites"];
 function aa(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
    if (e) {
        Object.keys(e).forEach((function(n) {
            ce(n, e[n]) && t.add(n)
        }));
        var n = e.extends,
            r = e.mixins;
        r && r.forEach((function(e) {
            return aa(e, t)
        })), n && aa(n, t)
    }
    return t
}
 function sa(e, t, n) {
    -1 !== n.indexOf(t) || S(e, t) || (e[t] = function(e) {
        return this.$vm && this.$vm.$callHook(t, e)
    })
}
var ua = ["onReady"];
 function ca(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ua;
    t.forEach((function(t) {
        return sa(e, t, n)
    }))
}
 function la(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ua;
    aa(t).forEach((function(t) {
        return sa(e, t, n)
    }))
}
var fa = ee((function() {
        var e = [],
            t = A(getApp) && getApp({
                allowDefault: !0
            });
        if (t && t.$vm && t.$vm.$) {
            var n = t.$vm.$.appContext.mixins;
            if (T(n)) {
                var r = Object.keys(ue);
                n.forEach((function(t) {
                    r.forEach((function(n) {
                        S(t, n) && !e.includes(n) && e.push(n)
                    }))
                }))
            }
        }
        return e
    })),
    ha = ["onShow", "onHide", "onError", "onThemeChange", "onPageNotFound", "onUnhandledRejection"];
 function pa(e, t) {
    var n = e.$,
        r = {
            globalData: e.$options && e.$options.globalData || {},
            $vm: e,
            onLaunch: function(t) {
                this.$vm = e;
                var r = n.ctx;
                this.$vm && r.$scope && r.$callHook || (na(n, {
                    mpType: "app",
                    mpInstance: this,
                    slots: []
                }), r.globalData = this.globalData, e.$callHook("onLaunch", t))
            }
        },
        i = wx.$onErrorHandlers;
    i && (i.forEach((function(e) {
            _i("onError", e, n)
        })), i.length = 0),
        function(e) {
            var t = Tr(function() {
                var e, t = (null === (e = wx.getAppBaseInfo) || void 0 === e ? void 0 : e.call(wx)) || wx.getSystemInfoSync();
                return be(t && t.language ? t.language : "en") || "en"
            }());
            Object.defineProperty(e, "$locale", {get: function() {
                    return t.value
                },
                set: function(e) {
                    t.value = e
                }
            })
        }(e);
    var o = e.$.type;
    ca(r, ha), la(r, o);
    var a = o.methods;
    return a && w(r, a), r
}
 function da(e, t) {
    if (A(e.onLaunch)) {
        var n = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
        e.onLaunch(n)
    }
    A(e.onShow) && wx.onAppShow && wx.onAppShow((function(e) {
        t.$callHook("onShow", e)
    })), A(e.onHide) && wx.onAppHide && wx.onAppHide((function(e) {
        t.$callHook("onHide", e)
    }))
}
var ga = ["eO", "uR", "uRIF", "uI", "uT", "uP", "uS"];
 function va(e) {
    e.properties || (e.properties = {}), w(e.properties, function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = {};
        if (!t) {
            var r = function(e) {
                var t = Object.create(null);
                e && e.forEach((function(e) {
                    t[e] = !0
                })), this.setData({
                    $slots: t
                })
            };
            ga.forEach((function(e) {
                n[e] = {
                    type: null,
                    value: ""
                }
            })), n.uS = {
                type: null,
                value: []
            }, n.uS.observer = r
        }
        return e.behaviors && e.behaviors.includes("wx://form-field") && (e.properties && e.properties.name || (n.name = {
            type: null,
            value: ""
        }), e.properties && e.properties.value || (n.value = {
            type: null,
            value: ""
        })), n
    }(e), function(e) {
        var t = {};
        return e && e.virtualHost && (t.virtualHostStyle = {
            type: null,
            value: ""
        }, t.virtualHostClass = {
            type: null,
            value: ""
        }, t.virtualHostHidden = {
            type: null,
            value: ""
        }, t.virtualHostId = {
            type: null,
            value: ""
        }), t
    }(e.options))
}
var ma, ya, _a = [String, Number, Boolean, Object, Array, null];
 function ba(e, t) {
    var n = function(e, t) {
        return T(e) && 1 === e.length ? e[0] : e
    }(e);
    return -1 !== _a.indexOf(n) ? n : null
}
 function wa(e, t) {
    return (t ? function(e) {
        var t = {};
        return R(e) && Object.keys(e).forEach((function(n) {
            -1 === ga.indexOf(n) && (t[n] = e[n])
        })), t
    }(e) : Jo(e.uP)) || {}
}
 function xa(e) {
    e.observers || (e.observers = {}), e.observers.uP = function() {
        var e = this.properties.uP;
        e && (this.$vm ? function(e, t) {
            var n, r = mr(t.props),
                i = Jo(e) || {};
            ka(r, i) && (function(e, t, n, r) {
                var i = e.props,
                    o = e.attrs,
                    a = e.vnode.patchFlag,
                    s = mr(i),
                    u = f(e.propsOptions, 1)[0],
                    c = !1;
                if (!(a > 0) || 16 & a) {
                    var l;
                    for (var h in Zi(e, t, i, o) && (c = !0), s) t && (S(t, h) || (l = z(h)) !== h && S(t, l)) || (u ? !n || void 0 === n[h] && void 0 === n[l] || (i[h] = Ji(u, s, h, void 0, e, !0)) : delete i[h]);
                    if (o !== s)
                        for (var p in o) t && S(t, p) || (delete o[p], c = !0)
                } else if (8 & a)
                    for (var d = e.vnode.dynamicProps, g = 0; g < d.length; g++) {
                        var v = d[g];
                        if (!ti(e.emitsOptions, v)) {
                            var m = t[v];
                            if (u)
                                if (S(o, v)) m !== o[v] && (o[v] = m, c = !0);
                                else {
                                    var y = N(v);
                                    i[y] = Ji(u, s, y, m, e, !1)
                                } else m !== o[v] && (o[v] = m, c = !0)
                        }
                    }
                c && An(e, "set", "$attrs")
            }(t, i, r), n = t.update, Ur.indexOf(n) > -1 && function(e) {
                var t = Ur.indexOf(e);
                t > Dr && Ur.splice(t, 1)
            }(t.update), t.update())
        }(e, this.$vm.$) : "m" === this.properties.uT && function(e, t) {
            var n = t.properties,
                r = Jo(e) || {};
            ka(n, r, !1) && t.setData(r)
        }(e, this))
    }
}
 function ka(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = Object.keys(t);
    if (n && r.length !== Object.keys(e).length) return !0;
    for (var i = 0; i < r.length; i++) {
        var o = r[i];
        if (t[o] !== e[o]) return !0
    }
    return !1
}
 function Sa(e, t) {
    var n = t.parse,
        r = t.mocks,
        i = t.isPage,
        o = (t.isPageInProject, t.initRelation),
        a = t.handleLink,
        s = t.initLifetimes;
    e = e.default || e;
    var u = {
        multipleSlots: !0,
        addGlobalClass: !0,
        pureDataPattern: /^uP$/
    };
    T(e.mixins) && e.mixins.forEach((function(e) {
        B(e.options) && w(u, e.options)
    })), e.options && w(u, e.options);
    var c, l, f, h, p = {
        options: u,
        lifetimes: s({
            mocks: r,
            isPage: i,
            initRelation: o,
            vueOptions: e
        }),
        pageLifetimes: {
            show: function() {
                this.$vm && this.$vm.$callHook("onPageShow")
            },
            hide: function() {
                this.$vm && this.$vm.$callHook("onPageHide")
            },
            resize: function(e) {
                this.$vm && this.$vm.$callHook("onPageResize", e)
            }
        },
        methods: {
            __l: a
        }
    };
    return function(e, t) {
            e.data = {}, e.behaviors = function(e) {
                var t = e.behaviors,
                    n = e.props;
                n || (e.props = n = []);
                var r = [];
                return T(t) && t.forEach((function(e) {
                    r.push(e.replace("uni://", "wx://")), "uni://form-field" === e && (T(n) ? (n.push("name"), n.push("modelValue")) : (n.name = {
                        type: String,
                        default: ""
                    }, n.modelValue = {
                        type: [String, Number, Boolean, Array, Object, Date],
                        default: ""
                    }))
                })), r
            }(t)
        }(p, e), va(p), xa(p),
        function(e, t) {
            Xo.forEach((function(n) {
                S(t, n) && (e[n] = t[n])
            }))
        }(p, e), c = p.methods, l = e.wxsCallMethods, T(l) && l.forEach((function(e) {
            c[e] = function(t) {
                return this.$vm[e](t)
            }
        })), f = p.methods, (h = e.methods) && Object.keys(h).forEach((function(e) {
            var t = e.match(ea);
            if (t) {
                var n = t[1];
                f[e] = h[e], f[n] = h[n]
            }
        })), n && n(p, {
            handleLink: a
        }), p
}
 function Ta() {
    return getApp().$vm
}
var Ia = Page,
    Ea = Component;
 function Aa(e) {
    var t = e.triggerEvent,
        n = function(n) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
            return t.apply(e, [(a = n, N(a.replace(ne, "-")))].concat(i));
            var a
        };
    try {
        e.triggerEvent = n
    } catch (t) {
        e._triggerEvent = n
    }
}
 function Ca(e, t, n) {
    var r = t[e];
    t[e] = r ? function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Aa(this), r.apply(this, t)
    } : function() {
        Aa(this)
    }
}
Page = function(e) {
    return Ca("onLoad", e), Ia(e)
}, Component = function(e) {
    return Ca("created", e), e.properties && e.properties.uP || (va(e), xa(e)), Ea(e)
};
var Oa, Ba = Object.freeze({
        __proto__: null,
        handleLink: function(e) {
            var t, n = e.detail || e.value,
                r = n.vuePid;
            r && (t = function e(t, n) {
                for (var r, i = t.$children, o = i.length - 1; o >= 0; o--) {
                    var a = i[o];
                    if (a.$scope._$vueId === n) return a
                }
                for (var s = i.length - 1; s >= 0; s--)
                    if (r = e(i[s], n)) return r
            }(this.$vm, r)), t || (t = this.$vm), n.parent = t
        },
        initLifetimes: function(e) {
            var t = e.mocks,
                n = e.isPage,
                r = e.initRelation,
                i = e.vueOptions;
            return {
                attached: function() {
                    var e = this.properties;
                    ! function(e, t) {
                        if (e) {
                            var n = e.split(","),
                                r = n.length;
                            1 === r ? t._$vueId = n[0] : 2 === r && (t._$vueId = n[0], t._$vuePid = n[1])
                        }
                    }(e.uI, this);
                    var o = {
                        vuePid: this._$vuePid
                    };
                    r(this, o);
                    var a = this,
                        s = n(a),
                        u = e;
                    this.$vm = function(e, t) {
                        ma || (ma = Ta().$createComponent);
                        var n = ma(e, t);
                        return go(n.$) || n
                    }({
                        type: i,
                        props: wa(u, s)
                    }, {
                        mpType: s ? "page" : "component",
                        mpInstance: a,
                        slots: e.uS || {},
                        parentComponent: o.parent && o.parent.$,
                        onBeforeSetup: function(e, n) {
                            ! function(e, t) {
                                Object.defineProperty(e, "refs", {get: function() {
                                        var e = {};
                                        return function(e, t, n) {
                                            e.selectAllComponents(".r").forEach((function(e) {
                                                var t = e.properties.uR;
                                                n[t] = e.$vm || e
                                            }))
                                        }(t, 0, e), t.selectAllComponents(".r-i-f").forEach((function(t) {
                                            var n = t.properties.uR;
                                            n && (e[n] || (e[n] = []), e[n].push(t.$vm || t))
                                        })), e
                                    }
                                })
                            }(e, a),
                            function(e, t, n) {
                                var r = e.ctx;
                                n.forEach((function(n) {
                                    S(t, n) && (e[n] = r[n] = t[n])
                                }))
                            }(e, a, t),
                            function(e, t) {
                                na(e, t);
                                var n = e.ctx;
                                ta.forEach((function(e) {
                                    n[e] = function() {
                                        for (var t = n.$scope, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                        if (t && t[e]) return t[e].apply(t, i)
                                    }
                                }))
                            }(e, n)
                        }
                    }), s || function(e) {
                        var t = e.$options;
                        T(t.behaviors) && t.behaviors.includes("uni://form-field") && e.$watch("modelValue", (function() {
                            e.$scope && e.$scope.setData({
                                name: e.name,
                                value: e.modelValue
                            })
                        }), {
                            immediate: !0
                        })
                    }(this.$vm)
                },
                ready: function() {
                    this.$vm && (this.$vm.$callHook("mounted"), this.$vm.$callHook("onReady"))
                },
                detached: function() {
                    var e;
                    this.$vm && (Zo(this.$vm.$.uid), e = this.$vm, ya || (ya = Ta().$destroyComponent), ya(e))
                }
            }
        },
        initRelation: function(e, t) {
            e.triggerEvent("__l", t)
        },
        isPage: function(e) {
            return !!e.route
        },
        mocks: ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"]
    }),
    Pa = (Oa = Ba, function(e) {
        return Component(function(e, t) {
            var n = t.parse,
                r = t.mocks,
                i = t.isPage,
                o = t.initRelation,
                a = t.handleLink,
                s = Sa(e, {
                    mocks: r,
                    isPage: i,
                    isPageInProject: !0,
                    initRelation: o,
                    handleLink: a,
                    initLifetimes: t.initLifetimes
                });
            ! function(e, t) {
                var n = e.properties;
                T(t) ? t.forEach((function(e) {
                    n[e] = {
                        type: String,
                        value: ""
                    }
                })) : R(t) && Object.keys(t).forEach((function(e) {
                    var r = t[e];
                    if (R(r)) {
                        var i = r.default;
                        A(i) && (i = i());
                        var o = r.type;
                        r.type = ba(o), n[e] = {
                            type: r.type,
                            value: i
                        }
                    } else n[e] = {
                        type: ba(r)
                    }
                }))
            }(s, (e.default || e).props);
            var u = s.methods;
            return u.onLoad = function(e) {
                    var t;
                    return this.options = e, this.$page = {
                        fullPath: (t = this.route + ie(e), function(e) {
                            return 0 === e.indexOf("/")
                        }(t) ? t : "/" + t)
                    }, this.$vm && this.$vm.$callHook("onLoad", e)
                }, ca(u, oa), la(u, e),
                function(e, t) {
                    t && Object.keys(ue).forEach((function(n) {
                        t & ue[n] && sa(e, n, [])
                    }))
                }(u, e.__runtimeHooks), ca(u, fa()), n && n(s, {
                    handleLink: a
                }), s
        }(e, Oa))
    }),
    Fa = function(e) {
        return function(t) {
            return Component(Sa(t, e))
        }
    }(Ba);
 function ja(e) {
    for (var t = e.length; --t >= 0;) e[t] = 0
}
wx.createApp = global.createApp = function(e) {
    return App(pa(e))
}, wx.createPage = Pa, wx.createComponent = Fa, wx.createPluginApp = global.createPluginApp = function(e) {
    da(pa(e), e)
}, wx.createSubpackageApp = global.createSubpackageApp = function(e) {
    var t = pa(e),
        n = A(getApp) && getApp({
            allowDefault: !0
        });
    if (n) {
        e.$.ctx.$scope = n;
        var r = n.globalData;
        r && Object.keys(t.globalData).forEach((function(e) {
            S(r, e) || (r[e] = t.globalData[e])
        })), Object.keys(t).forEach((function(e) {
            S(n, e) || (n[e] = t[e])
        })), da(t, e)
    }
};
var Ra = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
    La = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    Ma = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
    Ua = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Da = new Array(576);
ja(Da);
var Na = new Array(60);
ja(Na);
var qa = new Array(512);
ja(qa);
var za = new Array(256);
ja(za);
var $a = new Array(29);
ja($a);
var Ha, Ka, Va, Wa = new Array(30);
 function Za(e, t, n, r, i) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length
}
 function Ja(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
}
ja(Wa);
var Qa = function(e) {
        return e < 256 ? qa[e] : qa[256 + (e >>> 7)]
    },
    Ya = function(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
    },
    Ga = function(e, t, n) {
        e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, Ya(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
    },
    Xa = function(e, t, n) {
        Ga(e, n[2 * t], n[2 * t + 1])
    },
    es = function(e, t) {
        var n = 0;
        do {
            n |= 1 & e, e >>>= 1, n <<= 1
        } while (--t > 0);
        return n >>> 1
    },
    ts = function(e, t, n) {
        var r, i, o = new Array(16),
            a = 0;
        for (r = 1; r <= 15; r++) a = a + n[r - 1] << 1, o[r] = a;
        for (i = 0; i <= t; i++) {
            var s = e[2 * i + 1];
            0 !== s && (e[2 * i] = es(o[s] ++, s))
        }
    },
    ns = function(e) {
        var t;
        for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
    },
    rs = function(e) {
        e.bi_valid > 8 ? Ya(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
    },
    is = function(e, t, n, r) {
        var i = 2 * t,
            o = 2 * n;
        return e[i] < e[o] || e[i] === e[o] && r[t] <= r[n]
    },
    os = function(e, t, n) {
        for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && is(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !is(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
        e.heap[n] = r
    },
    as = function(e, t, n) {
        var r, i, o, a, s = 0;
        if (0 !== e.sym_next)
            do {
                r = 255 & e.pending_buf[e.sym_buf + s++], r += (255 & e.pending_buf[e.sym_buf + s++]) << 8, i = e.pending_buf[e.sym_buf + s++], 0 === r ? Xa(e, i, t) : (o = za[i], Xa(e, o + 256 + 1, t), 0 !== (a = Ra[o]) && (i -= $a[o], Ga(e, i, a)), r--, o = Qa(r), Xa(e, o, n), 0 !== (a = La[o]) && (r -= Wa[o], Ga(e, r, a)))
            } while (s < e.sym_next);
        Xa(e, 256, t)
    },
    ss = function(e, t) {
        var n, r, i, o = t.dyn_tree,
            a = t.stat_desc.static_tree,
            s = t.stat_desc.has_stree,
            u = t.stat_desc.elems,
            c = -1;
        for (e.heap_len = 0, e.heap_max = 573, n = 0; n < u; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = c = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
        for (; e.heap_len < 2;) o[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
        for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) os(e, o, n);
        i = u;
        do {
            n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], os(e, o, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, e.heap[1] = i++, os(e, o, 1)
        } while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1],
            function(e, t) {
                var n, r, i, o, a, s, u = t.dyn_tree,
                    c = t.max_code,
                    l = t.stat_desc.static_tree,
                    f = t.stat_desc.has_stree,
                    h = t.stat_desc.extra_bits,
                    p = t.stat_desc.extra_base,
                    d = t.stat_desc.max_length,
                    g = 0;
                for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
                for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++)(o = u[2 * u[2 * (r = e.heap[n]) + 1] + 1] + 1) > d && (o = d, g++), u[2 * r + 1] = o, r > c || (e.bl_count[o] ++, a = 0, r >= p && (a = h[r - p]), s = u[2 * r], e.opt_len += s * (o + a), f && (e.static_len += s * (l[2 * r + 1] + a)));
                if (0 !== g) {
                    do {
                        for (o = d - 1; 0 === e.bl_count[o];) o--;
                        e.bl_count[o] --, e.bl_count[o + 1] += 2, e.bl_count[d] --, g -= 2
                    } while (g > 0);
                    for (o = d; 0 !== o; o--)
                        for (r = e.bl_count[o]; 0 !== r;)(i = e.heap[--n]) > c || (u[2 * i + 1] !== o && (e.opt_len += (o - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = o), r--)
                }
            }(e, t), ts(o, c, e.bl_count)
    },
    us = function(e, t, n) {
        var r, i, o = -1,
            a = t[1],
            s = 0,
            u = 7,
            c = 4;
        for (0 === a && (u = 138, c = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = a, a = t[2 * (r + 1) + 1], ++s < u && i === a || (s < c ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== o && e.bl_tree[2 * i] ++, e.bl_tree[32] ++) : s <= 10 ? e.bl_tree[34] ++ : e.bl_tree[36] ++, s = 0, o = i, 0 === a ? (u = 138, c = 3) : i === a ? (u = 6, c = 3) : (u = 7, c = 4))
    },
    cs = function(e, t, n) {
        var r, i, o = -1,
            a = t[1],
            s = 0,
            u = 7,
            c = 4;
        for (0 === a && (u = 138, c = 3), r = 0; r <= n; r++)
            if (i = a, a = t[2 * (r + 1) + 1], !(++s < u && i === a)) {
                if (s < c)
                    do {
                        Xa(e, i, e.bl_tree)
                    } while (0 != --s);
                else 0 !== i ? (i !== o && (Xa(e, i, e.bl_tree), s--), Xa(e, 16, e.bl_tree), Ga(e, s - 3, 2)) : s <= 10 ? (Xa(e, 17, e.bl_tree), Ga(e, s - 3, 3)) : (Xa(e, 18, e.bl_tree), Ga(e, s - 11, 7));
                s = 0, o = i, 0 === a ? (u = 138, c = 3) : i === a ? (u = 6, c = 3) : (u = 7, c = 4)
            }
    },
    ls = !1,
    fs = function(e, t, n, r) {
        Ga(e, 0 + (r ? 1 : 0), 3), rs(e), Ya(e, n), Ya(e, ~n), n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending), e.pending += n
    },
    hs = function(e) {
        ls || (function() {
            var e, t, n, r, i, o = new Array(16);
            for (n = 0, r = 0; r < 28; r++)
                for ($a[r] = n, e = 0; e < 1 << Ra[r]; e++) za[n++] = r;
            for (za[n - 1] = r, i = 0, r = 0; r < 16; r++)
                for (Wa[r] = i, e = 0; e < 1 << La[r]; e++) qa[i++] = r;
            for (i >>= 7; r < 30; r++)
                for (Wa[r] = i << 7, e = 0; e < 1 << La[r] - 7; e++) qa[256 + i++] = r;
            for (t = 0; t <= 15; t++) o[t] = 0;
            for (e = 0; e <= 143;) Da[2 * e + 1] = 8, e++, o[8] ++;
            for (; e <= 255;) Da[2 * e + 1] = 9, e++, o[9] ++;
            for (; e <= 279;) Da[2 * e + 1] = 7, e++, o[7] ++;
            for (; e <= 287;) Da[2 * e + 1] = 8, e++, o[8] ++;
            for (ts(Da, 287, o), e = 0; e < 30; e++) Na[2 * e + 1] = 5, Na[2 * e] = es(e, 5);
            Ha = new Za(Da, Ra, 257, 286, 15), Ka = new Za(Na, La, 0, 30, 15), Va = new Za(new Array(0), Ma, 0, 19, 7)
        }(), ls = !0), e.l_desc = new Ja(e.dyn_ltree, Ha), e.d_desc = new Ja(e.dyn_dtree, Ka), e.bl_desc = new Ja(e.bl_tree, Va), e.bi_buf = 0, e.bi_valid = 0, ns(e)
    },
    ps = fs,
    ds = function(e, t, n, r) {
        var i, o, a = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
            var t, n = 4093624447;
            for (t = 0; t <= 31; t++, n >>>= 1)
                if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        }(e)), ss(e, e.l_desc), ss(e, e.d_desc), a = function(e) {
            var t;
            for (us(e, e.dyn_ltree, e.l_desc.max_code), us(e, e.dyn_dtree, e.d_desc.max_code), ss(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * Ua[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        }(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, n + 4 <= i && -1 !== t ? fs(e, t, n, r) : 4 === e.strategy || o === i ? (Ga(e, 2 + (r ? 1 : 0), 3), as(e, Da, Na)) : (Ga(e, 4 + (r ? 1 : 0), 3), function(e, t, n, r) {
            var i;
            for (Ga(e, t - 257, 5), Ga(e, n - 1, 5), Ga(e, r - 4, 4), i = 0; i < r; i++) Ga(e, e.bl_tree[2 * Ua[i] + 1], 3);
            cs(e, e.dyn_ltree, t - 1), cs(e, e.dyn_dtree, n - 1)
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), as(e, e.dyn_ltree, e.dyn_dtree)), ns(e), r && rs(e)
    },
    gs = function(e, t, n) {
        return e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = n, 0 === t ? e.dyn_ltree[2 * n] ++ : (e.matches++, t--, e.dyn_ltree[2 * (za[n] + 256 + 1)] ++, e.dyn_dtree[2 * Qa(t)] ++), e.sym_next === e.sym_end
    },
    vs = function(e) {
        Ga(e, 2, 3), Xa(e, 256, Da),
            function(e) {
                16 === e.bi_valid ? (Ya(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
            }(e)
    },
    ms = function(e, t, n, r) {
        for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
            n -= a = n > 2e3 ? 2e3 : n;
            do {
                o = o + (i = i + t[r++] | 0) | 0
            } while (--a);
            i %= 65521, o %= 65521
        }
        return i | o << 16 | 0
    },
    ys = new Uint32Array(function() {
        for (var e, t = [], n = 0; n < 256; n++) {
            e = n;
            for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[n] = e
        }
        return t
    }()),
    _s = function(e, t, n, r) {
        var i = ys,
            o = r + n;
        e ^= -1;
        for (var a = r; a < o; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
        return -1 ^ e
    },
    bs = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    },
    ws = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    },
    xs = hs,
    ks = ps,
    Ss = ds,
    Ts = gs,
    Is = vs,
    Es = ws.Z_NO_FLUSH,
    As = ws.Z_PARTIAL_FLUSH,
    Cs = ws.Z_FULL_FLUSH,
    Os = ws.Z_FINISH,
    Bs = ws.Z_BLOCK,
    Ps = ws.Z_OK,
    Fs = ws.Z_STREAM_END,
    js = ws.Z_STREAM_ERROR,
    Rs = ws.Z_DATA_ERROR,
    Ls = ws.Z_BUF_ERROR,
    Ms = ws.Z_DEFAULT_COMPRESSION,
    Us = ws.Z_FILTERED,
    Ds = ws.Z_HUFFMAN_ONLY,
    Ns = ws.Z_RLE,
    qs = ws.Z_FIXED,
    zs = ws.Z_UNKNOWN,
    $s = ws.Z_DEFLATED,
    Hs = function(e, t) {
        return e.msg = bs[t], t
    },
    Ks = function(e) {
        return 2 * e - (e > 4 ? 9 : 0)
    },
    Vs = function(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0
    },
    Ws = function(e) {
        var t, n, r, i = e.w_size;
        r = t = e.hash_size;
        do {
            n = e.head[--r], e.head[r] = n >= i ? n - i : 0
        } while (--t);
        r = t = i;
        do {
            n = e.prev[--r], e.prev[r] = n >= i ? n - i : 0
        }
        while (--t)
    },
    Zs = function(e, t, n) {
        return (t << e.hash_shift ^ n) & e.hash_mask
    },
    Js = function(e) {
        var t = e.state,
            n = t.pending;
        n > e.avail_out && (n = e.avail_out), 0 !== n && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
    },
    Qs = function(e, t) {
        Ss(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, Js(e.strm)
    },
    Ys = function(e, t) {
        e.pending_buf[e.pending++] = t
    },
    Gs = function(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
    },
    Xs = function(e, t, n, r) {
        var i = e.avail_in;
        return i > r && (i = r), 0 === i ? 0 : (e.avail_in -= i, t.set(e.input.subarray(e.next_in, e.next_in + i), n), 1 === e.state.wrap ? e.adler = ms(e.adler, t, i, n) : 2 === e.state.wrap && (e.adler = _s(e.adler, t, i, n)), e.next_in += i, e.total_in += i, i)
    },
    eu = function(e, t) {
        var n, r, i = e.max_chain_length,
            o = e.strstart,
            a = e.prev_length,
            s = e.nice_match,
            u = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
            c = e.window,
            l = e.w_mask,
            f = e.prev,
            h = e.strstart + 258,
            p = c[o + a - 1],
            d = c[o + a];
        e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
        do {
            if (c[(n = t) + a] === d && c[n + a - 1] === p && c[n] === c[o] && c[++n] === c[o + 1]) {
                o += 2, n++;
                do {} while (c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && c[++o] === c[++n] && o < h);
                if (r = 258 - (h - o), o = h - 258, r > a) {
                    if (e.match_start = t, a = r, r >= s) break;
                    p = c[o + a - 1], d = c[o + a]
                }
            }
        } while ((t = f[t & l]) > u && 0 != --i);
        return a <= e.lookahead ? a : e.lookahead
    },
    tu = function(e) {
        var t, n, r, i = e.w_size;
        do {
            if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= i + (i - 262) && (e.window.set(e.window.subarray(i, i + i - n), 0), e.match_start -= i, e.strstart -= i, e.block_start -= i, e.insert > e.strstart && (e.insert = e.strstart), Ws(e), n += i), 0 === e.strm.avail_in) break;
            if (t = Xs(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= 3)
                for (r = e.strstart - e.insert, e.ins_h = e.window[r], e.ins_h = Zs(e, e.ins_h, e.window[r + 1]); e.insert && (e.ins_h = Zs(e, e.ins_h, e.window[r + 3 - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < 3)););
        } while (e.lookahead < 262 && 0 !== e.strm.avail_in)
    },
    nu = function(e, t) {
        var n, r, i, o = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
            a = 0,
            s = e.strm.avail_in;
        do {
            if (n = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i) break;
            if (i = e.strm.avail_out - i, n > (r = e.strstart - e.block_start) + e.strm.avail_in && (n = r + e.strm.avail_in), n > i && (n = i), n < o && (0 === n && t !== Os || t === Es || n !== r + e.strm.avail_in)) break;
            a = t === Os && n === r + e.strm.avail_in ? 1 : 0, ks(e, 0, 0, a), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, Js(e.strm), r && (r > n && (r = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + r), e.strm.next_out), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r, e.block_start += r, n -= r), n && (Xs(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n)
        } while (0 === a);
        return (s -= e.strm.avail_in) && (s >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= s && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), a ? 4 : t !== Es && t !== Os && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (Xs(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, o = (i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i) > e.w_size ? e.w_size : i, ((r = e.strstart - e.block_start) >= o || (r || t === Os) && t !== Es && 0 === e.strm.avail_in && r <= i) && (n = r > i ? i : r, a = t === Os && 0 === e.strm.avail_in && n === r ? 1 : 0, ks(e, e.block_start, n, a), e.block_start += n, Js(e.strm)), a ? 3 : 1)
    },
    ru = function(e, t) {
        for (var n, r;;) {
            if (e.lookahead < 262) {
                if (tu(e), e.lookahead < 262 && t === Es) return 1;
                if (0 === e.lookahead) break
            }
            if (n = 0, e.lookahead >= 3 && (e.ins_h = Zs(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - 262 && (e.match_length = eu(e, n)), e.match_length >= 3)
                if (r = Ts(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do {
                        e.strstart++, e.ins_h = Zs(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                    } while (0 != --e.match_length);
                    e.strstart++
                } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Zs(e, e.ins_h, e.window[e.strstart + 1]);
            else r = Ts(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
            if (r && (Qs(e, !1), 0 === e.strm.avail_out)) return 1
        }
        return e.insert = e.strstart < 2 ? e.strstart : 2, t === Os ? (Qs(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (Qs(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    },
    iu = function(e, t) {
        for (var n, r, i;;) {
            if (e.lookahead < 262) {
                if (tu(e), e.lookahead < 262 && t === Es) return 1;
                if (0 === e.lookahead) break
            }
            if (n = 0, e.lookahead >= 3 && (e.ins_h = Zs(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - 262 && (e.match_length = eu(e, n), e.match_length <= 5 && (e.strategy === Us || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                i = e.strstart + e.lookahead - 3, r = Ts(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do {
                    ++e.strstart <= i && (e.ins_h = Zs(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                } while (0 != --e.prev_length);
                if (e.match_available = 0, e.match_length = 2, e.strstart++, r && (Qs(e, !1), 0 === e.strm.avail_out)) return 1
            } else if (e.match_available) {
                if ((r = Ts(e, 0, e.window[e.strstart - 1])) && Qs(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
            } else e.match_available = 1, e.strstart++, e.lookahead--
        }
        return e.match_available && (r = Ts(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === Os ? (Qs(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (Qs(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    };
 function ou(e, t, n, r, i) {
    this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i
}
var au = [new ou(0, 0, 0, 0, nu), new ou(4, 4, 8, 4, ru), new ou(4, 5, 16, 8, ru), new ou(4, 6, 32, 32, ru), new ou(4, 4, 16, 16, iu), new ou(8, 16, 32, 32, iu), new ou(8, 16, 128, 128, iu), new ou(8, 32, 128, 256, iu), new ou(32, 128, 258, 1024, iu), new ou(32, 258, 258, 4096, iu)];
 function su() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = $s, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Vs(this.dyn_ltree), Vs(this.dyn_dtree), Vs(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Vs(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), Vs(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
}
var uu = function(e) {
        if (!e) return 1;
        var t = e.state;
        return !t || t.strm !== e || 42 !== t.status && 57 !== t.status && 69 !== t.status && 73 !== t.status && 91 !== t.status && 103 !== t.status && 113 !== t.status && 666 !== t.status ? 1 : 0
    },
    cu = function(e) {
        if (uu(e)) return Hs(e, js);
        e.total_in = e.total_out = 0, e.data_type = zs;
        var t = e.state;
        return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = 2 === t.wrap ? 57 : t.wrap ? 42 : 113, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = -2, xs(t), Ps
    },
    lu = function(e) {
        var t, n = cu(e);
        return n === Ps && ((t = e.state).window_size = 2 * t.w_size, Vs(t.head), t.max_lazy_match = au[t.level].max_lazy, t.good_match = au[t.level].good_length, t.nice_match = au[t.level].nice_length, t.max_chain_length = au[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0), n
    },
    fu = function(e, t, n, r, i, o) {
        if (!e) return js;
        var a = 1;
        if (t === Ms && (t = 6), r < 0 ? (a = 0, r = -r) : r > 15 && (a = 2, r -= 16), i < 1 || i > 9 || n !== $s || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > qs || 8 === r && 1 !== a) return Hs(e, js);
        8 === r && (r = 9);
        var s = new su;
        return e.state = s, s.strm = e, s.status = 42, s.wrap = a, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = i + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3), s.window = new Uint8Array(2 * s.w_size), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << i + 6, s.pending_buf_size = 4 * s.lit_bufsize, s.pending_buf = new Uint8Array(s.pending_buf_size), s.sym_buf = s.lit_bufsize, s.sym_end = 3 * (s.lit_bufsize - 1), s.level = t, s.strategy = o, s.method = n, lu(e)
    },
    hu = fu,
    pu = function(e, t) {
        return uu(e) || 2 !== e.state.wrap ? js : (e.state.gzhead = t, Ps)
    },
    du = function(e, t) {
        if (uu(e) || t > Bs || t < 0) return e ? Hs(e, js) : js;
        var n = e.state;
        if (!e.output || 0 !== e.avail_in && !e.input || 666 === n.status && t !== Os) return Hs(e, 0 === e.avail_out ? Ls : js);
        var r = n.last_flush;
        if (n.last_flush = t, 0 !== n.pending) {
            if (Js(e), 0 === e.avail_out) return n.last_flush = -1, Ps
        } else if (0 === e.avail_in && Ks(t) <= Ks(r) && t !== Os) return Hs(e, Ls);
        if (666 === n.status && 0 !== e.avail_in) return Hs(e, Ls);
        if (42 === n.status && 0 === n.wrap && (n.status = 113), 42 === n.status) {
            var i = $s + (n.w_bits - 8 << 4) << 8;
            if (i |= (n.strategy >= Ds || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (i |= 32), Gs(n, i += 31 - i % 31), 0 !== n.strstart && (Gs(n, e.adler >>> 16), Gs(n, 65535 & e.adler)), e.adler = 1, n.status = 113, Js(e), 0 !== n.pending) return n.last_flush = -1, Ps
        }
        if (57 === n.status)
            if (e.adler = 0, Ys(n, 31), Ys(n, 139), Ys(n, 8), n.gzhead) Ys(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), Ys(n, 255 & n.gzhead.time), Ys(n, n.gzhead.time >> 8 & 255), Ys(n, n.gzhead.time >> 16 & 255), Ys(n, n.gzhead.time >> 24 & 255), Ys(n, 9 === n.level ? 2 : n.strategy >= Ds || n.level < 2 ? 4 : 0), Ys(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (Ys(n, 255 & n.gzhead.extra.length), Ys(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = _s(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69;
            else if (Ys(n, 0), Ys(n, 0), Ys(n, 0), Ys(n, 0), Ys(n, 0), Ys(n, 9 === n.level ? 2 : n.strategy >= Ds || n.level < 2 ? 4 : 0), Ys(n, 3), n.status = 113, Js(e), 0 !== n.pending) return n.last_flush = -1, Ps;
        if (69 === n.status) {
            if (n.gzhead.extra) {
                for (var o = n.pending, a = (65535 & n.gzhead.extra.length) - n.gzindex; n.pending + a > n.pending_buf_size;) {
                    var s = n.pending_buf_size - n.pending;
                    if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + s), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > o && (e.adler = _s(e.adler, n.pending_buf, n.pending - o, o)), n.gzindex += s, Js(e), 0 !== n.pending) return n.last_flush = -1, Ps;
                    o = 0, a -= s
                }
                var u = new Uint8Array(n.gzhead.extra);
                n.pending_buf.set(u.subarray(n.gzindex, n.gzindex + a), n.pending), n.pending += a, n.gzhead.hcrc && n.pending > o && (e.adler = _s(e.adler, n.pending_buf, n.pending - o, o)), n.gzindex = 0
            }
            n.status = 73
        }
        if (73 === n.status) {
            if (n.gzhead.name) {
                var c, l = n.pending;
                do {
                    if (n.pending === n.pending_buf_size) {
                        if (n.gzhead.hcrc && n.pending > l && (e.adler = _s(e.adler, n.pending_buf, n.pending - l, l)), Js(e), 0 !== n.pending) return n.last_flush = -1, Ps;
                        l = 0
                    }
                    c = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, Ys(n, c)
                } while (0 !== c);
                n.gzhead.hcrc && n.pending > l && (e.adler = _s(e.adler, n.pending_buf, n.pending - l, l)), n.gzindex = 0
            }
            n.status = 91
        }
        if (91 === n.status) {
            if (n.gzhead.comment) {
                var f, h = n.pending;
                do {
                    if (n.pending === n.pending_buf_size) {
                        if (n.gzhead.hcrc && n.pending > h && (e.adler = _s(e.adler, n.pending_buf, n.pending - h, h)), Js(e), 0 !== n.pending) return n.last_flush = -1, Ps;
                        h = 0
                    }
                    f = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, Ys(n, f)
                } while (0 !== f);
                n.gzhead.hcrc && n.pending > h && (e.adler = _s(e.adler, n.pending_buf, n.pending - h, h))
            }
            n.status = 103
        }
        if (103 === n.status) {
            if (n.gzhead.hcrc) {
                if (n.pending + 2 > n.pending_buf_size && (Js(e), 0 !== n.pending)) return n.last_flush = -1, Ps;
                Ys(n, 255 & e.adler), Ys(n, e.adler >> 8 & 255), e.adler = 0
            }
            if (n.status = 113, Js(e), 0 !== n.pending) return n.last_flush = -1, Ps
        }
        if (0 !== e.avail_in || 0 !== n.lookahead || t !== Es && 666 !== n.status) {
            var p = 0 === n.level ? nu(n, t) : n.strategy === Ds ? function(e, t) {
                for (var n;;) {
                    if (0 === e.lookahead && (tu(e), 0 === e.lookahead)) {
                        if (t === Es) return 1;
                        break
                    }
                    if (e.match_length = 0, n = Ts(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (Qs(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = 0, t === Os ? (Qs(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (Qs(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            }(n, t) : n.strategy === Ns ? function(e, t) {
                for (var n, r, i, o, a = e.window;;) {
                    if (e.lookahead <= 258) {
                        if (tu(e), e.lookahead <= 258 && t === Es) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && ((r = a[i = e.strstart - 1]) === a[++i] && r === a[++i] && r === a[++i])) {
                        o = e.strstart + 258;
                        do {} while (r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && i < o);
                        e.match_length = 258 - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (e.match_length >= 3 ? (n = Ts(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = Ts(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (Qs(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = 0, t === Os ? (Qs(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (Qs(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            }(n, t) : au[n.level].func(n, t);
            if (3 !== p && 4 !== p || (n.status = 666), 1 === p || 3 === p) return 0 === e.avail_out && (n.last_flush = -1), Ps;
            if (2 === p && (t === As ? Is(n) : t !== Bs && (ks(n, 0, 0, !1), t === Cs && (Vs(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), Js(e), 0 === e.avail_out)) return n.last_flush = -1, Ps
        }
        return t !== Os ? Ps : n.wrap <= 0 ? Fs : (2 === n.wrap ? (Ys(n, 255 & e.adler), Ys(n, e.adler >> 8 & 255), Ys(n, e.adler >> 16 & 255), Ys(n, e.adler >> 24 & 255), Ys(n, 255 & e.total_in), Ys(n, e.total_in >> 8 & 255), Ys(n, e.total_in >> 16 & 255), Ys(n, e.total_in >> 24 & 255)) : (Gs(n, e.adler >>> 16), Gs(n, 65535 & e.adler)), Js(e), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? Ps : Fs)
    },
    gu = function(e) {
        if (uu(e)) return js;
        var t = e.state.status;
        return e.state = null, 113 === t ? Hs(e, Rs) : Ps
    },
    vu = function(e, t) {
        var n = t.length;
        if (uu(e)) return js;
        var r = e.state,
            i = r.wrap;
        if (2 === i || 1 === i && 42 !== r.status || r.lookahead) return js;
        if (1 === i && (e.adler = ms(e.adler, t, n, 0)), r.wrap = 0, n >= r.w_size) {
            0 === i && (Vs(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
            var o = new Uint8Array(r.w_size);
            o.set(t.subarray(n - r.w_size, n), 0), t = o, n = r.w_size
        }
        var a = e.avail_in,
            s = e.next_in,
            u = e.input;
        for (e.avail_in = n, e.next_in = 0, e.input = t, tu(r); r.lookahead >= 3;) {
            var c = r.strstart,
                l = r.lookahead - 2;
            do {
                r.ins_h = Zs(r, r.ins_h, r.window[c + 3 - 1]), r.prev[c & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = c, c++
            } while (--l);
            r.strstart = c, r.lookahead = 2, tu(r)
        }
        return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, e.next_in = s, e.input = u, e.avail_in = a, r.wrap = i, Ps
    },
    mu = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    yu = function(e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
            var n = t.shift();
            if (n) {
                if ("object" != p(n)) throw new TypeError(n + "must be non-object");
                for (var r in n) mu(n, r) && (e[r] = n[r])
            }
        }
        return e
    },
    _u = function(e) {
        for (var t = 0, n = 0, r = e.length; n < r; n++) t += e[n].length;
        for (var i = new Uint8Array(t), o = 0, a = 0, s = e.length; o < s; o++) {
            var u = e[o];
            i.set(u, a), a += u.length
        }
        return i
    },
    bu = !0;
try {
    String.fromCharCode.apply(null, new Uint8Array(1))
} catch (e) {
    bu = !1
}
for (var wu = new Uint8Array(256), xu = 0; xu < 256; xu++) wu[xu] = xu >= 252 ? 6 : xu >= 248 ? 5 : xu >= 240 ? 4 : xu >= 224 ? 3 : xu >= 192 ? 2 : 1;
wu[254] = wu[254] = 1;
var ku = function(e) {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(e);
        var t, n, r, i, o, a = e.length,
            s = 0;
        for (i = 0; i < a; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < a && (56320 == (64512 & (r = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
        for (t = new Uint8Array(s), o = 0, i = 0; o < s; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < a && (56320 == (64512 & (r = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
        return t
    },
    Su = function(e, t) {
        var n, r, i = t || e.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(e.subarray(0, t));
        var o = new Array(2 * i);
        for (r = 0, n = 0; n < i;) {
            var a = e[n++];
            if (a < 128) o[r++] = a;
            else {
                var s = wu[a];
                if (s > 4) o[r++] = 65533, n += s - 1;
                else {
                    for (a &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < i;) a = a << 6 | 63 & e[n++], s--;
                    s > 1 ? o[r++] = 65533 : a < 65536 ? o[r++] = a : (a -= 65536, o[r++] = 55296 | a >> 10 & 1023, o[r++] = 56320 | 1023 & a)
                }
            }
        }
        return function(e, t) {
            if (t < 65534 && e.subarray && bu) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
            for (var n = "", r = 0; r < t; r++) n += String.fromCharCode(e[r]);
            return n
        }(o, r)
    },
    Tu = function(e, t) {
        (t = t || e.length) > e.length && (t = e.length);
        for (var n = t - 1; n >= 0 && 128 == (192 & e[n]);) n--;
        return n < 0 || 0 === n ? t : n + wu[e[n]] > t ? n : t
    },
    Iu = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
    },
    Eu = Object.prototype.toString,
    Au = ws.Z_NO_FLUSH,
    Cu = ws.Z_SYNC_FLUSH,
    Ou = ws.Z_FULL_FLUSH,
    Bu = ws.Z_FINISH,
    Pu = ws.Z_OK,
    Fu = ws.Z_STREAM_END,
    ju = ws.Z_DEFAULT_COMPRESSION,
    Ru = ws.Z_DEFAULT_STRATEGY,
    Lu = ws.Z_DEFLATED;
 function Mu(e) {
    this.options = yu({
        level: ju,
        method: Lu,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Ru
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Iu, this.strm.avail_out = 0;
    var n = hu(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (n !== Pu) throw new Error(bs[n]);
    if (t.header && pu(this.strm, t.header), t.dictionary) {
        var r;
        if (r = "string" == typeof t.dictionary ? ku(t.dictionary) : "[object ArrayBuffer]" === Eu.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (n = vu(this.strm, r)) !== Pu) throw new Error(bs[n]);
        this._dict_set = !0
    }
}
 function Uu(e, t) {
    var n = new Mu(t);
    if (n.push(e, !0), n.err) throw n.msg || bs[n.err];
    return n.result
}
Mu.prototype.push = function(e, t) {
    var n, r, i = this.strm,
        o = this.options.chunkSize;
    if (this.ended) return !1;
    for (r = t === ~~t ? t : !0 === t ? Bu : Au, "string" == typeof e ? i.input = ku(e) : "[object ArrayBuffer]" === Eu.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;;)
        if (0 === i.avail_out && (i.output = new Uint8Array(o), i.next_out = 0, i.avail_out = o), (r === Cu || r === Ou) && i.avail_out <= 6) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
        else {
            if ((n = du(i, r)) === Fu) return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), n = gu(this.strm), this.onEnd(n), this.ended = !0, n === Pu;
            if (0 !== i.avail_out) {
                if (r > 0 && i.next_out > 0) this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
                else if (0 === i.avail_in) break
            } else this.onData(i.output)
        }
    return !0
}, Mu.prototype.onData = function(e) {
    this.chunks.push(e)
}, Mu.prototype.onEnd = function(e) {
    e === Pu && (this.result = _u(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
};
var Du = Mu,
    Nu = Uu,
    qu = function(e, t) {
        return (t = t || {}).raw = !0, Uu(e, t)
    },
    zu = function(e, t) {
        return (t = t || {}).gzip = !0, Uu(e, t)
    },
    $u = function(e, t) {
        var n, r, i, o, a, s, u, c, l, f, h, p, d, g, v, m, y, _, b, w, x, k, S, T, I = e.state;
        n = e.next_in, S = e.input, r = n + (e.avail_in - 5), i = e.next_out, T = e.output, o = i - (t - e.avail_out), a = i + (e.avail_out - 257), s = I.dmax, u = I.wsize, c = I.whave, l = I.wnext, f = I.window, h = I.hold, p = I.bits, d = I.lencode, g = I.distcode, v = (1 << I.lenbits) - 1, m = (1 << I.distbits) - 1;
        e: do {
            p < 15 && (h += S[n++] << p, p += 8, h += S[n++] << p, p += 8), y = d[h & v];
            t: for (;;) {
                if (h >>>= _ = y >>> 24, p -= _, 0 === (_ = y >>> 16 & 255)) T[i++] = 65535 & y;
                else {
                    if (!(16 & _)) {
                        if (0 == (64 & _)) {
                            y = d[(65535 & y) + (h & (1 << _) - 1)];
                            continue t
                        }
                        if (32 & _) {
                            I.mode = 16191;
                            break e
                        }
                        e.msg = "invalid literal/length code", I.mode = 16209;
                        break e
                    }
                    b = 65535 & y, (_ &= 15) && (p < _ && (h += S[n++] << p, p += 8), b += h & (1 << _) - 1, h >>>= _, p -= _), p < 15 && (h += S[n++] << p, p += 8, h += S[n++] << p, p += 8), y = g[h & m];
                    n: for (;;) {
                        if (h >>>= _ = y >>> 24, p -= _, !(16 & (_ = y >>> 16 & 255))) {
                            if (0 == (64 & _)) {
                                y = g[(65535 & y) + (h & (1 << _) - 1)];
                                continue n
                            }
                            e.msg = "invalid distance code", I.mode = 16209;
                            break e
                        }
                        if (w = 65535 & y, p < (_ &= 15) && (h += S[n++] << p, (p += 8) < _ && (h += S[n++] << p, p += 8)), (w += h & (1 << _) - 1) > s) {
                            e.msg = "invalid distance too far back", I.mode = 16209;
                            break e
                        }
                        if (h >>>= _, p -= _, w > (_ = i - o)) {
                            if ((_ = w - _) > c && I.sane) {
                                e.msg = "invalid distance too far back", I.mode = 16209;
                                break e
                            }
                            if (x = 0, k = f, 0 === l) {
                                if (x += u - _, _ < b) {
                                    b -= _;
                                    do {
                                        T[i++] = f[x++]
                                    } while (--_);
                                    x = i - w, k = T
                                }
                            } else if (l < _) {
                                if (x += u + l - _, (_ -= l) < b) {
                                    b -= _;
                                    do {
                                        T[i++] = f[x++]
                                    } while (--_);
                                    if (x = 0, l < b) {
                                        b -= _ = l;
                                        do {
                                            T[i++] = f[x++]
                                        } while (--_);
                                        x = i - w, k = T
                                    }
                                }
                            } else if (x += l - _, _ < b) {
                                b -= _;
                                do {
                                    T[i++] = f[x++]
                                } while (--_);
                                x = i - w, k = T
                            }
                            for (; b > 2;) T[i++] = k[x++], T[i++] = k[x++], T[i++] = k[x++], b -= 3;
                            b && (T[i++] = k[x++], b > 1 && (T[i++] = k[x++]))
                        } else {
                            x = i - w;
                            do {
                                T[i++] = T[x++], T[i++] = T[x++], T[i++] = T[x++], b -= 3
                            } while (b > 2);
                            b && (T[i++] = T[x++], b > 1 && (T[i++] = T[x++]))
                        }
                        break
                    }
                }
                break
            }
        } while (n < r && i < a);
        n -= b = p >> 3, h &= (1 << (p -= b << 3)) - 1, e.next_in = n, e.next_out = i, e.avail_in = n < r ? r - n + 5 : 5 - (n - r), e.avail_out = i < a ? a - i + 257 : 257 - (i - a), I.hold = h, I.bits = p
    },
    Hu = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
    Ku = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
    Vu = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
    Wu = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]),
    Zu = function(e, t, n, r, i, o, a, s) {
        var u, c, l, f, h, p, d, g, v, m = s.bits,
            y = 0,
            _ = 0,
            b = 0,
            w = 0,
            x = 0,
            k = 0,
            S = 0,
            T = 0,
            I = 0,
            E = 0,
            A = null,
            C = new Uint16Array(16),
            O = new Uint16Array(16),
            B = null;
        for (y = 0; y <= 15; y++) C[y] = 0;
        for (_ = 0; _ < r; _++) C[t[n + _]] ++;
        for (x = m, w = 15; w >= 1 && 0 === C[w]; w--);
        if (x > w && (x = w), 0 === w) return i[o++] = 20971520, i[o++] = 20971520, s.bits = 1, 0;
        for (b = 1; b < w && 0 === C[b]; b++);
        for (x < b && (x = b), T = 1, y = 1; y <= 15; y++)
            if (T <<= 1, (T -= C[y]) < 0) return -1;
        if (T > 0 && (0 === e || 1 !== w)) return -1;
        for (O[1] = 0, y = 1; y < 15; y++) O[y + 1] = O[y] + C[y];
        for (_ = 0; _ < r; _++) 0 !== t[n + _] && (a[O[t[n + _]] ++] = _);
        if (0 === e ? (A = B = a, p = 20) : 1 === e ? (A = Hu, B = Ku, p = 257) : (A = Vu, B = Wu, p = 0), E = 0, _ = 0, y = b, h = o, k = x, S = 0, l = -1, f = (I = 1 << x) - 1, 1 === e && I > 852 || 2 === e && I > 592) return 1;
        for (;;) {
            d = y - S, a[_] + 1 < p ? (g = 0, v = a[_]) : a[_] >= p ? (g = B[a[_] - p], v = A[a[_] - p]) : (g = 96, v = 0), u = 1 << y - S, b = c = 1 << k;
            do {
                i[h + (E >> S) + (c -= u)] = d << 24 | g << 16 | v | 0
            } while (0 !== c);
            for (u = 1 << y - 1; E & u;) u >>= 1;
            if (0 !== u ? (E &= u - 1, E += u) : E = 0, _++, 0 == --C[y]) {
                if (y === w) break;
                y = t[n + a[_]]
            }
            if (y > x && (E & f) !== l) {
                for (0 === S && (S = x), h += b, T = 1 << (k = y - S); k + S < w && !((T -= C[k + S]) <= 0);) k++, T <<= 1;
                if (I += 1 << k, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                i[l = E & f] = x << 24 | k << 16 | h - o | 0
            }
        }
        return 0 !== E && (i[h + E] = y - S << 24 | 64 << 16 | 0), s.bits = x, 0
    },
    Ju = ws.Z_FINISH,
    Qu = ws.Z_BLOCK,
    Yu = ws.Z_TREES,
    Gu = ws.Z_OK,
    Xu = ws.Z_STREAM_END,
    ec = ws.Z_NEED_DICT,
    tc = ws.Z_STREAM_ERROR,
    nc = ws.Z_DATA_ERROR,
    rc = ws.Z_MEM_ERROR,
    ic = ws.Z_BUF_ERROR,
    oc = ws.Z_DEFLATED,
    ac = 16209,
    sc = function(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
    };
 function uc() {
    this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
}
var cc, lc, fc = function(e) {
        if (!e) return 1;
        var t = e.state;
        return !t || t.strm !== e || t.mode < 16180 || t.mode > 16211 ? 1 : 0
    },
    hc = function(e) {
        if (fc(e)) return tc;
        var t = e.state;
        return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 16180, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, Gu
    },
    pc = function(e) {
        if (fc(e)) return tc;
        var t = e.state;
        return t.wsize = 0, t.whave = 0, t.wnext = 0, hc(e)
    },
    dc = function(e, t) {
        var n;
        if (fc(e)) return tc;
        var r = e.state;
        return t < 0 ? (n = 0, t = -t) : (n = 5 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? tc : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, pc(e))
    },
    gc = function(e, t) {
        if (!e) return tc;
        var n = new uc;
        e.state = n, n.strm = e, n.window = null, n.mode = 16180;
        var r = dc(e, t);
        return r !== Gu && (e.state = null), r
    },
    vc = !0,
    mc = function(e) {
        if (vc) {
            cc = new Int32Array(512), lc = new Int32Array(32);
            for (var t = 0; t < 144;) e.lens[t++] = 8;
            for (; t < 256;) e.lens[t++] = 9;
            for (; t < 280;) e.lens[t++] = 7;
            for (; t < 288;) e.lens[t++] = 8;
            for (Zu(1, e.lens, 0, 288, cc, 0, e.work, {
                    bits: 9
                }), t = 0; t < 32;) e.lens[t++] = 5;
            Zu(2, e.lens, 0, 32, lc, 0, e.work, {
                bits: 5
            }), vc = !1
        }
        e.lencode = cc, e.lenbits = 9, e.distcode = lc, e.distbits = 5
    },
    yc = function(e, t, n, r) {
        var i, o = e.state;
        return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), r >= o.wsize ? (o.window.set(t.subarray(n - o.wsize, n), 0), o.wnext = 0, o.whave = o.wsize) : ((i = o.wsize - o.wnext) > r && (i = r), o.window.set(t.subarray(n - r, n - r + i), o.wnext), (r -= i) ? (o.window.set(t.subarray(n - r, n), 0), o.wnext = r, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0
    },
    _c = pc,
    bc = gc,
    wc = function(e, t) {
        var n, r, i, o, a, s, u, c, l, f, h, p, d, g, v, m, y, _, b, w, x, k, S, T, I = 0,
            E = new Uint8Array(4),
            A = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (fc(e) || !e.output || !e.input && 0 !== e.avail_in) return tc;
        16191 === (n = e.state).mode && (n.mode = 16192), a = e.next_out, i = e.output, u = e.avail_out, o = e.next_in, r = e.input, s = e.avail_in, c = n.hold, l = n.bits, f = s, h = u, k = Gu;
        e: for (;;) switch (n.mode) {
            case 16180:
                if (0 === n.wrap) {
                    n.mode = 16192;
                    break
                }
                for (; l < 16;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if (2 & n.wrap && 35615 === c) {
                    0 === n.wbits && (n.wbits = 15), n.check = 0, E[0] = 255 & c, E[1] = c >>> 8 & 255, n.check = _s(n.check, E, 2, 0), c = 0, l = 0, n.mode = 16181;
                    break
                }
                if (n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                    e.msg = "incorrect header check", n.mode = ac;
                    break
                }
                if ((15 & c) !== oc) {
                    e.msg = "unknown compression method", n.mode = ac;
                    break
                }
                if (l -= 4, x = 8 + (15 & (c >>>= 4)), 0 === n.wbits && (n.wbits = x), x > 15 || x > n.wbits) {
                    e.msg = "invalid window size", n.mode = ac;
                    break
                }
                n.dmax = 1 << n.wbits, n.flags = 0, e.adler = n.check = 1, n.mode = 512 & c ? 16189 : 16191, c = 0, l = 0;
                break;
            case 16181:
                for (; l < 16;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if (n.flags = c, (255 & n.flags) !== oc) {
                    e.msg = "unknown compression method", n.mode = ac;
                    break
                }
                if (57344 & n.flags) {
                    e.msg = "unknown header flags set", n.mode = ac;
                    break
                }
                n.head && (n.head.text = c >> 8 & 1), 512 & n.flags && 4 & n.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, n.check = _s(n.check, E, 2, 0)), c = 0, l = 0, n.mode = 16182;
            case 16182:
                for (; l < 32;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                n.head && (n.head.time = c), 512 & n.flags && 4 & n.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, E[2] = c >>> 16 & 255, E[3] = c >>> 24 & 255, n.check = _s(n.check, E, 4, 0)), c = 0, l = 0, n.mode = 16183;
            case 16183:
                for (; l < 16;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                n.head && (n.head.xflags = 255 & c, n.head.os = c >> 8), 512 & n.flags && 4 & n.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, n.check = _s(n.check, E, 2, 0)), c = 0, l = 0, n.mode = 16184;
            case 16184:
                if (1024 & n.flags) {
                    for (; l < 16;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    n.length = c, n.head && (n.head.extra_len = c), 512 & n.flags && 4 & n.wrap && (E[0] = 255 & c, E[1] = c >>> 8 & 255, n.check = _s(n.check, E, 2, 0)), c = 0, l = 0
                } else n.head && (n.head.extra = null);
                n.mode = 16185;
            case 16185:
                if (1024 & n.flags && ((p = n.length) > s && (p = s), p && (n.head && (x = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(r.subarray(o, o + p), x)), 512 & n.flags && 4 & n.wrap && (n.check = _s(n.check, r, p, o)), s -= p, o += p, n.length -= p), n.length)) break e;
                n.length = 0, n.mode = 16186;
            case 16186:
                if (2048 & n.flags) {
                    if (0 === s) break e;
                    p = 0;
                    do {
                        x = r[o + p++], n.head && x && n.length < 65536 && (n.head.name += String.fromCharCode(x))
                    } while (x && p < s);
                    if (512 & n.flags && 4 & n.wrap && (n.check = _s(n.check, r, p, o)), s -= p, o += p, x) break e
                } else n.head && (n.head.name = null);
                n.length = 0, n.mode = 16187;
            case 16187:
                if (4096 & n.flags) {
                    if (0 === s) break e;
                    p = 0;
                    do {
                        x = r[o + p++], n.head && x && n.length < 65536 && (n.head.comment += String.fromCharCode(x))
                    } while (x && p < s);
                    if (512 & n.flags && 4 & n.wrap && (n.check = _s(n.check, r, p, o)), s -= p, o += p, x) break e
                } else n.head && (n.head.comment = null);
                n.mode = 16188;
            case 16188:
                if (512 & n.flags) {
                    for (; l < 16;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    if (4 & n.wrap && c !== (65535 & n.check)) {
                        e.msg = "header crc mismatch", n.mode = ac;
                        break
                    }
                    c = 0, l = 0
                }
                n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 16191;
                break;
            case 16189:
                for (; l < 32;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                e.adler = n.check = sc(c), c = 0, l = 0, n.mode = 16190;
            case 16190:
                if (0 === n.havedict) return e.next_out = a, e.avail_out = u, e.next_in = o, e.avail_in = s, n.hold = c, n.bits = l, ec;
                e.adler = n.check = 1, n.mode = 16191;
            case 16191:
                if (t === Qu || t === Yu) break e;
            case 16192:
                if (n.last) {
                    c >>>= 7 & l, l -= 7 & l, n.mode = 16206;
                    break
                }
                for (; l < 3;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                switch (n.last = 1 & c, l -= 1, 3 & (c >>>= 1)) {
                    case 0:
                        n.mode = 16193;
                        break;
                    case 1:
                        if (mc(n), n.mode = 16199, t === Yu) {
                            c >>>= 2, l -= 2;
                            break e
                        }
                        break;
                    case 2:
                        n.mode = 16196;
                        break;
                    case 3:
                        e.msg = "invalid block type", n.mode = ac
                }
                c >>>= 2, l -= 2;
                break;
            case 16193:
                for (c >>>= 7 & l, l -= 7 & l; l < 32;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if ((65535 & c) != (c >>> 16 ^ 65535)) {
                    e.msg = "invalid stored block lengths", n.mode = ac;
                    break
                }
                if (n.length = 65535 & c, c = 0, l = 0, n.mode = 16194, t === Yu) break e;
            case 16194:
                n.mode = 16195;
            case 16195:
                if (p = n.length) {
                    if (p > s && (p = s), p > u && (p = u), 0 === p) break e;
                    i.set(r.subarray(o, o + p), a), s -= p, o += p, u -= p, a += p, n.length -= p;
                    break
                }
                n.mode = 16191;
                break;
            case 16196:
                for (; l < 14;) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if (n.nlen = 257 + (31 & c), c >>>= 5, l -= 5, n.ndist = 1 + (31 & c), c >>>= 5, l -= 5, n.ncode = 4 + (15 & c), c >>>= 4, l -= 4, n.nlen > 286 || n.ndist > 30) {
                    e.msg = "too many length or distance symbols", n.mode = ac;
                    break
                }
                n.have = 0, n.mode = 16197;
            case 16197:
                for (; n.have < n.ncode;) {
                    for (; l < 3;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    n.lens[A[n.have++]] = 7 & c, c >>>= 3, l -= 3
                }
                for (; n.have < 19;) n.lens[A[n.have++]] = 0;
                if (n.lencode = n.lendyn, n.lenbits = 7, S = {
                        bits: n.lenbits
                    }, k = Zu(0, n.lens, 0, 19, n.lencode, 0, n.work, S), n.lenbits = S.bits, k) {
                    e.msg = "invalid code lengths set", n.mode = ac;
                    break
                }
                n.have = 0, n.mode = 16198;
            case 16198:
                for (; n.have < n.nlen + n.ndist;) {
                    for (; m = (I = n.lencode[c & (1 << n.lenbits) - 1]) >>> 16 & 255, y = 65535 & I, !((v = I >>> 24) <= l);) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    if (y < 16) c >>>= v, l -= v, n.lens[n.have++] = y;
                    else {
                        if (16 === y) {
                            for (T = v + 2; l < T;) {
                                if (0 === s) break e;
                                s--, c += r[o++] << l, l += 8
                            }
                            if (c >>>= v, l -= v, 0 === n.have) {
                                e.msg = "invalid bit length repeat", n.mode = ac;
                                break
                            }
                            x = n.lens[n.have - 1], p = 3 + (3 & c), c >>>= 2, l -= 2
                        } else if (17 === y) {
                            for (T = v + 3; l < T;) {
                                if (0 === s) break e;
                                s--, c += r[o++] << l, l += 8
                            }
                            l -= v, x = 0, p = 3 + (7 & (c >>>= v)), c >>>= 3, l -= 3
                        } else {
                            for (T = v + 7; l < T;) {
                                if (0 === s) break e;
                                s--, c += r[o++] << l, l += 8
                            }
                            l -= v, x = 0, p = 11 + (127 & (c >>>= v)), c >>>= 7, l -= 7
                        }
                        if (n.have + p > n.nlen + n.ndist) {
                            e.msg = "invalid bit length repeat", n.mode = ac;
                            break
                        }
                        for (; p--;) n.lens[n.have++] = x
                    }
                }
                if (n.mode === ac) break;
                if (0 === n.lens[256]) {
                    e.msg = "invalid code -- missing end-of-block", n.mode = ac;
                    break
                }
                if (n.lenbits = 9, S = {
                        bits: n.lenbits
                    }, k = Zu(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S), n.lenbits = S.bits, k) {
                    e.msg = "invalid literal/lengths set", n.mode = ac;
                    break
                }
                if (n.distbits = 6, n.distcode = n.distdyn, S = {
                        bits: n.distbits
                    }, k = Zu(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S), n.distbits = S.bits, k) {
                    e.msg = "invalid distances set", n.mode = ac;
                    break
                }
                if (n.mode = 16199, t === Yu) break e;
            case 16199:
                n.mode = 16200;
            case 16200:
                if (s >= 6 && u >= 258) {
                    e.next_out = a, e.avail_out = u, e.next_in = o, e.avail_in = s, n.hold = c, n.bits = l, $u(e, h), a = e.next_out, i = e.output, u = e.avail_out, o = e.next_in, r = e.input, s = e.avail_in, c = n.hold, l = n.bits, 16191 === n.mode && (n.back = -1);
                    break
                }
                for (n.back = 0; m = (I = n.lencode[c & (1 << n.lenbits) - 1]) >>> 16 & 255, y = 65535 & I, !((v = I >>> 24) <= l);) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if (m && 0 == (240 & m)) {
                    for (_ = v, b = m, w = y; m = (I = n.lencode[w + ((c & (1 << _ + b) - 1) >> _)]) >>> 16 & 255, y = 65535 & I, !(_ + (v = I >>> 24) <= l);) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    c >>>= _, l -= _, n.back += _
                }
                if (c >>>= v, l -= v, n.back += v, n.length = y, 0 === m) {
                    n.mode = 16205;
                    break
                }
                if (32 & m) {
                    n.back = -1, n.mode = 16191;
                    break
                }
                if (64 & m) {
                    e.msg = "invalid literal/length code", n.mode = ac;
                    break
                }
                n.extra = 15 & m, n.mode = 16201;
            case 16201:
                if (n.extra) {
                    for (T = n.extra; l < T;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    n.length += c & (1 << n.extra) - 1, c >>>= n.extra, l -= n.extra, n.back += n.extra
                }
                n.was = n.length, n.mode = 16202;
            case 16202:
                for (; m = (I = n.distcode[c & (1 << n.distbits) - 1]) >>> 16 & 255, y = 65535 & I, !((v = I >>> 24) <= l);) {
                    if (0 === s) break e;
                    s--, c += r[o++] << l, l += 8
                }
                if (0 == (240 & m)) {
                    for (_ = v, b = m, w = y; m = (I = n.distcode[w + ((c & (1 << _ + b) - 1) >> _)]) >>> 16 & 255, y = 65535 & I, !(_ + (v = I >>> 24) <= l);) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    c >>>= _, l -= _, n.back += _
                }
                if (c >>>= v, l -= v, n.back += v, 64 & m) {
                    e.msg = "invalid distance code", n.mode = ac;
                    break
                }
                n.offset = y, n.extra = 15 & m, n.mode = 16203;
            case 16203:
                if (n.extra) {
                    for (T = n.extra; l < T;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    n.offset += c & (1 << n.extra) - 1, c >>>= n.extra, l -= n.extra, n.back += n.extra
                }
                if (n.offset > n.dmax) {
                    e.msg = "invalid distance too far back", n.mode = ac;
                    break
                }
                n.mode = 16204;
            case 16204:
                if (0 === u) break e;
                if (p = h - u, n.offset > p) {
                    if ((p = n.offset - p) > n.whave && n.sane) {
                        e.msg = "invalid distance too far back", n.mode = ac;
                        break
                    }
                    p > n.wnext ? (p -= n.wnext, d = n.wsize - p) : d = n.wnext - p, p > n.length && (p = n.length), g = n.window
                } else g = i, d = a - n.offset, p = n.length;
                p > u && (p = u), u -= p, n.length -= p;
                do {
                    i[a++] = g[d++]
                } while (--p);
                0 === n.length && (n.mode = 16200);
                break;
            case 16205:
                if (0 === u) break e;
                i[a++] = n.length, u--, n.mode = 16200;
                break;
            case 16206:
                if (n.wrap) {
                    for (; l < 32;) {
                        if (0 === s) break e;
                        s--, c |= r[o++] << l, l += 8
                    }
                    if (h -= u, e.total_out += h, n.total += h, 4 & n.wrap && h && (e.adler = n.check = n.flags ? _s(n.check, i, h, a - h) : ms(n.check, i, h, a - h)), h = u, 4 & n.wrap && (n.flags ? c : sc(c)) !== n.check) {
                        e.msg = "incorrect data check", n.mode = ac;
                        break
                    }
                    c = 0, l = 0
                }
                n.mode = 16207;
            case 16207:
                if (n.wrap && n.flags) {
                    for (; l < 32;) {
                        if (0 === s) break e;
                        s--, c += r[o++] << l, l += 8
                    }
                    if (4 & n.wrap && c !== (4294967295 & n.total)) {
                        e.msg = "incorrect length check", n.mode = ac;
                        break
                    }
                    c = 0, l = 0
                }
                n.mode = 16208;
            case 16208:
                k = Xu;
                break e;
            case ac:
                k = nc;
                break e;
            case 16210:
                return rc;
            default:
                return tc
        }
        return e.next_out = a, e.avail_out = u, e.next_in = o, e.avail_in = s, n.hold = c, n.bits = l, (n.wsize || h !== e.avail_out && n.mode < ac && (n.mode < 16206 || t !== Ju)) && yc(e, e.output, e.next_out, h - e.avail_out), f -= e.avail_in, h -= e.avail_out, e.total_in += f, e.total_out += h, n.total += h, 4 & n.wrap && h && (e.adler = n.check = n.flags ? _s(n.check, i, h, e.next_out - h) : ms(n.check, i, h, e.next_out - h)), e.data_type = n.bits + (n.last ? 64 : 0) + (16191 === n.mode ? 128 : 0) + (16199 === n.mode || 16194 === n.mode ? 256 : 0), (0 === f && 0 === h || t === Ju) && k === Gu && (k = ic), k
    },
    xc = function(e) {
        if (fc(e)) return tc;
        var t = e.state;
        return t.window && (t.window = null), e.state = null, Gu
    },
    kc = function(e, t) {
        if (fc(e)) return tc;
        var n = e.state;
        return 0 == (2 & n.wrap) ? tc : (n.head = t, t.done = !1, Gu)
    },
    Sc = function(e, t) {
        var n, r = t.length;
        return fc(e) ? tc : 0 !== (n = e.state).wrap && 16190 !== n.mode ? tc : 16190 === n.mode && ms(1, t, r, 0) !== n.check ? nc : yc(e, t, r, r) ? (n.mode = 16210, rc) : (n.havedict = 1, Gu)
    },
    Tc = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
    },
    Ic = Object.prototype.toString,
    Ec = ws.Z_NO_FLUSH,
    Ac = ws.Z_FINISH,
    Cc = ws.Z_OK,
    Oc = ws.Z_STREAM_END,
    Bc = ws.Z_NEED_DICT,
    Pc = ws.Z_STREAM_ERROR,
    Fc = ws.Z_DATA_ERROR,
    jc = ws.Z_MEM_ERROR;
 function Rc(e) {
    this.options = yu({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Iu, this.strm.avail_out = 0;
    var n = bc(this.strm, t.windowBits);
    if (n !== Cc) throw new Error(bs[n]);
    if (this.header = new Tc, kc(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = ku(t.dictionary) : "[object ArrayBuffer]" === Ic.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = Sc(this.strm, t.dictionary)) !== Cc)) throw new Error(bs[n])
}
 function Lc(e, t) {
    var n = new Rc(t);
    if (n.push(e), n.err) throw n.msg || bs[n.err];
    return n.result
}
Rc.prototype.push = function(e, t) {
    var n, r, i, o = this.strm,
        a = this.options.chunkSize,
        s = this.options.dictionary;
    if (this.ended) return !1;
    for (r = t === ~~t ? t : !0 === t ? Ac : Ec, "[object ArrayBuffer]" === Ic.call(e) ? o.input = new Uint8Array(e) : o.input = e, o.next_in = 0, o.avail_in = o.input.length;;) {
        for (0 === o.avail_out && (o.output = new Uint8Array(a), o.next_out = 0, o.avail_out = a), (n = wc(o, r)) === Bc && s && ((n = Sc(o, s)) === Cc ? n = wc(o, r) : n === Fc && (n = Bc)); o.avail_in > 0 && n === Oc && o.state.wrap > 0 && 0 !== e[o.next_in];) _c(o), n = wc(o, r);
        switch (n) {
            case Pc:
            case Fc:
            case Bc:
            case jc:
                return this.onEnd(n), this.ended = !0, !1
        }
        if (i = o.avail_out, o.next_out && (0 === o.avail_out || n === Oc))
            if ("string" === this.options.to) {
                var u = Tu(o.output, o.next_out),
                    c = o.next_out - u,
                    l = Su(o.output, u);
                o.next_out = c, o.avail_out = a - c, c && o.output.set(o.output.subarray(u, u + c), 0), this.onData(l)
            } else this.onData(o.output.length === o.next_out ? o.output : o.output.subarray(0, o.next_out));
        if (n !== Cc || 0 !== i) {
            if (n === Oc) return n = xc(this.strm), this.onEnd(n), this.ended = !0, !0;
            if (0 === o.avail_in) break
        }
    }
    return !0
}, Rc.prototype.onData = function(e) {
    this.chunks.push(e)
}, Rc.prototype.onEnd = function(e) {
    e === Cc && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _u(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
};
var Mc = {
        Deflate: Du,
        deflate: Nu,
        deflateRaw: qu,
        gzip: zu,
        Inflate: Rc,
        inflate: Lc,
        inflateRaw: function(e, t) {
            return (t = t || {}).raw = !0, Lc(e, t)
        },
        ungzip: Lc,
        constants: ws
    },
    Uc = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
 function Dc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nc, qc = {
    exports: {}
};
Nc = qc,
    function() {
        var e;
         function t(e, t, n) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }
         function n() {
            return new t(null)
        }
        var r = "undefined" != typeof navigator;
        r && "Microsoft Internet Explorer" == navigator.appName ? (t.prototype.am = function(e, t, n, r, i, o) {
            for (var a = 32767 & t, s = t >> 15; --o >= 0;) {
                var u = 32767 & this[e],
                    c = this[e++] >> 15,
                    l = s * u + c * a;
                i = ((u = a * u + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + s * c + (i >>> 30), n[r++] = 1073741823 & u
            }
            return i
        }, e = 30) : r && "Netscape" != navigator.appName ? (t.prototype.am = function(e, t, n, r, i, o) {
            for (; --o >= 0;) {
                var a = t * this[e++] + n[r] + i;
                i = Math.floor(a / 67108864), n[r++] = 67108863 & a
            }
            return i
        }, e = 26) : (t.prototype.am = function(e, t, n, r, i, o) {
            for (var a = 16383 & t, s = t >> 14; --o >= 0;) {
                var u = 16383 & this[e],
                    c = this[e++] >> 14,
                    l = s * u + c * a;
                i = ((u = a * u + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + s * c, n[r++] = 268435455 & u
            }
            return i
        }, e = 28), t.prototype.DB = e, t.prototype.DM = (1 << e) - 1, t.prototype.DV = 1 << e, t.prototype.FV = Math.pow(2, 52), t.prototype.F1 = 52 - e, t.prototype.F2 = 2 * e - 52;
        var i, o, a = new Array;
        for (i = "0".charCodeAt(0), o = 0; o <= 9; ++o) a[i++] = o;
        for (i = "a".charCodeAt(0), o = 10; o < 36; ++o) a[i++] = o;
        for (i = "A".charCodeAt(0), o = 10; o < 36; ++o) a[i++] = o;
         function s(e) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
        }
         function u(e, t) {
            var n = a[e.charCodeAt(t)];
            return null == n ? -1 : n
        }
         function c(e) {
            var t = n();
            return t.fromInt(e), t
        }
         function l(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n
        }
         function f(e) {
            this.m = e
        }
         function h(e) {
            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
        }
         function p(e, t) {
            return e & t
        }
         function d(e, t) {
            return e | t
        }
         function g(e, t) {
            return e ^ t
        }
         function v(e, t) {
            return e & ~t
        }
         function m(e) {
            if (0 == e) return -1;
            var t = 0;
            return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
        }
         function y(e) {
            for (var t = 0; 0 != e;) e &= e - 1, ++t;
            return t
        }
         function _() {}
         function b(e) {
            return e
        }
         function w(e) {
            this.r2 = n(), this.q3 = n(), t.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
        }
        f.prototype.convert = function(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }, f.prototype.revert = function(e) {
            return e
        }, f.prototype.reduce = function(e) {
            e.divRemTo(this.m, null, e)
        }, f.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n)
        }, f.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t)
        }, h.prototype.convert = function(e) {
            var r = n();
            return e.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), e.s < 0 && r.compareTo(t.ZERO) > 0 && this.m.subTo(r, r), r
        }, h.prototype.revert = function(e) {
            var t = n();
            return e.copyTo(t), this.reduce(t), t
        }, h.prototype.reduce = function(e) {
            for (; e.t <= this.mt2;) e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t],
                    r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n] ++
            }
            e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }, h.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n)
        }, h.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t)
        }, t.prototype.copyTo = function(e) {
            for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
            e.t = this.t, e.s = this.s
        }, t.prototype.fromInt = function(e) {
            this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
        }, t.prototype.fromString = function(e, n) {
            var r;
            if (16 == n) r = 4;
            else if (8 == n) r = 3;
            else if (256 == n) r = 8;
            else if (2 == n) r = 1;
            else if (32 == n) r = 5;
            else {
                if (4 != n) return void this.fromRadix(e, n);
                r = 2
            }
            this.t = 0, this.s = 0;
            for (var i = e.length, o = !1, a = 0; --i >= 0;) {
                var s = 8 == r ? 255 & e[i] : u(e, i);
                s < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1, 0 == a ? this[this.t++] = s : a + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a, this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a, (a += r) >= this.DB && (a -= this.DB))
            }
            8 == r && 0 != (128 & e[0]) && (this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)), this.clamp(), o && t.ZERO.subTo(this, this)
        }, t.prototype.clamp = function() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
        }, t.prototype.dlShiftTo = function(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n) t[n] = 0;
            t.t = this.t + e, t.s = this.s
        }, t.prototype.drShiftTo = function(e, t) {
            for (var n = e; n < this.t; ++n) t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0), t.s = this.s
        }, t.prototype.lShiftTo = function(e, t) {
            var n, r = e % this.DB,
                i = this.DB - r,
                o = (1 << i) - 1,
                a = Math.floor(e / this.DB),
                s = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n) t[n + a + 1] = this[n] >> i | s, s = (this[n] & o) << r;
            for (n = a - 1; n >= 0; --n) t[n] = 0;
            t[a] = s, t.t = this.t + a + 1, t.s = this.s, t.clamp()
        }, t.prototype.rShiftTo = function(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t) t.t = 0;
            else {
                var r = e % this.DB,
                    i = this.DB - r,
                    o = (1 << r) - 1;
                t[0] = this[n] >> r;
                for (var a = n + 1; a < this.t; ++a) t[a - n - 1] |= (this[a] & o) << i, t[a - n] = this[a] >> r;
                r > 0 && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp()
            }
        }, t.prototype.subTo = function(e, t) {
            for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r -= e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; n < e.t;) r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
                r -= e.s
            }
            t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp()
        }, t.prototype.multiplyTo = function(e, n) {
            var r = this.abs(),
                i = e.abs(),
                o = r.t;
            for (n.t = o + i.t; --o >= 0;) n[o] = 0;
            for (o = 0; o < i.t; ++o) n[o + r.t] = r.am(0, i[o], n, o, 0, r.t);
            n.s = 0, n.clamp(), this.s != e.s && t.ZERO.subTo(n, n)
        }, t.prototype.squareTo = function(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;) e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
        }, t.prototype.divRemTo = function(e, r, i) {
            var o = e.abs();
            if (!(o.t <= 0)) {
                var a = this.abs();
                if (a.t < o.t) return null != r && r.fromInt(0), void(null != i && this.copyTo(i));
                null == i && (i = n());
                var s = n(),
                    u = this.s,
                    c = e.s,
                    f = this.DB - l(o[o.t - 1]);
                f > 0 ? (o.lShiftTo(f, s), a.lShiftTo(f, i)) : (o.copyTo(s), a.copyTo(i));
                var h = s.t,
                    p = s[h - 1];
                if (0 != p) {
                    var d = p * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0),
                        g = this.FV / d,
                        v = (1 << this.F1) / d,
                        m = 1 << this.F2,
                        y = i.t,
                        _ = y - h,
                        b = null == r ? n() : r;
                    for (s.dlShiftTo(_, b), i.compareTo(b) >= 0 && (i[i.t++] = 1, i.subTo(b, i)), t.ONE.dlShiftTo(h, b), b.subTo(s, s); s.t < h;) s[s.t++] = 0;
                    for (; --_ >= 0;) {
                        var w = i[--y] == p ? this.DM : Math.floor(i[y] * g + (i[y - 1] + m) * v);
                        if ((i[y] += s.am(0, w, i, _, 0, h)) < w)
                            for (s.dlShiftTo(_, b), i.subTo(b, i); i[y] < --w;) i.subTo(b, i)
                    }
                    null != r && (i.drShiftTo(h, r), u != c && t.ZERO.subTo(r, r)), i.t = h, i.clamp(), f > 0 && i.rShiftTo(f, i), u < 0 && t.ZERO.subTo(i, i)
                }
            }
        }, t.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var e = this[0];
            if (0 == (1 & e)) return 0;
            var t = 3 & e;
            return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
        }, t.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }, t.prototype.exp = function(e, r) {
            if (e > 4294967295 || e < 1) return t.ONE;
            var i = n(),
                o = n(),
                a = r.convert(this),
                s = l(e) - 1;
            for (a.copyTo(i); --s >= 0;)
                if (r.sqrTo(i, o), (e & 1 << s) > 0) r.mulTo(o, a, i);
                else {
                    var u = i;
                    i = o, o = u
                }
            return r.revert(i)
        }, t.prototype.toString = function(e) {
            if (this.s < 0) return "-" + this.negate().toString(e);
            var t;
            if (16 == e) t = 4;
            else if (8 == e) t = 3;
            else if (2 == e) t = 1;
            else if (32 == e) t = 5;
            else {
                if (4 != e) return this.toRadix(e);
                t = 2
            }
            var n, r = (1 << t) - 1,
                i = !1,
                o = "",
                a = this.t,
                u = this.DB - a * this.DB % t;
            if (a-- > 0)
                for (u < this.DB && (n = this[a] >> u) > 0 && (i = !0, o = s(n)); a >= 0;) u < t ? (n = (this[a] & (1 << u) - 1) << t - u, n |= this[--a] >> (u += this.DB - t)) : (n = this[a] >> (u -= t) & r, u <= 0 && (u += this.DB, --a)), n > 0 && (i = !0), i && (o += s(n));
            return i ? o : "0"
        }, t.prototype.negate = function() {
            var e = n();
            return t.ZERO.subTo(this, e), e
        }, t.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }, t.prototype.compareTo = function(e) {
            var t = this.s - e.s;
            if (0 != t) return t;
            var n = this.t;
            if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
            for (; --n >= 0;)
                if (0 != (t = this[n] - e[n])) return t;
            return 0
        }, t.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
        }, t.prototype.mod = function(e) {
            var r = n();
            return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r
        }, t.prototype.modPowInt = function(e, t) {
            var n;
            return n = e < 256 || t.isEven() ? new f(t) : new h(t), this.exp(e, n)
        }, t.ZERO = c(0), t.ONE = c(1), _.prototype.convert = b, _.prototype.revert = b, _.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n)
        }, _.prototype.sqrTo = function(e, t) {
            e.squareTo(t)
        }, w.prototype.convert = function(e) {
            if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
            if (e.compareTo(this.m) < 0) return e;
            var t = n();
            return e.copyTo(t), this.reduce(t), t
        }, w.prototype.revert = function(e) {
            return e
        }, w.prototype.reduce = function(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
        }, w.prototype.mulTo = function(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n)
        }, w.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t)
        };
        var x, k, S, T = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            I = (1 << 26) / T[T.length - 1];
         function E() {
            var e;
            e = (new Date).getTime(), k[S++] ^= 255 & e, k[S++] ^= e >> 8 & 255, k[S++] ^= e >> 16 & 255, k[S++] ^= e >> 24 & 255, S >= j && (S -= j)
        }
        if (t.prototype.chunkSize = function(e) {
                return Math.floor(Math.LN2 * this.DB / Math.log(e))
            }, t.prototype.toRadix = function(e) {
                if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
                var t = this.chunkSize(e),
                    r = Math.pow(e, t),
                    i = c(r),
                    o = n(),
                    a = n(),
                    s = "";
                for (this.divRemTo(i, o, a); o.signum() > 0;) s = (r + a.intValue()).toString(e).substr(1) + s, o.divRemTo(i, o, a);
                return a.intValue().toString(e) + s
            }, t.prototype.fromRadix = function(e, n) {
                this.fromInt(0), null == n && (n = 10);
                for (var r = this.chunkSize(n), i = Math.pow(n, r), o = !1, a = 0, s = 0, c = 0; c < e.length; ++c) {
                    var l = u(e, c);
                    l < 0 ? "-" == e.charAt(c) && 0 == this.signum() && (o = !0) : (s = n * s + l, ++a >= r && (this.dMultiply(i), this.dAddOffset(s, 0), a = 0, s = 0))
                }
                a > 0 && (this.dMultiply(Math.pow(n, a)), this.dAddOffset(s, 0)), o && t.ZERO.subTo(this, this)
            }, t.prototype.fromNumber = function(e, n, r) {
                if ("number" == typeof n)
                    if (e < 2) this.fromInt(1);
                    else
                        for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), d, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                else {
                    var i = new Array,
                        o = 7 & e;
                    i.length = 1 + (e >> 3), n.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, this.fromString(i, 256)
                }
            }, t.prototype.bitwiseTo = function(e, t, n) {
                var r, i, o = Math.min(e.t, this.t);
                for (r = 0; r < o; ++r) n[r] = t(this[r], e[r]);
                if (e.t < this.t) {
                    for (i = e.s & this.DM, r = o; r < this.t; ++r) n[r] = t(this[r], i);
                    n.t = this.t
                } else {
                    for (i = this.s & this.DM, r = o; r < e.t; ++r) n[r] = t(i, e[r]);
                    n.t = e.t
                }
                n.s = t(this.s, e.s), n.clamp()
            }, t.prototype.changeBit = function(e, n) {
                var r = t.ONE.shiftLeft(e);
                return this.bitwiseTo(r, n, r), r
            }, t.prototype.addTo = function(e, t) {
                for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB;
                if (e.t < this.t) {
                    for (r += e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < e.t;) r += e[n], t[n++] = r & this.DM, r >>= this.DB;
                    r += e.s
                }
                t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp()
            }, t.prototype.dMultiply = function(e) {
                this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, t.prototype.dAddOffset = function(e, t) {
                if (0 != e) {
                    for (; this.t <= t;) this[this.t++] = 0;
                    for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
                }
            }, t.prototype.multiplyLowerTo = function(e, t, n) {
                var r, i = Math.min(this.t + e.t, t);
                for (n.s = 0, n.t = i; i > 0;) n[--i] = 0;
                for (r = n.t - this.t; i < r; ++i) n[i + this.t] = this.am(0, e[i], n, i, 0, this.t);
                for (r = Math.min(e.t, t); i < r; ++i) this.am(0, e[i], n, i, 0, t - i);
                n.clamp()
            }, t.prototype.multiplyUpperTo = function(e, t, n) {
                --t;
                var r = n.t = this.t + e.t - t;
                for (n.s = 0; --r >= 0;) n[r] = 0;
                for (r = Math.max(t - this.t, 0); r < e.t; ++r) n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
                n.clamp(), n.drShiftTo(1, n)
            }, t.prototype.modInt = function(e) {
                if (e <= 0) return 0;
                var t = this.DV % e,
                    n = this.s < 0 ? e - 1 : 0;
                if (this.t > 0)
                    if (0 == t) n = this[0] % e;
                    else
                        for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
                return n
            }, t.prototype.millerRabin = function(e) {
                var r = this.subtract(t.ONE),
                    i = r.getLowestSetBit();
                if (i <= 0) return !1;
                var o = r.shiftRight(i);
                (e = e + 1 >> 1) > T.length && (e = T.length);
                for (var a = n(), s = 0; s < e; ++s) {
                    a.fromInt(T[Math.floor(Math.random() * T.length)]);
                    var u = a.modPow(o, this);
                    if (0 != u.compareTo(t.ONE) && 0 != u.compareTo(r)) {
                        for (var c = 1; c++ < i && 0 != u.compareTo(r);)
                            if (0 == (u = u.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                        if (0 != u.compareTo(r)) return !1
                    }
                }
                return !0
            }, t.prototype.clone = function() {
                var e = n();
                return this.copyTo(e), e
            }, t.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, t.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, t.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, t.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, t.prototype.toByteArray = function() {
                var e = this.t,
                    t = new Array;
                t[0] = this.s;
                var n, r = this.DB - e * this.DB % 8,
                    i = 0;
                if (e-- > 0)
                    for (r < this.DB && (n = this[e] >> r) != (this.s & this.DM) >> r && (t[i++] = n | this.s << this.DB - r); e >= 0;) r < 8 ? (n = (this[e] & (1 << r) - 1) << 8 - r, n |= this[--e] >> (r += this.DB - 8)) : (n = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --e)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (t[i++] = n);
                return t
            }, t.prototype.equals = function(e) {
                return 0 == this.compareTo(e)
            }, t.prototype.min = function(e) {
                return this.compareTo(e) < 0 ? this : e
            }, t.prototype.max = function(e) {
                return this.compareTo(e) > 0 ? this : e
            }, t.prototype.and = function(e) {
                var t = n();
                return this.bitwiseTo(e, p, t), t
            }, t.prototype.or = function(e) {
                var t = n();
                return this.bitwiseTo(e, d, t), t
            }, t.prototype.xor = function(e) {
                var t = n();
                return this.bitwiseTo(e, g, t), t
            }, t.prototype.andNot = function(e) {
                var t = n();
                return this.bitwiseTo(e, v, t), t
            }, t.prototype.not = function() {
                for (var e = n(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                return e.t = this.t, e.s = ~this.s, e
            }, t.prototype.shiftLeft = function(e) {
                var t = n();
                return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
            }, t.prototype.shiftRight = function(e) {
                var t = n();
                return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
            }, t.prototype.getLowestSetBit = function() {
                for (var e = 0; e < this.t; ++e)
                    if (0 != this[e]) return e * this.DB + m(this[e]);
                return this.s < 0 ? this.t * this.DB : -1
            }, t.prototype.bitCount = function() {
                for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n) e += y(this[n] ^ t);
                return e
            }, t.prototype.testBit = function(e) {
                var t = Math.floor(e / this.DB);
                return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
            }, t.prototype.setBit = function(e) {
                return this.changeBit(e, d)
            }, t.prototype.clearBit = function(e) {
                return this.changeBit(e, v)
            }, t.prototype.flipBit = function(e) {
                return this.changeBit(e, g)
            }, t.prototype.add = function(e) {
                var t = n();
                return this.addTo(e, t), t
            }, t.prototype.subtract = function(e) {
                var t = n();
                return this.subTo(e, t), t
            }, t.prototype.multiply = function(e) {
                var t = n();
                return this.multiplyTo(e, t), t
            }, t.prototype.divide = function(e) {
                var t = n();
                return this.divRemTo(e, t, null), t
            }, t.prototype.remainder = function(e) {
                var t = n();
                return this.divRemTo(e, null, t), t
            }, t.prototype.divideAndRemainder = function(e) {
                var t = n(),
                    r = n();
                return this.divRemTo(e, t, r), new Array(t, r)
            }, t.prototype.modPow = function(e, t) {
                var r, i, o = e.bitLength(),
                    a = c(1);
                if (o <= 0) return a;
                r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, i = o < 8 ? new f(t) : t.isEven() ? new w(t) : new h(t);
                var s = new Array,
                    u = 3,
                    p = r - 1,
                    d = (1 << r) - 1;
                if (s[1] = i.convert(this), r > 1) {
                    var g = n();
                    for (i.sqrTo(s[1], g); u <= d;) s[u] = n(), i.mulTo(g, s[u - 2], s[u]), u += 2
                }
                var v, m, y = e.t - 1,
                    _ = !0,
                    b = n();
                for (o = l(e[y]) - 1; y >= 0;) {
                    for (o >= p ? v = e[y] >> o - p & d : (v = (e[y] & (1 << o + 1) - 1) << p - o, y > 0 && (v |= e[y - 1] >> this.DB + o - p)), u = r; 0 == (1 & v);) v >>= 1, --u;
                    if ((o -= u) < 0 && (o += this.DB, --y), _) s[v].copyTo(a), _ = !1;
                    else {
                        for (; u > 1;) i.sqrTo(a, b), i.sqrTo(b, a), u -= 2;
                        u > 0 ? i.sqrTo(a, b) : (m = a, a = b, b = m), i.mulTo(b, s[v], a)
                    }
                    for (; y >= 0 && 0 == (e[y] & 1 << o);) i.sqrTo(a, b), m = a, a = b, b = m, --o < 0 && (o = this.DB - 1, --y)
                }
                return i.revert(a)
            }, t.prototype.modInverse = function(e) {
                var n = e.isEven();
                if (this.isEven() && n || 0 == e.signum()) return t.ZERO;
                for (var r = e.clone(), i = this.clone(), o = c(1), a = c(0), s = c(0), u = c(1); 0 != r.signum();) {
                    for (; r.isEven();) r.rShiftTo(1, r), n ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(e, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                    for (; i.isEven();) i.rShiftTo(1, i), n ? (s.isEven() && u.isEven() || (s.addTo(this, s), u.subTo(e, u)), s.rShiftTo(1, s)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
                    r.compareTo(i) >= 0 ? (r.subTo(i, r), n && o.subTo(s, o), a.subTo(u, a)) : (i.subTo(r, i), n && s.subTo(o, s), u.subTo(a, u))
                }
                return 0 != i.compareTo(t.ONE) ? t.ZERO : u.compareTo(e) >= 0 ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u), u.signum() < 0 ? u.add(e) : u) : u
            }, t.prototype.pow = function(e) {
                return this.exp(e, new _)
            }, t.prototype.gcd = function(e) {
                var t = this.s < 0 ? this.negate() : this.clone(),
                    n = e.s < 0 ? e.negate() : e.clone();
                if (t.compareTo(n) < 0) {
                    var r = t;
                    t = n, n = r
                }
                var i = t.getLowestSetBit(),
                    o = n.getLowestSetBit();
                if (o < 0) return t;
                for (i < o && (o = i), o > 0 && (t.rShiftTo(o, t), n.rShiftTo(o, n)); t.signum() > 0;)(i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), t.compareTo(n) >= 0 ? (t.subTo(n, t), t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n));
                return o > 0 && n.lShiftTo(o, n), n
            }, t.prototype.isProbablePrime = function(e) {
                var t, n = this.abs();
                if (1 == n.t && n[0] <= T[T.length - 1]) {
                    for (t = 0; t < T.length; ++t)
                        if (n[0] == T[t]) return !0;
                    return !1
                }
                if (n.isEven()) return !1;
                for (t = 1; t < T.length;) {
                    for (var r = T[t], i = t + 1; i < T.length && r < I;) r *= T[i++];
                    for (r = n.modInt(r); t < i;)
                        if (r % T[t++] == 0) return !1
                }
                return n.millerRabin(e)
            }, t.prototype.square = function() {
                var e = n();
                return this.squareTo(e), e
            }, t.prototype.Barrett = w, null == k) {
            var A;
            if (k = new Array, S = 0, "undefined" != typeof window && window.crypto)
                if (window.crypto.getRandomValues) {
                    var C = new Uint8Array(32);
                    for (window.crypto.getRandomValues(C), A = 0; A < 32; ++A) k[S++] = C[A]
                } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                var O = window.crypto.random(32);
                for (A = 0; A < O.length; ++A) k[S++] = 255 & O.charCodeAt(A)
            }
            for (; S < j;) A = Math.floor(65536 * Math.random()), k[S++] = A >>> 8, k[S++] = 255 & A;
            S = 0, E()
        }
         function B() {
            if (null == x) {
                for (E(), (x = new F).init(k), S = 0; S < k.length; ++S) k[S] = 0;
                S = 0
            }
            return x.next()
        }
         function P() {}
         function F() {
            this.i = 0, this.j = 0, this.S = new Array
        }
        P.prototype.nextBytes = function(e) {
            var t;
            for (t = 0; t < e.length; ++t) e[t] = B()
        }, F.prototype.init = function(e) {
            var t, n, r;
            for (t = 0; t < 256; ++t) this.S[t] = t;
            for (n = 0, t = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], this.S[t] = this.S[n], this.S[n] = r;
            this.i = 0, this.j = 0
        }, F.prototype.next = function() {
            var e;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
        };
        var j = 256;
        Nc.exports = {
            default: t,
            BigInteger: t,
            SecureRandom: P
        }
    }.call(Uc);
var zc = qc.exports,
    $c = zc.BigInteger,
    Hc = function() {
        function e() {
            u(this, e), this.tlv = null, this.t = "00", this.l = "00", this.v = ""
        }
        return c(e, [{
            key: "getEncodedHex",
            value: function() {
                return this.tlv || (this.v = this.getValue(), this.l = this.getLength(), this.tlv = this.t + this.l + this.v), this.tlv
            }
        }, {
            key: "getLength",
            value: function() {
                var e = this.v.length / 2,
                    t = e.toString(16);
                return t.length % 2 == 1 && (t = "0" + t), e < 128 ? t : (128 + t.length / 2).toString(16) + t
            }
        }, {
            key: "getValue",
            value: function() {
                return ""
            }
        }]), e
    }(),
    Kc = function(e) {
        o(n, Hc);
        var t = a(n);
         function n(e) {
            var r;
            return u(this, n), (r = t.call(this)).t = "02", e && (r.v = function(e) {
                var t = e.toString(16);
                if ("-" !== t[0]) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
                else {
                    var n = (t = t.substr(1)).length;
                    n % 2 == 1 ? n += 1 : t.match(/^[0-7]/) || (n += 2);
                    for (var r = "", i = 0; i < n; i++) r += "f";
                    t = (t = (r = new $c(r, 16)).xor(e).add($c.ONE)).toString(16).replace(/^-/, "")
                }
                return t
            }(e)), r
        }
        return c(n, [{
            key: "getValue",
            value: function() {
                return this.v
            }
        }]), n
    }(),
    Vc = function(e) {
        o(n, Hc);
        var t = a(n);
         function n(e) {
            var r;
            return u(this, n), (r = t.call(this)).t = "30", r.asn1Array = e, r
        }
        return c(n, [{
            key: "getValue",
            value: function() {
                return this.v = this.asn1Array.map((function(e) {
                    return e.getEncodedHex()
                })).join(""), this.v
            }
        }]), n
    }();
 function Wc(e, t) {
    return +e[t + 2] < 8 ? 1 : 128 & +e.substr(t + 2, 2)
}
 function Zc(e, t) {
    var n = Wc(e, t),
        r = e.substr(t + 2, 2 * n);
    return r ? (+r[0] < 8 ? new $c(r, 16) : new $c(r.substr(2), 16)).intValue() : -1
}
 function Jc(e, t) {
    return t + 2 * (Wc(e, t) + 1)
}
var Qc = function(e, t) {
        var n = new Kc(e),
            r = new Kc(t);
        return new Vc([n, r]).getEncodedHex()
    },
    Yc = function(e) {
        var t = Jc(e, 0),
            n = Jc(e, t),
            r = Zc(e, t),
            i = e.substr(n, 2 * r),
            o = n + i.length,
            a = Jc(e, o),
            s = Zc(e, o),
            u = e.substr(a, 2 * s);
        return {
            r: new $c(i, 16),
            s: new $c(u, 16)
        }
    },
    Gc = zc.BigInteger,
    Xc = new Gc("2"),
    el = new Gc("3"),
    tl = function() {
        function e(t, n) {
            u(this, e), this.x = n, this.q = t
        }
        return c(e, [{
            key: "equals",
            value: function(e) {
                return e === this || this.q.equals(e.q) && this.x.equals(e.x)
            }
        }, {
            key: "toBigInteger",
            value: function() {
                return this.x
            }
        }, {
            key: "negate",
            value: function() {
                return new e(this.q, this.x.negate().mod(this.q))
            }
        }, {
            key: "add",
            value: function(t) {
                return new e(this.q, this.x.add(t.toBigInteger()).mod(this.q))
            }
        }, {
            key: "subtract",
            value: function(t) {
                return new e(this.q, this.x.subtract(t.toBigInteger()).mod(this.q))
            }
        }, {
            key: "multiply",
            value: function(t) {
                return new e(this.q, this.x.multiply(t.toBigInteger()).mod(this.q))
            }
        }, {
            key: "divide",
            value: function(t) {
                return new e(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
            }
        }, {
            key: "square",
            value: function() {
                return new e(this.q, this.x.square().mod(this.q))
            }
        }]), e
    }(),
    nl = function() {
        function e(t, n, r, i) {
            u(this, e), this.curve = t, this.x = n, this.y = r, this.z = null == i ? Gc.ONE : i, this.zinv = null
        }
        return c(e, [{
            key: "getX",
            value: function() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
        }, {
            key: "getY",
            value: function() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
        }, {
            key: "equals",
            value: function(e) {
                return e === this || (this.isInfinity() ? e.isInfinity() : e.isInfinity() ? this.isInfinity() : !!e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(Gc.ZERO) && e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(Gc.ZERO))
            }
        }, {
            key: "isInfinity",
            value: function() {
                return null === this.x && null === this.y || this.z.equals(Gc.ZERO) && !this.y.toBigInteger().equals(Gc.ZERO)
            }
        }, {
            key: "negate",
            value: function() {
                return new e(this.curve, this.x, this.y.negate(), this.z)
            }
        }, {
            key: "add",
            value: function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var n = this.x.toBigInteger(),
                    r = this.y.toBigInteger(),
                    i = this.z,
                    o = t.x.toBigInteger(),
                    a = t.y.toBigInteger(),
                    s = t.z,
                    u = this.curve.q,
                    c = n.multiply(s).mod(u),
                    l = o.multiply(i).mod(u),
                    f = c.subtract(l),
                    h = r.multiply(s).mod(u),
                    p = a.multiply(i).mod(u),
                    d = h.subtract(p);
                if (Gc.ZERO.equals(f)) return Gc.ZERO.equals(d) ? this.twice() : this.curve.infinity;
                var g = c.add(l),
                    v = i.multiply(s).mod(u),
                    m = f.square().mod(u),
                    y = f.multiply(m).mod(u),
                    _ = v.multiply(d.square()).subtract(g.multiply(m)).mod(u),
                    b = f.multiply(_).mod(u),
                    w = d.multiply(m.multiply(c).subtract(_)).subtract(h.multiply(y)).mod(u),
                    x = y.multiply(v).mod(u);
                return new e(this.curve, this.curve.fromBigInteger(b), this.curve.fromBigInteger(w), x)
            }
        }, {
            key: "twice",
            value: function() {
                if (this.isInfinity()) return this;
                if (!this.y.toBigInteger().signum()) return this.curve.infinity;
                var t = this.x.toBigInteger(),
                    n = this.y.toBigInteger(),
                    r = this.z,
                    i = this.curve.q,
                    o = this.curve.a.toBigInteger(),
                    a = t.square().multiply(el).add(o.multiply(r.square())).mod(i),
                    s = n.shiftLeft(1).multiply(r).mod(i),
                    u = n.square().mod(i),
                    c = u.multiply(t).multiply(r).mod(i),
                    l = s.square().mod(i),
                    f = a.square().subtract(c.shiftLeft(3)).mod(i),
                    h = s.multiply(f).mod(i),
                    p = a.multiply(c.shiftLeft(2).subtract(f)).subtract(l.shiftLeft(1).multiply(u)).mod(i),
                    d = s.multiply(l).mod(i);
                return new e(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(p), d)
            }
        }, {
            key: "multiply",
            value: function(e) {
                if (this.isInfinity()) return this;
                if (!e.signum()) return this.curve.infinity;
                for (var t = e.multiply(el), n = this.negate(), r = this, i = t.bitLength() - 2; i > 0; i--) {
                    r = r.twice();
                    var o = t.testBit(i);
                    o !== e.testBit(i) && (r = r.add(o ? this : n))
                }
                return r
            }
        }]), e
    }(),
    rl = {
        ECPointFp: nl,
        ECCurveFp: function() {
            function e(t, n, r) {
                u(this, e), this.q = t, this.a = this.fromBigInteger(n), this.b = this.fromBigInteger(r), this.infinity = new nl(this, null, null)
            }
            return c(e, [{
                key: "equals",
                value: function(e) {
                    return e === this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b)
                }
            }, {
                key: "fromBigInteger",
                value: function(e) {
                    return new tl(this.q, e)
                }
            }, {
                key: "decodePointHex",
                value: function(e) {
                    switch (parseInt(e.substr(0, 2), 16)) {
                        case 0:
                            return this.infinity;
                        case 2:
                        case 3:
                            var t = this.fromBigInteger(new Gc(e.substr(2), 16)),
                                n = this.fromBigInteger(t.multiply(t.square()).add(t.multiply(this.a)).add(this.b).toBigInteger().modPow(this.q.divide(new Gc("4")).add(Gc.ONE), this.q));
                            return n.toBigInteger().mod(Xc).equals(new Gc(e.substr(0, 2), 16).subtract(Xc)) || (n = n.negate()), new nl(this, t, n);
                        case 4:
                        case 6:
                        case 7:
                            var r = (e.length - 2) / 2,
                                i = e.substr(2, r),
                                o = e.substr(r + 2, r);
                            return new nl(this, this.fromBigInteger(new Gc(i, 16)), this.fromBigInteger(new Gc(o, 16)));
                        default:
                            return null
                    }
                }
            }]), e
        }()
    },
    il = zc.BigInteger,
    ol = zc.SecureRandom,
    al = rl.ECCurveFp,
    sl = new ol,
    ul = hl(),
    cl = ul.curve,
    ll = ul.G,
    fl = ul.n;
 function hl() {
    var e = new il("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16),
        t = new il("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16),
        n = new il("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16),
        r = new al(e, t, n),
        i = r.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0");
    return {
        curve: r,
        G: i,
        n: new il("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16)
    }
}
 function pl(e, t) {
    return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
}
var dl = {
        getGlobalCurve: function() {
            return cl
        },
        generateEcparam: hl,
        generateKeyPairHex: function(e, t, n) {
            var r = (e ? new il(e, t, n) : new il(fl.bitLength(), sl)).mod(fl.subtract(il.ONE)).add(il.ONE),
                i = pl(r.toString(16), 64),
                o = ll.multiply(r);
            return {
                privateKey: i,
                publicKey: "04" + pl(o.getX().toBigInteger().toString(16), 64) + pl(o.getY().toBigInteger().toString(16), 64)
            }
        },
        compressPublicKeyHex: function(e) {
            if (130 !== e.length) throw new Error("Invalid public key to compress");
            var t = (e.length - 2) / 2,
                n = e.substr(2, t),
                r = "03";
            return new il(e.substr(t + 2, t), 16).mod(new il("2")).equals(il.ZERO) && (r = "02"), r + n
        },
        utf8ToHex: function(e) {
            for (var t = (e = unescape(encodeURIComponent(e))).length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
            for (var i = [], o = 0; o < t; o++) {
                var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
            }
            return i.join("")
        },
        leftPad: pl,
        arrayToHex: function(e) {
            return e.map((function(e) {
                return 1 === (e = e.toString(16)).length ? "0" + e : e
            })).join("")
        },
        arrayToUtf8: function(e) {
            for (var t = [], n = 0, r = 0; r < 2 * e.length; r += 2) t[r >>> 3] |= parseInt(e[n], 10) << 24 - r % 8 * 4, n++;
            try {
                for (var i = [], o = 0; o < e.length; o++) {
                    var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    i.push(String.fromCharCode(a))
                }
                return decodeURIComponent(escape(i.join("")))
            } catch (e) {
                throw new Error("Malformed UTF-8 data")
            }
        },
        hexToArray: function(e) {
            var t = [],
                n = e.length;
            n % 2 != 0 && (e = pl(e, n + 1)), n = e.length;
            for (var r = 0; r < n; r += 2) t.push(parseInt(e.substr(r, 2), 16));
            return t
        },
        verifyPublicKey: function(e) {
            var t = cl.decodePointHex(e);
            if (!t) return !1;
            var n = t.getX();
            return t.getY().square().equals(n.multiply(n.square()).add(n.multiply(cl.a)).add(cl.b))
        },
        comparePublicKeyHex: function(e, t) {
            var n = cl.decodePointHex(e);
            if (!n) return !1;
            var r = cl.decodePointHex(t);
            return !!r && n.equals(r)
        }
    },
    gl = new Uint32Array(68),
    vl = new Uint32Array(64);
 function ml(e, t) {
    var n = 31 & t;
    return e << n | e >>> 32 - n
}
 function yl(e, t) {
    for (var n = [], r = e.length - 1; r >= 0; r--) n[r] = 255 & (e[r] ^ t[r]);
    return n
}
 function _l(e) {
    return e ^ ml(e, 9) ^ ml(e, 17)
}
 function bl(e) {
    var t = 8 * e.length,
        n = t % 512;
    n = n >= 448 ? 512 - n % 448 - 1 : 448 - n - 1;
    for (var r = new Array((n - 7) / 8), i = new Array(8), o = 0, a = r.length; o < a; o++) r[o] = 0;
    for (var s = 0, u = i.length; s < u; s++) i[s] = 0;
    t = t.toString(2);
    for (var c = 7; c >= 0; c--)
        if (t.length > 8) {
            var l = t.length - 8;
            i[c] = parseInt(t.substr(l), 2), t = t.substr(0, l)
        } else t.length > 0 && (i[c] = parseInt(t, 2), t = "");
    for (var f, p = new Uint8Array([].concat(h(e), [128], r, i)), d = new DataView(p.buffer, 0), g = p.length / 64, v = new Uint32Array([1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214]), m = 0; m < g; m++) {
        gl.fill(0), vl.fill(0);
        for (var y = 16 * m, _ = 0; _ < 16; _++) gl[_] = d.getUint32(4 * (y + _), !1);
        for (var b = 16; b < 68; b++) gl[b] = (f = gl[b - 16] ^ gl[b - 9] ^ ml(gl[b - 3], 15)) ^ ml(f, 15) ^ ml(f, 23) ^ ml(gl[b - 13], 7) ^ gl[b - 6];
        for (var w = 0; w < 64; w++) vl[w] = gl[w] ^ gl[w + 4];
        for (var x = void 0, k = void 0, S = void 0, T = void 0, I = v[0], E = v[1], A = v[2], C = v[3], O = v[4], B = v[5], P = v[6], F = v[7], j = 0; j < 64; j++) T = j >= 0 && j <= 15 ? 2043430169 : 2055708042, k = (j >= 0 && j <= 15 ? I ^ E ^ A : I & E | I & A | E & A) + C + ((x = ml(ml(I, 12) + O + ml(T, j), 7)) ^ ml(I, 12)) + vl[j], S = (j >= 0 && j <= 15 ? O ^ B ^ P : O & B | ~O & P) + F + x + gl[j], C = A, A = ml(E, 9), E = I, I = k, F = P, P = ml(B, 19), B = O, O = _l(S);
        v[0] ^= I, v[1] ^= E, v[2] ^= A, v[3] ^= C, v[4] ^= O, v[5] ^= B, v[6] ^= P, v[7] ^= F
    }
    for (var R = [], L = 0, M = v.length; L < M; L++) {
        var U = v[L];
        R.push((4278190080 & U) >>> 24, (16711680 & U) >>> 16, (65280 & U) >>> 8, 255 & U)
    }
    return R
}
for (var wl = new Uint8Array(64), xl = new Uint8Array(64), kl = 0; kl < 64; kl++) wl[kl] = 54, xl[kl] = 92;
var Sl = bl,
    Tl = function(e, t) {
        for (t.length > 64 && (t = bl(t)); t.length < 64;) t.push(0);
        var n = yl(t, wl),
            r = yl(t, xl),
            i = bl([].concat(h(n), h(e)));
        return bl([].concat(h(r), h(i)))
    },
    Il = zc.BigInteger,
    El = Qc,
    Al = Yc,
    Cl = dl,
    Ol = Sl,
    Bl = Cl.generateEcparam(),
    Pl = Bl.G,
    Fl = Bl.curve,
    jl = Bl.n;
 function Rl(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1234567812345678";
    n = Cl.utf8ToHex(n);
    var r, i, o = Cl.leftPad(Pl.curve.a.toBigInteger().toRadix(16), 64),
        a = Cl.leftPad(Pl.curve.b.toBigInteger().toRadix(16), 64),
        s = Cl.leftPad(Pl.getX().toBigInteger().toRadix(16), 64),
        u = Cl.leftPad(Pl.getY().toBigInteger().toRadix(16), 64);
    if (128 === t.length) r = t.substr(0, 64), i = t.substr(64, 64);
    else {
        var c = Pl.curve.decodePointHex(t);
        r = Cl.leftPad(c.getX().toBigInteger().toRadix(16), 64), i = Cl.leftPad(c.getY().toBigInteger().toRadix(16), 64)
    }
    var l = Cl.hexToArray(n + o + a + s + u + r + i),
        f = 4 * n.length;
    l.unshift(255 & f), l.unshift(f >> 8 & 255);
    var h = Ol(l);
    return Cl.arrayToHex(Ol(h.concat(Cl.hexToArray(e))))
}
 function Ll(e) {
    var t = Pl.multiply(new Il(e, 16));
    return "04" + Cl.leftPad(t.getX().toBigInteger().toString(16), 64) + Cl.leftPad(t.getY().toBigInteger().toString(16), 64)
}
 function Ml() {
    var e = Cl.generateKeyPairHex(),
        t = Fl.decodePointHex(e.publicKey);
    return e.k = new Il(e.privateKey, 16), e.x1 = t.getX().toBigInteger(), e
}
var Ul = {
        generateKeyPairHex: Cl.generateKeyPairHex,
        compressPublicKeyHex: Cl.compressPublicKeyHex,
        comparePublicKeyHex: Cl.comparePublicKeyHex,
        doEncrypt: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            e = "string" == typeof e ? Cl.hexToArray(Cl.utf8ToHex(e)) : Array.prototype.slice.call(e), t = Cl.getGlobalCurve().decodePointHex(t);
            var r = Cl.generateKeyPairHex(),
                i = new Il(r.privateKey, 16),
                o = r.publicKey;
            o.length > 128 && (o = o.substr(o.length - 128));
            var a = t.multiply(i),
                s = Cl.hexToArray(Cl.leftPad(a.getX().toBigInteger().toRadix(16), 64)),
                u = Cl.hexToArray(Cl.leftPad(a.getY().toBigInteger().toRadix(16), 64)),
                c = Cl.arrayToHex(Ol([].concat(s, e, u))),
                l = 1,
                f = 0,
                p = [],
                d = [].concat(s, u),
                g = function() {
                    p = Ol([].concat(h(d), [l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l])), l++, f = 0
                };
            g();
            for (var v = 0, m = e.length; v < m; v++) f === p.length && g(), e[v] ^= 255 & p[f++];
            var y = Cl.arrayToHex(e);
            return 0 === n ? o + y + c : o + c + y
        },
        doDecrypt: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = r.output,
                o = void 0 === i ? "string" : i;
            t = new Il(t, 16);
            var a = e.substr(128, 64),
                s = e.substr(192);
            0 === n && (a = e.substr(e.length - 64), s = e.substr(128, e.length - 128 - 64));
            var u = Cl.hexToArray(s),
                c = Cl.getGlobalCurve().decodePointHex("04" + e.substr(0, 128)).multiply(t),
                l = Cl.hexToArray(Cl.leftPad(c.getX().toBigInteger().toRadix(16), 64)),
                f = Cl.hexToArray(Cl.leftPad(c.getY().toBigInteger().toRadix(16), 64)),
                p = 1,
                d = 0,
                g = [],
                v = [].concat(l, f),
                m = function() {
                    g = Ol([].concat(h(v), [p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p])), p++, d = 0
                };
            m();
            for (var y = 0, _ = u.length; y < _; y++) d === g.length && m(), u[y] ^= 255 & g[d++];
            return Cl.arrayToHex(Ol([].concat(l, u, f))) === a.toLowerCase() ? "array" === o ? u : Cl.arrayToUtf8(u) : "array" === o ? [] : ""
        },
        doSignature: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.pointPool,
                i = n.der,
                o = n.hash,
                a = n.publicKey,
                s = n.userId,
                u = "string" == typeof e ? Cl.utf8ToHex(e) : Cl.arrayToHex(e);
            o && (u = Rl(u, a = a || Ll(t), s));
            var c = new Il(t, 16),
                l = new Il(u, 16),
                f = null,
                h = null,
                p = null;
            do {
                do {
                    var d = void 0;
                    f = (d = r && r.length ? r.pop() : Ml()).k, h = l.add(d.x1).mod(jl)
                } while (h.equals(Il.ZERO) || h.add(f).equals(jl));
                p = c.add(Il.ONE).modInverse(jl).multiply(f.subtract(h.multiply(c))).mod(jl)
            } while (p.equals(Il.ZERO));
            return i ? El(h, p) : Cl.leftPad(h.toString(16), 64) + Cl.leftPad(p.toString(16), 64)
        },
        doVerifySignature: function(e, t, n) {
            var r, i, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = o.der,
                s = o.hash,
                u = o.userId,
                c = "string" == typeof e ? Cl.utf8ToHex(e) : Cl.arrayToHex(e);
            if (s && (c = Rl(c, n, u)), a) {
                var l = Al(t);
                r = l.r, i = l.s
            } else r = new Il(t.substring(0, 64), 16), i = new Il(t.substring(64), 16);
            var f = Fl.decodePointHex(n),
                h = new Il(c, 16),
                p = r.add(i).mod(jl);
            if (p.equals(Il.ZERO)) return !1;
            var d = Pl.multiply(i).add(f.multiply(p)),
                g = h.add(d.getX().toBigInteger()).mod(jl);
            return r.equals(g)
        },
        getPublicKeyFromPrivateKey: Ll,
        getPoint: Ml,
        verifyPublicKey: Cl.verifyPublicKey
    },
    Dl = Sl,
    Nl = Tl;
 function ql(e) {
    return e.map((function(e) {
        return 1 === (e = e.toString(16)).length ? "0" + e : e
    })).join("")
}
var zl = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
    $l = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];
 function Hl(e) {
    for (var t = [], n = 0, r = e.length; n < r; n += 2) t.push(parseInt(e.substr(n, 2), 16));
    return t
}
 function Kl(e, t) {
    var n = 31 & t;
    return e << n | e >>> 32 - n
}
 function Vl(e) {
    return (255 & zl[e >>> 24 & 255]) << 24 | (255 & zl[e >>> 16 & 255]) << 16 | (255 & zl[e >>> 8 & 255]) << 8 | 255 & zl[255 & e]
}
 function Wl(e) {
    return e ^ Kl(e, 2) ^ Kl(e, 10) ^ Kl(e, 18) ^ Kl(e, 24)
}
 function Zl(e) {
    return e ^ Kl(e, 13) ^ Kl(e, 23)
}
 function Jl(e, t, n) {
    for (var r = new Array(4), i = new Array(4), o = 0; o < 4; o++) i[0] = 255 & e[4 * o], i[1] = 255 & e[4 * o + 1], i[2] = 255 & e[4 * o + 2], i[3] = 255 & e[4 * o + 3], r[o] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
    for (var a, s = 0; s < 32; s += 4) a = r[1] ^ r[2] ^ r[3] ^ n[s + 0], r[0] ^= Wl(Vl(a)), a = r[2] ^ r[3] ^ r[0] ^ n[s + 1], r[1] ^= Wl(Vl(a)), a = r[3] ^ r[0] ^ r[1] ^ n[s + 2], r[2] ^= Wl(Vl(a)), a = r[0] ^ r[1] ^ r[2] ^ n[s + 3], r[3] ^= Wl(Vl(a));
    for (var u = 0; u < 16; u += 4) t[u] = r[3 - u / 4] >>> 24 & 255, t[u + 1] = r[3 - u / 4] >>> 16 & 255, t[u + 2] = r[3 - u / 4] >>> 8 & 255, t[u + 3] = 255 & r[3 - u / 4]
}
 function Ql(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = r.padding,
        o = void 0 === i ? "pkcs#7" : i,
        a = r.mode,
        s = r.iv,
        u = void 0 === s ? [] : s,
        c = r.output,
        l = void 0 === c ? "string" : c;
    if ("cbc" === a && ("string" == typeof u && (u = Hl(u)), 16 !== u.length)) throw new Error("iv is invalid");
    if ("string" == typeof t && (t = Hl(t)), 16 !== t.length) throw new Error("key is invalid");
    if (e = "string" == typeof e ? 0 !== n ? function(e) {
            for (var t = [], n = 0, r = e.length; n < r; n++) {
                var i = e.codePointAt(n);
                if (i <= 127) t.push(i);
                else if (i <= 2047) t.push(192 | i >>> 6), t.push(128 | 63 & i);
                else if (i <= 55295 || i >= 57344 && i <= 65535) t.push(224 | i >>> 12), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i);
                else {
                    if (!(i >= 65536 && i <= 1114111)) throw t.push(i), new Error("input is not supported");
                    n++, t.push(240 | i >>> 18 & 28), t.push(128 | i >>> 12 & 63), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i)
                }
            }
            return t
        }(e) : Hl(e) : h(e), ("pkcs#5" === o || "pkcs#7" === o) && 0 !== n)
        for (var f = 16 - e.length % 16, p = 0; p < f; p++) e.push(f);
    var d = new Array(32);
    ! function(e, t, n) {
        for (var r = new Array(4), i = new Array(4), o = 0; o < 4; o++) i[0] = 255 & e[0 + 4 * o], i[1] = 255 & e[1 + 4 * o], i[2] = 255 & e[2 + 4 * o], i[3] = 255 & e[3 + 4 * o], r[o] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
        r[0] ^= 2746333894, r[1] ^= 1453994832, r[2] ^= 1736282519, r[3] ^= 2993693404;
        for (var a, s = 0; s < 32; s += 4) a = r[1] ^ r[2] ^ r[3] ^ $l[s + 0], t[s + 0] = r[0] ^= Zl(Vl(a)), a = r[2] ^ r[3] ^ r[0] ^ $l[s + 1], t[s + 1] = r[1] ^= Zl(Vl(a)), a = r[3] ^ r[0] ^ r[1] ^ $l[s + 2], t[s + 2] = r[2] ^= Zl(Vl(a)), a = r[0] ^ r[1] ^ r[2] ^ $l[s + 3], t[s + 3] = r[3] ^= Zl(Vl(a));
        if (0 === n)
            for (var u, c = 0; c < 16; c++) u = t[c], t[c] = t[31 - c], t[31 - c] = u
    }(t, d, n);
    for (var g = [], v = u, m = e.length, y = 0; m >= 16;) {
        var _ = e.slice(y, y + 16),
            b = new Array(16);
        if ("cbc" === a)
            for (var w = 0; w < 16; w++) 0 !== n && (_[w] ^= v[w]);
        Jl(_, b, d);
        for (var x = 0; x < 16; x++) "cbc" === a && 0 === n && (b[x] ^= v[x]), g[y + x] = b[x];
        "cbc" === a && (v = 0 !== n ? b : _), m -= 16, y += 16
    }
    if (("pkcs#5" === o || "pkcs#7" === o) && 0 === n) {
        for (var k = g.length, S = g[k - 1], T = 1; T <= S; T++)
            if (g[k - T] !== S) throw new Error("padding is invalid");
        g.splice(k - S, S)
    }
    return "array" !== l ? 0 !== n ? g.map((function(e) {
        return 1 === (e = e.toString(16)).length ? "0" + e : e
    })).join("") : function(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) e[n] >= 240 && e[n] <= 247 ? (t.push(String.fromCodePoint(((7 & e[n]) << 18) + ((63 & e[n + 1]) << 12) + ((63 & e[n + 2]) << 6) + (63 & e[n + 3]))), n += 3) : e[n] >= 224 && e[n] <= 239 ? (t.push(String.fromCodePoint(((15 & e[n]) << 12) + ((63 & e[n + 1]) << 6) + (63 & e[n + 2]))), n += 2) : e[n] >= 192 && e[n] <= 223 ? (t.push(String.fromCodePoint(((31 & e[n]) << 6) + (63 & e[n + 1]))), n++) : t.push(String.fromCodePoint(e[n]));
        return t.join("")
    }(g) : g
}
var Yl = Dc({
        sm2: Ul,
        sm3: function(e, t) {
            if (e = "string" == typeof e ? function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                        var i = e.codePointAt(n);
                        if (i <= 127) t.push(i);
                        else if (i <= 2047) t.push(192 | i >>> 6), t.push(128 | 63 & i);
                        else if (i <= 55295 || i >= 57344 && i <= 65535) t.push(224 | i >>> 12), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i);
                        else {
                            if (!(i >= 65536 && i <= 1114111)) throw t.push(i), new Error("input is not supported");
                            n++, t.push(240 | i >>> 18 & 28), t.push(128 | i >>> 12 & 63), t.push(128 | i >>> 6 & 63), t.push(128 | 63 & i)
                        }
                    }
                    return t
                }(e) : Array.prototype.slice.call(e), t) {
                if ("hmac" !== (t.mode || "hmac")) throw new Error("invalid mode");
                var n = t.key;
                if (!n) throw new Error("invalid key");
                return n = "string" == typeof n ? function(e) {
                    var t, n, r = [],
                        i = e.length;
                    i % 2 != 0 && (n = i + 1, e = (t = e).length >= n ? t : new Array(n - t.length + 1).join("0") + t), i = e.length;
                    for (var o = 0; o < i; o += 2) r.push(parseInt(e.substr(o, 2), 16));
                    return r
                }(n) : Array.prototype.slice.call(n), ql(Nl(e, n))
            }
            return ql(Dl(e))
        },
        sm4: {
            encrypt: function(e, t, n) {
                return Ql(e, t, 1, n)
            },
            decrypt: function(e, t, n) {
                return Ql(e, t, 0, n)
            }
        }
    }),
    Gl = function(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uo();
            !ho && _i(e, t, n)
        }
    },
    Xl = Gl("onShow", 3),
    ef = Gl("onHide", 3),
    tf = Gl("onLoad", 2),
    nf = Gl("onReady", 2),
    rf = Gl("onUnload", 2),
    of = Gl("onShareAppMessage", 2);
 function af(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var sf = Dc({
        exports: {}
    }.exports = function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    if (!s && af) return af(a);
                    if (o) return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, (function(e) {
                    return i(t[a][1][e] || e)
                }), c, c.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = af, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function(e, t, n) {
            (function(n, r) {
                var i = e("events").EventEmitter,
                    o = e("./store"),
                    a = e("mqtt-packet"),
                    s = e("readable-stream").Writable,
                    u = e("inherits"),
                    c = e("reinterval"),
                    l = e("./validations"),
                    f = e("xtend"),
                    h = e("debug")("mqttjs:client"),
                    d = r.setImmediate || function(e) {
                        n.nextTick(e)
                    },
                    g = {
                        keepalive: 60,
                        reschedulePings: !0,
                        protocolId: "MQTT",
                        protocolVersion: 4,
                        reconnectPeriod: 1e3,
                        connectTimeout: 3e4,
                        clean: !0,
                        resubscribe: !0
                    },
                    v = ["ECONNREFUSED", "EADDRINUSE", "ECONNRESET", "ENOTFOUND"],
                    m = {
                        0: "",
                        1: "Unacceptable protocol version",
                        2: "Identifier rejected",
                        3: "Server unavailable",
                        4: "Bad username or password",
                        5: "Not authorized",
                        16: "No matching subscribers",
                        17: "No subscription existed",
                        128: "Unspecified error",
                        129: "Malformed Packet",
                        130: "Protocol Error",
                        131: "Implementation specific error",
                        132: "Unsupported Protocol Version",
                        133: "Client Identifier not valid",
                        134: "Bad User Name or Password",
                        135: "Not authorized",
                        136: "Server unavailable",
                        137: "Server busy",
                        138: "Banned",
                        139: "Server shutting down",
                        140: "Bad authentication method",
                        141: "Keep Alive timeout",
                        142: "Session taken over",
                        143: "Topic Filter invalid",
                        144: "Topic Name invalid",
                        145: "Packet identifier in use",
                        146: "Packet Identifier not found",
                        147: "Receive Maximum exceeded",
                        148: "Topic Alias invalid",
                        149: "Packet too large",
                        150: "Message rate too high",
                        151: "Quota exceeded",
                        152: "Administrative action",
                        153: "Payload format invalid",
                        154: "Retain not supported",
                        155: "QoS not supported",
                        156: "Use another server",
                        157: "Server moved",
                        158: "Shared Subscriptions not supported",
                        159: "Connection rate exceeded",
                        160: "Maximum connect time",
                        161: "Subscription Identifiers not supported",
                        162: "Wildcard Subscriptions not supported"
                    };
                 function y(e, t, n) {
                    h("sendPacket :: packet: %O", t), h("sendPacket :: emitting `packetsend`"), e.emit("packetsend", t), h("sendPacket :: writing to stream");
                    var r = a.writeToStream(t, e.stream, e.options);
                    h("sendPacket :: writeToStream result %s", r), !r && n ? (h("sendPacket :: handle events on `drain` once through callback."), e.stream.once("drain", n)) : n && (h("sendPacket :: invoking cb"), n())
                }
                 function _(e) {
                    e && (h("flush: queue exists? %b", !!e), Object.keys(e).forEach((function(t) {
                        "function" == typeof e[t].cb && (e[t].cb(new Error("Connection closed")), delete e[t])
                    })))
                }
                 function b(e, t, n, r) {
                    h("storeAndSend :: store packet with cmd %s to outgoingStore", t.cmd), e.outgoingStore.put(t, (function(i) {
                        if (i) return n && n(i);
                        r(), y(e, t, n)
                    }))
                }
                 function w(e) {
                    h("nop ::", e)
                }
                 function x(e, t) {
                    var n, r = this;
                    if (!(this instanceof x)) return new x(e, t);
                    for (n in this.options = t || {}, g) void 0 === this.options[n] ? this.options[n] = g[n] : this.options[n] = t[n];
                    h("MqttClient :: options.protocol", t.protocol), h("MqttClient :: options.protocolVersion", t.protocolVersion), h("MqttClient :: options.username", t.username), h("MqttClient :: options.keepalive", t.keepalive), h("MqttClient :: options.reconnectPeriod", t.reconnectPeriod), h("MqttClient :: options.rejectUnauthorized", t.rejectUnauthorized), this.options.clientId = "string" == typeof t.clientId ? t.clientId : "mqttjs_" + Math.random().toString(16).substr(2, 8), h("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = 5 === t.protocolVersion && t.customHandleAcks ? t.customHandleAcks : function() {
                        arguments[3](0)
                    }, this.streamBuilder = e, this.outgoingStore = t.outgoingStore || new o, this.incomingStore = t.incomingStore || new o, this.queueQoSZero = void 0 === t.queueQoSZero || t.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this.nextId = Math.max(1, Math.floor(65535 * Math.random())), this.outgoing = {}, this._firstConnection = !0, this.on("connect", (function() {
                        var e = this.queue;
                        h("connect :: sending queued packets"),
                            function t() {
                                var n = e.shift();
                                h("deliver :: entry %o", n);
                                var i = null;
                                n && (i = n.packet, h("deliver :: call _sendPacket for %o", i), r._sendPacket(i, (function(e) {
                                    n.cb && n.cb(e), t()
                                })))
                            }()
                    })), this.on("close", (function() {
                        h("close :: connected set to `false`"), this.connected = !1, h("close :: clearing connackTimer"), clearTimeout(this.connackTimer), h("close :: clearing ping timer"), null !== r.pingTimer && (r.pingTimer.clear(), r.pingTimer = null), h("close :: calling _setupReconnect"), this._setupReconnect()
                    })), i.call(this), h("MqttClient :: setting up stream"), this._setupStream()
                }
                u(x, i), x.prototype._setupStream = function() {
                    var e, t = this,
                        r = this,
                        i = new s,
                        o = a.parser(this.options),
                        u = null,
                        c = [];
                     function l() {
                        if (c.length) n.nextTick(d);
                        else {
                            var e = u;
                            u = null, e()
                        }
                    }
                     function d() {
                        h("work :: getting next packet in queue");
                        var e = c.shift();
                        if (e) h("work :: packet pulled from queue"), r._handlePacket(e, l);
                        else {
                            h("work :: no packets in queue");
                            var t = u;
                            u = null, h("work :: done flag is %s", !!t), t && t()
                        }
                    }
                    if (h("_setupStream :: calling method to clear reconnect"), this._clearReconnect(), h("_setupStream :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), o.on("packet", (function(e) {
                            h("parser :: on packet push to packets array."), c.push(e)
                        })), i._write = function(e, t, n) {
                            u = n, h("writable stream :: parsing buffer"), o.parse(e), d()
                        }, h("_setupStream :: pipe stream to writable stream"), this.stream.pipe(i), this.stream.on("error", (function(e) {
                            h("streamErrorHandler :: error", e.message), v.includes(e.code) ? (h("streamErrorHandler :: emitting error"), r.emit("error", e)) : w(e)
                        })), this.stream.on("close", (function() {
                            h("(%s)stream :: on close", r.options.clientId),
                                function(e) {
                                    e && (h("flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(e).forEach((function(t) {
                                        e[t].volatile && "function" == typeof e[t].cb && (e[t].cb(new Error("Connection closed")), delete e[t])
                                    })))
                                }(r.outgoing), h("stream: emit close to MqttClient"), r.emit("close")
                        })), h("_setupStream: sending packet `connect`"), (e = Object.create(this.options)).cmd = "connect", y(this, e), o.on("error", this.emit.bind(this, "error")), this.options.properties) {
                        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return r.end((function() {
                            return t.emit("error", new Error("Packet has no Authentication Method"))
                        })), this;
                        this.options.properties.authenticationMethod && this.options.authPacket && "object" == p(this.options.authPacket) && y(this, f({
                            cmd: "auth",
                            reasonCode: 0
                        }, this.options.authPacket))
                    }
                    this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout((function() {
                        h("!!connectTimeout hit!! Calling _cleanUp with force `true`"), r._cleanUp(!0)
                    }), this.options.connectTimeout)
                }, x.prototype._handlePacket = function(e, t) {
                    var n = this.options;
                    if (5 === n.protocolVersion && n.properties && n.properties.maximumPacketSize && n.properties.maximumPacketSize < e.length) return this.emit("error", new Error("exceeding packets size " + e.cmd)), this.end({
                        reasonCode: 149,
                        properties: {
                            reasonString: "Maximum packet size was exceeded"
                        }
                    }), this;
                    switch (h("_handlePacket :: emitting packetreceive"), this.emit("packetreceive", e), e.cmd) {
                        case "publish":
                            this._handlePublish(e, t);
                            break;
                        case "puback":
                        case "pubrec":
                        case "pubcomp":
                        case "suback":
                        case "unsuback":
                            this._handleAck(e), t();
                            break;
                        case "pubrel":
                            this._handlePubrel(e, t);
                            break;
                        case "connack":
                            this._handleConnack(e), t();
                            break;
                        case "pingresp":
                            this._handlePingresp(e), t();
                            break;
                        case "disconnect":
                            this._handleDisconnect(e), t()
                    }
                }, x.prototype._checkDisconnecting = function(e) {
                    return this.disconnecting && (e ? e(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting
                }, x.prototype.publish = function(e, t, n, r) {
                    var i;
                    h("publish :: message `%s` to topic `%s`", t, e);
                    var o = this.options;
                    if ("function" == typeof n && (r = n, n = null), n = f({
                            qos: 0,
                            retain: !1,
                            dup: !1
                        }, n), this._checkDisconnecting(r)) return this;
                    switch (i = {
                        cmd: "publish",
                        topic: e,
                        payload: t,
                        qos: n.qos,
                        retain: n.retain,
                        messageId: this._nextId(),
                        dup: n.dup
                    }, 5 === o.protocolVersion && (i.properties = n.properties, (!o.properties && i.properties && i.properties.topicAlias || n.properties && o.properties && (n.properties.topicAlias && o.properties.topicAliasMaximum && n.properties.topicAlias > o.properties.topicAliasMaximum || !o.properties.topicAliasMaximum && n.properties.topicAlias)) && delete i.properties.topicAlias), h("publish :: qos", n.qos), n.qos) {
                        case 1:
                        case 2:
                            this.outgoing[i.messageId] = {
                                volatile: !1,
                                cb: r || w
                            }, this._storeProcessing ? (h("_storeProcessing enabled"), this._packetIdsDuringStoreProcessing[i.messageId] = !1, this._storePacket(i, void 0, n.cbStorePut)) : (h("MqttClient:publish: packet cmd: %s", i.cmd), this._sendPacket(i, void 0, n.cbStorePut));
                            break;
                        default:
                            this._storeProcessing ? (h("_storeProcessing enabled"), this._storePacket(i, r, n.cbStorePut)) : (h("MqttClient:publish: packet cmd: %s", i.cmd), this._sendPacket(i, r, n.cbStorePut))
                    }
                    return this
                }, x.prototype.subscribe = function() {
                    for (var e, t = new Array(arguments.length), n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r, i = [],
                        o = t.shift(),
                        a = o.resubscribe,
                        s = t.pop() || w,
                        u = t.pop(),
                        c = this,
                        p = this.options.protocolVersion;
                    if (delete o.resubscribe, "string" == typeof o && (o = [o]), "function" != typeof s && (u = s, s = w), null !== (r = l.validateTopics(o))) return d(s, new Error("Invalid topic " + r)), this;
                    if (this._checkDisconnecting(s)) return h("subscribe: discconecting true"), this;
                    var g = {
                        qos: 0
                    };
                    if (5 === p && (g.nl = !1, g.rap = !1, g.rh = 0), u = f(g, u), Array.isArray(o) ? o.forEach((function(e) {
                            if (h("subscribe: array topic %s", e), !c._resubscribeTopics.hasOwnProperty(e) || c._resubscribeTopics[e].qos < u.qos || a) {
                                var t = {
                                    topic: e,
                                    qos: u.qos
                                };
                                5 === p && (t.nl = u.nl, t.rap = u.rap, t.rh = u.rh, t.properties = u.properties), h("subscribe: pushing topic `%s` and qos `%s` to subs list", t.topic, t.qos), i.push(t)
                            }
                        })) : Object.keys(o).forEach((function(e) {
                            if (h("subscribe: object topic %s", e), !c._resubscribeTopics.hasOwnProperty(e) || c._resubscribeTopics[e].qos < o[e].qos || a) {
                                var t = {
                                    topic: e,
                                    qos: o[e].qos
                                };
                                5 === p && (t.nl = o[e].nl, t.rap = o[e].rap, t.rh = o[e].rh, t.properties = u.properties), h("subscribe: pushing `%s` to subs list", t), i.push(t)
                            }
                        })), e = {
                            cmd: "subscribe",
                            subscriptions: i,
                            qos: 1,
                            retain: !1,
                            dup: !1,
                            messageId: this._nextId()
                        }, u.properties && (e.properties = u.properties), i.length) {
                        if (this.options.resubscribe) {
                            h("subscribe :: resubscribe true");
                            var v = [];
                            i.forEach((function(e) {
                                if (c.options.reconnectPeriod > 0) {
                                    var t = {
                                        qos: e.qos
                                    };
                                    5 === p && (t.nl = e.nl || !1, t.rap = e.rap || !1, t.rh = e.rh || 0, t.properties = e.properties), c._resubscribeTopics[e.topic] = t, v.push(e.topic)
                                }
                            })), c.messageIdToTopic[e.messageId] = v
                        }
                        return this.outgoing[e.messageId] = {
                            volatile: !0,
                            cb: function(e, t) {
                                if (!e)
                                    for (var n = t.granted, r = 0; r < n.length; r += 1) i[r].qos = n[r];
                                s(e, i)
                            }
                        }, h("subscribe :: call _sendPacket"), this._sendPacket(e), this
                    }
                    s(null, [])
                }, x.prototype.unsubscribe = function() {
                    for (var e = {
                            cmd: "unsubscribe",
                            qos: 1,
                            messageId: this._nextId()
                        }, t = this, n = new Array(arguments.length), r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var i = n.shift(),
                        o = n.pop() || w,
                        a = n.pop();
                    return "string" == typeof i && (i = [i]), "function" != typeof o && (a = o, o = w), this._checkDisconnecting(o) || ("string" == typeof i ? e.unsubscriptions = [i] : Array.isArray(i) && (e.unsubscriptions = i), this.options.resubscribe && e.unsubscriptions.forEach((function(e) {
                        delete t._resubscribeTopics[e]
                    })), "object" == p(a) && a.properties && (e.properties = a.properties), this.outgoing[e.messageId] = {
                        volatile: !0,
                        cb: o
                    }, h("unsubscribe: call _sendPacket"), this._sendPacket(e)), this
                }, x.prototype.end = function(e, t, r) {
                    var i = this;
                     function o() {
                        h("end :: closeStores: closing incoming and outgoing stores"), i.disconnected = !0, i.incomingStore.close((function() {
                            i.outgoingStore.close((function() {
                                h("end :: closeStores: emitting end"), i.emit("end"), r && (h("end :: closeStores: invoking callback with args"), r())
                            }))
                        })), i._deferredReconnect && i._deferredReconnect()
                    }
                     function a() {
                        h("end :: (%s) :: finish :: calling _cleanUp with force %s", i.options.clientId, e), i._cleanUp(e, (function() {
                            h("end :: finish :: calling process.nextTick on closeStores"), n.nextTick(o.bind(i))
                        }), t)
                    }
                    return h("end :: (%s)", this.options.clientId), null != e && "boolean" == typeof e || (r = t || w, t = e, e = !1, "object" != p(t) && (r = t, t = null, "function" != typeof r && (r = w))), "object" != p(t) && (r = t, t = null), h("end :: cb? %s", !!r), r = r || w, this.disconnecting ? (r(), this) : (this._clearReconnect(), this.disconnecting = !0, !e && Object.keys(this.outgoing).length > 0 ? (h("end :: (%s) :: calling finish in 10ms once outgoing is empty", i.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, a, 10))) : (h("end :: (%s) :: immediately calling finish", i.options.clientId), a()), this)
                }, x.prototype.removeOutgoingMessage = function(e) {
                    var t = this.outgoing[e] ? this.outgoing[e].cb : null;
                    return delete this.outgoing[e], this.outgoingStore.del({
                        messageId: e
                    }, (function() {
                        t(new Error("Message removed"))
                    })), this
                }, x.prototype.reconnect = function(e) {
                    h("client reconnect");
                    var t = this,
                        n = function() {
                            e ? (t.options.incomingStore = e.incomingStore, t.options.outgoingStore = e.outgoingStore) : (t.options.incomingStore = null, t.options.outgoingStore = null), t.incomingStore = t.options.incomingStore || new o, t.outgoingStore = t.options.outgoingStore || new o, t.disconnecting = !1, t.disconnected = !1, t._deferredReconnect = null, t._reconnect()
                        };
                    return this.disconnecting && !this.disconnected ? this._deferredReconnect = n : n(), this
                }, x.prototype._reconnect = function() {
                    h("_reconnect: emitting reconnect to client"), this.emit("reconnect"), h("_reconnect: calling _setupStream"), this._setupStream()
                }, x.prototype._setupReconnect = function() {
                    var e = this;
                    !e.disconnecting && !e.reconnectTimer && e.options.reconnectPeriod > 0 ? (this.reconnecting || (h("_setupReconnect :: emit `offline` state"), this.emit("offline"), h("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), h("_setupReconnect :: setting reconnectTimer for %d ms", e.options.reconnectPeriod), e.reconnectTimer = setInterval((function() {
                        h("reconnectTimer :: reconnect triggered!"), e._reconnect()
                    }), e.options.reconnectPeriod)) : h("_setupReconnect :: doing nothing...")
                }, x.prototype._clearReconnect = function() {
                    h("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null)
                }, x.prototype._cleanUp = function(e, t) {
                    var n = arguments[2];
                    if (t && (h("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", t)), h("_cleanUp :: forced? %s", e), e) 0 === this.options.reconnectPeriod && this.options.clean && _(this.outgoing), h("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
                    else {
                        var r = f({
                            cmd: "disconnect"
                        }, n);
                        h("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(r, d.bind(null, this.stream.end.bind(this.stream)))
                    }
                    this.disconnecting || (h("_cleanUp :: client not disconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), null !== this.pingTimer && (h("_cleanUp :: clearing pingTimer"), this.pingTimer.clear(), this.pingTimer = null), t && !this.connected && (h("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", t), t())
                }, x.prototype._sendPacket = function(e, t, n) {
                    if (h("_sendPacket :: (%s) ::  start", this.options.clientId), n = n || w, !this.connected) return h("_sendPacket :: client not connected. Storing packet offline."), void this._storePacket(e, t, n);
                    switch (this._shiftPingInterval(), e.cmd) {
                        case "publish":
                            break;
                        case "pubrel":
                            return void b(this, e, t, n);
                        default:
                            return void y(this, e, t)
                    }
                    switch (e.qos) {
                        case 2:
                        case 1:
                            b(this, e, t, n);
                            break;
                        default:
                            y(this, e, t)
                    }
                    h("_sendPacket :: (%s) ::  end", this.options.clientId)
                }, x.prototype._storePacket = function(e, t, n) {
                    h("_storePacket :: packet: %o", e), h("_storePacket :: cb? %s", !!t), n = n || w, 0 === (e.qos || 0) && this.queueQoSZero || "publish" !== e.cmd ? this.queue.push({
                        packet: e,
                        cb: t
                    }) : e.qos > 0 ? (t = this.outgoing[e.messageId] ? this.outgoing[e.messageId].cb : null, this.outgoingStore.put(e, (function(e) {
                        if (e) return t && t(e);
                        n()
                    }))) : t && t(new Error("No connection to broker"))
                }, x.prototype._setupPingTimer = function() {
                    h("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive);
                    var e = this;
                    !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = c((function() {
                        e._checkPing()
                    }), 1e3 * this.options.keepalive))
                }, x.prototype._shiftPingInterval = function() {
                    this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule(1e3 * this.options.keepalive)
                }, x.prototype._checkPing = function() {
                    h("_checkPing :: checking ping..."), this.pingResp ? (h("_checkPing :: ping response received. Clearing flag and sending `pingreq`"), this.pingResp = !1, this._sendPacket({
                        cmd: "pingreq"
                    })) : (h("_checkPing :: calling _cleanUp with force true"), this._cleanUp(!0))
                }, x.prototype._handlePingresp = function() {
                    this.pingResp = !0
                }, x.prototype._handleConnack = function(e) {
                    h("_handleConnack");
                    var t = this.options,
                        n = 5 === t.protocolVersion ? e.reasonCode : e.returnCode;
                    if (clearTimeout(this.connackTimer), e.properties && (e.properties.topicAliasMaximum && (t.properties || (t.properties = {}), t.properties.topicAliasMaximum = e.properties.topicAliasMaximum), e.properties.serverKeepAlive && t.keepalive && (t.keepalive = e.properties.serverKeepAlive, this._shiftPingInterval()), e.properties.maximumPacketSize && (t.properties || (t.properties = {}), t.properties.maximumPacketSize = e.properties.maximumPacketSize)), 0 === n) this.reconnecting = !1, this._onConnect(e);
                    else if (n > 0) {
                        var r = new Error("Connection refused: " + m[n]);
                        r.code = n, this.emit("error", r)
                    }
                }, x.prototype._handlePublish = function(e, t) {
                    h("_handlePublish: packet %o", e), t = void 0 !== t ? t : w;
                    var n = e.topic.toString(),
                        r = e.payload,
                        i = e.qos,
                        o = e.messageId,
                        a = this,
                        s = this.options,
                        u = [0, 16, 128, 131, 135, 144, 145, 151, 153];
                    switch (h("_handlePublish: qos %d", i), i) {
                        case 2:
                            s.customHandleAcks(n, r, e, (function(n, r) {
                                return n instanceof Error || (r = n, n = null), n ? a.emit("error", n) : -1 === u.indexOf(r) ? a.emit("error", new Error("Wrong reason code for pubrec")) : void(r ? a._sendPacket({
                                    cmd: "pubrec",
                                    messageId: o,
                                    reasonCode: r
                                }, t) : a.incomingStore.put(e, (function() {
                                    a._sendPacket({
                                        cmd: "pubrec",
                                        messageId: o
                                    }, t)
                                })))
                            }));
                            break;
                        case 1:
                            s.customHandleAcks(n, r, e, (function(i, s) {
                                return i instanceof Error || (s = i, i = null), i ? a.emit("error", i) : -1 === u.indexOf(s) ? a.emit("error", new Error("Wrong reason code for puback")) : (s || a.emit("message", n, r, e), void a.handleMessage(e, (function(e) {
                                    if (e) return t && t(e);
                                    a._sendPacket({
                                        cmd: "puback",
                                        messageId: o,
                                        reasonCode: s
                                    }, t)
                                })))
                            }));
                            break;
                        case 0:
                            this.emit("message", n, r, e), this.handleMessage(e, t);
                            break;
                        default:
                            h("_handlePublish: unknown QoS. Doing nothing.")
                    }
                }, x.prototype.handleMessage = function(e, t) {
                    t()
                }, x.prototype._handleAck = function(e) {
                    var t, n = e.messageId,
                        r = e.cmd,
                        i = null,
                        o = this.outgoing[n] ? this.outgoing[n].cb : null,
                        a = this;
                    if (o) {
                        switch (h("_handleAck :: packet type", r), r) {
                            case "pubcomp":
                            case "puback":
                                var s = e.reasonCode;
                                s && s > 0 && 16 !== s && ((t = new Error("Publish error: " + m[s])).code = s, o(t, e)), delete this.outgoing[n], this.outgoingStore.del(e, o);
                                break;
                            case "pubrec":
                                i = {
                                    cmd: "pubrel",
                                    qos: 2,
                                    messageId: n
                                };
                                var u = e.reasonCode;
                                u && u > 0 && 16 !== u ? ((t = new Error("Publish error: " + m[u])).code = u, o(t, e)) : this._sendPacket(i);
                                break;
                            case "suback":
                                delete this.outgoing[n];
                                for (var c = 0; c < e.granted.length; c++)
                                    if (0 != (128 & e.granted[c])) {
                                        var l = this.messageIdToTopic[n];
                                        l && l.forEach((function(e) {
                                            delete a._resubscribeTopics[e]
                                        }))
                                    }
                                o(null, e);
                                break;
                            case "unsuback":
                                delete this.outgoing[n], o(null);
                                break;
                            default:
                                a.emit("error", new Error("unrecognized packet type"))
                        }
                        this.disconnecting && 0 === Object.keys(this.outgoing).length && this.emit("outgoingEmpty")
                    } else h("_handleAck :: Server sent an ack in error. Ignoring.")
                }, x.prototype._handlePubrel = function(e, t) {
                    h("handling pubrel packet"), t = void 0 !== t ? t : w;
                    var n = e.messageId,
                        r = this,
                        i = {
                            cmd: "pubcomp",
                            messageId: n
                        };
                    r.incomingStore.get(e, (function(e, n) {
                        e ? r._sendPacket(i, t) : (r.emit("message", n.topic, n.payload, n), r.handleMessage(n, (function(e) {
                            if (e) return t(e);
                            r.incomingStore.del(n, w), r._sendPacket(i, t)
                        })))
                    }))
                }, x.prototype._handleDisconnect = function(e) {
                    this.emit("disconnect", e)
                }, x.prototype._nextId = function() {
                    var e = this.nextId++;
                    return 65536 === this.nextId && (this.nextId = 1), e
                }, x.prototype.getLastMessageId = function() {
                    return 1 === this.nextId ? 65535 : this.nextId - 1
                }, x.prototype._resubscribe = function(e) {
                    h("_resubscribe");
                    var t = Object.keys(this._resubscribeTopics);
                    if (!this._firstConnection && (this.options.clean || 5 === this.options.protocolVersion && !e.sessionPresent) && t.length > 0)
                        if (this.options.resubscribe)
                            if (5 === this.options.protocolVersion) {
                                h("_resubscribe: protocolVersion 5");
                                for (var n = 0; n < t.length; n++) {
                                    var r = {};
                                    r[t[n]] = this._resubscribeTopics[t[n]], r.resubscribe = !0, this.subscribe(r, {
                                        properties: r[t[n]].properties
                                    })
                                }
                            } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
                    else this._resubscribeTopics = {};
                    this._firstConnection = !1
                }, x.prototype._onConnect = function(e) {
                    if (this.disconnected) this.emit("connect", e);
                    else {
                        var t = this;
                        this._setupPingTimer(), this._resubscribe(e), this.connected = !0,
                            function n() {
                                var r = t.outgoingStore.createStream();
                                 function i() {
                                    t._storeProcessing = !1, t._packetIdsDuringStoreProcessing = {}
                                }
                                 function o() {
                                    r.destroy(), r = null, i()
                                }
                                t.once("close", o), r.on("error", (function(e) {
                                        i(), t.removeListener("close", o), t.emit("error", e)
                                    })), r.on("end", (function() {
                                        var r = !0;
                                        for (var a in t._packetIdsDuringStoreProcessing)
                                            if (!t._packetIdsDuringStoreProcessing[a]) {
                                                r = !1;
                                                break
                                            }
                                        r ? (i(), t.removeListener("close", o), t.emit("connect", e)) : n()
                                    })),
                                    function e() {
                                        if (r) {
                                            t._storeProcessing = !0;
                                            var n, i = r.read(1);
                                            i ? t._packetIdsDuringStoreProcessing[i.messageId] ? e() : t.disconnecting || t.reconnectTimer ? r.destroy && r.destroy() : (n = t.outgoing[i.messageId] ? t.outgoing[i.messageId].cb : null, t.outgoing[i.messageId] = {
                                                volatile: !1,
                                                cb: function(t, r) {
                                                    n && n(t, r), e()
                                                }
                                            }, t._packetIdsDuringStoreProcessing[i.messageId] = !0, t._sendPacket(i)) : r.once("readable", e)
                                        }
                                    }()
                            }()
                    }
                }, t.exports = x
            }).call(this, e("_process"), void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./store": 7,
            "./validations": 8,
            _process: 100,
            debug: 17,
            events: 83,
            inherits: 88,
            "mqtt-packet": 92,
            "readable-stream": 116,
            reinterval: 117,
            xtend: 140
        }],
        2: [function(e, t, n) {
            (function(n) {
                var r, i, o, a = e("readable-stream").Transform,
                    s = e("duplexify"),
                    u = e("base64-js"),
                    c = !1;
                 function l() {
                    var e = new a;
                    return e._write = function(e, t, n) {
                        r.sendSocketMessage({
                            data: e.buffer,
                            success: function() {
                                n()
                            },
                            fail: function() {
                                n(new Error)
                            }
                        })
                    }, e._flush = function(e) {
                        r.closeSocket({
                            success: function() {
                                e()
                            }
                        })
                    }, e
                }
                 function f() {
                    c || (c = !0, r.onSocketOpen((function() {
                        o.setReadable(i), o.setWritable(i), o.emit("connect")
                    })), r.onSocketMessage((function(e) {
                        if ("string" == typeof e.data) {
                            var t = u.toByteArray(e.data),
                                r = n.from(t);
                            i.push(r)
                        } else {
                            var o = new FileReader;
                            o.addEventListener("load", (function() {
                                var e = o.result;
                                e = e instanceof ArrayBuffer ? n.from(e) : n.from(e, "utf8"), i.push(e)
                            })), o.readAsArrayBuffer(e.data)
                        }
                    })), r.onSocketClose((function() {
                        o.end(), o.destroy()
                    })), r.onSocketError((function(e) {
                        o.destroy(e)
                    })))
                }
                t.exports = function(e, t) {
                    if (t.hostname = t.hostname || t.host, !t.hostname) throw new Error("Could not determine host. Specify host manually.");
                    var n = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt";
                    ! function(e) {
                        e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
                    }(t);
                    var a = function(e, t) {
                        var n = "alis" === e.protocol ? "wss" : "ws",
                            r = n + "://" + e.hostname + e.path;
                        return e.port && 80 !== e.port && 443 !== e.port && (r = n + "://" + e.hostname + ":" + e.port + e.path), "function" == typeof e.transformWsUrl && (r = e.transformWsUrl(r, e, t)), r
                    }(t, e);
                    return (r = t.my).connectSocket({
                        url: a,
                        protocols: n
                    }), i = l(), o = s.obj(), f(), o
                }
            }).call(this, e("buffer").Buffer)
        }, {
            "base64-js": 10,
            buffer: 12,
            duplexify: 19,
            "readable-stream": 116
        }],
        3: [function(e, t, n) {
            var r = e("net"),
                i = e("debug")("mqttjs:tcp");
            t.exports = function(e, t) {
                var n, o;
                return t.port = t.port || 1883, t.hostname = t.hostname || t.host || "localhost", n = t.port, o = t.hostname, i("port %d and host %s", n, o), r.createConnection(n, o)
            }
        }, {
            debug: 17,
            net: 11
        }],
        4: [function(e, t, n) {
            var r = e("tls"),
                i = e("debug")("mqttjs:tls");
            t.exports = function(e, t) {
                var n;
                 function o(r) {
                    t.rejectUnauthorized && e.emit("error", r), n.end()
                }
                return t.port = t.port || 8883, t.host = t.hostname || t.host || "localhost", t.servername = t.host, t.rejectUnauthorized = !1 !== t.rejectUnauthorized, delete t.path, i("port %d host %s rejectUnauthorized %b", t.port, t.host, t.rejectUnauthorized), (n = r.connect(t)).on("secureConnect", (function() {
                    t.rejectUnauthorized && !n.authorized ? n.emit("error", new Error("TLS not authorized")) : n.removeListener("error", o)
                })), n.on("error", o), n
            }
        }, {
            debug: 17,
            tls: 11
        }],
        5: [function(e, t, n) {
            (function(n) {
                var r = e("debug")("mqttjs:ws"),
                    i = e("websocket-stream"),
                    o = e("url"),
                    a = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"],
                    s = "browser" === n.title;
                 function u(e, t) {
                    r("createWebSocket");
                    var n = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt";
                    ! function(e) {
                        e.hostname || (e.hostname = "localhost"), e.port || ("wss" === e.protocol ? e.port = 443 : e.port = 80), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {}), s || "wss" !== e.protocol || a.forEach((function(t) {
                            e.hasOwnProperty(t) && !e.wsOptions.hasOwnProperty(t) && (e.wsOptions[t] = e[t])
                        }))
                    }(t);
                    var o = function(e, t) {
                        var n = e.protocol + "://" + e.hostname + ":" + e.port + e.path;
                        return "function" == typeof e.transformWsUrl && (n = e.transformWsUrl(n, e, t)), n
                    }(t, e);
                    return r("url %s protocol %s", o, n), i(o, [n], t.wsOptions)
                }
                t.exports = s ? function(e, t) {
                    if (r("browserStreamBuilder"), t.hostname || (t.hostname = t.host), !t.hostname) {
                        if ("undefined" == typeof document) throw new Error("Could not determine host. Specify host manually.");
                        var n = o.parse(document.URL);
                        t.hostname = n.hostname, t.port || (t.port = n.port)
                    }
                    return u(e, t)
                } : function(e, t) {
                    return u(e, t)
                }
            }).call(this, e("_process"))
        }, {
            _process: 100,
            debug: 17,
            url: 132,
            "websocket-stream": 137
        }],
        6: [function(e, t, n) {
            (function(n, r) {
                var i, o, a, s = e("readable-stream").Transform,
                    u = e("duplexify");
                 function c() {
                    var e = new s;
                    return e._write = function(e, t, n) {
                        i.send({
                            data: e.buffer,
                            success: function() {
                                n()
                            },
                            fail: function(e) {
                                n(new Error(e))
                            }
                        })
                    }, e._flush = function(e) {
                        i.close({
                            success: function() {
                                e()
                            }
                        })
                    }, e
                }
                 function l() {
                    i.onOpen((function() {
                        a.setReadable(o), a.setWritable(o), a.emit("connect")
                    })), i.onMessage((function(e) {
                        var t = e.data;
                        t = t instanceof ArrayBuffer ? r.from(t) : r.from(t, "utf8"), o.push(t)
                    })), i.onClose((function() {
                        a.end(), a.destroy()
                    })), i.onError((function(e) {
                        a.destroy(new Error(e.errMsg))
                    }))
                }
                t.exports = function(e, t) {
                    if (t.hostname = t.hostname || t.host, !t.hostname) throw new Error("Could not determine host. Specify host manually.");
                    var r = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt";
                    ! function(e) {
                        e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
                    }(t);
                    var s = function(e, t) {
                        var n = "wxs" === e.protocol ? "wss" : "ws",
                            r = n + "://" + e.hostname + e.path;
                        return e.port && 80 !== e.port && 443 !== e.port && (r = n + "://" + e.hostname + ":" + e.port + e.path), "function" == typeof e.transformWsUrl && (r = e.transformWsUrl(r, e, t)), r
                    }(t, e);
                    i = an.connectSocket({
                        url: s,
                        protocols: [r]
                    }), o = c(), (a = u.obj())._destroy = function(e, t) {
                        i.close({
                            success: function() {
                                t && t(e)
                            }
                        })
                    };
                    var f = a.destroy;
                    return a.destroy = function() {
                        a.destroy = f;
                        var e = this;
                        n.nextTick((function() {
                            i.close({
                                fail: function() {
                                    e._destroy(new Error)
                                }
                            })
                        }))
                    }.bind(a), l(), a
                }
            }).call(this, e("_process"), e("buffer").Buffer)
        }, {
            _process: 100,
            buffer: 12,
            duplexify: 19,
            "readable-stream": 116
        }],
        7: [function(e, t, n) {
            (function(n) {
                var r = e("xtend"),
                    i = e("readable-stream").Readable,
                    o = {
                        objectMode: !0
                    },
                    a = {
                        clean: !0
                    },
                    s = e("es6-map");
                 function u(e) {
                    if (!(this instanceof u)) return new u(e);
                    this.options = e || {}, this.options = r(a, e), this._inflights = new s
                }
                u.prototype.put = function(e, t) {
                    return this._inflights.set(e.messageId, e), t && t(), this
                }, u.prototype.createStream = function() {
                    var e = new i(o),
                        t = !1,
                        r = [],
                        a = 0;
                    return this._inflights.forEach((function(e, t) {
                        r.push(e)
                    })), e._read = function() {
                        !t && a < r.length ? this.push(r[a++]) : this.push(null)
                    }, e.destroy = function() {
                        if (!t) {
                            var e = this;
                            t = !0, n.nextTick((function() {
                                e.emit("close")
                            }))
                        }
                    }, e
                }, u.prototype.del = function(e, t) {
                    return (e = this._inflights.get(e.messageId)) ? (this._inflights.delete(e.messageId), t(null, e)) : t && t(new Error("missing packet")), this
                }, u.prototype.get = function(e, t) {
                    return (e = this._inflights.get(e.messageId)) ? t(null, e) : t && t(new Error("missing packet")), this
                }, u.prototype.close = function(e) {
                    this.options.clean && (this._inflights = null), e && e()
                }, t.exports = u
            }).call(this, e("_process"))
        }, {
            _process: 100,
            "es6-map": 68,
            "readable-stream": 116,
            xtend: 140
        }],
        8: [function(e, t, n) {
            function r(e) {
                for (var t = e.split("/"), n = 0; n < t.length; n++)
                    if ("+" !== t[n]) {
                        if ("#" === t[n]) return n === t.length - 1;
                        if (-1 !== t[n].indexOf("+") || -1 !== t[n].indexOf("#")) return !1
                    }
                return !0
            }
            t.exports = {
                validateTopics: function(e) {
                    if (0 === e.length) return "empty_topic_list";
                    for (var t = 0; t < e.length; t++)
                        if (!r(e[t])) return e[t];
                    return null
                }
            }
        }, {}],
        9: [function(e, t, n) {
            (function(n) {
                var r = e("../client"),
                    i = e("../store"),
                    o = e("url"),
                    a = e("xtend"),
                    s = e("debug")("mqttjs"),
                    u = {};
                 function c(e, t) {
                    if (s("connecting to an MQTT broker..."), "object" != p(e) || t || (t = e, e = null), t = t || {}, e) {
                        var n = o.parse(e, !0);
                        if (null != n.port && (n.port = Number(n.port)), null === (t = a(n, t)).protocol) throw new Error("Missing protocol");
                        t.protocol = t.protocol.replace(/:$/, "")
                    }
                    if (function(e) {
                            var t;
                            e.auth && ((t = e.auth.match(/^(.+):(.+)$/)) ? (e.username = t[1], e.password = t[2]) : e.username = e.auth)
                        }(t), t.query && "string" == typeof t.query.clientId && (t.clientId = t.query.clientId), t.cert && t.key) {
                        if (!t.protocol) throw new Error("Missing secure protocol key");
                        if (-1 === ["mqtts", "wss", "wxs", "alis"].indexOf(t.protocol)) switch (t.protocol) {
                            case "mqtt":
                                t.protocol = "mqtts";
                                break;
                            case "ws":
                                t.protocol = "wss";
                                break;
                            case "wx":
                                t.protocol = "wxs";
                                break;
                            case "ali":
                                t.protocol = "alis";
                                break;
                            default:
                                throw new Error('Unknown protocol for secure connection: "' + t.protocol + '"!')
                        }
                    }
                    if (!u[t.protocol]) {
                        var i = -1 !== ["mqtts", "wss"].indexOf(t.protocol);
                        t.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((function(e, t) {
                            return (!i || t % 2 != 0) && "function" == typeof u[e]
                        }))[0]
                    }
                    if (!1 === t.clean && !t.clientId) throw new Error("Missing clientId for unclean clients");
                    t.protocol && (t.defaultProtocol = t.protocol);
                    var c = new r((function(e) {
                        return t.servers && (e._reconnectCount && e._reconnectCount !== t.servers.length || (e._reconnectCount = 0), t.host = t.servers[e._reconnectCount].host, t.port = t.servers[e._reconnectCount].port, t.protocol = t.servers[e._reconnectCount].protocol ? t.servers[e._reconnectCount].protocol : t.defaultProtocol, t.hostname = t.host, e._reconnectCount++), s("calling streambuilder for", t.protocol), u[t.protocol](e, t)
                    }), t);
                    return c.on("error", (function() {})), c
                }
                "browser" !== n.title ? (u.mqtt = e("./tcp"), u.tcp = e("./tcp"), u.ssl = e("./tls"), u.tls = e("./tls"), u.mqtts = e("./tls")) : (u.wx = e("./wx"), u.wxs = e("./wx"), u.ali = e("./ali"), u.alis = e("./ali")), u.ws = e("./ws"), u.wss = e("./ws"), t.exports = c, t.exports.connect = c, t.exports.MqttClient = r, t.exports.Store = i
            }).call(this, e("_process"))
        }, {
            "../client": 1,
            "../store": 7,
            "./ali": 2,
            "./tcp": 3,
            "./tls": 4,
            "./ws": 5,
            "./wx": 6,
            _process: 100,
            debug: 17,
            url: 132,
            xtend: 140
        }],
        10: [function(e, t, n) {
            n.byteLength = function(e) {
                var t = c(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, n.toByteArray = function(e) {
                for (var t, n = c(e), r = n[0], a = n[1], s = new o(function(e, t, n) {
                        return 3 * (t + n) / 4 - n
                    }(0, r, a)), u = 0, l = a > 0 ? r - 4 : r, f = 0; f < l; f += 4) t = i[e.charCodeAt(f)] << 18 | i[e.charCodeAt(f + 1)] << 12 | i[e.charCodeAt(f + 2)] << 6 | i[e.charCodeAt(f + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
                return 2 === a && (t = i[e.charCodeAt(f)] << 2 | i[e.charCodeAt(f + 1)] >> 4, s[u++] = 255 & t), 1 === a && (t = i[e.charCodeAt(f)] << 10 | i[e.charCodeAt(f + 1)] << 4 | i[e.charCodeAt(f + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = 255 & t), s
            }, n.fromByteArray = function(e) {
                for (var t, n = e.length, i = n % 3, o = [], a = 16383, s = 0, u = n - i; s < u; s += a) o.push(f(e, s, s + a > u ? u : s + a));
                return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("")
            };
            for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;
             function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }
             function l(e) {
                return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e]
            }
             function f(e, t, n) {
                for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(l(r));
                return i.join("")
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        }, {}],
        11: [function(e, t, n) {}, {}],
        12: [function(e, t, n) {
            (function(t) {
                var r = e("base64-js"),
                    i = e("ieee754");
                n.Buffer = t, n.SlowBuffer = function(e) {
                    return +e != e && (e = 0), t.alloc(+e)
                }, n.INSPECT_MAX_BYTES = 50;
                var o = 2147483647;
                 function a(e) {
                    if (e > o) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    var n = new Uint8Array(e);
                    return n.__proto__ = t.prototype, n
                }
                 function t(e, t, n) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return c(e)
                    }
                    return s(e, t, n)
                }
                 function s(e, n, r) {
                    if ("string" == typeof e) return function(e, n) {
                        if ("string" == typeof n && "" !== n || (n = "utf8"), !t.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        var r = 0 | h(e, n),
                            i = a(r),
                            o = i.write(e, n);
                        return o !== r && (i = i.slice(0, o)), i
                    }(e, n);
                    if (ArrayBuffer.isView(e)) return l(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + p(e));
                    if (N(e, ArrayBuffer) || e && N(e.buffer, ArrayBuffer)) return function(e, n, r) {
                        if (n < 0 || e.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < n + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var i;
                        return (i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r)).__proto__ = t.prototype, i
                    }(e, n, r);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var i = e.valueOf && e.valueOf();
                    if (null != i && i !== e) return t.from(i, n, r);
                    var o = function(e) {
                        if (t.isBuffer(e)) {
                            var n = 0 | f(e.length),
                                r = a(n);
                            return 0 === r.length || e.copy(r, 0, 0, n), r
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || q(e.length) ? a(0) : l(e) : "Buffer" === e.type && Array.isArray(e.data) ? l(e.data) : void 0
                    }(e);
                    if (o) return o;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return t.from(e[Symbol.toPrimitive]("string"), n, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + p(e))
                }
                 function u(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }
                 function c(e) {
                    return u(e), a(e < 0 ? 0 : 0 | f(e))
                }
                 function l(e) {
                    for (var t = e.length < 0 ? 0 : 0 | f(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
                    return n
                }
                 function f(e) {
                    if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                    return 0 | e
                }
                 function h(e, n) {
                    if (t.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || N(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + p(e));
                    var r = e.length,
                        i = arguments.length > 2 && !0 === arguments[2];
                    if (!i && 0 === r) return 0;
                    for (var o = !1;;) switch (n) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return M(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return U(e).length;
                        default:
                            if (o) return i ? -1 : M(e).length;
                            n = ("" + n).toLowerCase(), o = !0
                    }
                }
                 function d(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return A(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return T(this, t, n);
                        case "ascii":
                            return I(this, t, n);
                        case "latin1":
                        case "binary":
                            return E(this, t, n);
                        case "base64":
                            return S(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return C(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }
                 function g(e, t, n) {
                    var r = e[t];
                    e[t] = e[n], e[n] = r
                }
                 function v(e, n, r, i, o) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), q(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                        if (o) return -1;
                        r = e.length - 1
                    } else if (r < 0) {
                        if (!o) return -1;
                        r = 0
                    }
                    if ("string" == typeof n && (n = t.from(n, i)), t.isBuffer(n)) return 0 === n.length ? -1 : m(e, n, r, i, o);
                    if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, n, r) : Uint8Array.prototype.lastIndexOf.call(e, n, r) : m(e, [n], r, i, o);
                    throw new TypeError("val must be string, number or Buffer")
                }
                 function m(e, t, n, r, i) {
                    var o, a = 1,
                        s = e.length,
                        u = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, u /= 2, n /= 2
                    }
                     function c(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (i) {
                        var l = -1;
                        for (o = n; o < s; o++)
                            if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                                if (-1 === l && (l = o), o - l + 1 === u) return l * a
                            } else -1 !== l && (o -= o - l), l = -1
                    } else
                        for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                            for (var f = !0, h = 0; h < u; h++)
                                if (c(e, o + h) !== c(t, h)) {
                                    f = !1;
                                    break
                                }
                            if (f) return o
                        }
                    return -1
                }
                 function y(e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    var o = t.length;
                    r > o / 2 && (r = o / 2);
                    for (var a = 0; a < r; ++a) {
                        var s = parseInt(t.substr(2 * a, 2), 16);
                        if (q(s)) return a;
                        e[n + a] = s
                    }
                    return a
                }
                 function _(e, t, n, r) {
                    return D(M(t, e.length - n), e, n, r)
                }
                 function b(e, t, n, r) {
                    return D(function(e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, r)
                }
                 function w(e, t, n, r) {
                    return b(e, t, n, r)
                }
                 function x(e, t, n, r) {
                    return D(U(t), e, n, r)
                }
                 function k(e, t, n, r) {
                    return D(function(e, t) {
                        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, i = n % 256, o.push(i), o.push(r);
                        return o
                    }(t, e.length - n), e, n, r)
                }
                 function S(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }
                 function T(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], i = t; i < n;) {
                        var o, a, s, u, c = e[i],
                            l = null,
                            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (i + f <= n) switch (f) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                break;
                            case 3:
                                o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                        }
                        null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= 4096) return String.fromCharCode.apply(String, e);
                        for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                        return n
                    }(r)
                }
                n.kMaxLength = o, t.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), t.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(t.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (t.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(t.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (t.isBuffer(this)) return this.byteOffset
                    }
                }), "undefined" != typeof Symbol && null != Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                }), t.poolSize = 8192, t.from = function(e, t, n) {
                    return s(e, t, n)
                }, t.prototype.__proto__ = Uint8Array.prototype, t.__proto__ = Uint8Array, t.alloc = function(e, t, n) {
                    return function(e, t, n) {
                        return u(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
                    }(e, t, n)
                }, t.allocUnsafe = function(e) {
                    return c(e)
                }, t.allocUnsafeSlow = function(e) {
                    return c(e)
                }, t.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== t.prototype
                }, t.compare = function(e, n) {
                    if (N(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), N(n, Uint8Array) && (n = t.from(n, n.offset, n.byteLength)), !t.isBuffer(e) || !t.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === n) return 0;
                    for (var r = e.length, i = n.length, o = 0, a = Math.min(r, i); o < a; ++o)
                        if (e[o] !== n[o]) {
                            r = e[o], i = n[o];
                            break
                        }
                    return r < i ? -1 : i < r ? 1 : 0
                }, t.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, t.concat = function(e, n) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return t.alloc(0);
                    var r;
                    if (void 0 === n)
                        for (n = 0, r = 0; r < e.length; ++r) n += e[r].length;
                    var i = t.allocUnsafe(n),
                        o = 0;
                    for (r = 0; r < e.length; ++r) {
                        var a = e[r];
                        if (N(a, Uint8Array) && (a = t.from(a)), !t.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(i, o), o += a.length
                    }
                    return i
                }, t.byteLength = h, t.prototype._isBuffer = !0, t.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                    return this
                }, t.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                    return this
                }, t.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                    return this
                }, t.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : d.apply(this, arguments)
                }, t.prototype.toLocaleString = t.prototype.toString, t.prototype.equals = function(e) {
                    if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === t.compare(this, e)
                }, t.prototype.inspect = function() {
                    var e = "",
                        t = n.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
                }, t.prototype.compare = function(e, n, r, i, o) {
                    if (N(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), !t.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + p(e));
                    if (void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), n < 0 || r > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
                    if (i >= o && n >= r) return 0;
                    if (i >= o) return -1;
                    if (n >= r) return 1;
                    if (this === e) return 0;
                    for (var a = (o >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (n >>>= 0), u = Math.min(a, s), c = this.slice(i, o), l = e.slice(n, r), f = 0; f < u; ++f)
                        if (c[f] !== l[f]) {
                            a = c[f], s = l[f];
                            break
                        }
                    return a < s ? -1 : s < a ? 1 : 0
                }, t.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, t.prototype.indexOf = function(e, t, n) {
                    return v(this, e, t, n, !0)
                }, t.prototype.lastIndexOf = function(e, t, n) {
                    return v(this, e, t, n, !1)
                }, t.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var i = this.length - t;
                    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var o = !1;;) switch (r) {
                        case "hex":
                            return y(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return _(this, e, t, n);
                        case "ascii":
                            return b(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return w(this, e, t, n);
                        case "base64":
                            return x(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0
                    }
                }, t.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                 function I(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }
                 function E(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }
                 function A(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = "", o = t; o < n; ++o) i += L(e[o]);
                    return i
                }
                 function C(e, t, n) {
                    for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return i
                }
                 function O(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }
                 function B(e, n, r, i, o, a) {
                    if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (n > o || n < a) throw new RangeError('"value" argument is out of bounds');
                    if (r + i > e.length) throw new RangeError("Index out of range")
                }
                 function P(e, t, n, r, i, o) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }
                 function F(e, t, n, r, o) {
                    return t = +t, n >>>= 0, o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
                }
                 function j(e, t, n, r, o) {
                    return t = +t, n >>>= 0, o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
                }
                t.prototype.slice = function(e, n) {
                    var r = this.length;
                    (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e);
                    var i = this.subarray(e, n);
                    return i.__proto__ = t.prototype, i
                }, t.prototype.readUIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r
                }, t.prototype.readUIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r
                }, t.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || O(e, 1, this.length), this[e]
                }, t.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8
                }, t.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, t.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, t.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, t.prototype.readIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
                }, t.prototype.readIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || O(e, t, this.length);
                    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, t.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, t.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || O(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, t.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || O(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, t.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, t.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, t.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), i.read(this, e, !0, 23, 4)
                }, t.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || O(e, 4, this.length), i.read(this, e, !1, 23, 4)
                }, t.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || O(e, 8, this.length), i.read(this, e, !0, 52, 8)
                }, t.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || O(e, 8, this.length), i.read(this, e, !1, 52, 8)
                }, t.prototype.writeUIntLE = function(e, t, n, r) {
                    e = +e, t >>>= 0, n >>>= 0, r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                    return t + n
                }, t.prototype.writeUIntBE = function(e, t, n, r) {
                    e = +e, t >>>= 0, n >>>= 0, r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                    return t + n
                }, t.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, t.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, t.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, t.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, t.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, t.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        B(this, e, t, n, i - 1, -i)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, t.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        B(this, e, t, n, i - 1, -i)
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, t.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, t.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, t.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, t.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, t.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, t.prototype.writeFloatLE = function(e, t, n) {
                    return F(this, e, t, !0, n)
                }, t.prototype.writeFloatBE = function(e, t, n) {
                    return F(this, e, t, !1, n)
                }, t.prototype.writeDoubleLE = function(e, t, n) {
                    return j(this, e, t, !0, n)
                }, t.prototype.writeDoubleBE = function(e, t, n) {
                    return j(this, e, t, !1, n)
                }, t.prototype.copy = function(e, n, r, i) {
                    if (!t.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (r || (r = 0), i || 0 === i || (i = this.length), n >= e.length && (n = e.length), n || (n = 0), i > 0 && i < r && (i = r), i === r) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (n < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - n < i - r && (i = e.length - n + r);
                    var o = i - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, r, i);
                    else if (this === e && r < n && n < i)
                        for (var a = o - 1; a >= 0; --a) e[a + n] = this[a + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, i), n);
                    return o
                }, t.prototype.fill = function(e, n, r, i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                        if (1 === e.length) {
                            var o = e.charCodeAt(0);
                            ("utf8" === i && o < 128 || "latin1" === i) && (e = o)
                        }
                    } else "number" == typeof e && (e &= 255);
                    if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                    if (r <= n) return this;
                    var a;
                    if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (a = n; a < r; ++a) this[a] = e;
                    else {
                        var s = t.isBuffer(e) ? e : t.from(e, i),
                            u = s.length;
                        if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (a = 0; a < r - n; ++a) this[a + n] = s[a % u]
                    }
                    return this
                };
                var R = /[^+/0-9A-Za-z-_]/g;
                 function L(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }
                 function M(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                            if (!i) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === r) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                continue
                            }
                            n = 65536 + (i - 55296 << 10 | n - 56320)
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }
                 function U(e) {
                    return r.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }
                 function D(e, t, n, r) {
                    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }
                 function N(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }
                 function q(e) {
                    return e != e
                }
            }).call(this, e("buffer").Buffer)
        }, {
            "base64-js": 10,
            buffer: 12,
            ieee754: 87
        }],
        13: [function(e, t, n) {
            (function(e) {
                function t(e) {
                    return Object.prototype.toString.call(e)
                }
                n.isArray = function(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
                }, n.isBoolean = function(e) {
                    return "boolean" == typeof e
                }, n.isNull = function(e) {
                    return null === e
                }, n.isNullOrUndefined = function(e) {
                    return null == e
                }, n.isNumber = function(e) {
                    return "number" == typeof e
                }, n.isString = function(e) {
                    return "string" == typeof e
                }, n.isSymbol = function(e) {
                    return "symbol" == p(e)
                }, n.isUndefined = function(e) {
                    return void 0 === e
                }, n.isRegExp = function(e) {
                    return "[object RegExp]" === t(e)
                }, n.isObject = function(e) {
                    return "object" == p(e) && null !== e
                }, n.isDate = function(e) {
                    return "[object Date]" === t(e)
                }, n.isError = function(e) {
                    return "[object Error]" === t(e) || e instanceof Error
                }, n.isFunction = function(e) {
                    return "function" == typeof e
                }, n.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == p(e) || void 0 === e
                }, n.isBuffer = e.isBuffer
            }).call(this, {
                isBuffer: e("../../is-buffer/index.js")
            })
        }, {
            "../../is-buffer/index.js": 89
        }],
        14: [function(e, t, n) {
            var r, i = e("type/value/is"),
                o = e("type/value/ensure"),
                a = e("type/plain-function/ensure"),
                s = e("es5-ext/object/copy"),
                u = e("es5-ext/object/normalize-options"),
                c = e("es5-ext/object/map"),
                l = Function.prototype.bind,
                f = Object.defineProperty,
                h = Object.prototype.hasOwnProperty;
            r = function(e, t, n) {
                var r, i = o(t) && a(t.value);
                return delete(r = s(t)).writable, delete r.value, r.get = function() {
                    return !n.overwriteDefinition && h.call(this, e) ? i : (t.value = l.call(i, n.resolveContext ? n.resolveContext(this) : this), f(this, e, t), this[e])
                }, r
            }, t.exports = function(e) {
                var t = u(arguments[1]);
                return i(t.resolveContext) && a(t.resolveContext), c(e, (function(e, n) {
                    return r(n, e, t)
                }))
            }
        }, {
            "es5-ext/object/copy": 41,
            "es5-ext/object/map": 49,
            "es5-ext/object/normalize-options": 50,
            "type/plain-function/ensure": 126,
            "type/value/ensure": 130,
            "type/value/is": 131
        }],
        15: [function(e, t, n) {
            var r = e("type/value/is"),
                i = e("type/plain-function/is"),
                o = e("es5-ext/object/assign"),
                a = e("es5-ext/object/normalize-options"),
                s = e("es5-ext/string/#/contains");
            (t.exports = function(e, t) {
                var n, i, u, c, l;
                return arguments.length < 2 || "string" != typeof e ? (c = t, t = e, e = null) : c = arguments[2], r(e) ? (n = s.call(e, "c"), i = s.call(e, "e"), u = s.call(e, "w")) : (n = u = !0, i = !1), l = {
                    value: t,
                    configurable: n,
                    enumerable: i,
                    writable: u
                }, c ? o(a(c), l) : l
            }).gs = function(e, t, n) {
                var u, c, l, f;
                return "string" != typeof e ? (l = n, n = t, t = e, e = null) : l = arguments[3], r(t) ? i(t) ? r(n) ? i(n) || (l = n, n = void 0) : n = void 0 : (l = t, t = n = void 0) : t = void 0, r(e) ? (u = s.call(e, "c"), c = s.call(e, "e")) : (u = !0, c = !1), f = {get: t,
                    set: n,
                    configurable: u,
                    enumerable: c
                }, l ? o(a(l), f) : f
            }
        }, {
            "es5-ext/object/assign": 38,
            "es5-ext/object/normalize-options": 50,
            "es5-ext/string/#/contains": 57,
            "type/plain-function/is": 127,
            "type/value/is": 131
        }],
        16: [function(e, t, n) {
            var r = 1e3,
                i = 6e4,
                o = 60 * i,
                a = 24 * o;
             function s(e, t, n, r) {
                var i = t >= 1.5 * n;
                return Math.round(e / n) + " " + r + (i ? "s" : "")
            }
            t.exports = function(e, t) {
                t = t || {};
                var n = p(e);
                if ("string" === n && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var n = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * n;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * n;
                                case "days":
                                case "day":
                                case "d":
                                    return n * a;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return n * o;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return n * i;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return n * r;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return n;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === n && isFinite(e)) return t.long ? function(e) {
                    var t = Math.abs(e);
                    return t >= a ? s(e, t, a, "day") : t >= o ? s(e, t, o, "hour") : t >= i ? s(e, t, i, "minute") : t >= r ? s(e, t, r, "second") : e + " ms"
                }(e) : function(e) {
                    var t = Math.abs(e);
                    return t >= a ? Math.round(e / a) + "d" : t >= o ? Math.round(e / o) + "h" : t >= i ? Math.round(e / i) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, {}],
        17: [function(e, t, n) {
            (function(r) {
                n.log = function() {
                    var e;
                    return "object" == ("undefined" == typeof console ? "undefined" : p(console)) && console.log && (e = console).log.apply(e, arguments)
                }, n.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                        var n = "color: " + this.color;
                        e.splice(1, 0, n, "color: inherit");
                        var r = 0,
                            i = 0;
                        e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                            "%%" !== e && (r++, "%c" === e && (i = r))
                        })), e.splice(i, 0, n)
                    }
                }, n.save = function(e) {
                    try {
                        e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
                    } catch (e) {}
                }, n.load = function() {
                    var e;
                    try {
                        e = n.storage.getItem("debug")
                    } catch (e) {}
                    return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                }, n.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }, n.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = e("./common")(n), t.exports.formatters.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }).call(this, e("_process"))
        }, {
            "./common": 18,
            _process: 100
        }],
        18: [function(e, t, n) {
            t.exports = function(t) {
                function n(e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                    return r.colors[Math.abs(t) % r.colors.length]
                }
                 function r(e) {
                    var t;
                     function a() {
                        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        if (a.enabled) {
                            var o = a,
                                s = Number(new Date),
                                u = s - (t || s);
                            o.diff = u, o.prev = t, o.curr = s, t = s, n[0] = r.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                            var c = 0;
                            n[0] = n[0].replace(/%([a-zA-Z%])/g, (function(e, t) {
                                if ("%%" === e) return e;
                                c++;
                                var i = r.formatters[t];
                                if ("function" == typeof i) {
                                    var a = n[c];
                                    e = i.call(o, a), n.splice(c, 1), c--
                                }
                                return e
                            })), r.formatArgs.call(o, n), (o.log || r.log).apply(o, n)
                        }
                    }
                    return a.namespace = e, a.enabled = r.enabled(e), a.useColors = r.useColors(), a.color = n(e), a.destroy = i, a.extend = o, "function" == typeof r.init && r.init(a), r.instances.push(a), a
                }
                 function i() {
                    var e = r.instances.indexOf(this);
                    return -1 !== e && (r.instances.splice(e, 1), !0)
                }
                 function o(e, t) {
                    var n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                    return n.log = this.log, n
                }
                 function a(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return r.debug = r, r.default = r, r.coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, r.disable = function() {
                    var e = [].concat(h(r.names.map(a)), h(r.skips.map(a).map((function(e) {
                        return "-" + e
                    })))).join(",");
                    return r.enable(""), e
                }, r.enable = function(e) {
                    var t;
                    r.save(e), r.names = [], r.skips = [];
                    var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = n.length;
                    for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                    for (t = 0; t < r.instances.length; t++) {
                        var o = r.instances[t];
                        o.enabled = r.enabled(o.namespace)
                    }
                }, r.enabled = function(e) {
                    if ("*" === e[e.length - 1]) return !0;
                    var t, n;
                    for (t = 0, n = r.skips.length; t < n; t++)
                        if (r.skips[t].test(e)) return !1;
                    for (t = 0, n = r.names.length; t < n; t++)
                        if (r.names[t].test(e)) return !0;
                    return !1
                }, r.humanize = e("ms"), Object.keys(t).forEach((function(e) {
                    r[e] = t[e]
                })), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = n, r.enable(r.load()), r
            }
        }, {
            ms: 16
        }],
        19: [function(e, t, n) {
            (function(n, r) {
                var i = e("readable-stream"),
                    o = e("end-of-stream"),
                    a = e("inherits"),
                    s = e("stream-shift"),
                    u = r.from && r.from !== Uint8Array.from ? r.from([0]) : new r([0]),
                    c = function(e, t) {
                        e._corked ? e.once("uncork", t) : t()
                    },
                    l = function(e, t) {
                        return function(n) {
                            n ? function(e, t) {
                                e._autoDestroy && e.destroy(t)
                            }(e, "premature close" === n.message ? null : n) : t && !e._ended && e.end()
                        }
                    },
                    f = function(e) {
                        return new i.Readable({
                            objectMode: !0,
                            highWaterMark: 16
                        }).wrap(e)
                    },
                    h = function e(t, n, r) {
                        if (!(this instanceof e)) return new e(t, n, r);
                        i.Duplex.call(this, r), this._writable = null, this._readable = null, this._readable2 = null, this._autoDestroy = !r || !1 !== r.autoDestroy, this._forwardDestroy = !r || !1 !== r.destroy, this._forwardEnd = !r || !1 !== r.end, this._corked = 1, this._ondrain = null, this._drained = !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, t && this.setWritable(t), n && this.setReadable(n)
                    };
                a(h, i.Duplex), h.obj = function(e, t, n) {
                    return n || (n = {}), n.objectMode = !0, n.highWaterMark = 16, new h(e, t, n)
                }, h.prototype.cork = function() {
                    1 == ++this._corked && this.emit("cork")
                }, h.prototype.uncork = function() {
                    this._corked && 0 == --this._corked && this.emit("uncork")
                }, h.prototype.setWritable = function(e) {
                    if (this._unwrite && this._unwrite(), this.destroyed) e && e.destroy && e.destroy();
                    else if (null !== e && !1 !== e) {
                        var t = this,
                            r = o(e, {
                                writable: !0,
                                readable: !1
                            }, l(this, this._forwardEnd)),
                            i = function() {
                                var e = t._ondrain;
                                t._ondrain = null, e && e()
                            };
                        this._unwrite && n.nextTick(i), this._writable = e, this._writable.on("drain", i), this._unwrite = function() {
                            t._writable.removeListener("drain", i), r()
                        }, this.uncork()
                    } else this.end()
                }, h.prototype.setReadable = function(e) {
                    if (this._unread && this._unread(), this.destroyed) e && e.destroy && e.destroy();
                    else {
                        if (null === e || !1 === e) return this.push(null), void this.resume();
                        var t = this,
                            n = o(e, {
                                writable: !1,
                                readable: !0
                            }, l(this)),
                            r = function() {
                                t._forward()
                            },
                            i = function() {
                                t.push(null)
                            };
                        this._drained = !0, this._readable = e, this._readable2 = e._readableState ? e : f(e), this._readable2.on("readable", r), this._readable2.on("end", i), this._unread = function() {
                            t._readable2.removeListener("readable", r), t._readable2.removeListener("end", i), n()
                        }, this._forward()
                    }
                }, h.prototype._read = function() {
                    this._drained = !0, this._forward()
                }, h.prototype._forward = function() {
                    if (!this._forwarding && this._readable2 && this._drained) {
                        var e;
                        for (this._forwarding = !0; this._drained && null !== (e = s(this._readable2));) this.destroyed || (this._drained = this.push(e));
                        this._forwarding = !1
                    }
                }, h.prototype.destroy = function(e) {
                    if (!this.destroyed) {
                        this.destroyed = !0;
                        var t = this;
                        n.nextTick((function() {
                            t._destroy(e)
                        }))
                    }
                }, h.prototype._destroy = function(e) {
                    if (e) {
                        var t = this._ondrain;
                        this._ondrain = null, t ? t(e) : this.emit("error", e)
                    }
                    this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy && this._writable.destroy()), this.emit("close")
                }, h.prototype._write = function(e, t, n) {
                    return this.destroyed ? n() : this._corked ? c(this, this._write.bind(this, e, t, n)) : e === u ? this._finish(n) : this._writable ? void(!1 === this._writable.write(e) ? this._ondrain = n : n()) : n()
                }, h.prototype._finish = function(e) {
                    var t = this;
                    this.emit("preend"), c(this, (function() {
                        ! function(e, t) {
                            e ? e._writableState && e._writableState.finished ? t() : e._writableState ? e.end(t) : (e.end(), t()) : t()
                        }(t._forwardEnd && t._writable, (function() {
                            !1 === t._writableState.prefinished && (t._writableState.prefinished = !0), t.emit("prefinish"), c(t, e)
                        }))
                    }))
                }, h.prototype.end = function(e, t, n) {
                    return "function" == typeof e ? this.end(null, null, e) : "function" == typeof t ? this.end(e, null, t) : (this._ended = !0, e && this.write(e), this._writableState.ending || this.write(u), i.Writable.prototype.end.call(this, n))
                }, t.exports = h
            }).call(this, e("_process"), e("buffer").Buffer)
        }, {
            _process: 100,
            buffer: 12,
            "end-of-stream": 20,
            inherits: 88,
            "readable-stream": 116,
            "stream-shift": 119
        }],
        20: [function(e, t, n) {
            var r = e("once"),
                i = function() {};
            t.exports = function e(t, n, o) {
                if ("function" == typeof n) return e(t, null, n);
                n || (n = {}), o = r(o || i);
                var a = t._writableState,
                    s = t._readableState,
                    u = n.readable || !1 !== n.readable && t.readable,
                    c = n.writable || !1 !== n.writable && t.writable,
                    l = function() {
                        t.writable || f()
                    },
                    f = function() {
                        c = !1, u || o.call(t)
                    },
                    h = function() {
                        u = !1, c || o.call(t)
                    },
                    p = function(e) {
                        o.call(t, e ? new Error("exited with error code: " + e) : null)
                    },
                    d = function(e) {
                        o.call(t, e)
                    },
                    g = function() {
                        return (!u || s && s.ended) && (!c || a && a.ended) ? void 0 : o.call(t, new Error("premature close"))
                    },
                    v = function() {
                        t.req.on("finish", f)
                    };
                return function(e) {
                        return e.setHeader && "function" == typeof e.abort
                    }(t) ? (t.on("complete", f), t.on("abort", g), t.req ? v() : t.on("request", v)) : c && !a && (t.on("end", l), t.on("close", l)),
                    function(e) {
                        return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                    }(t) && t.on("exit", p), t.on("end", h), t.on("finish", f), !1 !== n.error && t.on("error", d), t.on("close", g),
                    function() {
                        t.removeListener("complete", f), t.removeListener("abort", g), t.removeListener("request", v), t.req && t.req.removeListener("finish", f), t.removeListener("end", l), t.removeListener("close", l), t.removeListener("finish", f), t.removeListener("exit", p), t.removeListener("end", h), t.removeListener("error", d), t.removeListener("close", g)
                    }
            }
        }, {
            once: 98
        }],
        21: [function(e, t, n) {
            var r = e("../../object/valid-value");
            t.exports = function() {
                return r(this).length = 0, this
            }
        }, {
            "../../object/valid-value": 56
        }],
        22: [function(e, t, n) {
            var r = e("../../number/is-nan"),
                i = e("../../number/to-pos-integer"),
                o = e("../../object/valid-value"),
                a = Array.prototype.indexOf,
                s = Object.prototype.hasOwnProperty,
                u = Math.abs,
                c = Math.floor;
            t.exports = function(e) {
                var t, n, l, f;
                if (!r(e)) return a.apply(this, arguments);
                for (n = i(o(this).length), l = arguments[1], t = l = isNaN(l) ? 0 : l >= 0 ? c(l) : i(this.length) - c(u(l)); t < n; ++t)
                    if (s.call(this, t) && (f = this[t], r(f))) return t;
                return -1
            }
        }, {
            "../../number/is-nan": 32,
            "../../number/to-pos-integer": 36,
            "../../object/valid-value": 56
        }],
        23: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Array.from : e("./shim")
        }, {
            "./is-implemented": 24,
            "./shim": 25
        }],
        24: [function(e, t, n) {
            t.exports = function() {
                var e, t, n = Array.from;
                return "function" == typeof n && (t = n(e = ["raz", "dwa"]), Boolean(t && t !== e && "dwa" === t[1]))
            }
        }, {}],
        25: [function(e, t, n) {
            var r = e("es6-symbol").iterator,
                i = e("../../function/is-arguments"),
                o = e("../../function/is-function"),
                a = e("../../number/to-pos-integer"),
                s = e("../../object/valid-callable"),
                u = e("../../object/valid-value"),
                c = e("../../object/is-value"),
                l = e("../../string/is-string"),
                f = Array.isArray,
                h = Function.prototype.call,
                p = {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: null
                },
                d = Object.defineProperty;
            t.exports = function(e) {
                var t, n, g, v, m, y, _, b, w, x, k = arguments[1],
                    S = arguments[2];
                if (e = Object(u(e)), c(k) && s(k), this && this !== Array && o(this)) t = this;
                else {
                    if (!k) {
                        if (i(e)) return 1 !== (m = e.length) ? Array.apply(null, e) : ((v = new Array(1))[0] = e[0], v);
                        if (f(e)) {
                            for (v = new Array(m = e.length), n = 0; n < m; ++n) v[n] = e[n];
                            return v
                        }
                    }
                    v = []
                }
                if (!f(e))
                    if (void 0 !== (w = e[r])) {
                        for (_ = s(w).call(e), t && (v = new t), b = _.next(), n = 0; !b.done;) x = k ? h.call(k, S, b.value, n) : b.value, t ? (p.value = x, d(v, n, p)) : v[n] = x, b = _.next(), ++n;
                        m = n
                    } else if (l(e)) {
                    for (m = e.length, t && (v = new t), n = 0, g = 0; n < m; ++n) x = e[n], n + 1 < m && (y = x.charCodeAt(0)) >= 55296 && y <= 56319 && (x += e[++n]), x = k ? h.call(k, S, x, g) : x, t ? (p.value = x, d(v, g, p)) : v[g] = x, ++g;
                    m = g
                }
                if (void 0 === m)
                    for (m = a(e.length), t && (v = new t(m)), n = 0; n < m; ++n) x = k ? h.call(k, S, e[n], n) : e[n], t ? (p.value = x, d(v, n, p)) : v[n] = x;
                return t && (p.value = null, v.length = m), v
            }
        }, {
            "../../function/is-arguments": 26,
            "../../function/is-function": 27,
            "../../number/to-pos-integer": 36,
            "../../object/is-value": 45,
            "../../object/valid-callable": 55,
            "../../object/valid-value": 56,
            "../../string/is-string": 60,
            "es6-symbol": 74
        }],
        26: [function(e, t, n) {
            var r = Object.prototype.toString,
                i = r.call(function() {
                    return arguments
                }());
            t.exports = function(e) {
                return r.call(e) === i
            }
        }, {}],
        27: [function(e, t, n) {
            var r = Object.prototype.toString,
                i = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
            t.exports = function(e) {
                return "function" == typeof e && i(r.call(e))
            }
        }, {}],
        28: [function(e, t, n) {
            t.exports = function() {}
        }, {}],
        29: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Math.sign : e("./shim")
        }, {
            "./is-implemented": 30,
            "./shim": 31
        }],
        30: [function(e, t, n) {
            t.exports = function() {
                var e = Math.sign;
                return "function" == typeof e && 1 === e(10) && -1 === e(-20)
            }
        }, {}],
        31: [function(e, t, n) {
            t.exports = function(e) {
                return e = Number(e), isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
            }
        }, {}],
        32: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Number.isNaN : e("./shim")
        }, {
            "./is-implemented": 33,
            "./shim": 34
        }],
        33: [function(e, t, n) {
            t.exports = function() {
                var e = Number.isNaN;
                return "function" == typeof e && !e({}) && e(NaN) && !e(34)
            }
        }, {}],
        34: [function(e, t, n) {
            t.exports = function(e) {
                return e != e
            }
        }, {}],
        35: [function(e, t, n) {
            var r = e("../math/sign"),
                i = Math.abs,
                o = Math.floor;
            t.exports = function(e) {
                return isNaN(e) ? 0 : 0 !== (e = Number(e)) && isFinite(e) ? r(e) * o(i(e)) : e
            }
        }, {
            "../math/sign": 29
        }],
        36: [function(e, t, n) {
            var r = e("./to-integer"),
                i = Math.max;
            t.exports = function(e) {
                return i(0, r(e))
            }
        }, {
            "./to-integer": 35
        }],
        37: [function(e, t, n) {
            var r = e("./valid-callable"),
                i = e("./valid-value"),
                o = Function.prototype.bind,
                a = Function.prototype.call,
                s = Object.keys,
                u = Object.prototype.propertyIsEnumerable;
            t.exports = function(e, t) {
                return function(n, c) {
                    var l, f = arguments[2],
                        h = arguments[3];
                    return n = Object(i(n)), r(c), l = s(n), h && l.sort("function" == typeof h ? o.call(h, n) : void 0), "function" != typeof e && (e = l[e]), a.call(e, l, (function(e, r) {
                        return u.call(n, e) ? a.call(c, f, n[e], e, n, r) : t
                    }))
                }
            }
        }, {
            "./valid-callable": 55,
            "./valid-value": 56
        }],
        38: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Object.assign : e("./shim")
        }, {
            "./is-implemented": 39,
            "./shim": 40
        }],
        39: [function(e, t, n) {
            t.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (t(e = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }), e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        }, {}],
        40: [function(e, t, n) {
            var r = e("../keys"),
                i = e("../valid-value"),
                o = Math.max;
            t.exports = function(e, t) {
                var n, a, s, u = o(arguments.length, 2);
                for (e = Object(i(e)), s = function(r) {
                        try {
                            e[r] = t[r]
                        } catch (e) {
                            n || (n = e)
                        }
                    }, a = 1; a < u; ++a) r(t = arguments[a]).forEach(s);
                if (void 0 !== n) throw n;
                return e
            }
        }, {
            "../keys": 46,
            "../valid-value": 56
        }],
        41: [function(e, t, n) {
            var r = e("../array/from"),
                i = e("./assign"),
                o = e("./valid-value");
            t.exports = function(e) {
                var t = Object(o(e)),
                    n = arguments[1],
                    a = Object(arguments[2]);
                if (t !== e && !n) return t;
                var s = {};
                return n ? r(n, (function(t) {
                    (a.ensure || t in e) && (s[t] = e[t])
                })) : i(s, e), s
            }
        }, {
            "../array/from": 23,
            "./assign": 38,
            "./valid-value": 56
        }],
        42: [function(e, t, n) {
            var r, i, o, a, s = Object.create;
            e("./set-prototype-of/is-implemented")() || (r = e("./set-prototype-of/shim")), t.exports = r ? 1 !== r.level ? s : (i = {}, o = {}, a = {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: void 0
            }, Object.getOwnPropertyNames(Object.prototype).forEach((function(e) {
                o[e] = "__proto__" !== e ? a : {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: void 0
                }
            })), Object.defineProperties(i, o), Object.defineProperty(r, "nullPolyfill", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: i
            }), function(e, t) {
                return s(null === e ? i : e, t)
            }) : s
        }, {
            "./set-prototype-of/is-implemented": 53,
            "./set-prototype-of/shim": 54
        }],
        43: [function(e, t, n) {
            t.exports = e("./_iterate")("forEach")
        }, {
            "./_iterate": 37
        }],
        44: [function(e, t, n) {
            var r = e("./is-value"),
                i = {
                    function: !0,
                    object: !0
                };
            t.exports = function(e) {
                return r(e) && i[p(e)] || !1
            }
        }, {
            "./is-value": 45
        }],
        45: [function(e, t, n) {
            var r = e("../function/noop")();
            t.exports = function(e) {
                return e !== r && null !== e
            }
        }, {
            "../function/noop": 28
        }],
        46: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Object.keys : e("./shim")
        }, {
            "./is-implemented": 47,
            "./shim": 48
        }],
        47: [function(e, t, n) {
            t.exports = function() {
                try {
                    return Object.keys("primitive"), !0
                } catch (e) {
                    return !1
                }
            }
        }, {}],
        48: [function(e, t, n) {
            var r = e("../is-value"),
                i = Object.keys;
            t.exports = function(e) {
                return i(r(e) ? Object(e) : e)
            }
        }, {
            "../is-value": 45
        }],
        49: [function(e, t, n) {
            var r = e("./valid-callable"),
                i = e("./for-each"),
                o = Function.prototype.call;
            t.exports = function(e, t) {
                var n = {},
                    a = arguments[2];
                return r(t), i(e, (function(e, r, i, s) {
                    n[r] = o.call(t, a, e, r, i, s)
                })), n
            }
        }, {
            "./for-each": 43,
            "./valid-callable": 55
        }],
        50: [function(e, t, n) {
            var r = e("./is-value"),
                i = Array.prototype.forEach,
                o = Object.create,
                a = function(e, t) {
                    var n;
                    for (n in e) t[n] = e[n]
                };
            t.exports = function(e) {
                var t = o(null);
                return i.call(arguments, (function(e) {
                    r(e) && a(Object(e), t)
                })), t
            }
        }, {
            "./is-value": 45
        }],
        51: [function(e, t, n) {
            var r = Array.prototype.forEach,
                i = Object.create;
            t.exports = function(e) {
                var t = i(null);
                return r.call(arguments, (function(e) {
                    t[e] = !0
                })), t
            }
        }, {}],
        52: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Object.setPrototypeOf : e("./shim")
        }, {
            "./is-implemented": 53,
            "./shim": 54
        }],
        53: [function(e, t, n) {
            var r = Object.create,
                i = Object.getPrototypeOf,
                o = {};
            t.exports = function() {
                var e = Object.setPrototypeOf;
                return "function" == typeof e && i(e((arguments[0] || r)(null), o)) === o
            }
        }, {}],
        54: [function(e, t, n) {
            var r, i = e("../is-object"),
                o = e("../valid-value"),
                a = Object.prototype.isPrototypeOf,
                s = Object.defineProperty,
                u = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: void 0
                };
            r = function(e, t) {
                if (o(e), null === t || i(t)) return e;
                throw new TypeError("Prototype must be null or an object")
            }, t.exports = function(e) {
                var t, n;
                return e ? (2 === e.level ? e.set ? (n = e.set, t = function(e, t) {
                    return n.call(r(e, t), t), e
                }) : t = function(e, t) {
                    return r(e, t).__proto__ = t, e
                } : t = function e(t, n) {
                    var i;
                    return r(t, n), (i = a.call(e.nullPolyfill, t)) && delete e.nullPolyfill.__proto__, null === n && (n = e.nullPolyfill), t.__proto__ = n, i && s(e.nullPolyfill, "__proto__", u), t
                }, Object.defineProperty(t, "level", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: e.level
                })) : null
            }(function() {
                var e, t = Object.create(null),
                    n = {},
                    r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
                if (r) {
                    try {
                        (e = r.set).call(t, n)
                    } catch (e) {}
                    if (Object.getPrototypeOf(t) === n) return {set: e,
                        level: 2
                    }
                }
                return t.__proto__ = n, Object.getPrototypeOf(t) === n ? {
                    level: 2
                } : ((t = {}).__proto__ = n, Object.getPrototypeOf(t) === n && {
                    level: 1
                })
            }()), e("../create")
        }, {
            "../create": 42,
            "../is-object": 44,
            "../valid-value": 56
        }],
        55: [function(e, t, n) {
            t.exports = function(e) {
                if ("function" != typeof e) throw new TypeError(e + " is not a function");
                return e
            }
        }, {}],
        56: [function(e, t, n) {
            var r = e("./is-value");
            t.exports = function(e) {
                if (!r(e)) throw new TypeError("Cannot use null or undefined");
                return e
            }
        }, {
            "./is-value": 45
        }],
        57: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? String.prototype.contains : e("./shim")
        }, {
            "./is-implemented": 58,
            "./shim": 59
        }],
        58: [function(e, t, n) {
            var r = "razdwatrzy";
            t.exports = function() {
                return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo")
            }
        }, {}],
        59: [function(e, t, n) {
            var r = String.prototype.indexOf;
            t.exports = function(e) {
                return r.call(this, e, arguments[1]) > -1
            }
        }, {}],
        60: [function(e, t, n) {
            var r = Object.prototype.toString,
                i = r.call("");
            t.exports = function(e) {
                return "string" == typeof e || e && "object" == p(e) && (e instanceof String || r.call(e) === i) || !1
            }
        }, {}],
        61: [function(e, t, n) {
            var r, i = e("es5-ext/object/set-prototype-of"),
                o = e("es5-ext/string/#/contains"),
                a = e("d"),
                s = e("es6-symbol"),
                u = e("./"),
                c = Object.defineProperty;
            r = t.exports = function(e, t) {
                if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
                u.call(this, e), t = t ? o.call(t, "key+value") ? "key+value" : o.call(t, "key") ? "key" : "value" : "value", c(this, "__kind__", a("", t))
            }, i && i(r, u), delete r.prototype.constructor, r.prototype = Object.create(u.prototype, {
                _resolve: a((function(e) {
                    return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
                }))
            }), c(r.prototype, s.toStringTag, a("c", "Array Iterator"))
        }, {
            "./": 64,
            d: 15,
            "es5-ext/object/set-prototype-of": 52,
            "es5-ext/string/#/contains": 57,
            "es6-symbol": 74
        }],
        62: [function(e, t, n) {
            var r = e("es5-ext/function/is-arguments"),
                i = e("es5-ext/object/valid-callable"),
                o = e("es5-ext/string/is-string"),
                a = e("./get"),
                s = Array.isArray,
                u = Function.prototype.call,
                c = Array.prototype.some;
            t.exports = function(e, t) {
                var n, l, f, h, p, d, g, v, m = arguments[2];
                if (s(e) || r(e) ? n = "array" : o(e) ? n = "string" : e = a(e), i(t), f = function() {
                        h = !0
                    }, "array" !== n)
                    if ("string" !== n)
                        for (l = e.next(); !l.done;) {
                            if (u.call(t, m, l.value, f), h) return;
                            l = e.next()
                        } else
                            for (d = e.length, p = 0; p < d && (g = e[p], p + 1 < d && (v = g.charCodeAt(0)) >= 55296 && v <= 56319 && (g += e[++p]), u.call(t, m, g, f), !h); ++p);
                    else c.call(e, (function(e) {
                        return u.call(t, m, e, f), h
                    }))
            }
        }, {
            "./get": 63,
            "es5-ext/function/is-arguments": 26,
            "es5-ext/object/valid-callable": 55,
            "es5-ext/string/is-string": 60
        }],
        63: [function(e, t, n) {
            var r = e("es5-ext/function/is-arguments"),
                i = e("es5-ext/string/is-string"),
                o = e("./array"),
                a = e("./string"),
                s = e("./valid-iterable"),
                u = e("es6-symbol").iterator;
            t.exports = function(e) {
                return "function" == typeof s(e)[u] ? e[u]() : r(e) ? new o(e) : i(e) ? new a(e) : new o(e)
            }
        }, {
            "./array": 61,
            "./string": 66,
            "./valid-iterable": 67,
            "es5-ext/function/is-arguments": 26,
            "es5-ext/string/is-string": 60,
            "es6-symbol": 74
        }],
        64: [function(e, t, n) {
            var r, i = e("es5-ext/array/#/clear"),
                o = e("es5-ext/object/assign"),
                a = e("es5-ext/object/valid-callable"),
                s = e("es5-ext/object/valid-value"),
                u = e("d"),
                c = e("d/auto-bind"),
                l = e("es6-symbol"),
                f = Object.defineProperty,
                h = Object.defineProperties;
            t.exports = r = function(e, t) {
                if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
                h(this, {
                    __list__: u("w", s(e)),
                    __context__: u("w", t),
                    __nextIndex__: u("w", 0)
                }), t && (a(t.on), t.on("_add", this._onAdd), t.on("_delete", this._onDelete), t.on("_clear", this._onClear))
            }, delete r.prototype.constructor, h(r.prototype, o({
                _next: u((function() {
                    var e;
                    if (this.__list__) return this.__redo__ && void 0 !== (e = this.__redo__.shift()) ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
                })),
                next: u((function() {
                    return this._createResult(this._next())
                })),
                _createResult: u((function(e) {
                    return void 0 === e ? {
                        done: !0,
                        value: void 0
                    } : {
                        done: !1,
                        value: this._resolve(e)
                    }
                })),
                _resolve: u((function(e) {
                    return this.__list__[e]
                })),
                _unBind: u((function() {
                    this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null)
                })),
                toString: u((function() {
                    return "[object " + (this[l.toStringTag] || "Object") + "]"
                }))
            }, c({
                _onAdd: u((function(e) {
                    e >= this.__nextIndex__ || (++this.__nextIndex__, this.__redo__ ? (this.__redo__.forEach((function(t, n) {
                        t >= e && (this.__redo__[n] = ++t)
                    }), this), this.__redo__.push(e)) : f(this, "__redo__", u("c", [e])))
                })),
                _onDelete: u((function(e) {
                    var t;
                    e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t = this.__redo__.indexOf(e)) && this.__redo__.splice(t, 1), this.__redo__.forEach((function(t, n) {
                        t > e && (this.__redo__[n] = --t)
                    }), this)))
                })),
                _onClear: u((function() {
                    this.__redo__ && i.call(this.__redo__), this.__nextIndex__ = 0
                }))
            }))), f(r.prototype, l.iterator, u((function() {
                return this
            })))
        }, {
            d: 15,
            "d/auto-bind": 14,
            "es5-ext/array/#/clear": 21,
            "es5-ext/object/assign": 38,
            "es5-ext/object/valid-callable": 55,
            "es5-ext/object/valid-value": 56,
            "es6-symbol": 74
        }],
        65: [function(e, t, n) {
            var r = e("es5-ext/function/is-arguments"),
                i = e("es5-ext/object/is-value"),
                o = e("es5-ext/string/is-string"),
                a = e("es6-symbol").iterator,
                s = Array.isArray;
            t.exports = function(e) {
                return !(!i(e) || !s(e) && !o(e) && !r(e) && "function" != typeof e[a])
            }
        }, {
            "es5-ext/function/is-arguments": 26,
            "es5-ext/object/is-value": 45,
            "es5-ext/string/is-string": 60,
            "es6-symbol": 74
        }],
        66: [function(e, t, n) {
            var r, i = e("es5-ext/object/set-prototype-of"),
                o = e("d"),
                a = e("es6-symbol"),
                s = e("./"),
                u = Object.defineProperty;
            r = t.exports = function(e) {
                if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
                e = String(e), s.call(this, e), u(this, "__length__", o("", e.length))
            }, i && i(r, s), delete r.prototype.constructor, r.prototype = Object.create(s.prototype, {
                _next: o((function() {
                    if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
                })),
                _resolve: o((function(e) {
                    var t, n = this.__list__[e];
                    return this.__nextIndex__ === this.__length__ ? n : (t = n.charCodeAt(0)) >= 55296 && t <= 56319 ? n + this.__list__[this.__nextIndex__++] : n
                }))
            }), u(r.prototype, a.toStringTag, o("c", "String Iterator"))
        }, {
            "./": 64,
            d: 15,
            "es5-ext/object/set-prototype-of": 52,
            "es6-symbol": 74
        }],
        67: [function(e, t, n) {
            var r = e("./is-iterable");
            t.exports = function(e) {
                if (!r(e)) throw new TypeError(e + " is not iterable");
                return e
            }
        }, {
            "./is-iterable": 65
        }],
        68: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Map : e("./polyfill")
        }, {
            "./is-implemented": 69,
            "./polyfill": 73
        }],
        69: [function(e, t, n) {
            t.exports = function() {
                var e, t;
                if ("function" != typeof Map) return !1;
                try {
                    e = new Map([
                        ["raz", "one"],
                        ["dwa", "two"],
                        ["trzy", "three"]
                    ])
                } catch (e) {
                    return !1
                }
                return "[object Map]" === String(e) && 3 === e.size && "function" == typeof e.clear && "function" == typeof e.delete && "function" == typeof e.entries && "function" == typeof e.forEach && "function" == typeof e.get && "function" == typeof e.has && "function" == typeof e.keys && "function" == typeof e.set && "function" == typeof e.values && !1 === (t = e.entries().next()).done && !!t.value && "raz" === t.value[0] && "one" === t.value[1]
            }
        }, {}],
        70: [function(e, t, n) {
            t.exports = "undefined" != typeof Map && "[object Map]" === Object.prototype.toString.call(new Map)
        }, {}],
        71: [function(e, t, n) {
            t.exports = e("es5-ext/object/primitive-set")("key", "value", "key+value")
        }, {
            "es5-ext/object/primitive-set": 51
        }],
        72: [function(e, t, n) {
            var r, i = e("es5-ext/object/set-prototype-of"),
                o = e("d"),
                a = e("es6-iterator"),
                s = e("es6-symbol").toStringTag,
                u = e("./iterator-kinds"),
                c = Object.defineProperties,
                l = a.prototype._unBind;
            r = t.exports = function(e, t) {
                if (!(this instanceof r)) return new r(e, t);
                a.call(this, e.__mapKeysData__, e), t && u[t] || (t = "key+value"), c(this, {
                    __kind__: o("", t),
                    __values__: o("w", e.__mapValuesData__)
                })
            }, i && i(r, a), r.prototype = Object.create(a.prototype, {
                constructor: o(r),
                _resolve: o((function(e) {
                    return "value" === this.__kind__ ? this.__values__[e] : "key" === this.__kind__ ? this.__list__[e] : [this.__list__[e], this.__values__[e]]
                })),
                _unBind: o((function() {
                    this.__values__ = null, l.call(this)
                })),
                toString: o((function() {
                    return "[object Map Iterator]"
                }))
            }), Object.defineProperty(r.prototype, s, o("c", "Map Iterator"))
        }, {
            "./iterator-kinds": 71,
            d: 15,
            "es5-ext/object/set-prototype-of": 52,
            "es6-iterator": 64,
            "es6-symbol": 74
        }],
        73: [function(e, t, n) {
            var r, i = e("es5-ext/array/#/clear"),
                o = e("es5-ext/array/#/e-index-of"),
                a = e("es5-ext/object/set-prototype-of"),
                s = e("es5-ext/object/valid-callable"),
                u = e("es5-ext/object/valid-value"),
                c = e("d"),
                l = e("event-emitter"),
                f = e("es6-symbol"),
                h = e("es6-iterator/valid-iterable"),
                p = e("es6-iterator/for-of"),
                d = e("./lib/iterator"),
                g = e("./is-native-implemented"),
                v = Function.prototype.call,
                m = Object.defineProperties,
                y = Object.getPrototypeOf;
            t.exports = r = function() {
                var e, t, n, i = arguments[0];
                if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
                return n = g && a && Map !== r ? a(new Map, y(this)) : this, null != i && h(i), m(n, {
                    __mapKeysData__: c("c", e = []),
                    __mapValuesData__: c("c", t = [])
                }), i ? (p(i, (function(n) {
                    var r = u(n)[0];
                    n = n[1], -1 === o.call(e, r) && (e.push(r), t.push(n))
                }), n), n) : n
            }, g && (a && a(r, Map), r.prototype = Object.create(Map.prototype, {
                constructor: c(r)
            })), l(m(r.prototype, {
                clear: c((function() {
                    this.__mapKeysData__.length && (i.call(this.__mapKeysData__), i.call(this.__mapValuesData__), this.emit("_clear"))
                })),
                delete: c((function(e) {
                    var t = o.call(this.__mapKeysData__, e);
                    return -1 !== t && (this.__mapKeysData__.splice(t, 1), this.__mapValuesData__.splice(t, 1), this.emit("_delete", t, e), !0)
                })),
                entries: c((function() {
                    return new d(this, "key+value")
                })),
                forEach: c((function(e) {
                    var t, n, r = arguments[1];
                    for (s(e), n = (t = this.entries())._next(); void 0 !== n;) v.call(e, r, this.__mapValuesData__[n], this.__mapKeysData__[n], this), n = t._next()
                })),
                get: c((function(e) {
                    var t = o.call(this.__mapKeysData__, e);
                    if (-1 !== t) return this.__mapValuesData__[t]
                })),
                has: c((function(e) {
                    return -1 !== o.call(this.__mapKeysData__, e)
                })),
                keys: c((function() {
                    return new d(this, "key")
                })),
                set: c((function(e, t) {
                    var n, r = o.call(this.__mapKeysData__, e);
                    return -1 === r && (r = this.__mapKeysData__.push(e) - 1, n = !0), this.__mapValuesData__[r] = t, n && this.emit("_add", r, e), this
                })),
                size: c.gs((function() {
                    return this.__mapKeysData__.length
                })),
                values: c((function() {
                    return new d(this, "value")
                })),
                toString: c((function() {
                    return "[object Map]"
                }))
            })), Object.defineProperty(r.prototype, f.iterator, c((function() {
                return this.entries()
            }))), Object.defineProperty(r.prototype, f.toStringTag, c("c", "Map"))
        }, {
            "./is-native-implemented": 70,
            "./lib/iterator": 72,
            d: 15,
            "es5-ext/array/#/clear": 21,
            "es5-ext/array/#/e-index-of": 22,
            "es5-ext/object/set-prototype-of": 52,
            "es5-ext/object/valid-callable": 55,
            "es5-ext/object/valid-value": 56,
            "es6-iterator/for-of": 62,
            "es6-iterator/valid-iterable": 67,
            "es6-symbol": 74,
            "event-emitter": 82
        }],
        74: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? e("ext/global-this").Symbol : e("./polyfill")
        }, {
            "./is-implemented": 75,
            "./polyfill": 80,
            "ext/global-this": 85
        }],
        75: [function(e, t, n) {
            var r = e("ext/global-this"),
                i = {
                    object: !0,
                    symbol: !0
                };
            t.exports = function() {
                var e, t = r.Symbol;
                if ("function" != typeof t) return !1;
                e = t("test symbol");
                try {
                    String(e)
                } catch (e) {
                    return !1
                }
                return !!i[p(t.iterator)] && !!i[p(t.toPrimitive)] && !!i[p(t.toStringTag)]
            }
        }, {
            "ext/global-this": 85
        }],
        76: [function(e, t, n) {
            t.exports = function(e) {
                return !!e && ("symbol" == p(e) || !!e.constructor && "Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag])
            }
        }, {}],
        77: [function(e, t, n) {
            var r = e("d"),
                i = Object.create,
                o = Object.defineProperty,
                a = Object.prototype,
                s = i(null);
            t.exports = function(e) {
                for (var t, n, i = 0; s[e + (i || "")];) ++i;
                return s[e += i || ""] = !0, o(a, t = "@@" + e, r.gs(null, (function(e) {
                    n || (n = !0, o(this, t, r(e)), n = !1)
                }))), t
            }
        }, {
            d: 15
        }],
        78: [function(e, t, n) {
            var r = e("d"),
                i = e("ext/global-this").Symbol;
            t.exports = function(e) {
                return Object.defineProperties(e, {
                    hasInstance: r("", i && i.hasInstance || e("hasInstance")),
                    isConcatSpreadable: r("", i && i.isConcatSpreadable || e("isConcatSpreadable")),
                    iterator: r("", i && i.iterator || e("iterator")),
                    match: r("", i && i.match || e("match")),
                    replace: r("", i && i.replace || e("replace")),
                    search: r("", i && i.search || e("search")),
                    species: r("", i && i.species || e("species")),
                    split: r("", i && i.split || e("split")),
                    toPrimitive: r("", i && i.toPrimitive || e("toPrimitive")),
                    toStringTag: r("", i && i.toStringTag || e("toStringTag")),
                    unscopables: r("", i && i.unscopables || e("unscopables"))
                })
            }
        }, {
            d: 15,
            "ext/global-this": 85
        }],
        79: [function(e, t, n) {
            var r = e("d"),
                i = e("../../../validate-symbol"),
                o = Object.create(null);
            t.exports = function(e) {
                return Object.defineProperties(e, {
                    for: r((function(t) {
                        return o[t] ? o[t] : o[t] = e(String(t))
                    })),
                    keyFor: r((function(e) {
                        var t;
                        for (t in i(e), o)
                            if (o[t] === e) return t
                    }))
                })
            }
        }, {
            "../../../validate-symbol": 81,
            d: 15
        }],
        80: [function(e, t, n) {
            var r, i, o, a = e("d"),
                s = e("./validate-symbol"),
                u = e("ext/global-this").Symbol,
                c = e("./lib/private/generate-name"),
                l = e("./lib/private/setup/standard-symbols"),
                f = e("./lib/private/setup/symbol-registry"),
                h = Object.create,
                d = Object.defineProperties,
                g = Object.defineProperty;
            if ("function" == typeof u) try {
                String(u()), o = !0
            } catch (e) {} else u = null;
            i = function(e) {
                if (this instanceof i) throw new TypeError("Symbol is not a constructor");
                return r(e)
            }, t.exports = r = function e(t) {
                var n;
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return o ? u(t) : (n = h(i.prototype), t = void 0 === t ? "" : String(t), d(n, {
                    __description__: a("", t),
                    __name__: a("", c(t))
                }))
            }, l(r), f(r), d(i.prototype, {
                constructor: a(r),
                toString: a("", (function() {
                    return this.__name__
                }))
            }), d(r.prototype, {
                toString: a((function() {
                    return "Symbol (" + s(this).__description__ + ")"
                })),
                valueOf: a((function() {
                    return s(this)
                }))
            }), g(r.prototype, r.toPrimitive, a("", (function() {
                var e = s(this);
                return "symbol" == p(e) ? e : e.toString()
            }))), g(r.prototype, r.toStringTag, a("c", "Symbol")), g(i.prototype, r.toStringTag, a("c", r.prototype[r.toStringTag])), g(i.prototype, r.toPrimitive, a("c", r.prototype[r.toPrimitive]))
        }, {
            "./lib/private/generate-name": 77,
            "./lib/private/setup/standard-symbols": 78,
            "./lib/private/setup/symbol-registry": 79,
            "./validate-symbol": 81,
            d: 15,
            "ext/global-this": 85
        }],
        81: [function(e, t, n) {
            var r = e("./is-symbol");
            t.exports = function(e) {
                if (!r(e)) throw new TypeError(e + " is not a symbol");
                return e
            }
        }, {
            "./is-symbol": 76
        }],
        82: [function(e, t, n) {
            var r, i, o, a, s, u, c, l = e("d"),
                f = e("es5-ext/object/valid-callable"),
                h = Function.prototype.apply,
                d = Function.prototype.call,
                g = Object.create,
                v = Object.defineProperty,
                m = Object.defineProperties,
                y = Object.prototype.hasOwnProperty,
                _ = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
            i = function(e, t) {
                var n, i;
                return f(t), i = this, r.call(this, e, n = function() {
                    o.call(i, e, n), h.call(t, this, arguments)
                }), n.__eeOnceListener__ = t, this
            }, a = function(e) {
                var t, n, r, i, o;
                if (y.call(this, "__ee__") && (i = this.__ee__[e]))
                    if ("object" == p(i)) {
                        for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                        for (i = i.slice(), t = 0; r = i[t]; ++t) h.call(r, this, o)
                    } else switch (arguments.length) {
                        case 1:
                            d.call(i, this);
                            break;
                        case 2:
                            d.call(i, this, arguments[1]);
                            break;
                        case 3:
                            d.call(i, this, arguments[1], arguments[2]);
                            break;
                        default:
                            for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                            h.call(i, this, o)
                    }
            }, s = {
                on: r = function(e, t) {
                    var n;
                    return f(t), y.call(this, "__ee__") ? n = this.__ee__ : (n = _.value = g(null), v(this, "__ee__", _), _.value = null), n[e] ? "object" == p(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
                },
                once: i,
                off: o = function(e, t) {
                    var n, r, i, o;
                    if (f(t), !y.call(this, "__ee__")) return this;
                    if (!(n = this.__ee__)[e]) return this;
                    if ("object" == p(r = n[e]))
                        for (o = 0; i = r[o]; ++o) i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[o ? 0 : 1] : r.splice(o, 1));
                    else r !== t && r.__eeOnceListener__ !== t || delete n[e];
                    return this
                },
                emit: a
            }, u = {
                on: l(r),
                once: l(i),
                off: l(o),
                emit: l(a)
            }, c = m({}, u), t.exports = n = function(e) {
                return null == e ? g(c) : m(Object(e), u)
            }, n.methods = s
        }, {
            d: 15,
            "es5-ext/object/valid-callable": 55
        }],
        83: [function(e, t, n) {
            var r = Object.create || function(e) {
                    var t = function() {};
                    return t.prototype = e, new t
                },
                i = Object.keys || function(e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t);
                    return t
                },
                o = Function.prototype.bind || function(e) {
                    var t = this;
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
             function a() {
                this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = r(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }
            t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._maxListeners = void 0;
            var s, u = 10;
            try {
                var c = {};
                Object.defineProperty && Object.defineProperty(c, "x", {
                    value: 0
                }), s = 0 === c.x
            } catch (e) {
                s = !1
            }
             function l(e) {
                return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
            }
             function f(e, t, n) {
                if (t) e.call(n);
                else
                    for (var r = e.length, i = x(e, r), o = 0; o < r; ++o) i[o].call(n)
            }
             function h(e, t, n, r) {
                if (t) e.call(n, r);
                else
                    for (var i = e.length, o = x(e, i), a = 0; a < i; ++a) o[a].call(n, r)
            }
             function d(e, t, n, r, i) {
                if (t) e.call(n, r, i);
                else
                    for (var o = e.length, a = x(e, o), s = 0; s < o; ++s) a[s].call(n, r, i)
            }
             function g(e, t, n, r, i, o) {
                if (t) e.call(n, r, i, o);
                else
                    for (var a = e.length, s = x(e, a), u = 0; u < a; ++u) s[u].call(n, r, i, o)
            }
             function v(e, t, n, r) {
                if (t) e.apply(n, r);
                else
                    for (var i = e.length, o = x(e, i), a = 0; a < i; ++a) o[a].apply(n, r)
            }
             function m(e, t, n, i) {
                var o, a, s;
                if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
                if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = r(null), e._eventsCount = 0), s) {
                    if ("function" == typeof s ? s = a[t] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n), !s.warned && (o = l(e)) && o > 0 && s.length > o) {
                        s.warned = !0;
                        var u = new Error("Possible EventEmitter memory leak detected. " + s.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, "object" == ("undefined" == typeof console ? "undefined" : p(console)) && console.warn && console.warn("%s: %s", u.name, u.message)
                    }
                } else s = a[t] = n, ++e._eventsCount;
                return e
            }
             function y() {
                if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                    case 0:
                        return this.listener.call(this.target);
                    case 1:
                        return this.listener.call(this.target, arguments[0]);
                    case 2:
                        return this.listener.call(this.target, arguments[0], arguments[1]);
                    case 3:
                        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                    default:
                        for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
                        this.listener.apply(this.target, e)
                }
            }
             function _(e, t, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    i = o.call(y, r);
                return i.listener = n, r.wrapFn = i, i
            }
             function b(e, t, n) {
                var r = e._events;
                if (!r) return [];
                var i = r[t];
                return i ? "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(i) : x(i, i.length) : []
            }
             function w(e) {
                var t = this._events;
                if (t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (n) return n.length
                }
                return 0
            }
             function x(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n
            }
            s ? Object.defineProperty(a, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                    u = e
                }
            }) : a.defaultMaxListeners = u, a.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
                return this._maxListeners = e, this
            }, a.prototype.getMaxListeners = function() {
                return l(this)
            }, a.prototype.emit = function(e) {
                var t, n, r, i, o, a, s = "error" === e;
                if (a = this._events) s = s && null == a.error;
                else if (!s) return !1;
                if (s) {
                    if (arguments.length > 1 && (t = arguments[1]), t instanceof Error) throw t;
                    var u = new Error('Unhandled "error" event. (' + t + ")");
                    throw u.context = t, u
                }
                if (!(n = a[e])) return !1;
                var c = "function" == typeof n;
                switch (r = arguments.length) {
                    case 1:
                        f(n, c, this);
                        break;
                    case 2:
                        h(n, c, this, arguments[1]);
                        break;
                    case 3:
                        d(n, c, this, arguments[1], arguments[2]);
                        break;
                    case 4:
                        g(n, c, this, arguments[1], arguments[2], arguments[3]);
                        break;
                    default:
                        for (i = new Array(r - 1), o = 1; o < r; o++) i[o - 1] = arguments[o];
                        v(n, c, this, i)
                }
                return !0
            }, a.prototype.addListener = function(e, t) {
                return m(this, e, t, !1)
            }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
                return m(this, e, t, !0)
            }, a.prototype.once = function(e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.on(e, _(this, e, t)), this
            }, a.prototype.prependOnceListener = function(e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.prependListener(e, _(this, e, t)), this
            }, a.prototype.removeListener = function(e, t) {
                var n, i, o, a, s;
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                if (!(i = this._events)) return this;
                if (!(n = i[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = r(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" != typeof n) {
                    for (o = -1, a = n.length - 1; a >= 0; a--)
                        if (n[a] === t || n[a].listener === t) {
                            s = n[a].listener, o = a;
                            break
                        }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function(e, t) {
                        for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
                        e.pop()
                    }(n, o), 1 === n.length && (i[e] = n[0]), i.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t, n, o;
                if (!(n = this._events)) return this;
                if (!n.removeListener) return 0 === arguments.length ? (this._events = r(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = r(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var a, s = i(n);
                    for (o = 0; o < s.length; ++o) "removeListener" !== (a = s[o]) && this.removeAllListeners(a);
                    return this.removeAllListeners("removeListener"), this._events = r(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                else if (t)
                    for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
                return this
            }, a.prototype.listeners = function(e) {
                return b(this, e, !0)
            }, a.prototype.rawListeners = function(e) {
                return b(this, e, !1)
            }, a.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : w.call(e, t)
            }, a.prototype.listenerCount = w, a.prototype.eventNames = function() {
                return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
            }
        }, {}],
        84: [function(e, t, n) {
            var r = function() {
                if ("object" == ("undefined" == typeof self ? "undefined" : p(self)) && self) return self;
                if ("object" == ("undefined" == typeof window ? "undefined" : p(window)) && window) return window;
                throw new Error("Unable to resolve global `this`")
            };
            t.exports = function() {
                if (this) return this;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (e) {
                    return r()
                }
                try {
                    return __global__ || r()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        }, {}],
        85: [function(e, t, n) {
            t.exports = e("./is-implemented")() ? globalThis : e("./implementation")
        }, {
            "./implementation": 84,
            "./is-implemented": 86
        }],
        86: [function(e, t, n) {
            t.exports = function() {
                return "object" == ("undefined" == typeof globalThis ? "undefined" : p(globalThis)) && !!globalThis && globalThis.Array === Array
            }
        }, {}],
        87: [function(e, t, n) {
            n.read = function(e, t, n, r, i) {
                var o, a, s = 8 * i - r - 1,
                    u = (1 << s) - 1,
                    c = u >> 1,
                    l = -7,
                    f = n ? i - 1 : 0,
                    h = n ? -1 : 1,
                    p = e[t + f];
                for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; o = 256 * o + e[t + f], f += h, l -= 8);
                for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += h, l -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, r), o -= c
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - r)
            }, n.write = function(e, t, n, r, i, o) {
                var a, s, u, c = 8 * o - i - 1,
                    l = (1 << c) - 1,
                    f = l >> 1,
                    h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : o - 1,
                    d = r ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + p] = 255 & s, p += d, s /= 256, i -= 8);
                for (a = a << i | s, c += i; c > 0; e[n + p] = 255 & a, p += d, a /= 256, c -= 8);
                e[n + p - d] |= 128 * g
            }
        }, {}],
        88: [function(e, t, n) {
            "function" == typeof Object.create ? t.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }, {}],
        89: [function(e, t, n) {
            function r(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
                /*!
                 * Determine if an object is a Buffer
                 *
                 * @author   Feross Aboukhadijeh <https://feross.org>
                 * @license  MIT
                 */
            t.exports = function(e) {
                return null != e && (r(e) || function(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
                }(e) || !!e._isBuffer)
            }
        }, {}],
        90: [function(e, t, n) {
            var r = e("safe-buffer").Buffer,
                i = t.exports;
            for (var o in i.types = {
                    0: "reserved",
                    1: "connect",
                    2: "connack",
                    3: "publish",
                    4: "puback",
                    5: "pubrec",
                    6: "pubrel",
                    7: "pubcomp",
                    8: "subscribe",
                    9: "suback",
                    10: "unsubscribe",
                    11: "unsuback",
                    12: "pingreq",
                    13: "pingresp",
                    14: "disconnect",
                    15: "auth"
                }, i.codes = {}, i.types) {
                var a = i.types[o];
                i.codes[a] = o
            }
            for (var s in i.CMD_SHIFT = 4, i.CMD_MASK = 240, i.DUP_MASK = 8, i.QOS_MASK = 3, i.QOS_SHIFT = 1, i.RETAIN_MASK = 1, i.LENGTH_MASK = 127, i.LENGTH_FIN_MASK = 128, i.SESSIONPRESENT_MASK = 1, i.SESSIONPRESENT_HEADER = r.from([i.SESSIONPRESENT_MASK]), i.CONNACK_HEADER = r.from([i.codes.connack << i.CMD_SHIFT]), i.USERNAME_MASK = 128, i.PASSWORD_MASK = 64, i.WILL_RETAIN_MASK = 32, i.WILL_QOS_MASK = 24, i.WILL_QOS_SHIFT = 3, i.WILL_FLAG_MASK = 4, i.CLEAN_SESSION_MASK = 2, i.CONNECT_HEADER = r.from([i.codes.connect << i.CMD_SHIFT]), i.properties = {
                    sessionExpiryInterval: 17,
                    willDelayInterval: 24,
                    receiveMaximum: 33,
                    maximumPacketSize: 39,
                    topicAliasMaximum: 34,
                    requestResponseInformation: 25,
                    requestProblemInformation: 23,
                    userProperties: 38,
                    authenticationMethod: 21,
                    authenticationData: 22,
                    payloadFormatIndicator: 1,
                    messageExpiryInterval: 2,
                    contentType: 3,
                    responseTopic: 8,
                    correlationData: 9,
                    maximumQoS: 36,
                    retainAvailable: 37,
                    assignedClientIdentifier: 18,
                    reasonString: 31,
                    wildcardSubscriptionAvailable: 40,
                    subscriptionIdentifiersAvailable: 41,
                    sharedSubscriptionAvailable: 42,
                    serverKeepAlive: 19,
                    responseInformation: 26,
                    serverReference: 28,
                    topicAlias: 35,
                    subscriptionIdentifier: 11
                }, i.propertiesCodes = {}, i.properties) {
                var u = i.properties[s];
                i.propertiesCodes[u] = s
            }
             function c(e) {
                return [0, 1, 2].map((function(t) {
                    return [0, 1].map((function(n) {
                        return [0, 1].map((function(o) {
                            var a = new r(1);
                            return a.writeUInt8(i.codes[e] << i.CMD_SHIFT | (n ? i.DUP_MASK : 0) | t << i.QOS_SHIFT | o, 0, !0), a
                        }))
                    }))
                }))
            }
            i.propertiesTypes = {
                sessionExpiryInterval: "int32",
                willDelayInterval: "int32",
                receiveMaximum: "int16",
                maximumPacketSize: "int32",
                topicAliasMaximum: "int16",
                requestResponseInformation: "byte",
                requestProblemInformation: "byte",
                userProperties: "pair",
                authenticationMethod: "string",
                authenticationData: "binary",
                payloadFormatIndicator: "byte",
                messageExpiryInterval: "int32",
                contentType: "string",
                responseTopic: "string",
                correlationData: "binary",
                maximumQoS: "int8",
                retainAvailable: "byte",
                assignedClientIdentifier: "string",
                reasonString: "string",
                wildcardSubscriptionAvailable: "byte",
                subscriptionIdentifiersAvailable: "byte",
                sharedSubscriptionAvailable: "byte",
                serverKeepAlive: "int32",
                responseInformation: "string",
                serverReference: "string",
                topicAlias: "int16",
                subscriptionIdentifier: "var"
            }, i.PUBLISH_HEADER = c("publish"), i.SUBSCRIBE_HEADER = c("subscribe"), i.SUBSCRIBE_OPTIONS_QOS_MASK = 3, i.SUBSCRIBE_OPTIONS_NL_MASK = 1, i.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, i.SUBSCRIBE_OPTIONS_RAP_MASK = 1, i.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, i.SUBSCRIBE_OPTIONS_RH_MASK = 3, i.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, i.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], i.SUBSCRIBE_OPTIONS_NL = 4, i.SUBSCRIBE_OPTIONS_RAP = 8, i.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], i.UNSUBSCRIBE_HEADER = c("unsubscribe"), i.ACKS = {
                unsuback: c("unsuback"),
                puback: c("puback"),
                pubcomp: c("pubcomp"),
                pubrel: c("pubrel"),
                pubrec: c("pubrec")
            }, i.SUBACK_HEADER = r.from([i.codes.suback << i.CMD_SHIFT]), i.VERSION3 = r.from([3]), i.VERSION4 = r.from([4]), i.VERSION5 = r.from([5]), i.QOS = [0, 1, 2].map((function(e) {
                return r.from([e])
            })), i.EMPTY = {
                pingreq: r.from([i.codes.pingreq << 4, 0]),
                pingresp: r.from([i.codes.pingresp << 4, 0]),
                disconnect: r.from([i.codes.disconnect << 4, 0])
            }
        }, {
            "safe-buffer": 118
        }],
        91: [function(e, t, n) {
            var r = e("safe-buffer").Buffer,
                i = e("./writeToStream"),
                o = e("events").EventEmitter;
             function a() {
                this._array = new Array(20), this._i = 0
            }
            e("inherits")(a, o), a.prototype.write = function(e) {
                return this._array[this._i++] = e, !0
            }, a.prototype.concat = function() {
                var e, t, n = 0,
                    i = new Array(this._array.length),
                    o = this._array,
                    a = 0;
                for (e = 0; e < o.length && void 0 !== o[e]; e++) "string" != typeof o[e] ? i[e] = o[e].length : i[e] = r.byteLength(o[e]), n += i[e];
                for (t = r.allocUnsafe(n), e = 0; e < o.length && void 0 !== o[e]; e++) "string" != typeof o[e] ? (o[e].copy(t, a), a += i[e]) : (t.write(o[e], a), a += i[e]);
                return t
            }, t.exports = function(e, t) {
                var n = new a;
                return i(e, n, t), n.concat()
            }
        }, {
            "./writeToStream": 97,
            events: 83,
            inherits: 88,
            "safe-buffer": 118
        }],
        92: [function(e, t, n) {
            n.parser = e("./parser"), n.generate = e("./generate"), n.writeToStream = e("./writeToStream")
        }, {
            "./generate": 91,
            "./parser": 96,
            "./writeToStream": 97
        }],
        93: [function(e, t, n) {
            var r = e("readable-stream/duplex"),
                i = e("util"),
                o = e("safe-buffer").Buffer;
             function a(e) {
                if (!(this instanceof a)) return new a(e);
                if (this._bufs = [], this.length = 0, "function" == typeof e) {
                    this._callback = e;
                    var t = function(e) {
                        this._callback && (this._callback(e), this._callback = null)
                    }.bind(this);
                    this.on("pipe", (function(e) {
                        e.on("error", t)
                    })), this.on("unpipe", (function(e) {
                        e.removeListener("error", t)
                    }))
                } else this.append(e);
                r.call(this)
            }
            i.inherits(a, r), a.prototype._offset = function(e) {
                    var t, n = 0,
                        r = 0;
                    if (0 === e) return [0, 0];
                    for (; r < this._bufs.length; r++) {
                        if (e < (t = n + this._bufs[r].length) || r == this._bufs.length - 1) return [r, e - n];
                        n = t
                    }
                }, a.prototype.append = function(e) {
                    var t = 0;
                    if (o.isBuffer(e)) this._appendBuffer(e);
                    else if (Array.isArray(e))
                        for (; t < e.length; t++) this.append(e[t]);
                    else if (e instanceof a)
                        for (; t < e._bufs.length; t++) this.append(e._bufs[t]);
                    else null != e && ("number" == typeof e && (e = e.toString()), this._appendBuffer(o.from(e)));
                    return this
                }, a.prototype._appendBuffer = function(e) {
                    this._bufs.push(e), this.length += e.length
                }, a.prototype._write = function(e, t, n) {
                    this._appendBuffer(e), "function" == typeof n && n()
                }, a.prototype._read = function(e) {
                    if (!this.length) return this.push(null);
                    e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e)
                }, a.prototype.end = function(e) {
                    r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
                }, a.prototype.get = function(e) {
                    return this.slice(e, e + 1)[0]
                }, a.prototype.slice = function(e, t) {
                    return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t)
                }, a.prototype.copy = function(e, t, n, r) {
                    if (("number" != typeof n || n < 0) && (n = 0), ("number" != typeof r || r > this.length) && (r = this.length), n >= this.length) return e || o.alloc(0);
                    if (r <= 0) return e || o.alloc(0);
                    var i, a, s = !!e,
                        u = this._offset(n),
                        c = r - n,
                        l = c,
                        f = s && t || 0,
                        h = u[1];
                    if (0 === n && r == this.length) {
                        if (!s) return 1 === this._bufs.length ? this._bufs[0] : o.concat(this._bufs, this.length);
                        for (a = 0; a < this._bufs.length; a++) this._bufs[a].copy(e, f), f += this._bufs[a].length;
                        return e
                    }
                    if (l <= this._bufs[u[0]].length - h) return s ? this._bufs[u[0]].copy(e, t, h, h + l) : this._bufs[u[0]].slice(h, h + l);
                    for (s || (e = o.allocUnsafe(c)), a = u[0]; a < this._bufs.length; a++) {
                        if (!(l > (i = this._bufs[a].length - h))) {
                            this._bufs[a].copy(e, f, h, h + l);
                            break
                        }
                        this._bufs[a].copy(e, f, h), f += i, l -= i, h && (h = 0)
                    }
                    return e
                }, a.prototype.shallowSlice = function(e, t) {
                    e = e || 0, t = t || this.length, e < 0 && (e += this.length), t < 0 && (t += this.length);
                    var n = this._offset(e),
                        r = this._offset(t),
                        i = this._bufs.slice(n[0], r[0] + 1);
                    return 0 == r[1] ? i.pop() : i[i.length - 1] = i[i.length - 1].slice(0, r[1]), 0 != n[1] && (i[0] = i[0].slice(n[1])), new a(i)
                }, a.prototype.toString = function(e, t, n) {
                    return this.slice(t, n).toString(e)
                }, a.prototype.consume = function(e) {
                    for (; this._bufs.length;) {
                        if (!(e >= this._bufs[0].length)) {
                            this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                            break
                        }
                        e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                    }
                    return this
                }, a.prototype.duplicate = function() {
                    for (var e = 0, t = new a; e < this._bufs.length; e++) t.append(this._bufs[e]);
                    return t
                }, a.prototype.destroy = function() {
                    this._bufs.length = 0, this.length = 0, this.push(null)
                },
                function() {
                    var e = {
                        readDoubleBE: 8,
                        readDoubleLE: 8,
                        readFloatBE: 4,
                        readFloatLE: 4,
                        readInt32BE: 4,
                        readInt32LE: 4,
                        readUInt32BE: 4,
                        readUInt32LE: 4,
                        readInt16BE: 2,
                        readInt16LE: 2,
                        readUInt16BE: 2,
                        readUInt16LE: 2,
                        readInt8: 1,
                        readUInt8: 1
                    };
                    for (var t in e) ! function(t) {
                        a.prototype[t] = function(n) {
                            return this.slice(n, n + e[t])[t](0)
                        }
                    }(t)
                }(), t.exports = a
        }, {
            "readable-stream/duplex": 105,
            "safe-buffer": 118,
            util: 136
        }],
        94: [function(e, t, n) {
            var r = e("safe-buffer").Buffer,
                i = {};
             function o(e) {
                var t = r.allocUnsafe(2);
                return t.writeUInt8(e >> 8, 0), t.writeUInt8(255 & e, 1), t
            }
            t.exports = {
                cache: i,
                generateCache: function() {
                    for (var e = 0; e < 65536; e++) i[e] = o(e)
                },
                generateNumber: o,
                genBufVariableByteInt: function(e) {
                    var t = 0,
                        n = 0,
                        i = function(e) {
                            return e >= 0 && e < 128 ? 1 : e >= 128 && e < 16384 ? 2 : e >= 16384 && e < 2097152 ? 3 : e >= 2097152 && e < 268435456 ? 4 : 0
                        }(e),
                        o = r.allocUnsafe(i);
                    do {
                        t = e % 128 | 0, (e = e / 128 | 0) > 0 && (t |= 128), o.writeUInt8(t, n++)
                    } while (e > 0);
                    return {
                        data: o,
                        length: i
                    }
                },
                generate4ByteBuffer: function(e) {
                    var t = r.allocUnsafe(4);
                    return t.writeUInt32BE(e, 0), t
                }
            }
        }, {
            "safe-buffer": 118
        }],
        95: [function(e, t, n) {
            t.exports = function() {
                this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
            }
        }, {}],
        96: [function(e, t, n) {
            var r = e("bl"),
                i = e("inherits"),
                o = e("events").EventEmitter,
                a = e("./packet"),
                s = e("./constants");
             function u(e) {
                if (!(this instanceof u)) return new u(e);
                this.settings = e || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState()
            }
            i(u, o), u.prototype._resetState = function() {
                this.packet = new a, this.error = null, this._list = r(), this._stateCounter = 0
            }, u.prototype.parse = function(e) {
                for (this.error && this._resetState(), this._list.append(e);
                    (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) this._stateCounter++, this._stateCounter >= this._states.length && (this._stateCounter = 0);
                return this._list.length
            }, u.prototype._parseHeader = function() {
                var e = this._list.readUInt8(0);
                return this.packet.cmd = s.types[e >> s.CMD_SHIFT], this.packet.retain = 0 != (e & s.RETAIN_MASK), this.packet.qos = e >> s.QOS_SHIFT & s.QOS_MASK, this.packet.dup = 0 != (e & s.DUP_MASK), this._list.consume(1), !0
            }, u.prototype._parseLength = function() {
                var e = this._parseVarByteNum(!0);
                return e && (this.packet.length = e.value, this._list.consume(e.bytes)), !!e
            }, u.prototype._parsePayload = function() {
                var e = !1;
                if (0 === this.packet.length || this._list.length >= this.packet.length) {
                    switch (this._pos = 0, this.packet.cmd) {
                        case "connect":
                            this._parseConnect();
                            break;
                        case "connack":
                            this._parseConnack();
                            break;
                        case "publish":
                            this._parsePublish();
                            break;
                        case "puback":
                        case "pubrec":
                        case "pubrel":
                        case "pubcomp":
                            this._parseConfirmation();
                            break;
                        case "subscribe":
                            this._parseSubscribe();
                            break;
                        case "suback":
                            this._parseSuback();
                            break;
                        case "unsubscribe":
                            this._parseUnsubscribe();
                            break;
                        case "unsuback":
                            this._parseUnsuback();
                            break;
                        case "pingreq":
                        case "pingresp":
                            break;
                        case "disconnect":
                            this._parseDisconnect();
                            break;
                        case "auth":
                            this._parseAuth();
                            break;
                        default:
                            this._emitError(new Error("Not supported"))
                    }
                    e = !0
                }
                return e
            }, u.prototype._parseConnect = function() {
                var e, t, n, r, i, o, a = {},
                    u = this.packet;
                if (null === (e = this._parseString())) return this._emitError(new Error("Cannot parse protocolId"));
                if ("MQTT" !== e && "MQIsdp" !== e) return this._emitError(new Error("Invalid protocolId"));
                if (u.protocolId = e, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                if (u.protocolVersion = this._list.readUInt8(this._pos), 3 !== u.protocolVersion && 4 !== u.protocolVersion && 5 !== u.protocolVersion) return this._emitError(new Error("Invalid protocol version"));
                if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                if (a.username = this._list.readUInt8(this._pos) & s.USERNAME_MASK, a.password = this._list.readUInt8(this._pos) & s.PASSWORD_MASK, a.will = this._list.readUInt8(this._pos) & s.WILL_FLAG_MASK, a.will && (u.will = {}, u.will.retain = 0 != (this._list.readUInt8(this._pos) & s.WILL_RETAIN_MASK), u.will.qos = (this._list.readUInt8(this._pos) & s.WILL_QOS_MASK) >> s.WILL_QOS_SHIFT), u.clean = 0 != (this._list.readUInt8(this._pos) & s.CLEAN_SESSION_MASK), this._pos++, u.keepalive = this._parseNum(), -1 === u.keepalive) return this._emitError(new Error("Packet too short"));
                if (5 === u.protocolVersion) {
                    var c = this._parseProperties();
                    Object.getOwnPropertyNames(c).length && (u.properties = c)
                }
                if (null === (t = this._parseString())) return this._emitError(new Error("Packet too short"));
                if (u.clientId = t, a.will) {
                    if (5 === u.protocolVersion) {
                        var l = this._parseProperties();
                        Object.getOwnPropertyNames(l).length && (u.will.properties = l)
                    }
                    if (null === (n = this._parseString())) return this._emitError(new Error("Cannot parse will topic"));
                    if (u.will.topic = n, null === (r = this._parseBuffer())) return this._emitError(new Error("Cannot parse will payload"));
                    u.will.payload = r
                }
                if (a.username) {
                    if (null === (o = this._parseString())) return this._emitError(new Error("Cannot parse username"));
                    u.username = o
                }
                if (a.password) {
                    if (null === (i = this._parseBuffer())) return this._emitError(new Error("Cannot parse password"));
                    u.password = i
                }
                return this.settings = u, u
            }, u.prototype._parseConnack = function() {
                var e = this.packet;
                if (this._list.length < 2) return null;
                if (e.sessionPresent = !!(this._list.readUInt8(this._pos++) & s.SESSIONPRESENT_MASK), 5 === this.settings.protocolVersion ? e.reasonCode = this._list.readUInt8(this._pos++) : e.returnCode = this._list.readUInt8(this._pos++), -1 === e.returnCode || -1 === e.reasonCode) return this._emitError(new Error("Cannot parse return code"));
                if (5 === this.settings.protocolVersion) {
                    var t = this._parseProperties();
                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                }
            }, u.prototype._parsePublish = function() {
                var e = this.packet;
                if (e.topic = this._parseString(), null === e.topic) return this._emitError(new Error("Cannot parse topic"));
                if (!(e.qos > 0) || this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    e.payload = this._list.slice(this._pos, e.length)
                }
            }, u.prototype._parseSubscribe = function() {
                var e, t, n, r, i, o, a, u = this.packet;
                if (1 !== u.qos) return this._emitError(new Error("Wrong subscribe header"));
                if (u.subscriptions = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        var c = this._parseProperties();
                        Object.getOwnPropertyNames(c).length && (u.properties = c)
                    }
                    for (; this._pos < u.length;) {
                        if (null === (e = this._parseString())) return this._emitError(new Error("Cannot parse topic"));
                        n = (t = this._parseByte()) & s.SUBSCRIBE_OPTIONS_QOS_MASK, o = 0 != (t >> s.SUBSCRIBE_OPTIONS_NL_SHIFT & s.SUBSCRIBE_OPTIONS_NL_MASK), i = 0 != (t >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT & s.SUBSCRIBE_OPTIONS_RAP_MASK), r = t >> s.SUBSCRIBE_OPTIONS_RH_SHIFT & s.SUBSCRIBE_OPTIONS_RH_MASK, a = {
                            topic: e,
                            qos: n
                        }, 5 === this.settings.protocolVersion && (a.nl = o, a.rap = i, a.rh = r), u.subscriptions.push(a)
                    }
                }
            }, u.prototype._parseSuback = function() {
                var e = this.packet;
                if (this.packet.granted = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    for (; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
                }
            }, u.prototype._parseUnsubscribe = function() {
                var e = this.packet;
                if (e.unsubscriptions = [], this._parseMessageId()) {
                    if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length && (e.properties = t)
                    }
                    for (; this._pos < e.length;) {
                        var n;
                        if (null === (n = this._parseString())) return this._emitError(new Error("Cannot parse topic"));
                        e.unsubscriptions.push(n)
                    }
                }
            }, u.prototype._parseUnsuback = function() {
                var e = this.packet;
                if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
                if (5 === this.settings.protocolVersion) {
                    var t = this._parseProperties();
                    for (Object.getOwnPropertyNames(t).length && (e.properties = t), e.granted = []; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
                }
            }, u.prototype._parseConfirmation = function() {
                var e = this.packet;
                if (this._parseMessageId(), 5 === this.settings.protocolVersion && e.length > 2) {
                    e.reasonCode = this._parseByte();
                    var t = this._parseProperties();
                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                }
                return !0
            }, u.prototype._parseDisconnect = function() {
                var e = this.packet;
                if (5 === this.settings.protocolVersion) {
                    e.reasonCode = this._parseByte();
                    var t = this._parseProperties();
                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                }
                return !0
            }, u.prototype._parseAuth = function() {
                var e = this.packet;
                if (5 !== this.settings.protocolVersion) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
                e.reasonCode = this._parseByte();
                var t = this._parseProperties();
                return Object.getOwnPropertyNames(t).length && (e.properties = t), !0
            }, u.prototype._parseMessageId = function() {
                var e = this.packet;
                return e.messageId = this._parseNum(), null !== e.messageId || (this._emitError(new Error("Cannot parse messageId")), !1)
            }, u.prototype._parseString = function(e) {
                var t, n = this._parseNum(),
                    r = n + this._pos;
                return -1 === n || r > this._list.length || r > this.packet.length ? null : (t = this._list.toString("utf8", this._pos, r), this._pos += n, t)
            }, u.prototype._parseStringPair = function() {
                return {
                    name: this._parseString(),
                    value: this._parseString()
                }
            }, u.prototype._parseBuffer = function() {
                var e, t = this._parseNum(),
                    n = t + this._pos;
                return -1 === t || n > this._list.length || n > this.packet.length ? null : (e = this._list.slice(this._pos, n), this._pos += t, e)
            }, u.prototype._parseNum = function() {
                if (this._list.length - this._pos < 2) return -1;
                var e = this._list.readUInt16BE(this._pos);
                return this._pos += 2, e
            }, u.prototype._parse4ByteNum = function() {
                if (this._list.length - this._pos < 4) return -1;
                var e = this._list.readUInt32BE(this._pos);
                return this._pos += 4, e
            }, u.prototype._parseVarByteNum = function(e) {
                for (var t, n = 0, r = 1, i = 0, o = !0, a = this._pos ? this._pos : 0; n < 5 && (i += r * ((t = this._list.readUInt8(a + n++)) & s.LENGTH_MASK), r *= 128, 0 != (t & s.LENGTH_FIN_MASK));)
                    if (this._list.length <= n) {
                        o = !1;
                        break
                    }
                return a && (this._pos += n), !!o && (e ? {
                    bytes: n,
                    value: i
                } : i)
            }, u.prototype._parseByte = function() {
                var e = this._list.readUInt8(this._pos);
                return this._pos++, e
            }, u.prototype._parseByType = function(e) {
                switch (e) {
                    case "byte":
                        return 0 !== this._parseByte();
                    case "int8":
                        return this._parseByte();
                    case "int16":
                        return this._parseNum();
                    case "int32":
                        return this._parse4ByteNum();
                    case "var":
                        return this._parseVarByteNum();
                    case "string":
                        return this._parseString();
                    case "pair":
                        return this._parseStringPair();
                    case "binary":
                        return this._parseBuffer()
                }
            }, u.prototype._parseProperties = function() {
                for (var e = this._parseVarByteNum(), t = this._pos + e, n = {}; this._pos < t;) {
                    var r = this._parseByte(),
                        i = s.propertiesCodes[r];
                    if (!i) return this._emitError(new Error("Unknown property")), !1;
                    if ("userProperties" !== i) n[i] = this._parseByType(s.propertiesTypes[i]);
                    else {
                        n[i] || (n[i] = {});
                        var o = this._parseByType(s.propertiesTypes[i]);
                        n[i][o.name] = o.value
                    }
                }
                return n
            }, u.prototype._newPacket = function() {
                return this.packet && (this._list.consume(this.packet.length), this.emit("packet", this.packet)), this.packet = new a, this._pos = 0, !0
            }, u.prototype._emitError = function(e) {
                this.error = e, this.emit("error", e)
            }, t.exports = u
        }, {
            "./constants": 90,
            "./packet": 95,
            bl: 93,
            events: 83,
            inherits: 88
        }],
        97: [function(e, t, n) {
            var r = e("./constants"),
                i = e("safe-buffer").Buffer,
                o = i.allocUnsafe(0),
                a = i.from([0]),
                s = e("./numbers"),
                u = e("process-nextick-args").nextTick,
                c = s.cache,
                l = s.generateNumber,
                f = s.generateCache,
                h = s.genBufVariableByteInt,
                d = s.generate4ByteBuffer,
                g = k,
                v = !0;
             function m(e, t, n) {
                switch (t.cork && (t.cork(), u(y, t)), v && (v = !1, f()), e.cmd) {
                    case "connect":
                        return function(e, t, n) {
                            var o = e || {},
                                a = o.protocolId || "MQTT",
                                s = o.protocolVersion || 4,
                                u = o.will,
                                c = o.clean,
                                l = o.keepalive || 0,
                                f = o.clientId || "",
                                h = o.username,
                                d = o.password,
                                v = o.properties;
                            void 0 === c && (c = !0);
                            var m = 0;
                            if (!a || "string" != typeof a && !i.isBuffer(a)) return t.emit("error", new Error("Invalid protocolId")), !1;
                            if (m += a.length + 2, 3 !== s && 4 !== s && 5 !== s) return t.emit("error", new Error("Invalid protocol version")), !1;
                            if (m += 1, "string" != typeof f && !i.isBuffer(f) || !f && 4 !== s || !f && !c) {
                                if (s < 4) return t.emit("error", new Error("clientId must be supplied before 3.1.1")), !1;
                                if (1 * c == 0) return t.emit("error", new Error("clientId must be given if cleanSession set to 0")), !1
                            } else m += f.length + 2;
                            if ("number" != typeof l || l < 0 || l > 65535 || l % 1 != 0) return t.emit("error", new Error("Invalid keepalive")), !1;
                            if (m += 2, m += 1, 5 === s) {
                                var y = E(t, v);
                                m += y.length
                            }
                            if (u) {
                                if ("object" != p(u)) return t.emit("error", new Error("Invalid will")), !1;
                                if (!u.topic || "string" != typeof u.topic) return t.emit("error", new Error("Invalid will topic")), !1;
                                if (m += i.byteLength(u.topic) + 2, u.payload) {
                                    if (!(u.payload.length >= 0)) return t.emit("error", new Error("Invalid will payload")), !1;
                                    "string" == typeof u.payload ? m += i.byteLength(u.payload) + 2 : m += u.payload.length + 2;
                                    var _ = {};
                                    5 === s && (m += (_ = E(t, u.properties)).length)
                                }
                            }
                            var x = !1;
                            if (null != h) {
                                if (!B(h)) return t.emit("error", new Error("Invalid username")), !1;
                                x = !0, m += i.byteLength(h) + 2
                            }
                            if (null != d) {
                                if (!x) return t.emit("error", new Error("Username is required to use password")), !1;
                                if (!B(d)) return t.emit("error", new Error("Invalid password")), !1;
                                m += O(d) + 2
                            }
                            t.write(r.CONNECT_HEADER), b(t, m), I(t, a), t.write(4 === s ? r.VERSION4 : 5 === s ? r.VERSION5 : r.VERSION3);
                            var k = 0;
                            return k |= null != h ? r.USERNAME_MASK : 0, k |= null != d ? r.PASSWORD_MASK : 0, k |= u && u.retain ? r.WILL_RETAIN_MASK : 0, k |= u && u.qos ? u.qos << r.WILL_QOS_SHIFT : 0, k |= u ? r.WILL_FLAG_MASK : 0, k |= c ? r.CLEAN_SESSION_MASK : 0, t.write(i.from([k])), g(t, l), 5 === s && y.write(), I(t, f), u && (5 === s && _.write(), w(t, u.topic), I(t, u.payload)), null != h && I(t, h), null != d && I(t, d), !0
                        }(e, t);
                    case "connack":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                s = e || {},
                                u = 5 === o ? s.reasonCode : s.returnCode,
                                c = s.properties,
                                l = 2;
                            if ("number" != typeof u) return t.emit("error", new Error("Invalid return code")), !1;
                            var f = null;
                            return 5 === o && (l += (f = E(t, c)).length), t.write(r.CONNACK_HEADER), b(t, l), t.write(s.sessionPresent ? r.SESSIONPRESENT_HEADER : a), t.write(i.from([u])), null != f && f.write(), !0
                        }(e, t, n);
                    case "publish":
                        return function(e, t, n) {
                            var a = n ? n.protocolVersion : 4,
                                s = e || {},
                                u = s.qos || 0,
                                c = s.retain ? r.RETAIN_MASK : 0,
                                l = s.topic,
                                f = s.payload || o,
                                h = s.messageId,
                                p = s.properties,
                                d = 0;
                            if ("string" == typeof l) d += i.byteLength(l) + 2;
                            else {
                                if (!i.isBuffer(l)) return t.emit("error", new Error("Invalid topic")), !1;
                                d += l.length + 2
                            }
                            if (i.isBuffer(f) ? d += f.length : d += i.byteLength(f), u && "number" != typeof h) return t.emit("error", new Error("Invalid messageId")), !1;
                            u && (d += 2);
                            var v = null;
                            return 5 === a && (d += (v = E(t, p)).length), t.write(r.PUBLISH_HEADER[u][s.dup ? 1 : 0][c ? 1 : 0]), b(t, d), g(t, O(l)), t.write(l), u > 0 && g(t, h), null != v && v.write(), t.write(f)
                        }(e, t, n);
                    case "puback":
                    case "pubrec":
                    case "pubrel":
                    case "pubcomp":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.cmd || "puback",
                                u = a.messageId,
                                c = a.dup && "pubrel" === s ? r.DUP_MASK : 0,
                                l = 0,
                                f = a.reasonCode,
                                h = a.properties,
                                p = 5 === o ? 3 : 2;
                            if ("pubrel" === s && (l = 1), "number" != typeof u) return t.emit("error", new Error("Invalid messageId")), !1;
                            var d = null;
                            if (5 === o) {
                                if (!(d = A(t, h, n, p))) return !1;
                                p += d.length
                            }
                            return t.write(r.ACKS[s][l][c][0]), b(t, p), g(t, u), 5 === o && t.write(i.from([f])), null !== d && d.write(), !0
                        }(e, t, n);
                    case "subscribe":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.dup ? r.DUP_MASK : 0,
                                u = a.messageId,
                                c = a.subscriptions,
                                l = a.properties,
                                f = 0;
                            if ("number" != typeof u) return t.emit("error", new Error("Invalid messageId")), !1;
                            f += 2;
                            var h = null;
                            if (5 === o && (f += (h = E(t, l)).length), "object" != p(c) || !c.length) return t.emit("error", new Error("Invalid subscriptions")), !1;
                            for (var d = 0; d < c.length; d += 1) {
                                var v = c[d].topic,
                                    m = c[d].qos;
                                if ("string" != typeof v) return t.emit("error", new Error("Invalid subscriptions - invalid topic")), !1;
                                if ("number" != typeof m) return t.emit("error", new Error("Invalid subscriptions - invalid qos")), !1;
                                if (5 === o) {
                                    if ("boolean" != typeof(c[d].nl || !1)) return t.emit("error", new Error("Invalid subscriptions - invalid No Local")), !1;
                                    if ("boolean" != typeof(c[d].rap || !1)) return t.emit("error", new Error("Invalid subscriptions - invalid Retain as Published")), !1;
                                    var y = c[d].rh || 0;
                                    if ("number" != typeof y || y > 2) return t.emit("error", new Error("Invalid subscriptions - invalid Retain Handling")), !1
                                }
                                f += i.byteLength(v) + 2 + 1
                            }
                            t.write(r.SUBSCRIBE_HEADER[1][s ? 1 : 0][0]), b(t, f), g(t, u), null !== h && h.write();
                            for (var _ = !0, x = 0; x < c.length; x++) {
                                var k, S = c[x],
                                    T = S.topic,
                                    I = S.qos,
                                    A = +S.nl,
                                    C = +S.rap,
                                    O = S.rh;
                                w(t, T), k = r.SUBSCRIBE_OPTIONS_QOS[I], 5 === o && (k |= A ? r.SUBSCRIBE_OPTIONS_NL : 0, k |= C ? r.SUBSCRIBE_OPTIONS_RAP : 0, k |= O ? r.SUBSCRIBE_OPTIONS_RH[O] : 0), _ = t.write(i.from([k]))
                            }
                            return _
                        }(e, t, n);
                    case "suback":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.messageId,
                                u = a.granted,
                                c = a.properties,
                                l = 0;
                            if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1;
                            if (l += 2, "object" != p(u) || !u.length) return t.emit("error", new Error("Invalid qos vector")), !1;
                            for (var f = 0; f < u.length; f += 1) {
                                if ("number" != typeof u[f]) return t.emit("error", new Error("Invalid qos vector")), !1;
                                l += 1
                            }
                            var h = null;
                            if (5 === o) {
                                if (!(h = A(t, c, n, l))) return !1;
                                l += h.length
                            }
                            return t.write(r.SUBACK_HEADER), b(t, l), g(t, s), null !== h && h.write(), t.write(i.from(u))
                        }(e, t, n);
                    case "unsubscribe":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.messageId,
                                u = a.dup ? r.DUP_MASK : 0,
                                c = a.unsubscriptions,
                                l = a.properties,
                                f = 0;
                            if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1;
                            if (f += 2, "object" != p(c) || !c.length) return t.emit("error", new Error("Invalid unsubscriptions")), !1;
                            for (var h = 0; h < c.length; h += 1) {
                                if ("string" != typeof c[h]) return t.emit("error", new Error("Invalid unsubscriptions")), !1;
                                f += i.byteLength(c[h]) + 2
                            }
                            var d = null;
                            5 === o && (f += (d = E(t, l)).length), t.write(r.UNSUBSCRIBE_HEADER[1][u ? 1 : 0][0]), b(t, f), g(t, s), null !== d && d.write();
                            for (var v = !0, m = 0; m < c.length; m++) v = w(t, c[m]);
                            return v
                        }(e, t, n);
                    case "unsuback":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.messageId,
                                u = a.dup ? r.DUP_MASK : 0,
                                c = a.granted,
                                l = a.properties,
                                f = a.cmd,
                                h = 2;
                            if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1;
                            if (5 === o) {
                                if ("object" != p(c) || !c.length) return t.emit("error", new Error("Invalid qos vector")), !1;
                                for (var d = 0; d < c.length; d += 1) {
                                    if ("number" != typeof c[d]) return t.emit("error", new Error("Invalid qos vector")), !1;
                                    h += 1
                                }
                            }
                            var v = null;
                            if (5 === o) {
                                if (!(v = A(t, l, n, h))) return !1;
                                h += v.length
                            }
                            return t.write(r.ACKS[f][0][u][0]), b(t, h), g(t, s), null !== v && v.write(), 5 === o && t.write(i.from(c)), !0
                        }(e, t, n);
                    case "pingreq":
                    case "pingresp":
                        return function(e, t, n) {
                            return t.write(r.EMPTY[e.cmd])
                        }(e, t);
                    case "disconnect":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.reasonCode,
                                u = a.properties,
                                c = 5 === o ? 1 : 0,
                                l = null;
                            if (5 === o) {
                                if (!(l = A(t, u, n, c))) return !1;
                                c += l.length
                            }
                            return t.write(i.from([r.codes.disconnect << 4])), b(t, c), 5 === o && t.write(i.from([s])), null !== l && l.write(), !0
                        }(e, t, n);
                    case "auth":
                        return function(e, t, n) {
                            var o = n ? n.protocolVersion : 4,
                                a = e || {},
                                s = a.reasonCode,
                                u = a.properties,
                                c = 5 === o ? 1 : 0;
                            5 !== o && t.emit("error", new Error("Invalid mqtt version for auth packet"));
                            var l = A(t, u, n, c);
                            return !!l && (c += l.length, t.write(i.from([r.codes.auth << 4])), b(t, c), t.write(i.from([s])), null !== l && l.write(), !0)
                        }(e, t, n);
                    default:
                        return t.emit("error", new Error("Unknown command")), !1
                }
            }
             function y(e) {
                e.uncork()
            }
            Object.defineProperty(m, "cacheNumbers", {get: function() {
                    return g === k
                },
                set: function(e) {
                    e ? (c && 0 !== Object.keys(c).length || (v = !0), g = k) : (v = !1, g = S)
                }
            });
            var _ = {};
             function b(e, t) {
                var n = _[t];
                n || (n = h(t).data, t < 16384 && (_[t] = n)), e.write(n)
            }
             function w(e, t) {
                var n = i.byteLength(t);
                g(e, n), e.write(t, "utf8")
            }
             function x(e, t, n) {
                w(e, t), w(e, n)
            }
             function k(e, t) {
                return e.write(c[t])
            }
             function S(e, t) {
                return e.write(l(t))
            }
             function T(e, t) {
                return e.write(d(t))
            }
             function I(e, t) {
                "string" == typeof t ? w(e, t) : t ? (g(e, t.length), e.write(t)) : g(e, 0)
            }
             function E(e, t) {
                if ("object" != p(t) || null != t.length) return {
                    length: 1,
                    write: function() {
                        C(e, {}, 0)
                    }
                };
                var n = 0;
                 function o(n) {
                    var o = r.propertiesTypes[n],
                        a = t[n],
                        s = 0;
                    switch (o) {
                        case "byte":
                            if ("boolean" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 2;
                            break;
                        case "int8":
                            if ("number" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 2;
                            break;
                        case "binary":
                            if (a && null === a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 1 + i.byteLength(a) + 2;
                            break;
                        case "int16":
                            if ("number" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 3;
                            break;
                        case "int32":
                            if ("number" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 5;
                            break;
                        case "var":
                            if ("number" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 1 + h(a).length;
                            break;
                        case "string":
                            if ("string" != typeof a) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += 3 + i.byteLength(a.toString());
                            break;
                        case "pair":
                            if ("object" != p(a)) return e.emit("error", new Error("Invalid " + n)), !1;
                            s += Object.getOwnPropertyNames(a).reduce((function(e, t) {
                                return e + (3 + i.byteLength(t.toString()) + 2 + i.byteLength(a[t].toString()))
                            }), 0);
                            break;
                        default:
                            return e.emit("error", new Error("Invalid property " + n)), !1
                    }
                    return s
                }
                if (t)
                    for (var a in t) {
                        var s = o(a);
                        if (!s) return !1;
                        n += s
                    }
                return {
                    length: h(n).length + n,
                    write: function() {
                        C(e, t, n)
                    }
                }
            }
             function A(e, t, n, r) {
                var i = ["reasonString", "userProperties"],
                    o = n && n.properties && n.properties.maximumPacketSize ? n.properties.maximumPacketSize : 0,
                    a = E(e, t);
                if (o)
                    for (; r + a.length > o;) {
                        var s = i.shift();
                        if (!s || !t[s]) return !1;
                        delete t[s], a = E(e, t)
                    }
                return a
            }
             function C(e, t, n) {
                for (var o in b(e, n), t)
                    if (t.hasOwnProperty(o) && null !== t[o]) {
                        var a = t[o];
                        switch (r.propertiesTypes[o]) {
                            case "byte":
                                e.write(i.from([r.properties[o]])), e.write(i.from([+a]));
                                break;
                            case "int8":
                                e.write(i.from([r.properties[o]])), e.write(i.from([a]));
                                break;
                            case "binary":
                                e.write(i.from([r.properties[o]])), I(e, a);
                                break;
                            case "int16":
                                e.write(i.from([r.properties[o]])), g(e, a);
                                break;
                            case "int32":
                                e.write(i.from([r.properties[o]])), T(e, a);
                                break;
                            case "var":
                                e.write(i.from([r.properties[o]])), b(e, a);
                                break;
                            case "string":
                                e.write(i.from([r.properties[o]])), w(e, a);
                                break;
                            case "pair":
                                Object.getOwnPropertyNames(a).forEach((function(t) {
                                    e.write(i.from([r.properties[o]])), x(e, t.toString(), a[t].toString())
                                }));
                                break;
                            default:
                                return e.emit("error", new Error("Invalid property " + o)), !1
                        }
                    }
            }
             function O(e) {
                return e ? e instanceof i ? e.length : i.byteLength(e) : 0
            }
             function B(e) {
                return "string" == typeof e || e instanceof i
            }
            t.exports = m
        }, {
            "./constants": 90,
            "./numbers": 94,
            "process-nextick-args": 99,
            "safe-buffer": 118
        }],
        98: [function(e, t, n) {
            var r = e("wrappy");
             function i(e) {
                var t = function t() {
                    return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
                };
                return t.called = !1, t
            }
             function o(e) {
                var t = function t() {
                        if (t.called) throw new Error(t.onceError);
                        return t.called = !0, t.value = e.apply(this, arguments)
                    },
                    n = e.name || "Function wrapped with `once`";
                return t.onceError = n + " shouldn't be called more than once", t.called = !1, t
            }
            t.exports = r(i), t.exports.strict = r(o), i.proto = i((function() {
                Object.defineProperty(Function.prototype, "once", {
                    value: function() {
                        return i(this)
                    },
                    configurable: !0
                }), Object.defineProperty(Function.prototype, "onceStrict", {
                    value: function() {
                        return o(this)
                    },
                    configurable: !0
                })
            }))
        }, {
            wrappy: 139
        }],
        99: [function(e, t, n) {
            (function(e) {
                void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                    nextTick: function(t, n, r, i) {
                        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                        var o, a, s = arguments.length;
                        switch (s) {
                            case 0:
                            case 1:
                                return e.nextTick(t);
                            case 2:
                                return e.nextTick((function() {
                                    t.call(null, n)
                                }));
                            case 3:
                                return e.nextTick((function() {
                                    t.call(null, n, r)
                                }));
                            case 4:
                                return e.nextTick((function() {
                                    t.call(null, n, r, i)
                                }));
                            default:
                                for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                                return e.nextTick((function() {
                                    t.apply(null, o)
                                }))
                        }
                    }
                } : t.exports = e
            }).call(this, e("_process"))
        }, {
            _process: 100
        }],
        100: [function(e, t, n) {
            var r, i, o = t.exports = {};
             function a() {
                throw new Error("setTimeout has not been defined")
            }
             function s() {
                throw new Error("clearTimeout has not been defined")
            }
             function u(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r.call(null, e, 0)
                    } catch (t) {
                        return r.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    r = a
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    i = s
                }
            }();
            var c, l = [],
                f = !1,
                h = -1;
             function p() {
                f && c && (f = !1, c.length ? l = c.concat(l) : h = -1, l.length && d())
            }
             function d() {
                if (!f) {
                    var e = u(p);
                    f = !0;
                    for (var t = l.length; t;) {
                        for (c = l, l = []; ++h < t;) c && c[h].run();
                        h = -1, t = l.length
                    }
                    c = null, f = !1,
                        function(e) {
                            if (i === clearTimeout) return clearTimeout(e);
                            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                            try {
                                i(e)
                            } catch (t) {
                                try {
                                    return i.call(null, e)
                                } catch (t) {
                                    return i.call(this, e)
                                }
                            }
                        }(e)
                }
            }
             function g(e, t) {
                this.fun = e, this.array = t
            }
             function v() {}
            o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new g(e, t)), 1 !== l.length || f || u(d)
            }, g.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, {}],
        101: [function(e, t, n) {
            (function(e) {
                ! function(r) {
                    var i = "object" == p(n) && n && !n.nodeType && n,
                        o = "object" == p(t) && t && !t.nodeType && t,
                        a = "object" == p(e) && e;
                    a.global !== a && a.window !== a && a.self !== a || (r = a);
                    var s, u, c = 2147483647,
                        l = 36,
                        f = /^xn--/,
                        h = /[^\x20-\x7E]/,
                        d = /[\x2E\u3002\uFF0E\uFF61]/g,
                        g = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        v = Math.floor,
                        m = String.fromCharCode;
                     function y(e) {
                        throw new RangeError(g[e])
                    }
                     function _(e, t) {
                        for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                        return r
                    }
                     function b(e, t) {
                        var n = e.split("@"),
                            r = "";
                        return n.length > 1 && (r = n[0] + "@", e = n[1]), r + _((e = e.replace(d, ".")).split("."), t).join(".")
                    }
                     function w(e) {
                        for (var t, n, r = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
                        return r
                    }
                     function x(e) {
                        return _(e, (function(e) {
                            var t = "";
                            return e > 65535 && (t += m((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + m(e)
                        })).join("")
                    }
                     function k(e) {
                        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : l
                    }
                     function S(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    }
                     function T(e, t, n) {
                        var r = 0;
                        for (e = n ? v(e / 700) : e >> 1, e += v(e / t); e > 455; r += l) e = v(e / 35);
                        return v(r + 36 * e / (e + 38))
                    }
                     function I(e) {
                        var t, n, r, i, o, a, s, u, f, h, p = [],
                            d = e.length,
                            g = 0,
                            m = 128,
                            _ = 72;
                        for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && y("not-basic"), p.push(e.charCodeAt(r));
                        for (i = n > 0 ? n + 1 : 0; i < d;) {
                            for (o = g, a = 1, s = l; i >= d && y("invalid-input"), ((u = k(e.charCodeAt(i++))) >= l || u > v((c - g) / a)) && y("overflow"), g += u * a, !(u < (f = s <= _ ? 1 : s >= _ + 26 ? 26 : s - _)); s += l) a > v(c / (h = l - f)) && y("overflow"), a *= h;
                            _ = T(g - o, t = p.length + 1, 0 == o), v(g / t) > c - m && y("overflow"), m += v(g / t), g %= t, p.splice(g++, 0, m)
                        }
                        return x(p)
                    }
                     function E(e) {
                        var t, n, r, i, o, a, s, u, f, h, p, d, g, _, b, x = [];
                        for (d = (e = w(e)).length, t = 128, n = 0, o = 72, a = 0; a < d; ++a)(p = e[a]) < 128 && x.push(m(p));
                        for (r = i = x.length, i && x.push("-"); r < d;) {
                            for (s = c, a = 0; a < d; ++a)(p = e[a]) >= t && p < s && (s = p);
                            for (s - t > v((c - n) / (g = r + 1)) && y("overflow"), n += (s - t) * g, t = s, a = 0; a < d; ++a)
                                if ((p = e[a]) < t && ++n > c && y("overflow"), p == t) {
                                    for (u = n, f = l; !(u < (h = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += l) b = u - h, _ = l - h, x.push(m(S(h + b % _, 0))), u = v(b / _);
                                    x.push(m(S(u, 0))), o = T(n, g, r == i), n = 0, ++r
                                }++n, ++t
                        }
                        return x.join("")
                    }
                    if (s = {
                            version: "1.4.1",
                            ucs2: {
                                decode: w,
                                encode: x
                            },
                            decode: I,
                            encode: E,
                            toASCII: function(e) {
                                return b(e, (function(e) {
                                    return h.test(e) ? "xn--" + E(e) : e
                                }))
                            },
                            toUnicode: function(e) {
                                return b(e, (function(e) {
                                    return f.test(e) ? I(e.slice(4).toLowerCase()) : e
                                }))
                            }
                        }, i && o)
                        if (t.exports == i) o.exports = s;
                        else
                            for (u in s) s.hasOwnProperty(u) && (i[u] = s[u]);
                    else r.punycode = s
                }(this)
            }).call(this, void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        102: [function(e, t, n) {
            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.exports = function(e, t, n, o) {
                t = t || "&", n = n || "=";
                var a = {};
                if ("string" != typeof e || 0 === e.length) return a;
                var s = /\+/g;
                e = e.split(t);
                var u = 1e3;
                o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                var c = e.length;
                u > 0 && c > u && (c = u);
                for (var l = 0; l < c; ++l) {
                    var f, h, p, d, g = e[l].replace(s, "%20"),
                        v = g.indexOf(n);
                    v >= 0 ? (f = g.substr(0, v), h = g.substr(v + 1)) : (f = g, h = ""), p = decodeURIComponent(f), d = decodeURIComponent(h), r(a, p) ? i(a[p]) ? a[p].push(d) : a[p] = [a[p], d] : a[p] = d
                }
                return a
            };
            var i = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        }, {}],
        103: [function(e, t, n) {
            var r = function(e) {
                switch (p(e)) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            t.exports = function(e, t, n, s) {
                return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == p(e) ? o(a(e), (function(a) {
                    var s = encodeURIComponent(r(a)) + n;
                    return i(e[a]) ? o(e[a], (function(e) {
                        return s + encodeURIComponent(r(e))
                    })).join(t) : s + encodeURIComponent(r(e[a]))
                })).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
            };
            var i = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
             function o(e, t) {
                if (e.map) return e.map(t);
                for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n
            }
            var a = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
        }, {}],
        104: [function(e, t, n) {
            n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
        }, {
            "./decode": 102,
            "./encode": 103
        }],
        105: [function(e, t, n) {
            t.exports = e("./lib/_stream_duplex.js")
        }, {
            "./lib/_stream_duplex.js": 106
        }],
        106: [function(e, t, n) {
            var r = e("process-nextick-args"),
                i = Object.keys || function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                };
            t.exports = f;
            var o = e("core-util-is");
            o.inherits = e("inherits");
            var a = e("./_stream_readable"),
                s = e("./_stream_writable");
            o.inherits(f, a);
            for (var u = i(s.prototype), c = 0; c < u.length; c++) {
                var l = u[c];
                f.prototype[l] || (f.prototype[l] = s.prototype[l])
            }
             function f(e) {
                if (!(this instanceof f)) return new f(e);
                a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h)
            }
             function h() {
                this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
            }
             function p(e) {
                e.end()
            }
            Object.defineProperty(f.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(f.prototype, "destroyed", {get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            }), f.prototype._destroy = function(e, t) {
                this.push(null), this.end(), r.nextTick(t, e)
            }
        }, {
            "./_stream_readable": 108,
            "./_stream_writable": 110,
            "core-util-is": 13,
            inherits: 88,
            "process-nextick-args": 99
        }],
        107: [function(e, t, n) {
            t.exports = o;
            var r = e("./_stream_transform"),
                i = e("core-util-is");
             function o(e) {
                if (!(this instanceof o)) return new o(e);
                r.call(this, e)
            }
            i.inherits = e("inherits"), i.inherits(o, r), o.prototype._transform = function(e, t, n) {
                n(null, e)
            }
        }, {
            "./_stream_transform": 109,
            "core-util-is": 13,
            inherits: 88
        }],
        108: [function(e, t, n) {
            (function(n, r) {
                var i = e("process-nextick-args");
                t.exports = b;
                var o, a = e("isarray");
                b.ReadableState = _, e("events").EventEmitter;
                var s = function(e, t) {
                        return e.listeners(t).length
                    },
                    u = e("./internal/streams/stream"),
                    c = e("safe-buffer").Buffer,
                    l = r.Uint8Array || function() {};
                var f = e("core-util-is");
                f.inherits = e("inherits");
                var h = e("util"),
                    p = void 0;
                p = h && h.debuglog ? h.debuglog("stream") : function() {};
                var d, g = e("./internal/streams/BufferList"),
                    v = e("./internal/streams/destroy");
                f.inherits(b, u);
                var m = ["error", "close", "destroy", "pause", "resume"];
                 function y(e, t, n) {
                    if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                    e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                }
                 function _(t, n) {
                    t = t || {};
                    var r = n instanceof(o = o || e("./_stream_duplex"));
                    this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                    var i = t.highWaterMark,
                        a = t.readableHighWaterMark,
                        s = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new g, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = e("string_decoder/").StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding)
                }
                 function b(t) {
                    if (o = o || e("./_stream_duplex"), !(this instanceof b)) return new b(t);
                    this._readableState = new _(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this)
                }
                 function w(e, t, n, r, i) {
                    var o, a = e._readableState;
                    return null === t ? (a.reading = !1, function(e, t) {
                            if (!t.ended) {
                                if (t.decoder) {
                                    var n = t.decoder.end();
                                    n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                                }
                                t.ended = !0, T(e)
                            }
                        }(e, a)) : (i || (o = function(e, t) {
                            var n;
                            return function(e) {
                                return c.isBuffer(e) || e instanceof l
                            }(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
                        }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) {
                            return c.from(e)
                        }(t)), r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : x(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? x(e, a, t, !1) : E(e, a)) : x(e, a, t, !1))) : r || (a.reading = !1)),
                        function(e) {
                            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                        }(a)
                }
                 function x(e, t, n, r) {
                    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && T(e)), E(e, t)
                }
                Object.defineProperty(b.prototype, "destroyed", {get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }), b.prototype.destroy = v.destroy, b.prototype._undestroy = v.undestroy, b.prototype._destroy = function(e, t) {
                    this.push(null), t(e)
                }, b.prototype.push = function(e, t) {
                    var n, r = this._readableState;
                    return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t), t = ""), n = !0), w(this, e, t, !1, n)
                }, b.prototype.unshift = function(e) {
                    return w(this, e, null, !0, !1)
                }, b.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }, b.prototype.setEncoding = function(t) {
                    return d || (d = e("string_decoder/").StringDecoder), this._readableState.decoder = new d(t), this._readableState.encoding = t, this
                };
                var k = 8388608;
                 function S(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= k ? e = k : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                }
                 function T(e) {
                    var t = e._readableState;
                    t.needReadable = !1, t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(I, e) : I(e))
                }
                 function I(e) {
                    p("emit readable"), e.emit("readable"), B(e)
                }
                 function E(e, t) {
                    t.readingMore || (t.readingMore = !0, i.nextTick(A, e, t))
                }
                 function A(e, t) {
                    for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                    t.readingMore = !1
                }
                 function C(e) {
                    p("readable nexttick read 0"), e.read(0)
                }
                 function O(e, t) {
                    t.reading || (p("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), B(e), t.flowing && !t.reading && e.read(0)
                }
                 function B(e) {
                    var t = e._readableState;
                    for (p("flow", t.flowing); t.flowing && null !== e.read(););
                }
                 function P(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function(e, t, n) {
                        var r;
                        return e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function(e, t) {
                            var n = t.head,
                                r = 1,
                                i = n.data;
                            for (e -= i.length; n = n.next;) {
                                var o = n.data,
                                    a = e > o.length ? o.length : e;
                                if (a === o.length ? i += o : i += o.slice(0, e), 0 == (e -= a)) {
                                    a === o.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                                    break
                                }++r
                            }
                            return t.length -= r, i
                        }(e, t) : function(e, t) {
                            var n = c.allocUnsafe(e),
                                r = t.head,
                                i = 1;
                            for (r.data.copy(n), e -= r.data.length; r = r.next;) {
                                var o = r.data,
                                    a = e > o.length ? o.length : e;
                                if (o.copy(n, n.length - e, 0, a), 0 == (e -= a)) {
                                    a === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                                    break
                                }++i
                            }
                            return t.length -= i, n
                        }(e, t), r
                    }(e, t.buffer, t.decoder), n);
                    var n
                }
                 function F(e) {
                    var t = e._readableState;
                    if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0, i.nextTick(j, t, e))
                }
                 function j(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
                }
                 function R(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                }
                b.prototype.read = function(e) {
                    p("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        n = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? F(this) : T(this), null;
                    if (0 === (e = S(e, t)) && t.ended) return 0 === t.length && F(this), null;
                    var r, i = t.needReadable;
                    return p("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", i = !0), t.ended || t.reading ? p("reading or ended", i = !1) : i && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = S(n, t))), null === (r = e > 0 ? P(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && F(this)), null !== r && this.emit("data", r), r
                }, b.prototype._read = function(e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }, b.prototype.pipe = function(e, t) {
                    var r = this,
                        o = this._readableState;
                    switch (o.pipesCount) {
                        case 0:
                            o.pipes = e;
                            break;
                        case 1:
                            o.pipes = [o.pipes, e];
                            break;
                        default:
                            o.pipes.push(e)
                    }
                    o.pipesCount += 1, p("pipe count=%d opts=%j", o.pipesCount, t);
                    var a = t && !1 === t.end || e === n.stdout || e === n.stderr ? b : c;
                     function u(e, t) {
                        p("onunpipe"), e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, h())
                    }
                     function c() {
                        p("onend"), e.end()
                    }
                    o.endEmitted ? i.nextTick(a) : r.once("end", a), e.on("unpipe", u);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, B(e))
                        }
                    }(r);
                    e.on("drain", l);
                    var f = !1;
                     function h() {
                        p("cleanup"), e.removeListener("close", m), e.removeListener("finish", _), e.removeListener("drain", l), e.removeListener("error", v), e.removeListener("unpipe", u), r.removeListener("end", c), r.removeListener("end", b), r.removeListener("data", g), f = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || l()
                    }
                    var d = !1;
                     function g(t) {
                        p("ondata"), d = !1, !1 !== e.write(t) || d || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== R(o.pipes, e)) && !f && (p("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, d = !0), r.pause())
                    }
                     function v(t) {
                        p("onerror", t), b(), e.removeListener("error", v), 0 === s(e, "error") && e.emit("error", t)
                    }
                     function m() {
                        e.removeListener("finish", _), b()
                    }
                     function _() {
                        p("onfinish"), e.removeListener("close", m), b()
                    }
                     function b() {
                        p("unpipe"), r.unpipe(e)
                    }
                    return r.on("data", g), y(e, "error", v), e.once("close", m), e.once("finish", _), e.emit("pipe", r), o.flowing || (p("pipe resume"), r.resume()), e
                }, b.prototype.unpipe = function(e) {
                    var t = this._readableState,
                        n = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
                    if (!e) {
                        var r = t.pipes,
                            i = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
                        return this
                    }
                    var a = R(t.pipes, e);
                    return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
                }, b.prototype.on = function(e, t) {
                    var n = u.prototype.on.call(this, e, t);
                    if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === e) {
                        var r = this._readableState;
                        r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && T(this) : i.nextTick(C, this))
                    }
                    return n
                }, b.prototype.addListener = b.prototype.on, b.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (p("resume"), e.flowing = !0, function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(O, e, t))
                    }(this, e)), this
                }, b.prototype.pause = function() {
                    return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                }, b.prototype.wrap = function(e) {
                    var t = this,
                        n = this._readableState,
                        r = !1;
                    for (var i in e.on("end", (function() {
                            if (p("wrapped end"), n.decoder && !n.ended) {
                                var e = n.decoder.end();
                                e && e.length && t.push(e)
                            }
                            t.push(null)
                        })), e.on("data", (function(i) {
                            p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()))
                        })), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    }(i));
                    for (var o = 0; o < m.length; o++) e.on(m[o], this.emit.bind(this, m[o]));
                    return this._read = function(t) {
                        p("wrapped _read", t), r && (r = !1, e.resume())
                    }, this
                }, Object.defineProperty(b.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }), b._fromList = P
            }).call(this, e("_process"), void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./_stream_duplex": 106,
            "./internal/streams/BufferList": 111,
            "./internal/streams/destroy": 112,
            "./internal/streams/stream": 113,
            _process: 100,
            "core-util-is": 13,
            events: 83,
            inherits: 88,
            isarray: 114,
            "process-nextick-args": 99,
            "safe-buffer": 118,
            "string_decoder/": 115,
            util: 11
        }],
        109: [function(e, t, n) {
            t.exports = a;
            var r = e("./_stream_duplex"),
                i = e("core-util-is");
             function o(e, t) {
                var n = this._transformState;
                n.transforming = !1;
                var r = n.writecb;
                if (!r) return this.emit("error", new Error("write callback called multiple times"));
                n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
                var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
             function a(e) {
                if (!(this instanceof a)) return new a(e);
                r.call(this, e), this._transformState = {
                    afterTransform: o.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s)
            }
             function s() {
                var e = this;
                "function" == typeof this._flush ? this._flush((function(t, n) {
                    u(e, t, n)
                })) : u(this, null, null)
            }
             function u(e, t, n) {
                if (t) return e.emit("error", t);
                if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
                if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
                return e.push(null)
            }
            i.inherits = e("inherits"), i.inherits(a, r), a.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t)
            }, a.prototype._transform = function(e, t, n) {
                throw new Error("_transform() is not implemented")
            }, a.prototype._write = function(e, t, n) {
                var r = this._transformState;
                if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                    var i = this._readableState;
                    (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, a.prototype._read = function(e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }, a.prototype._destroy = function(e, t) {
                var n = this;
                r.prototype._destroy.call(this, e, (function(e) {
                    t(e), n.emit("close")
                }))
            }
        }, {
            "./_stream_duplex": 106,
            "core-util-is": 13,
            inherits: 88
        }],
        110: [function(e, t, n) {
            (function(n, r, i) {
                var o = e("process-nextick-args");
                 function a(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function() {
                        ! function(e, t, n) {
                            var r = e.entry;
                            for (e.entry = null; r;) {
                                var i = r.callback;
                                t.pendingcb--, i(n), r = r.next
                            }
                            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                        }(t, e)
                    }
                }
                t.exports = y;
                var s, u = !n.browser && ["v0.10", "v0.9."].indexOf(n.version.slice(0, 5)) > -1 ? i : o.nextTick;
                y.WritableState = m;
                var c = e("core-util-is");
                c.inherits = e("inherits");
                var l = {
                        deprecate: e("util-deprecate")
                    },
                    f = e("./internal/streams/stream"),
                    h = e("safe-buffer").Buffer,
                    p = r.Uint8Array || function() {};
                var d, g = e("./internal/streams/destroy");
                 function v() {}
                 function m(t, n) {
                    s = s || e("./_stream_duplex"), t = t || {};
                    var r = n instanceof s;
                    this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                    var i = t.highWaterMark,
                        o = t.writableHighWaterMark,
                        u = this.objectMode ? 16 : 16384;
                    this.highWaterMark = i || 0 === i ? i : r && (o || 0 === o) ? o : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                    var c = !1 === t.decodeStrings;
                    this.decodeStrings = !c, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                        S(n, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
                }
                 function y(t) {
                    if (s = s || e("./_stream_duplex"), !(d.call(y, this) || this instanceof s)) return new y(t);
                    this._writableState = new m(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this)
                }
                 function _(e, t) {
                    var n = new Error("write after end");
                    e.emit("error", n), o.nextTick(t, n)
                }
                 function b(e, t, n, r) {
                    var i = !0,
                        a = !1;
                    return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(r, a), i = !1), i
                }
                 function w(e, t, n, r, i, o) {
                    if (!n) {
                        var a = function(e, t, n) {
                            return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n)), t
                        }(t, r, i);
                        r !== a && (n = !0, i = "buffer", r = a)
                    }
                    var s = t.objectMode ? 1 : r.length;
                    t.length += s;
                    var u = t.length < t.highWaterMark;
                    if (u || (t.needDrain = !0), t.writing || t.corked) {
                        var c = t.lastBufferedRequest;
                        t.lastBufferedRequest = {
                            chunk: r,
                            encoding: i,
                            isBuf: n,
                            callback: o,
                            next: null
                        }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                    } else x(e, t, !1, s, r, i, o);
                    return u
                }
                 function x(e, t, n, r, i, o, a) {
                    t.writelen = r, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
                }
                 function k(e, t, n, r, i) {
                    --t.pendingcb, n ? (o.nextTick(i, r), o.nextTick(C, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (i(r), e._writableState.errorEmitted = !0, e.emit("error", r), C(e, t))
                }
                 function S(e, t) {
                    var n = e._writableState,
                        r = n.sync,
                        i = n.writecb;
                    if (function(e) {
                            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                        }(n), t) k(e, n, r, t, i);
                    else {
                        var o = E(n);
                        o || n.corked || n.bufferProcessing || !n.bufferedRequest || I(e, n), r ? u(T, e, n, o, i) : T(e, n, o, i)
                    }
                }
                 function T(e, t, n, r) {
                    n || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                    }(e, t), t.pendingcb--, r(), C(e, t)
                }
                 function I(e, t) {
                    t.bufferProcessing = !0;
                    var n = t.bufferedRequest;
                    if (e._writev && n && n.next) {
                        var r = t.bufferedRequestCount,
                            i = new Array(r),
                            o = t.corkedRequestsFree;
                        o.entry = n;
                        for (var s = 0, u = !0; n;) i[s] = n, n.isBuf || (u = !1), n = n.next, s += 1;
                        i.allBuffers = u, x(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
                    } else {
                        for (; n;) {
                            var c = n.chunk,
                                l = n.encoding,
                                f = n.callback;
                            if (x(e, t, !1, t.objectMode ? 1 : c.length, c, l, f), n = n.next, t.bufferedRequestCount--, t.writing) break
                        }
                        null === n && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = n, t.bufferProcessing = !1
                }
                 function E(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                 function A(e, t) {
                    e._final((function(n) {
                        t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), C(e, t)
                    }))
                }
                 function C(e, t) {
                    var n = E(t);
                    return n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(A, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
                    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n
                }
                c.inherits(y, f), m.prototype.getBuffer = function() {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    },
                    function() {
                        try {
                            Object.defineProperty(m.prototype, "buffer", {get: l.deprecate((function() {
                                    return this.getBuffer()
                                }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, {
                        value: function(e) {
                            return !!d.call(this, e) || this === y && e && e._writableState instanceof m
                        }
                    })) : d = function(e) {
                        return e instanceof this
                    }, y.prototype.pipe = function() {
                        this.emit("error", new Error("Cannot pipe, not readable"))
                    }, y.prototype.write = function(e, t, n) {
                        var r = this._writableState,
                            i = !1,
                            o = !r.objectMode && function(e) {
                                return h.isBuffer(e) || e instanceof p
                            }(e);
                        return o && !h.isBuffer(e) && (e = function(e) {
                            return h.from(e)
                        }(e)), "function" == typeof t && (n = t, t = null), o ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof n && (n = v), r.ended ? _(this, n) : (o || b(this, r, e, n)) && (r.pendingcb++, i = w(this, r, o, e, t, n)), i
                    }, y.prototype.cork = function() {
                        this._writableState.corked++
                    }, y.prototype.uncork = function() {
                        var e = this._writableState;
                        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || I(this, e))
                    }, y.prototype.setDefaultEncoding = function(e) {
                        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                        return this._writableState.defaultEncoding = e, this
                    }, Object.defineProperty(y.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.highWaterMark
                        }
                    }), y.prototype._write = function(e, t, n) {
                        n(new Error("_write() is not implemented"))
                    }, y.prototype._writev = null, y.prototype.end = function(e, t, n) {
                        var r = this._writableState;
                        "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function(e, t, n) {
                            t.ending = !0, C(e, t), n && (t.finished ? o.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
                        }(this, r, n)
                    }, Object.defineProperty(y.prototype, "destroyed", {get: function() {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function(e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }), y.prototype.destroy = g.destroy, y.prototype._undestroy = g.undestroy, y.prototype._destroy = function(e, t) {
                        this.end(), t(e)
                    }
            }).call(this, e("_process"), void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("timers").setImmediate)
        }, {
            "./_stream_duplex": 106,
            "./internal/streams/destroy": 112,
            "./internal/streams/stream": 113,
            _process: 100,
            "core-util-is": 13,
            inherits: 88,
            "process-nextick-args": 99,
            "safe-buffer": 118,
            timers: 120,
            "util-deprecate": 134
        }],
        111: [function(e, t, n) {
            var r = e("safe-buffer").Buffer,
                i = e("util");
             function o(e, t, n) {
                e.copy(t, n)
            }
            t.exports = function() {
                function e() {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.head = null, this.tail = null, this.length = 0
                }
                return e.prototype.push = function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                }, e.prototype.unshift = function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length
                }, e.prototype.shift = function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                    }
                }, e.prototype.clear = function() {
                    this.head = this.tail = null, this.length = 0
                }, e.prototype.join = function(e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                    return n
                }, e.prototype.concat = function(e) {
                    if (0 === this.length) return r.alloc(0);
                    if (1 === this.length) return this.head.data;
                    for (var t = r.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) o(n.data, t, i), i += n.data.length, n = n.next;
                    return t
                }, e
            }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
                var e = i.inspect({
                    length: this.length
                });
                return this.constructor.name + " " + e
            })
        }, {
            "safe-buffer": 118,
            util: 11
        }],
        112: [function(e, t, n) {
            var r = e("process-nextick-args");
             function i(e, t) {
                e.emit("error", t)
            }
            t.exports = {
                destroy: function(e, t) {
                    var n = this,
                        o = this._readableState && this._readableState.destroyed,
                        a = this._writableState && this._writableState.destroyed;
                    return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
                        !t && e ? (r.nextTick(i, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
                    })), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                }
            }
        }, {
            "process-nextick-args": 99
        }],
        113: [function(e, t, n) {
            t.exports = e("events").EventEmitter
        }, {
            events: 83
        }],
        114: [function(e, t, n) {
            var r = {}.toString;
            t.exports = Array.isArray || function(e) {
                return "[object Array]" == r.call(e)
            }
        }, {}],
        115: [function(e, t, n) {
            var r = e("safe-buffer").Buffer,
                i = r.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };
             function o(e) {
                var t;
                switch (this.encoding = function(e) {
                    var t = function(e) {
                        if (!e) return "utf8";
                        for (var t;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                    case "utf16le":
                        this.text = u, this.end = c, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = s, t = 4;
                        break;
                    case "base64":
                        this.text = l, this.end = f, t = 3;
                        break;
                    default:
                        return this.write = h, void(this.end = p)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
            }
             function a(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }
             function s(e) {
                var t = this.lastTotal - this.lastNeed,
                    n = function(e, t, n) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }
             function u(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var n = e.toString("utf16le", t);
                    if (n) {
                        var r = n.charCodeAt(n.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                    }
                    return n
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }
             function c(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var n = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, n)
                }
                return t
            }
             function l(e, t) {
                var n = (e.length - t) % 3;
                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
            }
             function f(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }
             function h(e) {
                return e.toString(this.encoding)
            }
             function p(e) {
                return e && e.length ? this.write(e) : ""
            }
            n.StringDecoder = o, o.prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }, o.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, o.prototype.text = function(e, t) {
                var n = function(e, t, n) {
                    var r = t.length - 1;
                    if (r < n) return 0;
                    var i = a(t[r]);
                    return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = a(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = a(t[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = n;
                var r = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
            }, o.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        }, {
            "safe-buffer": 118
        }],
        116: [function(e, t, n) {
            (n = t.exports = e("./lib/_stream_readable.js")).Stream = n, n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js")
        }, {
            "./lib/_stream_duplex.js": 106,
            "./lib/_stream_passthrough.js": 107,
            "./lib/_stream_readable.js": 108,
            "./lib/_stream_transform.js": 109,
            "./lib/_stream_writable.js": 110
        }],
        117: [function(e, t, n) {
            function r(e, t, n) {
                var r = this;
                this._callback = e, this._args = n, this._interval = setInterval(e, t, this._args), this.reschedule = function(e) {
                    e || (e = r._interval), r._interval && clearInterval(r._interval), r._interval = setInterval(r._callback, e, r._args)
                }, this.clear = function() {
                    r._interval && (clearInterval(r._interval), r._interval = void 0)
                }, this.destroy = function() {
                    r._interval && clearInterval(r._interval), r._callback = void 0, r._interval = void 0, r._args = void 0
                }
            }
            t.exports = function() {
                if ("function" != typeof arguments[0]) throw new Error("callback needed");
                if ("number" != typeof arguments[1]) throw new Error("interval needed");
                var e;
                if (arguments.length > 0) {
                    e = new Array(arguments.length - 2);
                    for (var t = 0; t < e.length; t++) e[t] = arguments[t + 2]
                }
                return new r(arguments[0], arguments[1], e)
            }
        }, {}],
        118: [function(e, t, n) {
            var r = e("buffer"),
                i = r.Buffer;
             function o(e, t) {
                for (var n in e) t[n] = e[n]
            }
             function a(e, t, n) {
                return i(e, t, n)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, n), n.Buffer = a), o(i, a), a.from = function(e, t, n) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return i(e, t, n)
            }, a.alloc = function(e, t, n) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var r = i(e);
                return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
            }, a.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return i(e)
            }, a.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return r.SlowBuffer(e)
            }
        }, {
            buffer: 12
        }],
        119: [function(e, t, n) {
            t.exports = function(e) {
                var t = e._readableState;
                return t ? t.objectMode || "number" == typeof e._duplexState ? e.read() : e.read(function(e) {
                    return e.buffer.length ? e.buffer.head ? e.buffer.head.data.length : e.buffer[0].length : e.length
                }(t)) : null
            }
        }, {}],
        120: [function(e, t, n) {
            (function(t, r) {
                var i = e("process/browser.js").nextTick,
                    o = Function.prototype.apply,
                    a = Array.prototype.slice,
                    s = {},
                    u = 0;
                 function c(e, t) {
                    this._id = e, this._clearFn = t
                }
                n.setTimeout = function() {
                    return new c(o.call(setTimeout, window, arguments), clearTimeout)
                }, n.setInterval = function() {
                    return new c(o.call(setInterval, window, arguments), clearInterval)
                }, n.clearTimeout = n.clearInterval = function(e) {
                    e.close()
                }, c.prototype.unref = c.prototype.ref = function() {}, c.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }, n.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                }, n.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                }, n._unrefActive = n.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                        e._onTimeout && e._onTimeout()
                    }), t))
                }, n.setImmediate = "function" == typeof t ? t : function(e) {
                    var t = u++,
                        r = !(arguments.length < 2) && a.call(arguments, 1);
                    return s[t] = !0, i((function() {
                        s[t] && (r ? e.apply(null, r) : e.call(null), n.clearImmediate(t))
                    })), t
                }, n.clearImmediate = "function" == typeof r ? r : function(e) {
                    delete s[e]
                }
            }).call(this, e("timers").setImmediate, e("timers").clearImmediate)
        }, {
            "process/browser.js": 100,
            timers: 120
        }],
        121: [function(e, t, n) {
            var r = e("../prototype/is");
            t.exports = function(e) {
                if ("function" != typeof e) return !1;
                if (!hasOwnProperty.call(e, "length")) return !1;
                try {
                    if ("number" != typeof e.length) return !1;
                    if ("function" != typeof e.call) return !1;
                    if ("function" != typeof e.apply) return !1
                } catch (e) {
                    return !1
                }
                return !r(e)
            }
        }, {
            "../prototype/is": 128
        }],
        122: [function(e, t, n) {
            var r = e("../value/is"),
                i = e("../object/is"),
                o = e("../string/coerce"),
                a = e("./to-short-string"),
                s = function(e, t) {
                    return e.replace("%v", a(t))
                };
            t.exports = function(e, t, n) {
                if (!i(n)) throw new TypeError(s(t, e));
                if (!r(e)) {
                    if ("default" in n) return n.default;
                    if (n.isOptional) return null
                }
                var a = o(n.errorMessage);
                throw r(a) || (a = t), new TypeError(s(a, e))
            }
        }, {
            "../object/is": 125,
            "../string/coerce": 129,
            "../value/is": 131,
            "./to-short-string": 124
        }],
        123: [function(e, t, n) {
            t.exports = function(e) {
                try {
                    return e.toString()
                } catch (t) {
                    try {
                        return String(e)
                    } catch (e) {
                        return null
                    }
                }
            }
        }, {}],
        124: [function(e, t, n) {
            var r = e("./safe-to-string"),
                i = /[\n\r\u2028\u2029]/g;
            t.exports = function(e) {
                var t = r(e);
                return null === t ? "<Non-coercible to string value>" : (t.length > 100 && (t = t.slice(0, 99) + "…"), t = t.replace(i, (function(e) {
                    switch (e) {
                        case "\n":
                            return "\\n";
                        case "\r":
                            return "\\r";
                        case "\u2028":
                            return "\\u2028";
                        case "\u2029":
                            return "\\u2029";
                        default:
                            throw new Error("Unexpected character")
                    }
                })))
            }
        }, {
            "./safe-to-string": 123
        }],
        125: [function(e, t, n) {
            var r = e("../value/is"),
                i = {
                    object: !0,
                    function: !0,
                    undefined: !0
                };
            t.exports = function(e) {
                return !!r(e) && hasOwnProperty.call(i, p(e))
            }
        }, {
            "../value/is": 131
        }],
        126: [function(e, t, n) {
            var r = e("../lib/resolve-exception"),
                i = e("./is");
            t.exports = function(e) {
                return i(e) ? e : r(e, "%v is not a plain function", arguments[1])
            }
        }, {
            "../lib/resolve-exception": 122,
            "./is": 127
        }],
        127: [function(e, t, n) {
            var r = e("../function/is"),
                i = /^\s*class[\s{/}]/,
                o = Function.prototype.toString;
            t.exports = function(e) {
                return !!r(e) && !i.test(o.call(e))
            }
        }, {
            "../function/is": 121
        }],
        128: [function(e, t, n) {
            var r = e("../object/is");
            t.exports = function(e) {
                if (!r(e)) return !1;
                try {
                    return !!e.constructor && e.constructor.prototype === e
                } catch (e) {
                    return !1
                }
            }
        }, {
            "../object/is": 125
        }],
        129: [function(e, t, n) {
            var r = e("../value/is"),
                i = e("../object/is"),
                o = Object.prototype.toString;
            t.exports = function(e) {
                if (!r(e)) return null;
                if (i(e)) {
                    var t = e.toString;
                    if ("function" != typeof t) return null;
                    if (t === o) return null
                }
                try {
                    return "" + e
                } catch (e) {
                    return null
                }
            }
        }, {
            "../object/is": 125,
            "../value/is": 131
        }],
        130: [function(e, t, n) {
            var r = e("../lib/resolve-exception"),
                i = e("./is");
            t.exports = function(e) {
                return i(e) ? e : r(e, "Cannot use %v", arguments[1])
            }
        }, {
            "../lib/resolve-exception": 122,
            "./is": 131
        }],
        131: [function(e, t, n) {
            t.exports = function(e) {
                return null != e
            }
        }, {}],
        132: [function(e, t, n) {
            var r = e("punycode"),
                i = e("./util");
             function o() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            n.parse = b, n.resolve = function(e, t) {
                return b(e, !1, !0).resolve(t)
            }, n.resolveObject = function(e, t) {
                return e ? b(e, !1, !0).resolveObject(t) : t
            }, n.format = function(e) {
                return i.isString(e) && (e = b(e)), e instanceof o ? e.format() : o.prototype.format.call(e)
            }, n.Url = o;
            var a = /^([a-z0-9.+-]+:)/i,
                s = /:[0-9]*$/,
                u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                l = ["'"].concat(c),
                f = ["%", "/", "?", ";", "#"].concat(l),
                h = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                g = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                v = {
                    javascript: !0,
                    "javascript:": !0
                },
                m = {
                    javascript: !0,
                    "javascript:": !0
                },
                y = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                _ = e("querystring");
             function b(e, t, n) {
                if (e && i.isObject(e) && e instanceof o) return e;
                var r = new o;
                return r.parse(e, t, n), r
            }
            o.prototype.parse = function(e, t, n) {
                if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + p(e));
                var o = e.indexOf("?"),
                    s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                    c = e.split(s);
                c[0] = c[0].replace(/\\/g, "/");
                var b = e = c.join(s);
                if (b = b.trim(), !n && 1 === e.split("#").length) {
                    var w = u.exec(b);
                    if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? _.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                }
                var x = a.exec(b);
                if (x) {
                    var k = (x = x[0]).toLowerCase();
                    this.protocol = k, b = b.substr(x.length)
                }
                if (n || x || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var S = "//" === b.substr(0, 2);
                    !S || x && m[x] || (b = b.substr(2), this.slashes = !0)
                }
                if (!m[x] && (S || x && !y[x])) {
                    for (var T, I, E = -1, A = 0; A < h.length; A++) - 1 !== (C = b.indexOf(h[A])) && (-1 === E || C < E) && (E = C);
                    for (-1 !== (I = -1 === E ? b.lastIndexOf("@") : b.lastIndexOf("@", E)) && (T = b.slice(0, I), b = b.slice(I + 1), this.auth = decodeURIComponent(T)), E = -1, A = 0; A < f.length; A++) {
                        var C; - 1 !== (C = b.indexOf(f[A])) && (-1 === E || C < E) && (E = C)
                    } - 1 === E && (E = b.length), this.host = b.slice(0, E), b = b.slice(E), this.parseHost(), this.hostname = this.hostname || "";
                    var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!O)
                        for (var B = this.hostname.split(/\./), P = (A = 0, B.length); A < P; A++) {
                            var F = B[A];
                            if (F && !F.match(d)) {
                                for (var j = "", R = 0, L = F.length; R < L; R++) F.charCodeAt(R) > 127 ? j += "x" : j += F[R];
                                if (!j.match(d)) {
                                    var M = B.slice(0, A),
                                        U = B.slice(A + 1),
                                        D = F.match(g);
                                    D && (M.push(D[1]), U.unshift(D[2])), U.length && (b = "/" + U.join(".") + b), this.hostname = M.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = r.toASCII(this.hostname));
                    var N = this.port ? ":" + this.port : "",
                        q = this.hostname || "";
                    this.host = q + N, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
                }
                if (!v[k])
                    for (A = 0, P = l.length; A < P; A++) {
                        var z = l[A];
                        if (-1 !== b.indexOf(z)) {
                            var $ = encodeURIComponent(z);
                            $ === z && ($ = escape(z)), b = b.split(z).join($)
                        }
                    }
                var H = b.indexOf("#"); - 1 !== H && (this.hash = b.substr(H), b = b.slice(0, H));
                var K = b.indexOf("?");
                if (-1 !== K ? (this.search = b.substr(K), this.query = b.substr(K + 1), t && (this.query = _.parse(this.query)), b = b.slice(0, K)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    N = this.pathname || "";
                    var V = this.search || "";
                    this.path = N + V
                }
                return this.href = this.format(), this
            }, o.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    n = this.pathname || "",
                    r = this.hash || "",
                    o = !1,
                    a = "";
                this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = _.stringify(this.query));
                var s = this.search || a && "?" + a || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (n = n.replace(/[?#]/g, (function(e) {
                    return encodeURIComponent(e)
                }))) + (s = s.replace("#", "%23")) + r
            }, o.prototype.resolve = function(e) {
                return this.resolveObject(b(e, !1, !0)).format()
            }, o.prototype.resolveObject = function(e) {
                if (i.isString(e)) {
                    var t = new o;
                    t.parse(e, !1, !0), e = t
                }
                for (var n = new o, r = Object.keys(this), a = 0; a < r.length; a++) {
                    var s = r[a];
                    n[s] = this[s]
                }
                if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
                if (e.slashes && !e.protocol) {
                    for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                        var l = u[c];
                        "protocol" !== l && (n[l] = e[l])
                    }
                    return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                }
                if (e.protocol && e.protocol !== n.protocol) {
                    if (!y[e.protocol]) {
                        for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                            var p = f[h];
                            n[p] = e[p]
                        }
                        return n.href = n.format(), n
                    }
                    if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
                    else {
                        for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/")
                    }
                    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                        var g = n.pathname || "",
                            v = n.search || "";
                        n.path = g + v
                    }
                    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
                }
                var _ = n.pathname && "/" === n.pathname.charAt(0),
                    b = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    w = b || _ || n.host && e.pathname,
                    x = w,
                    k = n.pathname && n.pathname.split("/") || [],
                    S = (d = e.pathname && e.pathname.split("/") || [], n.protocol && !y[n.protocol]);
                if (S && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), w = w && ("" === d[0] || "" === k[0])), b) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, k = d;
                else if (d.length) k || (k = []), k.pop(), k = k.concat(d), n.search = e.search, n.query = e.query;
                else if (!i.isNullOrUndefined(e.search)) return S && (n.hostname = n.host = k.shift(), (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = C.shift(), n.host = n.hostname = C.shift())), n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
                if (!k.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                for (var T = k.slice(-1)[0], I = (n.host || e.host || k.length > 1) && ("." === T || ".." === T) || "" === T, E = 0, A = k.length; A >= 0; A--) "." === (T = k[A]) ? k.splice(A, 1) : ".." === T ? (k.splice(A, 1), E++) : E && (k.splice(A, 1), E--);
                if (!w && !x)
                    for (; E--; E) k.unshift("..");
                !w || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), I && "/" !== k.join("/").substr(-1) && k.push("");
                var C, O = "" === k[0] || k[0] && "/" === k[0].charAt(0);
                return S && (n.hostname = n.host = O ? "" : k.length ? k.shift() : "", (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = C.shift(), n.host = n.hostname = C.shift())), (w = w || n.host && k.length) && !O && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }, o.prototype.parseHost = function() {
                var e = this.host,
                    t = s.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        }, {
            "./util": 133,
            punycode: 101,
            querystring: 104
        }],
        133: [function(e, t, n) {
            t.exports = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isObject: function(e) {
                    return "object" == p(e) && null !== e
                },
                isNull: function(e) {
                    return null === e
                },
                isNullOrUndefined: function(e) {
                    return null == e
                }
            }
        }, {}],
        134: [function(e, t, n) {
            (function(e) {
                function n(t) {
                    try {
                        if (!e.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    var n = e.localStorage[t];
                    return null != n && "true" === String(n).toLowerCase()
                }
                t.exports = function(e, t) {
                    if (n("noDeprecation")) return e;
                    var r = !1;
                    return function() {
                        if (!r) {
                            if (n("throwDeprecation")) throw new Error(t);
                            n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }).call(this, void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        135: [function(e, t, n) {
            t.exports = function(e) {
                return e && "object" == p(e) && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
            }
        }, {}],
        136: [function(e, t, n) {
            (function(t, r) {
                var i = /%[sdj%]/g;
                n.format = function(e) {
                    if (!_(e)) {
                        for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
                        return t.join(" ")
                    }
                    n = 1;
                    for (var r = arguments, o = r.length, a = String(e).replace(i, (function(e) {
                            if ("%%" === e) return "%";
                            if (n >= o) return e;
                            switch (e) {
                                case "%s":
                                    return String(r[n++]);
                                case "%d":
                                    return Number(r[n++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(r[n++])
                                    } catch (e) {
                                        return "[Circular]"
                                    }
                                default:
                                    return e
                            }
                        })), u = r[n]; n < o; u = r[++n]) m(u) || !x(u) ? a += " " + u : a += " " + s(u);
                    return a
                }, n.deprecate = function(e, i) {
                    if (b(r.process)) return function() {
                        return n.deprecate(e, i).apply(this, arguments)
                    };
                    if (!0 === t.noDeprecation) return e;
                    var o = !1;
                    return function() {
                        if (!o) {
                            if (t.throwDeprecation) throw new Error(i);
                            t.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                        }
                        return e.apply(this, arguments)
                    }
                };
                var o, a = {};
                 function s(e, t) {
                    var r = {
                        seen: [],
                        stylize: c
                    };
                    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), v(t) ? r.showHidden = t : t && n._extend(r, t), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), l(r, e, r.depth)
                }
                 function u(e, t) {
                    var n = s.styles[t];
                    return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e
                }
                 function c(e, t) {
                    return e
                }
                 function l(e, t, r) {
                    if (e.customInspect && t && T(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                        var i = t.inspect(r, e);
                        return _(i) || (i = l(e, i, r)), i
                    }
                    var o = f(e, t);
                    if (o) return o;
                    var a = Object.keys(t),
                        s = function(e) {
                            var t = {};
                            return e.forEach((function(e, n) {
                                t[e] = !0
                            })), t
                        }(a);
                    if (e.showHidden && (a = Object.getOwnPropertyNames(t)), S(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(t);
                    if (0 === a.length) {
                        if (T(t)) {
                            var u = t.name ? ": " + t.name : "";
                            return e.stylize("[Function" + u + "]", "special")
                        }
                        if (w(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                        if (k(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                        if (S(t)) return h(t)
                    }
                    var c, p = "",
                        v = !1,
                        m = ["{", "}"];
                    return g(t) && (v = !0, m = ["[", "]"]), T(t) && (p = " [Function" + (t.name ? ": " + t.name : "") + "]"), w(t) && (p = " " + RegExp.prototype.toString.call(t)), k(t) && (p = " " + Date.prototype.toUTCString.call(t)), S(t) && (p = " " + h(t)), 0 !== a.length || v && 0 != t.length ? r < 0 ? w(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), c = v ? function(e, t, n, r, i) {
                        for (var o = [], a = 0, s = t.length; a < s; ++a) O(t, String(a)) ? o.push(d(e, t, n, r, String(a), !0)) : o.push("");
                        return i.forEach((function(i) {
                            i.match(/^\d+$/) || o.push(d(e, t, n, r, i, !0))
                        })), o
                    }(e, t, r, s, a) : a.map((function(n) {
                        return d(e, t, r, s, n, v)
                    })), e.seen.pop(), function(e, t, n) {
                        return e.reduce((function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }), 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
                    }(c, p, m)) : m[0] + p + m[1]
                }
                 function f(e, t) {
                    if (b(t)) return e.stylize("undefined", "undefined");
                    if (_(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    return y(t) ? e.stylize("" + t, "number") : v(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
                }
                 function h(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }
                 function d(e, t, n, r, i, o) {
                    var a, s, u;
                    if ((u = Object.getOwnPropertyDescriptor(t, i) || {
                            value: t[i]
                        }).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), O(r, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = m(n) ? l(e, u.value, null) : l(e, u.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map((function(e) {
                            return "  " + e
                        })).join("\n").substr(2) : "\n" + s.split("\n").map((function(e) {
                            return "   " + e
                        })).join("\n")) : s = e.stylize("[Circular]", "special")), b(a)) {
                        if (o && i.match(/^\d+$/)) return s;
                        (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                    }
                    return a + ": " + s
                }
                 function g(e) {
                    return Array.isArray(e)
                }
                 function v(e) {
                    return "boolean" == typeof e
                }
                 function m(e) {
                    return null === e
                }
                 function y(e) {
                    return "number" == typeof e
                }
                 function _(e) {
                    return "string" == typeof e
                }
                 function b(e) {
                    return void 0 === e
                }
                 function w(e) {
                    return x(e) && "[object RegExp]" === I(e)
                }
                 function x(e) {
                    return "object" == p(e) && null !== e
                }
                 function k(e) {
                    return x(e) && "[object Date]" === I(e)
                }
                 function S(e) {
                    return x(e) && ("[object Error]" === I(e) || e instanceof Error)
                }
                 function T(e) {
                    return "function" == typeof e
                }
                 function I(e) {
                    return Object.prototype.toString.call(e)
                }
                 function E(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }
                n.debuglog = function(e) {
                    if (b(o) && (o = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e])
                        if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                            var r = t.pid;
                            a[e] = function() {
                                var t = n.format.apply(n, arguments);
                                console.error("%s %d: %s", e, r, t)
                            }
                        } else a[e] = function() {};
                    return a[e]
                }, n.inspect = s, s.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                }, s.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, n.isArray = g, n.isBoolean = v, n.isNull = m, n.isNullOrUndefined = function(e) {
                    return null == e
                }, n.isNumber = y, n.isString = _, n.isSymbol = function(e) {
                    return "symbol" == p(e)
                }, n.isUndefined = b, n.isRegExp = w, n.isObject = x, n.isDate = k, n.isError = S, n.isFunction = T, n.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == p(e) || void 0 === e
                }, n.isBuffer = e("./support/isBuffer");
                var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                 function C() {
                    var e = new Date,
                        t = [E(e.getHours()), E(e.getMinutes()), E(e.getSeconds())].join(":");
                    return [e.getDate(), A[e.getMonth()], t].join(" ")
                }
                 function O(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                n.log = function() {
                    console.log("%s - %s", C(), n.format.apply(n, arguments))
                }, n.inherits = e("inherits"), n._extend = function(e, t) {
                    if (!t || !x(t)) return e;
                    for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                    return e
                }
            }).call(this, e("_process"), void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./support/isBuffer": 135,
            _process: 100,
            inherits: 88
        }],
        137: [function(e, t, n) {
            (function(n, r) {
                var i = e("readable-stream").Transform,
                    o = e("duplexify"),
                    a = e("ws"),
                    s = e("safe-buffer").Buffer;
                 function u(e, t, n) {
                    var r = new i({
                        objectMode: e.objectMode
                    });
                    return r._write = t, r._flush = n, r
                }
                t.exports = function(e, t, i) {
                    var c, l, f = "browser" === n.title,
                        h = !!r.WebSocket,
                        d = f ? function e(t, n, r) {
                            if (l.bufferedAmount > v) setTimeout(e, m, t, n, r);
                            else {
                                y && "string" == typeof t && (t = s.from(t, "utf8"));
                                try {
                                    l.send(t)
                                } catch (e) {
                                    return r(e)
                                }
                                r()
                            }
                        } : function(e, t, n) {
                            l.readyState === l.OPEN ? (y && "string" == typeof e && (e = s.from(e, "utf8")), l.send(e, n)) : n()
                        };
                    t && !Array.isArray(t) && "object" == p(t) && (i = t, t = null, ("string" == typeof i.protocol || Array.isArray(i.protocol)) && (t = i.protocol)), i || (i = {}), void 0 === i.objectMode && (i.objectMode = !(!0 === i.binary || void 0 === i.binary));
                    var g = u(i, d, (function(e) {
                        l.close(), e()
                    }));
                    i.objectMode || (g._writev = function(e, t) {
                        for (var n = new Array(e.length), r = 0; r < e.length; r++) "string" == typeof e[r].chunk ? n[r] = s.from(e[r], "utf8") : n[r] = e[r].chunk;
                        this._write(s.concat(n), "binary", t)
                    });
                    var v = i.browserBufferSize || 524288,
                        m = i.browserBufferTimeout || 1e3;
                    "object" == p(e) ? l = e : (l = h && f ? new a(e, t) : new a(e, t, i)).binaryType = "arraybuffer", l.readyState === l.OPEN ? c = g : (c = o.obj(), l.onopen = function() {
                        c.setReadable(g), c.setWritable(g), c.emit("connect")
                    }), c.socket = l, l.onclose = function() {
                        c.end(), c.destroy()
                    }, l.onerror = function(e) {
                        c.destroy(e)
                    }, l.onmessage = function(e) {
                        var t = e.data;
                        t = t instanceof ArrayBuffer ? s.from(t) : s.from(t, "utf8"), g.push(t)
                    }, g.on("close", (function() {
                        l.close()
                    }));
                    var y = !i.objectMode;
                    return c
                }
            }).call(this, e("_process"), void 0 !== Uc ? Uc : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            _process: 100,
            duplexify: 19,
            "readable-stream": 116,
            "safe-buffer": 118,
            ws: 138
        }],
        138: [function(e, t, n) {
            var r = null;
            "undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof MozWebSocket ? r = MozWebSocket : "undefined" != typeof window && (r = window.WebSocket || window.MozWebSocket), t.exports = r
        }, {}],
        139: [function(e, t, n) {
            t.exports = function e(t, n) {
                if (t && n) return e(t)(n);
                if ("function" != typeof t) throw new TypeError("need wrapper function");
                return Object.keys(t).forEach((function(e) {
                    r[e] = t[e]
                })), r;
                 function r() {
                    for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
                    var r = t.apply(this, e),
                        i = e[e.length - 1];
                    return "function" == typeof r && r !== i && Object.keys(i).forEach((function(e) {
                        r[e] = i[e]
                    })), r
                }
            }
        }, {}],
        140: [function(e, t, n) {
            t.exports = function() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) r.call(n, i) && (e[i] = n[i])
                }
                return e
            };
            var r = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [9])(9)),
    uf = {
        pages: [{
            path: "pages/welcome/index",
            style: {
                navigationBarTitleText: "北京大学口腔医院",
                usingComponents: {
                    "privacy-agreement": "/components/privacyAgreement/index"
                }
            }
        }, {
            path: "pages/ceshi/index",
            style: {
                navigationBarTitleText: "测试页面",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/home/index",
            style: {
                navigationBarTitleText: "北京大学口腔医院",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/comprehensive/index",
            style: {
                navigationBarTitleText: "综合",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/online/index",
            style: {
                navigationBarTitleText: "互联网诊疗",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/webView/index",
            style: {
                navigationBarTitleText: "",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/kpxj/index",
            style: {
                navigationBarTitleText: "科普宣教",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/mine/index",
            style: {
                navigationBarTitleText: "我的",
                navigationBarTextStyle: "black"
            }
        }, {
            path: "pages/select/index",
            style: {
                navigationBarTitleText: "机构选择",
                navigationBarBackgroundColor: "#FFF"
            }
        }, {
            path: "pages/out-of-service/index",
            style: {
                navigationBarTitleText: "北京大学口腔医院",
                navigationBarBackgroundColor: "#FFF"
            }
        }],
        subPackages: [{
            root: "intelligent",
            pages: [{
                path: "syhy/index",
                style: {
                    navigationBarTitleText: "剩余号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yxzs/index",
                style: {
                    navigationBarTitleText: "医学知识",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "ggList/index",
                style: {
                    navigationBarTitleText: "公告列表",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "ggxq/index",
                style: {
                    navigationBarTitleText: "公告详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "gzgzh/index",
                style: {
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "report/index",
                style: {
                    navigationBarTitleText: "我的报告",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/jzrrz/index",
                style: {
                    navigationBarTitleText: "实名认证",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/info/index",
                style: {
                    navigationBarTitleText: "实名认证",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/manage/index",
                style: {
                    navigationBarTitleText: "就诊人管理",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/hzjd/index",
                style: {
                    navigationBarTitleText: "身份证建档",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/addOther/index",
                style: {
                    navigationBarTitleText: "添加就诊人",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/addOtherType/index",
                style: {
                    navigationBarTitleText: "信息填写",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/sczj/index",
                style: {
                    navigationBarTitleText: "上传证件",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/rzjg/index",
                style: {
                    navigationBarTitleText: "提交结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/quickSign/index",
                style: {
                    navigationBarTitleText: "身份认证",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/yhxy/index",
                style: {
                    navigationBarTitleText: "用户协议",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/yszc/index",
                style: {
                    navigationBarTitleText: "隐私政策",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/list/index",
                style: {
                    navigationBarTitleText: "协议政策",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "jzr/wsxx/index",
                style: {
                    navigationBarTitleText: "完善信息",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/xzjzr/index",
                style: {
                    navigationBarTitleText: "选择就诊人",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/xzks/index",
                style: {
                    navigationBarTitleText: "选择科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/ssks/index",
                style: {
                    navigationBarTitleText: "搜索科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/xzys/index",
                style: {
                    navigationBarTitleText: "选择医生",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/xzhy/index",
                style: {
                    navigationBarTitleText: "选择号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/otherAreaSource/index",
                style: {
                    navigationBarTitleText: "该医生其他院区号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yygh/result/index",
                style: {
                    navigationBarTitleText: "待支付",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "xgzy/index",
                style: {
                    navigationBarTitleText: "相关专业号源推荐",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzjzr/index",
                style: {
                    navigationBarTitleText: "选择就诊人",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzks/index",
                style: {
                    navigationBarTitleText: "选择科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzys/index",
                style: {
                    navigationBarTitleText: "选择医生",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzhy/index",
                style: {
                    navigationBarTitleText: "选择号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/otherAreaSource/index",
                style: {
                    navigationBarTitleText: "该医生其他院区号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/result/index",
                style: {
                    navigationBarTitleText: "待支付",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/ghjl/index",
                style: {
                    navigationBarTitleText: "挂号记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/syjl/index",
                style: {
                    navigationBarTitleText: "爽约记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yqSearch/index",
                style: {
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hygs/gsSearch/index",
                style: {
                    navigationBarTitleText: "号源公示",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hygs/xzks/index",
                style: {
                    navigationBarTitleText: "选择科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hygs/ssks/index",
                style: {
                    navigationBarTitleText: "搜索科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hygs/index/index",
                style: {
                    navigationBarTitleText: "号源公示",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/yyjj/index",
                style: {
                    navigationBarTitleText: "医院简介",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/ksjs/index",
                style: {
                    navigationBarTitleText: "特色科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/ksxq/index",
                style: {
                    navigationBarTitleText: "科室详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/ysjs/index",
                style: {
                    navigationBarTitleText: "医生介绍",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/ysxq/index",
                style: {
                    navigationBarTitleText: "医生详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/lcfb/index",
                style: {
                    navigationBarTitleText: "楼层分布",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/jyzn/index",
                style: {
                    navigationBarTitleText: "就医指南",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/syzn/index",
                style: {
                    navigationBarTitleText: "使用指南",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hospital/ynbm/index",
                style: {
                    navigationBarTitleText: "院内便民",
                    navigationBarBackgroundColor: "#D9ECFF",
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "hospital/drugList/index",
                style: {
                    navigationBarTitleText: "药品",
                    navigationBarBackgroundColor: "#FFF",
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "hospital/drugDetail/index",
                style: {
                    navigationBarTitleText: "药品",
                    navigationBarBackgroundColor: "#FFF",
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "hospital/gywm/index",
                style: {
                    navigationBarTitleText: "关于我们",
                    navigationBarBackgroundColor: "#FFF",
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "hospital/yyfw/index",
                style: {
                    navigationBarTitleText: "预约服务协议",
                    navigationBarBackgroundColor: "#FFF",
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "jzRecord/index",
                style: {
                    navigationBarTitleText: "就诊记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "hztxRecord/index",
                style: {
                    navigationBarTitleText: "候诊提醒",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "yhcxRecord/index",
                style: {
                    navigationBarTitleText: "余号查询",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "xzjzr/index",
                style: {
                    navigationBarTitleText: "选择就诊人",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "downloadCf/index",
                style: {
                    navigationBarTitleText: "处方下载",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "cydyRecord/index",
                style: {
                    navigationBarTitleText: "出院带药",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "cyxjRecord/index",
                style: {
                    navigationBarTitleText: "出院小结",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "cyjsRecord/index",
                style: {
                    navigationBarTitleText: "出院结算",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "cyjsjg/index",
                style: {
                    navigationBarTitleText: "出院结算",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/zydj/index",
                style: {
                    navigationBarTitleText: "住院登记",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/zyzq/index",
                style: {
                    navigationBarTitleText: "住院专区",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/paying/index",
                style: {
                    navigationBarTitleText: "住院预交",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/payResult/index",
                style: {
                    navigationBarTitleText: "预交结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/paidRecord/index",
                style: {
                    navigationBarTitleText: "预交记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/beforeInHosPaying/index",
                style: {
                    navigationBarTitleText: "住院预交",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "inHospital/beforeInHosPayResult/index",
                style: {
                    navigationBarTitleText: "预交结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/waitToPay/index",
                style: {
                    navigationBarTitleText: "门诊缴费",
                    navigationBarBackgroundColor: "#FFF",
                    usingComponents: {
                        "choose-pay-type": "/components/choosePayType/index"
                    }
                }
            }, {
                path: "mzjf/detail/index",
                style: {
                    navigationBarTitleText: "费用清单",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/payResult/index",
                style: {
                    navigationBarTitleText: "缴费结果",
                    navigationBarBackgroundColor: "#3F8884",
                    navigationBarTextStyle: "white"
                }
            }, {
                path: "mzjf/mzfyRecord/index",
                style: {
                    navigationBarTitleText: "门诊费用",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "chatbot/index",
                style: {
                    navigationBarTitleText: "AI就医助手",
                    navigationBarBackgroundColor: "#FFF",
                    usingComponents: {
                        "agent-ui": "/wxcomponents/agent-ui/index"
                    }
                }
            }, {
                path: "fzyyRecord/index",
                style: {
                    navigationBarTitleText: "复诊预约查询",
                    navigationBarBackgroundColor: "#FFF"
                }
            }]
        }, {
            root: "internet",
            pages: [{
                path: "onlineConsultation/selectDoctor",
                style: {
                    navigationBarTitleText: "选择护士",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "onlineConsultation/doctorHome",
                style: {
                    navigationBarTitleText: "护士主页",
                    navigationBarBackgroundColor: "#EEFEF9"
                }
            }, {
                path: "onlineConsultation/confirm",
                style: {
                    navigationBarTitleText: "提交问诊",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "onlineConsultation/result",
                style: {
                    navigationBarTitleText: "问诊结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "onlineConsultation/record",
                style: {
                    navigationBarTitleText: "问诊记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "onlineConsultation/chatPage",
                style: {
                    navigationBarTitleText: "在线问诊",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "onlineConsultation/evaluate/index",
                style: {
                    navigationBarTitleText: "问诊评价",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "information/doctorReview/index",
                style: {
                    navigationBarTitleText: "护士评价",
                    navigationBarBackgroundColor: "#E1FAEBFF"
                }
            }, {
                path: "setup/index",
                style: {
                    navigationBarTitleText: "消息设置",
                    navigationBarBackgroundColor: "#FFF"
                }
            }]
        }, {
            root: "careModel",
            pages: [{
                path: "mine/index",
                style: {
                    navigationBarTitleText: "个人中心",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "switchPage/index",
                style: {
                    navigationBarTitleText: "关怀模式",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "xzjzr/index",
                style: {
                    navigationBarTitleText: "选择就诊人",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/select/index",
                style: {
                    navigationBarTitleText: "选择院区",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/deptSearchOne/index",
                style: {
                    navigationBarTitleText: "选择科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/deptSearchTwo/index",
                style: {
                    navigationBarTitleText: "选择二级科室",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzys/index",
                style: {
                    navigationBarTitleText: "选择医生",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/xzhy/index",
                style: {
                    navigationBarTitleText: "选择号源",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/confirm/index",
                style: {
                    navigationBarTitleText: "挂号提交",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/payResult/index",
                style: {
                    navigationBarTitleText: "支付结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/record/index",
                style: {
                    navigationBarTitleText: "挂号记录",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "dtgh/recordDetail/index",
                style: {
                    navigationBarTitleText: "挂号详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/waitToPay/index",
                style: {
                    navigationBarTitleText: "待缴费列表",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/detail/index",
                style: {
                    navigationBarTitleText: "缴费详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/payResult/index",
                style: {
                    navigationBarTitleText: "缴费结果",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "mzjf/mzfyRecord/index",
                style: {
                    navigationBarTitleText: "门诊费用",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "report/record/index",
                style: {
                    navigationBarTitleText: "报告列表",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "report/detail/index",
                style: {
                    navigationBarTitleText: "报告详情",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "h5/index",
                style: {
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#FFF"
                }
            }, {
                path: "pay/index",
                style: {
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#FFF"
                }
            }]
        }],
        globalStyle: {
            navigationBarTextStyle: "black",
            navigationBarTitleText: "uni-app",
            navigationBarBackgroundColor: "#F8F8F8",
            backgroundColor: "#F8F8F8"
        },
        uniIdRouter: {},
        tabBar: {
            selectedColor: "#3F8884",
            list: [{
                pagePath: "pages/home/index",
                iconPath: "/static/sy-02.png",
                selectedIconPath: "/static/sy-01.png",
                text: "首页"
            }, {
                pagePath: "pages/comprehensive/index",
                iconPath: "/static/zh-02.png",
                selectedIconPath: "/static/zh-01.png",
                text: "综合"
            }, {
                pagePath: "pages/mine/index",
                iconPath: "/static/wd-02.png",
                selectedIconPath: "/static/wd-01.png",
                text: "我的"
            }]
        },
        easycom: {
            autoscan: !0,
            custom: {
                "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
            }
        }
    };
 function cf(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var lf = cf((function(e, t) {
        var n;
        e.exports = n = n || function(e, t) {
            var n = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t, n = new e, e.prototype = null, n
                    }
                }(),
                r = {},
                i = r.lib = {},
                o = i.Base = {
                    extend: function(e) {
                        var t = n(this);
                        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }), t.init.prototype = t, t.$super = this, t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                a = i.WordArray = o.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || u).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            r = this.sigBytes,
                            i = e.sigBytes;
                        if (this.clamp(), r % 4)
                            for (var o = 0; o < i; o++) {
                                var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                t[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                            } else
                                for (o = 0; o < i; o += 4) t[r + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += i, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n, r = [], i = function(t) {
                                var n = 987654321,
                                    r = 4294967295;
                                return function() {
                                    var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                    return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1)
                                }
                            }, o = 0; o < t; o += 4) {
                            var s = i(4294967296 * (n || e.random()));
                            n = 987654071 * s(), r.push(4294967296 * s() | 0)
                        }
                        return new a.init(r, t)
                    }
                }),
                s = r.enc = {},
                u = s.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new a.init(n, t / 2)
                    }
                },
                c = s.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(n, t)
                    }
                },
                l = s.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(c.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return c.parse(unescape(encodeURIComponent(e)))
                    }
                },
                f = i.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new a.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            r = n.words,
                            i = n.sigBytes,
                            o = this.blockSize,
                            s = i / (4 * o),
                            u = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o,
                            c = e.min(4 * u, i);
                        if (u) {
                            for (var l = 0; l < u; l += o) this._doProcessBlock(r, l);
                            var f = r.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new a.init(f, c)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                });
            i.Hasher = f.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                },
                reset: function() {
                    f.reset.call(this), this._doReset()
                },
                update: function(e) {
                    return this._append(e), this._process(), this
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new h.HMAC.init(e, n).finalize(t)
                    }
                }
            });
            var h = r.algo = {};
            return r
        }(Math)
    })),
    ff = (cf((function(e, t) {
        var n;
        e.exports = (n = lf, function(e) {
            var t = n,
                r = t.lib,
                i = r.WordArray,
                o = r.Hasher,
                a = t.algo,
                s = [];
            ! function() {
                for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
            }();
            var u = a.MD5 = o.extend({
                _doReset: function() {
                    this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, t) {
                    for (var n = 0; n < 16; n++) {
                        var r = t + n,
                            i = e[r];
                        e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                    }
                    var o = this._hash.words,
                        a = e[t + 0],
                        u = e[t + 1],
                        p = e[t + 2],
                        d = e[t + 3],
                        g = e[t + 4],
                        v = e[t + 5],
                        m = e[t + 6],
                        y = e[t + 7],
                        _ = e[t + 8],
                        b = e[t + 9],
                        w = e[t + 10],
                        x = e[t + 11],
                        k = e[t + 12],
                        S = e[t + 13],
                        T = e[t + 14],
                        I = e[t + 15],
                        E = o[0],
                        A = o[1],
                        C = o[2],
                        O = o[3];
                    E = c(E, A, C, O, a, 7, s[0]), O = c(O, E, A, C, u, 12, s[1]), C = c(C, O, E, A, p, 17, s[2]), A = c(A, C, O, E, d, 22, s[3]), E = c(E, A, C, O, g, 7, s[4]), O = c(O, E, A, C, v, 12, s[5]), C = c(C, O, E, A, m, 17, s[6]), A = c(A, C, O, E, y, 22, s[7]), E = c(E, A, C, O, _, 7, s[8]), O = c(O, E, A, C, b, 12, s[9]), C = c(C, O, E, A, w, 17, s[10]), A = c(A, C, O, E, x, 22, s[11]), E = c(E, A, C, O, k, 7, s[12]), O = c(O, E, A, C, S, 12, s[13]), C = c(C, O, E, A, T, 17, s[14]), E = l(E, A = c(A, C, O, E, I, 22, s[15]), C, O, u, 5, s[16]), O = l(O, E, A, C, m, 9, s[17]), C = l(C, O, E, A, x, 14, s[18]), A = l(A, C, O, E, a, 20, s[19]), E = l(E, A, C, O, v, 5, s[20]), O = l(O, E, A, C, w, 9, s[21]), C = l(C, O, E, A, I, 14, s[22]), A = l(A, C, O, E, g, 20, s[23]), E = l(E, A, C, O, b, 5, s[24]), O = l(O, E, A, C, T, 9, s[25]), C = l(C, O, E, A, d, 14, s[26]), A = l(A, C, O, E, _, 20, s[27]), E = l(E, A, C, O, S, 5, s[28]), O = l(O, E, A, C, p, 9, s[29]), C = l(C, O, E, A, y, 14, s[30]), E = f(E, A = l(A, C, O, E, k, 20, s[31]), C, O, v, 4, s[32]), O = f(O, E, A, C, _, 11, s[33]), C = f(C, O, E, A, x, 16, s[34]), A = f(A, C, O, E, T, 23, s[35]), E = f(E, A, C, O, u, 4, s[36]), O = f(O, E, A, C, g, 11, s[37]), C = f(C, O, E, A, y, 16, s[38]), A = f(A, C, O, E, w, 23, s[39]), E = f(E, A, C, O, S, 4, s[40]), O = f(O, E, A, C, a, 11, s[41]), C = f(C, O, E, A, d, 16, s[42]), A = f(A, C, O, E, m, 23, s[43]), E = f(E, A, C, O, b, 4, s[44]), O = f(O, E, A, C, k, 11, s[45]), C = f(C, O, E, A, I, 16, s[46]), E = h(E, A = f(A, C, O, E, p, 23, s[47]), C, O, a, 6, s[48]), O = h(O, E, A, C, y, 10, s[49]), C = h(C, O, E, A, T, 15, s[50]), A = h(A, C, O, E, v, 21, s[51]), E = h(E, A, C, O, k, 6, s[52]), O = h(O, E, A, C, d, 10, s[53]), C = h(C, O, E, A, w, 15, s[54]), A = h(A, C, O, E, u, 21, s[55]), E = h(E, A, C, O, _, 6, s[56]), O = h(O, E, A, C, I, 10, s[57]), C = h(C, O, E, A, m, 15, s[58]), A = h(A, C, O, E, S, 21, s[59]), E = h(E, A, C, O, g, 6, s[60]), O = h(O, E, A, C, x, 10, s[61]), C = h(C, O, E, A, p, 15, s[62]), A = h(A, C, O, E, b, 21, s[63]), o[0] = o[0] + E | 0, o[1] = o[1] + A | 0, o[2] = o[2] + C | 0, o[3] = o[3] + O | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        n = t.words,
                        r = 8 * this._nDataBytes,
                        i = 8 * t.sigBytes;
                    n[i >>> 5] |= 128 << 24 - i % 32;
                    var o = e.floor(r / 4294967296),
                        a = r;
                    n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                    for (var s = this._hash, u = s.words, c = 0; c < 4; c++) {
                        var l = u[c];
                        u[c] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    return s
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            });
             function c(e, t, n, r, i, o, a) {
                var s = e + (t & n | ~t & r) + i + a;
                return (s << o | s >>> 32 - o) + t
            }
             function l(e, t, n, r, i, o, a) {
                var s = e + (t & r | n & ~r) + i + a;
                return (s << o | s >>> 32 - o) + t
            }
             function f(e, t, n, r, i, o, a) {
                var s = e + (t ^ n ^ r) + i + a;
                return (s << o | s >>> 32 - o) + t
            }
             function h(e, t, n, r, i, o, a) {
                var s = e + (n ^ (t | ~r)) + i + a;
                return (s << o | s >>> 32 - o) + t
            }
            t.MD5 = o._createHelper(u), t.HmacMD5 = o._createHmacHelper(u)
        }(Math), n.MD5)
    })), cf((function(e, t) {
        var n, r, i;
        e.exports = (r = (n = lf).lib.Base, i = n.enc.Utf8, void(n.algo.HMAC = r.extend({
            init: function(e, t) {
                e = this._hasher = new e.init, "string" == typeof t && (t = i.parse(t));
                var n = e.blockSize,
                    r = 4 * n;
                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                for (var o = this._oKey = t.clone(), a = this._iKey = t.clone(), s = o.words, u = a.words, c = 0; c < n; c++) s[c] ^= 1549556828, u[c] ^= 909522486;
                o.sigBytes = a.sigBytes = r, this.reset()
            },
            reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey)
            },
            update: function(e) {
                return this._hasher.update(e), this
            },
            finalize: function(e) {
                var t = this._hasher,
                    n = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(n))
            }
        })))
    })), cf((function(e, t) {
        e.exports = lf.HmacMD5
    }))),
    hf = cf((function(e, t) {
        e.exports = lf.enc.Utf8
    })),
    pf = cf((function(e, t) {
        var n, r, i;
        e.exports = (i = (r = n = lf).lib.WordArray, r.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    n = e.sigBytes,
                    r = this._map;
                e.clamp();
                for (var i = [], o = 0; o < n; o += 3)
                    for (var a = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < n; s++) i.push(r.charAt(a >>> 6 * (3 - s) & 63));
                var u = r.charAt(64);
                if (u)
                    for (; i.length % 4;) i.push(u);
                return i.join("")
            },
            parse: function(e) {
                var t = e.length,
                    n = this._map,
                    r = this._reverseMap;
                if (!r) {
                    r = this._reverseMap = [];
                    for (var o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o
                }
                var a = n.charAt(64);
                if (a) {
                    var s = e.indexOf(a); - 1 !== s && (t = s)
                }
                return function(e, t, n) {
                    for (var r = [], o = 0, a = 0; a < t; a++)
                        if (a % 4) {
                            var s = n[e.charCodeAt(a - 1)] << a % 4 * 2,
                                u = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                            r[o >>> 2] |= (s | u) << 24 - o % 4 * 8, o++
                        }
                    return i.create(r, o)
                }(e, t, r)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, n.enc.Base64)
    })),
    df = "uni_id_token",
    gf = "uni_id_token_expired",
    vf = "FUNCTION",
    mf = "OBJECT",
    yf = "pending",
    _f = "rejected";
 function bf(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
}
 function wf(e) {
    return "object" === bf(e)
}
 function xf(e) {
    return "function" == typeof e
}
 function kf(e) {
    return function() {
        try {
            return e.apply(e, arguments)
        } catch (e) {
            console.error(e)
        }
    }
}
var Sf = "REJECTED",
    Tf = "NOT_PENDING",
    If = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.createPromise,
                r = t.retryRule,
                i = void 0 === r ? Sf : r;
            u(this, e), this.createPromise = n, this.status = null, this.promise = null, this.retryRule = i
        }
        return c(e, [{
            key: "needRetry",
            get: function() {
                if (!this.status) return !0;
                switch (this.retryRule) {
                    case Sf:
                        return this.status === _f;
                    case Tf:
                        return this.status !== yf
                }
            }
        }, {
            key: "exec",
            value: function() {
                var e = this;
                return this.needRetry ? (this.status = yf, this.promise = this.createPromise().then((function(t) {
                    return e.status = "fulfilled", Promise.resolve(t)
                }), (function(t) {
                    return e.status = _f, Promise.reject(t)
                })), this.promise) : this.promise
            }
        }]), e
    }();
 function Ef(e) {
    return e && "string" == typeof e ? JSON.parse(e) : e
}
var Af = Ef([]);
Ef("");
var Cf = Ef("[]") || [];
try {
    "__UNI__E9A0D15"
} catch (lh) {}
var Of = {};
 function Bf(e) {
    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return t = Of, n = e, Object.prototype.hasOwnProperty.call(t, n) || (Of[e] = r), Of[e]
}
var Pf = ["invoke", "success", "fail", "complete"],
    Ff = Bf("_globalUniCloudInterceptor");
 function jf(e, t) {
    Ff[e] || (Ff[e] = {}), wf(t) && Object.keys(t).forEach((function(n) {
        Pf.indexOf(n) > -1 && function(e, t, n) {
            var r = Ff[e][t];
            r || (r = Ff[e][t] = []), -1 === r.indexOf(n) && xf(n) && r.push(n)
        }(e, n, t[n])
    }))
}
 function Rf(e, t) {
    Ff[e] || (Ff[e] = {}), wf(t) ? Object.keys(t).forEach((function(n) {
        Pf.indexOf(n) > -1 && function(e, t, n) {
            var r = Ff[e][t];
            if (r) {
                var i = r.indexOf(n);
                i > -1 && r.splice(i, 1)
            }
        }(e, n, t[n])
    })) : delete Ff[e]
}
 function Lf(e, t) {
    return e && 0 !== e.length ? e.reduce((function(e, n) {
        return e.then((function() {
            return n(t)
        }))
    }), Promise.resolve()) : Promise.resolve()
}
 function Mf(e, t) {
    return Ff[e] && Ff[e][t] || []
}
 function Uf(e) {
    jf("callObject", e)
}
var Df = Bf("_globalUniCloudListener"),
    Nf = "response",
    qf = "needLogin",
    zf = "refreshToken",
    $f = "clientdb",
    Hf = "cloudfunction",
    Kf = "cloudobject";
 function Vf(e) {
    return Df[e] || (Df[e] = []), Df[e]
}
 function Wf(e, t) {
    var n = Vf(e);
    n.includes(t) || n.push(t)
}
 function Zf(e, t) {
    var n = Vf(e),
        r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
}
 function Jf(e, t) {
    for (var n = Vf(e), r = 0; r < n.length; r++)(0, n[r])(t)
}
var Qf, Yf = !1;
 function Gf() {
    return Qf || (Qf = new Promise((function(e) {
        Yf && e(),
            function t() {
                if ("function" == typeof getCurrentPages) {
                    var n = getCurrentPages();
                    n && n[0] && (Yf = !0, e())
                }
                Yf || setTimeout((function() {
                    t()
                }), 30)
            }()
    })))
}
 function Xf(e) {
    var t = {};
    for (var n in e) {
        var r = e[n];
        xf(r) && (t[n] = kf(r))
    }
    return t
}
var eh, th, nh = function(e) {
        o(n, e);
        var t = a(n);
         function n(e) {
            var r;
            u(this, n);
            var i = e.message || e.errMsg || "unknown system error";
            return (r = t.call(this, i)).errMsg = i, r.code = r.errCode = e.code || e.errCode || "SYSTEM_ERROR", r.errSubject = r.subject = e.subject || e.errSubject, r.cause = e.cause, r.requestId = e.requestId, r
        }
        return c(n, [{
            key: "toJson",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!(e >= 10)) return e++, {
                    errCode: this.errCode,
                    errMsg: this.errMsg,
                    errSubject: this.errSubject,
                    cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
                }
            }
        }]), n
    }(i(Error)),
    rh = {
        request: function(e) {
            return sn.request(e)
        },
        uploadFile: function(e) {
            return sn.uploadFile(e)
        },
        setStorageSync: function(e, t) {
            return sn.setStorageSync(e, t)
        },
        getStorageSync: function(e) {
            return sn.getStorageSync(e)
        },
        removeStorageSync: function(e) {
            return sn.removeStorageSync(e)
        },
        clearStorageSync: function() {
            return sn.clearStorageSync()
        },
        connectSocket: function(e) {
            return sn.connectSocket(e)
        }
    };
 function ih() {
    return {
        token: rh.getStorageSync(df) || rh.getStorageSync("uniIdToken"),
        tokenExpired: rh.getStorageSync(gf)
    }
}
 function oh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.token,
        n = e.tokenExpired;
    t && rh.setStorageSync(df, t), n && rh.setStorageSync(gf, n)
}
 function ah() {
    return eh || (eh = an.canIUse("getAppBaseInfo") && an.canIUse("getDeviceInfo") ? r(r({}, sn.getAppBaseInfo()), sn.getDeviceInfo()) : sn.getSystemInfoSync()), eh
}
var sh = {};
 function uh() {
    var e = sn.getLocale && sn.getLocale() || "en";
    if (th) return r(r(r({}, sh), th), {}, {
        locale: e,
        LOCALE: e
    });
    var t = ah(),
        n = t.deviceId,
        i = t.osName,
        o = t.uniPlatform,
        a = t.appId,
        s = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (var u in t) Object.hasOwnProperty.call(t, u) && -1 === s.indexOf(u) && delete t[u];
    return th = r(r({
        PLATFORM: o,
        OS: i,
        APPID: a,
        DEVICEID: n
    }, function() {
        var e, t;
        try {
            if (sn.getLaunchOptionsSync) {
                if (sn.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
                var n = sn.getLaunchOptionsSync(),
                    r = n.scene;
                e = n.channel, t = r
            }
        } catch (e) {}
        return {
            channel: e,
            scene: t
        }
    }()), t), r(r(r({}, sh), th), {}, {
        locale: e,
        LOCALE: e
    })
}
var ch, lh, fh = function(e, t) {
        var n = "";
        return Object.keys(e).sort().forEach((function(t) {
            e[t] && (n = n + "&" + t + "=" + e[t])
        })), n = n.slice(1), ff(n, t).toString()
    },
    hh = function(e, t) {
        return new Promise((function(n, r) {
            t(Object.assign(e, {
                complete: function(e) {
                    e || (e = {});
                    var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                    if (!e.statusCode || e.statusCode >= 400) {
                        var i = e.data && e.data.error && e.data.error.code || "SYS_ERR",
                            o = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
                        return r(new nh({
                            code: i,
                            message: o,
                            requestId: t
                        }))
                    }
                    var a = e.data;
                    if (a.error) return r(new nh({
                        code: a.error.code,
                        message: a.error.message,
                        requestId: t
                    }));
                    a.result = a.data, a.requestId = t, delete a.data, n(a)
                }
            }))
        }))
    },
    ph = function(e) {
        return pf.stringify(hf.parse(e))
    },
    dh = {
        init: function(e) {
            var i = new(function() {
                    function e(t) {
                        var n = this;
                        u(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                            if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
                        })), this.config = Object.assign({}, {
                            endpoint: 0 === t.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
                        }, t), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = rh, this._getAccessTokenPromiseHub = new If({
                            createPromise: function() {
                                return n.requestAuth(n.setupRequest({
                                    method: "serverless.auth.user.anonymousAuthorize",
                                    params: "{}"
                                }, "auth")).then((function(e) {
                                    if (!e.result || !e.result.accessToken) throw new nh({
                                        code: "AUTH_FAILED",
                                        message: "获取accessToken失败"
                                    });
                                    n.setAccessToken(e.result.accessToken)
                                }))
                            },
                            retryRule: Tf
                        })
                    }
                    var i, o, a;
                    return c(e, [{
                        key: "hasAccessToken",
                        get: function() {
                            return !!this.accessToken
                        }
                    }, {
                        key: "setAccessToken",
                        value: function(e) {
                            this.accessToken = e
                        }
                    }, {
                        key: "requestWrapped",
                        value: function(e) {
                            return hh(e, this.adapter.request)
                        }
                    }, {
                        key: "requestAuth",
                        value: function(e) {
                            return this.requestWrapped(e)
                        }
                    }, {
                        key: "request",
                        value: function(e, t) {
                            var n = this;
                            return Promise.resolve().then((function() {
                                return n.hasAccessToken ? t ? n.requestWrapped(e) : n.requestWrapped(e).catch((function(t) {
                                    return new Promise((function(e, n) {
                                        !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e()
                                    })).then((function() {
                                        return n.getAccessToken()
                                    })).then((function() {
                                        var t = n.rebuildRequest(e);
                                        return n.request(t, !0)
                                    }))
                                })) : n.getAccessToken().then((function() {
                                    var t = n.rebuildRequest(e);
                                    return n.request(t, !0)
                                }))
                            }))
                        }
                    }, {
                        key: "rebuildRequest",
                        value: function(e) {
                            var t = Object.assign({}, e);
                            return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = fh(t.data, this.config.clientSecret), t
                        }
                    }, {
                        key: "setupRequest",
                        value: function(e, t) {
                            var n = Object.assign({}, e, {
                                    spaceId: this.config.spaceId,
                                    timestamp: Date.now()
                                }),
                                r = {
                                    "Content-Type": "application/json"
                                };
                            return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = fh(n, this.config.clientSecret), {
                                url: this.config.requestUrl,
                                method: "POST",
                                data: n,
                                dataType: "json",
                                header: r
                            }
                        }
                    }, {
                        key: "getAccessToken",
                        value: function() {
                            return this._getAccessTokenPromiseHub.exec()
                        }
                    }, {
                        key: "authorize",
                        value: (a = n(t().mark((function e() {
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getAccessToken();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "callFunction",
                        value: function(e) {
                            var t = {
                                method: "serverless.function.runtime.invoke",
                                params: JSON.stringify({
                                    functionTarget: e.name,
                                    functionArgs: e.data || {}
                                })
                            };
                            return this.request(r(r({}, this.setupRequest(t)), {}, {
                                timeout: e.timeout
                            }))
                        }
                    }, {
                        key: "getOSSUploadOptionsFromPath",
                        value: function(e) {
                            var t = {
                                method: "serverless.file.resource.generateProximalSign",
                                params: JSON.stringify(e)
                            };
                            return this.request(this.setupRequest(t))
                        }
                    }, {
                        key: "uploadFileToOSS",
                        value: function(e) {
                            var t = this,
                                n = e.url,
                                r = e.formData,
                                i = e.name,
                                o = e.filePath,
                                a = e.fileType,
                                s = e.onUploadProgress;
                            return new Promise((function(e, u) {
                                var c = t.adapter.uploadFile({
                                    url: n,
                                    formData: r,
                                    name: i,
                                    filePath: o,
                                    fileType: a,
                                    header: {
                                        "X-OSS-server-side-encrpytion": "AES256"
                                    },
                                    success: function(t) {
                                        t && t.statusCode < 400 ? e(t) : u(new nh({
                                            code: "UPLOAD_FAILED",
                                            message: "文件上传失败"
                                        }))
                                    },
                                    fail: function(e) {
                                        u(new nh({
                                            code: e.code || "UPLOAD_FAILED",
                                            message: e.message || e.errMsg || "文件上传失败"
                                        }))
                                    }
                                });
                                "function" == typeof s && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate((function(e) {
                                    s({
                                        loaded: e.totalBytesSent,
                                        total: e.totalBytesExpectedToSend
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "reportOSSUpload",
                        value: function(e) {
                            var t = {
                                method: "serverless.file.resource.report",
                                params: JSON.stringify(e)
                            };
                            return this.request(this.setupRequest(t))
                        }
                    }, {
                        key: "uploadFile",
                        value: (o = n(t().mark((function e(n) {
                            var r, i, o, a, s, u, c, l, f, h, p, d, g, v, m, y, _, b, w, x, k, S;
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.filePath, i = n.cloudPath, o = n.fileType, a = void 0 === o ? "image" : o, s = n.cloudPathAsRealPath, u = void 0 !== s && s, c = n.onUploadProgress, l = n.config, "string" === bf(i)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new nh({
                                            code: "INVALID_PARAM",
                                            message: "cloudPath必须为字符串类型"
                                        });
                                    case 3:
                                        if (i = i.trim()) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new nh({
                                            code: "INVALID_PARAM",
                                            message: "cloudPath不可为空"
                                        });
                                    case 5:
                                        if (!/:\/\//.test(i)) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new nh({
                                            code: "INVALID_PARAM",
                                            message: "cloudPath不合法"
                                        });
                                    case 7:
                                        if (f = l && l.envType || this.config.envType, !(u && ("/" !== i[0] && (i = "/" + i), i.indexOf("\\") > -1))) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new nh({
                                            code: "INVALID_PARAM",
                                            message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                                        });
                                    case 10:
                                        return e.next = 12, this.getOSSUploadOptionsFromPath({
                                            env: f,
                                            filename: u ? i.split("/").pop() : i,
                                            fileId: u ? i : void 0
                                        });
                                    case 12:
                                        return h = e.sent.result, p = "https://" + h.cdnDomain + "/" + h.ossPath, d = h.securityToken, g = h.accessKeyId, v = h.signature, m = h.host, y = h.ossPath, _ = h.id, b = h.policy, w = h.ossCallbackUrl, x = {
                                            "Cache-Control": "max-age=2592000",
                                            "Content-Disposition": "attachment",
                                            OSSAccessKeyId: g,
                                            Signature: v,
                                            host: m,
                                            id: _,
                                            key: y,
                                            policy: b,
                                            success_action_status: 200
                                        }, d && (x["x-oss-security-token"] = d), w && (k = JSON.stringify({
                                            callbackUrl: w,
                                            callbackBody: JSON.stringify({
                                                fileId: _,
                                                spaceId: this.config.spaceId
                                            }),
                                            callbackBodyType: "application/json"
                                        }), x.callback = ph(k)), S = {
                                            url: "https://" + h.host,
                                            formData: x,
                                            fileName: "file",
                                            name: "file",
                                            filePath: r,
                                            fileType: a
                                        }, e.next = 27, this.uploadFileToOSS(Object.assign({}, S, {
                                            onUploadProgress: c
                                        }));
                                    case 27:
                                        if (!w) {
                                            e.next = 29;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            success: !0,
                                            filePath: r,
                                            fileID: p
                                        });
                                    case 29:
                                        return e.next = 31, this.reportOSSUpload({
                                            id: _
                                        });
                                    case 31:
                                        if (!e.sent.success) {
                                            e.next = 33;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            success: !0,
                                            filePath: r,
                                            fileID: p
                                        });
                                    case 33:
                                        throw new nh({
                                            code: "UPLOAD_FAILED",
                                            message: "文件上传失败"
                                        });
                                    case 34:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "getTempFileURL",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.fileList;
                            return new Promise((function(t, r) {
                                Array.isArray(n) && 0 !== n.length || r(new nh({
                                    code: "INVALID_PARAM",
                                    message: "fileList的元素必须是非空的字符串"
                                })), e.getFileInfo({
                                    fileList: n
                                }).then((function(e) {
                                    t({
                                        fileList: n.map((function(t, n) {
                                            var r = e.fileList[n];
                                            return {
                                                fileID: t,
                                                tempFileURL: r && r.url || t
                                            }
                                        }))
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "getFileInfo",
                        value: (i = n(t().mark((function e() {
                            var n, r, i, o = arguments;
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = o.length > 0 && void 0 !== o[0] ? o[0] : {}, r = n.fileList, Array.isArray(r) && 0 !== r.length) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new nh({
                                            code: "INVALID_PARAM",
                                            message: "fileList的元素必须是非空的字符串"
                                        });
                                    case 3:
                                        return i = {
                                            method: "serverless.file.resource.info",
                                            params: JSON.stringify({
                                                id: r.map((function(e) {
                                                    return e.split("?")[0]
                                                })).join(",")
                                            })
                                        }, e.next = 6, this.request(this.setupRequest(i));
                                    case 6:
                                        return e.t0 = e.sent.result, e.abrupt("return", {
                                            fileList: e.t0
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }]), e
                }())(e),
                o = {
                    signInAnonymously: function() {
                        return i.authorize()
                    },
                    getLoginState: function() {
                        return Promise.resolve(!1)
                    }
                };
            return i.auth = function() {
                return o
            }, i.customAuth = i.auth, i
        }
    },
    gh = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
(lh = ch || (ch = {})).local = "local", lh.none = "none", lh.session = "session";
var vh, mh = function() {},
    yh = cf((function(e, t) {
        var n;
        e.exports = (n = lf, function(e) {
            var t = n,
                r = t.lib,
                i = r.WordArray,
                o = r.Hasher,
                a = t.algo,
                s = [],
                u = [];
            ! function() {
                function t(t) {
                    for (var n = e.sqrt(t), r = 2; r <= n; r++)
                        if (!(t % r)) return !1;
                    return !0
                }
                 function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }
                for (var r = 2, i = 0; i < 64;) t(r) && (i < 8 && (s[i] = n(e.pow(r, .5))), u[i] = n(e.pow(r, 1 / 3)), i++), r++
            }();
            var c = [],
                l = a.SHA256 = o.extend({
                    _doReset: function() {
                        this._hash = new i.init(s.slice(0))
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], f = n[6], h = n[7], p = 0; p < 64; p++) {
                            if (p < 16) c[p] = 0 | e[t + p];
                            else {
                                var d = c[p - 15],
                                    g = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                                    v = c[p - 2],
                                    m = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                                c[p] = g + c[p - 7] + m + c[p - 16]
                            }
                            var y = r & i ^ r & o ^ i & o,
                                _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                b = h + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & l ^ ~s & f) + u[p] + c[p];
                            h = f, f = l, l = s, s = a + b | 0, a = o, o = i, i = r, r = b + (_ + y) | 0
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + s | 0, n[5] = n[5] + l | 0, n[6] = n[6] + f | 0, n[7] = n[7] + h | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            n = t.words,
                            r = 8 * this._nDataBytes,
                            i = 8 * t.sigBytes;
                        return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });
            t.SHA256 = o._createHelper(l), t.HmacSHA256 = o._createHmacHelper(l)
        }(Math), n.SHA256)
    })),
    _h = cf((function(e, t) {
        e.exports = lf.HmacSHA256
    })),
    bh = function() {
        var e;
        if (!Promise) {
            (e = function() {}).promise = {};
            var t = function() {
                throw new nh({
                    message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
                })
            };
            return Object.defineProperty(e.promise, "then", {get: t
            }), Object.defineProperty(e.promise, "catch", {get: t
            }), e
        }
        var n = new Promise((function(t, n) {
            e = function(e, r) {
                return e ? n(e) : t(r)
            }
        }));
        return e.promise = n, e
    };
 function wh(e) {
    return void 0 === e
}
 function xh(e) {
    return "[object Null]" === Object.prototype.toString.call(e)
}
 function kh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1")
}
 function Sh() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, t = "", n = 0; n < e; n++) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
    return t
}! function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp"
}(vh || (vh = {}));
var Th = {
        adapter: null,
        runtime: void 0
    },
    Ih = ["anonymousUuidKey"],
    Eh = function(e) {
        o(n, mh);
        var t = a(n);
         function n() {
            var e;
            return u(this, n), e = t.call(this), Th.adapter.root.tcbObject || (Th.adapter.root.tcbObject = {}), e
        }
        return c(n, [{
            key: "setItem",
            value: function(e, t) {
                Th.adapter.root.tcbObject[e] = t
            }
        }, {
            key: "getItem",
            value: function(e) {
                return Th.adapter.root.tcbObject[e]
            }
        }, {
            key: "removeItem",
            value: function(e) {
                delete Th.adapter.root.tcbObject[e]
            }
        }, {
            key: "clear",
            value: function() {
                delete Th.adapter.root.tcbObject
            }
        }]), n
    }();
 function Ah(e, t) {
    switch (e) {
        case "local":
            return t.localStorage || new Eh;
        case "none":
            return new Eh;
        default:
            return t.sessionStorage || new Eh
    }
}
var Ch = function() {
        function e(t) {
            if (u(this, e), !this._storage) {
                this._persistence = Th.adapter.primaryStorage || t.persistence, this._storage = Ah(this._persistence, Th.adapter);
                var n = "access_token_".concat(t.env),
                    r = "access_token_expire_".concat(t.env),
                    i = "refresh_token_".concat(t.env),
                    o = "anonymous_uuid_".concat(t.env),
                    a = "login_type_".concat(t.env),
                    s = "token_type_".concat(t.env),
                    c = "user_info_".concat(t.env);
                this.keys = {
                    accessTokenKey: n,
                    accessTokenExpireKey: r,
                    refreshTokenKey: i,
                    anonymousUuidKey: o,
                    loginTypeKey: a,
                    userInfoKey: c,
                    deviceIdKey: "device_id",
                    tokenTypeKey: s
                }
            }
        }
        return c(e, [{
            key: "updatePersistence",
            value: function(e) {
                if (e !== this._persistence) {
                    var t = "local" === this._persistence;
                    this._persistence = e;
                    var n = Ah(e, Th.adapter);
                    for (var r in this.keys) {
                        var i = this.keys[r];
                        if (!t || !Ih.includes(r)) {
                            var o = this._storage.getItem(i);
                            wh(o) || xh(o) || (n.setItem(i, o), this._storage.removeItem(i))
                        }
                    }
                    this._storage = n
                }
            }
        }, {
            key: "setStore",
            value: function(e, t, n) {
                if (this._storage) {
                    var r = {
                            version: n || "localCachev1",
                            content: t
                        },
                        i = JSON.stringify(r);
                    try {
                        this._storage.setItem(e, i)
                    } catch (e) {
                        throw e
                    }
                }
            }
        }, {
            key: "getStore",
            value: function(e, t) {
                try {
                    if (!this._storage) return
                } catch (e) {
                    return ""
                }
                t = t || "localCachev1";
                var n = this._storage.getItem(e);
                return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : ""
            }
        }, {
            key: "removeStore",
            value: function(e) {
                this._storage.removeItem(e)
            }
        }]), e
    }(),
    Oh = {},
    Bh = {};
 function Ph(e) {
    return Oh[e]
}
var Fh = c((function e(t, n) {
        u(this, e), this.data = n || null, this.name = t
    })),
    jh = function(e) {
        o(n, Fh);
        var t = a(n);
         function n(e, r) {
            var i;
            return u(this, n), (i = t.call(this, "error", {
                error: e,
                data: r
            })).error = e, i
        }
        return c(n)
    }(),
    Rh = new(function() {
        function e() {
            u(this, e), this._listeners = {}
        }
        return c(e, [{
            key: "on",
            value: function(e, t) {
                return n = e, r = t, (i = this._listeners)[n] = i[n] || [], i[n].push(r), this;
                var n, r, i
            }
        }, {
            key: "off",
            value: function(e, t) {
                return function(e, t, n) {
                    if (n && n[e]) {
                        var r = n[e].indexOf(t); - 1 !== r && n[e].splice(r, 1)
                    }
                }(e, t, this._listeners), this
            }
        }, {
            key: "fire",
            value: function(e, t) {
                if (e instanceof jh) return console.error(e.error), this;
                var n = "string" == typeof e ? new Fh(e, t || {}) : e,
                    r = n.name;
                if (this._listens(r)) {
                    n.target = this;
                    var i, o = this._listeners[r] ? h(this._listeners[r]) : [],
                        a = s(o);
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            i.value.call(this, n)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }
                return this
            }
        }, {
            key: "_listens",
            value: function(e) {
                return this._listeners[e] && this._listeners[e].length > 0
            }
        }]), e
    }());
 function Lh(e, t) {
    Rh.on(e, t)
}
 function Mh(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    Rh.fire(e, t)
}
 function Uh(e, t) {
    Rh.off(e, t)
}
var Dh, Nh = "loginStateChanged",
    qh = "loginStateExpire",
    zh = "loginTypeChanged",
    $h = "anonymousConverted",
    Hh = "refreshAccessToken";
! function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL"
}(Dh || (Dh = {}));
var Kh = function() {
        function e() {
            u(this, e), this._fnPromiseMap = new Map
        }
        var r;
        return c(e, [{
            key: "run",
            value: (r = n(t().mark((function e(r, i) {
                var o, a = this;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = this._fnPromiseMap.get(r), e.abrupt("return", (o || (o = new Promise(function() {
                                var e = n(t().mark((function e(n, o) {
                                    var s;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, a._runIdlePromise();
                                            case 3:
                                                return s = i(), e.t0 = n, e.next = 7, s;
                                            case 7:
                                                e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 14;
                                                break;
                                            case 11:
                                                e.prev = 11, e.t2 = e.catch(0), o(e.t2);
                                            case 14:
                                                return e.prev = 14, a._fnPromiseMap.delete(r), e.finish(14);
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 11, 14, 17]
                                    ])
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()), this._fnPromiseMap.set(r, o)), o));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return r.apply(this, arguments)
            })
        }, {
            key: "_runIdlePromise",
            value: function() {
                return Promise.resolve()
            }
        }]), e
    }(),
    Vh = function() {
        function e(t) {
            u(this, e), this._singlePromise = new Kh, this._cache = Ph(t.env), this._baseURL = "https://".concat(t.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Th.adapter.reqClass({
                timeout: t.timeout,
                timeoutMsg: "请求在".concat(t.timeout / 1e3, "s内未完成，已中断"),
                restrictedMethods: ["post"]
            })
        }
        var r, i, o, a, s;
        return c(e, [{
            key: "_getDeviceId",
            value: function() {
                if (this._deviceID) return this._deviceID;
                var e = this._cache.keys.deviceIdKey,
                    t = this._cache.getStore(e);
                return "string" == typeof t && t.length >= 16 && t.length <= 48 || (t = Sh(), this._cache.setStore(e, t)), this._deviceID = t, t
            }
        }, {
            key: "_request",
            value: (s = n(t().mark((function e(n, r) {
                var i, o, a, s, u, c = arguments;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (i = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = {
                                    "x-request-id": Sh(),
                                    "x-device-id": this._getDeviceId()
                                }, !i.withAccessToken) {
                                e.next = 9;
                                break
                            }
                            return a = this._cache.keys.tokenTypeKey, e.next = 6, this.getAccessToken();
                        case 6:
                            s = e.sent, u = this._cache.getStore(a), o.authorization = "".concat(u, " ").concat(s);
                        case 9:
                            return e.abrupt("return", this._reqClass["get" === i.method ? "get" : "post"]({
                                url: "".concat(this._baseURL).concat(n),
                                data: r,
                                headers: o
                            }));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return s.apply(this, arguments)
            })
        }, {
            key: "_fetchAccessToken",
            value: (a = n(t().mark((function e() {
                var r, i, o, a, s, u, c, l, f, h, p = this;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = this._cache.keys, i = r.loginTypeKey, o = r.accessTokenKey, a = r.accessTokenExpireKey, s = r.tokenTypeKey, !(u = this._cache.getStore(i)) || u === Dh.ANONYMOUS) {
                                e.next = 3;
                                break
                            }
                            throw new nh({
                                code: "INVALID_OPERATION",
                                message: "非匿名登录不支持刷新 access token"
                            });
                        case 3:
                            return e.next = 5, this._singlePromise.run("fetchAccessToken", n(t().mark((function e() {
                                return t().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p._request("/auth/v1/signin/anonymously", {}, {
                                                method: "post"
                                            });
                                        case 2:
                                            return e.abrupt("return", e.sent.data);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))));
                        case 5:
                            return c = e.sent, l = c.access_token, f = c.expires_in, h = c.token_type, e.abrupt("return", (this._cache.setStore(s, h), this._cache.setStore(o, l), this._cache.setStore(a, Date.now() + 1e3 * f), l));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "isAccessTokenExpired",
            value: function(e, t) {
                var n = !0;
                return e && t && (n = t < Date.now()), n
            }
        }, {
            key: "getAccessToken",
            value: (o = n(t().mark((function e() {
                var n, r, i, o, a;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, o = this._cache.getStore(r), a = this._cache.getStore(i), e.abrupt("return", this.isAccessTokenExpired(o, a) ? this._fetchAccessToken() : o);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return o.apply(this, arguments)
            })
        }, {
            key: "refreshAccessToken",
            value: (i = n(t().mark((function e() {
                var n, r, i, o;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, o = n.loginTypeKey, e.abrupt("return", (this._cache.removeStore(r), this._cache.removeStore(i), this._cache.setStore(o, Dh.ANONYMOUS), this.getAccessToken()));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return i.apply(this, arguments)
            })
        }, {
            key: "getUserInfo",
            value: (r = n(t().mark((function e() {
                var r = this;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this._singlePromise.run("getUserInfo", n(t().mark((function e() {
                                return t().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r._request("/auth/v1/user/me", {}, {
                                                withAccessToken: !0,
                                                method: "get"
                                            });
                                        case 2:
                                            return e.abrupt("return", e.sent.data);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return r.apply(this, arguments)
            })
        }]), e
    }(),
    Wh = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
    Zh = {
        "X-SDK-Version": "1.3.5"
    };
 function Jh(e, t, n) {
    var i = e[t];
    e[t] = function(t) {
        var o = {},
            a = {};
        n.forEach((function(n) {
            var r = n.call(e, t),
                i = r.data,
                s = r.headers;
            Object.assign(o, i), Object.assign(a, s)
        }));
        var s = t.data;
        return s && function() {
            var e;
            if (e = s, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = r(r({}, s), o);
            else
                for (var n in o) s.append(n, o[n])
        }(), t.headers = r(r({}, t.headers || {}), a), i.call(e, t)
    }
}
 function Qh() {
    var e = Math.random().toString(16).slice(2);
    return {
        data: {
            seqId: e
        },
        headers: r(r({}, Zh), {}, {
            "x-seqid": e
        })
    }
}
var Yh = function() {
        function e() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u(this, e), this.config = n, this._reqClass = new Th.adapter.reqClass({
                timeout: this.config.timeout,
                timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
                restrictedMethods: ["post"]
            }), this._cache = Ph(this.config.env), this._localCache = (t = this.config.env, Bh[t]), this.oauth = new Vh(this.config), Jh(this._reqClass, "post", [Qh]), Jh(this._reqClass, "upload", [Qh]), Jh(this._reqClass, "download", [Qh])
        }
        var i, o, a, s, l, f, h, p;
        return c(e, [{
            key: "post",
            value: (p = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._reqClass.post(n);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return p.apply(this, arguments)
            })
        }, {
            key: "upload",
            value: (h = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._reqClass.upload(n);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return h.apply(this, arguments)
            })
        }, {
            key: "download",
            value: (f = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._reqClass.download(n);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return f.apply(this, arguments)
            })
        }, {
            key: "refreshAccessToken",
            value: (l = n(t().mark((function e() {
                var n, r;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), e.prev = 1, e.next = 4, this._refreshAccessTokenPromise;
                        case 4:
                            n = e.sent, e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(1), r = e.t0;
                        case 10:
                            if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, !r) {
                                e.next = 12;
                                break
                            }
                            throw r;
                        case 12:
                            return e.abrupt("return", n);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, this, [
                    [1, 7]
                ])
            }))), function() {
                return l.apply(this, arguments)
            })
        }, {
            key: "_refreshAccessToken",
            value: (s = n(t().mark((function e() {
                var n, r, i, o, a, s, u, c, l, f, h, p, d;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, o = n.refreshTokenKey, a = n.loginTypeKey, s = n.anonymousUuidKey, this._cache.removeStore(r), this._cache.removeStore(i), u = this._cache.getStore(o)) {
                                e.next = 5;
                                break
                            }
                            throw new nh({
                                message: "未登录CloudBase"
                            });
                        case 5:
                            return c = {
                                refresh_token: u
                            }, e.next = 8, this.request("auth.fetchAccessTokenWithRefreshToken", c);
                        case 8:
                            if (!(l = e.sent).data.code) {
                                e.next = 21;
                                break
                            }
                            if ("SIGN_PARAM_INVALID" !== (f = l.data.code) && "REFRESH_TOKEN_EXPIRED" !== f && "INVALID_REFRESH_TOKEN" !== f) {
                                e.next = 20;
                                break
                            }
                            if (this._cache.getStore(a) !== Dh.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== f) {
                                e.next = 19;
                                break
                            }
                            return h = this._cache.getStore(s), p = this._cache.getStore(o), e.next = 17, this.send("auth.signInAnonymously", {
                                anonymous_uuid: h,
                                refresh_token: p
                            });
                        case 17:
                            return d = e.sent, e.abrupt("return", (this.setRefreshToken(d.refresh_token), this._refreshAccessToken()));
                        case 19:
                            Mh(qh), this._cache.removeStore(o);
                        case 20:
                            throw new nh({
                                code: l.data.code,
                                message: "刷新access token失败：".concat(l.data.code)
                            });
                        case 21:
                            if (!l.data.access_token) {
                                e.next = 23;
                                break
                            }
                            return e.abrupt("return", (Mh(Hh), this._cache.setStore(r, l.data.access_token), this._cache.setStore(i, l.data.access_token_expire + Date.now()), {
                                accessToken: l.data.access_token,
                                accessTokenExpire: l.data.access_token_expire
                            }));
                        case 23:
                            l.data.refresh_token && (this._cache.removeStore(o), this._cache.setStore(o, l.data.refresh_token), this._refreshAccessToken());
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return s.apply(this, arguments)
            })
        }, {
            key: "getAccessToken",
            value: (a = n(t().mark((function e() {
                var n, r, i, o, a, s, u;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, o = n.refreshTokenKey, this._cache.getStore(o)) {
                                e.next = 3;
                                break
                            }
                            throw new nh({
                                message: "refresh token不存在，登录状态异常"
                            });
                        case 3:
                            if (a = this._cache.getStore(r), s = this._cache.getStore(i), u = !0, e.t0 = this._shouldRefreshAccessTokenHook, !e.t0) {
                                e.next = 9;
                                break
                            }
                            return e.next = 8, this._shouldRefreshAccessTokenHook(a, s);
                        case 8:
                            e.t0 = !e.sent;
                        case 9:
                            if (e.t1 = e.t0, !e.t1) {
                                e.next = 12;
                                break
                            }
                            u = !1;
                        case 12:
                            return e.abrupt("return", (!a || !s || s < Date.now()) && u ? this.refreshAccessToken() : {
                                accessToken: a,
                                accessTokenExpire: s
                            });
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "request",
            value: (o = n(t().mark((function e(n, i, o) {
                var a, s, u, c, l, f, h, p, d, g, v, m, y, _, b;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (a = "x-tcb-trace_".concat(this.config.env), s = "application/x-www-form-urlencoded", u = r({
                                    action: n,
                                    env: this.config.env,
                                    dataVersion: "2019-08-16"
                                }, i), e.t0 = -1 === Wh.indexOf(n), !e.t0) {
                                e.next = 9;
                                break
                            }
                            return this._cache.keys, e.next = 8, this.oauth.getAccessToken();
                        case 8:
                            u.access_token = e.sent;
                        case 9:
                            if ("storage.uploadFile" !== n) {
                                e.next = 15;
                                break
                            }
                            for (l in c = new FormData) c.hasOwnProperty(l) && void 0 !== c[l] && c.append(l, u[l]);
                            s = "multipart/form-data", e.next = 17;
                            break;
                        case 15:
                            for (f in s = "application/json", c = {}, u) void 0 !== u[f] && (c[f] = u[f]);
                        case 17:
                            return h = {
                                headers: {
                                    "content-type": s
                                }
                            }, o && o.timeout && (h.timeout = o.timeout), o && o.onUploadProgress && (h.onUploadProgress = o.onUploadProgress), (p = this._localCache.getStore(a)) && (h.headers["X-TCB-Trace"] = p), d = i.parse, g = i.inQuery, v = i.search, m = {
                                env: this.config.env
                            }, d && (m.parse = !0), g && (m = r(r({}, g), m)), y = function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    r = /\?/.test(t),
                                    i = "";
                                for (var o in n) "" === i ? !r && (t += "?") : i += "&", i += "".concat(o, "=").concat(encodeURIComponent(n[o]));
                                return /^http(s)?\:\/\//.test(t += i) ? t : "".concat(e).concat(t)
                            }(gh, "//tcb-api.tencentcloudapi.com/web", m), v && (y += v), e.next = 28, this.post(r({
                                url: y,
                                data: c
                            }, h));
                        case 28:
                            if (_ = e.sent, (b = _.header && _.header["x-tcb-trace"]) && this._localCache.setStore(a, b), (200 === Number(_.status) || 200 === Number(_.statusCode)) && _.data) {
                                e.next = 32;
                                break
                            }
                            throw new nh({
                                code: "NETWORK_ERROR",
                                message: "network request error"
                            });
                        case 32:
                            return e.abrupt("return", _);
                        case 33:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t, n) {
                return o.apply(this, arguments)
            })
        }, {
            key: "send",
            value: (i = n(t().mark((function e(n) {
                var i, o, a, s, u = arguments;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = u.length > 1 && void 0 !== u[1] ? u[1] : {}, o = u.length > 2 && void 0 !== u[2] ? u[2] : {}, e.next = 4, this.request(n, i, r(r({}, o), {}, {
                                onUploadProgress: i.onUploadProgress
                            }));
                        case 4:
                            if ("ACCESS_TOKEN_DISABLED" !== (a = e.sent).data.code && "ACCESS_TOKEN_EXPIRED" !== a.data.code || -1 !== Wh.indexOf(n)) {
                                e.next = 14;
                                break
                            }
                            return e.next = 8, this.oauth.refreshAccessToken();
                        case 8:
                            return e.next = 10, this.request(n, i, r(r({}, o), {}, {
                                onUploadProgress: i.onUploadProgress
                            }));
                        case 10:
                            if (!(s = e.sent).data.code) {
                                e.next = 13;
                                break
                            }
                            throw new nh({
                                code: s.data.code,
                                message: kh(s.data.message)
                            });
                        case 13:
                            return e.abrupt("return", s.data);
                        case 14:
                            if (!a.data.code) {
                                e.next = 16;
                                break
                            }
                            throw new nh({
                                code: a.data.code,
                                message: kh(a.data.message)
                            });
                        case 16:
                            return e.abrupt("return", a.data);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return i.apply(this, arguments)
            })
        }, {
            key: "setRefreshToken",
            value: function(e) {
                var t = this._cache.keys,
                    n = t.accessTokenKey,
                    r = t.accessTokenExpireKey,
                    i = t.refreshTokenKey;
                this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(i, e)
            }
        }]), e
    }(),
    Gh = {};
 function Xh(e) {
    return Gh[e]
}
var ep = function() {
        function e(t) {
            u(this, e), this.config = t, this._cache = Ph(t.env), this._request = Xh(t.env)
        }
        var r;
        return c(e, [{
            key: "setRefreshToken",
            value: function(e) {
                var t = this._cache.keys,
                    n = t.accessTokenKey,
                    r = t.accessTokenExpireKey,
                    i = t.refreshTokenKey;
                this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(i, e)
            }
        }, {
            key: "setAccessToken",
            value: function(e, t) {
                var n = this._cache.keys,
                    r = n.accessTokenKey,
                    i = n.accessTokenExpireKey;
                this._cache.setStore(r, e), this._cache.setStore(i, t)
            }
        }, {
            key: "refreshUserInfo",
            value: (r = n(t().mark((function e() {
                var n, r;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._request.send("auth.getUserInfo", {});
                        case 2:
                            return n = e.sent, r = n.data, e.abrupt("return", (this.setLocalUserInfo(r), r));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return r.apply(this, arguments)
            })
        }, {
            key: "setLocalUserInfo",
            value: function(e) {
                var t = this._cache.keys.userInfoKey;
                this._cache.setStore(t, e)
            }
        }]), e
    }(),
    tp = function() {
        function e(t) {
            if (u(this, e), !t) throw new nh({
                code: "PARAM_ERROR",
                message: "envId is not defined"
            });
            this._envId = t, this._cache = Ph(this._envId), this._request = Xh(this._envId), this.setUserInfo()
        }
        var r, i, o;
        return c(e, [{
            key: "linkWithTicket",
            value: function(e) {
                if ("string" != typeof e) throw new nh({
                    code: "PARAM_ERROR",
                    message: "ticket must be string"
                });
                return this._request.send("auth.linkWithTicket", {
                    ticket: e
                })
            }
        }, {
            key: "linkWithRedirect",
            value: function(e) {
                e.signInWithRedirect()
            }
        }, {
            key: "updatePassword",
            value: function(e, t) {
                return this._request.send("auth.updatePassword", {
                    oldPassword: t,
                    newPassword: e
                })
            }
        }, {
            key: "updateEmail",
            value: function(e) {
                return this._request.send("auth.updateEmail", {
                    newEmail: e
                })
            }
        }, {
            key: "updateUsername",
            value: function(e) {
                if ("string" != typeof e) throw new nh({
                    code: "PARAM_ERROR",
                    message: "username must be a string"
                });
                return this._request.send("auth.updateUsername", {
                    username: e
                })
            }
        }, {
            key: "getLinkedUidList",
            value: (o = n(t().mark((function e() {
                var n, r, i, o;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._request.send("auth.getLinkedUidList", {});
                        case 2:
                            return n = e.sent, r = n.data, i = !1, o = r.users, e.abrupt("return", (o.forEach((function(e) {
                                e.wxOpenId && e.wxPublicId && (i = !0)
                            })), {
                                users: o,
                                hasPrimaryUid: i
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return o.apply(this, arguments)
            })
        }, {
            key: "setPrimaryUid",
            value: function(e) {
                return this._request.send("auth.setPrimaryUid", {
                    uid: e
                })
            }
        }, {
            key: "unlink",
            value: function(e) {
                return this._request.send("auth.unlink", {
                    platform: e
                })
            }
        }, {
            key: "update",
            value: (i = n(t().mark((function e(n) {
                var r, i, o, a, s, u, c, l;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = n.nickName, i = n.gender, o = n.avatarUrl, a = n.province, s = n.country, u = n.city, e.next = 8, this._request.send("auth.updateUserInfo", {
                                nickName: r,
                                gender: i,
                                avatarUrl: o,
                                province: a,
                                country: s,
                                city: u
                            });
                        case 8:
                            c = e.sent, l = c.data, this.setLocalUserInfo(l);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return i.apply(this, arguments)
            })
        }, {
            key: "refresh",
            value: (r = n(t().mark((function e() {
                var n;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._request.oauth.getUserInfo();
                        case 2:
                            return n = e.sent, e.abrupt("return", (this.setLocalUserInfo(n), n));
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return r.apply(this, arguments)
            })
        }, {
            key: "setUserInfo",
            value: function() {
                var e = this,
                    t = this._cache.keys.userInfoKey,
                    n = this._cache.getStore(t);
                ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((function(t) {
                    e[t] = n[t]
                })), this.location = {
                    country: n.country,
                    province: n.province,
                    city: n.city
                }
            }
        }, {
            key: "setLocalUserInfo",
            value: function(e) {
                var t = this._cache.keys.userInfoKey;
                this._cache.setStore(t, e), this.setUserInfo()
            }
        }]), e
    }(),
    np = function() {
        function e(t) {
            if (u(this, e), !t) throw new nh({
                code: "PARAM_ERROR",
                message: "envId is not defined"
            });
            this._cache = Ph(t);
            var n = this._cache.keys,
                r = n.refreshTokenKey,
                i = n.accessTokenKey,
                o = n.accessTokenExpireKey,
                a = this._cache.getStore(r),
                s = this._cache.getStore(i),
                c = this._cache.getStore(o);
            this.credential = {
                refreshToken: a,
                accessToken: s,
                accessTokenExpire: c
            }, this.user = new tp(t)
        }
        return c(e, [{
            key: "isAnonymousAuth",
            get: function() {
                return this.loginType === Dh.ANONYMOUS
            }
        }, {
            key: "isCustomAuth",
            get: function() {
                return this.loginType === Dh.CUSTOM
            }
        }, {
            key: "isWeixinAuth",
            get: function() {
                return this.loginType === Dh.WECHAT || this.loginType === Dh.WECHAT_OPEN || this.loginType === Dh.WECHAT_PUBLIC
            }
        }, {
            key: "loginType",
            get: function() {
                return this._cache.getStore(this._cache.keys.loginTypeKey)
            }
        }]), e
    }(),
    rp = function(e) {
        o(l, ep);
        var r, i, s = a(l);
         function l() {
            return u(this, l), s.apply(this, arguments)
        }
        return c(l, [{
            key: "signIn",
            value: (i = n(t().mark((function e() {
                var n;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this._cache.updatePersistence("local"), e.next = 3, this._request.oauth.getAccessToken();
                        case 3:
                            return Mh(Nh), Mh(zh, {
                                env: this.config.env,
                                loginType: Dh.ANONYMOUS,
                                persistence: "local"
                            }), n = new np(this.config.env), e.next = 8, n.user.refresh();
                        case 8:
                            return e.abrupt("return", n);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return i.apply(this, arguments)
            })
        }, {
            key: "linkAndRetrieveDataWithTicket",
            value: (r = n(t().mark((function e(n) {
                var r, i, o, a, s, u;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = this._cache.keys, i = r.anonymousUuidKey, o = r.refreshTokenKey, a = this._cache.getStore(i), s = this._cache.getStore(o), e.next = 7, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                                anonymous_uuid: a,
                                refresh_token: s,
                                ticket: n
                            });
                        case 7:
                            if (!(u = e.sent).refresh_token) {
                                e.next = 16;
                                break
                            }
                            return this._clearAnonymousUUID(), this.setRefreshToken(u.refresh_token), e.next = 13, this._request.refreshAccessToken();
                        case 13:
                            return Mh($h, {
                                env: this.config.env
                            }), Mh(zh, {
                                loginType: Dh.CUSTOM,
                                persistence: "local"
                            }), e.abrupt("return", {
                                credential: {
                                    refreshToken: u.refresh_token
                                }
                            });
                        case 16:
                            throw new nh({
                                message: "匿名转化失败"
                            });
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return r.apply(this, arguments)
            })
        }, {
            key: "_setAnonymousUUID",
            value: function(e) {
                var t = this._cache.keys,
                    n = t.anonymousUuidKey,
                    r = t.loginTypeKey;
                this._cache.removeStore(n), this._cache.setStore(n, e), this._cache.setStore(r, Dh.ANONYMOUS)
            }
        }, {
            key: "_clearAnonymousUUID",
            value: function() {
                this._cache.removeStore(this._cache.keys.anonymousUuidKey)
            }
        }]), l
    }(),
    ip = function(e) {
        o(s, ep);
        var r, i = a(s);
         function s() {
            return u(this, s), i.apply(this, arguments)
        }
        return c(s, [{
            key: "signIn",
            value: (r = n(t().mark((function e(n) {
                var r, i;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("string" == typeof n) {
                                e.next = 2;
                                break
                            }
                            throw new nh({
                                code: "PARAM_ERROR",
                                message: "ticket must be a string"
                            });
                        case 2:
                            return r = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signInWithTicket", {
                                ticket: n,
                                refresh_token: this._cache.getStore(r) || ""
                            });
                        case 5:
                            if (!(i = e.sent).refresh_token) {
                                e.next = 15;
                                break
                            }
                            return this.setRefreshToken(i.refresh_token), e.next = 10, this._request.refreshAccessToken();
                        case 10:
                            return Mh(Nh), Mh(zh, {
                                env: this.config.env,
                                loginType: Dh.CUSTOM,
                                persistence: this.config.persistence
                            }), e.next = 14, this.refreshUserInfo();
                        case 14:
                            return e.abrupt("return", new np(this.config.env));
                        case 15:
                            throw new nh({
                                message: "自定义登录失败"
                            });
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return r.apply(this, arguments)
            })
        }]), s
    }(),
    op = function(e) {
        o(f, ep);
        var r, i, s, l = a(f);
         function f() {
            return u(this, f), l.apply(this, arguments)
        }
        return c(f, [{
            key: "signIn",
            value: (s = n(t().mark((function e(n, r) {
                var i, o, a, s, u;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("string" == typeof n) {
                                e.next = 2;
                                break
                            }
                            throw new nh({
                                code: "PARAM_ERROR",
                                message: "email must be a string"
                            });
                        case 2:
                            return i = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signIn", {
                                loginType: "EMAIL",
                                email: n,
                                password: r,
                                refresh_token: this._cache.getStore(i) || ""
                            });
                        case 5:
                            if (o = e.sent, a = o.refresh_token, s = o.access_token, u = o.access_token_expire, !a) {
                                e.next = 22;
                                break
                            }
                            if (this.setRefreshToken(a), !s || !u) {
                                e.next = 15;
                                break
                            }
                            this.setAccessToken(s, u), e.next = 17;
                            break;
                        case 15:
                            return e.next = 17, this._request.refreshAccessToken();
                        case 17:
                            return e.next = 19, this.refreshUserInfo();
                        case 19:
                            return Mh(Nh), Mh(zh, {
                                env: this.config.env,
                                loginType: Dh.EMAIL,
                                persistence: this.config.persistence
                            }), e.abrupt("return", new np(this.config.env));
                        case 22:
                            throw o.code ? new nh({
                                code: o.code,
                                message: "邮箱登录失败: ".concat(o.message)
                            }) : new nh({
                                message: "邮箱登录失败"
                            });
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return s.apply(this, arguments)
            })
        }, {
            key: "activate",
            value: (i = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this._request.send("auth.activateEndUserMail", {
                                token: n
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return i.apply(this, arguments)
            })
        }, {
            key: "resetPasswordWithToken",
            value: (r = n(t().mark((function e(n, r) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                                token: n,
                                newPassword: r
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return r.apply(this, arguments)
            })
        }]), f
    }(),
    ap = function(e) {
        o(s, ep);
        var r, i = a(s);
         function s() {
            return u(this, s), i.apply(this, arguments)
        }
        return c(s, [{
            key: "signIn",
            value: (r = n(t().mark((function e(n, r) {
                var i, o, a, s, u;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("string" == typeof n) {
                                e.next = 2;
                                break
                            }
                            throw new nh({
                                code: "PARAM_ERROR",
                                message: "username must be a string"
                            });
                        case 2:
                            return "string" != typeof r && (r = "", console.warn("password is empty")), i = this._cache.keys.refreshTokenKey, e.next = 6, this._request.send("auth.signIn", {
                                loginType: Dh.USERNAME,
                                username: n,
                                password: r,
                                refresh_token: this._cache.getStore(i) || ""
                            });
                        case 6:
                            if (o = e.sent, a = o.refresh_token, s = o.access_token_expire, u = o.access_token, !a) {
                                e.next = 23;
                                break
                            }
                            if (this.setRefreshToken(a), !u || !s) {
                                e.next = 16;
                                break
                            }
                            this.setAccessToken(u, s), e.next = 18;
                            break;
                        case 16:
                            return e.next = 18, this._request.refreshAccessToken();
                        case 18:
                            return e.next = 20, this.refreshUserInfo();
                        case 20:
                            return Mh(Nh), Mh(zh, {
                                env: this.config.env,
                                loginType: Dh.USERNAME,
                                persistence: this.config.persistence
                            }), e.abrupt("return", new np(this.config.env));
                        case 23:
                            throw o.code ? new nh({
                                code: o.code,
                                message: "用户名密码登录失败: ".concat(o.message)
                            }) : new nh({
                                message: "用户名密码登录失败"
                            });
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return r.apply(this, arguments)
            })
        }]), s
    }(),
    sp = function() {
        function e(t) {
            u(this, e), this.config = t, this._cache = Ph(t.env), this._request = Xh(t.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Lh(zh, this._onLoginTypeChanged)
        }
        var i, o, a, s, l, f, h, p, d;
        return c(e, [{
            key: "currentUser",
            get: function() {
                var e = this.hasLoginState();
                return e && e.user || null
            }
        }, {
            key: "loginType",
            get: function() {
                return this._cache.getStore(this._cache.keys.loginTypeKey)
            }
        }, {
            key: "anonymousAuthProvider",
            value: function() {
                return new rp(this.config)
            }
        }, {
            key: "customAuthProvider",
            value: function() {
                return new ip(this.config)
            }
        }, {
            key: "emailAuthProvider",
            value: function() {
                return new op(this.config)
            }
        }, {
            key: "usernameAuthProvider",
            value: function() {
                return new ap(this.config)
            }
        }, {
            key: "signInAnonymously",
            value: (d = n(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new rp(this.config).signIn());
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return d.apply(this, arguments)
            })
        }, {
            key: "signInWithEmailAndPassword",
            value: (p = n(t().mark((function e(n, r) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new op(this.config).signIn(n, r));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return p.apply(this, arguments)
            })
        }, {
            key: "signInWithUsernameAndPassword",
            value: function(e, t) {
                return new ap(this.config).signIn(e, t)
            }
        }, {
            key: "linkAndRetrieveDataWithTicket",
            value: (h = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this._anonymousAuthProvider || (this._anonymousAuthProvider = new rp(this.config)), Lh($h, this._onAnonymousConverted), e.next = 4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(n);
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return h.apply(this, arguments)
            })
        }, {
            key: "signOut",
            value: (f = n(t().mark((function e() {
                var n, r, i, o, a, s;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (this.loginType !== Dh.ANONYMOUS) {
                                e.next = 2;
                                break
                            }
                            throw new nh({
                                message: "匿名用户不支持登出操作"
                            });
                        case 2:
                            if (n = this._cache.keys, r = n.refreshTokenKey, i = n.accessTokenKey, o = n.accessTokenExpireKey, a = this._cache.getStore(r)) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            return e.next = 7, this._request.send("auth.logout", {
                                refresh_token: a
                            });
                        case 7:
                            return s = e.sent, e.abrupt("return", (this._cache.removeStore(r), this._cache.removeStore(i), this._cache.removeStore(o), Mh(Nh), Mh(zh, {
                                env: this.config.env,
                                loginType: Dh.NULL,
                                persistence: this.config.persistence
                            }), s));
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return f.apply(this, arguments)
            })
        }, {
            key: "signUpWithEmailAndPassword",
            value: (l = n(t().mark((function e(n, r) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                                email: n,
                                password: r
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return l.apply(this, arguments)
            })
        }, {
            key: "sendPasswordResetEmail",
            value: (s = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                                email: n
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return s.apply(this, arguments)
            })
        }, {
            key: "onLoginStateChanged",
            value: function(e) {
                var t = this;
                Lh(Nh, (function() {
                    var n = t.hasLoginState();
                    e.call(t, n)
                }));
                var n = this.hasLoginState();
                e.call(this, n)
            }
        }, {
            key: "onLoginStateExpired",
            value: function(e) {
                Lh(qh, e.bind(this))
            }
        }, {
            key: "onAccessTokenRefreshed",
            value: function(e) {
                Lh(Hh, e.bind(this))
            }
        }, {
            key: "onAnonymousConverted",
            value: function(e) {
                Lh($h, e.bind(this))
            }
        }, {
            key: "onLoginTypeChanged",
            value: function(e) {
                var t = this;
                Lh(zh, (function() {
                    var n = t.hasLoginState();
                    e.call(t, n)
                }))
            }
        }, {
            key: "getAccessToken",
            value: (a = n(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this._request.getAccessToken();
                        case 2:
                            return e.t0 = e.sent.accessToken, e.t1 = this.config.env, e.abrupt("return", {
                                accessToken: e.t0,
                                env: e.t1
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "hasLoginState",
            value: function() {
                var e = this._cache.keys,
                    t = e.accessTokenKey,
                    n = e.accessTokenExpireKey,
                    r = this._cache.getStore(t),
                    i = this._cache.getStore(n);
                return this._request.oauth.isAccessTokenExpired(r, i) ? null : new np(this.config.env)
            }
        }, {
            key: "isUsernameRegistered",
            value: (o = n(t().mark((function e(n) {
                var r, i;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("string" == typeof n) {
                                e.next = 2;
                                break
                            }
                            throw new nh({
                                code: "PARAM_ERROR",
                                message: "username must be a string"
                            });
                        case 2:
                            return e.next = 4, this._request.send("auth.isUsernameRegistered", {
                                username: n
                            });
                        case 4:
                            return r = e.sent, i = r.data, e.abrupt("return", i && i.isRegistered);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return o.apply(this, arguments)
            })
        }, {
            key: "getLoginState",
            value: function() {
                return Promise.resolve(this.hasLoginState())
            }
        }, {
            key: "signInWithTicket",
            value: (i = n(t().mark((function e(n) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new ip(this.config).signIn(n));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e) {
                return i.apply(this, arguments)
            })
        }, {
            key: "shouldRefreshAccessToken",
            value: function(e) {
                this._request._shouldRefreshAccessTokenHook = e.bind(this)
            }
        }, {
            key: "getUserInfo",
            value: function() {
                return this._request.send("auth.getUserInfo", {}).then((function(e) {
                    return e.code ? e : r(r({}, e.data), {}, {
                        requestId: e.seqId
                    })
                }))
            }
        }, {
            key: "getAuthHeader",
            value: function() {
                var e = this._cache.keys,
                    t = e.refreshTokenKey,
                    n = e.accessTokenKey,
                    r = this._cache.getStore(t);
                return {
                    "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + r
                }
            }
        }, {
            key: "_onAnonymousConverted",
            value: function(e) {
                e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence)
            }
        }, {
            key: "_onLoginTypeChanged",
            value: function(e) {
                var t = e.data,
                    n = t.loginType,
                    r = t.persistence;
                t.env === this.config.env && (this._cache.updatePersistence(r), this._cache.setStore(this._cache.keys.loginTypeKey, n))
            }
        }]), e
    }(),
    up = function(e, t) {
        t = t || bh();
        var n = Xh(this.config.env),
            r = e.cloudPath,
            i = e.filePath,
            o = e.onUploadProgress,
            a = e.fileType,
            s = void 0 === a ? "image" : a;
        return n.send("storage.getUploadMetadata", {
            path: r
        }).then((function(e) {
            var a = e.data,
                u = a.url,
                c = a.authorization,
                l = a.token,
                f = a.fileId,
                h = a.cosFileId,
                p = e.requestId,
                d = {
                    key: r,
                    signature: c,
                    "x-cos-meta-fileid": h,
                    success_action_status: "201",
                    "x-cos-security-token": l
                };
            n.upload({
                url: u,
                data: d,
                file: i,
                name: r,
                fileType: s,
                onUploadProgress: o
            }).then((function(e) {
                201 === e.statusCode ? t(null, {
                    fileID: f,
                    requestId: p
                }) : t(new nh({
                    code: "STORAGE_REQUEST_FAIL",
                    message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
                }))
            })).catch((function(e) {
                t(e)
            }))
        })).catch((function(e) {
            t(e)
        })), t.promise
    },
    cp = function(e, t) {
        t = t || bh();
        var n = Xh(this.config.env),
            r = e.cloudPath;
        return n.send("storage.getUploadMetadata", {
            path: r
        }).then((function(e) {
            t(null, e)
        })).catch((function(e) {
            t(e)
        })), t.promise
    },
    lp = function(e, t) {
        var n = e.fileList;
        if (t = t || bh(), !n || !Array.isArray(n)) return {
            code: "INVALID_PARAM",
            message: "fileList必须是非空的数组"
        };
        var r, i = s(n);
        try {
            for (i.s(); !(r = i.n()).done;) {
                var o = r.value;
                if (!o || "string" != typeof o) return {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                }
            }
        } catch (e) {
            i.e(e)
        } finally {
            i.f()
        }
        var a = {
            fileid_list: n
        };
        return Xh(this.config.env).send("storage.batchDeleteFile", a).then((function(e) {
            e.code ? t(null, e) : t(null, {
                fileList: e.data.delete_list,
                requestId: e.requestId
            })
        })).catch((function(e) {
            t(e)
        })), t.promise
    },
    fp = function(e, t) {
        var n = e.fileList;
        t = t || bh(), n && Array.isArray(n) || t(null, {
            code: "INVALID_PARAM",
            message: "fileList必须是非空的数组"
        });
        var r, i = [],
            o = s(n);
        try {
            for (o.s(); !(r = o.n()).done;) {
                var a = r.value;
                "object" == p(a) ? (a.hasOwnProperty("fileID") && a.hasOwnProperty("maxAge") || t(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是包含fileID和maxAge的对象"
                }), i.push({
                    fileid: a.fileID,
                    max_age: a.maxAge
                })) : "string" == typeof a ? i.push({
                    fileid: a
                }) : t(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是字符串"
                })
            }
        } catch (e) {
            o.e(e)
        } finally {
            o.f()
        }
        var u = {
            file_list: i
        };
        return Xh(this.config.env).send("storage.batchGetDownloadUrl", u).then((function(e) {
            e.code ? t(null, e) : t(null, {
                fileList: e.data.download_list,
                requestId: e.requestId
            })
        })).catch((function(e) {
            t(e)
        })), t.promise
    },
    hp = function() {
        var e = n(t().mark((function e(n, r) {
            var i, o, a, s;
            return t().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return i = n.fileID, e.next = 3, fp.call(this, {
                            fileList: [{
                                fileID: i,
                                maxAge: 600
                            }]
                        });
                    case 3:
                        if ("SUCCESS" === (o = e.sent.fileList[0]).code) {
                            e.next = 6;
                            break
                        }
                        return e.abrupt("return", r ? r(o) : new Promise((function(e) {
                            e(o)
                        })));
                    case 6:
                        if (a = Xh(this.config.env), s = o.download_url, s = encodeURI(s), r) {
                            e.next = 10;
                            break
                        }
                        return e.abrupt("return", a.download({
                            url: s
                        }));
                    case 10:
                        return e.t0 = r, e.next = 13, a.download({
                            url: s
                        });
                    case 13:
                        e.t1 = e.sent, (0, e.t0)(e.t1);
                    case 15:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        })));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }(),
    pp = function(e, t) {
        var n, r = e.name,
            i = e.data,
            o = e.query,
            a = e.parse,
            s = e.search,
            u = e.timeout,
            c = t || bh();
        try {
            n = i ? JSON.stringify(i) : ""
        } catch (e) {
            return Promise.reject(e)
        }
        if (!r) return Promise.reject(new nh({
            code: "PARAM_ERROR",
            message: "函数名不能为空"
        }));
        var l = {
            inQuery: o,
            parse: a,
            search: s,
            function_name: r,
            request_data: n
        };
        return Xh(this.config.env).send("functions.invokeFunction", l, {
            timeout: u
        }).then((function(e) {
            if (e.code) c(null, e);
            else {
                var t = e.data.response_data;
                if (a) c(null, {
                    result: t,
                    requestId: e.requestId
                });
                else try {
                    t = JSON.parse(e.data.response_data), c(null, {
                        result: t,
                        requestId: e.requestId
                    })
                } catch (e) {
                    c(new nh({
                        message: "response data must be json"
                    }))
                }
            }
            return c.promise
        })).catch((function(e) {
            c(e)
        })), c.promise
    },
    dp = {
        timeout: 15e3,
        persistence: "session"
    },
    gp = {},
    vp = new(function() {
        function e(t) {
            u(this, e), this.config = t || this.config, this.authObj = void 0
        }
        var i;
        return c(e, [{
            key: "init",
            value: function(t) {
                switch (Th.adapter || (this.requestClient = new Th.adapter.reqClass({
                    timeout: t.timeout || 5e3,
                    timeoutMsg: "请求在".concat((t.timeout || 5e3) / 1e3, "s内未完成，已中断")
                })), this.config = r(r({}, dp), t), !0) {
                    case this.config.timeout > 6e5:
                        console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                        break;
                    case this.config.timeout < 100:
                        console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100
                }
                return new e(this.config)
            }
        }, {
            key: "auth",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.persistence;
                if (this.authObj) return this.authObj;
                var n, i = t || Th.adapter.primaryStorage || dp.persistence;
                return i !== this.config.persistence && (this.config.persistence = i),
                    function(e) {
                        var t = e.env;
                        Oh[t] = new Ch(e), Bh[t] = new Ch(r(r({}, e), {}, {
                            persistence: "local"
                        }))
                    }(this.config), n = this.config, Gh[n.env] = new Yh(n), this.authObj = new sp(this.config), this.authObj
            }
        }, {
            key: "on",
            value: function(e, t) {
                return Lh.apply(this, [e, t])
            }
        }, {
            key: "off",
            value: function(e, t) {
                return Uh.apply(this, [e, t])
            }
        }, {
            key: "callFunction",
            value: function(e, t) {
                return pp.apply(this, [e, t])
            }
        }, {
            key: "deleteFile",
            value: function(e, t) {
                return lp.apply(this, [e, t])
            }
        }, {
            key: "getTempFileURL",
            value: function(e, t) {
                return fp.apply(this, [e, t])
            }
        }, {
            key: "downloadFile",
            value: function(e, t) {
                return hp.apply(this, [e, t])
            }
        }, {
            key: "uploadFile",
            value: function(e, t) {
                return up.apply(this, [e, t])
            }
        }, {
            key: "getUploadMetadata",
            value: function(e, t) {
                return cp.apply(this, [e, t])
            }
        }, {
            key: "registerExtension",
            value: function(e) {
                gp[e.name] = e
            }
        }, {
            key: "invokeExtension",
            value: (i = n(t().mark((function e(n, r) {
                var i;
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (i = gp[n]) {
                                e.next = 3;
                                break
                            }
                            throw new nh({
                                message: "扩展".concat(n, " 必须先注册")
                            });
                        case 3:
                            return e.next = 5, i.invoke(r, this);
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function(e, t) {
                return i.apply(this, arguments)
            })
        }, {
            key: "useAdapters",
            value: function(e) {
                var t = function(e) {
                        var t, n, r = (t = e, "[object Array]" === Object.prototype.toString.call(t) ? e : [e]),
                            i = s(r);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var o = n.value,
                                    a = o.isMatch,
                                    u = o.genAdapter,
                                    c = o.runtime;
                                if (a()) return {
                                    adapter: u(),
                                    runtime: c
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }(e) || {},
                    n = t.adapter,
                    r = t.runtime;
                n && (Th.adapter = n), r && (Th.runtime = r)
            }
        }]), e
    }());
 function mp(e, t, n) {
    void 0 === n && (n = {});
    var r = /\?/.test(t),
        i = "";
    for (var o in n) "" === i ? !r && (t += "?") : i += "&", i += o + "=" + encodeURIComponent(n[o]);
    return /^http(s)?:\/\//.test(t += i) ? t : "" + e + t
}
var yp = function() {
        function e() {
            u(this, e)
        }
        return c(e, [{
            key: "get",
            value: function(e) {
                var t = e.url,
                    n = e.data,
                    r = e.headers,
                    i = e.timeout;
                return new Promise((function(e, o) {
                    rh.request({
                        url: mp("https:", t),
                        data: n,
                        method: "GET",
                        header: r,
                        timeout: i,
                        success: function(t) {
                            e(t)
                        },
                        fail: function(e) {
                            o(e)
                        }
                    })
                }))
            }
        }, {
            key: "post",
            value: function(e) {
                var t = e.url,
                    n = e.data,
                    r = e.headers,
                    i = e.timeout;
                return new Promise((function(e, o) {
                    rh.request({
                        url: mp("https:", t),
                        data: n,
                        method: "POST",
                        header: r,
                        timeout: i,
                        success: function(t) {
                            e(t)
                        },
                        fail: function(e) {
                            o(e)
                        }
                    })
                }))
            }
        }, {
            key: "upload",
            value: function(e) {
                return new Promise((function(t, n) {
                    var r = e.url,
                        i = e.file,
                        o = e.data,
                        a = e.headers,
                        s = e.fileType,
                        u = rh.uploadFile({
                            url: mp("https:", r),
                            name: "file",
                            formData: Object.assign({}, o),
                            filePath: i,
                            fileType: s,
                            header: a,
                            success: function(e) {
                                var n = {
                                    statusCode: e.statusCode,
                                    data: e.data || {}
                                };
                                200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n)
                            },
                            fail: function(e) {
                                n(new Error(e.errMsg || "uploadFile:fail"))
                            }
                        });
                    "function" == typeof e.onUploadProgress && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate((function(t) {
                        e.onUploadProgress({
                            loaded: t.totalBytesSent,
                            total: t.totalBytesExpectedToSend
                        })
                    }))
                }))
            }
        }]), e
    }(),
    _p = {
        setItem: function(e, t) {
            rh.setStorageSync(e, t)
        },
        getItem: function(e) {
            return rh.getStorageSync(e)
        },
        removeItem: function(e) {
            rh.removeStorageSync(e)
        },
        clear: function() {
            rh.clearStorageSync()
        }
    },
    bp = {
        genAdapter: function() {
            return {
                root: {},
                reqClass: yp,
                localStorage: _p,
                primaryStorage: "local"
            }
        },
        isMatch: function() {
            return !0
        },
        runtime: "uni_app"
    };
vp.useAdapters(bp);
var wp = vp,
    xp = wp.init;
wp.init = function(e) {
    e.env = e.spaceId;
    var t = xp.call(this, e);
    t.config.provider = "tencent", t.config.spaceId = e.spaceId;
    var n = t.auth;
    return t.auth = function(e) {
        var t = n.call(this, e);
        return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((function(e) {
            var n;
            t[e] = (n = t[e], function(e) {
                var t = Xf(e = e || {}),
                    r = t.success,
                    i = t.fail,
                    o = t.complete;
                if (!(r || i || o)) return n.call(this, e);
                n.call(this, e).then((function(e) {
                    r && r(e), o && o(e)
                }), (function(e) {
                    i && i(e), o && o(e)
                }))
            }).bind(t)
        })), t
    }, t.customAuth = t.auth, t
};
var kp = wp;
 function Sp(e, t) {
    return Tp.apply(this, arguments)
}
 function Tp() {
    return (Tp = n(t().mark((function e(n, i) {
        var o, a, s;
        return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = "http://".concat(n, ":").concat(i, "/system/ping"), e.prev = 1, e.next = 4, s = {
                        url: o,
                        timeout: 500
                    }, new Promise((function(e, t) {
                        rh.request(r(r({}, s), {}, {
                            success: function(t) {
                                e(t)
                            },
                            fail: function(e) {
                                t(e)
                            }
                        }))
                    }));
                case 4:
                    return a = e.sent, e.abrupt("return", !(!a.data || 0 !== a.data.code));
                case 8:
                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", !1);
                case 11:
                case "end":
                    return e.stop()
            }
        }), e, null, [
            [1, 8]
        ])
    })))).apply(this, arguments)
}
var Ip = {
        "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
        "serverless.file.resource.report": "storage/report",
        "serverless.file.resource.delete": "storage/delete",
        "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
    },
    Ep = {
        init: function(e) {
            var r = new(function() {
                    function e(t) {
                        if (u(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                                if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
                            })), !t.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
                        this.config = Object.assign({}, t), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = rh
                    }
                    var r, i;
                    return c(e, [{
                        key: "request",
                        value: (i = n(t().mark((function e(n) {
                            var r = this,
                                i = arguments;
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return !(i.length > 1 && void 0 !== i[1]) || i[1], e.abrupt("return", (n = this.setupRequest(n), Promise.resolve().then((function() {
                                            return hh(n, r.adapter.request)
                                        }))));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "requestLocal",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(n, r) {
                                t.adapter.request(Object.assign(e, {
                                    complete: function(e) {
                                        if (e || (e = {}), !e.statusCode || e.statusCode >= 400) {
                                            var t = e.data && e.data.code || "SYS_ERR",
                                                i = e.data && e.data.message || "request:fail";
                                            return r(new nh({
                                                code: t,
                                                message: i
                                            }))
                                        }
                                        n({
                                            success: !0,
                                            result: e.data
                                        })
                                    }
                                }))
                            }))
                        }
                    }, {
                        key: "setupRequest",
                        value: function(e) {
                            var t = Object.assign({}, e, {
                                    spaceId: this.config.spaceId,
                                    timestamp: Date.now()
                                }),
                                n = {
                                    "Content-Type": "application/json"
                                };
                            n["x-serverless-sign"] = fh(t, this.config.clientSecret);
                            var r = uh();
                            n["x-client-info"] = encodeURIComponent(JSON.stringify(r));
                            var i = ih().token;
                            return n["x-client-token"] = i, {
                                url: this.config.requestUrl,
                                method: "POST",
                                data: t,
                                dataType: "json",
                                header: JSON.parse(JSON.stringify(n))
                            }
                        }
                    }, {
                        key: "setupLocalRequest",
                        value: (r = n(t().mark((function e(r) {
                            var i, o, a, s, u, c, l, f, h;
                            return t().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = uh(), o = ih(), a = o.token, s = Object.assign({}, r, {
                                                spaceId: this.config.spaceId,
                                                timestamp: Date.now(),
                                                clientInfo: i,
                                                token: a
                                            }), u = this.__dev__ && this.__dev__.debugInfo || {}, c = u.address, l = u.servePort, e.next = 9,
                                            function() {
                                                var e = n(t().mark((function e(n, r) {
                                                    var i, o, a;
                                                    return t().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                o = 0;
                                                            case 1:
                                                                if (!(o < n.length)) {
                                                                    e.next = 11;
                                                                    break
                                                                }
                                                                return a = n[o], e.next = 5, Sp(a, r);
                                                            case 5:
                                                                if (!e.sent) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return i = a, e.abrupt("break", 11);
                                                            case 8:
                                                                o++, e.next = 1;
                                                                break;
                                                            case 11:
                                                                return e.abrupt("return", {
                                                                    address: i,
                                                                    port: r
                                                                });
                                                            case 12:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()(c, l);
                                    case 9:
                                        return f = e.sent, h = f.address, e.abrupt("return", {
                                            url: "http://".concat(h, ":").concat(l, "/").concat(Ip[r.method]),
                                            method: "POST",
                                            data: s,
                                            dataType: "json",
                                            header: JSON.parse(JSON.stringify({
                                                "Content-Type": "application/json"
                                            }))
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "callFunction",
                        value: function(e) {
                            var t = {
                                method: "serverless.function.runtime.invoke",
                                params: JSON.stringify({
                                    functionTarget: e.name,
                                    functionArgs: e.data || {}
                                })
                            };
                            return this.request(t, !1)
                        }
                    }, {
                        key: "getUploadFileOptions",
                        value: function(e) {
                            var t = {
                                method: "serverless.file.resource.generateProximalSign",
                                params: JSON.stringify(e)
                            };
                            return this.request(t)
                        }
                    }, {
                        key: "reportUploadFile",
                        value: function(e) {
                            var t = {
                                method: "serverless.file.resource.report",
                                params: JSON.stringify(e)
                            };
                            return this.request(t)
                        }
                    }, {
                        key: "uploadFile",
                        value: function(e) {
                            var t, n = this,
                                r = e.filePath,
                                i = e.cloudPath,
                                o = e.fileType,
                                a = void 0 === o ? "image" : o,
                                s = e.onUploadProgress;
                            if (!i) throw new nh({
                                code: "CLOUDPATH_REQUIRED",
                                message: "cloudPath不可为空"
                            });
                            return this.getUploadFileOptions({
                                cloudPath: i
                            }).then((function(e) {
                                var i = e.result,
                                    o = i.url,
                                    u = i.formData,
                                    c = i.name;
                                return t = e.result.fileUrl, new Promise((function(e, t) {
                                    var i = n.adapter.uploadFile({
                                        url: o,
                                        formData: u,
                                        name: c,
                                        filePath: r,
                                        fileType: a,
                                        success: function(n) {
                                            n && n.statusCode < 400 ? e(n) : t(new nh({
                                                code: "UPLOAD_FAILED",
                                                message: "文件上传失败"
                                            }))
                                        },
                                        fail: function(e) {
                                            t(new nh({
                                                code: e.code || "UPLOAD_FAILED",
                                                message: e.message || e.errMsg || "文件上传失败"
                                            }))
                                        }
                                    });
                                    "function" == typeof s && i && "function" == typeof i.onProgressUpdate && i.onProgressUpdate((function(e) {
                                        s({
                                            loaded: e.totalBytesSent,
                                            total: e.totalBytesExpectedToSend
                                        })
                                    }))
                                }))
                            })).then((function() {
                                return n.reportUploadFile({
                                    cloudPath: i
                                })
                            })).then((function(e) {
                                return new Promise((function(n, i) {
                                    e.success ? n({
                                        success: !0,
                                        filePath: r,
                                        fileID: t
                                    }) : i(new nh({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "deleteFile",
                        value: function(e) {
                            var t = e.fileList,
                                n = {
                                    method: "serverless.file.resource.delete",
                                    params: JSON.stringify({
                                        fileList: t
                                    })
                                };
                            return this.request(n).then((function(e) {
                                if (e.success) return e.result;
                                throw new nh({
                                    code: "DELETE_FILE_FAILED",
                                    message: "删除文件失败"
                                })
                            }))
                        }
                    }, {
                        key: "getTempFileURL",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.fileList,
                                n = e.maxAge;
                            if (!Array.isArray(t) || 0 === t.length) throw new nh({
                                code: "INVALID_PARAM",
                                message: "fileList的元素必须是非空的字符串"
                            });
                            var r = {
                                method: "serverless.file.resource.getTempFileURL",
                                params: JSON.stringify({
                                    fileList: t,
                                    maxAge: n
                                })
                            };
                            return this.request(r).then((function(e) {
                                if (e.success) return {
                                    fileList: e.result.fileList.map((function(e) {
                                        return {
                                            fileID: e.fileID,
                                            tempFileURL: e.tempFileURL
                                        }
                                    }))
                                };
                                throw new nh({
                                    code: "GET_TEMP_FILE_URL_FAILED",
                                    message: "获取临时文件链接失败"
                                })
                            }))
                        }
                    }]), e
                }())(e),
                i = {
                    signInAnonymously: function() {
                        return Promise.resolve()
                    },
                    getLoginState: function() {
                        return Promise.resolve(!1)
                    }
                };
            return r.auth = function() {
                return i
            }, r.customAuth = r.auth, r
        }
    },
    Ap = cf((function(e, t) {
        e.exports = lf.enc.Hex
    }));
 function Cp() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16)
    }))
}
 function Op() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.data,
        r = t.functionName,
        i = t.method,
        o = t.headers,
        a = t.signHeaderKeys,
        s = void 0 === a ? [] : a,
        u = t.config,
        c = String(Date.now()),
        l = Cp(),
        h = Object.assign({}, o, {
            "x-from-app-id": u.spaceAppId,
            "x-from-env-id": u.spaceId,
            "x-to-env-id": u.spaceId,
            "x-from-instance-id": c,
            "x-from-function-name": r,
            "x-client-timestamp": c,
            "x-alipay-source": "client",
            "x-request-id": l,
            "x-alipay-callid": l,
            "x-trace-id": l
        }),
        p = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(s),
        d = e.split("?") || [],
        g = f(d, 2),
        v = g[0],
        m = void 0 === v ? "" : v,
        y = g[1],
        _ = void 0 === y ? "" : y,
        b = function(e) {
            var t = "HMAC-SHA256",
                n = e.signedHeaders.join(";"),
                r = e.signedHeaders.map((function(t) {
                    return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n")
                })).join(""),
                i = yh(e.body).toString(Ap),
                o = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(r, "\n").concat(n, "\n").concat(i, "\n"),
                a = yh(o).toString(Ap),
                s = "".concat(t, "\n").concat(e.timestamp, "\n").concat(a, "\n"),
                u = _h(s, e.secretKey).toString(Ap);
            return "".concat(t, " Credential=").concat(e.secretId, ", SignedHeaders=").concat(n, ", Signature=").concat(u)
        }({
            path: m,
            query: _,
            method: i,
            headers: h,
            timestamp: c,
            body: JSON.stringify(n),
            secretId: u.accessKey,
            secretKey: u.secretKey,
            signedHeaders: p.sort()
        });
    return {
        url: "".concat(u.endpoint).concat(e),
        headers: Object.assign({}, h, {
            Authorization: b
        })
    }
}
 function Bp(e) {
    var t = e.url,
        n = e.data,
        r = e.method,
        i = void 0 === r ? "POST" : r,
        o = e.headers,
        a = void 0 === o ? {} : o,
        s = e.timeout;
    return new Promise((function(e, r) {
        rh.request({
            url: t,
            method: i,
            data: "object" == p(n) ? JSON.stringify(n) : n,
            header: a,
            dataType: "json",
            timeout: s,
            complete: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = a["x-trace-id"] || "";
                if (!t.statusCode || t.statusCode >= 400) {
                    var i = t.data || {},
                        o = i.message,
                        s = i.errMsg,
                        u = i.trace_id;
                    return r(new nh({
                        code: "SYS_ERR",
                        message: o || s || "request:fail",
                        requestId: u || n
                    }))
                }
                e({
                    status: t.statusCode,
                    data: t.data,
                    headers: t.header,
                    requestId: n
                })
            }
        })
    }))
}
 function Pp(e, t) {
    var n = e.path,
        r = e.data,
        i = e.method,
        o = void 0 === i ? "GET" : i,
        a = Op(n, {
            functionName: "",
            data: r,
            method: o,
            headers: {
                "x-alipay-cloud-mode": "oss",
                "x-data-api-type": "oss",
                "x-expire-timestamp": Date.now() + 6e4
            },
            signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
            config: t
        });
    return Bp({
        url: a.url,
        data: r,
        method: o,
        headers: a.headers
    }).then((function(e) {
        var t = e.data || {};
        if (!t.success) throw new nh({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
        });
        return t.data || {}
    })).catch((function(e) {
        throw new nh({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
        })
    }))
}
 function Fp() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.trim().replace(/^cloud:\/\//, ""),
        n = t.indexOf("/");
    if (n <= 0) throw new nh({
        code: "INVALID_PARAM",
        message: "fileID不合法"
    });
    var r = t.substring(0, n),
        i = t.substring(n + 1);
    return r !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), i
}
 function jp() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""))
}
var Rp = function() {
        function e(t) {
            u(this, e), this.config = t
        }
        return c(e, [{
            key: "signedURL",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = "/ws/function/".concat(e),
                    r = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
                    i = Object.assign({}, t, {
                        accessKeyId: this.config.accessKey,
                        signatureNonce: Cp(),
                        timestamp: "" + Date.now()
                    }),
                    o = [n, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map((function(e) {
                        return i[e] ? "".concat(e, "=").concat(i[e]) : null
                    })).filter(Boolean).join("&"), "host:".concat(r)].join("\n"),
                    a = ["HMAC-SHA256", yh(o).toString(Ap)].join("\n"),
                    s = _h(a, this.config.secretKey).toString(Ap),
                    u = Object.keys(i).map((function(e) {
                        return "".concat(e, "=").concat(encodeURIComponent(i[e]))
                    })).join("&");
                return "".concat(this.config.wsEndpoint).concat(n, "?").concat(u, "&signature=").concat(s)
            }
        }]), e
    }(),
    Lp = {
        init: function(e) {
            e.provider = "alipay";
            var r = new(function() {
                function e(t) {
                    if (u(this, e), ["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((function(e) {
                            if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error("".concat(e, " required"))
                        })), t.endpoint) {
                        if ("string" != typeof t.endpoint) throw new Error("endpoint must be string");
                        if (!/^https:\/\//.test(t.endpoint)) throw new Error("endpoint must start with https://");
                        t.endpoint = t.endpoint.replace(/\/$/, "")
                    }
                    this.config = Object.assign({}, t, {
                        endpoint: t.endpoint || "https://".concat(t.spaceId, ".api-hz.cloudbasefunction.cn"),
                        wsEndpoint: t.wsEndpoint || "wss://".concat(t.spaceId, ".api-hz.cloudbasefunction.cn")
                    }), this._websocket = new Rp(this.config)
                }
                var r, i, o;
                return c(e, [{
                    key: "callFunction",
                    value: function(e) {
                        return function(e, t) {
                            var n = e.name,
                                r = e.data,
                                i = e.async,
                                o = void 0 !== i && i,
                                a = e.timeout,
                                s = "POST",
                                u = {
                                    "x-to-function-name": n
                                };
                            o && (u["x-function-invoke-type"] = "async");
                            var c = Op("/functions/invokeFunction", {
                                functionName: n,
                                data: r,
                                method: s,
                                headers: u,
                                signHeaderKeys: ["x-to-function-name"],
                                config: t
                            });
                            return Bp({
                                url: c.url,
                                data: r,
                                method: s,
                                headers: c.headers,
                                timeout: a
                            }).then((function(e) {
                                var t = 0;
                                if (o) {
                                    var n = e.data || {};
                                    t = "200" === n.errCode ? 0 : n.errCode, e.data = n.data || {}, e.errMsg = n.errMsg
                                }
                                if (0 !== t) throw new nh({
                                    code: t,
                                    message: e.errMsg,
                                    requestId: e.requestId
                                });
                                return {
                                    errCode: t,
                                    success: 0 === t,
                                    requestId: e.requestId,
                                    result: e.data
                                }
                            })).catch((function(e) {
                                throw new nh({
                                    code: e.errCode,
                                    message: e.errMsg,
                                    requestId: e.requestId
                                })
                            }))
                        }(e, this.config)
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var t = e.url,
                            n = e.filePath,
                            r = e.fileType,
                            i = e.formData,
                            o = e.onUploadProgress;
                        return new Promise((function(e, a) {
                            var s = rh.uploadFile({
                                url: t,
                                filePath: n,
                                fileType: r,
                                formData: i,
                                name: "file",
                                success: function(t) {
                                    t && t.statusCode < 400 ? e(t) : a(new nh({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }))
                                },
                                fail: function(e) {
                                    a(new nh({
                                        code: e.code || "UPLOAD_FAILED",
                                        message: e.message || e.errMsg || "文件上传失败"
                                    }))
                                }
                            });
                            "function" == typeof o && s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate((function(e) {
                                o({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                })
                            }))
                        }))
                    }
                }, {
                    key: "uploadFile",
                    value: (o = n(t().mark((function e(n) {
                        var r, i, o, a, s, u, c, l, f, h, p;
                        return t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = n.filePath, i = n.cloudPath, o = void 0 === i ? "" : i, a = n.fileType, s = void 0 === a ? "image" : a, u = n.onUploadProgress, "string" === bf(o)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new nh({
                                        code: "INVALID_PARAM",
                                        message: "cloudPath必须为字符串类型"
                                    });
                                case 3:
                                    if (o = o.trim()) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new nh({
                                        code: "INVALID_PARAM",
                                        message: "cloudPath不可为空"
                                    });
                                case 5:
                                    if (!/:\/\//.test(o)) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new nh({
                                        code: "INVALID_PARAM",
                                        message: "cloudPath不合法"
                                    });
                                case 7:
                                    return e.next = 9, Pp({
                                        path: "/".concat(o.replace(/^\//, ""), "?post_url")
                                    }, this.config);
                                case 9:
                                    return c = e.sent, l = c.file_id, f = c.upload_url, h = c.form_data, p = h && h.reduce((function(e, t) {
                                        return e[t.key] = t.value, e
                                    }), {}), e.abrupt("return", this.uploadFileToOSS({
                                        url: f,
                                        filePath: r,
                                        fileType: s,
                                        formData: p,
                                        onUploadProgress: u
                                    }).then((function() {
                                        return {
                                            fileID: l
                                        }
                                    })));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "getTempFileURL",
                    value: (i = n(t().mark((function e(n) {
                        var r, i = this;
                        return t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.fileList, e.abrupt("return", new Promise((function(e, t) {
                                        (!r || r.length < 0) && e({
                                            code: "INVALID_PARAM",
                                            message: "fileList不能为空数组"
                                        }), r.length > 50 && e({
                                            code: "INVALID_PARAM",
                                            message: "fileList数组长度不能超过50"
                                        });
                                        var n, o = [],
                                            a = s(r);
                                        try {
                                            for (a.s(); !(n = a.n()).done;) {
                                                var u = n.value,
                                                    c = void 0;
                                                "string" !== bf(u) && e({
                                                    code: "INVALID_PARAM",
                                                    message: "fileList的元素必须是非空的字符串"
                                                });
                                                try {
                                                    c = Fp.call(i, u)
                                                } catch (e) {
                                                    console.warn(e.errCode, e.errMsg), c = u
                                                }
                                                o.push({
                                                    file_id: c,
                                                    expire: 600
                                                })
                                            }
                                        } catch (e) {
                                            a.e(e)
                                        } finally {
                                            a.f()
                                        }
                                        Pp({
                                            path: "/?download_url",
                                            data: {
                                                file_list: o
                                            },
                                            method: "POST"
                                        }, i.config).then((function(t) {
                                            var n = t.file_list;
                                            e({
                                                fileList: (void 0 === n ? [] : n).map((function(e) {
                                                    return {
                                                        fileID: jp.call(i, e.file_id),
                                                        tempFileURL: e.download_url
                                                    }
                                                }))
                                            })
                                        })).catch((function(e) {
                                            return t(e)
                                        }))
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "connectWebSocket",
                    value: (r = n(t().mark((function e(n) {
                        var r, i;
                        return t().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.name, i = n.query, e.abrupt("return", rh.connectSocket({
                                        url: this._websocket.signedURL(r, i),
                                        complete: function() {}
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return r.apply(this, arguments)
                    })
                }]), e
            }())(e);
            return r.auth = function() {
                return {
                    signInAnonymously: function() {
                        return Promise.resolve()
                    },
                    getLoginState: function() {
                        return Promise.resolve(!0)
                    }
                }
            }, r
        }
    };
 function Mp(e) {
    var t, n = e.data;
    t = uh();
    var r = JSON.parse(JSON.stringify(n || {}));
    if (Object.assign(r, {
            clientInfo: t
        }), !r.uniIdToken) {
        var i = ih().token;
        i && (r.uniIdToken = i)
    }
    return r
}
var Up = [{
        rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
        content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
        mode: "append"
    }],
    Dp = /[\\^$.*+?()[\]{}|]/g,
    Np = RegExp(Dp.source);
 function qp(e, t, n) {
    return e.replace(new RegExp((r = t) && Np.test(r) ? r.replace(Dp, "\\$&") : r, "g"), n);
    var r
}
var zp, $p = "request",
    Hp = "response",
    Kp = "_globalUniCloudStatus",
    Vp = 2e4,
    Wp = {
        code: 20101,
        message: "Invalid client"
    };
 function Zp(e) {
    var t = e || {},
        n = t.errSubject,
        r = t.subject,
        i = t.errCode,
        o = t.errMsg,
        a = t.code,
        s = t.message,
        u = t.cause;
    return new nh({
        subject: n || r || "uni-secure-network",
        code: i || a || Vp,
        message: o || s,
        cause: u
    })
}
 function Jp() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.secretType;
    return t === $p || t === Hp || "both" === t
}
 function Qp(e) {
    e.functionName, e.result, e.logPvd
}
 function Yp(e) {
    var t = e.callFunction,
        n = function(n) {
            var r = this,
                i = n.name;
            n.data = Mp.call(e, {
                data: n.data
            });
            var o = {
                    aliyun: "aliyun",
                    tencent: "tcb",
                    tcb: "tcb",
                    alipay: "alipay",
                    dcloud: "dcloud"
                }[this.config.provider],
                a = Jp(n) || !1;
            return t.call(this, n).then((function(e) {
                return e.errCode = 0, !a && Qp.call(r, {
                    functionName: i,
                    result: e,
                    logPvd: o
                }), Promise.resolve(e)
            }), (function(e) {
                return !a && Qp.call(r, {
                    functionName: i,
                    result: e,
                    logPvd: o
                }), e && e.message && (e.message = function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.message, n = void 0 === t ? "" : t, r = e.extraInfo, i = void 0 === r ? {} : r, o = e.formatter, a = void 0 === o ? [] : o, s = 0; s < a.length; s++) {
                        var u = a[s],
                            c = u.rule,
                            l = u.content,
                            f = u.mode,
                            h = n.match(c);
                        if (h) {
                            for (var p = l, d = 1; d < h.length; d++) p = qp(p, "{$".concat(d, "}"), h[d]);
                            for (var g in i) p = qp(p, "{".concat(g, "}"), i[g]);
                            return "replace" === f ? p : n + p
                        }
                    }
                    return n
                }({
                    message: "[".concat(n.name, "]: ").concat(e.message),
                    formatter: Up,
                    extraInfo: {
                        functionName: i
                    }
                })), Promise.reject(e)
            }))
        };
    e.callFunction = function(t) {
        var r, i, o = e.config,
            a = o.provider,
            s = o.spaceId,
            u = t.name;
        return t.data = t.data || {}, r = (r = n).bind(e), i = function(e) {
            var t = e.name,
                n = e.data;
            return "uni-id-co" === t && "secureNetworkHandshakeByWeixin" === (void 0 === n ? {} : n).method
        }(t) ? r.call(e, t) : Jp(t) ? new zp({
            secretType: t.secretType,
            uniCloudIns: e
        }).wrapEncryptDataCallFunction(n.bind(e))(t) : function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.provider,
                n = e.spaceId,
                r = e.functionName,
                i = ah(),
                o = i.appId,
                a = i.uniPlatform,
                s = i.osName,
                u = a;
            "app" === a && (u = s);
            var c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.provider,
                    n = e.spaceId,
                    r = Af;
                if (!r) return {};
                t = function(e) {
                    return "tencent" === e ? "tcb" : e
                }(t);
                var i = r.find((function(e) {
                    return e.provider === t && e.spaceId === n
                }));
                return i && i.config
            }({
                provider: t,
                spaceId: n
            });
            if (!c || !c.accessControl || !c.accessControl.enable) return !1;
            var l = c.accessControl.function || {},
                f = Object.keys(l);
            if (0 === f.length) return !0;
            var h = function(e, t) {
                for (var n, r, i, o = 0; o < e.length; o++) {
                    var a = e[o];
                    a !== t ? "*" !== a ? a.split(",").map((function(e) {
                        return e.trim()
                    })).indexOf(t) > -1 && (r = a) : i = a : n = a
                }
                return n || r || i
            }(f, r);
            if (!h) return !1;
            if ((l[h] || []).find((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e.appId === o && (e.platform || "").toLowerCase() === u.toLowerCase()
                }))) return !0;
            throw console.error("此应用[appId: ".concat(o, ", platform: ").concat(u, "]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Zp(Wp)
        }({
            provider: a,
            spaceId: s,
            functionName: u
        }) ? new zp({
            secretType: t.secretType,
            uniCloudIns: e
        }).wrapVerifyClientCallFunction(n.bind(e))(t) : r(t), Object.defineProperty(i, "result", {get: function() {
                return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}
            }
        }), i.then((function(e) {
            return e
        }))
    }
}
zp = c((function e() {
    throw u(this, e), Zp({
        message: "Platform ".concat("mp-weixin", " is not enabled, please check whether secure network module is enabled in your manifest.json")
    })
}));
var Gp = Symbol("CLIENT_DB_INTERNAL");
 function Xp(e, t) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Gp, e.inspect = null, e.__v_raw = void 0, new Proxy(e, {get: function(e, n, r) {
            if ("_uniClient" === n) return null;
            if ("symbol" == p(n)) return e[n];
            if (n in e || "string" != typeof n) {
                var i = e[n];
                return "function" == typeof i ? i.bind(e) : i
            }
            return t.get(e, n, r)
        }
    })
}
 function ed(e) {
    return {
        on: function(t, n) {
            e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n)
        },
        off: function(t, n) {
            e[t] = e[t] || [];
            var r = e[t].indexOf(n); - 1 !== r && e[t].splice(r, 1)
        }
    }
}
var td = ["db.Geo", "db.command", "command.aggregate"];
 function nd(e, t) {
    return td.indexOf("".concat(e, ".").concat(t)) > -1
}
 function rd(e) {
    switch (bf(e = function e(t) {
        return t && e(t.__v_raw) || t
    }(e))) {
        case "array":
            return e.map((function(e) {
                return rd(e)
            }));
        case "object":
            return e._internalType === Gp || Object.keys(e).forEach((function(t) {
                e[t] = rd(e[t])
            })), e;
        case "regexp":
            return {
                $regexp: {
                    source: e.source,
                    flags: e.flags
                }
            };
        case "date":
            return {
                $date: e.toISOString()
            };
        default:
            return e
    }
}
 function id(e) {
    return e && e.content && e.content.$method
}
var od = function() {
    function e(t, n, r) {
        u(this, e), this.content = t, this.prevStage = n || null, this.udb = null, this._database = r
    }
    return c(e, [{
        key: "toJSON",
        value: function() {
            for (var e = this, t = [e.content]; e.prevStage;) e = e.prevStage, t.push(e.content);
            return {
                $db: t.reverse().map((function(e) {
                    return {
                        $method: e.$method,
                        $param: rd(e.$param)
                    }
                }))
            }
        }
    }, {
        key: "toString",
        value: function() {
            return JSON.stringify(this.toJSON())
        }
    }, {
        key: "getAction",
        value: function() {
            var e = this.toJSON().$db.find((function(e) {
                return "action" === e.$method
            }));
            return e && e.$param && e.$param[0]
        }
    }, {
        key: "getCommand",
        value: function() {
            return {
                $db: this.toJSON().$db.filter((function(e) {
                    return "action" !== e.$method
                }))
            }
        }
    }, {
        key: "isAggregate",
        get: function() {
            for (var e = this; e;) {
                var t = id(e),
                    n = id(e.prevStage);
                if ("aggregate" === t && "collection" === n || "pipeline" === t) return !0;
                e = e.prevStage
            }
            return !1
        }
    }, {
        key: "isCommand",
        get: function() {
            for (var e = this; e;) {
                if ("command" === id(e)) return !0;
                e = e.prevStage
            }
            return !1
        }
    }, {
        key: "isAggregateCommand",
        get: function() {
            for (var e = this; e;) {
                var t = id(e),
                    n = id(e.prevStage);
                if ("aggregate" === t && "command" === n) return !0;
                e = e.prevStage
            }
            return !1
        }
    }, {
        key: "getNextStageFn",
        value: function(e) {
            var t = this;
            return function() {
                return ad({
                    $method: e,
                    $param: rd(Array.from(arguments))
                }, t, t._database)
            }
        }
    }, {
        key: "count",
        get: function() {
            return this.isAggregate ? this.getNextStageFn("count") : function() {
                return this._send("count", Array.from(arguments))
            }
        }
    }, {
        key: "remove",
        get: function() {
            return this.isCommand ? this.getNextStageFn("remove") : function() {
                return this._send("remove", Array.from(arguments))
            }
        }
    }, {
        key: "get",
        value: function() {
            return this._send("get", Array.from(arguments))
        }
    }, {
        key: "add",
        get: function() {
            return this.isCommand ? this.getNextStageFn("add") : function() {
                return this._send("add", Array.from(arguments))
            }
        }
    }, {
        key: "update",
        value: function() {
            return this._send("update", Array.from(arguments))
        }
    }, {
        key: "end",
        value: function() {
            return this._send("end", Array.from(arguments))
        }
    }, {
        key: "set",
        get: function() {
            return this.isCommand ? this.getNextStageFn("set") : function() {
                throw new Error("JQL禁止使用set方法")
            }
        }
    }, {
        key: "_send",
        value: function(e, t) {
            var n = this.getAction(),
                r = this.getCommand();
            return r.$db.push({
                $method: e,
                $param: rd(t)
            }), this._database._callCloudFunction({
                action: n,
                command: r
            })
        }
    }]), e
}();
 function ad(e, t, n) {
    return Xp(new od(e, t, n), {get: function(e, t) {
            var r = "db";
            return e && e.content && (r = e.content.$method), nd(r, t) ? ad({
                $method: t
            }, e, n) : function() {
                return ad({
                    $method: t,
                    $param: rd(Array.from(arguments))
                }, e, n)
            }
        }
    })
}
 function sd(e) {
    var t = e.path,
        n = e.method;
    return function() {
        function e() {
            u(this, e), this.param = Array.from(arguments)
        }
        return c(e, [{
            key: "toJSON",
            value: function() {
                return {
                    $newDb: [].concat(h(t.map((function(e) {
                        return {
                            $method: e
                        }
                    }))), [{
                        $method: n,
                        $param: this.param
                    }])
                }
            }
        }, {
            key: "toString",
            value: function() {
                return JSON.stringify(this.toJSON())
            }
        }]), e
    }()
}
 function ud(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return Xp(new e(t), {get: function(e, t) {
            return nd("db", t) ? ad({
                $method: t
            }, null, e) : function() {
                return ad({
                    $method: t,
                    $param: rd(Array.from(arguments))
                }, null, e)
            }
        }
    })
}
var cd = function(e) {
        o(n, e);
        var t = a(n);
         function n() {
            return u(this, n), t.apply(this, arguments)
        }
        return c(n, [{
            key: "_parseResult",
            value: function(e) {
                return this._isJQL ? e.result : e
            }
        }, {
            key: "_callCloudFunction",
            value: function(e) {
                var t = this,
                    n = e.action,
                    r = e.command,
                    i = e.multiCommand,
                    o = e.queryList;
                 function a(e, t) {
                    if (i && o)
                        for (var n = 0; n < o.length; n++) {
                            var r = o[n];
                            r.udb && "function" == typeof r.udb.setResult && (t ? r.udb.setResult(t) : r.udb.setResult(e.result.dataList[n]))
                        }
                }
                var s = this,
                    u = this._isJQL ? "databaseForJQL" : "database";
                 function c(e) {
                    return s._callback("error", [e]), Lf(Mf(u, "fail"), e).then((function() {
                        return Lf(Mf(u, "complete"), e)
                    })).then((function() {
                        return a(null, e), Jf(Nf, {
                            type: $f,
                            content: e
                        }), Promise.reject(e)
                    }))
                }
                var l = Lf(Mf(u, "invoke")),
                    f = this._uniClient;
                return l.then((function() {
                    return f.callFunction({
                        name: "DCloud-clientDB",
                        type: "CLIENT_DB",
                        data: {
                            action: n,
                            command: r,
                            multiCommand: i
                        }
                    })
                })).then((function(e) {
                    var n = e.result,
                        r = n.code,
                        i = n.message,
                        o = n.token,
                        l = n.tokenExpired,
                        f = n.systemInfo,
                        h = void 0 === f ? [] : f;
                    if (h)
                        for (var p = 0; p < h.length; p++) {
                            var d = h[p],
                                g = d.level,
                                v = d.message,
                                m = d.detail,
                                y = "[System Info]" + v;
                            m && (y = "".concat(y, "\n详细信息：").concat(m)), (console[g] || console.log)(y)
                        }
                    if (r) return c(new nh({
                        code: r,
                        message: i,
                        requestId: e.requestId
                    }));
                    e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, o && l && (oh({
                        token: o,
                        tokenExpired: l
                    }), t._callbackAuth("refreshToken", [{
                        token: o,
                        tokenExpired: l
                    }]), t._callback("refreshToken", [{
                        token: o,
                        tokenExpired: l
                    }]), Jf(zf, {
                        token: o,
                        tokenExpired: l
                    }));
                    for (var _, b = [{
                            prop: "affectedDocs",
                            tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                        }, {
                            prop: "code",
                            tips: "code不再推荐使用，请使用errCode替代"
                        }, {
                            prop: "message",
                            tips: "message不再推荐使用，请使用errMsg替代"
                        }], w = function() {
                            var t = b[x],
                                n = t.prop,
                                r = t.tips;
                            if (n in e.result) {
                                var i = e.result[n];
                                Object.defineProperty(e.result, n, {get: function() {
                                        return console.warn(r), i
                                    }
                                })
                            }
                        }, x = 0; x < b.length; x++) w();
                    return _ = e, Lf(Mf(u, "success"), _).then((function() {
                        return Lf(Mf(u, "complete"), _)
                    })).then((function() {
                        a(_, null);
                        var e = s._parseResult(_);
                        return Jf(Nf, {
                            type: $f,
                            content: e
                        }), Promise.resolve(e)
                    }))
                }), (function(e) {
                    return /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), c(new nh({
                        code: e.code || "SYSTEM_ERROR",
                        message: e.message,
                        requestId: e.requestId
                    }))
                }))
            }
        }]), n
    }(function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.uniClient,
                r = void 0 === n ? {} : n,
                i = t.isJQL,
                o = void 0 !== i && i;
            u(this, e), this._uniClient = r, this._authCallBacks = {}, this._dbCallBacks = {}, r._isDefault && (this._dbCallBacks = Bf("_globalUniCloudDatabaseCallback")), o || (this.auth = ed(this._authCallBacks)), this._isJQL = o, Object.assign(this, ed(this._dbCallBacks)), this.env = Xp({}, {get: function(e, t) {
                    return {
                        $env: t
                    }
                }
            }), this.Geo = Xp({}, {get: function(e, t) {
                    return sd({
                        path: ["Geo"],
                        method: t
                    })
                }
            }), this.serverDate = sd({
                path: [],
                method: "serverDate"
            }), this.RegExp = sd({
                path: [],
                method: "RegExp"
            })
        }
        return c(e, [{
            key: "getCloudEnv",
            value: function(e) {
                if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                return {
                    $env: e.replace("$cloudEnv_", "")
                }
            }
        }, {
            key: "_callback",
            value: function(e, t) {
                var n = this._dbCallBacks;
                n[e] && n[e].forEach((function(e) {
                    e.apply(void 0, h(t))
                }))
            }
        }, {
            key: "_callbackAuth",
            value: function(e, t) {
                var n = this._authCallBacks;
                n[e] && n[e].forEach((function(e) {
                    e.apply(void 0, h(t))
                }))
            }
        }, {
            key: "multiSend",
            value: function() {
                var e = Array.from(arguments),
                    t = e.map((function(e) {
                        var t = e.getAction(),
                            n = e.getCommand();
                        if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                        return {
                            action: t,
                            command: n
                        }
                    }));
                return this._callCloudFunction({
                    multiCommand: t,
                    queryList: e
                })
            }
        }]), e
    }()),
    ld = "token无效，跳转登录页面",
    fd = "token过期，跳转登录页面",
    hd = {
        TOKEN_INVALID_TOKEN_EXPIRED: fd,
        TOKEN_INVALID_INVALID_CLIENTID: ld,
        TOKEN_INVALID: ld,
        TOKEN_INVALID_WRONG_TOKEN: ld,
        TOKEN_INVALID_ANONYMOUS_USER: ld
    },
    pd = {
        "uni-id-token-expired": fd,
        "uni-id-check-token-failed": ld,
        "uni-id-token-not-exist": ld,
        "uni-id-check-device-feature-failed": ld
    },
    dd = r(r(r({}, hd), pd), {}, {
        default: "用户未登录或登录状态过期，自动跳转登录页面"
    });
 function gd(e, t) {
    return (e ? "".concat(e, "/").concat(t) : t).replace(/^\//, "")
}
 function vd() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = [],
        r = [];
    return e.forEach((function(e) {
        !0 === e.needLogin ? n.push(gd(t, e.path)) : !1 === e.needLogin && r.push(gd(t, e.path))
    })), {
        needLoginPage: n,
        notNeedLoginPage: r
    }
}
 function md(e) {
    return e.split("?")[0].replace(/^\//, "")
}
 function yd() {
    return function(e) {
        var t = e && e.$page && e.$page.fullPath;
        return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : ""
    }(function() {
        var e = getCurrentPages();
        return e[e.length - 1]
    }())
}
 function _d() {
    return md(yd())
}
 function bd() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e) return !1;
    if (!(t && t.list && t.list.length)) return !1;
    var n = t.list,
        r = md(e);
    return n.some((function(e) {
        return e.pagePath === r
    }))
}
var wd, xd = !!uf.uniIdRouter,
    kd = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
            t = e.pages,
            n = void 0 === t ? [] : t,
            r = e.subPackages,
            i = void 0 === r ? [] : r,
            o = e.uniIdRouter,
            a = void 0 === o ? {} : o,
            s = e.tabBar,
            u = void 0 === s ? {} : s,
            c = a.loginPage,
            l = a.needLogin,
            f = void 0 === l ? [] : l,
            p = a.resToLogin,
            d = void 0 === p || p,
            g = vd(n),
            v = g.needLoginPage,
            m = g.notNeedLoginPage,
            y = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [],
                    n = [];
                return e.forEach((function(e) {
                    var r = e.root,
                        i = e.pages,
                        o = vd(void 0 === i ? [] : i, r),
                        a = o.needLoginPage,
                        s = o.notNeedLoginPage;
                    t.push.apply(t, h(a)), n.push.apply(n, h(s))
                })), {
                    needLoginPage: t,
                    notNeedLoginPage: n
                }
            }(i),
            _ = y.needLoginPage,
            b = y.notNeedLoginPage;
        return {
            loginPage: c,
            routerNeedLogin: f,
            resToLogin: d,
            needLoginPage: [].concat(h(v), h(_)),
            notNeedLoginPage: [].concat(h(m), h(b)),
            loginPageInTabBar: bd(c, u)
        }
    }(),
    Sd = kd.loginPage,
    Td = kd.routerNeedLogin,
    Id = kd.resToLogin,
    Ed = kd.needLoginPage,
    Ad = kd.notNeedLoginPage,
    Cd = kd.loginPageInTabBar;
if (Ed.indexOf(Sd) > -1) throw new Error("Login page [".concat(Sd, '] should not be "needLogin", please check your pages.json'));
 function Od(e) {
    var t = _d();
    if ("/" === e.charAt(0)) return e;
    var n = e.split("?"),
        r = f(n, 2),
        i = r[0],
        o = r[1],
        a = i.replace(/^\//, "").split("/"),
        s = t.split("/");
    s.pop();
    for (var u = 0; u < a.length; u++) {
        var c = a[u];
        ".." === c ? s.pop() : "." !== c && s.push(c)
    }
    return "" === s[0] && s.shift(), "/" + s.join("/") + (o ? "?" + o : "")
}
 function Bd(e) {
    var t = md(e.redirect),
        n = md(Sd);
    return _d() !== n && t !== n
}
 function Pd() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.api,
        n = e.redirect;
    if (n && Bd({
            redirect: n
        })) {
        var r, i, o = (i = n, "/" !== (r = Sd).charAt(0) && (r = "/" + r), i ? r.indexOf("?") > -1 ? r + "&uniIdRedirectUrl=".concat(encodeURIComponent(i)) : r + "?uniIdRedirectUrl=".concat(encodeURIComponent(i)) : r);
        Cd ? "navigateTo" !== t && "redirectTo" !== t || (t = "switchTab") : "switchTab" === t && (t = "navigateTo");
        var a = {
            navigateTo: sn.navigateTo,
            redirectTo: sn.redirectTo,
            switchTab: sn.switchTab,
            reLaunch: sn.reLaunch
        };
        setTimeout((function() {
            a[t]({
                url: o
            })
        }), 0)
    }
}
 function Fd() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.url,
        n = {
            abortLoginPageJump: !1,
            autoToLoginPage: !1
        },
        r = function() {
            var e, t = ih(),
                n = t.token,
                r = t.tokenExpired;
            if (n) {
                if (r < Date.now()) {
                    var i = "uni-id-token-expired";
                    e = {
                        errCode: i,
                        errMsg: dd[i]
                    }
                }
            } else {
                var o = "uni-id-check-token-failed";
                e = {
                    errCode: o,
                    errMsg: dd[o]
                }
            }
            return e
        }();
    if (function(e) {
            var t = md(Od(e));
            return !(Ad.indexOf(t) > -1) && (Ed.indexOf(t) > -1 || Td.some((function(t) {
                return n = e, new RegExp(t).test(n);
                var n
            })))
        }(t) && r) {
        if (r.uniIdRedirectUrl = t, Vf(qf).length > 0) return setTimeout((function() {
            Jf(qf, r)
        }), 0), n.abortLoginPageJump = !0, n;
        n.autoToLoginPage = !0
    }
    return n
}
 function jd() {
    ! function() {
        var e = yd(),
            t = Fd({
                url: e
            }),
            n = t.abortLoginPageJump,
            r = t.autoToLoginPage;
        n || r && Pd({
            api: "redirectTo",
            redirect: e
        })
    }();
    for (var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"], t = function() {
            var t = e[n];
            sn.addInterceptor(t, {
                invoke: function(e) {
                    var n = Fd({
                            url: e.url
                        }),
                        r = n.abortLoginPageJump,
                        i = n.autoToLoginPage;
                    return r ? e : i ? (Pd({
                        api: t,
                        redirect: Od(e.url)
                    }), !1) : e
                }
            })
        }, n = 0; n < e.length; n++) t()
}
 function Rd() {
    this.onResponse((function(e) {
        var t = e.type,
            n = e.content,
            r = !1;
        switch (t) {
            case "cloudobject":
                r = function(e) {
                    return "object" == p(e) && (e || {}).errCode in dd
                }(n);
                break;
            case "clientdb":
                r = function(e) {
                    return "object" == p(e) && (e || {}).errCode in hd
                }(n)
        }
        r && function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Vf(qf);
            Gf().then((function() {
                var n = yd();
                if (n && Bd({
                        redirect: n
                    })) return t.length > 0 ? Jf(qf, Object.assign({
                    uniIdRedirectUrl: n
                }, e)) : void(Sd && Pd({
                    api: "navigateTo",
                    redirect: n
                }))
            }))
        }(n)
    }))
}
 function Ld(e) {
    var t;
    (t = e).onResponse = function(e) {
            Wf(Nf, e)
        }, t.offResponse = function(e) {
            Zf(Nf, e)
        },
        function(e) {
            e.onNeedLogin = function(e) {
                Wf(qf, e)
            }, e.offNeedLogin = function(e) {
                Zf(qf, e)
            }, xd && (Bf(Kp).needLoginInit || (Bf(Kp).needLoginInit = !0, Gf().then((function() {
                jd.call(e)
            })), Id && Rd.call(e)))
        }(e),
        function(e) {
            e.onRefreshToken = function(e) {
                Wf(zf, e)
            }, e.offRefreshToken = function(e) {
                Zf(zf, e)
            }
        }(e)
}
var Md = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Ud = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
 function Dd() {
    var e, t, n = ih().token || "",
        r = n.split(".");
    if (!n || 3 !== r.length) return {
        uid: null,
        role: [],
        permission: [],
        tokenExpired: 0
    };
    try {
        e = JSON.parse((t = r[1], decodeURIComponent(wd(t).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        })).join(""))))
    } catch (e) {
        throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message)
    }
    return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e
}
wd = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Ud.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t;
    e += "==".slice(2 - (3 & e.length));
    for (var n, r, i = "", o = 0; o < e.length;) t = Md.indexOf(e.charAt(o++)) << 18 | Md.indexOf(e.charAt(o++)) << 12 | (n = Md.indexOf(e.charAt(o++))) << 6 | (r = Md.indexOf(e.charAt(o++))), i += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
    return i
} : atob;
var Nd = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}(cf((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "chooseAndUploadFile:ok",
        r = "chooseAndUploadFile:fail";
     function i(e, t) {
        return e.tempFiles.forEach((function(e, n) {
            e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."))
        })), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map((function(e) {
            return e.path
        }))), e
    }
     function o(e, t, r) {
        var i = r.onChooseFile,
            o = r.onUploadProgress;
        return t.then((function(e) {
            if (i) {
                var t = i(e);
                if (void 0 !== t) return Promise.resolve(t).then((function(t) {
                    return void 0 === t ? e : t
                }))
            }
            return e
        })).then((function(t) {
            return !1 === t ? {
                errMsg: n,
                tempFilePaths: [],
                tempFiles: []
            } : function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = arguments.length > 3 ? arguments[3] : void 0;
                (t = Object.assign({}, t)).errMsg = n;
                var o = t.tempFiles,
                    a = o.length,
                    s = 0;
                return new Promise((function(n) {
                    for (; s < r;) u();
                     function u() {
                        var r = s++;
                        if (r >= a) !o.find((function(e) {
                            return !e.url && !e.errMsg
                        })) && n(t);
                        else {
                            var c = o[r];
                            e.uploadFile({
                                provider: c.provider,
                                filePath: c.path,
                                cloudPath: c.cloudPath,
                                fileType: c.fileType,
                                cloudPathAsRealPath: c.cloudPathAsRealPath,
                                onUploadProgress: function(e) {
                                    e.index = r, e.tempFile = c, e.tempFilePath = c.path, i && i(e)
                                }
                            }).then((function(e) {
                                c.url = e.fileID, r < a && u()
                            })).catch((function(e) {
                                c.errMsg = e.errMsg || e.message, r < a && u()
                            }))
                        }
                    }
                }))
            }(e, t, 5, o)
        }))
    }
    t.initChooseAndUploadFile = function(e) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                type: "all"
            };
            return "image" === t.type ? o(e, function(e) {
                var t = e.count,
                    n = e.sizeType,
                    o = e.sourceType,
                    a = void 0 === o ? ["album", "camera"] : o,
                    s = e.extension;
                return new Promise((function(e, o) {
                    sn.chooseImage({
                        count: t,
                        sizeType: n,
                        sourceType: a,
                        extension: s,
                        success: function(t) {
                            e(i(t, "image"))
                        },
                        fail: function(e) {
                            o({
                                errMsg: e.errMsg.replace("chooseImage:fail", r)
                            })
                        }
                    })
                }))
            }(t), t) : "video" === t.type ? o(e, function(e) {
                var t = e.camera,
                    n = e.compressed,
                    o = e.maxDuration,
                    a = e.sourceType,
                    s = void 0 === a ? ["album", "camera"] : a,
                    u = e.extension;
                return new Promise((function(e, a) {
                    sn.chooseVideo({
                        camera: t,
                        compressed: n,
                        maxDuration: o,
                        sourceType: s,
                        extension: u,
                        success: function(t) {
                            var n = t.tempFilePath,
                                r = t.duration,
                                o = t.size,
                                a = t.height,
                                s = t.width;
                            e(i({
                                errMsg: "chooseVideo:ok",
                                tempFilePaths: [n],
                                tempFiles: [{
                                    name: t.tempFile && t.tempFile.name || "",
                                    path: n,
                                    size: o,
                                    type: t.tempFile && t.tempFile.type || "",
                                    width: s,
                                    height: a,
                                    duration: r,
                                    fileType: "video",
                                    cloudPath: ""
                                }]
                            }, "video"))
                        },
                        fail: function(e) {
                            a({
                                errMsg: e.errMsg.replace("chooseVideo:fail", r)
                            })
                        }
                    })
                }))
            }(t), t) : o(e, function(e) {
                var t = e.count,
                    n = e.extension;
                return new Promise((function(e, o) {
                    var a = sn.chooseFile;
                    if (void 0 !== an && "function" == typeof an.chooseMessageFile && (a = an.chooseMessageFile), "function" != typeof a) return o({
                        errMsg: r + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                    });
                    a({
                        type: "all",
                        count: t,
                        extension: n,
                        success: function(t) {
                            e(i(t))
                        },
                        fail: function(e) {
                            o({
                                errMsg: e.errMsg.replace("chooseFile:fail", r)
                            })
                        }
                    })
                }))
            }(t), t)
        }
    }
})));
 function qd(e) {
    return {
        props: {
            localdata: {
                type: Array,
                default: function() {
                    return []
                }
            },
            options: {
                type: [Object, Array],
                default: function() {
                    return {}
                }
            },
            spaceInfo: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            collection: {
                type: [String, Array],
                default: ""
            },
            action: {
                type: String,
                default: ""
            },
            field: {
                type: String,
                default: ""
            },
            orderby: {
                type: String,
                default: ""
            },
            where: {
                type: [String, Object],
                default: ""
            },
            pageData: {
                type: String,
                default: "add"
            },
            pageCurrent: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 20
            },
            getcount: {
                type: [Boolean, String],
                default: !1
            },
            gettree: {
                type: [Boolean, String],
                default: !1
            },
            gettreepath: {
                type: [Boolean, String],
                default: !1
            },
            startwith: {
                type: String,
                default: ""
            },
            limitlevel: {
                type: Number,
                default: 10
            },
            groupby: {
                type: String,
                default: ""
            },
            groupField: {
                type: String,
                default: ""
            },
            distinct: {
                type: [Boolean, String],
                default: !1
            },
            foreignKey: {
                type: String,
                default: ""
            },
            loadtime: {
                type: String,
                default: "auto"
            },
            manual: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                mixinDatacomLoading: !1,
                mixinDatacomHasMore: !1,
                mixinDatacomResData: [],
                mixinDatacomErrorMessage: "",
                mixinDatacomPage: {},
                mixinDatacomError: null
            }
        },
        created: function() {
            var e = this;
            this.mixinDatacomPage = {
                current: this.pageCurrent,
                size: this.pageSize,
                count: 0
            }, this.$watch((function() {
                var t = [];
                return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((function(n) {
                    t.push(e[n])
                })), t
            }), (function(t, n) {
                if ("manual" !== e.loadtime) {
                    for (var r = !1, i = [], o = 2; o < t.length; o++) t[o] !== n[o] && (i.push(t[o]), r = !0);
                    t[0] !== n[0] && (e.mixinDatacomPage.current = e.pageCurrent), e.mixinDatacomPage.size = e.pageSize, e.onMixinDatacomPropsChange(r, i)
                }
            }))
        },
        methods: {
            onMixinDatacomPropsChange: function(e, t) {},
            mixinDatacomEasyGet: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.getone,
                    r = void 0 !== n && n,
                    i = t.success,
                    o = t.fail;
                this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((function(t) {
                    e.mixinDatacomLoading = !1;
                    var n = t.result,
                        o = n.data,
                        a = n.count;
                    e.getcount && (e.mixinDatacomPage.count = a), e.mixinDatacomHasMore = o.length < e.pageSize;
                    var s = r ? o.length ? o[0] : void 0 : o;
                    e.mixinDatacomResData = s, i && i(s)
                })).catch((function(t) {
                    e.mixinDatacomLoading = !1, e.mixinDatacomErrorMessage = t, e.mixinDatacomError = t, o && o(t)
                })))
            },
            mixinDatacomGet: function() {
                var t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r = r || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
                var i = r.action || this.action;
                i && (n = n.action(i));
                var o = r.collection || this.collection;
                n = Array.isArray(o) ? (t = n).collection.apply(t, h(o)) : n.collection(o);
                var a = r.where || this.where;
                a && Object.keys(a).length && (n = n.where(a));
                var s = r.field || this.field;
                s && (n = n.field(s));
                var u = r.foreignKey || this.foreignKey;
                u && (n = n.foreignKey(u));
                var c = r.groupby || this.groupby;
                c && (n = n.groupBy(c));
                var l = r.groupField || this.groupField;
                l && (n = n.groupField(l)), !0 === (void 0 !== r.distinct ? r.distinct : this.distinct) && (n = n.distinct());
                var f = r.orderby || this.orderby;
                f && (n = n.orderBy(f));
                var p = void 0 !== r.pageCurrent ? r.pageCurrent : this.mixinDatacomPage.current,
                    d = void 0 !== r.pageSize ? r.pageSize : this.mixinDatacomPage.size,
                    g = void 0 !== r.getcount ? r.getcount : this.getcount,
                    v = void 0 !== r.gettree ? r.gettree : this.gettree,
                    m = void 0 !== r.gettreepath ? r.gettreepath : this.gettreepath,
                    y = {
                        getCount: g
                    },
                    _ = {
                        limitLevel: void 0 !== r.limitlevel ? r.limitlevel : this.limitlevel,
                        startWith: void 0 !== r.startwith ? r.startwith : this.startwith
                    };
                return v && (y.getTree = _), m && (y.getTreePath = _), n = n.skip(d * (p - 1)).limit(d).get(y)
            }
        }
    }
}
 function zd(e) {
    return Bf("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId))
}
 function $d() {
    return Hd.apply(this, arguments)
}
 function Hd() {
    return (Hd = n(t().mark((function e() {
        var n, r, i, o, a, s, u, c = arguments;
        return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = c.length > 0 && void 0 !== c[0] ? c[0] : {}, r = n.openid, i = n.callLoginByWeixin, o = void 0 !== i && i, a = zd(this), !r || !o) {
                        e.next = 4;
                        break
                    }
                    throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
                case 4:
                    if (!r) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return", (a.mpWeixinOpenid = r, {}));
                case 6:
                    return e.next = 8, new Promise((function(e, t) {
                        sn.login({
                            success: function(t) {
                                e(t.code)
                            },
                            fail: function(e) {
                                t(new Error(e.errMsg))
                            }
                        })
                    }));
                case 8:
                    return s = e.sent, u = this.importObject("uni-id-co", {
                        customUI: !0
                    }), e.next = 12, u.secureNetworkHandshakeByWeixin({
                        code: s,
                        callLoginByWeixin: o
                    });
                case 12:
                    return a.mpWeixinCode = s, e.abrupt("return", {
                        code: s
                    });
                case 14:
                case "end":
                    return e.stop()
            }
        }), e, this)
    })))).apply(this, arguments)
}
 function Kd(e) {
    return Vd.apply(this, arguments)
}
 function Vd() {
    return (Vd = n(t().mark((function e(n) {
        var r;
        return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = zd(this), e.abrupt("return", (r.initPromise || (r.initPromise = $d.call(this, n).then((function(e) {
                        return e
                    })).catch((function(e) {
                        throw delete r.initPromise, e
                    }))), r.initPromise));
                case 2:
                case "end":
                    return e.stop()
            }
        }), e, this)
    })))).apply(this, arguments)
}
 function Wd(e) {
    sh = e
}
 function Zd(e) {
    var t = an.canIUse("getAppBaseInfo"),
        n = {
            getAppBaseInfo: t ? sn.getAppBaseInfo : sn.getSystemInfo,
            getPushClientId: sn.getPushClientId
        };
    return function(i) {
        return new Promise((function(o, a) {
            t && "getAppBaseInfo" === e ? o(n[e]()) : n[e](r(r({}, i), {}, {
                success: function(e) {
                    o(e)
                },
                fail: function(e) {
                    a(e)
                }
            }))
        }))
    }
}
var Jd = function(r) {
        o(l, r);
        var i, s = a(l);
         function l() {
            var t;
            return u(this, l), (t = s.call(this))._uniPushMessageCallback = t._receivePushMessage.bind(e(t)), t._currentMessageId = -1, t._payloadQueue = [], t
        }
        return c(l, [{
            key: "init",
            value: function() {
                var e = this;
                return Promise.all([Zd("getAppBaseInfo")(), Zd("getPushClientId")()]).then((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = f(t, 2),
                        r = n[0],
                        i = void 0 === r ? {} : r,
                        o = i.appId,
                        a = n[1],
                        s = void 0 === a ? {} : a,
                        u = s.cid;
                    if (!o) throw new Error("Invalid appId, please check the manifest.json file");
                    if (!u) throw new Error("Invalid push client id");
                    e._appId = o, e._pushClientId = u, e._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), e.emit("open"), e._initMessageListener()
                }), (function(t) {
                    throw e.emit("error", t), e.close(), t
                }))
            }
        }, {
            key: "open",
            value: (i = n(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this.init());
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), function() {
                return i.apply(this, arguments)
            })
        }, {
            key: "_isUniCloudSSE",
            value: function(e) {
                if ("receive" !== e.type) return !1;
                var t = e && e.data && e.data.payload;
                return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId)
            }
        }, {
            key: "_receivePushMessage",
            value: function(e) {
                if (this._isUniCloudSSE(e)) {
                    var t = e && e.data && e.data.payload,
                        n = t.action,
                        r = t.messageId,
                        i = t.message;
                    this._payloadQueue.push({
                        action: n,
                        messageId: r,
                        message: i
                    }), this._consumMessage()
                }
            }
        }, {
            key: "_consumMessage",
            value: function() {
                for (var e = this;;) {
                    var t = this._payloadQueue.find((function(t) {
                        return t.messageId === e._currentMessageId + 1
                    }));
                    if (!t) break;
                    this._currentMessageId++, this._parseMessagePayload(t)
                }
            }
        }, {
            key: "_parseMessagePayload",
            value: function(e) {
                var t = e.action,
                    n = e.messageId,
                    r = e.message;
                "end" === t ? this._end({
                    messageId: n,
                    message: r
                }) : "message" === t && this._appendMessage({
                    messageId: n,
                    message: r
                })
            }
        }, {
            key: "_appendMessage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (e.messageId, e.message);
                this.emit("message", t)
            }
        }, {
            key: "_end",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (e.messageId, e.message);
                this.emit("end", t), this.close()
            }
        }, {
            key: "_initMessageListener",
            value: function() {
                sn.onPushMessage(this._uniPushMessageCallback)
            }
        }, {
            key: "_destroy",
            value: function() {
                sn.offPushMessage(this._uniPushMessageCallback)
            }
        }, {
            key: "toJSON",
            value: function() {
                return {
                    appId: this._appId,
                    pushClientId: this._pushClientId,
                    seqId: this._seqId
                }
            }
        }, {
            key: "close",
            value: function() {
                this._destroy(), this.emit("close")
            }
        }]), l
    }(function() {
        function e() {
            u(this, e), this._callback = {}
        }
        return c(e, [{
            key: "addListener",
            value: function(e, t) {
                this._callback[e] || (this._callback[e] = []), this._callback[e].push(t)
            }
        }, {
            key: "on",
            value: function(e, t) {
                return this.addListener(e, t)
            }
        }, {
            key: "removeListener",
            value: function(e, t) {
                if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
                var n = this._callback[e];
                if (n) {
                    var r = function(e, t) {
                        for (var n = e.length - 1; n >= 0; n--)
                            if (e[n] === t) return n;
                        return -1
                    }(n, t);
                    n.splice(r, 1)
                }
            }
        }, {
            key: "off",
            value: function(e, t) {
                return this.removeListener(e, t)
            }
        }, {
            key: "removeAllListener",
            value: function(e) {
                delete this._callback[e]
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = this._callback[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                if (t)
                    for (var o = 0; o < t.length; o++) t[o].apply(t, r)
            }
        }]), e
    }()),
    Qd = {
        tcb: kp,
        tencent: kp,
        aliyun: dh,
        private: Ep,
        dcloud: Ep,
        alipay: Lp
    },
    Yd = new(function() {
        function e() {
            u(this, e)
        }
        return c(e, [{
            key: "init",
            value: function(e) {
                var i, o = {},
                    a = Qd[e.provider];
                if (!a) throw new Error("未提供正确的provider参数");
                return function(e) {
                        e._initPromiseHub || (e._initPromiseHub = new If({
                            createPromise: function() {
                                var t = Promise.resolve();
                                t = new Promise((function(e) {
                                    setTimeout((function() {
                                        e()
                                    }), 1)
                                }));
                                var n = e.auth();
                                return t.then((function() {
                                    return n.getLoginState()
                                })).then((function(e) {
                                    return e ? Promise.resolve() : n.signInAnonymously()
                                }))
                            }
                        }))
                    }(o = a.init(e)), Yp(o),
                    function(e) {
                        var t = e.uploadFile;
                        e.uploadFile = function(e) {
                            return t.call(this, e)
                        }
                    }(o), (i = o).database = function(e) {
                        if (e && Object.keys(e).length > 0) return i.init(e).database();
                        if (this._database) return this._database;
                        var t = ud(cd, {
                            uniClient: i
                        });
                        return this._database = t, t
                    }, i.databaseForJQL = function(e) {
                        if (e && Object.keys(e).length > 0) return i.init(e).databaseForJQL();
                        if (this._databaseForJQL) return this._databaseForJQL;
                        var t = ud(cd, {
                            uniClient: i,
                            isJQL: !0
                        });
                        return this._databaseForJQL = t, t
                    },
                    function(e) {
                        e.getCurrentUserInfo = Dd, e.chooseAndUploadFile = Nd.initChooseAndUploadFile(e), Object.assign(e, {get mixinDatacom() {
                                return qd(e)
                            }
                        }), e.SSEChannel = Jd, e.initSecureNetworkByWeixin = function(e) {
                            return function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.openid,
                                    r = t.callLoginByWeixin,
                                    i = void 0 !== r && r;
                                return Kd.call(e, {
                                    openid: n,
                                    callLoginByWeixin: i
                                })
                            }
                        }(e), e.setCustomClientInfo = Wd, e.importObject = function(e) {
                            return function(i) {
                                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    a = o = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == p(t.secretMethods) && (e.secretMethods = t.secretMethods), e
                                    }({
                                        customUI: !1,
                                        loadingOptions: {
                                            title: "加载中...",
                                            mask: !0
                                        },
                                        errorOptions: {
                                            type: "modal",
                                            retry: !1
                                        }
                                    }, o),
                                    s = a.customUI,
                                    u = a.loadingOptions,
                                    c = a.errorOptions,
                                    l = a.parseSystemError,
                                    f = !s;
                                return new Proxy({}, {get: function(a, s) {
                                        switch (s) {
                                            case "toString":
                                                return "[object UniCloudObject]";
                                            case "toJSON":
                                                return {}
                                        }
                                        return function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = e.fn,
                                                o = e.interceptorName,
                                                a = e.getCallbackArgs;
                                            return n(t().mark((function e() {
                                                var n, s, u, c, l, f, h = arguments;
                                                return t().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            for (n = h.length, s = new Array(n), u = 0; u < n; u++) s[u] = h[u];
                                                            return c = a ? a({
                                                                params: s
                                                            }) : {}, e.prev = 2, e.next = 5, Lf(Mf(o, "invoke"), r({}, c));
                                                        case 5:
                                                            return e.next = 7, i.apply(void 0, s);
                                                        case 7:
                                                            return l = e.sent, e.next = 10, Lf(Mf(o, "success"), r(r({}, c), {}, {
                                                                result: l
                                                            }));
                                                        case 10:
                                                            return e.abrupt("return", l);
                                                        case 13:
                                                            return e.prev = 13, e.t0 = e.catch(2), f = e.t0, e.next = 18, Lf(Mf(o, "fail"), r(r({}, c), {}, {
                                                                error: f
                                                            }));
                                                        case 18:
                                                            throw f;
                                                        case 19:
                                                            return e.prev = 19, e.next = 22, Lf(Mf(o, "complete"), r(r({}, c), {}, f ? {
                                                                error: f
                                                            } : {
                                                                result: l
                                                            }));
                                                        case 22:
                                                            return e.finish(19);
                                                        case 23:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [2, 13, 19, 23]
                                                ])
                                            })))
                                        }({
                                            fn: function() {
                                                var a = n(t().mark((function a() {
                                                    var d, g, v, m, y, _, b, w, x, k, S, T, I, E, A, C = arguments;
                                                    return t().wrap((function(a) {
                                                        for (;;) switch (a.prev = a.next) {
                                                            case 0:
                                                                for (f && sn.showLoading({
                                                                        title: u.title,
                                                                        mask: u.mask
                                                                    }), g = C.length, v = new Array(g), m = 0; m < g; m++) v[m] = C[m];
                                                                return y = {
                                                                    name: i,
                                                                    type: mf,
                                                                    data: {
                                                                        method: s,
                                                                        params: v
                                                                    }
                                                                }, "object" == p(o.secretMethods) && function(e, t) {
                                                                    var n = t.data.method,
                                                                        r = e.secretMethods || {},
                                                                        i = r[n] || r["*"];
                                                                    i && (t.secretType = i)
                                                                }(o, y), _ = !1, a.prev = 5, a.next = 8, e.callFunction(y);
                                                            case 8:
                                                                d = a.sent, a.next = 14;
                                                                break;
                                                            case 11:
                                                                a.prev = 11, a.t0 = a.catch(5), _ = !0, d = {
                                                                    result: new nh(a.t0)
                                                                };
                                                            case 14:
                                                                if (b = d.result || {}, w = b.errSubject, x = b.errCode, k = b.errMsg, S = b.newToken, f && sn.hideLoading(), S && S.token && S.tokenExpired && (oh(S), Jf(zf, r({}, S))), !x) {
                                                                    a.next = 40;
                                                                    break
                                                                }
                                                                if (T = k, a.t1 = _ && l, !a.t1) {
                                                                    a.next = 25;
                                                                    break
                                                                }
                                                                return a.next = 21, l({
                                                                    objectName: i,
                                                                    methodName: s,
                                                                    params: v,
                                                                    errSubject: w,
                                                                    errCode: x,
                                                                    errMsg: k
                                                                });
                                                            case 21:
                                                                if (a.t2 = a.sent.errMsg, a.t2) {
                                                                    a.next = 24;
                                                                    break
                                                                }
                                                                a.t2 = k;
                                                            case 24:
                                                                T = a.t2;
                                                            case 25:
                                                                if (!f) {
                                                                    a.next = 38;
                                                                    break
                                                                }
                                                                if ("toast" !== c.type) {
                                                                    a.next = 30;
                                                                    break
                                                                }
                                                                sn.showToast({
                                                                    title: T,
                                                                    icon: "none"
                                                                }), a.next = 38;
                                                                break;
                                                            case 30:
                                                                if ("modal" === c.type) {
                                                                    a.next = 32;
                                                                    break
                                                                }
                                                                throw new Error("Invalid errorOptions.type: ".concat(c.type));
                                                            case 32:
                                                                return a.next = 34, n(t().mark((function e() {
                                                                    var n, r, i, o, a, s, u = arguments;
                                                                    return t().wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return n = u.length > 0 && void 0 !== u[0] ? u[0] : {}, r = n.title, i = n.content, o = n.showCancel, a = n.cancelText, s = n.confirmText, e.abrupt("return", new Promise((function(e, t) {
                                                                                    sn.showModal({
                                                                                        title: r,
                                                                                        content: i,
                                                                                        showCancel: o,
                                                                                        cancelText: a,
                                                                                        confirmText: s,
                                                                                        success: function(t) {
                                                                                            e(t)
                                                                                        },
                                                                                        fail: function() {
                                                                                            e({
                                                                                                confirm: !1,
                                                                                                cancel: !0
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                })));
                                                                            case 2:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })))({
                                                                    title: "提示",
                                                                    content: T,
                                                                    showCancel: c.retry,
                                                                    cancelText: "取消",
                                                                    confirmText: c.retry ? "重试" : "确定"
                                                                });
                                                            case 34:
                                                                if (I = a.sent, E = I.confirm, !c.retry || !E) {
                                                                    a.next = 38;
                                                                    break
                                                                }
                                                                return a.abrupt("return", h.apply(void 0, v));
                                                            case 38:
                                                                throw (A = new nh({
                                                                    subject: w,
                                                                    code: x,
                                                                    message: k,
                                                                    requestId: d.requestId
                                                                })).detail = d.result, Jf(Nf, {
                                                                    type: Kf,
                                                                    content: A
                                                                }), A;
                                                            case 40:
                                                                return a.abrupt("return", (Jf(Nf, {
                                                                    type: Kf,
                                                                    content: d.result
                                                                }), d.result));
                                                            case 41:
                                                            case "end":
                                                                return a.stop()
                                                        }
                                                    }), a, null, [
                                                        [5, 11]
                                                    ])
                                                })));
                                                 function h() {
                                                    return a.apply(this, arguments)
                                                }
                                                return h
                                            }(),
                                            interceptorName: "callObject",
                                            getCallbackArgs: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    t = e.params;
                                                return {
                                                    objectName: i,
                                                    methodName: s,
                                                    params: t
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        }(e)
                    }(o), ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((function(e) {
                        if (o[e]) {
                            var t = o[e];
                            o[e] = function() {
                                return t.apply(o, Array.from(arguments))
                            }, o[e] = function(e, t) {
                                return function(n) {
                                    var r = this,
                                        i = !1;
                                    if ("callFunction" === t) {
                                        var o = n && n.type || vf;
                                        i = o !== vf
                                    }
                                    var a = "callFunction" === t && !i,
                                        s = this._initPromiseHub.exec(),
                                        u = Xf(n = n || {}),
                                        c = u.success,
                                        l = u.fail,
                                        f = u.complete,
                                        h = s.then((function() {
                                            return i ? Promise.resolve() : Lf(Mf(t, "invoke"), n)
                                        })).then((function() {
                                            return e.call(r, n)
                                        })).then((function(e) {
                                            return i ? Promise.resolve(e) : Lf(Mf(t, "success"), e).then((function() {
                                                return Lf(Mf(t, "complete"), e)
                                            })).then((function() {
                                                return a && Jf(Nf, {
                                                    type: Hf,
                                                    content: e
                                                }), Promise.resolve(e)
                                            }))
                                        }), (function(e) {
                                            return i ? Promise.reject(e) : Lf(Mf(t, "fail"), e).then((function() {
                                                return Lf(Mf(t, "complete"), e)
                                            })).then((function() {
                                                return Jf(Nf, {
                                                    type: Hf,
                                                    content: e
                                                }), Promise.reject(e)
                                            }))
                                        }));
                                    if (!(c || l || f)) return h;
                                    h.then((function(e) {
                                        c && c(e), f && f(e), a && Jf(Nf, {
                                            type: Hf,
                                            content: e
                                        })
                                    }), (function(e) {
                                        l && l(e), f && f(e), a && Jf(Nf, {
                                            type: Hf,
                                            content: e
                                        })
                                    }))
                                }
                            }(o[e], e).bind(o)
                        }
                    })), o.init = this.init, o
            }
        }]), e
    }());
! function() {
    var e = Cf,
        t = {};
    if (e && 1 === e.length) t = e[0], (Yd = Yd.init(t))._isDefault = !0;
    else {
        var n, r = ["database", "getCurrentUserInfo", "importObject"];
        n = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", [].concat(["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"], r).forEach((function(e) {
            Yd[e] = function() {
                if (console.error(n), -1 === r.indexOf(e)) return Promise.reject(new nh({
                    code: "SYS_ERR",
                    message: n
                }));
                console.error(n)
            }
        }))
    }
    Object.assign(Yd, {get mixinDatacom() {
            return qd(Yd)
        }
    }), Ld(Yd), Yd.addInterceptor = jf, Yd.removeInterceptor = Rf, Yd.interceptObject = Uf
}();
var Gd = Yd;
exports.SMCrypto = Yl, exports._export_sfc = function(e, t) {
    var n, r = e.__vccOpts || e,
        i = s(t);
    try {
        for (i.s(); !(n = i.n()).done;) {
            var o = f(n.value, 2),
                a = o[0],
                u = o[1];
            r[a] = u
        }
    } catch (e) {
        i.e(e)
    } finally {
        i.f()
    }
    return r
}, exports.computed = vo, exports.createSSRApp = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return e && (e.mpType = "app"), Mo(e, t).use(Qo)
}, exports.defineComponent = function(e, t) {
    return A(e) ? w({
        name: e.name
    }, t, {
        setup: e
    }) : e
}, exports.e = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return w.apply(void 0, [e].concat(n))
}, exports.f = function(e, t) {
    return function(e, t) {
        var n;
        if (T(e) || C(e)) {
            n = new Array(e.length);
            for (var r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r, r)
        } else if ("number" == typeof e) {
            n = new Array(e);
            for (var o = 0; o < e; o++) n[o] = t(o + 1, o, o)
        } else if (B(e))
            if (e[Symbol.iterator]) n = Array.from(e, (function(e, n) {
                return t(e, n, n)
            }));
            else {
                var a = Object.keys(e);
                n = new Array(a.length);
                for (var s = 0, u = a.length; s < u; s++) {
                    var c = a[s];
                    n[s] = t(e[c], c, s)
                }
            } else n = [];
        return n
    }(e, t)
}, exports.getCurrentInstance = uo, exports.index = sn, exports.initVueI18n = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
    if ("string" != typeof e) {
        var i = [t, e];
        e = i[0], t = i[1]
    }
    "string" != typeof e && (e = void 0 !== sn && sn.getLocale ? sn.getLocale() : "undefined" != typeof global && global.getLocale ? global.getLocale() : "en"), "string" != typeof n && (n = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || "en");
    var o = new we({
            locale: e,
            fallbackLocale: n,
            messages: t,
            watcher: r
        }),
        a = function(e, t) {
            if ("function" != typeof getApp) a = function(e, t) {
                return o.t(e, t)
            };
            else {
                var n = !1;
                a = function(e, t) {
                    var r = getApp().$vm;
                    return r && (r.$locale, n || (n = !0, function(e, t) {
                        e.$watchLocale ? e.$watchLocale((function(e) {
                            t.setLocale(e)
                        })) : e.$watch((function() {
                            return e.$locale
                        }), (function(e) {
                            t.setLocale(e)
                        }))
                    }(r, o))), o.t(e, t)
                }
            }
            return a(e, t)
        };
    return {
        i18n: o,
        f: function(e, t, n) {
            return o.f(e, t, n)
        },
        t: function(e, t) {
            return a(e, t)
        },
        add: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return o.add(e, t, n)
        },
        watch: function(e) {
            return o.watchLocale(e)
        },
        getLocale: function() {
            return o.getLocale()
        },
        setLocale: function(e) {
            return o.setLocale(e)
        }
    }
}, exports.mqtt = sf, exports.n = function(e) {
    return function e(t) {
        var n = "";
        if (C(t)) n = t;
        else if (T(t))
            for (var r = 0; r < t.length; r++) {
                var i = e(t[r]);
                i && (n += i + " ")
            } else if (B(t))
                for (var o in t) t[o] && (n += o + " ");
        return n.trim()
    }(e)
}, exports.o = function(e, t) {
    return function(e, t) {
        var n = uo(),
            r = n.ctx,
            i = void 0 === t || "mp-weixin" !== r.$mpPlatform && "mp-qq" !== r.$mpPlatform && "mp-xhs" !== r.$mpPlatform || !C(t) && "number" != typeof t ? "" : "_" + t,
            o = "e" + n.$ei++ +i,
            a = r.$scope;
        if (!e) return delete a[o], o;
        var s = a[o];
        return s ? s.value = e : a[o] = function(e, t) {
            var n = function e(n) {
                var r;
                (r = n).type && r.target && (r.preventDefault = m, r.stopPropagation = m, r.stopImmediatePropagation = m, S(r, "detail") || (r.detail = {}), S(r, "markerId") && (r.detail = "object" == p(r.detail) ? r.detail : {}, r.detail.markerId = r.markerId), R(r.detail) && S(r.detail, "checked") && !S(r.detail, "value") && (r.detail.value = r.detail.checked), R(r.detail) && (r.target = w({}, r.target, r.detail)));
                var i = [n];
                t && t.ctx.$getTriggerEventDetail && "number" == typeof n.detail && (n.detail = t.ctx.$getTriggerEventDetail(n.detail)), n.detail && n.detail.__args__ && (i = n.detail.__args__);
                var o = e.value,
                    a = function() {
                        return Fr(function(e, t) {
                            if (T(t)) {
                                var n = e.stopImmediatePropagation;
                                return e.stopImmediatePropagation = function() {
                                    n && n.call(e), e._stopped = !0
                                }, t.map((function(e) {
                                    return function(t) {
                                        return !t._stopped && e(t)
                                    }
                                }))
                            }
                            return t
                        }(n, o), t, 5, i)
                    },
                    s = n.target,
                    u = !!s && !!s.dataset && "true" === String(s.dataset.eventsync);
                if (!Go.includes(n.type) || u) {
                    var c = a();
                    if ("input" === n.type && (T(c) || P(c))) return;
                    return c
                }
                setTimeout(a)
            };
            return n.value = e, n
        }(e, n), o
    }(e, t)
}, exports.onHide = ef, exports.onLoad = tf, exports.onMounted = xi, exports.onReady = nf, exports.onShareAppMessage = of, exports.onShow = Xl, exports.onUnload = rf, exports.p = function(e) {
    return function(e) {
        var t = uo(),
            n = t.uid,
            r = t.__counter;
        return n + "," + ((Wo[n] || (Wo[n] = [])).push(function(e) {
            return e ? dr(t = e) || gr(t) || "__vInternal" in e ? w({}, e) : e : null;
            var t
        }(e)) - 1) + "," + r
    }(e)
}, exports.pako = Mc, exports.r = function(e, t, n) {
    return function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = uo(),
            o = i.parent,
            a = i.isMounted,
            s = i.ctx.$scope,
            u = (s.properties || s.props).uI;
        if (u)
            if (o || a) {
                var c = function(e, t) {
                    for (var n = t.parent; n;) {
                        var r = n.$ssi;
                        if (r && r[e]) return r[e];
                        n = n.parent
                    }
                }(u, i);
                c && c(t, n, r)
            } else xi((function() {
                e(t, n, r)
            }), i)
    }(e, t, n)
}, exports.reactive = fr, exports.ref = Tr, exports.resolveComponent = function(e, t) {
    return function(e, t) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = ni || so;
        if (r) {
            var i = r.type;
            if ("components" === e) {
                var o = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return A(e) ? e.displayName || e.name : e.name || t && e.__name
                }(i, !1);
                if (o && (o === t || o === N(t) || o === $(N(t)))) return i
            }
            var a = ii(r[e] || i[e], t) || ii(r.appContext[e], t);
            return !a && n ? i : a
        }
    }("components", e, !0, t) || e
}, exports.s = function(e) {
    return Yo(e)
}, exports.sr = function(e, t, n) {
    return function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = uo(),
            i = r.$templateRefs;
        i.push({
            i: t,
            r: e,
            k: n.k,
            f: n.f
        })
    }(e, t, n)
}, exports.t = function(e) {
    return function(e) {
        return C(e) ? e : null == e ? "" : T(e) || B(e) && (e.toString === F || !A(e.toString)) ? JSON.stringify(e, G, 2) : String(e)
    }(e)
}, exports.toRefs = function(e) {
    var t = T(e) ? new Array(e.length) : {};
    for (var n in e) t[n] = Br(e, n);
    return t
}, exports.tr = Gd, exports.unref = Er, exports.watch = ai, exports.watchEffect = function(e, t) {
    return si(e, null, t)
}, exports.wx$1 = an;