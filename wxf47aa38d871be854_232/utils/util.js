
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGlobalData = f;
var e = getApp(),
    t = require("./wxcode.js"),
    n = require("./big-decimal.min.js"),
    o = function(e) {
        return (e = e.toString())[1] ? e : "0".concat(e)
    };
var r = function(e) {
        return /^[1][0-9]{10}$/.test(e)
    },
    i = function(e) {
        var t = {
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
        if (!e || 18 != e.length || !(t[e.substr(0, 2)] || 9 == e.substr(0, 1) && t[e.substr(1, 2)])) return !1;
        if (!/^[1-9]\d{5}(1[89]|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|[Xx])$/.test(e)) return !1;
        for (var n = e.split(""), o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], r = 0, i = 0; i < 17; i++) r += n[i] * o[i];
        return [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][r % 11] == n[17].toUpperCase()
    },
    a = function(e) {
        return null == e || null == e || "" == e.toString().trim() || 0 == e.toString().trim().length || "null" == e.toString().toLowerCase().trim() || "{}" == e
    },
    u = function(e) {
        return !a(e)
    },
    c = function(t) {
        for (var n, o = e.globalData, r = t.split("."), i = 0; i < r.length; i++) {
            var c = o[r[i]];
            if (i == r.length - 1) u(c) && (n = c);
            else {
                if (a(c)) break;
                o = c
            }
        }
        return n
    },
    s = function(e) {
        return !a(e) && "false" == e.toString().toLowerCase()
    },
    g = function(e) {
        return e < 10 ? "0" + e : "" + e
    },
    l = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return (Array(t).join(0) + e).slice(-t)
    };
e = getApp();
 function f(t) {
    for (var n, o = e.globalData, r = t.split("."), i = 0; i < r.length; i++) {
        var c = o[r[i]];
        if (i == r.length - 1) u(c) && (n = c);
        else {
            if (a(c)) break;
            o = c
        }
    }
    return n
}
var d = function(e, t, n) {
        wx.navigateToMiniProgram && wx.navigateToMiniProgram({
            appId: e,
            path: t,
            extraData: n || {}
        })
    },
    m = function(e) {
        var t, n = wx.getStorageSync && wx.getStorageSync(e) || {};
        return (n.timestamp || 0) > (new Date).getTime() ? t = n.value : (t = null, v(e)), t
    },
    h = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
            o = {
                value: t,
                timestamp: (new Date).getTime() + n
            };
        wx.setStorage && wx.setStorage({
            key: e,
            data: o
        })
    },
    v = function(e) {
        wx.removeStorage && wx.removeStorage({
            key: e
        })
    },
    w = function(e) {
        var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "HALF_UP";
        switch (r) {
            case "UP":
                t = n.RoundingModes.UP;
                break;
            case "DOWN":
                t = n.RoundingModes.DOWN;
                break;
            case "CEILING":
                t = n.RoundingModes.CEILING;
                break;
            case "FLOOR":
                t = n.RoundingModes.FLOOR;
                break;
            case "HALF_UP":
                t = n.RoundingModes.HALF_UP;
                break;
            case "HALF_DOWN":
                t = n.RoundingModes.HALF_DOWN;
                break;
            case "HALF_EVEN":
                t = n.RoundingModes.HALF_EVEN;
                break;
            case "UNNECESSARY":
                t = n.RoundingModes.UNNECESSARY;
                break;
            default:
                t = n.RoundingModes.HALF_UP
        }
        return n.round(e, o, t)
    };
