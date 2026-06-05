
var e = require("../../../../common/vendor.js"),
    n = "chooseAndUploadFile:fail";
 function i(e, n) {
    return e.tempFiles.forEach((function(e, i) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), n && (e.fileType = n), e.cloudPath = Date.now() + "_" + i + e.name.substring(e.name.lastIndexOf("."))
    })), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map((function(e) {
        return e.path
    }))), e
}
 function o(e, n) {
    var i = n.onChooseFile;
    n.onUploadProgress;
    return e.then((function(e) {
        if (i) {
            var n = i(e);
            if (void 0 !== n) return Promise.resolve(n).then((function(n) {
                return void 0 === n ? e : n
            }))
        }
        return e
    })).then((function(e) {
        return !1 === e ? {
            errMsg: "chooseAndUploadFile:ok",
            tempFilePaths: [],
            tempFiles: []
        } : e
    }))
}
exports.chooseAndUploadFile = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        type: "all"
    };
    return "image" === t.type ? o(function(o) {
        var t = o.count,
            r = o.sizeType,
            s = void 0 === r ? ["original", "compressed"] : r,
            a = o.sourceType,
            u = o.extension;
        return new Promise((function(o, r) {
            e.index.chooseMedia({
                count: t,
                sizeType: s,
                sourceType: a,
                mediaType: ["image"],
                extension: u,
                success: function(e) {
                    e.tempFiles.forEach((function(e) {
                        e.path = e.tempFilePath
                    })), o(i(e, "image"))
                },
                fail: function(e) {
                    r({
                        errMsg: e.errMsg.replace("chooseImage:fail", n)
                    })
                }
            })
        }))
    }(t), t) : "video" === t.type ? o(function(o) {
        var t = o.count,
            r = (o.camera, o.compressed),
            s = o.maxDuration,
            a = o.sourceType,
            u = o.extension;
        return new Promise((function(o, c) {
            e.index.chooseMedia({
                count: t,
                compressed: r,
                maxDuration: s,
                sourceType: a,
                extension: u,
                mediaType: ["video"],
                success: function(e) {
                    var n = e.tempFiles;
                    o(i({
                        errMsg: "chooseVideo:ok",
                        tempFiles: n.map((function(n) {
                            return {
                                name: n.name || "",
                                path: n.tempFilePath,
                                thumbTempFilePath: n.thumbTempFilePath,
                                size: n.size,
                                type: e.tempFile && e.tempFile.type || "",
                                width: n.width,
                                height: n.height,
                                duration: n.duration,
                                fileType: "video",
                                cloudPath: ""
                            }
                        }))
                    }, "video"))
                },
                fail: function(e) {
                    c({
                        errMsg: e.errMsg.replace("chooseVideo:fail", n)
                    })
                }
            })
        }))
    }(t), t) : o(function(o) {
        var t = o.count,
            r = o.extension;
        return new Promise((function(o, s) {
            var a = e.index.chooseFile;
            if (void 0 !== e.wx$1 && "function" == typeof e.wx$1.chooseMessageFile && (a = e.wx$1.chooseMessageFile), "function" != typeof a) return s({
                errMsg: n + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            a({
                type: "all",
                count: t,
                extension: r,
                success: function(e) {
                    o(i(e))
                },
                fail: function(e) {
                    s({
                        errMsg: e.errMsg.replace("chooseFile:fail", n)
                    })
                }
            })
        }))
    }(t), t)
}, exports.uploadCloudFiles = function(n) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        o = arguments.length > 2 ? arguments[2] : void 0,
        t = (n = JSON.parse(JSON.stringify(n))).length,
        r = 0,
        s = this;
    return new Promise((function(a) {
        for (; r < i;) u();
         function u() {
            var i = r++;
            if (i >= t) !n.find((function(e) {
                return !e.url && !e.errMsg
            })) && a(n);
            else {
                var c = n[i],
                    l = s.files.findIndex((function(e) {
                        return e.uuid === c.uuid
                    }));
                c.url = "", delete c.errMsg, e._r.uploadFile({
                    filePath: c.path,
                    cloudPath: c.cloudPath,
                    fileType: c.fileType,
                    onUploadProgress: function(e) {
                        e.index = l, o && o(e)
                    }
                }).then((function(e) {
                    c.url = e.fileID, c.index = l, i < t && u()
                })).catch((function(e) {
                    c.errMsg = e.errMsg || e.message, c.index = l, i < t && u()
                }))
            }
        }
    }))
};