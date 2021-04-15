Module.register("MMM-Useless-Facts",{
    defaults: {
        language: "en",
        format: "json",
        path: "random",
        timer: 10000
    },
    text: "Loading...",
    start: function () {

    },
    notificationReceived: function (noti, payload, sender) {
        if (noti == "DOM_OBJECTS_CREATED") {
            this.sendSocketNotification("INIT", this.config)
        }
    },
    socketNotificationReceived: function (noti, payload) {
        if(noti=="GETDATA")
        {
            console.log(payload);
            this.text=payload.text;
            this.updateDom();
        }
    },
    getDom: function () {
        var wrapper = document.createElement("div");
        const fact=document.createElement("h1");
        fact.className = "bright medium light fadeInFact";
        fact.innerHTML = this.text;
        wrapper.appendChild(fact);
		return wrapper;
	},
});