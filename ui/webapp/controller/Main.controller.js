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

        return Controller.extend("ui.controller.Main", {
            routeName: "catalog",
            onInit: function () {
                let oFiltersModel = new JSONModel({
                    filters: {
                        prod_name: {
                            inputValue: "",
                        },
                        sap_module: {
                            selectedKeys: [],
                        },
                        product_type: {
                            selectedKeys: [],
                        },
                        product_readiness: {
                            selectedKeys: [],
                        },
                        related_industry: {
                            selectedKeys: [],
                        },
                    },
                });
                this.getView().setModel(oFiltersModel, this.routeName);
                console.log("Initialized");
            },
            onFilterBarInit: function () {
                console.log("Filterbar");
                this.byId("smartfilterID").search();
            },
            onSearch: function () {
                let _filterModel = this.getView()
                    .getModel(this.routeName)
                    .getProperty("/filters");
                let _filterAll = [];
                for (const key in _filterModel) {
                    if (_filterModel.hasOwnProperty(key)) {
                        if (_filterModel[key].filter) {
                            _filterAll.push(_filterModel[key].filter);
                        }
                    }
                }
                let _filterWrapper = new Filter({
                    filters: _filterAll,
                    and: true,
                });
                if (!this.byId("product-catalog").getBinding("items")) {
                    return;
                }
                this.byId("product-catalog").getBinding("items").filter(_filterWrapper);
            },
            onFilterInputChange: function (oEvent) {
                let filter_key = oEvent.getSource().data("key");
                let filter_value = oEvent.getParameter("newValue").trim();
                let filter = new Filter({
                    path: filter_key,
                    operator: FilterOperator.Contains,
                    value1: filter_value,
                });

                this.getView()
                    .getModel(this.routeName)
                    .setProperty(`/filters/${filter_key}/filter`, filter);
                // this.byId("product-catalog").getBinding("items").filter(filter);
            },
            onFilterIndustryChanged: function (oEvent) {
                let filter_key = oEvent.getSource().data("key");
                let selectedKeysFilter = [];
                let selectedKeys = this.getView()
                    .getModel(this.routeName)
                    .getProperty(`/filters/related_industry/selectedKeys`);
                console.log(selectedKeys);
                selectedKeys.forEach((_key) => {
                    selectedKeysFilter.push(
                        new Filter({
                            path: _key,
                            operator: FilterOperator.EQ,
                            value1: true,
                        })
                    );
                });
                let _oFilter = new Filter({
                    filters: selectedKeysFilter,
                    and: false,
                });
                if (selectedKeysFilter.length) {
                    this.getView()
                        .getModel(this.routeName)
                        .setProperty(`/filters/related_industry/filter`, _oFilter);
                }
                else {
                    this.getView()
                        .getModel(this.routeName)
                        .setProperty(`/filters/related_industry/filter`, null);
                }
                // this.byId("product-catalog").getBinding("items").filter(_oFilter);
            },
            onFilterComboChanged: function (oEvent) {
                let filter_key = oEvent.getSource().data("key");
                let selectedKeysFilter = [];
                let selectedKeys = this.getView()
                    .getModel(this.routeName)
                    .getProperty(`/filters/${filter_key}/selectedKeys`);
                selectedKeys.forEach((_key) => {
                    selectedKeysFilter.push(
                        new Filter({
                            path: filter_key,
                            operator: FilterOperator.EQ,
                            value1: _key,
                        })
                    );
                });
                let _oFilter = new Filter({
                    filters: selectedKeysFilter,
                    and: false,
                });
                if (selectedKeysFilter.length) {
                    this.getView()
                        .getModel(this.routeName)
                        .setProperty(`/filters/${filter_key}/filter`, _oFilter);
                } else {
                    this.getView()
                        .getModel(this.routeName)
                        .setProperty(`/filters/${filter_key}/filter`, undefined);
                }
                // this.byId("product-catalog").getBinding("items").filter(selectedKeysFilter);
            },
            onSelect: function(oEvent){
                let context = oEvent.getParameter("listItem").getBindingContext().getObject();
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteDetail",{id: context["prod_id"]})
            }
        });
    }
);
