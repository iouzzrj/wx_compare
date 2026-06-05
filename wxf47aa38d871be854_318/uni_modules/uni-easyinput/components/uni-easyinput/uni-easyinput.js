
var t = require("../../../../common/vendor.js");
 function e(t) {
    var e = "";
    for (var o in t) e += "".concat(o, ":").concat(t[o], ";");
    return e
}
var o = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
        prop: "modelValue",
        event: "update:modelValue"
    },
    options: {
        virtualHost: !0
    },
    inject: {
        form: {
            from: "uniForm",
            default: null
        },
        formItem: {
            from: "uniFormItem",
            default: null
        }
    },
    props: {
        name: String,
        value: [Number, String],
        modelValue: [Number, String],
        type: {
            type: String,
            default: "text"
        },
        clearable: {
            type: Boolean,
            default: !0
        },
        autoHeight: {
            type: Boolean,
            default: !1
        },
        placeholder: {
            type: String,
            default: " "
        },
        placeholderStyle: String,
        focus: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        maxlength: {
            type: [Number, String],
            default: 140
        },
        confirmType: {
            type: String,
            default: "done"
        },
        clearSize: {
            type: [Number, String],
            default: 24
        },
        inputBorder: {
            type: Boolean,
            default: !0
        },
        prefixIcon: {
            type: String,
            default: ""
        },
        suffixIcon: {
            type: String,
            default: ""
        },
        trim: {
            type: [Boolean, String],
            default: !1
        },
        cursorSpacing: {
            type: Number,
            default: 0
        },
        passwordIcon: {
            type: Boolean,
            default: !0
        },
        adjustPosition: {
            type: Boolean,
            default: !0
        },
        primaryColor: {
            type: String,
            default: "#2979ff"
        },
        styles: {
            type: Object,
            default: function() {
                return {
                    color: "#333",
                    backgroundColor: "#fff",
                    disableColor: "#F7F6F6",
                    borderColor: "#e5e5e5"
                }
            }
        },
        errorMessage: {
            type: [String, Boolean],
            default: ""
        }
    },
    data: function() {
        return {
            focused: !1,
            val: "",
            showMsg: "",
            border: !1,
            isFirstBorder: !1,
            showClearIcon: !1,
            showPassword: !1,
            focusShow: !1,
            localMsg: "",
            isEnter: !1
        }
    },
    computed: {
        isVal: function() {
            var t = this.val;
            return !(!t && 0 !== t)
        },
        msg: function() {
            return this.localMsg || this.errorMessage
        },
        inputMaxlength: function() {
            return Number(this.maxlength)
        },
        boxStyle: function() {
            return "color:".concat(this.inputBorder && this.msg ? "#e43d33" : this.styles.color, ";")
        },
        inputContentClass: function() {
            return function(t) {
                var e = "";
                for (var o in t) t[o] && (e += "".concat(o, " "));
                return e
            }({
                "is-input-border": this.inputBorder,
                "is-input-error-border": this.inputBorder && this.msg,
                "is-textarea": "textarea" === this.type,
                "is-disabled": this.disabled,
                "is-focused": this.focusShow
            })
        },
        inputContentStyle: function() {
            var t = this.focusShow ? this.primaryColor : this.styles.borderColor;
            return e({
                "border-color": (this.inputBorder && this.msg ? "#dd524d" : t) || "#e5e5e5",
                "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
            })
        },
        inputStyle: function() {
            return e({
                "padding-right": "password" === this.type || this.clearable || this.prefixIcon ? "" : "10px",
                "padding-left": this.prefixIcon ? "" : "10px"
            })
        }
    },
    watch: {
        value: function(t) {
            this.val = null !== t ? t : ""
        },
        modelValue: function(t) {
            this.val = null !== t ? t : ""
        },
        focus: function(t) {
            var e = this;
            this.$nextTick((function() {
                e.focused = e.focus, e.focusShow = e.focus
            }))
        }
    },
    created: function() {
        var t = this;
        this.init(), this.form && this.formItem && this.$watch("formItem.errMsg", (function(e) {
            t.localMsg = e
        }))
    },
    mounted: function() {
        var t = this;
        this.$nextTick((function() {
            t.focused = t.focus, t.focusShow = t.focus
        }))
    },
    methods: {
        init: function() {
            this.value || 0 === this.value ? this.val = this.value : this.modelValue || 0 === this.modelValue || "" === this.modelValue ? this.val = this.modelValue : this.val = ""
        },
        onClickIcon: function(t) {
            this.$emit("iconClick", t)
        },
        onEyes: function() {
            this.showPassword = !this.showPassword, this.$emit("eyes", this.showPassword)
        },
        onInput: function(t) {
            var e = t.detail.value;
            this.trim && ("boolean" == typeof this.trim && this.trim && (e = this.trimStr(e)), "string" == typeof this.trim && (e = this.trimStr(e, this.trim))), this.errMsg && (this.errMsg = ""), this.val = e, this.$emit("input", e), this.$emit("update:modelValue", e)
        },
        onFocus: function() {
            var t = this;
            this.$nextTick((function() {
                t.focused = !0
            })), this.$emit("focus", null)
        },
        _Focus: function(t) {
            this.focusShow = !0, this.$emit("focus", t)
        },
        onBlur: function() {
            this.focused = !1, this.$emit("blur", null)
        },
        _Blur: function(t) {
            (t.detail.value, this.focusShow = !1, this.$emit("blur", t), !1 === this.isEnter && this.$emit("change", this.val), this.form && this.formItem) && ("blur" === this.form.validateTrigger && this.formItem.onFieldChange())
        },
        onConfirm: function(t) {
            var e = this;
            this.$emit("confirm", this.val), this.isEnter = !0, this.$emit("change", this.val), this.$nextTick((function() {
                e.isEnter = !1
            }))
        },
        onClear: function(t) {
            this.val = "", this.$emit("input", ""), this.$emit("update:modelValue", ""), this.$emit("clear")
        },
        onkeyboardheightchange: function(t) {
            this.$emit("keyboardheightchange", t)
        },
        trimStr: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
            return "both" === e ? t.trim() : "left" === e ? t.trimLeft() : "right" === e ? t.trimRight() : "start" === e ? t.trimStart() : "end" === e ? t.trimEnd() : "all" === e ? t.replace(/\s+/g, "") : t
        }
    }
};
Array || t.resolveComponent("uni-icons")(), Math;
var i = t._export_sfc(o, [
    ["render", function(e, o, i, n, r, s) {
        return t.e({
            a: i.prefixIcon
        }, i.prefixIcon ? {
            b: t.o((function(t) {
                return s.onClickIcon("prefix")
            }), "20"),
            c: t.p({
                type: i.prefixIcon,
                color: "#c0c4cc",
                size: "22"
            })
        } : {}, {
            d: "textarea" === i.type
        }, "textarea" === i.type ? {
            e: i.inputBorder ? 1 : "",
            f: i.name,
            g: r.val,
            h: i.placeholder,
            i: i.placeholderStyle,
            j: i.disabled,
            k: s.inputMaxlength,
            l: r.focused,
            m: i.autoHeight,
            n: i.cursorSpacing,
            o: i.adjustPosition,
            p: t.o((function() {
                return s.onInput && s.onInput.apply(s, arguments)
            }), "97"),
            q: t.o((function() {
                return s._Blur && s._Blur.apply(s, arguments)
            }), "2f"),
            r: t.o((function() {
                return s._Focus && s._Focus.apply(s, arguments)
            }), "0a"),
            s: t.o((function() {
                return s.onConfirm && s.onConfirm.apply(s, arguments)
            }), "e9"),
            t: t.o((function() {
                return s.onkeyboardheightchange && s.onkeyboardheightchange.apply(s, arguments)
            }), "b7")
        } : {
            v: "password" === i.type ? "text" : i.type,
            w: t.s(s.inputStyle),
            x: i.name,
            y: r.val,
            z: !r.showPassword && "password" === i.type,
            A: i.placeholder,
            B: i.placeholderStyle,
            C: i.disabled,
            D: s.inputMaxlength,
            E: r.focused,
            F: i.confirmType,
            G: i.cursorSpacing,
            H: i.adjustPosition,
            I: t.o((function() {
                return s._Focus && s._Focus.apply(s, arguments)
            }), "a5"),
            J: t.o((function() {
                return s._Blur && s._Blur.apply(s, arguments)
            }), "35"),
            K: t.o((function() {
                return s.onInput && s.onInput.apply(s, arguments)
            }), "a5"),
            L: t.o((function() {
                return s.onConfirm && s.onConfirm.apply(s, arguments)
            }), "a0"),
            M: t.o((function() {
                return s.onkeyboardheightchange && s.onkeyboardheightchange.apply(s, arguments)
            }), "99")
        }, {
            N: "password" === i.type && i.passwordIcon
        }, "password" === i.type && i.passwordIcon ? t.e({
            O: s.isVal
        }, s.isVal ? {
            P: "textarea" === i.type ? 1 : "",
            Q: t.o(s.onEyes, "18"),
            R: t.p({
                type: r.showPassword ? "eye-slash-filled" : "eye-filled",
                size: 22,
                color: r.focusShow ? i.primaryColor : "#c0c4cc"
            })
        } : {}) : {}, {
            S: i.suffixIcon
        }, i.suffixIcon ? t.e({
            T: i.suffixIcon
        }, i.suffixIcon ? {
            U: t.o((function(t) {
                return s.onClickIcon("suffix")
            }), "21"),
            V: t.p({
                type: i.suffixIcon,
                color: "#c0c4cc",
                size: "22"
            })
        } : {}) : t.e({
            W: i.clearable && s.isVal && !i.disabled && "textarea" !== i.type
        }, i.clearable && s.isVal && !i.disabled && "textarea" !== i.type ? {
            X: "textarea" === i.type ? 1 : "",
            Y: t.o(s.onClear, "a8"),
            Z: t.p({
                type: "clear",
                size: i.clearSize,
                color: s.msg ? "#dd524d" : r.focusShow ? i.primaryColor : "#c0c4cc"
            })
        } : {}), {
            aa: t.n(s.inputContentClass),
            ab: t.s(s.inputContentStyle),
            ac: s.msg ? 1 : "",
            ad: t.s(s.boxStyle)
        })
    }]
]);
wx.createComponent(i);