
Component({
    properties: {
        visitor: {
            type: Array,
            value: []
        },
        selectVisitor: {
            type: Object,
            value: {}
        },
        title: {
            type: String,
            value: "标题"
        }
    },
    data: {
        showMask: !1,
        animationData: {}
    },
    methods: {
        selectItem: function(t) {
            var i = t.currentTarget.dataset.item;
            console.log(i, "选中的就诊人"), this.triggerEvent("select", i), this.hide()
        },
        addVisitor: function() {
            wx.navigateTo({
                url: "/pages/jzr/tjjzr/index"
            }), this.hide()
        },
        show: function() {
            this.animation.bottom("0rpx").step(), this.setData({
                showMask: !0,
                animationData: this.animation.export()
            })
        },
        hide: function() {
            this.animation.bottom("-500rpx").step(), this.setData({
                showMask: !1,
                animationData: this.animation.export()
            })
        }
    },
    ready: function() {
        this.animation = wx.createAnimation({
            duration: 400,
            timingFunction: "ease",
            delay: 0
        })
    }
});