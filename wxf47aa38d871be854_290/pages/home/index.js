
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    t = require("../../@babel/runtime/helpers/asyncToGenerator"),
    n = require("../../common/vendor.js"),
    i = require("../../common/assets.js"),
    a = require("../../request/request.js"),
    o = require("../../utils/util.js"),
    r = {
        __name: "index",
        setup: function(r) {
            var l = getApp(),
                u = n.ref(!1),
                s = n.ref(!1);
            n.ref(300), n.ref(500);
            var c = n.ref(!1),
                f = n.ref({}),
                p = n.ref(!1),
                g = n.ref(""),
                d = n.ref([]);
            n.ref(1), n.ref([{
                name: "报告查询",
                image: "/static/bgcx.png"
            }, {
                name: "就诊记录",
                image: "/static/jzjl.png"
            }, {
                name: "门诊缴费",
                image: "/static/mzjf.png"
            }, {
                name: "候诊提醒",
                image: "/static/hztx.png"
            }, {
                name: "门诊费用",
                image: "/static/mzfy.png"
            }, {
                name: "余号查询",
                image: "/static/yhcx.png"
            }, {
                name: "号源公示",
                image: "/static/hygs.png"
            }, {
                name: "停诊公示",
                image: "/static/tzgs.png"
            }]), n.ref([{
                title: "莫把病原体口口相传给宝宝",
                content: "唾液是病原体传播的载体，现在有很多研究表明，龋病是可以在母婴间“传播”的，这个所谓的“传播”并不是“遗传”或“传染”，如果妈妈口腔内有多颗未经治疗的龋齿，就算还没有引起什么不适的症状，这些龋齿也都是孕育致龋菌的温床，这些特殊的病菌在日常生活接触中难免就会“传播”到宝宝的口内，那宝宝可就真的是输在起跑线上了。"
            }, {
                title: "选择适合自己的牙刷",
                content: "牙刷，是保持口腔清洁的重要工具，包括手动牙刷和电动牙刷。根据刷头形状和刷毛排列的不同，牙刷又分为通用型和特异型两大类。通用型牙刷以直柄为宜，刷毛软硬适度，排列平齐，毛束排列一般为10～12束长、3～4束宽，各束之间有一定间距（图1-14-1 通用型牙刷）。"
            }, {
                title: "食物嵌塞及牙缝清洁",
                content: "日常生活中，有些人饭后会有食物塞在牙缝之间，必须剔出来才感觉舒服，年龄大的人这种情况更常见。为什么随着年龄增长，会更容易塞牙？除了用牙签剔牙外，还有哪些方法可以清理牙齿间隙呢？"
            }]);
            var v = n.ref(!1),
                _ = "",
                x = n.ref(!1),
                m = n.ref({}),
                y = "";
            n.ref(!0);
            var T = n.ref("明日挂号"),
                h = n.ref({}),
                b = "",
                z = "",
                k = n.ref(!1),
                w = n.ref(!1),
                j = n.ref(!1),
                M = n.ref(!1),
                $ = n.ref({
                    infoDetail: ""
                });
             function P() {
                M.value = !1
            }
             function C() {
                M.value = !1, o.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + b + "&showPopup=false&area=魏公村总院区&deptName=" + z)
            }
             function S() {
                u.value = !1
            }
             function I() {
                o.util.goCareModelMini(), u.value = !1
            }
             function D() {
                k.value = !1
            }
             function R() {
                c.value = !1
            }
             function N() {
                c.value = !1, n.index.navigateTo({
                    url: "/intelligent/ggList/index"
                })
            }
             function q() {
                p.value = !1
            }
             function E() {
                p.value = !1, o.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + b + "&showPopup=false&area=" + z)
            }
             function B(e) {
                o.util.navigateTo("/pages/select/index?popupModel=hygs&myToday=".concat(e)), D()
            }
             function H() {
                n.index.navigateTo({
                    url: "/intelligent/ggList/index"
                })
            }
             function F() {
                y = "dtgh", v.value ? o.util.navigateTo("/pages/select/index?popupModel=".concat(y)) : o.util.navigateTo("/intelligent/jzr/jzrrz/index")
            }
             function L() {
                y = "yygh", v.value ? o.util.navigateTo("/pages/select/index?popupModel=".concat(y)) : o.util.navigateTo("/intelligent/jzr/jzrrz/index")
            }
             function G() {
                n.index.navigateTo({
                    url: "/pages/select/index?popupModel=yyjj"
                })
            }
             function A() {
                n.index.navigateTo({
                    url: "/intelligent/hospital/lcfb/index"
                })
            }
             function O() {
                y = "lydh", n.index.navigateTo({
                    url: "/pages/select/index?popupModel=" + y
                })
            }
             function U() {
                o.util.navigateToMiniProgram("wx8735a8a39cf58b5e", "pages/index?id=Dx4EVOZfd4,QkNOhuFUkR")
            }
             function Q() {
                y = "ksjs", n.index.navigateTo({
                    url: "/pages/select/index?popupModel=" + y
                })
            }
             function V() {
                y = "zjjs", n.index.navigateTo({
                    url: "/pages/select/index?popupModel=" + y
                })
            }
             function Y(e, t) {
                return Z.apply(this, arguments)
            }
             function Z() {
                return (Z = t(e().mark((function t(n, i) {
                    var a;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (z = i, b = n, "6" != n) {
                                    e.next = 4;
                                    break
                                }
                                o.util.showModal({
                                    confirmText: "已知晓",
                                    content: "国际门诊（3-5层）价格高于北京市统一标准，均为自费；暂不提供住院服务；国际门诊预约电话：010-83013555\n国合门诊部（2层）为普通正畸和普通儿科门诊，价格执行北京市统一标准，均为自费；咨询电话：010-83013610",
                                    success: function(e) {
                                        e.cancel || o.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + n + "&showPopup=false&area=" + i)
                                    }
                                }), e.next = 20;
                                break;
                            case 4:
                                if ("7" != n) {
                                    e.next = 8;
                                    break
                                }
                                p.value = !0, g.value = "<p class='tzwxts'>天竺门诊部尚未开通医保，均需自费，暂不提供住院和验血服务；</p><p class='tzwxts'>普通门诊费用标准：与总院费用标准一致，预约咨询电话:010-81418000；</p> <p style='color:red' class='tzwxts'>特需医疗费用标准：较普通门诊有不同比例增加，预约咨询电话:010-81418088。</p>", e.next = 20;
                                break;
                            case 8:
                                if ("100" != n) {
                                    e.next = 12;
                                    break
                                }
                                o.util.navigateToMiniProgram("wxdaca93aa687cc531", "/pages/welcome/index"), e.next = 20;
                                break;
                            case 12:
                                if ("0" != n || "特需医疗部" != i) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 15, o.util.getPubList();
                            case 15:
                                a = e.sent.filter((function(e) {
                                    return "tx_notice" == e.classCode
                                })), $.value = a[0] || {
                                    infoTopic: "特需医疗部温馨提示",
                                    infoDetail: "<p style='color:red' class='tzwxts'>患者您好！</p><p style='color:red' class='tzwxts'>特需医疗部专家均为副主任医师及以上级别医生接诊，挂号费、检查费及诊疗费均为自费，且费用较普通门诊有不同比例增加。</p> <p style='color:red' class='tzwxts'>特需医疗部预约电话：010-82195901/82195971  欢迎致电！</p>"
                                }, M.value = !0, e.next = 20;
                                break;
                            case 19:
                                o.util.navigateTo("/intelligent/yygh/xzjzr/index?areaCode=" + n + "&showPopup=false&area=魏公村总院区&deptName=" + i);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
             function J() {
                o.util.navigateToMiniProgram("wx7ec43a6a6c80544d")
            }
            n.onLoad((function(i) {
                console.log("home onload:", i);
                var r = i.page;
                o.util._isNotEmpty(r) && (_ = decodeURIComponent(r)), o.util._isNotEmpty(n.index.getStorageSync("redirectPath")) && (_ = n.index.getStorageSync("redirectPath"));
                var l = function(e, t) {
                    var n, i = new Date,
                        a = "".concat(i.getFullYear(), "/").concat(i.getMonth() + 1, "/").concat(i.getDate(), " "),
                        o = new Date(a + "00:00").getTime(),
                        r = new Date(a + "05:00").getTime(),
                        l = i.getTime(),
                        u = o > r;
                    return u && (o = (n = [r, o])[0], r = n[1]), l > o && l < r ? !u : !!u
                }();
                if (T.value = l ? "当日挂号" : "明日挂号", t(e().mark((function t() {
                        var n;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o.util.getPubList();
                                case 2:
                                    n = e.sent, console.log("信息发布async：", n),
                                        function(e) {
                                            if (o.util._isNotEmpty(e)) {
                                                for (var t = 0; t < e.length; t++) {
                                                    var n = e[t];
                                                    if (n.forceRemind && "通知公告" == n.infoTopic) {
                                                        m = n;
                                                        break
                                                    }
                                                }
                                                o.util._isNotEmpty(m) && (console.log("111", m), "0" == m.infoType ? (c.value = !0, f.value = m) : (console.log("公告类型不是文本类型"), x.value = !0))
                                            }
                                        }(n), d.value = n.filter((function(e) {
                                            return "05" == e.classCode
                                        }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), t)
                    })))(), a.getGlobalRegistered()) {
                    var s = a.getGlobalCardInfo();
                    if (console.log("patients:", s), o.util.isEmpty(h.value))
                        for (var p = 0; p < s.length; p++)
                            if ("1" == s[p].isDefaultFlag) {
                                h.value = s[p];
                                break
                            }
                    o.util.isEmpty(h.value) && (h.value = s[0]);
                    var g = n.index.getAppBaseInfo();
                    console.log("appBaseInfo:", g), (h.value.age > 55 || g.fontSizeSetting >= 22 || g.fontSizeScaleFactor >= 1.4) && (u.value = !0)
                } else {
                    var v = n.index.getAppBaseInfo();
                    console.log("appBaseInfo:", v), (v.fontSizeSetting >= 22 || v.fontSizeScaleFactor >= 1.4) && (u.value = !0)
                }
            })), n.onShow((function() {
                if (console.log(v.value, "是否认证"), v.value = a.getGlobalRegistered(), w.value = l.globalData.careMode, w.value ? (s.value = !1, n.index.hideTabBar()) : (s.value = !0, n.index.showTabBar()), v.value) {
                    var e = a.getGlobalCardInfo();
                    if (console.log("patients:", e), o.util.isEmpty(h.value))
                        for (var t = 0; t < e.length; t++)
                            if ("1" == e[t].isDefaultFlag) {
                                h.value = e[t];
                                break
                            }
                    o.util.isEmpty(h.value) && (h.value = e[0])
                }
            })), n.onShareAppMessage((function() {
                return o.util.getShareMessage()
            })), n.onReady((function() {
                var e = _;
                console.log("home-page:", e), o.util._isNotEmpty(e) && (o.util._navigateTo(e), _ = "")
            })), o.util._throttle((function(e) {
                switch (e) {
                    case "报告查询":
                        o.util._navigateTo("/intelligent/report/index");
                        break;
                    case "就诊记录":
                        o.util._navigateTo("/intelligent/jzRecord/index");
                        break;
                    case "门诊缴费":
                        o.util._navigateTo("/intelligent/mzjf/waitToPay/index");
                        break;
                    case "候诊提醒":
                        o.util._navigateTo("/intelligent/hztxRecord/index");
                    case "门诊费用":
                        o.util._navigateTo("/intelligent/mzjf/mzfyRecord/index");
                        break;
                    case "余号查询":
                        o.util._navigateTo("/intelligent/yhcxRecord/index");
                        break;
                    case "号源公示":
                        k.value = !0;
                        break;
                    case "停诊公示":
                        o.util._navigateTo("/pages/select/index?popupModel=tzgs");
                        break;
                    case "住院登记":
                        o.util._navigateTo("/intelligent/inHospital/zydj/index");
                        break;
                    case "住院预交":
                        o.util._navigateTo("/intelligent/inHospital/paying/index");
                        break;
                    case "住院预交1":
                        o.util._navigateTo("/intelligent/inHospital/beforeInHosPaying/index");
                        break;
                    case "出院结算":
                        o.util._navigateTo("/intelligent/cyjsRecord/index");
                        break;
                    case "出院小结":
                        o.util._navigateTo("/intelligent/cyxjRecord/index");
                        break;
                    case "病案复印":
                        n.index.navigateToMiniProgram({
                            appId: "wxff4273542debbc64",
                            path: "pages/index/index?hosId=1031"
                        });
                        break;
                    case "出院带药":
                        o.util._navigateTo("/intelligent/cydyRecord/index");
                        break;
                    case "营养点餐":
                        n.index.navigateTo({
                            url: "/intelligent/xzjzr/index"
                        });
                        break;
                    case "就医指南":
                        n.index.navigateTo({
                            url: "/intelligent/hospital/jyzn/index"
                        });
                        break;
                    case "使用指南":
                        n.index.navigateTo({
                            url: "/intelligent/hospital/syzn/index"
                        });
                        break;
                    case "随访填写":
                        o.util.showToast({
                            title: "功能暂未开放"
                        });
                        break;
                    case "下载处方":
                        o.util._navigateTo("/intelligent/downloadCf/index");
                        break;
                    case "电子发票":
                        n.index.navigateToMiniProgram({
                            appId: "wx8e0b79a7f627ca18",
                            path: "pages/index/index?agencyCode=64e55178027c48708c876725a9160fd1"
                        });
                        break;
                    case "药品说明书":
                        n.index.navigateTo({
                            url: "/intelligent/hospital/drugList/index"
                        });
                        break;
                    case "院内便民":
                        n.index.navigateTo({
                            url: "/intelligent/hospital/ynbm/index"
                        });
                        break;
                    case "护理咨询":
                        n.index.navigateTo({
                            url: "/intelligent/chatbot/index?type=1"
                        })
                }
            }), 800);
            var K = o.util._throttle((function() {
                    j.value = !0
                })),
                W = o.util._throttle((function() {
                    o.util.navigateTo("/intelligent/inHospital/zydj/index"), j.value = !1
                })),
                X = o.util._throttle((function() {
                    n.index.navigateTo({
                        url: "/intelligent/inHospital/zyzq/index"
                    }), j.value = !1
                }));
             function ee() {
                o.util.navigateTo("/intelligent/jzr/manage/index")
            }
            o.util._throttle((function() {
                n.index.navigateTo({
                    url: "/intelligent/chatbot/index?type=2"
                })
            })), o.util._throttle((function() {
                n.index.navigateTo({
                    url: "/careModel/switchPage/index"
                })
            }));
            var te = o.util._throttle((function() {
                    n.index.navigateTo({
                        url: "/intelligent/hospital/jyzn/index"
                    })
                })),
                ne = o.util._throttle((function() {
                    o.util._navigateTo("/intelligent/report/index")
                })),
                ie = o.util._throttle((function() {
                    o.util._navigateTo("/intelligent/mzjf/waitToPay/index")
                })),
                ae = o.util._throttle((function() {
                    n.index.navigateToMiniProgram({
                        appId: "wx8e0b79a7f627ca18",
                        path: "pages/index/index?agencyCode=64e55178027c48708c876725a9160fd1"
                    })
                })),
                oe = o.util._throttle((function() {
                    n.index.navigateTo({
                        url: "/intelligent/jzr/quickSign/index"
                    })
                }), 1e3),
                re = o.util._throttle((function() {
                    n.index.navigateTo({
                        url: "/careModel/mine/index"
                    })
                }), 2e3),
                le = o.util._throttle((function(e) {
                    o.util.navigateTo("/careModel/dtgh/select/index?funType=门诊挂号&appointmentType=" + e)
                }), 2e3),
                ue = o.util._throttle((function() {
                    o.util.navigateTo("/careModel/xzjzr/index?funType=门诊缴费")
                }), 2e3),
                se = o.util._throttle((function() {
                    o.util.navigateTo("/careModel/xzjzr/index?funType=报告查询")
                }), 2e3),
                ce = o.util._throttle((function() {
                    l.globalData.careMode = !l.globalData.careMode, w.value = l.globalData.careMode, w.value || (o.util.showToast({
                        title: "已关闭关怀模式"
                    }), n.index.showTabBar())
                }), 2e3);
            return function(e, t) {
                return n.e({
                    a: n.unref(w)
                }, n.unref(w) ? n.e({
                    b: n.unref(v)
                }, n.unref(v) ? {
                    c: "女" != n.unref(h).sex ? "/static/sex_man.png" : "/static/sex_woman.png"
                } : {
                    d: i._imports_0$4
                }, {
                    e: n.unref(v)
                }, n.unref(v) ? {
                    f: n.t(n.unref(h).clientName),
                    g: n.t(n.unref(o.util)._hideIdCard(n.unref(h).idCardNo))
                } : {
                    h: i._imports_1$1
                }, {
                    i: i._imports_2$1,
                    j: i._imports_3$1,
                    k: n.o((function(e) {
                        return n.unref(le)(1)
                    })),
                    l: i._imports_4$1,
                    m: i._imports_3$1,
                    n: n.o((function(e) {
                        return n.unref(le)(0)
                    })),
                    o: i._imports_5$1,
                    p: i._imports_3$1,
                    q: n.o((function() {
                        return n.unref(ue) && n.unref(ue).apply(void 0, arguments)
                    })),
                    r: i._imports_6,
                    s: i._imports_3$1,
                    t: n.o((function() {
                        return n.unref(se) && n.unref(se).apply(void 0, arguments)
                    })),
                    v: i._imports_7,
                    w: i._imports_3$1,
                    x: n.o((function() {
                        return n.unref(re) && n.unref(re).apply(void 0, arguments)
                    })),
                    y: n.o((function() {
                        return n.unref(ce) && n.unref(ce).apply(void 0, arguments)
                    }))
                }) : n.e({
                    z: n.unref(v)
                }, n.unref(v) ? {
                    A: i._imports_8
                } : {}, {
                    B: n.unref(v)
                }, n.unref(v) ? {
                    C: i._imports_4$2,
                    D: n.t(n.unref(h).clientName),
                    E: n.t(n.unref(o.util)._hideIdCard(n.unref(h).idCardNo)),
                    F: i._imports_0$5,
                    G: n.o(ee)
                } : {
                    H: i._imports_0$4,
                    I: n.o((function() {
                        return n.unref(oe) && n.unref(oe).apply(void 0, arguments)
                    }))
                }, {
                    J: i._imports_11,
                    K: 0 != n.unref(d).length
                }, 0 != n.unref(d).length ? {
                    L: n.f(n.unref(d), (function(e, t, i) {
                        return {
                            a: n.t(e.infoTopic),
                            b: t
                        }
                    }))
                } : {}, {
                    M: n.o(H),
                    N: i._imports_12,
                    O: n.o(L),
                    P: i._imports_13,
                    Q: n.t(n.unref(T)),
                    R: n.o(F),
                    S: i._imports_0$5,
                    T: n.o((function(e) {
                        return Y(0, "特需医疗部")
                    })),
                    U: i._imports_0$5,
                    V: n.o((function(e) {
                        return Y(6, "国合门诊部(国际门诊)")
                    })),
                    W: i._imports_0$5,
                    X: n.o((function(e) {
                        return Y(7, "天竺门诊部(非医保单位)")
                    })),
                    Y: i._imports_0$5,
                    Z: n.o((function(e) {
                        return Y(100, "北大口腔三亚医院")
                    })),
                    aa: i._imports_14,
                    ab: n.o(Q),
                    ac: i._imports_15,
                    ad: n.o(V),
                    ae: n.o((function() {
                        return n.unref(te) && n.unref(te).apply(void 0, arguments)
                    })),
                    af: n.o((function() {
                        return n.unref(ne) && n.unref(ne).apply(void 0, arguments)
                    })),
                    ag: n.o((function() {
                        return n.unref(ie) && n.unref(ie).apply(void 0, arguments)
                    })),
                    ah: n.o((function() {
                        return n.unref(ae) && n.unref(ae).apply(void 0, arguments)
                    })),
                    ai: n.o(J),
                    aj: n.o((function() {
                        return n.unref(K) && n.unref(K).apply(void 0, arguments)
                    })),
                    ak: i._imports_16,
                    al: i._imports_17,
                    am: n.o(G),
                    an: i._imports_18,
                    ao: n.o(A),
                    ap: i._imports_19,
                    aq: n.o(O),
                    ar: i._imports_20,
                    as: n.o(U),
                    at: n.unref(p)
                }, n.unref(p) ? {
                    av: i._imports_1$2,
                    aw: i._imports_1$2,
                    ax: i._imports_2$2,
                    ay: n.unref(g),
                    az: n.o(q),
                    aA: n.o(E)
                } : {}, {
                    aB: n.unref(c)
                }, n.unref(c) ? {
                    aC: i._imports_1$2,
                    aD: i._imports_1$2,
                    aE: i._imports_2$2,
                    aF: n.unref(f).infoSummary,
                    aG: n.o(R),
                    aH: n.o(N)
                } : {}, {
                    aI: n.unref(j)
                }, n.unref(j) ? {
                    aJ: i._imports_1$2,
                    aK: i._imports_1$2,
                    aL: i._imports_2$2,
                    aM: n.o((function() {
                        return n.unref(X) && n.unref(X).apply(void 0, arguments)
                    })),
                    aN: n.o((function() {
                        return n.unref(W) && n.unref(W).apply(void 0, arguments)
                    }))
                } : {}, {
                    aO: M.value
                }, M.value ? {
                    aP: i._imports_1$2,
                    aQ: i._imports_1$2,
                    aR: i._imports_2$2,
                    aS: $.value.infoDetail,
                    aT: n.o(P),
                    aU: n.o(C)
                } : {}, {
                    aV: n.unref(k)
                }, n.unref(k) ? {
                    aW: i._imports_0$6,
                    aX: n.o((function(e) {
                        return B(1)
                    })),
                    aY: i._imports_1$3,
                    aZ: n.o((function(e) {
                        return B(0)
                    })),
                    ba: n.o(D),
                    bb: n.o(D)
                } : {}, {
                    bc: n.unref(u)
                }, n.unref(u) ? {
                    bd: n.o(S),
                    be: n.o(I)
                } : {}))
            }
        }
    },
    l = n._export_sfc(r, [
        ["__scopeId", "data-v-304a7a86"]
    ]);
r.__runtimeHooks = 2, wx.createPage(l);