
var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
    t = require("../../../../@babel/runtime/helpers/objectSpread2"),
    i = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
    r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
    s = require("../../../../common/vendor.js"),
    n = require("./choose-and-upload-file.js"),
    l = require("./utils.js"),
    a = {
        name: "uniFilePicker",
        components: {
            uploadImage: function() {
                return "./upload-image.js"
            },
            uploadFile: function() {
                return "./upload-file.js"
            }
        },
        options: {
            virtualHost: !0
        },
        emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
        props: {
            modelValue: {
                type: [Array, Object],
                default: function() {
                    return []
                }
            },
            value: {
                type: [Array, Object],
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
            delIcon: {
                type: Boolean,
                default: !0
            },
            autoUpload: {
                type: Boolean,
                default: !0
            },
            limit: {
                type: [Number, String],
                default: 9
            },
            mode: {
                type: String,
                default: "grid"
            },
            fileMediatype: {
                type: String,
                default: "image"
            },
            fileExtname: {
                type: [Array, String],
                default: function() {
                    return []
                }
            },
            title: {
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
            imageStyles: {
                type: Object,
                default: function() {
                    return {
                        width: "auto",
                        height: "auto"
                    }
                }
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            returnType: {
                type: String,
                default: "array"
            },
            sizeType: {
                type: Array,
                default: function() {
                    return ["original", "compressed"]
                }
            },
            sourceType: {
                type: Array,
                default: function() {
                    return ["album", "camera"]
                }
            },
            provider: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                files: [],
                localValue: []
            }
        },
        watch: {
            value: {
                handler: function(e, t) {
                    this.setValue(e, t)
                },
                immediate: !0
            },
            modelValue: {
                handler: function(e, t) {
                    this.setValue(e, t)
                },
                immediate: !0
            }
        },
        computed: {
            filesList: function() {
                var e = [];
                return this.files.forEach((function(t) {
                    e.push(t)
                })), e
            },
            showType: function() {
                return "image" === this.fileMediatype ? this.mode : "list"
            },
            limitLength: function() {
                return "object" === this.returnType ? 1 : this.limit ? this.limit >= 9 ? 9 : this.limit : 1
            }
        },
        created: function() {
            s.tr.config && s.tr.config.provider || (this.noSpace = !0, s.tr.chooseAndUploadFile = n.chooseAndUploadFile), this.form = this.getForm("uniForms"), this.formItem = this.getForm("uniFormsItem"), this.form && this.formItem && this.formItem.name && (this.rename = this.formItem.name, this.form.inputChildrens.push(this))
        },
        methods: {
            clearFiles: function(e) {
                var t = this;
                0 === e || e ? this.files.splice(e, 1) : (this.files = [], this.$nextTick((function() {
                    t.setEmit()
                }))), this.$nextTick((function() {
                    t.setEmit()
                }))
            },
            upload: function() {
                var e = [];
                return this.files.forEach((function(t, i) {
                    "ready" !== t.status && "error" !== t.status || e.push(Object.assign({}, t))
                })), this.uploadFiles(e)
            },
            setValue: function(e, t) {
                var s = this;
                return r(i().mark((function t() {
                    var n, l, a, o;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = function() {
                                        var e = r(i().mark((function e(t) {
                                            var r;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if ("", r = t.fileID ? t.fileID : t.url, e.t0 = /cloud:\/\/([\w.]+\/?)\S*/.test(r), !e.t0) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        return t.fileID = r, e.next = 7, s.getTempFileURL(r);
                                                    case 7:
                                                        t.url = e.sent;
                                                    case 8:
                                                        return t.url && (t.path = t.url), e.abrupt("return", t);
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), "object" !== s.returnType) {
                                    t.next = 10;
                                    break
                                }
                                if (!e) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 5, n(e);
                            case 5:
                                t.next = 8;
                                break;
                            case 7:
                                e = {};
                            case 8:
                                t.next = 19;
                                break;
                            case 10:
                                e || (e = []), l = 0;
                            case 12:
                                if (!(l < e.length)) {
                                    t.next = 19;
                                    break
                                }
                                return a = e[l], t.next = 16, n(a);
                            case 16:
                                l++, t.next = 12;
                                break;
                            case 19:
                                s.localValue = e, s.form && s.formItem && !s.is_reset && (s.is_reset = !1, s.formItem.setValue(s.localValue)), o = Object.keys(e).length > 0 ? e : [], s.files = [].concat(o);
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            choose: function() {
                this.disabled || (this.files.length >= Number(this.limitLength) && "grid" !== this.showType && "array" === this.returnType ? s.index.showToast({
                    title: "您最多选择 ".concat(this.limitLength, " 个文件"),
                    icon: "none"
                }) : this.chooseFiles())
            },
            chooseFiles: function() {
                var e = this,
                    t = l.get_extname(this.fileExtname);
                s.tr.chooseAndUploadFile({
                    type: this.fileMediatype,
                    compressed: !1,
                    sizeType: this.sizeType,
                    sourceType: this.sourceType,
                    extension: t.length > 0 ? t : void 0,
                    count: this.limitLength - this.files.length,
                    onChooseFile: this.chooseFileCallback,
                    onUploadProgress: function(t) {
                        e.setProgress(t, t.index)
                    }
                }).then((function(t) {
                    e.setSuccessAndError(t.tempFiles)
                })).catch((function(e) {
                    console.log("选择失败", e)
                }))
            },
            chooseFileCallback: function(e) {
                var s = this;
                return r(i().mark((function r() {
                    var n, a, o, u, c, f, p;
                    return i().wrap((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                n = l.get_extname(s.fileExtname), (1 === Number(s.limitLength) && s.disablePreview && !s.disabled || "object" === s.returnType) && (s.files = []), a = l.get_files_and_is_max(e, n), o = a.filePaths, u = a.files, n && n.length > 0 || (o = e.tempFilePaths, u = e.tempFiles), c = [], f = 0;
                            case 6:
                                if (!(f < u.length) || s.limitLength - s.files.length <= 0) {
                                    i.next = 15;
                                    break
                                }
                                return u[f].uuid = Date.now(), i.next = 10, l.get_file_data(u[f], s.fileMediatype);
                            case 10:
                                (p = i.sent).progress = 0, p.status = "ready", s.files.push(p), c.push(t(t({}, p), {}, {
                                    file: u[f]
                                }));
                            case 12:
                                f++, i.next = 6;
                                break;
                            case 15:
                                s.$emit("select", {
                                    tempFiles: c,
                                    tempFilePaths: o
                                }), e.tempFiles = u, s.autoUpload && !s.noSpace || (e.tempFiles = []), e.tempFiles.forEach((function(e, t) {
                                    s.provider && (e.provider = s.provider);
                                    var i = e.name.split("."),
                                        r = i.pop(),
                                        n = i.join(".").replace(/[\s\/\?<>\\:\*\|":]/g, "_");
                                    e.cloudPath = n + "_" + Date.now() + "_" + t + "." + r
                                }));
                            case 16:
                            case "end":
                                return i.stop()
                        }
                    }), r)
                })))()
            },
            uploadFiles: function(e) {
                var t = this;
                return e = [].concat(e), n.uploadCloudFiles.call(this, e, 5, (function(e) {
                    t.setProgress(e, e.index, !0)
                })).then((function(e) {
                    return t.setSuccessAndError(e), e
                })).catch((function(e) {
                    console.log(e)
                }))
            },
            setSuccessAndError: function(e, t) {
                var s = this;
                return r(i().mark((function t() {
                    var r, n, l, a, o, u;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                r = [], n = [], l = [], a = [], o = i().mark((function t() {
                                    var o, c;
                                    return i().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (o = e[u], -1 !== (c = o.uuid ? s.files.findIndex((function(e) {
                                                        return e.uuid === o.uuid
                                                    })) : o.index) && s.files) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return", "break");
                                            case 3:
                                                if ("request:fail" !== o.errMsg) {
                                                    t.next = 7;
                                                    break
                                                }
                                                s.files[c].url = o.path, s.files[c].status = "error", s.files[c].errMsg = o.errMsg, n.push(s.files[c]), a.push(s.files[c].url), t.next = 19;
                                                break;
                                            case 7:
                                                if (s.files[c].errMsg = "", s.files[c].fileID = o.url, !/cloud:\/\/([\w.]+\/?)\S*/.test(o.url)) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return t.next = 11, s.getTempFileURL(o.url);
                                            case 11:
                                                s.files[c].url = t.sent, t.next = 15;
                                                break;
                                            case 14:
                                                s.files[c].url = o.url;
                                            case 15:
                                                s.files[c].status = "success", s.files[c].progress += 1, r.push(s.files[c]), l.push(s.files[c].fileID);
                                            case 19:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })), u = 0;
                            case 3:
                                if (!(u < e.length)) {
                                    t.next = 11;
                                    break
                                }
                                return t.delegateYield(o(), "t0", 5);
                            case 5:
                                if ("break" !== t.t0) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("break", 11);
                            case 8:
                                u++, t.next = 3;
                                break;
                            case 11:
                                r.length > 0 && (s.setEmit(), s.$emit("success", {
                                    tempFiles: s.backObject(r),
                                    tempFilePaths: l
                                })), n.length > 0 && s.$emit("fail", {
                                    tempFiles: s.backObject(n),
                                    tempFilePaths: a
                                });
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            setProgress: function(e, t, i) {
                this.files.length;
                var r = Math.round(100 * e.loaded / e.total),
                    s = t;
                i || (s = this.files.findIndex((function(t) {
                    return t.uuid === e.tempFile.uuid
                }))), -1 !== s && this.files[s] && (this.files[s].progress = r - 1, this.$emit("progress", {
                    index: s,
                    progress: parseInt(r),
                    tempFile: this.files[s]
                }))
            },
            delFile: function(e) {
                var t = this;
                this.$emit("delete", {
                    index: e,
                    tempFile: this.files[e],
                    tempFilePath: this.files[e].url
                }), this.files.splice(e, 1), this.$nextTick((function() {
                    t.setEmit()
                }))
            },
            getFileExt: function(e) {
                var t = e.lastIndexOf("."),
                    i = e.length;
                return {
                    name: e.substring(0, t),
                    ext: e.substring(t + 1, i)
                }
            },
            setEmit: function() {
                var t = [];
                "object" === this.returnType ? (t = this.backObject(this.files)[0], this.localValue = t || null) : (t = this.backObject(this.files), this.localValue || (this.localValue = []), this.localValue = e(t)), this.$emit("update:modelValue", this.localValue)
            },
            backObject: function(e) {
                var t = [];
                return e.forEach((function(e) {
                    t.push({
                        extname: e.extname,
                        fileType: e.fileType,
                        image: e.image,
                        name: e.name,
                        path: e.path,
                        size: e.size,
                        fileID: e.fileID,
                        url: e.url,
                        uuid: e.uuid,
                        status: e.status,
                        cloudPath: e.cloudPath
                    })
                })), t
            },
            getTempFileURL: function(e) {
                return r(i().mark((function t() {
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = {
                                    fileList: [].concat(e)
                                }, t.next = 3, s.tr.getTempFileURL(e);
                            case 3:
                                if (t.t0 = t.sent.fileList[0].tempFileURL, t.t0) {
                                    t.next = 6;
                                    break
                                }
                                t.t0 = "";
                            case 6:
                                return t.abrupt("return", t.t0);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            getForm: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniForms", t = this.$parent, i = t.$options.name; i !== e;) {
                    if (!(t = t.$parent)) return !1;
                    i = t.$options.name
                }
                return t
            }
        }
    };
Array || (s.resolveComponent("upload-image") + s.resolveComponent("upload-file"))();
var o = s._export_sfc(a, [
    ["render", function(e, t, i, r, n, l) {
        return s.e({
            a: i.title
        }, i.title ? {
            b: s.t(i.title),
            c: s.t(l.filesList.length),
            d: s.t(l.limitLength)
        } : {}, {
            e: "image" === i.fileMediatype && "grid" === l.showType
        }, "image" === i.fileMediatype && "grid" === l.showType ? {
            f: s.o(l.uploadFiles),
            g: s.o(l.choose),
            h: s.o(l.delFile),
            i: s.p({
                readonly: i.readonly,
                "image-styles": i.imageStyles,
                "files-list": l.filesList,
                limit: l.limitLength,
                disablePreview: i.disablePreview,
                delIcon: i.delIcon
            })
        } : {}, {
            j: "image" !== i.fileMediatype || "grid" !== l.showType
        }, "image" !== i.fileMediatype || "grid" !== l.showType ? {
            k: s.o(l.uploadFiles),
            l: s.o(l.choose),
            m: s.o(l.delFile),
            n: s.p({
                readonly: i.readonly,
                "list-styles": i.listStyles,
                "files-list": l.filesList,
                showType: l.showType,
                delIcon: i.delIcon
            })
        } : {})
    }]
]);
wx.createComponent(o);