sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeService",
  ],
  (Controller, HomeService) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
      onInit: function () {},

      onPress: async function () {
        let oData = await HomeService.getDataProducts();
      },
    });
  }
);
