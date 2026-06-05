
var o = require("../../common/vendor.js");
require("../../utils/util.js"), Array || o.resolveComponent("i-icon")(), Math;
var e = {
        __name: "notice",
        props: {
            scroll: {
                type: Boolean,
                default: !1
            },
            isShow: {
                type: Boolean,
                default: !1
            },
            notice: {
                type: String,
                default: ""
            },
            bgColor: {
                type: String,
                default: "#13d690"
            },
            color: {
                type: String,
                default: "#fc837e"
            },
            showIcon: {
                type: Boolean,
                default: !1
            },
            iconColor: {
                type: String,
                default: "#fc837e"
            },
            close: {
                type: Boolean,
                default: !1
            }
        },
        setup: function(e) {
            var t = e,
                r = o.ref(!1);
             function c() {
                r.value = !1
            }
            return r.value = t.isShow,
                function(t, l) {
                    return o.e({
                        a: o.unref(r)
                    }, o.unref(r) ? o.e({
                        b: e.showIcon
                    }, e.showIcon ? {
                        c: o.p({
                            type: "notice",
                            size: "38",
                            color: e.iconColor
                        })
                    } : {}, {
                        d: e.scroll
                    }, e.scroll ? {
                        e: o.t(e.notice),
                        f: o.t(e.notice)
                    } : {
                        g: o.t(e.notice)
                    }, {
                        h: o.s("color:" + e.color),
                        i: e.close
                    }, e.close ? {
                        j: o.o(c),
                        k: o.p({
                            type: "close",
                            size: "24",
                            color: "#fc837e"
                        })
                    } : {}, {
                        l: o.s("background-color:" + e.bgColor)
                    }) : {})
                }
        }
    },
    t = o._export_sfc(e, [
        ["__scopeId", "data-v-4cf9676e"]
    ]);
wx.createComponent(t);