sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator, Base) {
        "use strict";

        return Controller.extend("ui.controller.Detail", {
            routeName: "detail",
            onInit: function () {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetail").attachPatternMatched(this._onRouteMatched, this)
            },
            _onRouteMatched: function (oEvent) {
                let prodId = oEvent.getParameter("arguments").id;
                let oView = this.getView();
                oView.bindObject({
                    path: `/xALKxPRD_CATALOG_SRV('${prodId}')`
                })

            },
            formatSAPApplication: function (value) {
                switch (value) {
                    case "01":
                        return "Analytics"
                        break;
                    case "02":
                        return "BNL"
                        break;
                    case "03":
                        return "BTP"
                        break;
                    case "04":
                        return "EWM"
                        break;
                    case "05":
                        return "GTS"
                        break;
                    case "06":
                        return "IBP"
                        break;
                    case "07":
                        return "Others"
                        break;
                    case "08":
                        return "SCM"
                        break;
                    case "09":
                        return "TM"
                        break;
                }
            },
            formatProuctType: function (value) {
                switch (value) {
                    case "AC":
                        return "Accelerator"
                        break;
                    case "PR":
                        return "Product"
                        break;
                    case "SO":
                        return "Solution"
                        break;
                }
            },
            formatDeploymentType: function (value) {
                switch (value) {
                    case "01":
                        return "Code"
                        break;
                    case "02":
                        return "Code + Configuration"
                        break;
                    case "03":
                        return "Configuration"
                        break;
                    case "04":
                        return "Customizing"
                        break;
                    case "05":
                        return "Hosted"
                        break;
                }
            },
            formatPrdRdy: function(value){
                switch (value) {
                    case "CO":
                        return "Conceptual"
                        break;
                    case "FR":
                        return "Framework"
                        break;
                    case "PC":
                        return "POC"
                        break;
                    case "FB":
                        return "Fully Built"
                        break;
                }
            },
            formatPrdOwner: function(value){
                switch (value) {
                    case "AR":
                        return "Archlynk"
                        break;
                    case "AV":
                        return "Avvay"
                        break;
                    case "SA":
                        return "SAP"
                        break;
                }
            },
            formatPricingPlan: function(value){
                switch (value) {
                    case "01":
                        return "Custom Pricing"
                        break;
                    case "02":
                        return "Free"
                        break;
                    case "03":
                        return "Implementation Cost"
                        break;
                    case "04":
                        return "Nominal fee"
                        break;
                    case "05":
                        return "Priced In"
                        break;
                    case "06":
                        return "SaaS"
                        break;
                }
            },
            formatProjStatus: function (assess,impl,design,golive,postgo){
                let status = `${assess ? "Assesment," : ""}${impl ? "Implementation," : ""}${design ? "Design," : ""}${golive ? "Go-Live," : ""}${postgo ? "Post Go-Live" : ""}`;
                return status;
            },
            formatPrcOwner: function (value) {
                switch (value) {
                    case "AN":
                        return "Andrei Colonescu"
                        break;
                    case "BH":
                        return "Bhushan Kale"
                        break;
                    case "HA":
                        return "Hariharan Subramanian"
                        break;
                    case "LU":
                        return "Luis Gomez"
                        break;
                    case "MO":
                        return "Mouli Venkataraman"
                        break;
                    case "PA":
                        return "Pankaj Diwan"
                        break;
                    case "RO":
                        return "Rohan Saundattikar"
                        break;
                }
            },
        });
    }
);
