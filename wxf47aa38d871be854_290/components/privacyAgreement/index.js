
var e = require("../../common/vendor.js"),
    n = {
        __name: "index",
        props: {
            hospital: {
                type: String,
                default: ""
            }
        },
        emits: ["handleAgree"],
        setup: function(n, o) {
            var t = o.emit,
                i = e.ref(!1),
                c = t,
                r = function() {
                    c("handleAgree"), i.value = !1
                },
                a = function() {
                    console.log("123"), e.index.exitMiniProgram()
                },
                u = function() {
                    e.index.openPrivacyContract({
                        success: function(e) {
                            console.log("openPrivacyContract success")
                        },
                        fail: function(e) {
                            console.error("openPrivacyContract fail", e)
                        }
                    })
                };
            return e.onMounted((function() {
                    console.log("getPrivacySetting", e.index.getPrivacySetting().then((function(e) {
                        console.log("res:", e)
                    }))), e.index.getPrivacySetting() ? e.index.getPrivacySetting().then((function(e) {
                        console.log("getPrivacySetting:", e), console.log("是否需要授权：", e.needAuthorization, "隐私协议的名称为：", e.privacyContractName), e.needAuthorization ? i.value = !0 : r()
                    })) : r()
                })),
                function(o, t) {
                    return e.e({
                        a: e.unref(i)
                    }, e.unref(i) ? {
                        b: e.t(n.hospital),
                        c: e.o(u),
                        d: e.o(a),
                        e: e.o(r)
                    } : {})
                }
        }
    },
    o = e._export_sfc(n, [
        ["__scopeId", "data-v-ae9c6bc7"]
    ]);
wx.createComponent(o);