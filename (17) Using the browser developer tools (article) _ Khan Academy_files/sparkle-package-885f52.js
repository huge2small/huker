KAdefine("javascript/components/sparkle-package/sparkle-frame.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _sparkle=require("./sparkle.jsx")
var _sparkle2=babelHelpers.interopRequireDefault(_sparkle)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var ONE_HUNDRED_PERCENT=100
function randomFramePosition(e,r){return Math.round(Math.random()*e-e/2+r)}function randomLinePosition(e,r){return Math.round(Math.random()*(ONE_HUNDRED_PERCENT+e+r*2)-e-r)}var edges=[function(e,r){return{x:randomLinePosition(e,r),y:randomFramePosition(e,-r)}},function(e,r){return{x:ONE_HUNDRED_PERCENT+randomFramePosition(e,r),y:randomLinePosition(e,r)}},function(e,r){return{x:randomLinePosition(e,r),y:ONE_HUNDRED_PERCENT+randomFramePosition(e,r)}},function(e,r){return{x:randomFramePosition(e,-r),y:randomLinePosition(e,r)}}]
var SparkleFrame=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,n
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,i=Array(o),s=0;s<o;s++){i[s]=arguments[s]}return n=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={sparkles:a.generateSparkleData(a.props)},t),babelHelpers.possibleConstructorReturn(a,n)}r.prototype.UNSAFE_componentWillReceiveProps=function e(r){if(r.count!==this.props.count||r.frameWidth!==this.props.frameWidth||r.padding!==this.props.padding){this.setState({sparkles:this.generateSparkleData(r)})}}
r.prototype.generateSparkleData=function e(r){if(_ka2.default.prefersReducedMotion()){return[]}var t=r.count,a=r.frameWidth,n=r.padding
var o=[]
for(var i=0;i<t;i++){var s=Math.round(Math.random()*8+18)
var p=edges[i%edges.length]
var l=p(a,n)
o.push({rotate:i%2?"left":"right",delay:Math.random()*4,size:s,position:{top:l.y+"%",left:l.x+"%"}})}return o}
r.prototype.createSparkle=function e(r,t){return React.createElement("span",{key:t,className:(0,_aphrodite.css)(styles.sparkle),style:r.position},React.createElement(_sparkle2.default,{rotate:r.rotate,delay:r.delay,size:r.size}))}
r.prototype.render=function e(){var r=this
var t=this.props.children
var a=this.state.sparkles
var n=a.map(function(e,t){return r.createSparkle(e,t)})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.sparkles)},t,n)}
return r}(React.Component)
SparkleFrame.defaultProps={count:30,frameWidth:10,padding:0}
var styles=_aphrodite.StyleSheet.create({sparkles:{position:"relative",display:"inline-block",pointerEvents:"none"},sparkle:{position:"absolute"}})
exports.default=SparkleFrame

});
KAdefine("javascript/components/sparkle-package/sparkle.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var smallIcon={path:"M17 9c-4.694-.5-8.5-4.306-9-9 .5 4.694-3.306 8.5-8 9 4.694-.5 8.5\n    3.306 8 8 .5-4.694 4.306-8.5 9-8z",width:17,height:17}
var Sparkle=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props,r=a.size,t=a.rotate,o=a.delay,n=a.color
if(_ka2.default.prefersReducedMotion()){return null}var l={animationDelay:o+"s"}
return React.createElement(_icon2.default,{icon:smallIcon,size:r,className:(0,_aphrodite.css)(styles.sparkle,styles["rotate-"+t]),style:l,color:n})}
return a}(React.Component)
Sparkle.defaultProps={size:22,rotate:"right",delay:0,color:_wonderBlocksColorV2.default.gold}
var keyFramesRotate=function e(a){return{"0%":{transform:"translate(-50%, -50%) scale(0) rotate(0deg)",opacity:1},"3%":{transform:"translate(-50%, -50%) scale(1) rotate("+a+")",opacity:1},"6%":{transform:"translate(-50%, -50%) scale(1) rotate("+a+")",opacity:1},"9%":{transform:"translate(-50%, -50%) scale(0) rotate(0deg)",opacity:1},"100%":{transform:"translate(-50%, -50%) scale(0) rotate(0deg)",opacity:1}}}
var styles=_aphrodite.StyleSheet.create({sparkle:{animationDuration:"4s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"forwards",opacity:0,pointerEvents:"none"},"rotate-none":{animationName:keyFramesRotate("0deg")},"rotate-right":{animationName:keyFramesRotate("15deg")},"rotate-left":{animationName:keyFramesRotate("-15deg")}})
exports.default=Sparkle

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/sparkle-package.js.map 