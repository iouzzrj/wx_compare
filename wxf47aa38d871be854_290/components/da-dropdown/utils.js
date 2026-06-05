
 function e(e) {
    var t = parseInt(e);
    return (t = isNaN(t) ? "0" : t.toString())[1] ? t : "0".concat(t)
}
 function t(t, r) {
    var n = new Date(t.toString().length < 11 ? 1e3 * t : t),
        a = ["y", "m", "d", "h", "i", "s"],
        o = [],
        l = n.getFullYear(),
        s = n.getMonth() + 1,
        i = n.getDate(),
        c = n.getHours(),
        u = n.getMinutes(),
        h = n.getSeconds();
    if (r) {
        o.push(l, s, i, c, u, h), o = o.map(e);
        for (var w = 0; w < o.length; w++) r = r.toLowerCase().replace(a[w], o[w]);
        return r
    }
    return "".concat([l, s, i].map(e).join("/"), " ").concat([c, u, h].map(e).join(":"))
}
exports.checkDataField = function e(t, r) {
    var n;
    if (!r || !t || 0 === t.length) return t;
    for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.label = o[r.label || "label"] || null, o.value = o[r.value || "value"] || null, o.suffix = o[r.suffix || "suffix"] || null, o.children = o[r.children || "children"] || null, (null == (n = o.children) ? void 0 : n.length) && (o.options = e(o.options))
    }
    return t
}, exports.deepClone = function e(t) {
    var r, n = Object.prototype.toString.call(t);
    if ("[object Array]" === n) {
        r = [];
        for (var a = 0; a < t.length; a++) r.push(e(t[a]))
    } else if ("[object Object]" === n)
        for (var o in r = {}, t) t.hasOwnProperty(o) && (r[o] = e(t[o]));
    else r = t;
    return r
}, exports.getRangeDate = function(e) {
    var r = new Date,
        n = r.getTime(),
        a = 864e5,
        o = {
            start: "",
            end: ""
        },
        l = r.getDay(),
        s = r.getDate(),
        i = r.getMonth(),
        c = r.getFullYear();
    if ("-1" === e) o.start = t(new Date(n - a), "y-m-d"), o.end = o.start;
    else if ("-7" === e) {
        var u = new Date(c, i, s - l + 1),
            h = new Date(n + a);
        o.start = t(u, "y-m-d"), o.end = t(h, "y-m-d")
    } else if ("-14" === e) {
        var w = new Date(c, i, s - l - 6),
            g = new Date(c, i, s - l);
        o.start = t(w, "y-m-d"), o.end = t(g, "y-m-d")
    } else if ("-30" === e) {
        var d = new Date(c, i, 1),
            f = new Date(n + a);
        o.start = t(d, "y-m-d"), o.end = t(f, "y-m-d")
    } else if ("-60" === e) {
        var p = new Date;
        p.setDate(1), p.setMonth(p.getMonth() - 1);
        var D = p.getMonth(),
            v = new Date(0 === i ? c - 1 : c, D, 1),
            y = new Date(0 === i ? c - 1 : c, D, function(e) {
                var t = new Date(c, e, 1);
                return (new Date(c, e + 1, 1) - t) / a
            }(D));
        o.start = t(v, "y-m-d"), o.end = t(y, "y-m-d")
    } else e > 0 && (o.start = t(new Date(n - a * parseInt(e)), "y-m-d"), o.end = t(new Date(n - a), "y-m-d"));
    return o
}, exports.getValueByKey = function(e, t, r) {
    console.log("object, path", e, t);
    return (Array.isArray(t) ? t : t.replace(/\[/g, ".").replace(/\]/g, "").split(".")).reduce((function(e, t) {
        return console.log(e, t), (e || {})[t]
    }), e) || r
}, exports.menuInitOpts = {
    cell: {
        showArrow: !0
    },
    click: {},
    sort: {
        showSort: !0
    },
    filter: {
        showArrow: !0
    },
    picker: {
        showArrow: !0
    },
    daterange: {
        showQuick: !0,
        showArrow: !0
    },
    slot: {
        showArrow: !0
    },
    search: {
        showSearch: !0
    }
};