
var e, t, a, n = require("../../@babel/runtime/helpers/toConsumableArray"),
    r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    s = require("../../@babel/runtime/helpers/slicedToArray"),
    i = require("../../@babel/runtime/helpers/asyncToGenerator"),
    o = require("../../@babel/runtime/helpers/defineProperty"),
    c = require("../../@babel/runtime/helpers/asyncIterator"),
    u = require("./tools");
Component({
    properties: {
        agentConfig: {
            type: Object,
            value: {
                type: "",
                botId: "",
                modelName: "",
                model: "",
                logo: "",
                welcomeMessage: ""
            }
        }
    },
    data: (e = {
        isLoading: !0,
        article: {},
        windowInfo: wx.getWindowInfo(),
        bot: {},
        inputValue: "",
        output: "",
        chatRecords: [],
        scrollTop: 0,
        streamStatus: !1,
        setPanelVisibility: !1,
        questions: []
    }, o(e, "scrollTop", 0), o(e, "guide", u.guide), o(e, "showGuide", !1), o(e, "imageList", []), e),
    attached: (a = i(r().mark((function e() {
        var t, a, n, i, o, c, l, d, h;
        return r().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t = this.data.agentConfig, a = t.botId, n = t.type, console.log("agentConfig:", this.data.agentConfig), i = (0, u.checkConfig)(this.data.agentConfig), o = s(i, 2), c = o[0], l = o[1], c ? this.setData({
                            showGuide: !1
                        }) : (wx.showModal({
                            title: "提示",
                            content: l,
                            showCancel: !1,
                            success: function() {
                                wx.navigateBack()
                            }
                        }), this.setData({
                            showGuide: !0
                        })), "bot" !== n) {
                        e.next = 13;
                        break
                    }
                    return d = wx.cloud.extend.AI, e.next = 8, d.bot.get({
                        botId: a
                    });
                case 8:
                    if (!(h = e.sent).code) {
                        e.next = 12;
                        break
                    }
                    return wx.showModal({
                        title: "提示",
                        content: h.message
                    }), e.abrupt("return");
                case 12:
                    this.setData({
                        bot: h,
                        questions: h.initQuestions
                    });
                case 13:
                case "end":
                    return e.stop()
            }
        }), e, this)
    }))), function() {
        return a.apply(this, arguments)
    }),
    methods: {
        bindKeyInput: function(e) {
            this.setData({
                inputValue: e.detail.value
            })
        },
        clearChatRecords: function() {
            this.setData({
                chatRecords: [],
                streamStatus: !1,
                setPanelVisibility: !this.data.setPanelVisibility
            })
        },
        stop: function() {
            var e = this.data.chatRecords,
                t = n(e),
                a = t[t.length - 1];
            "..." === a.content && (a.content = "已暂停回复"), this.setData({
                streamStatus: !1,
                chatRecords: t
            })
        },
        openSetPanel: function() {
            this.setData({
                setPanelVisibility: !0
            })
        },
        closeSetPanel: function() {
            this.setData({
                setPanelVisibility: !1
            })
        },
        sendMessage: (t = i(r().mark((function e(t) {
            var a, s, i, o, u, l, d, h, b, p, m, f, g, x, k, v, w, y, D, _, S, I, R, T, C, P, q, L, V, M, A, F, B, N, U, G, O, J, Q, j, E, K, W, z, H, X, Y, Z, $, ee, te, ae, ne, re, se, ie, oe, ce, ue, le, de, he, be, pe, me;
            return r().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (a = t.currentTarget.dataset.message, s = this.data, i = s.inputValue, o = s.bot, u = s.agentConfig, l = s.chatRecords, d = s.streamStatus, h = s.imageList, !d) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        if (a && (i = a), i) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return");
                    case 7:
                        if (!h.length) {
                            e.next = 10;
                            break
                        }
                        if (!h.filter((function(e) {
                                return !e.base64Url
                            })).length) {
                            e.next = 10;
                            break
                        }
                        return e.abrupt("return");
                    case 10:
                        if (b = u.type, p = u.modelName, m = u.model, f = {
                                content: i,
                                record_id: "record_id" + String(+new Date - 10),
                                role: "user",
                                imageList: n(h)
                            }, g = {
                                content: "...",
                                record_id: "record_id" + String(+new Date + 10),
                                role: "assistant"
                            }, this.setData({
                                inputValue: "",
                                questions: [],
                                chatRecords: [].concat(n(l), [f, g]),
                                streamStatus: !1,
                                imageList: []
                            }), "bot" !== b) {
                            e.next = 113;
                            break
                        }
                        return x = wx.cloud.extend.AI, e.next = 18, x.bot.sendMessage({
                            data: {
                                botId: o.botId,
                                history: n(l.map((function(e) {
                                    return {
                                        role: e.role,
                                        content: e.content
                                    }
                                }))),
                                msg: i
                            }
                        });
                    case 18:
                        k = e.sent, this.setData({
                            streamStatus: !0
                        }), v = "", w = "", y = !1, D = !1, e.prev = 24, S = c(k.eventStream);
                    case 26:
                        return e.next = 28, S.next();
                    case 28:
                        if (!(y = !(I = e.sent).done)) {
                            e.next = 60;
                            break
                        }
                        if (R = I.value, this.data.streamStatus) {
                            e.next = 32;
                            break
                        }
                        return e.abrupt("break", 60);
                    case 32:
                        if (this.toBottom(), T = R.data, e.prev = 34, C = JSON.parse(T), P = C.type, q = C.content, L = C.reasoning_content, V = C.record_id, M = C.search_info, A = C.role, C.knowledge_meta, F = C.finish_reason, B = n(this.data.chatRecords), (N = B[B.length - 1]).role = A || "assistant", N.record_id = V || N.record_id, "error" !== F) {
                            e.next = 48;
                            break
                        }
                        return N.search_info = null, N.reasoning_content = "", N.knowledge_meta = [], N.content = "网络繁忙，请稍后重试!", this.setData({
                            chatRecords: B
                        }), e.abrupt("break", 60);
                    case 48:
                        "search" !== P || N.search_info || (N.search_info = M, this.setData({
                            chatRecords: B
                        })), "thinking" === P && (w += L, N.reasoning_content = w, this.setData({
                            chatRecords: B
                        })), "text" === P && (v += q, N.content = v, this.setData({
                            chatRecords: B
                        })), e.next = 57;
                        break;
                    case 54:
                        return e.prev = 54, e.t0 = e.catch(34), e.abrupt("break", 60);
                    case 57:
                        y = !1, e.next = 26;
                        break;
                    case 60:
                        e.next = 66;
                        break;
                    case 62:
                        e.prev = 62, e.t1 = e.catch(24), D = !0, _ = e.t1;
                    case 66:
                        if (e.prev = 66, e.prev = 67, !y || null == S.return) {
                            e.next = 71;
                            break
                        }
                        return e.next = 71, S.return();
                    case 71:
                        if (e.prev = 71, !D) {
                            e.next = 74;
                            break
                        }
                        throw _;
                    case 74:
                        return e.finish(71);
                    case 75:
                        return e.finish(66);
                    case 76:
                        if (this.setData({
                                streamStatus: !1
                            }), !o.isNeedRecommend) {
                            e.next = 113;
                            break
                        }
                        return U = wx.cloud.extend.AI, e.next = 81, U.bot.getRecommendQuestions({
                            data: {
                                botId: o.botId,
                                history: [],
                                msg: i,
                                agentSetting: "",
                                introduction: "",
                                name: ""
                            }
                        });
                    case 81:
                        G = e.sent, O = "", J = !1, Q = !1, e.prev = 85, E = c(G.textStream);
                    case 87:
                        return e.next = 89, E.next();
                    case 89:
                        if (!(J = !(K = e.sent).done)) {
                            e.next = 97;
                            break
                        }
                        W = K.value, this.toBottom(), O += W, this.setData({
                            questions: O.split("\n").filter((function(e) {
                                return !!e
                            }))
                        });
                    case 94:
                        J = !1, e.next = 87;
                        break;
                    case 97:
                        e.next = 103;
                        break;
                    case 99:
                        e.prev = 99, e.t2 = e.catch(85), Q = !0, j = e.t2;
                    case 103:
                        if (e.prev = 103, e.prev = 104, !J || null == E.return) {
                            e.next = 108;
                            break
                        }
                        return e.next = 108, E.return();
                    case 108:
                        if (e.prev = 108, !Q) {
                            e.next = 111;
                            break
                        }
                        throw j;
                    case 111:
                        return e.finish(108);
                    case 112:
                        return e.finish(103);
                    case 113:
                        if ("model" !== b) {
                            e.next = 172;
                            break
                        }
                        return z = wx.cloud.extend.AI.createModel(p), H = {}, H = "hunyuan-vision" === m ? {
                            model: m,
                            messages: [].concat(n(l.map((function(e) {
                                return {
                                    role: e.role,
                                    content: [{
                                        type: "text",
                                        text: e.content
                                    }].concat(n((e.imageList || []).map((function(e) {
                                        return {
                                            type: "image_url",
                                            image_url: {
                                                url: e.base64Url
                                            }
                                        }
                                    }))))
                                }
                            }))), [{
                                role: "user",
                                content: [{
                                    type: "text",
                                    text: i
                                }].concat(n(h.map((function(e) {
                                    return {
                                        type: "image_url",
                                        image_url: {
                                            url: e.base64Url
                                        }
                                    }
                                }))))
                            }])
                        } : {
                            model: m,
                            messages: [{
                                role: "system",
                                content: "你是一名专业的智能医疗小助手，由仁科医疗科技基于DeepSeek技术倾力打造，旨在为用户提供更便捷、更智能的就医服务。你的任务是帮助用户解决就医过程中的各种疑问，包括但不限于科室推荐、医生咨询、就医指南、报告解读以及康复建议等。如果用户提问其他非医疗行业问题，你需要礼貌性拒绝回答。如果用户给出的条件或信息不全，你可以继续向用户提问以获取更多信息，切勿没有任何依据的胡乱回复。你不是一名真正的医生，不能代替专业的诊疗意见，用户有任何身体不适都需要提醒用户及时前往正规医院就诊。"
                            }].concat(n(l.map((function(e) {
                                return {
                                    role: e.role,
                                    content: e.content
                                }
                            }))), [{
                                role: "user",
                                content: i
                            }])
                        }, e.next = 119, z.streamText({
                            data: H
                        });
                    case 119:
                        X = e.sent, Y = "", Z = "", this.setData({
                            streamStatus: !0
                        }), $ = !1, ee = !1, e.prev = 125, ae = c(X.eventStream);
                    case 127:
                        return e.next = 129, ae.next();
                    case 129:
                        if (!($ = !(ne = e.sent).done)) {
                            e.next = 155;
                            break
                        }
                        if (re = ne.value, this.data.streamStatus) {
                            e.next = 133;
                            break
                        }
                        return e.abrupt("break", 155);
                    case 133:
                        if (this.toBottom(), se = re.data, e.prev = 135, ie = JSON.parse(se), ce = (oe = ie || {}).id, ue = oe.choices, le = (void 0 === ue ? [] : ue)[0] || {}, de = le.delta, "stop" !== le.finish_reason) {
                            e.next = 141;
                            break
                        }
                        return e.abrupt("break", 155);
                    case 141:
                        he = de.content, be = de.reasoning_content, pe = de.role, Z += be || "", Y += he || "", (me = n(this.data.chatRecords))[me.length - 1] = {
                            content: Y,
                            reasoning_content: Z,
                            record_id: "record_id" + String(ce),
                            role: pe
                        }, this.setData({
                            chatRecords: me
                        }), e.next = 152;
                        break;
                    case 149:
                        return e.prev = 149, e.t3 = e.catch(135), e.abrupt("break", 155);
                    case 152:
                        $ = !1, e.next = 127;
                        break;
                    case 155:
                        e.next = 161;
                        break;
                    case 157:
                        e.prev = 157, e.t4 = e.catch(125), ee = !0, te = e.t4;
                    case 161:
                        if (e.prev = 161, e.prev = 162, !$ || null == ae.return) {
                            e.next = 166;
                            break
                        }
                        return e.next = 166, ae.return();
                    case 166:
                        if (e.prev = 166, !ee) {
                            e.next = 169;
                            break
                        }
                        throw te;
                    case 169:
                        return e.finish(166);
                    case 170:
                        return e.finish(161);
                    case 171:
                        this.setData({
                            streamStatus: !1
                        });
                    case 172:
                    case "end":
                        return e.stop()
                }
            }), e, this, [
                [24, 62, 66, 76],
                [34, 54],
                [67, , 71, 75],
                [85, 99, 103, 113],
                [104, , 108, 112],
                [125, 157, 161, 171],
                [135, 149],
                [162, , 166, 170]
            ])
        }))), function(e) {
            return t.apply(this, arguments)
        }),
        toBottom: function() {
            this.setData({
                scrollTop: this.data.scrollTop + 4
            })
        },
        copyChatRecord: function(e) {
            var t = e.currentTarget.dataset.content;
            wx.setClipboardData({
                data: t + "\n\n来自微信云开发AI+",
                success: function(e) {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    })
                }
            })
        },
        uploadImgs: function() {
            var e = this;
            wx.chooseMedia({
                count: 9,
                mediaType: ["image"],
                sourceType: ["album", "camera"],
                maxDuration: 30,
                camera: "back",
                success: function(t) {
                    var a = t.tempFiles;
                    e.setData({
                        imageList: n(a)
                    }), a.forEach((function(t, a) {
                        var r = t.tempFilePath.lastIndexOf("."),
                            s = t.tempFilePath.substring(r + 1);
                        wx.getFileSystemManager().readFile({
                            filePath: t.tempFilePath,
                            encoding: "base64",
                            success: function(t) {
                                var r = t.data,
                                    i = "data:image/".concat(s, ";base64,").concat(r),
                                    o = e.data.imageList;
                                o[a].base64Url = i, e.setData({
                                    imageList: n(o)
                                })
                            }
                        })
                    }))
                },
                fail: function(e) {
                    console.log(e)
                }
            })
        },
        deleteImg: function(e) {
            var t = e.currentTarget.dataset.index,
                a = this.data.imageList.filter((function(e, a) {
                    return a != t
                }));
            this.setData({
                imageList: n(a)
            })
        },
        copyUrl: function(e) {
            var t = e.currentTarget.dataset.url;
            console.log(t), wx.setClipboardData({
                data: t,
                success: function(e) {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    })
                }
            })
        }
    }
});