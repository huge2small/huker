KAdefine("third_party/javascript-khansrc/react-router/packages/react-router-dom/umd/react-router-dom.js", function(require, module, exports) {
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports,require("react")):typeof define==="function"&&define.amd?define(["exports","react"],t):t(e.ReactRouterDOM={},e.React)})(this,function(e,t){"use strict"
t=t&&t.hasOwnProperty("default")?t["default"]:t
var r=function(){}
{var n=function e(t,r){var n=arguments.length
r=new Array(n>2?n-2:0)
for(var o=2;o<n;o++){r[o-2]=arguments[o]}var i=0
var a="Warning: "+t.replace(/%s/g,function(){return r[i++]})
if(typeof console!=="undefined"){console.error(a)}try{throw new Error(a)}catch(e){}}
r=function(e,t,r){var o=arguments.length
r=new Array(o>2?o-2:0)
for(var i=2;i<o;i++){r[i-2]=arguments[i]}if(t===undefined){throw new Error("`warning(condition, format, ...args)` requires a warning "+"message argument")}if(!e){n.apply(null,[t].concat(r))}}}var o=r
function i(e,t){return t={exports:{}},e(t,t.exports),t.exports}var a=Object.getOwnPropertySymbols
var u=Object.prototype.hasOwnProperty
var c=Object.prototype.propertyIsEnumerable
function s(e){if(e===null||e===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(e)}function f(){try{if(!Object.assign){return false}var e=new String("abc")
e[5]="de"
if(Object.getOwnPropertyNames(e)[0]==="5"){return false}var t={}
for(var r=0;r<10;r++){t["_"+String.fromCharCode(r)]=r}var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if(n.join("")!=="0123456789"){return false}var o={}
"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e})
if(Object.keys(Object.assign({},o)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(e){return false}}var l=f()?Object.assign:function(e,t){var r
var n=s(e)
var o
for(var i=1;i<arguments.length;i++){r=Object(arguments[i])
for(var f in r){if(u.call(r,f)){n[f]=r[f]}}if(a){o=a(r)
for(var l=0;l<o.length;l++){if(c.call(r,o[l])){n[o[l]]=r[o[l]]}}}}return n}
var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
var h=p
var v=function(){}
{var d=h
var y={}
v=function(e){var t="Warning: "+e
if(typeof console!=="undefined"){console.error(t)}try{throw new Error(t)}catch(e){}}}function m(e,t,r,n,o){{for(var i in e){if(e.hasOwnProperty(i)){var a
try{if(typeof e[i]!=="function"){var u=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; "+"it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.")
u.name="Invariant Violation"
throw u}a=e[i](t,i,n,r,null,d)}catch(e){a=e}if(a&&!(a instanceof Error)){v((n||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker "+"function must return `null` or an `Error` but returned a "+typeof a+". "+"You may have forgotten to pass an argument to the type checker "+"creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and "+"shape all require an argument).")}if(a instanceof Error&&!(a.message in y)){y[a.message]=true
var c=o?o():""
v("Failed "+r+" type: "+a.message+(c!=null?c:""))}}}}}var b=m
var g=function(){}
{g=function(e){var t="Warning: "+e
if(typeof console!=="undefined"){console.error(t)}try{throw new Error(t)}catch(e){}}}function w(){return null}var O=function(e,t){var r=typeof Symbol==="function"&&Symbol.iterator
var n="@@iterator"
function o(e){var t=e&&(r&&e[r]||e[n])
if(typeof t==="function"){return t}}var i="<<anonymous>>"
var a={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(),arrayOf:v,element:d(),instanceOf:y,node:j(),objectOf:O,oneOf:m,oneOfType:x,shape:R,exact:P}
function u(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function c(e){this.message=e
this.stack=""}c.prototype=Error.prototype
function s(e){{var r={}
var n=0}function o(o,a,u,s,f,l,p){s=s||i
l=l||u
if(p!==h){if(t){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use `PropTypes.checkPropTypes()` to call them. "+"Read more at http://fb.me/use-check-prop-types")
v.name="Invariant Violation"
throw v}else if(typeof console!=="undefined"){var d=s+":"+u
if(!r[d]&&n<3){g("You are manually calling a React.PropTypes validation "+"function for the `"+l+"` prop on `"+s+"`. This is deprecated "+"and will throw in the standalone `prop-types` package. "+"You may be seeing this warning due to a third-party PropTypes "+"library. See https://fb.me/react-warning-dont-call-proptypes "+"for details.")
r[d]=true
n++}}}if(a[u]==null){if(o){if(a[u]===null){return new c("The "+f+" `"+l+"` is marked as required "+("in `"+s+"`, but its value is `null`."))}return new c("The "+f+" `"+l+"` is marked as required in "+("`"+s+"`, but its value is `undefined`."))}return null}else{return e(a,u,s,f,l)}}var a=o.bind(null,false)
a.isRequired=o.bind(null,true)
return a}function f(e){function t(t,r,n,o,i,a){var u=t[r]
var s=S(u)
if(s!==e){var f=k(u)
return new c("Invalid "+o+" `"+i+"` of type "+("`"+f+"` supplied to `"+n+"`, expected ")+("`"+e+"`."))}return null}return s(t)}function p(){return s(w)}function v(e){function t(t,r,n,o,i){if(typeof e!=="function"){return new c("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.")}var a=t[r]
if(!Array.isArray(a)){var u=S(a)
return new c("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an array."))}for(var s=0;s<a.length;s++){var f=e(a,s,n,o,i+"["+s+"]",h)
if(f instanceof Error){return f}}return null}return s(t)}function d(){function t(t,r,n,o,i){var a=t[r]
if(!e(a)){var u=S(a)
return new c("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return s(t)}function y(e){function t(t,r,n,o,a){if(!(t[r]instanceof e)){var u=e.name||i
var s=A(t[r])
return new c("Invalid "+o+" `"+a+"` of type "+("`"+s+"` supplied to `"+n+"`, expected ")+("instance of `"+u+"`."))}return null}return s(t)}function m(e){if(!Array.isArray(e)){g("Invalid argument supplied to oneOf, expected an instance of array.")
return w}function t(t,r,n,o,i){var a=t[r]
for(var s=0;s<e.length;s++){if(u(a,e[s])){return null}}var f=JSON.stringify(e)
return new c("Invalid "+o+" `"+i+"` of value `"+a+"` "+("supplied to `"+n+"`, expected one of "+f+"."))}return s(t)}function O(e){function t(t,r,n,o,i){if(typeof e!=="function"){return new c("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.")}var a=t[r]
var u=S(a)
if(u!=="object"){return new c("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an object."))}for(var s in a){if(a.hasOwnProperty(s)){var f=e(a,s,n,o,i+"."+s,h)
if(f instanceof Error){return f}}}return null}return s(t)}function x(e){if(!Array.isArray(e)){g("Invalid argument supplied to oneOfType, expected an instance of array.")
return w}for(var t=0;t<e.length;t++){var r=e[t]
if(typeof r!=="function"){g("Invalid argument supplied to oneOfType. Expected an array of check functions, but "+"received "+C(r)+" at index "+t+".")
return w}}function n(t,r,n,o,i){for(var a=0;a<e.length;a++){var u=e[a]
if(u(t,r,n,o,i,h)==null){return null}}return new c("Invalid "+o+" `"+i+"` supplied to "+("`"+n+"`."))}return s(n)}function j(){function e(e,t,r,n,o){if(!T(e[t])){return new c("Invalid "+n+" `"+o+"` supplied to "+("`"+r+"`, expected a ReactNode."))}return null}return s(e)}function R(e){function t(t,r,n,o,i){var a=t[r]
var u=S(a)
if(u!=="object"){return new c("Invalid "+o+" `"+i+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."))}for(var s in e){var f=e[s]
if(!f){continue}var l=f(a,s,n,o,i+"."+s,h)
if(l){return l}}return null}return s(t)}function P(e){function t(t,r,n,o,i){var a=t[r]
var u=S(a)
if(u!=="object"){return new c("Invalid "+o+" `"+i+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."))}var s=l({},t[r],e)
for(var f in s){var p=e[f]
if(!p){return new c("Invalid "+o+" `"+i+"` key `"+f+"` supplied to `"+n+"`."+"\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))}var v=p(a,f,n,o,i+"."+f,h)
if(v){return v}}return null}return s(t)}function T(t){switch(typeof t){case"number":case"string":case"undefined":return true
case"boolean":return!t
case"object":if(Array.isArray(t)){return t.every(T)}if(t===null||e(t)){return true}var r=o(t)
if(r){var n=r.call(t)
var i
if(r!==t.entries){while(!(i=n.next()).done){if(!T(i.value)){return false}}}else{while(!(i=n.next()).done){var a=i.value
if(a){if(!T(a[1])){return false}}}}}else{return false}return true
default:return false}}function E(e,t){if(e==="symbol"){return true}if(t["@@toStringTag"]==="Symbol"){return true}if(typeof Symbol==="function"&&t instanceof Symbol){return true}return false}function S(e){var t=typeof e
if(Array.isArray(e)){return"array"}if(e instanceof RegExp){return"object"}if(E(t,e)){return"symbol"}return t}function k(e){if(typeof e==="undefined"||e===null){return""+e}var t=S(e)
if(t==="object"){if(e instanceof Date){return"date"}else if(e instanceof RegExp){return"regexp"}}return t}function C(e){var t=k(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function A(e){if(!e.constructor||!e.constructor.name){return i}return e.constructor.name}a.checkPropTypes=b
a.PropTypes=a
return a}
var x=i(function(e){{var t=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103
var r=function(e){return typeof e==="object"&&e!==null&&e.$$typeof===t}
var n=true
e.exports=O(r,n)}})
var j=function(e,t,r,n,o,i,a,u){{if(t===undefined){throw new Error("invariant requires an error message argument")}}if(!e){var c
if(t===undefined){c=new Error("Minified exception occurred; use the non-minified dev environment "+"for the full error message and additional helpful warnings.")}else{var s=[r,n,o,i,a,u]
var f=0
c=new Error(t.replace(/%s/g,function(){return s[f++]}))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}
var R=j
function P(e){return e.charAt(0)==="/"}function T(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1){e[r]=e[n]}e.pop()}function E(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:""
var r=e&&e.split("/")||[]
var n=t&&t.split("/")||[]
var o=e&&P(e)
var i=t&&P(t)
var a=o||i
if(e&&P(e)){n=r}else if(r.length){n.pop()
n=n.concat(r)}if(!n.length)return"/"
var u=void 0
if(n.length){var c=n[n.length-1]
u=c==="."||c===".."||c===""}else{u=false}var s=0
for(var f=n.length;f>=0;f--){var l=n[f]
if(l==="."){T(n,f)}else if(l===".."){T(n,f)
s++}else if(s){T(n,f)
s--}}if(!a)for(;s--;s){n.unshift("..")}if(a&&n[0]!==""&&(!n[0]||!P(n[0])))n.unshift("")
var p=n.join("/")
if(u&&p.substr(-1)!=="/")p+="/"
return p}var S=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
function k(e,t){if(e===t)return true
if(e==null||t==null)return false
if(Array.isArray(e)){return Array.isArray(t)&&e.length===t.length&&e.every(function(e,r){return k(e,t[r])})}var r=typeof e==="undefined"?"undefined":S(e)
var n=typeof t==="undefined"?"undefined":S(t)
if(r!==n)return false
if(r==="object"){var o=e.valueOf()
var i=t.valueOf()
if(o!==e||i!==t)return k(o,i)
var a=Object.keys(e)
var u=Object.keys(t)
if(a.length!==u.length)return false
return a.every(function(r){return k(e[r],t[r])})}return false}var C=function e(t){return t.charAt(0)==="/"?t:"/"+t}
var A=function e(t){return t.charAt(0)==="/"?t.substr(1):t}
var q=function e(t,r){return new RegExp("^"+r+"(\\/|\\?|#|$)","i").test(t)}
var M=function e(t,r){return q(t,r)?t.substr(r.length):t}
var I=function e(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}
var L=function e(t){var r=t||"/"
var n=""
var o=""
var i=r.indexOf("#")
if(i!==-1){o=r.substr(i)
r=r.substr(0,i)}var a=r.indexOf("?")
if(a!==-1){n=r.substr(a)
r=r.substr(0,a)}return{pathname:r,search:n==="?"?"":n,hash:o==="#"?"":o}}
var U=function e(t){var r=t.pathname,n=t.search,o=t.hash
var i=r||"/"
if(n&&n!=="?")i+=n.charAt(0)==="?"?n:"?"+n
if(o&&o!=="#")i+=o.charAt(0)==="#"?o:"#"+o
return i}
var Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var H=function e(t,r,n,o){var i=void 0
if(typeof t==="string"){i=L(t)
i.state=r}else{i=Y({},t)
if(i.pathname===undefined)i.pathname=""
if(i.search){if(i.search.charAt(0)!=="?")i.search="?"+i.search}else{i.search=""}if(i.hash){if(i.hash.charAt(0)!=="#")i.hash="#"+i.hash}else{i.hash=""}if(r!==undefined&&i.state===undefined)i.state=r}try{i.pathname=decodeURI(i.pathname)}catch(e){if(e instanceof URIError){throw new URIError('Pathname "'+i.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw e}}if(n)i.key=n
if(o){if(!i.pathname){i.pathname=o.pathname}else if(i.pathname.charAt(0)!=="/"){i.pathname=E(i.pathname,o.pathname)}}else{if(!i.pathname){i.pathname="/"}}return i}
var N=function e(t,r){return t.pathname===r.pathname&&t.search===r.search&&t.hash===r.hash&&t.key===r.key&&k(t.state,r.state)}
var W=function e(){var t=null
var r=function e(r){o(t==null,"A history supports only one prompt at a time")
t=r
return function(){if(t===r)t=null}}
var n=function e(r,n,i,a){if(t!=null){var u=typeof t==="function"?t(r,n):t
if(typeof u==="string"){if(typeof i==="function"){i(u,a)}else{o(false,"A history needs a getUserConfirmation function in order to use a prompt message")
a(true)}}else{a(u!==false)}}else{a(true)}}
var i=[]
var a=function e(t){var r=true
var n=function e(){if(r)t.apply(undefined,arguments)}
i.push(n)
return function(){r=false
i=i.filter(function(e){return e!==n})}}
var u=function e(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++){r[n]=arguments[n]}i.forEach(function(e){return e.apply(undefined,r)})}
return{setPrompt:r,confirmTransitionTo:n,appendListener:a,notifyListeners:u}}
var B=!!(typeof window!=="undefined"&&window.document&&window.document.createElement)
var D=function e(t,r,n){return t.addEventListener?t.addEventListener(r,n,false):t.attachEvent("on"+r,n)}
var F=function e(t,r,n){return t.removeEventListener?t.removeEventListener(r,n,false):t.detachEvent("on"+r,n)}
var J=function e(t,r){return r(window.confirm(t))}
var V=function e(){var t=window.navigator.userAgent
if((t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1)return false
return window.history&&"pushState"in window.history}
var K=function e(){return window.navigator.userAgent.indexOf("Trident")===-1}
var G=function e(){return window.navigator.userAgent.indexOf("Firefox")===-1}
var z=function e(t){return t.state===undefined&&navigator.userAgent.indexOf("CriOS")===-1}
var Q=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var Z="popstate"
var ee="hashchange"
var te=function e(){try{return window.history.state||{}}catch(e){return{}}}
var re=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}
R(B,"Browser history needs a DOM")
var r=window.history
var n=V()
var i=!K()
var a=t.forceRefresh,u=a===undefined?false:a,c=t.getUserConfirmation,s=c===undefined?J:c,f=t.keyLength,l=f===undefined?6:f
var p=t.basename?I(C(t.basename)):""
var h=function e(t){var r=t||{},n=r.key,i=r.state
var a=window.location,u=a.pathname,c=a.search,s=a.hash
var f=u+c+s
o(!p||q(f,p),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+f+'" to begin with "'+p+'".')
if(p)f=M(f,p)
return H(f,i,n)}
var v=function e(){return Math.random().toString(36).substr(2,l)}
var d=W()
var y=function e(t){X(ne,t)
ne.length=r.length
d.notifyListeners(ne.location,ne.action)}
var m=function e(t){if(z(t))return
w(h(t.state))}
var b=function e(){w(h(te()))}
var g=false
var w=function e(t){if(g){g=false
y()}else{var r="POP"
d.confirmTransitionTo(t,r,s,function(e){if(e){y({action:r,location:t})}else{O(t)}})}}
var O=function e(t){var r=ne.location
var n=j.indexOf(r.key)
if(n===-1)n=0
var o=j.indexOf(t.key)
if(o===-1)o=0
var i=n-o
if(i){g=true
S(i)}}
var x=h(te())
var j=[x.key]
var P=function e(t){return p+U(t)}
var T=function e(t,i){o(!((typeof t==="undefined"?"undefined":Q(t))==="object"&&t.state!==undefined&&i!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored")
var a="PUSH"
var c=H(t,i,v(),ne.location)
d.confirmTransitionTo(c,a,s,function(e){if(!e)return
var t=P(c)
var i=c.key,s=c.state
if(n){r.pushState({key:i,state:s},null,t)
if(u){window.location.href=t}else{var f=j.indexOf(ne.location.key)
var l=j.slice(0,f===-1?0:f+1)
l.push(c.key)
j=l
y({action:a,location:c})}}else{o(s===undefined,"Browser history cannot push state in browsers that do not support HTML5 history")
window.location.href=t}})}
var E=function e(t,i){o(!((typeof t==="undefined"?"undefined":Q(t))==="object"&&t.state!==undefined&&i!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored")
var a="REPLACE"
var c=H(t,i,v(),ne.location)
d.confirmTransitionTo(c,a,s,function(e){if(!e)return
var t=P(c)
var i=c.key,s=c.state
if(n){r.replaceState({key:i,state:s},null,t)
if(u){window.location.replace(t)}else{var f=j.indexOf(ne.location.key)
if(f!==-1)j[f]=c.key
y({action:a,location:c})}}else{o(s===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history")
window.location.replace(t)}})}
var S=function e(t){r.go(t)}
var k=function e(){return S(-1)}
var A=function e(){return S(1)}
var L=0
var Y=function e(t){L+=t
if(L===1){D(window,Z,m)
if(i)D(window,ee,b)}else if(L===0){F(window,Z,m)
if(i)F(window,ee,b)}}
var N=false
var G=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false
var r=d.setPrompt(t)
if(!N){Y(1)
N=true}return function(){if(N){N=false
Y(-1)}return r()}}
var re=function e(t){var r=d.appendListener(t)
Y(1)
return function(){Y(-1)
r()}}
var ne={length:r.length,action:"POP",location:x,createHref:P,push:T,replace:E,go:S,goBack:k,goForward:A,block:G,listen:re}
return ne}
var ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var oe="hashchange"
var ie={hashbang:{encodePath:function e(t){return t.charAt(0)==="!"?t:"!/"+A(t)},decodePath:function e(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:A,decodePath:C},slash:{encodePath:C,decodePath:C}}
var ae=function e(){var t=window.location.href
var r=t.indexOf("#")
return r===-1?"":t.substring(r+1)}
var ue=function e(t){return window.location.hash=t}
var ce=function e(t){var r=window.location.href.indexOf("#")
window.location.replace(window.location.href.slice(0,r>=0?r:0)+"#"+t)}
var se=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}
R(B,"Hash history needs a DOM")
var r=window.history
var n=G()
var i=t.getUserConfirmation,a=i===undefined?J:i,u=t.hashType,c=u===undefined?"slash":u
var s=t.basename?I(C(t.basename)):""
var f=ie[c],l=f.encodePath,p=f.decodePath
var h=function e(){var t=p(ae())
o(!s||q(t,s),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+s+'".')
if(s)t=M(t,s)
return H(t)}
var v=W()
var d=function e(t){ne(X,t)
X.length=r.length
v.notifyListeners(X.location,X.action)}
var y=false
var m=null
var b=function e(){var t=ae()
var r=l(t)
if(t!==r){ce(r)}else{var n=h()
var o=X.location
if(!y&&N(o,n))return
if(m===U(n))return
m=null
g(n)}}
var g=function e(t){if(y){y=false
d()}else{var r="POP"
v.confirmTransitionTo(t,r,a,function(e){if(e){d({action:r,location:t})}else{w(t)}})}}
var w=function e(t){var r=X.location
var n=P.lastIndexOf(U(r))
if(n===-1)n=0
var o=P.lastIndexOf(U(t))
if(o===-1)o=0
var i=n-o
if(i){y=true
k(i)}}
var O=ae()
var x=l(O)
if(O!==x)ce(x)
var j=h()
var P=[U(j)]
var T=function e(t){return"#"+l(s+U(t))}
var E=function e(t,r){o(r===undefined,"Hash history cannot push state; it is ignored")
var n="PUSH"
var i=H(t,undefined,undefined,X.location)
v.confirmTransitionTo(i,n,a,function(e){if(!e)return
var t=U(i)
var r=l(s+t)
var a=ae()!==r
if(a){m=t
ue(r)
var u=P.lastIndexOf(U(X.location))
var c=P.slice(0,u===-1?0:u+1)
c.push(t)
P=c
d({action:n,location:i})}else{o(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack")
d()}})}
var S=function e(t,r){o(r===undefined,"Hash history cannot replace state; it is ignored")
var n="REPLACE"
var i=H(t,undefined,undefined,X.location)
v.confirmTransitionTo(i,n,a,function(e){if(!e)return
var t=U(i)
var r=l(s+t)
var o=ae()!==r
if(o){m=t
ce(r)}var a=P.indexOf(U(X.location))
if(a!==-1)P[a]=t
d({action:n,location:i})})}
var k=function e(t){o(n,"Hash history go(n) causes a full page reload in this browser")
r.go(t)}
var A=function e(){return k(-1)}
var L=function e(){return k(1)}
var Y=0
var V=function e(t){Y+=t
if(Y===1){D(window,oe,b)}else if(Y===0){F(window,oe,b)}}
var K=false
var z=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false
var r=v.setPrompt(t)
if(!K){V(1)
K=true}return function(){if(K){K=false
V(-1)}return r()}}
var Q=function e(t){var r=v.appendListener(t)
V(1)
return function(){V(-1)
r()}}
var X={length:r.length,action:"POP",location:j,createHref:T,push:E,replace:S,go:k,goBack:A,goForward:L,block:z,listen:Q}
return X}
var fe=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var pe=function e(t,r,n){return Math.min(Math.max(t,r),n)}
var he=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}
var r=t.getUserConfirmation,n=t.initialEntries,i=n===undefined?["/"]:n,a=t.initialIndex,u=a===undefined?0:a,c=t.keyLength,s=c===undefined?6:c
var f=W()
var l=function e(t){le(R,t)
R.length=R.entries.length
f.notifyListeners(R.location,R.action)}
var p=function e(){return Math.random().toString(36).substr(2,s)}
var h=pe(u,0,i.length-1)
var v=i.map(function(e){return typeof e==="string"?H(e,undefined,p()):H(e,undefined,e.key||p())})
var d=U
var y=function e(t,n){o(!((typeof t==="undefined"?"undefined":fe(t))==="object"&&t.state!==undefined&&n!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored")
var i="PUSH"
var a=H(t,n,p(),R.location)
f.confirmTransitionTo(a,i,r,function(e){if(!e)return
var t=R.index
var r=t+1
var n=R.entries.slice(0)
if(n.length>r){n.splice(r,n.length-r,a)}else{n.push(a)}l({action:i,location:a,index:r,entries:n})})}
var m=function e(t,n){o(!((typeof t==="undefined"?"undefined":fe(t))==="object"&&t.state!==undefined&&n!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored")
var i="REPLACE"
var a=H(t,n,p(),R.location)
f.confirmTransitionTo(a,i,r,function(e){if(!e)return
R.entries[R.index]=a
l({action:i,location:a})})}
var b=function e(t){var n=pe(R.index+t,0,R.entries.length-1)
var o="POP"
var i=R.entries[n]
f.confirmTransitionTo(i,o,r,function(e){if(e){l({action:o,location:i,index:n})}else{l()}})}
var g=function e(){return b(-1)}
var w=function e(){return b(1)}
var O=function e(t){var r=R.index+t
return r>=0&&r<R.entries.length}
var x=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false
return f.setPrompt(t)}
var j=function e(t){return f.appendListener(t)}
var R={length:v.length,action:"POP",location:v[h],index:h,entries:v,createHref:d,push:y,replace:m,go:b,goBack:g,goForward:w,canGo:O,block:x,listen:j}
return R}
var ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function de(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ye(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function me(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var be=function(e){me(r,e)
function r(){var t,n,o
de(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=ye(this,e.call.apply(e,[this].concat(a))),n),n.state={match:n.computeMatch(n.props.history.location.pathname)},t),ye(n,o)}r.prototype.getChildContext=function e(){return{router:ve({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}}
r.prototype.computeMatch=function e(t){return{path:"/",url:"/",params:{},isExact:t==="/"}}
r.prototype.componentWillMount=function e(){var r=this
var n=this.props,o=n.children,i=n.history
R(o==null||t.Children.count(o)===1,"A <Router> may have only one child element")
this.unlisten=i.listen(function(){r.setState({match:r.computeMatch(i.location.pathname)})})}
r.prototype.componentWillReceiveProps=function e(t){o(this.props.history===t.history,"You cannot change <Router history>")}
r.prototype.componentWillUnmount=function e(){this.unlisten()}
r.prototype.render=function e(){var r=this.props.children
return r?t.Children.only(r):null}
return r}(t.Component)
be.propTypes={history:x.object.isRequired,children:x.node}
be.contextTypes={router:x.object}
be.childContextTypes={router:x.object.isRequired}
var ge=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var we=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}
var Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var xe=function(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}
var je=function(e,t){var r={}
for(var n in e){if(t.indexOf(n)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,n))continue
r[n]=e[n]}return r}
var Re=function(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}
var Pe=function(e){xe(r,e)
function r(){var t,n,o
we(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=Re(this,e.call.apply(e,[this].concat(a))),n),n.history=re(n.props),t),Re(n,o)}r.prototype.componentWillMount=function e(){o(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { BrowserRouter as Router }`.")}
r.prototype.render=function e(){return t.createElement(be,{history:this.history,children:this.props.children})}
return r}(t.Component)
Pe.propTypes={basename:x.string,forceRefresh:x.bool,getUserConfirmation:x.func,keyLength:x.number,children:x.node}
var Te=function(e){xe(r,e)
function r(){var t,n,o
we(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=Re(this,e.call.apply(e,[this].concat(a))),n),n.history=se(n.props),t),Re(n,o)}r.prototype.componentWillMount=function e(){o(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { HashRouter as Router }`.")}
r.prototype.render=function e(){return t.createElement(be,{history:this.history,children:this.props.children})}
return r}(t.Component)
Te.propTypes={basename:x.string,getUserConfirmation:x.func,hashType:x.oneOf(["hashbang","noslash","slash"]),children:x.node}
var Ee=function e(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}
var Se=function(e){xe(r,e)
function r(){var t,n,o
we(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=Re(this,e.call.apply(e,[this].concat(a))),n),n.handleClick=function(e){if(n.props.onClick)n.props.onClick(e)
if(!e.defaultPrevented&&e.button===0&&!n.props.target&&!Ee(e)){e.preventDefault()
var t=n.context.router.history
var r=n.props,o=r.replace,i=r.to
if(o){t.replace(i)}else{t.push(i)}}},t),Re(n,o)}r.prototype.render=function e(){var r=this.props,n=r.replace,o=r.to,i=r.innerRef,a=je(r,["replace","to","innerRef"])
R(this.context.router,"You should not use <Link> outside a <Router>")
R(o!==undefined,'You must specify the "to" property')
var u=this.context.router.history
var c=typeof o==="string"?H(o,null,null,u.location):o
var s=u.createHref(c)
return t.createElement("a",Oe({},a,{onClick:this.handleClick,href:s,ref:i}))}
return r}(t.Component)
Se.propTypes={onClick:x.func,target:x.string,replace:x.bool,to:x.oneOfType([x.string,x.object]).isRequired,innerRef:x.oneOfType([x.string,x.func])}
Se.defaultProps={replace:false}
Se.contextTypes={router:x.shape({history:x.shape({push:x.func.isRequired,replace:x.func.isRequired,createHref:x.func.isRequired}).isRequired}).isRequired}
function ke(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ce(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function Ae(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var _e=function(e){Ae(r,e)
function r(){var t,n,o
ke(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=Ce(this,e.call.apply(e,[this].concat(a))),n),n.history=he(n.props),t),Ce(n,o)}r.prototype.componentWillMount=function e(){o(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { MemoryRouter as Router }`.")}
r.prototype.render=function e(){return t.createElement(be,{history:this.history,children:this.props.children})}
return r}(t.Component)
_e.propTypes={initialEntries:x.array,initialIndex:x.number,getUserConfirmation:x.func,keyLength:x.number,children:x.node}
var qe={}.toString
var Me=Array.isArray||function(e){return qe.call(e)=="[object Array]"}
var Ie=et
var Le=We
var Ue=Be
var Ye=Fe
var He=Ze
var Ne=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")
function We(e,t){var r=[]
var n=0
var o=0
var i=""
var a=t&&t.delimiter||"/"
var u
while((u=Ne.exec(e))!=null){var c=u[0]
var s=u[1]
var f=u.index
i+=e.slice(o,f)
o=f+c.length
if(s){i+=s[1]
continue}var l=e[o]
var p=u[2]
var h=u[3]
var v=u[4]
var d=u[5]
var y=u[6]
var m=u[7]
if(i){r.push(i)
i=""}var b=p!=null&&l!=null&&l!==p
var g=y==="+"||y==="*"
var w=y==="?"||y==="*"
var O=u[2]||a
var x=v||d
r.push({name:h||n++,prefix:p||"",delimiter:O,optional:w,repeat:g,partial:b,asterisk:!!m,pattern:x?Ve(x):m?".*":"[^"+Je(O)+"]+?"})}if(o<e.length){i+=e.substr(o)}if(i){r.push(i)}return r}function Be(e,t){return Fe(We(e,t))}function $e(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function De(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Fe(e){var t=new Array(e.length)
for(var r=0;r<e.length;r++){if(typeof e[r]==="object"){t[r]=new RegExp("^(?:"+e[r].pattern+")$")}}return function(r,n){var o=""
var i=r||{}
var a=n||{}
var u=a.pretty?$e:encodeURIComponent
for(var c=0;c<e.length;c++){var s=e[c]
if(typeof s==="string"){o+=s
continue}var f=i[s.name]
var l
if(f==null){if(s.optional){if(s.partial){o+=s.prefix}continue}else{throw new TypeError('Expected "'+s.name+'" to be defined')}}if(Me(f)){if(!s.repeat){throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`")}if(f.length===0){if(s.optional){continue}else{throw new TypeError('Expected "'+s.name+'" to not be empty')}}for(var p=0;p<f.length;p++){l=u(f[p])
if(!t[c].test(l)){throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(l)+"`")}o+=(p===0?s.prefix:s.delimiter)+l}continue}l=s.asterisk?De(f):u(f)
if(!t[c].test(l)){throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"')}o+=s.prefix+l}return o}}function Je(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Ve(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Ke(e,t){e.keys=t
return e}function Ge(e){return e.sensitive?"":"i"}function ze(e,t){var r=e.source.match(/\((?!\?)/g)
if(r){for(var n=0;n<r.length;n++){t.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,asterisk:false,pattern:null})}}return Ke(e,t)}function Qe(e,t,r){var n=[]
for(var o=0;o<e.length;o++){n.push(et(e[o],t,r).source)}var i=new RegExp("(?:"+n.join("|")+")",Ge(r))
return Ke(i,t)}function Xe(e,t,r){return Ze(We(e,r),t,r)}function Ze(e,t,r){if(!Me(t)){r=t||r
t=[]}r=r||{}
var n=r.strict
var o=r.end!==false
var i=""
for(var a=0;a<e.length;a++){var u=e[a]
if(typeof u==="string"){i+=Je(u)}else{var c=Je(u.prefix)
var s="(?:"+u.pattern+")"
t.push(u)
if(u.repeat){s+="(?:"+c+s+")*"}if(u.optional){if(!u.partial){s="(?:"+c+"("+s+"))?"}else{s=c+"("+s+")?"}}else{s=c+"("+s+")"}i+=s}}var f=Je(r.delimiter||"/")
var l=i.slice(-f.length)===f
if(!n){i=(l?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"}if(o){i+="$"}else{i+=n&&l?"":"(?="+f+"|$)"}return Ke(new RegExp("^"+i,Ge(r)),t)}function et(e,t,r){if(!Me(t)){r=t||r
t=[]}r=r||{}
if(e instanceof RegExp){return ze(e,t)}if(Me(e)){return Qe(e,t,r)}return Xe(e,t,r)}Ie.parse=Le
Ie.compile=Ue
Ie.tokensToFunction=Ye
Ie.tokensToRegExp=He
var tt={}
var rt=1e4
var nt=0
var ot=function e(t,r){var n=""+r.end+r.strict+r.sensitive
var o=tt[n]||(tt[n]={})
if(o[t])return o[t]
var i=[]
var a=Ie(t,i,r)
var u={re:a,keys:i}
if(nt<rt){o[t]=u
nt++}return u}
var it=function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
var n=arguments[2]
if(typeof r==="string")r={path:r}
var o=r,i=o.path,a=o.exact,u=a===undefined?false:a,c=o.strict,s=c===undefined?false:c,f=o.sensitive,l=f===undefined?false:f
if(i==null)return n
var p=ot(i,{end:u,strict:s,sensitive:l}),h=p.re,v=p.keys
var d=h.exec(t)
if(!d)return null
var y=d[0],m=d.slice(1)
var b=t===y
if(u&&!b)return null
return{path:i,url:i==="/"&&y===""?"/":y,isExact:b,params:v.reduce(function(e,t,r){e[t.name]=m[r]
return e},{})}}
var at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function ut(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ct(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function st(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var ft=function e(r){return t.Children.count(r)===0}
var lt=function(e){st(r,e)
function r(){var t,n,o
ut(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=ct(this,e.call.apply(e,[this].concat(a))),n),n.state={match:n.computeMatch(n.props,n.context.router)},t),ct(n,o)}r.prototype.getChildContext=function e(){return{router:at({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}}
r.prototype.computeMatch=function e(t,r){var n=t.computedMatch,o=t.location,i=t.path,a=t.strict,u=t.exact,c=t.sensitive
if(n)return n
R(r,"You should not use <Route> or withRouter() outside a <Router>")
var s=r.route
var f=(o||s.location).pathname
return it(f,{path:i,strict:a,exact:u,sensitive:c},s.match)}
r.prototype.componentWillMount=function e(){o(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored")
o(!(this.props.component&&this.props.children&&!ft(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored")
o(!(this.props.render&&this.props.children&&!ft(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")}
r.prototype.componentWillReceiveProps=function e(t,r){o(!(t.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.')
o(!(!t.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')
this.setState({match:this.computeMatch(t,r.router)})}
r.prototype.render=function e(){var r=this.state.match
var n=this.props,o=n.children,i=n.component,e=n.render
var a=this.context.router,u=a.history,c=a.route,s=a.staticContext
var f=this.props.location||c.location
var l={match:r,location:f,history:u,staticContext:s}
if(i)return r?t.createElement(i,l):null
if(e)return r?e(l):null
if(typeof o==="function")return o(l)
if(o&&!ft(o))return t.Children.only(o)
return null}
return r}(t.Component)
lt.propTypes={computedMatch:x.object,path:x.string,exact:x.bool,strict:x.bool,sensitive:x.bool,component:x.func,render:x.func,children:x.oneOfType([x.func,x.node]),location:x.object}
lt.contextTypes={router:x.shape({history:x.object.isRequired,route:x.object.isRequired,staticContext:x.object})}
lt.childContextTypes={router:x.object.isRequired}
var pt=function e(r){var n=r.to,o=r.exact,i=r.strict,a=r.location,u=r.activeClassName,c=r.className,s=r.activeStyle,f=r.style,l=r.isActive,p=r["aria-current"],h=je(r,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"])
var v=(typeof n==="undefined"?"undefined":ge(n))==="object"?n.pathname:n
var d=v&&v.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")
return t.createElement(lt,{path:d,exact:o,strict:i,location:a,children:function e(r){var o=r.location,i=r.match
var a=!!(l?l(i,o):i)
return t.createElement(Se,Oe({to:n,className:a?[c,u].filter(function(e){return e}).join(" "):c,style:a?Oe({},f,s):f,"aria-current":a&&p||null},h))}})}
pt.propTypes={to:Se.propTypes.to,exact:x.bool,strict:x.bool,location:x.object,activeClassName:x.string,className:x.string,activeStyle:x.object,style:x.object,isActive:x.func,"aria-current":x.oneOf(["page","step","location","date","time","true"])}
pt.defaultProps={activeClassName:"active","aria-current":"page"}
function ht(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function vt(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function dt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var yt=function(e){dt(t,e)
function t(){ht(this,t)
return vt(this,e.apply(this,arguments))}t.prototype.enable=function e(t){if(this.unblock)this.unblock()
this.unblock=this.context.router.history.block(t)}
t.prototype.disable=function e(){if(this.unblock){this.unblock()
this.unblock=null}}
t.prototype.componentWillMount=function e(){R(this.context.router,"You should not use <Prompt> outside a <Router>")
if(this.props.when)this.enable(this.props.message)}
t.prototype.componentWillReceiveProps=function e(t){if(t.when){if(!this.props.when||this.props.message!==t.message)this.enable(t.message)}else{this.disable()}}
t.prototype.componentWillUnmount=function e(){this.disable()}
t.prototype.render=function e(){return null}
return t}(t.Component)
yt.propTypes={when:x.bool,message:x.oneOfType([x.func,x.string]).isRequired}
yt.defaultProps={when:true}
yt.contextTypes={router:x.shape({history:x.shape({block:x.func.isRequired}).isRequired}).isRequired}
var mt={}
var bt=1e4
var gt=0
var wt=function e(t){var r=t
var n=mt[r]||(mt[r]={})
if(n[t])return n[t]
var o=Ie.compile(t)
if(gt<bt){n[t]=o
gt++}return o}
var Ot=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/"
var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
if(t==="/"){return t}var n=wt(t)
return n(r,{pretty:true})}
var xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function jt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Rt(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function Pt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Tt=function(e){Pt(t,e)
function t(){jt(this,t)
return Rt(this,e.apply(this,arguments))}t.prototype.isStatic=function e(){return this.context.router&&this.context.router.staticContext}
t.prototype.componentWillMount=function e(){R(this.context.router,"You should not use <Redirect> outside a <Router>")
if(this.isStatic())this.perform()}
t.prototype.componentDidMount=function e(){if(!this.isStatic())this.perform()}
t.prototype.componentDidUpdate=function e(t){var r=H(t.to)
var n=H(this.props.to)
if(N(r,n)){o(false,"You tried to redirect to the same route you're currently on: "+('"'+n.pathname+n.search+'"'))
return}this.perform()}
t.prototype.computeTo=function e(t){var r=t.computedMatch,n=t.to
if(r){if(typeof n==="string"){return Ot(n,r.params)}else{return xt({},n,{pathname:Ot(n.pathname,r.params)})}}return n}
t.prototype.perform=function e(){var t=this.context.router.history
var r=this.props.push
var n=this.computeTo(this.props)
if(r){t.push(n)}else{t.replace(n)}}
t.prototype.render=function e(){return null}
return t}(t.Component)
Tt.propTypes={computedMatch:x.object,push:x.bool,from:x.string,to:x.oneOfType([x.string,x.object]).isRequired}
Tt.defaultProps={push:false}
Tt.contextTypes={router:x.shape({history:x.shape({push:x.func.isRequired,replace:x.func.isRequired}).isRequired,staticContext:x.object}).isRequired}
var Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function St(e,t){var r={}
for(var n in e){if(t.indexOf(n)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,n))continue
r[n]=e[n]}return r}function kt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ct(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function At(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var _t=function e(t){return t.charAt(0)==="/"?t:"/"+t}
var qt=function e(t,r){if(!t)return r
return Et({},r,{pathname:_t(t)+r.pathname})}
var Mt=function e(t,r){if(!t)return r
var n=_t(t)
if(r.pathname.indexOf(n)!==0)return r
return Et({},r,{pathname:r.pathname.substr(n.length)})}
var It=function e(t){return typeof t==="string"?t:U(t)}
var Lt=function e(t){return function(){R(false,"You cannot %s with <StaticRouter>",t)}}
var Ut=function e(){}
var Yt=function(e){At(r,e)
function r(){var t,n,o
kt(this,r)
for(var i=arguments.length,a=Array(i),u=0;u<i;u++){a[u]=arguments[u]}return o=(t=(n=Ct(this,e.call.apply(e,[this].concat(a))),n),n.createHref=function(e){return _t(n.props.basename+It(e))},n.handlePush=function(e){var t=n.props,r=t.basename,o=t.context
o.action="PUSH"
o.location=qt(r,H(e))
o.url=It(o.location)},n.handleReplace=function(e){var t=n.props,r=t.basename,o=t.context
o.action="REPLACE"
o.location=qt(r,H(e))
o.url=It(o.location)},n.handleListen=function(){return Ut},n.handleBlock=function(){return Ut},t),Ct(n,o)}r.prototype.getChildContext=function e(){return{router:{staticContext:this.props.context}}}
r.prototype.componentWillMount=function e(){o(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { StaticRouter as Router }`.")}
r.prototype.render=function e(){var r=this.props,n=r.basename,o=r.context,i=r.location,a=St(r,["basename","context","location"])
var u={createHref:this.createHref,action:"POP",location:Mt(n,H(i)),push:this.handlePush,replace:this.handleReplace,go:Lt("go"),goBack:Lt("goBack"),goForward:Lt("goForward"),listen:this.handleListen,block:this.handleBlock}
return t.createElement(be,Et({},a,{history:u}))}
return r}(t.Component)
Yt.propTypes={basename:x.string,context:x.object.isRequired,location:x.oneOfType([x.string,x.object])}
Yt.defaultProps={basename:"",location:"/"}
Yt.childContextTypes={router:x.object.isRequired}
function Ht(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Nt(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function Wt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Bt=function(e){Wt(r,e)
function r(){Ht(this,r)
return Nt(this,e.apply(this,arguments))}r.prototype.componentWillMount=function e(){R(this.context.router,"You should not use <Switch> outside a <Router>")}
r.prototype.componentWillReceiveProps=function e(t){o(!(t.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.')
o(!(!t.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')}
r.prototype.render=function e(){var r=this.context.router.route
var n=this.props.children
var o=this.props.location||r.location
var i=void 0,a=void 0
t.Children.forEach(n,function(e){if(i==null&&t.isValidElement(e)){var n=e.props,u=n.path,c=n.exact,s=n.strict,f=n.sensitive,l=n.from
var p=u||l
a=e
i=it(o.pathname,{path:p,exact:c,strict:s,sensitive:f},r.match)}})
return i?t.cloneElement(a,{location:o,computedMatch:i}):null}
return r}(t.Component)
Bt.contextTypes={router:x.shape({route:x.object.isRequired}).isRequired}
Bt.propTypes={children:x.node,location:x.object}
var $t={childContextTypes:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true}
var Dt={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var Ft=Object.defineProperty
var Jt=Object.getOwnPropertyNames
var Vt=Object.getOwnPropertySymbols
var Kt=Object.getOwnPropertyDescriptor
var Gt=Object.getPrototypeOf
var zt=Gt&&Gt(Object)
function Qt(e,t,r){if(typeof t!=="string"){if(zt){var n=Gt(t)
if(n&&n!==zt){Qt(e,n,r)}}var o=Jt(t)
if(Vt){o=o.concat(Vt(t))}for(var i=0;i<o.length;++i){var a=o[i]
if(!$t[a]&&!Dt[a]&&(!r||!r[a])){var u=Kt(t,a)
try{Ft(e,a,u)}catch(e){}}}return e}return e}var Xt=Qt
var Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function er(e,t){var r={}
for(var n in e){if(t.indexOf(n)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,n))continue
r[n]=e[n]}return r}var tr=function e(r){var n=function e(n){var o=n.wrappedComponentRef,i=er(n,["wrappedComponentRef"])
return t.createElement(lt,{children:function e(n){return t.createElement(r,Zt({},i,n,{ref:o}))}})}
n.displayName="withRouter("+(r.displayName||r.name)+")"
n.WrappedComponent=r
n.propTypes={wrappedComponentRef:x.func}
return Xt(n,r)}
e.BrowserRouter=Pe
e.HashRouter=Te
e.Link=Se
e.MemoryRouter=_e
e.NavLink=pt
e.Prompt=yt
e.Redirect=Tt
e.Route=lt
e.Router=be
e.StaticRouter=Yt
e.Switch=Bt
e.generatePath=Ot
e.matchPath=it
e.withRouter=tr
Object.defineProperty(e,"__esModule",{value:true})})

});
KAdefine("javascript/node_modules/react-router-dom/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/react-router/packages/react-router-dom/umd/react-router-dom.js")

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/react-router-package.js.map 