module.exports = {
    _getSystemInfo: function() {
        return wx.getSystemInfoSync && wx.getSystemInfoSync() || {}
    },
    _getMenuButtonBoundingClientRect: function() {
        return wx.getMenuButtonBoundingClientRect && wx.getMenuButtonBoundingClientRect()
    },
    getDay: function(e, t) {
        var n = new Date,
            o = n.getTime(),
            r = 864e5 * e;
        n.setTime(parseInt(o + r));
        var i = n.getFullYear(),
            a = (n.getMonth() + 1).toString();
        a.length <= 1 && (a = "0" + a);
        var u = n.getDate().toString();
        return u.length <= 1 && (u = "0" + u), i + t + a + t + u
    },
    _add: function(e, t) {
        return n.add(e, t)
    },
    _subtract: function(e, t) {
        return n.subtract(e, t)
    },
    _multiply: function(e, t) {
        return n.multiply(e, t)
    },
    _getStorage: m,
    _round: w,
    _divide: function(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        return n.divide(e, t, o)
    },
    _toFixed: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return w(e, t, "HALF_UP")
    },
    _setStorage: h,
    _clearStorage: function() {
        wx.clearStorage && wx.clearStorage()
    },
    _removeStorage: v,
    _chunk: function(e, t) {
        for (var n = [], o = 0; o < e.length; o += t) n.push(e.slice(o, o + t));
        return n
    },
    _navigateToWebPage: function(e) {
        d("wx308bd2aeb83d3345", "pages/jump/main?serviceId=1000836&path=" + encodeURIComponent(e))
    },
    _navigateToMiniProgram: d,
    _justRun: function(e, t, n) {
        if (0 != t) {
            var o = m(e) || "";
            a(o) && (t < 0 ? h(e, Math.random()) : t > 0 && h(e, Math.random(), t), n && n())
        } else n && n()
    },
    _getGlobalData: c,
    _getContentInfo: function() {
        return c("cacheData.contentInfoList") || []
    },
    formatTimeDrug: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = e.getFullYear(),
            r = e.getMonth() + 1,
            i = e.getDate(),
            a = e.getHours(),
            u = e.getMinutes(),
            c = e.getSeconds();
        return 0 == t ? [n, r, i].map(o).join("-") + " " + [a, u, c].map(o).join(":") : 1 == t ? [n, r, i].map(o).join("-") : 2 == t ? i : void 0
    },
    getSystemInfoHeight: function() {
        var e = wx.getSystemInfoSync();
        return e.windowHeight * (750 / e.windowWidth)
    },
    _searchByKey: function(e, t, n) {
        return "" != n && e.filter((function(e) {
            return -1 != e[t].toString().indexOf(n)
        })) || []
    },
    _startFacialRecognitionVerify: function(e, t, n, o, r) {
        console.log("========" + e + "==sad=" + t), wx.startFacialRecognitionVerify({
            name: e,
            idCardNumber: t,
            checkAliveType: n,
            success: function(e) {
                o && o(e)
            },
            fail: function(e) {
                r && r(e)
            }
        })
    },
    _checkIsSupportFacialRecognition: function(e, t) {
        wx.checkIsSupportFacialRecognition({
            success: function(t) {
                e && e(t)
            },
            fail: function(e) {
                console.log(e), t && t()
            }
        })
    },
    _timestampToTime: function(e) {
        var t = new Date(parseInt(e));
        return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + ((t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) + " ") + (t.getHours() + ":") + ((t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":") + (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds())
    },
    getGlobalData: f,
    greateTime: function(e) {
        return (new Date).getTime() - e >= 12096e5
    },
    _selectElement: function(e, t, n) {
        var o = wx.createSelectorQuery();
        n && (o = o.in(n)), o.select(e).fields({
            size: !0,
            rect: !0,
            scrollOffset: !0,
            dataset: !0
        }, (function(e) {
            t && t(e)
        })).exec()
    },
    _throttle: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
            n = null;
        return function() {
            var o = this,
                r = arguments,
                i = (new Date).getTime();
            (a(n) || i - n > t) && (n = i, e.apply(o, r))
        }
    },
    _debounce: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = null;
        return function() {
            var o = this,
                r = arguments;
            u(n) && clearTimeout(n), n = setTimeout((function() {
                e.apply(o, r)
            }), t)
        }
    },
    formatTime: function(e) {
        var t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate(),
            i = e.getHours(),
            a = e.getMinutes(),
            u = e.getSeconds();
        return "".concat([t, n, r].map(o).join("/"), " ").concat([i, a, u].map(o).join(":"))
    },
    _showTips: function(e, t, n, o, r) {
        "toast" == e && wx.showToast({
            title: t,
            icon: n || "none",
            duration: o || 1500,
            mask: !0,
            success: function(e) {
                r && r(e)
            }
        }), "loading" == e && wx.showLoading({
            title: t,
            icon: "loading",
            mask: !0,
            success: function(e) {
                r && r(e)
            }
        })
    },
    _showModal: function(e) {
        wx.showModal({
            title: e.title || "温馨提示",
            content: e.content || "",
            showCancel: e.showCancel || !1,
            cancelText: e.cancelText || "取消",
            cancelColor: e.cancelColor || "#999",
            confirmText: e.confirmText || "确定",
            confirmColor: e.confirmColor || "#439eed",
            success: function(t) {
                e.success && e.success(t)
            }
        })
    },
    redirectTo: function(e, t) {
        t && (e += "?param=".concat(JSON.stringify(t))), wx.redirectTo({
            url: e,
            fail: function(e) {
                console.log("redirectTo跳转出错", e)
            }
        })
    },
    navigateTo: function(e, t) {
        t && (e += "?param=".concat(JSON.stringify(t))), wx.navigateTo({
            url: e,
            fail: function(e) {
                console.log("navigateTo跳转出错", e)
            }
        })
    },
    filterTime: function(e, t) {
        var n = new Date,
            o = n.getHours(),
            r = n.getMinutes();
        if (console.log(r), n.getDate() != t) return e;
        for (var i = [], a = 0; a < e.length; a++) {
            var u = e[a],
                c = Number(u.substring(6, 8)),
                s = Number(u.substring(9, 11));
            (c > o || c == o && s >= r) && i.push(u)
        }
        return i
    },
    _selectComponent: function(e, t) {
        return e.selectComponent && e.selectComponent(t) || {}
    },
    _createAnimation: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return wx.createAnimation({
            delay: u(e.delay) ? e.delay : 0,
            duration: u(e.duration) ? e.duration : 400,
            timingFunction: e.timingFunction || "ease"
        })
    },
    fnTime: function(e) {
        var t, n = new Date(e),
            o = (n.getFullYear(), n.getMonth()),
            r = n.getDate(),
            i = n.getHours(),
            a = n.getMinutes(),
            u = n.getSeconds();
        return i > 12 ? (i -= 12, t = " PM") : t = " AM", r = r < 10 ? "0" + r : r, o = o < 10 ? "0" + o : o, u = u < 10 ? "0" + u : u, t + " " + ((i = i < 10 ? "0" + i : i) + ":" + (a = a < 10 ? "0" + a : a))
    },
    _isPoneAvailable: function(e) {
        return !!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)
    },
    _showLoading: function(e) {
        wx.showLoading({
            mask: !0,
            title: e || "加载中..."
        })
    },
    setNavigationBarTitle: function(e) {
        wx.setNavigationBarTitle && wx.setNavigationBarTitle({
            title: e || "标题"
        })
    },
    _hideLoading: function() {
        wx.hideLoading()
    },
    _showToast: function(e) {
        wx.showToast({
            title: e.title.message || e.title,
            icon: e.icon || "none",
            duration: e.duration || 1500,
            mask: !1
        })
    },
    _navigateBack: function(e) {
        wx.navigateBack({
            delta: e || 1
        })
    },
    isDuringDate: function(e) {
        var t = new Date;
        return new Date(e) >= t
    },
    _getInfoByIdCard: function(e, t) {
        if (1 == t) return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14);
        if (2 == t) return parseInt(e.substr(16, 1)) % 2 == 1 ? "男" : "女";
        if (3 == t) {
            var n = new Date,
                o = n.getMonth() + 1,
                r = n.getDate(),
                i = n.getFullYear() - e.substring(6, 10) - 1;
            return (e.substring(10, 12) < o || e.substring(10, 12) == o && e.substring(12, 14) <= r) && i++, i
        }
    },
    _handleIdCardSensitive: function(e) {
        return i(e) ? e.replace(/^(\d{4})\d{10}(\d{3}[0-9Xx])$/, "$1**********$2") : e
    },
    _handlePhoneSensitive: function(e) {
        return r(e) ? e.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : e
    },
    _checkPhone: r,
    _checkIdCard: i,
    _isEmpty: a,
    _hasCard: function(e) {
        return u(e) && "无卡" != e
    },
    _isNotEmpty: u,
    _createQrcode: function(e, n, o, r, i) {
        t.qrcode(e, n, o, r, i)
    },
    authSubMessage: function(t, n, o, r) {
        var i = wx.canIUse("requestSubscribeMessage"),
            u = e.globalData.subMessageArrays[n];
        console.log(u), console.log("can====" + i), i && "function" == typeof wx.requestSubscribeMessage ? wx.getSetting({
            withSubscriptions: !0,
            success: function(e) {
                console.log(e);
                var n = e.subscriptionsSetting || {};
                if (s(n.mainSwitch)) return console.log("订阅消息失败：用户关闭了主开关"), void(o && o(t));
                console.log(n);
                var r = n.itemSettings || {},
                    i = u.filter((function(e) {
                        return a(r[e])
                    }));
                console.log(i), i.length > 0 && (!0, "tip_1_" + i.length), console.log("订阅消息通知"), wx.requestSubscribeMessage({
                    tmplIds: u,
                    success: function(e) {
                        console.log("订阅消息通知success" + JSON.stringify(e))
                    },
                    fail: function(e) {
                        console.log("订阅消息通知fail" + JSON.stringify(e))
                    },
                    complete: function(e) {
                        console.log("订阅消息通知complete" + JSON.stringify(e)), !0, "tip_1_" + i.length, o && o(t)
                    }
                })
            }
        }) : o && o(t)
    },
    _isFalse: s,
    timeDifference: function(e, t) {
        var n = e - t,
            o = (Math.floor(n / 864e5), n % 864e5),
            r = (Math.floor(o / 36e5), o % 36e5),
            i = Math.floor(n / 6e4),
            a = r % 6e4,
            u = Math.floor(a / 1e3);
        return g(i) + ":" + g(u)
    },
    reLaunch: function(e, t) {
        t && (e += "?param=".concat(JSON.stringify(t))), wx.reLaunch({
            url: e,
            fail: function(e) {
                console.log("reLaunch出错", e)
            }
        })
    },
    getFormatDateArr: function(e) {
        var t = new Date(e),
            n = t.getFullYear(),
            o = t.getMonth() + 1,
            r = t.getDate();
        t.getHours(), t.getMinutes(), t.getSeconds();
        return [n, o, r]
    },
    generateUUID: function() {
        return (new Date).getTime()
    },
    timeLong: function(e) {
        return Math.round(e / 1e3)
    },
    _openLocation: function(e) {
        wx.openLocation({
            name: e.name || "北京人民大会堂",
            address: e.address || "北京市天安门广场西侧",
            latitude: e.latitude || 39.90517,
            longitude: e.longitude || 116.39382,
            scale: e.scale || 16
        })
    },
    _getToday: function() {
        var e = new Date,
            t = e.getFullYear(),
            n = e.getMonth() + 1,
            o = e.getDate();
        return t + "-" + l(n) + "-" + l(o)
    },
    mathChangeDate: function(e, t, n, o) {
        var r = e.replace(/-/g, "/"),
            i = Date.parse(r);
        return "+" == t ? i = i / 1e3 + 86400 * n : "-" == t && (i = i / 1e3 - 86400 * n),
            function(e, t, n) {
                var o = e,
                    r = new Date(1e3 * parseInt(o)),
                    i = r.getFullYear(),
                    a = r.getMonth() + 1;
                a = a < 10 ? "0" + a : a;
                var u = r.getDate();
                u = u < 10 ? "0" + u : u;
                var c = r.getHours();
                c = c < 10 ? "0" + c : c;
                var s = r.getMinutes(),
                    g = r.getSeconds();
                if (s = s < 10 ? "0" + s : s, g = g < 10 ? "0" + g : g, t) return "year" == n ? i : "month" == n ? a : "date" == n ? o : i + "-" + a + "-" + u;
                return i + "-" + a + "-" + u + " " + c + ":" + s + ":" + g
            }(i, o)
    },
    formatTimes: function() {
        var e = new Date,
            t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate();
        e.getHours(), e.getMinutes(), e.getSeconds();
        return "".concat([t, n, r].map(o).join("-"))
    }
};