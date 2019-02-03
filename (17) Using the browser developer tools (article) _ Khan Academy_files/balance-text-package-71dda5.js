KAdefine("javascript/node_modules/balance-text/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/balance-text/balancetext.js")

});
KAdefine("third_party/javascript-khansrc/balance-text/balancetext.js", function(require, module, exports) {
"use strict";(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else if(typeof module==="object"&&module.exports){module.exports=t()}else{e.balanceText=t()}})(this,function(){var e,t,n
var i={sel:[],el:[]}
var r=false
var a=false
function l(){return}function o(e,t){Array.prototype.forEach.call(e,t)}function s(e){if(document.readyState!=="loading"){e()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState!=="loading"){e()}})}}function u(e,t,n){var i
return function r(){var a=this,l=arguments
function o(){if(!n){e.apply(a,l)}i=null}if(i){clearTimeout(i)}else if(n){e.apply(a,l)}i=setTimeout(o,t||100)}}function f(){var e=document.documentElement.style
return e.textWrap||e.WebkitTextWrap||e.MozTextWrap||e.MsTextWrap}function d(){this.reset()}d.prototype.reset=function(){this.index=0
this.width=0}
function c(e){return t.some(function(t){return t.start<e&&e<t.end})}function h(e,i){if(e.nodeType===e.ELEMENT_NODE){var r=window.getComputedStyle(e)
if(r.whiteSpace==="nowrap"){var a=e.outerHTML.length
t.push({start:n,end:n+a})
n+=a}else{o(e.childNodes,function(e){h(e,true)})
if(i){n+=e.outerHTML.length-e.innerHTML.length}}}else if(e.nodeType===e.COMMENT_NODE){n+=e.length+7}else if(e.nodeType===e.PROCESSING_INSTRUCTION_NODE){n+=e.length+2}else{n+=e.length}}function p(e,i,r){if(r===0){e.style.whiteSpace=i
n=0
t=[]
h(e,false)
e.style.whiteSpace="nowrap"}else{var a=[]
t.forEach(function(e){if(e.start>r){a.push({start:e.start-r,end:e.end-r})}})
t=a}}function y(e){var t=e.querySelectorAll('br[data-owner="balance-text-hyphen"]')
o(t,function(e){e.outerHTML=""})
t=e.querySelectorAll('br[data-owner="balance-text"]')
o(t,function(e){e.outerHTML=" "})
var n=e.querySelectorAll('span[data-owner="balance-text-softhyphen"]')
if(n.length>0){o(n,function(e){var t=document.createTextNode("­")
e.parentNode.insertBefore(t,e)
e.parentNode.removeChild(e)})}n=e.querySelectorAll('span[data-owner="balance-text-justify"]')
if(n.length>0){var i=""
o(n,function(e){i+=e.textContent
e.parentNode.removeChild(e)})
e.innerHTML=i}}var w=function(e){var t=e.currentStyle||window.getComputedStyle(e,null)
return t.textAlign==="justify"}
function v(e,t,n){var i,r,a,l,o
t=t.trim()
l=t.split(" ").length
t=t+" "
if(l<2){return t}a=document.createElement("span")
a.innerHTML=t
e.appendChild(a)
r=a.offsetWidth
a.parentNode.removeChild(a)
o=Math.floor((n-r)/(l-1))
a.style.wordSpacing=o+"px"
a.setAttribute("data-owner","balance-text-justify")
i=document.createElement("div")
i.appendChild(a)
return i.innerHTML}function m(t,n){var i=/(\s|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g,r
if(!e){e=[]
r=i.exec(t)
while(r!==null){if(!c(r.index)){e.push(r.index)}r=i.exec(t)}}return e.indexOf(n)!==-1}function x(e,t){return t===0||t===e.length||m(e,t-1)&&!m(e,t)}function g(e,t,n,i,r,a,l){var o
if(t&&typeof t==="string"){for(;;){while(!x(t,a)){a+=r}e.innerHTML=t.substr(0,a)
o=e.offsetWidth
if(r<0){if(o<=i||o<=0||a===0){break}}else{if(i<=o||n<=o||a===t.length){break}}a+=r}}l.index=a
l.width=o}function b(e,t){var n,i,r,a=document.createElement("div")
a.style.display="block"
a.style.position="absolute"
a.style.bottom=0
a.style.right=0
a.style.width=0
a.style.height=0
a.style.margin=0
a.style.padding=0
a.style.visibility="hidden"
a.style.overflow="hidden"
i=document.createElement("span")
i.style.fontSize="2000px"
i.innerHTML="&nbsp;"
a.appendChild(i)
e.appendChild(a)
n=i.getBoundingClientRect()
a.parentNode.removeChild(a)
r=n.height/n.width
return t/r}function T(e){if(!e){return[]}if(typeof e==="string"){return document.querySelectorAll(e)}if(e.tagName&&e.querySelectorAll){return[e]}return e}function M(t){o(T(t),function(t){var n=5e3
y(t)
var i=t.style.whiteSpace,r=t.style.float,a=t.style.display,l=t.style.position,o=t.style.lineHeight
t.style.lineHeight="normal"
var s=t.offsetWidth,u=t.offsetHeight
t.style.whiteSpace="nowrap"
t.style.float="none"
t.style.display="inline"
t.style.position="static"
var f=t.offsetWidth,c=t.offsetHeight,h=i==="pre-wrap"?0:b(t,c)
if(s>0&&f>s&&f<n){var m=t.innerHTML,x="",T="",M=w(t),S=Math.round(u/c),E=S,L=0
var H,C,N,W,A,O,q
while(E>1){e=null
p(t,i,L)
H=Math.round((f+h)/E-h)
C=Math.round((m.length+1)/E)-1
N=new d
g(t,m,s,H,-1,C,N)
W=new d
C=N.index
g(t,m,s,H,+1,C,W)
N.reset()
C=W.index
g(t,m,s,H,-1,C,N)
if(N.index===0){A=W.index}else if(s<W.width||N.index===W.index){A=N.index}else{A=Math.abs(H-N.width)<Math.abs(W.width-H)?N.index:W.index}T=m.substr(0,A).replace(/\s$/,"")
q=Boolean(T.match(/\u00ad$/))
if(q){T=T.replace(/\u00ad$/,'<span data-owner="balance-text-softhyphen">-</span>')}if(M){x+=v(t,T,s)}else{x+=T
O=q||Boolean(T.match(/(-|\u2014|\u2013)$/))
x+=O?'<br data-owner="balance-text-hyphen" />':'<br data-owner="balance-text" />'}m=m.substr(A)
L=A
E--
t.innerHTML=m
f=t.offsetWidth}if(M){t.innerHTML=x+v(t,m,s)}else{t.innerHTML=x+m}}t.style.whiteSpace=i
t.style.float=r
t.style.display=a
t.style.position=l
t.style.lineHeight=o})}function S(){var e=i.sel.join(","),t=T(e),n=Array.prototype.concat.apply(i.el,t)
M(n)}function E(){if(r){return}s(S)
window.addEventListener("load",S)
window.addEventListener("resize",u(S))
r=true}function L(e){if(typeof e==="string"){i.sel.push(e)}else{o(T(e),function(e){i.el.push(e)})}E()
S()}function H(e){if(typeof e==="string"){i.sel=i.sel.filter(function(t){return t!==e})}else{e=T(e)
i.el=i.el.filter(function(t){return e.indexOf(t)===-1})}}function C(){if(a){return}i.sel.push(".balance-text")
E()
a=true}function N(e,t){if(!e){C()}else if(t&&t.watch===true){L(e)}else if(t&&t.watch===false){H(e)}else{M(e)}}N.updateWatched=S
if(f()){l.updateWatched=l
return l}return N})

});
KAdefine("javascript/node_modules/react-balance-text/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/react-balance-text/dist/index.js").default

});
KAdefine("third_party/javascript-khansrc/react-balance-text/dist/index.js", function(require, module, exports) {
"use strict"
Object.defineProperty(exports,"__esModule",{value:true})
var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r)
if(n)e(t,n)
return t}}()
var _react=require("react")
var _react2=_interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=_interopRequireDefault(_propTypes)
var _balanceText2=require("balance-text")
var _balanceText3=_interopRequireDefault(_balanceText2)
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var BalanceText=function(e){_inherits(t,e)
function t(){_classCallCheck(this,t)
var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._handleResize=e._handleResize.bind(e)
e.state={visible:false}
return e}_createClass(t,[{key:"componentDidMount",value:function e(){window.addEventListener("resize",this._handleResize)
this._makeVisible()}},{key:"componentDidUpdate",value:function e(){this._balanceText()}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("resize",this._handleResize)}},{key:"_makeVisible",value:function e(){var t=this
this.setState({visible:true})
setTimeout(function(){return t._balanceText()},0)}},{key:"_balanceText",value:function e(){var t=this.container
if(!t){return}(0,_balanceText3.default)(t)}},{key:"_handleResize",value:function e(){if(!this.props.resize){return}this._balanceText()}},{key:"render",value:function e(){var t=this
var r=this.props,n=r.children,a=r.style,i=r.className
var o=this.state.visible
var s=_extends({},a,{visibility:o?"visible":"hidden"})
return _react2.default.createElement("div",{style:s,className:i},_react2.default.createElement("span",{ref:function e(r){return t.container=r}},n))}}])
return t}(_react2.default.Component)
BalanceText.defaultProps={children:"",style:{},resize:true}
BalanceText.propTypes={children:_propTypes2.default.node,className:_propTypes2.default.string,style:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any),_propTypes2.default.any]),resize:_propTypes2.default.bool}
exports.default=BalanceText

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/balance-text-package.js.map 