
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MedicalRecordCopySubmitAudit = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/MedicalRecordCopySubmitAudit",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.againPay = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/drug/purchase/online-payment-rePayOrder.json",
            method: "get",
            data: {
                paySerialNo: n
            },
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.appointment = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/appointment/page.json",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.appointment2 = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/online/patient/appointment/pageGroupBy.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.cancelCollect = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/online/patient/collectInfo/cancel/" + n.collectId,
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.cancelRecord = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/cancelRecord.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.cancelregisterRecord = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/cancelregisterRecord.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.collect = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/collectInfo/doctor.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.collectMessage = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/collectInfo/message.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.collectStatus = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/collectInfo/status.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.confirmationReceipt = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/drug/purchase/confirmationReceipt.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.createOrder = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/createOrder.json",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.createPDF = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/createPDF",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.diseasePage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/common/OnlineDiseaseDiseaseListHospital/queryForList.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.doAppraise = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/online/patient/evaluation/doAppraise",
            method: "post",
            data: n || {},
            success: function(e) {
                0 == e.status ? t(e) : o(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.drugPurchaseOnlinePaymentCreateOrder = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/drug/purchase/online-payment-createOrder.json",
            method: "post",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.drugSpecification = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/dispensatory/drugSpecification.json",
            method: "post",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.endOnlineaudioOrVideo = function(n) {
    var t = 1 == n.type ? "/online/im/chat/end-audio-online-patient.json" : "/online/im/chat/end-video-online-patient.json";
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: t,
            method: "post",
            data: n || {},
            success: function(e) {
                0 == e.status ? o(e.data) : i(e.data)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.existsFile = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/existsFile",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.followPage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/collectInfo/queryForPage.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getApponitmentTime = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/system/getApponitmentTime",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getCfByMedicalPrescId = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/appointment/getCfByMedicalPrescId",
            method: "get",
            data: n || {},
            success: function(e) {
                0 == e.status ? t(e) : o(e.message || "服务器异常")
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getCheckJC = function(n) {
    return console.log(n), new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/online/check/page",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getCheckJY = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/online/inspect/page",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getDiagnosisResult = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/appointment/getDiagnosisResult",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getDrugOrderByOrderId = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/drug/purchase/getOrderByOrderId.json",
            method: "get",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getGroupAndFirstUnrea = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/serviceNotification/getGroupAndFirstUnread",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getInPatientCase = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInPatientCase",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getInPatientCasePdf = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInPatientCasePdf",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getInPatientDrug = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInPatientDrug",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getInPatientPreFee = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInPatientPreFee",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getInhospitalAccount = function(n, t) {
    return console.log(t), new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInhospitalAccount",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getInhospitalRecord = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/inhospital/getInhospitalRecord",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getLisPDF = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getLisPDF",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getMyCaseid = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/patdoc/medical/getMyCaseid",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getOrderExpire = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/drug/purchase/getOrderExpire.json",
            method: "get",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getOutPatientPrescription = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/outpatient/getOutPatientPrescription",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientAppointments = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/outpatient/getPatientAppointments",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientFee = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/outpatient/getPatientFee",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientLis = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getPatientLis",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientOutiagnosis = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/outpatient/getPatientOutiagnosis",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientPacs = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getPatientPacs",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPatientPath = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getPatientPath",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getPayCost = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/patdoc/outpatient/getPayCost.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getRecordByRecordId = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/getRecordByRecordId.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getRoomSettings = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/online/patient/im/chat/getRoomSettings",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getToPayRecord = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/prescription/page.json",
            method: "get",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getToPayRecordDetail = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/patdoc/outpatient/getPayCostDetail.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getUnreadCount = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/serviceNotification/getUnreadCount",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getValidTime = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/getValidTime",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.getVideoReport = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getVideoReport",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getVideoReportBaseSixFour = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/report/getVideoReportBaseSixFour",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getViewLeft = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/lineUp/getViewLeft",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.getViewtv = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/lineUp/getViewtv",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.imUserLogin = function(t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/appointment/imUserLogin",
            method: "get",
            data: t || {},
            success: function(e) {
                e.data["im-info"].topic = e.data["im-info"].topics[0], n.globalData.imCfg = e.data, o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.inItImParameter = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/appointment/inItImParameter",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.initialization = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/evaluation/initialization",
            method: "get",
            data: n || {},
            success: function(e) {
                0 == e.status ? t(e) : o(e.message || "服务器异常")
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.messageDetail = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/serviceNotification/page",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.onlineCreateOrder = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/appointment/createOrder",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.onlineDrugOrderPage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/drug/purchase/onlineDrugOrderPage.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.outpatientPay = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/patdoc/outpatient/createAutoPayOrder.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.pageAppraise = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/online/common/doctor/pageAppraise",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.pageChatMessage = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/im/chat/pageChatMessage.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.payOrderCancel = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/patdoc/outpatient/payOrderCancel.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.pdf2Img = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/api/patdoc/outpatient/pdf2Img",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.queryDeliver = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/express/sf/queryOrderRoute.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryDepartment = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/department/queryDepartment",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryDepartment2 = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/common/department/queryDepartmentGroupBy",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryDeptAndDoctorList = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/common/doctor/queryDeptAndDoctorList",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryDoctorById = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/online/patient/doctor/queryDoctorById",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryDoctorForPage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/doctor/queryDoctorForPage",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.queryMedicalRecordPage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/queryMedicalRecordPage.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.queryMessageIsOpen = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/patientInfo/queryMessageIsOpen.json",
            method: "post",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryOrderTrajectory = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/queryOrderTrajectory.json",
            method: "GET",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.queryScheduleInfo = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/queryScheduleInfo",
            method: "POST",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.querySig = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/patient/appointment/querySig.json",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.queryTakeMedicineCode = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/patient/drug/purchase/queryTakeMedicineCode.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.racceptOnlineaudioOrVideo = function(n) {
    var t = 1 == n.type ? "/online/im/chat/accept-audio-online.json" : "/online/im/chat/accept-video-online.json";
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: t,
            method: "post",
            data: n || {},
            success: function(e) {
                0 == e.status ? o(e.data) : i(e.data)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.rejectOnlineaudioOrVideo = function(n) {
    var t = 1 == n.type ? "/online/im/chat/reject-audio-online.json" : "/online/im/chat/reject-video-online.json";
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: t,
            method: "post",
            data: n || {},
            success: function(e) {
                0 == e.status ? o(e.data) : i(e.data)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.relayRntity = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: "/online/im/chat/relay-entity.json",
            method: "post",
            data: t || {},
            success: function(e) {
                e.data.megId = n, o(e.data)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.repeatEditMedical = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/online/medical/repeatEditMedical.json",
            method: "post",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.requestPayment = function(e) {
    return new Promise((function(n, t) {
        wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.sign,
            success: function(o) {
                "requestPayment:ok" == o.errMsg ? setTimeout((function() {
                    e.requestPayment = "ok", n(e)
                }), 1500) : "requestPayment:cancel" == o.errMsg && t("取消支付")
            },
            fail: function(e) {
                t("发起支付失败")
            }
        })
    }))
}, exports.selSearchKey = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: n,
            url: "/common/OnlineDiseaseDiseaseListHospital/selSearchKey.json",
            method: "get",
            data: t || {},
            success: function(e) {
                o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.sendFileMessage = function(e, o, i) {
    var s = t.getApiBase(),
        u = "/online/im/chat/sendFileMessage.json";
    n.globalData.shake && -1 == u.indexOf("/online") && -1 == u.indexOf("/common") && (s += "@" + n.globalData.version);
    return new Promise((function(t, a) {
        wx.uploadFile({
            url: s + u,
            filePath: e,
            name: "file",
            formData: o || {},
            header: {
                "content-type": "application/json",
                "x-token": n.globalData.accessToken
            },
            success: function(e) {
                console.log(e);
                var n = JSON.parse(e.data);
                0 == n.status && (n.megId = i), t(n)
            },
            fail: function(e) {
                a(e)
            }
        })
    }))
}, exports.sendRecallNotice = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/online/im/chat/send-recall-notice.json",
            method: "post",
            data: n || {},
            success: function(e) {
                t(e.data)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.sendTextMessage = function(n, t) {
    return new Promise((function(o, i) {
        (0, e._request)({
            loading: !1,
            url: "/online/im/chat/sendTextMessage.json",
            method: "post",
            data: t || {},
            success: function(e) {
                0 == e.status && (e.data.megId = n, o(e.data)), o(e)
            },
            fail: function(e) {
                i(e)
            }
        })
    }))
}, exports.setReadBatch = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/serviceNotification/setReadBatch",
            method: "get",
            data: n || {},
            success: function(e) {
                0 == e.status ? t(e) : o(e.message || "服务器异常")
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.setReadByMessageId = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/serviceNotification/setReadByMessageId",
            method: "get",
            data: n || {},
            success: function(e) {
                0 == e.status ? t(e) : o(e.message || "服务器异常")
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.symptomDescList = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !1,
            url: "/api/online/patient/appointment/symptomDescList",
            method: "get",
            data: n || {},
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.updateMessageIsOpen = function(n) {
    return new Promise((function(t, o) {
        (0, e._request)({
            loading: !0,
            url: "/api/patientInfo/updateMessageIsOpen.json",
            method: "post",
            data: n,
            success: function(e) {
                t(e)
            },
            fail: function(e) {
                o(e)
            }
        })
    }))
}, exports.uploadFile = function(e, o, i) {
    return new Promise((function(s, u) {
        var a = t.getApiBase(),
            r = "/common/file/openUploadByDocumentServices.json";
        n.globalData.shake && -1 == r.indexOf("/online") && -1 == r.indexOf("/common") && (a += "@" + n.globalData.version), wx.uploadFile({
            url: a + r,
            filePath: e,
            name: o || "file",
            formData: i || {
                user: "test"
            },
            success: function(e) {
                if (200 == e.statusCode) {
                    var n = JSON.parse(e.data);
                    s(n)
                } else u(e.errMsg)
            },
            fail: function(e) {
                u("服务器异常~")
            }
        })
    }))
};
var e = require("./api.js"),
    n = getApp(),
    t = require("./wxutil.js");