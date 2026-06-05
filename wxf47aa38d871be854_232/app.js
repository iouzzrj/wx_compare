
var e = require("./utils/paho-mqtt.js");
App({
    onLaunch: function(e) {
        var n = "/" + (e = e || {}).path;
        if ("/pages/welcome/index" != n) {
            var o = [],
                a = e.query;
            for (var t in a) o.push(t + "=" + a[t]);
            var i = "/pages/welcome/index?page=";
            o.length > 0 ? i += encodeURIComponent(n + "?" + o.join("&")) : i += encodeURIComponent(n), wx.reLaunch({
                url: i
            })
        }
        if (wx.canIUse && wx.canIUse("getUpdateManager")) {
            var s = wx.getUpdateManager();
            s.onUpdateReady((function() {
                wx.clearStorage(), s.applyUpdate()
            }))
        }
        wx.onNetworkStatusChange && wx.onNetworkStatusChange((function(e) {
            e.isConnected ? wx.hideToast() : wx.showToast({
                title: "喔哟~怎么断网了",
                icon: "none",
                duration: 3e3
            })
        }))
    },
    onShow: function(e) {
        if (1038 == (e.scene || "")) {
            var n = e.referrerInfo || {},
                o = n.extraData || {};
            switch (n.appId || "") {
                case "wx308bd2aeb83d3345":
                    var a = o.code || {};
                    this.globalData.authCode = a.auth_code || ""
            }
        }
    },
    doConnect: function() {
        var n = this,
            o = n.globalData.imCfg;
        if (o) {
            var a = o["im-info"].wss_urls[0].replace("wss://", "").replace(":8084", ""),
                t = new e.Client(a, 443, o["im-info"].client_id);
            t.connect({
                useSSL: !0,
                reconnect: !0,
                userName: o["im-info"].username,
                password: o["im-info"].password,
                cleanSession: o["im-info"].clean_session,
                timeout: o["im-info"].connection_timeout,
                keepAliveInterval: o["im-info"].keep_alive_interval,
                onSuccess: function(e) {
                    n.globalData.isIm = !0, n.globalData.client = t;
                    try {
                        var a = getCurrentPages() || [];
                        if (console.log(a, "oage"), a.length > 0) {
                            var i = a[a.length - 1];
                            "online-inquiry/pages/chatPage/index" != i.route && "online-inquiry/pages/webview/index" != i.route || i.renderView()
                        }
                    } catch (e) {
                        console.error(e)
                    }
                    console.log("im成功"), t.subscribe(o["im-info"].topic), t.onMessageArrived = function(e) {
                        if (console.log(e, "第一次接收到消息"), e.destinationName) {
                            var n, o = JSON.parse(e.payloadString);
                            try {
                                var a = getCurrentPages() || [];
                                console.log(a, "oage"), a.length > 0 && ("online-inquiry/pages/chatPage/index" != (n = a[a.length - 1]).route && "online-inquiry/pages/webview/index" != n.route || n.setData({
                                    messageitem: o
                                }))
                            } catch (o) {
                                n && n.onMessage && n.onMessage(e.payloadString)
                            }
                        }
                    }, t.onConnectionLost = function(e) {
                        n.globalData.isIm = !1, 0 !== e.errorCode && console.log("onConnectionLost:" + e.errorMessage)
                    }
                },
                onFailure: function(e) {
                    console.log(e), wx.closeSocket(), n.doConnect()
                }
            })
        }
    },
    disconnect: function() {
        try {
            this.globalData.isIm = !1, this.globalData.client && (this.globalData.client.disconnect(), this.globalData.client = null)
        } catch (e) {}
    },
    setWatcher: function(e, n) {
        var o = this;
        Object.keys(n || {}).forEach((function(a) {
            o.observe(e, a, n[a])
        }))
    },
    observe: function(e, n, o) {
        var a = e[n];
        Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !0,
            set: function(e) {
                o(e, a = e)
            },
            get: function() {
                return a
            }
        })
    },
    globalData: {
        jumpEncKey: "Gu3V0qoBJA91xIgj",
        apiDomain: "https://app.bdkq.mingxuan.store/",
        imgDomain: "https://app.bdkq.mingxuan.store/",
        oauthDomain: "https://app.bdkq.mingxuan.store/",
        service: "xcx-bjdxkqyy-wx",
        assets: "xcx-bjdxkqyy-assets",
        apiSecret: "nY-PkxTm31dJ4ATAPf_LsJP_cQz7PjTJ",
        version: "default",
        shake: !0,
        authCode: "",
        sessionKey: "",
        accessToken: "",
        subscribe: "",
        gzhOpenid: "",
        gzhCode: "",
        subscribeWeb: !1,
        registered: !1,
        hlwyyFz: [],
        jftx: [],
        cardInfo: [],
        appointmentInfo: {},
        adviseList: [],
        zjlx: "",
        tsksList: [],
        dist: "0",
        imCfg: "",
        isIm: !1,
        onlineOpenMode: "1",
        org_code: "12100000400777097N",
        hospital: "北京大学口腔医院",
        subMessageArrays: {
            onlineReceive: ["gQplPJpk1grdUtGSiCFoPINs6cVJqgBnkoYyIIdrYZ0", "BMXTi7TLhIrfj-38QD0Ii13dqCnYp9yV-gLl3QIvSS0", "LJdw9SEOZJCnt1O9V1Y_4nVktvLWnsjb38gd6XSzxII"],
            onlineCancel: ["BM-var4GbNzdlOUuVK876AMC464bL_fmC4orbxM5x08"],
            onlineRefund: ["34-OWISx8xPUB1T4YWqmJXLz6nN5eWISEVfPvYzvaoI"],
            mzjfList: ["gPBjg3Y5-M5_u0GYmaC1UjhLAw9z1aJ8OCodES6AfHU", "9pxd7OlH34yZOCTi32EM3l9dv3qIM_7BAEKUoimcP1c"]
        },
        isOnlineIm: !1,
        redirectPage: "",
        goOnlinePage: !1
    },
    hospitalInfo: {
        subMessageArrays: {
            medicalAppointment: ["od7J_d1B4IQtBAhOW8ze_m9uozWIgLYOi4RMBIZaJdE"],
            medicalTakeCode: ["GF9jutX36ucTGo2n9FODlUFj7UI7aeaLLk9svZfL7Sc"],
            appointmentToday: ["ZoQ2OyUWW4KpULdATuBpiHkktmTBCKez-m7SWqveL2A"],
            appointmentCancel: ["iIY3dqIxbXQKopNpAKoGHf-0dHz8ApwJd9d_ffB-MYQ"],
            appointmentAfterday: ["XJt8Gstm5ixYxItbTD0Gv7u5yfMxadnoU6ygmEnovzg", "0_CYhkZgugycFunwBPYlxv1I8hACYksMFxFa06u4tXw"],
            afterPay: ["Pbo0Z9BA1KiDPQB4HmQl6gy4hTqQpOnEiF27Q0K6aZc"],
            orderDrugs: ["be3lNLjQy0nZrpFP-_1BS-EevsrKkScunbVyjFU1iFU"],
            auditResult: ["NQsON_WKUdLdkjZIpymyO5FeCSJBAG5M1gq_fUYiPqY"],
            inhospitalCharge: ["ZMIRuBQ4BfzLCb80W0JZHlVeHd6ARUu4fQAlaTrRLQk"],
            inhospitalCharge1: ["ZMIRuBQ4BfzLCb80W0JZHufm2GnuB0Xm88f_Kt-o20A"],
            inhospitalSettlement: ["Pbo0Z9BA1KiDPQB4HmQl6twHStUHeLgsDxfUlmtDcuc"]
        }
    }
});