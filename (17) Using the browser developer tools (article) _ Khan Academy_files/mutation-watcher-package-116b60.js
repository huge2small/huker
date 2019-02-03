KAdefine("javascript/components/mutation-watcher-package/mutation-watcher.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _bigbingo=require("../../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var markMutateDOMAttempt=function e(t,r,a){return _bigbingo2.default.markConversion("mutate_dom_attempt",{tag:t,originalValue:r,modifiedValue:a})}
var MutationWatcher=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){if(window.MutationObserver){this._observer=new MutationObserver(this.handleValueMutated.bind(this))
this._observer.observe(this._node,{characterData:true,subtree:true})}}
t.prototype.componentWillUnmount=function e(){if(this._observer){this._observer.disconnect()}}
t.prototype.handleValueMutated=function e(){var t=this.props,r=t.markConversion,a=t.onMutate,n=t.revertMutations,o=t.tag,i=t.value
var s=this._node.textContent
if(s&&i!==s){if(a){a(o,i,s)}if(r){markMutateDOMAttempt(o,i,s)}if(n){this._node.textContent=i}}}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.value,n=r.wrapperType,o=r.wrapperProps
return React.createElement(n,babelHelpers.extends({},o,{ref:function e(r){return t._node=r}}),a)}
return t}(React.Component)
MutationWatcher.defaultProps={revertMutations:false,wrapperProps:{},wrapperType:"span",markConversion:false}
exports.default=MutationWatcher

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/mutation-watcher-package.js.map 