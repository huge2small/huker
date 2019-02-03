KAdefine("javascript/class-picker-package/class-picker.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_rule,_labelLayout,_domainText,_coachContainer,_coachGroup
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _checkbox=require("../components/checkbox-package/checkbox.jsx")
var _checkbox2=babelHelpers.interopRequireDefault(_checkbox)
var _color=require("../shared-styles-package/color.js")
var _color2=babelHelpers.interopRequireDefault(_color)
var _tooltip=require("../components/tooltip-package/tooltip.jsx")
var _tooltip2=babelHelpers.interopRequireDefault(_tooltip)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var i18n=require("../shared-package/i18n.js")
var SHARED_STYLES={tooltipColor:_color2.default.format(_color2.default.fade(_color2.default.parse(_globalStyles.colors.gray17),.9))}
var ClassPicker=function(e){babelHelpers.inherits(t,e)
function t(){var a,l,r
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return r=(a=(l=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),l),l.state={expansions:{},tooltipSubjectId:null},l.handleExpansion=function(e){var t
l.setState({expansions:babelHelpers.extends({},l.state.expansions,(t={},t[e]=!l.state.expansions[e],t))})},l.renderCheckbox=function(e,t,a){var r=l.props,o=r.modalBody,s=r.onChange
var i=l.state.tooltipSubjectId===e.id
var n=React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipContents)},i18n._("Alas! We can’t track more than 9 courses for you yet."))
var c=function e(){if(l.setState&&l.state.tooltipSubjectId){l.setState({tooltipSubjectId:null})}}
return a&&i?React.createElement(_tooltip2.default,{showOnMount:true,inverted:true,offset:12,horizontalAlignment:"left",onTopOfModal:true,content:n,key:e.id,color:SHARED_STYLES.tooltipColor,dismissOnScroll:true,autoDismissTimeout:3e3,modalBody:o,onDismiss:c},React.createElement(_checkbox2.default,{appearDisabled:true,dataTestId:e.id,style:{marginTop:-2}})):React.createElement(_checkbox2.default,{checked:t,appearDisabled:a,onChange:a?undefined:function(){return s(e)},dataTestId:e.id,style:{marginTop:2}})},l.renderSubject=function(e,t,a,r){var o=l.props,s=o.isForCoach,i=o.selectedClasses
var n=function e(t,a){return"class-picker-item-"+t+"-"+a}
var c=i[e.id]
var d=Object.values(i).filter(function(e){return e}).length
var u=!s&&!c&&d>=9
var p=u?function(){if(l.state.tooltipSubjectId!==e.id){l.setState({tooltipSubjectId:e.id})}}:null
return React.createElement("label",{key:e.id,className:(0,_aphrodite.css)(styles.labelAppearance,styles.labelLayout),style:{color:(0,_globalStyles.domainColors)(a.slug).domain3},"data-test-id":n(r,t),onClick:p},l.renderCheckbox(e,c,u),React.createElement(_strut2.default,{size:10}),e.title)},a),babelHelpers.possibleConstructorReturn(l,r)}t.prototype.render=function e(){var t=this
var a=this.props,l=a.domains,r=a.selectedClasses,o=a.selectedGradeLevelId,s=a.classesInLevel,i=a.isForCoach,n=a.showInModal
var c=this.state.expansions
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container,!n&&styles.pageContainer,i&&styles.coachContainer)},l.map(function(e,a){var l=[]
if(i||!s.length||o==="other"){l=e.subjects}else{l=e.subjects.filter(function(e){return s.includes(e.id)||r[e.id]})}var d=c[e.slug]?e.subjects:l
var u=l.length<e.subjects.length
var p=React.createElement("div",{className:(0,_aphrodite.css)(styles.showAll),onClick:function a(){return t.handleExpansion(e.slug)},style:{color:(0,_globalStyles.domainColors)(e.slug).domain3}},c[e.slug]?i18n._("See fewer"):i18n._("See all (%(num)s)",{num:e.subjects.length}))
return React.createElement("div",{key:a,className:(0,_aphrodite.css)(styles.group,i&&styles.coachGroup,!n&&styles.fullScreenGroup)},React.createElement("div",{className:(0,_aphrodite.css)(styles.header)},React.createElement("div",{className:(0,_aphrodite.css)(styles.domainText),style:{color:(0,_globalStyles.domainColors)(e.slug).domain3}},e.title),u&&p),React.createElement(_strut2.default,{size:8}),React.createElement("div",{className:(0,_aphrodite.css)(styles.rule)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.list,i&&styles.coachList)},d.map(function(l,r){return t.renderSubject(l,r,e,a)}),d.length%3===2&&React.createElement("div",{className:(0,_aphrodite.css)(styles.labelLayout)}),d.length===0&&React.createElement("div",{className:(0,_aphrodite.css)(styles.noSubjects)},i18n._("No courses match your grade."),React.createElement("div",{className:(0,_aphrodite.css)(styles.showButtonContainer)},p))))}))}
return t}(_react.Component)
ClassPicker.defaultProps={showInModal:true}
exports.default=ClassPicker
var styles=_aphrodite.StyleSheet.create({container:(_container={width:768,boxSizing:"border-box",padding:"24px 32px 0 32px",display:"flex",flexDirection:"column",backgroundColor:_globalStyles.colors.white},_container[_globalStyles.queries.small]={minWidth:0,width:"100%",padding:"24px 16px 0 16px"},_container),pageContainer:{maxWidth:_globalStyles.pageWidth,width:"100%",boxSizing:"border-box",padding:24,display:"flex",flexDirection:"column",backgroundColor:_globalStyles.colors.white,justifyContent:"space-between"},group:{display:"flex",flexDirection:"column"},list:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",paddingBottom:32},header:babelHelpers.extends({},_globalStyles.typography.smallHeading,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),rule:(_rule={borderTop:"solid 1px "+_globalStyles.colors.gray68},_rule[_globalStyles.queries.small]={display:"none"},_rule),labelAppearance:babelHelpers.extends({},_globalStyles.typography.bodySmall,{lineHeight:"normal",display:"flex",flexDirection:"row",alignItems:"start",userSelect:"none"}),labelLayout:(_labelLayout={width:224,marginTop:8},_labelLayout[_globalStyles.queries.small]={flexGrow:1,color:_globalStyles.colors.gray17},_labelLayout),tooltipContents:{maxWidth:200},noSubjects:babelHelpers.extends({},_globalStyles.typography.bodySmall,{lineHeight:"23px",height:23,marginTop:8,color:_globalStyles.colors.gray41,display:"flex"}),showButtonContainer:{marginLeft:4},showAll:babelHelpers.extends({},_globalStyles.typography.bodySmall,{cursor:"pointer",userSelect:"none"}),domainText:(_domainText={},_domainText[_mediaQueries2.default.mdOrLarger]={color:_globalStyles.colors.gray17},_domainText),coachContainer:(_coachContainer={flexDirection:"row",flexWrap:"wrap"},_coachContainer[_mediaQueries2.default.smOrSmaller]={padding:0},_coachContainer),coachGroup:(_coachGroup={width:"30%",marginLeft:10,marginRight:10},_coachGroup[_mediaQueries2.default.smOrSmaller]={width:"100%"},_coachGroup),fullScreenGroup:{width:"18%",marginLeft:10,marginRight:10},coachList:{paddingBottom:24}})

});
KAdefine("javascript/class-picker-package/grade-picker.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_column,_rule
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _radio=require("../components/radio-package/radio.jsx")
var _radio2=babelHelpers.interopRequireDefault(_radio)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var GradePicker=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.gradeLevelGroups,a=t.onChange,l=t.selectedGradeLevel
var s=function e(t,r){return"grade-picker-item-"+t+"-"+r}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},r.map(function(e,t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.column),key:t},React.createElement("div",{className:(0,_aphrodite.css)(styles.header)},e.title),React.createElement(_strut2.default,{size:8}),React.createElement("div",{className:(0,_aphrodite.css)(styles.rule)}),e.levels.map(function(e,r){return React.createElement("label",{className:(0,_aphrodite.css)(styles.labelAppearance,styles.labelLayout),key:e.id,"data-test-id":s(t,r)},React.createElement(_radio2.default,{checked:e.id===(l&&l.id),onChange:function(e){function t(){return e.apply(this,arguments)}t.toString=function(){return e.toString()}
return t}(function(){return a(e)}),style:{marginTop:2}}),React.createElement(_strut2.default,{size:8}),e.title)}))}),r.length%3===2&&React.createElement("div",{className:(0,_aphrodite.css)(styles.column)}))}
return t}(_react.Component)
exports.default=GradePicker
var styles=_aphrodite.StyleSheet.create({container:(_container={width:768,padding:"24px 32px 0 32px",display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",boxSizing:"border-box",backgroundColor:"white"},_container[_globalStyles.queries.small]={minWidth:0,width:"100%",padding:"24px 16px 0 16px"},_container),column:(_column={display:"flex",flexDirection:"column",width:224,paddingBottom:32},_column[_globalStyles.queries.small]={flexGrow:1},_column),header:babelHelpers.extends({},_globalStyles.typography.smallHeading),rule:(_rule={borderTop:"solid 1px "+_globalStyles.colors.gray68},_rule[_globalStyles.queries.small]={display:"none"},_rule),labelAppearance:babelHelpers.extends({},_globalStyles.typography.bodySmall,{lineHeight:"normal",display:"flex",flexDirection:"row",alignItems:"start",userSelect:"none"}),labelLayout:{marginTop:8}})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/class-picker-package.js.map 