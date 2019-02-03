KAdefine("javascript/components/toast-package/toast-base.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _closeIcon=require("../../reusable-components-package/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var animationDuration=.2
var ToastBase=function(e){babelHelpers.inherits(t,e)
function t(){var o,a,s
babelHelpers.classCallCheck(this,t)
for(var r=arguments.length,i=Array(r),n=0;n<r;n++){i[n]=arguments[n]}return s=(o=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={closing:false,mousingOver:false,closeAfterMouseLeave:false},a.handleMouseMove=function(){a.setState({mousingOver:true})},a.handleMouseLeave=function(){var e=a.state.closeAfterMouseLeave
if(e){a.handleClose()}a.setState({mousingOver:false})},a.handleClose=function(){var e=a.props.onClose
a.setState({closing:true})
if(e){setTimeout(function(){return e()},animationDuration*1e3)}},o),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.componentDidMount=function e(){var t=this.props.autoTimeout
if(typeof t==="number"){this.scheduleTimeout(t)}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(t.autoTimeout===undefined){return}var o=this.props.autoTimeout===undefined
if(o){this.scheduleTimeout(t.autoTimeout)}}
t.prototype.componentWillUnmount=function e(){if(this.timeoutId){clearTimeout(this.timeoutId)}}
t.prototype.scheduleTimeout=function e(t){var o=this
this.timeoutId=setTimeout(function(){var e=o.state.mousingOver
if(e){o.setState({closeAfterMouseLeave:true})}else{o.handleClose()}},t)}
t.prototype.render=function e(){var t=this.props,o=t.children,a=t.href,s=t.linkText,r=t.testId,i=t.isError
var n=this.state.closing
var l=n?styles.fadeOut:styles.fadeIn
return _react2.default.createElement("div",{onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,className:css(styles.toast,l,i&&styles.isError),"data-test-id":r},_react2.default.createElement("div",{className:css(styles.content)},_react2.default.createElement("div",null,o)),s&&a&&_react2.default.createElement("a",{className:css(styles.link),href:a,"data-test-id":"toast-link"},s," >"),_react2.default.createElement("span",{className:css(styles.close),onClick:this.handleClose},_react2.default.createElement(_closeIcon2.default,{size:24,iconSize:8,color:_globalStyles.colors.gray76})))}
return t}(_react.PureComponent)
var styles=StyleSheet.create({toast:{width:304,minHeight:32,padding:16,paddingLeft:24,paddingRight:36,backgroundColor:"rgba(255, 255, 255, 0.95)",border:"solid 1px rgba(0, 0, 0, 0.1)",borderRadius:_globalStyles.borderRadius,boxSizing:"border-box",fontSize:12,color:_globalStyles.colors.gray17,lineHeight:"normal",position:"relative"},isError:{":before":{content:'""',position:"absolute",top:-1,left:-1,bottom:-1,width:8,backgroundColor:_globalStyles.colors.alertRed,borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px"}},content:{display:"flex"},close:{position:"absolute",right:10,top:10,cursor:"pointer"},link:{display:"block",paddingTop:3,color:_globalStyles.colors.kaGreen,fontWeight:"bold",textDecoration:"none"},fadeIn:{animationName:{"0%":{opacity:0},"100%":{opacity:1}},animationDuration:animationDuration+"s",animationIterationCount:1},fadeOut:{animationName:{"0%":{opacity:1},"100%":{opacity:0}},animationDuration:animationDuration+"s",animationIterationCount:1,animationFillMode:"forwards"}})
exports.default=ToastBase

});
KAdefine("javascript/components/toast-package/toast.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _toastBase=require("./toast-base.jsx")
var _toastBase2=babelHelpers.interopRequireDefault(_toastBase)
var Toast=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement(_toastBase2.default,this.props)}
return t}(_react.Component)
exports.default=Toast

});
KAdefine("javascript/components/toast-package/error-toast.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _toastBase=require("./toast-base.jsx")
var _toastBase2=babelHelpers.interopRequireDefault(_toastBase)
var ErrorToast=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){if(this.props.autoTimeout){throw new Error("ErrorToast component does not support `autoTimeout prop.\n"+"Please use a regular Toast component if it needs to "+"auto-dismiss")}return React.createElement(_toastBase2.default,babelHelpers.extends({isError:true},this.props))}
return r}(_react.Component)
exports.default=ErrorToast

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/toast-package.js.map 