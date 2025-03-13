sap.ui.define(
  ["com/bootcamp/sapui5/freestyle/utils/HomeHelper"],
  function (HomeHelper) {
    "use strict";

    return {
      init: function (oNorthwindModel) {
        HomeHelper.init(oNorthwindModel);
      },

      getDataProducts: async function () {
        let oFilters = [];
        return HomeHelper.readProducts(oFilters);
      },
    };
  }
);
