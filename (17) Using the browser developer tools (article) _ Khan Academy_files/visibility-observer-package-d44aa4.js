KAdefine("third_party/javascript-khansrc/IntersectionObserver/polyfill/intersection-observer.js", function(__KA_require, __KA_module, __KA_exports) {
(function(t,e){"use strict"
var r=navigator.userAgent.indexOf("Edge")>=0
if(!r&&"IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype){if(!("isIntersecting"in t.IntersectionObserverEntry.prototype)){Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}})}return}var n=[]
function i(t){this.time=t.time
this.target=t.target
this.rootBounds=t.rootBounds
this.boundingClientRect=t.boundingClientRect
this.intersectionRect=t.intersectionRect||l()
this.isIntersecting=!!t.intersectionRect
var e=this.boundingClientRect
var r=e.width*e.height
var n=this.intersectionRect
var i=n.width*n.height
if(r){this.intersectionRatio=i/r}else{this.intersectionRatio=this.isIntersecting?1:0}}function o(t,e){var r=e||{}
if(typeof t!="function"){throw new Error("callback must be a function")}if(r.root&&r.root.nodeType!=1){throw new Error("root must be an Element")}this._checkForIntersections=h(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT)
this._callback=t
this._observationTargets=[]
this._queuedEntries=[]
this._rootMarginValues=this._parseRootMargin(r.rootMargin)
this.thresholds=this._initThresholds(r.threshold)
this.root=r.root||null
this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}o.prototype.THROTTLE_TIMEOUT=100
o.prototype.POLL_INTERVAL=null
o.prototype.USE_MUTATION_OBSERVER=true
o.prototype.observe=function(t){var e=this._observationTargets.some(function(e){return e.element==t})
if(e){return}if(!(t&&t.nodeType==1)){throw new Error("target must be an Element")}this._registerInstance()
this._observationTargets.push({element:t,entry:null})
this._monitorIntersections()
this._checkForIntersections()}
o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t})
if(!this._observationTargets.length){this._unmonitorIntersections()
this._unregisterInstance()}}
o.prototype.disconnect=function(){this._observationTargets=[]
this._unmonitorIntersections()
this._unregisterInstance()}
o.prototype.takeRecords=function(){var t=this._queuedEntries.slice()
this._queuedEntries=[]
return t}
o.prototype._initThresholds=function(t){var e=t||[0]
if(!Array.isArray(e))e=[e]
return e.sort().filter(function(t,e,r){if(typeof t!="number"||isNaN(t)||t<0||t>1){throw new Error("threshold must be a number between 0 and 1 inclusively")}return t!==r[e-1]})}
o.prototype._parseRootMargin=function(t){var e=t||"0px"
var r=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t)
if(!e){throw new Error("rootMargin must be specified in pixels or percent")}return{value:parseFloat(e[1]),unit:e[2]}})
r[1]=r[1]||r[0]
r[2]=r[2]||r[0]
r[3]=r[3]||r[1]
return r}
o.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=true
if(this.POLL_INTERVAL){this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL)}else{c(t,"resize",this._checkForIntersections,true)
c(e,"scroll",this._checkForIntersections,true)
if(this.USE_MUTATION_OBSERVER&&"MutationObserver"in t){this._domObserver=new MutationObserver(this._checkForIntersections)
this._domObserver.observe(e,{attributes:true,childList:true,characterData:true,subtree:true})}}}}
o.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=false
clearInterval(this._monitoringInterval)
this._monitoringInterval=null
a(t,"resize",this._checkForIntersections,true)
a(e,"scroll",this._checkForIntersections,true)
if(this._domObserver){this._domObserver.disconnect()
this._domObserver=null}}}
o.prototype._checkForIntersections=function(){var t=this._rootIsInDom()
var e=t?this._getRootRect():l()
this._observationTargets.forEach(function(r){var n=r.element
var o=f(n)
var h=this._rootContainsTarget(n)
var c=r.entry
var a=t&&h&&this._computeTargetAndRootIntersection(n,e)
var u=r.entry=new i({time:s(),target:n,boundingClientRect:o,rootBounds:e,intersectionRect:a})
if(!c){this._queuedEntries.push(u)}else if(t&&h){if(this._hasCrossedThreshold(c,u)){this._queuedEntries.push(u)}}else{if(c&&c.isIntersecting){this._queuedEntries.push(u)}}},this)
if(this._queuedEntries.length){this._callback(this.takeRecords(),this)}}
o.prototype._computeTargetAndRootIntersection=function(r,n){if(t.getComputedStyle(r).display=="none")return
var i=f(r)
var o=i
var s=v(r)
var h=false
while(!h){var c=null
var a=s.nodeType==1?t.getComputedStyle(s):{}
if(a.display=="none")return
if(s==this.root||s==e){h=true
c=n}else{if(s!=e.body&&s!=e.documentElement&&a.overflow!="visible"){c=f(s)}}if(c){o=u(c,o)
if(!o)break}s=v(s)}return o}
o.prototype._getRootRect=function(){var t
if(this.root){t=f(this.root)}else{var r=e.documentElement
var n=e.body
t={top:0,left:0,right:r.clientWidth||n.clientWidth,width:r.clientWidth||n.clientWidth,bottom:r.clientHeight||n.clientHeight,height:r.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)}
o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,r){return e.unit=="px"?e.value:e.value*(r%2?t.width:t.height)/100})
var r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]}
r.width=r.right-r.left
r.height=r.bottom-r.top
return r}
o.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1
var n=e.isIntersecting?e.intersectionRatio||0:-1
if(r===n)return
for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i]
if(o==r||o==n||o<r!==o<n){return true}}}
o.prototype._rootIsInDom=function(){return!this.root||p(e,this.root)}
o.prototype._rootContainsTarget=function(t){return p(this.root||e,t)}
o.prototype._registerInstance=function(){if(n.indexOf(this)<0){n.push(this)}}
o.prototype._unregisterInstance=function(){var t=n.indexOf(this)
if(t!=-1)n.splice(t,1)}
function s(){return t.performance&&performance.now&&performance.now()}function h(t,e){var r=null
return function(){if(!r){r=setTimeout(function(){t()
r=null},e)}}}function c(t,e,r,n){if(typeof t.addEventListener=="function"){t.addEventListener(e,r,n||false)}else if(typeof t.attachEvent=="function"){t.attachEvent("on"+e,r)}}function a(t,e,r,n){if(typeof t.removeEventListener=="function"){t.removeEventListener(e,r,n||false)}else if(typeof t.detatchEvent=="function"){t.detatchEvent("on"+e,r)}}function u(t,e){var r=Math.max(t.top,e.top)
var n=Math.min(t.bottom,e.bottom)
var i=Math.max(t.left,e.left)
var o=Math.min(t.right,e.right)
var s=o-i
var h=n-r
return s>=0&&h>=0&&{top:r,bottom:n,left:i,right:o,width:s,height:h}}function f(t){var e
try{e=t.getBoundingClientRect()}catch(t){}if(!e)return l()
if(!(e.width&&e.height)){e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}}return e}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function p(t,e){var r=e
while(r){if(r==t)return true
r=v(r)}return false}function v(t){var e=t.parentNode
if(e&&e.nodeType==11&&e.host){return e.host}return e}t.IntersectionObserver=o
t.IntersectionObserverEntry=i})(window,document)

});
KAdefine("javascript/components/visibility-observer-package/get-scroll-parent.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var getParents=function e(r,t){if(!r.parentNode){return t}return e(r.parentNode,t.concat([r]))}
var style=function e(r,t){return getComputedStyle(r).getPropertyValue(t)}
var overflow=function e(r){return style(r,"overflow")+style(r,"overflow-y")+style(r,"overflow-x")}
var scroll=function e(r){return/(auto|scroll)/.test(overflow(r))}
var getScrollParent=exports.getScrollParent=function e(r){if(!(r instanceof HTMLElement)){return}var t=r.parentNode?getParents(r.parentNode,[]):[]
for(var o=0;o<t.length;o+=1){var n=t[o]
if(scroll(n)){return n}}return document.documentElement}

});
KAdefine("javascript/components/visibility-observer-package/visibility-observer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _visibilityObserver=require("./visibility-observer.js")
var _getScrollParent=require("./get-scroll-parent.js")
function findPositionInScrollContainer(e,r,t){try{var i=(0,_getScrollParent.getScrollParent)(e)
if(!i){return"unknown"}var n=i.getBoundingClientRect()
var o=e.getBoundingClientRect()
var s=!t||i===document.body?o.bottom<r.top:o.bottom<n.top
return s?"hidden-above":"hidden-below"}catch(e){return"unknown"}}var VisibilityObserver=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,n
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,s=Array(o),l=0;l<o;l++){s[l]=arguments[l]}return n=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.handleVisibilityChange=function(e,r){var t=i.props,n=t.scrollParentIsNotBody,o=t.onChange
if(e){o("visible")}else{var s=findPositionInScrollContainer(i._node,r,!!n)
o(s)}},t),babelHelpers.possibleConstructorReturn(i,n)}r.prototype.componentDidMount=function e(){this._node=_reactDom2.default.findDOMNode(this)
this.registerVisibilityObserver()}
r.prototype.componentWillUnmount=function e(){this.unregisterVisibilityObserver()}
r.prototype.registerVisibilityObserver=function e(){var r=this.props.rootMargin
if(!this._node){return}this._observer=(0,_visibilityObserver.createVisibilityObserver)(null,this.handleVisibilityChange,r)
this._observer.setTargetElement(this._node)}
r.prototype.unregisterVisibilityObserver=function e(){if(this._observer){this._observer.disconnect()}}
r.prototype.render=function e(){return this.props.children}
return r}(React.Component)
VisibilityObserver.defaultProps={onChange:function e(){}}
exports.default=VisibilityObserver

});
KAdefine("javascript/components/visibility-observer-package/visibility-observer.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.createVisibilityObserver=createVisibilityObserver
require("../../../third_party/javascript-khansrc/IntersectionObserver/polyfill/intersection-observer.js")
function createVisibilityObserver(e,r,i){return new NativeVisibilityObserver(e,r,i)}var NativeVisibilityObserver=function(){function e(r,i,t){var s=this
babelHelpers.classCallCheck(this,e)
this._handleIntersection=function(e){for(var r=e,i=Array.isArray(r),t=0,r=i?r:r[Symbol.iterator]();;){var n
if(i){if(t>=r.length)break
n=r[t++]}else{t=r.next()
if(t.done)break
n=t.value}var o=n
s._onVisibilityChange(o.isIntersecting,o.rootBounds)}}
this._intersectionObserver=new IntersectionObserver(this._handleIntersection,{root:r,threshold:Number.EPSILON,rootMargin:t})
this._onVisibilityChange=i}e.prototype.setTargetElement=function e(r){this._intersectionObserver.disconnect()
this._intersectionObserver.observe(r)}
e.prototype.disconnect=function e(){this._intersectionObserver.disconnect()}
return e}()

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/visibility-observer-package.js.map 