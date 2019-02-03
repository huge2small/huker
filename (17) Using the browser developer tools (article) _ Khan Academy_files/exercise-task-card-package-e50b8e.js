KAdefine("javascript/exercise-task-card-package/circle.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var defaultColor=_globalStyles2.default.colors.gray76
var activeColor=_globalStyles2.default.colors.kaGreen
var Circle=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.active,l=r.empty,o=r.radius,a=r.colorless,s=r.otherStyles,i=r.testId,d=babelHelpers.objectWithoutProperties(r,["active","empty","radius","colorless","otherStyles","testId"])
var c=_aphrodite.StyleSheet.create({dimensions:{width:2*o,height:2*o}}),b=c.dimensions
return React.createElement("div",babelHelpers.extends({},d,{className:(0,_aphrodite.css)(styles.indicator,b,!a&&[styles.colors,l&&styles.empty,t&&(l?styles.emptyActive:styles.active)],s),"data-test-id":i}))}
return r}(_react.Component)
exports.default=Circle
var styles=_aphrodite.StyleSheet.create({indicator:{boxSizing:"border-box",flexGrow:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderRadius:100},colors:{borderColor:defaultColor,backgroundColor:defaultColor},empty:{borderWidth:2,backgroundColor:"transparent"},active:{backgroundColor:activeColor},emptyActive:{borderColor:activeColor}})

});
KAdefine("javascript/exercise-task-card-package/end-of-task-badge.jsx", function(require, module, exports) {
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var TICK_TIME=10
var LARGE_TIME=700
var EndOfTaskBadge=function(e){babelHelpers.inherits(t,e)
function t(){var a,i,r
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),o=0;o<n;o++){s[o]=arguments[o]}return r=(a=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.state={animationCentered:i.props.animate,animationLarge:false,animationNormal:false},i.startAnimation=function(){if(i.makeLargeTimeout||i.makeNormalTimeout){return}i.makeLargeTimeout=setTimeout(function(){i.setState({animationLarge:true})},TICK_TIME)
i.makeNormalTimeout=setTimeout(function(){i.setState({animationNormal:true})},LARGE_TIME)},i.renderBadge=function(e,t,a){var r=i.props.badge,n=r.iconSrc,s=r.translatedDescription,o=r.translatedExtendedDescription,l=r.points
var c=classNames({"achievement-badge":true,"achievement-badge-owned":true,"centered-badge":t.animationCentered,"visible-badge":t.animationLarge,"big-badge":t.animationLarge,"to-normal-size-badge":t.animationNormal})
return React.createElement("div",{className:c,style:{opacity:1,visibility:e?"hidden":"visible"},key:a},React.createElement("div",{id:"outline-box"},React.createElement("div",{className:"badge-image-and-count"},React.createElement("img",{alt:"","aria-hidden":true,src:(0,_staticUrl2.default)(n),id:"badge-icon"})),React.createElement("div",{className:"achievement-text"},React.createElement("div",{className:"achievement-title"},s),React.createElement("div",{className:"achievement-desc achievement-desc-no-count"},o)),l>0&&React.createElement("div",{className:"energy-points-badge"},l)))},a),babelHelpers.possibleConstructorReturn(i,r)}t.prototype.componentDidMount=function e(){if(this.props.animate){this.startAnimation()}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(t.animate){this.setState({animationCentered:true})}}
t.prototype.componentDidUpdate=function e(){if(this.props.animate){this.startAnimation()}}
t.prototype.componentWillUnmount=function e(){clearTimeout(this.makeLargeTimeout)
clearTimeout(this.makeNormalTimeout)}
t.prototype.render=function e(){if(this.props.hidden){return this.renderBadge(true,{})}else if(this.props.animate){return React.createElement("div",null,!this.state.animationNormal&&this.renderBadge(true,{},"placeholder"),this.renderBadge(false,this.state,"animated"))}else{return this.renderBadge(false,this.state)}}
return t}(React.Component)
EndOfTaskBadge.propTypes={badge:PropTypes.shape({iconSrc:PropTypes.string.isRequired,points:PropTypes.number.isRequired,translatedDescription:PropTypes.string.isRequired,translatedExtendedDescription:PropTypes.string.isRequired}).isRequired,hidden:PropTypes.bool,animate:PropTypes.bool}
EndOfTaskBadge.defaultProps={hidden:false,animate:false}
module.exports=EndOfTaskBadge

});
KAdefine("javascript/exercise-task-card-package/end-of-task-points.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var i18n=require("../shared-package/i18n.js")
var ODOMETER_SPIN=3e3
var EndOfTaskPoints=function(e){babelHelpers.inherits(t,e)
function t(){var s,a,n
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,r=Array(i),o=0;o<i;o++){r[o]=arguments[o]}return n=(s=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),a),a.state={hide:a.props.delayUntilShow>0,hidePoints:true,Odometer:null},a.readyToShowPoints=function(e,t){return!t.hide&&t.Odometer},s),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
if(this.props.delayUntilShow>0){this.hideTimeout=setTimeout(function(){t.setState({hide:false})},this.props.delayUntilShow)}require.dynimport("../../third_party/javascript-khansrc/odometer/odometer.js").then(function(e){return e.default}).then(function(e){if(t._isMounted){t.setState({Odometer:e})}})}
t.prototype.componentDidUpdate=function e(t,s){var a=this
if(!this.readyToShowPoints(t,s)&&this.readyToShowPoints(this.props,this.state)){this.setState({hidePoints:false},function(){var e=a.state.Odometer
if(e){new e({el:a.pointsElem,value:0,duration:ODOMETER_SPIN}).update(a.props.pointsEarned)}})}}
t.prototype.componentWillUnmount=function e(){clearTimeout(this.hideTimeout)
this._isMounted=false}
t.prototype.render=function e(){var t=this
return React.createElement("div",{className:"end-of-task__points-earned",style:{visibility:this.state.hide?"hidden":"visible"}},React.createElement("div",{className:"end-of-task__section-header"},i18n._("Total energy points earned")),React.createElement("div",{className:"end-of-task__points-earned__number fixed-width",ref:function e(s){return t.pointsElem=s},style:{visibility:this.state.hidePoints?"hidden":"visible"}},this.props.pointsEarned),React.createElement("table",{className:"stat-block points-block"},React.createElement("tbody",null,this.props.normalPoints>0&&React.createElement("tr",null,React.createElement("td",{className:"stat-num fixed-width"},this.props.normalPoints),React.createElement("td",{className:"stat-desc"},i18n._("Points for questions"),React.createElement("br",null),React.createElement("small",null,this.props.problemSummaryText))),this.props.badgePoints>0&&React.createElement("tr",null,React.createElement("td",{className:"stat-num fixed-width"},this.props.badgePoints),React.createElement("td",{className:"stat-desc"},i18n._("Points from badges"),React.createElement("br",null),React.createElement("small",null,this.props.badgeSummaryText))),React.createElement("tr",null,React.createElement("td",{className:"stat-num fixed-width"},this.props.pointBounty),React.createElement("td",{className:"stat-desc"},i18n._("Points for completion"),React.createElement("small",null,i18n._("Bonus points earned for completing this task")))))))}
return t}(React.Component)
EndOfTaskPoints.defaultProps={delayUntilShow:0}
module.exports=EndOfTaskPoints

});
KAdefine("javascript/exercise-task-card-package/exercise-end-of-task-card.jsx", function(require, module, exports) {
var _babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _exerciseEndOfTaskCardAwards=require("./exercise-end-of-task-card-awards.jsx")
var _exerciseEndOfTaskCardAwards2=babelHelpers.interopRequireDefault(_exerciseEndOfTaskCardAwards)
var i18n=require("../shared-package/i18n.js")
var ExerciseEndOfTaskCard=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props,r=a.avatarSrc,t=babelHelpers.objectWithoutProperties(a,["avatarSrc"])
return React.createElement("div",{className:(0,_aphrodite.css)(styles.endOfTaskCard)},r&&React.createElement("img",{alt:"","aria-hidden":true,className:(0,_aphrodite.css)(styles.avatarImage),src:(0,_staticUrl2.default)(r)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.banner)},i18n._("Congratulations!")),React.createElement(_exerciseEndOfTaskCardAwards2.default,t))}
return a}(React.Component)
var styles=_aphrodite.StyleSheet.create({endOfTaskCard:{display:"flex",flexDirection:"column",marginLeft:16,marginRight:16},banner:babelHelpers.extends({},_globalStyles2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_globalStyles2.default.colors.gray17,marginLeft:"auto",marginRight:"auto",maxWidth:688,marginBottom:10,paddingTop:32,textAlign:"center",width:"100%"},_babelHelpers$extends[_globalStyles2.default.queries.small]={paddingTop:0,borderTop:"none"},_babelHelpers$extends)),avatarImage:{position:"relative",width:160,marginLeft:"auto",marginRight:"auto"}})
module.exports=ExerciseEndOfTaskCard

});
KAdefine("javascript/exercise-task-card-package/exercise-end-of-task-card-awards.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends,_items,_babelHelpers$extends2,_babelHelpers$extends3,_babelHelpers$extends4,_babelHelpers$extends5,_badge,_avatarPart
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var i18n=require("../shared-package/i18n.js")
var AwardArea=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.title,s=t.items
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.summary)},a),React.createElement("div",{className:(0,_aphrodite.css)(styles.items)},s.map(function(e,t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.item,t===s.length-1&&styles.lastItem),key:t},React.createElement("div",{className:(0,_aphrodite.css)(styles.itemText)},React.createElement("div",{className:(0,_aphrodite.css)(styles.itemTitle)},React.createElement("span",{className:(0,_aphrodite.css)(styles.itemTitleText)},e.title)," ",React.createElement("span",{className:(0,_aphrodite.css)(styles.dots),"aria-hidden":"true"},"..............................................................................................................................................................................")),React.createElement("div",{className:(0,_aphrodite.css)(styles.itemDescription)},e.description)),React.createElement("div",{className:(0,_aphrodite.css)(styles.itemRight)},e.icon))})))}
return t}(_react.Component)
var BadgeAvatarArea=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.avatarPartsAwarded,s=t.badgesAwarded,l=t.numAwards
if(l===0){return null}var r=React.createElement("span",{className:(0,_aphrodite.css)(styles.active)},i18n.ngettext("%(num)s achievement","%(num)s achievements",l))
var i=i18n.$_("You got %(awards)s",{awards:r})
var n=[]
for(var o=s,d=Array.isArray(o),c=0,o=d?o:o[Symbol.iterator]();;){var p
if(d){if(c>=o.length)break
p=o[c++]}else{c=o.next()
if(c.done)break
p=c.value}var b=p
var m=b.translatedDescription
if(b.translatedTargetContextName){m=i18n._("%(badgeName)s in %(context)s",{badgeName:b.translatedDescription,context:b.translatedTargetContextName})}n.push({title:m,description:b.translatedExtendedDescription,icon:React.createElement("img",{alt:"","aria-hidden":true,className:(0,_aphrodite.css)(styles.badge),src:(0,_staticUrl2.default)(b.iconSrc)})})}for(var u=a,y=Array.isArray(u),g=0,u=y?u:u[Symbol.iterator]();;){var h
if(y){if(g>=u.length)break
h=u[g++]}else{g=u.next()
if(g.done)break
h=g.value}var f=h
n.push({title:i18n.$_("Avatar unlocked: %(avatar)s",{avatar:f.translatedDisplayName}),description:React.createElement("div",null,f.translatedRequirements.map(function(e,t){return React.createElement("div",{key:t},e)})),icon:React.createElement("img",{alt:"","aria-hidden":true,className:(0,_aphrodite.css)(styles.avatarPart),src:(0,_staticUrl2.default)(f.thumbnailSrc)})})}return React.createElement("div",{className:(0,_aphrodite.css)(styles.awardArea)},React.createElement(AwardArea,{title:i,items:n}))}
return t}(_react.Component)
var PointsArea=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.badgePoints,s=t.badgeSummaryText,l=t.normalPoints,r=t.pointBounty,i=t.pointsEarned,n=t.problemSummaryText,o=t.numAwards
var d=React.createElement("span",{className:(0,_aphrodite.css)(styles.active)},i18n.ngettext("%(num)s energy point","%(num)s energy points",i))
var c=i18n.$_("You got %(points)s",{points:d})
if(o>0){c=i18n.$_("You also got %(points)s",{points:d})}var p=[{title:i18n._("Points for questions"),description:n,icon:React.createElement("div",{className:(0,_aphrodite.css)(styles.points)},"+",l)},{title:i18n._("Points for completion"),description:i18n._("Bonus points earned for completing this task"),icon:React.createElement("div",{className:(0,_aphrodite.css)(styles.points)},"+",r)}]
if(a){p.push({title:i18n._("Points from badges"),description:s,icon:React.createElement("div",{className:(0,_aphrodite.css)(styles.points)},"+",a)})}return React.createElement(AwardArea,{title:c,items:p})}
return t}(_react.Component)
var ExerciseEndOfTaskCardAwards=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.badgesAwarded,s=t.avatarPartsAwarded
var l=a.length+s.length
return React.createElement("div",{className:(0,_aphrodite.css)(styles.endOfTaskCard)},React.createElement(BadgeAvatarArea,babelHelpers.extends({},this.props,{numAwards:l})),React.createElement(PointsArea,babelHelpers.extends({},this.props,{numAwards:l})))}
return t}(_react.Component)
exports.default=ExerciseEndOfTaskCardAwards
var styles=_aphrodite.StyleSheet.create({endOfTaskCard:{display:"flex",flexDirection:"column"},awardArea:{marginBottom:24},active:{color:_globalStyles2.default.colors.kaGreen},summary:babelHelpers.extends({},_globalStyles2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_globalStyles2.default.colors.gray17,marginBottom:20,textAlign:"center"},_babelHelpers$extends[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.subheadingMobile),_babelHelpers$extends)),items:(_items={marginLeft:"auto",marginRight:"auto",width:448},_items[_globalStyles2.default.queries.small]={marginLeft:16,marginRight:16,width:"auto"},_items),item:{display:"flex",paddingBottom:24},lastItem:{paddingBottom:0},itemRight:{marginLeft:5,flexShrink:0,textAlign:"right"},itemText:{flexGrow:1,position:"relative",paddingTop:24},itemTitle:babelHelpers.extends({color:_globalStyles2.default.colors.gray68,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",position:"absolute",top:0,left:0,width:"100%",paddingRight:3},_globalStyles2.default.typography.bodySmall,(_babelHelpers$extends2={},_babelHelpers$extends2[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmall),_babelHelpers$extends2)),itemTitleText:babelHelpers.extends({},_globalStyles2.default.typography.bodySmallBold,(_babelHelpers$extends3={color:_globalStyles2.default.colors.gray17},_babelHelpers$extends3[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmallBold,{color:_globalStyles2.default.colors.gray17}),_babelHelpers$extends3)),itemDescription:babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmall,(_babelHelpers$extends4={color:_globalStyles2.default.colors.gray41},_babelHelpers$extends4[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.labelSmall),_babelHelpers$extends4)),points:babelHelpers.extends({},_globalStyles2.default.typography.subheadingDesktop,(_babelHelpers$extends5={color:_globalStyles2.default.colors.gray17},_babelHelpers$extends5[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.smallHeadingMobile,{color:_globalStyles2.default.colors.gray17}),_babelHelpers$extends5)),dots:{userSelect:"none"},badge:(_badge={height:48,width:48},_badge[_globalStyles2.default.queries.small]={height:36,width:36},_badge),avatarPart:(_avatarPart={height:48,width:48},_avatarPart[_globalStyles2.default.queries.small]={height:36,width:36},_avatarPart)})

});
KAdefine("javascript/exercise-task-card-package/exercise-end-of-task-card-do-n.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.PRACTICED_HEADING=undefined
var _separator
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _exerciseTaskCardDoN=require("./exercise-task-card-do-n.jsx")
var _exerciseTaskCardDoN2=babelHelpers.interopRequireDefault(_exerciseTaskCardDoN)
var _exerciseEndOfTaskCardAwards=require("./exercise-end-of-task-card-awards.jsx")
var _exerciseEndOfTaskCardAwards2=babelHelpers.interopRequireDefault(_exerciseEndOfTaskCardAwards)
var i18n=require("../shared-package/i18n.js")
var PRACTICED_HEADING=exports.PRACTICED_HEADING=[i18n._("Great work!"),i18n._("Awesome work!"),i18n._("Amazing job!"),i18n._("Nice work!")]
var TRY_AGAIN_HEADING=[i18n._("Keep going!"),i18n._("Keep trying!"),i18n._("Not yet... keep going!"),i18n._("Great try... stick with it!")]
var rand=function e(r){return r[Math.floor(r.length*Math.random())]}
var fpmWrapLevel=function e(r){return React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted,styles.headerFpmLevel)},i18n.$_("%(level)s",{level:r}))}
var titleForSkills=function e(r,t){if(r>0&&t>0){return i18n._("You leveled up on %(up)s %(upSkills)s and down on "+"%(down)s %(downSkills)s.",{up:r,upSkills:i18n.ngettext("skill","skills",r),down:t,downSkills:i18n.ngettext("skill","skills",t)})}else if(r>0){return i18n._("You leveled up on %(up)s %(upSkills)s.",{up:r,upSkills:i18n.ngettext("skill","skills",r)})}else if(t>0){return i18n._("You leveled down on %(down)s %(downSkills)s.",{down:t,downSkills:i18n.ngettext("skill","skills",t)})}else{return i18n._("Keep up the good work.")}}
var ExerciseEndOfTaskCardDoN=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.children,s=r.exercises,a=r.percentCorrect,i=r.correctProblems,l=r.numRequiredForPromotion,n=r.completionCriteria.numRequired,o=r.taskAttemptHistory,c=r.taskType,p=r.masteryEnabled,u=r.initialFpmLevel,d=r.finalFpmLevel,m=babelHelpers.objectWithoutProperties(r,["children","exercises","percentCorrect","correctProblems","numRequiredForPromotion","completionCriteria","taskAttemptHistory","taskType","masteryEnabled","initialFpmLevel","finalFpmLevel"])
var h=void 0
var v=void 0
var f=i>=l
var g=i===n
var k=[]
var y=o.length
if(p){if(c==="practice"&&u&&d){var b=_masteryUtils.masteryValues.indexOf(u)
var C=_masteryUtils.masteryValues.indexOf(d)
if(b<C){var x=i18n.ngettext("question","questions",i)
v=i18n._("You leveled up!")
k.push(i18n.$_("You leveled up to %(level)s by getting %(correctProblems)s (%(percentCorrect)s%) %(pluralizedQuestion)s correct!",{level:fpmWrapLevel(d),correctProblems:i,percentCorrect:a,pluralizedQuestion:x}))}else{v=i18n._("You got %(percent)s%",{percent:a})
if(d==="mastered"){k.push(i18n._("You mastered this skill on the Unit test."))}else if(b<C){k.push(i18n.$_("You moved back to %(finalFpmLevel)s.",{finalFpmLevel:fpmWrapLevel(d)}))}if(d==="proficient"){k.push(i18n._("Take the unit test to level up!"))}else if(d!=="mastered"){var E=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n.$_("%(num)s correct",{num:(0,_masteryUtils.getGoalForCount)(y,d)}))
k.push(i18n.$_("Get %(fpmPromotionGoal)s to reach %(nextFpmLevel)s.",{fpmPromotionGoal:E,nextFpmLevel:fpmWrapLevel(_masteryUtils.masteryValues[C+1])}))}}}else{var w=s.reduce(function(e,r){var t=r.initialFpmLevel,s=r.finalFpmLevel
if(!t||!s){return e}var a=_masteryUtils.masteryValues.indexOf(t)
var i=_masteryUtils.masteryValues.indexOf(s)
if(a<i){return babelHelpers.extends({},e,{up:e.up+1})}else if(i<a){return babelHelpers.extends({},e,{down:e.down+1})}return e},{up:0,down:0}),R=w.up,N=w.down
v=titleForSkills(R,N)
k.push(i18n._("You got %(correctProblems)s/%(taskCount)s "+"(%(percentCorrect)s)% questions correct.",{correctProblems:i,taskCount:y,percentCorrect:a}))}}else if(f){v=i18n._("You got %(percent)s%",{percent:a})
if(g){h="complete"
k.push(rand(PRACTICED_HEADING))
k.push(i18n._("You got %(num)s out of %(total)s correct.",{num:i,total:n}))}else{h="practiced"
if(c==="practice"){var A=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n._("Practiced"))
k.push(i18n.$_("You reached %(practiced)s!",{practiced:A}))}else{k.push(i18n._("Way to go!"))}var T=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n.$_("%(num)s correct",{num:n}))
var q=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n._("100%"))
k.push(i18n.$_("Get %(numCorrect)s to reach %(complete)s.",{numCorrect:T,complete:q}))}}else{h="attempted"
v=i18n._("You got %(percent)s%",{percent:a})
var D=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n.$_("%(num)s correct",{num:l}))
if(c==="practice"){var H=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlighted)},i18n._("Practiced"))
k.push(i18n.$_("Get %(numCorrect)s to reach %(practiced)s.",{numCorrect:D,practiced:H}))}else{k.push(i18n.$_("Get any %(numCorrect)s.",{numCorrect:D}))}k.push(rand(TRY_AGAIN_HEADING))}var G=o.map(function(e){var r=e.correct
return{highlight:r}})
return React.createElement(_exerciseTaskCardDoN2.default,{attemptHistory:G,fpmLevel:d,iconography:c==="topic_unit_test"?"trophy":c==="practice"?"star":"checkmark",masteryEnabled:p,subheadings:k,taskType:c,outcome:h,title:v},t,t&&React.createElement("div",{className:(0,_aphrodite.css)(styles.separator)}),React.createElement(_exerciseEndOfTaskCardAwards2.default,m))}
return r}(_react.Component)
exports.default=ExerciseEndOfTaskCardDoN
var styles=_aphrodite.StyleSheet.create({highlighted:{color:_globalStyles2.default.colors.kaGreen,fontWeight:"bold"},separator:(_separator={marginTop:32,marginBottom:32,marginLeft:"auto",marginRight:"auto",width:448},_separator[_mediaQueries2.default.smOrSmaller]={width:"auto"},_separator.height=1,_separator.backgroundColor=_globalStyles2.default.colors.gray85,_separator),headerFpmLevel:{textTransform:"capitalize"}})

});
KAdefine("javascript/exercise-task-card-package/exercise-start-of-task-card-do-n.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _exerciseTaskCardDoN=require("./exercise-task-card-do-n.jsx")
var _exerciseTaskCardDoN2=babelHelpers.interopRequireDefault(_exerciseTaskCardDoN)
var i18n=require("../shared-package/i18n.js")
var ExerciseStartOfTaskCardDoN=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.children,a=r.completionCriteria.numRequired,i=r.numRequiredForPromotion,o=r.taskType,s=r.masteryEnabled
var n=s?[i18n.$_("Get at least %(numRequiredForPromotion)s / %(numRequired)s correct",{numRequiredForPromotion:i,numRequired:a})]:[i18n.$_("Get any %(numRequiredForPromotion)s correct!",{numRequiredForPromotion:i})]
var u=[]
for(var c=0;c<a;c++){u.push({highlight:c<i})}return React.createElement(_exerciseTaskCardDoN2.default,{attemptHistory:u,iconography:o==="topic_unit_test"?"trophy":o==="practice"?"star":"checkmark",subheadings:n,outcome:null,title:null},t)}
return r}(_react.Component)
exports.default=ExerciseStartOfTaskCardDoN

});
KAdefine("javascript/exercise-task-card-package/exercise-task-card-do-n.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _shrinkHeaderOnMobile,_babelHelpers$extends,_babelHelpers$extends2
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _strut=require("../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _exerciseTaskPracticedIndicator=require("./exercise-task-practiced-indicator.jsx")
var _exerciseTaskPracticedIndicator2=babelHelpers.interopRequireDefault(_exerciseTaskPracticedIndicator)
var _masteryProgressIndicator=require("../mastery-package/mastery-progress-indicator.jsx")
var _masteryProgressIndicator2=babelHelpers.interopRequireDefault(_masteryProgressIndicator)
var INITIAL_DELAY=1.9
var UNPRACTICED_DELAY=1.2
var BANNER_DURATION=.7
var SUBHEADING_DURATION=.5
var AWARD_DURATION=.5
var ExerciseTaskCardDoN=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props,t=a.title,r=a.children,s=a.fpmLevel,l=a.masteryEnabled,i=a.outcome,n=a.subheadings,o=a.taskType
var c=o==="practice"
return React.createElement("div",{"data-test-id":"exercise-task-card-do-n",className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.header,!i&&styles.shrinkHeaderOnMobile)},React.createElement("div",{className:(0,_aphrodite.css)(styles.contents)},l?s&&c&&React.createElement(_masteryProgressIndicator2.default,{emptyColor:"rgba(255, 255, 255, 0.3)",height:60,mastery:s,labelType:"side",width:23}):React.createElement(_exerciseTaskPracticedIndicator2.default,{attemptHistory:this.props.attemptHistory,iconography:this.props.iconography,outcome:this.props.outcome}),React.createElement(_strut2.default,{size:s?14:3}),t&&React.createElement("div",{className:(0,_aphrodite.css)(styles.title,i&&styles.bannerAnimated,i==="attempted"&&styles.bannerUnpracticed,i==="complete"&&styles.bannerComplete)},t),n.map(function(e,a){return React.createElement(_reactBalanceText2.default,{key:a,className:(0,_aphrodite.css)(styles.subheading,i&&styles.subheadingAnimated,i==="attempted"&&styles.subheadingUnpracticed)},e)}))),React.createElement("div",{className:(0,_aphrodite.css)(styles.childrenContainer,i&&styles.childrenAnimated,i==="attempted"&&styles.childrenUnpracticed)},r))}
return a}(_react.Component)
exports.default=ExerciseTaskCardDoN
var bannerAnimation={"0%":{opacity:0},"100%":{opacity:1}}
var bannerCompleteAnimation={"0%":{transform:"scale(1.0)",opacity:0},"20%":{transform:"scale(0.5)"},"70%":{transform:"scale(1.2)",opacity:1},"100%":{transform:"scale(1.0)",opacity:1}}
var subheadingAnimation={"0%":{opacity:0},"100%":{opacity:1}}
var awardAnimation={"0%":{opacity:0},"100%":{opacity:1}}
var styles=_aphrodite.StyleSheet.create({container:{flexGrow:1,overflowY:"auto",WebkitOverflowScrolling:"touch"},childrenContainer:{paddingTop:32,paddingBottom:32},header:{height:291,backgroundColor:_wonderBlocksColorV2.default.darkBlue,backgroundSize:"cover",borderBottom:"1px solid "+_globalStyles2.default.colors.gray85,color:_globalStyles2.default.colors.white,display:"flex",alignItems:"center",justifyContent:"center"},shrinkHeaderOnMobile:(_shrinkHeaderOnMobile={},_shrinkHeaderOnMobile[_globalStyles2.default.queries.small]={height:"auto",paddingTop:32,paddingBottom:32},_shrinkHeaderOnMobile),contents:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"100%"},title:babelHelpers.extends({},_globalStyles2.default.typography.conceptHeadingDesktop,(_babelHelpers$extends={marginBottom:8,height:42},_babelHelpers$extends[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.conceptHeadingMobile,{height:27}),_babelHelpers$extends)),bannerAnimated:{animationName:bannerAnimation,animationFillMode:"both",animationDelay:INITIAL_DELAY+"s",animationDuration:BANNER_DURATION+"s"},bannerUnpracticed:{animationDelay:UNPRACTICED_DELAY+"s"},bannerComplete:{animationName:bannerCompleteAnimation},subheading:babelHelpers.extends({},_globalStyles2.default.typography.smallSubheadingDesktop,(_babelHelpers$extends2={},_babelHelpers$extends2[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.smallSubheadingMobile),_babelHelpers$extends2)),subheadingAnimated:{animationName:subheadingAnimation,animationFillMode:"both",animationDelay:INITIAL_DELAY+BANNER_DURATION+"s",animationDuration:SUBHEADING_DURATION+"s"},subheadingUnpracticed:{animationDelay:UNPRACTICED_DELAY+BANNER_DURATION+"s"},childrenAnimated:{animationName:awardAnimation,animationFillMode:"both",animationDelay:INITIAL_DELAY+BANNER_DURATION+SUBHEADING_DURATION+"s",animationDuration:AWARD_DURATION+"s"},childrenUnpracticed:{animationDelay:UNPRACTICED_DELAY+BANNER_DURATION+SUBHEADING_DURATION+"s"}})

});
KAdefine("javascript/exercise-task-card-package/exercise-task-practiced-indicator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _circle=require("./circle.jsx")
var _circle2=babelHelpers.interopRequireDefault(_circle)
var RADIUS=8
var CIRCLE_DURATION=.7
var ICON_DURATION=.7
var INITIAL_DELAY=.5
var Progress=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props,t=a.attemptHistory,r=a.iconography,l=a.outcome
var c=t.map(function(e,a){var t=e.highlight
return _react2.default.createElement(_circle2.default,{key:a,radius:RADIUS,active:false,empty:false,colorless:true,otherStyles:[t?l?styles.correctCircle:styles.requiredCircle:styles.circle,a>0&&styles.circleWithLeftMargin]})})
var s={star:starStyles,checkmark:checkmarkStyles,trophy:trophyStyles}[r]
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.icon,l==null&&s.default,l==="attempted"&&s.attempted,l==="practiced"&&s.practiced,l==="complete"&&s.complete)}),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.circles)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.scrollMargin)}),c,_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.scrollMargin)})))}
return a}(_react.PureComponent)
exports.default=Progress
var defaultColor=_globalStyles2.default.colors.white
var activeColor=_globalStyles2.default.colors.kaGreen
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"100%"},icon:{width:RADIUS*10,height:RADIUS*10},circles:{display:"flex",alignItems:"center",height:RADIUS*2,boxSizing:"content-box",maxWidth:"100%",overflowX:"auto",overflowY:"hidden",paddingTop:10,paddingBottom:10,marginTop:8},circle:{flexShrink:0,background:defaultColor,opacity:.4},circleWithLeftMargin:{marginLeft:2*RADIUS},scrollMargin:{flexShrink:0,width:2*RADIUS,height:2*RADIUS},requiredCircle:{background:defaultColor,opacity:1},correctCircle:{animationName:{"0%":{background:defaultColor,opacity:.4,transform:"scale(1.0)"},"20%":{background:defaultColor,opacity:.4,transform:"scale(0.5)"},"70%":{transform:"scale(1.2)"},"100%":{background:activeColor,transform:"scale(1.0)",opacity:1}},animationFillMode:"both",animationDelay:INITIAL_DELAY+"s",animationDuration:CIRCLE_DURATION+"s"}})
var stylesFor=function e(a,t,r,l){return _aphrodite.StyleSheet.create({default:{background:a},attempted:{background:t},practiced:{animationName:{"0%":{background:t,transform:"scale(1.0)"},"50%":{transform:"scale(0.5)"},"100%":{background:l,transform:"scale(1.0)"}},animationFillMode:"both",backgroundSize:"contain",animationDelay:INITIAL_DELAY+CIRCLE_DURATION+"s",animationDuration:ICON_DURATION+"s"},complete:{animationName:{"0%":{background:t,transform:"scale(1.0)"},"20%":{transform:"scale(0.5)"},"70%":{transform:"scale(1.2)"},"100%":{background:r,transform:"scale(1.0)"}},animationFillMode:"both",backgroundSize:"contain",animationDelay:INITIAL_DELAY+CIRCLE_DURATION+"s",animationDuration:ICON_DURATION+"s"}})}
var defaultTrophy="/images/end-of-task-card/trophy-default.svg"
var attemptedTrophy="/images/end-of-task-card/trophy-attempted.svg"
var completeTrophy="/images/end-of-task-card/trophy-complete.svg"
var practicedTrophy="/images/end-of-task-card/trophy-practiced.svg"
var defaultTrophyURL="url("+(0,_staticUrl2.default)(defaultTrophy)+")"
var attemptedTrophyURL="url("+(0,_staticUrl2.default)(attemptedTrophy)+")"
var completeTrophyURL="url("+(0,_staticUrl2.default)(completeTrophy)+")"
var practicedTrophyURL="url("+(0,_staticUrl2.default)(practicedTrophy)+")"
var trophyStyles=stylesFor(defaultTrophyURL,attemptedTrophyURL,completeTrophyURL,practicedTrophyURL)
var defaultStar="/images/end-of-task-card/star-default.svg"
var attemptedStar="/images/end-of-task-card/star-attempted.svg"
var completeStar="/images/end-of-task-card/star-complete.svg"
var practicedStar="/images/end-of-task-card/star-practiced.svg"
var defaultStarURL="url("+(0,_staticUrl2.default)(defaultStar)+")"
var attemptedStarURL="url("+(0,_staticUrl2.default)(attemptedStar)+")"
var completeStarURL="url("+(0,_staticUrl2.default)(completeStar)+")"
var practicedStarURL="url("+(0,_staticUrl2.default)(practicedStar)+")"
var starStyles=stylesFor(defaultStarURL,attemptedStarURL,completeStarURL,practicedStarURL)
var defaultCheckmark="/images/end-of-task-card/checkmark-default.svg"
var attemptedCheckmark="/images/end-of-task-card/checkmark-attempted.svg"
var completeCheckmark="/images/end-of-task-card/checkmark-complete.svg"
var practicedCheckmark="/images/end-of-task-card/checkmark-practiced.svg"
var defaultCheckmarkURL="url("+(0,_staticUrl2.default)(defaultCheckmark)+")"
var attemptedCheckmarkURL="url("+(0,_staticUrl2.default)(attemptedCheckmark)+")"
var completeCheckmarkURL="url("+(0,_staticUrl2.default)(completeCheckmark)+")"
var practicedCheckmarkURL="url("+(0,_staticUrl2.default)(practicedCheckmark)+")"
var checkmarkStyles=stylesFor(defaultCheckmarkURL,attemptedCheckmarkURL,completeCheckmarkURL,practicedCheckmarkURL)

});
KAdefine("javascript/exercise-task-card-package/mastery-end-of-task-card.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var KA=require("../shared-package/ka.js")
var EndOfTaskBadge=require("./end-of-task-badge.jsx")
var EndOfTaskPoints=require("./end-of-task-points.jsx")
var i18n=require("../shared-package/i18n.js")
var levelPropType=PropTypes.oneOf(["unstarted","practiced","mastery1","mastery2","mastery3"])
var ITEM_DURATION=300
var EndOfMasteryExerciseSummaryItem=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props.exercise
return React.createElement("tr",{className:"exercise-summary-row","data-index":this.props.index,style:{visibility:this.props.visible?"visible":"hidden"}},React.createElement("td",{className:"exercise-name ellipsis"},React.createElement("div",{className:"exercise-correct-status-icon-container"},t.correct?React.createElement("i",{className:"icon-ok"}):React.createElement("i",{className:"icon-remove"}))," ",t.exerciseModel.title),React.createElement("td",{className:"level-description"},React.createElement("span",{className:"progress-cell "+t.initialLevel})," ",React.createElement("span",null,t.initialLevelDesc)),React.createElement("td",{className:"arrow-container"},React.createElement("i",{className:"icon-arrow-right"})),React.createElement("td",{className:"level-description"},React.createElement("span",{className:"progress-cell "+t.finalLevel})," ",React.createElement("span",null,t.finalLevelDesc)))}
return t}(React.Component)
EndOfMasteryExerciseSummaryItem.propTypes={exercise:PropTypes.shape({correct:PropTypes.bool.isRequired,exerciseModel:PropTypes.shape({title:PropTypes.string.isRequired}).isRequired,finalLevel:levelPropType.isRequired,finalLevelDesc:PropTypes.string.isRequired,initialLevel:levelPropType.isRequired,initialLevelDesc:PropTypes.string.isRequired}).isRequired,index:PropTypes.number.isRequired,visible:PropTypes.bool.isRequired}
var EndOfMasteryMissionProgress=function(e){babelHelpers.inherits(t,e)
function t(){var a,s,r
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,n=Array(i),l=0;l<i;l++){n[l]=arguments[l]}return r=(a=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),s),s.state={shownItems:1},s.showNextItem=function(){s.setState({shownItems:s.state.shownItems+1})
if(s.state.shownItems<s.props.exercises.length){s.timer=setTimeout(s.showNextItem,ITEM_DURATION)}else{s.timer=null}},a),babelHelpers.possibleConstructorReturn(s,r)}t.prototype.componentDidMount=function e(){this.timer=setTimeout(this.showNextItem,ITEM_DURATION)}
t.prototype.componentWillUnmount=function e(){if(this.timer){clearTimeout(this.timer)}}
t.prototype.render=function e(){var t=this
return React.createElement("table",{className:"cumulative-exercise-block"},React.createElement("tbody",null,this.props.exercises.map(function(e,a){return React.createElement(EndOfMasteryExerciseSummaryItem,{key:a,index:a,exercise:e,visible:a<t.state.shownItems})})))}
return t}(React.Component)
EndOfMasteryMissionProgress.propTypes={exercises:PropTypes.arrayOf(EndOfMasteryExerciseSummaryItem.propTypes.exercise).isRequired}
var MasteryEndOfTaskCard=function(e){babelHelpers.inherits(t,e)
function t(){var a,s,r
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,n=Array(i),l=0;l<i;l++){n[l]=arguments[l]}return r=(a=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),s),s.state={EndOfTaskAvatarParts:null},a),babelHelpers.possibleConstructorReturn(s,r)}t.prototype.componentDidMount=function e(){var t=this
require.dynimport("../tasks-secondary-package/end-of-task-avatar-parts.jsx").then(function(e){return e.default}).then(function(e){t.setState({EndOfTaskAvatarParts:e})})}
t.prototype.render=function e(){var t=KA.getUserProfile()
return React.createElement("div",{className:"end-of-task-info"},React.createElement("div",{className:"task-stats mastery-stats"},React.createElement("div",{className:"row-fluid stat-row"},React.createElement("div",{className:"span8 end-of-task-block"},React.createElement("div",{className:"block-title"},i18n._("Progress made")),React.createElement("div",{className:"end-of-mastery-progress-container"},React.createElement(EndOfMasteryMissionProgress,this.props))),React.createElement("div",{className:"span4"},React.createElement(EndOfTaskPoints,this.props))),this.props.avatarPartsAwarded&&React.createElement("div",{className:"row-fluid stat-row"},React.createElement("div",{className:"span12 end-of-task-block "+"end-of-task-avatar-parts"},this.state.EndOfTaskAvatarParts&&React.createElement(this.state.EndOfTaskAvatarParts,{avatarPartsAwarded:this.props.avatarPartsAwarded,profileModel:t,shouldAnimate:false,animationInitialDelay:0,animationTimePerPart:1e3}))),this.props.badgesAwarded.length>0&&React.createElement("div",{className:"row-fluid stat-row"},React.createElement("div",{className:"span12 end-of-task-block "+"end-of-task-badges"},React.createElement("div",{className:"block-title"},i18n._("Badges Earned")),this.props.badgesAwarded.map(function(e,t){return React.createElement(EndOfTaskBadge,{key:t,badge:e})})))))}
return t}(React.Component)
MasteryEndOfTaskCard.propTypes={avatarPartsAwarded:PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,badgesAwarded:PropTypes.arrayOf(EndOfTaskBadge.propTypes.badge).isRequired}
module.exports=MasteryEndOfTaskCard

});
KAdefine("javascript/exercise-task-card-package/practice-end-of-task-card.jsx", function(require, module, exports) {
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var PropTypes=require("prop-types")
var classNames=require("classnames")
var KA=require("../shared-package/ka.js")
var EndOfTaskBadge=require("./end-of-task-badge.jsx")
var EndOfTaskPoints=require("./end-of-task-points.jsx")
var i18n=require("../shared-package/i18n.js")
var MASTERY_LEVELS=["unstarted","practiced","mastery1","mastery2","mastery3"]
var BouncingAvatar=function(e){babelHelpers.inherits(a,e)
function a(){var t,r,s
babelHelpers.classCallCheck(this,a)
for(var i=arguments.length,n=Array(i),o=0;o<i;o++){n[o]=arguments[o]}return s=(t=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),r),r.state={hidden:r.props.delayUntilShow>0,showAvatarCustomizer:false,AvatarCustomizerModal:null},r._isMounted=false,r.handleClickAvatar=function(){r.setState({showAvatarCustomizer:true})},r.handleCloseAvatarCustomizer=function(){r.setState({showAvatarCustomizer:false})},t),babelHelpers.possibleConstructorReturn(r,s)}a.prototype.componentDidMount=function e(){var a=this
if(this.state.hidden){this.showTimer=setTimeout(function(){a.setState({hidden:false})},this.props.delayUntilShow)}require.dynimport("../avatar-customizer-package/avatar-customizer-modal.jsx").then(function(e){return e.default}).then(function(e){if(a._isMounted){a.setState({AvatarCustomizerModal:e})}})}
a.prototype.componentWillUnmount=function e(){clearTimeout(this.showTimer)
this._isMounted=false}
a.prototype.render=function e(){var a=classNames({"bouncing-avatar-container":true,"avatar-bounce":!this.state.hidden,"clickable-avatar":!this.state.hidden})
return React.createElement("div",{className:a,style:{visibility:this.state.hidden?"hidden":"visible"},onClick:this.handleClickAvatar},React.createElement("img",{alt:"","aria-hidden":true,className:"avatar-img",src:(0,_staticUrl2.default)(this.props.avatarSrc)}),React.createElement("div",{className:"avatar-shadow"}),this.state.showAvatarCustomizer&&this.state.AvatarCustomizerModal&&React.createElement(this.state.AvatarCustomizerModal,{onClose:this.handleCloseAvatarCustomizer,profileModel:KA.getUserProfile()}))}
return a}(React.Component)
BouncingAvatar.propTypes={avatarSrc:PropTypes.string.isRequired,delayUntilShow:PropTypes.number.isRequired}
var BadgesContainer=function(e){babelHelpers.inherits(a,e)
function a(){var t,r,s
babelHelpers.classCallCheck(this,a)
for(var i=arguments.length,n=Array(i),o=0;o<i;o++){n[o]=arguments[o]}return s=(t=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),r),r.state={hidden:r.props.delayUntilShow>0,badgesShown:0},t),babelHelpers.possibleConstructorReturn(r,s)}a.prototype.componentDidMount=function e(){var a=this
if(this.state.hidden){this.showTimer=setTimeout(function(){a.setState({hidden:false,badgesShown:1})},this.props.delayUntilShow)}}
a.prototype.componentWillUnmount=function e(){clearTimeout(this.showTimer)}
a.prototype.render=function e(){var a=this
return React.createElement("div",{className:"end-of-task-block end-of-task-badges",style:{visibility:this.state.hidden?"hidden":"visible"}},React.createElement("div",{className:"end-of-task__section-header"},i18n._("Badges earned")),React.createElement("div",{className:"row-fluid end-of-task__badges",style:{visibility:"visible"}},this.props.badgesAwarded.map(function(e,t){return React.createElement(EndOfTaskBadge,{key:t,badge:e,hidden:t+1>a.state.badgesShown,animate:t+1<=a.state.badgesShown})})))}
return a}(React.Component)
BadgesContainer.propTypes={badgesAwarded:PropTypes.arrayOf(EndOfTaskBadge.propTypes.badge).isRequired,delayUntilShow:PropTypes.number.isRequired}
var PracticeEndOfTaskCard=function(e){babelHelpers.inherits(a,e)
function a(){var t=this
var r,s,i
babelHelpers.classCallCheck(this,a)
for(var n=arguments.length,o=Array(n),l=0;l<n;l++){o[l]=arguments[l]}return i=(r=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),s),s.state={ExerciseProgressView:null,EndOfTaskAvatarParts:null},s._isMounted=false,s.renderAchievements=function(){var e=KA.getUserProfile()
var a=s.props.badgesAwarded.length>0||s.props.avatarPartsAwarded.length>0
var r=1450
var i=1e3
var n=1100
var o=r
var l=o+i*s.props.avatarPartsAwarded.length
var c=l+n*s.props.badgesAwarded.length
if(a){return React.createElement("div",null,React.createElement("div",{className:"offset2 span4"},s.props.avatarPartsAwarded&&React.createElement("div",{className:"end-of-task-block end-of-task-avatar-parts"},s.state.EndOfTaskAvatarParts&&React.createElement(t.state.EndOfTaskAvatarParts,{avatarPartsAwarded:s.props.avatarPartsAwarded,profileModel:e,shouldAnimate:true,animationInitialDelay:o,animationTimePerPart:i})),s.props.badgesAwarded&&React.createElement(BadgesContainer,{badgesAwarded:s.props.badgesAwarded,delayUntilShow:l})),React.createElement("div",{className:"offset1 span4"},React.createElement(EndOfTaskPoints,babelHelpers.extends({},s.props,{delayUntilShow:c}))))}else{return React.createElement("div",{className:"end-of-task__points-container",style:{visibility:"visible"}},React.createElement("div",{className:"offset3 span2"},React.createElement(BouncingAvatar,{avatarSrc:s.props.avatarSrc,delayUntilShow:c})),React.createElement("div",{className:"offset1 span4"},React.createElement(EndOfTaskPoints,babelHelpers.extends({},s.props,{delayUntilShow:c}))))}},r),babelHelpers.possibleConstructorReturn(s,i)}a.prototype.componentDidMount=function e(){var a=this
this._isMounted=true
Promise.all([require.dynimport("../tasks-secondary-package/exercise-progress-view.jsx").then(function(e){return e.default}),require.dynimport("../tasks-secondary-package/end-of-task-avatar-parts.jsx").then(function(e){return e.default})]).then(function(e){var t=e[0],r=e[1]
if(a._isMounted){a.setState({ExerciseProgressView:t,EndOfTaskAvatarParts:r})}})}
a.prototype.componentWillUnmount=function e(){this._isMounted=false}
a.prototype.render=function e(){var a=this.props.initialLevel!==this.props.finalLevel
return React.createElement("div",{className:"end-of-practice-task"},React.createElement("div",{className:"end-of-practice-task__leveling"},React.createElement("div",{className:"end-of-practice-task__leveling--main"},React.createElement("div",{className:"leveled-up"},a?i18n._("You leveled up!"):i18n._("Keep trying!")),React.createElement("div",{className:"level"},this.props.levelLabel),React.createElement("div",{className:"state-transition-equation-container"},this.state.ExerciseProgressView&&React.createElement(this.state.ExerciseProgressView,{userExercise:{exerciseProgress:{level:this.props.finalLevel},maximumExerciseProgressDt:this.props.maximumExerciseProgressDt},initialLevel:this.props.initialLevel})))),React.createElement("div",{className:"end-of-practice-task__achievements"},React.createElement("div",{className:"row-fluid"},this.renderAchievements())))}
return a}(React.Component)
PracticeEndOfTaskCard.propTypes={avatarSrc:PropTypes.string.isRequired,initialLevel:PropTypes.oneOf(MASTERY_LEVELS).isRequired,finalLevel:PropTypes.oneOf(MASTERY_LEVELS).isRequired,levelLabel:PropTypes.string.isRequired,maximumExerciseProgressDt:PropTypes.string,avatarPartsAwarded:PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,badgesAwarded:PropTypes.arrayOf(EndOfTaskBadge.propTypes.badge).isRequired}
module.exports=PracticeEndOfTaskCard

});
KAdefine("javascript/exercise-task-card-package/sat-end-of-task-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksSpacingV=require("@khanacademy/wonder-blocks-spacing-v2")
var _wonderBlocksSpacingV2=babelHelpers.interopRequireDefault(_wonderBlocksSpacingV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _staticUrl=require("../shared-package/static-url.js")
var _exerciseEndOfTaskCardDoN=require("./exercise-end-of-task-card-do-n.jsx")
var i18n=require("../shared-package/i18n.js")
var rand=function e(r){return r[Math.floor(r.length*Math.random())]}
var SatEndOfTaskCard=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getExerciseStatus=function e(){var r=this.props,t=r.completionCriteria.numRequired,a=r.correctProblems,o=r.numRequiredForPromotion
var n=a>=o
var l=a===t
if(l){return"complete"}if(n){return"practiced"}return"attempted"}
r.prototype.getHeading=function e(){var r=this.props,t=r.completionCriteria.numRequired,a=r.correctProblems
return"You got "+a+" out of "+t+" correct!"}
r.prototype.getSubheading=function e(){var r=this.props.completionCriteria.numRequired
var t=this.getExerciseStatus()
if(t==="complete"){return rand(_exerciseEndOfTaskCardDoN.PRACTICED_HEADING)}if(t==="practiced"){return"Way to go! Get "+r+" correct to complete this exercise!"}return"Keep trying!"}
r.prototype.renderPointsArea=function e(){var r=this.props,t=r.badgePoints,a=r.badgeSummaryText,o=r.normalPoints,n=r.pointBounty,l=r.pointsEarned,i=r.problemSummaryText
var s=l===1?"+1 energy point":"+"+l+" energy points"
var c=React.createElement(_wonderBlocksTypographyV.HeadingSmall,null,React.createElement(_wonderBlocksCoreV.Text,{style:styles.active},i18n.doNotTranslate(s)),i18n.doNotTranslate(" earned"))
var d=[{title:"Points for questions",description:i,points:o},{title:"Points for completion",description:"Bonus points earned for completing this task",points:n}]
if(t){d.push({title:"Points from badges",description:a,points:t})}return React.createElement(_wonderBlocksCoreV.View,{style:styles.awardArea},React.createElement(_wonderBlocksCoreV.View,{style:styles.awardAreaTitle},c),React.createElement(_wonderBlocksCoreV.View,{style:styles.awardBreakdown},d.map(function(e,r){return React.createElement(_wonderBlocksCoreV.View,{key:r,style:styles.awardItem},React.createElement(_wonderBlocksCoreV.View,{style:styles.awardTitle},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n.doNotTranslate(e.title)),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,"+",e.points)),React.createElement(_wonderBlocksCoreV.View,{style:styles.dots}),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.awardDescription},i18n.doNotTranslate(e.description)))})))}
r.prototype.render=function e(){return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.banner},React.createElement(_wonderBlocksTypographyV.HeadingLarge,{style:styles.bannerText},i18n.doNotTranslate(this.getHeading())),React.createElement(_wonderBlocksTypographyV.Tagline,{style:styles.bannerSubheading},i18n.doNotTranslate(this.getSubheading()))),React.createElement(_wonderBlocksCoreV.View,{style:styles.pointsAreaContainer},this.renderPointsArea()))}
return r}(React.Component)
exports.default=SatEndOfTaskCard
var satBlue="#0084ce"
var styles=_aphrodite.StyleSheet.create({banner:{background:satBlue,backgroundImage:(0,_staticUrl.cssUrl)("/images/sat/sparkles-exercise-modal-header.svg"),backgroundPosition:"center",height:184,alignItems:"center",justifyContent:"center",paddingLeft:_wonderBlocksSpacingV2.default.medium,paddingRight:_wonderBlocksSpacingV2.default.medium,color:_wonderBlocksColorV2.default.white},bannerText:{marginBottom:_wonderBlocksSpacingV2.default.xxxSmall},bannerSubheading:{textAlign:"center"},pointsAreaContainer:{alignItems:"center",paddingLeft:_wonderBlocksSpacingV2.default.medium,paddingRight:_wonderBlocksSpacingV2.default.medium},awardArea:{marginTop:_wonderBlocksSpacingV2.default.xxxLarge,width:"100%",maxWidth:448,alignSelf:"center",alignItems:"center"},awardAreaTitle:{marginBottom:_wonderBlocksSpacingV2.default.large},awardTitle:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},awardBreakdown:{width:"100%"},awardItem:{width:"100%",marginBottom:_wonderBlocksSpacingV2.default.medium},awardDescription:{color:_wonderBlocksColorV2.default.offBlack64},active:{color:satBlue},dots:{background:"radial-gradient(\n            ellipse at center,\n            "+_wonderBlocksColorV2.default.offBlack16+" 0%,\n            "+_wonderBlocksColorV2.default.offBlack16+" 30%,\n            transparent 30%)",backgroundPosition:"2px center",backgroundRepeat:"repeat-x",backgroundSize:"2px 2px",height:2,marginTop:_wonderBlocksSpacingV2.default.xxxSmall,marginBottom:_wonderBlocksSpacingV2.default.xxxSmall}})

});
; KAdefine.updatePathToPackageMap({"javascript/avatar-customizer-package/avatar-customizer-modal.jsx": "avatar-customizer.js", "javascript/tasks-secondary-package/end-of-task-avatar-parts.jsx": "tasks-secondary.js", "javascript/tasks-secondary-package/exercise-progress-view.jsx": "tasks-secondary.js", "third_party/javascript-khansrc/odometer/odometer.js": "odometer.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/exercise-task-card-package.js.map 