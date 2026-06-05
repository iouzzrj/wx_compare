
var e = require("../../../utils/api"),
    t = (require("../../../utils/wxutil"), getApp(), require("../../../utils/wxutil.js")),
    a = t.getImgBase();
Page({
    data: {
        agreeAgreement: !1,
        type: "",
        zjzm: a + "/zprz/rBsAEGLzjj2AB7zbAADDxdjVyv8826.png",
        zjfm: a + "/zprz/rBsAEGLzjkqAE6VUAACuH1VPGq0623.png",
        bzps: a + "/zprz/rBsAEGL-CwCAAjgfAAAyitUH_nk493.png",
        psmh: a + "/zprz/rBsAEGL-CyqAdbR1AABKtVmCXno201.png",
        psbq: a + "/zprz/rBsAEGL-C0CAETK1AAArj10u73Y493.png",
        sggd: a + "/zprz/rBsAEGL-C3eAYjLYAABR1AjlS9U891.png",
        imgs: [],
        frontImgUrl: "",
        reverseImgUrl: "",
        obj: {}
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            type: e.type,
            obj: JSON.parse(e.obj),
            userId: e.userId
        })
    },
    onReady: function() {
        this.toptips = this.selectComponent("#tips")
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    doAgree: function() {
        this.setData({
            agreeAgreement: !this.data.agreeAgreement
        })
    },
    goNextBefore: t.throttle((function(a) {
        var r = [],
            s = this.data.frontImgUrl,
            n = this.data.reverseImgUrl;
        t.isEmpty(s) ? this.toptips.show({
            text: "请上传证件正面照片"
        }) : (r.push({
            attachmentName: "照片正面",
            attachmentPath: s
        }), t.isEmpty(n) ? this.toptips.show({
            text: "请上传证件反面照片"
        }) : (r.push({
            attachmentName: "照片反面",
            attachmentPath: n
        }), (0, e.authSubMessage)(r, "auditResult", this.gonext, this)))
    })),
    gonext: function(a) {
        var r = this,
            s = this.data.obj;
        t.showLoading(), (0, e.rareChineseCharacter)({
            rareName: s.rareName,
            rareIdCardType: s.rareIdCardType,
            rareIdCard: s.rareIdCard,
            rarePhone: s.rarePhone,
            rareAddress: s.rareAddress,
            rareEmergencyContact: s.rareEmergencyContact,
            rareEmergencyContactPhone: s.rareEmergencyContactPhone,
            attachmentInfoList: a,
            relationship: "0" == this.data.type ? "1" : "2",
            userId: this.data.userId,
            rareBirthday: s.rareBirthday
        }, (function(e) {
            console.log(e), t.hideLoading(), 0 == e.status ? wx.reLaunch({
                url: "/pages/rarelyUsed/rzjg/index?type=" + r.data.type + "&result=1&phone=" + s.rarePhone + "&phoneLable=" + s.phoneLable
            }) : wx.reLaunch({
                url: "/pages/rarelyUsed/rzjg/index?type=" + r.data.type + "&result=2&message=" + e.message + "&phone=" + s.rarePhone + "&phoneLable=" + s.phoneLable
            })
        }), (function(e) {
            t.hideLoading(), t.showToast({
                title: e.message || "申请失败"
            })
        }))
    },
    scimg: function(e) {
        var a = e.currentTarget.dataset.index,
            r = this;
        wx.chooseImage({
            count: 1,
            sizeType: ["original", "compressed"],
            sourceType: ["album", "camera"],
            success: function(e) {
                console.log(e);
                var s = e.tempFilePaths;
                e.tempFiles[0].size >= 1048576 ? wx.showToast({
                    title: "图片大小不能超过1MB",
                    icon: "none",
                    mask: !0
                }) : (0 == a ? r.setData({
                    zjzm: s
                }) : r.setData({
                    zjfm: s
                }), t.uploadFile({
                    url: "/common/file/upload.json",
                    filePath: s[0],
                    name: "file",
                    success: function(e) {
                        if (console.log(e), 0 == e.status) {
                            var t = e;
                            0 == a ? r.setData({
                                frontImgUrl: t.data
                            }) : r.setData({
                                reverseImgUrl: t.data
                            })
                        } else wx.showToast({
                            title: "上传照片失败！",
                            icon: "none"
                        })
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "上传失败，请稍后再试",
                            icon: "none"
                        })
                    }
                }))
            }
        })
    }
});