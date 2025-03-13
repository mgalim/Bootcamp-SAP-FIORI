sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
        onInit() {
            const oModel = new JSONModel({
                name: ''
            })
            this.getView().setModel(oModel, 'viewName')
        },
        onShowHello() {
            const oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle()
            const oModel = this.getView().getModel("viewName").getProperty('/name')
            const sWorld = oBundle.getText('worldText')
            let sText = oModel === "" ? sWorld : oModel;
            const sMsg = oBundle.getText('helloMsg', [sText])
            MessageToast.show(sMsg, { duration: 2000 })
        }
    });
});