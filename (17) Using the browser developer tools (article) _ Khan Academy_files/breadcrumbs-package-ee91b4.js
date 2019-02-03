KAdefine("javascript/components/breadcrumbs-package/breadcrumbs.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _wonderBlocksIconV=require("@khanacademy/wonder-blocks-icon-v1")
var _wonderBlocksIconV2=babelHelpers.interopRequireDefault(_wonderBlocksIconV)
var _utils=require("../client-link-package/utils.js")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var Breadcrumbs=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this
var a=this.props,l=a.isNavigation,o=a.openInNewTab,t=a.path,i=a.separator,n=a.separatorStyle,s=a.containerStyle,c=a.style,d=a.light,p=a.backArrow
var b=t.map(function(e,a){var l={}
if(o){l.target="_blank"}var b=function a(){if(r.props.bigBingoLinkConversion){_bigbingo2.default.markConversionsWithExtras([{id:r.props.bigBingoLinkConversion,extra:{module:r.props.referrer,type:"breadcrumb"}}])}if(e.onClick){e.onClick()}}
return React.createElement(_wonderBlocksTypographyV.LabelLarge,{key:a,style:[localStyles.container,s]},!!a&&React.createElement("span",{"aria-hidden":"true",className:(0,_aphrodite.css)(d?localStyles.light:localStyles.default,n||localStyles.divider)},i),React.createElement(_wonderBlocksLinkV2.default,babelHelpers.extends({href:e.href,onClick:b,"aria-level":a+1,skipClientNav:e.forceServer||!(0,_utils.pathIsInShell)(e.href),style:[d&&localStyles.light,c,a===t.length-1&&r.props.lastItemStyle]},l),a===0&&p&&React.createElement("div",{className:(0,_aphrodite.css)(localStyles.backArrowPositioner)},React.createElement(_wonderBlocksIconV2.default,{icon:_wonderBlocksIconV.icons.caretLeft,size:"medium",style:[localStyles.backArrow,d?localStyles.light:localStyles.default]})),e.title))})
return React.createElement("div",{role:l?"navigation":null},b)}
return r}(_react.Component)
Breadcrumbs.defaultProps={isNavigation:false,openInNewTab:false,separator:"/",light:false}
exports.default=Breadcrumbs
var localStyles=_aphrodite.StyleSheet.create({divider:{padding:"0 0.5em"},container:{display:"inline-flex",verticalAlign:"middle",alignItems:"center"},light:{color:_wonderBlocksColorV2.default.white64},default:{color:_wonderBlocksColorV2.default.offBlack},backArrowPositioner:{display:"inline-block",width:15.5,position:"relative"},backArrow:{position:"absolute",bottom:-6,right:0}})

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/breadcrumbs-package.js.map 