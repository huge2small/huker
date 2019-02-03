KAdefine("javascript/components/checkbox-package/checkbox.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var onChangeCheckboxNoop=function e(t){}
var Checkbox=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.checked,r=t.disabled,i=t.appearDisabled,o=t.onChange,l=t.tabIndex,s=t.style,d=t.dataTestId,n=t.id
var c=_globalStyles.colors.gray41
return React.createElement(_hoverBehavior2.default,null,function(e,t){var h=e.focused
return React.createElement("div",babelHelpers.extends({className:(0,_aphrodite.css)(styles.container,h&&styles.focused),style:s},t,{"data-test-id":d,"data-checked":a}),React.createElement("svg",{className:(0,_aphrodite.css)(styles.svg,(r||i)&&styles.disabled),width:sizeWithPadding,height:sizeWithPadding,viewBox:"-"+padding+" -"+padding+"\n                        "+sizeWithPadding+" "+sizeWithPadding},React.createElement("g",{fill:"none",fillRule:"evenodd"},a&&React.createElement("g",null,React.createElement("rect",{fill:c,width:size,height:size,x:"0",y:"0",rx:_globalStyles.borderRadius}),React.createElement("path",{fill:_globalStyles.colors.white,stroke:_globalStyles.colors.white,d:"M4.983 7.413a.576.576 0 1 0-.814.814L6.47 10.53c.225.225.59.225.814 0l4.546-4.546a.576.576 0 0 0-.814-.814L6.878 9.307 4.983 7.413z"})),!a&&React.createElement("rect",{fill:_globalStyles.colors.white,stroke:_globalStyles.colors.gray68,width:size-2*padding,height:size-2*padding,x:padding,y:padding,rx:"4",strokeWidth:borderWidth}))),React.createElement("input",{type:"checkbox",id:n,checked:a,className:(0,_aphrodite.css)(styles.checkbox,r&&styles.defaultCursor),disabled:r,onChange:o,tabIndex:l}))})}
return t}(_react.Component)
Checkbox.defaultProps={checked:false,onChange:onChangeCheckboxNoop}
exports.default=Checkbox
var size=16
var padding=.5
var borderWidth=1
var sizeWithPadding=size+2*padding
var styles=_aphrodite.StyleSheet.create({container:{position:"relative",display:"inline-block",verticalAlign:"middle",lineHeight:0,borderRadius:_globalStyles.borderRadius,width:sizeWithPadding,height:sizeWithPadding,flexShrink:0},focused:{"::before":{content:'""',position:"absolute",top:-2,right:-2,bottom:-2,left:-2,borderRadius:_globalStyles.borderRadius+2,backgroundColor:"lightblue"}},svg:{position:"absolute",left:0,top:0},checkbox:{appearance:"none",opacity:0,position:"absolute",top:padding,width:size,height:size,margin:0,outline:"none",cursor:"pointer"},disabled:{opacity:.5},defaultCursor:{cursor:"default"}})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/checkbox-package.js.map 