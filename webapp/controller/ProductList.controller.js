sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend(
      "com.bootcamp.sapui5.freestyle.controller.ProductList",
      {
        onInit() {
          //   const oViewModel = new JSONModel({
          //     currency: "US",
          //   });
          //   this.getView().setModel(oViewModel, "view");
        },
      }
    );
  }
);
