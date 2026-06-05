
var t = require("../../../utils/api"),
    a = require("../../../utils/wxutil.js");
Page({
    data: {
        bindLimit: 3,
        dataInit: !1,
        ok: !1,
        patientInfoCardGroup: [],
        visitor: {},
        tapIndex: "",
        deptCode: "",
        deptName: "",
        showJzxz: !1,
        area: ""
    },
    onLoad: function(t) {
        this.setData({
            tapIndex: t.tapIndex,
            deptCode: t.deptCode,
            deptName: t.deptName,
            area: t.area || "",
            showJzxz: t.showJzxz || !1
        }), wx.setNavigationBarTitle({
            title: "选择就诊人"
        })
    },
    onReady: function() {},
    onShow: function() {
        var a = (0, t.getGlobalRegistered)();
        if (this.setData({
                ok: a
            }), a) {
            var e = (0, t.getGlobalCardInfo)();
            this.setData({
                visitor: e,
                dataInit: !0
            })
        } else this.setData({
            dataInit: !0
        })
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return a.getShareMessage()
    },
    toAuth: function() {
        a.navigateTo("/pages/jzr/jzrrz/index")
    },
    doAdd: function() {
        a.navigateTo("/pages/jzr/tjjzr/index")
    },
    doJump: function(t) {
        var e = t.currentTarget.dataset.visitor;
        a.isEmpty(e.permanentAddress) || a.isEmpty(e.contactName) || a.isEmpty(e.contactPhone) ? a.showModal({
            content: "系统检测到您的信息不完善，请完善信息后重试",
            confirmText: "立即完善",
            confirmColor: "#13ba84",
            cancelText: "暂不完善",
            cancelColor: "#404040",
            showCancel: !0,
            success: function(t) {
                t.confirm ? a.navigateTo("/pages/jzr/wsxx/index?visitor=" + JSON.stringify(e)) : a.navigateBack()
            }
        }) : this.data.deptCode ? a.navigateTo("/pages/dtgh/xzys/index?deptCode=" + this.data.deptCode + "&deptName=" + this.data.deptName + "&selectVisitor=" + JSON.stringify(e) + "&tapIndex=" + this.data.tapIndex + "&showJzxz=" + this.data.showJzxz + "&area=" + this.data.area) : a.navigateTo("/pages/dtgh/xzks/index?selectVisitor=" + JSON.stringify(e) + "&tapIndex=" + this.data.tapIndex + "&area=" + this.data.area)
    }
});