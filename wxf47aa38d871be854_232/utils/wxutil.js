
var A = require("../@babel/runtime/helpers/typeof"),
    e = require("../@babel/runtime/helpers/defineProperty"),
    t = getApp(),
    n = require("./apps.js"),
    r = (require("./dateutil.js"), require("./wxcode.js")),
    i = require("./wxencrypt.js"),
    a = require("./wxclock.js"),
    o = require("./crypto-js.js"),
    s = require("./pako.min.js"),
    u = require("./base64.min.js"),
    c = u.atob,
    f = u.btoa,
    g = t.globalData.apiSecret,
    d = function(A, e, t) {
        var n = A,
            r = new Date(1e3 * parseInt(n)),
            i = r.getFullYear(),
            a = r.getMonth() + 1;
        a = a < 10 ? "0" + a : a;
        var o = r.getDate();
        o = o < 10 ? "0" + o : o;
        var s = r.getHours();
        s = s < 10 ? "0" + s : s;
        var u = r.getMinutes(),
            c = r.getSeconds();
        return u = u < 10 ? "0" + u : u, c = c < 10 ? "0" + c : c, e ? "year" == t ? i : "month" == t ? a : "date" == t ? n : i + "-" + a + "-" + o : i + "-" + a + "-" + o + " " + s + ":" + u + ":" + c
    },
    l = function() {
        for (var A = [], e = 0; e < 36; e++) A[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return A[14] = "4", A[19] = "0123456789abcdef".substr(3 & A[19] | 8, 1), A[8] = A[13] = A[18] = A[23] = "-", A.join("")
    },
    v = function() {
        return t.globalData.apiDomain + t.globalData.service
    },
    m = function() {
        return t.globalData.imgDomain + t.globalData.assets
    },
    p = function(A) {
        var t = new Object;
        if (z(A)) return t;
        var n = new RegExp("[?&][^&]+=?[^&]*", "g"),
            r = A.match(n);
        if (z(r)) return t;
        for (var i = 0; i < r.length; i++) {
            var a = r[i].substring(1).split("=");
            Object.assign(t, e({}, a[0], 2 == a.length ? a[1] : ""))
        }
        return t
    },
    x = function(A) {
        return null == A || null == A
    },
    b = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return x(e) ? t : "object" == A(e) ? JSON.stringify(e) : e.toString()
    },
    h = function(A) {
        return b(A).trim()
    },
    P = function(A) {
        return Array.from(b(A)).reverse().join("")
    },
    z = function(e) {
        return !!x(e) || ("object" == A(e) ? 0 == Object.keys(e).length : "" == h(e))
    },
    T = function(A) {
        return !z(A)
    },
    w = function(A, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (t) {
            for (var n = !1, r = 0; r < e.length; r++)
                if (-1 != e[r].indexOf(A) || -1 != A.indexOf(e[r])) {
                    n = !0;
                    break
                }
            return n
        }
        return -1 != e.indexOf(A)
    },
    C = function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return (Array(e).join(0) + A).slice(-e)
    },
    M = function(A) {
        return /^1[3-9]\d{9}$/.test(A)
    },
    y = function(A) {
        var e = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门"
        };
        if (!A || 18 != A.length || !(e[A.substr(0, 2)] || 9 == A.substr(0, 1) && e[A.substr(1, 2)])) return !1;
        if (!/^[1-9]\d{5}(1[89]|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/.test(A)) return !1;
        for (var t = A.split(""), n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], r = 0, i = 0; i < 17; i++) r += t[i] * n[i];
        return [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][r % 11] == t[17].toUpperCase()
    },
    j = function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = T(e.dataInit) && e.dataInit,
            i = z(e.loading) || e.loading;
        i && wx.request && O(r), e.method = e.method || "get", e.contentType = (e.header || {})["content-type"] || "application/json", e.data = e.data || {}, W(e);
        var a = v();
        t.globalData.shake && -1 == e.url.indexOf("/online") && -1 == e.url.indexOf("/common") && (a += "@" + t.globalData.version), console.log(e), wx.request({
            url: a + e.url,
            method: e.method,
            header: e.header,
            data: e.data,
            success: function(t) {
                if (console.log(t), 200 == t.statusCode) {
                    var r = H(e, t);
                    console.log(r), 1e3 == r.status && n ? L((function() {
                        A(e, !1)
                    }), (function(A) {
                        return e.fail && e.fail(A)
                    })) : 1001 == r.status ? (D("out-of-service", r.message), E("/pages/out-of-service/index")) : e.success && e.success(r)
                } else e.fail && e.fail("服务器接口异常[" + t.statusCode + "]")
            },
            fail: function(A) {
                e.fail && e.fail("网络异常，请稍后重试")
            },
            complete: function(A) {
                i && I(r), e.complete && e.complete(A)
            }
        })
    },
    W = function(e) {
        "/wechat/login.json" == e.url && (t.globalData.version = "default");
        var n = p(e.url),
            r = "",
            i = e.data,
            a = e.method.toLowerCase(),
            o = e.contentType.toLowerCase();
        "get" == a || "post" == a && ("application/x-www-form-urlencoded" == o || "application/octet-stream" == o || o.startsWith("multipart/form-data")) ? "object" == A(i) ? Object.assign(n, i) : Object.assign(n, p("?" + i)) : ("object" == A(i) && (i = JSON.stringify(i), e.data = i), r = i);
        var s = b((new Date).getTime()),
            u = l(),
            c = F(n, r, s, u),
            f = e.header || {};
        (z(e.auth) || e.auth) && (f = Object.assign(f, {
            "x-token": S("accessToken") || ""
        })), Object.assign(f || {}, {
            "x-timestamp": s,
            "x-nonce": u,
            "x-sign": c
        }), e.header = f
    },
    F = function(A, e, t, n) {
        var r = new Array;
        if (Object.keys(A).sort().forEach((function(e) {
                var t = A[e];
                if (R(t)) {
                    var n = h(t);
                    r.push(Q(e) + "=" + Q(n))
                }
            })), R(e)) {
            var i = h(e);
            r.push(Q(i))
        }
        r.push("timestamp=" + t), r.push("nonce=" + n), r.push("key=" + g);
        var a = r.join("&"),
            o = V(t + "@@" + g),
            s = V(n + "@@" + g),
            u = k(a);
        return V("[" + o + "#" + V(u) + "#" + s + "]")
    },
    R = function(A) {
        var e = h(A).toLowerCase();
        return T(e) && !w(e, ["null", "undefined", "{}", "[]"]) && e.length <= 2048
    },
    H = function(e, n) {
        "/wechat/login.json" == e.url && (t.globalData.version = n.header["x-version"] || "default");
        var r = n.data;
        if ("object" != A(r)) try {
            r = JSON.parse(r)
        } catch (A) {}
        if (n.header["x-encrypt"] || !1) {
            for (var i = e.header["x-sign"] || "", a = V(P(i + ":" + g)).substring(8, 24).toUpperCase().split(""), o = 0; o < a.length / 2; o++) {
                var s = a[2 * o];
                a[2 * o] = a[2 * o + 1], a[2 * o + 1] = s
            }
            var u = a.join(""),
                c = r.encrypt || JSON.parse(r).encrypt,
                f = Y(c, u);
            try {
                r = JSON.parse(f)
            } catch (A) {
                r = f
            }
        }
        return r
    },
    O = function() {
        var A = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = arguments.length > 1 ? arguments[1] : void 0;
        A ? wx.showNavigationBarLoading() : wx.showLoading({
            mask: !0,
            title: e || "玩命加载中..."
        })
    },
    I = function(A) {
        A ? wx.hideNavigationBarLoading() : wx.hideLoading()
    },
    E = function(A) {
        wx.reLaunch({
            url: A
        })
    },
    U = function(A, e, t) {
        wx.navigateToMiniProgram && wx.navigateToMiniProgram({
            appId: A,
            path: e,
            extraData: t || {}
        })
    },
    Z = function() {
        return wx.getDeviceInfo()
    },
    N = function(A) {
        var e, t = wx.getStorageSync && wx.getStorageSync(A) || {};
        return (t.timestamp || 0) > (new Date).getTime() ? e = t.value : (e = null, K(A)), e
    },
    D = function(A, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
            n = {
                value: e,
                timestamp: (new Date).getTime() + t
            };
        wx.setStorage && wx.setStorage({
            key: A,
            data: n
        })
    },
    K = function(A) {
        wx.removeStorage && wx.removeStorage({
            key: A
        })
    },
    B = function() {
        wx.clearStorage && wx.clearStorage()
    },
    S = function(A) {
        for (var e, n = t.globalData, r = A.split("."), i = 0; i < r.length; i++) {
            var a = n[r[i]];
            if (i == r.length - 1) T(a) && (e = a);
            else {
                if (z(a)) break;
                n = a
            }
        }
        return e
    },
    X = function(A) {
        return T(A) && "无卡" != A
    },
    q = function() {
        var A = Z();
        return w(A.platform, ["windows", "mac"])
    },
    L = function(A, e, t) {
        if (q()) return e && e("Access Denied"), void(t && t());
        wx.login({
            success: function(n) {
                G(n.code, (function() {
                    A && A()
                }), (function(A) {
                    return e && e(A)
                }), (function() {
                    return t && t()
                }))
            },
            fail: function(A) {
                e && e(A.errMsg), t && t()
            }
        })
    },
    Y = function(A, e) {
        var t = o.enc.Utf8.parse(e.toString()),
            n = o.enc.Utf8.parse(P(e.toString())),
            r = o.AES.decrypt(A.toString(), t, {
                iv: n,
                mode: o.mode.CBC,
                padding: o.pad.Pkcs7
            });
        return o.enc.Utf8.stringify(r)
    },
    V = function(A) {
        return o.MD5(A.toString()).toString()
    },
    k = function(A) {
        return f(A.toString())
    },
    J = function(A) {
        return c(A.toString())
    },
    Q = function(A) {
        for (var e = "", t = 0; t < A.toString().length; t++) {
            var n = parseInt(A.toString().charCodeAt(t), 10);
            e += "\\u" + C(n.toString(16), 4).toUpperCase()
        }
        return e
    },
    G = function(A, e, n, r) {
        j({
            auth: !1,
            loading: !1,
            url: "/wechat/login.json",
            method: "post",
            data: {
                code: A,
                gzhCode: t.globalData.gzhCode
            },
            success: function(A) {
                if (0 == A.status) {
                    var r = A.data;
                    r.init && B(), t.globalData.sessionKey = r.sessionKey || "", t.globalData.accessToken = r.accessToken || "", t.globalData.registered = r.registered || !1, t.globalData.cardInfo = r.cardInfo || [], t.globalData.subscribeWeb = r.subscribeWeb || !1, e && e()
                } else n && n(A.message)
            },
            fail: function(A) {
                n && n(A)
            },
            complete: function() {
                r && r()
            }
        })
    },
    _ = function() {
        var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0,
            t = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0;
        j({
            loading: !1,
            url: "/weixin/sendXcxMessage",
            method: "post",
            data: {
                template_id: A.templateId || "",
                form_id: A.formId || "",
                data: A.data || {},
                color: A.color || "#000",
                emphasis_keyword: A.emphasisKeyword || "",
                page: (A.page || "/pages/welcome/index").replace("/pages", "pages")
            },
            success: function(A) {
                e && e()
            },
            fail: function() {
                t && t()
            },
            complete: function() {
                n && n()
            }
        })
    };
