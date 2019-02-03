KAdefine("javascript/components/client-link-package/client-link.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _utils=require("./utils.js")
var _link=require("../link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var ClientLink=function e(r,t){var i=t.router
var l=r.forceServer,n=r.to,a=r.onClick,o=r.conversions,p=r.inputRef,s=babelHelpers.objectWithoutProperties(r,["forceServer","to","onClick","conversions","inputRef"])
return _react2.default.createElement(_link2.default,babelHelpers.extends({},s,{href:n,ref:p,element:(0,_utils.getLinkElement)(n,i,l),onClick:(0,_utils.onClickWithMarkConversions)(a,o)}))}
ClientLink.contextTypes={router:_propTypes2.default.any}
exports.default=ClientLink

});
KAdefine("javascript/components/client-link-package/utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.onClickWithMarkConversions=exports.getLinkElement=exports.pathIsInShell=undefined
var _reactRouterDom=require("react-router-dom")
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var pathIsInShell=exports.pathIsInShell=function e(r){if(r.indexOf("//")>=0){return false}if(r==="/computing/hour-of-code"){return false}if(r==="/mission/sat"){return false}if(r==="/sat"){return false}if(r.startsWith("/prep/")){return false}return true}
var getLinkElement=exports.getLinkElement=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:""
var t=arguments[1]
var n=arguments[2]
if(!t||n||!pathIsInShell(r)){return"a"}return _reactRouterDom.Link}
var onClickWithMarkConversions=exports.onClickWithMarkConversions=function e(r,t){return function(e){if(r){r(e)}if(t){var n=[]
var i=[]
for(var a=t,o=Array.isArray(a),s=0,a=o?a:a[Symbol.iterator]();;){var l
if(o){if(s>=a.length)break
l=a[s++]}else{s=a.next()
if(s.done)break
l=s.value}var u=l
if(typeof u==="string"){n.push(u)}else{i.push(babelHelpers.extends({},u))}}n.length&&_bigbingo2.default.markConversions(n)
i.length&&_bigbingo2.default.markConversionsWithExtras(i)}}}

});
KAdefine("javascript/components/client-link-package/types.js", function(require, module, exports) {

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/client-link-package.js.map 