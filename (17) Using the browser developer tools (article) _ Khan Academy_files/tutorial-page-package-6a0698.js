KAdefine("javascript/tutorial-page-package/tutorial-page.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _page,_tutorialNav,_mobileTutorialNav,_exerciseFooterAfford
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(['\n    query getDynamicInfoForTutorial(\n        $tutorialId: String!\n        $encryptedKey: String\n    ) {\n        user {\n            id\n            canEdit: hasPermission(\n                name: "can_edit"\n                scope: ANY_ON_CURRENT_LOCALE\n            )\n            canCurate: hasPermission(\n                name: "can_curate_tags"\n                scope: ANY_ON_CURRENT_LOCALE\n            )\n            contentItemProgresses(topicId: $tutorialId) {\n                content {\n                    id\n                    progressKey\n                }\n                completionStatus\n            }\n            hasAdminRole: hasRole(name: "admin")\n            isPhantom\n            isChild\n        }\n        qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {\n            feedbackType\n            unencryptedKey\n        }\n    }\n'],['\n    query getDynamicInfoForTutorial(\n        $tutorialId: String!\n        $encryptedKey: String\n    ) {\n        user {\n            id\n            canEdit: hasPermission(\n                name: "can_edit"\n                scope: ANY_ON_CURRENT_LOCALE\n            )\n            canCurate: hasPermission(\n                name: "can_curate_tags"\n                scope: ANY_ON_CURRENT_LOCALE\n            )\n            contentItemProgresses(topicId: $tutorialId) {\n                content {\n                    id\n                    progressKey\n                }\n                completionStatus\n            }\n            hasAdminRole: hasRole(name: "admin")\n            isPhantom\n            isChild\n        }\n        qaExpandKeyInfo(encryptedQaExpandKey: $encryptedKey) {\n            feedbackType\n            unencryptedKey\n        }\n    }\n']),_templateObject2=babelHelpers.taggedTemplateLiteralLoose(["\n                mutation muteSpecifiedFeedback($expandKey: String!) {\n                    modifyNotifyOnAnswer(\n                        feedbackKey: $expandKey\n                        notifyOnAnswer: false\n                    ) {\n                        feedback {\n                            notifyOnAnswer\n                        }\n                    }\n                }\n            "],["\n                mutation muteSpecifiedFeedback($expandKey: String!) {\n                    modifyNotifyOnAnswer(\n                        feedbackKey: $expandKey\n                        notifyOnAnswer: false\n                    ) {\n                        feedback {\n                            notifyOnAnswer\n                        }\n                    }\n                }\n            "])
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _reactRouterDom=require("react-router-dom")
var _aphrodite=require("aphrodite")
var _apolloFetch=require("../apollo-package/apollo-fetch.js")
var _kaQuery=require("../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _asyncCreateAssignmentHeader=require("../assignments-async-loader-package/async-create-assignment-header.jsx")
var _asyncCreateAssignmentHeader2=babelHelpers.interopRequireDefault(_asyncCreateAssignmentHeader)
var _apiActionResults=require("../shared-package/api-action-results.js")
var _apiActionResults2=babelHelpers.interopRequireDefault(_apiActionResults)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _contentLibraryModuleList=require("../content-library-package/components/content-library-module-list.jsx")
var _contentLibraryModuleList2=babelHelpers.interopRequireDefault(_contentLibraryModuleList)
var _lazyLoadComponent=require("../components/lazy-load-package/lazy-load-component.jsx")
var _lazyLoadComponent2=babelHelpers.interopRequireDefault(_lazyLoadComponent)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _spinner=require("../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _customTestPrepHeader=require("../content-library-package/modules/custom-headers/custom-test-prep-header.jsx")
var _tutorialNav2=require("../tutorial-shared-package/tutorial-nav.jsx")
var _tutorialNav3=babelHelpers.interopRequireDefault(_tutorialNav2)
var _shared=require("../content-library-package/styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _updateDocumentTitle=require("../shared-package/update-document-title.js")
var _updateDocumentTitle2=babelHelpers.interopRequireDefault(_updateDocumentTitle)
var _userInfoStore=require("../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoConstants=require("../user-info-store-package/user-info-constants.js")
var _routeHistoryContext=require("../app-shell-package/route-history-context.js")
var _routeHistoryContext2=babelHelpers.interopRequireDefault(_routeHistoryContext)
var USER_DATA_QUERY=(0,_graphqlTag2.default)(_templateObject)
var extractURLParam=function e(t,a){if(!t||!t.startsWith("?")){return null}var r="&"+t.slice(1)
var s=new RegExp("&"+a+"=([^&#]+)")
var n=s.exec(r)
return n&&decodeURIComponent(n[1])}
var TutorialPage=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),i=0;i<n;i++){o[i]=arguments[i]}return s=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),r),r.state={statusMapUpdates:null},r.progressKeyMap={},r._isMounted=false,r.onNavigateToParentTopic=function(){var e=r.props.breadcrumbs
var t=e[e.length-1]
window.location.href=t.href},r.onNextTask=function(){var e=r._getNextNavItem()
if(e){var t=r.props.tutorialPageData.topicModel.relativeUrl
var a=t+"/"+e.nodeSlug
r.props.history.push(a)}else{window.location.href=r.props.nextTutorial.firstChild.topicPath}},r.setProgress=function(e){if(!r._isMounted){return}var t=babelHelpers.extends({},r.state.statusMapUpdates);(e||[]).map(function(e){var a=r._findNavContent(e.id)
if(a){t[a.id]=e.progress
r.setState({statusMapUpdates:t})
var s=r.progressKeyMap[String(a.id)]
if(s){_userInfoStore2.default.dispatch({type:_userInfoConstants.UPDATE_STATUS,progressKey:s,status:e.progress})}}})},r.renderWithUserData=function(e,t){var a=r.props,s=a.breadcrumbs,n=a.classUpsell,o=a.domain,i=a.curationByNodeSlug,l=a.nextTutorial,u=a.showTutorialNav,d=a.tutorialPageData,p=a.relatedVideos,c=a.videoAttribution,m=a.sponsorInformation
var f=d.topicModel,g=d.navItems,h=d.contentModel
var v=false
var y={}
var b=!e.loading&&e.data&&e.data.user
var k=!e.loading&&e.data&&e.data.qaExpandKeyInfo
if(b){v=e.data.user.canEdit||e.data.user.canCurate
e.data.user.contentItemProgresses.forEach(function(e){var t=e.content,a=e.completionStatus
if(t.id){y[t.id]=a.toLowerCase()
r.progressKeyMap[t.id]=t.progressKey}})}Object.assign(y,r.state.statusMapUpdates)
var x=h.contentKind
var T=r._getNextNavItem()
var N=f.relativeUrl+"/"+r.props.nodeSlug
var E=babelHelpers.extends({},r.props.discussionContext,{isLoadingUserData:e.loading,loggedIn:b&&!b.isPhantom,isDeveloper:b&&b.hasAdminRole,canEdit:b&&b.canEdit,restrictPosting:b&&b.isChild,qaExpandKey:k&&k.unencryptedKey,expandFeedbackType:k&&k.feedbackType,newAskQuestionUi:true,hideMetaPanels:true,focusKind:x.toLowerCase(),focusId:h.id,which:x.toLowerCase()+"-questions",isVideo:x==="Video",isScratchpad:false})
var C=null
var w=null
if(u){C=_react2.default.createElement(_tutorialNav3.default,{tutorial:f,navItems:g,statusMap:y,currentNodeSlug:r.props.nodeSlug,domain:o,nextTutorial:l,style:styles.tutorialNav,breadcrumbs:s,showBreadcrumbs:r.shouldShowBreadcrumbs(),scrollOffset:r._getScrollOffset()})
w=_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.mobileTutorialNav,x==="Exercise"&&styles.mobileTutorialNavExerciseFooterAffordance)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.mobileTutorialNavContents)},_react2.default.createElement(_tutorialNav3.default,{tutorial:f,navItems:g,statusMap:y,currentNodeSlug:r.props.nodeSlug,domain:o,nextTutorial:l,withinMobilePage:true,showBreadcrumbs:r.shouldShowBreadcrumbs()})))}var q=null
if(T){var R=T
q=function e(){var t=f.relativeUrl+"/"+R.nodeSlug
r.props.history.push(t)}}var S=r.props.preloadedTranscript
var I=t.length===1
var P=!I
var D=function e(){var t=r.props,a=t.nodeSlug,s=t.match
return s.params.kind+"/"+s.params.slug===a}
var H=_react2.default.createElement("div",{key:"tutorial-page","data-test-id":"tutorial-page"},_react2.default.createElement(_reactRouterDom.Route,{path:"*/v/:slug",render:function e(){return _react2.default.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../tutorial-video-package/video-page.jsx"),require.dynimport("../../stylesheets/video-package/video.less"),require.dynimport("../../stylesheets/discussion-package/discussion.less"),require.dynimport("../../stylesheets/clarifications-package/clarifications.less"),require.dynimport("../../stylesheets/moderation-package/moderation.less")]}},!D()?undefined:function(e){return _react2.default.createElement(e,{video:h,userVideo:r.props.userVideo,task:r.props.task,nextContentItem:T,navigateToNextItem:q,classUpsell:n,breadcrumbs:s,discussionContext:E,domain:o,topic:f,mobileTutorialNav:w,preloadedTranscript:S&&S.videoId===h.id?S:null,showEditorShortcuts:v,attribution:c,shouldAutoplay:P})})}}),_react2.default.createElement(_reactRouterDom.Route,{path:"*/a/:slug",render:function e(){return _react2.default.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../tutorial-article-package/article-page.jsx"),require.dynimport("../../stylesheets/react-datepicker-package/react-datepicker.less"),require.dynimport("../../stylesheets/exercises-package/exercises.less"),require.dynimport("../../stylesheets/katex-package/katex.less"),require.dynimport("../../stylesheets/perseus-renderer-package/perseus-renderer.less"),require.dynimport("../../stylesheets/discussion-package/discussion.less"),require.dynimport("../../stylesheets/moderation-package/moderation.less")]}},!D()?undefined:function(e){return _react2.default.createElement(e,{article:h,breadcrumbs:s,classUpsell:n,currentUrl:N,discussionContext:E,domain:o,showEditorShortcuts:v,topic:f,mobileTutorialNav:w,sponsorInformation:m})})}}),_react2.default.createElement(_reactRouterDom.Route,{path:"*/e/:slug",render:function e(){return _react2.default.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../tutorial-exercise-package/exercise-page.jsx"),r.getExtraWidgetsIfNeeded(),require.dynimport("../../stylesheets/react-datepicker-package/react-datepicker.less"),require.dynimport("../../stylesheets/exercises-package/exercises.less"),require.dynimport("../../stylesheets/katex-package/katex.less"),require.dynimport("../../stylesheets/perseus-renderer-package/perseus-renderer.less"),require.dynimport("../../stylesheets/odometer-package/odometer.less"),require.dynimport("../../stylesheets/avatar-customizer-package/avatar-customizer.less"),require.dynimport("../../stylesheets/tasks-package/tasks.less")]}},!D()?undefined:function(e){return _react2.default.createElement(e,{key:h.name,exercise:h,breadcrumbs:s,domain:o,showEditorShortcuts:v,tutorial:f,relatedVideos:p,initialCards:r.props.initialCards,initialItem:r.props.initialItem,inFixture:r.props.inFixture,ref:"exercisePage",mobileTutorialNav:w,showTutorialNav:u,onNextTask:r.onNextTask,onNavigateToParentTopic:r.onNavigateToParentTopic,nextTaskKind:r.nextTaskKind(),isDeprecated:N.startsWith("/deprecated")})})}}),_react2.default.createElement(_reactRouterDom.Route,{path:"*/(p[a-z]?)/:slug",render:function e(){return _react2.default.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../tutorial-scratchpad-package/scratchpad-page.jsx")]}},!D()?undefined:function(e){return _react2.default.createElement(e,{key:h.name,scratchpad:h,breadcrumbs:s,domain:o,topic:f,nextSlug:T&&T.nodeSlug,showEditorShortcuts:v})})}}))
var A=i[r.props.nodeSlug]
return _react2.default.createElement("div",null,_react2.default.createElement("div",null,r.renderAssignmentHeader()),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.customHeaderContainer)},r._maybeGetCustomHeader()),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper,x==="Exercise"&&styles.exerciseFooterAffordance)},C,_react2.default.createElement("div",{id:h.nodeSlug+"-panel","aria-labelledby":h.slug+"-"+h.contentKind+"-tab",className:(0,_aphrodite.css)(styles.page,u&&styles.pageWithTutorialNav)},H||_react2.default.createElement(_spinner2.default,null),A&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.moduleList)},u&&_react2.default.createElement(_contentLibraryModuleList2.default,{domain:o,modules:A.modules})))))},a),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.componentDidMount=function e(){this._isMounted=true
if(extractURLParam(this.props.search,"mute")==="1"){var t=extractURLParam(this.props.search,"qa_expand_key")
var a=(0,_graphqlTag2.default)(_templateObject2)
if(t){(0,_apolloFetch.apolloMutate)(a,{expandKey:t}).then(function(e){})}}if(this.props.mayNeedExtraWidgetsLater){setTimeout(function(){Promise.all([require.dynimport("../perseus-all-package/perseus.js").then(function(e){return e.default}),require.dynimport("../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default})]).then(function(e){var t=e[0]
return t.init({loadExtraWidgets:true,skipMathJax:true})})},1e3)}(0,_updateDocumentTitle2.default)({pageName:this.getTitle()})
window._kiq=window._kiq||[]
window._kiq.push(["set",{bibliotron_new_design:"true",window_width:window.innerWidth,window_height:window.innerHeight}])
this.handlePageRender()
_apiActionResults2.default.register("tutorial_node_progress",this.setProgress)}
t.prototype.componentDidUpdate=function e(t){if(t.nodeSlug!==this.props.nodeSlug){this.handlePageRender()}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.markConversion=function e(t,a){var r=this.props.tutorialPageData
var s=r.contentModel
_bigbingo2.default.markConversion(t,babelHelpers.extends({product:"library",content_id:s.id,slug:s.slug},a))}
t.prototype.handlePageRender=function e(){this.markPageviewConversion()
var t=this.props.nodeSlug.startsWith("e/")
var a=document.querySelector("#up-next-module")
if(a){var r=t?"none":"block"
a.style.display=r}}
t.prototype._maybeGetCustomHeader=function e(){var t=this.props,a=t.customHeaderId,r=t.subject
if(a==="gtp-custom-header"){return _react2.default.createElement(_customTestPrepHeader.TestPrepHeaderWrapper,{showUpsellTooltip:true,examId:r,leftAlign:true})}}
t.prototype._getScrollOffset=function e(){var t=this.props.customHeaderId
if(t==="gtp-custom-header"){return _customTestPrepHeader.HEADER_HEIGHT}else{return 0}}
t.prototype._findNavContent=function e(t){return this.props.tutorialPageData.navItems.find(function(e){return e.nodeSlug===t})}
t.prototype._getNextNavItem=function e(){var t=this.props.tutorialPageData
var a=t.navItems
var r=this._getCurrentTaskIndex()
if(r===a.length){return null}return a[r+1]}
t.prototype.getTitle=function e(){var t=this.props.tutorialPageData
var a=t.contentModel
if(a.metaTitle){return a.metaTitle}var r=this.props.breadcrumbs
var s=[a.translatedTitle].concat(r.slice().reverse().map(function(e){return e.title})).join(" | ")
return s}
t.prototype._getCurrentTaskIndex=function e(){var t=this.props.tutorialPageData
var a=t.contentModel,r=t.navItems
return r.findIndex(function(e){return e.id===a.id&&e.kind===a.kind})}
t.prototype.nextTaskKind=function e(){var t=this._getNextNavItem()
if(t){return t}else if(this.props.nextTutorial){return this.props.nextTutorial.firstChild.kind}else{return null}}
t.prototype.markPageviewConversion=function e(){var t=this.props.tutorialPageData
var a=t.contentModel
switch(a.contentKind){case"Article":this.markConversion("pageview_article")
break
case"Video":this.markConversion("pageview_video")
break
case"Exercise":if(a.isSkillCheck){this.markConversion("pageview_skill_check")}this.markConversion("pageview_exercise")
break
case"Scratchpad":case"Talkthrough":case"Challenge":case"Project":case"Interactive":this.markConversion("pageview_scratchpad")
break}}
t.prototype.renderAssignmentHeader=function e(){var t=this.props.tutorialPageData
var a=t.contentModel
var r=a.kind+":"+a.id
if(a.kind==="Scratchpad"&&!a.defaultUrlPath){return null}return _react2.default.createElement(_asyncCreateAssignmentHeader2.default,{contentDescriptor:r,contentTitle:a.title})}
t.prototype.getExtraWidgetsIfNeeded=function e(){var t=this.props.needsExtraWidgets
if(t){return Promise.all([require.dynimport("../perseus-all-package/perseus.js").then(function(e){return e.default}),require.dynimport("../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default})]).then(function(e){var t=e[0]
t.init({skipMathJax:true,loadExtraWidgets:true})
return{}})}return Promise.resolve({})}
t.prototype.shouldShowBreadcrumbs=function e(){var t=this.props.subject
if(t==="lsat"){return false}return true}
t.prototype.render=function e(){var t=this
var a=this.props.tutorialPageData.topicModel.contentId
return _react2.default.createElement(_kaQuery2.default,{query:USER_DATA_QUERY,variables:{tutorialId:a,encryptedKey:extractURLParam(this.props.search,"qa_expand_key")},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){return _react2.default.createElement(_routeHistoryContext2.default.Consumer,null,function(a){var r=a.history
return t.renderWithUserData(e,r)})})}
return t}(_react2.default.Component)
TutorialPage.defaultProps={inFixture:false,relatedVideos:[],showTutorialNav:true}
var TUTORIAL_NAV_WIDTH=256
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"flex",minHeight:800,width:"100%"},page:(_page={background:_shared2.default.colors.white,overflow:"hidden",width:"100%"},_page[_shared2.default.queries.small]={width:"100%"},_page[_shared2.default.queries.medium]={width:"100%"},_page),pageWithTutorialNav:{width:"calc(100% - "+TUTORIAL_NAV_WIDTH+"px)"},tutorialNav:(_tutorialNav={flexShrink:0,borderRight:"1px solid "+_shared2.default.colors.gray85,width:255},_tutorialNav[_shared2.default.queries.small]={display:"none"},_tutorialNav[_shared2.default.queries.medium]={display:"none"},_tutorialNav),mobileTutorialNavContents:{maxWidth:512,margin:"0 auto"},moduleList:{borderTop:"1px solid "+_shared2.default.colors.gray85},mobileTutorialNav:(_mobileTutorialNav={borderBottom:"8px solid "+_shared2.default.colors.gray90,borderTop:"8px solid "+_shared2.default.colors.gray90,display:"none"},_mobileTutorialNav[_shared2.default.queries.small]={display:"block"},_mobileTutorialNav[_shared2.default.queries.medium]={display:"block"},_mobileTutorialNav),mobileTutorialNavExerciseFooterAffordance:{borderBottomWidth:0},exerciseFooterAffordance:(_exerciseFooterAfford={},_exerciseFooterAfford[_mediaQueries2.default.lgOrSmaller]={paddingBottom:_globalStyles2.default.chromeSizes.exercisePhoneFooterHeight},_exerciseFooterAfford),customHeaderContainer:{top:-1,position:"sticky",zIndex:_globalStyles2.default.constants.zindexFixedNavbar}})
exports.default=(0,_reactRouterDom.withRouter)(TutorialPage)

});
; KAdefine.updatePathToPackageMap({"javascript/perseus-all-package/perseus.js": "perseus-all.js", "javascript/perseus-merged-extra-widgets-package/extra-widgets.js": "perseus-merged-extra-widgets.js", "javascript/tutorial-article-package/article-page.jsx": "tutorial-article.js", "javascript/tutorial-exercise-package/exercise-page.jsx": "tutorial-exercise.js", "javascript/tutorial-scratchpad-package/scratchpad-page.jsx": "tutorial-scratchpad.js", "javascript/tutorial-video-package/video-page.jsx": "tutorial-video.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/tutorial-page-package.js.map 