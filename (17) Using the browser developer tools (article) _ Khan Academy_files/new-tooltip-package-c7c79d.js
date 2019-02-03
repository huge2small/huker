KAdefine("javascript/components/new-tooltip-package/new-tooltip.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _tooltipPortal=require("./tooltip-portal.jsx")
var _tooltipPortal2=babelHelpers.interopRequireDefault(_tooltipPortal)
var _visibilityObserver=require("../visibility-observer-package/visibility-observer.js")
function hasSeenTooltip(e){return(0,_khanFetch.khanFetch)("/api/internal/dismiss/"+e).then(function(e){return e.json()}).then(function(e){return e.dismissed})}function markAsSeenTooltip(e){var t=new Date((new Date).getTime()*2).toISOString();(0,_khanFetch.khanFetch)("/api/internal/dismiss/"+e+"?expires="+t,{method:"POST"})}var NewTooltip=function(e){babelHelpers.inherits(t,e)
function t(i){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,i))
r._handleVisibilityChange=function(e){r.setState({targetElementIsVisible:e})}
r._handleMouseEnter=function(){r.setState({hovered:true})}
r._handleMouseLeave=function(){r.setState({hovered:false})}
r._handleDismiss=function(){if(r.props.dismissed==null){r.setState({dismissed:true})}r.props.onDismiss&&r.props.onDismiss()}
r._isMounted=false
r.state={checkingIfAlreadySeen:!!i.dismissKey,dismissed:i.dismissed!=null?i.dismissed:false,hovered:false,targetElementIsVisible:false}
return r}t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
this._registerVisibilityObserver()
var i=this.props.dismissKey
if(i){hasSeenTooltip(i).catch(function(){return true}).then(function(e){if(!t._isMounted){return}t.setState({checkingIfAlreadySeen:false})
if(e){t.setState({dismissed:true})}else{markAsSeenTooltip(i)}})}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(t.dismissed!=null){this.setState({dismissed:t.dismissed})}}
t.prototype.UNSAFE_componentWillUpdate=function e(){this._registerVisibilityObserver()}
t.prototype.componentWillUnmount=function e(){this._isMounted=false
if(this._targetElementMountTimeout){clearTimeout(this._targetElementMountTimeout)}this._visibilityObserver.disconnect()}
t.prototype._findRootElement=function e(){return this.context.modalContainerElement||document.getElementById("mission-task-container")||document.getElementById("outer-wrapper")||document.body}
t.prototype._registerVisibilityObserver=function e(){var t=this
var i=this._findRootElement()
if(!i){throw new Error("Failed to mount NewTooltip: "+"we need a #outer-wrapper or document.body element.")}if(i===this._rootElement){return}this._rootElement=i
if(this._visibilityObserver){this._visibilityObserver.disconnect()}this._visibilityObserver=(0,_visibilityObserver.createVisibilityObserver)(i,this._handleVisibilityChange)
var r=this._wrapper
if(!r){throw new Error("NewTooltip expected a wrapper element after mount")}var o=r
while(o.hasAttribute("data-tooltip-wrapper")){o=o.childNodes[0]
if(!o){throw new Error("NewTooltip expected wrapper element to have a child")}}this._targetElement=o
this._targetElementMountTimeout=setTimeout(function(){var e=t._targetElement
if(!e){throw new Error("NewTooltip should have a target element after mounting.")}if(_ka2.default.IS_DEV_SERVER){if(getComputedStyle(e).display==="inline"){console.error("Warning: The children of a NewTooltip element "+"must be block-like, but this element seems "+"to have `display: inline`. This could break "+"position tracking.",e)}}t._visibilityObserver.setTargetElement(e)
t.forceUpdate()},0)}
t.prototype._shouldShowTooltip=function e(){var t=this.props,i=t.toggleOnHover,r=t.showOnMount
var o=this.state,s=o.checkingIfAlreadySeen,n=o.dismissed,a=o.targetElementIsVisible
if(a===false){return false}if(n||s){return false}if(r){return true}if(i&&this.state.hovered){return true}return false}
t.prototype.remeasure=function e(){this._tooltipPortal&&this._tooltipPortal.remeasure()}
t.prototype.render=function e(){var t=this
var i=this.props,r=i.children,o=i.toggleOnHover
if(React.Children.count(r)!==1){console.error("NewTooltip's `children` prop must receive exactly one "+("element, but "+React.Children.count(r)+" were ")+"provided.",r)}return React.createElement("div",{className:(0,_aphrodite.css)(styles.targetElement),onMouseEnter:o?this._handleMouseEnter:undefined,onMouseLeave:o?this._handleMouseLeave:undefined,ref:function e(i){return t._wrapper=i},"data-tooltip-wrapper":true},r,this._targetElement&&this._shouldShowTooltip()&&React.createElement(_tooltipPortal2.default,{tooltipProps:this.props,dismiss:this._handleDismiss,rootElement:this._rootElement,targetElement:this._targetElement,isAboveModal:!!this.context.modalContainerElement,ref:function e(i){return t._tooltipPortal=i}}))}
return t}(React.PureComponent)
NewTooltip.defaultProps={side:"top",offset:0,offsetFrom:"bubble",tooltipMargin:0,noPadding:false,color:_globalStyles.colors.gray17,inverted:false,dismissOnClickClose:false,toggleOnHover:true,showOnMount:false}
exports.default=NewTooltip
NewTooltip.contextTypes={modalContainerElement:_propTypes2.default.instanceOf(HTMLElement)}
var styles=_aphrodite.StyleSheet.create({targetElement:{display:"inline"}})

});
KAdefine("javascript/components/new-tooltip-package/types.js", function(require, module, exports) {

});
KAdefine("javascript/components/new-tooltip-package/flexible-position.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var FlexiblePosition=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.direction,a=t.pxFromStart,i=t.pxFromEnd
var l=[styles.wrapper,r==="horizontal"&&styles.wrapperHorizontal,r==="vertical"&&styles.wrapperVertical]
var n=[styles.content,r==="horizontal"&&styles.contentHorizontal,r==="vertical"&&styles.contentVertical]
if(a===0){return React.createElement("div",{className:_aphrodite.css.apply(undefined,l)},React.createElement("div",{className:_aphrodite.css.apply(undefined,n)},this.props.children))}else if(i===0){return React.createElement("div",{className:_aphrodite.css.apply(undefined,l.concat([styles.wrapperAlignToEnd]))},React.createElement("div",{className:_aphrodite.css.apply(undefined,n)},this.props.children))}return React.createElement("div",{className:_aphrodite.css.apply(undefined,l)},React.createElement("div",{style:{flexShrink:i,flexBasis:a}}),React.createElement("div",{className:_aphrodite.css.apply(undefined,n)},this.props.children),React.createElement("div",{style:{flexShrink:a,flexBasis:i}}))}
return t}(React.PureComponent)
exports.default=FlexiblePosition
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"flex",overflow:"hidden"},wrapperHorizontal:{flexDirection:"row",width:"100%"},wrapperVertical:{flexDirection:"column",height:"100%"},wrapperAlignToEnd:{justifyContent:"flex-end"},content:{flex:"0 0 auto"},contentHorizontal:{maxWidth:"100%"},contentVertical:{maxHeight:"100%"}})

});
KAdefine("javascript/components/new-tooltip-package/style-constants.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.dropShadowRadius=exports.dropShadowOpacity=exports.dropShadowYOffset=exports.dropShadowXOffset=exports.bubbleBorderRadius=exports.arrowHeight=exports.arrowWidth=undefined
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var arrowWidth=exports.arrowWidth=18
var arrowHeight=exports.arrowHeight=9
var bubbleBorderRadius=exports.bubbleBorderRadius=parseInt(_constants2.default.borderRadiusLarge)
var dropShadowXOffset=exports.dropShadowXOffset=0
var dropShadowYOffset=exports.dropShadowYOffset=1
var dropShadowOpacity=exports.dropShadowOpacity=.1
var dropShadowRadius=exports.dropShadowRadius=4

});
KAdefine("javascript/components/new-tooltip-package/tooltip-arrow.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _styleConstants=require("./style-constants.js")
var _util=require("./util.js")
var TooltipArrow=function(t){babelHelpers.inherits(e,t)
function e(){babelHelpers.classCallCheck(this,e)
return babelHelpers.possibleConstructorReturn(this,t.apply(this,arguments))}e.prototype.render=function t(){var e=this.props.tooltipProps,r=e.onClick,o=e.onMouseEnter,s=e.onMouseLeave,a=e.side
var n=(0,_util.getTooltipColors)(this.props.tooltipProps),l=n.backgroundColor
var i=void 0
var p=void 0
var c=void 0
if(a==="top"){i=["0,0",_styleConstants.arrowWidth/2+","+_styleConstants.arrowHeight,_styleConstants.arrowWidth+",0"]
p=_styleConstants.arrowWidth
c=_styleConstants.arrowHeight}else if(a==="right"){i=[_styleConstants.arrowHeight+",0","0,"+_styleConstants.arrowWidth/2,_styleConstants.arrowHeight+","+_styleConstants.arrowWidth]
p=_styleConstants.arrowHeight
c=_styleConstants.arrowWidth}else if(a==="bottom"){i=["0,"+_styleConstants.arrowHeight,_styleConstants.arrowWidth/2+",0",_styleConstants.arrowWidth+","+_styleConstants.arrowHeight]
p=_styleConstants.arrowWidth
c=_styleConstants.arrowHeight}else if(a==="left"){i=["0,0",_styleConstants.arrowHeight+","+_styleConstants.arrowWidth/2,"0,"+_styleConstants.arrowWidth]
p=_styleConstants.arrowHeight
c=_styleConstants.arrowWidth}else{throw new Error("unexpected side "+a)}return React.createElement("svg",{width:p,height:c,className:(0,_aphrodite.css)(styles.tooltipArrow)},React.createElement("filter",{id:"tooltip-dropshadow-"+a,height:"150%"},React.createElement("feOffset",{dx:_styleConstants.dropShadowXOffset,dy:_styleConstants.dropShadowYOffset,result:"offsetblur"}),React.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:_styleConstants.dropShadowRadius/2}),React.createElement("feComponentTransfer",null,React.createElement("feFuncA",{type:"linear",slope:_styleConstants.dropShadowOpacity})),React.createElement("feMerge",null,React.createElement("feMergeNode",null),React.createElement("feMergeNode",{in:"SourceGraphic"}))),React.createElement("polyline",{fill:l,stroke:l,points:i.join(" "),className:(0,_aphrodite.css)(r&&styles.tooltipArrowShapeWithOnClick),onClick:r,onMouseEnter:o,onMouseLeave:s}),React.createElement("polyline",{fill:l,points:i.join(" "),stroke:"rgba(0, 0, 0, 0.1)",filter:"url(#tooltip-dropshadow-"+a+")"}))}
return e}(React.PureComponent)
exports.default=TooltipArrow
var styles=_aphrodite.StyleSheet.create({tooltipArrow:{display:"block",userSelect:"none"},tooltipArrowShapeWithOnClick:{pointerEvents:"auto",cursor:"pointer"}})

});
KAdefine("javascript/components/new-tooltip-package/tooltip-bubble.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _a11y=require("../../shared-styles-package/a11y.js")
var _a11y2=babelHelpers.interopRequireDefault(_a11y)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _styleConstants=require("./style-constants.js")
var _util=require("./util.js")
var i18n=require("../../shared-package/i18n.js")
var closeIconPath="M6.26353762,4.99851587 L9.73097464,1.53107884 C10.0836373,1.17841618 10.0842213,0.612127047 9.73530496,0.263210718 C9.38395604,-0.0881381913 8.81874474,-0.0837668714 8.46743686,0.267541014 L4.99999981,3.73497806 L1.5325628,0.267541051 C1.1812549,-0.0837668481 0.616043606, -0.0881381955 0.264694717,0.263210694 C-0.0842215912,0.612127004 -0.0836375768,1.17841613 0.269025093,1.5310788 L3.73646206,4.9985158 L0.269025109,8.46595276 C-0.083637537,8.81861541 -0.0842215923, 9.38490462 0.264694642,9.73382106 C0.616043456,10.0851701 1.18125469, 10.0807988 1.53256259,9.72949093 L4.99999988,6.26205363 L8.46743739, 9.72949117 C8.8187453,10.0807991 9.38395655,10.0851704 9.73530537, 9.73382138 C10.0842216,9.38490498 10.0836375,8.81861579 9.73097488, 8.46595313 L6.26353762,4.99851587 Z"
var TooltipBubble=function(e){babelHelpers.inherits(t,e)
function t(){var o,r,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,a=Array(l),i=0;i<l;i++){a[i]=arguments[i]}return s=(o=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),r),r._handleClickClose=function(){return r.props.dismiss()},o),babelHelpers.possibleConstructorReturn(r,s)}t.prototype._renderCloseButton=function e(t){var o=this.props.tooltipProps,r=o.inverted,s=o.dismissOnClickClose
if(!s){return null}var l=t.get("button-description")
var a=this.getA11yHeaderId(t)
return React.createElement("button",{className:(0,_aphrodite.css)(styles.closeIcon),onClick:this._handleClickClose,"aria-describedby":l+" "+a},React.createElement(_icon2.default,{title:i18n._("Close"),icon:closeIconPath,size:10,color:r?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.15)"}),React.createElement("div",{id:l,className:(0,_aphrodite.css)(_a11y2.default.srOnly)},i18n._("Closes the tooltip: ")))}
t.prototype.getA11yHeaderId=function e(t){var o=this.props.tooltipProps.a11y
if(!o||!o.title){return this.getA11yContentId(t)}else if(typeof o.title==="string"){return t.get("header")}else{return o.title.id}}
t.prototype.getA11yContentId=function e(t){return t.get("content")}
t.prototype.renderTooltip=function e(t){var o=this.props.tooltipProps,r=o.content,s=o.dismissOnClickClose,l=o.noPadding,a=o.onClick,i=o.onMouseEnter,n=o.onMouseLeave,c=o.a11y,p=o.testId
var d=(0,_util.getTooltipColors)(this.props.tooltipProps),u=d.backgroundColor,b=d.textColor
var y=this.getA11yHeaderId(t)
var h=this.getA11yContentId(t)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipBubble,!l&&styles.tooltipBubbleWithPadding,s&&styles.tooltipBubbleWithCloseIcon,a&&styles.tooltipBubbleWithOnClick),onClick:a,onMouseEnter:i,onMouseLeave:n,style:{backgroundColor:u,color:b},role:"region","aria-labelledby":y,"aria-describedby":h===y?null:h,"data-test-id":p},this._renderCloseButton(t),React.createElement("div",{"aria-live":c&&c.assertiveness},c&&typeof c.title==="string"?React.createElement("div",{className:(0,_aphrodite.css)(_a11y2.default.srOnly),id:y},c.title):null,React.createElement("div",{id:h,className:(0,_aphrodite.css)(styles.tooltipContent)},r)))}
t.prototype.render=function e(){var t=this
return React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{mockOnFirstRender:false,scope:"tooltip-bubble"},function(e){return t.renderTooltip(e)})}
return t}(React.PureComponent)
exports.default=TooltipBubble
var styles=_aphrodite.StyleSheet.create({tooltipBubble:babelHelpers.extends({boxSizing:"border-box",position:"relative"},_globalStyles.typography.labelMedium,{borderRadius:_styleConstants.bubbleBorderRadius,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:_styleConstants.dropShadowXOffset+"px "+_styleConstants.dropShadowYOffset+"px "+(_styleConstants.dropShadowRadius+"px 0px ")+("rgba(0, 0, 0, "+_styleConstants.dropShadowOpacity+")"),userSelect:"none"}),tooltipBubbleWithPadding:{padding:"10px 23px"},tooltipBubbleWithCloseIcon:{paddingRight:34},tooltipBubbleWithOnClick:{cursor:"pointer"},tooltipContent:{userSelect:"auto"},closeIcon:{display:"block",position:"absolute",right:10,top:10,padding:0,background:"inherit",border:"none"}})

});
KAdefine("javascript/components/new-tooltip-package/tooltip-portal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _tooltipPositioner=require("./tooltip-positioner.jsx")
var _tooltipPositioner2=babelHelpers.interopRequireDefault(_tooltipPositioner)
var TooltipPortal=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){var t=document.createElement("div")
this._mountNode=t
this.props.rootElement.appendChild(t)
this._renderInMountNode(t)}
t.prototype.componentDidUpdate=function e(){var t=this._mountNode
if(!t){return}this._renderInMountNode(t)}
t.prototype.componentWillUnmount=function e(){var t=this._mountNode
if(!t){return}_reactDom2.default.unmountComponentAtNode(t)
this.props.rootElement.removeChild(t)}
t.prototype.remeasure=function e(){this._tooltipPositioner&&this._tooltipPositioner.remeasure()}
t.prototype._renderInMountNode=function e(t){var o=this
var r=this.props,i=r.tooltipProps,n=r.dismiss,l=r.rootElement,p=r.targetElement,a=r.isAboveModal
_reactDom2.default.render(React.createElement(_tooltipPositioner2.default,{tooltipProps:i,dismiss:n,rootElement:l,targetElement:p,isAboveModal:a,ref:function e(t){return o._tooltipPositioner=t}}),t)}
t.prototype.render=function e(){return null}
return t}(React.Component)
exports.default=TooltipPortal

});
KAdefine("javascript/components/new-tooltip-package/tooltip-positioner.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _styleConstants=require("./style-constants.js")
var _flexiblePosition=require("./flexible-position.jsx")
var _flexiblePosition2=babelHelpers.interopRequireDefault(_flexiblePosition)
var _tooltipArrow=require("./tooltip-arrow.jsx")
var _tooltipArrow2=babelHelpers.interopRequireDefault(_tooltipArrow)
var _tooltipBubble=require("./tooltip-bubble.jsx")
var _tooltipBubble2=babelHelpers.interopRequireDefault(_tooltipBubble)
var _constants=require("../../shared-styles-package/constants.js")
var TooltipPositioner=function(t){babelHelpers.inherits(e,t)
function e(){var o,r,i
babelHelpers.classCallCheck(this,e)
for(var s=arguments.length,l=Array(s),n=0;n<s;n++){l[n]=arguments[n]}return i=(o=(r=babelHelpers.possibleConstructorReturn(this,t.call.apply(t,[this].concat(l))),r),r.state={targetElementClientRect:null,rootElementClientRect:null},r._handleScroll=function(t){var e=r.props,o=e.rootElement,i=e.targetElement
var s=t.target
if(o.contains(s)&&s.contains(i)){r.remeasure()}},r.remeasure=function(){var t=r.props,e=t.targetElement,o=t.rootElement
r.setState({targetElementClientRect:e.getBoundingClientRect(),rootElementClientRect:o.getBoundingClientRect()})},o),babelHelpers.possibleConstructorReturn(r,i)}e.prototype.componentDidMount=function t(){this._mountRemeasureTimeout=setTimeout(this.remeasure,0)
window.addEventListener("resize",this.remeasure)
window.addEventListener("scroll",this._handleScroll,true)}
e.prototype.componentWillUnmount=function t(){if(this._mountRemeasureTimeout){clearTimeout(this._mountRemeasureTimeout)}window.removeEventListener("resize",this.remeasure)
window.removeEventListener("scroll",this._handleScroll,true)}
e.prototype._computeTargetPointOffsets=function t(e,o){var r=this.props.tooltipProps,i=r.offset,s=r.offsetFrom,l=r.side
var n=e
var a=o
var p=i
if(s==="arrow"){p+=_styleConstants.arrowHeight}var u=void 0
if(l==="top"){u={left:n.left+n.width/2,top:n.top-p}}else if(l==="bottom"){u={left:n.left+n.width/2,top:n.bottom+p}}else if(l==="left"){u={left:n.left-p,top:n.top+n.height/2}}else if(l==="right"){u={left:n.right+p,top:n.top+n.height/2}}else{throw new Error("unexpected side "+l)}return{pxFromTop:u.top-a.top,pxFromBottom:a.bottom-u.top,pxFromLeft:u.left-a.left,pxFromRight:a.right-u.left}}
e.prototype._renderBubble=function t(e){var o=this.props.isAboveModal
var r=this.props.tooltipProps,i=r.side,s=r.tooltipMargin
var l=void 0
var n={}
var a={}
var p={}
if(i==="top"||i==="bottom"){l=styles.tooltipBubblePositionerTopBottom
a.direction="horizontal"
a.pxFromStart=e.pxFromLeft
a.pxFromEnd=e.pxFromRight
p.marginLeft=s
p.marginRight=s}else if(i==="left"||i==="right"){l=styles.tooltipBubblePositionerLeftRight
a.direction="vertical"
a.pxFromStart=e.pxFromTop
a.pxFromEnd=e.pxFromBottom
p.marginTop=s
p.marginBottom=s}else{throw new Error("unexpected side "+i)}if(i==="top"){n.bottom=e.pxFromBottom}else if(i==="bottom"){n.top=e.pxFromTop}else if(i==="left"){n.right=e.pxFromRight}else if(i==="right"){n.left=e.pxFromLeft}else{throw new Error("unexpected side "+i)}return React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipBubblePositioner,l,o&&styles.tooltipAboveModal),style:n},React.createElement(_flexiblePosition2.default,a,React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipBubbleWrapper),style:p},React.createElement(_tooltipBubble2.default,{tooltipProps:this.props.tooltipProps,dismiss:this.props.dismiss}))))}
e.prototype._renderArrow=function t(e,o){var r=this.props.isAboveModal
var i=this.props.tooltipProps,s=i.side,l=i.tooltipMargin
var n={}
if(s==="top"){n.bottom=e.pxFromBottom-_styleConstants.arrowHeight+1}else if(s==="bottom"){n.top=e.pxFromTop-_styleConstants.arrowHeight+1}else if(s==="left"){n.right=e.pxFromRight-_styleConstants.arrowHeight+1}else if(s==="right"){n.left=e.pxFromLeft-_styleConstants.arrowHeight+1}else{throw new Error("unexpected side "+s)}var a=l+_styleConstants.bubbleBorderRadius
if(s==="top"||s==="bottom"){var p=a
var u=o.width-_styleConstants.arrowWidth-a
n.left=e.pxFromLeft-_styleConstants.arrowWidth/2
n.left=Math.min(n.left,u)
n.left=Math.max(n.left,p)}else if(s==="left"||s==="right"){var m=a
var d=o.height-_styleConstants.arrowWidth-a
n.top=e.pxFromTop-_styleConstants.arrowWidth/2
n.top=Math.min(n.top,d)
n.top=Math.max(n.top,m)}else{throw new Error("unexpected side "+s)}return React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipArrowPositioner,r&&styles.tooltipAboveModal),style:n},React.createElement(_tooltipArrow2.default,{tooltipProps:this.props.tooltipProps}))}
e.prototype._buildMediaFilterStyle=function t(){var e
var o=this.props.tooltipProps.media
if(!o){return null}var r=_aphrodite.StyleSheet.create({mediaFilter:(e={display:"none"},e[o]={display:"block"},e)})
return r.mediaFilter}
e.prototype.render=function t(){var e=this.state,o=e.targetElementClientRect,r=e.rootElementClientRect
if(!o||!r){return null}var i=this._computeTargetPointOffsets(o,r)
return React.createElement("div",{className:(0,_aphrodite.css)(this._buildMediaFilterStyle())},this._renderBubble(i),this._renderArrow(i,r))}
return e}(React.PureComponent)
exports.default=TooltipPositioner
var styles=_aphrodite.StyleSheet.create({tooltipBubblePositioner:{position:"absolute",zIndex:_constants.zindexTooltip,pointerEvents:"none"},tooltipAboveModal:{zIndex:_constants.zindexAboveModal},tooltipBubblePositionerTopBottom:{left:0,width:"100%"},tooltipBubblePositionerLeftRight:{top:0,height:"100%"},tooltipBubbleWrapper:{pointerEvents:"auto"},tooltipArrowPositioner:{position:"absolute",zIndex:_constants.zindexTooltip,pointerEvents:"none"}})

});
KAdefine("javascript/components/new-tooltip-package/util.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getTooltipColors=getTooltipColors
var _globalStyles=require("../../shared-styles-package/global-styles.js")
function getTooltipColors(o){var e=o.color,l=o.inverted
if(l){return{backgroundColor:e,textColor:_globalStyles.colors.white}}else{return{backgroundColor:_globalStyles.colors.white,textColor:e}}}
});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/new-tooltip-package.js.map 