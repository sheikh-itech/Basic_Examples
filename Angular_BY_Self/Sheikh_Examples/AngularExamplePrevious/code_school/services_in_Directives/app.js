angular.module("app", ["ui.bootstrap"])

    .service("alertService", function AlertService() {
        var alertService = this;

        alertService.alertMessage = "Something Failed";
        alertService.alertType = "danger";
        alertService.showAlert = true;
    })

    .controller("AppCtrl", function AppCtrl(alertService) {
        var app = this;
        app.alertService = alertService;
        app.somethingFailed = function () {
            app.alertService.alertMessage = "Invoked from AppCtrl";
            app.alertService.alertType = "success";
        };

    })

    .directive("appAlert", function appAlert() {
        return {
            bindToController: true,
            controller: "AppAlertCtrl as appAlert",
            template: '<alert ng-if="appAlert.alertService.showAlert" type="{{ appAlert.alertService.alertType }}">{{ appAlert.alertService.alertMessage }}</alert>'
        };
    })

    .controller("AppAlertCtrl", function AppAlertCtrl(alertService) {
        var appAlert = this;
        appAlert.alertService = alertService;
    });
