KAdefine("javascript/components/radio-package/radio.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.RADIO_SIZE_WITH_PADDING=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var Radio=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.checked,r=t.forceTabStop,i=t.disabled,o=t.groupName,s=t.id,l=t.onChange,n=t.dataTestId,d=t.style
var c=_globalStyles.colors.gray41
var p=a||r
return React.createElement(_hoverBehavior2.default,null,function(e,t){var r=e.focused
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container,r&&styles.focused),style:d,"data-test-id":n},React.createElement("svg",{className:(0,_aphrodite.css)(styles.svg,i&&styles.disabled),width:RADIO_SIZE_WITH_PADDING,height:RADIO_SIZE_WITH_PADDING,viewBox:"-"+padding+" -"+padding+"\n                        "+RADIO_SIZE_WITH_PADDING+" "+RADIO_SIZE_WITH_PADDING},React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("circle",{cx:size/2,cy:size/2,r:outerRadius,fill:_globalStyles.colors.white,stroke:_globalStyles.colors.gray68,strokeWidth:borderWidth}),a&&React.createElement("circle",{cx:size/2,cy:size/2,r:innerRadius,fill:c}))),React.createElement("input",babelHelpers.extends({id:s,type:"radio",className:(0,_aphrodite.css)(styles.radio),disabled:i,onChange:l,name:o,"aria-checked":a},t,{tabIndex:p?0:-1})))})}
return t}(_react.Component)
exports.default=Radio
var size=16
var padding=.5
var outerRadius=size/2-padding
var innerRadius=4.8
var borderWidth=1
var RADIO_SIZE_WITH_PADDING=exports.RADIO_SIZE_WITH_PADDING=size+2*padding
var styles=_aphrodite.StyleSheet.create({container:{position:"relative",display:"inline-block",verticalAlign:"top",lineHeight:0,borderRadius:_globalStyles.borderRadius,width:RADIO_SIZE_WITH_PADDING,height:RADIO_SIZE_WITH_PADDING,flexShrink:0},focused:{"::before":{content:'""',position:"absolute",top:-2,right:-2,bottom:-2,left:-2,borderRadius:"50%",backgroundColor:"lightblue"}},svg:{position:"absolute",left:0,top:0},radio:{appearance:"none",opacity:0,position:"absolute",left:padding,top:padding,width:size,height:size,margin:0,outline:"none"},disabled:{opacity:.5}})

});
KAdefine("javascript/components/radio-package/radio-panel-group.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.RadioPanel=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactAddonsCssTransitionGroup=require("react-addons-css-transition-group")
var _reactAddonsCssTransitionGroup2=babelHelpers.interopRequireDefault(_reactAddonsCssTransitionGroup)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _radio=require("./radio.jsx")
var _radio2=babelHelpers.interopRequireDefault(_radio)
var LABEL_PADDING=8
var RadioPanel=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props.children
return React.createElement(_wonderBlocksCoreV.View,{style:styles.leftAlign},typeof t==="function"?t():t)}
return t}(_react.Component)
RadioPanel.defaultProps={children:function e(){return null}}
var RadioPanelGroup=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
a.state={currentIndex:r.initialIndex!==undefined?r.initialIndex:0}
return a}t.prototype.render=function e(){var t=this
var r=this.props,a=r.children,n=a===undefined?[]:a,l=r.groupName
var i=this.state.currentIndex
var s=function e(t){return t}
var o=React.Children.toArray(n).filter(s)
return React.createElement("div",null,o.map(function(e,r){return e&&React.createElement("div",{role:"radiogroup",key:r},React.createElement("label",{className:(0,_aphrodite.css)(styles.label),onClick:function e(){return t.setState({currentIndex:r})},"data-test-id":e.props.testId},React.createElement("span",{className:(0,_aphrodite.css)(styles.radio)},React.createElement(_radio2.default,{groupName:l,checked:i===r,onChange:e.props.onSelect})),e.props.title),React.createElement(_reactAddonsCssTransitionGroup2.default,{transitionName:{enter:(0,_aphrodite.css)(styles.panelEnter),enterActive:(0,_aphrodite.css)(styles.panelEnterActive),leave:(0,_aphrodite.css)(styles.panelLeave),leaveActive:(0,_aphrodite.css)(styles.panelLeaveActive)},transitionEnterTimeout:200,transitionLeaveTimeout:200},i===r&&e))}))}
return t}(_react.Component)
RadioPanelGroup.defaultProps={children:[]}
var styles=_aphrodite.StyleSheet.create({label:babelHelpers.extends({},_globalStyles2.default.typography.smallHeading,{display:"flex",paddingTop:4,paddingBottom:4,cursor:"pointer"}),leftAlign:{paddingLeft:_radio.RADIO_SIZE_WITH_PADDING+LABEL_PADDING},radio:{display:"inline-flex",alignItems:"center",paddingRight:LABEL_PADDING},panelEnter:{maxHeight:0,overflow:"hidden"},panelEnterActive:{height:"auto",maxHeight:200,transition:_globalStyles2.default.standardTransition},panelLeave:{maxHeight:200},panelLeaveActive:{overflow:"hidden",maxHeight:0,transition:_globalStyles2.default.standardTransition}})
exports.RadioPanel=RadioPanel
exports.default=RadioPanelGroup

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/radio-package.js.map 