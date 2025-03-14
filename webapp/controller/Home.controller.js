sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper",
  ],
  (Controller, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
      onInit: function () {},

      onPress: async function () {
        const oData = await HomeHelper.getDataProducts();
        await HomeHelper.setProductModel(this, oData[0].results);
      },
    });
  }
);
