KAdefine("javascript/scroll-utils-package/scroll-to.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _scrollUtils=require("./scroll-utils.js")
var ScrollTo=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.componentDidMount=function e(){if(this.node&&this.props.scroll){(0,_scrollUtils.scrollElementIntoView)(this.node)}}
r.prototype.render=function e(){var r=this
return React.createElement("div",{ref:function e(t){return r.node=t}},this.props.children)}
return r}(_react.Component)
ScrollTo.defaultProps={scroll:true}
exports.default=ScrollTo

});
KAdefine("javascript/scroll-utils-package/scroll-utils.js", function(require, module, exports) {
var getDocumentHeight=function t(){var e=document.body
var o=document.documentElement
if(!o||!e){return 0}return Math.max(e.scrollHeight,e.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}
var getOffsetBottom=function t(e){if(!e){return 0}var o=e.getBoundingClientRect()
return o.bottom+window.pageYOffset-document.documentElement.clientTop}
var getOffsetTop=function t(e){if(!e){return 0}var o=e.getBoundingClientRect()
return o.top+window.pageYOffset-document.documentElement.clientTop}
var jumpToElementWithinContainer=function t(e,o){var n=o.getBoundingClientRect(),l=n.top
o.scrollTop=e.offsetTop-l}
var scrollToElement=function t(e,o,n){if(!e){return}var l=getOffsetTop(e)
scrollToOffset(l,o,n)}
var scrollToOffset=function t(e,o,n){scrollElementToOffset(window,e,o,n)}
if(!HTMLElement.prototype.scrollTo){HTMLElement.prototype.scrollTo=function(t,e){this.scrollLeft=t
this.scrollTop=e}}var applyUniversalScrollOffset=function t(e,o){if(typeof e.scrollTo==="function"){e.scrollTo(0,o)}else if("scrollTop"in e){e.scrollTop=o}}
var scrollElementToOffset=function t(e,o,n,l){var r=e===window?window.pageYOffset:e.scrollTop
var i=o
var f=i-r
var c=17
var s=n/c
var a=0
var u=setInterval(function(){if(a<s){var t=a/s
var o=(-Math.cos(Math.PI*t)+1)/2
var n=r+f*o
applyUniversalScrollOffset(e,n)
a+=1}else{applyUniversalScrollOffset(e,i)
clearInterval(u)
l&&l()}},c)}
var getScrollContainer=function t(e){if(e===document.body){return window}else if(e==null){return window}else if(e.scrollHeight>e.clientHeight){return e}else{return t(e.parentElement)}}
var SCROLL_ANIMATION_DURATION=750
var scrollElementIntoView=function t(e,o){setTimeout(function(){var t=getScrollContainer(e)
var n=e.getBoundingClientRect()
var l=t===window?{top:0,bottom:window.innerHeight}:t.getBoundingClientRect()
var r=0
var i=t===window?window.scrollY:t.scrollTop
if(n.bottom>l.bottom){var f=n.bottom-l.bottom
if(n.top+f<l.top){f=n.top-l.top}r=i+f}else if(n.top<l.top){var c=n.top-l.top
r=i+c}scrollElementToOffset(t,r,SCROLL_ANIMATION_DURATION,o)},0)}
function scrollElementIntoViewWithKeypad(t,e,o,n){if(t&&o&&e){var l=e.scrollTop
var r=e.getBoundingClientRect().top
var i=e.getBoundingClientRect().bottom
var f=o.getBoundingClientRect().height
var c=i-f
var s=t.getBoundingClientRect().top
var a=t.getBoundingClientRect().bottom
var u=16
var m=function t(o){return scrollElementToOffset(e,l+o,n)}
if(a+u>c){m(a+u-c)}else if(s-u<r){m(s-u-r)}}}module.exports={getDocumentHeight:getDocumentHeight,getOffsetBottom:getOffsetBottom,getOffsetTop:getOffsetTop,jumpToElementWithinContainer:jumpToElementWithinContainer,scrollToElement:scrollToElement,scrollToOffset:scrollToOffset,scrollElementIntoView:scrollElementIntoView,scrollElementIntoViewWithKeypad:scrollElementIntoViewWithKeypad,scrollElementToOffset:scrollElementToOffset,SCROLL_ANIMATION_DURATION:SCROLL_ANIMATION_DURATION}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/scroll-utils-package.js.map 