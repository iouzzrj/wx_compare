
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
    t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
    n = require("../../../../common/vendor.js"),
    a = function(e) {
        var t = e.lastIndexOf("."),
            n = e.length;
        return {
            name: e.substring(0, t),
            ext: e.substring(t + 1, n)
        }
    };
exports.get_extname = function(e) {
    return Array.isArray(e) ? e : e.replace(/(\[|\])/g, "").split(",")
}, exports.get_file_data = function() {
    var i = t(e().mark((function t(i) {
        var r, s, u, o, l, h = arguments;
        return e().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = h.length > 1 && void 0 !== h[1] ? h[1] : "image", s = a(i.name).ext.toLowerCase(), u = {
                            name: i.name,
                            uuid: i.uuid,
                            extname: s || "",
                            cloudPath: i.cloudPath,
                            fileType: i.fileType,
                            thumbTempFilePath: i.thumbTempFilePath,
                            url: i.path || i.path,
                            size: i.size,
                            image: {},
                            path: i.path,
                            video: {}
                        }, "image" !== r) {
                        e.next = 10;
                        break
                    }
                    return e.next = 6, l = i.path, new Promise((function(e, t) {
                        n.index.getImageInfo({
                            src: l,
                            success: function(t) {
                                e(t)
                            },
                            fail: function(e) {
                                t(e)
                            }
                        })
                    }));
                case 6:
                    o = e.sent, delete u.video, u.image.width = o.width, u.image.height = o.height, u.image.location = o.path, e.next = 11;
                    break;
                case 10:
                    delete u.image;
                case 11:
                    return e.abrupt("return", u);
                case 12:
                case "end":
                    return e.stop()
            }
        }), t)
    })));
    return function(e) {
        return i.apply(this, arguments)
    }
}(), exports.get_files_and_is_max = function(e, t) {
    var i = [],
        r = [];
    return t && 0 !== t.length ? (e.tempFiles.forEach((function(e) {
        var n = a(e.name).ext.toLowerCase(); - 1 !== t.indexOf(n) && (r.push(e), i.push(e.path))
    })), r.length !== e.tempFiles.length && n.index.showToast({
        title: "当前选择了".concat(e.tempFiles.length, "个文件 ，").concat(e.tempFiles.length - r.length, " 个文件格式不正确"),
        icon: "none",
        duration: 5e3
    }), {
        filePaths: i,
        files: r
    }) : {
        filePaths: i,
        files: r
    }
};