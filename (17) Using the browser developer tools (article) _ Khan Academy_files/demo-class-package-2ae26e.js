KAdefine("javascript/demo-class-package/components/context-cards/assignment-context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _aphroditeCssTransitionGroup=require("../../../shared-styles-package/aphrodite-css-transition-group.jsx")
var _aphroditeCssTransitionGroup2=babelHelpers.interopRequireDefault(_aphroditeCssTransitionGroup)
var _staticUrl=require("../../../shared-package/static-url.js")
var _contextCard=require("./context-card.jsx")
var _contextCard2=babelHelpers.interopRequireDefault(_contextCard)
var i18n=require("../../../shared-package/i18n.js")
var APPEAR_DURATION_S=.4
var FIRST_DELAY=2
var SECOND_DELAY=4
var THIRD_DELAY=4
var AssignmentContextCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.delayedTransition=function e(t){return _aphrodite.StyleSheet.create({appear:{opacity:0},appearActive:{opacity:1,transition:"opacity "+APPEAR_DURATION_S+"s ease-out "+t+"s"}})}
t.prototype.renderBody=function e(){return[React.createElement(_wonderBlocksTypographyV.HeadingSmall,{key:"working",style:styles.studentsWorking},i18n._("Your sample students are working...")),React.createElement(_aphroditeCssTransitionGroup2.default,{key:"retry",transitionStyle:this.delayedTransition(FIRST_DELAY),transitionAppearTimeout:0},React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.studentsWorking},i18n._("Some are doing a second set of questions to try to improve their score..."))),React.createElement(_aphroditeCssTransitionGroup2.default,{key:"done",transitionStyle:this.delayedTransition(SECOND_DELAY),transitionAppearTimeout:0},React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.studentsWorking},i18n._("And now they're done!")))]}
t.prototype.imagePanelStyles=function e(t){var r=_aphrodite.StyleSheet.create({imagePanel:{backgroundImage:(0,_staticUrl.cssUrl)(t),backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"100%",position:"absolute",width:"100%"}})
return r.imagePanel}
t.prototype.renderImagePanel=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.imagePanel},React.createElement(_wonderBlocksCoreV.View,{key:"working",style:this.imagePanelStyles("/images/coach-dashboard/demo-thinking-1.gif")}),React.createElement(_aphroditeCssTransitionGroup2.default,{key:"retry",transitionStyle:this.delayedTransition(FIRST_DELAY),transitionAppearTimeout:0},React.createElement(_wonderBlocksCoreV.View,{style:this.imagePanelStyles("/images/coach-dashboard/demo-celebrate-2.gif")})),React.createElement(_aphroditeCssTransitionGroup2.default,{key:"done",transitionStyle:this.delayedTransition(SECOND_DELAY),transitionAppearTimeout:0},React.createElement(_wonderBlocksCoreV.View,{style:this.imagePanelStyles("/images/coach-dashboard/demo-finished-working-1.gif")})))}
t.prototype.render=function e(){return React.createElement(_contextCard2.default,{body:this.renderBody(),ctas:[React.createElement(_aphroditeCssTransitionGroup2.default,{transitionStyle:this.delayedTransition(THIRD_DELAY),transitionAppearTimeout:0},React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksButtonV2.default,{onClick:this.props.onCtaClick,"data-test-id":"demo-class-context-card-proceed-button"},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n._("Check out your assignment report")))))],imagePanel:this.renderImagePanel()})}
return t}(React.Component)
exports.default=AssignmentContextCard
var styles=_aphrodite.StyleSheet.create({imagePanel:{height:"100%",position:"relative",width:"100%"},studentsWorking:{paddingBottom:24}})

});
KAdefine("javascript/demo-class-package/components/context-cards/context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _modal,_contextCard,_imageContainer,_textContainer,_cta
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksSpacingV=require("@khanacademy/wonder-blocks-spacing-v2")
var _wonderBlocksSpacingV2=babelHelpers.interopRequireDefault(_wonderBlocksSpacingV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _fullscreenConfetti=require("../../../components/confetti-package/fullscreen-confetti.jsx")
var _fullscreenConfetti2=babelHelpers.interopRequireDefault(_fullscreenConfetti)
var _viewportWatcher=require("../../../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _globalStyles=require("../../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _ka=require("../../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _modal2=require("../../../components/modal-package/modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var CONFETTI_DENSITY=4e-4
var CONFETTI_DURATION=2e3
var CONFETTI_Y_START=-40
var VERTICAL_FLOW_QUERY=_mediaQueries2.default.mdOrSmaller
var FULLSCREEN_QUERY=_mediaQueries2.default.xsOrSmaller
var ContextCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){this._confettiElement&&this._confettiElement.startConfetti(window.innerWidth/2,CONFETTI_Y_START)}
t.prototype.renderConfetti=function e(){var t=this
if(_ka2.default.prefersReducedMotion()){return null}var r=window.innerHeight*window.innerWidth*CONFETTI_DENSITY
return React.createElement("div",{className:(0,_aphrodite.css)(styles.confettiContainer)},React.createElement(_fullscreenConfetti2.default,{ref:function e(r){return t._confettiElement=r},emitDuration:CONFETTI_DURATION,numParticles:r,spreadHorizontally:true}))}
t.prototype.renderCTAs=function e(t){var r=this.props.ctas
if(r){var a=t==="reversed"?r.slice().reverse():r
return a.map(function(e,t){return React.createElement(_wonderBlocksCoreV.View,{key:t,style:styles.cta},e)})}}
t.prototype.renderCard=function e(t){var r=this.props,a=r.body,o=r.imageCssUrl,n=r.imagePanel,l=r.title,i=r.useLargeTitle
return React.createElement(_wonderBlocksCoreV.View,{style:styles.contextCard},React.createElement(_wonderBlocksCoreV.View,{style:[styles.imageContainer,{backgroundImage:o}]},n),React.createElement(_wonderBlocksCoreV.View,{style:styles.textContainer},l&&React.createElement(_wonderBlocksCoreV.View,{style:styles.title},i?React.createElement(_wonderBlocksTypographyV.Title,null,l):React.createElement(_wonderBlocksTypographyV.HeadingLarge,null,l)),a&&React.createElement(_wonderBlocksCoreV.View,{style:styles.body},a.map(function(e){return e})),t&&this.renderCTAs()))}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.onCloseModal,o=r.showConfetti
return React.createElement(_viewportWatcher2.default,null,function(e){var r=e.matchesQuery
var n=r(VERTICAL_FLOW_QUERY)
return React.createElement(React.Fragment,null,o&&t.renderConfetti(),React.createElement(_modal3.default,{style:styles.modal,hideCloseIcon:true,onClose:a,preventDismissal:true},t.renderCard(!n),n&&React.createElement(_modal2.ModalFooter,{style:{justifyContent:"flex-end"}},t.renderCTAs("reversed"))))})}
return t}(React.Component)
ContextCard.defaultProps={showConfetti:false,useLargeTitle:true}
exports.default=ContextCard
var CARD_MIN_HEIGHT=407
var IMAGE_WIDTH=432
var TEXT_WIDTH=457
var TABLET_GUTTER=52
var styles=_aphrodite.StyleSheet.create({modal:(_modal={},_modal[VERTICAL_FLOW_QUERY]={width:"calc(100% - "+2*TABLET_GUTTER+"px)",height:"calc(100% - "+2*TABLET_GUTTER+"px)"},_modal[FULLSCREEN_QUERY]={width:"100%",height:"100%",borderRadius:0},_modal),contextCard:(_contextCard={display:"flex",flexDirection:"row",pointerEvents:"auto",minHeight:CARD_MIN_HEIGHT},_contextCard[VERTICAL_FLOW_QUERY]={flexDirection:"column",flexGrow:1},_contextCard),confettiContainer:{position:"fixed",top:0,left:0,zIndex:_globalStyles2.default.constants.zindexAboveModal,pointerEvents:"none"},imageContainer:(_imageContainer={backgroundColor:_wonderBlocksColorV2.default.offWhite,backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px",width:IMAGE_WIDTH,minHeight:"100%"},_imageContainer[VERTICAL_FLOW_QUERY]={width:"100%",height:"50vh",minHeight:"50vh"},_imageContainer),textContainer:(_textContainer={backgroundColor:_wonderBlocksColorV2.default.white,borderRadius:"0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0",padding:_wonderBlocksSpacingV2.default.xxxLarge,width:TEXT_WIDTH},_textContainer[VERTICAL_FLOW_QUERY]={width:"100%",flexGrow:1,display:"block"},_textContainer[FULLSCREEN_QUERY]={padding:_wonderBlocksSpacingV2.default.medium},_textContainer),title:{paddingBottom:_wonderBlocksSpacingV2.default.medium},body:{paddingBottom:_wonderBlocksSpacingV2.default.medium},cta:(_cta={padding:"0px "+_wonderBlocksSpacingV2.default.xxxSmall,width:"100%"},_cta[VERTICAL_FLOW_QUERY]={padding:_wonderBlocksSpacingV2.default.medium,width:"unset"},_cta[FULLSCREEN_QUERY]={width:"100%"},_cta)})

});
KAdefine("javascript/demo-class-package/components/context-cards/end-context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouterDom=require("react-router-dom")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _staticUrl=require("../../../shared-package/static-url.js")
var _contextCard=require("./context-card.jsx")
var _contextCard2=babelHelpers.interopRequireDefault(_contextCard)
var i18n=require("../../../shared-package/i18n.js")
var EndContextCard=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderCtas=function e(r){var t=this
return[React.createElement(_wonderBlocksButtonV2.default,{onClick:function e(){return t.props.onCtaClick("create-class").then(function(){return window.location="/coach/dashboard"})},"data-test-id":"demo-class-context-card-proceed-button"},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n._("Get started with your real class")))]}
r.prototype.render=function e(){var r=this
return React.createElement(_reactRouterDom.Route,{render:function e(t){var a=t.history
return React.createElement(_contextCard2.default,{body:[React.createElement(_wonderBlocksTypographyV.Body,{key:"what-next"},i18n._("We've created a real class for you so you can check out content for your students."))],ctas:r.renderCtas(a),imageCssUrl:(0,_staticUrl.cssUrl)("/images/coach-dashboard/demo-tour-complete-1.gif"),showConfetti:true,title:i18n._("Congratulations, your tour is complete!"),useLargeTitle:true})}})}
return r}(React.Component)
exports.default=EndContextCard

});
KAdefine("javascript/demo-class-package/components/context-cards/exercise-context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _staticUrl=require("../../../shared-package/static-url.js")
var _contextCard=require("./context-card.jsx")
var _contextCard2=babelHelpers.interopRequireDefault(_contextCard)
var i18n=require("../../../shared-package/i18n.js")
var ExerciseContextCard=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement(_contextCard2.default,{body:[React.createElement(_wonderBlocksTypographyV.Body,{key:"greeting"},React.createElement(_wonderBlocksCoreV.View,null,i18n._("If you answer incorrectly, try again!")),React.createElement(_wonderBlocksCoreV.View,{style:styles.usingHints},i18n._("If your students' first answer is incorrect, or if they use hints (where available), they don't get credit for a correct answer.")))],ctas:[React.createElement(_wonderBlocksButtonV2.default,{onClick:this.props.onCtaClick,"data-test-id":"demo-class-context-card-proceed-button"},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n._("Answer one question")))],imageCssUrl:(0,_staticUrl.cssUrl)("/images/coach-dashboard/demo-answer-question-1.png"),onCloseModal:this.props.onCtaClick,title:i18n._("Answer one question."),useLargeTitle:false})}
return r}(React.Component)
exports.default=ExerciseContextCard
var styles=_aphrodite.StyleSheet.create({usingHints:{paddingTop:22}})

});
KAdefine("javascript/demo-class-package/components/context-cards/intro-context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.IntroContextCard=undefined
var _exitLinkContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksSpacingV=require("@khanacademy/wonder-blocks-spacing-v2")
var _wonderBlocksSpacingV2=babelHelpers.interopRequireDefault(_wonderBlocksSpacingV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _clientLink=require("../../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _staticUrl=require("../../../shared-package/static-url.js")
var _mediaQueries=require("../../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _demoClassProvider=require("../../demo-class-provider.js")
var _demoClassProvider2=babelHelpers.interopRequireDefault(_demoClassProvider)
var _contextCard=require("./context-card.jsx")
var _contextCard2=babelHelpers.interopRequireDefault(_contextCard)
var i18n=require("../../../shared-package/i18n.js")
var IntroContextCard=exports.IntroContextCard=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,o
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,l=Array(n),i=0;i<n;i++){l[i]=arguments[i]}return o=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={deferredCtaClick:false},a.handleProceedClick=function(){var e=a.props,r=e.onCtaClick,t=e.ready
if(t){r()}else{a.setState({deferredCtaClick:true})}},t),babelHelpers.possibleConstructorReturn(a,o)}r.prototype.UNSAFE_componentWillReceiveProps=function e(r){var t=this.props,a=t.ready,o=t.onCtaClick
var n=this.state.deferredCtaClick
if(!a&&r.ready){if(n){o()
this.setState({deferredCtaClick:false})}}}
r.prototype.render=function e(){var r=this.props,t=r.step,a=r.topicTitle
var o=this.state.deferredCtaClick
var n=i18n._("Get started with your real class")
return React.createElement(_contextCard2.default,{body:[React.createElement(_wonderBlocksTypographyV.Body,{key:"0"},i18n._("You'll learn about:")),React.createElement(_wonderBlocksTypographyV.Body,{key:"1",style:styles.bullet},i18n._("1. Practice exercises")),React.createElement(_wonderBlocksTypographyV.Body,{key:"2",style:styles.bullet},i18n._("2. Creating assignments")),React.createElement(_wonderBlocksTypographyV.Body,{key:"3",style:styles.bullet},i18n._("3. Assignment reports"))],ctas:[React.createElement(_wonderBlocksButtonV2.default,{onClick:this.handleProceedClick,disabled:o,"data-test-id":"demo-class-context-card-proceed-button"},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,o?i18n._("Preparing your sample class..."):i18n._("Tour your sample class"))),React.createElement(_wonderBlocksCoreV.View,{style:[styles.exitLinkContainer,o&&styles.exitLinkFade]},React.createElement(_clientLink2.default,{forceServer:true,to:"/coach/dashboard",className:(0,_aphrodite.css)(styles.exitLink),conversions:[{id:"demo_class_early_exit",extra:{step:t.name}}]},React.createElement(_wonderBlocksTypographyV.Body,null,n)))],imageCssUrl:(0,_staticUrl.cssUrl)("/images/coach-dashboard/demo-tour-start-1.png"),title:i18n.$_("Take a 4-minute tour of your sample %(title)s class",{title:a}),useLargeTitle:false})}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({bullet:{paddingLeft:10},exitLinkContainer:(_exitLinkContainer={textAlign:"center"},_exitLinkContainer[_mediaQueries2.default.lgOrLarger]={paddingTop:_wonderBlocksSpacingV2.default.medium},_exitLinkContainer),exitLink:{textDecoration:"none",color:_wonderBlocksColorV2.default.offBlack64},exitLinkFade:{transition:"0.6s opacity",opacity:0,pointerEvents:"none"}})
var mapStateToProps=function e(r){var t=r.contentToDemo,a=r.progress,o=r.ready
return{ready:a.hasAllWaypoints,step:a.step,topicTitle:t.topicTitle}}
exports.default=(0,_demoClassProvider2.default)((0,_reactRedux.connect)(mapStateToProps)(IntroContextCard))

});
KAdefine("javascript/demo-class-package/components/context-cards/welcome-context-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _staticUrl=require("../../../shared-package/static-url.js")
var _contextCard=require("./context-card.jsx")
var _contextCard2=babelHelpers.interopRequireDefault(_contextCard)
var i18n=require("../../../shared-package/i18n.js")
var WelcomeContextCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement(_contextCard2.default,{body:[React.createElement(_wonderBlocksTypographyV.Body,{key:"greeting"},i18n._("We're excited to have you join over 1 million teachers using Khan Academy."))],ctas:[React.createElement(_wonderBlocksButtonV2.default,{"data-test-id":"welcome-context-card-button",onClick:this.props.onCtaClick},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n._("Let's get started")))],imageCssUrl:(0,_staticUrl.cssUrl)("/images/coach-dashboard/demo-welcooome.png"),insideModal:true,onCloseModal:this.props.onCtaClick,showConfetti:true,title:i18n._("Welcome to Khan Academy!"),useLargeTitle:true})}
return t}(React.Component)
exports.default=WelcomeContextCard

});
KAdefine("javascript/demo-class-package/components/guider-mask/guider-mask.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../../shared-styles-package/global-styles.js")
var _viewportWatcher=require("../../../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _scrollDisabler=require("../../../components/modal-package/scroll-disabler.jsx")
var _scrollDisabler2=babelHelpers.interopRequireDefault(_scrollDisabler)
var _rectangleMask=require("./rectangle-mask.jsx")
var _rectangleMask2=babelHelpers.interopRequireDefault(_rectangleMask)
var GuiderMask=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getRects=function e(){var r=this.props,t=r.elements,a=r.transforms
return t.map(function(e){var r=e.getBoundingClientRect()
var t=a.get(e)
if(t){return t(r)}else{return r}})}
r.prototype.render=function e(){var r=this
var t=this.props.disableScroll
return React.createElement(_viewportWatcher2.default,{updateOnBreakpointOnly:false},function(e){var a=e.width,l=e.height
var s={top:0,left:0,right:a,bottom:l}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.overlay),style:s},t&&React.createElement(_scrollDisabler2.default,null),React.createElement(_rectangleMask2.default,{color:_globalStyles.constants.dark,viewport:s,rects:r.getRects()}))})}
return r}(React.Component)
GuiderMask.defaultProps={disableScroll:true,transforms:new Map}
exports.default=GuiderMask
var styles=_aphrodite.StyleSheet.create({overlay:{position:"fixed",zIndex:_globalStyles.constants.zindexModal+1,opacity:.72}})

});
KAdefine("javascript/demo-class-package/components/guider-mask/rectangle-mask.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var intersect=function t(e,r){if(e.left>=r.right||e.right<=r.left){return false}if(e.top>=r.bottom||e.bottom<=r.top){return false}return true}
var RectangleMask=function(t){babelHelpers.inherits(e,t)
function e(){babelHelpers.classCallCheck(this,e)
return babelHelpers.possibleConstructorReturn(this,t.apply(this,arguments))}e.prototype.render=function t(){var e=this.props,r=e.color,n=e.rects,o=e.viewport
var a=[].concat(n,[o])
var c=function t(e){return Array.from(new Set(e)).sort(function(t,e){return t-e})}
var i=c(a.reduce(function(t,e){return[].concat(t,[e.left,e.right])},[]))
var l=c(a.reduce(function(t,e){return[].concat(t,[e.top,e.bottom])},[]))
var s=[]
for(var u=0;u<i.length-1;u++){var f=i.slice(u,u+2),p=f[0],v=f[1]
var h=function t(e){var r=l.slice(e,e+2),o=r[0],a=r[1]
var c={top:o,bottom:a,left:p,right:v}
if(!n.some(function(t){return intersect(t,c)})){s.push(c)}}
for(var b=0;b<l.length-1;b++){h(b)}}return React.createElement("svg",{style:{pointerEvents:"none"},width:o.right-o.left,height:o.bottom-o.top},s.map(function(t,e){var n=t.left,o=t.right,a=t.bottom,c=t.top
return React.createElement("rect",{style:{pointerEvents:"fill",fill:r,stroke:r},key:e,x:n,y:c,width:o-n,height:a-c})}))}
return e}(React.PureComponent)
RectangleMask.defaultProps={color:"black"}
exports.default=RectangleMask

});
KAdefine("javascript/demo-class-package/components/tooltip/base-tooltip.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.TOOLTIP_INNER_WIDTH=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactMotion=require("react-motion")
var _globalStyles=require("../../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var TRANSITION_DISTANCE_PX=30
var BaseTooltip=function(t){babelHelpers.inherits(e,t)
function e(){var r,o,a
babelHelpers.classCallCheck(this,e)
for(var i=arguments.length,s=Array(i),n=0;n<i;n++){s[n]=arguments[n]}return a=(r=(o=babelHelpers.possibleConstructorReturn(this,t.call.apply(t,[this].concat(s))),o),o.state={visible:false,measured:false},o.contentRef=function(t){o.contentElement=t},o.mounted=false,o.contentElement=null,r),babelHelpers.possibleConstructorReturn(o,a)}e.prototype.componentDidMount=function t(){var e=this
var r=this.props.delaySeconds
this.mounted=true
setTimeout(function(){if(e.mounted){e.setState({measured:true})
setTimeout(function(){if(e.mounted){e.setState({visible:true})}},r*1e3)}},0)}
e.prototype.componentWillUnmount=function t(){this.mounted=false}
e.prototype.getXAxisData=function t(){var e=this.props.target.getBoundingClientRect(),r=e.left,o=e.width
return{axis:"left",calloutPos:r,calloutSize:o,contentSize:this.contentElement?this.contentElement.clientWidth:0,caretSize:CARET_WIDTH}}
e.prototype.getYAxisData=function t(){var e=this.props.target.getBoundingClientRect(),r=e.top,o=e.height
return{axis:"top",calloutPos:r,calloutSize:o,contentSize:this.contentElement?this.contentElement.clientHeight:0,caretSize:CARET_HEIGHT}}
e.prototype.getAxisData=function t(){var e=this.props.position
if(e==="top"||e==="bottom"){return{major:this.getYAxisData(),minor:this.getXAxisData()}}else{return{major:this.getXAxisData(),minor:this.getYAxisData()}}}
e.prototype.getPositionStyles=function t(){var e
var r=this.props,o=r.alignment,a=r.position
var i=this.getAxisData(),s=i.major,n=i.minor
var l=void 0
if(a==="top"||a==="left"){l=s.calloutPos-s.contentSize-OFFSET_FROM_CALLOUT}else{l=s.calloutPos+s.calloutSize+OFFSET_FROM_CALLOUT}var c=void 0
switch(o){case"near":c=n.calloutPos
break
case"center":c=n.calloutPos+n.calloutSize/2-n.contentSize/2
break
case"far":c=n.calloutPos+n.calloutSize-n.contentSize
break}return e={},e[s.axis]=l,e[n.axis]=c,e}
e.prototype.getCaretMinorAxisPosition=function t(e){var r=this.props.alignment
var o=e.calloutPos+e.calloutSize/2-e.caretSize/2
var a=0
switch(r){case"near":a=e.caretSize
return e.calloutPos+a
case"center":return o
case"far":a=-2*e.caretSize
return e.calloutPos+e.calloutSize+a}}
e.prototype.renderCaret=function t(){var e=this.props.position
var r=this.getAxisData(),o=r.major,a=r.minor
var i={bottom:0,top:180,left:90,right:270}
var s=e==="left"||e==="right"?(CARET_WIDTH-CARET_HEIGHT)/2:0
var n={transform:"rotate("+i[e]+"deg)",left:undefined,top:undefined}
if(e==="top"||e==="left"){n[o.axis]=o.calloutPos-OFFSET_FROM_CALLOUT-s
n[a.axis]=this.getCaretMinorAxisPosition(a)}else{n[o.axis]=o.calloutPos+o.calloutSize+CARET_OFFSET-s
n[a.axis]=this.getCaretMinorAxisPosition(a)}var l=_aphrodite.StyleSheet.create({iconTransforms:n})
return React.createElement("img",{alt:"",className:(0,_aphrodite.css)(styles.caret,l.iconTransforms),src:(0,_staticUrl2.default)("/images/coach/demo-tooltip-caret.svg")})}
e.prototype.getTransitionStyles=function t(e){var r=this.props.position
var o=r==="top"||r==="left"?-1:1
var a=r==="left"||r==="right"?"translateX":"translateY"
var i=o*TRANSITION_DISTANCE_PX*(1-e)
return{transform:a+"("+i.toString()+"px)",opacity:e}}
e.prototype.renderContents=function t(e,r){var o=this.props.content
return React.createElement("div",{className:(0,_aphrodite.css)(!r&&styles.invisible),style:e},React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltip),ref:this.contentRef,style:this.getPositionStyles()},o),this.renderCaret())}
e.prototype.render=function t(){var e=this
var r=this.props.target
var o=this.state,a=o.visible,i=o.measured
if(!r){return null}if(!i||!a){return this.renderContents({},false)}return React.createElement(_reactMotion.Motion,{defaultStyle:{progress:0},style:{progress:(0,_reactMotion.spring)(1)}},function(t){var r=t.progress
return e.renderContents(e.getTransitionStyles(r),true)})}
return e}(React.Component)
BaseTooltip.defaultProps={delaySeconds:0}
exports.default=BaseTooltip
var OFFSET_FROM_CALLOUT=18
var CARET_HEIGHT=14
var CARET_WIDTH=24
var CARET_TOOLTIP_OVERLAP=2
var CARET_OFFSET=OFFSET_FROM_CALLOUT-CARET_HEIGHT+CARET_TOOLTIP_OVERLAP
var TOOLTIP_WIDTH=542
var TOOLTIP_PADDING=32
var TOOLTIP_INNER_WIDTH=exports.TOOLTIP_INNER_WIDTH=TOOLTIP_WIDTH-2*TOOLTIP_PADDING
var styles=_aphrodite.StyleSheet.create({tooltip:{minWidth:TOOLTIP_INNER_WIDTH,padding:TOOLTIP_PADDING,border:"solid 1px rgba(33, 36, 44, 0.16)",borderRadius:_globalStyles2.default.borderRadius,boxShadow:"2px 6px 14px rgba(0, 0, 0, 0.15)",backgroundColor:_globalStyles2.default.colors.white,position:"absolute"},caret:{position:"absolute",height:CARET_HEIGHT,width:CARET_WIDTH,filter:"drop-shadow(2px 6px 14px rgba(0, 0, 0, 0.15))"},invisible:{visibility:"hidden",pointerEvents:"none"}})

});
KAdefine("javascript/demo-class-package/components/tooltip/demo-class-tooltip.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var ReactDOM=babelHelpers.interopRequireWildcard(_reactDom)
var _aphrodite=require("aphrodite")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _staticUrl=require("../../../shared-package/static-url.js")
var _focusTrap=require("../util/focus-trap.jsx")
var _focusTrap2=babelHelpers.interopRequireDefault(_focusTrap)
var _baseTooltip=require("./base-tooltip.jsx")
var _baseTooltip2=babelHelpers.interopRequireDefault(_baseTooltip)
var MODAL_HACK_CLASSNAME="posing-as-a-modal"
var DemoClassTooltip=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,o
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),l=0;l<n;l++){s[l]=arguments[l]}return o=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.hackButtonFocusRef=function(e,t){var a=e instanceof React.Component&&ReactDOM.findDOMNode(e)
if(a instanceof Element){a.classList.add(MODAL_HACK_CLASSNAME)
t(a)}},a),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.renderContent=function e(t){var a=this
var r=this.props,o=r.buttonLabel,n=r.title,s=r.text,l=r.onButtonClick
var c=s instanceof Array?s:[s]
return React.createElement("div",{className:(0,_aphrodite.css)(styles.wrap)},React.createElement("div",{className:(0,_aphrodite.css)(styles.image)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.fixedWidth},n),React.createElement("div",{className:(0,_aphrodite.css)(styles.contentText,styles.fixedWidth)},c.map(function(e,t){return React.createElement(_wonderBlocksTypographyV.Body,{key:t,style:styles.text},e)})),React.createElement(_wonderBlocksButtonV2.default,{ref:function e(r){return a.hackButtonFocusRef(r,t)},onClick:function e(){return l&&l(new MouseEvent("click"))},"data-test-id":"demo-class-tooltip-button",style:styles.ctaBtn},o)))}
t.prototype.render=function e(){var t=this
var a=this.props,r=a.alignment,o=a.delaySeconds,n=a.position,s=a.target
return React.createElement(_focusTrap2.default,null,function(e){return React.createElement(_baseTooltip2.default,{alignment:r,content:t.renderContent(e),delaySeconds:o,position:n,target:s})})}
return t}(React.Component)
exports.default=DemoClassTooltip
var IMAGE_WIDTH=98
var IMAGE_PADDING=12
var TEXT_WIDTH=_baseTooltip.TOOLTIP_INNER_WIDTH-IMAGE_WIDTH-IMAGE_PADDING
var styles=_aphrodite.StyleSheet.create({wrap:{display:"flex",pointerEvents:"all"},image:{flexShrink:0,width:IMAGE_WIDTH,backgroundPosition:"62% center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:(0,_staticUrl.cssUrl)("/images/coach-dashboard/pencil-with-wand-1.png"),marginRight:IMAGE_PADDING},content:{display:"flex",flexDirection:"column",flexGrow:1},fixedWidth:{width:TEXT_WIDTH},contentText:{flexGrow:1},text:{paddingTop:24,paddingBottom:24},ctaBtn:{width:"100%"}})

});
KAdefine("javascript/demo-class-package/components/util/focus-trap.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var ReactDOM=babelHelpers.interopRequireWildcard(_reactDom)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var FocusTrap=function(e){babelHelpers.inherits(t,e)
function t(o){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,o))
r.getRoot=function(e){if(!e){return}var t=ReactDOM.findDOMNode(e)
if(!t){throw new Error("Assertion error: root should exist after mount")}r.rootNode=t}
r.handleGlobalFocus=function(e){if(r.ignoreFocusChanges){return}var t=e.target
if(!(t instanceof Node)){return}var o=r.rootNode
if(!o){return}if(o.contains(t)){r.lastNodeFocusedInRoot=t}else{r.focusFirstElementIn(o)
if(document.activeElement===r.lastNodeFocusedInRoot){r.focusLastElementIn(o)}r.lastNodeFocusedInRoot=document.activeElement}}
r.lastNodeFocusedInRoot=null
r.ignoreFocusChanges=false
return r}t.prototype.componentDidMount=function e(){window.addEventListener("focus",this.handleGlobalFocus,true)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("focus",this.handleGlobalFocus,true)}
t.prototype.tryToFocus=function e(t){if(t instanceof HTMLElement){this.ignoreFocusChanges=true
try{t.focus()}catch(e){}this.ignoreFocusChanges=false
return document.activeElement===t}}
t.prototype.focusFirstElementIn=function e(t){var o=t.childNodes
for(var r=0;r<o.length;r++){var n=o[r]
if(this.tryToFocus(n)||this.focusFirstElementIn(n)){return true}}return false}
t.prototype.focusLastElementIn=function e(t){var o=t.childNodes
for(var r=o.length-1;r>=0;r--){var n=o[r]
if(this.tryToFocus(n)||this.focusLastElementIn(n)){return true}}return false}
t.prototype.render=function e(){return React.createElement(React.Fragment,null,React.createElement("div",{tabIndex:"0"}),React.createElement(_wonderBlocksCoreV.View,{ref:this.getRoot},this.props.children(this.tryToFocus)),React.createElement("div",{tabIndex:"0"}))}
return t}(React.Component)
exports.default=FocusTrap

});
KAdefine("javascript/demo-class-package/components/util/interval.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var Interval=function(t){babelHelpers.inherits(e,t)
function e(){var r,n,a
babelHelpers.classCallCheck(this,e)
for(var l=arguments.length,o=Array(l),i=0;i<l;i++){o[i]=arguments[i]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,t.call.apply(t,[this].concat(o))),n),n.state={timestamp:Date.now()},n.interval=null,n.mounted=false,n.handleUpdatedInterval=function(){if(n.mounted){n.setState({timestamp:Date.now()})}},r),babelHelpers.possibleConstructorReturn(n,a)}e.prototype.componentDidMount=function t(){this.mounted=true
this.setupInterval(this.props)}
e.prototype.UNSAFE_componentWillReceiveProps=function t(e){if(this.props.interval!==e.interval){this.setupInterval(e)}}
e.prototype.componentWillUnmount=function t(){this.mounted=false
this.clearInterval()}
e.prototype.clearInterval=function t(){if(this.interval){window.clearInterval(this.interval)}}
e.prototype.setupInterval=function t(e){this.clearInterval()
this.interval=window.setInterval(this.handleUpdatedInterval,e.interval)}
e.prototype.render=function t(){var e=this.state.timestamp
return this.props.children(e)}
return e}(React.Component)
Interval.defaultProps={interval:1e3/60}
exports.default=Interval

});
KAdefine("javascript/demo-class-package/components/demo-class-overlay.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactRedux=require("react-redux")
var _reactRouterDom=require("react-router-dom")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _scrollUtils=require("../../scroll-utils-package/scroll-utils.js")
var _viewportWatcher=require("../../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _actions=require("../redux/actions.js")
var _store=require("../redux/store.js")
var _store2=babelHelpers.interopRequireDefault(_store)
var _demoClassProvider=require("../demo-class-provider.js")
var _demoClassProvider2=babelHelpers.interopRequireDefault(_demoClassProvider)
var _demoClassSteps=require("../demo-class-steps.js")
var _demoClassSteps2=babelHelpers.interopRequireDefault(_demoClassSteps)
var _assignmentContextCard=require("./context-cards/assignment-context-card.jsx")
var _assignmentContextCard2=babelHelpers.interopRequireDefault(_assignmentContextCard)
var _endContextCard=require("./context-cards/end-context-card.jsx")
var _endContextCard2=babelHelpers.interopRequireDefault(_endContextCard)
var _exerciseContextCard=require("./context-cards/exercise-context-card.jsx")
var _exerciseContextCard2=babelHelpers.interopRequireDefault(_exerciseContextCard)
var _introContextCard=require("./context-cards/intro-context-card.jsx")
var _introContextCard2=babelHelpers.interopRequireDefault(_introContextCard)
var _demoClassTooltip=require("./tooltip/demo-class-tooltip.jsx")
var _demoClassTooltip2=babelHelpers.interopRequireDefault(_demoClassTooltip)
var _guiderMask=require("./guider-mask/guider-mask.jsx")
var _guiderMask2=babelHelpers.interopRequireDefault(_guiderMask)
var _interval=require("./util/interval.jsx")
var _interval2=babelHelpers.interopRequireDefault(_interval)
var _progressBar=require("./progress-bar.jsx")
var _progressBar2=babelHelpers.interopRequireDefault(_progressBar)
var mapNameToContextCard=function e(t){switch(t){case"intro":return _introContextCard2.default
case"exercise":return _exerciseContextCard2.default
case"assign":return _assignmentContextCard2.default
case"complete":return _endContextCard2.default}}
var deriveScrollTarget=function e(t){var r=t.map(function(e){var t=e.element,r=e.definition
if(r.scroller){return r.scroller(t,t.offsetTop)}return null}).filter(function(e){return e!==null})
if(r.length>0){if(r.length>1){console.warn("Multiple matched waypoints declare a"+"scoller, but we can only scroll to one.")}return r[0]}return null}
var scrollElementIntoView=function e(t,r){var a=5
var o=window.innerHeight/2
var s=function e(){var s=window.pageYOffset
var n=t.getBoundingClientRect(),i=n.top
var l=i-o
var p=l/a
var u=Math.abs(p)<1
window.scrollBy(0,p)
if(window.pageYOffset===s||u){r()}else{requestAnimationFrame(e)}}
requestAnimationFrame(s)}
var DemoClassOverlay=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,n=Array(s),i=0;i<s;i++){n[i]=arguments[i]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={scrolling:false,hasGlobalTooltipTarget:false},a.mounted=false,a.globalTooltipTarget=null,a.handleGlobalTooltipRef=function(e){a.globalTooltipTarget=e},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.componentDidMount=function e(){this.mounted=true
this.revealWaypoints(this.props)}
t.prototype.UNSAFE_componentWillUpdate=function e(t){var r=!this.props.hasAllWaypoints&&t.hasAllWaypoints
var a=this.props.hasAllWaypoints&&!t.hasAllWaypoints
var o=this.props.step!==t.step&&t.hasAllWaypoints
if(r||o){this.scrollIntoPosition(t.matchedWaypoints)}if(r||a){this.revealWaypoints(t)}}
t.prototype.componentDidUpdate=function e(){if(this.props.redirect){_store2.default.dispatch((0,_actions.redirect)(null))}}
t.prototype.componentWillUnmount=function e(){this.mounted=false}
t.prototype.revealWaypoints=function e(t){var r=this
if(t.hasAllWaypoints){var a=t.step.revealDelaySeconds
var o=function e(){return r.setState({revealWaypoints:true})}
if(a||a===0){setTimeout(function(){if(r.mounted){o()}},a*1e3)}else{o()}}else{this.setState({revealWaypoints:false})}}
t.prototype.scrollIntoPosition=function e(t){var r=this
var a=1e3
var o=deriveScrollTarget(t)
var s=function e(){if(r.mounted){r.setState({scrolling:false})}}
if(o===null){return}if(o instanceof Element){scrollElementIntoView(o,s)}else{(0,_scrollUtils.scrollToOffset)(o,a,s)}this.setState({scrolling:true})}
t.prototype.getGuiderMaskProps=function e(){var t=this.props.matchedWaypoints
var r=this.state,a=r.scrolling,o=r.revealWaypoints
var s=!a
var n=[]
var i=new Map
for(var l=t,p=Array.isArray(l),u=0,l=p?l:l[Symbol.iterator]();;){var c
if(p){if(u>=l.length)break
c=l[u++]}else{u=l.next()
if(u.done)break
c=u.value}var d=c
var v=d.definition,f=d.element
if(v.guiderMaskCutout&&f){n.push(f)}if(v.guiderMaskCutoutTransform){i.set(f,v.guiderMaskCutoutTransform)}}return{elements:s&&o?n:[],disableScroll:s,transforms:i}}
t.prototype.renderGuiderMask=function e(){var t=this.props.step
if(!t.guiderMask){return null}return React.createElement(_guiderMask2.default,this.getGuiderMaskProps())}
t.prototype.renderTooltips=function e(t){var r=this
var a=t.width,o=t.height
var s=this.props,n=s.matchedWaypoints,i=s.step
var l=this.state,p=l.scrolling,u=l.revealWaypoints
if(p||!u){return null}var c=n.map(function(e){var t=e.element,a=e.definition,o=e.modifiedProps
if(a.tooltip){var s=a.tooltip
return babelHelpers.extends({},s(o),{target:t})}else if(a.globalTooltip&&r.globalTooltipTarget){return babelHelpers.extends({},a.globalTooltip(o),{target:r.globalTooltipTarget})}}).filter(function(e){return e})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.overlay,styles.tooltips),style:{width:a,height:o}},c.map(function(e,t){return React.createElement(_demoClassTooltip2.default,babelHelpers.extends({},e,{key:t+"-"+i.name}))}))}
t.prototype.renderContextCard=function e(){var t=this.props.step.contextCard
if(t){var r=mapNameToContextCard(t.name)
var a=t.onCtaClick
return React.createElement(r,{onCtaClick:function e(t){if(a){return a(t).then(function(){return _store2.default.dispatch((0,_actions.nextStep)())})}else{_store2.default.dispatch((0,_actions.nextStep)())}}})}}
t.prototype.renderRedirect=function e(){var t=this.props.redirect
if(t){return React.createElement(_reactRouterDom.Redirect,{push:false,to:t})}}
t.prototype.renderProgressBar=function e(){var t=this.props.step
return React.createElement("div",{className:(0,_aphrodite.css)(styles.overlay,styles.progressBar)},!t.hideProgressBar&&React.createElement(_progressBar2.default,{steps:_demoClassSteps2.default,currentStep:t,mapPartsToNames:_demoClassSteps.mapPartsToNames,onSpyTooltipRef:this.handleGlobalTooltipRef}))}
t.prototype.render=function e(){var t=this
return React.createElement(_viewportWatcher2.default,{updateOnBreakpointOnly:false},function(e){var r=e.width,a=e.height
return React.createElement("div",null,React.createElement(_interval2.default,null,function(){return React.createElement("div",null,t.renderGuiderMask(),t.renderTooltips({width:r,height:a}))}),t.renderRedirect(),t.renderContextCard(),t.renderProgressBar())})}
return t}(React.Component)
var styles=_aphrodite.StyleSheet.create({overlay:{pointerEvents:"none",position:"fixed",zIndex:_globalStyles.constants.zindexModal+1},tooltips:{left:0,top:0},progressBar:{bottom:0}})
var mapStateToProps=function e(t){var r=t.progress,a=t.redirect
var o=r.hasAllWaypoints,s=r.matchedWaypoints,n=r.step
return{hasAllWaypoints:o,matchedWaypoints:s,step:n,redirect:a}}
exports.default=(0,_demoClassProvider2.default)((0,_reactRedux.connect)(mapStateToProps)(DemoClassOverlay))

});
KAdefine("javascript/demo-class-package/components/progress-bar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _aphroditeCssTransitionGroup=require("../../shared-styles-package/aphrodite-css-transition-group.jsx")
var _aphroditeCssTransitionGroup2=babelHelpers.interopRequireDefault(_aphroditeCssTransitionGroup)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../../shared-package/static-url.js")
var i18n=require("../../shared-package/i18n.js")
var ProgressBar=function(e){babelHelpers.inherits(r,e)
function r(){var t,o,a
babelHelpers.classCallCheck(this,r)
for(var s=arguments.length,n=Array(s),l=0;l<s;l++){n[l]=arguments[l]}return a=(t=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),o),o.escFunction=function(e){if(e.keyCode===27){var r=confirm("Are you sure you want to exit the tour?")
if(r){window.location.href="/coach/dashboard"}}},o.mounted=false,o.tooltipTargetRef=function(e){var r=o.props.onSpyTooltipRef
if(e instanceof HTMLElement){r&&r(e)}},t),babelHelpers.possibleConstructorReturn(o,a)}r.prototype.componentDidMount=function e(){this.mounted=true
document.addEventListener("keydown",this.escFunction,false)}
r.prototype.componentWillUnmount=function e(){this.mounted=false
document.removeEventListener("keydown",this.escFunction,false)}
r.prototype.sequentialParts=function e(){return this.props.steps.reduce(function(e,r){if(e.length===0||e[e.length-1]!==r.part){return e.concat([r.part])}return e},[])}
r.prototype.totalParts=function e(){return this.sequentialParts().length}
r.prototype.lastPart=function e(){return this.props.steps.slice(-1)[0].part}
r.prototype.totalSteps=function e(r){var t=this.props.steps.filter(function(e){return e.part===r})
var o=t.reduce(function(e,r){return Math.max(e,r.stepNumber)},0)
var a=t.reduce(function(e,r){return Math.min(e,r.stepNumber)},Infinity)
return o-a+1}
r.prototype.getOrdinalForPart=function e(r){return this.sequentialParts().indexOf(r)+1}
r.prototype.renderPossibleProgress=function e(){var r=[]
for(var t=0;t<this.totalParts();t++){r.push(React.createElement(_wonderBlocksCoreV.View,{key:t,style:[styles.bar,styles.unfilledBar,styles.fullLengthBar]}))}return React.createElement(_wonderBlocksCoreV.View,{style:styles.unfilledBars},r)}
r.prototype.renderFilledProgress=function e(){var r=this.props,t=r.steps,o=r.currentStep
var a=t.indexOf(t.filter(function(e){return e.part===o.part&&e.stepNumber===o.stepNumber})[0])
var s=[]
var n=0
for(var l=0;l<=a;l++){var i=t[l],c=i.part,d=i.stepNumber
var p=l===0?0:t[l-1].stepNumber
var u=(d-p)/this.totalSteps(c)*BAR_WIDTH
var f=u/BAR_WIDTH*BAR_FILL_DURATION
var h=n/BAR_WIDTH*BAR_FILL_DURATION
var y=_aphrodite.StyleSheet.create({appear:{width:0},appearActive:{width:u,transition:"width "+f+"s linear "+h+"s"}})
var b=this.getOrdinalForPart(c)-1
var g=b===0?0:this.totalSteps(this.sequentialParts()[b-1])
var m=void 0
if(l===0&&l===a){m=styles.allRoundedBar}else if(l===0){m=styles.leftRoundedBar}else if(d===g+this.totalSteps(c)&&c!==this.lastPart()){m=styles.rightBorderBar}else{m=styles.lastRightRoundedBar}s.push(React.createElement(_wonderBlocksCoreV.View,{key:l,style:[styles.bar,styles.filledBar,m]},React.createElement(_aphroditeCssTransitionGroup2.default,{key:l+"-transition",transitionStyle:y,transitionAppearTimeout:0},React.createElement(_wonderBlocksCoreV.View,{key:l}))))
n+=u}return React.createElement(_wonderBlocksCoreV.View,{style:styles.filledBars},s)}
r.prototype.render=function e(){var r=this
var t=this.props,o=t.currentStep,a=t.mapPartsToNames
var s=o.part
var n=this.getOrdinalForPart(s)
var l=a(s)
return React.createElement(_wonderBlocksCoreV.View,{style:styles.progressBarContainer},React.createElement("div",{className:(0,_aphrodite.css)(styles.companionImage),ref:function e(t){return r.tooltipTargetRef(t)}}),React.createElement(_wonderBlocksCoreV.View,{style:styles.progressDetails},React.createElement(_wonderBlocksCoreV.View,{style:styles.progressTexts},React.createElement(_wonderBlocksTypographyV.LabelMedium,null,i18n.$_("Part %(currentPartNumber)s of %(totalParts)s: %(currentPartName)s",{currentPartName:l,currentPartNumber:n,totalParts:this.totalParts()})),React.createElement(_clientLink2.default,{forceServer:true,to:"/coach/dashboard",className:(0,_aphrodite.css)(styles.exitLink),conversions:[{id:"demo_class_early_exit",extra:{step:o.name}}]},React.createElement(_wonderBlocksTypographyV.LabelMedium,null,i18n._("Exit tour (esc)")))),React.createElement(_wonderBlocksCoreV.View,{style:styles.progressBar},this.renderPossibleProgress(),this.renderFilledProgress())))}
return r}(React.Component)
exports.default=ProgressBar
var BAR_WIDTH=105
var BAR_FILL_DURATION=.6
var styles=_aphrodite.StyleSheet.create({progressBarContainer:{display:"flex",flexDirection:"row",backgroundColor:_wonderBlocksColorV2.default.white,borderTopRightRadius:_globalStyles2.default.borderRadius,paddingLeft:16,pointerEvents:"auto",boxShadow:"0 8px 8px 0 rgba(33, 36, 44, 0.08)",border:"solid 1px rgba(33, 36, 44, 0.16)"},companionImage:{width:64,backgroundImage:(0,_staticUrl.cssUrl)("/images/coach-dashboard/bus.png"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"},progressDetails:{paddingLeft:16,paddingRight:16},progressTexts:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:16,paddingBottom:8},exitLink:{marginLeft:20,color:_wonderBlocksColorV2.default.blue,textDecoration:"none"},progressBar:{display:"flex",flexDirection:"row",paddingBottom:16},bar:{height:16},fullLengthBar:{width:BAR_WIDTH,borderLeft:"1px solid "+_wonderBlocksColorV2.default.white,":first-child":{borderRadius:"8px 0 0 8px",borderLeft:"none"},":last-child":{borderRadius:"0 8px 8px 0"}},unfilledBars:{display:"flex",flexDirection:"row"},unfilledBar:{backgroundColor:_wonderBlocksColorV2.default.offBlack16},filledBars:{display:"flex",flexDirection:"row",position:"absolute"},filledBar:{backgroundColor:_wonderBlocksColorV2.default.blue},leftRoundedBar:{borderRadius:"8px 0 0 8px"},lastRightRoundedBar:{":last-child":{borderRadius:"0 8px 8px 0"}},rightBorderBar:{borderRight:"1px solid "+_wonderBlocksColorV2.default.white},allRoundedBar:{borderRadius:8}})

});
KAdefine("javascript/demo-class-package/components/waypoint-marker.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _reactRedux=require("react-redux")
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _actions=require("../redux/actions.js")
var _store=require("../redux/store.js")
var _store2=babelHelpers.interopRequireDefault(_store)
var _demoClassProvider=require("../demo-class-provider.js")
var _demoClassProvider2=babelHelpers.interopRequireDefault(_demoClassProvider)
var relevantWaypointForStep=function e(t,r,o,a){var s=t.waypoints.find(function(e){return e.name===r})
if(s){if(!s.match||s.match(o,a)){return s}}return null}
var dispatchWithCallbacks=function e(t,r){var o=r.dispatchWith
if(o){Object.keys(o).forEach(function(e){var r=t[e]
t[e]=function(){_store2.default.dispatch(o[e])
if(r&&r instanceof Function){return r.apply(undefined,arguments)}else{if(_ka2.default.IS_DEV_SERVER){console.warn("dispatchWith refers to an unspecified callback "+e)}}}})}return t}
var modifyPropsForStep=function e(t,r,o,a,s,i){var n=relevantWaypointForStep(t,r,o,i)
if(n){var p=n.modify?n.modify(babelHelpers.extends({},a),s,_store2.default.dispatch):babelHelpers.extends({},a)
return dispatchWithCallbacks(p,n)}else{return a}}
var WaypointMarker=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var o=babelHelpers.possibleConstructorReturn(this,e.call(this))
o.state={isMatched:!!o.isMatchedForProps(r),modifiedProps:o.getModifiedProps(r)}
return o}t.prototype.componentDidMount=function e(){var t=this.props.onMatch
this.spyElement()
if(this.isMatchedForProps(this.props)){t&&t()}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var r=this.props.onMatch
var o=!!this.isMatchedForProps(t)
if(!this.isMatchedForProps(this.props)&&o){r&&r()}this.setState({isMatched:o,modifiedProps:this.getModifiedProps(t)})}
t.prototype.componentDidUpdate=function e(){this.spyElement()}
t.prototype.componentWillUnmount=function e(){var t=this.props.onUnspyWaypoint
t(this)}
t.prototype.getModifiedProps=function e(t){var r=t.contentToDemo,o=t.demoData,a=t.matchProps,s=t.isDemo,i=t.modifyProps,n=t.step,p=t.name
return s?modifyPropsForStep(n,p,a,i,o,r):i}
t.prototype.isMatchedForProps=function e(t){var r=t.step,o=t.name,a=t.matchProps,s=t.contentToDemo
return relevantWaypointForStep(r,o,a,s)}
t.prototype.spyElement=function e(){var t=this.props,r=t.matchProps,o=t.isDemo,a=t.onSpyWaypoint,s=t.name,i=t.contentToDemo,n=t.suppressSpyWarning
var p=this.state.modifiedProps
var c=_reactDom2.default.findDOMNode(this)
if(c&&c instanceof Element){a(s,this,r,i,p,c)}else{if(_ka2.default.IS_DEV_SERVER&&o&&!n){console.warn("WaypointMarker "+s+" cannot spy on a non-Element node:",c)}}}
t.prototype.render=function e(){var t=this.props.isDemo
var r=this.state,o=r.modifiedProps,a=r.isMatched
return this.props.children(o,t&&a)}
return t}(React.Component)
WaypointMarker.defaultProps={modifyProps:{},matchProps:{}}
var mapStateToProps=function e(t){var r=t.isDemo,o=t.progress,a=t.contentToDemo,s=t.demoData
return{isDemo:r,contentToDemo:a,demoData:s,step:o.step}}
var mapDispatchToProps={onSpyWaypoint:_actions.spyWaypoint,onUnspyWaypoint:_actions.unspyWaypoint}
exports.default=(0,_demoClassProvider2.default)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(WaypointMarker))

});
KAdefine("javascript/demo-class-package/graphql/demo-class-client.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _apolloClient=require("apollo-client")
var _createClient=require("../../apollo-package/create-client.js")
var _createClient2=babelHelpers.interopRequireDefault(_createClient)
var _demoClassLink=require("./demo-class-link.js")
var _demoClassLink2=babelHelpers.interopRequireDefault(_demoClassLink)
exports.default=new _apolloClient.ApolloClient({cache:(0,_createClient.createInMemoryCache)(),link:_demoClassLink2.default.concat((0,_createClient2.default)().link)})

});
KAdefine("javascript/demo-class-package/graphql/demo-class-link.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getInterceptorForOperation=exports.NOT_INTERCEPTABLE_QUERIES_BLACKLIST=exports.INTERCEPTABLE_QUERIES_WHITELIST=undefined
var _apolloLink=require("apollo-link")
var _store=require("../redux/store.js")
var _store2=babelHelpers.interopRequireDefault(_store)
var _demoClassData=require("../demo-class-data.js")
var QueryInterceptionError=function(e){babelHelpers.inherits(r,e)
function r(t){babelHelpers.classCallCheck(this,r)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this))
n.queryName=t
return n}return r}(Error)
var INTERCEPTABLE_QUERIES_WHITELIST=exports.INTERCEPTABLE_QUERIES_WHITELIST=Object.keys(_demoClassData.queriesByName)
var NOT_INTERCEPTABLE_QUERIES_BLACKLIST=exports.NOT_INTERCEPTABLE_QUERIES_BLACKLIST=["getExercise","topicData","getCoachingTopics","getTopicPathForDemoExercise","getUserSoundPref","getPromoForUser","getStandardsDataForLocaleAndDomain"]
NOT_INTERCEPTABLE_QUERIES_BLACKLIST.forEach(function(e){if(INTERCEPTABLE_QUERIES_WHITELIST.includes(e)){throw new Error("demo-class-link has query "+e+"on its blacklist AND its whitelist!")}})
var getInterceptorForOperation=exports.getInterceptorForOperation=function e(r){var t=r.query
var n=[]
if(t&&t.definitions instanceof Array){var o=function e(){if(i){if(s>=a.length)return"break"
l=a[s++]}else{s=a.next()
if(s.done)return"break"
l=s.value}var r=l
var t=r.operation
var o=r.name&&r.name.value
if(t==="query"){if(INTERCEPTABLE_QUERIES_WHITELIST.includes(o)){n.push(function(e){return function(r){var t=e[o]
if(t){return babelHelpers.extends({},r,t)}else{throw new QueryInterceptionError(o)}}})}else{if(!NOT_INTERCEPTABLE_QUERIES_BLACKLIST.includes(o)){console.warn("Query "+o+" might be missing from demo-class-data.")}return{v:null}}}}
e:for(var a=t.definitions,i=Array.isArray(a),s=0,a=i?a:a[Symbol.iterator]();;){var l
var u=o()
switch(u){case"break":break e
default:if((typeof u==="undefined"?"undefined":babelHelpers.typeof(u))==="object")return u.v}}}if(n.length>0){return function(e){return n.map(function(r){return r(e)}).reduce(function(e,r){return r(e)},{})}}return null}
var warnAboutFailedInterception=function e(r,t){console.warn("demo-class-link is forwarding because it expected a field for "+("whitelisted query "+r+" on the following demo class data"),t)}
exports.default=new _apolloLink.ApolloLink(function(e,r){var t=getInterceptorForOperation(e)
if(t){return new _apolloLink.Observable(function(n){var o=void 0
var a=function o(a){try{n.next({data:t(a)})
n.complete()}catch(t){if(t.queryName){warnAboutFailedInterception(t.queryName,a)}r(e)}}
var i=function e(){var r=_store2.default.getState(),t=r.demoData
if(t){a(t)
if(o){o()}}return t}
if(!i()){o=_store2.default.subscribe(i)}})}else{return r(e)}})

});
KAdefine("javascript/demo-class-package/graphql/gql-shim.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.query=exports.shim=exports.queryList=undefined
var _apolloFetch=require("../../apollo-package/apollo-fetch.js")
var _apolloFetch2=babelHelpers.interopRequireDefault(_apolloFetch)
var Query=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(e){return e}
babelHelpers.classCallCheck(this,e)
this.queryTag=r
this.extractor=t}
var traverseShim=function e(r,t){var a=t(r)
if(r instanceof Array){return r.map(function(r){return e(r,t)})}else if(r.__typename){var n={}
for(var u=r.childKeys,i=Array.isArray(u),o=0,u=i?u:u[Symbol.iterator]();;){var s
if(i){if(o>=u.length)break
s=u[o++]}else{o=u.next()
if(o.done)break
s=o.value}var l=s
if(r.hasOwnProperty(l)){n[l]=e(r[l],t)}}return shim(r.__typename,n)}else{return a}}
var queryShim=function e(r){return function(e){var t=[]
var a=[]
var n=new Map
traverseShim(r,function(r){if(r instanceof Query){var u=n.get(r.queryTag)||(0,_apolloFetch2.default)(r.queryTag,e)
n.set(r.queryTag,u)
t.push(r)
a.push(u)}return r})
return new Promise(function(e,n){Promise.all(a).then(function(a){var n=new Map
for(var u=0;u<a.length;u++){var i=t[u]
n.set(i,i.extractor(a[u].data))}e(traverseShim(r,function(e){return n.get(e)||e}))}).catch(n)})}}
var queryList=exports.queryList=function e(r){return queryShim(shim("__QUERIES_BY_NAME__",r))}
var shim=exports.shim=function e(r,t){return babelHelpers.extends({},t,{__typename:r,childKeys:Object.keys(t)})}
var query=exports.query=function e(r,t){return new Query(r,t)}

});
KAdefine("javascript/demo-class-package/redux/actions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.redirect=exports.unspyWaypoint=exports.spyWaypoint=exports.moveToStep=exports.nextStep=exports.exitDemoClass=exports.enterDemoClass=exports.fetchDemoData=undefined
var _demoClassProgress=require("../demo-class-progress.js")
var _demoClassData=require("../demo-class-data.js")
var _demoClassData2=babelHelpers.interopRequireDefault(_demoClassData)
var fetchDemoData=exports.fetchDemoData=function e(){return function(e){e({type:"FETCH_PROGRESS"});(0,_demoClassProgress.getDemoClassProgress)().then(function(t){if(t){var o=t.topicId,r=t.exerciseSlug
e(babelHelpers.extends({type:"FETCHED_PROGRESS"},t))
e({type:"FETCH_DEMO_DATA"});(0,_demoClassData2.default)({topicId:o,exerciseSlug:r}).then(function(t){e({type:"FETCHED_DEMO_DATA",demoData:t})})}})}}
var enterDemoClass=exports.enterDemoClass=function e(t){return{type:"ENTER_DEMO_CLASS",page:t}}
var exitDemoClass=exports.exitDemoClass=function e(){return{type:"EXIT_DEMO_CLASS"}}
var nextStep=exports.nextStep=function e(){return{type:"NEXT_STEP"}}
var moveToStep=exports.moveToStep=function e(t){return{type:"MOVE_TO_STEP",stepName:t}}
var spyWaypoint=exports.spyWaypoint=function e(t,o,r,s,a,n){return{type:"SPY_WAYPOINT",name:t,waypointComponent:o,matchProps:r,contentToDemo:s,modifiedProps:a,element:n}}
var unspyWaypoint=exports.unspyWaypoint=function e(t){return{type:"UNSPY_WAYPOINT",waypointComponent:t}}
var redirect=exports.redirect=function e(t){return{type:"REDIRECT",route:t}}

});
KAdefine("javascript/demo-class-package/redux/reducers.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.reducers=undefined
var _demoClassSteps=require("../demo-class-steps.js")
var reducers=exports.reducers={contentToDemo:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{contentSlugToAssign:"",topicPathToContent:[],topicTitle:""}
var n=arguments[1]
switch(n.type){case"FETCHED_PROGRESS":return{contentSlugToAssign:n.exerciseSlug,topicPathToContent:n.topicPathToExercise,topicTitle:n.topicTitle}
default:return t}},isDemo:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false
var n=arguments[1]
switch(n.type){case"ENTER_DEMO_CLASS":return true
case"EXIT_DEMO_CLASS":return false
default:return t}},demoStartedWithKnownTopic:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false
var n=arguments[1]
switch(n.type){case"FETCHED_PROGRESS":return true
default:return t}},demoData:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null
var n=arguments[1]
switch(n.type){case"FETCHED_DEMO_DATA":return n.demoData
default:return t||null}},redirect:function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null
var n=arguments[1]
if(n.type==="REDIRECT"){return n.route}return t},progress:function e(t,n){var r=new Map(t&&t.waypointMatchers?t.waypointMatchers:[])
var a=t&&t.step||(0,_demoClassSteps.getInitialStep)()
if(n.type==="ENTER_DEMO_CLASS"){a=(0,_demoClassSteps.getStepFromPage)(n.page,a)}if(n.type==="NEXT_STEP"){a=(0,_demoClassSteps.getNextStep)(a)}if(n.type==="MOVE_TO_STEP"){a=(0,_demoClassSteps.getStepByName)(n.stepName)}if(n.type==="SPY_WAYPOINT"){var o=n.element,i=n.name,s=n.matchProps,u=n.contentToDemo,p=n.modifiedProps,c=n.waypointComponent
r.set(c,function(e){if(e.name===i&&(!e.match||e.match(s,u))){return{definition:e,element:o,modifiedProps:p,waypointComponent:c}}return null})}if(n.type==="UNSPY_WAYPOINT"){r.delete(n.waypointComponent)}var l=[]
r.forEach(function(e){for(var t=a.waypoints,n=Array.isArray(t),r=0,t=n?t:t[Symbol.iterator]();;){var o
if(n){if(r>=t.length)break
o=t[r++]}else{r=t.next()
if(r.done)break
o=r.value}var i=o
var s=e(i)
if(s){l.push(s)
break}}})
var d=a.waypoints.every(function(e){return!e.required||l.some(function(t){var n=t.definition
return n===e})})
return{step:a,matchedWaypoints:l,hasAllWaypoints:d,waypointMatchers:r}}}

});
KAdefine("javascript/demo-class-package/redux/store.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _reduxThunk=require("redux-thunk")
var _reduxThunk2=babelHelpers.interopRequireDefault(_reduxThunk)
var _redux=require("redux")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _reducers=require("./reducers.js")
var initialState={demoData:null,isDemo:false,progress:{waypointMatchers:new Map,matchedWaypoints:[],hasAllWaypoints:false}}
var markConversionsMiddleware=function e(r){return function(e){return function(t){var a=r.getState()
e(t)
var i=r.getState()
var n=i.contentToDemo
if(!a.demoStartedWithKnownTopic&&i.demoStartedWithKnownTopic){_bigbingo2.default.markConversion("demo_class_started_tour",{topic:n.topicTitle,contentItem:n.contentSlugToAssign})}var o=a.progress.step
var u=i.progress.step
if(o!==u){_bigbingo2.default.markConversion("demo_class_changed_step",{previous:o.name,next:u.name})}}}}
exports.default=(0,_redux.applyMiddleware)(_reduxThunk2.default,markConversionsMiddleware)(_redux.createStore)((0,_redux.combineReducers)(_reducers.reducers),initialState)

});
KAdefine("javascript/demo-class-package/demo-class-data.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.queriesByName=exports.DEFAULT_DEMO_CONFIG=exports.DEMO_ASSIGNMENT_ID=exports.DEMO_CLASS_REMINDER_DISMISS_KEY=exports.DEMO_COACH_ID=exports.DEMO_CLASS_ID=exports.DEMO_CLASS_PATH=exports.DEMO_CLASS_NAME=undefined
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query topicData($topicId: String!) {\n        topicById(id: $topicId) {\n            id\n            key\n            title: translatedTitle\n            iconPath\n            mission {\n                id\n            }\n            domainSlug\n            slug\n            iconPath\n            masteryEnabled\n            subjectMasteryEnabled\n            isHighSchoolSubject\n            learnableContentSummary {\n                countArticles\n                countExercises\n                countVideos\n            }\n        }\n    }\n"],["\n    query topicData($topicId: String!) {\n        topicById(id: $topicId) {\n            id\n            key\n            title: translatedTitle\n            iconPath\n            mission {\n                id\n            }\n            domainSlug\n            slug\n            iconPath\n            masteryEnabled\n            subjectMasteryEnabled\n            isHighSchoolSubject\n            learnableContentSummary {\n                countArticles\n                countExercises\n                countVideos\n            }\n        }\n    }\n"]),_templateObject2=babelHelpers.taggedTemplateLiteralLoose(["\n    query getExercise($exerciseSlug: String!) {\n        exercise(name: $exerciseSlug) {\n            id\n            slug\n            topicPaths {\n                path {\n                    id\n                    slug\n                }\n            }\n            kind\n            name\n            exerciseLength\n            defaultUrlPath\n            title: translatedTitle\n            translatedTitle\n            thumbnailUrl\n            assessmentItems {\n                contentId\n                itemData\n            }\n        }\n    }\n"],["\n    query getExercise($exerciseSlug: String!) {\n        exercise(name: $exerciseSlug) {\n            id\n            slug\n            topicPaths {\n                path {\n                    id\n                    slug\n                }\n            }\n            kind\n            name\n            exerciseLength\n            defaultUrlPath\n            title: translatedTitle\n            translatedTitle\n            thumbnailUrl\n            assessmentItems {\n                contentId\n                itemData\n            }\n        }\n    }\n"])
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _moment=require("moment")
var _moment2=babelHelpers.interopRequireDefault(_moment)
var _gqlShim=require("./graphql/gql-shim.js")
var i18n=require("../shared-package/i18n.js")
var DEMO_CLASS_NAME=exports.DEMO_CLASS_NAME=i18n._("Sample Class")
var DEMO_CLASS_PATH=exports.DEMO_CLASS_PATH="/coach/class/demo"
var DEMO_CLASS_ID=exports.DEMO_CLASS_ID="demo"
var DEMO_COACH_ID=exports.DEMO_COACH_ID="demo-coach"
var DEMO_CLASS_REMINDER_DISMISS_KEY=exports.DEMO_CLASS_REMINDER_DISMISS_KEY="demo_class_reminder_cta"
var DEMO_ASSIGNMENT_ID=exports.DEMO_ASSIGNMENT_ID="demo-assignment"
var DEFAULT_DEMO_CONFIG=exports.DEFAULT_DEMO_CONFIG={topicId:"xcf876fe7",topicTitle:i18n._("Algebra I"),topicPathToExercise:["x77a78bee","xb0fb725b"],exerciseSlug:"slope-from-a-graph"}
var TOPIC_QUERY=(0,_graphqlTag2.default)(_templateObject)
var EXERCISE_QUERY=(0,_graphqlTag2.default)(_templateObject2)
var psuedorandom=function e(t){var a=2147483647
var n=Math.pow(7,5)
return function(){t=t*n%a
return(t-1)/(a-1)}}
var getAssignmentDateInfo=function e(){var t=(0,_moment2.default)(new Date)
var a=t.clone().add(1,"day").endOf("day").toDate()
var n=t.clone().subtract(2,"day").toDate()
return{assignedDate:n,dueDate:a}}
var getCompletionString=function e(t){return t?"completed":"unstarted"}
var getCompletionDateForStudent=function e(t){var a=t.fate
var n=psuedorandom(a)()*24
return(0,_moment2.default)(new Date).subtract(n,"hour").toDate()}
var getOrderedAssessmentItemsForStudent=function e(t,a){var n=psuedorandom(t.fate)
var r=function e(t){t=t.concat()
for(var a=t.length-1;a>0;a--){var r=Math.floor(n()*(a+1))
var s=t[a]
t[a]=t[r]
t[r]=s}return t}
return r(a.assessmentItems)}
var generateStudent=function e(t,a){return(0,_gqlShim.shim)("User",babelHelpers.extends({},t,{kaid:a,id:a,coachNickname:t.name,profileRoot:"javascript:void(0)"}))}
var generateExerciseForStudent=function e(t,a){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:3
var r=psuedorandom(t.fate)
var s=.6+.35*r()
var i=getOrderedAssessmentItemsForStudent(t,a)
var o=0
var m=Math.round(1+r())
var l=[]
var u=[]
for(var c=0;c<m;c++){var d=Math.floor((1+r())*a.exerciseLength)
var g=new Array(d)
g=g.fill("",0)
var S=0
var p=0
var h=0
for(var f=0;f<d;f++){++S
var D=i[o]
var C=r()<=s&&S===1
if(C||S===n){u.push((0,_gqlShim.shim)("ProblemAttempt",{assessmentItem:D,correct:C,contentId:D.contentId,countHints:0,countAttempts:S,kaid:t.kaid,timeDone:new Date,attemptStates:g}));++o;++h
if(C){++p}S=0
if(o===i.length){o=0}if(h===a.exerciseLength){break}}}if(S>0){++h}l.push((0,_gqlShim.shim)("ExerciseAttempt",{id:t.fate,isCompleted:h>=a.exerciseLength,lastAttemptDate:getCompletionDateForStudent(t),numAttempted:h,numCorrect:p}))}return{exerciseAttempts:l,isCompleted:l.some(function(e){return e.isCompleted}),bestScore:(0,_gqlShim.shim)("BestScore",l.sort(function(e,t){var a=e.numAttempted/e.numCorrect
var n=t.numAttempted/t.numCorrect
return a-n})[0]),exerciseProgress:(0,_gqlShim.shim)("ExerciseProgress",{logs:u})}}
var generateAssignment=function e(t,a,n){var r=getAssignmentDateInfo()
var s=new Map
t.forEach(function(e){return s.set(e,generateExerciseForStudent(e,a))})
var i=t.map(function(e){var t=s.get(e)||{},a=t.isCompleted
return(0,_gqlShim.shim)("TotalCompletionState",{student:e,state:getCompletionString(a)})})
var o=t.map(function(e){var t=s.get(e)||{},n=t.exerciseAttempts,r=t.bestScore,i=t.isCompleted
var o=getCompletionString(i)
var m=getCompletionDateForStudent(e)
return(0,_gqlShim.shim)("ItemCompletionState",{completedOn:m,state:o,studentKaid:e.kaid,content:a,exerciseAttempts:n,bestScore:r})})
var m=t.map(function(e){var t=s.get(e)||{},a=t.exerciseProgress
return babelHelpers.extends({},e,{exerciseProgress:a})})
var l=t.filter(function(e){var t=s.get(e)||{},a=t.isCompleted
return a}).length
return(0,_gqlShim.shim)("Assignment",babelHelpers.extends({},r,{subjectSlug:n,itemCompletionStates:o,totalCompletionStates:i,numStudentsCompleted:l,students:m,contents:[a],id:DEMO_ASSIGNMENT_ID,studentKaids:t.map(function(e){var t=e.kaid
return t}),contentDescriptors:[],studentList:(0,_gqlShim.shim)("StudentList",{students:t,id:DEMO_CLASS_ID,name:DEMO_CLASS_NAME}),isDraft:false,exerciseConfig:(0,_gqlShim.shim)("ExerciseAssignmentConfig",{itemPickerStrategy:"RANDOM",assessmentItemIds:[]})}))}
var students=[{name:"Aaliyah Jones",fate:693113125185492},{name:"Alexei Popov",fate:9057366636408628},{name:"Amit Singh",fate:0xa0edb28fa25c4},{name:"Ana Maria Rodríguez",fate:8898169405203218},{name:"Aparna Rao",fate:8652866762406342},{name:"Blair Walsh",fate:0xb9ecea9d62c58},{name:"Bobby Tables",fate:0xdde8f2efb1610},{name:"Carlos García López",fate:8800096449211561},{name:"Celine Leroy",fate:963664300477192},{name:"Darcy Martin",fate:0xc7a38623661c4},{name:"Duo Chen",fate:0xcd80b13e1e5ad},{name:"Imani Coleman",fate:0x9703978bd7f94},{name:"Jasmin Lee",fate:0x829710330bff2},{name:"Kareem Lim",fate:8441449564300660},{name:"Lee Austin",fate:5046226514833310},{name:"Marjorie Rose",fate:0x6c68f6f237b8},{name:"Muna Khalid",fate:8493313382217940},{name:"Paige Turner",fate:0xe35a46d8a7ca2},{name:"Teju Oladele",fate:9710001851950620},{name:"Thomas Greene-Beck",fate:5138020753133015},{name:"Torrance Davis",fate:4693255504045020},{name:"Vanya Petrov",fate:8805374094800429},{name:"Veronica West",fate:534477969539231},{name:"Wanda Wu",fate:9422276205590884},{name:"Yuki Inoue",fate:6501066987203563}].map(generateStudent)
var exercise=(0,_gqlShim.query)(EXERCISE_QUERY,function(e){var t=e.exercise
return t})
var assignment=(0,_gqlShim.query)(EXERCISE_QUERY,function(e){var t=e.exercise
return generateAssignment(students,t,t.topicPaths&&t.topicPaths[0].path&&t.topicPaths[0].path[1]&&t.topicPaths[0].path[1].slug||"N/A")})
var studentsWithExerciseProgress=(0,_gqlShim.query)(EXERCISE_QUERY,function(e){var t=e.exercise
return students.map(function(e){return babelHelpers.extends({},e,generateExerciseForStudent(e,t))})})
var studentList=(0,_gqlShim.shim)("StudentList",{assignmentsPage:(0,_gqlShim.shim)("AssignmentsPage",{assignments:[assignment],pageInfo:(0,_gqlShim.shim)("PageInfo",{nextCursor:0})}),autoAssignableStudents:[],createdOn:(0,_moment2.default)(new Date).subtract(3,"hours").toISOString(),countStudents:10,id:DEMO_CLASS_ID,includesSat:false,autoGenerated:false,key:"a-demo-class-key",learnStormProgress:(0,_gqlShim.shim)("LearnStormProgress",{id:"",earnedLevel:0}),googleClassId:"",googleClassName:"",invitations:[],coachRequests:[],emailSubscriptions:[],name:DEMO_CLASS_NAME,signupCode:"SAMPLCLS",students:students,topics:[(0,_gqlShim.query)(TOPIC_QUERY,function(e){var t=e.topicById
return t})],topicTitle:(0,_gqlShim.query)(TOPIC_QUERY,function(e){var t=e.topicById
return t.title}),exerciseConfig:(0,_gqlShim.shim)("ExerciseAssignmentConfig",{itemPickerStrategy:"RANDOM",assessmentItemIds:[]})})
var coach=(0,_gqlShim.shim)("Coach",{id:DEMO_COACH_ID,joined:new Date,studentList:studentList,assignment:assignment,studentLists:[studentList]})
var demoClassData=(0,_gqlShim.shim)("demoClassData",{coach:coach})
var demoCoachReportData=(0,_gqlShim.shim)("demoCoachReportData",{exercise:exercise,coach:coach,students:studentsWithExerciseProgress})
var queriesByName=exports.queriesByName={AutoAssignableStudents:demoClassData,CoachAssignments:demoClassData,getClassPageHeader:demoClassData,getClassesAndStudents:demoClassData,getStudentList:demoClassData,simpleCompletionQuery:demoClassData,StudentListHasAssignments:demoClassData,ProblemAttemptsByStudent:demoCoachReportData,getExerciseContentReport:demoCoachReportData,getCoachExerciseReport:demoCoachReportData,ProgressByStudent:demoCoachReportData}
exports.default=(0,_gqlShim.queryList)(queriesByName)

});
KAdefine("javascript/demo-class-package/demo-class-progress.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getDemoClassProgress=exports.getDemoConfigFromCourses=exports.markDemoComplete=exports.setSelectedTopics=exports.getCoachingTopics=undefined
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getCoachingTopics {\n        coach {\n            id\n            demoClassProgress {\n                selectedTopics {\n                    id\n                    mission {\n                        id\n                    }\n                    slug\n                    iconPath\n                    title: translatedTitle\n                }\n            }\n            studentLists {\n                id\n                topics {\n                    id\n                    mission {\n                        id\n                    }\n                    slug\n                    iconPath\n                    title: translatedTitle\n                }\n            }\n        }\n    }\n"],["\n    query getCoachingTopics {\n        coach {\n            id\n            demoClassProgress {\n                selectedTopics {\n                    id\n                    mission {\n                        id\n                    }\n                    slug\n                    iconPath\n                    title: translatedTitle\n                }\n            }\n            studentLists {\n                id\n                topics {\n                    id\n                    mission {\n                        id\n                    }\n                    slug\n                    iconPath\n                    title: translatedTitle\n                }\n            }\n        }\n    }\n"]),_templateObject2=babelHelpers.taggedTemplateLiteralLoose(["\n    mutation UpdateSelectedTopicsMutation($topicIds: [ID]!) {\n        updateSelectedTopics(selectedTopicIds: $topicIds) {\n            demoClassProgress {\n                selectedTopics {\n                    id\n                }\n            }\n        }\n    }\n"],["\n    mutation UpdateSelectedTopicsMutation($topicIds: [ID]!) {\n        updateSelectedTopics(selectedTopicIds: $topicIds) {\n            demoClassProgress {\n                selectedTopics {\n                    id\n                }\n            }\n        }\n    }\n"]),_templateObject3=babelHelpers.taggedTemplateLiteralLoose(["\n    mutation MarkDemoCompleteMutation {\n        markDemoComplete {\n            demoClassProgress {\n                completed\n            }\n        }\n    }\n"],["\n    mutation MarkDemoCompleteMutation {\n        markDemoComplete {\n            demoClassProgress {\n                completed\n            }\n        }\n    }\n"]),_templateObject4=babelHelpers.taggedTemplateLiteralLoose(["\n    query getTopicPathForDemoExercise($slug: String!) {\n        exercise(name: $slug) {\n            id\n            topicPaths {\n                path {\n                    id\n                    kind\n                    slug\n                }\n            }\n        }\n    }\n"],["\n    query getTopicPathForDemoExercise($slug: String!) {\n        exercise(name: $slug) {\n            id\n            topicPaths {\n                path {\n                    id\n                    kind\n                    slug\n                }\n            }\n        }\n    }\n"])
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _apolloFetch=require("../apollo-package/apollo-fetch.js")
var _apolloFetch2=babelHelpers.interopRequireDefault(_apolloFetch)
var _demoClassData=require("./demo-class-data.js")
var COACHING_TOPICS_QUERY=(0,_graphqlTag2.default)(_templateObject)
var getCoachingTopics=exports.getCoachingTopics=function e(){return(0,_apolloFetch2.default)(COACHING_TOPICS_QUERY).then(function(e){return e.data.coach})}
var SELECT_TOPICS_MUTATION=(0,_graphqlTag2.default)(_templateObject2)
var setSelectedTopics=exports.setSelectedTopics=function e(s){return(0,_apolloFetch.apolloMutate)(SELECT_TOPICS_MUTATION,{topicIds:s}).then(function(e){return e.data.updateSelectedTopics.demoClassProgress})}
var DEMO_COMPLETE_MUTATION=(0,_graphqlTag2.default)(_templateObject3)
var markDemoComplete=exports.markDemoComplete=function e(){return(0,_apolloFetch.apolloMutate)(DEMO_COMPLETE_MUTATION).then(function(e){return e.data.markDemoComplete.demoClassProgress})}
var TOPIC_PATH_QUERY=(0,_graphqlTag2.default)(_templateObject4)
var demoCourseExercises=[{course:"ap-calculus-bc",exercise:"continuous-functions--graphs"},{course:"ap-calculus-ab",exercise:"continuous-functions--graphs"},{course:"ap-statistics",exercise:"calculating-the-mean"},{course:"statistics-probability",exercise:"calculating-the-mean"},{course:"precalculus",exercise:"evaluating-basic-sigma-notation"},{course:"algebra2",exercise:"factoring_difference_of_squares_2"},{course:"algebra",exercise:"linear_equations_3"},{course:"trigonometry",exercise:"find-amplitude-of-a-sinusoid-from-formula"},{course:"geometry",exercise:"exploring-angle-preserving-transformations-and-similarity"},{course:"pre-algebra",exercise:"one-step-add-sub-equations-2"},{course:"math3",exercise:"find-amplitude-of-a-sinusoid-from-formula"},{course:"math2",exercise:"factoring_difference_of_squares_2"},{course:"math1",exercise:"evaluate-functions-from-their-graph"},{course:"cc-eighth-grade-math",exercise:"linear_equations_3"},{course:"8th-engage-ny",exercise:"linear_equations_3"},{course:"cc-seventh-grade-math",exercise:"fundamental-counting-principle"},{course:"7th-engage-ny",exercise:"fundamental-counting-principle"},{course:"cc-sixth-grade-math",exercise:"evaluating_expressions_1"},{course:"6th-engage-ny",exercise:"evaluating_expressions_1"},{course:"cc-fifth-grade-math",exercise:"expressions-with-parentheses"},{course:"5th-engage-ny",exercise:"expressions-with-parentheses"},{course:"cc-fourth-grade-math",exercise:"decomposing-fractions"},{course:"4th-engage-ny",exercise:"decomposing-fractions"},{course:"cc-third-grade-math",exercise:"equivalent-fraction-models-1"},{course:"3rd-engage-ny",exercise:"equivalent-fraction-models-1"},{course:"cc-2nd-grade-math",exercise:"hundreds--tens--and-ones"},{course:"cc-1st-grade-math",exercise:"relate-addition-and-subtraction"},{course:"arithmetic",exercise:"decomposing-fractions"},{course:"cc-kindergarten-math",exercise:"counting-out-1-20-objects"},{course:"early-math",exercise:"counting-out-1-20-objects"},{course:"ap-us-government-and-politics",exercise:"checks-on-the-presidency"},{course:"us-history",exercise:"chesapeake-and-southern-colonies"},{course:"us-government-and-civics",exercise:"structures--powers--and-functions-of-congress"},{course:"ap-us-history",exercise:"chesapeake-and-southern-colonies"},{course:"grammar",exercise:"identifying-nouns"},{course:"macroeconomics",exercise:"1-3-comparative-advantage-and-the-gains-from-trade"},{course:"ap-macroeconomics",exercise:"1-3-comparative-advantage-and-the-gains-from-trade"},{course:"physics",exercise:"graphs-for-2d-projectiles"},{course:"ap-physics-1",exercise:"impulse-momentum-theorem-quantitative-exercises-ap1"},{course:"chemistry",exercise:"bond-hybridization-quiz"},{course:"biology",exercise:"food-chains-and-food-webs"},{course:"high-school-biology",exercise:"hs-rna-and-protein-synthesis"},{course:"health-and-medicine",exercise:"intermediate-lung-quiz"},{course:"electrical-engineering",exercise:"skill-check--identifying-series-and-parallel-resistors"}]
var demoExerciseData={}
var getDemoExerciseForTopic=function e(s){if(!s){return Promise.resolve({demoExerciseSlug:null,demoCoursePathToExercise:null})}var r=s
if(demoExerciseData[r.id]){return Promise.resolve(demoExerciseData[r.id])}var t=demoCourseExercises.find(function(e){var s=e.course
return s===r.slug})
var n=t&&t.exercise
if(!n){return Promise.resolve({demoExerciseSlug:null,demoCoursePathToExercise:null})}return(0,_apolloFetch2.default)(TOPIC_PATH_QUERY,{slug:n}).then(function(e){var s=e.data
var t=s.exercise?s.exercise.topicPaths:[]
var o=t.find(function(e){var s=e.path
return!!s.find(function(e){var s=e.slug
return s===r.slug})})
var i=o&&o.path
var a=i?i.slice(i.findIndex(function(e){return e.slug===r.slug})+1).filter(function(e){return e.kind==="Topic"}).map(function(e){return e.id}):null
demoExerciseData[r.id]={demoExerciseSlug:n,demoCoursePathToExercise:a}
return demoExerciseData[r.id]})}
var getDemoConfigFromCourses=exports.getDemoConfigFromCourses=function e(s){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
var t=r?_demoClassData.DEFAULT_DEMO_CONFIG:null
var n=s[0]
if(!n){return Promise.resolve(t)}return getDemoExerciseForTopic(n).then(function(e){var s=e.demoCoursePathToExercise,r=e.demoExerciseSlug
if(!s||!r){return Promise.resolve(t)}return{topicId:n.id,topicTitle:n.title,topicPathToExercise:s,exerciseSlug:r}})}
var getDemoClassProgress=exports.getDemoClassProgress=function e(){return getCoachingTopics().then(function(e){var s
var r=e.demoClassProgress,t=e.studentLists
var n=(s=r.selectedTopics).concat.apply(s,t.map(function(e){return e.topics}))
return getDemoConfigFromCourses(n,true)})}

});
KAdefine("javascript/demo-class-package/demo-class-provider.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _store=require("./redux/store.js")
var _store2=babelHelpers.interopRequireDefault(_store)
exports.default=function(e){return function(r){babelHelpers.inherits(t,r)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,r.apply(this,arguments))}t.prototype.render=function r(){return React.createElement(e,babelHelpers.extends({},this.props,{store:_store2.default}))}
return t}(React.Component)}

});
KAdefine("javascript/demo-class-package/demo-class-root.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _createClient=require("../apollo-package/create-client.js")
var _apolloWrapper=require("../apollo-package/apollo-wrapper.jsx")
var _apolloWrapper2=babelHelpers.interopRequireDefault(_apolloWrapper)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _demoClassClient=require("./graphql/demo-class-client.js")
var _demoClassClient2=babelHelpers.interopRequireDefault(_demoClassClient)
var _store=require("./redux/store.js")
var _store2=babelHelpers.interopRequireDefault(_store)
var _actions=require("./redux/actions.js")
var _demoClassOverlay=require("./components/demo-class-overlay.jsx")
var _demoClassOverlay2=babelHelpers.interopRequireDefault(_demoClassOverlay)
exports.default=function(e,t,s){return function(a){babelHelpers.inherits(l,a)
function l(e){babelHelpers.classCallCheck(this,l)
var t=babelHelpers.possibleConstructorReturn(this,a.call(this,e))
t.uninstallClient=null
t.state={installedDemoClient:false,isDemoClass:t.getIsDemoClass(e)}
return t}l.prototype.componentDidMount=function e(){this.updateDemoClassStatus(this.props)}
l.prototype.UNSAFE_componentWillReceiveProps=function e(t){this.updateDemoClassStatus(t)}
l.prototype.componentWillUnmount=function e(){this.exitDemoClass()}
l.prototype.getIsDemoClass=function e(s){return t(s)}
l.prototype.updateDemoClassStatus=function e(t){var s=this.getIsDemoClass(t)
this.setState({isDemoClass:s})
if(s){this.enterDemoClass()}else{this.exitDemoClass()}}
l.prototype.enterDemoClass=function e(){if(!_store2.default.getState().demoData){_store2.default.dispatch((0,_actions.fetchDemoData)())}if(!this.uninstallClient){this.uninstallClient=(0,_createClient.installOverrideClient)(_demoClassClient2.default)
this.setState({installedDemoClient:true})}_bigbingo2.default.markConversion("demo_class_enter")
_store2.default.dispatch((0,_actions.enterDemoClass)(s(this.props)))}
l.prototype.exitDemoClass=function e(){_store2.default.dispatch((0,_actions.exitDemoClass)())
if(this.uninstallClient){this.uninstallClient()
this.setState({installedDemoClient:false})}}
l.prototype.renderWithDemoClient=function e(t){var s=this.state.installedDemoClient
if(s){return React.createElement(_apolloWrapper2.default,{children:t})}return null}
l.prototype.render=function t(){var s=this.state.isDemoClass
if(s){return this.renderWithDemoClient(React.createElement("div",null,React.createElement(e,this.props),React.createElement(_demoClassOverlay2.default,null)))}else{return React.createElement(e,this.props)}}
return l}(React.Component)}

});
KAdefine("javascript/demo-class-package/demo-class-steps.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.mapPartsToNames=exports.getInitialStep=exports.getNextStep=exports.getStepFromPage=exports.getStepByName=undefined
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _actions=require("./redux/actions.js")
var _demoClassData=require("./demo-class-data.js")
var _demoClassProgress=require("./demo-class-progress.js")
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var i18n=require("../shared-package/i18n.js")
var scrollToTop=function e(){return 0}
var isSelectedContentTabItem=function e(t,n){var i=t.item
return n?i.slug===n.contentSlugToAssign&&i.kind.toLowerCase()==="exercise":false}
var guiderMaskFullWidth=function e(t){var n=t.top,i=t.bottom
return{left:0,right:window.innerWidth,top:n,bottom:i}}
var guiderMaskFullHeight=function e(t){return function(e){var n=e.top,i=e.bottom,o=e.left,r=e.right
return{top:n-t,bottom:window.innerHeight,left:o-t,right:r+t}}}
var guiderMaskWithPadding=function e(t){return function(e){var n=e.top,i=e.bottom,o=e.left,r=e.right
return{top:n-t,bottom:i+t,left:o-t,right:r+t}}}
var createOnClickForClientLink=function e(t,n){return{onClick:function e(i){i.preventDefault()
n((0,_actions.redirect)(t.to))}}}
var keepTopicTreeOpenWaypoint={name:"content-topic-row",required:false,match:function e(t,n){var i=t.topic
return n?n.topicPathToContent.includes(i.id):false},modify:function e(t){return babelHelpers.extends({},t,{forceOpen:true})}}
var assignmentsToggleTooltipWaypoint={name:"assignments-toggle-tooltip",modify:function e(t){return babelHelpers.extends({},t,{dismissKey:null,showOnMount:false})}}
var waypointsForContentPreviewStep=function e(t){return[keepTopicTreeOpenWaypoint,{name:"exercise-preview-modal",modify:function e(t){return babelHelpers.extends({},t,{shouldAnimate:false,navigator:null})},dispatchWith:{onClose:(0,_actions.moveToStep)("content-assign-click")}},{name:"exercise-preview-switcher",required:true,tooltip:function e(t){var n=t.onClick
return{alignment:"far",position:"bottom",title:i18n._("Take a look at the question bank"),text:i18n._("Each time your students practice this exercise,"+" they get a new set of questions from this larger bank"+" of questions."),buttonLabel:i18n._("Check out the full question list"),onButtonClick:n}},dispatchWith:{onClick:(0,_actions.moveToStep)("content-overview")}},{name:"exercise-feedback-popover",required:t,match:function e(n){var i=n.answerStatus
return!t||i==="correct"},modify:function e(n){return babelHelpers.extends({},n,{visibleIfNotCorrect:t,showCloseButton:false,heading:i18n._("Good work!"),bodyText:i18n._("Students would go on to answer more questions,"+" but for today you'll do just one.")})}},{name:"skip-question-link",required:false,modify:function e(t){return babelHelpers.extends({},t,{onClick:function e(){}})},dispatchWith:{onClick:(0,_actions.moveToStep)("content-preview-skip-answer")}},{name:"exercise-continue-button",required:false,modify:function e(t){return babelHelpers.extends({},t,{children:i18n._("Onward!"),disabled:true})}}]}
var previewContentSteps=[{name:"intro",guiderMask:false,part:"content",page:"content",stepNumber:1,contextCard:{name:"intro"},waypoints:[keepTopicTreeOpenWaypoint,{name:"content-tab-item",required:true,match:isSelectedContentTabItem}],hideProgressBar:true},{name:"content-preview-start",guiderMask:true,part:"content",page:"content",stepNumber:1,waypoints:[keepTopicTreeOpenWaypoint,{name:"content-tab-item",required:true,guiderMaskCutout:true,match:isSelectedContentTabItem,scroller:function e(t){return t},tooltip:function e(t){var n=t.onClick
return{alignment:"near",position:"top",title:i18n._("Preview this exercise"),text:i18n._("See what your students will experience when they"+" answer a question. We’ll also take a glance at the"+" full bank of questions."),buttonLabel:i18n._("Try one question"),onButtonClick:n}},dispatchWith:{onClick:(0,_actions.nextStep)()}}]},{name:"content-preview-context",part:"content",page:"content",stepNumber:2,guiderMask:false,contextCard:{name:"exercise"},waypoints:[keepTopicTreeOpenWaypoint,{name:"preview-modal",modify:function e(t){return babelHelpers.extends({},t,{visible:false})}}]},{name:"content-preview",part:"content",page:"content",stepNumber:2,waypoints:waypointsForContentPreviewStep(true)},{name:"content-preview-skip-answer",part:"content",page:"content",stepNumber:2,waypoints:waypointsForContentPreviewStep(false)},{name:"content-overview",part:"content",page:"content",stepNumber:3,waypoints:[keepTopicTreeOpenWaypoint,{name:"exercise-preview-modal",modify:function e(t){return babelHelpers.extends({},t,{shouldAnimate:false,navigator:null})},dispatchWith:{onClose:(0,_actions.nextStep)()}},{name:"exercise-preview-switcher",required:true,dispatchWith:{onClick:(0,_actions.moveToStep)("content-preview")}},{name:"exercise-overview-modal",required:true},{name:"exercise-overview-modal-contents",required:true,globalTooltip:function e(t){var n=t.closeModal
return{alignment:"near",position:"top",delaySeconds:3,title:i18n._("The first part of your tour is complete!"),text:i18n._("Now that you've explored this exercise, let's assign it to your sample students."),buttonLabel:i18n._("Onward to creating assignments"),onButtonClick:n}}}]}]
var assignContentSteps=[{name:"content-assign-click",part:"assign",page:"content",stepNumber:4,guiderMask:true,waypoints:[keepTopicTreeOpenWaypoint,{name:"content-tab-item",required:true,guiderMaskCutout:true,match:isSelectedContentTabItem,modify:function e(){return{onClick:function e(){}}}},{name:"content-tab-item-row",required:true,match:isSelectedContentTabItem,modify:function e(t){return babelHelpers.extends({},t,{checked:true,onChange:function e(){}})}},{name:"content-tab-assign-bar",required:false,guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskFullWidth},{name:"content-tab-topic-selector",modify:function e(){return{disabled:true}}},{name:"goal-assignment-button"},{name:"content-tab-assign-button",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(8),tooltip:function e(t){var n=t.onClick
return{alignment:"far",position:"bottom",title:i18n._("Assign this exercise to your sample students."),text:i18n._("We’ll then check out your reports to see where your sample students had difficulty."),buttonLabel:i18n._("Assign to your sample students"),onButtonClick:n}},required:true,dispatchWith:{onClick:(0,_actions.nextStep)()}}]},{name:"content-assign",part:"assign",page:"content",stepNumber:5,waypoints:[keepTopicTreeOpenWaypoint,{name:"content-tab-assign-button-wrapper",required:true,dispatchWith:{forceShow:true}},{name:"content-tab-assign-modal",modify:function e(t){return babelHelpers.extends({},t,{onRequestClose:function e(){return false},shouldAnimate:false})}},{name:"content-tab-student-selector",modify:function e(t,n){var i=n.getClassPageHeader.coach.studentList
return babelHelpers.extends({},t,{students:i.students,selectedStudentIds:i.students.map(function(e){return e.id}),totalStudentCount:i.students.length,onChange:function e(){},useRaw:true})}},{name:"content-tab-assignment-save"},{name:"content-tab-assignment-submit",required:true,dispatchWith:{onMutationSuccess:(0,_actions.nextStep)()}}]},{name:"students-are-working",part:"assign",page:"content",stepNumber:6,guiderMask:false,contextCard:{name:"assign"},waypoints:[keepTopicTreeOpenWaypoint]},{name:"navigate-to-assignments",part:"assign",page:"content",stepNumber:7,guiderMask:true,waypoints:[keepTopicTreeOpenWaypoint,{name:"navbar-tab",match:function e(t){var n=t.tab
return n.tabTitle===i18n._("Assignments")},guiderMaskCutout:true,scroller:scrollToTop,tooltip:function e(t){var n=t.onClick
return{alignment:"near",position:"bottom",title:i18n._("Visit the Assignments tab to view your report."),text:i18n._("Let’s see how your sample students did on their assignment."),buttonLabel:i18n._("Go to the Assignments tab"),onButtonClick:n}},modify:function e(t,_,n){return babelHelpers.extends({},t,createOnClickForClientLink(t,n),{useClientNavLink:true})},dispatchWith:{onClick:(0,_actions.nextStep)()}}]}]
var viewAssignmentLiveProgressSteps=[{name:"click-question-card-item",part:"reports",page:"exercise-report",stepNumber:9,guiderMask:true,revealDelaySeconds:1,waypoints:[{name:"live-progress-report-question-cards"},{name:"assignment-report-page",modify:function e(t){return babelHelpers.extends({},t,{returnToHref:"javascript: void(0)"})}},{name:"report-by-assessment-item"},{name:"question-card-item",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(10),match:function e(t){var n=t.idx
return n===0},tooltip:function e(t){var _=t._,n=t.incorrect,i=t.total,o=t.onClick
return{alignment:"near",position:"right",title:i18n._("This was the most-missed question."),text:i18n._("%(incorrect)s of the %(total)s students who were asked this question answered it incorrectly.",{incorrect:n,total:i}),buttonLabel:i18n._("View which students missed this problem"),onButtonClick:o}},modify:function e(t){return babelHelpers.extends({},t,{onClick:function e(){}})},dispatchWith:{onClick:(0,_actions.moveToStep)("view-responses-table")}}]},{name:"view-responses-table",part:"reports",page:"exercise-report",stepNumber:10,guiderMask:true,waypoints:[{name:"live-progress-report-question-cards"},{name:"assignment-report-page",modify:function e(t){return babelHelpers.extends({},t,{returnToHref:"javascript: void(0)"})}},{name:"report-by-assessment-item"},{name:"responses-table",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(10),globalTooltip:function e(t){var n=t.onClick
return{alignment:"near",position:"top",delaySeconds:3,title:i18n._("Let's see how your students did on all their assignments."),text:"",buttonLabel:i18n._("Return to the Assignments tab"),onButtonClick:n}},modify:function e(t,_,n){return babelHelpers.extends({},t,{onClick:function e(){return n((0,_actions.redirect)("/coach/class/"+_demoClassData.DEMO_CLASS_ID+"/assignments"))}})},dispatchWith:{onClick:(0,_actions.moveToStep)("click-assignment-view-toggle")}}]}]
var viewAssignmentSteps=[{name:"click-assignment-report",part:"reports",page:"assignments",stepNumber:8,guiderMask:true,revealDelaySeconds:1,waypoints:[{name:"assignments-view",modify:function e(t){return babelHelpers.extends({},t,{selectedAssignmentsView:"list"})}},assignmentsToggleTooltipWaypoint,{name:"assignment-view-toggle",modify:function e(t){return babelHelpers.extends({},t,{onToggle:function e(){t.onToggle("grid")},selectedValue:"list"})}},{name:"assignment-table-report-cell-creator"},{name:"assignment-table-report-cell",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(10),tooltip:function e(t){var n=t.onClick
return{alignment:"far",position:"top",delaySeconds:1,title:i18n._("Check out which questions your students missed most on your assignment."),text:i18n._("You can identify patterns in what your class isn't understanding."),buttonLabel:i18n._("View student report"),onButtonClick:n}},modify:function e(t,_,n){return babelHelpers.extends({},t,createOnClickForClientLink(t,n))},dispatchWith:{onClick:(0,_actions.moveToStep)(_ka2.default.featureFlag("CLASSROOM_LIVE_REPORT")?"click-question-card-item":"click-exercise-report-item")}}]},{name:"click-exercise-report-item",part:"reports",page:"exercise-report",stepNumber:9,guiderMask:true,revealDelaySeconds:1,waypoints:[{name:"assignments-view"},{name:"exercise-report-item",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(10),match:function e(t){var n=t.i
return n===0},tooltip:function e(t){var n=t.onClick,i=t.percentCorrect
return{alignment:"near",position:"right",title:i18n._("This was the most-missed question."+" See which students had trouble with it."),text:i18n._("%(percentCorrect)s% of the students who were asked this question answered it correctly.",{percentCorrect:i}),buttonLabel:i18n._("View the question report"),onButtonClick:n}},dispatchWith:{onClick:(0,_actions.moveToStep)("view-assessment-item-modal")}}]},{name:"view-assessment-item-modal",part:"reports",page:"exercise-report",stepNumber:10,waypoints:[{name:"assignments-view"},{name:"assessment-item-modal",globalTooltip:function e(t){var n=t.onClose
return{alignment:"near",position:"top",title:i18n._("Check out the student report"),text:i18n._("See how each student in your class did on the overall assignment."),buttonLabel:i18n._("Return to the Assignments tab"),onButtonClick:n}},modify:function e(t,_,n){return babelHelpers.extends({},t,{showResponsesTab:true,shouldAnimate:false,onClose:function e(){return n((0,_actions.redirect)("/coach/class/"+_demoClassData.DEMO_CLASS_ID+"/assignments"))}})},dispatchWith:{onClose:(0,_actions.moveToStep)("click-assignment-view-toggle")}}]},{name:"click-assignment-view-toggle",part:"reports",page:"assignments",stepNumber:11,guiderMask:true,revealDelaySeconds:1,waypoints:[{name:"assignments-view",modify:function e(t){return babelHelpers.extends({},t,{selectedAssignmentsView:"list"})}},assignmentsToggleTooltipWaypoint,{name:"button-toggle",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskWithPadding(0),match:function e(t){var n=t.option
return n.value==="grid"}},{name:"assignment-view-toggle",tooltip:function e(t){var n=t.onToggle
return{alignment:"near",position:"bottom",delaySeconds:1,title:i18n._("View how each student did on the assignment"),text:i18n._("You can also use this report to create small groups of students who need additional instruction."),buttonLabel:i18n._("View student scores"),onButtonClick:n}},modify:function e(t){return babelHelpers.extends({},t,{onToggle:function e(){t.onToggle("grid")},selectedValue:"list"})},dispatchWith:{onToggle:(0,_actions.moveToStep)("view-assignment-column")}}]},{name:"view-assignment-column",part:"reports",page:"assignments",stepNumber:11,guiderMask:true,revealDelaySeconds:1,waypoints:[{name:"assignments-view"},assignmentsToggleTooltipWaypoint,{name:"assignment-table-student-score-cell",modify:function e(t){return babelHelpers.extends({},t,{reportLink:null})}},{name:"assignment-column-header",guiderMaskCutout:true,guiderMaskCutoutTransform:guiderMaskFullHeight(10),match:function e(t){var n=t.index
return n===0},globalTooltip:function e(t){var n=t.onClick
return{alignment:"near",position:"top",delaySeconds:3,title:i18n._("See your students' best score on each assignment"),text:i18n._("Scores are color-coded to give you quick insights and can be clicked to show individual student's problem attempts."),buttonLabel:i18n._("Finish the tour"),onButtonClick:n}},modify:function e(t){return babelHelpers.extends({},t,{onClick:function e(){}})},dispatchWith:{onClick:(0,_actions.moveToStep)("end-of-demo")}}]},{name:"end-of-demo",part:"reports",page:"assignments",stepNumber:12,guiderMask:false,waypoints:[],contextCard:{name:"complete",onCtaClick:function e(t){return(0,_demoClassProgress.markDemoComplete)().then(function(e){var n=e.completed
_bigbingo2.default.markConversion("demo_class_completed",{ctaId:t})
return n})}},hideProgressBar:true}]
var allSteps=[].concat(previewContentSteps,assignContentSteps,viewAssignmentSteps,viewAssignmentLiveProgressSteps)
exports.default=allSteps
var getStepByName=exports.getStepByName=function e(t){var n=allSteps.find(function(e){return e.name===t})
if(n){return n}else{throw new Error("No onboarding step with name "+t)}}
var getStepFromPage=exports.getStepFromPage=function e(t,n){var i=allSteps.slice(allSteps.indexOf(n)).find(function(e){return e.page===t})
if(i){return i}else{var o=allSteps.find(function(e){return e.page===t})
if(o){return o}else{throw new Error("No onboarding step found for page "+t)}}}
var getNextStep=exports.getNextStep=function e(t){var n=allSteps.indexOf(t)
return n+1===allSteps.length?t:allSteps[n+1]}
var getInitialStep=exports.getInitialStep=function e(){return allSteps[0]}
var mapPartsToNames=exports.mapPartsToNames=function e(t){switch(t){case"content":return i18n._("Practice exercises")
case"assign":return i18n._("Creating assignments")
case"reports":return i18n._("Assignment reports")
default:return""}}

});
KAdefine("javascript/demo-class-package/types.js", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/demo-class-package.js.map 