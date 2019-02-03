KAdefine("javascript/components/progress-package/progress-bar.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var ProgressBar=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,o
babelHelpers.classCallCheck(this,r)
for(var s=arguments.length,i=Array(s),n=0;n<s;n++){i[n]=arguments[n]}return o=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={overrideAsEmpty:!!a.props.animateOnMount},t),babelHelpers.possibleConstructorReturn(a,o)}r.prototype.componentDidMount=function e(){var r=this
if(this.props.animateOnMount){window.requestAnimationFrame(function(){r.setState({overrideAsEmpty:false})})}}
r.prototype.calculateProgressBarBorderRadius=function e(){var r=this.props,t=r.borderRadius,a=r.direction,o=r.flatProgressEdge
if(o){return 0}return a==="horizontal"?"0 "+t+"px "+t+"px 0":"0 0 "+t+"px "+t+"px"}
r.prototype.getDimensionsStyle=function e(){var r=this.props,t=r.direction,a=r.length,o=r.thickness
if(t==="vertical"){return{height:a,width:o}}else{return{width:a,height:o}}}
r.prototype.getNormalizedValue=function e(){var r=this.props,t=r.value,a=r.max
if(t<0){return 0}else if(t>a){return a}return t}
r.prototype.generateOuterStyles=function e(){var r=this.props,t=r.backgroundColor,a=r.borderColor,o=r.borderRadius
return _aphrodite.StyleSheet.create({styles:{background:t,border:a?"1px solid "+a:"",borderRadius:o}})}
r.prototype.generateInnerStyles=function e(r){var t=this.props,a=t.direction,o=t.fillColor,s=t.animateValueChanges,i=t.animationDuration
var n=s&&typeof i==="number"&&!_ka2.default.prefersReducedMotion()?{transition:"transform "+i+"ms"}:{}
var l=a==="vertical"?{transform:"translateY("+(r-100)+"%)"}:{transform:"translateX("+(r-100)+"%)"}
return _aphrodite.StyleSheet.create({styles:babelHelpers.extends({background:o,borderRadius:this.calculateProgressBarBorderRadius()},n,l)})}
r.prototype.render=function e(){var r=this.props,t=r.max,a=r.direction
var o=this.state.overrideAsEmpty
var s=this.getDimensionsStyle()
var i=o?0:this.getNormalizedValue()
var n=i/t*100
return React.createElement("div",{style:s,className:(0,_aphrodite.css)(styles.progressContainer,a==="vertical"&&styles.verticalContainer),role:"progressbar","aria-valuenow":i,"aria-valuemax":t,"aria-valuemin":0},React.createElement(_wonderBlocksCoreV.View,{style:[styles.outerBarShared,this.generateOuterStyles().styles]},React.createElement(_wonderBlocksCoreV.View,{style:[styles.innerBarShared,this.generateInnerStyles(n).styles]})))}
return r}(React.PureComponent)
ProgressBar.defaultProps={length:"100%",direction:"horizontal",borderRadius:4,thickness:10,animationDuration:200}
var styles=_aphrodite.StyleSheet.create({progressContainer:{position:"relative"},verticalContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},outerBarShared:{height:"100%",width:"100%",overflow:"hidden"},innerBarShared:{width:"100%",height:"100%"}})
module.exports=ProgressBar

});
KAdefine("javascript/components/progress-package/circular-progress-bar.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var CircularProgressBar=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidUpdate=function e(){var t=Date.now()
if(this.path){this.path.style.transitionDuration="0.3s, 0.3s"
if(this.prevTimeStamp&&t-this.prevTimeStamp<100){this.path.style.transitionDuration="0s, 0s"}this.prevTimeStamp=Date.now()}}
t.prototype.render=function e(){var t=this
var r=this.props,s=r.thickness,a=r.trackThickness,i=r.roundedCaps,l=r.fillColor,o=r.trackColor,n=r.diameter,c=r.max,p=r.value,h=babelHelpers.objectWithoutProperties(r,["thickness","trackThickness","roundedCaps","fillColor","trackColor","diameter","max","value"])
var d=p/c*100
var u=n/2-s/2
var v="M 0,0 m 0,-"+u+"\n            a "+u+","+u+" 0 1 1 0,"+2*u+"\n            a "+u+","+u+" 0 1 1 0,-"+2*u
var y=Math.PI*2*u
var k=babelHelpers.extends({},styles.path,{strokeLinecap:i?"round":"square",strokeDasharray:y+"px "+y+"px",strokeDashoffset:(100-d)/100*y+"px"})
var m={width:n,height:n}
var b=-n/2+" "+-n/2+" "+n+" "+n
return React.createElement("div",{className:(0,_aphrodite.css)(cssStyles.container),style:m},React.createElement("div",{className:(0,_aphrodite.css)(cssStyles.inner)},this.props.children),React.createElement("svg",babelHelpers.extends({className:(0,_aphrodite.css)(cssStyles.position),width:n,height:n},h,{viewBox:b}),React.createElement("path",{d:v,stroke:o,strokeWidth:a||s,style:styles.track}),React.createElement("path",{d:v,stroke:l,strokeWidth:s,ref:function e(r){return t.path=r},style:k})))}
return t}(React.Component)
CircularProgressBar.defaultProps={thickness:4,fillColor:_globalStyles.colors.kaGreen,trackColor:_globalStyles.colors.gray95,max:1,value:0,diameter:70}
var styles={track:{fillOpacity:0},path:{transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease",fillOpacity:0}}
var cssStyles=_aphrodite.StyleSheet.create({container:{position:"relative",flexShrink:0},position:{display:"inline-block",position:"absolute",left:0,top:0},inner:{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}})
module.exports=CircularProgressBar

});
KAdefine("javascript/components/progress-package/bar.jsx", function(require, module, exports) {
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var AboveTooltip=require("../../translations-dashboard-package/above-tooltip.jsx")
var Bar=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.max,i=r.value,a=r.color,o=r.borderRadius,s=r.borderColor,l=r.direction,n=r.isTooltipVisible,b=r.animateValueChanges
var c=i/t*100
var u={backgroundColor:a,borderRadius:o,borderColor:s,borderWidth:s?1:0,borderStyle:"solid"}
if(l==="vertical"){u.height=c+"%"
u.width="100%"}else{u.width=c+"%"
u.height="100%"}if(b&&!_ka2.default.prefersReducedMotion()){var d=l==="vertical"?"height":"width"
u.transition=d+" 0.2s"}var p=React.createElement("div",{style:u,className:css(styles.bar)})
if(n){p=React.createElement(AboveTooltip,{initialIsVisible:true,content:i,tooltipAlwaysVisible:true,xPositionPercentage:c,positionOfTooltip:"END",inline:false},p)}return p}
return r}(React.Component)
var styles=StyleSheet.create({bar:{position:"absolute",boxSizing:"border-box"}})
module.exports=Bar

});
KAdefine("javascript/translations-dashboard-package/above-tooltip.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var LayeredComponentMixin=require("../react-components-package/layered-component-mixin.jsx")
var AboveTooltip=createReactClass({displayName:"AboveTooltip",propTypes:{className:PropTypes.string,children:PropTypes.node.isRequired,content:PropTypes.node.isRequired,initialIsVisible:PropTypes.bool,inline:PropTypes.bool,verticalOffset:PropTypes.number,multiline:PropTypes.bool,tooltipAlwaysVisible:PropTypes.bool,positionOfArrow:PropTypes.oneOf(["START","CENTER","END"]),positionOfTooltip:PropTypes.oneOf(["START","CENTER","END"]),wrapperFlex:PropTypes.string,backgroundColor:PropTypes.string,showAboveHeader:PropTypes.bool,dropShadow:PropTypes.bool},mixins:[LayeredComponentMixin],getDefaultProps:function e(){return{inline:true,initialIsVisible:false,positionOfArrow:"CENTER",positionOfTooltip:"CENTER",tooltipAlwaysVisible:false,verticalOffset:50,multiline:false,backgroundColor:globalStyles.colors.gray17,dropShadow:false}},getInitialState:function e(){return{isVisible:this.props.initialIsVisible||this.props.tooltipAlwaysVisible}},componentDidMount:function e(){this._isMounted=true
this._throttleUpdate=_.throttle(this._forceUpdateIfMounted,20)
window.addEventListener("scroll",this._throttleUpdate)
window.addEventListener("resize",this._throttleUpdate)
if(!this.props.inline){setTimeout(this._forceUpdateIfMounted,0)}},componentWillUnmount:function e(){this._isMounted=false
window.removeEventListener("scroll",this._throttleUpdate)
window.removeEventListener("resize",this._throttleUpdate)},_isMounted:false,_forceUpdateIfMounted:function e(){if(this._isMounted){this.forceUpdate()}},renderLayer:function e(){var t=this.props.backgroundColor
if(!this.state.isVisible){return null}var o=ReactDOM.findDOMNode(this).childNodes[0].getBoundingClientRect()
var r=void 0
if(this.props.positionOfTooltip==="END"){r=o.left+o.width}else if(this.props.positionOfTooltip==="START"){r=o.left}else if(this.props.positionOfTooltip==="CENTER"){r=o.left+Math.floor(o.width/2)}var i=this.props.positionOfArrow==="START"
var s=this.props.positionOfArrow==="END"
var n=this.props.positionOfArrow==="CENTER"
var l=void 0
if(!this.props.multiline){var p=Math.round(o.top-this.props.verticalOffset)
l={left:r,top:p}}else{var a=Math.round(window.innerHeight-o.top-10)
l={left:r,bottom:a}}return React.createElement("div",{className:css(styles.tooltipOuter,this.props.showAboveHeader&&styles.tooltipAboveHeader,this.props.dropShadow&&styles.tooltipOuterShadow),style:l},React.createElement("div",{className:css(styles.tooltipWrapper)},React.createElement("div",{className:css(styles.tooltipContent),style:{backgroundColor:t}},this.props.content),React.createElement("div",{className:css(styles.tooltipArrow,i&&styles.tooltipArrowStart,s&&styles.tooltipArrowEnd,n&&styles.tooltipArrowCenter),style:{borderColor:t+" transparent transparent transparent"}})))},render:function e(){var t=this
var o=function e(){return t.setState({isVisible:true})}
var r=function e(){return t.setState({isVisible:false})}
var i=this.props.inline?"span":"div"
var s=!this.props.tooltipAlwaysVisible
return React.createElement(i,{className:this.props.className,onBlur:s?r:undefined,onFocus:s?o:undefined,onMouseOut:s?r:undefined,onMouseOver:s?o:undefined,tabIndex:0,style:{flex:this.props.wrapperFlex||undefined,outline:"none",lineHeight:0}},this.props.children)}})
var styles=StyleSheet.create({tooltipArrow:{borderStyle:"solid",borderWidth:8,height:0,margin:"0 auto",opacity:.95,width:0},tooltipArrowStart:{marginLeft:"20%"},tooltipArrowEnd:{marginLeft:"80%"},tooltipArrowCenter:{margin:"0 auto"},tooltipContent:{borderRadius:"4px",color:"white",fontSize:"12px",fontWeight:"normal",opacity:.95,padding:"12px 12px 10px 12px",textAlign:"center"},tooltipOuter:{position:"fixed",width:"100%",pointerEvents:"none",zIndex:4},tooltipOuterShadow:{filter:"drop-shadow(0 0px 1.5px rgba(33, 36, 44, 0.16))"},tooltipAboveHeader:{zIndex:1061},tooltipWrapper:{display:"inline-block",transform:"translateX(-50%)"}})
module.exports=AboveTooltip

});
KAdefine("javascript/react-components-package/layered-component-mixin.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var LayeredComponentMixin={componentDidMount:function e(){this._layer=document.createElement("div")
document.body.appendChild(this._layer)
this._renderLayer()},componentDidUpdate:function e(){this._renderLayer()},componentWillUnmount:function e(){this._unrenderLayer()
document.body.removeChild(this._layer)},_renderLayer:function e(){var n=this.renderLayer()
if(n===null){ReactDOM.render(React.createElement("noscript",null),this._layer)}else{ReactDOM.render(n,this._layer)}if(this.layerDidMount){this.layerDidMount(this._layer)}},_unrenderLayer:function e(){if(this.layerWillUnmount){this.layerWillUnmount(this._layer)}ReactDOM.unmountComponentAtNode(this._layer)}}
module.exports=LayeredComponentMixin

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/progress-package.js.map 