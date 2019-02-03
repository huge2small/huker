KAdefine("javascript/tutorial-shared-package/tutorial-nav.jsx", function(require, module, exports) {
var _navHeaderBreadcrumbs,_navHeaderTopicTitle
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _a11y=require("../shared-styles-package/a11y.js")
var _iconAngleBracketLeft=require("../shared-styles-package/icon.angleBracketLeft.js")
var _iconAngleBracketLeft2=babelHelpers.interopRequireDefault(_iconAngleBracketLeft)
var _breadcrumbs=require("../components/breadcrumbs-package/breadcrumbs.jsx")
var _breadcrumbs2=babelHelpers.interopRequireDefault(_breadcrumbs)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _contentModelSections=require("../content-library-package/content-model-sections.js")
var _contentModelSections2=babelHelpers.interopRequireDefault(_contentModelSections)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _iconWithProgress=require("../content-library-package/components/icon-with-progress.jsx")
var _iconWithProgress2=babelHelpers.interopRequireDefault(_iconWithProgress)
var _scrollUtils=require("../scroll-utils-package/scroll-utils.js")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _shared=require("../content-library-package/styles/shared.js")
var _shared2=babelHelpers.interopRequireDefault(_shared)
var _sideNav=require("../components/side-nav-package/side-nav.jsx")
var _sideNav2=babelHelpers.interopRequireDefault(_sideNav)
var i18n=require("../shared-package/i18n.js")
var styleConstants={iconMarginLeft:15,infoWidth:184,navItemPadding:16}
var TutorialNavItem=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,i
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),l=0;l<s;l++){o[l]=arguments[l]}return i=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.state={focus:false,hover:false},a.onFocus=function(){a.setState({focus:true})},a.onBlur=function(){a.setState({focus:false})},a.onMouseEnter=function(){a.setState({hover:true})},a.onMouseLeave=function(){a.setState({hover:false})},r),babelHelpers.possibleConstructorReturn(a,i)}t.prototype.render=function e(){var t=!this.props.first
var r=!this.props.last
var a=!!this.props.selected
var i=_react2.default.createElement(_iconWithProgress2.default,{category:this.props.category,completed:this.props.completed,focus:this.state.focus||this.state.hover,kind:this.props.kind,started:this.props.started,hasTopSubwayTrack:t,hasBottomSubwayTrack:r})
var s=_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.info,this.props.withinMobilePage&&styles.infoWithinMobile)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.title,styles.titleSubwayTracks),title:this.props.title},this.props.title))
var o=_react2.default.createElement(_wonderBlocksCoreV.View,{style:_a11y.srOnly},i18n._("This is the currently selected item."))
var l=this.props.withinMobilePage?this.props.slug+"-"+this.props.contentKind+"-mobile-tab":this.props.slug+"-"+this.props.contentKind+"-tab"
return _react2.default.createElement("li",{role:"presentation",ref:this.props.refCapturer,className:(0,_aphrodite.css)(styles.containerSubwayTracks)},_react2.default.createElement("div",{role:"presentation",className:(0,_aphrodite.css)(styles.item,this.props.withinMobilePage&&styles.itemWithinMobilePage),"data-tutorial-nav-selected":a},a&&_react2.default.createElement(_wonderBlocksCoreV.View,{style:styles.selectedItemLeftBorder}),_react2.default.createElement(_clientLink2.default,{id:l,"aria-controls":this.props.nodeSlug+"-panel","aria-selected":a,style:[styles.link,this.props.withinMobilePage&&styles.linkWithinMobilePage,styles.linkSubwayTracks,a&&styles.selectedLink],to:this.props.nodeUrl,onFocus:this.onFocus,onMouseEnter:this.onMouseEnter,onBlur:this.onBlur,onMouseLeave:this.onMouseLeave},i,s,a&&o)))}
return t}(_react2.default.Component)
TutorialNavItem.defaultProps={withinMobilePage:false}
var NextTutorialLink=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props.withinMobilePage
var r={}
this.props.childData.forEach(function(e){if(!r[e.kind]){r[e.kind]=0}r[e.kind]++})
var a=[]
if(r["Video"]){a.push(i18n.ngettext("%(num)s video","%(num)s videos",r["Video"]))}if(r["Article"]){a.push(i18n.ngettext("%(num)s article","%(num)s articles",r["Article"]))}if(r["Exercise"]){a.push(i18n.ngettext("%(num)s exercise","%(num)s exercises",r["Exercise"]))}return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.item,styles.upNextItem,t&&styles.itemWithinMobilePage)},_react2.default.createElement(_clientLink2.default,{style:[styles.link],to:this.props.href},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.upNext)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.title,styles.upNextTitle)},i18n._("Next tutorial")),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.title,styles.singleLineTitle)},this.props.title))))}
return t}(_react2.default.Component)
NextTutorialLink.defaultProps={withinMobilePage:false}
var TutorialNav=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,i
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),l=0;l<s;l++){o[l]=arguments[l]}return i=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a._isItemCompleted=function(e){var t=a.props.statusMap
if(!t){return false}var r=e.id
return t[String(r)]==="complete"},a._isItemStarted=function(e){var t=a.props.statusMap
if(!t){return false}var r=e.id
return t[String(r)]==="started"},a.scrollToSelectedNavItem=function(){var e=a.selectedRef==null||a.containerRef==null
if(a.props.withinMobilePage||e){return}setTimeout(function(){if(a._mounted&&a.selectedRef!=null&&a.containerRef!=null){(0,_scrollUtils.jumpToElementWithinContainer)(a.selectedRef,a.containerRef)}},0)},a.captureSelectedRef=function(e){a.selectedRef=e},a.renderNavHeader=function(){var e=a.props.tutorial
var t=_react2.default.createElement("span",null,_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.breadcrumbsRightArrowContainer)},_react2.default.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.breadcrumbsRightArrow),color:_wonderBlocksColorV2.default.offBlack,icon:_iconAngleBracketLeft2.default,size:8}))," ")
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.navHeader,a.props.withinMobilePage&&styles.navHeaderWithinMobilePage)},a.props.showBreadcrumbs&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.navHeaderBreadcrumbs)},_react2.default.createElement(_breadcrumbs2.default,{isNavigation:true,path:a.props.breadcrumbs,separator:t,separatorStyle:styles.breadcrumbsRightArrowSeparatorStyle,style:styles.breadcrumbs,containerStyle:styles.breadcrumbsContainer})),_react2.default.createElement(_wonderBlocksTypographyV.LabelLarge,{tag:"h2",style:styles.navHeaderTopicTitle},e.translatedTitle))},a.getItemTitle=function(e,t){if(e.kind==="Exercise"){return i18n._("Practice: %(title)s",{title:e.translatedTitle})}else{return e.translatedTitle}},a.renderItems=function(e,t,r,i){var s=e.map(function(r,i){var s=t.relativeUrl+"/"+r.nodeSlug
var o=r.nodeSlug===a.props.currentNodeSlug
return _react2.default.createElement(TutorialNavItem,{key:i,category:r.category,kind:r.contentKind,selected:o,domain:a.props.domain,title:a.getItemTitle(r,i),nodeSlug:r.nodeSlug,slug:r.slug,contentKind:r.contentKind,nodeUrl:s,completed:a._isItemCompleted(r),started:a._isItemStarted(r),first:i===0,last:i===e.length-1,withinMobilePage:a.props.withinMobilePage,refCapturer:o?a.captureSelectedRef:undefined})})
var o=r||i>0
var l=i>0
return _react2.default.createElement("div",{key:i},o&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.sectionTop)},l&&_react2.default.createElement("hr",{className:(0,_aphrodite.css)(styles.divider)}),r&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.sponsorNote)},i18n._("Brought to you by our partner"))),_react2.default.createElement("ul",null,s))},a.renderNavContents=function(e){var t=a.props,r=t.navItems,i=t.tutorial
var s=(0,_contentModelSections2.default)(r).map(function(e,t){var r=e[0],s=e[1]
return a.renderItems(s,i,r,t)})
var o=a.props.nextTutorial
if(o){s.push(_react2.default.createElement(NextTutorialLink,{key:"next-tutorial",domain:a.props.domain,title:o.tutorial.translatedTitle,href:o.firstChild.topicPath,childData:o.tutorial.childData,withinMobilePage:a.props.withinMobilePage}))}return _react2.default.createElement("div",{role:"navigation",className:(0,_aphrodite.css)(a.props.style)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.row)},!e&&a.renderNavHeader(),_react2.default.createElement("ul",null,s)))},r),babelHelpers.possibleConstructorReturn(a,i)}t.prototype.componentDidMount=function e(){this._mounted=true
this.scrollToSelectedNavItem()}
t.prototype.componentWillUnmount=function e(){this._mounted=false}
t.prototype.render=function e(){var t=this
if(this.props.withinMobilePage||this.props.inFixture){return this.renderNavContents()}else{var r=this.renderNavHeader()
var a=this.renderNavContents(true)
return _react2.default.createElement(_sideNav2.default,{header:r,width:TUTORIAL_NAV_WIDTH,minHeight:400,scrollOffset:this.props.scrollOffset,style:this.props.style},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.scrollable),ref:function e(r){return t.containerRef=r}},a))}}
return t}(_react2.default.Component)
TutorialNav.defaultProps={breadcrumbs:[],withinMobilePage:false,scrollOffset:0}
var TUTORIAL_NAV_WIDTH=256
var border="1px solid "+_shared2.default.colors.gray85
var itemVerticalWidth=TUTORIAL_NAV_WIDTH-1
var itemHoritzonalPadding=20
var itemVerticalPadding=15
var hoverFocusLinkStyle={backgroundColor:_wonderBlocksColorV2.default.offBlack8,textDecoration:"none",outline:"none"}
var styles=_aphrodite.StyleSheet.create({row:{whiteSpace:"nowrap",width:"100%",WebkitOverflowScrolling:"touch"},scrollable:{overflowY:"scroll"},containerSubwayTracks:{display:"block",overflow:"hidden",position:"relative"},item:{background:_shared2.default.colors.white,boxSizing:"border-box",display:"block",verticalAlign:"top",width:"100%"},itemWithinMobilePage:{width:"100%"},upNextItem:{borderBottom:0,borderTop:border},upNext:{overflow:"hidden"},upNextTitle:{paddingTop:8,marginBottom:4},selectedItemLeftBorder:{position:"absolute",top:0,left:0,borderRight:"4px solid "+_wonderBlocksColorV2.default.blue,height:"100%",borderTopRightRadius:2,borderBottomRightRadius:2},sectionTop:{background:_shared2.default.colors.white,padding:itemHoritzonalPadding,paddingBottom:itemVerticalPadding},divider:{borderTop:border,boxShadow:"none",margin:0,height:0},sponsorNote:babelHelpers.extends({},_shared2.default.typography.labelSmall,{color:_shared2.default.colors.gray41,marginTop:itemVerticalPadding}),link:{display:"flex",flexDirection:"row",padding:"16px 20px",position:"relative",whiteSpace:"normal",":hover":hoverFocusLinkStyle,":focus":hoverFocusLinkStyle},linkWithinMobilePage:{alignItems:"center"},linkSubwayTracks:{alignItems:"center"},selectedLink:{color:_wonderBlocksColorV2.default.blue},info:{marginLeft:styleConstants.iconMarginLeft,overflow:"hidden",width:styleConstants.infoWidth,verticalAlign:"top"},infoWithinMobile:{width:"auto"},title:babelHelpers.extends({},_shared2.default.typography.labelMedium,{fontWeight:"normal",paddingTop:0,marginBottom:0,marginTop:0}),titleSubwayTracks:{fontFamily:_shared2.default.fonts.regular},singleLineTitle:{fontSize:17,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},navHeader:{backgroundColor:_shared2.default.colors.white,borderBottom:border,color:_shared2.default.colors.gray17,fontFamily:"inherit",fontSize:17,fontWeight:"bold",lineHeight:"23px",padding:20,paddingTop:24,whiteSpace:"normal",width:itemVerticalWidth},navHeaderWithinMobilePage:{width:"100%"},navHeaderBreadcrumbs:(_navHeaderBreadcrumbs={paddingBottom:4},_navHeaderBreadcrumbs[_shared2.default.queries.small]={display:"none"},_navHeaderBreadcrumbs[_shared2.default.queries.medium]={display:"none"},_navHeaderBreadcrumbs),navHeaderTopicTitle:(_navHeaderTopicTitle={},_navHeaderTopicTitle[_mediaQueries2.default.lgOrLarger]={display:"none"},_navHeaderTopicTitle),breadcrumbs:{color:_wonderBlocksColorV2.default.offBlack64},breadcrumbsRightArrow:{left:0,position:"relative",top:4,transform:"scaleX(-1) translate(0, -50%)"},breadcrumbsRightArrowContainer:{left:0,position:"absolute",top:0},breadcrumbsRightArrowSeparatorStyle:{display:"inline",margin:"0 5px",padding:"0 3px",position:"relative"},breadcrumbsContainer:{display:"inline",position:"relative"}})
module.exports=TutorialNav

});
KAdefine("javascript/tutorial-shared-package/components/content-description.jsx", function(require, module, exports) {
var _hideMobile,_hideTablet
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var KA=require("../../shared-package/ka.js")
var sharedStyles=require("../../content-library-package/styles/shared.js")
var i18n=require("../../shared-package/i18n.js")
var authorListPropType=PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string.isRequired,kaUrl:PropTypes.string}))
var AuthorList=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.authorList
if(!r.length){return null}var t=[]
r.forEach(function(e,s){if(s>0){if(s===r.length-1){if(r.length>2){t.push(i18n._(", and "))}else{t.push(i18n._(" and "))}}else{t.push(i18n._(", "))}}if(e.kaUrl){t.push(React.createElement(_wonderBlocksLinkV2.default,{key:s,href:e.kaUrl,skipClientNav:true},e.name))}else{t.push(e.name)}})
return React.createElement("span",null,i18n.$_("Created by %(nameList)s.",{nameList:t}))}
return r}(React.Component)
AuthorList.propTypes={authorList:authorListPropType.isRequired}
var ContentDescription=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.authorList
var t=this.props.description
if(!t&&!r.length){return null}var s=t&&!/[.?!"'](?:\s|&nbsp;)*$/.test(t)
if(s){t+="."}if(t!=null){t=t.replace("\\$","$")}return React.createElement("div",{className:css(styles.description,this.props.hideDescriptionOnMobile&&styles.hideMobile,this.props.hideDescriptionOnMobile&&KA.isTablet&&styles.hideTablet)},React.createElement(_wonderBlocksTypographyV.Body,null,React.createElement("span",{dangerouslySetInnerHTML:{__html:t}})," ",React.createElement(AuthorList,{authorList:r})))}
return r}(React.Component)
ContentDescription.propTypes={authorList:authorListPropType,description:PropTypes.string,hideDescriptionOnMobile:PropTypes.bool}
ContentDescription.defaultProps={authorList:[]}
var styles=StyleSheet.create({description:{textAlign:"left"},hideMobile:(_hideMobile={},_hideMobile[sharedStyles.queries.small]={display:"none"},_hideMobile),hideTablet:(_hideTablet={},_hideTablet[sharedStyles.queries.large]={display:"none"},_hideTablet[sharedStyles.queries.medium]={display:"none"},_hideTablet)})
module.exports=ContentDescription

});
KAdefine("javascript/tutorial-shared-package/components/content-page-header.jsx", function(require, module, exports) {
var _titleAndDescription,_breadcrumbs,_separator,_breadcrumbLastItem,_breadcrumbRow,_babelHelpers$extends
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _breadcrumbs2=require("../../components/breadcrumbs-package/breadcrumbs.jsx")
var _breadcrumbs3=babelHelpers.interopRequireDefault(_breadcrumbs2)
var _editorShortcuts=require("./editor-shortcuts.jsx")
var _editorShortcuts2=babelHelpers.interopRequireDefault(_editorShortcuts)
var _standards=require("../../standards-package/standards.jsx")
var _standards2=babelHelpers.interopRequireDefault(_standards)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var KA=require("../../shared-package/ka.js")
var ContentDescription=require("./content-description.jsx")
var globalStyles=require("../../shared-styles-package/global-styles.js")
var mediaQueries=require("../../shared-styles-package/media-queries.js")
var sharedStyles=require("../../content-library-package/styles/shared.js")
var ContentPageHeader=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.authorList,s=r.breadcrumbs,a=r.editContentUrl,o=r.editMetadataUrl,i=r.description,l=r.hideDescriptionOnMobile,n=r.showEditorShortcuts,d=r.standards,c=r.title
var p=i||t.length>0
var b=d&&d.length>0
var u=css(styles.titleModule,(p||b)&&styles.titleModulePadding)
return React.createElement("div",{className:css(styles.header)},React.createElement("div",{className:css(styles.titleAndDescription)},React.createElement("div",{className:u},React.createElement("div",{className:css(styles.breadcrumbRow)},React.createElement(_breadcrumbs3.default,{backArrow:true,isNavigation:true,path:s,separator:"·",style:styles.breadcrumbs,lastItemStyle:styles.breadcrumbLastItem,separatorStyle:styles.separator})),React.createElement("div",{className:css(styles.titleAndLogo)},React.createElement("h1",{className:css(styles.title)},c,n&&React.createElement(_editorShortcuts2.default,{editContentUrl:a,editMetadataUrl:o,kaLocale:KA.kaLocale})))),b&&React.createElement("div",{className:css(p&&styles.titleModulePadding)},React.createElement(_standards2.default,{standards:d})),p&&React.createElement(ContentDescription,{authorList:t,description:i,hideDescriptionOnMobile:l})))}
return r}(React.Component)
ContentPageHeader.propTypes={authorList:ContentDescription.propTypes.authorList,breadcrumbs:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,href:PropTypes.string.isRequired})),description:ContentDescription.propTypes.description,domain:PropTypes.string.isRequired,editContentUrl:PropTypes.string,editMetadataUrl:PropTypes.string,hideDescriptionOnMobile:ContentDescription.propTypes.hideDescriptionOnMobile,showEditorShortcuts:PropTypes.bool,standards:PropTypes.arrayOf(PropTypes.shape({code:PropTypes.string.isRequired,descriptionHtml:PropTypes.string.isRequired,link:PropTypes.string.isRequired,set:PropTypes.shape({prefix:PropTypes.string.isRequired})})),title:PropTypes.node.isRequired}
ContentPageHeader.defaultProps={authorList:[],showEditorShortcuts:false}
var styles=StyleSheet.create({header:babelHelpers.extends({},sharedStyles.contentPadding,{display:"flex",justifyContent:"space-between",alignItems:"center"}),titleAndDescription:(_titleAndDescription={flexDirection:"column",width:sharedStyles.constants.contentWidth},_titleAndDescription[mediaQueries.smOrSmaller]={width:"100%"},_titleAndDescription),titleModule:{paddingTop:32,paddingBottom:2,textAlign:"left"},titleModulePadding:{paddingBottom:12},titleAndLogo:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"nowrap"},breadcrumbsBackArrow:{marginRight:1},breadcrumbs:(_breadcrumbs={backgroundColor:globalStyles.colors.white,zIndex:globalStyles.zIndexes.aboveDrawingArea,color:_wonderBlocksColorV2.default.offBlack64},_breadcrumbs[globalStyles.queries.small]={display:"none"},_breadcrumbs),separator:(_separator={padding:"0 0.5em"},_separator[globalStyles.queries.small]={display:"none"},_separator),breadcrumbLastItem:(_breadcrumbLastItem={},_breadcrumbLastItem[globalStyles.queries.small]={display:"inline-flex"},_breadcrumbLastItem),breadcrumbRow:(_breadcrumbRow={marginBottom:6},_breadcrumbRow[globalStyles.queries.large]={display:"none"},_breadcrumbRow[globalStyles.queries.xlarge]={display:"none"},_breadcrumbRow),title:babelHelpers.extends({},globalStyles.typography.conceptHeadingDesktop,(_babelHelpers$extends={color:globalStyles.colors.gray17,margin:0,position:"relative"},_babelHelpers$extends[mediaQueries.mdOrSmaller]=babelHelpers.extends({},globalStyles.typography.conceptHeadingMobile),_babelHelpers$extends)),logo:{marginLeft:16}})
module.exports=ContentPageHeader

});
KAdefine("javascript/tutorial-shared-package/components/editor-shortcuts.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _editorShortcuts
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _icon=require("../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var editContentIcon={path:"M41.209 53.753l5.39 0l0 5.39l3.136 0l6.468-6.517-8.477-8.526-6.517 6.517l0 3.136zm33.173-34.937q-.882-.882-1.862.049l-19.6 19.6q-.931.98-.049 1.862t1.862-.049l19.6-19.6q.931-.98.049-1.862zm-38.563 45.668l0-16.121l37.632-37.632 16.17 16.121-37.632 37.632l-16.17 0zm43.022-12.397l0 10.633q-.049 6.713-4.753 11.417t-11.368 4.704l-46.599 0q-6.713 0-11.417-4.753t-4.704-11.368l0-46.599q0-6.664 4.753-11.417t11.368-4.704l46.599 0q3.528 0 6.566 1.372.833.392.98 1.323t-.49 1.617l-2.744 2.744q-.784.784-1.96.441t-2.352-.343l-46.599 0q-3.675 0-6.321 2.646t-2.646 6.321l0 46.599q0 3.675 2.646 6.321t6.321 2.646l46.599 0q3.675 0 6.321-2.646t2.646-6.321l0-7.056q0-.735.49-1.225l3.577-3.577q.833-.833 1.96-.392t1.127 1.617zm7.203-51.646q2.254 0 3.773 1.568l8.526 8.526q1.568 1.568 1.568 3.822t-1.568 3.773l-5.145 5.145-16.121-16.121 5.145-5.145q1.568-1.568 3.822-1.568z",width:100,height:78.912}
var editMetadataIcon={path:"M21.988 81.408q0-1.59-1.166-2.756-1.113-1.113-2.703-1.113t-2.756 1.166-1.166 2.703 1.166 2.703 2.756 1.166 2.756-1.166 1.113-2.703zm-21.995 3.869q0-3.286 2.279-5.512l41.287-41.234q2.385 5.936 6.943 10.494t10.494 6.943l-41.34 41.287q-2.173 2.226-5.353 2.226t-5.565-2.226l-6.466-6.519q-2.279-2.173-2.279-5.459zm99.375-55.544q0 2.226-1.378 6.307-2.862 8.109-9.964 13.144t-15.635 5.088q-11.183 0-19.186-7.95-7.95-7.897-7.95-19.133t7.95-19.186 19.186-8.003q3.498 0 7.367 1.007t6.466 2.809q1.007.689 1.007 1.696t-1.007 1.696l-17.702 10.229l0 13.568l11.66 6.466q.318-.159 8.374-5.088t8.904-4.876q1.908 0 1.908 2.226z",width:99.893,height:100}
var EditorShortcuts=function e(t){return _react2.default.createElement(_wonderBlocksCoreV.Text,{style:styles.editorShortcuts},t.editContentUrl&&t.kaLocale==="en"&&_react2.default.createElement(_wonderBlocksLinkV2.default,{href:t.editContentUrl,style:[styles.editContentShortcut,styles.linkColor],target:"_blank",title:"Edit this content"},_react2.default.createElement(_icon2.default,{icon:editContentIcon})),t.editMetadataUrl&&_react2.default.createElement(_wonderBlocksLinkV2.default,{href:t.editMetadataUrl,style:styles.linkColor,target:"_blank",title:"Edit this content's metadata"},_react2.default.createElement(_icon2.default,{icon:editMetadataIcon})))}
var styles=_aphrodite.StyleSheet.create({editContentShortcut:{marginRight:5},editorShortcuts:(_editorShortcuts={fontSize:"70%"},_editorShortcuts[_mediaQueries2.default.mdOrSmaller]={marginLeft:10},_editorShortcuts[_mediaQueries2.default.lg]={marginLeft:15},_editorShortcuts[_mediaQueries2.default.xl]={marginLeft:20},_editorShortcuts),linkColor:{color:_wonderBlocksColorV2.default.offBlack}})
exports.default=EditorShortcuts

});
KAdefine("javascript/tutorial-shared-package/components/sharing-footer.jsx", function(require, module, exports) {
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var React=require("react")
var GoogleUtil=require("../../google-classroom-package/googleutil.js")
var GoogleClassModal=require("../../google-classroom-package/components/gclassroom-share-modal.jsx")
var KA=require("../../shared-package/ka.js")
var Social=require("../../shared-package/social.js")
var Icon=require("../../shared-styles-package/icon.jsx")
var Link=require("../../components/link-package/link.jsx")
var sharedStyles=require("../../content-library-package/styles/shared.js")
var i18n=require("../../shared-package/i18n.js")
var facebookSignIcon={path:"M12.283 0H.717A.717.717 0 0 0 0 .717v11.566c0 .396.32.717.717.717h6.227V7.965H5.25V6.002h1.694V4.554c0-1.679 1.025-2.593 2.524-2.593.717 0 1.335.054 1.515.078v1.755H9.945c-.815 0-.973.388-.973.955v1.253h1.944l-.256 1.963H8.97V13h3.313c.396 0 .717-.32.717-.717V.717A.717.717 0 0 0 12.283 0z",width:13,height:13}
var twitterIcon={path:"M90.576 23.128q0 17.528-9.8 32.48-10.864 16.576-28.336 22.848-9.688 3.472-20.664 3.472-17.36 0-31.752-9.296 2.24.28 4.984.28 14.392 0 25.704-8.848-6.72-.056-12.04-4.088t-7.28-10.248q2.128.336 4.368.336t4.928-.728q-7.168-1.456-11.872-7.112t-4.704-13.16l0-.28q4.368 2.408 9.352 2.632-4.2-2.8-6.72-7.336-2.464-4.536-2.464-10.024t2.8-10.248q7.728 9.52 18.816 15.232t23.8 6.384q-.504-2.408-.504-4.76 0-8.568 6.048-14.616t14.784-6.048 14.952 6.552q7-1.344 13.104-4.984-2.352 7.336-9.072 11.368 5.936-.616 11.872-3.192-4.312 6.272-10.36 10.696.056.896.056 2.688z",width:100,height:81.233}
var envelopeAltIcon={path:"M8.967 71.687l82.418 0q.735 0 1.274-.539t.539-1.274l0-42.973q-1.813 2.009-3.871 3.675-14.945 11.515-20.825 16.415t-7.693 6.272-4.851 2.695q-3.038 1.372-5.733 1.372l-.098 0q-2.695 0-5.733-1.372t-4.851-2.695q-1.813-1.372-7.693-6.272t-20.825-16.415q-2.058-1.666-3.871-3.675l0 42.973q0 .735.539 1.274t1.274.539zm84.231-62.034q0-2.499-1.813-2.499l-82.418 0q-.735 0-1.274.539t-.539 1.274q0 9.408 8.232 15.925 21.952 17.297 25.676 20.433 5.733 4.851 9.065 4.851l.098 0q2.254 0 5.194-2.009t7.056-5.537q11.662-9.261 22.491-17.738 3.038-2.401 5.635-6.468t2.597-7.399l0-1.372zm7.154-.686l0 60.907q0 3.675-2.646 6.321t-6.321 2.646l-82.418 0q-3.675 0-6.321-2.646t-2.646-6.321l0-60.907q0-3.675 2.646-6.321t6.321-2.646l82.418 0q3.675 0 6.321 2.646t2.646 6.321z",width:100,height:78.564}
var classroomIconSrc="/images/google_classroom_logo_light_square_36.svg"
var styles=StyleSheet.create({sharingFooter:{color:sharedStyles.colors.gray17,font:sharedStyles.labelMedium,display:"flex",justifyContent:"flex-start"},viewCount:{borderRight:"1px solid "+sharedStyles.colors.gray85,fontSize:17,display:"inline-block",marginRight:16,textAlign:"center",width:150},socialButton:{display:"inline-block",fontSize:17,marginRight:32},socialButtonIcon:{marginRight:8},disabled:{color:"lightgrey"}})
var SharingFooter=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this))
a.handleGoogleClassroom=function(e){var t=a.state.googleIsReady
e.preventDefault()
if(a.useApiShare()){if(!t){return}a.setState({showGClassModal:true})
return}GoogleUtil.shareToClassroom(a.props.url,i18n._("Khan Academy")+": "+a.props.title,i18n._("Describe your assignment in detail here"))}
a.handleTwitter=function(e){e.preventDefault()
return Social.openTwitterPopup(Social.formatTwitterShareUrl({url:a.props.url,text:a.props.title}))}
a.handleFacebook=function(e){e.preventDefault()
Social.facebookShare(a.props.title,a.props.url,a.props.image)
return false}
a.state={googleIsReady:false,showGClassModal:false}
return a}t.prototype.componentDidMount=function e(){var t=this
if(this.useApiShare()){GoogleUtil.loadGoogleAPI(GoogleUtil.SHARE_SCOPES).then(function(){return t.setState({googleIsReady:true})})}}
t.prototype.useApiShare=function e(){return KA.featureFlag("GANDALF_GOOGLE_CLASSROOM_API_SHARE")}
t.prototype.getMailtoUrl=function e(){return Social.formatMailtoUrl({subject:i18n._("I just learned about %(title)s",{title:this.props.title}),body:i18n._("You can learn about it, too. Check out %(url)s",{url:this.props.url})})}
t.prototype.classroomShareButton=function e(){var t=this.state.googleIsReady
var a=[styles.socialButton]
if(this.useApiShare()&&!t){a.push(styles.disabled)}return React.createElement(Link,{href:"#",style:a,onClick:this.handleGoogleClassroom},React.createElement("span",{"aria-hidden":"true",className:css(styles.socialButtonIcon)},React.createElement("img",{alt:"","aria-hidden":true,src:(0,_staticUrl2.default)(classroomIconSrc),width:13})),i18n._("Google Classroom"))}
t.prototype.render=function e(){var t=this
var a=this.state.showGClassModal
var r=KA.getUserProfile()
var o=!!r&&r.get("isChildAccount")
var s=React.createElement("div",{className:css(styles.sharingFooter)},this.props.views&&React.createElement("span",{className:css(styles.viewCount)},i18n.$_("%(count)s views",{count:this.props.views})),!o&&React.createElement("div",null,this.classroomShareButton(),React.createElement(Link,{href:"#",onMouseOver:function e(){return Social.prepFacebook()},onClick:this.handleFacebook,style:[styles.socialButton]},React.createElement("span",{"aria-hidden":"true",className:css(styles.socialButtonIcon)},React.createElement(Icon,{icon:facebookSignIcon,size:13,color:sharedStyles.colors.gray17})),i18n._("Facebook")),React.createElement(Link,{href:"#",style:[styles.socialButton],onClick:this.handleTwitter},React.createElement("span",{"aria-hidden":"true",className:css(styles.socialButtonIcon)},React.createElement(Icon,{icon:twitterIcon,size:13,color:sharedStyles.colors.gray17})),i18n._("Twitter"))),React.createElement(Link,{href:this.getMailtoUrl(),style:[styles.socialButton]},React.createElement("span",{"aria-hidden":"true",className:css(styles.socialButtonIcon)},React.createElement(Icon,{icon:envelopeAltIcon,size:13,color:sharedStyles.colors.gray17})),i18n._("Email")))
return React.createElement("div",null,a&&React.createElement(GoogleClassModal,{url:this.props.url,title:this.props.title,onClose:function e(){return t.setState({showGClassModal:false})}}),s)}
return t}(React.Component)
module.exports=function(e){return React.createElement(_wonderBlocksCoreV.WithSSRPlaceholder,{placeholder:null},function(){return React.createElement(SharingFooter,e)})}

});
KAdefine("javascript/tutorial-shared-package/components/video-transcript-static-view.jsx", function(require, module, exports) {
var _babelHelpers$extends
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var mediaQueries=require("../../shared-styles-package/media-queries.js")
var sharedStyles=require("../../content-library-package/styles/shared.js")
var i18n=require("../../shared-package/i18n.js")
var VideoTranscriptStaticView=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,r=t.inlineStyles,s=t.subtitles
var a=void 0
var i=void 0
if(r){i=css(r.container)}else{a=classNames({"desktop-only":true,"new-subtitles-container":true,open:true,"subtitles-container":true,"min-contained-and-centered":true})
i="subtitles"}var l=s.map(function(e){return e.text}).join(" ")
return React.createElement("div",{className:css(styles.standaloneTranscript)},React.createElement("div",{className:a},React.createElement("h2",{className:css(styles.title)},i18n._("Video transcript")),React.createElement("div",{className:i,itemProp:"transcript",ref:"subtitleList"},l)))}
return t}(React.Component)
VideoTranscriptStaticView.propTypes={inlineStyles:PropTypes.shape({container:PropTypes.objectOf(PropTypes.any)}),subtitles:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string})).isRequired}
var styles=StyleSheet.create({standaloneTranscript:babelHelpers.extends({},sharedStyles.typography.bodySmall,(_babelHelpers$extends={maxWidth:688,margin:"auto",minHeight:0,marginBottom:32},_babelHelpers$extends[mediaQueries.smOrSmaller]={paddingLeft:16,paddingRight:16},_babelHelpers$extends.paddingBottom=16,_babelHelpers$extends.borderBottom="1px solid "+sharedStyles.colors.gray85,_babelHelpers$extends)),title:babelHelpers.extends({},sharedStyles.typography.labelLarge,{borderBottom:"1px solid "+sharedStyles.colors.gray85,paddingBottom:8,marginBottom:16})})
module.exports=VideoTranscriptStaticView

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/tutorial-shared-package.js.map 