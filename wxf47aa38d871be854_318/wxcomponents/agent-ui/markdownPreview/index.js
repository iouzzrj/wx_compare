
var t = require("./utils");
Component({
    properties: {
        markdown: {
            type: String,
            value: ""
        }
    },
    data: {
        text: {}
    },
    observers: {
        markdown: function(e) {
            var r = (0, t.markdownToWxml)(e);
            this.setData({
                text: r
            })
        }
    },
    methods: {}
});