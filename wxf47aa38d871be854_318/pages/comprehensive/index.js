
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    n = require("../../@babel/runtime/helpers/asyncToGenerator"),
    a = require("../../common/vendor.js"),
    t = require("../../common/assets.js");
require("../../request/request.js");
var i = require("../../utils/util.js"),
    r = {
        __name: "index",
        setup: function(r) {
            getApp();
            var c = a.ref(!0),
                o = a.ref(300),
                g = a.ref(500),
                l = 0,
                u = 0,
                s = a.ref(!1),
                m = a.ref([{
                    name: "门诊缴费",
                    image: "/static/mzjf.png"
                }, {
                    name: "报告查询",
                    image: "/static/bgcx.png"
                }, {
                    name: "下载处方",
                    image: "/static/hztx.png"
                }, {
                    name: "电子发票",
                    image: "/static/mzfy.png"
                }, {
                    name: "门诊费用",
                    image: "/static/mzfy.png"
                }, {
                    name: "就诊记录",
                    image: "/static/jzjl.png"
                }, {
                    name: "药品说明书",
                    image: "/static/yhcx.png"
                }, {
                    name: "复诊预约查询",
                    image: "/static/hygs.png"
                }]),
                d = a.ref([{
                    name: "住院登记",
                    image: "/static/mzfy.png"
                }, {
                    name: "住院预交",
                    image: "/static/zyyj.png"
                }, {
                    name: "出院结算",
                    image: "/static/cyjs.png"
                }, {
                    name: "出院小结",
                    image: "/static/cyxj.png"
                }, {
                    name: "出院带药",
                    image: "/static/cydy.png"
                }, {
                    name: "病案复印",
                    image: "/static/bafy.png"
                }, {
                    name: "营养点餐",
                    image: "/static/yydc.png"
                }, {
                    name: "",
                    image: ""
                }]),
                p = a.ref([{
                    name: "院内便民",
                    image: "/static/hygs.png"
                }, {
                    name: "余号查询",
                    image: "/static/yhcx.png"
                }, {
                    name: "号源公示",
                    image: "/static/hygs.png"
                }, {
                    name: "停诊公示",
                    image: "/static/tzgs.png"
                }, {
                    name: "科普宣教",
                    image: "/static/kpxj.png"
                }, {
                    name: "护理门诊",
                    image: "/static/hlyy.png"
                }, {
                    name: "",
                    image: ""
                }, {
                    name: "",
                    image: ""
                }]),
                x = a.ref([{
                    name: "就医指南",
                    image: "/static/bgcx.png"
                }, {
                    name: "使用指南",
                    image: "/static/jzjl.png"
                }, {
                    name: "投诉专栏",
                    image: "/static/cyxj.png"
                }, {
                    name: "",
                    image: ""
                }]);
             function f() {
                s.value = !1
            }
             function v(e) {
                a.index.navigateTo({
                    url: "/pages/select/index?popupModel=hygs&myToday=" + e
                }), f()
            }
            a.ref([{
                name: "测试挂号",
                image: "/static/bgcx.png"
            }, {
                name: "测试缴费",
                image: "/static/jzjl.png"
            }, {
                name: "测试报告",
                image: "/static/jzjl.png"
            }, {
                name: "测试个人中心",
                image: "/static/jzjl.png"
            }]), a.onReady((function() {}));
            var b = i.util._throttle((function(e) {
                    switch (e) {
                        case "复诊预约查询":
                            i.util._navigateTo("/intelligent/fzyyRecord/index");
                            break;
                        case "报告查询":
                            i.util._navigateTo("/intelligent/report/index");
                            break;
                        case "就诊记录":
                            i.util._navigateTo("/intelligent/jzRecord/index");
                            break;
                        case "门诊缴费":
                            i.util._navigateTo("/intelligent/mzjf/waitToPay/index");
                            break;
                        case "候诊提醒":
                            i.util._navigateTo("/intelligent/hztxRecord/index");
                        case "门诊费用":
                            i.util._navigateTo("/intelligent/mzjf/mzfyRecord/index");
                            break;
                        case "余号查询":
                            a.index.navigateTo({
                                url: "/intelligent/yhcxRecord/index"
                            });
                            break;
                        case "号源公示":
                            s.value = !0;
                            break;
                        case "停诊公示":
                            a.index.navigateTo({
                                url: "/pages/select/index?popupModel=tzgs"
                            });
                            break;
                        case "住院登记":
                            i.util._navigateTo("/intelligent/inHospital/zydj/index");
                            break;
                        case "住院预交":
                            i.util._navigateTo("/intelligent/inHospital/paying/index");
                            break;
                        case "住院预交1":
                            i.util._navigateTo("/intelligent/inHospital/beforeInHosPaying/index");
                            break;
                        case "出院结算":
                            i.util._navigateTo("/intelligent/cyjsRecord/index");
                            break;
                        case "出院小结":
                            i.util._navigateTo("/intelligent/cyxjRecord/index");
                            break;
                        case "病案复印":
                            a.index.navigateToMiniProgram({
                                appId: "wxff4273542debbc64",
                                path: "pages/index/index?hosId=1031"
                            });
                            break;
                        case "出院带药":
                            i.util._navigateTo("/intelligent/cydyRecord/index");
                            break;
                        case "营养点餐":
                            a.index.navigateTo({
                                url: "/intelligent/xzjzr/index"
                            });
                            break;
                        case "就医指南":
                            a.index.navigateTo({
                                url: "/intelligent/hospital/jyzn/index"
                            });
                            break;
                        case "使用指南":
                            a.index.navigateTo({
                                url: "/intelligent/hospital/syzn/index"
                            });
                            break;
                        case "投诉专栏":
                            y();
                            break;
                        case "随访填写":
                            i.util.showToast({
                                title: "功能暂未开放"
                            });
                            break;
                        case "下载处方":
                            i.util._navigateTo("/intelligent/downloadCf/index");
                            break;
                        case "电子发票":
                            a.index.navigateToMiniProgram({
                                appId: "wx8e0b79a7f627ca18",
                                path: "pages/index/index?agencyCode=64e55178027c48708c876725a9160fd1"
                            });
                            break;
                        case "药品说明书":
                            a.index.navigateTo({
                                url: "/intelligent/hospital/drugList/index"
                            });
                            break;
                        case "院内便民":
                            a.index.navigateTo({
                                url: "/intelligent/hospital/ynbm/index"
                            });
                            break;
                        case "护理咨询":
                            a.index.navigateTo({
                                url: "/intelligent/chatbot/index?type=1"
                            });
                            break;
                        case "科普宣教":
                            a.index.navigateTo({
                                url: "/pages/kpxj/index"
                            });
                            break;
                        case "护理门诊":
                            a.index.navigateTo({
                                url: "/internet/onlineConsultation/selectDoctor?type=2"
                            });
                            break;
                        case "测试挂号":
                            a.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=门诊挂号"
                            });
                            break;
                        case "测试缴费":
                            a.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=门诊缴费"
                            });
                            break;
                        case "测试报告":
                            a.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=报告查询"
                            });
                            break;
                        case "测试个人中心":
                            a.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=个人中心"
                            })
                    }
                }), 800),
                y = i.util._throttle(n(e().mark((function n() {
                    var t;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.util.getPubList("complaint_notice");
                            case 2:
                                t = e.sent, i.util._isNotEmpty(t) && a.index.navigateTo({
                                    url: "/intelligent/ggxq/index?content=" + encodeURIComponent(JSON.stringify(t[0]))
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), n)
                })))),
                T = i.util._throttle((function() {
                    a.index.navigateTo({
                        url: "/intelligent/chatbot/index?type=2"
                    })
                }));
            return i.util._throttle((function(e) {
                    console.log("doTouchStart:", e);
                    var n = e.currentTarget || {},
                        a = e.touches[0] || {};
                    l = a.clientX - n.offsetLeft, u = a.clientY - n.offsetTop
                })), i.util._throttle((function(e) {
                    console.log("doTouchMove:", e);
                    var n = e.touches[0] || {};
                    o.value = n.clientX - l, o.value < 0 && (o.value = 0), o.value + 0 > 0 && (o.value = 0), g.value = n.clientY - u, g.value < 0 && (g.value = 0), g.value + 0 > 0 && (g.value = 0)
                })),
                function(e, n) {
                    return a.e({
                        a: a.f(a.unref(m), (function(e, n, t) {
                            return {
                                a: e.image,
                                b: a.t(e.name),
                                c: n,
                                d: a.o((function(n) {
                                    return a.unref(b)(e.name)
                                }), n)
                            }
                        })),
                        b: a.f(a.unref(d), (function(e, n, t) {
                            return {
                                a: e.image,
                                b: a.t(e.name),
                                c: n,
                                d: a.o((function(n) {
                                    return a.unref(b)(e.name)
                                }), n)
                            }
                        })),
                        c: a.f(a.unref(p), (function(e, n, t) {
                            return {
                                a: e.image,
                                b: a.t(e.name),
                                c: n,
                                d: a.o((function(n) {
                                    return a.unref(b)(e.name)
                                }), n)
                            }
                        })),
                        d: a.f(a.unref(x), (function(e, n, t) {
                            return {
                                a: e.image,
                                b: a.t(e.name),
                                c: n,
                                d: a.o((function(n) {
                                    return a.unref(b)(e.name)
                                }), n)
                            }
                        })),
                        e: a.unref(s)
                    }, a.unref(s) ? {
                        f: t._imports_0$6,
                        g: a.o((function(e) {
                            return v(0)
                        }), "cd"),
                        h: t._imports_1$3,
                        i: a.o((function(e) {
                            return v(1)
                        }), "66"),
                        j: a.o(f, "76"),
                        k: a.o(f, "9e")
                    } : {}, {
                        l: a.unref(c)
                    }, a.unref(c) ? {
                        m: t._imports_2$3,
                        n: a.o((function() {
                            return a.unref(T) && a.unref(T).apply(void 0, arguments)
                        }), "3a"),
                        o: a.unref(o),
                        p: a.unref(g)
                    } : {})
                }
        }
    },
    c = a._export_sfc(r, [
        ["__scopeId", "data-v-1c84590e"]
    ]);
wx.createPage(c);