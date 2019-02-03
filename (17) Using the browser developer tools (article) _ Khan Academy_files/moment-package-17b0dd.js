KAdefine("third_party/javascript-khansrc/moment-khansrc/moment.js", function(require, module, exports) {
(function(e,t){var n=t()
if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=n}e.moment=n})(this,function(){"use strict"
var e
function t(){return e.apply(null,arguments)}function n(t){e=t}function i(e){return Object.prototype.toString.call(e)==="[object Array]"}function r(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function s(e,t){var n=[],i
for(i=0;i<e.length;++i){n.push(t(e[i],i))}return n}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){for(var n in t){if(a(t,n)){e[n]=t[n]}}if(a(t,"toString")){e.toString=t.toString}if(a(t,"valueOf")){e.valueOf=t.valueOf}return e}function u(e,t,n,i){return Ot(e,t,n,i,true).utc()}function l(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function f(e){if(e._pf==null){e._pf=l()}return e._pf}function d(e){if(e._isValid==null){var t=f(e)
e._isValid=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated
if(e._strict){e._isValid=e._isValid&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===undefined}}return e._isValid}function h(e){var t=u(NaN)
if(e!=null){o(f(t),e)}else{f(t).userInvalidated=true}return t}function c(e){return e===void 0}var m=t.momentProperties=[]
function v(e,t){var n,i,r
if(!c(t._isAMomentObject)){e._isAMomentObject=t._isAMomentObject}if(!c(t._i)){e._i=t._i}if(!c(t._f)){e._f=t._f}if(!c(t._l)){e._l=t._l}if(!c(t._strict)){e._strict=t._strict}if(!c(t._tzm)){e._tzm=t._tzm}if(!c(t._isUTC)){e._isUTC=t._isUTC}if(!c(t._offset)){e._offset=t._offset}if(!c(t._pf)){e._pf=f(t)}if(!c(t._locale)){e._locale=t._locale}if(m.length>0){for(n in m){i=m[n]
r=t[i]
if(!c(r)){e[i]=r}}}return e}var y=false
function g(e){v(this,e)
this._d=new Date(e._d!=null?e._d.getTime():NaN)
if(y===false){y=true
t.updateOffset(this)
y=false}}function p(e){return e instanceof g||e!=null&&e._isAMomentObject!=null}function D(e){if(e<0){return Math.ceil(e)}else{return Math.floor(e)}}function M(e){var t=+e,n=0
if(t!==0&&isFinite(t)){n=D(t)}return n}function Y(e,t,n){var i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),s=0,a
for(a=0;a<i;a++){if(n&&e[a]!==t[a]||!n&&M(e[a])!==M(t[a])){s++}}return s+r}function S(){}var w={}
var k
function T(e){return e?e.toLowerCase().replace("_","-"):e}function b(e){var t=0,n,i,r,s
while(t<e.length){s=T(e[t]).split("-")
n=s.length
i=T(e[t+1])
i=i?i.split("-"):null
while(n>0){r=O(s.slice(0,n).join("-"))
if(r){return r}if(i&&i.length>=n&&Y(s,i,true)>=n-1){break}n--}t++}return null}function O(e){var t=null
if(!w[e]&&typeof module!=="undefined"&&module&&module.exports){try{t=k._abbr
require("./locale/"+e+".js")
W(t)}catch(e){}}return w[e]}function W(e,t){var n
if(e){if(c(t)){n=U(e)}else{n=x(e,t)}if(n){k=n}}return k._abbr}function x(e,t){if(t!==null){t.abbr=e
w[e]=w[e]||new S
w[e].set(t)
W(e)
return w[e]}else{delete w[e]
return null}}function U(e){var t
if(e&&e._locale&&e._locale._abbr){e=e._locale._abbr}if(!e){return k}if(!i(e)){t=O(e)
if(t){return t}e=[e]}return b(e)}var G={}
function P(e,t){var n=e.toLowerCase()
G[n]=G[n+"s"]=G[t]=e}function C(e){return typeof e==="string"?G[e]||G[e.toLowerCase()]:undefined}function F(e){var t={},n,i
for(i in e){if(a(e,i)){n=C(i)
if(n){t[n]=e[i]}}}return t}function H(e){return e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function V(e,n){return function(i){if(i!=null){I(this,e,i)
t.updateOffset(this,n)
return this}else{return L(this,e)}}}function L(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function I(e,t,n){if(e.isValid()){e._d["set"+(e._isUTC?"UTC":"")+t](n)}}function N(e,t){var n
if(typeof e==="object"){for(n in e){this.set(n,e[n])}}else{e=C(e)
if(H(this[e])){return this[e](t)}}return this}function A(e,t,n){var i=""+Math.abs(e),r=t-i.length,s=e>=0
return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var R=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
var E=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
var j={}
var z={}
function Z(e,t,n,i){var r=i
if(typeof i==="string"){r=function(){return this[i]()}}if(e){z[e]=r}if(t){z[t[0]]=function(){return A(r.apply(this,arguments),t[1],t[2])}}if(n){z[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)}}}function q(e){if(e.match(/\[[\s\S]/)){return e.replace(/^\[|\]$/g,"")}return e.replace(/\\/g,"")}function J(e){var t=e.match(R),n,i
for(n=0,i=t.length;n<i;n++){if(z[t[n]]){t[n]=z[t[n]]}else{t[n]=q(t[n])}}return function(r){var s=""
for(n=0;n<i;n++){s+=t[n]instanceof Function?t[n].call(r,e):t[n]}return s}}function B(e,t){if(!e.isValid()){return e.localeData().invalidDate()}t=Q(t,e.localeData())
j[t]=j[t]||J(t)
return j[t](e)}function Q(e,t){var n=5
function i(e){return t.longDateFormat(e)||e}E.lastIndex=0
while(n>=0&&E.test(e)){e=e.replace(E,i)
E.lastIndex=0
n-=1}return e}var X=/\d/
var K=/\d\d/
var ee=/\d{3}/
var te=/\d{4}/
var ne=/[+-]?\d{6}/
var ie=/\d\d?/
var re=/\d\d\d\d?/
var se=/\d\d\d\d\d\d?/
var ae=/\d{1,3}/
var oe=/\d{1,4}/
var ue=/[+-]?\d{1,6}/
var le=/\d+/
var fe=/[+-]?\d+/
var de=/Z|[+-]\d\d:?\d\d/gi
var he=/Z|[+-]\d\d(?::?\d\d)?/gi
var ce=/[+-]?\d+(\.\d{1,3})?/
var me=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
var _e={}
function ve(e,t,n){_e[e]=H(t)?t:function(e,i){return e&&n?n:t}}function ye(e,t){if(!a(_e,e)){return new RegExp(ge(e))}return _e[e](t._strict,t._locale)}function ge(e){return pe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r}))}function pe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var De={}
function Me(e,t){var n,i=t
if(typeof e==="string"){e=[e]}if(typeof t==="number"){i=function(e,n){n[t]=M(e)}}for(n=0;n<e.length;n++){De[e[n]]=i}}function Ye(e,t){Me(e,function(e,n,i,r){i._w=i._w||{}
t(e,i._w,i,r)})}function Se(e,t,n){if(t!=null&&a(De,e)){De[e](t,n._a,n,e)}}var we=0
var ke=1
var Te=2
var be=3
var Oe=4
var We=5
var xe=6
var Ue=7
var Ge=8
function Pe(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}Z("M",["MM",2],"Mo",function(){return this.month()+1})
Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)})
Z("MMMM",0,0,function(e){return this.localeData().months(this,e)})
P("month","M")
ve("M",ie)
ve("MM",ie,K)
ve("MMM",function(e,t){return t.monthsShortRegex(e)})
ve("MMMM",function(e,t){return t.monthsRegex(e)})
Me(["M","MM"],function(e,t){t[ke]=M(e)-1})
Me(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict)
if(r!=null){t[ke]=r}else{f(n).invalidMonth=e}})
var Ce=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/
var Fe="January_February_March_April_May_June_July_August_September_October_November_December".split("_")
function He(e,t){return i(this._months)?this._months[e.month()]:this._months[Ce.test(t)?"format":"standalone"][e.month()]}var Ve="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
function Le(e,t){return i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ce.test(t)?"format":"standalone"][e.month()]}function Ie(e,t,n){var i,r,s
if(!this._monthsParse){this._monthsParse=[]
this._longMonthsParse=[]
this._shortMonthsParse=[]}for(i=0;i<12;i++){r=u([2e3,i])
if(n&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i")
this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")}if(!n&&!this._monthsParse[i]){s="^"+this.months(r,"")+"|^"+this.monthsShort(r,"")
this._monthsParse[i]=new RegExp(s.replace(".",""),"i")}if(n&&t==="MMMM"&&this._longMonthsParse[i].test(e)){return i}else if(n&&t==="MMM"&&this._shortMonthsParse[i].test(e)){return i}else if(!n&&this._monthsParse[i].test(e)){return i}}}function Ne(e,t){var n
if(!e.isValid()){return e}if(typeof t==="string"){t=e.localeData().monthsParse(t)
if(typeof t!=="number"){return e}}n=Math.min(e.date(),Pe(e.year(),t))
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)
return e}function Ae(e){if(e!=null){Ne(this,e)
t.updateOffset(this,true)
return this}else{return L(this,"Month")}}function Re(){return Pe(this.year(),this.month())}var Ee=me
function je(e){if(this._monthsParseExact){if(!a(this,"_monthsRegex")){$e.call(this)}if(e){return this._monthsShortStrictRegex}else{return this._monthsShortRegex}}else{return this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex}}var ze=me
function Ze(e){if(this._monthsParseExact){if(!a(this,"_monthsRegex")){$e.call(this)}if(e){return this._monthsStrictRegex}else{return this._monthsRegex}}else{return this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex}}function $e(){function e(e,t){return t.length-e.length}var t=[],n=[],i=[],r,s
for(r=0;r<12;r++){s=u([2e3,r])
t.push(this.monthsShort(s,""))
n.push(this.months(s,""))
i.push(this.months(s,""))
i.push(this.monthsShort(s,""))}t.sort(e)
n.sort(e)
i.sort(e)
for(r=0;r<12;r++){t[r]=pe(t[r])
n[r]=pe(n[r])
i[r]=pe(i[r])}this._monthsRegex=new RegExp("^("+i.join("|")+")","i")
this._monthsShortRegex=this._monthsRegex
this._monthsStrictRegex=new RegExp("^("+n.join("|")+")$","i")
this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")$","i")}function qe(e){var t
var n=e._a
if(n&&f(e).overflow===-2){t=n[ke]<0||n[ke]>11?ke:n[Te]<1||n[Te]>Pe(n[we],n[ke])?Te:n[be]<0||n[be]>24||n[be]===24&&(n[Oe]!==0||n[We]!==0||n[xe]!==0)?be:n[Oe]<0||n[Oe]>59?Oe:n[We]<0||n[We]>59?We:n[xe]<0||n[xe]>999?xe:-1
if(f(e)._overflowDayOfYear&&(t<we||t>Te)){t=Te}if(f(e)._overflowWeeks&&t===-1){t=Ue}if(f(e)._overflowWeekday&&t===-1){t=Ge}f(e).overflow=t}return e}function Je(e){if(t.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+e)}}function Be(e,t){var n=true
return o(function(){if(n){Je(e+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack)
n=false}return t.apply(this,arguments)},t)}var Qe={}
function Xe(e,t){if(!Qe[e]){Je(t)
Qe[e]=true}}t.suppressDeprecationWarnings=false
var Ke=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
var et=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
var tt=/Z|[+-]\d\d(?::?\d\d)?/
var nt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]]
var it=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]]
var rt=/^\/?Date\((\-?\d+)/i
function st(e){var t,n,i=e._i,r=Ke.exec(i)||et.exec(i),s,a,o,u
if(r){f(e).iso=true
for(t=0,n=nt.length;t<n;t++){if(nt[t][1].exec(r[1])){a=nt[t][0]
s=nt[t][2]!==false
break}}if(a==null){e._isValid=false
return}if(r[3]){for(t=0,n=it.length;t<n;t++){if(it[t][1].exec(r[3])){o=(r[2]||" ")+it[t][0]
break}}if(o==null){e._isValid=false
return}}if(!s&&o!=null){e._isValid=false
return}if(r[4]){if(tt.exec(r[4])){u="Z"}else{e._isValid=false
return}}e._f=a+(o||"")+(u||"")
Mt(e)}else{e._isValid=false}}function at(e){var n=rt.exec(e._i)
if(n!==null){e._d=new Date(+n[1])
return}st(e)
if(e._isValid===false){delete e._isValid
t.createFromInputFallback(e)}}t.createFromInputFallback=Be("moment construction falls back to js Date. This is "+"discouraged and will be removed in upcoming major "+"release. Please refer to "+"https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})
function ot(e,t,n,i,r,s,a){var o=new Date(e,t,n,i,r,s,a)
if(e<100&&e>=0&&isFinite(o.getFullYear())){o.setFullYear(e)}return o}function ut(e){var t=new Date(Date.UTC.apply(null,arguments))
if(e<100&&e>=0&&isFinite(t.getUTCFullYear())){t.setUTCFullYear(e)}return t}Z("Y",0,0,function(){var e=this.year()
return e<=9999?""+e:"+"+e})
Z(0,["YY",2],0,function(){return this.year()%100})
Z(0,["YYYY",4],0,"year")
Z(0,["YYYYY",5],0,"year")
Z(0,["YYYYYY",6,true],0,"year")
P("year","y")
ve("Y",fe)
ve("YY",ie,K)
ve("YYYY",oe,te)
ve("YYYYY",ue,ne)
ve("YYYYYY",ue,ne)
Me(["YYYYY","YYYYYY"],we)
Me("YYYY",function(e,n){n[we]=e.length===2?t.parseTwoDigitYear(e):M(e)})
Me("YY",function(e,n){n[we]=t.parseTwoDigitYear(e)})
Me("Y",function(e,t){t[we]=parseInt(e,10)})
function lt(e){return ft(e)?366:365}function ft(e){return e%4===0&&e%100!==0||e%400===0}t.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)}
var dt=V("FullYear",false)
function ht(){return ft(this.year())}function ct(e,t,n){var i=7+t-n,r=(7+ut(e,0,i).getUTCDay()-t)%7
return-r+i-1}function mt(e,t,n,i,r){var s=(7+n-i)%7,a=ct(e,i,r),o=1+7*(t-1)+s+a,u,l
if(o<=0){u=e-1
l=lt(u)+o}else if(o>lt(e)){u=e+1
l=o-lt(e)}else{u=e
l=o}return{year:u,dayOfYear:l}}function _t(e,t,n){var i=ct(e.year(),t,n),r=Math.floor((e.dayOfYear()-i-1)/7)+1,s,a
if(r<1){a=e.year()-1
s=r+vt(a,t,n)}else if(r>vt(e.year(),t,n)){s=r-vt(e.year(),t,n)
a=e.year()+1}else{a=e.year()
s=r}return{week:s,year:a}}function vt(e,t,n){var i=ct(e,t,n),r=ct(e+1,t,n)
return(lt(e)-i+r)/7}function yt(e,t,n){if(e!=null){return e}if(t!=null){return t}return n}function gt(e){var n=new Date(t.now())
if(e._useUTC){return[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]}return[n.getFullYear(),n.getMonth(),n.getDate()]}function pt(e){var t,n,i=[],r,s
if(e._d){return}r=gt(e)
if(e._w&&e._a[Te]==null&&e._a[ke]==null){Dt(e)}if(e._dayOfYear){s=yt(e._a[we],r[we])
if(e._dayOfYear>lt(s)){f(e)._overflowDayOfYear=true}n=ut(s,0,e._dayOfYear)
e._a[ke]=n.getUTCMonth()
e._a[Te]=n.getUTCDate()}for(t=0;t<3&&e._a[t]==null;++t){e._a[t]=i[t]=r[t]}for(;t<7;t++){e._a[t]=i[t]=e._a[t]==null?t===2?1:0:e._a[t]}if(e._a[be]===24&&e._a[Oe]===0&&e._a[We]===0&&e._a[xe]===0){e._nextDay=true
e._a[be]=0}e._d=(e._useUTC?ut:ot).apply(null,i)
if(e._tzm!=null){e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm)}if(e._nextDay){e._a[be]=24}}function Dt(e){var t,n,i,r,s,a,o,u
t=e._w
if(t.GG!=null||t.W!=null||t.E!=null){s=1
a=4
n=yt(t.GG,e._a[we],_t(Wt(),1,4).year)
i=yt(t.W,1)
r=yt(t.E,1)
if(r<1||r>7){u=true}}else{s=e._locale._week.dow
a=e._locale._week.doy
n=yt(t.gg,e._a[we],_t(Wt(),s,a).year)
i=yt(t.w,1)
if(t.d!=null){r=t.d
if(r<0||r>6){u=true}}else if(t.e!=null){r=t.e+s
if(t.e<0||t.e>6){u=true}}else{r=s}}if(i<1||i>vt(n,s,a)){f(e)._overflowWeeks=true}else if(u!=null){f(e)._overflowWeekday=true}else{o=mt(n,i,r,s,a)
e._a[we]=o.year
e._dayOfYear=o.dayOfYear}}t.ISO_8601=function(){}
function Mt(e){if(e._f===t.ISO_8601){st(e)
return}e._a=[]
f(e).empty=true
var n=""+e._i,i,r,s,a,o,u=n.length,l=0
s=Q(e._f,e._locale).match(R)||[]
for(i=0;i<s.length;i++){a=s[i]
r=(n.match(ye(a,e))||[])[0]
if(r){o=n.substr(0,n.indexOf(r))
if(o.length>0){f(e).unusedInput.push(o)}n=n.slice(n.indexOf(r)+r.length)
l+=r.length}if(z[a]){if(r){f(e).empty=false}else{f(e).unusedTokens.push(a)}Se(a,r,e)}else if(e._strict&&!r){f(e).unusedTokens.push(a)}}f(e).charsLeftOver=u-l
if(n.length>0){f(e).unusedInput.push(n)}if(f(e).bigHour===true&&e._a[be]<=12&&e._a[be]>0){f(e).bigHour=undefined}e._a[be]=Yt(e._locale,e._a[be],e._meridiem)
pt(e)
qe(e)}function Yt(e,t,n){var i
if(n==null){return t}if(e.meridiemHour!=null){return e.meridiemHour(t,n)}else if(e.isPM!=null){i=e.isPM(n)
if(i&&t<12){t+=12}if(!i&&t===12){t=0}return t}else{return t}}function St(e){var t,n,i,r,s
if(e._f.length===0){f(e).invalidFormat=true
e._d=new Date(NaN)
return}for(r=0;r<e._f.length;r++){s=0
t=v({},e)
if(e._useUTC!=null){t._useUTC=e._useUTC}t._f=e._f[r]
Mt(t)
if(!d(t)){continue}s+=f(t).charsLeftOver
s+=f(t).unusedTokens.length*10
f(t).score=s
if(i==null||s<i){i=s
n=t}}o(e,n||t)}function wt(e){if(e._d){return}var t=F(e._i)
e._a=s([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)})
pt(e)}function kt(e){var t=new g(qe(Tt(e)))
if(t._nextDay){t.add(1,"d")
t._nextDay=undefined}return t}function Tt(e){var t=e._i,n=e._f
e._locale=e._locale||U(e._l)
if(t===null||n===undefined&&t===""){return h({nullInput:true})}if(typeof t==="string"){e._i=t=e._locale.preparse(t)}if(p(t)){return new g(qe(t))}else if(i(n)){St(e)}else if(n){Mt(e)}else if(r(t)){e._d=t}else{bt(e)}if(!d(e)){e._d=null}return e}function bt(e){var n=e._i
if(n===undefined){e._d=new Date(t.now())}else if(r(n)){e._d=new Date(+n)}else if(typeof n==="string"){at(e)}else if(i(n)){e._a=s(n.slice(0),function(e){return parseInt(e,10)})
pt(e)}else if(typeof n==="object"){wt(e)}else if(typeof n==="number"){e._d=new Date(n)}else{t.createFromInputFallback(e)}}function Ot(e,t,n,i,r){var s={}
if(typeof n==="boolean"){i=n
n=undefined}s._isAMomentObject=true
s._useUTC=s._isUTC=r
s._l=n
s._i=e
s._f=t
s._strict=i
return kt(s)}function Wt(e,t,n,i){return Ot(e,t,n,i,false)}var xt=Be("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var e=Wt.apply(null,arguments)
if(this.isValid()&&e.isValid()){return e<this?this:e}else{return h()}})
var Ut=Be("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var e=Wt.apply(null,arguments)
if(this.isValid()&&e.isValid()){return e>this?this:e}else{return h()}})
function Gt(e,t){var n,r
if(t.length===1&&i(t[0])){t=t[0]}if(!t.length){return Wt()}n=t[0]
for(r=1;r<t.length;++r){if(!t[r].isValid()||t[r][e](n)){n=t[r]}}return n}function Pt(){var e=[].slice.call(arguments,0)
return Gt("isBefore",e)}function Ct(){var e=[].slice.call(arguments,0)
return Gt("isAfter",e)}var Ft=function(){return Date.now?Date.now():+new Date}
function Ht(e){var t=F(e),n=t.year||0,i=t.quarter||0,r=t.month||0,s=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,f=t.millisecond||0
this._milliseconds=+f+l*1e3+u*6e4+o*36e5
this._days=+a+s*7
this._months=+r+i*3+n*12
this._data={}
this._locale=U()
this._bubble()}function Vt(e){return e instanceof Ht}function Lt(e,t){Z(e,0,0,function(){var e=this.utcOffset()
var n="+"
if(e<0){e=-e
n="-"}return n+A(~~(e/60),2)+t+A(~~e%60,2)})}Lt("Z",":")
Lt("ZZ","")
ve("Z",he)
ve("ZZ",he)
Me(["Z","ZZ"],function(e,t,n){n._useUTC=true
n._tzm=Nt(he,e)})
var It=/([\+\-]|\d\d)/gi
function Nt(e,t){var n=(t||"").match(e)||[]
var i=n[n.length-1]||[]
var r=(i+"").match(It)||["-",0,0]
var s=+(r[1]*60)+M(r[2])
return r[0]==="+"?s:-s}function At(e,n){var i,s
if(n._isUTC){i=n.clone()
s=(p(e)||r(e)?+e:+Wt(e))-+i
i._d.setTime(+i._d+s)
t.updateOffset(i,false)
return i}else{return Wt(e).local()}}function Rt(e){return-Math.round(e._d.getTimezoneOffset()/15)*15}t.updateOffset=function(){}
function Et(e,n){var i=this._offset||0,r
if(!this.isValid()){return e!=null?this:NaN}if(e!=null){if(typeof e==="string"){e=Nt(he,e)}else if(Math.abs(e)<16){e=e*60}if(!this._isUTC&&n){r=Rt(this)}this._offset=e
this._isUTC=true
if(r!=null){this.add(r,"m")}if(i!==e){if(!n||this._changeInProgress){un(this,nn(e-i,"m"),1,false)}else if(!this._changeInProgress){this._changeInProgress=true
t.updateOffset(this,true)
this._changeInProgress=null}}return this}else{return this._isUTC?i:Rt(this)}}function jt(e,t){if(e!=null){if(typeof e!=="string"){e=-e}this.utcOffset(e,t)
return this}else{return-this.utcOffset()}}function zt(e){return this.utcOffset(0,e)}function Zt(e){if(this._isUTC){this.utcOffset(0,e)
this._isUTC=false
if(e){this.subtract(Rt(this),"m")}}return this}function $t(){if(this._tzm){this.utcOffset(this._tzm)}else if(typeof this._i==="string"){this.utcOffset(Nt(de,this._i))}return this}function qt(e){if(!this.isValid()){return false}e=e?Wt(e).utcOffset():0
return(this.utcOffset()-e)%60===0}function Jt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bt(){if(!c(this._isDSTShifted)){return this._isDSTShifted}var e={}
v(e,this)
e=Tt(e)
if(e._a){var t=e._isUTC?u(e._a):Wt(e._a)
this._isDSTShifted=this.isValid()&&Y(e._a,t.toArray())>0}else{this._isDSTShifted=false}return this._isDSTShifted}function Qt(){return this.isValid()?!this._isUTC:false}function Xt(){return this.isValid()?this._isUTC:false}function Kt(){return this.isValid()?this._isUTC&&this._offset===0:false}var en=/(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
var tn=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/
function nn(e,t){var n=e,i=null,r,s,o
if(Vt(e)){n={ms:e._milliseconds,d:e._days,M:e._months}}else if(typeof e==="number"){n={}
if(t){n[t]=e}else{n.milliseconds=e}}else if(!!(i=en.exec(e))){r=i[1]==="-"?-1:1
n={y:0,d:M(i[Te])*r,h:M(i[be])*r,m:M(i[Oe])*r,s:M(i[We])*r,ms:M(i[xe])*r}}else if(!!(i=tn.exec(e))){r=i[1]==="-"?-1:1
n={y:rn(i[2],r),M:rn(i[3],r),d:rn(i[4],r),h:rn(i[5],r),m:rn(i[6],r),s:rn(i[7],r),w:rn(i[8],r)}}else if(n==null){n={}}else if(typeof n==="object"&&("from"in n||"to"in n)){o=an(Wt(n.from),Wt(n.to))
n={}
n.ms=o.milliseconds
n.M=o.months}s=new Ht(n)
if(Vt(e)&&a(e,"_locale")){s._locale=e._locale}return s}nn.fn=Ht.prototype
function rn(e,t){var n=e&&parseFloat(e.replace(",","."))
return(isNaN(n)?0:n)*t}function sn(e,t){var n={milliseconds:0,months:0}
n.months=t.month()-e.month()+(t.year()-e.year())*12
if(e.clone().add(n.months,"M").isAfter(t)){--n.months}n.milliseconds=+t-+e.clone().add(n.months,"M")
return n}function an(e,t){var n
if(!(e.isValid()&&t.isValid())){return{milliseconds:0,months:0}}t=At(t,e)
if(e.isBefore(t)){n=sn(e,t)}else{n=sn(t,e)
n.milliseconds=-n.milliseconds
n.months=-n.months}return n}function on(e,t){return function(n,i){var r,s
if(i!==null&&!isNaN(+i)){Xe(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period).")
s=n
n=i
i=s}n=typeof n==="string"?+n:n
r=nn(n,i)
un(this,r,e)
return this}}function un(e,n,i,r){var s=n._milliseconds,a=n._days,o=n._months
if(!e.isValid()){return}r=r==null?true:r
if(s){e._d.setTime(+e._d+s*i)}if(a){I(e,"Date",L(e,"Date")+a*i)}if(o){Ne(e,L(e,"Month")+o*i)}if(r){t.updateOffset(e,a||o)}}var ln=on(1,"add")
var fn=on(-1,"subtract")
function dn(e,t){var n=e||Wt(),i=At(n,this).startOf("day"),r=this.diff(i,"days",true),s=r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"
var a=t&&(H(t[s])?t[s]():t[s])
return this.format(a||this.localeData().calendar(s,this,Wt(n)))}function hn(){return new g(this)}function cn(e,t){var n=p(e)?e:Wt(e)
if(!(this.isValid()&&n.isValid())){return false}t=C(!c(t)?t:"millisecond")
if(t==="millisecond"){return+this>+n}else{return+n<+this.clone().startOf(t)}}function mn(e,t){var n=p(e)?e:Wt(e)
if(!(this.isValid()&&n.isValid())){return false}t=C(!c(t)?t:"millisecond")
if(t==="millisecond"){return+this<+n}else{return+this.clone().endOf(t)<+n}}function _n(e,t,n){return this.isAfter(e,n)&&this.isBefore(t,n)}function vn(e,t){var n=p(e)?e:Wt(e),i
if(!(this.isValid()&&n.isValid())){return false}t=C(t||"millisecond")
if(t==="millisecond"){return+this===+n}else{i=+n
return+this.clone().startOf(t)<=i&&i<=+this.clone().endOf(t)}}function yn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function gn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function pn(e,t,n){var i,r,s,a
if(!this.isValid()){return NaN}i=At(e,this)
if(!i.isValid()){return NaN}r=(i.utcOffset()-this.utcOffset())*6e4
t=C(t)
if(t==="year"||t==="month"||t==="quarter"){a=Dn(this,i)
if(t==="quarter"){a=a/3}else if(t==="year"){a=a/12}}else{s=this-i
a=t==="second"?s/1e3:t==="minute"?s/6e4:t==="hour"?s/36e5:t==="day"?(s-r)/864e5:t==="week"?(s-r)/6048e5:s}return n?a:D(a)}function Dn(e,t){var n=(t.year()-e.year())*12+(t.month()-e.month()),i=e.clone().add(n,"months"),r,s
if(t-i<0){r=e.clone().add(n-1,"months")
s=(t-i)/(i-r)}else{r=e.clone().add(n+1,"months")
s=(t-i)/(r-i)}return-(n+s)}t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ"
function Mn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Yn(){var e=this.clone().utc()
if(0<e.year()&&e.year()<=9999){if(H(Date.prototype.toISOString)){return this.toDate().toISOString()}else{return B(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}else{return B(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}function Sn(e){var n=B(this,e||t.defaultFormat)
return this.localeData().postformat(n)}function wn(e,t){if(this.isValid()&&(p(e)&&e.isValid()||Wt(e).isValid())){return nn({to:this,from:e}).locale(this.locale()).humanize(!t)}else{return this.localeData().invalidDate()}}function kn(e){return this.from(Wt(),e)}function Tn(e,t){if(this.isValid()&&(p(e)&&e.isValid()||Wt(e).isValid())){return nn({from:this,to:e}).locale(this.locale()).humanize(!t)}else{return this.localeData().invalidDate()}}function bn(e){return this.to(Wt(),e)}function On(e){var t
if(e===undefined){return this._locale._abbr}else{t=U(e)
if(t!=null){this._locale=t}return this}}var Wn=Be("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){if(e===undefined){return this.localeData()}else{return this.locale(e)}})
function xn(){return this._locale}function Un(e){e=C(e)
switch(e){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}if(e==="week"){this.weekday(0)}if(e==="isoWeek"){this.isoWeekday(1)}if(e==="quarter"){this.month(Math.floor(this.month()/3)*3)}return this}function Gn(e){e=C(e)
if(e===undefined||e==="millisecond"){return this}return this.startOf(e).add(1,e==="isoWeek"?"week":e).subtract(1,"ms")}function Pn(){return+this._d-(this._offset||0)*6e4}function Cn(){return Math.floor(+this/1e3)}function Fn(){return this._offset?new Date(+this):this._d}function Hn(){var e=this
return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Vn(){var e=this
return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ln(){return this.isValid()?this.toISOString():"null"}function In(){return d(this)}function Nn(){return o({},f(this))}function An(){return f(this).overflow}function Rn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Z(0,["gg",2],0,function(){return this.weekYear()%100})
Z(0,["GG",2],0,function(){return this.isoWeekYear()%100})
function En(e,t){Z(0,[e,e.length],0,t)}En("gggg","weekYear")
En("ggggg","weekYear")
En("GGGG","isoWeekYear")
En("GGGGG","isoWeekYear")
P("weekYear","gg")
P("isoWeekYear","GG")
ve("G",fe)
ve("g",fe)
ve("GG",ie,K)
ve("gg",ie,K)
ve("GGGG",oe,te)
ve("gggg",oe,te)
ve("GGGGG",ue,ne)
ve("ggggg",ue,ne)
Ye(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=M(e)})
Ye(["gg","GG"],function(e,n,i,r){n[r]=t.parseTwoDigitYear(e)})
function jn(e){return qn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zn(e){return qn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Zn(){return vt(this.year(),1,4)}function $n(){var e=this.localeData()._week
return vt(this.year(),e.dow,e.doy)}function qn(e,t,n,i,r){var s
if(e==null){return _t(this,i,r).year}else{s=vt(e,i,r)
if(t>s){t=s}return Jn.call(this,e,t,n,i,r)}}function Jn(e,t,n,i,r){var s=mt(e,t,n,i,r),a=ut(s.year,0,s.dayOfYear)
this.year(a.getUTCFullYear())
this.month(a.getUTCMonth())
this.date(a.getUTCDate())
return this}Z("Q",0,"Qo","quarter")
P("quarter","Q")
ve("Q",X)
Me("Q",function(e,t){t[ke]=(M(e)-1)*3})
function Bn(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Z("w",["ww",2],"wo","week")
Z("W",["WW",2],"Wo","isoWeek")
P("week","w")
P("isoWeek","W")
ve("w",ie)
ve("ww",ie,K)
ve("W",ie)
ve("WW",ie,K)
Ye(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=M(e)})
function Qn(e){return _t(e,this._week.dow,this._week.doy).week}var Xn={dow:0,doy:6}
function Kn(){return this._week.dow}function ei(){return this._week.doy}function ti(e){var t=this.localeData().week(this)
return e==null?t:this.add((e-t)*7,"d")}function ni(e){var t=_t(this,1,4).week
return e==null?t:this.add((e-t)*7,"d")}Z("D",["DD",2],"Do","date")
P("date","D")
ve("D",ie)
ve("DD",ie,K)
ve("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient})
Me(["D","DD"],Te)
Me("Do",function(e,t){t[Te]=M(e.match(ie)[0],10)})
var ii=V("Date",true)
Z("d",0,"do","day")
Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)})
Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)})
Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)})
Z("e",0,0,"weekday")
Z("E",0,0,"isoWeekday")
P("day","d")
P("weekday","e")
P("isoWeekday","E")
ve("d",ie)
ve("e",ie)
ve("E",ie)
ve("dd",me)
ve("ddd",me)
ve("dddd",me)
Ye(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict)
if(r!=null){t.d=r}else{f(n).invalidWeekday=e}})
Ye(["d","e","E"],function(e,t,n,i){t[i]=M(e)})
function ri(e,t){if(typeof e!=="string"){return e}if(!isNaN(e)){return parseInt(e,10)}e=t.weekdaysParse(e)
if(typeof e==="number"){return e}return null}var si="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
function ai(e,t){return i(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]}var oi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
function ui(e){return this._weekdaysShort[e.day()]}var li="Su_Mo_Tu_We_Th_Fr_Sa".split("_")
function fi(e){return this._weekdaysMin[e.day()]}function di(e,t,n){var i,r,s
if(!this._weekdaysParse){this._weekdaysParse=[]
this._minWeekdaysParse=[]
this._shortWeekdaysParse=[]
this._fullWeekdaysParse=[]}for(i=0;i<7;i++){r=Wt([2e3,1]).day(i)
if(n&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".",".?")+"$","i")
this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".",".?")+"$","i")
this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".",".?")+"$","i")}if(!this._weekdaysParse[i]){s="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,"")
this._weekdaysParse[i]=new RegExp(s.replace(".",""),"i")}if(n&&t==="dddd"&&this._fullWeekdaysParse[i].test(e)){return i}else if(n&&t==="ddd"&&this._shortWeekdaysParse[i].test(e)){return i}else if(n&&t==="dd"&&this._minWeekdaysParse[i].test(e)){return i}else if(!n&&this._weekdaysParse[i].test(e)){return i}}}function hi(e){if(!this.isValid()){return e!=null?this:NaN}var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
if(e!=null){e=ri(e,this.localeData())
return this.add(e-t,"d")}else{return t}}function ci(e){if(!this.isValid()){return e!=null?this:NaN}var t=(this.day()+7-this.localeData()._week.dow)%7
return e==null?t:this.add(e-t,"d")}function mi(e){if(!this.isValid()){return e!=null?this:NaN}return e==null?this.day()||7:this.day(this.day()%7?e:e-7)}Z("DDD",["DDDD",3],"DDDo","dayOfYear")
P("dayOfYear","DDD")
ve("DDD",ae)
ve("DDDD",ee)
Me(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)})
function _i(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return e==null?t:this.add(e-t,"d")}function vi(){return this.hours()%12||12}Z("H",["HH",2],0,"hour")
Z("h",["hh",2],0,vi)
Z("hmm",0,0,function(){return""+vi.apply(this)+A(this.minutes(),2)})
Z("hmmss",0,0,function(){return""+vi.apply(this)+A(this.minutes(),2)+A(this.seconds(),2)})
Z("Hmm",0,0,function(){return""+this.hours()+A(this.minutes(),2)})
Z("Hmmss",0,0,function(){return""+this.hours()+A(this.minutes(),2)+A(this.seconds(),2)})
function yi(e,t){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}yi("a",true)
yi("A",false)
P("hour","h")
function gi(e,t){return t._meridiemParse}ve("a",gi)
ve("A",gi)
ve("H",ie)
ve("h",ie)
ve("HH",ie,K)
ve("hh",ie,K)
ve("hmm",re)
ve("hmmss",se)
ve("Hmm",re)
ve("Hmmss",se)
Me(["H","HH"],be)
Me(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e)
n._meridiem=e})
Me(["h","hh"],function(e,t,n){t[be]=M(e)
f(n).bigHour=true})
Me("hmm",function(e,t,n){var i=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i))
f(n).bigHour=true})
Me("hmmss",function(e,t,n){var i=e.length-4
var r=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i,2))
t[We]=M(e.substr(r))
f(n).bigHour=true})
Me("Hmm",function(e,t,n){var i=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i))})
Me("Hmmss",function(e,t,n){var i=e.length-4
var r=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i,2))
t[We]=M(e.substr(r))})
function pi(e){return(e+"").toLowerCase().charAt(0)==="p"}var Di=/[ap]\.?m?\.?/i
function Mi(e,t,n){if(e>11){return n?"pm":"PM"}else{return n?"am":"AM"}}var Yi=V("Hours",true)
Z("m",["mm",2],0,"minute")
P("minute","m")
ve("m",ie)
ve("mm",ie,K)
Me(["m","mm"],Oe)
var Si=V("Minutes",false)
Z("s",["ss",2],0,"second")
P("second","s")
ve("s",ie)
ve("ss",ie,K)
Me(["s","ss"],We)
var wi=V("Seconds",false)
Z("S",0,0,function(){return~~(this.millisecond()/100)})
Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)})
Z(0,["SSS",3],0,"millisecond")
Z(0,["SSSS",4],0,function(){return this.millisecond()*10})
Z(0,["SSSSS",5],0,function(){return this.millisecond()*100})
Z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3})
Z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4})
Z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5})
Z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6})
P("millisecond","ms")
ve("S",ae,X)
ve("SS",ae,K)
ve("SSS",ae,ee)
var ki
for(ki="SSSS";ki.length<=9;ki+="S"){ve(ki,le)}function Ti(e,t){t[xe]=M(("0."+e)*1e3)}for(ki="S";ki.length<=9;ki+="S"){Me(ki,Ti)}var bi=V("Milliseconds",false)
Z("z",0,0,"zoneAbbr")
Z("zz",0,0,"zoneName")
function Oi(){return this._isUTC?"UTC":""}function Wi(){return this._isUTC?"Coordinated Universal Time":""}var xi=g.prototype
xi.add=ln
xi.calendar=dn
xi.clone=hn
xi.diff=pn
xi.endOf=Gn
xi.format=Sn
xi.from=wn
xi.fromNow=kn
xi.to=Tn
xi.toNow=bn
xi.get=N
xi.invalidAt=An
xi.isAfter=cn
xi.isBefore=mn
xi.isBetween=_n
xi.isSame=vn
xi.isSameOrAfter=yn
xi.isSameOrBefore=gn
xi.isValid=In
xi.lang=Wn
xi.locale=On
xi.localeData=xn
xi.max=Ut
xi.min=xt
xi.parsingFlags=Nn
xi.set=N
xi.startOf=Un
xi.subtract=fn
xi.toArray=Hn
xi.toObject=Vn
xi.toDate=Fn
xi.toISOString=Yn
xi.toJSON=Ln
xi.toString=Mn
xi.unix=Cn
xi.valueOf=Pn
xi.creationData=Rn
xi.year=dt
xi.isLeapYear=ht
xi.weekYear=jn
xi.isoWeekYear=zn
xi.quarter=xi.quarters=Bn
xi.month=Ae
xi.daysInMonth=Re
xi.week=xi.weeks=ti
xi.isoWeek=xi.isoWeeks=ni
xi.weeksInYear=$n
xi.isoWeeksInYear=Zn
xi.date=ii
xi.day=xi.days=hi
xi.weekday=ci
xi.isoWeekday=mi
xi.dayOfYear=_i
xi.hour=xi.hours=Yi
xi.minute=xi.minutes=Si
xi.second=xi.seconds=wi
xi.millisecond=xi.milliseconds=bi
xi.utcOffset=Et
xi.utc=zt
xi.local=Zt
xi.parseZone=$t
xi.hasAlignedHourOffset=qt
xi.isDST=Jt
xi.isDSTShifted=Bt
xi.isLocal=Qt
xi.isUtcOffset=Xt
xi.isUtc=Kt
xi.isUTC=Kt
xi.zoneAbbr=Oi
xi.zoneName=Wi
xi.dates=Be("dates accessor is deprecated. Use date instead.",ii)
xi.months=Be("months accessor is deprecated. Use month instead",Ae)
xi.years=Be("years accessor is deprecated. Use year instead",dt)
xi.zone=Be("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",jt)
var Ui=xi
function Gi(e){return Wt(e*1e3)}function Pi(){return Wt.apply(null,arguments).parseZone()}var Ci={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"}
function Fi(e,t,n){var i=this._calendar[e]
return H(i)?i.call(t,n):i}var Hi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"}
function Vi(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
if(t||!n){return t}this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)})
return this._longDateFormat[e]}var Li="Invalid date"
function Ii(){return this._invalidDate}var Ni="%d"
var Ai=/\d{1,2}/
function Ri(e){return this._ordinal.replace("%d",e)}function Ei(e){return e}var ji={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}
function zi(e,t,n,i){var r=this._relativeTime[n]
return H(r)?r(e,t,n,i):r.replace(/%d/i,e)}function Zi(e,t){var n=this._relativeTime[e>0?"future":"past"]
return H(n)?n(t):n.replace(/%s/i,t)}function $i(e){var t,n
for(n in e){t=e[n]
if(H(t)){this[n]=t}else{this["_"+n]=t}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}var qi=S.prototype
qi._calendar=Ci
qi.calendar=Fi
qi._longDateFormat=Hi
qi.longDateFormat=Vi
qi._invalidDate=Li
qi.invalidDate=Ii
qi._ordinal=Ni
qi.ordinal=Ri
qi._ordinalParse=Ai
qi.preparse=Ei
qi.postformat=Ei
qi._relativeTime=ji
qi.relativeTime=zi
qi.pastFuture=Zi
qi.set=$i
qi.months=He
qi._months=Fe
qi.monthsShort=Le
qi._monthsShort=Ve
qi.monthsParse=Ie
qi._monthsRegex=ze
qi.monthsRegex=Ze
qi._monthsShortRegex=Ee
qi.monthsShortRegex=je
qi.week=Qn
qi._week=Xn
qi.firstDayOfYear=ei
qi.firstDayOfWeek=Kn
qi.weekdays=ai
qi._weekdays=si
qi.weekdaysMin=fi
qi._weekdaysMin=li
qi.weekdaysShort=ui
qi._weekdaysShort=oi
qi.weekdaysParse=di
qi.isPM=pi
qi._meridiemParse=Di
qi.meridiem=Mi
function Ji(e,t,n,i){var r=U()
var s=u().set(i,t)
return r[n](s,e)}function Bi(e,t,n,i,r){if(typeof e==="number"){t=e
e=undefined}e=e||""
if(t!=null){return Ji(e,t,n,r)}var s
var a=[]
for(s=0;s<i;s++){a[s]=Ji(e,s,n,r)}return a}function Qi(e,t){return Bi(e,t,"months",12,"month")}function Xi(e,t){return Bi(e,t,"monthsShort",12,"month")}function Ki(e,t){return Bi(e,t,"weekdays",7,"day")}function er(e,t){return Bi(e,t,"weekdaysShort",7,"day")}function tr(e,t){return Bi(e,t,"weekdaysMin",7,"day")}W("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=M(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"
return e+n}})
t.lang=Be("moment.lang is deprecated. Use moment.locale instead.",W)
t.langData=Be("moment.langData is deprecated. Use moment.localeData instead.",U)
var nr=Math.abs
function ir(){var e=this._data
this._milliseconds=nr(this._milliseconds)
this._days=nr(this._days)
this._months=nr(this._months)
e.milliseconds=nr(e.milliseconds)
e.seconds=nr(e.seconds)
e.minutes=nr(e.minutes)
e.hours=nr(e.hours)
e.months=nr(e.months)
e.years=nr(e.years)
return this}function rr(e,t,n,i){var r=nn(t,n)
e._milliseconds+=i*r._milliseconds
e._days+=i*r._days
e._months+=i*r._months
return e._bubble()}function sr(e,t){return rr(this,e,t,1)}function ar(e,t){return rr(this,e,t,-1)}function or(e){if(e<0){return Math.floor(e)}else{return Math.ceil(e)}}function ur(){var e=this._milliseconds
var t=this._days
var n=this._months
var i=this._data
var r,s,a,o,u
if(!(e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0)){e+=or(fr(n)+t)*864e5
t=0
n=0}i.milliseconds=e%1e3
r=D(e/1e3)
i.seconds=r%60
s=D(r/60)
i.minutes=s%60
a=D(s/60)
i.hours=a%24
t+=D(a/24)
u=D(lr(t))
n+=u
t-=or(fr(u))
o=D(n/12)
n%=12
i.days=t
i.months=n
i.years=o
return this}function lr(e){return e*4800/146097}function fr(e){return e*146097/4800}function dr(e){var t
var n
var i=this._milliseconds
e=C(e)
if(e==="month"||e==="year"){t=this._days+i/864e5
n=this._months+lr(t)
return e==="month"?n:n/12}else{t=this._days+Math.round(fr(this._months))
switch(e){case"week":return t/7+i/6048e5
case"day":return t+i/864e5
case"hour":return t*24+i/36e5
case"minute":return t*1440+i/6e4
case"second":return t*86400+i/1e3
case"millisecond":return Math.floor(t*864e5)+i
default:throw new Error("Unknown unit "+e)}}}function hr(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+M(this._months/12)*31536e6}function cr(e){return function(){return this.as(e)}}var mr=cr("ms")
var _r=cr("s")
var vr=cr("m")
var yr=cr("h")
var gr=cr("d")
var pr=cr("w")
var Dr=cr("M")
var Mr=cr("y")
function Yr(e){e=C(e)
return this[e+"s"]()}function Sr(e){return function(){return this._data[e]}}var wr=Sr("milliseconds")
var kr=Sr("seconds")
var Tr=Sr("minutes")
var br=Sr("hours")
var Or=Sr("days")
var Wr=Sr("months")
var xr=Sr("years")
function Ur(){return D(this.days()/7)}var Gr=Math.round
var Pr={s:45,m:45,h:22,d:26,M:11}
function Cr(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function Fr(e,t,n){var i=nn(e).abs()
var r=Gr(i.as("s"))
var s=Gr(i.as("m"))
var a=Gr(i.as("h"))
var o=Gr(i.as("d"))
var u=Gr(i.as("M"))
var l=Gr(i.as("y"))
var f=r<Pr.s&&["s",r]||s<=1&&["m"]||s<Pr.m&&["mm",s]||a<=1&&["h"]||a<Pr.h&&["hh",a]||o<=1&&["d"]||o<Pr.d&&["dd",o]||u<=1&&["M"]||u<Pr.M&&["MM",u]||l<=1&&["y"]||["yy",l]
f[2]=t
f[3]=+e>0
f[4]=n
return Cr.apply(null,f)}function Hr(e,t){if(Pr[e]===undefined){return false}if(t===undefined){return Pr[e]}Pr[e]=t
return true}function Vr(e){var t=this.localeData()
var n=Fr(this,!e,t)
if(e){n=t.pastFuture(+this,n)}return t.postformat(n)}var Lr=Math.abs
function Ir(){var e=Lr(this._milliseconds)/1e3
var t=Lr(this._days)
var n=Lr(this._months)
var i,r,s
i=D(e/60)
r=D(i/60)
e%=60
i%=60
s=D(n/12)
n%=12
var a=s
var o=n
var u=t
var l=r
var f=i
var d=e
var h=this.asSeconds()
if(!h){return"P0D"}return(h<0?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(l||f||d?"T":"")+(l?l+"H":"")+(f?f+"M":"")+(d?d+"S":"")}var Nr=Ht.prototype
Nr.abs=ir
Nr.add=sr
Nr.subtract=ar
Nr.as=dr
Nr.asMilliseconds=mr
Nr.asSeconds=_r
Nr.asMinutes=vr
Nr.asHours=yr
Nr.asDays=gr
Nr.asWeeks=pr
Nr.asMonths=Dr
Nr.asYears=Mr
Nr.valueOf=hr
Nr._bubble=ur
Nr.get=Yr
Nr.milliseconds=wr
Nr.seconds=kr
Nr.minutes=Tr
Nr.hours=br
Nr.days=Or
Nr.weeks=Ur
Nr.months=Wr
Nr.years=xr
Nr.humanize=Vr
Nr.toISOString=Ir
Nr.toString=Ir
Nr.toJSON=Ir
Nr.locale=On
Nr.localeData=xn
Nr.toIsoString=Be("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ir)
Nr.lang=Wn
Z("X",0,0,"unix")
Z("x",0,0,"valueOf")
ve("x",fe)
ve("X",ce)
Me("X",function(e,t,n){n._d=new Date(parseFloat(e,10)*1e3)})
Me("x",function(e,t,n){n._d=new Date(M(e))})
t.version="2.11.1"
n(Wt)
t.fn=Ui
t.min=Pt
t.max=Ct
t.now=Ft
t.utc=u
t.unix=Gi
t.months=Qi
t.isDate=r
t.locale=W
t.invalid=h
t.duration=nn
t.isMoment=p
t.weekdays=Ki
t.parseZone=Pi
t.localeData=U
t.isDuration=Vt
t.monthsShort=Xi
t.weekdaysMin=tr
t.defineLocale=x
t.weekdaysShort=er
t.normalizeUnits=C
t.relativeTimeThreshold=Hr
t.prototype=Ui
var Ar=t
return Ar})

this.moment = moment;
require("./locale/en.js");
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/locale/en.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../moment.js");

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/moment-package.js.map 