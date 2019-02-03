KAdefine("javascript/components/lazy-load-package/lazy-load-component.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _spinner=require("../../shared-components-package/spinner.jsx")
var _spinner2=babelHelpers.interopRequireDefault(_spinner)
var _eagerPromise=require("../../ssr-package/eager-promise.js")
var _eagerPromise2=babelHelpers.interopRequireDefault(_eagerPromise)
function maybeDefault(e){return e&&e.default||e}var LazyLoadComponent=function(e){babelHelpers.inherits(t,e)
function t(){var n,o,r
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,i=Array(a),s=0;s<a;s++){i[s]=arguments[s]}return r=(n=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),o),o.state={components:o.getInitialComponents()},o._isMounted=false,o.handleGotComponents=function(e){if(!o._isMounted){return}var t=e.map(function(e){return maybeDefault(e)})
o.setState({components:t})},n),babelHelpers.possibleConstructorReturn(o,r)}t.prototype.getInitialComponents=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props,n=t.load,o=t.noSSR
if(o){return undefined}var r=_eagerPromise2.default.maybeUnwrapAll(n())
if(r instanceof Array){return r.map(function(e){return maybeDefault(e)})}return undefined}
t.prototype.componentDidMount=function e(){this._isMounted=true
var t=this.props.load
this.loadComponent(t)}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(this.props.loadKey!==t.loadKey){this.loadComponent(t.load,t)}}
t.prototype.loadComponent=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.props
this.setState({components:this.getInitialComponents(n)})
var o=_eagerPromise2.default.maybeUnwrapAll(t())
if(o instanceof Promise){o.then(this.handleGotComponents)}else{this.handleGotComponents(o)}}
t.prototype.render=function e(){var t=this.state.components
var n=this.props,o=n.children,r=n.loadingIndicator
if(t&&o){return o.apply(undefined,t)}return r()}
return t}(React.Component)
LazyLoadComponent.defaultProps={loadingIndicator:function e(){return React.createElement(_spinner2.default,null)}}
exports.default=LazyLoadComponent

});
KAdefine("javascript/components/lazy-load-package/create-moment-loader.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var createMomentLoader=function e(t){return function(e){babelHelpers.inherits(r,e)
function r(){var t,n,o
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),i=0;i<a;i++){s[i]=arguments[i]}return o=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),n.state={moment:null},n._isMounted=false,t),babelHelpers.possibleConstructorReturn(n,o)}r.prototype.componentDidMount=function e(){var t=this
this._isMounted=true
require.dynimport("moment").then(function(e){return e.default}).then(function(e){if(t._isMounted){t.setState({moment:e})}})}
r.prototype.componentWillUnmount=function e(){this._isMounted=false}
r.prototype.render=function e(){return React.createElement(t,babelHelpers.extends({},this.props,{moment:this.state.moment}))}
return r}(React.Component)}
exports.default=createMomentLoader

});
; KAdefine.updatePathToPackageMap({"javascript/node_modules/moment/index.js": "corelibs-legacy.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/lazy-load-package.js.map 