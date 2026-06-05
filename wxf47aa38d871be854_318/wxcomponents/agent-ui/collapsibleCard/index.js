
Component({
    properties: {
        initStatus: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        collapsedStatus: !1
    },
    lifetimes: {
        attached: function() {
            this.setData({
                collapsedStatus: this.properties.initStatus
            })
        }
    },
    methods: {
        changeCollapsedStatus: function() {
            this.setData({
                collapsedStatus: !this.data.collapsedStatus
            })
        }
    },
    options: {
        multipleSlots: !0
    }
});