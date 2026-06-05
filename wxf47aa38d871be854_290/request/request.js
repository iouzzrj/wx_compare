
var t = require("../@babel/runtime/helpers/defineProperty"),
    n = require("../@babel/runtime/helpers/typeof"),
    e = require("../common/vendor.js"),
    r = require("./url.js"),
    o = require("../utils/util.js"),
    i = require("../service/baseConfig.js"),
    a = require("../utils/crypto-js.js"),
    u = require("../utils/base64.min.js").btoa,
    c = getApp(),
    s = c.globalData.apiSecret;
 function d() {
    return new Promise((function(t, n) {
        if (o.util.isDesktop()) n({
            message: "Access Denied"
        });
        else {
            var i = e.index.getDeviceInfo(),
                a = e.index.getAppBaseInfo();
            i.hostName = a.hostName, i.hostVersion = a.hostVersion, console.log("deviceInfo:", i), console.log("appBaseInfo:", a), console.log("客户端：" + i.deviceBrand + ";" + i.osName + " " + i.osVersion + ";" + i.hostName + " " + i.hostVersion), e.index.login({
                success: function(e) {
                    var a = {
                        loading: !0,
                        method: "POST",
                        data: {
                            code: e.code,
                            gzhCode: c.globalData.gzhCode,
                            loginDevice: i.deviceBrand + ";" + i.osName + " " + i.osVersion + ";" + i.hostName + " " + i.hostVersion
                        },
                        url: r.url.login,
                        header: l()
                    };
                    return g(a).then((function(e) {
                        if (console.log("登录返回：", e), 0 == e.status) return e.data.init && o.util.clearStorage(), f(e.data), c.globalData.gzhCode = "", void t(e);
                        n(e)
                    })).catch((function(t) {
                        n(t)
                    }))
                },
                fail: function(t) {
                    n(t)
                }
            })
        }
    }))
}
 function f(t) {
    e.index.setStorageSync("accessToken", t.accessToken), c.globalData.registered = t.registered || !1, c.globalData.cardInfo = t.cardInfo || [], o.util._isNotEmpty(t.newLoginVo) && (i.baseConfig.bindPatients = t.newLoginVo.bindPatients, console.log("新patient", i.baseConfig.bindPatients), i.baseConfig.imLoginInfo = t.newLoginVo.imLoginVo, i.baseConfig.isLoginIm = !o.util._isEmpty(t.newLoginVo.imLoginVo), e.index.setStorageSync("realName", t.newLoginVo.realName), e.index.setStorageSync("userInfo", t.newLoginVo.realUser), e.index.setStorageSync("nickName", t.newLoginVo.nickName), e.index.setStorageSync("phoneNo", t.newLoginVo.phoneNo), e.index.setStorageSync("nickName", t.newLoginVo.nickName), e.index.setStorageSync("phoneNo", t.newLoginVo.phoneNo), e.index.setStorageSync("imLoginInfo", t.newLoginVo.imLoginVo))
}
 function l() {
    return {
        "Content-Type": "application/json",
        access_token: e.index.getStorageSync("accessToken") || ""
    }
}
 function h(t, n, r, o) {
    return t && e.index.showLoading({
        title: "努力上传中...",
        mask: !0
    }), new Promise((function(i, a) {
        var u = {
            method: "POST",
            contentType: "multipart/form-data"
        };
        u.data = o.formData || {}, u.header = r, u.filePath = o.filePath, u.name = o.name, u.url = n, p(u);
        var s = c.globalData.apiDomain + c.globalData.service;
        c.globalData.shake && -1 == n.indexOf("/common") && (s += "@" + c.globalData.version), e.index.uploadFile({
            url: s + n,
            header: u.header,
            method: u.method,
            formData: u.data,
            name: u.name || "file",
            filePath: u.filePath || "",
            success: function(n) {
                console.log("上传文件反参：", n);
                var r = b(u, n);
                console.log("上传文件反参解密：", r), i(r), t && e.index.hideLoading()
            },
            fail: function(n) {
                console.log(n, "系统异常"), a({
                    message: "系统异常~"
                }), t && e.index.hideLoading()
            }
        })
    }))
}
var g = function t(n) {
        n.contentType = (n.header || {})["content-type"] || "application/json", p(n);
        var r = c.globalData.apiDomain + c.globalData.service;
        c.globalData.shake && -1 == n.url.indexOf("/online") && -1 == n.url.indexOf("/common") && (r += "@" + c.globalData.version);
        var i = r + n.url,
            a = n.method || "POST",
            u = n.data || {},
            s = n.header;
        e.index.getStorageSync("accessToken") && (s.access_token = e.index.getStorageSync("accessToken")), n.loading && e.index.showLoading({
            title: "加载中...",
            mask: !0
        });
        var f = m(s.signature.substring(24, 40));
        return new Promise((function(r, l) {
            e.index.request({
                url: i,
                method: a,
                header: s,
                responseType: n.responseType || "text",
                data: c.globalData.isSecret && "POST" == a.toUpperCase() ? {
                    data: e.SMCrypto.sm4.encrypt(JSON.stringify(u), f)
                } : u,
                success: function(i) {
                    var a = b(n, i);
                    200 == i.statusCode ? 1e3 == a.status ? d().then((function(e) {
                        0 == e.status ? t(n, !1).then((function(t) {
                            r(t)
                        })).catch((function(t) {
                            l(t)
                        })) : l(e)
                    })) : 1001 == a.status ? (o.util._setStorage("out-of-service", a.message), e.index.reLaunch({
                        url: "/pages/out-of-service/index"
                    })) : r(a) : l(a)
                },
                fail: function(t) {
                    console.log("接口原始输出err：", t), l(t)
                },
                complete: function() {
                    n.loading && e.index.hideLoading()
                }
            })
        }))
    },
    p = function(t) {
        t.url.indexOf("/login/wechat") >= 0 && (c.globalData.version = "default");
        var r = v(t.url),
            o = "",
            i = t.data;
        if (!P(i)) {
            var a = t.method.toLowerCase(),
                u = t.contentType.toLowerCase();
            "get" == a || "post" == a && ("application/x-www-form-urlencoded" == u || "application/octet-stream" == u || u.startsWith("multipart/form-data")) ? "object" == n(i) ? Object.assign(r, i) : Object.assign(r, v("?" + i)) : o = JSON.stringify(i)
        }
        var s = (new Date).getTime(),
            d = y(),
            f = D(r, o, d, s),
            l = t.header || {};
        (P(t.auth) || t.auth) && (l = Object.assign(l, {
            access_token: e.index.getStorageSync("accessToken") || ""
        })), Object.assign(l || {}, {
            request_otp: d,
            request_time: s,
            signature: f,
            rid: w()
        }), t.header = l
    },
    m = function(t) {
        return unescape(encodeURIComponent(t)).split("").map((function(t) {
            return t.charCodeAt()
        }))
    },
    P = function(t) {
        return null == t || null == t || "" == t.toString().trim() || "null" == t.toString().trim().toLowerCase() || "undefined" == t.toString().trim().toLowerCase() || "{}" == JSON.stringify(t) || "[]" == JSON.stringify(t)
    },
    v = function(n) {
        var e = new Object;
        if (P(n)) return e;
        var r = new RegExp("[?&][^&]+=?[^&]*", "g"),
            o = n.match(r);
        if (P(o)) return e;
        for (var i = 0; i < o.length; i++) {
            var a = o[i].substring(1).split("=");
            Object.assign(e, t({}, a[0], 2 == a.length ? a[1] : ""))
        }
        return e
    },
    w = function() {
        var t = e.index.getStorageSync("accessToken") || "";
        return S(t).substring(8, 24).toLowerCase() + "#" + S(x()).substring(8, 24).toLowerCase()
    },
    x = function() {
        return Math.floor(Date.now() / 1e3).toString(16) + Math.floor(16777215 * Math.random()).toString(16).padStart(6, "0") + Math.floor(65535 * Math.random()).toString(16).padStart(4, "0") + Math.floor(16777215 * Math.random()).toString(16).padStart(6, "0")
    },
    y = function() {
        for (var t = [], n = "0123456789abcdef", e = 0; e < 36; e++) t[e] = n.substr(Math.floor(16 * Math.random()), 1);
        return t[14] = "4", t[19] = n.substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", t.join("")
    },
    S = function(t) {
        return a.MD5(t).toString()
    },
    b = function(t, r) {
        t.url.indexOf("/login/wechat") >= 0 && (c.globalData.version = r.header["x-version"] || "default");
        var o, i = r.data;
        if ("object" != n(i)) try {
            i = JSON.parse(i)
        } catch (t) {}
        if ("false" != (r.header.cipher || !1).toString()) {
            for (var a = t.header.signature || "", u = e.SMCrypto.sm3((o = a + ":" + s, P(o) ? o : o.split("").reverse().join(""))).substring(24, 40).split(""), d = 0; d < u.length / 2; d++) {
                var f = u[2 * d];
                u[2 * d] = u[2 * d + 1], u[2 * d + 1] = f
            }
            var l = u.join(""),
                h = m(l),
                g = i.data,
                p = e.SMCrypto.sm4.decrypt(g, h);
            try {
                i = JSON.parse(p)
            } catch (t) {
                i = p
            }
        }
        return i
    },
    D = function(t, n, r, o) {
        var i = new Array;
        if (Object.keys(t).sort().forEach((function(n) {
                var e = t[n];
                if (O(e)) {
                    var r = T(e);
                    i.push(I(n) + "=" + I(r))
                }
            })), O(n)) {
            var a = T(n);
            i.push(I(a))
        }
        i.push("requesttime=" + o), i.push("requestotp=" + r), i.push("secret=" + s);
        var u = i.join("&"),
            c = e.SMCrypto.sm3(o + "##" + s),
            d = e.SMCrypto.sm3(r + "##" + s),
            f = L(u);
        return e.SMCrypto.sm3("[" + c + "#" + e.SMCrypto.sm3(f) + "#" + d + "]")
    };
 function I(t) {
    for (var n = "", e = t.length, r = 0; r < e; ++r) {
        var o = t.charCodeAt(r),
            i = t.charAt(r);
        n += o >= " " && o < 127 ? i : "\\u".concat(o.toString(16).padStart(4, "0"))
    }
    return n
}
var O = function(t) {
        var n = T(t).toLowerCase();
        return !P(n) && !C(n, ["null", "undefined", "{}", "[]"]) && n.length <= 2048
    },
    L = function(t) {
        for (var n = unescape(encodeURIComponent(t)).split("").map((function(t) {
                return t.charCodeAt()
            })), e = "", r = 0; r < n.length; r++) e += String.fromCharCode(n[r]);
        return u(e)
    },
    C = function(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e) {
            for (var r = !1, o = 0; o < n.length; o++)
                if (-1 != n[o].indexOf(t) || -1 != t.indexOf(n[o])) {
                    r = !0;
                    break
                }
            return r
        }
        return -1 != n.indexOf(t)
    },
    T = function(t) {
        return A(t).trim()
    },
    A = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return function(t) {
            return null == t || null == t
        }(t) ? e : "object" == n(t) ? JSON.stringify(t) : t.toString()
    };
