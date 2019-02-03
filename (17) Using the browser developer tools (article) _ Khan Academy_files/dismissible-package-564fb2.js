KAdefine("javascript/components/dismissible-package/dismissible.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _dismissibleApi=require("./dismissible-api.js")
var Dismissible=function(s){babelHelpers.inherits(e,s)
function e(){var i,t,r
babelHelpers.classCallCheck(this,e)
for(var o=arguments.length,n=Array(o),l=0;l<o;l++){n[l]=arguments[l]}return r=(i=(t=babelHelpers.possibleConstructorReturn(this,s.call.apply(s,[this].concat(n))),t),t.state={show:false},t.mounted=false,t.dismiss=function(){return(0,_dismissibleApi.dismiss)(t.props.dismissKey,t.props.expiresDays)},t.handleClose=function(){t.dismiss()
t.mounted&&t.setState({show:false})},i),babelHelpers.possibleConstructorReturn(t,r)}e.prototype.componentDidMount=function s(){var e=this
this.mounted=true;(0,_dismissibleApi.isDismissed)(this.props.dismissKey).then(function(s){e.mounted&&e.setState({show:!s})
if(!s&&e.props.showOnce){e.dismiss()}})}
e.prototype.componentWillUnmount=function s(){this.mounted=false}
e.prototype.render=function s(){return this.state.show&&this.props.children(this.handleClose)}
return e}(React.Component)
Dismissible.defaultProps={showOnce:false}
exports.default=Dismissible

});
KAdefine("javascript/components/dismissible-package/dismissible-api.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.dismiss=exports.isDismissed=undefined
var _khanFetch=require("../../shared-package/khan-fetch.js")
var checkedKeys=new Map
var dismissUntilDate=function e(s,t){checkedKeys.set(s,true)
var i=t.toISOString()
var n=encodeURIComponent(s);(0,_khanFetch.khanFetch)("/api/internal/dismiss/"+n+"?expires="+i,{method:"POST"})}
var expirationToDate=function e(s){var t=new Date(3e3,6,1)
if(s==="never"){return t}else{var i=(new Date).getTime()
var n=1e3*60*60*24
return new Date(i+s*n)}}
var isDismissed=exports.isDismissed=function e(s){if(checkedKeys.has(s)){return Promise.resolve(checkedKeys.get(s))}return(0,_khanFetch.khanFetch)("/api/internal/dismiss/"+s).then(function(e){return e.json()}).then(function(e){var t=e.dismissed
checkedKeys.set(s,t)
return t}).catch(function(){return true})}
var dismiss=exports.dismiss=function e(s,t){return dismissUntilDate(s,expirationToDate(t))}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/dismissible-package.js.map 