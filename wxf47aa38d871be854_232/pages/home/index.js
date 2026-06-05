
var e = require("../../@babel/runtime/helpers/defineProperty");
getApp();
Page(e(e(e(e(e(e(e(e({
    data: {
        miniVersion: "",
        video_data: {},
        fullScreen: !1,
        dataList: [{
            id: "10",
            name: "成人刷牙的正确方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/b1077f5b5285890799047047693/IayadAyzDwcA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-11-03"
        }, {
            id: "9",
            name: "儿童刷牙的正确方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/c7d714c05285890799339543783/IJaElhLpEW4A.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-10-08"
        }, {
            id: "8",
            name: "牙线的使用方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/b1077ed45285890799047047650/A87qxTz4ixEA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-09-05"
        }, {
            id: "7",
            name: "牙间隙刷的使用方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/ccf833565285890799305464661/F3r6rta9cRMA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-08-04"
        }, {
            id: "6",
            name: "电动牙刷的使用方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/037fec425285890799870241898/E2hpfof5A9AA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-07-04"
        }, {
            id: "5",
            name: "舌苔怎么清洁",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/cad94bb85285890799305394463/Vnj5YDjI3f0A.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-06-06"
        }, {
            id: "4",
            name: "矫正牙齿怎么刷",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/ccf8aab75285890799305465184/6VMGjOTrdk8A.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-05-07"
        }, {
            id: "3",
            name: "种植牙怎么刷",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/c5cbee5f5285890799339486632/XcZsjQrqaeEA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-04-02"
        }, {
            id: "2",
            name: "怎么清洁婴儿口腔",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/c5cc6e825285890799339487373/dMHSepRc1HIA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-03-04"
        }, {
            id: "1",
            name: "冲牙器的使用方法",
            infoUrl: "http://1255387203.vod2.myqcloud.com/34e29306vodcq1255387203/b1077f1a5285890799047047674/35nAHOspmnQA.mp4",
            coverImg: "/assets/images/bg_kpsp.jpg",
            comeFrom: "中华口腔医学会",
            time: "2023-02-07"
        }],
        dataListArr: [],
        searchValue: "",
        dataInit: !0
    },
    onLoad: function(e) {
        this.setData({
            dataListArr: this.data.dataList
        })
    },
    doSearch: function() {
        "" == this.data.searchValue && this.setData({
            dataListArr: this.data.dataList
        })
    },
    searchInfoAxios: function(e) {
        wx.showLoading({
            title: "搜素中..."
        });
        for (var t = this.data.dataList, o = e ? e.detail.value : this.data.searchValue, a = [], i = 0; i < t.length; i++) t[i].name.indexOf(o) >= 0 && a.push(t[i]), this.setData({
            dataListArr: a
        }, (function() {
            wx.hideLoading()
        }))
    },
    playVideo: function(e) {
        console.log(e), this.setData({
            video_data: e.currentTarget.dataset.item
        }), this.setData({
            fullScreen: !0
        }), wx.createVideoContext("myvideo", this).requestFullScreen()
    },
    fullScreen: function() {
        wx.createVideoContext("myvideo", this).exitFullScreen(), this.setData({
            fullScreen: !1
        })
    },
    closeVideo: function() {
        wx.createVideoContext("myvideo", this).exitFullScreen(), this.setData({
            fullScreen: !1
        })
    }
}, "fullScreen", (function(e) {
    var t = e.detail.fullScreen;
    t || (wx.createVideoContext("myvideo", this).exitFullScreen(), this.setData({
        fullScreen: !1
    }))
})), "onReady", (function() {})), "onShow", (function() {})), "onHide", (function() {})), "onUnload", (function() {})), "onPullDownRefresh", (function() {})), "onReachBottom", (function() {})), "onShareAppMessage", (function() {})));