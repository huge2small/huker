KAdefine("javascript/swap-child-package/swap-child.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var getPlacementStyleForAnchor=function e(t){if(t==="top-left"){return{top:0,left:0}}else if(t==="top-right"){return{top:0,right:0}}else if(t==="bottom-left"){return{bottom:0,left:0}}else if(t==="bottom-right"){return{bottom:0,right:0}}}
var getFixedBounds=function e(t){var i=t.getBoundingClientRect(),r=i.width,n=i.height
return babelHelpers.extends({},getElementOffset(t),{width:r,height:n})}
var getElementOffset=function e(t){if(!t||!(t instanceof HTMLElement)){return{top:-window.scrollY,left:-window.scrollX}}var i=e(t.offsetParent)
return{top:i.top+t.offsetTop,left:i.left+t.offsetLeft}}
var transitionStyleSheet=function e(t){var i=t.direction,r=t.distance,n=t.duration
var a=i==="vertical"?"translateY":"translateX"
var l={opacity:0,transform:a+"("+r.toString()+"px)"}
var o={opacity:1,transform:a+"(0px)"}
var s={opacity:0,transform:a+"("+(0-r).toString()+"px)"}
var p={from:l,to:o}
var d={from:o,to:s}
var h={animationDuration:n.toString()+"ms",animationTimingFunction:_globalStyles2.default.standardTransitionExtras,animationFillMode:"forwards"}
return _aphrodite.StyleSheet.create({appearing:babelHelpers.extends({},h,{animationName:p}),disappearing:babelHelpers.extends({},h,{animationName:d}),frozenAppearing:babelHelpers.extends({},l),frozenDisappearing:babelHelpers.extends({},o)})}
var SwapChild=function(e){babelHelpers.inherits(t,e)
function t(){var i,r,n
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,l=Array(a),o=0;o<a;o++){l[o]=arguments[o]}return n=(i=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),r),r.state={appearingChildren:null,disappearingChildren:null,displayedChildren:null,frozenCallbacks:[],pending:[]},r._timeouts=[],r._animationStyles=null,r._childNode=null,r._setCancellableTimeout=function(e,t){var i=window.setTimeout(function(){r._timeouts=r._timeouts.filter(function(e){return e!==i})
e()},t)
r._timeouts.push(i)},i),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.UNSAFE_componentWillMount=function e(){this._animationStyles=transitionStyleSheet(this.props)
this.setState({displayedChildren:{children:this.props.children,key:this.props.childrenKey}})}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var i=this.props,r=i.children,n=i.childrenKey,a=i.direction,l=i.distance,o=i.duration,s=i.frozen
if(t.direction!==a||t.distance!==l||t.duration!==o){this._animationStyles=transitionStyleSheet(t)}if(s&&!t.frozen){this._unfreezeCallbacks()}if(t.childrenKey!==n){this.setState({pending:[].concat(this.state.pending,[{children:t.children,key:t.childrenKey}])})}else if(t.children!==r){this.setState({displayedChildren:{children:t.children,key:n}})}}
t.prototype.componentDidUpdate=function e(t,i){this._maybeDisplayNextChildren()}
t.prototype.componentWillUnmount=function e(){this._timeouts.forEach(clearTimeout)}
t.prototype._unfreezeCallbacks=function e(){this.state.frozenCallbacks.forEach(function(e){return e()})
this.setState({frozenCallbacks:[]})}
t.prototype._maybeDisplayNextChildren=function e(){var t=this.state,i=t.appearingChildren,r=t.pending
if(!i&&r.length>0){this._displayNextChildren()}}
t.prototype._displayNextChildren=function e(){var t=this
var i=this.props,r=i.duration,n=i.frozen,a=i.twoStepSwap
var l=this.state,o=l.displayedChildren,s=l.frozenCallbacks,p=l.pending
var d=this._childNode
if(p.length>0){var h=p[0]
var c=o?babelHelpers.extends({},o,{bounds:d?getFixedBounds(d):null}):null
this.setState({pending:p.slice(1),displayedChildren:h,appearingChildren:h,disappearingChildren:c})
var f=function e(i,n){return t._setCancellableTimeout(function(){if(i){t.setState({disappearingChildren:null})}if(n){var r=t.props.onChildrenShown
t.setState({appearingChildren:null})
r&&r(null)}else{if(a){e(false,true)}}},r)}
var u=function e(){return f(true,!a)}
if(n){s.push(u)}else{u()}}}
t.prototype._getStyleForBounds=function e(t,i){var r=this.props.anchor
var n=i?"fixed":"absolute"
var a=t?{width:t.width,height:t.height}:{}
var l={}
if(i){if(t){l={top:t.top,left:t.left}}}else{l=getPlacementStyleForAnchor(r)}return babelHelpers.extends({position:n},a,l)}
t.prototype._freezeDisplayedChild=function e(){var t=this.props,i=t.frozen,r=t.twoStepSwap
var n=this.state.disappearingChildren
return!!(i||r&&n)}
t.prototype.render=function e(){var t=this
var i=this.state,r=i.appearingChildren,n=i.disappearingChildren,a=i.displayedChildren
var l=this.props,o=l.frozen,s=l.style,p=l.fixDisappearingChild
var d=this._animationStyles
var h=n&&n.bounds
if(d===null){return null}return React.createElement("div",{"aria-live":"polite",className:(0,_aphrodite.css)(styles.root),style:s},n&&React.createElement("div",{className:(0,_aphrodite.css)(o?d.frozenDisappearing:d.disappearing),style:this._getStyleForBounds(h,p),key:n.key},n.children),a&&React.createElement("div",{className:r&&(0,_aphrodite.css)(this._freezeDisplayedChild()?d.frozenAppearing:d.appearing),ref:function e(i){return t._childNode=i},key:a.key},a.children))}
return t}(_react.Component)
SwapChild.defaultProps={anchor:"top-left",direction:"vertical",distance:20,duration:200,fixDisappearingChild:false,frozen:false,style:null,twoStepSwap:false}
exports.default=SwapChild
var styles=_aphrodite.StyleSheet.create({root:{position:"relative"}})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/swap-child-package.js.map 