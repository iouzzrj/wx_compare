
var t = require("./Audio");
Component({
    options: {
        styleIsolation: "shared"
    },
    properties: {
        data: {
            type: Object,
            value: {}
        }
    },
    lifetimes: {
        attached: function() {
            var e = this,
                a = e.audio = new t(this.data.data);
            a.eventPlay = function() {
                e.setData({
                    tips: {
                        state: "h2w__audio--play",
                        text: "Playing"
                    }
                })
            }, a.eventCanplay = function() {
                e.setData({
                    tips: {
                        state: "h2w__audio--readyed",
                        text: "Readyed"
                    }
                })
            }, a.eventTimeUpdate = function(t, a) {
                e.setData({
                    time: {
                        currentTime: a,
                        duration: t,
                        schedule: Math.round(e.audio.currentTime) / Math.round(e.audio.duration) * 100 + "%"
                    }
                })
            }, a.eventPause = function() {
                e.setData({
                    tips: {
                        state: "h2w__audio--pause",
                        text: "Pause"
                    }
                })
            }, a.eventStop = function() {
                e.setData({
                    tips: {
                        state: "h2w__audio--end",
                        text: "End"
                    }
                })
            }
        },
        moved: function() {
            _ts.audio.stop(), _ts.audio.destroy()
        },
        detached: function() {
            _ts.audio.stop(), _ts.audio.destroy()
        }
    },
    data: {
        tips: {
            state: "",
            text: "--"
        },
        time: {
            currentTime: "00:00:00",
            duration: "00:00:00",
            schedule: "0%"
        }
    },
    methods: {
        playAndPause: function() {
            var t = this.audio;
            t.isTouch = !0, "update" === t.status || "play" === t.status ? t.pause() : t.play()
        }
    }
});