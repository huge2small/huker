KAdefine("javascript/tutorial-article-package/article-page.jsx", function(require, module, exports) {
var _sharingFooterMobile
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _pageloadMarker=require("../analytics-package/pageload-marker.jsx")
var _pageloadMarker2=babelHelpers.interopRequireDefault(_pageloadMarker)
var _interactionUtils=require("../components/modal-package/interaction-utils.js")
var _staticUrl=require("../shared-package/static-url.js")
var _spinner=require("../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _kaProvider=require("../components/ssr-package/ka-provider.jsx")
var _kaProvider2=babelHelpers.interopRequireDefault(_kaProvider)
var _statefulDiscussion=require("../discussion-package/components/stateful-discussion.jsx")
var _statefulDiscussion2=babelHelpers.interopRequireDefault(_statefulDiscussion)
var _teacherContentUpsellPopup=require("../content-library-upsells-package/teacher-content-upsell-popup.jsx")
var _teacherContentUpsellPopup2=babelHelpers.interopRequireDefault(_teacherContentUpsellPopup)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Analytics=require("../analytics-package/analytics.js")
var ContentPageHeader=require("../tutorial-shared-package/components/content-page-header.jsx")
var _require2=require("../shared-package/khan-fetch.js"),encodeParams=_require2.encodeParams,khanFetch=_require2.khanFetch
var mediaQueries=require("../shared-styles-package/media-queries.js")
var Perseus=require("../perseus-all-package/perseus.js")
var ScrollTracking=require("../shared-components-package/scroll-tracking.jsx")
var sharedStyles=require("../content-library-package/styles/shared.js")
var SharingFooter=require("../tutorial-shared-package/components/sharing-footer.jsx")
var Tags=require("../content-library-package/components/tags.jsx")
var i18n=require("../shared-package/i18n.js")
require("../perseus-merged-extra-widgets-package/extra-widgets.js")
Perseus.init({skipMathJax:true,loadExtraWidgets:true})
var finalRadioStyleLocales=["en"]
var createServerSideLink=function e(){return function(e){return React.createElement(_wonderBlocksLinkV2.default,babelHelpers.extends({},e,{skipClientNav:true}))}}
var ArticlePage=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,n=Array(i),o=0;o<i;o++){n[o]=arguments[o]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.setUpArticleContent=function(){a._lastReportedPercentage=0},a.logConversions=function(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}
var t=a.props,s=t.article,i=t.topic
r.conversion_id=e
r.topic_slug=i.slug
r.article_slug=a.props.article.slug
r.platform="web-client"
r.occurred_at_seconds=Math.floor(Date.now()/1e3)
r.ga_referrer=Analytics.getGAReferrer()
r.casing="camel"
var n=encodeParams(r)
window.setTimeout(function(){khanFetch("/api/internal/user/article/"+s.id+"/log?"+n,{method:"POST",headers:{"Content-Type":"application/json"}})},1e3)
if(window.ga){window.ga("send","event","Learning-Action","Article-View",i.slug)}},a.trackScrollPosition=function(e){if(a.articleBody){var r=document.documentElement.clientHeight
var t=a.articleBody.getBoundingClientRect()
var s=t.top
var i=t.bottom
var n=i-s
var o=s+e
var l=(0,_interactionUtils.computeArticleScrollParams)(e,r-o,n,a._lastReportedParams)
if(l!=null){a._lastReportedParams=l
a.logConversions("article_scroll",l)}}},a.maybeRenderSponsorLink=function(){var e=a.props,r=e.article,t=e.breadcrumbs,s=e.sponsorInformation
if(!s||!r.sponsored){return null}var i=i18n._("Learn more about")
if(t.length>2){var n=t[t.length-2]
if(n.href!==s.href){i+=" "+n.title.toLowerCase()+(" "+i18n._("with"))}}return React.createElement("div",{className:"framework-perseus perseus-article bibliotron-article"},React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"perseus-renderer perseus-renderer-responsive"},React.createElement("div",{className:"paragraph"},React.createElement("div",{className:"paragraph"},React.createElement("div",{className:css(styles.fromOurPartner)},i18n._("From our partner")),React.createElement("div",null,i," ",React.createElement(_wonderBlocksLinkV2.default,{href:s.href,skipClientNav:true},s.title)))))))},a.renderDiscussion=function(){var e=a.props,r=e.article,t=e.discussionContext,s=e.domain,i=e.topic
var n=null
if(t&&t.isLoadingUserData){n=React.createElement(_spinner2.default,null)}else{n=React.createElement(_statefulDiscussion2.default,{contentId:r.id,clarificationsEnabled:r.clarificationsEnabled,contentKind:"Article",discussionContext:t,domain:s,topicSlug:i.slug})}return React.createElement("div",{className:css(styles.discussion)},n)},a.renderFooter=function(){var e=a.props,r=e.article,t=e.domain
var s=null
if(r.conceptTagsInfo&&r.conceptTagsInfo.length){s=React.createElement(Tags,{domain:t,tags:r.conceptTagsInfo})}return React.createElement("div",null,React.createElement("div",{className:css(styles.wrapper)},s,React.createElement("div",{className:css(styles.divider)})),a.renderDiscussion())},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.componentDidMount=function e(){this.setUpArticleContent()
this.logConversions("article_view")}
r.prototype.componentDidUpdate=function e(r){if(this.props.article.id!==r.article.id){this.setUpArticleContent()
this.logConversions("article_view")}}
r.prototype.render=function e(){var r=this
var t=this.props,a=t.article,s=t.breadcrumbs,i=t.classUpsell,n=t.currentUrl,o=t.domain,l=t.mobileTutorialNav,c=t.showEditorShortcuts,p=t.topic
var d=JSON.parse(this.props.article.perseusContent)
var u=a.kind+":"+a.id
var g=(0,_staticUrl.absoluteUrlFromPath)(n)
return React.createElement(_kaProvider2.default,{mockOnFirstRender:true},function(e){return React.createElement("div",null,React.createElement(ScrollTracking,{debounce:true,delayMs:2e3,onScroll:r.trackScrollPosition}),React.createElement("div",{className:css(styles.header)},React.createElement(ContentPageHeader,{title:a.translatedTitle.trim().replace(/ ([^ ]+)$/," $1"),breadcrumbs:s,domain:o,authorList:a.authorList,description:a.translatedDescription,showEditorShortcuts:c,editContentUrl:"/devadmin/content/articles/"+a.slug+"/"+a.id,editMetadataUrl:"/devadmin/content#"+p.id+"-Article:"+a.id,standards:a.standards})),React.createElement("div",{className:css(styles.divider)}),React.createElement("div",{className:css(styles.sharingFooter,e.isMobile&&styles.sharingFooterMobile)},React.createElement(SharingFooter,{domain:o,contentDescriptor:u,title:a.translatedTitle,url:g})),React.createElement("div",{ref:function e(t){return r.articleBody=t}},React.createElement(Perseus.ArticleRenderer,{apiOptions:{trackInteraction:function e(t){var a={widget_id:t.id,widget_status:t.status,widget_type:t.type}
r.logConversions("article_widget",a)},isMobile:!!e.isMobile,customKeypad:!!e.isMobile,styling:{radioStyleVersion:finalRadioStyleLocales.indexOf(e.kaLocale)!==-1?"final":"intermediate"},baseElements:{Link:createServerSideLink()}},json:d,useNewStyles:true}),r.maybeRenderSponsorLink()),React.createElement(_wonderBlocksCoreV.WithSSRPlaceholder,{placeholder:null},function(){return i&&React.createElement(_teacherContentUpsellPopup2.default,{classUpsell:i})}),React.createElement(_pageloadMarker2.default,{key:a.id,pageName:"article_page",markSufficientlyUsable:"markup",markFullyInteractiveOnMount:true}),l,r.renderFooter())})}
return r}(React.Component)
ArticlePage.propTypes={article:PropTypes.shape({authorList:ContentPageHeader.propTypes.authorList,id:PropTypes.string.isRequired,translatedDescription:PropTypes.string,translatedTitle:PropTypes.string.isRequired,conceptTagsInfo:PropTypes.arrayOf(PropTypes.shape({slug:PropTypes.string,displayName:PropTypes.string})),perseusContent:PropTypes.string.isRequired,slug:PropTypes.string}).isRequired,breadcrumbs:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,href:PropTypes.string.isRequired})),classUpsell:PropTypes.shape({href:PropTypes.string.isRequired,lessonCount:PropTypes.number.isRequired,topicTitle:PropTypes.string.isRequired,unitMasteryEnabled:PropTypes.bool.isRequired}),currentUrl:PropTypes.string.isRequired,discussionContext:PropTypes.shape({}),domain:PropTypes.string.isRequired,mobileTutorialNav:PropTypes.node,showEditorShortcuts:PropTypes.bool,topic:PropTypes.shape({id:PropTypes.string.isRequired,slug:PropTypes.string.isRequired}).isRequired,sponsorInformation:PropTypes.shape({title:PropTypes.string.isRequired,href:PropTypes.string.isRequired})}
var styles=StyleSheet.create({header:{marginBottom:16},sharingFooter:babelHelpers.extends({},sharedStyles.contentPadding,{paddingTop:15,paddingBottom:48}),sharingFooterMobile:(_sharingFooterMobile={},_sharingFooterMobile[mediaQueries.lgOrSmaller]={paddingTop:16,paddingBottom:0},_sharingFooterMobile),wrapper:{marginLeft:sharedStyles.constants.moduleHorizontalPaddingSmall,marginRight:sharedStyles.constants.moduleHorizontalPaddingSmall},divider:{background:sharedStyles.colors.gray85,height:1,marginLeft:"auto",marginRight:"auto",maxWidth:688},discussion:{marginBottom:24,marginTop:48},fromOurPartner:babelHelpers.extends({},sharedStyles.typography.bodyXsmall,{color:sharedStyles.colors.gray68})})
module.exports=ArticlePage

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/tutorial-article-package.js.map 