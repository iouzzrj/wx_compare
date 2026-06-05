
var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
    r = require("../@babel/runtime/helpers/asyncToGenerator"),
    n = require("../common/vendor.js");
require("../utils/util.js"), exports.useMessageBadge = function() {
    var u = n.ref(null);
    return n.onMounted((function() {
        r(e().mark((function r() {
            return e().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        try {
                            u.value = null
                        } catch (e) {
                            console.error("获取消息数失败", e)
                        }
                    case 1:
                    case "end":
                        return e.stop()
                }
            }), r)
        })))()
    })), n.watch(u), {
        unreadCount: u,
        incrementCount: function() {
            u.value++
        },
        clearCount: function() {
            u.value = null
        }
    }
};