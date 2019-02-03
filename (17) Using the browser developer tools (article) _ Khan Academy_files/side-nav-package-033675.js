KAdefine("javascript/components/side-nav-package/side-nav.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var ReactDOM=babelHelpers.interopRequireWildcard(_reactDom)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _lodash=require("../../../third_party/javascript-khansrc/lodash/lodash.js")
var _lodash2=babelHelpers.interopRequireDefault(_lodash)
var _scrollUtils=require("../../scroll-utils-package/scroll-utils.js")
var BEHAVIORS={NORMAL:"normal",STICKY:"sticky",STUCK:"stuck",NATIVE_STICKY:"nativeSticky"}
var SideNav=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,i
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,a=Array(s),l=0;l<s;l++){a[l]=arguments[l]}return i=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),o),o.state={behavior:BEHAVIORS.NORMAL,height:"auto"},o.measure=function(){if(!o._mounted){return}var e=o.props.scrollOffset
var t={behavior:o.state.behavior,bottomBound:(0,_scrollUtils.getOffsetBottom)(o._wrapper)-e,documentHeight:(0,_scrollUtils.getDocumentHeight)(),height:o.state.height,topBound:(0,_scrollUtils.getOffsetTop)(o._wrapper)-e}
if(o.state.height==="auto"){t.contentHeight=o._affixable.getBoundingClientRect().height}var r=o._wrapper.getBoundingClientRect().height
if(o.state.height===0&&r>0){t.contentHeight=r}o.setState(t,function(){return o.onScroll()})},o.onScroll=function(){if(!o._mounted){return}var e=o.props.scrollOffset
var t=o.state,r=t.bottomBound,i=t.contentHeight,s=t.topBound
if(r==null||s==null||i==null){return}var a={}
var l=window.innerHeight
var n=window.pageYOffset
var h=o.state.behavior===BEHAVIORS.NORMAL?(0,_scrollUtils.getOffsetTop)(o._affixable):n
var c=r-h
var u=Math.min(Math.max(0,r-n),l-e)-Math.min(Math.max(0,s-n),l-e)
var p=Math.min(i,o.props.minHeight-e)
if(n<s){a.behavior=BEHAVIORS.NORMAL
a.height=o.props.stretchToFill?u:Math.min(u,i)}else if(c>p){a.behavior=BEHAVIORS.STICKY
a.height=o.props.stretchToFill?u:Math.min(u,i)}else{a.behavior=BEHAVIORS.STUCK
a.height=p}if(o._nativeStickyBehaviorEnabled){a.behavior=BEHAVIORS.NATIVE_STICKY}o.setState(a)},o.checkForDocumentHeightChange=function(){var e=o.state.documentHeight
if(e==null){return}if((0,_scrollUtils.getDocumentHeight)()!==e){o.measure()}},r),babelHelpers.possibleConstructorReturn(o,i)}t.prototype.componentDidMount=function e(){var t=this
this._mounted=true
try{this._nativeStickyBehaviorEnabled=CSS.supports("position","sticky")||CSS.supports("position","-webkit-sticky")||CSS.supports("position","-moz-sticky")||CSS.supports("position","-ms-sticky")||CSS.supports("position","-o-sticky")}catch(e){this._nativeStickyBehaviorEnabled=false}setTimeout(function(){return t.measure()},0)
this.throttledMeasure=_lodash2.default.throttle(function(){return t.measure()},1e3)
this.throttledScroll=_lodash2.default.throttle(function(){return t.onScroll()},20)
this.throttledHeightCheck=_lodash2.default.throttle(function(){return t.checkForDocumentHeightChange()},1e3)
window.addEventListener("resize",this.throttledMeasure)
window.addEventListener("scroll",this.throttledScroll)
window.addEventListener("scroll",this.throttledHeightCheck)}
t.prototype.shouldComponentUpdate=function e(t,r){if(this.props.children===t.children&&this.props.header===t.header&&this.props.style===t.style&&this.props.scrollOffset===t.scrollOffset&&this.state.behavior===r.behavior&&this.state.height===r.height){return false}return true}
t.prototype.componentWillUnmount=function e(){this._mounted=false
window.removeEventListener("resize",this.throttledMeasure)
window.removeEventListener("scroll",this.throttledScroll)
window.removeEventListener("scroll",this.throttledHeightCheck)}
t.prototype.render=function e(){var t=this
var r=this.props,o=r.children,i=r.header,s=r.scrollOffset,a=r.style
var l=this.state,n=l.behavior,h=l.height
var c={height:h}
if(n===BEHAVIORS.NATIVE_STICKY||n===BEHAVIORS.STICKY){c.top=s}return React.createElement(_wonderBlocksCoreV.View,{style:[styles.wrapper,a],ref:function e(r){return t._wrapper=ReactDOM.findDOMNode(r)}},React.createElement(_wonderBlocksCoreV.View,{style:[styles.affixable,n===BEHAVIORS.NORMAL&&styles.normal,n===BEHAVIORS.STICKY&&styles.sticky,n===BEHAVIORS.STUCK&&styles.stuck,n===BEHAVIORS.NATIVE_STICKY&&styles.nativeSticky,c],ref:function e(r){return t._affixable=ReactDOM.findDOMNode(r)}},React.createElement(_wonderBlocksCoreV.View,{style:styles.fixed},i),o))}
return t}(_react.Component)
SideNav.defaultProps={scrollOffset:0}
exports.default=SideNav
var styles=_aphrodite.StyleSheet.create({wrapper:{position:"relative"},affixable:{display:"flex",flexDirection:"column",overflow:"hidden",willChange:"transform"},normal:{position:"absolute",top:0,width:"100%"},sticky:{position:"fixed"},stuck:{position:"absolute",bottom:0,width:"100%"},nativeSticky:{position:"-webkit-sticky !important; position: sticky",width:"100%"},fixed:{flex:"0 0 auto"}})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/side-nav-package.js.map 