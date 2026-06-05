
var e = require("../../common/vendor.js");
require("../../request/request.js");
var r = require("../../utils/util.js"),
    t = {
        __name: "index",
        setup: function(t) {
            getApp();
            var u = e.ref(r.util.getStorage("out-of-service")),
                i = e.ref(r.util.getImgBase());
             function n() {
                r.util.exitMiniProgram()
            }
            return function(r, t) {
                return {
                    a: e.t(e.unref(u)),
                    b: e.unref(i) + "/bg_maintain.png",
                    c: e.o(n, "e0")
                }
            }
        }
    },
    u = e._export_sfc(t, [
        ["__scopeId", "data-v-66783717"]
    ]);
wx.createPage(u);