KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-button-v2/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-button-v2/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-button-v2/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-typography-v1")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-spacing-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-progress-spinner-v1")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(3)
var i=r.n(o)
var a=r(2)
var c=r(5)
var l=r(9)
var u=r(4)
var f=r(1)
var s=r.n(f)
var d=r(8)
var p=r(7)
var b=r.n(p)
var y=r(6)
var v=r.n(y)
function h(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){h=function e(t){return typeof t}}else{h=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return h(e)}function m(){m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return m.apply(this,arguments)}function g(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){q(e,t,r[t])})}return e}function O(e,t){if(e==null)return{}
var r=x(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function x(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function w(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function k(e,t,r){if(t)j(e.prototype,t)
if(r)j(e,r)
return e}function S(e,t){if(t&&(h(t)==="object"||typeof t==="function")){return t}return P(e)}function P(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function C(e){C=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return C(e)}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)T(e,t)}function T(e,t){T=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return T(e,t)}function q(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var R=Object(a["addStyle"])("a")
var L=Object(a["addStyle"])("button")
var I=Object(a["addStyle"])(l["Link"])
var z=function(e){E(t,e)
function t(){w(this,t)
return S(this,C(t).apply(this,arguments))}k(t,[{key:"render",value:function e(){var t=this.props,r=t.children,o=t.skipClientNav,i=t.color,a=t.disabled,c=t.focused,l=t.hovered,s=t.href,p=t.kind,y=t.light,v=t.pressed,h=t.size,x=t.style,w=t.testId,j=t.spinner,k=t.icon,S=t["aria-label"],P=O(t,["children","skipClientNav","color","disabled","focused","hovered","href","kind","light","pressed","size","style","testId","spinner","icon","aria-label"])
var C=this.context.router
var E=i==="destructive"?f["SemanticColor"].controlDestructive:f["SemanticColor"].controlDefault
var T=k?(h==="small"?16:24)+8:0
var q=D(E,p,y,T)
var z=j||a
var N=[B.shared,z&&B.disabled,k&&B.withIcon,q.default,z&&q.disabled,!z&&(v?q.active:(l||c)&&q.focus),h==="small"&&B.small]
var M=g({"aria-disabled":z?"true":undefined,"aria-label":S,"data-test-id":w,role:"button",style:[N,x]},P)
var W=h==="small"?u["LabelSmall"]:u["LabelLarge"]
var A=n["createElement"](W,{style:[B.text,j&&B.hiddenText]},k&&n["createElement"](b.a,{size:h,color:"currentColor",icon:k,style:B.icon}),r)
var F=n["createElement"](n["Fragment"],null,A,j&&n["createElement"](d["CircularSpinner"],{style:B.spinner,size:{medium:"small",small:"xsmall"}[h],light:p==="primary"}))
if(s&&!z){return C&&!o?n["createElement"](I,m({},M,{to:s}),F):n["createElement"](R,m({},M,{href:s}),F)}else{return n["createElement"](L,m({type:"button"},M,{disabled:z}),F)}}}])
return t}(n["Component"])
q(z,"contextTypes",{router:i.a.any})
var B=c["StyleSheet"].create({shared:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",height:40,paddingTop:0,paddingBottom:0,paddingLeft:16,paddingRight:16,border:"none",borderRadius:4,cursor:"pointer",outline:"none",textDecoration:"none",boxSizing:"border-box",touchAction:"manipulation"},withIcon:{paddingLeft:12},disabled:{cursor:"auto"},small:{height:32},text:{display:"flex",alignItems:"center",fontWeight:"bold",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",pointerEvents:"none"},hiddenText:{visibility:"hidden"},spinner:{position:"absolute"},icon:{paddingRight:v.a.xSmall}})
var N={}
var D=function e(t,r,n,o){var i=t+r+n.toString()+o.toString()
if(N[i]){return N[i]}var a=s.a.white,l=s.a.white64,u=s.a.offBlack32,d=s.a.offBlack50,p=s.a.darkBlue
var b=Object(f["mix"])(Object(f["fade"])(t,.32),a)
var y=Object(f["mix"])(u,t)
var v={}
if(r==="primary"){v={default:{background:n?a:t,color:n?t:a},focus:{boxShadow:"0 0 0 1px ".concat(n?p:a,", 0 0 0 3px ").concat(n?a:t)},active:{boxShadow:"0 0 0 1px ".concat(n?p:a,", 0 0 0 3px ").concat(n?b:y),background:n?b:y,color:n?y:b},disabled:{background:n?b:u,color:n?t:l,cursor:"default"}}}else if(r==="secondary"){v={default:{background:"none",color:n?a:t,borderColor:n?l:d,borderStyle:"solid",borderWidth:1},focus:{background:n?"transparent":a,borderColor:n?a:t,borderWidth:2,paddingLeft:o?11:15,paddingRight:15},active:{background:n?y:b,color:n?b:y,borderColor:n?b:y,borderWidth:2,paddingLeft:o?11:15,paddingRight:15},disabled:{color:n?b:u,borderColor:n?b:u,cursor:"default"}}}else if(r==="tertiary"){v={default:{background:"none",color:n?a:t,paddingLeft:0,paddingRight:0},focus:{":after":{content:"''",position:"absolute",height:2,width:"calc(100% - ".concat(o,"px)"),right:0,bottom:"calc(50% - 11px)",background:n?a:t,borderRadius:2}},active:{color:n?b:y,":after":{content:"''",position:"absolute",height:2,width:"calc(100% - ".concat(o,"px)"),right:0,bottom:"calc(50% - 11px)",background:n?b:y,borderRadius:2}},disabled:{color:n?b:u,cursor:"default"}}}else{throw new Error("Button kind not recognized")}N[i]=c["StyleSheet"].create(v)
return N[i]}
function M(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){M=function e(t){return typeof t}}else{M=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return M(e)}function W(){W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return W.apply(this,arguments)}function A(e,t){if(e==null)return{}
var r=F(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function F(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function G(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function J(e,t,r){if(t)H(e.prototype,t)
if(r)H(e,r)
return e}function K(e,t){if(t&&(M(t)==="object"||typeof t==="function")){return t}return Q(e)}function Q(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function U(e){U=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return U(e)}function V(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)X(e,t)}function X(e,t){X=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return X(e,t)}function Y(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Z=function(e){V(t,e)
function t(){G(this,t)
return K(this,U(t).apply(this,arguments))}J(t,[{key:"render",value:function e(){var t=this.props,r=t.onClick,o=t.href,i=t.children,c=t.skipClientNav,l=t.spinner,u=t.disabled,f=A(t,["onClick","href","children","skipClientNav","spinner","disabled"])
var s=Object(a["getClickableBehavior"])(o,c,this.context.router)
return n["createElement"](s,{disabled:l||u,href:o,onClick:r,role:"button"},function(e,t){return n["createElement"](z,W({},f,e,t,{disabled:u,spinner:l,skipClientNav:c,href:o}),i)})}}])
return t}(n["Component"])
Y(Z,"defaultProps",{color:"default",kind:"primary",light:false,size:"medium",disabled:false,spinner:false,"aria-label":""})
Y(Z,"contextTypes",{router:i.a.any})
r.d(t,"default",function(){return Z})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-color-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-color-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-color-v1/dist/index.js", function(require, module, exports) {
module.exports=function(r){var e={}
function t(n){if(e[n]){return e[n].exports}var a=e[n]={i:n,l:false,exports:{}}
r[n].call(a.exports,a,a.exports,t)
a.l=true
return a.exports}t.m=r
t.c=e
t.d=function(r,e,n){if(!t.o(r,e)){Object.defineProperty(r,e,{enumerable:true,get:n})}}
t.r=function(r){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(r,"__esModule",{value:true})}
t.t=function(r,e){if(e&1)r=t(r)
if(e&8)return r
if(e&4&&typeof r==="object"&&r&&r.__esModule)return r
var n=Object.create(null)
t.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:r})
if(e&2&&typeof r!="string")for(var a in r)t.d(n,a,function(e){return r[e]}.bind(null,a))
return n}
t.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r}
t.d(e,"a",e)
return e}
t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}
t.p=""
return t(t.s=0)}([function(r,e,t){"use strict"
t.r(e)
function n(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{}
var n=Object.keys(t)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))}n.forEach(function(e){a(r,e,t[e])})}return r}function a(r,e,t){if(e in r){Object.defineProperty(r,e,{value:t,enumerable:true,configurable:true,writable:true})}else{r[e]=t}return r}var o=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
var f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i
var c=/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)$/i
var u=function r(e){if(typeof e!=="string"){throw new Error("Failed to parse color: ".concat(e))}var t=e.match(f)
if(t){return{r:parseInt("".concat(t[1]).concat(t[1]),16),g:parseInt("".concat(t[2]).concat(t[2]),16),b:parseInt("".concat(t[3]).concat(t[3]),16),a:1}}var n=e.match(o)
if(n){return{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16),a:1}}var a=e.match(c)
if(a){return{r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:a[4]?parseFloat(a[4]):1}}throw new Error("Failed to parse color: ".concat(e))}
var i=function r(e){var t=Math.round(e.r)
var n=Math.round(e.g)
var a=Math.round(e.b)
if(e.a===1){var o=function r(e){var t=e.toString(16)
return t.length===1?t+t:t}
return"#".concat(o(t)).concat(o(n)).concat(o(a))}else{return"rgba(".concat(t,",").concat(n,",").concat(a,",").concat(e.a.toFixed(2),")")}}
var l=function r(e,t){if(t<0||t>1){throw new Error("Percentage must be between 0 and 1")}var a=u(e)
return i(n({},a,{a:a.a*t}))}
var d=function r(e,t){var n=u(e)
var a=u(t)
return i({r:n.r*n.a+a.r*(1-n.a),g:n.g*n.a+a.g*(1-n.a),b:n.b*n.a+a.b*(1-n.a),a:a.a})}
t.d(e,"default",function(){return p})
t.d(e,"SemanticColor",function(){return v})
t.d(e,"mix",function(){return d})
t.d(e,"fade",function(){return l})
var s="#21242c"
var b="#ffffff"
var p={blue:"#1865f2",purple:"#9059ff",green:"#00a60e",gold:"#ffb100",red:"#d92916",offBlack:s,offBlack64:l(s,.64),offBlack50:l(s,.5),offBlack32:l(s,.32),offBlack16:l(s,.16),offBlack8:l(s,.08),offWhite:"#f7f8fa",white:b,white64:l(b,.64),white50:l(b,.5),darkBlue:"#0a2a66",teal:"#14bf96",lightBlue:"#37c5fd",pink:"#fa50ae"}
var v={controlDefault:p.blue,controlDestructive:p.red}}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-core-v2/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-core-v2/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-core-v2/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=6)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-spacing-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t,r){"use strict";(function(e){r.d(t,"c",function(){return g})
r.d(t,"b",function(){return w})
r.d(t,"a",function(){return O})
var n=r(2)
var o=r.n(n)
var i=r(0)
var u=r.n(i)
var a=r(4)
var f=r.n(a)
function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return c.apply(this,arguments)}function l(e,t){return y(e)||p(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,t){var r=[]
var n=true
var o=false
var i=undefined
try{for(var u=e[Symbol.iterator](),a;!(n=(a=u.next()).done);n=true){r.push(a.value)
if(t&&r.length===t)break}}catch(e){o=true
i=e}finally{try{if(!n&&u["return"]!=null)u["return"]()}finally{if(o)throw i}}return r}function y(e){if(Array.isArray(e))return e}function d(e){return b(e)||v(e)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function b(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function m(e){var t=[]
if(!e){return t}else if(Array.isArray(e)){var r=true
var n=false
var o=undefined
try{for(var i=e[Symbol.iterator](),u;!(r=(u=i.next()).done);r=true){var a=u.value
t.push.apply(t,d(m(a)))}}catch(e){n=true
o=e}finally{try{if(!r&&i.return!=null){i.return()}}finally{if(n){throw o}}}}else{t.push(e)}return t}function g(t){var r=[]
var o=[]
if(!t){return{style:{},className:""}}var i=typeof e!=="undefined"&&e.SNAPSHOT_INLINE_APHRODITE
m(t).forEach(function(e){if(e._definition){if(i){var t={}
var n=Object.entries(e._definition)
for(var u=0;u<n.length;u++){var a=l(n[u],2),f=a[0],c=a[1]
t[f.replace(/-[a-z]/g,function(e){return e[1].toUpperCase()})]=c}o.push(t)}else{r.push(e)}}else{o.push(e)}})
var u=Object.assign.apply(Object,[{}].concat(o))
if(o.length>0&&!i){var a=n["StyleSheet"].create({inlineStyles:u})
r.push(a.inlineStyles)}return{style:i?u:{},className:n["css"].apply(void 0,r)}}var w={mediaSize:f.a.string,mediaSpec:f.a.object}
function O(e){var t=function t(r,n){var o=n.mediaSize,u=n.mediaSpec
return i["createElement"](e,c({},r,{mediaSize:o,mediaSpec:u}))}
t.contextTypes=w
return t}}).call(this,r(7))},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r.n(n)
function i(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){i=function e(t){return typeof t}}else{i=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return i(e)}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function a(e,t){if(t&&(i(t)==="object"||typeof t==="function")){return t}return y(e)}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return f(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)c(e.prototype,t)
if(r)c(e,r)
return e}function s(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)p(e,t)}function p(e,t){p=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return p(e,t)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var h=function e(t){switch(t){case"link":return{triggerOnEnter:true,triggerOnSpace:false}
case"checkbox":case"radio":case"listbox":case"option":return{triggerOnEnter:false,triggerOnSpace:true}
case"button":case"menuitem":case"menu":default:return{triggerOnEnter:true,triggerOnSpace:true}}}
var v={onClick:function e(){return void 0},onMouseEnter:function e(){return void 0},onMouseLeave:function e(){return void 0},onMouseDown:function e(){return void 0},onMouseUp:function e(){return void 0},onDragStart:function e(){return void 0},onTouchStart:function e(){return void 0},onTouchEnd:function e(){return void 0},onTouchCancel:function e(){return void 0},onKeyDown:function e(){return void 0},onKeyUp:function e(){return void 0},onFocus:function e(){return void 0},onBlur:function e(){return void 0},tabIndex:-1}
var b={enter:13,space:32}
var m={hovered:false,focused:false,pressed:false}
var g=function(e){s(t,e)
l(t,null,[{key:"getDerivedStateFromProps",value:function e(t,r){if(t.disabled){return m}else{return null}}}])
function t(e){var r
u(this,t)
r=a(this,f(t).call(this,e))
d(y(y(r)),"waitingForClick",void 0)
d(y(y(r)),"enterClick",void 0)
d(y(y(r)),"dragging",void 0)
d(y(y(r)),"handleClick",function(e){if(r.enterClick){return}else if(r.props.onClick){r.waitingForClick=false
r.props.onClick(e)}})
d(y(y(r)),"handleMouseEnter",function(e){if(e.buttons===1){r.dragging=true
r.setState({pressed:true})}else if(!r.waitingForClick){r.setState({hovered:true})}})
d(y(y(r)),"handleMouseLeave",function(){if(!r.waitingForClick){r.dragging=false
r.setState({hovered:false,pressed:false,focused:false})}})
d(y(y(r)),"handleMouseDown",function(){r.setState({pressed:true})})
d(y(y(r)),"handleMouseUp",function(e){if(r.dragging){r.dragging=false
r.handleClick(e)}r.setState({pressed:false,focused:false})})
d(y(y(r)),"handleDragStart",function(e){r.dragging=true
e.preventDefault()})
d(y(y(r)),"handleTouchStart",function(){r.setState({pressed:true})})
d(y(y(r)),"handleTouchEnd",function(){r.setState({pressed:false})
r.waitingForClick=true})
d(y(y(r)),"handleTouchCancel",function(){r.setState({pressed:false})
r.waitingForClick=true})
d(y(y(r)),"handleKeyDown",function(e){var t=e.which||e.keyCode
var n=h(r.props.role),o=n.triggerOnEnter,i=n.triggerOnSpace
if(o&&t===b.enter||i&&t===b.space){e.preventDefault()
r.setState({pressed:true})}else if(!o&&t===b.enter){r.enterClick=true}})
d(y(y(r)),"handleKeyUp",function(e){var t=e.which||e.keyCode
var n=h(r.props.role),o=n.triggerOnEnter,i=n.triggerOnSpace
if(o&&t===b.enter||i&&t===b.space){if(t===b.space){e.preventDefault()}r.setState({pressed:false,focused:true})
if(r.props.onClick){r.props.onClick(e)}r.maybeNavigate()}else if(!o&&t===b.enter){r.enterClick=false}})
d(y(y(r)),"handleFocus",function(e){r.setState({focused:true})})
d(y(y(r)),"handleBlur",function(e){r.setState({focused:false,pressed:false})})
d(y(y(r)),"maybeNavigate",function(){var e=r.props,t=e.history,n=e.href
if(n){if(t){t.push(n)}else{window.location.assign(n)}}})
r.state=m
r.waitingForClick=false
r.enterClick=false
r.dragging=false
return r}l(t,[{key:"render",value:function e(){var t=this.props.disabled?v:{onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onDragStart:this.handleDragStart,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0}
var r=this.props.children
return r&&r(this.state,t)}}])
return t}(o.a.Component)
d(g,"defaultProps",{disabled:false})
var w=r(1)
var O=r.n(w)
var S=["small","medium","large"]
var j=O.a.large
var E={small:{query:"(max-width: 767px)",totalColumns:4,gutterWidth:O.a.medium,marginWidth:O.a.medium},medium:{query:"(min-width: 768px) and (max-width: 1023px)",totalColumns:8,gutterWidth:O.a.xLarge,marginWidth:O.a.large},large:{query:"(min-width: 1024px)",totalColumns:12,gutterWidth:O.a.xLarge,marginWidth:j,maxWidth:1120+j*2}}
var C={large:{query:"(min-width: 1px)",totalColumns:12,gutterWidth:O.a.xLarge,marginWidth:O.a.medium}}
var P={small:{query:"(max-width: 767px)",totalColumns:4,gutterWidth:O.a.medium,marginWidth:O.a.medium},large:{query:"(min-width: 768px)",totalColumns:12,gutterWidth:O.a.xLarge,marginWidth:O.a.xxLarge}}
var k=r(3)
function x(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){x=function e(t){return typeof t}}else{x=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return x(e)}function T(){T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return T.apply(this,arguments)}function M(e,t){if(e==null)return{}
var r=z(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function z(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function D(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function A(e,t,r){if(t)R(e.prototype,t)
if(r)R(e,r)
return e}function I(e,t){if(t&&(x(t)==="object"||typeof t==="function")){return t}return q(e)}function W(e){W=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return W(e)}function F(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)L(e,t)}function L(e,t){L=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return L(e,t)}function q(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function N(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var H=function(e){F(t,e)
function t(e){var r
D(this,t)
r=I(this,W(t).call(this,e))
N(q(q(r)),"watchHandlers",void 0)
var n=e.ssrSize,o=e.size,i=e.spec
if(o){r.state={size:o}
return I(r)}if(n&&r.isServerSide()){r.state={size:n}
return I(r)}r.watchHandlers={}
var u=true
var a=false
var f=undefined
try{var c=function e(){var n=s.value
if(!i[n]){return"continue"}var o=i[n].query
if(!o){return"continue"}if(!t.WATCHERS[o]){t.WATCHERS[o]=window.matchMedia(o)}var u=t.WATCHERS[o]
var a=r.watchHandlers[o]=function(e){if(e.matches){r.setState({size:n})}}
u.addListener(a)
if(u.matches){r.state={size:n}}}
for(var l=S[Symbol.iterator](),s;!(u=(s=l.next()).done);u=true){var p=c()
if(p==="continue")continue}}catch(e){a=true
f=e}finally{try{if(!u&&l.return!=null){l.return()}}finally{if(a){throw f}}}if(!r.state||!r.state.size){throw new Error("Matching media query not found for MediaLayout.")}return r}A(t,[{key:"componentWillUnmount",value:function e(){if(this.isServerSide()){return}var r=Object.keys(t.WATCHERS)
for(var n=0;n<r.length;n++){var o=r[n]
var i=t.WATCHERS[o]
if(i){var u=this.watchHandlers[o]
i.removeListener(u)
delete this.watchHandlers[o]}}}},{key:"isServerSide",value:function e(){return typeof window==="undefined"||!window.matchMedia}},{key:"render",value:function e(){var t=this.props,r=t.ssrSize,o=t.size,i=t.children,u=M(t,["ssrSize","size","children"])
return n["createElement"](U,T({},u,{size:this.state.size}),i)}}])
return t}(n["Component"])
N(H,"WATCHERS",{})
N(H,"defaultProps",{ssrSize:"large",spec:E})
var U=function(e){F(t,e)
function t(){D(this,t)
return I(this,W(t).apply(this,arguments))}A(t,[{key:"getChildContext",value:function e(){return{mediaSize:this.props.size,mediaSpec:this.props.spec}}},{key:"render",value:function e(){return n["createElement"](n["Fragment"],null,this.props.children)}}])
return t}(n["Component"])
N(U,"childContextTypes",k["b"])
var B=r(2)
function K(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){K=function e(t){return typeof t}}else{K=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return K(e)}function V(){V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return V.apply(this,arguments)}function J(e,t){if(e==null)return{}
var r=X(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function X(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function Y(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function G(e,t,r){if(t)Z(e.prototype,t)
if(r)Z(e,r)
return e}function Q(e,t){if(t&&(K(t)==="object"||typeof t==="function")){return t}return ee(e)}function ee(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function te(e){te=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return te(e)}function re(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ne(e,t)}function ne(e,t){ne=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return ne(e,t)}function oe(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var ie=/^h[1-6]$/
var ue=B["StyleSheet"].create({text:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},header:{marginTop:0,marginBottom:0}})
var ae=function(e){re(t,e)
function t(){Y(this,t)
return Q(this,te(t).apply(this,arguments))}G(t,[{key:"render",value:function e(){var t=this.props,r=t.children,n=t.style,i=t.tag,u=J(t,["children","style","tag"])
var a=ie.test(i)
var f=Object(k["c"])([ue.text,a&&ue.header,n])
return o.a.createElement(i,V({},u,{style:f.style,className:f.className}),r)}}])
return t}(o.a.Component)
oe(ae,"defaultProps",{tag:"span"})
var fe=r(4)
function ce(){ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return ce.apply(this,arguments)}function le(e,t){if(e==null)return{}
var r=se(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function se(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function pe(e,t){function r(r){var o=r.style,i=le(r,["style"])
var u=typeof e==="string"?ye[e]:null
var a=Object(k["c"])([u,t,o]),f=a.className,c=a.style
return n["createElement"](e,ce({},i,{className:f,style:c}))}return r}var ye=B["StyleSheet"].create({button:{margin:0,"::-moz-focus-inner":{border:0}}})
function de(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){de=function e(t){return typeof t}}else{de=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return de(e)}function he(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ve(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function be(e,t,r){if(t)ve(e.prototype,t)
if(r)ve(e,r)
return e}function me(e,t){if(t&&(de(t)==="object"||typeof t==="function")){return t}return ge(e)}function ge(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function we(e){we=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return we(e)}function Oe(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Se(e,t)}function Se(e,t){Se=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Se(e,t)}var je=B["StyleSheet"].create({default:{alignItems:"stretch",borderWidth:0,borderStyle:"solid",boxSizing:"border-box",display:"flex",flexDirection:"column",margin:0,padding:0,position:"relative",zIndex:0,minHeight:0,minWidth:0}})
var _e=pe("div",je.default)
var Ee=function(e){Oe(t,e)
function t(){he(this,t)
return me(this,we(t).apply(this,arguments))}be(t,[{key:"render",value:function e(){return n["createElement"](_e,this.props)}}])
return t}(n["Component"])
function Ce(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ce=function e(t){return typeof t}}else{Ce=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ce(e)}function Pe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ke(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function xe(e,t,r){if(t)ke(e.prototype,t)
if(r)ke(e,r)
return e}function Te(e,t){if(t&&(Ce(t)==="object"||typeof t==="function")){return t}return Re(e)}function Me(e){Me=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Me(e)}function ze(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)De(e,t)}function De(e,t){De=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return De(e,t)}function Re(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Ae(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Ie=n["createContext"]("root")
var We=function(e){ze(t,e)
function t(){var e
var r
Pe(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=Te(this,(e=Me(t)).call.apply(e,[this].concat(o)))
Ae(Re(Re(r)),"state",{mounted:false})
Ae(Re(Re(r)),"_isTheRootComponent",false)
return r}xe(t,[{key:"componentDidMount",value:function e(){if(this._isTheRootComponent){this.setState({mounted:true})}}},{key:"_renderAsRootComponent",value:function e(){var t=this.state.mounted
var r=this.props,o=r.children,i=r.placeholder
this._isTheRootComponent=true
if(t){return n["createElement"](Ie.Provider,{value:"standard"},o())}if(i){return n["createElement"](Ie.Provider,{value:"initial"},i())}return null}},{key:"_maybeRender",value:function e(t){var r=this.props,n=r.children,o=r.placeholder
switch(t){default:console.log("We got a render state we don't understand: \"".concat(JSON.stringify(t),'"'))
return this._maybeRender("root")
case"root":return this._renderAsRootComponent()
case"initial":if(o){return o()}return null
case"standard":return n()}}},{key:"render",value:function e(){var t=this
return n["createElement"](Ie.Consumer,null,function(e){return t._maybeRender(e)})}}])
return t}(n["Component"])
function Fe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Le(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function qe(e,t,r){if(t)Le(e.prototype,t)
if(r)Le(e,r)
return e}function Ne(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var He=function(){function e(t){var r=this
Fe(this,e)
Ne(this,"_uniqueFactoryName",void 0)
Ne(this,"get",function(e){var t=e.toLowerCase()
if(!r._hasValidIdChars(e)){throw new Error("Invalid identifier key: ".concat(e))}return"".concat(r._uniqueFactoryName,"-").concat(t)})
t=typeof t==="string"?t:""
var n=t.toLowerCase()
if(!this._hasValidIdChars(n)){throw new Error("Invalid factory scope: ".concat(t))}this._uniqueFactoryName="uid-".concat(n,"-").concat(e._factoryUniquenessCounter++)}qe(e,[{key:"_hasValidIdChars",value:function e(t){if(typeof t!=="string"){return false}var r=t.replace(/[^\d\w-]/g,"-")
return t===r}}])
return e}()
Ne(He,"_factoryUniquenessCounter",0)
function Ue(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Be(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Ke(e,t,r){if(t)Be(e.prototype,t)
if(r)Be(e,r)
return e}function Ve(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Je=function(){function e(){Ue(this,e)}Ke(e,[{key:"get",value:function e(t){return t}}])
return e}()
Ve(Je,"Default",new Je)
var Xe=Je.Default
function Ye(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ye=function e(t){return typeof t}}else{Ye=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ye(e)}function Ze(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function $e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Ge(e,t,r){if(t)$e(e.prototype,t)
if(r)$e(e,r)
return e}function Qe(e,t){if(t&&(Ye(t)==="object"||typeof t==="function")){return t}return nt(e)}function et(e){et=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return et(e)}function tt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)rt(e,t)}function rt(e,t){rt=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return rt(e,t)}function nt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ot(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var it=function(e){tt(t,e)
function t(){var e
var r
Ze(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=Qe(this,(e=et(t)).call.apply(e,[this].concat(o)))
ot(nt(nt(r)),"_idFactory",void 0)
return r}Ge(t,[{key:"_performRender",value:function e(t){var r=this.props,n=r.children,o=r.mockOnFirstRender,i=r.scope
if(t){if(o){return n(Xe)}return null}if(!this._idFactory){this._idFactory=new He(i)}return n(this._idFactory)}},{key:"render",value:function e(){var t=this
return n["createElement"](We,{placeholder:function e(){return t._performRender(true)}},function(){return t._performRender(false)})}}])
return t}(n["Component"])
var ut=r(5)
function at(e){return/^(https?:)?\/\//i.test(e)}var ft=Object(ut["withRouter"])(g)
function ct(e,t,r){if(r&&t!==true&&e&&!at(e)){return ft}return g}function lt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function st(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function pt(e,t,r){if(t)st(e.prototype,t)
if(r)st(e,r)
return e}function yt(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var dt=function e(t,r){return getComputedStyle(t).getPropertyValue(r)}
var ht=function e(t){return dt(t,"overflow")+dt(t,"overflow-y")+dt(t,"overflow-x")}
var vt=function e(t){return/(auto|scroll)/.test(ht(t))}
var bt=Symbol.iterator
var mt=function(){function e(t){lt(this,e)
yt(this,"done",false)
yt(this,"parentElement",void 0)
if(!(t instanceof HTMLElement)){this.done=true}else{this.parentElement=t.parentElement}}pt(e,[{key:bt,value:function e(){return this}},{key:"next",value:function e(){if(this.done){return{done:true}}var t
do{t=this.parentElement
this.parentElement=this.parentElement&&this.parentElement.parentElement}while(t&&!vt(t))
if(!t){this.done=true
if(!document.documentElement){return{done:true}}return{done:false,value:document.documentElement}}return{done:false,value:t}}}])
return e}()
function gt(e){return Object.defineProperty({},Symbol.iterator,{value:function t(){return new mt(e)},writable:true})}function wt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){Ot(e,t,r[t])})}return e}function Ot(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function St(){return{horizontal:null,vertical:null}}function jt(){return{horizontal:"within",vertical:"within"}}function _t(e,t,r){var n=function e(t){return r==="horizontal"?t.left:t.top}
var o=function e(t){return r==="horizontal"?t.right:t.bottom}
if(o(e)<=n(t)){return"before"}else if(n(e)>=o(t)){return"after"}else{return"within"}}function Et(e,t){var r=t.currentStyle||window.getComputedStyle(t)
var n=wt({},t.getBoundingClientRect())
if(t===document.body){n.height=t.scrollHeight
n.bottom=n.top+n.height}var o=r.overflowX==="visible"?"within":_t(e,n,"horizontal")
var i=r.overflowY==="visible"?"within":_t(e,n,"vertical")
return{horizontal:o,vertical:i}}function Ct(e,t){if(!e){return St()}var r=e.getBoundingClientRect()
if(t){return Et(r,t)}var n=true
var o=false
var i=undefined
try{for(var u=gt(e)[Symbol.iterator](),a;!(n=(a=u.next()).done);n=true){var f=a.value
var c=Et(r,f)
if(c.vertical!=="within"||c.horizontal!=="within"){return c}}}catch(e){o=true
i=e}finally{try{if(!n&&u.return!=null){u.return()}}finally{if(o){throw i}}}return jt()}r.d(t,"ClickableBehavior",function(){return g})
r.d(t,"MediaLayout",function(){return H})
r.d(t,"Text",function(){return ae})
r.d(t,"View",function(){return Ee})
r.d(t,"WithSSRPlaceholder",function(){return We})
r.d(t,"UniqueIDProvider",function(){return it})
r.d(t,"addStyle",function(){return pe})
r.d(t,"getClickableBehavior",function(){return ct})
r.d(t,"getElementIntersection",function(){return Ct})
r.d(t,"VALID_MEDIA_SIZES",function(){return S})
r.d(t,"MEDIA_DEFAULT_SPEC",function(){return E})
r.d(t,"MEDIA_INTERNAL_SPEC",function(){return C})
r.d(t,"MEDIA_MODAL_SPEC",function(){return P})
r.d(t,"MediaLayoutWrapper",function(){return k["a"]})},function(e,t){var r
r=function(){return this}()
try{r=r||Function("return this")()||(1,eval)("this")}catch(e){if(typeof window==="object")r=window}e.exports=r}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-dropdown-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-dropdown-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-dropdown-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=14)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-spacing-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-v1")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-typography-v1")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-layout-v1")},function(e,t){e.exports=require("popper")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-modal-v1")},function(e,t){e.exports=require("react-popper")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(4)
var i=r(13)
var a=r(8)
var l=r.n(a)
var u=r(1)
var c=r.n(u)
var s=r(3)
var f=r.n(s)
var p=r(7)
var d=r(2)
function b(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){b=function e(t){return typeof t}}else{b=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return b(e)}function h(){h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return h.apply(this,arguments)}function y(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){j(e,t,r[t])})}return e}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function g(e,t,r){if(t)v(e.prototype,t)
if(r)v(e,r)
return e}function O(e,t){if(t&&(b(t)==="object"||typeof t==="function")){return t}return w(e)}function w(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function S(e){S=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return S(e)}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)x(e,t)}function x(e,t){x=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return x(e,t)}function j(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var C=c.a.blue,E=c.a.white,P=c.a.offBlack,I=c.a.offBlack32
var T=Object(d["addStyle"])("a")
var R=Object(d["addStyle"])("button")
var L=Object(d["addStyle"])(i["Link"])
var B=function(e){k(t,e)
function t(){m(this,t)
return O(this,S(t).apply(this,arguments))}g(t,[{key:"render",value:function e(){var t=this.props,r=t.skipClientNav,o=t.disabled,i=t.href,a=t.indent,l=t.label,u=t.onClick,c=t.role,s=t.testId
var f=this.context.router
var b=Object(d["getClickableBehavior"])(i,r,f)
return n["createElement"](b,{disabled:o,onClick:u,href:i,role:c},function(e,t){var u=e.pressed,d=e.hovered,b=e.focused
var m=[F.shared,o&&F.disabled,!o&&(u?F.active:(d||b)&&F.focus)]
var v=y({"data-test-id":s,disabled:o,role:c,style:[m]},t)
var g=n["createElement"](n["Fragment"],null,n["createElement"](p["LabelLarge"],{style:[a&&F.indent,F.label]},l))
if(i&&!o){return f&&!r?n["createElement"](L,h({},v,{to:i}),g):n["createElement"](T,h({},v,{href:i}),g)}else{return n["createElement"](R,h({type:"button"},v,{disabled:o}),g)}})}}])
return t}(n["Component"])
j(B,"defaultProps",{disabled:false,indent:false,role:"menuitem"})
j(B,"contextTypes",{router:l.a.any})
var F=o["StyleSheet"].create({shared:{background:E,color:P,textDecoration:"none",border:"none",outline:"none",flexDirection:"row",alignItems:"center",display:"flex",height:40,minHeight:40,paddingLeft:f.a.medium,paddingRight:f.a.medium,touchAction:"manipulation"},label:{whiteSpace:"nowrap",userSelect:"none"},indent:{marginLeft:f.a.medium},focus:{color:E,background:C},active:{color:Object(u["mix"])(Object(u["fade"])(C,.32),E),background:Object(u["mix"])(I,C)},disabled:{color:I,cursor:"default"}})
var D=r(5)
var A=r.n(D)
var M=c.a.offBlack,W=c.a.offBlack32,V=c.a.white
function N(e){var t=e.disabled,r=e.selected,o=e.pressed,i=e.hovered,a=e.focused
return n["createElement"](A.a,{icon:D["icons"].check,size:"small",color:t?W:o||i||a?V:M,style:[q.bounds,!r&&q.hide]})}var q=o["StyleSheet"].create({bounds:{minHeight:16,minWidth:16},hide:{visibility:"hidden"}})
var z={small:"M11.263 4.324a1 1 0 1 1 1.474 1.352l-5.5 6a1 1 0 0 1-1.505-.036l-2.5-3a1 1 0 1 1 1.536-1.28L6.536 9.48l4.727-5.157z"}
var U=c.a.blue,H=c.a.white,K=c.a.offBlack16,Y=c.a.offBlack32,G=c.a.offBlack50,X=c.a.offWhite
function J(e){var t=e.disabled,r=e.selected,o=e.pressed,i=e.hovered,a=e.focused
var l=Object(u["mix"])(Y,U)
var c=o||i||a
var s=t?X:r&&!c?U:H
var f=t?Y:c?o?l:U:H
return n["createElement"](d["View"],{style:[Q.checkbox,(c||r&&!t)&&Q.noBorder,t&&Q.disabledCheckbox,{backgroundColor:s}]},r&&n["createElement"](A.a,{icon:z,size:"small",color:f,style:[t&&r&&Q.disabledCheckFormatting]}))}var Q=o["StyleSheet"].create({checkbox:{minHeight:16,minWidth:16,borderRadius:3,borderWidth:1,borderStyle:"solid",borderColor:G},noBorder:{borderWidth:0},disabledCheckbox:{borderColor:K,backgroundColor:X},disabledCheckFormatting:{position:"absolute",top:-1,left:-1}})
function Z(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Z=function e(t){return typeof t}}else{Z=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Z(e)}function ee(){ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return ee.apply(this,arguments)}function te(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function re(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function ne(e,t,r){if(t)re(e.prototype,t)
if(r)re(e,r)
return e}function oe(e,t){if(t&&(Z(t)==="object"||typeof t==="function")){return t}return ue(e)}function ie(e){ie=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ie(e)}function ae(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)le(e,t)}function le(e,t){le=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return le(e,t)}function ue(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ce(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var se=function(e){ae(t,e)
function t(){var e
var r
te(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=oe(this,(e=ie(t)).call.apply(e,[this].concat(o)))
ce(ue(ue(r)),"handleClick",function(){var e=r.props,t=e.onClick,n=e.onToggle,o=e.value
n(o)
if(t){t()}})
return r}ne(t,[{key:"getCheckComponent",value:function e(){if(this.props.variant==="check"){return N}else{return J}}},{key:"render",value:function e(){var t=this.props,r=t.disabled,o=t.label,i=t.role,a=t.selected,l=t.testId
var u=Object(d["getClickableBehavior"])()
var c=this.getCheckComponent()
return n["createElement"](u,{disabled:r,onClick:this.handleClick,role:i},function(e,t){var u=e.pressed,s=e.hovered,f=e.focused
var b=[he.itemContainer,u?he.active:(s||f)&&he.focus,r&&he.disabled]
return n["createElement"](d["View"],ee({"data-test-id":l,style:b,"aria-selected":a?"true":"false",role:i},t),n["createElement"](c,ee({disabled:r,selected:a},e)),n["createElement"](p["LabelLarge"],{style:he.label},o))})}}])
return t}(n["Component"])
ce(se,"defaultProps",{disabled:false,onToggle:function e(){return void 0},role:"option",selected:false})
ce(se,"contextTypes",{router:l.a.any})
var fe=c.a.blue,pe=c.a.white,de=c.a.offBlack,be=c.a.offBlack32
var he=o["StyleSheet"].create({itemContainer:{flexDirection:"row",backgroundColor:pe,color:de,alignItems:"center",height:40,minHeight:40,border:0,outline:0,paddingLeft:f.a.xSmall,paddingRight:f.a.medium,whiteSpace:"nowrap",cursor:"default"},focus:{color:pe,background:fe},active:{color:Object(u["mix"])(Object(u["fade"])(fe,.32),pe),background:Object(u["mix"])(be,fe)},disabled:{color:be,background:pe},label:{whiteSpace:"nowrap",userSelect:"none",marginLeft:f.a.xSmall},hide:{visibility:"hidden"}})
function ye(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ye=function e(t){return typeof t}}else{ye=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return ye(e)}function me(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ve(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function ge(e,t,r){if(t)ve(e.prototype,t)
if(r)ve(e,r)
return e}function Oe(e,t){if(t&&(ye(t)==="object"||typeof t==="function")){return t}return we(e)}function we(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Se(e){Se=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Se(e)}function ke(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)xe(e,t)}function xe(e,t){xe=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return xe(e,t)}var je=function(e){ke(t,e)
function t(){me(this,t)
return Oe(this,Se(t).apply(this,arguments))}ge(t,[{key:"render",value:function e(){return n["createElement"](d["View"],{style:Ce.separator})}}])
return t}(n["Component"])
var Ce=o["StyleSheet"].create({separator:{backgroundColor:c.a.offBlack16,height:1,minHeight:1,marginTop:f.a.xxxSmall,marginBottom:f.a.xxxSmall}})
var Ee=r(6)
var Pe=r.n(Ee)
var Ie=r(12)
var _e=r(11)
var Te=r(10)
var Re=r.n(Te)
function Le(e){var t=e.getBoundingClientRect()
var r=e.currentStyle||window.getComputedStyle(e)
var n=t.left+parseFloat(r.marginLeft)+parseFloat(r.paddingLeft)+parseFloat(r.borderLeftWidth)
var o=t.top+parseFloat(r.marginTop)+parseFloat(r.paddingTop)+parseFloat(r.borderTopWidth)
var i=document.elementFromPoint(n,o)
var a=t.right-parseFloat(r.marginRight)-parseFloat(r.paddingRight)-parseFloat(r.borderRightWidth)
var l=t.bottom-parseFloat(r.marginBottom)-parseFloat(r.paddingBottom)-parseFloat(r.borderBottomWidth)
var u=document.elementFromPoint(a,l)
var c=i&&(e.contains(i)||i.contains(e))
var s=u&&(e.contains(u)||u.contains(e))
return!c&&!s}function Be(e){var t=e.instance.reference
var r=Object(d["getElementIntersection"])(t),n=r.horizontal,o=r.vertical
var i=n!=="within"||o!=="within"||Le(t)
if(i){if(e.hide){return e}e.hide=true
e.attributes["x-out-of-boundaries"]=""}else{if(!e.hide){return e}e.hide=false
e.attributes["x-out-of-boundaries"]=false}return e}var Fe={enabled:true,order:Re.a.Defaults.modifiers["hide"].order+1,fn:Be}
var De={tab:9,enter:13,escape:27,space:32,up:38,down:40}
var Ae={marginTop:f.a.xSmall,marginBottom:f.a.xSmall}
function Me(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Me=function e(t){return typeof t}}else{Me=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Me(e)}function We(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){Ge(e,t,r[t])})}return e}function Ve(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ne(e,t){if(t&&(Me(t)==="object"||typeof t==="function")){return t}return Ye(e)}function qe(e){qe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return qe(e)}function ze(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Ue(e,t,r){if(t)ze(e.prototype,t)
if(r)ze(e,r)
return e}function He(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Ke(e,t)}function Ke(e,t){Ke=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Ke(e,t)}function Ye(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Ge(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Xe=function(e){He(t,e)
Ue(t,null,[{key:"sameItemsFocusable",value:function e(t,r){if(t.length!==r.length){return false}for(var n=0;n<t.length;n++){if(t[n].focusable!==r[n].focusable){return false}}return true}},{key:"getDerivedStateFromProps",value:function e(r,o){if(o.itemRefs.length===0&&r.open||!t.sameItemsFocusable(o.prevItems,r.items)){var i=[]
for(var a=0;a<r.items.length;a++){if(r.items[a].focusable){var l=n["createRef"]()
i.push({ref:l,originalIndex:a})}}return{itemRefs:i,prevItems:r.items,sameItemsFocusable:false}}else{return{prevItems:r.items,sameItemsFocusable:true}}}}])
function t(e){var r
Ve(this,t)
r=Ne(this,qe(t).call(this,e))
Ge(Ye(Ye(r)),"focusedIndex",void 0)
Ge(Ye(Ye(r)),"focusedOriginalIndex",void 0)
Ge(Ye(Ye(r)),"keyboardNavOn",void 0)
Ge(Ye(Ye(r)),"itemsClicked",void 0)
Ge(Ye(Ye(r)),"popperElement",void 0)
Ge(Ye(Ye(r)),"handleInteract",function(e){var t=r.props,n=t.open,o=t.onOpenChanged
var i=e.target
var a=Pe.a.findDOMNode(Ye(Ye(r)))
if(n&&a&&!a.contains(i)&&r.popperElement&&!r.popperElement.contains(i)){o(false)}})
Ge(Ye(Ye(r)),"handleKeyDown",function(e){var t=r.props,n=t.initialFocusedIndex,o=t.onOpenChanged,i=t.open
var a=e.which||e.keyCode
if(!i){if(a===De.down){e.preventDefault()
o(true,true)
return}return}if(!r.keyboardNavOn&&(a===De.up||a===De.down)){r.keyboardNavOn=true
if(!r.itemsClicked){e.preventDefault()
r.focusedIndex=n
r.focusCurrentItem()
return}}switch(a){case De.tab:r.restoreTabOrder()
o(false,true)
return
case De.space:e.preventDefault()
return
case De.up:e.preventDefault()
r.focusPreviousItem()
return
case De.down:e.preventDefault()
r.focusNextItem()
return}})
Ge(Ye(Ye(r)),"handleKeyUp",function(e){var t=r.props,n=t.onOpenChanged,o=t.open
var i=e.which||e.keyCode
switch(i){case De.space:e.preventDefault()
return
case De.escape:if(o){e.stopPropagation()
r.restoreTabOrder()
n(false,true)}return}})
Ge(Ye(Ye(r)),"handleDropdownMouseUp",function(e){if(e.nativeEvent.stopImmediatePropagation){e.nativeEvent.stopImmediatePropagation()}else{e.stopPropagation()}})
r.focusedIndex=r.props.initialFocusedIndex
r.keyboardNavOn=false
r.state={prevItems:r.props.items,itemRefs:[],sameItemsFocusable:false}
return r}Ue(t,[{key:"componentDidMount",value:function e(){this.updateEventListeners()
this.initialFocusItem()}},{key:"componentDidUpdate",value:function e(t){var r=this
var n=this.props.open
if(t.open!==n){this.updateEventListeners()
this.initialFocusItem()}else if(n){var o=this.state,i=o.itemRefs,a=o.sameItemsFocusable
if(a){return}else{var l=i.findIndex(function(e){return e.originalIndex===r.focusedOriginalIndex})
if(l===-1){this.focusedIndex=0
this.itemsClicked=false
if(this.keyboardNavOn){this.focusCurrentItem()}else{if(this.props.openerElement){this.props.openerElement.focus()}}}else{this.focusedIndex=l}}}}},{key:"componentWillUnmount",value:function e(){this.removeEventListeners()}},{key:"initialFocusItem",value:function e(){var t=this.props,r=t.keyboard,n=t.initialFocusedIndex,o=t.open
if(o){this.focusedIndex=n
if(r){this.keyboardNavOn=true
this.focusCurrentItem()}}else if(!o){this.keyboardNavOn=false
this.itemsClicked=false}}},{key:"updateEventListeners",value:function e(){if(this.props.open){this.addEventListeners()}else{this.removeEventListeners()}}},{key:"addEventListeners",value:function e(){document.addEventListener("mouseup",this.handleInteract)
document.addEventListener("touchend",this.handleInteract)}},{key:"removeEventListeners",value:function e(){document.removeEventListener("mouseup",this.handleInteract)
document.removeEventListener("touchend",this.handleInteract)}},{key:"focusCurrentItem",value:function e(){var t=window.scrollX
var r=window.scrollY
var n=Pe.a.findDOMNode(this.state.itemRefs[this.focusedIndex].ref.current)
if(n){n.focus()
this.focusedOriginalIndex=this.state.itemRefs[this.focusedIndex].originalIndex}window.scrollTo(t,r)}},{key:"focusPreviousItem",value:function e(){if(this.focusedIndex===0){this.focusedIndex=this.state.itemRefs.length-1}else{this.focusedIndex-=1}this.focusCurrentItem()}},{key:"focusNextItem",value:function e(){if(this.focusedIndex===this.state.itemRefs.length-1){this.focusedIndex=0}else{this.focusedIndex+=1}this.focusCurrentItem()}},{key:"restoreTabOrder",value:function e(){if(this.props.openerElement){this.props.openerElement.focus()}}},{key:"handleClickFocus",value:function e(t){this.itemsClicked=true
this.focusedIndex=t
this.focusedOriginalIndex=this.state.itemRefs[this.focusedIndex].originalIndex}},{key:"getItemRole",value:function e(){var t=this.props.role
switch(t){case"listbox":return"option"
case"menu":return"menuitem"
default:throw new Error('Expected "listbox" or "menu" for role, but receieved "'.concat(t,'" instead.'))}}},{key:"renderItems",value:function e(t){var r=this
var o=this.props,i=o.items,a=o.dropdownStyle,l=o.light,u=o.openerElement
var c=window.getComputedStyle(u)
var s=c?c.getPropertyValue("width"):0
var f=this.getItemRole()
var p=0
return n["createElement"](d["View"],{onMouseUp:this.handleDropdownMouseUp,role:this.props.role,style:[Je.dropdown,l&&Je.light,t&&Je.hidden,{minWidth:s},a]},i.map(function(e,t){if(e.component.type===je){return e.component}else{if(e.focusable){p+=1}var o=p-1
return n["cloneElement"](e.component,We({},e.populatedProps,{key:t,ref:e.focusable&&r.state.itemRefs[o].ref,role:f,onClick:function t(){r.handleClickFocus(o)
if(e.component.props.onClick){e.component.props.onClick()}if(e.populatedProps.onClick){e.populatedProps.onClick()}}}))}}))}},{key:"renderDropdown",value:function e(){var t=this
var r=this.props,o=r.alignment,i=r.openerElement
var a=Object(_e["maybeGetPortalMountedModalHostElement"])(i)||document.querySelector("body")
if(a){return Pe.a.createPortal(n["createElement"](Ie["Popper"],{innerRef:function e(r){if(r){t.popperElement=r}},referenceElement:this.props.openerElement,placement:o==="left"?"bottom-start":"bottom-end",modifiers:{wbVisibility:Fe,preventOverflow:{boundariesElement:"viewport",escapeWithReference:true}}},function(e){var r=e.placement,o=e.ref,i=e.style,a=e.outOfBoundaries
return n["createElement"]("div",{ref:o,style:i,"data-placement":r},t.renderItems(a))}),a)}}},{key:"render",value:function e(){var t=this.props,r=t.open,o=t.opener,i=t.style
return n["createElement"](d["View"],{onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,style:[Je.menuWrapper,i]},o,r&&this.renderDropdown())}}])
return t}(n["Component"])
Ge(Xe,"defaultProps",{alignment:"left",initialFocusedIndex:0,light:false})
var Je=o["StyleSheet"].create({menuWrapper:{width:"fit-content"},dropdown:{backgroundColor:c.a.white,borderRadius:4,paddingTop:f.a.xxxSmall,paddingBottom:f.a.xxxSmall,border:"solid 1px ".concat(c.a.offBlack16),boxShadow:"0px 8px 8px 0px ".concat(Object(u["fade"])(c.a.offBlack,.1)),overflowY:"auto"},light:{border:"none"},hidden:{visibility:"hidden"}})
var Qe=r(9)
function Ze(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ze=function e(t){return typeof t}}else{Ze=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ze(e)}function $e(){$e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return $e.apply(this,arguments)}function et(e,t){if(e==null)return{}
var r=tt(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function tt(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function rt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function nt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function ot(e,t,r){if(t)nt(e.prototype,t)
if(r)nt(e,r)
return e}function it(e,t){if(t&&(Ze(t)==="object"||typeof t==="function")){return t}return at(e)}function at(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function lt(e){lt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return lt(e)}function ut(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ct(e,t)}function ct(e,t){ct=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return ct(e,t)}function st(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var ft=Object(d["addStyle"])("button")
var pt=function(e){ut(t,e)
function t(){rt(this,t)
return it(this,lt(t).apply(this,arguments))}ot(t,[{key:"render",value:function e(){var t=this.props,r=t.children,o=t.disabled,i=t.focused,a=t.hovered,l=t.pressed,c=t.testId,s=t["aria-label"],b=et(t,["children","disabled","focused","hovered","pressed","testId","aria-label"])
var h=u["SemanticColor"].controlDefault
var y=ht(h)
var m=o
var v=[dt.shared,m&&dt.disabled,y.default,m&&y.disabled,!m&&l&&y.active]
var g=n["createElement"](p["LabelLarge"],{style:dt.text},r)
return n["createElement"](ft,$e({"aria-disabled":m?"true":undefined,"aria-expanded":open?"true":"false","aria-haspopup":"menu","aria-label":s,"data-test-id":c,disabled:m,style:v,type:"button"},b),n["createElement"](d["View"],{style:!m&&(a||i)&&y.focus},g),n["createElement"](Qe["Strut"],{size:f.a.xxxSmall}),n["createElement"](A.a,{size:"small",color:"currentColor",icon:D["icons"].caretDown}))}}])
return t}(n["Component"])
st(pt,"contextTypes",{router:l.a.any})
var dt=o["StyleSheet"].create({shared:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",height:40,border:"none",borderRadius:f.a.xxxSmall,cursor:"pointer",outline:"none",textDecoration:"none",boxSizing:"border-box",touchAction:"manipulation"},disabled:{cursor:"auto"},small:{height:f.a.xLarge},text:{textAlign:"left",display:"inline-block",alignItems:"center",fontWeight:"bold",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",pointerEvents:"none"},hiddenText:{visibility:"hidden"},spinner:{position:"absolute"}})
var bt={}
var ht=function e(t){var r=t
if(bt[r]){return bt[r]}var n=c.a.offBlack32
var i=Object(u["mix"])(n,t)
var a={}
a={default:{background:"none",color:t},focus:{":after":{content:"''",position:"absolute",height:2,left:0,right:0,bottom:-1,background:"currentColor",borderRadius:2}},active:{color:i},disabled:{color:n,cursor:"default"}}
bt[r]=o["StyleSheet"].create(a)
return bt[r]}
function yt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){yt=function e(t){return typeof t}}else{yt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return yt(e)}function mt(){mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return mt.apply(this,arguments)}function vt(e,t){if(e==null)return{}
var r=gt(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function gt(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function Ot(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function wt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function St(e,t,r){if(t)wt(e.prototype,t)
if(r)wt(e,r)
return e}function kt(e,t){if(t&&(yt(t)==="object"||typeof t==="function")){return t}return Et(e)}function xt(e){xt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return xt(e)}function jt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Ct(e,t)}function Ct(e,t){Ct=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Ct(e,t)}function Et(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Pt(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var It=function(e){jt(t,e)
function t(){var e
var r
Ot(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=kt(this,(e=xt(t)).call.apply(e,[this].concat(o)))
Pt(Et(Et(r)),"handleClick",function(e){var t=r.props.open
r.props.onOpenChanged(!t,e.type==="keyup")})
return r}St(t,[{key:"render",value:function e(){var t=this.props,r=t.children,o=t.disabled,i=t.onOpenChanged,a=vt(t,["children","disabled","onOpenChanged"])
return n["createElement"](d["ClickableBehavior"],{disabled:o,onClick:this.handleClick,role:"menu"},function(e,t){return n["createElement"](pt,mt({},a,e,t,{disabled:o}),r)})}}])
return t}(n["Component"])
Pt(It,"defaultProps",{disabled:false})
function _t(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_t=function e(t){return typeof t}}else{_t=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _t(e)}function Tt(e){return Bt(e)||Lt(e)||Rt()}function Rt(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Lt(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Bt(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function Ft(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Dt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function At(e,t,r){if(t)Dt(e.prototype,t)
if(r)Dt(e,r)
return e}function Mt(e,t){if(t&&(_t(t)==="object"||typeof t==="function")){return t}return qt(e)}function Wt(e){Wt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Wt(e)}function Vt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Nt(e,t)}function Nt(e,t){Nt=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Nt(e,t)}function qt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function zt(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Ut=function(e){Vt(t,e)
function t(e){var r
Ft(this,t)
r=Mt(this,Wt(t).call(this,e))
zt(qt(qt(r)),"openerElement",void 0)
zt(qt(qt(r)),"handleOpenChanged",function(e,t){r.setState({open:e,keyboard:t})})
zt(qt(qt(r)),"handleItemSelected",function(){if(r.openerElement){r.openerElement.focus()}r.setState({open:false})})
zt(qt(qt(r)),"handleOptionSelected",function(e){var t=r.props,n=t.onChange,o=t.selectedValues
if(!n||!o){return}if(o.includes(e)){var i=o.indexOf(e)
var a=Tt(o.slice(0,i)).concat(Tt(o.slice(i+1)))
n(a)}else{n(Tt(o).concat([e]))}r.handleItemSelected()})
zt(qt(qt(r)),"handleOpenerRef",function(e){r.openerElement=Pe.a.findDOMNode(e)})
r.state={open:false}
return r}At(t,[{key:"getMenuItems",value:function e(){var t=this
var r=this.props,o=r.children,i=r.selectedValues
var a=Array.isArray(i)
return n["Children"].toArray(o).filter(Boolean).map(function(e){var r=e.type,n=e.props,o=n.disabled,l=n.value
if(r===B){return{component:e,focusable:!o,populatedProps:{indent:a,onClick:t.handleItemSelected}}}else if(r===se){return{component:e,focusable:!o,populatedProps:{onToggle:t.handleOptionSelected,selected:i?i.includes(l):false,variant:"check"}}}else{return{component:e,focusable:false,populatedProps:{}}}})}},{key:"render",value:function e(){var t=this.props,r=t.alignment,o=t.disabled,i=t.menuText,a=t.style,l=t.testId
var u=this.state.open
var c=this.getMenuItems()
var s=n["createElement"](It,{disabled:c.length===0||o,onOpenChanged:this.handleOpenChanged,open:u,ref:this.handleOpenerRef,testId:l},i)
return n["createElement"](Xe,{alignment:r,dropdownStyle:Ht.menuTopSpace,items:c,keyboard:this.state.keyboard,light:false,onOpenChanged:this.handleOpenChanged,open:u,opener:s,openerElement:this.openerElement,style:a,role:"menu"})}}])
return t}(n["Component"])
zt(Ut,"defaultProps",{alignment:"left",disabled:false})
var Ht=o["StyleSheet"].create({caret:{marginLeft:4},opener:{whiteSpace:"nowrap",userSelect:"none",overflow:"hidden",textOverflow:"ellipsis"},menuTopSpace:{top:-4}})
function Kt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Kt=function e(t){return typeof t}}else{Kt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Kt(e)}function Yt(){Yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return Yt.apply(this,arguments)}function Gt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Xt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Jt(e,t,r){if(t)Xt(e.prototype,t)
if(r)Xt(e,r)
return e}function Qt(e,t){if(t&&(Kt(t)==="object"||typeof t==="function")){return t}return tr(e)}function Zt(e){Zt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Zt(e)}function $t(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)er(e,t)}function er(e,t){er=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return er(e,t)}function tr(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function rr(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var nr=Object(d["addStyle"])("button")
var or=c.a.blue,ir=c.a.white,ar=c.a.white50,lr=c.a.offBlack,ur=c.a.offBlack16,cr=c.a.offBlack32,sr=c.a.offBlack64
var fr=function(e){$t(t,e)
function t(){var e
var r
Gt(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=Qt(this,(e=Zt(t)).call.apply(e,[this].concat(o)))
rr(tr(tr(r)),"handleClick",function(e){var t=r.props.open
r.props.onOpenChanged(!t,e.type==="keyup")})
return r}Jt(t,[{key:"render",value:function e(){var t=this.props,r=t.children,o=t.disabled,i=t.isPlaceholder,a=t.light,l=t.open,u=t.testId
var c=Object(d["getClickableBehavior"])(this.context.router)
return n["createElement"](c,{disabled:o,onClick:this.handleClick},function(e,t){var c=mr(a,i)
var s=e.hovered,f=e.focused,d=e.pressed
var b=a?o||d?"currentColor":ir:o?cr:sr
var h=[dr.shared,c.default,o&&c.disabled,!o&&(d?c.active:(s||f)&&c.focus)]
return n["createElement"](nr,Yt({"aria-expanded":l?"true":"false","aria-haspopup":"listbox","data-test-id":u,disabled:o,style:h,type:"button"},t),n["createElement"](p["LabelMedium"],{style:dr.text},r),n["createElement"](A.a,{icon:D["icons"].caretDown,color:b,size:"small",style:dr.caret}))})}}])
return t}(n["Component"])
rr(fr,"defaultProps",{disabled:false,light:false,isPlaceholder:false})
rr(fr,"contextTypes",{router:l.a.any})
var pr=4
var dr=o["StyleSheet"].create({shared:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"space-between",color:lr,height:40,paddingLeft:16,paddingRight:12,borderWidth:0,borderRadius:pr,borderStyle:"solid",outline:"none",textDecoration:"none",boxSizing:"border-box",whiteSpace:"nowrap",touchAction:"manipulation"},text:{marginRight:f.a.xSmall,whiteSpace:"nowrap",userSelect:"none",overflow:"hidden",textOverflow:"ellipsis"},caret:{minWidth:16}})
var br=16-1
var hr=12-1
var yr={}
var mr=function e(t,r){var n="".concat(String(t),"-").concat(String(r))
if(yr[n]){return yr[n]}var i={}
if(t){i={default:{backgroundColor:"transparent",color:r?ar:ir,borderColor:ar,borderWidth:1},focus:{borderColor:ir,borderWidth:2,paddingLeft:br,paddingRight:hr},active:{paddingLeft:br,paddingRight:hr,borderColor:Object(u["mix"])(Object(u["fade"])(or,.32),ir),borderWidth:2,color:r?Object(u["mix"])(Object(u["fade"])(ir,.32),or):Object(u["mix"])(Object(u["fade"])(or,.32),ir),backgroundColor:Object(u["mix"])(cr,or)},disabled:{borderColor:Object(u["mix"])(Object(u["fade"])(ir,.32),or),color:Object(u["mix"])(Object(u["fade"])(ir,.32),or),cursor:"auto"}}}else{i={default:{backgroundColor:ir,borderColor:ur,borderWidth:1,color:r?sr:lr},focus:{borderColor:or,borderWidth:2,paddingLeft:br,paddingRight:hr},active:{background:Object(u["mix"])(Object(u["fade"])(or,.32),ir),borderColor:Object(u["mix"])(cr,or),borderWidth:2,paddingLeft:br,paddingRight:hr},disabled:{backgroundColor:"transparent",borderColor:ur,color:sr,cursor:"auto"}}}yr[n]=o["StyleSheet"].create(i)
return yr[n]}
function vr(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){vr=function e(t){return typeof t}}else{vr=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return vr(e)}function gr(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Or(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function wr(e,t,r){if(t)Or(e.prototype,t)
if(r)Or(e,r)
return e}function Sr(e,t){if(t&&(vr(t)==="object"||typeof t==="function")){return t}return Cr(e)}function kr(e){kr=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return kr(e)}function xr(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)jr(e,t)}function jr(e,t){jr=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return jr(e,t)}function Cr(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Er(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Pr=function(e){xr(t,e)
function t(e){var r
gr(this,t)
r=Sr(this,kr(t).call(this,e))
Er(Cr(Cr(r)),"openerElement",void 0)
Er(Cr(Cr(r)),"selectedIndex",void 0)
Er(Cr(Cr(r)),"handleOpenChanged",function(e,t){r.setState({open:e,keyboard:t})})
Er(Cr(Cr(r)),"handleToggle",function(e){if(e!==r.props.selectedValue){r.props.onChange(e)}if(open&&r.openerElement){r.openerElement.focus()}r.setState({open:false})})
Er(Cr(Cr(r)),"handleOpenerRef",function(e){r.openerElement=Pe.a.findDOMNode(e)})
r.selectedIndex=0
r.state={open:false}
return r}wr(t,[{key:"getMenuItems",value:function e(){var t=this
var r=this.props,o=r.children,i=r.selectedValue
var a=0
this.selectedIndex=0
return n["Children"].toArray(o).filter(Boolean).map(function(e){var r=e.props,n=r.disabled,o=r.value
var l=i===o
if(l){t.selectedIndex=a}if(!n){a+=1}return{component:e,focusable:!n,populatedProps:{onToggle:t.handleToggle,selected:l,variant:"check"}}})}},{key:"render",value:function e(){var t=this.props,r=t.alignment,o=t.children,i=t.disabled,a=t.dropdownStyle,l=t.light,u=t.placeholder,c=t.selectedValue,s=t.style,f=t.testId
var p=this.state.open
var d=n["Children"].toArray(o).find(function(e){return e.props.value===c})
var b=d?d.props.label:u
var h=this.getMenuItems()
var y=n["createElement"](fr,{disabled:h.length===0||i,isPlaceholder:!d,light:l,onOpenChanged:this.handleOpenChanged,open:p,ref:this.handleOpenerRef,testId:f},b)
return n["createElement"](Xe,{role:"listbox",alignment:r,dropdownStyle:[Ae,a],initialFocusedIndex:this.selectedIndex,items:h,keyboard:this.state.keyboard,light:l,onOpenChanged:this.handleOpenChanged,open:p,opener:y,openerElement:this.openerElement,style:s})}}])
return t}(n["Component"])
Er(Pr,"defaultProps",{alignment:"left",disabled:false,light:false})
function Ir(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ir=function e(t){return typeof t}}else{Ir=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ir(e)}function _r(e){return Lr(e)||Rr(e)||Tr()}function Tr(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Rr(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Lr(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function Br(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Fr(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Dr(e,t,r){if(t)Fr(e.prototype,t)
if(r)Fr(e,r)
return e}function Ar(e,t){if(t&&(Ir(t)==="object"||typeof t==="function")){return t}return Nr(e)}function Mr(e){Mr=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Mr(e)}function Wr(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Vr(e,t)}function Vr(e,t){Vr=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Vr(e,t)}function Nr(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function qr(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var zr=function(e){Wr(t,e)
function t(e){var r
Br(this,t)
r=Ar(this,Mr(t).call(this,e))
qr(Nr(Nr(r)),"openerElement",void 0)
qr(Nr(Nr(r)),"handleOpenChanged",function(e,t){r.setState({open:e,keyboard:t})})
qr(Nr(Nr(r)),"handleToggle",function(e){var t=r.props,n=t.onChange,o=t.selectedValues
if(o.includes(e)){var i=o.indexOf(e)
var a=_r(o.slice(0,i)).concat(_r(o.slice(i+1)))
n(a)}else{n(_r(o).concat([e]))}})
qr(Nr(Nr(r)),"handleSelectAll",function(){var e=r.props,t=e.children,o=e.onChange
var i=n["Children"].map(t,function(e){return e.props.value})
o(i)})
qr(Nr(Nr(r)),"handleSelectNone",function(){var e=r.props.onChange
e([])})
qr(Nr(Nr(r)),"handleOpenerRef",function(e){r.openerElement=Pe.a.findDOMNode(e)})
r.state={open:false}
return r}Dr(t,[{key:"getMenuText",value:function e(){var t=this.props,r=t.children,o=t.placeholder,i=t.selectItemType,a=t.selectedValues
var l=o||"0 ".concat(i)
switch(a.length){case 0:return l
case 1:var u=n["Children"].toArray(r).find(function(e){return e.props.value===a[0]})
return u?u.props.label:l
case n["Children"].count(r):return"All ".concat(i)
default:return"".concat(a.length," ").concat(i)}}},{key:"getShortcuts",value:function e(){var t=this.props,r=t.children,o=t.selectedValues,i=t.shortcuts
if(i){var a=n["Children"].count(r)
var l=a===o.length
var u={component:n["createElement"](B,{disabled:l,label:"Select all (".concat(a,")"),indent:true,onClick:this.handleSelectAll}),focusable:!l,populatedProps:{}}
var c=o.length===0
var s={component:n["createElement"](B,{disabled:c,label:"Select none",indent:true,onClick:this.handleSelectNone}),focusable:!c,populatedProps:{}}
var f={component:n["createElement"](je,{key:"shortcuts-separator"}),focusable:false,populatedProps:{}}
return[u,s,f]}else{return[]}}},{key:"getMenuItems",value:function e(){var t=this
var r=this.props,o=r.children,i=r.selectedValues
return n["Children"].toArray(o).filter(Boolean).map(function(e){var r=e.props,n=r.disabled,o=r.value
return{component:e,focusable:!n,populatedProps:{onToggle:t.handleToggle,selected:i.includes(o),variant:"checkbox"}}})}},{key:"render",value:function e(){var t=this.props,r=t.alignment,o=t.disabled,i=t.light,a=t.placeholder,l=t.style,u=t.testId,c=t.dropdownStyle
var s=this.state.open
var f=this.getMenuText()
var p=_r(this.getShortcuts()).concat(_r(this.getMenuItems()))
var d=n["createElement"](fr,{disabled:p.length===0||o,isPlaceholder:f===a,light:i,onOpenChanged:this.handleOpenChanged,open:s,ref:this.handleOpenerRef,testId:u},f)
return n["createElement"](Xe,{role:"listbox",alignment:r,dropdownStyle:[Ae,c],items:p,keyboard:this.state.keyboard,light:i,onOpenChanged:this.handleOpenChanged,open:s,opener:d,openerElement:this.openerElement,style:l})}}])
return t}(n["Component"])
qr(zr,"defaultProps",{alignment:"left",disabled:false,light:false,shortcuts:false,selectedValues:[]})
r.d(t,"ActionItem",function(){return B})
r.d(t,"OptionItem",function(){return se})
r.d(t,"SeparatorItem",function(){return je})
r.d(t,"ActionMenu",function(){return Ut})
r.d(t,"SingleSelect",function(){return Pr})
r.d(t,"MultiSelect",function(){return zr})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-form-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-form-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-form-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-spacing-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-typography-v1")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-layout-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-v1")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(5)
var a=r(1)
var i=r.n(a)
var u=r(2)
var c=r(6)
var l=r(3)
var f=r.n(l)
var s=r(4)
var p=r(7)
var b=r.n(p)
function y(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){y=function e(t){return typeof t}}else{y=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return y(e)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return d.apply(this,arguments)}function h(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function m(e,t,r){if(t)v(e.prototype,t)
if(r)v(e,r)
return e}function g(e,t){if(t&&(y(t)==="object"||typeof t==="function")){return t}return S(e)}function O(e){O=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return O(e)}function j(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)w(e,t)}function w(e,t){w=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return w(e,t)}function S(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function k(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var C=i.a.blue,x=i.a.red,P=i.a.white,E=i.a.offWhite,T=i.a.offBlack16,L=i.a.offBlack32,R=i.a.offBlack50
var W=Object(u["addStyle"])("input")
var A={small:"M11.263 4.324a1 1 0 1 1 1.474 1.352l-5.5 6a1 1 0 0 1-1.505-.036l-2.5-3a1 1 0 1 1 1.536-1.28L6.536 9.48l4.727-5.157z"}
var M=function(e){j(t,e)
function t(){var e
var r
h(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++){o[a]=arguments[a]}r=g(this,(e=O(t)).call.apply(e,[this].concat(o)))
k(S(S(r)),"handleChange",function(){return})
return r}m(t,[{key:"render",value:function e(){var t=this.props,r=t["aria-label"],o=t.checked,a=t.disabled,i=t.error,u=t.groupName,c=t.id,l=t.testId,f=t.hovered,s=t.focused,p=t.pressed
var y=D(o,i)
var h=[z.inputReset,z.default,y.default,!a&&(p?y.active:(f||s)&&y.focus),a&&z.disabled]
var v={"data-test-id":l}
return n["createElement"](n["Fragment"],null,n["createElement"](W,d({type:"checkbox","aria-checked":o,"aria-label":r,checked:o,disabled:a,id:c,name:u,onChange:this.handleChange,style:h},v)),o&&n["createElement"](b.a,{color:a?L:P,icon:A,size:"small",style:z.checkIcon}))}}])
return t}(n["Component"])
var B=16
var z=o["StyleSheet"].create({inputReset:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none"},default:{height:B,width:B,minHeight:B,minWidth:B,margin:0,outline:"none",boxSizing:"border-box",borderStyle:"solid",borderWidth:1,borderRadius:3},disabled:{cursor:"auto",backgroundColor:E,borderColor:T,borderWidth:1},checkIcon:{position:"absolute",pointerEvents:"none"}})
var I=Object(a["mix"])(Object(a["fade"])(C,.16),P)
var q=Object(a["mix"])(L,C)
var V=Object(a["mix"])(Object(a["fade"])(x,.08),P)
var N=Object(a["mix"])(L,x)
var F={default:{faded:I,base:C,active:q},error:{faded:V,base:x,active:N}}
var G={}
var D=function e(t,r){var n="".concat(String(t),"-").concat(String(r))
if(G[n]){return G[n]}var a=r?F.error:F.default
var i={}
if(t){i={default:{backgroundColor:a.base,borderWidth:0},focus:{boxShadow:"0 0 0 1px ".concat(P,", 0 0 0 3px ").concat(a.base)},active:{boxShadow:"0 0 0 1px ".concat(P,", 0 0 0 3px ").concat(a.active),background:a.active}}}else{i={default:{backgroundColor:r?V:P,borderColor:r?x:R},focus:{backgroundColor:r?V:P,borderColor:a.base,borderWidth:2},active:{backgroundColor:a.faded,borderColor:r?N:C,borderWidth:2}}}G[n]=o["StyleSheet"].create(i)
return G[n]}
function H(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){H=function e(t){return typeof t}}else{H=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return H(e)}function J(){J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return J.apply(this,arguments)}function K(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function U(e,t,r){if(t)Q(e.prototype,t)
if(r)Q(e,r)
return e}function X(e,t){if(t&&(H(t)==="object"||typeof t==="function")){return t}return te(e)}function Y(e){Y=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Y(e)}function Z(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ee(e,t)}function ee(e,t){ee=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return ee(e,t)}function te(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function re(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var ne=i.a.blue,oe=i.a.red,ae=i.a.white,ie=i.a.offWhite,ue=i.a.offBlack16,ce=i.a.offBlack32,le=i.a.offBlack50
var fe=Object(u["addStyle"])("input")
var se=function(e){Z(t,e)
function t(){var e
var r
K(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++){o[a]=arguments[a]}r=X(this,(e=Y(t)).call.apply(e,[this].concat(o)))
re(te(te(r)),"handleChange",function(){return})
return r}U(t,[{key:"render",value:function e(){var t=this.props,r=t["aria-label"],o=t.checked,a=t.disabled,i=t.error,u=t.groupName,c=t.id,l=t.testId,f=t.hovered,s=t.focused,p=t.pressed
var b=je(o,i)
var y=[ye.inputReset,ye.default,b.default,!a&&(p?b.active:(f||s)&&b.focus),a&&ye.disabled]
var d={"data-test-id":l}
return n["createElement"](n["Fragment"],null,n["createElement"](fe,J({type:"radio","aria-checked":o,"aria-label":r,checked:o,disabled:a,id:c,name:u,onChange:this.handleChange,style:y},d)),a&&o&&n["createElement"]("span",{style:be}))}}])
return t}(n["Component"])
var pe=16
var be={position:"absolute",top:pe/4,left:pe/4,height:pe/2,width:pe/2,borderRadius:"50%",backgroundColor:ce}
var ye=o["StyleSheet"].create({inputReset:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none"},default:{height:pe,width:pe,minHeight:pe,minWidth:pe,margin:0,outline:"none",boxSizing:"border-box",borderStyle:"solid",borderWidth:1,borderRadius:"50%"},disabled:{cursor:"auto",backgroundColor:ie,borderColor:ue,borderWidth:1}})
var de=Object(a["mix"])(Object(a["fade"])(ne,.16),ae)
var he=Object(a["mix"])(ce,ne)
var ve=Object(a["mix"])(Object(a["fade"])(oe,.08),ae)
var me=Object(a["mix"])(ce,oe)
var ge={default:{faded:de,base:ne,active:he},error:{faded:ve,base:oe,active:me}}
var Oe={}
var je=function e(t,r){var n="".concat(String(t),"-").concat(String(r))
if(Oe[n]){return Oe[n]}var a=r?ge.error:ge.default
var i={}
if(t){i={default:{backgroundColor:ae,borderColor:a.base,borderWidth:pe/4},focus:{boxShadow:"0 0 0 1px ".concat(ae,", 0 0 0 3px ").concat(a.base)},active:{boxShadow:"0 0 0 1px ".concat(ae,", 0 0 0 3px ").concat(a.active),borderColor:a.active}}}else{i={default:{backgroundColor:r?ve:ae,borderColor:r?oe:le},focus:{backgroundColor:r?ve:ae,borderColor:a.base,borderWidth:2},active:{backgroundColor:a.faded,borderColor:r?me:ne,borderWidth:2}}}Oe[n]=o["StyleSheet"].create(i)
return Oe[n]}
function we(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){we=function e(t){return typeof t}}else{we=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return we(e)}function Se(){Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return Se.apply(this,arguments)}function ke(e,t){if(e==null)return{}
var r=Ce(e,t)
var n,o
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(o=0;o<a.length;o++){n=a[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function Ce(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,a
for(a=0;a<n.length;a++){o=n[a]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function xe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Pe(e,t,r){if(t)_e(e.prototype,t)
if(r)_e(e,r)
return e}function Ee(e,t){if(t&&(we(t)==="object"||typeof t==="function")){return t}return We(e)}function Te(e){Te=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Te(e)}function Le(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Re(e,t)}function Re(e,t){Re=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Re(e,t)}function We(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Ae(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Me=function(e){Le(t,e)
function t(){var e
var r
xe(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++){o[a]=arguments[a]}r=Ee(this,(e=Te(t)).call.apply(e,[this].concat(o)))
Ae(We(We(r)),"handleLabelClick",function(e){e.preventDefault()})
Ae(We(We(r)),"handleClick",function(){var e=r.props,t=e.checked,n=e.onChange,o=e.variant
if(o==="radio"&&t){return}n(!t)})
return r}Pe(t,[{key:"getChoiceCoreComponent",value:function e(){if(this.props.variant==="radio"){return se}else{return M}}},{key:"getLabel",value:function e(){var t=this.props,r=t.disabled,o=t.id,a=t.label
return n["createElement"](s["LabelMedium"],{style:[Be.label,r&&Be.disabledLabel]},n["createElement"]("label",{htmlFor:o,onClick:this.handleLabelClick},a))}},{key:"getDescription",value:function e(){var t=this.props.description
return n["createElement"](s["LabelSmall"],{style:Be.description},t)}},{key:"render",value:function e(){var t=this
var r=this.props,o=r.label,a=r.description,i=r.onChange,l=r.style,s=r.variant,p=ke(r,["label","description","onChange","style","variant"])
var b=this.getChoiceCoreComponent()
var y=Object(u["getClickableBehavior"])()
return n["createElement"](u["View"],{style:l},n["createElement"](y,{disabled:p.disabled,onClick:this.handleClick,role:s},function(e,r){return n["createElement"](u["View"],Se({style:Be.wrapper},r,{tabIndex:-1}),n["createElement"](b,Se({},p,e)),n["createElement"](c["Strut"],{size:f.a.xSmall}),o&&t.getLabel())}),a&&this.getDescription())}}])
return t}(n["Component"])
Ae(Me,"defaultProps",{checked:false,disabled:false,error:false})
var Be=o["StyleSheet"].create({wrapper:{flexDirection:"row",alignItems:"flex-start",outline:"none"},label:{userSelect:"none",marginTop:-2},disabledLabel:{color:i.a.offBlack32},description:{marginLeft:f.a.medium+f.a.xSmall,marginTop:f.a.xxxSmall,color:i.a.offBlack64}})
function ze(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ze=function e(t){return typeof t}}else{ze=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return ze(e)}function Ie(){Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return Ie.apply(this,arguments)}function qe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ve(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Ne(e,t,r){if(t)Ve(e.prototype,t)
if(r)Ve(e,r)
return e}function Fe(e,t){if(t&&(ze(t)==="object"||typeof t==="function")){return t}return Ge(e)}function Ge(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function De(e){De=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return De(e)}function He(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Je(e,t)}function Je(e,t){Je=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Je(e,t)}function Ke(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Qe=function(e){He(t,e)
function t(){qe(this,t)
return Fe(this,De(t).apply(this,arguments))}Ne(t,[{key:"render",value:function e(){return n["createElement"](Me,Ie({variant:"checkbox"},this.props))}}])
return t}(n["Component"])
Ke(Qe,"defaultProps",{disabled:false,error:false})
function Ue(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ue=function e(t){return typeof t}}else{Ue=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ue(e)}function Xe(){Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return Xe.apply(this,arguments)}function Ye(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ze(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function $e(e,t,r){if(t)Ze(e.prototype,t)
if(r)Ze(e,r)
return e}function et(e,t){if(t&&(Ue(t)==="object"||typeof t==="function")){return t}return tt(e)}function tt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function rt(e){rt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return rt(e)}function nt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ot(e,t)}function ot(e,t){ot=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return ot(e,t)}function at(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var it=function(e){nt(t,e)
function t(){Ye(this,t)
return et(this,rt(t).apply(this,arguments))}$e(t,[{key:"render",value:function e(){return n["createElement"](Me,Xe({variant:"radio"},this.props))}}])
return t}(n["Component"])
at(it,"defaultProps",{disabled:false,error:false})
function ut(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ut=function e(t){return typeof t}}else{ut=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return ut(e)}function ct(e,t){if(e==null)return{}
var r=lt(e,t)
var n,o
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(o=0;o<a.length;o++){n=a[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function lt(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,a
for(a=0;a<n.length;a++){o=n[a]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function ft(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function st(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function pt(e,t,r){if(t)st(e.prototype,t)
if(r)st(e,r)
return e}function bt(e,t){if(t&&(ut(t)==="object"||typeof t==="function")){return t}return yt(e)}function yt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function dt(e){dt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return dt(e)}function ht(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)vt(e,t)}function vt(e,t){vt=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return vt(e,t)}function mt(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var gt=function(e){ht(t,e)
function t(){ft(this,t)
return bt(this,dt(t).apply(this,arguments))}pt(t,[{key:"getChoiceComponent",value:function e(t){if(t==="checkbox"){return Qe}else{return it}}},{key:"render",value:function e(){var t=this.props,r=t.value,o=t.variant,a=ct(t,["value","variant"])
var i=this.getChoiceComponent(o)
return n["createElement"](i,a)}}])
return t}(n["Component"])
mt(gt,"defaultProps",{disabled:false})
var Ot=o["StyleSheet"].create({fieldset:{border:"none",padding:0,margin:0},legend:{padding:0},description:{marginTop:f.a.xxxSmall,color:i.a.offBlack64},error:{marginTop:f.a.xxxSmall,color:i.a.red},defaultLineGap:{marginTop:f.a.xSmall}})
var jt=Ot
function wt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){wt=function e(t){return typeof t}}else{wt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return wt(e)}function St(e){return xt(e)||Ct(e)||kt()}function kt(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Ct(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function xt(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function _t(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Pt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Et(e,t,r){if(t)Pt(e.prototype,t)
if(r)Pt(e,r)
return e}function Tt(e,t){if(t&&(wt(t)==="object"||typeof t==="function")){return t}return Lt(e)}function Lt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Rt(e){Rt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Rt(e)}function Wt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)At(e,t)}function At(e,t){At=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return At(e,t)}var Mt=Object(u["addStyle"])("fieldset")
var Bt=Object(u["addStyle"])("legend")
var zt=function(e){Wt(t,e)
function t(){_t(this,t)
return Tt(this,Rt(t).apply(this,arguments))}Et(t,[{key:"handleChange",value:function e(t,r){var n=this.props,o=n.onChange,a=n.selectedValues
if(r){var i=a.indexOf(t)
var u=St(a.slice(0,i)).concat(St(a.slice(i+1)))
o(u)}else{o(St(a).concat([t]))}}},{key:"render",value:function e(){var t=this
var r=this.props,o=r.children,a=r.label,i=r.description,l=r.errorMessage,p=r.groupName,b=r.selectedValues,y=r.style
return n["createElement"](Mt,{style:jt.fieldset},n["createElement"](u["View"],{style:y},a&&n["createElement"](Bt,{style:jt.legend},n["createElement"](s["LabelMedium"],null,a)),i&&n["createElement"](s["LabelSmall"],{style:jt.description},i),l&&n["createElement"](s["LabelSmall"],{style:jt.error},l),(a||i||l)&&n["createElement"](c["Strut"],{size:f.a.small}),n["Children"].map(o,function(e,r){var o=e.props,a=o.style,i=o.value
var u=b.includes(i)
return n["createElement"](n["Fragment"],null,n["cloneElement"](e,{checked:u,error:!!l,groupName:p,id:"".concat(p,"-").concat(i),key:i,onChange:function e(){return t.handleChange(i,u)},style:[r>0&&jt.defaultLineGap,a],variant:"checkbox"}))})))}}])
return t}(n["Component"])
function It(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){It=function e(t){return typeof t}}else{It=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return It(e)}function qt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Vt(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Nt(e,t,r){if(t)Vt(e.prototype,t)
if(r)Vt(e,r)
return e}function Ft(e,t){if(t&&(It(t)==="object"||typeof t==="function")){return t}return Gt(e)}function Gt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Dt(e){Dt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Dt(e)}function Ht(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Jt(e,t)}function Jt(e,t){Jt=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Jt(e,t)}var Kt=Object(u["addStyle"])("fieldset")
var Qt=Object(u["addStyle"])("legend")
var Ut=function(e){Ht(t,e)
function t(){qt(this,t)
return Ft(this,Dt(t).apply(this,arguments))}Nt(t,[{key:"handleChange",value:function e(t){this.props.onChange(t)}},{key:"render",value:function e(){var t=this
var r=this.props,o=r.children,a=r.label,i=r.description,l=r.errorMessage,p=r.groupName,b=r.selectedValue,y=r.style
return n["createElement"](Kt,{style:jt.fieldset},n["createElement"](u["View"],{style:y},a&&n["createElement"](Qt,{style:jt.legend},n["createElement"](s["LabelMedium"],null,a)),i&&n["createElement"](s["LabelSmall"],{style:jt.description},i),l&&n["createElement"](s["LabelSmall"],{style:jt.error},l),(a||i||l)&&n["createElement"](c["Strut"],{size:f.a.small}),n["Children"].map(o,function(e,r){var o=e.props,a=o.style,i=o.value
var u=b===i
return n["createElement"](n["Fragment"],null,n["cloneElement"](e,{checked:u,error:!!l,groupName:p,id:"".concat(p,"-").concat(i),key:i,onChange:function e(){return t.handleChange(i)},style:[r>0&&jt.defaultLineGap,a],variant:"radio"}))})))}}])
return t}(n["Component"])
r.d(t,"Checkbox",function(){return Qe})
r.d(t,"Radio",function(){return it})
r.d(t,"Choice",function(){return gt})
r.d(t,"CheckboxGroup",function(){return zt})
r.d(t,"RadioGroup",function(){return Ut})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-icon-button-v3/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-icon-button-v3/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-icon-button-v3/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=7)}([function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-v1")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict"
r.r(t)
var n=r(1)
var o=r.n(n)
var i=r(3)
var u=r.n(i)
var a=r(2)
var c=r(4)
var f=r(6)
var l=r(0)
var s=r.n(l)
var p=r(5)
var b=r.n(p)
function d(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){d=function e(t){return typeof t}}else{d=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return d(e)}function y(){y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return y.apply(this,arguments)}function v(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){C(e,t,r[t])})}return e}function h(e,t){if(e==null)return{}
var r=O(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function O(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function g(e,t,r){if(t)j(e.prototype,t)
if(r)j(e,r)
return e}function w(e,t){if(t&&(d(t)==="object"||typeof t==="function")){return t}return S(e)}function S(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return x(e)}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)P(e,t)}function P(e,t){P=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return P(e,t)}function C(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var E=Object(a["addStyle"])("a")
var T=Object(a["addStyle"])("button")
var q=Object(a["addStyle"])(f["Link"])
var I=function(e){k(t,e)
function t(){m(this,t)
return w(this,x(t).apply(this,arguments))}g(t,[{key:"render",value:function e(){var t=this.props,r=t.skipClientNav,n=t["aria-label"],i=t.color,u=t.disabled,a=t.focused,c=t.hovered,f=t.href,s=t.icon,p=t.kind,d=t.light,O=t.pressed,m=t.style,j=t.testId,g=h(t,["skipClientNav","aria-label","color","disabled","focused","hovered","href","icon","kind","light","pressed","style","testId"])
var w=this.context.router
var S=i==="destructive"?l["SemanticColor"].controlDestructive:l["SemanticColor"].controlDefault
var x=D(S,p,d)
var k=[B.shared,u&&B.disabled,x.default,u&&x.disabled,!u&&(O?x.active:(c||a)&&x.focus)]
var P=o.a.createElement(b.a,{size:"medium",color:"currentColor",icon:s})
var C=v({"aria-disabled":u?"true":undefined,"aria-label":n,"data-test-id":j,style:[k,m]},g)
if(f&&!u){return w&&!r?o.a.createElement(q,y({},C,{to:f}),P):o.a.createElement(E,y({},C,{href:f}),P)}else{return o.a.createElement(T,y({type:"button"},C,{disabled:u}),P)}}}])
return t}(o.a.Component)
C(I,"contextTypes",{router:u.a.any})
var B=c["StyleSheet"].create({shared:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",height:40,width:40,padding:0,cursor:"pointer",border:"none",outline:"none",textDecoration:"none",background:"none",margin:-8,touchAction:"manipulation"},disabled:{cursor:"default"}})
var N={}
var D=function e(t,r,n){var o=t+r+n.toString()
if(N[o]){return N[o]}if(n&&r!=="primary"){throw new Error("Light is only supported for primary IconButtons")}var i=s.a.white,u=s.a.offBlack32,a=s.a.offBlack64,f=s.a.offBlack
var p={default:{},focus:{color:n?i:t,borderWidth:2,borderColor:n?i:t,borderStyle:"solid",borderRadius:4},active:{color:n?Object(l["mix"])(Object(l["fade"])(t,.32),i):Object(l["mix"])(u,t),borderWidth:2,borderColor:n?Object(l["mix"])(Object(l["fade"])(t,.32),i):Object(l["mix"])(u,t),borderStyle:"solid",borderRadius:4},disabled:{color:n?Object(l["mix"])(Object(l["fade"])(i,.32),t):u,cursor:"default"}}
if(r==="primary"){p["default"]={color:n?i:t}}else if(r==="secondary"){p["default"]={color:f}}else if(r==="tertiary"){p["default"]={color:a}}else{throw new Error("IconButton kind not recognized")}N[o]=c["StyleSheet"].create(p)
return N[o]}
function M(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){M=function e(t){return typeof t}}else{M=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return M(e)}function R(){R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return R.apply(this,arguments)}function z(e,t){if(e==null)return{}
var r=L(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function L(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function W(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function F(e,t,r){if(t)A(e.prototype,t)
if(r)A(e,r)
return e}function G(e,t){if(t&&(M(t)==="object"||typeof t==="function")){return t}return H(e)}function H(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function J(e){J=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return J(e)}function K(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Q(e,t)}function Q(e,t){Q=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Q(e,t)}function U(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var V=function(e){K(t,e)
function t(){W(this,t)
return G(this,J(t).apply(this,arguments))}F(t,[{key:"render",value:function e(){var t=this.props,r=t.onClick,n=t.href,i=t.skipClientNav,u=z(t,["onClick","href","skipClientNav"])
var c=Object(a["getClickableBehavior"])(n,i,this.context.router)
return o.a.createElement(c,{disabled:u.disabled,href:n,onClick:r,role:"button"},function(e,t){return o.a.createElement(I,R({},u,e,t,{skipClientNav:i,href:n}))})}}])
return t}(o.a.Component)
U(V,"defaultProps",{color:"default",kind:"primary",light:false,disabled:false})
U(V,"contextTypes",{router:u.a.any})
r.d(t,"default",function(){return V})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-icon-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-icon-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-icon-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(a){if(t[a]){return t[a].exports}var l=t[a]={i:a,l:false,exports:{}}
e[a].call(l.exports,l,l.exports,r)
l.l=true
return l.exports}r.m=e
r.c=t
r.d=function(e,t,a){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:a})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var a=Object.create(null)
r.r(a)
Object.defineProperty(a,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l))
return a}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t,r){"use strict"
r.r(t)
var a=r(0)
var l=r(2)
var n=r(1)
var o=function e(t){return{small:16,medium:24,large:48,xlarge:96}[t]}
var i=function e(t,r){if(t[r]){return{assetSize:r,path:t[r]}}else{var a=o(r)
var l=Object.keys(t)
var n=function e(t){var r=o(t)
var l=r-a
return l>0?Number.POSITIVE_INFINITY:Math.abs(l)}
var i=l.sort(function(e,t){return n(e)-n(t)})
var u=i[0]
if(u&&t[u]){return{assetSize:u,path:t[u]}}else{throw new Error("Icon does not contain any valid asset sizes!")}}}
function u(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){u=function e(t){return typeof t}}else{u=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return u(e)}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||false
a.configurable=true
if("value"in a)a.writable=true
Object.defineProperty(e,a.key,a)}}function f(e,t,r){if(t)s(e.prototype,t)
if(r)s(e,r)
return e}function m(e,t){if(t&&(u(t)==="object"||typeof t==="function")){return t}return z(e)}function z(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return v(e)}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)d(e,t)}function d(e,t){d=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return d(e,t)}function b(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var y=Object(n["addStyle"])("svg")
var h=function(e){p(t,e)
function t(){c(this,t)
return m(this,v(t).apply(this,arguments))}f(t,[{key:"render",value:function e(){var t=this.props["aria-label"]
var r=this.props,l=r.color,n=r.icon,u=r.size,c=r.style
var s=i(n,u),f=s.assetSize,m=s.path
var z=o(u)
var v=o(f)
return a["createElement"](y,{style:[M.svg,c],width:z,height:z,"aria-label":t,viewBox:"0 0 ".concat(v," ").concat(v)},a["createElement"]("path",{fill:l,d:m}))}}])
return t}(a["PureComponent"])
b(h,"defaultProps",{color:"currentColor",size:"small"})
var M=l["StyleSheet"].create({svg:{display:"inline-block",verticalAlign:"text-bottom",flexShrink:0,flexGrow:0}})
var L={add:{medium:"M11 11V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4zm1 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"},caretDown:{small:"M8 8.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 8.586z",medium:"M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"},caretLeft:{small:"M7.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 8z",medium:"M15.707 17.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L10.414 12l5.293 5.293z"},caretRight:{small:"M8.586 8L5.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L8.586 8z",medium:"M8.293 17.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414L13.586 12l-5.293 5.293z"},caretUp:{small:"M8 7.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414z",medium:"M17.293 15.707a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 10.414l5.293 5.293z"},check:{small:"M6.072 10.4l6.175-7.058a1 1 0 1 1 1.506 1.317L6.769 12.64a1 1 0 0 1-1.55-.054L2.203 8.604a1 1 0 1 1 1.594-1.208L6.072 10.4z"},contentArticle:{small:"M11 12V8h2v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3v2H5v8h6zM9.5 6a.5.5 0 0 1-.5-.5V2l4 4H9.5z",medium:"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3-6v-4h2v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v2H9v8h6zm-1.5-6a.5.5 0 0 1-.5-.5V6l4 4h-3.5z"},contentExercise:{small:"M7.5 6.914L5 9.414V11h1.586l2.5-2.5L7.5 6.914zM8.914 5.5L10.5 7.086 11.586 6 10 4.414 8.914 5.5zM3 9a1 1 0 0 1 .293-.707l6-6a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 7 13H4a1 1 0 0 1-1-1V9z",medium:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-.5-11.086l1.586 1.586-2.5 2.5H9v-1.586l2.5-2.5zM12.914 9.5L14 8.414 15.586 10 14.5 11.086 12.914 9.5zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM7 13v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l6-6a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 7 13z"},contentVideo:{small:"M6 5.87v4.263l3.197-2.131L6 5.87zm-.445-2.7l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 4 12.002v-8a1 1 0 0 1 1.555-.832z",medium:"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.555 7.17l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16.002v-8a1 1 0 0 1 1.555-.832zM11 14.133l3.197-2.131L11 9.87v4.263z"},correct:{medium:"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.928-7.6l6.175-7.058a1 1 0 1 1 1.506 1.317l-6.984 7.981a1 1 0 0 1-1.55-.054l-3.016-3.982a1 1 0 0 1 1.594-1.208l2.275 3.003z"},delete:{medium:"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-5-9a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H7z"},dismiss:{small:"M8 6.586l3.293-3.293a1 1 0 0 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 1.414-1.414L8 6.586z",medium:"M12 10.586L7.706 6.293a1 1 0 1 0-1.413 1.413L10.586 12l-4.293 4.294a1 1 0 0 0 1.413 1.413L12 13.414l4.294 4.293a1 1 0 0 0 1.413-1.413L13.414 12l4.293-4.294a1 1 0 1 0-1.413-1.413L12 10.586z"},hint:{medium:"M10.835 15.993a1 1 0 0 1 1.008-.247 5.5 5.5 0 1 0-3.59-3.59 1 1 0 0 1-.246 1.009L6.172 15 9 17.828l1.835-1.835zm-.78 3.61a1.496 1.496 0 0 1-2.11 0l-3.548-3.549a1.496 1.496 0 0 1 0-2.108l1.787-1.787a7.5 7.5 0 1 1 5.657 5.657l-1.787 1.787zm-6.762.104a1 1 0 0 1 1.414-1.414l1 1a1 1 0 0 1-1.414 1.414l-1-1z"},incorrect:{medium:"M12 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"},info:{small:"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 8a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0V8zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"},search:{small:"M11.172 9.757l2.535 2.536a1 1 0 0 1-1.414 1.414l-2.536-2.535a5 5 0 1 1 1.414-1.414zM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",medium:"M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6.32-1.094l3.387 3.387a1 1 0 0 1-1.414 1.414l-3.387-3.387a8 8 0 1 1 1.414-1.414z"},sortableArrowDown:{small:"M7 9.586V4a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L7 9.586z"},sortableArrowUp:{small:"M9 6.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L7 6.414V12a1 1 0 1 0 2 0V6.414z"},zoomIn:{medium:"M17.32 15.906l3.387 3.387a1 1 0 0 1-1.414 1.414l-3.387-3.387a8 8 0 1 1 1.414-1.414zM12 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zm-1 7a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"},zoomOut:{medium:"M17.32 15.906l3.387 3.387a1 1 0 0 1-1.414 1.414l-3.387-3.387a8 8 0 1 1 1.414-1.414zM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-3-5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z"}}
r.d(t,"icons",function(){return L})
var S=t["default"]=h}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-layout-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-layout-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-layout-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(2)
var u=r(1)
function i(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){i=function e(t){return typeof t}}else{i=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return i(e)}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)c(e.prototype,t)
if(r)c(e,r)
return e}function a(e,t){if(t&&(i(t)==="object"||typeof t==="function")){return t}return p(e)}function p(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return s(e)}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return b(e,t)}var d=function(e){y(t,e)
function t(){f(this,t)
return a(this,s(t).apply(this,arguments))}l(t,[{key:"render",value:function e(){return n["createElement"](u["View"],{"aria-hidden":"true",style:m.grow})}}])
return t}(n["Component"])
var m=o["StyleSheet"].create({grow:{flexGrow:1}})
function h(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){h=function e(t){return typeof t}}else{h=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return h(e)}function v(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function w(e,t,r){if(t)O(e.prototype,t)
if(r)O(e,r)
return e}function S(e,t){if(t&&(h(t)==="object"||typeof t==="function")){return t}return j(e)}function j(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return g(e)}function x(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)P(e,t)}function P(e,t){P=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return P(e,t)}var k=function(e){x(t,e)
function t(){v(this,t)
return S(this,g(t).apply(this,arguments))}w(t,[{key:"render",value:function e(){return n["createElement"](u["View"],{"aria-hidden":"true",style:E(this.props.size)})}}])
return t}(n["Component"])
var E=function e(t){return{width:t,MsFlexBasis:t,MsFlexPreferredSize:t,WebkitFlexBasis:t,flexBasis:t,flexShrink:0}}
r.d(t,"Spring",function(){return d})
r.d(t,"Strut",function(){return k})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-link-v3/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-link-v3/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-link-v3/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=6)}([function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict"
r.r(t)
var n=r(1)
var o=r(3)
var i=r.n(o)
var u=r(2)
var c=r(4)
var a=r(5)
var f=r(0)
var l=r.n(f)
function p(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){p=function e(t){return typeof t}}else{p=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return p(e)}function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return s.apply(this,arguments)}function y(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){k(e,t,r[t])})}return e}function b(e,t){if(e==null)return{}
var r=v(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function v(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function O(e,t,r){if(t)h(e.prototype,t)
if(r)h(e,r)
return e}function m(e,t){if(t&&(p(t)==="object"||typeof t==="function")){return t}return j(e)}function j(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return g(e)}function w(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)S(e,t)}function S(e,t){S=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return S(e,t)}function k(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var x=Object(u["addStyle"])("a")
var P=Object(u["addStyle"])(a["Link"])
var E=function(e){w(t,e)
function t(){d(this,t)
return m(this,g(t).apply(this,arguments))}O(t,[{key:"render",value:function e(){var t=this.props,r=t.caret,o=t.children,i=t.skipClientNav,u=t.focused,c=t.hovered,a=t.href,f=t.kind,l=t.light,p=t.visitable,v=t.pressed,d=t.style,h=t.testId,O=b(t,["caret","children","skipClientNav","focused","hovered","href","kind","light","visitable","pressed","style","testId"])
var m=this.context.router
var j=q(f,l,p)
var g=[T.shared,!(c||u||v)&&j.default,v?j.active:(c||u)&&j.focus]
var w=y({"data-test-id":h,style:[g,d]},O)
return m&&!i?n["createElement"](P,s({},w,{to:a}),o):n["createElement"](x,s({},w,{href:a}),o)}}])
return t}(n["Component"])
k(E,"contextTypes",{router:i.a.any})
var C={}
var T=c["StyleSheet"].create({shared:{cursor:"pointer",textDecoration:"none",outline:"none"}})
var q=function e(t,r,n){var o=t+r.toString()+n.toString()
if(C[o]){return C[o]}if(t==="secondary"&&r){throw new Error("Secondary Light links are not supported")}if(n&&(t!=="primary"||t==="primary"&&r)){throw new Error("Only primary (not light) link is visitable")}var i=l.a.blue,u=l.a.purple,a=l.a.white,p=l.a.offBlack,s=l.a.offBlack32
var b=Object(f["mix"])(Object(f["fade"])(p,.08),u)
var v=t==="primary"?r?a:i:p
var d=n?{":visited":{color:b}}:{}
var h=n?{":visited":{color:Object(f["mix"])(s,b)}}:{}
var O={default:y({color:v},d),focus:y({textDecoration:"underline currentcolor solid",color:r?a:i},d),active:y({color:r?Object(f["mix"])(Object(f["fade"])(i,.32),a):Object(f["mix"])(s,i),textDecoration:"underline currentcolor solid"},h)}
C[o]=c["StyleSheet"].create(O)
return C[o]}
function N(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){N=function e(t){return typeof t}}else{N=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return N(e)}function D(){D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
return D.apply(this,arguments)}function I(e,t){if(e==null)return{}
var r=M(e,t)
var n,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){n=i[o]
if(t.indexOf(n)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,n))continue
r[n]=e[n]}}return r}function M(e,t){if(e==null)return{}
var r={}
var n=Object.keys(e)
var o,i
for(i=0;i<n.length;i++){o=n[i]
if(t.indexOf(o)>=0)continue
r[o]=e[o]}return r}function B(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function R(e,t,r){if(t)L(e.prototype,t)
if(r)L(e,r)
return e}function z(e,t){if(t&&(N(t)==="object"||typeof t==="function")){return t}return A(e)}function A(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function F(e){F=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return F(e)}function G(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)H(e,t)}function H(e,t){H=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return H(e,t)}function J(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var K=function(e){G(t,e)
function t(){B(this,t)
return z(this,F(t).apply(this,arguments))}R(t,[{key:"render",value:function e(){var t=this.props,r=t.onClick,o=t.href,i=t.skipClientNav,c=t.children,a=I(t,["onClick","href","skipClientNav","children"])
var f=Object(u["getClickableBehavior"])(o,i,this.context.router)
return n["createElement"](f,{disabled:false,onClick:r,href:o,role:"link"},function(e,t){return n["createElement"](E,D({},a,e,t,{skipClientNav:i,href:o}),c)})}}])
return t}(n["Component"])
J(K,"defaultProps",{caret:false,kind:"primary",light:false,visitable:false})
J(K,"contextTypes",{router:i.a.any})
r.d(t,"default",function(){return K})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-modal-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-modal-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-modal-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function n(o){if(t[o]){return t[o].exports}var r=t[o]={i:o,l:false,exports:{}}
e[o].call(r.exports,r,r.exports,n)
r.l=true
return r.exports}n.m=e
n.c=t
n.d=function(e,t,o){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:o})}}
n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
n.t=function(e,t){if(t&1)e=n(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var o=Object.create(null)
n.r(o)
Object.defineProperty(o,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r))
return o}
n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
n.d(t,"a",t)
return t}
n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
n.p=""
return n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-toolbar-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-button-v3")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-icon-v1")},function(e,t,n){"use strict"
n.r(t)
var o=n(0)
var r=n(4)
var i=n(2)
var u=n(1)
function l(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){l=function e(t){return typeof t}}else{l=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return l(e)}function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function f(e,t,n){if(t)c(e.prototype,t)
if(n)c(e,n)
return e}function s(e,t){if(t&&(l(t)==="object"||typeof t==="function")){return t}return b(e)}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return p(e)}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)d(e,t)}function d(e,t){d=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return d(e,t)}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function h(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var m=function(e){y(t,e)
function t(e){var n
a(this,t)
n=s(this,p(t).call(this,e))
h(b(b(n)),"lastNodeFocusedInModal",void 0)
h(b(b(n)),"ignoreFocusChanges",void 0)
h(b(b(n)),"modalRoot",void 0)
h(b(b(n)),"getModalRoot",function(e){if(!e){return}var t=r["findDOMNode"](e)
if(!t){throw new Error("Assertion error: modal root should exist after mount")}n.modalRoot=t})
h(b(b(n)),"handleGlobalFocus",function(e){if(n.ignoreFocusChanges){return}var t=e.target
if(!(t instanceof Node)){return}var o=n.modalRoot
if(!o){return}if(o.contains(t)){n.lastNodeFocusedInModal=t}else{n.focusFirstElementIn(o)
if(document.activeElement===n.lastNodeFocusedInModal){n.focusLastElementIn(o)}n.lastNodeFocusedInModal=document.activeElement}})
n.lastNodeFocusedInModal=null
n.ignoreFocusChanges=false
return n}f(t,[{key:"componentDidMount",value:function e(){window.addEventListener("focus",this.handleGlobalFocus,true)}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("focus",this.handleGlobalFocus,true)}},{key:"tryToFocus",value:function e(t){if(t instanceof HTMLElement){this.ignoreFocusChanges=true
try{t.focus()}catch(e){}this.ignoreFocusChanges=false
return document.activeElement===t}}},{key:"focusFirstElementIn",value:function e(t){var n=t.childNodes
for(var o=0;o<n.length;o++){var r=n[o]
if(this.tryToFocus(r)||this.focusFirstElementIn(r)){return true}}return false}},{key:"focusLastElementIn",value:function e(t){var n=t.childNodes
for(var o=n.length-1;o>=0;o--){var r=n[o]
if(this.tryToFocus(r)||this.focusLastElementIn(r)){return true}}return false}},{key:"render",value:function e(){var t=this.props.style
return o["createElement"](o["Fragment"],null,o["createElement"]("div",{tabIndex:"0",style:{position:"fixed"}}),o["createElement"](u["View"],{style:t,ref:this.getModalRoot},this.props.children),o["createElement"]("div",{tabIndex:"0",style:{position:"fixed"}}))}}])
return t}(o["Component"])
var v=n(3)
var w=n.n(v)
var g="data-modal-launcher-portal"
function O(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){O=function e(t){return typeof t}}else{O=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return O(e)}function S(){S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e}
return S.apply(this,arguments)}function E(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function P(e,t,n){if(t)j(e.prototype,t)
if(n)j(e,n)
return e}function C(e,t){if(t&&(O(t)==="object"||typeof t==="function")){return t}return T(e)}function k(e){k=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return k(e)}function x(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)M(e,t)}function M(e,t){M=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return M(e,t)}function T(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function F(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var B=function(e){x(t,e)
function t(){var e
var n
E(this,t)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++){r[i]=arguments[i]}n=C(this,(e=k(t)).call.apply(e,[this].concat(r)))
F(T(T(n)),"handleClick",function(e){if(e.target===e.currentTarget){n.props.onCloseModal()}})
return n}P(t,[{key:"componentDidMount",value:function e(){var t=r["findDOMNode"](this)
if(!t){return}var n=t.querySelectorAll("button")
var o=n[n.length-1]
if(!o){return}setTimeout(function(){o.focus()},0)}},{key:"render",value:function e(){var t=this.props.children
var n=F({},g,true)
return o["createElement"](u["View"],S({style:W.modalPositioner,onClick:this.handleClick},n),t)}}])
return t}(o["Component"])
var W=i["StyleSheet"].create({modalPositioner:{position:"fixed",left:0,top:0,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",overflow:"auto",background:w.a.offBlack64}})
function R(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){R=function e(t){return typeof t}}else{R=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return R(e)}function D(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function L(e,t,n){if(t)I(e.prototype,t)
if(n)I(e,n)
return e}function V(e,t){if(t&&(R(t)==="object"||typeof t==="function")){return t}return H(e)}function H(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function N(e){N=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return N(e)}function q(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)A(e,t)}function A(e,t){A=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return A(e,t)}function z(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Y=function(){var e=window.navigator.userAgent
return e.indexOf("iPad")>-1||e.indexOf("iPhone")>-1}()
var G=function(e){q(t,e)
function t(){D(this,t)
return V(this,N(t).apply(this,arguments))}L(t,[{key:"componentWillMount",value:function e(){if(t.numModalsOpened===0){var n=document.body
if(!n){throw new Error("couldn't find document.body")}t.oldOverflow=n.style.overflow
t.oldScrollY=window.scrollY
if(Y){t.oldPosition=n.style.position
t.oldWidth=n.style.width
t.oldTop=n.style.top}n.style.overflow="hidden"
if(Y){n.style.position="fixed"
n.style.width="100%"
n.style.top="".concat(-t.oldScrollY,"px")}}t.numModalsOpened++}},{key:"componentWillUnmount",value:function e(){t.numModalsOpened--
if(t.numModalsOpened===0){var n=document.body
if(!n){throw new Error("couldn't find document.body")}n.style.overflow=t.oldOverflow
if(Y){n.style.position=t.oldPosition
n.style.width=t.oldWidth
n.style.top=t.oldTop}window.scrollTo(0,t.oldScrollY)}}},{key:"render",value:function e(){return null}}])
return t}(o["Component"])
z(G,"numModalsOpened",0)
z(G,"oldOverflow",void 0)
z(G,"oldPosition",void 0)
z(G,"oldScrollY",void 0)
z(G,"oldWidth",void 0)
z(G,"oldTop",void 0)
var K=G
var U={closeModal:undefined}
var J=o["createContext"](U)
function Q(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Q=function e(t){return typeof t}}else{Q=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Q(e)}function X(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function ee(e,t,n){if(t)Z(e.prototype,t)
if(n)Z(e,n)
return e}function te(e,t){if(t&&(Q(t)==="object"||typeof t==="function")){return t}return ie(e)}function ne(e){ne=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ne(e)}function oe(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)re(e,t)}function re(e,t){re=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return re(e,t)}function ie(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ue(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var le=function(e){oe(t,e)
function t(){var e
var n
X(this,t)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++){r[i]=arguments[i]}n=te(this,(e=ne(t)).call.apply(e,[this].concat(r)))
ue(ie(ie(n)),"state",{opened:false})
ue(ie(ie(n)),"_openModal",function(){n.setState({opened:true})})
ue(ie(ie(n)),"handleCloseModal",function(){n.setState({opened:false},function(){n.props.onClose&&n.props.onClose()})})
return n}ee(t,[{key:"_renderModal",value:function e(){if(typeof this.props.modal==="function"){return this.props.modal({closeModal:this.handleCloseModal})}else{return this.props.modal}}},{key:"render",value:function e(){var t=this.props.children?this.props.children({openModal:this._openModal}):null
var n=document,i=n.body
if(!i){return null}return o["createElement"](J.Provider,{value:{closeModal:this.handleCloseModal}},t,this.state.opened&&r["createPortal"](o["createElement"](m,{style:ce.container},o["createElement"](B,{onCloseModal:this.handleCloseModal},this._renderModal())),i),this.state.opened&&o["createElement"](ae,{onClose:this.handleCloseModal}),this.state.opened&&o["createElement"](K,null))}}],[{key:"getDerivedStateFromProps",value:function e(t,n){if(typeof t.opened==="boolean"&&t.children){throw new Error("'children' and 'opened' can't be used together")}if(typeof t.opened==="boolean"&&!t.onClose){throw new Error("'onClose' should be used with 'opened'")}if(typeof t.opened!=="boolean"&&!t.children){throw new Error("either 'children' or 'opened' must be set")}return{opened:typeof t.opened==="boolean"?t.opened:n.opened}}}])
return t}(o["Component"])
var ae=function(e){oe(t,e)
function t(){var e
var n
X(this,t)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++){r[i]=arguments[i]}n=te(this,(e=ne(t)).call.apply(e,[this].concat(r)))
ue(ie(ie(n)),"_handleKeyup",function(e){if(e.key==="Escape"){e.preventDefault()
e.stopPropagation()
n.props.onClose()}})
return n}ee(t,[{key:"componentDidMount",value:function e(){window.addEventListener("keyup",this._handleKeyup)}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("keyup",this._handleKeyup)}},{key:"render",value:function e(){return null}}])
return t}(o["Component"])
var ce=i["StyleSheet"].create({container:{zIndex:1080}})
var fe=n(5)
var se=n.n(fe)
function pe(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){pe=function e(t){return typeof t}}else{pe=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return pe(e)}function ye(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function de(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function be(e,t,n){if(t)de(e.prototype,t)
if(n)de(e,n)
return e}function he(e,t){if(t&&(pe(t)==="object"||typeof t==="function")){return t}return me(e)}function me(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ve(e){ve=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ve(e)}function we(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ge(e,t)}function ge(e,t){ge=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return ge(e,t)}var Oe=function(e){we(t,e)
function t(){ye(this,t)
return he(this,ve(t).apply(this,arguments))}be(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children
return o["createElement"](u["MediaLayout"],{spec:u["MEDIA_MODAL_SPEC"]},o["createElement"](u["View"],{style:[Se.wrapper,n],role:"dialog","aria-labelledby":"wb-modal-title"},r))}}])
return t}(o["Component"])
var Se=i["StyleSheet"].create({wrapper:{display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative",borderRadius:4,overflow:"hidden"},small:{width:"100%",height:"100%",borderRadius:0,flexDirection:"column"}})
function Ee(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ee=function e(t){return typeof t}}else{Ee=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ee(e)}function _e(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function je(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function Pe(e,t,n){if(t)je(e.prototype,t)
if(n)je(e,n)
return e}function Ce(e,t){if(t&&(Ee(t)==="object"||typeof t==="function")){return t}return ke(e)}function ke(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function xe(e){xe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return xe(e)}function Me(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Te(e,t)}function Te(e,t){Te=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Te(e,t)}function Fe(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Be=function(e){Me(t,e)
function t(){_e(this,t)
return Ce(this,xe(t).apply(this,arguments))}Pe(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.color,i=t.children
return o["createElement"](u["View"],{style:[We.header,r==="dark"&&We.dark,n]},i)}}])
return t}(o["Component"])
Fe(Be,"defaultProps",{color:"dark"})
var We=i["StyleSheet"].create({header:{flex:"0 0 auto",boxSizing:"border-box",maxHeight:108,paddingLeft:64,paddingRight:64,paddingTop:8,paddingBottom:8,display:"flex",flexDirection:"row"},dark:{background:w.a.darkBlue,color:w.a.white},small:{paddingLeft:16,paddingRight:16}})
function Re(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Re=function e(t){return typeof t}}else{Re=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Re(e)}function De(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ie(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function Le(e,t,n){if(t)Ie(e.prototype,t)
if(n)Ie(e,n)
return e}function Ve(e,t){if(t&&(Re(t)==="object"||typeof t==="function")){return t}return He(e)}function He(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Ne(e){Ne=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Ne(e)}function qe(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Ae(e,t)}function Ae(e,t){Ae=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Ae(e,t)}function ze(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Ye=function(e){qe(t,e)
function t(){De(this,t)
return Ve(this,Ne(t).apply(this,arguments))}Le(t,[{key:"render",value:function e(){var t=this.props,n=t.header,r=t.scrollOverflow,i=t.style,l=t.children
return o["createElement"](u["View"],{style:[Ge.wrapper,r&&Ge.scrollOverflow]},!n||Re(n)==="object"&&n.type===Be?n:o["createElement"](Be,null,n),o["createElement"](u["View"],{style:[Ge.content,i]},l))}}])
return t}(o["Component"])
ze(Ye,"defaultProps",{scrollOverflow:true})
var Ge=i["StyleSheet"].create({wrapper:{flex:1,display:"block"},scrollOverflow:{overflow:"auto"},content:{flex:1,minHeight:"100%",padding:64,boxSizing:"border-box"},small:{padding:"32px 16px"}})
function Ke(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ke=function e(t){return typeof t}}else{Ke=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ke(e)}function Ue(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Je(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function Qe(e,t,n){if(t)Je(e.prototype,t)
if(n)Je(e,n)
return e}function Xe(e,t){if(t&&(Ke(t)==="object"||typeof t==="function")){return t}return Ze(e)}function Ze(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function $e(e){$e=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return $e(e)}function et(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)tt(e,t)}function tt(e,t){tt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return tt(e,t)}var nt=function(e){et(t,e)
function t(){Ue(this,t)
return Xe(this,$e(t).apply(this,arguments))}Qe(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children
return o["createElement"](u["View"],{style:[ot.footer,n]},r)}}])
return t}(o["Component"])
var ot=i["StyleSheet"].create({footer:{flex:"0 0 auto",boxSizing:"border-box",minHeight:64,paddingLeft:16,paddingRight:16,paddingTop:8,paddingBottom:8,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",borderTopStyle:"solid",borderTopColor:w.a.offBlack16,borderTopWidth:1}})
var rt=n(7)
var it=n(6)
var ut=n.n(it)
function lt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){lt=function e(t){return typeof t}}else{lt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return lt(e)}function at(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ct(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function ft(e,t,n){if(t)ct(e.prototype,t)
if(n)ct(e,n)
return e}function st(e,t){if(t&&(lt(t)==="object"||typeof t==="function")){return t}return pt(e)}function pt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function yt(e){yt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return yt(e)}function dt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)bt(e,t)}function bt(e,t){bt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return bt(e,t)}var ht=function(e){dt(t,e)
function t(){at(this,t)
return st(this,yt(t).apply(this,arguments))}ft(t,[{key:"render",value:function e(){var t=this.props,n=t.light,r=t.onClick
return o["createElement"](J.Consumer,null,function(e){var t=e.closeModal
if(t&&r){throw new Error("You've specified 'onClose' on a modal when using ModalLauncher.  Please specify 'onClose' on the ModalLauncher instead")}return o["createElement"](ut.a,{icon:rt["icons"].dismiss,"aria-label":"Close modal",onClick:t||r,kind:n?"primary":"tertiary",light:n})})}}])
return t}(o["Component"])
function mt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){mt=function e(t){return typeof t}}else{mt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return mt(e)}function vt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function wt(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function gt(e,t,n){if(t)wt(e.prototype,t)
if(n)wt(e,n)
return e}function Ot(e,t){if(t&&(mt(t)==="object"||typeof t==="function")){return t}return St(e)}function St(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Et(e){Et=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Et(e)}function _t(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)jt(e,t)}function jt(e,t){jt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return jt(e,t)}function Pt(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Ct=function(e){_t(t,e)
function t(){vt(this,t)
return Ot(this,Et(t).apply(this,arguments))}gt(t,[{key:"maybeRenderCloseButton",value:function e(){var t=this.props,n=t.showCloseButton,r=t.onClose,i=t.color,l=t.titleBar
if(!n){return null}var a=l&&l.props.color||i
return o["createElement"](u["View"],{style:[kt.closeButton]},o["createElement"](ht,{onClick:r,light:a==="dark"}))}},{key:"render",value:function e(){var t=this.props,n=t.content,r=t.titleBar,i=t.header,l=t.footer,a=t.scrollOverflow,c=t.color,f=t.style
var s=n&&mt(n)==="object"&&n.type===Ye?n:o["createElement"](Ye,null,n)
if(s){s=o["cloneElement"](s,{scrollOverflow:a,header:i||s.props.header,style:[!!r&&kt.hasTitleBar,!!l&&kt.hasFooter,s.props.style]})}return o["createElement"](u["View"],{style:[kt.wrapper,c==="dark"&&kt.dark,f]},this.maybeRenderCloseButton(),r,s,!l||mt(l)==="object"&&l.type===nt?l:o["createElement"](nt,null,l))}}])
return t}(o["Component"])
Pt(Ct,"defaultProps",{showCloseButton:false,scrollOverflow:true,color:"light"})
var kt=i["StyleSheet"].create({wrapper:{flex:"1 1 auto",position:"relative",display:"flex",flexDirection:"column",background:"white",boxSizing:"border-box",height:"100%",width:"100%"},closeButton:{position:"absolute",left:16,top:16,zIndex:1},smallCloseButton:{left:16,top:16},dark:{background:w.a.darkBlue,color:w.a.white},hasTitleBar:{paddingTop:32},hasFooter:{paddingBottom:32},smallWithCloseButton:{paddingTop:64}})
function xt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){xt=function e(t){return typeof t}}else{xt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return xt(e)}function Mt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Tt(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function Ft(e,t,n){if(t)Tt(e.prototype,t)
if(n)Tt(e,n)
return e}function Bt(e,t){if(t&&(xt(t)==="object"||typeof t==="function")){return t}return Wt(e)}function Wt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Rt(e){Rt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Rt(e)}function Dt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)It(e,t)}function It(e,t){It=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return It(e,t)}var Lt=function(e){Dt(t,e)
function t(){Mt(this,t)
return Bt(this,Rt(t).apply(this,arguments))}Ft(t,[{key:"render",value:function e(){var t=this.props,n=t.onClose,r=t.title,i=t.subtitle,u=t.header,l=t.footer,a=t.content,c=t.preview
return o["createElement"](Oe,{style:Vt.wrapper},o["createElement"](Ct,{onClose:n,titleBar:o["createElement"](se.a,{leftContent:o["createElement"](ht,{light:!!u,onClick:n}),title:r,subtitle:i,color:u?"dark":"light"}),header:u,content:a,footer:l}),c&&o["createElement"](Ct,{color:"dark",style:[Vt.preview],content:o["createElement"](Ye,{style:Vt.previewContent},c)}))}}])
return t}(o["Component"])
var Vt=i["StyleSheet"].create({wrapper:{width:"93.75%",maxWidth:960,height:"81.25%",maxHeight:624},preview:{maxWidth:392,flex:"1 0 auto"},previewContent:{padding:"0 64px 0 0"},smallPreview:{display:"none"}})
function Ht(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}function Nt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Nt=function e(t){return typeof t}}else{Nt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Nt(e)}function qt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function At(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function zt(e,t,n){if(t)At(e.prototype,t)
if(n)At(e,n)
return e}function Yt(e,t){if(t&&(Nt(t)==="object"||typeof t==="function")){return t}return Gt(e)}function Gt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Kt(e){Kt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Kt(e)}function Ut(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Jt(e,t)}function Jt(e,t){Jt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Jt(e,t)}var Qt=function(e){Ut(t,e)
function t(){qt(this,t)
return Yt(this,Kt(t).apply(this,arguments))}zt(t,[{key:"render",value:function e(){var t=this.props,n=t.onClose,r=t.sidebar,i=t.fullBleedSidebar,l=t.content,a=t.footer,c=t.mediaSize
if(c!=="small"){return o["createElement"](u["View"],{style:$t.contentWrapper},o["createElement"](Ct,{showCloseButton:true,color:"dark",onClose:n,style:$t.column,content:i?o["createElement"](Ye,{style:$t.fullBleed},r):r}),o["createElement"](Ct,{style:$t.column,content:l,footer:a}))}return o["createElement"](u["View"],{style:$t.contentFooterWrapper},o["createElement"](u["View"],{style:[$t.contentWrapper,$t.smallContentWrapper]},o["createElement"](Ct,{showCloseButton:true,color:"dark",onClose:n,style:$t.smallColumn,content:i?o["createElement"](Ye,{style:$t.fullBleed},r):r,scrollOverflow:false}),o["createElement"](Ct,{style:$t.smallColumn,content:l,scrollOverflow:false})),a&&o["createElement"](u["View"],{style:$t.smallFooter},!a||Nt(a)==="object"&&a.type===nt?a:o["createElement"](nt,null,a)))}}])
return t}(o["Component"])
var Xt=Object(u["MediaLayoutWrapper"])(Qt)
var Zt=function(e){Ut(t,e)
function t(){qt(this,t)
return Yt(this,Kt(t).apply(this,arguments))}zt(t,[{key:"render",value:function e(){return o["createElement"](Oe,{style:$t.dialog},o["createElement"](Xt,this.props))}}])
return t}(o["Component"])
Ht(Zt,"defaultProps",{fullBleedSidebar:true})
var $t=i["StyleSheet"].create({dialog:{width:"86.72%",maxWidth:888,height:"60.42%",minHeight:464},smallDialog:{background:w.a.white},column:{flex:"0 0 50%"},smallColumn:{flex:"0 0 auto",height:"auto"},contentFooterWrapper:{flexDirection:"column",height:"100%"},contentWrapper:{flexDirection:"row",height:"100%",width:"100%"},fullBleed:{padding:0},smallContentWrapper:{flexDirection:"column",overflow:"auto"},smallFooter:{minHeight:64}})
function en(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){en=function e(t){return typeof t}}else{en=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return en(e)}function tn(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function nn(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||false
o.configurable=true
if("value"in o)o.writable=true
Object.defineProperty(e,o.key,o)}}function on(e,t,n){if(t)nn(e.prototype,t)
if(n)nn(e,n)
return e}function rn(e,t){if(t&&(en(t)==="object"||typeof t==="function")){return t}return un(e)}function un(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ln(e){ln=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ln(e)}function an(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)cn(e,t)}function cn(e,t){cn=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return cn(e,t)}var fn=function(e){an(t,e)
function t(){tn(this,t)
return rn(this,ln(t).apply(this,arguments))}on(t,[{key:"render",value:function e(){var t=this.props,n=t.onClose,r=t.content,i=t.footer,l=t.mediaSize
if(l!=="small"){return o["createElement"](u["View"],{style:yn.contentWrapper},o["createElement"](Ct,{showCloseButton:true,onClose:n,content:r,footer:i}))}return o["createElement"](u["View"],{style:yn.contentFooterWrapper},o["createElement"](u["View"],{style:yn.smallContentWrapper},o["createElement"](Ct,{showCloseButton:true,onClose:n,content:r,scrollOverflow:false})),i&&o["createElement"](u["View"],{style:yn.smallFooter},!i||en(i)==="object"&&i.type===nt?i:o["createElement"](nt,null,i)))}}])
return t}(o["Component"])
var sn=Object(u["MediaLayoutWrapper"])(fn)
var pn=function(e){an(t,e)
function t(){tn(this,t)
return rn(this,ln(t).apply(this,arguments))}on(t,[{key:"render",value:function e(){return o["createElement"](Oe,{style:[yn.dialog,yn.largeDialog]},o["createElement"](sn,this.props))}}])
return t}(o["Component"])
var yn=i["StyleSheet"].create({dialog:{background:w.a.white},largeDialog:{width:"64.65%",maxWidth:662,maxHeight:"90%"},contentFooterWrapper:{flexDirection:"column",height:"100%"},contentWrapper:{width:"100%"},smallContentWrapper:{flexDirection:"column",overflow:"auto",height:"100%",width:"100%"},smallFooter:{minHeight:64}})
function dn(e){var t=e&&e.parentElement
while(t&&!t.hasAttribute(g)){t=t.parentElement}return t}function bn(e){return dn(e)}n.d(t,"ModalLauncher",function(){return le})
n.d(t,"StandardModal",function(){return Lt})
n.d(t,"TwoColumnModal",function(){return Zt})
n.d(t,"OneColumnModal",function(){return pn})
n.d(t,"maybeGetPortalMountedModalHostElement",function(){return bn})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-progress-spinner-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-progress-spinner-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-progress-spinner-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(3)
var i=r(2)
var a=r(1)
var u=r.n(a)
function c(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){c=function e(t){return typeof t}}else{c=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return c(e)}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function s(e,t,r){if(t)l(e.prototype,t)
if(r)l(e,r)
return e}function p(e,t){if(t&&(c(t)==="object"||typeof t==="function")){return t}return y(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return b(e)}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)m(e,t)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return m(e,t)}function v(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var h={xsmall:16,small:24,medium:48,large:96}
var g={xsmall:"M7.237.741C7.165.393 6.95.154 6.656.053A1.01 1.01 0 0 0 6.18.01c-.053.009-.053.009-.087.017C2.553.949 0 4.214 0 7.91 0 12.36 3.598 16 8 16c4.4 0 8-3.647 8-8.112a1.02 1.02 0 0 0-.118-.423.877.877 0 0 0-.808-.48.909.909 0 0 0-.81.46c-.09.151-.13.296-.146.455-.08 3.493-2.737 6.207-6.118 6.207-3.41 0-6.118-2.74-6.118-6.196 0-2.843 1.936-5.291 4.644-6.022.1-.028.224-.082.352-.177a.928.928 0 0 0 .36-.97z",small:"M10.598.943c-.093-.449-.362-.748-.732-.875a1.314 1.314 0 0 0-.723-.033C3.83 1.417 0 6.317 0 11.864 0 18.538 5.398 24 12 24c6.598 0 12-5.471 12-12.16a1.333 1.333 0 0 0-.154-.548c-.193-.368-.544-.606-1.023-.606-.472 0-.825.229-1.035.585-.117.2-.169.39-.189.582-.124 5.472-4.294 9.73-9.599 9.73-5.349 0-9.599-4.3-9.599-9.72 0-4.46 3.036-8.299 7.28-9.444.127-.036.291-.107.458-.232.373-.28.57-.711.46-1.244z",medium:"M44.19 23.455a1.91 1.91 0 1 1 3.801 0h.003c.004.18.006.363.006.545 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c.182 0 .364.002.545.006V.01a1.91 1.91 0 1 1 0 3.801v.015A20.564 20.564 0 0 0 24 3.818C12.854 3.818 3.818 12.854 3.818 24c0 11.146 9.036 20.182 20.182 20.182 11.146 0 20.182-9.036 20.182-20.182 0-.182-.003-.364-.007-.545h.015z",large:"M88.38 46.91a3.818 3.818 0 1 1 7.602 0h.006c.008.362.012.725.012 1.09 0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0c.365 0 .728.004 1.09.012v.005a3.818 3.818 0 1 1 0 7.602v.032c-.362-.01-.725-.015-1.09-.015C25.708 7.636 7.636 25.708 7.636 48c0 22.292 18.072 40.364 40.364 40.364 22.292 0 40.364-18.072 40.364-40.364 0-.365-.005-.728-.015-1.09h.032z"}
var w={light:u.a.white,dark:u.a.offBlack16}
var O=Object(i["addStyle"])("path")
var S=function(e){d(t,e)
function t(){f(this,t)
return p(this,b(t).apply(this,arguments))}s(t,[{key:"render",value:function e(){var t=this.props,r=t.size,o=t.light,a=t.style
var u=h[r]
var c=g[r]
var f=o?w.light:w.dark
var l=n["createElement"]("svg",{xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 ".concat(u," ").concat(u)},n["createElement"](O,{style:[x.loadingSpinner,{fill:f}],fillRule:"nonzero",d:c}))
return n["createElement"](i["View"],{style:[x.spinnerContainer,a]},l)}}])
return t}(n["Component"])
v(S,"defaultProps",{size:"large",light:false})
var j={"0%":{transform:"rotate(0deg)"},"50%":{transform:"rotate(180deg)"},"100%":{transform:"rotate(360deg)"}}
var x=o["StyleSheet"].create({spinnerContainer:{justifyContent:"center"},loadingSpinner:{transformOrigin:"50% 50%",animationName:j,animationDuration:"1.1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}})
r.d(t,"CircularSpinner",function(){return S})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-spacing-v2/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-spacing-v2/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-spacing-v2/dist/index.js", function(require, module, exports) {
module.exports=function(e){var r={}
function t(n){if(r[n]){return r[n].exports}var u=r[n]={i:n,l:false,exports:{}}
e[n].call(u.exports,u,u.exports,t)
u.l=true
return u.exports}t.m=e
t.c=r
t.d=function(e,r,n){if(!t.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:n})}}
t.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
t.t=function(e,r){if(r&1)e=t(e)
if(r&8)return e
if(r&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
t.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(r&2&&typeof e!="string")for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u))
return n}
t.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e}
t.d(r,"a",r)
return r}
t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}
t.p=""
return t(t.s=0)}([function(e,r,t){"use strict"
t.r(r)
t.d(r,"default",function(){return n})
var n={xxxSmall:4,xxSmall:6,xSmall:8,small:12,medium:16,large:24,xLarge:32,xxLarge:48,xxxLarge:64}}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-toolbar-v2/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-toolbar-v2/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-toolbar-v2/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-typography-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("aphrodite")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(4)
var i=r(3)
var l=r.n(i)
var u=r(1)
var a=r(2)
function c(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){c=function e(t){return typeof t}}else{c=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return c(e)}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function p(e,t,r){if(t)s(e.prototype,t)
if(r)s(e,r)
return e}function y(e,t){if(t&&(c(t)==="object"||typeof t==="function")){return t}return b(e)}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return d(e)}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)g(e,t)}function g(e,t){g=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return g(e,t)}function h(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var v=function(e){m(t,e)
function t(){f(this,t)
return y(this,d(t).apply(this,arguments))}p(t,[{key:"render",value:function e(){var t=this.props,r=t.color,o=t.leftContent,i=t.rightContent,l=t.size,c=t.subtitle,f=t.title
var s=c?a["LabelLarge"]:a["HeadingSmall"]
return n["createElement"](u["View"],{style:[w.container,r==="dark"&&w.dark,l==="small"&&w.small]},n["createElement"](u["View"],{style:w.column},n["createElement"](u["View"],{style:w.leftColumn},o)),f&&n["createElement"](u["View"],{style:[w.column,w.wideColumn]},n["createElement"](u["View"],{style:[w.titles,w.verticalAlign,w.center]},n["createElement"](s,{id:"wb-toolbar-title"},f),c&&n["createElement"](a["LabelSmall"],{style:r==="light"&&w.subtitle},c))),n["createElement"](u["View"],{style:w.column},n["createElement"](u["View"],{style:w.rightColumn},i)))}}])
return t}(n["Component"])
h(v,"defaultProps",{color:"light",leftContent:null,rightContent:null,size:"medium"})
var w=o["StyleSheet"].create({container:{border:"1px solid rgba(33, 36, 44, 0.16)",display:"flex",flexDirection:"row",minHeight:66,paddingLeft:16,paddingRight:16,position:"relative",width:"100%"},small:{minHeight:50},dark:{backgroundColor:l.a.darkBlue,boxShadow:"0 1px 0 0 rgba(255, 255, 255, 0.64)",color:"white"},verticalAlign:{justifyContent:"center"},column:{flex:1,justifyContent:"center"},wideColumn:{flexBasis:"50%"},leftColumn:{alignItems:"center",flexDirection:"row",justifyContent:"flex-start"},rightColumn:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},center:{textAlign:"center"},subtitle:{color:"rgba(33, 36, 44, 0.64)"},titles:{padding:12}})
r.d(t,"default",function(){return v})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-tooltip-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-tooltip-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-tooltip-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,r)
o.l=true
return o.exports}r.m=e
r.c=t
r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}}
r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
r.t=function(e,t){if(t&1)e=r(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o))
return n}
r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-spacing-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-color-v1")},function(e,t){e.exports=require("aphrodite")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-typography-v1")},function(e,t){e.exports=require("popper")},function(e,t){e.exports=require("react-popper")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-layout-v1")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-modal-v1")},function(e,t,r){"use strict"
r.r(t)
var n=r(0)
var o=r(5)
var i=r(2)
var a=r(10)
function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)c(e.prototype,t)
if(r)c(e,r)
return e}function s(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var f=function(){function e(){u(this,e)
s(this,"_subscribers",[])
s(this,"_active",void 0)}l(e,[{key:"_getIndex",value:function e(t){return this._subscribers.findIndex(function(e){return e===t})}},{key:"steal",value:function e(t){var r=!!this._active
this._active=true
var n=true
var o=false
var i=undefined
try{for(var a=this._subscribers[Symbol.iterator](),u;!(n=(u=a.next()).done);n=true){var c=u.value
if(c===t){continue}c.activeStateStolen()}}catch(e){o=true
i=e}finally{try{if(!n&&a.return!=null){a.return()}}finally{if(o){throw i}}}return r}},{key:"giveup",value:function e(){this._active=false}},{key:"subscribe",value:function e(t){var r=this
if(this._getIndex(t)>=0){throw new Error("Already subscribed.")}this._subscribers.push(t)
var n=function e(){var n=r._getIndex(t)
r._subscribers.splice(n,1)}
return n}}])
return e}()
var p="data-tooltip-portal"
var h=100
var d=75
function y(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){y=function e(t){return typeof t}}else{y=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return y(e)}function v(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function m(e,t,r){if(t)b(e.prototype,t)
if(r)b(e,r)
return e}function w(e,t){if(t&&(y(t)==="object"||typeof t==="function")){return t}return S(e)}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return g(e)}function O(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)k(e,t)}function k(e,t){k=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return k(e,t)}function S(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function E(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var P=new f
var j=function(e){O(t,e)
function t(e){var r
v(this,t)
r=w(this,g(t).call(this,e))
E(S(S(r)),"_weSetFocusivity",void 0)
E(S(S(r)),"_anchorNode",void 0)
E(S(S(r)),"_focused",void 0)
E(S(S(r)),"_hovered",void 0)
E(S(S(r)),"_stolenFromUs",void 0)
E(S(S(r)),"_unsubscribeFromTracker",void 0)
E(S(S(r)),"_timeoutID",void 0)
E(S(S(r)),"activeStateStolen",function(){r._stolenFromUs=r.state.active||!!r._timeoutID
r._focused=false
r._setActiveState(false,true)})
E(S(S(r)),"_handleFocusIn",function(){r._updateActiveState(r._hovered,true)})
E(S(S(r)),"_handleFocusOut",function(){r._updateActiveState(r._hovered,false)})
E(S(S(r)),"_handleMouseEnter",function(){r._updateActiveState(true,r._focused)})
E(S(S(r)),"_handleMouseLeave",function(){r._updateActiveState(false,r._focused)})
E(S(S(r)),"_handleKeyUp",function(e){if(e.key==="Escape"&&r.state.active){e.preventDefault()
e.stopPropagation()
r._updateActiveState(false,false)}})
r._focused=false
r._hovered=false
r.state={active:false}
return r}m(t,[{key:"componentDidMount",value:function e(){var t=o["findDOMNode"](this)
if(t instanceof Text){throw new Error("TooltipAnchor must be applied to an Element. Text content is not supported.")}this._unsubscribeFromTracker=P.subscribe(this)
this._anchorNode=t
this._updateFocusivity()
if(t){t.addEventListener("focusin",this._handleFocusIn)
t.addEventListener("focusout",this._handleFocusOut)
t.addEventListener("mouseenter",this._handleMouseEnter)
t.addEventListener("mouseleave",this._handleMouseLeave)
this.props.anchorRef(this._anchorNode)}}},{key:"componentDidUpdate",value:function e(t){if(t.forceAnchorFocusivity!==this.props.forceAnchorFocusivity||t.children!==this.props.children){this._updateFocusivity()}}},{key:"componentWillUnmount",value:function e(){if(this._unsubscribeFromTracker){this._unsubscribeFromTracker()}this._clearPendingAction()
var t=this._anchorNode
if(t){t.removeEventListener("focusin",this._handleFocusIn)
t.removeEventListener("focusout",this._handleFocusOut)
t.removeEventListener("mouseenter",this._handleMouseEnter)
t.removeEventListener("mouseleave",this._handleMouseLeave)}if(this.state.active){document.removeEventListener("keyup",this._handleKeyUp)}}},{key:"_updateFocusivity",value:function e(){var t=this._anchorNode
if(!t){return}var r=this.props.forceAnchorFocusivity
var n=t.getAttribute("tabindex")
if(r&&!n){t.setAttribute("tabindex","0")
this._weSetFocusivity=true}else if(!r&&n){if(this._weSetFocusivity){t.removeAttribute("tabindex")
this._weSetFocusivity=false}}}},{key:"_updateActiveState",value:function e(t,r){this._hovered=t
this._focused=r
this._setActiveState(t||r)}},{key:"_clearPendingAction",value:function e(){if(this._timeoutID){clearTimeout(this._timeoutID)
this._timeoutID=null}}},{key:"_setActiveState",value:function e(t,r){var n=this
if(this._stolenFromUs||t!==this.state.active||!this.state.active&&this._timeoutID){this._clearPendingAction()}else if(t===this.state.active){return}r=r||t&&P.steal(this)
if(r){if(t){document.addEventListener("keyup",this._handleKeyUp)}else{document.removeEventListener("keyup",this._handleKeyUp)}this.setState({active:t})
this.props.onActiveChanged(t)
if(!this._stolenFromUs&&!t){P.giveup()}this._stolenFromUs=false}else{var o=t?h:d
this._timeoutID=setTimeout(function(){n._timeoutID=null
n._setActiveState(t,true)},o)}}},{key:"_renderAnchorableChildren",value:function e(){var t=this.props.children
return typeof t==="string"?n["createElement"](i["Text"],null,t):t}},{key:"_renderAccessibleChildren",value:function e(r){var o=this._renderAnchorableChildren()
return n["cloneElement"](o,{"aria-describedby":r.get(t.ariaContentId)})}},{key:"render",value:function e(){if(this.props.ids){return this._renderAccessibleChildren(this.props.ids)}return this._renderAnchorableChildren()}}])
return t}(n["Component"])
E(j,"ariaContentId","aria-content")
E(j,"defaultProps",{forceAnchorFocusivity:true})
var x=r(4)
var F=r(3)
var T=r.n(F)
var C=r(1)
var A=r.n(C)
var R=r(9)
var D=r(6)
function B(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){B=function e(t){return typeof t}}else{B=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return B(e)}function L(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function M(e,t,r){if(t)I(e.prototype,t)
if(r)I(e,r)
return e}function U(e,t){if(t&&(B(t)==="object"||typeof t==="function")){return t}return q(e)}function q(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function N(e){N=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return N(e)}function W(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)H(e,t)}function H(e,t){H=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return H(e,t)}var V=function(e){W(t,e)
function t(){L(this,t)
return U(this,N(t).apply(this,arguments))}M(t,[{key:"_renderTitle",value:function e(){var t=this.props.title
if(t){if(typeof t==="string"){return n["createElement"](D["HeadingSmall"],null,t)}else{return t}}return null}},{key:"_renderChildren",value:function e(){var t=this.props.children
if(typeof t==="string"){return n["createElement"](D["LabelMedium"],null,t)}else{return t}}},{key:"render",value:function e(){var t=this._renderTitle()
var r=this._renderChildren()
var o=t?K.withTitle:K.withoutTitle
return n["createElement"](i["View"],{style:o},t,t&&r&&n["createElement"](R["Strut"],{size:A.a.xxxSmall}),r)}}])
return t}(n["Component"])
var K=x["StyleSheet"].create({withoutTitle:{margin:"10px ".concat(A.a.medium,"px")},withTitle:{margin:A.a.medium}})
function X(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){X=function e(t){return typeof t}}else{X=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return X(e)}function z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{}
var n=Object.keys(r)
if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){G(e,t,r[t])})}return e}function G(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function J(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Y(e,t,r){if(t)Q(e.prototype,t)
if(r)Q(e,r)
return e}function Z(e,t){if(t&&(X(t)==="object"||typeof t==="function")){return t}return ee(e)}function ee(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function te(e){te=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return te(e)}function re(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ne(e,t)}function ne(e,t){ne=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return ne(e,t)}var oe=0
var ie=function(e){re(t,e)
function t(){J(this,t)
return Z(this,te(t).apply(this,arguments))}Y(t,[{key:"_calculateDimensionsFromPlacement",value:function e(){var t=this.props.placement
var r=.5
switch(t){case"top":return{trimlinePoints:["0,-".concat(r),"".concat(ce,",-").concat(r)],points:["0,0","".concat(ce/2,",").concat(le),"".concat(ce,",0")],height:le,width:ce}
case"right":return{trimlinePoints:["".concat(le+r,",0"),"".concat(le+r,",").concat(ce)],points:["".concat(le,",0"),"0,".concat(ce/2),"".concat(le,",").concat(ce)],width:le,height:ce}
case"bottom":return{trimlinePoints:["0, ".concat(le+r),"".concat(ce,",").concat(le+r)],points:["0, ".concat(le),"".concat(ce/2,",0"),"".concat(ce,",").concat(le)],width:ce,height:le}
case"left":return{trimlinePoints:["-".concat(r,",0"),"-".concat(r,",").concat(ce)],points:["0,0","".concat(le,",").concat(ce/2),"0,".concat(ce)],width:le,height:ce}
default:throw new Error("Unknown placement: ".concat(t))}}},{key:"_getFilterPositioning",value:function e(){var t=this.props.placement
switch(t){case"top":return{y:"-50%",x:"-50%",offsetShadowX:0}
case"bottom":return null
case"left":return{y:"-50%",x:"0%",offsetShadowX:1}
case"right":return{y:"-50%",x:"-100%",offsetShadowX:-1}
default:throw new Error("Unknown placement: ".concat(t))}}},{key:"_maybeRenderDropshadow",value:function e(t){var r=this._getFilterPositioning()
if(!r){return null}var o=this.props.placement
var i=r.y,a=r.x,u=r.offsetShadowX
var c="tooltip-dropshadow-".concat(o,"-").concat(oe++)
return[n["createElement"]("filter",{key:"filter",id:c,width:"200%",height:"200%",x:a,y:i},n["createElement"]("feGaussianBlur",{in:"SourceAlpha",stdDeviation:A.a.xxSmall/2}),n["createElement"]("feComponentTransfer",null,n["createElement"]("feFuncA",{type:"linear",slope:"0.3"}))),n["createElement"]("g",{key:"dropshadow",transform:"translate(".concat(u,",5.5)")},n["createElement"]("polyline",{fill:T.a.offBlack16,points:t.join(" "),stroke:T.a.offBlack32,filter:"url(#".concat(c,")")}))]}},{key:"_minDistanceFromCorners",value:function e(t){var r=A.a.medium
var n=7
switch(t){case"top":case"bottom":return r
case"left":case"right":return n
default:throw new Error("Unknown placement: ".concat(t))}}},{key:"_getFullTailWidth",value:function e(){return ce+2*ue}},{key:"_getFullTailHeight",value:function e(){return le+ae}},{key:"_getContainerStyle",value:function e(){var t=this.props.placement
var r=this._getFullTailWidth()
var n=this._getFullTailHeight()
switch(t){case"top":return{top:-1,width:r,height:n}
case"right":return{left:1,width:n,height:r}
case"bottom":return{top:1,width:r,height:n}
case"left":return{left:-1,width:n,height:r}
default:throw new Error("Unknown placement: ".concat(t))}}},{key:"_getArrowStyle",value:function e(){var t=this.props.placement
switch(t){case"top":return{marginLeft:ue,marginRight:ue,paddingBottom:ae}
case"right":return{marginTop:ue,marginBottom:ue,paddingLeft:ae}
case"bottom":return{marginLeft:ue,marginRight:ue,paddingTop:ae}
case"left":return{marginTop:ue,marginBottom:ue,paddingRight:ae}
default:throw new Error("Unknown placement: ".concat(t))}}},{key:"_renderArrow",value:function e(){var t=this._calculateDimensionsFromPlacement(),r=t.trimlinePoints,o=t.points,i=t.height,a=t.width
return n["createElement"]("svg",{className:Object(x["css"])(se.arrow),style:this._getArrowStyle(),width:a,height:i},this._maybeRenderDropshadow(o),n["createElement"]("polyline",{fill:T.a.white,stroke:T.a.white,points:o.join(" ")}),n["createElement"]("polyline",{fill:T.a.white,points:o.join(" "),stroke:T.a.offBlack16}),n["createElement"]("polyline",{stroke:T.a.white,points:r.join(" ")}))}},{key:"render",value:function e(){var t=this.props,r=t.offset,o=t.placement,a=t.updateRef
return n["createElement"](i["View"],{style:[se.tailContainer,z({},r),this._getContainerStyle()],"data-placement":o,ref:a},this._renderArrow())}}])
return t}(n["Component"])
var ae=A.a.xSmall
var ue=A.a.xSmall
var ce=A.a.large
var le=A.a.small
var se=x["StyleSheet"].create({tailContainer:{position:"relative",pointerEvents:"none"},arrow:{overflow:"visible"}})
function fe(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){fe=function e(t){return typeof t}}else{fe=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return fe(e)}function pe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function he(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function de(e,t,r){if(t)he(e.prototype,t)
if(r)he(e,r)
return e}function ye(e,t){if(t&&(fe(t)==="object"||typeof t==="function")){return t}return ve(e)}function ve(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function be(e){be=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return be(e)}function me(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)_e(e,t)}function _e(e,t){_e=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return _e(e,t)}var we=function(e){me(t,e)
function t(){pe(this,t)
return ye(this,be(t).apply(this,arguments))}de(t,[{key:"render",value:function e(){var t=this.props,r=t.id,o=t.children,a=t.updateBubbleRef,u=t.placement,c=t.outOfBoundaries,l=t.style,s=t.updateTailRef,f=t.tailOffset
return n["createElement"](i["View"],{id:r,role:"tooltip","data-placement":u,ref:a,style:[c&&ge.hide,ge.bubble,ge["content-".concat(u)],l]},n["createElement"](i["View"],{style:ge.content},o),n["createElement"](ie,{updateRef:s,placement:u,offset:f}))}}])
return t}(n["Component"])
var ge=x["StyleSheet"].create({bubble:{pointerEvents:"none",position:"absolute"},hide:{pointerEvents:"none",opacity:0,backgroundColor:"transparent",color:"transparent"},"content-top":{flexDirection:"column"},"content-right":{flexDirection:"row-reverse"},"content-bottom":{flexDirection:"column-reverse"},"content-left":{flexDirection:"row"},content:{maxWidth:472,borderRadius:A.a.xxxSmall,border:"solid 1px ".concat(T.a.offBlack16),backgroundColor:T.a.white,boxShadow:"0 ".concat(A.a.xSmall,"px ").concat(A.a.xSmall,"px 0 ").concat(T.a.offBlack8),justifyContent:"center"}})
var Oe=r(8)
var ke=r(7)
var Se=r.n(ke)
function Ee(e){var t=e.getBoundingClientRect()
var r=e.currentStyle||window.getComputedStyle(e)
var n=t.left+parseFloat(r.marginLeft)+parseFloat(r.paddingLeft)+parseFloat(r.borderLeftWidth)
var o=t.top+parseFloat(r.marginTop)+parseFloat(r.paddingTop)+parseFloat(r.borderTopWidth)
var i=document.elementFromPoint(n,o)
var a=t.right-parseFloat(r.marginRight)-parseFloat(r.paddingRight)-parseFloat(r.borderRightWidth)
var u=t.bottom-parseFloat(r.marginBottom)-parseFloat(r.paddingBottom)-parseFloat(r.borderBottomWidth)
var c=document.elementFromPoint(a,u)
var l=i&&(e.contains(i)||i.contains(e))
var s=c&&(e.contains(c)||c.contains(e))
return!l&&!s}function Pe(e){var t=e.instance.reference
var r=Object(i["getElementIntersection"])(t),n=r.horizontal,o=r.vertical
var a=n!=="within"||o!=="within"||Ee(t)
if(a){if(e.hide){return e}e.hide=true
e.attributes["x-out-of-boundaries"]=""}else{if(!e.hide){return e}e.hide=false
e.attributes["x-out-of-boundaries"]=false}return e}var je={enabled:true,order:Se.a.Defaults.modifiers["hide"].order+1,fn:Pe}
function xe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Fe(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Te=function e(){var t=this
xe(this,e)
Fe(this,"updateRef",void 0)
Fe(this,"_lastRef",void 0)
Fe(this,"_targetFn",void 0)
Fe(this,"updateRef",function(e){if(e){var r=o["findDOMNode"](e)
if(r instanceof HTMLElement&&r!==t._lastRef){t._lastRef=r
t._targetFn&&t._targetFn(r)}}})
Fe(this,"setCallback",function(e){if(t._targetFn!==e){if(e&&typeof e!=="function"){throw new Error("targetFn must be a function")}t._targetFn=e||null
if(t._lastRef&&t._targetFn){t._targetFn(t._lastRef)}}})}
function Ce(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Ce=function e(t){return typeof t}}else{Ce=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Ce(e)}function Ae(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Re(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function De(e,t,r){if(t)Re(e.prototype,t)
if(r)Re(e,r)
return e}function Be(e,t){if(t&&(Ce(t)==="object"||typeof t==="function")){return t}return Ue(e)}function Le(e){Le=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Le(e)}function Ie(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Me(e,t)}function Me(e,t){Me=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Me(e,t)}function Ue(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function qe(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Ne=function(e){Ie(t,e)
function t(){var e
var r
Ae(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=Be(this,(e=Le(t)).call.apply(e,[this].concat(o)))
qe(Ue(Ue(r)),"_bubbleRefTracker",new Te)
qe(Ue(Ue(r)),"_tailRefTracker",new Te)
return r}De(t,[{key:"_renderPositionedContent",value:function e(t){var r=this.props.children
var n=t.placement||this.props.placement
this._bubbleRefTracker.setCallback(t.ref)
this._tailRefTracker.setCallback(t.arrowProps.ref)
var o={placement:n,style:{top:t.style.top,left:t.style.left,position:t.style.position,transform:t.style.transform},updateBubbleRef:this._bubbleRefTracker.updateRef,tailOffset:{top:t.arrowProps.style.top,left:t.arrowProps.style.left},updateTailRef:this._tailRefTracker.updateRef,outOfBoundaries:t.outOfBoundaries}
return r(o)}},{key:"render",value:function e(){var t=this
var r=this.props,o=r.anchorElement,i=r.placement
return n["createElement"](Oe["Popper"],{referenceElement:o,placement:i,modifiers:{wbVisibility:je,preventOverflow:{boundariesElement:"viewport"}}},function(e){return t._renderPositionedContent(e)})}}])
return t}(n["Component"])
function We(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){We=function e(t){return typeof t}}else{We=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return We(e)}function He(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ve(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}function Ke(e,t,r){if(t)Ve(e.prototype,t)
if(r)Ve(e,r)
return e}function Xe(e,t){if(t&&(We(t)==="object"||typeof t==="function")){return t}return Qe(e)}function ze(e){ze=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ze(e)}function Ge(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Je(e,t)}function Je(e,t){Je=Object.setPrototypeOf||function e(t,r){t.__proto__=r
return t}
return Je(e,t)}function Qe(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Ye(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var Ze=function(e){Ge(t,e)
function t(){var e
var r
He(this,t)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++){o[i]=arguments[i]}r=Xe(this,(e=ze(t)).call.apply(e,[this].concat(o)))
Ye(Qe(Qe(r)),"state",{active:false,anchorElement:null})
return r}Ke(t,[{key:"_updateAnchorElement",value:function e(t){if(t&&t!==this.state.anchorElement){this.setState({anchorElement:t})}}},{key:"_renderBubbleContent",value:function e(){var t=this.props,r=t.title,o=t.content
if(typeof o==="string"){return n["createElement"](V,{title:r},o)}else if(r){return n["cloneElement"](o,{title:r})}else{return o}}},{key:"_renderPopper",value:function e(r){var o=this
var i=this.props.id
var a=r?r.get(t.ariaContentId):i
if(!a){throw new Error("Did not get an identifier factory nor a id prop")}var u=this.props.placement
return n["createElement"](Ne,{anchorElement:this.state.anchorElement,placement:u},function(e){return n["createElement"](we,{id:a,style:e.style,tailOffset:e.tailOffset,outOfBoundaries:e.outOfBoundaries,placement:e.placement,updateTailRef:e.updateTailRef,updateBubbleRef:e.updateBubbleRef},o._renderBubbleContent())})}},{key:"_getHost",value:function e(){var t=this.state.anchorElement
return Object(a["maybeGetPortalMountedModalHostElement"])(t)||document.body}},{key:"_renderTooltipAnchor",value:function e(t){var r=this
var i=this.props,a=i.children,u=i.forceAnchorFocusivity
var c=this.state.active
var l=this._getHost()
return n["createElement"](n["Fragment"],null,n["createElement"](j,{forceAnchorFocusivity:u,anchorRef:function e(t){return r._updateAnchorElement(t)},onActiveChanged:function e(t){return r.setState({active:t})},ids:t},a),l&&c&&o["createPortal"](this._renderPopper(t),l))}},{key:"render",value:function e(){var t=this
var r=this.props.id
if(r){return this._renderTooltipAnchor()}else{return n["createElement"](i["UniqueIDProvider"],{scope:"tooltip",mockOnFirstRender:true},function(e){return t._renderTooltipAnchor(e)})}}}])
return t}(n["Component"])
Ye(Ze,"ariaContentId","aria-content")
Ye(Ze,"defaultProps",{forceAnchorFocusivity:true,placement:"top"})
r.d(t,"default",function(){return Ze})
r.d(t,"TooltipContent",function(){return V})}])

});
KAdefine("javascript/node_modules/@khanacademy/wonder-blocks-typography-v1/index.js", function(require, module, exports) {
module.exports=require("../../../../third_party/node_modules/@khanacademy/wonder-blocks-typography-v1/dist/index.js")

});
KAdefine("third_party/node_modules/@khanacademy/wonder-blocks-typography-v1/dist/index.js", function(require, module, exports) {
module.exports=function(e){var t={}
function n(r){if(t[r]){return t[r].exports}var o=t[r]={i:r,l:false,exports:{}}
e[r].call(o.exports,o,o.exports,n)
o.l=true
return o.exports}n.m=e
n.c=t
n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}}
n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}
n.t=function(e,t){if(t&1)e=n(e)
if(t&8)return e
if(t&4&&typeof e==="object"&&e&&e.__esModule)return e
var r=Object.create(null)
n.r(r)
Object.defineProperty(r,"default",{enumerable:true,value:e})
if(t&2&&typeof e!="string")for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o))
return r}
n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e}
n.d(t,"a",t)
return t}
n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
n.p=""
return n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@khanacademy/wonder-blocks-core-v2")},function(e,t){e.exports=require("aphrodite")},function(e,t,n){"use strict"
n.r(t)
var r=n(2)
var o,i,u
function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{}
var r=Object.keys(n)
if(typeof Object.getOwnPropertySymbols==="function"){r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))}r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var l=400
var a=700
var p=900
var y="@media (max-width: 1023px)"
var s="@media (min-width: 1024px)"
var b={display:"block"}
var O="Lato, sans-serif"
var h="Inconsolata, monospace"
var v=r["StyleSheet"].create({Title:f({},b,(o={fontFamily:O,fontWeight:p},c(o,s,{fontSize:36,lineHeight:"40px"}),c(o,y,{fontSize:28,lineHeight:"32px"}),o)),Tagline:f({},b,{fontFamily:O,fontWeight:l,fontSize:20,lineHeight:"24px"}),HeadingLarge:f({},b,(i={fontFamily:O,fontWeight:a},c(i,s,{fontSize:28,lineHeight:"32px"}),c(i,y,{fontSize:24,lineHeight:"28px"}),i)),HeadingMedium:f({},b,(u={fontFamily:O,fontWeight:a},c(u,s,{fontSize:24,lineHeight:"28px"}),c(u,y,{fontSize:22,lineHeight:"26px"}),u)),HeadingSmall:f({},b,{fontFamily:O,fontWeight:a,fontSize:20,lineHeight:"24px"}),HeadingXSmall:f({},b,{fontFamily:O,fontWeight:a,fontSize:12,lineHeight:"16px",letterSpacing:.6,textTransform:"uppercase"}),BodySerifBlock:f({},b,{fontFamily:"serif",fontWeight:l,fontSize:22,lineHeight:"28px"}),BodySerif:f({},b,{fontFamily:"serif",fontWeight:l,fontSize:18,lineHeight:"22px"}),BodyMonospace:f({},b,{fontFamily:h,fontWeight:l,fontSize:17,lineHeight:"22px"}),Body:f({},b,{fontFamily:O,fontWeight:l,fontSize:16,lineHeight:"22px"}),LabelLarge:f({},b,{fontFamily:O,fontWeight:a,fontSize:16,lineHeight:"20px"}),LabelMedium:f({},b,{fontFamily:O,fontWeight:l,fontSize:16,lineHeight:"20px"}),LabelSmall:f({},b,{fontFamily:O,fontWeight:l,fontSize:14,lineHeight:"18px"}),LabelXSmall:f({},b,{fontFamily:O,fontWeight:l,fontSize:12,lineHeight:"16px"}),Caption:f({},b,{fontFamily:O,fontWeight:l,fontSize:14,lineHeight:"20px"}),Footnote:f({},b,{fontFamily:O,fontWeight:l,fontSize:12,lineHeight:"18px"})})
var m=n(0)
var g=n.n(m)
var d=n(1)
function j(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){j=function e(t){return typeof t}}else{j=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return j(e)}function w(){w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return w.apply(this,arguments)}function S(e,t){if(e==null)return{}
var n=P(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function P(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function x(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function T(e,t,n){if(t)E(e.prototype,t)
if(n)E(e,n)
return e}function k(e,t){if(t&&(j(t)==="object"||typeof t==="function")){return t}return C(e)}function C(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function H(e){H=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return H(e)}function z(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)F(e,t)}function F(e,t){F=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return F(e,t)}function L(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var I=function(e){z(t,e)
function t(){x(this,t)
return k(this,H(t).apply(this,arguments))}T(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=S(t,["style","children"])
return g.a.createElement(d["Text"],w({},o,{style:[v.Title,n]}),r)}}])
return t}(m["Component"])
L(I,"defaultProps",{tag:"h1"})
function R(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){R=function e(t){return typeof t}}else{R=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return R(e)}function W(){W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return W.apply(this,arguments)}function B(e,t){if(e==null)return{}
var n=M(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function M(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function X(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function D(e,t,n){if(t)q(e.prototype,t)
if(n)q(e,n)
return e}function A(e,t){if(t&&(R(t)==="object"||typeof t==="function")){return t}return G(e)}function G(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function J(e){J=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return J(e)}function K(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)N(e,t)}function N(e,t){N=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return N(e,t)}function Q(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var U=function(e){K(t,e)
function t(){X(this,t)
return A(this,J(t).apply(this,arguments))}D(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=B(t,["style","children"])
return g.a.createElement(d["Text"],W({},o,{style:[v.HeadingLarge,n]}),r)}}])
return t}(m["Component"])
Q(U,"defaultProps",{tag:"h2"})
function V(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){V=function e(t){return typeof t}}else{V=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return V(e)}function Y(){Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Y.apply(this,arguments)}function Z(e,t){if(e==null)return{}
var n=ee(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function ee(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function te(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function re(e,t,n){if(t)ne(e.prototype,t)
if(n)ne(e,n)
return e}function oe(e,t){if(t&&(V(t)==="object"||typeof t==="function")){return t}return ie(e)}function ie(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ue(e){ue=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ue(e)}function fe(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)ce(e,t)}function ce(e,t){ce=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return ce(e,t)}function le(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var ae=function(e){fe(t,e)
function t(){te(this,t)
return oe(this,ue(t).apply(this,arguments))}re(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=Z(t,["style","children"])
return g.a.createElement(d["Text"],Y({},o,{style:[v.HeadingMedium,n]}),r)}}])
return t}(m["Component"])
le(ae,"defaultProps",{tag:"h3"})
function pe(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){pe=function e(t){return typeof t}}else{pe=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return pe(e)}function ye(){ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return ye.apply(this,arguments)}function se(e,t){if(e==null)return{}
var n=be(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function be(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Oe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function ve(e,t,n){if(t)he(e.prototype,t)
if(n)he(e,n)
return e}function me(e,t){if(t&&(pe(t)==="object"||typeof t==="function")){return t}return ge(e)}function ge(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function de(e){de=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return de(e)}function je(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)we(e,t)}function we(e,t){we=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return we(e,t)}function Se(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Pe=function(e){je(t,e)
function t(){Oe(this,t)
return me(this,de(t).apply(this,arguments))}ve(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=se(t,["style","children"])
return g.a.createElement(d["Text"],ye({},o,{style:[v.HeadingSmall,n]}),r)}}])
return t}(m["Component"])
Se(Pe,"defaultProps",{tag:"h4"})
function _e(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_e=function e(t){return typeof t}}else{_e=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _e(e)}function xe(){xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return xe.apply(this,arguments)}function Ee(e,t){if(e==null)return{}
var n=Te(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function Te(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function ke(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function He(e,t,n){if(t)Ce(e.prototype,t)
if(n)Ce(e,n)
return e}function ze(e,t){if(t&&(_e(t)==="object"||typeof t==="function")){return t}return Fe(e)}function Fe(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Le(e){Le=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Le(e)}function Ie(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Re(e,t)}function Re(e,t){Re=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Re(e,t)}function We(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Be=function(e){Ie(t,e)
function t(){ke(this,t)
return ze(this,Le(t).apply(this,arguments))}He(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=Ee(t,["style","children"])
return g.a.createElement(d["Text"],xe({},o,{style:[v.HeadingXSmall,n]}),r)}}])
return t}(m["Component"])
We(Be,"defaultProps",{tag:"h4"})
function Me(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Me=function e(t){return typeof t}}else{Me=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Me(e)}function Xe(){Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Xe.apply(this,arguments)}function qe(e,t){if(e==null)return{}
var n=De(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function De(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Ae(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ge(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Je(e,t,n){if(t)Ge(e.prototype,t)
if(n)Ge(e,n)
return e}function Ke(e,t){if(t&&(Me(t)==="object"||typeof t==="function")){return t}return Ne(e)}function Ne(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Qe(e){Qe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Qe(e)}function Ue(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Ve(e,t)}function Ve(e,t){Ve=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Ve(e,t)}function Ye(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Ze=function(e){Ue(t,e)
function t(){Ae(this,t)
return Ke(this,Qe(t).apply(this,arguments))}Je(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=qe(t,["style","children"])
return g.a.createElement(d["Text"],Xe({},o,{style:[v.BodySerifBlock,n]}),r)}}])
return t}(m["Component"])
Ye(Ze,"defaultProps",{tag:"span"})
function $e(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){$e=function e(t){return typeof t}}else{$e=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return $e(e)}function et(){et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return et.apply(this,arguments)}function tt(e,t){if(e==null)return{}
var n=nt(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function nt(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function rt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ot(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function it(e,t,n){if(t)ot(e.prototype,t)
if(n)ot(e,n)
return e}function ut(e,t){if(t&&($e(t)==="object"||typeof t==="function")){return t}return ft(e)}function ft(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function ct(e){ct=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return ct(e)}function lt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)at(e,t)}function at(e,t){at=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return at(e,t)}function pt(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var yt=function(e){lt(t,e)
function t(){rt(this,t)
return ut(this,ct(t).apply(this,arguments))}it(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=tt(t,["style","children"])
return g.a.createElement(d["Text"],et({},o,{style:[v.BodySerif,n]}),r)}}])
return t}(m["Component"])
pt(yt,"defaultProps",{tag:"span"})
function st(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){st=function e(t){return typeof t}}else{st=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return st(e)}function bt(){bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return bt.apply(this,arguments)}function Ot(e,t){if(e==null)return{}
var n=ht(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function ht(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function vt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function mt(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function gt(e,t,n){if(t)mt(e.prototype,t)
if(n)mt(e,n)
return e}function dt(e,t){if(t&&(st(t)==="object"||typeof t==="function")){return t}return jt(e)}function jt(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function wt(e){wt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return wt(e)}function St(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Pt(e,t)}function Pt(e,t){Pt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Pt(e,t)}function _t(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var xt=function(e){St(t,e)
function t(){vt(this,t)
return dt(this,wt(t).apply(this,arguments))}gt(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=Ot(t,["style","children"])
return g.a.createElement(d["Text"],bt({},o,{style:[v.BodyMonospace,n]}),r)}}])
return t}(m["Component"])
_t(xt,"defaultProps",{tag:"span"})
function Et(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Et=function e(t){return typeof t}}else{Et=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Et(e)}function Tt(){Tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Tt.apply(this,arguments)}function kt(e,t){if(e==null)return{}
var n=Ct(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function Ct(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Ht(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function zt(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Ft(e,t,n){if(t)zt(e.prototype,t)
if(n)zt(e,n)
return e}function Lt(e,t){if(t&&(Et(t)==="object"||typeof t==="function")){return t}return It(e)}function It(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Rt(e){Rt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Rt(e)}function Wt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Bt(e,t)}function Bt(e,t){Bt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Bt(e,t)}function Mt(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Xt=function(e){Wt(t,e)
function t(){Ht(this,t)
return Lt(this,Rt(t).apply(this,arguments))}Ft(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=kt(t,["style","children"])
return g.a.createElement(d["Text"],Tt({},o,{style:[v.Body,n]}),r)}}])
return t}(m["Component"])
Mt(Xt,"defaultProps",{tag:"span"})
function qt(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){qt=function e(t){return typeof t}}else{qt=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return qt(e)}function Dt(){Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Dt.apply(this,arguments)}function At(e,t){if(e==null)return{}
var n=Gt(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function Gt(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Jt(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Kt(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Nt(e,t,n){if(t)Kt(e.prototype,t)
if(n)Kt(e,n)
return e}function Qt(e,t){if(t&&(qt(t)==="object"||typeof t==="function")){return t}return Ut(e)}function Ut(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Vt(e){Vt=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Vt(e)}function Yt(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Zt(e,t)}function Zt(e,t){Zt=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Zt(e,t)}function $t(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var en=function(e){Yt(t,e)
function t(){Jt(this,t)
return Qt(this,Vt(t).apply(this,arguments))}Nt(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=At(t,["style","children"])
return g.a.createElement(d["Text"],Dt({},o,{style:[v.LabelLarge,n]}),r)}}])
return t}(m["Component"])
$t(en,"defaultProps",{tag:"span"})
function tn(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){tn=function e(t){return typeof t}}else{tn=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return tn(e)}function nn(){nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return nn.apply(this,arguments)}function rn(e,t){if(e==null)return{}
var n=on(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function on(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function un(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function fn(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function cn(e,t,n){if(t)fn(e.prototype,t)
if(n)fn(e,n)
return e}function ln(e,t){if(t&&(tn(t)==="object"||typeof t==="function")){return t}return an(e)}function an(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function pn(e){pn=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return pn(e)}function yn(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)sn(e,t)}function sn(e,t){sn=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return sn(e,t)}function bn(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var On=function(e){yn(t,e)
function t(){un(this,t)
return ln(this,pn(t).apply(this,arguments))}cn(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=rn(t,["style","children"])
return g.a.createElement(d["Text"],nn({},o,{style:[v.LabelMedium,n]}),r)}}])
return t}(m["Component"])
bn(On,"defaultProps",{tag:"span"})
function hn(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){hn=function e(t){return typeof t}}else{hn=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return hn(e)}function vn(){vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return vn.apply(this,arguments)}function mn(e,t){if(e==null)return{}
var n=gn(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function gn(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function dn(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function jn(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function wn(e,t,n){if(t)jn(e.prototype,t)
if(n)jn(e,n)
return e}function Sn(e,t){if(t&&(hn(t)==="object"||typeof t==="function")){return t}return Pn(e)}function Pn(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _n(e){_n=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return _n(e)}function xn(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)En(e,t)}function En(e,t){En=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return En(e,t)}function Tn(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var kn=function(e){xn(t,e)
function t(){dn(this,t)
return Sn(this,_n(t).apply(this,arguments))}wn(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=mn(t,["style","children"])
return g.a.createElement(d["Text"],vn({},o,{style:[v.LabelSmall,n]}),r)}}])
return t}(m["Component"])
Tn(kn,"defaultProps",{tag:"span"})
function Cn(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Cn=function e(t){return typeof t}}else{Cn=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Cn(e)}function Hn(){Hn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Hn.apply(this,arguments)}function zn(e,t){if(e==null)return{}
var n=Fn(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function Fn(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Ln(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function In(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Rn(e,t,n){if(t)In(e.prototype,t)
if(n)In(e,n)
return e}function Wn(e,t){if(t&&(Cn(t)==="object"||typeof t==="function")){return t}return Bn(e)}function Bn(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Mn(e){Mn=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Mn(e)}function Xn(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)qn(e,t)}function qn(e,t){qn=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return qn(e,t)}function Dn(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var An=function(e){Xn(t,e)
function t(){Ln(this,t)
return Wn(this,Mn(t).apply(this,arguments))}Rn(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=zn(t,["style","children"])
return g.a.createElement(d["Text"],Hn({},o,{style:[v.LabelXSmall,n]}),r)}}])
return t}(m["Component"])
Dn(An,"defaultProps",{tag:"span"})
function Gn(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Gn=function e(t){return typeof t}}else{Gn=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return Gn(e)}function Jn(){Jn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return Jn.apply(this,arguments)}function Kn(e,t){if(e==null)return{}
var n=Nn(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function Nn(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function Qn(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Un(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Vn(e,t,n){if(t)Un(e.prototype,t)
if(n)Un(e,n)
return e}function Yn(e,t){if(t&&(Gn(t)==="object"||typeof t==="function")){return t}return Zn(e)}function Zn(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function $n(e){$n=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return $n(e)}function er(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)tr(e,t)}function tr(e,t){tr=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return tr(e,t)}function nr(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var rr=function(e){er(t,e)
function t(){Qn(this,t)
return Yn(this,$n(t).apply(this,arguments))}Vn(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=Kn(t,["style","children"])
return g.a.createElement(d["Text"],Jn({},o,{style:[v.Tagline,n]}),r)}}])
return t}(m["Component"])
nr(rr,"defaultProps",{tag:"span"})
function or(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){or=function e(t){return typeof t}}else{or=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return or(e)}function ir(){ir=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return ir.apply(this,arguments)}function ur(e,t){if(e==null)return{}
var n=fr(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function fr(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function cr(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function lr(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function ar(e,t,n){if(t)lr(e.prototype,t)
if(n)lr(e,n)
return e}function pr(e,t){if(t&&(or(t)==="object"||typeof t==="function")){return t}return yr(e)}function yr(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function sr(e){sr=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return sr(e)}function br(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)Or(e,t)}function Or(e,t){Or=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return Or(e,t)}function hr(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var vr=function(e){br(t,e)
function t(){cr(this,t)
return pr(this,sr(t).apply(this,arguments))}ar(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=ur(t,["style","children"])
return g.a.createElement(d["Text"],ir({},o,{style:[v.Caption,n]}),r)}}])
return t}(m["Component"])
hr(vr,"defaultProps",{tag:"span"})
function mr(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){mr=function e(t){return typeof t}}else{mr=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return mr(e)}function gr(){gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}
return gr.apply(this,arguments)}function dr(e,t){if(e==null)return{}
var n=jr(e,t)
var r,o
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(o=0;o<i.length;o++){r=i[o]
if(t.indexOf(r)>=0)continue
if(!Object.prototype.propertyIsEnumerable.call(e,r))continue
n[r]=e[r]}}return n}function jr(e,t){if(e==null)return{}
var n={}
var r=Object.keys(e)
var o,i
for(i=0;i<r.length;i++){o=r[i]
if(t.indexOf(o)>=0)continue
n[o]=e[o]}return n}function wr(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Sr(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||false
r.configurable=true
if("value"in r)r.writable=true
Object.defineProperty(e,r.key,r)}}function Pr(e,t,n){if(t)Sr(e.prototype,t)
if(n)Sr(e,n)
return e}function _r(e,t){if(t&&(mr(t)==="object"||typeof t==="function")){return t}return xr(e)}function xr(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function Er(e){Er=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)}
return Er(e)}function Tr(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}})
if(t)kr(e,t)}function kr(e,t){kr=Object.setPrototypeOf||function e(t,n){t.__proto__=n
return t}
return kr(e,t)}function Cr(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var Hr=function(e){Tr(t,e)
function t(){wr(this,t)
return _r(this,Er(t).apply(this,arguments))}Pr(t,[{key:"render",value:function e(){var t=this.props,n=t.style,r=t.children,o=dr(t,["style","children"])
return g.a.createElement(d["Text"],gr({},o,{style:[v.Footnote,n]}),r)}}])
return t}(m["Component"])
Cr(Hr,"defaultProps",{tag:"span"})
n.d(t,"Title",function(){return I})
n.d(t,"HeadingLarge",function(){return U})
n.d(t,"HeadingMedium",function(){return ae})
n.d(t,"HeadingSmall",function(){return Pe})
n.d(t,"HeadingXSmall",function(){return Be})
n.d(t,"BodySerifBlock",function(){return Ze})
n.d(t,"BodySerif",function(){return yt})
n.d(t,"BodyMonospace",function(){return xt})
n.d(t,"Body",function(){return Xt})
n.d(t,"LabelLarge",function(){return en})
n.d(t,"LabelMedium",function(){return On})
n.d(t,"LabelSmall",function(){return kn})
n.d(t,"LabelXSmall",function(){return An})
n.d(t,"Tagline",function(){return rr})
n.d(t,"Caption",function(){return vr})
n.d(t,"Footnote",function(){return Hr})
n.d(t,"styles",function(){return v})}])

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/wonder-blocks-package.js.map 