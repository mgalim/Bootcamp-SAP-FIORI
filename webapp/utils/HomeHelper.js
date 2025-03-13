sap.ui.define([], function () {
  "use strict";
  return {
    init: function (oNorthwindModel) {
      this._oNorthwindModel = oNorthwindModel;
    },

    readProducts: async function (oFilter) {
      const aRequestsPromises = [
        new Promise(
          function (resolve, reject) {
            this._oNorthwindModel.read("/Products", {
              filters: oFilter,
              success: resolve,
              error: reject,
            });
          }.bind(this)
        ),
      ];
      return Promise.all(aRequestsPromises);
    },
  };
});
