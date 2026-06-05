
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
    n = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
    t = require("../../../../../../@babel/runtime/helpers/inherits"),
    r = require("../../../../../../@babel/runtime/helpers/createSuper"),
    a = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
    i = require("../../../../../../@babel/runtime/helpers/createClass"),
    o = require("../../../../../../@babel/runtime/helpers/typeof");
 function s(e) {
    Object.freeze(e);
    var n = "function" == typeof e;
    return Object.getOwnPropertyNames(e).forEach((function(t) {
        !e.hasOwnProperty(t) || null === e[t] || "object" != o(e[t]) && "function" != typeof e[t] || n && ("caller" === t || "callee" === t || "arguments" === t) || Object.isFrozen(e[t]) || s(e[t])
    })), e
}
 function u(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
 function l(e) {
    var n, t = {},
        r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return r.forEach((function(e) {
        for (n in e) t[n] = e[n]
    })), t
}
 function c(e) {
    return e.nodeName.toLowerCase()
}
var d = Object.freeze({
        __proto__: null,
        escapeHTML: u,
        inherit: l,
        nodeStream: function(e) {
            var n = [];
            return function e(t, r) {
                for (var a = t.firstChild; a; a = a.nextSibling) 3 === a.nodeType ? r += a.nodeValue.length : 1 === a.nodeType && (n.push({
                    event: "start",
                    offset: r,
                    node: a
                }), r = e(a, r), c(a).match(/br|hr|img|input/) || n.push({
                    event: "stop",
                    offset: r,
                    node: a
                }));
                return r
            }(e, 0), n
        },
        mergeStreams: function(e, n, t) {
            var r = 0,
                a = "",
                i = [];
             function o() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }
             function s(e) {
                a += "<" + c(e) + [].map.call(e.attributes, (function(e) {
                    return " " + e.nodeName + '="' + u(e.value).replace(/"/g, "&quot;") + '"'
                })).join("") + ">"
            }
             function l(e) {
                a += "</" + c(e) + ">"
            }
             function d(e) {
                ("start" === e.event ? s : l)(e.node)
            }
            for (; e.length || n.length;) {
                var g = o();
                if (a += u(t.substring(r, g[0].offset)), r = g[0].offset, g === e) {
                    i.reverse().forEach(l);
                    do {
                        d(g.splice(0, 1)[0]), g = o()
                    } while (g === e && g.length && g[0].offset === r);
                    i.reverse().forEach(s)
                } else "start" === g[0].event ? i.push(g[0].node) : i.pop(), d(g.splice(0, 1)[0])
            }
            return a + u(t.substr(r))
        }
    }),
    g = function(e) {
        return !!e.kind
    },
    f = function() {
        function e(n, t) {
            a(this, e), this.buffer = "", this.classPrefix = t.classPrefix, n.walk(this)
        }
        return i(e, [{
            key: "addText",
            value: function(e) {
                this.buffer += u(e)
            }
        }, {
            key: "openNode",
            value: function(e) {
                if (g(e)) {
                    var n = e.kind;
                    e.sublanguage || (n = "".concat(this.classPrefix).concat(n)), this.span(n)
                }
            }
        }, {
            key: "closeNode",
            value: function(e) {
                g(e) && (this.buffer += "</span>")
            }
        }, {
            key: "span",
            value: function(e) {
                this.buffer += '<span class="'.concat(e, '">')
            }
        }, {
            key: "value",
            value: function() {
                return this.buffer
            }
        }]), e
    }(),
    h = function() {
        function e() {
            a(this, e), this.rootNode = {
                children: []
            }, this.stack = [this.rootNode]
        }
        return i(e, [{
            key: "top",
            get: function() {
                return this.stack[this.stack.length - 1]
            }
        }, {
            key: "root",
            get: function() {
                return this.rootNode
            }
        }, {
            key: "add",
            value: function(e) {
                this.top.children.push(e)
            }
        }, {
            key: "openNode",
            value: function(e) {
                var n = {
                    kind: e,
                    children: []
                };
                this.add(n), this.stack.push(n)
            }
        }, {
            key: "closeNode",
            value: function() {
                if (this.stack.length > 1) return this.stack.pop()
            }
        }, {
            key: "closeAllNodes",
            value: function() {
                for (; this.closeNode(););
            }
        }, {
            key: "toJSON",
            value: function() {
                return JSON.stringify(this.rootNode, null, 4)
            }
        }, {
            key: "walk",
            value: function(e) {
                return this.constructor._walk(e, this.rootNode)
            }
        }], [{
            key: "_walk",
            value: function(e, n) {
                var t = this;
                return "string" == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((function(n) {
                    return t._walk(e, n)
                })), e.closeNode(n)), e
            }
        }, {
            key: "_collapse",
            value: function(n) {
                n.children && (n.children.every((function(e) {
                    return "string" == typeof e
                })) ? (n.text = n.children.join(""), delete n.children) : n.children.forEach((function(n) {
                    "string" != typeof n && e._collapse(n)
                })))
            }
        }]), e
    }(),
    v = function(e) {
        t(o, h);
        var n = r(o);
         function o(e) {
            var t;
            return a(this, o), (t = n.call(this)).options = e, t
        }
        return i(o, [{
            key: "addKeyword",
            value: function(e, n) {
                "" !== e && (this.openNode(n), this.addText(e), this.closeNode())
            }
        }, {
            key: "addText",
            value: function(e) {
                "" !== e && this.add(e)
            }
        }, {
            key: "addSublanguage",
            value: function(e, n) {
                var t = e.root;
                t.kind = n, t.sublanguage = !0, this.add(t)
            }
        }, {
            key: "toHTML",
            value: function() {
                return new f(this, this.options).value()
            }
        }, {
            key: "finalize",
            value: function() {}
        }]), o
    }();
 function p(e) {
    return e && e.source || e
}
var b = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    m = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
    },
    x = {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [m]
    },
    y = {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [m]
    },
    _ = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    E = function(e, n, t) {
        var r = l({
            className: "comment",
            begin: e,
            end: n,
            contains: []
        }, t || {});
        return r.contains.push(_), r.contains.push({
            className: "doctag",
            begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            relevance: 0
        }), r
    },
    R = E("//", "$"),
    N = E("/\\*", "\\*/"),
    k = E("#", "$"),
    w = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?",
        relevance: 0
    },
    O = {
        className: "number",
        begin: b,
        relevance: 0
    },
    M = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
    },
    T = {
        begin: /(?=\/[^\/\n]*\/)/,
        contains: [{
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [m, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [m]
            }]
        }]
    },
    A = {
        className: "title",
        begin: "[a-zA-Z]\\w*",
        relevance: 0
    },
    L = Object.freeze({
        __proto__: null,
        IDENT_RE: "[a-zA-Z]\\w*",
        UNDERSCORE_IDENT_RE: "[a-zA-Z_]\\w*",
        NUMBER_RE: "\\b\\d+(\\.\\d+)?",
        C_NUMBER_RE: b,
        BINARY_NUMBER_RE: "\\b(0b[01]+)",
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        BACKSLASH_ESCAPE: m,
        APOS_STRING_MODE: x,
        QUOTE_STRING_MODE: y,
        PHRASAL_WORDS_MODE: _,
        COMMENT: E,
        C_LINE_COMMENT_MODE: R,
        C_BLOCK_COMMENT_MODE: N,
        HASH_COMMENT_MODE: k,
        NUMBER_MODE: w,
        C_NUMBER_MODE: O,
        BINARY_NUMBER_MODE: {
            className: "number",
            begin: "\\b(0b[01]+)",
            relevance: 0
        },
        CSS_NUMBER_MODE: M,
        REGEXP_MODE: T,
        TITLE_MODE: A,
        UNDERSCORE_TITLE_MODE: {
            className: "title",
            begin: "[a-zA-Z_]\\w*",
            relevance: 0
        },
        METHOD_GUARD: {
            begin: "\\.\\s*[a-zA-Z_]\\w*",
            relevance: 0
        }
    }),
    S = "of and for in not or if then".split(" ");
 function B(t) {
    function r(e, n) {
        return new RegExp(p(e), "m" + (t.case_insensitive ? "i" : "") + (n ? "g" : ""))
    }
    var o = function() {
            function e() {
                a(this, e), this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
            }
            return i(e, [{
                key: "addRule",
                value: function(e, n) {
                    n.position = this.position++, this.matchIndexes[this.matchAt] = n, this.regexes.push([n, e]), this.matchAt += function(e) {
                        return new RegExp(e.toString() + "|").exec("").length - 1
                    }(e) + 1
                }
            }, {
                key: "compile",
                value: function() {
                    0 === this.regexes.length && (this.exec = function() {
                        return null
                    });
                    var e = this.regexes.map((function(e) {
                        return e[1]
                    }));
                    this.matcherRe = r(function(e, n) {
                        for (var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, a = "", i = 0; i < e.length; i++) {
                            var o = r += 1,
                                s = p(e[i]);
                            for (i > 0 && (a += n), a += "("; s.length > 0;) {
                                var u = t.exec(s);
                                if (null == u) {
                                    a += s;
                                    break
                                }
                                a += s.substring(0, u.index), s = s.substring(u.index + u[0].length), "\\" == u[0][0] && u[1] ? a += "\\" + String(Number(u[1]) + o) : (a += u[0], "(" == u[0] && r++)
                            }
                            a += ")"
                        }
                        return a
                    }(e, "|"), !0), this.lastIndex = 0
                }
            }, {
                key: "exec",
                value: function(e) {
                    this.matcherRe.lastIndex = this.lastIndex;
                    var n = this.matcherRe.exec(e);
                    if (!n) return null;
                    var t = n.findIndex((function(e, n) {
                            return n > 0 && null != e
                        })),
                        r = this.matchIndexes[t];
                    return Object.assign(n, r)
                }
            }]), e
        }(),
        s = function() {
            function e() {
                a(this, e), this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
            }
            return i(e, [{
                key: "getMatcher",
                value: function(e) {
                    if (this.multiRegexes[e]) return this.multiRegexes[e];
                    var t = new o;
                    return this.rules.slice(e).forEach((function(e) {
                        var r = n(e, 2),
                            a = r[0],
                            i = r[1];
                        return t.addRule(a, i)
                    })), t.compile(), this.multiRegexes[e] = t, t
                }
            }, {
                key: "considerAll",
                value: function() {
                    this.regexIndex = 0
                }
            }, {
                key: "addRule",
                value: function(e, n) {
                    this.rules.push([e, n]), "begin" === n.type && this.count++
                }
            }, {
                key: "exec",
                value: function(e) {
                    var n = this.getMatcher(this.regexIndex);
                    n.lastIndex = this.lastIndex;
                    var t = n.exec(e);
                    return t && (this.regexIndex += t.position + 1, this.regexIndex === this.count && (this.regexIndex = 0)), t
                }
            }]), e
        }();
     function u(e) {
        var n = e.input[e.index - 1],
            t = e.input[e.index + e[0].length];
        if ("." === n || "." === t) return {
            ignoreMatch: !0
        }
    }
    if (t.contains && t.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    ! function n(a, i) {
        var o;
        a.compiled || (a.compiled = !0, a.__onBegin = null, a.keywords = a.keywords || a.beginKeywords, a.keywords && (a.keywords = function(e, n) {
            var t = {};
            return "string" == typeof e ? r("keyword", e) : Object.keys(e).forEach((function(n) {
                r(n, e[n])
            })), t;
             function r(e, r) {
                n && (r = r.toLowerCase()), r.split(" ").forEach((function(n) {
                    var r = n.split("|");
                    t[r[0]] = [e, I(r[0], r[1])]
                }))
            }
        }(a.keywords, t.case_insensitive)), a.lexemesRe = r(a.lexemes || /\w+/, !0), i && (a.beginKeywords && (a.begin = "\\b(" + a.beginKeywords.split(" ").join("|") + ")(?=\\b|\\s)", a.__onBegin = u), a.begin || (a.begin = /\B|\b/), a.beginRe = r(a.begin), a.endSameAsBegin && (a.end = a.begin), a.end || a.endsWithParent || (a.end = /\B|\b/), a.end && (a.endRe = r(a.end)), a.terminator_end = p(a.end) || "", a.endsWithParent && i.terminator_end && (a.terminator_end += (a.end ? "|" : "") + i.terminator_end)), a.illegal && (a.illegalRe = r(a.illegal)), null == a.relevance && (a.relevance = 1), a.contains || (a.contains = []), a.contains = (o = []).concat.apply(o, e(a.contains.map((function(e) {
            return function(e) {
                return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map((function(n) {
                    return l(e, {
                        variants: null
                    }, n)
                }))), e.cached_variants ? e.cached_variants : function e(n) {
                    return !!n && (n.endsWithParent || e(n.starts))
                }(e) ? l(e, {
                    starts: e.starts ? l(e.starts) : null
                }) : Object.isFrozen(e) ? l(e) : e
            }("self" === e ? a : e)
        })))), a.contains.forEach((function(e) {
            n(e, a)
        })), a.starts && n(a.starts, i), a.matcher = function(e) {
            var n = new s;
            return e.contains.forEach((function(e) {
                return n.addRule(e.begin, {
                    rule: e,
                    type: "begin"
                })
            })), e.terminator_end && n.addRule(e.terminator_end, {
                type: "end"
            }), e.illegal && n.addRule(e.illegal, {
                type: "illegal"
            }), n
        }(a))
    }(t)
}
 function I(e, n) {
    return n ? Number(n) : function(e) {
        return S.includes(e.toLowerCase())
    }(e) ? 0 : 1
}
var C = u,
    D = l,
    j = d.nodeStream,
    H = d.mergeStreams,
    P = function(e) {
        var n = [],
            t = {},
            r = {},
            a = [],
            i = !0,
            u = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            l = "Could not find the language '{}', did you forget to load/include a language module?",
            c = {
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0,
                __emitter: v
            };
         function d(e) {
            return c.noHighlightRe.test(e)
        }
         function g(e, n, t, r) {
            var a = {
                code: n,
                language: e
            };
            E("before:highlight", a);
            var i = a.result ? a.result : f(a.language, a.code, t, r);
            return i.code = a.code, E("after:highlight", i), i
        }
         function f(e, n, r, a) {
            var o = n;
             function s(e, n) {
                var t = b.case_insensitive ? n[0].toLowerCase() : n[0];
                return e.keywords.hasOwnProperty(t) && e.keywords[t]
            }
             function u() {
                null != x.subLanguage ? function() {
                    if ("" !== k) {
                        var e = "string" == typeof x.subLanguage;
                        if (!e || t[x.subLanguage]) {
                            var n = e ? f(x.subLanguage, k, !0, _[x.subLanguage]) : h(k, x.subLanguage.length ? x.subLanguage : void 0);
                            x.relevance > 0 && (w += n.relevance), e && (_[x.subLanguage] = n.top), E.addSublanguage(n.emitter, n.language)
                        } else E.addText(k)
                    }
                }() : function() {
                    var e, n, t, r;
                    if (x.keywords) {
                        for (n = 0, x.lexemesRe.lastIndex = 0, t = x.lexemesRe.exec(k), r = ""; t;) {
                            r += k.substring(n, t.index);
                            var a = null;
                            (e = s(x, t)) ? (E.addText(r), r = "", w += e[1], a = e[0], E.addKeyword(t[0], a)) : r += t[0], n = x.lexemesRe.lastIndex, t = x.lexemesRe.exec(k)
                        }
                        r += k.substr(n), E.addText(r)
                    } else E.addText(k)
                }(), k = ""
            }
             function d(e) {
                e.className && E.openNode(e.className), x = Object.create(e, {
                    parent: {
                        value: x
                    }
                })
            }
             function g(e) {
                var n = e[0],
                    t = e.rule;
                return t.__onBegin && (t.__onBegin(e) || {}).ignoreMatch ? function(e) {
                    return 0 === x.matcher.regexIndex ? (k += e[0], 1) : (M = !0, 0)
                }(n) : (t && t.endSameAsBegin && (t.endRe = function(e) {
                    return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
                }(n)), t.skip ? k += n : (t.excludeBegin && (k += n), u(), t.returnBegin || t.excludeBegin || (k = n)), d(t), t.returnBegin ? 0 : n.length)
            }
            var v = {};
             function p(n, t) {
                var a, s = t && t[0];
                if (k += n, null == s) return u(), 0;
                if ("begin" == v.type && "end" == t.type && v.index == t.index && "" === s) {
                    if (k += o.slice(t.index, t.index + 1), !i) throw (a = new Error("0 width match regex")).languageName = e, a.badRule = v.rule, a;
                    return 1
                }
                if (v = t, "begin" === t.type) return g(t);
                if ("illegal" === t.type && !r) throw (a = new Error('Illegal lexeme "' + s + '" for mode "' + (x.className || "<unnamed>") + '"')).mode = x, a;
                if ("end" === t.type) {
                    var l = function(e) {
                        var n = e[0],
                            t = o.substr(e.index),
                            r = function e(n, t) {
                                if (function(e, n) {
                                        var t = e && e.exec(n);
                                        return t && 0 === t.index
                                    }(n.endRe, t)) {
                                    for (; n.endsParent && n.parent;) n = n.parent;
                                    return n
                                }
                                if (n.endsWithParent) return e(n.parent, t)
                            }(x, t);
                        if (r) {
                            var a = x;
                            a.skip ? k += n : (a.returnEnd || a.excludeEnd || (k += n), u(), a.excludeEnd && (k = n));
                            do {
                                x.className && E.closeNode(), x.skip || x.subLanguage || (w += x.relevance), x = x.parent
                            } while (x !== r.parent);
                            return r.starts && (r.endSameAsBegin && (r.starts.endRe = r.endRe), d(r.starts)), a.returnEnd ? 0 : n.length
                        }
                    }(t);
                    if (null != l) return l
                }
                return k += s, s.length
            }
            var b = y(e);
            if (!b) throw console.error(l.replace("{}", e)), new Error('Unknown language: "' + e + '"');
            B(b);
            var m, x = a || b,
                _ = {},
                E = new c.__emitter(c);
            ! function() {
                for (var e = [], n = x; n !== b; n = n.parent) n.className && e.unshift(n.className);
                e.forEach((function(e) {
                    return E.openNode(e)
                }))
            }();
            var R, N, k = "",
                w = 0,
                O = 0;
            try {
                var M = !1;
                for (x.matcher.considerAll(); M ? M = !1 : (x.matcher.lastIndex = O, x.matcher.considerAll()), R = x.matcher.exec(o);) N = p(o.substring(O, R.index), R), O = R.index + N;
                return p(o.substr(O)), E.closeAllNodes(), E.finalize(), m = E.toHTML(), {
                    relevance: w,
                    value: m,
                    language: e,
                    illegal: !1,
                    emitter: E,
                    top: x
                }
            } catch (n) {
                if (n.message && n.message.includes("Illegal")) return {
                    illegal: !0,
                    illegalBy: {
                        msg: n.message,
                        context: o.slice(O - 100, O + 100),
                        mode: n.mode
                    },
                    sofar: m,
                    relevance: 0,
                    value: C(o),
                    emitter: E
                };
                if (i) return {
                    relevance: 0,
                    value: C(o),
                    emitter: E,
                    language: e,
                    top: x,
                    errorRaised: n
                };
                throw n
            }
        }
         function h(e, n) {
            n = n || c.languages || Object.keys(t);
            var r = {
                    relevance: 0,
                    emitter: new c.__emitter(c),
                    value: C(e)
                },
                a = r;
            return n.filter(y).filter(_).forEach((function(n) {
                var t = f(n, e, !1);
                t.language = n, t.relevance > a.relevance && (a = t), t.relevance > r.relevance && (a = r, r = t)
            })), a.language && (r.second_best = a), r
        }
         function p(e) {
            return c.tabReplace || c.useBR ? e.replace(u, (function(e, n) {
                return c.useBR && "\n" === e ? "<br>" : c.tabReplace ? n.replace(/\t/g, c.tabReplace) : ""
            })) : e
        }
         function b(e) {
            var n, t, a, i, o, s = function(e) {
                var n, t = e.className + " ";
                if (t += e.parentNode ? e.parentNode.className : "", n = c.languageDetectRe.exec(t)) {
                    var r = y(n[1]);
                    return r || (console.warn(l.replace("{}", n[1])), console.warn("Falling back to no-highlight mode for this block.", e)), r ? n[1] : "no-highlight"
                }
                return t.split(/\s+/).find((function(e) {
                    return d(e) || y(e)
                }))
            }(e);
            d(s) || (E("before:highlightBlock", {
                block: e,
                language: s
            }), c.useBR ? (n = document.createElement("div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, o = n.textContent, a = s ? g(s, o, !0) : h(o), (t = j(n)).length && ((i = document.createElement("div")).innerHTML = a.value, a.value = H(t, j(i), o)), a.value = p(a.value), E("after:highlightBlock", {
                block: e,
                result: a
            }), e.innerHTML = a.value, e.className = function(e, n, t) {
                var a = n ? r[n] : t,
                    i = [e.trim()];
                return e.match(/\bhljs\b/) || i.push("hljs"), e.includes(a) || i.push(a), i.join(" ").trim()
            }(e.className, s, a.language), e.result = {
                language: a.language,
                re: a.relevance
            }, a.second_best && (e.second_best = {
                language: a.second_best.language,
                re: a.second_best.relevance
            }))
        }
         function m() {
            if (!m.called) {
                m.called = !0;
                var e = document.querySelectorAll("pre code");
                n.forEach.call(e, b)
            }
        }
        var x = {
            disableAutodetect: !0
        };
         function y(e) {
            return e = (e || "").toLowerCase(), t[e] || t[r[e]]
        }
         function _(e) {
            var n = y(e);
            return n && !n.disableAutodetect
        }
         function E(e, n) {
            var t = e;
            a.forEach((function(e) {
                e[t] && e[t](n)
            }))
        }
        for (var R in Object.assign(e, {
                highlight: g,
                highlightAuto: h,
                fixMarkup: p,
                highlightBlock: b,
                configure: function(e) {
                    c = D(c, e)
                },
                initHighlighting: m,
                initHighlightingOnLoad: function() {
                    window.addEventListener("DOMContentLoaded", m, !1)
                },
                registerLanguage: function(n, a) {
                    var o;
                    try {
                        o = a(e)
                    } catch (e) {
                        if (console.error("Language definition for '{}' could not be registered.".replace("{}", n)), !i) throw e;
                        console.error(e), o = x
                    }
                    o.name || (o.name = n), t[n] = o, o.rawDefinition = a.bind(null, e), o.aliases && o.aliases.forEach((function(e) {
                        r[e] = n
                    }))
                },
                listLanguages: function() {
                    return Object.keys(t)
                },
                getLanguage: y,
                requireLanguage: function(e) {
                    var n = y(e);
                    if (n) return n;
                    throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: _,
                inherit: D,
                addPlugin: function(e, n) {
                    a.push(e)
                }
            }), e.debugMode = function() {
                i = !1
            }, e.safeMode = function() {
                i = !0
            }, e.versionString = "10.0.0-beta.0", L) "object" == o(L[R]) && s(L[R]);
        return Object.assign(e, L), e
    }({});
module.exports = P;