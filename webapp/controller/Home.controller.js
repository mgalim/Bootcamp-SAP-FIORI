sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, HomeHelper, JSONModel) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
      onInit: function () {},

      onPress: async function () {
        const oData = await HomeHelper.getDataProducts();
        const oModel = new JSONModel({ Products: oData[0].results });
        this.getView().setModel(oModel, "products");
      },
    });
  }
);
