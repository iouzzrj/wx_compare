
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports._request = e, exports.appointmentRecordPage = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/appointmentRecord/appointmentRecordPage.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.appointmentRegister = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/appointmentRecord/appointmentRegister.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.authSubMessage = function(n, e, i, s) {
    var a = wx.canIUse("requestSubscribeMessage"),
        c = o.subMessageArrays[e] || [];
    if (!a || "function" != typeof wx.requestSubscribeMessage) return void(i && i(n));
    wx.getSetting({
        withSubscriptions: !0,
        success: function(o) {
            var e = o.subscriptionsSetting || {};
            if (t.isFalse(e.mainSwitch)) return console.warn("订阅消息失败：用户关闭了主开关"), void(i && i(n));
            wx.requestSubscribeMessage({
                tmplIds: c,
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {
                    s.setData({
                        showTip: !1,
                        tipPosition: 0
                    }), i && i(n)
                }
            })
        },
        fail: function() {
            i && i(n)
        }
    })
}, exports.bindCardSendVerificationCode = function(t, n, o) {
    e({
        loading: !1,
        url: "/weixin/bindCardSendVerificationCode",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.bindPatientInfo = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/bindPatientInfo.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.bindPatientInfoByCreate = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/bindPatientInfoByCreate.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.cancelCollection = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/doctorCollect/cancelCollection.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.cancelRecord = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/appointmentRecord/cancelRecord.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.collectionPage = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/doctorCollect/collectionPage.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.deleteByCollectId = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/doctorCollect/deleteByCollectId.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.getGlobalAccessToken = function() {
    return n.globalData.accessToken || ""
}, exports.getGlobalCardInfo = function() {
    return n.globalData.cardInfo || []
}, exports.getGlobalData = function(o) {
    for (var e, i = n.globalData, s = o.split("."), a = 0; a < s.length; a++) {
        var c = i[s[a]];
        if (a == s.length - 1) t.isNotEmpty(c) && (e = c);
        else {
            if (t.isEmpty(c)) break;
            i = c
        }
    }
    t.isEmpty(e) && (e = "");
    return e
}, exports.getGlobalRegistered = function() {
    return n.globalData.registered || !1
}, exports.getGlobalSessionKey = function() {
    return n.globalData.sessionKey || ""
}, exports.getPhoneNumber = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/decryPhoneNumber.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.getRealnameinfo = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/decryPatientIdCard",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.isCollected = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/doctorCollect/isCollected.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.logOffUser = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/logOffUser.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.login = function(n, o) {
    t.login(n, o)
}, exports.needSubMessage = function(n, e) {
    var i = o.subMessageArrays[n] || [];
    wx.getSetting({
        withSubscriptions: !0,
        success: function(n) {
            var o = n.subscriptionsSetting || {};
            if (t.isFalse(o.mainSwitch)) return console.warn("订阅消息失败：用户关闭了主开关"), void(e && e(!1));
            var s = o.itemSettings || {},
                a = i.filter((function(n) {
                    return t.isEmpty(s[n])
                }));
            e && e(a.length > 0)
        },
        fail: function() {
            e && e(!1)
        }
    })
}, exports.rareChineseCharacter = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/rareChineseCharacter.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.sendVerificationCode = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/sendVerificationCode",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.setDefaultPatientInfo = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/setDefaultPatientInfo.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.setGlobalAccessToken = function(t) {
    n.globalData.accessToken = t
}, exports.setGlobalCardInfo = function(t) {
    n.globalData.cardInfo = t
}, exports.setGlobalRegistered = function(t) {
    n.globalData.registered = t
}, exports.setGlobalSessionKey = function(t) {
    n.globalData.sessionKey = t
}, exports.startCollection = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/doctorCollect/startCollection.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.throttle = function(t, n) {
    null != n && null != n || (n = 1500);
    var o = null;
    return function() {
        var e = +new Date;
        (e - o > n || !o) && (t.apply(this, arguments), o = e)
    }
}, exports.unbindPatientInfo = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/unBindPatientInfo.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.updatePatientInfo = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/patientInfo/updatePatientInfo.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.userRegister = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/userRegister.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
}, exports.verifyUser = function(t, n, o) {
    e({
        loading: !1,
        url: "/api/userInfo/verifyUser.json",
        method: "post",
        data: t,
        success: function(t) {
            n && n(t)
        },
        fail: function(t) {
            o && o(t)
        }
    })
};
var t = require("./wxutil.js"),
    n = getApp(),
    o = getApp().hospitalInfo;
 function e(n) {
    t.request(n)
}