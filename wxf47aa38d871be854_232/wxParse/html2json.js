
var e = "",
    t = "",
    r = {},
    s = require("./wxDiscode.js"),
    a = require("./htmlparser.js"),
    n = (l("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), l("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),
    o = l("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
    i = l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), l("wxxxcode-style,script,style,view,scroll-view,block");
 function l(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t
}
 function d(s) {
    var a = [];
    if (0 == e.length || !r) return (d = {
        node: "text"
    }).text = s, o = [d];
    s = s.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var n = new RegExp("[:]"), o = s.split(n), i = 0; i < o.length; i++) {
        var l = o[i],
            d = {};
        r[l] ? (d.node = "element", d.tag = "emoji", d.text = r[l], d.baseSrc = t) : (d.node = "text", d.text = l), a.push(d)
    }
    return a
}
module.exports = {
    html2json: function(e, t) {
        e = function(e) {
            return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<")
        }(e = function(e) {
            return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "")
        }(e)), e = s.strDiscode(e);
        var r = [],
            l = {
                node: t,
                nodes: [],
                images: [],
                imageUrls: []
            },
            c = 0;
        return a(e, {
            start: function(e, a, d) {
                var p, u = {
                    node: "element",
                    tag: e
                };
                0 === r.length ? (u.index = c.toString(), c += 1) : (void 0 === (p = r[0]).nodes && (p.nodes = []), u.index = p.index + "." + p.nodes.length);
                if (n[e] ? u.tagType = "block" : o[e] ? u.tagType = "inline" : i[e] && (u.tagType = "closeSelf"), 0 !== a.length && (u.attr = a.reduce((function(e, t) {
                        var r = t.name,
                            s = t.value;
                        return "class" == r && (u.classStr = s), "style" == r && (u.styleStr = s), s.match(/ /) && (s = s.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [e[r], s] : e[r] = s, e
                    }), {})), "img" === u.tag) {
                    u.imgIndex = l.images.length;
                    var g = u.attr.src;
                    "" == g[0] && g.splice(0, 1), g = s.urlToHttpUrl(g, "https"), u.attr.src = g, u.from = t, l.images.push(u), l.imageUrls.push(g)
                }
                if ("font" === u.tag) {
                    var m = ["x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large"],
                        f = {
                            color: "color",
                            face: "font-family",
                            size: "font-size"
                        };
                    for (var h in u.attr.style || (u.attr.style = []), u.styleStr || (u.styleStr = ""), f)
                        if (u.attr[h]) {
                            var x = "size" === h ? m[u.attr[h] - 1] : u.attr[h];
                            u.attr.style.push(f[h]), u.attr.style.push(x), u.styleStr += f[h] + ": " + x + ";"
                        }
                }("source" === u.tag && (l.source = u.attr.src), d) ? (void 0 === (p = r[0] || l).nodes && (p.nodes = []), p.nodes.push(u)) : r.unshift(u)
            },
            end: function(e) {
                var t = r.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && l.source && (t.attr.src = l.source, delete l.source), 0 === r.length) l.nodes.push(t);
                else {
                    var s = r[0];
                    void 0 === s.nodes && (s.nodes = []), s.nodes.push(t)
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: d(e)
                };
                if (0 === r.length) t.index = c.toString(), c += 1, l.nodes.push(t);
                else {
                    var s = r[0];
                    void 0 === s.nodes && (s.nodes = []), t.index = s.index + "." + s.nodes.length, s.nodes.push(t)
                }
            },
            comment: function(e) {}
        }), l
    }
};