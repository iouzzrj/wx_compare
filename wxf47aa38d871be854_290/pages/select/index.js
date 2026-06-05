
var e = require("../../common/vendor.js"),
    t = require("../../common/assets.js"),
    a = require("../../request/request.js"),
    n = require("../../utils/util.js");
Math || i();
var i = function() {
        return "../../components/nodata/index.js"
    },
    u = {
        __name: "index",
        setup: function(i) {
            getApp();
            var u = e.ref(!1),
                o = e.ref(""),
                l = e.ref([{
                    value: "0",
                    name: "魏公村总院区",
                    phone: "010-62179977",
                    checked: "true",
                    distance: "",
                    img: "/static/area.png",
                    address: "北京市海淀区中关村南大街22号",
                    latitude: 39.95227,
                    longitude: 116.32524
                }, {
                    value: "6",
                    name: "国合门诊部(国际门诊)",
                    distance: "",
                    phone: "",
                    img: "/static/area.png",
                    address: "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼",
                    latitude: 39.953164,
                    longitude: 116.324532
                }, {
                    value: "1",
                    name: "第一门诊部",
                    distance: "",
                    phone: "010-53295000",
                    img: "/static/area.png",
                    address: "北京市西城区西黄城根北街10号",
                    latitude: 39.924101,
                    longitude: 116.378039
                }, {
                    value: "2",
                    name: "第二门诊部",
                    distance: "",
                    phone: "010-82196299",
                    img: "/static/area.png",
                    address: "北京市朝阳区安立路66号安立写字楼C座5楼",
                    latitude: 40.00346,
                    longitude: 116.4083
                }, {
                    value: "3",
                    name: "第三门诊部",
                    distance: "",
                    phone: "010-82037030",
                    img: "/static/area.png",
                    address: "北京市海淀区花园东路10号高德大厦A座2层203室",
                    latitude: 39.98277,
                    longitude: 116.37011
                }, {
                    value: "4",
                    name: "第四门诊部(非医保单位)",
                    distance: "",
                    phone: "010-85715955",
                    img: "/static/area.png",
                    address: "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼",
                    latitude: 39.91692,
                    longitude: 116.48834
                }, {
                    value: "5",
                    name: "第五门诊部(非医保单位)",
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
                }]),
                s = e.ref("");
            e.ref("");
            var r = "",
                d = "",
                g = e.ref("1"),
                c = e.ref([{
                    value: "0",
                    name: "魏公村总院区"
                }, {
                    value: "6",
                    name: "国合门诊部(国际门诊)"
                }, {
                    value: "1",
                    name: "第一门诊部"
                }, {
                    value: "2",
                    name: "第二门诊部"
                }, {
                    value: "3",
                    name: "第三门诊部"
                }, {
                    value: "4",
                    name: "第四门诊部(非医保单位)"
                }, {
                    value: "5",
                    name: "第五门诊部(非医保单位)"
                }, {
                    value: "7",
                    name: "天竺门诊部(非医保单位)"
                }]),
                f = e.ref(0),
                v = "魏公村总院区",
                h = e.ref([]),
                m = e.ref(!1),
                p = "",
                y = "";
             function x() {
                u.value = !1
            }
             function z() {
                u.value = !1, "yygh" == s.value ? n.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + y + "&area=" + v) : n.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + y + "&area=" + v)
            }
             function j() {
                n.util.navigateTo("/intelligent/syhy/index?popupModel=" + s.value)
            }
             function _(e) {
                h.value = [], m.value = !1, f.value = e.value, v = e.name,
                    function(e) {
                        var t = {
                            areaCode: e,
                            withRemain: "1"
                        };
                        "dtgh" == s.value ? a.getTodayDeptList(t).then((function(e) {
                            if (console.log("getTodayDeptList", e), 0 == e.status) {
                                var t = e.data.lists;
                                0 != t.length ? (t.sort((function(e, t) {
                                    return t.remainNum - e.remainNum
                                })), h.value = t, m.value = !0) : h.value = []
                            } else n.util._showModal({
                                content: e.message || "查询失败"
                            })
                        })).catch((function(e) {
                            console.log(e), n.util._showModal({
                                content: e.message || JSON.stringify(e) || "查询失败，请稍候重试"
                            })
                        })) : a.getYyDeptList(t).then((function(e) {
                            if (console.log("getYyDeptList", e), 0 == e.status) {
                                var t = e.data.lists;
                                0 != t.length ? (t.sort((function(e, t) {
                                    return t.remainNum - e.remainNum
                                })), h.value = t, m.value = !0) : h.value = []
                            } else n.util._showModal({
                                content: e.message || "查询失败"
                            })
                        })).catch((function(e) {
                            console.log(e), n.util._showModal({
                                content: e.message || JSON.stringify(e) || "查询失败，请稍候重试"
                            })
                        }))
                    }(e.value)
            }
             function M() {
                "dtgh" != s.value && "yygh" != s.value ? "hygs" != s.value ? e.index.showToast({
                    title: "暂未开通！",
                    icon: "none"
                }) : n.util.navigateTo("/intelligent/hygs/gsSearch/index?myToday=" + p) : n.util.navigateTo("/intelligent/yqSearch/index?popupModel=".concat(s.value))
            }
            e.onLoad((function(t) {
                console.log(t), s.value = t.popupModel, p = t.myToday, e.index.showLoading({
                    title: "加载中..."
                }), e.index.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        console.log("位置", t), d = t.latitude, r = t.longitude, l.value.forEach((function(e, t) {
                            var a, n, i, u, o, l, s, g, c;
                            e.distance = (a = d, n = r, i = e.latitude, u = e.longitude, s = (o = a * Math.PI / 180) - (l = i * Math.PI / 180), g = n * Math.PI / 180 - u * Math.PI / 180, c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(o) * Math.cos(l) * Math.pow(Math.sin(g / 2), 2))), c *= 6378.137, c = (c = Math.round(1e4 * c) / 1e4).toFixed(2))
                        })), console.log("items", l.value), e.index.hideLoading()
                    },
                    fail: function(t) {
                        console.log("位置err", t), e.index.hideLoading()
                    }
                })
            }));
            var T = n.util._throttle((function(t) {
                var a = t.name;
                if (v = a, y = t.value, "yygh" == s.value) 6 == y ? n.util.showModal({
                    confirmText: "已知晓",
                    content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n国合门诊部（2层）为普通正畸和普通儿科门诊，价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
                    success: function(e) {
                        e.cancel || n.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + y + "&area=" + a + "&distance=" + t.distance)
                    }
                }) : 7 == y ? (u.value = !0, o.value = "<p class='tzwxts'>天竺门诊部尚未开通医保，均需自费，暂不提供住院和验血服务；</p><p class='tzwxts'>普通门诊费用标准：与总院费用标准一致，预约咨询电话:010-81418000；</p> <p style='color:red' class='tzwxts'>特需医疗费用标准：较普通门诊有不同比例增加，预约咨询电话:010-81418088。</p>") : n.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + y + "&area=" + a + "&distance=" + t.distance);
                else if ("dtgh" == s.value) 6 == y ? n.util.showModal({
                    confirmText: "已知晓",
                    content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n国合门诊部（2层）为普通正畸和普通儿科门诊，价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
                    success: function(e) {
                        e.cancel || n.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + y + "&area=" + a + "&distance=" + t.distance)
                    }
                }) : 7 == y ? (u.value = !0, o.value = "<p class='tzwxts'>天竺门诊部尚未开通医保，均需自费，暂不提供住院和验血服务；</p><p class='tzwxts'>普通门诊费用标准：与总院费用标准一致，预约咨询电话:010-81418000；</p> <p style='color:red' class='tzwxts'>特需医疗费用标准：较普通门诊有不同比例增加，预约咨询电话:010-81418088。</p>") : n.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + y + "&area=" + a + "&distance=" + t.distance);
                else if ("hygs" == s.value) e.index.navigateTo({
                    url: "/intelligent/hygs/xzks/index?areaCode=" + y + "&myToday=" + p
                });
                else if ("tzgs" == s.value) e.index.navigateTo({
                    url: "/intelligent/hygs/index/index?areaCode=" + +y + "&popupModel=tzgs"
                });
                else if ("ksjs" == s.value) e.index.navigateTo({
                    url: "/intelligent/hospital/ksjs/index?areaCode=" + y
                });
                else if ("zjjs" == s.value) e.index.navigateTo({
                    url: "/intelligent/hospital/ksjs/index?areaCode=" + y + "&isDoctor=1"
                });
                else if ("yyjj" == s.value) e.index.navigateTo({
                    url: "/intelligent/hospital/yyjj/index?areaCode=" + y
                });
                else if ("lydh" == s.value) {
                    if (0 == y) var i = "北京大学口腔医院",
                        l = "北京市海淀区中关村南大街22号",
                        r = 39.95227,
                        d = 116.32524,
                        g = 16;
                    else 1 == y ? (i = "北京大学口腔医院（西什库门诊部）", l = "北京市西城区西黄城根北街10号", r = 39.924101, d = 116.378039, g = 16) : 2 == y ? (i = "北京大学口腔医院第二门诊部", l = " 北京市朝阳区安立路66号安立写字楼C座5楼", r = 40.00346, d = 116.4083, g = 16) : 3 == y ? (i = "北京大学口腔医院第三门诊部", l = "北京市海淀区花园东路10号高德大厦A座2层203室", r = 39.98277, d = 116.37011, g = 16) : 4 == y ? (i = "北京大学口腔医院第四门诊部", l = "北京市朝阳区东四环中路41号嘉泰国际大厦A座1楼", r = 39.91692, d = 116.48834, g = 16) : 5 == y ? (i = "北京大学口腔医院第五门诊部", l = "北京市朝阳区朝阳门外大街吉庆里14号佳汇国际中心A座305室", r = 39.92742, d = 116.44106) : 6 == y ? (i = "北京大学口腔医院国合门诊部", l = "北京市海淀区中关村南大街18号北京国际大厦B座1-5楼", r = 39.953164, d = 116.324532) : 7 == y ? (i = "北京大学口腔医院天竺门诊部", l = "北京市顺义区金航西路4号院绿地自由港B座一层", r = 40.114408, d = 116.580015) : 99 == y ? (i = "北京大学口腔医院第一门诊部C楼", l = "北京市西城区西黄城根北街10号", r = 39.923957, d = 116.378626) : "9" == y && (i = "朝阳门诊部(第九门诊部)", l = "北京市朝阳区朝阳门外大街吉祥里115号一层", r = 39.926799, d = 116.43787);
                    n.util.openLocation({
                        name: i,
                        address: l,
                        latitude: r,
                        longitude: d,
                        scale: g
                    })
                }
            }), 1e3);
            return function(a, i) {
                return e.e({
                    a: "tzgs" != e.unref(s) && "ksjs" != e.unref(s) && "zjjs" != e.unref(s)
                }, "tzgs" != e.unref(s) && "ksjs" != e.unref(s) && "zjjs" != e.unref(s) ? e.e({
                    b: t._imports_1$5,
                    c: e.o(M),
                    d: "yygh" == e.unref(s) || "dtgh" == e.unref(s)
                }, "yygh" == e.unref(s) || "dtgh" == e.unref(s) ? {
                    e: e.o(j)
                } : {}) : {}, {
                    f: "yygh" == e.unref(s) || "dtgh" == e.unref(s)
                }, ("yygh" == e.unref(s) || e.unref(s), {}), {
                    g: "1" == e.unref(g)
                }, "1" == e.unref(g) ? e.e({
                    h: e.f(e.unref(l), (function(a, n, i) {
                        return e.e({
                            a: "tzgs" != e.unref(s) || 0 == n
                        }, "tzgs" != e.unref(s) || 0 == n ? e.e({
                            b: a.img,
                            c: e.t(a.name),
                            d: a.distance
                        }, a.distance ? {
                            e: t._imports_1$6,
                            f: e.t(a.distance)
                        } : {}, {
                            g: e.t(a.address),
                            h: e.o((function(t) {
                                return e.unref(T)(a)
                            }), n)
                        }) : {}, {
                            i: n
                        })
                    })),
                    i: "yyjj" == e.unref(s)
                }, "yyjj" == e.unref(s) ? e.e({
                    j: t._imports_0$8
                }, {}, {
                    m: e.o((function(t) {
                        return e.unref(T)({
                            value: "三亚"
                        })
                    }))
                }) : {}, {
                    n: e.n("tzgs" != e.unref(s) && "ksjs" != e.unref(s) && "zjjs" != e.unref(s) ? "list" : "list list1")
                }) : e.e({
                    o: e.f(e.unref(c), (function(t, a, n) {
                        return {
                            a: e.t(t.name),
                            b: e.n(e.unref(f) == t.value ? "selected hd_item" : "hd_item"),
                            c: e.o((function(e) {
                                return _(t)
                            }), a),
                            d: a
                        }
                    })),
                    p: e.unref(m)
                }, e.unref(m) ? e.e({
                    q: 0 == e.unref(h).length
                }, 0 == e.unref(h).length ? {
                    r: e.p({
                        content: "未放号",
                        top: "40"
                    })
                } : {
                    s: e.f(e.unref(h), (function(t, a, i) {
                        return e.e({
                            a: e.t(t.deptName),
                            b: 0 == t.remainNum
                        }, 0 == t.remainNum ? {} : {
                            c: e.t(t.remainNum)
                        }, {
                            d: e.o((function(e) {
                                return function(e) {
                                    e.remainNum <= 0 || ("yygh" == s.value ? n.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + e.areaCode + "&area=" + v + "&deptCode=" + e.majorDetailId + "&deptName=" + e.deptName + "&showJzxz=true") : "dtgh" == s.value && n.util.navigateTo("/intelligent/dtgh/xzjzr/index?areaCode=" + e.areaCode + "&area=" + v + "&deptCode=" + e.majorDetailId + "&deptName=" + e.deptName + "&showJzxz=true"))
                                }(t)
                            }), a),
                            e: a
                        })
                    }))
                }) : {}), {
                    t: e.unref(u)
                }, e.unref(u) ? {
                    v: t._imports_1$2,
                    w: t._imports_1$2,
                    x: t._imports_2$2,
                    y: e.unref(o),
                    z: e.o(x),
                    A: e.o(z)
                } : {})
            }
        }
    },
    o = e._export_sfc(u, [
        ["__scopeId", "data-v-90fa8ae3"]
    ]);
wx.createPage(o);