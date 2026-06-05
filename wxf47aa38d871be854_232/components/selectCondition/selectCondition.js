
var t = require("../../utils/wxutil.js");
Component({
    properties: {
        pageType: {
            type: String,
            value: "0"
        },
        waiNum: {
            type: String,
            value: "0"
        },
        statesList: {
            type: Object,
            value: null
        },
        defaultStates: {
            type: String,
            value: ""
        }
    },
    data: {
        startTime: "",
        endTime: "",
        filterStartTime: "",
        filterEndTime: "",
        isMaskshow: !1,
        gjActive: !1,
        gjStartTime: "",
        gjEndTime: "",
        statesActiveValue: "",
        defaultStatesNum: ""
    },
    methods: {
        statesSelect: function(t) {
            this.setData({
                statesActiveValue: t.currentTarget.dataset.value
            })
        },
        getDate: t.throttle((function(t) {
            var e = t.currentTarget.dataset.num;
            this.setData({
                startTime: this.getAgoDay(e),
                endTime: this.getAgoDay(0),
                gjStartTime: "",
                gjEndTime: "",
                waiNum: e,
                gjActive: !1
            });
            var a = {
                startTime: this.getAgoDay(e),
                endTime: this.getAgoDay(0),
                defaultStates: this.data.statesActiveValue
            };
            this.triggerEvent("getData", a)
        })),
        filterOk: function() {
            if ("" == this.data.filterStartTime) wx.showToast({
                title: "请选择开始时间！",
                icon: "none"
            });
            else if ("" == this.data.filterEndTime) wx.showToast({
                title: "请选择结束时间！",
                icon: "none"
            });
            else {
                this.setData({
                    gjStartTime: this.data.filterStartTime,
                    gjEndTime: this.data.filterEndTime,
                    waiNum: "",
                    isMaskshow: !1,
                    gjActive: !0
                });
                var t = {
                    startTime: this.data.gjStartTime,
                    endTime: this.data.gjEndTime,
                    defaultStates: this.data.statesActiveValue
                };
                this.triggerEvent("getData", t)
            }
        },
        filterReset: function() {
            this.setData({
                filterStartTime: "",
                filterEndTime: "",
                statesActiveValue: this.data.defaultStatesNum
            })
        },
        showFilter: function() {
            this.setData({
                filterStartTime: this.data.gjStartTime,
                filterEndTime: this.data.gjEndTime,
                isMaskshow: !0
            })
        },
        closeFilter: function() {
            this.setData({
                isMaskshow: !1
            })
        },
        startTimeChange: function(t) {
            this.setData({
                filterStartTime: t.detail.value
            })
        },
        endTimeChange: function(t) {
            this.setData({
                filterEndTime: t.detail.value
            })
        },
        getAgoDay: function(t) {
            var e = new Date,
                a = new Date(e.getTime() - 24 * t * 60 * 60 * 1e3),
                i = a.getFullYear(),
                s = a.getMonth() + 1,
                r = a.getDate();
            return s = s < 10 ? "0" + s : s, r = r < 10 ? "0" + r : r, i.toString() + "-" + s.toString() + "-" + r.toString()
        }
    },
    ready: function() {
        this.setData({
            startTime: this.getAgoDay(0),
            endTime: this.getAgoDay(0),
            waiNum: this.properties.waiNum,
            statesActiveValue: this.properties.defaultStates,
            defaultStatesNum: this.properties.defaultStates
        })
    }
});