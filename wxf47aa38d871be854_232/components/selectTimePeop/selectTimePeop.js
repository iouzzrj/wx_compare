
var t = require("../../utils/api"),
    e = require("../../utils/wxutil.js");
Component({
    properties: {
        istimeFw: {
            type: Boolean,
            value: !0
        },
        isTimeSelect: {
            type: Boolean,
            value: !0
        },
        defaultTime: {
            type: Number,
            value: 0
        },
        listIndex: {
            type: Number,
            value: null
        },
        selectVisitor: {
            type: Object,
            value: {}
        },
        isTrue: {
            type: Number,
            value: !0
        }
    },
    data: {
        dateOne: e.mathChangeDate(e.getToday(), "-", "90", !0),
        dateTwo: e.getToday(),
        visitor: "",
        selectVisitor: "",
        isSelect: !1,
        isSelect2: !1,
        mask2: !1,
        mask3: !1,
        pxValue: 0,
        px: [{
            lable: "近一个月",
            value: 0,
            time: {
                startDate: e.mathChangeDate(e.getToday(), "-", "30", !0),
                endDate: e.getToday()
            }
        }, {
            lable: "近三个月",
            value: 1,
            time: {
                startDate: e.mathChangeDate(e.getToday(), "-", "90", !0),
                endDate: e.getToday()
            }
        }, {
            lable: "近半年",
            value: 2,
            time: {
                startDate: e.mathChangeDate(e.getToday(), "-", "180", !0),
                endDate: e.getToday()
            }
        }, {
            lable: "近一年",
            value: 3,
            time: {
                startDate: e.mathChangeDate(e.getToday(), "-", "360", !0),
                endDate: e.getToday()
            }
        }, {
            lable: "一年以上",
            value: 4,
            time: {
                startDate: e.mathChangeDate(e.getToday(), "-", "720", !0),
                endDate: e.getToday()
            }
        }],
        time: {
            startDate: e.mathChangeDate(e.getToday(), "-", "30", !0),
            endDate: e.getToday()
        },
        timefw: "近一个月",
        idx: ""
    },
    methods: {
        clickOnebox: e.throttle((function() {
            this.setData({
                isSelect: !this.data.isSelect,
                isSelect2: !1,
                mask3: !1,
                mask2: !this.data.mask2
            })
        }), 500),
        clickTwobox: e.throttle((function() {
            this.setData({
                isSelect2: !this.data.isSelect2,
                mask2: !1,
                mask3: !this.data.mask3,
                isSelect: !1
            })
        }), 500),
        changePx: e.throttle((function(t) {
            var e = t.currentTarget.dataset.item.time;
            console.log(t.currentTarget.dataset), this.setData({
                pxValue: t.currentTarget.dataset.px,
                time: e,
                isSelect2: !1,
                mask3: !1,
                timefw: t.currentTarget.dataset.item.lable
            }), this.triggerEvent("myevent", {
                selectVisitor: this.data.selectVisitor,
                time: this.data.time,
                visitor: this.data.visitor
            })
        }), 500),
        cilckpep: e.throttle((function(t) {
            var e = t.currentTarget.dataset,
                a = e.item.clientName;
            this.setData({
                selectVisitor: e.item,
                patient: a,
                isSelect: !1,
                mask2: !1,
                idx: e.index
            });
            var i = {
                    startDate: this.data.dateOne,
                    endDate: this.data.dateTwo
                },
                s = this.properties.istimeFw ? this.data.time : i;
            this.triggerEvent("myevent", {
                selectVisitor: e.item,
                time: s,
                visitor: this.data.visitor
            })
        }), 500),
        bindDateChange: e.throttle((function(t) {
            this.setData({
                dateOne: t.detail.value
            })
        }), 500),
        bindDateChange2: e.throttle((function(t) {
            this.setData({
                dateTwo: t.detail.value
            })
        }), 500),
        _reset: function() {
            this.setData({
                dateTwo: null,
                dateOne: null
            })
        },
        _define: function() {
            var t = this.data.dateOne,
                a = this.data.dateTwo;
            if (t && a) {
                this.setData({
                    isSelect2: !1,
                    mask3: !1
                });
                var i = {
                    startDate: this.data.dateOne,
                    endDate: this.data.dateTwo
                };
                this.triggerEvent("myevent", {
                    selectVisitor: this.data.selectVisitor,
                    time: i,
                    visitor: this.data.visitor
                })
            } else e._showTips("toast", "时间未选择完整")
        }
    },
    attached: function() {
        this.setData({
            pxValue: this.properties.defaultTime
        })
    },
    ready: function() {
        var e = this,
            a = this.data.visitor,
            i = {};
        a || (a = (0, t.getGlobalCardInfo)()), console.log(a, "visitorvisitorvisitor"), a.forEach((function(t, a) {
            1 == t.isDefaultFlag && (e.setData({
                idx: e.properties.listIndex ? e.properties.listIndex : a
            }), i = t)
        }));
        var s = a;
        console.log(i), this.setData({
            visitor: a,
            selectVisitor: this.properties.listIndex ? s[this.properties.listIndex] : i,
            patient: this.properties.listIndex ? s[this.properties.listIndex].clientName : i.clientName,
            timefw: this.data.px[this.properties.defaultTime].lable,
            isTrue: this.properties.isTrue
        }), console.log(this.data.pxValue, "this.properties.defaultTime");
        var r = {
                startDate: this.data.dateOne,
                endDate: this.data.dateTwo
            },
            o = this.properties.istimeFw ? this.data.px[this.properties.defaultTime].time : r;
        console.log(o, "propertiesproperties"), this.triggerEvent("myevent", {
            selectVisitor: this.data.selectVisitor,
            time: o,
            visitor: this.data.visitor,
            first: !0
        })
    }
});