KAdefine("third_party/javascript-khansrc/react-motion/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n])return t[n].exports
var a=t[n]={exports:{},id:n,loaded:false}
e[n].call(a.exports,a,a.exports,r)
a.loaded=true
return a.exports}r.m=e
r.c=t
r.p="build/"
return r(0)}([function(e,t,r){"use strict"
t.__esModule=true
function n(e){return e&&e.__esModule?e["default"]:e}var a=r(1)
t.Motion=n(a)
var o=r(20)
t.spring=n(o)
var i=r(21)
t.presets=n(i)},function(e,t,r){"use strict"
t.__esModule=true
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r)
if(n)e(t,n)
return t}}()
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var f=r(2)
var l=o(f)
var c=r(3)
var s=o(c)
var p=r(4)
var d=o(p)
var v=r(5)
var y=o(v)
var m=r(7)
var h=o(m)
var b=r(9)
var g=o(b)
var w=r(10)
var O=o(w)
var T=r(11)
var x=o(T)
var j=1e3/60
var E=function(e){u(t,e)
a(t,null,[{key:"propTypes",value:{defaultStyle:x["default"].objectOf(x["default"].number),style:x["default"].objectOf(x["default"].oneOfType([x["default"].number,x["default"].object])).isRequired,children:x["default"].func.isRequired,onRest:x["default"].func},enumerable:true}])
function t(r){var a=this
i(this,t)
e.call(this,r)
this.wasAnimating=false
this.animationID=null
this.prevTime=0
this.accumulatedTime=0
this.unreadPropStyle=null
this.clearUnreadPropStyle=function(e){var t=false
var r=a.state
var o=r.currentStyle
var i=r.currentVelocity
var u=r.lastIdealStyle
var f=r.lastIdealVelocity
for(var l in e){if(!Object.prototype.hasOwnProperty.call(e,l)){continue}var c=e[l]
if(typeof c==="number"){if(!t){t=true
o=n({},o)
i=n({},i)
u=n({},u)
f=n({},f)}o[l]=c
i[l]=0
u[l]=c
f[l]=0}}if(t){a.setState({currentStyle:o,currentVelocity:i,lastIdealStyle:u,lastIdealVelocity:f})}}
this.startAnimationIfNecessary=function(){a.animationID=h["default"](function(e){var t=a.props.style
if(g["default"](a.state.currentStyle,t,a.state.currentVelocity)){if(a.wasAnimating&&a.props.onRest){a.props.onRest()}a.animationID=null
a.wasAnimating=false
a.accumulatedTime=0
return}a.wasAnimating=true
var r=e||y["default"]()
var n=r-a.prevTime
a.prevTime=r
a.accumulatedTime=a.accumulatedTime+n
if(a.accumulatedTime>j*10){a.accumulatedTime=0}if(a.accumulatedTime===0){a.animationID=null
a.startAnimationIfNecessary()
return}var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/j)*j)/j
var i=Math.floor(a.accumulatedTime/j)
var u={}
var f={}
var l={}
var c={}
for(var s in t){if(!Object.prototype.hasOwnProperty.call(t,s)){continue}var p=t[s]
if(typeof p==="number"){l[s]=p
c[s]=0
u[s]=p
f[s]=0}else{var v=a.state.lastIdealStyle[s]
var m=a.state.lastIdealVelocity[s]
for(var h=0;h<i;h++){var b=d["default"](j/1e3,v,m,p.val,p.stiffness,p.damping,p.precision)
v=b[0]
m=b[1]}var w=d["default"](j/1e3,v,m,p.val,p.stiffness,p.damping,p.precision)
var O=w[0]
var T=w[1]
l[s]=v+(O-v)*o
c[s]=m+(T-m)*o
u[s]=v
f[s]=m}}a.animationID=null
a.accumulatedTime-=i*j
a.setState({currentStyle:l,currentVelocity:c,lastIdealStyle:u,lastIdealVelocity:f})
a.unreadPropStyle=null
a.startAnimationIfNecessary()})}
this.state=this.defaultState()}t.prototype.defaultState=function e(){var t=this.props
var r=t.defaultStyle
var n=t.style
var a=r||s["default"](n)
var o=l["default"](a)
return{currentStyle:a,currentVelocity:o,lastIdealStyle:a,lastIdealVelocity:o}}
t.prototype.componentDidMount=function e(){this.prevTime=y["default"]()
this.startAnimationIfNecessary()}
t.prototype.componentWillReceiveProps=function e(t){if(this.unreadPropStyle!=null){this.clearUnreadPropStyle(this.unreadPropStyle)}this.unreadPropStyle=t.style
if(this.animationID==null){this.prevTime=y["default"]()
this.startAnimationIfNecessary()}}
t.prototype.componentWillUnmount=function e(){if(this.animationID!=null){h["default"].cancel(this.animationID)
this.animationID=null}}
t.prototype.render=function e(){var t=this.props.children(this.state.currentStyle)
return t&&O["default"].Children.only(t)}
return t}(O["default"].Component)
t["default"]=E
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=r
function r(e){var t={}
for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){t[r]=0}}return t}e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=r
function r(e){var t={}
for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r)){continue}t[r]=typeof e[r]==="number"?e[r]:e[r].val}return t}e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=n
var r=[0,0]
function n(e,t,n,a,o,i,u){var f=-o*(t-a)
var l=-i*n
var c=f+l
var s=n+c*e
var p=t+s*e
if(Math.abs(s)<u&&Math.abs(p-a)<u){r[0]=a
r[1]=0
return r}r[0]=p
r[1]=s
return r}e.exports=t["default"]},function(e,t,r){(function(t){"use strict";(function(){var r,n,a
if(typeof performance!=="undefined"&&performance!==null&&performance.now){e.exports=function(){return performance.now()}}else if(typeof t!=="undefined"&&t!==null&&t.hrtime){e.exports=function(){return(r()-a)/1e6}
n=t.hrtime
r=function(){var e
e=n()
return e[0]*1e9+e[1]}
a=r()}else if(Date.now){e.exports=function(){return Date.now()-a}
a=Date.now()}else{e.exports=function(){return(new Date).getTime()-a}
a=(new Date).getTime()}}).call(undefined)}).call(t,r(6))},function(e,t){"use strict"
var r=e.exports={}
var n
var a
function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){n=setTimeout}else{n=o}}catch(e){n=o}try{if(typeof clearTimeout==="function"){a=clearTimeout}else{a=i}}catch(e){a=i}})()
function u(e){if(n===setTimeout){return setTimeout(e,0)}if((n===o||!n)&&setTimeout){n=setTimeout
return setTimeout(e,0)}try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function f(e){if(a===clearTimeout){return clearTimeout(e)}if((a===i||!a)&&clearTimeout){a=clearTimeout
return clearTimeout(e)}try{return a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}var l=[]
var c=false
var s
var p=-1
function d(){if(!c||!s){return}c=false
if(s.length){l=s.concat(l)}else{p=-1}if(l.length){v()}}function v(){if(c){return}var e=u(d)
c=true
var t=l.length
while(t){s=l
l=[]
while(++p<t){if(s){s[p].run()}}p=-1
t=l.length}s=null
c=false
f(e)}r.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}l.push(new y(e,t))
if(l.length===1&&!c){u(v)}}
function y(e,t){this.fun=e
this.array=t}y.prototype.run=function(){this.fun.apply(null,this.array)}
r.title="browser"
r.browser=true
r.env={}
r.argv=[]
r.version=""
r.versions={}
function m(){}r.on=m
r.addListener=m
r.once=m
r.off=m
r.removeListener=m
r.removeAllListeners=m
r.emit=m
r.prependListener=m
r.prependOnceListener=m
r.listeners=function(e){return[]}
r.binding=function(e){throw new Error("process.binding is not supported")}
r.cwd=function(){return"/"}
r.chdir=function(e){throw new Error("process.chdir is not supported")}
r.umask=function(){return 0}},function(e,t,r){(function(t){"use strict"
var n=r(8),a=typeof window==="undefined"?t:window,o=["moz","webkit"],i="AnimationFrame",u=a["request"+i],f=a["cancel"+i]||a["cancelRequest"+i]
for(var l=0;!u&&l<o.length;l++){u=a[o[l]+"Request"+i]
f=a[o[l]+"Cancel"+i]||a[o[l]+"CancelRequest"+i]}if(!u||!f){var c=0,s=0,p=[],d=1e3/60
u=function(e){if(p.length===0){var t=n(),r=Math.max(0,d-(t-c))
c=r+t
setTimeout(function(){var e=p.slice(0)
p.length=0
for(var t=0;t<e.length;t++){if(!e[t].cancelled){try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}}}},Math.round(r))}p.push({handle:++s,callback:e,cancelled:false})
return s}
f=function(e){for(var t=0;t<p.length;t++){if(p[t].handle===e){p[t].cancelled=true}}}}e.exports=function(e){return u.call(a,e)}
e.exports.cancel=function(){f.apply(a,arguments)}
e.exports.polyfill=function(e){if(!e){e=a}e.requestAnimationFrame=u
e.cancelAnimationFrame=f}}).call(t,function(){return this}())},function(e,t,r){(function(t){"use strict";(function(){var r,n,a,o,i,u
if(typeof performance!=="undefined"&&performance!==null&&performance.now){e.exports=function(){return performance.now()}}else if(typeof t!=="undefined"&&t!==null&&t.hrtime){e.exports=function(){return(r()-i)/1e6}
n=t.hrtime
r=function(){var e
e=n()
return e[0]*1e9+e[1]}
o=r()
u=t.uptime()*1e9
i=o-u}else if(Date.now){e.exports=function(){return Date.now()-a}
a=Date.now()}else{e.exports=function(){return(new Date).getTime()-a}
a=(new Date).getTime()}}).call(undefined)}).call(t,r(6))},function(e,t){"use strict"
t.__esModule=true
t["default"]=r
function r(e,t,r){for(var n in t){if(!Object.prototype.hasOwnProperty.call(t,n)){continue}if(r[n]!==0){return false}var a=typeof t[n]==="number"?t[n]:t[n].val
if(e[n]!==a){return false}}return true}e.exports=t["default"]},function(e,t){e.exports=require("react")},function(e,t,r){(function(t){"use strict"
if(t.env.NODE_ENV!=="production"){var n=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103
var a=function e(t){return typeof t==="object"&&t!==null&&t.$$typeof===n}
var o=true
e.exports=r(12)(a,o)}else{e.exports=r(19)()}}).call(t,r(6))},function(e,t,r){(function(t){"use strict"
var n=r(13)
var a=r(14)
var o=r(15)
var i=r(16)
var u=r(17)
var f=r(18)
e.exports=function(e,r){var l=typeof Symbol==="function"&&Symbol.iterator
var c="@@iterator"
function s(e){var t=e&&(l&&e[l]||e[c])
if(typeof t==="function"){return t}}var p="<<anonymous>>"
var d={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:b(),arrayOf:g,element:w(),instanceOf:O,node:E(),objectOf:x,oneOf:T,oneOfType:j,shape:S,exact:I}
function v(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function y(e){this.message=e
this.stack=""}y.prototype=Error.prototype
function m(e){if(t.env.NODE_ENV!=="production"){var n={}
var i=0}function f(f,l,c,s,d,v,m){s=s||p
v=v||c
if(m!==u){if(r){a(false,"Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use `PropTypes.checkPropTypes()` to call them. "+"Read more at http://fb.me/use-check-prop-types")}else if(t.env.NODE_ENV!=="production"&&typeof console!=="undefined"){var h=s+":"+c
if(!n[h]&&i<3){o(false,"You are manually calling a React.PropTypes validation "+"function for the `%s` prop on `%s`. This is deprecated "+"and will throw in the standalone `prop-types` package. "+"You may be seeing this warning due to a third-party PropTypes "+"library. See https://fb.me/react-warning-dont-call-proptypes "+"for details.",v,s)
n[h]=true
i++}}}if(l[c]==null){if(f){if(l[c]===null){return new y("The "+d+" `"+v+"` is marked as required "+("in `"+s+"`, but its value is `null`."))}return new y("The "+d+" `"+v+"` is marked as required in "+("`"+s+"`, but its value is `undefined`."))}return null}else{return e(l,c,s,d,v)}}var l=f.bind(null,false)
l.isRequired=f.bind(null,true)
return l}function h(e){function t(t,r,n,a,o,i){var u=t[r]
var f=R(u)
if(f!==e){var l=D(u)
return new y("Invalid "+a+" `"+o+"` of type "+("`"+l+"` supplied to `"+n+"`, expected ")+("`"+e+"`."))}return null}return m(t)}function b(){return m(n.thatReturnsNull)}function g(e){function t(t,r,n,a,o){if(typeof e!=="function"){return new y("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.")}var i=t[r]
if(!Array.isArray(i)){var f=R(i)
return new y("Invalid "+a+" `"+o+"` of type "+("`"+f+"` supplied to `"+n+"`, expected an array."))}for(var l=0;l<i.length;l++){var c=e(i,l,n,a,o+"["+l+"]",u)
if(c instanceof Error){return c}}return null}return m(t)}function w(){function t(t,r,n,a,o){var i=t[r]
if(!e(i)){var u=R(i)
return new y("Invalid "+a+" `"+o+"` of type "+("`"+u+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return m(t)}function O(e){function t(t,r,n,a,o){if(!(t[r]instanceof e)){var i=e.name||p
var u=A(t[r])
return new y("Invalid "+a+" `"+o+"` of type "+("`"+u+"` supplied to `"+n+"`, expected ")+("instance of `"+i+"`."))}return null}return m(t)}function T(e){if(!Array.isArray(e)){t.env.NODE_ENV!=="production"?o(false,"Invalid argument supplied to oneOf, expected an instance of array."):void 0
return n.thatReturnsNull}function r(t,r,n,a,o){var i=t[r]
for(var u=0;u<e.length;u++){if(v(i,e[u])){return null}}var f=JSON.stringify(e)
return new y("Invalid "+a+" `"+o+"` of value `"+i+"` "+("supplied to `"+n+"`, expected one of "+f+"."))}return m(r)}function x(e){function t(t,r,n,a,o){if(typeof e!=="function"){return new y("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.")}var i=t[r]
var f=R(i)
if(f!=="object"){return new y("Invalid "+a+" `"+o+"` of type "+("`"+f+"` supplied to `"+n+"`, expected an object."))}for(var l in i){if(i.hasOwnProperty(l)){var c=e(i,l,n,a,o+"."+l,u)
if(c instanceof Error){return c}}}return null}return m(t)}function j(e){if(!Array.isArray(e)){t.env.NODE_ENV!=="production"?o(false,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0
return n.thatReturnsNull}for(var r=0;r<e.length;r++){var a=e[r]
if(typeof a!=="function"){o(false,"Invalid argument supplied to oneOfType. Expected an array of check functions, but "+"received %s at index %s.",k(a),r)
return n.thatReturnsNull}}function i(t,r,n,a,o){for(var i=0;i<e.length;i++){var f=e[i]
if(f(t,r,n,a,o,u)==null){return null}}return new y("Invalid "+a+" `"+o+"` supplied to "+("`"+n+"`."))}return m(i)}function E(){function e(e,t,r,n,a){if(!P(e[t])){return new y("Invalid "+n+" `"+a+"` supplied to "+("`"+r+"`, expected a ReactNode."))}return null}return m(e)}function S(e){function t(t,r,n,a,o){var i=t[r]
var f=R(i)
if(f!=="object"){return new y("Invalid "+a+" `"+o+"` of type `"+f+"` "+("supplied to `"+n+"`, expected `object`."))}for(var l in e){var c=e[l]
if(!c){continue}var s=c(i,l,n,a,o+"."+l,u)
if(s){return s}}return null}return m(t)}function I(e){function t(t,r,n,a,o){var f=t[r]
var l=R(f)
if(l!=="object"){return new y("Invalid "+a+" `"+o+"` of type `"+l+"` "+("supplied to `"+n+"`, expected `object`."))}var c=i({},t[r],e)
for(var s in c){var p=e[s]
if(!p){return new y("Invalid "+a+" `"+o+"` key `"+s+"` supplied to `"+n+"`."+"\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))}var d=p(f,s,n,a,o+"."+s,u)
if(d){return d}}return null}return m(t)}function P(t){switch(typeof t){case"number":case"string":case"undefined":return true
case"boolean":return!t
case"object":if(Array.isArray(t)){return t.every(P)}if(t===null||e(t)){return true}var r=s(t)
if(r){var n=r.call(t)
var a
if(r!==t.entries){while(!(a=n.next()).done){if(!P(a.value)){return false}}}else{while(!(a=n.next()).done){var o=a.value
if(o){if(!P(o[1])){return false}}}}}else{return false}return true
default:return false}}function N(e,t){if(e==="symbol"){return true}if(t["@@toStringTag"]==="Symbol"){return true}if(typeof Symbol==="function"&&t instanceof Symbol){return true}return false}function R(e){var t=typeof e
if(Array.isArray(e)){return"array"}if(e instanceof RegExp){return"object"}if(N(t,e)){return"symbol"}return t}function D(e){if(typeof e==="undefined"||e===null){return""+e}var t=R(e)
if(t==="object"){if(e instanceof Date){return"date"}else if(e instanceof RegExp){return"regexp"}}return t}function k(e){var t=D(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function A(e){if(!e.constructor||!e.constructor.name){return p}return e.constructor.name}d.checkPropTypes=f
d.PropTypes=d
return d}}).call(t,r(6))},function(e,t){"use strict"
function r(e){return function(){return e}}var n=function e(){}
n.thatReturns=r
n.thatReturnsFalse=r(false)
n.thatReturnsTrue=r(true)
n.thatReturnsNull=r(null)
n.thatReturnsThis=function(){return this}
n.thatReturnsArgument=function(e){return e}
e.exports=n},function(e,t,r){(function(t){"use strict"
var r=function e(t){}
if(t.env.NODE_ENV!=="production"){r=function e(t){if(t===undefined){throw new Error("invariant requires an error message argument")}}}function n(e,t,n,a,o,i,u,f){r(t)
if(!e){var l
if(t===undefined){l=new Error("Minified exception occurred; use the non-minified dev environment "+"for the full error message and additional helpful warnings.")}else{var c=[n,a,o,i,u,f]
var s=0
l=new Error(t.replace(/%s/g,function(){return c[s++]}))
l.name="Invariant Violation"}l.framesToPop=1
throw l}}e.exports=n}).call(t,r(6))},function(e,t,r){(function(t){"use strict"
var n=r(13)
var a=n
if(t.env.NODE_ENV!=="production"){var o=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}var o=0
var i="Warning: "+t.replace(/%s/g,function(){return n[o++]})
if(typeof console!=="undefined"){console.error(i)}try{throw new Error(i)}catch(e){}}
a=function e(t,r){if(r===undefined){throw new Error("`warning(condition, format, ...args)` requires a warning "+"message argument")}if(r.indexOf("Failed Composite propType: ")===0){return}if(!t){for(var n=arguments.length,a=Array(n>2?n-2:0),i=2;i<n;i++){a[i-2]=arguments[i]}o.apply(undefined,[r].concat(a))}}}e.exports=a}).call(t,r(6))},function(e,t){"use strict"
var r=Object.getOwnPropertySymbols
var n=Object.prototype.hasOwnProperty
var a=Object.prototype.propertyIsEnumerable
function o(e){if(e===null||e===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(e)}function i(){try{if(!Object.assign){return false}var e=new String("abc")
e[5]="de"
if(Object.getOwnPropertyNames(e)[0]==="5"){return false}var t={}
for(var r=0;r<10;r++){t["_"+String.fromCharCode(r)]=r}var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if(n.join("")!=="0123456789"){return false}var a={}
"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e})
if(Object.keys(Object.assign({},a)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(e){return false}}e.exports=i()?Object.assign:function(e,t){var i
var u=o(e)
var f
for(var l=1;l<arguments.length;l++){i=Object(arguments[l])
for(var c in i){if(n.call(i,c)){u[c]=i[c]}}if(r){f=r(i)
for(var s=0;s<f.length;s++){if(a.call(i,f[s])){u[f[s]]=i[f[s]]}}}}return u}},function(e,t){"use strict"
var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
e.exports=r},function(e,t,r){(function(t){"use strict"
if(t.env.NODE_ENV!=="production"){var n=r(14)
var a=r(15)
var o=r(17)
var i={}}function u(e,r,u,f,l){if(t.env.NODE_ENV!=="production"){for(var c in e){if(e.hasOwnProperty(c)){var s
try{n(typeof e[c]==="function","%s: %s type `%s` is invalid; it must be a function, usually from "+"the `prop-types` package, but received `%s`.",f||"React class",u,c,typeof e[c])
s=e[c](r,c,f,u,null,o)}catch(e){s=e}a(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker "+"function must return `null` or an `Error` but returned a %s. "+"You may have forgotten to pass an argument to the type checker "+"creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and "+"shape all require an argument).",f||"React class",u,c,typeof s)
if(s instanceof Error&&!(s.message in i)){i[s.message]=true
var p=l?l():""
a(false,"Failed %s type: %s%s",u,s.message,p!=null?p:"")}}}}}e.exports=u}).call(t,r(6))},function(e,t,r){"use strict"
var n=r(13)
var a=r(14)
var o=r(17)
e.exports=function(){function e(e,t,r,n,i,u){if(u===o){return}a(false,"Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types")}e.isRequired=e
function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t}
r.checkPropTypes=n
r.PropTypes=r
return r}},function(e,t,r){"use strict"
t.__esModule=true
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
t["default"]=f
function a(e){return e&&e.__esModule?e:{default:e}}var o=r(21)
var i=a(o)
var u=n({},i["default"].noWobble,{precision:.01})
function f(e,t){return n({},u,t,{val:e})}e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}}
e.exports=t["default"]}])

});
KAdefine("javascript/node_modules/react-motion/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/react-motion/index.js")

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/react-motion-package.js.map 