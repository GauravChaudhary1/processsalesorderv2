/*global QUnit*/

sap.ui.define([
	"comsapfiori/processsalesorderv2/controller/Extension.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Extension Controller");

	QUnit.test("I should test the Extension controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
