
Component({
    properties: {
        listIndex: {
            type: String,
            value: ""
        },
        visitor: {
            type: Object,
            value: {}
        },
        addStatus: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isMaskshow: !1,
        isSelect: !1,
        idx: "",
        selectVisitor: {}
    },
    methods: {
        showSelect: function() {
            this.setData({
                isMaskshow: !this.data.isMaskshow,
                isSelect: !this.data.isSelect
            })
        },
        cilckpep: function(t) {
            var e = t.currentTarget.dataset;
            this.setData({
                selectVisitor: e.item,
                isSelect: !1,
                isMaskshow: !1,
                idx: e.index
            }), this.triggerEvent("myevent", {
                selectVisitor: e.item
            })
        },
        addVisitor: function(t) {
            this.triggerEvent("addVisitor")
        }
    },
    ready: function() {
        var t = this,
            e = this.properties.visitor;
        e.forEach((function(e, i) {
            "1" == e.isDefaultFlag && t.setData({
                idx: t.properties.listIndex ? t.properties.listIndex : i,
                defaultIndex: i
            })
        })), this.setData({
            visitorArr: e,
            selectVisitor: e[this.data.defaultIndex]
        }), this.triggerEvent("myevent", {
            selectVisitor: this.data.selectVisitor,
            first: !0
        })
    }
});