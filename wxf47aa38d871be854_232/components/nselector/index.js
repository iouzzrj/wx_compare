
var t = require("../../utils/wxutil.js");
Component({
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        content: {
            type: Array,
            value: []
        },
        defaultValue: {
            type: String,
            value: ""
        },
        disableMessage: {
            type: String,
            value: "无效项目"
        }
    },
    data: {
        showMask: !1,
        animationData: {}
    },
    methods: {
        show: function(a) {
            t.isNotEmpty(a) ? (t.isNotEmpty(a.title) && this.setData({
                title: a.title
            }), t.isNotEmpty(a.content) && this.setData({
                content: a.content
            }), t.isNotEmpty(a.defaultValue) && this.setData({
                defaultValue: a.defaultValue
            })) : this.setData({
                defaultValue: this.data.defaultValue
            }), this.animation.bottom("20rpx").step(), this.setData({
                showMask: !0,
                animationData: this.animation.export()
            })
        },
        hide: function() {
            this.animation.bottom("-500rpx").step(), this.setData({
                showMask: !1,
                animationData: this.animation.export()
            }), this.triggerEvent("close", {})
        },
        _selectItem: function(a) {
            a.currentTarget.dataset.disable ? t.showToast({
                title: this.data.disableMessage
            }) : (this.hide(), this.triggerEvent("select", {
                text: a.currentTarget.dataset.text,
                value: a.currentTarget.dataset.value
            }))
        }
    },
    ready: function() {
        this.animation = t.createAnimation()
    }
});