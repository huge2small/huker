KAdefine("javascript/mastery-package/end-of-exercise-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _content
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _exerciseSummary=require("./exercise-summary.jsx")
var _exerciseSummary2=babelHelpers.interopRequireDefault(_exerciseSummary)
var _getEndOfExerciseCopy2=require("./get-end-of-exercise-copy.js")
var _getEndOfExerciseCopy3=babelHelpers.interopRequireDefault(_getEndOfExerciseCopy2)
exports.default=function(e){var r=e.from,t=e.to,a=e.questionCount
var o=(0,_getEndOfExerciseCopy3.default)(r,t),l=o.title,c=o.subtitle
return React.createElement(_wonderBlocksCoreV.View,{style:styles.container,"data-test-id":"exercise-task-card-do-n"},React.createElement(_wonderBlocksCoreV.View,{style:styles.card},React.createElement(_wonderBlocksCoreV.View,{style:styles.content},React.createElement(_wonderBlocksTypographyV.Title,{style:styles.title},l),React.createElement(_wonderBlocksTypographyV.Tagline,{style:styles.subtitle},React.createElement(_reactBalanceText2.default,null,c)),React.createElement(_exerciseSummary2.default,{level:t,questionCount:a}))))}
var styles=_aphrodite.StyleSheet.create({container:{backgroundColor:_wonderBlocksColorV2.default.darkBlue,color:_wonderBlocksColorV2.default.white,flexGrow:1,overflow:"auto"},card:{color:_wonderBlocksColorV2.default.white,display:"block",margin:"auto"},content:(_content={maxWidth:400,justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"},_content[_mediaQueries2.default.smOrLarger]={maxWidth:320},_content),title:{marginBottom:9},subtitle:{marginBottom:30}})

});
KAdefine("javascript/mastery-package/end-of-exercise-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _footer,_info
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var strings={tryAgain:i18n._("Try again"),nextExercise:i18n._("Next exercise"),nextQuiz:i18n._("Next quiz"),takeUnitTest:i18n._("Start unit test"),continueLabel:i18n._("Continue"),closeLabel:i18n._("Close"),collectedEnergyPoints:function e(t){return i18n.$_("Also collected %(energyPoints)s energy points for effort",{energyPoints:t})}}
var EndOfExerciseFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.getNextButtonLabel=function e(){var t=this.props.nextItem
if(!t){return strings.closeLabel}if(t.kind==="Exercise"){return strings.nextExercise}else if(t.kind==="InterspersedQuiz"){if(t.type==="quiz"){return strings.nextQuiz}else{return strings.takeUnitTest}}else{return strings.continueLabel}}
t.prototype.getButtons=function e(){var t=this.props,r=t.level,n=t.onTryAgain,o=t.onClose
var s=_masteryUtils.constants.PROFICIENT===r
var i=[_masteryUtils.constants.UNFAMILIAR,_masteryUtils.constants.FAMILIAR].includes(r)
if(i){return[React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:o},strings.closeLabel),React.createElement(_wonderBlocksButtonV2.default,{style:styles.button,onClick:n},strings.tryAgain)]}else if(s){return[React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:n},strings.tryAgain),React.createElement(_wonderBlocksButtonV2.default,{style:styles.button,onClick:o},strings.closeLabel)]}else{return[React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:n},strings.tryAgain),React.createElement(_wonderBlocksButtonV2.default,{width:styles.button,onClick:o},strings.closeLabel)]}}
t.prototype.render=function e(){var t=this.getButtons(),r=t[0],n=t[1]
var o=this.props.pointsEarned
return React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},React.createElement(_wonderBlocksCoreV.View,{style:styles.info},strings.collectedEnergyPoints(o)),React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},r,React.createElement(_wonderBlocksCoreV.View,{style:styles.verticalSeparator}),n))}
return t}(React.Component)
exports.default=EndOfExerciseFooter
var styles=_aphrodite.StyleSheet.create({footer:(_footer={flexGrow:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16},_footer[_mediaQueries2.default.smOrSmaller]={justifyContent:"flex-end"},_footer),buttonGroup:{flexDirection:"row",alignItems:"center"},verticalSeparator:{width:1,marginLeft:20,marginRight:20,backgroundColor:_wonderBlocksColorV2.default.offBlack16,height:40},info:(_info={color:_wonderBlocksColorV2.default.offBlack50},_info[_mediaQueries2.default.smOrSmaller]={display:"none"},_info),button:{minWidth:144}})

});
KAdefine("javascript/mastery-package/get-end-of-exercise-copy.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var ATTEMPTED=(0,_masteryUtils.getMasteryDisplay)(_masteryUtils.constants.ATTEMPTED)
var FAMILIAR=(0,_masteryUtils.getMasteryDisplay)(_masteryUtils.constants.FAMILIAR)
var PROFICIENT=(0,_masteryUtils.getMasteryDisplay)(_masteryUtils.constants.PROFICIENT)
var MASTERED=(0,_masteryUtils.getMasteryDisplay)(_masteryUtils.constants.MASTERED)
var skillLeveledDown=i18n._("Skill leveled down")
var skillLeveledUp=i18n._("Skill leveled up!")
var levelUpToFamiliar={title:function t(){return skillLeveledUp},subtitle:function t(){return i18n._("You leveled up to %(to)s and collected 50 Mastery points. Get all the questions correct to level up to %(from)s.",{to:FAMILIAR,from:PROFICIENT})}}
var levelUpToProficient={title:function t(){return skillLeveledUp},subtitle:function t(){return i18n._("You leveled up to %(to)s and collected 80 Mastery points",{to:PROFICIENT})}}
var tryAgain={title:function t(){return i18n._("Try again to level up")},subtitle:function t(){return i18n._("You didn't get enough questions correct to level up. Practice these skills again or watch a recommended video to learn more.")}}
var copyMap=Object.freeze({unfamiliar:{attempted:tryAgain,familiar:levelUpToFamiliar,proficient:levelUpToProficient},attempted:{attempted:tryAgain,familiar:levelUpToFamiliar,proficient:levelUpToProficient},familiar:{attempted:{title:function t(){return skillLeveledDown},subtitle:function t(e,l){var i=_masteryUtils.levelPointsMap[e]-_masteryUtils.levelPointsMap[l]
return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Practice again to level this skill back up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Practice again to level this skill back up to %(from)s.",i,{to:ATTEMPTED,from:FAMILIAR})}},familiar:tryAgain,proficient:{title:function t(){return skillLeveledUp},subtitle:function t(){return i18n._("You leveled up to %(to)s and collected 80 Mastery points",{to:PROFICIENT})}}},proficient:{familiar:{title:function t(){return skillLeveledDown},subtitle:function t(e,l){var i=_masteryUtils.levelPointsMap[e]-_masteryUtils.levelPointsMap[l]
return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Practice again to level this skill back up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Practice again to level this skill back up to %(from)s.",i,{to:FAMILIAR,from:PROFICIENT})}},proficient:{title:function t(){return i18n._("You are already proficient at this skill")},subtitle:function t(){return i18n._("You didnʼt get any mastery points because you were already %(from)s in this skill. Take the Unit Test to level up to %(to)s.",{from:PROFICIENT,to:MASTERED})}}},mastered:{familiar:{title:function t(){return skillLeveledDown},subtitle:function t(e,l){var i=_masteryUtils.levelPointsMap[e]-_masteryUtils.levelPointsMap[l]
return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Practice again to level this skill up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Practice again to level this skill up to %(from)s.",i,{to:FAMILIAR,from:PROFICIENT})}},proficient:{title:function t(){return skillLeveledDown},subtitle:function t(e,l){var i=_masteryUtils.levelPointsMap[e]-_masteryUtils.levelPointsMap[l]
return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Take the Unit Test to level this skill back up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Take the Unit Test to level this skill back up to %(from)s.",i,{to:PROFICIENT,from:MASTERED})}},mastered:{title:function t(){return i18n._("You’re still Mastered on this skill!")},subtitle:function t(){return i18n._("Great work! You maintained your level on this skill")}}}})
exports.default=function(t,e){try{var l=copyMap[t][e]
return{title:l.title(),subtitle:l.subtitle(t,e)}}catch(t){return{title:i18n._("Try again to level up"),subtitle:i18n._("You didn’t get enough questions correct to level up. Practice these skills again or watch a recommended video to learn more")}}}

});
KAdefine("javascript/mastery-package/feedback-familiar-tooltip-components.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.MasteryFeedbackFamiliarBody=exports.MasteryFeedbackFamiliarHeader=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var i18n=require("../shared-package/i18n.js")
var MasteryFeedbackFamiliarHeader=exports.MasteryFeedbackFamiliarHeader=function e(){return React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.masteryHeading},i18n._("Leveled up to Familiar!"))}
var MasteryFeedbackFamiliarBody=exports.MasteryFeedbackFamiliarBody=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.masteryBody},React.createElement(_wonderBlocksCoreV.View,{style:styles.masteryProgressIndicator},React.createElement(_smallMasteryIndicator2.default,{level:"familiar",width:64,height:82})),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.masteryBodyText},i18n._("You also collected 50 of 100 mastery points.")))}
var styles=_aphrodite.StyleSheet.create({masteryHeading:{marginTop:16,marginBottom:16,marginLeft:16},masteryFamiliarLabel:{display:"inline"},masteryBody:{flexDirection:"row",marginBottom:8},masteryProgressIndicator:{marginLeft:0,marginRight:6,marginTop:8},masteryBodyText:{maxWidth:150}})

});
KAdefine("javascript/mastery-package/mastery-progress-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _verticalProgressIndicator=require("./vertical-progress-indicator.jsx")
var _verticalProgressIndicator2=babelHelpers.interopRequireDefault(_verticalProgressIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var DEFAULT_WIDTH=12
var DEFAULT_HEIGHT=32
var MasteryProgressIndicator=function e(r){var a=r.mastery,t=r.emptyColor,l=r.labelType,o=r.width,s=o===undefined?DEFAULT_WIDTH:o,i=r.height,c=i===undefined?DEFAULT_HEIGHT:i
return React.createElement(_verticalProgressIndicator2.default,{labelText:(0,_masteryUtils.getMasteryDisplay)(a),labelType:l,width:s,height:c,emptyColor:t,fillColor:a===_masteryUtils.HAS_FULLY_MASTERED_STATE?_wonderBlocksColorV2.default.gold:_wonderBlocksColorV2.default.lightBlue,fillLevel:_masteryUtils.masteryValues.indexOf(a),regions:[{size:6},{size:9},{size:15}]})}
exports.default=MasteryProgressIndicator

});
KAdefine("javascript/mastery-package/mastery-progress-legend-launcher.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _modalLauncher=require("../components/modal-package/modal-launcher.jsx")
var _modalLauncher2=babelHelpers.interopRequireDefault(_modalLauncher)
var _linkStyledButton=require("../components/button-package/link-styled-button.jsx")
var _linkStyledButton2=babelHelpers.interopRequireDefault(_linkStyledButton)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _a11y=require("../shared-styles-package/a11y.js")
var _masteryProgressLegendModal=require("./mastery-progress-legend-modal.jsx")
var _masteryProgressLegendModal2=babelHelpers.interopRequireDefault(_masteryProgressLegendModal)
var i18n=require("../shared-package/i18n.js")
var questionSignIcon={path:"M43.776 66.69q-1.995 0-2.109 2.109l0 12.483q.057.912.627 1.482t1.482.627l12.483 0q.969 0 1.539-.57t.57-1.539l0-12.483q0-2.109-2.109-2.109l-12.483 0zm12.483-4.161q2.109 0 2.109-2.28 0-1.14 1.425-3.078t3.534-3.192 3.192-1.824q1.083-.684 2.964-2.28 5.472-4.617 5.529-12.54.114-5.586-3.534-10.488t-9.063-7.524q-5.415-2.679-11.058-2.679-15.846 0-24.168 13.908-.969 1.539.513 2.736l8.607 6.498q.399.399 1.311.399t1.539-.798q3.477-4.446 5.586-5.985 2.223-1.539 5.472-1.539t5.7 1.71 2.451 3.99-1.311 3.762-4.959 3.192q-3.648 1.596-7.011 5.415-3.42 3.819-3.42 8.151l0 2.337q.057.969.627 1.539t1.482.57l12.483 0zm43.776-12.483q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100}
var MasteryProgressLegendLauncher=function e(){var r=_react2.default.createElement(_masteryProgressLegendModal2.default,{onClose:function e(){}})
return _react2.default.createElement(_modalLauncher2.default,{ariaLabel:i18n._("Legend (Opens a modal)"),focusId:"mastery-progress-legend-launcher",key:"signin-link",modal:r},function(e,r){return _react2.default.createElement(_linkStyledButton2.default,{onClick:e,style:[styles.tooltipLink],id:"mastery-progress-legend-launcher"},_react2.default.createElement("span",{className:(0,_aphrodite.css)(_a11y.srOnly)},r),_react2.default.createElement(_icon2.default,{icon:questionSignIcon,color:_wonderBlocksColorV2.default.offBlack50,size:18}))})}
var styles=_aphrodite.StyleSheet.create({tooltipLink:{width:20}})
exports.default=MasteryProgressLegendLauncher

});
KAdefine("javascript/mastery-package/mastery-progress-legend-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _legendContainer,_progressContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _modal=require("../components/modal-package/modal.jsx")
var _modal2=babelHelpers.interopRequireDefault(_modal)
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../shared-package/i18n.js")
var formattedFamiliar=React.createElement("strong",null,(0,_masteryUtils.getMasteryDisplay)("familiar"))
var formattedProficient=React.createElement("strong",null,(0,_masteryUtils.getMasteryDisplay)("proficient"))
var strings={heading:i18n._("Introducing Unit Mastery"),body:i18n._("Your total points represent the progress you’ve made on this unit. Master every skill to collect all the available Mastery points."),noLevelTitle:i18n._("No level (0 points)"),noLevelDetails:i18n._("This is where you’ll start. Watch videos and practice skills if you’re new to the material or jump to a quiz or unit test if you feel more confident."),attemptedTitle:i18n._("Attempted (0 points)"),attemptedDetails:i18n._("If you get less than 70% correct when practicing a skill or if you get questions related to this skill incorrect on a quiz or unit test you’ll be here."),fmailiarTitle:i18n._("Familiar (50 points)"),familiarDetails:i18n._("Get 70% or more correct when practicing a skill. Or, correctly answer a question related to a skill on a quiz or unit test."),proficientTitle:i18n._("Proficient (80 points)"),proficientDetails:i18n.$_("Answer 100% of the questions correct when practicing a skill or get a %(familiar)s skill correct during a quiz or unit test.",{familiar:formattedFamiliar}),masteredTitle:i18n._("Mastered (100 points)"),masteredDetails:i18n.$_("Get a %(proficient)s skill correct on the unit test.",{proficient:formattedProficient}),gotIt:i18n._("Ok, got it")}
var LegendRow=function e(t){var r=t.level,a=t.heading,l=t.body
return React.createElement(_wonderBlocksCoreV.View,{style:styles.legendRow},React.createElement(_wonderBlocksCoreV.View,{style:styles.progressContainer},React.createElement(_smallMasteryIndicator2.default,{level:r,width:30,height:60})),React.createElement(_wonderBlocksCoreV.View,{style:styles.rowBody},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,a),React.createElement(_wonderBlocksTypographyV.Body,null,l)))}
var LegendRule=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.legendRow},React.createElement("hr",{className:css(styles.hr)}))}
var MasteryProgressLegend=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.legendContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.legendHeader},React.createElement(_wonderBlocksTypographyV.Body,null,strings.body)),React.createElement(LegendRow,{level:"unfamiliar",heading:strings.noLevelTitle,body:strings.noLevelDetails}),React.createElement(LegendRule,null),React.createElement(LegendRow,{level:"attempted",heading:strings.attemptedTitle,body:strings.attemptedDetails}),React.createElement(LegendRule,null),React.createElement(LegendRow,{level:"familiar",heading:strings.fmailiarTitle,body:strings.familiarDetails}),React.createElement(LegendRule,null),React.createElement(LegendRow,{level:"proficient",heading:strings.proficientTitle,body:strings.proficientDetails}),React.createElement(LegendRule,null),React.createElement(LegendRow,{level:"mastered",heading:strings.masteredTitle,body:strings.masteredDetails}))}
var MasteryProgressLegendModal=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,l
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),i=0;i<n;i++){o[i]=arguments[i]}return l=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.handleClick=function(){if(a.modal){a.modal.handleClose()}},r),babelHelpers.possibleConstructorReturn(a,l)}t.prototype.render=function e(){var t=this
var r=this.props.onClose
return React.createElement(_modal2.default,{ref:function e(r){return t.modal=r},onClose:r,shouldAnimate:true},React.createElement(_modal.ModalHeader,null,strings.heading),React.createElement(MasteryProgressLegend,null),React.createElement(_modal.ModalFooter,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},React.createElement(_wonderBlocksButtonV2.default,{onClick:this.handleClick,width:styles.button},strings.gotIt))))}
return t}(React.PureComponent)
var styles=StyleSheet.create({legendContainer:(_legendContainer={padding:"25px 200px 64px 136px",overflow:"auto"},_legendContainer[_mediaQueries2.default.sm]={padding:"25px 100px 64px 68px"},_legendContainer[_mediaQueries2.default.xsOrSmaller]={padding:"25px 48px 64px 32px"},_legendContainer),legendHeader:{margin:"0px auto 32px",maxWidth:528,textAlign:"center",flexShrink:0},legendRow:{flexDirection:"row",flexShrink:0},progressContainer:(_progressContainer={margin:"0px 18px"},_progressContainer[_mediaQueries2.default.smOrSmaller]={flexShrink:0,margin:"auto 18px auto 0px"},_progressContainer),rowBody:{maxWidth:600,margin:0},hr:{boxShadow:"none",color:_wonderBlocksColorV2.default.offBlack50,marginBottom:18},footer:{flexDirection:"row",justifyContent:"flex-end",width:"100%",marginRight:16},button:{minWidth:140}})
exports.default=MasteryProgressLegendModal

});
KAdefine("javascript/mastery-package/start-of-quiz-cta.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.forTestingOnly=undefined
var _preview
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var _mediumMasteryIndicator=require("./medium-mastery-indicator.jsx")
var _mediumMasteryIndicator2=babelHelpers.interopRequireDefault(_mediumMasteryIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var strings={getLevelUp:function e(t){return i18n.ngettext("Level up on %(num)s skill","Level up on %(num)s skills",t)},takeUnitTest:i18n._("Take the Unit test to level up!"),getLevelUpDescQuiz:function e(t){return i18n.ngettext("Level up on the skills covered by this quiz and collect up to %(num)s Mastery point","Level up on the skills covered by this quiz and collect up to %(num)s Mastery points",t)},getLevelUpDescTest:function e(t){return i18n.ngettext("Level up on the skills covered by this Unit test and collect up to %(num)s Mastery point","Level up on the skills covered by this Unit test and collect up to %(num)s Mastery points",t)},takeUnitTestDesc:i18n._("Take the Unit test to level up on the skills covered by this quiz. You can’t collect additional Mastery points with this quiz"),getTakeUnitTestUpsell:function e(t){return i18n.ngettext("Take the Unit Test to reach Mastered and collect %(num)s mastery point","Take the Unit Test to reach Mastered and collect %(num)s mastery points",t)},getUnitTestsAreTheOnlyWay:function e(t){return i18n.ngettext("Take the Unit Test to reach Mastered and collect %(num)s Mastery point","Take the Unit Test to reach Mastered and collect %(num)s Mastery points",t)},getQuizTimeEstimate:function e(t){return i18n._("This quiz takes about %(lowerBound)s - %(upperBound)s minutes",babelHelpers.extends({},t))},getUnitTestTimeEstimate:function e(t){return i18n._("This test takes about %(lowerBound)s - %(upperBound)s minutes",babelHelpers.extends({},t))},getAlreadyMasteredTitle:function e(t){return i18n._('You have already Mastered "%(unitName)s"',{unitName:t})},getAlreadyMasteredBody:function e(t){return i18n._("Take another Unit test to practice again or go to the %(subject)s page to start work on the next unit",{subject:t})},thisUnit:i18n._("this Unit")}
var PROFICIENT=_masteryUtils.constants.PROFICIENT
var getCounts=function e(t,r,a){var n=(0,_masteryUtils.getLevelIndex)(a)
var s={availablePoints:0,numOfSkillsThatCanLevelUp:0}
var i=_masteryUtils.levelPointsMap[PROFICIENT]
var l=function e(t,r,a){var n=t.availablePoints,s=t.numOfSkillsThatCanLevelUp
return{availablePoints:n+r,numOfSkillsThatCanLevelUp:s+a}}
var o=function e(t){return(0,_masteryUtils.getLevelIndex)(t)<n}
return t.reduce(function(e,t){var a=t.contentId
var n=r["e"+a]
var s=i-_masteryUtils.levelPointsMap[n]
return o(n)?l(e,s,1):e},s)}
var getQuizCopy=function e(t,r,a){var n=getCounts(t,r,_masteryUtils.constants.PROFICIENT),s=n.numOfSkillsThatCanLevelUp,i=n.availablePoints
var l=s>0?strings.getLevelUp(s):strings.takeUnitTest
var o=s>0?strings.getLevelUpDescQuiz(i):strings.takeUnitTestDesc
var c=strings.getQuizTimeEstimate(a)
var u=i+20*t.length
var d=strings.getTakeUnitTestUpsell(u)
return{title:l,body:o,timeEstimateText:c,footer:d}}
var getTestCopy=function e(t,r,a,n,s){var i=getCounts(t,r,_masteryUtils.constants.MASTERED),l=i.numOfSkillsThatCanLevelUp,o=i.availablePoints
var c=n&&n.title||strings.thisUnit
var u=l>0?strings.getLevelUp(l):strings.getAlreadyMasteredTitle(c)
var d=l>0?strings.getLevelUpDescTest(o):strings.getAlreadyMasteredBody(s)
var p=strings.getUnitTestTimeEstimate(a)
var v=l>0?strings.getUnitTestsAreTheOnlyWay(o):""
return{title:u,body:d,timeEstimateText:p,footer:v}}
var getIndicators=function e(t,r){var a=t.length
var n=function e(t,a){var n=t.contentId
var s=r["e"+n]
return{key:a,level:s,darkBackground:true}}
return t.map(function(e,t){var r=n(e,t)
return a>7?React.createElement(_smallMasteryIndicator2.default,babelHelpers.extends({},r,{style:styles.smallMargin})):React.createElement(_mediumMasteryIndicator2.default,babelHelpers.extends({},r,{style:styles.mediumMargin}))})}
exports.default=function(e){var t=e.masteryMap,r=e.subjectTitle,a=e.timeEstimate,n=e.topic,s=e.tutorials,i=e.type
var l=(0,_masteryUtils.getAllExercises)(s)
var o=i==="quiz"?getQuizCopy(l,t,a):getTestCopy(l,t,a,n,r),c=o.title,u=o.body,d=o.timeEstimateText,p=o.footer
return React.createElement(_wonderBlocksCoreV.View,{style:styles.preview,"data-test-id":"start-of-"+i+"-cta"},React.createElement(_wonderBlocksCoreV.View,{style:styles.previewBody},React.createElement(_wonderBlocksCoreV.View,{style:styles.progressIndicators},getIndicators(l,t)),React.createElement(_wonderBlocksTypographyV.Title,{style:styles.previewTitle},c),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.previewDesc},React.createElement(_reactBalanceText2.default,null,u)),React.createElement(_wonderBlocksTypographyV.LabelSmall,null,d)),p&&React.createElement(_wonderBlocksCoreV.View,{style:styles.previewFooter},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,p)))}
var forTestingOnly=exports.forTestingOnly={getCounts:getCounts,getQuizCopy:getQuizCopy,getTestCopy:getTestCopy}
var styles=_aphrodite.StyleSheet.create({previewContainer:{flex:1,backgroundColor:_wonderBlocksColorV2.default.darkBlue,display:"flex",flexDirection:"column"},preview:(_preview={color:_wonderBlocksColorV2.default.white,display:"flex",flexDirection:"column",padding:"0 57px",flex:1},_preview[_mediaQueries2.default.smOrSmaller]={padding:"0 32px"},_preview),previewBody:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},previewTitle:{marginTop:24},previewDesc:{marginTop:12,marginBottom:20,maxWidth:"360px"},progressIndicators:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",maxWidth:352},previewFooter:{paddingBottom:40,paddingTop:20,borderTop:"solid 1px rgba(255, 255, 255, 0.5)",textAlign:"center",marginTop:16},mediumMargin:{marginRight:12},smallMargin:{marginRight:8}})

});
KAdefine("javascript/mastery-package/start-of-quiz-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var PROFICIENT_LEVEL_INDEX=_masteryUtils.masteryValues.indexOf(_masteryUtils.constants.PROFICIENT)
var MASTERED_LEVEL_INDEX=_masteryUtils.masteryValues.indexOf(_masteryUtils.constants.MASTERED)
var strings={startQuiz:i18n._("Start Quiz"),getStartQuizCTA:function e(t){return i18n._("Start %(quizTitle)s",{quizTitle:t})},goToSubject:i18n._("Go to Course"),startUnitTest:i18n._("Start Unit test"),getNumberOfQuestions:function e(t){return i18n.ngettext("%(num)s question","%(num)s questions",t)}}
var StartOfQuizFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.getLevelUpCount=function e(t){var r=this.props,o=r.masteryMap,n=r.tutorials
var a=0
var s=n.reduce(function(e,t){return[].concat(e,t.contentItems)},[])
var i=s.filter(function(e){return e.kind==="Exercise"})
for(var l=i,u=Array.isArray(l),c=0,l=u?l:l[Symbol.iterator]();;){var d
if(u){if(c>=l.length)break
d=l[c++]}else{c=l.next()
if(c.done)break
d=c.value}var p=d
var y=o["e"+p.contentId]
var f=_masteryUtils.masteryValues.indexOf(y)
if(f<t){a++}}return a}
t.prototype.renderNumberOfQuestions=function e(){var t=this.props.numItems
return React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.footerLabel},strings.getNumberOfQuestions(t))}
t.prototype.renderStartQuizButton=function e(){var t=this.props,r=t.title,o=t.onStartQuiz
var n=strings.getStartQuizCTA(r)
return React.createElement(_wonderBlocksButtonV2.default,{onClick:o,style:styles.button},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,n))}
t.prototype.renderStartUnitTestButton=function e(t){var r=this.props.onStartUnitTest
var o=t?{style:styles.button}:{type:"tertiary"}
return React.createElement(_wonderBlocksButtonV2.default,babelHelpers.extends({onClick:r},o),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,strings.startUnitTest))}
t.prototype.renderGotoSubjectButton=function e(){var t=this.props.onGoToSubject
return React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:t},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,strings.goToSubject))}
t.prototype.renderQuizButtons=function e(){var t=this.getLevelUpCount(PROFICIENT_LEVEL_INDEX)
if(t===0){return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},this.renderStartUnitTestButton(false),React.createElement(_wonderBlocksCoreV.View,{style:styles.verticalSeparator}),this.renderStartQuizButton())}return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},this.renderNumberOfQuestions(),this.renderStartQuizButton())}
t.prototype.renderUnitTestButtons=function e(){var t=this.getLevelUpCount(MASTERED_LEVEL_INDEX)
if(t===0){return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},this.renderGotoSubjectButton(),React.createElement(_wonderBlocksCoreV.View,{style:styles.verticalSeparator}),this.renderStartUnitTestButton(true))}return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},this.renderNumberOfQuestions(),this.renderStartUnitTestButton(true))}
t.prototype.render=function e(){var t=this.props.type
return React.createElement(_wonderBlocksCoreV.View,{style:styles.footer,"data-test-id":"start-of-"+t+"-footer"},t==="quiz"?this.renderQuizButtons():this.renderUnitTestButtons())}
return t}(React.Component)
exports.default=StartOfQuizFooter
var styles=_aphrodite.StyleSheet.create({modal:{width:2*474,height:625},content:{padding:59},contentHeading:{color:_wonderBlocksColorV2.default.offBlack50},contentRow:{display:"flex",flexDirection:"row",height:68,alignItems:"center",justifyContent:"space-between",borderBottom:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,":last-child":{borderBottom:"none"}},rowText:{},footer:{flexGrow:1,display:"flex",flexDirection:"row-reverse"},buttonGroup:{display:"flex",flexDirection:"row",alignItems:"center"},footerLabel:{marginRight:24},preview:{color:_wonderBlocksColorV2.default.white,display:"flex",flexDirection:"column",padding:"0 57px"},previewBody:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},previewTitle:{marginTop:20},previewDesc:{marginTop:12,marginBottom:20},progressIndicators:{display:"flex",flexDirection:"row",justifyContent:"space-between"},previewFooter:{paddingBottom:40,paddingTop:20,borderTop:"solid 1px rgba(255,255,255,0.5)",textAlign:"center"},verticalSeparator:{width:1,marginRight:20,backgroundColor:_wonderBlocksColorV2.default.offBlack16,height:40},button:{width:138}})

});
KAdefine("javascript/mastery-package/start-of-quiz-summary.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _content
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _pageloadMarker=require("../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _quizSummaryRow=require("./quiz-summary-row.jsx")
var _quizSummaryRow2=babelHelpers.interopRequireDefault(_quizSummaryRow)
var i18n=require("../shared-package/i18n.js")
var strings={whatsIncludedInThisQuiz:i18n._("What’s included in this quiz"),whatsIncludedInThisUnitTest:i18n._("What’s included in this Unit test")}
var StartOfQuizSummary=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,a=r.masteryMap,t=r.type
var n=this.props.tutorials.reduce(function(e,r){var a=r.contentItems
return[].concat(e,a)},[])
var i=n.filter(function(e){return e.kind==="Exercise"})
return React.createElement(_wonderBlocksCoreV.View,{style:styles.content,"data-test-id":"start-of-"+t+"-summary"},React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:styles.contentHeading},t==="quiz"?strings.whatsIncludedInThisQuiz:strings.whatsIncludedInThisUnitTest),i.map(function(e,r){var t=a["e"+e.contentId]
return React.createElement(_quizSummaryRow2.default,{startLevel:t,title:e.title,key:r})}),React.createElement(_pageloadMarker2.default,{pageName:t==="quiz"?"quiz_modal":"unit_test_modal",sufficientlyUsable:true,fullyInteractive:true}))}
return r}(React.Component)
exports.default=StartOfQuizSummary
var styles=_aphrodite.StyleSheet.create({content:(_content={flexShrink:0,padding:59},_content[_mediaQueries2.default.smOrSmaller]={padding:32},_content),contentHeading:{color:_wonderBlocksColorV2.default.offBlack50}})

});
KAdefine("javascript/mastery-package/start-of-exercise-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _content
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _pageloadMarker=require("../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _exerciseSummary=require("./exercise-summary.jsx")
var _exerciseSummary2=babelHelpers.interopRequireDefault(_exerciseSummary)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var strongProficient=React.createElement("strong",null,(0,_masteryUtils.getMasteryDisplay)(_masteryUtils.constants.PROFICIENT))
var strings={nullTitle:i18n._("Start learning now!"),nullSubtitle:i18n._("Practice this skill to level up"),familiarTitle:i18n._("Practice makes progress"),familiarSubtitle:i18n.$_("Way to go! You’re more than halfway through learning this skill. Practice again to become %(proficient)s!",{proficient:strongProficient}),proficientTitle:i18n._("Keep going. Keep growing"),proficientSubtitle:i18n.$_("You’re already %(proficient)s at this skill! Amazing! Take the Unit test to master this skill and maximize your points",{proficient:strongProficient}),masteredTitle:i18n._("Congrats! You’ve mastered this skill!"),masteredSubtitle:i18n._("For next steps, we recommend you take the Unit test to level up the skills you’ve haven’t mastered yet"),attemptedTitle:i18n._("Practice makes progress"),attemptedSubtitle:i18n._("Practice this skill to level up. For additional help, review the recommended content")}
var getTitle=function e(t){switch(t){case"unfamiliar":return strings.nullTitle
case"attempted":return strings.attemptedTitle
case"familiar":return strings.familiarTitle
case"proficient":return strings.proficientTitle
case"mastered":return strings.masteredTitle}}
var getSubtitle=function e(t){switch(t){case"unfamiliar":return strings.nullSubtitle
case"attempted":return strings.attemptedSubtitle
case"familiar":return strings.familiarSubtitle
case"proficient":return strings.proficientSubtitle
case"mastered":return strings.masteredSubtitle}}
var StartOfExerciseCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props.level
return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_wonderBlocksCoreV.View,{style:styles.card},React.createElement(_wonderBlocksCoreV.View,{style:styles.content},React.createElement(_wonderBlocksTypographyV.Title,{style:styles.title},getTitle(t)),React.createElement(_wonderBlocksTypographyV.Tagline,{style:styles.subtitle},React.createElement(_reactBalanceText2.default,null,getSubtitle(t))),React.createElement(_exerciseSummary2.default,this.props),React.createElement(_pageloadMarker2.default,{pageName:"exercise_modal",sufficientlyUsable:true,fullyInteractive:true}))))}
return t}(React.Component)
exports.default=StartOfExerciseCard
var styles=_aphrodite.StyleSheet.create({wrapper:{backgroundColor:_wonderBlocksColorV2.default.darkBlue,display:"flex",flexGrow:1,overflow:"auto"},card:{color:_wonderBlocksColorV2.default.white,display:"block",margin:"auto",padding:16},content:(_content={maxWidth:400,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center"},_content[_mediaQueries2.default.smOrLarger]={maxWidth:320},_content),title:{marginBottom:9},subtitle:{marginBottom:30}})

});
KAdefine("javascript/mastery-package/start-of-task-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _card,_content,_title,_image
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _pageloadMarker=require("../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var i18n=require("../shared-package/i18n.js")
var strings={getSubtitle:function e(t){return i18n._("Welcome to the Course challenge! Here, you'll test your knowledge on all of the skills contained in %(subjectName)s.",{subjectName:t})},getTimeString:function e(t,r){return i18n._("This challenge takes about %(lowerLimit)s - %(upperLimit)s minutes",{lowerLimit:t,upperLimit:r})},title:i18n._("It's challenge time!")}
var StartOfTaskCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.timeEstimate,a=r.lowerBound,l=r.upperBound,i=t.topicTitle
return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_wonderBlocksCoreV.View,{style:styles.card},React.createElement(_wonderBlocksCoreV.View,{style:styles.content},React.createElement(_wonderBlocksTypographyV.Title,{style:styles.title},strings.title),React.createElement(_wonderBlocksTypographyV.Tagline,{style:styles.subtitle},React.createElement(_reactBalanceText2.default,null,strings.getSubtitle(i))),React.createElement(_wonderBlocksTypographyV.Caption,{style:styles.caption},strings.getTimeString(a,l)),React.createElement(_wonderBlocksCoreV.View,{style:styles.imageContainer},React.createElement("img",{className:(0,_aphrodite.css)(styles.image),src:(0,_staticUrl2.default)("/images/mastery/StartOfTask.svg"),alt:"","aria-hidden":true})),React.createElement(_pageloadMarker2.default,{pageName:"course_challenge_modal",sufficientlyUsable:true,fullyInteractive:true}))))}
return t}(React.Component)
exports.default=StartOfTaskCard
var styles=_aphrodite.StyleSheet.create({wrapper:{backgroundColor:_wonderBlocksColorV2.default.darkBlue,flexGrow:1,overflow:"auto"},card:(_card={color:_wonderBlocksColorV2.default.white,display:"block",margin:"auto auto 0"},_card[_mediaQueries2.default.smOrSmaller]={margin:"auto"},_card),content:(_content={width:400,justifyContent:"center",alignContent:"center",flexDirection:"column",textAlign:"center"},_content[_mediaQueries2.default.smOrSmaller]={width:300},_content),title:(_title={marginTop:128,marginBottom:12},_title[_mediaQueries2.default.mdOrSmaller]={marginTop:12},_title),subtitle:{marginBottom:24},caption:{marginBottom:80},imageContainer:{justifyContent:"center",flexDirection:"row"},image:(_image={width:344},_image[_mediaQueries2.default.smOrSmaller]={display:"none"},_image)})

});
KAdefine("javascript/mastery-package/start-of-exercise-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var i18n=require("../shared-package/i18n.js")
var strings={startExercise:i18n._("Start exercise"),questionCount:function e(t){return i18n.ngettext("%(num)s question","%(num)s questions",t)},doExerciseAgain:i18n._("Do exercise again"),close:i18n._("Close"),nextExercise:i18n._("Next exercise"),nextQuiz:i18n._("Start quiz"),nextTest:i18n._("Start Unit test")}
var getNextItemString=function e(t){if(!t){return strings.close}if(t.kind==="Exercise"){return strings.nextExercise}else if(t.kind==="InterspersedQuiz"){if(t.type==="quiz"){return strings.nextQuiz}else{return strings.nextTest}}}
var StartOfExerciseFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderProficientOrMasteredButtons=function e(){var t=this.props,r=t.onStartExercise,o=t.onNextItem,n=t.nextItem
return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},React.createElement(_wonderBlocksButtonV2.default,{onClick:o,kind:"tertiary"},getNextItemString(n)),React.createElement(_wonderBlocksCoreV.View,{style:styles.verticalSeparator}),React.createElement(_wonderBlocksButtonV2.default,{onClick:r},strings.doExerciseAgain))}
t.prototype.renderNormalButtons=function e(){var t=this.props,r=t.questionCount,o=t.onStartExercise
return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonGroup},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.label},strings.questionCount(r)),React.createElement(_wonderBlocksButtonV2.default,{onClick:o,testId:"test-start-exercise-button"},strings.startExercise))}
t.prototype.render=function e(){var t=this.props.level
var r=["proficient","mastered"].includes(t)
return React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},r?this.renderProficientOrMasteredButtons():this.renderNormalButtons())}
return t}(React.Component)
exports.default=StartOfExerciseFooter
var styles=_aphrodite.StyleSheet.create({footer:{flexGrow:1,display:"flex",flexDirection:"row-reverse",paddingLeft:16,paddingRight:16},buttonGroup:{display:"flex",flexDirection:"row",alignItems:"center"},label:{marginRight:22},verticalSeparator:{width:1,height:"100%",backgroundColor:_wonderBlocksColorV2.default.offBlack16,marginRight:20}})

});
KAdefine("javascript/mastery-package/exercise-summary.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _wrapper,_textContainer,_masteredLabel,_proficientLabel,_familiarLabel,_line,_labelContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _viewportWatcher=require("../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _largeMasteryIndicator=require("./large-mastery-indicator.jsx")
var _largeMasteryIndicator2=babelHelpers.interopRequireDefault(_largeMasteryIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var constants={desktop:{bottomHeight:95,middleHeight:59,topHeight:55,indicatorWidth:114,verticalGap:12,containerWidth:320,containerHeight:232},mobile:{bottomHeight:70,middleHeight:40,topHeight:43,indicatorWidth:80,verticalGap:12,containerWidth:220,containerHeight:172}}
var strings={masteredLabel:i18n._("Mastered (100pts)"),proficientLabel:i18n._("Proficient (80pts)"),familiarLabel:i18n._("Familiar (50pts)"),unfamiliarLabel:i18n._("You are here"),masteredCTA:function e(t){return t==="mastered"?i18n._("Got question correct in test"):i18n._("Start unit test")},goalOfTotalCTA:function e(t,a){return i18n.ngettext("%(goal)s of %(num)s question correct","%(goal)s of %(num)s correct",a,{goal:t})}}
var MasteryLabel=function e(t){var a=t.style,r=t.largeLabelString,i=t.smallLabelString
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.labelRow,a]},React.createElement(_wonderBlocksCoreV.View,{style:styles.line}),React.createElement(_wonderBlocksCoreV.View,{style:styles.labelContainer},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.topLabel},r),i&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.bottomLabel},i)))}
var MasteryLegend=function e(t){var a=t.level,r=t.questionCount
var i=(0,_masteryUtils.getLevelIndex)(a)
var o=i===0
var l=i<3
var n=i<4
var s=i>1
return React.createElement(_wonderBlocksCoreV.View,{style:styles.textContainer},s&&React.createElement(MasteryLabel,{style:styles.masteredLabel,largeLabelString:strings.masteredLabel,smallLabelString:strings.masteredCTA(a)}),n&&React.createElement(MasteryLabel,{style:styles.proficientLabel,largeLabelString:strings.proficientLabel,smallLabelString:strings.goalOfTotalCTA(r,r)}),l&&React.createElement(MasteryLabel,{style:styles.familiarLabel,largeLabelString:strings.familiarLabel,smallLabelString:strings.goalOfTotalCTA(Math.ceil(.7*r),r)}),o&&React.createElement(MasteryLabel,{style:styles.unfamiliarLabel,largeLabelString:strings.unfamiliarLabel}))}
exports.default=function(e){var t=e.level,a=e.questionCount
return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_viewportWatcher2.default,null,function(e){return React.createElement(_largeMasteryIndicator2.default,{width:e.atMost("sm")?constants.mobile.indicatorWidth:constants.desktop.indicatorWidth,level:t})}),React.createElement(MasteryLegend,{level:t,questionCount:a}))}
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"flex",flexDirection:"row",height:constants.desktop.containerHeight,minHeight:constants.desktop.containerHeight,width:constants.desktop.containerWidth,backgroundColor:_wonderBlocksColorV2.default.darkBlue},_wrapper[_mediaQueries2.default.smOrSmaller]={height:constants.mobile.containerHeight,minHeight:constants.mobile.containerHeight,width:constants.mobile.containerWidth},_wrapper),graphicContainer:{display:"flex",flexDirection:"column"},textContainer:(_textContainer={display:"flex",flexDirection:"column",position:"relative",width:constants.desktop.containerWidth-constants.desktop.indicatorWidth},_textContainer[_mediaQueries2.default.smOrSmaller]={width:constants.mobile.containerWidth-constants.mobile.indicatorWidth},_textContainer),masteredLabel:(_masteredLabel={bottom:constants.desktop.bottomHeight+constants.desktop.verticalGap+constants.desktop.middleHeight+constants.desktop.verticalGap+constants.desktop.topHeight-16},_masteredLabel[_mediaQueries2.default.smOrSmaller]={bottom:constants.mobile.bottomHeight+constants.mobile.verticalGap+constants.mobile.middleHeight+constants.mobile.verticalGap+constants.mobile.topHeight-16},_masteredLabel),labelRow:{color:_wonderBlocksColorV2.default.white,position:"absolute",display:"flex",flexDirection:"row",alignItems:"flex-end"},proficientLabel:(_proficientLabel={bottom:constants.desktop.bottomHeight+constants.desktop.verticalGap+constants.desktop.middleHeight-1},_proficientLabel[_mediaQueries2.default.smOrSmaller]={bottom:constants.mobile.bottomHeight+constants.mobile.verticalGap+constants.mobile.middleHeight-1},_proficientLabel),familiarLabel:(_familiarLabel={bottom:constants.desktop.bottomHeight+2},_familiarLabel[_mediaQueries2.default.smOrSmaller]={bottom:constants.mobile.bottomHeight+2},_familiarLabel),unfamiliarLabel:{bottom:8},line:(_line={height:2,width:48,marginLeft:8,marginRight:8,marginBottom:4,backgroundColor:_wonderBlocksColorV2.default.white64},_line[_mediaQueries2.default.smOrSmaller]={width:16},_line),labelContainer:(_labelContainer={position:"relative",width:200,textAlign:"left"},_labelContainer[_mediaQueries2.default.smOrSmaller]={width:148},_labelContainer),topLabel:{position:"absolute",bottom:0},bottomLabel:{position:"absolute",top:0,color:_wonderBlocksColorV2.default.white64}})

});
KAdefine("javascript/mastery-package/end-of-quiz-cta.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var _mediumMasteryIndicator=require("./medium-mastery-indicator.jsx")
var _mediumMasteryIndicator2=babelHelpers.interopRequireDefault(_mediumMasteryIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _getEndOfCourseChallengeCopy=require("./get-end-of-course-challenge-copy.js")
var _getEndOfCourseChallengeCopy2=babelHelpers.interopRequireDefault(_getEndOfCourseChallengeCopy)
var _getEndOfQuizTestCopy=require("./get-end-of-quiz-test-copy.js")
var _getEndOfQuizTestCopy2=babelHelpers.interopRequireDefault(_getEndOfQuizTestCopy)
var EndOfQuizCta=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderSkillIndicators=function e(r,t,a){var l=this.props,o=l.type,s=l.newMasteryMap
if(o==="subject-challenge"){return null}var n=void 0
if(t.length>a.length){n=t}else if(a.length>t.length){n=a}else if(t.length>0){n=t}else{n=r}var i=n.length
var c=i>7?8:12
var d=i>7?14:40
var p=i*(d+c)-c
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.progressIndicators,{width:p}]},n.map(function(e,r){var t=(0,_masteryUtils.getMasteryLevelForExerciseFromMap)(e,s)
return i>7?React.createElement(_smallMasteryIndicator2.default,{key:r,level:t,darkBackground:true}):React.createElement(_mediumMasteryIndicator2.default,{key:r,level:t})}))}
r.prototype.render=function e(){var r=this.props,t=r.newMasteryMap,a=r.oldMasteryMap,l=r.score,o=r.tutorials,s=r.type
var n=(0,_masteryUtils.getAllExercises)(o)
var i=(0,_masteryUtils.getExerciseLevelChanges)(n,a,t)
var c=i.leveledUp.length
var d=i.leveledDown.length
var p=i.levelMaintained.length
var y=l&&l.numCorrect||0
var u=l&&l.numAttempted||0
var v=(0,_masteryUtils.getTotalMasteryPointsAvailable)(o,t)
var m=(0,_masteryUtils.getTotalMasteryPointsEarned)(o,t)
var g=(0,_masteryUtils.achievedMastery)(m,v)
var f=(0,_masteryUtils.getMasteryPointChange)(n,a,t)
var h=n.filter(function(e){var r=(0,_masteryUtils.getMasteryLevelForExerciseFromMap)(e,t)
return r===_masteryUtils.constants.UNFAMILIAR||r===_masteryUtils.constants.FAMILIAR})
var w=n.filter(function(e){return(0,_masteryUtils.getMasteryLevelForExerciseFromMap)(e,t)!==_masteryUtils.constants.MASTERED})
var C=s==="quiz"?h.length===0&&w===0:w===0
var b=this.renderSkillIndicators(n,i.leveledUp,i.leveledDown)
var k=s==="subject-challenge"?(0,_getEndOfCourseChallengeCopy2.default)(c,y,u):(0,_getEndOfQuizTestCopy2.default)(s,f,g,c,d,p,y)
return React.createElement(_wonderBlocksCoreV.View,{style:styles.preview},React.createElement(_wonderBlocksCoreV.View,{style:styles.previewBody},b,React.createElement(_wonderBlocksTypographyV.Title,{style:styles.previewTitle},k.title),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.previewDesc},React.createElement(_reactBalanceText2.default,null,k.subtitle)),React.createElement(_wonderBlocksTypographyV.LabelSmall,null,k.scoreSummary)),!g&&k.footer&&React.createElement(_wonderBlocksCoreV.View,{style:[styles.previewFooter,C&&styles.hideFooter]},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,k.footer)))}
return r}(React.Component)
exports.default=EndOfQuizCta
var styles=_aphrodite.StyleSheet.create({preview:{color:_wonderBlocksColorV2.default.white,backgroundColor:_wonderBlocksColorV2.default.darkBlue,padding:"0 57px",flex:1},previewBody:{flex:1,justifyContent:"center",alignItems:"center",textAlign:"center"},previewTitle:{marginTop:20},previewDesc:{marginTop:12,marginBottom:20},progressIndicators:{flexDirection:"row",justifyContent:"space-between"},previewFooter:{paddingBottom:40,paddingTop:20,borderTop:"solid 1px rgba(255,255,255,0.5)",textAlign:"center"},hideFooter:{visibility:"hidden"}})

});
KAdefine("javascript/mastery-package/end-of-quiz-summary.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _content
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _quizSummaryRow=require("./quiz-summary-row.jsx")
var _quizSummaryRow2=babelHelpers.interopRequireDefault(_quizSummaryRow)
var i18n=require("../shared-package/i18n.js")
var strings={skillLevelChanges:i18n._("Skill level changes"),recommendedLessons:i18n._("Recommended lessons"),getRecommendedForTest:function e(t){return i18n.ngettext("We recommend the following lesson based on your test performance:","We recommend the following lessons based on your test performance:",t)},getRecommendedForSubjectChallenge:function e(t){return i18n.ngettext("We recommend the following content item to help you grow:","We recommend the following content items to help you grow:",t)},reviewAnswers:i18n._("Review Answers"),getQuestionNumber:function e(t){return i18n._("Question %(num)s",{num:t})},correct:i18n._("Correct"),incorrect:i18n._("Incorrect"),collectedPoints:i18n._("Collected points"),masteryPointsLabel:i18n._("Mastery points"),getMasteryPoints:function e(t,r){return i18n._("%(points)s/%(total)s correct",{points:t,total:r})},energyPointsLabel:i18n._("Energy Points for effort"),energyPointsForCompletion:i18n._("Bonus points earned for completion")}
var checkCircleIcon={path:"M4.3,5.5L6.7,3c0.2-0.2,0.5-0.2,0.7,0l0.3,0.3C8,3.6,8,3.9,7.8,4.1L4.6,7.2C4.5,7.3,4.4,7.4,4.3,7.4c-0.1,0-0.3,0-0.3-0.1L2.2,5.5C2,5.3,2,5,2.2,4.8l0.3-0.3c0.2-0.2,0.5-0.2,0.7,0L4.3,5.5z M5,9.9c2.7,0,4.9-2.2,4.9-4.9S7.7,0.1,5,0.1S0.1,2.3,0.1,5S2.3,9.9,5,9.9z",width:10,height:10}
var minusSignIcon={path:"M79.23 54.207l0-8.379q0-1.653-1.254-2.907t-2.907-1.254l-50.046 0q-1.71 0-2.964 1.254t-1.197 2.907l0 8.379q0 1.71 1.254 2.964t2.907 1.197l50.046 0q1.653.057 2.907-1.197t1.254-2.964zm20.805-4.161q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100}
var EndOfQuizSummary=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderLevelChanges=function e(){var t=this.props,r=t.oldMasteryMap,o=t.newMasteryMap,n=t.tutorials
var l=(0,_masteryUtils.getAllExercises)(n)
var a=l.map(function(e,t){var n=r["e"+e.contentId]
var l=o["e"+e.contentId]
var a=_masteryUtils.masteryValues.indexOf(l)-_masteryUtils.masteryValues.indexOf(n)
return React.createElement(_quizSummaryRow2.default,{startLevel:n,levelChange:a,endLevel:l,title:e.title,key:t})})
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:styles.contentHeading},strings.skillLevelChanges),a)}
t.prototype.renderRecommendations=function e(){var t=this.props,r=t.type,o=t.recommendedTutorials,n=t.onNavigate
if(o.length===0){return null}var l=o.map(function(e,t){return React.createElement("li",{key:t},React.createElement(RecommendationLink,{recommendation:e,onClick:n}))})
var a=r==="subject-challenge"?strings.getRecommendedForSubjectChallenge(o.length):strings.getRecommendedForTest(o.length)
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:[styles.contentHeading,styles.recommendationsHeading]},strings.recommendedLessons),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.recommendationsBody},a),React.createElement("ul",null,l))}
t.prototype.renderAnswers=function e(){var t=this.props,r=t.attemptHistory,o=t.exercises
var n=o.map(function(e){return e.exerciseModel&&(e.exerciseModel.translatedDisplayName||e.exerciseModel.displayName)||""})
var l=r.map(function(e,t){return React.createElement("li",{key:t},React.createElement(_wonderBlocksCoreV.View,{style:styles.answerCard},React.createElement(_wonderBlocksCoreV.View,{style:[styles.row,styles.answerTop]},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,strings.getQuestionNumber(t+1)),React.createElement(_wonderBlocksTypographyV.HeadingXSmall,null,e.correct?React.createElement(Correct,null):React.createElement(Incorrect,null))),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.answersBody},n[t])))})
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:[styles.contentHeading,styles.answersHeading]},strings.reviewAnswers),React.createElement("ul",null,l))}
t.prototype.renderCollectedPoints=function e(){var t=this.props,r=t.attemptHistory,o=t.energyPointsEarned,n=t.oldMasteryMap,l=t.newMasteryMap,a=t.tutorials
var s=r.filter(function(e){return e.correct}).length
var c=r.length
var i=Math.max(0,(0,_masteryUtils.getMasteryPointChange)((0,_masteryUtils.getAllExercises)(a),n,l))
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:[styles.contentHeading,styles.collectedPointsHeading]},strings.collectedPoints),React.createElement(_wonderBlocksCoreV.View,{style:styles.collectedPointsBottomBorder},React.createElement(_wonderBlocksCoreV.View,{style:[styles.row,styles.collectedPointsHeadings]},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,strings.masteryPointsLabel),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i)),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.collectedPointsBody},strings.getMasteryPoints(s,c))),React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,{style:[styles.row,styles.collectedPointsHeadings]},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,strings.energyPointsLabel),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,o)),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.collectedPointsBody},strings.energyPointsForCompletion)))}
t.prototype.render=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.content},this.renderLevelChanges(),this.renderRecommendations(),this.renderAnswers(),this.renderCollectedPoints())}
return t}(React.Component)
exports.default=EndOfQuizSummary
var RecommendationLink=function e(t){var r=t.recommendation,o=t.onClick
return React.createElement(_link2.default,{onClick:function e(){return o(r.slug)}},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.recommendation},r.title))}
var QuestionOutcome=function e(t){var r=t.icon,o=t.label,n=t.color
return React.createElement(_wonderBlocksCoreV.View,{style:styles.row},React.createElement(_wonderBlocksTypographyV.HeadingXSmall,{style:styles.correctLabel},o),React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.correctIcon),color:n,icon:r,size:24}))}
var Correct=function e(){return React.createElement(QuestionOutcome,{label:strings.correct,icon:checkCircleIcon,color:_wonderBlocksColorV2.default.green})}
var Incorrect=function e(){return React.createElement(QuestionOutcome,{label:strings.incorrect,icon:minusSignIcon,color:_wonderBlocksColorV2.default.offBlack32})}
var styles=_aphrodite.StyleSheet.create({content:(_content={flexShrink:0,padding:59},_content[_mediaQueries2.default.smOrSmaller]={padding:32},_content),contentHeading:{color:_wonderBlocksColorV2.default.offBlack50},recommendationsHeading:{paddingTop:32},recommendationsBody:{paddingTop:20,paddingBottom:4},recommendation:{paddingTop:8,paddingBottom:8,color:_wonderBlocksColorV2.default.blue},answersHeading:{paddingTop:32,paddingBottom:6},answerCard:{borderBottom:"1px solid "+_wonderBlocksColorV2.default.offBlack16,paddingTop:18},answerTop:{justifyContent:"space-between",paddingBottom:12},correctLabel:{paddingRight:8,paddingTop:2},correctIcon:{marginTop:-3},answersBody:{paddingBottom:20},collectedPointsHeading:{paddingTop:32},collectedPointsHeadings:{justifyContent:"space-between",paddingTop:16,paddingBottom:4},collectedPointsBody:{color:_wonderBlocksColorV2.default.offBlack50,paddingBottom:20},collectedPointsBottomBorder:{borderBottom:"1px solid "+_wonderBlocksColorV2.default.offBlack16},row:{flexDirection:"row"}})

});
KAdefine("javascript/mastery-package/end-of-quiz-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var strings={retakeQuiz:i18n._("Re-take quiz"),retakeTest:i18n._("Re-take Unit test"),retakeSubjectChallenge:i18n._("Re-take Course challenge"),takeUnitTest:i18n._("Start Unit test"),close:i18n._("Close")}
var retakeTextMap={quiz:strings.retakeQuiz,test:strings.retakeTest,"subject-challenge":strings.retakeSubjectChallenge}
var EndOfQuizFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.getButtons=function e(){var t=this.props,r=t.newMasteryMap,a=t.onClose,o=t.onRetake,n=t.onStartUnitTest,s=t.tutorials,l=t.type
var i=function e(t,r){return React.createElement(_wonderBlocksButtonV2.default,{onClick:t,style:styles.button},r)}
var c=function e(t,r){return React.createElement(_wonderBlocksButtonV2.default,{onClick:t,kind:"tertiary"},r)}
var u=(0,_masteryUtils.getAllExercises)(s)
var d=(0,_masteryUtils.getProficientExercises)(s,r)
var p=(0,_masteryUtils.getMasteredExercises)(s,r)
var k=retakeTextMap[l]
var y=strings.close,v=strings.takeUnitTest
var B=React.createElement(_wonderBlocksCoreV.View,{style:styles.verticalSeparator})
if(l==="quiz"){if(d.length/u.length>.7){return{primaryButton:i(n,v),secondaryButton:c(a,y),verticalSeparator:B}}else{return{primaryButton:i(a,y),secondaryButton:c(o,k),verticalSeparator:B}}}else{if(p.length<u.length){return{primaryButton:i(o,k),secondaryButton:c(a,y),verticalSeparator:B}}else if(u.length===p.length){return{primaryButton:i(a,y)}}else{return{primaryButton:i(a,y),secondaryButton:c(o,k),verticalSeparator:B}}}}
t.prototype.render=function e(){var t=this.getButtons(),r=t.secondaryButton,a=t.primaryButton,o=t.verticalSeparator
return React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},r,o,a)}
return t}(React.Component)
exports.default=EndOfQuizFooter
var styles=_aphrodite.StyleSheet.create({footer:{flexGrow:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},verticalSeparator:{width:1,marginLeft:20,marginRight:20,backgroundColor:_wonderBlocksColorV2.default.offBlack16,height:40},button:{minWidth:138}})

});
KAdefine("javascript/mastery-package/quiz-summary-row.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var DownArrow=function e(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"13",viewBox:"0 0 10 13"},React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-27 -27)"},React.createElement("path",{fill:"#D92916",d:"M31 34v-7h2v7h4l-5 6-5-6h4z"})))}
var UpArrow=function e(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"13",viewBox:"0 0 10 13"},React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-14 -27)"},React.createElement("path",{fill:"#00A60E",d:"M18 33v7h2v-7h4l-5-6-5 6h4z"})))}
var RightArrow=function e(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"13",viewBox:"0 0 10 13",style:{transform:"rotate(90deg)"}},React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-14 -27)"},React.createElement("path",{fill:_wonderBlocksColorV2.default.offBlack32,d:"M18 33v7h2v-7h4l-5-6-5 6h4z"})))}
var QuizSummaryRow=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.maybeRenderLevelChange=function e(){var t=this.props,r=t.levelChange,l=t.endLevel
return r!=null&&l&&React.createElement(_wonderBlocksCoreV.View,{style:styles.row},React.createElement(_wonderBlocksCoreV.View,{style:styles.arrow},r<0&&React.createElement(DownArrow,null),r>0&&React.createElement(UpArrow,null),r===0&&React.createElement(RightArrow,null)),React.createElement(_smallMasteryIndicator2.default,{level:l}))}
t.prototype.render=function e(){var t=this.props,r=t.startLevel,l=t.title
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.row,styles.contentRow]},React.createElement(_wonderBlocksTypographyV.LabelMedium,{style:styles.rowText},l),React.createElement(_smallMasteryIndicator2.default,{level:r}),this.maybeRenderLevelChange())}
return t}(React.Component)
exports.default=QuizSummaryRow
var styles=_aphrodite.StyleSheet.create({contentRow:{minHeight:68,justifyContent:"space-between",borderBottom:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,":last-child":{borderBottom:"none"},padding:"8px 0px"},row:{flexDirection:"row",alignItems:"center"},rowText:{flex:1,paddingRight:16},arrow:{marginLeft:6,marginRight:6}})

});
KAdefine("javascript/mastery-package/small-mastery-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _aphrodite=require("aphrodite")
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _strugglingIndicator=require("./struggling-indicator.jsx")
var _strugglingIndicator2=babelHelpers.interopRequireDefault(_strugglingIndicator)
var i18n=require("../shared-package/i18n.js")
var strugglingIndicatorRadius=3
var constants={viewBoxWidth:20,viewBoxHeight:37}
var defaultProps={darkBackground:false,height:constants.viewBoxHeight,level:_masteryUtils.constants.UNFAMILIAR,width:constants.viewBoxWidth}
exports.default=function(e){var t=babelHelpers.extends({},defaultProps,e)
var r=t.darkBackground,a=t.height,l=t.level,s=t.style,o=t.width
var i=constants.viewBoxWidth,n=constants.viewBoxHeight
var c=r?styles.emptyDark:styles.emptyLight
var d=indicatorParts(l,c),u=d.bottomStyle,p=d.middleStyle,y=d.topStyle,g=d.showStrugglingIndicator
var h=_masteryUtils.levelPointsMap[l]
var m=i18n._("%(num)s out of 100 Mastery points",{num:h})
var v=function e(){return(0,_strugglingIndicator2.default)({radius:strugglingIndicatorRadius,width:16,height:34,offset:2})}
return React.createElement("svg",{"aria-label":m,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":h,className:(0,_aphrodite.css)(styles.indicator,s),xmlns:"http://www.w3.org/2000/svg",width:o,height:a,role:"progressbar",title:m,viewBox:"-3 0 "+i+" "+n},React.createElement("rect",{className:(0,_aphrodite.css)(u),x:"0",y:"18",width:"14",height:"14"}),React.createElement("rect",{className:(0,_aphrodite.css)(p),x:"0",y:"8",width:"14",height:"8"}),React.createElement("rect",{className:(0,_aphrodite.css)(styles.bottomBar),x:"0",y:"30",width:"14",height:"2"}),React.createElement("polygon",{className:(0,_aphrodite.css)(y),points:"14 0 10.131 3.774 7 0 3.868 3.775 0 0 0 6 14 6"}),g&&React.createElement(v,null))}
var styles=_aphrodite.StyleSheet.create({indicator:{fill:_wonderBlocksColorV2.default.white},purple:{fill:_wonderBlocksColorV2.default.purple,fillOpacity:1},emptyLight:{fill:_wonderBlocksColorV2.default.offBlack,fillOpacity:.16},emptyDark:{fill:_wonderBlocksColorV2.default.white,fillOpacity:.3},bottomBar:{fill:_wonderBlocksColorV2.default.offBlack64}})
var indicatorParts=function e(t,r){switch(t){case _masteryUtils.constants.UNFAMILIAR:return{bottomStyle:r,middleStyle:r,topStyle:r}
case _masteryUtils.constants.ATTEMPTED:return{bottomStyle:r,middleStyle:r,topStyle:r,showStrugglingIndicator:true}
case _masteryUtils.constants.FAMILIAR:return{bottomStyle:styles.purple,middleStyle:r,topStyle:r}
case _masteryUtils.constants.PROFICIENT:return{bottomStyle:styles.purple,middleStyle:styles.purple,topStyle:r}
default:return{bottomStyle:styles.purple,middleStyle:styles.purple,topStyle:styles.purple}}}

});
KAdefine("javascript/mastery-package/medium-mastery-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _strugglingIndicator=require("./struggling-indicator.jsx")
var _strugglingIndicator2=babelHelpers.interopRequireDefault(_strugglingIndicator)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var constants={bottomHeight:37,middleHeight:23,topHeight:20,indicatorWidth:40,verticalGap:5,viewBoxWidth:114,viewBoxHeight:95}
exports.default=function(e){var t=e.level,r=e.style
var a=(0,_masteryUtils.getLevelIndex)(t)
var c=_masteryUtils.levelPointsMap[t]
var i=i18n._("%(num)s out of 100 Mastery points",{num:c})
return React.createElement(_wonderBlocksCoreV.View,{"aria-label":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,role:"progressbar",style:[styles.wrapper,r],title:i},React.createElement(_wonderBlocksCoreV.View,{style:styles.graphicContainer},t==="mastered"?React.createElement(MasteredTop,null):React.createElement(Top,null),React.createElement(_strut2.default,{size:constants.verticalGap}),a>2?React.createElement(_wonderBlocksCoreV.View,{style:[styles.middleBlock,styles.block]}):React.createElement(Middle,null),React.createElement(_strut2.default,{size:constants.verticalGap}),a>1?React.createElement(_wonderBlocksCoreV.View,{style:[styles.bottomBlock,styles.block]}):React.createElement(Bottom,{level:t})))}
var stop="4px"
var shadowOverlay=_wonderBlocksColorV2.default.offBlack64+", "+_wonderBlocksColorV2.default.offBlack64+" "+stop
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"inline-block"},graphicContainer:{display:"flex",flexDirection:"column"},bottomBlock:{background:"linear-gradient(to top, "+shadowOverlay+", transparent "+stop+")",borderRadius:2,height:constants.bottomHeight,width:constants.indicatorWidth},middleBlock:{borderRadius:2,height:constants.middleHeight,width:constants.indicatorWidth},block:{backgroundColor:_wonderBlocksColorV2.default.purple}})
var strugglingIndicatorRadius=8
var Bottom=function e(t){var r=t.level
var a=constants.viewBoxWidth+strugglingIndicatorRadius
var c=constants.viewBoxHeight+strugglingIndicatorRadius
var i=r===_masteryUtils.constants.ATTEMPTED
var l=function e(){return(0,_strugglingIndicator2.default)({radius:strugglingIndicatorRadius,width:constants.viewBoxWidth,height:constants.viewBoxHeight,offset:1})}
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"43",height:"37",viewBox:"0 0 "+a+" "+c,fill:"#FFF"},React.createElement("rect",{width:"8",height:"3",y:"92",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",y:"87",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",y:"92",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",y:"87",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"92",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"51",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"69",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"15",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"11",height:"3",x:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"51",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"69",rx:"1.5"}),i&&React.createElement(l,null))}
var Middle=function e(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:constants.indicatorWidth,height:constants.middleHeight,viewBox:"0 0 "+constants.viewBoxWidth+" 59",fill:"#FFF"},React.createElement("rect",{width:"8",height:"3",y:"56",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",y:"51",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",y:"56",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",y:"51",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"8",height:"3",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"11",height:"3",x:"51",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"69",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"87",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"33",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"56",rx:"1.5"}),React.createElement("rect",{width:"3",height:"8",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"3",height:"11",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"33",rx:"1.5"}))}
var Top=function e(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:constants.indicatorWidth,height:constants.topHeight,viewBox:"0 0 "+constants.viewBoxWidth+" 55",fill:"#FFF"},React.createElement("path",{fillOpacity:".5",d:"M114 53.5v-5a1.5 1.5 0 1 0-3 0V52h-3.5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5z"}),React.createElement("g",{fillOpacity:".64"},React.createElement("rect",{width:"3",height:"11",x:"111",y:"29",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"29",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"52",rx:"1.5"}),React.createElement("path",{fillRule:"nonzero",d:"M3.607 19.96a1.5 1.5 0 0 1-3 .08l-.106-4a1.5 1.5 0 0 1 2.158-1.388l3 1.467a1.5 1.5 0 0 1-1.318 2.695l-.775-.379.04 1.525zM110.394 19.96a1.5 1.5 0 0 0 2.999.08l.107-4a1.5 1.5 0 0 0-2.159-1.388l-3 1.467a1.5 1.5 0 0 0 1.318 2.695l.776-.379-.041 1.525zM15.38 23.366a1.5 1.5 0 1 1 1.24-2.732l4.617 2.099a1.5 1.5 0 0 1-1.241 2.731l-4.617-2.098zM99.738 23.366a1.5 1.5 0 1 0-1.242-2.732l-4.616 2.099a1.5 1.5 0 0 0 1.241 2.731l4.617-2.098zM35.834 26.057a1.5 1.5 0 1 1 2.332 1.886l-2.425 3a1.5 1.5 0 0 1-1.768.431l-3.575-1.565a1.5 1.5 0 0 1 1.204-2.748l2.526 1.106 1.706-2.11zM83.338 27.204a1.5 1.5 0 0 1 1.174 2.76l-3.55 1.51a1.5 1.5 0 0 1-1.763-.45l-2.421-3.06a1.5 1.5 0 1 1 2.352-1.86l1.711 2.162 2.497-1.062zM45.121 18.997a1.5 1.5 0 0 1-2.242-1.994l3.496-3.933a1.5 1.5 0 1 1 2.242 1.993l-3.496 3.934zM70.875 18.997a1.5 1.5 0 0 0 2.242-1.994l-3.496-3.933a1.5 1.5 0 1 0-2.242 1.993l3.496 3.934zM57.5 4.343L56.152 5.96a1.5 1.5 0 1 1-2.304-1.92l2.5-3a1.5 1.5 0 0 1 2.304 0l2.5 3a1.5 1.5 0 0 1-2.304 1.92L57.5 4.343z"}),React.createElement("path",{d:"M0 53.5v-5a1.5 1.5 0 0 1 3 0V52h3.5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 0 53.5z"})))}
var MasteredTop=function e(){return React.createElement("svg",{width:constants.indicatorWidth,height:constants.topHeight,viewBox:"0 0 "+constants.viewBoxWidth+" 55",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{id:"final",fillRule:"evenodd"},React.createElement("path",{fill:_wonderBlocksColorV2.default.purple,d:"M110.85 14.506L83.314 33.88a1 1 0 0 1-1.391-.239L58.63.828a2 2 0 0 0-3.262 0L32.077 33.64a1 1 0 0 1-1.391.24L3.15 14.505A2 2 0 0 0 0 16.142v36.172h114V16.142a2 2 0 0 0-3.15-1.636z"})))}

});
KAdefine("javascript/mastery-package/large-mastery-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _strugglingIndicator=require("./struggling-indicator.jsx")
var _strugglingIndicator2=babelHelpers.interopRequireDefault(_strugglingIndicator)
var i18n=require("../shared-package/i18n.js")
var defaultConstants={bottomHeight:95,bottomShadow:12,middleHeight:59,topHeight:55,indicatorWidth:114,verticalGap:12,strugglingIndicatorRadius:8}
var getConstants=function e(t){var r=(t||defaultConstants.indicatorWidth)/defaultConstants.indicatorWidth
return Object.entries(defaultConstants).reduce(function(e,t){var a
var i=t[0],c=t[1]
return babelHelpers.extends({},e,(a={},a[i]=r*c,a))},babelHelpers.extends({},defaultConstants))}
exports.default=function(e){var t=e.level,r=e.width
var a=(0,_masteryUtils.getLevelIndex)(t)
var i=_masteryUtils.levelPointsMap[t]
var c=i18n._("%(num)s out of 100 Mastery points",{num:i})
var l=getConstants(r)
var n=getDynamicStyles(r)
return React.createElement(_wonderBlocksCoreV.View,{"aria-label":c,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":i,role:"progressbar",title:c},t==="mastered"?React.createElement(MasteredTop,{level:t,width:r}):React.createElement(Top,{level:t,width:r}),React.createElement(_strut2.default,{size:l.verticalGap}),a>2?React.createElement(_wonderBlocksCoreV.View,{style:[n.middleBlock,styles.block]}):React.createElement(Middle,{level:t,width:r}),React.createElement(_strut2.default,{size:l.verticalGap}),a>1?React.createElement(_wonderBlocksCoreV.View,{style:[n.bottomBlock,styles.block]}):React.createElement(Bottom,{level:t,width:r}))}
var styles=_aphrodite.StyleSheet.create({block:{backgroundColor:_wonderBlocksColorV2.default.purple}})
var getDynamicStyles=function e(t){var r=getConstants(t)
var a=r.bottomShadow
var i=_wonderBlocksColorV2.default.offBlack64+", "+_wonderBlocksColorV2.default.offBlack64+" "+a+"px"
return _aphrodite.StyleSheet.create({middleBlock:{borderRadius:2,height:r.middleHeight,width:r.indicatorWidth},bottomBlock:{borderRadius:2,height:r.bottomHeight,width:r.indicatorWidth,background:"linear-gradient(to top, "+i+", transparent "+a+"px)"}})}
var Bottom=function e(t){var r=t.level,a=t.width
var i=getConstants(a)
var c=i.indicatorWidth+i.strugglingIndicatorRadius
var l=defaultConstants.indicatorWidth+defaultConstants.strugglingIndicatorRadius
var n=i.bottomHeight+i.strugglingIndicatorRadius
var h=defaultConstants.bottomHeight+defaultConstants.strugglingIndicatorRadius
var d="0 0 "+l+" "+h
var o=r===_masteryUtils.constants.ATTEMPTED
var s=function e(){return(0,_strugglingIndicator2.default)({radius:defaultConstants.strugglingIndicatorRadius,width:defaultConstants.indicatorWidth,height:defaultConstants.bottomHeight,offset:1})}
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:n,viewBox:d,fill:"#FFF"},React.createElement("rect",{width:"8",height:"3",y:"92",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",y:"87",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",y:"92",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",y:"87",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"92",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"92",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"51",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"69",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"15",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"11",height:"3",x:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"51",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"69",rx:"1.5"}),o&&React.createElement(s,null))}
var Middle=function e(t){var r=t.width
var a=getConstants(r)
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.indicatorWidth,height:a.middleHeight,viewBox:"0 0 "+defaultConstants.indicatorWidth+" "+defaultConstants.middleHeight,fill:"#FFF"},React.createElement("rect",{width:"8",height:"3",y:"56",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"3",height:"8",y:"51",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",y:"56",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",y:"51",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"8",height:"3",rx:"1.5",transform:"matrix(-1 0 0 1 8 0)"}),React.createElement("rect",{width:"11",height:"3",x:"51",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"69",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"87",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"33",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"56",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"56",rx:"1.5"}),React.createElement("rect",{width:"3",height:"8",rx:"1.5"}),React.createElement("rect",{width:"8",height:"3",x:"106",rx:"1.5",transform:"matrix(-1 0 0 1 220 0)"}),React.createElement("rect",{width:"3",height:"8",x:"111",rx:"1.5",transform:"matrix(-1 0 0 1 225 0)"}),React.createElement("rect",{width:"3",height:"11",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"33",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"15",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",x:"111",y:"33",rx:"1.5"}))}
var Top=function e(t){var r=t.width
var a=getConstants(r)
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.indicatorWidth,height:a.topHeight,viewBox:"0 0 "+defaultConstants.indicatorWidth+" "+defaultConstants.topHeight,fill:"#FFF"},React.createElement("path",{fillOpacity:".5",d:"M114 53.5v-5a1.5 1.5 0 1 0-3 0V52h-3.5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5z"}),React.createElement("g",{fillOpacity:".64"},React.createElement("rect",{width:"3",height:"11",x:"111",y:"29",rx:"1.5"}),React.createElement("rect",{width:"3",height:"11",y:"29",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"52",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"70",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"88",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"15",y:"52",rx:"1.5"}),React.createElement("rect",{width:"11",height:"3",x:"34",y:"52",rx:"1.5"}),React.createElement("path",{fillRule:"nonzero",d:"M3.607 19.96a1.5 1.5 0 0 1-3 .08l-.106-4a1.5 1.5 0 0 1 2.158-1.388l3 1.467a1.5 1.5 0 0 1-1.318 2.695l-.775-.379.04 1.525zM110.394 19.96a1.5 1.5 0 0 0 2.999.08l.107-4a1.5 1.5 0 0 0-2.159-1.388l-3 1.467a1.5 1.5 0 0 0 1.318 2.695l.776-.379-.041 1.525zM15.38 23.366a1.5 1.5 0 1 1 1.24-2.732l4.617 2.099a1.5 1.5 0 0 1-1.241 2.731l-4.617-2.098zM99.738 23.366a1.5 1.5 0 1 0-1.242-2.732l-4.616 2.099a1.5 1.5 0 0 0 1.241 2.731l4.617-2.098zM35.834 26.057a1.5 1.5 0 1 1 2.332 1.886l-2.425 3a1.5 1.5 0 0 1-1.768.431l-3.575-1.565a1.5 1.5 0 0 1 1.204-2.748l2.526 1.106 1.706-2.11zM83.338 27.204a1.5 1.5 0 0 1 1.174 2.76l-3.55 1.51a1.5 1.5 0 0 1-1.763-.45l-2.421-3.06a1.5 1.5 0 1 1 2.352-1.86l1.711 2.162 2.497-1.062zM45.121 18.997a1.5 1.5 0 0 1-2.242-1.994l3.496-3.933a1.5 1.5 0 1 1 2.242 1.993l-3.496 3.934zM70.875 18.997a1.5 1.5 0 0 0 2.242-1.994l-3.496-3.933a1.5 1.5 0 1 0-2.242 1.993l3.496 3.934zM57.5 4.343L56.152 5.96a1.5 1.5 0 1 1-2.304-1.92l2.5-3a1.5 1.5 0 0 1 2.304 0l2.5 3a1.5 1.5 0 0 1-2.304 1.92L57.5 4.343z"}),React.createElement("path",{d:"M0 53.5v-5a1.5 1.5 0 0 1 3 0V52h3.5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 0 53.5z"})))}
var MasteredTop=function e(t){var r=t.width
var a=getConstants(r)
return React.createElement("svg",{width:a.indicatorWidth,height:a.topHeight,viewBox:"0 0 "+defaultConstants.indicatorWidth+" "+defaultConstants.topHeight,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{id:"final",fillRule:"evenodd"},React.createElement("path",{fill:_wonderBlocksColorV2.default.purple,d:"M110.85 14.506L83.314 33.88a1 1 0 0 1-1.391-.239L58.63.828a2 2 0 0 0-3.262 0L32.077 33.64a1 1 0 0 1-1.391.24L3.15 14.505A2 2 0 0 0 0 16.142v36.172h114V16.142a2 2 0 0 0-3.15-1.636z"})))}

});
KAdefine("javascript/mastery-package/labeled-small-mastery-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _smallMasteryIndicator=require("./small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var i18n=require("../shared-package/i18n.js")
var constants={wrapperWidth:72}
var pointValues={unfamiliar:i18n._("0/100"),attempted:i18n._("0/100"),familiar:i18n._("50/100"),proficient:i18n._("80/100"),mastered:i18n._("100/100")}
exports.default=function(e){var r=e.level
var a=r==="unfamiliar"
var t=pointValues[r]
var l=i18n.$_("%(points)s points",{points:t})
return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_smallMasteryIndicator2.default,{level:r,width:20,height:35}),React.createElement(_strut2.default,{size:5}),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:[styles.label,a&&styles.labelNoPoints]},l))}
var styles=_aphrodite.StyleSheet.create({wrapper:{justifyContent:"flex-start",alignItems:"center",width:constants.wrapperWidth},label:{textAlign:"center"},labelNoPoints:{color:_wonderBlocksColorV2.default.offBlack50}})

});
KAdefine("javascript/mastery-package/start-of-exercise-cards-seen.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.forTestingOnly=exports.markStartOfExerciseCardSeen=exports.hasSeenStartOfExerciseCard=undefined
var _localStore=require("../shared-package/local-store.js")
var _localStore2=babelHelpers.interopRequireDefault(_localStore)
var localStoreKey="startOfExerciseCardsSeen"
var getAll=function e(){return _localStore2.default.get(localStoreKey)||{}}
var get=function e(r){var t=r.unitId,a=r.level
var l=getAll()
var o=l[t]||{}
return!!o[a]}
var add=function e(r){var t,a
var l=r.unitId,o=r.level
var n=getAll()
var s=n[l]||{}
_localStore2.default.set(localStoreKey,babelHelpers.extends({},n,(a={},a[l]=babelHelpers.extends({},s,(t={},t[o]=1,t)),a)))}
var clear=function e(){return _localStore2.default.set(localStoreKey,{})}
var hasSeenStartOfExerciseCard=exports.hasSeenStartOfExerciseCard=function e(r){return get(r)}
var markStartOfExerciseCardSeen=exports.markStartOfExerciseCardSeen=function e(r){return add(r)}
var forTestingOnly=exports.forTestingOnly={add:add,clear:clear,get:get,getAll:getAll,localStoreKey:localStoreKey}

});
KAdefine("javascript/mastery-package/vertical-progress-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../shared-package/i18n.js")
var VerticalProgressIndicator=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getPercentCompleted=function e(){var r=this.props,a=r.fillLevel,l=r.regions
var t=0
var o=0
l.forEach(function(e,r){t+=l.length-r<=a?e.size:0
o+=e.size})
return l.length===0?0:Math.round(t*100/o)}
r.prototype.render=function e(){var r=this.props,a=r.labelText,l=r.labelType,t=r.width,o=r.height,s=r.emptyColor,i=r.fillColor,n=r.fillLevel,c=r.regions
var d=this.getPercentCompleted()
var p=i18n._("%(num)s out of 100 Mastery points",{num:d})
return React.createElement("div",{"aria-label":p,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":d,className:(0,_aphrodite.css)(styles.container),role:"progressbar",title:p},React.createElement("div",{className:(0,_aphrodite.css)(styles.regions),style:{width:t,height:o}},c.map(function(e,r,t){var o=e.size
var c=t.length
var d=c-r
var p=d<=n?i:s
return React.createElement("div",{key:r,style:{flex:o,backgroundColor:p},className:(0,_aphrodite.css)(styles.bar)},d===n&&l==="side"&&React.createElement("div",{className:(0,_aphrodite.css)(styles.label,styles.labelSide)},React.createElement("div",{className:(0,_aphrodite.css)(styles.labelSideIndicator),style:{backgroundColor:p}}),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.label},a)))})),l==="bottom"&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.label},a))}
return r}(_react.Component)
VerticalProgressIndicator.defaultProps={emptyColor:_wonderBlocksColorV2.default.offBlack16}
var styles=_aphrodite.StyleSheet.create({container:{alignItems:"center",display:"flex",flexDirection:"column"},regions:{display:"flex",flexDirection:"column"},bar:{marginTop:1,position:"relative"},label:{color:_wonderBlocksColorV2.default.offBlack64,display:"flex"},labelSide:{left:"100%",marginTop:0,position:"absolute",top:0},labelSideIndicator:{height:1,marginRight:"0.5em",width:20}})
exports.default=VerticalProgressIndicator

});
KAdefine("javascript/mastery-package/get-end-of-course-challenge-copy.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var CONGRATULATE_AT_PERCENT=90
var strings={questionsCorrect:function e(t,n){return i18n._("You got %(numCorrect)s/%(numTotal)s questions correct.",{numCorrect:t,numTotal:n})},subtitleCongratulate:function e(t){return i18n.ngettext("Amazing work! You leveled up on %(num)s skill.","Amazing work! You leveled up on %(num)s skills.",t)},subtitleDefault:function e(t){return i18n.ngettext("You leveled up on %(num)s skill.","You leveled up on %(num)s skills.",t)},titleCongratulate:function e(t){return i18n._("You scored %(percentage)s% on the Course challenge!",{percentage:t})},titleDefault:function e(t){return i18n._("You scored %(percentage)s% on the Course challenge.",{percentage:t})}}
var getTitle=function e(t){return t>=CONGRATULATE_AT_PERCENT?strings.titleCongratulate(t):strings.titleDefault(t)}
var getSubtitle=function e(t,n){return t>=CONGRATULATE_AT_PERCENT?strings.subtitleCongratulate(n):strings.subtitleDefault(n)}
exports.default=function(e,t,n){var r=(0,_masteryUtils.getRoundedPercent)(t,n)
return{title:getTitle(r),subtitle:getSubtitle(r,e),scoreSummary:strings.questionsCorrect(t,n),footer:""}}

});
KAdefine("javascript/mastery-package/get-end-of-quiz-test-copy.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var i18n=require("../shared-package/i18n.js")
var strings={getLeveledUpTitle:function e(t){return i18n.ngettext("%(num)s skill leveled up!","%(num)s skills leveled up!",t)},getLeveledUpSkills:function e(t){return i18n.ngettext("You leveled up on %(num)s skill ","You leveled up on %(num)s skills ",t)},getPointsCollected:function e(t){return i18n.ngettext("and collected %(num)s Mastery point","and collected %(num)s Mastery points",t)},getLeveledDownTitle:function e(t){return i18n.ngettext("%(num)s skill leveled down!","%(num)s skills leveled down!",t)},getLeveledUpDownTitle:function e(t,n){return i18n.ngettext("You leveled up on %(num)s skill and ","You leveled up on %(num)s skills and ",t)+i18n.ngettext("leveled down on %(num)s skill","leveled down on %(num)s skills",n)},getLevelMaintainedTitle:function e(t,n){return i18n.ngettext("You maintained your level on %(num)s skill and ","You maintained your level on %(num)s skills and ",t)+i18n.ngettext("leveled down on %(num)s skill","leveled down on %(num)s skills",n)},getLeveledDownSkills:function e(t){return i18n.ngettext("You leveled down on %(num)s skill ","You leveled down on %(num)s skills ",t)},getPointsLost:function e(t){return i18n.ngettext("and lost %(num)s Mastery point","and lost %(num)s Mastery points",t)},skillDidntLevelUp:i18n._("Skills didn’t level up"),skillDidntLevelUpDesc:i18n._("You didn’t level up on any skills this time. Try again to make more progress"),youGotQuestionCorrect:function e(t){return i18n.ngettext("You got %(num)s question correct","You got %(num)s questions correct",t)},takeUnitTestToLevelUp:i18n._("Do this quiz again to level up on more skills. Take the Unit Test to level up on all non-mastered skills"),reviewRecommendations:i18n._("Review the Recommended Lessons before you take the Unit Test again"),makeSureYouUnderstand:i18n._("Review the Recommended Lessons & Skills Practice to make sure you understand the material"),takeTheTestAgain:i18n._("Take the Unit Test again to level up on all non-mastered skills")}
var getTitle=function e(t,n,l,s){if(t>0){return strings.getLeveledUpTitle(n)}else if(t<0){if(n>0){return strings.getLeveledUpDownTitle(n,l)}else if(s>0){return strings.getLevelMaintainedTitle(s,l)}else{return strings.getLeveledDownTitle(l)}}else if(t===0){return strings.skillDidntLevelUp}else{return""}}
var getBodyLevelText=function e(t,n,l,s){if(s||t>0){return strings.getLeveledUpSkills(n)}else if(t<0){return strings.getLeveledDownSkills(l)}else{return""}}
var getBodyPointsText=function e(t,n){if(n&&t>0){return strings.getPointsCollected(t)}else if(t<0){return strings.getPointsLost(-t)}else if(t===0){return strings.skillDidntLevelUpDesc}else{return""}}
var getSubtitle=function e(t,n,l,s){var i=getBodyLevelText(t,n,l,s)
var o=getBodyPointsText(t,s)
return i+o}
var getFooter=function e(t,n){if(n==="quiz"){if(t>0){return strings.takeUnitTestToLevelUp}else if(t<0){return strings.reviewRecommendations}else{return strings.makeSureYouUnderstand}}else if(n==="test"){return strings.takeTheTestAgain}else{return""}}
exports.default=function(e,t,n,l,s,i,o){return{title:getTitle(t,l,s,i),subtitle:getSubtitle(t,l,s,n),scoreSummary:strings.youGotQuestionCorrect(o),footer:getFooter(t,e)}}

});
KAdefine("javascript/mastery-package/sidebar-copy-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getTestOrChallengeDescription=exports.getQuizDescription=undefined
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var strings={quizNull:i18n._("Practice what you’ve learned, and level up on the above skills"),quizTakeAgain:i18n._("Take quiz again to level up in more skills"),unitTestNull:i18n._("Test your knowledge of all skills in this unit"),unitTestTakeAgain:i18n._("Take unit test again to level up in more skills"),subjectChallengeNull:i18n._("Test your knowledge of the skills in this course."),subjectChallengeTakeAgain:i18n._("Try again to see if you can improve your score."),subjectChallengeComplete:i18n._("Amazing work!")}
var getQuizDescription=exports.getQuizDescription=function e(t,s,i){var r=(0,_masteryUtils.areAllExercisesProficientOrAboveForQuiz)(t,s)
if(t.score==null){return{scoreText:null,dateText:null,copy:strings.quizNull}}var l=(0,_masteryUtils.getScoreAndDateText)(t.score,i),n=l.scoreText,a=l.dateText
if(!r){return{scoreText:n,dateText:a,copy:strings.quizTakeAgain}}return{scoreText:n,dateText:a,copy:null}}
var getTestOrChallengeDescription=exports.getTestOrChallengeDescription=function e(t,s,i){var r=t.type,l=t.score
if(l==null){var n=(0,_masteryUtils.isCourseChallengeType)(r)?strings.subjectChallengeNull:strings.unitTestNull
return{scoreText:null,dateText:null,copy:n}}else{var a=function e(){if((0,_masteryUtils.isCourseChallengeType)(r)){return(0,_masteryUtils.isCourseChallengeComplete)(l)?strings.subjectChallengeComplete:strings.subjectChallengeTakeAgain}else{return s?null:strings.unitTestTakeAgain}}
return babelHelpers.extends({},(0,_masteryUtils.getScoreAndDateText)(l,i),{copy:a()})}}

});
KAdefine("javascript/content-library-package/redux/modal-navigator-types.js", function(require, module, exports) {

});
KAdefine("javascript/mastery-package/mastery-topic-unit-progress-bar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.motionSpring=exports.mountSpring=undefined
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _aphrodite=require("aphrodite")
var _reactMotion=require("react-motion")
var _a11y=require("../shared-styles-package/a11y.js")
var _a11y2=babelHelpers.interopRequireDefault(_a11y)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _resizeWatcher=require("../components/resize-watcher-package/resize-watcher.jsx")
var _resizeWatcher2=babelHelpers.interopRequireDefault(_resizeWatcher)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var mountSpring=exports.mountSpring={stiffness:110,damping:18}
var motionSpring=exports.motionSpring={stiffness:240,damping:26}
var BAR_PADDING_LEFT=33
var PADDING_BETWEEN_BARS=8
var LABEL_PADDING_RIGHT=35
var FLAG_WIDTH=15
var MARGIN_BETWEEN_FLAG_AND_BAR=8
var completeFlag=_react2.default.createElement("svg",{width:FLAG_WIDTH,height:"16",viewBox:"0 0 15 16"},_react2.default.createElement("g",{fill:"#FFB100",fillRule:"evenodd"},_react2.default.createElement("path",{d:"M14.265 0H0v12h14.265l-3.227-6z"}),_react2.default.createElement("path",{d:"M0 0h2v16H0z"})))
var incompleteFlag=_react2.default.createElement("svg",{width:FLAG_WIDTH,height:"16",viewBox:"0 0 15 16"},_react2.default.createElement("path",{fill:"#21242C",fillOpacity:"0.2",fillRule:"evenodd",d:"M2 12v4H0V0h14.265l-3.227 6 3.227 6H2z"}))
var chevronRight={path:"M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z",width:63.034,height:100}
var chevronLeft={path:"M-.013 49.84q0-3.416 2.352-5.824l41.72-41.664q2.352-2.352 5.768-2.352t5.824 2.352l4.816 4.816q2.352 2.296 2.352 5.768t-2.352 5.824l-31.136 31.08 31.136 31.08q2.352 2.408 2.352 5.824t-2.352 5.768l-4.816 4.76q-2.296 2.352-5.768 2.352t-5.824-2.352l-41.72-41.664q-2.352-2.352-2.352-5.768z",width:63.069,height:100}
var labelMeasurements={}
function getLabelMeasurement(e){if(!e){return 0}var t=e.innerText
if(!(t in labelMeasurements)){var r=e.getBoundingClientRect()
labelMeasurements[t]=r.width}return labelMeasurements[t]}var MasterySection=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){this.labelNode=_reactDom2.default.findDOMNode(this.labelComponent)}
t.prototype.pointsAtStart=function e(){var t=this.props,r=t.definition,i=t.totalPoints
return r.start*i}
t.prototype.pointsToEnd=function e(){var t=this.props,r=t.definition,i=t.totalPoints
return r.end*i}
t.prototype.pointsToReach=function e(){var t=this.props.points
var r=t>=this.pointsAtStart()?0:this.pointsAtStart()-t
return parseInt(r)}
t.prototype.getProgressWidthPercent=function e(){var t=this.props.points
var r=(t-this.pointsAtStart())/(this.pointsToEnd()-this.pointsAtStart())
var i=r*100
if(i<0){return 0}if(i>100){return 100}return i||0}
t.prototype.hasThisLevelBeenReached=function e(){var t=this.props,r=t.definition,i=t.points
var o=this.pointsToReach()
if(r.start===_masteryUtils.masteryLevelDefinitions[0].start){return i>0}return o===0}
t.prototype.getFlag=function e(){return this.hasThisLevelBeenReached()?completeFlag:incompleteFlag}
t.prototype.measureLabelWidth=function e(){return getLabelMeasurement(this.labelNode)}
t.prototype.measureProgressBarWidth=function e(){if(!this.filledBarNode){return 0}var t=this.filledBarNode.getBoundingClientRect()
return t.width}
t.prototype.renderProgressBar=function e(){var t=this
var r=this.props.onScrollRest
var i=this.getProgressWidthPercent()
var o=function e(r){var i=t.measureProgressBarWidth()
var o=r*i/100
return{clip:"rect(0px, "+o+"px, 16px, 0px)"}}
var a=parseInt(i)
var n=a+"%"
return _react2.default.createElement(_reactMotion.Motion,{defaultStyle:{width:0},style:{width:(0,_reactMotion.spring)(i,this.props.spring)},onRest:r},function(e){return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.bar),role:"progressbar","aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100","aria-label":n,title:n},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.barBackground)}),_react2.default.createElement("div",{ref:function e(r){return t.filledBarNode=r},className:(0,_aphrodite.css)(styles.barFilled),style:o(e.width)}))})}
t.prototype.render=function e(){var t=this
var r=this.props,i=r.definition,o=r.width,a=r.isCurrent,n=r.engaged,s=r.showBar
var l=this.pointsToReach()
var c=l>0&&s?i18n._("%(points)s points to %(title)s",{points:l,title:i.title}):i.title
var u=this.hasThisLevelBeenReached()?i18n._("You've reached %(level)s.",{level:i.title}):i18n._("You haven't reached %(level)s yet",{level:i.title})
var p=n?styles.sectionTitle:styles.sectionTitleDisengaged
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.masterySection),style:{width:o},"aria-current":a,"aria-label":u,title:u},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.barContainer)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.flag)},this.getFlag()),s&&this.renderProgressBar()),_react2.default.createElement("div",null,_react2.default.createElement(_wonderBlocksTypographyV.LabelSmall,{ref:function e(r){return t.labelComponent=r},style:[p,!s&&styles.sectionTitleRightJustified]},c)))}
return t}(_react.Component)
var MasteryTopicUnitProgressBar=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,o
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,n=Array(a),s=0;s<a;s++){n[s]=arguments[s]}return o=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),i),i.state={currentPosition:0,initialAnimationComplete:false},i.sectionComponents=[],i.handleScrollKeys=function(e){if(e.key==="ArrowLeft"){i.scrollLeft()}else if(e.key==="ArrowRight"){i.scrollRight()}},r),babelHelpers.possibleConstructorReturn(i,o)}t.prototype.UNSAFE_componentWillMount=function e(){this.updateCurrentPosition()}
t.prototype.componentDidMount=function e(){var t=this.props,r=t.points,i=t.totalPoints
var o=(0,_masteryUtils.getMasteryLevel)(r,i)
if(o===_masteryUtils.masteryLevelDefinitions[0]){this.initialTransitionIsComplete()}}
t.prototype.UNSAFE_componentWillUpdate=function e(t){var r=this.props.points
if(r!==t.points){this.updateCurrentPosition()}}
t.prototype.initialTransitionIsComplete=function e(){var t=this.state.initialAnimationComplete
if(!t){this.setState({initialAnimationComplete:true})}}
t.prototype.updateCurrentPosition=function e(){var t=this
setTimeout(function(){var e=t.props,r=e.points,i=e.totalPoints
var o=(0,_masteryUtils.getMasteryLevel)(r,i)
t.setState({currentPosition:_masteryUtils.masteryLevelDefinitions.indexOf(o)})},0)}
t.prototype.canScrollRight=function e(){var t=this.state.currentPosition
return t<_masteryUtils.masteryLevelDefinitions.length-2}
t.prototype.scrollRight=function e(){var t=this.state.currentPosition
if(this.canScrollRight()){this.setState({currentPosition:t+1})}}
t.prototype.canScrollLeft=function e(){var t=this.state.currentPosition
return t>0}
t.prototype.scrollLeft=function e(){var t=this.state.currentPosition
if(this.canScrollLeft()){this.setState({currentPosition:t-1})}}
t.prototype.measureLabelInSection=function e(t){var r=this.sectionComponents[t]
return r?r.measureLabelWidth():0}
t.prototype.calculateSectionWidths=function e(t){var r=this
return _masteryUtils.masteryLevelDefinitions.reduce(function(e,i,o){var a
var n=r.measureLabelInSection(o+1)
var s=t-BAR_PADDING_LEFT-n-PADDING_BETWEEN_BARS-LABEL_PADDING_RIGHT
if(i.id===_masteryUtils.constants.LEVEL5){var l=_masteryUtils.masteryLevelDefinitions[0]
var c=(i.end-i.start)/(l.end-l.start)
s=s*c}if(i.id===_masteryUtils.constants.LEVEL6){s=FLAG_WIDTH+MARGIN_BETWEEN_FLAG_AND_BAR}return babelHelpers.extends({},e,(a={},a[i.id]=s,a))},{})}
t.prototype.getScrollY=function e(t){var r=this.state.currentPosition
var i=this.calculateSectionWidths(t)
var o=0
for(var a=0;a<r;a++){o+=i[_masteryUtils.masteryLevelDefinitions[a].id]+PADDING_BETWEEN_BARS}if(_masteryUtils.masteryLevelDefinitions[r].id!==_masteryUtils.constants.LEVEL5){return-o+BAR_PADDING_LEFT}o+=i[_masteryUtils.constants.LEVEL5]
o+=i[_masteryUtils.constants.LEVEL6]
return-o+t-LABEL_PADDING_RIGHT}
t.prototype.renderScrollButtons=function e(){var t=this
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.scrollButtonsContainer),tabIndex:0,onKeyPress:this.handleScrollKeys,onKeyDown:this.handleScrollKeys,role:"group","aria-label":i18n._("Press left or right to scroll.")},_react2.default.createElement("div",null,_react2.default.createElement("button",{className:(0,_aphrodite.css)(styles.scrollButton,styles.scrollButtonTop),onClick:function e(){return t.scrollRight()},disabled:!this.canScrollRight(),tabIndex:-1,role:"button","aria-label":i18n._("Move right"),title:i18n._("Move right")},_react2.default.createElement(_icon2.default,{icon:chevronRight,size:8,color:this.canScrollRight()?_wonderBlocksColorV2.default.offBlack50:_wonderBlocksColorV2.default.offBlack16,"aria-hidden":true}))),_react2.default.createElement("div",null,_react2.default.createElement("button",{className:(0,_aphrodite.css)(styles.scrollButton,styles.scrollButtonBottom),onClick:function e(){return t.scrollLeft()},disabled:!this.canScrollLeft(),tabIndex:-1,role:"button","aria-label":i18n._("Move left"),title:i18n._("Move left")},_react2.default.createElement(_icon2.default,{icon:chevronLeft,size:8,color:this.canScrollLeft()?_wonderBlocksColorV2.default.offBlack50:_wonderBlocksColorV2.default.offBlack16,"aria-hidden":true}))))}
t.prototype.renderSection=function e(t,r,i){var o=this
var a=this.props,n=a.points,s=a.totalPoints,l=a.onScrollRest
var c=this.state.currentPosition
var u=this.calculateSectionWidths(t)
return _react2.default.createElement("li",{key:r.title,className:(0,_aphrodite.css)(styles.section)},_react2.default.createElement(MasterySection,{ref:function e(t){return o.sectionComponents[i]=t},definition:r,points:n,totalPoints:s,width:u[r.id],isCurrent:c===i,engaged:n>0,showBar:r.id!==_masteryUtils.constants.LEVEL6,spring:this.getSpring(),onScrollRest:l}))}
t.prototype.getSpring=function e(){var t=this.state.initialAnimationComplete
return t?mountSpring:motionSpring}
t.prototype.renderScrollableSection=function e(t){var r=this
var i=_masteryUtils.masteryLevelDefinitions.map(function(e,i){return r.renderSection(t,e,i)})
return _react2.default.createElement(_reactMotion.Motion,{style:{left:(0,_reactMotion.spring)(this.getScrollY(t),this.getSpring())},onRest:function e(){return r.initialTransitionIsComplete()}},function(e){return _react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.sections),style:e},i)})}
t.prototype.render=function e(){var t=this
return _react2.default.createElement(_resizeWatcher2.default,null,function(e){return _react2.default.createElement("nav",{className:(0,_aphrodite.css)(styles.progressBar),role:"navigation","aria-label":i18n._("Unit Level progress"),"aria-describedby":"mastery-topic-unit-progress-description","data-test-id":"mastery-topic-unit-progress-bar"},_react2.default.createElement("span",{id:"mastery-topic-unit-progress-description",className:(0,_aphrodite.css)(_a11y2.default.srOnly)},i18n._("A list of progress levels towards mastery. Each section presents a sub-progress percentage. Once you've reached 100% on each level, you've achieved mastery. Tab to the control panel and use left/right keys to navigate.")),t.renderScrollableSection(e),t.renderScrollButtons())})}
return t}(_react.Component)
MasteryTopicUnitProgressBar.defaultProps={}
var styles=_aphrodite.StyleSheet.create({progressBar:{width:"100%",position:"relative",overflow:"hidden",flexGrow:1,paddingLeft:0,paddingTop:14,backgroundColor:_wonderBlocksColorV2.default.white},sections:{position:"absolute",listStyle:"none",display:"flex",flexDirection:"row"},section:{},scrollButtonsContainer:{position:"absolute",top:8,right:8},scrollButton:{height:26,width:20,borderRadius:4,backgroundColor:"white",border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,cursor:"pointer"},scrollButtonTop:{borderBottomRightRadius:0,borderBottomLeftRadius:0},scrollButtonBottom:{borderTopRightRadius:0,borderTopLeftRadius:0,borderTop:"solid 0px"},sectionTitleDisengaged:{display:"inline",color:_wonderBlocksColorV2.default.offBlack64},sectionTitle:{display:"inline",color:_wonderBlocksColorV2.default.offBlack},sectionTitleRightJustified:{position:"absolute",marginLeft:-3e3,right:18},masterySection:{marginRight:PADDING_BETWEEN_BARS},barContainer:{display:"flex",flexDirection:"row",marginBottom:6},flag:{flexGrow:1},bar:{position:"relative",display:"inline-block",width:"100%",height:16,marginLeft:MARGIN_BETWEEN_FLAG_AND_BAR},barBackground:{position:"absolute",width:"100%",height:"100%",borderRadius:8,backgroundColor:_wonderBlocksColorV2.default.offBlack8},barFilled:{position:"absolute",height:"100%",width:"100%",borderRadius:8,backgroundColor:_wonderBlocksColorV2.default.purple}})
exports.default=MasteryTopicUnitProgressBar

});
KAdefine("javascript/mastery-package/mastery-topic-unit-level-tooltip.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactMotion=require("react-motion")
var _sparkleFrame=require("../components/sparkle-package/sparkle-frame.jsx")
var _sparkleFrame2=babelHelpers.interopRequireDefault(_sparkleFrame)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../shared-package/i18n.js")
var closeIconPath="M6.26353762,4.99851587 L9.73097464,1.53107884 C10.0836373,1.17841618 10.0842213,0.612127047 9.73530496,0.263210718 C9.38395604,-0.0881381913 8.81874474,-0.0837668714 8.46743686,0.267541014 L4.99999981,3.73497806 L1.5325628,0.267541051 C1.1812549,-0.0837668481 0.616043606, -0.0881381955 0.264694717,0.263210694 C-0.0842215912,0.612127004 -0.0836375768,1.17841613 0.269025093,1.5310788 L3.73646206,4.9985158 L0.269025109,8.46595276 C-0.083637537,8.81861541 -0.0842215923, 9.38490462 0.264694642,9.73382106 C0.616043456,10.0851701 1.18125469, 10.0807988 1.53256259,9.72949093 L4.99999988,6.26205363 L8.46743739, 9.72949117 C8.8187453,10.0807991 9.38395655,10.0851704 9.73530537, 9.73382138 C10.0842216,9.38490498 10.0836375,8.81861579 9.73097488, 8.46595313 L6.26353762,4.99851587 Z"
var wait=function e(t){return new Promise(function(e){return setTimeout(e,t)})}
var SPRING_OUT={stiffness:600,damping:60}
var SPRING_IN={stiffness:250,damping:18}
var strings={getHeading:function e(t){return i18n._("Leveled up to %(currentLevel)s!",{currentLevel:t})},getBody:function e(t,r){return i18n._("Congratulations! You’ve reached %(currentLevel)s! Collect %(nextLevelPoints)s points to reach the next level",{currentLevel:t,nextLevelPoints:r})}}
var MasteryTopicUnitLevelTooltip=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),i=0;i<n;i++){s[i]=arguments[i]}return a=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),o),o.state={showSparkles:false,targetOffset:0,stiffness:0,damping:0},r),babelHelpers.possibleConstructorReturn(o,a)}t.prototype.componentDidMount=function e(){this._isMounted=true
if(!_ka2.default.prefersReducedMotion()){this.animateOnMount()}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.safeSetState=function e(t){if(this._isMounted){this.setState(t)}}
t.prototype.animateOnMount=function e(){var t=this
wait(100).then(function(){return t.safeSetState(babelHelpers.extends({targetOffset:50},SPRING_OUT))}).then(function(){return wait(100)}).then(function(){return t.safeSetState(babelHelpers.extends({targetOffset:0},SPRING_IN))}).then(function(){return wait(150)}).then(function(){return t.safeSetState({showSparkles:true})})}
t.prototype.renderContent=function e(){var t=this.props,r=t.currentLevel,o=t.nextLevelPoints
var a=this.state.showSparkles
var n=React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.heading},strings.getHeading(r)),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.body},strings.getBody(r,o)))
if(a){return React.createElement(_sparkleFrame2.default,{frameWidth:10,padding:5,count:15},n)}return n}
t.prototype.renderTooltip=function e(t){var r=this.props.onDismiss
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipContainer),role:"tooltip"},React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltip),style:{transform:"translateY("+(12+t)+"px)"}},React.createElement("div",{className:(0,_aphrodite.css)(styles.caret)}),React.createElement("button",{className:(0,_aphrodite.css)(styles.closeButton),onClick:r},React.createElement(_icon2.default,{title:i18n._("Close"),icon:closeIconPath,size:10,color:_wonderBlocksColorV2.default.white})),this.renderContent()))}
t.prototype.render=function e(){var t=this
var r=this.state,o=r.targetOffset,a=r.stiffness,n=r.damping
return React.createElement(_reactMotion.Motion,{defaultStyle:{offset:0},style:{offset:(0,_reactMotion.spring)(o,{stiffness:a,damping:n})}},function(e){return t.renderTooltip(e.offset)})}
return t}(_react.Component)
var TOOLTIP_WIDTH=220
var CARET_SIZE=12
var styles=_aphrodite.StyleSheet.create({tooltipContainer:{position:"relative"},caret:{position:"absolute",left:TOOLTIP_WIDTH/2+CARET_SIZE,top:-CARET_SIZE,width:0,height:0,borderLeft:CARET_SIZE+"px solid transparent",borderRight:CARET_SIZE+"px solid transparent",borderBottom:CARET_SIZE+"px solid "+_wonderBlocksColorV2.default.blue},closeButton:{position:"absolute",top:11,right:6,backgroundColor:"transparent",border:"none",cursor:"pointer",":focus":{outline:"1px solid "+_wonderBlocksColorV2.default.white}},tooltip:{willChange:"transform",position:"absolute",padding:"10px 24px",left:-TOOLTIP_WIDTH/2,backgroundColor:_wonderBlocksColorV2.default.blue,color:_wonderBlocksColorV2.default.white,borderRadius:4,border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16},heading:{padding:"16px 8px 16px",marginTop:5},body:{padding:"0px 8px 22px",width:TOOLTIP_WIDTH}})
exports.default=MasteryTopicUnitLevelTooltip

});
KAdefine("javascript/mastery-package/mastery-topic-unit-progress-header.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.PROGRESS_HEADER_HEIGHT=undefined
var _progressHeader,_masterySummaryContai,_legendLauncher
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _reactMotion=require("react-motion")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _masteryTopicUnitLevelTooltip=require("./mastery-topic-unit-level-tooltip.jsx")
var _masteryTopicUnitLevelTooltip2=babelHelpers.interopRequireDefault(_masteryTopicUnitLevelTooltip)
var _masteryProgressLegendLauncher=require("./mastery-progress-legend-launcher.jsx")
var _masteryProgressLegendLauncher2=babelHelpers.interopRequireDefault(_masteryProgressLegendLauncher)
var _masteryTopicUnitProgressBar=require("./mastery-topic-unit-progress-bar.jsx")
var _masteryTopicUnitProgressBar2=babelHelpers.interopRequireDefault(_masteryTopicUnitProgressBar)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _viewportWatcher=require("../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var i18n=require("../shared-package/i18n.js")
var UNIT_MASTERED_STAGES=[_masteryUtils.constants.LEVEL5,_masteryUtils.constants.LEVEL6]
var MasteryTopicUnitProgressSummary=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderNotStarted=function e(){var t=this.props.totalPoints
return _react2.default.createElement(_wonderBlocksCoreV.View,null,_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.pointsSummary},_react2.default.createElement(_wonderBlocksTypographyV.HeadingSmall,{"data-test-id":"unit-points-available-label"},t),_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.legendLauncher},_react2.default.createElement(_masteryProgressLegendLauncher2.default,null))),_react2.default.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.possibleMasteryPoints},i18n._("Possible mastery points")))}
t.prototype.renderStarted=function e(){var t=this.props,r=t.points,a=t.totalPoints
var o=Math.min(r,a)
var s=(0,_masteryUtils.getMasteryLevel)(r,a)
return _react2.default.createElement(_wonderBlocksCoreV.View,null,_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.pointsSummary},_react2.default.createElement(_wonderBlocksTypographyV.HeadingSmall,null,_react2.default.createElement(_reactMotion.Motion,{style:{points:(0,_reactMotion.spring)(o,_masteryTopicUnitProgressBar.motionSpring)}},function(e){var t=e.points
return _react2.default.createElement("span",null,parseInt(t).toLocaleString())}),"/ ",a.toLocaleString()),_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.legendLauncher},_react2.default.createElement(_masteryProgressLegendLauncher2.default,null))),_react2.default.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.possibleMasteryPoints},i18n._("Mastery points")," • ",s.title))}
t.prototype.render=function e(){var t=this.props.points
return t>0?this.renderStarted():this.renderNotStarted()}
return t}(_react.Component)
MasteryTopicUnitProgressSummary.defaultProps={}
var MasteryTopicUnitProgressHeader=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,l=Array(s),i=0;i<s;i++){l[i]=arguments[i]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={showHeaderTooltip:false,willShowCelebration:false},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.componentDidMount=function e(){this._isMounted=true}
t.prototype.UNSAFE_componentWillUpdate=function e(t){this.primeTooltipIfNecessary(t)}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.primeTooltipIfNecessary=function e(t){var r=this.props.allowCelebration
var a=false
if(!r||this.props.points===t.points){return}var o=(0,_masteryUtils.getMasteryLevel)(this.props.points,this.props.totalPoints)
var s=(0,_masteryUtils.getMasteryLevel)(t.points,t.totalPoints)
var l=UNIT_MASTERED_STAGES.includes(s.id)
var i=this.props.points===0&&t.points>0
var n=this.props.points<t.points&&o.id!==s.id
if(i||n){a=true
if(l){t.onMastered("pending")}}if(this.state.willShowCelebration!==a){this.setState({willShowCelebration:a})}this.setState({showHeaderTooltip:false})}
t.prototype.handleScrollRest=function e(){var t=this.props,r=t.points,a=t.totalPoints,o=t.onMastered
if(!this._isMounted){return}var s=this.state.willShowCelebration
if(!s){return}this.setState({willShowCelebration:false})
var l=(0,_masteryUtils.getMasteryLevel)(r,a)
if(UNIT_MASTERED_STAGES.includes(l.id)){o("show")}else{this.setState({showHeaderTooltip:true})}}
t.prototype.renderCelebration=function e(){var t=this
var r=this.props,a=r.points,o=r.totalPoints
var s=this.state.showHeaderTooltip
if(!s){return null}var l=(0,_masteryUtils.getMasteryLevel)(a,o)
var i=(0,_masteryUtils.getNextUnitMasteryLevel)(a,o)
var n=Math.round(i.start*o)-a
return _react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.tooltipContainer},_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.tooltip},_react2.default.createElement(_masteryTopicUnitLevelTooltip2.default,{currentLevel:l.title,nextLevel:i.title,nextLevelPoints:n,onDismiss:function e(){return t.setState({showHeaderTooltip:false})}})))}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.points,o=r.totalPoints
return _react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.container},_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.progressHeader},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.masterySummaryContainer)},_react2.default.createElement(MasteryTopicUnitProgressSummary,{points:a,totalPoints:o})),_react2.default.createElement(_viewportWatcher2.default,null,function(e){return e.atLeast("md")&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.progressContainer)},t.renderCelebration(),_react2.default.createElement(_masteryTopicUnitProgressBar2.default,{points:a,totalPoints:o,onScrollRest:function e(){return t.handleScrollRest()}}))})))}
return t}(_react.Component)
MasteryTopicUnitProgressHeader.defaultProps={onMastered:function e(){}}
var PROGRESS_HEADER_HEIGHT=exports.PROGRESS_HEADER_HEIGHT=68
var styles=_aphrodite.StyleSheet.create({container:{width:"100%",borderBottom:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,backgroundColor:"white"},progressHeader:(_progressHeader={flexDirection:"row",width:1200,paddingLeft:20,paddingRight:20,margin:"auto",height:PROGRESS_HEADER_HEIGHT},_progressHeader[_mediaQueries2.default.lgOrSmaller]={width:"100%"},_progressHeader),masterySummaryContainer:(_masterySummaryContai={display:"flex",boxSizing:"border-box",flexShrink:0,width:340,paddingTop:13},_masterySummaryContai[_mediaQueries2.default.lgOrSmaller]={width:300},_masterySummaryContai),possibleMasteryPoints:{color:_wonderBlocksColorV2.default.offBlack64},progressContainer:{flexGrow:1,display:"flex",boxSizing:"border-box",minWidth:437,width:"100%",borderLeft:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRight:"solid 1px "+_wonderBlocksColorV2.default.offBlack16},tooltipContainer:{position:"relative"},tooltip:{position:"absolute",left:10,bottom:-3,zIndex:10},pointsSummary:{flexDirection:"row"},legendLauncher:(_legendLauncher={padding:"4px 8px"},_legendLauncher[_mediaQueries2.default.mdOrLarger]={display:"none"},_legendLauncher)})
exports.default=MasteryTopicUnitProgressHeader

});
KAdefine("javascript/mastery-package/unit-mastered-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _title,_tagline
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _modal=require("../components/modal-package/modal.jsx")
var _modal2=babelHelpers.interopRequireDefault(_modal)
var _sparkle=require("../components/sparkle-package/sparkle.jsx")
var _sparkle2=babelHelpers.interopRequireDefault(_sparkle)
var _fullscreenConfetti=require("../components/confetti-package/fullscreen-confetti.jsx")
var _fullscreenConfetti2=babelHelpers.interopRequireDefault(_fullscreenConfetti)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var i18n=require("../shared-package/i18n.js")
var flag=React.createElement("svg",{width:"134",height:"145",viewBox:"0 0 134 145"},React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:_wonderBlocksColorV2.default.gold,d:"M2 24h13v120H2z"}),React.createElement("path",{fill:_wonderBlocksColorV2.default.gold,d:"M101.212 23L78.77 65.557l22.442 42.557H2V23z"})))
var strings={close:i18n._("Continue"),nextUnit:i18n._("Go to next unit"),heading:i18n._("New unit mastery level reached"),getTitle:function e(t){return i18n._("Unit leveled up to %(masteryLevel)s",{masteryLevel:t})},getTagline:function e(t,r){return i18n._("You have achieved mastery of this unit and collected %(masteryPoints)s mastery points. Move forward to the next unit: %(nextUnitTitle)s",{masteryPoints:t,nextUnitTitle:r})}}
var UnitMasteredModal=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){if(this.confetti){this.confetti.startConfetti(window.innerWidth/2,0)}}
t.prototype.renderConfetti=function e(){var t=this
if(_ka2.default.prefersReducedMotion()){return null}var r=window.innerWidth*window.innerHeight
var l=r/2500
return React.createElement("div",{className:(0,_aphrodite.css)(styles.confettiContainer)},React.createElement(_fullscreenConfetti2.default,{ref:function e(r){return t.confetti=r},numParticles:l}))}
t.prototype.renderFooter=function e(){var t=this.props,r=t.onClose,l=t.onNextUnit
return React.createElement(_wonderBlocksCoreV.View,{style:styles.footer},React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:r},strings.close),React.createElement("span",{className:(0,_aphrodite.css)(styles.divider)}),React.createElement(_wonderBlocksButtonV2.default,{onClick:l},strings.nextUnit))}
t.prototype.renderModal=function e(){var t=this.props,r=t.masteryPoints,l=t.pointsAvailable,a=t.nextUnitTitle,o=t.onClose
var n=(0,_masteryUtils.getMasteryLevel)(r,l)
return React.createElement(_modal2.default,{style:styles.modal,onClose:o,shouldAnimate:false,hostInBody:true},React.createElement(_modal.ModalHeader,null,strings.heading),React.createElement(_wonderBlocksCoreV.View,{style:styles.modalContent},React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.flagContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.flag},flag),React.createElement(_wonderBlocksCoreV.View,{style:styles.bigSparkle},React.createElement(_sparkle2.default,{color:_wonderBlocksColorV2.default.white,size:55})),React.createElement(_wonderBlocksCoreV.View,{style:styles.smallSparkle},React.createElement(_sparkle2.default,{color:_wonderBlocksColorV2.default.white,size:22,delay:2})))),React.createElement(_wonderBlocksTypographyV.Title,{style:styles.title},strings.getTitle(n.title)),React.createElement(_wonderBlocksTypographyV.Tagline,{style:styles.tagline},strings.getTagline(r,a))),React.createElement(_modal.ModalFooter,null,this.renderFooter()))}
t.prototype.render=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},this.renderConfetti(),this.renderModal())}
return t}(React.Component)
UnitMasteredModal.defaultProps={masteryPoints:0,nextUnitTitle:"",onClose:function e(){},onNextUnit:function e(){}}
var styles=_aphrodite.StyleSheet.create({wrapper:{zIndex:_globalStyles2.default.constants.zindexModal},confettiContainer:{position:"fixed",top:0,left:0,zIndex:_globalStyles2.default.constants.zindexAboveModal,pointerEvents:"none"},modal:{width:948,maxWidth:"100%"},modalContent:{flexGrow:1,justifyContent:"center",alignItems:"center",textAlign:"center",height:502,maxHeight:"100%",backgroundColor:_wonderBlocksColorV2.default.darkBlue,color:_wonderBlocksColorV2.default.white},flagContainer:{position:"relative","@media screen and (max-height: 480px)":{display:"none"}},flag:{paddingBottom:34,paddingLeft:30},bigSparkle:{position:"absolute",top:32,right:-32},smallSparkle:{position:"absolute",top:56,right:-12},title:(_title={width:380,paddingBottom:13},_title[_mediaQueries2.default.xsOrSmaller]={width:300,marginLeft:16,marginRight:16},_title),tagline:(_tagline={width:400},_tagline[_mediaQueries2.default.xsOrSmaller]={width:300,marginLeft:16,marginRight:16},_tagline),footer:{flexDirection:"row",width:"100%",justifyContent:"flex-end",paddingRight:16},divider:{width:1,borderRight:"1px solid "+_wonderBlocksColorV2.default.offBlack16,fontSize:24,paddingBottom:6,marginRight:20}})
exports.default=UnitMasteredModal

});
KAdefine("javascript/mastery-package/unit-test-trophy.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var constants={defaultWidth:75,defaultHeight:84}
var NonMasteredTrophy=function e(t){var r=t.width,l=t.height
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:r,height:l,viewBox:"0 0 75 84"},React.createElement("defs",null,React.createElement("path",{id:"a",d:"M0 0h60v26H0z"})),React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-9 -57)"},React.createElement("g",{transform:"translate(12 59)"},React.createElement("g",{transform:"translate(4)"},React.createElement("mask",{id:"b",fill:"#fff"},React.createElement("use",{xlinkHref:"#a"})),React.createElement("path",{d:"M59.984 9.722L56.374 26H3.638L.028 9.722C-.166 8.559.673 7.46 1.833 7.267c.58-.064 1.225.065 1.676.452l11.153 7.235c.903.775 2.257.646 3.03-.323.065-.064.065-.13.13-.194L28.2.937c.645-.97 1.999-1.228 2.966-.582.257.13.45.323.58.582l10.38 13.5c.644.97 1.998 1.228 2.965.582.064-.065.129-.065.193-.13L56.44 7.656c.902-.775 2.256-.646 3.03.323.451.517.58 1.162.515 1.744",mask:"url(#b)",fill:"#f7f8fa"})),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M63.973 9.687L60.343 26H7.657L4.027 9.687A2.16 2.16 0 0 1 5.08 7.479a2.15 2.15 0 0 1 2.434.199l11.17 7.236a2.145 2.145 0 0 0 3.146-.46L32.221.953a2.153 2.153 0 0 1 3.572 0l10.376 13.503a2.147 2.147 0 0 0 3.147.459l11.169-7.236a2.15 2.15 0 0 1 2.434-.199 2.16 2.16 0 0 1 1.054 2.208zM61 48s18.926-14.136 1.888-28"}),React.createElement("circle",{cx:"62",cy:"20",r:"2",fill:"#0A2A66",fillRule:"nonzero"}),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 48S-9.926 33.864 7.112 20"}),React.createElement("circle",{cx:"7",cy:"20",r:"2",fill:"#0A2A66",fillRule:"nonzero"}),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 71v10M52 71v10"}),React.createElement("path",{fill:"#00EDB4",fillRule:"nonzero",d:"M53.657 71H15.343c-1.95 0-3.82-.786-5.197-2.184A7.49 7.49 0 0 1 8 63.546V31h53v32.547a7.49 7.49 0 0 1-2.146 5.27A7.296 7.296 0 0 1 53.657 71z"}),React.createElement("ellipse",{cx:"25",cy:"38.5",fill:"#0A2A66",fillRule:"nonzero",rx:"2",ry:"2.5"}),React.createElement("ellipse",{cx:"45",cy:"38.5",fill:"#0A2A66",fillRule:"nonzero",rx:"2",ry:"2.5"}),React.createElement("rect",{width:"4",height:"5",x:"33",y:"41",fill:"#FFF",fillRule:"nonzero",rx:"2"}))))}
var MasteredTrophy=function e(t){var r=t.width,l=t.height
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:r,height:l,viewBox:"0 0 75 84"},React.createElement("defs",null,React.createElement("path",{id:"a",d:"M0 0h60v29H0z"})),React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-97 -56)"},React.createElement("g",{transform:"translate(100 58)"},React.createElement("g",{transform:"translate(4)"},React.createElement("mask",{id:"b",fill:"#fff"},React.createElement("use",{xlinkHref:"#a"})),React.createElement("path",{fill:"#FFB100",d:"M59.984 14.722L56.374 31H3.638L.028 14.722c-.194-1.163.645-2.261 1.805-2.455.58-.064 1.225.065 1.676.452l11.153 7.235c.903.775 2.257.646 3.03-.323.065-.064.065-.13.13-.194L28.2 5.937c.645-.97 1.999-1.228 2.966-.582.257.13.45.323.58.582l10.38 13.5c.644.97 1.998 1.228 2.965.582.064-.065.129-.065.193-.13l11.154-7.234c.902-.775 2.256-.646 3.03.323.451.517.58 1.162.515 1.744",mask:"url(#b)"})),React.createElement("path",{fill:"#FFB100",stroke:"#FFB100",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M63.973 13.687L60.343 30H7.657l-3.63-16.313a2.16 2.16 0 0 1 1.054-2.208 2.15 2.15 0 0 1 2.434.199l11.17 7.236a2.145 2.145 0 0 0 3.146-.46l10.39-13.502a2.153 2.153 0 0 1 3.572 0l10.376 13.503a2.147 2.147 0 0 0 3.147.459l11.169-7.236a2.15 2.15 0 0 1 2.434-.199 2.16 2.16 0 0 1 1.054 2.208z"}),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M61 48s18.926-11.612 1.888-23"}),React.createElement("circle",{cx:"62",cy:"25",r:"2",fill:"#0A2A66",fillRule:"nonzero"}),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 48S-9.926 36.388 7.112 25"}),React.createElement("circle",{cx:"7",cy:"25",r:"2",fill:"#0A2A66",fillRule:"nonzero"}),React.createElement("path",{stroke:"#0A2A66",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 71v10M52 71v10"}),React.createElement("path",{fill:"#00EDB4",fillRule:"nonzero",d:"M53.657 71H15.343c-1.95 0-3.82-.786-5.197-2.184A7.49 7.49 0 0 1 8 63.546V31h53v32.547a7.49 7.49 0 0 1-2.146 5.27A7.296 7.296 0 0 1 53.657 71z"}),React.createElement("g",{fillRule:"nonzero",transform:"translate(22 36)"},React.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#0A2A66"}),React.createElement("circle",{cx:"22.5",cy:"2.5",r:"2.5",fill:"#0A2A66"}),React.createElement("path",{fill:"#FFF",d:"M22 7c0 6.088-4.703 11-10.467 11C5.77 18 1 13.088 1 7.07h21V7z"})))))}
var UnitTestTrophy=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.fillCrown,l=t.width
var a=this.props.height||l*(constants.defaultHeight/constants.defaultWidth)
return r?React.createElement(MasteredTrophy,{width:l,height:a}):React.createElement(NonMasteredTrophy,{width:l,height:a})}
return t}(React.Component)
UnitTestTrophy.defaultProps={width:constants.defaultWidth,height:constants.defaultHeight}
exports.default=UnitTestTrophy

});
KAdefine("javascript/mastery-package/up-next-shelf.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _leftColumn,_divider,_rightColumn
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _spring=require("../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var iconMap={"up-next-no-progress":"/images/mastery/UpNextNoProgress.svg","unit-test-complete":"/images/mastery/UnitTestComplete.svg"}
var UpNextShelf=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.action,a=r.copy
var l=a.callToAction,i=a.subtitle,o=a.title,n=a.icon
return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksCoreV.View,{style:styles.leftColumn},React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:styles.heading},o),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.body},i),React.createElement(_wonderBlocksButtonV2.default,{onClick:t},l)),React.createElement(_wonderBlocksCoreV.View,{style:styles.divider},React.createElement(_spring2.default,null)),React.createElement(_wonderBlocksCoreV.View,{style:styles.rightColumn},React.createElement("img",{src:(0,_staticUrl2.default)(iconMap[n]),alt:"","aria-hidden":true,width:386})))}
return r}(_react.Component)
exports.default=UpNextShelf
var styles=_aphrodite.StyleSheet.create({container:{flexDirection:"row",width:"100%"},leftColumn:(_leftColumn={marginTop:32,marginBottom:24,alignItems:"flex-start",width:"50%"},_leftColumn[_mediaQueries2.default.xsOrSmaller]={width:"100%"},_leftColumn),heading:{paddingBottom:12},body:{paddingBottom:16},divider:(_divider={flexBasis:32,flexShrink:0},_divider[_mediaQueries2.default.mdOrSmaller]={display:"none"},_divider),rightColumn:(_rightColumn={justifyContent:"flex-end",marginLeft:-40},_rightColumn[_mediaQueries2.default.xsOrSmaller]={display:"none"},_rightColumn)})

});
KAdefine("javascript/mastery-package/up-next-pill.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _linkStyledButton=require("../components/button-package/link-styled-button.jsx")
var _linkStyledButton2=babelHelpers.interopRequireDefault(_linkStyledButton)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var i18n=require("../shared-package/i18n.js")
var strings={above:i18n._("Your next mastery task is up here!"),below:i18n._("Your next mastery task is down here!")}
var chevronDown={path:"M99.669 13.048q0 3.36-2.352 5.712l-41.664 41.664q-2.408 2.408-5.88 2.408t-5.712-2.408l-41.664-41.664q-2.408-2.24-2.408-5.712t2.408-5.88l4.76-4.816q2.52-2.352 5.88-2.352t5.656 2.352l31.136 31.136 31.08-31.136q2.352-2.352 5.712-2.352t5.88 2.352l4.816 4.816q2.352 2.52 2.352 5.88z",width:100,height:63.034}
var chevronUp={path:"M99.669 49.84q0 3.416-2.352 5.768l-4.816 4.816q-2.408 2.408-5.88 2.408t-5.712-2.408l-31.08-31.024-31.136 31.024q-2.296 2.408-5.768 2.408t-5.712-2.408l-4.816-4.816q-2.408-2.296-2.408-5.768t2.408-5.824l41.664-41.664q2.352-2.352 5.712-2.352t5.88 2.352l41.608 41.664q2.408 2.408 2.408 5.824z",width:100,height:63.034}
var UpNextPill=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.direction,o=r.onClick,a=r.animateAway
var l=t==="above"?strings.above:strings.below
var i=t==="above"?chevronUp:chevronDown
return React.createElement(_wonderBlocksCoreV.View,{style:a&&styles.animateAway,"aria-hidden":"true"},React.createElement(_linkStyledButton2.default,{onClick:o},React.createElement(_wonderBlocksCoreV.View,{style:styles.pill},React.createElement(_wonderBlocksTypographyV.LabelMedium,{style:styles.label},l),React.createElement(_wonderBlocksCoreV.View,{style:styles.iconContainer},React.createElement(_icon2.default,{icon:i,size:10,color:_wonderBlocksColorV2.default.white})))))}
return r}(React.Component)
UpNextPill.defaultProps={direction:"above",animateAway:true}
var fadeAway={"0%":{opacity:1,visibility:"visible"},"90%":{opacity:1,visibility:"visible"},"100%":{opacity:0,visibility:"hidden"}}
var styles=_aphrodite.StyleSheet.create({pill:{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:_wonderBlocksColorV2.default.blue,padding:12,borderRadius:25,boxShadow:"0 4px 9px 0 "+_wonderBlocksColorV2.default.offBlack16},label:{color:_wonderBlocksColorV2.default.white,flexGrow:1,textAlign:"center"},iconContainer:{paddingTop:4,paddingRight:14},animateAway:{animationDuration:"3s",animationTimingFunction:"linear",animationFillMode:"forwards",animationName:fadeAway}})
exports.default=UpNextPill

});
KAdefine("javascript/mastery-package/struggling-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var coral=_masteryUtils.colors.coral
exports.default=function(e){var r=e.radius,a=e.width,t=e.height,l=e.offset
var i=[r+",0","0,-"+r,"-"+r+",0","0,"+r]
var s=i.join(" ")
var o=a-l
var c=t-l
return React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate("+o+" "+c+")"},React.createElement("polyline",{fill:coral,points:s}))}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/mastery-package.js.map 