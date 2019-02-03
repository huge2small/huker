KAdefine("javascript/components/button-toggle-package/button-toggle.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _waypointMarker=require("../../demo-class-package/components/waypoint-marker.jsx")
var _waypointMarker2=babelHelpers.interopRequireDefault(_waypointMarker)
var ButtonToggle=function(e){babelHelpers.inherits(o,e)
function o(){babelHelpers.classCallCheck(this,o)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}o.prototype.render=function e(){var o=this.props,r=o.selected,l=o.options,t=o.onToggle
return React.createElement("div",{className:(0,_aphrodite.css)(styles.buttonToggleContainer)},l.map(function(e){var o=e.value===r
return React.createElement(_waypointMarker2.default,{name:"button-toggle",matchProps:{option:e},key:e.value},function(){return React.createElement("button",{className:(0,_aphrodite.css)(styles.button,theme.button,o&&styles.selected,o&&theme.selected),disabled:e.value===r,onClick:function o(r){return t(e.value)},"data-test-id":"button-toggle-"+e.value},e.label)})}))}
return o}(React.Component)
var inputHeight=40
var theme=_aphrodite.StyleSheet.create({button:{fontSize:14,fontWeight:"normal",padding:"0 12px",backgroundColor:_globalStyles2.default.colors.white,borderColor:_globalStyles2.default.colors.gray85,color:_globalStyles2.default.colors.gray17,":first-child":{borderLeftColor:_globalStyles2.default.colors.gray85},":last-child":{borderRightColor:_globalStyles2.default.colors.gray85},":hover":{backgroundColor:_wonderBlocksColorV2.default.darkBlue,borderColor:_wonderBlocksColorV2.default.darkBlue,color:_globalStyles2.default.colors.white}},selected:{backgroundColor:_wonderBlocksColorV2.default.blue,borderColor:_wonderBlocksColorV2.default.blue,color:_globalStyles2.default.colors.white,":first-child":{borderLeftColor:_wonderBlocksColorV2.default.darkBlue},":last-child":{borderRightColor:_wonderBlocksColorV2.default.darkBlue},":hover":{cursor:"default",backgroundColor:_wonderBlocksColorV2.default.blue,color:_globalStyles2.default.colors.white}}})
var styles=_aphrodite.StyleSheet.create({buttonToggleContainer:{display:"flex",flexDirection:"row",height:inputHeight},button:babelHelpers.extends({},_globalStyles2.default.commonButtonStyle,{flexGrow:1,textAlign:"center",fontSize:15,fontWeight:600,padding:0,margin:0,borderWidth:"1px",borderStyle:"solid",borderRadius:0,cursor:"pointer",borderLeft:"none",borderRight:"none",":first-child":{borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px",borderLeftWidth:"1px",borderLeftStyle:"solid",borderRight:"none"},":last-child":{borderRadius:"0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0",borderLeft:"none",borderRightWidth:"1px",borderRightStyle:"solid"},":focus":{position:"relative"}}),selected:{":first-child":{borderLeft:"none"},":last-child":{borderRight:"none"}}})
exports.default=ButtonToggle

});
KAdefine("javascript/components/button-toggle-package/deprecated-button-toggle.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var DeprecatedButtonToggle=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,l=r.selected,o=r.options,t=r.onToggle
return React.createElement("div",{className:(0,_aphrodite.css)(styles.buttonToggleContainer)},o.map(function(e){var r=e.value===l
return React.createElement("button",{key:e.value,className:(0,_aphrodite.css)(styles.button,theme.button,r&&styles.selected,r&&theme.selected),onClick:function r(l){return t(e.value)}},e.label)}))}
return r}(React.Component)
var inputHeight=40
var theme=_aphrodite.StyleSheet.create({button:{backgroundColor:_globalStyles2.default.colors.white,borderColor:_globalStyles2.default.colors.gray85,color:_globalStyles2.default.colors.kaGreen,":first-child":{borderLeftColor:_globalStyles2.default.colors.gray85},":last-child":{borderRightColor:_globalStyles2.default.colors.gray85},":hover":{backgroundColor:_globalStyles2.default.colors.kaGreen,borderColor:_globalStyles2.default.colors.kaGreen,color:_globalStyles2.default.colors.white}},selected:{backgroundColor:_globalStyles2.default.colors.kaGreenHover,borderColor:_globalStyles2.default.colors.kaGreenHover,color:_globalStyles2.default.colors.white,":first-child":{borderLeftColor:_globalStyles2.default.colors.kaGreenHover},":last-child":{borderRightColor:_globalStyles2.default.colors.kaGreenHover},":hover":{color:_globalStyles2.default.colors.white}}})
var styles=_aphrodite.StyleSheet.create({buttonToggleContainer:{display:"flex",flexDirection:"row",marginTop:4,marginBottom:18,height:inputHeight},button:{flexGrow:1,textAlign:"center",fontSize:15,fontWeight:600,padding:0,margin:0,borderWidth:"1px",borderStyle:"solid",cursor:"pointer",borderLeft:"none",borderRight:"none",":first-child":{borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px",borderLeftWidth:"1px",borderLeftStyle:"solid",borderRight:"none"},":last-child":{borderRadius:"0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0",borderLeft:"none",borderRightWidth:"1px",borderRightStyle:"solid"},":focus":{position:"relative"}},selected:{":first-child":{borderLeft:"none"},":last-child":{borderRight:"none"}}})
exports.default=DeprecatedButtonToggle

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/button-toggle-package.js.map 