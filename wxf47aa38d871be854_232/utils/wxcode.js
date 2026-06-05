
var e = require("./qrcode.js"),
    r = require("./barcode.js");
 function o(e) {
    return Math.round(wx.getSystemInfoSync().windowWidth * e / 750)
}
module.exports = {
    qrcode: function(r, t, n, c, d) {
        e.api.draw(r, t, o(n), o(c), d)
    },
    barcode: function(e, t, n, c) {
        r.code128(wx.createCanvasContext(e), t, o(n), o(c))
    }
};