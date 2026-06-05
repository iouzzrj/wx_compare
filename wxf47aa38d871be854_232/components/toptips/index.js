
var t = require("../../utils/wxutil.js");
Component({
    properties: {
        type: {
            type: String,
            value: "error"
        },
        text: {
            type: String,
            value: "错误提示"
        },
        duration: {
            type: Number,
            value: 3e3
        }
    },
    data: {
        showMask: !1,
        animationData: {}
    },
    methods: {
        show: function(i) {
            t.isNotEmpty(i) && (t.isNotEmpty(i.type) && this.setData({
                type: i.type
            }), t.isNotEmpty(i.text) && this.setData({
                text: i.text
            }), t.isNotEmpty(i.duration) && this.setData({
                duration: i.duration
            })), this.animation.top("0").step(), this.setData({
                showMask: !0,
                animationData: this.animation.export()
            }), this.properties.duration > 0 && (this.timer = setTimeout(function() {
                this.hide()
            }.bind(this), this.properties.duration))
        },
        hide: function() {
            this.timer && (clearTimeout(this.timer), this.timer = void 0), this.animation.top("-140rpx").step(), this.setData({
                showMask: !1,
                animationData: this.animation.export()
            })
        }
    },
    ready: function() {
        this.animation = t.createAnimation()
    }
});