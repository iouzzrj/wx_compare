
var e = require("./config");
Component({
    options: {
        styleIsolation: "apply-shared"
    },
    properties: {
        nodes: {
            type: Object,
            value: {}
        }
    },
    lifetimes: {
        attached: function() {
            var t = this;
            e.events.forEach((function(e) {
                t["_" + e] = function() {
                    var t;
                    global._events && "function" == typeof global._events[e] && (t = global._events)[e].apply(t, arguments)
                }
            }))
        }
    }
});