
Component({
    properties: {
        rating: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 5
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        width: {
            type: Number,
            value: 56
        },
        margin: {
            type: Boolean,
            value: !1
        },
        showEmpty: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        _handleTap: function(e) {
            if (!this.data.disabled) {
                var a = this.data.max,
                    t = e.currentTarget.dataset.num;
                this.setData({
                    rating: a / 5 * t
                }), this.triggerEvent("change", {
                    value: a / 5 * t
                }, e)
            }
        }
    }
});