var $ = function(A) {
    return A < 10 ? "0" + A : "" + A
};
module.exports = {
    unzipFun: function(A) {
        var e = c(A),
            t = e.split("").map((function(A) {
                return A.charCodeAt(0)
            })),
            n = new Uint8Array(t);
        return e = function(A) {
            if ("string" == typeof A) return A;
            for (var e = "", t = A, n = 0; n < t.length; n++) {
                var r = t[n].toString(2),
                    i = r.match(/^1+?(?=0)/);
                if (i && 8 == r.length) {
                    for (var a = i[0].length, o = t[n].toString(2).slice(7 - a), s = 1; s < a; s++) o += t[s + n].toString(2).slice(2);
                    e += String.fromCharCode(parseInt(o, 2)), n += a - 1
                } else e += String.fromCharCode(t[n])
            }
            return e
        }(s.inflate(n))
    },
    generateUUID: function() {
        return (new Date).getTime()
    },
    timeDifference: function(A, e) {
        var t = A - e,
            n = (Math.floor(t / 864e5), t % 864e5),
            r = (Math.floor(n / 36e5), n % 36e5),
            i = Math.floor(t / 6e4),
            a = r % 6e4,
            o = Math.floor(a / 1e3);
        return $(i) + ":" + $(o)
    },
    replaceHtml: function(A) {
        return A.replace(/(<([^>]+)>)/gi, "")
    },
    throttle: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            t = null;
        return function() {
            var n = this,
                r = arguments,
                i = (new Date).getTime();
            (z(t) || i - t > e) && (t = i, A.apply(n, r))
        }
    },
    debounce: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            t = null;
        return function() {
            var n = this,
                r = arguments;
            T(t) && clearTimeout(t), t = setTimeout((function() {
                A.apply(n, r)
            }), e)
        }
    },
    uuid: l,
    getApiBase: v,
    getImgBase: m,
    getOauthUrl: function() {
        return t.globalData.oauthDomain + "oauth/weixin/index.html"
    },
    getQueryParam: p,
    getQueryString: function(A, e) {
        if (z(A) || z(e)) return null;
        var t = new RegExp("[?&]" + e + "=?([^&]*)", "i"),
            n = A.match(t);
        return z(n) ? null : n[1]
    },
    compare: function(A) {
        return function(e, t) {
            var n = e[A];
            return t[A] - n
        }
    },
    isNone: x,
    string: b,
    trim: h,
    reverse: P,
    isEmpty: z,
    isNotEmpty: T,
    isTrue: function(A) {
        return !x(A) && "true" == b(A).toLowerCase()
    },
    isFalse: function(A) {
        return !x(A) && "false" == b(A).toLowerCase()
    },
    inArray: w,
    chunk: function(A, e) {
        for (var t = [], n = 0; n < A.length; n += e) t.push(A.slice(n, n + e));
        return t
    },
    getToday: function() {
        var A = new Date,
            e = A.getFullYear(),
            t = A.getMonth() + 1,
            n = A.getDate();
        return e + "-" + C(t) + "-" + C(n)
    },
    getBefday: function(A) {
        var e = new Date((new Date).getTime() - 24 * A * 60 * 60 * 1e3),
            t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate();
        return console.log(r, "daydayday"), t + "-" + C(n) + "-" + C(r)
    },
    getWeek: function(A) {
        return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date(A).getDay()]
    },
    getNoon: function(A) {
        return 1 == A ? "上午" : 2 == A ? "下午" : 3 == A ? "昼夜" : 4 == A ? "全天" : A
    },
    timestampToTime: function(A) {
        var e = new Date(A);
        return e.getFullYear() + "-" + ((e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-") + ((e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + " ") + (e.getHours() + ":") + ((e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + ":") + (e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds())
    },
    dateTo: function(A) {
        var e = A.substring(0, A.indexOf("/")),
            t = A.substring(A.indexOf("/") + 1, A.lastIndexOf("/")),
            n = A.substring(A.lastIndexOf("/") + 1, A.indexOf(" "));
        return (e = e + "-") + (t < 10 ? "0" + t : t + "-") + (n < 10 ? "0" + n : n)
    },
    getStandardDate: function(A) {
        var e = "";
        if (T(A)) {
            A = A.trim();
            e = /^\d{4}[0-1]\d[0-3]\d[0-2]\d[0-5]\d[0-5]\d$/.test(A) ? A.substring(0, 4) + "-" + A.substring(4, 6) + "-" + A.substring(6, 8) + " " + A.substring(8, 10) + ":" + A.substring(10, 12) + ":" + A.substring(12, 14) : /^\d{4}\-[0-1]\d\-[0-3]\d\s+[0-2]\d\:[0-5]\d\:[0-5]\d\.\d+$/.test(A) ? A.substring(0, A.indexOf(".")) : A
        }
        return e
    },
    getLongDate: function(A) {
        var e = "";
        if (T(A)) {
            A = A.trim();
            if (/^\d{4}\-[0-1]\d\-[0-3]\d$/.test(A)) e = (t = new Date(A)).getFullYear() + C(t.getMonth() + 1) + C(t.getDate());
            else if (/^\d{4}\-[0-1]\d\-[0-3]\d\s+[0-2]\d\:[0-5]\d\:[0-5]\d$/.test(A)) {
                var t;
                e = (t = new Date(A)).getFullYear() + C(t.getMonth() + 1) + C(t.getDate()) + C(t.getHours()) + C(t.getMinutes()) + C(t.getSeconds())
            } else e = A
        }
        return e
    },
    getFormatDateTime: function(A) {
        var e = new Date(A),
            t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate(),
            i = e.getHours(),
            a = e.getMinutes(),
            o = e.getSeconds();
        return t + "-" + C(n) + "-" + C(r) + " " + C(i) + ":" + C(a) + ":" + C(o)
    },
    zeroPadding: C,
    arraySplit: function(A, e, t, n) {
        for (var r = [], i = [], a = 0; a < A.length; a++) i.push(A[a]), (0 != a && (a + 1) % e == 0 || a == A.length - 1) && (r.push(i), i = []);
        if (t && r.length > 0) {
            var o = r[r.length - 1],
                s = e - o.length;
            for (a = 0; a < s; a++) o.push(n)
        }
        return r
    },
    searchByKey: function(A, e, t) {
        return "" != t && A.filter((function(A) {
            return -1 != A[e].indexOf(t)
        })) || []
    },
    isInTimeRange: function(A, e, t) {
        var n = A.split(":");
        if (2 != n.length) return !1;
        var r = e.split(":");
        if (2 != r.length) return !1;
        var i = t.split(":");
        if (2 != r.length) return !1;
        var a = new Date,
            o = new Date,
            s = new Date;
        return a.setHours(n[0]), a.setMinutes(n[1]), o.setHours(r[0]), o.setMinutes(r[1]), s.setHours(i[0]), s.setMinutes(i[1]), s.getTime() - a.getTime() > 0 && s.getTime() - o.getTime() < 0
    },
    gethw: function(A, e) {
        var t = "",
            n = e.substring(0, e.indexOf("-")),
            r = e.substring(e.indexOf("-") + 1);
        return Number(A) < Number(n) && (t = "l"), Number(A) > Number(r) && (t = "h"), t
    },
    getSex: function(A) {
        return parseInt(A.slice(-2, -1)) % 2 == 1 ? "1" : "2"
    },
    getAge: function(A) {
        var e = (A + "").length;
        if (0 == e) return 0;
        if (15 != e && 18 != e) return 0;
        var t = "";
        18 == e && (t = A.substr(6, 4) + "/" + A.substr(10, 2) + "/" + A.substr(12, 2)), 15 == e && (t = "19" + A.substr(6, 2) + "/" + A.substr(8, 2) + "/" + A.substr(10, 2));
        var n = new Date(t),
            r = new Date,
            i = r.getFullYear() - n.getFullYear();
        return (r.getMonth() < n.getMonth() || r.getMonth() == n.getMonth() && r.getDate() < n.getDate()) && i--, i
    },
    checkNumber: function(A, e) {
        return (isNaN(e) ? new RegExp("^[0-9]+$") : new RegExp("^[0-9]{" + e + "}$")).test(Number(A))
    },
    checkPhone: M,
    checkIdCard: y,
    handlePhoneSensitive: function(A) {
        return M(A) ? A.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : A
    },
    handleIdCardSensitive: function(A) {
        return y(A) ? A.replace(/^(\d{4})\d{10}(\d{3}[0-9Xx])$/, "$1**********$2") : A
    },
    getInfoByIdCard: function(A, e) {
        if (1 == e) return A.substring(6, 10) + "-" + A.substring(10, 12) + "-" + A.substring(12, 14);
        if (2 == e) return parseInt(A.substr(16, 1)) % 2 == 1 ? "男" : "女";
        if (3 == e) {
            var t = new Date,
                n = t.getMonth() + 1,
                r = t.getDate(),
                i = t.getFullYear() - A.substring(6, 10) - 1;
            return (A.substring(10, 12) < n || A.substring(10, 12) == n && A.substring(12, 14) <= r) && i++, i
        }
    },
    request: j,
    uploadFile: function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = z(e.loading) || e.loading;
        r && wx.uploadFile && O(!1, "努力上传中..."), e.method = "post", e.contentType = "multipart/form-data", e.data = e.formData || {}, W(e);
        var i = v();
        t.globalData.shake && -1 == e.url.indexOf("/online") && -1 == e.url.indexOf("/common") && (i += "@" + t.globalData.version);
        var a = wx.uploadFile && wx.uploadFile({
            url: i + e.url,
            header: e.header,
            formData: e.data,
            name: e.name || "file",
            filePath: e.filePath || "",
            success: function(t) {
                if (console.log(t), 200 == t.statusCode) {
                    var r = H(e, t);
                    1e3 == r.status && n ? L((function() {
                        A(e, !1)
                    }), (function(A) {
                        return e.fail && e.fail(A)
                    })) : 1001 == r.status ? (D("out-of-service", r.message), E("/pages/out-of-service/index")) : e.success && e.success(r)
                } else e.fail && e.fail("服务器接口异常[" + t.statusCode + "]")
            },
            fail: function(A) {
                e.fail && e.fail(A.errMsg)
            },
            complete: function(A) {
                r && I(), e.complete && e.complete(A)
            }
        }) || {};
        return a
    },
    downloadFile: function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = z(e.loading) || e.loading;
        r && wx.downloadFile && O(!1, "努力下载中..."), e.method = "get", e.contentType = (e.header || {})["content-type"] || "application/json", e.data = {}, W(e);
        var i = v();
        t.globalData.shake && -1 == e.url.indexOf("/online") && -1 == e.url.indexOf("/common") && (i += "@" + t.globalData.version);
        var a = wx.downloadFile && wx.downloadFile({
            url: i + e.url,
            header: e.header,
            success: function(t) {
                if (200 == t.statusCode) {
                    var r = H(e, t);
                    1e3 == r.status && n ? L((function() {
                        A(e, !1)
                    }), (function(A) {
                        return e.fail && e.fail(A)
                    })) : 1001 == r.status ? (D("out-of-service", r.message), E("/pages/out-of-service/index")) : e.success && e.success(r)
                } else e.fail && e.fail("服务器接口异常[" + t.statusCode + "]")
            },
            fail: function(A) {
                e.fail && e.fail(A.errMsg)
            },
            complete: function(A) {
                r && I(), e.complete && e.complete(A)
            }
        }) || {};
        return a
    },
    showModal: function(A) {
        wx.showModal({
            title: A.title || "温馨提示",
            content: A.content || "",
            showCancel: A.showCancel || !1,
            cancelText: A.cancelText || "取消",
            cancelColor: A.cancelColor || "#404040",
            confirmText: A.confirmText || "确定",
            confirmColor: A.confirmColor || "#14c79d",
            success: function(e) {
                A.success && A.success(e)
            },
            fail: function() {
                A.fail && A.fail()
            },
            complete: function() {
                A.complete && A.complete()
            }
        })
    },
    showToast: function(A) {
        wx.showToast({
            title: A.title || "提示信息",
            icon: A.icon || "none",
            duration: A.duration || 1500,
            mask: !1
        })
    },
    hideToast: function() {
        wx.hideToast()
    },
    showLoading: O,
    hideLoading: I,
    showTabBar: function() {
        var A = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wx.showTabBar && wx.showTabBar({
            animation: A
        })
    },
    hideTabBar: function(A) {
        wx.hideTabBar && wx.hideTabBar({
            animation: A
        })
    },
    showTips: function(A, e, t, n, r) {
        "toast" == A && wx.showToast({
            title: e,
            icon: t || "none",
            duration: n || 1500,
            mask: !0,
            success: function(A) {
                r && r(A)
            }
        }), "loading" == A && wx.showLoading({
            title: e,
            icon: "loading",
            mask: !0,
            success: function(A) {
                r && r(A)
            }
        })
    },
    hideShareMenu: function() {
        wx.hideShareMenu && wx.hideShareMenu()
    },
    hideHomeButton: function() {
        wx.hideHomeButton && wx.hideHomeButton()
    },
    exitMiniProgram: function() {
        wx.exitMiniProgram && wx.exitMiniProgram()
    },
    setNavigationBarTitle: function(A) {
        wx.setNavigationBarTitle({
            title: A || "标题"
        })
    },
    setNavigationBarColor: function(A, e) {
        wx.setNavigationBarColor({
            frontColor: e || "#ffffff",
            backgroundColor: A || "#14c79d"
        })
    },
    getMenuButtonBoundingClientRect: function() {
        return wx.getMenuButtonBoundingClientRect && wx.getMenuButtonBoundingClientRect()
    },
    navigateTo: function(A) {
        wx.navigateTo({
            url: A
        })
    },
    navigateToNew: function(A, e) {
        e && (A += "?param=".concat(JSON.stringify(e))), wx.navigateTo({
            url: A,
            fail: function(A) {
                console.log("navigateTo跳转出错", A)
            }
        })
    },
    navigateBack: function(A) {
        wx.navigateBack({
            delta: A || 1
        })
    },
    redirectTo: function(A) {
        wx.redirectTo({
            url: A
        })
    },
    redirectToNew: function(A, e) {
        e && (A += "?param=".concat(JSON.stringify(e))), wx.redirectTo({
            url: A,
            fail: function(A) {
                console.log("redirectTo跳转出错", A)
            }
        })
    },
    reLaunch: E,
    reLaunchNew: function(A, e) {
        e && (A += "?param=".concat(JSON.stringify(e))), wx.reLaunch({
            url: A,
            fail: function(A) {
                console.log("reLaunch出错", A)
            }
        })
    },
    switchTab: function(A) {
        wx.switchTab({
            url: A
        })
    },
    navigateToMiniProgram: U,
    navigateBackMiniProgram: function(A) {
        wx.navigateBackMiniProgram && wx.navigateBackMiniProgram({
            extraData: A || {}
        })
    },
    navigateToWebPage: function(A) {
        U("wx308bd2aeb83d3345", "pages/jump/main?serviceId=1000836&path=" + encodeURIComponent(A))
    },
    createAnimation: function() {
        var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return wx.createAnimation({
            delay: T(A.delay) ? A.delay : 0,
            duration: T(A.duration) ? A.duration : 400,
            timingFunction: A.timingFunction || "ease"
        })
    },
    previewImage: function(A) {
        wx.previewImage({
            urls: [A]
        })
    },
    makePhoneCall: function(A) {
        wx.makePhoneCall({
            phoneNumber: A
        })
    },
    scanCode: function(A, e, t, n) {
        wx.scanCode({
            onlyFromCamera: A.onlyFromCamera || !1,
            scanType: ["barCode", "qrCode", "datamatrix", "pdf417"],
            success: function(A) {
                e && e(A)
            },
            fail: function() {
                t && t()
            },
            complete: function() {
                n && n()
            }
        })
    },
    requestPayment: function(A, e, t, n) {
        wx.requestPayment({
            timeStamp: A.timeStamp,
            nonceStr: A.nonceStr,
            package: A.package,
            signType: A.signType,
            paySign: A.sign,
            success: function(A) {
                e && e(A)
            },
            fail: function(A) {
                t && t(A)
            },
            complete: function() {
                n && n()
            }
        })
    },
    openLocation: function(A) {
        wx.openLocation({
            name: A.name || "北京大学口腔医院",
            address: A.address || "北京市海淀区中关村南大街22号",
            latitude: A.latitude || 39.95227,
            longitude: A.longitude || 116.32524,
            scale: A.scale || 16
        })
    },
    addCard: function(A, e, t, n) {
        wx.addCard({
            cardList: [{
                cardId: A,
                cardExt: e
            }],
            success: function(A) {
                t && t(A)
            },
            fail: function() {
                n && n()
            }
        })
    },
    openCard: function(A, e, t, n) {
        wx.openCard({
            cardList: [{
                cardId: A,
                code: e
            }],
            success: function() {
                t && t()
            },
            fail: function() {
                n && n()
            }
        })
    },
    getSystemInfo: function() {
        return wx.getSystemInfoSync()
    },
    getDeviceInfo: Z,
    getStorage: N,
    setStorage: D,
    removeStorage: K,
    clearStorage: B,
    selectElement: function(A, e, t) {
        var n = wx.createSelectorQuery();
        t && (n = n.in(t)), n.select(A).fields({
            size: !0,
            rect: !0,
            scrollOffset: !0,
            dataset: !0
        }, (function(A) {
            e && e(A)
        })).exec()
    },
    createQrcode: function(A, e, t, n, i) {
        r.qrcode(A, e, t, n, i)
    },
    createBarcode: function(A, e, t, n) {
        r.barcode(A, e, t, n)
    },
    showActionSheet: function() {
        var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.showActionSheet && wx.showActionSheet({
            itemColor: A.itemColor || "#404040",
            itemList: A.itemList || [],
            success: function(e) {
                A.success && A.success(e)
            },
            fail: function() {
                A.fail && A.fail()
            },
            complete: function() {
                A.complete && A.complete()
            }
        })
    },
    onUserCaptureScreen: function(A) {
        wx.onUserCaptureScreen((function(e) {
            A && A(e)
        }))
    },
    startFacialRecognitionVerify: function(A, e, t, n, r) {
        wx.checkIsSupportFacialRecognition({
            success: function() {
                wx.startFacialRecognitionVerify({
                    name: A,
                    idCardNumber: e,
                    checkAliveType: t,
                    success: function(A) {
                        n && n(A)
                    },
                    fail: function(A) {
                        r && r(A)
                    }
                })
            },
            fail: function(A) {
                r && r(A)
            }
        })
    },
    canIUse: function(A) {
        return wx.canIUse && wx.canIUse(A)
    },
    getShareMessage: function() {
        return {
            title: "就医更便捷、缴费少排队！",
            path: "/pages/welcome/index",
            imageUrl: m() + "/share.jpg"
        }
    },
    getGlobalData: S,
    getVisitor: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = S("cacheData.visitors");
        if (z(t)) return {
            visitorArr: [],
            visitorSelectorArr: [],
            default: {}
        };
        for (var n = {}, r = 0; r < t.length; r++) {
            var i = t[r];
            z(n[i.visitorIdCard]) && (n[i.visitorIdCard] = {
                visitorId: i.visitorId,
                visitorName: i.visitorName,
                visitorSex: i.visitorSex,
                visitorIdCard: i.visitorIdCard,
                visitorIdCardDisplay: i.visitorIdCardDisplay,
                visitorPhone: i.visitorPhone,
                visitorPhoneDisplay: i.visitorPhoneDisplay,
                visitorRelation: i.visitorRelation,
                visitorCards: []
            }), n[i.visitorIdCard].visitorCards.push({
                uniqueId: i.uniqueId,
                visitorCardNo: i.visitorCardNo,
                visitorCardFlag: i.visitorCardFlag,
                visitorCardState: i.visitorCardState,
                isDefault: i.isDefault
            })
        }
        var a = [];
        for (var i in n) a.push(n[i]);
        var o = [];
        for (r = 0; r < t.length; r++) {
            i = t[r];
            o.push({
                text: [i.visitorName, i.visitorCardNo],
                value: i.visitorId,
                disable: e && !X(i.visitorCardFlag)
            })
        }
        var s = {};
        if (T(A))
            for (r = 0; r < t.length; r++) {
                if ((i = t[r]).visitorId == A && (!e || X(i.visitorCardFlag))) {
                    s = i;
                    break
                }
            }
        if (z(s.visitorId))
            for (r = 0; r < t.length; r++) {
                if ((i = t[r]).isDefault && (!e || X(i.visitorCardFlag))) {
                    s = i;
                    break
                }
            }
        if (z(s.visitorId))
            for (r = 0; r < t.length; r++) {
                i = t[r];
                if (X(i.visitorCardFlag)) {
                    s = i;
                    break
                }
            }
        z(s.visitorId) && !e && (s = i = t[0]);
        return {
            visitorArr: t,
            groupVisitorArr: a,
            visitorSelectorArr: o,
            default: s
        }
    },
    getApps: function() {
        return n.getApps()
    },
    getAppById: function(A) {
        return n.getAppById(A)
    },
    saveFavourite: function(A) {
        var e = n.getAppById(A);
        if (!z(e)) {
            wx.getStorage({
                key: "x-use",
                complete: function(t) {
                    var n = t.data;
                    z(n) && (n = []);
                    for (var r = [], i = 0; i < n.length; i++) {
                        var a = n[i];
                        a.appId != A && r.push(a)
                    }
                    4 == r.length && r.splice(3, 1), r.splice(0, 0, e), wx.setStorage({
                        key: "x-use",
                        data: r
                    })
                }
            })
        }
    },
    getFavourite: function() {
        return wx.getStorageSync("x-use")
    },
    getUnAvailableImg: function() {
        return "data:image/jpeg;base64,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"
    },
    selectComponent: function(A, e) {
        return A.selectComponent && A.selectComponent(e) || {}
    },
    firstRun: function(A, e) {
        var t = N(A) || "";
        z(t) && (D(A, Math.random()), e && e())
    },
    justRun: function(A, e, t) {
        if (0 != e) {
            var n = N(A) || "";
            z(n) && (e < 0 ? D(A, Math.random()) : e > 0 && D(A, Math.random(), e), t && t())
        } else t && t()
    },
    isMobile: function() {
        var A = Z();
        return w(A.platform, ["android", "ios"])
    },
    isDesktop: q,
    isDevtool: function() {
        var A = Z();
        return w(A.platform, ["devtools"])
    },
    checkSession: function() {
        wx.checkSession({
            fail: function() {
                L()
            }
        })
    },
    login: L,
    isAuthed: function() {
        return T(S("auth.user"))
    },
    loadToken: G,
    getClock: function(A) {
        var e = a.Clock;
        return e.init(A), e
    },
    getCipherExpire: function() {
        return Number("60") || 0
    },
    encryptWithRsa: function(A, e) {
        var t = i.Cipher;
        return t.setPublicKey(e.toString()), t.encrypt(A.toString())
    },
    decryptWithRsa: function(A, e) {
        var t = i.Cipher;
        return t.setPrivateKey(e.toString()), t.decrypt(A.toString())
    },
    encryptWithAes: function(A, e) {
        var t = o.enc.Utf8.parse(e.toString()),
            n = o.enc.Utf8.parse(P(e.toString()));
        return o.AES.encrypt(A.toString(), t, {
            iv: n,
            mode: o.mode.CBC,
            padding: o.pad.Pkcs7
        }).toString()
    },
    decryptWithAes: Y,
    encryptWithRc4: function(A, e) {
        var t = o.enc.Utf8.parse(e.toString());
        return o.RC4.encrypt(A.toString(), t).toString()
    },
    decryptWithRc4: function(A, e) {
        var t = o.enc.Utf8.parse(e.toString()),
            n = o.RC4.decrypt(A.toString(), t);
        return o.enc.Utf8.stringify(n)
    },
    md5: V,
    zip: function(A) {
        var e = s.gzip(A.toString(), {
            to: "string"
        });
        return k(e)
    },
    unzip: function(A) {
        var e = J(A.toString());
        return s.ungzip(e, {
            to: "string"
        })
    },
    encodeBase64: k,
    decodeBase64: J,
    encodeUnicode: Q,
    decodeUnicode: function(A) {
        for (var e = "", t = A.toString().match(/\\u[0-9a-f]{4}/gi), n = 0; n < t.length; n++) {
            var r = t[n].replace(/\\u/i, "");
            e += String.fromCharCode(parseInt(r, 16).toString(10))
        }
        return e
    },
    sendTemplateMessage: _,
    sendTemplateMessage_yygh_done: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        _({
            templateId: "pxGLAiBKC02FE_7AUF9D7pyzUHUV8iFsLjP1YfgiXSU",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword1.DATA",
            page: "/pages/personal-center/index?page=" + encodeURIComponent("/pages/personal-cent/yyjl/index?" + t)
        })
    },
    sendTemplateMessage_yygh_cancel: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        _({
            templateId: "ukSkktFGuqwUUnQ1AHnF_szkwGA7B9v74_mdFHoD5hY",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword1.DATA",
            page: "/pages/ucenter/index?page=" + encodeURIComponent("/pages/yygh/ghjl/index?" + t)
        })
    },
    sendTemplateMessage_dtgh_done: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        _({
            templateId: "Ai5xOTvJ3s3J9eNvWruOptzVJkiONBBx3_xawVj1cUM",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword1.DATA",
            page: "/pages/ucenter/index?page=" + encodeURIComponent("/pages/dtgh/ghjl/index?" + t)
        })
    },
    sendTemplateMessage_dtgh_cancel: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        _({
            templateId: "13jCA-1wrvdQ2UkaPBc5EjLChewbuONx-hQkWRWkUNc",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword1.DATA",
            page: "/pages/ucenter/index?page=" + encodeURIComponent("/pages/dtgh/ghjl/index?" + t)
        })
    },
    sendTemplateMessage_mzcz_done: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        _({
            templateId: "hjf9rPLu50vd155GVONUc4AhyABoXmMvEdR4DuQvgQM",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword3.DATA",
            page: "/pages/ucenter/index?page=" + encodeURIComponent("/pages/mzcz/czjl/index")
        })
    },
    sendTemplateMessage_zycz_done: function(A) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        _({
            templateId: "Gyd5cd3tJ_inu6u4DgPGWrd__lHi7SWK7uKoM4FWobE",
            formId: A || "",
            data: e || {},
            emphasisKeyword: "keyword3.DATA",
            page: "/pages/ucenter/index?page=" + encodeURIComponent("/pages/zycz/czjl/index")
        })
    },
    checklength: function(A) {
        return !(A.length < 7)
    },
    jsonObjectIsEmpty: function(A) {
        var e = !0;
        for (var t in A) {
            e = !1;
            break
        }
        return e
    },
    timeRange: function(A, e, t) {
        var n = A.split(":");
        if (2 != n.length) return !1;
        var r = e.split(":");
        if (2 != r.length) return !1;
        var i = t.split(":");
        if (2 != r.length) return !1;
        var a = new Date,
            o = new Date,
            s = new Date;
        return a.setHours(n[0]), a.setMinutes(n[1]), o.setHours(r[0]), o.setMinutes(r[1]), s.setHours(i[0]), s.setMinutes(i[1]), s.getTime() - a.getTime() > 0 && s.getTime() - o.getTime() < 0
    },
    splitStr: function(A, e) {
        var t = A.lastIndexOf("|");
        return A = 0 == e ? A.substring(0, t) : A.substring(t + 1, A.length)
    },
    checkTidcard: function(A) {
        return /^[a-zA-Z][0-9]{9}$/.test(A)
    },
    checkGAidcard: function(A) {
        return /^([A-Z]\d{6,10}(\w1)?)$/.test(A)
    },
    timestampToTime2: function(A) {
        var e = new Date(A);
        return e.getFullYear() + "-" + ((e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-") + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate())
    },
    getNowMonthAndDay: function() {
        var A = new Date,
            e = A.getMonth() + 1,
            t = A.getDate();
        return e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), e + "月" + t + "日"
    },
    searchByKey3: function(A, e, t) {
        return "" != t && A.filter((function(A) {
            return !!A.hasOwnProperty(e) && A[e].match(t)
        })) || []
    },
    getCurrentPages: function() {
        var A = getCurrentPages(),
            e = A[A.length - 1];
        t.globalData.currentPage = "/" + e.route
    },
    getInviteCode: function() {
        return S("inviteCode") || ""
    },
    setInviteCode: function(A) {
        t.globalData.inviteCode = A
    },
    getMiniGrogVersion: function() {
        var A = wx.getAccountInfoSync(),
            e = "";
        return T(A) && T(A.miniProgram.version) && (e = "V" + A.miniProgram.version), e
    },
    regionPickerPackage: function(A, e, t, n) {
        var r = [];
        return 0 == A ? (r = [t, t[e].cityArr, t[e].cityArr[0].areaArr], n = [e, 0, 0]) : 1 == A ? (r = [t, t[n[0]].cityArr, t[n[0]].cityArr[e].areaArr], n = [n[0], e, 0]) : 2 == A && (r = [t, t[n[0]].cityArr, t[n[0]].cityArr[n[1]].areaArr], n = [n[0], n[1], e]), {
            multiArray: r,
            multiIndex: n
        }
    },
    mathChangeDate: function(A, e, t, n) {
        var r = A.replace(/-/g, "/"),
            i = Date.parse(r);
        return "+" == e ? i = i / 1e3 + 86400 * t : "-" == e && (i = i / 1e3 - 86400 * t), d(i, n)
    },
    toDate: d
};