
var t = require("../@babel/runtime/helpers/classCallCheck"),
    e = require("../@babel/runtime/helpers/createClass"),
    n = require("../common/vendor.js"),
    i = new(function() {
        function i() {
            return t(this, i), i.instance ? i.instance : (i.instance = this, this.mqttClient = null, this.userName = "", this.passWord = "", this.clientId = "", this.topics = [], this.keepAliveInterval = 0, this.cleanSession = !0, this.timeout = 0, this.mqttIp = "", this.onMessage, this)
        }
        return e(i, [{
            key: "getMqttClient",
            value: function() {
                return this.mqttClient
            }
        }, {
            key: "getMqttClientConnect",
            value: function() {
                return this.mqttClient && this.mqttClient.connected || !1
            }
        }, {
            key: "initMqttConfig",
            value: function(t, e) {
                this.userName = t.username, this.passWord = t.password, this.clientId = t.clientId, this.topics = t.topics, this.keepAliveInterval = t.keepAliveInterval, this.cleanSession = t.leanSession, this.timeout = t.connectionTimeout, this.onMessage = e, this.setMqttIp(t.wsUrls, t.wssUrls), this.initConfig()
            }
        }, {
            key: "setMqttIp",
            value: function(t, e) {
                this.mqttIp = e[0].replace("wss://", "wxs://").replace(/:(\d+)$/, ":443/mqtt")
            }
        }, {
            key: "initConfig",
            value: function() {
                try {
                    var t = {
                        clientId: this.clientId,
                        username: this.userName,
                        password: this.passWord,
                        keepalive: this.keepAliveInterval,
                        reconnectPeriod: 1e4,
                        reconnectOnConnackError: !0,
                        protocol: "wxs"
                    };
                    console.log("this.mqttIp ", this.mqttIp), console.log("opiton ", t), this.mqttClient = n.mqtt.connect(this.mqttIp, t), this.connect()
                } catch (t) {
                    console.error("初始化mqtt失败:", t)
                }
            }
        }, {
            key: "connect",
            value: function() {
                var t = this;
                this.mqttClient.on("connect", (function() {
                    console.log("连接成功", t), t.subscribed()
                })).on("reconnect", (function(t) {
                    return console.log("正在重连...", t)
                })).on("error", (function(t) {
                    return console.log("连接失败...", t)
                })).on("end", (function() {
                    return console.log("连接断开", t)
                })).on("close", (function() {
                    return console.log("连接关闭", t)
                })).on("offline", (function() {
                    return console.log("客户端下线", t)
                })), this.addMessageListener()
            }
        }, {
            key: "reconnect",
            value: function() {
                this.mqttClient.reconnect()
            }
        }, {
            key: "sendMessage",
            value: function(t) {
                this.mqttClient.publish(this.topics[0], t, {
                    qos: 0,
                    retain: !1
                }, (function(t) {
                    t && console.error("消息发送失败:", t)
                }))
            }
        }, {
            key: "subscribed",
            value: function() {
                var t = this;
                this.topics.forEach((function(e) {
                    t.mqttClient.subscribe(e, {
                        qos: 1
                    }, (function(t, e) {
                        t && console.error("订阅失败:", t)
                    }))
                }))
            }
        }, {
            key: "addMessageListener",
            value: function(t) {
                var e = this;
                this.mqttClient.on("message", (function(t, n) {
                    e.onMessage(t, n)
                }))
            }
        }, {
            key: "disconnect",
            value: function() {
                this.mqttClient.end(), this.mqttClient = null
            }
        }]), i
    }());
exports.mqttService = i;