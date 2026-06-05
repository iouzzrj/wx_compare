
var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
    t = require("../../../../../@babel/runtime/helpers/createClass"),
    n = function(e) {
        return "".concat(e < 10 ? "0" : "").concat(e)
    },
    a = function(e) {
        var t = Math.round(e),
            a = Math.round(t % 60),
            o = Math.floor(t / 60 % 60),
            u = Math.floor(t / 60 / 60);
        return "".concat(n(u), ":").concat(n(o), ":").concat(n(a))
    },
    o = function() {
        function n(t) {
            e(this, n);
            var a = this.option = t.attrs;
            this.loop = "true" === a.loop, this.autoplay = "true" === a.autoplay, this.create(), this.index = 0
        }
        return t(n, [{
            key: "create",
            value: function() {
                var e = this,
                    t = e.option,
                    n = e.audio = wx.createInnerAudioContext();
                n.src = t.src, n.onCanplay((function() {
                    e.autoplay && !e.index && e.play(), e.autoplay || e.index || e.eventCanplay()
                })), n.onTimeUpdate((function() {
                    e.duration = n.duration, e.currentTime = n.currentTime, e.duration - e.currentTime < .5 && (e.index++, e.loop ? n.stop() : e.stop(), n.seek(0)), e.eventTimeUpdate(a(e.duration), a(e.currentTime))
                })), n.onSeeked((function() {
                    e.loop && e.play()
                }))
            }
        }, {
            key: "play",
            value: function() {
                this.status = "play", this.audio.play(), this.eventPlay()
            }
        }, {
            key: "pause",
            value: function() {
                this.status = "pause", this.audio.pause(), this.eventPause()
            }
        }, {
            key: "stop",
            value: function() {
                this.status = "stop", this.audio.stop(), this.eventStop()
            }
        }, {
            key: "destroy",
            value: function() {
                this.stop(), this.audio.destroy()
            }
        }, {
            key: "eventCanplay",
            value: function() {}
        }, {
            key: "eventTimeUpdate",
            value: function() {}
        }, {
            key: "eventEnded",
            value: function() {}
        }, {
            key: "eventError",
            value: function() {}
        }, {
            key: "eventPause",
            value: function() {}
        }, {
            key: "eventPlay",
            value: function() {}
        }, {
            key: "eventSeeked",
            value: function() {}
        }, {
            key: "eventSeeking",
            value: function() {}
        }, {
            key: "eventStop",
            value: function() {}
        }, {
            key: "eventWaiting",
            value: function() {}
        }]), n
    }();
module.exports = o;