
var e, t, n = 0;
module.exports = (e = {}, function(t) {
    var o = "1.7.0",
        r = "537048168",
        i = !0,
        s = {
            FORMAL: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            }
        },
        u = {},
        a = "openim",
        c = "group_open_http_svc",
        l = "sns",
        p = "profile",
        f = "recentcontact",
        g = "openpic",
        d = "group_open_http_noauth_svc",
        m = "group_open_long_polling_http_noauth_svc",
        I = "imopenstat",
        M = {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v1",
            group_open_long_polling_http_noauth_svc: "v1",
            imopenstat: "v4"
        },
        y = {
            login: 1,
            pic_up: 3,
            apply_join_group: 9,
            create_group: 10,
            longpolling: 18,
            send_group_msg: 19,
            sendmsg: 20
        },
        h = {
            C2C: "C2C",
            GROUP: "GROUP"
        },
        E = "OK",
        _ = "FAIL",
        T = {
            TEXT: "TIMTextElem",
            FACE: "TIMFaceElem",
            IMAGE: "TIMImageElem",
            CUSTOM: "TIMCustomElem",
            SOUND: "TIMSoundElem",
            FILE: "TIMFileElem",
            LOCATION: "TIMLocationElem",
            GROUP_TIP: "TIMGroupTipElem"
        },
        C = {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        },
        A = {
            RAW_DATA: 0,
            BASE64_DATA: 1
        },
        S = "10001",
        v = 2106,
        F = 2107,
        G = {
            IMAGE: 1,
            FILE: 2,
            SHORT_VIDEO: 3,
            SOUND: 4
        },
        b = {
            APP_VERSION: "2.1",
            SERVER_VERSION: 1
        },
        N = 1,
        R = 3,
        O = 4,
        L = 5,
        D = 6,
        k = 7,
        w = 8,
        P = 9,
        U = 10,
        q = 92,
        x = {
            COMMON: 0,
            LOVEMSG: 1,
            TIP: 2,
            REDPACKET: 3
        },
        B = 1,
        K = 3,
        z = {
            JOIN: 1,
            QUIT: 2,
            KICK: 3,
            SET_ADMIN: 4,
            CANCEL_ADMIN: 5,
            MODIFY_GROUP_INFO: 6,
            MODIFY_MEMBER_INFO: 7
        },
        J = {
            FACE_URL: 1,
            NAME: 2,
            OWNER: 3,
            NOTIFICATION: 4,
            INTRODUCTION: 5
        },
        H = {
            JOIN_GROUP_REQUEST: 1,
            JOIN_GROUP_ACCEPT: 2,
            JOIN_GROUP_REFUSE: 3,
            KICK: 4,
            DESTORY: 5,
            CREATE: 6,
            INVITED_JOIN_GROUP_REQUEST: 7,
            QUIT: 8,
            SET_ADMIN: 9,
            CANCEL_ADMIN: 10,
            REVOKE: 11,
            READED: 15,
            CUSTOM: 255
        },
        V = {
            FRIEND_ADD: 1,
            FRIEND_DELETE: 2,
            PENDENCY_ADD: 3,
            PENDENCY_DELETE: 4,
            BLACK_LIST_ADD: 5,
            BLACK_LIST_DELETE: 6,
            PENDENCY_REPORT: 7,
            FRIEND_UPDATE: 8
        },
        Y = 1,
        X = {
            INIT: -1,
            ON: 0,
            RECONNECT: 1,
            OFF: 9999
        },
        Q = 14,
        W = X.INIT,
        j = !1,
        $ = 0,
        Z = 6e4,
        ee = null,
        te = 0,
        ne = 0,
        oe = 0,
        re = [],
        ie = null,
        se = {
            sdkAppID: null,
            appIDAt3rd: null,
            accountType: null,
            identifier: null,
            tinyid: null,
            identifierNick: null,
            userSig: null,
            a2: null,
            contentType: "json",
            apn: 1
        },
        ue = {},
        ae = 0,
        ce = {},
        le = 0,
        pe = [],
        fe = [],
        ge = [],
        de = {
            downloadMap: {}
        },
        me = {
            "[惊讶]": 0,
            "[撇嘴]": 1,
            "[色]": 2,
            "[发呆]": 3,
            "[得意]": 4,
            "[流泪]": 5,
            "[害羞]": 6,
            "[闭嘴]": 7,
            "[睡]": 8,
            "[大哭]": 9,
            "[尴尬]": 10,
            "[发怒]": 11,
            "[调皮]": 12,
            "[龇牙]": 13,
            "[微笑]": 14,
            "[难过]": 15,
            "[酷]": 16,
            "[冷汗]": 17,
            "[抓狂]": 18,
            "[吐]": 19,
            "[偷笑]": 20,
            "[可爱]": 21,
            "[白眼]": 22,
            "[傲慢]": 23,
            "[饿]": 24,
            "[困]": 25,
            "[惊恐]": 26,
            "[流汗]": 27,
            "[憨笑]": 28,
            "[大兵]": 29,
            "[奋斗]": 30,
            "[咒骂]": 31,
            "[疑问]": 32,
            "[嘘]": 33,
            "[晕]": 34
        },
        Ie = {},
        Me = new function() {
            this.formatTimeStamp = function(e, t) {
                if (!e) return 0;
                var n;
                t = t || "yyyy-MM-dd hh:mm:ss";
                var o = new Date(1e3 * e),
                    r = {
                        "M+": o.getMonth() + 1,
                        "d+": o.getDate(),
                        "h+": o.getHours(),
                        "m+": o.getMinutes(),
                        "s+": o.getSeconds()
                    };
                for (var i in n = /(y+)/.test(t) ? t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)) : t, r) new RegExp("(" + i + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
                return n
            }, this.groupTypeEn2Ch = function(e) {
                var t = null;
                switch (e) {
                    case "Public":
                        t = "公开群";
                        break;
                    case "ChatRoom":
                        t = "聊天室";
                        break;
                    case "Private":
                        t = "讨论组";
                        break;
                    case "AVChatRoom":
                        t = "直播聊天室";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.groupTypeCh2En = function(e) {
                var t = null;
                switch (e) {
                    case "公开群":
                        t = "Public";
                        break;
                    case "聊天室":
                        t = "ChatRoom";
                        break;
                    case "讨论组":
                        t = "Private";
                        break;
                    case "直播聊天室":
                        t = "AVChatRoom";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.groupRoleEn2Ch = function(e) {
                var t = null;
                switch (e) {
                    case "Member":
                        t = "成员";
                        break;
                    case "Admin":
                        t = "管理员";
                        break;
                    case "Owner":
                        t = "群主";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.groupRoleCh2En = function(e) {
                var t = null;
                switch (e) {
                    case "成员":
                        t = "Member";
                        break;
                    case "管理员":
                        t = "Admin";
                        break;
                    case "群主":
                        t = "Owner";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.groupMsgFlagEn2Ch = function(e) {
                var t = null;
                switch (e) {
                    case "AcceptAndNotify":
                        t = "接收并提示";
                        break;
                    case "AcceptNotNotify":
                        t = "接收不提示";
                        break;
                    case "Discard":
                        t = "屏蔽";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.groupMsgFlagCh2En = function(e) {
                var t = null;
                switch (e) {
                    case "接收并提示":
                        t = "AcceptAndNotify";
                        break;
                    case "接收不提示":
                        t = "AcceptNotNotify";
                        break;
                    case "屏蔽":
                        t = "Discard";
                        break;
                    default:
                        t = e
                }
                return t
            }, this.formatText2Html = function(e) {
                var t = e;
                return t && (t = (t = (t = this.xssFilter(t)).replace(/ /g, "&nbsp;")).replace(/\n/g, "<br/>")), t
            }, this.formatHtml2Text = function(e) {
                var t = e;
                return t && (t = (t = t.replace(/&nbsp;/g, " ")).replace(/<br\/>/g, "\n")), t
            }, this.getStrBytes = function(e) {
                if (null == e || void 0 === e) return 0;
                if ("string" != typeof e) return 0;
                var t, n, o, r = 0;
                for (n = 0, o = e.length; n < o; n++) r += (t = e.charCodeAt(n)) <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
                return r
            }, this.xssFilter = function(e) {
                return e = (e = (e = (e = e.toString()).replace(/[<]/g, "&lt;")).replace(/[>]/g, "&gt;")).replace(/"/g, "&quot;")
            }, this.trimStr = function(e) {
                return e ? (e = e.toString()).replace(/(^\s*)|(\s*$)/g, "") : ""
            }, this.validNumber = function(e) {
                return (e = e.toString()).match(/(^\d{1,8}$)/g)
            }, this.getReturnError = function(e, t) {
                return t || (t = -100), {
                    ActionStatus: _,
                    ErrorCode: t,
                    ErrorInfo: e + "[" + t + "]"
                }
            }, this.setCookie = function(e, t, n, o, r) {
                var i = new Date;
                i.setTime(i.getTime() + 1e3 * n), document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString()
            }, this.getCookie = function(e) {
                var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return null != t ? unescape(t[2]) : null
            }, this.delCookie = function(e) {
                var t = new Date;
                t.setTime(t.getTime() - 1);
                var n = this.getCookie(e);
                null != n && (document.cookie = e + "=" + escape(n) + ";expires=" + t.toGMTString())
            }, this.getQueryString = function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                    n = location.search.substr(1).match(t);
                return null != n ? unescape(n[2]) : null
            }
        },
        ye = new function() {
            var e = !0;
            this.setOn = function(t) {
                e = t
            }, this.getOn = function() {
                return e
            }, this.error = function(t) {
                try {
                    e && console.error(t)
                } catch (e) {}
            }, this.warn = function(t) {
                try {
                    e && console.warn(t)
                } catch (e) {}
            }, this.info = function(t) {
                try {
                    e && console.info(t)
                } catch (e) {}
            }, this.debug = function(t) {
                try {
                    e && console.debug(t)
                } catch (e) {}
            }
        },
        he = function(e) {
            return e || (e = new Date), Math.round(e.getTime() / 1e3)
        },
        Ee = function() {
            return le ? le += 1 : le = Math.round(1e7 * Math.random()), le
        },
        _e = function() {
            return Math.round(4294967296 * Math.random())
        },
        Te = function(e, t, o, r, i, s, u) {
            ! function(e, t, o, r, i, s, u) {
                n++, ce[ae++] = wx.request({
                    url: t + "&reqSeq=" + n,
                    data: o,
                    dataType: "json",
                    method: e,
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(e) {
                        $ = te = 0, s && s(e.data)
                    },
                    fail: function(e) {
                        setTimeout((function() {
                            var e = Me.getReturnError("请求服务器失败,请检查你的网络是否正常", -2);
                            u && u(e)
                        }), 16)
                    }
                })
            }(e, t, JSON.stringify(o), 0, 0, (function(e) {
                var t = null;
                e && (t = e), s && s(t)
            }), u)
        },
        Ce = function() {
            return se.sdkAppID && se.identifier
        },
        Ae = function(e, t) {
            if (!Ce()) {
                if (t) {
                    var n = Me.getReturnError("请登录", -4);
                    e && e(n)
                }
                return !1
            }
            return !0
        },
        Se = function() {
            return i
        },
        ve = function(e, t, n, i) {
            var u = s;
            u = Se() ? s.FORMAL.COMMON : s.TEST.COMMON, e == g && (u = Se() ? s.FORMAL.PIC : s.TEST.PIC);
            var a = u + "/" + M[e] + "/" + e + "/" + t + "?websdkappid=" + r + "&v=" + o;
            if (Ce()) {
                if ("login" == t) a += "&identifier=" + encodeURIComponent(se.identifier) + "&usersig=" + se.userSig;
                else if (se.tinyid && se.a2) a += "&tinyid=" + se.tinyid + "&a2=" + se.a2;
                else if (i) return ye.error("tinyid或a2为空[" + e + "][" + t + "]"), i(Me.getReturnError("tinyid或a2为空[" + e + "][" + t + "]", -5)), !1;
                a += "&contenttype=" + se.contentType
            }
            return a += "&sdkappid=" + se.sdkAppID + "&accounttype=" + se.accountType + "&apn=" + se.apn + "&reqtime=" + he()
        },
        Fe = function(e, t, n) {
            var o = null;
            return ie && re[0] ? o = "http://" + re[0] + "/asn.com/stddownload_common_file?authkey=" + ie + "&bid=" + S + "&subbid=" + se.sdkAppID + "&fileid=" + e + "&filetype=" + F + "&openid=" + t + "&ver=0&filename=" + encodeURIComponent(n) : ye.error("拼接文件下载url不报错：ip或者authkey为空"), de.downloadMap["uuid_" + e] = o, o
        },
        Ge = function(e, t, n, o, r, i, s) {
            var u = {
                From_Account: t,
                To_Account: r,
                os_platform: 10,
                Timestamp: he().toString(),
                Random: _e().toString(),
                request_info: [{
                    busi_id: i,
                    download_flag: o,
                    type: s,
                    uuid: e,
                    version: b.SERVER_VERSION,
                    auth_key: ie,
                    ip: re[0]
                }]
            };
            Be(u, (function(e) {
                0 == e.error_code && e.response_info && (de.downloadMap["uuid_" + u.uuid] = e.response_info.url), onAppliedDownloadUrl && onAppliedDownloadUrl({
                    uuid: u.uuid,
                    url: e.response_info.url,
                    maps: de.downloadMap
                })
            }), (function(e) {
                ye.error("获取下载地址失败", u.uuid)
            }))
        },
        be = function() {
            ! function() {
                for (var e in ce) {
                    var t = ce[e];
                    t && (t.abort(), ce[ae] = null)
                }
                ae = 0, ce = {}
            }(), se = {
                sdkAppID: null,
                appIDAt3rd: null,
                accountType: null,
                identifier: null,
                identifierNick: null,
                userSig: null,
                contentType: "json",
                apn: 1
            }, ue = {}, le = 0, ge = [], Ye.clear(), ee = null
        },
        Ne = function(e, t, n) {
            if ("longpolling" != e || 60008 != t && 91101 != t) {
                var r = y[e];
                if (r) {
                    var i = he(),
                        s = null,
                        u = {
                            Code: t,
                            ErrMsg: n
                        };
                    if (se.a2 ? s = se.a2.substring(0, 10) + "_" + i + "_" + _e() : se.userSig && (s = se.userSig.substring(0, 10) + "_" + i + "_" + _e()), s) {
                        var a = {
                            UniqKey: s,
                            EventId: r,
                            ReportTime: i,
                            MsgCmdErrorCode: u
                        };
                        if ("login" == e) {
                            var c = [];
                            c.push(a), qe({
                                EvtItems: c,
                                MainVersion: o,
                                Version: "0"
                            }, (function(e) {
                                c = null
                            }), (function(e) {
                                c = null
                            }))
                        } else ge.push(a), ge.length >= 20 && qe({
                            EvtItems: ge,
                            MainVersion: o,
                            Version: "0"
                        }, (function(e) {
                            ge = []
                        }), (function(e) {
                            ge = []
                        }))
                    }
                }
            }
        },
        Re = function(e, t) {
            Ke.apiCall(a, "login", {
                State: "Online"
            }, (function(n) {
                if (n.TinyId) se.tinyid = n.TinyId;
                else if (t) return void t(Me.getReturnError("TinyId is empty", -10));
                if (n.A2Key) se.a2 = n.A2Key;
                else if (t) return void t(Me.getReturnError("A2Key is empty", -11));
                var o = {
                    From_Account: se.identifier,
                    To_Account: [se.identifier],
                    LastStandardSequence: 0,
                    TagList: ["Tag_Profile_IM_Nick", "Tag_Profile_IM_Image"]
                };
                Pe(o, (function(t) {
                    var n, o;
                    if (t.UserProfileItem && t.UserProfileItem.length > 0)
                        for (var r in t.UserProfileItem)
                            for (var i in t.UserProfileItem[r].ProfileItem) switch (t.UserProfileItem[r].ProfileItem[i].Tag) {
                                case "Tag_Profile_IM_Nick":
                                    (n = t.UserProfileItem[r].ProfileItem[i].Value) && (se.identifierNick = n);
                                    break;
                                case "Tag_Profile_IM_Image":
                                    (o = t.UserProfileItem[r].ProfileItem[i].Value) && (se.headurl = o)
                            }
                    e && e(se.identifierNick, se.headurl)
                }), t)
            }), t)
        },
        Oe = function(e, t, n) {
            if (!Ae(n, !1)) return be(), void(t && t({
                ActionStatus: E,
                ErrorCode: 0,
                ErrorInfo: "logout success"
            }));
            "all" == e ? Ke.apiCall(a, "logout", {}, (function(e) {
                be(), t && t(e)
            }), n) : Ke.apiCall(a, "longpollinglogout", {
                LongPollingId: ee
            }, (function(e) {
                be(), t && t(e)
            }), n)
        },
        Le = function(e, t, n, o) {
            if (Ae(o, !0)) {
                var r = [];
                for (var i in t) {
                    var s = {
                        To_Account: t[i].toAccount,
                        LastedMsgTime: t[i].lastedMsgTime
                    };
                    r.push(s)
                }
                Ke.apiCall(a, "msgreaded", {
                    C2CMsgReaded: {
                        Cookie: e,
                        C2CMsgReadedItem: r
                    }
                }, n, o)
            }
        },
        De = function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "get_joined_group_list", {
                Member_Account: e.Member_Account,
                Limit: e.Limit,
                Offset: e.Offset,
                GroupType: e.GroupType,
                ResponseFilter: {
                    GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                    SelfInfoFilter: e.SelfInfoFilter
                }
            }, t, n)
        },
        ke = function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "msg_read_report", {
                GroupId: e.GroupId,
                MsgReadedSeq: e.MsgReadedSeq
            }, t, n)
        },
        we = function(e) {
            var t = [];
            if (e.Fail_Account && e.Fail_Account.length && (t = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length)
                for (var n in e.Invalid_Account) t.push(e.Invalid_Account[n]);
            if (t.length)
                for (var o in e.ActionStatus = _, e.ErrorCode = 99999, e.ErrorInfo = "", t) {
                    var r = t[o];
                    for (var i in e.ResultItem)
                        if (e.ResultItem[i].To_Account == r) {
                            var s = e.ResultItem[i].ResultCode;
                            e.ResultItem[i].ResultInfo = "[" + s + "]" + e.ResultItem[i].ResultInfo, e.ErrorInfo += e.ResultItem[i].ResultInfo + "\n";
                            break
                        }
                }
            return e
        },
        Pe = function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(p, "portrait_get", {
                From_Account: se.identifier,
                To_Account: e.To_Account,
                TagList: e.TagList
            }, (function(e) {
                var o = [];
                if (e.Fail_Account && e.Fail_Account.length && (o = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length)
                    for (var r in e.Invalid_Account) o.push(e.Invalid_Account[r]);
                if (o.length)
                    for (var i in e.ActionStatus = _, e.ErrorCode = 99999, e.ErrorInfo = "", o) {
                        var s = o[i];
                        for (var u in e.UserProfileItem)
                            if (e.UserProfileItem[u].To_Account == s) {
                                var a = e.UserProfileItem[u].ResultCode;
                                e.UserProfileItem[u].ResultInfo = "[" + a + "]" + e.UserProfileItem[u].ResultInfo, e.ErrorInfo += "账号:" + s + "," + e.UserProfileItem[u].ResultInfo + "\n";
                                break
                            }
                    }
                e.ActionStatus == _ ? n && n(e) : t && t(e)
            }), n)
        },
        Ue = function(e, t, n) {
            var o;
            Ae(n, !0) && (o = Se() ? "pic_up" : "pic_up_test", Ke.apiCall(g, o, {
                App_Version: b.APP_VERSION,
                From_Account: se.identifier,
                To_Account: e.To_Account,
                Seq: e.Seq,
                Timestamp: e.Timestamp,
                Random: e.Random,
                File_Str_Md5: e.File_Str_Md5,
                File_Size: e.File_Size,
                File_Type: e.File_Type,
                Server_Ver: b.SERVER_VERSION,
                Auth_Key: ie,
                Busi_Id: e.Busi_Id,
                PkgFlag: e.PkgFlag,
                Slice_Offset: e.Slice_Offset,
                Slice_Size: e.Slice_Size,
                Slice_Data: e.Slice_Data
            }, t, n))
        },
        qe = function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(I, "web_report", e, t, n)
        },
        xe = function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(a, "getlongpollingid", {}, (function(e) {
                t && t(e)
            }), n)
        },
        Be = function(e, t, n) {
            Ke.apiCall(g, "apply_download", e, t, n)
        };
    u = "wechat";
    var Ke = new function() {
            var e = null;
            this.init = function(t, n, o) {
                t && (e = t)
            }, this.callBack = function(t) {
                e && e(t)
            }, this.clear = function() {
                e = null
            }, this.apiCall = function(e, t, n, o, r, i, s) {
                var u = ve(e, t, 0, r);
                0 != u && Te("POST", u, n, 0, 0, (function(i) {
                    var s = null,
                        a = "";
                    "pic_up" == t && (n.Slice_Data = "");
                    var c = "\n request url: \n" + u + "\n request body: \n" + JSON.stringify(n) + "\n response: \n" + JSON.stringify(i);
                    i.ActionStatus == E ? (ye.info("[" + e + "][" + t + "]success: " + c), o && o(i), s = 0, a = "") : (s = i.ErrorCode, a = i.ErrorInfo, r && (i.SrcErrorInfo = i.ErrorInfo, i.ErrorInfo = "[" + e + "][" + t + "]failed: " + c, "longpolling" == t && 60008 == i.ErrorCode || ye.error(i.ErrorInfo), r(i))), Ne(t, s, a)
                }), (function(e) {
                    r && r(e), Ne(t, e.ErrorCode, e.ErrorInfo)
                }))
            }
        },
        ze = function e(t, n, o, r, i, s) {
            this._impl = {
                skey: e.skey(t, n),
                type: t,
                id: n,
                name: o,
                icon: r,
                unread: 0,
                isAutoRead: !1,
                time: i >= 0 ? i : 0,
                curMaxMsgSeq: s >= 0 ? s : 0,
                msgs: [],
                isFinished: 1
            }
        };
    ze.skey = function(e, t) {
        return e + t
    }, ze.prototype.type = function() {
        return this._impl.type
    }, ze.prototype.id = function() {
        return this._impl.id
    }, ze.prototype.name = function() {
        return this._impl.name
    }, ze.prototype.icon = function() {
        return this._impl.icon
    }, ze.prototype.unread = function(e) {
        if (void 0 === e) return this._impl.unread;
        this._impl.unread = e
    }, ze.prototype.isFinished = function(e) {
        if (void 0 === e) return this._impl.isFinished;
        this._impl.isFinished = e
    }, ze.prototype.time = function() {
        return this._impl.time
    }, ze.prototype.curMaxMsgSeq = function(e) {
        if (void 0 === e) return this._impl.curMaxMsgSeq;
        this._impl.curMaxMsgSeq = e
    }, ze.prototype.msgCount = function() {
        return this._impl.msgs.length
    }, ze.prototype.msg = function(e) {
        return this._impl.msgs[e]
    }, ze.prototype.msgs = function() {
        return this._impl.msgs
    }, ze.prototype._impl_addMsg = function(e) {
        this._impl.msgs.push(e), e.time > this._impl.time && (this._impl.time = e.time), e.seq > this._impl.curMaxMsgSeq && (this._impl.curMaxMsgSeq = e.seq), e.isSend || this._impl.isAutoRead || this._impl.unread++
    };
    var Je = function(e, t) {
            this.toAccount = e, this.lastedMsgTime = t
        },
        He = function(e, t, n, o, r, i, s, u) {
            this.sess = e, this.subType = s >= 0 ? s : 0, this.fromAccount = i, this.fromAccountNick = u || i, this.isSend = Boolean(t), this.seq = n >= 0 ? n : Ee(), this.random = o >= 0 ? o : _e(), this.time = r >= 0 ? r : he(), this.elems = []
        };
    He.prototype.getSession = function() {
        return this.sess
    }, He.prototype.getType = function() {
        return this.subType
    }, He.prototype.getSubType = function() {
        return this.subType
    }, He.prototype.getFromAccount = function() {
        return this.fromAccount
    }, He.prototype.getFromAccountNick = function() {
        return this.fromAccountNick
    }, He.prototype.getIsSend = function() {
        return this.isSend
    }, He.prototype.getSeq = function() {
        return this.seq
    }, He.prototype.getTime = function() {
        return this.time
    }, He.prototype.getRandom = function() {
        return this.random
    }, He.prototype.getElems = function() {
        return this.elems
    }, He.prototype.addText = function(e) {
        this.addElem(new t.Msg.Elem(T.TEXT, e))
    }, He.prototype.addFace = function(e) {
        this.addElem(new t.Msg.Elem(T.FACE, e))
    }, He.prototype.addImage = function(e) {
        this.addElem(new t.Msg.Elem(T.IMAGE, e))
    }, He.prototype.addLocation = function(e) {
        this.addElem(new t.Msg.Elem(T.LOCATION, e))
    }, He.prototype.addFile = function(e) {
        this.addElem(new t.Msg.Elem(T.FILE, e))
    }, He.prototype.addCustom = function(e) {
        this.addElem(new t.Msg.Elem(T.CUSTOM, e))
    }, He.prototype.addElem = function(e) {
        this.elems.push(e)
    }, He.prototype.toHtml = function() {
        var e = "";
        for (var t in this.elems) e += this.elems[t].toHtml();
        return e
    }, (He.Elem = function(e, t) {
        this.type = e, this.content = t
    }).prototype.getType = function() {
        return this.type
    }, He.Elem.prototype.getContent = function() {
        return this.content
    }, He.Elem.prototype.toHtml = function() {
        return this.content.toHtml()
    }, He.Elem.Text = function(e) {
        this.text = Me.xssFilter(e)
    }, He.Elem.Text.prototype.getText = function() {
        return this.text
    }, He.Elem.Text.prototype.toHtml = function() {
        return this.text
    }, He.Elem.Face = function(e, t) {
        this.index = e, this.data = t
    }, He.Elem.Face.prototype.getIndex = function() {
        return this.index
    }, He.Elem.Face.prototype.getData = function() {
        return this.data
    }, He.Elem.Face.prototype.toHtml = function() {
        var e = null,
            t = me[this.data],
            n = Ie[t];
        return n && n[1] && (e = n[1]), e ? "<img src='" + e + "'/>" : this.data
    }, He.Elem.Location = function(e, t, n) {
        this.latitude = t, this.longitude = e, this.desc = n
    }, He.Elem.Location.prototype.getLatitude = function() {
        return this.latitude
    }, He.Elem.Location.prototype.getLongitude = function() {
        return this.longitude
    }, He.Elem.Location.prototype.getDesc = function() {
        return this.desc
    }, He.Elem.Location.prototype.toHtml = function() {
        return "经度=" + this.longitude + ",纬度=" + this.latitude + ",描述=" + this.desc
    }, He.Elem.Images = function(e) {
        this.UUID = e, this.ImageInfoArray = []
    }, He.Elem.Images.prototype.addImage = function(e) {
        this.ImageInfoArray.push(e)
    }, He.Elem.Images.prototype.toHtml = function() {
        var e = this.getImage(C.SMALL),
            t = this.getImage(C.LARGE),
            n = this.getImage(C.ORIGIN);
        return t || (t = e), n || (n = e), "<img src='" + e.getUrl() + "#" + t.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + t.getUrl() + "' onclick='imageClick(this)' />"
    }, He.Elem.Images.prototype.getImageId = function() {
        return this.UUID
    }, He.Elem.Images.prototype.getImage = function(e) {
        for (var t in this.ImageInfoArray)
            if (this.ImageInfoArray[t].getType() == e) return this.ImageInfoArray[t];
        return null
    }, He.Elem.Images.Image = function(e, t, n, o, r) {
        this.type = e, this.size = t, this.width = n, this.height = o, this.url = r
    }, He.Elem.Images.Image.prototype.getType = function() {
        return this.type
    }, He.Elem.Images.Image.prototype.getSize = function() {
        return this.size
    }, He.Elem.Images.Image.prototype.getWidth = function() {
        return this.width
    }, He.Elem.Images.Image.prototype.getHeight = function() {
        return this.height
    }, He.Elem.Images.Image.prototype.getUrl = function() {
        return this.url
    }, He.Elem.Sound = function(e, t, n, o, r, i, s) {
        this.uuid = e, this.second = t, this.size = n, this.senderId = o, this.receiverId = r, this.downFlag = i, this.busiId = s == h.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? Ge(e, o, 0, i, r, this.busiId, G.SOUND) : this.downUrl = function(e, t) {
            var n = null;
            return ie && re[0] ? n = "http://" + re[0] + "/asn.com/stddownload_common_file?authkey=" + ie + "&bid=" + S + "&subbid=" + se.sdkAppID + "&fileid=" + e + "&filetype=" + v + "&openid=" + t + "&ver=0" : ye.error("拼接语音下载url不报错：ip或者authkey为空"), n
        }(e, o)
    }, He.Elem.Sound.prototype.getUUID = function() {
        return this.uuid
    }, He.Elem.Sound.prototype.getSecond = function() {
        return this.second
    }, He.Elem.Sound.prototype.getSize = function() {
        return this.size
    }, He.Elem.Sound.prototype.getSenderId = function() {
        return this.senderId
    }, He.Elem.Sound.prototype.getDownUrl = function() {
        return this.downUrl
    }, He.Elem.Sound.prototype.toHtml = function() {
        return "ie" == u.type && parseInt(u.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + this.downUrl : '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>'
    }, He.Elem.File = function(e, t, n, o, r, i, s) {
        this.uuid = e, this.name = t, this.size = n, this.senderId = o, this.receiverId = r, this.downFlag = i, this.busiId = s == h.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? Ge(e, o, 0, i, r, this.busiId, G.FILE) : this.downUrl = Fe(e, o, t)
    }, He.Elem.File.prototype.getUUID = function() {
        return this.uuid
    }, He.Elem.File.prototype.getName = function() {
        return this.name
    }, He.Elem.File.prototype.getSize = function() {
        return this.size
    }, He.Elem.File.prototype.getSenderId = function() {
        return this.senderId
    }, He.Elem.File.prototype.getDownUrl = function() {
        return this.downUrl
    }, He.Elem.File.prototype.getDownFlag = function() {
        return this.downFlag
    }, He.Elem.File.prototype.toHtml = function() {
        var e, t;
        return e = this.size, t = "Byte", this.size >= 1024 && (e = Math.round(this.size / 1024), t = "KB"), '<a href="javascript" onclick="webim.onDownFile("' + this.uuid + '")" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + this.name + "(" + e + t + ")</i></a>"
    }, He.Elem.GroupTip = function(e, t, n, o, r) {
        this.opType = e, this.opUserId = t, this.groupId = n, this.groupName = o, this.userIdList = r || [], this.groupInfoList = [], this.memberInfoList = [], this.groupMemberNum = null
    }, He.Elem.GroupTip.prototype.addGroupInfo = function(e) {
        this.groupInfoList.push(e)
    }, He.Elem.GroupTip.prototype.addMemberInfo = function(e) {
        this.memberInfoList.push(e)
    }, He.Elem.GroupTip.prototype.getOpType = function() {
        return this.opType
    }, He.Elem.GroupTip.prototype.getOpUserId = function() {
        return this.opUserId
    }, He.Elem.GroupTip.prototype.getGroupId = function() {
        return this.groupId
    }, He.Elem.GroupTip.prototype.getGroupName = function() {
        return this.groupName
    }, He.Elem.GroupTip.prototype.getUserIdList = function() {
        return this.userIdList
    }, He.Elem.GroupTip.prototype.getGroupInfoList = function() {
        return this.groupInfoList
    }, He.Elem.GroupTip.prototype.getMemberInfoList = function() {
        return this.memberInfoList
    }, He.Elem.GroupTip.prototype.getGroupMemberNum = function() {
        return this.groupMemberNum
    }, He.Elem.GroupTip.prototype.setGroupMemberNum = function(e) {
        return this.groupMemberNum = e
    }, He.Elem.GroupTip.prototype.toHtml = function() {
        var e = "[群提示消息]";
        switch (this.opType) {
            case z.JOIN:
                for (var t in e += this.opUserId + "邀请了", this.userIdList)
                    if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                        e += "等" + this.userIdList.length + "人";
                        break
                    }
                e += "加入该群";
                break;
            case z.QUIT:
                e += this.opUserId + "主动退出该群";
                break;
            case z.KICK:
                for (var t in e += this.opUserId + "将", this.userIdList)
                    if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                        e += "等" + this.userIdList.length + "人";
                        break
                    }
                e += "踢出该群";
                break;
            case z.SET_ADMIN:
                for (var t in e += this.opUserId + "将", this.userIdList)
                    if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                        e += "等" + this.userIdList.length + "人";
                        break
                    }
                e += "设为管理员";
                break;
            case z.CANCEL_ADMIN:
                for (var t in e += this.opUserId + "取消", this.userIdList)
                    if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                        e += "等" + this.userIdList.length + "人";
                        break
                    }
                e += "的管理员资格";
                break;
            case z.MODIFY_GROUP_INFO:
                for (var t in e += this.opUserId + "修改了群资料：", this.groupInfoList) {
                    var n = this.groupInfoList[t].getType(),
                        o = this.groupInfoList[t].getValue();
                    switch (n) {
                        case J.FACE_URL:
                            e += "群头像为" + o + "; ";
                            break;
                        case J.NAME:
                            e += "群名称为" + o + "; ";
                            break;
                        case J.OWNER:
                            e += "群主为" + o + "; ";
                            break;
                        case J.NOTIFICATION:
                            e += "群公告为" + o + "; ";
                            break;
                        case J.INTRODUCTION:
                            e += "群简介为" + o + "; ";
                            break;
                        default:
                            e += "未知信息为:type=" + n + ",value=" + o + "; "
                    }
                }
                break;
            case z.MODIFY_MEMBER_INFO:
                for (var t in e += this.opUserId + "修改了群成员资料:", this.memberInfoList) {
                    var r = this.memberInfoList[t].getUserId(),
                        i = this.memberInfoList[t].getShutupTime();
                    if (e += r + ": ", e += null != i && void 0 !== i ? 0 == i ? "取消禁言; " : "禁言" + i + "秒; " : " shutupTime为空", this.memberInfoList.length > 10 && 9 == t) {
                        e += "等" + this.memberInfoList.length + "人";
                        break
                    }
                }
                break;
            case z.READED:
                Log.info("消息已读同步");
                break;
            default:
                e += "未知群提示消息类型：type=" + this.opType
        }
        return e
    }, He.Elem.GroupTip.GroupInfo = function(e, t) {
        this.type = e, this.value = t
    }, He.Elem.GroupTip.GroupInfo.prototype.getType = function() {
        return this.type
    }, He.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
        return this.value
    }, He.Elem.GroupTip.MemberInfo = function(e, t) {
        this.userId = e, this.shutupTime = t
    }, He.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
        return this.userId
    }, He.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
        return this.shutupTime
    }, He.Elem.Custom = function(e, t, n) {
        this.data = e, this.desc = t, this.ext = n
    }, He.Elem.Custom.prototype.getData = function() {
        return this.data
    }, He.Elem.Custom.prototype.getDesc = function() {
        return this.desc
    }, He.Elem.Custom.prototype.getExt = function() {
        return this.ext
    }, He.Elem.Custom.prototype.toHtml = function() {
        return this.data
    };
    var Ve = new function() {
            var t = {},
                n = [];
            e = {}, this.cookie = "", this.syncFlag = 0;
            var o = function(e) {
                for (var n in t) e(t[n])
            };
            this.sessMap = function() {
                return t
            }, this.sessCount = function() {
                return n.length
            }, this.sessByTypeId = function(e, n) {
                var o = ze.skey(e, n);
                return void 0 === o || null == o ? null : t[o]
            }, this.delSessByTypeId = function(n, o) {
                var r = ze.skey(n, o);
                return void 0 !== r && null != r && (t[r] && (delete t[r], delete e[r]), !0)
            }, this.resetCookieAndSyncFlag = function() {
                this.cookie = "", this.syncFlag = 0
            }, this.setAutoRead = function(e, t, n) {
                if (n && o((function(e) {
                        e._impl.isAutoRead = !1
                    })), e && (e._impl.isAutoRead = t, t))
                    if (e._impl.unread = 0, e._impl.type == h.C2C) {
                        var r = [];
                        r.push(new Je(e._impl.id, e._impl.time)), Le(Ve.cookie, r, (function(e) {
                            ye.info("[setAutoRead]: c2CMsgReaded success")
                        }), (function(e) {
                            ye.error("[setAutoRead}: c2CMsgReaded failed:" + e.ErrorInfo)
                        }))
                    } else if (e._impl.type == h.GROUP) {
                    var i = {
                        GroupId: e._impl.id,
                        MsgReadedSeq: e._impl.curMaxMsgSeq
                    };
                    ke(i, (function(e) {
                        ye.info("groupMsgReaded success")
                    }), (function(e) {
                        ye.error("groupMsgReaded failed:" + e.ErrorInfo)
                    }))
                }
            }, this.c2CMsgReaded = function(e, t, n) {
                var o = [];
                o.push(new Je(e.To_Account, e.LastedMsgTime)), Le(Ve.cookie, o, (function(e) {
                    t && (ye.info("c2CMsgReaded success"), t(e))
                }), (function(e) {
                    n && (ye.error("c2CMsgReaded failed:" + e.ErrorInfo), n(e))
                }))
            }, this.addSession = function(e) {
                t[e._impl.skey] = e
            }, this.delSession = function(e) {
                delete t[e._impl.skey]
            }, this.addMsg = function(n) {
                if (function(t) {
                        var n = !1,
                            o = t.sess._impl.skey,
                            r = t.isSend + t.seq + t.random;
                        return e[o] && e[o][r] && (n = !0), e[o] || (e[o] = {}), e[o][r] = {
                            time: t.time
                        }, n
                    }(n)) return !1;
                var o = n.sess;
                return t[o._impl.skey] || this.addSession(o), o._impl_addMsg(n), !0
            }, this.updateTimeline = function() {
                var e = new Array;
                o((function(t) {
                    e.push(t)
                })), e.sort((function(e, t) {
                    return t.time - e.time
                })), n = e
            }
        },
        Ye = new function() {
            var e = null,
                t = null,
                n = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null,
                    10: null,
                    11: null,
                    15: null,
                    255: null
                },
                o = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null
                },
                r = {
                    1: null
                },
                s = null,
                u = !1,
                l = 0,
                p = 0,
                f = null,
                g = !1,
                d = 0,
                I = 90,
                M = null,
                y = {},
                C = 0,
                A = {},
                S = {};
            this.setLongPollingOn = function(e) {
                u = e
            }, this.getLongPollingOn = function() {
                return u
            }, this.resetLongPollingInfo = function() {
                u = !1, l = 0, p = 0
            }, this.setBigGroupLongPollingOn = function(e) {
                g = e
            }, this.setBigGroupLongPollingKey = function(e) {
                M = e
            }, this.resetBigGroupLongPollingInfo = function() {
                g = !1, d = 0, M = null, y = {}
            }, this.setBigGroupLongPollingMsgMap = function(e, t) {
                var n = y[e];
                n ? (n = parseInt(n) + t, y[e] = n) : y[e] = t
            }, this.clear = function() {
                t = null, n = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null,
                    10: null,
                    11: null,
                    15: null,
                    255: null
                }, o = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null
                }, r = {
                    1: null
                }, e = null, u = !1, l = 0, p = 0, f = null, g = !1, d = 0, M = null, y = {}, S = {}, re = [], ie = null
            };
            var v = function(e, t) {
                    ! function(e, t) {
                        Ae(t, !0) && Ke.apiCall(a, "authkey", {}, e, t)
                    }((function(t) {
                        re = t.IpList, ie = t.AuthKey, t.ExpireTime, e && e(t)
                    }), (function(e) {
                        ye.error("initIpAndAuthkey failed:" + e.ErrorInfo), t && t(e)
                    }))
                },
                F = function(e, t, n) {
                    C++;
                    var o = {
                        GroupId: e,
                        ReqMsgSeq: t,
                        ReqMsgNumber: n
                    };
                    ye.warn("第" + C + "次补齐群消息,参数=" + JSON.stringify(o)), Ye.syncGroupMsgs(o)
                },
                G = function(e, t) {
                    var n = A[e];
                    n ? t > n && (A[e] = t) : A[e] = t
                },
                b = function(e, t) {
                    for (var n in e) {
                        var o = e[n];
                        if (o.From_Account) {
                            var r = he(o, !1, !0);
                            r && t.push(r), G(o.ToGroupId, o.MsgSeq)
                        }
                    }
                    return t
                },
                ne = function(t, n) {
                    var o = {},
                        r = [];
                    for (var i in n) {
                        var s = o[n[i].ToGroupId];
                        s || (s = o[n[i].ToGroupId] = {
                            min: 99999999,
                            max: -1,
                            msgs: []
                        }), n[i].NoticeSeq > p && (ye.warn("noticeSeq=" + p + ",msgNoticeSeq=" + n[i].NoticeSeq), p = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq)
                    }
                    for (var u in o) {
                        var a = o[u].max - o[u].min + 1,
                            c = A[u];
                        c ? o[u].min - c > 1 || o[u].msgs.length < a ? (ye.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + c + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), F(u, o[u].max, o[u].max - c), G(u, o[u].max)) : r = b(o[u].msgs, r) : (ye.warn("不存在该群的最大消息seq，群id=" + u), o[u].msgs.length < a ? (ye.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), F(u, o[u].max, a), G(u, o[u].max)) : r = b(o[u].msgs, r))
                    }
                    r.length && Ve.updateTimeline(), e && r.length && e(r)
                },
                oe = function(t, n) {
                    var o = {},
                        r = [];
                    for (var i in n) {
                        var s = o[n[i].ToGroupId];
                        s || (s = o[n[i].ToGroupId] = {
                            min: 99999999,
                            max: -1,
                            msgs: []
                        }), n[i].NoticeSeq > p && (ye.warn("noticeSeq=" + p + ",msgNoticeSeq=" + n[i].NoticeSeq), p = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq)
                    }
                    for (var u in o) {
                        var a = o[u].max - o[u].min + 1,
                            c = A[u];
                        c ? o[u].min - c > 1 || o[u].msgs.length < a ? (ye.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + c + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), F(u, o[u].max, o[u].max - c), G(u, o[u].max)) : r = b(o[u].msgs, r) : (ye.warn("不存在该群的最大消息seq，群id=" + u), o[u].msgs.length < a ? (ye.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), F(u, o[u].max, a), G(u, o[u].max)) : r = b(o[u].msgs, r))
                    }
                    r.length && Ve.updateTimeline(), e && r.length && e(r)
                },
                ue = function(e, t) {
                    for (var o in e) {
                        var r = e[o],
                            i = r.MsgBody,
                            s = i.ReportType;
                        if (0 == t && r.NoticeSeq && r.NoticeSeq > p && (p = r.NoticeSeq), r.GroupInfo.To_Account, t) {
                            var u = r.ToGroupId + "_" + s + "_" + i.Operator_Account;
                            if (S[u]) {
                                ye.warn("收到重复的群系统消息：key=" + u);
                                continue
                            }
                            S[u] = !0
                        }
                        var a = {
                            SrcFlag: 0,
                            ReportType: s,
                            GroupId: r.ToGroupId,
                            GroupName: r.GroupInfo.GroupName,
                            Operator_Account: i.Operator_Account,
                            MsgTime: r.MsgTimeStamp,
                            groupReportTypeMsg: i
                        };
                        switch (s) {
                            case H.JOIN_GROUP_REQUEST:
                                a.RemarkInfo = i.RemarkInfo, a.MsgKey = i.MsgKey, a.Authentication = i.Authentication, a.UserDefinedField = r.UserDefinedField, a.From_Account = r.From_Account, a.MsgSeq = r.ClientSeq, a.MsgRandom = r.MsgRandom;
                                break;
                            case H.JOIN_GROUP_ACCEPT:
                            case H.JOIN_GROUP_REFUSE:
                                a.RemarkInfo = i.RemarkInfo;
                                break;
                            case H.KICK:
                            case H.DESTORY:
                            case H.CREATE:
                            case H.INVITED_JOIN_GROUP_REQUEST:
                            case H.QUIT:
                            case H.SET_ADMIN:
                            case H.CANCEL_ADMIN:
                            case H.REVOKE:
                            case H.READED:
                                break;
                            case H.CUSTOM:
                                a.MsgSeq = r.MsgSeq, a.UserDefinedField = i.UserDefinedField;
                                break;
                            default:
                                ye.error("未知群系统消息类型：reportType=" + s)
                        }
                        if (t) s == H.JOIN_GROUP_REQUEST && n[s] && n[s](a);
                        else if (n[s])
                            if (s == H.READED)
                                for (var c = a.groupReportTypeMsg.GroupReadInfoArray, l = 0, f = c.length; l < f; l++) {
                                    var g = c[l];
                                    n[s](g)
                                } else n[s](a)
                    }
                },
                ae = function(e, t) {
                    var n, r, i;
                    for (var s in e) {
                        switch (r = (n = e[s]).PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > p && (p = n.NoticeSeq), i = {
                            Type: r
                        }, r) {
                            case V.FRIEND_ADD:
                                i.Accounts = n.FriendAdd_Account;
                                break;
                            case V.FRIEND_DELETE:
                                i.Accounts = n.FriendDel_Account;
                                break;
                            case V.PENDENCY_ADD:
                                i.PendencyList = n.PendencyAdd;
                                break;
                            case V.PENDENCY_DELETE:
                                i.Accounts = n.FrienPencydDel_Account;
                                break;
                            case V.BLACK_LIST_ADD:
                                i.Accounts = n.BlackListAdd_Account;
                                break;
                            case V.BLACK_LIST_DELETE:
                                i.Accounts = n.BlackListDel_Account;
                                break;
                            default:
                                ye.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(n))
                        }
                        t ? r == V.PENDENCY_ADD && o[r] && o[r](i) : o[r] && o[r](i)
                    }
                },
                ce = function(e, t) {
                    var n, o, i;
                    for (var s in e) {
                        switch (o = (n = e[s]).PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > p && (p = n.NoticeSeq), i = {
                            Type: o
                        }, o) {
                            case Y:
                                i.Profile_Account = n.Profile_Account, i.ProfileList = n.ProfileList;
                                break;
                            default:
                                ye.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(n))
                        }
                        t ? o == Y && r[o] && r[o](i) : r[o] && r[o](i)
                    }
                },
                le = function(e) {
                    var t = e.MsgBody,
                        o = t.ReportType,
                        r = (e.GroupInfo.To_Account, {
                            SrcFlag: 1,
                            ReportType: o,
                            GroupId: e.ToGroupId,
                            GroupName: e.GroupInfo.GroupName,
                            Operator_Account: t.Operator_Account,
                            MsgTime: e.MsgTimeStamp
                        });
                    switch (o) {
                        case H.JOIN_GROUP_REQUEST:
                            r.RemarkInfo = t.RemarkInfo, r.MsgKey = t.MsgKey, r.Authentication = t.Authentication, r.UserDefinedField = e.UserDefinedField, r.From_Account = e.From_Account, r.MsgSeq = e.ClientSeq, r.MsgRandom = e.MsgRandom;
                            break;
                        case H.JOIN_GROUP_ACCEPT:
                        case H.JOIN_GROUP_REFUSE:
                            r.RemarkInfo = t.RemarkInfo;
                            break;
                        case H.KICK:
                        case H.DESTORY:
                        case H.CREATE:
                        case H.INVITED_JOIN_GROUP_REQUEST:
                        case H.QUIT:
                        case H.SET_ADMIN:
                        case H.CANCEL_ADMIN:
                        case H.REVOKE:
                            break;
                        case H.CUSTOM:
                            r.MsgSeq = e.MsgSeq, r.UserDefinedField = t.UserDefinedField;
                            break;
                        default:
                            ye.error("未知群系统消息类型：reportType=" + o)
                    }
                    n[o] && n[o](r)
                },
                ge = function(e) {
                    for (var t = 0, n = e.length; t < n; t++) de(e[t])
                },
                de = function(e) {
                    var t = e.SubMsgType;
                    switch (t) {
                        case q:
                            break;
                        default:
                            ye.error("未知C2c系统消息：reportType=" + reportType)
                    }
                    if (e.ReadC2cMsgNotify.UinPairReadArray && onC2cEventCallbacks[t])
                        for (var n = 0, o = e.ReadC2cMsgNotify.UinPairReadArray.length; n < o; n++) {
                            var r = e.ReadC2cMsgNotify.UinPairReadArray[n];
                            onC2cEventCallbacks[t](r)
                        }
                };
            this.longPolling = function(e, t) {
                var n = {
                    Timeout: Z / 1e3,
                    Cookie: {
                        NotifySeq: l,
                        NoticeSeq: p
                    }
                };
                 function o() {
                    ! function(e, t, n) {
                        (i || "undefined" == typeof stopPolling || 1 != stopPolling) && Ae(n, !0) && Ke.apiCall(a, "longpolling", e, t, n, Z, !0)
                    }(n, (function(e) {
                        for (var t in e.EventArray) {
                            var n = e.EventArray[t];
                            switch (n.Event) {
                                case N:
                                    l = n.NotifySeq, ye.warn("longpolling: received new c2c msg"), Ye.syncMsgs();
                                    break;
                                case R:
                                    ye.warn("longpolling: received new group msgs"), oe(n.Event, n.GroupMsgArray);
                                    break;
                                case O:
                                    ye.warn("longpolling: received new group tips"), oe(n.Event, n.GroupTips);
                                    break;
                                case L:
                                    ye.warn("longpolling: received new group system msgs"), ue(n.GroupTips, !1);
                                    break;
                                case k:
                                    ye.warn("longpolling: received new friend system notice"), ae(n.FriendListMod, !1);
                                    break;
                                case w:
                                    ye.warn("longpolling: received new profile system notice"), ce(n.ProfileDataMod, !1);
                                    break;
                                case P:
                                    p = n.C2cMsgArray[0].NoticeSeq, ye.warn("longpolling: received new c2c_common msg", p), ne(n.Event, n.C2cMsgArray);
                                    break;
                                case U:
                                    p = n.C2cNotifyMsgArray[0].NoticeSeq, ye.warn("longpolling: received new c2c_event msg"), ge(n.C2cNotifyMsgArray);
                                    break;
                                default:
                                    ye.error("longpolling收到未知新消息类型: Event=" + n.Event)
                            }
                        }
                        me({
                            ActionStatus: E,
                            ErrorCode: 0
                        })
                    }), (function(e) {
                        me(e), t && t(e)
                    }))
                }
                ee ? (n.Cookie.LongPollingId = ee, o()) : xe(0, (function(e) {
                    ee = n.Cookie.LongPollingId = e.LongPollingId, Z = e.Timeout > 60 ? Z : 1e3 * e.Timeout, o()
                }))
            }, this.bigGroupLongPolling = function(e, t) {
                ! function(e, t, n, o) {
                    Ke.apiCall(m, "get_msg", e, t, n, o)
                }({
                    StartSeq: d,
                    HoldTime: I,
                    Key: M
                }, (function(t) {
                    var n = [];
                    if (d = t.NextSeq, I = t.HoldTime, M = t.Key, t.RspMsgList && t.RspMsgList.length > 0) {
                        for (var o, r, i, s = 0, u = t.RspMsgList.length - 1; u >= 0; u--)
                            if (!(o = t.RspMsgList[u]).IsPlaceMsg && o.From_Account && o.MsgBody && 0 != o.MsgBody.length) switch (r = o.Event) {
                                case R:
                                    ye.info("bigGroupLongPolling: return new group msg"), (i = he(o, !1, !1)) && n.push(i), s += 1;
                                    break;
                                case O:
                                case D:
                                    ye.info("bigGroupLongPolling: return new group tip"), (i = he(o, !1, !1)) && n.push(i);
                                    break;
                                case L:
                                    ye.info("bigGroupLongPolling: new group system msg"), le(o);
                                    break;
                                default:
                                    ye.error("bigGroupLongPolling收到未知新消息类型: Event=" + r)
                            }
                            s > 0 && (Ye.setBigGroupLongPollingMsgMap(o.ToGroupId, s), ye.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(y)))
                    }
                    te = 0;
                    var a = {
                        ActionStatus: E,
                        ErrorCode: X.ON,
                        ErrorInfo: "connection is ok..."
                    };
                    Ke.callBack(a), e ? e(n) : f && f(n), g && Ye.bigGroupLongPolling()
                }), (function(e) {
                    if (60008 != e.ErrorCode && (ye.error(e.ErrorInfo), te++), 91101 != e.ErrorCode && (ye.error("多实例登录，被kick"), s && s()), te < 10) g && Ye.bigGroupLongPolling();
                    else {
                        var n = {
                            ActionStatus: _,
                            ErrorCode: X.OFF,
                            ErrorInfo: "connection is off"
                        };
                        Ke.callBack(n)
                    }
                    t && t(e)
                }), 1e3 * I)
            };
            var me = function(e) {
                    if (0 == e.ErrorCode || 60008 == e.ErrorCode) {
                        var t;
                        $ = 0, j = !1;
                        var n = !1;
                        switch (W) {
                            case X.INIT:
                                n = !0, W = X.ON, t = "create connection successfully(INIT->ON)";
                                break;
                            case X.ON:
                                t = "connection is on...(ON->ON)";
                                break;
                            case X.RECONNECT:
                                W = X.ON, t = "connection is on...(RECONNECT->ON)";
                                break;
                            case X.OFF:
                                n = !0, W = X.RECONNECT, t = "reconnect successfully(OFF->RECONNECT)"
                        }
                        var o = {
                            ActionStatus: E,
                            ErrorCode: W,
                            ErrorInfo: t
                        };
                        n && Ke.callBack(o), u && Ye.longPolling()
                    } else if (91101 == e.ErrorCode) ye.error("多实例登录，被kick"), s && s();
                    else if ($++, ye.warn("longPolling接口第" + $ + "次报错: " + e.ErrorInfo), $ <= 10) setTimeout(Ie, 100);
                    else {
                        W = X.OFF;
                        var r = {
                            ActionStatus: _,
                            ErrorCode: X.OFF,
                            ErrorInfo: "connection is off"
                        };
                        0 == j && Ke.callBack(r), j = !0, ye.warn("5000毫秒之后,SDK会发起新的longPolling请求..."), setTimeout(Ie, 5e3)
                    }
                },
                Ie = (ne = function(t, n) {
                    var o, r = [];
                    for (var i in o = n) {
                        var s, u, a, c = o[i];
                        c.From_Account == se.identifier ? (s = !0, u = c.To_Account, a = "") : (s = !1, u = c.From_Account, a = "");
                        var l = Ve.sessByTypeId(h.C2C, u);
                        l || (l = new ze(h.C2C, u, u, a, 0, 0));
                        var p = new He(l, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account),
                            f = null,
                            g = null,
                            d = null;
                        for (var m in c.MsgBody) {
                            switch (d = (f = c.MsgBody[m]).MsgType) {
                                case T.TEXT:
                                    g = new He.Elem.Text(f.MsgContent.Text);
                                    break;
                                case T.FACE:
                                    g = new He.Elem.Face(f.MsgContent.Index, f.MsgContent.Data);
                                    break;
                                case T.IMAGE:
                                    for (var I in g = new He.Elem.Images(f.MsgContent.UUID), f.MsgContent.ImageInfoArray) {
                                        var M = f.MsgContent.ImageInfoArray[I];
                                        g.addImage(new He.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL))
                                    }
                                    break;
                                case T.SOUND:
                                    f.MsgContent ? g = new He.Elem.Sound(f.MsgContent.UUID, f.MsgContent.Second, f.MsgContent.Size, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, h.C2C) : (d = T.TEXT, g = new He.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;
                                case T.LOCATION:
                                    g = new He.Elem.Location(f.MsgContent.Longitude, f.MsgContent.Latitude, f.MsgContent.Desc);
                                    break;
                                case T.FILE:
                                case T.FILE + " ":
                                    d = T.FILE, f.MsgContent ? g = new He.Elem.File(f.MsgContent.UUID, f.MsgContent.FileName, f.MsgContent.FileSize, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, h.C2C) : (d = T.TEXT, g = new He.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;
                                case T.CUSTOM:
                                    try {
                                        var y = JSON.parse(f.MsgContent.Data);
                                        if (y && y.userAction && y.userAction == Q) continue
                                    } catch (e) {}
                                    d = T.CUSTOM, g = new He.Elem.Custom(f.MsgContent.Data, f.MsgContent.Desc, f.MsgContent.Ext);
                                    break;
                                default:
                                    d = T.TEXT, g = new He.Elem.Text("web端暂不支持" + f.MsgType + "消息")
                            }
                            p.elems.push(new He.Elem(d, g))
                        }
                        p.elems.length > 0 && Ve.addMsg(p) && r.push(p)
                    }
                    r.length > 0 && Ve.updateTimeline(), r.length > 0 && e && e(r)
                }, function() {
                    u && Ye.longPolling()
                });
            this.syncMsgs = function(t, n) {
                var o = [],
                    r = [];
                ! function e(t, n, o, r) {
                    Ae(r, !0) && Ke.apiCall(a, "getmsg", {
                        Cookie: t,
                        SyncFlag: n
                    }, (function(t) {
                        if (t.MsgList && t.MsgList.length)
                            for (var n in t.MsgList) pe.push(t.MsgList[n]);
                        1 == t.SyncFlag ? e(t.Cookie, t.SyncFlag, o, r) : (t.MsgList = pe, pe = [], o && o(t))
                    }), r)
                }(Ve.cookie, Ve.syncFlag, (function(n) {
                    for (var i in 2 == n.SyncFlag && (Ve.syncFlag = 0), r = n.MsgList, Ve.cookie = n.Cookie, r) {
                        var s, u, a, c = r[i];
                        c.From_Account == se.identifier ? (s = !0, u = c.To_Account, a = "") : (s = !1, u = c.From_Account, a = "");
                        var l = Ve.sessByTypeId(h.C2C, u);
                        l || (l = new ze(h.C2C, u, u, a, 0, 0));
                        var p = new He(l, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account),
                            f = null,
                            g = null,
                            d = null;
                        for (var m in c.MsgBody) {
                            switch (d = (f = c.MsgBody[m]).MsgType) {
                                case T.TEXT:
                                    g = new He.Elem.Text(f.MsgContent.Text);
                                    break;
                                case T.FACE:
                                    g = new He.Elem.Face(f.MsgContent.Index, f.MsgContent.Data);
                                    break;
                                case T.IMAGE:
                                    for (var I in g = new He.Elem.Images(f.MsgContent.UUID), f.MsgContent.ImageInfoArray) {
                                        var M = f.MsgContent.ImageInfoArray[I];
                                        g.addImage(new He.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL))
                                    }
                                    break;
                                case T.SOUND:
                                    f.MsgContent ? g = new He.Elem.Sound(f.MsgContent.UUID, f.MsgContent.Second, f.MsgContent.Size, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, h.C2C) : (d = T.TEXT, g = new He.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;
                                case T.LOCATION:
                                    g = new He.Elem.Location(f.MsgContent.Longitude, f.MsgContent.Latitude, f.MsgContent.Desc);
                                    break;
                                case T.FILE:
                                case T.FILE + " ":
                                    d = T.FILE, f.MsgContent ? g = new He.Elem.File(f.MsgContent.UUID, f.MsgContent.FileName, f.MsgContent.FileSize, c.From_Account, c.To_Account, f.MsgContent.Download_Flag, h.C2C) : (d = T.TEXT, g = new He.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;
                                case T.CUSTOM:
                                    try {
                                        var y = JSON.parse(f.MsgContent.Data);
                                        if (y && y.userAction && y.userAction == Q) continue
                                    } catch (e) {}
                                    d = T.CUSTOM, g = new He.Elem.Custom(f.MsgContent.Data, f.MsgContent.Desc, f.MsgContent.Ext);
                                    break;
                                default:
                                    d = T.TEXT, g = new He.Elem.Text("web端暂不支持" + f.MsgType + "消息")
                            }
                            p.elems.push(new He.Elem(d, g))
                        }
                        p.elems.length > 0 && Ve.addMsg(p) && o.push(p)
                    }! function(e) {
                        for (var t in e) {
                            var n = e[t];
                            switch (n.Event) {
                                case L:
                                    ye.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg"), ue(n.GroupTips, !0);
                                    break;
                                default:
                                    ye.error("syncMsgs收到未知的群系统消息类型: Event=" + n.Event)
                            }
                        }
                    }(n.EventArray), o.length > 0 && Ve.updateTimeline(), t ? t(o) : o.length > 0 && e && e(o)
                }), (function(e) {
                    ye.error("getMsgs failed:" + e.ErrorInfo), n && n(e)
                }))
            }, this.getC2CHistoryMsgs = function(e, t, n) {
                if (e.Peer_Account || !n)
                    if (e.MaxCnt || (e.MaxCnt = 15), e.MaxCnt <= 0 && n) n(Me.getReturnError("MaxCnt should be greater than 0", -14));
                    else {
                        if (e.MaxCnt > 15) return n ? void n(Me.getReturnError("MaxCnt can not be greater than 15", -15)) : void 0;
                        null != e.MsgKey && void 0 !== e.MsgKey || (e.MsgKey = ""),
                            function e(t, n, o) {
                                Ae(o, !0) && Ke.apiCall(a, "getroammsg", t, (function(r) {
                                    var i = t.MaxCnt,
                                        s = r.Complete,
                                        u = r.MaxCnt,
                                        a = r.MsgKey,
                                        c = r.LastMsgTime;
                                    if (r.MsgList && r.MsgList.length)
                                        for (var l in r.MsgList) fe.push(r.MsgList[l]);
                                    var p = null;
                                    0 == s && u < i && (p = {
                                        Peer_Account: t.Peer_Account,
                                        MaxCnt: i - u,
                                        LastMsgTime: c,
                                        MsgKey: a
                                    }), p ? e(p, n, o) : (r.MsgList = fe, fe = [], n && n(r))
                                }), o)
                            }({
                                Peer_Account: e.Peer_Account,
                                MaxCnt: e.MaxCnt,
                                LastMsgTime: e.LastMsgTime,
                                MsgKey: e.MsgKey
                            }, (function(n) {
                                var o, r = [];
                                o = n.MsgList;
                                var i = Ve.sessByTypeId(h.C2C, e.Peer_Account);
                                for (var s in i || (i = new ze(h.C2C, e.Peer_Account, e.Peer_Account, "", 0, 0)), o) {
                                    var u, a = o[s];
                                    a.From_Account == se.identifier ? (u = !0, a.To_Account) : (u = !1, a.From_Account);
                                    var c = new He(i, u, a.MsgSeq, a.MsgRandom, a.MsgTimeStamp, a.From_Account),
                                        l = null,
                                        p = null,
                                        f = null;
                                    for (var g in a.MsgBody) {
                                        switch (f = (l = a.MsgBody[g]).MsgType) {
                                            case T.TEXT:
                                                p = new He.Elem.Text(l.MsgContent.Text);
                                                break;
                                            case T.FACE:
                                                p = new He.Elem.Face(l.MsgContent.Index, l.MsgContent.Data);
                                                break;
                                            case T.IMAGE:
                                                for (var d in p = new He.Elem.Images(l.MsgContent.UUID), l.MsgContent.ImageInfoArray) {
                                                    var m = l.MsgContent.ImageInfoArray[d];
                                                    p.addImage(new He.Elem.Images.Image(m.Type, m.Size, m.Width, m.Height, m.URL))
                                                }
                                                break;
                                            case T.SOUND:
                                                l.MsgContent ? p = new He.Elem.Sound(l.MsgContent.UUID, l.MsgContent.Second, l.MsgContent.Size, a.From_Account, a.To_Account, l.MsgContent.Download_Flag, h.C2C) : (f = T.TEXT, p = new He.Elem.Text("[语音消息]下载地址解析出错"));
                                                break;
                                            case T.LOCATION:
                                                p = new He.Elem.Location(l.MsgContent.Longitude, l.MsgContent.Latitude, l.MsgContent.Desc);
                                                break;
                                            case T.FILE:
                                            case T.FILE + " ":
                                                f = T.FILE, l.MsgContent ? p = new He.Elem.File(l.MsgContent.UUID, l.MsgContent.FileName, l.MsgContent.FileSize, a.From_Account, a.To_Account, l.MsgContent.Download_Flag, h.C2C) : (f = T.TEXT, p = new He.Elem.Text("[文件消息下载地址解析出错]"));
                                                break;
                                            case T.CUSTOM:
                                                f = T.CUSTOM, p = new He.Elem.Custom(l.MsgContent.Data, l.MsgContent.Desc, l.MsgContent.Ext);
                                                break;
                                            default:
                                                f = T.TEXT, p = new He.Elem.Text("web端暂不支持" + l.MsgType + "消息")
                                        }
                                        c.elems.push(new He.Elem(f, p))
                                    }
                                    Ve.addMsg(c), r.push(c)
                                }
                                if (Ve.updateTimeline(), t) {
                                    var I = {
                                        Complete: n.Complete,
                                        MsgCount: r.length,
                                        LastMsgTime: n.LastMsgTime,
                                        MsgKey: n.MsgKey,
                                        MsgList: r
                                    };
                                    i.isFinished(n.Complete), t(I)
                                }
                            }), (function(e) {
                                ye.error("getC2CHistoryMsgs failed:" + e.ErrorInfo), n && n(e)
                            }))
                    } else n(Me.getReturnError("Peer_Account is empty", -13))
            }, this.syncGroupMsgs = function(t, n, o) {
                if (t.ReqMsgSeq <= 0) {
                    if (o) {
                        var r = Me.getReturnError("ReqMsgSeq must be greater than 0", -16);
                        o(r)
                    }
                } else ! function(e, t, n) {
                    Ae(n, !0) && Ke.apiCall(c, "group_msg_get", {
                        GroupId: e.GroupId,
                        ReqMsgSeq: e.ReqMsgSeq,
                        ReqMsgNumber: e.ReqMsgNumber
                    }, t, n)
                }({
                    GroupId: t.GroupId,
                    ReqMsgSeq: t.ReqMsgSeq,
                    ReqMsgNumber: t.ReqMsgNumber
                }, (function(t) {
                    var o = [],
                        r = (t.GroupId, t.RspMsgList),
                        i = t.IsFinished;
                    if (null != r && void 0 !== r) {
                        for (var s = r.length - 1; s >= 0; s--) {
                            var u = r[s];
                            if (!u.IsPlaceMsg && u.From_Account && u.MsgBody && 0 != u.MsgBody.length) {
                                var a = he(u, !0, !0, i);
                                a && o.push(a)
                            }
                        }
                        o.length > 0 && Ve.updateTimeline(), n ? n(o) : o.length > 0 && e && e(o)
                    } else n && n([])
                }), (function(e) {
                    ye.error("getGroupMsgs failed:" + e.ErrorInfo), o && o(e)
                }))
            };
            var he = function(e, n, o, r) {
                if (e.IsPlaceMsg || !e.From_Account || !e.MsgBody || 0 == e.MsgBody.length) return null;
                var i, s, u, a = e.ToGroupId,
                    c = a;
                e.GroupInfo && e.GroupInfo.GroupName && (c = e.GroupInfo.GroupName), u = e.From_Account, e.GroupInfo && e.GroupInfo.From_AccountNick && (u = e.GroupInfo.From_AccountNick), e.From_Account == se.identifier ? (i = !0, e.From_Account, s = "") : (i = !1, e.From_Account, s = "");
                var l = Ve.sessByTypeId(h.GROUP, a);
                l || (l = new ze(h.GROUP, a, c, s, 0, 0)), void 0 !== r && l.isFinished(r || 0);
                var p = x.COMMON;
                if (O == e.Event || D == e.Event) {
                    p = x.TIP;
                    var f = e.MsgBody;
                    e.MsgBody = [], e.MsgBody.push({
                        MsgType: T.GROUP_TIP,
                        MsgContent: f
                    })
                } else e.MsgPriority && (e.MsgPriority == B ? p = x.REDPACKET : e.MsgPriority == K && (p = x.LOVEMSG));
                var g = new He(l, i, e.MsgSeq, e.MsgRandom, e.MsgTimeStamp, e.From_Account, p, u),
                    d = null,
                    m = null,
                    I = null;
                for (var M in e.MsgBody) {
                    switch (I = (d = e.MsgBody[M]).MsgType) {
                        case T.TEXT:
                            m = new He.Elem.Text(d.MsgContent.Text);
                            break;
                        case T.FACE:
                            m = new He.Elem.Face(d.MsgContent.Index, d.MsgContent.Data);
                            break;
                        case T.IMAGE:
                            for (var y in m = new He.Elem.Images(d.MsgContent.UUID), d.MsgContent.ImageInfoArray) m.addImage(new He.Elem.Images.Image(d.MsgContent.ImageInfoArray[y].Type, d.MsgContent.ImageInfoArray[y].Size, d.MsgContent.ImageInfoArray[y].Width, d.MsgContent.ImageInfoArray[y].Height, d.MsgContent.ImageInfoArray[y].URL));
                            break;
                        case T.SOUND:
                            d.MsgContent ? m = new He.Elem.Sound(d.MsgContent.UUID, d.MsgContent.Second, d.MsgContent.Size, e.From_Account, e.To_Account, d.MsgContent.Download_Flag, h.GROUP) : (I = T.TEXT, m = new He.Elem.Text("[语音消息]下载地址解析出错"));
                            break;
                        case T.LOCATION:
                            m = new He.Elem.Location(d.MsgContent.Longitude, d.MsgContent.Latitude, d.MsgContent.Desc);
                            break;
                        case T.FILE:
                        case T.FILE + " ":
                            I = T.FILE, Fe(d.MsgContent.UUID, e.From_Account, d.MsgContent.FileName), d.MsgContent ? m = new He.Elem.File(d.MsgContent.UUID, d.MsgContent.FileName, d.MsgContent.FileSize, e.From_Account, e.To_Account, d.MsgContent.Download_Flag, h.GROUP) : (I = T.TEXT, m = new He.Elem.Text("[文件消息]地址解析出错"));
                            break;
                        case T.GROUP_TIP:
                            var E = d.MsgContent.OpType;
                            if (m = new He.Elem.GroupTip(E, d.MsgContent.Operator_Account, a, e.GroupInfo.GroupName, d.MsgContent.List_Account), z.JOIN == E || z.QUIT == E) m.setGroupMemberNum(d.MsgContent.MemberNum);
                            else if (z.MODIFY_GROUP_INFO == E) {
                                var _ = !1,
                                    C = {
                                        GroupId: a,
                                        GroupFaceUrl: null,
                                        GroupName: null,
                                        OwnerAccount: null,
                                        GroupNotification: null,
                                        GroupIntroduction: null
                                    },
                                    A = d.MsgContent.MsgGroupNewInfo;
                                if (A.GroupFaceUrl) {
                                    var S = new He.Elem.GroupTip.GroupInfo(J.FACE_URL, A.GroupFaceUrl);
                                    m.addGroupInfo(S), _ = !0, C.GroupFaceUrl = A.GroupFaceUrl
                                }
                                if (A.GroupName) {
                                    var v = new He.Elem.GroupTip.GroupInfo(J.NAME, A.GroupName);
                                    m.addGroupInfo(v), _ = !0, C.GroupName = A.GroupName
                                }
                                if (A.Owner_Account) {
                                    var F = new He.Elem.GroupTip.GroupInfo(J.OWNER, A.Owner_Account);
                                    m.addGroupInfo(F), _ = !0, C.OwnerAccount = A.Owner_Account
                                }
                                if (A.GroupNotification) {
                                    var G = new He.Elem.GroupTip.GroupInfo(J.NOTIFICATION, A.GroupNotification);
                                    m.addGroupInfo(G), _ = !0, C.GroupNotification = A.GroupNotification
                                }
                                if (A.GroupIntroduction) {
                                    var b = new He.Elem.GroupTip.GroupInfo(J.INTRODUCTION, A.GroupIntroduction);
                                    m.addGroupInfo(b), _ = !0, C.GroupIntroduction = A.GroupIntroduction
                                }
                                0 == n && _ && t && t(C)
                            } else if (z.MODIFY_MEMBER_INFO == E) {
                                var N = d.MsgContent.MsgMemberInfo;
                                for (var R in N) {
                                    var L = N[R];
                                    m.addMemberInfo(new He.Elem.GroupTip.MemberInfo(L.User_Account, L.ShutupTime))
                                }
                            }
                            break;
                        case T.CUSTOM:
                            I = T.CUSTOM, m = new He.Elem.Custom(d.MsgContent.Data, d.MsgContent.Desc, d.MsgContent.Ext);
                            break;
                        default:
                            I = T.TEXT, m = new He.Elem.Text("web端暂不支持" + d.MsgType + "消息")
                    }
                    g.elems.push(new He.Elem(I, m))
                }
                return 0 == o || Ve.addMsg(g) ? g : null
            };
            this.init = function(i, a, c) {
                i.onMsgNotify || ye.warn("listeners.onMsgNotify is empty"), e = i.onMsgNotify, i.onBigGroupMsgNotify ? f = i.onBigGroupMsgNotify : ye.warn("listeners.onBigGroupMsgNotify is empty"), i.onC2cEventNotifys ? onC2cEventCallbacks = i.onC2cEventNotifys : ye.warn("listeners.onC2cEventNotifys is empty"), i.onGroupSystemNotifys ? n = i.onGroupSystemNotifys : ye.warn("listeners.onGroupSystemNotifys is empty"), i.onGroupInfoChangeNotify ? t = i.onGroupInfoChangeNotify : ye.warn("listeners.onGroupInfoChangeNotify is empty"), i.onFriendSystemNotifys ? o = i.onFriendSystemNotifys : ye.warn("listeners.onFriendSystemNotifys is empty"), i.onProfileSystemNotifys ? r = i.onProfileSystemNotifys : ye.warn("listeners.onProfileSystemNotifys is empty"), i.onKickedEventCall ? s = i.onKickedEventCall : ye.warn("listeners.onKickedEventCall is empty"), i.onAppliedDownloadUrl ? onAppliedDownloadUrl = i.onAppliedDownloadUrl : ye.warn("listeners.onAppliedDownloadUrl is empty"), se.identifier && se.userSig ? function(e, t) {
                    var n = {
                        Member_Account: se.identifier,
                        Limit: 1e3,
                        Offset: 0,
                        GroupBaseInfoFilter: ["NextMsgSeq"]
                    };
                    De(n, (function(t) {
                        if (!t.GroupIdList || 0 == t.GroupIdList.length) return ye.info("initMyGroupMaxSeqs: 目前还没有加入任何群组"), void(e && e(t));
                        for (var n = 0; n < t.GroupIdList.length; n++) {
                            var o = t.GroupIdList[n].GroupId,
                                r = t.GroupIdList[n].NextMsgSeq - 1;
                            A[o] = r
                        }
                        e && e(t)
                    }), (function(e) {
                        ye.error("initMyGroupMaxSeqs failed:" + e.ErrorInfo), t && t(e)
                    }))
                }((function(e) {
                    ye.info("initMyGroupMaxSeqs success"), v((function(e) {
                        ye.info("initIpAndAuthkey success"), a && (ye.info("login success(have login state))"), a({
                            ActionStatus: E,
                            ErrorCode: 0,
                            ErrorInfo: "login success"
                        })), Ye.setLongPollingOn(!0), u && Ye.longPolling(a)
                    }), c)
                }), c) : a && a({
                    ActionStatus: E,
                    ErrorCode: 0,
                    ErrorInfo: "login success(no login state)"
                })
            }, this.sendMsg = function(e, t, n) {
                ! function(e, t, n) {
                    if (Ae(n, !0)) {
                        var o = null;
                        switch (e.sess.type()) {
                            case h.C2C:
                                o = {
                                    From_Account: se.identifier,
                                    To_Account: e.sess.id().toString(),
                                    MsgTimeStamp: e.time,
                                    MsgSeq: e.seq,
                                    MsgRandom: e.random,
                                    MsgBody: []
                                };
                                break;
                            case h.GROUP:
                                var r = e.getSubType();
                                switch (o = {
                                    GroupId: e.sess.id().toString(),
                                    From_Account: se.identifier,
                                    Random: e.random,
                                    MsgBody: []
                                }, r) {
                                    case x.COMMON:
                                        o.MsgPriority = "COMMON";
                                        break;
                                    case x.REDPACKET:
                                        o.MsgPriority = "REDPACKET";
                                        break;
                                    case x.LOVEMSG:
                                        o.MsgPriority = "LOVEMSG";
                                        break;
                                    case x.TIP:
                                        ye.error("不能主动发送群提示消息,subType=" + r);
                                        break;
                                    default:
                                        return void ye.error("发送群消息时，出现未知子消息类型：subType=" + r)
                                }
                        }
                        for (var i in e.elems) {
                            var s = e.elems[i],
                                u = null,
                                l = s.type;
                            switch (l) {
                                case T.TEXT:
                                    u = {
                                        Text: s.content.text
                                    };
                                    break;
                                case T.FACE:
                                    u = {
                                        Index: s.content.index,
                                        Data: s.content.data
                                    };
                                    break;
                                case T.IMAGE:
                                    var p = [];
                                    for (var f in s.content.ImageInfoArray) p.push({
                                        Type: s.content.ImageInfoArray[f].type,
                                        Size: s.content.ImageInfoArray[f].size,
                                        Width: s.content.ImageInfoArray[f].width,
                                        Height: s.content.ImageInfoArray[f].height,
                                        URL: s.content.ImageInfoArray[f].url
                                    });
                                    u = {
                                        UUID: s.content.UUID,
                                        ImageInfoArray: p
                                    };
                                    break;
                                case T.SOUND:
                                    ye.warn("web端暂不支持发送语音消息");
                                    continue;
                                case T.LOCATION:
                                    ye.warn("web端暂不支持发送地理位置消息");
                                    continue;
                                case T.FILE:
                                    u = {
                                        UUID: s.content.uuid,
                                        FileName: s.content.name,
                                        FileSize: s.content.size,
                                        DownloadFlag: s.content.downFlag
                                    };
                                    break;
                                case T.CUSTOM:
                                    u = {
                                        Data: s.content.data,
                                        Desc: s.content.desc,
                                        Ext: s.content.ext
                                    }, l = T.CUSTOM;
                                    break;
                                default:
                                    ye.warn("web端暂不支持发送" + s.type + "消息");
                                    continue
                            }
                            e.PushInfoBoolean && (o.OfflinePushInfo = e.PushInfo), o.MsgBody.push({
                                MsgType: l,
                                MsgContent: u
                            })
                        }
                        e.sess.type() == h.C2C ? Ke.apiCall(a, "sendmsg", o, t, n) : e.sess.type() == h.GROUP && Ke.apiCall(c, "send_group_msg", o, t, n)
                    }
                }(e, (function(o) {
                    if (e.sess.type() == h.C2C) {
                        if (!Ve.addMsg(e)) {
                            var r = "sendMsg: addMsg failed!",
                                i = Me.getReturnError(r, -17);
                            return ye.error(r), void(n && n(i))
                        }
                        Ve.updateTimeline()
                    }
                    t && t(o)
                }), (function(e) {
                    n && n(e)
                }))
            }
        },
        Xe = new function() {
            this.fileMd5 = null, this.submitUploadFileForm = function(e, t, n) {
                var o, r, i = e.formId,
                    s = e.fileId,
                    u = "uploadResultIframe_" + oe++,
                    a = e.To_Account,
                    c = e.businessType,
                    l = document.getElementById(i);
                if (!l) return o = "获取表单对象为空: formId=" + i + "(formId非法)", r = Me.getReturnError(o, -20), void(n && n(r));
                var p = document.getElementById(s);
                if (!p) return o = "获取文件对象为空: fileId=" + s + "(没有选择文件或者fileId非法)", r = Me.getReturnError(o, -21), void(n && n(r));
                p.name = "file";
                var f = document.createElement("iframe");
                f.name = u, f.id = u, f.style.display = "none", document.body.appendChild(f);
                var g = "https://pic.tim.qq.com/v4/openpic/" + (Se() ? "pic_up" : "pic_up_test") + "?tinyid=" + se.tinyid + "&a2=" + se.a2 + "&sdkappid=" + se.sdkAppID + "&accounttype=" + se.accountType + "&contenttype=http";
                 function d(e, t) {
                    var n = document.createElement("input");
                    n.type = "hidden", n.name = e, n.value = t, l.appendChild(n)
                }
                l.action = g, l.method = "post", l.target = u, d("App_Version", b.APP_VERSION), d("From_Account", se.identifier), d("To_Account", a), d("Seq", Ee().toString()), d("Timestamp", he().toString()), d("Random", _e().toString()), d("Busi_Id", c), d("PkgFlag", A.RAW_DATA.toString()), d("Auth_Key", ie), d("Server_Ver", b.SERVER_VERSION.toString()), d("File_Type", e.fileType), setTimeout((function e() {
                    var o;
                    try {
                        o = JSON.parse(f.contentWindow.name) || {}
                    } catch (e) {
                        o = {}
                    }
                    o.ActionStatus ? (f.src = "about:blank", f.parentNode.removeChild(f), f = null, o.ActionStatus == E ? t && t(o) : n && n(o)) : setTimeout(e, 100)
                }), 500), l.submit()
            }, this.uploadFile = function(e, t, n) {
                var o = {
                    init: function(e, t, n) {
                        var o = this;
                        o.file = e.file, o.onProgressCallBack = e.onProgressCallBack, e.abortButton && (e.abortButton.onclick = o.abortHandler), o.total = o.file.size, o.loaded = 0, o.step = 1105920, o.sliceSize = 0, o.sliceOffset = 0, o.timestamp = he(), o.seq = Ee(), o.random = _e(), o.fromAccount = se.identifier, o.toAccount = e.To_Account, o.fileMd5 = e.fileMd5, o.businessType = e.businessType, o.fileType = e.fileType, o.cbOk = t, o.cbErr = n, o.reader = new FileReader, o.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, o.reader.onloadstart = o.onLoadStart, o.reader.onprogress = o.onProgress, o.reader.onabort = o.onAbort, o.reader.onerror = o.onerror, o.reader.onload = o.onLoad, o.reader.onloadend = o.onLoadEnd
                    },
                    upload: function() {
                        o.readBlob(0)
                    },
                    onLoadStart: function() {},
                    onProgress: function(e) {
                        var t = o;
                        t.loaded += e.loaded, t.onProgressCallBack && t.onProgressCallBack(t.loaded, t.total)
                    },
                    onAbort: function() {},
                    onError: function() {},
                    onLoad: function(e) {
                        var t = o;
                        if (e.target.readyState == FileReader.DONE) {
                            var n = e.target.result,
                                r = n.indexOf(","); - 1 != r && (n = n.substr(r + 1));
                            var i = {
                                    From_Account: t.fromAccount,
                                    To_Account: t.toAccount,
                                    Busi_Id: t.businessType,
                                    File_Type: t.fileType,
                                    File_Str_Md5: t.fileMd5,
                                    PkgFlag: A.BASE64_DATA,
                                    File_Size: t.total,
                                    Slice_Offset: t.sliceOffset,
                                    Slice_Size: t.sliceSize,
                                    Slice_Data: n,
                                    Seq: t.seq,
                                    Timestamp: t.timestamp,
                                    Random: t.random
                                },
                                s = function(e) {
                                    if (0 == e.IsFinish) t.loaded = e.Next_Offset, t.loaded < t.total ? t.readBlob(t.loaded) : t.loaded = t.total;
                                    else if (t.cbOk) {
                                        var n = {
                                            ActionStatus: e.ActionStatus,
                                            ErrorCode: e.ErrorCode,
                                            ErrorInfo: e.ErrorInfo,
                                            File_UUID: e.File_UUID,
                                            File_Size: e.Next_Offset,
                                            URL_INFO: e.URL_INFO,
                                            Download_Flag: e.Download_Flag
                                        };
                                        t.fileType == G.FILE && (n.URL_INFO = Fe(e.File_UUID, se.identifier, t.file.name)), t.cbOk(n)
                                    }
                                    ne = 0
                                };
                            Ue(i, s, (function e(n) {
                                ne < 20 ? (ne++, setTimeout((function() {
                                    Ue(i, s, e)
                                }), 1e3)) : t.cbErr(n)
                            }))
                        }
                    },
                    onLoadEnd: function() {},
                    readBlob: function(e) {
                        var t, n = o,
                            r = n.file,
                            i = e + n.step;
                        i > n.total ? (i = n.total, n.sliceSize = i - e) : n.sliceSize = n.step, n.sliceOffset = e, t = n.blobSlice.call(r, e, i), n.reader.readAsDataURL(t)
                    },
                    abortHandler: function() {
                        var e = o;
                        e.reader && e.reader.abort()
                    }
                };
                ! function(e, t, n) {
                    var o = null;
                    try {
                        o = new FileReader
                    } catch (e) {
                        if (n) return void n(Me.getReturnError("当前浏览器不支持FileReader", -18))
                    }
                    var r = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                    if (r || !n) {
                        var i = Math.ceil(e.size / 2097152),
                            s = 0,
                            u = new SparkMD5;
                        o.onload = function(e) {
                            for (var n = "", o = new Uint8Array(e.target.result), r = o.byteLength, c = 0; c < r; c++) n += String.fromCharCode(o[c]);
                            u.appendBinary(n), ++s < i ? a() : (this.fileMd5 = u.end(), t && t(this.fileMd5))
                        }, a()
                    } else n(Me.getReturnError("当前浏览器不支持FileAPI", -19));
                     function a() {
                        var t = 2097152 * s,
                            n = t + 2097152 >= e.size ? e.size : t + 2097152,
                            i = r.call(e, t, n);
                        o.readAsArrayBuffer(i)
                    }
                }(e.file, (function(r) {
                    ye.info("fileMd5: " + r), e.fileMd5 = r, o.init(e, t, n), o.upload()
                }), n)
            }
        };
    t.SESSION_TYPE = h, t.MSG_MAX_LENGTH = {
        C2C: 12e3,
        GROUP: 8898
    }, t.C2C_MSG_SUB_TYPE = {
        COMMON: 0
    }, t.GROUP_MSG_SUB_TYPE = x, t.MSG_ELEMENT_TYPE = T, t.GROUP_TIP_TYPE = z, t.IMAGE_TYPE = C, t.GROUP_SYSTEM_TYPE = H, t.FRIEND_NOTICE_TYPE = V, t.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = J, t.BROWSER_INFO = u, t.Emotions = t.EmotionPicData = Ie, t.EmotionDataIndexs = t.EmotionPicDataIndex = me, t.TLS_ERROR_CODE = {
        OK: 0,
        SIGNATURE_EXPIRATION: 11
    }, t.CONNECTION_STATUS = X, t.UPLOAD_PIC_BUSSINESS_TYPE = {
        GROUP_MSG: 1,
        C2C_MSG: 2,
        USER_HEAD: 3,
        GROUP_HEAD: 4
    }, t.RECENT_CONTACT_TYPE = {
        C2C: 1,
        GROUP: 2
    }, t.UPLOAD_RES_TYPE = G, t.Tool = Me, t.Log = ye, t.Msg = He, t.Session = ze, t.MsgStore = {
        sessMap: function() {
            return Ve.sessMap()
        },
        sessCount: function() {
            return Ve.sessCount()
        },
        sessByTypeId: function(e, t) {
            return Ve.sessByTypeId(e, t)
        },
        delSessByTypeId: function(e, t) {
            return Ve.delSessByTypeId(e, t)
        },
        resetCookieAndSyncFlag: function() {
            return Ve.resetCookieAndSyncFlag()
        }
    }, t.Resources = de, t.login = t.init = function(e, t, n, o, r) {
        Ke.init(t.onConnNotify, o, r), t.jsonpCallback && t.jsonpCallback,
            function(e, t, n, o, r) {
                be(), n && (ue = n), 0 == ue.isAccessFormalEnv && (ye.error("请切换为正式环境"), i = ue.isAccessFormalEnv), 0 == ue.isLogOn && ye.setOn(ue.isLogOn), e || !r ? e.sdkAppID || !r ? e.accountType || !r ? (e.identifier && (se.identifier = e.identifier.toString()), e.identifier && !e.userSig && r ? r(Me.getReturnError("loginInfo.userSig is empty", -9)) : (e.userSig && (se.userSig = e.userSig.toString()), se.sdkAppID = e.sdkAppID, se.accountType = e.accountType, se.identifier && se.userSig ? Re((function(e, n) {
                    Ye.init(t, (function(t) {
                        o && (t.identifierNick = e, t.headurl = n, o(t))
                    }), r)
                }), r) : Ye.init(t, o, r))) : r(Me.getReturnError("loginInfo.accountType is empty", -8)) : r(Me.getReturnError("loginInfo.sdkAppID is empty", -7)) : r(Me.getReturnError("loginInfo is empty", -6))
            }(e, t, n, o, r)
    }, t.logout = t.offline = function(e, t) {
        return Oe("instance", e, t)
    }, t.logoutAll = function(e, t) {
        return Oe("all", e, t)
    }, t.sendMsg = function(e, t, n) {
        return Ye.sendMsg(e, t, n)
    }, t.syncMsgs = function(e, t) {
        return Ye.syncMsgs(e, t)
    }, t.getC2CHistoryMsgs = function(e, t, n) {
        return Ye.getC2CHistoryMsgs(e, t, n)
    }, t.syncGroupMsgs = function(e, t, n) {
        return Ye.syncGroupMsgs(e, t, n)
    }, t.c2CMsgReaded = function(e, t, n) {
        return Ve.c2CMsgReaded(e, t, n)
    }, t.groupMsgReaded = function(e, t, n) {
        return ke(e, t, n)
    }, t.setAutoRead = function(e, t, n) {
        return Ve.setAutoRead(e, t, n)
    }, t.createGroup = function(e, t, n) {
        return function(e, t, n) {
            if (Ae(n, !0)) {
                for (var o = {
                        Type: e.Type,
                        Name: e.Name
                    }, r = [], i = 0; i < e.MemberList.length; i++) r.push({
                    Member_Account: e.MemberList[i]
                });
                o.MemberList = r, e.GroupId && (o.GroupId = e.GroupId), e.Owner_Account && (o.Owner_Account = e.Owner_Account), e.Introduction && (o.Introduction = e.Introduction), e.Notification && (o.Notification = e.Notification), e.MaxMemberCount && (o.MaxMemberCount = e.MaxMemberCount), e.ApplyJoinOption && (o.ApplyJoinOption = e.ApplyJoinOption), e.AppDefinedData && (o.AppDefinedData = e.AppDefinedData), e.FaceUrl && (o.FaceUrl = e.FaceUrl), Ke.apiCall(c, "create_group", o, t, n)
            }
        }(e, t, n)
    }, t.createGroupHigh = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "create_group", e, t, n)
        }(e, t, n)
    }, t.applyJoinGroup = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, t, n)
        }(e, t, n)
    }, t.handleApplyJoinGroupPendency = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "handle_apply_join_group", {
                GroupId: e.GroupId,
                Applicant_Account: e.Applicant_Account,
                HandleMsg: e.HandleMsg,
                Authentication: e.Authentication,
                MsgKey: e.MsgKey,
                ApprovalMsg: e.ApprovalMsg,
                UserDefinedField: e.UserDefinedField
            }, t, (function(e) {
                10024 == e.ErrorCode ? t && t({
                    ActionStatus: E,
                    ErrorCode: 0,
                    ErrorInfo: "该申请已经被处理过"
                }) : n && n(e)
            }))
        }(e, t, n)
    }, t.deleteApplyJoinGroupPendency = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(a, "deletemsg", e, t, n)
        }(e, t, n)
    }, t.quitGroup = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "quit_group", {
                GroupId: e.GroupId
            }, t, n)
        }(e, t, n)
    }, t.searchGroupByName = function(e, t, n) {
        return function(e, t, n) {
            Ke.apiCall(c, "search_group", e, t, n)
        }(e, t, n)
    }, t.getGroupPublicInfo = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "get_group_public_info", {
                GroupIdList: e.GroupIdList,
                ResponseFilter: {
                    GroupBasePublicInfoFilter: e.GroupBasePublicInfoFilter
                }
            }, (function(e) {
                if (e.ErrorInfo = "", e.GroupInfo)
                    for (var o in e.GroupInfo) {
                        var r = e.GroupInfo[o].ErrorCode;
                        r > 0 && (e.ActionStatus = _, e.GroupInfo[o].ErrorInfo = "[" + r + "]" + e.GroupInfo[o].ErrorInfo, e.ErrorInfo += e.GroupInfo[o].ErrorInfo + "\n")
                    }
                e.ActionStatus == _ ? n && n(e) : t && t(e)
            }), n)
        }(e, t, n)
    }, t.getGroupInfo = function(e, t, n) {
        return function(e, t, n) {
            if (Ae(n, !0)) {
                var o = {
                    GroupIdList: e.GroupIdList,
                    ResponseFilter: {
                        GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                        MemberInfoFilter: e.MemberInfoFilter
                    }
                };
                e.AppDefinedDataFilter_Group && (o.ResponseFilter.AppDefinedDataFilter_Group = e.AppDefinedDataFilter_Group), e.AppDefinedDataFilter_GroupMember && (o.ResponseFilter.AppDefinedDataFilter_GroupMember = e.AppDefinedDataFilter_GroupMember), Ke.apiCall(c, "get_group_info", o, t, n)
            }
        }(e, t, n)
    }, t.modifyGroupBaseInfo = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "modify_group_base_info", e, t, n)
        }(e, t, n)
    }, t.getGroupMemberInfo = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "get_group_member_info", {
                GroupId: e.GroupId,
                Offset: e.Offset,
                Limit: e.Limit,
                MemberInfoFilter: e.MemberInfoFilter,
                MemberRoleFilter: e.MemberRoleFilter,
                AppDefinedDataFilter_GroupMember: e.AppDefinedDataFilter_GroupMember
            }, t, n)
        }(e, t, n)
    }, t.addGroupMember = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "add_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberList: e.MemberList
            }, t, n)
        }(e, t, n)
    }, t.modifyGroupMember = function(e, t, n) {
        return function(e, t, n) {
            if (Ae(n, !0)) {
                var o = {};
                e.GroupId && (o.GroupId = e.GroupId), e.Member_Account && (o.Member_Account = e.Member_Account), e.Role && (o.Role = e.Role), e.MsgFlag && (o.MsgFlag = e.MsgFlag), e.ShutUpTime && (o.ShutUpTime = e.ShutUpTime), e.NameCard && (o.NameCard = e.NameCard), e.AppMemberDefinedData && (o.AppMemberDefinedData = e.AppMemberDefinedData), Ke.apiCall(c, "modify_group_member_info", o, t, n)
            }
        }(e, t, n)
    }, t.deleteGroupMember = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "delete_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberToDel_Account: e.MemberToDel_Account,
                Reason: e.Reason
            }, t, n)
        }(e, t, n)
    }, t.destroyGroup = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "destroy_group", {
                GroupId: e.GroupId
            }, t, n)
        }(e, t, n)
    }, t.changeGroupOwner = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "change_group_owner", e, t, n)
        }(e, t, n)
    }, t.getJoinedGroupListHigh = function(e, t, n) {
        return De(e, t, n)
    }, t.getRoleInGroup = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "get_role_in_group", {
                GroupId: e.GroupId,
                User_Account: e.User_Account
            }, t, n)
        }(e, t, n)
    }, t.forbidSendMsg = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "forbid_send_msg", {
                GroupId: e.GroupId,
                Members_Account: e.Members_Account,
                ShutUpTime: e.ShutUpTime
            }, t, n)
        }(e, t, n)
    }, t.sendCustomGroupNotify = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(c, "send_group_system_notification", e, t, n)
        }(e, t, n)
    }, t.applyJoinBigGroup = function(e, t, n) {
        return function(e, t, n) {
            var o;
            o = Ae(n, !1) ? c : d, Ke.apiCall(o, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, (function(o) {
                if (o.JoinedStatus && "JoinedSuccess" == o.JoinedStatus) {
                    if (!o.LongPollingKey) return void(n && n(Me.getReturnError("The type of group is not AVChatRoom: groupid=" + e.GroupId, -12)));
                    Ye.resetBigGroupLongPollingInfo(), Ye.setBigGroupLongPollingOn(!0), Ye.setBigGroupLongPollingKey(o.LongPollingKey), Ye.setBigGroupLongPollingMsgMap(e.GroupId, 0), Ye.bigGroupLongPolling()
                }
                t && t(o)
            }), (function(e) {
                n && n(e)
            }))
        }(e, t, n)
    }, t.quitBigGroup = function(e, t, n) {
        return function(e, t, n) {
            var o;
            o = Ae(n, !1) ? c : d, Ye.resetBigGroupLongPollingInfo(), Ke.apiCall(o, "quit_group", {
                GroupId: e.GroupId
            }, (function(e) {
                Ye.resetBigGroupLongPollingInfo(), t && t(e)
            }), n)
        }(e, t, n)
    }, t.getProfilePortrait = function(e, t, n) {
        return Pe(e, t, n)
    }, t.setProfilePortrait = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(p, "portrait_set", {
                From_Account: se.identifier,
                ProfileItem: e.ProfileItem
            }, (function(n) {
                for (var o in e.ProfileItem) {
                    var r = e.ProfileItem[o];
                    if ("Tag_Profile_IM_Nick" == r.Tag) {
                        se.identifierNick = r.Value;
                        break
                    }
                }
                t && t(n)
            }), n)
        }(e, t, n)
    }, t.applyAddFriend = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "friend_add", {
                From_Account: se.identifier,
                AddFriendItem: e.AddFriendItem
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.getPendency = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "pendency_get", {
                From_Account: se.identifier,
                PendencyType: e.PendencyType,
                StartTime: e.StartTime,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n)
        }(e, t, n)
    }, t.deletePendency = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "pendency_delete", {
                From_Account: se.identifier,
                PendencyType: e.PendencyType,
                To_Account: e.To_Account
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.responseFriend = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "friend_response", {
                From_Account: se.identifier,
                ResponseFriendItem: e.ResponseFriendItem
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.getAllFriend = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "friend_get_all", {
                From_Account: se.identifier,
                TimeStamp: e.TimeStamp,
                StartIndex: e.StartIndex,
                GetCount: e.GetCount,
                LastStandardSequence: e.LastStandardSequence,
                TagList: e.TagList
            }, t, n)
        }(e, t, n)
    }, t.deleteFriend = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "friend_delete", {
                From_Account: se.identifier,
                To_Account: e.To_Account,
                DeleteType: e.DeleteType
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.addBlackList = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "black_list_add", {
                From_Account: se.identifier,
                To_Account: e.To_Account
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.deleteBlackList = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "black_list_delete", {
                From_Account: se.identifier,
                To_Account: e.To_Account
            }, (function(e) {
                var o = we(e);
                o.ActionStatus == _ ? n && n(o) : t && t(o)
            }), n)
        }(e, t, n)
    }, t.getBlackList = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(l, "black_list_get", {
                From_Account: se.identifier,
                StartIndex: e.StartIndex,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n)
        }(e, t, n)
    }, t.getRecentContactList = function(e, t, n) {
        return function(e, t, n) {
            Ae(n, !0) && Ke.apiCall(f, "get", {
                From_Account: se.identifier,
                Count: e.Count
            }, t, n)
        }(e, t, n)
    }, t.uploadFile = t.uploadPic = function(e, t, n) {
        return Xe.uploadFile(e, t, n)
    }, t.submitUploadFileForm = function(e, t, n) {
        return Xe.submitUploadFileForm(e, t, n)
    }, t.uploadFileByBase64 = t.uploadPicByBase64 = function(e, t, n) {
        var o = {
            To_Account: e.toAccount,
            Busi_Id: e.businessType,
            File_Type: e.File_Type,
            File_Str_Md5: e.fileMd5,
            PkgFlag: A.BASE64_DATA,
            File_Size: e.totalSize,
            Slice_Offset: 0,
            Slice_Size: e.totalSize,
            Slice_Data: e.base64Str,
            Seq: Ee(),
            Timestamp: he(),
            Random: _e()
        };
        return Ue(o, t, n)
    }, t.setJsonpLastRspData = function(e) {
        "string" == typeof e && JSON.parse(e)
    }, t.getLongPollingId = function(e, t, n) {
        return xe(0, t, n)
    }, t.applyDownload = function(e, t, n) {
        return Be(e, t, n)
    }, t.onDownFile = function(e) {
        window.open(de.downloadMap["uuid_" + e])
    }, t.checkLogin = function(e, t) {
        return Ae(e, t)
    }
}(t = {
    login: function(e, t, n) {},
    syncMsgs: function(e, t) {},
    getC2CHistoryMsgs: function(e, t, n) {},
    syncGroupMsgs: function(e, t, n) {},
    sendMsg: function(e, t, n) {},
    logout: function(e, t) {},
    setAutoRead: function(e, t, n) {},
    getProfilePortrait: function(e, t, n) {},
    setProfilePortrait: function(e, t, n) {},
    applyAddFriend: function(e, t, n) {},
    getPendency: function(e, t, n) {},
    deletePendency: function(e, t, n) {},
    responseFriend: function(e, t, n) {},
    getAllFriend: function(e, t, n) {},
    deleteFriend: function(e, t, n) {},
    addBlackList: function(e, t, n) {},
    getBlackList: function(e, t, n) {},
    deleteBlackList: function(e, t, n) {},
    uploadPic: function(e, t, n) {},
    createGroup: function(e, t, n) {},
    applyJoinGroup: function(e, t, n) {},
    handleApplyJoinGroup: function(e, t, n) {},
    deleteApplyJoinGroupPendency: function(e, t, n) {},
    quitGroup: function(e, t, n) {},
    getGroupPublicInfo: function(e, t, n) {},
    getGroupInfo: function(e, t, n) {},
    modifyGroupBaseInfo: function(e, t, n) {},
    destroyGroup: function(e, t, n) {},
    getJoinedGroupListHigh: function(e, t, n) {},
    getGroupMemberInfo: function(e, t, n) {},
    addGroupMember: function(e, t, n) {},
    modifyGroupMember: function(e, t, n) {},
    forbidSendMsg: function(e, t, n) {},
    deleteGroupMember: function(e, t, n) {},
    sendCustomGroupNotify: function(e, t, n) {},
    Msg: function(e, t, n, o, r, i, s, u) {},
    MsgStore: {
        sessMap: function() {
            return {}
        },
        sessCount: function() {
            return 0
        },
        sessByTypeId: function(e, t) {
            return {}
        },
        delSessByTypeId: function(e, t) {
            return !0
        },
        resetCookieAndSyncFlag: function() {},
        downloadMap: {}
    }
}), t);