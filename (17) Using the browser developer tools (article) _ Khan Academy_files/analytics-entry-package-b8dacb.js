KAdefine("javascript/page-template-package/analytics-entry.js", function(require, module, exports) {
var tplParams=window["./javascript/page-template-package/analytics-entry.js"]
if(tplParams.gaeStatsKeyPrefix){window.addEventListener("load",function(){var a=require("../analytics-package/analytics.js")
a.reportTiming()},false)}var dom=require("../shared-package/dom-utils.js")
dom.ready().then(function(){var a=require("../analytics-package/analytics.js")
a.init()})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/analytics-entry-package.js.map 