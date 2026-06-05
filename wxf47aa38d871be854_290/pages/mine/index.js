
var e = require("../../common/vendor.js"),
    n = require("../../common/assets.js"),
    t = require("../../request/request.js"),
    i = require("../../utils/util.js"),
    a = {
        __name: "index",
        setup: function(a) {
            getApp().globalData.imgUrlApi;
            var o = e.ref(!1),
                r = Array.from({
                    length: 3
                }, (function(e, n) {
                    return n
                })),
                l = e.ref(["仅用于院内就诊", "为家人寻医", "更多便捷服务"]),
                u = e.ref([{
                    name: "挂号记录",
                    image: "/static/mine/dtghjl.png"
                }, {
                    name: "问诊记录",
                    image: "/static/mine/zxwzjl.png"
                }, {
                    name: "爽约记录",
                    image: "/static/mine/yyghjl.png"
                }, {
                    name: "门诊缴费",
                    image: "/static/mine/mzzdjl.png"
                }, {
                    name: "住院预交",
                    image: "/static/mine/zyyjjl.png"
                }, {
                    name: "病案复印",
                    image: "/static/mine/blfyjl.png"
                }, {
                    name: "护理门诊",
                    image: "/static/mine/zxwzjl.png"
                }]),
                s = e.ref([{
                    name: "关怀模式",
                    image: "/static/mine/ghms.png"
                }, {
                    name: "消息设置",
                    image: "/static/mine/xxsz.png"
                }, {
                    name: "关注收藏",
                    image: "/static/mine/wdsc.png"
                }, {
                    name: "意见反馈",
                    image: "/static/mine/yjfk.png"
                }, {
                    name: "协议政策",
                    image: "/static/mine/xyzc.png"
                }, {
                    name: "关于我们",
                    image: "/static/mine/gywm.png"
                }]),
                c = e.ref([]),
                g = e.ref({}),
                f = "";
             function m(e) {
                switch (e.name) {
                    case "挂号记录":
                        i.util.navigateTo("/intelligent/dtgh/ghjl/index");
                        break;
                    case "问诊记录":
                    case "病案复印":
                        console.log(e), d();
                        break;
                    case "爽约记录":
                        i.util.navigateTo("/intelligent/dtgh/syjl/index");
                        break;
                    case "门诊缴费":
                        console.log(e), i.util.navigateTo("/intelligent/mzjf/mzfyRecord/index");
                        break;
                    case "住院预交":
                        i.util.navigateTo("/intelligent/inHospital/paidRecord/index");
                        break;
                    case "护理门诊":
                        console.log(e), i.util.navigateTo("/internet/onlineConsultation/record");
                        break;
                    case "注销账号":
                        console.log(e), t.logoutUserNew().then((function(e) {
                            console.log("退出登录账号:", e)
                        }))
                }
            }
             function d() {
                i.util.showToast({
                    title: "功能暂未开放"
                })
            }
             function p() {
                o ? i.util.showModal({
                    showCancel: !0,
                    content: "注销账户会清除账户下所有就医数据，清除后数据不可恢复，确认要继续吗？",
                    success: function(n) {
                        n.cancel || t.logoutUser().then((function(n) {
                            console.log("注销", n), 0 == n.status ? (i.util._showModal({
                                content: "注销成功！感谢您的使用，如需再次使用请重新实名认证即可"
                            }), e.wx$1.setStorageSync("cacheData.visitors", []), e.wx$1.setStorageSync("isRegistered", !1), t.setGlobalRegistered(!1), e.index.reLaunch({
                                url: "/pages/mine/index"
                            }), t.login()) : i.util._showModal({
                                content: n.message || "注销失败"
                            })
                        })).catch((function(e) {
                            console.log(e), i.util._showModal({
                                content: e.message || JSON.stringify(e) || "查询失败，请稍候重试"
                            })
                        }))
                    }
                }) : i.util.showModal({
                    content: "用户已注销"
                })
            }
             function h() {
                i.util.navigateTo("/intelligent/jzr/manage/index")
            }
             function x() {
                i.util.navigateTo("/intelligent/jzr/addOther/index")
            }
            e.onLoad((function(e) {
                var n = e.page;
                i.util.isNotEmpty(n) && (f = decodeURIComponent(n))
            })), e.onReady((function() {
                var e = f;
                i.util.isNotEmpty(e) && i.util.navigateTo(e)
            })), e.onShow((function() {
                if (o.value = t.getGlobalRegistered(), o.value) {
                    var e = t.getGlobalCardInfo();
                    if (console.log("patients:", e), c.value = e, i.util.isEmpty(g.value))
                        for (var n = 0; n < e.length; n++)
                            if ("1" == e[n].isDefaultFlag) {
                                g.value = e[n];
                                break
                            }
                    i.util.isEmpty(g.value) && (g.value = e[0])
                }
            }));
            var v = i.util._throttle((function() {
                e.index.navigateTo({
                    url: "/intelligent/jzr/quickSign/index"
                })
            }), 1e3);
            return i.util._throttle((function() {
                    i.util.navigateTo("/careModel/xzjzr/index?funType=缴费记录")
                }), 2e3), i.util._throttle((function() {
                    i.util.navigateTo("/careModel/xzjzr/index?funType=挂号记录")
                }), 2e3),
                function(t, a) {
                    return e.e({
                        a: e.unref(o)
                    }, e.unref(o) ? {
                        b: "女" != e.unref(g).sex ? "/static/sex_man.png" : "/static/sex_woman.png"
                    } : {
                        c: n._imports_0$4
                    }, {
                        d: e.unref(o)
                    }, e.unref(o) ? {
                        e: e.t(e.unref(g).clientName),
                        f: n._imports_1$4,
                        g: e.t(e.unref(i.util)._hideIdCard(e.unref(g).idCardNo)),
                        h: e.t(e.unref(i.util)._handlePhoneSensitive(e.unref(g).phone))
                    } : {
                        i: n._imports_1$1
                    }, {
                        j: e.unref(o)
                    }, e.unref(o) ? {
                        k: e.t(e.unref(c).length),
                        l: e.t(e.unref(r).length),
                        m: n._imports_3$2,
                        n: e.o(h),
                        o: e.f(e.unref(r), (function(t, i, a) {
                            return e.e({
                                a: e.unref(c).length > i && "女" != e.unref(c)[i].sex
                            }, e.unref(c).length > i && "女" != e.unref(c)[i].sex ? {
                                b: n._imports_4$2,
                                c: e.t(e.unref(c)[i].clientName),
                                d: e.o(h, i)
                            } : e.unref(c).length > i && "女" == e.unref(c)[i].sex ? {
                                f: n._imports_5$2,
                                g: e.t(e.unref(c)[i].clientName),
                                h: e.o(h, i)
                            } : e.unref(c).length == i ? {
                                j: e.o(x, i),
                                k: n._imports_6$1
                            } : {}, {
                                e: e.unref(c).length > i && "女" == e.unref(c)[i].sex,
                                i: e.unref(c).length == i,
                                l: i
                            })
                        }))
                    } : {
                        p: n._imports_7$1,
                        q: e.f(e.unref(l), (function(n, t, i) {
                            return {
                                a: e.t(n),
                                b: t
                            }
                        })),
                        r: e.o((function() {
                            return e.unref(v) && e.unref(v).apply(void 0, arguments)
                        }))
                    }, {
                        s: e.f(e.unref(u), (function(n, t, i) {
                            return {
                                a: n.image,
                                b: e.t(n.name),
                                c: t,
                                d: e.o((function(e) {
                                    return m(n)
                                }), t)
                            }
                        })),
                        t: e.f(e.unref(s), (function(n, t, i) {
                            return e.e({
                                a: n.image,
                                b: e.t(n.name),
                                c: "意见反馈" == n.name
                            }, (n.name, {}), {
                                d: e.o((function(t) {
                                    return function(n) {
                                        switch (n.name) {
                                            case "注销用户":
                                                p();
                                                break;
                                            case "关注收藏":
                                                console.log(n), d();
                                                break;
                                            case "意见反馈":
                                                console.log(n);
                                                break;
                                            case "关于我们":
                                                console.log(n), e.index.navigateTo({
                                                    url: "/intelligent/hospital/gywm/index"
                                                });
                                                break;
                                            case "协议政策":
                                                console.log(n), e.index.navigateTo({
                                                    url: "/intelligent/jzr/list/index"
                                                });
                                                break;
                                            case "关怀模式":
                                                console.log(n), e.index.navigateTo({
                                                    url: "/careModel/switchPage/index"
                                                });
                                                break;
                                            case "消息设置":
                                                console.log(n), e.index.navigateTo({
                                                    url: "/internet/setup/index"
                                                })
                                        }
                                    }(n)
                                }), t),
                                e: t
                            })
                        })),
                        v: n._imports_0$7,
                        w: e.unref(o)
                    }, e.unref(o) ? {
                        x: e.o(p)
                    } : {})
                }
        }
    },
    o = e._export_sfc(a, [
        ["__scopeId", "data-v-ca1a0b96"]
    ]);
wx.createPage(o);