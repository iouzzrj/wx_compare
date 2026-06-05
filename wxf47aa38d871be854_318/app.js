
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
var e = require("./common/vendor.js");
require("./utils/base64.min.js"), require("./utils/crypto-js.js"), require("./utils/big-decimal.min.js");
var o = require("./service/baseConfig.js");
Math;
var a = {
    onLaunch: function() {
        console.log("App Launch"), e.wx$1.cloud && e.wx$1.cloud.init({
            env: "lowcode-7gm1393qe6462ad7",
            traceUser: !0
        }), e.index.getSystemInfo({
            success: function(e) {
                o.baseConfig.navHeight = e.statusBarHeight + 46, o.baseConfig.envBottom = Number(e.screenHeight - e.safeArea.bottom)
            },
            fail: function(e) {
                console.log(e)
            }
        })
    },
    onShow: function(o) {
        var a = this;
        if (console.log("app.js的onshow：", o), console.log("ybType:", this.globalData.ybType), 1038 == (o.scene || "")) {
            var t = o.referrerInfo || {},
                n = t.extraData || {};
            switch (t.appId || "") {
                case "wx308bd2aeb83d3345":
                    var i = n.code || {};
                    this.globalData.authCode = i.auth_code || "";
                    break;
                case "wxf8df44389465ee03":
                    e.index.showLoading({
                        title: "玩命加载中",
                        mask: !0
                    });
                    var s;
                    if ("" == a.globalData.ybType) return void e.wx$1.hideLoading();
                    s = "0" == a.globalData.ybType ? a.globalData.careMode ? "/careModel/mine/index?page=" + encodeURIComponent("/careModel/xzjzr/index?funType=挂号记录") : "/pages/mine/index?page=" + encodeURIComponent("/intelligent/dtgh/ghjl/index") : a.globalData.careMode ? "/careModel/mine/index?page=" + encodeURIComponent("/careModel/xzjzr/index?funType=缴费记录") : "/pages/mine/index?page=" + encodeURIComponent("/intelligent/mzjf/mzfyRecord/index"), e.wx$1.reLaunch({
                        url: s
                    }), a.globalData.ybType = "", e.wx$1.hideLoading()
            }
        }
    },
    onHide: function() {
        console.log("App Hide")
    },
    globalData: {
        pubListCode: "ZYXZ,05,12,hlwfzxz,cfjftx,BAFYGZ,YYXZ,JZGL,JZFW,YBXX,LCXZ,org_intro,org_guide,org_tel,tx_notice,doctor_allocationNum_time,yq_notice",
        careMode: !1,
        jumpEncKey: "Gu3V0qoBJA91xIgj",
        apiDomain: "https://app.bdkq.mingxuan.store/",
        imgDomain: "https://app.bdkq.mingxuan.store/",
        oauthDomain: "https://app.bdkq.mingxuan.store/",
        imgUrlApi: "https://app.bdkq.mingxuan.store/xcx-bjdxkqyy-assets",
        assets: "xcx-bjdxkqyy-assets",
        service: "xcx-bjdxkqyy-wx",
        version: "default",
        shake: !0,
        isSecret: !0,
        apiSecret: "nY-Pksdkjfiwejrksdf_LsJP_@#(*$##)",
        registered: !1,
        dist: "0",
        hospital: "北京大学口腔医院",
        address: "",
        latitude: 0,
        longitude: 0,
        hosIcon: "/static/logo.png",
        org_code: "12100000400777097N",
        medical: {},
        orgAppId: "1H4NRR7OE01GE1470B0A000017FC6F77",
        cityCode: "150624",
        channel: "AAEX6MbEZwAm6aWt37M3hjN3",
        orgCodg: "H15062400020",
        orgChnlCrtfCodg: "BqK1kMStlhVDgN2uHf4EsLK/F2LjZPYJ81nK2eYQqxvTfm7KAKrRX+Ay4MX9wwMT",
        orgVersion: "release",
        myUserId: 0,
        bindPatients: {},
        versionStorage: "",
        hospitalInfo: {
            subMessageArrays: {
                appointmentYy: ["0_CYhkZgugycFunwBPYlxv1I8hACYksMFxFa06u4tXw"],
                afterPay: ["Pbo0Z9BA1KiDPQB4HmQl6gy4hTqQpOnEiF27Q0K6aZc"],
                auditResult: ["NQsON_WKUdLdkjZIpymyO5FeCSJBAG5M1gq_fUYiPqY"]
            }
        }
    }
};
 function t() {
    return {
        app: e.createSSRApp(a)
    }
}
t().app.mount("#app"), exports.createApp = t;