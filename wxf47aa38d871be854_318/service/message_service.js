
var e = require("../@babel/runtime/helpers/classCallCheck"),
    t = require("../@babel/runtime/helpers/createClass"),
    s = require("../common/vendor.js"),
    a = require("../request/request.js"),
    n = require("./mqtt_service.js"),
    i = require("../utils/util.js"),
    o = require("./userMessageBadge.js").useMessageBadge(1).unreadCount;
getApp();
var r = new(function() {
    function u() {
        if (e(this, u), u.instance) return u.instance;
        u.instance = this, this.NewMessageNumber = s.reactive({
            data: {},
            totalNumber: 0
        }), this.MessageInfoEnd = s.reactive({
            data: {}
        }), this.imData = void 0, this.recordList = s.reactive({
            data: []
        })
    }
    return t(u, [{
        key: "getPatientUniqueId",
        value: function() {
            return this.patientUniqueId
        }
    }, {
        key: "init",
        value: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            t && (console.log("重制IM信息"), this.dispostMqtt());
            var a = s.index.getStorageSync("imLoginInfo");
            a && (console.log("医生信息", a), this.patientUniqueId = a.uniqueId, this.imData = a.imInfo, n.mqttService.initMqttConfig(this.imData, this.onMessage), setTimeout((function() {
                e.checkMqtt() || console.log("服务链接断开", e.checkMqtt())
            }), 1e3))
        }
    }, {
        key: "checkMqtt",
        value: function() {
            return n.mqttService.getMqttClientConnect()
        }
    }, {
        key: "checkMqttConnect",
        value: function() {
            console.log("checkMqtt:", this.checkMqtt()), this.checkMqtt() ? console.log("mqtt链接正常") : n.mqttService.getMqttClient() || this.init()
        }
    }, {
        key: "dispostMqtt",
        value: function() {
            this.imData = void 0, n.mqttService.getMqttClientConnect() && n.mqttService.disconnect(), this.dispostEmit()
        }
    }, {
        key: "dispostEmit",
        value: function() {
            s.index.$off()
        }
    }, {
        key: "onMessage",
        value: function(e, t) {
            try {
                var a = JSON.parse(t.toString());
                console.log("newMessage: " + JSON.stringify(a));
                var n = a.type,
                    i = [];
                switch (n) {
                    case "1001":
                        i.push(a), r.handleChatStatus(a);
                        break;
                    case "1002":
                        break;
                    case "1003":
                        r.handleWithdraw(a);
                        break;
                    case "3001":
                    case "3002":
                        i.push(a), r.eventCall(a);
                        break;
                    default:
                        i.push(a), r.showNotificationMessage(a)
                }
                "1002" != n && s.index.$emit("newMessages", i), r.newMessageManage(a)
            } catch (e) {
                console.log(e)
            }
        }
    }, {
        key: "showNotificationMessage",
        value: function(e) {
            var t = "您收到一条消息";
            switch (e.type) {
                case "2001":
                    t = e.content.text;
                    break;
                case "2002":
                    t = "[图片]";
                    break;
                case "2003":
                    t = "[语音]";
                    break;
                case "2004":
                    t = "[视频]";
                    break;
                case "3001":
                    t = "[语音通话]";
                    break;
                case "3002":
                    t = "[视频通话]"
            }
            s.index.$emit("newMessageDialog", t)
        }
    }, {
        key: "eventCall",
        value: function(e) {
            s.index.$emit("callMessage", e)
        }
    }, {
        key: "handleChatStatus",
        value: function(e) {
            var t = e.content.status;
            console.log("会话消息状态", t)
        }
    }, {
        key: "queryInquiryRecord",
        value: function() {
            var e = this,
                t = {
                    q: "1",
                    orderStatus: "1",
                    consultStatus: "1,2,3,6",
                    isMsgSummary: !0,
                    pageNum: 1,
                    pageSize: 100,
                    beginDate: i.util._mathChangeDate(i.util._getToday(), "-", 90, !0),
                    endDate: i.util._getToday()
                };
            a.consultPage(t).then((function(t) {
                if (console.log("接诊中记录:", t), "0" == t.code) {
                    if (e.recordList.data = t.content.list, t.content.list) {
                        for (var a = s.index.getStorageSync("imLoginInfo"), n = t.content.list.reduce((function(e, t) {
                                return e + t.msgSummary[a.uniqueId].unread
                            }), 0), i = {}, r = 0; r < t.content.list.length; r++) {
                            var u = t.content.list[r];
                            u.msgSummary[a.uniqueId].unread > 0 && (i[u.acceptRecord[0].sessionId] = u.msgSummary[a.uniqueId].unread), u.msgSummary.mark && (e.MessageInfoEnd.data[u.acceptRecord[0].sessionId] = {
                                tip: u.msgSummary.mark.tip,
                                time: u.msgSummary.mark.time
                            })
                        }
                        e.NewMessageNumber.data = i, console.log("未读消息数：", n), e.NewMessageNumber.totalNumber = n, o.value = n
                    }
                } else console.log("进行中列表错误", t.msg)
            }))
        }
    }, {
        key: "getAllPatientLastMessage",
        value: function() {
            return this.MessageInfoEnd.data
        }
    }, {
        key: "getAllPatientNewMessageNumber",
        value: function() {
            return console.log("当前未读消息列表：", this.NewMessageNumber.data), this.NewMessageNumber.data
        }
    }, {
        key: "newMessageManage",
        value: function(e) {
            e.from != this.getPatientUniqueId() && "1001" != e.type && "1002" != e.type && "1003" != e.type && this.addMessageNumber(e.session_id), "1001" != e.type && "1002" != e.type && "1003" != e.type && this.addMessageEnd(e)
        }
    }, {
        key: "addMessageEnd",
        value: function(e) {
            var t = e.session_id,
                s = "";
            switch (e.type) {
                case "2001":
                    s = e.content.text;
                    break;
                case "2002":
                    s = "[图片]";
                    break;
                case "2003":
                    s = "[语音]";
                    break;
                case "2004":
                    s = "[视频]";
                    break;
                case "3001":
                    s = "[语音通话]";
                    break;
                case "3002":
                    s = "[视频通话]"
            }
            this.MessageInfoEnd.data[t] = {
                tip: s,
                time: e.timestamp
            }
        }
    }, {
        key: "addMessageNumber",
        value: function(e) {
            var t = this.NewMessageNumber.data;
            t.hasOwnProperty(e) ? t[e] = (t[e] || 0) + 1 : t[e] = 1, this.NewMessageNumber.totalNumber += 1, this.NewMessageNumber.data = t
        }
    }, {
        key: "clearNumMessage",
        value: function(e) {
            this.NewMessageNumber.totalNumber -= this.NewMessageNumber.data[e], this.NewMessageNumber.data[e] = 0
        }
    }, {
        key: "queryNewMessageCount",
        value: function() {
            this.recordList.data.forEach((function(e) {
                var t = this.getSessionId(e) || "",
                    s = 0;
                try {
                    var a = e.msgSummary[this.patientUniqueId];
                    s = a ? a.new : 0
                } catch (e) {
                    s = 0, console.log(e)
                }
                this.NewMessageNumber.data[t] = s
            }), this)
        }
    }, {
        key: "getSessionId",
        value: function(e) {
            return e.acceptRecord[0].sessionId || ""
        }
    }, {
        key: "disconnectMessage",
        value: function() {
            s.index.$off("newMessages"), s.index.$off("withdrawMessage"), s.index.$off("callMessage")
        }
    }, {
        key: "handleWithdraw",
        value: function(e) {
            this.removeNewMessage(e.session_id), s.index.$emit("withdrawMessage", e.content.id)
        }
    }, {
        key: "removeNewMessage",
        value: function(e) {
            var t = this.NewMessageNumber.data[e];
            t && 0 != t && (t -= 1, this.NewMessageNumber.data[e] = t)
        }
    }]), u
}());
exports.messageService = r;