exports.addOtherCardType = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.addOtherCardType,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.appointmentCancelByYb = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "post",
            data: t,
            url: r.url.appointmentCancelByYb,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.beforeInHospitalPay = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.beforeInHospitalPay,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.bindHisAppointment = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "post",
            data: t,
            url: r.url.bindHisAppointment,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.bindHisOutpatient = function(t, n) {
    return new Promise((function(e, o) {
        var i = {
            loading: t,
            method: "post",
            data: n,
            url: r.url.bindHisOutpatient,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.bindUser = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.bindUser,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.bindUserNew = function(t) {
    return new Promise((function(n, e) {
        var i = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.bindUserNew,
            header: l()
        };
        return g(i).then((function(t) {
            0 != t.code ? n(t) : o.util.setBaseInfo(t).then((function(e) {
                n(t)
            }))
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.cancelAppointment = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.cancelAppointment,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.cancelAppointmentSuccess = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.cancelAppointmentSuccess,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.cancelYyAppointment = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.cancelYyAppointment,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultApply = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.consultApply,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultCancel = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.consultCancel,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultDetail = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            url: r.url.consultDetail + "/" + t,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultOrder = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.consultOrder,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultPage = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.consultPage,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.consultReview = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.consultReview,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.createArchive = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.createArchive,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.drugSpecification = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.drugSpecification,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.fileUpload = function(t, n) {
    return new Promise((function(e, o) {
        return h(t, r.url.fileUpload, l(), n).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.fileUploadNew = function(t, n) {
    return new Promise((function(e, o) {
        return h(t, r.url.fileUploadNew, l(), n).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.getAddress = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getAddress,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getAppointmentRecord = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getAppointmentRecord,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getAuthNo = function(t, n) {
    return new Promise((function(e, o) {
        var i = {
            loading: t,
            method: "post",
            data: n,
            url: r.url.getAuthNo,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.getBreakAppointmentRecord = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getBreakAppointmentRecord,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getDoctorInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getDoctorInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getGlobalCardInfo = function() {
    var t = c.globalData.cardInfo || [],
        n = {};
    return t.forEach((function(t) {
        t.age = o.util._getAgeByBirthDay(t.birthday), "1" == t.isDefaultFlag && (n = t)
    })), o.util.isEmpty(n) && o.util.isNotEmpty(t) && (t[0].isDefaultFlag = "1"), t
}, exports.getGlobalRegistered = function() {
    return c.globalData.registered || !1
}, exports.getInPatientCase = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getInPatientCase,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getInPatientCasePdf = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getInPatientCasePdf,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getInPatientDrug = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getInPatientDrug,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getInhospitalAccount = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getInhospitalAccount,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getInhospitalInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getInhospitalInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getLisPDF = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getLisPDF,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getMyCaseid = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getMyCaseid,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getOutPatPaidList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getOutPatPaidList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getOutPatientCf = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getOutPatientCf,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getOutpatPayInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getOutpatPayInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getOutpatPayInfoDetail = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getOutpatPayInfoDetail,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPatientHisRegistRecord = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPatientHisRegistRecord,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPatientIndex = function(t) {
    var n = c.globalData.cardInfo || [];
    return n && t ? n.findIndex((function(n) {
        return n.platPid == t
    })) : 0
}, exports.getPatientLis = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPatientLis,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPatientOutiagnosis = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPatientOutiagnosis,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPatientPacs = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPatientPacs,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPatientPath = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPatientPath,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getPhoneNo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getPhoneNo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getScheduleList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getScheduleList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getSchedulePlanList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getSchedulePlanList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getSchedulePublic = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getSchedulePublic,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getSurplusTime = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getSurplusTime,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getTodayDeptList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getTodayDeptList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getTodayDeptSearch = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getTodayDeptSearch,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getTodaySuggest = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getTodaySuggest,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getTzDoctorList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getTzDoctorList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getUserInfoNew = function(t) {
    return new Promise((function(n, e) {
        var i = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getUserInfoNew,
            header: l()
        };
        return g(i).then((function(t) {
            0 != t.code ? n(t) : o.util.setBaseInfo(t).then((function(e) {
                n(t)
            }))
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getVideoReport = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getVideoReport,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getVideoReportBaseSixFour = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getVideoReportBaseSixFour,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getViewLeft = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getViewLeft,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getViewtv = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getViewtv,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyAppointmentTimes = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getYyAppointmentTimes,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyDeptList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getYyDeptList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyDeptSearch = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getYyDeptSearch,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyDoctorList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getYyDoctorList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyRemainPayTime = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getYyRemainPayTime,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYyScheduleList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.getYyScheduleList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.getYySuggest = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.getYySuggest,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.inHospitalInfoSubmit = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.inHospitalInfoSubmit,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.inHospitalPayOrder = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.inHospitalPayOrder,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.login = d, exports.loginByH5 = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(i, a) {
        o.util.isDesktop() ? a({
            message: "Access Denied"
        }) : e.index.login({
            success: function(e) {
                var u = {
                    loading: n,
                    method: "POST",
                    data: {
                        code: e.code,
                        wxmed_authcode: t
                    },
                    url: r.url.loginByH5,
                    header: l()
                };
                return g(u).then((function(t) {
                    if (console.log("H5登录返回：", t), 0 == t.status) return t.data.init && o.util.clearStorage(), f(t.data), void i(t);
                    a(t)
                })).catch((function(t) {
                    a(t)
                }))
            },
            fail: function(t) {
                a(t)
            }
        })
    }))
}, exports.logoutUser = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.logoutUser,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.logoutUserNew = function(t) {
    return new Promise((function(n, e) {
        var i = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.logoutUserNew,
            header: l()
        };
        return g(i).then((function(t) {
            0 != t.code ? n(t) : o.util.setBaseInfo(t).then((function(e) {
                n(t)
            }))
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.needSubMessage = function(t, n) {
    console.log("app:", c);
    var r = c.globalData.hospitalInfo.subMessageArrays[t] || [];
    e.index.getSetting({
        withSubscriptions: !0,
        success: function(t) {
            var e = t.subscriptionsSetting || {};
            if (o.util.isFalse(e.mainSwitch)) return console.warn("订阅消息失败：用户关闭了主开关"), void(n && n(!1));
            var i = e.itemSettings || {},
                a = r.filter((function(t) {
                    return o.util.isEmpty(i[t])
                }));
            n && n(a.length > 0)
        },
        fail: function() {
            n && n(!1)
        }
    })
}, exports.orderDetailRequest = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "POST",
            url: r.url.orderDetailRequest + "/" + t,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orderStatusRequest = function(t, n) {
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "POST",
            url: r.url.orderStatus + "/" + t,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.orgDeptDetail = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            url: r.url.orgDeptDetail + "/" + t,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgDeptList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.orgDeptList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgDict = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "POST",
            data: t,
            url: r.url.orgDict,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgPersonDetail = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            url: r.url.orgPersonDetail + "/" + t,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgPersonList = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.orgPersonList,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgPersonPage = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.orgPersonPage,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.orgReviewPage = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "POST",
            data: t,
            url: r.url.orgReviewPage,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.outpatientPay = function(t, n) {
    return new Promise((function(e, o) {
        var i = {
            loading: t,
            method: "post",
            data: n,
            url: r.url.outpatientPay,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.pageMsg = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.pageMsg,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.pdfToImg = function(t) {
    return new Promise((function(n, o) {
        e.index.showLoading({
            title: "拼命加载中...",
            mask: !0
        }), e.index.request({
            url: c.globalData.apiDomain + c.globalData.service + r.url.pdfToImg,
            method: "GET",
            data: t,
            responseType: "arraybuffer",
            success: function(t) {
                console.log("接口原始输出res：", t), n(t)
            },
            fail: function(t) {
                console.log("接口原始输出err：", t), o(t)
            },
            complete: function() {
                e.index.hideLoading()
            }
        })
    }))
}, exports.pubList = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "post",
            data: t,
            url: r.url.pubList,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.queryArchiveInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.queryArchiveInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryInHosInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.queryInHosInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryInHospitalPaidRecord = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.queryInHospitalPaidRecord,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryInhospitalInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.queryInhospitalInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryMessageIsOpen = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.queryMessageIsOpen,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryOrder = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "get",
            data: t,
            url: r.url.queryOrder,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryOtherAreaNumber = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.queryOtherAreaNumber,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.querySendMsgCount = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "POST",
            data: t,
            url: r.url.querySendMsgCount,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.queryYyOtherAreaNumber = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.queryYyOtherAreaNumber,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.quickRegister = function(t) {
    return new Promise((function(n, e) {
        var i = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.quickRegister,
            header: l()
        };
        return g(i).then((function(t) {
            0 != t.code ? n(t) : o.util.setBaseInfo(t).then((function(e) {
                n(t)
            }))
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.searchPublicity = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.searchPublicity,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.sendBatchReadMsg = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.sendBatchReadMsg,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.sendFileMsg = function(t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise((function(o, i) {
        var a = {
            formData: t,
            filePath: n
        };
        return h(e, r.url.sendFileMsg, l(), a).then((function(t) {
            o(t)
        })).catch((function(t) {
            i(t)
        }))
    }))
}, exports.sendRecallMsg = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.sendRecallMsg,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.sendTextMsg = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.sendTextMsg,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.sendVedioOrAudioMsg = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !1,
            method: "POST",
            data: t,
            url: "1" == t.callType ? r.url.sendAudioMsg : r.url.sendVideoMsg,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.setDefault = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.setDefault,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.setGlobalRegistered = function(t) {
    c.globalData.registered = t
}, exports.settlementReturn = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.settlementReturn,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.todayAppointmentCreateOrder = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "post",
            data: t,
            url: r.url.todayAppointmentCreateOrder,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
}, exports.unBindPatient = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.unBindPatient,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.updateMessageIsOpen = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.updateMessageIsOpen,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.updatePatientInfo = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.updatePatientInfo,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.userReal = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.userReal,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.userRegisterNew = function(t) {
    return new Promise((function(n, e) {
        var i = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.userRegisterNew,
            header: l()
        };
        return g(i).then((function(t) {
            0 != t.code ? n(t) : o.util.setBaseInfo(t).then((function(e) {
                n(t)
            }))
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.verifyUser = function(t) {
    return new Promise((function(n, e) {
        var o = {
            loading: !0,
            method: "post",
            data: t,
            url: r.url.verifyUser,
            header: l()
        };
        return g(o).then((function(t) {
            n(t)
        })).catch((function(t) {
            e(t)
        }))
    }))
}, exports.yyAppointmentCreateOrder = function(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return new Promise((function(e, o) {
        var i = {
            loading: n,
            method: "post",
            data: t,
            url: r.url.yyAppointmentCreateOrder,
            header: l()
        };
        return g(i).then((function(t) {
            e(t)
        })).catch((function(t) {
            o(t)
        }))
    }))
};