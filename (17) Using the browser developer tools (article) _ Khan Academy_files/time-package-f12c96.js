KAdefine("javascript/utils/time-package/main.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.formatTimeDisplay=formatTimeDisplay
exports.formatTimeDisplayAria=formatTimeDisplayAria
exports.getFormattedDate=getFormattedDate
var i18n=require("../../shared-package/i18n.js")
var SECONDS_PER_HOUR=3600
function pad(a,e){var r=Math.max(e-(""+a).length,0)
return new Array(r).fill(0).join("")+a}function durationFromSeconds(a){var e=Math.floor(a/SECONDS_PER_HOUR)
var r=Math.floor(a%SECONDS_PER_HOUR/60)
var t=Math.floor(a%60)
return{hours:e,minutes:r,seconds:t}}function formatTimeDisplay(a){var e=durationFromSeconds(a),r=e.hours,t=e.minutes,n=e.seconds
var o=pad(t,2)
var s=pad(n,2)
return(r?r+":"+o:t)+":"+s}function formatTimeDisplayAria(a){var e=durationFromSeconds(a),r=e.hours,t=e.minutes,n=e.seconds
var o=[]
if(r){o.push(i18n.ngettext("%(num)s hour","%(num)s hours",r))}if(t){o.push(i18n.ngettext("%(num)s minute","%(num)s minutes",t))}if(n){o.push(i18n.ngettext("%(num)s second","%(num)s seconds",n))}return o.join(" ")}function getFormattedDate(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date
var e=a.getFullYear()
var r=pad(a.getMonth()+1,2)
var t=pad(a.getDate(),2)
var n=pad(a.getHours(),2)
var o=pad(a.getMinutes(),2)
var s=pad(a.getSeconds(),2)
var i=-Math.round(a.getTimezoneOffset()/15)*15
var u=i<0?"-":"+"
var d=pad(parseInt(Math.abs(i/60)),2)
var m=pad(Math.abs(i%60),2)
var p=e+"-"+r+"-"+t
var v=n+":"+o+":"+s
var f=""+u+d+":"+m
return p+"T"+v+f}
});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/time-package.js.map 