Module.register("MMM-Useless-Facts",{
    defaults: {
        language: "en",
        format: "json",
        path: "random",
        timer: 10000
    },
    start: function () {

    },
    notificationReceived: function (noti, payload, sender) {
        if (noti == "DOM_OBJECTS_CREATED") {
            this.sendSocketNotification("INIT", this.config)
        }
    },
    socketNotificationReceived: function (noti, payload) {
        
    },
});