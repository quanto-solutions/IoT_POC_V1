sap.ui.define([
		"quanto/iotpocv1/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("quanto.iotpocv1.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);