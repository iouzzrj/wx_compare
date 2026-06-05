
 function t(t, i, e) {
    return i in t ? Object.defineProperty(t, i, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = e, t
}
Component({
    data: {
        ctrl: {},
        isiOS: wx.getSystemInfoSync().system.includes("iOS")
    },
    properties: {
        childs: Array,
        opts: Array
    },
    options: {
        addGlobalClass: !0
    },
    attached: function() {
        this.triggerEvent("add", this, {
            bubbles: !0,
            composed: !0
        })
    },
    methods: {
        noop: function() {},
        getNode: function(t) {
            try {
                for (var i = t.split("_"), e = this.data.childs[i[0]], a = 1; a < i.length; a++) e = e.children[i[a]];
                return e
            } catch (t) {
                return {
                    text: "",
                    attrs: {},
                    children: []
                }
            }
        },
        play: function(t) {
            if (this.root.triggerEvent("play"), this.root.data.pauseVideo) {
                for (var i = !1, e = t.target.id, a = this.root._videos.length; a--;) this.root._videos[a].id === e ? i = !0 : this.root._videos[a].pause();
                if (!i) {
                    var r = wx.createVideoContext(e, this);
                    r.id = e, this.root.playbackRate && r.playbackRate(this.root.playbackRate), this.root._videos.push(r)
                }
            }
        },
        imgTap: function(t) {
            var i = this.getNode(t.target.dataset.i);
            if (i.a) return this.linkTap(i.a);
            if (!i.attrs.ignore && (this.root.triggerEvent("imgtap", i.attrs), this.root.data.previewImg)) {
                var e = this.root.imgList[i.i];
                wx.previewImage({
                    showmenu: this.root.data.showImgMenu,
                    current: e,
                    urls: this.root.imgList
                })
            }
        },
        imgLoad: function(i) {
            var e, a = i.target.dataset.i;
            this.getNode(a).w ? (this.data.opts[1] && !this.data.ctrl[a] || -1 === this.data.ctrl[a]) && (e = 1) : e = i.detail.width, e && this.setData(t({}, "ctrl." + a, e)), this.checkReady()
        },
        checkReady: function() {
            var t = this;
            this.root.data.lazyLoad || (this.root.imgList._unloadimgs -= 1, this.root.imgList._unloadimgs || setTimeout((function() {
                t.root.getRect().then((function(i) {
                    t.root.triggerEvent("ready", i)
                }))
            }), 350))
        },
        linkTap: function(t) {
            var i = t.currentTarget ? this.getNode(t.currentTarget.dataset.i) : {},
                e = i.attrs || t,
                a = e.href;
            this.root.triggerEvent("linktap", Object.assign({
                innerText: this.root.getText(i.children || [])
            }, e)), a && ("#" === a[0] ? this.root.navigateTo(a.substring(1)).catch((function() {})) : a.split("?")[0].includes("://") ? this.root.data.copyLink && wx.setClipboardData({
                data: a,
                success: function() {
                    return wx.showToast({
                        title: "链接已复制"
                    })
                }
            }) : wx.navigateTo({
                url: a,
                fail: function() {
                    wx.switchTab({
                        url: a,
                        fail: function() {}
                    })
                }
            }))
        },
        mediaError: function(i) {
            var e = i.target.dataset.i,
                a = this.getNode(e);
            if ("video" === a.name || "audio" === a.name) {
                var r = (this.data.ctrl[e] || 0) + 1;
                if (r > a.src.length && (r = 0), r < a.src.length) return this.setData(t({}, "ctrl." + e, r))
            } else "img" === a.name && (this.data.opts[2] && this.setData(t({}, "ctrl." + e, -1)), this.checkReady());
            this.root && this.root.triggerEvent("error", {
                source: a.name,
                attrs: a.attrs,
                errMsg: i.detail.errMsg
            })
        }
    }
});