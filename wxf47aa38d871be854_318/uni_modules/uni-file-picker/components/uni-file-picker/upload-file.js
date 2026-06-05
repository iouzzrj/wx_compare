
var e = require("../../../../common/vendor.js"),
    r = {
        name: "uploadFile",
        emits: ["uploadFiles", "choose", "delFile"],
        props: {
            filesList: {
                type: Array,
                default: function() {
                    return []
                }
            },
            delIcon: {
                type: Boolean,
                default: !0
            },
            limit: {
                type: [Number, String],
                default: 9
            },
            showType: {
                type: String,
                default: ""
            },
            listStyles: {
                type: Object,
                default: function() {
                    return {
                        border: !0,
                        dividline: !0,
                        borderStyle: {}
                    }
                }
            },
            readonly: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            list: function() {
                var e = [];
                return this.filesList.forEach((function(r) {
                    e.push(r)
                })), e
            },
            styles: function() {
                return Object.assign({
                    border: !0,
                    dividline: !0,
                    "border-style": {}
                }, this.listStyles)
            },
            borderStyle: function() {
                var e = this.styles,
                    r = e.borderStyle,
                    t = {};
                if (e.border) {
                    var o = r && r.width || 1;
                    o = this.value2px(o);
                    var i = r && r.radius || 5;
                    i = this.value2px(i), t = {
                        "border-width": o,
                        "border-style": r && r.style || "solid",
                        "border-color": r && r.color || "#eee",
                        "border-radius": i
                    }
                } else t.border = "none";
                var n = "";
                for (var s in t) n += "".concat(s, ":").concat(t[s], ";");
                return n
            },
            borderLineStyle: function() {
                var e = {},
                    r = this.styles.borderStyle;
                if (r && r.color && (e["border-color"] = r.color), r && r.width) {
                    var t = r && r.width || 1,
                        o = r && r.style || 0;
                    "number" == typeof t ? t += "px" : t = t.indexOf("px") ? t : t + "px", e["border-width"] = t, "number" == typeof o ? o += "px" : o = o.indexOf("px") ? o : o + "px", e["border-top-style"] = o
                }
                var i = "";
                for (var n in e) i += "".concat(n, ":").concat(e[n], ";");
                return i
            }
        },
        methods: {
            uploadFiles: function(e, r) {
                this.$emit("uploadFiles", {
                    item: e,
                    index: r
                })
            },
            choose: function() {
                this.$emit("choose")
            },
            delFile: function(e) {
                this.$emit("delFile", e)
            },
            value2px: function(e) {
                return "number" == typeof e ? e += "px" : e = -1 !== e.indexOf("px") ? e : e + "px", e
            }
        }
    },
    t = e._export_sfc(r, [
        ["render", function(r, t, o, i, n, s) {
            return e.e({
                a: !o.readonly
            }, o.readonly ? {} : {
                b: e.o((function() {
                    return s.choose && s.choose.apply(s, arguments)
                }), "a4")
            }, {
                c: s.list.length > 0
            }, s.list.length > 0 ? {
                d: e.f(s.list, (function(r, t, i) {
                    return e.e({
                        a: e.t(r.name)
                    }, o.delIcon && !o.readonly ? {
                        b: e.o((function(e) {
                            return s.delFile(t)
                        }), t)
                    } : {}, {
                        c: r.progress && 100 !== r.progress || 0 === r.progress
                    }, r.progress && 100 !== r.progress || 0 === r.progress ? {
                        d: -1 === r.progress ? 0 : r.progress,
                        e: r.errMsg ? "#ff5a5f" : "#EBEBEB"
                    } : {}, {
                        f: "error" === r.status
                    }, "error" === r.status ? {
                        g: e.o((function(e) {
                            return s.uploadFiles(r, t)
                        }), t)
                    } : {}, {
                        h: t,
                        i: 0 !== t && s.styles.dividline ? 1 : "",
                        j: e.s(0 !== t && s.styles.dividline && s.borderLineStyle)
                    })
                })),
                e: o.delIcon && !o.readonly,
                f: e.s(s.borderStyle)
            } : {})
        }]
    ]);
wx.createComponent(t);