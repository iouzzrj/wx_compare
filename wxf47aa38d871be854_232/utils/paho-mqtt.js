
var e, t, s = require("../@babel/runtime/helpers/typeof");
e = global, t = function() {
    return function(e) {
        var t = 1,
            n = 2,
            i = 3,
            o = 4,
            r = 5,
            c = 6,
            a = 7,
            h = 8,
            u = 9,
            d = 10,
            l = 11,
            _ = 12,
            f = 13,
            g = 14,
            p = function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        if (!t.hasOwnProperty(n)) {
                            var i = "Unknown property, " + n + ". Valid properties are:";
                            for (var o in t) t.hasOwnProperty(o) && (i = i + " " + o);
                            throw new Error(i)
                        }
                        if (s(e[n]) !== t[n]) throw new Error(I(y.INVALID_TYPE, [s(e[n]), n]))
                    }
            },
            v = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            y = {
                OK: {
                    code: 0,
                    text: "AMQJSC0000I OK."
                },
                CONNECT_TIMEOUT: {
                    code: 1,
                    text: "AMQJSC0001E Connect timed out."
                },
                SUBSCRIBE_TIMEOUT: {
                    code: 2,
                    text: "AMQJS0002E Subscribe timed out."
                },
                UNSUBSCRIBE_TIMEOUT: {
                    code: 3,
                    text: "AMQJS0003E Unsubscribe timed out."
                },
                PING_TIMEOUT: {
                    code: 4,
                    text: "AMQJS0004E Ping timed out."
                },
                INTERNAL_ERROR: {
                    code: 5,
                    text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"
                },
                CONNACK_RETURNCODE: {
                    code: 6,
                    text: "AMQJS0006E Bad Connack return code:{0} {1}."
                },
                SOCKET_ERROR: {
                    code: 7,
                    text: "AMQJS0007E Socket error:{0}."
                },
                SOCKET_CLOSE: {
                    code: 8,
                    text: "AMQJS0008I Socket closed."
                },
                MALFORMED_UTF: {
                    code: 9,
                    text: "AMQJS0009E Malformed UTF data:{0} {1} {2}."
                },
                UNSUPPORTED: {
                    code: 10,
                    text: "AMQJS0010E {0} is not supported by this browser."
                },
                INVALID_STATE: {
                    code: 11,
                    text: "AMQJS0011E Invalid state {0}."
                },
                INVALID_TYPE: {
                    code: 12,
                    text: "AMQJS0012E Invalid type {0} for {1}."
                },
                INVALID_ARGUMENT: {
                    code: 13,
                    text: "AMQJS0013E Invalid argument {0} for {1}."
                },
                UNSUPPORTED_OPERATION: {
                    code: 14,
                    text: "AMQJS0014E Unsupported operation."
                },
                INVALID_STORED_DATA: {
                    code: 15,
                    text: "AMQJS0015E Invalid data in local storage key={0} value={1}."
                },
                INVALID_MQTT_MESSAGE_TYPE: {
                    code: 16,
                    text: "AMQJS0016E Invalid MQTT message type {0}."
                },
                MALFORMED_UNICODE: {
                    code: 17,
                    text: "AMQJS0017E Malformed Unicode string:{0} {1}."
                },
                BUFFER_FULL: {
                    code: 18,
                    text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}."
                }
            },
            m = {
                0: "Connection Accepted",
                1: "Connection Refused: unacceptable protocol version",
                2: "Connection Refused: identifier rejected",
                3: "Connection Refused: server unavailable",
                4: "Connection Refused: bad user name or password",
                5: "Connection Refused: not authorized"
            },
            I = function(e, t) {
                var s = e.text;
                if (t)
                    for (var n, i, o = 0; o < t.length; o++)
                        if (n = "{" + o + "}", (i = s.indexOf(n)) > 0) {
                            var r = s.substring(0, i),
                                c = s.substring(i + n.length);
                            s = r + t[o] + c
                        }
                return s
            },
            M = [0, 6, 77, 81, 73, 115, 100, 112, 3],
            w = [0, 4, 77, 81, 84, 84, 4],
            E = function(e, t) {
                for (var s in this.type = e, t) t.hasOwnProperty(s) && (this[s] = t[s])
            };
         function A(e, t) {
            var s, h = t,
                d = e[t],
                _ = d >> 4,
                f = d &= 15;
            t += 1;
            var g = 0,
                p = 1;
            do {
                if (t == e.length) return [null, h];
                g += (127 & (s = e[t++])) * p, p *= 128
            } while (0 != (128 & s));
            var v = t + g;
            if (v > e.length) return [null, h];
            var y = new E(_);
            switch (_) {
                case n:
                    1 & e[t++] && (y.sessionPresent = !0), y.returnCode = e[t++];
                    break;
                case i:
                    var m = f >> 1 & 3,
                        I = S(e, t),
                        M = b(e, t += 2, I);
                    t += I, m > 0 && (y.messageIdentifier = S(e, t), t += 2);
                    var w = new U(e.subarray(t, v));
                    1 == (1 & f) && (w.retained = !0), 8 == (8 & f) && (w.duplicate = !0), w.qos = m, w.destinationName = M, y.payloadMessage = w;
                    break;
                case o:
                case r:
                case c:
                case a:
                case l:
                    y.messageIdentifier = S(e, t);
                    break;
                case u:
                    y.messageIdentifier = S(e, t), t += 2, y.returnCode = e.subarray(t, v)
            }
            return [y, v]
        }
         function T(e, t, s) {
            return t[s++] = e >> 8, t[s++] = e % 256, s
        }
         function O(e, t, s, n) {
            return C(e, s, n = T(t, s, n)), n + t
        }
         function S(e, t) {
            return 256 * e[t] + e[t + 1]
        }
         function N(e) {
            for (var t = 0, s = 0; s < e.length; s++) {
                var n = e.charCodeAt(s);
                n > 2047 ? (55296 <= n && n <= 56319 && (s++, t++), t += 3) : n > 127 ? t += 2 : t++
            }
            return t
        }
         function C(e, t, s) {
            for (var n = s, i = 0; i < e.length; i++) {
                var o = e.charCodeAt(i);
                if (55296 <= o && o <= 56319) {
                    var r = e.charCodeAt(++i);
                    if (isNaN(r)) throw new Error(I(y.MALFORMED_UNICODE, [o, r]));
                    o = r - 56320 + (o - 55296 << 10) + 65536
                }
                o <= 127 ? t[n++] = o : o <= 2047 ? (t[n++] = o >> 6 & 31 | 192, t[n++] = 63 & o | 128) : o <= 65535 ? (t[n++] = o >> 12 & 15 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128) : (t[n++] = o >> 18 & 7 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128)
            }
            return t
        }
         function b(e, t, s) {
            for (var n, i = "", o = t; o < t + s;) {
                var r = e[o++];
                if (r < 128) n = r;
                else {
                    var c = e[o++] - 128;
                    if (c < 0) throw new Error(I(y.MALFORMED_UTF, [r.toString(16), c.toString(16), ""]));
                    if (r < 224) n = 64 * (r - 192) + c;
                    else {
                        var a = e[o++] - 128;
                        if (a < 0) throw new Error(I(y.MALFORMED_UTF, [r.toString(16), c.toString(16), a.toString(16)]));
                        if (r < 240) n = 4096 * (r - 224) + 64 * c + a;
                        else {
                            var h = e[o++] - 128;
                            if (h < 0) throw new Error(I(y.MALFORMED_UTF, [r.toString(16), c.toString(16), a.toString(16), h.toString(16)]));
                            if (!(r < 248)) throw new Error(I(y.MALFORMED_UTF, [r.toString(16), c.toString(16), a.toString(16), h.toString(16)]));
                            n = 262144 * (r - 240) + 4096 * c + 64 * a + h
                        }
                    }
                }
                n > 65535 && (n -= 65536, i += String.fromCharCode(55296 + (n >> 10)), n = 56320 + (1023 & n)), i += String.fromCharCode(n)
            }
            return i
        }
        E.prototype.encode = function() {
            var e, s = (15 & this.type) << 4,
                n = 0,
                o = [],
                r = 0;
            switch (void 0 !== this.messageIdentifier && (n += 2), this.type) {
                case t:
                    switch (this.mqttVersion) {
                        case 3:
                            n += M.length + 3;
                            break;
                        case 4:
                            n += w.length + 3
                    }
                    n += N(this.clientId) + 2, void 0 !== this.willMessage && (n += N(this.willMessage.destinationName) + 2, (e = this.willMessage.payloadBytes) instanceof Uint8Array || (e = new Uint8Array(u)), n += e.byteLength + 2), void 0 !== this.userName && (n += N(this.userName) + 2), void 0 !== this.password && (n += N(this.password) + 2);
                    break;
                case h:
                    s |= 2;
                    for (var a = 0; a < this.topics.length; a++) o[a] = N(this.topics[a]), n += o[a] + 2;
                    n += this.requestedQos.length;
                    break;
                case d:
                    for (s |= 2, a = 0; a < this.topics.length; a++) o[a] = N(this.topics[a]), n += o[a] + 2;
                    break;
                case c:
                    s |= 2;
                    break;
                case i:
                    this.payloadMessage.duplicate && (s |= 8), s = s |= this.payloadMessage.qos << 1, this.payloadMessage.retained && (s |= 1), n += (r = N(this.payloadMessage.destinationName)) + 2;
                    var u = this.payloadMessage.payloadBytes;
                    n += u.byteLength, u instanceof ArrayBuffer ? u = new Uint8Array(u) : u instanceof Uint8Array || (u = new Uint8Array(u.buffer))
            }
            var l = function(e) {
                    var t = new Array(1),
                        s = 0;
                    do {
                        var n = e % 128;
                        (e >>= 7) > 0 && (n |= 128), t[s++] = n
                    } while (e > 0 && s < 4);
                    return t
                }(n),
                _ = l.length + 1,
                f = new ArrayBuffer(n + _),
                g = new Uint8Array(f);
            if (g[0] = s, g.set(l, 1), this.type == i) _ = O(this.payloadMessage.destinationName, r, g, _);
            else if (this.type == t) {
                switch (this.mqttVersion) {
                    case 3:
                        g.set(M, _), _ += M.length;
                        break;
                    case 4:
                        g.set(w, _), _ += w.length
                }
                var p = 0;
                this.cleanSession && (p = 2), void 0 !== this.willMessage && (p |= 4, p |= this.willMessage.qos << 3, this.willMessage.retained && (p |= 32)), void 0 !== this.userName && (p |= 128), void 0 !== this.password && (p |= 64), g[_++] = p, _ = T(this.keepAliveInterval, g, _)
            }
            switch (void 0 !== this.messageIdentifier && (_ = T(this.messageIdentifier, g, _)), this.type) {
                case t:
                    _ = O(this.clientId, N(this.clientId), g, _), void 0 !== this.willMessage && (_ = O(this.willMessage.destinationName, N(this.willMessage.destinationName), g, _), _ = T(e.byteLength, g, _), g.set(e, _), _ += e.byteLength), void 0 !== this.userName && (_ = O(this.userName, N(this.userName), g, _)), void 0 !== this.password && (_ = O(this.password, N(this.password), g, _));
                    break;
                case i:
                    g.set(u, _);
                    break;
                case h:
                    for (a = 0; a < this.topics.length; a++) _ = O(this.topics[a], o[a], g, _), g[_++] = this.requestedQos[a];
                    break;
                case d:
                    for (a = 0; a < this.topics.length; a++) _ = O(this.topics[a], o[a], g, _)
            }
            return f
        };
        var R = function(t, s) {
                this._client = t, this._keepAliveInterval = 1e3 * s, this.isReset = !1;
                var n = new E(_).encode(),
                    i = function(e) {
                        return function() {
                            return o.apply(e)
                        }
                    },
                    o = function() {
                        this.isReset ? (this.isReset = !1, this._client._trace("Pinger.doPing", "send PINGREQ"), e.sendSocketMessage({
                            data: n,
                            success: function() {},
                            fail: function() {},
                            complete: function() {}
                        }), this.timeout = setTimeout(i(this), this._keepAliveInterval)) : (this._client._trace("Pinger.doPing", "Timed out"), this._client._disconnected(y.PING_TIMEOUT.code, I(y.PING_TIMEOUT)))
                    };
                this.reset = function() {
                    this.isReset = !0, clearTimeout(this.timeout), this._keepAliveInterval > 0 && (this.timeout = setTimeout(i(this), this._keepAliveInterval))
                }, this.cancel = function() {
                    clearTimeout(this.timeout)
                }
            },
            D = function(e, t, s, n) {
                t || (t = 30), this.timeout = setTimeout(function(e, t, s) {
                    return function() {
                        return e.apply(t, s)
                    }
                }(s, e, n), 1e3 * t), this.cancel = function() {
                    clearTimeout(this.timeout)
                }
            },
            P = function(t, s, n, i, o) {
                for (var r in this._trace("Paho.MQTT.Client", t, s, n, i, o), this.host = s, this.port = n, this.path = i, this.uri = t, this.clientId = o, this._wsuri = null, this._localKey = s + ":" + n + ("/mqtt" != i ? ":" + i : "") + ":" + o + ":", this._msg_queue = [], this._buffered_msg_queue = [], this._sentMessages = {}, this._receivedMessages = {}, this._notify_msg_sent = {}, this._message_identifier = 1, this._sequence = 0, e.getStorageInfoSync().keys) 0 !== r.indexOf("Sent:" + this._localKey) && 0 !== r.indexOf("Received:" + this._localKey) || this.restore(r)
            };
        P.prototype.host = null, P.prototype.port = null, P.prototype.path = null, P.prototype.uri = null, P.prototype.clientId = null, P.prototype.socket = null, P.prototype.connected = !1, P.prototype.maxMessageIdentifier = 65536, P.prototype.connectOptions = null, P.prototype.hostIndex = null, P.prototype.onConnected = null, P.prototype.onConnectionLost = null, P.prototype.onMessageDelivered = null, P.prototype.onMessageArrived = null, P.prototype.traceFunction = null, P.prototype._msg_queue = null, P.prototype._buffered_msg_queue = null, P.prototype._connectTimeout = null, P.prototype.sendPinger = null, P.prototype.receivePinger = null, P.prototype._reconnectInterval = 1, P.prototype._reconnecting = !1, P.prototype._reconnectTimeout = null, P.prototype.disconnectedPublishing = !1, P.prototype.disconnectedBufferSize = 5e3, P.prototype.receiveBuffer = null, P.prototype._traceBuffer = null, P.prototype._MAX_TRACE_ENTRIES = 100, P.prototype.connect = function(e) {
            var t = this._traceMask(e, "password");
            this._trace("Client.connect", t, null, this.connected), this.connected || (this._reconnecting && (this._reconnectTimeout.cancel(), this._reconnectTimeout = null, this._reconnecting = !1), this.connectOptions = e, this._reconnectInterval = 1, this._reconnecting = !1, e.uris ? (this.hostIndex = 0, this._doConnect(e.uris[0])) : this._doConnect(this.uri))
        }, P.prototype.subscribe = function(e, t) {
            if (this._trace("Client.subscribe", e, t), !this.connected) throw new Error(I(y.INVALID_STATE, ["not connected"]));
            var s = new E(h);
            s.topics = [e], void 0 !== t.qos ? s.requestedQos = [t.qos] : s.requestedQos = [0], t.onSuccess && (s.onSuccess = function(e) {
                t.onSuccess({
                    invocationContext: t.invocationContext,
                    grantedQos: e
                })
            }), t.onFailure && (s.onFailure = function(e) {
                t.onFailure({
                    invocationContext: t.invocationContext,
                    errorCode: e,
                    errorMessage: I(e)
                })
            }), t.timeout && (s.timeOut = new D(this, t.timeout, t.onFailure, [{
                invocationContext: t.invocationContext,
                errorCode: y.SUBSCRIBE_TIMEOUT.code,
                errorMessage: I(y.SUBSCRIBE_TIMEOUT)
            }])), this._requires_ack(s), this._schedule_message(s)
        }, P.prototype.unsubscribe = function(e, t) {
            if (this._trace("Client.unsubscribe", e, t), !this.connected) throw new Error(I(y.INVALID_STATE, ["not connected"]));
            var s = new E(d);
            s.topics = [e], t.onSuccess && (s.callback = function() {
                t.onSuccess({
                    invocationContext: t.invocationContext
                })
            }), t.timeout && (s.timeOut = new D(this, t.timeout, t.onFailure, [{
                invocationContext: t.invocationContext,
                errorCode: y.UNSUBSCRIBE_TIMEOUT.code,
                errorMessage: I(y.UNSUBSCRIBE_TIMEOUT)
            }])), this._requires_ack(s), this._schedule_message(s)
        }, P.prototype.send = function(e) {
            this._trace("Client.send", e);
            var t = new E(i);
            if (t.payloadMessage = e, this.connected) e.qos > 0 ? this._requires_ack(t) : this.onMessageDelivered && (this._notify_msg_sent[t] = this.onMessageDelivered(t.payloadMessage)), this._schedule_message(t);
            else {
                if (!this._reconnecting || !this.disconnectedPublishing) throw new Error(I(y.INVALID_STATE, ["not connected"]));
                if (Object.keys(this._sentMessages).length + this._buffered_msg_queue.length > this.disconnectedBufferSize) throw new Error(I(y.BUFFER_FULL, [this.disconnectedBufferSize]));
                e.qos > 0 ? this._requires_ack(t) : (t.sequence = ++this._sequence, this._buffered_msg_queue.push(t))
            }
        }, P.prototype.disconnect = function() {
            if (this._trace("Client.disconnect"), this._reconnecting && (this._reconnectTimeout.cancel(), this._reconnectTimeout = null, this._reconnecting = !1), this.connected) {
                var e = new E(g);
                this._notify_msg_sent[e] = v(this._disconnected, this), this._schedule_message(e)
            }
        }, P.prototype.getTraceLog = function() {
            if (null !== this._traceBuffer) {
                for (var e in this._trace("Client.getTraceLog", new Date), this._trace("Client.getTraceLog in flight messages", this._sentMessages.length), this._sentMessages) this._trace("_sentMessages ", e, this._sentMessages[e]);
                for (var e in this._receivedMessages) this._trace("_receivedMessages ", e, this._receivedMessages[e]);
                return this._traceBuffer
            }
        }, P.prototype.startTrace = function() {
            null === this._traceBuffer && (this._traceBuffer = []), this._trace("Client.startTrace", new Date, "@VERSION@")
        }, P.prototype.stopTrace = function() {
            delete this._traceBuffer
        }, P.prototype._doConnect = function(t) {
            if (this.connectOptions.useSSL) {
                var s = t.split(":");
                s[0] = "wss", t = s.join(":")
            }
            this._wsuri = t, this.connected = !1, e.connectSocket({
                url: t,
                protocols: ["mqtt"]
            }), e.onSocketOpen(v(this._on_socket_open, this)), e.onSocketMessage(v(this._on_socket_message, this)), e.onSocketError(v(this._on_socket_error, this)), e.onSocketClose(v(this._on_socket_close, this)), this.sendPinger = new R(this, this.connectOptions.keepAliveInterval), this.receivePinger = new R(this, this.connectOptions.keepAliveInterval), this._connectTimeout && (this._connectTimeout.cancel(), this._connectTimeout = null), this._connectTimeout = new D(this, this.connectOptions.timeout, this._disconnected, [y.CONNECT_TIMEOUT.code, I(y.CONNECT_TIMEOUT)])
        }, P.prototype._schedule_message = function(e) {
            this._msg_queue.push(e), this.connected && this._process_queue()
        }, P.prototype.store = function(t, s) {
            var n = {
                type: s.type,
                messageIdentifier: s.messageIdentifier,
                version: 1
            };
            switch (s.type) {
                case i:
                    s.pubRecReceived && (n.pubRecReceived = !0), n.payloadMessage = {};
                    for (var o = "", r = s.payloadMessage.payloadBytes, c = 0; c < r.length; c++) r[c] <= 15 ? o = o + "0" + r[c].toString(16) : o += r[c].toString(16);
                    n.payloadMessage.payloadHex = o, n.payloadMessage.qos = s.payloadMessage.qos, n.payloadMessage.destinationName = s.payloadMessage.destinationName, s.payloadMessage.duplicate && (n.payloadMessage.duplicate = !0), s.payloadMessage.retained && (n.payloadMessage.retained = !0), 0 === t.indexOf("Sent:") && (void 0 === s.sequence && (s.sequence = ++this._sequence), n.sequence = s.sequence);
                    break;
                default:
                    throw Error(I(y.INVALID_STORED_DATA, [key, n]))
            }
            try {
                e.setStorageSync(t + this._localKey + s.messageIdentifier, JSON.stringify(n))
            } catch (e) {}
        }, P.prototype.restore = function(t) {
            var s = e.getStorageSync(t),
                n = JSON.parse(s),
                o = new E(n.type, n);
            switch (n.type) {
                case i:
                    for (var r = n.payloadMessage.payloadHex, c = new ArrayBuffer(r.length / 2), a = new Uint8Array(c), h = 0; r.length >= 2;) {
                        var u = parseInt(r.substring(0, 2), 16);
                        r = r.substring(2, r.length), a[h++] = u
                    }
                    var d = new U(a);
                    d.qos = n.payloadMessage.qos, d.destinationName = n.payloadMessage.destinationName, n.payloadMessage.duplicate && (d.duplicate = !0), n.payloadMessage.retained && (d.retained = !0), o.payloadMessage = d;
                    break;
                default:
                    throw Error(I(y.INVALID_STORED_DATA, [t, s]))
            }
            0 === t.indexOf("Sent:" + this._localKey) ? (o.payloadMessage.duplicate = !0, this._sentMessages[o.messageIdentifier] = o) : 0 === t.indexOf("Received:" + this._localKey) && (this._receivedMessages[o.messageIdentifier] = o)
        }, P.prototype._process_queue = function() {
            for (var e = null, t = this._msg_queue.reverse(); e = t.pop();) this._socket_send(e), this._notify_msg_sent[e] && (this._notify_msg_sent[e](), delete this._notify_msg_sent[e])
        }, P.prototype._requires_ack = function(e) {
            var t = Object.keys(this._sentMessages).length;
            if (t > this.maxMessageIdentifier) throw Error("Too many messages:" + t);
            for (; void 0 !== this._sentMessages[this._message_identifier];) this._message_identifier++;
            e.messageIdentifier = this._message_identifier, this._sentMessages[e.messageIdentifier] = e, e.type === i && this.store("Sent:", e), this._message_identifier === this.maxMessageIdentifier && (this._message_identifier = 1)
        }, P.prototype._on_socket_open = function(e) {
            var s = new E(t, this.connectOptions);
            s.clientId = this.clientId, this._socket_send(s)
        }, P.prototype._on_socket_message = function(e) {
            this._trace("Client._on_socket_message", e.data);
            for (var t = this._deframeMessages(e.data), s = 0; s < t.length; s += 1) this._handleMessage(t[s])
        }, P.prototype._deframeMessages = function(e) {
            var t = new Uint8Array(e),
                s = [];
            if (this.receiveBuffer) {
                var n = new Uint8Array(this.receiveBuffer.length + t.length);
                n.set(this.receiveBuffer), n.set(t, this.receiveBuffer.length), t = n, delete this.receiveBuffer
            }
            try {
                for (var i = 0; i < t.length;) {
                    var o = A(t, i),
                        r = o[0];
                    if (i = o[1], null === r) break;
                    s.push(r)
                }
                i < t.length && (this.receiveBuffer = t.subarray(i))
            } catch (e) {
                var c = "undefined" == e.hasOwnProperty("stack") ? e.stack.toString() : "No Error Stack Available";
                return void this._disconnected(y.INTERNAL_ERROR.code, I(y.INTERNAL_ERROR, [e.message, c]))
            }
            return s
        }, P.prototype._handleMessage = function(t) {
            this._trace("Client._handleMessage", t);
            try {
                switch (t.type) {
                    case n:
                        if (this._connectTimeout.cancel(), this._reconnectTimeout && this._reconnectTimeout.cancel(), this.connectOptions.cleanSession) {
                            for (var s in this._sentMessages) {
                                var h = this._sentMessages[s];
                                e.removeStorageSync("Sent:" + this._localKey + h.messageIdentifier)
                            }
                            for (var s in this._sentMessages = {}, this._receivedMessages) {
                                var d = this._receivedMessages[s];
                                e.removeStorageSync("Received:" + this._localKey + d.messageIdentifier)
                            }
                            this._receivedMessages = {}
                        }
                        if (0 !== t.returnCode) {
                            this._disconnected(y.CONNACK_RETURNCODE.code, I(y.CONNACK_RETURNCODE, [t.returnCode, m[t.returnCode]]));
                            break
                        }
                        this.connected = !0, this.connectOptions.uris && (this.hostIndex = this.connectOptions.uris.length);
                        var _ = [];
                        for (var p in this._sentMessages) this._sentMessages.hasOwnProperty(p) && _.push(this._sentMessages[p]);
                        if (this._buffered_msg_queue.length > 0)
                            for (var v = null, M = this._buffered_msg_queue.reverse(); v = M.pop();) _.push(v), this.onMessageDelivered && (this._notify_msg_sent[v] = this.onMessageDelivered(v.payloadMessage));
                        _ = _.sort((function(e, t) {
                            return e.sequence - t.sequence
                        }));
                        for (var w = 0, A = _.length; w < A; w++)
                            if ((h = _[w]).type == i && h.pubRecReceived) {
                                var T = new E(c, {
                                    messageIdentifier: h.messageIdentifier
                                });
                                this._schedule_message(T)
                            } else this._schedule_message(h);
                        this.connectOptions.onSuccess && this.connectOptions.onSuccess({
                            invocationContext: this.connectOptions.invocationContext
                        });
                        var O = !1;
                        this._reconnecting && (O = !0, this._reconnectInterval = 1, this._reconnecting = !1), this._connected(O, this._wsuri), this._process_queue();
                        break;
                    case i:
                        this._receivePublish(t);
                        break;
                    case o:
                        (h = this._sentMessages[t.messageIdentifier]) && (delete this._sentMessages[t.messageIdentifier], e.removeStorageSync("Sent:" + this._localKey + t.messageIdentifier), this.onMessageDelivered && this.onMessageDelivered(h.payloadMessage));
                        break;
                    case r:
                        (h = this._sentMessages[t.messageIdentifier]) && (h.pubRecReceived = !0, T = new E(c, {
                            messageIdentifier: t.messageIdentifier
                        }), this.store("Sent:", h), this._schedule_message(T));
                        break;
                    case c:
                        d = this._receivedMessages[t.messageIdentifier], e.removeStorageSync("Received:" + this._localKey + t.messageIdentifier), d && (this._receiveMessage(d), delete this._receivedMessages[t.messageIdentifier]);
                        var S = new E(a, {
                            messageIdentifier: t.messageIdentifier
                        });
                        this._schedule_message(S);
                        break;
                    case a:
                        h = this._sentMessages[t.messageIdentifier], delete this._sentMessages[t.messageIdentifier], e.removeStorageSync("Sent:" + this._localKey + t.messageIdentifier), this.onMessageDelivered && this.onMessageDelivered(h.payloadMessage);
                        break;
                    case u:
                        (h = this._sentMessages[t.messageIdentifier]) && (h.timeOut && h.timeOut.cancel(), 128 === t.returnCode[0] ? h.onFailure && h.onFailure(t.returnCode) : h.onSuccess && h.onSuccess(t.returnCode), delete this._sentMessages[t.messageIdentifier]);
                        break;
                    case l:
                        (h = this._sentMessages[t.messageIdentifier]) && (h.timeOut && h.timeOut.cancel(), h.callback && h.callback(), delete this._sentMessages[t.messageIdentifier]);
                        break;
                    case f:
                        this.sendPinger.reset();
                        break;
                    case g:
                        this._disconnected(y.INVALID_MQTT_MESSAGE_TYPE.code, I(y.INVALID_MQTT_MESSAGE_TYPE, [t.type]));
                        break;
                    default:
                        this._disconnected(y.INVALID_MQTT_MESSAGE_TYPE.code, I(y.INVALID_MQTT_MESSAGE_TYPE, [t.type]))
                }
            } catch (e) {
                var N = "undefined" == e.hasOwnProperty("stack") ? e.stack.toString() : "No Error Stack Available";
                return void this._disconnected(y.INTERNAL_ERROR.code, I(y.INTERNAL_ERROR, [e.message, N]))
            }
        }, P.prototype._on_socket_error = function(e) {
            this._reconnecting || this._disconnected(y.SOCKET_ERROR.code, I(y.SOCKET_ERROR, [e.data]))
        }, P.prototype._on_socket_close = function() {
            this._reconnecting || this._disconnected(y.SOCKET_CLOSE.code, I(y.SOCKET_CLOSE))
        }, P.prototype._socket_send = function(t) {
            if (1 == t.type) {
                var s = this._traceMask(t, "password");
                this._trace("Client._socket_send", s)
            } else this._trace("Client._socket_send", t);
            e.sendSocketMessage({
                data: t.encode(),
                success: function() {},
                fail: function() {},
                complete: function() {}
            }), this.sendPinger.reset()
        }, P.prototype._receivePublish = function(e) {
            switch (e.payloadMessage.qos) {
                case "undefined":
                case 0:
                    this._receiveMessage(e);
                    break;
                case 1:
                    var t = new E(o, {
                        messageIdentifier: e.messageIdentifier
                    });
                    this._schedule_message(t), this._receiveMessage(e);
                    break;
                case 2:
                    this._receivedMessages[e.messageIdentifier] = e, this.store("Received:", e);
                    var s = new E(r, {
                        messageIdentifier: e.messageIdentifier
                    });
                    this._schedule_message(s);
                    break;
                default:
                    throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos)
            }
        }, P.prototype._receiveMessage = function(e) {
            this.onMessageArrived && this.onMessageArrived(e.payloadMessage)
        }, P.prototype._connected = function(e, t) {
            this.onConnected && this.onConnected(e, t)
        }, P.prototype._reconnect = function() {
            this._trace("Client._reconnect"), this.connected || (this._reconnecting = !0, this.sendPinger.cancel(), this.receivePinger.cancel(), this._reconnectInterval < 128 && (this._reconnectInterval = 2 * this._reconnectInterval), this.connectOptions.uris ? (this.hostIndex = 0, this._doConnect(this.connectOptions.uris[0])) : this._doConnect(this.uri))
        }, P.prototype._disconnected = function(t, s) {
            if (this._trace("Client._disconnected", t, s), void 0 !== t && this._reconnecting) this._reconnectTimeout = new D(this, this._reconnectInterval, this._reconnect);
            else if (this.sendPinger.cancel(), this.receivePinger.cancel(), this._connectTimeout && (this._connectTimeout.cancel(), this._connectTimeout = null), this._msg_queue = [], this._buffered_msg_queue = [], this._notify_msg_sent = {}, this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) this.hostIndex++, this._doConnect(this.connectOptions.uris[this.hostIndex]);
            else if (void 0 === t && (t = y.OK.code, s = I(y.OK)), this.connected) {
                if (this.connected = !1, e.onSocketClose((function() {})), e.closeSocket(), this.onConnectionLost && this.onConnectionLost({
                        errorCode: t,
                        errorMessage: s,
                        reconnect: this.connectOptions.reconnect,
                        uri: this._wsuri
                    }), t !== y.OK.code && this.connectOptions.reconnect) return this._reconnectInterval = 1, void this._reconnect()
            } else 4 === this.connectOptions.mqttVersion && !1 === this.connectOptions.mqttVersionExplicit ? (this._trace("Failed to connect V4, dropping back to V3"), this.connectOptions.mqttVersion = 3, this.connectOptions.uris ? (this.hostIndex = 0, this._doConnect(this.connectOptions.uris[0])) : this._doConnect(this.uri)) : this.connectOptions.onFailure && this.connectOptions.onFailure({
                invocationContext: this.connectOptions.invocationContext,
                errorCode: t,
                errorMessage: s
            })
        }, P.prototype._trace = function() {
            if (this.traceFunction) {
                for (var e in arguments) void 0 !== arguments[e] && arguments.splice(e, 1, JSON.stringify(arguments[e]));
                var t = Array.prototype.slice.call(arguments).join("");
                this.traceFunction({
                    severity: "Debug",
                    message: t
                })
            }
            if (null !== this._traceBuffer) {
                e = 0;
                for (var s = arguments.length; e < s; e++) this._traceBuffer.length == this._MAX_TRACE_ENTRIES && this._traceBuffer.shift(), 0 === e || void 0 === arguments[e] ? this._traceBuffer.push(arguments[e]) : this._traceBuffer.push("  " + JSON.stringify(arguments[e]))
            }
        }, P.prototype._traceMask = function(e, t) {
            var s = {};
            for (var n in e) e.hasOwnProperty(n) && (s[n] = n == t ? "******" : e[n]);
            return s
        };
        var k = function(e, t, n, i) {
            var o;
            if ("string" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "host"]));
            if (2 == arguments.length) {
                i = t;
                var r = (o = e).match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
                if (!r) throw new Error(I(y.INVALID_ARGUMENT, [e, "host"]));
                e = r[4] || r[2], t = parseInt(r[7]), n = r[8]
            } else {
                if (3 == arguments.length && (i = n, n = "/mqtt"), "number" != typeof t || t < 0) throw new Error(I(y.INVALID_TYPE, [s(t), "port"]));
                if ("string" != typeof n) throw new Error(I(y.INVALID_TYPE, [s(n), "path"]));
                var c = -1 !== e.indexOf(":") && "[" !== e.slice(0, 1) && "]" !== e.slice(-1);
                o = "ws://" + (c ? "[" + e + "]" : e) + ":" + t + n
            }
            for (var a = 0, h = 0; h < i.length; h++) {
                var u = i.charCodeAt(h);
                55296 <= u && u <= 56319 && h++, a++
            }
            if ("string" != typeof i || a > 65535) throw new Error(I(y.INVALID_ARGUMENT, [i, "clientId"]));
            var d = new P(o, e, t, n, i);
            this._getHost = function() {
                return e
            }, this._setHost = function() {
                throw new Error(I(y.UNSUPPORTED_OPERATION))
            }, this._getPort = function() {
                return t
            }, this._setPort = function() {
                throw new Error(I(y.UNSUPPORTED_OPERATION))
            }, this._getPath = function() {
                return n
            }, this._setPath = function() {
                throw new Error(I(y.UNSUPPORTED_OPERATION))
            }, this._getURI = function() {
                return o
            }, this._setURI = function() {
                throw new Error(I(y.UNSUPPORTED_OPERATION))
            }, this._getClientId = function() {
                return d.clientId
            }, this._setClientId = function() {
                throw new Error(I(y.UNSUPPORTED_OPERATION))
            }, this._getOnConnected = function() {
                return d.onConnected
            }, this._setOnConnected = function(e) {
                if ("function" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "onConnected"]));
                d.onConnected = e
            }, this._getDisconnectedPublishing = function() {
                return d.disconnectedPublishing
            }, this._setDisconnectedPublishing = function(e) {
                d.disconnectedPublishing = e
            }, this._getDisconnectedBufferSize = function() {
                return d.disconnectedBufferSize
            }, this._setDisconnectedBufferSize = function(e) {
                d.disconnectedBufferSize = e
            }, this._getOnConnectionLost = function() {
                return d.onConnectionLost
            }, this._setOnConnectionLost = function(e) {
                if ("function" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "onConnectionLost"]));
                d.onConnectionLost = e
            }, this._getOnMessageDelivered = function() {
                return d.onMessageDelivered
            }, this._setOnMessageDelivered = function(e) {
                if ("function" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "onMessageDelivered"]));
                d.onMessageDelivered = e
            }, this._getOnMessageArrived = function() {
                return d.onMessageArrived
            }, this._setOnMessageArrived = function(e) {
                if ("function" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "onMessageArrived"]));
                d.onMessageArrived = e
            }, this._getTrace = function() {
                return d.traceFunction
            }, this._setTrace = function(e) {
                if ("function" != typeof e) throw new Error(I(y.INVALID_TYPE, [s(e), "onTrace"]));
                d.traceFunction = e
            }, this.connect = function(e) {
                if (p(e = e || {}, {
                        timeout: "number",
                        userName: "string",
                        password: "string",
                        willMessage: "object",
                        keepAliveInterval: "number",
                        cleanSession: "boolean",
                        useSSL: "boolean",
                        invocationContext: "object",
                        onSuccess: "function",
                        onFailure: "function",
                        hosts: "object",
                        ports: "object",
                        reconnect: "boolean",
                        mqttVersion: "number",
                        mqttVersionExplicit: "boolean",
                        uris: "object"
                    }), void 0 === e.keepAliveInterval && (e.keepAliveInterval = 60), e.mqttVersion > 4 || e.mqttVersion < 3) throw new Error(I(y.INVALID_ARGUMENT, [e.mqttVersion, "connectOptions.mqttVersion"]));
                if (void 0 === e.mqttVersion ? (e.mqttVersionExplicit = !1, e.mqttVersion = 4) : e.mqttVersionExplicit = !0, void 0 !== e.password && void 0 === e.userName) throw new Error(I(y.INVALID_ARGUMENT, [e.password, "connectOptions.password"]));
                if (e.willMessage) {
                    if (!(e.willMessage instanceof U)) throw new Error(I(y.INVALID_TYPE, [e.willMessage, "connectOptions.willMessage"]));
                    if (e.willMessage.stringPayload = null, void 0 === e.willMessage.destinationName) throw new Error(I(y.INVALID_TYPE, [s(e.willMessage.destinationName), "connectOptions.willMessage.destinationName"]))
                }
                if (void 0 === e.cleanSession && (e.cleanSession = !0), e.hosts) {
                    if (!(e.hosts instanceof Array)) throw new Error(I(y.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"]));
                    if (e.hosts.length < 1) throw new Error(I(y.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"]));
                    for (var t = !1, i = 0; i < e.hosts.length; i++) {
                        if ("string" != typeof e.hosts[i]) throw new Error(I(y.INVALID_TYPE, [s(e.hosts[i]), "connectOptions.hosts[" + i + "]"]));
                        if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[i])) {
                            if (0 === i) t = !0;
                            else if (!t) throw new Error(I(y.INVALID_ARGUMENT, [e.hosts[i], "connectOptions.hosts[" + i + "]"]))
                        } else if (t) throw new Error(I(y.INVALID_ARGUMENT, [e.hosts[i], "connectOptions.hosts[" + i + "]"]))
                    }
                    if (t) e.uris = e.hosts;
                    else {
                        if (!e.ports) throw new Error(I(y.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                        if (!(e.ports instanceof Array)) throw new Error(I(y.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                        if (e.hosts.length !== e.ports.length) throw new Error(I(y.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                        for (e.uris = [], i = 0; i < e.hosts.length; i++) {
                            if ("number" != typeof e.ports[i] || e.ports[i] < 0) throw new Error(I(y.INVALID_TYPE, [s(e.ports[i]), "connectOptions.ports[" + i + "]"]));
                            var r = e.hosts[i],
                                c = e.ports[i],
                                a = -1 !== r.indexOf(":");
                            o = "ws://" + (a ? "[" + r + "]" : r) + ":" + c + n, e.uris.push(o)
                        }
                    }
                }
                d.connect(e)
            }, this.subscribe = function(e, t) {
                if ("string" != typeof e) throw new Error("Invalid argument:" + e);
                if (p(t = t || {}, {
                        qos: "number",
                        invocationContext: "object",
                        onSuccess: "function",
                        onFailure: "function",
                        timeout: "number"
                    }), t.timeout && !t.onFailure) throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
                if (void 0 !== t.qos && 0 !== t.qos && 1 !== t.qos && 2 !== t.qos) throw new Error(I(y.INVALID_ARGUMENT, [t.qos, "subscribeOptions.qos"]));
                d.subscribe(e, t)
            }, this.unsubscribe = function(e, t) {
                if ("string" != typeof e) throw new Error("Invalid argument:" + e);
                if (p(t = t || {}, {
                        invocationContext: "object",
                        onSuccess: "function",
                        onFailure: "function",
                        timeout: "number"
                    }), t.timeout && !t.onFailure) throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
                d.unsubscribe(e, t)
            }, this.send = function(e, t, n, i) {
                var o;
                if (0 === arguments.length) throw new Error("Invalid argument.length");
                if (1 == arguments.length) {
                    if (!(e instanceof U) && "string" != typeof e) throw new Error("Invalid argument:" + s(e));
                    if (void 0 === (o = e).destinationName) throw new Error(I(y.INVALID_ARGUMENT, [o.destinationName, "Message.destinationName"]));
                    d.send(o)
                } else(o = new U(t)).destinationName = e, arguments.length >= 3 && (o.qos = n), arguments.length >= 4 && (o.retained = i), d.send(o)
            }, this.publish = function(e, t, n, i) {
                var o;
                if (console.log("Publising message to: ", e), 0 === arguments.length) throw new Error("Invalid argument.length");
                if (1 == arguments.length) {
                    if (!(e instanceof U) && "string" != typeof e) throw new Error("Invalid argument:" + s(e));
                    if (void 0 === (o = e).destinationName) throw new Error(I(y.INVALID_ARGUMENT, [o.destinationName, "Message.destinationName"]));
                    d.send(o)
                } else(o = new U(t)).destinationName = e, arguments.length >= 3 && (o.qos = n), arguments.length >= 4 && (o.retained = i), d.send(o)
            }, this.disconnect = function() {
                d.disconnect()
            }, this.getTraceLog = function() {
                return d.getTraceLog()
            }, this.startTrace = function() {
                d.startTrace()
            }, this.stopTrace = function() {
                d.stopTrace()
            }, this.isConnected = function() {
                return d.connected
            }
        };
        k.prototype = {get host() {
                return this._getHost()
            },
            set host(e) {
                this._setHost(e)
            },
            get port() {
                return this._getPort()
            },
            set port(e) {
                this._setPort(e)
            },
            get path() {
                return this._getPath()
            },
            set path(e) {
                this._setPath(e)
            },
            get clientId() {
                return this._getClientId()
            },
            set clientId(e) {
                this._setClientId(e)
            },
            get onConnected() {
                return this._getOnConnected()
            },
            set onConnected(e) {
                this._setOnConnected(e)
            },
            get disconnectedPublishing() {
                return this._getDisconnectedPublishing()
            },
            set disconnectedPublishing(e) {
                this._setDisconnectedPublishing(e)
            },
            get disconnectedBufferSize() {
                return this._getDisconnectedBufferSize()
            },
            set disconnectedBufferSize(e) {
                this._setDisconnectedBufferSize(e)
            },
            get onConnectionLost() {
                return this._getOnConnectionLost()
            },
            set onConnectionLost(e) {
                this._setOnConnectionLost(e)
            },
            get onMessageDelivered() {
                return this._getOnMessageDelivered()
            },
            set onMessageDelivered(e) {
                this._setOnMessageDelivered(e)
            },
            get onMessageArrived() {
                return this._getOnMessageArrived()
            },
            set onMessageArrived(e) {
                this._setOnMessageArrived(e)
            },
            get trace() {
                return this._getTrace()
            },
            set trace(e) {
                this._setTrace(e)
            }
        };
        var U = function(e) {
            var t, s;
            if (!("string" == typeof e || e instanceof ArrayBuffer || e instanceof Int8Array || e instanceof Uint8Array || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array)) throw I(y.INVALID_ARGUMENT, [e, "newPayload"]);
            t = e, this._getPayloadString = function() {
                return "string" == typeof t ? t : b(t, 0, t.length)
            }, this._getPayloadBytes = function() {
                if ("string" == typeof t) {
                    var e = new ArrayBuffer(N(t)),
                        s = new Uint8Array(e);
                    return C(t, s, 0), s
                }
                return t
            }, this._getDestinationName = function() {
                return s
            }, this._setDestinationName = function(e) {
                if ("string" != typeof e) throw new Error(I(y.INVALID_ARGUMENT, [e, "newDestinationName"]));
                s = e
            };
            var n = 0;
            this._getQos = function() {
                return n
            }, this._setQos = function(e) {
                if (0 !== e && 1 !== e && 2 !== e) throw new Error("Invalid argument:" + e);
                n = e
            };
            var i = !1;
            this._getRetained = function() {
                return i
            }, this._setRetained = function(e) {
                if ("boolean" != typeof e) throw new Error(I(y.INVALID_ARGUMENT, [e, "newRetained"]));
                i = e
            };
            var o = !1;
            this._getDuplicate = function() {
                return o
            }, this._setDuplicate = function(e) {
                o = e
            }
        };
        return U.prototype = {get payloadString() {
                return this._getPayloadString()
            },
            get payloadBytes() {
                return this._getPayloadBytes()
            },
            get destinationName() {
                return this._getDestinationName()
            },
            set destinationName(e) {
                this._setDestinationName(e)
            },
            get topic() {
                return this._getDestinationName()
            },
            set topic(e) {
                this._setDestinationName(e)
            },
            get qos() {
                return this._getQos()
            },
            set qos(e) {
                this._setQos(e)
            },
            get retained() {
                return this._getRetained()
            },
            set retained(e) {
                this._setRetained(e)
            },
            get duplicate() {
                return this._getDuplicate()
            },
            set duplicate(e) {
                this._setDuplicate(e)
            }
        }, {
            Client: k,
            Message: U
        }
    }(wx)
}, "object" === ("undefined" == typeof exports ? "undefined" : s(exports)) && "object" === ("undefined" == typeof module ? "undefined" : s(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" === ("undefined" == typeof exports ? "undefined" : s(exports)) ? exports = t() : (void 0 === e.Paho && (e.Paho = {}), e.Paho.MQTT = t());