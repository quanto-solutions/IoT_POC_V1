jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"quanto/iotpocv1/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"quanto/iotpocv1/test/integration/pages/Worklist",
		"quanto/iotpocv1/test/integration/pages/Object",
		"quanto/iotpocv1/test/integration/pages/NotFound",
		"quanto/iotpocv1/test/integration/pages/Browser",
		"quanto/iotpocv1/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "quanto.iotpocv1.view."
	});

	sap.ui.require([
		"quanto/iotpocv1/test/integration/WorklistJourney",
		"quanto/iotpocv1/test/integration/ObjectJourney",
		"quanto/iotpocv1/test/integration/NavigationJourney",
		"quanto/iotpocv1/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});