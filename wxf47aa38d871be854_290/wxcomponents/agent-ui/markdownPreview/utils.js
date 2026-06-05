
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.markdownToWxml = void 0;
var e = require("./towxml/index");
exports.markdownToWxml = function(t) {
    return e(t, "markdown", {
        base: "",
        theme: "light",
        events: {
            tap: function(e) {}
        }
    })
};