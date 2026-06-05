
var e = require("./webim_wx");
module.exports = {
    initData: function(t) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.userData = t || {}, this.userData.accountType = 1, this.groupData = s || {}, this.groupData.sessionType = e.SESSION_TYPE.GROUP, this.selSess = null, this.selSessHeadUrl = null
    },
    initLoginListeners: function(e) {
        this.loginListeners = e
    },
    loginIm: function(t, s) {
        e.checkLogin() || e.login(this.userData, this.loginListeners, {
            isAccessFormalEnv: !0,
            isLogOn: !1
        }, t, s)
    },
    logout: function() {
        e.checkLogin() && e.logout()
    },
    createGroup: function(t, s, n, i) {
        var o = {
            GroupId: String(t),
            Owner_Account: String(s),
            Type: "AVChatRoom",
            ApplyJoinOption: "FreeAccess",
            Name: String(t),
            Notification: "",
            Introduction: "",
            MemberList: []
        };
        e.createGroup(o, (function(e) {
            n && n()
        }), (function(e) {
            10025 == e.ErrorCode || 10021 == e.ErrorCode ? n && n() : i && i(e)
        }))
    },
    joinGroup: function(t, s, n) {
        var i = this;
        this.selSess = null, this.createGroup(t, this.userData.identifier, (function() {
            e.applyJoinBigGroup({
                GroupId: String(t)
            }, (function(e) {
                e.JoinedStatus && "JoinedSuccess" == e.JoinedStatus ? (i.groupData.groupId = t, s && s(e)) : n && n(e)
            }), (function(e) {
                if (10013 == e.ErrorCode) return i.groupData.groupId = t, void console.warn("applyJoinGroupSucc", t);
                n && n(e)
            }))
        }), n)
    },
    sendC2CTextMsg: function(t, s, n, i) {
        this.sendTextMessage(e.SESSION_TYPE.C2C, t, s, n, i)
    },
    sendC2CCustomMsg: function(t, s, n, i) {
        this.sendCustomMsg(e.SESSION_TYPE.C2C, t, s, n, i)
    },
    sendGroupTextMsg: function(t, s, n) {
        this.sendTextMessage(e.SESSION_TYPE.GROUP, null, t, s, n)
    },
    sendGroupCustomMsg: function(t, s, n) {
        this.sendCustomMsg(e.SESSION_TYPE.GROUP, null, t, s, n)
    },
    sendTextMessage: function(t, s, n, i, o) {
        var a, r;
        if (t == e.SESSION_TYPE.C2C) {
            if (!s) return void(o && o(-1, "没有接收人"));
            a = e.MSG_MAX_LENGTH.C2C, r = "消息长度超出限制(最多" + Math.round(a / 3) + "汉字)"
        } else a = e.MSG_MAX_LENGTH.GROUP, r = "消息长度超出限制(最多" + Math.round(a / 3) + "汉字)";
        if (n.length < 1) o && o(-2, "不能发送空消息");
        else if (e.Tool.getStrBytes(n) > a) o && o(-3, r);
        else {
            var u, d = null;
            if (t == e.SESSION_TYPE.GROUP) {
                var S = this.groupData.groupId;
                d = new e.Session(e.SESSION_TYPE.GROUP, S, S), u = e.GROUP_MSG_SUB_TYPE.COMMON
            } else u = e.C2C_MSG_SUB_TYPE.COMMON, d = new e.Session(t, s, s, "", this.getUnixTimestamp());
            var g, M, h, l, E, T = Math.round(4294967296 * Math.random()),
                c = this.getUnixTimestamp(),
                C = new e.Msg(d, !0, -1, T, c, this.userData.identifier, u, this.userData.identifierNick),
                f = n.match(/\[[^[\]]{1,3}\]/gm);
            if (!f || f.length < 1) g = new e.Msg.Elem.Text(n), C.addText(g);
            else {
                for (var m = 0; m < f.length; m++)(h = n.substring(0, n.indexOf(f[m]))) && (g = new e.Msg.Elem.Text(h), C.addText(g)), l = e.EmotionDataIndexs[f[m]], e.Emotions[l] ? (M = new e.Msg.Elem.Face(l, f[m]), C.addFace(M)) : (g = new e.Msg.Elem.Text(f[m]), C.addText(g)), E = n.indexOf(f[m]) + f[m].length, n = n.substring(E);
                n && (g = new e.Msg.Elem.Text(n), C.addText(g))
            }
            e.sendMsg(C, (function(e) {
                i && i(C)
            }), (function(e) {
                o && o(-4, e)
            }))
        }
    },
    sendCustomMsg: function(t, s, n, i, o) {
        var a, r;
        if (t == e.SESSION_TYPE.C2C) {
            if (!s) return event.fire(this, Constant.EVENT.IM.SEND_CHAT_MSG_EMPTY_RECEIVE_ERROR, JSON.stringify(n)), void(o && o(-1, "没有接收人"));
            a = e.MSG_MAX_LENGTH.C2C, r = "消息长度超出限制(最多" + Math.round(a / 3) + "汉字)"
        } else a = e.MSG_MAX_LENGTH.GROUP, r = "消息长度超出限制(最多" + Math.round(a / 3) + "汉字)";
        var u = n.data + "",
            d = n.desc,
            S = n.ext,
            g = e.Tool.getStrBytes(u);
        if (u.length < 1) o && o(-2, "不能发送空消息");
        else if (g > a) o && o(-3, r);
        else {
            var M, h = null;
            if (t == e.SESSION_TYPE.GROUP) {
                var l = this.groupData.groupId;
                h = new e.Session(e.SESSION_TYPE.GROUP, l, l), M = e.GROUP_MSG_SUB_TYPE.COMMON
            } else h = new e.Session(t, s, s, "", this.getUnixTimestamp()), M = e.C2C_MSG_SUB_TYPE.COMMON;
            var E = Math.round(4294967296 * Math.random()),
                T = this.getUnixTimestamp(),
                c = new e.Msg(h, !0, -1, E, T, this.userData.identifier, M, this.userData.identifierNick),
                C = new e.Msg.Elem.Custom(u, d, S);
            c.addCustom(C), e.sendMsg(c, (function(e) {
                i && i(c)
            }), (function(e) {
                o && o(-4, e)
            }))
        }
    },
    getUnixTimestamp: function() {
        return Math.round((new Date).getTime() / 1e3)
    },
    formatCustomMsg: function(t) {
        var s = t.data || "",
            n = t.desc || "",
            i = t.ext || "";
        this.selSess || (this.selSess = new e.Session(this.groupData.sessionType, this.groupData.groupId, this.groupData.groupId, this.selSessHeadUrl, Math.round((new Date).getTime() / 1e3)));
        var o, a = Math.round(4294967296 * Math.random()),
            r = Math.round((new Date).getTime() / 1e3);
        o = this.groupData.sessionType == e.SESSION_TYPE.GROUP ? e.GROUP_MSG_SUB_TYPE.COMMON : e.C2C_MSG_SUB_TYPE.COMMON;
        t = new e.Msg(this.selSess, !0, -1, a, r, this.userData.identifier, o, this.userData.identifierNick);
        var u = new e.Msg.Elem.Custom(s, n, i);
        return t.addCustom(u), t
    },
    formatC2CCustomMsg: function(t, s) {
        var n = s.data || "",
            i = s.desc || "",
            o = s.ext || "",
            a = (e.Tool.getStrBytes(n), new e.Session(e.SESSION_TYPE.C2C, t, t, "", Math.round((new Date).getTime() / 1e3))),
            r = Math.round(4294967296 * Math.random()),
            u = Math.round((new Date).getTime() / 1e3),
            d = e.C2C_MSG_SUB_TYPE.COMMON,
            S = (s = new e.Msg(a, !0, -1, r, u, this.userData.identifier, d, this.userData.identifierNick), new e.Msg.Elem.Custom(n, i, o));
        return s.addCustom(S), s
    }
};