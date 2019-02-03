KAdefine("javascript/components/item-list-package/color-block.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var ColorBlock=function e(r){var a=r.color
return React.createElement("div",{className:(0,_aphrodite.css)(styles.colorBlock),style:{backgroundColor:a}})}
var styles=_aphrodite.StyleSheet.create({colorBlock:{display:"block",width:24,height:24,borderRadius:_globalStyles.borderRadius/2,marginRight:16}})
exports.default=ColorBlock

});
KAdefine("javascript/components/item-list-package/item.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _colorBlock=require("./color-block.jsx")
var _colorBlock2=babelHelpers.interopRequireDefault(_colorBlock)
var Item=function e(a){var l=a.children,r=a.color,o=a.actionLabel,t=a.actionEnabled,i=a.handleActionClick
return React.createElement("div",{className:(0,_aphrodite.css)(styles.item)},r&&React.createElement(_colorBlock2.default,{color:r}),React.createElement("span",{className:(0,_aphrodite.css)(styles.childrenContainer)},l),React.createElement("button",{className:(0,_aphrodite.css)(styles.action),onClick:i,disabled:!t},o))}
var fadeIn={from:{opacity:0},to:{opacity:1}}
var ITEM_HEIGHT=40
var ITEM_PADDING=20
var styles=_aphrodite.StyleSheet.create({item:{display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:ITEM_PADDING,paddingRight:ITEM_PADDING,height:ITEM_HEIGHT,lineHeight:ITEM_HEIGHT,background:_globalStyles.colors.white,border:"1px solid "+_globalStyles.colors.gray85,borderRadius:_globalStyles.borderRadius,animationName:fadeIn,animationDuration:"1000ms"},childrenContainer:{display:"inline-block",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:15},action:babelHelpers.extends({},_globalStyles.typography.bodyXsmallBold,{border:"none",background:"transparent",color:_globalStyles.colors.kaGreen,outline:"none",cursor:"pointer",":disabled":{color:_globalStyles.colors.gray85}})})
exports.default=Item

});
KAdefine("javascript/components/item-list-package/input-item.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _item=require("./item.jsx")
var _item2=babelHelpers.interopRequireDefault(_item)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var i18n=require("../../shared-package/i18n.js")
var InputItem=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),l=0;l<s;l++){i[l]=arguments[l]}return n=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={value:r.props.defaultValue||""},r.componentDidMount=function(){var e=r.input
if(e&&r.props.autoFocus){if(e.focus){e.focus()}}},r.componentDidUpdate=function(e){if(e.status!=="finished"&&r.props.status==="finished"){r.setState({value:""})}},r.input=null,r.ableToSubmit=function(){return!r.props.submitDisabled&&r.state.value.length>=r.props.minCharacterLength},r.updateValue=function(e){var t=e.target
if("value"in t){r.setState({value:t.value})
if(r.props.onChange){r.props.onChange(t.value)}}},r.handleKeyDown=function(e){var t=e.keyCode===13
if(t&&r.ableToSubmit()){r.submitValue()}},r.submitValue=function(){r.props.onAddItem(r.state.value)},a),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.render=function e(){var t=this
var a=this.state.value
var r=this.props,n=r.placeholder,s=r.includeColorPlaceholder,i=r.status
var l=s?_globalStyles.colors.gray85:undefined
var o=i!=="inProgress"?i18n._("Add"):React.createElement("div",{className:(0,_aphrodite.css)(styles.spinner)},React.createElement(_spinner2.default,{inline:true,size:"xsmall"}))
return React.createElement(_item2.default,{color:l,actionLabel:o,actionEnabled:this.ableToSubmit(),handleActionClick:this.submitValue},React.createElement("input",{ref:function e(a){return t.input=a},type:"text",className:(0,_aphrodite.css)(styles.input),value:a,onChange:this.updateValue,onKeyDown:this.handleKeyDown,placeholder:n,disabled:i==="inProgress"}))}
return t}(_react.Component)
InputItem.defaultProps={status:"ready",minCharacterLength:1}
var styles=_aphrodite.StyleSheet.create({input:{height:24,width:"100%",fontSize:15,border:"none",outline:"none","::placeholder":{color:_globalStyles.colors.gray85}},spinner:{paddingTop:8}})
exports.default=InputItem

});
KAdefine("javascript/components/item-list-package/input-item-with-title.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _inputItem=require("./input-item.jsx")
var _inputItem2=babelHelpers.interopRequireDefault(_inputItem)
var InputItemWithTitle=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.title,l=babelHelpers.objectWithoutProperties(t,["title"])
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.title)},r),React.createElement(_inputItem2.default,l))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({title:babelHelpers.extends({},_globalStyles.typography.bodyXsmallBold,{color:_globalStyles.colors.gray17,marginBottom:4,marginTop:16})})
exports.default=InputItemWithTitle

});
KAdefine("javascript/components/item-list-package/item-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _item=require("./item.jsx")
var _item2=babelHelpers.interopRequireDefault(_item)
var i18n=require("../../shared-package/i18n.js")
var ItemList=function e(t){var r=t.items,a=t.onRemoveItem
return React.createElement("span",null,r.map(function(e){return React.createElement("div",{key:e.id,className:(0,_aphrodite.css)(styles.itemWrapper)},React.createElement(_item2.default,babelHelpers.extends({},e,{actionLabel:i18n._("Remove"),actionEnabled:true,handleActionClick:function t(){return a(e.id)}})))}))}
var styles=_aphrodite.StyleSheet.create({itemWrapper:{marginBottom:8}})
exports.default=ItemList

});
KAdefine("javascript/components/item-list-package/types.js", function(require, module, exports) {

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/item-list-package.js.map 