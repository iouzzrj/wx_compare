
var e, t = require("../../@babel/runtime/helpers/typeof"),
    n = require("../../common/vendor.js"),
    i = require("./qrcode.js"),
    o = {
        name: "tki-qrcode",
        props: {
            cid: {
                type: String,
                default: "tki-qrcode-canvas"
            },
            size: {
                type: Number,
                default: 200
            },
            unit: {
                type: String,
                default: "upx"
            },
            show: {
                type: Boolean,
                default: !0
            },
            val: {
                type: String,
                default: ""
            },
            background: {
                type: String,
                default: "#ffffff"
            },
            foreground: {
                type: String,
                default: "#000000"
            },
            pdground: {
                type: String,
                default: "#000000"
            },
            icon: {
                type: String,
                default: ""
            },
            iconSize: {
                type: Number,
                default: 40
            },
            lv: {
                type: Number,
                default: 3
            },
            onval: {
                type: Boolean,
                default: !1
            },
            loadMake: {
                type: Boolean,
                default: !1
            },
            usingComponents: {
                type: Boolean,
                default: !0
            },
            showLoading: {
                type: Boolean,
                default: !0
            },
            loadingText: {
                type: String,
                default: "二维码生成中"
            }
        },
        data: function() {
            return {
                result: ""
            }
        },
        methods: {
            _makeCode: function() {
                var t = this;
                this._empty(this.val) ? n.index.showToast({
                    title: "二维码内容不能为空",
                    icon: "none",
                    duration: 2e3
                }) : e = new i.QRCode({
                    context: t,
                    canvasId: t.cid,
                    usingComponents: t.usingComponents,
                    showLoading: t.showLoading,
                    loadingText: t.loadingText,
                    text: t.val,
                    size: t.cpSize,
                    background: t.background,
                    foreground: t.foreground,
                    pdground: t.pdground,
                    correctLevel: t.lv,
                    image: t.icon,
                    imageSize: t.iconSize,
                    cbResult: function(e) {
                        t._result(e)
                    }
                })
            },
            _clearCode: function() {
                this._result(""), e.clear()
            },
            _saveCode: function() {
                "" != this.result && n.index.saveImageToPhotosAlbum({
                    filePath: this.result,
                    success: function() {
                        n.index.showToast({
                            title: "二维码保存成功",
                            icon: "success",
                            duration: 2e3
                        })
                    }
                })
            },
            _result: function(e) {
                this.result = e, this.$emit("result", e)
            },
            _empty: function(e) {
                var n = t(e),
                    i = !1;
                return "number" == n && "" == String(e) || "undefined" == n ? i = !0 : "object" == n ? "{}" != JSON.stringify(e) && "[]" != JSON.stringify(e) && null != e || (i = !0) : "string" == n ? "" != e && "undefined" != e && "null" != e && "{}" != e && "[]" != e || (i = !0) : "function" == n && (i = !1), i
            }
        },
        watch: {
            size: function(e, t) {
                var n = this;
                e == t || this._empty(e) || (this.cSize = e, this._empty(this.val) || setTimeout((function() {
                    n._makeCode()
                }), 100))
            },
            val: function(e, t) {
                var n = this;
                this.onval && (e == t || this._empty(e) || setTimeout((function() {
                    n._makeCode()
                }), 0))
            }
        },
        computed: {
            cpSize: function() {
                return "upx" == this.unit ? n.index.upx2px(this.size) : this.size
            }
        },
        mounted: function() {
            var e = this;
            this.loadMake && (this._empty(this.val) || setTimeout((function() {
                e._makeCode()
            }), 0))
        }
    },
    u = n._export_sfc(o, [
        ["render", function(e, t, n, i, o, u) {
            return {
                a: n.cid,
                b: u.cpSize + "px",
                c: u.cpSize + "px",
                d: n.show,
                e: o.result,
                f: u.cpSize + "px",
                g: u.cpSize + "px"
            }
        }]
    ]);
wx.createComponent(u);