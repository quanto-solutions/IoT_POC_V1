sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"quanto/iotpocv1/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("quanto.iotpocv1.controller.ProductDetails", {

		formatter: formatter,

		onInit: function() {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		}
	});

});