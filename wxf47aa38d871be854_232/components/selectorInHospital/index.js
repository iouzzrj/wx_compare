
var t = require("../../utils/wxutil.js");
Component({
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        inhosArr: {
            type: Array,
            value: []
        },
        selectInhosArr: {
            type: Array,
            value: []
        }
    },
    data: {
        showMask: !1,
        animationData: {}
    },
    methods: {
        show: function(i) {
            t.isNotEmpty(i) && (t.isNotEmpty(i.title) && (this.setData({
                title: i.title
            }), console.log(i.title)), t.isNotEmpty(i.inhosArr) && this.setData({
                inhosArr: i.inhosArr,
                isinhosArr: i.inhosArr
            })), wx.setStorageSync("inhosArr", i.inhosArr), this.animation.bottom("20rpx").step(), this.setData({
                showMask: !0,
                animationData: this.animation.export()
            })
        },
        hide: function() {
            this.animation.bottom("-500rpx").step();
            var t = wx.getStorageSync("inhosArr");
            console.log(t), this.setData({
                showMask: !1,
                inhosArr: t,
                animationData: this.animation.export()
            });
            var i = {
                inhosArr: this.data.inhosArr
            };
            this.triggerEvent("close", i)
        },
        selectItem: function(t) {
            var i = t.currentTarget.dataset.index,
                a = this.data.inhosArr;
            a[i].checked = !a[i].checked, this.setData({
                inhosArr: a
            }), console.log(this.data.inhosArr)
        },
        confirm: function(t) {
            var i = [],
                a = this.data.inhosArr;
            console.log(a);
            for (var s = 0; s < a.length; s++) {
                var r = a[s];
                r.checked && i.push(r)
            }
            this.animation.bottom("-500rpx").step(), this.setData({
                showMask: !1,
                animationData: this.animation.export()
            });
            var o = {
                inhosArr: a,
                selectInhosArr: i
            };
            this.triggerEvent("confirm", o)
        }
    },
    ready: function() {
        this.animation = t.createAnimation()
    }
});