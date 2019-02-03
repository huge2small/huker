KAdefine("javascript/components/link-package/link.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var DEFAULT_HREF="javascript:void(0)"
var Link=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,t=r.children,a=r.className,i=r.highlighted,l=r.href,s=r.inlineStyles,n=r.referrer,o=r.style,h=r.target,p=r.testId,c=r.element,d=babelHelpers.objectWithoutProperties(r,["children","className","highlighted","href","inlineStyles","referrer","style","target","testId","element"])
var f=l?l.split("#"):[DEFAULT_HREF],u=f[0],b=f[1]
var v=u
if(n){if(v.indexOf("?")>-1){v+="&ref="+n}else{v+="?ref="+n}}if(b){v+="#"+b}var y=[styles.link,i&&styles.highlighted]
if(Array.isArray(o)){y.push.apply(y,o)}else{y.push(o)}var g=a?" "+a:""
var m=c==="a"?{href:v}:{to:v}
var H=d.rel
if(h==="_blank"&&!H){H="noopener noreferrer"}return React.createElement(c,babelHelpers.extends({"data-test-id":p},d,m,{className:_aphrodite.css.apply(undefined,y)+g,style:s,target:h,rel:H}),t)}
return r}(React.Component)
Link.defaultProps={highlighted:false,href:DEFAULT_HREF,style:[],element:"a"}
var styles=_aphrodite.StyleSheet.create({link:{backgroundColor:"transparent",color:"inherit",textDecoration:"none",":hover":{textDecoration:"underline"}},highlighted:{textDecoration:"underline"}})
module.exports=Link

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/link-package.js.map 