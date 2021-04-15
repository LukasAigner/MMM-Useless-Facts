const fetch = require('node-fetch');
var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        this.config = {}
        this.init=false;
        this.url="https://uselessfacts.jsph.pl/"
        this.interval=null
    },
    socketNotificationReceived: function (noti, payload) {
        if(noti==="INIT")
        {
            this.config=payload;
            console.log(this.init);
            console.log(payload);
            if(this.init===false)
            {
                this.interval=setInterval(() => this.getDataFromApi(this.url+this.config.path+"."+this.config.format+"?language="+this.config.language), this.config.timer);
            }
            this.init=true;
            
        }
    },
    getDataFromApi: function (url) {
        let settings = { method: "Get" };
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },
});