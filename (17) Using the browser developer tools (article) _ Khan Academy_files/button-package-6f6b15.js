KAdefine("javascript/components/button-package/button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _hoverBehavior=require("./hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _buttonBase=require("./button-base.jsx")
var _buttonBase2=babelHelpers.interopRequireDefault(_buttonBase)
var _buttonUtils=require("./button-utils.js")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var Button=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.focus=function e(){this.buttonBase.focus()}
t.prototype.getBoundingClientRect=function e(){return this.buttonBase.getBoundingClientRect()}
t.prototype.getStyle=function e(){var t=this.props.type
if(t==="primary"){return _buttonUtils.solidStyle}if(t==="secondary"){return _buttonUtils.outlineStyle}if(t==="text"){return _buttonUtils.textStyle}return _buttonUtils.solidStyle}
t.prototype.render=function e(){var t=this
var r=this.props,l=r.color,o=r.colors,s=r.hoverColor,a=r.hoverColors,i=r.highlighted,n=r.disabled,u=r.disabledStateIsOpaque,b=r.href,p=r.size,c=r.type,f=r.onClick,d=babelHelpers.objectWithoutProperties(r,["color","colors","hoverColor","hoverColors","highlighted","disabled","disabledStateIsOpaque","href","size","type","onClick"])
return React.createElement(_hoverBehavior2.default,{disabled:n,onClick:f},function(e,r){var f=t.getStyle(c)
var h=undefined
var v={}
var y={}
if(o){v=o}else if(l){v=f(l)}else{v=f(_globalStyles2.default.colors.kaGreen)}if(n){if(u){y=v
h=.5}else{y=f(_globalStyles2.default.colors.gray76)}}else if(e.hovered||e.focused||i){if(a){y=a}else if(s){y=f(s)}else if(o){y=o}else if(l){y=f(l)}else{y=f(_globalStyles2.default.colors.kaGreenHover)}}else{y=v}var g=babelHelpers.extends({},y,r,d,{disabled:n,opacity:h,href:b,size:p||"default",tag:b?"a":"button"})
return React.createElement(_buttonBase2.default,babelHelpers.extends({},g,{ref:function e(r){return t.buttonBase=r}}))})}
return t}(_react.Component)
exports.default=Button

});
KAdefine("javascript/components/button-package/link-styled-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var LinkStyledButton=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,l
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,a=Array(o),i=0;i<o;i++){a[i]=arguments[i]}return l=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),n),n.handleKeyDownEvent=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault()
n.props.onClick(e)}},r),babelHelpers.possibleConstructorReturn(n,l)}t.prototype.render=function e(){var t=this.props,r=t.onClick,n=t.children,l=t.style,o=t.inlineStyle,a=babelHelpers.objectWithoutProperties(t,["onClick","children","style","inlineStyle"])
return React.createElement("button",babelHelpers.extends({onClick:r,className:(0,_aphrodite.css)(styles.notAButton,l&&l),style:o&&o},a),n)}
return t}(_react.Component)
exports.default=LinkStyledButton
var styles=_aphrodite.StyleSheet.create({notAButton:{backgroundColor:"transparent",border:"none",padding:0,textAlign:"left",display:"inline-block",width:"100%",cursor:"pointer"}})

});
KAdefine("javascript/components/button-package/button-base.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ButtonBase=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.focus=function e(){this.tag.focus()}
t.prototype.getBoundingClientRect=function e(){return this.tag.getBoundingClientRect()}
t.prototype.render=function e(){var t=this
var r=this.props,i=r.children,o=r.textColor,a=r.borderColor,p=r.backgroundColor,d=r.corners,n=r.padding,l=r.size,s=r.width,x=r.tag,h=r.grow,c=r.shrink,u=r.weight,g=r.opacity,b=r.icon,f=r.testId,y=babelHelpers.objectWithoutProperties(r,["children","textColor","borderColor","backgroundColor","corners","padding","size","width","tag","grow","shrink","weight","opacity","icon","testId"])
var m={color:o,borderColor:a,backgroundColor:p,minWidth:s,flexGrow:0}
if(h!==undefined){m.flexGrow=h}if(c!==undefined){m.flexShrink=c}if(g!==undefined){m.opacity=g}var S={a:styles.link,button:styles.button}[x]
var v={}
if(n){v.padding="0 "+n+"px"}var C=b&&React.createElement("span",{className:(0,_aphrodite.css)(styles.iconContainer,iconContainerSizeStyles[l])},React.createElement(_icon2.default,{color:m.color,icon:b}))
var R=this.props.tag
return React.createElement(R,babelHelpers.extends({className:(0,_aphrodite.css)(S,styles.common,sizeStyles[l],cornerStyles[d],n!==undefined&&styles.noPadding,u==="normal"&&styles.normalWeight,b&&withIconStyles[l]),style:m,"data-test-id":f},y,{ref:function e(r){return t.tag=r}}),C,React.createElement("div",{className:(0,_aphrodite.css)(styles.inner),style:v},i))}
return t}(_react.Component)
ButtonBase.defaultProps={tag:"div",size:"default",textColor:"inherit",borderColor:"transparent",backgroundColor:"transparent",corners:"all"}
exports.default=ButtonBase
var radius=_globalStyles.borderRadius
var styles=_aphrodite.StyleSheet.create({common:{position:"relative",display:"inline-flex",fontFamily:"inherit",borderStyle:"solid",boxSizing:"border-box",alignItems:"center",flexShrink:0,whiteSpace:"nowrap",lineHeight:"normal",fontWeight:"bold",cursor:"pointer",appearance:"none",WebkitTapHighlightColor:"transparent"},inner:{verticalAlign:"middle",overflow:"hidden",textAlign:"center",textOverflow:"ellipsis",width:"100%"},noPadding:{padding:0},link:{textDecoration:"inherit"},button:{fontSize:"inherit",fontFamily:"inherit",padding:0,margin:0},normalWeight:{fontWeight:"normal"},iconContainer:{position:"absolute",left:0,top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"}})
var sizeStyles=_aphrodite.StyleSheet.create({xsmall:{height:24,fontSize:12,padding:"0px 8px"},small:{height:32,fontSize:15,padding:"0px 12px"},default:{height:40,fontSize:15,padding:"0px 16px"},large:{height:48,fontSize:15,padding:"0px 20px"},xlarge:{height:56,fontSize:15,padding:"0px 24px"}})
var withIconStyles=_aphrodite.StyleSheet.create({xsmall:{padding:"0px 24px"},small:{padding:"0px 32px"},default:{padding:"0px 40px"},large:{padding:"0px 48px"},xlarge:{padding:"0px 56px"}})
var iconContainerSizeStyles=_aphrodite.StyleSheet.create({xsmall:{width:24},small:{width:32},default:{width:40},large:{width:48},xlarge:{width:56}})
var cornerStyles=_aphrodite.StyleSheet.create({top:{borderWidth:"1px 1px 0px 1px",borderRadius:radius+"px "+radius+"px 0px 0px",paddingBottom:1},left:{borderWidth:"1px 0px 1px 1px",borderRadius:radius+"px 0px 0px "+radius+"px"},bottom:{borderWidth:"0px 1px 1px 1px",borderRadius:"0px 0px "+radius+"px "+radius+"px",paddingTop:1},right:{borderWidth:"1px 1px 1px 0px",borderRadius:"0px "+radius+"px "+radius+"px 0px"},topLeft:{borderWidth:"1px 0px 0px 1px",borderRadius:radius+"px 0px 0px 0px",paddingBottom:1},topRight:{borderWidth:"1px 1px 0px 0px",borderRadius:"0px "+radius+"px 0px 0px",paddingBottom:1},bottomRight:{borderWidth:"0px 1px 1px 0px",borderRadius:"0px 0px "+radius+"px 0px",paddingTop:1},bottomLeft:{borderWidth:"0px 0px 1px 1px",borderRadius:"0px 0px 0px "+radius+"px",paddingTop:1},topCenter:{borderWidth:"1px 0px 0px 0px",borderRadius:0,paddingBottom:1},rightCenter:{borderWidth:"0px 1px 0px 0px",borderRadius:0},bottomCenter:{borderWidth:"0px 0px 1px 0px",borderRadius:0,paddingTop:1},leftCenter:{borderWidth:"1px 0px 0px 1px",borderRadius:0},all:{borderWidth:1,borderRadius:4},none:{}})

});
KAdefine("javascript/components/button-package/button-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.solidStyle=solidStyle
exports.outlineStyle=outlineStyle
exports.textStyle=textStyle
function solidStyle(e){return{textColor:"white",backgroundColor:e,borderColor:e}}function outlineStyle(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"transparent"
return{textColor:e,backgroundColor:t,borderColor:e}}function textStyle(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"transparent"
return{textColor:e,backgroundColor:t,borderColor:"transparent"}}
});
KAdefine("javascript/components/button-package/control-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ControlButton=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getClassFromProps=function e(){var r
var t=this.props,o=t.colors,l=o.color,s=o.hoveredColor,a=t.padding
var n=_aphrodite.StyleSheet.create({button:(r={color:l,padding:a},r[":hover"]={color:s},r[":focus"]={color:s},r)})
return n.button}
r.prototype.render=function e(){var r=this.props,t=r.children,o=r.testId
return React.createElement("button",{onClick:this.props.onClick,className:(0,_aphrodite.css)(styles.resetButton,this.getClassFromProps()),"data-test-id":o},t)}
return r}(_react.Component)
ControlButton.defaultProps={padding:0,colors:{color:_globalStyles.colors.gray76,hoveredColor:_globalStyles.colors.gray68}}
exports.default=ControlButton
var styles=_aphrodite.StyleSheet.create({resetButton:{border:"none",background:"inherit",cursor:"pointer",lineHeight:0}})

});
KAdefine("javascript/components/button-package/hover-behavior.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var HoverBehavior=function(e){babelHelpers.inherits(o,e)
function o(s){babelHelpers.classCallCheck(this,o)
var t=babelHelpers.possibleConstructorReturn(this,e.call(this,s))
t.handleClick=function(e){if(!t.props.disabled){if(t.props.shouldUpdate()){t.waitingForClick=false}if(t.props.onClick&&!t.props.disabled){t.props.onClick(e)}}}
t.handleMouseEnter=function(){if(!t.props.disabled&&t.props.shouldUpdate()&&!t.waitingForClick){t.setState({hovered:true})}}
t.handleMouseLeave=function(){if(!t.props.disabled&&t.props.shouldUpdate()&&!t.waitingForClick){t.setState({hovered:false})}}
t.handleTouchStart=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({hovered:true})}}
t.handleTouchEnd=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({hovered:false})
t.waitingForClick=true}}
t.handleMouseDown=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({focused:false})
t.focusFlag=true}}
t.handleBlur=function(){if(!t.props.disabled&&t.props.shouldUpdate()){t.setState({focused:false})}}
t.handleFocus=function(){if(!t.props.disabled&&t.props.shouldUpdate()){if(t.focusFlag){t.focusFlag=false}else{t.setState({focused:true})}}}
t.state={focused:false,hovered:s.startHovered}
return t}o.prototype.render=function e(){var o={onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}
var s=this.props.children
return s&&s(this.state,o)}
return o}(_react.Component)
HoverBehavior.defaultProps={startHovered:false,shouldUpdate:function e(){return true}}
exports.default=HoverBehavior

});
KAdefine("javascript/components/button-package/types.js", function(require, module, exports) {

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/button-package.js.map 