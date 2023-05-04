sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "sap/ui/core/message/Message",
    "sap/ui/core/library",
    "sap/m/MessageBox"
  ], function (Controller, History, UIComponent, Message, library, MessageBox) {
    "use strict";
  
    return Controller.extend("ui.controller.Base", {
  
      formatSAPApplication: function(value){
        console.log(value)
      }
  
    });
  
  });
  