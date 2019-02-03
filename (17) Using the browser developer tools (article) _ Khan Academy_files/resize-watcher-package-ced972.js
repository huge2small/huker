KAdefine("javascript/components/resize-watcher-package/resize-watcher.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var ResizeWatcher=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),a=0;a<n;a++){o[a]=arguments[a]}return s=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),i),i.state={width:0,height:0},i.setSize=function(){var e=i.getDimensions()
if(e){i.setState(e)}},r),babelHelpers.possibleConstructorReturn(i,s)}t.prototype.componentDidMount=function e(){var t=this.props,r=t.refreshMs,i=t.enableRefresh
this.setSize()
if(!i){return}window.addEventListener("resize",this.setSize)
this.timeout=setInterval(this.setSize,r)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("resize",this.setSize)
if(this.timeout){clearInterval(this.timeout)}}
t.prototype.getDimensions=function e(){var t=this.state,r=t.width,i=t.height
var s=_reactDom2.default.findDOMNode(this)
var n=s?s.getBoundingClientRect():{width:0,height:0}
if(n.width===r&&n.height===i){return}return{width:n.width,height:n.height}}
t.prototype.render=function e(){var t=this.props.children
var r=this.state,i=r.width,s=r.height
return t(i,s)}
return t}(_react.Component)
ResizeWatcher.defaultProps={refreshMs:100,enableRefresh:true}
exports.default=ResizeWatcher

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/resize-watcher-package.js.map 