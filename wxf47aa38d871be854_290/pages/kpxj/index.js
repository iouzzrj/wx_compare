
var e = require("../../common/vendor.js"),
    n = {
        __name: "index",
        setup: function(n) {
            var r = {
                width: "100%",
                height: "100%"
            };
            return function(n, t) {
                return {
                    a: e.unref("https://dental.bjmu.edu.cn/newsdocs"),
                    b: e.unref(r)
                }
            }
        }
    };
wx.createPage(n);