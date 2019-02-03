KAdefine("javascript/components/formatted-markdown-package/format-content.js", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var i18n=require("../../shared-package/i18n.js")
var timestampRegex=/(\d{1,3}):([0-5]\d)/g
var getTimestampSecondsFromText=function e(r){var t=0
var a=20
var n=timestampRegex.exec(r)
if(n){t=parseFloat(n[1])
a=parseFloat(n[2])}return t*60+a}
var getTimestampFromSeconds=function e(r){var t=Math.floor(r/60)
var a=r-t*60
var n=t.toString()
var i=a.toString()
var s=i.length>1?i:0+i
return{minutes:n,seconds:s}}
var escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"}
var escapeCharacter=function e(r){return escape[r]}
var possible=/[&<>"'`=]/
var badChars=/[&<>"'`=]/g
var escapeExpression=function e(r){if(typeof r!=="string"){if(r&&r.toHTML){return r.toHTML()}else if(r==null){return""}else if(!r){return r+""}r=""+r}if(!possible.test(r)){return r}return r.replace(badChars,escapeCharacter)}
var autolink=function e(r,t){var a=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
return r.replace(a,function(e){if(!/^https?:\/\//.test(e)){e="http://"+e}var r=t?'rel="nofollow"':""
return'<a  href="'+e+'" '+r+">"+e+"</a>"})}
var getVideoTimestampLinkString=function e(r,t,a,n){var i="<img src="+(0,_staticUrl2.default)("/images/play.png")+' class=\'youTubePlayIcon\' aria-hidden="true" alt="" />'
var s=60*Number(t)+Number(a)
var o=i18n._("Click to jump to %(timestamp)s in video",{timestamp:r})
var c=r+" "+o
var m=n?n:i+" "+r
return"<div class='youTubeLink' data-seconds='"+s+"' tabindex='0' role='link' aria-label='"+c+"'>"+m+"</div>"}
var formatTimestamp_=function e(r,t,a){return getVideoTimestampLinkString(r,t,a)}
var VideoTimestampLink=function e(r){return React.createElement("span",{dangerouslySetInnerHTML:{__html:getVideoTimestampLinkString(r.timestamp,r.minutes,r.seconds,r.children)}})}
var formatContent=function e(r,t){var a=escapeExpression(r)
var n=/[\n]/g
a=a.replace(n,"<br>")
a=a.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,r,t,a){return r+"<em>"+t+"</em>"+a})
a=a.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,r,t,a){return r+"<strong>"+t+"</strong>"+a})
a=a.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,r){r=r.replace(/^\s*(<br>)+/,"")
r=r.replace(/(<br>)+\s*$/,"")
return"<pre><code class='discussion-code-format discussion-code-block'>"+r+"</code></pre>"})
a=a.replace(/&#x60;(.*?)&#x60;/g,function(e,r){return"<code class='discussion-code-format discussion-code-inline'>"+r+"</code>"})
a=autolink(a,t)
a=a.replace(timestampRegex,formatTimestamp_)
return a}
module.exports={formatContent:formatContent,getTimestampSecondsFromText:getTimestampSecondsFromText,getTimestampFromSeconds:getTimestampFromSeconds,VideoTimestampLink:VideoTimestampLink}

});
KAdefine("javascript/components/formatted-markdown-package/formatted-markdown.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _formatContent=require("./format-content.js")
var FormattedMarkdown=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=(0,_formatContent.formatContent)(this.props.string,true)
return React.createElement("span",{dangerouslySetInnerHTML:{__html:t}})}
return t}(React.Component)
exports.default=FormattedMarkdown

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/formatted-markdown-package.js.map 