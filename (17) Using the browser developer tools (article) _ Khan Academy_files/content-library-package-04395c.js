KAdefine("javascript/khankids-package/lib/analytics.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.markLandingPage=markLandingPage
exports.markAppDownload=markAppDownload
var BigBingo=require("../../shared-package/bigbingo.js")
function markConversion(n,e,a){return BigBingo.markConversion(n,babelHelpers.extends({},a,{from:e||window.location.pathname}))}function markLandingPage(n,e){return markConversion("khankids_landing_page",n,e)}function markAppDownload(n,e,a){return markConversion("khankids_app_download",e,babelHelpers.extends({},a,{storeName:n}))}
});
KAdefine("javascript/content-library-package/content-library-curation-page.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _queryBatchingContext=require("../apollo-package/query-batching-context.js")
var _queryBatchingContext2=babelHelpers.interopRequireDefault(_queryBatchingContext)
var _contentLibraryModuleList=require("./components/content-library-module-list.jsx")
var _contentLibraryModuleList2=babelHelpers.interopRequireDefault(_contentLibraryModuleList)
var _curationPage=require("./curation-page.jsx")
var _curationPage2=babelHelpers.interopRequireDefault(_curationPage)
var ContentLibraryCurationPage=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement(_queryBatchingContext2.default.Provider,{value:true},React.createElement(_curationPage2.default,babelHelpers.extends({},this.props,{moduleListComponent:_contentLibraryModuleList2.default})))}
return t}(React.Component)
exports.default=ContentLibraryCurationPage

});
KAdefine("javascript/content-library-package/curation-page.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouterDom=require("react-router-dom")
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _authorHeader=require("./components/author-header.jsx")
var _authorHeader2=babelHelpers.interopRequireDefault(_authorHeader)
var _breadcrumbsHeader=require("./components/breadcrumbs-header.jsx")
var _breadcrumbsHeader2=babelHelpers.interopRequireDefault(_breadcrumbsHeader)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../shared-package/static-url.js")
var _missionCallout=require("./components/mission-callout.jsx")
var _missionCallout2=babelHelpers.interopRequireDefault(_missionCallout)
var _pageloadMarker=require("../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _shared=require("./styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _simpleHeader=require("./components/simple-header.jsx")
var _simpleHeader2=babelHelpers.interopRequireDefault(_simpleHeader)
var _stickyHeader=require("./components/sticky-header.jsx")
var _stickyHeader2=babelHelpers.interopRequireDefault(_stickyHeader)
var _customTestPrepHeader=require("./modules/custom-headers/custom-test-prep-header.jsx")
var _updateDocumentTitle=require("../shared-package/update-document-title.js")
var _updateDocumentTitle2=babelHelpers.interopRequireDefault(_updateDocumentTitle)
var _conversionContext=require("../analytics-package/conversion-context.jsx")
var ANALYTICS_PAGE_SLUGS={Concept:"topic_page",Subject:"subject_page",Domain:"domain_page"}
var CurationPage=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.componentDidMount=function e(){(0,_updateDocumentTitle2.default)({pageName:this.getTitle()})
window._kiq=window._kiq||[]
window._kiq.push(["set",{bibliotron_new_design:"true",window_width:window.innerWidth,window_height:window.innerHeight}])
this.markPageviewConversion()}
r.prototype.getTitle=function e(){var r=this.props.curation
if(r.metaTitle){return r.metaTitle}var a=this.props.curation,t=a.breadcrumbs,o=a.title
var i=[o].concat(t.reverse().map(function(e){return e.title})).join(" | ")
return i}
r.prototype.markPageviewConversion=function e(){switch(this.props.curation.curationKind){case"Subject":this.props.markConversion({id:"pageview_subject"})
break
case"Concept":this.props.markConversion({id:"pageview_concept"})
break
case"Domain":this.props.markConversion({id:"pageview_domain"})
break}}
r.prototype._maybeGetCustomHeader=function e(){var r=this.props.curation,a=r.customHeaderId,t=r.subject
if(a==="gtp-custom-header"){return React.createElement(_customTestPrepHeader.TestPrepHeaderWrapper,{examId:t})}}
r.prototype.render=function e(){var r=this.props,a=r.match,t=r.curation
var o=t.authorHeader,i=t.backgroundImageUrl,s=t.backgroundImageTint,l=t.breadcrumbs,n=t.curationKind,d=t.domain,u=t.tabs,c=t.title,p=t.standards
var b=a.path.indexOf("/modal/:type")>=0
var m=u.length>1?u[1]:null
var v=u[0].modules
var h=l.length
var g=this._maybeGetCustomHeader()
var f=void 0
if(g){f=g}else if(o){f=React.createElement(_authorHeader2.default,o)}else if(h){f=React.createElement(_breadcrumbsHeader2.default,{breadcrumbs:l,title:c,standards:p||[]})}else{f=React.createElement(_simpleHeader2.default,{title:c})}var k=void 0
if(i){var H=""
if(s){var y="rgba(0,0,0,"+s+")"
H="linear-gradient("+y+","+y+"),"}k={backgroundImage:H+(0,_staticUrl.cssUrl)(i),backgroundSize:"cover"}}var x=h?l[h-1]:undefined
var w=!o&&!g&&React.createElement(_stickyHeader2.default,{breadcrumb:x,style:{backgroundColor:_wonderBlocksColorV2.default.darkBlue}},React.createElement("h1",{className:(0,_aphrodite.css)(styles.spring,styles.title)},React.createElement("span",{onClick:_stickyHeader2.default.scrollToTop},c)))
var C=this.props.moduleListComponent
return React.createElement("div",{"data-test-id":"curation-page"},React.createElement("div",{style:babelHelpers.extends({backgroundColor:_wonderBlocksColorV2.default.darkBlue},k),className:(0,_aphrodite.css)(g&&styles.customHeaderSticky)},f,w),m&&React.createElement(_missionCallout2.default,{url:m.url,title:c}),React.createElement(C,{domain:d,modules:v,titleTag:"h2"}),ANALYTICS_PAGE_SLUGS[n]&&React.createElement(_pageloadMarker2.default,{pageName:ANALYTICS_PAGE_SLUGS[n],markFullyInteractiveOnMount:true,markSufficientlyUsable:n==="Concept"?"mounted":"markup",key:c,disable:b}))}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({link:{height:48,boxSizing:"border-box",":hover":{textDecoration:"none"}},tab:babelHelpers.extends({},_shared2.default.navbar.tab),inactiveTab:babelHelpers.extends({},_shared2.default.navbar.inactiveTab),spring:{alignItems:"center",display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1},title:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_shared2.default.colors.white,fontWeight:700,fontSize:20,justifyContent:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0,lineHeight:24},_babelHelpers$extends[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.bodySmallBold),_babelHelpers$extends)),stickyTitle:babelHelpers.extends({},_shared2.default.typography.wonderBlocksHeader),customHeaderSticky:{position:"sticky",top:0,zIndex:_globalStyles2.default.constants.zindexFixedNavbar}})
var mapPropsToExtras=function e(r){return{activity:"navigating",domain:r.domain,course:r.curation.subject,unit:r.curation.unit}}
exports.default=(0,_conversionContext.withConversionContext)(mapPropsToExtras)((0,_reactRouterDom.withRouter)(CurationPage))

});
KAdefine("javascript/content-library-package/components/breadcrumbs-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _breadcrumbs=require("../../components/breadcrumbs-package/breadcrumbs.jsx")
var _breadcrumbs2=babelHelpers.interopRequireDefault(_breadcrumbs)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../../shared-package/i18n.js")
var BREADCRUMBS_HEIGHT=19
var BreadcrumbsList=function(e){babelHelpers.inherits(r,e)
function r(){var s,a,t
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,l=Array(n),o=0;o<n;o++){l[o]=arguments[o]}return t=(s=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a._setExpanded=function(){a.props.onExpandedChanged(true)},a._setCompressed=function(){a.props.onExpandedChanged(false)},s),babelHelpers.possibleConstructorReturn(a,t)}r.calculateHeight=function e(r){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1
if(!r){return BREADCRUMBS_HEIGHT}return s*BREADCRUMBS_HEIGHT}
r.prototype.render=function e(){var s=this.props,a=s.expanded,t=s.breadcrumbsError,n=s.breadcrumbsList,l=s.noTitle
var o=this._setCompressed,c=this._setExpanded
if(t){return React.createElement("span",{className:css(styles.showsUpWhere)},t)}if(!n){return null}var i=React.createElement("span",{className:css(styles.showMoreLess),onClick:c},i18n.ngettext("%(num)s more","%(num)s more",n.length-1))
var p=React.createElement("span",{className:css(styles.noWrap)},i18n.$_("and %(someMore)s",{someMore:i}))
var u=React.createElement("span",null," | ",React.createElement("span",{className:css(styles.showMoreLess),onClick:o},i18n._("collapse")))
if(n.length===0){return React.createElement("span",{className:css(styles.showsUpWhere)},i18n._("Not yet live anywhere on the site"))}else{var d=r.calculateHeight(a,n.length)
return React.createElement("span",{className:css(styles.showsUpWhere),style:{height:d}},!l&&React.createElement("span",null,i18n._("Live on the site in")),React.createElement("span",{className:css(styles.breadcrumbs)},n.map(function(e,r){return React.createElement(_breadcrumbs2.default,{key:r,openInNewTab:true,path:e.path,separator:">"})})),n.length>1&&this.props.onExpandedChanged&&(a?u:p))}}
return r}(React.Component)
exports.default=BreadcrumbsList
var styles=StyleSheet.create({showsUpWhere:{color:_globalStyles2.default.colors.gray41,display:"flex",overflow:"hidden",transition:"height 200ms"},breadcrumbs:{display:"inline-block",marginLeft:5,marginRight:5},showMoreLess:{color:_globalStyles2.default.colors.gray17,cursor:"pointer",fontFamily:"inherit",fontWeight:"bold",":hover":{textDecoration:"underline"}},backArrow:{display:"inline-block"},divider:{padding:"0 0.5em"},noWrap:{whiteSpace:"nowrap"}})

});
KAdefine("javascript/content-library-package/components/concept-thumbnail.jsx", function(require, module, exports) {
var _babelHelpers$extends,_image,_gradient,_progress
var _deferredImage=require("./deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../../shared-package/i18n.js")
var sharedStyleFunctions=require("../styles/functions.js")
var sharedStyles=require("../styles/shared.js")
var ConceptThumbnail=function(e){babelHelpers.inherits(s,e)
function s(){babelHelpers.classCallCheck(this,s)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}s.prototype.render=function e(){var s=this.props,r=s.progressData,t=s.domain,a=s.kind,l=s.showMore,i=s.url
var o=void 0
var n=false
if(a==="concept"&&r){var d=r.skillsCompleted,h=r.skillsTotal
o=i18n._("%(skillsCompleted)s / %(skillsTotal)s completed",{skillsCompleted:d,skillsTotal:h})}else if(a==="cs"&&r){var c=r.projectsInProgress,p=r.projectsWithFeedback,u=r.skillsCompleted,g=r.skillsTotal
var m=[]
if(p){m.push(i18n.ngettext("%(num)s project with feedback","%(num)s projects with feedback",p))}if(c){m.push(i18n.ngettext("%(num)s project in progress","%(num)s projects in progress",c))}m.push(i18n._("%(percentage)s% complete",{percentage:Math.floor(100*u/g)}))
if(l&&m.length>1){o=m.join("\n")
n=true}else{o=m[m.length-1]}}else if(a==="sat"){o=i18n._("SAT Practice")}var b=sharedStyles.oldDomainColors[t]
var y=i&&!/\.jpg(\?|$)/.test(i)
var f=y?sharedStyleFunctions.fade(b,.05):"rgba(0, 0, 0, 0.05)"
var v=y?sharedStyleFunctions.fade(b,.48):"rgba(0, 0, 0, 0.48)"
var S=y?sharedStyleFunctions.fade(b,.85):"rgba(0, 0, 0, 0.85)"
return React.createElement("div",{className:css(styles.wrapper),style:{backgroundColor:b}},i&&React.createElement(_deferredImage2.default,{alt:"",className:css(styles.image),src:(0,_staticUrl2.default)(i)}),React.createElement("div",{className:css(styles.gradient,n?styles.darkOverlay:null),style:{background:n?S:"linear-gradient("+f+", "+v+")"}}),React.createElement("div",{className:css(styles.progress,n&&styles.progressLong)},o))}
return s}(React.Component)
ConceptThumbnail.kinds=["concept","cs","sat"]
ConceptThumbnail.defaultProps={showMore:false}
var styles=StyleSheet.create({wrapper:babelHelpers.extends({},sharedStyles.fixBorderRadiusWithOverflow,(_babelHelpers$extends={borderRadius:sharedStyles.borderRadius,overflow:"hidden",position:"relative",width:sharedStyles.thumbnailSizes.large.width},_babelHelpers$extends[sharedStyles.queries.small]={width:sharedStyles.thumbnailSizes.small.width},_babelHelpers$extends)),image:(_image={display:"block",marginLeft:"auto",marginRight:"auto",height:sharedStyles.thumbnailSizes.large.height},_image[sharedStyles.queries.small]={height:sharedStyles.thumbnailSizes.small.height},_image),gradient:(_gradient={height:"100%",position:"absolute",width:"100%",bottom:0},_gradient[sharedStyles.queries.small]={display:"none"},_gradient),darkOverlay:{height:"100%"},progress:(_progress={bottom:4,color:sharedStyles.colors.white,fontFamily:"inherit",fontSize:12,fontWeight:"bold",left:8,lineHeight:"19px",position:"absolute",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased"},_progress[sharedStyles.queries.small]={display:"none"},_progress),progressLong:{whiteSpace:"pre-line"}})
module.exports=ConceptThumbnail

});
KAdefine("javascript/content-library-package/components/mission-progress-bar.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var sharedStyles=require("../styles/shared.js")
var percentageProp=function e(r,s,t){var a=r[s]
if(isNaN(parseFloat(a))||!isFinite(a)||a>1||a<0){return new Error("Invalid prop `"+s+"` supplied to "+("`"+t+"`, expected `percentage`."))}}
var ProgressBar=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this
var s=["mastery3","mastery2","mastery1","practiced","unstarted"]
return React.createElement("div",{className:css(styles.progressBar)},s.map(function(e){return React.createElement("div",{key:e,className:css(styles.progressBarSegment),style:babelHelpers.extends({background:e==="unstarted"?"transparent":sharedStyles.colors.mission.math[e]},sharedStyles.flex(r.props[e]*100))})}))}
return r}(React.Component)
ProgressBar.propTypes={mastery1:percentageProp,mastery2:percentageProp,mastery3:percentageProp,practiced:percentageProp,unstarted:percentageProp}
var styles=StyleSheet.create({progressBar:{display:"flex"},progressBarSegment:{display:"flex",height:6}})
module.exports=ProgressBar

});
KAdefine("javascript/content-library-package/components/content-carousel-item.jsx", function(require, module, exports) {
"use strict"
var _wrapper,_thumbnailWrapper,_thumbnail,_label,_babelHelpers$extends,_missionTitle
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _breadcrumbs=require("../../components/breadcrumbs-package/breadcrumbs.jsx")
var _breadcrumbs2=babelHelpers.interopRequireDefault(_breadcrumbs)
var _conceptThumbnail=require("./concept-thumbnail.jsx")
var _conceptThumbnail2=babelHelpers.interopRequireDefault(_conceptThumbnail)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _thumbnail2=require("./thumbnail.jsx")
var _thumbnail3=babelHelpers.interopRequireDefault(_thumbnail2)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var i18n=require("../../shared-package/i18n.js")
var styleConstants={thumbnailHeight:_shared2.default.thumbnailSizes.large.height,thumbnailWidth:_shared2.default.thumbnailSizes.large.width}
var ContentCarouselItem=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),n=0;n<l;n++){i[n]=arguments[n]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={focus:false},a.getConversions=function(e){var t=e.type
if(a.props.bigBingoLinkConversion){return{conversions:[{id:a.props.bigBingoLinkConversion,extra:{module:a.props.referrer,type:t}}]}}return{}},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.render=function e(){var t=this
var r=this.props,a=r.bigBingoLinkConversion,s=r.breadcrumbs,l=r.completed,i=r.domain,n=r.duration,o=r.kind,u=r.nodeUrl,p=r.progressData,d=r.referrer,b=r.style,c=r.thumbnailUrl,f=r.title,m=r.identifier
var h=void 0
var y=void 0
if(_conceptThumbnail2.default.kinds.includes(o)){h=_react2.default.createElement(_conceptThumbnail2.default,{domain:i,kind:o,progressData:p,showMore:this.state.focus,url:c})}else{y=m&&o+"_duration_"+m
h=_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.thumbnailWrapper)},_react2.default.createElement(_thumbnail3.default,{completed:l,duration:n,focus:this.state.focus,kind:o,url:c,textId:y}))}return _react2.default.createElement("div",{className:_aphrodite.css.apply(undefined,b.concat([styles.wrapper]))},_react2.default.createElement(_clientLink2.default,babelHelpers.extends({to:u,referrer:d,style:[styles.thumbnail],onMouseEnter:function e(){return t.setState({focus:true})},onMouseLeave:function e(){return t.setState({focus:false})},onFocus:function e(){return t.setState({focus:true})},onBlur:function e(){return t.setState({focus:false})},tabIndex:"-1","aria-hidden":true},this.getConversions({type:"thumbnail"})),h),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.label)},_react2.default.createElement(_clientLink2.default,babelHelpers.extends({to:u,referrer:d,style:[styles.title,o==="mission"&&styles.missionTitle,this.state.focus&&styles.titleHover],onMouseEnter:function e(){return t.setState({focus:true})},onMouseLeave:function e(){return t.setState({focus:false})},onFocus:function e(){return t.setState({focus:true})},onBlur:function e(){return t.setState({focus:false})},"aria-describedby":y},this.getConversions({type:"subject"})),o==="mission"?i18n._("%(title)s mission",{title:f}):f),_react2.default.createElement(_breadcrumbs2.default,{bigBingoLinkConversion:a,path:s,referrer:d,style:styles.breadcrumbs})))}
return t}(_react2.default.Component)
ContentCarouselItem.propTypes={bigBingoLinkConversion:_propTypes2.default.string,breadcrumbs:_propTypes2.default.arrayOf(_propTypes2.default.shape({title:_propTypes2.default.string.isRequired,href:_propTypes2.default.string.isRequired})),completed:_propTypes2.default.bool,domain:_propTypes2.default.string,duration:_propTypes2.default.number,kind:_propTypes2.default.string.isRequired,nodeUrl:_propTypes2.default.string.isRequired,progressData:_propTypes2.default.shape({projectsInProgress:_propTypes2.default.number,projectsWithFeedback:_propTypes2.default.number,skillsCompleted:_propTypes2.default.number,skillsTotal:_propTypes2.default.number}),referrer:_propTypes2.default.string,style:_propTypes2.default.arrayOf(_propTypes2.default.any),thumbnailUrl:_propTypes2.default.string,title:_propTypes2.default.string.isRequired,progressKind:_propTypes2.default.oneOf(["mission","practice"]),identifier:_propTypes2.default.string}
ContentCarouselItem.defaultProps={domain:"default",style:[]}
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"flex",flexDirection:"column",width:styleConstants.thumbnailWidth},_wrapper[_shared2.default.queries.small]={width:"100%",flexDirection:"row",alignItems:"center"},_wrapper),thumbnailWrapper:(_thumbnailWrapper={width:_shared2.default.thumbnailSizes.large.width,height:_shared2.default.thumbnailSizes.large.height},_thumbnailWrapper[_shared2.default.queries.small]={width:_shared2.default.thumbnailSizes.small.width,height:_shared2.default.thumbnailSizes.small.height},_thumbnailWrapper),thumbnail:(_thumbnail={display:"block",marginBottom:8,marginTop:8,":hover":{textDecoration:"none"}},_thumbnail[_shared2.default.queries.small]={marginBottom:0},_thumbnail),label:(_label={display:"flex",flexDirection:"column"},_label[_shared2.default.queries.small]={marginLeft:12},_label),title:babelHelpers.extends({},_shared2.default.typography.labelMedium,(_babelHelpers$extends={color:_shared2.default.colors.gray17},_babelHelpers$extends[_shared2.default.queries.small]={display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflowY:"hidden"},_babelHelpers$extends)),missionTitle:(_missionTitle={display:"none"},_missionTitle[_shared2.default.queries.small]={display:"block"},_missionTitle),titleHover:{textDecoration:"underline"},breadcrumbs:babelHelpers.extends({},_shared2.default.typography.labelSmall,{fontWeight:"normal",marginTop:4})})
module.exports=ContentCarouselItem

});
KAdefine("javascript/content-library-package/components/content-library-module-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _reactRedux=require("react-redux")
var _contentLibraryModules=require("../content-library-modules.js")
var _contentLibraryModules2=babelHelpers.interopRequireDefault(_contentLibraryModules)
var _moduleList=require("../../modules-package/module-list.jsx")
var _moduleList2=babelHelpers.interopRequireDefault(_moduleList)
var _modalNavigatorStore=require("../redux/modal-navigator-store.js")
var _modalNavigatorStore2=babelHelpers.interopRequireDefault(_modalNavigatorStore)
var _modalNavigator=require("../components/modal-navigator.jsx")
var _modalNavigator2=babelHelpers.interopRequireDefault(_modalNavigator)
var ContentLibraryModuleList=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,o
babelHelpers.classCallCheck(this,r)
for(var l=arguments.length,i=Array(l),s=0;s<l;s++){i[s]=arguments[s]}return o=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.moduleList=null,t),babelHelpers.possibleConstructorReturn(a,o)}r.prototype.render=function e(){var r=this
var t=this.props.modules.filter(function(e){return _contentLibraryModules2.default.hasOwnProperty(e.kind)})
return React.createElement(_reactRedux.Provider,{store:_modalNavigatorStore2.default},React.createElement("div",null,React.createElement(_moduleList2.default,babelHelpers.extends({},this.props,{modules:t,moduleComponents:_contentLibraryModules2.default,ref:function e(t){return r.moduleList=t}})),this.context.router&&React.createElement(_modalNavigator2.default,{domain:this.props.domain,showEditorShortcuts:false,inPractice:true})))}
return r}(_react.Component)
ContentLibraryModuleList.contextTypes={router:_propTypes2.default.any}
exports.default=ContentLibraryModuleList

});
KAdefine("javascript/content-library-package/components/content-list-item.jsx", function(require, module, exports) {
var _nodeStyle,_nodeStyleIcon,_thumbnail,_nodeInfo,_nodeInfoIcon,_practiceButtonDispla,_bestScore,_lastPracticedText,_practiceLink,_mobileBestScore
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _modalUtils=require("../utils/modal-utils.js")
var _iconWithProgress=require("./icon-with-progress.jsx")
var _iconWithProgress2=babelHelpers.interopRequireDefault(_iconWithProgress)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _utils=require("../../components/client-link-package/utils.js")
var _recommendedIcon=require("../icons/recommended-icon.jsx")
var _a11y=require("../../shared-styles-package/a11y.js")
var _thumbnail2=require("./thumbnail.jsx")
var _thumbnail3=babelHelpers.interopRequireDefault(_thumbnail2)
var i18n=require("../../shared-package/i18n.js")
var ContentListItem=function(e){babelHelpers.inherits(t,e)
function t(){var o,a,l
babelHelpers.classCallCheck(this,t)
for(var r=arguments.length,n=Array(r),i=0;i<r;i++){n[i]=arguments[i]}return l=(o=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={itemFocus:false},a.handleClick=function(){if(a.props.customOnClick){a.props.customOnClick(a.props.contentItem)}if(a.props.bigBingoLinkConversions){_bigbingo2.default.markConversions(a.props.bigBingoLinkConversions)}},o),babelHelpers.possibleConstructorReturn(a,l)}t.prototype.componentWillUnmount=function e(){if(this.throttledTruncate){window.removeEventListener("resize",this.throttledTruncate)}}
t.prototype.render=function e(){var t=this
var o=this.props,a=o.completed,l=o.includeTopBorder,r=o.isHighlighted,n=o.light,i=o.relatedVideoCount,s=o.started,c=o.useThumbnail,d=o.wrapperStyles,u=o.practiceButtonStyle,p=o.contentItem,m=o.openContentInModal,h=o.customOnClick,b=o.useWonderBlocksTypography,g=o.shouldUseMastery,y=o.previousItemCompleted
var f=this.state.itemFocus
var v=this.props.forceSmall?smallStyles:responsiveStyles
var S=p.kind==="Video"?p.duration:0
var k=null
if(c){k=React.createElement("div",{className:(0,_aphrodite.css)(v.thumbnail)},React.createElement(_thumbnail3.default,{completed:a,started:s,focus:this.state.itemFocus,duration:S,kind:p.kind,url:p.thumbnailUrl}))}else{var I=!this.props.noSubwayTracks&&!this.props.isFirst
var B=!this.props.noSubwayTracks&&!this.props.isLast
var C=p.kind==="Scratchpad"?p.category:""
k=React.createElement("div",{className:(0,_aphrodite.css)(v.iconWithProgress)},React.createElement(_iconWithProgress2.default,{category:C,completed:p.status==="complete",focus:this.state.itemFocus,kind:p.kind,started:p.status==="started",hasTopSubwayTrack:I,hasBottomSubwayTrack:B,previousItemCompleted:y}),p.recommended&&React.createElement(_recommendedIcon.SmallRecommendedIcon,{backgroundColor:_globalStyles2.default.colors.white,top:-5,left:17}))}var T=u!=="hidden"&&!a&&p.kind==="Exercise"
var w=m?(0,_modalUtils.getModalUrlForContent)(p):p.nodeUrl
var q=b?_wonderBlocksTypographyV.Body:"span"
var L=m&&i18n._("(Opens a modal)")
var x=void 0
if(T){var H=s?i18n._("Continue practicing"):i18n._("Practice")
x=React.createElement(_wonderBlocksButtonV2.default,{kind:r?"primary":"secondary",size:"small",href:w,style:v.practiceButtonDisplay,skipClientNav:!(0,_utils.pathIsInShell)(w)},H)}var E=void 0
var R=void 0
if(p.kind==="Exercise"&&p.bestScore){var D=p.bestScore,W=D.numCorrect,P=D.numAttempted
var F=p.status==="complete"
var N=F&&W===P
var V=Math.round(W/P*100)
var O=F?_wonderBlocksColorV2.default.blue:_globalStyles2.default.colors.gray76
E=React.createElement("div",{className:(0,_aphrodite.css)(v.bestScore),style:{color:O}},i18n.$_("%(score)s%",{score:V}))
R=React.createElement("div",{className:(0,_aphrodite.css)(v.mobileBestScore)},React.createElement("span",{className:(0,_aphrodite.css)(v.mobileBestScorePercent)},i18n.$_("%(score)s%",{score:V})))
if(N){x=null}else{var j=F?i18n._("Go for 100%"):i18n._("Try again")
x=React.createElement(_clientLink2.default,{to:w,className:(0,_aphrodite.css)(v.practiceLink)},j)}}var M=b?v.containerIconWonderBlocks:v.containerIcon
if(g){M=v.containerIconWonderBlocksMastery}return React.createElement("div",{className:(0,_aphrodite.css)(v.container,!c&&M,!c&&l&&v.nodeStyleIconTopBorder)},!c&&E,React.createElement("div",{className:(0,_aphrodite.css)(v.container,!c&&M,v.innerContainer,this.props.noSubwayTracks&&v.innerContainerWithOverflow)},React.createElement(_clientLink2.default,{to:h?"javascript: void 0":w,target:this.props.target,style:[v.nodeStyle,!c&&v.nodeStyleIcon].concat(d||[]),onBlur:function e(){return t.setState({itemFocus:false})},onFocus:function e(){return t.setState({itemFocus:true})},onMouseEnter:function e(){return t.setState({itemFocus:true})},onMouseLeave:function e(){return t.setState({itemFocus:false})},onClick:this.handleClick},k,React.createElement("div",{className:(0,_aphrodite.css)(v.nodeInfo,!c&&v.nodeInfoIcon)},React.createElement("div",{className:(0,_aphrodite.css)(n?v.nodeTitleLight:v.nodeTitle,f&&v.nodeTitleFocus)},React.createElement(q,null,this.props.contentItem.title," ",(i||0)>0&&i18n.ngettext("(%(num)s video)","(%(num)s videos)",i),R),React.createElement(_wonderBlocksCoreV.View,{style:_a11y.srOnly},L)))),x))}
return t}(_react.Component)
ContentListItem.defaultProps={forceSmall:false,includeTopBorder:true,isFirst:false,isLast:false,previousItemCompleted:false,isHighlighted:false,light:false,practiceButtonStyle:"visible",noLeftPadding:false,relatedVideoCount:0,sponsored:false,useThumbnail:true,wrapperStyles:[],useWonderBlocksTypography:false}
var styleConstants={titleBottomMargin:4,titleOrDescriptionLineHeight:18,thumbnailHeight:75,thumbnailHeightSmall:55,thumbnailWidth:135,thumbnailWidthSmall:96}
var NODE_TITLE_LEFT_PADDING=16
var baseStyles={container:{display:"flex",flexDirection:"row",position:"relative"},containerIcon:{alignItems:"center"},containerIconWonderBlocks:{alignItems:"center",marginBottom:3.5},containerIconWonderBlocksMastery:{alignItems:"center",marginBottom:1},nodeStyle:(_nodeStyle={display:"flex",flexGrow:1,flexDirection:"grow",paddingLeft:16},_nodeStyle[_globalStyles2.default.queries.small]={paddingLeft:8},_nodeStyle[":hover"]={textDecoration:"underline"},_nodeStyle[":focus"]={outline:"none"},_nodeStyle),nodeStyleIcon:(_nodeStyleIcon={alignItems:"center",marginTop:0,paddingBottom:16,paddingTop:16},_nodeStyleIcon[_globalStyles2.default.queries.small]={marginTop:0},_nodeStyleIcon),nodeStyleIconTopBorder:{borderTop:"1px solid "+_globalStyles2.default.colors.gray85},thumbnail:(_thumbnail={flexShrink:0,height:styleConstants.thumbnailHeight,width:styleConstants.thumbnailWidth,marginBottom:8},_thumbnail[_globalStyles2.default.queries.small]={height:styleConstants.thumbnailHeightSmall,width:styleConstants.thumbnailWidthSmall},_thumbnail),iconWithProgress:{position:"relative",alignSelf:"flex-start",margin:"auto 0"},nodeInfo:(_nodeInfo={height:styleConstants.thumbnailHeight,overflow:"hidden",paddingTop:1,paddingLeft:14},_nodeInfo[_globalStyles2.default.queries.small]={height:styleConstants.thumbnailHeightSmall,paddingLeft:NODE_TITLE_LEFT_PADDING},_nodeInfo),nodeInfoIcon:(_nodeInfoIcon={color:_globalStyles2.default.colors.gray17,height:"auto",maxHeight:styleConstants.titleOrDescriptionLineHeight*3+styleConstants.titleBottomMargin,paddingTop:0,paddingLeft:NODE_TITLE_LEFT_PADDING},_nodeInfoIcon[_globalStyles2.default.queries.small]={height:"auto",marginLeft:0},_nodeInfoIcon),nodeTitle:babelHelpers.extends({lineHeight:"24px",marginBottom:0},_globalStyles2.default.typography.bodyXsmallBold),nodeTitleLight:babelHelpers.extends({lineHeight:"24px",marginBottom:0},_globalStyles2.default.typography.bodyXsmall),nodeTitleFocus:{textDecoration:"underline"},buttonIconPadding:{width:8,display:"inline-block"},practiceButtonDisplay:(_practiceButtonDispla={},_practiceButtonDispla[_mediaQueries2.default.smOrSmaller]={display:"none"},_practiceButtonDispla),bestScore:(_bestScore={fontWeight:"bold",position:"absolute",left:-36,bottom:"calc(50% - 10px)",width:40,textAlign:"right"},_bestScore[_globalStyles2.default.queries.small]={display:"none"},_bestScore),lastPracticedText:(_lastPracticedText={color:_globalStyles2.default.colors.gray41},_lastPracticedText[_globalStyles2.default.queries.small]={display:"none"},_lastPracticedText),practiceLink:(_practiceLink={},_practiceLink[_globalStyles2.default.queries.small]={display:"none"},_practiceLink),mobileBestScore:(_mobileBestScore={display:"none"},_mobileBestScore[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.labelSmall,{fontWeight:"normal",color:_globalStyles2.default.colors.gray41,display:"block",marginLeft:20}),_mobileBestScore),mobileBestScorePercent:{fontWeight:"bold"},innerContainer:{width:"100%",overflow:"hidden"},innerContainerWithOverflow:{overflow:"visible"}}
var responsiveStyles=_aphrodite.StyleSheet.create(baseStyles)
var smallStyles=_aphrodite.StyleSheet.create(babelHelpers.extends({},baseStyles,{thumbnail:babelHelpers.extends({},baseStyles.thumbnail,baseStyles.thumbnail[_globalStyles2.default.queries.small]),nodeInfo:babelHelpers.extends({},baseStyles.nodeInfo,baseStyles.nodeInfo[_globalStyles2.default.queries.small])}))
module.exports=ContentListItem

});
KAdefine("javascript/content-library-package/components/deferred-image.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var PLACEHOLDER="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
var DeferredImage=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,n=Array(l),o=0;o<l;o++){n[o]=arguments[o]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={hide:true},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.componentDidMount=function e(){this.setState({hide:false})}
t.prototype.render=function e(){var t=this.state.hide
if(t){return React.createElement("img",babelHelpers.extends({},this.props,{src:PLACEHOLDER}))}else{return React.createElement("img",this.props)}}
return t}(_react.Component)
exports.default=DeferredImage

});
KAdefine("javascript/content-library-package/components/icon-with-progress.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _contentIcon=require("./content-icon.jsx")
var _contentIcon2=babelHelpers.interopRequireDefault(_contentIcon)
var DEFAULT_ICON_SIZE=24
var IconWithProgress=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.category,a=t.completed,o=t.kind,s=t.started,c=t.iconSize
var n=c/2-styleConstants.trackWidth/2
var l={background:a?_wonderBlocksColorV2.default.blue:_wonderBlocksColorV2.default.offBlack16,left:n}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},this.props.hasTopSubwayTrack&&React.createElement("div",{className:(0,_aphrodite.css)(styles.track,styles.topTrack),style:l}),React.createElement(_contentIcon2.default,{category:r,completed:a,kind:o,size:c,started:s}),this.props.hasBottomSubwayTrack&&React.createElement("div",{className:(0,_aphrodite.css)(styles.track),style:l}))}
return t}(_react.Component)
IconWithProgress.defaultProps={hasBottomSubwayTrack:false,hasTopSubwayTrack:false,iconSize:DEFAULT_ICON_SIZE}
exports.default=IconWithProgress
var styleConstants={trackWidth:2,trackLength:100}
var styles=_aphrodite.StyleSheet.create({container:{float:"left",position:"relative"},track:{position:"absolute",height:styleConstants.trackLength,width:styleConstants.trackWidth,zIndex:1e3},topTrack:{top:-styleConstants.trackLength}})

});
KAdefine("javascript/content-library-package/components/content-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _contentIconUtils=require("../content-icon-utils.js")
var _contentIcons=require("../content-icons.js")
var i18n=require("../../shared-package/i18n.js")
var ContentIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,o=t.category,r=t.completed,a=t.kind,l=t.size,n=t.started
var c=(0,_contentIconUtils.getIconForContent)(a,o,r),s=c.icon,i=c.text
var d=l/8
var u={position:"absolute",top:-d,left:d}
var p=null
if(r){p=i18n._("completed")}else if(n){p=i18n._("started")}return React.createElement("div",null,React.createElement("span",{"aria-label":p}),React.createElement("span",{"aria-label":i,className:(0,_aphrodite.css)(styles.container),style:{display:"block",width:l,height:l,fontSize:l}},React.createElement(_icon2.default,{icon:s,color:_wonderBlocksColorV2.default.offBlack,className:(0,_aphrodite.css)(styles.overlay)}),React.createElement(_icon2.default,{icon:r?_contentIcons.iconBorderWithGap:_contentIcons.iconBorder,color:_wonderBlocksColorV2.default.offBlack50,className:(0,_aphrodite.css)(styles.overlay)}),n&&!r&&React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.overlay),icon:_contentIcons.startedProgressBar,color:_wonderBlocksColorV2.default.blue}),r&&React.createElement(React.Fragment,null,React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.overlay),icon:_contentIcons.completedProgressBar,color:_wonderBlocksColorV2.default.blue}),React.createElement(_icon2.default,{style:u,icon:_contentIcons.iconCompletedDot,color:_wonderBlocksColorV2.default.blue}),React.createElement(_icon2.default,{style:u,icon:_contentIcons.iconCompletedCheck,color:_wonderBlocksColorV2.default.offWhite}))))}
return t}(_react.Component)
exports.default=ContentIcon
var styles=_aphrodite.StyleSheet.create({container:{position:"relative"},overlay:{position:"absolute",top:0,left:0}})

});
KAdefine("javascript/content-library-package/components/mission-callout.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var i18n=require("../../shared-package/i18n.js")
var strings={clickHere:i18n._("Click here"),lookingForMissions:function e(r){return i18n.$_("Looking for Missions? %(clickHere)s to start or continue working on the %(title)s Mission.",babelHelpers.extends({},r))}}
var MissionCallout=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.linkText},React.createElement(_wonderBlocksLinkV2.default,{skipClientNav:true,href:this.props.url},strings.clickHere))
return React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksTypographyV.Body,{style:styles.text},strings.lookingForMissions({clickHere:r,title:this.props.title}))))}
return r}(React.Component)
exports.default=MissionCallout
var styles=_aphrodite.StyleSheet.create({wrapper:{width:"100%",backgroundColor:_wonderBlocksColorV2.default.white,margin:"16px auto",alignItems:"center"},container:(_container={width:"100%",maxWidth:_globalStyles2.default.constants.pageWidth,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"8px 20px"},_container[_mediaQueries2.default.mdOrSmaller]={maxWidth:512},_container),link:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},text:{color:_wonderBlocksColorV2.default.offBlack},linkText:{display:"inline"}})

});
KAdefine("javascript/content-library-package/components/mission-progress-callout.jsx", function(require, module, exports) {
var _content,_icon,_babelHelpers$extends,_closeButton
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _aphrodite=require("aphrodite")
var _bigBingoLinks=require("../../page-package/big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _deferredImage=require("./deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _closeIcon=require("../icons/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _link=require("../../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _mutationWatcher=require("../../components/mutation-watcher-package/mutation-watcher.jsx")
var _mutationWatcher2=babelHelpers.interopRequireDefault(_mutationWatcher)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _missionProgressBar=require("./mission-progress-bar.jsx")
var _missionProgressBar2=babelHelpers.interopRequireDefault(_missionProgressBar)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _tooltip=require("../../components/tooltip-package/tooltip.jsx")
var _tooltip2=babelHelpers.interopRequireDefault(_tooltip)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var i18n=require("../../shared-package/i18n.js")
var percentageProp=function e(t,r,a){var s=t[r]
if(isNaN(parseFloat(s))||!isFinite(s)||s>1||s<0){return new Error("Invalid prop `"+r+"` supplied to "+("`"+a+"`, expected `percentage`."))}}
var pointInsideBounds=function e(t,r){return t.x>=r.left&&t.x<=r.right&&t.y>=r.top&&t.y<=r.bottom}
var MissionProgressCallout=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,i=Array(o),n=0;n<o;n++){i[n]=arguments[n]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={hover:false},a.handleMouseEnter=function(){a.setState({hover:true})},a.handleMouseLeave=function(){a.setState({hover:false})},a.removeMission=function(e){(0,_khanFetch.khanFetch)("/api/internal/user/recent_missions/"+e,{method:"DELETE"})},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var r="MissionProgressCallout"
if(!_ka2.default.IS_DEV_SERVER){return}if(t.progressPercentage!==this.props.progressPercentage){percentageProp(t,"progressPercentage",r)}if(t.progressBreakdown!==this.props.progressBreakdown){var a=t.progressBreakdown
Object.keys(a).forEach(function(e){percentageProp(a,e,r)})}}
t.prototype.checkMouse=function e(t){if(this.container&&this.tooltip&&this.closeButton){var r=this.closeButton
var a=this.tooltip
var s=_reactDom2.default.findDOMNode(this.container)
var o=s.getBoundingClientRect()
var i=r.getBoundingClientRect()
if(pointInsideBounds(t,o)){this.setState({hover:true})}if(pointInsideBounds(t,i)){a.showTooltip()}}}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.icon,s=r.numMastered,o=r.numTotal,i=r.progressBreakdown,n=r.progressPercentage,l=r.topicId,c=r.title,u=r.url
var d=[{id:"logged_in_homepage_click",extra:{module:"recent_missions"}},{id:"click_resume_card",extra:{kind:"mission"}}]
var p=Math.floor(n*100).toString()
var h=React.createElement(_mutationWatcher2.default,{markConversion:true,revertMutations:true,tag:"missionProgressCalloutPercentage",value:p})
var g=i18n.$_("%(percentage)s% progress",{percentage:h})
var m=i18n._("%(formattedProgressPercentage)s% progress",{formattedProgressPercentage:p})
var f=i18n._("%(numMastered)s / %(numTotal)s skills mastered",{numMastered:s,numTotal:o})
return React.createElement(_link2.default,babelHelpers.extends({style:[styles.callout],href:u,"aria-label":c+" "+m+" "+f,referrer:"current_missions"},_bigBingoLinks2.default.handlersWithExtras(d),{onMouseEnter:this.handleMouseEnter,onFocus:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onBlur:this.handleMouseLeave,ref:function e(r){return t.container=r}}),React.createElement("span",{className:(0,_aphrodite.css)(styles.closeButton,this.state.hover&&styles.closeButtonVisible),ref:function e(r){return t.closeButton=r}},React.createElement(_tooltip2.default,{content:i18n._("Hide this"),ref:function e(r){return t.tooltip=r},side:"top",offset:16},React.createElement("button",{className:(0,_aphrodite.css)(styles.closeIcon),onClick:function e(r){r.preventDefault()
t.removeMission(l)
t.props.onHide()},"aria-label":i18n._("Remove this task")},React.createElement(_closeIcon2.default,{size:10})))),React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},React.createElement(_deferredImage2.default,{className:(0,_aphrodite.css)(styles.icon),src:(0,_staticUrl2.default)(a),alt:""}),React.createElement("div",{className:(0,_aphrodite.css)(styles.info)},React.createElement("div",{className:(0,_aphrodite.css)(styles.title)},c),React.createElement("div",{className:(0,_aphrodite.css)(styles.progressPercentage)},g),React.createElement("div",{className:(0,_aphrodite.css)(styles.numMastered)},f),React.createElement("div",{className:(0,_aphrodite.css)(styles.progress)},React.createElement(_missionProgressBar2.default,i)))))}
return t}(_react.Component)
var styleConstants={iconSize:48,iconSizeSmall:40}
var styles=_aphrodite.StyleSheet.create({callout:babelHelpers.extends({},_shared2.default.grayCallout,{display:"block",overflow:"hidden",position:"relative",flexGrow:0,flexShrink:0}),progress:{background:_shared2.default.colors.gray90,borderRadius:2,marginTop:10,overflow:"hidden"},content:(_content={display:"flex",padding:24},_content[_shared2.default.queries.small]={paddingLeft:16,paddingRight:16},_content),icon:(_icon={borderRadius:styleConstants.iconSize,height:styleConstants.iconSize,marginRight:16,width:styleConstants.iconSize},_icon[_shared2.default.queries.small]={borderRadius:styleConstants.iconSizeSmall,height:styleConstants.iconSizeSmall,width:styleConstants.iconSizeSmall},_icon),info:{flex:"1 1 0%",overflow:"hidden"},title:babelHelpers.extends({},_shared2.default.overflowEllipsis,_shared2.default.typography.smallHeading,(_babelHelpers$extends={marginBottom:4,marginTop:2},_babelHelpers$extends[_shared2.default.queries.small]={marginTop:0},_babelHelpers$extends)),progressPercentage:babelHelpers.extends({},_shared2.default.overflowEllipsis,_shared2.default.typography.labelMedium,{color:_shared2.default.colors.mission.math.mastery3,fontSize:14,lineHeight:"18px",marginBottom:4}),numMastered:babelHelpers.extends({},_shared2.default.overflowEllipsis,{fontSize:14}),closeButton:(_closeButton={position:"absolute",right:4,top:4,transition:_globalStyles.standardTransition+" opacity",opacity:0},_closeButton[_shared2.default.queries.small]={display:"none"},_closeButton),closeButtonVisible:{opacity:1},closeIcon:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,backgroundColor:"transparent",border:"none",color:_globalStyles.colors.gray76,":hover":{color:_globalStyles.colors.gray25},transition:_globalStyles.standardTransition+" color"}})
module.exports=MissionProgressCallout

});
KAdefine("javascript/content-library-package/components/sticky-module.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _lodash=require("../../../third_party/javascript-khansrc/lodash/lodash.js")
var _lodash2=babelHelpers.interopRequireDefault(_lodash)
var _require=require("../../scroll-utils-package/scroll-utils.js"),getDocumentHeight=_require.getDocumentHeight,getOffsetTop=_require.getOffsetTop
var ScrollTracking=require("../../shared-components-package/scroll-tracking.jsx")
var getFirstElementWithClass=function e(t){return document.getElementsByClassName(t)[0]}
var getHeight=function e(t){return t?t.getBoundingClientRect().height:0}
var isMobileSafari=function e(){var t=window.navigator.userAgent.toLowerCase()
var o=/iphone|ipod|ipad/.test(t)
var i=/safari/.test(t)
var r=/chrome|crios/.test(t)
return o&&i&&!r}
var behaviors={NORMAL:"normal",STICKY:"sticky",STUCK:"stuck"}
var MOBILE_SAFARI_SCROLL_SKIPS=10
var SCROLL_UP_THRESHOLD=40
var StickyModule=function(e){babelHelpers.inherits(t,e)
function t(){var o,i,r
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,a=Array(s),n=0;n<s;n++){a[n]=arguments[n]}return r=(o=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),i),i.state={behavior:behaviors.NORMAL,bottomBound:null,moduleHeight:0,scrollPositionPrev:null,scrollPositionStart:null,show:false,skips:null,topBound:null,topOffset:0,windowHeight:null},i.setInitialPosition=function(){i.measure().then(function(){return i.handleScroll(window.pageYOffset)})},i.measure=function(){var e=i.props,t=e.namespace,o=e.onMeasure,r=e.scrollOffset
var s=document.querySelector(".above-header")
var a=s&&s.style.position==="fixed"
var n=a?getOffsetTop(document.getElementById("outer-wrapper")):0
var l=getFirstElementWithClass(t+"beginSticky")
var u=getFirstElementWithClass(t+"endSticky")
var h=i.refs.module
var p=getDocumentHeight()
o&&o()
return new Promise(function(e){i.setState({topOffset:n,topBound:getOffsetTop(l)-n-r,bottomBound:u?p-getOffsetTop(u)-n:null,moduleHeight:getHeight(h),windowHeight:window.innerHeight},e)})},i.handleScroll=function(e){var t=i.props,o=t.hasBottomBound,r=t.scrollUpToShow
var s=i.state,a=s.behavior,n=s.bottomBound,l=s.moduleHeight,u=s.topBound,h=s.skips
var p=u==null||o&&n==null
if(p){return}var c={}
var f=getDocumentHeight()
var v=a===behaviors.NORMAL
var d=a===behaviors.STICKY
var m=a===behaviors.STUCK
if(r){var S=i.state,b=S.scrollPositionStart,g=S.scrollPositionPrev
if(b==null||g==null){b=g=e}var w=b-g===0
var O=b-g>0
var M=g-e>=0
var C=void 0
if(w||O===M){C=Math.abs(e-b)
c.scrollPositionStart=b
c.scrollPositionPrev=e
if(i.isMobileSafari){if(h==null){c.skips=MOBILE_SAFARI_SCROLL_SKIPS}else{c.skips=Math.max(0,h-1)}}}else{C=Math.abs(e-g)
c.scrollPositionStart=e
c.scrollPositionPrev=e
if(i.isMobileSafari){c.skips=MOBILE_SAFARI_SCROLL_SKIPS}}if(!c.skips){c.show=M&&C>SCROLL_UP_THRESHOLD&&c.scrollPositionStart>u+l+SCROLL_UP_THRESHOLD}}var L=e>=u+l
var T=f-(e+l)
var P=n!=null?T<=n:false
if(r&&!c.show&&!L){if(!v){c.behavior=behaviors.NORMAL}}else if(u!=null&&e<u){if(!v){c.behavior=behaviors.NORMAL}}else if(o&&P){if(!m){c.behavior=behaviors.STUCK}}else{if(!d){c.behavior=behaviors.STICKY}}i.setState(c)
i.props.onScroll&&i.props.onScroll(e)},o),babelHelpers.possibleConstructorReturn(i,r)}t.prototype.componentDidMount=function e(){var t=this
this._setInitialPositionTimeoutId=setTimeout(this.setInitialPosition,0)
require.dynimport("../../page-package/footer.jsx").then(function(e){return e.default}).then(function(e){e.addMountListener(t.setInitialPosition)})
this.isMobileSafari=isMobileSafari()
this.throttledMeasure=_lodash2.default.throttle(this.measure,1e3)
this.delayedMeasure=function(){setTimeout(t.measure,600)}
window.addEventListener("resize",this.throttledMeasure)
window.addEventListener("initNav",this.delayedMeasure)}
t.prototype.shouldComponentUpdate=function e(t,o){if(this.props.children===t.children&&this.props.hasBottomBound===t.hasBottomBound&&this.props.scrollUpToShow===t.scrollUpToShow&&this.props.scrollOffset===t.scrollOffset&&this.state.behavior===o.behavior&&this.state.topOffset===o.topOffset&&this.state.show===o.show){return false}return true}
t.prototype.componentDidUpdate=function e(t,o){var i=this.props.onBehaviorChange
var r=this.state.behavior
if(o.behavior!==r){window.dispatchEvent(new CustomEvent("stickyModuleBehaviorChange",{detail:r}))
if(i){i(r)}}}
t.prototype.componentWillUnmount=function e(){var t=this
if(this._setInitialPositionTimeoutId){clearTimeout(this._setInitialPositionTimeoutId)}require.dynimport("../../page-package/footer.jsx").then(function(e){return e.default}).then(function(e){e.removeMountListener(t.setInitialPosition)})
window.removeEventListener("resize",this.throttledMeasure)
window.removeEventListener("initNav",this.delayedMeasure)}
t.prototype.render=function e(){var t=this.props,o=t.children,i=t.scrollOffset,r=t.scrollUpToShow,s=t.styles
var a=this.state,n=a.behavior,l=a.moduleHeight,u=a.topOffset,h=a.windowHeight
var p={willChange:"transform"}
if(n===behaviors.NORMAL){p.position="absolute"
p.top=null}else if(n===behaviors.STICKY&&!r){p.position="fixed"
p.top=u+i}else if(n===behaviors.STICKY&&r){p.position="fixed"
p.top=-l
p.transform="translateY(0%)"
p.transition="transform 200ms"
if(this.state.show){p.transform="translateY(100%)"}}else if(n===behaviors.STUCK){p.position="absolute"
p.bottom=0}if(n===behaviors.STICKY){p.overflowY="auto"
p.overflowX="visible"
p.maxHeight=h}return React.createElement("div",{className:_aphrodite.css.apply(undefined,s),ref:"module",style:p},React.createElement(ScrollTracking,{onScroll:this.handleScroll,delayMs:20}),o)}
return t}(_react.Component)
StickyModule.defaultProps={hasBottomBound:true,namespace:"",scrollOffset:0,scrollUpToShow:false,styles:[]}
exports.default=StickyModule

});
KAdefine("javascript/content-library-package/components/scroll-spy-tracker.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _lodash=require("../../../third_party/javascript-khansrc/lodash/lodash.js")
var _lodash2=babelHelpers.interopRequireDefault(_lodash)
var _scrollTracking=require("../../shared-components-package/scroll-tracking.jsx")
var _scrollTracking2=babelHelpers.interopRequireDefault(_scrollTracking)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var ScrollSpyTracker=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this))
r.setInitialPosition=function(){r.measure().then(function(){return r.handleScroll(window.pageYOffset)})}
r.register=function(e){return function(t){if(t){r.nodes[e]=t}else{delete r.nodes[e]}}}
r.measure=function(){r.windowHeight=window.innerHeight
var e={}
Object.keys(r.nodes).forEach(function(t){var s=r.nodes[t].getBoundingClientRect(),o=s.top,i=s.bottom
e[t]={top:o+window.scrollY,bottom:i+window.scrollY}})
return new Promise(function(t){r.setState({measurements:e},t)})}
r.handleScroll=function(e){var t=e
var s=r.windowHeight/3
var o=Object.keys(r.state.measurements).find(function(e){var o=r.state.measurements[e].top
return o>t&&o<t+s})
if(o){r.setState({spiedSlug:o})
return}var i=Object.keys(r.state.measurements).find(function(e){var s=r.state.measurements[e],o=s.top,i=s.bottom
return o<t&&i>t})
r.setState({spiedSlug:i})}
r.state={measurements:{},spiedSlug:null}
r.nodes={}
return r}t.prototype.componentDidMount=function e(){var t=this
var r=this.props.shouldUseMastery
this._setInitialPositionTimeoutId=setTimeout(this.setInitialPosition,0)
this.throttledMeasure=_lodash2.default.throttle(this.measure,1e3)
this.delayedMeasure=function(){setTimeout(t.measure,600)}
var s=window.location.hash
if(s){setTimeout(function(){var e=s.substring(1)
var o=t.props.onInitialScrollCompleted;(0,_scrollToSlug2.default)(e,"top",function(){return o&&o(e)},r)},0)}window.addEventListener("resize",this.throttledMeasure)
window.addEventListener("initNav",this.delayedMeasure)}
t.prototype.shouldComponentUpdate=function e(t,r){return this.state.spiedSlug!==r.spiedSlug||t!==this.props}
t.prototype.componentWillUnmount=function e(){if(this._setInitialPositionTimeoutId){clearTimeout(this._setInitialPositionTimeoutId)}window.removeEventListener("resize",this.throttledMeasure)
window.removeEventListener("initNav",this.delayedMeasure)}
t.prototype.render=function e(){return React.createElement("span",null,this.props.children&&this.props.children(this.register,this.state.spiedSlug),React.createElement(_scrollTracking2.default,{onScroll:this.handleScroll,delayMs:20}))}
return t}(_react.Component)
exports.default=ScrollSpyTracker

});
KAdefine("javascript/content-library-package/components/title.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var Title=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.children,l=t.style,i=t.tag,a=babelHelpers.objectWithoutProperties(t,["children","style","tag"])
return React.createElement(i,babelHelpers.extends({style:babelHelpers.extends({color:"inherit",fontFamily:"inherit",fontSize:"inherit",marginBottom:0},l)},a),r)}
return t}(_react.Component)
Title.defaultProps={tag:"div"}
exports.default=Title

});
KAdefine("javascript/content-library-package/components/thumbnail.jsx", function(require, module, exports) {
"use strict"
var _deferredImage=require("./deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _main=require("../../utils/time-package/main.js")
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Icon=require("../../shared-styles-package/icon.jsx")
var sharedStyleFunctions=require("../styles/functions.js")
var globalStyles=require("../../shared-styles-package/global-styles.js")
var i18n=require("../../shared-package/i18n.js")
var checkFilledIcon="M4.3,5.5L6.7,3c0.2-0.2,0.5-0.2,0.7,0l0.3,0.3C8,3.6,8,3.9,\n    7.8,4.1L4.6,7.2C4.5,7.3,4.4,7.4,4.3,7.4c-0.1,0-0.3,0-0.3-0.1L2.2,5.5\n    C2,5.3,2,5,2.2,4.8l0.3-0.3c0.2-0.2,0.5-0.2,0.7,0L4.3,5.5z M5,9.9c2.7,\n    0,4.9-2.2,4.9-4.9S7.7,0.1,5,0.1S0.1,2.3,0.1,5S2.3,9.9,5,9.9z"
var playIcon="M1.6,9.9C1.5,10,1.3,10,1.2,10C1.1,10,1,10,0.9,9.9C0.7,9.8,0.6,9.6,\n    0.6,9.4V0.6c0-0.2,0.2-0.4,0.4-0.5C1.1,0,1.4,0,1.6,0.1l7.6,4.5c0.2,0.1,\n    0.3,0.3,0.3,0.5c0,0.2-0.1,0.4-0.3,0.5L1.6,9.9z"
var starIcon={path:"M100.806 37.259q0 1.325-1.59 2.915l-21.995 21.412 5.194 30.316q.265 2.279-.424 3.233-.795 1.007-1.961 1.007t-2.438-.742l-27.189-14.31-27.189 14.31q-1.378.742-2.544.742t-1.802-.901-.636-1.696.106-1.643l5.247-30.316-22.048-21.412q-1.537-1.643-1.537-2.915 0-2.226 3.392-2.809l30.422-4.399 13.621-27.56q1.166-2.491 2.968-2.491t2.968 2.491l13.621 27.56 30.422 4.399q3.392.583 3.392 2.809z",width:100,height:95.373}
var fileTextIcon={path:"M16.701 81.282q0 1.995 2.052 2.109l45.885 0q.912 0 1.482-.57t.57-1.539l0-4.161q0-1.995-2.052-2.109l-45.885 0q-.912.057-1.482.627t-.57 1.482l0 4.161zm49.989-16.644l0-4.218q0-.912-.57-1.482t-1.482-.57l-45.885 0q-.912 0-1.482.57t-.57 1.482l0 4.218q0 .912.57 1.482t1.482.57l45.885 0q.912 0 1.482-.57t.57-1.482zm-16.644-31.293l0-33.174q5.358.969 8.607 4.275l20.292 20.292q3.249 3.249 4.218 8.607l-33.117 0zm33.345 8.322l0 52.155q0 2.565-1.824 4.389t-4.446 1.824l-70.851 0q-2.622 0-4.446-1.824t-1.824-4.389l0-87.552q0-2.622 1.824-4.446t4.446-1.824l35.397 0l0 35.454q0 2.565 1.824 4.389t4.446 1.824l35.454 0z",width:83.362,height:100}
var Thumbnail=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,l=Array(i),o=0;o<i;o++){l[o]=arguments[o]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a._renderInfoBarContent=function(){var e=a.props,r=e.completed,t=e.started,s=e.duration,i=e.kind,l=e.infoBarStyling,o=e.textId
if(l==="hidden"){return null}var n=void 0
var c=void 0
switch(i){case"Article":n=fileTextIcon
c=i18n._("Article")
break
case"Video":n=playIcon
if(s){var p=(0,_main.formatTimeDisplay)(s)
var d=(0,_main.formatTimeDisplayAria)(s)
c=React.createElement("span",{"aria-label":i18n._("Video ")+d},p)}else{c=i18n._("Video")}break
case"Exercise":n=starIcon
c=i18n._("Exercise")
break
case"Scratchpad":n=fileTextIcon
c=i18n._("Creation")
break
case"Challenge":n=starIcon
c=i18n._("Challenge")
break
case"Interactive":n=fileTextIcon
c=i18n._("Interactive")
break
case"Project":n=starIcon
c=i18n._("Project")
break
case"Talkthrough":n=playIcon
c=i18n._("Talkthrough")
break
default:n=starIcon
break}var u=null
if(r){u=i18n._("completed")}else if(t){u=i18n._("started")}return React.createElement("span",null,l==="full"&&React.createElement("span",{className:css(styles.infoBarIcon),"aria-hidden":true},React.createElement(Icon,{icon:n,color:"#fff",size:8})),React.createElement("span",{"aria-label":u}),React.createElement("span",{id:o},c))},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.render=function e(){var r=this.props,t=r.borderRadius,a=r.completed,s=r.infoBarStyling,i=r.started,l=r.url,o=r.height,n=r.focus,c=r.width
var p={borderRadius:t,height:o,width:c}
var d={borderBottomLeftRadius:t,borderBottomRightRadius:t}
return React.createElement("div",{className:css(styles.wrapper),style:p},React.createElement("div",{className:css(styles.innerWrapper)}),React.createElement("div",{className:css(styles.innerWrapper,(a||i)&&styles.innerWrapperComplete,n&&styles.innerWrapperFocus),style:p},(a||i)&&React.createElement("div",{className:css(styles.icon)},React.createElement(Icon,{icon:checkFilledIcon,size:c<100?16:20,color:globalStyles.colors.white}))),l&&React.createElement(_deferredImage2.default,{alt:"",className:css(styles.image),src:(0,_staticUrl2.default)(l)}),s!=="hidden"&&React.createElement("div",{className:css(styles.infoBar),style:d},this._renderInfoBarContent()))}
return r}(React.Component)
Thumbnail.propTypes={borderRadius:PropTypes.number,completed:PropTypes.bool,duration:PropTypes.number,focus:PropTypes.bool,height:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),kind:PropTypes.string.isRequired,started:PropTypes.bool,url:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),infoBarStyling:PropTypes.oneOf(["full","text","hidden"]),textId:PropTypes.string}
Thumbnail.defaultProps={borderRadius:globalStyles.borderRadius,height:"100%",width:"100%",infoBarStyling:"full"}
var styleConstants={infoBarColor:sharedStyleFunctions.fade(globalStyles.colors.gray17,.8),infoBarTextColor:"#fff",progressIconSize:12,progressIconColor:"rgba(255, 255, 255, 0.6)"}
var styles=StyleSheet.create({wrapper:{background:"#eee",overflow:"hidden",position:"relative"},innerWrapper:{boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.08)",bottom:0,left:0,position:"absolute",right:0,top:0},innerWrapperComplete:{boxShadow:"none",backgroundColor:"rgba(0, 0, 0, 0.4)",transition:"opacity "+globalStyles.standardTransition},innerWrapperFocus:{opacity:0},icon:{opacity:1,position:"absolute",right:8,top:8},image:{backgroundSize:"cover",display:"block",width:"100%"},infoBar:{background:styleConstants.infoBarColor,bottom:0,color:styleConstants.infoBarTextColor,fontSize:12,left:0,lineHeight:"12px",padding:"2px 5px",position:"absolute",right:0,textOverflow:"ellipsis",whiteSpace:"nowrap"},infoBarIcon:{fontSize:10,marginRight:5}})
module.exports=Thumbnail

});
KAdefine("javascript/content-library-package/components/mappers-entry.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _mappersForm=require("./mappers-form.jsx")
var _mappersForm2=babelHelpers.interopRequireDefault(_mappersForm)
var _mappersSuggestions=require("./mappers-suggestions.jsx")
var _mappersSuggestions2=babelHelpers.interopRequireDefault(_mappersSuggestions)
var MappersEntry=function(e){babelHelpers.inherits(t,e)
function t(){var r,s,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),i=0;i<n;i++){o[i]=arguments[i]}return a=(r=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),s),s.state={forceEntryForm:false,hasLoadedCss:false,newSuggestions:null,entryFormLoaded:false,initialSuggestions:null},s.setForceEntryForm=function(e){s.setState({forceEntryForm:e})},s.setNewSuggestions=function(e){s.setState({newSuggestions:e,forceEntryForm:false})},r),babelHelpers.possibleConstructorReturn(s,a)}t.prototype.componentDidMount=function e(){var t=this
var r=this.props.user
require.dynimport("../../../stylesheets/mappers-callout-package/mappers-callout.less").then(function(){return t.setState({hasLoadedCss:true})})
if(r){(0,_khanFetch.khanFetch)("/api/internal/mappers/get_suggestions/"+r.id).then(function(e){return e.json()}).then(function(e){t.setState({initialSuggestions:e})}).catch(function(e){return e})}}
t.prototype.render=function e(){var t=this.props,r=this.state
var s=r.forceEntryForm,a=r.hasLoadedCss,n=r.newSuggestions,o=r.initialSuggestions
var i=n||o
var p=i&&i.length
var u=babelHelpers.extends({},t,{suggestions:i,setForceEntryForm:this.setForceEntryForm,setNewSuggestions:this.setNewSuggestions})
return p&&!s?_react2.default.createElement(_mappersSuggestions2.default,u):a?_react2.default.createElement(_mappersForm2.default,u):null}
return t}(_react2.default.Component)
module.exports=MappersEntry

});
KAdefine("javascript/content-library-package/components/mappers-form-list.jsx", function(require, module, exports) {
var _aphrodite=require("aphrodite")
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _mappersEntry=require("../components/mappers-entry.jsx")
var _mappersEntry2=babelHelpers.interopRequireDefault(_mappersEntry)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _reactSelect=require("react-select")
var _reactSelect2=babelHelpers.interopRequireDefault(_reactSelect)
var i18n=require("../../shared-package/i18n.js")
var MappersFormList=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,n=Array(l),u=0;u<l;u++){n[u]=arguments[u]}return s=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),r),r.state={activeClass:null},r.setActiveClass=function(e){r.setState({activeClass:e})},a),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.render=function e(){var t=this
var a=this.props.data
var r=a||{},s=r.user,l=r.coach
var n=this.state.activeClass
var u=null
if(l&&l.students&&l.studentLists){var c={}
if(l.studentLists){l.studentLists.forEach(function(e){c[e.key]=e})}u={}
l.students.forEach(function(e){var t=e.studentLists,a=babelHelpers.objectWithoutProperties(e,["studentLists"])
t.forEach(function(e){if(c[e.key]){if(!u[e.key]){u[e.key]=babelHelpers.extends({students:[]},c[e.key])}u[e.key].students.push(a)}})})}return _react2.default.createElement("div",null,_react2.default.createElement("h2",{className:(0,_aphrodite.css)(styles.title)},i18n._("You")),_react2.default.createElement("ul",null,_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.student)},_react2.default.createElement(_mappersEntry2.default,{isCoach:false,user:s}))),l&&l.students&&l.students.length>0&&_react2.default.createElement("div",null,_react2.default.createElement("h2",{className:(0,_aphrodite.css)(styles.title)},i18n._("Your students")),u&&_react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement("div",null,_react2.default.createElement(_reactSelect2.default,{className:(0,_aphrodite.css)(styles.select),clearable:false,placeholder:"Filter students by class",onChange:function e(a){return t.setActiveClass(a.value)},options:Object.values(u).map(function(e){return{value:e.key,label:e.name}}),searchable:false,value:n})),n&&u[n]&&_react2.default.createElement("ul",null,u[n].students.map(function(e){return _react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.student),key:e.id},_react2.default.createElement(_mappersEntry2.default,{isCoach:true,user:e}))})))))}
return t}(_react2.default.Component)
var styles=_aphrodite.StyleSheet.create({title:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,{color:_shared2.default.colors.gray17,marginBottom:16}),select:{margin:"0 auto",marginBottom:16,maxWidth:300,zIndex:2},student:{borderTop:"1px solid "+_shared2.default.colors.gray90}})
module.exports=MappersFormList

});
KAdefine("javascript/content-library-package/components/mappers-form.jsx", function(require, module, exports) {
var _aphrodite=require("aphrodite")
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _mapTestScoreToTopic=require("../mappers/map-test-score-to-topic.js")
var _mapTestScoreToTopic2=babelHelpers.interopRequireDefault(_mapTestScoreToTopic)
var _reactSelect=require("react-select")
var _reactSelect2=babelHelpers.interopRequireDefault(_reactSelect)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _userLink=require("./user-link.jsx")
var _userLink2=babelHelpers.interopRequireDefault(_userLink)
var _util=require("../mappers/util.js")
var i18n=require("../../shared-package/i18n.js")
var chevronDown={path:"M99.669 13.048q0 3.36-2.352 5.712l-41.664 41.664q-2.408 2.408-5.88 2.408t-5.712-2.408l-41.664-41.664q-2.408-2.24-2.408-5.712t2.408-5.88l4.76-4.816q2.52-2.352 5.88-2.352t5.656 2.352l31.136 31.136 31.08-31.136q2.352-2.352 5.712-2.352t5.88 2.352l4.816 4.816q2.352 2.52 2.352 5.88z",width:100,height:63.034}
var chevronUp={path:"M99.669 49.84q0 3.416-2.352 5.768l-4.816 4.816q-2.408 2.408-5.88 2.408t-5.712-2.408l-31.08-31.024-31.136 31.024q-2.296 2.408-5.768 2.408t-5.712-2.408l-4.816-4.816q-2.408-2.296-2.408-5.768t2.408-5.824l41.664-41.664q2.352-2.352 5.712-2.352t5.88 2.352l41.608 41.664q2.408 2.408 2.408 5.824z",width:100,height:63.034}
var MappersForm=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
_initialiseProps.call(a)
var s=r.user
var n=s&&s.age?s.age:0
a.state={error:"",exam:n>11?_util.exams.SIX_PLUS:_util.exams.TWO_TO_FIVE,scores:{},showInstructions:false}
return a}t.prototype.render=function e(){var t=this
var r=this.props,a=r.isCoach,s=r.suggestions,n=r.user
var i=this.state,l=i.exam,o=i.scores,c=i.error,u=i.showInstructions
var d=Object.entries(_util.examSubjects[l])
var h=d.map(function(e){var r=e[0],a=e[1]
return _react2.default.createElement("label",{className:(0,_aphrodite.css)(styles.label),key:r},a.name,_react2.default.createElement("input",{className:(0,_aphrodite.css)(styles.input),max:""+_util.MAX_POSSIBLE_SCORE,min:""+_util.MIN_POSSIBLE_SCORE,onChange:function e(r){return t.handleChange(a.slug,r.target.value)},placeholder:"0",step:1,type:"number",value:o[a.slug]}))})
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.content,styles.enterScores)},_react2.default.createElement("form",{onSubmit:this.handleSubmit},n&&a&&_react2.default.createElement("h3",{className:(0,_aphrodite.css)(styles.title)},i18n.$_("Enter MAP Test Scores for %(name)s",{name:_react2.default.createElement(_userLink2.default,{user:n})})),_react2.default.createElement("p",{className:(0,_aphrodite.css)(styles.description)},i18n._("Fill in the lower score for each MAP Test Goal Performance Area."),_react2.default.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",style:styles.instructionButton,onClick:this.toggleInstructions},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.instructionButtonText)},u?i18n._("Hide instructions"):a?i18n._("Where do I find my students' scores?"):i18n._("Where do I find my scores?")),_react2.default.createElement(_icon2.default,{icon:u?chevronUp:chevronDown,size:8})),u&&_react2.default.createElement("img",{alt:i18n._("Enter the lower number in the score"+" for each MAP exam subject."),className:(0,_aphrodite.css)(styles.instructionImg),src:(0,_staticUrl2.default)("/images/mappers-instructions.png")})),_react2.default.createElement(_reactSelect2.default,{className:(0,_aphrodite.css)(styles.select),clearable:false,onChange:function e(r){var a=r.value
return t.setState({exam:a})},options:Object.values(_util.exams).map(function(e){return{value:e,label:_util.examNames[e]}}),searchable:false,value:l}),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.subjects)},h),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.error)},c),_react2.default.createElement(_wonderBlocksButtonV2.default,{type:"submit",kind:"secondary"},i18n._("Show me the recommendations!"))),s&&!!s.length&&_react2.default.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:this.handleShowSuggestionsClick,style:styles.showSuggestionsButton},i18n._("Show previous recommendations")))}
return t}(_react2.default.Component)
var _initialiseProps=function e(){var t=this
this.hasScoreEntryError=function(e){var r=t.state.exam
var a=void 0
var s=Object.keys(e).length
var n=Object.keys(_util.examSubjects[_util.exams[r]]).length
var i=Object.values(e)
var l=function e(t){return String(~~Number(t))===t}
if(s!==n){a="You must enter a score for all subjects."}if(i.some(function(e){return!l(e)})){a="Scores must be whole numbers."}if(i.some(function(e){return e<_util.MIN_POSSIBLE_SCORE})){a="Scores must be greater than "+_util.MIN_POSSIBLE_SCORE}if(i.some(function(e){return e>_util.MAX_POSSIBLE_SCORE})){a="Scores must be less than "+_util.MAX_POSSIBLE_SCORE}if(a){t.setState({error:a})
return true}else{return false}}
this.handleSubmit=function(e){var r=t.props,a=r.isCoach,s=r.setNewSuggestions,n=r.user
var i=t.state.scores
e.preventDefault()
if(t.hasScoreEntryError(i)){return}if(!n){window.alert("Warning: no progress will be saved while you are logged out.")}var l=Object.entries(i).map(function(e){var t=e[0],r=e[1]
return{subject_name:t,topic_slug:(_mapTestScoreToTopic2.default[t].find(function(e){return r<=e.max&&r>=e.min})||{}).slug}})
var o={topics:l}
if(n&&a){o.kaid=n.id}(0,_khanFetch.khanFetch)(_util.ADD_TOPICS_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(function(e){return e.json()}).then(s).catch(function(e){})}
this.handleChange=function(e,r){var a
var s=t.state.scores
var n=babelHelpers.extends({},s,(a={},a[e]=r,a))
t.setState({scores:n})}
this.handleShowSuggestionsClick=function(){t.props.setForceEntryForm(false)}
this.toggleInstructions=function(){t.setState(function(e){var t=e.showInstructions
return{showInstructions:!t}})}}
var styles=_aphrodite.StyleSheet.create({content:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,_shared2.default.typography.bodySmall,{maxWidth:_shared2.default.constants.moduleWidthCentered}),enterScores:{textAlign:"center"},title:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,{color:_shared2.default.colors.gray17,marginBottom:16}),description:babelHelpers.extends({},_shared2.default.typography.bodySmall,{margin:0,marginBottom:16,padding:0}),select:{margin:"0 auto",marginBottom:16,maxWidth:300},subjects:{display:"inline-block",textAlign:"left"},label:{display:"block",fontWeight:"bold",lineHeight:"40px",marginBottom:16,marginTop:8},input:{border:"1px solid "+_shared2.default.colors.gray76,borderRadius:_shared2.default.borderRadius,float:"right",fontFamily:"inherit",fontSize:"inherit",marginLeft:20,maxWidth:70,padding:8},instructionButton:{marginBottom:"2em"},instructionButtonText:{paddingRight:"1em",textAlign:"center",verticalAlign:"middle"},instructionImg:{marginBottom:16,width:"100%"},button:{display:"inline-block"},error:{color:_shared2.default.colors.alertRed,marginBottom:16},showSuggestionsButton:{display:"block",margin:"1em auto"}})
module.exports=MappersForm

});
KAdefine("javascript/content-library-package/components/mappers-suggestions.jsx", function(require, module, exports) {
var _aphrodite=require("aphrodite")
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _userLink=require("./user-link.jsx")
var _userLink2=babelHelpers.interopRequireDefault(_userLink)
var i18n=require("../../shared-package/i18n.js")
var MappersSuggestions=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.isCoach,a=t.setForceEntryForm,s=t.suggestions,l=t.user
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.content)},r&&l&&_react2.default.createElement("h3",{className:(0,_aphrodite.css)(styles.title)},i18n.$_("MAP Test recommendations for %(name)s",{name:_react2.default.createElement(_userLink2.default,{user:l})})),!r&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.description)},i18n._("Click below to work on your recommended practice.")),s.map(function(e,t){return _react2.default.createElement("div",{key:t,className:(0,_aphrodite.css)(styles.tutorialRow)},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.progress)},i18n.$_("%(completed)s of %(total)s done",{completed:e.progress.completed,total:e.progress.total})),r?_react2.default.createElement("span",null,e.title):_react2.default.createElement(_wonderBlocksLinkV2.default,{href:"/mappers/"+e.slug,skipClientNav:true},e.title))}),_react2.default.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",style:styles.btn,onClick:function e(){return a(true)}},i18n._("Enter new scores")))}
return t}(_react2.default.Component)
var styles=_aphrodite.StyleSheet.create({content:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,_shared2.default.typography.bodySmall,{maxWidth:_shared2.default.constants.moduleWidthCentered}),title:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,{color:_shared2.default.colors.gray17,fontWeight:"normal",marginBottom:16}),description:{marginBottom:16},tutorialRow:{marginTop:8},progress:{display:"inline-block",marginRight:20,textAlign:"right",width:120},btn:{marginTop:"1em"}})
module.exports=MappersSuggestions

});
KAdefine("javascript/content-library-package/components/topic-task-loaders.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.SubjectChallengeLoader=exports.UnitTestLoader=exports.QuizLoader=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _itemReservation=require("../../item-reservation-package/item-reservation.js")
var _Loader=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
n.setTaskDataSafe=function(e){if(n._isMounted){n.setState({taskData:e})}}
n.state={taskData:null}
return n}t.prototype.componentDidMount=function e(){this._isMounted=true
this.reload()}
t.prototype.componentDidUpdate=function e(t){if(t.retries<this.props.retries){this.reload()}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.reload=function e(){this.setState({taskData:null})
this.props.loaderFn().then(this.setTaskDataSafe)}
t.prototype.render=function e(){var t=this.state.taskData
return this.props.children?this.props.children(t):null}
return t}(_react.Component)
var QuizLoader=exports.QuizLoader=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),n.load=function(){var e=n.props,t=e.topicId,r=e.positionKey
var a=(0,_khanFetch.encodeParams)({topicId:t,positionKey:r,canReserveItems:(0,_itemReservation.useItemReservation)()?"1":"0"})
return(0,_khanFetch.khanFetch)("/api/internal/user/task/topic_quiz?"+a,{method:"GET"}).then(function(e){return e.json()})},r),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function e(){return React.createElement(_Loader,{loaderFn:this.load,topicId:this.props.topicId,retries:this.props.retries,children:this.props.children})}
return t}(_react.Component)
var UnitTestLoader=exports.UnitTestLoader=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),n.load=function(){var e=n.props.topicId
var t=(0,_khanFetch.encodeParams)({topicId:e,canReserveItems:(0,_itemReservation.useItemReservation)()?"1":"0"})
return(0,_khanFetch.khanFetch)("/api/internal/user/task/unit_test?"+t,{method:"GET"}).then(function(e){return e.json()})},r),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function e(){return React.createElement(_Loader,{loaderFn:this.load,topicId:this.props.topicId,retries:this.props.retries,children:this.props.children})}
return t}(_react.Component)
var SubjectChallengeLoader=exports.SubjectChallengeLoader=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),n.load=function(){var e=n.props.topicId
var t=(0,_khanFetch.encodeParams)({topicId:e,canReserveItems:(0,_itemReservation.useItemReservation)()?"1":"0"})
return(0,_khanFetch.khanFetch)("/api/internal/user/task/subject_challenge?"+t,{method:"GET"}).then(function(e){return e.json()})},r),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function e(){return React.createElement(_Loader,{loaderFn:this.load,topicId:this.props.topicId,retries:this.props.retries,children:this.props.children})}
return t}(_react.Component)

});
KAdefine("javascript/content-library-package/components/interspersed-quiz.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _column,_leftColumn,_divider,_rightColumn,_iconContainer,_bgContainer,_mobileTrophy
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactRouterDom=require("react-router-dom")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _link=require("../../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _studyGuideCallToAction=require("./study-guide-call-to-action.jsx")
var _studyGuideCallToAction2=babelHelpers.interopRequireDefault(_studyGuideCallToAction)
var _tableQuizIcon=require("../icons/table-quiz-icon.jsx")
var _tableQuizIcon2=babelHelpers.interopRequireDefault(_tableQuizIcon)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _trophyIcon=require("../icons/trophy-icon.jsx")
var _trophyIcon2=babelHelpers.interopRequireDefault(_trophyIcon)
var _trophyIconLarge=require("../icons/trophy-icon-large.jsx")
var _trophyIconLarge2=babelHelpers.interopRequireDefault(_trophyIconLarge)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _calculateUpNext=require("../utils/calculate-up-next.js")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _modalUtils=require("../utils/modal-utils.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../../shared-package/i18n.js")
var chevronDownIcon={path:"M99.669 13.048q0 3.36-2.352 5.712l-41.664 41.664q-2.408 2.408-5.88 2.408t-5.712-2.408l-41.664-41.664q-2.408-2.24-2.408-5.712t2.408-5.88l4.76-4.816q2.52-2.352 5.88-2.352t5.656 2.352l31.136 31.136 31.08-31.136q2.352-2.352 5.712-2.352t5.88 2.352l4.816 4.816q2.352 2.52 2.352 5.88z",width:100,height:63.034}
var InterspersedQuiz=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
a.openModal=function(){var e=(0,_modalUtils.getModalUrlForTestOrQuiz)(a.props.quiz)
a.props.history.push(e)}
a.state={isExpanded:false}
return a}t.prototype.getControlCopyInfo=function e(){var t=this.props.quiz,r=t.numItems,a=t.score,l=t.topic,o=t.tutorials,i=t.type
var n=void 0
var s=void 0
var u=void 0
var c=void 0
var d=React.createElement("strong",null,l.title)
var p=function e(){return false}
var m=function e(){return true}
var y=function e(t){return t.contentItems&&t.contentItems.some(function(e){var t=e.recommended
return t})}
var f=p
if(a){var h=a.numCorrect,v=a.numAttempted
var g=Math.round(100*h/v)
s=g+"%"
u=(0,_calculateUpNext.getStatusForScore)(a)
if(u==="not-passed"){if(i==="quiz"){n=i18n._("Try quiz again")}else{n=i18n._("Try test again")}}else{if(i==="quiz"){n=i18n._("Take quiz again")}else{n=i18n._("Take test again")}}if(u==="aced"){if(i==="quiz"){c=i18n._("Amazing! "+"Continue your learning journey with the next lesson.")
f=m}else{c=i18n._("Amazing work! Continue your learning journey with the next unit.")}}else{var b=o.filter(y)
if(b.length){c=i18n._("Review the following recommended lessons to "+"help you learn:")
f=y}else{c=i18n._("These %(num)s questions cover concepts in:",{num:r})
f=m}}}else{u="not-passed"
if(i==="quiz"){n=i18n._("Start quiz")
c=i18n.ngettext("Identify your areas for growth in this lesson:","Identify your areas for growth in these lessons:",o.length)
f=m}else{n=i18n._("Start test")
c=i18n.$_("Test your understanding of %(topic)s with these %(num)s questions.",{topic:d,num:r})}}var k=this.renderLinks(f,o)
return{callToAction:n,completion:s,links:k,subtitle:c,status:u}}
t.prototype.renderLinks=function e(t,r){var a=this
var l=5
var o=this.props.shouldUseMastery
var i=this.props.quiz.domain
var n=this.state.isExpanded
var s=r.filter(t)
if(s.length===0){return null}var u=r.length>l&&!n?r.slice(0,l):r
var c=14
var d=u.map(function(e,t){var r=e.slug,a=e.title,l=e.url
var n=function e(){return(0,_scrollToSlug2.default)(r,"top",undefined,o)}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialLink),key:r,style:{color:(0,_globalStyles.domainColors)(i).domain3}},t>0&&React.createElement(_strut2.default,{size:c}),React.createElement(_link2.default,{href:l,onClick:n},React.createElement(_wonderBlocksTypographyV.Body,null,a)))})
if(u.length<r.length){d.push(React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialLink),key:"see-more",style:{color:(0,_globalStyles.domainColors)(i).domain3}},React.createElement(_strut2.default,{size:c}),React.createElement(_link2.default,{onClick:function e(){return a.setState({isExpanded:true})}},i18n._("See %(num)s more",{num:r.length-u.length}),React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.chevronIcon),icon:chevronDownIcon,size:6}))))}return d}
t.prototype.render=function e(){var t=this.props,r=t.quiz,a=t.isUpNext
var l=r.domain,o=r.score,i=r.title,n=r.type
var s=this.getControlCopyInfo()
var u=s.callToAction,c=s.completion,d=s.links,p=s.subtitle,m=s.status
var y=n==="quiz"?React.createElement(_tableQuizIcon2.default,{domain:l}):React.createElement(_trophyIconLarge2.default,{domain:l,status:m,sparkle:true})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.leftColumn)},a&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.upNextForYou},i18n._("Up next for you:")),React.createElement("div",{className:(0,_aphrodite.css)(styles.titleContainer)},React.createElement(_title2.default,{tag:_wonderBlocksTypographyV.HeadingSmall,style:{color:(0,_globalStyles.domainColors)(l).domain3}},React.createElement(_clientLink2.default,{to:(0,_modalUtils.getModalUrlForTestOrQuiz)(r)},i)),o&&React.createElement(_strut2.default,{size:8}),o&&React.createElement(_title2.default,{tag:_wonderBlocksTypographyV.HeadingSmall,style:{color:_globalStyles.colors.gray41}},c),n==="test"&&React.createElement(_strut2.default,{size:12}),n==="test"&&React.createElement("div",{className:(0,_aphrodite.css)(styles.mobileTrophy)},React.createElement(_trophyIcon2.default,{size:27,status:m}))),React.createElement(_strut2.default,{size:16}),React.createElement(_wonderBlocksTypographyV.LabelMedium,{style:styles.subtitle},p),d&&d.length!==0&&React.createElement(_strut2.default,{size:16}),d,React.createElement(_strut2.default,{size:24}),React.createElement(_studyGuideCallToAction2.default,{onClick:this.openModal,type:m==="not-passed"?"primary":"secondary"},u)),React.createElement("div",{className:(0,_aphrodite.css)(styles.divider)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.rightColumn)},n==="test"&&React.createElement("div",{className:(0,_aphrodite.css)(styles.bgContainer)},React.createElement(_trophyIconLarge.GradientBackground,null)),React.createElement("div",{className:(0,_aphrodite.css)(styles.iconContainer)},y)))}
return t}(_react.Component)
exports.default=(0,_reactRouterDom.withRouter)(InterspersedQuiz)
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"row",flex:1,flexGrow:1},column:(_column={display:"flex",flexDirection:"column"},_column[_mediaQueries2.default.mdOrLarger]={flex:1},_column),leftColumn:(_leftColumn={alignItems:"flex-start"},_leftColumn[_mediaQueries2.default.md]={flex:2},_leftColumn[_mediaQueries2.default.smOrSmaller]={flex:1},_leftColumn),divider:(_divider={flexBasis:32,flexShrink:0},_divider[_mediaQueries2.default.mdOrSmaller]={display:"none"},_divider),rightColumn:(_rightColumn={alignItems:"center",justifyContent:"space-between",position:"relative"},_rightColumn[_mediaQueries2.default.md]={flex:1},_rightColumn[_mediaQueries2.default.smOrSmaller]={display:"none"},_rightColumn),titleContainer:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},subtitle:{color:_wonderBlocksColorV2.default.offBlack64},tutorialLink:{display:"flex",flexDirection:"column"},chevronIcon:{transform:"translate(5px, -1px)"},iconContainer:(_iconContainer={position:"absolute",bottom:-32},_iconContainer[_mediaQueries2.default.mdOrSmaller]={display:"none"},_iconContainer),bgContainer:(_bgContainer={position:"absolute",top:-32},_bgContainer[_mediaQueries2.default.mdOrSmaller]={display:"none"},_bgContainer),mobileTrophy:(_mobileTrophy={display:"flex",flex:1,flexShrink:0},_mobileTrophy[_mediaQueries2.default.lgOrLarger]={display:"none"},_mobileTrophy),upNextForYou:{color:_wonderBlocksColorV2.default.blue,display:"block",paddingBottom:8}})

});
KAdefine("javascript/content-library-package/components/mastery-interspersed-quiz.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _leftColumn,_divider,_rightColumn,_bgContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactRouterDom=require("react-router-dom")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _studyGuideCallToAction=require("./study-guide-call-to-action.jsx")
var _studyGuideCallToAction2=babelHelpers.interopRequireDefault(_studyGuideCallToAction)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _getNavigationConversions=require("../utils/get-navigation-conversions.js")
var _getNavigationConversions2=babelHelpers.interopRequireDefault(_getNavigationConversions)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _modalUtils=require("../utils/modal-utils.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _spring=require("../../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var i18n=require("../../shared-package/i18n.js")
var constants={iconWidth:386,courseChallengeHighScoreThreshold:70}
var strings={getQuizNull:function e(t){return i18n.ngettext("Level up on the above skills and collect up to %(num)s Mastery point","Level up on the above skills and collect up to %(num)s Mastery points",t)},quizNullCTA:i18n._("Start quiz"),quizResumeCTA:i18n._("Resume quiz"),getQuizTried:function e(t){return i18n.ngettext("Try taking the quiz again to level up on the above skills and collect up to %(num)s Mastery point","Try taking the quiz again to level up on the above skills and collect up to %(num)s Mastery points",t)},quizTriedCTA:i18n._("Take quiz again"),getQuizComplete:function e(t,r){return i18n.$_("You can’t level up or collect any more Mastery points with this quiz. Take the %(unitTest)s to level up on all the skills and collect up to %(num)s Mastery points",{unitTest:r,num:t})},getTestNull:function e(t){return i18n.ngettext("Level up on all the skills in this unit and collect up to %(num)s Mastery point!","Level up on all the skills in this unit and collect up to %(num)s Mastery points!",t)},testNullCTA:i18n._("Start Unit test"),testResumeCTA:i18n._("Resume Unit test"),getTestTried:function e(t){return i18n.ngettext("Try taking the unit test again to level up on all the skills in this unit and collect up to %(num)s Mastery point","Try taking the unit test again to level up on all the skills in this unit and collect up to %(num)s Mastery points",t)},masteryAchieved:i18n._("Congratulations! You have achieved Mastery! Great work!"),testTriedMastered:i18n._("If you are interested in achieving 100% Mastery, you can take the Unit test again."),testTriedCTA:i18n._("Take Unit test again"),testComplete:i18n._("Great work! You’ve already mastered this unit and can’t level up in any skills nor collect any Mastery points"),subjectchallengeNullBody:i18n._("Test your knowledge of the skills in this course. Have a test coming up? The Course challenge can help you understand what you need to review."),subjectChallengeTriedLowScoreBody:i18n._("Nice work completing the Course challenge! Try again to see if you can improve your score."),subjectChallengeTriedHighScoreBody:i18n._("Nice work! You're on the right track. Try again to see if you can improve your score."),subjectChallengeCompleteBody:i18n._("Amazing work! Looks like you really know your stuff!"),subjectChallengeNullCTA:i18n._("Start Course challenge"),subjectChallengeResumeCTA:i18n._("Resume Course challenge"),subjectChallengeTriedCTA:i18n._("Take Course challenge again"),unitTest:i18n._("unit test"),upNext:i18n._("Up next for you:")}
var TitleWithDate=(0,_createMomentLoader2.default)(function(e){var t=e.title,r=e.score,i=e.moment
var n=(0,_masteryUtils.getScoreAndDateText)(r,i),l=n.scoreText,s=n.dateText
return React.createElement(_wonderBlocksCoreV.View,{style:styles.titleWithDate},t,": ",l," ",s)})
var getCallToAction=function e(t,r,i){if(i){switch(t){case"quiz":return strings.quizResumeCTA
case"test":return strings.testResumeCTA
case"subject-challenge":return strings.subjectChallengeResumeCTA}}else if(r){switch(t){case"quiz":return strings.quizTriedCTA
case"test":return strings.testTriedCTA
case"subject-challenge":return strings.subjectChallengeTriedCTA}}else{switch(t){case"quiz":return strings.quizNullCTA
case"test":return strings.testNullCTA
case"subject-challenge":return strings.subjectChallengeNullCTA}}return""}
var getQuizOrTestState=function e(t,r,i,n){if(!r){return"null"}if((0,_masteryUtils.isCourseChallengeType)(t)){if(n){return(0,_masteryUtils.isCourseChallengeComplete)(n)?"complete":"tried"}else{return"null"}}else{var l=t==="quiz"?_masteryUtils.QUIZ_COMPLETE_LEVELS.includes(i):_masteryUtils.TEST_COMPLETE_LEVELS.includes(i)
return l?"complete":"tried"}}
var getPointsToCollect=function e(t){return(0,_masteryUtils.getMasteryLevelsForQuizOrTest)(t,{}).length*_masteryUtils.levelPointsMap[_masteryUtils.constants.MASTERED]}
var getBodyText=function e(t,r,i,n){var l=getPointsToCollect(t)
if(t.type==="quiz"){switch(r){case"null":return strings.getQuizNull(l)
case"tried":return strings.getQuizTried(l)
case"complete":var s=function e(){return(0,_scrollToSlug2.default)("practice-test","top",undefined,true)}
var a=React.createElement("a",{href:"#practice-test",onClick:s},strings.unitTest)
return strings.getQuizComplete(l,a)}}else if(t.type==="test"){switch(r){case"null":return strings.getTestNull(l)
case"tried":return i?getMasteryAchievedString(strings.testTriedMastered):strings.getTestTried(l)
case"complete":return strings.testComplete}}else if((0,_masteryUtils.isCourseChallenge)(t)){switch(r){case"null":return strings.subjectchallengeNullBody
case"tried":return n&&(0,_masteryUtils.getPercentCorrect)(n)>=constants.courseChallengeHighScoreThreshold?strings.subjectChallengeTriedHighScoreBody:strings.subjectChallengeTriedLowScoreBody
case"complete":return strings.subjectChallengeCompleteBody}}return""}
var getMasteryAchievedString=function e(t){return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,null,strings.masteryAchieved),React.createElement("br",null),React.createElement(_wonderBlocksCoreV.View,null,t))}
var getIllustration=function e(t,r,i){if(t==="quiz"){return r==="complete"?"quiz-complete":"quiz-not-finished"}else if(t==="test"){return r==="complete"||i?"unit-test-complete":"unit-test-not-finished"}else if((0,_masteryUtils.isCourseChallengeType)(t)){return r==="complete"&&i?"subject-challenge-complete":"subject-challenge-not-finished"}return"quiz-not-finished"}
var illustrationMap={"quiz-not-finished":"/images/mastery/QuizNotStarted.svg","quiz-complete":"/images/mastery/QuizComplete.svg","unit-test-not-finished":"/images/mastery/UnitTestNotStarted.svg","unit-test-complete":"/images/mastery/UnitTestComplete.svg","subject-challenge-not-finished":"/images/mastery/UnitTestNotStarted.svg","subject-challenge-complete":"/images/mastery/UnitTestComplete.svg"}
var getCalloutData=function e(t){var r=t.quiz,i=t.masteryMap,n=t.masteryPoints
var l=r.type,s=r.score
var a=s!=null
var o=(0,_masteryUtils.getMinimumMasteryLevelForQuizOrTest)(r,i)
var u=getQuizOrTestState(l,a,o,s)
var c=(0,_masteryUtils.achievedMastery)(n.pointsEarned,n.pointsAvailable)
var d=a?React.createElement(TitleWithDate,{title:r.title,score:s}):r.title
var g=getCallToAction(l,a,!!r.canResume)
var p=getBodyText(r,u,c,s)
var m=getIllustration(l,u,c)
return{title:d,body:p,callToAction:g,illustration:m}}
var getQuizNavigationConversions=function e(t,r,i){return(0,_getNavigationConversions2.default)({contentKind:t.kind,contentSlug:t.slug,referrerModule:"mastery_quiz",referrerElement:r,isUpNext:i})}
var MasteryInterspersedQuiz=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),a=0;a<l;a++){s[a]=arguments[a]}return n=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.openModal=function(e){var t=i.props,r=t.quiz,n=t.isUpNext
var l=(0,_modalUtils.getModalUrlForTestOrQuiz)(r)
_bigbingo2.default.markConversionsWithExtras(getQuizNavigationConversions(r,e,n))
i.props.history.push(l)},r),babelHelpers.possibleConstructorReturn(i,n)}t.prototype.render=function e(){var t=this
var r=this.props,i=r.quiz,n=r.isUpNext,l=r.isLoadingUserAttemptData
if(l){return React.createElement(_wonderBlocksCoreV.View,{style:[styles.container,styles.spinnerContainer]},React.createElement(_timeoutSpinner2.default,{sentryId:"mastery_interspersed_quiz",description:"Loading quiz/test/challenge attempt data",sentryTeam:"learning-platform"}))}var s=getCalloutData(this.props),a=s.title,o=s.body,u=s.callToAction,c=s.illustration
return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksCoreV.View,{style:[styles.column,styles.leftColumn]},React.createElement(_wonderBlocksCoreV.View,{style:styles.titleContainer},n&&React.createElement(_wonderBlocksTypographyV.LabelMedium,{style:styles.upNext},strings.upNext),React.createElement(_wonderBlocksTypographyV.HeadingSmall,null,React.createElement(_clientLink2.default,{to:(0,_modalUtils.getModalUrlForTestOrQuiz)(i),conversions:getQuizNavigationConversions(i,"title",n)},a))),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.body},o),React.createElement(_studyGuideCallToAction2.default,{onClick:function e(){return t.openModal("call_to_action")},type:n?"primary":"secondary",testId:i.type+"-open-modal-button"},u)),React.createElement(_wonderBlocksCoreV.View,{style:styles.divider},React.createElement(_spring2.default,null)),React.createElement(_wonderBlocksCoreV.View,{style:[styles.column,styles.rightColumn]},React.createElement("img",{width:constants.iconWidth,src:(0,_staticUrl2.default)(illustrationMap[c]),style:{marginLeft:-80},alt:"","aria-hidden":true})))}
return t}(_react.Component)
exports.default=(0,_reactRouterDom.withRouter)(MasteryInterspersedQuiz)
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"row",width:"100%"},column:{display:"flex",flexDirection:"column"},leftColumn:(_leftColumn={alignItems:"flex-start",minWidth:240,maxWidth:450},_leftColumn[_mediaQueries2.default.xsOrSmaller]={minWidth:"100%"},_leftColumn),divider:(_divider={flexBasis:32,flexShrink:0},_divider[_mediaQueries2.default.mdOrSmaller]={display:"none"},_divider),rightColumn:(_rightColumn={justifyContent:"flex-end",marginBottom:-32},_rightColumn[_mediaQueries2.default.mdOrSmaller]={display:"none"},_rightColumn),titleContainer:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",paddingBottom:12},titleWithDate:{display:"inline"},body:{paddingBottom:16},upNext:{color:_wonderBlocksColorV2.default.blue,paddingBottom:6},bgContainer:(_bgContainer={position:"absolute",top:-32},_bgContainer[_mediaQueries2.default.mdOrSmaller]={display:"none"},_bgContainer),spinnerContainer:{justifyContent:"center",width:"100%"}})

});
KAdefine("javascript/content-library-package/components/stateful-interspersed-quiz-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _reactRouterDom=require("react-router-dom")
var _interspersedQuizModal=require("./interspersed-quiz-modal.jsx")
var _interspersedQuizModal2=babelHelpers.interopRequireDefault(_interspersedQuizModal)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoActions=require("../../user-info-store-package/user-info-actions.js")
var _quizUtils=require("../utils/quiz-utils.js")
var ConnectedInterspersedQuizModal=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(function(e,r){var t=r.quiz
return{quiz:(0,_quizUtils.augmentWithUserInfoState)(t,e)}},function(e,r){var t=r.quiz,n=r.onQuizComplete
return{onRetry:function r(){e((0,_userInfoActions.retryQuiz)(t.slug))},onStartTask:function r(){if(t.type==="test"){e((0,_userInfoActions.startQuiz)(t.slug))}},onQuizComplete:function(e){function r(r,t){return e.apply(this,arguments)}r.toString=function(){return e.toString()}
return r}(function(r,o){e((0,_userInfoActions.reportQuizCompletion)(t.slug,r))
if(n){n(r)}}),onUpdateRecommendations:function r(t){e((0,_userInfoActions.updateRecommendations)(t))}}})(_interspersedQuizModal2.default))
var StatefulInterspersedQuizModal=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedInterspersedQuizModal,this.props))}
return r}(_react.Component)
exports.default=StatefulInterspersedQuizModal

});
KAdefine("javascript/content-library-package/components/user-link.jsx", function(require, module, exports) {
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var PropTypes=require("prop-types")
var React=require("react")
var UserLink=function e(r){var i=r.user,n=i.id,s=i.nickname,a=i.username
return React.createElement(_wonderBlocksLinkV2.default,{href:"/profile/"+n,skipClientNav:true},React.createElement("strong",null,s||a))}
UserLink.propTypes={user:PropTypes.shape({id:PropTypes.string.isRequired,nickname:PropTypes.string.isRequired,username:PropTypes.string.isRequired}).isRequired}
module.exports=UserLink

});
KAdefine("javascript/content-library-package/components/flexible-upsell.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _containerWrapper,_iconSize,_largeIconSize,_babelHelpers$extends,_babelHelpers$extends2,_button,_angle,_babelHelpers$extends3,_content,_oneUpsellRegular,_oneUpsellSmall,_multipleUpsells,_margin,_upsell,_firstMobile,_lastMobile
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var FlexibleUpsell=function(e){babelHelpers.inherits(l,e)
function l(){var r,a,t
babelHelpers.classCallCheck(this,l)
for(var i=arguments.length,s=Array(i),o=0;o<i;o++){s[o]=arguments[o]}return t=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.handleClick=function(e){var l=a.props,r=l.markConversion,t=l.onClick,i=l.url
var s=false
if(t){t(e)
s=e.defaultPrevented}if(i){e.preventDefault()}var o=r?r():Promise.resolve()
if(i&&!s){o.then(function(){window.location.href=i})}},r),babelHelpers.possibleConstructorReturn(a,t)}l.prototype.renderCommonLayout=function e(l){var r=this.props,a=r.title,t=r.subtitle,i=r.icon,s=r.domain
var o=(0,_globalStyles.domainColors)(s).domain3
return[React.createElement("span",{className:(0,_aphrodite.css)(styles.largeIconSize),key:"icon"},i),React.createElement("div",{className:(0,_aphrodite.css)(styles.content),key:"text"},React.createElement("div",{className:(0,_aphrodite.css)(styles.largeTitle),style:{color:o,textDecoration:l?"underline":"none"}},a),React.createElement("div",{className:(0,_aphrodite.css)(styles.largeSubtitle)},t))]}
l.prototype.render=function e(){var l=this
var r=this.props,a=r.url,t=r.actionText
var i=(0,_aphrodite.css)(styles.upsell,styles.oneUpsell,styles.firstMobile,styles.lastMobile)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.containerWrapper)},React.createElement("div",{className:(0,_aphrodite.css)(styles.oneUpsellRegular)},React.createElement("div",{className:i},this.renderCommonLayout(false),React.createElement(_strut2.default,{size:12}),React.createElement(_wonderBlocksButtonV2.default,{style:styles.button,onClick:a?undefined:this.handleClick,href:a||undefined,skipClientNav:true},t))),React.createElement("div",{className:(0,_aphrodite.css)(styles.oneUpsellSmall)},React.createElement(_hoverBehavior2.default,{onClick:this.handleClick},function(e,r){var t=e.hovered
return React.createElement("a",babelHelpers.extends({className:i,href:a},r),l.renderCommonLayout(t))})))}
return l}(_react.Component)
exports.default=FlexibleUpsell
var oneUpsellPaddingVertical=32
var iconDiameter=146-oneUpsellPaddingVertical*2
var styles=_aphrodite.StyleSheet.create({containerWrapper:(_containerWrapper={display:"flex",flexGrow:1},_containerWrapper[_mediaQueries2.default.mdOrSmaller]={flexDirection:"column"},_containerWrapper),chevron:{transform:"rotate(180deg)"},iconSize:(_iconSize={flexShrink:0,flexGrow:0,width:48,height:48},_iconSize[_mediaQueries2.default.mdOrSmaller]={width:32,height:32},_iconSize),largeIconSize:(_largeIconSize={flexShrink:0,flexGrow:0,width:iconDiameter,height:iconDiameter},_largeIconSize[_mediaQueries2.default.mdOrSmaller]={width:32,height:32},_largeIconSize),subtitle:babelHelpers.extends({},_globalStyles.typography.bodyXsmall,(_babelHelpers$extends={marginTop:6,overflow:"hidden",textOverflow:"ellipsis",lineClamp:3},_babelHelpers$extends[_mediaQueries2.default.mdOrSmaller]={display:"none"},_babelHelpers$extends)),largeSubtitle:babelHelpers.extends({},_globalStyles.typography.bodySmall,(_babelHelpers$extends2={marginTop:10},_babelHelpers$extends2[_mediaQueries2.default.mdOrSmaller]={display:"none"},_babelHelpers$extends2)),button:(_button={alignSelf:"center",height:40,marginLeft:24,minWidth:120},_button[_mediaQueries2.default.mdOrSmaller]={display:"none"},_button),angle:(_angle={marginLeft:6},_angle[_mediaQueries2.default.smOrSmaller]={display:"none"},_angle),title:babelHelpers.extends({},_globalStyles.typography.bodySmallBold,{whiteSpace:"nowrap",textOverflow:"ellipsis"}),largeTitle:babelHelpers.extends({},_globalStyles.typography.labelLarge,(_babelHelpers$extends3={whiteSpace:"nowrap",textOverflow:"ellipsis"},_babelHelpers$extends3[_mediaQueries2.default.mdOrSmaller]=babelHelpers.extends({},_globalStyles.typography.bodySmallBold,{marginTop:2}),_babelHelpers$extends3)),content:(_content={display:"flex",flexDirection:"column",width:"100%",marginLeft:20},_content[_mediaQueries2.default.mdOrSmaller]={marginLeft:12},_content),oneUpsell:{padding:oneUpsellPaddingVertical+"px 48px",display:"flex",alignItems:"center"},oneUpsellRegular:(_oneUpsellRegular={flexGrow:1},_oneUpsellRegular[_mediaQueries2.default.mdOrSmaller]={display:"none"},_oneUpsellRegular),oneUpsellSmall:(_oneUpsellSmall={flexGrow:1,display:"none"},_oneUpsellSmall[_mediaQueries2.default.mdOrSmaller]={display:"flex",flexDirection:"column"},_oneUpsellSmall),multipleUpsells:(_multipleUpsells={padding:"24px 20px",maxHeight:146},_multipleUpsells[_mediaQueries2.default.lgOrLarger]={minHeight:119,flex:"1 1 0"},_multipleUpsells),link:{textDecoration:"none",color:"inherit",":hover":{cursor:"pointer"}},margin:(_margin={},_margin[_mediaQueries2.default.lgOrLarger]={marginLeft:32},_margin.marginLeft=16,_margin[_mediaQueries2.default.mdOrSmaller]={marginLeft:0},_margin),upsell:(_upsell={display:"flex",flexDirection:"row",flexGrow:1,borderStyle:"solid",borderWidth:1,borderRadius:_globalStyles.borderRadius,borderColor:_globalStyles.colors.gray85,textDecoration:"none",backgroundColor:_globalStyles.colors.white},_upsell[_mediaQueries2.default.mdOrSmaller]={padding:"10px 20px",alignItems:"center",height:52,width:512,maxWidth:"100%",borderRadius:0,borderBottomWidth:0,alignSelf:"center"},_upsell),firstMobile:(_firstMobile={},_firstMobile[_mediaQueries2.default.mdOrSmaller]={borderTopLeftRadius:_globalStyles.borderRadius,borderTopRightRadius:_globalStyles.borderRadius},_firstMobile),lastMobile:(_lastMobile={},_lastMobile[_mediaQueries2.default.mdOrSmaller]={borderBottomLeftRadius:_globalStyles.borderRadius,borderBottomRightRadius:_globalStyles.borderRadius,borderBottomWidth:1},_lastMobile)})

});
KAdefine("javascript/content-library-package/components/continue-upsell.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _containerWrapper,_container,_content,_babelHelpers$extends,_babelHelpers$extends2,_button,_largeProgress,_smallProgress,_angleUp,_angleDown,_bullet
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _circularProgressBar=require("../../components/progress-package/circular-progress-bar.jsx")
var _circularProgressBar2=babelHelpers.interopRequireDefault(_circularProgressBar)
var _spring=require("../../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var i18n=require("../../shared-package/i18n.js")
var CircularImage=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.diameter,a=r.url
var s={width:t,height:t,borderRadius:t/2}
return React.createElement("img",{alt:"","aria-hidden":true,src:(0,_staticUrl2.default)(a),style:s})}
return r}(_react.Component)
var ContinueUpsell=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var l=arguments.length,n=Array(l),i=0;i<l;i++){n[i]=arguments[i]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.handleClick=function(e){var r=a.props,t=r.conversionExtra,s=r.upsell
e.preventDefault()
_bigbingo2.default.markConversion("subject_upsell_click",t).then(function(){window.location.href=s.url})},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.renderContinueLibraryProgress=function e(r){var t=this.props.domain
var a=r.numItemsComplete,s=r.numItemsTotal
return[React.createElement("span",{className:(0,_aphrodite.css)(styles.largeProgress),key:"lgLibrary"},React.createElement(_circularProgressBar2.default,{diameter:constants.progressSize,thickness:constants.progressStrokeThickness,fillColor:(0,_globalStyles.domainColors)(t).domain2,max:s||0,value:a||0},React.createElement(CircularImage,{diameter:constants.progressSize-constants.progressStrokeThickness,url:r.iconUrl}))),React.createElement("span",{className:(0,_aphrodite.css)(styles.smallProgress),key:"smLibrary"},React.createElement(_circularProgressBar2.default,{diameter:constants.progressSizeSm,style:{width:constants.progressSizeSm,height:constants.progressSizeSm},thickness:constants.progressStrokeThicknessSm,fillColor:(0,_globalStyles.domainColors)(t).domain2,max:s||0,value:a||0},React.createElement(CircularImage,{diameter:constants.progressSizeSm-constants.progressStrokeThicknessSm,url:r.iconUrl})))]}
r.prototype.render=function e(){var r=this.props.upsell
var t=i18n._("Continue %(nextTopicTitle)s",{nextTopicTitle:r.nextTopicTitle})
var a=i18n._("Up next: %(nextTutorialTitle)s",{nextTutorialTitle:r.nextTutorialTitle})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.containerWrapper)},React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},this.renderContinueLibraryProgress(r),React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},React.createElement(_wonderBlocksLinkV2.default,{href:r.url,skipClientNav:true,style:styles.title,kind:"secondary"},t),React.createElement("div",{className:(0,_aphrodite.css)(styles.subtitle)},a)),React.createElement(_spring2.default,null),React.createElement(_wonderBlocksButtonV2.default,{href:r.url,onClick:this.handleClick,style:styles.button,skipClientNav:true},i18n._("Continue"))))}
return r}(_react.Component)
exports.default=ContinueUpsell
var constants={buttonWidth:120,progressSize:96,progressSizeSm:64,progressStrokeThickness:10,progressStrokeThicknessSm:6.7,progressFontSize:23,progressFontSizeSm:18,paddingHorizontal:48,paddingVertical:24,paddingHorizontalSm:16,paddingVerticalSm:20,buttonGap:24,buttonRowGap:16}
var styles=_aphrodite.StyleSheet.create({containerWrapper:(_containerWrapper={display:"flex",flexGrow:1},_containerWrapper[_mediaQueries2.default.mdOrSmaller]={flexDirection:"column"},_containerWrapper),container:(_container={display:"flex",position:"relative",flexDirection:"row",flexGrow:1,minHeight:144,margin:"0 auto",backgroundColor:_globalStyles.colors.white,borderColor:_globalStyles.colors.gray85,borderStyle:"solid",borderWidth:1,padding:constants.paddingVertical+"px "+constants.paddingHorizontal+"px",boxSizing:"border-box",borderRadius:4,color:"inherit",textDecoration:"none"},_container[_mediaQueries2.default.smOrSmaller]={padding:constants.paddingVerticalSm+"px "+constants.paddingHorizontalSm+"px",minHeight:104},_container),content:(_content={display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:24},_content[_mediaQueries2.default.smOrSmaller]={marginLeft:16},_content),title:babelHelpers.extends({},_globalStyles.typography.labelLarge,(_babelHelpers$extends={textOverflow:"ellipsis"},_babelHelpers$extends[_mediaQueries2.default.smOrSmaller]=babelHelpers.extends({},_globalStyles.typography.bodySmallBold),_babelHelpers$extends)),subtitle:babelHelpers.extends({},_globalStyles.typography.labelMedium,(_babelHelpers$extends2={marginTop:10},_babelHelpers$extends2[_mediaQueries2.default.mdOrSmaller]={marginTop:8},_babelHelpers$extends2[_mediaQueries2.default.smOrSmaller]={display:"none"},_babelHelpers$extends2)),button:(_button={minWidth:constants.buttonWidth,marginLeft:24,alignSelf:"center"},_button[_mediaQueries2.default.smOrSmaller]={display:"none"},_button),largeProgress:(_largeProgress={display:"inline-block"},_largeProgress[_mediaQueries2.default.smOrSmaller]={display:"none"},_largeProgress),smallProgress:(_smallProgress={display:"none"},_smallProgress[_mediaQueries2.default.smOrSmaller]={display:"inline-block"},_smallProgress),angleUp:(_angleUp={display:"none"},_angleUp[_mediaQueries2.default.smOrSmaller]={display:"inline-block",transform:"rotateZ(0deg)",marginLeft:8},_angleUp),angleDown:(_angleDown={},_angleDown[_mediaQueries2.default.smOrSmaller]={transform:"rotateZ(180deg)"},_angleDown),bullet:(_bullet={marginLeft:8,marginRight:8,color:_globalStyles.colors.gray68},_bullet[_mediaQueries2.default.smOrSmaller]={display:"none"},_bullet)})

});
KAdefine("javascript/content-library-package/components/tags.jsx", function(require, module, exports) {
var _tags
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../../shared-package/i18n.js")
var sharedStyles=require("../styles/shared.js")
var Tags=function(e){babelHelpers.inherits(r,e)
function r(){var a,s,t
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,i=Array(o),l=0;l<o;l++){i[l]=arguments[l]}return t=(a=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),s),s.renderTag=function(e){var r=s.props.domain
return React.createElement("a",{key:e.slug,className:css(tagStyles[r]),href:"/tag/"+e.slug},e.displayName)},a),babelHelpers.possibleConstructorReturn(s,t)}r.prototype.render=function e(){var r=this
var a=this.props,s=a.hideDivider,t=a.noWrapper,o=a.tags,i=a.title
return React.createElement("div",{className:css(!t&&styles.tags)},React.createElement("div",{className:css(styles.title,!s&&styles.divider)},i||i18n._("Tags")),React.createElement("div",null,o.map(function(e){return r.renderTag(e)})))}
return r}(React.Component)
Tags.propTypes={domain:PropTypes.string.isRequired,tags:PropTypes.arrayOf(PropTypes.shape({displayName:PropTypes.string.isRequired,slug:PropTypes.string.isRequired})),noWrapper:PropTypes.bool,hideDivider:PropTypes.bool,title:PropTypes.string}
var styles=StyleSheet.create({tags:(_tags={maxWidth:688,margin:"auto",marginBottom:32},_tags[sharedStyles.queries.small]={paddingLeft:16,paddingRight:16},_tags),title:babelHelpers.extends({},sharedStyles.typography.labelLarge,{paddingBottom:8,marginBottom:16}),divider:{borderBottom:"1px solid "+sharedStyles.colors.gray85}})
var tagStyles=sharedStyles.makeDomainStylesForTemplate(function(e){return babelHelpers.extends({},sharedStyles.typography.labelMedium,{border:"1px solid "+sharedStyles.domainColors(e).domain3,borderRadius:2,color:sharedStyles.domainColors(e).domain3,display:"inline-block",paddingLeft:10,paddingRight:10,paddingTop:4,paddingBottom:4,marginLeft:5,marginRight:5,marginBottom:5,textDecoration:"none",whiteSpace:"nowrap",":hover":{backgroundColor:sharedStyles.domainColors(e).domain3,color:sharedStyles.colors.white}})})
module.exports=Tags

});
KAdefine("javascript/content-library-package/components/author-header.jsx", function(require, module, exports) {
var _babelHelpers$extends,_top,_hiddenAtPhoneWidth,_babelHelpers$extends2,_bioText,_babelHelpers$extends3,_spacer
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var globalStyles=require("../../shared-styles-package/global-styles.js")
var i18n=require("../../shared-package/i18n.js")
var Icon=require("../../shared-styles-package/icon.jsx")
var mediaQueries=require("../../shared-styles-package/media-queries.js")
var facebookIconPath={path:"M73.758 37.165l0-7.068q0-3.192.969-4.446 1.026-1.254 4.674-1.311l7.182 0l0-14.25l-11.4 0q-9.918 0-14.193 4.674t-4.332 13.908l0 8.493l-8.493 0l0 14.307l8.493 0l0 41.325l17.1 0l0-41.325l11.4 0l1.482-14.307l-12.882 0zm26.277-18.411l0 62.529q-.057 7.752-5.529 13.281t-13.224 5.472l-62.529 0q-7.809 0-13.281-5.472t-5.472-13.281l0-62.529q0-7.752 5.529-13.281t13.224-5.472l62.529 0q7.752 0 13.281 5.472 5.472 5.529 5.472 13.281z",width:99.999,height:100}
var twitterIconPath={path:"M63.042 25.024q-5.814 0-9.804 3.99t-4.047 9.69q0 1.881.342 3.135-8.379-.513-15.789-4.275t-12.483-10.089q-1.881 3.249-1.938 6.897 0 7.41 5.928 11.4-3.078-.057-6.498-1.653l0 .114q0 4.959 3.249 8.721t8.037 4.674q-1.881.513-3.021.513t-2.85-.228q1.368 4.104 4.845 6.783t7.923 2.736q-7.581 5.871-16.986 5.871-1.71 0-3.249-.228 9.633 6.099 20.976 6.156 7.296 0 13.68-2.337 11.742-4.332 18.525-14.706 6.726-10.374 6.726-21.945 0-1.197-.057-1.767 4.104-2.907 6.84-7.068-3.648 1.653-7.866 2.223 4.446-2.622 6.042-7.638-4.218 2.451-8.721 3.306-3.99-4.275-9.804-4.275zm36.993-6.27l0 62.529q-.057 7.752-5.529 13.281t-13.224 5.472l-62.529 0q-7.809 0-13.281-5.472t-5.472-13.281l0-62.529q0-7.752 5.529-13.281t13.224-5.472l62.529 0q7.752 0 13.281 5.472 5.472 5.529 5.472 13.281z",width:99.999,height:100}
var AuthorHeader=function e(a){return React.createElement("header",null,React.createElement("div",{className:css(styles.moduleWidth,styles.top),style:{backgroundImage:"url("+a.backgroundImageUrl+")"}},React.createElement(_deferredImage2.default,{alt:"",className:css(styles.authorImage),src:(0,_staticUrl2.default)(a.authorImageUrl)}),React.createElement("div",{className:css(styles.hiddenAtPhoneWidth)},React.createElement("h1",{className:css(styles.name)},a.name),React.createElement("span",{className:css(styles.username)},a.username),React.createElement("div",{className:css(styles.social)},a.twitter&&React.createElement("a",{"aria-label":i18n._("Twitter"),href:a.twitter,className:css(styles.link,styles.icon)},React.createElement(Icon,{icon:twitterIconPath,size:16})),a.facebook&&React.createElement("a",{"aria-label":i18n._("Facebook"),href:a.facebook,className:css(styles.link,styles.icon)},React.createElement(Icon,{icon:facebookIconPath,size:16})),a.homepage&&React.createElement("a",{href:a.homepage,className:css(styles.link,styles.homepage)},a.homepageDisplay)))),React.createElement("div",{className:css(styles.moduleWidth,styles.bio)},React.createElement("div",{className:css(styles.authorImage,styles.spacer,styles.hiddenAtPhoneWidth)}),React.createElement("div",{className:css(styles.bioText)},a.bio)))}
var authorImageDesktopSize=312
var authorImageTabletSize=280
var authorImageMobileSize=200
var authorImageDesktopPadding=120
var authorImageMobilePadding=16
var authorImageMobileOffsetTop=106
var headerDesktopHorizontalPadding=49
var backgroundImageHeight=246
var backgroundImagePadding=132
var bioTextMinHeight=140
var bioTextPhoneMarginTop=16
var circle=function e(a){return{width:a,height:a,flex:"0 0 "+a+"px",borderRadius:"50%"}}
var styles=StyleSheet.create({moduleWidth:babelHelpers.extends({},globalStyles.moduleLayout.defaultSpacing,(_babelHelpers$extends={display:"flex"},_babelHelpers$extends[mediaQueries.lgOrLarger]={paddingLeft:headerDesktopHorizontalPadding,paddingRight:headerDesktopHorizontalPadding},_babelHelpers$extends)),top:(_top={backgroundSize:"cover",boxSizing:"border-box",height:backgroundImageHeight,paddingBottom:0,paddingTop:backgroundImagePadding},_top[mediaQueries.sm]={paddingTop:backgroundImagePadding},_top),hiddenAtPhoneWidth:(_hiddenAtPhoneWidth={},_hiddenAtPhoneWidth[mediaQueries.xs]={display:"none"},_hiddenAtPhoneWidth),name:babelHelpers.extends({},globalStyles.typography.conceptHeadingDesktop,{color:globalStyles.colors.white,display:"inline"}),username:babelHelpers.extends({},globalStyles.typography.bodySmallBold,{color:globalStyles.colors.white,marginLeft:14}),bio:babelHelpers.extends({},globalStyles.typography.bodySmall,(_babelHelpers$extends2={background:globalStyles.colors.gray98},_babelHelpers$extends2[mediaQueries.xs]={paddingTop:authorImageMobileOffsetTop},_babelHelpers$extends2)),bioText:(_bioText={minHeight:bioTextMinHeight},_bioText[mediaQueries.xs]={marginTop:bioTextPhoneMarginTop},_bioText),authorImage:babelHelpers.extends({},circle(authorImageDesktopSize),(_babelHelpers$extends3={marginRight:authorImageDesktopPadding},_babelHelpers$extends3[mediaQueries.md]=circle(authorImageTabletSize),_babelHelpers$extends3[mediaQueries.smOrSmaller]=babelHelpers.extends({},circle(authorImageMobileSize),{marginRight:authorImageMobilePadding}),_babelHelpers$extends3[mediaQueries.xs]={margin:authorImageMobileOffsetTop+"px auto 0"},_babelHelpers$extends3)),spacer:(_spacer={},_spacer[mediaQueries.smOrLarger]={height:"auto"},_spacer),social:{marginTop:10},link:{color:globalStyles.colors.white,":hover":{opacity:.6}},icon:{marginRight:10},homepage:babelHelpers.extends({},globalStyles.typography.labelLarge,{color:globalStyles.colors.white,marginLeft:3,textDecoration:"none"})})
module.exports=AuthorHeader

});
KAdefine("javascript/content-library-package/components/breadcrumbs-header.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _breadcrumbs=require("../../components/breadcrumbs-package/breadcrumbs.jsx")
var _breadcrumbs2=babelHelpers.interopRequireDefault(_breadcrumbs)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _standards=require("../../standards-package/standards.jsx")
var _standards2=babelHelpers.interopRequireDefault(_standards)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var BreadcrumbsHeader=function e(r){var a=r.breadcrumbs,s=r.title,t=r.standards
var d=t&&t.length>0
return React.createElement("div",{className:(0,_aphrodite.css)(styles.wonderBlocksHeader)},React.createElement("div",{className:(0,_aphrodite.css)(styles.headerContainer)},React.createElement(_breadcrumbs2.default,{path:a,separator:"·",backArrow:true,isNavigation:true,light:true}),React.createElement("h1",{className:(0,_aphrodite.css)(styles.wonderBlocksTitle)},s)),d&&React.createElement("div",{className:(0,_aphrodite.css)(styles.stdsModule)},React.createElement(_standards2.default,{standards:t,small:true,showSetPrefix:true,linkColor:_wonderBlocksColorV2.default.white})))}
var styles=_aphrodite.StyleSheet.create({headerContainer:{flexGrow:1},wonderBlocksHeader:babelHelpers.extends({},_shared2.default.alignCenter,_shared2.default.typography.wonderBlocksHeader,{display:"flex"}),wonderBlocksTitle:babelHelpers.extends({},_shared2.default.typography.wonderBlocksTitle),wonderBlocksDesktopBreadcrumbsBackArrow:{left:0,position:"relative"},stdsModule:{alignSelf:"flex-end",paddingBottom:4}})
module.exports=BreadcrumbsHeader

});
KAdefine("javascript/content-library-package/components/simple-header.jsx", function(require, module, exports) {
var _babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var SimpleHeader=function e(a){var r=a.title
return React.createElement("div",{className:(0,_aphrodite.css)(styles.header)},React.createElement("h1",{className:(0,_aphrodite.css)(styles.title,styles.titleLarge)},r))}
var styles=_aphrodite.StyleSheet.create({header:babelHelpers.extends({},_shared2.default.pageHeader),title:babelHelpers.extends({},_shared2.default.pageHeaderTitle),titleLarge:babelHelpers.extends({},_shared2.default.typography.subjectHeadingDesktop,(_babelHelpers$extends={},_babelHelpers$extends[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.subjectHeadingMobile),_babelHelpers$extends))})
module.exports=SimpleHeader

});
KAdefine("javascript/content-library-package/components/react-motion-carousel.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactMotion=require("react-motion")
var ReactMotionCarousel=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this))
n.state={currentItems:r.items,removing:{}}
return n}t.prototype.componentDidMount=function e(){this._isMounted=true}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var r=this
var n=t.items.length!==this.props.items.length||t.items.some(function(e,t){return e!==r.props.items[t]})
if(n){this.animateTo(t.items)}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.animateTo=function e(t){var r=this.props.keyAttribute
var n=this.state.currentItems
var i={}
n.filter(function(e){return!t.includes(e)}).forEach(function(e){i[e[r]]=true})
var s=t.filter(function(e){return!n.includes(e)})
this.setState({currentItems:n.concat(s),removing:i})}
t.prototype.finishedRemoving=function e(t){var r=this
this.setState(function(e){var n=r.props.keyAttribute
var i=babelHelpers.extends({},e.removing)
delete i[t]
return{removing:i,currentItems:e.currentItems.filter(function(e){return e[n]!==t})}},function(){r.props.onFinishedRemoving&&r.props.onFinishedRemoving()})}
t.prototype.render=function e(){var t=this
var r=this.props,n=r.cardSize,i=r.renderItem,s=r.keyAttribute,o=r.itemContainerClassName,a=r.cardAnimationParameters,c=r.className
var l=this.state,u=l.removing,p=l.currentItems
return React.createElement("div",{className:c},p.map(function(e,r){var c=e[s]
if(u[c]){return React.createElement(_reactMotion.Motion,{key:c,defaultStyle:{flexBasis:n,MsFlexBasis:n,MozFlexBasis:n,WebkitFlexBasis:n},style:{flexBasis:(0,_reactMotion.spring)(0,a),MsFlexBasis:(0,_reactMotion.spring)(0,a),MozFlexBasis:(0,_reactMotion.spring)(0,a),WebkitFlexBasis:(0,_reactMotion.spring)(0,a)},onRest:function e(){if(t._isMounted){t.finishedRemoving(c)}}},function(e){return React.createElement("div",{style:babelHelpers.extends({flexGrow:0,flexShrink:0},e)})})}return React.createElement("div",{className:o?o(e,r,p):"",key:c},i(e,r,r===p.length-1))}))}
return t}(_react.Component)
exports.default=ReactMotionCarousel

});
KAdefine("javascript/content-library-package/components/modal-navigator.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.ConnectedModalNavigator=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactRedux=require("react-redux")
var _reactRouterDom=require("react-router-dom")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _kaProvider=require("../../components/ssr-package/ka-provider.jsx")
var _kaProvider2=babelHelpers.interopRequireDefault(_kaProvider)
var _articleModal=require("../../components/modal-package/article-modal.jsx")
var _articleModal2=babelHelpers.interopRequireDefault(_articleModal)
var _lazyLoadComponent=require("../../components/lazy-load-package/lazy-load-component.jsx")
var _lazyLoadComponent2=babelHelpers.interopRequireDefault(_lazyLoadComponent)
var _exerciseModal=require("../../components/modal-package/exercise-modal.jsx")
var _exerciseModal2=babelHelpers.interopRequireDefault(_exerciseModal)
var _videoModal=require("../../components/modal-package/video-modal.jsx")
var _videoModal2=babelHelpers.interopRequireDefault(_videoModal)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _modalNavigatorStore=require("../redux/modal-navigator-store.js")
var _modalNavigatorStore2=babelHelpers.interopRequireDefault(_modalNavigatorStore)
var _modalNavigatorReducer=require("../redux/modal-navigator-reducer.js")
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoConstants=require("../../user-info-store-package/user-info-constants.js")
var _statefulInterspersedQuizModal=require("./stateful-interspersed-quiz-modal.jsx")
var _statefulInterspersedQuizModal2=babelHelpers.interopRequireDefault(_statefulInterspersedQuizModal)
var _endOfExerciseCard=require("../../mastery-package/end-of-exercise-card.jsx")
var _endOfExerciseCard2=babelHelpers.interopRequireDefault(_endOfExerciseCard)
var _endOfExerciseFooter=require("../../mastery-package/end-of-exercise-footer.jsx")
var _endOfExerciseFooter2=babelHelpers.interopRequireDefault(_endOfExerciseFooter)
var _startOfExerciseCard=require("../../mastery-package/start-of-exercise-card.jsx")
var _startOfExerciseCard2=babelHelpers.interopRequireDefault(_startOfExerciseCard)
var _startOfExerciseFooter=require("../../mastery-package/start-of-exercise-footer.jsx")
var _startOfExerciseFooter2=babelHelpers.interopRequireDefault(_startOfExerciseFooter)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _startOfExerciseCardsSeen=require("../../mastery-package/start-of-exercise-cards-seen.js")
var _satEndOfTaskCard=require("../../exercise-task-card-package/sat-end-of-task-card.jsx")
var _satEndOfTaskCard2=babelHelpers.interopRequireDefault(_satEndOfTaskCard)
var getCurrentItem=function e(t){var r=t[t.length-1]
return r&&r.currentItem||null}
var ModalNavigator=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,i=Array(n),s=0;s<n;s++){i[s]=arguments[s]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={newLevel:"unfamiliar",pointsEarned:0,correctCount:0,oldLevel:undefined},a.handleNext=function(){a.markConversion("content_modal_next")
a.props.dispatch({type:"NextItem"})},a.handlePrev=function(){a.markConversion("content_modal_prev")
a.props.dispatch({type:"PrevItem"})},a.closeItem=function(){var e=a.props,t=e.history,r=e.modalDataStack
var o=r.length===1
if(!t){_modalNavigatorStore2.default.dispatch({type:"CloseItem"})
if(o){a.returnFocus()}return}var n=t.location.pathname
if(n.match(/\/modal\//i)){var i=n.replace(/\/modal\/.+/gi,"")
t.push(i)}else{_modalNavigatorStore2.default.dispatch({type:"CloseItem"})}if(o){a.returnFocus()}},a.handleShowQuizRelatedVideo=function(e,t){var r=t.slug,a=t.contentId
var o=e.userExercises
var n=null
var i=null
for(var s=o,l=Array.isArray(s),d=0,s=l?s:s[Symbol.iterator]();;){var u
if(l){if(d>=s.length)break
u=s[d++]}else{d=s.next()
if(d.done)break
u=d.value}var c=u
for(var f=c.exerciseModel.relatedVideos,p=Array.isArray(f),v=0,f=p?f:f[Symbol.iterator]();;){var m
if(p){if(v>=f.length)break
m=f[v++]}else{v=f.next()
if(v.done)break
m=v.value}var g=m
if(g.nodeSlug==="v/"+r){n=g
i=c.exerciseModel.relatedVideos
break}}}if(!n){return}_modalNavigatorStore2.default.dispatch({type:"OpenItem",modalData:{items:i,referrer:"related_videos",currentItem:n}})},a.handleShowRelatedVideo=function(e){var t=e.slug,r=e.contentId
var o=getCurrentItem(a.props.modalDataStack)
if(o&&o.kind==="Exercise"){var n=o.relatedVideos
var i=n.find(function(e){return e.slug===t})
if(i){var s="related_videos"
_modalNavigatorStore2.default.dispatch({type:"OpenItem",modalData:{items:o.relatedVideos,referrer:s,currentItem:i}})
a.markConversions([{id:"content_modal_open",extra:(0,_modalNavigatorStore.getModalItemExtra)(i,s)},{id:"pageview_video",extra:{content_id:i.contentId,product:"library",slug:i.slug}}])}}},a.handleUpdateProgress=function(e){return function(t){if(e.kind==="InterspersedQuiz"){return}_userInfoStore2.default.dispatch({type:_userInfoConstants.UPDATE_STATUS,progressKey:e.progressKey,status:t})}},a.handleStartExercise=function(){},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.markConversion=function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
_bigbingo2.default.markConversion(t,babelHelpers.extends({},this.props.bigBingoExtras,r))}
t.prototype.markConversions=function e(t){var r=this
_bigbingo2.default.markConversionsWithExtras(t.map(function(e){var t=e.id,a=e.extra
return{id:t,extra:babelHelpers.extends({},r.props.bigBingoExtras,a?a:{})}}))}
t.prototype.returnFocus=function e(){var t=this.props.focusId
var r=document.getElementById(t||"")
if(r){r.focus()}}
t.prototype.triggerConfetti=function e(){if(this.confetti){var t=40
this.confetti.startConfetti(window.innerWidth/2,-t)}}
t.prototype.renderModals=function e(){var t=this
var r=this.props.modalDataStack
var a=r.length
var o=r.map(function(e,r){var o=r===0
var n=function e(){return a===1}
var i=r===a-1
var s=e.allowNavigation,l=e.currentItem,d=e.fromAnotherModal,u=e.referrer
var c=t.props.nextItem
var f={key:l.slug,onClose:t.closeItem,title:l.title,navigator:s?{onNext:t.handleNext,onPrev:t.handlePrev,hasNext:t.props.hasNextItem,hasPrev:t.props.hasPrevItem}:undefined,nextItem:c,visible:i,shouldAnimate:o,shouldBackdropDismiss:n,fromAnotherModal:d,referrer:u,linkToContent:u==="sat-related-content-widget"?false:true}
var p=t.handleUpdateProgress(l)
if(l.kind==="InterspersedQuiz"){var v=l.topic.masteryEnabled
return React.createElement(_statefulInterspersedQuizModal2.default,babelHelpers.extends({},f,{key:r,extra:f,quiz:l,onShowRelatedVideo:t.handleShowQuizRelatedVideo,onNextTask:u==="student-assignments-table"?t.handleNext:function(){},onQuizComplete:function e(r){var a=r.filter(function(e){return e.correct}).length
var o=r.length
var n=a/o
var i=v?n>.7:o===a
if(i){setTimeout(function(){t.triggerConfetti()},1e3)}}}))}else if(l.kind==="Exercise"){var m=l.expectedDoNCount
var g=_userInfoStore2.default.getState(),x=g.currentTopic,b=g.masteryMap
var h=b["e"+l.contentId]
var E=function e(r,a,o,n,i){var s=o.progressKey
var d=l.kind==="Exercise"&&l.masteryEnabled
var u=(0,_masteryUtils.getNumCorrect)(r)
var c=r.length
var f=u/c
var p=i||(0,_masteryUtils.getNewLevel)(u,c,f)
if(d){t.setState({newLevel:p,oldLevel:h,pointsEarned:n,correctCount:u})
if(u===c){t.triggerConfetti()}}if(s){_userInfoStore2.default.dispatch({type:_userInfoConstants.UPDATE_BEST_SCORE,progressKey:s,bestScore:{numCorrect:u,numAttempted:c,completedDate:(new Date).toISOString()}})}}
var y=l.masteryEnabled&&!(0,_startOfExerciseCardsSeen.hasSeenStartOfExerciseCard)({unitId:x,level:h})?{Body:React.createElement(_startOfExerciseCard2.default,{level:h,unitId:x,questionCount:m}),Footer:function e(r){return React.createElement(_startOfExerciseFooter2.default,{level:h,questionCount:m,onStartExercise:function e(){(0,_startOfExerciseCardsSeen.markStartOfExerciseCardSeen)({unitId:x,level:h})
r()},onNextItem:t.handleNext,nextItem:c})}}:undefined
var C=l.masteryEnabled?{Body:React.createElement(_endOfExerciseCard2.default,{to:t.state.newLevel,from:t.state.oldLevel||h,questionCount:m}),Footer:React.createElement(_endOfExerciseFooter2.default,{level:t.state.newLevel,pointsEarned:t.state.pointsEarned,questionCount:m,onNextItem:t.handleNext,nextItem:c,onClose:t.closeItem,onTryAgain:function e(){if(t.exerciseModal){t.exerciseModal.practiceAgain()}}})}:undefined
var k=u==="sat-related-content-widget"?function(e){return React.createElement(_satEndOfTaskCard2.default,e)}:undefined
return React.createElement(_exerciseModal2.default,babelHelpers.extends({},f,{exercise:l,onCheckAnswer:function e(t){return p(t)},onNextTask:t.handleNext,type:"Exercise",tutorial:{id:l.contentId,slug:l.topicSlug},masteryEnabled:l.masteryEnabled,inPractice:false,showEditorShortcuts:t.props.showEditorShortcuts,onShowRelatedVideo:t.handleShowRelatedVideo,onTaskComplete:E,StartOfTaskCard:y,SimpleEndOfTaskCard:C,EndOfTaskCard:k,ref:function e(r){return t.exerciseModal=r}}))}else if(l.kind==="Video"){var I=e.shouldAutoplay
var S={id:l.contentId,kind:l.kind,kaUrl:l.nodeUrl,slug:l.slug,translatedTitle:l.title,translatedYoutubeId:l.translatedYoutubeId,youtubeId:l.youtubeId}
return React.createElement(_videoModal2.default,babelHelpers.extends({},f,{video:S,attribution:l.attribution,topicSlug:l.topicSlug,shouldAutoplay:I,onVideoComplete:function e(){return p("complete")},onVideoPlay:function e(){return p("started")},useBackIcon:r>0,footer:u==="sat-related-content-widget"?null:undefined}))}else if(l.kind==="Article"){return React.createElement(_articleModal2.default,babelHelpers.extends({},f,{article:l,onArticleComplete:function e(){return p("complete")},topicSlug:l.topicSlug,hideFooter:u==="sat-related-content-widget"}))}else{throw new Error("unrecognized content kind "+l.kind)}})
return React.createElement("span",null,o)}
t.prototype.renderConfetti=function e(){var t=this
return React.createElement(_kaProvider2.default,null,function(e){if(e.prefersReducedMotion()){return null}var r=window.innerWidth*window.innerHeight
var a=r/2500
return React.createElement("div",{ref:function e(r){return t.confettiContainer=r},className:(0,_aphrodite.css)(styles.confettiContainer)},React.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../../components/confetti-package/fullscreen-confetti.jsx")]},loadingIndicator:function e(){return React.createElement("span",null)}},function(e){return React.createElement(e,{ref:function e(r){return t.confetti=r},numParticles:a})}))})}
t.prototype.render=function e(){return React.createElement("span",null,this.renderModals(),this.renderConfetti())}
return t}(_react.Component)
ModalNavigator.defaultProps={bigBingoExtras:{},inPractice:false,showEditorShortcuts:false}
var mapStateToProps=function e(t,r){var a=(0,_modalNavigatorReducer.getNextItem)(t)
var o=(0,_modalNavigatorReducer.getPrevItem)(t)
return babelHelpers.extends({},t,{hasNextItem:function e(){return!!a},hasPrevItem:function e(){return!!o},nextItem:a})}
var styles=_aphrodite.StyleSheet.create({confettiContainer:{position:"fixed",top:0,left:0,zIndex:_globalStyles2.default.constants.zindexAboveModal,pointerEvents:"none"}})
var ConnectedModalNavigator=exports.ConnectedModalNavigator=(0,_reactRedux.connect)(mapStateToProps)(ModalNavigator)
exports.default=(0,_reactRouterDom.withRouter)(ConnectedModalNavigator)

});
KAdefine("javascript/content-library-package/components/interspersed-quiz-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _endOfQuizCta=require("../../mastery-package/end-of-quiz-cta.jsx")
var _endOfQuizCta2=babelHelpers.interopRequireDefault(_endOfQuizCta)
var _endOfQuizFooter=require("../../mastery-package/end-of-quiz-footer.jsx")
var _endOfQuizFooter2=babelHelpers.interopRequireDefault(_endOfQuizFooter)
var _endOfQuizSummary=require("../../mastery-package/end-of-quiz-summary.jsx")
var _endOfQuizSummary2=babelHelpers.interopRequireDefault(_endOfQuizSummary)
var _exerciseModal=require("../../components/modal-package/exercise-modal.jsx")
var _exerciseModal2=babelHelpers.interopRequireDefault(_exerciseModal)
var _topicTaskLoaders=require("./topic-task-loaders.jsx")
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _startOfQuizCta=require("../../mastery-package/start-of-quiz-cta.jsx")
var _startOfQuizCta2=babelHelpers.interopRequireDefault(_startOfQuizCta)
var _startOfQuizFooter=require("../../mastery-package/start-of-quiz-footer.jsx")
var _startOfQuizFooter2=babelHelpers.interopRequireDefault(_startOfQuizFooter)
var _startOfQuizSummary=require("../../mastery-package/start-of-quiz-summary.jsx")
var _startOfQuizSummary2=babelHelpers.interopRequireDefault(_startOfQuizSummary)
var _startOfTaskCard=require("../../mastery-package/start-of-task-card.jsx")
var _startOfTaskCard2=babelHelpers.interopRequireDefault(_startOfTaskCard)
var _topicAssessmentEndOfTaskCard=require("./topic-assessment-end-of-task-card.jsx")
var _topicAssessmentEndOfTaskCard2=babelHelpers.interopRequireDefault(_topicAssessmentEndOfTaskCard)
var _topicAssessmentStartOfTaskCard=require("./topic-assessment-start-of-task-card.jsx")
var _topicAssessmentStartOfTaskCard2=babelHelpers.interopRequireDefault(_topicAssessmentStartOfTaskCard)
var _topicAssessmentStartOfTaskCardFooter=require("./topic-assessment-start-of-task-card-footer.jsx")
var _topicAssessmentStartOfTaskCardFooter2=babelHelpers.interopRequireDefault(_topicAssessmentStartOfTaskCardFooter)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var i18n=require("../../shared-package/i18n.js")
var strings={retakeQuiz:i18n._("Retake quiz"),retakeTest:i18n._("Retake test"),retakeSubjectChallenge:i18n._("Retake course challenge")}
var InterspersedQuizModal=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,i=Array(n),o=0;o<n;o++){i[o]=arguments[o]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={retries:0,oldMasteryMap:{},previousEnergyPoints:0,previousAttemptHistory:[]},a.getLoadedStartOfTaskCard=function(){var e=a.props,t=e.quiz,r=e.quiz,s=r.numItems,n=r.timeEstimate,i=r.topic.title,o=r.type
var u=function e(){return function(e){return React.createElement(_topicAssessmentStartOfTaskCardFooter2.default,{type:o,onClick:a.getAdvanceHandler(e),numItems:s,timeEstimate:n})}}
var l=function e(){var r=function e(){return a.isMasteryEnabled()&&o==="subject-challenge"}
return r()?React.createElement(_startOfTaskCard2.default,{topicTitle:i,timeEstimate:n}):React.createElement(_topicAssessmentStartOfTaskCard2.default,t)}
return{Body:l(),Footer:u()}},a.getLoadingSpinner=function(){return{Body:React.createElement(_wonderBlocksCoreV.View,{style:styles.loadingContainer},React.createElement(_timeoutSpinner2.default,{sentryId:"interspersed_quiz_load",description:"Loading taskData for interspered quiz",sentryTeam:"learning-platform"})),Footer:function e(t){return React.createElement("div",null)}}},a.getStartOfTaskCard=function(e){var t=a.props.quiz
if(!t.canResume){return e?a.getLoadedStartOfTaskCard():a.getLoadingSpinner()}},a.getStartOfQuizCard=function(){var e=a.props.quiz
var t=_userInfoStore2.default.getState(),r=t.masteryMap
var s=a.isMasteryEnabled()&&["quiz","test"].includes(e.type)&&!e.canResume
if(s){return{Cta:React.createElement(_startOfQuizCta2.default,babelHelpers.extends({},e,{masteryMap:r})),Summary:React.createElement(_startOfQuizSummary2.default,babelHelpers.extends({},e,{masteryMap:r})),Footer:function t(s){return React.createElement(_startOfQuizFooter2.default,babelHelpers.extends({},e,{masteryMap:r,onStartQuiz:a.getAdvanceHandler(s),onStartUnitTest:e.type==="quiz"?a.handleStartUnitTest:a.getAdvanceHandler(s),onGoToSubject:a.handleGoToSubject}))}}}},a.getEndOfQuizCard=function(e){var t=a.props.quiz
var r=_userInfoStore2.default.getState(),s=r.bestScoreMap,n=r.masteryMap,i=r.statusMap
var o=a.state,u=o.previousAttemptHistory,l=o.previousEnergyPoints
if(a.isMasteryEnabled()){return{Cta:React.createElement(_endOfQuizCta2.default,babelHelpers.extends({},t,{oldMasteryMap:a.state.oldMasteryMap,newMasteryMap:n,statusMap:i,bestScoreMap:s,curationTitle:t.topic.title})),Summary:React.createElement(_endOfQuizSummary2.default,babelHelpers.extends({},t,{oldMasteryMap:a.state.oldMasteryMap,newMasteryMap:n,recommendedTutorials:a.getTutorialsWithRecommendations(),onNavigate:a.onNavigate,attemptHistory:u,energyPointsEarned:l,exercises:e})),Footer:React.createElement(_endOfQuizFooter2.default,babelHelpers.extends({},t,{newMasteryMap:n,onClose:a.props.onClose,onRetake:function e(){if(a.exerciseModal){a.exerciseModal.practiceAgain()}},onStartUnitTest:a.handleStartUnitTest}))}}},a.getPracticeAgainMessage=function(){var e=a.props.quiz.type
switch(e){case"quiz":return strings.retakeQuiz
case"test":return strings.retakeTest
case"subject-challenge":return strings.retakeSubjectChallenge
default:throw new Error("Invalid quiz type: "+e)}},a.getTutorialsWithRecommendations=function(){var e=a.props.quiz.tutorials
return e.filter(function(e){var t=e.contentItems
return t.some(function(e){var t=e.recommended
return t})}).map(function(e){var t=e.slug,r=e.title
return{slug:t,title:r}})},a.incrementRetriesAndReloadTask=function(){a.setState({retries:a.state.retries+1})},a.retryQuiz=function(){var e=a.props.onRetry
e()
a.incrementRetriesAndReloadTask()
a.markConversion("end-of-task")},a.handleStartUnitTest=function(){var e=a.props,t=e.history,r=e.quiz,s=r.type,n=r.slug
var i=t.location.pathname.replace(s+"/"+n,"test/practice-test")
t.push(i)},a.handleQuizComplete=function(e,t,r,s){var n=a.props.onQuizComplete
a.setState({previousAttemptHistory:e,previousEnergyPoints:s})
n(e,t)},a.onNavigate=function(e){var t=a.props.onClose
t();(0,_scrollToSlug2.default)(e,"top",undefined,a.isMasteryEnabled())},a.isMasteryEnabled=function(){return a.props.quiz.topic.masteryEnabled},a.handleGoToSubject=function(){var e=a.props,t=e.history,r=e.quiz.subjectPath
t.push(r)},a.getEndOfTaskCard=function(){return function(e){return React.createElement(_topicAssessmentEndOfTaskCard2.default,babelHelpers.extends({},e,{masteryEnabled:a.isMasteryEnabled(),onNavigate:a.onNavigate,recommendedTutorials:a.getTutorialsWithRecommendations()}))}},a.getAdvanceHandler=function(e){return function(){var t=a.props.quiz,r=t.slug,s=t.type,n=t.topic.slug
_bigbingo2.default.markConversionsWithExtras([{id:"quiz_advance_past_start_card",extra:{slug:r,topicSlug:n,type:s}}])
a.props.onStartTask()
e()}},a.renderModal=function(e){var t=a.props,r=t.nextItem,s=t.quiz,n=t.visible,i=t.shouldAnimate,o=t.shouldBackdropDismiss,u=t.fromAnotherModal,l=t.referrer,d=t.onNextTask,c=t.onUpdateRecommendations,p=t.navigator
var f=s.topic,m=s.slug,g=s.title,b=s.contentDescriptor
var v=a.getUpdatedTaskData(e)
var y=function e(t){a.props.onShowRelatedVideo(v,t)}
var k=v&&v.userExercises||[]
return React.createElement(_exerciseModal2.default,{key:m,ref:function e(t){return a.exerciseModal=t},referrer:l,onClose:a.props.onClose,inPractice:false,practiceAgainMessage:a.getPracticeAgainMessage(),taskData:v,masteryEnabled:f.masteryEnabled,topicSlug:f.slug,type:"Task",title:g,visible:n,StartOfTaskCard:a.getStartOfTaskCard(v),StartOfQuizCard:a.getStartOfQuizCard(),EndOfTaskCard:a.getEndOfTaskCard(),EndOfQuizCard:a.getEndOfQuizCard(k),navigator:p,onPracticeAgain:a.retryQuiz,onCheckAnswer:function e(){},onReloadTask:a.incrementRetriesAndReloadTask,onTaskComplete:a.handleQuizComplete,onUpdateRecommendations:c,onNextTask:d,shouldAnimate:i,shouldBackdropDismiss:o,fromAnotherModal:u,nextItem:r,onShowRelatedVideo:y,contentDescriptor:b})},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.componentDidMount=function e(){this.markConversion("upsell")
var t=_userInfoStore2.default.getState(),r=t.masteryMap
this.setState({oldMasteryMap:babelHelpers.extends({},r)})}
t.prototype.markConversion=function e(t){var r=this.props.quiz,a=r.numItems,s=r.slug,n=r.topic,i=r.type,o=r.positionKey
_bigbingo2.default.markConversion("quiz_start",{num_items:a,referrer:t,slug:s,topic_slug:n.slug,type:i,quiz_id:o||n.id})}
t.prototype.getUpdatedTaskData=function e(t){var r=this.props.quiz.topic
var a=function e(t){return t.map(function(e){return babelHelpers.extends({},e,{exerciseModel:babelHelpers.extends({},e.exerciseModel,{relatedVideos:e.exerciseModel.relatedVideos.map(function(e){return babelHelpers.extends({},e,{nodeUrl:e.kaUrl,topicSlug:r.slug})})})})})}
if(t){return babelHelpers.extends({},t,{userExercises:a(t.userExercises)})}}
t.prototype.render=function e(){var t=this.props.quiz,r=t.topic.id,a=t.type,s=t.positionKey
if(a==="quiz"&&s===undefined){throw new Error("Quiz must have a position key!")}var n={key:"loader",topicId:r,retries:this.state.retries,children:this.renderModal}
switch(a){case"quiz":return React.createElement(_topicTaskLoaders.QuizLoader,babelHelpers.extends({},n,{positionKey:s}))
case"subject-challenge":return React.createElement(_topicTaskLoaders.SubjectChallengeLoader,n)
case"test":return React.createElement(_topicTaskLoaders.UnitTestLoader,n)
default:throw new Error("Invalid quiz type: "+a)}}
return t}(React.Component)
exports.default=InterspersedQuizModal
var styles=_aphrodite.StyleSheet.create({loadingContainer:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center"}})

});
KAdefine("javascript/content-library-package/components/sticky-header.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _noMobile,_mobileChevron
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactMotion=require("react-motion")
var _iconAngleBracketLeft=require("../../shared-styles-package/icon.angleBracketLeft.js")
var _iconAngleBracketLeft2=babelHelpers.interopRequireDefault(_iconAngleBracketLeft)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _utils=require("../../components/client-link-package/utils.js")
var _scrollUtils=require("../../scroll-utils-package/scroll-utils.js")
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _stickyModule=require("./sticky-module.jsx")
var _stickyModule2=babelHelpers.interopRequireDefault(_stickyModule)
var HEIGHT=_globalStyles2.default.pageHeaderHeight,standardTransitionMs=_globalStyles2.default.standardTransitionMs
var OUTER_PAD_EM=1
var StickyHeader=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,l
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),o=0;o<s;o++){i[o]=arguments[o]}return l=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={visible:false},r.handleBehaviorChange=function(e){var t=r.props.onVisibilityChange
var a=e!=="normal"
if(a!==r.state.visible){r.setState({visible:a})
if(t){t(a)}}},a),babelHelpers.possibleConstructorReturn(r,l)}t.prototype.render=function e(){var t=this.props,a=t.breadcrumb,r=t.style,l=t.hasBottomBound,s=t.namespace,i=t.children
var o=this.state.visible
var n={}
if(r&&r.backgroundColor){n.backgroundColor=r.backgroundColor}if(r&&r.bottomBorderColor){n.borderBottom="1px solid "+r.bottomBorderColor}return React.createElement("div",{"aria-hidden":true,className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:s+"beginSticky"}),React.createElement(_stickyModule2.default,{hasBottomBound:l,namespace:s,onBehaviorChange:this.handleBehaviorChange,styles:[styles.stickyModule]},React.createElement("div",{style:o?n:{}},React.createElement(_reactMotion.Motion,{style:{opacity:(0,_reactMotion.spring)(o?1:0,_reactMotion.presets.stiff)}},function(e){var t=e.opacity
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper,t===0&&styles.hide),style:{opacity:t}},!!a&&React.createElement("div",{className:(0,_aphrodite.css)(styles.spring,styles.noMobile)},React.createElement(_wonderBlocksLinkV2.default,{href:a.href,style:styles.breadcrumb,skipClientNav:!(0,_utils.pathIsInShell)(a.href)},React.createElement("span",{className:(0,_aphrodite.css)(styles.chevron)},React.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default})),a.title)),!!a&&React.createElement(_wonderBlocksLinkV2.default,{href:a.href,style:[styles.breadcrumb,styles.mobileChevron],skipClientNav:!(0,_utils.pathIsInShell)(a.href)},React.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default})),i,!!a&&React.createElement("div",{className:(0,_aphrodite.css)(styles.spring,styles.noMobile)})))}))))}
return t}(_react.Component)
StickyHeader.defaultProps={hasBottomBound:false,namespace:"header_"}
StickyHeader.height=HEIGHT
StickyHeader.scrollToTop=function(){return(0,_scrollUtils.scrollToOffset)(0,standardTransitionMs*2)}
exports.default=StickyHeader
var CHEVRON_PADDING_MOBILE=14
var styles=_aphrodite.StyleSheet.create({container:{height:HEIGHT,marginTop:-HEIGHT,width:"100%"},stickyModule:{left:0,right:0,zIndex:_globalStyles2.default.constants.zindexHeader,willChange:"unset",overflowY:"visible"},wrapper:{display:"flex",height:HEIGHT,margin:"auto",maxWidth:"calc("+_shared2.default.pageWidth+"px + "+OUTER_PAD_EM*2+"em)",paddingLeft:OUTER_PAD_EM+"em",paddingRight:OUTER_PAD_EM+"em"},hide:{display:"none"},spring:{alignItems:"center",display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1},noMobile:(_noMobile={flexBasis:0},_noMobile[_shared2.default.queries.small]={display:"none"},_noMobile),mobileChevron:(_mobileChevron={flexBasis:0,display:"none"},_mobileChevron[_shared2.default.queries.small]={display:"inline",position:"absolute",padding:CHEVRON_PADDING_MOBILE,left:16-CHEVRON_PADDING_MOBILE,lineHeight:0,fontSize:12,top:11,bottom:11},_mobileChevron),breadcrumb:babelHelpers.extends({},_globalStyles2.default.typography.bodySmall,_globalStyles2.default.typography.breadcrumb,_shared2.default.typography.wonderBlocksLabelLarge,{textTransform:"none"}),chevron:{fontSize:"0.7em",paddingRight:"0.5em",verticalAlign:"middle"}})

});
KAdefine("javascript/content-library-package/components/study-guide-call-to-action.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _button
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var StudyGuideCallToAction=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.children,a=t.onClick,o=t.testId,i=t.type
return React.createElement(_wonderBlocksButtonV2.default,{onClick:a,kind:i,style:styles.button,testId:o},r)}
return t}(_react.Component)
exports.default=StudyGuideCallToAction
var styles=_aphrodite.StyleSheet.create({button:(_button={minWidth:227},_button[_mediaQueries2.default.smOrSmaller]={width:"100%"},_button)})

});
KAdefine("javascript/content-library-package/components/up-next-shelf.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _breadcrumbToTitleStr,_divider,_rightColumn,_handTrophyContainer,_smOrSmaller,_mdOrLarger
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _handTrophyIcon=require("../icons/hand-trophy-icon.jsx")
var _handTrophyIcon2=babelHelpers.interopRequireDefault(_handTrophyIcon)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _recommendationBadge=require("../components/recommendation-badge.jsx")
var _recommendationBadge2=babelHelpers.interopRequireDefault(_recommendationBadge)
var _rocketShip=require("../components/rocket-ship.jsx")
var _rocketShip2=babelHelpers.interopRequireDefault(_rocketShip)
var _studyGuideCallToAction=require("./study-guide-call-to-action.jsx")
var _studyGuideCallToAction2=babelHelpers.interopRequireDefault(_studyGuideCallToAction)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var UpNextShelf=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.action,a=r.copy,l=r.domain,i=r.prominence,o=r.showRecommendationBadge
var s=a.callToAction,n=a.icon,d=a.referrer,c=a.subtitle,m=a.title
var u={color:i==="primary"?(0,_globalStyles.domainColors)(l).domain3:_globalStyles.colors.gray17}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.leftColumn)},React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:u},m),React.createElement(_strut2.default,{size:12}),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.subtitle},c),React.createElement(_strut2.default,{size:16}),React.createElement(_studyGuideCallToAction2.default,{onClick:t,type:i},s)),React.createElement("div",{className:(0,_aphrodite.css)(styles.divider)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.rightColumn)},o&&React.createElement(_recommendationBadge2.default,{referrer:d}),n==="rocketship"?React.createElement("div",{className:(0,_aphrodite.css)(styles.rocketShipContainer)},React.createElement(_rocketShip2.default,{domain:l})):React.createElement("div",{className:(0,_aphrodite.css)(styles.handTrophyContainer)},React.createElement(_handTrophyIcon2.default,{domain:l}))))}
return r}(_react.Component)
exports.default=UpNextShelf
var styles=_aphrodite.StyleSheet.create({breadcrumb:{color:_globalStyles.colors.gray68},subtitle:{color:_globalStyles.colors.gray17},container:{display:"flex",flexDirection:"row",flex:1},column:{display:"flex",flexDirection:"column",flex:1},leftColumn:{alignItems:"flex-start"},strut16:{flexShrink:0,flexBasis:16},strut24:{flexShrink:0,flexBasis:24},breadcrumbToTitleStrut:(_breadcrumbToTitleStr={flexShrink:0,flexBasis:10},_breadcrumbToTitleStr[_mediaQueries2.default.smOrSmaller]={flexBasis:8},_breadcrumbToTitleStr),divider:(_divider={flexBasis:32,flexShrink:0},_divider[_mediaQueries2.default.smOrSmaller]={display:"none"},_divider),rightColumn:(_rightColumn={alignItems:"flex-end",justifyContent:"space-between",position:"relative"},_rightColumn[_mediaQueries2.default.smOrSmaller]={display:"none"},_rightColumn),handTrophyContainer:(_handTrophyContainer={position:"absolute",bottom:-110,width:"100%"},_handTrophyContainer[_mediaQueries2.default.mdOrSmaller]={display:"none"},_handTrophyContainer),rocketShipContainer:{position:"absolute",display:"flex",flexDirection:"row",justifyContent:"flex-end",bottom:-94,right:0,width:"100%"},smOrSmaller:(_smOrSmaller={},_smOrSmaller[_mediaQueries2.default.mdOrLarger]={display:"none"},_smOrSmaller),mdOrLarger:(_mdOrLarger={},_mdOrLarger[_mediaQueries2.default.smOrSmaller]={display:"none"},_mdOrLarger)})

});
KAdefine("javascript/content-library-package/components/topic-description.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var i18n=require("../../shared-package/i18n.js")
var TopicDescription=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.description,a=r.title
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:styles.title},i18n.$_("About this unit",{title:a})),React.createElement(_strut2.default,{size:16}),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.description},t))}
return r}(_react.Component)
exports.default=TopicDescription
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"column",flex:1},title:{color:_globalStyles.colors.gray17},description:{color:_globalStyles.colors.gray17}})

});
KAdefine("javascript/content-library-package/components/start-study-guide-upsell.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _title,_divider,_rightColumn
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _shared=require("../styles/shared.js")
var _studyGuideCallToAction=require("./study-guide-call-to-action.jsx")
var _studyGuideCallToAction2=babelHelpers.interopRequireDefault(_studyGuideCallToAction)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var i18n=require("../../shared-package/i18n.js")
var RocketShip=function e(l){var t=l.domain
var r=(0,_shared.studyGuideTheme)(t)==="blue"?{color1:"#236CC5",color2:"#66AFE9",color3:"#0D3D82",color4:"#01D1C1",color5:"#63D9EA",color6:"#10ADCD",color7:"#085566",color8:"#027D97"}:{color1:"#C9337C",color2:"#FF92C7",color3:"#9E034E",color4:"#FF8482",color5:"#FFBE26",color6:"#ED5FA5",color7:"#8C1B0C",color8:"#BE2612"}
return React.createElement("svg",{width:"168",height:"179",viewBox:"0 0 168 179"},React.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-4 -1)"},React.createElement("path",{stroke:r.color5,strokeLinecap:"round",strokeWidth:"5",d:"M122 49v97"}),React.createElement("path",{fill:r.color6,fillRule:"nonzero",d:"M171.569 178.362c.752.819.501 1.484-.601 1.484L6.054 180c-1.102 0-1.403-.666-.601-1.485l27.21-28.877c.752-.819 2.305-1.484 3.407-1.484L141.002 148c1.102 0 2.605.666 3.407 1.485l27.16 28.877z"}),React.createElement("path",{stroke:r.color6,strokeLinecap:"round",strokeWidth:"5",d:"M15 49h107"}),React.createElement("path",{stroke:r.color6,strokeWidth:"9",d:"M15 178V10.464"}),React.createElement("circle",{cx:"14.5",cy:"11.5",r:"7.5",fill:r.color8,fillRule:"nonzero"}),React.createElement("path",{fill:r.color7,fillRule:"nonzero",d:"M17 49l-9 5V44z"}),React.createElement("path",{fill:r.color8,fillRule:"nonzero",d:"M23 49.5L12 56V43z"}),React.createElement("path",{fill:r.color1,fillRule:"nonzero",d:"M69.625 126.054c5.881 2.93 28.83 3.333 37.113-.07-1.783 9.035-6.275 12.253-7.104 12.538-1.041.33-5.49.82-11.435.79-5.944-.03-10.358-.437-11.425-.768-.875-.205-5.375-3.425-7.15-12.49z"}),React.createElement("path",{fill:"#F0F1F2",fillRule:"nonzero",d:"M88.341 130.77c-9.883.052-17.273-1.15-19.07-1.953-1.797-.804-13.023-13.18-13.042-50.92-.018-37.74 26.288-75.952 32.072-75.987 5.783-.035 32.067 38.032 32.086 75.771.018 37.74-11.22 50.228-13.027 51.002-1.785.881-9.07 2.076-19.019 2.086z"}),React.createElement("path",{fill:r.color2,fillRule:"nonzero",d:"M74.664 87.032c10.859 7.106 25.547 3.878 32.805-7.214 7.26-11.093 4.337-25.844-6.522-32.95-10.859-7.106-25.547-3.878-32.805 7.214-7.26 11.093-4.337 25.845 6.522 32.95z"}),React.createElement("path",{fill:r.color3,d:"M79.133 79.206c-6.702-4.386-8.578-13.373-4.193-20.073 4.384-6.7 13.37-8.58 20.072-4.193 6.703 4.385 8.578 13.373 4.194 20.072-4.384 6.7-13.37 8.58-20.073 4.194z"}),React.createElement("path",{fill:r.color4,fillRule:"nonzero",d:"M63.68 39.409C71.785 17.942 84.167 1.859 87.867 1.88c3.7.022 16.232 16.068 24.5 37.633-10.618-6.764-41.006-5.88-48.685-.105z"}),React.createElement("g",{fill:r.color3,fillRule:"nonzero"},React.createElement("path",{d:"M118.165 103c2.682 3.25 10.104 11.938 10.922 17.892.818 5.954-3.924 27.61-6.092 27.033-2.168-.578-.968-7.454-3.88-13.378-2.914-5.924-9.15-10.659-9.15-10.659l8.2-20.888zM59.544 103.42c-2.66 3.202-9.934 11.872-10.707 17.801-.774 5.93 4.252 27.591 6.401 27.04 2.15-.553.842-7.471 3.73-13.322 2.821-5.895 9.013-10.61 9.013-10.61l-8.437-20.91z"})),React.createElement("path",{fill:r.color4,fillRule:"nonzero",d:"M56.916 97.503l.043-.065c9.827 7.364 48.32 8.557 62.045-.015-2.868 22.773-10.402 31.008-11.914 31.606-1.812.775-9.165 2.032-19.149 2.035-9.983.003-17.334-1.166-19.138-1.973-1.435-.659-8.994-8.78-11.887-31.588z"}),React.createElement("path",{fill:r.color3,fillRule:"nonzero",d:"M85.676 110.047l1.68 38.11c.027.671.596 1.23 1.267 1.203.672-.028 1.123-.574 1.161-1.203l1.594-38.117c.074-1.54-1.107-2.874-2.755-2.925-1.54-.073-2.875 1.11-2.926 2.759 0 0 .022.108-.02.173z"})))}
var StartStudyGuideUpsell=function(e){babelHelpers.inherits(l,e)
function l(){babelHelpers.classCallCheck(this,l)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}l.prototype.render=function e(){var l=this.props,t=l.domain,r=l.numQuizzes,a=l.shouldUseMastery
var o=void 0
var i=void 0
if(r===0){o=a?i18n._("Take a test to quickly level up the skills you’ve already learned. We’ll recommend lessons for any questions you miss."):i18n._("Take a test to identify your areas for growth. We'll recommend lessons for exactly what you need to learn.")
i=i18n._("Start unit test")}else if(r===1){o=a?i18n._("Take a quiz to quickly level up the skills you’ve already learned. We’ll recommend lessons for any questions you miss."):i18n._("Take a quiz to identify your areas for growth. We'll recommend lessons for exactly what you need to learn.")
i=i18n._("Start quiz")}else{o=a?i18n._("Take Quiz 1 to quickly level up the skills you’ve already learned. We’ll recommend lessons for any questions you miss."):i18n._("Take Quiz 1 to identify your areas for growth. We'll recommend lessons for exactly what you need to learn.")
i=i18n._("Start Quiz 1")}return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.leftColumn)},React.createElement(_wonderBlocksTypographyV.LabelMedium,{style:styles.breadcrumb},a?i18n._("Boost your progress"):i18n._("Start your learning journey")),React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:styles.title},a?i18n._("Study smarter, not harder"):i18n._("Unlock your personalized study plan")),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.planText},React.createElement(_reactBalanceText2.default,null,o)),React.createElement(_studyGuideCallToAction2.default,{onClick:this.props.action},i)),React.createElement("div",{className:(0,_aphrodite.css)(styles.divider)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.rightColumn)},React.createElement("div",{className:(0,_aphrodite.css)(styles.rocketShipContainer)},React.createElement(RocketShip,{domain:t}))))}
return l}(_react.Component)
exports.default=StartStudyGuideUpsell
var styles=_aphrodite.StyleSheet.create({breadcrumb:{color:_globalStyles.colors.gray41},title:(_title={color:_globalStyles.colors.gray17,marginTop:10,marginBottom:16},_title[_mediaQueries2.default.smOrSmaller]={marginTop:8},_title),planText:{color:_globalStyles.colors.gray17,marginBottom:24},container:{display:"flex",flexDirection:"row",flex:1},column:{display:"flex",flexDirection:"column",flex:1},leftColumn:{alignItems:"flex-start",flex:2},divider:(_divider={flexBasis:16,flexShrink:0},_divider[_mediaQueries2.default.smOrSmaller]={display:"none"},_divider),rightColumn:(_rightColumn={alignItems:"center",justifyContent:"space-between",position:"relative"},_rightColumn[_mediaQueries2.default.smOrSmaller]={display:"none"},_rightColumn),rocketShipContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-end",flexGrow:1,marginBottom:-42}})

});
KAdefine("javascript/content-library-package/components/class-picker-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _modal,_modalHeader,_bannerBackground,_babelHelpers$extends2,_continueMobile,_continueDesktop,_backButtonContainer
var _reactBalanceText=require("react-balance-text")
var _reactBalanceText2=babelHelpers.interopRequireDefault(_reactBalanceText)
var _aphrodite=require("aphrodite")
var _muLambda=require("mu-lambda")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _classPicker=require("../../class-picker-package/class-picker.jsx")
var _classPicker2=babelHelpers.interopRequireDefault(_classPicker)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _modal2=require("../../components/modal-package/modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _gradePicker=require("../../class-picker-package/grade-picker.jsx")
var _gradePicker2=babelHelpers.interopRequireDefault(_gradePicker)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _progressCircles=require("./progress-circles.jsx")
var _progressCircles2=babelHelpers.interopRequireDefault(_progressCircles)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _spring=require("../../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _errorToast=require("../../components/toast-package/error-toast.jsx")
var _errorToast2=babelHelpers.interopRequireDefault(_errorToast)
var i18n=require("../../shared-package/i18n.js")
var SHARED_STYLES={buttonWidthDesktop:232,buttonWidthMobile:120}
var ClassPickerModal=function(e){babelHelpers.inherits(t,e)
function t(a){babelHelpers.classCallCheck(this,t)
var s=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
s.errorNotificationContainer=null
s.handleGradeLevelChange=function(e){s.setState({selectedGradeLevel:e})}
s.handleClassSelectionChange=function(e){var t
s.setState({selectedClasses:babelHelpers.extends({},s.state.selectedClasses,(t={},t[e.id]=!s.state.selectedClasses[e.id],t))})}
s.handleChangeStep=function(e){var t=s.state.step
if(t==="grade"){_bigbingo2.default.markConversion("logged_in_homepage_pick_grade",{grade:s.state.selectedGradeLevel})}if(s.modalBody){var a
var r=s.modalBody
s.setState((a={step:e},a[t+"ScrollTop"]=r.scrollTop,a))
r.scrollTop=s.state[e+"ScrollTop"]}}
s.handleFinish=function(){s.setState({saveStatus:"saving"})
var e=Object.entries(s.state.selectedClasses).filter(function(e){var t=e[0],a=e[1]
return a}).map(function(e){var t=e[0],a=e[1]
return t})
_bigbingo2.default.markConversion("logged_in_homepage_pick_classes",{classIds:e})
var t=s.state.selectedGradeLevel
var a=t&&t.id
s.props.onFinish(e,a)}
s.handleClose=function(){s.props.onClose()}
s.handleRequestClose=function(){if(s.isMobile){if(s.state.step==="grade"){return true}else if(s.state.step==="classes"){s.handleChangeStep("grade")
return false}else{return true}}else{return true}}
s.updateSaveStatus=function(e){var t=s.state.preventDismissalState
if(s.state.saveStatus!=="failed"&&e==="failed"){s.addErrorNotification()
t=false}if(s.state.saveStatus==="failed"&&e!=="failed"){s.removeErrorNotification()}s.setState({saveStatus:e,preventDismissalState:t})
if(e==="completed"){s.setState({step:"finished"},function(){if(s.modal){s.modal.handleClose()}})}}
s.getBalanceTextBlock=function(e,t){return React.createElement("div",{className:(0,_aphrodite.css)(t)},React.createElement(_reactBalanceText2.default,null,e))}
s.getBannerHeader=function(){var e=s.props.gradeLevelGroups
var t=s.state.step
var a=e.length>0
var r=null
if(t==="grade"){r=i18n._("1. What grade are you in?")}else{if(a){r=i18n._("2. What courses can we help you learn?")}else{r=i18n._("What courses can we help you learn?")}}return s.getBalanceTextBlock(r,styles.bannerHeader)}
s.getBannerDescription=function(){var e=s.props.showUpdateReminder
var t=s.state.step
var a=null
if(t==="grade"){if(e){a=i18n._("We'll update your lessons to match")}else{a=i18n._("We'll gather the right lessons for you")}}else{if(e){a=i18n._("Choose 4–5 and we'll update your lessons for you.")}else{a=i18n._("Choose 4–5 and we'll gather the right lessons for you.")}}return s.getBalanceTextBlock(a,styles.description)}
s.renderContinueButton=function(e,t,a){var r=1
var n="class-picker-modal-continue"
if(e==="grade"){if(t){return React.createElement("span",{key:e},React.createElement("span",{className:(0,_aphrodite.css)(styles.continueDesktop)},React.createElement(_button2.default,{onClick:function e(){return s.handleChangeStep("classes")},width:141,testId:n},i18n._("Continue"))),React.createElement("span",{className:(0,_aphrodite.css)(styles.continueMobile)},React.createElement(_button2.default,{onClick:function e(){return s.handleChangeStep("classes")},width:120,testId:n},i18n._("Continue"))))}else{return React.createElement("span",{key:e},React.createElement("span",{className:(0,_aphrodite.css)(styles.continueDesktop)},React.createElement(_button2.default,{disabled:true},i18n._("Choose a grade to continue"))),React.createElement("span",{className:(0,_aphrodite.css)(styles.continueMobile)},React.createElement(_button2.default,{disabled:true,width:120},i18n._("Continue"))))}}else{if(s.state.saveStatus==="saving"){return React.createElement("span",{key:"saving-"+e},React.createElement("span",{className:(0,_aphrodite.css)(styles.continueDesktop)},React.createElement(_button2.default,{width:SHARED_STYLES.buttonWidthDesktop,color:_globalStyles.colors.kaGreenHover},React.createElement("div",{className:(0,_aphrodite.css)(styles.saveButtonContents)},React.createElement("div",{className:(0,_aphrodite.css)(styles.savingButtonSpinner)},React.createElement(_spinner2.default,{size:"xsmall",theme:"light"})),i18n._("Saving...")))),React.createElement("span",{className:(0,_aphrodite.css)(styles.continueMobile)},React.createElement(_button2.default,{width:SHARED_STYLES.buttonWidthMobile,color:_globalStyles.colors.kaGreenHover},i18n._("Saving..."))))}else if(a>=r){return React.createElement("span",{key:e},React.createElement("span",{className:(0,_aphrodite.css)(styles.continueDesktop)},React.createElement(_button2.default,{width:SHARED_STYLES.buttonWidthDesktop,onClick:s.handleFinish,testId:n},i18n.ngettext("Continue with %(num)s course","Continue with %(num)s courses",a))),React.createElement("span",{className:(0,_aphrodite.css)(styles.continueMobile)},React.createElement(_button2.default,{onClick:s.handleFinish,width:SHARED_STYLES.buttonWidthMobile,testId:n},i18n._("Continue"))))}else{return React.createElement("span",{key:e},React.createElement("span",{className:(0,_aphrodite.css)(styles.continueDesktop)},React.createElement(_button2.default,{disabled:true},i18n.ngettext("Choose %(num)s course to continue","Choose %(num)s courses to continue",r))),React.createElement("span",{className:(0,_aphrodite.css)(styles.continueMobile)},React.createElement(_button2.default,{disabled:true,width:SHARED_STYLES.buttonWidthMobile},i18n._("Continue"))))}}}
var r=a.initialGradeLevelId&&!a.preventDismissal&&!a.showUpdateReminder||!a.gradeLevelGroups.length
var n=(0,_muLambda.pipe)((0,_muLambda.flatMap)((0,_muLambda.prop)("levels")),(0,_muLambda.find)((0,_muLambda.propEq)("id",a.initialGradeLevelId)))
var l=a.initialGradeLevelId!==null?n(a.gradeLevelGroups):null
s.state={step:r?"classes":"grade",gradeScrollTop:0,classesScrollTop:0,selectedGradeLevel:l,selectedClasses:a.initialSelectedClasses.reduce(function(e,t){e[t]=true
return e},{}),saveStatus:"unsaved",preventDismissalState:s.props.preventDismissal,modalBody:null}
return s}t.prototype.componentDidMount=function e(){this.isMobile=window.matchMedia(_globalStyles.queries.small.replace("@media ","")).matches
this.setState({modalBody:this.modalBody})
var t=this.props.preventDismissal?"automatic":"manual"
var a=!!this.props.gradeLevelGroups.length
_bigbingo2.default.markConversion("logged_in_homepage_open_class_picker",{trigger:t,has_grade_step:a})}
t.prototype.componentWillUnmount=function e(){this.removeErrorNotification()}
t.prototype.addErrorNotification=function e(){var t=this
var a=this.errorNotificationContainer
if(!a){return}this.errorNotificationContainer=document.createElement("div")
this.errorNotificationContainer.style.zIndex=""+_constants2.default.zindexAboveModal
this.errorNotificationContainer.style.position="absolute"
this.errorNotificationContainer.style.top="10px"
this.errorNotificationContainer.style.right="10px"
document.body.appendChild(a)
var s=React.createElement(_errorToast2.default,{onClose:function e(){t.updateSaveStatus("unsaved")
t.removeErrorNotification()}},i18n._("Oops! Looks like we couldn't save your courses."+" Please try again."))
_reactDom2.default.render(s,a)}
t.prototype.removeErrorNotification=function e(){if(this.errorNotificationContainer){document.body.removeChild(this.errorNotificationContainer)
this.errorNotificationContainer=null}}
t.prototype.render=function e(){var t=this
var a=this.props,s=a.domains,r=a.gradeLevelGroups,n=a.classesInGradeLevels
var l=this.state,o=l.selectedGradeLevel,i=l.step
var c=Object.values(this.state.selectedClasses).filter(function(e){return e}).length
var d={paddingLeft:16,paddingRight:16}
var u=o?n[o.id]||[]:[]
var p=[]
var m=[]
for(var b=0;b<s.length;b++){var h=s[b]
var g=h.subjects.filter(function(e){return u.includes(e.id)})
if(g.length){p.push(h)}else{m.push(h)}}var v=p.concat(m)
var f=r.length>0
var y=v.filter(function(e){return e.subjects.length>0})
return React.createElement(_modal3.default,{ref:function e(a){return t.modal=a},style:styles.modal,onClose:this.handleClose,preventDismissal:this.state.preventDismissalState,useBackIcon:this.isMobile&&this.state.step==="classes",onRequestClose:this.handleRequestClose},React.createElement(_modal2.ModalHeader,null,React.createElement("span",{className:(0,_aphrodite.css)(styles.modalHeader)},i18n._("Personalize Khan Academy"))),React.createElement("div",{className:"class-picker-contents "+(0,_aphrodite.css)(styles.modalBody),ref:function e(a){return t.modalBody=a},"data-test-id":"class-picker-modal"},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerBackground)},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerBackgroundTint)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerContent)},this.getBannerHeader(),this.getBannerDescription()),React.createElement("div",{className:(0,_aphrodite.css)(styles.bannderBottomBorder)})),i==="grade"&&React.createElement(_gradePicker2.default,{gradeLevelGroups:r,onChange:this.handleGradeLevelChange,selectedGradeLevel:o}),i==="classes"&&React.createElement(_classPicker2.default,{domains:f?v:y,onChange:this.handleClassSelectionChange,classesInLevel:u,selectedClasses:this.state.selectedClasses,selectedGradeLevelId:this.state.selectedGradeLevel?this.state.selectedGradeLevel.id:null,modalBody:this.state.modalBody})),React.createElement(_modal2.ModalFooter,{style:d},i==="grade"&&React.createElement("div",null),i==="classes"&&f&&React.createElement("span",{className:(0,_aphrodite.css)(styles.backButtonContainer)},React.createElement(_button2.default,{type:"text",onClick:function e(){return t.handleChangeStep("grade")},padding:8},i18n._("Back"))),React.createElement(_spring2.default,null),f&&React.createElement("span",{className:(0,_aphrodite.css)(styles.stepLabel)},i18n._("Step %(current)s of %(total)s",{current:i==="grade"?1:2,total:2})),React.createElement(_strut2.default,{size:13}),f&&React.createElement(_progressCircles2.default,{current:i==="grade"?1:2,total:2}),React.createElement(_strut2.default,{size:24}),this.renderContinueButton(i,o,c)))}
return t}(_react.Component)
exports.default=ClassPickerModal
var styles=_aphrodite.StyleSheet.create({modal:(_modal={height:"80%",width:768},_modal[_globalStyles.queries.small]={minWidth:0,width:"100%",height:"100%",borderRadius:0},_modal),modalHeader:(_modalHeader={display:"inline"},_modalHeader[_globalStyles.queries.small]=babelHelpers.extends({},_globalStyles.typography.smallHeading),_modalHeader),modalBody:{overflowX:"hidden",overflowY:"scroll",flexGrow:1},bannerBackground:(_bannerBackground={width:772,height:130,backgroundImage:"url("+(0,_staticUrl2.default)("/images/homepage/mountains-simple.svg")+")",backgroundSize:"cover",backgroundPosition:"calc(50% - 2px) -36px",position:"relative"},_bannerBackground[_globalStyles.queries.small]={width:"calc(100% + 4px)",backgroundPosition:"calc(50% - 2px) 50%"},_bannerBackground),bannerBackgroundTint:{content:'""',position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(17, 172, 205, 0.2)"},bannderBottomBorder:{position:"absolute",left:0,right:0,bottom:0,borderBottom:"solid 1px rgba(0, 0, 0, 0.1)"},bannerContent:{position:"absolute",left:0,right:0,top:0,bottom:0,paddingLeft:22,paddingRight:22,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},bannerHeader:babelHelpers.extends({},_globalStyles.typography.subheadingMobile,(_babelHelpers$extends2={color:_globalStyles.colors.white,paddingBottom:2},_babelHelpers$extends2[_globalStyles.queries.small]={paddingBottom:6},_babelHelpers$extends2)),description:babelHelpers.extends({},_globalStyles.typography.bodySmall,{color:_globalStyles.colors.white}),continueMobile:(_continueMobile={display:"none"},_continueMobile[_globalStyles.queries.small]={display:"inline"},_continueMobile),continueDesktop:(_continueDesktop={display:"inline"},_continueDesktop[_globalStyles.queries.small]={display:"none"},_continueDesktop),saveButtonContents:{display:"flex",alignItems:"center",justifyContent:"center"},savingButtonSpinner:{marginRight:8},stepLabel:babelHelpers.extends({},_globalStyles.typography.smallHeading,{color:_globalStyles.colors.gray68}),errorToast:{position:"fixed",right:10,top:10,zIndex:_constants2.default.zindexAboveModal},backButtonContainer:(_backButtonContainer={},_backButtonContainer[_globalStyles.queries.small]={display:"none"},_backButtonContainer)})

});
KAdefine("javascript/content-library-package/components/progress-circles.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var spacing=16
var radius=4
var strokeWidth=2
var ProgressCircles=function(r){babelHelpers.inherits(e,r)
function e(){babelHelpers.classCallCheck(this,e)
return babelHelpers.possibleConstructorReturn(this,r.apply(this,arguments))}e.prototype.render=function r(){var e=this.props,a=e.color,t=e.current,s=e.total
var l=spacing*(s-1)+2*radius+2
var o=2*radius+2
var i=-(radius+1)
var c=-(radius+1)
var u=i+" "+c+" "+l+" "+o
var n=[]
for(var p=0;p<s;p++){n.push(_react2.default.createElement("circle",{key:p,cx:p*spacing,cy:0,r:radius,fill:p<t?a:"transparent",stroke:p<t?a:_globalStyles.colors.gray76,strokeWidth:strokeWidth}))}return _react2.default.createElement("svg",{width:l,height:o,viewBox:u},n)}
return e}(_react.PureComponent)
ProgressCircles.defaultProps={color:_globalStyles.colors.kaGreen}
exports.default=ProgressCircles

});
KAdefine("javascript/content-library-package/components/recommendation-badge.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _mdOrLarger,_smOrSmaller,_iconContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _recommendedIcon=require("../icons/recommended-icon.jsx")
var _recommendedIcon2=babelHelpers.interopRequireDefault(_recommendedIcon)
var _tooltip=require("../../components/tooltip-package/tooltip.jsx")
var _tooltip2=babelHelpers.interopRequireDefault(_tooltip)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../../shared-package/i18n.js")
var RecommendationBadge=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.referrer
var a=React.createElement("span",{style:{whiteSpace:"nowrap"}},i18n._("Based on %(referrer)s",{referrer:r}))
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.breadcrumb,styles.mdOrLarger)},r?React.createElement(_tooltip2.default,{content:a,horizontalShift:-25,offset:10,horizontalAlignment:"right",autoshift:true},React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipAnchor)},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconContainer)},React.createElement(_recommendedIcon2.default,null)),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.textContainer},i18n._("Recommended")))):React.createElement(_wonderBlocksTypographyV.Body,null,i18n._("Recommended"))),React.createElement("div",{className:(0,_aphrodite.css)(styles.breadcrumb,styles.smOrSmaller)},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconContainer)},React.createElement(_recommendedIcon2.default,null)),React.createElement(_wonderBlocksTypographyV.Body,null,r?i18n._("Recommended based on %(referrer)s",{referrer:r}):i18n._("Recommended"))))}
return r}(_react.Component)
exports.default=RecommendationBadge
var styles=_aphrodite.StyleSheet.create({breadcrumb:{color:_wonderBlocksColorV2.default.offBlack64,display:"flex",flexDirection:"row"},tooltipAnchor:{display:"flex",flexDirection:"row",overflow:"hidden",justifyContent:"flex-end",alignItems:"center"},mdOrLarger:(_mdOrLarger={},_mdOrLarger[_mediaQueries2.default.smOrSmaller]={display:"none"},_mdOrLarger),smOrSmaller:(_smOrSmaller={},_smOrSmaller[_mediaQueries2.default.mdOrLarger]={display:"none"},_smOrSmaller),iconContainer:(_iconContainer={flexShrink:0,paddingRight:6},_iconContainer[_mediaQueries2.default.smOrSmaller]={paddingRight:10},_iconContainer),textContainer:{paddingTop:2}})

});
KAdefine("javascript/content-library-package/components/rocket-ship.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _shared=require("../styles/shared.js")
var RocketShip=function e(c){var t=c.domain
var l=(0,_shared.studyGuideTheme)(t)
var r=l==="blue"
var a=r?"#01d1c1":"#ff8482"
var i=r?"#0d3d82":"#9e034e"
var n=r?"#66afe9":"#ff92c7"
var f="#f0f1f2"
var s=i
var m=r?"#236cc5":"#c9337c"
var o="#fbe05b"
var R="#ecf1de"
var d=_globalStyles.colors.gray90
var v=_globalStyles.colors.gray85
var E=_globalStyles.colors.gray76
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"279",height:"236",viewBox:"0 0 279 236"},React.createElement("g",{fill:"none",fillRule:"nonzero"},React.createElement("g",{transform:"scale(-1 1) rotate(7 60.9 -1087.19)"},React.createElement("path",{fill:R,d:"M51.27 143.688c1.413 1.877 3.014 17.644-8.193 29.376 0 0 1.13-4.036 0-5.819 0 0-5.839 16.424-35.033 20.085-8.288-28.156 4.614-39.982 4.614-39.982-2.072-.375-5.368 2.253-5.368 2.253 6.404-14.923 21.473-19.71 23.827-19.24l20.154 13.327"}),React.createElement("path",{fill:o,d:"M46.805 142.827c-.189 3.874-7.457 28.436-30.299 33.254-4.625-22.862 15.008-39.3 18.5-41l11.799 7.746z"}),React.createElement("path",{fill:m,d:"M69.315 138.181c-7.91-.94-31.455-15.885-37.597-24.91-4.187 10.434-1.768 16.732-1.116 17.578.837 1.034 5.025 4.512 11.074 8.46 6.049 3.948 10.795 6.486 12.098 6.862 1.023.376 7.724.094 15.54-7.99z"}),React.createElement("path",{fill:f,d:"M46.695 130.95c9.908 6.576 18.133 10.24 20.47 10.615 2.337.376 21.778-4.697 46.641-42.742 24.863-38.045 23.554-93.938 17.76-97.79-5.796-3.85-57.297 17.192-82.16 55.236-24.863 38.045-21.778 58.054-20.47 60.027 1.215 2.066 7.758 8.078 17.76 14.654z"}),React.createElement("circle",{cx:"88.98",cy:"65.274",r:"23",fill:i,stroke:n,strokeWidth:"11.366"}),React.createElement("path",{fill:a,d:"M131.142 55.007c5.99-27.378 4.118-52.111.374-54.566-3.744-2.454-26.957 5.57-49.515 22.09 15.163.19 45.21 21.43 49.14 32.476z"}),React.createElement("g",{fill:s},React.createElement("path",{d:"M34.435 83.57c-4.718 1.501-17.576 5.347-22.201 10.789C7.608 99.8-1.642 124.66.856 125.506c2.497.844 5.735-6.849 12.395-10.883 6.66-4.034 15.819-4.69 15.819-4.69l5.365-26.363zM93.728 122.55c.558 4.962 2.14 18.448-.931 24.91-3.072 6.461-22.06 24.91-23.828 22.943-1.769-1.966 4.002-8.054 4.933-15.826C74.926 146.804 71.854 138 71.854 138l21.874-15.452z"})),React.createElement("path",{fill:a,d:"M99.027 117.277v-.094c-14.706.94-54.14-23.228-62.29-40.908-12.084 24.827-9.93 38.087-8.805 39.686 1.311 1.975 7.868 8.088 17.89 14.67 10.023 6.584 18.173 10.251 20.515 10.627 1.873.283 14.8-2.915 32.69-23.98z"}),React.createElement("path",{fill:s,d:"M62.735 111.1l-26.727 36.99c-.469.654-1.407.841-2.063.374-.657-.467-.75-1.308-.375-1.961l23.445-39.139c.937-1.588 3-2.148 4.689-1.12 1.594.933 2.156 2.988 1.125 4.67 0 0-.094.093-.094.186z"})),React.createElement("g",{transform:"matrix(-1 0 0 1 278 94)"},React.createElement("circle",{cx:"106.5",cy:"81.5",r:"35.5",fill:d}),React.createElement("circle",{cx:"147",cy:"95",r:"28",fill:d}),React.createElement("circle",{cx:"113",cy:"53",r:"28",fill:d}),React.createElement("circle",{cx:"183.5",cy:"105.5",r:"14.5",fill:d}),React.createElement("circle",{cx:"35.5",cy:"105.5",r:"35.5",fill:d}),React.createElement("circle",{cx:"75",cy:"100",r:"25",fill:d}),React.createElement("circle",{cx:"98.5",cy:"6.5",r:"6.5",fill:v}),React.createElement("circle",{cx:"178.5",cy:"65.5",r:"6.5",fill:E}),React.createElement("circle",{cx:"145",cy:"21",r:"4",fill:E}),React.createElement("circle",{cx:"56",cy:"49",r:"42",fill:d}))))}
exports.default=RocketShip

});
KAdefine("javascript/content-library-package/components/mastery-practice-content-item.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _practiceItemMarginTo,_practiceItemMarginBo,_masteryInstruction,_masteryCTA
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactRouterDom=require("react-router-dom")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _labeledSmallMasteryIndicator=require("../../mastery-package/labeled-small-mastery-indicator.jsx")
var _labeledSmallMasteryIndicator2=babelHelpers.interopRequireDefault(_labeledSmallMasteryIndicator)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _getNavigationConversions=require("../utils/get-navigation-conversions.js")
var _getNavigationConversions2=babelHelpers.interopRequireDefault(_getNavigationConversions)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _modalUtils=require("../utils/modal-utils.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../../shared-package/i18n.js")
var constants={buttonWidth:94,itemExtraMarginTop:12,itemMinHeight:108,itemVerticalSpacing:11,masteryInstructionBottomMargin:8,masteryInstructionTopMargin:4,masteryWidth:72}
var strings={getAttemptedCTA:function e(t,r){return i18n._("Get %(goal)s of %(total)s questions to level up!",{goal:t,total:r})},getUnstartedCTA:function e(t,r){return i18n._("Get %(goal)s of %(total)s questions to level up!",{goal:t,total:r})},practice:i18n._("Practice"),start:i18n._("Start"),takeUnitTest:i18n._("Take unit test to level up!"),tryAgain:i18n._("Try again"),wellDone:i18n._("Well done, you have achieved mastery!"),upNextForYou:i18n._("Up next for you:")}
var isFamiliarOrAbove=function e(t){return[_masteryUtils.constants.FAMILIAR,_masteryUtils.constants.PROFICIENT,_masteryUtils.constants.MASTERED].includes(t)}
var getMasteryInstruction=function e(t,r){var a=(0,_masteryUtils.getGoalForCount)(t,r)
if(isFamiliarOrAbove(r)){return _masteryUtils.masteryDisplayNames[r]}else if(r===_masteryUtils.constants.ATTEMPTED){return strings.getAttemptedCTA(a,t)}else{return strings.getUnstartedCTA(a,t)}}
var getTypeAndText=function e(t,r){var a=[_masteryUtils.constants.FAMILIAR,_masteryUtils.constants.ATTEMPTED].includes(t)
if(a){return{type:"secondary",text:strings.tryAgain}}else{return{type:r?"primary":"secondary",text:r?strings.start:strings.practice}}}
var getCTAButton=function e(t,r){var a=getTypeAndText(t,r),o=a.type,n=a.text
return React.createElement(_button2.default,{width:constants.buttonWidth,size:"small",type:o,color:_wonderBlocksColorV2.default.blue},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,n))}
var getMasteryCTA=function e(t){var r=t.item,a=t.item.mastery,o=t.highlight,n=t.isUpNext
var i=getContentItemNavigationConversions(r,"call_to_action",n)
switch(a){case"mastered":return null
case"proficient":var s=function e(){return(0,_scrollToSlug2.default)("practice-test","top",undefined,true)}
return React.createElement(_clientLink2.default,{className:(0,_aphrodite.css)(styles.textButton,styles.textButtonAnchor),to:"#practice-test",onClick:s,conversions:i},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.textButtonText},strings.takeUnitTest))
default:return React.createElement(_clientLink2.default,{className:(0,_aphrodite.css)(styles.cta),to:(0,_modalUtils.getModalUrlForContent)(r),conversions:i},getCTAButton(a,o))}}
var getContentItemNavigationConversions=function e(t,r,a){return(0,_getNavigationConversions2.default)({contentKind:t.kind,contentSlug:t.slug,referrerModule:"mastery_practice_content_item",referrerElement:r,isUpNext:a})}
var MasteryPracticeContentItem=function e(t){var r=t.item,a=t.item,o=a.expectedDoNCount,n=a.mastery,i=a.title,s=t.highlight,l=t.domain,c=t.isUpNext,u=t.isLoadingUserProgressData,m=t.history
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.container,styles.practiceItemMarginTop,styles.practiceItemMarginBottom,c&&styles.upNextContainer],onClick:function e(t){_bigbingo2.default.markConversionsWithExtras(getContentItemNavigationConversions(r,"chrome_background",c))
m.push((0,_modalUtils.getModalUrlForContent)(r))},"data-test-id":"mastery-practice-content-item"},React.createElement(_wonderBlocksCoreV.View,{style:styles.content},React.createElement(_wonderBlocksCoreV.View,null,c&&!u&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.upNextForYou},strings.upNextForYou),React.createElement(_clientLink2.default,{to:(0,_modalUtils.getModalUrlForContent)(r),conversions:getContentItemNavigationConversions(r,"title",c)},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.title},i)),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.masteryInstruction},getMasteryInstruction(o,n))),React.createElement(_wonderBlocksCoreV.View,{style:styles.masteryCTA,onClick:function e(t){return t.stopPropagation()}},getMasteryCTA({item:r,highlight:s,isUpNext:c}))),React.createElement(_wonderBlocksCoreV.View,{style:styles.mastery},u?React.createElement(_timeoutSpinner2.default,{sentryId:"mastery_practice_content_item",description:"Loading user progress data for mastery practice item",size:"xsmall",sentryTeam:"learning-platform"}):React.createElement(_labeledSmallMasteryIndicator2.default,{level:n})))}
var styles=_aphrodite.StyleSheet.create({container:{background:_globalStyles.colors.gray97,borderRadius:_globalStyles.borderRadius,display:"flex",flexDirection:"row",justifyContent:"space-between",minHeight:constants.itemMinHeight,cursor:"pointer"},upNextContainer:{borderTop:"4px solid "+_wonderBlocksColorV2.default.blue},practiceItemMarginTop:(_practiceItemMarginTo={marginTop:constants.itemExtraMarginTop},_practiceItemMarginTo[_mediaQueries2.default.smOrSmaller]={marginTop:0,paddingTop:constants.itemVerticalSpacing},_practiceItemMarginTo),practiceItemMarginBottom:(_practiceItemMarginBo={},_practiceItemMarginBo[_mediaQueries2.default.smOrSmaller]={paddingBottom:constants.itemVerticalSpacing,marginBottom:constants.itemVerticalSpacing},_practiceItemMarginBo),content:{padding:"12px 12px 14px",display:"flex",flexDirection:"column",justifyContent:"space-between"},title:{color:_wonderBlocksColorV2.default.offBlack},titleHovered:{textDecoration:"underline"},masteryInstruction:(_masteryInstruction={color:_wonderBlocksColorV2.default.offBlack64,marginBottom:constants.masteryInstructionBottomMargin,marginTop:constants.masteryInstructionTopMargin},_masteryInstruction[_mediaQueries2.default.smOrSmaller]={display:"none"},_masteryInstruction),masteryCTA:(_masteryCTA={},_masteryCTA[_mediaQueries2.default.smOrSmaller]={marginTop:8},_masteryCTA),cta:{":hover":{textDecoration:"none"}},textButton:{cursor:"pointer",padding:0,":hover":{color:_globalStyles.colors.kaGreenHover}},textButtonAnchor:{textDecoration:"none",":hover":{color:_globalStyles.colors.kaGreenHover}},mastery:{alignItems:"center",borderLeft:"1px solid "+_globalStyles.colors.gray90,display:"flex",flex:"0 0 "+constants.masteryWidth+"px",justifyContent:"center"},buttonText:{color:_wonderBlocksColorV2.default.white},textButtonText:{color:_wonderBlocksColorV2.default.blue},upNextForYou:{paddingBottom:4,color:_wonderBlocksColorV2.default.blue}})
exports.default=(0,_reactRouterDom.withRouter)(MasteryPracticeContentItem)

});
KAdefine("javascript/content-library-package/components/practice-content-item.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _mdOrLarger,_rightSideWithText,_practiceItem,_practiceItemMarginTo,_practiceItemMarginBo,_practiceItemIcon,_progress,_mobileProgress
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _contentIcon=require("./content-icon.jsx")
var _contentIcon2=babelHelpers.interopRequireDefault(_contentIcon)
var _recommendedIcon=require("../icons/recommended-icon.jsx")
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _spring=require("../../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var _calculateUpNext=require("../utils/calculate-up-next.js")
var _modalUtils=require("../utils/modal-utils.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _practiceContentItemUtils=require("./practice-content-item-utils.js")
var i18n=require("../../shared-package/i18n.js")
var getActionText=function e(t,r,a,o){var i=o&&o.numAttempted!==o.numCorrect
if(a){return i18n._("Start")}else if(r==="unstarted"){return i18n._("Practice")}else if(r!=="complete"||i){return i18n._("Try again")}else if(t&&o){return(0,_practiceContentItemUtils.formatDate)(t,o.completedDate,true,true)}else{return null}}
var percentCorrect=function e(t){return Math.round(100*t.numCorrect/t.numAttempted)}
var getMobileProgress=function e(t,r,a){if(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.mobileProgress)},i18n._("%(bestScore)s%",{bestScore:percentCorrect(t)})," ",a&&(0,_practiceContentItemUtils.formatDate)(a,t.completedDate,true,true))}else if(r){return React.createElement("div",{className:(0,_aphrodite.css)(styles.mobileProgress)},i18n._("100%"))}else{return null}}
var getProgress=function e(t,r,a){var o=a===0?"":i18n.ngettext("%(num)s question","%(num)s questions",a)
var i=""
if(t){i=i18n._("%(bestScore)s%",{bestScore:percentCorrect(t)})}else if(r){i=i18n._("100%")}else{i=o}return React.createElement(_wonderBlocksTypographyV.Body,{style:styles.progress},i)}
var PracticeContentItem=function e(t){var r=t.moment,a=t.item,o=t.isFirst,i=t.isLast,l=t.highlight,c=t.domain
var n=a.kind,s=a.status,m=a.title,d=a.recommended,u=a.expectedDoNCount,p=a.bestScore
var g=l?ContentsWithButton:ContentsWithText
var f=getActionText(r,s,l,p)
var y=s==="complete"&&!p
var b=(0,_modalUtils.getModalUrlForContent)(a)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.practiceItem,!o&&styles.practiceItemMarginTop,!i&&styles.practiceItemMarginBottom)},React.createElement("div",{className:(0,_aphrodite.css)(styles.practiceItemIcon)},React.createElement(_contentIcon2.default,{size:24,kind:n,completed:s==="complete",started:s==="started"}),d&&React.createElement(_recommendedIcon.SmallRecommendedIcon,{backgroundColor:_globalStyles.colors.gray98,top:-5,left:17})),React.createElement(g,{perfectScore:!!p&&(0,_calculateUpNext.isPerfectScore)(p),bestScore:p,title:React.createElement("div",{className:(0,_aphrodite.css)(styles.practiceItemLink)},React.createElement(_clientLink2.default,{to:b},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.title},m))),mobileProgress:getMobileProgress(p,y,r),progress:getProgress(p,y,u),action:f,href:b}),React.createElement(_strut2.default,{size:12}))}
var ContentsWithButton=function e(t){var r=t.title,a=t.progress,o=t.action,i=t.href
return React.createElement("div",{className:(0,_aphrodite.css)(styles.rightSideWithButton)},React.createElement("div",{className:(0,_aphrodite.css)(styles.middle)},React.createElement(_strut2.default,{size:12}),r,React.createElement(_strut2.default,{size:6}),a,React.createElement(_strut2.default,{size:6})),React.createElement(_strut2.default,{size:12}),React.createElement(_spring2.default,null),React.createElement("div",{className:(0,_aphrodite.css)(styles.practiceButtonContainer)},React.createElement(_clientLink2.default,{to:i},React.createElement(_button2.default,{size:"small",type:"primary",padding:18,color:_wonderBlocksColorV2.default.blue},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.buttonText},o)))))}
var ContentsWithText=function e(t){var r=t.title,a=t.progress,o=t.mobileProgress,i=t.bestScore,l=t.action,c=t.perfectScore,n=t.href
var s=c?_globalStyles.colors.gray41:_globalStyles.colors.kaGreen
var m=!i||(0,_calculateUpNext.isPerfectScore)(i)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.rightSideWithText)},r,React.createElement("div",{className:(0,_aphrodite.css)(!o&&styles.mdOrLarger)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.bottom)},a,o,React.createElement("div",{style:{color:s},className:(0,_aphrodite.css)(styles.practiceButtonContainer,c&&styles.completedButtonText,m&&styles.mdOrLarger)},c&&l,!c&&React.createElement(_clientLink2.default,{to:n},React.createElement(_button2.default,{size:"small",type:"text",padding:0,color:_wonderBlocksColorV2.default.blue},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.textButtonText},l))))))}
var ITEM_VERTICAL_SPACING=11
var styles=_aphrodite.StyleSheet.create({rightSideWithButton:{flexDirection:"row",display:"flex",alignItems:"flex-end",paddingBottom:8,flex:1},mdOrLarger:(_mdOrLarger={},_mdOrLarger[_mediaQueries2.default.smOrSmaller]={display:"none"},_mdOrLarger),progressSpacer:{flexBasis:6},rightSideWithText:(_rightSideWithText={flexDirection:"column",display:"flex",alignItems:"stretch",flex:1,paddingTop:12,paddingBottom:8},_rightSideWithText[_mediaQueries2.default.smOrSmaller]={paddingTop:0,paddingBottom:0},_rightSideWithText),middle:{flexDirection:"column",display:"flex",alignItems:"flex-start"},bottom:{flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center"},rightSide:{flex:1,alignItems:"stretch",display:"flex",flexDirection:"column"},bottomRow:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginRight:12},practiceItem:(_practiceItem={display:"flex",flexDirection:"row",alignItems:"flex-start",maxWidth:386,borderRadius:_globalStyles.borderRadius},_practiceItem[_mediaQueries2.default.mdOrLarger]={background:_globalStyles.colors.gray97},_practiceItem[":hover"]={textDecoration:"none"},_practiceItem),practiceItemMarginTop:(_practiceItemMarginTo={marginTop:16},_practiceItemMarginTo[_mediaQueries2.default.smOrSmaller]={marginTop:0,paddingTop:ITEM_VERTICAL_SPACING},_practiceItemMarginTo),practiceItemMarginBottom:(_practiceItemMarginBo={},_practiceItemMarginBo[_mediaQueries2.default.smOrSmaller]={paddingBottom:ITEM_VERTICAL_SPACING},_practiceItemMarginBo),practiceItemLink:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:0,padding:0,margin:0,flex:1},practiceItemLinkHovered:{textDecoration:"underline"},practiceItemIcon:(_practiceItemIcon={display:"flex",margin:12,marginRight:16,flexShrink:0,position:"relative"},_practiceItemIcon[_mediaQueries2.default.smOrSmaller]={margin:0,marginRight:16},_practiceItemIcon),practiceButtonContainer:{minWidth:75,display:"flex",flexDirection:"column",alignItems:"center"},completedButtonText:{fontWeight:"normal",marginTop:7,marginBottom:6},progress:(_progress={textAlign:"right",color:_wonderBlocksColorV2.default.offBlack64},_progress[_mediaQueries2.default.smOrSmaller]={display:"none"},_progress),mobileProgress:(_mobileProgress={textAlign:"right",color:_wonderBlocksColorV2.default.offBlack64},_mobileProgress[_mediaQueries2.default.mdOrLarger]={display:"none"},_mobileProgress),title:{color:_wonderBlocksColorV2.default.offBlack},buttonText:{color:_wonderBlocksColorV2.default.white},textButtonText:{color:_wonderBlocksColorV2.default.blue}})
exports.default=(0,_createMomentLoader2.default)(PracticeContentItem)

});
KAdefine("javascript/content-library-package/components/practice-content-item-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var i18n=require("../../shared-package/i18n.js")
var formatDate=exports.formatDate=function e(a,r,t,o){var d=i18n._("Yesterday")
var n=i18n._("Today")
var M=i18n._("Tomorrow")
var s={lastDay:"["+d+"]",sameDay:"["+n+"]",nextDay:"["+M+"]",lastWeek:o?"dddd":"MMMM Do",nextWeek:o?"dddd":"MMMM Do",sameElse:"MMMM Do"}
var v="h:mm A"
var i=a(r).calendar(null,s)
if(t){return i}else{var l=a(r).format(v)
return i+", "+l}}

});
KAdefine("javascript/content-library-package/components/sat-banner.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _bannerContainer,_booksIllustration,_logoContainer,_partnershipLogo,_line,_officialSATLogo,_checkList
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _closeIcon=require("../../reusable-components-package/close-icon.jsx")
var _closeIcon2=babelHelpers.interopRequireDefault(_closeIcon)
var _controlButton=require("../../components/button-package/control-button.jsx")
var _controlButton2=babelHelpers.interopRequireDefault(_controlButton)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var i18n=require("../../shared-package/i18n.js")
var check="M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10\nS3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4\nl0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1\n-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,\n10,3.8z"
var SatBanner=function(e){babelHelpers.inherits(a,e)
function a(){babelHelpers.classCallCheck(this,a)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}a.prototype.render=function e(){var a=this.props.onClose
return React.createElement(_wonderBlocksCoreV.View,{style:styles.bannerContainer},React.createElement("img",{alt:"",className:(0,_aphrodite.css)(styles.booksIllustration),src:(0,_staticUrl2.default)("/images/sat-banner/books.svg")}),React.createElement(_wonderBlocksCoreV.View,{style:styles.logoContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.partnershipLogo},React.createElement(_wonderBlocksTypographyV.LabelSmall,null,i18n.doNotTranslate("In partnership with ")),React.createElement("img",{alt:"CollegeBoard",src:(0,_staticUrl2.default)("/images/sat-banner/college-board-grey-logo.svg"),className:(0,_aphrodite.css)(styles.logoImage)})),React.createElement("img",{alt:"Official SAT® Practice",className:(0,_aphrodite.css)(styles.officialSATLogo),src:(0,_staticUrl2.default)("/images/sat-banner/official.svg")})),React.createElement(_wonderBlocksCoreV.View,{style:styles.line},React.createElement("svg",{width:40,height:100,viewBox:"0 0 40 200"},React.createElement("line",{x1:20,x2:20,y1:0,y2:200,strokeWidth:"2",stroke:_wonderBlocksColorV2.default.offBlack32,strokeLinecap:"round"}))),React.createElement(_wonderBlocksCoreV.View,{style:styles.checkList},React.createElement(_wonderBlocksTypographyV.LabelMedium,null,React.createElement(_icon2.default,{icon:check,color:_wonderBlocksColorV2.default.offBlack64,className:(0,_aphrodite.css)(styles.checkIcon),size:20}),i18n._("Practice plans personalized to you")),React.createElement(_wonderBlocksTypographyV.LabelMedium,null,React.createElement(_icon2.default,{icon:check,color:_wonderBlocksColorV2.default.offBlack64,className:(0,_aphrodite.css)(styles.checkIcon),size:20}),i18n._("8 real, full-length practice tests")),React.createElement(_wonderBlocksTypographyV.LabelMedium,null,React.createElement(_icon2.default,{icon:check,color:_wonderBlocksColorV2.default.offBlack64,className:(0,_aphrodite.css)(styles.checkIcon),size:20}),i18n._("20 hrs of practice asssociated with 115 points score gain"))),React.createElement(_button2.default,{color:_wonderBlocksColorV2.default.blue,href:"/mission/sat"},i18n._("Practice")),React.createElement("div",{className:(0,_aphrodite.css)(styles.closeIconContainer)},React.createElement(_controlButton2.default,{onClick:a,padding:8},React.createElement(_closeIcon2.default,{size:8,iconSize:8,"aria-label":"Close SAT banner"}))))}
return a}(_react.Component)
exports.default=SatBanner
var styles=_aphrodite.StyleSheet.create({bannerContainer:(_bannerContainer={position:"relative",display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:_wonderBlocksColorV2.default.offWhite,borderRadius:_globalStyles.borderRadius,padding:20},_bannerContainer[_mediaQueries2.default.smOrSmaller]={flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},_bannerContainer),closeIconContainer:{position:"absolute",top:0,right:0},booksIllustration:(_booksIllustration={width:80},_booksIllustration[_mediaQueries2.default.smOrSmaller]={display:"none"},_booksIllustration),logoContainer:(_logoContainer={paddingLeft:24},_logoContainer[_mediaQueries2.default.smOrSmaller]={alignItems:"center",padding:0},_logoContainer),partnershipLogo:(_partnershipLogo={width:280,alignItems:"center",flexDirection:"row",paddingBottom:12,color:_wonderBlocksColorV2.default.offBlack64},_partnershipLogo[_mediaQueries2.default.smOrSmaller]={width:"unset"},_partnershipLogo),line:(_line={},_line[_mediaQueries2.default.smOrSmaller]={display:"none"},_line),officialSATLogo:(_officialSATLogo={width:280,maxWidth:"100%"},_officialSATLogo[_mediaQueries2.default.mdOrSmaller]={width:"100%"},_officialSATLogo),checkList:(_checkList={flexGrow:1},_checkList[_mediaQueries2.default.mdOrSmaller]={textAlign:"start",padding:8},_checkList),checkIcon:{paddingRight:8,paddingTop:4},logoImage:{padding:"0px 0px 2px 4px"}})

});
KAdefine("javascript/content-library-package/components/test-prep-banner.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_logoAndTitleContaine,_mdOrLarger,_smOrSmaller
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _partnerBranding=require("../../test-prep-package/app-common/components/partner-branding.jsx")
var _partnerBranding2=babelHelpers.interopRequireDefault(_partnerBranding)
var i18n=require("../../shared-package/i18n.js")
var SatBanner=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderBranding=function e(){return React.createElement("div",null,React.createElement(_partnerBranding2.default,{kaRelationshipToTestCopy:"A collaboration with the makers of the LSAT",testMakerLogoImg:"/images/test_prep/lsat/lsac-logo.svg",testMaker:"LSAC"}))}
r.prototype.render=function e(){var r=this.props,a=r.examId,t=r.examName
var l=React.createElement(_wonderBlocksTypographyV.HeadingLarge,{tag:"span"},i18n.doNotTranslate("Official "+t+" Prep"))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("img",{alt:"","aria-hidden":"true",className:(0,_aphrodite.css)(styles.mdOrLarger,styles.image),src:(0,_staticUrl2.default)("/images/test_prep/lsat/generic-law.svg")}),React.createElement("div",{className:(0,_aphrodite.css)(styles.strut22,styles.mdOrLarger)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.logoAndTitleContainer)},this.renderBranding(),React.createElement("div",{className:(0,_aphrodite.css)(styles.strut22,styles.smOrSmaller)}),l),React.createElement("div",{className:(0,_aphrodite.css)(styles.spring,styles.mdOrLarger)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.strut22,styles.smOrSmaller)}),React.createElement(_button2.default,{width:90,color:_wonderBlocksColorV2.default.blue,href:"/prep/"+a+"/start"},i18n._("Start")))}
return r}(_react.Component)
exports.default=SatBanner
var styles=_aphrodite.StyleSheet.create({container:(_container={position:"relative",display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:_wonderBlocksColorV2.default.offWhite,borderRadius:_globalStyles.borderRadius,padding:20},_container[_mediaQueries2.default.smOrSmaller]={flexDirection:"column",justifyContent:"center",alignItems:"center"},_container),logoAndTitleContainer:(_logoAndTitleContaine={display:"flex",flexDirection:"column",alignItems:"flex-start",paddingRight:22},_logoAndTitleContaine[_mediaQueries2.default.smOrSmaller]={alignItems:"center",paddingRight:0},_logoAndTitleContaine),mdOrLarger:(_mdOrLarger={},_mdOrLarger[_mediaQueries2.default.smOrSmaller]={display:"none"},_mdOrLarger),smOrSmaller:(_smOrSmaller={},_smOrSmaller[_mediaQueries2.default.mdOrLarger]={display:"none"},_smOrSmaller),image:{height:75},spring:{flexGrow:1},strut22:{flexBasis:22,flexShrink:0},strut19:{flexBasis:19,flexShrink:0},strut16:{flexBasis:16,flexShrink:0}})

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-course-challenge.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _masteryTopicSidebarTest=require("./mastery-topic-sidebar-test.jsx")
var _masteryTopicSidebarTest2=babelHelpers.interopRequireDefault(_masteryTopicSidebarTest)
var MasteryTopicSidebarCourseChallenge=function e(r){return React.createElement(_masteryTopicSidebarTest2.default,babelHelpers.extends({},r,{test:r.subjectChallenge}))}
exports.default=MasteryTopicSidebarCourseChallenge

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-item.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var getItemHashUrl=function e(r){return""+window.location.origin+window.location.pathname+"#"+r}
var navigateToSlug=function e(r){_bigbingo2.default.markConversion("topic_progress_sidebar_navigate",{kind:"Tutorial"})
var o=window.location.hash.slice(1)
if(o!==r){window.location.href=getItemHashUrl(r);(0,_scrollToSlug2.default)(r,"top",undefined,true)}}
var MasteryTopicSidebarItem=function e(r){var o=r.hideDivider,t=r.isFooter,a=r.slug,l=r.title,i=r.children
return React.createElement("a",{className:(0,_aphrodite.css)(styles.item,t&&styles.footer,o&&styles.noDivider),onClick:function e(r){r.preventDefault()
navigateToSlug(a)},href:getItemHashUrl(a)},l&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.title},l),React.createElement(_wonderBlocksTypographyV.Body,null,i))}
var BORDER_WIDTH=1
var styles=_aphrodite.StyleSheet.create({item:{display:"block",padding:"12px 0px 16px",borderColor:_wonderBlocksColorV2.default.offBlack16,borderStyle:"solid",borderTopWidth:BORDER_WIDTH,cursor:"pointer",textDecoration:"none",color:"inherit"},footer:{borderBottomWidth:BORDER_WIDTH,boxShadow:"0px -16px 24px -24px rgba(0, 0, 0, 0.64)"},noDivider:{borderStyle:"none"},title:{color:_wonderBlocksColorV2.default.offBlack}})
exports.default=MasteryTopicSidebarItem

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-tutorial.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _absoluteLinks=require("../../shared-package/absolute-links.js")
var _absoluteLinks2=babelHelpers.interopRequireDefault(_absoluteLinks)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _tooltip=require("../../components/tooltip-package/tooltip.jsx")
var _tooltip2=babelHelpers.interopRequireDefault(_tooltip)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _smallMasteryIndicator=require("../../mastery-package/small-mastery-indicator.jsx")
var _smallMasteryIndicator2=babelHelpers.interopRequireDefault(_smallMasteryIndicator)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var i18n=require("../../shared-package/i18n.js")
var removeNonExercises=function e(t){return t.filter(function(e){return e.kind==="Exercise"})}
var TooltipImage=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,l=Array(o),i=0;i<o;i++){l[i]=arguments[i]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={imageStatus:"loading"},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.getImageSrc=function e(){var t=this.props.slug
return _absoluteLinks2.default.safeLinkTo("https://s3.amazonaws.com/ka-exercise-screenshots/"+t+"_256.png")}
t.prototype.render=function e(){var t=this
var r=this.state.imageStatus
if(r==="error"){return React.createElement("span",{className:(0,_aphrodite.css)(styles.previewNotAvailable)},i18n._("Preview not available for this exercise."))}return React.createElement("div",null,r==="loading"&&React.createElement(_spinner2.default,null),React.createElement("img",{alt:"","aria-hidden":true,src:(0,_staticUrl2.default)(this.getImageSrc()),className:(0,_aphrodite.css)(styles.previewImage),onLoad:function e(){return t.setState({imageStatus:"loaded"})},onError:function e(){return t.setState({imageStatus:"error"})}}))}
return t}(_react.Component)
var ToolTipContent=function e(t){var r=t.exercise
var a=r.slug,s=r.title
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipHeading)},React.createElement(_wonderBlocksTypographyV.LabelLarge,null,s),r.mastery!=="unfamiliar"&&React.createElement("div",null,React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.tooltipMastery},(0,_masteryUtils.getMasteryDisplay)(r.mastery)))),React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipContent)},React.createElement(TooltipImage,{slug:a})))}
var MasteryTopicSidebarTutorial=function e(t){var r=t.tutorial.contentItems
var a=removeNonExercises(r)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.progressIndicatorContainer)},a.map(function(e){return React.createElement(_tooltip2.default,{key:e.contentId,content:React.createElement(ToolTipContent,{exercise:e}),side:"right",dismissOnScroll:true,horizontalAlignment:"left",horizontalTooltipShift:4,offset:10,zIndex:_constants2.default.zindexHeader+1},React.createElement("div",{className:(0,_aphrodite.css)(styles.progressIndicator)},React.createElement(_smallMasteryIndicator2.default,{level:e.mastery})))}))}
var PROGRESS_SIDE_SPACING=2
var PROGRESS_LINE_SPACING=PROGRESS_SIDE_SPACING*2
var PROGRESS_MARGIN_BOTTOM=PROGRESS_LINE_SPACING+8
var styles=_aphrodite.StyleSheet.create({progressIndicatorContainer:{position:"relative",display:"flex",flexWrap:"wrap",paddingTop:8,marginLeft:-PROGRESS_SIDE_SPACING,marginBottom:-PROGRESS_MARGIN_BOTTOM},progressIndicator:{paddingBottom:PROGRESS_LINE_SPACING},tooltipContainer:{minWidth:280,margin:-22},tooltipHeading:{borderBottom:"1px solid",color:_wonderBlocksColorV2.default.offBlack,padding:22,paddingBottom:8,textAlign:"center"},tooltipMastery:{color:_wonderBlocksColorV2.default.offBlack64},tooltipContent:{padding:22},previewImage:{width:248},previewNotAvailable:{color:_globalStyles.colors.gray68}})
exports.default=MasteryTopicSidebarTutorial

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-quiz.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.TitleWithScoreAndDate=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _aphrodite=require("aphrodite")
var _sidebarCopyUtils=require("../../mastery-package/sidebar-copy-utils.js")
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var i18n=require("../../shared-package/i18n.js")
var strings={getUnstartedQuizTitleText:function e(t){return i18n.ngettext("%(title)s: %(num)s question","%(title)s: %(num)s questions",t.numItems,{title:t.title})}}
var TitleWithScoreAndDate=exports.TitleWithScoreAndDate=function e(t){var r=t.title,a=t.scoreText,o=t.dateText
var l=React.createElement("span",{className:(0,_aphrodite.css)(styles.quizScore)},a)
return React.createElement("span",null,r,React.createElement("br",null),l," ",o)}
var getQuizTitleAndCopy=function e(t){var r=t.moment,a=t.quiz,o=t.masteryMap
var l=(0,_sidebarCopyUtils.getQuizDescription)(a,o,r)
var i=l.copy
if(a.score==null){return{title:strings.getUnstartedQuizTitleText(a),copy:i}}var n=l.scoreText,c=l.dateText
var s=a.title
return{title:React.createElement(TitleWithScoreAndDate,{title:s,scoreText:n,dateText:c}),copy:i}}
var MasteryTopicSidebarQuiz=(0,_createMomentLoader2.default)(function(e){var t=getQuizTitleAndCopy(e),r=t.title,a=t.copy
return React.createElement(_wonderBlocksCoreV.View,{style:styles.quizContainer},React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.quizTitle},r),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.quizContents},a))})
var styles=_aphrodite.StyleSheet.create({quizContainer:{display:"flex",flexDirection:"column"},quizTitle:{display:"block",color:_wonderBlocksColorV2.default.offBlack},quizScore:{fontWeight:700},quizContents:{display:"block",marginTop:4,color:_wonderBlocksColorV2.default.offBlack64}})
exports.default=MasteryTopicSidebarQuiz

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-test.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var _unitTestTrophy=require("../../mastery-package/unit-test-trophy.jsx")
var _unitTestTrophy2=babelHelpers.interopRequireDefault(_unitTestTrophy)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _sidebarCopyUtils=require("../../mastery-package/sidebar-copy-utils.js")
var _masteryTopicSidebarQuiz=require("./mastery-topic-sidebar-quiz.jsx")
var constants={textMaxWidth:160,trophyBottom:-16,trophyRight:5}
var MasteryTopicSidebarTest=(0,_createMomentLoader2.default)(function(e){var t=e.achievedMastery,r=e.test,a=e.moment
var o=r.title
var s=(0,_sidebarCopyUtils.getTestOrChallengeDescription)(r,t,a),l=s.scoreText,i=s.dateText,n=s.copy
var c=(0,_masteryUtils.isCourseChallenge)(r)?(0,_masteryUtils.isCourseChallengeComplete)(r.score)&&t:t
var p=r.score!=null?React.createElement(_masteryTopicSidebarQuiz.TitleWithScoreAndDate,{title:o,scoreText:l,dateText:i}):o
return React.createElement(_wonderBlocksCoreV.View,{style:styles.unitTestTextAndTrophyContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.textWrapper},React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.unitTestTitle},p),React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:styles.unitTestDescription},n)),React.createElement(_wonderBlocksCoreV.View,{style:styles.unitTestTrophy},React.createElement(_unitTestTrophy2.default,{fillCrown:c,width:106})))})
var styles=_aphrodite.StyleSheet.create({textWrapper:{maxWidth:constants.textMaxWidth,flexShrink:0},unitTestTextAndTrophyContainer:{flexDirection:"row",justifyContent:"space-between"},unitTestTitle:{color:_wonderBlocksColorV2.default.offBlack},unitTestDescription:{color:_wonderBlocksColorV2.default.offBlack64},unitTestTrophy:{alignSelf:"flex-end",bottom:constants.trophyBottom,position:"relative",right:constants.trophyRight}})
exports.default=MasteryTopicSidebarTest

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-unit-test.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _masteryTopicSidebarTest=require("./mastery-topic-sidebar-test.jsx")
var _masteryTopicSidebarTest2=babelHelpers.interopRequireDefault(_masteryTopicSidebarTest)
var MasteryTopicSidebarUnitTest=function e(r){return React.createElement(_masteryTopicSidebarTest2.default,babelHelpers.extends({},r,{test:r.unitTest}))}
exports.default=MasteryTopicSidebarUnitTest

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar-unit.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _progressBar=require("../../components/progress-package/progress-bar.jsx")
var _progressBar2=babelHelpers.interopRequireDefault(_progressBar)
var i18n=require("../../shared-package/i18n.js")
var strings={getMasteryTitle:function e(r,a,t){return i18n._("%(earned)s/%(available)s (%(percentage)s%)",{earned:r,available:a,percentage:t})}}
var MasteryTopicSidebarUnit=function e(r){var a=r.unitMasteryEnabled,t=r.subjectMasteryEnabled,o=r.masteryPercentage,s=r.masteryPointsEarned,l=r.masteryPointsAvailable
if(!t){return null}var n=strings.getMasteryTitle(s||0,l,o||0)
return React.createElement(_wonderBlocksCoreV.View,{style:styles.progressIndicatorContainer,title:n},a?React.createElement(_progressBar2.default,{length:228,max:100,value:o||0,thickness:8,fillColor:_wonderBlocksColorV2.default.purple,backgroundColor:_wonderBlocksColorV2.default.offBlack8,flatProgressEdge:true}):"——")}
var styles=_aphrodite.StyleSheet.create({progressIndicatorContainer:{position:"relative",flexWrap:"wrap",paddingTop:8}})
exports.default=MasteryTopicSidebarUnit

});
KAdefine("javascript/content-library-package/components/mastery-topic-sidebar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _sidebar
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _aphrodite=require("aphrodite")
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _masteryProgressLegendLauncher=require("../../mastery-package/mastery-progress-legend-launcher.jsx")
var _masteryProgressLegendLauncher2=babelHelpers.interopRequireDefault(_masteryProgressLegendLauncher)
var _masteryTopicSidebarItem=require("./mastery-topic-sidebar-item.jsx")
var _masteryTopicSidebarItem2=babelHelpers.interopRequireDefault(_masteryTopicSidebarItem)
var _masteryTopicSidebarTutorial=require("./mastery-topic-sidebar-tutorial.jsx")
var _masteryTopicSidebarTutorial2=babelHelpers.interopRequireDefault(_masteryTopicSidebarTutorial)
var _masteryTopicSidebarQuiz=require("./mastery-topic-sidebar-quiz.jsx")
var _masteryTopicSidebarQuiz2=babelHelpers.interopRequireDefault(_masteryTopicSidebarQuiz)
var _masteryTopicSidebarUnitTest=require("./mastery-topic-sidebar-unit-test.jsx")
var _masteryTopicSidebarUnitTest2=babelHelpers.interopRequireDefault(_masteryTopicSidebarUnitTest)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var i18n=require("../../shared-package/i18n.js")
var strings={skillSummary:i18n._("Skill Summary")}
var SkillSummary=function e(){return _react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.skillSummaryBody},_react2.default.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.skillSummaryText},strings.skillSummary),_react2.default.createElement(_masteryProgressLegendLauncher2.default,null))}
var MasteryTopicSidebar=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){window.addEventListener("popstate",this.focusOnPopstate)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("popstate",this.focusOnPopstate)}
t.prototype.focusOnPopstate=function e(){var t=document.location.hash.slice(1)
if(t){var a=document.querySelector('[data-slug="'+t+'"]')
if(a){a.focus()}}}
t.prototype.maybeRenderUnitTest=function e(){var t=this.props,a=t.unitMastery,r=t.unitTest,i=t.isLoadingUserProgressData
if(!r||i){return null}return _react2.default.createElement(_masteryTopicSidebarItem2.default,{isFooter:true,slug:r.slug},_react2.default.createElement(_masteryTopicSidebarUnitTest2.default,{unitTest:r,achievedMastery:(0,_masteryUtils.achievedMastery)(a.pointsEarned,a.pointsAvailable)}))}
t.prototype.render=function e(){var t=this.props,a=t.domain,r=t.tutorials,i=t.quizzes,s=t.masteryMap,l=t.isLoadingUserProgressData
return _react2.default.createElement("nav",{"aria-labelledby":"mastery-topic-sidebar-title",role:"navigation",className:(0,_aphrodite.css)(styles.sidebar),"data-test-id":"mastery-topic-sidebar"},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.sidebarBody)},_react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.sidebarBodyList)},_react2.default.createElement("li",{key:"skillSummary",className:(0,_aphrodite.css)(styles.skillSummary)},_react2.default.createElement(SkillSummary,null)),l?_react2.default.createElement(_timeoutSpinner2.default,{sentryId:"mastery_topic_sidebar_user_progress",description:"Loading user progress data",style:styles.spinner,sentryTeam:"learning-platform"}):r.map(function(e){var t=i[e.slug]
return[_react2.default.createElement("li",{key:e.slug},_react2.default.createElement(_masteryTopicSidebarItem2.default,{slug:e.slug,title:e.title},_react2.default.createElement(_masteryTopicSidebarTutorial2.default,{key:e.id,tutorial:e,domain:a}))),t&&_react2.default.createElement("li",{key:t.slug},_react2.default.createElement(_masteryTopicSidebarItem2.default,{slug:t.slug},_react2.default.createElement(_masteryTopicSidebarQuiz2.default,{quiz:t,masteryMap:s})))]}))),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.sidebarFooter)},this.maybeRenderUnitTest()))}
return t}(_react.PureComponent)
var constants={paddingSize:34,sidebarRightPadding:40,sidebarWidth:308}
var styles=_aphrodite.StyleSheet.create({sidebar:(_sidebar={maxHeight:"100%",display:"flex",flexDirection:"column",width:constants.sidebarWidth,marginLeft:"auto",marginRight:0,paddingBottom:constants.paddingSize},_sidebar[_mediaQueries2.default.lgOrSmaller]={marginLeft:0,width:constants.sidebarWidth-constants.sidebarRightPadding},_sidebar),sidebarHeader:{paddingTop:constants.paddingSize,paddingBottom:20},sidebarBody:{flex:"1 1 auto",overflowY:"auto",paddingRight:constants.sidebarRightPadding},sidebarBodyList:{width:248},sidebarFooter:{paddingRight:constants.sidebarRightPadding,paddingBottom:constants.paddingSize},skillSummary:{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:64,paddingBottom:12},skillSummaryBody:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},skillSummaryText:{display:"inline",lineHeight:"22px",marginRight:6},spinner:{height:"100vh"}})
exports.default=MasteryTopicSidebar

});
KAdefine("javascript/content-library-package/components/modal-route.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouterDom=require("react-router-dom")
var _muLambda=require("mu-lambda")
var _ravenJs=require("raven-js")
var _ravenJs2=babelHelpers.interopRequireDefault(_ravenJs)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _modalNavigatorStore=require("../redux/modal-navigator-store.js")
var _modalNavigatorStore2=babelHelpers.interopRequireDefault(_modalNavigatorStore)
var _calculateUpNext=require("../utils/calculate-up-next.js")
var _errorModal=require("../../components/modal-package/error-modal.jsx")
var _errorModal2=babelHelpers.interopRequireDefault(_errorModal)
var _wonderBlocksModalV=require("@khanacademy/wonder-blocks-modal-v1")
var canOpenItemInModal=function e(t){return["Article","Exercise","Video"].includes(t.kind)}
var isExercise=function e(t){return t.kind==="Exercise"}
var LetterToKind={v:"Video",a:"Article",e:"Exercise"}
var ModalRoute=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,i=Array(n),l=0;l<n;l++){i[l]=arguments[l]}return a=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),o),o.state={showErrorModal:false},o.handleOpenItem=function(e,t,r){_bigbingo2.default.markConversion("content_modal_open",(0,_modalNavigatorStore.getModalItemExtra)(e,r))
if(e.kind!=="InterspersedQuiz"){o.props.clearRecommendation(e)}var a=document.activeElement
var n=a&&function(){setTimeout(function(){return a.focus()},500)}
_modalNavigatorStore2.default.dispatch({type:"OpenItem",modalData:babelHelpers.extends({items:t,referrer:r,currentItem:e},e.kind==="Video"?{shouldAutoplay:true}:{}),onCloseModal:n})},o.handleOpenItemInTutorial=function(e,t,r){var a=o.props,n=a.quizzes,i=a.tutorials,l=a.unitTest
var s=[]
var u=null
for(var d=0;d<i.length;d++){var c=i[d]
s.push(c)
var p=void 0
if(n[c.slug]){p=n[c.slug]}else if(d===i.length-1&&l){p=l}if(p){if(s.find(function(t){var r=t.slug
return r===e.slug})){u=p
break}else{s=[]}}}var m=(0,_muLambda.flatMap)(function(e){return e.contentItems},s).filter(r)
if(u){m.push(u)}o.handleOpenItem(t,m,"topic_progress")},r),babelHelpers.possibleConstructorReturn(o,a)}t.prototype.componentDidMount=function e(){this.openItem()}
t.prototype.componentDidUpdate=function e(t){if(t.modalType!==this.props.modalType&&t.modalId!==this.props.modalId){this.openItem()}}
t.prototype.componentDidCatch=function e(t,r){this.setState({showErrorModal:true})
_ravenJs2.default.captureException(t,{extra:r})}
t.prototype.componentWillUnmount=function e(){_modalNavigatorStore2.default.dispatch({type:"CloseItem"})}
t.prototype.maybeRedirect=function e(){var t=this.props,r=t.history,o=t.location,a=t.modalId
if(a&&o){var n=o.pathname
var i=n.slice(0,n.indexOf("/modal/"))
r.replace(i)}}
t.prototype.openItem=function e(){var t=this.props,r=t.modalId,o=t.modalType,a=t.quizzes,n=t.unitTest,i=t.subjectChallenge,l=t.tutorials
try{if(o==="quiz"){var s=Object.values(a).find(function(e){return e.slug===r})
if(!s){return}this.handleOpenItem(s,[],"topic_progress_up_next")}else if(o==="test"){if(n){this.handleOpenItem(n,[],"topic_progress_up_next")}else if(i){this.handleOpenItem(i,[],"subject")}else{return null}}else if(o==="v"||o==="e"||o==="a"){var u=l.find(function(e){return e.contentItems.some(function(e){return e.slug===r&&e.kind===LetterToKind[o]})})
if(!u||u.contentItems.length===0){this.maybeRedirect()
return}var d={slug:u.slug}
var c=u.contentItems.find(function(e){return e.slug===r&&e.kind===LetterToKind[o]})
if(!c){this.maybeRedirect()
return}var p=o==="e"?function(e){return canOpenItemInModal(e)&&isExercise(e)}:function(e){return canOpenItemInModal(e)&&!isExercise(e)}
this.handleOpenItemInTutorial(d,c,p)}else{this.setState({showErrorModal:true})
_ravenJs2.default.captureMessage("Invalid modalType for ModalRoute",{extra:{modalType:o,modalId:r,path:location?location.pathname:undefined}})}}catch(e){this.setState({showErrorModal:true})
_ravenJs2.default.captureException(e)}}
t.prototype.handleClose=function e(){this.setState({showErrorModal:false})}
t.prototype.render=function e(){var t=this
if(this.state.showErrorModal){return React.createElement(_wonderBlocksModalV.ModalLauncher,{onClose:function e(){return t.handleClose()},opened:this.state.showErrorModal,modal:function e(t){var r=t.closeModal
return React.createElement(_errorModal2.default,{closeModal:r})}})}return null}
return t}(_react.PureComponent)
exports.default=(0,_reactRouterDom.withRouter)(ModalRoute)

});
KAdefine("javascript/content-library-package/components/available-width.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var AvailableWidth=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,i
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,o=Array(a),s=0;s<a;s++){o[s]=arguments[s]}return i=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),n),n.state={},n.updateSize=function(){var e=n,t=e.containerElem
if(!t){return}var r=t.getBoundingClientRect(),i=r.width
n.setState({width:i})},r),babelHelpers.possibleConstructorReturn(n,i)}t.prototype.componentDidMount=function e(){window.requestAnimationFrame(this.updateSize)
window.addEventListener("resize",this.updateSize)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("resize",this.updateSize)}
t.prototype.render=function e(){var t=this
var r=this.state.width
var n=this.props.children
return React.createElement("div",{ref:function e(r){return t.containerElem=r}},r!==undefined&&n(r))}
return t}(React.Component)
exports.default=AvailableWidth

});
KAdefine("javascript/content-library-package/components/subject-progress-sidebar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.SubjectProgressSidebar=undefined
var _sidebar
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getUserInfoForSubjectProgress($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n        }\n    }\n"],["\n    query getUserInfoForSubjectProgress($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _aphrodite=require("aphrodite")
var _reactRedux=require("react-redux")
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _masteryTopicSidebarItem=require("./mastery-topic-sidebar-item.jsx")
var _masteryTopicSidebarItem2=babelHelpers.interopRequireDefault(_masteryTopicSidebarItem)
var _masteryTopicSidebarUnit=require("./mastery-topic-sidebar-unit.jsx")
var _masteryTopicSidebarUnit2=babelHelpers.interopRequireDefault(_masteryTopicSidebarUnit)
var _masteryTopicSidebarCourseChallenge=require("./mastery-topic-sidebar-course-challenge.jsx")
var _masteryTopicSidebarCourseChallenge2=babelHelpers.interopRequireDefault(_masteryTopicSidebarCourseChallenge)
var _masterySubjectProgressSummary=require("../modules/mastery-subject-progress-summary.jsx")
var _masterySubjectProgressSummary2=babelHelpers.interopRequireDefault(_masterySubjectProgressSummary)
var _userInfoConstants=require("../../user-info-store-package/user-info-constants.js")
var _userInfoAdapters=require("../modules/user-info-adapters.js")
var i18n=require("../../shared-package/i18n.js")
var USER_INFO_QUERY=(0,_graphqlTag2.default)(_templateObject)
var strings={sidebarTitle:i18n._("Course summary")}
var SubjectProgressSidebar=exports.SubjectProgressSidebar=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,n=Array(i),o=0;o<i;o++){n[o]=arguments[o]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.updateUserInfoStore=function(e){if(e.user&&e.user.curationItemProgress&&e.user.curationItemProgress.currentMastery){var r=e.user.curationItemProgress.currentMastery
var t=(0,_userInfoAdapters.toMasteryMap)(e.user.curationItemProgress.masteryMap)
var a={masteryMap:t,subjectMasteryPercentage:r.percentage,subjectMasteryPointsEarned:r.pointsEarned,subjectMasteryPointsAvailable:r.pointsAvailable}
_userInfoStore2.default.dispatch({type:_userInfoConstants.LOAD_USER_INFO,userInfo:a})}},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.getRows=function e(){return this.props.rows.map(function(e){var r=e.masteryEnabled,t=e.subjectMasteryEnabled,a=e.masteryPercentage,s=e.masteryPointsAvailable,i=e.masteryPointsEarned,n=e.slug,o=e.title,l=e.url
return React.createElement("li",{key:l},React.createElement(_masteryTopicSidebarItem2.default,{hideDivider:true,slug:n,title:o},React.createElement(_masteryTopicSidebarUnit2.default,{unitMasteryEnabled:r,subjectMasteryEnabled:t,masteryEnabled:r,masteryPercentage:a,masteryPointsAvailable:s,masteryPointsEarned:i})))})}
r.prototype.maybeRenderCourseChallenge=function e(){var r=this.props,t=r.subjectChallenge,a=r.subjectMastery,s=r.isLoadingUserProgressData
if(!t||s){return null}return React.createElement(_wonderBlocksCoreV.View,{style:styles.sidebarFooter},React.createElement(_masteryTopicSidebarItem2.default,{isFooter:true,slug:t.slug},React.createElement(_masteryTopicSidebarCourseChallenge2.default,{achievedMastery:(0,_masteryUtils.achievedMastery)(a.pointsEarned,a.pointsAvailable),subjectChallenge:t})))}
r.prototype.renderWithQuery=function e(){var r=this.props,t=r.progressSummaryModule,a=r.masteryEnabled,s=r.subjectMastery,i=r.isLoadingUserProgressData
return React.createElement("nav",{"aria-labelledby":"subject-progress-sidebar-title",role:"navigation",className:(0,_aphrodite.css)(styles.sidebar)},React.createElement(_wonderBlocksCoreV.View,{style:styles.sidebarBody},t&&!i&&React.createElement(_masterySubjectProgressSummary2.default,babelHelpers.extends({},t,{subjectMastery:s})),React.createElement("ul",{className:(0,_aphrodite.css)(styles.sidebarBodyList,a&&styles.masterySidebarBodyList)},React.createElement("li",null,React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:[styles.sidebarTitle,a&&styles.masterySidebarTitle]},strings.sidebarTitle)),i?React.createElement(_wonderBlocksCoreV.View,{style:styles.spinner},React.createElement(_timeoutSpinner2.default,{sentryId:"subject_progress_sidebar",description:"Loading user progress for subject sidebar",sentryTeam:"learning-platform"})):this.getRows())),this.maybeRenderCourseChallenge())}
r.prototype.render=function e(){var r=this
if(this.props.masteryEnabled&&this.props.progressSummaryModule){return React.createElement(_kaQuery2.default,{query:USER_INFO_QUERY,variables:{topicId:this.props.progressSummaryModule.topicId},onlyFetchesUserData:true,refetchOnClientSideNav:true,onCompleted:this.updateUserInfoStore},function(){return r.renderWithQuery()})}else{return this.renderWithQuery()}}
return r}(React.Component)
SubjectProgressSidebar.defaultProps={masteryEnabled:false,subjectMastery:{percentage:0,pointsEarned:0,pointsAvailable:0}}
var mapStateToProps=function e(r,t){if(!r.subjectMastery||!r.subjectMastery.pointsAvailable){if(t.progressSummaryModule){return babelHelpers.extends({},t,{subjectMastery:{percentage:0,pointsEarned:0,pointsAvailable:t.progressSummaryModule.pointsAvailable}})}else{return t}}return babelHelpers.extends({},t,{subjectMastery:babelHelpers.extends({},r.subjectMastery)})}
var ConnectedSubjectProgressSidebar=(0,_reactRedux.connect)(mapStateToProps)(SubjectProgressSidebar)
exports.default=function(e){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedSubjectProgressSidebar,e))}
var constants={borderWidth:1,footerMarginTop:24,footerHeight:136,internalVerticalPadding:12,listWidth:248,sidebarRightPadding:40,sidebarWidth:308,verticalPadding:32}
var styles=_aphrodite.StyleSheet.create({sidebar:(_sidebar={display:"flex",flexDirection:"column",width:constants.sidebarWidth,marginLeft:"auto",paddingTop:constants.verticalPadding,paddingBottom:constants.verticalPadding},_sidebar[_mediaQueries2.default.lgOrSmaller]={width:constants.sidebarWidth-constants.sidebarRightPadding},_sidebar),sidebarTitle:{borderColor:_wonderBlocksColorV2.default.offBlack16,borderStyle:"solid",borderBottomWidth:constants.borderWidth,paddingBottom:constants.internalVerticalPadding},masterySidebarTitle:{borderTopWidth:constants.borderWidth,paddingTop:constants.verticalPadding},sidebarBody:{flex:"1 1 auto",overflowY:"auto",paddingRight:constants.sidebarRightPadding},sidebarBodyList:{width:constants.listWidth},masterySidebarBodyList:{marginTop:constants.internalVerticalPadding},sidebarFooter:{display:"block",minHeight:"unset",paddingRight:constants.sidebarRightPadding},spinner:{height:"100vh",paddingTop:constants.verticalPadding}})

});
KAdefine("javascript/content-library-package/components/topic-assessment-start-of-task-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_newTabIcon,_showIcon,_boundingBox,_timeEstimateMobile
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _exerciseStartOfTaskCardDoN=require("../../exercise-task-card-package/exercise-start-of-task-card-do-n.jsx")
var _exerciseStartOfTaskCardDoN2=babelHelpers.interopRequireDefault(_exerciseStartOfTaskCardDoN)
var _link=require("../../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _bigBingoLinks=require("../../page-package/big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _timeEstimate=require("./time-estimate.jsx")
var _timeEstimate2=babelHelpers.interopRequireDefault(_timeEstimate)
var i18n=require("../../shared-package/i18n.js")
var newTabIcon={path:"M15,6.70710678 L8.85355339,12.8535534 C8.65829124,13.0488155 8.34170876,13.0488155 8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 L14.2928932,6 L9.5,6 C9.22385763,6 9,5.77614237 9,5.5 C9,5.22385763 9.22385763,5 9.5,5 L15.4999999,5 C15.5639806,5 15.6279612,5.01220388 15.6881505,5.03661165 C15.8740801,5.11519661 16,5.29289322 16,5.5 L16,11.5 C16,11.7761424 15.7761424,12 15.5,12 C15.2238576,12 15,11.7761424 15,11.5 L15,6.70710678 Z",width:16,height:18}
var TopicAssessmentStartOfTaskCard=function(e){babelHelpers.inherits(t,e)
function t(a){babelHelpers.classCallCheck(this,t)
var i=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
i.state={isExpanded:false}
return i}t.prototype.render=function e(){var t=this
var a=this.props,i=a.domain,r=a.numItems,s=a.topic.masteryEnabled,n=a.timeEstimate,l=a.tutorials,o=a.type
var c=this.state.isExpanded
var u=void 0
if(s&&o==="quiz"){u=i18n.ngettext("Level up your skills in this lesson:","Level up your skills in these lessons:",l.length)}else if(s&&o==="test"){u=i18n.ngettext("Level up your skills in this unit's lesson:","Level up your skills in this unit's lessons:",l.length)}else{u=i18n.ngettext("Let's identify your areas for growth in this %(num)s lesson:","Let's identify your areas for growth in these %(num)s lessons:",l.length)}var d=4
var m=l.length>d&&!c?l.slice(0,d-1):l
var p=s?Math.ceil(r*.5):Math.ceil(r*.7)
return React.createElement(_exerciseStartOfTaskCardDoN2.default,{numRequiredForPromotion:p,taskType:o==="quiz"?"topic_quiz":"topic_unit_test",completionCriteria:{numRequired:r},masteryEnabled:s},React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("span",{className:(0,_aphrodite.css)(styles.description)},u),React.createElement(_strut2.default,{size:16}),m.map(function(e,t){var a=e.contentItems,r=e.slug,s=e.title
var n=_bigBingoLinks2.default.buildUrlWithoutExtras(["quiz_start_card_open_tutorial"],a[0].nodeUrl)
return React.createElement("div",{key:r,style:{color:(0,_globalStyles.domainColors)(i).domain3},className:(0,_aphrodite.css)(t>0&&styles.tutorialLinkPadding)},React.createElement(_hoverBehavior2.default,null,function(e,t){var a=e.hovered
return React.createElement(_link2.default,babelHelpers.extends({className:(0,_aphrodite.css)(styles.tutorialLink),href:n,target:"_blank"},t),React.createElement("div",{className:(0,_aphrodite.css)(styles.boundingBox,a&&styles.underline)},s),React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.newTabIcon,a&&styles.showIcon),icon:newTabIcon}))}))}),m.length<l.length&&React.createElement("div",{style:{color:(0,_globalStyles.domainColors)(i).domain3},className:(0,_aphrodite.css)(styles.tutorialLinkPadding)},React.createElement(_link2.default,{onClick:function e(){return t.setState({isExpanded:true})},className:(0,_aphrodite.css)(styles.tutorialLink)},i18n._("See %(num)s more",{num:l.length-m.length}))),React.createElement("span",{className:(0,_aphrodite.css)(styles.timeEstimateMobile)},React.createElement(_timeEstimate2.default,n))))}
return t}(React.Component)
exports.default=TopicAssessmentStartOfTaskCard
var styles=_aphrodite.StyleSheet.create({container:(_container={marginLeft:"auto",marginRight:"auto",width:448},_container[_mediaQueries2.default.smOrSmaller]={marginLeft:16,marginRight:16,width:"auto"},_container.display="flex",_container.flexDirection="column",_container),description:babelHelpers.extends({color:_globalStyles.colors.gray17},_globalStyles.typography.bodyXsmall),tutorialLink:babelHelpers.extends({},_globalStyles.typography.bodyXsmallBold),tutorialLinkPadding:{paddingTop:14},underline:{textDecoration:"underline"},newTabIcon:(_newTabIcon={transform:"translate(0px, 3px)"},_newTabIcon[_mediaQueries2.default.smOrSmaller]={display:"inline"},_newTabIcon[_mediaQueries2.default.mdOrLarger]={display:"none"},_newTabIcon),showIcon:(_showIcon={},_showIcon[_mediaQueries2.default.mdOrLarger]={display:"inline"},_showIcon),boundingBox:(_boundingBox={maxWidth:"100%",display:"inline-block",verticalAlign:"top",overflow:"hidden",textOverflow:"ellipsis"},_boundingBox[_mediaQueries2.default.smOrSmaller]={maxWidth:"calc(100% - 10px)"},_boundingBox),timeEstimateMobile:(_timeEstimateMobile={display:"none"},_timeEstimateMobile[_mediaQueries2.default.mdOrSmaller]={display:"inline",paddingTop:24},_timeEstimateMobile)})

});
KAdefine("javascript/content-library-package/components/topic-assessment-start-of-task-card-footer.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends,_timeEstimateDesktop
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _timeEstimate=require("./time-estimate.jsx")
var _timeEstimate2=babelHelpers.interopRequireDefault(_timeEstimate)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var i18n=require("../../shared-package/i18n.js")
var strings={startQuiz:i18n._("Start quiz"),startTest:i18n._("Start test"),startSubjectChallenge:i18n._("Start course challenge")}
var TopicAssessmentStartOfTaskCardFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.getCallToAction=function e(){var t=this.props.type
switch(t){case"quiz":return strings.startQuiz
case"test":return strings.startTest
case"subject-challenge":return strings.startSubjectChallenge
default:throw new Error("Invalid Interspersed Quiz type of "+t)}}
t.prototype.render=function e(){var t=this.props,r=t.numItems,s=t.onClick,a=t.timeEstimate
var l=i18n.ngettext("Do %(num)s problem","Do all %(num)s problems",r)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.footer)},React.createElement("span",{className:(0,_aphrodite.css)(styles.timeEstimateDesktop)},React.createElement(_timeEstimate2.default,a)),React.createElement("span",{className:(0,_aphrodite.css)(styles.spacer)}),React.createElement("span",{className:(0,_aphrodite.css)(styles.assessmentActionContainer)},React.createElement("span",{className:(0,_aphrodite.css)(styles.completionCriteriaCopy)},l),React.createElement(_strut2.default,{size:16}),React.createElement(_button2.default,{width:136,onClick:s,color:_wonderBlocksColorV2.default.blue},this.getCallToAction())))}
return t}(React.Component)
exports.default=TopicAssessmentStartOfTaskCardFooter
var styles=_aphrodite.StyleSheet.create({assessmentActionContainer:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"flex-end"},completionCriteriaCopy:babelHelpers.extends({},_globalStyles.typography.bodySmallBold,(_babelHelpers$extends={color:_globalStyles.colors.gray68,flexShrink:0},_babelHelpers$extends[_mediaQueries2.default.xsOrSmaller]={display:"none"},_babelHelpers$extends)),footer:{display:"flex",flexDirection:"row",alignItems:"center",flexGrow:1,flexShrink:0,padding:"10px 16px"},spacer:{flexGrow:1},timeEstimateDesktop:(_timeEstimateDesktop={display:"inline"},_timeEstimateDesktop[_mediaQueries2.default.mdOrSmaller]={display:"none"},_timeEstimateDesktop)})

});
KAdefine("javascript/content-library-package/components/topic-assessment-end-of-task-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_resultsContainer,_columnSeparator,_columnGutter,_babelHelpers$extends,_recommendationsConta,_newTabIcon,_showIcon,_boundingBox
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _link=require("../../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _recommendedIcon=require("../icons/recommended-icon.jsx")
var _recommendedIcon2=babelHelpers.interopRequireDefault(_recommendedIcon)
var _encircledIcon=require("../icons/encircled-icon.jsx")
var _encircledIcon2=babelHelpers.interopRequireDefault(_encircledIcon)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _masteryProgressIndicator=require("../../mastery-package/mastery-progress-indicator.jsx")
var _masteryProgressIndicator2=babelHelpers.interopRequireDefault(_masteryProgressIndicator)
var _exerciseEndOfTaskCardDoN=require("../../exercise-task-card-package/exercise-end-of-task-card-do-n.jsx")
var _exerciseEndOfTaskCardDoN2=babelHelpers.interopRequireDefault(_exerciseEndOfTaskCardDoN)
var i18n=require("../../shared-package/i18n.js")
var checkIcon="M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10\n    S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4\n    l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1\n    -0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,\n    10,3.8z"
var newTabIcon={path:"M15,6.70710678 L8.85355339,12.8535534 C8.65829124,13.0488155 8.34170876,13.0488155 8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 L14.2928932,6 L9.5,6 C9.22385763,6 9,5.77614237 9,5.5 C9,5.22385763 9.22385763,5 9.5,5 L15.4999999,5 C15.5639806,5 15.6279612,5.01220388 15.6881505,5.03661165 C15.8740801,5.11519661 16,5.29289322 16,5.5 L16,11.5 C16,11.7761424 15.7761424,12 15.5,12 C15.2238576,12 15,11.7761424 15,11.5 L15,6.70710678 Z",width:16,height:18}
var arrowRightIcon={path:"M94.192 49.84q0 3.472-2.352 5.824l-41.664 41.664q-2.576 2.352-5.824 2.352t-5.768-2.352l-4.816-4.816q-2.408-2.408-2.408-5.824t2.408-5.824l18.76-18.76l-45.024 0q-3.304 0-5.432-2.408-2.072-2.408-2.072-5.768l0-8.176q0-3.416 2.072-5.824t5.432-2.408l45.024 0l-18.76-18.816q-2.408-2.296-2.408-5.768t2.408-5.712l4.816-4.816q2.408-2.408 5.768-2.408t5.824 2.408l41.664 41.664q2.352 2.296 2.352 5.768z",width:94.494,height:100}
var copyForRecommendedTutorials=function e(r,t){var a=function e(r){var a=r.slug,s=r.title
return React.createElement(_link2.default,{className:(0,_aphrodite.css)(styles.primaryLink),onClick:function e(){return t(a)}},s)}
if(r.length===0){throw new Error("Cannot provide copy with recommendations.")}else if(r.length===1){return i18n.$_("We recommend the following lesson to help you learn: %(lesson)s.",{lesson:React.createElement(a,r[0])})}else if(r.length===2){return i18n.$_("We recommend the following lessons to help you learn: %(firstLesson)s and %(secondLesson)s.",{firstLesson:React.createElement(a,r[0]),secondLesson:React.createElement(a,r[1])})}else if(r.length===3){return i18n.$_("We recommend the following lessons to help you learn: %(firstLesson)s, %(secondLesson)s, and %(thirdLesson)s.",{firstLesson:React.createElement(a,r[0]),secondLesson:React.createElement(a,r[1]),thirdLesson:React.createElement(a,r[2])})}else if(r.length===4){return i18n.$_("We recommend the following lessons to help you learn: %(firstLesson)s, %(secondLesson)s, %(thirdLesson)s, and 1 other lesson.",{firstLesson:React.createElement(a,r[0]),secondLesson:React.createElement(a,r[1]),thirdLesson:React.createElement(a,r[2])})}else{return i18n.$_("We recommend the following lessons to help you learn: %(firstLesson)s, %(secondLesson)s, %(thirdLesson)s, and %(num)s other lessons.",{firstLesson:React.createElement(a,r[0]),secondLesson:React.createElement(a,r[1]),thirdLesson:React.createElement(a,r[2]),num:r.length-3})}}
var SkillLink=function e(r){var t=r.href,a=r.title,s=r.listMarker
return React.createElement(_hoverBehavior2.default,null,function(e,r){var o=e.hovered
return React.createElement(_link2.default,babelHelpers.extends({href:t,target:"_blank"},r),React.createElement("div",{className:(0,_aphrodite.css)(styles.boundingBox),title:a},s,React.createElement("span",{className:(0,_aphrodite.css)(o&&styles.underline)},a)),React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.newTabIcon,o&&styles.showIcon),icon:newTabIcon}))})}
var TopicAssessmentEndOfTaskCard=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderResults=function e(){var r=this.props.exercises
return React.createElement("div",{className:(0,_aphrodite.css)(styles.resultsContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.columnGutter)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.leftColumn)},r.map(function(e,r){var t=e.exerciseModel,a=e.correct
var s=React.createElement("span",{className:(0,_aphrodite.css)(styles.exerciseText)},i18n._("%(index)s. ",{index:r+1}))
return React.createElement("span",{key:r,className:(0,_aphrodite.css)(styles.exerciseRow,styles.exerciseText,styles.secondaryLink)},React.createElement(SkillLink,{href:"/"+t.nodeSlug,listMarker:s,title:t.title}))})),React.createElement("div",{className:(0,_aphrodite.css)(styles.columnSeparator)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.rightColumn)},r.map(function(e,r){var t=e.correct
return React.createElement("span",{key:r,className:(0,_aphrodite.css)(styles.exerciseRow,styles.correctnessText,t?styles.correctText:styles.incorrectText)},t&&React.createElement("span",{className:(0,_aphrodite.css)(styles.checkIconContainer)},React.createElement(_icon2.default,{icon:checkIcon,color:_globalStyles.colors.kaGreen})),t?i18n._("Correct"):i18n._("Incorrect"))})),React.createElement("div",{className:(0,_aphrodite.css)(styles.columnGutter)}))}
r.prototype.renderMasteryPromotions=function e(){var r=this.props.exercises
var t=r.map(function(e,r){var t=e.initialFpmLevel,a=e.finalFpmLevel,s=e.exerciseModel,o=s.nodeSlug,n=s.title
if(!t||!a){return null}var l=_masteryUtils.masteryValues.indexOf(t)
var i=_masteryUtils.masteryValues.indexOf(a)
var c=i-l
if(c===0){return null}return React.createElement("li",{className:(0,_aphrodite.css)(styles.masteryPromotionItemContainer),key:r},React.createElement("span",{className:(0,_aphrodite.css)(styles.exerciseText,styles.secondaryLink)},React.createElement(SkillLink,{href:"/"+o,title:n})),React.createElement("div",{className:(0,_aphrodite.css)(styles.masteryPromotionProgressIndicator)},React.createElement(_masteryProgressIndicator2.default,{mastery:t}),React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.masteryPromotionProgressArrow),color:c>0?_globalStyles2.default.colors.kaGreen:_globalStyles2.default.colors.alertRed,icon:arrowRightIcon}),React.createElement(_masteryProgressIndicator2.default,{mastery:a})))}).filter(function(e){return e})
var a=!!t.length
return a&&React.createElement("div",{className:(0,_aphrodite.css)(styles.masteryPromotionsContainer)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.masteryPromotionsHeader)},i18n._("Skill level changes")),React.createElement("ul",null,t))}
r.prototype.renderRecommendations=function e(){var r=this.props,t=r.onNavigate,a=r.recommendedTutorials
return React.createElement("div",{className:(0,_aphrodite.css)(styles.recommendationsContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconContainer)},React.createElement(_encircledIcon2.default,{size:40,color:_globalStyles.colors.white},React.createElement(_recommendedIcon2.default,{size:18}))),React.createElement(_strut2.default,{size:16}),React.createElement("div",{className:(0,_aphrodite.css)(styles.recommendationsText)},copyForRecommendedTutorials(a,t)))}
r.prototype.render=function e(){var r=this.props.masteryEnabled
var t=this.props.recommendedTutorials.length>0
return React.createElement(_exerciseEndOfTaskCardDoN2.default,this.props,React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},r&&this.renderMasteryPromotions(),t&&this.renderRecommendations(),t&&React.createElement(_strut2.default,{size:24}),this.renderResults()))}
return r}(_react.Component)
exports.default=TopicAssessmentEndOfTaskCard
var PROMOTIONS_BOTTOM_MARGIN=33
var PROMOTION_ITEM_PADDING=16
var PROMOTIONS_ARROW_SPACING=10
var styles=_aphrodite.StyleSheet.create({container:(_container={marginLeft:"auto",marginRight:"auto",width:448},_container[_mediaQueries2.default.smOrSmaller]={width:"auto"},_container.display="flex",_container.flexDirection="column",_container.alignItems="center",_container),resultsContainer:(_resultsContainer={display:"flex",flexDirection:"row",width:"100%"},_resultsContainer[_mediaQueries2.default.smOrSmaller]={marginLeft:16,marginRight:16},_resultsContainer),column:{display:"flex",flexDirection:"column"},leftColumn:{minWidth:0},rightColumn:{alignItems:"flex-end",flexShrink:0},columnSeparator:(_columnSeparator={flexGrow:1,flexShrink:0,flexBasis:24},_columnSeparator[_mediaQueries2.default.smOrSmaller]={flexBasis:16},_columnSeparator),columnGutter:(_columnGutter={flexShrink:0,flexBasis:0},_columnGutter[_mediaQueries2.default.smOrSmaller]={flexBasis:16},_columnGutter),exerciseRow:{height:36},exerciseText:babelHelpers.extends({},_globalStyles.typography.bodySmall,{color:_globalStyles.colors.gray17,whiteSpace:"nowrap",overflow:"hidden"}),correctnessText:babelHelpers.extends({},_globalStyles.typography.bodySmallBold,{flexShrink:0}),correctText:{color:_globalStyles.colors.kaGreen},incorrectText:{color:_globalStyles.colors.gray68},checkIconContainer:{paddingRight:6},masteryPromotionsContainer:{marginBottom:PROMOTIONS_BOTTOM_MARGIN,width:"100%"},masteryPromotionsHeader:babelHelpers.extends({},_globalStyles2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_globalStyles2.default.colors.gray17,marginBottom:20-PROMOTION_ITEM_PADDING,textAlign:"center"},_babelHelpers$extends[_globalStyles2.default.queries.small]=babelHelpers.extends({},_globalStyles2.default.typography.subheadingMobile),_babelHelpers$extends)),masteryPromotionItemContainer:{alignItems:"center",borderTop:"1px solid "+_globalStyles2.default.colors.gray85,display:"flex",justifyContent:"space-between",padding:PROMOTION_ITEM_PADDING+"px 0",":first-child":{borderTop:"0"}},masteryPromotionProgressIndicator:{alignItems:"center",display:"flex"},masteryPromotionProgressArrow:{margin:"0 "+PROMOTIONS_ARROW_SPACING+"px"},recommendationsContainer:(_recommendationsConta={display:"flex",flexDirection:"row",alignSelf:"stretch",backgroundColor:_globalStyles.colors.gray95,borderRadius:_globalStyles.borderRadius,paddingTop:16,paddingRight:18,paddingBottom:16,paddingLeft:18},_recommendationsConta[_mediaQueries2.default.smOrSmaller]={marginTop:-32},_recommendationsConta),iconContainer:{flexShrink:0},recommendationsText:babelHelpers.extends({},_globalStyles.typography.bodyXsmall,{color:_globalStyles.colors.gray17}),underline:{textDecoration:"underline"},newTabIcon:(_newTabIcon={transform:"translate(0px, 3px)"},_newTabIcon[_mediaQueries2.default.smOrSmaller]={display:"inline"},_newTabIcon[_mediaQueries2.default.mdOrLarger]={display:"none"},_newTabIcon),showIcon:(_showIcon={},_showIcon[_mediaQueries2.default.mdOrLarger]={display:"inline"},_showIcon),boundingBox:(_boundingBox={maxWidth:"100%",display:"inline-block",verticalAlign:"top",overflow:"hidden",textOverflow:"ellipsis"},_boundingBox[_mediaQueries2.default.smOrSmaller]={maxWidth:"calc(100% - 10px)"},_boundingBox),secondaryLink:{color:_wonderBlocksColorV2.default.offBlack,":hover":{color:_wonderBlocksColorV2.default.blue}},primaryLink:{color:_wonderBlocksColorV2.default.blue}})

});
KAdefine("javascript/content-library-package/components/time-estimate.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _clockIcon=require("../icons/clock-icon.jsx")
var _clockIcon2=babelHelpers.interopRequireDefault(_clockIcon)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var i18n=require("../../shared-package/i18n.js")
var TimeEstimate=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=i18n._("Takes about %(lowerBound)s – %(upperBound)s minutes",babelHelpers.extends({},this.props))
return React.createElement("span",{className:(0,_aphrodite.css)(styles.timeEstimateContainer)},React.createElement("span",{className:(0,_aphrodite.css)(styles.clockIconHolder)},React.createElement(_clockIcon2.default,{color:_globalStyles.colors.gray68})),React.createElement("span",{className:(0,_aphrodite.css)(styles.timeEstimateCopy)},r))}
return r}(React.Component)
exports.default=TimeEstimate
var styles=_aphrodite.StyleSheet.create({clockIconHolder:{height:20,marginRight:12},timeEstimateContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},timeEstimateCopy:babelHelpers.extends({},_globalStyles.typography.bodySmall,(_babelHelpers$extends={color:_globalStyles.colors.gray68},_babelHelpers$extends[_mediaQueries2.default.mdOrSmaller]=babelHelpers.extends({},_globalStyles.typography.bodyXsmall,{color:_globalStyles.colors.black}),_babelHelpers$extends))})

});
KAdefine("javascript/content-library-package/content-icons.js", function(require, module, exports) {
var playIconInverted={path:"M10.555 7.17l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16.002v-8a1 1 0 0 1 1.555-.832z",height:24,width:24}
var starIconInverted={path:"M8.748 17.434a.5.5 0 0 1-.744-.496l.47-3.757-2.328-2.327a.5.5 0 0 1 .283-.849l3.258-.465 1.879-3.288a.5.5 0 0 1 .868 0l1.879 3.288 3.258.465a.5.5 0 0 1 .283.849l-2.328 2.327.47 3.757a.5.5 0 0 1-.744.496L12 15.576l-3.252 1.858z",height:24,width:24}
var iconCompletedDot={path:"M23,14a7,7,0,1,0-7-7A7,7,0,0,0,23,14Z",height:30,width:30}
var iconCompletedCheck={path:"M25.28,4.31a1,1,0,1,1,1.44,1.38L22.59,10a1,1,0,0,1-1.46,0L19.26,7.88a1,1,0,0,1,1.48-1.34l1.15,1.28Z",height:30,width:30}
var iconBorder={path:"M2,0H22a2,2,0,0,1,2,2V22a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0ZM2,1A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1Z",height:24,width:24}
var iconBorderWithGap={path:"M15.06,0A8.39,8.39,0,0,0,15,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V9a8.39,8.39,0,0,0,1-.06V22a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z",height:24,width:24}
var startedProgressBar={path:"M0,20H12v4H2a2,2,0,0,1-2-2Z",height:24,width:24}
var completedProgressBar={path:"M0,20H24v2a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2Z",height:24,width:24}
var checkmark={path:"M23,10a7,7,0,1,0-7-7A7,7,0,0,0,23,10Z",height:30,width:30}
var videoIcon={path:"M10.55,7.17l6,4a1,1,0,0,1,0,1.66l-6,4A1,1,0,0,1,9,16V8A1,1,0,0,1,10.55,7.17Zm.45,7L14.2,12,11,9.87Z",width:24,height:24}
var contentIcons={fileTextIcon:{path:"M7 7.002C7 6.45 7.451 6 7.99 6H13v4h4v7.003c0 .55-.456.997-.995.997h-8.01C7.445 18 7 17.544 7 16.998V7.002zM14 6l3 3h-3V6zm-5 7.5c0 .268.22.5.491.5h5.018a.5.5 0 0 0 0-1H9.491a.5.5 0 0 0-.491.5zm0 2c0 .268.22.5.491.5h5.018a.5.5 0 0 0 0-1H9.491a.5.5 0 0 0-.491.5z",height:24,width:24},projectIcon:{path:"M6.598 13.99a.5.5 0 0 1-.452-.136l-1-1a.5.5 0 0 1 0-.708l1.5-1.5A.5.5 0 0 1 7 10.5h1.793l1.296-1.296.557-.558a5.612 5.612 0 0 1 1.715-1.182c1.107-.488 2.095-.575 3.552-.49A8.6 8.6 0 0 0 16.5 7a.5.5 0 0 1 .5.5c0 .119 0 .128.027.587.084 1.457-.003 2.445-.491 3.552a5.612 5.612 0 0 1-1.182 1.715l-.873.872-1.03 1.03L13.5 17a.5.5 0 0 1-.146.354l-1.5 1.5a.5.5 0 0 1-.712-.005l-.973-1a.5.5 0 0 1-.133-.442l.424-2.24-1.624-1.624-2.238.447zM13.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",width:24,height:24},playIcon:"M1.6,9.9C1.5,10,1.3,10,1.2,10C1.1,10,1,10,0.9,9.9C0.7,9.8,0.6,9.6,\n        0.6,9.4V0.6c0-0.2,0.2-0.4,0.4-0.5C1.1,0,1.4,0,1.6,0.1l7.6,4.5c0.2,0.1,\n        0.3,0.3,0.3,0.5c0,0.2-0.1,0.4-0.3,0.5L1.6,9.9z",starIcon:{path:"M100.806 37.259q0 1.325-1.59 2.915l-21.995 21.412 5.194 30.316q.265 2.279-.424 3.233-.795 1.007-1.961 1.007t-2.438-.742l-27.189-14.31-27.189 14.31q-1.378.742-2.544.742t-1.802-.901-.636-1.696.106-1.643l5.247-30.316-22.048-21.412q-1.537-1.643-1.537-2.915 0-2.226 3.392-2.809l30.422-4.399 13.621-27.56q1.166-2.491 2.968-2.491t2.968 2.491l13.621 27.56 30.422 4.399q3.392.583 3.392 2.809z",width:100,height:100},starIconBorderless:{path:"M8.748 17.434a.5.5 0 0 1-.744-.496l.47-3.757-2.328-2.327a.5.5 0 0 1 .283-.849l3.258-.465 1.879-3.288a.5.5 0 0 1 .868 0l1.879 3.288 3.258.465a.5.5 0 0 1 .283.849l-2.328 2.327.47 3.757a.5.5 0 0 1-.744.496L12 15.576l-3.252 1.858z",width:24,height:24},playIconInverted:playIconInverted,starIconInverted:starIconInverted,challengeIcon:starIconInverted,talkieIcon:videoIcon,articleIcon:{path:"M15,16V12h2v5a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V7A1,1,0,0,1,8,6h3V8H9v8Zm-1.5-6a.5.5,0,0,1-.5-.5V6l4,4Z",width:24,height:24},exerciseIcon:{path:"M11.5,10.91,9,13.41V15h1.59l2.5-2.5ZM12.91,9.5l1.59,1.59L15.59,10,14,8.41ZM7,13a1,1,0,0,1,.29-.71l6-6a1,1,0,0,1,1.42,0l3,3a1,1,0,0,1,0,1.42l-6,6A1,1,0,0,1,11,17H8a1,1,0,0,1-1-1Z",width:24,height:24},videoIcon:videoIcon,iconCompletedDot:iconCompletedDot,iconCompletedCheck:iconCompletedCheck,iconBorder:iconBorder,iconBorderWithGap:iconBorderWithGap,startedProgressBar:startedProgressBar,completedProgressBar:completedProgressBar,checkmark:checkmark}
module.exports=contentIcons

});
KAdefine("javascript/content-library-package/content-icon-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getIconForContent=undefined
var _contentIcons=require("./content-icons.js")
var _contentIcons2=babelHelpers.interopRequireDefault(_contentIcons)
var i18n=require("../shared-package/i18n.js")
var getIconForContent=exports.getIconForContent=function e(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null
var c={Interactive:{iconName:"starIcon",iconNameInverted:"starIconInverted",text:i18n._("Interactive")},Project:{iconName:"projectIcon",iconNameInverted:"projectIcon",text:i18n._("Project")},Talkthrough:{iconName:"talkieIcon",iconNameInverted:"talkieIcon",text:i18n._("Talk-through")},Challenge:{iconName:"challengeIcon",iconNameInverted:"challengeIcon",text:i18n._("Challenge")},tutorial:{iconName:"talkieIcon",iconNameInverted:"talkieIcon",text:i18n._("Talk-through")},challenge:{iconName:"challengeIcon",iconNameInverted:"challengeIcon",text:i18n._("Challenge")},project:{iconName:"projectIcon",iconNameInverted:"projectIcon",text:i18n._("Project")},creation:{iconName:"fileTextIcon",iconNameInverted:"fileTextIcon",text:i18n._("Creation")},Article:{iconName:"articleIcon",iconNameInverted:"articleIcon",text:i18n._("Article")},Video:{iconName:"videoIcon",iconNameInverted:"videoIcon",text:i18n._("Video")},Exercise:{iconName:"exerciseIcon",iconNameInverted:"exerciseIcon",text:i18n._("Exercise")}}
var o="Exercise"
var i=["tutorial","challenge","project","creation"].indexOf(t)!==-1
var r=["Article","Video","Exercise","Talkthrough","Challenge","Project","Interactive"].indexOf(n)!==-1
if(n==="Scratchpad"&&i){o=t}if(r){o=n}var a=c[o]
return{icon:_contentIcons2.default[a.iconNameInverted],text:a.text}}

});
KAdefine("javascript/content-library-package/content-model-sections.js", function(require, module, exports) {
var chunk=function n(e,o){var r=[]
var t=null
e.forEach(function(n){var e=o(n)
if(!t){t=[e,[n]]}else if(t[0]===e){t[1].push(n)}else{r.push(t)
t=[e,[n]]}})
if(t){r.push(t)}return r}
var contentModelSections=function n(e){return chunk(e,function(n){return!!n.sponsored})}
module.exports=contentModelSections

});
KAdefine("javascript/content-library-package/icons/clock-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var clockIcon={path:"M18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8m2\n     0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10m-4 1a1\n     1 0 0 1-1 1h-4a2 2 0 0 1-2-2V5a1 1 0 0 1 2 0v4c0 .55.45 1 1 1h3a1 1 0\n     0 1 1 1",height:20,width:20}
exports.default=function(e){var r=babelHelpers.objectWithoutProperties(e,[])
return React.createElement(_icon2.default,babelHelpers.extends({},r,{icon:clockIcon,size:20}))}

});
KAdefine("javascript/content-library-package/icons/close-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var closeIconPath="M6.26353762,4.99851587 L9.73097464,1.53107884 C10.0836373,1.17841618\n    10.0842213,0.612127047 9.73530496,0.263210718 C9.38395604,-0.0881381913\n    8.81874474,-0.0837668714 8.46743686,0.267541014 L4.99999981,3.73497806\n    L1.5325628,0.267541051 C1.1812549,-0.0837668481 0.616043606,\n    -0.0881381955 0.264694717,0.263210694 C-0.0842215912,0.612127004\n    -0.0836375768,1.17841613 0.269025093,1.5310788 L3.73646206,4.9985158\n    L0.269025109,8.46595276 C-0.083637537,8.81861541 -0.0842215923,\n    9.38490462 0.264694642,9.73382106 C0.616043456,10.0851701 1.18125469,\n    10.0807988 1.53256259,9.72949093 L4.99999988,6.26205363 L8.46743739,\n    9.72949117 C8.8187453,10.0807991 9.38395655,10.0851704 9.73530537,\n    9.73382138 C10.0842216,9.38490498 10.0836375,8.81861579 9.73097488,\n    8.46595313 L6.26353762,4.99851587 Z"
exports.default=function(e){var r=babelHelpers.objectWithoutProperties(e,[])
return React.createElement(_icon2.default,babelHelpers.extends({},r,{icon:closeIconPath}))}

});
KAdefine("javascript/content-library-package/icons/recommended-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.SmallRecommendedIcon=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var icon={path:"M15 17a7 7 0 0 1 7-7 7 7 0 0 1-7-7 7 7 0 0 1-7 7 7 7 0 0 1 7 7M4\n    12a4 4 0 0 1 4-4 4 4 0 0 1-4-4 4 4 0 0 1-4 4 4 4 0 0 1 4 4M8 20a3 3 0 0 1\n    3-3 3 3 0 0 1-3-3 3 3 0 0 1-3 3 3 3 0 0 1 3 3",width:22,height:22}
var smallIcon={path:"M12.84,6.77A.25.25,0,0,0,13,6.63a.28.28,0,0,0-.14-.36A11.66,11.66,0,0,1,9.09,3.92,11.86,11.86,0,0,1,6.73.18.26.26,0,0,0,6.6,0a.28.28,0,0,0-.36.14h0A12.34,12.34,0,0,1,3.89,3.92,12.23,12.23,0,0,1,.16,6.24.32.32,0,0,0,0,6.38a.28.28,0,0,0,.14.36A12.65,12.65,0,0,1,3.89,9.11a12.25,12.25,0,0,1,2.36,3.75.29.29,0,0,0,.13.14.26.26,0,0,0,.36-.13h0A13.09,13.09,0,0,1,9.09,9.11,13.06,13.06,0,0,1,12.84,6.77Z",width:13.02,height:13.02}
var SmallRecommendedIcon=exports.SmallRecommendedIcon=function e(o){var a=o.backgroundColor,t=o.top,r=o.left
return React.createElement("div",{className:(0,_aphrodite.css)(styles.smallContainer),style:{top:t,left:r}},React.createElement(_icon2.default,{icon:smallIcon,size:18,className:(0,_aphrodite.css)(styles.background),color:a}),React.createElement(_icon2.default,{icon:smallIcon,size:13,className:(0,_aphrodite.css)(styles.foreground),color:_globalStyles.colors.recommendationGold}))}
var styles=_aphrodite.StyleSheet.create({smallContainer:{position:"absolute"},background:{position:"absolute",top:-3,left:-2},foreground:{position:"absolute",top:0,left:0}})
var RecommendedIcon=function e(o){var a=o.size
return React.createElement(_icon2.default,{icon:icon,size:a||22,color:_globalStyles.colors.recommendationGold})}
exports.default=RecommendedIcon

});
KAdefine("javascript/content-library-package/icons/hand-trophy-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var HandTrophyIcon=function e(t){var l=t.domain
var a=(0,_globalStyles.domainColors)(l).domain1
var c=(0,_globalStyles.domainColors)(l).domain2
var r=_globalStyles.colors.recommendationGold
return React.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",width:"359",height:"327",viewBox:"0 0 359 327"},React.createElement("defs",null,React.createElement("linearGradient",{id:"gradient",x1:"50%",x2:"50%",y1:"0%",y2:"102.261%"},React.createElement("stop",{offset:"0%",style:{stopColor:"#FAFAFA"}}),React.createElement("stop",{offset:"100%",style:{stopColor:"#FFF"}}))),React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:"url(#gradient)",d:"M102 0h156l101 327-359-5z",transform:"translate(-1)"}),React.createElement("g",{fill:a,fillRule:"nonzero"},React.createElement("path",{d:"M157.673 167.762l-24.338-8.124c-2.506-.83-3.962-3.648-3.072-6.218.808-2.57 3.557-4.063 6.064-3.15l24.338 8.124c2.506.83 3.962 3.648 3.072 6.218-.808 2.57-3.557 3.98-6.064 3.15zM167.653 182.766l-28.307-9.291c-2.515-.815-3.975-3.586-3.083-6.113.812-2.527 3.57-3.994 6.084-3.097l28.307 9.291c2.515.815 3.975 3.587 3.083 6.113-.812 2.527-3.57 3.912-6.084 3.097zM164.673 192.762l-24.338-8.124c-2.506-.83-3.962-3.648-3.072-6.218.808-2.57 3.557-4.063 6.064-3.15l24.338 8.124c2.506.83 3.962 3.648 3.072 6.218-.808 2.57-3.557 3.98-6.064 3.15zM161.571 202.765l-22.182-7.223c-2.547-.821-4.026-3.612-3.122-6.156.821-2.545 3.615-4.022 6.162-3.12l22.182 7.224c2.547.82 4.026 3.611 3.122 6.156-.821 2.544-3.533 3.94-6.162 3.119z"}),React.createElement("path",{d:"M193.058 189.06l-1.29 3.935c-3.227 9.916-13.794 15.325-23.554 12.047L147 197.912 159.906 158l21.214 7.13c9.84 3.278 15.164 14.014 11.938 23.93z"})),React.createElement("path",{stroke:a,strokeWidth:"33",d:"M178 185l36 80"}),React.createElement("g",{fill:r,fillRule:"nonzero"},React.createElement("path",{d:"M131.602 141.38C106.478 124.636 119.242 74 119.242 74l23.265 6.452 77.228 21.235L243 108.139s-14.46 50.228-44.51 51.616c-8.968 15.6-19.47 22.623-34.414 22.378-2.827 9.474-7.997 23.685 13.975 29.729 2.181.572 3.474 2.859 2.908 5.064-.565 2.205-2.827 3.512-5.008 2.94l-54.043-14.946c-2.181-.572-3.474-2.859-2.908-5.064.565-2.205 2.827-3.512 5.008-2.94 21.811 6.044 24.558-8.575 26.9-18.294-13.732-7.106-19.387-18.867-19.306-37.243zM125.5 84c-2.017 12.634-3.55 34.095 6.534 46 1.452-17.655 5.163-32.394 7.987-42.032L125.5 84zM233 114.042L218.46 110c-2.505 9.982-6.705 24.748-14.46 41 14.702-5.28 24.314-24.831 29-36.958z"}),React.createElement("path",{d:"M178.751 107l-10.284 11.782L153 116.9l7.855 13.5-6.56 14.318 15.225-3.436L180.857 152l1.538-15.627 13.605-7.61-14.252-6.3z"})),React.createElement("g",{fillRule:"nonzero"},React.createElement("path",{fill:a,d:"M152.514 199.733l-13.095-4.187c-2.57-.822-4.062-3.613-3.15-6.159.83-2.545 3.647-4.024 6.217-3.12l13.095 4.187c2.57.822 4.062 3.613 3.15 6.159-.83 2.545-3.647 4.024-6.217 3.12zM153.514 188.764l-13.095-4.197c-2.57-.823-4.062-3.621-3.15-6.172.83-2.552 3.647-4.033 6.217-3.128l13.095 4.197c2.57.823 4.062 3.622 3.15 6.173-.83 2.551-3.647 3.95-6.217 3.127zM152.514 176.764l-13.095-4.197c-2.57-.823-4.062-3.621-3.15-6.172.83-2.552 3.647-4.033 6.217-3.128l13.095 4.197c2.57.823 4.062 3.622 3.15 6.173-.746 2.551-3.564 3.95-6.217 3.127z"}),React.createElement("path",{fill:c,d:"M156 169.71l-2.364-.611c-1.576-.437-3.153.611-3.547 2.359-.394 1.747.552 3.494 2.128 3.93l2.364.612 1.419-6.29zM157 181.71l-2.364-.611c-1.576-.437-3.153.611-3.547 2.359-.394 1.747.552 3.494 2.128 3.93l2.364.612 1.419-6.29zM156 192.71l-2.364-.611c-1.576-.437-3.153.611-3.547 2.359-.394 1.747.552 3.494 2.128 3.93l2.364.612 1.419-6.29z"})),React.createElement("g",{fillRule:"nonzero"},React.createElement("path",{fill:a,d:"M172.944 160.75l-12.542-4.135c-2.492-.81-3.94-3.323-3.216-5.674l1.046-3.324c.16-.486.643-.73 1.206-.567l16.16 5.269c2.492.81 3.94 3.323 3.216 5.674-.644 2.35-3.297 3.567-5.87 2.756z"}),React.createElement("path",{fill:c,d:"M165 148.753c-.48 1.665-2.16 2.629-3.68 2.103l-2.32-.789.96-3.067 5.04 1.753z"}),React.createElement("path",{fill:a,d:"M178.953 155L191 173.04l-6.872 5.96L172 160.718z"})),React.createElement("path",{fill:a,fillRule:"nonzero",d:"M177.928 167c2.108 6.154-3.39 15.824-13.928 14.857l9.713 9.143L187 179.571 177.928 167z"}),React.createElement("path",{fill:r,d:"M126 28c-.5-1.933 1.067-3.5 3-4-1.933.5-3.5-1.067-3-3-.5 1.933-2.067 3.5-4 3 1.933.5 3.5 2.067 4 4",opacity:".463"}),React.createElement("path",{fill:r,d:"M270 145c-.5-1.933 1.067-3.5 3-4-1.933.5-3.5-1.067-3-3-.5 1.933-2.067 3.5-4 3 1.933.5 3.5 2.067 4 4M92 89a4 4 0 0 1 4-4 4 4 0 0 1-4-4 4 4 0 0 1-4 4 4 4 0 0 1 4 4"}),React.createElement("path",{fill:r,d:"M188 60c-.5-3.59 2.41-6.5 6-7-3.59.5-6.5-2.411-6-6-.5 3.589-3.41 6.5-7 6 3.59.5 6.5 3.41 7 7",opacity:".742"}),React.createElement("path",{fill:r,d:"M66 224c-.5-3.59 2.41-6.5 6-7-3.59.5-6.5-2.411-6-6-.5 3.589-3.41 6.5-7 6 3.59.5 6.5 3.41 7 7",opacity:".706"}),React.createElement("path",{fill:r,d:"M238 211c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".691"}),React.createElement("path",{fill:r,d:"M242 37c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".889"}),React.createElement("path",{fill:r,d:"M95 159a5 5 0 0 1-5-5 5 5 0 0 1-5 5 5 5 0 0 1 5 5 5 5 0 0 1 5-5z",opacity:".656"}),React.createElement("path",{fill:r,d:"M305 235a5 5 0 0 1 5-5 5 5 0 0 1-5-5 5 5 0 0 1-5 5 5 5 0 0 1 5 5",opacity:".517"})))}
exports.default=HandTrophyIcon

});
KAdefine("javascript/content-library-package/icons/trophy-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var BASE_WIDTH=33
var BASE_HEIGHT=32
var TrophyIcon=function e(l){var r=l.size,a=l.status
var t=a==="not-passed"?_globalStyles.colors.gray85:_globalStyles.colors.recommendationGold
var c=a==="aced"?_globalStyles.colors.starAced:_globalStyles.colors.white
var o=r
var s=o/BASE_HEIGHT*BASE_WIDTH
return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:o,viewBox:"0 0 "+BASE_WIDTH+" "+BASE_HEIGHT},React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:t,fillRule:"nonzero",d:"M25.485 15.673C32.755 13.304 33 0 33 0H0s.21 13.304 7.515 15.673c1.269 4.458 3.403 6.874 7.188 7.837-.005 2.538.31 6.39-5.554 6.53-.575-.14-1.03.314-.98.98-.05.525.405.98.98.98h14.376c.656 0 1.111-.455.98-.98.131-.666-.324-1.12-.98-.98-5.748-.14-5.468-3.922-5.555-6.53 4.042-.788 6.211-3.274 7.515-7.837zM30.713 1.96c-.339 3.334-1.39 8.797-4.574 11.102.813-4.54.88-8.477.98-11.102h3.594zm-28.426 0h3.594c.1 2.625.167 6.562.98 11.102C3.676 10.756 2.626 5.293 2.287 1.96z"}),React.createElement("path",{fill:c,d:"M14.414 15c-.422.108-.786-.12-.69-.321l.345-3.215L12 9.857c-.12-.287.018-.677.345-.643l2.758-.321 1.38-2.572c.315-.387.719-.387 1.034 0l1.38 2.572 2.758.321c.327-.034.465.356.345.643l-2.069 1.607.345 3.215c.096.2-.268.429-.69.321l-2.758-1.607L14.414 15z"})))}
exports.default=TrophyIcon

});
KAdefine("javascript/content-library-package/icons/trophy-icon-large.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.GradientBackground=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _shared=require("../styles/shared.js")
var TrophyIconLarge=function e(t){var a=t.domain,l=t.sparkle,c=t.status
var r=(0,_shared.studyGuideTheme)(a)
var o=r==="blue"
var n=c==="not-passed"?_globalStyles.colors.gray85:_globalStyles.colors.recommendationGold
var i=c==="aced"?_globalStyles.colors.starAced:_globalStyles.colors.white
var d=o?"#0d3d82":"#9e034e"
var s=_globalStyles.colors.recommendationGold
var p=l?React.createElement("g",{fill:"non",fillRule:"evenodd"},React.createElement("path",{fill:s,d:"M103 38c-.5-3.59 2.41-6.5 6-6-3.59-.5-6.5-3.41-6-7-.5 3.59-3.41 6.5-7 7 3.59-.5 6.5 2.41 7 6"}),React.createElement("path",{fill:s,d:"M149 49c-.5-1.933 1.067-3.5 3-4-1.933.5-3.5-1.067-3-3-.5 1.933-2.067 3.5-4 3 1.933.5 3.5 2.067 4 4",opacity:".463"}),React.createElement("path",{fill:s,d:"M230 170c-.5-1.933 1.067-3.5 3-4-1.933.5-3.5-1.067-3-3-.5 1.933-2.067 3.5-4 3 1.933.5 3.5 2.067 4 4M85 129c-.5-1.933 1.067-3.5 3-4-1.933.5-3.5-1.067-3-3-.5 1.933-2.067 3.5-4 3 1.933.5 3.5 2.067 4 4"}),React.createElement("path",{fill:s,d:"M202 61c-.5-3.59 2.41-6.5 6-7-3.59.5-6.5-2.411-6-6-.5 3.589-3.41 6.5-7 6 3.59.5 6.5 3.41 7 7",opacity:".742"}),React.createElement("path",{fill:s,d:"M263 94c-.5-3.59 2.41-6.5 6-7-3.59.5-6.5-2.411-6-6-.5 3.589-3.41 6.5-7 6 3.59.5 6.5 3.41 7 7"}),React.createElement("path",{fill:s,d:"M76 230c-.5-3.59 2.41-6.5 6-7-3.59.5-6.5-2.411-6-6-.5 3.589-3.41 6.5-7 6 3.59.5 6.5 3.41 7 7",opacity:".706"}),React.createElement("path",{fill:s,d:"M259 208c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".691"}),React.createElement("path",{fill:s,d:"M226 28c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".889"}),React.createElement("path",{fill:s,d:"M98 173c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".873"}),React.createElement("path",{fill:s,d:"M131 73c-.5-4.695 3.306-8.5 8-8-4.694-.5-8.5-4.306-8-9-.5 4.694-4.306 8.5-9 9 4.694-.5 8.5 3.305 9 8",opacity:".837"}),React.createElement("path",{fill:s,d:"M166 21a5 5 0 0 1 5-5 5 5 0 0 1-5-5 5 5 0 0 1-5 5 5 5 0 0 1 5 5",opacity:".656"}),React.createElement("path",{fill:s,d:"M82 97a5 5 0 0 1 5-5 5 5 0 0 1-5-5 5 5 0 0 1-5 5 5 5 0 0 1 5 5",opacity:".517"}),React.createElement("path",{fill:s,d:"M247 140c-.5-4.143 2.858-7.5 7-8-4.142.5-7.5-2.859-7-7-.5 4.141-3.858 7.5-8 7 4.142.5 7.5 3.857 8 8",opacity:".739"})):null
return React.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",width:"344",height:"267",viewBox:"0 0 344 267"},React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:n,fillRule:"nonzero",d:"M205 146c22.25-7.256 23-48 23-48H127s.643 40.744 23 48c3.883 13.652 10.417 21.05 22 24-.016 7.772.948 19.567-17 20-1.76-.433-3.152.96-3 3-.152 1.606 1.24 3 3 3h44c2.01 0 3.402-1.394 3-3 .402-2.04-.99-3.433-3-3-17.59-.433-16.734-12.013-17-20 12.369-2.414 19.01-10.026 23-24zm16-42c-1.037 10.21-4.252 26.94-14 34 2.489-13.904 2.696-25.962 3-34h11zm-87 0h11c.304 8.038.511 20.096 3 34-9.748-7.06-12.963-23.79-14-34z"}),React.createElement("path",{fill:i,d:"M170 144c-1.223.335-2.28-.376-2-1l1-10-6-5c-.349-.893.053-2.108 1-2l8-1 4-8c.915-1.204 2.085-1.204 3 0l4 8 8 1c.947-.108 1.349 1.107 1 2l-6 5 1 10c.28.624-.777 1.335-2 1l-8-5-7 5z"}),React.createElement("path",{fill:d,d:"M135 196h85a4 4 0 0 1 4 4v31h-93v-31a4 4 0 0 1 4-4zM114 231h127a4 4 0 0 1 4 4v32H110v-32a4 4 0 0 1 4-4z"}),p))}
var GradientBackground=exports.GradientBackground=function e(){return React.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",width:"344",height:"267",viewBox:"0 0 344 267"},React.createElement("defs",null,React.createElement("linearGradient",{id:"fade",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},React.createElement("stop",{offset:"0%",style:{stopColor:"#fafafa",stopOpacity:1}}),React.createElement("stop",{offset:"100%",style:{stopColor:_globalStyles.colors.white,stopOpacity:1}}))),React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:"url(#fade)",d:"M95-31h156l101 327-359-5z",style:{top:0}})))}
exports.default=TrophyIconLarge

});
KAdefine("javascript/content-library-package/icons/encircled-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var EncircledIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.children,i=t.color,a=t.size
return React.createElement("div",{style:{position:"relative",width:a,height:a}},React.createElement("svg",{style:{position:"relative"},viewBox:"0 0 20 20"},React.createElement("circle",{cx:"10",cy:"10",r:"10",fill:i})),React.createElement("div",{style:{position:"absolute",left:0,top:0,width:a,height:a}},React.createElement("div",{className:(0,_aphrodite.css)(styles.childContainer)},r)))}
return t}(_react.Component)
exports.default=EncircledIcon
var styles=_aphrodite.StyleSheet.create({childContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}})

});
KAdefine("javascript/content-library-package/content-library-modules.js", function(require, module, exports) {
"use strict"
var _assignment=require("./modules/assignment.jsx")
var _assignment2=babelHelpers.interopRequireDefault(_assignment)
var _khankidsUpsell=require("./modules/khankids-upsell.jsx")
var _khankidsUpsell2=babelHelpers.interopRequireDefault(_khankidsUpsell)
var _masterySubjectProgressSummary=require("./modules/mastery-subject-progress-summary.jsx")
var _masterySubjectProgressSummary2=babelHelpers.interopRequireDefault(_masterySubjectProgressSummary)
var _statefulClassesDashboard=require("./modules/stateful-classes-dashboard.jsx")
var _statefulClassesDashboard2=babelHelpers.interopRequireDefault(_statefulClassesDashboard)
var _statefulContentList=require("./modules/stateful-content-list.jsx")
var _statefulContentList2=babelHelpers.interopRequireDefault(_statefulContentList)
var _statefulFloatingSidebar=require("./modules/stateful-floating-sidebar.jsx")
var _statefulFloatingSidebar2=babelHelpers.interopRequireDefault(_statefulFloatingSidebar)
var _subjectExperienceUpsell=require("./modules/subject-experience-upsell.jsx")
var _subjectExperienceUpsell2=babelHelpers.interopRequireDefault(_subjectExperienceUpsell)
var _subjectProgress=require("./modules/subject-progress.jsx")
var _subjectProgress2=babelHelpers.interopRequireDefault(_subjectProgress)
var _subjectPageTopicCard=require("./modules/subject-page-topic-card.jsx")
var _subjectPageTopicCard2=babelHelpers.interopRequireDefault(_subjectPageTopicCard)
var _subjectUpsellShelf=require("./modules/subject-upsell-shelf.jsx")
var _subjectUpsellShelf2=babelHelpers.interopRequireDefault(_subjectUpsellShelf)
var _tableOfContentsRow=require("./modules/table-of-contents-row.jsx")
var _tableOfContentsRow2=babelHelpers.interopRequireDefault(_tableOfContentsRow)
var _bigBingoTableOfContentsRow=require("./modules/big-bingo-table-of-contents-row.jsx")
var _bigBingoTableOfContentsRow2=babelHelpers.interopRequireDefault(_bigBingoTableOfContentsRow)
var _bigBingoNavbar=require("./modules/big-bingo-navbar.jsx")
var _bigBingoNavbar2=babelHelpers.interopRequireDefault(_bigBingoNavbar)
var _topicProgress=require("./modules/topic-progress.jsx")
var _topicProgress2=babelHelpers.interopRequireDefault(_topicProgress)
var _subjectChallenge=require("./modules/subject-challenge.jsx")
var _subjectChallenge2=babelHelpers.interopRequireDefault(_subjectChallenge)
var _studentMasteryGoalList=require("./modules/student-mastery-goal-list.jsx")
var _studentMasteryGoalList2=babelHelpers.interopRequireDefault(_studentMasteryGoalList)
var ActionList=require("./modules/action-list.jsx")
var BrowseProjects=require("./modules/browse-projects.jsx")
var ConceptIntro=require("./modules/concept-intro.jsx")
var ConceptTags=require("./modules/concept-tags.jsx")
var ContentCarousel=require("./modules/content-carousel.jsx")
var DualIntro=require("./modules/dual-intro.jsx")
var FeaturedContent=require("./modules/large-image-content-carousel.jsx")
var FullBleedImage=require("./modules/full-bleed-image.jsx")
var Mappers=require("./modules/mappers.jsx")
var MissionProgress=require("./modules/mission-progress.jsx")
var PartnershipDescription=require("./modules/partnership-description.jsx")
var ProgrammingDocumentation=require("./modules/programming-documentation.jsx")
var ProjectFeedback=require("./modules/project-feedback.jsx")
var ProjectsInProgress=require("./modules/projects-in-progress.jsx")
var QuickLinks=require("./modules/quick-links.jsx")
var SocialLinks=require("./modules/social-links.jsx")
var SubjectIntro=require("./modules/subject-intro.jsx")
var TabFooter=require("./modules/tab-footer.jsx")
var Testimonials=require("./modules/testimonials.jsx")
var UpNext=require("./modules/up-next.jsx")
module.exports={ActionList:ActionList,Assignment:_assignment2.default,BrowseProjects:BrowseProjects,ClassesDashboard:_statefulClassesDashboard2.default,ConceptIntro:ConceptIntro,ConceptTags:ConceptTags,ContentCarousel:ContentCarousel,ContentList:_statefulContentList2.default,DualIntro:DualIntro,FeaturedContent:FeaturedContent,FloatingSidebar:_statefulFloatingSidebar2.default,FullBleedImage:FullBleedImage,KhanKidsUpsell:_khankidsUpsell2.default,Mappers:Mappers,MasterySubjectProgressSummary:_masterySubjectProgressSummary2.default,MissionProgress:MissionProgress,PartnershipDescription:PartnershipDescription,ProgrammingDocumentation:ProgrammingDocumentation,ProjectFeedback:ProjectFeedback,ProjectsInProgress:ProjectsInProgress,QuickLinks:QuickLinks,SocialLinks:SocialLinks,SubjectExperienceUpsell:_subjectExperienceUpsell2.default,SubjectIntro:SubjectIntro,SubjectProgress:_subjectProgress2.default,SubjectPageTopicCard:_subjectPageTopicCard2.default,SubjectUpsellShelf:_subjectUpsellShelf2.default,SubjectChallenge:_subjectChallenge2.default,TabFooter:TabFooter,TableOfContentsRow:_tableOfContentsRow2.default,BigBingoTableOfContentsRow:_bigBingoTableOfContentsRow2.default,BigBingoNavbar:_bigBingoNavbar2.default,Testimonials:Testimonials,TopicProgress:_topicProgress2.default,UpNext:UpNext,StudentMasteryGoalList:_studentMasteryGoalList2.default}

});
KAdefine("javascript/content-library-package/icons/table-quiz-icon.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _shared=require("../styles/shared.js")
var TableQuizIcon=function e(t){var a=t.domain
var l=(0,_shared.studyGuideTheme)(a)
var c=l==="blue"
var r=c?"#0d3d82":"#9e034e"
var n=c?"#21242c":"#6b0235"
var d=c?"#0b7f98":"#9e034e"
var h=c?"#10adcd":"#c9337c"
var i=c?"#01d1c1":"#ff8482"
var E=c?"#0b7f98":"#6b0235"
var m=c?"#63d9ea":"#ed5fa5"
var f=c?"#a986ff":"#9e034e"
var R=c?"#01d1c1":"#e74d39"
var o=c?"#11accd":"#ffbe26"
var p=c?"#236cc5":"#c9337c"
var s=c?"#11accd":"#ff8482"
var v=c?"#236cc5":"#9e034e"
return React.createElement("svg",{style:{display:"block"},xmlns:"http://www.w3.org/2000/svg",width:"320",height:"209",viewBox:"0 0 320 209"},React.createElement("defs",null,React.createElement("path",{id:"a",d:"M13.875 0H27.75v27.504H0V0z"})),React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("rect",{width:"320",height:"20",y:"141",fill:r,rx:"2"}),React.createElement("path",{fill:r,d:"M56 209v-48h16v48zM248 209v-48h16v48z"}),React.createElement("path",{fill:n,d:"M56 167v-6h16v6zM248 167v-6h16v6z"}),React.createElement("path",{fill:"#F0F1F2",d:"M142 0v141h100V21.323L220.638 0z"}),React.createElement("path",{fill:d,d:"M220 0v21h21z"}),React.createElement("path",{fill:h,d:"M153 21h25v-4h-25zM180 21h20v-4h-20zM153 28h32v-4h-32z"}),React.createElement("g",{transform:"translate(154 36)"},React.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.3",d:"M25 17h41"}),React.createElement("circle",{cx:"8",cy:"17",r:"8",stroke:i,strokeWidth:"3"}),React.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.3",d:"M25 46h41"}),React.createElement("circle",{cx:"8",cy:"46",r:"8",stroke:i,strokeWidth:"3"}),React.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.3",d:"M25 75h41"}),React.createElement("circle",{cx:"8",cy:"75",r:"8",stroke:i,strokeWidth:"3"}),React.createElement("path",{fill:E,fillRule:"nonzero",d:"M7.826 17.225c-.84-.079-1.584.561-1.66 1.43-.077.868.542 1.636 1.383 1.715l5.943.559c.922.086 1.706-.686 1.666-1.642l-.54-12.841c-.037-.871-.75-1.547-1.594-1.51-.843.039-1.497.776-1.46 1.647l.464 11.037-4.202-.395z",mask:"url(#b)",transform:"rotate(44 10.66 12.74)"})),React.createElement("g",{fillRule:"nonzero"},React.createElement("path",{fill:"#F0F1F2",d:"M150.478 72l.522-1.674L149.642 63l-5.12 5.442-.522 1.674z"}),React.createElement("path",{fill:"#314453",d:"M148 65.217l2 .783-.4-3z"}),React.createElement("path",{fill:"#DDD",d:"M126 128.23l.857-2.876 6.708 2.001-.857 2.875z"}),React.createElement("path",{fill:"#89CDEF",d:"M133 131.18c-.553 2.058-2.544 3.27-4.424 2.664-1.88-.606-2.986-2.785-2.433-4.844"}),React.createElement("path",{fill:p,d:"M148.908 70.731c-.99-.327-1.43-1.201-1.21-2.185-.331.874-1.322 1.42-2.203 1.202-.77-.218-1.32-.983-1.32-1.748L127 124.924l6.826 2.076L151 69.967a1.945 1.945 0 0 1-2.092.764z"}),React.createElement("g",null,React.createElement("path",{fill:"#F0F1F2",d:"M125 69v-1.889L128.554 60 132 67.111V69z"}),React.createElement("path",{fill:"#314453",d:"M129 62h-2l1.048-2z"}),React.createElement("path",{fill:"#DDD",d:"M125 127h7v3h-7z"}),React.createElement("path",{fill:"#89CDEF",d:"M125 130c0 2.25 1.64 4 3.5 4 1.969 0 3.5-1.875 3.5-4"}),React.createElement("path",{fill:o,d:"M126.83 68.752c.97 0 1.724-.767 1.724-1.752 0 .985.861 1.752 1.723 1.752.861 0 1.508-.548 1.723-1.314V127h-7V67.438c.323.766 1.077 1.314 1.83 1.314z"})),React.createElement("g",null,React.createElement("path",{fill:"#EEEDED",d:"M129.478 124l.522 1.674-1.358 7.326-5.12-5.442-.522-1.674z"}),React.createElement("path",{fill:"#1586CA",d:"M127 131.783l2-.783-.476 3z"}),React.createElement("path",{fill:"#F0F1F2",d:"M105 67.02l6.708-2.001.857 2.874-6.708 2.001z"}),React.createElement("path",{fill:s,d:"M112 65.82c-.553-2.058-2.544-3.27-4.424-2.664-1.88.606-2.986 2.785-2.433 4.844"}),React.createElement("path",{fill:R,d:"M127.908 124.269c-.99.327-1.43 1.201-1.21 2.185-.331-.874-1.322-1.42-2.203-1.202-.77.218-1.32.983-1.32 1.748L106 70.076 112.826 68 130 125.033c-.44-.655-1.211-.983-2.092-.764z"})),React.createElement("g",null,React.createElement("path",{fill:m,d:"M147 85h-39l5.525 52.676c.217 1.328 1.3 2.324 2.6 2.324h22.642c1.3 0 2.383-.996 2.6-2.324L147 85z"}),React.createElement("path",{fill:f,d:"M147.694 86h-39.388c-.762 0-1.306-.417-1.306-1s.544-1 1.306-1h39.388c.762 0 1.306.417 1.306 1s-.653 1-1.306 1z"})),React.createElement("g",null,React.createElement("path",{fill:"#EEEDED",d:"M140.84 134.5l1.754-.024 6.638 3.382-6.672 3.363-1.754.026z"}),React.createElement("path",{fill:"#314453",d:"M147.75 138.14l-.182-2.14 2.741 1.309z"}),React.createElement("path",{fill:"#F0F1F2",d:"M80.013 141.08l-.013-7 3-.005.013 7z"}),React.createElement("path",{fill:v,d:"M80.692 133.801c-2.13-.054-3.857 1.51-3.81 3.485.046 1.975 1.822 3.655 3.953 3.709"}),React.createElement("path",{fill:o,d:"M141.174 135.987c.033 1.043.746 1.713 1.75 1.781-.931.069-1.736.864-1.777 1.77-.01.801.568 1.546 1.301 1.764l-59.458.3-.051-7.135 59.562-.269c-.754.236-1.287.882-1.327 1.789z"})))))}
exports.default=TableQuizIcon

});
KAdefine("javascript/content-library-package/modules/action-list.jsx", function(require, module, exports) {
var _button
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var PropTypes=require("prop-types")
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var sharedStyles=require("../styles/shared.js")
var ActionList=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.actions,s=t.title
var a=r.map(function(e,t){var r=e.text,s=e.url
return React.createElement(_wonderBlocksButtonV2.default,{key:t,style:[styles.button,t===0&&styles.buttonFirst],href:(0,_staticUrl2.default)(s),skipClientNav:true,kind:"secondary"},r)})
return React.createElement("div",{className:css(styles.module)},React.createElement("div",{className:css(styles.title)},s),React.createElement("div",null,a))}
return t}(React.Component)
ActionList.propTypes={actions:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string.isRequired,url:PropTypes.string.isRequired}).isRequired).isRequired,title:PropTypes.string.isRequired}
var styleConstants={titleMargin:32,buttonMargin:16,buttonMarginMobile:8}
var styles=StyleSheet.create({module:babelHelpers.extends({},sharedStyles.moduleLayout.defaultSpacing,{backgroundColor:sharedStyles.colors.gray98,textAlign:"center"}),title:babelHelpers.extends({},sharedStyles.typography.subheadingDesktop,{color:sharedStyles.colors.gray17,marginBottom:styleConstants.titleMargin}),button:(_button={marginLeft:styleConstants.buttonMargin},_button[sharedStyles.queries.small]={width:"100%",marginLeft:0,marginBottom:styleConstants.buttonMarginMobile},_button),buttonFirst:{marginLeft:0}})
module.exports=ActionList

});
KAdefine("javascript/content-library-package/modules/assignment.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _lazyLoadComponent=require("../../components/lazy-load-package/lazy-load-component.jsx")
var _lazyLoadComponent2=babelHelpers.interopRequireDefault(_lazyLoadComponent)
var AssignmentModule=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement(_lazyLoadComponent2.default,{load:function e(){return[require.dynimport("../../assignments-package/student-assignments/index.jsx")]}},function(e){return React.createElement(e,null)})}
return t}(_react.Component)
exports.default=AssignmentModule

});
KAdefine("javascript/content-library-package/modules/browse-projects.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../../shared-package/i18n.js")
var angleBracketLeftIcon=require("../../shared-styles-package/icon.angleBracketLeft.js")
var Icon=require("../../shared-styles-package/icon.jsx")
var sharedStyles=require("../styles/shared.js")
var Spinner=require("../../shared-components-package/spinner.jsx")
var BrowseProjects=function(e){babelHelpers.inherits(r,e)
function r(){var t=this
var s,a,n
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,i=Array(o),l=0;l<o;l++){i[l]=arguments[l]}return n=(s=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={DynamicProjectList:null},a.renderHeader=function(){if(a.props.hideHeader){return null}var e=null
if(a.props.headerLinkUrl){e=React.createElement("div",null,React.createElement("a",{className:css(styles.link),href:a.props.headerLinkUrl},a.props.headerText),React.createElement("div",{className:css(styles.bracket)},React.createElement(Icon,{icon:angleBracketLeftIcon,size:15,color:sharedStyles.domainColors(a.props.domain).domain1})))}else{e=a.props.headerText}return React.createElement("div",{className:css(styles.title)},e)},a.renderBody=function(){if(!a.state.DynamicProjectList){return React.createElement(Spinner,null)}else{return React.createElement(t.state.DynamicProjectList,babelHelpers.extends({url:"/api/internal/scratchpads/top?casing=camel"},a.props,{defaultSort:"hot",hideNotice:true}))}},s),babelHelpers.possibleConstructorReturn(a,n)}r.prototype.componentDidMount=function e(){var r=this
require.dynimport("../../scratchpads-package/dynamic-project-list.jsx").then(function(e){return e.default}).then(function(e){r.setState({DynamicProjectList:e})})}
r.prototype.render=function e(){return React.createElement("div",{className:css(styles.module)},this.renderHeader(),this.renderBody())}
return r}(React.Component)
BrowseProjects.propTypes={domain:PropTypes.string.isRequired,headerLinkUrl:PropTypes.string,headerText:PropTypes.string,hideHeader:PropTypes.bool,numPerPage:PropTypes.number,static:PropTypes.bool}
BrowseProjects.defaultProps={headerLinkUrl:"/computing/computer-programming/browse",headerText:i18n._("Browse projects"),hideFilterBar:true,hideHeader:false,numPerPage:5,static:true}
var styles=StyleSheet.create({module:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,sharedStyles.moduleLayout.defaultSpacing),title:babelHelpers.extends({},sharedStyles.typography.subheadingDesktop,{color:sharedStyles.colors.gray17,marginBottom:16}),link:{color:"inherit",textDecoration:"none",":hover":{textDecoration:"underline"}},bracket:{display:"inline-block",transform:"rotate(180deg)"}})
module.exports=BrowseProjects

});
KAdefine("javascript/content-library-package/modules/concept-intro.jsx", function(require, module, exports) {
"use strict"
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var sharedStyles=require("../styles/shared.js")
var i18n=require("../../shared-package/i18n.js")
var ConceptIntro=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,s=r.description,t=r.prerequisites,a=r.slug
var i=[]
t.forEach(function(e,r){if(r){i.push(", ")}i.push(React.createElement(_wonderBlocksLinkV2.default,{href:e.url,skipClientNav:true,key:r},e.title))})
return React.createElement("div",{className:css(styles.module),"data-slug":a},React.createElement("div",{className:css(styles.paragraph)},s),t.length>0&&React.createElement("div",{className:css(styles.paragraph)},i18n._("Prerequisites"),": ",i))}
return r}(React.Component)
ConceptIntro.propTypes={description:PropTypes.string.isRequired,domain:PropTypes.string.isRequired,onNavigate:PropTypes.func,prerequisites:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,url:PropTypes.string.isRequired})),slug:PropTypes.string.isRequired}
ConceptIntro.defaultProps={prerequisites:[]}
var styles=StyleSheet.create({module:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,sharedStyles.moduleLayout.defaultSpacing,{maxWidth:sharedStyles.constants.moduleWidthCentered}),practiceUpsellWrapper:{marginTop:32,display:"inline-block"},paragraph:babelHelpers.extends({},sharedStyles.typography.bodyXsmall,{color:sharedStyles.colors.gray17})})
module.exports=ConceptIntro

});
KAdefine("javascript/content-library-package/modules/concept-tags.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _tags=require("../components/tags.jsx")
var _tags2=babelHelpers.interopRequireDefault(_tags)
var ConceptTags=function e(a){var t=a.conceptTagsInfo,l=a.domain,r=a.title
return React.createElement("div",{className:(0,_aphrodite.css)(styles.module)},React.createElement(_tags2.default,{domain:l,noWrapper:true,hideDivider:true,tags:t,title:r}))}
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_globalStyles2.default.moduleLayout.defaultAlignment,_globalStyles2.default.moduleLayout.defaultSpacing)})
module.exports=ConceptTags

});
KAdefine("javascript/content-library-package/modules/content-carousel.jsx", function(require, module, exports) {
"use strict"
var _babelHelpers$extends,_babelHelpers$extends2,_wrapper,_contentItem,_firstContentItem,_lastContentItem,_lastContentItemMobil,_babelHelpers$extends3
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var ContentCarouselItem=require("../components/content-carousel-item.jsx")
var sharedStyles=require("../styles/shared.js")
var Link=require("../../components/link-package/link.jsx")
var i18n=require("../../shared-package/i18n.js")
var MAX_ITEMS=5
var ContentCarousel=function(e){babelHelpers.inherits(t,e)
function t(){var l,a,r
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),i=0;i<n;i++){s[i]=arguments[i]}return r=(l=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.openLearnMenu=function(e){e.preventDefault()
window.scrollTo(0,0)
var t=document.querySelector(".learn-menu-dropdown, [data-learn-menu-trigger]")
if(t){t.click()}},l),babelHelpers.possibleConstructorReturn(a,r)}t.prototype.render=function e(){var t=this.props,l=t.bigBingoLinkConversion,a=t.contentItems,r=t.domain,n=t.referrer,s=t.title,i=t.titleTag,o=t.useOldColors
var d=this.props.showPlaceholder
var m=Math.min(a.length,MAX_ITEMS)
if(m>=MAX_ITEMS){d=false}var p=a.some(function(e){return e.kind==="practice"||e.kind==="mission"})
if(p){d=false}return React.createElement("div",{className:css(styles.module)},React.createElement(_title2.default,{className:css(styles.moduleTitle),tag:i},s),React.createElement("div",{className:css(styles.wrapper)},a.map(function(e,t){var a=t===m-1&&!d
var i=t===m-1
var p=s.replace(/\s/g,"-")+"_"+t
return t<m&&React.createElement(ContentCarouselItem,babelHelpers.extends({bigBingoLinkConversion:l,domain:r},e,{key:t,referrer:n,style:[styles.contentItem,t===0&&styles.firstContentItem,a&&styles.lastContentItem,i&&styles.lastContentItemMobile],useOldColors:o,identifier:p}))}),d&&React.createElement("div",{className:css(styles.contentItem,styles.placeholder,styles.lastContentItem)},React.createElement(Link,{href:"#",style:[styles.placeholderContent],onClick:this.openLearnMenu},React.createElement("span",{className:css(styles.placeholderIE10Fix)},i18n._("Or start learning something new"))))))}
return t}(React.Component)
ContentCarousel.propTypes={bigBingoLinkConversion:PropTypes.string,contentItems:PropTypes.arrayOf(PropTypes.shape(ContentCarouselItem.propTypes)),domain:PropTypes.string.isRequired,referrer:PropTypes.string,showPlaceholder:PropTypes.bool,title:PropTypes.string.isRequired,titleTag:PropTypes.string,useOldColors:PropTypes.bool}
ContentCarousel.defaultProps={useOldColors:false}
var _sharedStyles$constan=sharedStyles.constants,moduleHorizontalPadding=_sharedStyles$constan.moduleHorizontalPadding,moduleHorizontalPaddingSmall=_sharedStyles$constan.moduleHorizontalPaddingSmall,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall
var paddingForScrollbar=16
var thumbnailWidth=sharedStyles.thumbnailSizes.large.width
var minCarouselMargin=20
var numberOfMargins=MAX_ITEMS-1
var minCarouselWidth=MAX_ITEMS*thumbnailWidth+numberOfMargins*minCarouselMargin+2*moduleHorizontalPadding
var calculatedMargin="calc(25% - "+thumbnailWidth*MAX_ITEMS/numberOfMargins+"px)"
var styles=StyleSheet.create({module:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,(_babelHelpers$extends={paddingBottom:moduleVerticalPadding-paddingForScrollbar,paddingLeft:0,paddingRight:0,paddingTop:moduleVerticalPadding},_babelHelpers$extends[sharedStyles.queries.small]={paddingBottom:moduleVerticalPaddingSmall-paddingForScrollbar,paddingTop:moduleVerticalPaddingSmall},_babelHelpers$extends)),moduleTitle:babelHelpers.extends({},sharedStyles.typography.subheadingDesktop,(_babelHelpers$extends2={color:sharedStyles.colors.gray17,marginBottom:20,paddingLeft:moduleHorizontalPadding,paddingRight:moduleHorizontalPadding},_babelHelpers$extends2[sharedStyles.queries.small]=babelHelpers.extends({},sharedStyles.typography.subheadingMobile,{paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall}),_babelHelpers$extends2)),wrapper:(_wrapper={display:"flex",flexDirection:"row",overflowX:"auto",paddingBottom:paddingForScrollbar,paddingLeft:moduleHorizontalPadding,paddingRight:moduleHorizontalPadding,WebkitOverflowScrolling:"touch",whiteSpace:"nowrap"},_wrapper[sharedStyles.queries.small]={display:"flex",flexDirection:"column",paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall},_wrapper),contentItem:(_contentItem={display:"inline-block",flexGrow:0,flexShrink:0,marginRight:20,verticalAlign:"top",whiteSpace:"normal"},_contentItem["@media (min-width: "+minCarouselWidth+"px)"]={marginRight:calculatedMargin},_contentItem[sharedStyles.queries.small]={marginRight:0,marginTop:16},_contentItem),firstContentItem:(_firstContentItem={},_firstContentItem[sharedStyles.queries.small]={marginTop:0,marginLeft:0},_firstContentItem),lastContentItem:(_lastContentItem={marginRight:0},_lastContentItem["@media (min-width: "+minCarouselWidth+"px)"]={marginRight:0},_lastContentItem[sharedStyles.queries.small]={marginRight:moduleHorizontalPaddingSmall},_lastContentItem),lastContentItemMobile:(_lastContentItemMobil={},_lastContentItemMobil[sharedStyles.queries.small]={marginRight:moduleHorizontalPaddingSmall},_lastContentItemMobil),placeholder:babelHelpers.extends({},sharedStyles.grayCallout,(_babelHelpers$extends3={height:sharedStyles.thumbnailSizes.large.height,width:sharedStyles.thumbnailSizes.large.width},_babelHelpers$extends3[sharedStyles.queries.small]={display:"none"},_babelHelpers$extends3)),placeholderContent:{alignItems:"center",color:sharedStyles.colors.gray41,display:"flex",fontFamily:"inherit",fontWeight:"bold",height:"100%",padding:16,paddingLeft:32,paddingRight:32,textAlign:"center",":focus":{color:sharedStyles.colors.gray17},":hover":{color:sharedStyles.colors.gray17,textDecoration:"none"}},placeholderIE10Fix:{display:"inline-block",maxWidth:"100%",MsFlexShrink:1}})
module.exports=ContentCarousel

});
KAdefine("javascript/content-library-package/modules/content-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends,_babelHelpers$extends2
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getUserInfoForContentList($topicId: String!) {\n        user {\n            id\n            contentItemProgresses(topicId: $topicId) {\n                bestScore {\n                    numAttempted\n                    numCorrect\n                }\n                completionStatus\n                content {\n                    id\n                    progressKey\n                }\n            }\n        }\n    }\n"],["\n    query getUserInfoForContentList($topicId: String!) {\n        user {\n            id\n            contentItemProgresses(topicId: $topicId) {\n                bestScore {\n                    numAttempted\n                    numCorrect\n                }\n                completionStatus\n                content {\n                    id\n                    progressKey\n                }\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _contentListItem=require("../components/content-list-item.jsx")
var _contentListItem2=babelHelpers.interopRequireDefault(_contentListItem)
var _contentModelSections=require("../content-model-sections.js")
var _contentModelSections2=babelHelpers.interopRequireDefault(_contentModelSections)
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _modalNavigatorStore=require("../redux/modal-navigator-store.js")
var _modalNavigatorStore2=babelHelpers.interopRequireDefault(_modalNavigatorStore)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoConstants=require("../../user-info-store-package/user-info-constants.js")
var _userInfoAdapters=require("./user-info-adapters.js")
var i18n=require("../../shared-package/i18n.js")
var CONTENT_MODAL_CONVERSION="content_modal_open"
var TITLE_CLICK_CONVERSION="condensed_tutorial_title_click"
var USER_INFO_QUERY=(0,_graphqlTag2.default)(_templateObject)
var ContentList=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),i=0;i<n;i++){o[i]=arguments[i]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.state={modalItems:[]},a.updateUserInfoStore=function(e){var t=e.user
if(!t||!t.contentItemProgresses){return}var r={statusMap:(0,_userInfoAdapters.toStatusMap)(t.contentItemProgresses),bestScoreMap:(0,_userInfoAdapters.toBestScoreMap)(t.contentItemProgresses)}
_userInfoStore2.default.dispatch({type:_userInfoConstants.LOAD_USER_INFO,userInfo:r})},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.handleTitleClick=function e(){_bigbingo2.default.markConversion(TITLE_CLICK_CONVERSION)}
t.prototype.getContentItemTitle=function e(t){if(t.kind==="Exercise"){return i18n._("Practice: %(title)s",{title:t.title})}return t.title}
t.prototype.handleOpenItemInModal=function e(t){_bigbingo2.default.markConversion(CONTENT_MODAL_CONVERSION,(0,_modalNavigatorStore.getModalItemExtra)(t,this.props.context))
_modalNavigatorStore2.default.dispatch({type:"OpenItem",modalData:babelHelpers.extends({items:this.props.contentItems,referrer:this.props.context,currentItem:t},t.kind==="Video"?{shouldAutoplay:true}:{})})}
t.prototype.renderContentItem=function e(t,r,a,s,n){var o=this
var i=this.props,l=i.domain,d=i.openInModals
return React.createElement(_contentListItem2.default,{key:t.progressKey,contentItem:t,domain:l,truncateLines:true,truncateOnResize:true,useThumbnail:false,includeTopBorder:n,isFirst:r,isLast:a,isHighlighted:s,openContentInModal:false,onClickLink:function e(r,a){if(d&&["Article","Exercise","Video"].indexOf(t.kind)!==-1){r.preventDefault()
o.handleOpenItemInModal(t)}}})}
t.prototype.renderSection=function e(t,r,a){var s=this
var n=t.length-1
var o=false
var i=t.map(function(e,t){var a=t===0
var i=t===n
var l=!o&&e.kind==="Exercise"&&e.status==="started"
if(l){o=true}return s.renderContentItem(e,a,i,l,!r)})
return React.createElement("div",{key:a,className:(0,_aphrodite.css)(r&&styles.sponsoredItems)},r&&React.createElement("div",{className:(0,_aphrodite.css)(styles.sponsorNote)},i18n._("Brought to you by our partner")),i)}
t.prototype.renderContentItems=function e(){var t=this
var r=this.props.contentItems
var a=(0,_contentModelSections2.default)(r)
return a.map(function(e,r){var a=e[0],s=e[1]
return t.renderSection(s,a,r)})}
t.prototype.renderWithQuery=function e(){var t=this.props,r=t.contentItems,a=t.description,s=t.domain,n=t.imageCaption,o=t.imageUrl,i=t.slug,l=t.title,d=t.titleTag
var u=_shared2.default.domainColors(s),p=u.domain3
var c=React.createElement("div",{style:{color:p}},React.createElement(_clientLink2.default,{to:r[0].nodeUrl,onClick:this.handleTitleClick},l))
var m=a
if(a!=null){m=a.replace("\\$","$")}return React.createElement("div",{"data-slug":i,className:(0,_aphrodite.css)(styles.module)},React.createElement("div",{className:(0,_aphrodite.css)(styles.sideBar)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.list)},React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleTitle),tag:d},c),React.createElement("div",{className:(0,_aphrodite.css)(styles.description)},m),this.renderContentItems()),React.createElement("div",{className:(0,_aphrodite.css)(styles.sideBar)},o&&React.createElement(_deferredImage2.default,{className:(0,_aphrodite.css)(styles.image),alt:n,src:(0,_staticUrl2.default)(o)})))}
t.prototype.render=function e(){var t=this
return React.createElement(_kaQuery2.default,{query:USER_INFO_QUERY,variables:{topicId:this.props.topicId},onlyFetchesUserData:true,refetchOnClientSideNav:true,onCompleted:this.updateUserInfoStore},function(){return t.renderWithQuery()})}
return t}(_react.Component)
ContentList.defaultProps={imageCaption:""}
exports.default=ContentList
var styles=_aphrodite.StyleSheet.create({module:{display:"flex",justifyContent:"center"},list:babelHelpers.extends({},_shared2.default.moduleLayout.defaultSpacing,{width:_shared2.default.constants.moduleWidthCentered}),sponsoredItems:{borderTop:"1px solid "+_shared2.default.colors.gray85,paddingTop:16},sponsorNote:babelHelpers.extends({},_shared2.default.typography.labelSmall,{color:_shared2.default.colors.gray41}),sideBar:babelHelpers.extends({},_shared2.default.moduleLayout.defaultSpacing,(_babelHelpers$extends={width:_shared2.default.constants.sidebarWidthDesktopWide},_babelHelpers$extends[_shared2.default.queries.small]={display:"none"},_babelHelpers$extends[_shared2.default.queries.medium]={display:"none"},_babelHelpers$extends[_shared2.default.queries.large]={width:_shared2.default.constants.sidebarWidthDesktop},_babelHelpers$extends)),moduleTitle:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends2={marginBottom:15,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"start"},_babelHelpers$extends2[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.subheadingMobile),_babelHelpers$extends2)),image:{borderRadius:_shared2.default.borderRadius,width:"100%"},description:babelHelpers.extends({},_shared2.default.typography.bodyXsmall,{color:_shared2.default.colors.gray17,marginBottom:24})})

});
KAdefine("javascript/content-library-package/modules/variable-column-content-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _titleContainer,_moduleTitleContainer,_recommendationSource,_columnsContainer,_column,_emptyColumn,_contentItem,_topPaddingContentIte,_bottomPaddingContent,_verticalGap
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _contentListItem=require("../components/content-list-item.jsx")
var _contentListItem2=babelHelpers.interopRequireDefault(_contentListItem)
var _recommendationBadge=require("../components/recommendation-badge.jsx")
var _recommendationBadge2=babelHelpers.interopRequireDefault(_recommendationBadge)
var _practiceContentItem=require("../components/practice-content-item.jsx")
var _practiceContentItem2=babelHelpers.interopRequireDefault(_practiceContentItem)
var _masteryPracticeContentItem=require("../components/mastery-practice-content-item.jsx")
var _masteryPracticeContentItem2=babelHelpers.interopRequireDefault(_masteryPracticeContentItem)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _visibilityObserver=require("../../components/visibility-observer-package/visibility-observer.jsx")
var _visibilityObserver2=babelHelpers.interopRequireDefault(_visibilityObserver)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _standards=require("../../standards-package/standards.jsx")
var _standards2=babelHelpers.interopRequireDefault(_standards)
var i18n=require("../../shared-package/i18n.js")
var strings={noLearnContent:i18n._("No videos or articles available in this lesson")}
var HeadingSmallH2=function e(t){return React.createElement(_wonderBlocksTypographyV.HeadingSmall,babelHelpers.extends({},t,{tag:"h2"}),t.children)}
var VariableColumnContentList=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,i=Array(o),l=0;l<o;l++){i[l]=arguments[l]}return a=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.renderColumn=function(e,t){var r=e.key,n=e.title,a=e.spacing
return React.Children.count(t)>0?React.createElement("div",{key:r,className:(0,_aphrodite.css)(styles.column)},n&&React.createElement("div",{style:{paddingBottom:a}},React.createElement(_wonderBlocksTypographyV.LabelMedium,{tag:"h3",style:styles.contentColumnTitle},n)),t):null},n.renderPracticeColumn=function(){var e=n.props,t=e.contentItems,r=e.shouldHighlightFirstIncompleteRecommendedPractice,a=e.shouldUseMastery
var o=function e(t){return t.kind==="Exercise"}
var i=t.filter(o)
var l=!!r
var s=i.map(function(e,t){var r=e
var o=a?["unfamiliar","familiar"].includes(r.mastery):r.status!=="complete"&&r.recommended
var s=n.renderPracticeItem(r,t,i.length,l&&o)
if(o){l=false}return s})
return n.renderColumn({key:"practice",title:i18n._("Practice"),spacing:a?12:10},s)},n.renderLearnItem=function(e,t,r){var a=n.props,o=a.domain,i=a.customOnClick,l=a.shouldUseMastery
return React.createElement(_contentListItem2.default,{key:e.progressKey,useWonderBlocksTypography:true,contentItem:e,domain:o,truncateLines:true,truncateOnResize:true,useThumbnail:false,includeTopBorder:false,customOnClick:i,noSubwayTracks:true,light:true,isHighlighted:false,openContentInModal:true,wrapperStyles:[styles.contentItem,t>0&&styles.topPaddingContentItem,t<r-1&&styles.bottomPaddingContentItem],shouldUseMastery:l})},n.renderLearnColumn=function(){var e=n.props,t=e.contentItems,r=e.shouldUseMastery
var a=function e(t){return t.kind!=="Exercise"}
var o=t.filter(a)
var i=o.map(function(e,t){return n.renderLearnItem(e,t,o.length)})
if(i.length===0){i=React.createElement(_wonderBlocksTypographyV.Body,{style:styles.noLearnContent},strings.noLearnContent)}return n.renderColumn({key:"learn",title:i18n._("Learn"),spacing:r?21:20},React.createElement("div",{className:(0,_aphrodite.css)(styles.columnLeft)},i))},n.renderDescription=function(){var e=n.props.description
if(!e){return null}return React.createElement(_wonderBlocksTypographyV.Body,{key:"overview",style:styles.overview},e)},n.renderDescriptionColumn=function(){var e=n.renderDescription()
return n.renderColumn({key:"overview",spacing:22},e)},n.renderContentColumn=function(){var e=n.props.contentItems
var t=e.map(function(t,r){if(t.kind==="Exercise"){return n.renderPracticeItem(t,r,e.length,false)}else{return n.renderLearnItem(t,r,e.length)}})
return n.renderColumn({key:"content",spacing:22},t)},n.renderSingleColumnLayout=function(){var e=n.props,t=e.contentItems,r=e.contentFormat
var a=r==="list-description-and-content"&&n.renderDescription()
var o=[]
if(a){o.push(a)}t.forEach(function(e,r){if(e.kind==="Exercise"){o.push(n.renderPracticeItem(e,r,t.length,false))}else{o.push(n.renderLearnItem(e,r,t.length))}})
return n.renderColumn({key:"single-column",spacing:22},o)},n.renderLeftAndRightColumns=function(){var e=n.props.contentFormat
switch(e){case"learn-and-practice":return{leftColumn:n.renderLearnColumn(),rightColumn:n.renderPracticeColumn()}
case"list-description-and-content":return{leftColumn:n.renderDescriptionColumn(),rightColumn:n.renderContentColumn()}
default:throw new Error("Unsupported content format: "+e)}},n.renderTwoColumnLayout=function(){var e=n.props.renderEmptyColumns
var t=n.renderLeftAndRightColumns(),r=t.leftColumn,a=t.rightColumn
var o=React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.emptyColumn)})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.columnsContainer)},r||e&&o,React.createElement("div",{className:(0,_aphrodite.css)(styles.verticalGap)}),a||e&&o)},n.renderRecommendationSource=function(){var e=n.props.recommendationSource
if(!e){return null}return React.createElement("div",{className:(0,_aphrodite.css)(styles.recommendationSourceContainer)},React.createElement(_recommendationBadge2.default,e))},n.renderTitle=function(){var e=n.props,t=e.contentItems,r=e.title,a=e.enableTitleLink
var o=t.length?t[0].nodeUrl:""
return React.createElement(HeadingSmallH2,{className:(0,_aphrodite.css)(styles.moduleTitleContainer)},a&&React.createElement(_clientLink2.default,{to:o},r),!a&&r)},n.renderStandards=function(){var e=n.props.standards&&n.props.standards.length>0
return e&&React.createElement("div",{className:(0,_aphrodite.css)(styles.stdsContainer)},React.createElement(_standards2.default,{standards:n.props.standards,small:true,showSetPrefix:true}))},r),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.getContentItemTitle=function e(t){if(t.kind==="Exercise"){return i18n._("Practice: %(title)s",{title:t.title})}return t.title}
t.prototype.showUpNextExerciseInline=function e(t){var r=this.props,n=r.shouldUseMastery,a=r.upNext
return!!n&&!!a&&a.item&&a.item.contentItem&&a.item.contentItem.slug===t}
t.prototype.renderPracticeItem=function e(t,r,n,a){var o=this.props,i=o.domain,l=o.shouldUseMastery,s=o.upNext,c=o.onUpNextHidden,d=o.isLoadingUserProgressData
var m=l?_masteryPracticeContentItem2.default:_practiceContentItem2.default
var u=this.showUpNextExerciseInline(t.slug)
var p=React.createElement(m,{key:r,isFirst:r===0,isLast:r===n-1,item:t,highlight:a,domain:i,isUpNext:u,isLoadingUserProgressData:d})
if(u&&s){return React.createElement(_visibilityObserver2.default,{key:r,rootMargin:ROOT_MARGIN,onChange:function e(r){return c&&c(r,t.topicSlug)}},p)}return p}
t.prototype.renderContent=function e(){var t=this.props.layout
switch(t){case"single-column":return this.renderSingleColumnLayout()
case"two-column":return this.renderTwoColumnLayout()
default:throw new Error("Unsupported layout: "+t)}}
t.prototype.render=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.titleContainer)},this.renderRecommendationSource(),this.renderTitle()),this.renderStandards(),this.renderContent())}
return t}(_react.Component)
VariableColumnContentList.defaultProps={shouldHighlightFirstIncompleteRecommendedPractice:false,contentFormat:"learn-and-practice",layout:"two-column",enableTitleLink:true,standards:[]}
exports.default=VariableColumnContentList
var ROOT_MARGIN="-130px 0px 0px 0px"
var LEARN_ITEM_SPACING=14
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"column",flex:1,flexGrow:1},titleContainer:(_titleContainer={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:24,color:_wonderBlocksColorV2.default.offBlack},_titleContainer[_mediaQueries2.default.smOrSmaller]={flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"},_titleContainer),stdsContainer:{marginBottom:12,marginTop:-8},moduleTitleContainer:(_moduleTitleContainer={order:0},_moduleTitleContainer[_mediaQueries2.default.smOrSmaller]={order:1},_moduleTitleContainer),recommendationSourceContainer:(_recommendationSource={order:1,paddingLeft:32,paddingBottom:0},_recommendationSource[_mediaQueries2.default.smOrSmaller]={order:0,paddingLeft:0,paddingBottom:12},_recommendationSource),columnsContainer:(_columnsContainer={display:"flex",flexDirection:"row"},_columnsContainer[_mediaQueries2.default.mdOrSmaller]={flexDirection:"column"},_columnsContainer),column:(_column={display:"flex",flexDirection:"column"},_column[_mediaQueries2.default.lgOrLarger]={flex:1,flexGrow:1},_column),columnLeft:{paddingRight:32},emptyColumn:(_emptyColumn={},_emptyColumn[_mediaQueries2.default.mdOrSmaller]={display:"none"},_emptyColumn),contentItem:(_contentItem={paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0},_contentItem[_mediaQueries2.default.smOrSmaller]={paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0},_contentItem),topPaddingContentItem:(_topPaddingContentIte={paddingTop:LEARN_ITEM_SPACING/2},_topPaddingContentIte[_mediaQueries2.default.smOrSmaller]={paddingTop:LEARN_ITEM_SPACING/2},_topPaddingContentIte),bottomPaddingContentItem:(_bottomPaddingContent={paddingBottom:LEARN_ITEM_SPACING/2},_bottomPaddingContent[_mediaQueries2.default.smOrSmaller]={paddingBottom:LEARN_ITEM_SPACING/2},_bottomPaddingContent),contentColumnTitle:{color:_wonderBlocksColorV2.default.offBlack64},overview:{color:_globalStyles.colors.gray17,paddingBottom:12,paddingRight:20},noLearnContent:{color:_wonderBlocksColorV2.default.offBlack},verticalGap:(_verticalGap={},_verticalGap[_mediaQueries2.default.lgOrLarger]={display:"none"},_verticalGap[_mediaQueries2.default.mdOrSmaller]={height:32},_verticalGap)})

});
KAdefine("javascript/content-library-package/modules/stateful-content-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _contentList=require("./content-list.jsx")
var _contentList2=babelHelpers.interopRequireDefault(_contentList)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var ConnectedContentList=(0,_reactRedux.connect)(function(e,t){var r=t.contentItems,n=t.topicSlug
return{contentItems:r.map(function(t){var r=e.statusMap[t.progressKey]||"unstarted"
var s=e.bestScoreMap[t.progressKey]
if(t.kind==="Exercise"){return babelHelpers.extends({},t,{bestScore:s,relatedVideos:t.relatedVideos.map(function(e){return babelHelpers.extends({},e,{topicSlug:n})}),status:r,topicSlug:n})}else{return babelHelpers.extends({},t,{bestScore:s,status:r,topicSlug:n})}})}})(_contentList2.default)
var StatefulContentList=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedContentList,this.props))}
return t}(React.Component)
exports.default=StatefulContentList

});
KAdefine("javascript/content-library-package/modules/floating-sidebar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _module,_babelHelpers$extends,_linkAreaWrappable,_spiedIndicator
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _scrollUtils=require("../../scroll-utils-package/scroll-utils.js")
var _stickyModule=require("../components/sticky-module.jsx")
var _stickyModule2=babelHelpers.interopRequireDefault(_stickyModule)
var BigBingo=require("../../shared-package/bigbingo.js")
var Link=require("../../components/link-package/link.jsx")
var sharedStyles=require("../styles/shared.js")
var i18n=require("../../shared-package/i18n.js")
var LINK_CLICK_CONVERSION="topic_page_click_floating_nav"
var smoothScrollToOffset=function e(a,t,r){(0,_scrollUtils.scrollToOffset)(a,_scrollUtils.SCROLL_ANIMATION_DURATION,function(){if(t){window.history.replaceState({},document.title,"#"+t)}r&&r()})}
var FloatingSidebar=function(e){babelHelpers.inherits(a,e)
function a(t){babelHelpers.classCallCheck(this,a)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,t))
r.hasMeasured=false
r.onMeasure=function(){var e=r.props,a=e.links,t=e.scrollOffset
var l=window.innerHeight/3
var s=a.map(function(e){var a=e.slug
var r=a.replace(/\./g,"\\.").replace(/\:/g,"\\:")
return{offset:(0,_scrollUtils.getOffsetTop)(document.querySelector('[data-slug="'+r+'"]'))-t,slug:a}})
var o=s.map(function(e,t){var r=e.offset
if(t>0){var o=r-s[t-1].offset
var i=r-Math.min(o,l)
return{bound:i,slug:a[t].slug}}else{return{bound:-1,slug:a[t].slug}}})
var i=!r.hasMeasured&&window.location.hash&&window.pageYOffset===0
if(i){var n=window.location.hash.replace(/^\#/,"")
var d=s.find(function(e){return e.slug===n})
if(d){smoothScrollToOffset(d.offset,null)}else{window.location.hash=""}}r.hasMeasured=true
r.setState({offsets:s,measurements:o})}
r.onScroll=function(e){var a=r.state.measurements
if(!a){return}var t=a.filter(function(a){var t=a.bound
return e>t})
if(t.length){var l=t[t.length-1]
r.setState({spiedSlug:l.slug})}}
r.onClick=function(e,a){var t=r.state.offsets.find(function(e){return e.slug===a})
if(t){e.preventDefault()
BigBingo.markConversion(LINK_CLICK_CONVERSION,{path:window.location.pathname})
smoothScrollToOffset(t.offset,t.slug)}}
r.state={spiedSlug:r.props.links.length?r.props.links[0].slug:"",offsets:[],measurements:[]}
return r}a.prototype.componentDidUpdate=function e(a,t){var r=function e(a,t){if(a.length!==t.length){return false}for(var r=0;r<a.length;r++){if(a[r].slug!==t[r].slug){return false}}return true}
if(!r(a.links,this.props.links)){this.recomputeOffsetsTimeoutId=setTimeout(this.onMeasure,700)}}
a.prototype.componentWillUnmount=function e(){if(this.recomputeOffsetsTimeoutId){clearTimeout(this.recomputeOffsetsTimeoutId)}}
a.prototype.render=function e(){var a=this
var t=this.props,r=t.domain,l=t.links,s=t.scrollOffset
var o=this.state.spiedSlug
var i=sharedStyles.domainColors(r),n=i.domain1
var d=l.length>3
return React.createElement(_stickyModule2.default,{namespace:"contents_",onMeasure:this.onMeasure,onScroll:this.onScroll,styles:[styles.module],scrollOffset:s},React.createElement("div",{className:(0,_aphrodite.css)(styles.contents)},i18n._("Contents")),React.createElement("nav",{className:(0,_aphrodite.css)(styles.linkArea,d&&styles.linkAreaWrappable),role:"navigation"},l.map(function(e,t){var l=e.slug===o
var s=e.title
var i=React.createElement(Link,{key:"link",href:"#"+e.slug,"aria-label":e.ariaLabel,onClick:function t(r){return a.onClick(r,e.slug)}},l&&React.createElement("div",{className:(0,_aphrodite.css)(styles.spiedIndicator),style:{backgroundColor:n}}),React.createElement("span",null,s))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.linkWrapper,navLink[r],l&&navLinkActive[r]),key:t},i)})))}
return a}(_react.Component)
FloatingSidebar.defaultProps={scrollOffset:0}
exports.default=FloatingSidebar
var _sharedStyles$constan=sharedStyles.constants,moduleHorizontalPadding=_sharedStyles$constan.moduleHorizontalPadding,moduleHorizontalPaddingSmall=_sharedStyles$constan.moduleHorizontalPaddingSmall,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall,moduleWidthCentered=_sharedStyles$constan.moduleWidthCentered,pageWidth=_sharedStyles$constan.pageWidth
var linkColor=sharedStyles.colors.gray17
var maxSpiedIndicatorPadding=20
var navLink=sharedStyles.makeDomainStylesForTemplate(function(e){var a
return a={color:linkColor},a[sharedStyles.queries.medium]={color:sharedStyles.domainColors(e).domain1},a[sharedStyles.queries.small]={color:sharedStyles.domainColors(e).domain1},a})
var navLinkActive=sharedStyles.makeDomainStylesForTemplate(function(e){return{color:sharedStyles.domainColors(e).domain3}})
var styles=_aphrodite.StyleSheet.create({module:(_module={marginLeft:-maxSpiedIndicatorPadding,maxHeight:"100vh",paddingLeft:maxSpiedIndicatorPadding,overflowY:"auto"},_module[sharedStyles.queries.small]=babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,{maxWidth:moduleWidthCentered,paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall,paddingTop:moduleVerticalPaddingSmall,position:"static"}),_module[sharedStyles.queries.medium]=babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,{maxWidth:moduleWidthCentered,paddingLeft:moduleHorizontalPadding,paddingRight:moduleHorizontalPadding,paddingTop:moduleVerticalPadding,position:"static"}),_module[sharedStyles.queries.large]={left:moduleHorizontalPadding,marginBottom:119,maxWidth:199,paddingBottom:moduleVerticalPadding,paddingTop:48},_module["@media (min-width: "+pageWidth+"px)"]={left:"calc((100% - "+pageWidth+"px) / 2 + "+(moduleHorizontalPadding+"px)")},_module[sharedStyles.queries.xlarge]={marginBottom:119,maxWidth:236,paddingBottom:moduleVerticalPadding,paddingTop:moduleVerticalPadding},_module),contents:babelHelpers.extends({},sharedStyles.typography.breadcrumb,(_babelHelpers$extends={color:sharedStyles.colors.gray68,opacity:1,paddingBottom:1},_babelHelpers$extends[sharedStyles.queries.small]={color:sharedStyles.colors.gray17},_babelHelpers$extends[sharedStyles.queries.medium]={color:sharedStyles.colors.gray17},_babelHelpers$extends)),linkArea:babelHelpers.extends({},sharedStyles.typography.labelMedium,{fontWeight:"normal"}),linkAreaWrappable:(_linkAreaWrappable={columnCount:1},_linkAreaWrappable[sharedStyles.queries.medium]={columnCount:2},_linkAreaWrappable),linkWrapper:{marginTop:14,position:"relative",display:"flex",alignItems:"center",transform:"translateZ(0)"},spiedIndicator:(_spiedIndicator={borderRadius:1,height:"calc(100% + 2 * 7px)",position:"absolute",top:-7,width:3},_spiedIndicator[sharedStyles.queries.small]={display:"none"},_spiedIndicator[sharedStyles.queries.medium]={display:"none"},_spiedIndicator[sharedStyles.queries.large]={left:-maxSpiedIndicatorPadding},_spiedIndicator[sharedStyles.queries.xlarge]={left:-16},_spiedIndicator)})

});
KAdefine("javascript/content-library-package/modules/stateful-floating-sidebar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _floatingSidebar=require("./floating-sidebar.jsx")
var _floatingSidebar2=babelHelpers.interopRequireDefault(_floatingSidebar)
var mapStateToProps=function e(r,t){if(!t.showProjectLinks||!t.topicId){return{}}var a=r.floatingSidebarProjectLinkMap[t.topicId]||[]
if(t.links[0]&&t.links[0].slug==="concept-intro"){var i=t.links,o=i[0],n=i.slice(1)
return{links:[o].concat(a,n)}}else{return{links:[].concat(a,t.links)}}}
var ConnectedFloatingSidebar=(0,_reactRedux.connect)(mapStateToProps)(_floatingSidebar2.default)
exports.default=function(e){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedFloatingSidebar,e))}

});
KAdefine("javascript/content-library-package/modules/dual-intro.jsx", function(require, module, exports) {
var _babelHelpers$extends,_section,_babelHelpers$extends2,_babelHelpers$extends3,_divider
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var Section=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.section,t.isFirst?styles.first:styles.second)},React.createElement("h3",{className:(0,_aphrodite.css)(styles.title)},t.section.title),React.createElement("div",{className:(0,_aphrodite.css)(styles.description)},t.section.description),React.createElement(_wonderBlocksButtonV2.default,{href:t.section.actionUrl,kind:"secondary",skipClientNav:true},t.section.actionText))}
var DualIntro=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.root)},React.createElement(Section,{isFirst:true,section:t.first}),React.createElement("div",{className:(0,_aphrodite.css)(styles.divider)}),React.createElement(Section,{isFirst:false,section:t.second}))}
var sectionMaxWidth=508
var sectionPadding=15
var descriptionMarginTopDesktop=28
var descriptionMarginTopMobile=16
var buttonMarginTopDesktop=24
var buttonMarginTopMobile=32
var dividerMarginMobile=24
var styles=_aphrodite.StyleSheet.create({root:babelHelpers.extends({},_globalStyles2.default.moduleLayout.defaultAlignment,_globalStyles2.default.moduleLayout.defaultSpacing,(_babelHelpers$extends={display:"flex",justifyContent:"space-between"},_babelHelpers$extends[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_babelHelpers$extends)),section:(_section={maxWidth:sectionMaxWidth},_section[_mediaQueries2.default.mdOrSmaller]={paddingLeft:sectionPadding,paddingRight:sectionPadding,textAlign:"center",maxWidth:"none"},_section),first:{paddingRight:sectionPadding},second:{paddingLeft:sectionPadding},title:babelHelpers.extends({},_globalStyles2.default.typography.subheadingDesktop,(_babelHelpers$extends2={margin:0},_babelHelpers$extends2[_mediaQueries2.default.mdOrSmaller]={textAlign:"center"},_babelHelpers$extends2)),description:babelHelpers.extends({},_globalStyles2.default.typography.bodySmall,(_babelHelpers$extends3={marginTop:descriptionMarginTopDesktop,marginBottom:buttonMarginTopDesktop},_babelHelpers$extends3[_mediaQueries2.default.mdOrSmaller]={textAlign:"center"},_babelHelpers$extends3[_mediaQueries2.default.smOrSmaller]={marginTop:descriptionMarginTopMobile,marginBottom:buttonMarginTopMobile},_babelHelpers$extends3)),divider:(_divider={background:_globalStyles2.default.colors.gray85,width:1},_divider[_mediaQueries2.default.smOrSmaller]={height:1,marginTop:dividerMarginMobile,marginBottom:dividerMarginMobile,width:"auto"},_divider)})
module.exports=DualIntro

});
KAdefine("javascript/content-library-package/modules/topic-progress.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _masteryCard,_card,_moduleContainer,_experienceUpsellModu,_upNextModuleContaine,_upNextPillContainer,_upNextCenter
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getUserInfoForTopicProgress($topicId: String!) {\n        user {\n            id\n            contentItemProgresses(topicId: $topicId) {\n                bestScore {\n                    numAttempted\n                    numCorrect\n                    completedDate\n                }\n                completionStatus\n                content {\n                    id\n                    progressKey\n                }\n            }\n            curationItemProgress(topicId: $topicId) {\n                numTotalSkills\n                numCompletedSkills\n                masteryEnabled\n                subjectMasteryEnabled\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n            recommendationsForUnit(unitId: $topicId) {\n                contentId\n                sourceId\n                kind\n            }\n        }\n    }\n"],["\n    query getUserInfoForTopicProgress($topicId: String!) {\n        user {\n            id\n            contentItemProgresses(topicId: $topicId) {\n                bestScore {\n                    numAttempted\n                    numCorrect\n                    completedDate\n                }\n                completionStatus\n                content {\n                    id\n                    progressKey\n                }\n            }\n            curationItemProgress(topicId: $topicId) {\n                numTotalSkills\n                numCompletedSkills\n                masteryEnabled\n                subjectMasteryEnabled\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n            recommendationsForUnit(unitId: $topicId) {\n                contentId\n                sourceId\n                kind\n            }\n        }\n    }\n"]),_templateObject2=babelHelpers.taggedTemplateLiteralLoose(["\n    query quizAndUnitTestAttemptsQuery($topicId: String!) {\n        user {\n            id\n            latestUnitTestAttempts(unitId: $topicId) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n            }\n            latestQuizAttempts(topicId: $topicId) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n                positionKey\n            }\n        }\n    }\n"],["\n    query quizAndUnitTestAttemptsQuery($topicId: String!) {\n        user {\n            id\n            latestUnitTestAttempts(unitId: $topicId) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n            }\n            latestQuizAttempts(topicId: $topicId) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n                positionKey\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _aphrodite=require("aphrodite")
var _reactRedux=require("react-redux")
var _reactRouterDom=require("react-router-dom")
var _gridConstants=require("../components/grid-constants.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _modalNavigatorStore=require("../redux/modal-navigator-store.js")
var _modalNavigatorStore2=babelHelpers.interopRequireDefault(_modalNavigatorStore)
var _masteryTopicUnitProgressHeader=require("../../mastery-package/mastery-topic-unit-progress-header.jsx")
var _masteryTopicUnitProgressHeader2=babelHelpers.interopRequireDefault(_masteryTopicUnitProgressHeader)
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var _unitMasteredModal=require("../../mastery-package/unit-mastered-modal.jsx")
var _unitMasteredModal2=babelHelpers.interopRequireDefault(_unitMasteredModal)
var _masteryTopicSidebar=require("../components/mastery-topic-sidebar.jsx")
var _masteryTopicSidebar2=babelHelpers.interopRequireDefault(_masteryTopicSidebar)
var _parseQueryString=require("../../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var _topicProgressSidebar=require("../components/topic-progress-sidebar.jsx")
var _topicProgressSidebar2=babelHelpers.interopRequireDefault(_topicProgressSidebar)
var _topicDescription=require("../components/topic-description.jsx")
var _topicDescription2=babelHelpers.interopRequireDefault(_topicDescription)
var _upNextShelf=require("../components/up-next-shelf.jsx")
var _upNextShelf2=babelHelpers.interopRequireDefault(_upNextShelf)
var _upNextShelf3=require("../../mastery-package/up-next-shelf.jsx")
var _upNextShelf4=babelHelpers.interopRequireDefault(_upNextShelf3)
require("../../components/visibility-observer-package/visibility-observer.jsx")
var _viewportWatcher=require("../../components/viewport-watcher-package/viewport-watcher.jsx")
var _viewportWatcher2=babelHelpers.interopRequireDefault(_viewportWatcher)
var _startStudyGuideUpsell=require("../components/start-study-guide-upsell.jsx")
var _startStudyGuideUpsell2=babelHelpers.interopRequireDefault(_startStudyGuideUpsell)
var _lessonCard=require("../components/lesson-card.jsx")
var _lessonCard2=babelHelpers.interopRequireDefault(_lessonCard)
var _quizTestCard=require("../components/quiz-test-card.jsx")
var _quizTestCard2=babelHelpers.interopRequireDefault(_quizTestCard)
var _calculateUpNext=require("../utils/calculate-up-next.js")
var _calculateUpNext2=babelHelpers.interopRequireDefault(_calculateUpNext)
var _quizUtils=require("../utils/quiz-utils.js")
var _userInfoActions=require("../../user-info-store-package/user-info-actions.js")
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _modalUtils=require("../utils/modal-utils.js")
var _subjectExperienceUpsell=require("./subject-experience-upsell.jsx")
var _subjectExperienceUpsell2=babelHelpers.interopRequireDefault(_subjectExperienceUpsell)
var _upNextPill=require("../../mastery-package/up-next-pill.jsx")
var _upNextPill2=babelHelpers.interopRequireDefault(_upNextPill)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _conversionContext=require("../../analytics-package/conversion-context.jsx")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _curationPageLayout=require("../components/curation-page-layout.jsx")
var _curationPageLayout2=babelHelpers.interopRequireDefault(_curationPageLayout)
var _userInfoConstants=require("../../user-info-store-package/user-info-constants.js")
var _userInfoAdapters=require("./user-info-adapters.js")
var USER_INFO_QUERY=(0,_graphqlTag2.default)(_templateObject)
var QUIZ_AND_TEST_QUERY=(0,_graphqlTag2.default)(_templateObject2)
var TopicProgress=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),o=0;o<s;o++){i[o]=arguments[o]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={stickyHeaderBehavior:"normal",showMasteryCelebration:"hide",upNextNotificationVisibility:"unknown",upNextNotificationSlug:""},a.updateUserInfoStore=function(e){var t=e.user
if(!t||!t.contentItemProgresses&&!t.curationItemProgress){return}var r=function e(){if(t.curationItemProgress){var r=t.curationItemProgress
return{masteryMap:(0,_userInfoAdapters.toMasteryMap)(r.masteryMap),masteryPercentage:r.currentMastery.percentage,masteryPointsEarned:r.currentMastery.pointsEarned,masteryPointsAvailable:r.currentMastery.pointsAvailable}}else{return{}}}
var a=function e(){if(t.contentItemProgresses){return{statusMap:(0,_userInfoAdapters.toStatusMap)(t.contentItemProgresses),bestScoreMap:(0,_userInfoAdapters.toBestScoreMap)(t.contentItemProgresses)}}else{return{}}}
var n=babelHelpers.extends({},r(),a(),{recommendations:t.recommendationsForUnit})
_userInfoStore2.default.dispatch({type:_userInfoConstants.LOAD_USER_INFO,userInfo:n})},a.handleStickyModuleChange=function(e){return a.setState({stickyHeaderBehavior:e.detail})},a.handleOpenItemInUpNext=function(e){var t=a.props.shouldUseMastery
switch(e.type){case"content-item":a.props.history.push((0,_modalUtils.getModalUrlForContent)(e.contentItem))
break
case"tutorial":(0,_scrollToSlug2.default)(e.slug,"top",undefined,t)
break
case"quiz":a.props.history.push((0,_modalUtils.getModalUrlForTestOrQuiz)(e.quiz))
break
case"unit-test":a.props.history.push((0,_modalUtils.getModalUrlForTestOrQuiz)(e.test))
break
case"topic":case"subject":a.props.history.push(e.url)
break}},a.handleUpNextHidden=function(e,t){a.setState({upNextNotificationVisibility:e,upNextNotificationSlug:t})},a.handleOnMastered=function(e,t){if(t&&e==="pending"){a.setState({showMasteryCelebration:"show"})}else{a.setState({showMasteryCelebration:e})}},a.handleMasteryCelebrationClose=function(){a.setState({showMasteryCelebration:"hide"})},a.handleMasteryCelebrationNextUnit=function(){var e=a.props.nextTopic
a.setState({showMasteryCelebration:"hide"})
if(e.next&&e.next.url){a.props.history.push(e.next.url)}},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.componentDidMount=function e(){this.props.markConversion({id:"topic_progress_page_visit",extras:{subject:this.props.subject.title}})
this.props.setCurrentTopic()
window.addEventListener("stickyModuleBehaviorChange",this.handleStickyModuleChange)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("stickyModuleBehaviorChange",this.handleStickyModuleChange)}
t.prototype.renderRightItems=function e(t,r){var a=this
var n=this.props,s=n.domain,i=n.tutorials,o=n.quizzes,l=n.masteryMap,u=n.shouldUseMastery,p=n.unitTest,d=n.unitMastery,c=n.upNext,m=n.isLoadingUserAttemptData
var g=function e(r){if(r){return React.createElement(_quizTestCard2.default,{handleUpNextHidden:a.handleUpNextHidden,key:r.slug,masteryMap:l,quizOrTest:r,register:t,shouldUseMastery:u,type:"quiz",unitMastery:d,upNext:c,isLoadingUserAttemptData:m})}}
var f=function e(){if(p){return React.createElement(_quizTestCard2.default,{handleUpNextHidden:a.handleUpNextHidden,key:p.slug,masteryMap:l,positionSlug:"practice-test",quizOrTest:p,register:t,shouldUseMastery:u,type:"test",unitMastery:d,upNext:c,isLoadingUserAttemptData:m})}}
var y=false
var b=function e(t){if(y){return false}var r=function e(t){return["unfamiliar","familiar"].includes(t.mastery)}
var a=function e(t){var r=t.status,a=t.recommended
return r!=="complete"&&a}
var n=function e(t){return t.kind==="Exercise"&&(u?r(t):a(t))}
var s=t.contentItems.some(n)
if(s){y=true
return true}else{return false}}
var v=function e(n,i){return React.createElement(_lessonCard2.default,{domain:s,handleUpNextHidden:a.handleUpNextHidden,key:n.slug,isFirst:i===0,register:t,shouldHighlight:b(n),shouldUseMastery:u,tutorial:n,upNext:c,isLoadingUserProgressData:r})}
return i.reduce(function(e,t,r){return[].concat(e,[v(t,r),g(o[t.slug])]).filter(Boolean)},[]).concat([f()])}
t.prototype.renderExperienceUpsell=function e(){var t=this.props.experienceUpsell
if(!t){return undefined}return React.createElement("div",{key:"experience-upsell",className:(0,_aphrodite.css)(styles.card)},React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContainer,styles.experienceUpsellModuleContainer)},React.createElement(_subjectExperienceUpsell2.default,babelHelpers.extends({renderAsSubjectModule:false},t))))}
t.prototype.renderUpNext=function e(){var t=this
var r=this.props,a=r.domain,n=r.quizzes,s=r.showStarterUpsell,i=r.upNext,o=r.unitTest,l=r.shouldUseMastery
if(!i){return}var u=i.item&&i.item.type!=="topic"
if(u){return null}var p=i.copy,d=i.item,c=i.prominence
var m=Object.keys(n).length
var g=l?_upNextShelf4.default:_upNextShelf2.default
return React.createElement(_wonderBlocksCoreV.View,{key:"up-next",style:[styles.card,l&&styles.masteryCard]},React.createElement(_wonderBlocksCoreV.View,{style:[!l&&styles.moduleContainer,!l&&styles.upNextModuleContainer,l&&styles.moduleContainerFullBleed]},s&&(o||m>0)?React.createElement(_startStudyGuideUpsell2.default,{numQuizzes:m,action:function e(){_bigbingo2.default.markConversion("up_next_cta_clicked",{type:"start"})
t.handleOpenItemInUpNext(d)},domain:a,shouldUseMastery:l}):React.createElement(g,{action:function e(){_bigbingo2.default.markConversion("up_next_cta_clicked",{type:d.type})
t.handleOpenItemInUpNext(d)},copy:p,domain:a,item:d,prominence:c,showRecommendationBadge:d.type==="tutorial"})))}
t.prototype.renderTopicDescription=function e(){var t=this.props.topic
return t.description&&React.createElement("div",{key:"topic-description",className:(0,_aphrodite.css)(styles.card)},React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContainer,styles.topicDescriptionModuleContainer)},React.createElement(_topicDescription2.default,t)))}
t.prototype.renderProgressAndPillsHeader=function e(t){var r=this
var a=this.props,n=a.unitMastery,s=a.shouldUseMastery,i=a.masteryUpdateComplete
var o=this.state,l=o.stickyHeaderBehavior,u=o.showMasteryCelebration,p=o.upNextNotificationVisibility,d=o.upNextNotificationSlug
if(!s||!n.pointsAvailable){return null}if(t){return React.createElement(_timeoutSpinner2.default,{sentryId:"topic_progress_user_progress",description:"Loading user progress data",size:"medium",style:styles.spinnerContainer,sentryTeam:"learning-platform"})}return React.createElement(_wonderBlocksCoreV.View,{style:[styles.progressHeader,l!=="normal"&&styles.stickyProgressHeader,u==="pending"&&styles.stickyProgressHeaderAboveShield]},React.createElement(_viewportWatcher2.default,null,function(e){return React.createElement(_masteryTopicUnitProgressHeader2.default,{allowCelebration:i,points:n.pointsEarned,totalPoints:n.pointsAvailable,onMastered:function t(a){return r.handleOnMastered(a,!e.atLeast("md"))}})}),this.renderUpNextPillTop(p,d))}
t.prototype.renderMasteryCelebration=function e(){var t=this.props,r=t.nextTopic,a=t.unitMastery
var n=r.next&&r.next.title||""
return React.createElement(_unitMasteredModal2.default,{masteryPoints:a.pointsEarned,pointsAvailable:a.pointsAvailable,nextUnitTitle:n,onClose:this.handleMasteryCelebrationClose,onNextUnit:this.handleMasteryCelebrationNextUnit})}
t.prototype.renderUpNextPillTop=function e(t,r){var a=this.props.shouldUseMastery
if(t!=="hidden-above"){return null}var n=function e(){return(0,_scrollToSlug2.default)(r,"top",undefined,a)}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.upNextTopContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.upNextPillContainer,styles.upNextTopRow)},React.createElement("div",{className:(0,_aphrodite.css)(styles.upNextCenter)},React.createElement(_upNextPill2.default,{direction:"above",onClick:n}))))}
t.prototype.renderUpNextPillBottom=function e(){var t=this.props.shouldUseMastery
var r=this.state,a=r.upNextNotificationVisibility,n=r.upNextNotificationSlug
if(a!=="hidden-below"){return null}var s=function e(){return(0,_scrollToSlug2.default)(n,"top",undefined,t)}
return React.createElement("div",{className:(0,_aphrodite.css)(styles.upNextBottomRow,styles.upNextPillContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.upNextCenter)},React.createElement(_upNextPill2.default,{direction:"below",onClick:s})))}
t.prototype.renderCelebrationPendingShield=function e(){var t=this.state.showMasteryCelebration
if(t!=="pending"){return}return React.createElement("div",{className:(0,_aphrodite.css)(styles.celebrationPendingShield)})}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.domain,n=r.masteryMap,s=r.unitMastery,i=r.quizzes,o=r.showStarterUpsell,l=r.tutorials,u=r.unitTest,p=r.upNext,d=r.shouldUseMastery
var c=this.state.showMasteryCelebration
var m=function e(t){if((0,_parseQueryString2.default)().open){var r=Object.keys(i).map(function(e){return i[e]}).concat([u]).filter(Boolean).find(function(e){return e.slug===t})
if(r){_modalNavigatorStore2.default.dispatch({type:"OpenItem",modalData:{items:[],referrer:"assignment",currentItem:r}})}}}
var g=function e(){return React.createElement(_wonderBlocksCoreV.View,null,t.renderUpNextPillBottom(),t.renderCelebrationPendingShield())}
var f=function e(r){return React.createElement("div",null,c==="show"&&t.renderMasteryCelebration(),t.renderProgressAndPillsHeader(r))}
var y=function e(r,a){return React.createElement(_wonderBlocksCoreV.View,{tabIndex:-1,"data-slug":"topic-progress"},t.renderUpNext(),t.renderExperienceUpsell(),t.renderRightItems(r,a),t.renderTopicDescription())}
var b=function e(t,r){var c=a==="test-prep"
var m=d&&!c?_masteryTopicSidebar2.default:_topicProgressSidebar2.default
return React.createElement(m,{masteryMap:n,unitMastery:s,spiedSlug:t,tutorials:l.map(function(e){var t=e.title,r=e.slug,a=e.id,n=e.contentItems
return{title:t,slug:r,id:a,contentItems:n}}),quizzes:i,unitTest:u,upNextItem:!o&&p?p.item:null,domain:a,minimalSidebarDesign:c,isLoadingUserProgressData:r})}
var v=d?_globalStyles.pageHeaderHeight+_masteryTopicUnitProgressHeader.PROGRESS_HEADER_HEIGHT:_globalStyles.pageHeaderHeight
var h=babelHelpers.extends({},this.props,{subjectChallenge:undefined})
return React.createElement(_kaQuery2.default,{query:USER_INFO_QUERY,variables:{topicId:this.props.topic.id},onlyFetchesUserData:true,refetchOnClientSideNav:true,onCompleted:this.updateUserInfoStore},function(e){var t=e.loading
return React.createElement(_curationPageLayout2.default,{footer:g,header:function e(){return f(t)},main:function e(r){return y(r,t)},sidebar:function e(r){return b(r,t)},onInitialScrollCompleted:m,modalRouteProps:h,path:"/:domain/*/modal/:type(v|e|a|quiz|test)/:id",shouldUseMastery:d,sidebarStickyOffset:v})})}
return t}(React.Component)
var getShouldUseMastery=function e(t){return typeof t.shouldUseMastery==="boolean"?t.shouldUseMastery:t.topic.masteryEnabled}
var mapStateToProps=function e(t,r){var a=t.bestScoreMap,n=t.masteryMap,s=t.recommendations,i=t.statusMap,o=t.unitMastery,l=t.masteryUpdateComplete
var u=r.includeUpNextShelf,p=r.nextTopic,d=r.quizzes,c=r.subject,m=r.tutorials,g=r.unitTest,f=r.videoAttribution,y=r.userAttemptQueryData
var b=s.reduce(function(e,t){var r
var a=t.kind,n=t.contentId
return babelHelpers.extends({},e,(r={},r[a+":"+n]=true,r))},{})
var v=function e(t){return t.contentItems.map(function(e){var r=i[e.progressKey]||"unstarted"
if(e.kind==="Exercise"){var s=n[e.progressKey]||"unfamiliar"
var o=a[e.progressKey]
var l=r!=="complete"&&!o?"unstarted":r
return babelHelpers.extends({kind:"Exercise"},e,{mastery:s,bestScore:o||undefined,relatedVideos:e.relatedVideos.map(function(e){return babelHelpers.extends({},e,{topicSlug:t.slug,attribution:f})}),status:l,topicSlug:t.slug,subjectTitle:c.title,subjectPath:c.url})}else if(e.kind==="Video"){return babelHelpers.extends({kind:"Video"},e,{status:r,topicSlug:t.slug,attribution:f})}else if(e.kind==="Article"){return babelHelpers.extends({kind:"Article"},e,{status:r,topicSlug:t.slug})}else if(e.kind==="Scratchpad"){return babelHelpers.extends({kind:"Scratchpad"},e,{status:r,topicSlug:t.slug})}else if(e.kind==="Talkthrough"){return babelHelpers.extends({kind:"Talkthrough"},e,{status:r,topicSlug:t.slug})}else if(e.kind==="Challenge"){return babelHelpers.extends({kind:"Challenge"},e,{status:r,topicSlug:t.slug})}else if(e.kind==="Project"){return babelHelpers.extends({kind:"Project"},e,{status:r,topicSlug:t.slug})}else if(e.kind==="Interactive"){return babelHelpers.extends({kind:"Interactive"},e,{status:r,topicSlug:t.slug})}throw new Error("Invalid kind: "+e.kind)})}
var h=m.map(function(e){return babelHelpers.extends({},e,{contentItems:v(e)})})
var x=h.reduce(function(e,t){var r
return babelHelpers.extends({},e,(r={},r[t.id]=t,r))},{})
var C={}
if(y.data&&y.data.user&&y.data.user.latestQuizAttempts){y.data.user.latestQuizAttempts.forEach(function(e){C[e.positionKey]=e})}var S=function e(a){return(0,_quizUtils.augmentWithUserInfoState)((0,_quizUtils.augmentWithUserAttemptData)(babelHelpers.extends({},a,{topic:r.topic,tutorials:a.tutorials.map(function(e){var t=e.id
return x[t]})}),C[a.positionKey]),t)}
var U=Object.entries(d).reduce(function(e,t){var r
var a=t[0],n=t[1]
return babelHelpers.extends({},e,(r={},r[a]=S(d[a]),r))},{})
var R=function e(t){return(0,_quizUtils.augmentWithUserAttemptData)(babelHelpers.extends({},S(t),{subjectTitle:c.title,subjectPath:c.url}),y.data&&y.data.user&&y.data.user.latestUnitTestAttempts&&y.data.user.latestUnitTestAttempts[0])}
var M=g?R(g):null
var k=getShouldUseMastery(r)
var N=u?(0,_calculateUpNext2.default)(p,U,s,c,h,M,n,o.percentage,k):null
var I=N&&!k?!(0,_calculateUpNext.hasUnlockedStudyPlan)(U,M,h):false
var q=h.map(function(e){return babelHelpers.extends({},e,{contentItems:e.contentItems.map(function(e){return babelHelpers.extends({},e,{recommended:!!b[e.kind+":"+e.contentId]})}),recommendationSource:(0,_calculateUpNext.findRecommendationSource)(e.id,e.contentItems,s,U,M)})})
var T=0
var H=0
for(var E=q,P=Array.isArray(E),D=0,E=P?E:E[Symbol.iterator]();;){var A
if(P){if(D>=E.length)break
A=E[D++]}else{D=E.next()
if(D.done)break
A=D.value}var j=A
for(var w=j.contentItems,z=Array.isArray(w),O=0,w=z?w:w[Symbol.iterator]();;){var Q
if(z){if(O>=w.length)break
Q=w[O++]}else{O=w.next()
if(O.done)break
Q=O.value}var B=Q
if(B.kind==="Exercise"){T++
if(B.status==="complete"){H++}}}}var L=T>0?{completed:H,total:T}:null
return{masteryMap:n,unitMastery:o,masteryUpdateComplete:l,tutorials:q,quizzes:U,showStarterUpsell:I,unitTest:M,upNext:N,exerciseProgress:L,shouldUseMastery:k,isLoadingUserAttemptData:y.loading}}
var mapDispatchToProps=function e(t,r){return{clearRecommendation:function e(a){t((0,_userInfoActions.clearForItem)(a,r.topic.id))},setCurrentTopic:function e(){var a=getShouldUseMastery(r)
if(a){var n=(0,_masteryUtils.getLoggedOutMasteryMap)(r.tutorials)
t((0,_userInfoActions.updateFpmMastery)({masteryMap:n,masteryPercentage:0,masteryPointsEarned:0,masteryPointsAvailable:Object.keys(n).length*_masteryUtils.levelPointsMap[_masteryUtils.constants.MASTERED]}))}t((0,_userInfoActions.setCurrentTopic)(r.topic.id,a))}}}
var mapPropsToExtras=function e(t){return{unit:t.topic.slug}}
var ConnectedTopicProgress=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)((0,_conversionContext.withConversionContext)(mapPropsToExtras)(TopicProgress)))
var FullyConnectedTopicProgress=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),o=0;o<s;o++){i[o]=arguments[o]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.renderFromQueryData=function(e){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedTopicProgress,babelHelpers.extends({userAttemptQueryData:e},a.props)))},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.render=function e(){var t=this.props,r=t.quizzes,a=t.unitTest,n=t.topic
if(r&&Object.keys(r).length||a){return React.createElement(_kaQuery2.default,{query:QUIZ_AND_TEST_QUERY,variables:{topicId:n.id},onlyFetchesUserData:true,refetchOnClientSideNav:true},this.renderFromQueryData)}else{return this.renderFromQueryData({loading:false})}}
return t}(React.Component)
exports.default=FullyConnectedTopicProgress
var styles=_aphrodite.StyleSheet.create({masteryCard:(_masteryCard={paddingLeft:32,paddingRight:32},_masteryCard[_mediaQueries2.default.smOrSmaller]={paddingRight:32},_masteryCard),card:(_card={display:"flex",flexDirection:"row",justifyContent:"flex-start",margin:"6px 0px 6px 0px",border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRadius:_globalStyles.borderRadius,backgroundColor:_globalStyles.colors.white,paddingRight:16},_card[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginRight:0,marginTop:0,borderRadius:0,paddingRight:0},_card[_mediaQueries2.default.lgOrSmaller]={justifyContent:"flex-end"},_card),moduleContainer:(_moduleContainer={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",overflow:"hidden",flex:1,flexGrow:1,paddingTop:24,marginRight:_gridConstants.RIGHT_MODULE_MARGIN,paddingBottom:28,marginLeft:_gridConstants.XL_MARGIN+_gridConstants.LEFT_MODULE_MARGIN},_moduleContainer[_mediaQueries2.default.lgOrSmaller]={marginLeft:_gridConstants.LEFT_MODULE_MARGIN},_moduleContainer[_mediaQueries2.default.lgOrLarger]={maxWidth:_gridConstants.MAX_MODULE_WIDTH},_moduleContainer[_mediaQueries2.default.md]={maxWidth:_gridConstants.MD_MODULE_WIDTH},_moduleContainer[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginRight:0,paddingLeft:16,paddingRight:16,paddingTop:22,paddingBottom:22},_moduleContainer),moduleContainerFullBleed:{padding:0,margin:0},experienceUpsellModuleContainer:(_experienceUpsellModu={},_experienceUpsellModu[_mediaQueries2.default.smOrSmaller]={paddingLeft:0,paddingRight:0},_experienceUpsellModu),upNextModuleContainer:(_upNextModuleContaine={paddingTop:32,paddingBottom:24},_upNextModuleContaine[_mediaQueries2.default.smOrSmaller]={paddingTop:32,paddingBottom:32},_upNextModuleContaine),topicDescriptionModuleContainer:{paddingBottom:22},progressHeader:{zIndex:_constants2.default.zindexPopover,position:"relative"},stickyProgressHeader:{position:"fixed",top:62,left:0,right:0},stickyProgressHeaderAboveShield:{zIndex:_constants2.default.zindexModalBackdrop+1},spinnerContainer:{paddingTop:(_masteryTopicUnitProgressHeader.PROGRESS_HEADER_HEIGHT-48)/2,height:_masteryTopicUnitProgressHeader.PROGRESS_HEADER_HEIGHT},upNextTopContainer:{position:"relative"},upNextTopRow:{position:"absolute",top:8},upNextBottomRow:{position:"fixed",bottom:8},upNextPillContainer:(_upNextPillContainer={right:0,zIndex:_constants2.default.zindexTooltip,width:"70%"},_upNextPillContainer[_mediaQueries2.default.smOrSmaller]={width:"100%"},_upNextPillContainer),upNextCenter:(_upNextCenter={width:"60%",margin:"auto"},_upNextCenter[_mediaQueries2.default.smOrSmaller]={width:"80%"},_upNextCenter),celebrationPendingShield:{position:"fixed",backgroundColor:_wonderBlocksColorV2.default.offBlack,opacity:_globalStyles.modalBackdropOpacity,top:0,bottom:0,left:0,right:0,zIndex:_constants2.default.zindexModalBackdrop}})

});
KAdefine("javascript/content-library-package/components/grid-constants.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var BASE_SIDEBAR_WIDTH=exports.BASE_SIDEBAR_WIDTH=300
var MIN_SIDEBAR_WIDTH=exports.MIN_SIDEBAR_WIDTH=268
var MAX_MODULE_WIDTH=exports.MAX_MODULE_WIDTH=2*386+64
var MD_MODULE_WIDTH=exports.MD_MODULE_WIDTH=2*335+32
var LEFT_MODULE_MARGIN=exports.LEFT_MODULE_MARGIN=32
var RIGHT_MODULE_MARGIN=exports.RIGHT_MODULE_MARGIN=16
var MODULE_MARGIN=exports.MODULE_MARGIN=LEFT_MODULE_MARGIN+RIGHT_MODULE_MARGIN
var XL_MARGIN=exports.XL_MARGIN=32-LEFT_MODULE_MARGIN
var DEFAULT_WIDTH=exports.DEFAULT_WIDTH="calc("+BASE_SIDEBAR_WIDTH+"px + (100% -\n    "+BASE_SIDEBAR_WIDTH+"px - ("+MAX_MODULE_WIDTH+"px + "+MODULE_MARGIN+"px +\n    "+XL_MARGIN+"px))/2)"
var BASE_CUTOFF=exports.BASE_CUTOFF=MAX_MODULE_WIDTH+MODULE_MARGIN+BASE_SIDEBAR_WIDTH
var MIN_CUTOFF=exports.MIN_CUTOFF=MAX_MODULE_WIDTH+MODULE_MARGIN+MIN_SIDEBAR_WIDTH

});
KAdefine("javascript/content-library-package/components/curation-page-layout.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _inner,_rightColumn,_sidebar
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRouterDom=require("react-router-dom")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _scrollSpyTracker=require("../components/scroll-spy-tracker.jsx")
var _scrollSpyTracker2=babelHelpers.interopRequireDefault(_scrollSpyTracker)
var _modalRoute=require("../components/modal-route.jsx")
var _modalRoute2=babelHelpers.interopRequireDefault(_modalRoute)
var _sideNav=require("../../components/side-nav-package/side-nav.jsx")
var _sideNav2=babelHelpers.interopRequireDefault(_sideNav)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var CurationPageLayout=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getChildProps=function e(){var r=this.props,t=r.onInitialScrollCompleted,a=r.modalRouteProps,o=r.path,l=r.shouldUseMastery
var s=function e(r){return React.createElement(_modalRoute2.default,babelHelpers.extends({modalType:r.match.params.type,modalId:r.match.params.id},a))}
return{mainProps:{style:styles.rightColumn,tabIndex:-1,"data-slug":"topic-progress"},routeProps:{path:o,render:s},scrollSpyTrackerProps:{onInitialScrollCompleted:t,shouldUseMastery:l},sidebarProps:{minHeight:400,scrollOffset:this.props.sidebarStickyOffset||_globalStyles.pageHeaderHeight,style:styles.sidebar}}}
r.prototype.render=function e(){var r=this.props,t=r.footer,a=r.header,o=r.main,l=r.sidebar
var s=this.getChildProps(),i=s.mainProps,n=s.routeProps,d=s.scrollSpyTrackerProps,c=s.sidebarProps
return React.createElement(_wonderBlocksCoreV.View,{id:"topic-progress"},a(),React.createElement(_scrollSpyTracker2.default,d,function(e,r){return React.createElement(_wonderBlocksCoreV.View,{style:styles.container},React.createElement(_wonderBlocksCoreV.View,{style:styles.inner},React.createElement(_sideNav2.default,c,l(r)),React.createElement(_strut2.default,{size:16}),React.createElement(_wonderBlocksCoreV.View,i,o(e)),React.createElement(_reactRouterDom.Route,n)))}),React.createElement(_wonderBlocksCoreV.View,null,t()))}
return r}(React.Component)
exports.default=CurationPageLayout
var constants={sidebarRightPadding:40,sidebarWidth:308}
var styles=_aphrodite.StyleSheet.create({container:{backgroundColor:_wonderBlocksColorV2.default.offWhite,width:"100%"},inner:(_inner={flexDirection:"row",width:1200,paddingLeft:20,paddingRight:20,margin:"auto"},_inner[_mediaQueries2.default.lgOrSmaller]={width:"100%"},_inner[_mediaQueries2.default.smOrSmaller]={paddingLeft:0,paddingRight:0,flexDirection:"column"},_inner),rightColumn:(_rightColumn={flex:1,flexGrow:1,backgroundColor:_wonderBlocksColorV2.default.offWhite,paddingTop:6,paddingBottom:6},_rightColumn[_mediaQueries2.default.smOrSmaller]={paddingTop:0,paddingBottom:0},_rightColumn),sidebar:(_sidebar={alignSelf:"stretch",width:constants.sidebarWidth},_sidebar[_mediaQueries2.default.lgOrSmaller]={width:constants.sidebarWidth-constants.sidebarRightPadding},_sidebar[_mediaQueries2.default.smOrSmaller]={display:"none"},_sidebar)})

});
KAdefine("javascript/content-library-package/components/topic-progress-sidebar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _progressMap
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _hoverBehavior=require("../../components/button-package/hover-behavior.jsx")
var _hoverBehavior2=babelHelpers.interopRequireDefault(_hoverBehavior)
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _contentIcon=require("../components/content-icon.jsx")
var _contentIcon2=babelHelpers.interopRequireDefault(_contentIcon)
var _recommendedIcon=require("../icons/recommended-icon.jsx")
var _trophyIcon=require("../icons/trophy-icon.jsx")
var _trophyIcon2=babelHelpers.interopRequireDefault(_trophyIcon)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var i18n=require("../../shared-package/i18n.js")
var removeNonExercises=function e(t){return t.kind==="Exercise"}
var getItemHashUrl=function e(t){return""+window.location.origin+window.location.pathname+"#"+t}
var handleElementClick=function e(t,r,o){_bigbingo2.default.markConversion("topic_progress_sidebar_navigate",{kind:t})
var a=window.location.hash.slice(1)
if(a!==r){window.location.href=getItemHashUrl(r);(0,_scrollToSlug2.default)(r,o)}}
var Item=function e(t){var r=t.children,o=t.description,a=t.isActive,s=t.isLast,i=t.isUpNext,n=t.onClick,l=t.title,c=t.slug
return React.createElement(_hoverBehavior2.default,{onClick:n},function(e,t){var n=e.hovered
return React.createElement("div",babelHelpers.extends({className:(0,_aphrodite.css)(styles.itemContainer,styles.withTopBorder,s&&styles.withBottomBorder,styles.clickable)},t),React.createElement(_strut2.default,{size:16}),i&&React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.upNextCallout},i18n._("Next")),i&&React.createElement(_strut2.default,{size:4}),React.createElement("a",{className:(0,_aphrodite.css)(styles.itemRightInset,a&&styles.itemRightInsetActive,styles.clickable,n&&styles.hoveredText,a&&styles.activeText),onClick:function e(t){return t.preventDefault()},href:getItemHashUrl(c)},React.createElement(_wonderBlocksTypographyV.Body,{style:styles.itemTitle},l)),o&&React.createElement(_strut2.default,{size:4}),o&&React.createElement("div",{className:(0,_aphrodite.css)(styles.itemSubContentsContainer,styles.itemRightInset)},React.createElement(_wonderBlocksTypographyV.Body,{style:styles.itemDescription},o)),r&&React.createElement(_strut2.default,{size:8}),r&&React.createElement("div",{className:(0,_aphrodite.css)(styles.itemSubContentsContainer,styles.itemRightInset)},r(n)),r?React.createElement(_strut2.default,{size:16-EXERCISE_ICON_PADDING}):React.createElement(_strut2.default,{size:16}))})}
var Tutorial=function e(t){var r=t.domain,o=t.isActive,a=t.isLast,s=t.isUpNext,i=t.tutorial
var n=i.contentItems,l=i.slug,c=i.title
var u=n.filter(removeNonExercises)
return React.createElement(Item,{domain:r,isActive:o,isLast:a,isUpNext:s,onClick:function e(){return handleElementClick("Tutorial",l,"top")},title:c,slug:l},u.length?function(e){return React.createElement("div",{className:(0,_aphrodite.css)(styles.exerciseIconsContainer)},u.map(function(e,t){return React.createElement("span",{key:e.contentId,className:(0,_aphrodite.css)(styles.clickable,styles.exerciseIconContainer,t<u.length-1&&styles.exerciseIconPaddingRight,styles.exerciseIconPaddingBottom)},React.createElement(_contentIcon2.default,{size:24,kind:e.kind,completed:e.status==="complete",started:e.status==="started"}),e.recommended&&React.createElement(_recommendedIcon.SmallRecommendedIcon,{backgroundColor:_globalStyles.colors.gray97,top:-5,left:17}))}))}:undefined)}
var scoreDescription=function e(t,r){var o=Math.round(100*t.numCorrect/t.numAttempted)
if(r!=null){var a=r(t.completedDate).fromNow()
return o+"% "+a}else{return o+"%"}}
var Quiz=(0,_createMomentLoader2.default)(function(e){var t=e.domain,r=e.isActive,o=e.isLast,a=e.isUpNext,s=e.moment,i=e.quiz
var n=i.numItems,l=i.score,c=i.slug,u=i.title
var d=l!=null?scoreDescription(l,s):i18n.ngettext("%(num)s question","%(num)s questions",n)
return React.createElement(Item,{description:d,domain:t,isActive:r,isLast:o,isUpNext:a,onClick:function e(){return handleElementClick("Quiz",c,"top")},title:u,slug:c})})
var UnitTest=(0,_createMomentLoader2.default)(function(e){var t=e.isActive,r=e.isUpNext,o=e.moment,a=e.unitTest
var s=a.numItems,i=a.score,n=a.slug
var l=a.title
var c=i!=null?scoreDescription(i,o):i18n.ngettext("%(num)s question","%(num)s questions",s)
var u=i?i.numCorrect===i.numAttempted?"aced":Math.round(100*i.numCorrect/i.numAttempted)>=70?"passed":"not-passed":"not-passed"
return React.createElement(_hoverBehavior2.default,{onClick:function e(){return handleElementClick("UnitTest",n,"bottom")}},function(e,o){var a=e.hovered
return React.createElement("div",babelHelpers.extends({className:(0,_aphrodite.css)(styles.unitTest,styles.clickable)},o),r&&React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.upNextCallout},i18n._("Next")),r&&React.createElement(_strut2.default,{size:4}),React.createElement("div",{className:(0,_aphrodite.css)(styles.unitTestTextAndTrophyContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.unitTestTextContainer)},React.createElement("a",{className:(0,_aphrodite.css)(a&&styles.hoveredText,t&&styles.activeText),onClick:function e(t){return t.preventDefault()},href:getItemHashUrl(n)},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:styles.unitTestTitle},l)),React.createElement(_strut2.default,{size:4}),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.itemDescription},c)),React.createElement(_trophyIcon2.default,{size:40,status:u})))})})
var ProgressMap=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.domain,o=t.spiedSlug,a=t.quizzes,s=t.tutorials,i=t.unitTest,n=t.upNextItem,l=t.isLoadingUserProgressData
var c=[]
s.forEach(function(e,t){c.push(React.createElement("li",{key:e.slug},React.createElement(Tutorial,{domain:r,isActive:o===e.slug,isLast:!i&&t===s.length-1&&!a[e.slug],isUpNext:!!n&&n.type==="tutorial"&&n.slug===e.slug,tutorial:e})))
if(a[e.slug]){var l=a[e.slug]
c.push(React.createElement("li",{key:l.slug},React.createElement(Quiz,{domain:r,isActive:o===l.slug,isLast:!i&&t===s.length-1,isUpNext:!!n&&n.type==="quiz"&&n.quiz.slug===l.slug,quiz:l})))}})
return React.createElement("nav",{role:"navigation","aria-labelledby":"topic-progress-sidebar-title",className:(0,_aphrodite.css)(styles.progressMap)},React.createElement("div",{className:(0,_aphrodite.css)(styles.scrollableProgressMap)},React.createElement(_strut2.default,{size:CONTENT_TOP_INSET-16}),React.createElement("div",{id:"topic-progress-sidebar-title",className:(0,_aphrodite.css)(styles.itemContainer,styles.progressMapTitle,styles.clickable),onClick:function e(){return(0,_scrollToSlug2.default)("topic-progress","top")}},React.createElement(_strut2.default,{size:16}),React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.headingText,tag:"h2"},i?i18n._("Progress"):i18n._("Lessons")),React.createElement(_strut2.default,{size:16})),l?React.createElement(_wonderBlocksCoreV.View,{style:styles.spinner},React.createElement(_spinner2.default,null)):React.createElement("ul",null,c),!i&&React.createElement(_strut2.default,{size:CONTENT_BOTTOM_INSET})),i&&!l&&React.createElement(UnitTest,{domain:r,isActive:o===i.slug,isUpNext:!!n&&n.type==="unit-test"&&n.test.slug===i.slug,unitTest:i}))}
return t}(_react.Component)
var TopicProgressSidebar=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){window.addEventListener("popstate",this.focusOnPopstate)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("popstate",this.focusOnPopstate)}
t.prototype.focusOnPopstate=function e(){var t=document.location.hash.slice(1)
if(t){var r=document.querySelector('[data-slug="'+t+'"]')
if(r){r.focus()}}}
t.prototype.render=function e(){var t=this.props,r=t.domain,o=t.quizzes,a=t.spiedSlug,s=t.tutorials,i=t.unitTest,n=t.upNextItem,l=t.isLoadingUserProgressData
return React.createElement("div",{className:(0,_aphrodite.css)(styles.container)},React.createElement("div",{className:(0,_aphrodite.css)(styles.progressMapContainer,!i&&styles.progressMapContainerWithoutUnitTest)},React.createElement(ProgressMap,{domain:r,spiedSlug:a,quizzes:o,tutorials:s,unitTest:i,upNextItem:n,isLoadingUserProgressData:l})))}
return t}(_react.Component)
exports.default=TopicProgressSidebar
var CONTENT_TOP_INSET=29
var CONTENT_LEFT_INSET=32
var CONTENT_BOTTOM_INSET=16
var EXERCISE_ICON_PADDING=8
var styles=_aphrodite.StyleSheet.create({container:{display:"flex",flexDirection:"column",flexGrow:1,alignItems:"flex-end",backgroundColor:_wonderBlocksColorV2.default.offWhite,height:"100%"},progressMapContainer:{display:"flex",flexDirection:"column",paddingBottom:CONTENT_BOTTOM_INSET,height:"100%"},progressMapContainerWithoutUnitTest:{paddingBottom:0},progressMap:(_progressMap={display:"flex",flexDirection:"column",maxHeight:"100%"},_progressMap[_mediaQueries2.default.lgOrSmaller]={width:"100%"},_progressMap),scrollableProgressMap:{display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"auto",position:"relative"},progressMapTitle:{fontFamily:"inherit",fontSize:18,fontWeight:"bold",lineHeight:1,color:_globalStyles.colors.gray17,":hover":{textDecoration:"underline"},borderLeft:"none"},withTopBorder:{borderTopWidth:1,borderTopStyle:"solid",borderTopColor:_globalStyles.colors.gray85},withBottomBorder:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:_globalStyles.colors.gray85},itemContainer:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:0,position:"relative",paddingLeft:16,borderLeftWidth:1,borderLeftStyle:"solid",borderLeftColor:_globalStyles.colors.gray85},itemTitle:{color:_wonderBlocksColorV2.default.offBlack64,display:"flex",flexDirection:"column",textDecoration:"none"},itemDescription:{color:_wonderBlocksColorV2.default.offBlack64},itemSubContentsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},itemRightInset:{paddingRight:16},itemRightInsetActive:{paddingRight:13},exerciseIconsContainer:{display:"flex",flexDirection:"row",flexWrap:"wrap"},exerciseIconContainer:{position:"relative"},exerciseIconPaddingRight:{paddingRight:EXERCISE_ICON_PADDING},exerciseIconPaddingBottom:{paddingBottom:EXERCISE_ICON_PADDING},upNextCallout:{color:_wonderBlocksColorV2.default.offBlack64},unitTest:{position:"relative",display:"flex",flexDirection:"column",flexShrink:0,paddingTop:16,paddingBottom:16,paddingRight:17,paddingLeft:CONTENT_LEFT_INSET,backgroundColor:_globalStyles.colors.white,borderTopRightRadius:_globalStyles.borderRadius,borderBottomRightRadius:_globalStyles.borderRadius,border:"solid 1px "+_globalStyles.colors.gray90},unitTestTextAndTrophyContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},unitTestTextContainer:{display:"flex",flexDirection:"column"},unitTestTitle:{color:_wonderBlocksColorV2.default.offBlack64,textDecoration:"none"},clickable:{cursor:"pointer",textDecoration:"none"},hoveredText:{textDecoration:"underline"},activeText:{fontWeight:"bold"},headingText:{color:_wonderBlocksColorV2.default.offBlack64},spinner:{height:"100vh",width:308}})

});
KAdefine("javascript/content-library-package/modules/full-bleed-image.jsx", function(require, module, exports) {
var _deferredImage=require("./../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var FullBleedImage=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement("div",null,React.createElement(_deferredImage2.default,{alt:this.props.imageCaption,src:(0,_staticUrl2.default)(this.props.imageUrl),className:css(styles.image)}))}
return r}(React.Component)
FullBleedImage.propTypes={imageCaption:PropTypes.string,imageUrl:PropTypes.string.isRequired}
FullBleedImage.defaultProps={imageCaption:""}
var styles=StyleSheet.create({image:{maxWidth:"100%"}})
module.exports=FullBleedImage

});
KAdefine("javascript/content-library-package/modules/khankids-upsell.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container,_wrapper,_container2,_image,_largeScreensOnly,_mediumOrSmallScreens
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksIconV=require("@khanacademy/wonder-blocks-icon-v1")
var _wonderBlocksIconV2=babelHelpers.interopRequireDefault(_wonderBlocksIconV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _analytics=require("../../khankids-package/lib/analytics.js")
var i18n=require("../../shared-package/i18n.js")
var KhanKidsUpsell=function(e){babelHelpers.inherits(r,e)
function r(){var a,t,l
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),o=0;o<n;o++){i[o]=arguments[o]}return l=(a=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),t),t.markConversion=function(){return(0,_analytics.markLandingPage)()},a),babelHelpers.possibleConstructorReturn(t,l)}r.prototype._renderTextOnly=function e(){var r=React.createElement(_wonderBlocksLinkV2.default,{skipClientNav:true,href:"/kids",onClick:this.markConversion},i18n.doNotTranslate("Khan Academy Kids"))
return React.createElement(_wonderBlocksCoreV.View,{style:textOnlyStyles.wrapper},React.createElement(_wonderBlocksCoreV.View,{style:[textOnlyStyles.container,sharedStyles.largeScreensOnly]},React.createElement(_wonderBlocksTypographyV.LabelLarge,{"aria-label":i18n._("Check out Khan Academy Kids, our mobile app covering math, reading and more, for ages two to six!"),style:textOnlyStyles.text},i18n.$_("Check out %(khanKidsLink)s, our mobile app covering math, reading and more, for ages two to six!",{khanKidsLink:r})),React.createElement(_wonderBlocksLinkV2.default,{skipClientNav:true,href:"/kids",onClick:this.markConversion},React.createElement(_wonderBlocksCoreV.View,{style:textOnlyStyles.link},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:textOnlyStyles.text},i18n._("Learn more")),React.createElement(_wonderBlocksIconV2.default,{style:textOnlyStyles.caret,size:"medium",icon:_wonderBlocksIconV.icons.caretRight})))),React.createElement(_wonderBlocksLinkV2.default,{skipClientNav:true,href:"/kids",onClick:this.markConversion,style:[textOnlyStyles.container,sharedStyles.mediumOrSmallScreensOnly]},React.createElement(_wonderBlocksCoreV.View,{style:textOnlyStyles.link},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:textOnlyStyles.text},i18n._("Check out Khan Academy Kids!")),React.createElement(_wonderBlocksIconV2.default,{style:textOnlyStyles.caret,size:"medium",icon:_wonderBlocksIconV.icons.caretRight}))))}
r.prototype._renderGraphical=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:graphicalStyles.wrapper},React.createElement(_wonderBlocksCoreV.View,{style:[graphicalStyles.container,graphicalStyles.flexRow]},React.createElement("img",{className:(0,_aphrodite.css)(graphicalStyles.image),alt:i18n._("Kodi Bear with a friendly smile"),src:(0,_staticUrl2.default)("/images/kids/kodi-circle@3x.png")}),React.createElement(_wonderBlocksCoreV.View,{style:[sharedStyles.largeScreensOnly,graphicalStyles.flexRow]},React.createElement(_wonderBlocksCoreV.View,{style:graphicalStyles.text},React.createElement(_wonderBlocksTypographyV.HeadingMedium,{style:graphicalStyles.heading},i18n.doNotTranslate("Khan Academy Kids")),React.createElement(_wonderBlocksTypographyV.Body,null,i18n._("Khan Academy Kids is our free comprehensive mobile app for kids ages two to six, covering math, reading, and more!"))),React.createElement(_wonderBlocksButtonV2.default,{skipClientNav:true,"aria-label":i18n._("Follow this link to learn more about Khan Academy Kids!"),kind:"primary",style:graphicalStyles.button,href:"/kids",onClick:this.markConversion},i18n._("Let's go!"))),React.createElement(_wonderBlocksButtonV2.default,{skipClientNav:true,"aria-label":i18n._("Follow this link to learn more about Khan Academy Kids!"),kind:"tertiary",href:"/kids",style:sharedStyles.mediumOrSmallScreensOnly,onClick:this.markConversion},React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:textOnlyStyles.smallScreenText},i18n._("Khan Academy Kids, a free app for ages two to six.")))))}
r.prototype.render=function e(){var r=false
if(r){return this._renderTextOnly()}else{return this._renderGraphical()}}
return r}(React.Component)
exports.default=KhanKidsUpsell
var textOnlyStyles=_aphrodite.StyleSheet.create({wrapper:{width:"100%",backgroundColor:_wonderBlocksColorV2.default.white,margin:"16px auto",alignItems:"center"},container:(_container={width:"100%",maxWidth:1200,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"8px 20px"},_container[_mediaQueries2.default.mdOrSmaller]={maxWidth:512},_container),link:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},text:{fontSize:16},caret:{marginRight:-6},smallScreenText:{whiteSpace:"initial"}})
var graphicalStyles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={width:"100%",backgroundColor:_globalStyles.colors.gray95,padding:"24px 0px"},_wrapper[_mediaQueries2.default.mdOrSmaller]={padding:"24px 16px"},_wrapper),container:(_container2={width:"100%",maxWidth:1160,padding:"24px 48px",margin:"auto",backgroundColor:_wonderBlocksColorV2.default.white,border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRadius:_globalStyles.borderRadius},_container2[_mediaQueries2.default.mdOrSmaller]={width:512,maxWidth:"100%",padding:"10px 20px"},_container2),text:{flexGrow:1},flexRow:{flexBasis:"100%",alignItems:"center",flexDirection:"row"},image:(_image={width:85,marginRight:18},_image[_mediaQueries2.default.mdOrSmaller]={width:32,marginRight:12},_image),heading:{marginBottom:8},button:{marginLeft:100,minWidth:138}})
var sharedStyles=_aphrodite.StyleSheet.create({largeScreensOnly:(_largeScreensOnly={},_largeScreensOnly[_mediaQueries2.default.mdOrSmaller]={display:"none"},_largeScreensOnly),mediumOrSmallScreensOnly:(_mediumOrSmallScreens={},_mediumOrSmallScreens[_mediaQueries2.default.lgOrLarger]={display:"none"},_mediumOrSmallScreens)})

});
KAdefine("javascript/content-library-package/modules/large-image-content-carousel.jsx", function(require, module, exports) {
var _babelHelpers$extends,_moduleContent,_image,_item,_content,_attributionContainer,_babelHelpers$extends2,_babelHelpers$extends3,_babelHelpers$extends4,_arrow,_dots
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _bigBingoLinks=require("../../page-package/big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _a11y=require("../../shared-styles-package/a11y.js")
var _a11y2=babelHelpers.interopRequireDefault(_a11y)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _iconAngleBracketLeft=require("../../shared-styles-package/icon.angleBracketLeft.js")
var _iconAngleBracketLeft2=babelHelpers.interopRequireDefault(_iconAngleBracketLeft)
var i18n=require("../../shared-package/i18n.js")
var animationTime=.6
var smallAnimationTime=.4
var chevronRightIcon={path:"M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z",width:63.034,height:100}
var ImageCredit=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.imageCredit)},i18n.$_("Image credit: %(name)s",{name:t.name}))}
var BetterMoneyHabits=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.betterMoneyHabits)},t.kind==="article"?i18n._("This article is brought to you with support from"):i18n._("This video is brought to you with support from"),React.createElement(_deferredImage2.default,{alt:i18n._("Better Money Habits® powered by Bank of America"),src:(0,_staticUrl2.default)("/images/partnerships/bmh-logo-no-disclaimer.svg"),className:(0,_aphrodite.css)(styles.betterMoneyHabitsLogo)}))}
var LargeImageContentCarousel=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,i
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),s=0;s<n;s++){o[s]=arguments[s]}return i=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),r),r.state={activeItem:0,hideImage:true,itemRefs:[]},r.activeTouch=null,r.animating=null,r.renderContentItem=function(e,t){var a=r.props.isBetterMoneyHabits
var i=r.state,n=i.activeItem,o=i.hideImage
var s=_ka2.default.isPhone?e.mobileImageUrl:e.imageUrl
var l=o?{}:{backgroundImage:(0,_staticUrl.cssUrl)(s)}
var d=t===n
var c=t===r.nextItem()
var u=t===r.prevItem()
return React.createElement(_clientLink2.default,babelHelpers.extends({style:[styles.item,d&&styles.activeItem,c&&styles.nextItem,u&&styles.prevItem],inlineStyles:l,inputRef:r.state.itemRefs[t],to:e.url,key:t,referrer:"featured_content","aria-hidden":d?false:true,tabIndex:d?0:-1,onKeyDown:function e(t){if(t.key==="ArrowRight"){r.moveTo(r.nextItem())}else if(t.key==="ArrowLeft"){r.moveTo(r.prevItem())}},onTouchStart:function e(t){if(!r.animating){r.activeTouch={x:t.touches[0].screenX,y:t.touches[0].screenY}}},onTouchMove:function e(t){if(r.activeTouch===null){return}var a=t.touches[0].screenX-r.activeTouch.x
var i=t.touches[0].screenY-r.activeTouch.y
if(Math.abs(a)<50||Math.abs(i*2)>Math.abs(a)){return}r.activeTouch=null
if(a<0){r.moveTo(r.nextItem(),"right")}else{r.moveTo(r.prevItem(),"left")}},onTouchEnd:function e(t){r.activeTouch=null}},r.getOptionalLinkProps()),React.createElement(_deferredImage2.default,{className:(0,_aphrodite.css)(styles.image),src:(0,_staticUrl2.default)(s),alt:"","aria-hidden":true}),React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},React.createElement("div",{className:(0,_aphrodite.css)(styles.innerContent)},React.createElement("div",{className:(0,_aphrodite.css)(styles.title)},e.title),React.createElement("div",{className:(0,_aphrodite.css)(styles.subtitle)},e.subtitle.trim().replace(/ ([^ ]+)$/," $1")),React.createElement("div",{className:(0,_aphrodite.css)(styles.learnMore)},r.getCopyForCallToAction(e),React.createElement("span",{"aria-hidden":"true",className:(0,_aphrodite.css)(styles.learnMoreIcon)},React.createElement(_icon2.default,{icon:chevronRightIcon,size:10,color:"#fff"})))),React.createElement("div",{className:(0,_aphrodite.css)(styles.gradientContainer)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.attributionContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.attribution)},React.createElement("div",null,e.imageCredit&&React.createElement(ImageCredit,{name:e.imageCredit})),React.createElement("div",null,a&&React.createElement(BetterMoneyHabits,{kind:e.kind}))))))},a),babelHelpers.possibleConstructorReturn(r,i)}t.getDerivedStateFromProps=function e(t,a){if(a.itemRefs.length<t.contentItems.length){var r=[]
for(var i=0;i<t.contentItems.length;i++){r[i]=React.createRef()}return babelHelpers.extends({},a,{itemRefs:r})}return a}
t.prototype.componentDidMount=function e(){this.setState({hideImage:false})}
t.prototype.setAnimating=function e(t){var a=this
if(this.animating){window.clearTimeout(this.animating)}this.animating=window.setTimeout(function(){a.animating=null
if(t){t()}},animationTime*1e3)}
t.prototype.prevItem=function e(){var t=this.props.contentItems.length
var a=this.state.activeItem
return a===0?t-1:a-1}
t.prototype.nextItem=function e(){var t=this.props.contentItems.length
var a=this.state.activeItem
return a===t-1?0:a+1}
t.prototype.moveTo=function e(t,a){var r=this
if(this.animating){return}var i=this.state.activeItem
var n=t-i
var o=Math.abs(n)
if(o===0){_reactDom2.default.findDOMNode(this.state.itemRefs[t].current).focus()
return}var e=0
if(a!=null){if(a==="right"){e=this.nextItem()}else if(a==="left"){e=this.prevItem()}}else{if(n>0){e=this.nextItem()}else{e=this.prevItem()}}this.setState({activeItem:e},function(){r.setAnimating(function(){r.moveTo(t)})})}
t.prototype.getOptionalLinkProps=function e(){if(this.props.bigBingoLinkConversion){return _bigBingoLinks2.default.handlersWithExtras([{id:this.props.bigBingoLinkConversion,extra:{module:"featured_content"}}])}return{}}
t.prototype.getCopyForCallToAction=function e(t){if(_ka2.default.language!=="en"){return i18n._("Learn more")}switch(t.kind){case"video":return i18n._("Watch video")
case"article":return i18n._("Read more")
default:return i18n._("Learn more")}}
t.prototype.render=function e(){var t=this
var a=this.props,r=a.contentItems,i=a.titleTag
var n=this.state.activeItem
var o=[]
var s=function e(a){var i=n===a
var s=r[a].title
o.push(React.createElement("li",{className:(0,_aphrodite.css)(styles.dotListItem),key:a},React.createElement("button",{"aria-label":i18n._("Go to %(title)s",{title:s}),"aria-pressed":i,onClick:function e(r){return t.moveTo(a)},className:(0,_aphrodite.css)(styles.dotLink,i&&styles.activeDotLink)})))}
for(var l=0;l<r.length;l++){s(l)}return React.createElement("div",{className:(0,_aphrodite.css)(styles.module,this.props.fullBleed&&styles.moduleFullBleed),role:"region",id:"featured-content-carousel","aria-labelledby":"featured-content-carousel-items-title","aria-live":"polite"},React.createElement(_title2.default,{id:"featured-content-carousel-items-title",className:(0,_aphrodite.css)(_a11y2.default.srOnly),tag:i},i18n._("Featured content")),React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContent),"data-test-id":"large-image-content-carousel"},r.map(this.renderContentItem),React.createElement("div",{className:(0,_aphrodite.css)(styles.arrow)},React.createElement("div",{className:(0,_aphrodite.css)(styles.arrowLink)},React.createElement("button",{"aria-label":i18n._("Previous item"),"aria-controls":"featured-content-carousel",onClick:function e(){return t.moveTo(t.prevItem(),"left")},className:(0,_aphrodite.css)(styles.arrowCircle)},React.createElement(_icon2.default,{color:_globalStyles2.default.colors.black,icon:_iconAngleBracketLeft2.default,size:14})))),React.createElement("div",{className:(0,_aphrodite.css)(styles.arrow,styles.rightArrow)},React.createElement("div",{className:(0,_aphrodite.css)(styles.arrowLink)},React.createElement("button",{"aria-label":i18n._("Next item"),"aria-controls":"featured-content-carousel",onClick:function e(){return t.moveTo(t.nextItem(),"right")},className:(0,_aphrodite.css)(styles.arrowCircle)},React.createElement(_icon2.default,{color:_globalStyles2.default.colors.black,icon:_iconAngleBracketLeft2.default,size:14})))),React.createElement("ul",{className:(0,_aphrodite.css)(styles.dots),"aria-controls":"featured-content-carousel"},o)))}
return t}(React.Component)
var styleConstants={maxWidth:_shared2.default.constants.pageWidth-2*_shared2.default.constants.moduleHorizontalPadding,bottomPadding:18,invisibleBorder:"1px solid rgba(0,0,0,0)"}
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,(_babelHelpers$extends={maxWidth:styleConstants.maxWidth,paddingBottom:_shared2.default.constants.moduleVerticalPadding,paddingLeft:0,paddingRight:0,paddingTop:_shared2.default.constants.moduleVerticalPadding,position:"relative",borderTop:styleConstants.invisibleBorder,borderBottom:styleConstants.invisibleBorder,borderLeft:styleConstants.invisibleBorder,borderRight:styleConstants.invisibleBorder},_babelHelpers$extends[_shared2.default.queries.small]={paddingBottom:_shared2.default.constants.moduleVerticalPaddingSmall,paddingTop:_shared2.default.constants.moduleVerticalPaddingSmall},_babelHelpers$extends)),moduleFullBleed:{maxWidth:"none",paddingTop:0,paddingBottom:0,borderLeft:"none",borderRight:"none"},moduleContent:(_moduleContent={overflow:"hidden",position:"relative"},_moduleContent["@media (min-width: "+styleConstants.maxWidth+"px)"]=babelHelpers.extends({},_shared2.default.fixBorderRadiusWithOverflow,{borderRadius:_shared2.default.borderRadius}),_moduleContent),image:(_image={display:"block",maxWidth:"100%",minHeight:300,visibility:"hidden"},_image[_shared2.default.queries.small]={minHeight:232},_image),item:(_item={backgroundPosition:"center center",backgroundSize:"cover",backgroundColor:_shared2.default.colors.black,display:"none",height:"auto",overflow:"hidden",position:"absolute",top:0,transform:"translate3d(0,0,0)",transition:"left "+animationTime+"s ease-in-out",width:"100%",zIndex:1},_item[_shared2.default.queries.small]={transition:"left "+smallAnimationTime+"s ease-in-out"},_item[":focus"]={outlineOffset:-4},_item),activeItem:{display:"block",left:0,position:"relative",zIndex:10},nextItem:{display:"block",left:"100%"},prevItem:{display:"block",left:"-100%"},content:(_content={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",bottom:0,color:_shared2.default.colors.white,left:0,paddingLeft:48,paddingRight:48,position:"absolute",right:0,top:0,textAlign:"center"},_content[_shared2.default.queries.small]={paddingLeft:16,paddingRight:16},_content),gradientContainer:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.89))",bottom:0,height:140,position:"absolute",width:"100%"},attributionContainer:(_attributionContainer={position:"absolute",bottom:0,left:0,width:"100%"},_attributionContainer[_shared2.default.queries.small]={position:"relative",height:"inherit"},_attributionContainer),attribution:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,(_babelHelpers$extends2={alignItems:"flex-end",boxSizing:"border-box",display:"flex",justifyContent:"space-between",paddingBottom:styleConstants.bottomPadding,width:"100%"},_babelHelpers$extends2[_shared2.default.queries.small]={flexDirection:"column",alignItems:"center",paddingTop:styleConstants.bottomPadding,paddingBottom:styleConstants.bottomPadding*2},_babelHelpers$extends2)),imageCredit:babelHelpers.extends({},_shared2.default.typography.labelSmall),betterMoneyHabits:babelHelpers.extends({},_shared2.default.typography.labelSmall,{display:"flex",flexDirection:"column",alignItems:"flex-start"}),betterMoneyHabitsLogo:{marginTop:6},innerContent:{maxWidth:512},title:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,_shared2.default.typography.desktopScalingOnMobile,(_babelHelpers$extends3={marginBottom:16},_babelHelpers$extends3[_shared2.default.queries.small]={fontSize:17,lineHeight:"23px"},_babelHelpers$extends3)),subtitle:babelHelpers.extends({},_shared2.default.typography.desktopScalingOnMobile,{fontSize:15}),learnMore:babelHelpers.extends({},_shared2.default.typography.bodyXsmallBold,(_babelHelpers$extends4={marginTop:16},_babelHelpers$extends4[_shared2.default.queries.medium]={display:"none"},_babelHelpers$extends4[_shared2.default.queries.small]={display:"none"},_babelHelpers$extends4)),learnMoreIcon:{marginLeft:5},arrow:(_arrow={bottom:0,position:"absolute",top:0,zIndex:20},_arrow[_shared2.default.queries.small]={display:"none"},_arrow),arrowLink:{alignItems:"center",display:"flex",fontSize:26,height:"100%",padding:25},arrowCircle:{backgroundColor:_shared2.default.colors.white,borderRadius:20,cursor:"pointer",height:40,paddingTop:4,textAlign:"center",width:40},leftArrow:{left:0},rightArrow:{right:0,transform:"scaleX(-1)"},dots:(_dots={display:"flex",flexDirection:"row",justifyContent:"center",bottom:15,left:0,right:0,position:"absolute",zIndex:20},_dots[_shared2.default.queries.small]={bottom:12},_dots),dotListItem:{float:"left"},dotLink:{background:_wonderBlocksColorV2.default.offBlack,border:"1.5px solid "+_wonderBlocksColorV2.default.white64,borderRadius:"50%",cursor:"pointer",display:"block",margin:6,padding:4,transition:"background "+_shared2.default.standardTransition,":hover":{background:_wonderBlocksColorV2.default.white},":focus":{outline:"1.5px solid "+_wonderBlocksColorV2.default.blue}},activeDotLink:{background:_wonderBlocksColorV2.default.white,position:"relative",overflow:"hidden","::after":{content:"''",position:"absolute",top:-2,left:-2,border:"6px solid rgba(0,0,0,0)"}}})
module.exports=LargeImageContentCarousel

});
KAdefine("javascript/content-library-package/modules/mappers.jsx", function(require, module, exports) {
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getStudentsForMappers {\n        user {\n            id\n            nickname\n            username\n            age\n        }\n        coach {\n            id\n            studentLists {\n                id\n                key\n                name\n            }\n            students {\n                id\n                nickname\n                username\n                age\n                studentLists {\n                    id\n                    key\n                }\n            }\n        }\n    }\n"],["\n    query getStudentsForMappers {\n        user {\n            id\n            nickname\n            username\n            age\n        }\n        coach {\n            id\n            studentLists {\n                id\n                key\n                name\n            }\n            students {\n                id\n                nickname\n                username\n                age\n                studentLists {\n                    id\n                    key\n                }\n            }\n        }\n    }\n"])
var _aphrodite=require("aphrodite")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _reactApollo=require("react-apollo")
var _kaProvider=require("../../components/ssr-package/ka-provider.jsx")
var _kaProvider2=babelHelpers.interopRequireDefault(_kaProvider)
var _mappersFormList=require("../components/mappers-form-list.jsx")
var _mappersFormList2=babelHelpers.interopRequireDefault(_mappersFormList)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var STUDENTS_QUERY=(0,_graphqlTag2.default)(_templateObject)
var Mappers=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props
return _react2.default.createElement(_kaProvider2.default,null,function(e){if(e.getUserProfile()&&r.data.loading){return _react2.default.createElement(_spinner2.default,null)}return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container)},_react2.default.createElement(_mappersFormList2.default,r))})}
return r}(_react2.default.Component)
var styles=_aphrodite.StyleSheet.create({container:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,_shared2.default.typography.bodySmall,{maxWidth:_shared2.default.constants.moduleWidthCentered})})
module.exports=(0,_reactApollo.graphql)(STUDENTS_QUERY)(Mappers)

});
KAdefine("javascript/content-library-package/modules/subject-challenge.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _container
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query courseChallengeAttemptQuery($topicId: String!) {\n        user {\n            id\n            latestCourseChallengeAttempt(\n                courseId: $topicId\n                onlyCompleted: true\n            ) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n            }\n        }\n    }\n"],["\n    query courseChallengeAttemptQuery($topicId: String!) {\n        user {\n            id\n            latestCourseChallengeAttempt(\n                courseId: $topicId\n                onlyCompleted: true\n            ) {\n                id\n                numAttempted\n                numCorrect\n                completedDate\n                canResume\n                isCompleted\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _aphrodite=require("aphrodite")
var _reactRouterDom=require("react-router-dom")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _masteryInterspersedQuiz=require("../components/mastery-interspersed-quiz.jsx")
var _masteryInterspersedQuiz2=babelHelpers.interopRequireDefault(_masteryInterspersedQuiz)
var _quizUtils=require("../utils/quiz-utils.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var COURSE_CHALLENGE_QUERY=(0,_graphqlTag2.default)(_templateObject)
var SubjectChallenge=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.isUpNext,a=r.masteryMap,o=r.masteryPoints,n=r.positionSlug,s=r.quizScores,l=r.subjectChallenge
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.container,t&&styles.upNextCard],"data-position-slug":n,tabIndex:-1},React.createElement(_kaQuery2.default,{query:COURSE_CHALLENGE_QUERY,variables:{topicId:l.topic.id},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){var r=(0,_quizUtils.augmentWithUserAttemptData)(l,e.data&&e.data.user&&e.data.user.latestCourseChallengeAttempt)
r.score=s[r.slug]||r.score
return React.createElement(_masteryInterspersedQuiz2.default,{quiz:r,masteryMap:a,masteryPoints:o,isUpNext:t,isLoadingUserAttemptData:e.loading})}))}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({upNextCard:{borderTop:"4px solid "+_wonderBlocksColorV2.default.blue},container:(_container={flexDirection:"column",alignItems:"flex-start",padding:"24px 24px 32px 24px",background:_wonderBlocksColorV2.default.white,border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRadius:4,marginBottom:68,overflow:"hidden"},_container[_mediaQueries2.default.smOrSmaller]={borderRadius:0,borderLeft:"none",borderRight:"none",width:"100%",margin:"0px 0px 16px 0px"},_container),upNextBorder:{marginLeft:-24,marginRight:-24,marginTop:-32,marginBottom:16,height:4,backgroundColor:_wonderBlocksColorV2.default.blue}})
function mapStateToProps(e){var r=e.masteryMap,t=e.subjectMastery,a=e.quizScores
return{masteryMap:r,masteryPoints:t,quizScores:a}}var ConnectedSubjectChallenge=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps)(SubjectChallenge))
exports.default=function(e){return React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedSubjectChallenge,e))}

});
KAdefine("javascript/content-library-package/modules/mastery-subject-progress-summary.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _reactMotion=require("react-motion")
var _masteryTopicUnitProgressBar=require("../../mastery-package/mastery-topic-unit-progress-bar.jsx")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var i18n=require("../../shared-package/i18n.js")
var strings={notStartedCaption:i18n._("Mastery points available in course"),startedCaption:i18n._("Mastery points"),getPercentMasteredString:function e(r){return i18n._("(%(percent)s%)",{percent:r})}}
var MasterySubjectProgressSummary=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderNotStarted=function e(){var r=this.props.subjectMastery.pointsAvailable
return _react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.container},_react2.default.createElement(_wonderBlocksTypographyV.HeadingSmall,null,r.toLocaleString()),_react2.default.createElement(_wonderBlocksTypographyV.Caption,{style:styles.possibleMasteryPoints},strings.notStartedCaption))}
r.prototype.renderStarted=function e(){var r=this.props.subjectMastery,t=r.percentage,a=r.pointsEarned,o=r.pointsAvailable
var n=Math.min(a,o)
var s=(0,_masteryUtils.getMasteryLevel)(a,o)
return _react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.container},_react2.default.createElement(_wonderBlocksTypographyV.HeadingSmall,null,_react2.default.createElement(_reactMotion.Motion,{style:{points:(0,_reactMotion.spring)(n,_masteryTopicUnitProgressBar.motionSpring)}},function(e){var r=e.points
return _react2.default.createElement("span",null,parseInt(r).toLocaleString())}),"/ ",o.toLocaleString(),"  ",_react2.default.createElement(_wonderBlocksCoreV.Text,{style:styles.percentMastered},strings.getPercentMasteredString(t))),_react2.default.createElement(_wonderBlocksTypographyV.Caption,{style:styles.possibleMasteryPoints},strings.startedCaption," • ",s.title))}
r.prototype.render=function e(){if(!this.props.subjectMastery){return null}var r=this.props.subjectMastery,t=r.pointsAvailable,a=r.pointsEarned
if(t<1){return _react2.default.createElement("div",null)}return a>0?this.renderStarted():this.renderNotStarted()}
return r}(_react.Component)
exports.default=MasterySubjectProgressSummary
var styles=_aphrodite.StyleSheet.create({container:{backgroundColor:_wonderBlocksColorV2.default.offWhite,flexShrink:0},percentMastered:{color:_wonderBlocksColorV2.default.offBlack64,fontWeight:"normal"},possibleMasteryPoints:{color:_wonderBlocksColorV2.default.offBlack64}})

});
KAdefine("javascript/content-library-package/modules/mission-progress.jsx", function(require, module, exports) {
var _babelHelpers$extends2,_babelHelpers$extends3,_mobile,_desktop,_missionCalloutsScrol,_missionCallout,_spaceBetweenMissions
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactMotion=require("react-motion")
var _missionProgressCallout=require("../components/mission-progress-callout.jsx")
var _missionProgressCallout2=babelHelpers.interopRequireDefault(_missionProgressCallout)
var _reactMotionCarousel=require("../components/react-motion-carousel.jsx")
var _reactMotionCarousel2=babelHelpers.interopRequireDefault(_reactMotionCarousel)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var i18n=require("../../shared-package/i18n.js")
var columnCount=3
var mobileHeaderHeight=44
var desktopHeaderHeight=60
var MissionProgress=function(e){babelHelpers.inherits(t,e)
function t(a){babelHelpers.classCallCheck(this,t)
var s=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
s.handleFinishRemoving=function(){if(!s._isMounted){return}s.cards.forEach(function(e){if(e!=null){e.checkMouse(s.mousePosition)}})}
s.handleMouseMove=function(e){s.mousePosition={x:e.pageX,y:e.pageY}}
s.state={hidden:{},isCollapsed:false}
s.cards=[]
s.mousePosition={x:0,y:0}
return s}t.prototype.componentDidMount=function e(){this._isMounted=true
document.addEventListener("mousemove",this.handleMouseMove)}
t.prototype.componentWillUnmount=function e(){this._isMounted=false
document.removeEventListener("mousemove",this.handleMouseMove)}
t.prototype.hideMission=function e(t){var a
this.setState({hidden:babelHelpers.extends({},this.state.hidden,(a={},a[t]=true,a))})}
t.prototype.getMissions=function e(){var t=this
return this.props.missions.filter(function(e){var a=e.slug
return!t.state.hidden[a]}).slice(0,columnCount)}
t.prototype.renderDesktop=function e(){var t=this
var a=this.getMissions()
var s=a.length>0?cardHeight+desktopHeaderHeight:0
return React.createElement(_reactMotion.Motion,{defaultStyle:{height:cardHeight+desktopHeaderHeight},style:{height:(0,_reactMotion.spring)(s,cardAnimationParameters)},onRest:function e(){if(s===0){t.setState({isCollapsed:true})}}},function(e){return React.createElement("span",{className:(0,_aphrodite.css)(styles.desktop),style:e},React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleTitle),tag:t.props.titleTag},i18n._("Recent missions")),React.createElement(_reactMotionCarousel2.default,{items:a,keyAttribute:"slug",className:(0,_aphrodite.css)(styles.missionCalloutsScrollWrapper),cardSize:cardWidth,cardAnimationParameters:cardAnimationParameters,itemContainerClassName:function e(t,a){return(0,_aphrodite.css)(styles.missionCallout,styles.spaceBetweenMissions)},renderItem:function e(a,s){return React.createElement(_missionProgressCallout2.default,babelHelpers.extends({},a,{onHide:function e(){return t.hideMission(a.slug)},ref:function e(a){t.cards[s]=a}}))},onFinishedRemoving:t.handleFinishRemoving}))})}
t.prototype.renderMobile=function e(){var t=this
var a=this.getMissions()
var s=a.length>0?Math.min(a.length,2)*cardHeight+Math.min(a.length,2)*mobilePadding+mobileHeaderHeight:0
return React.createElement(_reactMotion.Motion,{defaultStyle:{height:2*cardHeight*2*mobilePadding+mobileHeaderHeight},style:{height:(0,_reactMotion.spring)(s,cardAnimationParameters)},onRest:function e(){if(s===0){t.setState({isCollapsed:true})}}},function(e){return React.createElement("span",{className:(0,_aphrodite.css)(styles.mobile),style:e},React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleTitle),tag:t.props.titleTag},i18n._("Recent missions")),React.createElement(_reactMotionCarousel2.default,{items:a,keyAttribute:"slug",className:(0,_aphrodite.css)(styles.missionCalloutsScrollWrapper),cardSize:cardHeight,cardAnimationParameters:cardAnimationParameters,itemContainerClassName:function e(t,a,s){return(0,_aphrodite.css)(styles.missionCallout,s.length>1&&a<s.length-1&&styles.spaceBetweenMissions)},renderItem:function e(a,s){return React.createElement(_missionProgressCallout2.default,babelHelpers.extends({},a,{onHide:function e(){return t.hideMission(a.slug)},ref:function e(a){t.cards[s]=a}}))},handleFinishRemoving:t.handleFinishRemoving}))})}
t.prototype.render=function e(){var t=this.state.isCollapsed
return React.createElement("div",{className:(0,_aphrodite.css)(styles.module)},!t&&this.renderDesktop(),!t&&this.renderMobile())}
return t}(_react.Component)
var _sharedStyles$constan=_shared2.default.constants,moduleHorizontalPadding=_sharedStyles$constan.moduleHorizontalPadding,moduleHorizontalPaddingSmall=_sharedStyles$constan.moduleHorizontalPaddingSmall,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall
var paddingForScrollbar=16
var cardWidth=366
var cardHeight=136
var desktopPadding=32
var mobilePadding=20
var cardAnimationParameters={stiffness:950,damping:60}
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,(_babelHelpers$extends2={paddingTop:moduleVerticalPadding,paddingBottom:moduleVerticalPadding-paddingForScrollbar,paddingLeft:0,paddingRight:0},_babelHelpers$extends2[_shared2.default.queries.small]={paddingBottom:moduleVerticalPaddingSmall-paddingForScrollbar,paddingTop:moduleVerticalPaddingSmall},_babelHelpers$extends2)),moduleTitle:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends3={color:_shared2.default.colors.gray17,marginBottom:20,paddingLeft:moduleHorizontalPadding,paddingRight:moduleHorizontalPadding},_babelHelpers$extends3[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.subheadingMobile,{paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall}),_babelHelpers$extends3)),mobile:(_mobile={display:"none"},_mobile[_shared2.default.queries.small]={display:"block",overflow:"hidden"},_mobile),desktop:(_desktop={display:"block",overflow:"hidden"},_desktop[_shared2.default.queries.small]={display:"none"},_desktop),missionCalloutsScrollWrapper:(_missionCalloutsScrol={display:"flex",flexDirection:"row",alignItems:"flex-start",overflowX:"auto",paddingBottom:paddingForScrollbar,paddingLeft:moduleHorizontalPadding,paddingRight:moduleHorizontalPadding},_missionCalloutsScrol[_shared2.default.queries.small]={display:"flex",flexDirection:"column",alignItems:"stretch",paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall,overflow:"hidden"},_missionCalloutsScrol),missionCallout:(_missionCallout={flex:"0 0 "+cardWidth+"px"},_missionCallout[_shared2.default.queries.small]={flex:"0 0 "+cardHeight+"px"},_missionCallout.overflow="hidden",_missionCallout),spaceBetweenMissions:(_spaceBetweenMissions={marginRight:24},_spaceBetweenMissions[_shared2.default.queries.xlarge]={marginRight:desktopPadding},_spaceBetweenMissions[_shared2.default.queries.small]={marginRight:0,marginBottom:mobilePadding},_spaceBetweenMissions)})
module.exports=MissionProgress

});
KAdefine("javascript/content-library-package/modules/partnership-description.jsx", function(require, module, exports) {
var _babelHelpers$extends,_imageWrapper,_description
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _deferredImage=require("./../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var sharedStyles=require("../styles/shared.js")
var absoluteLinks=require("../../shared-package/absolute-links.js")
var PartnershipDescription=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.isOutro
var s=this.props.partnerUrl?React.createElement(_wonderBlocksLinkV2.default,{href:absoluteLinks.safeLinkTo(this.props.partnerUrl),skipClientNav:true},this.props.partnerUrlText||this.props.partnerUrl):null
var t=React.createElement("div",{className:css(!r&&styles.description)},this.props.description," ",s)
var a=React.createElement(_deferredImage2.default,{alt:this.props.imageCaption,src:(0,_staticUrl2.default)(this.props.imageUrl),className:css(styles.image,r&&styles.outroImage)})
return React.createElement("div",{className:css(styles.module,r?styles.borders:styles.backgroundColor)},React.createElement("div",{className:css(styles.container,r&&styles.outroContainer)},r&&t,React.createElement("div",{className:css(!r&&styles.imageWrapper)},a),!r&&t))}
return r}(React.Component)
PartnershipDescription.propTypes={description:PropTypes.string.isRequired,imageCaption:PropTypes.string,imageUrl:PropTypes.string.isRequired,isOutro:PropTypes.bool,partnerUrl:PropTypes.string,partnerUrlText:PropTypes.string}
PartnershipDescription.defaultProps={imageCaption:"",isOutro:false}
var styleConstants={descriptionWidth:580,imageWidth:360,modulePadding:40}
var styles=StyleSheet.create({module:babelHelpers.extends({},sharedStyles.moduleLayout.defaultSpacing,sharedStyles.typography.bodySmall),borders:{border:"solid "+sharedStyles.colors.gray85,borderWidth:"1px 0"},backgroundColor:{backgroundColor:"#fbfbfb"},container:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,(_babelHelpers$extends={alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-around",paddingLeft:styleConstants.modulePadding,paddingRight:styleConstants.modulePadding,width:"100%"},_babelHelpers$extends[sharedStyles.queries.small]={flexDirection:"column",padding:0},_babelHelpers$extends)),outroContainer:{display:"block",textAlign:"center",padding:0},imageWrapper:(_imageWrapper={marginRight:30,maxWidth:"100%"},_imageWrapper[sharedStyles.queries.small]={margin:"0 auto"},_imageWrapper),image:{maxWidth:"100%"},outroImage:{marginTop:20,width:300},description:(_description={maxWidth:styleConstants.descriptionWidth,whiteSpace:"pre-wrap",width:"100%"},_description[sharedStyles.queries.small]={margin:"0 auto",paddingLeft:10,paddingRight:10},_description)})
module.exports=PartnershipDescription

});
KAdefine("javascript/content-library-package/modules/programming-documentation.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var sharedStyles=require("../styles/shared.js")
var Spinner=require("../../shared-components-package/spinner.jsx")
var validTypes=["pjs","webpage","sql"]
var ProgrammingDocumentation=function(e){babelHelpers.inherits(t,e)
function t(){var o,a,r
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),i=0;i<n;i++){s[i]=arguments[i]}return r=(o=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.state={ProcessingJSDocumentation:null,WebpageDocumentation:null,SQLDocumentation:null},a.renderDocs=function(){var e={pjs:a.state.ProcessingJSDocumentation,webpage:a.state.WebpageDocumentation,sql:a.state.SQLDocumentation}[a.props.type]
return e?React.createElement(e,a.props):React.createElement(Spinner,null)},o),babelHelpers.possibleConstructorReturn(a,r)}t.prototype.UNSAFE_componentWillMount=function e(){var t=this
Promise.all([require.dynimport("../../scratchpad-documentation-package/pjs-documentation.jsx").then(function(e){return e.default}),require.dynimport("../../scratchpad-documentation-package/sql-documentation.jsx").then(function(e){return e.default}),require.dynimport("../../scratchpad-documentation-package/webpage-documentation.jsx").then(function(e){return e.default})]).then(function(e){var o=e[0],a=e[1],r=e[2]
t.setState({ProcessingJSDocumentation:o,SQLDocumentation:a,WebpageDocumentation:r})})}
t.prototype.render=function e(){return React.createElement("div",{className:css(this.props.moduleLayout&&styles.moduleLayout,this.props.maximizeWidth?styles.maximizeWidth:styles.moduleWidth,styles.module)},this.renderDocs())}
return t}(React.Component)
ProgrammingDocumentation.propTypes={hideTitle:PropTypes.bool,maximizeWidth:PropTypes.bool,moduleLayout:PropTypes.bool,type:PropTypes.oneOf(validTypes).isRequired}
ProgrammingDocumentation.validTypes=validTypes
ProgrammingDocumentation.defaultProps={hideTitle:true,maximizeWidth:false,moduleLayout:true}
var styles=StyleSheet.create({maximizeWidth:{width:"100%"},moduleLayout:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,sharedStyles.moduleLayout.defaultSpacing),module:babelHelpers.extends({},sharedStyles.typography.bodySmall),moduleWidth:{width:sharedStyles.constants.moduleWidthCentered}})
module.exports=ProgrammingDocumentation

});
KAdefine("javascript/content-library-package/modules/project-feedback.jsx", function(require, module, exports) {
var PropTypes=require("prop-types")
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Spinner=require("../../shared-components-package/spinner.jsx")
var ProjectFeedback=function(e){babelHelpers.inherits(r,e)
function r(){var t=this
var s,a,i
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,c=Array(o),n=0;n<o;n++){c[n]=arguments[n]}return i=(s=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(c))),a),a.state={ProjectFeedbackPage:null},a.renderBody=function(){if(a.state.ProjectFeedbackPage){return React.createElement(t.state.ProjectFeedbackPage,{topic:a.props.topic,hideSidebar:true})}else{return React.createElement(Spinner,null)}},s),babelHelpers.possibleConstructorReturn(a,i)}r.prototype.componentDidMount=function e(){var r=this
Promise.all([require.dynimport("../../projectfeedback-package/projectfeedback-form.jsx").then(function(e){return e.default}),require.dynimport("../../../stylesheets/discussion-package/discussion.less"),require.dynimport("../../../stylesheets/clarifications-package/clarifications.less")]).then(function(e){var t=e[0].ProjectFeedbackPage
r.setState({ProjectFeedbackPage:t})})}
r.prototype.render=function e(){return React.createElement("div",{className:css(styles.page)},this.renderBody())}
return r}(React.Component)
ProjectFeedback.propTypes={topic:PropTypes.shape({domainSlug:PropTypes.string.isRequired,hasPeerReviewedProjects:PropTypes.bool.isRequired,relativeUrl:PropTypes.string.isRequired,slug:PropTypes.string.isRequired,translatedTitle:PropTypes.string.isRequired}).isRequired}
var styles=StyleSheet.create({page:{width:800,margin:"40px auto"}})
module.exports=ProjectFeedback

});
KAdefine("javascript/content-library-package/modules/projects-in-progress.jsx", function(require, module, exports) {
var _babelHelpers$extends,_project
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getInProcessProjects($topicId: String!) {\n        user {\n            id\n            inProcessProjects(topicId: $topicId) {\n                status\n                title\n                link\n                screenshotPath\n                lastUpdated\n            }\n        }\n    }\n"],["\n    query getInProcessProjects($topicId: String!) {\n        user {\n            id\n            inProcessProjects(topicId: $topicId) {\n                status\n                title\n                link\n                screenshotPath\n                lastUpdated\n            }\n        }\n    }\n"])
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _separators=require("../../modules-package/separators.jsx")
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoConstants=require("../../user-info-store-package/user-info-constants.js")
var PROJECTS_QUERY=(0,_graphqlTag2.default)(_templateObject)
var ProjectsInProgress=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,n=Array(l),o=0;o<l;o++){n[o]=arguments[o]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={TimeAgo:null},a.updateUserInfoStore=function(e){if(!e.user||!e.user.inProcessProjects||e.user.inProcessProjects.length===0){return}var t=[]
var r=e.user.inProcessProjects
a.props.sections.forEach(function(e){if(r.some(function(t){return t.status===e.status})){t.push({title:e.title,ariaLabel:e.title,slug:e.slug})}})
var s=_userInfoStore2.default.dispatch
s({type:_userInfoConstants.UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS,topicId:a.props.topicId,floatingSidebarProjectLinks:t})},a.renderSection=function(e,t){var r=e.slug,s=e.title
if(t.length===0){return null}var l=a.props.domain
var n=a.state.TimeAgo
var o=t.map(function(e,t){return _react2.default.createElement("a",{href:e.link,className:(0,_aphrodite.css)(styles.project),key:e.link},_react2.default.createElement("img",{className:(0,_aphrodite.css)(styles.screenshot),alt:"",src:(0,_staticUrl2.default)(e.screenshotPath)}),_react2.default.createElement("div",null,_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.projectTitle),style:{color:_shared2.default.domainColors(l).domain3}},e.title),n&&_react2.default.createElement("div",null,_react2.default.createElement(n,{time:e.lastUpdated+"Z"}))))})
return _react2.default.createElement(_react2.default.Fragment,{key:r},_react2.default.createElement(_separators.NarrowSeparator,{alignment:"right"}),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.module),"data-slug":r},_react2.default.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleTitle),tag:"h2"},_react2.default.createElement("div",{style:{color:_shared2.default.domainColors(l).domain3}},s)),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.listings)},o)))},a.renderWithQueryData=function(e){if(e.loading){return _react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement(_separators.NarrowSeparator,{alignment:"right"}),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.module)},_react2.default.createElement(_spinner2.default,null)))}else if(!e.data||!e.data.user||!e.data.user.inProcessProjects||e.data.user.inProcessProjects.length===0){return null}else{var t=e.data.user.inProcessProjects
return a.props.sections.map(function(e){return a.renderSection(e,t.filter(function(t){return t.status===e.status}))})}},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.componentDidMount=function e(){var t=this
this._mounted=true
require.dynimport("../../react-components-package/timeago.jsx").then(function(e){return e.default}).then(function(e){if(t._mounted){t.setState({TimeAgo:e})}})}
t.prototype.componentWillUnmount=function e(){this._mounted=false}
t.prototype.render=function e(){return _react2.default.createElement(_kaQuery2.default,{query:PROJECTS_QUERY,variables:{topicId:this.props.topicId},onlyFetchesUserData:true,refetchOnClientSideNav:true,onCompleted:this.updateUserInfoStore},this.renderWithQueryData)}
return t}(_react2.default.Component)
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_shared2.default.moduleLayout.rightAlignment,_shared2.default.moduleLayout.defaultSpacing),moduleTitle:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends={marginBottom:20},_babelHelpers$extends[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.subheadingMobile),_babelHelpers$extends)),listings:{display:"flex",flexWrap:"wrap"},project:(_project={color:"inherit",display:"flex",flex:"0 0 50%",marginBottom:20,textDecoration:"none"},_project[_shared2.default.queries.small]={flex:"0 0 100%"},_project),screenshot:{border:"1px solid "+_shared2.default.colors.gray85,height:84,marginRight:16,width:84},projectTitle:babelHelpers.extends({},_shared2.default.typography.bodyXsmallBold)})
module.exports=ProjectsInProgress

});
KAdefine("javascript/content-library-package/modules/testimonials.jsx", function(require, module, exports) {
var _container,_testimonial,_first,_last,_imageContainer,_babelHelpers$extends,_babelHelpers$extends2
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var globalStyles=require("../../shared-styles-package/global-styles.js")
var mediaQueries=require("../../shared-styles-package/media-queries.js")
var Testimonial=function e(t){return React.createElement("div",{className:css(styles.testimonial,t.isFirst&&styles.first,t.isLast&&styles.last)},React.createElement("div",{className:css(styles.inner)},React.createElement("div",{className:css(styles.imageContainer)},React.createElement(_deferredImage2.default,{alt:"",className:css(styles.image),src:(0,_staticUrl2.default)(t.imageUrl)})),React.createElement("div",{className:css(styles.title)},t.title),React.createElement("div",{className:css(styles.quote)},"“",t.quote,"”")))}
var Testimonials=function e(t){return React.createElement("div",{className:css(styles.container)},t.testimonials.map(function(e,a){return React.createElement(Testimonial,babelHelpers.extends({},e,{key:a,isFirst:a===0,isLast:a===t.testimonials.length-1}))}))}
var constants={testimonialDesktopMaxWidth:385,testimonialMobileMaxWidth:600,testimonialContentsMaxWidth:350,imageWidth:78,imageOffsetTop:-26,imageMobileMarginTop:32,quotePadding:36,titleDesktopMarginTop:66,titleMobileMarginTop:16,quoteMarginTop:8,quoteMarginBottom:24}
var styles=StyleSheet.create({container:(_container={background:globalStyles.colors.gray98,display:"flex",justifyContent:"center",padding:"69px 0"},_container[mediaQueries.smOrSmaller]={flexDirection:"column"},_container),testimonial:(_testimonial={background:globalStyles.colors.white,border:"1px solid "+globalStyles.colors.gray85,borderRightWidth:0,display:"flex",flexDirection:"column",justifyContent:"flex-start",maxWidth:constants.testimonialDesktopMaxWidth},_testimonial[mediaQueries.smOrSmaller]={margin:"auto",maxWidth:constants.testimonialMobileMaxWidth,width:"100%",borderRightWidth:1,borderBottomWidth:0},_testimonial),inner:{position:"relative",display:"flex",flexDirection:"column",margin:"0 auto",maxWidth:constants.testimonialContentsMaxWidth},first:(_first={borderBottomLeftRadius:globalStyles.borderRadius,borderTopLeftRadius:globalStyles.borderRadius},_first[mediaQueries.smOrSmaller]={borderBottomLeftRadius:0,borderTopLeftRadius:0},_first),last:(_last={borderBottomRightRadius:globalStyles.borderRadius,borderTopRightRadius:globalStyles.borderRadius,borderRightWidth:1},_last[mediaQueries.smOrSmaller]={borderBottomRightRadius:0,borderTopRightRadius:0,borderBottomWidth:1},_last),imageContainer:(_imageContainer={display:"flex",position:"absolute",top:constants.imageOffsetTop,left:0,right:0},_imageContainer[mediaQueries.smOrSmaller]={position:"static",marginTop:constants.imageMobileMarginTop},_imageContainer),image:{borderRadius:constants.imageWidth/2,margin:"auto",width:constants.imageWidth,height:constants.imageWidth},title:babelHelpers.extends({},globalStyles.typography.bodyLarge,(_babelHelpers$extends={fontWeight:"bold",paddingLeft:constants.quotePadding,paddingRight:constants.quotePadding,marginTop:constants.titleDesktopMarginTop,textAlign:"center"},_babelHelpers$extends[mediaQueries.smOrSmaller]={marginTop:constants.titleMobileMarginTop},_babelHelpers$extends)),quote:babelHelpers.extends({},globalStyles.typography.bodySmall,(_babelHelpers$extends2={marginTop:constants.quoteMarginTop,marginBottom:constants.quoteMarginBottom,marginLeft:"auto",marginRight:"auto",paddingLeft:constants.quotePadding,paddingRight:constants.quotePadding,textIndent:"-0.4em"},_babelHelpers$extends2[mediaQueries.smOrSmaller]={paddingLeft:0,paddingRight:0,textAlign:"center"},_babelHelpers$extends2))})
module.exports=Testimonials

});
KAdefine("javascript/content-library-package/modules/quick-links.jsx", function(require, module, exports) {
"use strict"
var _babelHelpers$extends,_linkArea
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _createReactClass=require("create-react-class")
var _createReactClass2=babelHelpers.interopRequireDefault(_createReactClass)
var _aphrodite=require("aphrodite")
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _utils=require("../../components/client-link-package/utils.js")
var i18n=require("../../shared-package/i18n.js")
var QuickLinks=(0,_createReactClass2.default)({displayName:"QuickLinks",propTypes:{links:_propTypes2.default.arrayOf(_propTypes2.default.shape({title:_propTypes2.default.string.isRequired,url:_propTypes2.default.string.isRequired})).isRequired,titleTag:_propTypes2.default.string},render:function e(){var a=this.props.titleTag
var t=this.props.links.map(function(e,a){return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.link),key:a},_react2.default.createElement(_wonderBlocksLinkV2.default,{key:a,href:e.url,kind:"secondary",skipClientNav:!(0,_utils.pathIsInShell)(e.url)},e.title))})
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.module)},_react2.default.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleTitle),tag:a},i18n._("Topics")),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.linkArea)},t))}})
var styleConstants={columnCount:4,columnGap:32,columnGapSmall:24,columnWidth:266,columnWidthSmall:226,linkLineHeight:18,linkPadding:17}
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing),moduleTitle:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_shared2.default.colors.gray17,marginBottom:20},_babelHelpers$extends[_shared2.default.queries.small]=babelHelpers.extends({},_shared2.default.typography.subheadingMobile),_babelHelpers$extends)),linkArea:(_linkArea={columnCount:styleConstants.columnCount,columnGap:styleConstants.columnGapSmall,columnWidth:styleConstants.columnWidthSmall,lineHeight:styleConstants.linkLineHeight+styleConstants.linkPadding+"px",marginBottom:-styleConstants.linkPadding/2,marginTop:-styleConstants.linkPadding/2},_linkArea[_shared2.default.queries.xlarge]={columnGap:styleConstants.columnGap,columnWidth:styleConstants.columnWidth},_linkArea),link:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}})
module.exports=QuickLinks

});
KAdefine("javascript/content-library-package/modules/social-links.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var globalStyles=require("../../shared-styles-package/global-styles.js")
var i18n=require("../../shared-package/i18n.js")
var Icon=require("../../shared-styles-package/icon.jsx")
var iconPaths={facebook:{ariaLabel:i18n._("Facebook"),iconPath:{path:"M30.952 32.701l15.582 0l-1.855 17.225l-13.727 0l0 49.873l-20.67 0l0-49.873l-10.282 0l0-17.225l10.282 0l0-10.335q0-11.024 5.194-16.695t17.172-5.671l13.727 0l0 17.172l-8.586 0q-4.717 0-5.777 1.749t-1.06 5.194l0 8.586z",width:46.628,height:100},height:20},twitter:{ariaLabel:i18n._("Twitter"),iconPath:{path:"M90.576 23.128q0 17.528-9.8 32.48-10.864 16.576-28.336 22.848-9.688 3.472-20.664 3.472-17.36 0-31.752-9.296 2.24.28 4.984.28 14.392 0 25.704-8.848-6.72-.056-12.04-4.088t-7.28-10.248q2.128.336 4.368.336t4.928-.728q-7.168-1.456-11.872-7.112t-4.704-13.16l0-.28q4.368 2.408 9.352 2.632-4.2-2.8-6.72-7.336-2.464-4.536-2.464-10.024t2.8-10.248q7.728 9.52 18.816 15.232t23.8 6.384q-.504-2.408-.504-4.76 0-8.568 6.048-14.616t14.784-6.048 14.952 6.552q7-1.344 13.104-4.984-2.352 7.336-9.072 11.368 5.936-.616 11.872-3.192-4.312 6.272-10.36 10.696.056.896.056 2.688z",width:100,height:81.233},height:16},googleplus:{ariaLabel:i18n._("Google Plus"),iconPath:{path:"M18.974 91.531q6.837 3.657 14.628 3.657 7.738 0 13.621-3.233 5.83-3.233 5.83-11.077 0-3.922-1.749-6.466t-3.657-4.346-3.657-3.074q-1.696-1.219-3.18-2.226t-1.855-1.272q-7.844-.848-16.006 1.802-11.766 3.869-11.766 13.78 0 4.134 2.173 7.367 2.12 3.233 5.618 5.088zm26.818-61.586q0-4.876-1.007-8.904-1.007-4.081-2.862-7.897t-5.088-6.307-7.208-2.491q-5.671 0-8.745 4.187t-3.074 10.176 2.968 12.455 8.003 9.434q2.809 1.59 5.883 1.537 5.83 0 8.48-3.657t2.65-8.533zm-7.95-29.945l26.5 0l-8.215 4.77l-8.162 0q4.293 2.703 6.678 7.632t2.385 9.805q-.053 9.116-4.823 13.992-1.961 2.12-3.975 3.922-4.717 4.293-4.77 7.473t3.551 6.307q1.59 1.378 3.551 2.915 7.844 6.148 9.699 11.554 1.325 3.975 1.325 7.42 0 9.699-8.851 17.331t-25.069 7.685q-7.685-.053-12.985-2.067-5.353-2.014-8.215-4.081t-4.664-5.353-1.802-7.208 2.12-8.056q5.3-10.6 24.115-13.515 4.505-.689 9.063-.795-3.869-5.035-3.869-9.063-.053-1.59.583-3.127t.742-2.067q-2.438.318-4.24.318-9.01 0-15.476-5.936-6.466-5.989-6.466-14.681t5.777-15.423q5.777-6.678 14.204-8.533 5.671-1.219 11.289-1.219zm62.964 15.476l0 7.791l-15.529 0l0 15.476l-7.738 0l0-15.476l-15.529 0l0-7.791l15.529 0l0-15.476l7.738 0l0 15.476l15.529 0z",width:100,height:100},height:18},email:{ariaLabel:i18n._("Email"),iconPath:{path:"M8.967 71.687l82.418 0q.735 0 1.274-.539t.539-1.274l0-42.973q-1.813 2.009-3.871 3.675-14.945 11.515-20.825 16.415t-7.693 6.272-4.851 2.695q-3.038 1.372-5.733 1.372l-.098 0q-2.695 0-5.733-1.372t-4.851-2.695q-1.813-1.372-7.693-6.272t-20.825-16.415q-2.058-1.666-3.871-3.675l0 42.973q0 .735.539 1.274t1.274.539zm84.231-62.034q0-2.499-1.813-2.499l-82.418 0q-.735 0-1.274.539t-.539 1.274q0 9.408 8.232 15.925 21.952 17.297 25.676 20.433 5.733 4.851 9.065 4.851l.098 0q2.254 0 5.194-2.009t7.056-5.537q11.662-9.261 22.491-17.738 3.038-2.401 5.635-6.468t2.597-7.399l0-1.372zm7.154-.686l0 60.907q0 3.675-2.646 6.321t-6.321 2.646l-82.418 0q-3.675 0-6.321-2.646t-2.646-6.321l0-60.907q0-3.675 2.646-6.321t6.321-2.646l82.418 0q3.675 0 6.321 2.646t2.646 6.321z",width:100,height:78.564},height:16}}
var SocialIcon=function e(t){var l=t.type,a=t.url
return React.createElement("a",{"aria-label":iconPaths[l].ariaLabel,href:a,className:css(styles.link)},React.createElement(Icon,{icon:iconPaths[l].iconPath,size:iconPaths[l].height}))}
var SocialLinks=function e(t){var l=t.links
return React.createElement("div",{className:css(styles.root)},l.map(function(e,t){return React.createElement(SocialIcon,babelHelpers.extends({key:t},e))}))}
var styles=StyleSheet.create({root:{alignItems:"center",background:globalStyles.colors.white,display:"flex",height:120,justifyContent:"center"},link:{color:globalStyles.colors.gray17,margin:"0 8px",padding:"0 10px",":hover":{opacity:.6}}})
module.exports=SocialLinks

});
KAdefine("javascript/content-library-package/modules/subject-experience-upsell.jsx", function(require, module, exports) {
var _flexContainer,_contentContainer,_experienceContainer,_notOnMobile,_mobileOnly
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var SubjectExperienceUpsell=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderExperience=function e(t){var r=this.props.experience
return React.createElement("div",{className:(0,_aphrodite.css)(styles.experienceContainer,t==="mobile"&&styles.mobileOnly,t==="desktop"&&styles.notOnMobile)},React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.experienceTitle,t==="desktop"&&styles.experienceTitleDesktop)},r.title),React.createElement("div",{className:(0,_aphrodite.css)(styles.experienceDescription)},r.description)),React.createElement("div",null,React.createElement(_button2.default,{type:"primary",color:"#1865f2",href:r.url},r.callToAction)))}
t.prototype.render=function e(){var t=this.props,r=t.content,n=t.renderAsSubjectModule
return React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContainer,n&&styles.subjectModuleContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.contentTitle,styles.notOnMobile)},r.title),React.createElement("div",{className:(0,_aphrodite.css)(styles.flexContainer)},this.renderExperience("mobile"),React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.contentTitle,styles.mobileOnly)},r.title),React.createElement("div",{className:(0,_aphrodite.css)(styles.contentLargeTitle)},r.largeTitle),React.createElement("div",{className:(0,_aphrodite.css)(styles.contentDescription)},r.description)),this.renderExperience("desktop")))}
return t}(React.Component)
SubjectExperienceUpsell.defaultProps={renderAsSubjectModule:true}
var styles=_aphrodite.StyleSheet.create({moduleContainer:{width:"100%"},subjectModuleContainer:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing),flexContainer:(_flexContainer={display:"flex",flexDirection:"row"},_flexContainer[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_flexContainer),contentContainer:(_contentContainer={flex:"1 1 0",paddingRight:15,paddingBottom:15},_contentContainer[_mediaQueries2.default.smOrSmaller]={paddingLeft:15},_contentContainer),contentTitle:{paddingTop:2,paddingBottom:2,fontSize:"14px",lineHeight:1.29,color:_shared2.default.colors.gray68},contentLargeTitle:{fontSize:"28px",fontWeight:"bold",paddingTop:2,paddingBottom:2,lineHeight:1.14,color:_shared2.default.colors.gray17,marginTop:10,marginBottom:20},contentDescription:{fontSize:"16px",lineHeight:1.38,color:_shared2.default.colors.gray17},experienceContainer:(_experienceContainer={flex:"1 1 0",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:_shared2.default.borderRadius,backgroundColor:_shared2.default.colors.gray97,padding:16},_experienceContainer[_mediaQueries2.default.smOrSmaller]={borderRadius:0,marginBottom:25},_experienceContainer),experienceTitle:{fontSize:"20px",fontWeight:"bold",lineHeight:1.2,marginBottom:10},experienceTitleDesktop:{marginBottom:24},experienceDescription:{fontSize:"16px",lineHeight:1.38,color:_shared2.default.colors.gray17,marginBottom:15},notOnMobile:(_notOnMobile={},_notOnMobile[_mediaQueries2.default.smOrSmaller]={display:"none"},_notOnMobile),mobileOnly:(_mobileOnly={display:"none"},_mobileOnly[_mediaQueries2.default.smOrSmaller]={display:"block"},_mobileOnly)})
module.exports=SubjectExperienceUpsell

});
KAdefine("javascript/content-library-package/modules/subject-intro.jsx", function(require, module, exports) {
var _mobileLayout,_desktopLayout,_babelHelpers$extends,_videoDesktop
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _utils=require("../../components/client-link-package/utils.js")
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _main=require("../../utils/time-package/main.js")
var _functions=require("../styles/functions.js")
var _functions2=babelHelpers.interopRequireDefault(_functions)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var i18n=require("../../shared-package/i18n.js")
var playIcon="M1.6,9.9C1.5,10,1.3,10,1.2,10C1.1,10,1,10,0.9,9.9C0.7,9.8,0.6,9.6,\n    0.6,9.4V0.6c0-0.2,0.2-0.4,0.4-0.5C1.1,0,1.4,0,1.6,0.1l7.6,4.5c0.2,0.1,\n    0.3,0.3,0.3,0.5c0,0.2-0.1,0.4-0.3,0.5L1.6,9.9z"
var SubjectIntro=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.callToAction,s=t.description,i=t.domain,l=t.isLandingPageIntro,r=t.showHeader,n=t.title,o=t.titleTag,d=t.topImageUrl,c=t.url,u=t.video
var p=_shared2.default.domainColors(i),m=p.domain1
var h=o||"div"
var b=React.createElement("div",{className:(0,_aphrodite.css)(styles.title,l&&styles.largeTitle)},n)
var y=React.createElement("div",null,d&&React.createElement(_deferredImage2.default,{className:(0,_aphrodite.css)(styles.topImage),alt:"",src:(0,_staticUrl2.default)(d)}),r&&React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.moduleHeader),tag:h},i18n._("Get Started"),b),!r&&React.createElement(h,null,b))
var g=React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.description)},s),a&&React.createElement(_wonderBlocksButtonV2.default,{href:c,kind:"secondary",skipClientNav:!(0,_utils.pathIsInShell)(c)},a,React.createElement("span",{className:"sr-only"},": ",n)))
if(u==null){return React.createElement("div",{className:(0,_aphrodite.css)(styles.contentModule),style:{position:"relative",zIndex:1}},y,g)}var v=React.createElement(_clientLink2.default,{to:u.url,style:[styles.video]},React.createElement("span",{className:(0,_aphrodite.css)(styles.playButton),style:{backgroundColor:_functions2.default.fade(m,.9)}},React.createElement("span",{className:(0,_aphrodite.css)(styles.playButtonIcon)},React.createElement(_icon2.default,{icon:playIcon,size:40,color:_shared2.default.colors.white}))),React.createElement("span",{className:"sr-only"},i18n._("Watch an introduction video")),React.createElement(_deferredImage2.default,{alt:"",className:(0,_aphrodite.css)(styles.thumbnail),src:(0,_staticUrl2.default)(u.thumbnail)}),React.createElement("span",{className:(0,_aphrodite.css)(styles.duration)},React.createElement("span",{"aria-hidden":true},(0,_main.formatTimeDisplay)(u.duration)),React.createElement("span",{className:"sr-only"},(0,_main.formatTimeDisplayAria)(u.duration))))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.videoModule)},React.createElement("div",{className:(0,_aphrodite.css)(styles.mobileLayout)},y,l&&React.createElement("div",{className:(0,_aphrodite.css)(styles.descriptionMobile)},g),React.createElement("div",{className:(0,_aphrodite.css)(styles.videoContainer,styles.videoMobile,l&&styles.landingPageVideoMobile)},v,React.createElement("div",{className:(0,_aphrodite.css)(styles.videoResponsiveSpacer)})),!l&&React.createElement("div",{className:(0,_aphrodite.css)(styles.descriptionMobile)},g)),React.createElement("div",{className:(0,_aphrodite.css)(styles.desktopLayout)},React.createElement("div",{className:(0,_aphrodite.css)(styles.videoLayoutContent)},y,g),React.createElement("div",{className:(0,_aphrodite.css)(styles.videoContainer,styles.videoDesktop)},v,React.createElement("div",{className:(0,_aphrodite.css)(styles.videoResponsiveSpacer)}))))}
return t}(React.Component)
var styleConstants={playButtonSize:82,responsiveThumbnailWidth:344,responsiveThumbnailHeight:194,topImageMaxWidth:256,topImageMargin:16,descriptionMaxWidth:512,landingPageTabletMaxWidth:512,landingPageTabletThumbnailHeight:288}
var styles=_aphrodite.StyleSheet.create({contentModule:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,{maxWidth:_shared2.default.constants.moduleWidthCentered,textAlign:"center"}),videoModule:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing),mobileLayout:(_mobileLayout={flexDirection:"column",display:"none",textAlign:"center",width:"100%"},_mobileLayout[_shared2.default.queries.small]={display:"flex"},_mobileLayout),desktopLayout:(_desktopLayout={display:"flex",justifyContent:"space-between",width:"100%"},_desktopLayout[_shared2.default.queries.small]={display:"none"},_desktopLayout),videoLayoutContent:{maxWidth:568},moduleHeader:babelHelpers.extends({},_shared2.default.typography.accentHeading,{marginBottom:8}),topImage:{marginBottom:styleConstants.topImageMargin,maxWidth:styleConstants.topImageMaxWidth,width:"100%"},title:babelHelpers.extends({textTransform:"initial",letterSpacing:"initial"},_shared2.default.typography.subheadingDesktop,{color:_shared2.default.colors.gray17,marginBottom:16}),largeTitle:babelHelpers.extends({},_shared2.default.typography.conceptHeadingDesktop,(_babelHelpers$extends={maxWidth:475},_babelHelpers$extends[_shared2.default.queries.medium]={maxWidth:_shared2.default.landingPageTabletMaxWidth},_babelHelpers$extends[_shared2.default.queries.small]={maxWidth:"none"},_babelHelpers$extends)),description:babelHelpers.extends({},_shared2.default.typography.bodySmall,{marginBottom:16}),descriptionMobile:{margin:"0 auto",maxWidth:styleConstants.descriptionMaxWidth},video:babelHelpers.extends({},_shared2.default.mixins.position("absolute",0,0,0,0),{background:"#e6e6e6",borderRadius:_shared2.default.borderRadius,display:"block",overflow:"hidden",":hover":{textDecoration:"none"}}),videoContainer:{position:"relative",width:"100%"},videoDesktop:(_videoDesktop={marginLeft:40,maxHeight:_shared2.default.thumbnailSizes.xxlarge.height,maxWidth:_shared2.default.thumbnailSizes.xxlarge.width},_videoDesktop[_shared2.default.queries.medium]={maxHeight:styleConstants.responsiveThumbnailHeight,maxWidth:styleConstants.responsiveThumbnailWidth},_videoDesktop),videoMobile:{marginBottom:20,marginLeft:"auto",marginRight:"auto",maxHeight:styleConstants.responsiveThumbnailHeight,maxWidth:styleConstants.responsiveThumbnailWidth},landingPageVideoMobile:{maxHeight:styleConstants.landingPageTabletThumbnailHeight,maxWidth:styleConstants.landingPageTabletMaxWidth},videoResponsiveSpacer:{paddingBottom:"\n            "+100*(styleConstants.responsiveThumbnailHeight/styleConstants.responsiveThumbnailWidth)+"%\n        "},playButton:{borderRadius:"50%",boxSizing:"border-box",left:"50%",height:styleConstants.playButtonSize,marginTop:-styleConstants.playButtonSize/2,marginLeft:-styleConstants.playButtonSize/2,paddingLeft:5,position:"absolute",textAlign:"center",top:"50%",width:styleConstants.playButtonSize},playButtonIcon:{position:"relative",top:20},thumbnail:{display:"block",width:"100%",height:"100%"},duration:{backgroundColor:_functions2.default.fade(_shared2.default.colors.gray17,.8),bottom:0,color:_shared2.default.colors.white,fontSize:12,left:0,padding:"5px 10px",position:"absolute"}})
module.exports=SubjectIntro

});
KAdefine("javascript/content-library-package/modules/subject-progress.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _upNextPillContainer,_upNextCenter,_mobileProgress
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query unitProgressForSubject($subjectId: String!) {\n        user {\n            id\n            subjectProgress(topicId: $subjectId) {\n                unitProgresses {\n                    masteryEnabled\n                    currentMastery {\n                        percentage\n                        pointsEarned\n                        pointsAvailable\n                    }\n                    topic {\n                        id\n                    }\n                }\n            }\n        }\n    }\n"],["\n    query unitProgressForSubject($subjectId: String!) {\n        user {\n            id\n            subjectProgress(topicId: $subjectId) {\n                unitProgresses {\n                    masteryEnabled\n                    currentMastery {\n                        percentage\n                        pointsEarned\n                        pointsAvailable\n                    }\n                    topic {\n                        id\n                    }\n                }\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _reactRedux=require("react-redux")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _curationPageLayout=require("../components/curation-page-layout.jsx")
var _curationPageLayout2=babelHelpers.interopRequireDefault(_curationPageLayout)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _subjectProgressSidebar=require("../components/subject-progress-sidebar.jsx")
var _subjectProgressSidebar2=babelHelpers.interopRequireDefault(_subjectProgressSidebar)
var _subjectPageTopicCard=require("./subject-page-topic-card.jsx")
var _subjectPageTopicCard2=babelHelpers.interopRequireDefault(_subjectPageTopicCard)
var _subjectChallenge=require("./subject-challenge.jsx")
var _subjectChallenge2=babelHelpers.interopRequireDefault(_subjectChallenge)
var _masterySubjectProgressSummary=require("./mastery-subject-progress-summary.jsx")
var _masterySubjectProgressSummary2=babelHelpers.interopRequireDefault(_masterySubjectProgressSummary)
var _visibilityObserver=require("../../components/visibility-observer-package/visibility-observer.jsx")
var _visibilityObserver2=babelHelpers.interopRequireDefault(_visibilityObserver)
var _upNextPill=require("../../mastery-package/up-next-pill.jsx")
var _upNextPill2=babelHelpers.interopRequireDefault(_upNextPill)
var _scrollToSlug=require("../utils/scroll-to-slug.js")
var _scrollToSlug2=babelHelpers.interopRequireDefault(_scrollToSlug)
var ROOT_MARGIN="-62px 0px 0px 0px"
var mapStateToProps=function e(r,t){if(!r.subjectMastery||!r.subjectMastery.pointsAvailable){return t}return babelHelpers.extends({},t,{subjectMastery:babelHelpers.extends({},r.subjectMastery)})}
var MobileProgressHeader=function e(r){return React.createElement(_masterySubjectProgressSummary2.default,r)}
var ConnectedMobileProgressHeader=(0,_reactRedux.connect)(mapStateToProps)(MobileProgressHeader)
var SubjectProgress=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),o=0;o<n;o++){i[o]=arguments[o]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={upNextNotificationVisibility:"unknown",upNextNotificationSlug:""},a.handleUpNextHidden=function(e,r){a.setState({upNextNotificationVisibility:e,upNextNotificationSlug:r})},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.getSubjectPageTopicCards=function e(){var r=this
var t=function e(r){var t=r.kind
return t==="SubjectPageTopicCard"}
var a=this.props.modules.filter(t)
return a.map(function(e){var t=r.props.unitMasteryInfo&&r.props.unitMasteryInfo[e.topicId]
if(t){return babelHelpers.extends({},e,{masteryPercentage:t.currentMastery.percentage,masteryPointsEarned:t.currentMastery.pointsEarned,masteryPointsAvailable:t.currentMastery.pointsAvailable,isUpNext:t.isUpNext})}return e})}
r.prototype.getSubjectChallengeModule=function e(){var r=function e(r){var t=r.kind
return t==="SubjectChallenge"}
var t=this.props.modules.find(r)
if(t&&this.props.subjectChallengeUpNext){return babelHelpers.extends({},t,{isUpNext:true})}return t}
r.prototype.getSubjectChallenge=function e(){var r=this.getSubjectChallengeModule()
return r&&r.subjectChallenge}
r.prototype.getProgressSummary=function e(){var r=function e(r){var t=r.kind
return t==="MasterySubjectProgressSummary"}
var t=this.props.modules.find(r)
return t}
r.prototype.renderMain=function e(){var r=this
var t=this.props.isLoadingUserProgressData
var a=this.getSubjectPageTopicCards()
var s=this.getProgressSummary()
var n=React.createElement(_reactRedux.Provider,{store:_userInfoStore2.default},React.createElement(ConnectedMobileProgressHeader,s))
var i=function e(t,a,s){if(!t.isUpNext){return a}return React.createElement(_visibilityObserver2.default,{key:s,rootMargin:ROOT_MARGIN,onChange:function e(t){return r.handleUpNextHidden(t,s)}},a)}
var o=function e(){var t=r.getSubjectChallengeModule()
if(!t||!t.subjectChallenge){return null}return i(t,React.createElement(_subjectChallenge2.default,babelHelpers.extends({positionSlug:"subject-challenge"},t)),t.subjectChallenge.slug)}
var u=a.map(function(e){return i(e,React.createElement(_subjectPageTopicCard2.default,babelHelpers.extends({key:e.slug},e,{isLoadingUserProgressData:t})),e.slug)})
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.mobileProgress},n),u,o())}
r.prototype.maybeRenderHeader=function e(){var r=this.props.subjectMasteryEnabled
var t=this.state.upNextNotificationVisibility
if(t!=="hidden-above"||!r){return null}return this.getUpNextPill("above")}
r.prototype.maybeRenderFooter=function e(){var r=this.props.subjectMasteryEnabled
var t=this.state.upNextNotificationVisibility
if(t!=="hidden-below"||!r){return null}return this.getUpNextPill("below")}
r.prototype.getUpNextPill=function e(r){var t=this.props.subjectMasteryEnabled
var a=this.state.upNextNotificationSlug
var s=function e(){return(0,_scrollToSlug2.default)(a,"top",undefined,t)}
var n=r==="below"?styles.upNextBottomRow:styles.upNextTopRow
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.upNextPillContainer,n]},React.createElement(_wonderBlocksCoreV.View,{style:styles.upNextCenter},React.createElement(_upNextPill2.default,{direction:r,onClick:s})))}
r.prototype.renderSidebar=function e(r){var t=this.props,a=t.domain,s=t.subjectMastery,n=t.subjectMasteryEnabled,i=t.isLoadingUserProgressData
var o=this.getSubjectChallenge()
var u=this.getSubjectPageTopicCards()
var l=this.getProgressSummary()
return React.createElement(_subjectProgressSidebar2.default,{spiedSlug:r,rows:u,subjectChallenge:o,domain:a,progressSummaryModule:l,masteryEnabled:n,subjectMastery:s,isLoadingUserProgressData:i})}
r.prototype.render=function e(){var r=this
var t=this.getSubjectChallenge()
var a=function e(){return r.renderMain()}
var s=function e(){return r.maybeRenderFooter()}
var n=function e(){return r.maybeRenderHeader()}
var i=function e(t){return r.renderSidebar(t)}
var o=babelHelpers.extends({},this.props,{subjectChallenge:t})
return React.createElement(_curationPageLayout2.default,{footer:s,header:n,main:a,sidebar:i,modalRouteProps:o,path:"/:domain/*/modal/:type(test)/:id(subject-challenge)",shouldUseMastery:true})}
return r}(React.Component)
var UNIT_PROGRESS_QUERY=(0,_graphqlTag2.default)(_templateObject)
var findUpNextUnitTopicId=function e(r){var t=function e(r){return r.masteryEnabled&&r.currentMastery.pointsEarned>0&&r.currentMastery.pointsEarned<.9*r.currentMastery.pointsAvailable}
var a=function e(t,a){return t.masteryEnabled&&t.currentMastery.pointsEarned===0&&a>0&&r[a-1].currentMastery.pointsEarned>=r[a-1].currentMastery.pointsAvailable}
var s=function e(r){return r.masteryEnabled&&r.currentMastery.pointsEarned===0}
var n=r.find(t)||r.find(a)||r.find(s)
return n&&n.topic.id}
var SubjectProgressWithQuery=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderWithQueryData=function e(r){var t=r.loading||!this.props.masteryEnabled||!r.data.user?null:findUpNextUnitTopicId(r.data.user.subjectProgress.unitProgresses)
var a=r.loading||!r.data.user?{}:r.data.user.subjectProgress.unitProgresses.reduce(function(e,r){e[r.topic.id]={masteryEnabled:r.masteryEnabled,currentMastery:r.currentMastery}
return e},{})
if(t&&a&&a[t]){a[t].isUpNext=true}var s=babelHelpers.extends({},this.props,{subjectChallengeUpNext:!r.loading&&!t,unitMasteryInfo:a,isLoadingUserProgressData:r.loading})
return React.createElement(SubjectProgress,s)}
r.prototype.render=function e(){var r=this
return React.createElement(_kaQuery2.default,{query:UNIT_PROGRESS_QUERY,variables:{subjectId:this.props.topicId},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){return r.renderWithQueryData(e)})}
return r}(React.Component)
exports.default=SubjectProgressWithQuery
var styles=_aphrodite.StyleSheet.create({upNextTopRow:{position:"fixed",top:68,zIndex:_constants2.default.zindexTooltip},upNextBottomRow:{position:"fixed",bottom:8},upNextPillContainer:(_upNextPillContainer={right:0,zIndex:_constants2.default.zindexTooltip,width:"70%"},_upNextPillContainer[_mediaQueries2.default.smOrSmaller]={width:"100%"},_upNextPillContainer),upNextCenter:(_upNextCenter={width:"60%",margin:"auto"},_upNextCenter[_mediaQueries2.default.smOrSmaller]={width:"80%"},_upNextCenter),mobileProgress:(_mobileProgress={margin:16,marginTop:-16},_mobileProgress[_mediaQueries2.default.mdOrLarger]={display:"none"},_mobileProgress)})

});
KAdefine("javascript/content-library-package/modules/subject-upsell-shelf.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends,_largeIconSize,_largeCircle
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getUserTopicProgress1($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                lastWorkedOnTopic {\n                    id\n                    iconUrl\n                    relativeUrl\n                    translatedTitle\n                    parent {\n                        id\n                        iconUrl\n                        translatedTitle\n                    }\n                }\n            }\n        }\n    }\n"],["\n    query getUserTopicProgress1($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                lastWorkedOnTopic {\n                    id\n                    iconUrl\n                    relativeUrl\n                    translatedTitle\n                    parent {\n                        id\n                        iconUrl\n                        translatedTitle\n                    }\n                }\n            }\n        }\n    }\n"]),_templateObject2=babelHelpers.taggedTemplateLiteralLoose(["\n    query getUserTopicProgress2($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                numCompletedSkills\n                numTotalSkills\n                masteryEnabled\n                currentMastery {\n                    percentage\n                }\n            }\n        }\n    }\n"],["\n    query getUserTopicProgress2($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                numCompletedSkills\n                numTotalSkills\n                masteryEnabled\n                currentMastery {\n                    percentage\n                }\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _shared=require("../styles/shared.js")
var _continueUpsell=require("../components/continue-upsell.jsx")
var _continueUpsell2=babelHelpers.interopRequireDefault(_continueUpsell)
var _flexibleUpsell=require("../components/flexible-upsell.jsx")
var _flexibleUpsell2=babelHelpers.interopRequireDefault(_flexibleUpsell)
var i18n=require("../../shared-package/i18n.js")
var SUBJECT_UPSELL_QUERY_1=(0,_graphqlTag2.default)(_templateObject)
var SUBJECT_UPSELL_QUERY_2=(0,_graphqlTag2.default)(_templateObject2)
var SubjectUpsellShelf=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.componentDidMount=function e(){this._markedConversion=false}
r.prototype.maybeMarkUpsellView=function e(r){if(!this._markedConversion){_bigbingo2.default.markConversion("subject_upsell_view",{kind:"library",is_resume:r})
this._markedConversion=true}}
r.prototype.renderStartUpsell=function e(r,t){var a=null
var n=""
var l=""
var i=""
var s=void 0
var o=t.iconUrl
a=t.url
n=i18n._("Start from the basics")
l=i18n._("Learn the basics, starting with %(firstTopicTitle)s",{firstTopicTitle:t.firstTopicTitle})
i=React.createElement("img",{alt:"","aria-hidden":true,className:(0,_aphrodite.css)(styles.largeIconSize,styles.largeCircle),src:(0,_staticUrl2.default)(o)})
var u={kind:"library",is_resume:false}
this.maybeMarkUpsellView(false)
return React.createElement(_flexibleUpsell2.default,{url:a,markConversion:function e(){return _bigbingo2.default.markConversion("subject_upsell_click",u)},actionText:i18n._("Let's go"),onClick:s,title:n,subtitle:l,icon:i,domain:r})}
r.prototype.renderContinueUpsell=function e(r,t){var a=t.type.split("_")[1]
this.maybeMarkUpsellView(true)
return React.createElement(_continueUpsell2.default,{conversionExtra:{kind:a,is_resume:true},domain:r,upsell:t})}
r.prototype._userHasProgress=function e(r){return r.data&&r.data.user&&r.data.user.curationItemProgress&&r.data.user.curationItemProgress.lastWorkedOnTopic&&r.data.user.curationItemProgress.lastWorkedOnTopic.parent}
r.prototype.renderWithFirstQueryData=function e(r){var t=this
if(r.loading){return React.createElement(_spinner2.default,null)}if(!this._userHasProgress(r)){return this.renderStartUpsell(this.props.domain,this.props.upsell)}var a=r.data.user.curationItemProgress.lastWorkedOnTopic.parent.id
return React.createElement(_kaQuery2.default,{query:SUBJECT_UPSELL_QUERY_2,variables:{topicId:a},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){return t.renderWithAllQueryData(r,e)})}
r.prototype.renderWithAllQueryData=function e(r,t){if(!t.data||!t.data.user||!t.data.user.curationItemProgress){return React.createElement(_spinner2.default,null)}var a=r.data.user.curationItemProgress.lastWorkedOnTopic
var n=t.data.user.curationItemProgress
var l=void 0
var i=void 0
if(n.masteryEnabled){l=n.currentMastery.percentage
i=100}else{l=n.numCompletedSkills
i=n.numTotalSkills}var s=function e(r){return r.iconUrl&&r.iconUrl.length?r.iconUrl:null}
var o={type:"continue_library",iconUrl:s(a)||s(a.parent)||this.props.upsell.iconUrl,url:a.relativeUrl,nextTutorialTitle:a.translatedTitle,nextTopicTitle:a.parent.translatedTitle,numItemsComplete:l,numItemsTotal:i}
return this.renderContinueUpsell(this.props.domain,o)}
r.prototype.render=function e(){var r=this
return React.createElement("div",{className:(0,_aphrodite.css)(styles.outerWrapper)},React.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper)},React.createElement(_kaQuery2.default,{query:SUBJECT_UPSELL_QUERY_1,variables:{topicId:this.props.upsell.subjectId},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){return r.renderWithFirstQueryData(e)})))}
return r}(_react.Component)
exports.default=SubjectUpsellShelf
var styles=_aphrodite.StyleSheet.create({outerWrapper:{width:"100%",backgroundColor:_globalStyles.colors.gray95},wrapper:babelHelpers.extends({},_shared.pageHeaderPadding,(_babelHelpers$extends={paddingTop:24,paddingBottom:24,display:"flex",flexDirection:"row",justifyContent:"center",margin:"auto",maxWidth:1200},_babelHelpers$extends[_mediaQueries2.default.mdOrSmaller]={flexDirection:"column",justifyContent:"center"},_babelHelpers$extends)),largeIconSize:(_largeIconSize={flexShrink:0,flexGrow:0,width:82,height:82},_largeIconSize[_mediaQueries2.default.mdOrSmaller]={width:32,height:32},_largeIconSize),largeCircle:(_largeCircle={borderRadius:82},_largeCircle[_mediaQueries2.default.mdOrSmaller]={borderRadius:16},_largeCircle)})

});
KAdefine("javascript/content-library-package/modules/subject-upsell-types.js", function(require, module, exports) {

});
KAdefine("javascript/content-library-package/modules/tab-footer.jsx", function(require, module, exports) {
"use strict"
var _babelHelpers$extends,_babelHelpers$extends2,_babelHelpers$extends3
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Link=require("../../components/link-package/link.jsx")
var sharedStyles=require("../styles/shared.js")
var Icon=require("../../shared-styles-package/icon.jsx")
var angleBracketLeftIcon=require("../../shared-styles-package/icon.angleBracketLeft.js")
var i18n=require("../../shared-package/i18n.js")
var commentsIcon={path:"M60.907 71.687q-15.19 0-26.411-7.399 3.234.245 4.949.245 18.62 0 32.046-9.751 7.007-5.145 10.78-11.858t3.724-14.259q0-4.312-1.274-8.477 7.203 3.969 11.417 9.947t4.214 12.789-3.969 12.642-10.927 9.898q1.176 2.94 2.303 4.263 1.078 1.372 1.519 1.96.49.588 1.47 1.666t1.176 1.274.294.392q.147.196.392.441.245.343.294.441.098.098.196.294t.098.931-.686 1.225-1.323.49q-11.27-1.568-20.384-8.036-5.047.882-9.898.882zm-51.891-7.154q-1.862 0-1.862-2.009 0-.245.098-.539t.196-.392q.049-.098.196-.343.147-.196.245-.294.147-.098.343-.392.196-.245 1.323-1.421t1.519-1.764q.441-.588 1.519-1.96t2.303-4.263q-6.958-4.067-10.927-9.947t-3.969-13.132 5.243-13.818 14.357-10.388 19.845-3.871q10.682 0 19.796 3.822 9.114 3.773 14.357 10.437t5.243 14.406-5.243 14.406q-5.243 6.615-14.357 10.437t-19.796 3.822q-4.802 0-9.898-.882-8.869 6.321-20.384 8.085l-.147 0z",width:100,height:78.564}
var TabFooter=function(e){babelHelpers.inherits(t,e)
function t(){var r,s,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,l=Array(n),i=0;i<n;i++){l[i]=arguments[i]}return a=(r=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),s),s._renderPrevTab=function(){var e=s.props,t=e.prevTitle,r=e.prevUrl
return React.createElement("div",{className:css(styles.prevTab)},React.createElement(Link,{href:r},React.createElement("span",null,React.createElement("span",{"aria-hidden":"true",className:css(styles.chevronLeft)},React.createElement(Icon,{color:sharedStyles.colors.gray17,size:10,icon:angleBracketLeftIcon})),t)))},s._renderCommunityQuestions=function(){var e=s.props.communityQuestionsUrl
return React.createElement("div",{className:css(styles.prevTab)},React.createElement(Link,{href:e},React.createElement("span",null,React.createElement("span",{"aria-hidden":"true",className:css(styles.communityQuestionsIcon)},React.createElement(Icon,{icon:commentsIcon,size:19,color:"#3B3E40"})),i18n._("Community questions"))))},s._renderNextTab=function(){var e=s.props,t=e.nextTitle,r=e.nextUrl
return React.createElement("div",{className:css(styles.nextTab)},React.createElement(Link,{href:r},React.createElement("span",null,t,React.createElement("span",{"aria-hidden":"true",className:css(styles.chevronRight)},React.createElement(Icon,{color:sharedStyles.colors.gray17,size:10,icon:angleBracketLeftIcon})))))},s._renderSeparator=function(){return React.createElement("div",{className:css(styles.separator)})},r),babelHelpers.possibleConstructorReturn(s,a)}t.prototype.render=function e(){var t=this.props,r=t.nextTitle,s=t.prevTitle,a=t.showCommunityQuestions
var n=(!!s||a)&&!!r
return React.createElement("div",{className:css(styles.wrapper,!n&&styles.centerWrapper)},s&&this._renderPrevTab(),a&&this._renderCommunityQuestions(),n&&this._renderSeparator(),r&&this._renderNextTab())}
return t}(React.Component)
TabFooter.propTypes={communityQuestionsUrl:PropTypes.string,domain:PropTypes.string.isRequired,nextTitle:PropTypes.string,nextUrl:PropTypes.string,prevTitle:PropTypes.string,prevUrl:PropTypes.string,showCommunityQuestions:PropTypes.bool.isRequired}
var styles=StyleSheet.create({wrapper:babelHelpers.extends({},sharedStyles.moduleLayout.defaultAlignment,(_babelHelpers$extends={display:"flex",justifyContent:"space-between"},_babelHelpers$extends[sharedStyles.queries.small]={flexDirection:"column"},_babelHelpers$extends)),centerWrapper:{justifyContent:"space-around"},prevTab:babelHelpers.extends({},sharedStyles.moduleLayout.defaultSpacing,sharedStyles.typography.smallHeading,(_babelHelpers$extends2={},_babelHelpers$extends2[sharedStyles.queries.small]=babelHelpers.extends({},sharedStyles.mixins.padding(26,0,26,0),{textAlign:"center"}),_babelHelpers$extends2)),separator:{height:1,backgroundColor:sharedStyles.colors.gray85},nextTab:babelHelpers.extends({},sharedStyles.moduleLayout.defaultSpacing,sharedStyles.typography.smallHeading,(_babelHelpers$extends3={},_babelHelpers$extends3[sharedStyles.queries.small]=babelHelpers.extends({},sharedStyles.mixins.padding(26,0,26,0),{textAlign:"center"}),_babelHelpers$extends3)),communityQuestionsIcon:{display:"inline-block",marginRight:12,fontSize:24,position:"relative",lineHeight:"15px",top:3},chevronLeft:{display:"inline-block",marginRight:8,lineHeight:"10px"},chevronRight:{display:"inline-block",marginLeft:8,transform:"rotate(180deg)",lineHeight:"10px"}})
module.exports=TabFooter

});
KAdefine("javascript/content-library-package/modules/subject-page-topic-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _moduleFirst,_moduleLast,_content,_linksContainer,_iconWrapper,_icon,_babelHelpers$extends,_babelHelpers$extends2,_upNextCta
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _progressBar=require("../../components/progress-package/progress-bar.jsx")
var _progressBar2=babelHelpers.interopRequireDefault(_progressBar)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _newTooltip=require("../../components/new-tooltip-package/new-tooltip.jsx")
var _newTooltip2=babelHelpers.interopRequireDefault(_newTooltip)
var _icon2=require("../../shared-styles-package/icon.jsx")
var _icon3=babelHelpers.interopRequireDefault(_icon2)
var _timeoutSpinner=require("../../shared-components-package/timeout-spinner.jsx")
var _timeoutSpinner2=babelHelpers.interopRequireDefault(_timeoutSpinner)
var _spring=require("../../components/layout-package/spring.jsx")
var _spring2=babelHelpers.interopRequireDefault(_spring)
var _strut=require("../../components/layout-package/strut.jsx")
var _strut2=babelHelpers.interopRequireDefault(_strut)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _deferredImage=require("../components/deferred-image.jsx")
var _deferredImage2=babelHelpers.interopRequireDefault(_deferredImage)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _getNavigationConversions=require("../utils/get-navigation-conversions.js")
var _getNavigationConversions2=babelHelpers.interopRequireDefault(_getNavigationConversions)
var i18n=require("../../shared-package/i18n.js")
var strings={getStartedCta:i18n._("Get started"),continueCta:i18n._("Continue"),upNextForYou:i18n._("Up next for you:"),getEarnedAvailableMastery:function e(t,r){return i18n._("%(earned)s/%(available)s Mastery points",{earned:t,available:r})},masteryUnavailable:i18n._("Mastery unavailable"),noMasteryTooltip:i18n._("Unit mastery is not available for this unit, but you can still watch videos, practice, and take quizzes and tests")}
var questionSignIcon={path:"M43.776 66.69q-1.995 0-2.109 2.109l0 12.483q.057.912.627 1.482t1.482.627l12.483 0q.969 0 1.539-.57t.57-1.539l0-12.483q0-2.109-2.109-2.109l-12.483 0zm12.483-4.161q2.109 0 2.109-2.28 0-1.14 1.425-3.078t3.534-3.192 3.192-1.824q1.083-.684 2.964-2.28 5.472-4.617 5.529-12.54.114-5.586-3.534-10.488t-9.063-7.524q-5.415-2.679-11.058-2.679-15.846 0-24.168 13.908-.969 1.539.513 2.736l8.607 6.498q.399.399 1.311.399t1.539-.798q3.477-4.446 5.586-5.985 2.223-1.539 5.472-1.539t5.7 1.71 2.451 3.99-1.311 3.762-4.959 3.192q-3.648 1.596-7.011 5.415-3.42 3.819-3.42 8.151l0 2.337q.057.969.627 1.539t1.482.57l12.483 0zm43.776-12.483q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100}
var getUnitNavigationConversions=function e(t,r,a){return(0,_getNavigationConversions2.default)({contentKind:"Topic",contentSlug:t,referrerModule:"unit_card",referrerElement:r,isUpNext:a})}
var SubjectPageTopicCard=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderTooltipContent=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.tooltipContent},strings.noMasteryTooltip)}
t.prototype.getLabelForMasteryCta=function e(){var t=this.props,r=t.isUpNext,a=t.masteryPointsEarned
if(r){return a>0?strings.continueCta:strings.getStartedCta}else{return null}}
t.prototype._renderTitleBar=function e(){var t=this.props,r=t.icon,a=t.title,n=t.titleTag,l=t.url,o=t.masteryPercentage,i=t.masteryPointsEarned,s=t.masteryPointsAvailable,d=t.subjectMasteryEnabled,c=t.isUpNext,u=t.isLoadingUserProgressData,p=t.slug
var m=!!this.props.masteryEnabled
return React.createElement(_wonderBlocksCoreV.View,{style:styles.titleContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.iconWrapper},React.createElement(_deferredImage2.default,{"aria-hidden":"true",className:(0,_aphrodite.css)(styles.icon),src:(0,_staticUrl2.default)(r)})),React.createElement(_strut2.default,{size:8}),React.createElement(_wonderBlocksCoreV.View,null,c&&React.createElement(_wonderBlocksTypographyV.LabelSmall,{style:{color:_wonderBlocksColorV2.default.blue}},strings.upNextForYou),React.createElement(_clientLink2.default,{to:l,conversions:getUnitNavigationConversions(p,"title",!!c)},React.createElement(_wonderBlocksTypographyV.LabelLarge,{tag:n},a))),React.createElement(_strut2.default,{size:8}),React.createElement(_spring2.default,null),d&&m&&(u?React.createElement(_timeoutSpinner2.default,{sentryId:"subject_page_topic_card",description:"Loading user progress data for topic card",size:"xsmall",sentryTeam:"learning-platform"}):React.createElement(_wonderBlocksCoreV.View,{style:styles.masteryProgressContainer},React.createElement(_wonderBlocksTypographyV.LabelSmall,null,strings.getEarnedAvailableMastery(i,s)),React.createElement(_strut2.default,{size:4}),React.createElement(_progressBar2.default,{length:"100%",max:100,value:o||0,thickness:8,borderRadius:_shared2.default.borderRadius,fillColor:_wonderBlocksColorV2.default.purple,backgroundColor:_wonderBlocksColorV2.default.offBlack8,flatProgressEdge:true}))),d&&!m&&React.createElement(_wonderBlocksCoreV.View,{style:styles.masteryUnavailableContainer},React.createElement(_wonderBlocksTypographyV.LabelSmall,null,strings.masteryUnavailable),React.createElement(_newTooltip2.default,{offsetFrom:"arrow",tooltipMargin:8,offset:5,content:this.renderTooltipContent()},React.createElement(_icon3.default,{className:(0,_aphrodite.css)(styles.tooltipIcon),icon:questionSignIcon,color:_wonderBlocksColorV2.default.offBlack50,size:17}))))}
t.prototype._renderLinks=function e(){var t=this.props,r=t.title,a=t.isUpNext,n=t.slug
var l=this.props.links.filter(Boolean)
var o=Math.max(3,l.length/2)
var i=getUnitNavigationConversions(n,"lesson_link",!!a)
return React.createElement(_wonderBlocksCoreV.View,{style:styles.linksContainer},React.createElement(_wonderBlocksCoreV.View,{style:styles.linksColumn},l.slice(0,o).map(function(e,t){return React.createElement(_wonderBlocksTypographyV.LabelSmall,{key:t,style:styles.link},React.createElement(_clientLink2.default,{to:e.url||"/","aria-label":e.title,title:e.title,conversions:i},e.title,React.createElement("span",{className:"sr-only"},": ",r)))})),React.createElement(_strut2.default,{size:24}),React.createElement(_wonderBlocksCoreV.View,{style:styles.linksColumn},l.slice(o).map(function(e,t){return React.createElement(_wonderBlocksTypographyV.LabelSmall,{key:t,style:styles.link},React.createElement(_clientLink2.default,{to:e.url||"/","aria-label":e.title,title:e.title,conversions:i},e.title,React.createElement("span",{className:"sr-only"},": ",r)))})))}
t.prototype._renderUpNextCta=function e(){var t=this.props,r=t.url,a=t.slug,n=t.isUpNext
var l=function e(){_bigbingo2.default.markConversionsWithExtras(getUnitNavigationConversions(a,"call_to_action",!!n))}
return React.createElement(_wonderBlocksCoreV.View,{style:styles.upNextCta},React.createElement(_strut2.default,{size:32}),React.createElement(_wonderBlocksButtonV2.default,{href:r,onClick:l},this.getLabelForMasteryCta()))}
t.prototype.render=function e(){var t=this.props,r=t.isUpNext,a=t.rowIndex,n=t.rowsTotal,l=t.slug
var o=!!this.props.masteryEnabled
var i=React.createElement(_wonderBlocksCoreV.View,{style:styles.content,"data-slug":l,tabIndex:-1},r&&React.createElement(_wonderBlocksCoreV.View,{style:styles.upNextBorder}),React.createElement(_wonderBlocksCoreV.View,null,this._renderTitleBar(),this._renderLinks()),React.createElement(_spring2.default,null),r&&this._renderUpNextCta())
return React.createElement(_wonderBlocksCoreV.View,{style:[styles.moduleDefault,a===0&&styles.moduleFirst,a===n-1&&!o&&styles.moduleLast],"data-slug":a===0&&"table-of-contents"},i)}
return t}(_react.Component)
SubjectPageTopicCard.defaultProps={rowIndex:0,rowsTotal:1,masteryPointsEarned:0,masteryPointsAvailable:0,isLoadingUserProgressData:true}
exports.default=SubjectPageTopicCard
var _sharedStyles$constan=_shared2.default.constants,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall
var queries=babelHelpers.extends({},_shared2.default.queries,{large:"@media (min-width: 1024px) and (max-width: 1199px)",xlarge:"@media (min-width: 1200px)"})
var styleConstants={blurb:500,blurbWithPadding:500+2*16,iconPadding:20,iconPaddingSmall:16,iconSize:32,iconSizeSmall:40,tocVerticalPadding:32,tocVerticalPaddingSmall:24,linksWidthXl:616,linksWidthLg:550,cardsWidth:724}
var styles=_aphrodite.StyleSheet.create({moduleDefault:{backgroundColor:_wonderBlocksColorV2.default.offWhite,paddingBottom:16},moduleFirst:(_moduleFirst={paddingTop:styleConstants.tocVerticalPaddingSmall},_moduleFirst[queries.small]={paddingTop:0},_moduleFirst),moduleLast:(_moduleLast={paddingBottom:moduleVerticalPadding},_moduleLast[queries.smallOrSmaller]={paddingBottom:moduleVerticalPaddingSmall},_moduleLast),content:(_content={overflow:"hidden",justifyContent:"center",backgroundColor:_wonderBlocksColorV2.default.white,padding:"16px 24px 24px 16px",borderRadius:_shared2.default.borderRadius,border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16},_content[_mediaQueries2.default.smOrSmaller]={borderRadius:0,borderLeft:"none",borderRight:"none",minWidth:"100%"},_content),linksContainer:(_linksContainer={flexDirection:"row",paddingTop:4},_linksContainer[queries.small]={justifyContent:"center"},_linksContainer),linksColumn:{flex:1},iconWrapper:(_iconWrapper={flex:"0 0 "+styleConstants.iconSize+"px",fontSize:0,height:styleConstants.iconSize,position:"relative",width:styleConstants.iconSize},_iconWrapper[queries.small]={flex:"0 0 "+styleConstants.iconSizeSmall+"px",height:styleConstants.iconSizeSmall,marginRight:styleConstants.iconPaddingSmall,width:styleConstants.iconSizeSmall},_iconWrapper),titleContainer:{flexDirection:"row",alignItems:"center",paddingBottom:16,borderBottom:"solid 1px "+_wonderBlocksColorV2.default.offBlack8},upNextBorder:{marginLeft:-24,marginRight:-24,marginTop:-16,marginBottom:12,height:4,backgroundColor:_wonderBlocksColorV2.default.blue},masteryProgressContainer:{alignItems:"flex-end",minWidth:"30%"},masteryUnavailableContainer:{flexDirection:"row",alignItems:"center"},progressContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)",transformOrigin:"50% 50%"},icon:(_icon={backgroundSize:"cover",borderRadius:styleConstants.iconSize/2,height:"100%",position:"relative",width:"100%"},_icon[queries.small]={borderRadius:styleConstants.iconSizeSmall/2},_icon),title:babelHelpers.extends({},_shared2.default.typography.bodySmall,(_babelHelpers$extends={fontFamily:"inherit",fontWeight:"bold"},_babelHelpers$extends[queries.small]={paddingBottom:0},_babelHelpers$extends)),titleHover:{textDecoration:"underline"},link:{paddingTop:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},masteryProgress:babelHelpers.extends({},_shared2.default.typography.bodyXsmall,(_babelHelpers$extends2={color:_wonderBlocksColorV2.default.offBlack50,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},_babelHelpers$extends2[queries.medium]={marginTop:8},_babelHelpers$extends2[queries.small]={display:"none"},_babelHelpers$extends2)),tooltipIcon:{display:"inline-block",marginTop:6,marginLeft:8},tooltipContent:{fontWeight:"normal",width:"278px"},upNextCta:(_upNextCta={width:193},_upNextCta[queries.small]={width:"100%"},_upNextCta)})

});
KAdefine("javascript/content-library-package/modules/table-of-contents-row.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _moduleFirst,_moduleLast,_babelHelpers$extends,_content,_titleAndLinksContain,_iconWrapper,_babelHelpers$extends2,_description,_babelHelpers$extends3,_links3columns,_masteryContainer,_babelHelpers$extends4
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query tableOfContentsProgress($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                numTotalSkills\n                numCompletedSkills\n            }\n        }\n    }\n"],["\n    query tableOfContentsProgress($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                numTotalSkills\n                numCompletedSkills\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _aphrodite=require("aphrodite")
var _reactRouterDom=require("react-router-dom")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _kaQuery=require("../../apollo-package/ka-query.jsx")
var _kaQuery2=babelHelpers.interopRequireDefault(_kaQuery)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var i18n=require("../../shared-package/i18n.js")
var strings={noMasteryTooltip:i18n._("Unit mastery is not available for this unit, but you can still watch videos, practice, and take quizzes and tests"),getProgressString:function e(t){return i18n._("%(percent)s percent progress",{percent:t})}}
var gray95=_globalStyles2.default.colors.gray95
var TINY_GIF="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
var Blurb=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),o=0;o<l;o++){s[o]=arguments[o]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.state={moduleHover:false,ringAnimationReady:false,showIcons:false},a.handleClick=function(){var e=a.props,t=e.openLinkInNewTab,r=e.url,n=e.history
if(t){var l=window.open(r,"_blank")
l.focus()}else{n.push(r)}},a.getAmountCompleted=function(){var e=a.props.progress
if(!e){return 0}var t=e[0],r=e[1]
return r&&t/r},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.componentDidMount=function e(){var t=this
this.setState({showIcons:true})
this.timeoutId=setTimeout(function(){return t.setState({ringAnimationReady:true})},600)}
t.prototype.componentWillUnmount=function e(){if(this.timeoutId){clearTimeout(this.timeoutId)}}
t.prototype.renderRing=function e(){var t=this.props,r=t.domain,a=t.progress
var n=this.state.ringAnimationReady
if(!a){return null}var l=_shared2.default.domainColors(r),s=l.domain2
var o=styleConstants.ringWidth
var i=100+2*o
var d=(100+o)/i*(50-2)
var c=2*Math.PI*d
var u=c
if(n){u*=1-this.getAmountCompleted()}var p={cx:"50%",cy:"50%",fill:"transparent",r:d+"%",strokeWidth:o+"%"}
return React.createElement("svg",{className:(0,_aphrodite.css)(styles.progressContainer),height:i+"%",version:"1.1",width:i+"%",focusable:"false"},React.createElement("circle",babelHelpers.extends({},p,{stroke:gray95})),React.createElement("circle",babelHelpers.extends({},p,{className:(0,_aphrodite.css)(styles.progressRing),stroke:s,strokeDasharray:c+"%",style:{strokeDashoffset:u+"%"}})))}
t.prototype.render=function e(){var t,r
var a=this.props,n=a.masteryEnabled,l=a.icon,s=a.title
var o=this.state.showIcons
var i=o&&l?'url("'+(0,_staticUrl2.default)(l)+'")':'url("'+TINY_GIF+'")'
var d=_aphrodite.StyleSheet.create({icon:(r={borderRadius:styleConstants.iconSize/2,height:"100%",position:"relative",overflow:"hidden"},r[queries.small]={borderRadius:styleConstants.iconSizeSmall/2},r["::before"]=(t={content:i,position:"absolute",transform:"scale(0.38)",height:0,width:0},t[queries.small]={transform:"scale(0.33)"},t),r)})
var c=parseInt(this.getAmountCompleted().toFixed(2))
var u=n?s:s+" "+strings.getProgressString(c)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.noUnderlineOnHover,styles.blurb),onClick:this.handleClick},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconWrapper),role:"img","aria-label":u},!n&&this.renderRing(),React.createElement("div",{className:(0,_aphrodite.css)(d.icon),"aria-hidden":true})))}
return t}(_react.Component)
var BlurbWithRouter=(0,_reactRouterDom.withRouter)(Blurb)
var TableOfContentsRow=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),o=0;o<l;o++){s[o]=arguments[o]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.state={moduleHover:false},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.renderTooltipContent=function e(){return React.createElement(_wonderBlocksCoreV.View,{style:styles.tooltipContent},strings.noMasteryTooltip)}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.domain,n=r.icon,l=r.links,s=r.rowIndex,o=r.rowsTotal,i=r.title,d=r.titleTag,c=r.description,u=r.url,p=r.openLinkInNewTab,m=r.progress
var b=_shared2.default.domainColors(a),h=b.domain3
if(l.length===4){l.push(null)}var g=!!this.props.masteryEnabled
var y=React.createElement(_wonderBlocksCoreV.View,{style:styles.content,onMouseEnter:function e(){return t.setState({moduleHover:true})},onMouseLeave:function e(){return t.setState({moduleHover:false})}},React.createElement(_wonderBlocksCoreV.View,{style:styles.itemsContainer},React.createElement(BlurbWithRouter,{domain:a,icon:n,masteryEnabled:g,openLinkInNewTab:p,progress:m,url:u,title:i}),React.createElement(_wonderBlocksCoreV.View,{style:styles.titleAndLinksContainer},React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.title),style:{color:h},tag:d},React.createElement(_clientLink2.default,{to:u,target:p?"_blank":undefined},i)),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.description},c),React.createElement("div",{className:(0,_aphrodite.css)(styles.links,styles.links3columns)},l.map(function(e,t){return React.createElement("div",{key:t,className:(0,_aphrodite.css)(styles.link)},e&&React.createElement(_clientLink2.default,{to:e.url||"/","aria-label":e.title,title:e.title,target:p?"_blank":undefined},e.title,React.createElement("span",{className:"sr-only"},": ",i)))})))))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleDefault,s===0&&styles.moduleFirst,s===o-1&&!g&&styles.moduleLast),"data-slug":s===0&&"table-of-contents"},y)}
return t}(_react.Component)
TableOfContentsRow.defaultProps={progress:null,rowIndex:0,rowsTotal:1}
var TABLE_OF_CONTENTS_ROW_USER_DATA_QUERY=(0,_graphqlTag2.default)(_templateObject)
var TableOfContentsRowWithQuery=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderWithQueryData=function e(t){var r=t.data&&t.data.user&&t.data.user.curationItemProgress
var a=r&&r.numTotalSkills>0?[r.numCompletedSkills,r.numTotalSkills]:null
var n=babelHelpers.extends({},this.props,{progress:a})
return React.createElement(TableOfContentsRow,n)}
t.prototype.render=function e(){var t=this
return this.props.masteryEnabled?React.createElement(TableOfContentsRow,this.props):React.createElement(_kaQuery2.default,{query:TABLE_OF_CONTENTS_ROW_USER_DATA_QUERY,variables:{topicId:this.props.topicId},onlyFetchesUserData:true,refetchOnClientSideNav:true},function(e){return t.renderWithQueryData(e)})}
return t}(React.Component)
exports.default=TableOfContentsRowWithQuery
var _sharedStyles$constan=_shared2.default.constants,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall
var queries=babelHelpers.extends({},_shared2.default.queries,{large:"@media (min-width: 1024px) and (max-width: 1199px)",xlarge:"@media (min-width: 1200px)"})
var styleConstants={blurb:500,blurbWithPadding:500+2*16,iconPadding:20,iconPaddingSmall:16,iconSize:48,iconSizeSmall:40,ringWidth:14,tocVerticalPadding:32,tocVerticalPaddingSmall:24}
var iconFullWidth=styleConstants.iconSize+styleConstants.iconPadding
var CTA_COLUMN_WIDTH=260
var LINKS_WIDTH_XL=616
var LINKS_WIDTH_3_COL_XL=924
var LINKS_WIDTH_LG=550
var LINKS_WIDTH_3_COL_LG=825
var LINKS_WIDTH_3_COL_MEDIUM=620
var MASTERY_WIDTH=322
var MASTERY_PADDING_LEFT=69
var MASTERY_PADDING_RIGHT=58
var BLURB_MARGIN_LEFT=32
var CARD_WIDTH=1160
var styles=_aphrodite.StyleSheet.create({moduleDefault:{backgroundColor:_wonderBlocksColorV2.default.offWhite,paddingBottom:16},moduleFirst:(_moduleFirst={paddingTop:moduleVerticalPadding},_moduleFirst[queries.small]={paddingTop:moduleVerticalPaddingSmall},_moduleFirst),moduleLast:(_moduleLast={paddingBottom:moduleVerticalPadding},_moduleLast[queries.small]={paddingBottom:moduleVerticalPaddingSmall},_moduleLast),moduleTitle:babelHelpers.extends({},_shared2.default.typography.subheadingDesktop,(_babelHelpers$extends={color:_shared2.default.colors.gray17,display:"flex",marginBottom:40},_babelHelpers$extends[queries.medium]={justifyContent:"center"},_babelHelpers$extends[queries.small]=babelHelpers.extends({},_shared2.default.typography.subheadingMobile),_babelHelpers$extends)),content:(_content={justifyContent:"center",backgroundColor:_wonderBlocksColorV2.default.white,width:CARD_WIDTH,margin:"auto",padding:"32px 0px",borderRadius:_shared2.default.borderRadius,border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16},_content[queries.large]={width:"calc(100% - 40px)",margin:"0 20px"},_content[queries.medium]={flexDirection:"column",alignItems:"center",borderRadius:0,borderLeft:"none",borderRight:"none",width:"100%",margin:0},_content[queries.small]={width:"100%",borderRadius:0},_content),contentTwoColumn:{flexDirection:"row"},itemsContainer:{flexDirection:"row"},titleAndLinksContainer:(_titleAndLinksContain={},_titleAndLinksContain[queries.small]={justifyContent:"center"},_titleAndLinksContain),noUnderlineOnHover:{":hover":{textDecoration:"none"}},blurb:{alignItems:"flex-start",display:"flex",paddingTop:2,cursor:"pointer",marginLeft:BLURB_MARGIN_LEFT},iconWrapper:(_iconWrapper={flex:"0 0 "+styleConstants.iconSize+"px",fontSize:0,height:styleConstants.iconSize,marginRight:styleConstants.iconPadding,position:"relative",width:styleConstants.iconSize},_iconWrapper[queries.small]={flex:"0 0 "+styleConstants.iconSizeSmall+"px",height:styleConstants.iconSizeSmall,marginRight:styleConstants.iconPaddingSmall,width:styleConstants.iconSizeSmall},_iconWrapper),progressContainer:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)",transformOrigin:"50% 50%"},progressRing:{transition:"stroke-dashoffset 0.6s"},info:{width:"calc(100% - "+iconFullWidth+"px)"},title:babelHelpers.extends({},_shared2.default.typography.bodySmall,(_babelHelpers$extends2={fontFamily:"inherit",fontWeight:"bold",margin:"0 0 4px 0"},_babelHelpers$extends2[queries.small]={paddingBottom:0},_babelHelpers$extends2)),titleHover:{textDecoration:"underline"},description:(_description={display:"none"},_description[queries.small]={display:"initial"},_description),links:babelHelpers.extends({},_shared2.default.typography.bodyXsmall,(_babelHelpers$extends3={columnCount:1,columnGap:24,lineHeight:"30px",transition:"color 0.25s ease-in",color:_wonderBlocksColorV2.default.offBlack64,width:LINKS_WIDTH_XL},_babelHelpers$extends3[queries.large]={flexGrow:1,maxWidth:LINKS_WIDTH_LG},_babelHelpers$extends3[queries.medium]={marginTop:8},_babelHelpers$extends3[queries.small]={display:"none"},_babelHelpers$extends3)),links2columns:{columnCount:2},links3columns:(_links3columns={columnCount:3,width:LINKS_WIDTH_3_COL_XL},_links3columns[queries.large]={flexGrow:1,maxWidth:LINKS_WIDTH_3_COL_LG},_links3columns[queries.medium]={maxWidth:LINKS_WIDTH_3_COL_MEDIUM},_links3columns),link:{height:30,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},masteryContainer:(_masteryContainer={flexDirection:"row",justifyContent:"center",alignItems:"center",width:MASTERY_WIDTH,paddingLeft:MASTERY_PADDING_LEFT,paddingRight:MASTERY_PADDING_RIGHT,borderLeft:"1px solid "+_shared2.default.colors.gray85},_masteryContainer[queries.medium]={marginTop:24,paddingTop:24,borderLeft:"none",borderTop:"1px solid "+_shared2.default.colors.gray85,paddingLeft:0,paddingRight:0},_masteryContainer),masteryProgress:babelHelpers.extends({},_shared2.default.typography.bodyXsmall,(_babelHelpers$extends4={color:_shared2.default.colors.gray17,display:"flex",alignItems:"center",justifyContent:"center",width:CTA_COLUMN_WIDTH,textAlign:"center"},_babelHelpers$extends4[queries.medium]={marginTop:8},_babelHelpers$extends4[queries.small]={display:"none"},_babelHelpers$extends4)),masteryBarLabel:{marginTop:16},gettingStarted:{color:_shared2.default.colors.gray41},tooltipIcon:{marginTop:6,marginLeft:8},tooltipContent:{fontWeight:"normal",width:"278px"}})

});
KAdefine("javascript/content-library-package/modules/big-bingo-navbar.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _tabbedPanel=require("../../components/tabbed-panel-package/tabbed-panel.jsx")
var _tabbedPanel2=babelHelpers.interopRequireDefault(_tabbedPanel)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _bigBingoTableOfContentsRow=require("./big-bingo-table-of-contents-row.jsx")
var _bigBingoTableOfContentsRow2=babelHelpers.interopRequireDefault(_bigBingoTableOfContentsRow)
var BigBingoTab=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.isTabSelected,a=r.children,n=babelHelpers.objectWithoutProperties(r,["isTabSelected","children"])
return React.createElement("button",babelHelpers.extends({className:(0,_aphrodite.css)(styles.notAButton,styles.tabTrigger,t?styles.activeTab:styles.inactiveTab)},n),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,a))}
return r}(React.Component)
BigBingoTab.defaultProps={isTabSelected:false}
var BigBingoNavbar=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.renderRows=function e(r){return React.createElement("div",null,r.map(function(e,r){return React.createElement(_bigBingoTableOfContentsRow2.default,babelHelpers.extends({key:r},e))}))}
r.prototype.getTabs=function e(){var r=this
var t=this.props,a=t.archivedExperimentModules,n=t.currentExperimentModules
var l=function e(r,t){return function(e,a){return React.createElement(BigBingoTab,babelHelpers.extends({key:r,isTabSelected:e},a),t)}}
return[{key:"current",renderTab:l("current","Current experiments"),renderContent:function e(){return r.renderRows(n)}},{key:"archived",renderTab:l("archived","Past experiments"),renderContent:function e(){return r.renderRows(a)}}]}
r.prototype.render=function e(){return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_tabbedPanel2.default,{id:"big-bingo-tabs",tabs:this.getTabs()},function(e,r){return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.moduleDefault},e()),React.createElement(_wonderBlocksCoreV.View,null,r()))}))}
return r}(React.Component)
exports.default=BigBingoNavbar
var styles=_aphrodite.StyleSheet.create({moduleDefault:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,(_babelHelpers$extends={maxWidth:1168,backgroundColor:"white",borderRadius:_globalStyles.borderRadius,marginBottom:2},_babelHelpers$extends[_shared2.default.queries.small]={borderRadius:0,marginBottom:0},_babelHelpers$extends)),activeTab:babelHelpers.extends({color:_wonderBlocksColorV2.default.blue},_shared2.default.navbar.activeTab),inactiveTab:babelHelpers.extends({},_shared2.default.navbar.inactiveTab),tabTrigger:{zIndex:1,height:48,color:_wonderBlocksColorV2.default.offBlack,boxShadow:"inset 0 -4px",":not(:last-child)":{marginRight:24}},notAButton:{backgroundColor:"transparent",border:"none",padding:0,textAlign:"left",display:"inline-block",cursor:"pointer",borderRadius:"none"}})

});
KAdefine("javascript/content-library-package/modules/big-bingo-table-of-contents-row.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _babelHelpers$extends,_moduleCustom,_moduleLast,_content,_contentUnitsAndLesso,_titleAndContent,_iconWrapper,_icon,_info,_titleContainer,_contentContainer,_leftSpacer,_rightSpacer,_links,_iconBarLargeScreen,_iconBarMediumScreen
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var TINY_GIF="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
var BigBingoTableOfContentsRow=function(e){babelHelpers.inherits(t,e)
function t(){var n,a,i
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,l=Array(s),r=0;r<s;r++){l[r]=arguments[r]}return i=(n=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={showIcons:false,ringAnimationReady:false},n),babelHelpers.possibleConstructorReturn(a,i)}t.prototype.componentDidMount=function e(){var t=this
this.setState({showIcons:true})
this.timeoutId=setTimeout(function(){return t.setState({ringAnimationReady:true})},600)}
t.prototype.componentWillUnmount=function e(){if(this.timeoutId){clearTimeout(this.timeoutId)}}
t.prototype.renderIconButton=function e(){var t=this.props,n=t.icon,a=t.url
var i=this.state.showIcons
return React.createElement(_wonderBlocksLinkV2.default,{skipClientNav:true,href:a},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconWrapper)},n&&React.createElement("div",{className:(0,_aphrodite.css)(styles.icon),style:{backgroundImage:i?'url("'+(0,_staticUrl2.default)(n)+'")':'url("'+TINY_GIF+'")'}})))}
t.prototype.render=function e(){var t=this.props,n=t.description,a=t.links,i=t.rowIndex,s=t.rowsTotal,l=t.title,r=t.titleTag,o=t.url
var d=React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},React.createElement("div",{className:(0,_aphrodite.css)(styles.contentUnitsAndLessons)},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconBarLargeScreen)},this.renderIconButton()),React.createElement("div",{className:(0,_aphrodite.css)(styles.titleAndContent)},React.createElement("div",{className:(0,_aphrodite.css)(styles.titleContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.iconBarMediumScreen)},this.renderIconButton()),React.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.title),tag:r},React.createElement(_wonderBlocksLinkV2.default,{href:o,skipClientNav:true},l))),React.createElement("div",{className:(0,_aphrodite.css)(styles.contentContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.info)},React.createElement("div",{className:(0,_aphrodite.css)(styles.description)},n)),React.createElement("div",{className:(0,_aphrodite.css)(styles.leftSpacer)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.links)},a.map(function(e,t){return e&&React.createElement(_wonderBlocksLinkV2.default,{key:t,skipClientNav:true,href:e.url||"/","aria-label":e.title,style:styles.link,kind:"secondary"},e.title)})),React.createElement("div",{className:(0,_aphrodite.css)(styles.rightSpacer)})))))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleDefault,styles.moduleCustom,i===s-1&&styles.moduleLast),"data-slug":i===0&&"table-of-contents"},d)}
return t}(_react.Component)
BigBingoTableOfContentsRow.defaultProps={rowIndex:0,rowsTotal:1}
exports.default=BigBingoTableOfContentsRow
var _sharedStyles$constan=_shared2.default.constants,moduleVerticalPadding=_sharedStyles$constan.moduleVerticalPadding,moduleVerticalPaddingSmall=_sharedStyles$constan.moduleVerticalPaddingSmall
var queries=babelHelpers.extends({},_shared2.default.queries,{large:"@media (min-width: 1024px) and (max-width: 1199px)",xlarge:"@media (min-width: 1200px)"})
var styleConstants={blurb:500,blurbWithPadding:500+2*16,iconPadding:32,iconPaddingSmall:16,iconSize:48,iconSizeMedium:40,ringWidth:14,tocVerticalPadding:0,tocVerticalPaddingSmall:24,contentPaddingTop:32,contentPaddingTopSmall:38,contentBorderColorLarge:"#F8F9F9"}
var styles=_aphrodite.StyleSheet.create({moduleDefault:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment,_shared2.default.moduleLayout.defaultSpacing,(_babelHelpers$extends={maxWidth:1168,backgroundColor:"white",borderRadius:_globalStyles.borderRadius,marginBottom:2},_babelHelpers$extends[queries.small]={borderRadius:0,marginBottom:0,borderBottom:"solid 8px "+_globalStyles.colors.gray85},_babelHelpers$extends)),moduleCustom:(_moduleCustom={padding:"0px 0px "+styleConstants.tocVerticalPadding+" 0px",maxWidth:1168},_moduleCustom[queries.small]={padding:0},_moduleCustom),moduleLast:(_moduleLast={paddingBottom:moduleVerticalPadding},_moduleLast[queries.small]={paddingBottom:moduleVerticalPaddingSmall,borderBottom:"none"},_moduleLast),content:(_content={display:"flex",justifyContent:"center",borderStyle:"solid",borderWidth:"0px 0px 2px 0px",borderColor:styleConstants.contentBorderColorLarge},_content[queries.large]={justifyContent:"flex-start"},_content[queries.medium]={flexWrap:"wrap",borderWidth:"0px 0px 4px 0px",borderColor:_globalStyles.colors.gray85},_content[queries.small]={flexDirection:"column",borderWidth:0},_content),contentUnitsAndLessons:(_contentUnitsAndLesso={display:"flex",flex:1,paddingTop:styleConstants.contentPaddingTop},_contentUnitsAndLesso[queries.small]={paddingTop:styleConstants.tocVerticalPaddingSmall},_contentUnitsAndLesso),titleAndContent:(_titleAndContent={flex:1,display:"flex",flexDirection:"column",paddingBottom:31},_titleAndContent[queries.small]={paddingBottom:styleConstants.tocVerticalPaddingSmall},_titleAndContent),iconWrapper:(_iconWrapper={flex:"0 0 "+styleConstants.iconSize+"px",fontSize:0,height:styleConstants.iconSize,width:styleConstants.iconSize},_iconWrapper[queries.medium]={flex:"0 0 "+styleConstants.iconSizeMedium+"px",height:styleConstants.iconSizeMedium,width:styleConstants.iconSizeMedium},_iconWrapper[queries.small]={flex:"0 0 "+styleConstants.iconSizeMedium+"px",height:styleConstants.iconSizeMedium,width:styleConstants.iconSizeMedium},_iconWrapper),icon:(_icon={backgroundSize:"cover",borderRadius:styleConstants.iconSize/2,height:"100%",position:"relative",width:"100%"},_icon[queries.medium]={borderRadius:styleConstants.iconSizeMedium/2},_icon[queries.small]={borderRadius:styleConstants.iconSizeMedium/2},_icon),info:(_info={flex:4,maxWidth:352},_info[queries.medium]={paddingLeft:styleConstants.iconPaddingSmall},_info[queries.small]={maxWidth:"none"},_info),title:babelHelpers.extends({},_shared2.default.typography.bodySmall,{fontFamily:"inherit",fontWeight:"bold",lineHeight:"26px"}),titleContainer:(_titleContainer={width:"100%",marginBottom:8},_titleContainer[queries.medium]={display:"flex",alignItems:"center",marginBottom:16},_titleContainer[queries.small]={display:"flex",alignItems:"center",marginBottom:16},_titleContainer),contentContainer:(_contentContainer={display:"flex",width:"100%"},_contentContainer[queries.small]={paddingLeft:16,paddingRight:13},_contentContainer),description:babelHelpers.extends({},_shared2.default.typography.bodyXsmall,{color:_shared2.default.colors.gray17}),leftSpacer:(_leftSpacer={width:75,flex:"initial"},_leftSpacer[queries.medium]={width:54},_leftSpacer[queries.small]={display:"none"},_leftSpacer),rightSpacer:(_rightSpacer={flex:"initial",width:31},_rightSpacer[queries.medium]={width:22},_rightSpacer[queries.small]={display:"none"},_rightSpacer),links:(_links={flex:5,maxWidth:388,display:"flex",flexDirection:"column",transition:"color 0.25s ease-in"},_links[queries.small]={display:"none"},_links),link:{height:30,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBarLargeScreen:(_iconBarLargeScreen={flex:"initial",paddingLeft:styleConstants.iconPadding,paddingRight:styleConstants.iconPadding},_iconBarLargeScreen[queries.small]={display:"none"},_iconBarLargeScreen[queries.medium]={display:"none"},_iconBarLargeScreen),iconBarMediumScreen:(_iconBarMediumScreen={flex:"initial",paddingLeft:styleConstants.iconPaddingSmall,paddingRight:styleConstants.iconPaddingSmall},_iconBarMediumScreen[queries.large]={display:"none"},_iconBarMediumScreen[queries.xlarge]={display:"none"},_iconBarMediumScreen)})

});
KAdefine("javascript/content-library-package/modules/up-next.jsx", function(require, module, exports) {
"use strict"
var _babelHelpers$extends,_narrow
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _clientLink=require("../../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _shared=require("../styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _title=require("../components/title.jsx")
var _title2=babelHelpers.interopRequireDefault(_title)
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var i18n=require("../../shared-package/i18n.js")
var chevronLeftIcon={path:"M-.013 49.84q0-3.416 2.352-5.824l41.72-41.664q2.352-2.352 5.768-2.352t5.824 2.352l4.816 4.816q2.352 2.296 2.352 5.768t-2.352 5.824l-31.136 31.08 31.136 31.08q2.352 2.408 2.352 5.824t-2.352 5.768l-4.816 4.76q-2.296 2.352-5.768 2.352t-5.824-2.352l-41.72-41.664q-2.352-2.352-2.352-5.768z",width:63.069,height:100}
var chevronRightIcon={path:"M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z",width:63.034,height:100}
var UpNext=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.domain,r=t.previous,l=t.next
var s=_shared2.default.domainColors(a),n=s.domain3
var i=(0,_aphrodite.css)(styles.chevron,styles.chevronLeft)
var o=(0,_aphrodite.css)(styles.chevron,styles.chevronRight)
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.module),id:"up-next-module"},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.wide)},r&&_react2.default.createElement("div",{style:{float:"left"}},_react2.default.createElement(_clientLink2.default,{to:r.url},_react2.default.createElement("span",null,_react2.default.createElement("span",{"aria-hidden":"true",className:i},_react2.default.createElement(_icon2.default,{icon:chevronLeftIcon,size:10,color:n})),r.title))),l&&_react2.default.createElement("div",{style:{float:"right"}},_react2.default.createElement(_clientLink2.default,{to:l.url},_react2.default.createElement("span",null,l.title,_react2.default.createElement("span",{"aria-hidden":"true",className:o},_react2.default.createElement(_icon2.default,{icon:chevronRightIcon,size:10,color:n}))))),_react2.default.createElement("div",{style:{clear:"both"}})),l&&_react2.default.createElement(_clientLink2.default,{to:l.url,style:[styles.narrow]},_react2.default.createElement(_title2.default,{className:(0,_aphrodite.css)(styles.upNext),style:{color:n}},i18n._("Up Next")),_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.next)},l.title)))}
return t}(_react2.default.Component)
UpNext.propTypes={domain:_propTypes2.default.string.isRequired,next:_propTypes2.default.shape({title:_propTypes2.default.string.isRequired,url:_propTypes2.default.string.isRequired}),previous:_propTypes2.default.shape({title:_propTypes2.default.string.isRequired,url:_propTypes2.default.string.isRequired})}
var moduleHorizontalPaddingSmall=_shared2.default.constants.moduleHorizontalPaddingSmall
var styles=_aphrodite.StyleSheet.create({module:babelHelpers.extends({},_shared2.default.moduleLayout.defaultAlignment),wide:babelHelpers.extends({},_shared2.default.moduleLayout.defaultSpacing,_shared2.default.typography.bodySmall,(_babelHelpers$extends={color:_shared2.default.colors.gray17,fontFamily:"inherit",fontWeight:"bold"},_babelHelpers$extends[_shared2.default.queries.small]={display:"none"},_babelHelpers$extends)),narrow:(_narrow={display:"none",paddingBottom:32,paddingLeft:moduleHorizontalPaddingSmall,paddingRight:moduleHorizontalPaddingSmall,paddingTop:32,textAlign:"center",":hover":{textDecoration:"none"}},_narrow[_shared2.default.queries.small]={display:"block"},_narrow),upNext:babelHelpers.extends({},_shared2.default.typography.bodySmall),next:babelHelpers.extends({},_shared2.default.typography.conceptHeadingMobile,{":hover":{textDecoration:"underline"}}),chevron:{fontSize:12,lineHeight:1},chevronLeft:{marginRight:4},chevronRight:{marginLeft:4}})
module.exports=UpNext

});
KAdefine("javascript/content-library-package/modules/classes-dashboard.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _classesDashboard,_babelHelpers$extends,_testPrepBannerContai,_classView,_classViewContents,_mod3CtaPlaceholder,_notMod3CtaPlaceholde,_mod3Remainder1EmptyP,_mod3Remainder2EmptyP,_notMod2CtaPlaceholde,_emptyPlaceholder,_mod2Remainder1EmptyP,_moreThanThree,_babelHelpers$extends2,_babelHelpers$extends3,_noClassesCtaFiller,_ctaBackground,_ctaInner,_plusSignIcon,_seeButtons,_tutorialIcon,_tutorialInfoText,_strutOrSpring
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _khanFetch=require("../../shared-package/khan-fetch.js")
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _circularProgressBar=require("../../components/progress-package/circular-progress-bar.jsx")
var _circularProgressBar2=babelHelpers.interopRequireDefault(_circularProgressBar)
var _classesDashboardStore=require("../../content-library-package/modules/classes-dashboard-store.js")
var _classesDashboardStore2=babelHelpers.interopRequireDefault(_classesDashboardStore)
var _classPickerModal=require("../components/class-picker-modal.jsx")
var _classPickerModal2=babelHelpers.interopRequireDefault(_classPickerModal)
var _dismissible=require("../../components/dismissible-package/dismissible.jsx")
var _dismissible2=babelHelpers.interopRequireDefault(_dismissible)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _joinModalWithContext=require("../../join-welcome-package/join-modal-with-context.jsx")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _satBanner=require("../components/sat-banner.jsx")
var _satBanner2=babelHelpers.interopRequireDefault(_satBanner)
var _testPrepBanner=require("../components/test-prep-banner.jsx")
var _testPrepBanner2=babelHelpers.interopRequireDefault(_testPrepBanner)
var _tooltip=require("../../components/tooltip-package/tooltip.jsx")
var _tooltip2=babelHelpers.interopRequireDefault(_tooltip)
var _utils=require("../../components/client-link-package/utils.js")
var i18n=require("../../shared-package/i18n.js")
var SAT_BANNER_DISMISS_KEY="classes_dashboard_sat_banner"
var SHARED_STYLES={mobilePadding:{padding:"0 16px"},borderBottom:"1px solid "+_globalStyles.colors.gray85,classMainViewRowHeight:204,classMainViewRowHeightMobile:214,classViewBottomPadding:32,topicWidth:146,iconBorderRadius:"50%",iconDiameter:48,innerIconDiameter:36,collapseToggleAnimationLength:350,fullTrackLength:16,trackLength:8,trackWidth:2,buttonWidth:80,plusIconDiameter:36}
var markConversions=function e(t,a){var r=a.url.split("/").pop()
_bigbingo2.default.markConversionsWithExtras([{id:"logged_in_homepage_click_class_topic",extra:{target:t,topicSlug:r}}])}
var CtaFillerClass=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),o=0;o<l;o++){i[o]=arguments[o]}return s=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={hovered:false},a),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.render=function e(){var t=this
var a=this.props.classesCount
return React.createElement("li",{key:"ctaFillerClass",className:(0,_aphrodite.css)(styles.classViewContents,styles.ctaFillerClass,a%3===0&&styles.mod3CtaPlaceholder,a%3!==0&&styles.notMod3CtaPlaceholder,a%2!==0&&styles.notMod2CtaPlaceholder,a>3&&styles.moreThanThree,a===0&&styles.noClassesCtaFiller,this.state.hovered&&styles.ctaFillerClassHovered),onMouseOver:function e(){return t.setState({hovered:true})},onMouseLeave:function e(){return t.setState({hovered:false})}},React.createElement("button",{className:(0,_aphrodite.css)(styles.ctaBackground,a===0&&styles.noClassesCtaBackground),onClick:this.props.onClick,onFocus:function e(){return t.setState({hovered:true})},onBlur:function e(){return t.setState({hovered:false})}},React.createElement("div",{className:(0,_aphrodite.css)(styles.ctaInner,a===0&&styles.noClassesCtaInner)},React.createElement("svg",{width:"36px",height:"36px",viewBox:"0 0 36 36",className:(0,_aphrodite.css)(styles.plusSignIcon,a===0&&styles.noClassesPlusSignIcon,this.state.hovered&&styles.plusSignIconHovered)},React.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},React.createElement("circle",{fill:"currentColor",cx:"18",cy:"18",r:"18"}),React.createElement("g",{transform:"translate(8, 8)",fill:"#FFFFFF"},React.createElement("rect",{x:"8",y:"0",width:"4",height:"20",rx:"2"}),React.createElement("rect",{x:"0",y:"8",width:"20",height:"4",rx:"2"})))),i18n._("Add another course"))))}
return t}(_react.Component)
var TopicContainer=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),o=0;o<l;o++){i[o]=arguments[o]}return s=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.tooltipConversionHasBeenLogged=false,a),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.maybeRenderCtaButton=function e(t){var a=this.props,r=a.classHasBeenStarted,s=a.classesWereForceUpdated,l=a.topicToResume,i=a.isFirstTopic,o=a.isFirstClass
var n=null
if(!r&&i){n=React.createElement(_wonderBlocksButtonV2.default,{href:t.url,size:"small",style:styles.btn,onClick:function e(){return markConversions("start_button",t)},skipClientNav:!(0,_utils.pathIsInShell)(t.url)},i18n._("Start"))}else if(l){n=React.createElement(_wonderBlocksButtonV2.default,{href:t.url,size:"small",style:styles.btn,onClick:function e(){return markConversions("resume_button",t)},skipClientNav:!(0,_utils.pathIsInShell)(t.url)},i18n._("Resume"))}var c=null
var d=s&&n&&o
if(d){var u=i18n._("Jump right into your courses and start learning!")
c=React.createElement(_tooltip2.default,{dismissOnClickClose:true,showOnMount:true,content:u,inverted:true,color:(0,_globalStyles.domainColors)("default").domain1,offset:22,horizontalAlignment:"right",horizontalShift:22,width:224},n)
if(!this.tooltipConversionHasBeenLogged){_bigbingo2.default.markConversion("classes_dashboard_tooltip_shown")
this.tooltipConversionHasBeenLogged=true}}return c||n}
t.prototype.renderTraditionalProgressMetrics=function e(){var t=this.props.topic.progress
var a=t[0],r=t[1]
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialProgress)},i18n.$_("%(completed)s / %(total)s completed",{completed:a,total:r}))}
t.prototype.renderMasteryProgressMetrics=function e(){var t=this.props.topic.masteryPercentage
return React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialProgress)},i18n.$_("%(masteryPercentage)s% mastery",{masteryPercentage:t}))}
t.prototype.render=function e(){var t=this.props,a=t.topic,r=t.domain,s=t.isFirstTopic,l=t.isLastTopic
var i=a.masteryPercentage,o=a.progress
var n=!!a.masteryEnabled
var c=typeof i==="number"&&n&&r==="math"
var d=typeof i==="number"&&c?i:o[0]
var u=typeof i==="number"&&c?100:o[1]
var p=d>0
var m=(0,_globalStyles.domainColors)(r),h=m.domain1,g=m.domain3
var f=React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialIcon)},React.createElement(_circularProgressBar2.default,{thickness:4,fillColor:h,trackColor:_globalStyles.colors.gray90,roundedCaps:true,max:u,value:d,diameter:SHARED_STYLES.iconDiameter},a.icon?React.createElement("img",{alt:"","aria-hidden":"true",src:(0,_staticUrl2.default)(a.icon),className:(0,_aphrodite.css)(styles.innerIcon)}):React.createElement("div",{className:(0,_aphrodite.css)(styles.innerIcon),style:{backgroundColor:h}})))
return React.createElement("li",{className:(0,_aphrodite.css)(styles.topicContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.track,styles.topTrack,s&&styles.invisible)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorial),style:{color:g}},React.createElement(_wonderBlocksLinkV2.default,{href:a.url,skipClientNav:!(0,_utils.pathIsInShell)(a.url),onClick:function e(){return markConversions("topic_info",a)},"aria-label":a.title,style:styles.tutorialInfo,kind:"secondary"},React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialIcon)},f),React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialInfoText)},React.createElement("div",{className:(0,_aphrodite.css)(styles.tutorialTitle,!p&&styles.twoLines,p&&styles.oneLine)},a.title),p&&(c?this.renderMasteryProgressMetrics():this.renderTraditionalProgressMetrics()))),this.maybeRenderCtaButton(a)),!l&&React.createElement("div",{className:(0,_aphrodite.css)(styles.track,styles.bottomTrack)}))}
return t}(_react.Component)
var ClassView=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.renderClass=function e(t,a,r){var s=this
var l=5
var i=t.length
var o=void 0
var n=void 0
var c=-1
var d=0
t.forEach(function(e,t){if(e.lastWorkedOn!=null){var a=new Date(e.lastWorkedOn)
var r=a.getTime()
if(r>d){d=r
c=t}}})
var u=c!==-1
if(u){o=c-2
n=c+3
if(o<0){n+=-o
o=0}else if(n>i){o-=n-i
n=i}}else{o=0
n=l}var p=t.slice(o,n)
return React.createElement("div",{key:"classViewRow"+this.props.classData.url},React.createElement("ul",null,p.map(function(e,t){var a=o+t
return React.createElement(TopicContainer,{key:"topicContainer"+e.url,topic:e,domain:r,classHasBeenStarted:u,classesWereForceUpdated:s.props.classesWereForceUpdated,topicToResume:t===c-o,isFirstTopic:o===0&&t===0,isLastTopic:a===i-1,isFirstClass:s.props.isFirstClass})})))}
t.prototype.render=function e(){var t=this.props.classData
var a=t.topicList
return React.createElement("li",{key:"classViewContents"+t.url,className:(0,_aphrodite.css)(styles.classViewContents)},React.createElement("div",{className:(0,_aphrodite.css)(styles.classHeader)},React.createElement("h3",{className:(0,_aphrodite.css)(styles.classHeaderTitle)},t.title),React.createElement(_wonderBlocksLinkV2.default,{href:t.url,skipClientNav:!(0,_utils.pathIsInShell)(t.url),onClick:function e(){return _bigbingo2.default.markConversionsWithExtras([{id:"logged_in_homepage_see_all_click",extra:{classId:t.id}}])},style:styles.seeAll},i18n.$_("See all (%(numberOfTopics)s)",{numberOfTopics:a.length}))),this.renderClass(a,t.title,t.domain))}
return t}(_react.Component)
var ClassesDashboard=function(e){babelHelpers.inherits(t,e)
function t(a){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
r.classPickerModal=null
r.handleFinishSelecting=function(e,t){r.saveUserClasses(e,t).then(function(){return r.updateClassesUI(e,t)}).then(function(){if(r.classPickerModal){r.classPickerModal.updateSaveStatus("completed")
r.setState({classesWereUpdated:true})}}).catch(function(e){if(r.classPickerModal){r.classPickerModal.updateSaveStatus("failed")}})}
r.handleClosePicker=function(){r.setState({showClassPicker:false})}
r.handleOpenPicker=function(){r.setState({addingClasses:true,showClassPicker:true})}
r.state={addingClasses:false,classesWereUpdated:false,showClassPicker:a.isFirstTime||a.showUpdateReminder}
return r}t.prototype.saveUserClasses=function e(t,a){var r=(0,_khanFetch.encodeParams)({topicIds:t.join(","),gradeLevelId:a})
return(0,_khanFetch.khanFetch)("/api/internal/user/user_class?"+r,{method:"POST"})}
t.prototype.updateClassesUI=function e(t,a){var r=this
var s=this.props.classes.map(function(e){return e.id})
var l=t.filter(function(e){return!s.includes(e)})
var i=s.filter(function(e){return!t.includes(e)})
var o=l.map(function(e){var t=""
for(var a=r.props.classPickerData.domains,s=Array.isArray(a),l=0,a=s?a:a[Symbol.iterator]();;){var i
if(s){if(l>=a.length)break
i=a[l++]}else{l=a.next()
if(l.done)break
i=l.value}var o=i
for(var n=o.subjects,c=Array.isArray(n),d=0,n=c?n:n[Symbol.iterator]();;){var u
if(c){if(d>=n.length)break
u=n[d++]}else{d=n.next()
if(d.done)break
u=d.value}var p=u
if(p.id===e){t=p.slug}}}return t})
var n=void 0
if(o.length>0){var c=(0,_khanFetch.encodeParams)({topicSlugs:o.join(",")})
var d="/api/internal/topics_with_progress?"+c
n=(0,_khanFetch.khanFetch)(d).then(function(e){e.json().then(function(e){for(var t=e,a=Array.isArray(t),r=0,t=a?t:t[Symbol.iterator]();;){var s
if(a){if(r>=t.length)break
s=t[r++]}else{r=t.next()
if(r.done)break
s=r.value}var l=s
var i={id:l.id,slug:l.slug,title:l.translated_title,domain:l.domain_slug,icon:l.icon,url:l.relative_url,topicList:l.children.map(function(e){return{title:e.translated_title,url:e.url,icon:e.icon,progress:e.progress,masteryPercentage:e.mastery_percentage}})}
_classesDashboardStore2.default.dispatch({type:"ADD_CLASS",class:i})}})})}else{n=Promise.resolve()}return n.then(function(){i.forEach(function(e){_classesDashboardStore2.default.dispatch({type:"DELETE_CLASS",classId:e})})
_classesDashboardStore2.default.dispatch({type:"UPDATE_GRADE_LEVEL",gradeLevelId:a})})}
t.prototype.render=function e(){var t=this
var a=[]
var r=this.props.classPickerData.domains
var s=this.props.gradeLevelId
var l={}
var i=r.map(function(e){return e.slug}).filter(function(e){l[e]=true
return!(e in l)})
var o=[]
var n={}
for(var c=r,d=Array.isArray(c),u=0,c=d?c:c[Symbol.iterator]();;){var p
if(d){if(u>=c.length)break
p=c[u++]}else{u=c.next()
if(u.done)break
p=u.value}var m=p
o.push.apply(o,m.subjects.map(function(e){return e.id}))}for(var h=this.props.classes,g=Array.isArray(h),f=0,h=g?h:h[Symbol.iterator]();;){var b
if(g){if(f>=h.length)break
b=h[f++]}else{f=h.next()
if(f.done)break
b=f.value}var y=b
if(!o.includes(y.id)){continue}var v=i.includes(y.domain)?y.domain:"other"
if(!(v in n)){n[v]=[]}n[v].push(y)}for(var C=i.concat(["other"]),S=Array.isArray(C),R=0,C=S?C:C[Symbol.iterator]();;){var k
if(S){if(R>=C.length)break
k=C[R++]}else{R=C.next()
if(R.done)break
k=R.value}var E=k
var x=(n[E]||[]).sort(function(e,t){return e.title.localeCompare(t.title)})
a.push.apply(a,x)}var P=a.map(function(e){return e.id})
var T="x0a8c2e5f"
var H=["xd18d987d5706ee27"]
var w=[T].concat(H)
var D=o.includes(T)
var I=a.map(function(e){var t=e.id
return t}).includes(T)
var B=s==="10th-grade"||s==="11th-grade"||s==="12th-grade"
var L=a.filter(function(e){var t=e.id
return!w.includes(t)})
var A=L.length
var O=!!a.length
var M=a.map(function(e){if(H.includes(e.id)){return React.createElement("div",{className:(0,_aphrodite.css)(styles.testPrepBannerContainer),key:"test-prep-"+e.slug},React.createElement(_testPrepBanner2.default,{examName:e.title,examId:e.slug}))}})
return React.createElement("div",{className:(0,_aphrodite.css)(styles.classesDashboard)},M,I&&React.createElement("div",{className:(0,_aphrodite.css)(styles.testPrepBannerContainer)},React.createElement(_satBanner2.default,{onClose:this.handleOpenPicker})),!I&&D&&B&&!this.state.showClassPicker&&React.createElement(_dismissible2.default,{dismissKey:SAT_BANNER_DISMISS_KEY,expiresDays:"never"},function(e){return React.createElement("div",{className:(0,_aphrodite.css)(styles.testPrepBannerContainer)},React.createElement(_satBanner2.default,{onClose:e}))}),O&&React.createElement("div",{className:(0,_aphrodite.css)(styles.classesDashboardHeader)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.moduleTitle)},i18n._("My courses")),React.createElement("div",{className:(0,_aphrodite.css)(styles.strutOrSpring)}),React.createElement(_wonderBlocksButtonV2.default,{kind:"tertiary",onClick:this.handleOpenPicker},i18n._("Edit"))),O&&React.createElement("div",{className:(0,_aphrodite.css)(styles.classesList)},React.createElement("ul",{className:(0,_aphrodite.css)(styles.classView,A===0&&styles.noClassesClassView)},a.filter(function(e){var t=e.id
return!w.includes(t)}).map(function(e,a){return React.createElement(ClassView,{key:"classView"+e.url,classData:e,classesWereForceUpdated:t.state.classesWereUpdated&&!t.state.addingClasses,isFirstClass:a===0})}),React.createElement(CtaFillerClass,{classesCount:A,onClick:this.handleOpenPicker}),React.createElement("div",{className:(0,_aphrodite.css)(styles.classViewContents,A%3===1&&styles.mod3Remainder1EmptyPlaceholder,A%3===2&&styles.mod3Remainder2EmptyPlaceholder,A===0&&styles.mod3Remainder1EmptyPlaceholder,styles.emptyPlaceholder)}),React.createElement("div",{className:(0,_aphrodite.css)(styles.classViewContents,styles.emptyPlaceholder,A===0&&styles.mod2Remainder1EmptyPlaceholder)}))),(this.state.showClassPicker||!O)&&React.createElement(_joinModalWithContext.JoinModalCompleteContext.Consumer,null,function(e){return e&&React.createElement(_classPickerModal2.default,babelHelpers.extends({},t.props.classPickerData,{initialGradeLevelId:t.props.gradeLevelId,initialSelectedClasses:P,onClose:t.handleClosePicker,onFinish:t.handleFinishSelecting,preventDismissal:t.props.isFirstTime&&!t.state.addingClasses,showUpdateReminder:t.props.showUpdateReminder,ref:function e(a){return t.classPickerModal=a}}))}),O&&React.createElement("div",{className:(0,_aphrodite.css)(styles.classesDashboardFooter)}))}
return t}(_react.Component)
exports.default=ClassesDashboard
var collapseToggleAnimationTransition=SHARED_STYLES.collapseToggleAnimationLength/1e3+"s ease-out"
var subjectTitleMargin=130
var MINI_CTA_HEIGHT=56
var styles=_aphrodite.StyleSheet.create({classesDashboard:(_classesDashboard={justifyContent:"center",maxWidth:1200,margin:"0 auto",padding:"8px 20px",backgroundColor:_globalStyles.colors.white},_classesDashboard[_mediaQueries2.default.smOrSmaller]={margin:0,padding:0},_classesDashboard),classesDashboardHeader:babelHelpers.extends({display:"flex",justifyContent:"start",alignItems:"baseline",marginBottom:12},_globalStyles.typography.subheadingDesktop,(_babelHelpers$extends={},_babelHelpers$extends[_mediaQueries2.default.smOrSmaller]=babelHelpers.extends({width:"100%",marginTop:24},SHARED_STYLES.mobilePadding),_babelHelpers$extends)),classesDashboardFooter:{height:48-8-SHARED_STYLES.classViewBottomPadding,borderBottom:SHARED_STYLES.borderBottom,marginBottom:20},testPrepBannerContainer:(_testPrepBannerContai={paddingTop:0,paddingLeft:0,paddingBottom:30,paddingRight:0},_testPrepBannerContai[_mediaQueries2.default.smOrSmaller]={paddingTop:20,paddingLeft:16,paddingBottom:0,paddingRight:16},_testPrepBannerContai),classesList:{overflow:"hidden"},classView:(_classView={display:"flex",flexWrap:"wrap",alignItems:"flex-start"},_classView[_mediaQueries2.default.smOrSmaller]=babelHelpers.extends({width:"100%"},SHARED_STYLES.mobilePadding),_classView[_mediaQueries2.default.mdOrLarger]={marginRight:-40},_classView[_mediaQueries2.default.lgOrLarger]={marginRight:-40},_classView[_mediaQueries2.default.xlOrLarger]={marginRight:-56},_classView),noClassesClassView:{height:56,marginBottom:32},classViewContents:(_classViewContents={minHeight:368,marginBottom:SHARED_STYLES.classViewBottomPadding,flexShrink:0},_classViewContents[_mediaQueries2.default.smOrSmaller]={flex:"1 0 100%",paddingRight:0},_classViewContents[_mediaQueries2.default.mdOrLarger]={flex:"1 0 50%",paddingRight:40},_classViewContents[_mediaQueries2.default.lgOrLarger]={flex:"1 0 33%",paddingRight:40},_classViewContents[_mediaQueries2.default.xlOrLarger]={paddingRight:56},_classViewContents),mod3CtaPlaceholder:(_mod3CtaPlaceholder={},_mod3CtaPlaceholder[_mediaQueries2.default.lgOrLarger]={display:"none"},_mod3CtaPlaceholder),notMod3CtaPlaceholder:(_notMod3CtaPlaceholde={},_notMod3CtaPlaceholde[_mediaQueries2.default.mdOrLarger]={display:"none"},_notMod3CtaPlaceholde[_mediaQueries2.default.lgOrLarger]={display:"flex"},_notMod3CtaPlaceholde),mod3Remainder1EmptyPlaceholder:(_mod3Remainder1EmptyP={},_mod3Remainder1EmptyP[_mediaQueries2.default.lgOrLarger]={display:"flex"},_mod3Remainder1EmptyP),mod3Remainder2EmptyPlaceholder:(_mod3Remainder2EmptyP={},_mod3Remainder2EmptyP[_mediaQueries2.default.lgOrLarger]={display:"none"},_mod3Remainder2EmptyP),notMod2CtaPlaceholder:(_notMod2CtaPlaceholde={},_notMod2CtaPlaceholde[_mediaQueries2.default.mdOrLarger]={display:"flex"},_notMod2CtaPlaceholde),emptyPlaceholder:(_emptyPlaceholder={},_emptyPlaceholder[_mediaQueries2.default.smOrSmaller]={display:"none"},_emptyPlaceholder[_mediaQueries2.default.mdOrLarger]={display:"none"},_emptyPlaceholder),mod2Remainder1EmptyPlaceholder:(_mod2Remainder1EmptyP={},_mod2Remainder1EmptyP[_mediaQueries2.default.mdOrLarger]={display:"flex"},_mod2Remainder1EmptyP[_mediaQueries2.default.lgOrLarger]={display:"flex"},_mod2Remainder1EmptyP),moreThanThree:(_moreThanThree={},_moreThanThree[_mediaQueries2.default.smOrSmaller]={display:"none"},_moreThanThree),moduleTitle:babelHelpers.extends({color:_globalStyles.colors.gray17,flexShrink:0,marginBottom:0},_globalStyles.typography.subheadingDesktop,(_babelHelpers$extends2={},_babelHelpers$extends2[_mediaQueries2.default.smOrSmaller]=babelHelpers.extends({},_globalStyles.typography.subheadingMobile),_babelHelpers$extends2)),ctaFillerClass:babelHelpers.extends({display:"flex"},_globalStyles.typography.labelMedium,(_babelHelpers$extends3={color:_globalStyles.colors.gray68,":hover":{cursor:"pointer"}},_babelHelpers$extends3[_mediaQueries2.default.smOrSmaller]={marginLeft:-4,marginRight:-4,minHeight:MINI_CTA_HEIGHT,height:MINI_CTA_HEIGHT},_babelHelpers$extends3)),noClassesCtaFiller:(_noClassesCtaFiller={display:"flex"},_noClassesCtaFiller[_mediaQueries2.default.lgOrLarger]={display:"flex"},_noClassesCtaFiller.minHeight=MINI_CTA_HEIGHT,_noClassesCtaFiller.height=MINI_CTA_HEIGHT,_noClassesCtaFiller),ctaBackground:(_ctaBackground={display:"flex",flexGrow:1,alignItems:"center",justifyContent:"center",backgroundColor:_globalStyles.colors.gray97,border:"none",borderRadius:_globalStyles.borderRadius},_ctaBackground[_mediaQueries2.default.smOrSmaller]={flexDirection:"row",justifyContent:"start"},_ctaBackground),noClassesCtaBackground:{flexDirection:"row",justifyContent:"start"},ctaInner:(_ctaInner={display:"flex",flexDirection:"column"},_ctaInner[_mediaQueries2.default.smOrSmaller]={flexDirection:"row",alignItems:"center"},_ctaInner),noClassesCtaInner:{flexDirection:"row",alignItems:"center"},ctaFillerClassHovered:{color:_globalStyles.colors.gray17},plusSignIcon:(_plusSignIcon={borderRadius:SHARED_STYLES.iconBorderRadius,width:SHARED_STYLES.plusIconDiameter,height:SHARED_STYLES.plusIconDiameter,margin:"0 auto 12px auto",display:"flex",alignItems:"center",justifyContent:"center",color:_globalStyles.colors.gray85},_plusSignIcon[_mediaQueries2.default.smOrSmaller]={margin:"auto 16px auto 10px"},_plusSignIcon),noClassesPlusSignIcon:{margin:"auto 16px auto 10px"},plusSignIconHovered:{color:_globalStyles.colors.gray68},classHeader:{display:"flex",justifyContent:"space-between",borderBottom:SHARED_STYLES.borderBottom,marginBottom:20,paddingBottom:14},classHeaderTitle:babelHelpers.extends({},_globalStyles.typography.bodyXsmallBold,{lineHeight:1.17,marginTop:10,marginBottom:0}),seeAll:{marginTop:10},btn:{minWidth:SHARED_STYLES.buttonWidth},seeButtons:(_seeButtons={},_seeButtons[_mediaQueries2.default.smOrSmaller]={marginTop:-6},_seeButtons),maybeHiddenRowGroup:{transition:"height "+collapseToggleAnimationTransition+(", opacity "+collapseToggleAnimationTransition)},topicContainer:{display:"flex",justifyContent:"space-between",marginTop:SHARED_STYLES.trackLength,marginBottom:SHARED_STYLES.trackLength,width:"100%",position:"relative"},track:{width:SHARED_STYLES.trackWidth,height:SHARED_STYLES.trackLength,backgroundColor:_globalStyles.colors.gray85,position:"absolute",left:Math.floor(SHARED_STYLES.iconDiameter/2)-SHARED_STYLES.trackWidth/2},topTrack:{bottom:SHARED_STYLES.iconDiameter},bottomTrack:{top:SHARED_STYLES.iconDiameter},invisible:{opacity:0},tutorial:{width:"100%",display:"flex",justifyContent:"space-between",textAlign:"left",alignItems:"center"},tutorialInfo:{display:"flex",alignItems:"center"},tutorialIcon:(_tutorialIcon={width:SHARED_STYLES.iconDiameter,height:SHARED_STYLES.iconDiameter,borderRadius:SHARED_STYLES.iconBorderRadius},_tutorialIcon[_mediaQueries2.default.smOrSmaller]={margin:0},_tutorialIcon),innerIcon:{borderRadius:SHARED_STYLES.iconBorderRadius,width:SHARED_STYLES.innerIconDiameter,height:SHARED_STYLES.innerIconDiameter},tutorialTitle:_globalStyles.typography.bodyXsmall,oneLine:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},twoLines:{maxHeight:44,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},tutorialInfoText:(_tutorialInfoText={display:"flex",flexDirection:"column",padding:"0 10px"},_tutorialInfoText[_mediaQueries2.default.smOrSmaller]={maxWidth:"calc(100vw - 40px - "+subjectTitleMargin+"px)"},_tutorialInfoText[_mediaQueries2.default.mdOrLarger]={maxWidth:"calc((100vw - 80px) / 2 - "+subjectTitleMargin+"px)"},_tutorialInfoText[_mediaQueries2.default.lgOrLarger]={maxWidth:"calc((100vw - 120px) / 3 - "+subjectTitleMargin+"px)"},_tutorialInfoText[_mediaQueries2.default.xlOrLarger]={maxWidth:"calc((1200px - 40px - 112px) / 3 - "+subjectTitleMargin+"px)"},_tutorialInfoText),tutorialProgress:babelHelpers.extends({paddingTop:4,color:_globalStyles.colors.gray25},_globalStyles.typography.labelSmall),strutOrSpring:(_strutOrSpring={flex:"0 0 20px"},_strutOrSpring[_mediaQueries2.default.smOrSmaller]={flex:"1 1 100%"},_strutOrSpring)})

});
KAdefine("javascript/content-library-package/modules/student-mastery-goal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _bigBingoLinks=require("../../page-package/big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _progressBar=require("../../components/progress-package/progress-bar.jsx")
var _progressBar2=babelHelpers.interopRequireDefault(_progressBar)
var _createMomentLoader=require("../../components/lazy-load-package/create-moment-loader.jsx")
var _createMomentLoader2=babelHelpers.interopRequireDefault(_createMomentLoader)
var i18n=require("../../shared-package/i18n.js")
var StudentMasteryGoal=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,a=r.goal,t=r.useWideLayout,o=r.moment
var s=a.currentMastery,l=s.pointsAvailable,n=s.pointsEarned
var i=Math.round(n/l*100)
var c="/"+a.topic.domainSlug+"/"+a.topic.slug
var d=_bigBingoLinks2.default.handlersWithExtras([{id:"assignment_start_course_mastery_goal_clicked",extra:{domain:a.topic.domainSlug,slug:a.topic.slug}}])
return React.createElement(_wonderBlocksCoreV.View,{style:t&&styles.wideWrapper},t&&React.createElement("img",{alt:"",src:(0,_staticUrl2.default)(a.topic.largeIconPath),className:(0,_aphrodite.css)(styles.largeIconImage)}),React.createElement(_wonderBlocksCoreV.View,{style:[styles.mainContent,t?styles.wideMainContent:styles.narrowMainContent]},React.createElement(_wonderBlocksCoreV.View,{style:styles.summary},React.createElement(_wonderBlocksTypographyV.LabelSmall,{"data-test-id":"mastery-goal-class",style:styles.firstLine},i18n._("For %(classTitle)s",{classTitle:a.studentListName})," · ",o&&i18n._("Due on %(dueDate)s",{dueDate:o(a.dueDate).format("MMMM Do")})),React.createElement(_wonderBlocksTypographyV.HeadingMedium,{"data-test-id":"mastery-goal-subject"},i18n._("Master %(percentage)s% of %(subject)s",{percentage:100,subject:a.topic.translatedTitle})),React.createElement(_wonderBlocksCoreV.View,{style:[styles.progressWrapper,t?styles.wideProgressWrapper:styles.narrowProgressWrapper]},React.createElement(_progressBar2.default,{value:n,max:a.currentMastery.pointsAvailable,flatProgressEdge:true,thickness:9,length:"100%",fillColor:_wonderBlocksColorV2.default.purple,backgroundColor:_wonderBlocksColorV2.default.offBlack8,animateValueChanges:true,animateOnMount:true,animationDuration:1e3})),React.createElement(_wonderBlocksTypographyV.LabelLarge,null,i18n._("%(currentMasteryPercentage)s% mastery",{currentMasteryPercentage:i})," · ",i18n._("%(pointsEarned)s / %(pointsAvailable)s mastery points",{pointsEarned:n,pointsAvailable:l}))),React.createElement(_wonderBlocksCoreV.View,{style:t?styles.wideCta:styles.narrowCta},React.createElement(_button2.default,babelHelpers.extends({"data-test-id":"mastery-goal-start-button",color:_wonderBlocksColorV2.default.blue,href:c},d),i>0?i18n._("Keep learning"):i18n._("Start goal")))))}
return r}(React.Component)
var styles=_aphrodite.StyleSheet.create({wideWrapper:{flexDirection:"row"},largeIconImage:{borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px",width:144,height:144,objectFit:"cover"},mainContent:{background:_wonderBlocksColorV2.default.offWhite,border:"1px solid "+_wonderBlocksColorV2.default.offBlack16},wideMainContent:{flex:1,display:"flex",flexDirection:"row",borderRadius:"0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0",padding:"20px 48px 20px 32px"},narrowMainContent:{borderRadius:_globalStyles.borderRadius,padding:16},summary:{flex:1},wideCta:{alignSelf:"center"},narrowCta:{marginTop:16,width:132},firstLine:{color:_wonderBlocksColorV2.default.offBlack64,marginBottom:4},progressWrapper:{marginTop:12,marginBottom:8},wideProgressWrapper:{width:550,maxWidth:"90%"},narrowProgressWrapper:{width:"90%"}})
exports.default=(0,_createMomentLoader2.default)(StudentMasteryGoal)

});
KAdefine("javascript/content-library-package/modules/student-mastery-goal-list.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _smallCardWrapper,_smallCardWrapperEven
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _studentMasteryGoalQuery=require("./student-mastery-goal-query.jsx")
var _studentMasteryGoalQuery2=babelHelpers.interopRequireDefault(_studentMasteryGoalQuery)
var _studentMasteryGoal=require("./student-mastery-goal.jsx")
var _studentMasteryGoal2=babelHelpers.interopRequireDefault(_studentMasteryGoal)
var _availableWidth=require("../components/available-width.jsx")
var _availableWidth2=babelHelpers.interopRequireDefault(_availableWidth)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _constants=require("../../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _apolloWrapper=require("../../apollo-package/apollo-wrapper.jsx")
var _apolloWrapper2=babelHelpers.interopRequireDefault(_apolloWrapper)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var SMALL_BREAKPOINT=Number(_constants2.default.pureSmMax.replace("px",""))
var StudentMasteryGoalList=function(e){babelHelpers.inherits(a,e)
function a(){var r,t,l
babelHelpers.classCallCheck(this,a)
for(var s=arguments.length,n=Array(s),p=0;p<s;p++){n[p]=arguments[p]}return l=(r=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),t),t.renderGoal=function(e,a,r){return React.createElement(_wonderBlocksCoreV.View,{key:a,style:[r.length!==1&&styles.smallCardWrapper,a%2!==0&&styles.smallCardWrapperEven]},React.createElement(_availableWidth2.default,null,function(a){return React.createElement(_studentMasteryGoal2.default,{goal:e,useWideLayout:a>SMALL_BREAKPOINT})}))},r),babelHelpers.possibleConstructorReturn(t,l)}a.prototype.render=function e(){var a=this
return React.createElement(_apolloWrapper2.default,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.wrapper},React.createElement(_studentMasteryGoalQuery2.default,null,function(e){var r=e.isLoading,t=e.goals
return r?React.createElement(_wonderBlocksCoreV.View,{style:styles.spinnerWrapper},React.createElement(_spinner2.default,{size:"small"})):React.createElement("span",null,t.map(a.renderGoal))})))}
return a}(React.Component)
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"block",maxWidth:_globalStyles2.default.constants.pageWidth,marginLeft:"auto",marginRight:"auto",paddingLeft:16,paddingRight:16,marginBottom:48},smallCardWrapper:(_smallCardWrapper={display:"inline-block",width:"calc(50% - 16px)"},_smallCardWrapper[_mediaQueries2.default.smOrSmaller]={width:"100%",marginBottom:16},_smallCardWrapper),smallCardWrapperEven:(_smallCardWrapperEven={marginLeft:32},_smallCardWrapperEven[_mediaQueries2.default.smOrSmaller]={marginLeft:0},_smallCardWrapperEven),spinnerWrapper:{padding:40,textAlign:"center"}})
exports.default=StudentMasteryGoalList

});
KAdefine("javascript/content-library-package/modules/student-mastery-goal-query.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query StudentMasteryGoals {\n        user {\n            id\n            subjectMasteryAssignments {\n                id\n                title\n                studentList {\n                    id\n                    name\n                }\n                dueDate\n                topic {\n                    id\n                    slug\n                    domainSlug\n                    translatedTitle\n                    largeIconPath\n                }\n                currentUserProgress {\n                    currentMastery {\n                        percentage\n                        pointsEarned\n                        pointsAvailable\n                    }\n                }\n            }\n        }\n    }\n"],["\n    query StudentMasteryGoals {\n        user {\n            id\n            subjectMasteryAssignments {\n                id\n                title\n                studentList {\n                    id\n                    name\n                }\n                dueDate\n                topic {\n                    id\n                    slug\n                    domainSlug\n                    translatedTitle\n                    largeIconPath\n                }\n                currentUserProgress {\n                    currentMastery {\n                        percentage\n                        pointsEarned\n                        pointsAvailable\n                    }\n                }\n            }\n        }\n    }\n"])
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactApollo=require("react-apollo")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var StudentMasteryGoalQuery=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.children
return React.createElement(_reactApollo.Query,{query:DATA_QUERY},function(e){return r(mapDataToResult(e))})}
return r}(React.Component)
var mapDataToResult=function e(r){var t=r.data,n=r.error,a=r.loading
var s=t&&t.user&&t.user.subjectMasteryAssignments
if(!s){return{isLoading:a,goals:[]}}var u=s.filter(function(e){return!!e.studentList&&!!e.currentUserProgress}).map(function(e){return{dueDate:e.dueDate,topic:e.topic,studentListName:e.studentList?e.studentList.name:null,currentMastery:{percentage:Number(e.currentUserProgress.currentMastery.percentage),pointsEarned:Number(e.currentUserProgress.currentMastery.pointsEarned),pointsAvailable:Number(e.currentUserProgress.currentMastery.pointsAvailable)}}})
return{isLoading:a,goals:u}}
var DATA_QUERY=(0,_graphqlTag2.default)(_templateObject)
exports.default=StudentMasteryGoalQuery

});
KAdefine("javascript/content-library-package/modules/stateful-classes-dashboard.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactRedux=require("react-redux")
var _classesDashboard=require("./classes-dashboard.jsx")
var _classesDashboard2=babelHelpers.interopRequireDefault(_classesDashboard)
var _classesDashboardStore=require("./classes-dashboard-store.js")
var _classesDashboardStore2=babelHelpers.interopRequireDefault(_classesDashboardStore)
var mapStateToProps=function e(s,a){return s}
var mapDispatchToProps=function e(s,a){return{}}
var ConnectedClassesDashboard=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(_classesDashboard2.default)
var StatefulClassesDashboard=function(e){babelHelpers.inherits(s,e)
function s(){babelHelpers.classCallCheck(this,s)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}s.prototype.UNSAFE_componentWillMount=function e(){_classesDashboardStore2.default.dispatch({type:"UPDATE_CLASSES",classes:this.props.userClasses})
_classesDashboardStore2.default.dispatch({type:"UPDATE_GRADE_LEVEL",gradeLevelId:this.props.gradeLevelId})}
s.prototype.render=function e(){return React.createElement(_reactRedux.Provider,{store:_classesDashboardStore2.default},React.createElement(ConnectedClassesDashboard,{classPickerData:this.props.classPickerData,isFirstTime:this.props.isFirstTime,showUpdateReminder:this.props.showUpdateReminder}))}
return s}(_react.Component)
exports.default=StatefulClassesDashboard

});
KAdefine("javascript/content-library-package/modules/classes-dashboard-store.js", function(require, module, exports) {
var _redux=require("redux")
var _composeEnhancers=require("../../utils/compose-enhancers.js")
var compose=(0,_composeEnhancers.createCompose)({reduxDevtoolsOptions:{name:"Classes Dashboard"}})
var reducer=function e(s,r){if(r.type==="UPDATE_CLASSES"){return babelHelpers.extends({},s,{classes:r.classes})}else if(r.type==="UPDATE_GRADE_LEVEL"){return babelHelpers.extends({},s,{gradeLevelId:r.gradeLevelId})}else if(r.type==="ADD_CLASS"){return babelHelpers.extends({},s,{classes:[].concat(s.classes,[r.class])})}else if(r.type==="DELETE_CLASS"){var a=r.classId
return babelHelpers.extends({},s,{classes:s.classes.filter(function(e){return e.id!==a})})}else{return s}}
var initialState={classes:[],gradeLevelId:null}
module.exports=(0,_redux.createStore)(reducer,initialState,compose())

});
KAdefine("javascript/content-library-package/modules/classes-dashboard-types.js", function(require, module, exports) {

});
KAdefine("javascript/content-library-package/modules/custom-headers/custom-test-prep-header.jsx", function(require, module, exports) {
var _link,_branding
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query gtp_getExamBrandingInfo($examId: String!) {\n        metadata(examId: $examId) {\n            testMaker\n            kaRelationshipToTestCopy\n            testMakerLogoImg\n            subExamMode\n            examGroupMetadata {\n                examGroupId\n            }\n        }\n    }\n"],["\n    query gtp_getExamBrandingInfo($examId: String!) {\n        metadata(examId: $examId) {\n            testMaker\n            kaRelationshipToTestCopy\n            testMakerLogoImg\n            subExamMode\n            examGroupMetadata {\n                examGroupId\n            }\n        }\n    }\n"])
var _aphrodite=require("aphrodite")
var _reactApollo=require("react-apollo")
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _globalStyles=require("../../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _newTooltip=require("../../../components/new-tooltip-package/new-tooltip.jsx")
var _newTooltip2=babelHelpers.interopRequireDefault(_newTooltip)
var _button=require("../../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _partnerBranding=require("../../../test-prep-package/app-common/components/partner-branding.jsx")
var _partnerBranding2=babelHelpers.interopRequireDefault(_partnerBranding)
var React=require("react")
var BigBingo=require("../../../shared-package/bigbingo.js")
var i18n=require("../../../shared-package/i18n.js")
var DATA_QUERY=(0,_graphqlTag2.default)(_templateObject)
var TestPrepHeader=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){var t={Product:"test-prep",Domain:"test-prep",Subject:this.props.examId,Activity:"navigating",page:"lessons-page"}
BigBingo.markConversion("gtp_page_view",t)}
t.prototype.renderTooltipContent=function e(t,a){var r=this.props.examId
return React.createElement("div",{className:(0,_aphrodite.css)(styles.upsellTooltip)},React.createElement("div",{id:a.get("tooltip"),className:(0,_aphrodite.css)(styles.upsellTooltipHeader)},i18n.$_("Taking the %(examName)s?",{examName:t})),React.createElement("div",{className:(0,_aphrodite.css)(styles.upsellTooltipContent)},i18n._("Get personalized practice tailored for your goals and your schedule on Khan Academy – 100% free.")),React.createElement(_button2.default,{colors:{textColor:"#1062f9",backgroundColor:"#FFFFFF",borderColor:"transparent"},href:"/prep/"+r,width:"100%",weight:"bold"},i18n._("Learn more")))}
t.prototype.maybeRenderOverviewTab=function e(){if(!this.props.data||!this.props.data.metadata){return null}var t=this.props.examId
var a=this.props.data.metadata
return a.subExamMode&&React.createElement("li",{className:(0,_aphrodite.css)(styles.headerElement)},React.createElement("a",{className:(0,_aphrodite.css)(styles.link),href:"/prep/"+t+"/overview"},i18n._("Overview")))}
t.prototype.renderPracticeLink=function e(t){var a=this.props,r=a.examId,n=a.showUpsellTooltip
var o=r.toUpperCase()
var s=React.createElement("a",{className:(0,_aphrodite.css)(styles.link),href:"/prep/"+r+"/practice"},i18n._("Practice"))
if(n){return React.createElement(_newTooltip2.default,{content:this.renderTooltipContent(o,t),showOnMount:true,dismissOnClickClose:true,inverted:true,color:"#2e6ee5",offsetFrom:"arrow",side:"bottom",offset:15,a11y:{title:t.get("tooltip")}},s)}else{return s}}
t.prototype.renderBranding=function e(){if(!this.props.data||!this.props.data.metadata){return null}var t=this.props.data.metadata
return React.createElement("div",{className:(0,_aphrodite.css)(styles.branding)},React.createElement(_partnerBranding2.default,{kaRelationshipToTestCopy:t.kaRelationshipToTestCopy,testMakerLogoImg:t.testMakerLogoImg,testMaker:t.testMaker}))}
t.prototype._maybeRenderHeaderInner=function e(t){var a=this.props,r=a.examId,n=a.leftAlign,o=a.data
if(!o||!o.metadata){return null}var s=o.metadata.examGroupMetadata.examGroupId
return React.createElement("div",{className:(0,_aphrodite.css)(styles.innerContainer,n&&styles.leftAlignContainer)},React.createElement("ul",{className:(0,_aphrodite.css)(styles.navElements)},this.maybeRenderOverviewTab(),React.createElement("li",{className:(0,_aphrodite.css)(styles.headerElement)},this.renderPracticeLink(t)),React.createElement("li",{className:(0,_aphrodite.css)(styles.headerElement)},React.createElement("a",{className:(0,_aphrodite.css)(styles.link,styles.selectedLink),href:"/test-prep/"+r+"/"+r+"-lessons"},i18n._("Lessons"),React.createElement("span",{"aria-label":i18n._(", selected"),className:(0,_aphrodite.css)(styles.selection)}))),React.createElement("li",{className:(0,_aphrodite.css)(styles.headerElement)},React.createElement("a",{className:(0,_aphrodite.css)(styles.link),href:"/prep/"+s+"/settings"},i18n._("Settings")))),this.renderBranding())}
t.prototype._renderHeader=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.headerDiv)},this._maybeRenderHeaderInner(t))}
t.prototype.render=function e(){var t=this
return React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{mockOnFirstRender:false,scope:"gtp-custom-header"},function(e){return t._renderHeader(e)})}
return t}(React.Component)
var blue="#1865F2"
var HEADER_HEIGHT=48
var styles=_aphrodite.StyleSheet.create({headerDiv:{backgroundColor:"white",height:HEADER_HEIGHT,borderBottom:"1px solid #E2E4E4"},innerContainer:{maxWidth:_globalStyles2.default.pageWidth,height:"100%",margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"},leftAlignContainer:{margin:0,marginLeft:10,maxWidth:"none"},navElements:{display:"flex",height:"100%",alignItems:"center"},headerElement:{zIndex:1,paddingLeft:10,paddingRight:10,display:"flex",justifyContent:"center",flexDirection:"column",position:"relative",height:"100%"},selection:{height:5,width:"100%",backgroundColor:blue,position:"absolute",left:0,bottom:0},link:(_link={color:"black",display:"block",fontWeight:600,fontSize:16,cursor:"pointer",textDecoration:"none"},_link[":hover"]={color:blue},_link),selectedLink:{color:blue},upsellTooltip:{maxWidth:247,marginTop:13,marginBottom:13},upsellTooltipHeader:{fontSize:20,fontWeight:"bold",lineHeight:1.2,marginBottom:8},upsellTooltipContent:{fontSize:16,fontWeight:"normal",lineHeight:1.38,marginBottom:16},branding:(_branding={marginRight:16},_branding[_mediaQueries2.default.smOrSmaller]={display:"none"},_branding)})
var TestPrepHeaderWrapper=(0,_reactApollo.graphql)(DATA_QUERY)(TestPrepHeader)
module.exports={TestPrepHeaderWrapper:TestPrepHeaderWrapper,HEADER_HEIGHT:HEADER_HEIGHT}

});
KAdefine("javascript/content-library-package/modules/user-info-adapters.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.toStatusMap=toStatusMap
exports.toBestScoreMap=toBestScoreMap
exports.toMasteryMap=toMasteryMap
function toStatusMap(e){return e.reduce(function(e,t){var r
return babelHelpers.extends({},e,(r={},r[t.content.progressKey]=t.completionStatus.toLowerCase(),r))},{})}function toBestScoreMap(e){return e.reduce(function(e,t){var r
var o=t.content.progressKey,s=t.bestScore
return s?babelHelpers.extends({},e,(r={},r[o]=s,r)):e},{})}function toMasteryMap(e){return e.reduce(function(e,t){var r
var o=t.progressKey,s=t.status
return babelHelpers.extends({},e,(r={},r[o]=s,r))},{})}
});
KAdefine("javascript/content-library-package/mappers/map-test-score-to-topic.js", function(require, module, exports) {
module.exports={statistics_and_probability:[{min:100,max:178,slug:"statistics-and-probability-161-178",topic_title:"Statistics and Probability 161-178"},{min:179,max:191,slug:"statistics-and-probability-179-191",topic_title:"Statistics and Probability 179-191"},{min:192,max:202,slug:"statistics-and-probability-192-202",topic_title:"Statistics and Probability 192-202"},{min:203,max:212,slug:"statistics-and-probability-203-212",topic_title:"Statistics and Probability 203-212"},{min:213,max:219,slug:"statistics-and-probability-213-219",topic_title:"Statistics and Probability 213-219"},{min:220,max:223,slug:"statistics-and-probability-220-223",topic_title:"Statistics and Probability 220-223"},{min:224,max:227,slug:"statistics-and-probability-224-227",topic_title:"Statistics and Probability 224-227"},{min:228,max:230,slug:"statistics-and-probability-228-230",topic_title:"Statistics and Probability 228-230"},{min:231,max:300,slug:"statistics-and-probability-231",topic_title:"Statistics and Probability > 231"}],geometry:[{min:100,max:160,slug:"map-exam-geometry-160",topic_title:"Geometry < 160"},{min:161,max:178,slug:"map-exam-geometry-161-178",topic_title:"Geometry 161-178"},{min:179,max:191,slug:"map-exam-geometry-179-191",topic_title:"Geometry 179-191"},{min:192,max:202,slug:"map-exam-geometry-192-202",topic_title:"Geometry 192-202"},{min:203,max:212,slug:"map-exam-geometry-203-212",topic_title:"Geometry 203-212"},{min:213,max:219,slug:"map-exam-geometry-213-219",topic_title:"Geometry 213-219"},{min:220,max:223,slug:"map-exam-geometry-220-223",topic_title:"Geometry 220-223"},{min:224,max:227,slug:"map-exam-geometry-224-227",topic_title:"Geometry 224-227"},{min:228,max:230,slug:"map-exam-geometry-228-230",topic_title:"Geometry 228-230"},{min:231,max:300,slug:"map-exam-geometry-231",topic_title:"Geometry > 231"}],measurement_and_data:[{min:100,max:160,slug:"measurement-and-data-160",topic_title:"Measurement and Data < 160"},{min:161,max:178,slug:"measurement-and-data-161-178",topic_title:"Measurement and Data 161-178"},{min:179,max:191,slug:"measurement-and-data-179-191",topic_title:"Measurement and Data 179-191"},{min:192,max:202,slug:"measurement-and-data-192-202",topic_title:"Measurement and Data 192-202"},{min:203,max:212,slug:"measurement-and-data-203-212",topic_title:"Measurement and Data 203-212"},{min:213,max:219,slug:"measurement-and-data-213-219",topic_title:"Measurement and Data 213-219"},{min:220,max:223,slug:"measurement-and-data-220-223",topic_title:"Measurement and Data 220-223"},{min:224,max:300,slug:"measurement-and-data-224-227",topic_title:"Measurement and Data 224-227"}],real_and_complex_numbers:[{min:100,max:160,slug:"the-real-and-complex-number-systems-160",topic_title:"Real and Complex Numbers < 160"},{min:161,max:178,slug:"the-real-and-complex-number-systems-161-178",topic_title:"Real and Complex Numbers 161-178"},{min:179,max:191,slug:"the-real-and-complex-number-systems-179-191-2",topic_title:"Real and Complex Numbers 179-191"},{min:192,max:202,slug:"the-real-and-complex-number-systems-192-202",topic_title:"Real and Complex Numbers 192-202"},{min:203,max:212,slug:"the-real-and-complex-number-systems-203-212",topic_title:"Real and Complex Numbers 203-212"},{min:213,max:219,slug:"the-real-and-complex-number-systems-213-219",topic_title:"Real and Complex Numbers 213-219"},{min:220,max:223,slug:"the-real-and-complex-number-systems-220-223",topic_title:"Real and Complex Numbers 220-223"},{min:224,max:227,slug:"the-real-and-complex-number-systems-224-227",topic_title:"Real and Complex Numbers 224-227"},{min:228,max:230,slug:"the-real-and-complex-number-systems-228-230",topic_title:"Real and Complex Numbers 228-230"},{min:231,max:300,slug:"the-real-and-complex-number-systems-231",topic_title:"Real and Complex Numbers > 231"}],operations_and_algebra:[{min:100,max:160,slug:"operations-and-algebraic-thinking-160",topic_title:"Operations and Algebra < 160"},{min:161,max:178,slug:"operations-and-algebraic-thinking-161-178",topic_title:"Operations and Algebra 161-178"},{min:179,max:191,slug:"operations-and-algebraic-thinking-179-191",topic_title:"Operations and Algebra 179-191"},{min:192,max:202,slug:"operations-and-algebraic-thinking-192-202",topic_title:"Operations and Algebra 192-202"},{min:203,max:212,slug:"operations-and-algebraic-thinking-203-212",topic_title:"Operations and Algebra 203-212"},{min:213,max:219,slug:"operations-and-algebraic-thinking-213-219",topic_title:"Operations and Algebra 213-219"},{min:220,max:223,slug:"operations-and-algebraic-thinking-220-223",topic_title:"Operations and Algebra 220-223"},{min:224,max:227,slug:"operations-and-algebraic-thinking-224-227",topic_title:"Operations and Algebra 224-227"},{min:228,max:230,slug:"operations-and-algebraic-thinking-228-230",topic_title:"Operations and Algebra 228-230"},{min:231,max:300,slug:"operations-and-algebraic-thinking-231",topic_title:"Operations and Algebra > 231"}],numbers_and_operations:[{min:100,max:160,slug:"number-and-operations-160",topic_title:"Numbers and Operations < 160"},{min:161,max:178,slug:"number-and-operations-161-178",topic_title:"Numbers and Operations 161-178"},{min:179,max:191,slug:"number-and-operations-179-191",topic_title:"Numbers and Operations 179-191"},{min:192,max:202,slug:"number-and-operations-192-202",topic_title:"Numbers and Operations 192-202"},{min:203,max:212,slug:"number-and-operations-203-212",topic_title:"Numbers and Operations 203-212"},{min:213,max:219,slug:"number-and-operations-213-219",topic_title:"Numbers and Operations 213-219"},{min:220,max:223,slug:"number-and-operations-220-223",topic_title:"Numbers and Operations 220-223"},{min:224,max:300,slug:"number-and-operations-224-227",topic_title:"Numbers and Operations 224-227"}]}

});
KAdefine("javascript/content-library-package/mappers/util.js", function(require, module, exports) {
var _examNames,_examSubjects
var aphrodite=require("aphrodite")
var i18n=require("../../shared-package/i18n.js")
var sharedStyles=require("../styles/shared.js")
var StyleSheet=aphrodite.StyleSheet
var exams={TWO_TO_FIVE:"TWO_TO_FIVE",SIX_PLUS:"SIX_PLUS"}
var examNames=(_examNames={},_examNames[exams.TWO_TO_FIVE]=i18n._("Mathematics 2–5"),_examNames[exams.SIX_PLUS]=i18n._("Mathematics 6+"),_examNames)
var examSubjects=(_examSubjects={},_examSubjects[exams.TWO_TO_FIVE]=[{slug:"operations_and_algebra",name:i18n._("Operations and Algebraic Thinking")},{slug:"numbers_and_operations",name:i18n._("Numbers and Operations")},{slug:"measurement_and_data",name:i18n._("Measurement and Data")},{slug:"geometry",name:i18n._("Geometry")}],_examSubjects[exams.SIX_PLUS]=[{slug:"operations_and_algebra",name:i18n._("Operations and Algebraic Thinking")},{slug:"real_and_complex_numbers",name:i18n._("The Real and Complex Number Systems")},{slug:"geometry",name:i18n._("Geometry")},{slug:"statistics_and_probability",name:i18n._("Statistics and Probability")}],_examSubjects)
var mappersStyles=StyleSheet.create({textButton:babelHelpers.extends({},sharedStyles.typography.bodySmall,{background:"none",border:0,cursor:"pointer",margin:"1em 0",padding:0})})
module.exports={ADD_TOPICS_URL:"/api/internal/mappers/add_topics",exams:exams,examNames:examNames,examSubjects:examSubjects,mappersStyles:mappersStyles,MAX_POSSIBLE_SCORE:300,MIN_POSSIBLE_SCORE:100}

});
KAdefine("javascript/content-library-package/mappers/types.js", function(require, module, exports) {

});
KAdefine("javascript/content-library-package/styles/functions.js", function(require, module, exports) {
var fade=function a(r,e){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i
r=r.replace(f,function(a,r,e,f){return r+r+e+e+f+f})
var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r)
if(n==null){return n}var d=parseInt(n[1],16)
var t=parseInt(n[2],16)
var u=parseInt(n[3],16)
return"rgba("+d+", "+t+", "+u+", "+e+")"}
module.exports={fade:fade}

});
KAdefine("javascript/content-library-package/styles/shared.js", function(require, module, exports) {
var _pageHeaderPadding,_babelHelpers$extends,_babelHelpers$extends2,_babelHelpers$extends3
var globalStyles=require("../../shared-styles-package/global-styles.js")
var mediaQueries=require("../../shared-styles-package/media-queries.js")
var borderRadius=globalStyles.borderRadius,colors=globalStyles.colors,constants=globalStyles.constants,domainColors=globalStyles.domainColors,makeDomainStylesForTemplate=globalStyles.makeDomainStylesForTemplate,typography=globalStyles.typography,moduleLayout=globalStyles.moduleLayout
var links=makeDomainStylesForTemplate(function(e){return{color:domainColors(e).domain3,":visited":{color:domainColors(e).domain4}}})
var mixins={padding:function e(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0
var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0
var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0
var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0
return{paddingTop:a,paddingRight:t,paddingBottom:n,paddingLeft:o}},position:function e(a,t,n,o,i){return{position:a,top:t,right:n,bottom:o,left:i}}}
var overflowEllipsis={textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}
var grayCallout={background:colors.gray97,border:"1px solid "+colors.gray90,borderRadius:borderRadius,transition:"borderColor "+globalStyles.standardTransition,":focus":{border:"1px solid "+colors.homepageBlue,textDecoration:"none"},":hover":{border:"1px solid "+colors.homepageBlue,textDecoration:"none"}}
var thumbnailSizes={xxxlarge:{height:405,width:720},xxlarge:{height:252,width:448},xlarge:{height:207,width:368},large:{height:117,width:208},medium:{height:76,width:136},small:{height:54,width:96}}
var displayFlex={display:"flex"}
var justifyContent=function e(a){return{justifyContent:a}}
var alignItems=function e(a){return{alignItems:a}}
var flexDirection=function e(a){return{flexDirection:a}}
var flexWrap=function e(a){return{flexWrap:a}}
var flex=function e(a){return{msFlex:a,WebkitFlex:a,flex:a}}
var srOnly={position:"absolute",left:"-10000px",top:"auto",width:1,height:1,overflow:"hidden"}
var fixBorderRadiusWithOverflow={WebkitMaskImage:"url(data:image/png;base64,"+"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2Fy"+"ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJ"+"AAAAAElFTkSuQmCC)"}
var alignCenter=babelHelpers.extends({},moduleLayout.defaultAlignment,{boxSizing:"border-box"})
var pageHeaderPadding=(_pageHeaderPadding={paddingLeft:constants.moduleHorizontalPadding,paddingRight:constants.moduleHorizontalPadding},_pageHeaderPadding[mediaQueries.smOrSmaller]={paddingLeft:constants.moduleHorizontalPaddingSmall,paddingRight:constants.moduleHorizontalPaddingSmall},_pageHeaderPadding)
var pageHeader=babelHelpers.extends({},alignCenter,pageHeaderPadding,(_babelHelpers$extends={paddingTop:22,paddingBottom:22,alignItems:"center",color:colors.white,display:"flex",justifyContent:"space-between",minHeight:94,textAlign:"left"},_babelHelpers$extends[mediaQueries.mdOrLarger]={paddingTop:32,paddingBottom:32},_babelHelpers$extends.MozOsxFontSmoothing="grayscale",_babelHelpers$extends.WebkitFontSmoothing="antialiased",_babelHelpers$extends))
var pageHeaderTitle=babelHelpers.extends({color:colors.white,marginBottom:0},typography.conceptHeadingMobile,(_babelHelpers$extends2={},_babelHelpers$extends2[mediaQueries.mdOrLarger]=babelHelpers.extends({},typography.conceptHeadingDesktop),_babelHelpers$extends2))
var contentCenterBox=babelHelpers.extends({marginLeft:"auto",marginRight:"auto",maxWidth:constants.contentWidth},pageHeaderPadding)
var contentPadding=babelHelpers.extends({},contentCenterBox,(_babelHelpers$extends3={maxWidth:constants.contentWidth+constants.moduleHorizontalPadding*2},_babelHelpers$extends3[mediaQueries.smOrSmaller]={maxWidth:constants.contentWidth+constants.moduleHorizontalPaddingSmall*2},_babelHelpers$extends3))
var navbar={bar:{width:"100%",maxWidth:constants.pageWidth,height:48,position:"relative",left:-16,display:"flex",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"center",marginLeft:"auto",marginRight:"auto"},tab:babelHelpers.extends({},typography.bodySmallBold,{display:"inline-flex",height:48,boxSizing:"border-box",alignItems:"center",justifyContent:"center",textDecoration:"none",cursor:"pointer",boxShadow:"inset 0 -5px",marginLeft:16,marginRight:16,marginTop:0,marginBottom:0,":hover":{textDecoration:"none"}}),inactiveTab:{":hover":{boxShadow:"inset 0 -5px "+colors.gray90,transition:"box-shadow 75ms ease-in-out"},boxShadow:"inset 0 0 transparent",transition:"box-shadow 150ms ease-in-out"},activeTab:{outline:"1px solid rgba(0,0,0,0)",":focus":{outline:"auto"}}}
var blueDomains=["math","computing","college-careers-more","test-prep"]
var studyGuideTheme=function e(a){return blueDomains.includes(a)?"blue":"red"}
module.exports=babelHelpers.extends({},globalStyles,{alignItems:alignItems,alignCenter:alignCenter,borderRadius:borderRadius,contentCenterBox:contentCenterBox,contentPadding:contentPadding,displayFlex:displayFlex,flex:flex,flexDirection:flexDirection,flexWrap:flexWrap,grayCallout:grayCallout,fixBorderRadiusWithOverflow:fixBorderRadiusWithOverflow,justifyContent:justifyContent,links:links,mixins:mixins,navbar:navbar,overflowEllipsis:overflowEllipsis,pageHeader:pageHeader,pageHeaderPadding:pageHeaderPadding,pageHeaderTitle:pageHeaderTitle,studyGuideTheme:studyGuideTheme,srOnly:srOnly,thumbnailSizes:thumbnailSizes})

});
KAdefine("javascript/content-library-package/redux/modal-navigator-reducer.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getCurrentItem=exports.getPrevItem=exports.getNextItem=undefined
var _userInfoStore=require("../../user-info-store-package/user-info-store.js")
var _userInfoStore2=babelHelpers.interopRequireDefault(_userInfoStore)
var _userInfoActions=require("../../user-info-store-package/user-info-actions.js")
var _quizUtils=require("../utils/quiz-utils.js")
var _modalUtils=require("../utils/modal-utils.js")
var Analytics=require("../../analytics-package/analytics.js")
var initialState={modalDataStack:[],focusId:""}
var uniqueId=function e(t){if(t.kind==="InterspersedQuiz"){return(0,_quizUtils.getSourceId)(t)}else{return t.nodeUrl}}
var getNextItem=exports.getNextItem=function e(t){var r=t.modalDataStack[t.modalDataStack.length-1]
if(r){var a=r.currentItem
var n=r.items.findIndex(function(e){return uniqueId(e)===uniqueId(a)})
if(n!==-1){return r.items[n+1]}}return null}
var getPrevItem=exports.getPrevItem=function e(t){var r=t.modalDataStack[t.modalDataStack.length-1]
if(r){var a=r.currentItem
var n=r.items.findIndex(function(e){return uniqueId(e)===uniqueId(a)})
if(n!==-1){return r.items[n-1]}}return null}
var getNextOrPrevItem=function e(t,r){return r.type==="NextItem"?getNextItem(t):getPrevItem(t)}
var getCurrentItem=exports.getCurrentItem=function e(t){var r=t.modalDataStack[t.modalDataStack.length-1]
return r?r.currentItem:null}
function reducer(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState
var t=arguments[1]
var r=e.modalDataStack[e.modalDataStack.length-1]
switch(t.type){case"OpenItem":var a=t.modalData.allowNavigation!==undefined?t.modalData.allowNavigation:true
var n=babelHelpers.extends({},e,{modalDataStack:[babelHelpers.extends({},t.modalData,{allowNavigation:a,fromAnotherModal:e.modalDataStack.length>0})],focusId:t.focusId})
return n
case"CloseItem":return babelHelpers.extends({},e,{modalDataStack:e.modalDataStack.slice(0,-1)})
case"PrevItem":case"NextItem":{var i=getNextOrPrevItem(e,t)
if(i){var u=_userInfoStore2.default.getState().currentTopic
if(u&&i.kind!=="InterspersedQuiz"){_userInfoStore2.default.dispatch((0,_userInfoActions.clearForItem)(i,u))}var l=babelHelpers.extends({},e,{modalDataStack:[].concat(e.modalDataStack.slice(0,-1),[babelHelpers.extends({},r,{currentItem:i,fromAnotherModal:true})])})
if(r.referrer==="student-assignments-table"){return l}else if(r.referrer==="sat-related-content-widget"){return l}var o=void 0
if(i.kind==="InterspersedQuiz"){o=(0,_modalUtils.getModalUrlForTestOrQuiz)({type:"quiz",slug:i.slug})}else{o=(0,_modalUtils.getModalUrlForContent)(i)}Analytics.handleStartRouterNavigation()
window.history.replaceState(l,i.title,o)
Analytics.handleRouterNavigation()
return l}else{return e}}default:return e}}exports.default=reducer

});
KAdefine("javascript/content-library-package/redux/modal-navigator-store.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getModalItemExtra=undefined
var _redux=require("redux")
var _composeEnhancers=require("../../utils/compose-enhancers.js")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _modalNavigatorReducer=require("./modal-navigator-reducer.js")
var _modalNavigatorReducer2=babelHelpers.interopRequireDefault(_modalNavigatorReducer)
var _quizUtils=require("../utils/quiz-utils.js")
var compose=(0,_composeEnhancers.createCompose)({reduxDevtoolsOptions:{name:"Modal Navigator"}})
var getModalItemExtra=exports.getModalItemExtra=function e(r,t){return{content_id:r.kind==="InterspersedQuiz"?(0,_quizUtils.getSourceId)(r):r.contentId,is_recommended:r.kind==="InterspersedQuiz"?null:r.recommended,kind:r.kind,slug:r.slug,referrer:t}}
var markItemView=function e(r){var t=r.currentItem,a=r.referrer
_bigbingo2.default.markConversion("content_modal_view",getModalItemExtra(t,a))}
var viewMarker=function e(r){return function(e){return function(t){var a=e(t)
if(t.type==="OpenItem"||t.type==="NextItem"||t.type==="PrevItem"){var o=r.getState()
var i=o.modalDataStack[o.modalDataStack.length-1]
markItemView(i)}return a}}}
var store=(0,_redux.createStore)(_modalNavigatorReducer2.default,compose((0,_redux.applyMiddleware)(viewMarker)))
exports.default=store

});
KAdefine("javascript/content-library-package/circular-progress-icon.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _mutationWatcher=require("../components/mutation-watcher-package/mutation-watcher.jsx")
var _mutationWatcher2=babelHelpers.interopRequireDefault(_mutationWatcher)
var _exerciseProgressConstants=require("../mobile-shared-package/exercise-progress-constants.js")
var _exerciseProgressConstants2=babelHelpers.interopRequireDefault(_exerciseProgressConstants)
var _exerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var _exerciseProgressUtils2=babelHelpers.interopRequireDefault(_exerciseProgressUtils)
var _segmentedProgressRing=require("./segmented-progress-ring.jsx")
var _segmentedProgressRing2=babelHelpers.interopRequireDefault(_segmentedProgressRing)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var i18n=require("../shared-package/i18n.js")
var maxRingLoadDuration=2500
var ringUpdateDuration=400
var pulseDuration=1e3
var commonProps={x:0,fontFamily:"'Proxima Nova', sans-serif",fill:_globalStyles.colors.mission.math.mastery3,textAnchor:"middle"}
var skillLevels=["mastery3","mastery2","mastery1","practiced"]
var sum=function e(t){return t.reduce(function(e,t){return e+t})}
var swingEasing=function e(t){return.5-Math.cos(t*Math.PI)/2}
var sharedPropTypes={progressCounts:_propTypes2.default.shape(_exerciseProgressConstants2.default.LEVEL_NAMES.reduce(function(e,t){var r
return babelHelpers.extends({},e,(r={},r[t]=_propTypes2.default.number.isRequired,r))},{}))}
var CircularProgressIcon=function(e){babelHelpers.inherits(t,e)
function t(){var r,s,a
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,n=Array(i),o=0;o<i;o++){n[o]=arguments[o]}return a=(r=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),s),s.state={t:0,startTime:0,duration:maxRingLoadDuration},s.pulseArcs=function(){if(s.isUpdatingRing){setTimeout(s.pulseArcs,500)
return}s.setState({isPulsing:true,startTime:Date.now(),t:0,duration:pulseDuration},s.animateProgressRing)},r),babelHelpers.possibleConstructorReturn(s,a)}t.prototype.componentDidMount=function e(){this.isUpdatingRing=true
var t=this.getCounts(this.props.progress)
var r=sum(Object.values(t))
var s=(r-t["unstarted"])/r*maxRingLoadDuration
this.setState({startTime:Date.now(),duration:s},this.animateProgressRing)}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(!this.finishedInitialAnimation){return}var r=this.drawnCountsPerLevel
var s=this.getCounts(t.progress)
var a=skillLevels.filter(function(e){return r[e]<s[e]})
if(a.length){this.isUpdatingRing=true
this.setState({startTime:Date.now(),t:0,duration:ringUpdateDuration},this.animateProgressRing)
this.setState({increasedLevels:a},this.pulseArcs)}}
t.prototype.componentDidUpdate=function e(t,r){if(this.state.isPulsing&&this.state.t>=1){this.setState({isPulsing:false})}}
t.prototype.componentWillUnmount=function e(){cancelAnimationFrame(this.frameId)}
t.prototype.getCounts=function e(t){if(Array.isArray(t)){return _exerciseProgressUtils2.default.getCountPerLevel(t)}else{return t}}
t.prototype.getLevelPercents=function e(){var t=this.getCounts(this.props.progress)
var r=sum(Object.values(t))
if(this.state.t>=1){this.drawnCountsPerLevel=t
this.isUpdatingRing=false
this.finishedInitialAnimation=true
var s={}
skillLevels.forEach(function(e){s[e]=t[e]/r})
return s}if(this.finishedInitialAnimation){return this.updateRingPercents(t,r)}else{return this.getInitialRingPercents(t,r)}}
t.prototype.getInitialRingPercents=function e(t,r){var s=r-t["unstarted"]
var a={}
var i=0
var n=this.state.t
for(var o=skillLevels.length-1;o>=0;o--){var l=skillLevels[o]
if(i+t[l]>n*s){a[l]=(n*s-i)/r
break}a[l]=t[l]/r
i+=t[l]}return a}
t.prototype.updateRingPercents=function e(t,r){var s=this.drawnCountsPerLevel
var a=Math.max.apply(Math,skillLevels.map(function(e){return Math.abs(t[e]-s[e])}))
var i=a*this.state.t
var n={}
skillLevels.forEach(function(e){if(s[e]<t[e]){n[e]=Math.min(s[e]+i,t[e])}else if(s[e]>t[e]){n[e]=Math.max(s[e]-i,t[e])}else{n[e]=t[e]}n[e]=n[e]/r})
return n}
t.prototype.animateProgressRing=function e(){var t=this
if(this.state.t>=1){return}this.frameId=window.requestAnimationFrame(function(){var e=(Date.now()-t.state.startTime)/t.state.duration
e=Math.min(Math.max(0,e),1)
t.setState({t:swingEasing(e)},t.animateProgressRing)})}
t.prototype.render=function e(){var t=this.props,r=t.fontSize,s=t.radius,a=t.strokeWidth,i=t.style,n=t.useFullRadius
var o=i.height,l=i.width
var u=[]
if(this.state.isPulsing){u=this.state.increasedLevels}var p=null
var c=r*.4
var g=i18n._("%(progressPercentage)s%",{progressPercentage:_exerciseProgressUtils2.default.getProgressPercentage(this.getCounts(this.props.progress))})
p=[React.createElement(_mutationWatcher2.default,{key:"percentage",markConversion:true,revertMutations:true,tag:"missionCircularProgressPercentage",value:g,wrapperType:"text",wrapperProps:babelHelpers.extends({},commonProps,{fontSize:r,y:1/8*r})}),React.createElement("text",babelHelpers.extends({},commonProps,{key:"label",y:5/8*r,fontSize:c}),i18n._("progress"))]
var d="mission-progress-icon"
return React.createElement("div",{className:d},React.createElement("svg",{className:"icon-surface",viewBox:"0 0 "+2*s+" "+2*s,ref:function e(t){if(!t){return}var r=_reactDom2.default.findDOMNode(t)
if(typeof o!=="undefined"){r.style.height=o}if(typeof l!=="undefined"){r.style.width=l}},style:i},React.createElement("g",{transform:"translate("+s+","+s+")"},React.createElement("circle",{fill:"#fff",stroke:"#ddd",x:0,y:0,r:n?s-a/2:s-a,strokeWidth:a}),React.createElement(_segmentedProgressRing2.default,{radius:s,strokeWidth:a,percents:this.getLevelPercents(),levelsToPulse:u,t:this.state.t,useFullRadius:n}),p)))}
return t}(_react.Component)
CircularProgressIcon.propTypes={fontSize:_propTypes2.default.number,progress:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.any.isRequired).isRequired,sharedPropTypes.progressCounts.isRequired]).isRequired,radius:_propTypes2.default.number,strokeWidth:_propTypes2.default.number,style:_propTypes2.default.objectOf(_propTypes2.default.any),useFullRadius:_propTypes2.default.bool}
CircularProgressIcon.sharedPropTypes=sharedPropTypes
CircularProgressIcon.defaultProps={fontSize:32,radius:70,strokeWidth:10,style:{},useFullRadius:false}
module.exports=CircularProgressIcon

});
KAdefine("javascript/content-library-package/segmented-progress-ring.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var TAU=Math.PI*2
var maxLengthIncrease=.04*TAU
var skillColors=_globalStyles.colors.mission.math
var skillLevels=["mastery3","mastery2","mastery1","practiced"]
function polarToCartesian(e,r,a,t){return{x:e+a*Math.cos(t),y:r+a*Math.sin(t)}}function describeArc(e,r,a,t,s){var l=polarToCartesian(0,r,a,t)
var n=polarToCartesian(0,r,a,s)
var p=1
var o=1e-5
if(Math.abs(s-t-TAU)<o){var i=(t+s)/2
var u=polarToCartesian(e,r,a,i)
return["M",l.x,l.y,"A",a,a,0,0,p,u.x,u.y,"A",a,a,0,0,p,n.x,n.y].join(" ")}else{var v=s-t<=Math.PI?"0":"1"
return["M",l.x,l.y,"A",a,a,0,v,p,n.x,n.y].join(" ")}}var SegmentedProgressRing=function(e){babelHelpers.inherits(r,e)
function r(a){babelHelpers.classCallCheck(this,r)
var t=babelHelpers.possibleConstructorReturn(this,e.call(this,a))
t.state={maxArcWidth:2*a.strokeWidth}
return t}r.prototype.getArcDataPerLevel=function e(){var r=this.props.percents
var a=this.props.levelsToPulse
var t=this.props.t
var s=this.props.strokeWidth
var l=this.state.maxArcWidth
var n=-TAU/4
var p=void 0
var o={}
skillLevels.forEach(function(e){var i={}
var u=r[e]?TAU*r[e]:0
p=Math.min(3*TAU/4,n+u)
if(a.includes(e)){var v=1-2*Math.abs(t-.5)
i.width=s+(l-s)*v
i.angleStart=n-v*maxLengthIncrease
i.angleEnd=p+v*maxLengthIncrease}else{i.width=s
i.angleStart=n
i.angleEnd=p}o[e]=i
n=p})
if(this.props.levelsToPulse){this.adjustOverlappingArcs(o)}return o}
r.prototype.adjustOverlappingArcs=function e(r){var a=this.props.levelsToPulse
if(a.length===1){var t=a[0]
var s=r[t].angleStart
var l=r[t].angleEnd
if(l>s+TAU){r[t].angleEnd=s+TAU}return}for(var n=0;n<a.length;n++){var p=a[n]
var o=r[p].angleEnd
var i=void 0
var u=void 0
if(n===a.length-1){i=a[0]
u=r[p].angleStart
if(u>=0){continue}u+=TAU}else{i=a[n+1]
u=r[i].angleStart}if(o>u){var v=(o-u)/2
r[p].angleEnd-=v
r[p].angleStart+=v}}return r}
r.prototype.getArcs=function e(){var r=this.getArcDataPerLevel()
var a=this.props.levelsToPulse
var t=this.props.radius
var s=this.props.strokeWidth
var l=this.props.useFullRadius
var n=[]
skillLevels.forEach(function(e){var p=r[e]
var o=l?t-s/2:t-s
var i=describeArc(0,0,o,p.angleStart,p.angleEnd)
var u=React.createElement("path",{fill:"none",stroke:skillColors[e],strokeWidth:p.width,d:i,key:e})
if(a.includes(e)){n.push(u)}else{n.unshift(u)}})
return n}
r.prototype.render=function e(){var r=null
if(this.props.percents){r=this.getArcs()}return React.createElement("g",null,r)}
return r}(_react.Component)
SegmentedProgressRing.propTypes={percents:_propTypes2.default.shape({practiced:_propTypes2.default.number,mastery1:_propTypes2.default.number,mastery2:_propTypes2.default.number,mastery3:_propTypes2.default.number}),levelsToPulse:_propTypes2.default.arrayOf(_propTypes2.default.oneOf(skillLevels)),t:_propTypes2.default.number,radius:_propTypes2.default.number,strokeWidth:_propTypes2.default.number,useFullRadius:_propTypes2.default.bool}
SegmentedProgressRing.defaultProps={radius:70,strokeWidth:10}
module.exports=SegmentedProgressRing

});
KAdefine("javascript/content-library-package/utils/calculate-up-next.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.findRecommendationSource=exports.hasUnlockedStudyPlan=exports.isPerfectScore=exports.isPassingScore=exports.getStatusForScore=undefined
var _masteryUtils=require("../../mastery-utils-package/mastery-utils.js")
var i18n=require("../../shared-package/i18n.js")
var findReferrer=function e(t,r,n){for(var i=Object.keys(r),o=Array.isArray(i),u=0,i=o?i:i[Symbol.iterator]();;){var a
if(o){if(u>=i.length)break
a=i[u++]}else{u=i.next()
if(u.done)break
a=u.value}var s=a
var l=r[s]
if(l.positionKey===t){if(Object.keys(r).length===1){return i18n._("the quiz")}else{return l.title}}}if(n&&t===n.topic.id){return i18n._("the unit test")}return null}
var formatReferrer=function e(t,r,n){var i=t.map(function(e){return findReferrer(e,r,n)}).filter(function(e){return e!=null})
return i.length===0?null:i.length===1?i[0]:i18n._("%(first)s and %(second)s",{first:i[0],second:i[1]})}
var calculateUpNextTutorial=function e(t,r,n,i){var o=formatReferrer(i,r,n)
return{copy:{title:t.title,subtitle:i18n._("Review this recommended lesson to boost your score on %(referrer)s.",{referrer:o}),callToAction:i18n._("Next lesson"),referrer:o,icon:"rocketship"},item:{type:"tutorial",slug:t.slug},prominence:"primary"}}
var calculateFPMUpNextContentItem=function e(t,r){var n=(0,_masteryUtils.getNextMasteryLevel)(r)
var i=(0,_masteryUtils.getMasteryDisplay)(n)
var o=Math.ceil(_masteryUtils.exerciseMasteryThresholds[n]*t.expectedDoNCount)
var u=_masteryUtils.levelPointsMap[n]
return{copy:{title:i18n._("Up next for you"),subtitle:i18n.ngettext('Get %(goal)s out of %(num)s question correct on "%(title)s" to collect %(points)s Mastery points and level up to %(nextLevelDisplay)s.','Get %(goal)s out of %(num)s questions correct on "%(title)s" to collect %(points)s Mastery points and level up to %(nextLevelDisplay)s.',t.expectedDoNCount,{goal:o,num:t.expectedDoNCount,title:t.title,points:u,nextLevelDisplay:i}),callToAction:i18n._("Start practice"),icon:"up-next-no-progress",referrer:null},item:{type:"content-item",contentItem:t},prominence:"primary"}}
var calculateFPMUpNextQuiz=function e(t){return{copy:{title:i18n._("Up next for you"),subtitle:i18n._("Take %(quizTitle)s to collect Mastery points and level up on all the skills covered by the quiz.",{quizTitle:t.title}),callToAction:i18n._("Start %(quizTitle)s",{quizTitle:t.title}),referrer:null,icon:"up-next-no-progress"},item:{type:"quiz",quiz:t},prominence:"primary"}}
var calculateUpNextQuiz=function e(t){return{copy:{title:t.score?i18n._("Retake %(title)s",{title:t.title}):i18n._("Diagnostic: %(title)s",{title:t.title}),subtitle:i18n._("We will identify your areas for growth in %(count)s lessons, and recommend what you should focus on.",{count:t.tutorials.length}),callToAction:i18n._("Start quiz"),referrer:null,icon:"rocketship"},item:{type:"quiz",quiz:t},prominence:"primary"}}
var calculateUpNextTest=function e(t,r,n){return{copy:{title:r.score?i18n._("Retake test"):n?i18n._("Diagnostic: %(title)s",{title:r.title}):r.title,subtitle:n?i18n._("We will identify your areas for growth in %(topic)s, and recommend what you should focus on.",{topic:r.topic.title}):i18n._("Prove how well you understand the %(count)s lessons in %(topic)s! It usually takes about %(lowerBound)s to %(upperBound)s minutes.",{count:t.length,topic:r.topic.title,lowerBound:r.timeEstimate.lowerBound,upperBound:r.timeEstimate.upperBound}),callToAction:i18n._("Start test"),referrer:null,icon:"rocketship"},item:{type:"unit-test",test:r},prominence:"primary"}}
var calculateFPMUpNextUnitTest=function e(t){return{copy:{title:i18n._("Up next for you"),subtitle:t.score?i18n._("Re-take the unit test to collect Mastery points and level up on all skills that you haven’t mastered yet."):i18n._("Take the unit test to collect Mastery points and level up on all skills that you haven’t mastered yet."),callToAction:t.score?i18n._("Re-take test"):i18n._("Start test"),referrer:null,icon:"up-next-no-progress"},item:{type:"unit-test",test:t},prominence:"primary"}}
var calculateUpNextTopic=function e(t,r,n){if(n.score){var i=n.score,o=i.numCorrect,u=i.numAttempted
var a=Math.round(100*o/u)
if(t.next){var s=t.next
return{copy:{title:s.title,subtitle:i18n._("Great work! You scored %(percentage)s% on the unit test. Continue your learning journey with the next unit.",{percentage:a}),callToAction:i18n._("Go to unit"),referrer:null,icon:"hand-with-trophy"},item:{type:"topic",url:s.url},prominence:"secondary"}}else{return{copy:{title:i18n._("Great work on the unit test!"),subtitle:i18n._("You scored %(percentage)s% last time. Review more units in %(title)s.",{percentage:a,title:r.title}),callToAction:i18n._("See more units"),referrer:null,icon:"hand-with-trophy"},item:{type:"subject",url:r.url},prominence:"secondary"}}}}
var calculateFPMUpNextTopic=function e(t,r){var n=t.next
if(!n){return null}return{copy:{title:i18n._("Up next for you"),subtitle:i18n._('Great work! You’ve mastered this unit. Continue learning "%(subjectTitle)s" with the next unit, "%(unitTitle)s".',{subjectTitle:r.title,unitTitle:n.title}),callToAction:i18n._("Go to unit"),referrer:null,icon:"unit-test-complete"},item:{type:"topic",url:n.url},prominence:"secondary"}}
var getStatusForScore=exports.getStatusForScore=function e(t){if(!t){return"not-passed"}var r=t?t.numCorrect/t.numAttempted*100:0
if(r===100){return"aced"}else if(r>=70){return"passed"}else{return"not-passed"}}
var isPassingScore=exports.isPassingScore=function e(t){if(!t){return false}return Math.round(100*t.numCorrect/t.numAttempted)>=70}
var isPerfectScore=exports.isPerfectScore=function e(t){return t.numCorrect===t.numAttempted}
var getActiveTutorialsAndQuiz=function e(t,r){var n=[]
for(var i=t,o=Array.isArray(i),u=0,i=o?i:i[Symbol.iterator]();;){var a
if(o){if(u>=i.length)break
a=i[u++]}else{u=i.next()
if(u.done)break
a=u.value}var s=a
n.push(s)
if(r[s.slug]){if(r[s.slug].score&&isPassingScore(r[s.slug].score)){n=[]}else{return{quiz:r[s.slug],activeTutorials:n}}}}return{quiz:null,activeTutorials:n}}
var hasStartedAnyQuizOrTest=function e(t,r){return r&&!!r.score||Object.keys(t).some(function(e){return t[e]&&!!t[e].score})}
var hasUnlockedStudyPlan=function e(t,r,n){if(hasStartedAnyQuizOrTest(t,r)){return true}return n.some(function(e){var t=e.contentItems
return t.some(function(e){return e.recommended})})}
exports.hasUnlockedStudyPlan=hasUnlockedStudyPlan
var findFirstExerciseWithStatus=function e(t,r,n){if(t.length===0){return null}var i=t[0],o=t.slice(1)
var u=i.contentItems.find(function(e){return e.kind==="Exercise"&&r.includes(n[e.progressKey])})
if(u){return u}return e(o,r,n)}
var buildQuizTestArray=function e(t,r,n){return t.reduce(function(e,t,i){var o=Object.values(r).find(function(e){return e.tutorials.find(function(e){return e.id===t.id})})
if(!o){o=n}if(!o){return e}var u=e.findIndex(function(e){return e.quiz.slug===o.slug})
if(u===-1){return[].concat(e,[{quiz:o,tutorials:[t]}])}e[u].tutorials.push(t)
return e},[])}
var getMasteryUpNext=function e(t,r,n,i,o,u,a,s){if(s>=_masteryUtils.unitMasteryPercentage*100){return calculateFPMUpNextTopic(t,i)}var l=buildQuizTestArray(o,r,u)
var c=l.shift()
while(c){var f=findFirstExerciseWithStatus(c.tutorials,["unfamiliar","attempted"],a)
if(f){var p=a[f.progressKey]
return calculateFPMUpNextContentItem(f,p)}if(c.quiz.score&&!isPassingScore(c.quiz.score)){return c.quiz.type==="quiz"?calculateFPMUpNextQuiz(c.quiz):calculateFPMUpNextUnitTest(c.quiz)}c=l.shift()}if(u){return calculateFPMUpNextUnitTest(u)}return null}
var calculateUpNext=function e(t,r,n,i,o,u,a,s,l){if(l){return getMasteryUpNext(t,r,n,i,o,u,a,s)}if(u&&u.score&&isPassingScore(u.score)){return calculateUpNextTopic(t,i,u)}var c=getActiveTutorialsAndQuiz(o,r),f=c.quiz,p=c.activeTutorials
var d={}
n.forEach(function(e){var t=e.contentId,r=e.sourceId,n=e.kind
var i=n+":"+t
if(!d.hasOwnProperty(i)){d[i]=[]}d[i].push(r)})
var y=function e(){if(m){if(h>=v.length)return"break"
x=v[h++]}else{h=v.next()
if(h.done)return"break"
x=h.value}var t=x
var n=[]
for(var i=t.contentItems,o=Array.isArray(i),a=0,i=o?i:i[Symbol.iterator]();;){var s
if(o){if(a>=i.length)break
s=i[a++]}else{a=i.next()
if(a.done)break
s=a.value}var l=s
var c=l.kind+":"+l.contentId
if(d[c]){d[c].forEach(function(e){if(!n.includes(e)){n.push(e)}})}}if(n.length>0){return{v:calculateUpNextTutorial(t,r,u,n)}}}
e:for(var v=p,m=Array.isArray(v),h=0,v=m?v:v[Symbol.iterator]();;){var x
var g=y()
switch(g){case"break":break e
default:if((typeof g==="undefined"?"undefined":babelHelpers.typeof(g))==="object")return g.v}}if(f){return calculateUpNextQuiz(f)}if(u){var k=Object.keys(r).length===0
return calculateUpNextTest(o,u,k)}}
exports.default=calculateUpNext
var unique=function e(t){var r={}
t.forEach(function(e){return r[e]=true})
return Object.keys(r)}
var findRecommendationSource=function e(t,r,n,i,o){var u=r.map(function(e){return e.kind+":"+e.contentId})
var a=n.filter(function(e){var t=e.kind,r=e.contentId
return u.includes(t+":"+r)}).map(function(e){var t=e.sourceId
return t})
if(a.length>0){return{referrer:formatReferrer(unique(a),i,o)}}else{return null}}
exports.findRecommendationSource=findRecommendationSource

});
KAdefine("javascript/content-library-package/utils/quiz-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var getSourceId=function e(t){return t.positionKey||t.topic.id}
var augmentWithUserInfoState=function e(t,r){var n=r.quizScores,o=r.recommendations,a=r.taskInProgressMap
var u={}
o.filter(function(e){var r=e.sourceId
return r===getSourceId(t)}).forEach(function(e){var t=e.kind,r=e.contentId
u[t+":"+r]=true})
return babelHelpers.extends({},t,{tutorials:t.tutorials.map(function(e){var t=e.id,r=e.contentItems,n=e.slug,o=e.title,a=e.url
return{id:t,contentItems:r.map(function(e){var t=e.contentId,r=e.kind,n=e.nodeUrl,o=e.mastery,a=e.title,s=e.translatedTitle
return{contentId:t,kind:r,nodeUrl:n,mastery:o,title:s||a,recommended:u[r+":"+t]}}),slug:n,title:o,url:a}}),score:n[t.slug]||t.score})}
var augmentWithUserAttemptData=function e(t,r){if(!r){return t}var n=r.canResume,o=r.completedDate,a=r.numAttempted,u=r.numCorrect
return babelHelpers.extends({},t,{score:r.isCompleted?{completedDate:o,numAttempted:a,numCorrect:u}:undefined,canResume:n})}
exports.getSourceId=getSourceId
exports.augmentWithUserInfoState=augmentWithUserInfoState
exports.augmentWithUserAttemptData=augmentWithUserAttemptData

});
KAdefine("javascript/content-library-package/utils/scroll-to-slug.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _scrollUtils=require("../../scroll-utils-package/scroll-utils.js")
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var MASTERY_HEADING_OFFSET=80
exports.default=function(l,e,s,t){var r=l.replace(/\./g,"\\.").replace(/\:/g,"\\:")
var o=document.querySelector('[data-slug="'+r+'"]')
var a=t?MASTERY_HEADING_OFFSET:0
if(!o){o=document.querySelector('[data-position-slug="'+r+'"]')}if(!o){return}if(e==="bottom"){var c=(0,_scrollUtils.getOffsetBottom)(o);(0,_scrollUtils.scrollToOffset)(c-window.innerHeight,_scrollUtils.SCROLL_ANIMATION_DURATION,s)}else{var i=(0,_scrollUtils.getOffsetTop)(o);(0,_scrollUtils.scrollToOffset)(i-_globalStyles.pageHeaderHeight-a,_scrollUtils.SCROLL_ANIMATION_DURATION,s)}o.focus()}

});
KAdefine("javascript/content-library-package/utils/modal-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var getPathname=function e(){var r=window.location.pathname
var t=/\/modal\/.+/gi
if(r.match(t)){r=r.replace(t,"")}if(r[r.length-1]==="/"){r=r.slice(0,r.length-1)}return r}
var createUrlString=function e(r,t){var a=getPathname()
if(r==="subject-challenge"){r="test"}return a+"/modal/"+r+"/"+t}
var getModalUrlForContent=exports.getModalUrlForContent=function e(r){var t=r.kind,a=r.slug,n=r.nodeUrl
var l=["Scratchpad","Challenge","Talkthrough","Project","Interactive"].includes(t)
if(l){return n}var o=t[0].toLowerCase()
return createUrlString(o,a)}
var getModalUrlForTestOrQuiz=exports.getModalUrlForTestOrQuiz=function e(r){var t=r.type,a=r.slug
return createUrlString(t,a)}

});
KAdefine("javascript/content-library-package/utils/get-navigation-conversions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.default=function(e){var r=e.contentKind,t=e.contentSlug,n=e.referrerModule,o=e.referrerElement,i=e.isUpNext
var c={content_kind:r,content_slug:t,referrer_module:n,referrer_element:o}
return[{id:"content_library_navigation_clicked",extra:c}].concat(i?[{id:"content_library_up_next_navigation_clicked",extra:c}]:[])}

});
KAdefine("javascript/content-library-package/components/lesson-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _card,_moduleContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _variableColumnContentList=require("../modules/variable-column-content-list.jsx")
var _variableColumnContentList2=babelHelpers.interopRequireDefault(_variableColumnContentList)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var LessonCard=function(e){babelHelpers.inherits(r,e)
function r(){var a,t,s
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,i=Array(o),l=0;l<o;l++){i[l]=arguments[l]}return s=(a=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),t),t.hasExercises=function(){return t.props.tutorial.contentItems.some(function(e){var r=e.kind
return r==="Exercise"})},a),babelHelpers.possibleConstructorReturn(t,s)}r.prototype.render=function e(){var r=this.props,a=r.domain,t=r.handleUpNextHidden,s=r.isFirst,o=r.register,i=r.shouldHighlight,l=r.shouldUseMastery,n=r.tutorial,d=r.tutorial.slug,u=r.upNext,c=r.isLoadingUserProgressData
var p=_ka2.default.isPhone?"single-column":"two-column"
var m=this.props.tutorial.standards
return React.createElement("div",{ref:o(d),className:(0,_aphrodite.css)(styles.card),"data-slug":d,tabIndex:-1},React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContainer),"data-test-id":"lesson-card"},React.createElement(_variableColumnContentList2.default,babelHelpers.extends({context:"topic_progress_page",domain:a,layout:p,renderEmptyColumns:this.hasExercises(),shouldHighlightFirstIncompleteRecommendedPractice:i,shouldUseMastery:l,isFirst:s,upNext:u,onUpNextHidden:t,standards:m,isLoadingUserProgressData:c},n))))}
return r}(_react.Component)
exports.default=LessonCard
var styles=_aphrodite.StyleSheet.create({card:(_card={display:"flex",flexDirection:"row",justifyContent:"flex-start",margin:"6px 0px 6px 0px",border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRadius:_globalStyles.borderRadius,backgroundColor:_globalStyles.colors.white},_card[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginRight:0,marginTop:0,borderRadius:0,paddingRight:0},_card[_mediaQueries2.default.lgOrSmaller]={justifyContent:"flex-end"},_card),moduleContainer:(_moduleContainer={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",overflow:"hidden",flex:1,flexGrow:1,paddingTop:24,paddingLeft:24,paddingBottom:28,paddingRight:24},_moduleContainer[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginRight:0,paddingLeft:16,paddingRight:16,paddingTop:22,paddingBottom:22},_moduleContainer)})

});
KAdefine("javascript/content-library-package/components/quiz-test-card.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _card,_moduleContainer,_quizCalloutContainer
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _masteryInterspersedQuiz=require("./mastery-interspersed-quiz.jsx")
var _masteryInterspersedQuiz2=babelHelpers.interopRequireDefault(_masteryInterspersedQuiz)
var _interspersedQuiz=require("./interspersed-quiz.jsx")
var _interspersedQuiz2=babelHelpers.interopRequireDefault(_interspersedQuiz)
var _visibilityObserver=require("../../components/visibility-observer-package/visibility-observer.jsx")
var _visibilityObserver2=babelHelpers.interopRequireDefault(_visibilityObserver)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var ROOT_MARGIN="-130px 0px 0px 0px"
var QuizTestCard=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.shouldShowUpNextInline=function e(r){var t=this.props,i=t.shouldUseMastery,a=t.upNext,s=t.quizOrTest.type
return i&&!!a&&a.item&&a.item[s]&&a.item[s].slug===r}
r.prototype.getElementWrappedInVisibilityObserver=function e(r){var t=this.props,i=t.handleUpNextHidden,a=t.quizOrTest.slug
return React.createElement(_visibilityObserver2.default,{key:a,rootMargin:ROOT_MARGIN,onChange:function e(r){return i(r,a)}},this.getElement(r))}
r.prototype.getElement=function e(r){var t=this.props,i=t.isLoadingUserAttemptData,a=t.masteryMap,s=t.positionSlug,l=t.quizOrTest,o=t.quizOrTest.slug,n=t.register,d=t.shouldUseMastery,u=t.unitMastery
var p=d?_masteryInterspersedQuiz2.default:_interspersedQuiz2.default
return React.createElement("div",{ref:n(o),tabIndex:-1,"data-slug":o,"data-position-slug":s,className:(0,_aphrodite.css)(styles.card,r&&styles.upNextCard)},React.createElement("div",{className:(0,_aphrodite.css)(styles.moduleContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.quizCalloutContainer)},React.createElement(p,{quiz:l,masteryMap:a,masteryPoints:u,shouldUseMastery:d,isUpNext:r,isLoadingUserAttemptData:i}))))}
r.prototype.render=function e(){var r=this.props,t=r.quizOrTest.slug,i=r.upNext
var a=this.shouldShowUpNextInline(t)
return a&&i?this.getElementWrappedInVisibilityObserver(a):this.getElement(a)}
return r}(_react.Component)
exports.default=QuizTestCard
var LEFT_MODULE_MARGIN=32
var XL_MARGIN=32-LEFT_MODULE_MARGIN
var styles=_aphrodite.StyleSheet.create({card:(_card={display:"flex",flexDirection:"row",justifyContent:"flex-start",margin:"6px 0px 6px 0px",border:"solid 1px "+_wonderBlocksColorV2.default.offBlack16,borderRadius:_globalStyles.borderRadius,backgroundColor:_globalStyles.colors.white},_card[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginRight:0,marginTop:0,borderRadius:0,paddingRight:0},_card[_mediaQueries2.default.lgOrSmaller]={justifyContent:"flex-end"},_card),moduleContainer:(_moduleContainer={display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden",flex:1,flexGrow:1,paddingTop:24,paddingBottom:28,paddingLeft:XL_MARGIN+LEFT_MODULE_MARGIN},_moduleContainer[_mediaQueries2.default.lgOrSmaller]={paddingLeft:LEFT_MODULE_MARGIN},_moduleContainer[_mediaQueries2.default.smOrSmaller]={paddingLeft:16,paddingTop:22,paddingBottom:22},_moduleContainer),quizCalloutContainer:(_quizCalloutContainer={display:"flex",flexDirection:"row",flexGrow:1},_quizCalloutContainer[_mediaQueries2.default.xsOrSmaller]={paddingRight:16},_quizCalloutContainer),upNextCard:{borderTop:"4px solid "+_wonderBlocksColorV2.default.blue}})

});
KAdefine("javascript/mobile-shared-package/task-presenter.js", function(require, module, exports) {
"use strict"
var progressCompare=require("./exercise-progress-utils.js").progressCompare
var mapDict=function r(e,n){var t={}
for(var a in n){if(n.hasOwnProperty(a)){var o=n[a]
t[a]=e(o)}}return t}
var mapDictWithKey=function r(e,n){var t={}
for(var a in n){if(n.hasOwnProperty(a)){var o=n[a]
t[a]=e(a,o)}}return t}
var difference=function r(e,n,t){if(!n){return e}t=t||function(r,e){return r===e}
var a=[]
for(var o=0;o<e.length;o++){var i=e[o]
var c=false
for(var s=0;s<n.length;s++){var u=n[s]
if(t(i,u)){c=true
break}}if(!c){a.push(i)}}return a}
var extend=function r(e,n){for(var t in n){if(n.hasOwnProperty(t)){e[t]=n[t]}}return e}
var contentEq=function r(e,n){return e.contentId===n.contentId}
var makeId=function r(e){return e.type+"/"+e.contentId}
var removeCompleted=function r(e,n,t){return mapDict(function(r){return r.filter(function(r){return!t[makeId(r)]})},n)}
var removeProgressInvalidated=function r(e,n,t){return mapDictWithKey(function(r,e){if(r==="system"){return e.filter(function(r){var e=t[r.contentId]
if(e){return progressCompare(e,"practiced")<0}return true})}return e},n)}
var removeHidden=function r(e,n,t){return mapDict(function(r){return r.filter(function(r){return!t.hasOwnProperty(makeId(r))})},n)}
var applyPrecedence=function r(e,n){var n=extend({},n)
if(n.booster.length){n.mastery=[]}n.personal=difference(n.personal,n.coach,contentEq)
n.system=difference(n.system,n.personal.concat(n.coach),contentEq)
return n}
var maintainOrdering=function r(e,n,t){var a=function r(e){return Array.isArray(e)?e.slice():[]}
var o=[n.booster,n.mastery,n.coach,n.personal,n.system].map(a)
if(t){var i={}
for(var c=0;c<t.length;c++){i[makeId(t[c])]=c}var s=function r(e,n){var t=-Infinity,a=-Infinity
if(i.hasOwnProperty(makeId(e))){t=i[makeId(e)]}if(i.hasOwnProperty(makeId(n))){a=i[makeId(n)]}return t-a}
o.forEach(function(r){return r.sort(s)})}return Array.prototype.concat.apply([],o)}
var presentTasks=function r(e,n,t,a,o,i){var c=n
c=removeCompleted(e,c,t)
c=removeProgressInvalidated(e,c,a)
c=removeHidden(e,c,o)
c=applyPrecedence(e,c)
return maintainOrdering(e,c,i)}
module.exports={presentTasks:presentTasks,makeDescriptorId:makeId,_removeCompleted:removeCompleted,_removeProgressInvalidated:removeProgressInvalidated,_removeHidden:removeHidden,_applyPrecedence:applyPrecedence,_maintainOrdering:maintainOrdering}

});
KAdefine("javascript/test-prep-package/app-common/components/partner-branding.jsx", function(require, module, exports) {
var _container,_image
var _mediaQueries=require("../../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _staticUrl=require("../../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var PartnerBranding=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.kaRelationshipToTestCopy,a=r.testMaker,i=r.testMakerLogoImg
var s=t?React.createElement("div",null,t):null
var l=i?React.createElement("img",{alt:a,className:css(styles.image),src:(0,_staticUrl2.default)(i)}):React.createElement("span",{className:css(styles.testMakerText)},a)
return React.createElement("div",{className:css(styles.container)},s,l)}
return r}(React.Component)
var styles=StyleSheet.create({container:(_container={minHeight:30,display:"flex",justifyContent:"center",alignItems:"center"},_container[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_container),image:(_image={height:30,marginLeft:8},_image[_mediaQueries2.default.smOrSmaller]={marginLeft:0,marginTop:8},_image),testMakerText:{marginLeft:4,fontWeight:"bold"}})
module.exports=PartnerBranding

});
KAdefine("third_party/javascript-khansrc/mu-lambda/dist/mu-lambda.js", function(require, module, exports) {
module.exports=function(r){var n={}
function t(e){if(n[e])return n[e].exports
var u=n[e]={exports:{},id:e,loaded:false}
r[e].call(u.exports,u,u.exports,t)
u.loaded=true
return u.exports}t.m=r
t.c=n
t.p=""
return t(0)}([function(r,n,t){r.exports=t(1)},function(r,n){"use strict"
var t=function(){function r(r,n){var t=[]
var e=true
var u=false
var i=undefined
try{for(var o=r[Symbol.iterator](),a;!(e=(a=o.next()).done);e=true){t.push(a.value)
if(n&&t.length===n)break}}catch(r){u=true
i=r}finally{try{if(!e&&o["return"])o["return"]()}finally{if(u)throw i}}return t}return function(n,t){if(Array.isArray(n)){return n}else if(Symbol.iterator in Object(n)){return r(n,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var e=function r(n){return function(){for(var t=arguments.length,e=Array(t),u=0;u<t;u++){e[u]=arguments[u]}return n.length>e.length?r(n.bind.apply(n,[null].concat(e))):n.apply(undefined,e)}}
var u=e(function(r,n,t){return t.reduce(r,n)})
var i=e(function(r,n,t){return t.reduceRight(r,n)})
var o=function r(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++){t[e]=arguments[e]}return function(r){return t.reduceRight(function(r,n){return n(r)},r)}}
var a=function r(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++){t[e]=arguments[e]}return function(r){return t.reduce(function(r,n){return n(r)},r)}}
var f=e(function(r,n){return n.map(r)})
var c=e(function(r,n){return n.filter(r)})
var l=e(function(r,n){return n.find(r)})
var v=e(function(r,n){return n.findIndex(r)})
var p=u(function(r,n){return r.concat(Array.isArray(n)?p(n):[n])},[])
var s=e(function(r,n){return o(p,f(r))(n)})
var d=e(function(r,n){return u(function(n,t){return n&&r(t)},true,n)})
var y=e(function(r,n){return!u(function(n,t){return n||r(t)},false,n)})
var h=e(function(r,n){return u(function(n,t){return n||r(t)},false,n)})
var g=e(function(r,n){return n.split(r)})
var m=e(function(r,n,t){return t.replace(r,n)})
var x=e(function(r,n){return m(r,"")(n)})
var A=e(function(r,n){return r===n})
var b=e(function(r,n){return r!==n})
var q=e(function(r,n){return n[r]})
var j=e(function(r,n,t){return o(A(n),q(r))(t)})
var w=function r(n){return n[n.length-1]}
var E=function r(n){return n[0]}
var I=function r(n){return n}
var R=function r(n){return n.length}
var O=function r(n){return u(function(r,n){var e=t(n,2),u=e[0],i=e[1]
return r[u]=i,r},{},n)}
var S=function r(n){return u(function(r,n){return r+n},0,n)}
var k=e(function(r,n){return n.join(r)})
var M=function r(n){return u(function(r,n){return r.indexOf(n)!==-1?r:(r.push(n),r)},[],n)}
r.exports={all:d,any:h,compose:o,curry:e,eq:A,filter:c,find:l,findIndex:v,first:E,flatMap:s,flatten:p,fromEntries:O,fromPairs:O,id:I,identity:I,join:k,last:w,length:R,map:f,neq:b,none:y,pipe:a,prop:q,propEq:j,reduce:u,reduceRight:i,remove:x,replace:m,split:g,sum:S,uniq:M}}])

});
KAdefine("javascript/node_modules/mu-lambda/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/mu-lambda/dist/mu-lambda.js")

});
; KAdefine.updatePathToPackageMap({"javascript/assignments-package/student-assignments/index.jsx": "assignments.js", "javascript/components/confetti-package/fullscreen-confetti.jsx": "confetti.js", "javascript/page-package/footer.jsx": "page.js", "javascript/projectfeedback-package/projectfeedback-form.jsx": "projectfeedback.js", "javascript/react-components-package/timeago.jsx": "react-components.js", "javascript/scratchpad-documentation-package/pjs-documentation.jsx": "scratchpad-documentation.js", "javascript/scratchpad-documentation-package/sql-documentation.jsx": "scratchpad-documentation.js", "javascript/scratchpad-documentation-package/webpage-documentation.jsx": "scratchpad-documentation.js", "javascript/scratchpads-package/dynamic-project-list.jsx": "scratchpads.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/content-library-package.js.map 