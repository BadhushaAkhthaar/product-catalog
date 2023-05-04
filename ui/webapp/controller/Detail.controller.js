sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("ui.controller.Detail", {
            routeName: "detail",
            onInit: function(){
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetail").attachPatternMatched(this._onRouteMatched,this)
            },
            _onRouteMatched: function (oEvent) {
                let prodId = oEvent.getParameter("arguments").id;
                let oView = this.getView();
                oView.bindObject({
                    path: `/xALKxPRD_CATALOG_SRV('${prodId}')`
                })
                
            }

        });
    }
);
