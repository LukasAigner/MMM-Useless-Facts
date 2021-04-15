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
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		var element = document.createElement("span");
        element.appendChild(document.createTextNode(this.text))
		wrapper.appendChild(element);
		return wrapper;
	},
});