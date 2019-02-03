KAdefine("javascript/components/viewport-watcher-package/viewport-watcher.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _lodash=require("../../../third_party/javascript-khansrc/lodash/lodash.js")
var _constants=require("../../shared-styles-package/constants.js")
var orderedBreakpoints=["xs","sm","md","lg","xl"]
var breakpointComparatorGte=function e(t){return function(e){return orderedBreakpoints.indexOf(e)>=orderedBreakpoints.indexOf(t)}}
var breakpointComparatorLte=function e(t){return function(e){return orderedBreakpoints.indexOf(e)<=orderedBreakpoints.indexOf(t)}}
var widthToBreakpoint=function e(t){if(t<parseInt(_constants.pureSmMin)){return"xs"}else if(t<parseInt(_constants.pureMdMin)){return"sm"}else if(t<parseInt(_constants.pureLgMin)){return"md"}else if(t<parseInt(_constants.pureXlMin)){return"lg"}else{return"xl"}}
var matchesQuery=function e(t){var r="@media"
if(t.startsWith(r)){t=t.slice(r.length).trim()}return window.matchMedia(t).matches}
var THROTTLE_PERIOD_MS=1e3/60
var ViewportWatcher=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,i
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,a=Array(s),o=0;o<s;o++){a[o]=arguments[o]}return i=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),n),n.state={breakpoint:"xs",width:0,height:0},n._resizeHandler=null,r),babelHelpers.possibleConstructorReturn(n,i)}t.prototype.UNSAFE_componentWillMount=function e(){this.registerResizeHandler(this.props.throttle)
if(this._resizeHandler){this._resizeHandler()}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(t.throttle!==this.props.throttle){this.unregisterResizeHandler()
this.registerResizeHandler(t.throttle)}}
t.prototype.shouldComponentUpdate=function e(t,r){var n=t.children,i=t.updateOnBreakpointOnly
var s=this.state,a=s.width,o=s.height,p=s.breakpoint
var l=n!==this.props.children
var d=r.width!==a||r.height!==o
var h=r.breakpoint!==p
return l||h||d&&!i}
t.prototype.componentWillUnmount=function e(){this.unregisterResizeHandler()}
t.prototype.registerResizeHandler=function e(t){var r=this
this._resizeHandler=(0,_lodash.throttle)(function(){return r.setState({breakpoint:widthToBreakpoint(window.innerWidth),width:window.innerWidth,height:window.innerHeight})},t)
window.addEventListener("resize",this._resizeHandler)}
t.prototype.unregisterResizeHandler=function e(){if(this._resizeHandler){window.removeEventListener("resize",this._resizeHandler)}}
t.prototype.render=function e(){return this.props.children(babelHelpers.extends({},this.state,{atLeast:breakpointComparatorLte(this.state.breakpoint),atMost:breakpointComparatorGte(this.state.breakpoint),matchesQuery:matchesQuery}))}
return t}(React.Component)
ViewportWatcher.defaultProps={throttle:THROTTLE_PERIOD_MS,updateOnBreakpointOnly:true}
exports.default=ViewportWatcher

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/viewport-watcher-package.js.map 