
var e = require("../../../../common/vendor.js"),
    t = {
        name: "uploadImage",
        emits: ["uploadFiles", "choose", "delFile"],
        props: {
            filesList: {
                type: Array,
                default: function() {
                    return []
                }
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            disablePreview: {
                type: Boolean,
                default: !1
            },
            limit: {
                type: [Number, String],
                default: 9
            },
            imageStyles: {
                type: Object,
                default: function() {
                    return {
                        width: "auto",
                        height: "auto",
                        border: {}
                    }
                }
            },
            delIcon: {
                type: Boolean,
                default: !0
            },
            readonly: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            styles: function() {
                return Object.assign({
                    width: "auto",
                    height: "auto",
                    border: {}
                }, this.imageStyles)
            },
            boxStyle: function() {
                var e = this.styles,
                    t = e.width,
                    o = void 0 === t ? "auto" : t,
                    r = e.height,
                    i = void 0 === r ? "auto" : r,
                    s = {};
                "auto" === i ? "auto" !== o ? (s.height = this.value2px(o), s["padding-top"] = 0) : s.height = 0 : (s.height = this.value2px(i), s["padding-top"] = 0), s.width = "auto" === o ? "auto" !== i ? this.value2px(i) : "33.3%" : this.value2px(o);
                var n = "";
                for (var l in s) n += "".concat(l, ":").concat(s[l], ";");
                return n
            },
            borderStyle: function() {
                var e = this.styles.border,
                    t = {};
                if ("boolean" == typeof e) t.border = e ? "1px #eee solid" : "none";
                else {
                    var o = e && e.width || 1;
                    o = this.value2px(o);
                    var r = e && e.radius || 3;
                    r = this.value2px(r), t = {
                        "border-width": o,
                        "border-style": e && e.style || "solid",
                        "border-color": e && e.color || "#eee",
                        "border-radius": r
                    }
                }
                var i = "";
                for (var s in t) i += "".concat(s, ":").concat(t[s], ";");
                return i
            }
        },
        methods: {
            uploadFiles: function(e, t) {
                this.$emit("uploadFiles", e)
            },
            choose: function() {
                this.$emit("choose")
            },
            delFile: function(e) {
                this.$emit("delFile", e)
            },
            prviewImage: function(t, o) {
                var r = [];
                1 === Number(this.limit) && this.disablePreview && !this.disabled && this.$emit("choose"), this.disablePreview || (this.filesList.forEach((function(e) {
                    r.push(e.url)
                })), e.index.previewImage({
                    urls: r,
                    current: o
                }))
            },
            value2px: function(e) {
                return "number" == typeof e ? e += "px" : -1 === e.indexOf("%") && (e = -1 !== e.indexOf("px") ? e : e + "px"), e
            }
        }
    },
    o = e._export_sfc(t, [
        ["render", function(t, o, r, i, s, n) {
            return e.e({
                a: e.f(r.filesList, (function(t, o, i) {
                    return e.e({
                        a: t.url,
                        b: e.o((function(e) {
                            return n.prviewImage(t, o)
                        }), o)
                    }, r.delIcon && !r.readonly ? {
                        c: e.o((function(e) {
                            return n.delFile(o)
                        }), o)
                    } : {}, {
                        d: t.progress && 100 !== t.progress || 0 === t.progress
                    }, t.progress && 100 !== t.progress || 0 === t.progress ? {
                        e: -1 === t.progress ? 0 : t.progress,
                        f: t.errMsg ? "#ff5a5f" : "#EBEBEB"
                    } : {}, {
                        g: t.errMsg
                    }, t.errMsg ? {
                        h: e.o((function(e) {
                            return n.uploadFiles(t, o)
                        }), o)
                    } : {}, {
                        i: o
                    })
                })),
                b: r.delIcon && !r.readonly,
                c: e.s(n.borderStyle),
                d: e.s(n.boxStyle),
                e: r.filesList.length < r.limit && !r.readonly
            }, r.filesList.length < r.limit && !r.readonly ? {
                f: e.s(n.borderStyle),
                g: e.o((function() {
                    return n.choose && n.choose.apply(n, arguments)
                })),
                h: e.s(n.boxStyle)
            } : {})
        }]
    ]);
wx.createComponent(o);