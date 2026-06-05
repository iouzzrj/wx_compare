
var e, t, n, r, a, u, s, o, i = require("../@babel/runtime/helpers/typeof");
e = "undefined" != typeof module && module.exports ? module.exports : (void 0).dateutil = {}, t = Object.prototype.toString, e.lang = {
    en: {}
}, n = "January February March April May June July August September October November December".split(" "), r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), a = {
    FullYear: 6,
    Month: 5,
    Date: 4,
    Hours: 3,
    Minutes: 2,
    Seconds: 1,
    Milliseconds: 0
}, u = {
    yr: "FullYear",
    year: "FullYear",
    years: "FullYear",
    mn: "Month",
    month: "Month",
    months: "Month",
    day: "Date",
    days: "Date",
    date: "Date",
    hr: "Hours",
    hour: "Hours",
    hours: "Hours",
    min: "Minutes",
    minute: "Minutes",
    minutes: "Minutes",
    sec: "Seconds",
    second: "Seconds",
    seconds: "Seconds",
    ms: "Milliseconds",
    millisecond: "Milliseconds",
    milliseconds: "Milliseconds"
}, s = e._parsers = {
    date_and_time: {
        test: /^(?:[+\-]\d{6}|\d{4})(?:(?:\-\d\d){1,2}|\d{4})[T ](?:\d\d)(?::?\d\d){0,2}(?:[\.,]\d+)?(?:Z|[+\-]\d\d(:?\d\d)?)?$/,
        size: 1,
        parse: function(e) {
            var t = e.split(/[T ]/),
                n = s.date.parse(t[0]),
                r = t[1].replace(/:/g, "").match(/^(\d\d)(\d\d)?(\d\d)?(?:[.,](\d+))?([+\-](?:\d\d){1,2})?/),
                a = 0,
                u = n.getTime() + 36e5 * parseInt(r[1], 10) + 6e4 * parseInt(r[2] || "0", 10) + 1e3 * parseInt(r[3] || "0", 10);
            return r[3] ? a = 1e3 : r[2] ? a = 6e4 : r[1] && (a = 36e5), u += parseFloat("0." + (r[4] || "0")) * a, n.setTime(u), n.size = 0, n
        }
    },
    date: {
        test: /^(?:[+\-]\d{6}|\d{4})(?:\-\d\d\-\d\d|\-?\d\d\d\d)$/,
        size: 864e5,
        parse: function(t) {
            var n = /^([+\-]\d{6}|\d{4})\-?(\d\d)\-?(\d\d)$/.exec(t),
                r = e.date(n[1], +n[2] - 1, n[3]);
            return r.size = 864e5, r
        }
    },
    year_and_month: {
        test: /^[+\-]?\d{4,6}[\/\-](?:0[1-9]|1[012])$/,
        size: 2629746e3,
        parse: function(t) {
            var n = t.split(/[\/\-]/),
                r = e.date(n[0], +n[1] - 1, 1);
            return r.size = 864e5 * e.daysInMonth(r), r
        }
    },
    year: {
        test: /^[+\-]?\d{4,6}$/,
        size: 31556952e3,
        parse: function(t) {
            var n = e.date(t, 0, 1);
            return n.size = 864e5 * (e.isLeapYear(n) ? 366 : 365), n
        }
    },
    year_and_week: {
        test: /^[+\-]?\d{4,6}\-?[Ww]\d\d(?:\-?\d)?$/,
        size: 6048e5,
        parse: function(t) {
            var n = t.toLowerCase().replace(/[^w\d]/g, "").split("w"),
                r = e.date(n[0], 0, 3);
            return r.setUTCDate(3 - r.getUTCDay() + 7 * (parseInt(n[1].substr(0, 2), 10) - 1) + parseInt(n[1].substr(2, 1) || "1", 10)), r.size = 6048e5, r
        }
    },
    year_and_ordinal: {
        test: /^[+\-]?\d{4,6}\-[0-3]\d\d$/,
        size: 864e5,
        parse: function(e) {
            var t = new Date(0);
            return t.setUTCFullYear(parseInt(e.substr(0, e.length - 4), 10)), t.setDate(parseInt(e.substr(e.length - 3), 10)), t.size = 864e5, t
        }
    },
    year_and_quarter: {
        test: /^[+\-]?\d{4,6}\-?[Qq][1-4]$/,
        size: 7889238e3,
        parse: function(t) {
            var n = t.split(/\-?[Qq]/),
                r = e.date(n[0], 3 * (parseInt(n[1], 10) - 1));
            return r.size = 864e5, r
        }
    }
}, o = e._formats = {
    a: function(e) {
        return e.getUTCHours() >= 12 ? "pm" : "am"
    },
    A: function(e) {
        return e.getUTCHours() >= 12 ? "PM" : "AM"
    },
    c: function(t, n) {
        return e.isoyear(t) + e.format(t, "-m-d\\TH:i:s.", n) + e.pad(t.getUTCMilliseconds(), 3) + "Z"
    },
    d: function(t) {
        return e.pad(t.getUTCDate())
    },
    D: function(t, n) {
        return e._(r[t.getUTCDay()].substr(0, 3), n)
    },
    e: function(e) {
        return "UTC"
    },
    F: function(t, r) {
        return e._(n[t.getUTCMonth()], r)
    },
    g: function(e) {
        return e.getUTCHours() % 12 || 12
    },
    G: function(e) {
        return e.getUTCHours()
    },
    h: function(t) {
        return e.pad(t.getUTCHours() % 12 || 12)
    },
    H: function(t) {
        return e.pad(t.getUTCHours())
    },
    i: function(t) {
        return e.pad(t.getUTCMinutes())
    },
    j: function(e) {
        return e.getUTCDate()
    },
    l: function(t, n) {
        return e._(r[t.getUTCDay()], n)
    },
    L: function(t) {
        return 1 * e.isLeapYear(t)
    },
    m: function(t) {
        return e.pad(t.getUTCMonth() + 1)
    },
    M: function(t, r) {
        return e._(n[t.getUTCMonth()].substr(0, 3), r)
    },
    n: function(e) {
        return e.getUTCMonth() + 1
    },
    N: function(e) {
        return e.getUTCDay() || 7
    },
    o: function(t) {
        return e.pad(e.isocalendar(t)[0], 4)
    },
    O: function(e) {
        return "+0000"
    },
    P: function(e) {
        return "+00:00"
    },
    q: function(e) {
        return 1 + ~~(e.getUTCMonth() / 3)
    },
    r: function(t, n) {
        return e.format(t, "D, d M Y H:i:s O", n)
    },
    s: function(t) {
        return e.pad(t.getUTCSeconds())
    },
    S: function(e) {
        var t = e.getUTCDate() % 10,
            n = e.getUTCDate() % 100;
        return (1 === t && 11 !== n ? "st" : 2 === t && 12 !== n && "nd") || 3 === t && 13 !== n && "rd" || "th"
    },
    t: function(t) {
        return e.daysInMonth(t)
    },
    T: function(e) {
        return "UTC"
    },
    u: function(t) {
        return e.pad(t.getUTCMilliseconds(), 6)
    },
    U: function(e) {
        return ~~(e / 1e3)
    },
    w: function(e) {
        return e.getUTCDay()
    },
    W: function(t) {
        return e.pad(e.isocalendar(t)[1])
    },
    y: function(e) {
        return (e.getUTCFullYear() + "").substr(2)
    },
    Y: function(e) {
        return e.getUTCFullYear()
    },
    z: function(e) {
        return Math.floor((e - new Date(Date.UTC(e.getUTCFullYear(), 0, 1))) / 864e5)
    }
}, e.date = function(t, n, r, a, u, s, o) {
    if (!arguments.length) return new Date(e.now());
    if (t = parseInt(t || 0, 10), 1 === arguments.length) return new Date(t);
    var i = Date.UTC(t, parseInt(n || 0, 10), parseInt(r || 1, 10), parseInt(a || 0, 10), parseInt(u || 0, 10), parseInt(s || 0, 10), parseInt(o || 0, 10));
    return r = new Date(i), t < 100 && t >= 0 && r.setUTCFullYear(t), r
}, e.pad = function(t, n) {
    var r = e.pad.z;
    if (!r) {
        var a = [];
        a[999] = "", r = e.pad.z = a.join("0")
    }
    return (r += t).substring(r.length - (n || 2))
}, e.isLeapYear = function(e) {
    return "[object Date]" === t.call(e) && (e = e.getUTCFullYear()), e % 4 == 0 && e % 100 != 0 || e % 400 == 0
}, e.daysInMonth = function(t) {
    var n = t.getUTCMonth();
    return 1 === n ? e.isLeapYear(t) ? 29 : 28 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n]
}, e.isocalendar = function(t) {
    var n = t.getUTCDay(),
        r = new Date(t.valueOf());
    r.setDate(r.getDate() - (n + 6) % 7 + 3);
    var a = r.getUTCFullYear(),
        u = Math.floor((r.getTime() - e.date(a, 0, 1, -6)) / 864e5);
    return [a, 1 + Math.floor(u / 7), n || 7]
}, e.isoyear = function(t) {
    var n = t.getUTCFullYear();
    return n >= 0 && n <= 9999 ? e.pad(Math.abs(n), 4) : (n < 0 ? "-" : "+") + e.pad(Math.abs(n), 6)
}, e.set = function(e, t) {
    if ("object" === i(t)) {
        var n, r, s = [];
        for (var o in t) o in u && (n = u[o], s.push([t[o], n, a[n]]));
        for (s = s.sort((function(e, t) {
                return e[2] - t[2]
            })), r = 0; r < s.length; r++) e["setUTC" + s[r][1]]("Date" === s[r][1] ? 1 : 0);
        for (r = s.length; r--;) e["setUTC" + s[r][1]](s[r][0])
    }
    return e
}, e.parse = function(e) {
    var t;
    if ("string" != typeof e) throw new Error("dateutil parser can't parse non-strings.");
    for (var n in s)
        if (s[n].test.test(e)) {
            (t = s[n].parse(e)).type = n, t.size = t.size || 0;
            break
        }
    return t || ((t = new Date(e)).size = 0, t.type = "unknown_date"), t
}, e.format = function(e, n, r) {
    if ("[object Date]" === t.call(this)) r = n, n = e, e = this;
    else if ("[object Date]" !== t.call(e)) throw new Error("No date passed to format.");
    for (var a, u = [], s = n.length, i = 0; i < s; i++) "\\" !== (a = n.charAt(i)) ? u.push(a in o ? o[a](e, r) : a) : (a = i < n.length ? n.charAt(++i) : a, u.push(a));
    return u.join("")
}, e.today = function() {
    return e.set(e.date(), {
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    })
}, e.now = "function" == typeof Date.now ? Date.now : function() {
    return +new Date
}, e._ = function(t, n) {
    var r = n && e.lang[n];
    return r && t in r ? r[t] : t
};