KAdefine("third_party/javascript-khansrc/react-popper/popper.js", function(require, module, exports) {
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):e.Popper=t()})(this,function(){"use strict"
var e=typeof window!=="undefined"&&typeof document!=="undefined"
var t=["Edge","Trident","Firefox"]
var r=0
for(var n=0;n<t.length;n+=1){if(e&&navigator.userAgent.indexOf(t[n])>=0){r=1
break}}function o(e){var t=false
return function(){if(t){return}t=true
window.Promise.resolve().then(function(){t=false
e()})}}function i(e){var t=false
return function(){if(!t){t=true
setTimeout(function(){t=false
e()},r)}}}var a=e&&window.Promise
var f=a?o:i
function s(e){var t={}
return e&&t.toString.call(e)==="[object Function]"}function l(e,t){if(e.nodeType!==1){return[]}var r=getComputedStyle(e,null)
return t?r[t]:r}function p(e){if(e.nodeName==="HTML"){return e}return e.parentNode||e.host}function u(e){if(!e){return document.body}switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body
case"#document":return e.body}var t=l(e),r=t.overflow,n=t.overflowX,o=t.overflowY
if(/(auto|scroll|overlay)/.test(r+o+n)){return e}return u(p(e))}var d=e&&!!(window.MSInputMethodContext&&document.documentMode)
var c=e&&/MSIE 10/.test(navigator.userAgent)
function h(e){if(e===11){return d}if(e===10){return c}return d||c}function v(e){if(!e){return document.documentElement}var t=h(10)?document.body:null
var r=e.offsetParent
while(r===t&&e.nextElementSibling){r=(e=e.nextElementSibling).offsetParent}var n=r&&r.nodeName
if(!n||n==="BODY"||n==="HTML"){return e?e.ownerDocument.documentElement:document.documentElement}if(["TD","TABLE"].indexOf(r.nodeName)!==-1&&l(r,"position")==="static"){return v(r)}return r}function m(e){var t=e.nodeName
if(t==="BODY"){return false}return t==="HTML"||v(e.firstElementChild)===e}function g(e){if(e.parentNode!==null){return g(e.parentNode)}return e}function b(e,t){if(!e||!e.nodeType||!t||!t.nodeType){return document.documentElement}var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING
var n=r?e:t
var o=r?t:e
var i=document.createRange()
i.setStart(n,0)
i.setEnd(o,0)
var a=i.commonAncestorContainer
if(e!==a&&t!==a||n.contains(o)){if(m(a)){return a}return v(a)}var f=g(e)
if(f.host){return b(f.host,t)}else{return b(e,g(t).host)}}function w(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top"
var r=t==="top"?"scrollTop":"scrollLeft"
var n=e.nodeName
if(n==="BODY"||n==="HTML"){var o=e.ownerDocument.documentElement
var i=e.ownerDocument.scrollingElement||o
return i[r]}return e[r]}function y(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false
var n=w(t,"top")
var o=w(t,"left")
var i=r?-1:1
e.top+=n*i
e.bottom+=n*i
e.left+=o*i
e.right+=o*i
return e}function E(e,t){var r=t==="x"?"Left":"Top"
var n=r==="Left"?"Right":"Bottom"
return parseFloat(e["border"+r+"Width"],10)+parseFloat(e["border"+n+"Width"],10)}function x(e,t,r,n){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],h(10)?parseInt(r["offset"+e])+parseInt(n["margin"+(e==="Height"?"Top":"Left")])+parseInt(n["margin"+(e==="Height"?"Bottom":"Right")]):0)}function O(e){var t=e.body
var r=e.documentElement
var n=h(10)&&getComputedStyle(r)
return{height:x("Height",t,r,n),width:x("Width",t,r,n)}}var L=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}
var T=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||false
n.configurable=true
if("value"in n)n.writable=true
Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r)
if(n)e(t,n)
return t}}()
var M=function(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}
var N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
function C(e){return N({},e,{right:e.left+e.width,bottom:e.top+e.height})}function D(e){var t={}
try{if(h(10)){t=e.getBoundingClientRect()
var r=w(e,"top")
var n=w(e,"left")
t.top+=r
t.left+=n
t.bottom+=r
t.right+=n}else{t=e.getBoundingClientRect()}}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top}
var i=e.nodeName==="HTML"?O(e.ownerDocument):{}
var a=i.width||e.clientWidth||o.right-o.left
var f=i.height||e.clientHeight||o.bottom-o.top
var s=e.offsetWidth-a
var p=e.offsetHeight-f
if(s||p){var u=l(e)
s-=E(u,"x")
p-=E(u,"y")
o.width-=s
o.height-=p}return C(o)}function F(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false
var n=h(10)
var o=t.nodeName==="HTML"
var i=D(e)
var a=D(t)
var f=u(e)
var s=l(t)
var p=parseFloat(s.borderTopWidth,10)
var d=parseFloat(s.borderLeftWidth,10)
if(r&&o){a.top=Math.max(a.top,0)
a.left=Math.max(a.left,0)}var c=C({top:i.top-a.top-p,left:i.left-a.left-d,width:i.width,height:i.height})
c.marginTop=0
c.marginLeft=0
if(!n&&o){var v=parseFloat(s.marginTop,10)
var m=parseFloat(s.marginLeft,10)
c.top-=p-v
c.bottom-=p-v
c.left-=d-m
c.right-=d-m
c.marginTop=v
c.marginLeft=m}if(n&&!r?t.contains(f):t===f&&f.nodeName!=="BODY"){c=y(c,t)}return c}function k(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
var r=e.ownerDocument.documentElement
var n=F(e,r)
var o=Math.max(r.clientWidth,window.innerWidth||0)
var i=Math.max(r.clientHeight,window.innerHeight||0)
var a=!t?w(r):0
var f=!t?w(r,"left"):0
var s={top:a-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:i}
return C(s)}function S(e){var t=e.nodeName
if(t==="BODY"||t==="HTML"){return false}if(l(e,"position")==="fixed"){return true}return S(p(e))}function W(e){if(!e||!e.parentElement||h()){return document.documentElement}var t=e.parentElement
while(t&&l(t,"transform")==="none"){t=t.parentElement}return t||document.documentElement}function H(e,t,r,n){var o=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false
var i={top:0,left:0}
var a=o?W(e):b(e,t)
if(n==="viewport"){i=k(a,o)}else{var f=void 0
if(n==="scrollParent"){f=u(p(t))
if(f.nodeName==="BODY"){f=e.ownerDocument.documentElement}}else if(n==="window"){f=e.ownerDocument.documentElement}else{f=n}var s=F(f,a,o)
if(f.nodeName==="HTML"&&!S(a)){var l=O(e.ownerDocument),d=l.height,c=l.width
i.top+=s.top-s.marginTop
i.bottom=d+s.top
i.left+=s.left-s.marginLeft
i.right=c+s.left}else{i=s}}r=r||0
var h=typeof r==="number"
i.left+=h?r:r.left||0
i.top+=h?r:r.top||0
i.right-=h?r:r.right||0
i.bottom-=h?r:r.bottom||0
return i}function P(e){var t=e.width,r=e.height
return t*r}function A(e,t,r,n,o){var i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0
if(e.indexOf("auto")===-1){return e}var a=H(r,n,i,o)
var f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}}
var s=Object.keys(f).map(function(e){return N({key:e},f[e],{area:P(f[e])})}).sort(function(e,t){return t.area-e.area})
var l=s.filter(function(e){var t=e.width,n=e.height
return t>=r.clientWidth&&n>=r.clientHeight})
var p=l.length>0?l[0].key:s[0].key
var u=e.split("-")[1]
return p+(u?"-"+u:"")}function B(e,t,r){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null
var o=n?W(t):b(t,r)
return F(r,o,n)}function I(e){var t=getComputedStyle(e)
var r=parseFloat(t.marginTop)+parseFloat(t.marginBottom)
var n=parseFloat(t.marginLeft)+parseFloat(t.marginRight)
var o={width:e.offsetWidth+n,height:e.offsetHeight+r}
return o}function j(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"}
return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function R(e,t,r){r=r.split("-")[0]
var n=I(e)
var o={width:n.width,height:n.height}
var i=["right","left"].indexOf(r)!==-1
var a=i?"top":"left"
var f=i?"left":"top"
var s=i?"height":"width"
var l=!i?"height":"width"
o[a]=t[a]+t[s]/2-n[s]/2
if(r===f){o[f]=t[f]-n[l]}else{o[f]=t[j(f)]}return o}function U(e,t){if(Array.prototype.find){return e.find(t)}return e.filter(t)[0]}function Y(e,t,r){if(Array.prototype.findIndex){return e.findIndex(function(e){return e[t]===r})}var n=U(e,function(e){return e[t]===r})
return e.indexOf(n)}function q(e,t,r){var n=r===undefined?e:e.slice(0,Y(e,"name",r))
n.forEach(function(e){if(e["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var r=e["function"]||e.fn
if(e.enabled&&s(r)){t.offsets.popper=C(t.offsets.popper)
t.offsets.reference=C(t.offsets.reference)
t=r(t,e)}})
return t}function K(){if(this.state.isDestroyed){return}var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}}
e.offsets.reference=B(this.state,this.popper,this.reference,this.options.positionFixed)
e.placement=A(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding)
e.originalPlacement=e.placement
e.positionFixed=this.options.positionFixed
e.offsets.popper=R(this.popper,e.offsets.reference,e.placement)
e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute"
e=q(this.modifiers,e)
if(!this.state.isCreated){this.state.isCreated=true
this.options.onCreate(e)}else{this.options.onUpdate(e)}}function z(e,t){return e.some(function(e){var r=e.name,n=e.enabled
return n&&r===t})}function G(e){var t=[false,"ms","Webkit","Moz","O"]
var r=e.charAt(0).toUpperCase()+e.slice(1)
for(var n=0;n<t.length;n++){var o=t[n]
var i=o?""+o+r:e
if(typeof document.body.style[i]!=="undefined"){return i}}return null}function V(){this.state.isDestroyed=true
if(z(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement")
this.popper.style.position=""
this.popper.style.top=""
this.popper.style.left=""
this.popper.style.right=""
this.popper.style.bottom=""
this.popper.style.willChange=""
this.popper.style[G("transform")]=""}this.disableEventListeners()
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}function X(e){var t=e.ownerDocument
return t?t.defaultView:window}function J(e,t,r,n){var o=e.nodeName==="BODY"
var i=o?e.ownerDocument.defaultView:e
i.addEventListener(t,r,{passive:true})
if(!o){J(u(i.parentNode),t,r,n)}n.push(i)}function Q(e,t,r,n){r.updateBound=n
X(e).addEventListener("resize",r.updateBound,{passive:true})
var o=u(e)
J(o,"scroll",r.updateBound,r.scrollParents)
r.scrollElement=o
r.eventsEnabled=true
return r}function Z(){if(!this.state.eventsEnabled){this.state=Q(this.reference,this.options,this.state,this.scheduleUpdate)}}function ee(e,t){X(e).removeEventListener("resize",t.updateBound)
t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)})
t.updateBound=null
t.scrollParents=[]
t.scrollElement=null
t.eventsEnabled=false
return t}function te(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate)
this.state=ee(this.reference,this.state)}}function re(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}function ne(e,t){Object.keys(t).forEach(function(r){var n=""
if(["width","height","top","right","bottom","left"].indexOf(r)!==-1&&re(t[r])){n="px"}e.style[r]=t[r]+n})}function oe(e,t){Object.keys(t).forEach(function(r){var n=t[r]
if(n!==false){e.setAttribute(r,t[r])}else{e.removeAttribute(r)}})}function ie(e){ne(e.instance.popper,e.styles)
oe(e.instance.popper,e.attributes)
if(e.arrowElement&&Object.keys(e.arrowStyles).length){ne(e.arrowElement,e.arrowStyles)}return e}function ae(e,t,r,n,o){var i=B(o,t,e,r.positionFixed)
var a=A(r.placement,i,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding)
t.setAttribute("x-placement",a)
ne(t,{position:r.positionFixed?"fixed":"absolute"})
return r}function fe(e,t){var r=t.x,n=t.y
var o=e.offsets.popper
var i=U(e.instance.modifiers,function(e){return e.name==="applyStyle"}).gpuAcceleration
if(i!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var a=i!==undefined?i:t.gpuAcceleration
var f=v(e.instance.popper)
var s=D(f)
var l={position:o.position}
var p={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)}
var u=r==="bottom"?"top":"bottom"
var d=n==="right"?"left":"right"
var c=G("transform")
var h=void 0,m=void 0
if(u==="bottom"){if(f.nodeName==="HTML"){m=-f.clientHeight+p.bottom}else{m=-s.height+p.bottom}}else{m=p.top}if(d==="right"){if(f.nodeName==="HTML"){h=-f.clientWidth+p.right}else{h=-s.width+p.right}}else{h=p.left}if(a&&c){l[c]="translate3d("+h+"px, "+m+"px, 0)"
l[u]=0
l[d]=0
l.willChange="transform"}else{var g=u==="bottom"?-1:1
var b=d==="right"?-1:1
l[u]=m*g
l[d]=h*b
l.willChange=u+", "+d}var w={"x-placement":e.placement}
e.attributes=N({},w,e.attributes)
e.styles=N({},l,e.styles)
e.arrowStyles=N({},e.offsets.arrow,e.arrowStyles)
return e}function se(e,t,r){var n=U(e,function(e){var r=e.name
return r===t})
var o=!!n&&e.some(function(e){return e.name===r&&e.enabled&&e.order<n.order})
if(!o){var i="`"+t+"`"
var a="`"+r+"`"
console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function le(e,t){var r
if(!se(e.instance.modifiers,"arrow","keepTogether")){return e}var n=t.element
if(typeof n==="string"){n=e.instance.popper.querySelector(n)
if(!n){return e}}else{if(!e.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!")
return e}}var o=e.placement.split("-")[0]
var i=e.offsets,a=i.popper,f=i.reference
var s=["left","right"].indexOf(o)!==-1
var p=s?"height":"width"
var u=s?"Top":"Left"
var d=u.toLowerCase()
var c=s?"left":"top"
var h=s?"bottom":"right"
var v=I(n)[p]
if(f[h]-v<a[d]){e.offsets.popper[d]-=a[d]-(f[h]-v)}if(f[d]+v>a[h]){e.offsets.popper[d]+=f[d]+v-a[h]}e.offsets.popper=C(e.offsets.popper)
var m=f[d]+f[p]/2-v/2
var g=l(e.instance.popper)
var b=parseFloat(g["margin"+u],10)
var w=parseFloat(g["border"+u+"Width"],10)
var y=m-e.offsets.popper[d]-b-w
y=Math.max(Math.min(a[p]-v,y),0)
e.arrowElement=n
e.offsets.arrow=(r={},M(r,d,Math.round(y)),M(r,c,""),r)
return e}function pe(e){if(e==="end"){return"start"}else if(e==="start"){return"end"}return e}var ue=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"]
var de=ue.slice(3)
function ce(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
var r=de.indexOf(e)
var n=de.slice(r+1).concat(de.slice(0,r))
return t?n.reverse():n}var he={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"}
function ve(e,t){if(z(e.instance.modifiers,"inner")){return e}if(e.flipped&&e.placement===e.originalPlacement){return e}var r=H(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed)
var n=e.placement.split("-")[0]
var o=j(n)
var i=e.placement.split("-")[1]||""
var a=[]
switch(t.behavior){case he.FLIP:a=[n,o]
break
case he.CLOCKWISE:a=ce(n)
break
case he.COUNTERCLOCKWISE:a=ce(n,true)
break
default:a=t.behavior}a.forEach(function(f,s){if(n!==f||a.length===s+1){return e}n=e.placement.split("-")[0]
o=j(n)
var l=e.offsets.popper
var p=e.offsets.reference
var u=Math.floor
var d=n==="left"&&u(l.right)>u(p.left)||n==="right"&&u(l.left)<u(p.right)||n==="top"&&u(l.bottom)>u(p.top)||n==="bottom"&&u(l.top)<u(p.bottom)
var c=u(l.left)<u(r.left)
var h=u(l.right)>u(r.right)
var v=u(l.top)<u(r.top)
var m=u(l.bottom)>u(r.bottom)
var g=n==="left"&&c||n==="right"&&h||n==="top"&&v||n==="bottom"&&m
var b=["top","bottom"].indexOf(n)!==-1
var w=!!t.flipVariations&&(b&&i==="start"&&c||b&&i==="end"&&h||!b&&i==="start"&&v||!b&&i==="end"&&m)
if(d||g||w){e.flipped=true
if(d||g){n=a[s+1]}if(w){i=pe(i)}e.placement=n+(i?"-"+i:"")
e.offsets.popper=N({},e.offsets.popper,R(e.instance.popper,e.offsets.reference,e.placement))
e=q(e.instance.modifiers,e,"flip")}})
return e}function me(e){var t=e.offsets,r=t.popper,n=t.reference
var o=e.placement.split("-")[0]
var i=Math.floor
var a=["top","bottom"].indexOf(o)!==-1
var f=a?"right":"bottom"
var s=a?"left":"top"
var l=a?"width":"height"
if(r[f]<i(n[s])){e.offsets.popper[s]=i(n[s])-r[l]}if(r[s]>i(n[f])){e.offsets.popper[s]=i(n[f])}return e}function ge(e,t,r,n){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
var i=+o[1]
var a=o[2]
if(!i){return e}if(a.indexOf("%")===0){var f=void 0
switch(a){case"%p":f=r
break
case"%":case"%r":default:f=n}var s=C(f)
return s[t]/100*i}else if(a==="vh"||a==="vw"){var l=void 0
if(a==="vh"){l=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{l=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return l/100*i}else{return i}}function be(e,t,r,n){var o=[0,0]
var i=["right","left"].indexOf(n)!==-1
var a=e.split(/(\+|\-)/).map(function(e){return e.trim()})
var f=a.indexOf(U(a,function(e){return e.search(/,|\s/)!==-1}))
if(a[f]&&a[f].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}var s=/\s*,\s*|\s+/
var l=f!==-1?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a]
l=l.map(function(e,n){var o=(n===1?!i:i)?"height":"width"
var a=false
return e.reduce(function(e,t){if(e[e.length-1]===""&&["+","-"].indexOf(t)!==-1){e[e.length-1]=t
a=true
return e}else if(a){e[e.length-1]+=t
a=false
return e}else{return e.concat(t)}},[]).map(function(e){return ge(e,o,t,r)})})
l.forEach(function(e,t){e.forEach(function(r,n){if(re(r)){o[t]+=r*(e[n-1]==="-"?-1:1)}})})
return o}function we(e,t){var r=t.offset
var n=e.placement,o=e.offsets,i=o.popper,a=o.reference
var f=n.split("-")[0]
var s=void 0
if(re(+r)){s=[+r,0]}else{s=be(r,i,a,f)}if(f==="left"){i.top+=s[0]
i.left-=s[1]}else if(f==="right"){i.top+=s[0]
i.left+=s[1]}else if(f==="top"){i.left+=s[0]
i.top-=s[1]}else if(f==="bottom"){i.left+=s[0]
i.top+=s[1]}e.popper=i
return e}function ye(e,t){var r=t.boundariesElement||v(e.instance.popper)
if(e.instance.reference===r){r=v(r)}var n=G("transform")
var o=e.instance.popper.style
var i=o.top,a=o.left,f=o[n]
o.top=""
o.left=""
o[n]=""
var s=H(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed)
o.top=i
o.left=a
o[n]=f
t.boundaries=s
var l=t.priority
var p=e.offsets.popper
var u={primary:function e(r){var n=p[r]
if(p[r]<s[r]&&!t.escapeWithReference){n=Math.max(p[r],s[r])}return M({},r,n)},secondary:function e(r){var n=r==="right"?"left":"top"
var o=p[n]
if(p[r]>s[r]&&!t.escapeWithReference){o=Math.min(p[n],s[r]-(r==="right"?p.width:p.height))}return M({},n,o)}}
l.forEach(function(e){var t=["left","top"].indexOf(e)!==-1?"primary":"secondary"
p=N({},p,u[t](e))})
e.offsets.popper=p
return e}function Ee(e){var t=e.placement
var r=t.split("-")[0]
var n=t.split("-")[1]
if(n){var o=e.offsets,i=o.reference,a=o.popper
var f=["bottom","top"].indexOf(r)!==-1
var s=f?"left":"top"
var l=f?"width":"height"
var p={start:M({},s,i[s]),end:M({},s,i[s]+i[l]-a[l])}
e.offsets.popper=N({},a,p[n])}return e}function xe(e){if(!se(e.instance.modifiers,"hide","preventOverflow")){return e}var t=e.offsets.reference
var r=U(e.instance.modifiers,function(e){return e.name==="preventOverflow"}).boundaries
if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(e.hide===true){return e}e.hide=true
e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===false){return e}e.hide=false
e.attributes["x-out-of-boundaries"]=false}return e}function Oe(e){var t=e.placement
var r=t.split("-")[0]
var n=e.offsets,o=n.popper,i=n.reference
var a=["left","right"].indexOf(r)!==-1
var f=["top","left"].indexOf(r)===-1
o[a?"left":"top"]=i[r]-(f?o[a?"width":"height"]:0)
e.placement=j(t)
e.offsets.popper=C(o)
return e}var Le={shift:{order:100,enabled:true,fn:Ee},offset:{order:200,enabled:true,fn:we,offset:0},preventOverflow:{order:300,enabled:true,fn:ye,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:me},arrow:{order:500,enabled:true,fn:le,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:ve,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:false,fn:Oe},hide:{order:800,enabled:true,fn:xe},computeStyle:{order:850,enabled:true,fn:fe,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:ie,onLoad:ae,gpuAcceleration:undefined}}
var Te={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function e(){},onUpdate:function e(){},modifiers:Le}
var Me=function(){function e(t,r){var n=this
var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{}
L(this,e)
this.scheduleUpdate=function(){return requestAnimationFrame(n.update)}
this.update=f(this.update.bind(this))
this.options=N({},e.Defaults,o)
this.state={isDestroyed:false,isCreated:false,scrollParents:[]}
this.reference=t&&t.jquery?t[0]:t
this.popper=r&&r.jquery?r[0]:r
this.options.modifiers={}
Object.keys(N({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){n.options.modifiers[t]=N({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})})
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return N({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order})
this.modifiers.forEach(function(e){if(e.enabled&&s(e.onLoad)){e.onLoad(n.reference,n.popper,n.options,e,n.state)}})
this.update()
var i=this.options.eventsEnabled
if(i){this.enableEventListeners()}this.state.eventsEnabled=i}T(e,[{key:"update",value:function e(){return K.call(this)}},{key:"destroy",value:function e(){return V.call(this)}},{key:"enableEventListeners",value:function e(){return Z.call(this)}},{key:"disableEventListeners",value:function e(){return te.call(this)}}])
return e}()
Me.Utils=(typeof window!=="undefined"?window:global).PopperUtils
Me.placements=ue
Me.Defaults=Te
return Me})

});
KAdefine("javascript/node_modules/popper/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/react-popper/popper.js")

});
KAdefine("third_party/javascript-khansrc/react-popper/react-popper.js", function(require, module, exports) {
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports,require("react"),require("popper")):typeof define==="function"&&define.amd?define(["exports","react","popper.js"],t):t(e.ReactPopper={},e.React,e.Popper)})(this,function(e,t,r){"use strict"
var n="default"in t?t["default"]:t
r=r&&r.hasOwnProperty("default")?r["default"]:r
var o=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{}
function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function i(e,t){return t={exports:{}},e(t,t.exports),t.exports}var u=Object.getOwnPropertySymbols
var f=Object.prototype.hasOwnProperty
var c=Object.prototype.propertyIsEnumerable
function s(e){if(e===null||e===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(e)}function p(){try{if(!Object.assign){return false}var e=new String("abc")
e[5]="de"
if(Object.getOwnPropertyNames(e)[0]==="5"){return false}var t={}
for(var r=0;r<10;r++){t["_"+String.fromCharCode(r)]=r}var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if(n.join("")!=="0123456789"){return false}var o={}
"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e})
if(Object.keys(Object.assign({},o)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(e){return false}}var l=p()?Object.assign:function(e,t){var r
var n=s(e)
var o
for(var a=1;a<arguments.length;a++){r=Object(arguments[a])
for(var i in r){if(f.call(r,i)){n[i]=r[i]}}if(u){o=u(r)
for(var p=0;p<o.length;p++){if(c.call(r,o[p])){n[o[p]]=r[o[p]]}}}}return n}
var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
var v=d
var y=function(){}
{var h=v
var b={}
y=function(e){var t="Warning: "+e
if(typeof console!=="undefined"){console.error(t)}try{throw new Error(t)}catch(e){}}}function m(e,t,r,n,o){{for(var a in e){if(e.hasOwnProperty(a)){var i
try{if(typeof e[a]!=="function"){var u=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; "+"it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.")
u.name="Invariant Violation"
throw u}i=e[a](t,a,n,r,null,h)}catch(e){i=e}if(i&&!(i instanceof Error)){y((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker "+"function must return `null` or an `Error` but returned a "+typeof i+". "+"You may have forgotten to pass an argument to the type checker "+"creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and "+"shape all require an argument).")}if(i instanceof Error&&!(i.message in b)){b[i.message]=true
var f=o?o():""
y("Failed "+r+" type: "+i.message+(f!=null?f:""))}}}}}var g=m
var w=function(){}
{w=function(e){var t="Warning: "+e
if(typeof console!=="undefined"){console.error(t)}try{throw new Error(t)}catch(e){}}}function O(){return null}var x=function(e,t){var r=typeof Symbol==="function"&&Symbol.iterator
var n="@@iterator"
function o(e){var t=e&&(r&&e[r]||e[n])
if(typeof t==="function"){return t}}var a="<<anonymous>>"
var i={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:p(),arrayOf:d,element:y(),instanceOf:h,node:P(),objectOf:m,oneOf:b,oneOfType:x,shape:j,exact:E}
function u(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function f(e){this.message=e
this.stack=""}f.prototype=Error.prototype
function c(e){{var r={}
var n=0}function o(o,i,u,c,s,p,l){c=c||a
p=p||u
if(l!==v){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use `PropTypes.checkPropTypes()` to call them. "+"Read more at http://fb.me/use-check-prop-types")
d.name="Invariant Violation"
throw d}else if(typeof console!=="undefined"){var y=c+":"+u
if(!r[y]&&n<3){w("You are manually calling a React.PropTypes validation "+"function for the `"+p+"` prop on `"+c+"`. This is deprecated "+"and will throw in the standalone `prop-types` package. "+"You may be seeing this warning due to a third-party PropTypes "+"library. See https://fb.me/react-warning-dont-call-proptypes "+"for details.")
r[y]=true
n++}}}if(i[u]==null){if(o){if(i[u]===null){return new f("The "+s+" `"+p+"` is marked as required "+("in `"+c+"`, but its value is `null`."))}return new f("The "+s+" `"+p+"` is marked as required in "+("`"+c+"`, but its value is `undefined`."))}return null}else{return e(i,u,c,s,p)}}var i=o.bind(null,false)
i.isRequired=o.bind(null,true)
return i}function s(e){function t(t,r,n,o,a,i){var u=t[r]
var c=S(u)
if(c!==e){var s=T(u)
return new f("Invalid "+o+" `"+a+"` of type "+("`"+s+"` supplied to `"+n+"`, expected ")+("`"+e+"`."))}return null}return c(t)}function p(){return c(O)}function d(e){function t(t,r,n,o,a){if(typeof e!=="function"){return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.")}var i=t[r]
if(!Array.isArray(i)){var u=S(i)
return new f("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an array."))}for(var c=0;c<i.length;c++){var s=e(i,c,n,o,a+"["+c+"]",v)
if(s instanceof Error){return s}}return null}return c(t)}function y(){function t(t,r,n,o,a){var i=t[r]
if(!e(i)){var u=S(i)
return new f("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return c(t)}function h(e){function t(t,r,n,o,i){if(!(t[r]instanceof e)){var u=e.name||a
var c=N(t[r])
return new f("Invalid "+o+" `"+i+"` of type "+("`"+c+"` supplied to `"+n+"`, expected ")+("instance of `"+u+"`."))}return null}return c(t)}function b(e){if(!Array.isArray(e)){w("Invalid argument supplied to oneOf, expected an instance of array.")
return O}function t(t,r,n,o,a){var i=t[r]
for(var c=0;c<e.length;c++){if(u(i,e[c])){return null}}var s=JSON.stringify(e)
return new f("Invalid "+o+" `"+a+"` of value `"+i+"` "+("supplied to `"+n+"`, expected one of "+s+"."))}return c(t)}function m(e){function t(t,r,n,o,a){if(typeof e!=="function"){return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.")}var i=t[r]
var u=S(i)
if(u!=="object"){return new f("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an object."))}for(var c in i){if(i.hasOwnProperty(c)){var s=e(i,c,n,o,a+"."+c,v)
if(s instanceof Error){return s}}}return null}return c(t)}function x(e){if(!Array.isArray(e)){w("Invalid argument supplied to oneOfType, expected an instance of array.")
return O}for(var t=0;t<e.length;t++){var r=e[t]
if(typeof r!=="function"){w("Invalid argument supplied to oneOfType. Expected an array of check functions, but "+"received "+A(r)+" at index "+t+".")
return O}}function n(t,r,n,o,a){for(var i=0;i<e.length;i++){var u=e[i]
if(u(t,r,n,o,a,v)==null){return null}}return new f("Invalid "+o+" `"+a+"` supplied to "+("`"+n+"`."))}return c(n)}function P(){function e(e,t,r,n,o){if(!R(e[t])){return new f("Invalid "+n+" `"+o+"` supplied to "+("`"+r+"`, expected a ReactNode."))}return null}return c(e)}function j(e){function t(t,r,n,o,a){var i=t[r]
var u=S(i)
if(u!=="object"){return new f("Invalid "+o+" `"+a+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."))}for(var c in e){var s=e[c]
if(!s){continue}var p=s(i,c,n,o,a+"."+c,v)
if(p){return p}}return null}return c(t)}function E(e){function t(t,r,n,o,a){var i=t[r]
var u=S(i)
if(u!=="object"){return new f("Invalid "+o+" `"+a+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."))}var c=l({},t[r],e)
for(var s in c){var p=e[s]
if(!p){return new f("Invalid "+o+" `"+a+"` key `"+s+"` supplied to `"+n+"`."+"\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))}var d=p(i,s,n,o,a+"."+s,v)
if(d){return d}}return null}return c(t)}function R(t){switch(typeof t){case"number":case"string":case"undefined":return true
case"boolean":return!t
case"object":if(Array.isArray(t)){return t.every(R)}if(t===null||e(t)){return true}var r=o(t)
if(r){var n=r.call(t)
var a
if(r!==t.entries){while(!(a=n.next()).done){if(!R(a.value)){return false}}}else{while(!(a=n.next()).done){var i=a.value
if(i){if(!R(i[1])){return false}}}}}else{return false}return true
default:return false}}function I(e,t){if(e==="symbol"){return true}if(t["@@toStringTag"]==="Symbol"){return true}if(typeof Symbol==="function"&&t instanceof Symbol){return true}return false}function S(e){var t=typeof e
if(Array.isArray(e)){return"array"}if(e instanceof RegExp){return"object"}if(I(t,e)){return"symbol"}return t}function T(e){if(typeof e==="undefined"||e===null){return""+e}var t=S(e)
if(t==="object"){if(e instanceof Date){return"date"}else if(e instanceof RegExp){return"regexp"}}return t}function A(e){var t=T(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function N(e){if(!e.constructor||!e.constructor.name){return a}return e.constructor.name}i.checkPropTypes=g
i.PropTypes=i
return i}
var P=i(function(e){{var t=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103
var r=function(e){return typeof e==="object"&&e!==null&&e.$$typeof===t}
var n=true
e.exports=x(r,n)}})
var j="__global_unique_id__"
var E=function(){return o[j]=(o[j]||0)+1}
function R(e){return function(){return e}}var I=function e(){}
I.thatReturns=R
I.thatReturnsFalse=R(false)
I.thatReturnsTrue=R(true)
I.thatReturnsNull=R(null)
I.thatReturnsThis=function(){return this}
I.thatReturnsArgument=function(e){return e}
var S=I
var T=S
{var A=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}var a=0
var i="Warning: "+t.replace(/%s/g,function(){return n[a++]})
if(typeof console!=="undefined"){console.error(i)}try{throw new Error(i)}catch(e){}}
T=function e(t,r){if(r===undefined){throw new Error("`warning(condition, format, ...args)` requires a warning "+"message argument")}if(r.indexOf("Failed Composite propType: ")===0){return}if(!t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++){o[a-2]=arguments[a]}A.apply(undefined,[r].concat(o))}}}var N=T
var C=i(function(e,t){t.__esModule=true
var r=u(n)
var o=u(P)
var a=u(E)
var i=u(N)
function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function s(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=1073741823
function l(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function d(e){var t=[]
return{on:function e(r){t.push(r)},off:function e(r){t=t.filter(function(e){return e!==r})},get:function t(){return e},set:function r(n,o){e=n
t.forEach(function(t){return t(e,o)})}}}function v(e){return Array.isArray(e)?e[0]:e}function y(e,t){var r,u
var y="__create-react-context-"+(0,a.default)()+"__"
var h=function(e){s(r,e)
function r(){var t,n,o
f(this,r)
for(var a=arguments.length,i=Array(a),u=0;u<a;u++){i[u]=arguments[u]}return o=(t=(n=c(this,e.call.apply(e,[this].concat(i))),n),n.emitter=d(n.props.value),t),c(n,o)}r.prototype.getChildContext=function e(){var t
return t={},t[y]=this.emitter,t}
r.prototype.componentWillReceiveProps=function e(r){if(this.props.value!==r.value){var n=this.props.value
var o=r.value
var a=void 0
if(l(n,o)){a=0}else{a=typeof t==="function"?t(n,o):p
{(0,i.default)((a&p)===a,"calculateChangedBits: Expected the return value to be a "+"31-bit integer. Instead received: %s",a)}a|=0
if(a!==0){this.emitter.set(r.value,a)}}}}
r.prototype.render=function e(){return this.props.children}
return r}(n.Component)
h.childContextTypes=(r={},r[y]=o.default.object.isRequired,r)
var b=function(t){s(r,t)
function r(){var e,n,o
f(this,r)
for(var a=arguments.length,i=Array(a),u=0;u<a;u++){i[u]=arguments[u]}return o=(e=(n=c(this,t.call.apply(t,[this].concat(i))),n),n.state={value:n.getValue()},n.onUpdate=function(e,t){var r=n.observedBits|0
if((r&t)!==0){n.setState({value:n.getValue()})}},e),c(n,o)}r.prototype.componentWillReceiveProps=function e(t){var r=t.observedBits
this.observedBits=r===undefined||r===null?p:r}
r.prototype.componentDidMount=function e(){if(this.context[y]){this.context[y].on(this.onUpdate)}var t=this.props.observedBits
this.observedBits=t===undefined||t===null?p:t}
r.prototype.componentWillUnmount=function e(){if(this.context[y]){this.context[y].off(this.onUpdate)}}
r.prototype.getValue=function t(){if(this.context[y]){return this.context[y].get()}else{return e}}
r.prototype.render=function e(){return v(this.props.children)(this.state.value)}
return r}(n.Component)
b.contextTypes=(u={},u[y]=o.default.object,u)
return{Provider:h,Consumer:b}}t.default=y
e.exports=t["default"]})
a(C)
var k=i(function(e,t){t.__esModule=true
var r=a(n)
var o=a(C)
function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default
e.exports=t["default"]})
var q=a(k)
var M=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}
var U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e}
var B=function(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}
var W=function(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}
var F=q({getReferenceRef:undefined,referenceNode:undefined})
var V=function(e){B(r,e)
function r(){M(this,r)
var t=W(this,e.call(this))
t.getReferenceRef=function(e){return t.setState(function(t){var r=t.context
return{context:U({},r,{referenceNode:e})}})}
t.state={context:{getReferenceRef:t.getReferenceRef,referenceNode:undefined}}
return t}r.prototype.render=function e(){return t.createElement(F.Provider,{value:this.state.context},this.props.children)}
return r}(t.Component)
var D=function e(t){return Array.isArray(t)?t[0]:t}
var Y=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}if(typeof t==="function"){return t.apply(undefined,n)}}
var H={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"}
var J={}
var L=function(e){B(t,e)
function t(){var n,o,a
M(this,t)
for(var i=arguments.length,u=Array(i),f=0;f<i;f++){u[f]=arguments[f]}return a=(n=(o=W(this,e.call.apply(e,[this].concat(u))),o),o.state={data:undefined},o.popperNode=null,o.arrowNode=null,o.setPopperNode=function(e){if(o.popperNode===e)return
Y(o.props.innerRef,e)
o.popperNode=e
if(!o.popperInstance)o.updatePopperInstance()},o.setArrowNode=function(e){if(o.arrowNode===e)return
o.arrowNode=e
if(!o.popperInstance)o.updatePopperInstance()},o.updateStateModifier={enabled:true,order:900,fn:function e(t){o.setState({data:t})
return t}},o.getOptions=function(){return{placement:o.props.placement,eventsEnabled:o.props.eventsEnabled,positionFixed:o.props.positionFixed,modifiers:U({},o.props.modifiers,{arrow:{enabled:!!o.arrowNode,element:o.arrowNode},applyStyle:{enabled:false},updateStateModifier:o.updateStateModifier})}},o.getPopperStyle=function(){return!o.popperNode||!o.state.data?H:U({position:o.state.data.offsets.popper.position},o.state.data.styles)},o.getPopperPlacement=function(){return!o.state.data?undefined:o.state.data.placement},o.getArrowStyle=function(){return!o.arrowNode||!o.state.data?J:o.state.data.arrowStyles},o.getOutOfBoundariesState=function(){return o.state.data?o.state.data.hide:undefined},o.destroyPopperInstance=function(){if(!o.popperInstance)return
o.popperInstance.destroy()
o.popperInstance=null},o.updatePopperInstance=function(){o.destroyPopperInstance()
var e=o,t=e.popperNode
var n=o.props.referenceElement
if(!n||!t)return
o.popperInstance=new r(n,t,o.getOptions())},o.scheduleUpdate=function(){if(o.popperInstance){o.popperInstance.scheduleUpdate()}},n),W(o,a)}t.prototype.componentDidUpdate=function e(t){if(this.props.placement!==t.placement||this.props.eventsEnabled!==t.eventsEnabled||this.props.referenceElement!==t.referenceElement||this.props.positionFixed!==t.positionFixed){this.updatePopperInstance()}}
t.prototype.componentWillUnmount=function e(){this.destroyPopperInstance()}
t.prototype.render=function e(){return D(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})}
return t}(t.Component)
L.defaultProps={placement:"bottom",eventsEnabled:true,referenceElement:undefined,positionFixed:false}
var z=r.placements
function G(e){return t.createElement(F.Consumer,null,function(r){var n=r.referenceNode
return t.createElement(L,U({referenceElement:n},e))})}var K=function(){}
{K=function(e,t,r){var n=arguments.length
r=new Array(n>2?n-2:0)
for(var o=2;o<n;o++){r[o-2]=arguments[o]}if(t===undefined){throw new Error("`warning(condition, format, ...args)` requires a warning "+"message argument")}if(t.length<10||/^[s\W]*$/.test(t)){throw new Error("The warning format should be able to uniquely identify this "+"warning. Please, use a more descriptive format than: "+t)}if(!e){var a=0
var i="Warning: "+t.replace(/%s/g,function(){return r[a++]})
if(typeof console!=="undefined"){console.error(i)}try{throw new Error(i)}catch(e){}}}}var Q=K
var X=function(e){B(t,e)
function t(){var r,n,o
M(this,t)
for(var a=arguments.length,i=Array(a),u=0;u<a;u++){i[u]=arguments[u]}return o=(r=(n=W(this,e.call.apply(e,[this].concat(i))),n),n.refHandler=function(e){Y(n.props.innerRef,e)
Y(n.props.getReferenceRef,e)},r),W(n,o)}t.prototype.render=function e(){Q(this.props.getReferenceRef,"`Reference` should not be used outside of a `Manager` component.")
return D(this.props.children)({ref:this.refHandler})}
return t}(t.Component)
function Z(e){return t.createElement(F.Consumer,null,function(r){var n=r.getReferenceRef
return t.createElement(X,U({getReferenceRef:n},e))})}e.Popper=G
e.placements=z
e.Manager=V
e.Reference=Z
Object.defineProperty(e,"__esModule",{value:true})})

});
KAdefine("javascript/node_modules/react-popper/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/react-popper/react-popper.js")

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/react-popper-package.js.map 