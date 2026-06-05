
var t = require("../../@babel/runtime/helpers/defineProperty"),
    e = require("../../utils/wxutil.js"),
    a = require("../../utils/dictUtil.js");
Page({
    data: {
        scrollHeight: 0,
        nav: [],
        list: [],
        letter: "",
        searchData: [],
        dataList: [],
        currentList: [],
        name: "",
        txtValue: ""
    },
    onLoad: function(t) {
        var e = t.type,
            r = t.name;
        switch (e) {
            case "gj":
                var i = a.sortedCountry();
                this.setData({
                    nav: i.nav,
                    list: i.item_of_letter,
                    letter: i.item_of_letter[0].indexLetter,
                    searchData: a.Country(),
                    name: r,
                    type: e
                }), wx.setNavigationBarTitle({
                    title: "选择国籍"
                });
                break;
            case "mz":
                var n = a.sortedNationality();
                this.setData({
                    nav: n.nav,
                    list: n.item_of_letter,
                    letter: n.item_of_letter[0].indexLetter,
                    searchData: a.Nationality(),
                    name: r,
                    type: e
                }), wx.setNavigationBarTitle({
                    title: "选择民族"
                });
                break;
            case "zy":
                var s = a.sortedProfession();
                this.setData({
                    nav: s.nav,
                    list: s.item_of_letter,
                    letter: s.item_of_letter[0].indexLetter,
                    searchData: a.Profession(),
                    name: r,
                    type: e
                }), wx.setNavigationBarTitle({
                    title: "选择职业"
                });
                break;
            case "csd":
                var o = a.sortedBirthplace();
                this.setData({
                    nav: o.nav,
                    list: o.item_of_letter,
                    letter: o.item_of_letter[0].indexLetter,
                    searchData: a.Birthplace(),
                    name: r,
                    type: e
                }), wx.setNavigationBarTitle({
                    title: "选择出生地"
                })
        }
    },
    onReady: function() {
        this.setData({
            scrollHeight: e.getSystemInfo().windowHeight - 60
        })
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doBack: function() {
        wx.navigateBack({})
    },
    checkTxt: function(t) {
        var a = t.detail.value;
        if (e.isEmpty(a)) this.setData({
            txtValue: "",
            currentList: []
        });
        else {
            var r = e.searchByKey(this.data.searchData, "name_pinyin", a);
            this.setData({
                txtValue: a,
                currentList: r
            })
        }
    },
    doSelect: function(t) {
        this.setData({
            name: t.currentTarget.dataset.name
        })
    },
    doConfirm: function(e) {
        var a = getCurrentPages(),
            r = a[a.length - 2];
        "gj" == this.data.type && r.setData(t(t({}, "pCountry.name", e.currentTarget.dataset.name), "pCountry.code", e.currentTarget.dataset.code)), "mz" == this.data.type && r.setData(t(t({}, "pNation.name", e.currentTarget.dataset.name), "pNation.code", e.currentTarget.dataset.code)), "zy" == this.data.type && r.setData(t(t({}, "pProfession.name", e.currentTarget.dataset.name), "pProfession.code", e.currentTarget.dataset.code)), "csd" == this.data.type && r.setData(t(t({}, "pBirthplace.name", e.currentTarget.dataset.name), "pBirthplace.code", e.currentTarget.dataset.code)), wx.navigateBack({
            delta: 1
        })
    },
    toView: function(t) {
        var e = this,
            a = t.currentTarget.dataset.letter;
        this.setData({
            letter: a,
            isShow: !0
        }), setTimeout((function() {
            e.setData({
                isShow: !1
            })
        }), 300)
    }
});