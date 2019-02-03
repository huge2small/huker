KAdefine("javascript/content-library-upsells-package/teacher-content-upsell.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _cookies=require("../shared-package/cookies.js")
var _cookies2=babelHelpers.interopRequireDefault(_cookies)
var _parseQueryString2=require("../shared-package/parse-query-string.js")
var _parseQueryString3=babelHelpers.interopRequireDefault(_parseQueryString2)
var DISMISS_COOKIE="growth_teacher_content_upsell_dismissed"
var dismiss=function e(){return _cookies2.default.createCookie(DISMISS_COOKIE,1)}
var hasDismissed=function e(){var r=(0,_parseQueryString3.default)(),s=r.forceContentUpsellPopup
return!s&&!!_cookies2.default.readCookie(DISMISS_COOKIE)}
var isElligible=function e(){return _ka2.default.isPhantom()&&!_ka2.default.isMobile}
var shouldShowPopup=function e(){return!hasDismissed()&&isElligible()}
exports.default={dismiss:dismiss,shouldShowPopup:shouldShowPopup}

});
KAdefine("javascript/content-library-upsells-package/teacher-content-upsell-popup.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.TeacherContentUpsellPopupPresentational=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactMotion=require("react-motion")
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksSpacingV=require("@khanacademy/wonder-blocks-spacing-v2")
var _wonderBlocksSpacingV2=babelHelpers.interopRequireDefault(_wonderBlocksSpacingV)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _closeIcon=require("../reusable-components-package/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _controlButton=require("../components/button-package/control-button.jsx")
var _controlButton2=babelHelpers.interopRequireDefault(_controlButton)
var _swapChild=require("../swap-child-package/swap-child.jsx")
var _swapChild2=babelHelpers.interopRequireDefault(_swapChild)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _teacherContentUpsell=require("./teacher-content-upsell.js")
var _teacherContentUpsell2=babelHelpers.interopRequireDefault(_teacherContentUpsell)
var i18n=require("../shared-package/i18n.js")
var StyledButton=function e(t){return React.createElement(_wonderBlocksButtonV2.default,babelHelpers.extends({light:true},t))}
var delayAppearanceMs=1e3
var TeacherContentUpsellPopupPresentational=function(e){babelHelpers.inherits(t,e)
function t(){var n,r,o
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,s=Array(a),i=0;i<a;i++){s[i]=arguments[i]}return o=(n=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.state={dismissed:false,offsetY:null,onMeasureHeight:null,response:null,stage:"unmeasured"},r.handleRef=function(e){var t=r.state.onMeasureHeight
if(e){var n=e.getBoundingClientRect(),o=n.top
var a=window.innerHeight-o
t&&t(a)
r.setState({onMeasureHeight:null})}},r.handleTeacherResponseClick=function(){var e=r.props.onTeacherResponseClick
e&&e()
r.setState({response:"teacher"})},r.handleStudentResponseClick=function(){var e=r.props.onStudentResponseClick
e&&e()
r.setState({response:"student"})},r.handleDismissClick=function(){var e=r.props.onDismissClick
e&&e()
r.disappear()},r.appear=function(){var e=r.props.onAppear
e&&e()
r.measureHeight().then(function(e){if(r._mounted){r.setState({offsetY:e,stage:"appeared"})}})},r.disappear=function(){var e=r.state.stage
if(e==="appeared"){r.measureHeight().then(function(e){if(r._mounted){r.setState({offsetY:e,stage:"disappearing"})}})}},n),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.componentDidMount=function e(){this._mounted=true
var t=this.props.delayAppearanceMs
window.setTimeout(this.appear,t)}
t.prototype.componentWillUnmount=function e(){this._mounted=false}
t.prototype.measureHeight=function e(){var t=this
return new Promise(function(e,n){if(t._mounted){t.setState({onMeasureHeight:e})}})}
t.prototype.renderHeadingText=function e(){var t=this.props.classUpsell
var n=this.state.response
if(n==="teacher"){if(t.unitMasteryEnabled){return i18n._("Practice, 100% free")}else{return i18n._("Free learning resources")}}else if(n==="student"){return i18n._("Studying for a test?")}else{return i18n._("Are you a student or a teacher?")}}
t.prototype.renderBodyTextAndButtons=function e(){var t=this.state.response
if(t==="teacher"){return this.renderTeacherCTA()}else if(t==="student"){return this.renderStudentCTA()}else{return this.renderChoiceButtons()}}
t.prototype.renderChoiceButtons=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.buttonSet},React.createElement(StyledButton,{onClick:this.handleStudentResponseClick,style:styles.choiceButton},i18n._("Student")),React.createElement(StyledButton,{onClick:this.handleTeacherResponseClick,style:styles.choiceButton},i18n._("Teacher")))}
t.prototype.renderTeacherCTA=function e(){var t=this.props,n=t.onTeacherCTAClick,r=t.classUpsell.unitMasteryEnabled
return React.createElement(_wonderBlocksTypographyV.Body,{style:styles.body},r?i18n._("Use Khan Academy’s personalized practice to help your students succeed."):i18n._("Use Khan Academy’s learning and practice content to help your students succeed."),React.createElement(StyledButton,{width:"100%",onClick:n,style:styles.ctaButton},i18n._("Unlock your teacher tools")))}
t.prototype.renderStudentCTA=function e(){var t=this.props,n=t.onStudentCTAClick,r=t.classUpsell,o=r.lessonCount,a=r.topicTitle
return React.createElement(_wonderBlocksTypographyV.Body,{style:styles.body},i18n.$_("Prepare with these %(lessonCount)s lessons on %(topicTitle)s.",{lessonCount:o,topicTitle:a}),React.createElement(StyledButton,{width:"100%",onClick:n,style:styles.ctaButton},i18n._("Prepare for your test")))}
t.prototype.renderInner=function e(){var t=this.state,n=t.response,r=t.stage
var o=React.createElement(_wonderBlocksCoreV.View,{style:styles.inner},React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.heading,tag:"h1"},this.renderHeadingText()),this.renderBodyTextAndButtons())
if(r!=="disappearing"){return React.createElement(_swapChild2.default,{anchor:"bottom-left",childrenKey:n||"",distance:0,duration:200,twoStepSwap:true},o)}else{return o}}
t.prototype.renderContents=function e(){return React.createElement(React.Fragment,null,this.renderInner(),React.createElement(_wonderBlocksCoreV.View,{style:styles.dismissIconContainer},React.createElement(_controlButton2.default,{onClick:this.handleDismissClick,colors:{color:_wonderBlocksColorV2.default.white,hoveredColor:_wonderBlocksColorV2.default.white}},React.createElement(_closeIcon2.default,{iconSize:12,size:40}))))}
t.prototype.renderAnimationContainer=function e(t){var n=this.state.onMeasureHeight
return React.createElement("div",{role:"dialog","aria-live":"polite",className:(0,_aphrodite.css)(styles.outer),ref:n&&this.handleRef,style:t},this.renderContents())}
t.prototype.renderSlideIn=function e(){var t=this
var n=this.state.offsetY
return React.createElement(_reactMotion.Motion,{key:"slideIn",defaultStyle:{translateY:n},style:{translateY:(0,_reactMotion.spring)(0,{stiffness:380,damping:20})}},function(e){var n=e.translateY
return t.renderAnimationContainer({transform:"translateY("+n+"px)"})})}
t.prototype.renderFadeOut=function e(){var t=this
return React.createElement(_reactMotion.Motion,{key:"fadeOut",defaultStyle:{opacity:1},style:{opacity:(0,_reactMotion.spring)(0,{stiffness:600,damping:40})}},function(e){var n=e.opacity
return t.renderAnimationContainer({opacity:n})})}
t.prototype.render=function e(){var t=this.state,n=t.dismissed,r=t.stage
if(n){return null}if(r==="unmeasured"){return this.renderAnimationContainer({opacity:0,pointerEvents:"none"})}else if(r==="appeared"){return this.renderSlideIn()}else if(r==="disappearing"){return this.renderFadeOut()}else{return null}}
return t}(React.Component)
TeacherContentUpsellPopupPresentational.defaultProps={delayAppearanceMs:delayAppearanceMs}
var TeacherContentUpsellPopup=function(e){babelHelpers.inherits(t,e)
function t(){var n,r,o
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,s=Array(a),i=0;i<a;i++){s[i]=arguments[i]}return o=(n=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.state={showPopup:_teacherContentUpsell2.default.shouldShowPopup()},n),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.componentDidMount=function e(){if(this.state.showPopup){_teacherContentUpsell2.default.dismiss()}}
t.prototype.render=function e(){var t=this.props.classUpsell
var n=this.state.showPopup
if(!n){return null}return React.createElement(TeacherContentUpsellPopupPresentational,{classUpsell:t,onAppear:function e(){return _bigbingo2.default.markConversion("teacher_content_upsell_appear")},onTeacherCTAClick:function e(){_bigbingo2.default.markConversion("teacher_content_upsell_cta_click",{teacher:true})
window.location.href="/signup?isteacher=1"},onStudentCTAClick:function e(){_bigbingo2.default.markConversion("teacher_content_upsell_cta_click",{student:true})
window.location.href=t.href},onTeacherResponseClick:function e(){_bigbingo2.default.markConversion("teacher_content_upsell_teacher_response_click")},onStudentResponseClick:function e(){_bigbingo2.default.markConversion("teacher_content_upsell_student_response_click")},onDismissClick:function e(){_bigbingo2.default.markConversion("teacher_content_upsell_dismiss_click")}})}
return t}(React.Component)
exports.default=TeacherContentUpsellPopup
var VIEWPORT_OFFSET=15
var invisibleOutlineStyle="1px solid rgba(0, 0, 0, 0)"
var styles=_aphrodite.StyleSheet.create({outer:{position:"fixed",bottom:VIEWPORT_OFFSET,right:VIEWPORT_OFFSET,zIndex:_globalStyles2.default.constants.zindexModalBackdrop-1,width:288,color:"white",boxSizing:"border-box",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.5)",background:_wonderBlocksColorV2.default.blue,borderRadius:_globalStyles2.default.borderRadius,outline:invisibleOutlineStyle},inner:{width:"100%",height:"100%",position:"relative",boxSizing:"border-box",padding:_wonderBlocksSpacingV2.default.large},heading:{maxWidth:224},body:{marginTop:_wonderBlocksSpacingV2.default.xSmall},dismissIconContainer:{opacity:.8,position:"absolute",top:0,right:0,":hover":{opacity:.9},":focus":{opacity:.9}},buttonSet:{width:"100%",flexDirection:"row",justifyContent:"space-between",marginTop:_wonderBlocksSpacingV2.default.large},choiceButton:{width:112,outline:invisibleOutlineStyle},ctaButton:{width:"100%",marginTop:_wonderBlocksSpacingV2.default.large}})
exports.TeacherContentUpsellPopupPresentational=TeacherContentUpsellPopupPresentational

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/content-library-upsells-package.js.map 