
var e = require("../../common/vendor.js");
require("../../utils/util.js");
var n = require("../../service/baseConfig.js"),
    o = require("../../request/request.js"),
    i = {
        __name: "index",
        setup: function(i) {
            getApp();
            var c = e.ref(""),
                s = e.reactive({
                    licence: "",
                    isType: 1,
                    recordInfo: {},
                    isIm: !0,
                    imCfg: {},
                    isvideo: !0
                }),
                a = e.toRefs(s),
                u = a.licence,
                r = a.isType,
                t = a.recordInfo,
                l = a.isIm,
                v = a.imCfg,
                d = a.isvideo;
            e.onLoad((function(o) {
                console.log("webView 页面：", o), c.value = decodeURIComponent(o.url), o.licence && (console.log("监听触发1", n.baseConfig), l.value = n.baseConfig.isLoginIm, e.index.$on("newMessages", f), u.value = o.licence, r.value = o.isType, t.value = n.baseConfig.recordInfo, v.value = n.baseConfig.imLoginInfo)
            }));
            var f = function(e) {
                console.log("会话页面", e), e.forEach((function(e) {
                    "3001" != e.type && "3002" != e.type || (d.value = !1)
                }))
            };
             function g() {
                console.log("挂断");
                var n = t.value.acceptRecord[t.value.acceptRecord.length - 1],
                    i = JSON.parse(n.sessionTicket)[n.patientUniqueId],
                    c = {
                        recordId: t.value.id,
                        ticket: i,
                        licence: u.value,
                        status: 7,
                        callType: r.value
                    };
                o.sendVedioOrAudioMsg(c).then((function(n) {
                    console.log(n, "挂断视频语音"), e.index.showToast({
                        title: "聊天结束",
                        icon: "none",
                        mask: !0
                    })
                }))
            }
            return e.onHide((function() {
                    d.value && g()
                })), e.onUnload((function() {
                    d.value && g()
                })),
                function(e, n) {
                    return {
                        a: c.value
                    }
                }
        }
    };
wx.createPage(i);