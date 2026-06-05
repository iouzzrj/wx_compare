
var e = require("../../common/vendor.js"),
    o = require("../../utils/util.js"),
    n = require("../../service/baseConfig.js"),
    i = require("../../request/request.js"),
    s = {
        __name: "index",
        setup: function(s) {
            getApp();
            var c = e.ref(""),
                t = e.reactive({
                    licence: "",
                    isType: 1,
                    recordInfo: {},
                    isIm: !0,
                    imCfg: {},
                    isvideo: !0
                }),
                u = e.toRefs(t),
                a = u.licence,
                l = u.isType,
                r = u.recordInfo,
                v = u.isIm,
                d = u.imCfg,
                f = u.isvideo;
            e.onLoad((function(o) {
                console.log("webView 页面：", o), c.value = decodeURIComponent(o.url), o.licence && (console.log("监听触发1", n.baseConfig), v.value = n.baseConfig.isLoginIm, e.index.$on("newMessages", g), a.value = o.licence, l.value = o.isType, r.value = n.baseConfig.recordInfo, d.value = n.baseConfig.imLoginInfo)
            }));
            var g = function(e) {
                console.log("会话页面", e), e.forEach((function(e) {
                    "3001" != e.type && "3002" != e.type || (f.value = !1)
                }))
            };
             function p() {
                console.log("挂断");
                var o = r.value.acceptRecord[r.value.acceptRecord.length - 1],
                    n = JSON.parse(o.sessionTicket)[o.patientUniqueId],
                    s = {
                        recordId: r.value.id,
                        ticket: n,
                        licence: a.value,
                        status: 7,
                        callType: l.value
                    };
                i.sendVedioOrAudioMsg(s).then((function(o) {
                    console.log(o, "挂断视频语音"), e.index.showToast({
                        title: "聊天结束",
                        icon: "none",
                        mask: !0
                    })
                }))
            }
            return e.onHide((function() {
                    f.value && o.util._isNotEmpty(a.value) && p()
                })), e.onUnload((function() {
                    f.value && o.util._isNotEmpty(a.value) && p()
                })),
                function(e, o) {
                    return {
                        a: c.value
                    }
                }
        }
    };
wx.createPage(s);