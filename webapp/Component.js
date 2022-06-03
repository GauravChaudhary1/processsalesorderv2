jQuery.sap.declare("com.sap.fiori.processsalesorderv2.Component");
jQuery.sap.registerModulePath("cus.sd.salesorderv2.manage",'/sap/bc/ui5_ui5/sap/sd_sov2_mans1');
jQuery.sap.registerModulePath("sap.nw.core.changedocs.lib.reuse",'	/sap/bc/ui5_ui5/sap/NW_APS_CHD_LIB');
jQuery.sap.registerModulePath("sap.cus.sd.lib.processflow",'/sap/bc/ui5_ui5/sap/sd_reuse_pfs1');
jQuery.sap.registerModulePath("sap.cus.sd.lib.slsdoc.manage",'/sap/bc/ui5_ui5/sap/sd_reuse_sdocs1');
jQuery.sap.registerModulePath("sap.s4h.cfnd.featuretoggle",'/sap/bc/ui5_ui5/sap/featuretoggles1');
sap.ui.component.load({
    name : "cus.sd.salesorderv2.manage",
    url: "/sap/bc/ui5_ui5/sap/sd_sov2_mans1"
});

this.cus.sd.salesorderv2.manage.Component.extend("com.sap.fiori.processsalesorderv2.Component",{
    metadata: {
        manifest : "json"
    }

    
})