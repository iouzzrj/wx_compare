
var e = require("./im_handler.js"),
    t = require("./config.js");
getApp();
Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        roomID: {
            type: Number,
            value: 0
        },
        roomName: {
            type: String,
            value: ""
        },
        userID: {
            type: String,
            value: ""
        },
        userName: {
            type: String,
            value: ""
        },
        userSig: {
            type: String,
            value: ""
        },
        sdkAppID: {
            type: Number,
            value: 0
        },
        privateMapKey: {
            type: String,
            value: ""
        },
        template: {
            type: String,
            value: "float",
            observer: function(e, t) {
                this.initLayout(e)
            }
        },
        beauty: {
            type: Number,
            value: 0
        },
        whiteness: {
            type: Number,
            value: 0
        },
        aspect: {
            type: String,
            value: "3:4"
        },
        minBitrate: {
            type: Number,
            value: 200
        },
        maxBitrate: {
            type: Number,
            value: 400
        },
        muted: {
            type: Boolean,
            value: !1
        },
        debug: {
            type: Boolean,
            value: !1
        },
        enableIM: {
            type: Boolean,
            value: !1
        },
        useCloud: {
            type: Boolean,
            value: !0
        },
        autoplay: {
            type: Boolean,
            value: !1
        },
        enableCamera: {
            type: Boolean,
            value: !0
        },
        smallViewLeft: {
            type: String,
            value: "1vw"
        },
        smallViewTop: {
            type: String,
            value: "1vw"
        },
        smallViewWidth: {
            type: String,
            value: "30vw"
        },
        smallViewHeight: {
            type: String,
            value: "40vw"
        },
        waitingImg: {
            type: String,
            value: "https://main.qcloudimg.com/raw/b14189beafbb8db8275e53c8cb596e1f.png"
        },
        playerBackgroundImg: {
            type: String,
            value: "https://main.qcloudimg.com/raw/b14189beafbb8db8275e53c8cb596e1f.png"
        },
        loadingImg: {
            type: String,
            value: "https://main.qcloudimg.com/raw/3e0a94d92a3b312a191cee4f96f0bd8b.png"
        },
        pureAudioPushMod: {
            type: Number,
            value: 0
        },
        recordId: {
            type: Number,
            value: null
        },
        soundMode: {
            type: String,
            value: "speaker"
        }
    },
    data: {
        requestSigFailCount: 0,
        CONSTANT: t,
        pusherContext: "",
        hasPushStarted: !1,
        pushURL: "",
        members: [{}, {}, {}],
        maxMembers: 3,
        self: {},
        startPlay: !1,
        hasExitRoom: !0,
        fixPlayId: "trtc_fix_play_id",
        playerMutedStatus: {},
        playerVideoStatus: {},
        ERROR_OPEN_CAMERA: -4,
        ERROR_OPEN_MIC: -5,
        ERROR_PUSH_DISCONNECT: -6,
        ERROR_CAMERA_MIC_PERMISSION: -7,
        ERROR_EXCEEDS_THE_MAX_MEMBER: -8,
        ERROR_REQUEST_ROOM_SIG: -9,
        ERROR_JOIN_ROOM: -10
    },
    ready: function() {
        self = this, this.data.pusherContext || (this.data.pusherContext = wx.createLivePusherContext("rtcpusher"))
    },
    detached: function() {
        self.exitRoom(), e.logout()
    },
    methods: {
        initLayout: function(e) {
            switch (self = this, e) {
                case t.TEMPLATE_TYPE.BIGSMALL:
                    this.setData({
                        maxMembers: 1,
                        members: [{}],
                        template: e
                    });
                    break;
                default:
                    this.setData({
                        maxMembers: 3,
                        members: [{}, {}, {}],
                        template: e
                    })
            }
        },
        initIm: function() {
            var a = this;
            e.initData({
                sdkAppID: this.data.sdkAppID,
                appIDAt3rd: this.data.sdkAppID,
                identifier: this.data.userID,
                identifierNick: this.data.userName || this.data.userID,
                userSig: this.data.userSig
            }), e.initLoginListeners(this.imLoginListener()), e.loginIm((function(r) {
                a.fireIMEvent(t.IM.LOGIN_EVENT, r.ErrorCode, r), e.joinGroup(a.data.roomID, (function(e) {
                    a.fireIMEvent(t.IM.JOIN_GROUP_EVENT, e.ErrorCode, e)
                }), (function(e) {
                    a.fireIMEvent(t.IM.JOIN_GROUP_EVENT, e.ErrorCode, e)
                }))
            }), (function(e) {
                a.fireIMEvent(t.IM.LOGIN_EVENT, e.ErrorCode, e)
            }))
        },
        enableVideo: function(e, t) {
            if (t) {
                var a = wx.createLivePlayerContext(t, this);
                if (a) {
                    var r, s = this.data.playerVideoStatus[t];
                    if (e)
                        if (s);
                        else a.play(), (r = this.data.playerVideoStatus)[t] = !0, this.setData({
                            playerVideoStatus: r
                        });
                    else if (s)(r = this.data.playerVideoStatus)[t] = !1, this.setData({
                        playerVideoStatus: r
                    })
                }
            }
        },
        enableAudio: function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (t) {
                var r = wx.createLivePlayerContext(t, this);
                if (r) {
                    var s, o = this.data.playerMutedStatus[t];
                    if (e) {
                        if (o) r.mute(a), (s = this.data.playerMutedStatus)[t] = !1, this.setData({
                            playerMutedStatus: s
                        })
                    } else if (o);
                    else r.mute(a), (s = this.data.playerMutedStatus)[t] = !0, this.setData({
                        playerMutedStatus: s
                    })
                }
            }
        },
        onBack: function() {
            wx.navigateBack({
                delta: 1
            })
        },
        enableAudioTap: function(e) {
            var t = e.currentTarget.dataset.uid,
                a = this.data.playerMutedStatus[t];
            void 0 === a && (this.data.playerMutedStatus[t] = !1, a = !1), this.enableAudio(a, t)
        },
        enableVidoTap: function(e) {
            var t = e.currentTarget.dataset.uid,
                a = this.data.playerVideoStatus[t];
            void 0 === a && (this.data.playerVideoStatus[t] = !!this.data.autoplay, a = !!this.data.autoplay), this.enableVideo(!a, t)
        },
        start: function() {
            self = this, self.data.hasExitRoom = !1, self.requestSigServer(self.data.userSig, self.data.privateMapKey), this.data.enableIM && this.initIm()
        },
        stop: function() {
            self.data.hasExitRoom = !0, console.log("组件停止"), self.exitRoom()
        },
        pause: function() {
            self.data.pusherContext || (self.data.pusherContext = wx.createLivePusherContext("rtcpusher")), self.data.pusherContext && self.data.pusherContext.pause(), self.data.members.forEach((function(e) {
                e.playerContext && e.playerContext.pause()
            }))
        },
        resume: function() {
            self.data.pusherContext || (self.data.pusherContext = wx.createLivePusherContext("rtcpusher")), self.data.pusherContext && self.data.pusherContext.resume(), self.data.members.forEach((function(e) {
                e.playerContext && e.playerContext.resume()
            }))
        },
        switchCamera: function() {
            self.data.pusherContext || (self.data.pusherContext = wx.createLivePusherContext("rtcpusher")), self.data.pusherContext && self.data.pusherContext.switchCamera({})
        },
        exitRoom: function() {
            self.data.pusherContext || (self.data.pusherContext = wx.createLivePusherContext("rtcpusher")), self.data.pusherContext && self.data.pusherContext.stop && self.data.pusherContext.stop(), self.data.members.forEach((function(e) {
                e.playerContext && e.playerContext.stop()
            }));
            for (var e = 0; e < self.data.maxMembers; e++) self.data.members[e] = {};
            self.setData({
                pushURL: "",
                members: self.data.members
            })
        },
        postErrorEvent: function(e, t) {
            self.postEvent("error", e, t)
        },
        postEvent: function(e, t, a) {
            self.triggerEvent("RoomEvent", {
                tag: e,
                code: t,
                detail: a
            }, {})
        },
        requestSigServer: function(e, t) {
            console.log("获取sig:", this.data);
            var a = this,
                r = this.data.roomID,
                s = this.data.userID,
                o = this.data.sdkAppID,
                i = this.data.useCloud ? "https://official.opensso.tencent-cloud.com/v4/openim/jsonvideoapp" : "https://yun.tim.qq.com/v4/openim/jsonvideoapp";
            i += "?sdkappid=" + o + "&identifier=" + s + "&usersig=" + e + "&random=" + Date.now() + "&contenttype=json";
            var n = {
                    Cmd: 1,
                    SeqNo: 1,
                    BusType: 7,
                    GroupId: r
                },
                u = {
                    PrivMapEncrypt: t,
                    TerminalType: 1,
                    FromType: 3,
                    SdkVersion: 26280566
                };
            console.log("requestSigServer params:", i, n, u), wx.request({
                url: i,
                data: {
                    ReqHead: n,
                    ReqBody: u
                },
                method: "POST",
                success: function(i) {
                    if (console.log("requestSigServer success:", i), i.data.ErrorCode || 0 != i.data.RspHead.ErrorCode) return console.error(i.data.ErrorInfo || i.data.RspHead.ErrorInfo), a.data.requestSigFailCount++, void(a.data.requestSigFailCount <= 1 ? setTimeout((function() {
                        console.error("获取roomsig失败，重试~"), a.requestSigServer(e, t)
                    }), 1e3) : a.postErrorEvent(a.data.ERROR_REQUEST_ROOM_SIG, "获取roomsig失败"));
                    a.data.requestSigFailCount = 0;
                    var n = JSON.stringify(i.data.RspBody),
                        u = "room://cloud.tencent.com?sdkappid=" + o + "&roomid=" + r + "&userid=" + s + "&roomsig=" + encodeURIComponent(n);
                    if (console.log(u), a.data.pureAudioPushMod || a.data.recordId) {
                        var l = {
                            Str_uc_params: {
                                pure_audio_push_mod: 0,
                                record_id: 0
                            }
                        };
                        a.data.pureAudioPushMod ? l.Str_uc_params.pure_audio_push_mod = a.data.pureAudioPushMod : delete l.Str_uc_params.pure_audio_push_mod, a.data.recordId ? l.Str_uc_params.record_id = a.data.recordId : delete l.Str_uc_params.record_id, u += "&bizbuf=" + encodeURIComponent(JSON.stringify(l))
                    }
                    console.log("roomSigInfo", r, s, n, u), a.setData({
                        pushURL: u,
                        userID: s
                    })
                },
                fail: function(r) {
                    console.log("requestSigServer fail:", r), wx.showToast({
                        title: "获取房间签名失败"
                    }), a.data.requestSigFailCount++, a.data.requestSigFailCount <= 1 ? setTimeout((function() {
                        console.error("获取roomsig失败，重试~"), a.requestSigServer(e, t)
                    }), 1e3) : a.postErrorEvent(a.data.ERROR_REQUEST_ROOM_SIG, "获取roomsig失败")
                }
            })
        },
        onWebRTCUserListPush: function(e) {
            if (console.log("onWebRTCUserListPush method", e), e) {
                var t = JSON.parse(e);
                if (t) {
                    var a = t.userlist;
                    if (console.log("play_users: ", JSON.stringify(a)), a) {
                        var r = [];
                        a && a.forEach((function(e) {
                            var t = {
                                userID: e.userid,
                                accelerateURL: e.playurl
                            };
                            r.push(t)
                        })), r.length > self.data.maxMembers && self.postErrorEvent(self.data.ERROR_EXCEEDS_THE_MAX_MEMBER, "当前房间超过最大人数".concat(self.data.maxMembers + 1, "，请重新进入其他房间体验~")), self.onPusherJoin({
                            pushers: r
                        }), self.onPusherQuit({
                            pushers: r
                        })
                    }
                }
            }
        },
        onPusherJoin: function(e) {
            e.pushers.forEach((function(e) {
                for (var t = -1, a = !1, r = 0; self.data.members && r < self.data.members.length; r++) self.data.members[r].userID && self.data.members[r].userID == e.userID ? a = !0 : self.data.members[r].userID || -1 != t || (t = r);
                a || -1 == t || (e.loading = !1, "bigsmall" == self.data.template ? e.playerContext = wx.createLivePlayerContext(self.data.fixPlayId, self) : e.playerContext = wx.createLivePlayerContext(e.userID, self), self.data.members[t] = e), self.setData({
                    members: self.data.members
                }), self.initPlayerStatus(e.userID)
            }))
        },
        onPusherQuit: function(e) {
            for (var t = 0; t < self.data.members.length; t++) {
                for (var a = !0, r = 0; r < e.pushers.length; r++) self.data.members[t].userID == e.pushers[r].userID && (a = !1);
                if (a) {
                    var s = self.data.members[t].userID;
                    s && (self.data.playerVideoStatus[s] && delete self.data.playerVideoStatus[s], self.data.playerMutedStatus[s] && delete self.data.playerMutedStatus[s]), self.setData({
                        playerVideoStatus: self.data.playerVideoStatus,
                        playerMutedStatus: self.data.playerMutedStatus
                    }), self.data.members[t] = {}
                }
            }
            self.setData({
                members: self.data.members
            })
        },
        delPusher: function(e) {
            for (var t = 0; t < self.data.members.length; t++)
                if (self.data.members[t].userID == e.userID) {
                    var a = wx.createLivePlayerContext(e.userID);
                    a && a.stop(), self.data.members[t] = {}
                }
            self.setData({
                members: self.data.members
            })
        },
        onPush: function(e) {
            var t;
            console.log("============== onPush e userID", this.data.userID), self.data.pusherContext || (self.data.pusherContext = wx.createLivePusherContext("rtcpusher")), t = e.detail ? e.detail.code : e, console.log("推流事件：", t), this.triggerEvent("codePush", t);
            switch (t) {
                case 1002:
                    console.log("推流成功");
                    break;
                case -1301:
                    console.error("打开摄像头失败: ", t), self.postErrorEvent(self.data.ERROR_OPEN_CAMERA, "打开摄像头失败"), self.exitRoom();
                    break;
                case -1302:
                    console.error("打开麦克风失败: ", t), self.postErrorEvent(self.data.ERROR_OPEN_MIC, "打开麦克风失败"), self.exitRoom();
                    break;
                case -1307:
                    console.error("推流连接断开: ", t), self.postErrorEvent(self.data.ERROR_PUSH_DISCONNECT, "推流连接断开"), self.exitRoom();
                    break;
                case 5e3:
                    console.log("收到5000: ", t), self.exitRoom();
                    break;
                case 1018:
                    console.log("进房成功", t);
                    break;
                case 1019:
                    console.log("退出房间", t), self.postErrorEvent(self.data.ERROR_JOIN_ROOM, "加入房间异常，请重试");
                    break;
                case 1020:
                    console.log("成员列表", t), self.onWebRTCUserListPush(e.detail.message);
                    break;
                case 1021:
                    console.log("网络类型发生变化，需要重新进房", t), self.exitRoom(), self.start();
                    break;
                case 2007:
                    console.log("视频播放loading: ", e.detail.code);
                    break;
                case 2004:
                    console.log("视频播放开始: ", e.detail.code)
            }
        },
        onError: function(e) {
            console.error("onError: ", e);
            var t = e.detail || e.details;
            10001 == t.errCode && (t.errMsg = "未获取到摄像头功能权限，请删除小程序后重新打开"), 10002 == t.errCode && (t.errMsg = "未获取到录音功能权限，请删除小程序后重新打开"), self.postErrorEvent(self.data.ERROR_CAMERA_MIC_PERMISSION, t.errMsg || "未获取到摄像头、录音功能权限，请删除小程序后重新打开")
        },
        onPlay: function(e) {
            console.log("onPlay code: ", e.detail.code), self.data.members.forEach((function(t) {
                if ("bigsmall" == self.data.template && e.currentTarget.id === self.data.fixPlayId || e.currentTarget.id == t.userID) switch (e.detail.code) {
                    case 2007:
                        console.log("视频播放loading: ", e), t.loading = !0;
                        break;
                    case 2004:
                        console.log("视频播放开始: ", e), t.loading = !1, setTimeout((function() {
                            self.setData({
                                startPlay: !0
                            })
                        }), 500);
                        break;
                    case -2301:
                        console.error("网络连接断开，且重新连接亦不能恢复，播放器已停止播放", t), self.delPusher(t)
                }
            }))
        },
        imLoginListener: function() {
            var e = this;
            return {
                onConnNotify: function(a) {
                    e.fireIMEvent(t.IM.CONNECTION_EVENT, a.ErrorCode, a)
                },
                onBigGroupMsgNotify: function(a) {
                    a.length && e.fireIMEvent(t.IM.BIG_GROUP_MSG_NOTIFY, 0, a)
                },
                onMsgNotify: function(a) {
                    a.length && e.fireIMEvent(t.IM.MSG_NOTIFY, 0, a)
                },
                onGroupSystemNotifys: {
                    1: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 1, a)
                    },
                    2: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 2, a)
                    },
                    3: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 3, a)
                    },
                    4: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 4, a)
                    },
                    5: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 5, a)
                    },
                    6: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 6, a)
                    },
                    7: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 7, a)
                    },
                    8: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 8, a)
                    },
                    9: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 9, a)
                    },
                    10: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 10, a)
                    },
                    11: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 11, a)
                    },
                    255: function(a) {
                        e.fireIMErrorEvent(t.IM.GROUP_SYSTEM_NOTIFYS, 255, a)
                    }
                },
                onGroupInfoChangeNotify: function(a) {
                    e.fireIMErrorEvent(t.IM.GROUP_INFO_CHANGE_NOTIFY, 0, a)
                },
                onKickedEventCall: function() {
                    e.fireIMErrorEvent(t.IM.KICKED)
                }
            }
        },
        sendC2CTextMsg: function(t, a, r, s) {
            e.sendC2CTextMsg(t, a, r, s)
        },
        sendC2CCustomMsg: function(t, a, r, s) {
            e.sendC2CCustomMsg(t, a, r, s)
        },
        sendGroupTextMsg: function(t, a, r) {
            e.sendGroupTextMsg(t, a, r)
        },
        sendGroupCustomMsg: function(t, a, r) {
            e.sendGroupCustomMsg(t, a, r)
        },
        fireIMErrorEvent: function(e, t) {
            self.fireIMEvent("error", e, t)
        },
        fireIMEvent: function(e, t, a) {
            self.triggerEvent("IMEvent", {
                tag: e,
                code: t,
                detail: a
            })
        },
        initPlayerStatus: function(e) {
            if (void 0 === this.data.playerVideoStatus[e]) {
                this.data.playerVideoStatus[e] = !!this.data.autoplay;
                var t = this.data.playerVideoStatus;
                this.setData({
                    playerVideoStatus: t
                })
            }
        }
    }
});