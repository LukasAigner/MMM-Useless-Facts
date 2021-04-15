const fetch = require('node-fetch');
var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        this.config = {}
        this.init=false;
    },
    socketNotificationReceived: function (noti, payload) {
        if(noti==="INIT")
        {
            console.log(this.init);
            console.log(payload);
            this.init=true;
        }
    },
});