
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    t = require("../../@babel/runtime/helpers/asyncToGenerator"),
    n = require("../../common/vendor.js"),
    a = require("../../common/assets.js"),
    i = require("../../request/request.js"),
    u = require("../../utils/util.js");
Math || o();
var o = function() {
        return "../../components/nodata/index.js"
    },
    r = {
        __name: "index",
        setup: function(o) {
            getApp();
            var r = n.ref(!1),
                l = n.ref(""),
                d = n.ref([{
                    value: "0",
                    name: "魏公村总院区",
                    phone: "010-62179977",
                    distance: "",
                    img: "/static/area.png",
                    address: "北京市海淀区中关村南大街22号",
                    latitude: 39.95227,
                    longitude: 116.32524
                }, {
                    value: "6",
                    name: "国合门诊部(国际门诊非医保单位)",
                    distance: "",
                    phone: "",
                    img: "/static/area.png",
                    address: "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼",
                    latitude: 39.953164,
                    longitude: 116.324532
                }, {
                    value: "1",
                    name: "第一门诊部(医保定点)",
                    distance: "",
                    phone: "010-53295000",
                    img: "/static/area.png",
                    address: "北京市西城区西黄城根北街10号",
                    latitude: 39.924101,
                    longitude: 116.378039
                }, {
                    value: "2",
                    name: "第二门诊部(医保定点)",
                    distance: "",
                    phone: "010-82196299",
                    img: "/static/area.png",
                    address: "北京市朝阳区安立路66号安立写字楼C座5楼",
                    latitude: 40.00346,
                    longitude: 116.4083
                }, {
                    value: "3",
                    name: "第三门诊部(医保定点)",
                    distance: "",
                    phone: "010-82037030",
                    img: "/static/area.png",
                    address: "北京市海淀区花园东路10号高德大厦A座2层203室",
                    latitude: 39.98277,
                    longitude: 116.37011
                }, {
                    value: "4",
                    name: "第四门诊部(医保定点)",
                    distance: "",
                    phone: "010-85715955",
                    img: "/static/area.png",
                    address: "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼",
                    latitude: 39.91692,
                    longitude: 116.48834
                }, {
                    value: "5",
                    name: "第五门诊部(医保定点)",
                    distance: "",
                    phone: "010-65538893",
                    img: "/static/area.png",
                    address: "北京市朝阳区朝阳门外大街吉庆里14号佳汇国际中心A座305室",
                    latitude: 39.92742,
                    longitude: 116.44106
                }, {
                    value: "7",
                    name: "天竺门诊部(非医保单位)",
                    distance: "",
                    phone: "",
                    img: "/static/area.png",
                    address: "北京市顺义区金航西路4号院绿地自由港B座一层",
                    latitude: 40.114408,
                    longitude: 116.580015
                }, {
                    value: "9",
                    name: "朝阳门门诊部(非医保单位)",
                    distance: "",
                    phone: "65538891/65538892",
                    img: "/static/area.png",
                    address: "北京市朝阳区朝阳门外大街吉祥里115号一层",
                    latitude: 39.926799,
                    longitude: 116.43787
                }, {
                    value: "10",
                    name: "石景山门诊部(需选医保定点)",
                    distance: "",
                    phone: "010-50801099",
                    img: "/static/area.png",
                    address: "北京市石景山区鲁谷路74号瑞达大厦三层",
                    latitude: 39.902972,
                    longitude: 116.244964
                }, {
                    value: "11",
                    name: "回龙观门诊部(非医保单位)",
                    distance: "",
                    phone: "010-82195009",
                    img: "/static/area.png",
                    address: "北京市昌平区回龙观东大街195号院昌发展.AI加速中心北区西塔1-3层",
                    latitude: 40.079887,
                    longitude: 116.347041
                }]),
                s = n.ref("");
            n.ref("");
            var c = "",
                g = "",
                f = n.ref("1"),
                v = n.ref([{
                    value: "0",
                    name: "魏公村总院区"
                }, {
                    value: "6",
                    name: "国合门诊部(国际门诊非医保单位)"
                }, {
                    value: "1",
                    name: "第一门诊部(医保定点)"
                }, {
                    value: "2",
                    name: "第二门诊部(医保定点)"
                }, {
                    value: "3",
                    name: "第三门诊部(医保定点)"
                }, {
                    value: "4",
                    name: "第四门诊部(医保定点)"
                }, {
                    value: "5",
                    name: "第五门诊部(医保定点)"
                }, {
                    value: "7",
                    name: "天竺门诊部(非医保单位)"
                }, {
                    value: "9",
                    name: "朝阳门门诊部(非医保单位)"
                }, {
                    value: "10",
                    name: "石景山门诊部(需选医保定点)"
                }, {
                    value: "11",
                    name: "回龙观门诊部(非医保单位)"
                }]),
                h = n.ref(0),
                m = "魏公村总院区",
                p = n.ref([]),
                y = n.ref(!1),
                x = "",
                z = "";
             function j() {
                r.value = !1
            }
             function T() {
                r.value = !1, "yygh" == s.value ? u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + m) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + m)
            }
             function _() {
                u.util.navigateTo("/intelligent/syhy/index?popupModel=" + s.value)
            }
             function C(e) {
                p.value = [], y.value = !1, h.value = e.value, m = e.name,
                    function(e) {
                        var t = {
                            areaCode: e,
                            withRemain: "1"
                        };
                        "dtgh" == s.value ? i.getTodayDeptList(t).then((function(e) {
                            if (console.log("getTodayDeptList", e), 0 == e.status) {
                                var t = e.data.lists;
                                0 != t.length ? (t.sort((function(e, t) {
                                    return t.remainNum - e.remainNum
                                })), p.value = t, y.value = !0) : p.value = []
                            } else u.util._showModal({
                                content: e.message || "查询失败"
                            })
                        })).catch((function(e) {
                            console.log(e), u.util._showModal({
                                content: e.message || JSON.stringify(e) || "查询失败，请稍候重试"
                            })
                        })) : i.getYyDeptList(t).then((function(e) {
                            if (console.log("getYyDeptList", e), 0 == e.status) {
                                var t = e.data.lists;
                                0 != t.length ? (t.sort((function(e, t) {
                                    return t.remainNum - e.remainNum
                                })), p.value = t, y.value = !0) : p.value = []
                            } else u.util._showModal({
                                content: e.message || "查询失败"
                            })
                        })).catch((function(e) {
                            console.log(e), u.util._showModal({
                                content: e.message || JSON.stringify(e) || "查询失败，请稍候重试"
                            })
                        }))
                    }(e.value)
            }
             function N(e) {
                "dtgh" != s.value && "yygh" != s.value ? "ksjs" != s.value && "zjjs" != s.value ? "hygs" != s.value ? n.index.showToast({
                    title: "暂未开通！",
                    icon: "none"
                }) : u.util.navigateTo("/intelligent/hygs/gsSearch/index?myToday=".concat(x, "&&searchType=").concat(e)) : u.util.navigateTo("/intelligent/yqSearch/index?popupModel=yygh&searchType=".concat(e)) : u.util.navigateTo("/intelligent/yqSearch/index?popupModel=".concat(s.value, "&searchType=").concat(e))
            }
            n.onLoad((function(e) {
                console.log(e), s.value = e.popupModel, x = e.myToday, n.index.showLoading({
                    title: "加载中..."
                }), n.index.getLocation({
                    type: "wgs84",
                    success: function(e) {
                        console.log("位置", e), g = e.latitude, c = e.longitude, d.value.forEach((function(e, t) {
                            var n, a, i, u, o, r, l, d, s;
                            e.distance = (n = g, a = c, i = e.latitude, u = e.longitude, l = (o = n * Math.PI / 180) - (r = i * Math.PI / 180), d = a * Math.PI / 180 - u * Math.PI / 180, s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(l / 2), 2) + Math.cos(o) * Math.cos(r) * Math.pow(Math.sin(d / 2), 2))), s *= 6378.137, s = (s = Math.round(1e4 * s) / 1e4).toFixed(2))
                        })), console.log("items", d.value), n.index.hideLoading()
                    },
                    fail: function(e) {
                        console.log("位置err", e), n.index.hideLoading()
                    }
                })
            }));
            var M = u.util._throttle(function() {
                var a = t(e().mark((function t(a) {
                    var i, o, d, c, g, f, v, h, p, y, j, T, _;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.name, m = i, z = a.value, "yygh" != s.value) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 4, u.util.getPubList("yq_notice");
                            case 4:
                                o = e.sent.filter((function(e) {
                                    return "yq_notice" == e.classCode
                                })), console.log("yqNoticeList：", o), 6 == z ? (d = o.filter((function(e) {
                                    return e.infoTopic.indexOf("国合") >= 0
                                })), u.util._isNotEmpty(d) ? (l.value = d[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 7 == z ? (c = o.filter((function(e) {
                                    return e.infoTopic.indexOf("天竺") >= 0
                                })), u.util._isNotEmpty(c) ? (l.value = c[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 9 == z ? (g = o.filter((function(e) {
                                    return e.infoTopic.indexOf("朝阳门") >= 0
                                })), u.util._isNotEmpty(g) ? (l.value = g[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 10 == z ? (f = o.filter((function(e) {
                                    return e.infoTopic.indexOf("石景山") >= 0
                                })), u.util._isNotEmpty(f) ? (l.value = f[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 11 == z ? (v = o.filter((function(e) {
                                    return e.infoTopic.indexOf("回龙观") >= 0
                                })), u.util._isNotEmpty(v) ? (l.value = v[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance), e.next = 16;
                                break;
                            case 8:
                                if ("dtgh" != s.value) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 11, u.util.getPubList("yq_notice");
                            case 11:
                                h = e.sent.filter((function(e) {
                                    return "yq_notice" == e.classCode
                                })), console.log("yqNoticeList：", h), 6 == z ? (p = h.filter((function(e) {
                                    return e.infoTopic.indexOf("国合") >= 0
                                })), u.util._isNotEmpty(p) ? (l.value = p[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 7 == z ? (y = h.filter((function(e) {
                                    return e.infoTopic.indexOf("天竺") >= 0
                                })), u.util._isNotEmpty(y) ? (l.value = y[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 9 == z ? (j = h.filter((function(e) {
                                    return e.infoTopic.indexOf("朝阳门") >= 0
                                })), u.util._isNotEmpty(j) ? (l.value = j[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 10 == z ? (T = h.filter((function(e) {
                                    return e.infoTopic.indexOf("石景山") >= 0
                                })), u.util._isNotEmpty(T) ? (l.value = T[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : 11 == z ? (_ = h.filter((function(e) {
                                    return e.infoTopic.indexOf("回龙观") >= 0
                                })), u.util._isNotEmpty(_) ? (l.value = _[0].infoDetail, r.value = !0) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance)) : u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + z + "&area=" + i + "&distance=" + a.distance), e.next = 16;
                                break;
                            case 15:
                                "hygs" == s.value ? n.index.navigateTo({
                                    url: "/intelligent/hygs/xzks/index?areaCode=" + z + "&myToday=" + x
                                }) : "tzgs" == s.value ? n.index.navigateTo({
                                    url: "/intelligent/hygs/index/index?areaCode=" + z + "&popupModel=tzgs"
                                }) : "ksjs" == s.value ? n.index.navigateTo({
                                    url: "/intelligent/hospital/ksjs/index?areaCode=" + z
                                }) : "zjjs" == s.value ? n.index.navigateTo({
                                    url: "/intelligent/hospital/ksjs/index?areaCode=" + z + "&isDoctor=1"
                                }) : "yyjj" == s.value ? n.index.navigateTo({
                                    url: "/intelligent/hospital/yyjj/index?areaCode=" + z
                                }) : "lydh" == s.value && (16, u.util.openLocation({
                                    name: a.name,
                                    address: a.address,
                                    latitude: a.latitude,
                                    longitude: a.longitude,
                                    scale: 16
                                }));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return a.apply(this, arguments)
                }
            }(), 1e3);
            return function(e, t) {
                return n.e({
                    a: "tzgs" != n.unref(s)
                }, "tzgs" != n.unref(s) ? n.e({
                    b: a._imports_1$5,
                    c: n.o((function(e) {
                        return N("1")
                    }), "a8"),
                    d: n.o((function(e) {
                        return N("2")
                    }), "54"),
                    e: n.o((function(e) {
                        return N("1")
                    }), "72"),
                    f: "yygh" == n.unref(s) || "dtgh" == n.unref(s)
                }, "yygh" == n.unref(s) || "dtgh" == n.unref(s) ? {
                    g: n.o(_, "18")
                } : {}) : {}, {
                    h: "yygh" == n.unref(s) || "dtgh" == n.unref(s) || "ksjs" == n.unref(s) || "zjjs" == n.unref(s)
                }, ("yygh" == n.unref(s) || "dtgh" == n.unref(s) || "ksjs" == n.unref(s) || n.unref(s), {}), {
                    i: "1" == n.unref(f)
                }, "1" == n.unref(f) ? n.e({
                    j: n.f(n.unref(d), (function(e, t, i) {
                        return n.e({
                            a: "tzgs" != n.unref(s) || 0 == t
                        }, "tzgs" != n.unref(s) || 0 == t ? n.e({
                            b: e.img,
                            c: n.t(e.name),
                            d: e.distance
                        }, e.distance ? {
                            e: a._imports_1$6,
                            f: n.t(e.distance)
                        } : {}, {
                            g: n.t(e.address),
                            h: n.o((function(t) {
                                return n.unref(M)(e)
                            }), t)
                        }) : {}, {
                            i: t
                        })
                    })),
                    k: "yyjj" == n.unref(s)
                }, "yyjj" == n.unref(s) ? n.e({
                    l: a._imports_2$4
                }, {}, {
                    o: n.o((function(e) {
                        return n.unref(M)({
                            value: "三亚"
                        })
                    }), "1e")
                }) : {}, {
                    p: n.n("tzgs" != n.unref(s) && "ksjs" != n.unref(s) && "zjjs" != n.unref(s) ? "list" : "list list1")
                }) : n.e({
                    q: n.f(n.unref(v), (function(e, t, a) {
                        return {
                            a: n.t(e.name),
                            b: n.n(n.unref(h) == e.value ? "selected hd_item" : "hd_item"),
                            c: n.o((function(t) {
                                return C(e)
                            }), t),
                            d: t
                        }
                    })),
                    r: n.unref(y)
                }, n.unref(y) ? n.e({
                    s: 0 == n.unref(p).length
                }, 0 == n.unref(p).length ? {
                    t: n.p({
                        content: "未放号",
                        top: "40"
                    })
                } : {
                    v: n.f(n.unref(p), (function(e, t, a) {
                        return n.e({
                            a: n.t(e.deptName),
                            b: 0 == e.remainNum
                        }, 0 == e.remainNum ? {} : {
                            c: n.t(e.remainNum)
                        }, {
                            d: n.o((function(t) {
                                return function(e) {
                                    e.remainNum <= 0 || ("yygh" == s.value ? u.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + e.areaCode + "&area=" + m + "&deptCode=" + e.majorDetailId + "&deptName=" + e.deptName + "&showJzxz=true") : "dtgh" == s.value && u.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + e.areaCode + "&area=" + m + "&deptCode=" + e.majorDetailId + "&deptName=" + e.deptName + "&showJzxz=true"))
                                }(e)
                            }), t),
                            e: t
                        })
                    }))
                }) : {}), {
                    w: n.unref(r)
                }, n.unref(r) ? {
                    x: a._imports_1$2,
                    y: a._imports_1$2,
                    z: a._imports_2$2,
                    A: n.unref(l),
                    B: n.o(j, "e7"),
                    C: n.o(T, "4a")
                } : {})
            }
        }
    },
    l = n._export_sfc(r, [
        ["__scopeId", "data-v-456daee1"]
    ]);
wx.createPage(l);