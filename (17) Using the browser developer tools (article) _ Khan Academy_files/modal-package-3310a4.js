KAdefine("javascript/components/modal-package/modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.ModalHeader=exports.ModalFooter=exports.default=exports.sharedModalStyles=undefined
var _modal,_modalDown,_modalUp,_animateInModal,_animateOutModal,_sideNav,_withTopBar
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _aphrodite=require("aphrodite")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _controlButton=require("../button-package/control-button.jsx")
var _controlButton2=babelHelpers.interopRequireDefault(_controlButton)
var _backIcon=require("../../reusable-components-package/back-icon.jsx")
var _backIcon2=babelHelpers.interopRequireDefault(_backIcon)
var _closeIcon=require("../../reusable-components-package/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _util=require("./util.js")
var _modalHeader=require("./modal-header.jsx")
var _modalHeader2=babelHelpers.interopRequireDefault(_modalHeader)
var _modalFooter=require("./modal-footer.jsx")
var _modalFooter2=babelHelpers.interopRequireDefault(_modalFooter)
var _scrollDisabler=require("./scroll-disabler.jsx")
var _scrollDisabler2=babelHelpers.interopRequireDefault(_scrollDisabler)
var _backdrop=require("./backdrop.jsx")
var _backdrop2=babelHelpers.interopRequireDefault(_backdrop)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var PropTypes=require("prop-types")
var i18n=require("../../shared-package/i18n.js")
var MODAL_PARENT_ID="__MODAL_PARENT__"
function getModalParent(){var e=document.querySelector("#"+MODAL_PARENT_ID)
if(e){return e}e=(0,_util.getBody)().appendChild(document.createElement("div"))
e.id=MODAL_PARENT_ID
return e}var TRANSITION_ANIMATION_DURATION=300
var Modal=function(e){babelHelpers.inherits(t,e)
function t(){var o,a,r
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,l=Array(i),n=0;n<i;n++){l[n]=arguments[n]}return r=(o=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={willBeVisible:false,isModalOpen:false,startAnimations:false,forceClosingAnimation:false,modalContainerElement:undefined},a._isMounted=false,a._initialModalFocus=function(){var e=function e(t){a._restrictedFocusHandler(t)
document.removeEventListener("focus",e,true)}
document.addEventListener("focus",e,true)
if(!a.modal||!a.state.willBeVisible){setTimeout(a._initialModalFocus,0)
return}a.modal&&a.modal.focus()},a._setContainerState=function(e){setTimeout(function(){if(a._isMounted&&e!==a.state.modalContainerElement){a.setState({modalContainerElement:e})}},0)},a.firstFocus=true,a._restrictedFocusHandler=function(e){if(!a.props.restrictFocusToModal){return}var t=e.relatedTarget
var o=!!a.modal
var r=o&&a.modal===e.target
var i=!t||a.state.modalContainerElement&&!a.state.modalContainerElement.contains(t)
var l=function e(t){return t instanceof HTMLElement&&t.className.indexOf("modal")!==-1}
var n=l(e.target)||l(e.relatedTarget)
var s=o&&i&&!r&&!n
if(s||a.firstFocus){if(a.isShiftKeyDown&&!a.firstFocus){a.focusLastElementOrModal()}else{a.focusFirstElementOrModal()}e.preventDefault()
a.firstFocus=false}},a.getAllFocusableChildren=function(e){if(!e){return[]}return Array.prototype.filter.call(e.querySelectorAll("button:not([tabindex='-1']):not([disabled]), "+"[href]:not([tabindex='-1']):not([disabled]), "+"input:not([tabindex='-1']):not([disabled]), "+"select:not([tabindex='-1']):not([disabled]), "+"textarea:not([tabindex='-1']):not([disabled]), "+"[tabindex]:not([tabindex='-1']):not([disabled])"),function(e){return!!e.offsetParent})},a.focusLastElementOrModal=function(){if(!a.modal){return}var e=a.getAllFocusableChildren(a.modal)
if(e.length===0){a.modal&&a.modal.focus()}else{e[e.length-1].focus()}},a.focusFirstElementOrModal=function(){var e=a.getChildrenId()
if(!a.modal||!e){return}var t=a.getAllFocusableChildren(a.firstFocus?a.modal.querySelector('[id="'+e+'"]'):a.modal)
if(t.length===0){a.modal&&a.modal.focus()}else{if(t[0]!==document.activeElement){t[0].focus()}}},a.handleKeyDown=function(e){if(e.keyCode===27&&!a.props.preventDismissal){a.handleClose()}if(e.shiftKey){a.isShiftKeyDown=true}},a.handleKeyUp=function(e){if(!e.shiftKey){a.isShiftKeyDown=false}},a.handleClose=function(){if(a.props.onBack){a.props.onBack()}else{var e=a.props.onRequestClose()
if(e!==false){if(a.props.shouldAnimate){a.setState({forceClosingAnimation:true})}a.setState({willBeVisible:false})
a.closeTimeout=setTimeout(function(){return a.props.onClose()},TRANSITION_ANIMATION_DURATION)}}},o),babelHelpers.possibleConstructorReturn(a,r)}t.prototype.getChildContext=function e(){return{modalContainerElement:this.state.modalContainerElement}}
t.prototype.UNSAFE_componentWillMount=function e(){(0,_util.getBody)().addEventListener("keydown",this.handleKeyDown);(0,_util.getBody)().addEventListener("keyup",this.handleKeyUp)}
t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
document.addEventListener("focusout",this._restrictedFocusHandler,true)
if(this.props.shouldAnimate){var o=100
this.startAnimationsTimeout=setTimeout(function(){return t.setState({startAnimations:true})},0)
this.willBeVisibleTimeout=setTimeout(function(){t.setState({willBeVisible:true})
t._initialModalFocus()},o)
this.isModalOpenTimeout=setTimeout(function(){return t.setState({isModalOpen:true})},o+TRANSITION_ANIMATION_DURATION)}else{setTimeout(function(){t.setState({isModalOpen:true,willBeVisible:true},function(){return t._initialModalFocus()})},0)}this.updateBodyRender()}
t.prototype.componentDidUpdate=function e(){this.updateBodyRender()}
t.prototype.componentWillUnmount=function e(){this._isMounted=false
document.removeEventListener("focusout",this._restrictedFocusHandler,true);(0,_util.getBody)().removeEventListener("keydown",this.handleKeyDown);(0,_util.getBody)().removeEventListener("keyup",this.handleKeyUp)
if(this.startAnimationsTimeout){clearTimeout(this.startAnimationsTimeout)}if(this.willBeVisibleTimeout){clearTimeout(this.willBeVisibleTimeout)}if(this.isModalOpenTimeout){clearTimeout(this.isModalOpenTimeout)}if(this.closeTimeout){clearTimeout(this.closeTimeout)}if(this.props.hostInBody){_reactDom2.default.unmountComponentAtNode(getModalParent())}}
t.prototype.getChildrenId=function e(){if(!this.ids){return null}return this.ids.get("children")}
t.prototype.getTitleId=function e(){if(!this.ids){return null}return this.ids.get("title")}
t.prototype.updateBodyRender=function e(){if(this.props.hostInBody){_reactDom2.default.render(this.renderModalWithIDProvider(),getModalParent())}}
t.prototype.renderModalWithIDProvider=function e(){var t=this
return React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{mockOnFirstRender:true,scope:"dialog"},function(e){t.ids=e
return t.renderModal()})}
t.prototype.renderModal=function e(){var t=this
var o=this.props,a=o.shouldAnimate,r=o.fromAnotherModal,i=o.navigator,l=o.preventDismissal,n=o.hideCloseIcon,s=o.shouldBackdropDismiss,d=o.topRightElements,c=o.useBackIcon,u=o.visible,p=o.inline,m=o.topBar,f=o.controlButtonColors
var h=this.state,b=h.startAnimations,y=h.willBeVisible,v=h.isModalOpen,g=h.forceClosingAnimation
var I=Array.isArray(this.props.style)?this.props.style:[this.props.style]
var M=a&&!r||g?[styles.modal,!v&&b&&styles.animateInModal,v&&b&&styles.animateOutModal,!y&&styles.modalDown,y&&styles.modalUp].concat(I):[styles.modal].concat(I)
var T=this.props.children
if(typeof T==="function"){T=T({closeModal:function e(){return t.handleClose()}})}var R=React.Children.toArray(T)
var x=R.filter(function(e){return e.type!==_modalFooter2.default&&e.type!==_modalHeader2.default})
var C=R.filter(function(e){return e.type===_modalHeader2.default})
if(C.length>1){console.warn("Modal can only display a single header")}var A=C[0]
var N=R.filter(function(e){return e.type===_modalFooter2.default})
if(N.length>1){console.warn("Modal can only display a single footer")}var D=N[0]
var w=(!l||c)&&!n&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCorner)},React.createElement(_controlButton2.default,{onClick:this.handleClose,padding:12,colors:f,testId:"close-modal-btn"},c?React.createElement(_backIcon2.default,null):React.createElement(_closeIcon2.default,{size:24,iconSize:12})))
var q=d&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCorner),"data-test-id":"modal-top-right-element"},d)
var E=void 0
if(a&&!r||g){if(!v&&b){E="in"}else if(v&&b){E="out"}else{E=null}}else{E=null}return React.createElement("div",null,React.createElement("div",{ref:this._setContainerState,className:(0,_aphrodite.css)(styles.container,!u&&styles.hidden,p&&styles.inlineWrap,m&&styles.withTopBar)},!p&&React.createElement(_scrollDisabler2.default,null),m&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topBar)},m),React.createElement(_backdrop2.default,{inline:p,willBeVisible:y,animate:E,onClick:function e(){if(s()&&!l){t.handleClose()}}}),i&&i.hasPrev()&&React.createElement("div",{role:"button","aria-label":i18n._("previous"),"data-test-id":"prev-arrow",className:(0,_aphrodite.css)(styles.sideNav,styles.prev),onClick:function e(){return i.hasPrev()&&i.onPrev()}},React.createElement(_icon2.default,{icon:icons.angleLeft,size:17})),React.createElement("div",{"aria-labelledby":this.getTitleId(),"aria-describedby":this.getChildrenId(),className:_aphrodite.css.apply(undefined,M.concat([p&&styles.inlineModal])),ref:function e(o){return t.modal=o},role:this.props.alert?"alertdialog":"dialog",tabIndex:"-1"},A&&React.cloneElement(A,{id:this.getTitleId(),topLeftCorner:w,topRightCorner:q}),React.createElement("div",{id:this.getChildrenId(),className:(0,_aphrodite.css)(styles.dialogBody)},x),D,!A&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCornerInModal)},w),!A&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCornerInModal)},q)),i&&i.hasNext()&&React.createElement("div",{role:"button","aria-label":i18n._("next"),"data-test-id":"next-arrow",className:(0,_aphrodite.css)(styles.sideNav,styles.next),onClick:function e(){return i.hasNext()&&i.onNext()}},React.createElement(_icon2.default,{icon:icons.angleRight,size:17}))),this.props.restrictFocusToModal&&React.createElement("div",{tabIndex:"0"}))}
t.prototype.render=function e(){var t=this.props.hostInBody
if(t){return null}return this.renderModalWithIDProvider()}
return t}(_react.Component)
Modal.defaultProps={shouldAnimate:true,shouldBackdropDismiss:function e(){return true},fromAnotherModal:false,visible:true,onRequestClose:function e(){return true},onClose:function e(){},preventDismissal:false,hideCloseIcon:false,restrictFocusToModal:true}
Modal.childContextTypes={modalContainerElement:PropTypes.instanceOf(HTMLElement)}
var sharedModalStyles=exports.sharedModalStyles=_aphrodite.StyleSheet.create({subtitle:babelHelpers.extends({},_globalStyles.typography.modalSubtitle,{color:_globalStyles.colors.gray68})})
var styles=_aphrodite.StyleSheet.create({inlineWrap:{display:"block",overflow:"auto",position:"relative"},container:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",zIndex:_globalStyles.constants.zindexModal},dialogBody:{display:"flex",overflow:"auto",flexDirection:"column",flexGrow:1,justifyContent:"center"},hidden:{visibility:"hidden"},topBar:{position:"fixed",top:0,left:0,right:0,zIndex:_globalStyles.constants.zindexAboveModal},modalWrapper:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},modal:(_modal={display:"flex",flexDirection:"column",position:"relative",maxHeight:"100%",maxWidth:"100%",backgroundColor:"white",borderRadius:_globalStyles.constants.baseBorderRadius},_modal[_globalStyles.queries.small]={borderRadius:0},_modal.outline="none",_modal.WebkitTapHighlightColor="rgba(0,0,0,0)",_modal.border="1px solid rgba(0,0,0,0)",_modal.backgroundClip="padding-box",_modal),inlineModal:{margin:"10px auto",position:"relative",width:"75%",height:"100%"},modalDown:(_modalDown={transform:"translate(0px, 48px)",opacity:0},_modalDown[_globalStyles.queries.small]={transform:"translate(0vw, 100vh)",opacity:1},_modalDown),modalUp:(_modalUp={transform:"translate(0px, 0px)",opacity:1},_modalUp[_globalStyles.queries.small]={transform:"translate(0vw, 0vh)",opacity:1},_modalUp),animateInModal:(_animateInModal={transition:["transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)","opacity "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0, 0.25, 0.25, 1)"].join(", ")},_animateInModal[_globalStyles.queries.small]={transition:"transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)"},_animateInModal),animateOutModal:(_animateOutModal={transition:["transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0.25, 0.25, 0.25, 1)","opacity 0.2s cubic-bezier(0, 0.25, 0.25, 1)"].join(", ")},_animateOutModal[_globalStyles.queries.small]={transition:"transform "+TRANSITION_ANIMATION_DURATION+"ms\n                cubic-bezier(0, 0.25, 0.25, 1)"},_animateOutModal),sideNav:(_sideNav={display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",maxWidth:"5%",width:48,top:0,height:"100%",color:"white",userSelect:"none",WebkitTapHighlightColor:"transparent",":hover":{color:_globalStyles.colors.white,opacity:.5,cursor:"pointer"}},_sideNav[_globalStyles.queries.small]={display:"none"},_sideNav),prev:{left:0},next:{right:0},topLeftCorner:{display:"flex",flexDirection:"row",alignItems:"center",height:60,paddingLeft:6,zIndex:1},topRightCorner:{display:"flex",flexDirection:"row",alignItems:"center",height:60,paddingRight:6,zIndex:1},topLeftCornerInModal:{position:"absolute",left:0,top:0},topRightCornerInModal:{position:"absolute",right:0,top:0},withTopBar:(_withTopBar={top:_globalStyles.constants.topBarHeightDesktop},_withTopBar[_globalStyles.queries.small]={top:_globalStyles.constants.topBarHeightMobile},_withTopBar)})
var icons={angleLeft:{path:"M58.622 8.272q0 1.32-1.056 2.376l-39.512 39.512 39.512 39.512q.968.968.968 2.288t-.968 2.288l-5.016 5.104q-.968.968-2.288.968t-2.376-.968l-46.816-46.904q-.968-.968-1.056-2.288 0-1.32 1.056-2.376l46.816-46.816q.968-.968 2.376-.968t2.288.968l5.016 5.016q1.056.968 1.056 2.288z",width:58.421,height:100},angleRight:{path:"M58.524 50.16q0 1.32-.968 2.288l-46.904 46.904q-.968.968-2.288.968t-2.376-.968l-5.016-5.104q-.968-.968-.968-2.288t.968-2.288l39.512-39.512-39.512-39.512q-.968-.968-.968-2.376t.968-2.288l5.016-5.016q.968-.968 2.376-.968t2.288.968l46.904 46.816q.968 1.056.968 2.376z",width:58.333,height:100}}
exports.default=Modal
exports.ModalFooter=_modalFooter2.default
exports.ModalHeader=_modalHeader2.default

});
KAdefine("javascript/components/modal-package/modal-header.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _largeCornerInHeader,_smallCornerInHeader,_babelHelpers$extends,_titleLong
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ModalHeader=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,l=r.children,a=r.backgroundColor,t=r.borderColor,s=r.style,o=r.topLeftCorner,n=r.topRightCorner
var i=babelHelpers.extends({color:_globalStyles.colors.gray17},s,{boxShadow:"0 1px 0 0 "+(t||"")})
if(a){i.backgroundColor=a}var d=n?"large":o?"small":null
var p=typeof l==="string"&&l.length>32
return React.createElement("div",{style:i,className:(0,_aphrodite.css)(styles.header)},d&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topLeftCornerInHeader,d==="large"&&styles.largeCornerInHeader,d==="small"&&styles.smallCornerInHeader)},o),React.createElement("h1",{className:(0,_aphrodite.css)(styles.title,p&&styles.titleLong),"data-test-id":"modal-title",id:this.props.id},l),d&&React.createElement("div",{className:(0,_aphrodite.css)(styles.topRightCornerInHeader,d==="large"&&styles.largeCornerInHeader,d==="small"&&styles.smallCornerInHeader)},n))}
return r}(_react.Component)
ModalHeader.defaultProps={borderColor:"rgba(0, 0, 0, 0.15)"}
var headerHeight=60
var styles=_aphrodite.StyleSheet.create({header:{display:"flex",flexDirection:"row",flexGrow:0,flexShrink:0,position:"relative",zIndex:1,height:headerHeight,borderTopLeftRadius:_constants2.default.baseBorderRadius,borderTopRightRadius:_constants2.default.baseBorderRadius},largeCornerInHeader:(_largeCornerInHeader={flexBasis:152},_largeCornerInHeader[_globalStyles.queries.small]={flexBasis:56},_largeCornerInHeader),smallCornerInHeader:(_smallCornerInHeader={flexBasis:56},_smallCornerInHeader[_globalStyles.queries.small]={flexBasis:56},_smallCornerInHeader),topLeftCornerInHeader:{justifyContent:"flex-start"},topRightCornerInHeader:{justifyContent:"flex-end"},title:babelHelpers.extends({},_globalStyles.typography.subheadingDesktop,(_babelHelpers$extends={flex:1,flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center",paddingLeft:6,paddingRight:6,marginBottom:0},_babelHelpers$extends[_globalStyles.queries.small]=babelHelpers.extends({},_globalStyles.typography.subheadingMobile),_babelHelpers$extends)),titleLong:(_titleLong={},_titleLong[_globalStyles.queries.small]=babelHelpers.extends({},_globalStyles.typography.smallHeadingMobile),_titleLong)})
exports.default=ModalHeader

});
KAdefine("javascript/components/modal-package/modal-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.ModalFooter=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var ModalFooter=exports.ModalFooter=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.children,o=r.style
return React.createElement("div",{className:(0,_aphrodite.css)(styles.footer),style:o},t)}
return r}(_react.Component)
var headerHeight=60
var styles=_aphrodite.StyleSheet.create({footer:{display:"flex",flexDirection:"row",alignItems:"center",boxShadow:"0 -1px 0 0 rgba(0, 0, 0, 0.15)",flexGrow:0,flexShrink:0,position:"relative",height:headerHeight}})
exports.default=ModalFooter

});
KAdefine("javascript/components/modal-package/modal-launcher.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _analytics=require("../../analytics-package/analytics.js")
var _analytics2=babelHelpers.interopRequireDefault(_analytics)
var ModalLauncher=function(e){babelHelpers.inherits(o,e)
function o(){var a,r,t
babelHelpers.classCallCheck(this,o)
for(var n=arguments.length,l=Array(n),i=0;i<n;i++){l[i]=arguments[i]}return t=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),r),r.showModal=function(e){if(e){e.preventDefault()}_analytics2.default.handleStartRouterNavigation()
if(!r._modalContainer){var o=document.createElement("div")
o.setAttribute("role","dialog")
if(!document.body){throw new Error("No body found in document!")}document.body.appendChild(o)
var a=void 0
var t=r.props.modal
if(typeof t==="function"){a=t({closeModal:r.hideModal})}else{a=t&&React.cloneElement(t,{onClose:r.hideModal})}_reactDom2.default.render(a,o)
r._modalContainer=o}},r.hideModal=function(){var e=r.props.focusId
if(r._modalContainer){if(!document.body){throw new Error("No body found in document!")}document.body.removeChild(r._modalContainer)
_reactDom2.default.unmountComponentAtNode(r._modalContainer)
r._modalContainer=null}var o=document.getElementById(e)
if(o){o.focus()}},a),babelHelpers.possibleConstructorReturn(r,t)}o.prototype.componentWillUnmount=function e(){if(this._modalContainer){this.hideModal()}}
o.prototype.render=function e(){var o=this.props,a=o.children,r=o.ariaLabel
return a(this.showModal,r)}
return o}(_react.Component)
module.exports=ModalLauncher

});
KAdefine("javascript/components/modal-package/scroll-disabler.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _util=require("./util.js")
var needsHackyMobileSafariScrollDisabler=function(){var e=window.navigator.userAgent
return e.indexOf("iPad")>-1||e.indexOf("iPhone")>-1}()
var ScrollDisabler=function(e){babelHelpers.inherits(l,e)
function l(){babelHelpers.classCallCheck(this,l)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}l.prototype.UNSAFE_componentWillMount=function e(){if(l.numModalsOpened===0){var o=(0,_util.getBody)()
l.oldOverflow=o.style.overflow
l.oldScrollY=window.scrollY
if(needsHackyMobileSafariScrollDisabler){l.oldPosition=o.style.position
l.oldWidth=o.style.width
l.oldTop=o.style.top}o.style.overflow="hidden"
if(needsHackyMobileSafariScrollDisabler){o.style.position="fixed"
o.style.width="100%"
o.style.top=-l.oldScrollY+"px"}}l.numModalsOpened++}
l.prototype.componentWillUnmount=function e(){l.numModalsOpened--
if(l.numModalsOpened===0){var o=(0,_util.getBody)()
o.style.overflow=l.oldOverflow
if(needsHackyMobileSafariScrollDisabler){o.style.position=l.oldPosition
o.style.width=l.oldWidth
o.style.top=l.oldTop}window.scrollTo(0,l.oldScrollY)}}
l.prototype.render=function e(){return null}
return l}(_react.Component)
ScrollDisabler.numModalsOpened=0
exports.default=ScrollDisabler

});
KAdefine("javascript/components/modal-package/two-column-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.DefaultContentLayout=undefined
var _container,_previewContainer,_footer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _modal=require("./modal.jsx")
var _modal2=babelHelpers.interopRequireDefault(_modal)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _viewportWatcher=require("../viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var TwoColumnModal=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderDesktop=function e(r,t,o){return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksCoreV.View,{style:styles.previewContainer},t),React.createElement(_wonderBlocksCoreV.View,{style:styles.contentContainer},React.createElement(_wonderBlocksCoreV.View,{style:[!!o&&styles.scroll]},r),o&&React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},o)))}
r.prototype.renderMobile=function e(r,t,o){return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksCoreV.View,{style:[styles.contentContainer,styles.scroll]},React.createElement(_wonderBlocksCoreV.View,{style:styles.previewContainer},t),React.createElement(_wonderBlocksCoreV.View,null,r)),o&&React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},o))}
r.prototype.render=function e(){var r=this
var t=this.props,o=t.onClose,l=t.content,n=t.preview,a=t.footer,i=t.style,s=babelHelpers.objectWithoutProperties(t,["onClose","content","preview","footer","style"])
return React.createElement(_modal2.default,babelHelpers.extends({style:[styles.modal,i],onClose:o},s),function(e){var t=e.closeModal
var o=typeof l==="function"?l({closeModal:t}):l
var i=typeof n==="function"?n({closeModal:t}):n
var s=typeof a==="function"?a({closeModal:t}):a
return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_viewportWatcher2.default,null,function(e){var t=e.atMost("sm")?r.renderMobile:r.renderDesktop
return t(o,i||null,s||null)}))})}
return r}(React.Component)
exports.default=TwoColumnModal
var DefaultContentLayout=exports.DefaultContentLayout=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.content},this.props.children)}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({modal:{height:464,width:888,display:"flex",flexDirection:"column",overflow:"hidden"},container:(_container={display:"flex",flex:1,flexDirection:"row",minHeight:0},_container[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_container),previewContainer:(_previewContainer={display:"flex",backgroundColor:_wonderBlocksColorV2.default.darkBlue,flex:1,overflow:"hidden"},_previewContainer[_mediaQueries2.default.smOrSmaller]={flexShrink:0,paddingTop:32,paddingBottom:32},_previewContainer),contentContainer:{flex:1,display:"flex",flexDirection:"column"},content:{paddingTop:64,paddingRight:64,paddingLeft:52,flex:1},scroll:{overflow:"auto",flex:1},footer:(_footer={borderTop:"solid 1px "+_wonderBlocksColorV2.default.offBlack32,display:"flex",alignItems:"center",flexDirection:"row-reverse",height:72,padding:"0 16px"},_footer[_mediaQueries2.default.smOrSmaller]={flexShrink:0,minHeight:72},_footer)})

});
KAdefine("javascript/components/modal-package/backdrop.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var Backdrop=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props,t=a.willBeVisible,r=a.inline,s=a.onClick,o=a.animate
var n=o!==null?[styles.backdrop,o==="in"&&styles.animateInBackdrop,o==="out"&&styles.animateOutBackdrop,!t&&styles.backdropTransparent,t&&styles.backdropSemiTransparent]:[styles.backdrop,styles.backdropSemiTransparent]
return React.createElement("div",{"data-test-id":"modal-backdrop",onClick:s,className:_aphrodite.css.apply(undefined,n.concat([r&&styles.inlineBackdrop]))})}
return a}(_react.Component)
var TRANSITION_ANIMATION_DURATION=300
var styles=_aphrodite.StyleSheet.create({backdrop:{backgroundColor:_constants2.default.dark,bottom:0,left:0,position:"fixed",right:0,top:0},inlineBackdrop:{position:"absolute"},backdropTransparent:{opacity:0},backdropSemiTransparent:{opacity:_globalStyles.modalBackdropOpacity},animateInBackdrop:{transition:"opacity "+TRANSITION_ANIMATION_DURATION+"ms\n            cubic-bezier(0.4, 0.0, 0.6, 1.0)"},animateOutBackdrop:{transition:"opacity "+TRANSITION_ANIMATION_DURATION+"ms\n            cubic-bezier(0.4, 0.0, 0.6, 1.0)"}})
exports.default=Backdrop

});
KAdefine("javascript/components/modal-package/util.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getBody=getBody
function getBody(){var e=document.body
if(!e){throw new Error("document.body does not exist")}return e}
});
KAdefine("javascript/components/modal-package/types.js", function(require, module, exports) {

});
KAdefine("javascript/components/modal-package/article-modal.jsx", function(require, module, exports) {
var _modal,_navLink
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _analytics=require("../../analytics-package/analytics.js")
var _analytics2=babelHelpers.interopRequireDefault(_analytics)
var _pageloadMarker=require("../../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _interactionUtils=require("../../components/modal-package/interaction-utils.js")
var _scrollTracking=require("../../shared-components-package/scroll-tracking.jsx")
var _scrollTracking2=babelHelpers.interopRequireDefault(_scrollTracking)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _staticUrl=require("../../shared-package/static-url.js")
var i18n=require("../../shared-package/i18n.js")
var ArticleModal=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),o=0;o<s;o++){i[o]=arguments[o]}return n=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={Perseus:null,perseusContent:null,footerOpacity:1},r.handleScroll=function(e){var t=e.target,a=t.scrollTop,n=t.scrollHeight,s=t.offsetHeight
if(r._isMounted){var i=Math.min((n-(a+s))/footerHeight,1)
if(i!==r.state.footerOpacity){r.setState({footerOpacity:i})}}},r.trackScrollPosition=function(e,t){if(r._isMounted){var a=t.target,n=a.scrollTop,s=a.scrollHeight,i=a.offsetHeight
var o=(0,_interactionUtils.computeArticleScrollParams)(n,i,s,r._lastReportedParams)
if(o){r._lastReportedParams=o
r.logConversions("article_scroll",o)}}},r.onNavigateToContent=function(){var e=r.props,t=e.article,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.contentId,kind:t.kind,slug:t.slug}}])
a()},a),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
this.fetchContent()
Promise.all([require.dynimport("../../perseus-all-package/perseus.js").then(function(e){return e.default}),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default}),require.dynimport("../../../stylesheets/react-datepicker-package/react-datepicker.less"),require.dynimport("../../../stylesheets/exercises-package/exercises.less"),require.dynimport("../../../stylesheets/katex-package/katex.less"),require.dynimport("../../../stylesheets/perseus-renderer-package/perseus-renderer.less"),require.dynimport("../../../stylesheets/discussion-package/discussion.less"),require.dynimport("../../../stylesheets/moderation-package/moderation.less")]).then(function(e){var a=e[0]
if(t._isMounted){a.init({skipMathJax:true,loadExtraWidgets:true}).then(function(){t.setState({Perseus:a})})}})}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(this.props.article.slug!==t.article.slug){this.setState({perseusContent:null},this.fetchContent.bind(this))}}
t.prototype.componentDidUpdate=function e(t,a){var r=this
var n=a.Perseus&&a.perseusContent
var s=this.state.Perseus&&this.state.perseusContent
if(!n&&s){window.setTimeout(function(){return r.logConversions("article_view")},1e3)}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.fetchContent=function e(){var t=this
var a=(0,_staticUrl.contentUrl)(_ka2.default.kaLocale,this.props.article.nodeUrl);(0,_khanFetch.khanFetch)(a).then(function(e){return e.json()}).then(function(e){var a=e.componentProps.tutorialPageData.contentModel.perseusContent
if(t._isMounted&&a){t.setState({perseusContent:JSON.parse(a)})}})}
t.prototype.logConversions=function e(t){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
if(this._isMounted){var r=this.props.article.contentId
a.conversion_id=t
if(this.props.topicSlug){a.topic_slug=this.props.topicSlug}a.article_slug=this.props.article.slug
a.platform="web-client"
a.occurred_at_seconds=Math.floor(Date.now()/1e3)
a.ga_referrer=_analytics2.default.getGAReferrer()
a.casing="camel"
var n=(0,_khanFetch.encodeParams)(a);(0,_khanFetch.khanFetch)("/api/internal/user/article/"+r+"/log?"+n,{method:"POST",headers:{"Content-Type":"application/json"}})
this.props.onArticleComplete()}}
t.prototype.renderContentLink=function e(){var t=this.props,a=t.article,r=t.contentLink,n=t.openLinkInNewTab
var s=r||i18n._("Go to lesson page")
return React.createElement(_wonderBlocksButtonV2.default,{style:styles.navLink,target:n?"_blank":undefined,href:a.nodeUrl,onClick:this.onNavigateToContent,kind:"tertiary"},s)}
t.prototype.renderAssignmentHeader=function e(){var t=this.props,a=t.article,r=t.initialAssignment
var n=a.kind+":"+a.contentId
return React.createElement(_asyncCreateAssignmentHeader2.default,{contentDescriptor:n,contentTitle:a.title,initialAssignment:r})}
t.prototype.render=function e(){var t=this
var a=this.props,r=a.linkToContent,n=a.nextItem,s=a.onClose,i=a.navigator,o=a.shouldAnimate,l=a.shouldBackdropDismiss,c=a.fromAnotherModal,d=a.visible,p=a.hideFooter,u=a.title,h=a.referrer,g=a.hostInBody
var f=this.props.shouldRenderAssignmentHeader==null?_ka2.default.featureFlag("SHOW_ASSIGNMENTS"):this.props.shouldRenderAssignmentHeader
var m=this.state,v=m.perseusContent,k=m.Perseus
var y=false
var b=_ka2.default.featureFlag("FINAL_MULTIPLE_CHOICE_STYLES")?"final":"intermediate"
var C={trackInteraction:function e(a){var r={widget_id:a.id,widget_status:a.status,widget_type:a.type}
t.logConversions("article_widget",r)},styling:{radioStyleVersion:b},isMobile:y,customKeypad:y,inModal:true}
var R=React.createElement("div",{className:(0,_aphrodite.css)(styles.spinnerContainer)},React.createElement(_spinner2.default,null))
if(v&&k){R=React.createElement(_scrollTracking2.default,{debounce:true,delayMs:2e3,onScroll:this.trackScrollPosition},React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer),onScroll:function e(a){return t.handleScroll(a)},tabIndex:0},React.createElement(k.ArticleRenderer,{apiOptions:C,json:v,useNewStyles:true})))}var S=void 0
var H={paddingLeft:_globalStyles2.default.constants.moduleHorizontalPaddingSmall,paddingRight:_globalStyles2.default.constants.moduleHorizontalPaddingSmall}
if(n){var x=null
if(h==="student-assignments-table"){x=i18n._("Next assignment")}else if(n.kind==="Article"){x=i18n._("Next article")}else if(n.kind==="Exercise"){x=i18n._("Next exercise")}else if(n.kind==="Video"){x=i18n._("Next video")}else if(n.kind==="InterspersedQuiz"){if(n.type==="quiz"){x=i18n._("Take quiz")}else if(n.type==="test"){x=i18n._("Take test")}else{console.warn("Unhandled InterspersedQuiz type: "+n.type)
x=i18n._("Next item")}}else{x=i18n._("Next item")
console.warn("Unhandled item type: "+n.kind)}S=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},H)},React.createElement(_wonderBlocksButtonV2.default,{onClick:function e(){if(i&&i.onNext){i.onNext()}else{s()}},style:styles.btn},x))}else{S=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},H)})}if(p){S=null}return React.createElement("div",null,React.createElement(_modal3.default,{navigator:i,onClose:s,shouldAnimate:o,shouldBackdropDismiss:l,fromAnotherModal:c,topRightElements:r&&this.renderContentLink(),style:styles.modal,visible:d,restrictFocusToModal:!f,topBar:f&&this.renderAssignmentHeader(),hostInBody:g},React.createElement(_modal2.ModalHeader,null,u),R,S,React.createElement(_pageloadMarker2.default,{key:u,pageName:"article_modal",sufficientlyUsable:!!v&&!!k,fullyInteractive:!!v&&!!k})))}
return t}(_react.Component)
var footerHeight=96
var styles=_aphrodite.StyleSheet.create({contentContainer:{flexGrow:1,height:"100%",overflow:"auto",paddingTop:32,WebkitOverflowScrolling:"touch",margin:5},modal:(_modal={width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth,height:"90%"},_modal[_globalStyles2.default.queries.small]={width:"100%",height:"100%"},_modal),spinnerContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},navLink:(_navLink={marginRight:24},_navLink[_globalStyles2.default.queries.small]={display:"none"},_navLink),btn:{minWidth:136}})
module.exports=ArticleModal

});
KAdefine("javascript/components/modal-package/exercise-modal.jsx", function(require, module, exports) {
var _modal,_navLink
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _twoColumnModal=require("./two-column-modal.jsx")
var _twoColumnModal2=babelHelpers.interopRequireDefault(_twoColumnModal)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var Analytics=require("../../analytics-package/analytics.js")
var editContentIcon={path:"M41.209 53.753l5.39 0l0 5.39l3.136 0l6.468-6.517-8.477-8.526-6.517 6.517l0 3.136zm33.173-34.937q-.882-.882-1.862.049l-19.6 19.6q-.931.98-.049 1.862t1.862-.049l19.6-19.6q.931-.98.049-1.862zm-38.563 45.668l0-16.121l37.632-37.632 16.17 16.121-37.632 37.632l-16.17 0zm43.022-12.397l0 10.633q-.049 6.713-4.753 11.417t-11.368 4.704l-46.599 0q-6.713 0-11.417-4.753t-4.704-11.368l0-46.599q0-6.664 4.753-11.417t11.368-4.704l46.599 0q3.528 0 6.566 1.372.833.392.98 1.323t-.49 1.617l-2.744 2.744q-.784.784-1.96.441t-2.352-.343l-46.599 0q-3.675 0-6.321 2.646t-2.646 6.321l0 46.599q0 3.675 2.646 6.321t6.321 2.646l46.599 0q3.675 0 6.321-2.646t2.646-6.321l0-7.056q0-.735.49-1.225l3.577-3.577q.833-.833 1.96-.392t1.127 1.617zm7.203-51.646q2.254 0 3.773 1.568l8.526 8.526q1.568 1.568 1.568 3.822t-1.568 3.773l-5.145 5.145-16.121-16.121 5.145-5.145q1.568-1.568 3.822-1.568z",width:100,height:78.912}
var editMetadataIcon={path:"M21.988 81.408q0-1.59-1.166-2.756-1.113-1.113-2.703-1.113t-2.756 1.166-1.166 2.703 1.166 2.703 2.756 1.166 2.756-1.166 1.113-2.703zm-21.995 3.869q0-3.286 2.279-5.512l41.287-41.234q2.385 5.936 6.943 10.494t10.494 6.943l-41.34 41.287q-2.173 2.226-5.353 2.226t-5.565-2.226l-6.466-6.519q-2.279-2.173-2.279-5.459zm99.375-55.544q0 2.226-1.378 6.307-2.862 8.109-9.964 13.144t-15.635 5.088q-11.183 0-19.186-7.95-7.95-7.897-7.95-19.133t7.95-19.186 19.186-8.003q3.498 0 7.367 1.007t6.466 2.809q1.007.689 1.007 1.696t-1.007 1.696l-17.702 10.229l0 13.568l11.66 6.466q.318-.159 8.374-5.088t8.904-4.876q1.908 0 1.908 2.226z",width:99.893,height:100}
var i18n=require("../../shared-package/i18n.js")
var ExerciseModal=function(e){babelHelpers.inherits(t,e)
t.preloadResources=function e(){Promise.all([require.dynimport("../../exercises-package/components/practice-exercise.jsx").then(function(e){return e.default}),require.dynimport("../../exercises-package/stateful-exercise-manager.jsx").then(function(e){return e.default}),require.dynimport("../../perseus-all-package/perseus.js").then(function(e){return e.default}),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default}),require.dynimport("../../../stylesheets/react-datepicker-package/react-datepicker.less"),require.dynimport("../../../stylesheets/exercises-package/exercises.less"),require.dynimport("../../../stylesheets/katex-package/katex.less"),require.dynimport("../../../stylesheets/perseus-renderer-package/perseus-renderer.less"),require.dynimport("../../../stylesheets/odometer-package/odometer.less"),require.dynimport("../../../stylesheets/avatar-customizer-package/avatar-customizer.less"),require.dynimport("../../../stylesheets/tasks-package/tasks.less")])}
function t(a){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
r.reportPageTimings=function(){if(r.props.type==="Exercise"){Analytics.reportPageLifecycleTiming("exercise_modal",{interactive:true,usable:true},.02)}else if(r.props.type==="Task"&&r.props.taskData!=null){var e=r.props.taskData.taskJson
if(e.taskType==="topic_quiz"){Analytics.reportPageLifecycleTiming("quiz_modal",{interactive:true,usable:true},.11)}else if(e.taskType==="topic_unit_test"){Analytics.reportPageLifecycleTiming("unit_test_modal",{interactive:true,usable:true},.16)}else if(e.taskType==="subject_challenge"){Analytics.reportPageLifecycleTiming("course_challenge_modal",{interactive:true,usable:true})}}}
r.handleNextTask=function(){r.props.onNextTask()
r.setState({displayCard:r.props.StartOfTaskCard?"start":"exercise"})}
r.handlePracticeAgain=function(){r.setState({displayCard:r.props.StartOfTaskCard?"start":"exercise"},r.props.onPracticeAgain)}
r.handleTaskComplete=function(e,t,a,s,i){var o=function o(){if(r.props.onTaskComplete){r.props.onTaskComplete(e,t,a,s,i)}}
if(r.props.SimpleEndOfTaskCard||r.props.EndOfQuizCard){r.setState({displayCard:"end"},o)}else{o()}}
r.onNavigateToContent=function(){if(r.props.type!=="Exercise"){return}var e=r.props,t=e.exercise,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.contentId,kind:t.kind,slug:t.slug}}])
if(a){a()}}
r.advancePastStartOfTaskCard=function(){r.setState({displayCard:"exercise"})}
var s=a.StartOfTaskCard||a.StartOfQuizCard
r._isMounted=false
r.state={PracticeExercise:null,StatefulExerciseManager:null,displayCard:s?"start":"exercise",loaded:false}
return r}t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
Promise.all([require.dynimport("../../exercises-package/components/practice-exercise.jsx").then(function(e){return e.default}),require.dynimport("../../exercises-package/stateful-exercise-manager.jsx").then(function(e){return e.default}),require.dynimport("../../perseus-all-package/perseus.js").then(function(e){return e.default}),require.dynimport("../../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default}),require.dynimport("../../../stylesheets/react-datepicker-package/react-datepicker.less"),require.dynimport("../../../stylesheets/exercises-package/exercises.less"),require.dynimport("../../../stylesheets/katex-package/katex.less"),require.dynimport("../../../stylesheets/perseus-renderer-package/perseus-renderer.less"),require.dynimport("../../../stylesheets/odometer-package/odometer.less"),require.dynimport("../../../stylesheets/avatar-customizer-package/avatar-customizer.less"),require.dynimport("../../../stylesheets/tasks-package/tasks.less")]).then(function(e){var a=e[0],r=e[1],s=e[2]
if(t._isMounted){s.init({skipMathJax:true,loadExtraWidgets:true})
t.setState({PracticeExercise:a,StatefulExerciseManager:r,loaded:true})}})}
t.prototype.componentDidUpdate=function e(t){if(t.taskData==null&&this.props.taskData!=null){this.reportPageTimings()}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.practiceAgain=function e(){var t=this.props.onPracticeAgain
if(this.exerciseManager){this.exerciseManager.loadData(true)
this.setState({displayCard:this.props.StartOfTaskCard?"start":"exercise"},t)}else{this.setState({displayCard:this.props.StartOfQuizCard?"start":"exercise"},t)}}
t.prototype.renderLoadedContents=function e(){var t=this
var a=this.props,r=a.referrer,s=a.masteryEnabled,i=a.nextItem,o=a.onClose,n=a.onCheckAnswer,l=a.onReloadTask,d=a.practiceAgainMessage,p=a.inPractice
var c=this.state,u=c.PracticeExercise,m=c.StatefulExerciseManager
var h=void 0
var f=void 0
if(this.props.type==="Exercise"){var g=this.props,k=g.exercise,y=g.tutorial
h={exercise:k,exerciseName:k.slug,topic:y.slug}
f=k.contentId}else if(this.props.type==="Task"){var v=this.props,x=v.taskData,C=v.topicSlug
h={taskData:x,topic:C}
f=x.taskJson.id}else{throw new Error("Invalid props passed to ExerciseModal")}return React.createElement(m,babelHelpers.extends({key:f,ref:function e(a){return t.exerciseManager=a},ExerciseComponent:this.props.ExerciseComponent||u,EndOfTaskCard:this.props.EndOfTaskCard,inPractice:p,initialCards:null,initialItem:null,inModal:true,referrer:r,masteryEnabled:s,nextItem:i,nextTaskKind:i?i.kind:null,onComponentUsable:this.reportPageTimings,onCloseTask:o,onCheckAnswer:n,onNextTask:this.handleNextTask,onPracticeAgain:this.handlePracticeAgain,onReloadTask:l,onTaskComplete:this.handleTaskComplete,onShowRelatedVideo:this.props.onShowRelatedVideo,practiceAgainMessage:d,onUpdateRecommendations:this.props.onUpdateRecommendations},h))}
t.prototype.maybeRenderEditorIcons=function e(){if(this.props.type!=="Exercise"||!this.props.showEditorShortcuts){return null}var t=this.props,a=t.exercise,r=t.tutorial
var s="/devadmin/content/exercises/"+a.slug+"/"+a.contentId+"/items"
var i="/devadmin/content#"+r.id+"-Exercise:"+a.contentId
return[React.createElement("a",{key:"edit-items",href:s,style:{textDecoration:"none"},target:"_blank",title:"Edit this content"},React.createElement(_icon2.default,{icon:editContentIcon})),React.createElement("a",{key:"edit-meta",href:i,style:{margin:"0 8px",textDecoration:"none"},target:"_blank",title:"Edit metadata for this content"},React.createElement(_icon2.default,{icon:editMetadataIcon}))]}
t.prototype.maybeRenderContentLink=function e(){if(this.props.type==="Exercise"&&this.props.linkToContent){var t=this.props.exercise
return React.createElement(_wonderBlocksButtonV2.default,{style:styles.navLink,href:t.nodeUrl,onClick:this.onNavigateToContent,kind:"tertiary"},i18n._("Go to lesson page"))}}
t.prototype.renderAssignmentHeader=function e(){if(this.props.type==="Exercise"){var t=this.props.exercise
var a=t.kind+":"+t.contentId
return React.createElement(_asyncCreateAssignmentHeader2.default,{contentDescriptor:a,contentTitle:t.title})}if(this.props.type==="Task"&&this.props.contentDescriptor){var r=this.props,s=r.contentDescriptor,i=r.title
return React.createElement(_asyncCreateAssignmentHeader2.default,{contentDescriptor:s,contentTitle:i})}}
t.prototype.renderTopRightElements=function e(){var t=this.props.coachPreviewSwitcher
return t||this.maybeRenderEditorIcons()||this.maybeRenderContentLink()}
t.prototype.render=function e(){var t=this.props,a=t.shouldAnimate,r=t.onRequestClose,s=t.fromAnotherModal,i=t.onClose,o=t.navigator,n=t.shouldBackdropDismiss,l=t.title,d=t.type,p=t.visible,c=t.SimpleEndOfTaskCard,u=t.masteryEnabled,m=t.contentDescriptor
var h=this.state,f=h.displayCard,g=h.loaded
var k=g&&f==="exercise"
if(this.props.type==="Task"){var y=this.props.taskData
k=k&&y}var v=(this.props.shouldRenderAssignmentHeader==null?_ka2.default.featureFlag("SHOW_ASSIGNMENTS"):this.props.shouldRenderAssignmentHeader)&&(d==="Exercise"||d==="Task"&&m)
var x=u&&f==="start"&&this.props.StartOfQuizCard
var C=u&&f==="end"&&this.props.EndOfQuizCard
if(x){return React.createElement(_twoColumnModal2.default,{onRequestClose:r,onClose:i,navigator:o,shouldAnimate:a,shouldBackdropDismiss:n,fromAnotherModal:s,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:p,restrictFocusToModal:!v,topBar:v&&this.renderAssignmentHeader(),footer:this.props.StartOfQuizCard&&this.props.StartOfQuizCard.Footer(this.advancePastStartOfTaskCard),content:this.props.StartOfQuizCard?this.props.StartOfQuizCard.Summary:null,preview:this.props.StartOfQuizCard&&this.props.StartOfQuizCard.Cta})}else if(C){return React.createElement(_twoColumnModal2.default,{onRequestClose:r,onClose:i,navigator:o,shouldAnimate:a,shouldBackdropDismiss:n,fromAnotherModal:s,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:p,restrictFocusToModal:!v,topBar:v&&this.renderAssignmentHeader(),footer:this.props.EndOfQuizCard&&this.props.EndOfQuizCard.Footer,content:this.props.EndOfQuizCard?this.props.EndOfQuizCard.Summary:null,preview:this.props.EndOfQuizCard&&this.props.EndOfQuizCard.Cta})}else{return React.createElement("div",null,React.createElement(_modal3.default,{onRequestClose:r,onClose:i,navigator:o,shouldAnimate:a,shouldBackdropDismiss:n,fromAnotherModal:s||u,style:styles.modal,topRightElements:this.renderTopRightElements(),visible:p,restrictFocusToModal:!v,topBar:v&&this.renderAssignmentHeader()},React.createElement(_modal2.ModalHeader,null,l),f==="start"&&this.props.StartOfTaskCard&&this.props.StartOfTaskCard.Body,f==="start"&&this.props.StartOfTaskCard&&React.createElement(_modal2.ModalFooter,null,this.props.StartOfTaskCard.Footer(this.advancePastStartOfTaskCard)),React.createElement("div",{className:(0,_aphrodite.css)(styles.modalContents,f!=="exercise"&&this.props.StartOfTaskCard&&styles.hidden,u&&f!=="exercise"&&styles.none)+" bibliotron-exercise task-container"},!k&&!u&&React.createElement("div",{className:(0,_aphrodite.css)(styles.loadingContainer)},React.createElement(_timeoutSpinner2.default,{sentryId:"exercise_modal_exercise_load",description:"Exercise modal loading exercise",sentryTeam:"learning-platform"})),k&&this.renderLoadedContents()),f==="end"&&c&&c.Body,f==="end"&&c&&React.createElement(_modal2.ModalFooter,null,c.Footer)))}}
return t}(React.Component)
ExerciseModal.defaultProps={onRequestClose:function e(){return true},layout:"standard"}
var exerciseFooterHeight=60
var styles=_aphrodite.StyleSheet.create({hidden:{visibility:"hidden",height:0,maxHeight:0},none:{display:"none"},modalContents:{display:"flex",position:"relative",overflow:"hidden",flexGrow:1,borderBottomLeftRadius:_globalStyles2.default.borderRadius,borderBottomRightRadius:_globalStyles2.default.borderRadius},modal:(_modal={padding:0,borderRadius:_globalStyles2.default.borderRadius,width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth,height:"90%",maxHeight:768,overflow:"hidden"},_modal[_globalStyles2.default.queries.small]={minWidth:0,width:"100%",height:"100%",borderRadius:0},_modal),loadingContainer:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:exerciseFooterHeight},navLink:(_navLink={marginRight:18},_navLink[_globalStyles2.default.queries.small]={display:"none"},_navLink)})
module.exports=ExerciseModal

});
KAdefine("javascript/components/modal-package/video-modal.jsx", function(require, module, exports) {
var _practicePrompt,_modal,_contentContainer,_navLink
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _modal2=require("./modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _asyncCreateAssignmentHeader=require("../../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _constants3=require("../../video-package/constants.js")
var _apolloWrapper=require("../../apollo-package/apollo-wrapper.jsx")
var _apolloWrapper2=babelHelpers.interopRequireDefault(_apolloWrapper)
var _util=require("../../video-package/util.js")
var Analytics=require("../../analytics-package/analytics.js")
var i18n=require("../../shared-package/i18n.js")
var VideoModal=function(e){babelHelpers.inherits(t,e)
function t(){var a,n,r
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,i=Array(o),l=0;l<o;l++){i[l]=arguments[l]}return r=(a=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={PracticeExericse:null,StatefulExerciseManager:null,KAVideoWrapper:null,VideoPlayerState:null,loaded:false,playerModel:null,initializePlayerModel:null,useBackIcon:false},n._isMounted=false,n.saveProgressOnClose=function(){var e=n.state,t=e.VideoPlayerState,a=e.playerModel
if(t&&a){a.setPlayerState(t.PAUSED)}},n.onNavigateToContent=function(){var e=n.props,t=e.video,a=e.onClose
_bigbingo2.default.markConversionsWithExtras([{id:"content_modal_navigate_to_page",extra:{content_id:t.id,kind:t.kind,slug:t.slug}}])
a()},a),babelHelpers.possibleConstructorReturn(n,r)}t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
Promise.all([require.dynimport("../../video-package/ka-video-wrapper.jsx").then(function(e){return e.default}),require.dynimport("../../video-package/constants.js"),require.dynimport("../../video-package/initialize-player-model.js").then(function(e){return e.default}),require.dynimport("../../../stylesheets/clarifications-package/clarifications.less")]).then(function(e){var a=e[0],n=e[1].VideoPlayerState,r=e[2]
if(!t._isMounted){return}var o=t._getPlayerModel(t.props,r)
t.setState({KAVideoWrapper:a,VideoPlayerState:n,initializePlayerModel:r,playerModel:o})})
window.addEventListener("beforeunload",this.saveProgressOnClose)}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var a=this.state.initializePlayerModel
if(this.props.video.youtubeId!==t.video.youtubeId&&a){this.setState({playerModel:this._getPlayerModel(t,a)})}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false
this.saveProgressOnClose()
window.removeEventListener("beforeunload",this.saveProgressOnClose)}
t.prototype._getPlayerModel=function e(t,a){var n=t.video,r=t.topicSlug
return a&&a(n,{slug:r})}
t.prototype.renderContentLink=function e(){var t=this.props,a=t.video,n=t.contentLink,r=t.openLinkInNewTab
var o=n||i18n._("Go to lesson page")
return React.createElement(_wonderBlocksButtonV2.default,{style:styles.navLink,target:r?"_blank":undefined,href:a.kaUrl,onClick:this.onNavigateToContent,kind:"tertiary"},o)}
t.prototype.renderAssignmentHeader=function e(){var t=this.props,a=t.video,n=t.initialAssignment
var r=a.kind+":"+a.id
return React.createElement(_asyncCreateAssignmentHeader2.default,{contentDescriptor:r,contentTitle:a.translatedTitle,initialAssignment:n})}
t.prototype.reportPageTimings=function e(){Analytics.reportPageLifecycleTiming("video_modal",{interactive:true,usable:true})}
t.prototype.isVideoStarted=function e(t){if(t===_constants3.VideoPlayerState.ENDED||(0,_util.isUnstartedOrCued)(t)){return false}return true}
t.prototype.onVideoStateChange=function e(t){var a=this.props,n=a.onVideoPlay,r=a.onVideoComplete
if(t===_constants3.VideoPlayerState.ENDED&&r){r()}else if(this.isVideoStarted(t)&&n){n()}}
t.prototype.render=function e(){var t=this
var a=this.props,n=a.video,r=a.footer,o=a.linkToContent,i=a.shouldAnimate,l=a.fromAnotherModal,s=a.referrer,d=a.onBack,c=a.onClose,p=a.onPractice,u=a.navigator,m=a.nextItem,f=a.shouldAutoplay,v=a.shouldBackdropDismiss,g=a.startTime,y=a.useBackIcon,h=a.visible,b=a.attribution,k=a.title,C=a.hostInBody
var S=this.props.shouldRenderAssignmentHeader==null?_ka2.default.featureFlag("SHOW_ASSIGNMENTS"):this.props.shouldRenderAssignmentHeader
var x=this.state,R=x.KAVideoWrapper,P=x.VideoPlayerState,E=x.playerModel
var H=E&&R
var M=g&&{lastSecondWatched:g}
var q=React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer,H&&styles.contentContainerLoaded)},H&&R!=null&&P!=null?React.createElement(R,{hasNavigated:false,shouldAutoplay:f,video:n,navigateToNextItem:u&&u.onNext,nextContentItem:f&&m&&{translatedTitle:m.title,translatedDescription:m.kind==="InterspersedQuiz"?i18n._("Check your understanding across a range of skills"):m.description},playerModel:E,onComponentInteractive:this.reportPageTimings,onStateChanged:function e(a){return t.onVideoStateChange(a)},userVideo:M,inModal:true,attribution:b}):React.createElement("div",{className:(0,_aphrodite.css)(styles.spinnerContainer)},React.createElement(_spinner2.default,null)))
var A=void 0
var V={paddingLeft:_globalStyles2.default.constants.moduleHorizontalPaddingSmall,paddingRight:_globalStyles2.default.constants.moduleHorizontalPaddingSmall}
if(r===null){A=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},V)})}else if(r){A=r}else if(p){A=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"center"},V)},React.createElement("span",{className:(0,_aphrodite.css)(styles.practicePrompt)},i18n._("Feeling confident about this material?")),React.createElement("a",{className:(0,_aphrodite.css)(styles.practiceLink),onClick:function e(t){return p()}},i18n._("Check your understanding!")))}else if(m){var B=null
if(s==="student-assignments-table"){B=i18n._("Next assignment")}else if(m.kind==="Article"){B=i18n._("Next article")}else if(m.kind==="Exercise"){B=i18n._("Next exercise")}else if(m.kind==="Video"){B=i18n._("Next video")}else if(m.kind==="InterspersedQuiz"){if(m.type==="quiz"){B=i18n._("Take quiz")}else if(m.type==="test"){B=i18n._("Take test")}else{console.warn("Unhandled InterspersedQuiz type: "+m.type)
B=i18n._("Next item")}}else{B=i18n._("Next item")
console.warn("Unhandled item type: "+m.kind)}A=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},V)},React.createElement(_wonderBlocksButtonV2.default,{onClick:function e(){if(u&&u.onNext){u.onNext()}else{c()}},style:styles.btn},B))}else if(!y){A=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({justifyContent:"flex-end"},V)},React.createElement(_wonderBlocksButtonV2.default,{onClick:function e(){return c()},style:styles.btn},i18n._("Onward")))}else{A=React.createElement(_modal2.ModalFooter,{style:babelHelpers.extends({},V)})}return React.createElement("div",null,React.createElement(_modal3.default,{onBack:d,onClose:c,navigator:u,shouldAnimate:i,shouldBackdropDismiss:v,fromAnotherModal:l,style:styles.modal,topRightElements:o&&this.renderContentLink(),useBackIcon:y,visible:h,restrictFocusToModal:!S,topBar:S&&this.renderAssignmentHeader(),hostInBody:C},React.createElement(_modal2.ModalHeader,null,k),C?React.createElement(_apolloWrapper2.default,null,q):q,A))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({practicePrompt:(_practicePrompt={},_practicePrompt[_globalStyles2.default.queries.small]={display:"none"},_practicePrompt),practiceLink:{color:_globalStyles2.default.colors.kaGreen,marginLeft:"0.3em",textDecoration:"none",":hover":{color:_globalStyles2.default.colors.kaGreenHover,textDecoration:"underline"}},modal:(_modal={width:"90%",maxWidth:_globalStyles2.default.constants.contentModalWidth},_modal[_globalStyles2.default.queries.small]={width:"100%",height:"100%"},_modal),contentContainer:(_contentContainer={position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",overflow:"hidden",paddingBottom:100/(16/9)+"%"},_contentContainer[_globalStyles2.default.queries.small]={overflow:"visible",width:"100%"},_contentContainer),contentContainerLoaded:{backgroundColor:"black",paddingBottom:0},spinnerContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},navLink:(_navLink={marginRight:24},_navLink[_globalStyles2.default.queries.small]={display:"none"},_navLink),assignmentHeaderWrapper:{position:"fixed",top:0,left:0,right:0,zIndex:_constants2.default.zindexAboveModal},btn:{minWidth:136}})
module.exports=VideoModal

});
KAdefine("javascript/components/modal-package/interaction-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.computeArticleScrollParams=computeArticleScrollParams
var PAGE_SCROLL_REPORTING_CHUNKS=100/6
var defaultParams={percentage:0,scrolled_amount:0}
function computeArticleScrollParams(e,r,a){var t=arguments.length>3&&arguments[3]!==undefined?arguments[3]:defaultParams
var l=(e+r)/a*100
if(l<0){l=0}if(l>100){l=100}var c=Math.ceil(l/PAGE_SCROLL_REPORTING_CHUNKS)
var o=t.percentage
var u=Math.ceil(o/PAGE_SCROLL_REPORTING_CHUNKS)
if(c!==u||l===100&&o<100||l<100&&o===100){return{percentage:l,scrolled_amount:e}}else{return null}}
});
KAdefine("javascript/video-package/constants.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var VideoPlayerState=exports.VideoPlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_CUED:5}

});
KAdefine("javascript/video-package/util.js", function(require, module, exports) {
var _ravenJs=require("raven-js")
var _ravenJs2=babelHelpers.interopRequireDefault(_ravenJs)
var _console=require("../shared-package/console.js")
var _console2=babelHelpers.interopRequireDefault(_console)
var _constants=require("./constants.js")
var _scrollUtils=require("../scroll-utils-package/scroll-utils.js")
var _FULLSCREEN_EVENT_NAMES=["webkitfullscreenchange","mozfullscreenchange","msfullscreenchange","fullscreenchange"]
function addFullscreenChangeHandler(e){_FULLSCREEN_EVENT_NAMES.forEach(function(r){return document.addEventListener(r,e)})}function removeFullscreenChangeHandler(e){_FULLSCREEN_EVENT_NAMES.forEach(function(r){return document.removeEventListener(r,e)})}var exitFullscreen=function(){var e=["exitFullscreen","mozCancelFullScreen","webkitExitFullscreen"].find(function(e){return document[e]})
return e?function(){return document[e]()}:function(){}}()
var linkTimestampsToModel=function(){var e=void 0
var r=function r(n){var t=n.classList.contains("youTube")||n.classList.contains("youTubeLink")
if(!(e&&t)){return}var o=parseInt(n.dataset.seconds)
e.playVideo()
e.seekTo(o)
var a=document.getElementsByClassName("ka-video-player")
if(a.length){(0,_scrollUtils.scrollToElement)(a[0])}}
document.body.addEventListener("click",function(e){var n=e.target
r(n)})
document.body.addEventListener("keyup",function(e){if(e.key==="Enter"){r(e.target)}})
return function r(n){e=n}}()
function isUnstartedOrCued(e){return e===_constants.VideoPlayerState.UNSTARTED||e===_constants.VideoPlayerState.VIDEO_CUED}function isYouTubeBlocked(e){return e.isZeroRated||e.featureFlag("BLOCK_YOUTUBE")}var requireYouTubeAPI=function(){var e={INITIAL:Symbol("INITIAL"),REQUESTED:Symbol("REQUESTED"),FAILED:Symbol("FAILED"),LOADED:Symbol("LOADED")}
var r=window.YT&&window.YT.loaded?e.LOADED:e.INITIAL
var n={success:[],failure:[]}
function t(e){n[e].forEach(function(e){if(typeof e==="function"){e()}})
n[e]=[]}return function o(a,u){switch(r){case e.LOADED:return a()
case e.FAILED:return u()
case e.REQUESTED:break
default:var s=window.setTimeout(function(){r=e.FAILED
t("failure")},5e3)
var l=window.onYouTubeIframeAPIReady
var i=function n(){if(typeof l==="function"){l()}r=e.LOADED
window.clearTimeout(s)
t("success")}
window.onYouTubeIframeAPIReady=i
var c=document.getElementsByTagName("head")[0]
var d=document.createElement("script")
d.src="https://www.youtube.com/iframe_api"
c.insertBefore(d,c.firstChild)
r=e.REQUESTED}n.success.push(a)
n.failure.push(u)
return function e(){n.success=n.success.filter(function(e){return e!==a})
n.failure=n.failure.filter(function(e){return e!==u})}}}()
function logYoutubeError(e,r,n,t){var o={2:"Invalid parameter",5:"Content cannot be played",100:"Video not found",101:"Restricted",150:"Restricted"}
var a=o[n]||"Unknown"
var u="Failed to play Youtube video.  Using Fallback Player."
var s=t.getUserProfile()
var l=s&&s.get("nickname")
_console2.default.log(u,n,a,e,r,l)
if(_ravenJs2.default){_ravenJs2.default.captureMessage(u,{tags:{p1:true},extra:{errorCode:n,reason:a,title:e,youtubeUrl:r,user:l}})}}module.exports={addFullscreenChangeHandler:addFullscreenChangeHandler,exitFullscreen:exitFullscreen,isUnstartedOrCued:isUnstartedOrCued,isYouTubeBlocked:isYouTubeBlocked,linkTimestampsToModel:linkTimestampsToModel,removeFullscreenChangeHandler:removeFullscreenChangeHandler,requireYouTubeAPI:requireYouTubeAPI,logYoutubeError:logYoutubeError}

});
KAdefine("javascript/components/modal-package/error-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksModalV=require("@khanacademy/wonder-blocks-modal-v1")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _absoluteLinks=require("../../shared-package/absolute-links.js")
var _absoluteLinks2=babelHelpers.interopRequireDefault(_absoluteLinks)
var i18n=require("../../shared-package/i18n.js")
var strings={errorTitle:i18n._("Error"),close:i18n._("Close"),refresh:i18n._("refresh"),tellUs:i18n._("tell us"),errorMessage:function e(r,o){return i18n.$_("Uh oh, it looks like we ran into an error. You need to %(refresh)s. If this problem persists, %(tellUs)s.",{refresh:r,tellUs:o})}}
var ErrorModal=function e(r){var o=r.closeModal
var t=function e(){var r=_absoluteLinks2.default.safeLinkTo("https://www.khanacademy.org/reportissue?type=Defect")
var o=React.createElement(_wonderBlocksLinkV2.default,{href:r,skipClientNav:true},strings.tellUs)
var t=React.createElement(_wonderBlocksLinkV2.default,{onClick:function e(){return window.location.reload()},skipClientNav:true},strings.refresh)
return strings.errorMessage(t,o)}
return React.createElement(_wonderBlocksModalV.OneColumnModal,{content:React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.Title,{style:styles.title},strings.errorTitle),React.createElement(_wonderBlocksTypographyV.Body,null,t())),footer:React.createElement(_wonderBlocksButtonV2.default,{onClick:o},strings.close)})}
var styles=_aphrodite.StyleSheet.create({title:{marginBottom:16}})
exports.default=ErrorModal

});
; KAdefine.updatePathToPackageMap({"javascript/exercises-package/components/practice-exercise.jsx": "exercises.js", "javascript/exercises-package/stateful-exercise-manager.jsx": "exercises.js", "javascript/perseus-all-package/perseus.js": "perseus-all.js", "javascript/perseus-merged-extra-widgets-package/extra-widgets.js": "perseus-merged-extra-widgets.js", "javascript/video-package/constants.js": "modal.js", "javascript/video-package/initialize-player-model.js": "video.js", "javascript/video-package/ka-video-wrapper.jsx": "video.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/modal-package.js.map 