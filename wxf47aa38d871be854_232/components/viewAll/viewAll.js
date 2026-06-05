
Component({
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        list: {
            type: Object,
            value: "标题"
        }
    },
    data: {
        showModalStatus: !1,
        introduction: {}
    },
    methods: {
        changeRange: function() {
            this.showModal()
        },
        onLoad: function() {},
        showModal: function() {
            console.log(this.data.list, "list"), this.setData({
                introduction: this.data.list.introduction
            });
            var t = wx.createAnimation({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            });
            t.translateY(300).step(), this.setData({
                animationData: t.export(),
                showModalStatus: !0
            }), setTimeout(function() {
                t.translateY(0).step(), this.setData({
                    animationData: t.export()
                })
            }.bind(this), 200)
        },
        hideModal: function() {
            var t = wx.createAnimation({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            });
            t.translateY(300).step(), this.setData({
                animationData: t.export()
            }), setTimeout(function() {
                t.translateY(0).step(), this.setData({
                    animationData: t.export(),
                    showModalStatus: !1
                })
            }.bind(this), 200)
        }
    }
});