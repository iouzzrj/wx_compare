
Component({
    properties: {
        hintMsg: {
            type: String,
            value: "暂无记录~"
        },
        errorMsg: {
            type: String,
            value: ""
        },
        isShow: {
            type: Boolean,
            value: !1
        },
        isError: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        refreshFun: function() {
            this.triggerEvent("refresh")
        }
    }
});