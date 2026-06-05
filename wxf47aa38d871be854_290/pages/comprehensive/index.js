
var e = require("../../common/vendor.js"),
    a = require("../../common/assets.js");
require("../../request/request.js");
var n = require("../../utils/util.js"),
    i = {
        __name: "index",
        setup: function(i) {
            getApp();
            var t = e.ref(!0),
                r = e.ref(300),
                c = e.ref(500),
                g = 0,
                o = 0,
                l = e.ref(!1),
                u = e.ref([{
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
                s = e.ref([{
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
                d = e.ref([{
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
                m = e.ref([{
                    name: "就医指南",
                    image: "/static/bgcx.png"
                }, {
                    name: "使用指南",
                    image: "/static/jzjl.png"
                }, {
                    name: "",
                    image: ""
                }, {
                    name: "",
                    image: ""
                }]);
             function f() {
                l.value = !1
            }
             function x(a) {
                e.index.navigateTo({
                    url: "/pages/select/index?popupModel=hygs&myToday=" + a
                }), f()
            }
            e.ref([{
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
            }]), e.onReady((function() {}));
            var p = n.util._throttle((function(a) {
                    switch (a) {
                        case "复诊预约查询":
                            n.util._navigateTo("/intelligent/fzyyRecord/index");
                            break;
                        case "报告查询":
                            n.util._navigateTo("/intelligent/report/index");
                            break;
                        case "就诊记录":
                            n.util._navigateTo("/intelligent/jzRecord/index");
                            break;
                        case "门诊缴费":
                            n.util._navigateTo("/intelligent/mzjf/waitToPay/index");
                            break;
                        case "候诊提醒":
                            n.util._navigateTo("/intelligent/hztxRecord/index");
                        case "门诊费用":
                            n.util._navigateTo("/intelligent/mzjf/mzfyRecord/index");
                            break;
                        case "余号查询":
                            e.index.navigateTo({
                                url: "/intelligent/yhcxRecord/index"
                            });
                            break;
                        case "号源公示":
                            l.value = !0;
                            break;
                        case "停诊公示":
                            e.index.navigateTo({
                                url: "/pages/select/index?popupModel=tzgs"
                            });
                            break;
                        case "住院登记":
                            n.util._navigateTo("/intelligent/inHospital/zydj/index");
                            break;
                        case "住院预交":
                            n.util._navigateTo("/intelligent/inHospital/paying/index");
                            break;
                        case "住院预交1":
                            n.util._navigateTo("/intelligent/inHospital/beforeInHosPaying/index");
                            break;
                        case "出院结算":
                            n.util._navigateTo("/intelligent/cyjsRecord/index");
                            break;
                        case "出院小结":
                            n.util._navigateTo("/intelligent/cyxjRecord/index");
                            break;
                        case "病案复印":
                            e.index.navigateToMiniProgram({
                                appId: "wxff4273542debbc64",
                                path: "pages/index/index?hosId=1031"
                            });
                            break;
                        case "出院带药":
                            n.util._navigateTo("/intelligent/cydyRecord/index");
                            break;
                        case "营养点餐":
                            e.index.navigateTo({
                                url: "/intelligent/xzjzr/index"
                            });
                            break;
                        case "就医指南":
                            e.index.navigateTo({
                                url: "/intelligent/hospital/jyzn/index"
                            });
                            break;
                        case "使用指南":
                            e.index.navigateTo({
                                url: "/intelligent/hospital/syzn/index"
                            });
                            break;
                        case "随访填写":
                            n.util.showToast({
                                title: "功能暂未开放"
                            });
                            break;
                        case "下载处方":
                            n.util._navigateTo("/intelligent/downloadCf/index");
                            break;
                        case "电子发票":
                            e.index.navigateToMiniProgram({
                                appId: "wx8e0b79a7f627ca18",
                                path: "pages/index/index?agencyCode=64e55178027c48708c876725a9160fd1"
                            });
                            break;
                        case "药品说明书":
                            e.index.navigateTo({
                                url: "/intelligent/hospital/drugList/index"
                            });
                            break;
                        case "院内便民":
                            e.index.navigateTo({
                                url: "/intelligent/hospital/ynbm/index"
                            });
                            break;
                        case "护理咨询":
                            e.index.navigateTo({
                                url: "/intelligent/chatbot/index?type=1"
                            });
                            break;
                        case "科普宣教":
                            e.index.navigateTo({
                                url: "/pages/kpxj/index"
                            });
                            break;
                        case "护理门诊":
                            e.index.navigateTo({
                                url: "/internet/onlineConsultation/selectDoctor?type=2"
                            });
                            break;
                        case "测试挂号":
                            e.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=门诊挂号"
                            });
                            break;
                        case "测试缴费":
                            e.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=门诊缴费"
                            });
                            break;
                        case "测试报告":
                            e.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=报告查询"
                            });
                            break;
                        case "测试个人中心":
                            e.index.navigateTo({
                                url: "/careModel/xzjzr/index?wxmed_authcode=123&funType=个人中心"
                            })
                    }
                }), 800),
                v = n.util._throttle((function() {
                    e.index.navigateTo({
                        url: "/intelligent/chatbot/index?type=2"
                    })
                }));
            return n.util._throttle((function(e) {
                    console.log("doTouchStart:", e);
                    var a = e.currentTarget || {},
                        n = e.touches[0] || {};
                    g = n.clientX - a.offsetLeft, o = n.clientY - a.offsetTop
                })), n.util._throttle((function(e) {
                    console.log("doTouchMove:", e);
                    var a = e.touches[0] || {};
                    r.value = a.clientX - g, r.value < 0 && (r.value = 0), r.value + 0 > 0 && (r.value = 0), c.value = a.clientY - o, c.value < 0 && (c.value = 0), c.value + 0 > 0 && (c.value = 0)
                })),
                function(n, i) {
                    return e.e({
                        a: e.f(e.unref(u), (function(a, n, i) {
                            return {
                                a: a.image,
                                b: e.t(a.name),
                                c: n,
                                d: e.o((function(n) {
                                    return e.unref(p)(a.name)
                                }), n)
                            }
                        })),
                        b: e.f(e.unref(s), (function(a, n, i) {
                            return {
                                a: a.image,
                                b: e.t(a.name),
                                c: n,
                                d: e.o((function(n) {
                                    return e.unref(p)(a.name)
                                }), n)
                            }
                        })),
                        c: e.f(e.unref(d), (function(a, n, i) {
                            return {
                                a: a.image,
                                b: e.t(a.name),
                                c: n,
                                d: e.o((function(n) {
                                    return e.unref(p)(a.name)
                                }), n)
                            }
                        })),
                        d: e.f(e.unref(m), (function(a, n, i) {
                            return {
                                a: a.image,
                                b: e.t(a.name),
                                c: n,
                                d: e.o((function(n) {
                                    return e.unref(p)(a.name)
                                }), n)
                            }
                        })),
                        e: e.unref(l)
                    }, e.unref(l) ? {
                        f: a._imports_0$6,
                        g: e.o((function(e) {
                            return x(1)
                        })),
                        h: a._imports_1$3,
                        i: e.o((function(e) {
                            return x(0)
                        })),
                        j: e.o(f),
                        k: e.o(f)
                    } : {}, {
                        l: e.unref(t)
                    }, e.unref(t) ? {
                        m: a._imports_2$3,
                        n: e.o((function() {
                            return e.unref(v) && e.unref(v).apply(void 0, arguments)
                        })),
                        o: e.unref(r),
                        p: e.unref(c)
                    } : {})
                }
        }
    },
    t = e._export_sfc(i, [
        ["__scopeId", "data-v-d30dbf1b"]
    ]);
wx.createPage(t);