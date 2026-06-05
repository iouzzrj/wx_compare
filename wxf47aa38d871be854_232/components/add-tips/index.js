
var t = require("../../utils/wxutil.js");
Component({
    properties: {
        tip: {
            type: String,
            value: "添加到我的小程序，下次使用更方便"
        },
        duration: {
            type: Number,
            value: 5
        },
        delay: {
            type: Number,
            value: 1
        },
        custom: {
            type: Boolean,
            value: !1
        }
    },
    lifetimes: {
        attached: function() {
            var e = this;
            if (!t.getStorage("x-tip")) {
                var i = t.getMenuButtonBoundingClientRect(),
                    a = t.getSystemInfo().screenWidth;
                this.setData({
                    navbarHeight: i.bottom,
                    arrowR: a - i.right + 3 * i.width / 4 - 5,
                    bodyR: a - i.right
                }), this.startTimer = setTimeout((function() {
                    e.setData({
                        SHOW_TOP: !0
                    })
                }), 1e3 * this.data.delay), this.duraTimer = setTimeout((function() {
                    e.shrink()
                }), 1e3 * (this.data.duration + this.data.delay))
            }
        },
        detached: function() {
            this.startTimer && clearTimeout(this.startTimer), this.duraTimer && clearTimeout(this.duraTimer)
        }
    },
    data: {
        SHOW_TOP: !1
    },
    methods: {
        hidden: function() {
            t.setStorage("x-tip", Math.random()), this.shrink()
        },
        shrink: function() {
            this.animate("#add-tips", [{
                scale: [1, 1]
            }, {
                scale: [0, 0],
                ease: "ease",
                transformOrigin: "calc(600rpx - ".concat(this.data.arrowR, "px) 1%")
            }], 500, function() {
                this.setData({
                    SHOW_TOP: !1
                })
            }.bind(this))
        }
    }
});