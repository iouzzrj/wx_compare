
var e = require("../@babel/runtime/helpers/typeof"),
    t = require("../@babel/runtime/helpers/regeneratorRuntime"),
    n = require("../@babel/runtime/helpers/asyncToGenerator"),
    r = require("../common/vendor.js"),
    i = require("../service/baseConfig.js"),
    o = require("../request/request.js"),
    a = require("./crypto-js"),
    u = require("./big-decimal.min.js"),
    s = require("./base64.min.js"),
    c = s.atob,
    g = s.btoa,
    l = getApp(),
    f = l.globalData.apiSecret,
    d = function() {
        return a.MD5(f).toString().substring(8, 24).toLowerCase()
    },
    p = function(e) {
        return h(e) ? e : e.split("").reverse().join("")
    },
    h = function(e) {
        return null == e || null == e || "" == e.toString().trim() || "null" == e.toString().trim().toLowerCase() || "undefined" == e.toString().trim().toLowerCase() || "{}" == JSON.stringify(e) || "[]" == JSON.stringify(e)
    },
    m = function(e) {
        return !h(e)
    },
    v = function(e) {
        r.index.showModal({
            title: e.title || "温馨提示",
            content: e.content || "",
            showCancel: e.showCancel || !1,
            cancelText: e.cancelText || "取消",
            cancelColor: e.cancelColor || "#999",
            confirmText: e.confirmText || "确定",
            confirmColor: e.confirmColor || "#3F8884",
            success: function(t) {
                e.success && e.success(t)
            }
        })
    },
    b = function(e) {
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
        for (var n = e.split(""), r = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = 0, o = 0; o < 17; o++) i += n[o] * r[o];
        return [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][i % 11] == n[17].toUpperCase()
    },
    x = function(e) {
        return /^[1][0-9]{10}$/.test(e)
    };
 function S(e, t, n) {
    var r = e,
        i = new Date(1e3 * parseInt(r)),
        o = i.getFullYear(),
        a = i.getMonth() + 1;
    a = a < 10 ? "0" + a : a;
    var u = i.getDate();
    u = u < 10 ? "0" + u : u;
    var s = i.getHours();
    s = s < 10 ? "0" + s : s;
    var c = i.getMinutes(),
        g = i.getSeconds();
    return c = c < 10 ? "0" + c : c, g = g < 10 ? "0" + g : g, t ? "year" == n ? o : "month" == n ? a : "date" == n ? r : o + "-" + a + "-" + u : o + "-" + a + "-" + u + " " + s + ":" + c + ":" + g
}
var M, y = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return (Array(t).join(0) + e).slice(-t)
    },
    D = function(e) {
        r.index.openLocation({
            name: e.name || "北京大学口腔医院",
            address: e.address || "北京市海淀区中关村南大街22号",
            latitude: e.latitude || 39.95227,
            longitude: e.longitude || 116.32524,
            scale: e.scale || 16
        })
    },
    w = function(e) {
        var t, n = r.index.getStorageSync && r.index.getStorageSync(e) || {};
        return (n.timestamp || 0) > (new Date).getTime() ? t = n.value : (t = null, k(e)), t
    },
    C = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
            i = {
                value: t,
                timestamp: (new Date).getTime() + n
            };
        r.index.setStorage && r.index.setStorage({
            key: e,
            data: i
        })
    },
    k = function(e) {
        r.index.removeStorage && r.index.removeStorage({
            key: e
        })
    },
    A = function() {
        var e = n(t().mark((function e(n, i) {
            return t().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        l.globalData.registered ? (i && (n += "?param=".concat(JSON.stringify(i))), r.index.navigateTo({
                            url: n,
                            fail: function(e) {
                                console.log("navigateTo跳转出错", e)
                            }
                        })) : r.index.navigateTo({
                            url: "/intelligent/jzr/quickSign/index"
                        });
                    case 1:
                    case "end":
                        return e.stop()
                }
            }), e)
        })));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }(),
    T = function(e) {
        return !h(e) && "false" == e.toString().toLowerCase()
    },
    _ = function(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "HALF_UP";
        switch (r) {
            case "UP":
                t = u.RoundingModes.UP;
                break;
            case "DOWN":
                t = u.RoundingModes.DOWN;
                break;
            case "CEILING":
                t = u.RoundingModes.CEILING;
                break;
            case "FLOOR":
                t = u.RoundingModes.FLOOR;
                break;
            case "HALF_UP":
            default:
                t = u.RoundingModes.HALF_UP;
                break;
            case "HALF_DOWN":
                t = u.RoundingModes.HALF_DOWN;
                break;
            case "HALF_EVEN":
                t = u.RoundingModes.HALF_EVEN;
                break;
            case "UNNECESSARY":
                t = u.RoundingModes.UNNECESSARY
        }
        return u.round(e, n, t)
    },
    I = function() {
        return l.globalData.imgDomain + l.globalData.assets
    },
    L = function() {
        return r.index.getDeviceInfo()
    },
    P = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) {
            for (var r = !1, i = 0; i < t.length; i++)
                if (-1 != t[i].indexOf(e) || -1 != e.indexOf(t[i])) {
                    r = !0;
                    break
                }
            return r
        }
        return -1 != t.indexOf(e)
    },
    N = function(e, t, n) {
        if (0 != t) {
            var r = w(e) || "";
            h(r) && (t < 0 ? C(e, Math.random()) : t > 0 && C(e, Math.random(), t), n && n())
        } else n && n()
    },
    F = function(e) {
        B("wx308bd2aeb83d3345", "pages/jump/main?serviceId=1000836&path=" + encodeURIComponent(e))
    },
    B = function(e, t, n) {
        r.index.navigateToMiniProgram && r.index.navigateToMiniProgram({
            appId: e,
            path: t,
            extraData: n || {}
        })
    },
    O = {
        "上午-1": "07:45",
        "上午-2": "08:30",
        "上午-3": "09:00",
        "上午-4": "10:00",
        "上午-5": "08:00",
        "上午-6": "10:30",
        "上午-7": "09:30",
        "上午-8": "11:00",
        "上午-9": "11:30",
        "下午-1": "12:45",
        "下午-2": "13:30",
        "下午-3": "14:30",
        "下午-4": "13:00",
        "下午-5": "15:00",
        "下午-6": "14:00",
        "下午-7": "15:30",
        "下午-8": "16:00",
        "下午-9": "16:30",
        "晚间-1": "16:00",
        "晚间-2": "16:30",
        "晚间-3": "17:00",
        "晚间-4": "17:30",
        "晚间-5": "18:00",
        "晚间-6": "18:30",
        "晚间-7": "19:30"
    },
    R = {
        0: "北京大学口腔医院魏公村总院区",
        1: "北京大学口腔医院第一门诊",
        2: "北京大学口腔医院第二门诊部",
        3: "北京大学口腔医院第三门诊部",
        4: "北京大学口腔医院第四门诊部",
        5: "北京大学口腔医院第五门诊部",
        6: "北京大学口腔医院国合门诊部",
        7: "北京大学口腔医院天竺门诊部",
        9: "北京大学口腔医院朝阳门诊部",
        99: "北京大学口腔医院一门诊C楼院区"
    },
    U = {
        0: "北京市海淀区中关村南大街22号",
        1: "北京市西城区西黄城根北街10号",
        2: "北京市朝阳区安立路66号安立写字楼B座5楼",
        3: "北京市海淀区花园东路10号高德大厦A座2层203室",
        4: "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼",
        5: "北京市朝阳区朝阳门外大街吉庆里14号佳汇国际中心A座305室",
        6: "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼",
        7: "北京市顺义区金航西路4号院绿地自由港B座一层",
        9: "北京市朝阳区朝阳门外大街吉祥里115号一层",
        99: "北京市西城区西黄城根北街10号"
    },
    E = function(e) {
        return e < 10 ? "0" + e : "" + e
    };
 function H(e) {
    if ("string" == typeof e) return e;
    for (var t = "", n = e, r = 0; r < n.length; r++) {
        var i = n[r].toString(2),
            o = i.match(/^1+?(?=0)/);
        if (o && 8 == i.length) {
            for (var a = o[0].length, u = n[r].toString(2).slice(7 - a), s = 1; s < a; s++) u += n[s + r].toString(2).slice(2);
            t += String.fromCharCode(parseInt(u, 2)), r += a - 1
        } else t += String.fromCharCode(n[r])
    }
    return t
}
var $, j = {
    test: function(e, t) {
        i.baseConfig.test = {
            name: "曲",
            sex: "1"
        }
    },
    encryptWithAes: function(e, t) {
        var n = a.enc.Utf8.parse(t.toString()),
            r = a.enc.Utf8.parse(p(t.toString()));
        return a.AES.encrypt(e.toString(), n, {
            iv: r,
            mode: a.mode.CBC,
            padding: a.pad.Pkcs7
        }).toString()
    },
    decryptWithAes: function(e, t) {
        var n = a.enc.Utf8.parse(t.toString()),
            r = a.enc.Utf8.parse(p(t.toString())),
            i = a.AES.decrypt(e.toString(), n, {
                iv: r,
                mode: a.mode.CBC,
                padding: a.pad.Pkcs7
            });
        return a.enc.Utf8.stringify(i)
    },
    secondToTime: function(e) {
        var t = e % 60,
            n = e / 60,
            r = n % 60;
        return E(parseInt(n / 60)) + ":" + E(parseInt(r)) + ":" + E(parseInt(t))
    },
    getPubList: ($ = n(t().mark((function e() {
        var n, r, i;
        return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = w("pubList") || [], !h(n)) {
                        e.next = 7;
                        break
                    }
                    return r = {
                        classCode: l.globalData.pubListCode,
                        withDetail: !0
                    }, e.next = 5, o.pubList(r, !1);
                case 5:
                    i = e.sent, console.log("信息发布", i), "0" == i.code && (n = i.content, C("pubList", n, 864e5));
                case 7:
                    return e.abrupt("return", n);
                case 8:
                case "end":
                    return e.stop()
            }
        }), e)
    }))), function() {
        return $.apply(this, arguments)
    }),
    setBaseInfo: function(e) {
        return new Promise((function(t, n) {
            r.index.setStorageSync("accessToken", e.content.accessToken), r.index.setStorageSync("tokenVersion", e.content.tokenVersion), r.index.setStorageSync("realName", e.content.realName), r.index.setStorageSync("userInfo", e.content.realUser), r.index.setStorageSync("nickName", e.content.nickName), r.index.setStorageSync("phoneNo", e.content.phoneNo), r.index.setStorageSync("imLoginInfo", e.content.imLoginVo), i.baseConfig.imLoginInfo = e.content.imLoginVo, i.baseConfig.isLoginIm = !h(e.content.imLoginVo), i.baseConfig.bindPatients = e.content.bindPatients, i.baseConfig.versionStorage = e.version, m(e.content.extend) && (l.globalData.cardInfo = e.content.extend.oldPatientInfos), t(e)
        }))
    },
    byteToString: H,
    unzipFun: function(e) {
        var t = c(e),
            n = t.split("").map((function(e) {
                return e.charCodeAt(0)
            })),
            i = new Uint8Array(n);
        return t = H(r.pako.inflate(i))
    },
    showTimePipe: function(e) {
        var t = new Date,
            n = t.getFullYear(),
            r = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() - -1) : t.getMonth() - -1,
            i = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
            o = Date.parse(n + "/" + r + "/" + i + " 00:00:00"),
            a = [];
        a[0] = o + 864e5, a[1] = o, a[2] = o - 864e5, a[3] = o - 1728e5, a[4] = o - 5184e5, a[5] = o - 31536e6;
        var u, s = new Date;
        if (s.setTime(e), e >= a[1] && e < a[0]) u = s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes());
        else if (e >= a[2] && e < a[1]) u = "昨天 " + s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes());
        else if (e >= a[3] && e < a[2]) u = "前天 " + s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes());
        else if (e >= a[4] && e < a[3]) {
            var c, g = "星期" + ["天", "一", "二", "三", "四", "五", "六"][s.getDay()];
            switch (g) {
                case "星期天":
                    c = "星期天";
                    break;
                case "星期一":
                    c = "星期一";
                    break;
                case "星期二":
                    c = "星期二";
                    break;
                case "星期三":
                    c = "星期三";
                    break;
                case "星期四":
                    c = "星期四";
                    break;
                case "星期五":
                    c = "星期五";
                    break;
                case "星期六":
                    c = "星期六";
                    break;
                default:
                    c = g
            }
            u = c + " " + s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes())
        } else if (e >= a[5] && e < a[4]) {
            var l = "月",
                f = "日";
            u = s.getMonth() - -1 + l + s.getDate() + f + " " + s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes())
        } else l = "月", f = "日", u = s.getFullYear() + "年" + (s.getMonth() - -1) + l + s.getDate() + f + " " + s.getHours() + ":" + (s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes());
        return u
    },
    timesFun: function(e) {
        var t = e,
            n = (new Date).getTime() - t;
        return Math.floor(n / 6e4)
    },
    timeLong: function(e) {
        return Math.round(e / 1e3)
    },
    videoSizeFomFormert: function(e, t, n) {
        if (n && (n = Math.abs(n)), 90 == n || 270 == n) {
            var r = e;
            e = t, t = r
        }
        return e > t ? "width: 300rpx !important;height: " + (t *= 300 / e) + "rpx !important;border-radius: 6rpx;" : "width: 180rpx !important;height: " + (t *= 180 / e) + "rpx !important;border-radius: 6rpx;"
    },
    imgeSizeFomFormert: function(e, t) {
        var n = "";
        return e && t && (n = (e = parseInt(e)) == (t = parseInt(t)) ? e >= 300 ? "width: 300rpx !important;height: 300rpx !important" : "width: " + e + "rpx !important;height: " + t + "rpx !important" : t > e ? t > 500 ? "height: 500rpx !important;width: " + (e *= 500 / t) + "rpx !important;" : "width: " + e + "rpx !important;height: " + t + "rpx !important" : e > 300 ? "width: 300rpx !important;height: " + (t *= 300 / e) + "rpx !important;" : "width: " + e + "rpx !important;height: " + t + "rpx !important"), n
    },
    goCareModelMini: function() {
        r.wx$1.navigateToMiniProgram({
            appId: "wx308bd2aeb83d3345",
            path: "/subPages/medical-mvp/hospital-homepage/main?appid=wxf47aa38d871be854",
            complete: function(e) {
                console.log("onTapToEldmHomePage res", e)
            }
        })
    },
    subStringStr: function(e, t, n) {
        return e.substring(t, n)
    },
    exitMiniProgram: function() {
        r.wx$1.exitMiniProgram && r.wx$1.exitMiniProgram()
    },
    _selectElement: function(e, t, n) {
        var i = r.wx$1.createSelectorQuery();
        n && (i = i.in(n)), i.select(e).fields({
            size: !0,
            rect: !0,
            scrollOffset: !0,
            dataset: !0
        }, (function(e) {
            t && t(e)
        })).exec()
    },
    checkNumber: function(e, t) {
        return (isNaN(t) ? new RegExp("^[0-9]+$") : new RegExp("^[0-9]{" + t + "}$")).test(Number(e))
    },
    startFacialRecognitionVerify: function(e, t, n, i, o) {
        r.wx$1.checkIsSupportFacialRecognition({
            success: function() {
                r.wx$1.startFacialRecognitionVerify({
                    name: e,
                    idCardNumber: t,
                    checkAliveType: n,
                    success: function(e) {
                        i && i(e)
                    },
                    fail: function(e) {
                        o && o(e)
                    }
                })
            },
            fail: function(e) {
                o && o(e)
            }
        })
    },
    getAge: function(e) {
        var t = (e + "").length;
        if (0 == t) return 0;
        if (15 != t && 18 != t) return 0;
        var n = "";
        18 == t && (n = e.substr(6, 4) + "/" + e.substr(10, 2) + "/" + e.substr(12, 2)), 15 == t && (n = "19" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2));
        var r = new Date(n),
            i = new Date,
            o = i.getFullYear() - r.getFullYear();
        return (i.getMonth() < r.getMonth() || i.getMonth() == r.getMonth() && i.getDate() < r.getDate()) && o--, o
    },
    regionPickerPackage: function(e, t, n, r) {
        var i = [];
        return 0 == e ? (i = [n, n[t].cityArr, n[t].cityArr[0].areaArr], r = [t, 0, 0]) : 1 == e ? (i = [n, n[r[0]].cityArr, n[r[0]].cityArr[t].areaArr], r = [r[0], t, 0]) : 2 == e && (i = [n, n[r[0]].cityArr, n[r[0]].cityArr[r[1]].areaArr], r = [r[0], r[1], t]), {
            multiArray: i,
            multiIndex: r
        }
    },
    checkIdCard: function(e) {
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
        for (var n = e.split(""), r = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = 0, o = 0; o < 17; o++) i += n[o] * r[o];
        return [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2][i % 11] == n[17].toUpperCase()
    },
    splitDate: function(e) {
        if (void 0 !== e) return e.substring(0, 10)
    },
    replaceTime: function(e) {
        return e.replaceAll("T", " ").replaceAll(".", ":")
    },
    splitTime: function(e) {
        return e.split("T")[0]
    },
    decodeBase64: function(e) {
        return c(e.toString())
    },
    encodeBase64: function(e) {
        return g(e.toString())
    },
    ghAreaHelper: function(e) {
        return R[e] ? R[e] : ""
    },
    ghAreaHelperCareMode: function(e) {
        return R[e] ? R[e].substr(8) : ""
    },
    ghAreaAddrHelper: function(e) {
        return U[e] ? U[e] : ""
    },
    hideLoading: function(e) {
        e ? r.index.hideNavigationBarLoading() : r.index.hideLoading()
    },
    showLoading: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        e ? r.index.showNavigationBarLoading() : r.index.showLoading({
            mask: !0,
            title: t || "玩命加载中..."
        })
    },
    timestampToWeek: function(e) {
        return ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date(e).getDay()]
    },
    millisecondToDate: function(e) {
        e = parseInt(e);
        var t = Math.floor(e / 1e3 / 60 << 0),
            n = Math.floor(e / 1e3 % 60);
        return 0 == t ? t = "00" : t < 10 && (t = "0" + t), 0 == n ? n = "00" : n < 10 && (n = "0" + n), t + "分" + n + "秒"
    },
    getTodayLong: function() {
        return new Date
    },
    timeDifference: function(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = e - t,
            i = Math.floor(r / 864e5);
        if (n) return i;
        var o = r % 864e5 % 36e5,
            a = Math.floor(r / 6e4),
            u = o % 6e4,
            s = Math.floor(u / 1e3);
        return E(a) + ":" + E(s)
    },
    twoDateTimeDifference: function(e, t) {
        var n = new Date(e.replace(/-/g, "/")),
            r = new Date(t.replace(/-/g, "/"));
        return Math.abs(r - n) / 864e5
    },
    ghTimeHelper: function(e, t) {
        var n = e + "-" + t;
        return O[n] ? O[n] : ""
    },
    redirectTo: function(e) {
        r.index.redirectTo({
            url: e
        })
    },
    searchByKey: function(e, t, n) {
        return "" != n && e.filter((function(e) {
            return -1 != e[t].indexOf(n)
        })) || []
    },
    searchByKey2: function(e, t, n) {
        return "" != n && e.filter((function(e) {
            return !!e.hasOwnProperty(t) && e[t].match(n)
        })) || []
    },
    makePhoneCall: function(e) {
        r.index.makePhoneCall({
            phoneNumber: e
        })
    },
    showToast: function(e) {
        r.index.showToast({
            title: e.title || "提示信息",
            icon: e.icon || "none",
            duration: e.duration || 1500,
            mask: !1
        })
    },
    chunk: function(e, t) {
        for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
        return n
    },
    justRun: N,
    getSystemInfo: function() {
        return r.index.getWindowInfo()
    },
    getMenuButtonBoundingClientRect: function() {
        return r.index.getMenuButtonBoundingClientRect && r.index.getMenuButtonBoundingClientRect()
    },
    reLaunch: function(e) {
        r.index.reLaunch({
            url: e
        })
    },
    inArray: P,
    getDeviceInfo: L,
    isDesktop: function() {
        var e = L();
        return P(e.platform, ["windows", "mac"])
    },
    clearStorage: M = function() {
        r.index.clearStorage && r.index.clearStorage()
    },
    getGlobalData: function(e) {
        for (var t, n = l.globalData, r = e.split("."), i = 0; i < r.length; i++) {
            var o = n[r[i]];
            if (i == r.length - 1) m(o) && (t = o);
            else {
                if (h(o)) break;
                n = o
            }
        }
        return t
    },
    string: function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return function(e) {
            return null == e || null == e
        }(t) ? n : "object" == e(t) ? JSON.stringify(t) : t.toString()
    },
    setInviteCode: function(e) {
        l.globalData.inviteCode = e
    },
    getQueryString: function(e, t) {
        if (h(e) || h(t)) return null;
        var n = new RegExp("[?&]" + t + "=?([^&]*)", "i"),
            r = e.match(n);
        return h(r) ? null : r[1]
    },
    getMiniGrogVersion: function() {
        var e = r.index.getAccountInfoSync(),
            t = "";
        return m(e) && m(e.miniProgram.version) && (t = "V" + e.miniProgram.version), t
    },
    getApiBase: function() {
        return l.globalData.apiDomain + l.globalData.service
    },
    getImgBase: I,
    getOauthUrl: function() {
        return l.globalData.oauthDomain + "oauth/weixin/index.html"
    },
    getShareMessage: function() {
        return {
            title: "就医更便捷、缴费少排队！",
            path: "/pages/welcome/index",
            imageUrl: I() + "/share.jpg"
        }
    },
    _toFixed: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return _(e, t, "HALF_UP")
    },
    _round: _,
    _divide: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        return u.divide(e, t, n)
    },
    _multiply: function(e, t) {
        return u.multiply(e, t)
    },
    _subtract: function(e, t) {
        return u.subtract(e, t)
    },
    _add: function(e, t) {
        return u.add(e, t)
    },
    isFalse: T,
    _isFalse: T,
    md5: function(e) {
        return a.MD5(e).toString()
    },
    authSubMessage: function(e, t, n) {
        var i = r.index.canIUse("requestSubscribeMessage"),
            o = l.globalData.hospitalInfo.subMessageArrays[t];
        console.log(o), console.log("can====" + i), i && "function" == typeof r.index.requestSubscribeMessage ? r.index.getSetting({
            withSubscriptions: !0,
            success: function(t) {
                console.log(t);
                var i = t.subscriptionsSetting || {};
                if (T(i.mainSwitch)) return console.log("订阅消息失败：用户关闭了主开关"), void(n && n());
                console.log(i);
                var a = i.itemSettings || {},
                    u = o.filter((function(e) {
                        return h(a[e])
                    }));
                console.log(u), u.length > 0 && u.length, console.log("订阅消息通知"), r.index.requestSubscribeMessage({
                    tmplIds: o,
                    success: function(e) {
                        console.log("订阅消息通知success" + JSON.stringify(e))
                    },
                    fail: function(e) {
                        console.log("订阅消息通知fail" + JSON.stringify(e))
                    },
                    complete: function(t) {
                        console.log("订阅消息通知complete" + JSON.stringify(t)), u.length, n && n(e)
                    }
                })
            }
        }) : n && n(e)
    },
    toDate: S,
    _timestampToDate: function(e) {
        var t = new Date(parseInt(e));
        return [t.getFullYear(), t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, t.getDate() < 10 ? "0" + t.getDate() : t.getDate()].join("-")
    },
    _nameIndexOf: function(e, t) {
        return "" != e && null != e && -1 != e.indexOf(t)
    },
    _splitComma: function(e, t) {
        return "" == e || null == e ? -1 : e.split(",").indexOf(t)
    },
    _throttle: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = null;
        return function() {
            var r = this,
                i = arguments,
                o = (new Date).getTime();
            (h(n) || o - n > t) && (n = o, e.apply(r, i))
        }
    },
    _justRun: N,
    navigateBack: function(e) {
        r.index.navigateBack({
            delta: e || 1
        })
    },
    navigateTo: A,
    _navigateTo: A,
    getStorage: w,
    _getStorage: w,
    setStorage: C,
    _setStorage: C,
    _clearStorage: M,
    _removeStorage: k,
    removeStorage: k,
    showModal: v,
    _showModal: v,
    _ecrypt: function(e) {
        var t = a.enc.Utf8.parse(d().toString()),
            n = a.enc.Utf8.parse(p(d().toString())),
            r = a.enc.Utf8.parse(e),
            i = a.AES.encrypt(r, t, {
                iv: n,
                mode: a.mode.CBC,
                padding: a.pad.Pkcs7
            });
        return a.enc.Base64.stringify(i.ciphertext)
    },
    isEmpty: h,
    _isEmpty: h,
    isNotEmpty: m,
    _isNotEmpty: m,
    _getInfoByIdCard: function(e, t) {
        if (1 == t) return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14);
        if (2 == t) return parseInt(e.substr(16, 1)) % 2 == 1 ? "男" : "女";
        if (3 == t) {
            var n = new Date,
                r = n.getMonth() + 1,
                i = n.getDate(),
                o = n.getFullYear() - e.substring(6, 10) - 1;
            return (e.substring(10, 12) < r || e.substring(10, 12) == r && e.substring(12, 14) <= i) && o++, o
        }
    },
    _getAgeByBirthDay: function(e) {
        var t = new Date,
            n = t.getMonth() + 1,
            r = t.getDate(),
            i = t.getFullYear() - e.substring(0, 4) - 1;
        return (e.substring(5, 7) < n || e.substring(5, 7) == n && e.substring(8) <= r) && i++, i
    },
    _handleIdCardSensitive: function(e) {
        return b(e) ? e.replace(/^(\d{4})\d{10}(\d{3}[0-9Xx])$/, "$1**********$2") : e
    },
    _handlePhoneSensitive: function(e) {
        return x(e) ? e.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : e
    },
    _checkIdCard: b,
    _checkPhone: x,
    _hideIdCard: function(t) {
        if (void 0 !== t && "object" != e(t)) return b(t) ? 15 == t.length ? t.substring(0, 4) + "**********" + t.substring(11) : t.substring(0, 4) + "**********" + t.substring(14) : t
    },
    _mathChangeDate: function(e, t, n, r) {
        var i = e.replace(/-/g, "/"),
            o = Date.parse(i);
        return "+" == t ? o = o / 1e3 + 86400 * n : "-" == t && (o = o / 1e3 - 86400 * n), S(o, r)
    },
    _getToday: function() {
        var e = new Date,
            t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate();
        return t + "-" + y(n) + "-" + y(r)
    },
    _zeroPadding: y,
    _dateTimeStr: function(e) {
        return null == (e += "") || "" == e ? "" : e.substring(0, 4) + "-" + e.substring(4, 6) + "-" + e.substring(6, 8) + " " + e.substring(8)
    },
    navigateToWebPage: F,
    _navigateToWebPage: F,
    _navigateToMiniProgram: B,
    navigateToMiniProgram: B,
    openLocation: D,
    _openLocation: D
};
exports.util = j;