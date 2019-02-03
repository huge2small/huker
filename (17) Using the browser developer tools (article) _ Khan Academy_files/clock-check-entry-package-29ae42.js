KAdefine("javascript/page-template-package/clock-check-entry.js", function(require, module, exports) {
var KA=require("../shared-package/ka.js")
var i18n=require("../shared-package/i18n.js")
var clockWarningEl=document.getElementById("inaccurate-clock-warning")
if(Math.abs(KA.currentServerTime()-new Date/1e3)>=60*60*24&&clockWarningEl){clockWarningEl.innerHTML=i18n._("If you're still having trouble, please check your computer's clock and make sure that today's date is properly set.")}
});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/clock-check-entry-package.js.map 