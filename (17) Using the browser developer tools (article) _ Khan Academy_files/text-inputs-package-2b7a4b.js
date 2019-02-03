KAdefine("javascript/components/text-inputs-package/search-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _textField=require("./text-field.jsx")
var _textField2=babelHelpers.interopRequireDefault(_textField)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var searchIcon="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,\n    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,\n    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,\n    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,\n    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,\n    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,\n    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,\n    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283\n    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,\n    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1\n    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,\n    7.5 L4.25,7.5 Z"
var SearchField=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=React.createElement(_icon2.default,{icon:searchIcon,size:20,color:_globalStyles2.default.colors.gray68})
return React.createElement(_textField2.default,babelHelpers.extends({icon:r},this.props))}
return r}(_react.Component)
SearchField.defaultProps={backgroundColor:_globalStyles2.default.colors.gray97,leftSideIcon:false}
exports.default=SearchField

});
KAdefine("javascript/components/text-inputs-package/text-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var TextField=function(e){babelHelpers.inherits(t,e)
function t(){var r,l,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),n=0;n<o;n++){s[n]=arguments[n]}return a=(r=(l=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),l),l.state={focused:false},l.handleBlur=function(e){var t=l.props.onBlur
t&&t(e)
l.setState({focused:false})},l.handleFocus=function(e){var t=l.props.onFocus
t&&t(e)
l.setState({focused:true})},l.disableDefault=function(e){e.preventDefault()},l.focus=function(){l.input&&l.input.focus()},r),babelHelpers.possibleConstructorReturn(l,a)}t.prototype.render=function e(){var t=this
var r=this.props,l=r.width,a=r.grow,o=r.shrink,s=r.icon,n=r.backgroundColor,i=r.focusBorderColor,u=r.onSubmit,c=r.leftSideIcon,d=r.inputId,p=r.testId,b=r.type,f=babelHelpers.objectWithoutProperties(r,["width","grow","shrink","icon","backgroundColor","focusBorderColor","onSubmit","leftSideIcon","inputId","testId","type"])
var h=this.state.focused
var y={}
var g=[styles.input,styles.container]
if(l){y.width=l}if(a){y.flexGrow=a===true?1:a}if(o||o===0){y.flexShrink=o===true?0:o}if(n){y.backgroundColor=n}else{g.push(styles.defaultBackground)}var v=h?i||_globalStyles2.default.colors.kaGreen:_globalStyles2.default.colors.gray85
y.border="1px solid "+v
var S=s&&React.createElement("span",{className:(0,_aphrodite.css)(styles.icon)},s)
return React.createElement("form",{className:(0,_aphrodite.css)(g),style:y,onSubmit:u||this.disableDefault},c&&S,React.createElement("input",babelHelpers.extends({},f,{onFocus:this.handleFocus,onBlur:this.handleBlur,type:b,className:(0,_aphrodite.css)(styles.inputBase),ref:function e(r){return t.input=r},id:d,"data-test-id":p})),!c&&S)}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({inputBase:babelHelpers.extends({background:"inherit",border:"none"},_globalStyles2.default.typography.bodyXsmall,{outline:"none","::placeholder":{color:_globalStyles2.default.colors.gray41},width:"100%"}),input:{height:40,borderRadius:_globalStyles2.default.borderRadius,boxSizing:"border-box",padding:"8px 10px"},container:{display:"inline-flex",alignItems:"center"},defaultBackground:{backgroundColor:_globalStyles2.default.colors.white},icon:{display:"flex",alignItems:"center",justifyContent:"center"}})
exports.default=TextField

});
KAdefine("javascript/components/text-inputs-package/time-text-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _moment=require("moment")
var _moment2=babelHelpers.interopRequireDefault(_moment)
var _textField=require("./text-field.jsx")
var _textField2=babelHelpers.interopRequireDefault(_textField)
var TimeTextField=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,a
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,l=Array(i),o=0;o<i;o++){l[o]=arguments[o]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),n),n.state={isEditing:false,currentValue:""},n.handleInputChange=function(e){n.setState({currentValue:e.target.value,isEditing:true})},n.handleKeyDown=function(e){if(e.which===13){e.preventDefault()
n.processInput()}},n.handleOnBlur=function(){n.processInput()},r),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.UNSAFE_componentWillMount=function e(){this.setState({currentValue:this.props.value||""})}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){this.setState({currentValue:t.value||""})}
t.prototype.componentWillUnmount=function e(){if(this.props.value!==this.state.currentValue){this.processInput()}}
t.prototype.processInput=function e(){var t=this.props,r=t.onChange,n=t.value
var a=this.state,i=a.currentValue,l=a.isEditing
if(!l){return}var o=""
if(i){try{var s=(0,_moment2.default)(i,"HH:mm a")
if(s.isValid()){o=s.format("h:mm a")}else{throw new Error("invalid time value: "+i)}}catch(e){o=n||""}}if(o!==n&&r){r(o)}this.setState({currentValue:o,isEditing:false})}
t.prototype.render=function e(){var t=this.state.currentValue
return React.createElement(_textField2.default,babelHelpers.extends({},this.props,{value:t,onChange:this.handleInputChange,onKeyDown:this.handleKeyDown,onBlur:this.handleOnBlur}))}
return t}(_react.Component)
exports.default=TimeTextField

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/text-inputs-package.js.map 