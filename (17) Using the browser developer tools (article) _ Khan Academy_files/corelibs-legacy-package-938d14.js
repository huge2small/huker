KAdefine("third_party/javascript-khansrc/jquery/jquery-bundle.js", function(require, module, exports) {
(function(t,e){e(t)})(typeof window!=="undefined"?window:this,function(t,e){var i=[]
var n=i.slice
var s=i.concat
var r=i.push
var o=i.indexOf
var a={}
var l=a.toString
var h=a.hasOwnProperty
var c={}
var u=t.document,f="2.1.1",d=function(t,e){return new d.fn.init(t,e)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,m=/^-ms-/,g=/-([\da-z])/gi,v=function(t,e){return e.toUpperCase()}
d.fn=d.prototype={jquery:f,constructor:d,selector:"",length:0,toArray:function(){return n.call(this)},get:function(t){return t!=null?t<0?this[t+this.length]:this[t]:n.call(this)},pushStack:function(t){var e=d.merge(this.constructor(),t)
e.prevObject=this
e.context=this.context
return e},each:function(t,e){return d.each(this,t,e)},map:function(t){return this.pushStack(d.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0)
return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:r,sort:i.sort,splice:i.splice}
d.extend=d.fn.extend=function(){var t,e,i,n,s,r,o=arguments[0]||{},a=1,l=arguments.length,h=false
if(typeof o==="boolean"){h=o
o=arguments[a]||{}
a++}if(typeof o!=="object"&&!d.isFunction(o)){o={}}if(a===l){o=this
a--}for(;a<l;a++){if((t=arguments[a])!=null){for(e in t){i=o[e]
n=t[e]
if(o===n){continue}if(h&&n&&(d.isPlainObject(n)||(s=d.isArray(n)))){if(s){s=false
r=i&&d.isArray(i)?i:[]}else{r=i&&d.isPlainObject(i)?i:{}}o[e]=d.extend(h,r,n)}else if(n!==undefined){o[e]=n}}}}return o}
d.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:true,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return d.type(t)==="function"},isArray:Array.isArray,isWindow:function(t){return t!=null&&t===t.window},isNumeric:function(t){return!d.isArray(t)&&t-parseFloat(t)>=0},isPlainObject:function(t){if(d.type(t)!=="object"||t.nodeType||d.isWindow(t)){return false}if(t.constructor&&!h.call(t.constructor.prototype,"isPrototypeOf")){return false}return true},isEmptyObject:function(t){var e
for(e in t){return false}return true},type:function(t){if(t==null){return t+""}return typeof t==="object"||typeof t==="function"?a[l.call(t)]||"object":typeof t},globalEval:function(t){var e,i=eval
t=d.trim(t)
if(t){if(t.indexOf("use strict")===1){e=u.createElement("script")
e.text=t
u.head.appendChild(e).parentNode.removeChild(e)}else{i(t)}}},camelCase:function(t){return t.replace(m,"ms-").replace(g,v)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var n,s=0,r=t.length,o=y(t)
if(i){if(o){for(;s<r;s++){n=e.apply(t[s],i)
if(n===false){break}}}else{for(s in t){n=e.apply(t[s],i)
if(n===false){break}}}}else{if(o){for(;s<r;s++){n=e.call(t[s],s,t[s])
if(n===false){break}}}else{for(s in t){n=e.call(t[s],s,t[s])
if(n===false){break}}}}return t},trim:function(t){return t==null?"":(t+"").replace(p,"")},makeArray:function(t,e){var i=e||[]
if(t!=null){if(y(Object(t))){d.merge(i,typeof t==="string"?[t]:t)}else{r.call(i,t)}}return i},inArray:function(t,e,i){return e==null?-1:o.call(e,t,i)},merge:function(t,e){var i=+e.length,n=0,s=t.length
for(;n<i;n++){t[s++]=e[n]}t.length=s
return t},grep:function(t,e,i){var n,s=[],r=0,o=t.length,a=!i
for(;r<o;r++){n=!e(t[r],r)
if(n!==a){s.push(t[r])}}return s},map:function(t,e,i){var n,r=0,o=t.length,a=y(t),l=[]
if(a){for(;r<o;r++){n=e(t[r],r,i)
if(n!=null){l.push(n)}}}else{for(r in t){n=e(t[r],r,i)
if(n!=null){l.push(n)}}}return s.apply([],l)},guid:1,proxy:function(t,e){var i,s,r
if(typeof e==="string"){i=t[e]
e=t
t=i}if(!d.isFunction(t)){return undefined}s=n.call(arguments,2)
r=function(){return t.apply(e||this,s.concat(n.call(arguments)))}
r.guid=t.guid=t.guid||d.guid++
return r},now:Date.now,support:c})
d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){a["[object "+e+"]"]=e.toLowerCase()})
function y(t){var e=t.length,i=d.type(t)
if(i==="function"||d.isWindow(t)){return false}if(t.nodeType===1&&e){return true}return i==="array"||e===0||typeof e==="number"&&e>0&&e-1 in t}var b=function(t){var e,i,n,s,r,o,a,l,h,c,u,f,d,p,m,g,v,y,b,w="sizzle"+-new Date,x=t.document,C=0,k=0,T=at(),S=at(),D=at(),E=function(t,e){if(t===e){u=true}return 0},P=typeof undefined,I=1<<31,A={}.hasOwnProperty,N=[],H=N.pop,O=N.push,z=N.push,M=N.slice,j=N.indexOf||function(t){var e=0,i=this.length
for(;e<i;e++){if(this[e]===t){return e}}return-1},W="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",F=R.replace("w","w#"),q="\\["+L+"*("+R+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+L+"*\\]",B=":("+R+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|"+".*"+")\\)|)",V=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),U=new RegExp("^"+L+"*,"+L+"*"),Y=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),Q=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),K=new RegExp(B),X=new RegExp("^"+F+"$"),G={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R.replace("w","w*")+")"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+W+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,tt=/^[^{]+\{\s*\[native \w/,et=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,it=/[+~]/,nt=/'|\\/g,st=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),rt=function(_,t,e){var i="0x"+t-65536
return i!==i||e?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)}
try{z.apply(N=M.call(x.childNodes),x.childNodes)
N[x.childNodes.length].nodeType}catch(t){z={apply:N.length?function(t,e){O.apply(t,M.call(e))}:function(t,e){var i=t.length,n=0
while(t[i++]=e[n++]){}t.length=i-1}}}function ot(t,e,n,s){var r,a,h,c,u,p,v,y,C,k
if((e?e.ownerDocument||e:x)!==d){f(e)}e=e||d
n=n||[]
if(!t||typeof t!=="string"){return n}if((c=e.nodeType)!==1&&c!==9){return[]}if(m&&!s){if(r=et.exec(t)){if(h=r[1]){if(c===9){a=e.getElementById(h)
if(a&&a.parentNode){if(a.id===h){n.push(a)
return n}}else{return n}}else{if(e.ownerDocument&&(a=e.ownerDocument.getElementById(h))&&b(e,a)&&a.id===h){n.push(a)
return n}}}else if(r[2]){z.apply(n,e.getElementsByTagName(t))
return n}else if((h=r[3])&&i.getElementsByClassName&&e.getElementsByClassName){z.apply(n,e.getElementsByClassName(h))
return n}}if(i.qsa&&(!g||!g.test(t))){y=v=w
C=e
k=c===9&&t
if(c===1&&e.nodeName.toLowerCase()!=="object"){p=o(t)
if(v=e.getAttribute("id")){y=v.replace(nt,"\\$&")}else{e.setAttribute("id",y)}y="[id='"+y+"'] "
u=p.length
while(u--){p[u]=y+vt(p[u])}C=it.test(t)&&mt(e.parentNode)||e
k=p.join(",")}if(k){try{z.apply(n,C.querySelectorAll(k))
return n}catch(t){}finally{if(!v){e.removeAttribute("id")}}}}}return l(t.replace(V,"$1"),e,n,s)}function at(){var t=[]
function e(i,s){if(t.push(i+" ")>n.cacheLength){delete e[t.shift()]}return e[i+" "]=s}return e}function lt(t){t[w]=true
return t}function ht(t){var e=d.createElement("div")
try{return!!t(e)}catch(t){return false}finally{if(e.parentNode){e.parentNode.removeChild(e)}e=null}}function ct(t,e){var i=t.split("|"),s=t.length
while(s--){n.attrHandle[i[s]]=e}}function ut(t,e){var i=e&&t,n=i&&t.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||I)-(~t.sourceIndex||I)
if(n){return n}if(i){while(i=i.nextSibling){if(i===e){return-1}}}return t?1:-1}function ft(t){return function(e){var i=e.nodeName.toLowerCase()
return i==="input"&&e.type===t}}function dt(t){return function(e){var i=e.nodeName.toLowerCase()
return(i==="input"||i==="button")&&e.type===t}}function pt(t){return lt(function(e){e=+e
return lt(function(i,n){var s,r=t([],i.length,e),o=r.length
while(o--){if(i[s=r[o]]){i[s]=!(n[s]=i[s])}}})})}function mt(t){return t&&typeof t.getElementsByTagName!==P&&t}i=ot.support={}
r=ot.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement
return e?e.nodeName!=="HTML":false}
f=ot.setDocument=function(t){var e,s=t?t.ownerDocument||t:x,o=s.defaultView
if(s===d||s.nodeType!==9||!s.documentElement){return d}d=s
p=s.documentElement
m=!r(s)
if(o&&o!==o.top){if(o.addEventListener){o.addEventListener("unload",function(){f()},false)}else if(o.attachEvent){o.attachEvent("onunload",function(){f()})}}i.attributes=ht(function(t){t.className="i"
return!t.getAttribute("className")})
i.getElementsByTagName=ht(function(t){t.appendChild(s.createComment(""))
return!t.getElementsByTagName("*").length})
i.getElementsByClassName=tt.test(s.getElementsByClassName)&&ht(function(t){t.innerHTML="<div class='a'></div><div class='a i'></div>"
t.firstChild.className="i"
return t.getElementsByClassName("i").length===2})
i.getById=ht(function(t){p.appendChild(t).id=w
return!s.getElementsByName||!s.getElementsByName(w).length})
if(i.getById){n.find["ID"]=function(t,e){if(typeof e.getElementById!==P&&m){var i=e.getElementById(t)
return i&&i.parentNode?[i]:[]}}
n.filter["ID"]=function(t){var e=t.replace(st,rt)
return function(t){return t.getAttribute("id")===e}}}else{delete n.find["ID"]
n.filter["ID"]=function(t){var e=t.replace(st,rt)
return function(t){var i=typeof t.getAttributeNode!==P&&t.getAttributeNode("id")
return i&&i.value===e}}}n.find["TAG"]=i.getElementsByTagName?function(t,e){if(typeof e.getElementsByTagName!==P){return e.getElementsByTagName(t)}}:function(t,e){var i,n=[],s=0,r=e.getElementsByTagName(t)
if(t==="*"){while(i=r[s++]){if(i.nodeType===1){n.push(i)}}return n}return r}
n.find["CLASS"]=i.getElementsByClassName&&function(t,e){if(typeof e.getElementsByClassName!==P&&m){return e.getElementsByClassName(t)}}
v=[]
g=[]
if(i.qsa=tt.test(s.querySelectorAll)){ht(function(t){t.innerHTML="<select msallowclip=''><option selected=''></option></select>"
if(t.querySelectorAll("[msallowclip^='']").length){g.push("[*^$]="+L+"*(?:''|\"\")")}if(!t.querySelectorAll("[selected]").length){g.push("\\["+L+"*(?:value|"+W+")")}if(!t.querySelectorAll(":checked").length){g.push(":checked")}})
ht(function(t){var e=s.createElement("input")
e.setAttribute("type","hidden")
t.appendChild(e).setAttribute("name","D")
if(t.querySelectorAll("[name=d]").length){g.push("name"+L+"*[*^$|!~]?=")}if(!t.querySelectorAll(":enabled").length){g.push(":enabled",":disabled")}t.querySelectorAll("*,:x")
g.push(",.*:")})}if(i.matchesSelector=tt.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector)){ht(function(t){i.disconnectedMatch=y.call(t,"div")
y.call(t,"[s!='']:x")
v.push("!=",B)})}g=g.length&&new RegExp(g.join("|"))
v=v.length&&new RegExp(v.join("|"))
e=tt.test(p.compareDocumentPosition)
b=e||tt.test(p.contains)?function(t,e){var i=t.nodeType===9?t.documentElement:t,n=e&&e.parentNode
return t===n||!!(n&&n.nodeType===1&&(i.contains?i.contains(n):t.compareDocumentPosition&&t.compareDocumentPosition(n)&16))}:function(t,e){if(e){while(e=e.parentNode){if(e===t){return true}}}return false}
E=e?function(t,e){if(t===e){u=true
return 0}var n=!t.compareDocumentPosition-!e.compareDocumentPosition
if(n){return n}n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1
if(n&1||!i.sortDetached&&e.compareDocumentPosition(t)===n){if(t===s||t.ownerDocument===x&&b(x,t)){return-1}if(e===s||e.ownerDocument===x&&b(x,e)){return 1}return c?j.call(c,t)-j.call(c,e):0}return n&4?-1:1}:function(t,e){if(t===e){u=true
return 0}var i,n=0,r=t.parentNode,o=e.parentNode,a=[t],l=[e]
if(!r||!o){return t===s?-1:e===s?1:r?-1:o?1:c?j.call(c,t)-j.call(c,e):0}else if(r===o){return ut(t,e)}i=t
while(i=i.parentNode){a.unshift(i)}i=e
while(i=i.parentNode){l.unshift(i)}while(a[n]===l[n]){n++}return n?ut(a[n],l[n]):a[n]===x?-1:l[n]===x?1:0}
return s}
ot.matches=function(t,e){return ot(t,null,null,e)}
ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==d){f(t)}e=e.replace(Q,"='$1']")
if(i.matchesSelector&&m&&(!v||!v.test(e))&&(!g||!g.test(e))){try{var n=y.call(t,e)
if(n||i.disconnectedMatch||t.document&&t.document.nodeType!==11){return n}}catch(t){}}return ot(e,d,null,[t]).length>0}
ot.contains=function(t,e){if((t.ownerDocument||t)!==d){f(t)}return b(t,e)}
ot.attr=function(t,e){if((t.ownerDocument||t)!==d){f(t)}var s=n.attrHandle[e.toLowerCase()],r=s&&A.call(n.attrHandle,e.toLowerCase())?s(t,e,!m):undefined
return r!==undefined?r:i.attributes||!m?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null}
ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)}
ot.uniqueSort=function(t){var e,n=[],s=0,r=0
u=!i.detectDuplicates
c=!i.sortStable&&t.slice(0)
t.sort(E)
if(u){while(e=t[r++]){if(e===t[r]){s=n.push(r)}}while(s--){t.splice(n[s],1)}}c=null
return t}
s=ot.getText=function(t){var e,i="",n=0,r=t.nodeType
if(!r){while(e=t[n++]){i+=s(e)}}else if(r===1||r===9||r===11){if(typeof t.textContent==="string"){return t.textContent}else{for(t=t.firstChild;t;t=t.nextSibling){i+=s(t)}}}else if(r===3||r===4){return t.nodeValue}return i}
n=ot.selectors={cacheLength:50,createPseudo:lt,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){t[1]=t[1].replace(st,rt)
t[3]=(t[3]||t[4]||t[5]||"").replace(st,rt)
if(t[2]==="~="){t[3]=" "+t[3]+" "}return t.slice(0,4)},CHILD:function(t){t[1]=t[1].toLowerCase()
if(t[1].slice(0,3)==="nth"){if(!t[3]){ot.error(t[0])}t[4]=+(t[4]?t[5]+(t[6]||1):2*(t[3]==="even"||t[3]==="odd"))
t[5]=+(t[7]+t[8]||t[3]==="odd")}else if(t[3]){ot.error(t[0])}return t},PSEUDO:function(t){var e,i=!t[6]&&t[2]
if(G["CHILD"].test(t[0])){return null}if(t[3]){t[2]=t[4]||t[5]||""}else if(i&&K.test(i)&&(e=o(i,true))&&(e=i.indexOf(")",i.length-e)-i.length)){t[0]=t[0].slice(0,e)
t[2]=i.slice(0,e)}return t.slice(0,3)}},filter:{TAG:function(t){var e=t.replace(st,rt).toLowerCase()
return t==="*"?function(){return true}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=T[t+" "]
return e||(e=new RegExp("(^|"+L+")"+t+"("+L+"|$)"))&&T(t,function(t){return e.test(typeof t.className==="string"&&t.className||typeof t.getAttribute!==P&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(n){var s=ot.attr(n,t)
if(s==null){return e==="!="}if(!e){return true}s+=""
return e==="="?s===i:e==="!="?s!==i:e==="^="?i&&s.indexOf(i)===0:e==="*="?i&&s.indexOf(i)>-1:e==="$="?i&&s.slice(-i.length)===i:e==="~="?(" "+s+" ").indexOf(i)>-1:e==="|="?s===i||s.slice(0,i.length+1)===i+"-":false}},CHILD:function(t,e,i,n,s){var r=t.slice(0,3)!=="nth",o=t.slice(-4)!=="last",a=e==="of-type"
return n===1&&s===0?function(t){return!!t.parentNode}:function(e,i,l){var h,c,u,f,d,p,m=r!==o?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a
if(g){if(r){while(m){u=e
while(u=u[m]){if(a?u.nodeName.toLowerCase()===v:u.nodeType===1){return false}}p=m=t==="only"&&!p&&"nextSibling"}return true}p=[o?g.firstChild:g.lastChild]
if(o&&y){c=g[w]||(g[w]={})
h=c[t]||[]
d=h[0]===C&&h[1]
f=h[0]===C&&h[2]
u=d&&g.childNodes[d]
while(u=++d&&u&&u[m]||(f=d=0)||p.pop()){if(u.nodeType===1&&++f&&u===e){c[t]=[C,d,f]
break}}}else if(y&&(h=(e[w]||(e[w]={}))[t])&&h[0]===C){f=h[1]}else{while(u=++d&&u&&u[m]||(f=d=0)||p.pop()){if((a?u.nodeName.toLowerCase()===v:u.nodeType===1)&&++f){if(y){(u[w]||(u[w]={}))[t]=[C,f]}if(u===e){break}}}}f-=s
return f===n||f%n===0&&f/n>=0}}},PSEUDO:function(t,e){var i,s=n.pseudos[t]||n.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t)
if(s[w]){return s(e)}if(s.length>1){i=[t,t,"",e]
return n.setFilters.hasOwnProperty(t.toLowerCase())?lt(function(t,i){var n,r=s(t,e),o=r.length
while(o--){n=j.call(t,r[o])
t[n]=!(i[n]=r[o])}}):function(t){return s(t,0,i)}}return s}},pseudos:{not:lt(function(t){var e=[],i=[],n=a(t.replace(V,"$1"))
return n[w]?lt(function(t,e,i,s){var r,o=n(t,null,s,[]),a=t.length
while(a--){if(r=o[a]){t[a]=!(e[a]=r)}}}):function(t,s,r){e[0]=t
n(e,null,r,i)
return!i.pop()}}),has:lt(function(t){return function(e){return ot(t,e).length>0}}),contains:lt(function(t){return function(e){return(e.textContent||e.innerText||s(e)).indexOf(t)>-1}}),lang:lt(function(t){if(!X.test(t||"")){ot.error("unsupported lang: "+t)}t=t.replace(st,rt).toLowerCase()
return function(e){var i
do{if(i=m?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang")){i=i.toLowerCase()
return i===t||i.indexOf(t+"-")===0}}while((e=e.parentNode)&&e.nodeType===1)
return false}}),target:function(e){var i=t.location&&t.location.hash
return i&&i.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===false},disabled:function(t){return t.disabled===true},checked:function(t){var e=t.nodeName.toLowerCase()
return e==="input"&&!!t.checked||e==="option"&&!!t.selected},selected:function(t){if(t.parentNode){t.parentNode.selectedIndex}return t.selected===true},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling){if(t.nodeType<6){return false}}return true},parent:function(t){return!n.pseudos["empty"](t)},header:function(t){return Z.test(t.nodeName)},input:function(t){return J.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase()
return e==="input"&&t.type==="button"||e==="button"},text:function(t){var e
return t.nodeName.toLowerCase()==="input"&&t.type==="text"&&((e=t.getAttribute("type"))==null||e.toLowerCase()==="text")},first:pt(function(){return[0]}),last:pt(function(t,e){return[e-1]}),eq:pt(function(t,e,i){return[i<0?i+e:i]}),even:pt(function(t,e){var i=0
for(;i<e;i+=2){t.push(i)}return t}),odd:pt(function(t,e){var i=1
for(;i<e;i+=2){t.push(i)}return t}),lt:pt(function(t,e,i){var n=i<0?i+e:i
for(;--n>=0;){t.push(n)}return t}),gt:pt(function(t,e,i){var n=i<0?i+e:i
for(;++n<e;){t.push(n)}return t})}}
n.pseudos["nth"]=n.pseudos["eq"]
for(e in{radio:true,checkbox:true,file:true,password:true,image:true}){n.pseudos[e]=ft(e)}for(e in{submit:true,reset:true}){n.pseudos[e]=dt(e)}function gt(){}gt.prototype=n.filters=n.pseudos
n.setFilters=new gt
o=ot.tokenize=function(t,e){var i,s,r,o,a,l,h,c=S[t+" "]
if(c){return e?0:c.slice(0)}a=t
l=[]
h=n.preFilter
while(a){if(!i||(s=U.exec(a))){if(s){a=a.slice(s[0].length)||a}l.push(r=[])}i=false
if(s=Y.exec(a)){i=s.shift()
r.push({value:i,type:s[0].replace(V," ")})
a=a.slice(i.length)}for(o in n.filter){if((s=G[o].exec(a))&&(!h[o]||(s=h[o](s)))){i=s.shift()
r.push({value:i,type:o,matches:s})
a=a.slice(i.length)}}if(!i){break}}return e?a.length:a?ot.error(t):S(t,l).slice(0)}
function vt(t){var e=0,i=t.length,n=""
for(;e<i;e++){n+=t[e].value}return n}function yt(t,e,i){var n=e.dir,s=i&&n==="parentNode",r=k++
return e.first?function(e,i,r){while(e=e[n]){if(e.nodeType===1||s){return t(e,i,r)}}}:function(e,i,o){var a,l,h=[C,r]
if(o){while(e=e[n]){if(e.nodeType===1||s){if(t(e,i,o)){return true}}}}else{while(e=e[n]){if(e.nodeType===1||s){l=e[w]||(e[w]={})
if((a=l[n])&&a[0]===C&&a[1]===r){return h[2]=a[2]}else{l[n]=h
if(h[2]=t(e,i,o)){return true}}}}}}}function bt(t){return t.length>1?function(e,i,n){var s=t.length
while(s--){if(!t[s](e,i,n)){return false}}return true}:t[0]}function wt(t,e,i){var n=0,s=e.length
for(;n<s;n++){ot(t,e[n],i)}return i}function xt(t,e,i,n,s){var r,o=[],a=0,l=t.length,h=e!=null
for(;a<l;a++){if(r=t[a]){if(!i||i(r,n,s)){o.push(r)
if(h){e.push(a)}}}}return o}function _t(t,e,i,n,s,r){if(n&&!n[w]){n=_t(n)}if(s&&!s[w]){s=_t(s,r)}return lt(function(r,o,a,l){var h,c,u,f=[],d=[],p=o.length,m=r||wt(e||"*",a.nodeType?[a]:a,[]),g=t&&(r||!e)?xt(m,f,t,a,l):m,v=i?s||(r?t:p||n)?[]:o:g
if(i){i(g,v,a,l)}if(n){h=xt(v,d)
n(h,[],a,l)
c=h.length
while(c--){if(u=h[c]){v[d[c]]=!(g[d[c]]=u)}}}if(r){if(s||t){if(s){h=[]
c=v.length
while(c--){if(u=v[c]){h.push(g[c]=u)}}s(null,v=[],h,l)}c=v.length
while(c--){if((u=v[c])&&(h=s?j.call(r,u):f[c])>-1){r[h]=!(o[h]=u)}}}}else{v=xt(v===o?v.splice(p,v.length):v)
if(s){s(null,o,v,l)}else{z.apply(o,v)}}})}function Ct(t){var e,i,s,r=t.length,o=n.relative[t[0].type],a=o||n.relative[" "],l=o?1:0,c=yt(function(t){return t===e},a,true),u=yt(function(t){return j.call(e,t)>-1},a,true),f=[function(t,i,n){return!o&&(n||i!==h)||((e=i).nodeType?c(t,i,n):u(t,i,n))}]
for(;l<r;l++){if(i=n.relative[t[l].type]){f=[yt(bt(f),i)]}else{i=n.filter[t[l].type].apply(null,t[l].matches)
if(i[w]){s=++l
for(;s<r;s++){if(n.relative[t[s].type]){break}}return _t(l>1&&bt(f),l>1&&vt(t.slice(0,l-1).concat({value:t[l-2].type===" "?"*":""})).replace(V,"$1"),i,l<s&&Ct(t.slice(l,s)),s<r&&Ct(t=t.slice(s)),s<r&&vt(t))}f.push(i)}}return bt(f)}function kt(t,e){var i=e.length>0,s=t.length>0,r=function(r,o,a,l,c){var u,f,p,m=0,g="0",v=r&&[],y=[],b=h,w=r||s&&n.find["TAG"]("*",c),x=C+=b==null?1:Math.random()||.1,k=w.length
if(c){h=o!==d&&o}for(;g!==k&&(u=w[g])!=null;g++){if(s&&u){f=0
while(p=t[f++]){if(p(u,o,a)){l.push(u)
break}}if(c){C=x}}if(i){if(u=!p&&u){m--}if(r){v.push(u)}}}m+=g
if(i&&g!==m){f=0
while(p=e[f++]){p(v,y,o,a)}if(r){if(m>0){while(g--){if(!(v[g]||y[g])){y[g]=H.call(l)}}}y=xt(y)}z.apply(l,y)
if(c&&!r&&y.length>0&&m+e.length>1){ot.uniqueSort(l)}}if(c){C=x
h=b}return v}
return i?lt(r):r}a=ot.compile=function(t,e){var i,n=[],s=[],r=D[t+" "]
if(!r){if(!e){e=o(t)}i=e.length
while(i--){r=Ct(e[i])
if(r[w]){n.push(r)}else{s.push(r)}}r=D(t,kt(s,n))
r.selector=t}return r}
l=ot.select=function(t,e,s,r){var l,h,c,u,f,d=typeof t==="function"&&t,p=!r&&o(t=d.selector||t)
s=s||[]
if(p.length===1){h=p[0]=p[0].slice(0)
if(h.length>2&&(c=h[0]).type==="ID"&&i.getById&&e.nodeType===9&&m&&n.relative[h[1].type]){e=(n.find["ID"](c.matches[0].replace(st,rt),e)||[])[0]
if(!e){return s}else if(d){e=e.parentNode}t=t.slice(h.shift().value.length)}l=G["needsContext"].test(t)?0:h.length
while(l--){c=h[l]
if(n.relative[u=c.type]){break}if(f=n.find[u]){if(r=f(c.matches[0].replace(st,rt),it.test(h[0].type)&&mt(e.parentNode)||e)){h.splice(l,1)
t=r.length&&vt(h)
if(!t){z.apply(s,r)
return s}break}}}}(d||a(t,p))(r,e,!m,s,it.test(t)&&mt(e.parentNode)||e)
return s}
i.sortStable=w.split("").sort(E).join("")===w
i.detectDuplicates=!!u
f()
i.sortDetached=ht(function(t){return t.compareDocumentPosition(d.createElement("div"))&1})
if(!ht(function(t){t.innerHTML="<a href='#'></a>"
return t.firstChild.getAttribute("href")==="#"})){ct("type|href|height|width",function(t,e,i){if(!i){return t.getAttribute(e,e.toLowerCase()==="type"?1:2)}})}if(!i.attributes||!ht(function(t){t.innerHTML="<input/>"
t.firstChild.setAttribute("value","")
return t.firstChild.getAttribute("value")===""})){ct("value",function(t,e,i){if(!i&&t.nodeName.toLowerCase()==="input"){return t.defaultValue}})}if(!ht(function(t){return t.getAttribute("disabled")==null})){ct(W,function(t,e,i){var n
if(!i){return t[e]===true?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}})}return ot}(t)
d.find=b
d.expr=b.selectors
d.expr[":"]=d.expr.pseudos
d.unique=b.uniqueSort
d.text=b.getText
d.isXMLDoc=b.isXML
d.contains=b.contains
var w=d.expr.match.needsContext
var x=/^<(\w+)\s*\/?>(?:<\/\1>|)$/
var C=/^.[^:#\[\.,]*$/
function k(t,e,i){if(d.isFunction(e)){return d.grep(t,function(t,n){return!!e.call(t,n,t)!==i})}if(e.nodeType){return d.grep(t,function(t){return t===e!==i})}if(typeof e==="string"){if(C.test(e)){return d.filter(e,t,i)}e=d.filter(e,t)}return d.grep(t,function(t){return o.call(e,t)>=0!==i})}d.filter=function(t,e,i){var n=e[0]
if(i){t=":not("+t+")"}return e.length===1&&n.nodeType===1?d.find.matchesSelector(n,t)?[n]:[]:d.find.matches(t,d.grep(e,function(t){return t.nodeType===1}))}
d.fn.extend({find:function(t){var e,i=this.length,n=[],s=this
if(typeof t!=="string"){return this.pushStack(d(t).filter(function(){for(e=0;e<i;e++){if(d.contains(s[e],this)){return true}}}))}for(e=0;e<i;e++){d.find(t,s[e],n)}n=this.pushStack(i>1?d.unique(n):n)
n.selector=this.selector?this.selector+" "+t:t
return n},filter:function(t){return this.pushStack(k(this,t||[],false))},not:function(t){return this.pushStack(k(this,t||[],true))},is:function(t){return!!k(this,typeof t==="string"&&w.test(t)?d(t):t||[],false).length}})
var T,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,D=d.fn.init=function(t,e){var i,n
if(!t){return this}if(typeof t==="string"){if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3){i=[null,t,null]}else{i=S.exec(t)}if(i&&(i[1]||!e)){if(i[1]){e=e instanceof d?e[0]:e
d.merge(this,d.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:u,true))
if(x.test(i[1])&&d.isPlainObject(e)){for(i in e){if(d.isFunction(this[i])){this[i](e[i])}else{this.attr(i,e[i])}}}return this}else{n=u.getElementById(i[2])
if(n&&n.parentNode){this.length=1
this[0]=n}this.context=u
this.selector=t
return this}}else if(!e||e.jquery){return(e||T).find(t)}else{return this.constructor(e).find(t)}}else if(t.nodeType){this.context=this[0]=t
this.length=1
return this}else if(d.isFunction(t)){return typeof T.ready!=="undefined"?T.ready(t):t(d)}if(t.selector!==undefined){this.selector=t.selector
this.context=t.context}return d.makeArray(t,this)}
D.prototype=d.fn
T=d(u)
var E=/^(?:parents|prev(?:Until|All))/,P={children:true,contents:true,next:true,prev:true}
d.extend({dir:function(t,e,i){var n=[],s=i!==undefined
while((t=t[e])&&t.nodeType!==9){if(t.nodeType===1){if(s&&d(t).is(i)){break}n.push(t)}}return n},sibling:function(t,e){var i=[]
for(;t;t=t.nextSibling){if(t.nodeType===1&&t!==e){i.push(t)}}return i}})
d.fn.extend({has:function(t){var e=d(t,this),i=e.length
return this.filter(function(){var t=0
for(;t<i;t++){if(d.contains(this,e[t])){return true}}})},closest:function(t,e){var i,n=0,s=this.length,r=[],o=w.test(t)||typeof t!=="string"?d(t,e||this.context):0
for(;n<s;n++){for(i=this[n];i&&i!==e;i=i.parentNode){if(i.nodeType<11&&(o?o.index(i)>-1:i.nodeType===1&&d.find.matchesSelector(i,t))){r.push(i)
break}}}return this.pushStack(r.length>1?d.unique(r):r)},index:function(t){if(!t){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof t==="string"){return o.call(d(t),this[0])}return o.call(this,t.jquery?t[0]:t)},add:function(t,e){return this.pushStack(d.unique(d.merge(this.get(),d(t,e))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}})
function I(t,e){while((t=t[e])&&t.nodeType!==1){}return t}d.each({parent:function(t){var e=t.parentNode
return e&&e.nodeType!==11?e:null},parents:function(t){return d.dir(t,"parentNode")},parentsUntil:function(t,e,i){return d.dir(t,"parentNode",i)},next:function(t){return I(t,"nextSibling")},prev:function(t){return I(t,"previousSibling")},nextAll:function(t){return d.dir(t,"nextSibling")},prevAll:function(t){return d.dir(t,"previousSibling")},nextUntil:function(t,e,i){return d.dir(t,"nextSibling",i)},prevUntil:function(t,e,i){return d.dir(t,"previousSibling",i)},siblings:function(t){return d.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return d.sibling(t.firstChild)},contents:function(t){return t.contentDocument||d.merge([],t.childNodes)}},function(t,e){d.fn[t]=function(i,n){var s=d.map(this,e,i)
if(t.slice(-5)!=="Until"){n=i}if(n&&typeof n==="string"){s=d.filter(n,s)}if(this.length>1){if(!P[t]){d.unique(s)}if(E.test(t)){s.reverse()}}return this.pushStack(s)}})
var A=/\S+/g
var N={}
function H(t){var e=N[t]={}
d.each(t.match(A)||[],function(_,t){e[t]=true})
return e}d.Callbacks=function(t){t=typeof t==="string"?N[t]||H(t):d.extend({},t)
var e,i,n,s,r,o,a=[],l=!t.once&&[],h=function(u){e=t.memory&&u
i=true
o=s||0
s=0
r=a.length
n=true
for(;a&&o<r;o++){if(a[o].apply(u[0],u[1])===false&&t.stopOnFalse){e=false
break}}n=false
if(a){if(l){if(l.length){h(l.shift())}}else if(e){a=[]}else{c.disable()}}},c={add:function(){if(a){var i=a.length;(function e(i){d.each(i,function(_,i){var n=d.type(i)
if(n==="function"){if(!t.unique||!c.has(i)){a.push(i)}}else if(i&&i.length&&n!=="string"){e(i)}})})(arguments)
if(n){r=a.length}else if(e){s=i
h(e)}}return this},remove:function(){if(a){d.each(arguments,function(_,t){var e
while((e=d.inArray(t,a,e))>-1){a.splice(e,1)
if(n){if(e<=r){r--}if(e<=o){o--}}}})}return this},has:function(t){return t?d.inArray(t,a)>-1:!!(a&&a.length)},empty:function(){a=[]
r=0
return this},disable:function(){a=l=e=undefined
return this},disabled:function(){return!a},lock:function(){l=undefined
if(!e){c.disable()}return this},locked:function(){return!l},fireWith:function(t,e){if(a&&(!i||l)){e=e||[]
e=[t,e.slice?e.slice():e]
if(n){l.push(e)}else{h(e)}}return this},fire:function(){c.fireWith(this,arguments)
return this},fired:function(){return!!i}}
return c}
d.extend({Deferred:function(t){var e=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],i="pending",n={state:function(){return i},always:function(){s.done(arguments).fail(arguments)
return this},then:function(){var t=arguments
return d.Deferred(function(i){d.each(e,function(e,r){var o=d.isFunction(t[e])&&t[e]
s[r[1]](function(){var t=o&&o.apply(this,arguments)
if(t&&d.isFunction(t.promise)){t.promise().done(i.resolve).fail(i.reject).progress(i.notify)}else{i[r[0]+"With"](this===n?i.promise():this,o?[t]:arguments)}})})
t=null}).promise()},promise:function(t){return t!=null?d.extend(t,n):n}},s={}
n.pipe=n.then
d.each(e,function(t,r){var o=r[2],a=r[3]
n[r[1]]=o.add
if(a){o.add(function(){i=a},e[t^1][2].disable,e[2][2].lock)}s[r[0]]=function(){s[r[0]+"With"](this===s?n:this,arguments)
return this}
s[r[0]+"With"]=o.fireWith})
n.promise(s)
if(t){t.call(s,s)}return s},when:function(t){var e=0,i=n.call(arguments),s=i.length,r=s!==1||t&&d.isFunction(t.promise)?s:0,o=r===1?t:d.Deferred(),a=function(t,e,i){return function(s){e[t]=this
i[t]=arguments.length>1?n.call(arguments):s
if(i===l){o.notifyWith(e,i)}else if(!--r){o.resolveWith(e,i)}}},l,h,c
if(s>1){l=new Array(s)
h=new Array(s)
c=new Array(s)
for(;e<s;e++){if(i[e]&&d.isFunction(i[e].promise)){i[e].promise().done(a(e,c,i)).fail(o.reject).progress(a(e,h,l))}else{--r}}}if(!r){o.resolveWith(c,i)}return o.promise()}})
var O
d.fn.ready=function(t){d.ready.promise().done(t)
return this}
d.extend({isReady:false,readyWait:1,holdReady:function(t){if(t){d.readyWait++}else{d.ready(true)}},ready:function(t){if(t===true?--d.readyWait:d.isReady){return}d.isReady=true
if(t!==true&&--d.readyWait>0){return}O.resolveWith(u,[d])
if(d.fn.triggerHandler){d(u).triggerHandler("ready")
d(u).off("ready")}}})
function z(){u.removeEventListener("DOMContentLoaded",z,false)
t.removeEventListener("load",z,false)
d.ready()}d.ready.promise=function(e){if(!O){O=d.Deferred()
if(u.readyState==="complete"){setTimeout(d.ready)}else{u.addEventListener("DOMContentLoaded",z,false)
t.addEventListener("load",z,false)}}return O.promise(e)}
d.ready.promise()
var M=d.access=function(t,e,i,n,s,r,o){var a=0,l=t.length,h=i==null
if(d.type(i)==="object"){s=true
for(a in i){d.access(t,e,a,i[a],true,r,o)}}else if(n!==undefined){s=true
if(!d.isFunction(n)){o=true}if(h){if(o){e.call(t,n)
e=null}else{h=e
e=function(t,e,i){return h.call(d(t),i)}}}if(e){for(;a<l;a++){e(t[a],i,o?n:n.call(t[a],a,e(t[a],i)))}}}return s?t:h?e.call(t):l?e(t[0],i):r}
d.acceptData=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType}
function j(){Object.defineProperty(this.cache={},0,{get:function(){return{}}})
this.expando=d.expando+Math.random()}j.uid=1
j.accepts=d.acceptData
j.prototype={key:function(t){if(!j.accepts(t)){return 0}var e={},i=t[this.expando]
if(!i){i=j.uid++
try{e[this.expando]={value:i}
Object.defineProperties(t,e)}catch(n){e[this.expando]=i
d.extend(t,e)}}if(!this.cache[i]){this.cache[i]={}}return i},set:function(t,e,i){var n,s=this.key(t),r=this.cache[s]
if(typeof e==="string"){r[e]=i}else{if(d.isEmptyObject(r)){d.extend(this.cache[s],e)}else{for(n in e){r[n]=e[n]}}}return r},get:function(t,e){var i=this.cache[this.key(t)]
return e===undefined?i:i[e]},access:function(t,e,i){var n
if(e===undefined||e&&typeof e==="string"&&i===undefined){n=this.get(t,e)
return n!==undefined?n:this.get(t,d.camelCase(e))}this.set(t,e,i)
return i!==undefined?i:e},remove:function(t,e){var i,n,s,r=this.key(t),o=this.cache[r]
if(e===undefined){this.cache[r]={}}else{if(d.isArray(e)){n=e.concat(e.map(d.camelCase))}else{s=d.camelCase(e)
if(e in o){n=[e,s]}else{n=s
n=n in o?[n]:n.match(A)||[]}}i=n.length
while(i--){delete o[n[i]]}}},hasData:function(t){return!d.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){if(t[this.expando]){delete this.cache[t[this.expando]]}}}
var W=new j
var L=new j
var R=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,F=/([A-Z])/g
function q(t,e,i){var n
if(i===undefined&&t.nodeType===1){n="data-"+e.replace(F,"-$1").toLowerCase()
i=t.getAttribute(n)
if(typeof i==="string"){try{i=i==="true"?true:i==="false"?false:i==="null"?null:+i+""===i?+i:R.test(i)?d.parseJSON(i):i}catch(t){}L.set(t,e,i)}else{i=undefined}}return i}d.extend({hasData:function(t){return L.hasData(t)||W.hasData(t)},data:function(t,e,i){return L.access(t,e,i)},removeData:function(t,e){L.remove(t,e)},_data:function(t,e,i){return W.access(t,e,i)},_removeData:function(t,e){W.remove(t,e)}})
d.fn.extend({data:function(t,e){var i,n,s,r=this[0],o=r&&r.attributes
if(t===undefined){if(this.length){s=L.get(r)
if(r.nodeType===1&&!W.get(r,"hasDataAttrs")){i=o.length
while(i--){if(o[i]){n=o[i].name
if(n.indexOf("data-")===0){n=d.camelCase(n.slice(5))
q(r,n,s[n])}}}W.set(r,"hasDataAttrs",true)}}return s}if(typeof t==="object"){return this.each(function(){L.set(this,t)})}return M(this,function(e){var i,n=d.camelCase(t)
if(r&&e===undefined){i=L.get(r,t)
if(i!==undefined){return i}i=L.get(r,n)
if(i!==undefined){return i}i=q(r,n,undefined)
if(i!==undefined){return i}return}this.each(function(){var i=L.get(this,n)
L.set(this,n,e)
if(t.indexOf("-")!==-1&&i!==undefined){L.set(this,t,e)}})},null,e,arguments.length>1,null,true)},removeData:function(t){return this.each(function(){L.remove(this,t)})}})
d.extend({queue:function(t,e,i){var n
if(t){e=(e||"fx")+"queue"
n=W.get(t,e)
if(i){if(!n||d.isArray(i)){n=W.access(t,e,d.makeArray(i))}else{n.push(i)}}return n||[]}},dequeue:function(t,e){e=e||"fx"
var i=d.queue(t,e),n=i.length,s=i.shift(),r=d._queueHooks(t,e),o=function(){d.dequeue(t,e)}
if(s==="inprogress"){s=i.shift()
n--}if(s){if(e==="fx"){i.unshift("inprogress")}delete r.stop
s.call(t,o,r)}if(!n&&r){r.empty.fire()}},_queueHooks:function(t,e){var i=e+"queueHooks"
return W.get(t,i)||W.access(t,i,{empty:d.Callbacks("once memory").add(function(){W.remove(t,[e+"queue",i])})})}})
d.fn.extend({queue:function(t,e){var i=2
if(typeof t!=="string"){e=t
t="fx"
i--}if(arguments.length<i){return d.queue(this[0],t)}return e===undefined?this:this.each(function(){var i=d.queue(this,t,e)
d._queueHooks(this,t)
if(t==="fx"&&i[0]!=="inprogress"){d.dequeue(this,t)}})},dequeue:function(t){return this.each(function(){d.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=d.Deferred(),r=this,o=this.length,a=function(){if(!--n){s.resolveWith(r,[r])}}
if(typeof t!=="string"){e=t
t=undefined}t=t||"fx"
while(o--){i=W.get(r[o],t+"queueHooks")
if(i&&i.empty){n++
i.empty.add(a)}}a()
return s.promise(e)}})
var B=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
var V=["Top","Right","Bottom","Left"]
var U=function(t,e){t=e||t
return d.css(t,"display")==="none"||!d.contains(t.ownerDocument,t)}
var Y=/^(?:checkbox|radio)$/i;(function(){var t=u.createDocumentFragment(),e=t.appendChild(u.createElement("div")),i=u.createElement("input")
i.setAttribute("type","radio")
i.setAttribute("checked","checked")
i.setAttribute("name","t")
e.appendChild(i)
c.checkClone=e.cloneNode(true).cloneNode(true).lastChild.checked
e.innerHTML="<textarea>x</textarea>"
c.noCloneChecked=!!e.cloneNode(true).lastChild.defaultValue})()
var Q=typeof undefined
c.focusinBubbles="onfocusin"in t
var K=/^key/,X=/^(?:mouse|pointer|contextmenu)|click/,G=/^(?:focusinfocus|focusoutblur)$/,J=/^([^.]*)(?:\.(.+)|)$/
function Z(){return true}function tt(){return false}function et(){try{return u.activeElement}catch(t){}}d.event={global:{},add:function(t,e,i,n,s){var r,o,a,l,h,c,u,f,p,m,g,v=W.get(t)
if(!v){return}if(i.handler){r=i
i=r.handler
s=r.selector}if(!i.guid){i.guid=d.guid++}if(!(l=v.events)){l=v.events={}}if(!(o=v.handle)){o=v.handle=function(e){return typeof d!==Q&&d.event.triggered!==e.type?d.event.dispatch.apply(t,arguments):undefined}}e=(e||"").match(A)||[""]
h=e.length
while(h--){a=J.exec(e[h])||[]
p=g=a[1]
m=(a[2]||"").split(".").sort()
if(!p){continue}u=d.event.special[p]||{}
p=(s?u.delegateType:u.bindType)||p
u=d.event.special[p]||{}
c=d.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&d.expr.match.needsContext.test(s),namespace:m.join(".")},r)
if(!(f=l[p])){f=l[p]=[]
f.delegateCount=0
if(!u.setup||u.setup.call(t,n,m,o)===false){if(t.addEventListener){t.addEventListener(p,o,false)}}}if(u.add){u.add.call(t,c)
if(!c.handler.guid){c.handler.guid=i.guid}}if(s){f.splice(f.delegateCount++,0,c)}else{f.push(c)}d.event.global[p]=true}},remove:function(t,e,i,n,s){var r,o,a,l,h,c,u,f,p,m,g,v=W.hasData(t)&&W.get(t)
if(!v||!(l=v.events)){return}e=(e||"").match(A)||[""]
h=e.length
while(h--){a=J.exec(e[h])||[]
p=g=a[1]
m=(a[2]||"").split(".").sort()
if(!p){for(p in l){d.event.remove(t,p+e[h],i,n,true)}continue}u=d.event.special[p]||{}
p=(n?u.delegateType:u.bindType)||p
f=l[p]||[]
a=a[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)")
o=r=f.length
while(r--){c=f[r]
if((s||g===c.origType)&&(!i||i.guid===c.guid)&&(!a||a.test(c.namespace))&&(!n||n===c.selector||n==="**"&&c.selector)){f.splice(r,1)
if(c.selector){f.delegateCount--}if(u.remove){u.remove.call(t,c)}}}if(o&&!f.length){if(!u.teardown||u.teardown.call(t,m,v.handle)===false){d.removeEvent(t,p,v.handle)}delete l[p]}}if(d.isEmptyObject(l)){delete v.handle
W.remove(t,"events")}},trigger:function(e,i,n,s){var r,o,a,l,c,f,p,m=[n||u],g=h.call(e,"type")?e.type:e,v=h.call(e,"namespace")?e.namespace.split("."):[]
o=a=n=n||u
if(n.nodeType===3||n.nodeType===8){return}if(G.test(g+d.event.triggered)){return}if(g.indexOf(".")>=0){v=g.split(".")
g=v.shift()
v.sort()}c=g.indexOf(":")<0&&"on"+g
e=e[d.expando]?e:new d.Event(g,typeof e==="object"&&e)
e.isTrigger=s?2:3
e.namespace=v.join(".")
e.namespace_re=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
e.result=undefined
if(!e.target){e.target=n}i=i==null?[e]:d.makeArray(i,[e])
p=d.event.special[g]||{}
if(!s&&p.trigger&&p.trigger.apply(n,i)===false){return}if(!s&&!p.noBubble&&!d.isWindow(n)){l=p.delegateType||g
if(!G.test(l+g)){o=o.parentNode}for(;o;o=o.parentNode){m.push(o)
a=o}if(a===(n.ownerDocument||u)){m.push(a.defaultView||a.parentWindow||t)}}r=0
while((o=m[r++])&&!e.isPropagationStopped()){e.type=r>1?l:p.bindType||g
f=(W.get(o,"events")||{})[e.type]&&W.get(o,"handle")
if(f){f.apply(o,i)}f=c&&o[c]
if(f&&f.apply&&d.acceptData(o)){e.result=f.apply(o,i)
if(e.result===false){e.preventDefault()}}}e.type=g
if(!s&&!e.isDefaultPrevented()){if((!p._default||p._default.apply(m.pop(),i)===false)&&d.acceptData(n)){if(c&&d.isFunction(n[g])&&!d.isWindow(n)){a=n[c]
if(a){n[c]=null}d.event.triggered=g
n[g]()
d.event.triggered=undefined
if(a){n[c]=a}}}}return e.result},dispatch:function(t){t=d.event.fix(t)
var e,i,s,r,o,a=[],l=n.call(arguments),h=(W.get(this,"events")||{})[t.type]||[],c=d.event.special[t.type]||{}
l[0]=t
t.delegateTarget=this
if(c.preDispatch&&c.preDispatch.call(this,t)===false){return}a=d.event.handlers.call(this,t,h)
e=0
while((r=a[e++])&&!t.isPropagationStopped()){t.currentTarget=r.elem
i=0
while((o=r.handlers[i++])&&!t.isImmediatePropagationStopped()){if(!t.namespace_re||t.namespace_re.test(o.namespace)){t.handleObj=o
t.data=o.data
s=((d.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l)
if(s!==undefined){if((t.result=s)===false){t.preventDefault()
t.stopPropagation()}}}}}if(c.postDispatch){c.postDispatch.call(this,t)}return t.result},handlers:function(t,e){var i,n,s,r,o=[],a=e.delegateCount,l=t.target
if(a&&l.nodeType&&(!t.button||t.type!=="click")){for(;l!==this;l=l.parentNode||this){if(l.disabled!==true||t.type!=="click"){n=[]
for(i=0;i<a;i++){r=e[i]
s=r.selector+" "
if(n[s]===undefined){n[s]=r.needsContext?d(s,this).index(l)>=0:d.find(s,this,null,[l]).length}if(n[s]){n.push(r)}}if(n.length){o.push({elem:l,handlers:n})}}}}if(a<e.length){o.push({elem:this,handlers:e.slice(a)})}return o},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){if(t.which==null){t.which=e.charCode!=null?e.charCode:e.keyCode}return t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var i,n,s,r=e.button
if(t.pageX==null&&e.clientX!=null){i=t.target.ownerDocument||u
n=i.documentElement
s=i.body
t.pageX=e.clientX+(n&&n.scrollLeft||s&&s.scrollLeft||0)-(n&&n.clientLeft||s&&s.clientLeft||0)
t.pageY=e.clientY+(n&&n.scrollTop||s&&s.scrollTop||0)-(n&&n.clientTop||s&&s.clientTop||0)}if(!t.which&&r!==undefined){t.which=r&1?1:r&2?3:r&4?2:0}return t}},fix:function(t){if(t[d.expando]){return t}var e,i,n,s=t.type,r=t,o=this.fixHooks[s]
if(!o){this.fixHooks[s]=o=X.test(s)?this.mouseHooks:K.test(s)?this.keyHooks:{}}n=o.props?this.props.concat(o.props):this.props
t=new d.Event(r)
e=n.length
while(e--){i=n[e]
t[i]=r[i]}if(!t.target){t.target=u}if(t.target.nodeType===3){t.target=t.target.parentNode}return o.filter?o.filter(t,r):t},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==et()&&this.focus){this.focus()
return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===et()&&this.blur){this.blur()
return false}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&d.nodeName(this,"input")){this.click()
return false}},_default:function(t){return d.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){if(t.result!==undefined&&t.originalEvent){t.originalEvent.returnValue=t.result}}}},simulate:function(t,e,i,n){var s=d.extend(new d.Event,i,{type:t,isSimulated:true,originalEvent:{}})
if(n){d.event.trigger(s,null,e)}else{d.event.dispatch.call(e,s)}if(s.isDefaultPrevented()){i.preventDefault()}}}
d.removeEvent=function(t,e,i){if(t.removeEventListener){t.removeEventListener(e,i,false)}}
d.Event=function(t,e){if(!(this instanceof d.Event)){return new d.Event(t,e)}if(t&&t.type){this.originalEvent=t
this.type=t.type
this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===undefined&&t.returnValue===false?Z:tt}else{this.type=t}if(e){d.extend(this,e)}this.timeStamp=t&&t.timeStamp||d.now()
this[d.expando]=true}
d.Event.prototype={isDefaultPrevented:tt,isPropagationStopped:tt,isImmediatePropagationStopped:tt,preventDefault:function(){var t=this.originalEvent
this.isDefaultPrevented=Z
if(t&&t.preventDefault){t.preventDefault()}},stopPropagation:function(){var t=this.originalEvent
this.isPropagationStopped=Z
if(t&&t.stopPropagation){t.stopPropagation()}},stopImmediatePropagation:function(){var t=this.originalEvent
this.isImmediatePropagationStopped=Z
if(t&&t.stopImmediatePropagation){t.stopImmediatePropagation()}this.stopPropagation()}}
d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){d.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=this,s=t.relatedTarget,r=t.handleObj
if(!s||s!==n&&!d.contains(n,s)){t.type=r.origType
i=r.handler.apply(this,arguments)
t.type=e}return i}}})
if(!c.focusinBubbles){d.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){d.event.simulate(e,t.target,d.event.fix(t),true)}
d.event.special[e]={setup:function(){var n=this.ownerDocument||this,s=W.access(n,e)
if(!s){n.addEventListener(t,i,true)}W.access(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=W.access(n,e)-1
if(!s){n.removeEventListener(t,i,true)
W.remove(n,e)}else{W.access(n,e,s)}}}})}d.fn.extend({on:function(t,e,i,n,s){var r,o
if(typeof t==="object"){if(typeof e!=="string"){i=i||e
e=undefined}for(o in t){this.on(o,e,i,t[o],s)}return this}if(i==null&&n==null){n=e
i=e=undefined}else if(n==null){if(typeof e==="string"){n=i
i=undefined}else{n=i
i=e
e=undefined}}if(n===false){n=tt}else if(!n){return this}if(s===1){r=n
n=function(t){d().off(t)
return r.apply(this,arguments)}
n.guid=r.guid||(r.guid=d.guid++)}return this.each(function(){d.event.add(this,t,n,i,e)})},one:function(t,e,i,n){return this.on(t,e,i,n,1)},off:function(t,e,i){var n,s
if(t&&t.preventDefault&&t.handleObj){n=t.handleObj
d(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler)
return this}if(typeof t==="object"){for(s in t){this.off(s,e,t[s])}return this}if(e===false||typeof e==="function"){i=e
e=undefined}if(i===false){i=tt}return this.each(function(){d.event.remove(this,t,i,e)})},trigger:function(t,e){return this.each(function(){d.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0]
if(i){return d.event.trigger(t,e,i,true)}}})
var it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,st=/<|&#?\w+;/,rt=/<(?:script|style|link)/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,lt=/^true\/(.*)/,ht=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
ct.optgroup=ct.option
ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead
ct.th=ct.td
function ut(t,e){return d.nodeName(t,"table")&&d.nodeName(e.nodeType!==11?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function ft(t){t.type=(t.getAttribute("type")!==null)+"/"+t.type
return t}function dt(t){var e=lt.exec(t.type)
if(e){t.type=e[1]}else{t.removeAttribute("type")}return t}function pt(t,e){var i=0,n=t.length
for(;i<n;i++){W.set(t[i],"globalEval",!e||W.get(e[i],"globalEval"))}}function mt(t,e){var i,n,s,r,o,a,l,h
if(e.nodeType!==1){return}if(W.hasData(t)){r=W.access(t)
o=W.set(e,r)
h=r.events
if(h){delete o.handle
o.events={}
for(s in h){for(i=0,n=h[s].length;i<n;i++){d.event.add(e,s,h[s][i])}}}}if(L.hasData(t)){a=L.access(t)
l=d.extend({},a)
L.set(e,l)}}function gt(t,e){var i=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[]
return e===undefined||e&&d.nodeName(t,e)?d.merge([t],i):i}function vt(t,e){var i=e.nodeName.toLowerCase()
if(i==="input"&&Y.test(t.type)){e.checked=t.checked}else if(i==="input"||i==="textarea"){e.defaultValue=t.defaultValue}}d.extend({clone:function(t,e,i){var n,s,r,o,a=t.cloneNode(true),l=d.contains(t.ownerDocument,t)
if(!c.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!d.isXMLDoc(t)){o=gt(a)
r=gt(t)
for(n=0,s=r.length;n<s;n++){vt(r[n],o[n])}}if(e){if(i){r=r||gt(t)
o=o||gt(a)
for(n=0,s=r.length;n<s;n++){mt(r[n],o[n])}}else{mt(t,a)}}o=gt(a,"script")
if(o.length>0){pt(o,!l&&gt(t,"script"))}return a},buildFragment:function(t,e,i,n){var s,r,o,a,l,h,c=e.createDocumentFragment(),u=[],f=0,p=t.length
for(;f<p;f++){s=t[f]
if(s||s===0){if(d.type(s)==="object"){d.merge(u,s.nodeType?[s]:s)}else if(!st.test(s)){u.push(e.createTextNode(s))}else{r=r||c.appendChild(e.createElement("div"))
o=(nt.exec(s)||["",""])[1].toLowerCase()
a=ct[o]||ct._default
r.innerHTML=a[1]+s.replace(it,"<$1></$2>")+a[2]
h=a[0]
while(h--){r=r.lastChild}d.merge(u,r.childNodes)
r=c.firstChild
r.textContent=""}}}c.textContent=""
f=0
while(s=u[f++]){if(n&&d.inArray(s,n)!==-1){continue}l=d.contains(s.ownerDocument,s)
r=gt(c.appendChild(s),"script")
if(l){pt(r)}if(i){h=0
while(s=r[h++]){if(at.test(s.type||"")){i.push(s)}}}}return c},cleanData:function(t){var e,i,n,s,r=d.event.special,o=0
for(;(i=t[o])!==undefined;o++){if(d.acceptData(i)){s=i[W.expando]
if(s&&(e=W.cache[s])){if(e.events){for(n in e.events){if(r[n]){d.event.remove(i,n)}else{d.removeEvent(i,n,e.handle)}}}if(W.cache[s]){delete W.cache[s]}}}delete L.cache[i[L.expando]]}}})
d.fn.extend({text:function(t){return M(this,function(t){return t===undefined?d.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=t}})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var e=ut(this,t)
e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var e=ut(this,t)
e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){if(this.parentNode){this.parentNode.insertBefore(t,this)}})},after:function(){return this.domManip(arguments,function(t){if(this.parentNode){this.parentNode.insertBefore(t,this.nextSibling)}})},remove:function(t,e){var i,n=t?d.filter(t,this):this,s=0
for(;(i=n[s])!=null;s++){if(!e&&i.nodeType===1){d.cleanData(gt(i))}if(i.parentNode){if(e&&d.contains(i.ownerDocument,i)){pt(gt(i,"script"))}i.parentNode.removeChild(i)}}return this},empty:function(){var t,e=0
for(;(t=this[e])!=null;e++){if(t.nodeType===1){d.cleanData(gt(t,false))
t.textContent=""}}return this},clone:function(t,e){t=t==null?false:t
e=e==null?t:e
return this.map(function(){return d.clone(this,t,e)})},html:function(t){return M(this,function(t){var e=this[0]||{},i=0,n=this.length
if(t===undefined&&e.nodeType===1){return e.innerHTML}if(typeof t==="string"&&!rt.test(t)&&!ct[(nt.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(it,"<$1></$2>")
try{for(;i<n;i++){e=this[i]||{}
if(e.nodeType===1){d.cleanData(gt(e,false))
e.innerHTML=t}}e=0}catch(t){}}if(e){this.empty().append(t)}},null,t,arguments.length)},replaceWith:function(){var t=arguments[0]
this.domManip(arguments,function(e){t=this.parentNode
d.cleanData(gt(this))
if(t){t.replaceChild(e,this)}})
return t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,true)},domManip:function(t,e){t=s.apply([],t)
var i,n,r,o,a,l,h=0,u=this.length,f=this,p=u-1,m=t[0],g=d.isFunction(m)
if(g||u>1&&typeof m==="string"&&!c.checkClone&&ot.test(m)){return this.each(function(i){var n=f.eq(i)
if(g){t[0]=m.call(this,i,n.html())}n.domManip(t,e)})}if(u){i=d.buildFragment(t,this[0].ownerDocument,false,this)
n=i.firstChild
if(i.childNodes.length===1){i=n}if(n){r=d.map(gt(i,"script"),ft)
o=r.length
for(;h<u;h++){a=i
if(h!==p){a=d.clone(a,true,true)
if(o){d.merge(r,gt(a,"script"))}}e.call(this[h],a,h)}if(o){l=r[r.length-1].ownerDocument
d.map(r,dt)
for(h=0;h<o;h++){a=r[h]
if(at.test(a.type||"")&&!W.access(a,"globalEval")&&d.contains(l,a)){if(a.src){if(d._evalUrl){d._evalUrl(a.src)}}else{d.globalEval(a.textContent.replace(ht,""))}}}}}}return this}})
d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){d.fn[t]=function(t){var i,n=[],s=d(t),o=s.length-1,a=0
for(;a<=o;a++){i=a===o?this:this.clone(true)
d(s[a])[e](i)
r.apply(n,i.get())}return this.pushStack(n)}})
var yt,bt={}
function wt(e,i){var n,s=d(i.createElement(e)).appendTo(i.body),r=t.getDefaultComputedStyle&&(n=t.getDefaultComputedStyle(s[0]))?n.display:d.css(s[0],"display")
s.detach()
return r}function xt(t){var e=u,i=bt[t]
if(!i){i=wt(t,e)
if(i==="none"||!i){yt=(yt||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)
e=yt[0].contentDocument
e.write()
e.close()
i=wt(t,e)
yt.detach()}bt[t]=i}return i}var _t=/^margin/
var Ct=new RegExp("^("+B+")(?!px)[a-z%]+$","i")
var kt=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)}
function Tt(t,e,i){var n,s,r,o,a=t.style
i=i||kt(t)
if(i){o=i.getPropertyValue(e)||i[e]}if(i){if(o===""&&!d.contains(t.ownerDocument,t)){o=d.style(t,e)}if(Ct.test(o)&&_t.test(e)){n=a.width
s=a.minWidth
r=a.maxWidth
a.minWidth=a.maxWidth=a.width=o
o=i.width
a.width=n
a.minWidth=s
a.maxWidth=r}}return o!==undefined?o+"":o}function St(t,e){return{get:function(){if(t()){delete this.get
return}return(this.get=e).apply(this,arguments)}}}(function(){var e,i,n=u.documentElement,s=u.createElement("div"),r=u.createElement("div")
if(!r.style){return}r.style.backgroundClip="content-box"
r.cloneNode(true).style.backgroundClip=""
c.clearCloneStyle=r.style.backgroundClip==="content-box"
s.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute"
s.appendChild(r)
function o(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute"
r.innerHTML=""
n.appendChild(s)
var o=t.getComputedStyle(r,null)
e=o.top!=="1%"
i=o.width==="4px"
n.removeChild(s)}if(t.getComputedStyle){d.extend(c,{pixelPosition:function(){o()
return e},boxSizingReliable:function(){if(i==null){o()}return i},reliableMarginRight:function(){var e,i=r.appendChild(u.createElement("div"))
i.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0"
i.style.marginRight=i.style.width="0"
r.style.width="1px"
n.appendChild(s)
e=!parseFloat(t.getComputedStyle(i,null).marginRight)
n.removeChild(s)
return e}})}})()
d.swap=function(t,e,i,n){var s,r,o={}
for(r in e){o[r]=t.style[r]
t.style[r]=e[r]}s=i.apply(t,n||[])
for(r in e){t.style[r]=o[r]}return s}
var Dt=/^(none|table(?!-c[ea]).+)/,Et=new RegExp("^("+B+")(.*)$","i"),Pt=new RegExp("^([+-])=("+B+")","i"),It={position:"absolute",visibility:"hidden",display:"block"},At={letterSpacing:"0",fontWeight:"400"},Nt=["Webkit","O","Moz","ms"]
function Ht(t,e){if(e in t){return e}var i=e[0].toUpperCase()+e.slice(1),n=e,s=Nt.length
while(s--){e=Nt[s]+i
if(e in t){return e}}return n}function Ot(t,e,i){var n=Et.exec(e)
return n?Math.max(0,n[1]-(i||0))+(n[2]||"px"):e}function zt(t,e,i,n,s){var r=i===(n?"border":"content")?4:e==="width"?1:0,o=0
for(;r<4;r+=2){if(i==="margin"){o+=d.css(t,i+V[r],true,s)}if(n){if(i==="content"){o-=d.css(t,"padding"+V[r],true,s)}if(i!=="margin"){o-=d.css(t,"border"+V[r]+"Width",true,s)}}else{o+=d.css(t,"padding"+V[r],true,s)
if(i!=="padding"){o+=d.css(t,"border"+V[r]+"Width",true,s)}}}return o}function Mt(t,e,i){var n=true,s=e==="width"?t.offsetWidth:t.offsetHeight,r=kt(t),o=d.css(t,"boxSizing",false,r)==="border-box"
if(s<=0||s==null){s=Tt(t,e,r)
if(s<0||s==null){s=t.style[e]}if(Ct.test(s)){return s}n=o&&(c.boxSizingReliable()||s===t.style[e])
s=parseFloat(s)||0}return s+zt(t,e,i||(o?"border":"content"),n,r)+"px"}function jt(t,e){var i,n,s,r=[],o=0,a=t.length
for(;o<a;o++){n=t[o]
if(!n.style){continue}r[o]=W.get(n,"olddisplay")
i=n.style.display
if(e){if(!r[o]&&i==="none"){n.style.display=""}if(n.style.display===""&&U(n)){r[o]=W.access(n,"olddisplay",xt(n.nodeName))}}else{s=U(n)
if(i!=="none"||!s){W.set(n,"olddisplay",s?i:d.css(n,"display"))}}}for(o=0;o<a;o++){n=t[o]
if(!n.style){continue}if(!e||n.style.display==="none"||n.style.display===""){n.style.display=e?r[o]||"":"none"}}return t}d.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=Tt(t,"opacity")
return i===""?"1":i}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{float:"cssFloat"},style:function(t,e,i,n){if(!t||t.nodeType===3||t.nodeType===8||!t.style){return}var s,r,o,a=d.camelCase(e),l=t.style
e=d.cssProps[a]||(d.cssProps[a]=Ht(l,a))
o=d.cssHooks[e]||d.cssHooks[a]
if(i!==undefined){r=typeof i
if(r==="string"&&(s=Pt.exec(i))){i=(s[1]+1)*s[2]+parseFloat(d.css(t,e))
r="number"}if(i==null||i!==i){return}if(r==="number"&&!d.cssNumber[a]){i+="px"}if(!c.clearCloneStyle&&i===""&&e.indexOf("background")===0){l[e]="inherit"}if(!o||!("set"in o)||(i=o.set(t,i,n))!==undefined){l[e]=i}}else{if(o&&"get"in o&&(s=o.get(t,false,n))!==undefined){return s}return l[e]}},css:function(t,e,i,n){var s,r,o,a=d.camelCase(e)
e=d.cssProps[a]||(d.cssProps[a]=Ht(t.style,a))
o=d.cssHooks[e]||d.cssHooks[a]
if(o&&"get"in o){s=o.get(t,true,i)}if(s===undefined){s=Tt(t,e,n)}if(s==="normal"&&e in At){s=At[e]}if(i===""||i){r=parseFloat(s)
return i===true||d.isNumeric(r)?r||0:s}return s}})
d.each(["height","width"],function(t,e){d.cssHooks[e]={get:function(t,i,n){if(i){return Dt.test(d.css(t,"display"))&&t.offsetWidth===0?d.swap(t,It,function(){return Mt(t,e,n)}):Mt(t,e,n)}},set:function(t,i,n){var s=n&&kt(t)
return Ot(t,i,n?zt(t,e,n,d.css(t,"boxSizing",false,s)==="border-box",s):0)}}})
d.cssHooks.marginRight=St(c.reliableMarginRight,function(t,e){if(e){return d.swap(t,{display:"inline-block"},Tt,[t,"marginRight"])}})
d.each({margin:"",padding:"",border:"Width"},function(t,e){d.cssHooks[t+e]={expand:function(i){var n=0,s={},r=typeof i==="string"?i.split(" "):[i]
for(;n<4;n++){s[t+V[n]+e]=r[n]||r[n-2]||r[0]}return s}}
if(!_t.test(t)){d.cssHooks[t+e].set=Ot}})
d.fn.extend({css:function(t,e){return M(this,function(t,e,i){var n,s,r={},o=0
if(d.isArray(e)){n=kt(t)
s=e.length
for(;o<s;o++){r[e[o]]=d.css(t,e[o],false,n)}return r}return i!==undefined?d.style(t,e,i):d.css(t,e)},t,e,arguments.length>1)},show:function(){return jt(this,true)},hide:function(){return jt(this)},toggle:function(t){if(typeof t==="boolean"){return t?this.show():this.hide()}return this.each(function(){if(U(this)){d(this).show()}else{d(this).hide()}})}})
function Wt(t,e,i,n,s){return new Wt.prototype.init(t,e,i,n,s)}d.Tween=Wt
Wt.prototype={constructor:Wt,init:function(t,e,i,n,s,r){this.elem=t
this.prop=i
this.easing=s||"swing"
this.options=e
this.start=this.now=this.cur()
this.end=n
this.unit=r||(d.cssNumber[i]?"":"px")},cur:function(){var t=Wt.propHooks[this.prop]
return t&&t.get?t.get(this):Wt.propHooks._default.get(this)},run:function(t){var e,i=Wt.propHooks[this.prop]
if(this.options.duration){this.pos=e=d.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration)}else{this.pos=e=t}this.now=(this.end-this.start)*e+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(i&&i.set){i.set(this)}else{Wt.propHooks._default.set(this)}return this}}
Wt.prototype.init.prototype=Wt.prototype
Wt.propHooks={_default:{get:function(t){var e
if(t.elem[t.prop]!=null&&(!t.elem.style||t.elem.style[t.prop]==null)){return t.elem[t.prop]}e=d.css(t.elem,t.prop,"")
return!e||e==="auto"?0:e},set:function(t){if(d.fx.step[t.prop]){d.fx.step[t.prop](t)}else if(t.elem.style&&(t.elem.style[d.cssProps[t.prop]]!=null||d.cssHooks[t.prop])){d.style(t.elem,t.prop,t.now+t.unit)}else{t.elem[t.prop]=t.now}}}}
Wt.propHooks.scrollTop=Wt.propHooks.scrollLeft={set:function(t){if(t.elem.nodeType&&t.elem.parentNode){t.elem[t.prop]=t.now}}}
d.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}}
d.fx=Wt.prototype.init
d.fx.step={}
var Lt,$t,Rt=/^(?:toggle|show|hide)$/,Ft=new RegExp("^(?:([+-])=|)("+B+")([a-z%]*)$","i"),qt=/queueHooks$/,Bt=[Kt],Vt={"*":[function(t,e){var i=this.createTween(t,e),n=i.cur(),s=Ft.exec(e),r=s&&s[3]||(d.cssNumber[t]?"":"px"),o=(d.cssNumber[t]||r!=="px"&&+n)&&Ft.exec(d.css(i.elem,t)),a=1,l=20
if(o&&o[3]!==r){r=r||o[3]
s=s||[]
o=+n||1
do{a=a||".5"
o=o/a
d.style(i.elem,t,o+r)}while(a!==(a=i.cur()/n)&&a!==1&&--l)}if(s){o=i.start=+o||+n||0
i.unit=r
i.end=s[1]?o+(s[1]+1)*s[2]:+s[2]}return i}]}
function Ut(){setTimeout(function(){Lt=undefined})
return Lt=d.now()}function Yt(t,e){var i,n=0,s={height:t}
e=e?1:0
for(;n<4;n+=2-e){i=V[n]
s["margin"+i]=s["padding"+i]=t}if(e){s.opacity=s.width=t}return s}function Qt(t,e,i){var n,s=(Vt[e]||[]).concat(Vt["*"]),r=0,o=s.length
for(;r<o;r++){if(n=s[r].call(i,e,t)){return n}}}function Kt(t,e,i){var n,s,r,o,a,l,h,c,u=this,f={},p=t.style,m=t.nodeType&&U(t),g=W.get(t,"fxshow")
if(!i.queue){a=d._queueHooks(t,"fx")
if(a.unqueued==null){a.unqueued=0
l=a.empty.fire
a.empty.fire=function(){if(!a.unqueued){l()}}}a.unqueued++
u.always(function(){u.always(function(){a.unqueued--
if(!d.queue(t,"fx").length){a.empty.fire()}})})}if(t.nodeType===1&&("height"in e||"width"in e)){i.overflow=[p.overflow,p.overflowX,p.overflowY]
h=d.css(t,"display")
c=h==="none"?W.get(t,"olddisplay")||xt(t.nodeName):h
if(c==="inline"&&d.css(t,"float")==="none"){p.display="inline-block"}}if(i.overflow){p.overflow="hidden"
u.always(function(){p.overflow=i.overflow[0]
p.overflowX=i.overflow[1]
p.overflowY=i.overflow[2]})}for(n in e){s=e[n]
if(Rt.exec(s)){delete e[n]
r=r||s==="toggle"
if(s===(m?"hide":"show")){if(s==="show"&&g&&g[n]!==undefined){m=true}else{continue}}f[n]=g&&g[n]||d.style(t,n)}else{h=undefined}}if(!d.isEmptyObject(f)){if(g){if("hidden"in g){m=g.hidden}}else{g=W.access(t,"fxshow",{})}if(r){g.hidden=!m}if(m){d(t).show()}else{u.done(function(){d(t).hide()})}u.done(function(){var e
W.remove(t,"fxshow")
for(e in f){d.style(t,e,f[e])}})
for(n in f){o=Qt(m?g[n]:0,n,u)
if(!(n in g)){g[n]=o.start
if(m){o.end=o.start
o.start=n==="width"||n==="height"?1:0}}}}else if((h==="none"?xt(t.nodeName):h)==="inline"){p.display=h}}function Xt(t,e){var i,n,s,r,o
for(i in t){n=d.camelCase(i)
s=e[n]
r=t[i]
if(d.isArray(r)){s=r[1]
r=t[i]=r[0]}if(i!==n){t[n]=r
delete t[i]}o=d.cssHooks[n]
if(o&&"expand"in o){r=o.expand(r)
delete t[n]
for(i in r){if(!(i in t)){t[i]=r[i]
e[i]=s}}}else{e[n]=s}}}function Gt(t,e,i){var n,s,r=0,o=Bt.length,a=d.Deferred().always(function(){delete l.elem}),l=function(){if(s){return false}var e=Lt||Ut(),i=Math.max(0,h.startTime+h.duration-e),n=i/h.duration||0,r=1-n,o=0,l=h.tweens.length
for(;o<l;o++){h.tweens[o].run(r)}a.notifyWith(t,[h,r,i])
if(r<1&&l){return i}else{a.resolveWith(t,[h])
return false}},h=a.promise({elem:t,props:d.extend({},e),opts:d.extend(true,{specialEasing:{}},i),originalProperties:e,originalOptions:i,startTime:Lt||Ut(),duration:i.duration,tweens:[],createTween:function(e,i){var n=d.Tween(t,h.opts,e,i,h.opts.specialEasing[e]||h.opts.easing)
h.tweens.push(n)
return n},stop:function(e){var i=0,n=e?h.tweens.length:0
if(s){return this}s=true
for(;i<n;i++){h.tweens[i].run(1)}if(e){a.resolveWith(t,[h,e])}else{a.rejectWith(t,[h,e])}return this}}),c=h.props
Xt(c,h.opts.specialEasing)
for(;r<o;r++){n=Bt[r].call(h,t,c,h.opts)
if(n){return n}}d.map(c,Qt,h)
if(d.isFunction(h.opts.start)){h.opts.start.call(t,h)}d.fx.timer(d.extend(l,{elem:t,anim:h,queue:h.opts.queue}))
return h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}d.Animation=d.extend(Gt,{tweener:function(t,e){if(d.isFunction(t)){e=t
t=["*"]}else{t=t.split(" ")}var i,n=0,s=t.length
for(;n<s;n++){i=t[n]
Vt[i]=Vt[i]||[]
Vt[i].unshift(e)}},prefilter:function(t,e){if(e){Bt.unshift(t)}else{Bt.push(t)}}})
d.speed=function(t,e,i){var n=t&&typeof t==="object"?d.extend({},t):{complete:i||!i&&e||d.isFunction(t)&&t,duration:t,easing:i&&e||e&&!d.isFunction(e)&&e}
n.duration=d.fx.off?0:typeof n.duration==="number"?n.duration:n.duration in d.fx.speeds?d.fx.speeds[n.duration]:d.fx.speeds._default
if(n.queue==null||n.queue===true){n.queue="fx"}n.old=n.complete
n.complete=function(){if(d.isFunction(n.old)){n.old.call(this)}if(n.queue){d.dequeue(this,n.queue)}}
return n}
d.fn.extend({fadeTo:function(t,e,i,n){return this.filter(U).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=d.isEmptyObject(t),r=d.speed(e,i,n),o=function(){var e=Gt(this,d.extend({},t),r)
if(s||W.get(this,"finish")){e.stop(true)}}
o.finish=o
return s||r.queue===false?this.each(o):this.queue(r.queue,o)},stop:function(t,e,i){var n=function(t){var e=t.stop
delete t.stop
e(i)}
if(typeof t!=="string"){i=e
e=t
t=undefined}if(e&&t!==false){this.queue(t||"fx",[])}return this.each(function(){var e=true,s=t!=null&&t+"queueHooks",r=d.timers,o=W.get(this)
if(s){if(o[s]&&o[s].stop){n(o[s])}}else{for(s in o){if(o[s]&&o[s].stop&&qt.test(s)){n(o[s])}}}for(s=r.length;s--;){if(r[s].elem===this&&(t==null||r[s].queue===t)){r[s].anim.stop(i)
e=false
r.splice(s,1)}}if(e||!i){d.dequeue(this,t)}})},finish:function(t){if(t!==false){t=t||"fx"}return this.each(function(){var e,i=W.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],r=d.timers,o=n?n.length:0
i.finish=true
d.queue(this,t,[])
if(s&&s.stop){s.stop.call(this,true)}for(e=r.length;e--;){if(r[e].elem===this&&r[e].queue===t){r[e].anim.stop(true)
r.splice(e,1)}}for(e=0;e<o;e++){if(n[e]&&n[e].finish){n[e].finish.call(this)}}delete i.finish})}})
d.each(["toggle","show","hide"],function(t,e){var i=d.fn[e]
d.fn[e]=function(t,n,s){return t==null||typeof t==="boolean"?i.apply(this,arguments):this.animate(Yt(e,true),t,n,s)}})
d.each({slideDown:Yt("show"),slideUp:Yt("hide"),slideToggle:Yt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){d.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}})
d.timers=[]
d.fx.tick=function(){var t,e=0,i=d.timers
Lt=d.now()
for(;e<i.length;e++){t=i[e]
if(!t()&&i[e]===t){i.splice(e--,1)}}if(!i.length){d.fx.stop()}Lt=undefined}
d.fx.timer=function(t){d.timers.push(t)
if(t()){d.fx.start()}else{d.timers.pop()}}
d.fx.interval=13
d.fx.start=function(){if(!$t){$t=setInterval(d.fx.tick,d.fx.interval)}}
d.fx.stop=function(){clearInterval($t)
$t=null}
d.fx.speeds={slow:600,fast:200,_default:400}
d.fn.delay=function(t,e){t=d.fx?d.fx.speeds[t]||t:t
e=e||"fx"
return this.queue(e,function(e,i){var n=setTimeout(e,t)
i.stop=function(){clearTimeout(n)}})};(function(){var t=u.createElement("input"),e=u.createElement("select"),i=e.appendChild(u.createElement("option"))
t.type="checkbox"
c.checkOn=t.value!==""
c.optSelected=i.selected
e.disabled=true
c.optDisabled=!i.disabled
t=u.createElement("input")
t.value="t"
t.type="radio"
c.radioValue=t.value==="t"})()
var Jt,Zt,te=d.expr.attrHandle
d.fn.extend({attr:function(t,e){return M(this,d.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){d.removeAttr(this,t)})}})
d.extend({attr:function(t,e,i){var n,s,r=t.nodeType
if(!t||r===3||r===8||r===2){return}if(typeof t.getAttribute===Q){return d.prop(t,e,i)}if(r!==1||!d.isXMLDoc(t)){e=e.toLowerCase()
n=d.attrHooks[e]||(d.expr.match.bool.test(e)?Zt:Jt)}if(i!==undefined){if(i===null){d.removeAttr(t,e)}else if(n&&"set"in n&&(s=n.set(t,i,e))!==undefined){return s}else{t.setAttribute(e,i+"")
return i}}else if(n&&"get"in n&&(s=n.get(t,e))!==null){return s}else{s=d.find.attr(t,e)
return s==null?undefined:s}},removeAttr:function(t,e){var i,n,s=0,r=e&&e.match(A)
if(r&&t.nodeType===1){while(i=r[s++]){n=d.propFix[i]||i
if(d.expr.match.bool.test(i)){t[n]=false}t.removeAttribute(i)}}},attrHooks:{type:{set:function(t,e){if(!c.radioValue&&e==="radio"&&d.nodeName(t,"input")){var i=t.value
t.setAttribute("type",e)
if(i){t.value=i}return e}}}}})
Zt={set:function(t,e,i){if(e===false){d.removeAttr(t,i)}else{t.setAttribute(i,i)}return i}}
d.each(d.expr.match.bool.source.match(/\w+/g),function(t,e){var i=te[e]||d.find.attr
te[e]=function(t,e,n){var s,r
if(!n){r=te[e]
te[e]=s
s=i(t,e,n)!=null?e.toLowerCase():null
te[e]=r}return s}})
var ee=/^(?:input|select|textarea|button)$/i
d.fn.extend({prop:function(t,e){return M(this,d.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[d.propFix[t]||t]})}})
d.extend({propFix:{for:"htmlFor",class:"className"},prop:function(t,e,i){var n,s,r,o=t.nodeType
if(!t||o===3||o===8||o===2){return}r=o!==1||!d.isXMLDoc(t)
if(r){e=d.propFix[e]||e
s=d.propHooks[e]}if(i!==undefined){return s&&"set"in s&&(n=s.set(t,i,e))!==undefined?n:t[e]=i}else{return s&&"get"in s&&(n=s.get(t,e))!==null?n:t[e]}},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||ee.test(t.nodeName)||t.href?t.tabIndex:-1}}}})
if(!c.optSelected){d.propHooks.selected={get:function(t){var e=t.parentNode
if(e&&e.parentNode){e.parentNode.selectedIndex}return null}}}d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this})
var ie=/[\t\r\n\f]/g
d.fn.extend({addClass:function(t){var e,i,n,s,r,o,a=typeof t==="string"&&t,l=0,h=this.length
if(d.isFunction(t)){return this.each(function(e){d(this).addClass(t.call(this,e,this.className))})}if(a){e=(t||"").match(A)||[]
for(;l<h;l++){i=this[l]
n=i.nodeType===1&&(i.className?(" "+i.className+" ").replace(ie," "):" ")
if(n){r=0
while(s=e[r++]){if(n.indexOf(" "+s+" ")<0){n+=s+" "}}o=d.trim(n)
if(i.className!==o){i.className=o}}}}return this},removeClass:function(t){var e,i,n,s,r,o,a=arguments.length===0||typeof t==="string"&&t,l=0,h=this.length
if(d.isFunction(t)){return this.each(function(e){d(this).removeClass(t.call(this,e,this.className))})}if(a){e=(t||"").match(A)||[]
for(;l<h;l++){i=this[l]
n=i.nodeType===1&&(i.className?(" "+i.className+" ").replace(ie," "):"")
if(n){r=0
while(s=e[r++]){while(n.indexOf(" "+s+" ")>=0){n=n.replace(" "+s+" "," ")}}o=t?d.trim(n):""
if(i.className!==o){i.className=o}}}}return this},toggleClass:function(t,e){var i=typeof t
if(typeof e==="boolean"&&i==="string"){return e?this.addClass(t):this.removeClass(t)}if(d.isFunction(t)){return this.each(function(i){d(this).toggleClass(t.call(this,i,this.className,e),e)})}return this.each(function(){if(i==="string"){var e,n=0,s=d(this),r=t.match(A)||[]
while(e=r[n++]){if(s.hasClass(e)){s.removeClass(e)}else{s.addClass(e)}}}else if(i===Q||i==="boolean"){if(this.className){W.set(this,"__className__",this.className)}this.className=this.className||t===false?"":W.get(this,"__className__")||""}})},hasClass:function(t){var e=" "+t+" ",i=0,n=this.length
for(;i<n;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(ie," ").indexOf(e)>=0){return true}}return false}})
var ne=/\r/g
d.fn.extend({val:function(t){var e,i,n,s=this[0]
if(!arguments.length){if(s){e=d.valHooks[s.type]||d.valHooks[s.nodeName.toLowerCase()]
if(e&&"get"in e&&(i=e.get(s,"value"))!==undefined){return i}i=s.value
return typeof i==="string"?i.replace(ne,""):i==null?"":i}return}n=d.isFunction(t)
return this.each(function(i){var s
if(this.nodeType!==1){return}if(n){s=t.call(this,i,d(this).val())}else{s=t}if(s==null){s=""}else if(typeof s==="number"){s+=""}else if(d.isArray(s)){s=d.map(s,function(t){return t==null?"":t+""})}e=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()]
if(!e||!("set"in e)||e.set(this,s,"value")===undefined){this.value=s}})}})
d.extend({valHooks:{option:{get:function(t){var e=d.find.attr(t,"value")
return e!=null?e:d.trim(d.text(t))}},select:{get:function(t){var e,i,n=t.options,s=t.selectedIndex,r=t.type==="select-one"||s<0,o=r?null:[],a=r?s+1:n.length,l=s<0?a:r?s:0
for(;l<a;l++){i=n[l]
if((i.selected||l===s)&&(c.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!d.nodeName(i.parentNode,"optgroup"))){e=d(i).val()
if(r){return e}o.push(e)}}return o},set:function(t,e){var i,n,s=t.options,r=d.makeArray(e),o=s.length
while(o--){n=s[o]
if(n.selected=d.inArray(n.value,r)>=0){i=true}}if(!i){t.selectedIndex=-1}return r}}}})
d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(t,e){if(d.isArray(e)){return t.checked=d.inArray(d(t).val(),e)>=0}}}
if(!c.checkOn){d.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value}}})
d.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(t,e){d.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}})
d.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return arguments.length===1?this.off(t,"**"):this.off(e,t||"**",i)}})
var se=d.now()
var re=/\?/
d.parseJSON=function(t){return JSON.parse(t+"")}
d.parseXML=function(t){var e,i
if(!t||typeof t!=="string"){return null}try{i=new DOMParser
e=i.parseFromString(t,"text/xml")}catch(t){e=undefined}if(!e||e.getElementsByTagName("parsererror").length){d.error("Invalid XML: "+t)}return e}
var oe,ae,le=/#.*$/,he=/([?&])_=[^&]*/,ce=/^(.*?):[ \t]*([^\r\n]*)$/gm,ue=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,fe=/^(?:GET|HEAD)$/,de=/^\/\//,pe=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,me={},ge={},ve="*/".concat("*")
try{ae=location.href}catch(t){ae=u.createElement("a")
ae.href=""
ae=ae.href}oe=pe.exec(ae.toLowerCase())||[]
function ye(t){return function(e,i){if(typeof e!=="string"){i=e
e="*"}var n,s=0,r=e.toLowerCase().match(A)||[]
if(d.isFunction(i)){while(n=r[s++]){if(n[0]==="+"){n=n.slice(1)||"*";(t[n]=t[n]||[]).unshift(i)}else{(t[n]=t[n]||[]).push(i)}}}}}function be(t,e,i,n){var s={},r=t===ge
function o(a){var l
s[a]=true
d.each(t[a]||[],function(_,t){var a=t(e,i,n)
if(typeof a==="string"&&!r&&!s[a]){e.dataTypes.unshift(a)
o(a)
return false}else if(r){return!(l=a)}})
return l}return o(e.dataTypes[0])||!s["*"]&&o("*")}function we(t,e){var i,n,s=d.ajaxSettings.flatOptions||{}
for(i in e){if(e[i]!==undefined){(s[i]?t:n||(n={}))[i]=e[i]}}if(n){d.extend(true,t,n)}return t}function xe(t,e,i){var n,s,r,o,a=t.contents,l=t.dataTypes
while(l[0]==="*"){l.shift()
if(n===undefined){n=t.mimeType||e.getResponseHeader("Content-Type")}}if(n){for(s in a){if(a[s]&&a[s].test(n)){l.unshift(s)
break}}}if(l[0]in i){r=l[0]}else{for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){r=s
break}if(!o){o=s}}r=r||o}if(r){if(r!==l[0]){l.unshift(r)}return i[r]}}function _e(t,e,i,n){var s,r,o,a,l,h={},c=t.dataTypes.slice()
if(c[1]){for(o in t.converters){h[o.toLowerCase()]=t.converters[o]}}r=c.shift()
while(r){if(t.responseFields[r]){i[t.responseFields[r]]=e}if(!l&&n&&t.dataFilter){e=t.dataFilter(e,t.dataType)}l=r
r=c.shift()
if(r){if(r==="*"){r=l}else if(l!=="*"&&l!==r){o=h[l+" "+r]||h["* "+r]
if(!o){for(s in h){a=s.split(" ")
if(a[1]===r){o=h[l+" "+a[0]]||h["* "+a[0]]
if(o){if(o===true){o=h[s]}else if(h[s]!==true){r=a[0]
c.unshift(a[1])}break}}}}if(o!==true){if(o&&t["throws"]){e=o(e)}else{try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+l+" to "+r}}}}}}}return{state:"success",data:e}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ae,type:"GET",isLocal:ue.test(oe[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ve,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(t,e){return e?we(we(t,d.ajaxSettings),e):we(d.ajaxSettings,t)},ajaxPrefilter:ye(me),ajaxTransport:ye(ge),ajax:function(t,e){if(typeof t==="object"){e=t
t=undefined}e=e||{}
var i,n,s,r,o,a,l,h,c=d.ajaxSetup({},e),u=c.context||c,f=c.context&&(u.nodeType||u.jquery)?d(u):d.event,p=d.Deferred(),m=d.Callbacks("once memory"),g=c.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(t){var e
if(b===2){if(!r){r={}
while(e=ce.exec(s)){r[e[1].toLowerCase()]=e[2]}}e=r[t.toLowerCase()]}return e==null?null:e},getAllResponseHeaders:function(){return b===2?s:null},setRequestHeader:function(t,e){var i=t.toLowerCase()
if(!b){t=y[i]=y[i]||t
v[t]=e}return this},overrideMimeType:function(t){if(!b){c.mimeType=t}return this},statusCode:function(t){var e
if(t){if(b<2){for(e in t){g[e]=[g[e],t[e]]}}else{x.always(t[x.status])}}return this},abort:function(t){var e=t||w
if(i){i.abort(e)}C(0,e)
return this}}
p.promise(x).complete=m.add
x.success=x.done
x.error=x.fail
c.url=((t||c.url||ae)+"").replace(le,"").replace(de,oe[1]+"//")
c.type=e.method||e.type||c.method||c.type
c.dataTypes=d.trim(c.dataType||"*").toLowerCase().match(A)||[""]
if(c.crossDomain==null){a=pe.exec(c.url.toLowerCase())
c.crossDomain=!!(a&&(a[1]!==oe[1]||a[2]!==oe[2]||(a[3]||(a[1]==="http:"?"80":"443"))!==(oe[3]||(oe[1]==="http:"?"80":"443"))))}if(c.data&&c.processData&&typeof c.data!=="string"){c.data=d.param(c.data,c.traditional)}be(me,c,e,x)
if(b===2){return x}l=c.global
if(l&&d.active++===0){d.event.trigger("ajaxStart")}c.type=c.type.toUpperCase()
c.hasContent=!fe.test(c.type)
n=c.url
if(!c.hasContent){if(c.data){n=c.url+=(re.test(n)?"&":"?")+c.data
delete c.data}if(c.cache===false){c.url=he.test(n)?n.replace(he,"$1_="+se++):n+(re.test(n)?"&":"?")+"_="+se++}}if(c.ifModified){if(d.lastModified[n]){x.setRequestHeader("If-Modified-Since",d.lastModified[n])}if(d.etag[n]){x.setRequestHeader("If-None-Match",d.etag[n])}}if(c.data&&c.hasContent&&c.contentType!==false||e.contentType){x.setRequestHeader("Content-Type",c.contentType)}x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+ve+"; q=0.01":""):c.accepts["*"])
for(h in c.headers){x.setRequestHeader(h,c.headers[h])}if(c.beforeSend&&(c.beforeSend.call(u,x,c)===false||b===2)){return x.abort()}w="abort"
for(h in{success:1,error:1,complete:1}){x[h](c[h])}i=be(ge,c,e,x)
if(!i){C(-1,"No Transport")}else{x.readyState=1
if(l){f.trigger("ajaxSend",[x,c])}if(c.async&&c.timeout>0){o=setTimeout(function(){x.abort("timeout")},c.timeout)}try{b=1
i.send(v,C)}catch(t){if(b<2){C(-1,t)}else{throw t}}}function C(t,e,r,a){var h,v,y,w,C,k=e
if(b===2){return}b=2
if(o){clearTimeout(o)}i=undefined
s=a||""
x.readyState=t>0?4:0
h=t>=200&&t<300||t===304
if(r){w=xe(c,x,r)}w=_e(c,w,x,h)
if(h){if(c.ifModified){C=x.getResponseHeader("Last-Modified")
if(C){d.lastModified[n]=C}C=x.getResponseHeader("etag")
if(C){d.etag[n]=C}}if(t===204||c.type==="HEAD"){k="nocontent"}else if(t===304){k="notmodified"}else{k=w.state
v=w.data
y=w.error
h=!y}}else{y=k
if(t||!k){k="error"
if(t<0){t=0}}}x.status=t
x.statusText=(e||k)+""
if(h){p.resolveWith(u,[v,k,x])}else{p.rejectWith(u,[x,k,y])}x.statusCode(g)
g=undefined
if(l){f.trigger(h?"ajaxSuccess":"ajaxError",[x,c,h?v:y])}m.fireWith(u,[x,k])
if(l){f.trigger("ajaxComplete",[x,c])
if(!--d.active){d.event.trigger("ajaxStop")}}}return x},getJSON:function(t,e,i){return d.get(t,e,i,"json")},getScript:function(t,e){return d.get(t,undefined,e,"script")}})
d.each(["get","post"],function(t,e){d[e]=function(t,i,n,s){if(d.isFunction(i)){s=s||n
n=i
i=undefined}return d.ajax({url:t,type:e,dataType:s,data:i,success:n})}})
d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){d.fn[e]=function(t){return this.on(e,t)}})
d._evalUrl=function(t){return d.ajax({url:t,type:"GET",dataType:"script",async:false,global:false,throws:true})}
d.fn.extend({wrapAll:function(t){var e
if(d.isFunction(t)){return this.each(function(e){d(this).wrapAll(t.call(this,e))})}if(this[0]){e=d(t,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){e.insertBefore(this[0])}e.map(function(){var t=this
while(t.firstElementChild){t=t.firstElementChild}return t}).append(this)}return this},wrapInner:function(t){if(d.isFunction(t)){return this.each(function(e){d(this).wrapInner(t.call(this,e))})}return this.each(function(){var e=d(this),i=e.contents()
if(i.length){i.wrapAll(t)}else{e.append(t)}})},wrap:function(t){var e=d.isFunction(t)
return this.each(function(i){d(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(){return this.parent().each(function(){if(!d.nodeName(this,"body")){d(this).replaceWith(this.childNodes)}}).end()}})
d.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0}
d.expr.filters.visible=function(t){return!d.expr.filters.hidden(t)}
var Ce=/%20/g,ke=/\[\]$/,Te=/\r?\n/g,Se=/^(?:submit|button|image|reset|file)$/i,De=/^(?:input|select|textarea|keygen)/i
function Ee(t,e,i,n){var s
if(d.isArray(e)){d.each(e,function(e,s){if(i||ke.test(t)){n(t,s)}else{Ee(t+"["+(typeof s==="object"?e:"")+"]",s,i,n)}})}else if(!i&&d.type(e)==="object"){for(s in e){Ee(t+"["+s+"]",e[s],i,n)}}else{n(t,e)}}d.param=function(t,e){var i,n=[],s=function(t,e){e=d.isFunction(e)?e():e==null?"":e
n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)}
if(e===undefined){e=d.ajaxSettings&&d.ajaxSettings.traditional}if(d.isArray(t)||t.jquery&&!d.isPlainObject(t)){d.each(t,function(){s(this.name,this.value)})}else{for(i in t){Ee(i,t[i],e,s)}}return n.join("&").replace(Ce,"+")}
d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=d.prop(this,"elements")
return t?d.makeArray(t):this}).filter(function(){var t=this.type
return this.name&&!d(this).is(":disabled")&&De.test(this.nodeName)&&!Se.test(t)&&(this.checked||!Y.test(t))}).map(function(t,e){var i=d(this).val()
return i==null?null:d.isArray(i)?d.map(i,function(t){return{name:e.name,value:t.replace(Te,"\r\n")}}):{name:e.name,value:i.replace(Te,"\r\n")}}).get()}})
d.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(t){}}
var Pe=0,Ie={},Ae={0:200,1223:204},Ne=d.ajaxSettings.xhr()
if(t.ActiveXObject){d(t).on("unload",function(){for(var t in Ie){Ie[t]()}})}c.cors=!!Ne&&"withCredentials"in Ne
c.ajax=Ne=!!Ne
d.ajaxTransport(function(t){var e
if(c.cors||Ne&&!t.crossDomain){return{send:function(i,n){var s,r=t.xhr(),o=++Pe
r.open(t.type,t.url,t.async,t.username,t.password)
if(t.xhrFields){for(s in t.xhrFields){r[s]=t.xhrFields[s]}}if(t.mimeType&&r.overrideMimeType){r.overrideMimeType(t.mimeType)}if(!t.crossDomain&&!i["X-Requested-With"]){i["X-Requested-With"]="XMLHttpRequest"}for(s in i){r.setRequestHeader(s,i[s])}e=function(t){return function(){if(e){delete Ie[o]
e=r.onload=r.onerror=null
if(t==="abort"){r.abort()}else if(t==="error"){n(r.status,r.statusText)}else{n(Ae[r.status]||r.status,r.statusText,typeof r.responseText==="string"?{text:r.responseText}:undefined,r.getAllResponseHeaders())}}}}
r.onload=e()
r.onerror=e("error")
e=Ie[o]=e("abort")
try{r.send(t.hasContent&&t.data||null)}catch(t){if(e){throw t}}},abort:function(){if(e){e()}}}}})
d.ajaxPrefilter(function(t){if(t.crossDomain){t.contents.script=false}})
d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){d.globalEval(t)
return t}}})
d.ajaxPrefilter("script",function(t){if(t.cache===undefined){t.cache=false}if(t.crossDomain){t.type="GET"}})
d.ajaxTransport("script",function(t){if(t.crossDomain){var e,i
return{send:function(_,n){e=d("<script>").prop({async:true,charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove()
i=null
if(t){n(t.type==="error"?404:200,t.type)}})
u.head.appendChild(e[0])},abort:function(){if(i){i()}}}}})
var He=[],Oe=/(=)\?(?=&|$)|\?\?/
d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=He.pop()||d.expando+"_"+se++
this[t]=true
return t}})
d.ajaxPrefilter("json jsonp",function(e,i,n){var s,r,o,a=e.jsonp!==false&&(Oe.test(e.url)?"url":typeof e.data==="string"&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Oe.test(e.data)&&"data")
if(a||e.dataTypes[0]==="jsonp"){s=e.jsonpCallback=d.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback
if(a){e[a]=e[a].replace(Oe,"$1"+s)}else if(e.jsonp!==false){e.url+=(re.test(e.url)?"&":"?")+e.jsonp+"="+s}e.converters["script json"]=function(){if(!o){d.error(s+" was not called")}return o[0]}
e.dataTypes[0]="json"
r=t[s]
t[s]=function(){o=arguments}
n.always(function(){t[s]=r
if(e[s]){e.jsonpCallback=i.jsonpCallback
He.push(s)}if(o&&d.isFunction(r)){r(o[0])}o=r=undefined})
return"script"}})
d.parseHTML=function(t,e,i){if(!t||typeof t!=="string"){return null}if(typeof e==="boolean"){i=e
e=false}e=e||u
var n=x.exec(t),s=!i&&[]
if(n){return[e.createElement(n[1])]}n=d.buildFragment([t],e,s)
if(s&&s.length){d(s).remove()}return d.merge([],n.childNodes)}
var ze=d.fn.load
d.fn.load=function(t,e,i){if(typeof t!=="string"&&ze){return ze.apply(this,arguments)}var n,s,r,o=this,a=t.indexOf(" ")
if(a>=0){n=d.trim(t.slice(a))
t=t.slice(0,a)}if(d.isFunction(e)){i=e
e=undefined}else if(e&&typeof e==="object"){s="POST"}if(o.length>0){d.ajax({url:t,type:s,dataType:"html",data:e}).done(function(t){r=arguments
o.html(n?d("<div>").append(d.parseHTML(t)).find(n):t)}).complete(i&&function(t,e){o.each(i,r||[t.responseText,e,t])})}return this}
d.expr.filters.animated=function(t){return d.grep(d.timers,function(e){return t===e.elem}).length}
var Me=t.document.documentElement
function je(t){return d.isWindow(t)?t:t.nodeType===9&&t.defaultView}d.offset={setOffset:function(t,e,i){var n,s,r,o,a,l,h,c=d.css(t,"position"),u=d(t),f={}
if(c==="static"){t.style.position="relative"}a=u.offset()
r=d.css(t,"top")
l=d.css(t,"left")
h=(c==="absolute"||c==="fixed")&&(r+l).indexOf("auto")>-1
if(h){n=u.position()
o=n.top
s=n.left}else{o=parseFloat(r)||0
s=parseFloat(l)||0}if(d.isFunction(e)){e=e.call(t,i,a)}if(e.top!=null){f.top=e.top-a.top+o}if(e.left!=null){f.left=e.left-a.left+s}if("using"in e){e.using.call(t,f)}else{u.css(f)}}}
d.fn.extend({offset:function(t){if(arguments.length){return t===undefined?this:this.each(function(e){d.offset.setOffset(this,t,e)})}var e,i,n=this[0],s={top:0,left:0},r=n&&n.ownerDocument
if(!r){return}e=r.documentElement
if(!d.contains(e,n)){return s}if(typeof n.getBoundingClientRect!==Q){s=n.getBoundingClientRect()}i=je(r)
return{top:s.top+i.pageYOffset-e.clientTop,left:s.left+i.pageXOffset-e.clientLeft}},position:function(){if(!this[0]){return}var t,e,i=this[0],n={top:0,left:0}
if(d.css(i,"position")==="fixed"){e=i.getBoundingClientRect()}else{t=this.offsetParent()
e=this.offset()
if(!d.nodeName(t[0],"html")){n=t.offset()}n.top+=d.css(t[0],"borderTopWidth",true)
n.left+=d.css(t[0],"borderLeftWidth",true)}return{top:e.top-n.top-d.css(i,"marginTop",true),left:e.left-n.left-d.css(i,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var t=this.offsetParent||Me
while(t&&(!d.nodeName(t,"html")&&d.css(t,"position")==="static")){t=t.offsetParent}return t||Me})}})
d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,i){var n="pageYOffset"===i
d.fn[e]=function(s){return M(this,function(e,s,r){var o=je(e)
if(r===undefined){return o?o[i]:e[s]}if(o){o.scrollTo(!n?r:t.pageXOffset,n?r:t.pageYOffset)}else{e[s]=r}},e,s,arguments.length,null)}})
d.each(["top","left"],function(t,e){d.cssHooks[e]=St(c.pixelPosition,function(t,i){if(i){i=Tt(t,e)
return Ct.test(i)?d(t).position()[e]+"px":i}})})
d.each({Height:"height",Width:"width"},function(t,e){d.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){d.fn[n]=function(n,s){var r=arguments.length&&(i||typeof n!=="boolean"),o=i||(n===true||s===true?"margin":"border")
return M(this,function(e,i,n){var s
if(d.isWindow(e)){return e.document.documentElement["client"+t]}if(e.nodeType===9){s=e.documentElement
return Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])}return n===undefined?d.css(e,i,o):d.style(e,i,n,o)},e,r?n:undefined,r,null)}})})
d.fn.size=function(){return this.length}
d.fn.andSelf=d.fn.addBack
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return d})}var We=t.jQuery,Le=t.$
d.noConflict=function(e){if(t.$===d){t.$=Le}if(e&&t.jQuery===d){t.jQuery=We}return d}
if(typeof e===Q){t.jQuery=t.$=d}return d});(function($){var t=require("../../../javascript/shared-package/ka.js")
var e=require("../../../javascript/shared-package/api-action-results.js")
$(document).ajaxComplete(function(t,i,n){if(!i){return}e.checkApiVersionMismatch(function(t){return i.getResponseHeader(t)})
e.checkApiResponse(i.responseText,function(t){return i.getResponseHeader(t)})})
$.ajaxSetup({beforeSend:function(i,n){if(t.language&&n&&n.url){n.url=e.addLangParam(n.url,t.language,t.usePreviewFMS)}if(n&&n.url){if(!e.checkZeroRating(n.url)){$.error("Non-zero-rated request to "+n.url+".")}if(n.cache===undefined){n.url=e.addCacheParam(n.url)}var s=e.addXsrfKey(n.url,function(t,e){return i.setRequestHeader(t,e)})
if(!s){n.error&&n.error()
return false}}}})})(jQuery);(function(t,e,i){var n={}
t.migrateWarnings=[]
if(!t.migrateMute&&e.console&&console.log){}if(t.migrateTrace===i){t.migrateTrace=true}t.migrateReset=function(){n={}
t.migrateWarnings.length=0}
function s(i){if(!n[i]){n[i]=true
t.migrateWarnings.push(i)
if(e.console&&console.warn&&!t.migrateMute){console.warn("JQMIGRATE: "+i)
if(t.migrateTrace&&console.trace){console.trace()}}}}function r(e,i,n,r){if(Object.defineProperty){try{Object.defineProperty(e,i,{configurable:true,enumerable:true,get:function(){s(r)
return n},set:function(t){s(r)
n=t}})
return}catch(t){}}t._definePropertyBroken=true
e[i]=n}if(document.compatMode==="BackCompat"){s("jQuery is not compatible with Quirks Mode")}var o=t("<input/>",{size:1}).attr("size")&&t.attrFn,a=t.attr,l=t.attrHooks.value&&t.attrHooks.value.get||function(){return null},h=t.attrHooks.value&&t.attrHooks.value.set||function(){return i},c=/^(?:input|button)$/i,u=/^[238]$/,f=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,d=/^(?:checked|selected)$/i
r(t,"attrFn",o||{},"jQuery.attrFn is deprecated")
t.attr=function(e,n,r,l){var h=n.toLowerCase(),p=e&&e.nodeType
if(l){if(a.length<4){s("jQuery.fn.attr( props, pass ) is deprecated")}if(e&&!u.test(p)&&(o?n in o:t.isFunction(t.fn[n]))){return t(e)[n](r)}}if(n==="type"&&r!==i&&c.test(e.nodeName)&&e.parentNode){s("Can't change the 'type' of an input or button in IE 6/7/8")}if(!t.attrHooks[h]&&f.test(h)){t.attrHooks[h]={get:function(e,n){var s,r=t.prop(e,n)
return r===true||typeof r!=="boolean"&&(s=e.getAttributeNode(n))&&s.nodeValue!==false?n.toLowerCase():i},set:function(e,i,n){var s
if(i===false){t.removeAttr(e,n)}else{s=t.propFix[n]||n
if(s in e){e[s]=true}e.setAttribute(n,n.toLowerCase())}return n}}
if(d.test(h)){s("jQuery.fn.attr('"+h+"') may use property instead of attribute")}}return a.call(t,e,n,r)}
t.attrHooks.value={get:function(t,e){var i=(t.nodeName||"").toLowerCase()
if(i==="button"){return l.apply(this,arguments)}if(i!=="input"&&i!=="option"){s("jQuery.fn.attr('value') no longer gets properties")}return e in t?t.value:null},set:function(t,e){var i=(t.nodeName||"").toLowerCase()
if(i==="button"){return h.apply(this,arguments)}if(i!=="input"&&i!=="option"){s("jQuery.fn.attr('value', val) no longer sets properties")}t.value=e}}
var p,m,g=t.fn.init,v=t.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/
t.fn.init=function(e,i,n){var r
if(e&&typeof e==="string"&&!t.isPlainObject(i)&&(r=y.exec(e))&&r[1]){if(e.charAt(0)!=="<"){s("$(html) HTML strings must start with '<' character")}if(i&&i.context){i=i.context}if(t.parseHTML){return g.call(this,t.parseHTML(t.trim(e),i,true),i,n)}}return g.apply(this,arguments)}
t.fn.init.prototype=t.fn
t.parseJSON=function(t){if(!t&&t!==null){s("jQuery.parseJSON requires a valid JSON string")
return null}return v.apply(this,arguments)}
t.uaMatch=function(t){t=t.toLowerCase()
var e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[]
return{browser:e[1]||"",version:e[2]||"0"}}
if(!t.browser){p=t.uaMatch(navigator.userAgent)
m={}
if(p.browser){m[p.browser]=true
m.version=p.version}if(m.chrome){m.webkit=true}else if(m.webkit){m.safari=true}t.browser=m}r(t,"browser",t.browser,"jQuery.browser is deprecated")
t.sub=function(){function e(t,i){return new e.fn.init(t,i)}t.extend(true,e,this)
e.superclass=this
e.fn=e.prototype=this()
e.fn.constructor=e
e.sub=this.sub
e.fn.init=function n(s,r){if(r&&r instanceof t&&!(r instanceof e)){r=e(r)}return t.fn.init.call(this,s,r,i)}
e.fn.init.prototype=e.fn
var i=e(document)
s("jQuery.sub() is deprecated")
return e}
t.ajaxSetup({converters:{"text json":t.parseJSON}})
var b=t.fn.data
t.fn.data=function(e){var n,r,o=this[0]
if(o&&e==="events"&&arguments.length===1){n=t.data(o,e)
r=t._data(o,e)
if((n===i||n===r)&&r!==i){s("Use of jQuery.fn.data('events') is deprecated")
return r}}return b.apply(this,arguments)}
var w=/\/(java|ecma)script/i,x=t.fn.andSelf||t.fn.addBack
t.fn.andSelf=function(){s("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()")
return x.apply(this,arguments)}
if(!t.clean){t.clean=function(e,i,n,r){i=i||document
i=!i.nodeType&&i[0]||i
i=i.ownerDocument||i
s("jQuery.clean() is deprecated")
var o,a,l,h,c=[]
t.merge(c,t.buildFragment(e,i).childNodes)
if(n){l=function(t){if(!t.type||w.test(t.type)){return r?r.push(t.parentNode?t.parentNode.removeChild(t):t):n.appendChild(t)}}
for(o=0;(a=c[o])!=null;o++){if(!(t.nodeName(a,"script")&&l(a))){n.appendChild(a)
if(typeof a.getElementsByTagName!=="undefined"){h=t.grep(t.merge([],a.getElementsByTagName("script")),l)
c.splice.apply(c,[o+1,0].concat(h))
o+=h.length}}}}return c}}var C=t.event.add,k=t.event.remove,T=t.event.trigger,S=t.fn.toggle,D=t.fn.live,E=t.fn.die,P="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",I=new RegExp("\\b(?:"+P+")\\b"),A=/(?:^|\s)hover(\.\S+|)\b/,N=function(e){if(typeof e!=="string"||t.event.special.hover){return e}if(A.test(e)){s("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return e&&e.replace(A,"mouseenter$1 mouseleave$1")}
if(t.event.props&&t.event.props[0]!=="attrChange"){t.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(t.event.dispatch){r(t.event,"handle",t.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}t.event.add=function(t,e,i,n,r){if(t!==document&&I.test(e)){s("AJAX events should be attached to document: "+e)}C.call(this,t,N(e||""),i,n,r)}
t.event.remove=function(t,e,i,n,s){k.call(this,t,N(e)||"",i,n,s)}
t.fn.error=function(){var t=Array.prototype.slice.call(arguments,0)
s("jQuery.fn.error() is deprecated")
t.splice(0,0,"error")
if(arguments.length){return this.bind.apply(this,t)}this.triggerHandler.apply(this,t)
return this}
t.fn.toggle=function(e,i){if(!t.isFunction(e)||!t.isFunction(i)){return S.apply(this,arguments)}s("jQuery.fn.toggle(handler, handler...) is deprecated")
var n=arguments,r=e.guid||t.guid++,o=0,a=function(i){var s=(t._data(this,"lastToggle"+e.guid)||0)%o
t._data(this,"lastToggle"+e.guid,s+1)
i.preventDefault()
return n[s].apply(this,arguments)||false}
a.guid=r
while(o<n.length){n[o++].guid=r}return this.click(a)}
t.fn.live=function(e,i,n){s("jQuery.fn.live() is deprecated")
if(D){return D.apply(this,arguments)}t(this.context).on(e,this.selector,i,n)
return this}
t.fn.die=function(e,i){s("jQuery.fn.die() is deprecated")
if(E){return E.apply(this,arguments)}t(this.context).off(e,this.selector||"**",i)
return this}
t.event.trigger=function(t,e,i,n){if(!i&&!I.test(t)){s("Global events are undocumented and deprecated")}return T.call(this,t,e,i||document,n)}
t.each(P.split("|"),function(_,e){t.event.special[e]={setup:function(){var i=this
if(i!==document){t.event.add(document,e+"."+t.guid,function(){t.event.trigger(e,null,i,true)})
t._data(this,e,t.guid++)}return false},teardown:function(){if(this!==document){t.event.remove(document,e+"."+t._data(this,e))}return false}}})})(jQuery,window);(function($,t,e,i){var n="virtualMouseBindings",s="virtualTouchID",r="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),o="clientX clientY pageX pageY screenX screenY".split(" "),a=$.event.mouseHooks?$.event.mouseHooks.props:[],l=$.event.props.concat(a),h={},c=0,u=0,f=0,d=false,p=[],m=false,g=false,v="addEventListener"in e,y=$(e),b=1,w=0
$.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500}
function x(t){while(t&&typeof t.originalEvent!=="undefined"){t=t.originalEvent}return t}function C(t,e){var n=t.type,s,r,a,h,c,u,f,d
t=$.Event(t)
t.type=e
s=t.originalEvent
r=$.event.props
if(n.search(/mouse/)>-1){r=l}if(s){for(f=r.length,h;f;){h=r[--f]
t[h]=s[h]}}if(n.search(/mouse(down|up)|click/)>-1&&!t.which){t.which=1}if(n.search(/^touch/)!==-1){a=x(s)
n=a.touches
c=a.changedTouches
u=n&&n.length?n[0]:c&&c.length?c[0]:i
if(u){for(d=0,len=o.length;d<len;d++){h=o[d]
t[h]=u[h]}}}return t}function k(t){var e={},i,s
while(t){i=$.data(t,n)
for(s in i){if(i[s]){e[s]=e.hasVirtualBinding=true}}t=t.parentNode}return e}function T(t,e){var i
while(t){i=$.data(t,n)
if(i&&(!e||i[e])){return t}t=t.parentNode}return null}function S(){g=false}function D(){g=true}function E(){w=0
p.length=0
m=false
D()}function P(){S()}function I(){A()
c=setTimeout(function(){c=0
E()},$.vmouse.resetTimerDuration)}function A(){if(c){clearTimeout(c)
c=0}}function N(t,e,i){var n
if(i&&i[t]||!i&&T(e.target,t)){n=C(e,t)
$(e.target).trigger(n)}return n}function H(t){var e=$.data(t.target,s)
if(!m&&(!w||w!==e)){var i=N("v"+t.type,t)
if(i){if(i.isDefaultPrevented()){t.preventDefault()}if(i.isPropagationStopped()){t.stopPropagation()}if(i.isImmediatePropagationStopped()){t.stopImmediatePropagation()}}}}function O(t){var e=x(t).touches,i,n
if(e&&e.length===1){i=t.target
n=k(i)
if(n.hasVirtualBinding){w=b++
$.data(i,s,w)
A()
P()
d=false
var r=x(t).touches[0]
u=r.pageX
f=r.pageY
N("vmouseover",t,n)
N("vmousedown",t,n)}}}function z(t){if(g){return}if(!d){N("vmousecancel",t,k(t.target))}d=true
I()}function M(t){if(g){return}var e=x(t).touches[0],i=d,n=$.vmouse.moveDistanceThreshold
d=d||(Math.abs(e.pageX-u)>n||Math.abs(e.pageY-f)>n),flags=k(t.target)
if(d&&!i){N("vmousecancel",t,flags)}N("vmousemove",t,flags)
I()}function j(t){if(g){return}D()
var e=k(t.target),i
N("vmouseup",t,e)
if(!d){var n=N("vclick",t,e)
if(n&&n.isDefaultPrevented()){i=x(t).changedTouches[0]
p.push({touchID:w,x:i.clientX,y:i.clientY})
m=true}}N("vmouseout",t,e)
d=false
I()}function W(t){var e=$.data(t,n),i
if(e){for(i in e){if(e[i]){return true}}}return false}function L(){}function R(t){var e=t.substr(1)
return{setup:function(i,s){if(!W(this)){$.data(this,n,{})}var r=$.data(this,n)
r[t]=true
h[t]=(h[t]||0)+1
if(h[t]===1){y.bind(e,H)}$(this).bind(e,L)
if(v){h["touchstart"]=(h["touchstart"]||0)+1
if(h["touchstart"]===1){y.bind("touchstart",O).bind("touchend",j).bind("touchmove",M).bind("scroll",z)}}},teardown:function(i,s){--h[t]
if(!h[t]){y.unbind(e,H)}if(v){--h["touchstart"]
if(!h["touchstart"]){y.unbind("touchstart",O).unbind("touchmove",M).unbind("touchend",j).unbind("scroll",z)}}var r=$(this),o=$.data(this,n)
if(o){o[t]=false}r.unbind(e,L)
if(!W(this)){r.removeData(n)}}}}for(var F=0;F<r.length;F++){$.event.special[r[F]]=R(r[F])}if(v){e.addEventListener("click",function(t){var e=p.length,i=t.target,n,r,o,a,l,h
if(e){n=t.clientX
r=t.clientY
threshold=$.vmouse.clickDistanceThreshold
o=i
while(o){for(a=0;a<e;a++){l=p[a]
h=0
if(o===i&&Math.abs(l.x-n)<threshold&&Math.abs(l.y-r)<threshold||$.data(o,s)===l.touchID){t.preventDefault()
t.stopPropagation()
return}}o=o.parentNode}}},true)}})(jQuery,window,document)
var _={isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return typeof t==="string"},isNumber:function(t){return typeof t==="number"},isArray:$.isArray,isFunction:$.isFunction,isObject:$.isPlainObject,isUndefined:function(t){return typeof t==="undefined"},bind:$.proxy,each:function(t,e){$.each(t,i)
function i(t,i){return e(i,t)}},map:$.map,filter:$.grep,every:function(t,e){var i=true
if(!t){return i}$.each(t,function(n,s){if(!(i=e.call(null,s,n,t))){return false}})
return!!i},some:function(t,e){var i=false
if(!t){return i}$.each(t,function(n,s){if(i=e.call(null,s,n,t)){return false}})
return!!i},mixin:$.extend,getUniqueId:function(){var t=0
return function(){return t++}}(),templatify:function t(e){return $.isFunction(e)?e:i
function i(){return String(e)}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,i){var n,s
return function(){var r=this,o=arguments,a,l
a=function(){n=null
if(!i){s=t.apply(r,o)}}
l=i&&!n
clearTimeout(n)
n=setTimeout(a,e)
if(l){s=t.apply(r,o)}return s}},throttle:function(t,e){var i,n,s,r,o,a
o=0
a=function(){o=new Date
s=null
r=t.apply(i,n)}
return function(){var l=new Date,h=e-(l-o)
i=this
n=arguments
if(h<=0){clearTimeout(s)
s=null
o=l
r=t.apply(i,n)}else if(!s){s=setTimeout(a,h)}return r}},noop:function(){}}
var html={wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}
var css={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}}
if(_.isMsie()){_.mixin(css.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})}if(_.isMsie()&&_.isMsie()<=7){_.mixin(css.input,{marginTop:"-1px"})}var EventBus=function(){var t="typeahead:"
function e(t){if(!t||!t.el){$.error("EventBus initialized without el")}this.$el=$(t.el)}_.mixin(e.prototype,{trigger:function(e){var i=[].slice.call(arguments,1)
this.$el.trigger(t+e,i)}})
return e}()
var EventEmitter=function(){var t=/\s+/,e=l()
return{onSync:s,onAsync:n,off:r,trigger:o}
function i(e,i,n,s){var r
if(!n){return this}i=i.split(t)
n=s?h(n,s):n
this._callbacks=this._callbacks||{}
while(r=i.shift()){this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]}
this._callbacks[r][e].push(n)}return this}function n(t,e,n){return i.call(this,"async",t,e,n)}function s(t,e,n){return i.call(this,"sync",t,e,n)}function r(e){var i
if(!this._callbacks){return this}e=e.split(t)
while(i=e.shift()){delete this._callbacks[i]}return this}function o(i){var n,s,r,o,l
if(!this._callbacks){return this}i=i.split(t)
r=[].slice.call(arguments,1)
while((n=i.shift())&&(s=this._callbacks[n])){o=a(s.sync,this,[n].concat(r))
l=a(s.async,this,[n].concat(r))
o()&&e(l)}return this}function a(t,e,i){return n
function n(){var n
for(var s=0;!n&&s<t.length;s+=1){n=t[s].apply(e,i)===false}return!n}}function l(){var t
if(window.setImmediate){t=function t(e){setImmediate(function(){e()})}}else{t=function t(e){setTimeout(function(){e()},0)}}return t}function h(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}}()
var highlight=function(t){var e={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false}
return function n(s){var r
s=_.mixin({},e,s)
if(!s.node||!s.pattern){return}s.pattern=_.isArray(s.pattern)?s.pattern:[s.pattern]
r=i(s.pattern,s.caseSensitive,s.wordsOnly)
a(s.node,o)
function o(e){var i,n
if(i=r.exec(e.data)){wrapperNode=t.createElement(s.tagName)
s.className&&(wrapperNode.className=s.className)
n=e.splitText(i.index)
n.splitText(i[0].length)
wrapperNode.appendChild(n.cloneNode(true))
e.parentNode.replaceChild(wrapperNode,n)}return!!i}function a(t,e){var i,n=3
for(var s=0;s<t.childNodes.length;s++){i=t.childNodes[s]
if(i.nodeType===n){s+=e(i)?1:0}else{a(i,e)}}}}
function i(t,e,i){var n=[],s
for(var r=0;r<t.length;r++){n.push(_.escapeRegExChars(t[r]))}s=i?"\\b("+n.join("|")+")\\b":"("+n.join("|")+")"
return e?new RegExp(s):new RegExp(s,"i")}}(window.document)
var Input=function(){var t
t={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"}
function e(e){var n=this,s,r,o,a
e=e||{}
if(!e.input){$.error("input is missing")}s=_.bind(this._onBlur,this)
r=_.bind(this._onFocus,this)
o=_.bind(this._onKeydown,this)
a=_.bind(this._onInput,this)
this.$hint=$(e.hint)
this.$input=$(e.input).on("blur.tt",s).on("focus.tt",r).on("keydown.tt",o)
if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=_.noop}if(!_.isMsie()){this.$input.on("input.tt",a)}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(e){if(t[e.which||e.keyCode]){return}_.defer(_.bind(n._onInput,n,e))})}this.query=this.$input.val()
this.$overflowHelper=i(this.$input)}e.normalizeQuery=function(t){return(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")}
_.mixin(e.prototype,EventEmitter,{_onBlur:function t(){this.resetInputValue()
this.trigger("blurred")},_onFocus:function t(){this.trigger("focused")},_onKeydown:function e(i){var n=t[i.which||i.keyCode]
this._managePreventDefault(n,i)
if(n&&this._shouldTrigger(n,i)){this.trigger(n+"Keyed",i)}},_onInput:function t(){this._checkInputValue()},_managePreventDefault:function t(e,i){var n,r,o
switch(e){case"tab":r=this.getHint()
o=this.getInputValue()
n=r&&r!==o&&!s(i)
break
case"up":case"down":n=!s(i)
break
default:n=false}n&&i.preventDefault()},_shouldTrigger:function t(e,i){var n
switch(e){case"tab":n=!s(i)
break
default:n=true}return n},_checkInputValue:function t(){var e,i,s
e=this.getInputValue()
i=n(e,this.query)
s=i?this.query.length!==e.length:false
if(!i){this.trigger("queryChanged",this.query=e)}else if(s){this.trigger("whitespaceChanged",this.query)}},focus:function t(){this.$input.focus()},blur:function t(){this.$input.blur()},getQuery:function t(){return this.query},setQuery:function t(e){this.query=e},getInputValue:function t(){return this.$input.val()},setInputValue:function t(e,i){this.$input.val(e)
i?this.clearHint():this._checkInputValue()},resetInputValue:function t(){this.setInputValue(this.query,true)},getHint:function t(){return this.$hint.val()},setHint:function t(e){this.$hint.val(e)},clearHint:function t(){this.setHint("")},clearHintIfInvalid:function t(){var e,i,n,s
e=this.getInputValue()
i=this.getHint()
n=e!==i&&i.indexOf(e)===0
s=e!==""&&n&&!this.hasOverflow()
!s&&this.clearHint()},getLanguageDirection:function t(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function t(){var e=this.$input.width()-2
this.$overflowHelper.text(this.getInputValue())
return this.$overflowHelper.width()>=e},isCursorAtEnd:function(){var t,e,i
t=this.$input.val().length
e=this.$input[0].selectionStart
if(_.isNumber(e)){return e===t}else if(document.selection){i=document.selection.createRange()
i.moveStart("character",-t)
return t===i.text.length}return true},destroy:function t(){this.$hint.off(".tt")
this.$input.off(".tt")
this.$hint=this.$input=this.$overflowHelper=null}})
return e
function i(t){return $('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontVariant:t.css("font-variant"),fontWeight:t.css("font-weight"),wordSpacing:t.css("word-spacing"),letterSpacing:t.css("letter-spacing"),textIndent:t.css("text-indent"),textRendering:t.css("text-rendering"),textTransform:t.css("text-transform")}).insertAfter(t)}function n(t,i){return e.normalizeQuery(t)===e.normalizeQuery(i)}function s(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}}()
var Dataset=function(){var t="ttDataset",e="ttValue",i="ttDatum"
function n(t){t=t||{}
t.templates=t.templates||{}
if(!t.source){$.error("missing source")}if(t.name&&!o(t.name)){$.error("invalid dataset name: "+t.name)}this.query=null
this.highlight=!!t.highlight
this.name=t.name||_.getUniqueId()
this.source=t.source
this.displayFn=s(t.display||t.displayKey)
this.templates=r(t.templates,this.displayFn)
this.$el=$(html.dataset.replace("%CLASS%",this.name))}n.extractDatasetName=function e(i){return $(i).data(t)}
n.extractValue=function t(i){return $(i).data(e)}
n.extractDatum=function t(e){return $(e).data(i)}
_.mixin(n.prototype,EventEmitter,{_render:function n(s,r){if(!this.$el){return}var o=this,a
this.$el.empty()
a=r&&r.length
if(!a&&this.templates.empty){this.$el.html(l()).prepend(o.templates.header?c():null).append(o.templates.footer?u():null)}else if(a){this.$el.html(h()).prepend(o.templates.header?c():null).append(o.templates.footer?u():null)}this.trigger("rendered")
function l(){return o.templates.empty({query:s,isEmpty:true})}function h(){var n,a
n=$(html.suggestions).css(css.suggestions)
a=_.map(r,l)
n.append.apply(n,a)
o.highlight&&highlight({node:n[0],pattern:s})
return n
function l(n){var s
s=$(html.suggestion).append(o.templates.suggestion(n)).data(t,o.name).data(e,o.displayFn(n)).data(i,n)
s.children().each(function(){$(this).css(css.suggestionChild)})
return s}}function c(){return o.templates.header({query:s,isEmpty:!a})}function u(){return o.templates.footer({query:s,isEmpty:!a})}},getRoot:function t(){return this.$el},update:function t(e){var i=this
this.query=e
this.canceled=false
this.source(e,n)
function n(t){if(!i.canceled&&e===i.query){i._render(e,t)}}},cancel:function t(){this.canceled=true},clear:function t(){this.cancel()
this.$el.empty()
this.trigger("rendered")},isEmpty:function t(){return this.$el.is(":empty")},destroy:function t(){this.$el=null}})
return n
function s(t){t=t||"value"
return _.isFunction(t)?t:e
function e(e){return e[t]}}function r(t,e){return{empty:t.empty&&_.templatify(t.empty),header:t.header&&_.templatify(t.header),footer:t.footer&&_.templatify(t.footer),suggestion:t.suggestion||i}
function i(t){return"<p>"+e(t)+"</p>"}}function o(t){return/^[_a-zA-Z0-9-]+$/.test(t)}}()
var Dropdown=function(){function t(t){var i=this,n,s,r
t=t||{}
if(!t.menu){$.error("menu is required")}this.isOpen=false
this.isEmpty=true
this.datasets=_.map(t.datasets,e)
n=_.bind(this._onSuggestionClick,this)
s=_.bind(this._onSuggestionMouseEnter,this)
r=_.bind(this._onSuggestionMouseLeave,this)
this.$menu=$(t.menu).on("click.tt",".tt-suggestion",n).on("mouseenter.tt",".tt-suggestion",s).on("mouseleave.tt",".tt-suggestion",r)
_.each(this.datasets,function(t){i.$menu.append(t.getRoot())
t.onSync("rendered",i._onRendered,i)})}_.mixin(t.prototype,EventEmitter,{_onSuggestionClick:function t(e){e.preventDefault()
this.trigger("suggestionClicked",$(e.currentTarget))},_onSuggestionMouseEnter:function t(e){this._removeCursor()
this._setCursor($(e.currentTarget),true)},_onSuggestionMouseLeave:function t(){this._removeCursor()},_onRendered:function t(){this.isEmpty=_.every(this.datasets,e)
this.isEmpty?this._hide():this.isOpen&&this._show()
this.trigger("datasetRendered")
function e(t){return t.isEmpty()}},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function t(){return this.$menu.find(".tt-suggestion")},_getCursor:function t(){return this.$menu.find(".tt-cursor").first()},_setCursor:function t(e,i){e.first().addClass("tt-cursor")
!i&&this.trigger("cursorMoved")},_removeCursor:function t(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function t(e){var i,n,s,r
if(!this.isOpen){return}n=this._getCursor()
i=this._getSuggestions()
this._removeCursor()
s=i.index(n)+e
s=(s+1)%(i.length+1)-1
if(s===-1){this.trigger("cursorRemoved")
return}else if(s<-1){s=i.length-1}this._setCursor(r=i.eq(s))
this._ensureVisible(r)},_ensureVisible:function t(e){var i,n,s,r
i=e.position().top
n=i+e.outerHeight(true)
s=this.$menu.scrollTop()
r=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10)
if(i<0){this.$menu.scrollTop(s+i)}else if(r<n){this.$menu.scrollTop(s+(n-r))}},close:function t(){if(this.isOpen){this.isOpen=false
this._removeCursor()
this._hide()
this.trigger("closed")}},open:function t(){if(!this.isOpen){this.isOpen=true
!this.isEmpty&&this._show()
this.trigger("opened")}},setLanguageDirection:function t(e){this.$menu.css(e==="ltr"?css.ltr:css.rtl)},moveCursorUp:function t(){this._moveCursor(-1)},moveCursorDown:function t(){this._moveCursor(+1)},getDatumForSuggestion:function t(e){var i=null
if(e.length){i={raw:Dataset.extractDatum(e),value:Dataset.extractValue(e),datasetName:Dataset.extractDatasetName(e)}}return i},getDatumForCursor:function t(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function t(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function t(e){_.each(this.datasets,i)
function i(t){t.update(e)}},empty:function t(){_.each(this.datasets,e)
this.isEmpty=true
function e(t){t.clear()}},isVisible:function t(){return this.isOpen&&!this.isEmpty},destroy:function t(){this.$menu.off(".tt")
this.$menu=null
_.each(this.datasets,e)
function e(t){t.destroy()}}})
return t
function e(t){return new Dataset(t)}}()
var Typeahead=function(){var t="ttAttrs"
function e(t){var e,n,s
t=t||{}
if(!t.input){$.error("missing input")}this.isActivated=false
this.autoselect=!!t.autoselect
this.minLength=_.isNumber(t.minLength)?t.minLength:1
this.$node=i(t.input,t.withHint)
e=this.$node.find(".tt-dropdown-menu")
n=this.$node.find(".tt-input")
s=this.$node.find(".tt-hint")
n.on("blur.tt",function(t){var i,s,r
i=document.activeElement
s=e.is(i)
r=e.has(i).length>0
if(_.isMsie()&&(s||r)){t.preventDefault()
t.stopImmediatePropagation()
_.defer(function(){n.focus()})}})
e.on("mousedown.tt",function(t){t.preventDefault()})
this.eventBus=t.eventBus||new EventBus({el:n})
this.dropdown=new Dropdown({menu:e,datasets:t.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this)
this.input=new Input({input:n,hint:s}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this)
this._setLanguageDirection()}_.mixin(e.prototype,{_onSuggestionClicked:function t(e,i){var n
if(n=this.dropdown.getDatumForSuggestion(i)){this._select(n)}},_onCursorMoved:function t(){var e=this.dropdown.getDatumForCursor()
this.input.setInputValue(e.value,true)
this.eventBus.trigger("cursorchanged",e.raw,e.datasetName)},_onCursorRemoved:function t(){this.input.resetInputValue()
this._updateHint()},_onDatasetRendered:function t(){this._updateHint()},_onOpened:function t(){this._updateHint()
this.eventBus.trigger("opened")},_onClosed:function t(){this.input.clearHint()
this.eventBus.trigger("closed")},_onFocused:function t(){this.isActivated=true
this.dropdown.open()},_onBlurred:function t(){this.isActivated=false
this.dropdown.empty()
this.dropdown.close()},_onEnterKeyed:function t(e,i){var n,s
n=this.dropdown.getDatumForCursor()
s=this.dropdown.getDatumForTopSuggestion()
if(n){this._select(n)
i.preventDefault()}else if(this.autoselect&&s){this._select(s)
i.preventDefault()}},_onTabKeyed:function t(e,i){var n
if(n=this.dropdown.getDatumForCursor()){this._select(n)
i.preventDefault()}else{this._autocomplete(true)}},_onEscKeyed:function t(){this.dropdown.close()
this.input.resetInputValue()},_onUpKeyed:function t(){var e=this.input.getQuery()
this.dropdown.isEmpty&&e.length>=this.minLength?this.dropdown.update(e):this.dropdown.moveCursorUp()
this.dropdown.open()},_onDownKeyed:function t(){var e=this.input.getQuery()
this.dropdown.isEmpty&&e.length>=this.minLength?this.dropdown.update(e):this.dropdown.moveCursorDown()
this.dropdown.open()},_onLeftKeyed:function t(){this.dir==="rtl"&&this._autocomplete()},_onRightKeyed:function t(){this.dir==="ltr"&&this._autocomplete()},_onQueryChanged:function t(e,i){this.input.clearHintIfInvalid()
i.length>=this.minLength?this.dropdown.update(i):this.dropdown.empty()
this.dropdown.open()
this._setLanguageDirection()},_onWhitespaceChanged:function t(){this._updateHint()
this.dropdown.open()},_setLanguageDirection:function t(){var e
if(this.dir!==(e=this.input.getLanguageDirection())){this.dir=e
this.$node.css("direction",e)
this.dropdown.setLanguageDirection(e)}},_updateHint:function t(){var e,i,n,s,r,o
e=this.dropdown.getDatumForTopSuggestion()
if(e&&this.dropdown.isVisible()&&!this.input.hasOverflow()){i=this.input.getInputValue()
n=Input.normalizeQuery(i)
s=_.escapeRegExChars(n)
r=new RegExp("^(?:"+s+")(.+$)","i")
o=r.exec(e.value)
o?this.input.setHint(i+o[1]):this.input.clearHint()}else{this.input.clearHint()}},_autocomplete:function t(e){var i,n,s,r
i=this.input.getHint()
n=this.input.getQuery()
s=e||this.input.isCursorAtEnd()
if(i&&n!==i&&s){r=this.dropdown.getDatumForTopSuggestion()
r&&this.input.setInputValue(r.value)
this.eventBus.trigger("autocompleted",r.raw,r.datasetName)}},_select:function t(e){this.input.setQuery(e.value)
this.input.setInputValue(e.value,true)
this._setLanguageDirection()
this.eventBus.trigger("selected",e.raw,e.datasetName)
this.dropdown.close()
_.defer(_.bind(this.dropdown.empty,this.dropdown))},open:function t(){this.dropdown.open()},close:function t(){this.dropdown.close()},setVal:function t(e){if(this.isActivated){this.input.setInputValue(e)}else{this.input.setQuery(e)
this.input.setInputValue(e,true)}this._setLanguageDirection()},getVal:function t(){return this.input.getQuery()},destroy:function t(){this.input.destroy()
this.dropdown.destroy()
s(this.$node)
this.$node=null}})
return e
function i(e,i){var s,r,o,a
s=$(e)
r=$(html.wrapper).css(css.wrapper)
o=$(html.dropdown).css(css.dropdown)
a=s.clone().css(css.hint).css(n(s))
a.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled",true).attr({autocomplete:"off",spellcheck:"false"})
s.data(t,{dir:s.attr("dir"),autocomplete:s.attr("autocomplete"),spellcheck:s.attr("spellcheck"),style:s.attr("style")})
s.addClass("tt-input").attr({autocomplete:"off",spellcheck:false}).css(i?css.input:css.inputWithNoHint)
try{!s.attr("dir")&&s.attr("dir","auto")}catch(t){}return s.wrap(r).parent().prepend(i?a:null).append(o)}function n(t){return{backgroundAttachment:t.css("background-attachment"),backgroundClip:t.css("background-clip"),backgroundColor:t.css("background-color"),backgroundImage:t.css("background-image"),backgroundOrigin:t.css("background-origin"),backgroundPosition:t.css("background-position"),backgroundRepeat:t.css("background-repeat"),backgroundSize:t.css("background-size")}}function s(e){var i=e.find(".tt-input")
_.each(i.data(t),function(t,e){_.isUndefined(t)?i.removeAttr(e):i.attr(e,t)})
i.detach().removeData(t).removeClass("tt-input").insertAfter(e)
e.remove()}}()
var old,typeaheadKey,methods
old=$.fn.vanillaTypeahead
typeaheadKey="ttTypeahead"
methods={initialize:function t(e,i){i=_.isArray(i)?i:[].slice.call(arguments,1)
e=e||{}
return this.each(n)
function n(){var t=$(this),n,s
_.each(i,function(t){t.highlight=!!e.highlight})
s=new Typeahead({input:t,eventBus:n=new EventBus({el:t}),withHint:_.isUndefined(e.hint)?true:!!e.hint,minLength:e.minLength,autoselect:e.autoselect,datasets:i})
t.data(typeaheadKey,s)}},open:function t(){return this.each(e)
function e(){var t=$(this),e
if(e=t.data(typeaheadKey)){e.open()}}},close:function t(){return this.each(e)
function e(){var t=$(this),e
if(e=t.data(typeaheadKey)){e.close()}}},val:function t(e){return!arguments.length?n(this.first()):this.each(i)
function i(){var t=$(this),i
if(i=t.data(typeaheadKey)){i.setVal(e)}}function n(t){var e,i
if(e=t.data(typeaheadKey)){i=e.getVal()}return i}},destroy:function t(){return this.each(e)
function e(){var t=$(this),e
if(e=t.data(typeaheadKey)){e.destroy()
t.removeData(typeaheadKey)}}}}
$.fn.vanillaTypeahead=function(t){if(methods[t]){return methods[t].apply(this,[].slice.call(arguments,1))}else{return methods.initialize.apply(this,arguments)}}
$.fn.vanillaTypeahead.noConflict=function t(){$.fn.vanillaTypeahead=old
return this}
var icu=require("icu");(function($){var t={short:icu.getDateFormatSymbols().month_short,long:icu.getDateFormatSymbols().month_name},e={DMY:"littleEndian",YMD:"bigEndian",MDY:"middleEndian"},i=new Date,n=i.getFullYear(),s=i.getMonth()+1,r=i.getDate()
$.fn.birthdaypicker=function(i){var s={maxAge:120,minAge:0,futureDates:false,maxYear:n,dateFormat:e[icu.getDateFormatSymbols().order_medium],monthFormat:"short",placeholder:true,legend:"",defaultDate:false,reportNull:false,fieldName:"birthdate",fieldId:"birthdate",hiddenDate:true,onChange:null,tabindex:null,classes:"",labelClasses:"",yearLabelText:"Year:",monthLabelText:"Month:",dayLabelText:"Day:"}
return this.each(function(){if(i){$.extend(s,i)}var e=""
if(i["classes"]){e=" "+i["classes"]}var r="BirthdayPickerDropdown"
var o="year"+r
var a="month"+r
var l="day"+r
var h=$("<select"+" class='birth-year"+e+"'"+" id='"+o+"'"+" name='birth[year]'"+"></select>")
var c=$("<select"+" class='birth-month"+e+"'"+" id='"+a+"'"+" name='birth[month]'"+"></select>")
var u=$("<select"+" class='birth-day"+e+"'"+" id='"+l+"'"+" name='birth[day]'"+"></select>")
var f=$("<fieldset class='birthday-picker'></fieldset>")
if(s["legend"]){$("<legend>"+s["legend"]+"</legend>").appendTo(f)}var d=s["tabindex"]
var p=i["labelClasses"]
var m=$("<div style='display: inline;' class='dropdown-wrapper'>").append($("<label for='"+o+"'>").addClass(p).text(i["yearLabelText"])).append(h)
var g=$("<div style='display: inline;' class='dropdown-wrapper'>").append($("<label for='"+a+"'>").addClass(p).text(i["monthLabelText"])).append(c)
var v=$("<div style='display: inline;' class='dropdown-wrapper'>").append($("<label for='"+l+"'>").addClass(p).text(i["dayLabelText"])).append(u)
if(s["dateFormat"]=="bigEndian"){f.append(m).append(g).append(v)
if(d!=null){h.attr("tabindex",d)
c.attr("tabindex",d++)
u.attr("tabindex",d++)}}else if(s["dateFormat"]=="littleEndian"){f.append(v).append(g).append(m)
if(d!=null){u.attr("tabindex",d)
c.attr("tabindex",d++)
h.attr("tabindex",d++)}}else{f.append(g).append(v).append(m)
if(d!=null){c.attr("tabindex",d)
u.attr("tabindex",d++)
h.attr("tabindex",d++)}}if(s["placeholder"]){$("<option value='0'>Year:</option>").appendTo(h)
$("<option value='0'>Month:</option>").appendTo(c)
$("<option value='0'>Day:</option>").appendTo(u)}var y
if(s["defaultDate"]){var b=new Date(s["defaultDate"]),w=b.getFullYear(),x=b.getMonth()+1,C=b.getDate()
y=w+"-"+x+"-"+C}if(s["hiddenDate"]){$("<input type='hidden' name='"+s["fieldName"]+"'/>").attr("id",s["fieldId"]).val(y).appendTo(f)}var k=n-s["minAge"]
var T=n-s["maxAge"]
if(s["futureDates"]&&s["maxYear"]!=n){if(s["maxYear"]>1e3){k=s["maxYear"]}else{k=n+s["maxYear"]}}while(k>=T){$("<option></option>").attr("value",k).text(k).appendTo(h)
k--}for(var S=0;S<12;S++){$("<option></option>").attr("value",S+1).text(t[s["monthFormat"]][S]).appendTo(c)}for(var D=1;D<32;D++){$("<option></option>").attr("value",D).text(D).appendTo(u)}$(this).append(f)
if(s["defaultDate"]){var E=new Date(s["defaultDate"])
h.val(E.getFullYear())
c.val(E.getMonth()+1)
u.val(E.getDate())}f.change(function(){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),o=h.val(),a=c.val(),l=u.val(),f=new Date(o,a,0).getDate(),d=parseInt(c.children(":last").val()),p=parseInt(u.children(":last").val())
if(o==="0"&&a==="2"){f=29}if(p>f){while(p>f){u.children(":last").remove()
p--}}else if(p<f){while(p<f){p++
u.append("<option value="+p+">"+p+"</option>")}}if(!s["futureDates"]&&o==i){if(d>n){while(d>n){c.children(":last").remove()
d--}u.children(":first").attr("selected","selected")}}if(o!=i&&d!=12){while(d<12){c.append("<option value="+(d+1)+">"+t[s["monthFormat"]][d]+"</option>")
d++}}if(o*a*l!=0){y=o+"-"+a+"-"+l
$(this).find("#"+s["fieldId"]).val(y)
if(s["onChange"]!=null){s["onChange"](y)}}else if(s["reportNull"]&&s["onChange"]){s.onChange(null)}})})}})(jQuery)
!function($){"use strict"
var t=".dropdown-toggle",e=function(t,e){$(t).attr("aria-haspopup",true)
var i=$(t).parent().find(".dropdown-menu")
i.attr("role","menu")
i.attr("aria-expanded",false)
if(e==="hover"){$(t).on("mouseenter",function(){$(this).dropdown("open")}).parent().on("mouseleave",function(){$(this).find(".dropdown-toggle").dropdown("close")}).find(".caret").on("click",function(){$(this).parent().dropdown("toggle")
return false})}else{$(t).on("click.dropdown.data-api",this.toggle)}}
e.prototype={constructor:e,toggle:function(t){var i=$(this),n=i.attr("data-target"),s,r
if(!n){n=i.attr("href")
n=n&&n.replace(/.*(?=#[^\s]*$)/,"")}s=$(n)
s.length||(s=i.parent())
r=s.hasClass("open")
if(r){e.prototype.close.call(this)}else{e.prototype.open.call(this)}return false},open:function(){var t=$(this)
if(t.hasClass("caret")){t=t.parent()}t.parent().find(".dropdown-menu").attr("aria-expanded",true)
t.trigger("open").parent().addClass("open")},close:function(){var t=$(this)
t.parent().find(".dropdown-menu").attr("aria-expanded",false)
t.trigger("close").parent().removeClass("open")}}
function i(e){$(t).each(function(t,i){if($(i).hasClass("no-auto-close")||$(e.target).closest($(i).parent()).length>0){return}$(i).trigger("close").parent().removeClass("open")})}$.fn.dropdown=function(t){return this.each(function(){var i=$(this),n=i.data("dropdown")
if(!n){i.data("dropdown",n=new e(this,t))}if(typeof t=="string"){var s=n[t]
if(s){s.call(this)}}})}
$.fn.dropdown.Constructor=e
$(function(){$("html").on("click.dropdown.data-api",i).on("focusin.dropdown.data-api",i)})}(window.jQuery)
!function($){"use strict"
var t='[data-dismiss="alert"]',e=function(e){$(e).on("click",t,this.close)}
e.prototype.close=function(t){var e=$(this),i=e.attr("data-target"),n
if(!i){i=e.attr("href")
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")}n=$(i)
t&&t.preventDefault()
n.length||(n=e.hasClass("alert")?e:e.parent())
n.trigger(t=$.Event("close"))
if(t.isDefaultPrevented())return
n.removeClass("in")
function s(){n.trigger("closed").remove()}$.support.transition&&n.hasClass("fade")?n.on($.support.transition.end,s):s()}
var i=$.fn.alert
$.fn.alert=function(t){return this.each(function(){var i=$(this),n=i.data("alert")
if(!n)i.data("alert",n=new e(this))
if(typeof t=="string")n[t].call(i)})}
$.fn.alert.Constructor=e
$.fn.alert.noConflict=function(){$.fn.alert=i
return this}
$(document).on("click.alert.data-api",t,e.prototype.close)}(window.jQuery)
!function($){"use strict"
var t=function(t,e){this.$element=$(t)
this.options=$.extend({},$.fn.collapse.defaults,e)
if(this.options.parent){this.$parent=$(this.options.parent)}this.options.toggle&&this.toggle()}
t.prototype={constructor:t,dimension:function(){var t=this.$element.hasClass("width")
return t?"width":"height"},show:function(){var t,e,i,n
if(this.transitioning||this.$element.hasClass("in"))return
t=this.dimension()
e=$.camelCase(["scroll",t].join("-"))
i=this.$parent&&this.$parent.find("> .accordion-group > .in")
if(i&&i.length){n=i.data("collapse")
if(n&&n.transitioning)return
i.collapse("hide")
n||i.data("collapse",null)}this.$element[t](0)
this.transition("addClass",$.Event("show"),"shown")
$.support.transition&&this.$element[t](this.$element[0][e])},hide:function(){var t
if(this.transitioning||!this.$element.hasClass("in"))return
t=this.dimension()
this.reset(this.$element[t]())
this.transition("removeClass",$.Event("hide"),"hidden")
this.$element[t](0)},reset:function(t){var e=this.dimension()
this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth
this.$element[t!==null?"addClass":"removeClass"]("collapse")
return this},transition:function(t,e,i){var n=this,s=function(){if(e.type=="show")n.reset()
n.transitioning=0
n.$element.trigger(i)}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.transitioning=1
this.$element[t]("in")
$.support.transition&&this.$element.hasClass("collapse")?this.$element.one($.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}}
var e=$.fn.collapse
$.fn.collapse=function(e){return this.each(function(){var i=$(this),n=i.data("collapse"),s=$.extend({},$.fn.collapse.defaults,i.data(),typeof e=="object"&&e)
if(!n)i.data("collapse",n=new t(this,s))
if(typeof e=="string")n[e]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=t
$.fn.collapse.noConflict=function(){$.fn.collapse=e
return this}
$(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var e=$(this),i,n=e.attr("data-target")||t.preventDefault()||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=$(n).data("collapse")?"toggle":e.data()
e[$(n).hasClass("in")?"addClass":"removeClass"]("collapsed")
$(n).collapse(s)})}(window.jQuery)
!function($){"use strict"
var t=function(t,e){this.options=e
this.$element=$(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",$.proxy(this.hide,this))
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)}
t.prototype={constructor:t,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var t=this,e=$.Event("show")
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var e=$.support.transition&&t.$element.hasClass("fade")
if(!t.$element.parent().length){t.$element.appendTo(document.body)}t.$element.show()
if(e){t.$element[0].offsetWidth}t.$element.addClass("bootstrap-modal").addClass("in").attr("aria-hidden",false)
t.enforceFocus()
e?t.$element.one($.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault()
var e=this
t=$.Event("hide")
this.$element.trigger(t)
if(!this.isShown||t.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off("focusin.modal")
this.$element.removeClass("in").removeClass("bootstrap-modal").attr("aria-hidden",true)
$.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this
$(document).off("focusin.bs.modal").on("focusin.bs.modal",function(e){if(t.$element[0]!==e.target&&!$(e.target).parents(".bootstrap-modal").length){t.$element.focus()}})},escape:function(){var t=this
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var t=this,e=setTimeout(function(){t.$element.off($.support.transition.end)
t.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(e)
t.hideModal()})},hideModal:function(){var t=this
this.$element.hide()
this.backdrop(function(){t.removeBackdrop()
t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(t){var e=this,i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var n=$.support.transition&&i
var s=document.querySelector("#outer-wrapper")
this.$backdrop=$('<div class="modal-backdrop '+i+'" />').appendTo(s||document.body)
this.$backdrop.click(this.options.backdrop=="static"?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(n)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!t)return
n?this.$backdrop.one($.support.transition.end,t):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,t):t()}else if(t){t()}}}
var e=$.fn.modal
$.fn.modal=function(e){return this.each(function(){var i=$(this),n=i.data("modal"),s=$.extend({},$.fn.modal.defaults,i.data(),typeof e=="object"&&e)
if(!n)i.data("modal",n=new t(this,s))
if(typeof e=="string")n[e]()
else if(s.show)n.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=t
$.fn.modal.noConflict=function(){$.fn.modal=e
return this}
$(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e=$(this),i=e.attr("href"),n=$(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":$.extend({remote:!/#/.test(i)&&i},n.data(),e.data())
t.preventDefault()
n.modal(s).one("hide",function(){e.focus()})})}(window.jQuery)
!function($){"use strict"
var t=function(t,e){this.init("tooltip",t,e)}
t.prototype={constructor:t,init:function(t,e,i){var n,s,r,o,a
this.type=t
this.$element=$(e)
this.options=this.getOptions(i)
this.enabled=true
r=this.options.trigger.split(" ")
for(a=r.length;a--;){o=r[a]
if(o=="click"){this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(o!="manual"){n=o=="hover"?"mouseenter":"focus"
s=o=="hover"?"mouseleave":"blur"
this.$element.on(n+"."+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(s+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){t=$.extend({},$.fn[this.type].defaults,this.$element.data(),t)
if(t.delay&&typeof t.delay=="number"){t.delay={show:t.delay,hide:t.delay}}return t},enter:function(t){var e=$.fn[this.type].defaults,i={},n
this._options&&$.each(this._options,function(t,n){if(e[t]!=n)i[t]=n},this)
n=$(t.currentTarget)[this.type](i).data(this.type)
if(!n.options.delay||!n.options.delay.show)return n.show()
clearTimeout(this.timeout)
n.hoverState="in"
this.timeout=setTimeout(function(){if(n.hoverState=="in")n.show()},n.options.delay.show)},leave:function(t){var e=$(t.currentTarget)[this.type](this._options).data(this.type)
if(this.timeout)clearTimeout(this.timeout)
if(!e.options.delay||!e.options.delay.hide)return e.hide()
e.hoverState="out"
this.timeout=setTimeout(function(){if(e.hoverState=="out")e.hide()},e.options.delay.hide)},show:function(){var t,e,i,n,s,r,o=$.Event("show")
if(this.hasContent()&&this.enabled){this.$element.trigger(o)
if(o.isDefaultPrevented())return
t=this.tip()
this.setContent()
if(this.options.animation){t.addClass("fade")}s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement
t.detach().css({top:0,left:0,display:"block"})
this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element)
e=this.getPosition()
i=t[0].offsetWidth
n=t[0].offsetHeight
switch(s){case"bottom":r={top:e.top+e.height,left:e.left+e.width/2-i/2}
break
case"top":r={top:e.top-n,left:e.left+e.width/2-i/2}
break
case"left":r={top:e.top+e.height/2-n/2,left:e.left-i}
break
case"right":r={top:e.top+e.height/2-n/2,left:e.left+e.width}
break}this.applyPlacement(r,s)
this.$element.trigger("shown")}},applyPlacement:function(t,e){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r,o,a,l
i.offset(t).addClass(e).addClass("in")
r=i[0].offsetWidth
o=i[0].offsetHeight
if(e=="top"&&o!=s){t.top=t.top+s-o
l=true}if(e=="bottom"||e=="top"){a=0
if(t.left<0){a=t.left*-2
t.left=0
i.offset(t)
r=i[0].offsetWidth
o=i[0].offsetHeight}this.replaceArrow(a-n+r,r,"left")}else{this.replaceArrow(o-s,o,"top")}if(l)i.offset(t)},replaceArrow:function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e)
t.removeClass("fade in top bottom left right")},hide:function(){var t=this,e=this.tip(),i=$.Event("hide")
this.$element.trigger(i)
if(i.isDefaultPrevented())return
e.removeClass("in")
function n(){var t=setTimeout(function(){e.off($.support.transition.end).detach()},500)
e.one($.support.transition.end,function(){clearTimeout(t)
e.detach()})}$.support.transition&&this.$tip.hasClass("fade")?n():e.detach()
this.$element.trigger("hidden")
return this},fixTitle:function(){var t=this.$element
if(t.attr("title")||typeof t.attr("data-original-title")!="string"){t.attr("data-original-title",t.attr("title")||"").attr("title","")}},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0]
return $.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,i=this.options
t=e.attr("data-original-title")||(typeof i.title=="function"?i.title.call(e[0]):i.title)
return t},tip:function(){return this.$tip=this.$tip||$(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var e=t?$(t.currentTarget)[this.type](this._options).data(this.type):this
e.tip().hasClass("in")?e.hide():e.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}
var e=$.fn.tooltip
$.fn.tooltip=function(e){return this.each(function(){var i=$(this),n=i.data("tooltip"),s=typeof e=="object"&&e
if(!n)i.data("tooltip",n=new t(this,s))
if(typeof e=="string")n[e]()})}
$.fn.tooltip.Constructor=t
$.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false}
$.fn.tooltip.noConflict=function(){$.fn.tooltip=e
return this}}(window.jQuery)
!function($){"use strict"
var t=function(t,e){this.init("popover",t,e)}
t.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e)
t.find(".popover-content")[this.options.html?"html":"text"](i)
t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,i=this.options
t=(typeof i.content=="function"?i.content.call(e[0]):i.content)||e.attr("data-content")
return t},tip:function(){if(!this.$tip){this.$tip=$(this.options.template)}return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}})
var e=$.fn.popover
$.fn.popover=function(e){return this.each(function(){var i=$(this),n=i.data("popover"),s=typeof e=="object"&&e
if(!n)i.data("popover",n=new t(this,s))
if(typeof e=="string")n[e]()})}
$.fn.popover.Constructor=t
$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
$.fn.popover.noConflict=function(){$.fn.popover=e
return this}}(window.jQuery)
!function($){"use strict"
var t=function(t){this.element=$(t)}
t.prototype={constructor:t,show:function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.attr("data-target"),n,s,r
if(!i){i=t.attr("href")
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")}if(t.parent("li").hasClass("active"))return
n=e.find(".active:last a")[0]
r=$.Event("show",{relatedTarget:n})
t.trigger(r)
if(r.isDefaultPrevented())return
s=$(i)
this.activate(t.parent("li"),e)
this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:n})})},activate:function(t,e,i){var n=e.find("> .active"),s=i&&$.support.transition&&n.hasClass("fade")
function r(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active")
t.addClass("active")
if(s){t[0].offsetWidth
t.addClass("in")}else{t.removeClass("fade")}if(t.parent(".dropdown-menu")){t.closest("li.dropdown").addClass("active")}i&&i()}s?n.one($.support.transition.end,r):r()
n.removeClass("in")}}
var e=$.fn.tab
$.fn.tab=function(e){return this.each(function(){var i=$(this),n=i.data("tab")
if(!n)i.data("tab",n=new t(this))
if(typeof e=="string")n[e]()})}
$.fn.tab.Constructor=t
$.fn.tab.noConflict=function(){$.fn.tab=e
return this}
$(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault()
$(this).tab("show")})}(window.jQuery)
!function($){"use strict"
$(function(){$.support.transition=function(){var t=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i
for(i in e){if(t.style[i]!==undefined){return e[i]}}}()
return t&&{end:t}}()})}(window.jQuery)
var moment=require("moment")
var i18n=require("../../../javascript/shared-package/i18n.js")
!function($,i18n){var t=function(t){return moment(t).utc().format().replace("+00:00","Z")}
var e=function(t){var e={}
e[t.todayStr]=[moment().startOf("day"),moment().endOf("day"),"1"]
e[t.yesterdayStr]=[moment().subtract("days",1).startOf("day"),moment().subtract("days",1).endOf("day"),"yesterday"]
e[t.last2DaysStr]=[moment().subtract("days",1).startOf("day"),moment().endOf("day"),"2"]
e[t.last3DaysStr]=[moment().subtract("days",2).startOf("day"),moment().endOf("day"),"3"]
e[t.last7DaysStr]=[moment().subtract("days",6).startOf("day"),moment().endOf("day"),"7"]
e[t.last30DaysStr]=[moment().subtract("days",29).startOf("day"),moment().endOf("day"),"30"]
e[t.allTimeStr]=[moment().year(1970).startOf("day"),moment().endOf("month").endOf("day"),"alltime"]
return e}
var i=function(t,i,n){var s=typeof i=="object"
var r
this.startDate=moment().startOf("day")
this.endDate=moment().endOf("day")
this.minDate=false
this.maxDate=false
this.changed=false
this.cleared=false
this.showDropdowns=false
this.dropdownAdjusts=false
this.dateLimit=false
this.opens="right"
this.cb=function(){}
this.format="LL"
this.separator=" - "
this.showWeekNumbers=false
this.buttonClasses=["btn"]
this.applyClass="btn btn-small btn-success"
this.clearClass="btn btn-small"
this.datepickerClass=""
this.singleDateMode=false
this.showPerformanceWarning=true
this.hideFromElement=false
this.locale={applyLabel:i18n._("Set Custom Range"),clearLabel:i18n._("Clear"),fromLabel:i18n._("Start"),toLabel:i18n._("End"),customRangeLabel:i18n._("Custom Range"),perfWarning:i18n._("For best performance, select 30 days or fewer."),daysOfWeek:icu.getDateFormatSymbols().day_short,monthNames:icu.getDateFormatSymbols().month_name,firstDay:0}
this.todayStr=i18n._("Today")
this.yesterdayStr=i18n._("Yesterday")
this.last2DaysStr=i18n._("Last 2 days")
this.last3DaysStr=i18n._("Last 3 days")
this.last7DaysStr=i18n._("Last 7 days")
this.last30DaysStr=i18n._("Last 30 days")
this.allTimeStr=i18n._("All time")
r=this.locale
this.leftCalendar={month:moment([this.startDate.year(),this.startDate.month(),1]),calendar:[]}
this.rightCalendar={month:moment([this.endDate.year(),this.endDate.month(),1]),calendar:[]}
this.element=$(t)
if(this.element.hasClass("pull-right"))this.opens="left"
if(this.element.is("input")){this.element.on({click:$.proxy(this.show,this),focus:$.proxy(this.show,this)})}else{this.element.on("click",$.proxy(this.show,this))}if(s){if(typeof i.locale=="object"){$.each(r,function(t,e){r[t]=i.locale[t]||e})}if(i.datepickerClass){this.datepickerClass=i.datepickerClass}if(i.applyClass){this.applyClass=i.applyClass}if(i.clearClass){this.clearClass=i.clearClass}if(i.singleDateMode){this.singleDateMode=i.singleDateMode
this.showPerformanceWarning=false}if(i.showPerformanceWarning){this.showPerformanceWarning=this.showPerformanceWarning}if(i.ranges){this.ranges=i.ranges}if(i.todayStr){this.todayStr=i.todayStr}if(i.yesterdayStr){this.yesterdayStr=i.yesterdayStr}if(i.last2DaysStr){this.last2DaysStr=i.last2DaysStr}if(i.last3DaysStr){this.last3DaysStr=i.last3DaysStr}if(i.last7DaysStr){this.last7DaysStr=i.last7DaysStr}if(i.last30DaysStr){this.last30DaysStr=i.last30DaysStr}if(i.allTimeStr){this.allTimeStr=i.allTimeStr}}if(!this.ranges&&!this.singleDateMode){this.ranges=e(this)}var o='<div class="'+this.datepickerClass+" datepicker-modal"+(this.singleDateMode?" single-date-picker":" dropdown-menu")+'">'+(this.singleDateMode?"":'<div class="ranges">'+'<div class="range_inputs">'+"</div>"+"</div>")+'<span class="'+(this.singleDateMode?"":"expanded-content")+'">'+'<table id="custom-table">'+(this.singleDateMode?"":"<tr>"+"<td>"+'<div class="datepicker_start_input">'+'<label for="datepicker_start">'+this.locale.fromLabel+"</label>"+'<input class="input-mini" type="text" name="datepicker_start" value=""/>'+"</div>"+"</td>"+"<td>"+'<div class="datepicker_end_input">'+'<label for="datepicker_end">'+this.locale.toLabel+"</label>"+'<input class="input-mini" type="text" name="datepicker_end" value=""/>'+"</div>"+"</td>"+"</tr>")+"<tr>"+'<td class="calendar-container">'+'<div class="triangletip"></div>'+'<div class="calendar left"></div>'+"</td>"+(this.singleDateMode?"":'<td class="calendar-container">'+'<div class="triangletip"></div>'+'<div class="calendar right"></div>'+"</td>")+"</tr>"+"</table>"+(this.singleDateMode?"":'<div id="apply-date-container">'+'<button class="'+this.applyClass+' simple-button apply-date-button" disabled="disabled">'+this.locale.applyLabel+"</button>")+'<span id="perf-warning-container">'+(this.showPerformanceWarning?'<div id="perf-warning">'+this.locale.perfWarning+"</div>":"")+"</span>"+(this.singleDateMode?"":"</div>")+"</span>"+"</div>"
this.container=$(o).appendTo("body")
if(s){if(typeof i.format=="string")this.format=i.format
if(typeof i.separator=="string")this.separator=i.separator
if(typeof i.startDate=="string")this.startDate=moment(i.startDate,this.format).startOf("day")
if(typeof i.endDate=="string")this.endDate=moment(i.endDate,this.format).endOf("day")
if(typeof i.minDate=="string")this.minDate=moment(i.minDate,this.format).startOf("day")
if(typeof i.maxDate=="string")this.maxDate=moment(i.maxDate,this.format).endOf("day")
if(typeof i.startDate=="object"){if(i.startDate instanceof Date){this.startDate=moment(i.startDate).startOf("day")}else{this.startDate=i.startDate.startOf("day")}}if(typeof i.endDate=="object"){if(i.endDate instanceof Date){this.endDate=moment(i.endDate).endOf("day")}else{this.endDate=i.endDate.endOf("day")}}if(typeof i.minDate=="object"){if(i.minDate instanceof Date){this.minDate=moment(i.minDate).startOf("day")}else{this.minDate=i.minDate.startOf("day")}}if(typeof i.maxDate=="object"){if(i.maxDate instanceof Date){this.maxDate=moment(i.maxDate).endOf("day")}else{this.maxDate=i.maxDate.endOf("day")}}if(this.ranges){for(var a in i.ranges){var l=moment(i.ranges[a][0]).startOf("day")
var h=moment(i.ranges[a][1]).endOf("day")
this.ranges[a]=[l,h]}var c="<ul>"
for(var a in this.ranges){c+="<li><a>"+a+"</a></li>"}c+="<li><a>"+this.locale.customRangeLabel+"</a></li>"
c+="</ul>"
this.container.find(".ranges").prepend(c)}if(typeof i.dateLimit=="object")this.dateLimit=i.dateLimit
if(typeof i.locale=="object"){if(typeof i.locale.firstDay=="number"){this.locale.firstDay=i.locale.firstDay
var u=i.locale.firstDay
while(u>0){this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift())
u--}}}if(typeof i.opens=="string")this.opens=i.opens
if(typeof i.showWeekNumbers=="boolean"){this.showWeekNumbers=i.showWeekNumbers}if(typeof i.buttonClasses=="string"){this.buttonClasses=[i.buttonClasses]}if(typeof i.buttonClasses=="object"){this.buttonClasses=i.buttonClasses}if(typeof i.showDropdowns=="boolean"){this.showDropdowns=i.showDropdowns}if(typeof i.dropdownAdjusts=="boolean"){this.dropdownAdjusts=i.dropdownAdjusts}}var f=this.container
$.each(this.buttonClasses,function(t,e){f.find("button").addClass(e)})
if(typeof i=="undefined"||typeof i.ranges=="undefined"){this.container.find(".calendar").show()
this.move()}if(typeof n=="function")this.cb=n
this.container.addClass("opens"+this.opens)
if(!s||typeof i.startDate=="undefined"&&typeof i.endDate=="undefined"){if($(this.element).is("input[type=text]")){var d=$(this.element).val()
var p=d.split(this.separator)
if(p.length==2){this.startDate=moment(p[0],this.format).startOf("day")
this.endDate=moment(p[1],this.format).endOf("day")}}}this.container.on("mousedown",$.proxy(this.mousedown,this))
this.container.find(".calendar").on("click",".prev",$.proxy(this.clickPrev,this))
this.container.find(".calendar").on("click",".next",$.proxy(this.clickNext,this))
$("button.apply-date-button").on("click",$.proxy(this.clickApply,this))
$("button.clearBtn").on("click",$.proxy(this.clickClear,this))
this.container.find(".calendar").on("click","td.available",$.proxy(this.clickDate,this))
this.container.find(".calendar").on("mouseenter","td.available",$.proxy(this.enterDate,this))
this.container.find(".calendar").on("mouseleave","td.available",$.proxy(this.updateFormInputs,this))
this.container.find(".ranges").on("click","li > a",$.proxy(this.clickRange,this))
this.container.find(".calendar").on("change","select.yearselect",$.proxy(this.updateYear,this))
this.container.find(".calendar").on("change","select.monthselect",$.proxy(this.updateMonth,this))
this.element.on("keyup",$.proxy(this.updateFromControl,this))
this.updateView()
this.updateCalendars()
this.updateRange(this.startDate,this.endDate)}
i.prototype={constructor:i,mousedown:function(t){t.stopPropagation()
if(!this.showDropdowns||$(t.target).not("select").length)t.preventDefault()},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year())
this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year())
this.updateFormInputs()},updateFormInputs:function(){this.container.find("input[name=datepicker_start]").val(this.startDate.format(this.format))
this.container.find("input[name=datepicker_end]").val(this.endDate.format(this.format))
if(this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)){this.container.find("button.apply-date-button").removeAttr("disabled")}else{this.container.find("button.apply-date-button").attr("disabled","disabled")}if(this.endDate.diff(this.startDate,"days")>30){$("#perf-warning").fadeIn(200)}else{$("#perf-warning").fadeOut(200)}},updateFromControl:function(){if(!this.element.is("input"))return
var t=this.element.val().split(this.separator)
var e=moment(t[0],this.format).startOf("day")
var i=moment(t[1],this.format).endOf("day")
this.update(e,i)},update:function(t,e){if(typeof t==="string"){t=moment(t)}if(typeof e==="string"){e=moment(e)}if(this.singleDateMode&&!t){t=moment().startOf("day")
e=moment().endOf("day")}else if(!this.singleDateMode&&(!t||!e)){if(t===null||!t.isValid()){t=moment().startOf("day").year(1970)}if(e===null||!e.isValid()){e=moment().endOf("month")}}t=t.startOf("day")
e=e.endOf("day")
if(t==null||e==null)return
if(e.isBefore(t))return
this.startDate=t
this.endDate=e
this.updateView()
this.updateRange(this.startDate,this.endDate)
this.updateCalendars()},notify:function(){if(!this.cleared){this.updateView()}if(this.element.is("input")){this.element.val(this.cleared?"":this.startDate.format(this.format)+this.singleDateMode?"":this.separator+this.endDate.format(this.format))}var t=this.cleared?null:this.startDate,e=this.cleared?null:this.endDate
this.cleared=false
this.updateRange(t,e)},move:function(){var t=$(this.container).find(".ranges")
t.css("minWidth","")
var e=Math.max(t.outerWidth(),$(this.element).innerWidth())
t.css("minWidth",e)
this.container.removeClass("top")
var i=this.element.offset().top
if(!this.fitsBelowInput()&&this.element.offset().top>this.container.outerHeight()){i-=this.container.outerHeight()
i+=23
this.container.addClass("top")}else{i+=this.element.outerHeight()}var n
if(this.opens=="left"){n=$(window).width()-this.element.offset().left-this.element.outerWidth()
if(this.singleDateMode){n=n-this.container.outerWidth()/2+this.element.outerWidth()/2}this.container.css({top:i,right:n,left:"auto"})
if(this.container.offset().left<0){this.container.css({right:"auto",left:9})}}else{n=this.element.offset().left
if(this.singleDateMode){n=n-this.container.outerWidth()/2+this.element.outerWidth()/2}this.container.css({top:i,left:n,right:"auto"})
if(this.container.offset().left+this.container.outerWidth()>$(window).width()){this.container.css({left:"auto",right:0})}}},fitsBelowInput:function(){return $(window).height()+$(window).scrollTop()>this.element.offset().top+this.element.outerHeight()+this.container.outerHeight()},show:function(t){if(!this.hideFromElement){this.container.show()
this.move()
if(t){t.stopPropagation()
t.preventDefault()}this.changed=false
this.element.trigger("shown",{target:t.target,picker:this})
$(document).on("mousedown",$.proxy(this.hide,this))
$(window).on("scroll",$.proxy(this.hide,this))
$(window).on("resize",$.proxy(this.hide,this))}this.hideFromElement=false},hide:function(t){if(t&&this.element.get(0)===$(t.target).parent().get(0)){this.hideFromElement=true}this.container.hide()
$(document).off("mousedown",this.hide)
$(window).off("scroll",this.move)
$(window).off("resize",this.move)
if(this.changed){this.changed=false
this.notify()}},clickRange:function(t){var e=t.target.innerHTML
if(e==this.locale.customRangeLabel){if(this.startDate.year()===1970){this.startDate=this.endDate.clone().subtract("days",30)
this.updateView()}$(".expanded-content").show()
this.move()}else{var i=this.ranges[e]
this.startDate=i[0]
this.endDate=i[1]}this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year())
this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year())
this.updateCalendars()
this.changed=true
this.move()
if(e!==this.locale.customRangeLabel){$(".expanded-content").hide()
this.hide()}},clickPrev:function(t){var e=$(t.target).parents(".calendar")
if(e.hasClass("left")){this.leftCalendar.month.subtract("month",1)}else{this.rightCalendar.month.subtract("month",1)}this.updateCalendars()},clickNext:function(t){var e=$(t.target).parents(".calendar")
if(e.hasClass("left")){this.leftCalendar.month.add("month",1)}else{this.rightCalendar.month.add("month",1)}this.updateCalendars()},enterDate:function(t){var e=$(t.target).attr("data-title")
var i=e.substr(1,1)
var n=e.substr(3,1)
var s=$(t.target).parents(".calendar")
if(s.hasClass("left")){this.container.find("input[name=datepicker_start]").val(this.leftCalendar.calendar[i][n].format(this.format))}else{this.container.find("input[name=datepicker_end]").val(this.rightCalendar.calendar[i][n].format(this.format))}},clickDate:function(t){var e=$(t.target).attr("data-title")
var i=e.substr(1,1)
var n=e.substr(3,1)
var s=$(t.target).parents(".calendar")
if(s.hasClass("disabled")){alert(i18n._("The end date for the current report must be today."))
return}if(s.hasClass("left")){var r=this.leftCalendar.calendar[i][n]
var o=this.endDate
if(typeof this.dateLimit=="object"){var a=moment(r).add(this.dateLimit).endOf("day")
if(o.isAfter(a)){o=a}}this.element.trigger("clicked",{dir:"left",picker:this})}else{var r=this.startDate
var o=this.rightCalendar.calendar[i][n]
if(typeof this.dateLimit=="object"){var l=moment(o).subtract(this.dateLimit).startOf("day")
if(r.isBefore(l)){r=l}}this.element.trigger("clicked",{dir:"right",picker:this})}s.find("td").removeClass("active")
if(r.isSame(o)||r.isBefore(o)){$(t.target).addClass("active")
if(!r.isSame(this.startDate)||!o.isSame(this.endDate))this.changed=true
this.startDate=r
this.endDate=o}else if(r.isAfter(o)){$(t.target).addClass("active")
this.changed=true
this.startDate=r
this.endDate=moment(r).endOf("day")}this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year())
this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year())
this.updateView()
this.updateCalendars()
if(this.singleDateMode){this.clickApply()}},clickApply:function(t){this.hide()},clickClear:function(t){this.changed=true
this.cleared=true
this.hide()},updateYear:function(t){var e=parseInt($(t.target).val())
var i=$(t.target).closest(".calendar").hasClass("left")
if(i){this.leftCalendar.month.month(this.startDate.month()).year(e)}else{this.rightCalendar.month.month(this.endDate.month()).year(e)}this.updateCalendars()},updateMonth:function(t){var e=parseInt($(t.target).val())
var i=$(t.target).closest(".calendar").hasClass("left")
if(i){this.leftCalendar.month.month(e).year(this.startDate.year())}else{this.rightCalendar.month.month(e).year(this.endDate.year())}this.updateCalendars()},updateCalendars:function(){this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),"left")
this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),"right")
this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,this.minDate,this.maxDate))
this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate))
this.container.find(".ranges li").removeClass("active")
var t=true
var e=0
for(var i in this.ranges){if(this.startDate.isSame(this.ranges[i][0])&&this.endDate.isSame(this.ranges[i][1])){t=false
this.container.find(".ranges li:eq("+e+")").addClass("active")}e++}if(t)this.container.find(".ranges li:last").addClass("active")
this.element.trigger("updated",this)},updateRange:function(e,i){if(e.year()===1970){this.element.find("span").html("")
this.currStartDate_=this.currEndDate_=null}else{var n=e.format("LL")
if(!this.singleDateMode){n+=this.separator+i.format("LL")}this.element.find("span").html(n)
this.currStartDate_=t(e)
this.currEndDate_=t(i)}this.cb(e,i)
this.hide()
this.currRangeSlug=undefined
for(var s in this.ranges){var r=this.ranges[s][0]
var o=this.ranges[s][1]
if(!r.diff(e,"seconds")&&!o.diff(i,"seconds")){$(".datepicker > span").html(s)
this.currRangeSlug=this.ranges[s][2]
$(".ranges ul li:contains('"+s+"')").toggleClass("active",true).siblings().toggleClass("active",false)}}},buildCalendar:function(t,e,i){var n=moment([e,t,1])
var s=moment(n).subtract("month",1).month()
var r=moment(n).subtract("month",1).year()
var o=moment([r,s]).daysInMonth()
var a=n.day()
var l=[]
for(var h=0;h<6;h++){l[h]=[]}var c=o-a+this.locale.firstDay+1
if(c>o)c-=7
if(a==this.locale.firstDay)c=o-6
var u
if(i=="right"){u=moment([r,s,c]).endOf("day")}else{u=moment([r,s,c]).startOf("day")}for(var h=0,f=0,d=0;h<42;h++,f++,u=moment(u).add("day",1)){if(h>0&&f%7==0){f=0
d++}l[d][f]=u}return l},renderDropdowns:function(t,e,i){var n=t.month()
var s='<select class="monthselect">'
var r=false
var o=false
for(var a=0;a<12;a++){if((!r||a>=e.month())&&(!o||a<=i.month())){s+="<option value='"+a+"'"+(a===n?" selected='selected'":"")+">"+this.locale.monthNames[a]+"</option>"}}s+="</select>"
var l=t.year()
var h=i&&i.year()||l+5
var c=e&&e.year()||l-50
var u='<select class="yearselect">'
for(var f=c;f<=h;f++){u+='<option value="'+f+'"'+(f===l?' selected="selected"':"")+">"+f+"</option>"}u+="</select>"
return s+u},renderCalendar:function(t,e,i,n){var s='<table class="table-condensed">'
s+="<thead>"
s+="<tr>"
if(this.showWeekNumbers)s+="<th></th>"
if(!i||i.isBefore(t[1][1])){s+='<th class="prev available"><i class="icon-arrow-left"></i></th>'}else{s+="<th></th>"}var r=this.locale.monthNames[t[1][1].month()]+t[1][1].format(" YYYY")
if(this.showDropdowns){r=this.renderDropdowns(t[1][1],i,n)}s+='<th colspan="5" style="width: auto">'+r+"</th>"
if(!n||n.isAfter(t[1][1])){s+='<th class="next available"><i class="icon-arrow-right"></i></th>'}else{s+="<th></th>"}s+="</tr>"
s+="<tr>"
if(this.showWeekNumbers)s+='<th class="week">'+this.locale.weekLabel+"</th>"
$.each(this.locale.daysOfWeek,function(t,e){s+="<th>"+e+"</th>"})
s+="</tr>"
s+="</thead>"
s+="<tbody>"
for(var o=0;o<6;o++){s+="<tr>"
if(this.showWeekNumbers)s+='<td class="week">'+t[o][0].week()+"</td>"
for(var a=0;a<7;a++){var l="available "
l+=t[o][a].month()==t[1][1].month()?"":"off"
if(i&&t[o][a].isBefore(i)||n&&t[o][a].isAfter(n)){l=" off disabled "}else if(t[o][a].isSame(e)){l+=" active "
if(t[o][a].isSame(this.startDate)){l+=" start-date "}if(t[o][a].isSame(this.endDate)){l+=" end-date "}}else if(t[o][a]>=this.startDate&&t[o][a]<=this.endDate){l+=" in-range "
if(t[o][a].isSame(this.startDate)){l+=" start-date "}if(t[o][a].isSame(this.endDate)){l+=" end-date "}}var h="r"+o+"c"+a
s+='<td class="'+l.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+h+'">'+t[o][a].date()+"</td>"}s+="</tr>"}s+="</tbody>"
s+="</table>"
return s}}
$.fn.daterangepicker=function(t,e){this.each(function(){var n=$(this)
if(!n.data("datepicker"))n.data("datepicker",new i(n,t,e))})
return this}
$.fn.datepicker=function(t,e){t=t?t:{}
t.singleDateMode=t.singleDateMode?t.singleDateMode:true
t.startDate=t.startDate||t.date
return $(this).daterangepicker(t,e)}
Object.assign($.fn.daterangepicker,{ranges:e})}(window.jQuery,window.i18n);(function($){$.expander={version:"1.4.2",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:false,summaryClass:"summary",detailClass:"details",moreClass:"read-more",collapseTimer:0,expandEffect:"slideDown",expandSpeed:250,collapseEffect:"slideUp",collapseSpeed:200,userCollapse:true,onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}}
$.fn.expander=function(t){var e="init"
if(typeof t=="string"){e=t
t={}}var i=$.extend({},$.expander.defaults,t),n=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,s=i.wordEnd||/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,r=/<\/?(\w+)[^>]*>/g,o=/<(\w+)[^>]*>/g,a=/<\/(\w+)>/g,l=/(<\/[^>]+>)\s*$/,h=/^<[^>]+>.?/,c
var u={init:function(){this.each(function(){var t,e,s,l,c,u,m,v,y,b,w,x,C=[],k=[],T={},S=this,D=$(this),E=$([]),P=$.meta?$.extend({},i,D.data()):i,I=!!D.find("."+P.detailClass).length,A=!!D.find("*").filter(function(){var t=$(this).css("display")
return/^block|table|list/.test(t)}).length,N=A?"div":"span",H=N+"."+P.detailClass,O="span."+P.moreClass,z=P.expandSpeed||0,M=$.trim(D.html()),j=$.trim(D.text()),W=M.slice(0,P.slicePoint)
if($.data(this,"expander")){return}$.data(this,"expander",true)
$.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(t,e){T[e]=$.isFunction(P[e])})
W=p(W)
c=W.replace(r,"").length
while(c<P.slicePoint){l=M.charAt(W.length)
if(l=="<"){l=M.slice(W.length).match(h)[0]}W+=l
c++}W=p(W,P.preserveWords)
u=W.match(o)||[]
m=W.match(a)||[]
s=[]
$.each(u,function(t,e){if(!n.test(e)){s.push(e)}})
u=s
e=m.length
for(t=0;t<e;t++){m[t]=m[t].replace(a,"$1")}$.each(u,function(t,e){var i=e.replace(o,"$1")
var n=$.inArray(i,m)
if(n===-1){C.push(e)
k.push("</"+i+">")}else{m.splice(n,1)}})
k.reverse()
if(!I){y=M.slice(W.length)
b=$.trim(y.replace(r,""))
if(b===""||b.split(/\s+/).length<P.widow){return}v=k.pop()||""
W+=k.join("")
y=C.join("")+y}else{y=D.find(H).remove().html()
W=D.html()
M=W+y
v=""}P.moreLabel=D.find(O).length?"":d(P)
if(A){y=M}W+=v
P.summary=W
P.details=y
P.lastCloseTag=v
if(T.onSlice){s=P.onSlice.call(S,P)
P=s&&s.details?s:P}var L=f(P,A)
D.html(L)
w=D.find(H)
x=D.find(O)
w.hide()
x.find("a").unbind("click.expander").bind("click.expander",R)
E=D.find("div."+P.summaryClass)
function R(t){t.preventDefault()
x.hide()
E.hide()
if(T.beforeExpand){P.beforeExpand.call(S)}w.stop(false,true)[P.expandEffect](z,function(){w.css({zoom:""})
if(T.afterExpand){P.afterExpand.call(S)}g(P,w,S)})}})},destroy:function(){if(!this.data("expander")){return}this.removeData("expander")
this.each(function(){var t=$(this),e=$.meta?$.extend({},i,t.data()):i,n=t.find("."+e.detailClass).contents()
t.find("."+e.moreClass).remove()
t.find("."+e.summaryClass).remove()
t.find("."+e.detailClass).after(n).remove()})}}
if(u[e]){u[e].call(this)}function f(t,e){var i="span",n=t.summary
if(e){i="div"
if(l.test(n)&&!t.expandAfterSummary){n=n.replace(l,t.moreLabel+"$1")}else{n+=t.moreLabel}n='<div class="'+t.summaryClass+'">'+n+"</div>"}else{n+=t.moreLabel}return[n,"<",i+' class="'+t.detailClass+'"',">",t.details,"</"+i+">"].join("")}function d(t){var e='<span class="'+t.moreClass+'">'+t.expandPrefix
e+='<a href="#">'+t.expandText+"</a></span>"
return e}function p(t,e){if(t.lastIndexOf("<")>t.lastIndexOf(">")){t=t.slice(0,t.lastIndexOf("<"))}if(e){t=t.replace(s,"")}return $.trim(t)}function m(t,e){e.stop(true,true)[t.collapseEffect](t.collapseSpeed,function(){var i=e.prev("span."+t.moreClass).show()
if(!i.length){e.parent().children("div."+t.summaryClass).show().find("span."+t.moreClass).show()}})}function g(t,e,i){if(t.collapseTimer){c=setTimeout(function(){m(t,e)
if($.isFunction(t.onCollapse)){t.onCollapse.call(i,false)}},t.collapseTimer)}}return this}
$.fn.expander.defaults=$.expander.defaults})(jQuery)
new function($){var t=!!("placeholder"in document.createElement("input"))
$.fn.placeholder=function(e){if(t){return this}e=e||{}
var i=e.dataKey||"placeholderValue"
var n=e.attr||"placeholder"
var s=e.className||"placeholder"
var r=e.values||[]
var o=e.blockSubmit||false
var a=e.blankSubmit||false
var l=e.onSubmit||false
var h=e.value||""
var c=e.cursor_position||0
return this.filter(":input").each(function(t){$.data(this,i,r[t]||$(this).attr(n))}).each(function(){if($.trim($(this).val())==="")$(this).addClass(s).val($.data(this,i))}).focus(function(){if($.trim($(this).val())===$.data(this,i))$(this).removeClass(s).val(h)
if($.fn.setCursorPosition){$(this).setCursorPosition(c)}}).blur(function(){if($.trim($(this).val())===h)$(this).addClass(s).val($.data(this,i))}).each(function(t,e){if(o)new function(t){$(t.form).submit(function(){return $.trim($(t).val())!=$.data(t,i)})}(e)
else if(a)new function(t){$(t.form).submit(function(){if($.trim($(t).val())==$.data(t,i))$(t).removeClass(s).val("")
return true})}(e)
else if(l)new function(t){$(t.form).submit(l)}(e)})}}(jQuery);(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(jQuery)}})(function($){var t=a()
var e=86400
var i={className:null,minTime:null,maxTime:null,durationTime:null,step:30,showDuration:false,timeFormat:"g:ia",scrollDefaultNow:false,scrollDefaultTime:false,selectOnBlur:false,disableTouchKeyboard:true,forceRoundTime:false,appendTo:"body",disableTimeRanges:[],closeOnWindowScroll:false,disableTextInput:false}
var n={decimal:".",mins:"mins",hr:"hr",hrs:"hrs"}
var s={init:function(t){return this.each(function(){var e=$(this)
if(e[0].tagName=="SELECT"){var o={type:"text",value:e.val()}
var a=e[0].attributes
for(var l=0;l<a.length;l++){o[a[l].nodeName]=a[l].nodeValue}var h=$("<input />",o)
e.replaceWith(h)
e=h}var c=$.extend({},i)
if(t){c=$.extend(c,t)}if(c.lang){n=$.extend(n,c.lang)}c=r(c)
e.data("timepicker-settings",c)
e.prop("autocomplete","off")
e.on("click.timepicker focus.timepicker",s.show)
e.on("blur.timepicker",f)
e.on("keydown.timepicker",m)
e.on("keyup.timepicker",v)
e.addClass("ui-timepicker-input")
f.call(e.get(0))})},show:function(t){var e=$(this)
var i=e.data("timepicker-settings")
if("ontouchstart"in document&&i.disableTouchKeyboard){e.blur()}var n=e.data("timepicker-list")
if(e.prop("readonly")){return}if(!n||n.length===0||typeof i.durationTime==="function"){o(e)
n=e.data("timepicker-list")}if(n.is(":visible")){return}s.hide()
n.show()
if(e.offset().top+e.outerHeight(true)+n.outerHeight()>$(window).height()+$(window).scrollTop()){n.offset({left:e.offset().left+parseInt(n.css("marginLeft").replace("px",""),10),top:e.offset().top-n.outerHeight()+parseInt(n.css("marginTop").replace("px",""),10)})}else{n.offset({left:e.offset().left+parseInt(n.css("marginLeft").replace("px",""),10),top:e.offset().top+e.outerHeight()+parseInt(n.css("marginTop").replace("px",""),10)})}var r=n.find(".ui-timepicker-selected")
if(!r.length){if(d(e)){r=c(e,n,x(d(e)))}else if(i.scrollDefaultNow){r=c(e,n,x(new Date))}else if(i.scrollDefaultTime!==false){r=c(e,n,x(i.scrollDefaultTime))}}if(r&&r.length){var a=r.position().top-r.outerHeight()
n.scrollTop(a)}else{n.scrollTop(0)}l(i)
e.trigger("showTimepicker")},hide:function(t){$(".ui-timepicker-wrapper:visible").each(function(){var t=$(this)
var e=t.data("timepicker-input")
var i=e.data("timepicker-settings")
if(i&&i.selectOnBlur){y(e)}t.hide()
e.trigger("hideTimepicker")})},option:function(t,e){var i=this
var n=i.data("timepicker-settings")
var s=i.data("timepicker-list")
if(typeof t=="object"){n=$.extend(n,t)}else if(typeof t=="string"&&typeof e!="undefined"){n[t]=e}else if(typeof t=="string"){return n[t]}n=r(n)
i.data("timepicker-settings",n)
if(s){s.remove()
i.data("timepicker-list",false)}return i},getSecondsFromMidnight:function(){return x(d(this))},getTime:function(){var t=this
var e=new Date
e.setHours(0,0,0,0)
return new Date(e.valueOf()+x(d(t))*1e3)},setTime:function(t){var e=this
var i=w(x(t),e.data("timepicker-settings").timeFormat)
p(e,i)},remove:function(){var t=this
if(!t.hasClass("ui-timepicker-input")){return}t.removeAttr("autocomplete","off")
t.removeClass("ui-timepicker-input")
t.removeData("timepicker-settings")
t.off(".timepicker")
if(t.data("timepicker-list")){t.data("timepicker-list").remove()}t.removeData("timepicker-list")}}
function r(t){if(t.minTime){t.minTime=x(t.minTime)}if(t.maxTime){t.maxTime=x(t.maxTime)}if(t.durationTime&&typeof t.durationTime!=="function"){t.durationTime=x(t.durationTime)}if(t.disableTimeRanges.length>0){for(var e in t.disableTimeRanges){t.disableTimeRanges[e]=[x(t.disableTimeRanges[e][0]),x(t.disableTimeRanges[e][1])]}t.disableTimeRanges=t.disableTimeRanges.sort(function(t,e){return t[0]-e[0]})}return t}function o(t){var i=t.data("timepicker-settings")
var n=t.data("timepicker-list")
if(n&&n.length){n.remove()
t.data("timepicker-list",false)}n=$("<ul />",{class:"ui-timepicker-list"})
var r=$("<div />",{class:"ui-timepicker-wrapper",tabindex:-1})
r.css({display:"none",position:"absolute"}).append(n)
if(i.className){r.addClass(i.className)}if((i.minTime!==null||i.durationTime!==null)&&i.showDuration){r.addClass("ui-timepicker-with-duration")}var o=i.minTime
if(typeof i.durationTime==="function"){o=x(i.durationTime())}else if(i.durationTime!==null){o=i.durationTime}var a=i.minTime!==null?i.minTime:0
var l=i.maxTime!==null?i.maxTime:a+e-1
if(l<=a){l+=e}var h=i.disableTimeRanges
var c=0
var f=h.length
for(var d=a;d<=l;d+=i.step*60){var p=d%e
var m=$("<li />")
m.data("time",p)
m.text(w(p,i.timeFormat))
if((i.minTime!==null||i.durationTime!==null)&&i.showDuration){var g=$("<span />")
g.addClass("ui-timepicker-duration")
g.text(" ("+b(d-o)+")")
m.append(g)}if(c<f){if(p>=h[c][1]){c+=1}if(h[c]&&p>=h[c][0]&&p<h[c][1]){m.addClass("ui-timepicker-disabled")}}n.append(m)}r.data("timepicker-input",t)
t.data("timepicker-list",r)
var v=i.appendTo
if(typeof v==="string"){v=$(v)}else if(typeof v==="function"){v=v(t)}v.append(r)
u(t,n)
n.on("click","li",function(e){t.off("focus.timepicker")
t.on("focus.timepicker-ie-hack",function(){t.off("focus.timepicker-ie-hack")
t.on("focus.timepicker",s.show)})
t[0].focus()
n.find("li").removeClass("ui-timepicker-selected")
$(this).addClass("ui-timepicker-selected")
if(y(t)){r.hide()}})}function a(){return new Date(1970,1,1,0,0,0)}function l(t){if("ontouchstart"in document){$("body").on("touchstart.ui-timepicker",h)}else{$("body").on("mousedown.ui-timepicker",h)
if(t.closeOnWindowScroll){$(window).on("scroll.ui-timepicker",h)}}}function h(t){var e=$(t.target)
var i=e.closest(".ui-timepicker-input")
if(i.length===0&&e.closest(".ui-timepicker-wrapper").length===0){s.hide()
$("body").unbind(".ui-timepicker")
$(window).unbind(".ui-timepicker")}}function c(t,e,i){if(!i&&i!==0){return false}var n=t.data("timepicker-settings")
var s=false
var r=n.step*30
e.find("li").each(function(t,e){var n=$(e)
var o=n.data("time")-i
if(Math.abs(o)<r||o==r){s=n
return false}})
return s}function u(t,e){e.find("li").removeClass("ui-timepicker-selected")
var i=x(d(t))
if(!i){return}var n=c(t,e,i)
if(n){var s=n.offset().top-e.offset().top
if(s+n.outerHeight()>e.outerHeight()||s<0){e.scrollTop(e.scrollTop()+n.position().top-n.outerHeight())}n.addClass("ui-timepicker-selected")}}function f(){if(this.value===""){return}var t=$(this)
var e=x(this.value)
if(e===null){t.trigger("timeFormatError")
return}var i=t.data("timepicker-settings")
if(i.minTime!==null&&e<i.minTime){t.trigger("timeRangeError")}else if(i.maxTime!==null&&e>i.maxTime){t.trigger("timeRangeError")}$.each(i.disableTimeRanges,function(){if(e>=this[0]&&e<this[1]){t.trigger("timeRangeError")
return false}})
if(i.forceRoundTime){var n=e%(i.step*60)
if(n>=i.step*30){e+=i.step*60-n}else{e-=n}}var s=w(e,i.timeFormat)
p(t,s)}function d(t){if(t.is("input")){return t.val()}else{return t.data("ui-timepicker-value")}}function p(t,e){if(t.is("input")){t.val(e)}else{t.data("ui-timepicker-value",e)}}function m(t){var e=$(this)
var i=e.data("timepicker-list")
if(!i||!i.is(":visible")){if(t.keyCode==40){e.focus()}else{return g(t,e)}}switch(t.keyCode){case 13:if(y(e)){s.hide.apply(this)}t.preventDefault()
return false
case 38:var n=i.find(".ui-timepicker-selected")
if(!n.length){i.find("li").each(function(t,e){if($(e).position().top>0){n=$(e)
return false}})
n.addClass("ui-timepicker-selected")}else if(!n.is(":first-child")){n.removeClass("ui-timepicker-selected")
n.prev().addClass("ui-timepicker-selected")
if(n.prev().position().top<n.outerHeight()){i.scrollTop(i.scrollTop()-n.outerHeight())}}return false
case 40:n=i.find(".ui-timepicker-selected")
if(n.length===0){i.find("li").each(function(t,e){if($(e).position().top>0){n=$(e)
return false}})
n.addClass("ui-timepicker-selected")}else if(!n.is(":last-child")){n.removeClass("ui-timepicker-selected")
n.next().addClass("ui-timepicker-selected")
if(n.next().position().top+2*n.outerHeight()>i.outerHeight()){i.scrollTop(i.scrollTop()+n.outerHeight())}}return false
case 27:i.find("li").removeClass("ui-timepicker-selected")
i.hide()
break
case 9:s.hide()
break
default:return g(t,e)}}function g(t,e){return!e.data("timepicker-settings").disableTextInput||t.ctrlKey||t.altKey||t.metaKey||t.keyCode!=2&&t.keyCode<46}function v(t){var e=$(this)
var i=e.data("timepicker-list")
if(!i||!i.is(":visible")){return true}switch(t.keyCode){case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 77:case 80:case 186:case 8:case 46:u(e,i)
break
default:return}}function y(t){var e=t.data("timepicker-settings")
var i=t.data("timepicker-list")
var n=null
var s=i.find(".ui-timepicker-selected")
if(s.hasClass("ui-timepicker-disabled")){return false}if(s.length){n=s.data("time")}else if(d(t)){n=x(d(t))
u(t,i)}if(n!==null){var r=w(n,e.timeFormat)
p(t,r)}t.trigger("change").trigger("changeTime")
return true}function b(t){var e=Math.round(t/60)
var i
if(Math.abs(e)<60){i=[e,n.mins]}else if(e==60){i=["1",n.hr]}else{var s=(e/60).toFixed(1)
if(n.decimal!=".")s=s.replace(".",n.decimal)
i=[s,n.hrs]}return i.join(" ")}function w(e,i){if(e===null){return}var n=new Date(t.valueOf()+e*1e3)
var s=""
var r,o
for(var a=0;a<i.length;a++){o=i.charAt(a)
switch(o){case"a":s+=n.getHours()>11?"pm":"am"
break
case"A":s+=n.getHours()>11?"PM":"AM"
break
case"g":r=n.getHours()%12
s+=r===0?"12":r
break
case"G":s+=n.getHours()
break
case"h":r=n.getHours()%12
if(r!==0&&r<10){r="0"+r}s+=r===0?"12":r
break
case"H":r=n.getHours()
s+=r>9?r:"0"+r
break
case"i":var l=n.getMinutes()
s+=l>9?l:"0"+l
break
case"s":e=n.getSeconds()
s+=e>9?e:"0"+e
break
default:s+=o}}return s}function x(t){if(t==="")return null
if(!t||t+0==t)return t
if(typeof t=="object"){t=t.getHours()+":"+C(t.getMinutes())+":"+C(t.getSeconds())}t=t.toLowerCase()
var e=new Date(0)
var i
if(t.indexOf(":")===-1){i=t.match(/^([0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/)
if(!i){i=t.match(/^([0-2][0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/)}}else{i=t.match(/^(\d{1,2})(?::([0-5][0-9]))?(?::([0-5][0-9]))?\s*([pa]?)m?$/)}if(!i){return null}var n=parseInt(i[1]*1,10)
var s
if(i[4]){if(n==12){s=i[4]=="p"?12:0}else{s=n+(i[4]=="p"?12:0)}}else{s=n}var r=i[2]*1||0
var o=i[3]*1||0
return s*3600+r*60+o}function C(t){return("0"+t).slice(-2)}$.fn.timepicker=function(t){if(s[t]){return s[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return s.init.apply(this,arguments)}else{$.error("Method "+t+" does not exist on jQuery.timepicker")}}});(function(){var t,e,i,n,s,r,o,a,l,h,c,u,f,d,p,m,g=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++){if(e in this&&this[e]===t)return e}return-1},v=[].slice
t=window.jQuery
e=t(window)
s={horizontal:{},vertical:{}}
r=1
a={}
o="waypoints-context-id"
c="resize.waypoints"
u="scroll.waypoints"
f=1
d="waypoints-waypoint-ids"
p="waypoint"
m="waypoints"
i=function(){function e(e){var i=this
this.$element=e
this.element=e[0]
this.didResize=false
this.didScroll=false
this.id="context"+r++
this.oldScroll={x:e.scrollLeft(),y:e.scrollTop()}
this.waypoints={horizontal:{},vertical:{}}
e.data(o,this.id)
a[this.id]=this
e.bind(u,function(){var e
if(!i.didScroll){i.didScroll=true
e=function(){i.doScroll()
return i.didScroll=false}
return window.setTimeout(e,t[m].settings.scrollThrottle)}})
e.bind(c,function(){var e
if(!i.didResize){i.didResize=true
e=function(){t[m]("refresh")
return i.didResize=false}
return window.setTimeout(e,t[m].settings.resizeThrottle)}})}e.prototype.doScroll=function(){var e,i=this
e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}}
if(g.call(window,"ontouchstart")>=0&&(!e.vertical.oldScroll||!e.vertical.newScroll)){t[m]("refresh")}t.each(e,function(e,n){var s,r,o
o=[]
r=n.newScroll>n.oldScroll
s=r?n.forward:n.backward
t.each(i.waypoints[e],function(t,e){var i,s
if(n.oldScroll<(i=e.offset)&&i<=n.newScroll){return o.push(e)}else if(n.newScroll<(s=e.offset)&&s<=n.oldScroll){return o.push(e)}})
o.sort(function(t,e){return t.offset-e.offset})
if(!r){o.reverse()}return t.each(o,function(t,e){if(e.options.continuous||t===o.length-1){return e.trigger([s])}})})
return this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}}
e.prototype.refresh=function(){var e,i,n,s=this
n=t.isWindow(this.element)
i=this.$element.offset()
e={horizontal:{contextOffset:n?0:i.left,contextScroll:n?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:n?0:i.top,contextScroll:n?0:this.oldScroll.y,contextDimension:n?t[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}
return t.each(e,function(e,i){return t.each(s.waypoints[e],function(e,n){var s,r,o,a,l
s=n.options.offset
o=n.offset
r=t.isWindow(n.element)?0:n.$element.offset()[i.offsetProp]
if(t.isFunction(s)){s=s.apply(n.element)}else if(typeof s==="string"){s=parseFloat(s)
if(n.options.offset.indexOf("%")){s=Math.ceil(i.contextDimension*s/100)}}n.offset=r-i.contextOffset+i.contextScroll-s
if(n.options.onlyOnScroll&&o!=null||!n.enabled){return}if(o!==null&&o<(a=i.oldScroll)&&a<=n.offset){return n.trigger([i.backward])}else if(o!==null&&o>(l=i.oldScroll)&&l>=n.offset){return n.trigger([i.forward])}else if(o===null&&i.oldScroll>=n.offset){return n.trigger([i.forward])}})})}
e.prototype.checkEmpty=function(){if(t.isEmptyObject(this.waypoints.horizontal)&&t.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([c,u].join(" "))
return delete a[this.id]}}
return e}()
n=function(){function e(e,i,n){var r,o
n=t.extend({},t.fn[p].defaults,n)
if(n.offset==="bottom-in-view"){n.offset=function(){var e
e=t[m]("viewportHeight")
if(!t.isWindow(i.element)){e=i.$element.height()}return e-t(this).outerHeight()}}this.$element=e
this.element=e[0]
this.axis=n.horizontal?"horizontal":"vertical"
this.callback=n.handler
this.context=i
this.enabled=n.enabled
this.id="waypoints"+f++
this.offset=null
this.options=n
i.waypoints[this.axis][this.id]=this
s[this.axis][this.id]=this
r=(o=e.data(d))!=null?o:[]
r.push(this.id)
e.data(d,r)}e.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}}
e.prototype.disable=function(){return this.enabled=false}
e.prototype.enable=function(){this.context.refresh()
return this.enabled=true}
e.prototype.destroy=function(){delete s[this.axis][this.id]
delete this.context.waypoints[this.axis][this.id]
return this.context.checkEmpty()}
e.getWaypointsByElement=function(e){var i,n
n=t(e).data(d)
if(!n){return[]}i=t.extend({},s.horizontal,s.vertical)
return t.map(n,function(t){return i[t]})}
return e}()
h={init:function(e,s){var r
if(s==null){s={}}if((r=s.handler)==null){s.handler=e}this.each(function(){var e,r,l,h
e=t(this)
l=(h=s.context)!=null?h:t.fn[p].defaults.context
if(!t.isWindow(l)){l=e.closest(l)}l=t(l)
r=a[l.data(o)]
if(!r){r=new i(l)}return new n(e,r,s)})
t[m]("refresh")
return this},disable:function(){return h._invoke(this,"disable")},enable:function(){return h._invoke(this,"enable")},destroy:function(){return h._invoke(this,"destroy")},prev:function(t,e){return h._traverse.call(this,t,e,function(t,e,i){if(e>0){return t.push(i[e-1])}})},next:function(t,e){return h._traverse.call(this,t,e,function(t,e,i){if(e<i.length-1){return t.push(i[e+1])}})},_traverse:function(e,i,n){var s,r
if(e==null){e="vertical"}if(i==null){i=window}r=l.aggregate(i)
s=[]
this.each(function(){var i
i=t.inArray(this,r[e])
return n(s,i,r[e])})
return this.pushStack(s)},_invoke:function(e,i){e.each(function(){var e
e=n.getWaypointsByElement(this)
return t.each(e,function(t,e){e[i]()
return true})})
return this}}
t.fn[p]=function(){var e,i
i=arguments[0],e=2<=arguments.length?v.call(arguments,1):[]
if(h[i]){return h[i].apply(this,e)}else if(t.isFunction(i)){return h.init.apply(this,arguments)}else if(t.isPlainObject(i)){return h.init.apply(this,[null,i])}else if(!i){return t.error("jQuery Waypoints needs a callback function or handler option.")}else{return t.error("The "+i+" method does not exist in jQuery Waypoints.")}}
t.fn[p].defaults={context:window,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false}
l={refresh:function(){return t.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t
return(t=window.innerHeight)!=null?t:e.height()},aggregate:function(e){var i,n,r
i=s
if(e){i=(r=a[t(e).data(o)])!=null?r.waypoints:void 0}if(!i){return[]}n={horizontal:[],vertical:[]}
t.each(n,function(e,s){t.each(i[e],function(t,e){return s.push(e)})
s.sort(function(t,e){return t.offset-e.offset})
n[e]=t.map(s,function(t){return t.element})
return n[e]=t.unique(n[e])})
return n},above:function(t){if(t==null){t=window}return l._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=window}return l._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=window}return l._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=window}return l._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return l._invoke("enable")},disable:function(){return l._invoke("disable")},destroy:function(){return l._invoke("destroy")},extendFn:function(t,e){return h[t]=e},_invoke:function(e){var i
i=t.extend({},s.vertical,s.horizontal)
return t.each(i,function(t,i){i[e]()
return true})},_filter:function(e,i,n){var s,r
s=a[t(e).data(o)]
if(!s){return[]}r=[]
t.each(s.waypoints[i],function(t,e){if(n(s,e)){return r.push(e)}})
r.sort(function(t,e){return t.offset-e.offset})
return t.map(r,function(t){return t.element})}}
t[m]=function(){var t,e
e=arguments[0],t=2<=arguments.length?v.call(arguments,1):[]
if(l[e]){return l[e].apply(null,t)}else{return l.aggregate.call(null,e)}}
t[m].settings={resizeThrottle:200,scrollThrottle:100}
e.load(function(){return t[m]("refresh")})}).call(this);(function($,t){var e=0,i=/^ui-id-\d+$/
$.ui=$.ui||{}
if($.ui.version){return}$.extend($.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})
$.fn.extend({_focus:$.fn.focus,focus:function(t,e){return typeof t==="number"?this.each(function(){var i=this
setTimeout(function(){$(i).focus()
if(e){e.call(i)}},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t
if($.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test($.css(this,"position"))&&/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}else{t=this.parents().filter(function(){return/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!t.length?$(document):t},zIndex:function(e){if(e!==t){return this.css("zIndex",e)}if(this.length){var i=$(this[0]),n,s
while(i.length&&i[0]!==document){n=i.css("position")
if(n==="absolute"||n==="relative"||n==="fixed"){s=parseInt(i.css("zIndex"),10)
if(!isNaN(s)&&s!==0){return s}}i=i.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++e}})},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){$(this).removeAttr("id")}})}})
function n(t,e){var i,n,r,o=t.nodeName.toLowerCase()
if("area"===o){i=t.parentNode
n=i.name
if(!t.href||!n||i.nodeName.toLowerCase()!=="map"){return false}r=$("img[usemap=#"+n+"]")[0]
return!!r&&s(r)}return(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||e:e)&&s(t)}function s(t){return $.expr.filters.visible(t)&&!$(t).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden"}).length}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(t){return function(e){return!!$.data(e,t)}}):function(t,e,i){return!!$.data(t,i[3])},focusable:function(t){return n(t,!isNaN($.attr(t,"tabindex")))},tabbable:function(t){var e=$.attr(t,"tabindex"),i=isNaN(e)
return(i||e>=0)&&n(t,!i)}})
if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(e,i){var n=i==="Width"?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),r={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight}
function o(t,e,i,s){$.each(n,function(){e-=parseFloat($.css(t,"padding"+this))||0
if(i){e-=parseFloat($.css(t,"border"+this+"Width"))||0}if(s){e-=parseFloat($.css(t,"margin"+this))||0}})
return e}$.fn["inner"+i]=function(e){if(e===t){return r["inner"+i].call(this)}return this.each(function(){$(this).css(s,o(this,e)+"px")})}
$.fn["outer"+i]=function(t,e){if(typeof t!=="number"){return r["outer"+i].call(this,t)}return this.each(function(){$(this).css(s,o(this,t,true,e)+"px")})}})}if(!$.fn.addBack){$.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}}if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(t){return function(e){if(arguments.length){return t.call(this,$.camelCase(e))}else{return t.call(this)}}}($.fn.removeData)}$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
$.support.selectstart="onselectstart"in document.createElement("div")
$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}})
$.extend($.ui,{plugin:{add:function(t,e,i){var n,s=$.ui[t].prototype
for(n in i){s.plugins[n]=s.plugins[n]||[]
s.plugins[n].push([e,i[n]])}},call:function(t,e,i){var n,s=t.plugins[e]
if(!s||!t.element[0].parentNode||t.element[0].parentNode.nodeType===11){return}for(n=0;n<s.length;n++){if(t.options[s[n][0]]){s[n][1].apply(t.element,i)}}}},hasScroll:function(t,e){if($(t).css("overflow")==="hidden"){return false}var i=e&&e==="left"?"scrollLeft":"scrollTop",n=false
if(t[i]>0){return true}t[i]=1
n=t[i]>0
t[i]=0
return n}})})(jQuery);(function($,t){var e=0,i=Array.prototype.slice,n=$.cleanData
$.cleanData=function(t){for(var e=0,i;(i=t[e])!=null;e++){try{$(i).triggerHandler("remove")}catch(t){}}n(t)}
$.widget=function(t,e,i){var n,s,r,o,a={},l=t.split(".")[0]
t=t.split(".")[1]
n=l+"-"+t
if(!i){i=e
e=$.Widget}$.expr[":"][n.toLowerCase()]=function(t){return!!$.data(t,n)}
$[l]=$[l]||{}
s=$[l][t]
r=$[l][t]=function(t,e){if(!this._createWidget){return new r(t,e)}if(arguments.length){this._createWidget(t,e)}}
$.extend(r,s,{version:i.version,_proto:$.extend({},i),_childConstructors:[]})
o=new e
o.options=$.widget.extend({},o.options)
$.each(i,function(t,i){if(!$.isFunction(i)){a[t]=i
return}a[t]=function(){var n=function(){return e.prototype[t].apply(this,arguments)},s=function(i){return e.prototype[t].apply(this,i)}
return function(){var t=this._super,e=this._superApply,r
this._super=n
this._superApply=s
r=i.apply(this,arguments)
this._super=t
this._superApply=e
return r}}()})
r.prototype=$.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix:t},a,{constructor:r,namespace:l,widgetName:t,widgetFullName:n})
if(s){$.each(s._childConstructors,function(t,e){var i=e.prototype
$.widget(i.namespace+"."+i.widgetName,r,e._proto)})
delete s._childConstructors}else{e._childConstructors.push(r)}$.widget.bridge(t,r)}
$.widget.extend=function(e){var n=i.call(arguments,1),s=0,r=n.length,o,a
for(;s<r;s++){for(o in n[s]){a=n[s][o]
if(n[s].hasOwnProperty(o)&&a!==t){if($.isPlainObject(a)){e[o]=$.isPlainObject(e[o])?$.widget.extend({},e[o],a):$.widget.extend({},a)}else{e[o]=a}}}}return e}
$.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e
$.fn[e]=function(r){var o=typeof r==="string",a=i.call(arguments,1),l=this
r=!o&&a.length?$.widget.extend.apply(null,[r].concat(a)):r
if(o){this.each(function(){var i,n=$.data(this,s)
if(!n){return $.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+r+"'")}if(!$.isFunction(n[r])||r.charAt(0)==="_"){return $.error("no such method '"+r+"' for "+e+" widget instance")}i=n[r].apply(n,a)
if(i!==n&&i!==t){l=i&&i.jquery?l.pushStack(i.get()):i
return false}})}else{this.each(function(){var t=$.data(this,s)
if(t){t.option(r||{})._init()}else{$.data(this,s,new n(r,this))}})}return l}}
$.Widget=function(){}
$.Widget._childConstructors=[]
$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,i){i=$(i||this.defaultElement||this)[0]
this.element=$(i)
this.uuid=e++
this.eventNamespace="."+this.widgetName+this.uuid
this.options=$.widget.extend({},this.options,this._getCreateOptions(),t)
this.bindings=$()
this.hoverable=$()
this.focusable=$()
if(i!==this){$.data(i,this.widgetFullName,this)
this._on(true,this.element,{remove:function(t){if(t.target===i){this.destroy()}}})
this.document=$(i.style?i.ownerDocument:i.document||i)
this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}this._create()
this._trigger("create",null,this._getCreateEventData())
this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName))
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled")
this.bindings.unbind(this.eventNamespace)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(e,i){var n=e,s,r,o
if(arguments.length===0){return $.widget.extend({},this.options)}if(typeof e==="string"){n={}
s=e.split(".")
e=s.shift()
if(s.length){r=n[e]=$.widget.extend({},this.options[e])
for(o=0;o<s.length-1;o++){r[s[o]]=r[s[o]]||{}
r=r[s[o]]}e=s.pop()
if(i===t){return r[e]===t?null:r[e]}r[e]=i}else{if(i===t){return this.options[e]===t?null:this.options[e]}n[e]=i}}this._setOptions(n)
return this},_setOptions:function(t){var e
for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){this.options[t]=e
if(t==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e)
this.hoverable.removeClass("ui-state-hover")
this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(t,e,i){var n,s=this
if(typeof t!=="boolean"){i=e
e=t
t=false}if(!i){i=e
e=this.element
n=this.widget()}else{e=n=$(e)
this.bindings=this.bindings.add(e)}$.each(i,function(i,r){function o(){if(!t&&(s.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return}return(typeof r==="string"?s[r]:r).apply(s,arguments)}if(typeof r!=="string"){o.guid=r.guid=r.guid||o.guid||$.guid++}var a=i.match(/^(\w+)\s*(.*)$/),l=a[1]+s.eventNamespace,h=a[2]
if(h){n.delegate(h,l,o)}else{e.bind(l,o)}})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return(typeof t==="string"?n[t]:t).apply(n,arguments)}var n=this
return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t)
this._on(t,{mouseenter:function(t){$(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){$(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t)
this._on(t,{focusin:function(t){$(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){$(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,r=this.options[t]
i=i||{}
e=$.Event(e)
e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase()
e.target=this.element[0]
s=e.originalEvent
if(s){for(n in s){if(!(n in e)){e[n]=s[n]}}}this.element.trigger(e,i)
return!($.isFunction(r)&&r.apply(this.element[0],[e].concat(i))===false||e.isDefaultPrevented())}}
$.each({show:"fadeIn",hide:"fadeOut"},function(t,e){$.Widget.prototype["_"+t]=function(i,n,s){if(typeof n==="string"){n={effect:n}}var r,o=!n?t:n===true||typeof n==="number"?e:n.effect||e
n=n||{}
if(typeof n==="number"){n={duration:n}}r=!$.isEmptyObject(n)
n.complete=s
if(n.delay){i.delay(n.delay)}if(r&&$.effects&&$.effects.effect[o]){i[t](n)}else if(o!==t&&i[o]){i[o](n.duration,n.easing,s)}else{i.queue(function(e){$(this)[t]()
if(s){s.call(i[0])}e()})}}})})(jQuery);(function($,t){var e=false
$(document).mouseup(function(){e=false})
$.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this
this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===$.data(e.target,t.widgetName+".preventClickEvent")){$.removeData(e.target,t.widgetName+".preventClickEvent")
e.stopImmediatePropagation()
return false}})
this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(t){if(e){return}this._mouseStarted&&this._mouseUp(t)
this._mouseDownEvent=t
var i=this,n=t.which===1,s=typeof this.options.cancel==="string"&&t.target.nodeName?$(t.target).closest(this.options.cancel).length:false
if(!n||s||!this._mouseCapture(t)){return true}this.mouseDelayMet=!this.options.delay
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==false
if(!this._mouseStarted){t.preventDefault()
return true}}if(true===$.data(t.target,this.widgetName+".preventClickEvent")){$.removeData(t.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(t){return i._mouseMove(t)}
this._mouseUpDelegate=function(t){return i._mouseUp(t)}
$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
t.preventDefault()
e=true
return true},_mouseMove:function(t){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button){return this._mouseUp(t)}if(this._mouseStarted){this._mouseDrag(t)
return t.preventDefault()}if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==false
this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)}return!this._mouseStarted},_mouseUp:function(t){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
if(this._mouseStarted){this._mouseStarted=false
if(t.target===this._mouseDownEvent.target){$.data(t.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(t)}return false},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);(function($,t){var e=0
$.widget("ui.autocomplete",{version:"1.10.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,e,i,n=this.element[0].nodeName.toLowerCase(),s=n==="textarea",r=n==="input"
this.isMultiLine=s?true:r?false:this.element.prop("isContentEditable")
this.valueMethod=this.element[s||r?"val":"text"]
this.isNewMenu=true
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off")
this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly")){t=true
i=true
e=true
return}t=false
i=false
e=false
var s=$.ui.keyCode
switch(n.keyCode){case s.PAGE_UP:t=true
this._move("previousPage",n)
break
case s.PAGE_DOWN:t=true
this._move("nextPage",n)
break
case s.UP:t=true
this._keyEvent("previous",n)
break
case s.DOWN:t=true
this._keyEvent("next",n)
break
case s.ENTER:case s.NUMPAD_ENTER:if(this.menu.active){t=true
n.preventDefault()
this.menu.select(n)}break
case s.TAB:if(this.menu.active){this.menu.select(n)}break
case s.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term)
this.close(n)
n.preventDefault()}break
default:e=true
this._searchTimeout(n)
break}},keypress:function(i){if(t){t=false
i.preventDefault()
return}if(e){return}var n=$.ui.keyCode
switch(i.keyCode){case n.PAGE_UP:this._move("previousPage",i)
break
case n.PAGE_DOWN:this._move("nextPage",i)
break
case n.UP:this._keyEvent("previous",i)
break
case n.DOWN:this._keyEvent("next",i)
break}},input:function(t){if(i){i=false
t.preventDefault()
return}this._searchTimeout(t)},focus:function(){this.selectedItem=null
this.previous=this._value()},blur:function(t){if(this.cancelBlur){delete this.cancelBlur
return}clearTimeout(this.searching)
this.close(t)
this._change(t)}})
this._initSource()
this.menu=$("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:$(),role:null}).hide().data("ui-menu")
this._on(this.menu.element,{mousedown:function(t){t.preventDefault()
this.cancelBlur=true
this._delay(function(){delete this.cancelBlur})
var e=this.menu.element[0]
if(!$(t.target).closest(".ui-menu-item").length){this._delay(function(){var t=this
this.document.one("mousedown",function(i){if(i.target!==t.element[0]&&i.target!==e&&!$.contains(e,i.target)){t.close()}})})}},menufocus:function(t,e){if(this.isNewMenu){this.isNewMenu=false
if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur()
this.document.one("mousemove",function(){$(t.target).trigger(t.originalEvent)})
return}}var i=e.item.data("ui-autocomplete-item")
if(false!==this._trigger("focus",t,{item:i})){if(t.originalEvent&&/^key/.test(t.originalEvent.type)){this._value(i.value)}}else{this.liveRegion.text(i.value)}},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),n=this.previous
if(this.element[0]!==this.document[0].activeElement){this.element.focus()
this.previous=n
this._delay(function(){this.previous=n
this.selectedItem=i})}if(false!==this._trigger("select",t,{item:i})){this._value(i.value)}this.term=this._value()
this.close(t)
this.selectedItem=i}})
this.liveRegion=$("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element)
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching)
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete")
this.menu.element.remove()
this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e)
if(t==="source"){this._initSource()}if(t==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(t==="disabled"&&e&&this.xhr){this.xhr.abort()}},_appendTo:function(){var t=this.options.appendTo
if(t){t=t.jquery||t.nodeType?$(t):this.document.find(t).eq(0)}if(!t){t=this.element.closest(".ui-front")}if(!t.length){t=this.document[0].body}return t},_initSource:function(){var t,e,i=this
if($.isArray(this.options.source)){t=this.options.source
this.source=function(e,i){i($.ui.autocomplete.filter(t,e.term))}}else if(typeof this.options.source==="string"){e=this.options.source
this.source=function(t,n){if(i.xhr){i.xhr.abort()}i.xhr=$.ajax({url:e,data:t,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}}else{this.source=this.options.source}},_searchTimeout:function(t){clearTimeout(this.searching)
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null
this.search(null,t)}},this.options.delay)},search:function(t,e){t=t!=null?t:this._value()
this.term=this._value()
if(t.length<this.options.minLength){return this.close(e)}if(this._trigger("search",e)===false){return}return this._search(t)},_search:function(t){this.pending++
this.element.addClass("ui-autocomplete-loading")
this.cancelSearch=false
this.source({term:t},this._response())},_response:function(){var t=this,i=++e
return function(n){if(i===e){t.__response(n)}t.pending--
if(!t.pending){t.element.removeClass("ui-autocomplete-loading")}}},__response:function(t){if(t){t=this._normalize(t)}this._trigger("response",null,{content:t})
if(!this.options.disabled&&t&&t.length&&!this.cancelSearch){this._suggest(t)
this._trigger("open")}else{this._close()}},close:function(t){this.cancelSearch=true
this._close(t)},_close:function(t){if(this.menu.element.is(":visible")){this.menu.element.hide()
this.menu.blur()
this.isNewMenu=true
this._trigger("close",t)}},_change:function(t){if(this.previous!==this._value()){this._trigger("change",t,{item:this.selectedItem})}},_normalize:function(t){if(t.length&&t[0].label&&t[0].value){return t}return $.map(t,function(t){if(typeof t==="string"){return{label:t,value:t}}return $.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var e=this.menu.element.empty()
this._renderMenu(e,t)
this.menu.refresh()
e.show()
this._resizeMenu()
e.position($.extend({of:this.element},this.options.position))
if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var t=this.menu.element
t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,e){var i=this
$.each(e,function(e,n){i._renderItemData(t,n)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(t,e){return $("<li>").append($("<a>").text(e.label)).appendTo(t)},_move:function(t,e){if(!this.menu.element.is(":visible")){this.search(null,e)
return}if(this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)){this._value(this.term)
this.menu.blur()
return}this.menu[t](e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(t,e)
e.preventDefault()}}})
$.extend($.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,e){var i=new RegExp($.ui.autocomplete.escapeRegex(e),"i")
return $.grep(t,function(t){return i.test(t.label||t.value||t)})}})
$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e
this._superApply(arguments)
if(this.options.disabled||this.cancelSearch){return}if(t&&t.length){e=this.options.messages.results(t.length)}else{e=this.options.messages.noResults}this.liveRegion.text(e)}})})(jQuery);(function($,t){var e,i,n,s,r="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",l=function(){var t=$(this).find(":ui-button")
setTimeout(function(){t.button("refresh")},1)},h=function(t){var e=t.name,i=t.form,n=$([])
if(e){e=e.replace(/'/g,"\\'")
if(i){n=$(i).find("[name='"+e+"']")}else{n=$("[name='"+e+"']",t.ownerDocument).filter(function(){return!this.form})}}return n}
$.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,l)
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType()
this.hasTitle=!!this.buttonElement.attr("title")
var t=this,o=this.options,a=this.type==="checkbox"||this.type==="radio",c=!a?"ui-state-active":"",u="ui-state-focus"
if(o.label===null){o.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()}this._hoverable(this.buttonElement)
this.buttonElement.addClass(r).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(o.disabled){return}if(this===e){$(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(o.disabled){return}$(this).removeClass(c)}).bind("click"+this.eventNamespace,function(t){if(o.disabled){t.preventDefault()
t.stopImmediatePropagation()}})
this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(u)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(u)})
if(a){this.element.bind("change"+this.eventNamespace,function(){if(s){return}t.refresh()})
this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){if(o.disabled){return}s=false
i=t.pageX
n=t.pageY}).bind("mouseup"+this.eventNamespace,function(t){if(o.disabled){return}if(i!==t.pageX||n!==t.pageY){s=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled||s){return false}})}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled||s){return false}$(this).addClass("ui-state-active")
t.buttonElement.attr("aria-pressed","true")
var e=t.element[0]
h(e).not(e).map(function(){return $(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(o.disabled){return false}$(this).addClass("ui-state-active")
e=this
t.document.one("mouseup",function(){e=null})}).bind("mouseup"+this.eventNamespace,function(){if(o.disabled){return false}$(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(o.disabled){return false}if(t.keyCode===$.ui.keyCode.SPACE||t.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active")})
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(t){if(t.keyCode===$.ui.keyCode.SPACE){$(this).click()}})}}this._setOption("disabled",o.disabled)
this._resetButton()},_determineButtonType:function(){var t,e,i
if(this.element.is("[type=checkbox]")){this.type="checkbox"}else if(this.element.is("[type=radio]")){this.type="radio"}else if(this.element.is("input")){this.type="input"}else{this.type="button"}if(this.type==="checkbox"||this.type==="radio"){t=this.element.parents().last()
e="label[for='"+this.element.attr("id")+"']"
this.buttonElement=t.find(e)
if(!this.buttonElement.length){t=t.length?t.siblings():this.element.siblings()
this.buttonElement=t.filter(e)
if(!this.buttonElement.length){this.buttonElement=t.find(e)}}this.element.addClass("ui-helper-hidden-accessible")
i=this.element.is(":checked")
if(i){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",i)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible")
this.buttonElement.removeClass(r+" "+o+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html())
if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(t,e){this._super(t,e)
if(t==="disabled"){if(e){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled")
if(t!==this.options.disabled){this._setOption("disabled",t)}if(this.type==="radio"){h(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var t=this.buttonElement.removeClass(a),e=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,n=i.primary&&i.secondary,s=[]
if(i.primary||i.secondary){if(this.options.text){s.push("ui-button-text-icon"+(n?"s":i.primary?"-primary":"-secondary"))}if(i.primary){t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>")}if(i.secondary){t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>")}if(!this.options.text){s.push(n?"ui-button-icons-only":"ui-button-icon-only")
if(!this.hasTitle){t.attr("title",$.trim(e))}}}else{s.push("ui-button-text-only")}t.addClass(s.join(" "))}})
$.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){if(t==="disabled"){this.buttons.button("option",t,e)}this._super(t,e)},refresh:function(){var t=this.element.css("direction")==="rtl"
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset")
this.buttons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function($,t){var e={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},i={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true}
$.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=$(this).css(t).offset().top
if(e<0){$(this).css("top",t.top-e)}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height}
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)}
this.originalTitle=this.element.attr("title")
this.options.title=this.options.title||this.originalTitle
this._createWrapper()
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog)
this._createTitlebar()
this._createButtonPane()
if(this.options.draggable&&$.fn.draggable){this._makeDraggable()}if(this.options.resizable&&$.fn.resizable){this._makeResizable()}this._isOpen=false},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var t=this.options.appendTo
if(t&&(t.jquery||t.nodeType)){return $(t)}return this.document.find(t||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition
this._destroyOverlay()
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach()
this.uiDialog.stop(true,true).remove()
if(this.originalTitle){this.element.attr("title",this.originalTitle)}t=e.parent.children().eq(e.index)
if(t.length&&t[0]!==this.element[0]){t.before(this.element)}else{e.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:$.noop,enable:$.noop,close:function(t){var e=this
if(!this._isOpen||this._trigger("beforeClose",t)===false){return}this._isOpen=false
this._destroyOverlay()
if(!this.opener.filter(":focusable").focus().length){$(this.document[0].activeElement).blur()}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length
if(i&&!e){this._trigger("focus",t)}return i},open:function(){var t=this
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}return}this._isOpen=true
this.opener=$(this.document[0].activeElement)
this._size()
this._position()
this._createOverlay()
this._moveToTop(null,true)
this._show(this.uiDialog,this.options.show,function(){t._focusTabbable()
t._trigger("focus")})
this._trigger("open")},_focusTabbable:function(){var t=this.element.find("[autofocus]")
if(!t.length){t=this.element.find(":tabbable")}if(!t.length){t=this.uiDialogButtonPane.find(":tabbable")}if(!t.length){t=this.uiDialogTitlebarClose.filter(":tabbable")}if(!t.length){t=this.uiDialog}t.eq(0).focus()},_keepFocus:function(t){function e(){var t=this.document[0].activeElement,e=this.uiDialog[0]===t||$.contains(this.uiDialog[0],t)
if(!e){this._focusTabbable()}}t.preventDefault()
e.call(this)
this._delay(e)},_createWrapper:function(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo())
this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===$.ui.keyCode.ESCAPE){t.preventDefault()
this.close(t)
return}if(t.keyCode!==$.ui.keyCode.TAB){return}var e=this.uiDialog.find(":tabbable"),i=e.filter(":first"),n=e.filter(":last")
if((t.target===n[0]||t.target===this.uiDialog[0])&&!t.shiftKey){i.focus(1)
t.preventDefault()}else if((t.target===i[0]||t.target===this.uiDialog[0])&&t.shiftKey){n.focus(1)
t.preventDefault()}},mousedown:function(t){if(this._moveToTop(t)){this._focusTabbable()}}})
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var t
this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog)
this._on(this.uiDialogTitlebar,{mousedown:function(t){if(!$(t.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}})
this.uiDialogTitlebarClose=$("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar)
this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault()
this.close(t)}})
t=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar)
this._title(t)
this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(t){if(!this.options.title){t.html("&#160;")}t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane)
this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons
this.uiDialogButtonPane.remove()
this.uiButtonSet.empty()
if($.isEmptyObject(e)||$.isArray(e)&&!e.length){this.uiDialog.removeClass("ui-dialog-buttons")
return}$.each(e,function(e,i){var n,s
i=$.isFunction(i)?{click:i,text:e}:i
i=$.extend({type:"button"},i)
n=i.click
i.click=function(){n.apply(t.element[0],arguments)}
s={icons:i.icons,text:i.showText}
delete i.icons
delete i.showText
$("<button></button>",i).button(s).appendTo(t.uiButtonSet)})
this.uiDialog.addClass("ui-dialog-buttons")
this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var t=this,e=this.options
function i(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,n){$(this).addClass("ui-dialog-dragging")
t._blockFrames()
t._trigger("dragStart",e,i(n))},drag:function(e,n){t._trigger("drag",e,i(n))},stop:function(n,s){e.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()]
$(this).removeClass("ui-dialog-dragging")
t._unblockFrames()
t._trigger("dragStop",n,i(s))}})},_makeResizable:function(){var t=this,e=this.options,i=e.resizable,n=this.uiDialog.css("position"),s=typeof i==="string"?i:"n,e,s,w,se,sw,ne,nw"
function r(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:s,start:function(e,i){$(this).addClass("ui-dialog-resizing")
t._blockFrames()
t._trigger("resizeStart",e,r(i))},resize:function(e,i){t._trigger("resize",e,r(i))},stop:function(i,n){e.height=$(this).height()
e.width=$(this).width()
$(this).removeClass("ui-dialog-resizing")
t._unblockFrames()
t._trigger("resizeStop",i,r(n))}}).css("position",n)},_minHeight:function(){var t=this.options
return t.height==="auto"?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible")
if(!t){this.uiDialog.show()}this.uiDialog.position(this.options.position)
if(!t){this.uiDialog.hide()}},_setOptions:function(t){var n=this,s=false,r={}
$.each(t,function(t,o){n._setOption(t,o)
if(t in e){s=true}if(t in i){r[t]=o}})
if(s){this._size()
this._position()}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",r)}},_setOption:function(t,e){var i,n,s=this.uiDialog
if(t==="dialogClass"){s.removeClass(this.options.dialogClass).addClass(e)}if(t==="disabled"){return}this._super(t,e)
if(t==="appendTo"){this.uiDialog.appendTo(this._appendTo())}if(t==="buttons"){this._createButtons()}if(t==="closeText"){this.uiDialogTitlebarClose.button({label:""+e})}if(t==="draggable"){i=s.is(":data(ui-draggable)")
if(i&&!e){s.draggable("destroy")}if(!i&&e){this._makeDraggable()}}if(t==="position"){this._position()}if(t==="resizable"){n=s.is(":data(ui-resizable)")
if(n&&!e){s.resizable("destroy")}if(n&&typeof e==="string"){s.resizable("option","handles",e)}if(!n&&e!==false){this._makeResizable()}}if(t==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var t,e,i,n=this.options
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0})
if(n.minWidth>n.width){n.width=n.minWidth}t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight()
e=Math.max(0,n.minHeight-t)
i=typeof n.maxHeight==="number"?Math.max(0,n.maxHeight-t):"none"
if(n.height==="auto"){this.element.css({minHeight:e,maxHeight:i,height:"auto"})}else{this.element.height(Math.max(0,n.height-t))}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=$(this)
return $("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove()
delete this.iframeBlocks}},_createOverlay:function(){if(!this.options.modal){return}if(!$.ui.dialog.overlayInstances){this._delay(function(){if($.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(t){if(!$(t.target).closest(".ui-dialog").length&&!$(t.target).closest(".ui-datepicker").length){t.preventDefault()
$(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable()}})}})}this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo())
this._on(this.overlay,{mousedown:"_keepFocus"})
$.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal){return}if(this.overlay){$.ui.dialog.overlayInstances--
if(!$.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")}this.overlay.remove()
this.overlay=null}}})
$.ui.dialog.overlayInstances=0
if($.uiBackCompat!==false){$.widget("ui.dialog",$.ui.dialog,{_position:function(){var t=this.options.position,e=[],i=[0,0],n
if(t){if(typeof t==="string"||typeof t==="object"&&"0"in t){e=t.split?t.split(" "):[t[0],t[1]]
if(e.length===1){e[1]=e[0]}$.each(["left","top"],function(t,n){if(+e[t]===e[t]){i[t]=e[t]
e[t]=n}})
t={my:e[0]+(i[0]<0?i[0]:"+"+i[0])+" "+e[1]+(i[1]<0?i[1]:"+"+i[1]),at:e.join(" ")}}t=$.extend({},$.ui.dialog.prototype.options.position,t)}else{t=$.ui.dialog.prototype.options.position}n=this.uiDialog.is(":visible")
if(!n){this.uiDialog.show()}this.uiDialog.position(t)
if(!n){this.uiDialog.hide()}}})}})(jQuery);(function($,t){$.widget("ui.draggable",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
this._mouseDestroy()},_mouseCapture:function(t){var e=this.options
if(this.helper||e.disabled||$(t.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(t)
if(!this.handle){return false}$(e.iframeFix===true?"iframe":e.iframeFix).each(function(){$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body")})
return true},_mouseStart:function(t){var e=this.options
this.helper=this._createHelper(t)
this.helper.addClass("ui-draggable-dragging")
this._cacheHelperProportions()
if($.ui.ddmanager){$.ui.ddmanager.current=this}this._cacheMargins()
this.cssPosition=this.helper.css("position")
this.scrollParent=this.helper.scrollParent()
this.offset=this.positionAbs=this.element.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
$.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.originalPosition=this.position=this._generatePosition(t)
this.originalPageX=t.pageX
this.originalPageY=t.pageY
e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt)
if(e.containment){this._setContainment()}if(this._trigger("start",t)===false){this._clear()
return false}this._cacheHelperProportions()
if($.ui.ddmanager&&!e.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,t)}this._mouseDrag(t,true)
if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,t)}return true},_mouseDrag:function(t,e){this.position=this._generatePosition(t)
this.positionAbs=this._convertPositionTo("absolute")
if(!e){var i=this._uiHash()
if(this._trigger("drag",t,i)===false){this._mouseUp({})
return false}this.position=i.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}if($.ui.ddmanager){$.ui.ddmanager.drag(this,t)}return false},_mouseStop:function(t){var e,i=this,n=false,s=false
if($.ui.ddmanager&&!this.options.dropBehaviour){s=$.ui.ddmanager.drop(this,t)}if(this.dropped){s=this.dropped
this.dropped=false}e=this.element[0]
while(e&&(e=e.parentNode)){if(e===document){n=true}}if(!n&&this.options.helper==="original"){return false}if(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(i._trigger("stop",t)!==false){i._clear()}})}else{if(this._trigger("stop",t)!==false){this._clear()}}return false},_mouseUp:function(t){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})
if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,t)}return $.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(t){var e=!this.options.handle||!$(this.options.handle,this.element).length?true:false
$(this.options.handle,this.element).find("*").addBack().each(function(){if(this===t.target){e=true}})
return e},_createHelper:function(t){var e=this.options,i=$.isFunction(e.helper)?$(e.helper.apply(this.element[0],[t])):e.helper==="clone"?this.element.clone().removeAttr("id"):this.element
if(!i.parents("body").length){i.appendTo(e.appendTo==="parent"?this.element[0].parentNode:e.appendTo)}if(i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))){i.css("position","absolute")}return i},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if($.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var t=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft()
t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var t=this.element.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,n=this.options
if(n.containment==="parent"){n.containment=this.helper[0].parentNode}if(n.containment==="document"||n.containment==="window"){this.containment=[n.containment==="document"?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,n.containment==="document"?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(n.containment==="document"?0:$(window).scrollLeft())+$(n.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(n.containment==="document"?0:$(window).scrollTop())+($(n.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(n.containment)&&n.containment.constructor!==Array){e=$(n.containment)
i=e[0]
if(!i){return}t=$(i).css("overflow")!=="hidden"
this.containment=[(parseInt($(i).css("borderLeftWidth"),10)||0)+(parseInt($(i).css("paddingLeft"),10)||0),(parseInt($(i).css("borderTopWidth"),10)||0)+(parseInt($(i).css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt($(i).css("borderLeftWidth"),10)||0)-(parseInt($(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt($(i).css("borderTopWidth"),10)||0)-(parseInt($(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
this.relative_container=e}else if(n.containment.constructor===Array){this.containment=n.containment}},_convertPositionTo:function(t,e){if(!e){e=this.position}var i=t==="absolute"?1:-1,n=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(n[0].tagName)
return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:n.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:n.scrollLeft())*i}},_generatePosition:function(t){var e,i,n,s,r=this.options,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=/(html|body)/i.test(o[0].tagName),l=t.pageX,h=t.pageY
if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset()
e=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{e=this.containment}if(t.pageX-this.offset.click.left<e[0]){l=e[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<e[1]){h=e[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>e[2]){l=e[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>e[3]){h=e[3]+this.offset.click.top}}if(r.grid){n=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY
h=e?n-this.offset.click.top>=e[1]||n-this.offset.click.top>e[3]?n:n-this.offset.click.top>=e[1]?n-r.grid[1]:n+r.grid[1]:n
s=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX
l=e?s-this.offset.click.left>=e[0]||s-this.offset.click.left>e[2]?s:s-this.offset.click.left>=e[0]?s-r.grid[0]:s+r.grid[0]:s}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:o.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:o.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging")
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null
this.cancelHelperRemoval=false},_trigger:function(t,e,i){i=i||this._uiHash()
$.ui.plugin.call(this,t,[e,i])
if(t==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return $.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}})
$.ui.plugin.add("draggable","connectToSortable",{start:function(t,e){var i=$(this).data("ui-draggable"),n=i.options,s=$.extend({},e,{item:i.element})
i.sortables=[]
$(n.connectToSortable).each(function(){var e=$.data(this,"ui-sortable")
if(e&&!e.options.disabled){i.sortables.push({instance:e,shouldRevert:e.options.revert})
e.refreshPositions()
e._trigger("activate",t,s)}})},stop:function(t,e){var i=$(this).data("ui-draggable"),n=$.extend({},e,{item:i.element})
$.each(i.sortables,function(){if(this.instance.isOver){this.instance.isOver=0
i.cancelHelperRemoval=true
this.instance.cancelHelperRemoval=false
if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(t)
this.instance.options.helper=this.instance.options._helper
if(i.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false
this.instance._trigger("deactivate",t,n)}})},drag:function(t,e){var i=$(this).data("ui-draggable"),n=this
$.each(i.sortables,function(){var s=false,r=this
this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this.instance._intersectsWith(this.instance.containerCache)){s=true
$.each(i.sortables,function(){this.instance.positionAbs=i.positionAbs
this.instance.helperProportions=i.helperProportions
this.instance.offset.click=i.offset.click
if(this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&$.contains(r.instance.element[0],this.instance.element[0])){s=false}return s})}if(s){if(!this.instance.isOver){this.instance.isOver=1
this.instance.currentItem=$(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true)
this.instance.options._helper=this.instance.options.helper
this.instance.options.helper=function(){return e.helper[0]}
t.target=this.instance.currentItem[0]
this.instance._mouseCapture(t,true)
this.instance._mouseStart(t,true,true)
this.instance.offset.click.top=i.offset.click.top
this.instance.offset.click.left=i.offset.click.left
this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left
this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top
i._trigger("toSortable",t)
i.dropped=this.instance.element
i.currentItem=i.element
this.instance.fromOutside=i}if(this.instance.currentItem){this.instance._mouseDrag(t)}}else{if(this.instance.isOver){this.instance.isOver=0
this.instance.cancelHelperRemoval=true
this.instance.options.revert=false
this.instance._trigger("out",t,this.instance._uiHash(this.instance))
this.instance._mouseStop(t,true)
this.instance.options.helper=this.instance.options._helper
this.instance.currentItem.remove()
if(this.instance.placeholder){this.instance.placeholder.remove()}i._trigger("fromSortable",t)
i.dropped=false}}})}})
$.ui.plugin.add("draggable","cursor",{start:function(){var t=$("body"),e=$(this).data("ui-draggable").options
if(t.css("cursor")){e._cursor=t.css("cursor")}t.css("cursor",e.cursor)},stop:function(){var t=$(this).data("ui-draggable").options
if(t._cursor){$("body").css("cursor",t._cursor)}}})
$.ui.plugin.add("draggable","opacity",{start:function(t,e){var i=$(e.helper),n=$(this).data("ui-draggable").options
if(i.css("opacity")){n._opacity=i.css("opacity")}i.css("opacity",n.opacity)},stop:function(t,e){var i=$(this).data("ui-draggable").options
if(i._opacity){$(e.helper).css("opacity",i._opacity)}}})
$.ui.plugin.add("draggable","scroll",{start:function(){var t=$(this).data("ui-draggable")
if(t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"){t.overflowOffset=t.scrollParent.offset()}},drag:function(t){var e=$(this).data("ui-draggable"),i=e.options,n=false
if(e.scrollParent[0]!==document&&e.scrollParent[0].tagName!=="HTML"){if(!i.axis||i.axis!=="x"){if(e.overflowOffset.top+e.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity){e.scrollParent[0].scrollTop=n=e.scrollParent[0].scrollTop+i.scrollSpeed}else if(t.pageY-e.overflowOffset.top<i.scrollSensitivity){e.scrollParent[0].scrollTop=n=e.scrollParent[0].scrollTop-i.scrollSpeed}}if(!i.axis||i.axis!=="y"){if(e.overflowOffset.left+e.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity){e.scrollParent[0].scrollLeft=n=e.scrollParent[0].scrollLeft+i.scrollSpeed}else if(t.pageX-e.overflowOffset.left<i.scrollSensitivity){e.scrollParent[0].scrollLeft=n=e.scrollParent[0].scrollLeft-i.scrollSpeed}}}else{if(!i.axis||i.axis!=="x"){if(t.pageY-$(document).scrollTop()<i.scrollSensitivity){n=$(document).scrollTop($(document).scrollTop()-i.scrollSpeed)}else if($(window).height()-(t.pageY-$(document).scrollTop())<i.scrollSensitivity){n=$(document).scrollTop($(document).scrollTop()+i.scrollSpeed)}}if(!i.axis||i.axis!=="y"){if(t.pageX-$(document).scrollLeft()<i.scrollSensitivity){n=$(document).scrollLeft($(document).scrollLeft()-i.scrollSpeed)}else if($(window).width()-(t.pageX-$(document).scrollLeft())<i.scrollSensitivity){n=$(document).scrollLeft($(document).scrollLeft()+i.scrollSpeed)}}}if(n!==false&&$.ui.ddmanager&&!i.dropBehaviour){$.ui.ddmanager.prepareOffsets(e,t)}}})
$.ui.plugin.add("draggable","snap",{start:function(){var t=$(this).data("ui-draggable"),e=t.options
t.snapElements=[]
$(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var e=$(this),i=e.offset()
if(this!==t.element[0]){t.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})}})},drag:function(t,e){var i,n,s,r,o,a,l,h,c,u,f=$(this).data("ui-draggable"),d=f.options,p=d.snapTolerance,m=e.offset.left,g=m+f.helperProportions.width,v=e.offset.top,y=v+f.helperProportions.height
for(c=f.snapElements.length-1;c>=0;c--){o=f.snapElements[c].left
a=o+f.snapElements[c].width
l=f.snapElements[c].top
h=l+f.snapElements[c].height
if(!(o-p<m&&m<a+p&&l-p<v&&v<h+p||o-p<m&&m<a+p&&l-p<y&&y<h+p||o-p<g&&g<a+p&&l-p<v&&v<h+p||o-p<g&&g<a+p&&l-p<y&&y<h+p)){if(f.snapElements[c].snapping){f.options.snap.release&&f.options.snap.release.call(f.element,t,$.extend(f._uiHash(),{snapItem:f.snapElements[c].item}))}f.snapElements[c].snapping=false
continue}if(d.snapMode!=="inner"){i=Math.abs(l-y)<=p
n=Math.abs(h-v)<=p
s=Math.abs(o-g)<=p
r=Math.abs(a-m)<=p
if(i){e.position.top=f._convertPositionTo("relative",{top:l-f.helperProportions.height,left:0}).top-f.margins.top}if(n){e.position.top=f._convertPositionTo("relative",{top:h,left:0}).top-f.margins.top}if(s){e.position.left=f._convertPositionTo("relative",{top:0,left:o-f.helperProportions.width}).left-f.margins.left}if(r){e.position.left=f._convertPositionTo("relative",{top:0,left:a}).left-f.margins.left}}u=i||n||s||r
if(d.snapMode!=="outer"){i=Math.abs(l-v)<=p
n=Math.abs(h-y)<=p
s=Math.abs(o-m)<=p
r=Math.abs(a-g)<=p
if(i){e.position.top=f._convertPositionTo("relative",{top:l,left:0}).top-f.margins.top}if(n){e.position.top=f._convertPositionTo("relative",{top:h-f.helperProportions.height,left:0}).top-f.margins.top}if(s){e.position.left=f._convertPositionTo("relative",{top:0,left:o}).left-f.margins.left}if(r){e.position.left=f._convertPositionTo("relative",{top:0,left:a-f.helperProportions.width}).left-f.margins.left}}if(!f.snapElements[c].snapping&&(i||n||s||r||u)){f.options.snap.snap&&f.options.snap.snap.call(f.element,t,$.extend(f._uiHash(),{snapItem:f.snapElements[c].item}))}f.snapElements[c].snapping=i||n||s||r||u}}})
$.ui.plugin.add("draggable","stack",{start:function(){var t,e=this.data("ui-draggable").options,i=$.makeArray($(e.stack)).sort(function(t,e){return(parseInt($(t).css("zIndex"),10)||0)-(parseInt($(e).css("zIndex"),10)||0)})
if(!i.length){return}t=parseInt($(i[0]).css("zIndex"),10)||0
$(i).each(function(e){$(this).css("zIndex",t+e)})
this.css("zIndex",t+i.length)}})
$.ui.plugin.add("draggable","zIndex",{start:function(t,e){var i=$(e.helper),n=$(this).data("ui-draggable").options
if(i.css("zIndex")){n._zIndex=i.css("zIndex")}i.css("zIndex",n.zIndex)},stop:function(t,e){var i=$(this).data("ui-draggable").options
if(i._zIndex){$(e.helper).css("zIndex",i._zIndex)}}})})(jQuery);(function($,t){function e(t,e,i){return t>e&&t<e+i}$.widget("ui.droppable",{version:"1.10.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,e=t.accept
this.isover=false
this.isout=true
this.accept=$.isFunction(e)?e:function(t){return t.is(e)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
$.ui.ddmanager.droppables[t.scope]=$.ui.ddmanager.droppables[t.scope]||[]
$.ui.ddmanager.droppables[t.scope].push(this)
t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,e=$.ui.ddmanager.droppables[this.options.scope]
for(;t<e.length;t++){if(e[t]===this){e.splice(t,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,e){if(t==="accept"){this.accept=$.isFunction(e)?e:function(t){return t.is(e)}}$.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var e=$.ui.ddmanager.current
if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(e){this._trigger("activate",t,this.ui(e))}},_deactivate:function(t){var e=$.ui.ddmanager.current
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(e){this._trigger("deactivate",t,this.ui(e))}},_over:function(t){var e=$.ui.ddmanager.current
if(!e||(e.currentItem||e.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],e.currentItem||e.element)){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",t,this.ui(e))}},_out:function(t){var e=$.ui.ddmanager.current
if(!e||(e.currentItem||e.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],e.currentItem||e.element)){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",t,this.ui(e))}},_drop:function(t,e){var i=e||$.ui.ddmanager.current,n=false
if(!i||(i.currentItem||i.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=$.data(this,"ui-droppable")
if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&$.ui.intersect(i,$.extend(t,{offset:t.element.offset()}),t.options.tolerance)){n=true
return false}})
if(n){return false}if(this.accept.call(this.element[0],i.currentItem||i.element)){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",t,this.ui(i))
return this.element}return false},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}})
$.ui.intersect=function(t,i,n){if(!i.offset){return false}var s,r,o=(t.positionAbs||t.position.absolute).left,a=o+t.helperProportions.width,l=(t.positionAbs||t.position.absolute).top,h=l+t.helperProportions.height,c=i.offset.left,u=c+i.proportions.width,f=i.offset.top,d=f+i.proportions.height
switch(n){case"fit":return c<=o&&a<=u&&f<=l&&h<=d
case"intersect":return c<o+t.helperProportions.width/2&&a-t.helperProportions.width/2<u&&f<l+t.helperProportions.height/2&&h-t.helperProportions.height/2<d
case"pointer":s=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left
r=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top
return e(r,f,i.proportions.height)&&e(s,c,i.proportions.width)
case"touch":return(l>=f&&l<=d||h>=f&&h<=d||l<f&&h>d)&&(o>=c&&o<=u||a>=c&&a<=u||o<c&&a>u)
default:return false}}
$.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,e){var i,n,s=$.ui.ddmanager.droppables[t.options.scope]||[],r=e?e.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack()
t:for(i=0;i<s.length;i++){if(s[i].options.disabled||t&&!s[i].accept.call(s[i].element[0],t.currentItem||t.element)){continue}for(n=0;n<o.length;n++){if(o[n]===s[i].element[0]){s[i].proportions.height=0
continue t}}s[i].visible=s[i].element.css("display")!=="none"
if(!s[i].visible){continue}if(r==="mousedown"){s[i]._activate.call(s[i],e)}s[i].offset=s[i].element.offset()
s[i].proportions={width:s[i].element[0].offsetWidth,height:s[i].element[0].offsetHeight}}},drop:function(t,e){var i=false
$.each($.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&$.ui.intersect(t,this,this.options.tolerance)){i=this._drop.call(this,e)||i}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)){this.isout=true
this.isover=false
this._deactivate.call(this,e)}})
return i},dragStart:function(t,e){t.element.parentsUntil("body").bind("scroll.droppable",function(){if(!t.options.refreshPositions){$.ui.ddmanager.prepareOffsets(t,e)}})},drag:function(t,e){if(t.options.refreshPositions){$.ui.ddmanager.prepareOffsets(t,e)}$.each($.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var i,n,s,r=$.ui.intersect(t,this,this.options.tolerance),o=!r&&this.isover?"isout":r&&!this.isover?"isover":null
if(!o){return}if(this.options.greedy){n=this.options.scope
s=this.element.parents(":data(ui-droppable)").filter(function(){return $.data(this,"ui-droppable").options.scope===n})
if(s.length){i=$.data(s[0],"ui-droppable")
i.greedyChild=o==="isover"}}if(i&&o==="isover"){i.isover=false
i.isout=true
i._out.call(i,e)}this[o]=true
this[o==="isout"?"isover":"isout"]=false
this[o==="isover"?"_over":"_out"].call(this,e)
if(i&&o==="isout"){i.isout=false
i.isover=true
i._over.call(i,e)}})},dragStop:function(t,e){t.element.parentsUntil("body").unbind("scroll.droppable")
if(!t.options.refreshPositions){$.ui.ddmanager.prepareOffsets(t,e)}}}})(jQuery)
jQuery.effects||function($,t){var e="ui-effects-"
$.effects={effect:{}};(function(t,e){var i="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",n=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],r=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={byte:{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},l=r.support={},h=t("<p>")[0],c,u=t.each
h.style.cssText="background-color:rgba(1,1,1,.5)"
l.rgba=h.style.backgroundColor.indexOf("rgba")>-1
u(o,function(t,e){e.cache="_"+t
e.props.alpha={idx:3,type:"percent",def:1}})
function f(t,e,i){var n=a[e.type]||{}
if(t==null){return i||!e.def?null:e.def}t=n.floor?~~t:parseFloat(t)
if(isNaN(t)){return e.def}if(n.mod){return(t+n.mod)%n.mod}return 0>t?0:n.max<t?n.max:t}function d(e){var i=r(),n=i._rgba=[]
e=e.toLowerCase()
u(s,function(t,s){var r,a=s.re.exec(e),l=a&&s.parse(a),h=s.space||"rgba"
if(l){r=i[h](l)
i[o[h].cache]=r[o[h].cache]
n=i._rgba=r._rgba
return false}})
if(n.length){if(n.join()==="0,0,0,0"){t.extend(n,c.transparent)}return i}return c[e]}r.fn=t.extend(r.prototype,{parse:function(i,n,s,a){if(i===e){this._rgba=[null,null,null,null]
return this}if(i.jquery||i.nodeType){i=t(i).css(n)
n=e}var l=this,h=t.type(i),p=this._rgba=[]
if(n!==e){i=[i,n,s,a]
h="array"}if(h==="string"){return this.parse(d(i)||c._default)}if(h==="array"){u(o.rgba.props,function(t,e){p[e.idx]=f(i[e.idx],e)})
return this}if(h==="object"){if(i instanceof r){u(o,function(t,e){if(i[e.cache]){l[e.cache]=i[e.cache].slice()}})}else{u(o,function(e,n){var s=n.cache
u(n.props,function(t,e){if(!l[s]&&n.to){if(t==="alpha"||i[t]==null){return}l[s]=n.to(l._rgba)}l[s][e.idx]=f(i[t],e,true)})
if(l[s]&&t.inArray(null,l[s].slice(0,3))<0){l[s][3]=1
if(n.from){l._rgba=n.from(l[s])}}})}return this}},is:function(t){var e=r(t),i=true,n=this
u(o,function(_,t){var s,r=e[t.cache]
if(r){s=n[t.cache]||t.to&&t.to(n._rgba)||[]
u(t.props,function(_,t){if(r[t.idx]!=null){i=r[t.idx]===s[t.idx]
return i}})}return i})
return i},_space:function(){var t=[],e=this
u(o,function(i,n){if(e[n.cache]){t.push(i)}})
return t.pop()},transition:function(t,e){var i=r(t),n=i._space(),s=o[n],l=this.alpha()===0?r("transparent"):this,h=l[s.cache]||s.to(l._rgba),c=h.slice()
i=i[s.cache]
u(s.props,function(t,n){var s=n.idx,r=h[s],o=i[s],l=a[n.type]||{}
if(o===null){return}if(r===null){c[s]=o}else{if(l.mod){if(o-r>l.mod/2){r+=l.mod}else if(r-o>l.mod/2){r-=l.mod}}c[s]=f((o-r)*e+r,n)}})
return this[n](c)},blend:function(e){if(this._rgba[3]===1){return this}var i=this._rgba.slice(),n=i.pop(),s=r(e)._rgba
return r(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return t==null?e>2?1:0:t})
if(i[3]===1){i.pop()
e="rgb("}return e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){if(t==null){t=e>2?1:0}if(e&&e<3){t=Math.round(t*100)+"%"}return t})
if(i[3]===1){i.pop()
e="hsl("}return e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop()
if(e){i.push(~~(n*255))}return"#"+t.map(i,function(t){t=(t||0).toString(16)
return t.length===1?"0"+t:t}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}})
r.fn.parse.prototype=r.fn
function p(t,e,i){i=(i+1)%1
if(i*6<1){return t+(e-t)*i*6}if(i*2<1){return e}if(i*3<2){return t+(e-t)*(2/3-i)*6}return t}o.hsla.to=function(t){if(t[0]==null||t[1]==null||t[2]==null){return[null,null,null,t[3]]}var e=t[0]/255,i=t[1]/255,n=t[2]/255,s=t[3],r=Math.max(e,i,n),o=Math.min(e,i,n),a=r-o,l=r+o,h=l*.5,c,u
if(o===r){c=0}else if(e===r){c=60*(i-n)/a+360}else if(i===r){c=60*(n-e)/a+120}else{c=60*(e-i)/a+240}if(a===0){u=0}else if(h<=.5){u=a/l}else{u=a/(2-l)}return[Math.round(c)%360,u,h,s==null?1:s]}
o.hsla.from=function(t){if(t[0]==null||t[1]==null||t[2]==null){return[null,null,null,t[3]]}var e=t[0]/360,i=t[1],n=t[2],s=t[3],r=n<=.5?n*(1+i):n+i-n*i,o=2*n-r
return[Math.round(p(o,r,e+1/3)*255),Math.round(p(o,r,e)*255),Math.round(p(o,r,e-1/3)*255),s]}
u(o,function(i,s){var o=s.props,a=s.cache,l=s.to,h=s.from
r.fn[i]=function(i){if(l&&!this[a]){this[a]=l(this._rgba)}if(i===e){return this[a].slice()}var n,s=t.type(i),c=s==="array"||s==="object"?i:arguments,d=this[a].slice()
u(o,function(t,e){var i=c[s==="object"?t:e.idx]
if(i==null){i=d[e.idx]}d[e.idx]=f(i,e)})
if(h){n=r(h(d))
n[a]=d
return n}else{return r(d)}}
u(o,function(e,s){if(r.fn[e]){return}r.fn[e]=function(r){var o=t.type(r),a=e==="alpha"?this._hsla?"hsla":"rgba":i,l=this[a](),h=l[s.idx],c
if(o==="undefined"){return h}if(o==="function"){r=r.call(this,h)
o=t.type(r)}if(r==null&&s.empty){return this}if(o==="string"){c=n.exec(r)
if(c){r=h+parseFloat(c[2])*(c[1]==="+"?1:-1)}}l[s.idx]=r
return this[a](l)}})})
r.hook=function(e){var i=e.split(" ")
u(i,function(e,i){t.cssHooks[i]={set:function(e,n){var s,o,a=""
if(n!=="transparent"&&(t.type(n)!=="string"||(s=d(n)))){n=r(s||n)
if(!l.rgba&&n._rgba[3]!==1){o=i==="backgroundColor"?e.parentNode:e
while((a===""||a==="transparent")&&o&&o.style){try{a=t.css(o,"backgroundColor")
o=o.parentNode}catch(t){}}n=n.blend(a&&a!=="transparent"?a:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(t){}}}
t.fx.step[i]=function(e){if(!e.colorInit){e.start=r(e.elem,i)
e.end=r(e.end)
e.colorInit=true}t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})}
r.hook(i)
t.cssHooks.borderColor={expand:function(t){var e={}
u(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t})
return e}}
c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var e=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,t){$.fx.step[t]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr){jQuery.style(e.elem,t,e.end)
e.setAttr=true}}})
function n(t){var e,i,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={}
if(n&&n.length&&n[0]&&n[n[0]]){i=n.length
while(i--){e=n[i]
if(typeof n[e]==="string"){s[$.camelCase(e)]=n[e]}}}else{for(e in n){if(typeof n[e]==="string"){s[e]=n[e]}}}return s}function s(t,e){var n={},s,r
for(s in e){r=e[s]
if(t[s]!==r){if(!i[s]){if($.fx.step[s]||!isNaN(parseFloat(r))){n[s]=r}}}}return n}if(!$.fn.addBack){$.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}}$.effects.animateClass=function(t,i,r,o){var a=$.speed(i,r,o)
return this.queue(function(){var i=$(this),r=i.attr("class")||"",o,l=a.children?i.find("*").addBack():i
l=l.map(function(){var t=$(this)
return{el:t,start:n(this)}})
o=function(){$.each(e,function(e,n){if(t[n]){i[n+"Class"](t[n])}})}
o()
l=l.map(function(){this.end=n(this.el[0])
this.diff=s(this.start,this.end)
return this})
i.attr("class",r)
l=l.map(function(){var t=this,e=$.Deferred(),i=$.extend({},a,{queue:false,complete:function(){e.resolve(t)}})
this.el.animate(this.diff,i)
return e.promise()})
$.when.apply($,l.get()).done(function(){o()
$.each(arguments,function(){var t=this.el
$.each(this.diff,function(e){t.css(e,"")})})
a.complete.call(i[0])})})}
$.fn.extend({_addClass:$.fn.addClass,addClass:function(t,e,i,n){return e?$.effects.animateClass.call(this,{add:t},e,i,n):this._addClass(t)},_removeClass:$.fn.removeClass,removeClass:function(t,e,i,n){return arguments.length>1?$.effects.animateClass.call(this,{remove:t},e,i,n):this._removeClass.apply(this,arguments)},_toggleClass:$.fn.toggleClass,toggleClass:function(e,i,n,s,r){if(typeof i==="boolean"||i===t){if(!n){return this._toggleClass(e,i)}else{return $.effects.animateClass.call(this,i?{add:e}:{remove:e},n,s,r)}}else{return $.effects.animateClass.call(this,{toggle:e},i,n,s)}},switchClass:function(t,e,i,n,s){return $.effects.animateClass.call(this,{add:e,remove:t},i,n,s)}})})();(function(){$.extend($.effects,{version:"1.10.1",save:function(t,i){for(var n=0;n<i.length;n++){if(i[n]!==null){t.data(e+i[n],t[0].style[i[n]])}}},restore:function(i,n){var s,r
for(r=0;r<n.length;r++){if(n[r]!==null){s=i.data(e+n[r])
if(s===t){s=""}i.css(n[r],s)}}},setMode:function(t,e){if(e==="toggle"){e=t.is(":hidden")?"show":"hide"}return e},getBaseline:function(t,e){var i,n
switch(t[0]){case"top":i=0
break
case"middle":i=.5
break
case"bottom":i=1
break
default:i=t[0]/e.height}switch(t[1]){case"left":n=0
break
case"center":n=.5
break
case"right":n=1
break
default:n=t[1]/e.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper")){return t.parent()}var e={width:t.outerWidth(true),height:t.outerHeight(true),float:t.css("float")},i=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},s=document.activeElement
try{s.id}catch(t){s=document.body}t.wrap(i)
if(t[0]===s||$.contains(t[0],s)){$(s).focus()}i=t.parent()
if(t.css("position")==="static"){i.css({position:"relative"})
t.css({position:"relative"})}else{$.extend(e,{position:t.css("position"),zIndex:t.css("z-index")})
$.each(["top","left","bottom","right"],function(i,n){e[n]=t.css(n)
if(isNaN(parseInt(e[n],10))){e[n]="auto"}})
t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}t.css(n)
return i.css(e).show()},removeWrapper:function(t){var e=document.activeElement
if(t.parent().is(".ui-effects-wrapper")){t.parent().replaceWith(t)
if(t[0]===e||$.contains(t[0],e)){$(e).focus()}}return t},setTransition:function(t,e,i,n){n=n||{}
$.each(e,function(e,s){var r=t.cssUnit(s)
if(r[0]>0){n[s]=r[0]*i+r[1]}})
return n}})
function i(t,e,i,n){if($.isPlainObject(t)){e=t
t=t.effect}t={effect:t}
if(e==null){e={}}if($.isFunction(e)){n=e
i=null
e={}}if(typeof e==="number"||$.fx.speeds[e]){n=i
i=e
e={}}if($.isFunction(i)){n=i
i=null}if(e){$.extend(t,e)}i=i||e.duration
t.duration=$.fx.off?0:typeof i==="number"?i:i in $.fx.speeds?$.fx.speeds[i]:$.fx.speeds._default
t.complete=n||e.complete
return t}function n(t){if(!t||typeof t==="number"||$.fx.speeds[t]){return true}return typeof t==="string"&&!$.effects.effect[t]}$.fn.extend({effect:function(){var t=i.apply(this,arguments),e=t.mode,n=t.queue,s=$.effects.effect[t.effect]
if($.fx.off||!s){if(e){return this[e](t.duration,t.complete)}else{return this.each(function(){if(t.complete){t.complete.call(this)}})}}function r(e){var i=$(this),n=t.complete,r=t.mode
function o(){if($.isFunction(n)){n.call(i[0])}if($.isFunction(e)){e()}}if(i.is(":hidden")?r==="hide":r==="show"){o()}else{s.call(i[0],t,o)}}return n===false?this.each(r):this.queue(n||"fx",r)},_show:$.fn.show,show:function(t){if(n(t)){return this._show.apply(this,arguments)}else{var e=i.apply(this,arguments)
e.mode="show"
return this.effect.call(this,e)}},_hide:$.fn.hide,hide:function(t){if(n(t)){return this._hide.apply(this,arguments)}else{var e=i.apply(this,arguments)
e.mode="hide"
return this.effect.call(this,e)}},__toggle:$.fn.toggle,toggle:function(t){if(n(t)||typeof t==="boolean"||$.isFunction(t)){return this.__toggle.apply(this,arguments)}else{var e=i.apply(this,arguments)
e.mode="toggle"
return this.effect.call(this,e)}},cssUnit:function(t){var e=this.css(t),i=[]
$.each(["em","px","%","pt"],function(t,n){if(e.indexOf(n)>0){i=[parseFloat(e),n]}})
return i}})})();(function(){var t={}
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}})
$.extend(t,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return t===0||t===1?t:-Math.pow(2,8*(t-1))*Math.sin(((t-1)*80-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){var e,i=4
while(t<((e=Math.pow(2,--i))-1)/11){}return 1/Math.pow(4,3-i)-7.5625*Math.pow((e*3-2)/22-t,2)}})
$.each(t,function(t,e){$.easing["easeIn"+t]=e
$.easing["easeOut"+t]=function(t){return 1-e(1-t)}
$.easing["easeInOut"+t]=function(t){return t<.5?e(t*2)/2:1-e(t*-2+2)/2}})})()}(jQuery);(function($,t){$.widget("ui.menu",{version:"1.10.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element
this.mouseHandled=false
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,$.proxy(function(t){if(this.options.disabled){t.preventDefault()}},this))
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(t){var e=$(t.target).closest(".ui-menu-item")
if(!this.mouseHandled&&e.not(".ui-state-disabled").length){this.mouseHandled=true
this.select(t)
if(e.has(".ui-menu").length){this.expand(t)}else if(!this.element.is(":focus")){this.element.trigger("focus",[true])
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(t){var e=$(t.currentTarget)
e.siblings().children(".ui-state-active").removeClass("ui-state-active")
this.focus(t,e)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0)
if(!e){this.focus(t,i)}},blur:function(t){this._delay(function(){if(!$.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(t)}})},keydown:"_keydown"})
this.refresh()
this._on(this.document,{click:function(t){if(!$(t.target).closest(".ui-menu").length){this.collapseAll(t)}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show()
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=$(this)
if(t.data("ui-menu-submenu-carat")){t.remove()}})
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var e,i,n,s,r,o=true
function a(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(t.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(t)
break
case $.ui.keyCode.PAGE_DOWN:this.nextPage(t)
break
case $.ui.keyCode.HOME:this._move("first","first",t)
break
case $.ui.keyCode.END:this._move("last","last",t)
break
case $.ui.keyCode.UP:this.previous(t)
break
case $.ui.keyCode.DOWN:this.next(t)
break
case $.ui.keyCode.LEFT:this.collapse(t)
break
case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(t)}break
case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(t)
break
case $.ui.keyCode.ESCAPE:this.collapse(t)
break
default:o=false
i=this.previousFilter||""
n=String.fromCharCode(t.keyCode)
s=false
clearTimeout(this.filterTimer)
if(n===i){s=true}else{n=i+n}r=new RegExp("^"+a(n),"i")
e=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test($(this).children("a").text())})
e=s&&e.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):e
if(!e.length){n=String.fromCharCode(t.keyCode)
r=new RegExp("^"+a(n),"i")
e=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test($(this).children("a").text())})}if(e.length){this.focus(t,e)
if(e.length>1){this.previousFilter=n
this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(o){t.preventDefault()}},_activate:function(t){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(t)}else{this.select(t)}}},refresh:function(){var t,e=this.options.icons.submenu,i=this.element.find(this.options.menus)
i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=$(this),i=t.prev("a"),n=$("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",true)
i.attr("aria-haspopup","true").prepend(n)
t.attr("aria-labelledby",i.attr("id"))})
t=i.add(this.element)
t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()})
t.children(":not(.ui-menu-item)").each(function(){var t=$(this)
if(!/[^\-\u2014\u2013\s]/.test(t.text())){t.addClass("ui-widget-content ui-menu-divider")}})
t.children(".ui-state-disabled").attr("aria-disabled","true")
if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if(t==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu)}this._super(t,e)},focus:function(t,e){var i,n
this.blur(t,t&&t.type==="focus")
this._scrollIntoView(e)
this.active=e.first()
n=this.active.children("a").addClass("ui-state-focus")
if(this.options.role){this.element.attr("aria-activedescendant",n.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active")
if(t&&t.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}i=e.children(".ui-menu")
if(i.length&&/^mouse/.test(t.type)){this._startOpening(i)}this.activeMenu=e.parent()
this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,n,s,r,o
if(this._hasScroll()){e=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0
i=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0
n=t.offset().top-this.activeMenu.offset().top-e-i
s=this.activeMenu.scrollTop()
r=this.activeMenu.height()
o=t.height()
if(n<0){this.activeMenu.scrollTop(s+n)}else if(n+o>r){this.activeMenu.scrollTop(s+n-r+o)}}},blur:function(t,e){if(!e){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus")
this.active=null
this._trigger("blur",t,{item:this.active})},_startOpening:function(t){clearTimeout(this.timer)
if(t.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close()
this._open(t)},this.delay)},_open:function(t){var e=$.extend({of:this.active},this.options.position)
clearTimeout(this.timer)
this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true")
t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(t,e){clearTimeout(this.timer)
this.timer=this._delay(function(){var i=e?this.element:$(t&&t.target).closest(this.element.find(".ui-menu"))
if(!i.length){i=this.element}this._close(i)
this.blur(t)
this.activeMenu=i},this.delay)},_close:function(t){if(!t){t=this.active?this.active.parent():this.element}t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
if(e&&e.length){this._close()
this.focus(t,e)}},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first()
if(e&&e.length){this._open(e.parent())
this._delay(function(){this.focus(t,e)})}},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n
if(this.active){if(t==="first"||t==="last"){n=this.active[t==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{n=this.active[t+"All"](".ui-menu-item").eq(0)}}if(!n||!n.length||!this.active){n=this.activeMenu.children(".ui-menu-item")[e]()}this.focus(i,n)},nextPage:function(t){var e,i,n
if(!this.active){this.next(t)
return}if(this.isLastItem()){return}if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.nextAll(".ui-menu-item").each(function(){e=$(this)
return e.offset().top-i-n<0})
this.focus(t,e)}else{this.focus(t,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(t){var e,i,n
if(!this.active){this.next(t)
return}if(this.isFirstItem()){return}if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.prevAll(".ui-menu-item").each(function(){e=$(this)
return e.offset().top-i+n>0})
this.focus(t,e)}else{this.focus(t,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||$(t.target).closest(".ui-menu-item")
var e={item:this.active}
if(!this.active.has(".ui-menu").length){this.collapseAll(t,true)}this._trigger("select",t,e)}})})(jQuery);(function($,t){$.ui=$.ui||{}
var e,i=Math.max,n=Math.abs,s=Math.round,r=/left|center|right/,o=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,h=/%$/,c=$.fn.position
function u(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function f(t,e){return parseInt($.css(t,e),10)||0}function d(t){var e=t[0]
if(e.nodeType===9){return{width:t.width(),height:t.height(),offset:{top:0,left:0}}}if($.isWindow(e)){return{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}}if(e.preventDefault){return{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}}return{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}$.position={scrollbarWidth:function(){if(e!==t){return e}var i,n,s=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0]
$("body").append(s)
i=r.offsetWidth
s.css("overflow","scroll")
n=r.offsetWidth
if(i===n){n=s[0].clientWidth}s.remove()
return e=i-n},getScrollInfo:function(t){var e=t.isWindow?"":t.element.css("overflow-x"),i=t.isWindow?"":t.element.css("overflow-y"),n=e==="scroll"||e==="auto"&&t.width<t.element[0].scrollWidth,s=i==="scroll"||i==="auto"&&t.height<t.element[0].scrollHeight
return{width:n?$.position.scrollbarWidth():0,height:s?$.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=$(t||window),i=$.isWindow(e[0])
return{element:e,isWindow:i,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:i?e.width():e.outerWidth(),height:i?e.height():e.outerHeight()}}}
$.fn.position=function(t){if(!t||!t.of){return c.apply(this,arguments)}t=$.extend({},t)
var e,h,p,m,g,v,y=$(t.of),b=$.position.getWithinInfo(t.within),w=$.position.getScrollInfo(b),x=(t.collision||"flip").split(" "),C={}
v=d(y)
if(y[0].preventDefault){t.at="left top"}h=v.width
p=v.height
m=v.offset
g=$.extend({},m)
$.each(["my","at"],function(){var e=(t[this]||"").split(" "),i,n
if(e.length===1){e=r.test(e[0])?e.concat(["center"]):o.test(e[0])?["center"].concat(e):["center","center"]}e[0]=r.test(e[0])?e[0]:"center"
e[1]=o.test(e[1])?e[1]:"center"
i=a.exec(e[0])
n=a.exec(e[1])
C[this]=[i?i[0]:0,n?n[0]:0]
t[this]=[l.exec(e[0])[0],l.exec(e[1])[0]]})
if(x.length===1){x[1]=x[0]}if(t.at[0]==="right"){g.left+=h}else if(t.at[0]==="center"){g.left+=h/2}if(t.at[1]==="bottom"){g.top+=p}else if(t.at[1]==="center"){g.top+=p/2}e=u(C.at,h,p)
g.left+=e[0]
g.top+=e[1]
return this.each(function(){var r,o,a=$(this),l=a.outerWidth(),c=a.outerHeight(),d=f(this,"marginLeft"),v=f(this,"marginTop"),k=l+d+f(this,"marginRight")+w.width,T=c+v+f(this,"marginBottom")+w.height,S=$.extend({},g),D=u(C.my,a.outerWidth(),a.outerHeight())
if(t.my[0]==="right"){S.left-=l}else if(t.my[0]==="center"){S.left-=l/2}if(t.my[1]==="bottom"){S.top-=c}else if(t.my[1]==="center"){S.top-=c/2}S.left+=D[0]
S.top+=D[1]
if(!$.support.offsetFractions){S.left=s(S.left)
S.top=s(S.top)}r={marginLeft:d,marginTop:v}
$.each(["left","top"],function(i,n){if($.ui.position[x[i]]){$.ui.position[x[i]][n](S,{targetWidth:h,targetHeight:p,elemWidth:l,elemHeight:c,collisionPosition:r,collisionWidth:k,collisionHeight:T,offset:[e[0]+D[0],e[1]+D[1]],my:t.my,at:t.at,within:b,elem:a})}})
if(t.using){o=function(e){var s=m.left-S.left,r=s+h-l,o=m.top-S.top,u=o+p-c,f={target:{element:y,left:m.left,top:m.top,width:h,height:p},element:{element:a,left:S.left,top:S.top,width:l,height:c},horizontal:r<0?"left":s>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"}
if(h<l&&n(s+r)<h){f.horizontal="center"}if(p<c&&n(o+u)<p){f.vertical="middle"}if(i(n(s),n(r))>i(n(o),n(u))){f.important="horizontal"}else{f.important="vertical"}t.using.call(this,e,f)}}a.offset($.extend(S,{using:o}))})}
$.ui.position={fit:{left:function(t,e){var n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,r=n.width,o=t.left-e.collisionPosition.marginLeft,a=s-o,l=o+e.collisionWidth-r-s,h
if(e.collisionWidth>r){if(a>0&&l<=0){h=t.left+a+e.collisionWidth-r-s
t.left+=a-h}else if(l>0&&a<=0){t.left=s}else{if(a>l){t.left=s+r-e.collisionWidth}else{t.left=s}}}else if(a>0){t.left+=a}else if(l>0){t.left-=l}else{t.left=i(t.left-o,t.left)}},top:function(t,e){var n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,r=e.within.height,o=t.top-e.collisionPosition.marginTop,a=s-o,l=o+e.collisionHeight-r-s,h
if(e.collisionHeight>r){if(a>0&&l<=0){h=t.top+a+e.collisionHeight-r-s
t.top+=a-h}else if(l>0&&a<=0){t.top=s}else{if(a>l){t.top=s+r-e.collisionHeight}else{t.top=s}}}else if(a>0){t.top+=a}else if(l>0){t.top-=l}else{t.top=i(t.top-o,t.top)}}},flip:{left:function(t,e){var i=e.within,s=i.offset.left+i.scrollLeft,r=i.width,o=i.isWindow?i.scrollLeft:i.offset.left,a=t.left-e.collisionPosition.marginLeft,l=a-o,h=a+e.collisionWidth-r-o,c=e.my[0]==="left"?-e.elemWidth:e.my[0]==="right"?e.elemWidth:0,u=e.at[0]==="left"?e.targetWidth:e.at[0]==="right"?-e.targetWidth:0,f=-2*e.offset[0],d,p
if(l<0){d=t.left+c+u+f+e.collisionWidth-r-s
if(d<0||d<n(l)){t.left+=c+u+f}}else if(h>0){p=t.left-e.collisionPosition.marginLeft+c+u+f-o
if(p>0||n(p)<h){t.left+=c+u+f}}},top:function(t,e){var i=e.within,s=i.offset.top+i.scrollTop,r=i.height,o=i.isWindow?i.scrollTop:i.offset.top,a=t.top-e.collisionPosition.marginTop,l=a-o,h=a+e.collisionHeight-r-o,c=e.my[1]==="top",u=c?-e.elemHeight:e.my[1]==="bottom"?e.elemHeight:0,f=e.at[1]==="top"?e.targetHeight:e.at[1]==="bottom"?-e.targetHeight:0,d=-2*e.offset[1],p,m
if(l<0){m=t.top+u+f+d+e.collisionHeight-r-s
if(t.top+u+f+d>l&&(m<0||m<n(l))){t.top+=u+f+d}}else if(h>0){p=t.top-e.collisionPosition.marginTop+u+f+d-o
if(t.top+u+f+d>h&&(p>0||n(p)<h)){t.top+=u+f+d}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments)
$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments)
$.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,e,i,n,s,r=document.getElementsByTagName("body")[0],o=document.createElement("div")
t=document.createElement(r?"div":"body")
i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"}
if(r){$.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"})}for(s in i){t.style[s]=i[s]}t.appendChild(o)
e=r||document.documentElement
e.insertBefore(t,e.firstChild)
o.style.cssText="position: absolute; left: 10.7432222px;"
n=$(o).offset().left
$.support.offsetFractions=n>10&&n<11
t.innerHTML=""
e.removeChild(t)})()})(jQuery);(function($,t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}$.widget("ui.resizable",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,e,i,n,s,r=this,o=this.options
this.element.addClass("ui-resizable")
$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null})
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}))
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"))
this.elementIsWrapper=true
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")})
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0})
this.originalResizeStyle=this.originalElement.css("resize")
this.originalElement.css("resize","none")
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}))
this.originalElement.css({margin:this.originalElement.css("margin")})
this._proportionallyResize()}this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"})
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}t=this.handles.split(",")
this.handles={}
for(e=0;e<t.length;e++){i=$.trim(t[e])
s="ui-resizable-"+i
n=$("<div class='ui-resizable-handle "+s+"'></div>")
n.css({zIndex:o.zIndex})
if("se"===i){n.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[i]=".ui-resizable-"+i
this.element.append(n)}}this._renderAxis=function(t){var e,i,n,s
t=t||this.element
for(e in this.handles){if(this.handles[e].constructor===String){this.handles[e]=$(this.handles[e],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){i=$(this.handles[e],this.element)
s=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth()
n=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join("")
t.css(n,s)
this._proportionallyResize()}if(!$(this.handles[e]).length){continue}}}
this._renderAxis(this.element)
this._handles=$(".ui-resizable-handle",this.element).disableSelection()
this._handles.mouseover(function(){if(!r.resizing){if(this.className){n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}r.axis=n&&n[1]?n[1]:"se"}})
if(o.autoHide){this._handles.hide()
$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled){return}$(this).removeClass("ui-resizable-autohide")
r._handles.show()}).mouseleave(function(){if(o.disabled){return}if(!r.resizing){$(this).addClass("ui-resizable-autohide")
r._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy()
var t,e=function(t){$(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}
if(this.elementIsWrapper){e(this.element)
t=this.element
this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t)
t.remove()}this.originalElement.css("resize",this.originalResizeStyle)
e(this.originalElement)
return this},_mouseCapture:function(t){var e,i,n=false
for(e in this.handles){i=$(this.handles[e])[0]
if(i===t.target||$.contains(i,t.target)){n=true}}return!this.options.disabled&&n},_mouseStart:function(t){var i,n,s,r=this.options,o=this.element.position(),a=this.element
this.resizing=true
if(/absolute/.test(a.css("position"))){a.css({position:"absolute",top:a.css("top"),left:a.css("left")})}else if(a.is(".ui-draggable")){a.css({position:"absolute",top:o.top,left:o.left})}this._renderProxy()
i=e(this.helper.css("left"))
n=e(this.helper.css("top"))
if(r.containment){i+=$(r.containment).scrollLeft()||0
n+=$(r.containment).scrollTop()||0}this.offset=this.helper.offset()
this.position={left:i,top:n}
this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()}
this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()}
this.originalPosition={left:i,top:n}
this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()}
this.originalMousePosition={left:t.pageX,top:t.pageY}
this.aspectRatio=typeof r.aspectRatio==="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1
s=$(".ui-resizable-"+this.axis).css("cursor")
$("body").css("cursor",s==="auto"?this.axis+"-resize":s)
a.addClass("ui-resizable-resizing")
this._propagate("start",t)
return true},_mouseDrag:function(t){var e,i=this.helper,n={},s=this.originalMousePosition,r=this.axis,o=this.position.top,a=this.position.left,l=this.size.width,h=this.size.height,c=t.pageX-s.left||0,u=t.pageY-s.top||0,f=this._change[r]
if(!f){return false}e=f.apply(this,[t,c,u])
this._updateVirtualBoundaries(t.shiftKey)
if(this._aspectRatio||t.shiftKey){e=this._updateRatio(e,t)}e=this._respectSize(e,t)
this._updateCache(e)
this._propagate("resize",t)
if(this.position.top!==o){n.top=this.position.top+"px"}if(this.position.left!==a){n.left=this.position.left+"px"}if(this.size.width!==l){n.width=this.size.width+"px"}if(this.size.height!==h){n.height=this.size.height+"px"}i.css(n)
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!$.isEmptyObject(n)){this._trigger("resize",t,this.ui())}return false},_mouseStop:function(t){this.resizing=false
var e,i,n,s,r,o,a,l=this.options,h=this
if(this._helper){e=this._proportionallyResizeElements
i=e.length&&/textarea/i.test(e[0].nodeName)
n=i&&$.ui.hasScroll(e[0],"left")?0:h.sizeDiff.height
s=i?0:h.sizeDiff.width
r={width:h.helper.width()-s,height:h.helper.height()-n}
o=parseInt(h.element.css("left"),10)+(h.position.left-h.originalPosition.left)||null
a=parseInt(h.element.css("top"),10)+(h.position.top-h.originalPosition.top)||null
if(!l.animate){this.element.css($.extend(r,{top:a,left:o}))}h.helper.height(h.size.height)
h.helper.width(h.size.width)
if(this._helper&&!l.animate){this._proportionallyResize()}}$("body").css("cursor","auto")
this.element.removeClass("ui-resizable-resizing")
this._propagate("stop",t)
if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(t){var e,n,s,r,o,a=this.options
o={minWidth:i(a.minWidth)?a.minWidth:0,maxWidth:i(a.maxWidth)?a.maxWidth:Infinity,minHeight:i(a.minHeight)?a.minHeight:0,maxHeight:i(a.maxHeight)?a.maxHeight:Infinity}
if(this._aspectRatio||t){e=o.minHeight*this.aspectRatio
s=o.minWidth/this.aspectRatio
n=o.maxHeight*this.aspectRatio
r=o.maxWidth/this.aspectRatio
if(e>o.minWidth){o.minWidth=e}if(s>o.minHeight){o.minHeight=s}if(n<o.maxWidth){o.maxWidth=n}if(r<o.maxHeight){o.maxHeight=r}}this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset()
if(i(t.left)){this.position.left=t.left}if(i(t.top)){this.position.top=t.top}if(i(t.height)){this.size.height=t.height}if(i(t.width)){this.size.width=t.width}},_updateRatio:function(t){var e=this.position,n=this.size,s=this.axis
if(i(t.height)){t.width=t.height*this.aspectRatio}else if(i(t.width)){t.height=t.width/this.aspectRatio}if(s==="sw"){t.left=e.left+(n.width-t.width)
t.top=null}if(s==="nw"){t.top=e.top+(n.height-t.height)
t.left=e.left+(n.width-t.width)}return t},_respectSize:function(t){var e=this._vBoundaries,n=this.axis,s=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,r=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=i(t.width)&&e.minWidth&&e.minWidth>t.width,a=i(t.height)&&e.minHeight&&e.minHeight>t.height,l=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,c=/sw|nw|w/.test(n),u=/nw|ne|n/.test(n)
if(o){t.width=e.minWidth}if(a){t.height=e.minHeight}if(s){t.width=e.maxWidth}if(r){t.height=e.maxHeight}if(o&&c){t.left=l-e.minWidth}if(s&&c){t.left=l-e.maxWidth}if(a&&u){t.top=h-e.minHeight}if(r&&u){t.top=h-e.maxHeight}if(!t.width&&!t.height&&!t.left&&t.top){t.top=null}else if(!t.width&&!t.height&&!t.top&&t.left){t.left=null}return t},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var t,e,i,n,s,r=this.helper||this.element
for(t=0;t<this._proportionallyResizeElements.length;t++){s=this._proportionallyResizeElements[t]
if(!this.borderDif){this.borderDif=[]
i=[s.css("borderTopWidth"),s.css("borderRightWidth"),s.css("borderBottomWidth"),s.css("borderLeftWidth")]
n=[s.css("paddingTop"),s.css("paddingRight"),s.css("paddingBottom"),s.css("paddingLeft")]
for(e=0;e<i.length;e++){this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(n[e],10)||0)}}s.css({height:r.height()-this.borderDif[0]-this.borderDif[2]||0,width:r.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,e=this.options
this.elementOffset=t.offset()
if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>")
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex})
this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,n=this.originalPosition
return{left:n.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize,s=this.originalPosition
return{top:s.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){$.ui.plugin.call(this,t,[e,this.ui()])
t!=="resize"&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}})
$.ui.plugin.add("resizable","animate",{stop:function(t){var e=$(this).data("ui-resizable"),i=e.options,n=e._proportionallyResizeElements,s=n.length&&/textarea/i.test(n[0].nodeName),r=s&&$.ui.hasScroll(n[0],"left")?0:e.sizeDiff.height,o=s?0:e.sizeDiff.width,a={width:e.size.width-o,height:e.size.height-r},l=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null,h=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null
e.element.animate($.extend(a,h&&l?{top:h,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var i={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)}
if(n&&n.length){$(n[0]).css({width:i.width,height:i.height})}e._updateCache(i)
e._propagate("resize",t)}})}})
$.ui.plugin.add("resizable","containment",{start:function(){var t,i,n,s,r,o,a,l=$(this).data("ui-resizable"),h=l.options,c=l.element,u=h.containment,f=u instanceof $?u.get(0):/parent/.test(u)?c.parent().get(0):u
if(!f){return}l.containerElement=$(f)
if(/document/.test(u)||u===document){l.containerOffset={left:0,top:0}
l.containerPosition={left:0,top:0}
l.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}}else{t=$(f)
i=[]
$(["Top","Right","Left","Bottom"]).each(function(n,s){i[n]=e(t.css("padding"+s))})
l.containerOffset=t.offset()
l.containerPosition=t.position()
l.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]}
n=l.containerOffset
s=l.containerSize.height
r=l.containerSize.width
o=$.ui.hasScroll(f,"left")?f.scrollWidth:r
a=$.ui.hasScroll(f)?f.scrollHeight:s
l.parentData={element:f,left:n.left,top:n.top,width:o,height:a}}},resize:function(t){var e,i,n,s,r=$(this).data("ui-resizable"),o=r.options,a=r.containerOffset,l=r.position,h=r._aspectRatio||t.shiftKey,c={top:0,left:0},u=r.containerElement
if(u[0]!==document&&/static/.test(u.css("position"))){c=a}if(l.left<(r._helper?a.left:0)){r.size.width=r.size.width+(r._helper?r.position.left-a.left:r.position.left-c.left)
if(h){r.size.height=r.size.width/r.aspectRatio}r.position.left=o.helper?a.left:0}if(l.top<(r._helper?a.top:0)){r.size.height=r.size.height+(r._helper?r.position.top-a.top:r.position.top)
if(h){r.size.width=r.size.height*r.aspectRatio}r.position.top=r._helper?a.top:0}r.offset.left=r.parentData.left+r.position.left
r.offset.top=r.parentData.top+r.position.top
e=Math.abs((r._helper?r.offset.left-c.left:r.offset.left-c.left)+r.sizeDiff.width)
i=Math.abs((r._helper?r.offset.top-c.top:r.offset.top-a.top)+r.sizeDiff.height)
n=r.containerElement.get(0)===r.element.parent().get(0)
s=/relative|absolute/.test(r.containerElement.css("position"))
if(n&&s){e-=r.parentData.left}if(e+r.size.width>=r.parentData.width){r.size.width=r.parentData.width-e
if(h){r.size.height=r.size.width/r.aspectRatio}}if(i+r.size.height>=r.parentData.height){r.size.height=r.parentData.height-i
if(h){r.size.width=r.size.height*r.aspectRatio}}},stop:function(){var t=$(this).data("ui-resizable"),e=t.options,i=t.containerOffset,n=t.containerPosition,s=t.containerElement,r=$(t.helper),o=r.offset(),a=r.outerWidth()-t.sizeDiff.width,l=r.outerHeight()-t.sizeDiff.height
if(t._helper&&!e.animate&&/relative/.test(s.css("position"))){$(this).css({left:o.left-n.left-i.left,width:a,height:l})}if(t._helper&&!e.animate&&/static/.test(s.css("position"))){$(this).css({left:o.left-n.left-i.left,width:a,height:l})}}})
$.ui.plugin.add("resizable","alsoResize",{start:function(){var t=$(this).data("ui-resizable"),e=t.options,i=function(t){$(t).each(function(){var t=$(this)
t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})}
if(typeof e.alsoResize==="object"&&!e.alsoResize.parentNode){if(e.alsoResize.length){e.alsoResize=e.alsoResize[0]
i(e.alsoResize)}else{$.each(e.alsoResize,function(t){i(t)})}}else{i(e.alsoResize)}},resize:function(t,e){var i=$(this).data("ui-resizable"),n=i.options,s=i.originalSize,r=i.originalPosition,o={height:i.size.height-s.height||0,width:i.size.width-s.width||0,top:i.position.top-r.top||0,left:i.position.left-r.left||0},a=function(t,i){$(t).each(function(){var t=$(this),n=$(this).data("ui-resizable-alsoresize"),s={},r=i&&i.length?i:t.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"]
$.each(r,function(t,e){var i=(n[e]||0)+(o[e]||0)
if(i&&i>=0){s[e]=i||null}})
t.css(s)})}
if(typeof n.alsoResize==="object"&&!n.alsoResize.nodeType){$.each(n.alsoResize,function(t,e){a(t,e)})}else{a(n.alsoResize)}},stop:function(){$(this).removeData("resizable-alsoresize")}})
$.ui.plugin.add("resizable","ghost",{start:function(){var t=$(this).data("ui-resizable"),e=t.options,i=t.size
t.ghost=t.originalElement.clone()
t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost==="string"?e.ghost:"")
t.ghost.appendTo(t.helper)},resize:function(){var t=$(this).data("ui-resizable")
if(t.ghost){t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})}},stop:function(){var t=$(this).data("ui-resizable")
if(t.ghost&&t.helper){t.helper.get(0).removeChild(t.ghost.get(0))}}})
$.ui.plugin.add("resizable","grid",{resize:function(){var t=$(this).data("ui-resizable"),e=t.options,i=t.size,n=t.originalSize,s=t.originalPosition,r=t.axis,o=typeof e.grid==="number"?[e.grid,e.grid]:e.grid,a=o[0]||1,l=o[1]||1,h=Math.round((i.width-n.width)/a)*a,c=Math.round((i.height-n.height)/l)*l,u=n.width+h,f=n.height+c,d=e.maxWidth&&e.maxWidth<u,p=e.maxHeight&&e.maxHeight<f,m=e.minWidth&&e.minWidth>u,g=e.minHeight&&e.minHeight>f
e.grid=o
if(m){u=u+a}if(g){f=f+l}if(d){u=u-a}if(p){f=f-l}if(/^(se|s|e)$/.test(r)){t.size.width=u
t.size.height=f}else if(/^(ne)$/.test(r)){t.size.width=u
t.size.height=f
t.position.top=s.top-c}else if(/^(sw)$/.test(r)){t.size.width=u
t.size.height=f
t.position.left=s.left-h}else{t.size.width=u
t.size.height=f
t.position.top=s.top-c
t.position.left=s.left-h}}})})(jQuery);(function($,t){$.widget("ui.selectable",$.ui.mouse,{version:"1.10.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,e=this
this.element.addClass("ui-selectable")
this.dragged=false
this.refresh=function(){t=$(e.options.filter,e.element[0])
t.addClass("ui-selectee")
t.each(function(){var t=$(this),e=t.offset()
$.data(this,"selectable-item",{element:this,$element:t,left:e.left,top:e.top,right:e.left+t.outerWidth(),bottom:e.top+t.outerHeight(),startselected:false,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})}
this.refresh()
this.selectees=t.addClass("ui-selectee")
this._mouseInit()
this.helper=$("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item")
this.element.removeClass("ui-selectable ui-selectable-disabled")
this._mouseDestroy()},_mouseStart:function(t){var e=this,i=this.options
this.opos=[t.pageX,t.pageY]
if(this.options.disabled){return}this.selectees=$(i.filter,this.element[0])
this._trigger("start",t)
$(i.appendTo).append(this.helper)
this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0})
if(i.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var i=$.data(this,"selectable-item")
i.startselected=true
if(!t.metaKey&&!t.ctrlKey){i.$element.removeClass("ui-selected")
i.selected=false
i.$element.addClass("ui-unselecting")
i.unselecting=true
e._trigger("unselecting",t,{unselecting:i.element})}})
$(t.target).parents().addBack().each(function(){var i,n=$.data(this,"selectable-item")
if(n){i=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected")
n.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting")
n.unselecting=!i
n.selecting=i
n.selected=i
if(i){e._trigger("selecting",t,{selecting:n.element})}else{e._trigger("unselecting",t,{unselecting:n.element})}return false}})},_mouseDrag:function(t){this.dragged=true
if(this.options.disabled){return}var e,i=this,n=this.options,s=this.opos[0],r=this.opos[1],o=t.pageX,a=t.pageY
if(s>o){e=o
o=s
s=e}if(r>a){e=a
a=r
r=e}this.helper.css({left:s,top:r,width:o-s,height:a-r})
this.selectees.each(function(){var e=$.data(this,"selectable-item"),l=false
if(!e||e.element===i.element[0]){return}if(n.tolerance==="touch"){l=!(e.left>o||e.right<s||e.top>a||e.bottom<r)}else if(n.tolerance==="fit"){l=e.left>s&&e.right<o&&e.top>r&&e.bottom<a}if(l){if(e.selected){e.$element.removeClass("ui-selected")
e.selected=false}if(e.unselecting){e.$element.removeClass("ui-unselecting")
e.unselecting=false}if(!e.selecting){e.$element.addClass("ui-selecting")
e.selecting=true
i._trigger("selecting",t,{selecting:e.element})}}else{if(e.selecting){if((t.metaKey||t.ctrlKey)&&e.startselected){e.$element.removeClass("ui-selecting")
e.selecting=false
e.$element.addClass("ui-selected")
e.selected=true}else{e.$element.removeClass("ui-selecting")
e.selecting=false
if(e.startselected){e.$element.addClass("ui-unselecting")
e.unselecting=true}i._trigger("unselecting",t,{unselecting:e.element})}}if(e.selected){if(!t.metaKey&&!t.ctrlKey&&!e.startselected){e.$element.removeClass("ui-selected")
e.selected=false
e.$element.addClass("ui-unselecting")
e.unselecting=true
i._trigger("unselecting",t,{unselecting:e.element})}}}})
return false},_mouseStop:function(t){var e=this
this.dragged=false
$(".ui-unselecting",this.element[0]).each(function(){var i=$.data(this,"selectable-item")
i.$element.removeClass("ui-unselecting")
i.unselecting=false
i.startselected=false
e._trigger("unselected",t,{unselected:i.element})})
$(".ui-selecting",this.element[0]).each(function(){var i=$.data(this,"selectable-item")
i.$element.removeClass("ui-selecting").addClass("ui-selected")
i.selecting=false
i.selected=true
i.startselected=true
e._trigger("selected",t,{selected:i.element})})
this._trigger("stop",t)
this.helper.remove()
return false}})})(jQuery);(function($,t){var e=5
$.widget("ui.slider",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false
this._mouseSliding=false
this._animateOff=true
this._handleIndex=null
this._detectOrientation()
this._mouseInit()
this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._refresh()
this._setOption("disabled",this.options.disabled)
this._animateOff=false},_refresh:function(){this._createRange()
this._createHandles()
this._setupEvents()
this._refreshValue()},_createHandles:function(){var t,e,i=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",r=[]
e=i.values&&i.values.length||1
if(n.length>e){n.slice(e).remove()
n=n.slice(0,e)}for(t=n.length;t<e;t++){r.push(s)}this.handles=n.add($(r.join("")).appendTo(this.element))
this.handle=this.handles.eq(0)
this.handles.each(function(t){$(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,e=""
if(t.range){if(t.range===true){if(!t.values){t.values=[this._valueMin(),this._valueMin()]}else if(t.values.length&&t.values.length!==2){t.values=[t.values[0],t.values[0]]}else if($.isArray(t.values)){t.values=t.values.slice(0)}}if(!this.range||!this.range.length){this.range=$("<div></div>").appendTo(this.element)
e="ui-slider-range"+" ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(e+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))}else{this.range=$([])}},_setupEvents:function(){var t=this.handles.add(this.range).filter("a")
this._off(t)
this._on(t,this._handleEvents)
this._hoverable(t)
this._focusable(t)},_destroy:function(){this.handles.remove()
this.range.remove()
this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._mouseDestroy()},_mouseCapture:function(t){var e,i,n,s,r,o,a,l,h=this,c=this.options
if(c.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()}
this.elementOffset=this.element.offset()
e={x:t.pageX,y:t.pageY}
i=this._normValueFromMouse(e)
n=this._valueMax()-this._valueMin()+1
this.handles.each(function(t){var e=Math.abs(i-h.values(t))
if(n>e||n===e&&(t===h._lastChangedValue||h.values(t)===c.min)){n=e
s=$(this)
r=t}})
o=this._start(t,r)
if(o===false){return false}this._mouseSliding=true
this._handleIndex=r
s.addClass("ui-state-active").focus()
a=s.offset()
l=!$(t.target).parents().addBack().is(".ui-slider-handle")
this._clickOffset=l?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)}
if(!this.handles.hasClass("ui-state-hover")){this._slide(t,r,i)}this._animateOff=true
return true},_mouseStart:function(){return true},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e)
this._slide(t,this._handleIndex,i)
return false},_mouseStop:function(t){this.handles.removeClass("ui-state-active")
this._mouseSliding=false
this._stop(t,this._handleIndex)
this._change(t,this._handleIndex)
this._handleIndex=null
this._clickOffset=null
this._animateOff=false
return false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,r
if(this.orientation==="horizontal"){e=this.elementSize.width
i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{e=this.elementSize.height
i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}n=i/e
if(n>1){n=1}if(n<0){n=0}if(this.orientation==="vertical"){n=1-n}s=this._valueMax()-this._valueMin()
r=this._valueMin()+n*s
return this._trimAlignValue(r)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()}
if(this.options.values&&this.options.values.length){i.value=this.values(e)
i.values=this.values()}return this._trigger("start",t,i)},_slide:function(t,e,i){var n,s,r
if(this.options.values&&this.options.values.length){n=this.values(e?0:1)
if(this.options.values.length===2&&this.options.range===true&&(e===0&&i>n||e===1&&i<n)){i=n}if(i!==this.values(e)){s=this.values()
s[e]=i
r=this._trigger("slide",t,{handle:this.handles[e],value:i,values:s})
n=this.values(e?0:1)
if(r!==false){this.values(e,i,true)}}}else{if(i!==this.value()){r=this._trigger("slide",t,{handle:this.handles[e],value:i})
if(r!==false){this.value(i)}}}},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()}
if(this.options.values&&this.options.values.length){i.value=this.values(e)
i.values=this.values()}this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()}
if(this.options.values&&this.options.values.length){i.value=this.values(e)
i.values=this.values()}this._lastChangedValue=e
this._trigger("change",t,i)}},value:function(t){if(arguments.length){this.options.value=this._trimAlignValue(t)
this._refreshValue()
this._change(null,0)
return}return this._value()},values:function(t,e){var i,n,s
if(arguments.length>1){this.options.values[t]=this._trimAlignValue(e)
this._refreshValue()
this._change(null,t)
return}if(arguments.length){if($.isArray(arguments[0])){i=this.options.values
n=arguments[0]
for(s=0;s<i.length;s+=1){i[s]=this._trimAlignValue(n[s])
this._change(null,s)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(t)}else{return this.value()}}}else{return this._values()}},_setOption:function(t,e){var i,n=0
if(t==="range"&&this.options.range===true){if(e==="min"){this.options.value=this._values(0)
this.options.values=null}else if(e==="max"){this.options.value=this._values(this.options.values.length-1)
this.options.values=null}}if($.isArray(this.options.values)){n=this.options.values.length}$.Widget.prototype._setOption.apply(this,arguments)
switch(t){case"orientation":this._detectOrientation()
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation)
this._refreshValue()
break
case"value":this._animateOff=true
this._refreshValue()
this._change(null,0)
this._animateOff=false
break
case"values":this._animateOff=true
this._refreshValue()
for(i=0;i<n;i+=1){this._change(null,i)}this._animateOff=false
break
case"min":case"max":this._animateOff=true
this._refreshValue()
this._animateOff=false
break
case"range":this._animateOff=true
this._refresh()
this._animateOff=false
break}},_value:function(){var t=this.options.value
t=this._trimAlignValue(t)
return t},_values:function(t){var e,i,n
if(arguments.length){e=this.options.values[t]
e=this._trimAlignValue(e)
return e}else if(this.options.values&&this.options.values.length){i=this.options.values.slice()
for(n=0;n<i.length;n+=1){i[n]=this._trimAlignValue(i[n])}return i}else{return[]}},_trimAlignValue:function(t){if(t<=this._valueMin()){return this._valueMin()}if(t>=this._valueMax()){return this._valueMax()}var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i
if(Math.abs(i)*2>=e){n+=i>0?e:-e}return parseFloat(n.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,e,i,n,s,r=this.options.range,o=this.options,a=this,l=!this._animateOff?o.animate:false,h={}
if(this.options.values&&this.options.values.length){this.handles.each(function(i){e=(a.values(i)-a._valueMin())/(a._valueMax()-a._valueMin())*100
h[a.orientation==="horizontal"?"left":"bottom"]=e+"%"
$(this).stop(1,1)[l?"animate":"css"](h,o.animate)
if(a.options.range===true){if(a.orientation==="horizontal"){if(i===0){a.range.stop(1,1)[l?"animate":"css"]({left:e+"%"},o.animate)}if(i===1){a.range[l?"animate":"css"]({width:e-t+"%"},{queue:false,duration:o.animate})}}else{if(i===0){a.range.stop(1,1)[l?"animate":"css"]({bottom:e+"%"},o.animate)}if(i===1){a.range[l?"animate":"css"]({height:e-t+"%"},{queue:false,duration:o.animate})}}}t=e})}else{i=this.value()
n=this._valueMin()
s=this._valueMax()
e=s!==n?(i-n)/(s-n)*100:0
h[this.orientation==="horizontal"?"left":"bottom"]=e+"%"
this.handle.stop(1,1)[l?"animate":"css"](h,o.animate)
if(r==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[l?"animate":"css"]({width:e+"%"},o.animate)}if(r==="max"&&this.orientation==="horizontal"){this.range[l?"animate":"css"]({width:100-e+"%"},{queue:false,duration:o.animate})}if(r==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[l?"animate":"css"]({height:e+"%"},o.animate)}if(r==="max"&&this.orientation==="vertical"){this.range[l?"animate":"css"]({height:100-e+"%"},{queue:false,duration:o.animate})}}},_handleEvents:{keydown:function(t){var i,n,s,r,o=$(t.target).data("ui-slider-handle-index")
switch(t.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:t.preventDefault()
if(!this._keySliding){this._keySliding=true
$(t.target).addClass("ui-state-active")
i=this._start(t,o)
if(i===false){return}}break}r=this.options.step
if(this.options.values&&this.options.values.length){n=s=this.values(o)}else{n=s=this.value()}switch(t.keyCode){case $.ui.keyCode.HOME:s=this._valueMin()
break
case $.ui.keyCode.END:s=this._valueMax()
break
case $.ui.keyCode.PAGE_UP:s=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e)
break
case $.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e)
break
case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(n===this._valueMax()){return}s=this._trimAlignValue(n+r)
break
case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(n===this._valueMin()){return}s=this._trimAlignValue(n-r)
break}this._slide(t,o,s)},click:function(t){t.preventDefault()},keyup:function(t){var e=$(t.target).data("ui-slider-handle-index")
if(this._keySliding){this._keySliding=false
this._stop(t,e)
this._change(t,e)
$(t.target).removeClass("ui-state-active")}}}})})(jQuery);(function($,t){function e(t,e,i){return t>e&&t<e+i}$.widget("ui.sortable",$.ui.mouse,{version:"1.10.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options
this.containerCache={}
this.element.addClass("ui-sortable")
this.refresh()
this.floating=this.items.length?t.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false
this.offset=this.element.offset()
this._mouseInit()
this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled")
this._mouseDestroy()
for(var t=this.items.length-1;t>=0;t--){this.items[t].item.removeData(this.widgetName+"-item")}return this},_setOption:function(t,e){if(t==="disabled"){this.options[t]=e
this.widget().toggleClass("ui-sortable-disabled",!!e)}else{$.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(t,e){var i=null,n=false,s=this
if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(t)
$(t.target).parents().each(function(){if($.data(this,s.widgetName+"-item")===s){i=$(this)
return false}})
if($.data(t.target,s.widgetName+"-item")===s){i=$(t.target)}if(!i){return false}if(this.options.handle&&!e){$(this.options.handle,i).find("*").addBack().each(function(){if(this===t.target){n=true}})
if(!n){return false}}this.currentItem=i
this._removeCurrentsFromItems()
return true},_mouseStart:function(t,e,i){var n,s=this.options
this.currentContainer=this
this.refreshPositions()
this.helper=this._createHelper(t)
this._cacheHelperProportions()
this._cacheMargins()
this.scrollParent=this.helper.scrollParent()
this.offset=this.currentItem.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
$.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.helper.css("position","absolute")
this.cssPosition=this.helper.css("position")
this.originalPosition=this._generatePosition(t)
this.originalPageX=t.pageX
this.originalPageY=t.pageY
s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt)
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder()
if(s.containment){this._setContainment()}if(s.cursor){if($("body").css("cursor")){this._storedCursor=$("body").css("cursor")}$("body").css("cursor",s.cursor)}if(s.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",s.opacity)}if(s.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",s.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",t,this._uiHash())
if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!i){for(n=this.containers.length-1;n>=0;n--){this.containers[n]._trigger("activate",t,this._uiHash(this))}}if($.ui.ddmanager){$.ui.ddmanager.current=this}if($.ui.ddmanager&&!s.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,t)}this.dragging=true
this.helper.addClass("ui-sortable-helper")
this._mouseDrag(t)
return true},_mouseDrag:function(t){var e,i,n,s,r=this.options,o=false
this.position=this._generatePosition(t)
this.positionAbs=this._convertPositionTo("absolute")
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+r.scrollSpeed}else if(t.pageY-this.overflowOffset.top<r.scrollSensitivity){this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-r.scrollSpeed}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+r.scrollSpeed}else if(t.pageX-this.overflowOffset.left<r.scrollSensitivity){this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-r.scrollSpeed}}else{if(t.pageY-$(document).scrollTop()<r.scrollSensitivity){o=$(document).scrollTop($(document).scrollTop()-r.scrollSpeed)}else if($(window).height()-(t.pageY-$(document).scrollTop())<r.scrollSensitivity){o=$(document).scrollTop($(document).scrollTop()+r.scrollSpeed)}if(t.pageX-$(document).scrollLeft()<r.scrollSensitivity){o=$(document).scrollLeft($(document).scrollLeft()-r.scrollSpeed)}else if($(window).width()-(t.pageX-$(document).scrollLeft())<r.scrollSensitivity){o=$(document).scrollLeft($(document).scrollLeft()+r.scrollSpeed)}}if(o!==false&&$.ui.ddmanager&&!r.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,t)}}this.positionAbs=this._convertPositionTo("absolute")
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(e=this.items.length-1;e>=0;e--){i=this.items[e]
n=i.item[0]
s=this._intersectsWithPointer(i)
if(!s){continue}if(i.instance!==this.currentContainer){continue}if(n!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==n&&!$.contains(this.placeholder[0],n)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],n):true)){this.direction=s===1?"down":"up"
if(this.options.tolerance==="pointer"||this._intersectsWithSides(i)){this._rearrange(t,i)}else{break}this._trigger("change",t,this._uiHash())
break}}this._contactContainers(t)
if($.ui.ddmanager){$.ui.ddmanager.drag(this,t)}this._trigger("sort",t,this._uiHash())
this.lastPositionAbs=this.positionAbs
return false},_mouseStop:function(t,e){if(!t){return}if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,t)}if(this.options.revert){var i=this,n=this.placeholder.offset()
this.reverting=true
$(this.helper).animate({left:n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else{this._clear(t,e)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null})
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var t=this.containers.length-1;t>=0;t--){this.containers[t]._trigger("deactivate",null,this._uiHash(this))
if(this.containers[t].containerCache.over){this.containers[t]._trigger("out",null,this._uiHash(this))
this.containers[t].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null})
if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem)}else{$(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[]
t=t||{}
$(e).each(function(){var e=($(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/)
if(e){i.push((t.key||e[1]+"[]")+"="+(t.key&&t.expression?e[1]:e[2]))}})
if(!i.length&&t.key){i.push(t.key+"=")}return i.join("&")},toArray:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[]
t=t||{}
e.each(function(){i.push($(t.item||this).attr(t.attribute||"id")||"")})
return i},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,r=t.left,o=r+t.width,a=t.top,l=a+t.height,h=this.offset.click.top,c=this.offset.click.left,u=n+h>a&&n+h<l&&e+c>r&&e+c<o
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]){return u}else{return r<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<o&&a<n+this.helperProportions.height/2&&s-this.helperProportions.height/2<l}},_intersectsWithPointer:function(t){var i=this.options.axis==="x"||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),n=this.options.axis==="y"||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),s=i&&n,r=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection()
if(!s){return false}return this.floating?o&&o==="right"||r==="down"?2:1:r&&(r==="down"?2:1)},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),n=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
if(this.floating&&r){return r==="right"&&n||r==="left"&&!n}else{return s&&(s==="down"&&i||s==="up"&&!i)}},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top
return t!==0&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left
return t!==0&&(t>0?"right":"left")},refresh:function(t){this._refreshItems(t)
this.refreshPositions()
return this},_connectWith:function(){var t=this.options
return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(t){var e,i,n,s,r=[],o=[],a=this._connectWith()
if(a&&t){for(e=a.length-1;e>=0;e--){n=$(a[e])
for(i=n.length-1;i>=0;i--){s=$.data(n[i],this.widgetFullName)
if(s&&s!==this&&!s.options.disabled){o.push([$.isFunction(s.options.items)?s.options.items.call(s.element):$(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}}}}o.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
for(e=o.length-1;e>=0;e--){o[e][0].each(function(){r.push(this)})}return $(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)")
this.items=$.grep(this.items,function(e){for(var i=0;i<t.length;i++){if(t[i]===e.item[0]){return false}}return true})},_refreshItems:function(t){this.items=[]
this.containers=[this]
var e,i,n,s,r,o,a,l,h=this.items,c=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):$(this.options.items,this.element),this]],u=this._connectWith()
if(u&&this.ready){for(e=u.length-1;e>=0;e--){n=$(u[e])
for(i=n.length-1;i>=0;i--){s=$.data(n[i],this.widgetFullName)
if(s&&s!==this&&!s.options.disabled){c.push([$.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):$(s.options.items,s.element),s])
this.containers.push(s)}}}}for(e=c.length-1;e>=0;e--){r=c[e][1]
o=c[e][0]
for(i=0,l=o.length;i<l;i++){a=$(o[i])
a.data(this.widgetName+"-item",r)
h.push({item:a,instance:r,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var e,i,n,s
for(e=this.items.length-1;e>=0;e--){i=this.items[e]
if(i.instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]){continue}n=this.options.toleranceElement?$(this.options.toleranceElement,i.item):i.item
if(!t){i.width=n.outerWidth()
i.height=n.outerHeight()}s=n.offset()
i.left=s.left
i.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(e=this.containers.length-1;e>=0;e--){s=this.containers[e].element.offset()
this.containers[e].containerCache.left=s.left
this.containers[e].containerCache.top=s.top
this.containers[e].containerCache.width=this.containers[e].element.outerWidth()
this.containers[e].containerCache.height=this.containers[e].element.outerHeight()}}return this},_createPlaceholder:function(t){t=t||this
var e,i=t.options
if(!i.placeholder||i.placeholder.constructor===String){e=i.placeholder
i.placeholder={element:function(){var i=$(document.createElement(t.currentItem[0].nodeName)).addClass(e||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]
if(!e){i.style.visibility="hidden"}return i},update:function(n,s){if(e&&!i.forcePlaceholderSize){return}if(!s.height()){s.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10))}if(!s.width()){s.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}}t.placeholder=$(i.placeholder.element.call(t.element,t.currentItem))
t.currentItem.after(t.placeholder)
i.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var e,i,n,s,r,o,a,l,h,c=null,u=null
for(e=this.containers.length-1;e>=0;e--){if($.contains(this.currentItem[0],this.containers[e].element[0])){continue}if(this._intersectsWith(this.containers[e].containerCache)){if(c&&$.contains(this.containers[e].element[0],c.element[0])){continue}c=this.containers[e]
u=e}else{if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",t,this._uiHash(this))
this.containers[e].containerCache.over=0}}}if(!c){return}if(this.containers.length===1){this.containers[u]._trigger("over",t,this._uiHash(this))
this.containers[u].containerCache.over=1}else{n=1e4
s=null
r=this.containers[u].floating?"left":"top"
o=this.containers[u].floating?"width":"height"
a=this.positionAbs[r]+this.offset.click[r]
for(i=this.items.length-1;i>=0;i--){if(!$.contains(this.containers[u].element[0],this.items[i].item[0])){continue}if(this.items[i].item[0]===this.currentItem[0]){continue}l=this.items[i].item.offset()[r]
h=false
if(Math.abs(l-a)>Math.abs(l+this.items[i][o]-a)){h=true
l+=this.items[i][o]}if(Math.abs(l-a)<n){n=Math.abs(l-a)
s=this.items[i]
this.direction=h?"up":"down"}}if(!s&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[u]
s?this._rearrange(t,s,null,true):this._rearrange(t,null,this.containers[u].element,true)
this._trigger("change",t,this._uiHash())
this.containers[u]._trigger("change",t,this._uiHash(this))
this.options.placeholder.update(this.currentContainer,this.placeholder)
this.containers[u]._trigger("over",t,this._uiHash(this))
this.containers[u].containerCache.over=1}},_createHelper:function(t){var e=this.options,i=$.isFunction(e.helper)?$(e.helper.apply(this.element[0],[t,this.currentItem])):e.helper==="clone"?this.currentItem.clone():this.currentItem
if(!i.parents("body").length){$(e.appendTo!=="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0])}if(i[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!i[0].style.width||e.forceHelperSize){i.width(this.currentItem.width())}if(!i[0].style.height||e.forceHelperSize){i.height(this.currentItem.height())}return i},_adjustOffsetFromHelper:function(t){if(typeof t==="string"){t=t.split(" ")}if($.isArray(t)){t={left:+t[0],top:+t[1]||0}}if("left"in t){this.offset.click.left=t.left+this.margins.left}if("right"in t){this.offset.click.left=this.helperProportions.width-t.right+this.margins.left}if("top"in t){this.offset.click.top=t.top+this.margins.top}if("bottom"in t){this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var t=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft()
t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie){t={top:0,left:0}}return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var t=this.currentItem.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,n=this.options
if(n.containment==="parent"){n.containment=this.helper[0].parentNode}if(n.containment==="document"||n.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(n.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(n.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(n.containment)){t=$(n.containment)[0]
e=$(n.containment).offset()
i=$(t).css("overflow")!=="hidden"
this.containment=[e.left+(parseInt($(t).css("borderLeftWidth"),10)||0)+(parseInt($(t).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt($(t).css("borderTopWidth"),10)||0)+(parseInt($(t).css("paddingTop"),10)||0)-this.margins.top,e.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt($(t).css("borderLeftWidth"),10)||0)-(parseInt($(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt($(t).css("borderTopWidth"),10)||0)-(parseInt($(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,e){if(!e){e=this.position}var i=t==="absolute"?1:-1,n=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(n[0].tagName)
return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:n.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:n.scrollLeft())*i}},_generatePosition:function(t){var e,i,n=this.options,s=t.pageX,r=t.pageY,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=/(html|body)/i.test(o[0].tagName)
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(t.pageX-this.offset.click.left<this.containment[0]){s=this.containment[0]+this.offset.click.left}if(t.pageY-this.offset.click.top<this.containment[1]){r=this.containment[1]+this.offset.click.top}if(t.pageX-this.offset.click.left>this.containment[2]){s=this.containment[2]+this.offset.click.left}if(t.pageY-this.offset.click.top>this.containment[3]){r=this.containment[3]+this.offset.click.top}}if(n.grid){e=this.originalPageY+Math.round((r-this.originalPageY)/n.grid[1])*n.grid[1]
r=this.containment?e-this.offset.click.top>=this.containment[1]&&e-this.offset.click.top<=this.containment[3]?e:e-this.offset.click.top>=this.containment[1]?e-n.grid[1]:e+n.grid[1]:e
i=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]
s=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-n.grid[0]:i+n.grid[0]:i}}return{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:o.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:o.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?e.item[0]:e.item[0].nextSibling)
this.counter=this.counter?++this.counter:1
var s=this.counter
this._delay(function(){if(s===this.counter){this.refreshPositions(!n)}})},_clear:function(t,e){this.reverting=false
var i,n=[]
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null
if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!e){n.push(function(t){this._trigger("update",t,this._uiHash())})}if(this!==this.currentContainer){if(!e){n.push(function(t){this._trigger("remove",t,this._uiHash())})
n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer))
n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer))}}for(i=this.containers.length-1;i>=0;i--){if(!e){n.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i]))}if(this.containers[i].containerCache.over){n.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i]))
this.containers[i].containerCache.over=0}}if(this._storedCursor){$("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false
if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",t,this._uiHash())
for(i=0;i<n.length;i++){n[i].call(this,t)}this._trigger("stop",t,this._uiHash())}this.fromOutside=false
return false}if(!e){this._trigger("beforeStop",t,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0])
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null
if(!e){for(i=0;i<n.length;i++){n[i].call(this,t)}this._trigger("stop",t,this._uiHash())}this.fromOutside=false
return true},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(t){var e=t||this
return{helper:e.helper,placeholder:e.placeholder||$([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:t?t.element:null}}})})(jQuery);(function($,t){var e=0,i=/#.*$/
function n(){return++e}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(i,""))===decodeURIComponent(location.href.replace(i,""))}$.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,e=this.options
this.running=false
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",e.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){if($(this).is(".ui-state-disabled")){t.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur()}})
this._processTabs()
e.active=this._initialActive()
if($.isArray(e.disabled)){e.disabled=$.unique(e.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(e.active)}else{this.active=$()}this._refresh()
if(this.active.length){this.load(e.active)}},_initialActive:function(){var t=this.options.active,e=this.options.collapsible,i=location.hash.substring(1)
if(t===null){if(i){this.tabs.each(function(e,n){if($(n).attr("aria-controls")===i){t=e
return false}})}if(t===null){t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(t===null||t===-1){t=this.tabs.length?0:false}}if(t!==false){t=this.tabs.index(this.tabs.eq(t))
if(t===-1){t=e?false:0}}if(!e&&t===false&&this.anchors.length){t=0}return t},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)}},_tabKeydown:function(t){var e=$(this.document[0].activeElement).closest("li"),i=this.tabs.index(e),n=true
if(this._handlePageNav(t)){return}switch(t.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:i++
break
case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:n=false
i--
break
case $.ui.keyCode.END:i=this.anchors.length-1
break
case $.ui.keyCode.HOME:i=0
break
case $.ui.keyCode.SPACE:t.preventDefault()
clearTimeout(this.activating)
this._activate(i)
return
case $.ui.keyCode.ENTER:t.preventDefault()
clearTimeout(this.activating)
this._activate(i===this.options.active?false:i)
return
default:return}t.preventDefault()
clearTimeout(this.activating)
i=this._focusNextTab(i,n)
if(!t.ctrlKey){e.attr("aria-selected","false")
this.tabs.eq(i).attr("aria-selected","true")
this.activating=this._delay(function(){this.option("active",i)},this.delay)}},_panelKeydown:function(t){if(this._handlePageNav(t)){return}if(t.ctrlKey&&t.keyCode===$.ui.keyCode.UP){t.preventDefault()
this.active.focus()}},_handlePageNav:function(t){if(t.altKey&&t.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false))
return true}if(t.altKey&&t.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true))
return true}},_findNextTab:function(t,e){var i=this.tabs.length-1
function n(){if(t>i){t=0}if(t<0){t=i}return t}while($.inArray(n(),this.options.disabled)!==-1){t=e?t+1:t-1}return t},_focusNextTab:function(t,e){t=this._findNextTab(t,e)
this.tabs.eq(t).focus()
return t},_setOption:function(t,e){if(t==="active"){this._activate(e)
return}if(t==="disabled"){this._setupDisabled(e)
return}this._super(t,e)
if(t==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",e)
if(!e&&this.options.active===false){this._activate(0)}}if(t==="event"){this._setupEvents(e)}if(t==="heightStyle"){this._setupHeightStyle(e)}},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+n()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])")
t.disabled=$.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)})
this._processTabs()
if(t.active===false||!this.anchors.length){t.active=false
this.active=$()}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===t.disabled.length){t.active=false
this.active=$()}else{this._activate(this._findNextTab(Math.max(0,t.active-1),false))}}else{t.active=this.tabs.index(this.active)}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled)
this._setupEvents(this.options.event)
this._setupHeightStyle(this.options.heightStyle)
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1})
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"})
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0})
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var t=this
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist")
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1})
this.anchors=this.tabs.map(function(){return $("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1})
this.panels=$()
this.anchors.each(function(e,i){var n,r,o,a=$(i).uniqueId().attr("id"),l=$(i).closest("li"),h=l.attr("aria-controls")
if(s(i)){n=i.hash
r=t.element.find(t._sanitizeSelector(n))}else{o=t._tabId(l)
n="#"+o
r=t.element.find(n)
if(!r.length){r=t._createPanel(o)
r.insertAfter(t.panels[e-1]||t.tablist)}r.attr("aria-live","polite")}if(r.length){t.panels=t.panels.add(r)}if(h){l.data("ui-tabs-aria-controls",h)}l.attr({"aria-controls":n.substring(1),"aria-labelledby":a})
r.attr("aria-labelledby",a)})
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return $("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(t){if($.isArray(t)){if(!t.length){t=false}else if(t.length===this.anchors.length){t=true}}for(var e=0,i;i=this.tabs[e];e++){if(t===true||$.inArray(e,t)!==-1){$(i).addClass("ui-state-disabled").attr("aria-disabled","true")}else{$(i).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=t},_setupEvents:function(t){var e={click:function(t){t.preventDefault()}}
if(t){$.each(t.split(" "),function(t,i){e[i]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels))
this._on(this.anchors,e)
this._on(this.tabs,{keydown:"_tabKeydown"})
this._on(this.panels,{keydown:"_panelKeydown"})
this._focusable(this.tabs)
this._hoverable(this.tabs)},_setupHeightStyle:function(t){var e,i=this.element.parent()
if(t==="fill"){e=i.height()
e-=this.element.outerHeight()-this.element.height()
this.element.siblings(":visible").each(function(){var t=$(this),i=t.css("position")
if(i==="absolute"||i==="fixed"){return}e-=t.outerHeight(true)})
this.element.children().not(this.panels).each(function(){e-=$(this).outerHeight(true)})
this.panels.each(function(){$(this).height(Math.max(0,e-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(t==="auto"){e=0
this.panels.each(function(){e=Math.max(e,$(this).height("").height())}).height(e)}},_eventHandler:function(t){var e=this.options,i=this.active,n=$(t.currentTarget),s=n.closest("li"),r=s[0]===i[0],o=r&&e.collapsible,a=o?$():this._getPanelForTab(s),l=!i.length?$():this._getPanelForTab(i),h={oldTab:i,oldPanel:l,newTab:o?$():s,newPanel:a}
t.preventDefault()
if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||r&&!e.collapsible||this._trigger("beforeActivate",t,h)===false){return}e.active=o?false:this.tabs.index(s)
this.active=r?$():s
if(this.xhr){this.xhr.abort()}if(!l.length&&!a.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(a.length){this.load(this.tabs.index(s),t)}this._toggle(t,h)},_toggle:function(t,e){var i=this,n=e.newPanel,s=e.oldPanel
this.running=true
function r(){i.running=false
i._trigger("activate",t,e)}function o(){e.newTab.closest("li").addClass("ui-tabs-active ui-state-active")
if(n.length&&i.options.show){i._show(n,i.options.show,r)}else{n.show()
r()}}if(s.length&&this.options.hide){this._hide(s,this.options.hide,function(){e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active")
o()})}else{e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active")
s.hide()
o()}s.attr({"aria-expanded":"false","aria-hidden":"true"})
e.oldTab.attr("aria-selected","false")
if(n.length&&s.length){e.oldTab.attr("tabIndex",-1)}else if(n.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0}).attr("tabIndex",-1)}n.attr({"aria-expanded":"true","aria-hidden":"false"})
e.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var e,i=this._findActive(t)
if(i[0]===this.active[0]){return}if(!i.length){i=this.active}e=i.find(".ui-tabs-anchor")[0]
this._eventHandler({target:e,currentTarget:e,preventDefault:$.noop})},_findActive:function(t){return t===false?$():this.tabs.eq(t)},_getIndex:function(t){if(typeof t==="string"){t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))}return t},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible")
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role")
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId()
this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove()}else{$(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}})
this.tabs.each(function(){var t=$(this),e=t.data("ui-tabs-aria-controls")
if(e){t.attr("aria-controls",e).removeData("ui-tabs-aria-controls")}else{t.removeAttr("aria-controls")}})
this.panels.show()
if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(e){var i=this.options.disabled
if(i===false){return}if(e===t){i=false}else{e=this._getIndex(e)
if($.isArray(i)){i=$.map(i,function(t){return t!==e?t:null})}else{i=$.map(this.tabs,function(t,i){return i!==e?i:null})}}this._setupDisabled(i)},disable:function(e){var i=this.options.disabled
if(i===true){return}if(e===t){i=true}else{e=this._getIndex(e)
if($.inArray(e,i)!==-1){return}if($.isArray(i)){i=$.merge([e],i).sort()}else{i=[e]}}this._setupDisabled(i)},load:function(t,e){t=this._getIndex(t)
var i=this,n=this.tabs.eq(t),r=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),a={tab:n,panel:o}
if(s(r[0])){return}this.xhr=$.ajax(this._ajaxSettings(r,e,a))
if(this.xhr&&this.xhr.statusText!=="canceled"){n.addClass("ui-tabs-loading")
o.attr("aria-busy","true")
this.xhr.success(function(t){setTimeout(function(){o.html(t)
i._trigger("load",e,a)},1)}).complete(function(t,e){setTimeout(function(){if(e==="abort"){i.panels.stop(false,true)}n.removeClass("ui-tabs-loading")
o.removeAttr("aria-busy")
if(t===i.xhr){delete i.xhr}},1)})}},_ajaxSettings:function(t,e,i){var n=this
return{url:t.attr("href"),beforeSend:function(t,s){return n._trigger("beforeLoad",e,$.extend({jqXHR:t,ajaxSettings:s},i))}}},_getPanelForTab:function(t){var e=$(t).attr("aria-controls")
return this.element.find(this._sanitizeSelector("#"+e))}})})(jQuery);(function($){$.support.touch="ontouchend"in document
if(!$.support.touch){return}var t=$.ui.mouse.prototype,e=t._mouseInit,i
function n(t,e){if(t.originalEvent.touches.length>1){return}t.preventDefault()
var i=t.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents")
n.initMouseEvent(e,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null)
t.target.dispatchEvent(n)}t._touchStart=function(t){var e=this
if(i||!e._mouseCapture(t.originalEvent.changedTouches[0])){return}i=true
e._touchMoved=false
n(t,"mouseover")
n(t,"mousemove")
n(t,"mousedown")}
t._touchMove=function(t){if(!i){return}this._touchMoved=true
n(t,"mousemove")}
t._touchEnd=function(t){if(!i){return}n(t,"mouseup")
n(t,"mouseout")
if(!this._touchMoved){n(t,"click")}i=false}
t._mouseInit=function(){var t=this
t.element.bind("touchstart",$.proxy(t,"_touchStart")).bind("touchmove",$.proxy(t,"_touchMove")).bind("touchend",$.proxy(t,"_touchEnd"))
e.call(t)}})(jQuery);(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(jQuery)}})(function($){var t="placecomplete"
var e={placeholderText:"City, State, Country",requestParams:{types:["(cities)"]}}
window.initPlacecomplete=function(){i.completeInit()}
var i={deferred:new $.Deferred,initialized:false,acService:null,pService:null,el:null,init:function(t){if(this.initialized){return}this.el=t
if(window.google&&google.maps&&google.maps.places){this.completeInit()}else{$.ajax({url:"https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&callback=initPlacecomplete",dataType:"script",cache:true})}},completeInit:function(){this.acService=new google.maps.places.AutocompleteService
this.pService=new google.maps.places.PlacesService(this.el)
this.initialized=true
this.deferred.resolve()},_handlePredictions:function(t,e,i){if(i!==google.maps.places.PlacesServiceStatus.OK){t.reject(i)
return}t.resolve(e)},_handleDetails:function(t,e,i,n){if(n!==google.maps.places.PlacesServiceStatus.OK){t.reject(n)
return}i["display_text"]=e
t.resolve(i)},getPredictions:function(t,e){return this.deferred.then($.proxy(function(){var i=new $.Deferred
e=$.extend({},e,{input:t})
this.acService.getPlacePredictions(e,$.proxy(this._handlePredictions,null,i))
return i.promise()},this))},getDetails:function(t){return this.deferred.then($.proxy(function(){var e=new $.Deferred
var i=t.description
this.pService.getDetails({reference:t.reference},$.proxy(this._handleDetails,null,e,i))
return e.promise()},this))}}
var n=function(n,s){this.element=n
i.init(n)
this.options=$.extend({},e,s)
this._defaults=e
this._name=t
this.init()}
n.prototype.init=function(){var e=$(this.element)
var n=this.options.requestParams
var s=$.extend({},{query:function(s){i.getPredictions(s.term,n).done(function(t){var e=$.map(t,function(t){t["text"]=t["description"]
return t})
s.callback({results:e})}).fail(function(i){e.trigger(t+":error",i)
s.callback({results:[]})})},initSelection:function(t,i){var n=e.val()
i({id:0,text:n})},minimumInputLength:1,selectOnBlur:true,allowClear:true,multiple:false,dropdownCssClass:"jquery-placecomplete-google-attribution",placeholder:this.options.placeholderText},this.options)
e.select2(s)
e.on({"select2-removed":function(i){e.trigger(t+":cleared")},change:function(n){if(!n.added){return}i.getDetails(n.added).done(function(i){e.trigger(t+":selected",i)}).fail(function(i){e.trigger(t+":error",i)})}})}
$.fn[t]=function(e){return this.each(function(){if(!$.data(this,"plugin_"+t)){$.data(this,"plugin_"+t,new n(this,e))}})}});(function(t,e,i){(function(t){"use strict"
if(typeof define==="function"&&define.amd){define(["jquery"],t)}else if(jQuery&&!jQuery.fn.qtip){t(jQuery)}})(function($){"use strict"
var n=true,s=false,r=null,o="x",a="y",l="width",h="height",c="top",u="left",f="bottom",d="right",p="center",m="flip",g="flipinvert",v="shift",y,b,w,x,C={},k="qtip",T="data-hasqtip",S="data-qtip-id",D=["ui-widget","ui-tooltip"],E="."+k,P="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),I=k+"-fixed",A=k+"-default",N=k+"-focus",H=k+"-hover",O=k+"-disabled",z="_replacedByqTip",M="oldtitle",j,W={ie:function(){var t=3,i=e.createElement("div")
while(i.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"){if(!i.getElementsByTagName("i")[0]){break}}return t>4?t:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s}
function L(t,e,i,n){this.id=i
this.target=t
this.tooltip=r
this.elements={target:t}
this._id=k+"-"+i
this.timers={img:{}}
this.options=e
this.plugins={}
this.cache={event:{},target:$(),disabled:s,attr:n,onTooltip:s,lastClass:""}
this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=s}b=L.prototype
b._when=function(t){return $.when.apply($,t)}
b.render=function(t){if(this.rendered||this.destroyed){return this}var e=this,i=this.options,r=this.cache,o=this.elements,a=i.content.text,l=i.content.title,h=i.content.button,c=i.position,u="."+this._id+" ",f=[],d
$.attr(this.target[0],"aria-describedby",this._id)
this.tooltip=o.tooltip=d=$("<div/>",{id:this._id,class:[k,A,i.style.classes,k+"-pos-"+i.position.my.abbrev()].join(" "),width:i.style.width||"",height:i.style.height||"",tracking:c.target==="mouse"&&c.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":this._id+"-content","aria-hidden":n}).toggleClass(O,this.disabled).attr(S,this.id).data(k,this).appendTo(c.container).append(o.content=$("<div />",{class:k+"-content",id:this._id+"-content","aria-atomic":n}))
this.rendered=-1
this.positioning=n
if(l){this._createTitle()
if(!$.isFunction(l)){f.push(this._updateTitle(l,s))}}if(h){this._createButton()}if(!$.isFunction(a)){f.push(this._updateContent(a,s))}this.rendered=n
this._setWidget()
$.each(C,function(t){var i
if(this.initialize==="render"&&(i=this(e))){e.plugins[t]=i}})
this._unassignEvents()
this._assignEvents()
this._when(f).then(function(){e._trigger("render")
e.positioning=s
if(!e.hiddenDuringWait&&(i.show.ready||t)){e.toggle(n,r.event,s)}e.hiddenDuringWait=s})
y.api[this.id]=this
return this}
b.destroy=function(t){if(this.destroyed){return this.target}function e(){if(this.destroyed){return}this.destroyed=n
var t=this.target,e=t.attr(M)
if(this.rendered){this.tooltip.stop(1,0).find("*").remove().end().remove()}$.each(this.plugins,function(t){this.destroy&&this.destroy()})
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this._unassignEvents()
t.removeData(k).removeAttr(S).removeAttr(T).removeAttr("aria-describedby")
if(this.options.suppress&&e){t.attr("title",e).removeAttr(M)}this._unbind(t)
this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=r
delete y.api[this.id]}if((t!==n||this.triggering==="hide")&&this.rendered){this.tooltip.one("tooltiphidden",$.proxy(e,this))
!this.triggering&&this.hide()}else{e.call(this)}return this.target}
function R(t){return t===r||$.type(t)!=="object"}function F(t){return!($.isFunction(t)||t&&t.attr||t.length||$.type(t)==="object"&&(t.jquery||t.then))}function q(t){var e,i,o,a
if(R(t)){return s}if(R(t.metadata)){t.metadata={type:t.metadata}}if("content"in t){e=t.content
if(R(e)||e.jquery||e.done){e=t.content={text:i=F(e)?s:e}}else{i=e.text}if("ajax"in e){o=e.ajax
a=o&&o.once!==s
delete e.ajax
e.text=function(t,e){var n=i||$(this).attr(e.options.content.attr)||"Loading...",s=$.ajax($.extend({},o,{context:e})).then(o.success,r,o.error).then(function(t){if(t&&a){e.set("content.text",t)}return t},function(t,i,n){if(e.destroyed||t.status===0){return}e.set("content.text",i+": "+n)})
return!a?(e.set("content.text",n),s):n}}if("title"in e){if(!R(e.title)){e.button=e.title.button
e.title=e.title.text}if(F(e.title||s)){e.title=s}}}if("position"in t&&R(t.position)){t.position={my:t.position,at:t.position}}if("show"in t&&R(t.show)){t.show=t.show.jquery?{target:t.show}:t.show===n?{ready:n}:{event:t.show}}if("hide"in t&&R(t.hide)){t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}}if("style"in t&&R(t.style)){t.style={classes:t.style}}$.each(C,function(){this.sanitize&&this.sanitize(t)})
return t}x=b.checks={builtin:{"^id$":function(t,e,i,r){var o=i===n?y.nextid:i,a=k+"-"+o
if(o!==s&&o.length>0&&!$("#"+a).length){this._id=a
if(this.rendered){this.tooltip[0].id=this._id
this.elements.content[0].id=this._id+"-content"
this.elements.title[0].id=this._id+"-title"}}else{t[e]=r}},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,n){if(this.options.content.text===this.target.attr(n)){this._updateContent(this.target.attr(i))}},"^content.title$":function(t,e,i){if(!i){return this._removeTitle()}i&&!this.elements.title&&this._createTitle()
this._updateTitle(i)},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"===typeof i&&(t[e]=new w(i,e==="at"))},"^position.container$":function(t,e,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(n)||this.toggle(n))},"^style.classes$":function(t,e,i,n){this.rendered&&this.tooltip.removeClass(n).addClass(i)},"^style.(width|height)":function(t,e,i){this.rendered&&this.tooltip.css(e,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(t,e,i){this.rendered&&this.tooltip.toggleClass(A,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){this.rendered&&this.tooltip[($.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(!this.rendered){return}var t=this.options.position
this.tooltip.attr("tracking",t.target==="mouse"&&t.adjust.mouse)
this._unassignEvents()
this._assignEvents()}}}
function B(t,e){var i=0,n,s=t,r=e.split(".")
while(s=s[r[i++]]){if(i<r.length){n=s}}return[n||t,r.pop()]}b.get=function(t){if(this.destroyed){return this}var e=B(this.options,t.toLowerCase()),i=e[0][e[1]]
return i.precedance?i.string():i}
function V(t,e){var i,n,s
for(i in this.checks){for(n in this.checks[i]){if(s=new RegExp(n,"i").exec(t)){e.push(s)
if(i==="builtin"||this.plugins[i]){this.checks[i][n].apply(this.plugins[i]||this,e)}}}}}var U=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,Y=/^prerender|show\.ready/i
b.set=function(t,e){if(this.destroyed){return this}var i=this.rendered,o=s,a=this.options,l=this.checks,h
if("string"===typeof t){h=t
t={}
t[h]=e}else{t=$.extend({},t)}$.each(t,function(e,n){if(i&&Y.test(e)){delete t[e]
return}var s=B(a,e.toLowerCase()),r
r=s[0][s[1]]
s[0][s[1]]=n&&n.nodeType?$(n):n
o=U.test(e)||o
t[e]=[s[0],s[1],n,r]})
q(a)
this.positioning=n
$.each(t,$.proxy(V,this))
this.positioning=s
if(this.rendered&&this.tooltip[0].offsetWidth>0&&o){this.reposition(a.position.target==="mouse"?r:this.cache.event)}return this}
b._update=function(t,e,i){var o=this,a=this.cache
if(!this.rendered||!t){return s}if($.isFunction(t)){t=t.call(this.elements.target,a.event,this)||""}if($.isFunction(t.then)){a.waiting=n
return t.then(function(t){a.waiting=s
return o._update(t,e)},r,function(t){return o._update(t,e)})}if(t===s||!t&&t!==""){return s}if(t.jquery&&t.length>0){e.empty().append(t.css({display:"block",visibility:"visible"}))}else{e.html(t)}return this._waitForContent(e).then(function(t){if(t.images&&t.images.length&&o.rendered&&o.tooltip[0].offsetWidth>0){o.reposition(a.event,!t.length)}})}
b._waitForContent=function(t){var e=this.cache
e.waiting=n
return($.fn.imagesLoaded?t.imagesLoaded():$.Deferred().resolve([])).done(function(){e.waiting=s}).promise()}
b._updateContent=function(t,e){this._update(t,this.elements.content,e)}
b._updateTitle=function(t,e){if(this._update(t,this.elements.title,e)===s){this._removeTitle(s)}}
b._createTitle=function(){var t=this.elements,e=this._id+"-title"
if(t.titlebar){this._removeTitle()}t.titlebar=$("<div />",{class:k+"-titlebar "+(this.options.style.widget?K("header"):"")}).append(t.title=$("<div />",{id:e,class:k+"-title","aria-atomic":n})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){$(this).toggleClass("ui-state-active ui-state-focus",t.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(t){$(this).toggleClass("ui-state-hover",t.type==="mouseover")})
if(this.options.content.button){this._createButton()}}
b._removeTitle=function(t){var e=this.elements
if(e.title){e.titlebar.remove()
e.titlebar=e.title=e.button=r
if(t!==s){this.reposition()}}}
b.reposition=function(i,r){if(!this.rendered||this.positioning||this.destroyed){return this}this.positioning=n
var o=this.cache,a=this.tooltip,l=this.options.position,h=l.target,m=l.my,g=l.at,v=l.viewport,y=l.container,b=l.adjust,w=b.method.split(" "),x=a.outerWidth(s),k=a.outerHeight(s),T=0,S=0,D=a.css("position"),E={left:0,top:0},P=a[0].offsetWidth>0,I=i&&i.type==="scroll",A=$(t),N=y[0].ownerDocument,H=this.mouse,O,z
if($.isArray(h)&&h.length===2){g={x:u,y:c}
E={left:h[0],top:h[1]}}else if(h==="mouse"){g={x:u,y:c}
if(H&&H.pageX&&(b.mouse||!i||!i.pageX)){i=H}else if(!i||!i.pageX){if((!b.mouse||this.options.show.distance)&&o.origin&&o.origin.pageX){i=o.origin}else if(!i||i&&(i.type==="resize"||i.type==="scroll")){i=o.event}}if(D!=="static"){E=y.offset()}if(N.body.offsetWidth!==(t.innerWidth||N.documentElement.clientWidth)){z=$(e.body).offset()}E={left:i.pageX-E.left+(z&&z.left||0),top:i.pageY-E.top+(z&&z.top||0)}
if(b.mouse&&I&&H){E.left-=(H.scrollX||0)-A.scrollLeft()
E.top-=(H.scrollY||0)-A.scrollTop()}}else{if(h==="event"){if(i&&i.target&&i.type!=="scroll"&&i.type!=="resize"){o.target=$(i.target)}else if(!i.target){o.target=this.elements.target}}else if(h!=="event"){o.target=$(h.jquery?h:this.elements.target)}h=o.target
h=$(h).eq(0)
if(h.length===0){return this}else if(h[0]===e||h[0]===t){T=W.iOS?t.innerWidth:h.width()
S=W.iOS?t.innerHeight:h.height()
if(h[0]===t){E={top:(v||h).scrollTop(),left:(v||h).scrollLeft()}}}else if(C.imagemap&&h.is("area")){O=C.imagemap(this,h,g,C.viewport?w:s)}else if(C.svg&&h&&h[0].ownerSVGElement){O=C.svg(this,h,g,C.viewport?w:s)}else{T=h.outerWidth(s)
S=h.outerHeight(s)
E=h.offset()}if(O){T=O.width
S=O.height
z=O.offset
E=O.position}E=this.reposition.offset(h,E,y)
if(W.iOS>3.1&&W.iOS<4.1||W.iOS>=4.3&&W.iOS<4.33||!W.iOS&&D==="fixed"){E.left-=A.scrollLeft()
E.top-=A.scrollTop()}if(!O||O&&O.adjustable!==s){E.left+=g.x===d?T:g.x===p?T/2:0
E.top+=g.y===f?S:g.y===p?S/2:0}}E.left+=b.x+(m.x===d?-x:m.x===p?-x/2:0)
E.top+=b.y+(m.y===f?-k:m.y===p?-k/2:0)
if(C.viewport){E.adjusted=C.viewport(this,E,l,T,S,x,k)
if(z&&E.adjusted.left){E.left+=z.left}if(z&&E.adjusted.top){E.top+=z.top}}else{E.adjusted={left:0,top:0}}if(!this._trigger("move",[E,v.elem||v],i)){return this}delete E.adjusted
if(r===s||!P||isNaN(E.left)||isNaN(E.top)||h==="mouse"||!$.isFunction(l.effect)){a.css(E)}else if($.isFunction(l.effect)){l.effect.call(a,this,$.extend({},E))
a.queue(function(t){$(this).css({opacity:"",height:""})
if(W.ie){this.style.removeAttribute("filter")}t()})}this.positioning=s
return this}
b.reposition.offset=function(t,i,n){if(!n[0]){return i}var s=$(t[0].ownerDocument),r=!!W.ie&&e.compatMode!=="CSS1Compat",o=n[0],a,l,h,c
function u(t,e){i.left+=e*t.scrollLeft()
i.top+=e*t.scrollTop()}do{if((l=$.css(o,"position"))!=="static"){if(l==="fixed"){h=o.getBoundingClientRect()
u(s,-1)}else{h=$(o).position()
h.left+=parseFloat($.css(o,"borderLeftWidth"))||0
h.top+=parseFloat($.css(o,"borderTopWidth"))||0}i.left-=h.left+(parseFloat($.css(o,"marginLeft"))||0)
i.top-=h.top+(parseFloat($.css(o,"marginTop"))||0)
if(!a&&(c=$.css(o,"overflow"))!=="hidden"&&c!=="visible"){a=$(o)}}}while(o=o.offsetParent)
if(a&&(a[0]!==s[0]||r)){u(a,1)}return i}
var Q=(w=b.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,p).toLowerCase()
this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase()
this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase()
this.forceY=!!e
var i=t.charAt(0)
this.precedance=i==="t"||i==="b"?a:o}).prototype
Q.invert=function(t,e){this[t]=this[t]===u?d:this[t]===d?u:e||this[t]}
Q.string=function(){var t=this.x,e=this.y
return t===e?t:this.precedance===a||this.forceY&&e!=="center"?e+" "+t:t+" "+e}
Q.abbrev=function(){var t=this.string().split(" ")
return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")}
Q.clone=function(){return new w(this.string(),this.forceY)}
b.toggle=function(t,i){var o=this.cache,a=this.options,l=this.tooltip
if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(o.event.type)&&a.show.target.add(i.target).length===a.show.target.length&&l.has(i.relatedTarget).length){return this}o.event=X(i)}this.waiting&&!t&&(this.hiddenDuringWait=n)
if(!this.rendered){return t?this.render(1):this}else if(this.destroyed||this.disabled){return this}var h=t?"show":"hide",c=this.options[h],u=this.options[!t?"show":"hide"],f=this.options.position,d=this.options.content,p=this.tooltip.css("width"),m=this.tooltip.is(":visible"),g=t||c.target.length===1,v=!i||c.target.length<2||o.target[0]===i.target,y,b,w,x,C
if((typeof t).search("boolean|number")){t=!m}y=!l.is(":animated")&&m===t&&v
b=!y?!!this._trigger(h,[90]):r
if(this.destroyed){return this}if(b!==s&&t){this.focus(i)}if(!b||y){return this}$.attr(l[0],"aria-hidden",!!!t)
if(t){o.origin=X(this.mouse)
if($.isFunction(d.text)){this._updateContent(d.text,s)}if($.isFunction(d.title)){this._updateTitle(d.title,s)}if(!j&&f.target==="mouse"&&f.adjust.mouse){$(e).bind("mousemove."+k,this._storeMouse)
j=n}if(!p){l.css("width",l.outerWidth(s))}this.reposition(i,arguments[2])
if(!p){l.css("width","")}if(!!c.solo){(typeof c.solo==="string"?$(c.solo):$(E,c.solo)).not(l).not(c.target).qtip("hide",$.Event("tooltipsolo"))}}else{clearTimeout(this.timers.show)
delete o.origin
if(j&&!$(E+'[tracking="true"]:visible',c.solo).not(l).length){$(e).unbind("mousemove."+k)
j=s}this.blur(i)}C=$.proxy(function(){if(t){if(W.ie){l[0].style.removeAttribute("filter")}l.css("overflow","")
if("string"===typeof c.autofocus){$(this.options.show.autofocus,l).focus()}this.options.show.target.trigger("qtip-"+this.id+"-inactive")}else{l.css({display:"",visibility:"",opacity:"",left:"",top:""})}this._trigger(t?"visible":"hidden")},this)
if(c.effect===s||g===s){l[h]()
C()}else if($.isFunction(c.effect)){l.stop(1,1)
c.effect.call(l,this)
l.queue("fx",function(t){C()
t()})}else{l.fadeTo(90,t?1:0,C)}if(t){c.target.trigger("qtip-"+this.id+"-inactive")}return this}
b.show=function(t){return this.toggle(n,t)}
b.hide=function(t){return this.toggle(s,t)}
b.focus=function(t){if(!this.rendered||this.destroyed){return this}var e=$(E),i=this.tooltip,n=parseInt(i[0].style.zIndex,10),s=y.zindex+e.length,r
if(!i.hasClass(N)){if(this._trigger("focus",[s],t)){if(n!==s){e.each(function(){if(this.style.zIndex>n){this.style.zIndex=this.style.zIndex-1}})
e.filter("."+N).qtip("blur",t)}i.addClass(N)[0].style.zIndex=s}}return this}
b.blur=function(t){if(!this.rendered||this.destroyed){return this}this.tooltip.removeClass(N)
this._trigger("blur",[this.tooltip.css("zIndex")],t)
return this}
b.disable=function(t){if(this.destroyed){return this}if(t==="toggle"){t=!(this.rendered?this.tooltip.hasClass(O):this.disabled)}else if("boolean"!==typeof t){t=n}if(this.rendered){this.tooltip.toggleClass(O,t).attr("aria-disabled",t)}this.disabled=!!t
return this}
b.enable=function(){return this.disable(s)}
b._createButton=function(){var t=this,e=this.elements,i=e.tooltip,n=this.options.content.button,r=typeof n==="string",o=r?n:"Close tooltip"
if(e.button){e.button.remove()}if(n.jquery){e.button=n}else{e.button=$("<a />",{class:"qtip-close "+(this.options.style.widget?"":k+"-icon"),title:o,"aria-label":o}).prepend($("<span />",{class:"ui-icon ui-icon-close",html:"&times;"}))}e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){if(!i.hasClass(O)){t.hide(e)}return s})}
b._updateButton=function(t){if(!this.rendered){return s}var e=this.elements.button
if(t){this._createButton()}else{e.remove()}}
function K(t){return D.concat("").join(t?"-"+t+" ":" ")}b._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,n=i.hasClass(O)
i.removeClass(O)
O=t?"ui-state-disabled":"qtip-disabled"
i.toggleClass(O,n)
i.toggleClass("ui-helper-reset "+K(),t).toggleClass(A,this.options.style.def&&!t)
if(e.content){e.content.toggleClass(K("content"),t)}if(e.titlebar){e.titlebar.toggleClass(K("header"),t)}if(e.button){e.button.toggleClass(k+"-icon",!t)}}
function X(i){return i&&{type:i.type,pageX:i.pageX,pageY:i.pageY,target:i.target,relatedTarget:i.relatedTarget,scrollX:i.scrollX||t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:i.scrollY||t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}||{}}function G(t,e){if(e>0){return setTimeout($.proxy(t,this),e)}else{t.call(this)}}function J(t){if(this.tooltip.hasClass(O)){return s}clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
this.timers.show=G.call(this,function(){this.toggle(n,t)},this.options.show.delay)}function Z(t){if(this.tooltip.hasClass(O)){return s}var e=$(t.relatedTarget),i=e.closest(E)[0]===this.tooltip[0],n=e[0]===this.options.show.target[0]
clearTimeout(this.timers.show)
clearTimeout(this.timers.hide)
if(this!==e[0]&&(this.options.position.target==="mouse"&&i)||this.options.hide.fixed&&(/mouse(out|leave|move)/.test(t.type)&&(i||n))){try{t.preventDefault()
t.stopImmediatePropagation()}catch(t){}return}this.timers.hide=G.call(this,function(){this.toggle(s,t)},this.options.hide.delay,this)}function tt(t){if(this.tooltip.hasClass(O)||!this.options.hide.inactive){return s}clearTimeout(this.timers.inactive)
this.timers.inactive=G.call(this,function(){this.hide(t)},this.options.hide.inactive)}function et(t){if(this.rendered&&this.tooltip[0].offsetWidth>0){this.reposition(t)}}b._storeMouse=function(t){(this.mouse=X(t)).type="mousemove"}
b._bind=function(t,e,i,n,s){var r="."+this._id+(n?"-"+n:"")
e.length&&$(t).bind((e.split?e:e.join(r+" "))+r,$.proxy(i,s||this))}
b._unbind=function(t,e){$(t).unbind("."+this._id+(e?"-"+e:""))}
var it="."+k
function nt(t,i,n){$(e.body).delegate(t,(i.split?i:i.join(it+" "))+it,function(){var t=y.api[$.attr(this,S)]
t&&!t.disabled&&n.apply(t,arguments)})}$(function(){nt(E,["mouseenter","mouseleave"],function(t){var e=t.type==="mouseenter",i=$(t.currentTarget),n=$(t.relatedTarget||t.target),s=this.options
if(e){this.focus(t)
i.hasClass(I)&&!i.hasClass(O)&&clearTimeout(this.timers.hide)}else{if(s.position.target==="mouse"&&s.hide.event&&s.show.target&&!n.closest(s.show.target[0]).length){this.hide(t)}}i.toggleClass(H,e)})
nt("["+S+"]",P,tt)})
b._trigger=function(t,e,i){var n=$.Event("tooltip"+t)
n.originalEvent=i&&$.extend({},i)||this.cache.event||r
this.triggering=t
this.tooltip.trigger(n,[this].concat(e||[]))
this.triggering=s
return!n.isDefaultPrevented()}
b._bindEvents=function(t,e,i,n,s,r){if(n.add(i).length===n.length){var o=[]
e=$.map(e,function(e){var i=$.inArray(e,t)
if(i>-1){o.push(t.splice(i,1)[0])
return}return e})
o.length&&this._bind(i,o,function(t){var e=this.rendered?this.tooltip[0].offsetWidth>0:false;(e?r:s).call(this,t)})}this._bind(i,t,s)
this._bind(n,e,r)}
b._assignInitialEvents=function(t){var e=this.options,r=e.show.target,o=e.hide.target,a=e.show.event?$.trim(""+e.show.event).split(" "):[],l=e.hide.event?$.trim(""+e.hide.event).split(" "):[]
if(/mouse(over|enter)/i.test(e.show.event)&&!/mouse(out|leave)/i.test(e.hide.event)){l.push("mouseleave")}this._bind(r,"mousemove",function(t){this._storeMouse(t)
this.cache.onTarget=n})
function h(t){if(this.disabled||this.destroyed){return s}this.cache.event=X(t)
this.cache.target=t?$(t.target):[i]
clearTimeout(this.timers.show)
this.timers.show=G.call(this,function(){this.render(typeof t==="object"||e.show.ready)},e.show.delay)}this._bindEvents(a,l,r,o,h,function(){clearTimeout(this.timers.show)})
if(e.show.ready||e.prerender){h.call(this,t)}}
b._assignEvents=function(){var i=this,n=this.options,s=n.position,r=this.tooltip,o=n.show.target,a=n.hide.target,l=s.container,h=s.viewport,c=$(e),u=$(e.body),f=$(t),d=n.show.event?$.trim(""+n.show.event).split(" "):[],p=n.hide.event?$.trim(""+n.hide.event).split(" "):[]
$.each(n.events,function(t,e){i._bind(r,t==="toggle"?["tooltipshow","tooltiphide"]:["tooltip"+t],e,null,r)})
if(/mouse(out|leave)/i.test(n.hide.event)&&n.hide.leave==="window"){this._bind(c,["mouseout","blur"],function(t){if(!/select|option/.test(t.target.nodeName)&&!t.relatedTarget){this.hide(t)}})}if(n.hide.fixed){a=a.add(r.addClass(I))}else if(/mouse(over|enter)/i.test(n.show.event)){this._bind(a,"mouseleave",function(){clearTimeout(this.timers.show)})}if((""+n.hide.event).indexOf("unfocus")>-1){this._bind(l.closest("html"),["mousedown","touchstart"],function(t){var e=$(t.target),i=this.rendered&&!this.tooltip.hasClass(O)&&this.tooltip[0].offsetWidth>0,n=e.parents(E).filter(this.tooltip[0]).length>0
if(e[0]!==this.target[0]&&e[0]!==this.tooltip[0]&&!n&&!this.target.has(e[0]).length&&i){this.hide(t)}})}if("number"===typeof n.hide.inactive){this._bind(o,"qtip-"+this.id+"-inactive",tt)
this._bind(a.add(r),y.inactiveEvents,tt,"-inactive")}this._bindEvents(d,p,o,a,J,Z)
this._bind(o.add(r),"mousemove",function(t){if("number"===typeof n.hide.distance){var e=this.cache.origin||{},i=this.options.hide.distance,s=Math.abs
if(s(t.pageX-e.pageX)>=i||s(t.pageY-e.pageY)>=i){this.hide(t)}}this._storeMouse(t)})
if(s.target==="mouse"){if(s.adjust.mouse){if(n.hide.event){this._bind(o,["mouseenter","mouseleave"],function(t){this.cache.onTarget=t.type==="mouseenter"})}this._bind(c,"mousemove",function(t){if(this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(O)&&this.tooltip[0].offsetWidth>0){this.reposition(t)}})}}if(s.adjust.resize||h.length){this._bind($.event.special.resize?h:f,"resize",et)}if(s.adjust.scroll){this._bind(f.add(s.container),"scroll",et)}}
b._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e]
this._unbind($([]).pushStack($.grep(i,function(t){return typeof t==="object"})))}
function st(t,i,o){var a,l,h,c,u,f=$(e.body),d=t[0]===e?f:t,p=t.metadata?t.metadata(o.metadata):r,m=o.metadata.type==="html5"&&p?p[o.metadata.name]:r,g=t.data(o.metadata.name||"qtipopts")
try{g=typeof g==="string"?$.parseJSON(g):g}catch(t){}c=$.extend(n,{},y.defaults,o,typeof g==="object"?q(g):r,q(m||p))
l=c.position
c.id=i
if("boolean"===typeof c.content.text){h=t.attr(c.content.attr)
if(c.content.attr!==s&&h){c.content.text=h}else{return s}}if(!l.container.length){l.container=f}if(l.target===s){l.target=d}if(c.show.target===s){c.show.target=d}if(c.show.solo===n){c.show.solo=l.container.closest("body")}if(c.hide.target===s){c.hide.target=d}if(c.position.viewport===n){c.position.viewport=l.container}l.container=l.container.eq(0)
l.at=new w(l.at,n)
l.my=new w(l.my)
if(t.data(k)){if(c.overwrite){t.qtip("destroy",true)}else if(c.overwrite===s){return s}}t.attr(T,i)
if(c.suppress&&(u=t.attr("title"))){t.removeAttr("title").attr(M,u).attr("title","")}a=new L(t,c,i,!!h)
t.data(k,a)
t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t
if(t=$(this).data(k)){t.destroy(true)}})
return a}y=$.fn.qtip=function(t,e,o){var a=(""+t).toLowerCase(),l=r,h=$.makeArray(arguments).slice(1),c=h[h.length-1],u=this[0]?$.data(this[0],k):r
if(!arguments.length&&u||a==="api"){return u}else if("string"===typeof t){this.each(function(){var t=$.data(this,k)
if(!t){return n}if(c&&c.timeStamp){t.cache.event=c}if(e&&(a==="option"||a==="options")){if(o!==i||$.isPlainObject(e)){t.set(e,o)}else{l=t.get(e)
return s}}else if(t[a]){t[a].apply(t,h)}})
return l!==r?l:this}else if("object"===typeof t||!arguments.length){u=q($.extend(n,{},t))
return this.each(function(t){var e,i
i=$.isArray(u.id)?u.id[t]:u.id
i=!i||i===s||i.length<1||y.api[i]?y.nextid++:i
e=st($(this),i,u)
if(e===s){return n}else{y.api[i]=e}$.each(C,function(){if(this.initialize==="initialize"){this(e)}})
e._assignInitialEvents(c)})}}
$.qtip=L
y.api={}
$.each({attr:function(t,e){if(this.length){var i=this[0],n="title",s=$.data(i,"qtip")
if(t===n&&s&&"object"===typeof s&&s.options.suppress){if(arguments.length<2){return $.attr(i,M)}if(s&&s.options.content.attr===n&&s.cache.attr){s.set("content.text",e)}return this.attr(M,e)}}return $.fn["attr"+z].apply(this,arguments)},clone:function(t){var e=$([]),i="title",n=$.fn["clone"+z].apply(this,arguments)
if(!t){n.filter("["+M+"]").attr("title",function(){return $.attr(this,M)}).removeAttr(M)}return n}},function(t,e){if(!e||$.fn[t+z]){return n}var i=$.fn[t+z]=$.fn[t]
$.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}})
if(!$.ui){$["cleanData"+z]=$.cleanData
$.cleanData=function(t){for(var e=0,i;(i=$(t[e])).length;e++){if(i.attr(T)){try{i.triggerHandler("removeqtip")}catch(t){}}}$["cleanData"+z].apply(this,arguments)}}y.version="2.2.0"
y.nextid=0
y.inactiveEvents=P
y.zindex=15e3
y.defaults={prerender:s,id:s,overwrite:n,suppress:n,content:{text:n,attr:"title",title:s,button:s},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:n,scroll:n,resize:n,method:"flipinvert flipinvert"},effect:function(t,e,i){$(this).animate(e,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:n,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:n,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:n},events:{render:r,move:r,show:r,hide:r,toggle:r,visible:r,hidden:r,focus:r,blur:r}}
var rt,ot=".qtip-tip",at="margin",lt="border",ht="color",ct="background-color",ut="transparent",ft=" !important",dt=!!e.createElement("canvas").getContext,pt=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i
function mt(t){return t.charAt(0).toUpperCase()+t.slice(1)}var gt={},vt=["Webkit","O","Moz","ms"]
function yt(t,e){var n=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+vt.join(n+" ")+n).split(" "),r,o,a=0
if(gt[e]){return t.css(gt[e])}while(r=s[a++]){if((o=t.css(r))!==i){return gt[e]=r,o}}}function bt(t,e){return Math.ceil(parseFloat(yt(t,e)))}if(!dt){var wt=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'}}else{var xt=t.devicePixelRatio||1,_t=function(){var t=e.createElement("canvas").getContext("2d")
return t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1}(),Ct=xt/_t}function kt(t,e){this._ns="tip"
this.options=e
this.offset=e.offset
this.size=[e.width,e.height]
this.init(this.qtip=t)}$.extend(kt.prototype,{init:function(t){var e,i
i=this.element=t.elements.tip=$("<div />",{class:k+"-tip"}).prependTo(t.tooltip)
if(dt){e=$("<canvas />").appendTo(this.element)[0].getContext("2d")
e.lineJoin="miter"
e.miterLimit=1e5
e.save()}else{e=wt("shape",'coordorigin="0,0"',"position:absolute;")
this.element.html(e+e)
t._bind($("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)}t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this)
this.create()},_swapDimensions:function(){this.size[0]=this.options.height
this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width
this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar
return e&&(t.y===c||t.y===p&&this.element.position().top+this.size[1]/2+this.options.offset<e.outerHeight(n))},_parseCorner:function(t){var e=this.qtip.options.position.my
if(t===s||e===s){t=s}else if(t===n){t=new w(e.string())}else if(!t.string){t=new w(t)
t.fixed=n}return t},_parseWidth:function(t,e,i){var n=this.qtip.elements,s=lt+mt(e)+"Width"
return(i?bt(i,s):bt(n.content,s)||bt(this._useTitle(t)&&n.titlebar||n.content,s)||bt(n.tooltip,s))||0},_parseRadius:function(t){var e=this.qtip.elements,i=lt+mt(t.y)+mt(t.x)+"Radius"
return W.ie<9?0:bt(this._useTitle(t)&&e.titlebar||e.content,i)||bt(e.tooltip,i)||0},_invalidColour:function(t,e,i){var n=t.css(e)
return!n||i&&n===t.css(i)||pt.test(n)?s:n},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),n=lt+mt(t[t.precedance])+mt(ht),s=this._useTitle(t)&&e.titlebar||e.content,r=this._invalidColour,o=[]
o[0]=r(i,ct)||r(s,ct)||r(e.content,ct)||r(e.tooltip,ct)||i.css(ct)
o[1]=r(i,n,ht)||r(s,n,ht)||r(e.content,n,ht)||r(e.tooltip,n,ht)||e.tooltip.css(n)
$("*",i).add(i).css("cssText",ct+":"+ut+ft+";"+lt+":0"+ft+";")
return o},_calculateSize:function(t){var e=t.precedance===a,i=this.options["width"],n=this.options["height"],s=t.abbrev()==="c",r=(e?i:n)*(s?.5:1),o=Math.pow,l=Math.round,h,c,u,f=Math.sqrt(o(r,2)+o(n,2)),d=[this.border/r*f,this.border/n*f]
d[2]=Math.sqrt(o(d[0],2)-o(this.border,2))
d[3]=Math.sqrt(o(d[1],2)-o(this.border,2))
h=f+d[2]+d[3]+(s?0:d[0])
c=h/f
u=[l(c*i),l(c*n)]
return e?u:u.reverse()},_calculateTip:function(t,e,i){i=i||1
e=e||this.size
var n=e[0]*i,s=e[1]*i,r=Math.ceil(n/2),o=Math.ceil(s/2),a={br:[0,0,n,s,n,0],bl:[0,0,n,0,0,s],tr:[0,s,n,0,n,s],tl:[0,0,0,s,n,s],tc:[0,s,r,0,n,s],bc:[0,0,n,0,r,s],rc:[0,0,n,o,0,s],lc:[n,0,n,s,0,o]}
a.lt=a.br
a.rt=a.bl
a.lb=a.tr
a.rb=a.tl
return a[t.abbrev()]},_drawCoords:function(t,e){t.beginPath()
t.moveTo(e[0],e[1])
t.lineTo(e[2],e[3])
t.lineTo(e[4],e[5])
t.closePath()},create:function(){var t=this.corner=(dt||W.ie)&&this._parseCorner(this.options.corner)
if(this.enabled=!!this.corner&&this.corner.abbrev()!=="c"){this.qtip.cache.corner=t.clone()
this.update()}this.element.toggle(this.enabled)
return this.corner},update:function(e,i){if(!this.enabled){return this}var r=this.qtip.elements,m=this.element,g=m.children(),v=this.options,y=this.size,b=v.mimic,x=Math.round,C,k,T,S,D,E,P,I,A
if(!e){e=this.qtip.cache.corner||this.corner}if(b===s){b=e}else{b=new w(b)
b.precedance=e.precedance
if(b.x==="inherit"){b.x=e.x}else if(b.y==="inherit"){b.y=e.y}else if(b.x===b.y){b[e.precedance]=e[e.precedance]}}k=b.precedance
if(e.precedance===o){this._swapDimensions()}else{this._resetDimensions()}C=this.color=this._parseColours(e)
if(C[1]!==ut){I=this.border=this._parseWidth(e,e[e.precedance])
if(v.border&&I<1&&!pt.test(C[1])){C[0]=C[1]}this.border=I=v.border!==n?v.border:I}else{this.border=I=0}P=this.size=this._calculateSize(e)
m.css({width:P[0],height:P[1],lineHeight:P[1]+"px"})
if(e.precedance===a){E=[x(b.x===u?I:b.x===d?P[0]-y[0]-I:(P[0]-y[0])/2),x(b.y===c?P[1]-y[1]:0)]}else{E=[x(b.x===u?P[0]-y[0]:0),x(b.y===c?I:b.y===f?P[1]-y[1]-I:(P[1]-y[1])/2)]}if(dt){T=g[0].getContext("2d")
T.restore()
T.save()
T.clearRect(0,0,6e3,6e3)
S=this._calculateTip(b,y,Ct)
D=this._calculateTip(b,this.size,Ct)
g.attr(l,P[0]*Ct).attr(h,P[1]*Ct)
g.css(l,P[0]).css(h,P[1])
this._drawCoords(T,D)
T.fillStyle=C[1]
T.fill()
T.translate(E[0]*Ct,E[1]*Ct)
this._drawCoords(T,S)
T.fillStyle=C[0]
T.fill()}else{S=this._calculateTip(b)
S="m"+S[0]+","+S[1]+" l"+S[2]+","+S[3]+" "+S[4]+","+S[5]+" xe"
E[2]=I&&/^(r|b)/i.test(e.string())?W.ie===8?2:1:0
g.css({coordsize:P[0]+I+" "+(P[1]+I),antialias:""+(b.string().indexOf(p)>-1),left:E[0]-E[2]*Number(k===o),top:E[1]-E[2]*Number(k===a),width:P[0]+I,height:P[1]+I}).each(function(t){var e=$(this)
e[e.prop?"prop":"attr"]({coordsize:P[0]+I+" "+(P[1]+I),path:S,fillcolor:C[0],filled:!!t,stroked:!t}).toggle(!!(I||t))
!t&&e.html(wt("stroke",'weight="'+I*2+'px" color="'+C[1]+'" miterlimit="1000" joinstyle="miter"'))})}t.opera&&setTimeout(function(){r.tip.css({display:"inline-block",visibility:"visible"})},1)
if(i!==s){this.calculate(e,P)}},calculate:function(t,e){if(!this.enabled){return s}var i=this,n=this.qtip.elements,r=this.element,l=this.options.offset,h=n.tooltip.hasClass("ui-widget"),f={},d,m
t=t||this.corner
d=t.precedance
e=e||this._calculateSize(t)
m=[t.x,t.y]
if(d===o){m.reverse()}$.each(m,function(s,r){var o,h,m
if(r===p){o=d===a?u:c
f[o]="50%"
f[at+"-"+o]=-Math.round(e[d===a?0:1]/2)+l}else{o=i._parseWidth(t,r,n.tooltip)
h=i._parseWidth(t,r,n.content)
m=i._parseRadius(t)
f[r]=Math.max(-i.border,s?h:l+(m>o?m:-o))}})
f[t[d]]-=e[d===o?0:1]
r.css({margin:"",top:"",bottom:"",left:"",right:""}).css(f)
return f},reposition:function(t,e,r,l){if(!this.enabled){return}var h=e.cache,m=this.corner.clone(),g=r.adjusted,y=e.options.position.adjust.method.split(" "),b=y[0],w=y[1]||y[0],x={left:s,top:s,x:0,y:0},C,k={},T
function S(t,e,i,n,s){if(t===v&&m.precedance===e&&g[n]&&m[i]!==p){m.precedance=m.precedance===o?a:o}else if(t!==v&&g[n]){m[e]=m[e]===p?g[n]>0?n:s:m[e]===n?s:n}}function D(t,e,n){if(m[t]===p){k[at+"-"+e]=x[t]=C[at+"-"+e]-g[e]}else{T=C[n]!==i?[g[e],-C[e]]:[-g[e],C[e]]
if((x[t]=Math.max(T[0],T[1]))>T[0]){r[e]-=g[e]
x[e]=s}k[C[n]!==i?n:e]=x[t]}}if(this.corner.fixed!==n){S(b,o,a,u,d)
S(w,a,o,c,f)
if(m.string()!==h.corner.string()&&(h.cornerTop!==g.top||h.cornerLeft!==g.left)){this.update(m,s)}}C=this.calculate(m)
if(C.right!==i){C.left=-C.right}if(C.bottom!==i){C.top=-C.bottom}C.user=this.offset
if(x.left=b===v&&!!g.left){D(o,u,d)}if(x.top=w===v&&!!g.top){D(a,c,f)}this.element.css(k).toggle(!(x.x&&x.y||m.x===p&&x.y||m.y===p&&x.x))
r.left-=C.left.charAt?C.user:b!==v||x.top||!x.left&&!x.top?C.left+this.border:0
r.top-=C.top.charAt?C.user:w!==v||x.left||!x.left&&!x.top?C.top+this.border:0
h.cornerLeft=g.left
h.cornerTop=g.top
h.corner=m.clone()},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns)
if(this.qtip.elements.tip){this.qtip.elements.tip.find("*").remove().end().remove()}}})
rt=C.tip=function(t){return new kt(t,t.options.style.tip)}
rt.initialize="render"
rt.sanitize=function(t){if(t.style&&"tip"in t.style){var e=t.style.tip
if(typeof e!=="object"){e=t.style.tip={corner:e}}if(!/string|boolean/i.test(typeof e.corner)){e.corner=n}}}
x.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create()
this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=[t.width,t.height]
this.update()
this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}}
$.extend(n,y.defaults,{style:{tip:{corner:n,mimic:s,width:6,height:6,border:n,offset:0}}})
var Tt,St,Dt="qtip-modal",Et="."+Dt
St=function(){var t=this,i={},o,a,l,h
function c(t){if($.expr[":"].focusable){return $.expr[":"].focusable}var e=!isNaN($.attr(t,"tabindex")),i=t.nodeName&&t.nodeName.toLowerCase(),n,s,r
if("area"===i){n=t.parentNode
s=n.name
if(!t.href||!s||n.nodeName.toLowerCase()!=="map"){return false}r=$("img[usemap=#"+s+"]")[0]
return!!r&&r.is(":visible")}return/input|select|textarea|button|object/.test(i)?!t.disabled:"a"===i?t.href||e:e}function u(t){if(i.length<1&&t.length){t.not("body").blur()}else{i.first().focus()}}function f(t){if(!h.is(":visible")){return}var e=$(t.target),n=o.tooltip,r=e.closest(E),l
l=r.length<1?s:parseInt(r[0].style.zIndex,10)>parseInt(n[0].style.zIndex,10)
if(!l&&e.closest(E)[0]!==n[0]){u(e)}a=t.target===i[i.length-1]}$.extend(t,{init:function(){h=t.elem=$("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return s}}).hide()
$(e.body).bind("focusin"+Et,f)
$(e).bind("keydown"+Et,function(t){if(o&&o.options.show.modal.escape&&t.keyCode===27){o.hide(t)}})
h.bind("click"+Et,function(t){if(o&&o.options.show.modal.blur){o.hide(t)}})
return t},update:function(t){o=t
if(t.options.show.modal.stealfocus!==s){i=t.tooltip.find("*").filter(function(){return c(this)})}else{i=[]}},toggle:function(i,a,c){var f=$(e.body),d=i.tooltip,p=i.options.show.modal,m=p.effect,g=a?"show":"hide",v=h.is(":visible"),y=$(Et).filter(":visible:not(:animated)").not(d),b
t.update(i)
if(a&&p.stealfocus!==s){u($(":focus"))}h.toggleClass("blurs",p.blur)
if(a){h.appendTo(e.body)}if(h.is(":animated")&&v===a&&l!==s||!a&&y.length){return t}h.stop(n,s)
if($.isFunction(m)){m.call(h,a)}else if(m===s){h[g]()}else{h.fadeTo(parseInt(c,10)||90,a?1:0,function(){if(!a){h.hide()}})}if(!a){h.queue(function(t){h.css({left:"",top:""})
if(!$(Et).length){h.detach()}t()})}l=a
if(o.destroyed){o=r}return t}})
t.init()}
St=new St
function Pt(t,e){this.options=e
this._ns="-modal"
this.init(this.qtip=t)}$.extend(Pt.prototype,{init:function(t){var e=t.tooltip
if(!this.options.on){return this}t.elements.overlay=St.elem
e.addClass(Dt).css("z-index",y.modal_zindex+$(Et).length)
t._bind(e,["tooltipshow","tooltiphide"],function(t,i,n){var s=t.originalEvent
if(t.target===e[0]){if(s&&t.type==="tooltiphide"&&/mouse(leave|enter)/.test(s.type)&&$(s.relatedTarget).closest(St.elem[0]).length){try{t.preventDefault()}catch(t){}}else if(!s||s&&s.type!=="tooltipsolo"){this.toggle(t,t.type==="tooltipshow",n)}}},this._ns,this)
t._bind(e,"tooltipfocus",function(t,i){if(t.isDefaultPrevented()||t.target!==e[0]){return}var n=$(Et),s=y.modal_zindex+n.length,r=parseInt(e[0].style.zIndex,10)
St.elem[0].style.zIndex=s-1
n.each(function(){if(this.style.zIndex>r){this.style.zIndex-=1}})
n.filter("."+N).qtip("blur",t.originalEvent)
e.addClass(N)[0].style.zIndex=s
St.update(i)
try{t.preventDefault()}catch(t){}},this._ns,this)
t._bind(e,"tooltiphide",function(t){if(t.target===e[0]){$(Et).filter(":visible").not(e).last().qtip("focus",t)}},this._ns,this)},toggle:function(t,e,i){if(t&&t.isDefaultPrevented()){return this}St.toggle(this.qtip,!!e,i)},destroy:function(){this.qtip.tooltip.removeClass(Dt)
this.qtip._unbind(this.qtip.tooltip,this._ns)
St.toggle(this.qtip,s)
delete this.qtip.elements.overlay}})
Tt=C.modal=function(t){return new Pt(t,t.options.show.modal)}
Tt.sanitize=function(t){if(t.show){if(typeof t.show.modal!=="object"){t.show.modal={on:!!t.show.modal}}else if(typeof t.show.modal.on==="undefined"){t.show.modal.on=n}}}
y.modal_zindex=y.zindex-200
Tt.initialize="render"
x.modal={"^show.modal.(on|blur)$":function(){this.destroy()
this.init()
this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}}
$.extend(n,y.defaults,{show:{modal:{on:s,effect:n,blur:n,stealfocus:n,escape:n}}})
C.viewport=function(i,n,r,m,y,b,w){var x=r.target,C=i.elements.tooltip,T=r.my,S=r.at,D=r.adjust,E=D.method.split(" "),P=E[0],I=E[1]||E[0],A=r.viewport,N=r.container,H=i.cache,O={left:0,top:0},z,M,j,W,L,R,F,q,B
if(!A.jquery||x[0]===t||x[0]===e.body||D.method==="none"){return O}W=N.offset()||O
L=N.css("position")==="static"
z=C.css("position")==="fixed"
R=A[0]===t?A.width():A.outerWidth(s)
F=A[0]===t?A.height():A.outerHeight(s)
q={left:z?0:A.scrollLeft(),top:z?0:A.scrollTop()}
B=A.offset()||O
function V(t,e,i,s,r,o,a,h,c){var u=n[r],f=T[t],d=S[t],m=i===v,y=f===r?c:f===o?-c:-c/2,b=d===r?h:d===o?-h:-h/2,w=q[r]+B[r]-(L?0:W[r]),x=w-u,C=u+c-(a===l?R:F)-w,k=y-(T.precedance===t||f===T[e]?b:0)-(d===p?h/2:0)
if(m){k=(f===r?1:-1)*y
n[r]+=x>0?x:C>0?-C:0
n[r]=Math.max(-W[r]+B[r],u-k,Math.min(Math.max(-W[r]+B[r]+(a===l?R:F),u+k),n[r],f==="center"?u-y:1e9))}else{s*=i===g?2:0
if(x>0&&(f!==r||C>0)){n[r]-=k+s
M.invert(t,r)}else if(C>0&&(f!==o||x>0)){n[r]-=(f===p?-k:k)+s
M.invert(t,o)}if(n[r]<q&&-n[r]>C){n[r]=u
M=T.clone()}}return n[r]-u}if(P!=="shift"||I!=="shift"){M=T.clone()}O={left:P!=="none"?V(o,a,P,D.x,u,d,l,m,b):0,top:I!=="none"?V(a,o,I,D.y,c,f,h,y,w):0}
if(M&&H.lastClass!==(j=k+"-pos-"+M.abbrev())){C.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=j)}return O}
C.polys={polygon:function(t,e){var i={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:s},n=0,r,o=[],a=1,l=1,h=0,m=0,g,v
n=t.length
while(n--){r=[parseInt(t[--n],10),parseInt(t[n+1],10)]
if(r[0]>i.position.right){i.position.right=r[0]}if(r[0]<i.position.left){i.position.left=r[0]}if(r[1]>i.position.bottom){i.position.bottom=r[1]}if(r[1]<i.position.top){i.position.top=r[1]}o.push(r)}g=i.width=Math.abs(i.position.right-i.position.left)
v=i.height=Math.abs(i.position.bottom-i.position.top)
if(e.abbrev()==="c"){i.position={left:i.position.left+i.width/2,top:i.position.top+i.height/2}}else{while(g>0&&v>0&&a>0&&l>0){g=Math.floor(g/2)
v=Math.floor(v/2)
if(e.x===u){a=g}else if(e.x===d){a=i.width-g}else{a+=Math.floor(g/2)}if(e.y===c){l=v}else if(e.y===f){l=i.height-v}else{l+=Math.floor(v/2)}n=o.length
while(n--){if(o.length<2){break}h=o[n][0]-i.position.left
m=o[n][1]-i.position.top
if(e.x===u&&h>=a||e.x===d&&h<=a||e.x===p&&(h<a||h>i.width-a)||e.y===c&&m>=l||e.y===f&&m<=l||e.y===p&&(m<l||m>i.height-l)){o.splice(n,1)}}}i.position={left:o[0][0],top:o[0][1]}}return i},rect:function(t,e,i,n){return{width:Math.abs(i-t),height:Math.abs(n-e),position:{left:Math.min(t,i),top:Math.min(e,n)}}},_angles:{tc:3/2,tr:7/4,tl:5/4,bc:1/2,br:1/4,bl:3/4,rc:2,lc:1,c:0},ellipse:function(t,e,i,n,r){var o=C.polys._angles[r.abbrev()],a=o===0?0:i*Math.cos(o*Math.PI),l=n*Math.sin(o*Math.PI)
return{width:i*2-Math.abs(a),height:n*2-Math.abs(l),position:{left:t+a,top:e+l},adjustable:s}},circle:function(t,e,i,n){return C.polys.ellipse(t,e,i,i,n)}}
C.svg=function(t,i,n){var r=$(e),o=i[0],a=$(o.ownerSVGElement),l=1,h=1,c=true,u,f,d,p,m,g,v,y,b,w,x,k
while(!o.getBBox){o=o.parentNode}if(!o.getBBox||!o.parentNode){return s}u=a.attr("width")||a.width()||parseInt(a.css("width"),10)
f=a.attr("height")||a.height()||parseInt(a.css("height"),10)
var T=(parseInt(i.css("stroke-width"),10)||0)/2
if(T){l+=T/u
h+=T/f}switch(o.nodeName){case"ellipse":case"circle":w=C.polys.ellipse(o.cx.baseVal.value,o.cy.baseVal.value,(o.rx||o.r).baseVal.value+T,(o.ry||o.r).baseVal.value+T,n)
break
case"line":case"polygon":case"polyline":b=o.points||[{x:o.x1.baseVal.value,y:o.y1.baseVal.value},{x:o.x2.baseVal.value,y:o.y2.baseVal.value}]
for(w=[],y=-1,g=b.numberOfItems||b.length;++y<g;){v=b.getItem?b.getItem(y):b[y]
w.push.apply(w,[v.x,v.y])}w=C.polys.polygon(w,n)
break
default:w=o.getBoundingClientRect()
w={width:w.width,height:w.height,position:{left:w.left,top:w.top}}
c=false
break}x=w.position
a=a[0]
if(c){if(a.createSVGPoint){d=o.getScreenCTM()
b=a.createSVGPoint()
b.x=x.left
b.y=x.top
p=b.matrixTransform(d)
x.left=p.x
x.top=p.y}if(a.viewBox&&(m=a.viewBox.baseVal)&&m.width&&m.height){l*=u/m.width
h*=f/m.height}}x.left+=r.scrollLeft()
x.top+=r.scrollTop()
return w}
C.imagemap=function(t,e,i,n){if(!e.jquery){e=$(e)}var r=e.attr("shape").toLowerCase().replace("poly","polygon"),o=$('img[usemap="#'+e.parent("map").attr("name")+'"]'),a=$.trim(e.attr("coords")),l=a.replace(/,$/,"").split(","),h,c,u,f,d,p
if(!o.length){return s}if(r==="polygon"){d=C.polys.polygon(l,i)}else if(C.polys[r]){for(u=-1,p=l.length,c=[];++u<p;){c.push(parseInt(l[u],10))}d=C.polys[r].apply(this,c.concat(i))}else{return s}h=o.offset()
h.left+=Math.ceil((o.outerWidth(s)-o.width())/2)
h.top+=Math.ceil((o.outerHeight(s)-o.height())/2)
d.position.left+=h.left
d.position.top+=h.top
return d}
var It,At='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" '+' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); '+'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'
function Nt(t,e){this._ns="ie6"
this.init(this.qtip=t)}$.extend(Nt.prototype,{_scroll:function(){var e=this.qtip.elements.overlay
e&&(e[0].style.top=$(t).scrollTop()+"px")},init:function(i){var n=i.tooltip,s
if($("select, object").length<1){this.bgiframe=i.elements.bgiframe=$(At).appendTo(n)
i._bind(n,"tooltipmove",this.adjustBGIFrame,this._ns,this)}this.redrawContainer=$("<div/>",{id:k+"-rcontainer"}).appendTo(e.body)
if(i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")){i._bind(t,["scroll","resize"],this._scroll,this._ns,this)
i._bind(n,["tooltipshow"],this._scroll,this._ns,this)}this.redraw()},adjustBGIFrame:function(){var t=this.qtip.tooltip,e={height:t.outerHeight(s),width:t.outerWidth(s)},i=this.qtip.plugins.tip,n=this.qtip.elements.tip,r,o
o=parseInt(t.css("borderLeftWidth"),10)||0
o={left:-o,top:-o}
if(i&&n){r=i.corner.precedance==="x"?[l,u]:[h,c]
o[r[1]]-=n[r[0]]()}this.bgiframe.css(o).css(e)},redraw:function(){if(this.qtip.rendered<1||this.drawing){return this}var t=this.qtip.tooltip,e=this.qtip.options.style,i=this.qtip.options.position.container,n,s,r,o
this.qtip.drawing=1
if(e.height){t.css(h,e.height)}if(e.width){t.css(l,e.width)}else{t.css(l,"").appendTo(this.redrawContainer)
s=t.width()
if(s%2<1){s+=1}r=t.css("maxWidth")||""
o=t.css("minWidth")||""
n=(r+o).indexOf("%")>-1?i.width()/100:0
r=(r.indexOf("%")>-1?n:1)*parseInt(r,10)||s
o=(o.indexOf("%")>-1?n:1)*parseInt(o,10)||0
s=r+o?Math.min(Math.max(s,o),r):s
t.css(l,Math.round(s)).appendTo(i)}this.drawing=0
return this},destroy:function(){this.bgiframe&&this.bgiframe.remove()
this.qtip._unbind([t,this.qtip.tooltip],this._ns)}})
It=C.ie6=function(t){return W.ie===6?new Nt(t):s}
It.initialize="render"
x.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);(function($){if(typeof $.fn.each2=="undefined"){$.fn.extend({each2:function(t){var e=$([0]),i=-1,n=this.length
while(++i<n&&(e.context=e[0]=this[i])&&t.call(e[0],i,e)!==false);return this}})}})(jQuery);(function($,t){"use strict"
if(window.Select2!==t){return}var e,i,n,s,r,o,a={x:0,y:0},l,h,e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(t){t=t.which?t.which:t
switch(t){case e.LEFT:case e.RIGHT:case e.UP:case e.DOWN:return true}return false},isControl:function(t){var i=t.which
switch(i){case e.SHIFT:case e.CTRL:case e.ALT:return true}if(t.metaKey)return true
return false},isFunctionKey:function(t){t=t.which?t.which:t
return t>=112&&t<=123}},c="<div class='select2-measure-scrollbar'></div>"
l=$(document)
r=function(){var t=1
return function(){return t++}}()
function u(t,e){var i=0,n=e.length
for(;i<n;i=i+1){if(d(t,e[i]))return i}return-1}function f(){var t=$(c)
t.appendTo("body")
var e={width:t.width()-t[0].clientWidth,height:t.height()-t[0].clientHeight}
t.remove()
return e}function d(e,i){if(e===i)return true
if(e===t||i===t)return false
if(e===null||i===null)return false
if(e.constructor===String)return e+""===i+""
if(i.constructor===String)return i+""===e+""
return false}function p(t,e){var i,n,s
if(t===null||t.length<1)return[]
i=t.split(e)
for(n=0,s=i.length;n<s;n=n+1)i[n]=$.trim(i[n])
return i}function m(t){return t.outerWidth(false)-t.width()}function g(e){var i="keyup-change-value"
e.on("keydown",function(){if($.data(e,i)===t){$.data(e,i,e.val())}})
e.on("keyup",function(){var n=$.data(e,i)
if(n!==t&&e.val()!==n){$.removeData(e,i)
e.trigger("keyup-change")}})}l.on("mousemove",function(t){a.x=t.pageX
a.y=t.pageY})
function v(e){e.on("mousemove",function(e){var i=a
if(i===t||i.x!==e.pageX||i.y!==e.pageY){$(e.target).trigger("mousemove-filtered",e)}})}function y(e,i,n){n=n||t
var s
return function(){var t=arguments
window.clearTimeout(s)
s=window.setTimeout(function(){i.apply(n,t)},e)}}function b(t){var e=false,i
return function(){if(e===false){i=t()
e=true}return i}}function w(t,e){var i=y(t,function(t){e.trigger("scroll-debounced",t)})
e.on("scroll",function(t){if(u(t.target,e.get())>=0)i(t)})}function x(t){if(t[0]===document.activeElement)return
window.setTimeout(function(){var e=t[0],i=t.val().length,n
t.focus()
if(t.is(":visible")&&e===document.activeElement){if(e.setSelectionRange){e.setSelectionRange(i,i)}else if(e.createTextRange){n=e.createTextRange()
n.collapse(false)
n.select()}}},0)}function C(t){t=$(t)[0]
var e=0
var i=0
if("selectionStart"in t){e=t.selectionStart
i=t.selectionEnd-e}else if("selection"in document){t.focus()
var n=document.selection.createRange()
i=document.selection.createRange().text.length
n.moveStart("character",-t.value.length)
e=n.text.length-i}return{offset:e,length:i}}function k(t){t.preventDefault()
t.stopPropagation()}function T(t){t.preventDefault()
t.stopImmediatePropagation()}function S(t){if(!o){var e=t[0].currentStyle||window.getComputedStyle(t[0],null)
o=$(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:e.fontSize,fontFamily:e.fontFamily,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,textTransform:e.textTransform,whiteSpace:"nowrap"})
o.attr("class","select2-sizer")
$("body").append(o)}o.text(t.val())
return o.width()}function D(t,e,i){var n,s=[],r
n=t.attr("class")
if(n){n=""+n
$(n.split(" ")).each2(function(){if(this.indexOf("select2-")===0){s.push(this)}})}n=e.attr("class")
if(n){n=""+n
$(n.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){r=i(this)
if(r){s.push(this)}}})}t.attr("class",s.join(" "))}function E(t,e,i,n){var s=t.toUpperCase().indexOf(e.toUpperCase()),r=e.length
if(s<0){i.push(n(t))
return}i.push(n(t.substring(0,s)))
i.push("<span class='select2-match'>")
i.push(n(t.substring(s,s+r)))
i.push("</span>")
i.push(n(t.substring(s+r,t.length)))}function P(t){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"}
return String(t).replace(/[&<>"'\/\\]/g,function(t){return e[t]})}function I(e){var i,n=0,s=null,r=e.quietMillis||100,o=e.url,a=this
return function(l){window.clearTimeout(i)
i=window.setTimeout(function(){n+=1
var i=n,r=e.data,h=o,c=e.transport||$.fn.select2.ajaxDefaults.transport,u={type:e.type||"GET",cache:e.cache||false,jsonpCallback:e.jsonpCallback||t,dataType:e.dataType||"json"},f=$.extend({},$.fn.select2.ajaxDefaults.params,u)
r=r?r.call(a,l.term,l.page,l.context):null
h=typeof h==="function"?h.call(a,l.term,l.page,l.context):h
if(s){s.abort()}if(e.params){if($.isFunction(e.params)){$.extend(f,e.params.call(a))}else{$.extend(f,e.params)}}$.extend(f,{url:h,dataType:e.dataType,data:r,success:function(t){if(i<n){return}var s=e.results(t,l.page)
l.callback(s)}})
s=c.call(a,f)},r)}}function A(t){var e=t,i,n,s=function(t){return""+t.text}
if($.isArray(e)){n=e
e={results:n}}if($.isFunction(e)===false){n=e
e=function(){return n}}var r=e()
if(r.text){s=r.text
if(!$.isFunction(s)){i=r.text
s=function(t){return t[i]}}}return function(t){var i=t.term,n={results:[]},r
if(i===""){t.callback(e())
return}r=function(e,n){var o,a
e=e[0]
if(e.children){o={}
for(a in e){if(e.hasOwnProperty(a))o[a]=e[a]}o.children=[]
$(e.children).each2(function(t,e){r(e,o.children)})
if(o.children.length||t.matcher(i,s(o),e)){n.push(o)}}else{if(t.matcher(i,s(e),e)){n.push(e)}}}
$(e().results).each2(function(t,e){r(e,n.results)})
t.callback(n)}}function N(e){var i=$.isFunction(e)
return function(n){var s=n.term,r={results:[]}
$(i?e():e).each(function(){var e=this.text!==t,i=e?this.text:this
if(s===""||n.matcher(s,i)){r.results.push(e?this:{id:this,text:this})}})
n.callback(r)}}function H(t,e){if($.isFunction(t))return true
if(!t)return false
throw new Error(e+" must be a function or a falsy value")}function O(t){return $.isFunction(t)?t():t}function z(t){var e=0
$.each(t,function(t,i){if(i.children){e+=z(i.children)}else{e++}})
return e}function M(e,i,n,s){var r=e,o=false,a,l,h,c,u
if(!s.createSearchChoice||!s.tokenSeparators||s.tokenSeparators.length<1)return t
while(true){l=-1
for(h=0,c=s.tokenSeparators.length;h<c;h++){u=s.tokenSeparators[h]
l=e.indexOf(u)
if(l>=0)break}if(l<0)break
a=e.substring(0,l)
e=e.substring(l+u.length)
if(a.length>0){a=s.createSearchChoice.call(this,a,i)
if(a!==t&&a!==null&&s.id(a)!==t&&s.id(a)!==null){o=false
for(h=0,c=i.length;h<c;h++){if(d(s.id(a),s.id(i[h]))){o=true
break}}if(!o)n(a)}}}if(r!==e)return e}function j(t,e){var i=function(){}
i.prototype=new t
i.prototype.constructor=i
i.prototype.parent=t.prototype
i.prototype=$.extend(i.prototype,e)
return i}i=j(Object,{bind:function(t){var e=this
return function(){t.apply(e,arguments)}},init:function(e){var i,n,s=".select2-results",o,a
this.opts=e=this.prepareOpts(e)
this.id=e.id
if(e.element.data("select2")!==t&&e.element.data("select2")!==null){e.element.data("select2").destroy()}this.container=this.createContainer()
this.containerId="s2id_"+(e.element.attr("id")||"autogen"+r())
this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")
this.container.attr("id",this.containerId)
this.body=b(function(){return e.element.closest("body")})
D(this.container,this.opts.element,this.opts.adaptContainerCssClass)
this.container.css(O(e.containerCss))
this.container.addClass(O(e.containerCssClass))
this.elementTabIndex=this.opts.element.attr("tabindex")
this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container)
this.container.data("select2",this)
this.dropdown=this.container.find(".select2-drop")
this.dropdown.addClass(O(e.dropdownCssClass))
this.dropdown.data("select2",this)
this.results=i=this.container.find(s)
this.search=n=this.container.find("input.select2-input")
this.resultsPage=0
this.context=null
this.initContainer()
v(this.results)
this.dropdown.on("mousemove-filtered touchstart touchmove touchend",s,this.bind(this.highlightUnderEvent))
w(80,this.results)
this.dropdown.on("scroll-debounced",s,this.bind(this.loadMoreIfNeeded))
$(this.container).on("change",".select2-input",function(t){t.stopPropagation()})
$(this.dropdown).on("change",".select2-input",function(t){t.stopPropagation()})
if($.fn.mousewheel){i.mousewheel(function(t,e,n,s){var r=i.scrollTop(),o
if(s>0&&r-s<=0){i.scrollTop(0)
k(t)}else if(s<0&&i.get(0).scrollHeight-i.scrollTop()+s<=i.height()){i.scrollTop(i.get(0).scrollHeight-i.height())
k(t)}})}g(n)
n.on("keyup-change input paste",this.bind(this.updateResults))
n.on("focus",function(){n.addClass("select2-focused")})
n.on("blur",function(){n.removeClass("select2-focused")})
this.dropdown.on("mouseup",s,this.bind(function(t){if($(t.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(t)
this.selectHighlighted(t)}}))
this.dropdown.on("click mouseup mousedown",function(t){t.stopPropagation()})
if($.isFunction(this.opts.initSelection)){this.initSelection()
this.monitorSource()}if(e.maximumInputLength!==null){this.search.attr("maxlength",e.maximumInputLength)}var o=e.element.prop("disabled")
if(o===t)o=false
this.enable(!o)
var a=e.element.prop("readonly")
if(a===t)a=false
this.readonly(a)
h=h||f()
this.autofocus=e.element.prop("autofocus")
e.element.prop("autofocus",false)
if(this.autofocus)this.focus()},destroy:function(){var e=this.opts.element,i=e.data("select2")
if(this.propertyObserver){delete this.propertyObserver
this.propertyObserver=null}if(i!==t){i.container.remove()
i.dropdown.remove()
e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||false)
if(this.elementTabIndex){e.attr({tabindex:this.elementTabIndex})}else{e.removeAttr("tabindex")}e.show()}},optionToData:function(t){if(t.is("option")){return{id:t.prop("value"),text:t.text(),element:t.get(),css:t.attr("class"),disabled:t.prop("disabled"),locked:d(t.attr("locked"),"locked")||d(t.data("locked"),true)}}else if(t.is("optgroup")){return{text:t.attr("label"),children:[],element:t.get(),css:t.attr("class")}}},prepareOpts:function(e){var i,n,s,r,o=this
i=e.element
if(i.get(0).tagName.toLowerCase()==="select"){this.select=n=e.element}if(n){$.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in e){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}})}e=$.extend({},{populateResults:function(i,n,s){var r,a,l,h,c=this.opts.id
r=function(i,n,a){var l,h,u,f,d,p,m,g,v,y
i=e.sortResults(i,n,s)
for(l=0,h=i.length;l<h;l=l+1){u=i[l]
d=u.disabled===true
f=!d&&c(u)!==t
p=u.children&&u.children.length>0
m=$("<li></li>")
m.addClass("select2-results-dept-"+a)
m.addClass("select2-result")
m.addClass(f?"select2-result-selectable":"select2-result-unselectable")
if(d){m.addClass("select2-disabled")}if(p){m.addClass("select2-result-with-children")}m.addClass(o.opts.formatResultCssClass(u))
g=$(document.createElement("div"))
g.addClass("select2-result-label")
y=e.formatResult(u,g,s,o.opts.escapeMarkup)
if(y!==t){g.html(y)}m.append(g)
if(p){v=$("<ul></ul>")
v.addClass("select2-result-sub")
r(u.children,v,a+1)
m.append(v)}m.data("select2-data",u)
n.append(m)}}
r(n,i,0)}},$.fn.select2.defaults,e)
if(typeof e.id!=="function"){s=e.id
e.id=function(t){return t[s]}}if($.isArray(e.element.data("select2Tags"))){if("tags"in e){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+e.element.attr("id")}e.tags=e.element.data("select2Tags")}if(n){e.query=this.bind(function(e){var n={results:[],more:false},s=e.term,r,a,l
l=function(t,i){var n
if(t.is("option")){if(e.matcher(s,t.text(),t)){i.push(o.optionToData(t))}}else if(t.is("optgroup")){n=o.optionToData(t)
t.children().each2(function(t,e){l(e,n.children)})
if(n.children.length>0){i.push(n)}}}
r=i.children()
if(this.getPlaceholder()!==t&&r.length>0){a=this.getPlaceholderOption()
if(a){r=r.not(a)}}r.each2(function(t,e){l(e,n.results)})
e.callback(n)})
e.id=function(t){return t.id}
e.formatResultCssClass=function(t){return t.css}}else{if(!("query"in e)){if("ajax"in e){r=e.element.data("ajax-url")
if(r&&r.length>0){e.ajax.url=r}e.query=I.call(e.element,e.ajax)}else if("data"in e){e.query=A(e.data)}else if("tags"in e){e.query=N(e.tags)
if(e.createSearchChoice===t){e.createSearchChoice=function(t){return{id:t,text:t}}}if(e.initSelection===t){e.initSelection=function(t,i){var n=[]
$(p(t.val(),e.separator)).each(function(){var t=this,i=this,s=e.tags
if($.isFunction(s))s=s()
$(s).each(function(){if(d(this.id,t)){i=this.text
return false}})
n.push({id:t,text:i})})
i(n)}}}}}if(typeof e.query!=="function"){throw"query function not defined for Select2 "+e.element.attr("id")}return e},monitorSource:function(){var e=this.opts.element,i
e.on("change.select2",this.bind(function(t){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection()}}))
i=this.bind(function(){var i,n,s=this
var r=e.prop("disabled")
if(r===t)r=false
this.enable(!r)
var n=e.prop("readonly")
if(n===t)n=false
this.readonly(n)
D(this.container,this.opts.element,this.opts.adaptContainerCssClass)
this.container.addClass(O(this.opts.containerCssClass))
D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass)
this.dropdown.addClass(O(this.opts.dropdownCssClass))})
e.on("propertychange.select2 DOMAttrModified.select2",i)
if(this.mutationCallback===t){this.mutationCallback=function(t){t.forEach(i)}}if(typeof WebKitMutationObserver!=="undefined"){if(this.propertyObserver){delete this.propertyObserver
this.propertyObserver=null}this.propertyObserver=new WebKitMutationObserver(this.mutationCallback)
this.propertyObserver.observe(e.get(0),{attributes:true,subtree:false})}},triggerSelect:function(t){var e=$.Event("select2-selecting",{val:this.id(t),object:t})
this.opts.element.trigger(e)
return!e.isDefaultPrevented()},triggerChange:function(t){t=t||{}
t=$.extend({},t,{type:"change",val:this.val()})
this.opts.element.data("select2-change-triggered",true)
this.opts.element.trigger(t)
this.opts.element.data("select2-change-triggered",false)
this.opts.element.click()
if(this.opts.blurOnChange)this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===true},enableInterface:function(){var t=this._enabled&&!this._readonly,e=!t
if(t===this.enabledInterface)return false
this.container.toggleClass("select2-container-disabled",e)
this.close()
this.enabledInterface=t
return true},enable:function(e){if(e===t)e=true
if(this._enabled===e)return false
this._enabled=e
this.opts.element.prop("disabled",!e)
this.enableInterface()
return true},readonly:function(e){if(e===t)e=false
if(this._readonly===e)return false
this._readonly=e
this.opts.element.prop("readonly",e)
this.enableInterface()
return true},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t=this.dropdown,e=this.container.offset(),i=this.container.outerHeight(false),n=this.container.outerWidth(false),s=t.outerHeight(false),r=$(window).scrollLeft()+$(window).width(),o=$(window).scrollTop()+$(window).height(),a=e.top+i,l=e.left,c=a+s<=o,u=e.top-s>=this.body().scrollTop(),f=t.outerWidth(false),d=l+f<=r,p=t.hasClass("select2-drop-above"),m,g,v,y
if(this.opts.dropdownAutoWidth){y=$(".select2-results",t)[0]
t.addClass("select2-drop-auto-width")
t.css("width","")
f=t.outerWidth(false)+(y.scrollHeight===y.clientHeight?0:h.width)
f>n?n=f:f=n
d=l+f<=r}else{this.container.removeClass("select2-drop-auto-width")}if(this.body().css("position")!=="static"){m=this.body().offset()
a-=m.top
l-=m.left}if(p){g=true
if(!u&&c)g=false}else{g=false
if(!c&&u)g=true}if(!d){l=e.left+n-f}if(g){a=e.top-s
this.container.addClass("select2-drop-above")
t.addClass("select2-drop-above")}else{this.container.removeClass("select2-drop-above")
t.removeClass("select2-drop-above")}v=$.extend({top:a,left:l,width:n},O(this.opts.dropdownCss))
t.css(v)},shouldOpen:function(){var t
if(this.opened())return false
if(this._enabled===false||this._readonly===true)return false
t=$.Event("select2-opening")
this.opts.element.trigger(t)
return!t.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above")
this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return false
this.opening()
return true},opening:function(){var t=this.containerId,e="scroll."+t,i="resize."+t,n="orientationchange."+t,s,r
this.container.addClass("select2-dropdown-open").addClass("select2-container-active")
this.clearDropdownAlignmentPreference()
if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}s=$("#select2-drop-mask")
if(s.length==0){s=$(document.createElement("div"))
s.attr("id","select2-drop-mask").attr("class","select2-drop-mask")
s.hide()
s.appendTo(this.body())
s.on("mousedown touchstart click",function(t){var e=$("#select2-drop"),i
if(e.length>0){i=e.data("select2")
if(i.opts.selectOnBlur){i.selectHighlighted({noFocus:true})}i.close()
t.preventDefault()
t.stopPropagation()}})}if(this.dropdown.prev()[0]!==s[0]){this.dropdown.before(s)}$("#select2-drop").removeAttr("id")
this.dropdown.attr("id","select2-drop")
r=a()
s.css(r).show()
this.dropdown.show()
this.positionDropdown()
this.dropdown.addClass("select2-drop-active")
var o=this
this.container.parents().add(window).each(function(){$(this).on(i+" "+e+" "+n,function(t){var e=a()
$("#select2-drop-mask").css(e)
o.positionDropdown()})})
function a(){return{width:Math.max(document.documentElement.scrollWidth,$(window).width()),height:Math.max(document.documentElement.scrollHeight,$(window).height())}}},close:function(){if(!this.opened())return
var t=this.containerId,e="scroll."+t,i="resize."+t,n="orientationchange."+t
this.container.parents().add(window).each(function(){$(this).off(e).off(i).off(n)})
this.clearDropdownAlignmentPreference()
$("#select2-drop-mask").hide()
this.dropdown.removeAttr("id")
this.dropdown.hide()
this.container.removeClass("select2-dropdown-open")
this.results.empty()
this.clearSearch()
this.search.removeClass("select2-active")
this.opts.element.trigger($.Event("select2-close"))},externalSearch:function(t){this.open()
this.search.val(t)
this.updateResults(false)},clearSearch:function(){},getMaximumSelectionSize:function(){return O(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var t=this.results,e,i,n,s,r,o,a
i=this.highlight()
if(i<0)return
if(i==0){t.scrollTop(0)
return}e=this.findHighlightableChoices().find(".select2-result-label")
n=$(e[i])
s=n.offset().top+n.outerHeight(true)
if(i===e.length-1){a=t.find("li.select2-more-results")
if(a.length>0){s=a.offset().top+a.outerHeight(true)}}r=t.offset().top+t.outerHeight(true)
if(s>r){t.scrollTop(t.scrollTop()+(s-r))}o=n.offset().top-t.offset().top
if(o<0&&n.css("display")!="none"){t.scrollTop(t.scrollTop()+o)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(t){var e=this.findHighlightableChoices(),i=this.highlight()
while(i>-1&&i<e.length){i+=t
var n=$(e[i])
if(n.hasClass("select2-result-selectable")&&!n.hasClass("select2-disabled")&&!n.hasClass("select2-selected")){this.highlight(i)
break}}},highlight:function(t){var e=this.findHighlightableChoices(),i,n
if(arguments.length===0){return u(e.filter(".select2-highlighted")[0],e.get())}if(t>=e.length)t=e.length-1
if(t<0)t=0
this.results.find(".select2-highlighted").removeClass("select2-highlighted")
i=$(e[t])
i.addClass("select2-highlighted")
this.ensureHighlightVisible()
n=i.data("select2-data")
if(n){this.opts.element.trigger({type:"select2-highlight",val:this.id(n),choice:n})}},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(t){var e=$(t.target).closest(".select2-result-selectable")
if(e.length>0&&!e.is(".select2-highlighted")){var i=this.findHighlightableChoices()
this.highlight(i.index(e))}else if(e.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted")}},loadMoreIfNeeded:function(){var t=this.results,e=t.find("li.select2-more-results"),i,n=-1,s=this.resultsPage+1,r=this,o=this.search.val(),a=this.context
if(e.length===0)return
i=e.offset().top-t.offset().top-t.height()
if(i<=this.opts.loadMorePadding){e.addClass("select2-active")
this.opts.query({element:this.opts.element,term:o,page:s,context:a,matcher:this.opts.matcher,callback:this.bind(function(i){if(!r.opened())return
r.opts.populateResults.call(this,t,i.results,{term:o,page:s,context:a})
r.postprocessResults(i,false,false)
if(i.more===true){e.detach().appendTo(t).text(r.opts.formatLoadMore(s+1))
window.setTimeout(function(){r.loadMoreIfNeeded()},10)}else{e.remove()}r.positionDropdown()
r.resultsPage=s
r.context=i.context})})}},tokenize:function(){},updateResults:function(e){var i=this.search,n=this.results,s=this.opts,r,o=this,a,l=i.val(),h=$.data(this.container,"select2-last-term")
if(e!==true&&h&&d(l,h))return
$.data(this.container,"select2-last-term",l)
if(e!==true&&(this.showSearchInput===false||!this.opened())){return}function c(){i.removeClass("select2-active")
o.positionDropdown()}function u(t){n.html(t)
c()}var f=this.getMaximumSelectionSize()
if(f>=1){r=this.data()
if($.isArray(r)&&r.length>=f&&H(s.formatSelectionTooBig,"formatSelectionTooBig")){u("<li class='select2-selection-limit'>"+s.formatSelectionTooBig(f)+"</li>")
return}}if(i.val().length<s.minimumInputLength){if(H(s.formatInputTooShort,"formatInputTooShort")){u("<li class='select2-no-results'>"+s.formatInputTooShort(i.val(),s.minimumInputLength)+"</li>")}else{u("")}if(e&&this.showSearch)this.showSearch(true)
return}if(s.maximumInputLength&&i.val().length>s.maximumInputLength){if(H(s.formatInputTooLong,"formatInputTooLong")){u("<li class='select2-no-results'>"+s.formatInputTooLong(i.val(),s.maximumInputLength)+"</li>")}else{u("")}return}if(s.formatSearching&&this.findHighlightableChoices().length===0){u("<li class='select2-searching'>"+s.formatSearching()+"</li>")}i.addClass("select2-active")
a=this.tokenize()
if(a!=t&&a!=null){i.val(a)}this.resultsPage=1
s.query({element:s.element,term:i.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(r){var a
if(!this.opened()){this.search.removeClass("select2-active")
return}this.context=r.context===t?null:r.context
if(this.opts.createSearchChoice&&i.val()!==""){a=this.opts.createSearchChoice.call(o,i.val(),r.results)
if(a!==t&&a!==null&&o.id(a)!==t&&o.id(a)!==null){if($(r.results).filter(function(){return d(o.id(this),o.id(a))}).length===0){r.results.unshift(a)}}}if(r.results.length===0&&H(s.formatNoMatches,"formatNoMatches")){u("<li class='select2-no-results'>"+s.formatNoMatches(i.val())+"</li>")
return}n.empty()
o.opts.populateResults.call(this,n,r.results,{term:i.val(),page:this.resultsPage,context:null})
if(r.more===true&&H(s.formatLoadMore,"formatLoadMore")){n.append("<li class='select2-more-results'>"+o.opts.escapeMarkup(s.formatLoadMore(this.resultsPage))+"</li>")
window.setTimeout(function(){o.loadMoreIfNeeded()},10)}this.postprocessResults(r,e)
c()
this.opts.element.trigger({type:"select2-loaded",items:r})})})},cancel:function(){this.close()},blur:function(){if(this.opts.selectOnBlur)this.selectHighlighted({noFocus:true})
this.close()
this.container.removeClass("select2-container-active")
if(this.search[0]===document.activeElement){this.search.blur()}this.clearSearch()
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){x(this.search)},selectHighlighted:function(t){var e=this.highlight(),i=this.results.find(".select2-highlighted"),n=i.closest(".select2-result").data("select2-data")
if(n){this.highlight(e)
this.onSelect(n,t)}else if(t&&t.noFocus){this.close()}},getPlaceholder:function(){var e
return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((e=this.getPlaceholderOption())!==t?e.text():t)},getPlaceholderOption:function(){if(this.select){var e=this.select.children().first()
if(this.opts.placeholderOption!==t){return this.opts.placeholderOption==="first"&&e||typeof this.opts.placeholderOption==="function"&&this.opts.placeholderOption(this.select)}else if(e.text()===""&&e.val()===""){return e}}},initContainerWidth:function(){function e(){var e,i,n,s,r
if(this.opts.width==="off"){return null}else if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}else if(this.opts.width==="copy"||this.opts.width==="resolve"){e=this.opts.element.attr("style")
if(e!==t){i=e.split(";")
for(s=0,r=i.length;s<r;s=s+1){n=i[s].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)
if(n!==null&&n.length>=1)return n[1]}}if(this.opts.width==="resolve"){e=this.opts.element.css("width")
if(e.indexOf("%")>0)return e
return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}return null}else if($.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}var i=e.call(this)
if(i!==null){this.container.css("width",i)}}})
n=j(i,{createContainer:function(){var t=$(document.createElement("div")).attr({class:"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))
return t},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled())}},opening:function(){var t,e,i
if(this.opts.minimumResultsForSearch>=0){this.showSearch(true)}this.parent.opening.apply(this,arguments)
if(this.showSearchInput!==false){this.search.val(this.focusser.val())}this.search.focus()
t=this.search.get(0)
if(t.createTextRange){e=t.createTextRange()
e.collapse(false)
e.select()}else if(t.setSelectionRange){i=this.search.val().length
t.setSelectionRange(i,i)}this.focusser.prop("disabled",true).val("")
this.updateResults(true)
this.opts.element.trigger($.Event("select2-open"))},close:function(){if(!this.opened())return
this.parent.close.apply(this,arguments)
this.focusser.removeAttr("disabled")
this.focusser.focus()},focus:function(){if(this.opened()){this.close()}else{this.focusser.removeAttr("disabled")
this.focusser.focus()}},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments)
this.focusser.removeAttr("disabled")
this.focusser.focus()},initContainer:function(){var t,i=this.container,n=this.dropdown
if(this.opts.minimumResultsForSearch<0){this.showSearch(false)}else{this.showSearch(true)}this.selection=t=i.find(".select2-choice")
this.focusser=i.find(".select2-focusser")
this.focusser.attr("id","s2id_autogen"+r())
$("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"))
this.focusser.attr("tabindex",this.elementTabIndex)
this.search.on("keydown",this.bind(function(t){if(!this.isInterfaceEnabled())return
if(t.which===e.PAGE_UP||t.which===e.PAGE_DOWN){k(t)
return}switch(t.which){case e.UP:case e.DOWN:this.moveHighlight(t.which===e.UP?-1:1)
k(t)
return
case e.ENTER:this.selectHighlighted()
k(t)
return
case e.TAB:this.selectHighlighted({noFocus:true})
return
case e.ESC:this.cancel(t)
k(t)
return}}))
this.search.on("blur",this.bind(function(t){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus()}),0)}}))
this.focusser.on("keydown",this.bind(function(t){if(!this.isInterfaceEnabled())return
if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC){return}if(this.opts.openOnEnter===false&&t.which===e.ENTER){k(t)
return}if(t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER&&this.opts.openOnEnter){if(t.altKey||t.ctrlKey||t.shiftKey||t.metaKey)return
this.open()
k(t)
return}if(t.which==e.DELETE||t.which==e.BACKSPACE){if(this.opts.allowClear){this.clear()}k(t)
return}}))
g(this.focusser)
this.focusser.on("keyup-change input",this.bind(function(t){if(this.opts.minimumResultsForSearch>=0){t.stopPropagation()
if(this.opened())return
this.open()}}))
t.on("mousedown","abbr",this.bind(function(t){if(!this.isInterfaceEnabled())return
this.clear()
T(t)
this.close()
this.selection.focus()}))
t.on("mousedown",this.bind(function(t){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}if(this.opened()){this.close()}else if(this.isInterfaceEnabled()){this.open()}k(t)}))
n.on("mousedown",this.bind(function(){this.search.focus()}))
t.on("focus",this.bind(function(t){k(t)}))
this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active")
this.opts.element.trigger($.Event("select2-blur"))}}))
this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")}))
this.initContainerWidth()
this.opts.element.addClass("select2-offscreen")
this.setPlaceholder()},clear:function(t){var e=this.selection.data("select2-data")
if(e){var i=this.getPlaceholderOption()
this.opts.element.val(i?i.val():"")
this.selection.find(".select2-chosen").empty()
this.selection.removeData("select2-data")
this.setPlaceholder()
if(t!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(e),choice:e})
this.triggerChange({removed:e})}}},initSelection:function(){var e
if(this.isPlaceholderOptionSelected()){this.updateSelection([])
this.close()
this.setPlaceholder()}else{var i=this
this.opts.initSelection.call(null,this.opts.element,function(e){if(e!==t&&e!==null){i.updateSelection(e)
i.close()
i.setPlaceholder()}})}},isPlaceholderOptionSelected:function(){var e
return(e=this.getPlaceholderOption())!==t&&e.is(":selected")||this.opts.element.val()===""||this.opts.element.val()===t||this.opts.element.val()===null},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),e=this
if(t.element.get(0).tagName.toLowerCase()==="select"){t.initSelection=function(t,i){var n=t.find(":selected")
i(e.optionToData(n))}}else if("data"in t){t.initSelection=t.initSelection||function(e,i){var n=e.val()
var s=null
t.query({matcher:function(e,i,r){var o=d(n,t.id(r))
if(o){s=r}return o},callback:!$.isFunction(i)?$.noop:function(){i(s)}})}}return t},getPlaceholder:function(){if(this.select){if(this.getPlaceholderOption()===t){return t}}return this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var e=this.getPlaceholder()
if(this.isPlaceholderOptionSelected()&&e!==t){if(this.select&&this.getPlaceholderOption()===t)return
this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e))
this.selection.addClass("select2-default")
this.container.removeClass("select2-allowclear")}},postprocessResults:function(t,e,i){var n=0,s=this,r=true
this.findHighlightableChoices().each2(function(t,e){if(d(s.id(e.data("select2-data")),s.opts.element.val())){n=t
return false}})
if(i!==false){if(e===true&&n>=0){this.highlight(n)}else{this.highlight(0)}}if(e===true){var o=this.opts.minimumResultsForSearch
if(o>=0){this.showSearch(z(t.results)>=o)}}},showSearch:function(t){if(this.showSearchInput===t)return
this.showSearchInput=t
this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!t)
this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!t)
$(this.dropdown,this.container).toggleClass("select2-with-searchbox",t)},onSelect:function(t,e){if(!this.triggerSelect(t)){return}var i=this.opts.element.val(),n=this.data()
this.opts.element.val(this.id(t))
this.updateSelection(t)
this.opts.element.trigger({type:"select2-selected",val:this.id(t),choice:t})
this.close()
if(!e||!e.noFocus)this.selection.focus()
if(!d(i,this.id(t))){this.triggerChange({added:t,removed:n})}},updateSelection:function(e){var i=this.selection.find(".select2-chosen"),n,s
this.selection.data("select2-data",e)
i.empty()
n=this.opts.formatSelection(e,i,this.opts.escapeMarkup)
if(n!==t){i.append(n)}s=this.opts.formatSelectionCssClass(e,i)
if(s!==t){i.addClass(s)}this.selection.removeClass("select2-default")
if(this.opts.allowClear&&this.getPlaceholder()!==t){this.container.addClass("select2-allowclear")}},val:function(){var e,i=false,n=null,s=this,r=this.data()
if(arguments.length===0){return this.opts.element.val()}e=arguments[0]
if(arguments.length>1){i=arguments[1]}if(this.select){this.select.val(e).find(":selected").each2(function(t,e){n=s.optionToData(e)
return false})
this.updateSelection(n)
this.setPlaceholder()
if(i){this.triggerChange({added:n,removed:r})}}else{if(!e&&e!==0){this.clear(i)
return}if(this.opts.initSelection===t){throw new Error("cannot call val() if initSelection() is not defined")}this.opts.element.val(e)
this.opts.initSelection(this.opts.element,function(t){s.opts.element.val(!t?"":s.id(t))
s.updateSelection(t)
s.setPlaceholder()
if(i){s.triggerChange({added:t,removed:r})}})}},clearSearch:function(){this.search.val("")
this.focusser.val("")},data:function(e,i){var n
if(arguments.length===0){n=this.selection.data("select2-data")
if(n==t)n=null
return n}else{if(!e||e===""){this.clear(i)}else{n=this.data()
this.opts.element.val(!e?"":this.id(e))
this.updateSelection(e)
if(i){this.triggerChange({added:e,removed:n})}}}}})
s=j(i,{createContainer:function(){var t=$(document.createElement("div")).attr({class:"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))
return t},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),e=this
if(t.element.get(0).tagName.toLowerCase()==="select"){t.initSelection=function(t,i){var n=[]
t.find(":selected").each2(function(t,i){n.push(e.optionToData(i))})
i(n)}}else if("data"in t){t.initSelection=t.initSelection||function(e,i){var n=p(e.val(),t.separator)
var s=[]
t.query({matcher:function(e,i,r){var o=$.grep(n,function(e){return d(e,t.id(r))}).length
if(o){s.push(r)}return o},callback:!$.isFunction(i)?$.noop:function(){var e=[]
for(var r=0;r<n.length;r++){var o=n[r]
for(var a=0;a<s.length;a++){var l=s[a]
if(d(o,t.id(l))){e.push(l)
s.splice(a,1)
break}}}i(e)}})}}return t},selectChoice:function(t){var e=this.container.find(".select2-search-choice-focus")
if(e.length&&t&&t[0]==e[0]){}else{if(e.length){this.opts.element.trigger("choice-deselected",e)}e.removeClass("select2-search-choice-focus")
if(t&&t.length){this.close()
t.addClass("select2-search-choice-focus")
this.opts.element.trigger("choice-selected",t)}}},initContainer:function(){var t=".select2-choices",i
this.searchContainer=this.container.find(".select2-search-field")
this.selection=i=this.container.find(t)
var n=this
this.selection.on("mousedown",".select2-search-choice",function(t){n.search[0].focus()
n.selectChoice($(this))})
this.search.attr("id","s2id_autogen"+r())
$("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id"))
this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled())return
if(!this.opened()){this.open()}}))
this.search.attr("tabindex",this.elementTabIndex)
this.keydowns=0
this.search.on("keydown",this.bind(function(t){if(!this.isInterfaceEnabled())return;++this.keydowns
var n=i.find(".select2-search-choice-focus")
var s=n.prev(".select2-search-choice:not(.select2-locked)")
var r=n.next(".select2-search-choice:not(.select2-locked)")
var o=C(this.search)
if(n.length&&(t.which==e.LEFT||t.which==e.RIGHT||t.which==e.BACKSPACE||t.which==e.DELETE||t.which==e.ENTER)){var a=n
if(t.which==e.LEFT&&s.length){a=s}else if(t.which==e.RIGHT){a=r.length?r:null}else if(t.which===e.BACKSPACE){this.unselect(n.first())
this.search.width(10)
a=s.length?s:r}else if(t.which==e.DELETE){this.unselect(n.first())
this.search.width(10)
a=r.length?r:null}else if(t.which==e.ENTER){a=null}this.selectChoice(a)
k(t)
if(!a||!a.length){this.open()}return}else if((t.which===e.BACKSPACE&&this.keydowns==1||t.which==e.LEFT)&&(o.offset==0&&!o.length)){this.selectChoice(i.find(".select2-search-choice:not(.select2-locked)").last())
k(t)
return}else{this.selectChoice(null)}if(this.opened()){switch(t.which){case e.UP:case e.DOWN:this.moveHighlight(t.which===e.UP?-1:1)
k(t)
return
case e.ENTER:this.selectHighlighted()
k(t)
return
case e.TAB:this.selectHighlighted({noFocus:true})
this.close()
return
case e.ESC:this.cancel(t)
k(t)
return}}if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.BACKSPACE||t.which===e.ESC){return}if(t.which===e.ENTER){if(this.opts.openOnEnter===false){return}else if(t.altKey||t.ctrlKey||t.shiftKey||t.metaKey){return}}this.open()
if(t.which===e.PAGE_UP||t.which===e.PAGE_DOWN){k(t)}if(t.which===e.ENTER){k(t)}}))
this.search.on("keyup",this.bind(function(t){this.keydowns=0
this.resizeSearch()}))
this.search.on("blur",this.bind(function(t){this.container.removeClass("select2-container-active")
this.search.removeClass("select2-focused")
this.selectChoice(null)
if(!this.opened())this.clearSearch()
t.stopImmediatePropagation()
this.opts.element.trigger($.Event("select2-blur"))}))
this.container.on("click",t,this.bind(function(t){if(!this.isInterfaceEnabled())return
if($(t.target).closest(".select2-search-choice").length>0){return}this.selectChoice(null)
this.clearPlaceholder()
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.open()
this.focusSearch()
t.preventDefault()}))
this.container.on("focus",t,this.bind(function(){if(!this.isInterfaceEnabled())return
if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"))}this.container.addClass("select2-container-active")
this.dropdown.addClass("select2-drop-active")
this.clearPlaceholder()}))
this.initContainerWidth()
this.opts.element.addClass("select2-offscreen")
this.clearSearch()},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled())}},initSelection:function(){var e
if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([])
this.close()
this.clearSearch()}if(this.select||this.opts.element.val()!==""){var i=this
this.opts.initSelection.call(null,this.opts.element,function(e){if(e!==t&&e!==null){i.updateSelection(e)
i.close()
i.clearSearch()}})}},clearSearch:function(){var e=this.getPlaceholder(),i=this.getMaxSearchWidth()
if(e!==t&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(e).addClass("select2-default")
this.search.width(i>0?i:this.container.css("width"))}else{this.search.val("").width(10)}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default")}},opening:function(){this.clearPlaceholder()
this.resizeSearch()
this.parent.opening.apply(this,arguments)
this.focusSearch()
this.updateResults(true)
this.search.focus()
this.opts.element.trigger($.Event("select2-open"))},close:function(){if(!this.opened())return
this.parent.close.apply(this,arguments)},focus:function(){this.close()
this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(t){var e=[],i=[],n=this
$(t).each(function(){if(u(n.id(this),e)<0){e.push(n.id(this))
i.push(this)}})
t=i
this.selection.find(".select2-search-choice").remove()
$(t).each(function(){n.addSelectedChoice(this)})
n.postprocessResults()},tokenize:function(){var e=this.search.val()
e=this.opts.tokenizer.call(this,e,this.data(),this.bind(this.onSelect),this.opts)
if(e!=null&&e!=t){this.search.val(e)
if(e.length>0){this.open()}}},onSelect:function(t,e){if(!this.triggerSelect(t)){return}this.addSelectedChoice(t)
this.opts.element.trigger({type:"selected",val:this.id(t),choice:t})
if(this.select||!this.opts.closeOnSelect)this.postprocessResults()
if(this.opts.closeOnSelect){this.close()
this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10)
this.resizeSearch()
if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)}this.positionDropdown()}else{this.close()
this.search.width(10)}}this.triggerChange({added:t})
if(!e||!e.noFocus)this.focusSearch()},cancel:function(){this.close()
this.focusSearch()},addSelectedChoice:function(e){var i=!e.locked,n=$("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),s=$("<li class='select2-search-choice select2-locked'>"+"<div></div>"+"</li>")
var r=i?n:s,o=this.id(e),a=this.getVal(),l,h
l=this.opts.formatSelection(e,r.find("div"),this.opts.escapeMarkup)
if(l!=t){r.find("div").replaceWith("<div>"+l+"</div>")}h=this.opts.formatSelectionCssClass(e,r.find("div"))
if(h!=t){r.addClass(h)}if(i){r.find(".select2-search-choice-close").on("mousedown",k).on("click dblclick",this.bind(function(t){if(!this.isInterfaceEnabled())return
$(t.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect($(t.target))
this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
this.close()
this.focusSearch()})).dequeue()
k(t)})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled())return
this.container.addClass("select2-container-active")
this.dropdown.addClass("select2-drop-active")}))}r.data("select2-data",e)
r.insertBefore(this.searchContainer)
a.push(o)
this.setVal(a)},unselect:function(t){var e=this.getVal(),i,n
t=t.closest(".select2-search-choice")
if(t.length===0){throw"Invalid argument: "+t+". Must be .select2-search-choice"}i=t.data("select2-data")
if(!i){return}n=u(this.id(i),e)
if(n>=0){e.splice(n,1)
this.setVal(e)
if(this.select)this.postprocessResults()}t.remove()
this.opts.element.trigger({type:"removed",val:this.id(i),choice:i})
this.triggerChange({removed:i})},postprocessResults:function(t,e,i){var n=this.getVal(),s=this.results.find(".select2-result"),r=this.results.find(".select2-result-with-children"),o=this
s.each2(function(t,e){var i=o.id(e.data("select2-data"))
if(u(i,n)>=0){e.addClass("select2-selected")
e.find(".select2-result-selectable").addClass("select2-selected")}})
r.each2(function(t,e){if(!e.is(".select2-result-selectable")&&e.find(".select2-result-selectable:not(.select2-selected)").length===0){e.addClass("select2-selected")}})
if(this.highlight()==-1&&i!==false){o.highlight(0)}if(!this.opts.createSearchChoice&&!s.filter(".select2-result:not(.select2-selected)").length>0){if(!t||t&&!t.more&&this.results.find(".select2-no-results").length===0){if(H(o.opts.formatNoMatches,"formatNoMatches")){this.results.append("<li class='select2-no-results'>"+o.opts.formatNoMatches(o.search.val())+"</li>")}}}},getMaxSearchWidth:function(){return this.selection.width()-m(this.search)},resizeSearch:function(){var t,e,i,n,s,r=m(this.search)
t=S(this.search)+10
e=this.search.offset().left
i=this.selection.width()
n=this.selection.offset().left
s=i-(e-n)-r
if(s<t){s=i-r}if(s<40){s=i-r}if(s<=0){s=t}this.search.width(s)},getVal:function(){var t
if(this.select){t=this.select.val()
return t===null?[]:t}else{t=this.opts.element.val()
return p(t,this.opts.separator)}},setVal:function(t){var e
if(this.select){this.select.val(t)}else{e=[]
$(t).each(function(){if(u(this,e)<0)e.push(this)})
this.opts.element.val(e.length===0?"":e.join(this.opts.separator))}},buildChangeDetails:function(t,e){var e=e.slice(0),t=t.slice(0)
for(var i=0;i<e.length;i++){for(var n=0;n<t.length;n++){if(d(this.opts.id(e[i]),this.opts.id(t[n]))){e.splice(i,1)
i--
t.splice(n,1)
n--}}}return{added:e,removed:t}},val:function(e,i){var n,s=this,r
if(arguments.length===0){return this.getVal()}n=this.data()
if(!n.length)n=[]
if(!e&&e!==0){this.opts.element.val("")
this.updateSelection([])
this.clearSearch()
if(i){this.triggerChange({added:this.data(),removed:n})}return}this.setVal(e)
if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection))
if(i){this.triggerChange(this.buildChangeDetails(n,this.data()))}}else{if(this.opts.initSelection===t){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(t){var e=$.map(t,s.id)
s.setVal(e)
s.updateSelection(t)
s.clearSearch()
if(i){s.triggerChange(this.buildChangeDetails(n,this.data()))}})}this.clearSearch()},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")}this.search.width(0)
this.searchContainer.hide()},onSortEnd:function(){var t=[],e=this
this.searchContainer.show()
this.searchContainer.appendTo(this.searchContainer.parent())
this.resizeSearch()
this.selection.find(".select2-search-choice").each(function(){t.push(e.opts.id($(this).data("select2-data")))})
this.setVal(t)
this.triggerChange()},data:function(t,e){var i=this,n,s
if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return $(this).data("select2-data")}).get()}else{s=this.data()
if(!t){t=[]}n=$.map(t,function(t){return i.opts.id(t)})
this.setVal(n)
this.updateSelection(t)
this.clearSearch()
if(e){this.triggerChange(this.buildChangeDetails(s,this.data()))}}}})
$.fn.select2=function(){var e=Array.prototype.slice.call(arguments,0),i,r,o,a,l,h=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","readonly","positionDropdown","data","search"],c=["val","opened","isFocused","container","data"],f={search:"externalSearch"}
this.each(function(){if(e.length===0||typeof e[0]==="object"){i=e.length===0?{}:$.extend({},e[0])
i.element=$(this)
if(i.element.get(0).tagName.toLowerCase()==="select"){l=i.element.prop("multiple")}else{l=i.multiple||false
if("tags"in i){i.multiple=l=true}}r=l?new s:new n
r.init(i)}else if(typeof e[0]==="string"){if(u(e[0],h)<0){throw"Unknown method: "+e[0]}a=t
r=$(this).data("select2")
if(r===t)return
o=e[0]
if(o==="container"){a=r.container}else if(o==="dropdown"){a=r.dropdown}else{if(f[o])o=f[o]
a=r[o].apply(r,e.slice(1))}if(u(e[0],c)>=0){return false}}else{throw"Invalid arguments to select2 plugin: "+e}})
return a===t?this:a}
$.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(t,e,i,n){var s=[]
E(t.text,i.term,s,n)
return s.join("")},formatSelection:function(e,i,n){return e?n(e.text):t},sortResults:function(t,e,i){return t},formatResultCssClass:function(e){return t},formatSelectionCssClass:function(e,i){return t},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(t,e){var i=e-t.length
return"Please enter "+i+" more character"+(i==1?"":"s")},formatInputTooLong:function(t,e){var i=t.length-e
return"Please delete "+i+" character"+(i==1?"":"s")},formatSelectionTooBig:function(t){return"You can only select "+t+" item"+(t==1?"":"s")},formatLoadMore:function(t){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(t){return t.id},matcher:function(t,e){return(""+e).toUpperCase().indexOf((""+t).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:P,blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(t){return t},adaptDropdownCssClass:function(t){return null}}
$.fn.select2.ajaxDefaults={transport:$.ajax,params:{type:"GET",cache:false,dataType:"json"}}
window.Select2={query:{ajax:I,local:A,tags:N},util:{debounce:y,markMatch:E,escapeMarkup:P},class:{abstract:i,single:n,multi:s}}})(jQuery)
module.exports=window.jQuery

});
KAdefine("javascript/node_modules/jquery/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/jquery/jquery-bundle.js")

});
KAdefine("third_party/javascript-khansrc/underscore/underscore.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var n=this
var r=n._
var t={}
var e=Array.prototype,i=Object.prototype,u=Function.prototype
var a=e.push,f=e.slice,l=e.concat,c=i.toString,o=i.hasOwnProperty
var s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,y=e.every,g=e.some,m=e.indexOf,x=e.lastIndexOf,b=Array.isArray,w=Object.keys,j=u.bind
var _=function(n){if(n instanceof _)return n
if(!(this instanceof _))return new _(n)
this._wrapped=n}
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=_}exports._=_}else{n._=_}_.VERSION="1.4.4"
var A=_.each=_.forEach=function(n,r,e){if(n==null)return
if(s&&n.forEach===s){n.forEach(r,e)}else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++){if(r.call(e,n[i],i,n)===t)return}}else{for(var a in n){if(_.has(n,a)){if(r.call(e,n[a],a,n)===t)return}}}}
_.map=_.collect=function(n,r,t){var e=[]
if(n==null)return e
if(p&&n.map===p)return n.map(r,t)
A(n,function(n,i,u){e[e.length]=r.call(t,n,i,u)})
return e}
var E="Reduce of empty array with no initial value"
_.reduce=_.foldl=_.inject=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(v&&n.reduce===v){if(e)r=_.bind(r,e)
return i?n.reduce(r,t):n.reduce(r)}A(n,function(n,u,a){if(!i){t=n
i=true}else{t=r.call(e,t,n,u,a)}})
if(!i)throw new TypeError(E)
return t}
_.reduceRight=_.foldr=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(h&&n.reduceRight===h){if(e)r=_.bind(r,e)
return i?n.reduceRight(r,t):n.reduceRight(r)}var u=n.length
if(u!==+u){var a=_.keys(n)
u=a.length}A(n,function(f,l,c){l=a?a[--u]:--u
if(!i){t=n[l]
i=true}else{t=r.call(e,t,n[l],l,c)}})
if(!i)throw new TypeError(E)
return t}
_.find=_.detect=function(n,r,t){var e
O(n,function(n,i,u){if(r.call(t,n,i,u)){e=n
return true}})
return e}
_.filter=_.select=function(n,r,t){var e=[]
if(n==null)return e
if(d&&n.filter===d)return n.filter(r,t)
A(n,function(n,i,u){if(r.call(t,n,i,u))e[e.length]=n})
return e}
_.reject=function(n,r,t){return _.filter(n,function(n,e,i){return!r.call(t,n,e,i)},t)}
_.every=_.all=function(n,r,e){r||(r=_.identity)
var i=true
if(n==null)return i
if(y&&n.every===y)return n.every(r,e)
A(n,function(n,u,a){if(!(i=i&&r.call(e,n,u,a)))return t})
return!!i}
var O=_.some=_.any=function(n,r,e){r||(r=_.identity)
var i=false
if(n==null)return i
if(g&&n.some===g)return n.some(r,e)
A(n,function(n,u,a){if(i||(i=r.call(e,n,u,a)))return t})
return!!i}
_.contains=_.include=function(n,r){if(n==null)return false
if(m&&n.indexOf===m)return n.indexOf(r)!=-1
return O(n,function(n){return n===r})}
_.invoke=function(n,r){var t=f.call(arguments,2)
var e=_.isFunction(r)
return _.map(n,function(n){return(e?r:n[r]).apply(n,t)})}
_.pluck=function(n,r){return _.map(n,function(n){return n[r]})}
_.where=function(n,r,t){if(_.isEmpty(r))return t?null:[]
return _[t?"find":"filter"](n,function(n){for(var t in r){if(r[t]!==n[t])return false}return true})}
_.findWhere=function(n,r){return _.where(n,r,true)}
_.max=function(n,r,t){if(!r&&_.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!r&&_.isEmpty(n))return-Infinity
var e={computed:-Infinity,value:-Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a>=e.computed&&(e={value:n,computed:a})})
return e.value}
_.min=function(n,r,t){if(!r&&_.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!r&&_.isEmpty(n))return Infinity
var e={computed:Infinity,value:Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a<e.computed&&(e={value:n,computed:a})})
return e.value}
_.shuffle=function(n){var r
var t=0
var e=[]
A(n,function(n){r=_.random(t++)
e[t-1]=e[r]
e[r]=n})
return e}
var I=function(n){return _.isFunction(n)?n:function(r){return r[n]}}
_.sortBy=function(n,r,t){var e=I(r)
return _.pluck(_.map(n,function(n,r,i){return{value:n,index:r,criteria:e.call(t,n,r,i)}}).sort(function(n,r){var t=n.criteria
var e=r.criteria
if(t!==e){if(t>e||t===void 0)return 1
if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")}
var k=function(n,r,t,e){var i={}
var u=I(r||_.identity)
A(n,function(r,a){var f=u.call(t,r,a,n)
e(i,f,r)})
return i}
_.groupBy=function(n,r,t){return k(n,r,t,function(n,r,t){(_.has(n,r)?n[r]:n[r]=[]).push(t)})}
_.countBy=function(n,r,t){return k(n,r,t,function(n,r){if(!_.has(n,r))n[r]=0
n[r]++})}
_.sortedIndex=function(n,r,t,e){t=t==null?_.identity:I(t)
var i=t.call(e,r)
var u=0,a=n.length
while(u<a){var f=u+a>>>1
t.call(e,n[f])<i?u=f+1:a=f}return u}
_.toArray=function(n){if(!n)return[]
if(_.isArray(n))return f.call(n)
if(n.length===+n.length)return _.map(n,_.identity)
return _.values(n)}
_.size=function(n){if(n==null)return 0
return n.length===+n.length?n.length:_.keys(n).length}
_.first=_.head=_.take=function(n,r,t){if(n==null)return void 0
return r!=null&&!t?f.call(n,0,r):n[0]}
_.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))}
_.last=function(n,r,t){if(n==null)return void 0
if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}}
_.rest=_.tail=_.drop=function(n,r,t){return f.call(n,r==null||t?1:r)}
_.compact=function(n){return _.filter(n,_.identity)}
var F=function(n,r,t){A(n,function(n){if(_.isArray(n)){r?a.apply(t,n):F(n,r,t)}else{t.push(n)}})
return t}
_.flatten=function(n,r){return F(n,r,[])}
_.without=function(n){return _.difference(n,f.call(arguments,1))}
_.uniq=_.unique=function(n,r,t,e){if(_.isFunction(r)){e=t
t=r
r=false}var i=t?_.map(n,t,e):n
var u=[]
var a=[]
A(i,function(t,e){if(r?!e||a[a.length-1]!==t:!_.contains(a,t)){a.push(t)
u.push(n[e])}})
return u}
_.union=function(){return _.uniq(l.apply(e,arguments))}
_.intersection=function(n){var r=f.call(arguments,1)
return _.filter(_.uniq(n),function(n){return _.every(r,function(r){return _.indexOf(r,n)>=0})})}
_.difference=function(n){var r=l.apply(e,f.call(arguments,1))
return _.filter(n,function(n){return!_.contains(r,n)})}
_.zip=function(){var n=f.call(arguments)
var r=_.max(_.pluck(n,"length"))
var t=new Array(r)
for(var e=0;e<r;e++){t[e]=_.pluck(n,""+e)}return t}
_.object=function(n,r){if(n==null)return{}
var t={}
for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t}
_.indexOf=function(n,r,t){if(n==null)return-1
var e=0,i=n.length
if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=_.sortedIndex(n,r)
return n[e]===r?e:-1}}if(m&&n.indexOf===m)return n.indexOf(r,t)
for(;e<i;e++)if(n[e]===r)return e
return-1}
_.lastIndexOf=function(n,r,t){if(n==null)return-1
var e=t!=null
if(x&&n.lastIndexOf===x){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length
while(i--)if(n[i]===r)return i
return-1}
_.range=function(n,r,t){if(arguments.length<=1){r=n||0
n=0}t=arguments[2]||1
var e=Math.max(Math.ceil((r-n)/t),0)
var i=0
var u=new Array(e)
while(i<e){u[i++]=n
n+=t}return u}
_.bind=function(n,r){if(n.bind===j&&j)return j.apply(n,f.call(arguments,1))
var t=f.call(arguments,2)
return function(){return n.apply(r,t.concat(f.call(arguments)))}}
_.partial=function(n){var r=f.call(arguments,1)
return function(){return n.apply(this,r.concat(f.call(arguments)))}}
_.bindAll=function(n){var r=f.call(arguments,1)
if(r.length===0)r=_.functions(n)
A(r,function(r){n[r]=_.bind(n[r],n)})
return n}
_.memoize=function(n,r){var t={}
r||(r=_.identity)
return function(){var e=r.apply(this,arguments)
return _.has(t,e)?t[e]:t[e]=n.apply(this,arguments)}}
_.delay=function(n,r){var t=f.call(arguments,2)
return setTimeout(function(){return n.apply(null,t)},r)}
_.defer=function(n){return _.delay.apply(_,[n,1].concat(f.call(arguments,1)))}
_.throttle=function(n,r){var t,e,i,u
var a=0
var f=function(){a=new Date
i=null
u=n.apply(t,e)}
return function(){var l=new Date
var c=r-(l-a)
t=this
e=arguments
if(c<=0){clearTimeout(i)
i=null
a=l
u=n.apply(t,e)}else if(!i){i=setTimeout(f,c)}return u}}
_.debounce=function(n,r,t){var e,i
return function(){var u=this,a=arguments
var f=function(){e=null
if(!t)i=n.apply(u,a)}
var l=t&&!e
clearTimeout(e)
e=setTimeout(f,r)
if(l)i=n.apply(u,a)
return i}}
_.once=function(n){var r=false,t
return function(){if(r)return t
r=true
t=n.apply(this,arguments)
n=null
return t}}
_.wrap=function(n,r){return function(){var t=[n]
a.apply(t,arguments)
return r.apply(this,t)}}
_.compose=function(){var n=arguments
return function(){var r=arguments
for(var t=n.length-1;t>=0;t--){r=[n[t].apply(this,r)]}return r[0]}}
_.after=function(n,r){if(n<=0)return r()
return function(){if(--n<1){return r.apply(this,arguments)}}}
_.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object")
var r=[]
for(var t in n)if(_.has(n,t))r[r.length]=t
return r}
_.values=function(n){var r=[]
for(var t in n)if(_.has(n,t))r.push(n[t])
return r}
_.pairs=function(n){var r=[]
for(var t in n)if(_.has(n,t))r.push([t,n[t]])
return r}
_.invert=function(n){var r={}
for(var t in n)if(_.has(n,t))r[n[t]]=t
return r}
_.functions=_.methods=function(n){var r=[]
for(var t in n){if(_.isFunction(n[t]))r.push(t)}return r.sort()}
_.extend=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){n[t]=r[t]}}})
return n}
_.pick=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
A(t,function(t){if(t in n)r[t]=n[t]})
return r}
_.omit=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
for(var i in n){if(!_.contains(t,i))r[i]=n[i]}return r}
_.defaults=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){if(n[t]==null)n[t]=r[t]}}})
return n}
_.clone=function(n){if(!_.isObject(n))return n
return _.isArray(n)?n.slice():_.extend({},n)}
_.tap=function(n,r){r(n)
return n}
var M=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r
if(n==null||r==null)return n===r
if(n instanceof _)n=n._wrapped
if(r instanceof _)r=r._wrapped
var i=c.call(n)
if(i!=c.call(r))return false
switch(i){case"[object String]":return n==String(r)
case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r
case"[object Date]":case"[object Boolean]":return+n==+r
case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false
var u=t.length
while(u--){if(t[u]==n)return e[u]==r}t.push(n)
e.push(r)
var a=0,f=true
if(i=="[object Array]"){a=n.length
f=a==r.length
if(f){while(a--){if(!(f=M(n[a],r[a],t,e)))break}}}else{var l=n.constructor,o=r.constructor
if(l!==o&&!(_.isFunction(l)&&l instanceof l&&_.isFunction(o)&&o instanceof o)){return false}for(var s in n){if(_.has(n,s)){a++
if(!(f=_.has(r,s)&&M(n[s],r[s],t,e)))break}}if(f){for(s in r){if(_.has(r,s)&&!a--)break}f=!a}}t.pop()
e.pop()
return f}
_.isEqual=function(n,r){return M(n,r,[],[])}
_.isEmpty=function(n){if(n==null)return true
if(_.isArray(n)||_.isString(n))return n.length===0
for(var r in n)if(_.has(n,r))return false
return true}
_.isElement=function(n){return!!(n&&n.nodeType===1)}
_.isArray=b||function(n){return c.call(n)=="[object Array]"}
_.isObject=function(n){return n===Object(n)}
A(["Arguments","Function","String","Number","Date","RegExp"],function(n){_["is"+n]=function(r){return c.call(r)=="[object "+n+"]"}})
if(!_.isArguments(arguments)){_.isArguments=function(n){return!!(n&&_.has(n,"callee"))}}if(typeof/./!=="function"){_.isFunction=function(n){return typeof n==="function"}}_.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))}
_.isNaN=function(n){return _.isNumber(n)&&n!=+n}
_.isBoolean=function(n){return n===true||n===false||c.call(n)=="[object Boolean]"}
_.isNull=function(n){return n===null}
_.isUndefined=function(n){return n===void 0}
_.has=function(n,r){return o.call(n,r)}
_.noConflict=function(){n._=r
return this}
_.identity=function(n){return n}
_.times=function(n,r,t){var e=Array(n)
for(var i=0;i<n;i++)e[i]=r.call(t,i)
return e}
_.random=function(n,r){if(r==null){r=n
n=0}return n+Math.floor(Math.random()*(r-n+1))}
var R={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}
R.unescape=_.invert(R.escape)
var S={escape:new RegExp("["+_.keys(R.escape).join("")+"]","g"),unescape:new RegExp("("+_.keys(R.unescape).join("|")+")","g")}
_.each(["escape","unescape"],function(n){_[n]=function(r){if(r==null)return""
return(""+r).replace(S[n],function(r){return R[n][r]})}})
_.result=function(n,r){if(n==null)return null
var t=n[r]
return _.isFunction(t)?t.call(n):t}
_.mixin=function(n){A(_.functions(n),function(r){var t=_[r]=n[r]
_.prototype[r]=function(){var n=[this._wrapped]
a.apply(n,arguments)
return D.call(this,t.apply(_,n))}})}
var N=0
_.uniqueId=function(n){var r=++N+""
return n?n+r:r}
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var T=/(.)^/
var B={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"}
var q=/\\|'|\r|\n|\t|\u2028|\u2029/g
_.template=function(n,r,t){var e
t=_.defaults({},t,_.templateSettings)
var i=new RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g")
var u=0
var a="__p+='"
n.replace(i,function(r,t,e,i,f){a+=n.slice(u,f).replace(q,function(n){return"\\"+B[n]})
if(t){a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}if(e){a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}if(i){a+="';\n"+i+"\n__p+='"}u=f+r.length
return r})
a+="';\n"
if(!t.variable)a="with(obj||{}){\n"+a+"}\n"
a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n"
try{e=new Function(t.variable||"obj","_",a)}catch(n){n.source=a
throw n}if(r)return e(r,_)
var f=function(n){return e.call(this,n,_)}
f.source="function("+(t.variable||"obj")+"){\n"+a+"}"
return f}
_.chain=function(n){return _(n).chain()}
var D=function(n){return this._chain?_(n).chain():n}
_.mixin(_)
A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=e[n]
_.prototype[n]=function(){var t=this._wrapped
r.apply(t,arguments)
if((n=="shift"||n=="splice")&&t.length===0)delete t[0]
return D.call(this,t)}})
A(["concat","join","slice"],function(n){var r=e[n]
_.prototype[n]=function(){return D.call(this,r.apply(this._wrapped,arguments))}})
_.extend(_.prototype,{chain:function(){this._chain=true
return this},value:function(){return this._wrapped}})
var z=function(){_.mixin({renameKeys:function(n,r){var t={}
_(n).each(function(n,e){var i=r[e]||e
t[i]=n})
return t},intersperse:function(n,r){if(n.length===0){return[]}return _.reduce(n.slice(1),function(n,t,e){var i=typeof r==="function"?r(e):r
return n.concat([i,t])},[n[0]])},indexBy:function(n,r){var t=null
if(typeof r==="string"){t=function(n){return n[r]}}else{t=r}return _.reduce(n,function(n,r){n[t(r)]=r
return n},{})},findIndex:function(n,r,t){var e
_.any(n,function(n,i,u){if(r.call(t,n,i,u)){e=i
return true}})
return e},matches:function(n){return function(r){if(r===n){return true}for(var t in n){if(n[t]!==r[t]){return false}}return true}},indexWhere:function(n,r){return _.findIndex(n,_.matches(r))}})}
var C=function(){var n=function(n,r){return _(r).foldl(function(n,r){return n[r]},n)}
var r=function(n,t,e){if(t.length===0){return e(n)}else{var i=t[0]
var u=_(n).clone()
u[i]=r(n[i],t.slice(1),e)
return u}}
var t=function(n,t,e){return r(n,t,function(n){return _({}).extend(n,e)})}
var e=function(n,r){var t=_(n).clone()
if(r.length===1){if(_.isArray(t)){t.splice(r[0],1)}else{delete t[r[0]]}return t}else{var u=e(n[r[0]],r.slice(1))
return i(t,[r[0]],u)}}
var i=function(n,t,e){return r(n,t,function(){return e})}
var u=function(r,t,e){var u=t.slice(0,-1)
var a=n(r,u).slice()
var f=t[t.length-1]
a.splice(f,0,e)
return i(r,u,a)}
var a=u
var f=function(n,r,t){var e=r.slice()
e[e.length-1]+=1
return u(n,e,t)}
_.mixin({scanl:function(n,r,t,e){return _(n).map(function(n,i,u){t=r.call(e,t,n,i,u)
return t})},lensGet:n,lensMod:r,lensSet:i,lensDel:e,lensMerge:t,lensExtend:t,insertAt:u,insertBefore:a,insertAfter:f})}
z()
C()}).call(this)

__KA_module.exports = _;
this._ = _;
});
KAdefine("javascript/node_modules/underscore/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/underscore/underscore.js")

});
KAdefine("third_party/javascript-khansrc/backbone-src/backbone.js", function(require, module, exports) {
(function(){var t=this
var e=t.Backbone
var i=[]
var r=i.push
var s=i.slice
var n=i.splice
var a
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports}a=t.Backbone=exports}else{a=t.Backbone={}}a.VERSION="1.0.0"
var _=t._
if(!_&&typeof require!=="undefined")_=require("underscore")
var $=require("jquery")
a.$=$||t.jQuery||t.Zepto||t.ender||t.$
a.noConflict=function(){t.Backbone=e
return this}
a.emulateHTTP=false
a.emulateJSON=false
var h=a.Events={on:function(t,e,i){if(!u(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!u(this,"once",t,[e,i])||!e)return this
var r=this
var s=_.once(function(){r.off(t,s)
e.apply(this,arguments)})
s._callback=e
return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,h,o,l,c
if(!this._events||!u(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:_.keys(this._events)
for(h=0,o=a.length;h<o;h++){t=a[h]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(l=0,c=n.length;l<c;l++){s=n[l]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=s.call(arguments,1)
if(!u(this,"trigger",t,e))return this
var i=this._events[t]
var r=this._events.all
if(i)l(i,e)
if(r)l(r,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var o=/\s+/
var u=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(o.test(i)){var n=i.split(o)
for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var l=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2]
switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx)
return
case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n)
return
case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a)
return
case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h)
return
default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}}
var c={listenTo:"on",listenToOnce:"once"}
_.each(c,function(t,e){h[e]=function(e,i,r){var s=this._listeners||(this._listeners={})
var n=e._listenerId||(e._listenerId=_.uniqueId("l"))
s[n]=e
if(typeof i==="object")r=this
e[t](i,r,this)
return this}})
h.bind=h.on
h.unbind=h.off
_.extend(a,h)
var f=a.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=_.uniqueId("c")
this.attributes={}
_.extend(this,_.pick(e,d))
if(e.parse)r=this.parse(r,e)||{}
if(i=_.result(this,"defaults")){r=_.defaults({},r,i)}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
var d=["url","urlRoot","collection"]
_.extend(f.prototype,h,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return _.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return _.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,h,o,u,l
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i||(i={})
if(!this._validate(s,i))return false
n=i.unset
h=i.silent
a=[]
o=this._changing
this._changing=true
if(!o){this._previousAttributes=_.clone(this.attributes)
this.changed={}}l=this.attributes,u=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!_.isEqual(l[r],e))a.push(r)
if(!_.isEqual(u[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete l[r]:l[r]=e}if(!h){if(a.length)this._pending=true
for(var c=0,f=a.length;c<f;c++){this.trigger("change:"+a[c],this,l[a[c]],i)}}if(o)return this
if(!h){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,_.extend({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,_.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!_.isEmpty(this.changed)
return _.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?_.clone(this.changed):false
var e,i=false
var r=this._changing?this._previousAttributes:this.attributes
for(var s in t){if(_.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null
return this._previousAttributes[t]},previousAttributes:function(){return _.clone(this._previousAttributes)},fetch:function(t){t=t?_.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
M(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=_.extend({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=_.extend({},a,r)}if(i.parse===void 0)i.parse=true
var h=this
var o=i.success
i.success=function(t){h.attributes=a
var e=h.parse(t,i)
if(i.wait)e=_.extend(r||{},e)
if(_.isObject(e)&&!h.set(e,i)){return false}if(o)o(h,t,i)
h.trigger("sync",h,t,i)}
M(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?_.clone(t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,e.collection,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}M(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=_.result(this,"urlRoot")||_.result(this.collection,"url")||R()
if(this.isNew())return t
return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},_.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=_.extend({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,_.extend(e||{},{validationError:i}))
return false}})
var p=["keys","values","pairs","invert","pick","omit"]
_.each(p,function(t){f.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.attributes)
return _[t].apply(_,e)}})
var v=a.Collection=function(t,e){e||(e={})
if(e.url)this.url=e.url
if(e.model)this.model=e.model
if(e.comparator!==void 0)this.comparator=e.comparator
this._reset()
this.initialize.apply(this,arguments)
if(t)this.reset(t,_.extend({silent:true},e))}
var g={add:true,remove:true,merge:true}
var m={add:true,merge:false,remove:false}
_.extend(v.prototype,h,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,_.defaults(e||{},m))},remove:function(t,e){t=_.isArray(t)?t.slice():[t]
e||(e={})
var i,r,s,n
for(i=0,r=t.length;i<r;i++){n=this.get(t[i])
if(!n)continue
delete this._byId[n.id]
delete this._byId[n.cid]
s=this.indexOf(n)
this.models.splice(s,1)
this.length--
if(!e.silent){e.index=s
n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=_.defaults(e||{},g)
if(e.parse)t=this.parse(t,e)
if(!_.isArray(t))t=t?[t]:[]
var i,s,a,h,o,u
var l=e.at
var c=this.comparator&&l==null&&e.sort!==false
var f=_.isString(this.comparator)?this.comparator:null
var d=[],p=[],v={}
for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue
if(o=this.get(a)){if(e.remove)v[o.cid]=true
if(e.merge){o.set(a.attributes,e)
if(c&&!u&&o.hasChanged(f))u=true}}else if(e.add){d.push(a)
a.on("all",this._onModelEvent,this)
this._byId[a.cid]=a
if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!v[(a=this.models[i]).cid])p.push(a)}if(p.length)this.remove(p,e)}if(d.length){if(c)u=true
this.length+=d.length
if(l!=null){n.apply(this.models,[l,0].concat(d))}else{r.apply(this.models,d)}}if(u)this.sort({silent:true})
if(e.silent)return this
for(i=0,s=d.length;i<s;i++){(a=d[i]).trigger("add",a,this,e)}if(u)this.trigger("sort",this,e)
return this},reset:function(t,e){e||(e={})
for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models
this._reset()
this.add(t,_.extend({silent:true},e))
if(!e.silent)this.trigger("reset",this,e)
return this},push:function(t,e){t=this._prepareModel(t,e)
this.add(t,_.extend({at:this.length},e))
return t},pop:function(t){var e=this.at(this.length-1)
this.remove(e,t)
return e},unshift:function(t,e){t=this._prepareModel(t,e)
this.add(t,_.extend({at:0},e))
return t},shift:function(t){var e=this.at(0)
this.remove(e,t)
return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0
return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(_.isEmpty(t))return e?void 0:[]
return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator")
t||(t={})
if(_.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(_.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t)
return this},sortedIndex:function(t,e,i){e||(e=this.comparator)
var r=_.isFunction(e)?e:function(t){return t.get(e)}
return _.sortedIndex(this.models,t,r,i)},pluck:function(t){return _.invoke(this.models,"get",t)},fetch:function(t){t=t?_.clone(t):{}
if(t.parse===void 0)t.parse=true
var e=t.success
var i=this
t.success=function(r){var s=t.reset?"reset":"set"
i[s](r,t)
if(e)e(i,r,t)
i.trigger("sync",i,r,t)}
M(this,t)
return this.sync("read",this,t)},create:function(t,e){e=e?_.clone(e):{}
if(!(t=this._prepareModel(t,e)))return false
if(!e.wait)this.add(t,e)
var i=this
var r=e.success
e.success=function(s){if(e.wait)i.add(t,e)
if(r)r(t,s,e)}
t.save(null,e)
return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0
this.models=[]
this._byId={}},_prepareModel:function(t,e){if(t instanceof f){if(!t.collection)t.collection=this
return t}e||(e={})
e.collection=this
var i=new this.model(t,e)
if(!i._validate(t,e)){this.trigger("invalid",this,t,e)
return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection
t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return
if(t==="destroy")this.remove(e,r)
if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)]
if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}})
var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
_.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments)
e.unshift(this.models)
return _[t].apply(_,e)}})
var w=["groupBy","countBy","sortBy"]
_.each(w,function(t){v.prototype[t]=function(e,i){var r=_.isFunction(e)?e:function(t){return t.get(e)}
return _[t](this.models,r,i)}})
var b=a.View=function(t){this.cid=_.uniqueId("view")
this._configure(t||{})
this._ensureElement()
this.initialize.apply(this,arguments)
this.delegateEvents()}
var x=/^(\S+)\s*(.*)$/
var E=["model","collection","el","id","attributes","className","tagName","events"]
_.extend(b.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove()
this.stopListening()
return this},setElement:function(t,e){if(this.$el)this.undelegateEvents()
this.$el=t instanceof a.$?t:a.$(t)
this.el=this.$el[0]
if(e!==false)this.delegateEvents()
return this},delegateEvents:function(t){if(!(t||(t=_.result(this,"events"))))return this
this.undelegateEvents()
for(var e in t){var i=t[e]
if(!_.isFunction(i))i=this[t[e]]
if(!i)continue
var r=e.match(x)
var s=r[1],n=r[2]
i=_.bind(i,this)
s+=".delegateEvents"+this.cid
if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
return this},_configure:function(t){if(this.options)t=_.extend({},_.result(this,"options"),t)
_.extend(this,_.pick(t,E))
this.options=t},_ensureElement:function(){if(!this.el){var t=_.extend({},_.result(this,"attributes"))
if(this.id)t.id=_.result(this,"id")
if(this.className)t["class"]=_.result(this,"className")
var e=a.$("<"+_.result(this,"tagName")+">").attr(t)
this.setElement(e,false)}else{this.setElement(_.result(this,"el"),false)}}})
a.sync=function(t,e,i){var r=k[t]
_.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON})
var s={type:r,dataType:"json"}
if(!i.url){s.url=_.result(e,"url")||R()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded"
s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST"
if(i.emulateJSON)s.data._method=r
var n=i.beforeSend
i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)
if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=i.xhr=a.ajax(_.extend(s,i))
e.trigger("request",e,h,i)
return h}
var k={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}
a.ajax=function(){return a.$.ajax.apply(a.$,arguments)}
var S=a.Router=function(t){t||(t={})
if(t.routes)this.routes=t.routes
this._bindRoutes()
this.initialize.apply(this,arguments)}
var T=/\((.*?)\)/g
var H=/(\(\?)?:\w+/g
var A=/\*\w+/g
var I=/[\-{}\[\]+?.,\\\^$|#\s]/g
_.extend(S.prototype,h,{initialize:function(){},route:function(t,e,i){if(!_.isRegExp(t))t=this._routeToRegExp(t)
if(_.isFunction(e)){i=e
e=""}if(!i)i=this[e]
var r=this
a.history.route(t,function(s){var n=r._extractParameters(t,s)
r.execute(i,n)
r.trigger.apply(r,["route:"+e].concat(n))
r.trigger("route",e,n)
a.history.trigger("route",r,e,n)})
return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,e){a.history.navigate(t,e)
return this},_bindRoutes:function(){if(!this.routes)return
this.routes=_.result(this,"routes")
var t,e=_.keys(this.routes)
while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(T,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/]+)"}).replace(A,"(.*?)")
return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1)
return _.map(i,function(t){return t?decodeURIComponent(t):null})}})
var N=a.History=function(){this.handlers=[]
_.bindAll(this,"checkUrl")
if(typeof window!=="undefined"){this.location=window.location
this.history=window.history}}
var P=/^[#\/]|\s+$/g
var O=/^\/+|\/+$/g
var C=/msie [\w.]+/
var j=/\/$/
N.started=false
_.extend(N.prototype,h,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/)
return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname
var i=this.root.replace(j,"")
if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(P,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started")
N.started=true
this.options=_.extend({},{root:"/"},this.options,t)
this.root=this.options.root
this._wantsHashChange=this.options.hashChange!==false
this._wantsPushState=!!this.options.pushState
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
var e=this.getFragment()
var i=document.documentMode
var r=C.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7)
this.root=("/"+this.root+"/").replace(O,"/")
if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e
var s=this.location
var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true)
this.location.replace(this.root+this.location.search+"#"+this.fragment)
return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(P,"")
this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl)
clearInterval(this._checkUrlInterval)
N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment()
if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false
if(this.iframe)this.navigate(e)
this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t)
var i=_.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e)
return true}})
return i},navigate:function(t,e){if(!N.started)return false
if(!e||e===true)e={trigger:e}
t=this.getFragment(t||"")
if(this.fragment===t)return
this.fragment=t
var i=this.root+t
if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace)
if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close()
this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"")
t.replace(r+"#"+e)}else{t.hash="#"+e}}})
a.history=new N
var U=function(t,e){var i=this
var r
if(t&&_.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}_.extend(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)_.extend(r.prototype,t)
r.__super__=i.prototype
return r}
f.extend=v.extend=S.extend=b.extend=N.extend=U
var R=function(){throw new Error('A "url" property or function must be specified')}
var M=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)

});
KAdefine("javascript/node_modules/backbone/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/backbone-src/backbone.js")

});
KAdefine("third_party/javascript-khansrc/handlebars/handlebars-v4.0.12.js", function(require, module, exports) {
var icu=require("icu")
var $=require("jquery")
var i18n=require("../../../javascript/shared-package/i18n.js")
var formatContent=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").formatContent
var serialCommafy=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").serialCommafy
var stripProtocol=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").stripProtocol
var staticUrl=require("../../../javascript/shared-package/static-url.js").default
function addKAHelpers(e){e.registerHelper("formatContent",function(t,r){var i=formatContent(t,!!(r&&r.hash.nofollow))
return new e.SafeString(i)})
e.registerHelper("serialCommafy",serialCommafy)
e.registerHelper("stripProtocol",stripProtocol)
e.registerHelper("opttr",function(t){if(!Object.entries){Object.entries=function(e){var t=Object.keys(e),r=t.length,i=new Array(r)
while(r--)i[r]=[t[r],e[t[r]]]
return i}}var r=[]
var i=Object.entries(t.hash)
for(var s=0;s<i.length;s++){var n=i[s][0]
var a=i[s][1]
if(a!==null&&a!==undefined){r.push(n+'="'+e.Utils.escapeExpression(a)+'"')}}return new e.SafeString(r.join(" "))})
e.registerHelper("debug",function(e,t){console.log("Handlebars debug: ",e)})
e.registerHelper("debugger",function(){debugger})
e.registerHelper("repeat",function(e,t){var r=t.fn
var i=""
for(var s=0;s<e;s++){i=i+r(this)}return i})
e.registerHelper("eachWithMidpoint",function(e,t){var r=[]
var i=t.fn
if(e){var s=Math.floor((e.length+1)/2)
for(var n=0;n<e.length;n++){e[n]["midpoint"]=n===s
r.push(i(e[n]))}}return r.join("")})
e.registerHelper("_",i18n.handlebarsUnderscore)
e.registerHelper("i18nDoNotTranslate",i18n.handlebarsDoNotTranslate)
e.registerHelper("ngettext",i18n.handlebarsNgettext)
e.registerHelper("reverseEach",function(e,t){var r=""
for(var i=e.length-1;i>=0;i--){r+=t.fn(e[i])}return r})
if(!window.WEBPACK_BUILD){var t=function(e,t){var r="../"+e+"/ "+t+".handlebars"
return require(r)}
e.registerHelper("invokePartial",function(e,r,i){return t(e,r)(i.hash)})
var r=e.VM.invokePartial
e.VM.invokePartial=function(e,i,s){var n=Array.prototype.slice.apply(arguments)
if(e===undefined){var a=s.name
var o=a.split("/")
if(o.length>2){var l=o[1]
var u=o.slice(2).join("/")
n[0]=t(l,u)}}return r.apply(this,n)}}e.registerHelper("multiply",function(e,t){return e*t})
e.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
e.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
e.registerHelper("ellipsis",function(e,t){var r=e.replace(/<([^>]+)>/g,function(e,t){return t})
if(r.length>t){return r.substr(0,t-3)+"..."}else{return r}})
e.registerHelper("formatEvalAnswer",function(t,r){var i=$($.parseHTML(t))
var s=$.makeArray(i.filter("li:not(.pass)"))
var n=$("<div class='eval-guideline'>")
$("<div class='eval-title'>").text(s.length===0?i18n._("This project has passed evaluation."):i18n._("This project needs more work.")).appendTo(n)
var a=i.filter(".overall-eval-info").text()
var o=formatContent(a,true)
if(a.length>0){var l=$("<div class='more-info'>")
l.append($("<strong>").text(i18n._("From the evaluator:"))).append($("<div>").html(o)).appendTo(n)}if(s.length>0){$("<div class='failed-objectives'>").append($("<strong>").text(i18n._("The following objectives need more work:"))).appendTo(n)
var u=$("<ul class='styled-list'>").appendTo(n)
s.map(function(e,t){var r=$(e).find("div")
var i=formatContent(r.text(),true)
var s=r.text().length>0?$("<div class='objective-more-info'>").html(i):[]
r.empty()
var n=$("<li></li>")
n.append($("<strong>").text($(e).text())).append(s)
n.appendTo(u)})}return new e.SafeString(n[0].outerHTML)})
e.registerHelper("arrayLength",function(e){return e.length})
e.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
e.registerHelper("formatTimestamp",function(e){var t=e/1e3
var r=parseInt(t)%60
if(r<10){r="0"+r}return parseInt(t/60)+":"+r})
e.registerHelper("staticUrl",staticUrl)
e.registerHelper("zeroRatedBaseUrl",function(){var e=window.location.href
if(e.indexOf("khanacademy.org")>=0&&e.indexOf("zero.khanacademy.org")===-1){var t=e.split("khanacademy.org")[0]
return t+"zero.khanacademy.org"}else{return"zero.khanacademy.org"}})}(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r()
else if(typeof define==="function"&&define.amd)define([],r)
else if(typeof exports==="object")exports["Handlebars"]=r()
else t["Handlebars"]=r()})(this,function(){return function(e){var t={}
function r(i){if(t[i])return t[i].exports
var s=t[i]={exports:{},id:i,loaded:false}
e[i].call(s.exports,s,s.exports,r)
s.loaded=true
return s.exports}r.m=e
r.c=t
r.p=""
return r(0)}([function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(2)
var n=i(s)
var a=r(35)
var o=i(a)
var l=r(36)
var u=r(41)
var c=r(42)
var p=i(c)
var h=r(39)
var f=i(h)
var d=r(34)
var m=i(d)
var v=n["default"].create
function g(){var e=v()
e.compile=function(t,r){return u.compile(t,r,e)}
e.precompile=function(t,r){return u.precompile(t,r,e)}
e.AST=o["default"]
e.Compiler=u.Compiler
e.JavaScriptCompiler=p["default"]
e.Parser=l.parser
e.parse=l.parse
window.Handlebars=e
return e}var k=g()
k.create=g
m["default"](k)
k.Visitor=f["default"]
k["default"]=k
addKAHelpers(k)
t["default"]=k
e.exports=t["default"]},function(e,t){"use strict"
t["default"]=function(e){return e&&e.__esModule?e:{default:e}}
t.__esModule=true},function(e,t,r){"use strict"
var i=r(3)["default"]
var s=r(1)["default"]
t.__esModule=true
var n=r(4)
var a=i(n)
var o=r(21)
var l=s(o)
var u=r(6)
var c=s(u)
var p=r(5)
var h=i(p)
var f=r(22)
var d=i(f)
var m=r(34)
var v=s(m)
function g(){var e=new a.HandlebarsEnvironment
h.extend(e,a)
e.SafeString=l["default"]
e.Exception=c["default"]
e.Utils=h
e.escapeExpression=h.escapeExpression
e.VM=d
e.template=function(t){return d.template(t,e)}
return e}var k=g()
k.create=g
v["default"](k)
k["default"]=k
t["default"]=k
e.exports=t["default"]},function(e,t){"use strict"
t["default"]=function(e){if(e&&e.__esModule){return e}else{var t={}
if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r))t[r]=e[r]}}t["default"]=e
return t}}
t.__esModule=true},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.HandlebarsEnvironment=m
var s=r(5)
var n=r(6)
var a=i(n)
var o=r(10)
var l=r(18)
var u=r(20)
var c=i(u)
var p="4.0.12"
t.VERSION=p
var h=7
t.COMPILER_REVISION=h
var f={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"}
t.REVISION_CHANGES=f
var d="[object Object]"
function m(e,t,r){this.helpers=e||{}
this.partials=t||{}
this.decorators=r||{}
o.registerDefaultHelpers(this)
l.registerDefaultDecorators(this)}m.prototype={constructor:m,logger:c["default"],log:c["default"].log,registerHelper:function e(t,r){if(s.toString.call(t)===d){if(r){throw new a["default"]("Arg not supported with multiple helpers")}s.extend(this.helpers,t)}else{this.helpers[t]=r}},unregisterHelper:function e(t){delete this.helpers[t]},registerPartial:function e(t,r){if(s.toString.call(t)===d){s.extend(this.partials,t)}else{if(typeof r==="undefined"){throw new a["default"]('Attempting to register a partial called "'+t+'" as undefined')}this.partials[t]=r}},unregisterPartial:function e(t){delete this.partials[t]},registerDecorator:function e(t,r){if(s.toString.call(t)===d){if(r){throw new a["default"]("Arg not supported with multiple decorators")}s.extend(this.decorators,t)}else{this.decorators[t]=r}},unregisterDecorator:function e(t){delete this.decorators[t]}}
var v=c["default"].log
t.log=v
t.createFrame=s.createFrame
t.logger=c["default"]},function(e,t){"use strict"
t.__esModule=true
t.extend=a
t.indexOf=c
t.escapeExpression=p
t.isEmpty=h
t.createFrame=f
t.blockParams=d
t.appendContextPath=m
var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"}
var i=/[&<>"'`=]/g,s=/[&<>"'`=]/
function n(e){return r[e]}function a(e){for(var t=1;t<arguments.length;t++){for(var r in arguments[t]){if(Object.prototype.hasOwnProperty.call(arguments[t],r)){e[r]=arguments[t][r]}}}return e}var o=Object.prototype.toString
t.toString=o
var l=function e(t){return typeof t==="function"}
if(l(/x/)){t.isFunction=l=function(e){return typeof e==="function"&&o.call(e)==="[object Function]"}}t.isFunction=l
var u=Array.isArray||function(e){return e&&typeof e==="object"?o.call(e)==="[object Array]":false}
t.isArray=u
function c(e,t){for(var r=0,i=e.length;r<i;r++){if(e[r]===t){return r}}return-1}function p(e){if(typeof e!=="string"){if(e&&e.toHTML){return e.toHTML()}else if(e==null){return""}else if(!e){return e+""}e=""+e}if(!s.test(e)){return e}return e.replace(i,n)}function h(e){if(!e&&e!==0){return true}else if(u(e)&&e.length===0){return true}else{return false}}function f(e){var t=a({},e)
t._parent=e
return t}function d(e,t){e.path=t
return e}function m(e,t){return(e?e+".":"")+t}},function(e,t,r){"use strict"
var i=r(7)["default"]
t.__esModule=true
var s=["description","fileName","lineNumber","message","name","number","stack"]
function n(e,t){var r=t&&t.loc,a=undefined,o=undefined
if(r){a=r.start.line
o=r.start.column
e+=" - "+a+":"+o}var l=Error.prototype.constructor.call(this,e)
for(var u=0;u<s.length;u++){this[s[u]]=l[s[u]]}if(Error.captureStackTrace){Error.captureStackTrace(this,n)}try{if(r){this.lineNumber=a
if(i){Object.defineProperty(this,"column",{value:o,enumerable:true})}else{this.column=o}}}catch(e){}}n.prototype=new Error
t["default"]=n
e.exports=t["default"]},function(e,t,r){e.exports={default:r(8),__esModule:true}},function(e,t,r){var $=r(9)
e.exports=function e(t,r,i){return $.setDesc(t,r,i)}},function(e,t){var r=Object
e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.registerDefaultHelpers=k
var s=r(11)
var n=i(s)
var a=r(12)
var o=i(a)
var l=r(13)
var u=i(l)
var c=r(14)
var p=i(c)
var h=r(15)
var f=i(h)
var d=r(16)
var m=i(d)
var v=r(17)
var g=i(v)
function k(e){n["default"](e)
o["default"](e)
u["default"](e)
p["default"](e)
f["default"](e)
m["default"](e)
g["default"](e)}},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("blockHelperMissing",function(t,r){var s=r.inverse,n=r.fn
if(t===true){return n(this)}else if(t===false||t==null){return s(this)}else if(i.isArray(t)){if(t.length>0){if(r.ids){r.ids=[r.name]}return e.helpers.each(t,r)}else{return s(this)}}else{if(r.data&&r.ids){var a=i.createFrame(r.data)
a.contextPath=i.appendContextPath(r.data.contextPath,r.name)
r={data:a}}return n(t,r)}})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(5)
var n=r(6)
var a=i(n)
t["default"]=function(e){e.registerHelper("each",function(e,t){if(!t){throw new a["default"]("Must pass iterator to #each")}var r=t.fn,i=t.inverse,n=0,o="",l=undefined,u=undefined
if(t.data&&t.ids){u=s.appendContextPath(t.data.contextPath,t.ids[0])+"."}if(s.isFunction(e)){e=e.call(this)}if(t.data){l=s.createFrame(t.data)}function c(t,i,n){if(l){l.key=t
l.index=i
l.first=i===0
l.last=!!n
if(u){l.contextPath=u+t}}o=o+r(e[t],{data:l,blockParams:s.blockParams([e[t],t],[u+t,null])})}if(e&&typeof e==="object"){if(s.isArray(e)){for(var p=e.length;n<p;n++){if(n in e){c(n,n,n===e.length-1)}}}else{var h=undefined
for(var f in e){if(e.hasOwnProperty(f)){if(h!==undefined){c(h,n-1)}h=f
n++}}if(h!==undefined){c(h,n-1,true)}}}if(n===0){o=i(this)}return o})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(6)
var n=i(s)
t["default"]=function(e){e.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined}else{throw new n["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("if",function(e,t){if(i.isFunction(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||i.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}})
e.registerHelper("unless",function(t,r){return e.helpers["if"].call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})}
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=function(e){e.registerHelper("log",function(){var t=[undefined],r=arguments[arguments.length-1]
for(var i=0;i<arguments.length-1;i++){t.push(arguments[i])}var s=1
if(r.hash.level!=null){s=r.hash.level}else if(r.data&&r.data.level!=null){s=r.data.level}t[0]=s
e.log.apply(e,t)})}
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("with",function(e,t){if(i.isFunction(e)){e=e.call(this)}var r=t.fn
if(!i.isEmpty(e)){var s=t.data
if(t.data&&t.ids){s=i.createFrame(t.data)
s.contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])}return r(e,{data:s,blockParams:i.blockParams([e],[s&&s.contextPath])})}else{return t.inverse(this)}})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.registerDefaultDecorators=a
var s=r(19)
var n=i(s)
function a(e){n["default"](e)}},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerDecorator("inline",function(e,t,r,s){var n=e
if(!t.partials){t.partials={}
n=function(s,n){var a=r.partials
r.partials=i.extend({},a,t.partials)
var o=e(s,n)
r.partials=a
return o}}t.partials[s.args[0]]=s.fn
return n})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
var s={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function e(t){if(typeof t==="string"){var r=i.indexOf(s.methodMap,t.toLowerCase())
if(r>=0){t=r}else{t=parseInt(t,10)}}return t},log:function e(t){t=s.lookupLevel(t)
if(typeof console!=="undefined"&&s.lookupLevel(s.level)<=t){var r=s.methodMap[t]
if(!console[r]){r="log"}for(var i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++){n[a-1]=arguments[a]}console[r].apply(console,n)}}}
t["default"]=s
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
function r(e){this.string=e}r.prototype.toString=r.prototype.toHTML=function(){return""+this.string}
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(23)["default"]
var s=r(3)["default"]
var n=r(1)["default"]
t.__esModule=true
t.checkRevision=p
t.template=h
t.wrapProgram=f
t.resolvePartial=d
t.invokePartial=m
t.noop=v
var a=r(5)
var o=s(a)
var l=r(6)
var u=n(l)
var c=r(4)
function p(e){var t=e&&e[0]||1,r=c.COMPILER_REVISION
if(t!==r){if(t<r){var i=c.REVISION_CHANGES[r],s=c.REVISION_CHANGES[t]
throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+s+").")}else{throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function h(e,t){if(!t){throw new u["default"]("No environment passed to template")}if(!e||!e.main){throw new u["default"]("Unknown template object: "+typeof e)}e.main.decorator=e.main_d
t.VM.checkRevision(e.compiler)
function r(r,i,s){if(s.hash){i=o.extend({},i,s.hash)
if(s.ids){s.ids[0]=true}}r=t.VM.resolvePartial.call(this,r,i,s)
var n=t.VM.invokePartial.call(this,r,i,s)
if(n==null&&t.compile){s.partials[s.name]=t.compile(r,e.compilerOptions,t)
n=s.partials[s.name](i,s)}if(n!=null){if(s.indent){var a=n.split("\n")
for(var l=0,c=a.length;l<c;l++){if(!a[l]&&l+1===c){break}a[l]=s.indent+a[l]}n=a.join("\n")}return n}else{throw new u["default"]("The partial "+s.name+" could not be compiled when running in runtime-only mode")}}var s={strict:function e(t,r){if(!(r in t)){throw new u["default"]('"'+r+'" not defined in '+t)}return t[r]},lookup:function e(t,r){var i=t.length
for(var s=0;s<i;s++){if(t[s]&&t[s][r]!=null){return t[s][r]}}},lambda:function e(t,r){return typeof t==="function"?t.call(r):t},escapeExpression:o.escapeExpression,invokePartial:r,fn:function t(r){var i=e[r]
i.decorator=e[r+"_d"]
return i},programs:[],program:function e(t,r,i,s,n){var a=this.programs[t],o=this.fn(t)
if(r||n||s||i){a=f(this,t,o,r,i,s,n)}else if(!a){a=this.programs[t]=f(this,t,o)}return a},data:function e(t,r){while(t&&r--){t=t._parent}return t},merge:function e(t,r){var i=t||r
if(t&&r&&t!==r){i=o.extend({},r,t)}return i},nullContext:i({}),noop:t.VM.noop,compilerInfo:e.compiler}
function n(t){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
var i=r.data
n._setup(r)
if(!r.partial&&e.useData){i=g(t,i)}var a=undefined,o=e.useBlockParams?[]:undefined
if(e.useDepths){if(r.depths){a=t!=r.depths[0]?[t].concat(r.depths):r.depths}else{a=[t]}}function l(t){return""+e.main(s,t,s.helpers,s.partials,i,o,a)}l=k(e.main,l,s,r.depths||[],i,o)
return l(t,r)}n.isTop=true
n._setup=function(r){if(!r.partial){s.helpers=s.merge(r.helpers,t.helpers)
if(e.usePartial){s.partials=s.merge(r.partials,t.partials)}if(e.usePartial||e.useDecorators){s.decorators=s.merge(r.decorators,t.decorators)}}else{s.helpers=r.helpers
s.partials=r.partials
s.decorators=r.decorators}}
n._child=function(t,r,i,n){if(e.useBlockParams&&!i){throw new u["default"]("must pass block params")}if(e.useDepths&&!n){throw new u["default"]("must pass parent depths")}return f(s,t,e[t],r,0,i,n)}
return n}function f(e,t,r,i,s,n,a){function o(t){var s=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
var o=a
if(a&&t!=a[0]&&!(t===e.nullContext&&a[0]===null)){o=[t].concat(a)}return r(e,t,e.helpers,e.partials,s.data||i,n&&[s.blockParams].concat(n),o)}o=k(r,o,e,a,i,n)
o.program=t
o.depth=a?a.length:0
o.blockParams=s||0
return o}function d(e,t,r){if(!e){if(r.name==="@partial-block"){e=r.data["partial-block"]}else{e=r.partials[r.name]}}else if(!e.call&&!r.name){r.name=e
e=r.partials[e]}return e}function m(e,t,r){var i=r.data&&r.data["partial-block"]
r.partial=true
if(r.ids){r.data.contextPath=r.ids[0]||r.data.contextPath}var s=undefined
if(r.fn&&r.fn!==v){(function(){r.data=c.createFrame(r.data)
var e=r.fn
s=r.data["partial-block"]=function t(r){var s=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
s.data=c.createFrame(s.data)
s.data["partial-block"]=i
return e(r,s)}
if(e.partials){r.partials=o.extend({},r.partials,e.partials)}})()}if(e===undefined&&s){e=s}if(e===undefined){throw new u["default"]("The partial "+r.name+" could not be found")}else if(e instanceof Function){return e(t,r)}}function v(){return""}function g(e,t){if(!t||!("root"in t)){t=t?c.createFrame(t):{}
t.root=e}return t}function k(e,t,r,i,s,n){if(e.decorator){var a={}
t=e.decorator(t,a,r,i&&i[0],s,n,i)
o.extend(t,a)}return t}},function(e,t,r){e.exports={default:r(24),__esModule:true}},function(e,t,r){r(25)
e.exports=r(30).Object.seal},function(e,t,r){var i=r(26)
r(27)("seal",function(e){return function t(r){return e&&i(r)?e(r):r}})},function(e,t){e.exports=function(e){return typeof e==="object"?e!==null:typeof e==="function"}},function(e,t,r){var i=r(28),s=r(30),n=r(33)
e.exports=function(e,t){var r=(s.Object||{})[e]||Object[e],a={}
a[e]=t(r)
i(i.S+i.F*n(function(){r(1)}),"Object",a)}},function(e,t,r){var i=r(29),s=r(30),n=r(31),a="prototype"
var o=function(e,t,r){var l=e&o.F,u=e&o.G,c=e&o.S,p=e&o.P,h=e&o.B,f=e&o.W,d=u?s:s[t]||(s[t]={}),m=u?i:c?i[t]:(i[t]||{})[a],v,g,k
if(u)r=t
for(v in r){g=!l&&m&&v in m
if(g&&v in d)continue
k=g?m[v]:r[v]
d[v]=u&&typeof m[v]!="function"?r[v]:h&&g?n(k,i):f&&m[v]==k?function(e){var t=function(t){return this instanceof e?new e(t):e(t)}
t[a]=e[a]
return t}(k):p&&typeof k=="function"?n(Function.call,k):k
if(p)(d[a]||(d[a]={}))[v]=k}}
o.F=1
o.G=2
o.S=4
o.P=8
o.B=16
o.W=32
e.exports=o},function(e,t){var r=e.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")()
if(typeof __g=="number")__g=r},function(e,t){var r=e.exports={version:"1.2.6"}
if(typeof __e=="number")__e=r},function(e,t,r){var i=r(32)
e.exports=function(e,t,r){i(e)
if(t===undefined)return e
switch(r){case 1:return function(r){return e.call(t,r)}
case 2:return function(r,i){return e.call(t,r,i)}
case 3:return function(r,i,s){return e.call(t,r,i,s)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!")
return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return true}}},function(e,t){(function(r){"use strict"
t.__esModule=true
t["default"]=function(e){var t=typeof r!=="undefined"?r:window,i=t.Handlebars
e.noConflict=function(){if(t.Handlebars===e){t.Handlebars=i}return e}}
e.exports=t["default"]}).call(t,function(){return this}())},function(e,t){"use strict"
t.__esModule=true
var r={helpers:{helperExpression:function e(t){return t.type==="SubExpression"||(t.type==="MustacheStatement"||t.type==="BlockStatement")&&!!(t.params&&t.params.length||t.hash)},scopedId:function e(t){return/^\.|this\b/.test(t.original)},simpleId:function e(t){return t.parts.length===1&&!r.helpers.scopedId(t)&&!t.depth}}}
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
var s=r(3)["default"]
t.__esModule=true
t.parse=f
var n=r(37)
var a=i(n)
var o=r(38)
var l=i(o)
var u=r(40)
var c=s(u)
var p=r(5)
t.parser=a["default"]
var h={}
p.extend(h,c)
function f(e,t){if(e.type==="Program"){return e}a["default"].yy=h
h.locInfo=function(e){return new h.SourceLocation(t&&t.srcName,e)}
var r=new l["default"](t)
return r.accept(a["default"].parse(e))}},function(e,t){"use strict"
t.__esModule=true
var r=function(){var e={trace:function e(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(t,r,i,s,n,a,o){var l=a.length-1
switch(n){case 1:return a[l-1]
break
case 2:this.$=s.prepareProgram(a[l])
break
case 3:this.$=a[l]
break
case 4:this.$=a[l]
break
case 5:this.$=a[l]
break
case 6:this.$=a[l]
break
case 7:this.$=a[l]
break
case 8:this.$=a[l]
break
case 9:this.$={type:"CommentStatement",value:s.stripComment(a[l]),strip:s.stripFlags(a[l],a[l]),loc:s.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:a[l],value:a[l],loc:s.locInfo(this._$)}
break
case 11:this.$=s.prepareRawBlock(a[l-2],a[l-1],a[l],this._$)
break
case 12:this.$={path:a[l-3],params:a[l-2],hash:a[l-1]}
break
case 13:this.$=s.prepareBlock(a[l-3],a[l-2],a[l-1],a[l],false,this._$)
break
case 14:this.$=s.prepareBlock(a[l-3],a[l-2],a[l-1],a[l],true,this._$)
break
case 15:this.$={open:a[l-5],path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:s.stripFlags(a[l-5],a[l])}
break
case 16:this.$={path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:s.stripFlags(a[l-5],a[l])}
break
case 17:this.$={path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:s.stripFlags(a[l-5],a[l])}
break
case 18:this.$={strip:s.stripFlags(a[l-1],a[l-1]),program:a[l]}
break
case 19:var u=s.prepareBlock(a[l-2],a[l-1],a[l],a[l],false,this._$),c=s.prepareProgram([u],a[l-1].loc)
c.chained=true
this.$={strip:a[l-2].strip,program:c,chain:true}
break
case 20:this.$=a[l]
break
case 21:this.$={path:a[l-1],strip:s.stripFlags(a[l-2],a[l])}
break
case 22:this.$=s.prepareMustache(a[l-3],a[l-2],a[l-1],a[l-4],s.stripFlags(a[l-4],a[l]),this._$)
break
case 23:this.$=s.prepareMustache(a[l-3],a[l-2],a[l-1],a[l-4],s.stripFlags(a[l-4],a[l]),this._$)
break
case 24:this.$={type:"PartialStatement",name:a[l-3],params:a[l-2],hash:a[l-1],indent:"",strip:s.stripFlags(a[l-4],a[l]),loc:s.locInfo(this._$)}
break
case 25:this.$=s.preparePartialBlock(a[l-2],a[l-1],a[l],this._$)
break
case 26:this.$={path:a[l-3],params:a[l-2],hash:a[l-1],strip:s.stripFlags(a[l-4],a[l])}
break
case 27:this.$=a[l]
break
case 28:this.$=a[l]
break
case 29:this.$={type:"SubExpression",path:a[l-3],params:a[l-2],hash:a[l-1],loc:s.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:a[l],loc:s.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:s.id(a[l-2]),value:a[l],loc:s.locInfo(this._$)}
break
case 32:this.$=s.id(a[l-1])
break
case 33:this.$=a[l]
break
case 34:this.$=a[l]
break
case 35:this.$={type:"StringLiteral",value:a[l],original:a[l],loc:s.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(a[l]),original:Number(a[l]),loc:s.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:a[l]==="true",original:a[l]==="true",loc:s.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:s.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:s.locInfo(this._$)}
break
case 40:this.$=a[l]
break
case 41:this.$=a[l]
break
case 42:this.$=s.preparePath(true,a[l],this._$)
break
case 43:this.$=s.preparePath(false,a[l],this._$)
break
case 44:a[l-2].push({part:s.id(a[l]),original:a[l],separator:a[l-1]})
this.$=a[l-2]
break
case 45:this.$=[{part:s.id(a[l]),original:a[l]}]
break
case 46:this.$=[]
break
case 47:a[l-1].push(a[l])
break
case 48:this.$=[a[l]]
break
case 49:a[l-1].push(a[l])
break
case 50:this.$=[]
break
case 51:a[l-1].push(a[l])
break
case 58:this.$=[]
break
case 59:a[l-1].push(a[l])
break
case 64:this.$=[]
break
case 65:a[l-1].push(a[l])
break
case 70:this.$=[]
break
case 71:a[l-1].push(a[l])
break
case 78:this.$=[]
break
case 79:a[l-1].push(a[l])
break
case 82:this.$=[]
break
case 83:a[l-1].push(a[l])
break
case 86:this.$=[]
break
case 87:a[l-1].push(a[l])
break
case 90:this.$=[]
break
case 91:a[l-1].push(a[l])
break
case 94:this.$=[]
break
case 95:a[l-1].push(a[l])
break
case 98:this.$=[a[l]]
break
case 99:a[l-1].push(a[l])
break
case 100:this.$=[a[l]]
break
case 101:a[l-1].push(a[l])
break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function e(t,r){throw new Error(t)},parse:function e(t){var r=this,i=[0],s=[null],n=[],a=this.table,o="",l=0,u=0,c=0,p=2,h=1
this.lexer.setInput(t)
this.lexer.yy=this.yy
this.yy.lexer=this.lexer
this.yy.parser=this
if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={}
var f=this.lexer.yylloc
n.push(f)
var d=this.lexer.options&&this.lexer.options.ranges
if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError
function m(e){i.length=i.length-2*e
s.length=s.length-e
n.length=n.length-e}function v(){var e
e=r.lexer.lex()||1
if(typeof e!=="number"){e=r.symbols_[e]||e}return e}var g,k,y,b,S,P,x={},w,E,C,L
while(true){y=i[i.length-1]
if(this.defaultActions[y]){b=this.defaultActions[y]}else{if(g===null||typeof g=="undefined"){g=v()}b=a[y]&&a[y][g]}if(typeof b==="undefined"||!b.length||!b[0]){var I=""
if(!c){L=[]
for(w in a[y])if(this.terminals_[w]&&w>2){L.push("'"+this.terminals_[w]+"'")}if(this.lexer.showPosition){I="Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{I="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(I,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:f,expected:L})}}if(b[0]instanceof Array&&b.length>1){throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+g)}switch(b[0]){case 1:i.push(g)
s.push(this.lexer.yytext)
n.push(this.lexer.yylloc)
i.push(b[1])
g=null
if(!k){u=this.lexer.yyleng
o=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
if(c>0)c--}else{g=k
k=null}break
case 2:E=this.productions_[b[1]][1]
x.$=s[s.length-E]
x._$={first_line:n[n.length-(E||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(E||1)].first_column,last_column:n[n.length-1].last_column}
if(d){x._$.range=[n[n.length-(E||1)].range[0],n[n.length-1].range[1]]}P=this.performAction.call(x,o,u,l,this.yy,b[1],s,n)
if(typeof P!=="undefined"){return P}if(E){i=i.slice(0,-1*E*2)
s=s.slice(0,-1*E)
n=n.slice(0,-1*E)}i.push(this.productions_[b[1]][0])
s.push(x.$)
n.push(x._$)
C=a[i[i.length-2]][i[i.length-1]]
i.push(C)
break
case 3:return true}}return true}}
var t=function(){var e={EOF:1,parseError:function e(t,r){if(this.yy.parser){this.yy.parser.parseError(t,r)}else{throw new Error(t)}},setInput:function e(t){this._input=t
this._more=this._less=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
if(this.options.ranges)this.yylloc.range=[0,0]
this.offset=0
return this},input:function e(){var t=this._input[0]
this.yytext+=t
this.yyleng++
this.offset++
this.match+=t
this.matched+=t
var r=t.match(/(?:\r\n?|\n).*/g)
if(r){this.yylineno++
this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++
this._input=this._input.slice(1)
return t},unput:function e(t){var r=t.length
var i=t.split(/(?:\r\n?|\n)/g)
this._input=t+this._input
this.yytext=this.yytext.substr(0,this.yytext.length-r-1)
this.offset-=r
var s=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1)
this.matched=this.matched.substr(0,this.matched.length-1)
if(i.length-1)this.yylineno-=i.length-1
var n=this.yylloc.range
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-r}
if(this.options.ranges){this.yylloc.range=[n[0],n[0]+this.yyleng-r]}return this},more:function e(){this._more=true
return this},less:function e(t){this.unput(this.match.slice(t))},pastInput:function e(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function e(){var t=this.match
if(t.length<20){t+=this._input.substr(0,20-t.length)}return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function e(){var t=this.pastInput()
var r=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+r+"^"},next:function e(){if(this.done){return this.EOF}if(!this._input)this.done=true
var t,r,i,s,n,a
if(!this._more){this.yytext=""
this.match=""}var o=this._currentRules()
for(var l=0;l<o.length;l++){i=this._input.match(this.rules[o[l]])
if(i&&(!r||i[0].length>r[0].length)){r=i
s=l
if(!this.options.flex)break}}if(r){a=r[0].match(/(?:\r\n?|\n).*/g)
if(a)this.yylineno+=a.length
this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length}
this.yytext+=r[0]
this.match+=r[0]
this.matches=r
this.yyleng=this.yytext.length
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false
this._input=this._input.slice(r[0].length)
this.matched+=r[0]
t=this.performAction.call(this,this.yy,this,o[s],this.conditionStack[this.conditionStack.length-1])
if(this.done&&this._input)this.done=false
if(t)return t
else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function e(){var t=this.next()
if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function e(t){this.conditionStack.push(t)},popState:function e(){return this.conditionStack.pop()},_currentRules:function e(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function e(){return this.conditionStack[this.conditionStack.length-2]},pushState:function e(t){this.begin(t)}}
e.options={}
e.performAction=function e(t,r,i,s){function n(e,t){return r.yytext=r.yytext.substr(e,r.yyleng-t)}var a=s
switch(i){case 0:if(r.yytext.slice(-2)==="\\\\"){n(0,1)
this.begin("mu")}else if(r.yytext.slice(-1)==="\\"){n(0,1)
this.begin("emu")}else{this.begin("mu")}if(r.yytext)return 15
break
case 1:return 15
break
case 2:this.popState()
return 15
break
case 3:this.begin("raw")
return 15
break
case 4:this.popState()
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15}else{r.yytext=r.yytext.substr(5,r.yyleng-9)
return"END_RAW_BLOCK"}break
case 5:return 15
break
case 6:this.popState()
return 14
break
case 7:return 65
break
case 8:return 68
break
case 9:return 19
break
case 10:this.popState()
this.begin("raw")
return 23
break
case 11:return 55
break
case 12:return 60
break
case 13:return 29
break
case 14:return 47
break
case 15:this.popState()
return 44
break
case 16:this.popState()
return 44
break
case 17:return 34
break
case 18:return 39
break
case 19:return 51
break
case 20:return 48
break
case 21:this.unput(r.yytext)
this.popState()
this.begin("com")
break
case 22:this.popState()
return 14
break
case 23:return 48
break
case 24:return 73
break
case 25:return 72
break
case 26:return 72
break
case 27:return 87
break
case 28:break
case 29:this.popState()
return 54
break
case 30:this.popState()
return 33
break
case 31:r.yytext=n(1,2).replace(/\\"/g,'"')
return 80
break
case 32:r.yytext=n(1,2).replace(/\\'/g,"'")
return 80
break
case 33:return 85
break
case 34:return 82
break
case 35:return 82
break
case 36:return 83
break
case 37:return 84
break
case 38:return 81
break
case 39:return 75
break
case 40:return 77
break
case 41:return 72
break
case 42:r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1")
return 72
break
case 43:return"INVALID"
break
case 44:return 5
break}}
e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/]
e.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}}
return e}()
e.lexer=t
function r(){this.yy={}}r.prototype=e
e.Parser=r
return new r}()
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(39)
var n=i(s)
function a(){var e=arguments.length<=0||arguments[0]===undefined?{}:arguments[0]
this.options=e}a.prototype=new n["default"]
a.prototype.Program=function(e){var t=!this.options.ignoreStandalone
var r=!this.isRootSeen
this.isRootSeen=true
var i=e.body
for(var s=0,n=i.length;s<n;s++){var a=i[s],p=this.accept(a)
if(!p){continue}var h=o(i,s,r),f=l(i,s,r),d=p.openStandalone&&h,m=p.closeStandalone&&f,v=p.inlineStandalone&&h&&f
if(p.close){u(i,s,true)}if(p.open){c(i,s,true)}if(t&&v){u(i,s)
if(c(i,s)){if(a.type==="PartialStatement"){a.indent=/([ \t]+$)/.exec(i[s-1].original)[1]}}}if(t&&d){u((a.program||a.inverse).body)
c(i,s)}if(t&&m){u(i,s)
c((a.inverse||a.program).body)}}return e}
a.prototype.BlockStatement=a.prototype.DecoratorBlock=a.prototype.PartialBlockStatement=function(e){this.accept(e.program)
this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,i=r,s=r
if(r&&r.chained){i=r.body[0].program
while(s.chained){s=s.body[s.body.length-1].program}}var n={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:l(t.body),closeStandalone:o((i||t).body)}
if(e.openStrip.close){u(t.body,null,true)}if(r){var a=e.inverseStrip
if(a.open){c(t.body,null,true)}if(a.close){u(i.body,null,true)}if(e.closeStrip.open){c(s.body,null,true)}if(!this.options.ignoreStandalone&&o(t.body)&&l(i.body)){c(t.body)
u(i.body)}}else if(e.closeStrip.open){c(t.body,null,true)}return n}
a.prototype.Decorator=a.prototype.MustacheStatement=function(e){return e.strip}
a.prototype.PartialStatement=a.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:true,open:t.open,close:t.close}}
function o(e,t,r){if(t===undefined){t=e.length}var i=e[t-1],s=e[t-2]
if(!i){return r}if(i.type==="ContentStatement"){return(s||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}}function l(e,t,r){if(t===undefined){t=-1}var i=e[t+1],s=e[t+2]
if(!i){return r}if(i.type==="ContentStatement"){return(s||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}}function u(e,t,r){var i=e[t==null?0:t+1]
if(!i||i.type!=="ContentStatement"||!r&&i.rightStripped){return}var s=i.value
i.value=i.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,"")
i.rightStripped=i.value!==s}function c(e,t,r){var i=e[t==null?e.length-1:t-1]
if(!i||i.type!=="ContentStatement"||!r&&i.leftStripped){return}var s=i.value
i.value=i.value.replace(r?/\s+$/:/[ \t]+$/,"")
i.leftStripped=i.value!==s
return i.leftStripped}t["default"]=a
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(6)
var n=i(s)
function a(){this.parents=[]}a.prototype={constructor:a,mutating:false,acceptKey:function e(t,r){var i=this.accept(t[r])
if(this.mutating){if(i&&!a.prototype[i.type]){throw new n["default"]('Unexpected node type "'+i.type+'" found when accepting '+r+" on "+t.type)}t[r]=i}},acceptRequired:function e(t,r){this.acceptKey(t,r)
if(!t[r]){throw new n["default"](t.type+" requires "+r)}},acceptArray:function e(t){for(var r=0,i=t.length;r<i;r++){this.acceptKey(t,r)
if(!t[r]){t.splice(r,1)
r--
i--}}},accept:function e(t){if(!t){return}if(!this[t.type]){throw new n["default"]("Unknown type: "+t.type,t)}if(this.current){this.parents.unshift(this.current)}this.current=t
var r=this[t.type](t)
this.current=this.parents.shift()
if(!this.mutating||r){return r}else if(r!==false){return t}},Program:function e(t){this.acceptArray(t.body)},MustacheStatement:o,Decorator:o,BlockStatement:l,DecoratorBlock:l,PartialStatement:u,PartialBlockStatement:function e(t){u.call(this,t)
this.acceptKey(t,"program")},ContentStatement:function e(){},CommentStatement:function e(){},SubExpression:o,PathExpression:function e(){},StringLiteral:function e(){},NumberLiteral:function e(){},BooleanLiteral:function e(){},UndefinedLiteral:function e(){},NullLiteral:function e(){},Hash:function e(t){this.acceptArray(t.pairs)},HashPair:function e(t){this.acceptRequired(t,"value")}}
function o(e){this.acceptRequired(e,"path")
this.acceptArray(e.params)
this.acceptKey(e,"hash")}function l(e){o.call(this,e)
this.acceptKey(e,"program")
this.acceptKey(e,"inverse")}function u(e){this.acceptRequired(e,"name")
this.acceptArray(e.params)
this.acceptKey(e,"hash")}t["default"]=a
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.SourceLocation=o
t.id=l
t.stripFlags=u
t.stripComment=c
t.preparePath=p
t.prepareMustache=h
t.prepareRawBlock=f
t.prepareBlock=d
t.prepareProgram=m
t.preparePartialBlock=v
var s=r(6)
var n=i(s)
function a(e,t){t=t.path?t.path.original:t
if(e.path.original!==t){var r={loc:e.path.loc}
throw new n["default"](e.path.original+" doesn't match "+t,r)}}function o(e,t){this.source=e
this.start={line:t.first_line,column:t.first_column}
this.end={line:t.last_line,column:t.last_column}}function l(e){if(/^\[.*\]$/.test(e)){return e.substr(1,e.length-2)}else{return e}}function u(e,t){return{open:e.charAt(2)==="~",close:t.charAt(t.length-3)==="~"}}function c(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function p(e,t,r){r=this.locInfo(r)
var i=e?"@":"",s=[],a=0
for(var o=0,l=t.length;o<l;o++){var u=t[o].part,c=t[o].original!==u
i+=(t[o].separator||"")+u
if(!c&&(u===".."||u==="."||u==="this")){if(s.length>0){throw new n["default"]("Invalid path: "+i,{loc:r})}else if(u===".."){a++}}else{s.push(u)}}return{type:"PathExpression",data:e,depth:a,parts:s,original:i,loc:r}}function h(e,t,r,i,s,n){var a=i.charAt(3)||i.charAt(2),o=a!=="{"&&a!=="&"
var l=/\*/.test(i)
return{type:l?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:o,strip:s,loc:this.locInfo(n)}}function f(e,t,r,i){a(e,r)
i=this.locInfo(i)
var s={type:"Program",body:t,strip:{},loc:i}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:s,openStrip:{},inverseStrip:{},closeStrip:{},loc:i}}function d(e,t,r,i,s,o){if(i&&i.path){a(e,i)}var l=/\*/.test(e.open)
t.blockParams=e.blockParams
var u=undefined,c=undefined
if(r){if(l){throw new n["default"]("Unexpected inverse block on decorator",r)}if(r.chain){r.program.body[0].closeStrip=i.strip}c=r.strip
u=r.program}if(s){s=u
u=t
t=s}return{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:u,openStrip:e.strip,inverseStrip:c,closeStrip:i&&i.strip,loc:this.locInfo(o)}}function m(e,t){if(!t&&e.length){var r=e[0].loc,i=e[e.length-1].loc
if(r&&i){t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:i.end.line,column:i.end.column}}}}return{type:"Program",body:e,strip:{},loc:t}}function v(e,t,r,i){a(e,r)
return{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(i)}}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.Compiler=c
t.precompile=p
t.compile=h
var s=r(6)
var n=i(s)
var a=r(5)
var o=r(35)
var l=i(o)
var u=[].slice
function c(){}c.prototype={compiler:c,equals:function e(t){var r=this.opcodes.length
if(t.opcodes.length!==r){return false}for(var i=0;i<r;i++){var s=this.opcodes[i],n=t.opcodes[i]
if(s.opcode!==n.opcode||!f(s.args,n.args)){return false}}r=this.children.length
for(var i=0;i<r;i++){if(!this.children[i].equals(t.children[i])){return false}}return true},guid:0,compile:function e(t,r){this.sourceNode=[]
this.opcodes=[]
this.children=[]
this.options=r
this.stringParams=r.stringParams
this.trackIds=r.trackIds
r.blockParams=r.blockParams||[]
var i=r.knownHelpers
r.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,if:true,unless:true,with:true,log:true,lookup:true}
if(i){for(var s in i){this.options.knownHelpers[s]=i[s]}}return this.accept(t)},compileProgram:function e(t){var r=new this.compiler,i=r.compile(t,this.options),s=this.guid++
this.usePartial=this.usePartial||i.usePartial
this.children[s]=i
this.useDepths=this.useDepths||i.useDepths
return s},accept:function e(t){if(!this[t.type]){throw new n["default"]("Unknown type: "+t.type,t)}this.sourceNode.unshift(t)
var r=this[t.type](t)
this.sourceNode.shift()
return r},Program:function e(t){this.options.blockParams.unshift(t.blockParams)
var r=t.body,i=r.length
for(var s=0;s<i;s++){this.accept(r[s])}this.options.blockParams.shift()
this.isSimple=i===1
this.blockParams=t.blockParams?t.blockParams.length:0
return this},BlockStatement:function e(t){d(t)
var r=t.program,i=t.inverse
r=r&&this.compileProgram(r)
i=i&&this.compileProgram(i)
var s=this.classifySexpr(t)
if(s==="helper"){this.helperSexpr(t,r,i)}else if(s==="simple"){this.simpleSexpr(t)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
this.opcode("emptyHash")
this.opcode("blockValue",t.path.original)}else{this.ambiguousSexpr(t,r,i)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
this.opcode("emptyHash")
this.opcode("ambiguousBlockValue")}this.opcode("append")},DecoratorBlock:function e(t){var r=t.program&&this.compileProgram(t.program)
var i=this.setupFullMustacheParams(t,r,undefined),s=t.path
this.useDecorators=true
this.opcode("registerDecorator",i.length,s.original)},PartialStatement:function e(t){this.usePartial=true
var r=t.program
if(r){r=this.compileProgram(t.program)}var i=t.params
if(i.length>1){throw new n["default"]("Unsupported number of partial arguments: "+i.length,t)}else if(!i.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")}else{i.push({type:"PathExpression",parts:[],depth:0})}}var s=t.name.original,a=t.name.type==="SubExpression"
if(a){this.accept(t.name)}this.setupFullMustacheParams(t,r,undefined,true)
var o=t.indent||""
if(this.options.preventIndent&&o){this.opcode("appendContent",o)
o=""}this.opcode("invokePartial",a,s,o)
this.opcode("append")},PartialBlockStatement:function e(t){this.PartialStatement(t)},MustacheStatement:function e(t){this.SubExpression(t)
if(t.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},Decorator:function e(t){this.DecoratorBlock(t)},ContentStatement:function e(t){if(t.value){this.opcode("appendContent",t.value)}},CommentStatement:function e(){},SubExpression:function e(t){d(t)
var r=this.classifySexpr(t)
if(r==="simple"){this.simpleSexpr(t)}else if(r==="helper"){this.helperSexpr(t)}else{this.ambiguousSexpr(t)}},ambiguousSexpr:function e(t,r,i){var s=t.path,n=s.parts[0],a=r!=null||i!=null
this.opcode("getContext",s.depth)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
s.strict=true
this.accept(s)
this.opcode("invokeAmbiguous",n,a)},simpleSexpr:function e(t){var r=t.path
r.strict=true
this.accept(r)
this.opcode("resolvePossibleLambda")},helperSexpr:function e(t,r,i){var s=this.setupFullMustacheParams(t,r,i),a=t.path,o=a.parts[0]
if(this.options.knownHelpers[o]){this.opcode("invokeKnownHelper",s.length,o)}else if(this.options.knownHelpersOnly){throw new n["default"]("You specified knownHelpersOnly, but used the unknown helper "+o,t)}else{a.strict=true
a.falsy=true
this.accept(a)
this.opcode("invokeHelper",s.length,a.original,l["default"].helpers.simpleId(a))}},PathExpression:function e(t){this.addDepth(t.depth)
this.opcode("getContext",t.depth)
var r=t.parts[0],i=l["default"].helpers.scopedId(t),s=!t.depth&&!i&&this.blockParamIndex(r)
if(s){this.opcode("lookupBlockParam",s,t.parts)}else if(!r){this.opcode("pushContext")}else if(t.data){this.options.data=true
this.opcode("lookupData",t.depth,t.parts,t.strict)}else{this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,i)}},StringLiteral:function e(t){this.opcode("pushString",t.value)},NumberLiteral:function e(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function e(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function e(){this.opcode("pushLiteral","undefined")},NullLiteral:function e(){this.opcode("pushLiteral","null")},Hash:function e(t){var r=t.pairs,i=0,s=r.length
this.opcode("pushHash")
for(;i<s;i++){this.pushParam(r[i].value)}while(i--){this.opcode("assignToHash",r[i].key)}this.opcode("popHash")},opcode:function e(t){this.opcodes.push({opcode:t,args:u.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function e(t){if(!t){return}this.useDepths=true},classifySexpr:function e(t){var r=l["default"].helpers.simpleId(t.path)
var i=r&&!!this.blockParamIndex(t.path.parts[0])
var s=!i&&l["default"].helpers.helperExpression(t)
var n=!i&&(s||r)
if(n&&!s){var a=t.path.parts[0],o=this.options
if(o.knownHelpers[a]){s=true}else if(o.knownHelpersOnly){n=false}}if(s){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function e(t){for(var r=0,i=t.length;r<i;r++){this.pushParam(t[r])}},pushParam:function e(t){var r=t.value!=null?t.value:t.original||""
if(this.stringParams){if(r.replace){r=r.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")}if(t.depth){this.addDepth(t.depth)}this.opcode("getContext",t.depth||0)
this.opcode("pushStringParam",r,t.type)
if(t.type==="SubExpression"){this.accept(t)}}else{if(this.trackIds){var i=undefined
if(t.parts&&!l["default"].helpers.scopedId(t)&&!t.depth){i=this.blockParamIndex(t.parts[0])}if(i){var s=t.parts.slice(1).join(".")
this.opcode("pushId","BlockParam",i,s)}else{r=t.original||r
if(r.replace){r=r.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")}this.opcode("pushId",t.type,r)}}this.accept(t)}},setupFullMustacheParams:function e(t,r,i,s){var n=t.params
this.pushParams(n)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
if(t.hash){this.accept(t.hash)}else{this.opcode("emptyHash",s)}return n},blockParamIndex:function e(t){for(var r=0,i=this.options.blockParams.length;r<i;r++){var s=this.options.blockParams[r],n=s&&a.indexOf(s,t)
if(s&&n>=0){return[r,n]}}}}
function p(e,t,r){if(e==null||typeof e!=="string"&&e.type!=="Program"){throw new n["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{}
if(!("data"in t)){t.data=true}if(t.compat){t.useDepths=true}var i=r.parse(e,t),s=(new r.Compiler).compile(i,t)
return(new r.JavaScriptCompiler).compile(s,t)}function h(e,t,r){if(t===undefined)t={}
if(e==null||typeof e!=="string"&&e.type!=="Program"){throw new n["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=a.extend({},t)
if(!("data"in t)){t.data=true}if(t.compat){t.useDepths=true}var i=undefined
function s(){var i=r.parse(e,t),s=(new r.Compiler).compile(i,t),n=(new r.JavaScriptCompiler).compile(s,t,undefined,true)
return r.template(n)}function o(e,t){if(!i){i=s()}return i.call(this,e,t)}o._setup=function(e){if(!i){i=s()}return i._setup(e)}
o._child=function(e,t,r,n){if(!i){i=s()}return i._child(e,t,r,n)}
return o}function f(e,t){if(e===t){return true}if(a.isArray(e)&&a.isArray(t)&&e.length===t.length){for(var r=0;r<e.length;r++){if(!f(e[r],t[r])){return false}}return true}}function d(e){if(!e.path.parts){var t=e.path
e.path={type:"PathExpression",data:false,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var s=r(4)
var n=r(6)
var a=i(n)
var o=r(5)
var l=r(43)
var u=i(l)
function c(e){this.value=e}function p(){}p.prototype={nameLookup:function e(t,r){if(p.isValidJavaScriptVariableName(r)){return[t,".",r]}else{return[t,"[",JSON.stringify(r),"]"]}},depthedLookup:function e(t){return[this.aliasable("container.lookup"),'(depths, "',t,'")']},compilerInfo:function e(){var t=s.COMPILER_REVISION,r=s.REVISION_CHANGES[t]
return[t,r]},appendToBuffer:function e(t,r,i){if(!o.isArray(t)){t=[t]}t=this.source.wrap(t,r)
if(this.environment.isSimple){return["return ",t,";"]}else if(i){return["buffer += ",t,";"]}else{t.appendToBuffer=true
return t}},initializeBuffer:function e(){return this.quotedString("")},compile:function e(t,r,i,s){this.environment=t
this.options=r
this.stringParams=this.options.stringParams
this.trackIds=this.options.trackIds
this.precompile=!s
this.name=this.environment.name
this.isChild=!!i
this.context=i||{decorators:[],programs:[],environments:[]}
this.preamble()
this.stackSlot=0
this.stackVars=[]
this.aliases={}
this.registers={list:[]}
this.hashes=[]
this.compileStack=[]
this.inlineStack=[]
this.blockParams=[]
this.compileChildren(t,r)
this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat
this.useBlockParams=this.useBlockParams||t.useBlockParams
var n=t.opcodes,o=undefined,l=undefined,u=undefined,c=undefined
for(u=0,c=n.length;u<c;u++){o=n[u]
this.source.currentLocation=o.loc
l=l||o.loc
this[o.opcode].apply(this,o.args)}this.source.currentLocation=l
this.pushSource("")
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new a["default"]("Compile completed with content left on stack")}if(!this.decorators.isEmpty()){this.useDecorators=true
this.decorators.prepend("var decorators = container.decorators;\n")
this.decorators.push("return fn;")
if(s){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n")
this.decorators.push("}\n")
this.decorators=this.decorators.merge()}}else{this.decorators=undefined}var p=this.createFunctionContext(s)
if(!this.isChild){var h={compiler:this.compilerInfo(),main:p}
if(this.decorators){h.main_d=this.decorators
h.useDecorators=true}var f=this.context
var d=f.programs
var m=f.decorators
for(u=0,c=d.length;u<c;u++){if(d[u]){h[u]=d[u]
if(m[u]){h[u+"_d"]=m[u]
h.useDecorators=true}}}if(this.environment.usePartial){h.usePartial=true}if(this.options.data){h.useData=true}if(this.useDepths){h.useDepths=true}if(this.useBlockParams){h.useBlockParams=true}if(this.options.compat){h.compat=true}if(!s){h.compiler=JSON.stringify(h.compiler)
this.source.currentLocation={start:{line:1,column:0}}
h=this.objectLiteral(h)
if(r.srcName){h=h.toStringWithSourceMap({file:r.destName})
h.map=h.map&&h.map.toString()}else{h=h.toString()}}else{h.compilerOptions=this.options}return h}else{return p}},preamble:function e(){this.lastContext=0
this.source=new u["default"](this.options.srcName)
this.decorators=new u["default"](this.options.srcName)},createFunctionContext:function e(t){var r=""
var i=this.stackVars.concat(this.registers.list)
if(i.length>0){r+=", "+i.join(", ")}var s=0
for(var n in this.aliases){var a=this.aliases[n]
if(this.aliases.hasOwnProperty(n)&&a.children&&a.referenceCount>1){r+=", alias"+ ++s+"="+n
a.children[0]="alias"+s}}var o=["container","depth0","helpers","partials","data"]
if(this.useBlockParams||this.useDepths){o.push("blockParams")}if(this.useDepths){o.push("depths")}var l=this.mergeSource(r)
if(t){o.push(l)
return Function.apply(this,o)}else{return this.source.wrap(["function(",o.join(","),") {\n  ",l,"}"])}},mergeSource:function e(t){var r=this.environment.isSimple,i=!this.forceBuffer,s=undefined,n=undefined,a=undefined,o=undefined
this.source.each(function(e){if(e.appendToBuffer){if(a){e.prepend("  + ")}else{a=e}o=e}else{if(a){if(!n){s=true}else{a.prepend("buffer += ")}o.add(";")
a=o=undefined}n=true
if(!r){i=false}}})
if(i){if(a){a.prepend("return ")
o.add(";")}else if(!n){this.source.push('return "";')}}else{t+=", buffer = "+(s?"":this.initializeBuffer())
if(a){a.prepend("return buffer + ")
o.add(";")}else{this.source.push("return buffer;")}}if(t){this.source.prepend("var "+t.substring(2)+(s?"":";\n"))}return this.source.merge()},blockValue:function e(t){var r=this.aliasable("helpers.blockHelperMissing"),i=[this.contextName(0)]
this.setupHelperArgs(t,0,i)
var s=this.popStack()
i.splice(1,0,s)
this.push(this.source.functionCall(r,"call",i))},ambiguousBlockValue:function e(){var t=this.aliasable("helpers.blockHelperMissing"),r=[this.contextName(0)]
this.setupHelperArgs("",0,r,true)
this.flushInline()
var i=this.topStack()
r.splice(1,0,i)
this.pushSource(["if (!",this.lastHelper,") { ",i," = ",this.source.functionCall(t,"call",r),"}"])},appendContent:function e(t){if(this.pendingContent){t=this.pendingContent+t}else{this.pendingLocation=this.source.currentLocation}this.pendingContent=t},append:function e(){if(this.isInline()){this.replaceStack(function(e){return[" != null ? ",e,' : ""']})
this.pushSource(this.appendToBuffer(this.popStack()))}else{var t=this.popStack()
this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,undefined,true)," }"])
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])}}},appendEscaped:function e(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function e(t){this.lastContext=t},pushContext:function e(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function e(t,r,i,s){var n=0
if(!s&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(t[n++]))}else{this.pushContext()}this.resolvePath("context",t,n,r,i)},lookupBlockParam:function e(t,r){this.useBlockParams=true
this.push(["blockParams[",t[0],"][",t[1],"]"])
this.resolvePath("context",r,1)},lookupData:function e(t,r,i){if(!t){this.pushStackLiteral("data")}else{this.pushStackLiteral("container.data(data, "+t+")")}this.resolvePath("data",r,0,true,i)},resolvePath:function e(t,r,i,s,n){var a=this
if(this.options.strict||this.options.assumeObjects){this.push(h(this.options.strict&&n,this,r,t))
return}var o=r.length
for(;i<o;i++){this.replaceStack(function(e){var n=a.nameLookup(e,r[i],t)
if(!s){return[" != null ? ",n," : ",e]}else{return[" && ",n]}})}},resolvePossibleLambda:function e(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function e(t,r){this.pushContext()
this.pushString(r)
if(r!=="SubExpression"){if(typeof t==="string"){this.pushString(t)}else{this.pushStackLiteral(t)}}},emptyHash:function e(t){if(this.trackIds){this.push("{}")}if(this.stringParams){this.push("{}")
this.push("{}")}this.pushStackLiteral(t?"undefined":"{}")},pushHash:function e(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function e(){var t=this.hash
this.hash=this.hashes.pop()
if(this.trackIds){this.push(this.objectLiteral(t.ids))}if(this.stringParams){this.push(this.objectLiteral(t.contexts))
this.push(this.objectLiteral(t.types))}this.push(this.objectLiteral(t.values))},pushString:function e(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function e(t){this.pushStackLiteral(t)},pushProgram:function e(t){if(t!=null){this.pushStackLiteral(this.programExpression(t))}else{this.pushStackLiteral(null)}},registerDecorator:function e(t,r){var i=this.nameLookup("decorators",r,"decorator"),s=this.setupHelperArgs(r,t)
this.decorators.push(["fn = ",this.decorators.functionCall(i,"",["fn","props","container",s])," || fn;"])},invokeHelper:function e(t,r,i){var s=this.popStack(),n=this.setupHelper(t,r),a=i?[n.name," || "]:""
var o=["("].concat(a,s)
if(!this.options.strict){o.push(" || ",this.aliasable("helpers.helperMissing"))}o.push(")")
this.push(this.source.functionCall(o,"call",n.callParams))},invokeKnownHelper:function e(t,r){var i=this.setupHelper(t,r)
this.push(this.source.functionCall(i.name,"call",i.callParams))},invokeAmbiguous:function e(t,r){this.useRegister("helper")
var i=this.popStack()
this.emptyHash()
var s=this.setupHelper(0,t,r)
var n=this.lastHelper=this.nameLookup("helpers",t,"helper")
var a=["(","(helper = ",n," || ",i,")"]
if(!this.options.strict){a[0]="(helper = "
a.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))}this.push(["(",a,s.paramsInit?["),(",s.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",s.callParams)," : helper))"])},invokePartial:function e(t,r,i){var s=[],n=this.setupParams(r,1,s)
if(t){r=this.popStack()
delete n.name}if(i){n.indent=JSON.stringify(i)}n.helpers="helpers"
n.partials="partials"
n.decorators="container.decorators"
if(!t){s.unshift(this.nameLookup("partials",r,"partial"))}else{s.unshift(r)}if(this.options.compat){n.depths="depths"}n=this.objectLiteral(n)
s.push(n)
this.push(this.source.functionCall("container.invokePartial","",s))},assignToHash:function e(t){var r=this.popStack(),i=undefined,s=undefined,n=undefined
if(this.trackIds){n=this.popStack()}if(this.stringParams){s=this.popStack()
i=this.popStack()}var a=this.hash
if(i){a.contexts[t]=i}if(s){a.types[t]=s}if(n){a.ids[t]=n}a.values[t]=r},pushId:function e(t,r,i){if(t==="BlockParam"){this.pushStackLiteral("blockParams["+r[0]+"].path["+r[1]+"]"+(i?" + "+JSON.stringify("."+i):""))}else if(t==="PathExpression"){this.pushString(r)}else if(t==="SubExpression"){this.pushStackLiteral("true")}else{this.pushStackLiteral("null")}},compiler:p,compileChildren:function e(t,r){var i=t.children,s=undefined,n=undefined
for(var a=0,o=i.length;a<o;a++){s=i[a]
n=new this.compiler
var l=this.matchExistingProgram(s)
if(l==null){this.context.programs.push("")
var u=this.context.programs.length
s.index=u
s.name="program"+u
this.context.programs[u]=n.compile(s,r,this.context,!this.precompile)
this.context.decorators[u]=n.decorators
this.context.environments[u]=s
this.useDepths=this.useDepths||n.useDepths
this.useBlockParams=this.useBlockParams||n.useBlockParams
s.useDepths=this.useDepths
s.useBlockParams=this.useBlockParams}else{s.index=l.index
s.name="program"+l.index
this.useDepths=this.useDepths||l.useDepths
this.useBlockParams=this.useBlockParams||l.useBlockParams}}},matchExistingProgram:function e(t){for(var r=0,i=this.context.environments.length;r<i;r++){var s=this.context.environments[r]
if(s&&s.equals(t)){return s}}},programExpression:function e(t){var r=this.environment.children[t],i=[r.index,"data",r.blockParams]
if(this.useBlockParams||this.useDepths){i.push("blockParams")}if(this.useDepths){i.push("depths")}return"container.program("+i.join(", ")+")"},useRegister:function e(t){if(!this.registers[t]){this.registers[t]=true
this.registers.list.push(t)}},push:function e(t){if(!(t instanceof c)){t=this.source.wrap(t)}this.inlineStack.push(t)
return t},pushStackLiteral:function e(t){this.push(new c(t))},pushSource:function e(t){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation))
this.pendingContent=undefined}if(t){this.source.push(t)}},replaceStack:function e(t){var r=["("],i=undefined,s=undefined,n=undefined
if(!this.isInline()){throw new a["default"]("replaceStack on non-inline")}var o=this.popStack(true)
if(o instanceof c){i=[o.value]
r=["(",i]
n=true}else{s=true
var l=this.incrStack()
r=["((",this.push(l)," = ",o,")"]
i=this.topStack()}var u=t.call(this,i)
if(!n){this.popStack()}if(s){this.stackSlot--}this.push(r.concat(u,")"))},incrStack:function e(){this.stackSlot++
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function e(){return"stack"+this.stackSlot},flushInline:function e(){var t=this.inlineStack
this.inlineStack=[]
for(var r=0,i=t.length;r<i;r++){var s=t[r]
if(s instanceof c){this.compileStack.push(s)}else{var n=this.incrStack()
this.pushSource([n," = ",s,";"])
this.compileStack.push(n)}}},isInline:function e(){return this.inlineStack.length},popStack:function e(t){var r=this.isInline(),i=(r?this.inlineStack:this.compileStack).pop()
if(!t&&i instanceof c){return i.value}else{if(!r){if(!this.stackSlot){throw new a["default"]("Invalid stack pop")}this.stackSlot--}return i}},topStack:function e(){var t=this.isInline()?this.inlineStack:this.compileStack,r=t[t.length-1]
if(r instanceof c){return r.value}else{return r}},contextName:function e(t){if(this.useDepths&&t){return"depths["+t+"]"}else{return"depth"+t}},quotedString:function e(t){return this.source.quotedString(t)},objectLiteral:function e(t){return this.source.objectLiteral(t)},aliasable:function e(t){var r=this.aliases[t]
if(r){r.referenceCount++
return r}r=this.aliases[t]=this.source.wrap(t)
r.aliasable=true
r.referenceCount=1
return r},setupHelper:function e(t,r,i){var s=[],n=this.setupHelperArgs(r,t,s,i)
var a=this.nameLookup("helpers",r,"helper"),o=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")
return{params:s,paramsInit:n,name:a,callParams:[o].concat(s)}},setupParams:function e(t,r,i){var s={},n=[],a=[],o=[],l=!i,u=undefined
if(l){i=[]}s.name=this.quotedString(t)
s.hash=this.popStack()
if(this.trackIds){s.hashIds=this.popStack()}if(this.stringParams){s.hashTypes=this.popStack()
s.hashContexts=this.popStack()}var c=this.popStack(),p=this.popStack()
if(p||c){s.fn=p||"container.noop"
s.inverse=c||"container.noop"}var h=r
while(h--){u=this.popStack()
i[h]=u
if(this.trackIds){o[h]=this.popStack()}if(this.stringParams){a[h]=this.popStack()
n[h]=this.popStack()}}if(l){s.args=this.source.generateArray(i)}if(this.trackIds){s.ids=this.source.generateArray(o)}if(this.stringParams){s.types=this.source.generateArray(a)
s.contexts=this.source.generateArray(n)}if(this.options.data){s.data="data"}if(this.useBlockParams){s.blockParams="blockParams"}return s},setupHelperArgs:function e(t,r,i,s){var n=this.setupParams(t,r,i)
n=this.objectLiteral(n)
if(s){this.useRegister("options")
i.push("options")
return["options=",n]}else if(i){i.push(n)
return""}else{return n}}};(function(){var e=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield await"+" null true false").split(" ")
var t=p.RESERVED_WORDS={}
for(var r=0,i=e.length;r<i;r++){t[e[r]]=true}})()
p.isValidJavaScriptVariableName=function(e){return!p.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)}
function h(e,t,r,i){var s=t.popStack(),n=0,a=r.length
if(e){a--}for(;n<a;n++){s=t.nameLookup(s,r[n],i)}if(e){return[t.aliasable("container.strict"),"(",s,", ",t.quotedString(r[n]),")"]}else{return s}}t["default"]=p
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
var s=undefined
try{if(false){s=SourceMap.SourceNode}}catch(e){}if(!s){s=function(e,t,r,i){this.src=""
if(i){this.add(i)}}
s.prototype={add:function e(t){if(i.isArray(t)){t=t.join("")}this.src+=t},prepend:function e(t){if(i.isArray(t)){t=t.join("")}this.src=t+this.src},toStringWithSourceMap:function e(){return{code:this.toString()}},toString:function e(){return this.src}}}function n(e,t,r){if(i.isArray(e)){var s=[]
for(var n=0,a=e.length;n<a;n++){s.push(t.wrap(e[n],r))}return s}else if(typeof e==="boolean"||typeof e==="number"){return e+""}return e}function a(e){this.srcFile=e
this.source=[]}a.prototype={isEmpty:function e(){return!this.source.length},prepend:function e(t,r){this.source.unshift(this.wrap(t,r))},push:function e(t,r){this.source.push(this.wrap(t,r))},merge:function e(){var t=this.empty()
this.each(function(e){t.add(["  ",e,"\n"])})
return t},each:function e(t){for(var r=0,i=this.source.length;r<i;r++){t(this.source[r])}},empty:function e(){var t=this.currentLocation||{start:{}}
return new s(t.start.line,t.start.column,this.srcFile)},wrap:function e(t){var r=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1]
if(t instanceof s){return t}t=n(t,this,r)
return new s(r.start.line,r.start.column,this.srcFile,t)},functionCall:function e(t,r,i){i=this.generateList(i)
return this.wrap([t,r?"."+r+"(":"(",i,")"])},quotedString:function e(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function e(t){var r=[]
for(var i in t){if(t.hasOwnProperty(i)){var s=n(t[i],this)
if(s!=="undefined"){r.push([this.quotedString(i),":",s])}}}var a=this.generateList(r)
a.prepend("{")
a.add("}")
return a},generateList:function e(t){var r=this.empty()
for(var i=0,s=t.length;i<s;i++){if(i){r.add(",")}r.add(n(t[i],this))}return r},generateArray:function e(t){var r=this.generateList(t)
r.prepend("[")
r.add("]")
return r}}
t["default"]=a
e.exports=t["default"]}])})

});
KAdefine("third_party/javascript-khansrc/handlebars/handlebars-v4.0.12.js", function(require, module, exports) {
var icu=require("icu")
var $=require("jquery")
var i18n=require("../../../javascript/shared-package/i18n.js")
var formatContent=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").formatContent
var serialCommafy=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").serialCommafy
var stripProtocol=require("../../../javascript/corelibs-legacy-package/handlebars-extras.js").stripProtocol
var staticUrl=require("../../../javascript/shared-package/static-url.js").default
function addKAHelpers(e){e.registerHelper("formatContent",function(t,r){var i=formatContent(t,!!(r&&r.hash.nofollow))
return new e.SafeString(i)})
e.registerHelper("serialCommafy",serialCommafy)
e.registerHelper("stripProtocol",stripProtocol)
e.registerHelper("opttr",function(t){if(!Object.entries){Object.entries=function(e){var t=Object.keys(e),r=t.length,i=new Array(r)
while(r--){i[r]=[t[r],e[t[r]]]}return i}}var r=[]
var i=Object.entries(t.hash)
for(var n=0;n<i.length;n++){var s=i[n][0]
var a=i[n][1]
if(a!==null&&a!==undefined){r.push(s+'="'+e.Utils.escapeExpression(a)+'"')}}return new e.SafeString(r.join(" "))})
e.registerHelper("debug",function(e,t){console.log("Handlebars debug: ",e)})
e.registerHelper("debugger",function(){debugger})
e.registerHelper("repeat",function(e,t){var r=t.fn
var i=""
for(var n=0;n<e;n++){i=i+r(this)}return i})
e.registerHelper("eachWithMidpoint",function(e,t){var r=[]
var i=t.fn
if(e){var n=Math.floor((e.length+1)/2)
for(var s=0;s<e.length;s++){e[s]["midpoint"]=s===n
r.push(i(e[s]))}}return r.join("")})
e.registerHelper("_",i18n.handlebarsUnderscore)
e.registerHelper("i18nDoNotTranslate",i18n.handlebarsDoNotTranslate)
e.registerHelper("ngettext",i18n.handlebarsNgettext)
e.registerHelper("reverseEach",function(e,t){var r=""
for(var i=e.length-1;i>=0;i--){r+=t.fn(e[i])}return r})
if(!window.WEBPACK_BUILD){var t=function e(t,r){var i="../"+t+"/ "+r+".handlebars"
return require(i)}
e.registerHelper("invokePartial",function(e,r,i){return t(e,r)(i.hash)})
var r=e.VM.invokePartial
e.VM.invokePartial=function(e,i,n){var s=Array.prototype.slice.apply(arguments)
if(e===undefined){var a=n.name
var o=a.split("/")
if(o.length>2){var l=o[1]
var u=o.slice(2).join("/")
s[0]=t(l,u)}}return r.apply(this,s)}}e.registerHelper("multiply",function(e,t){return e*t})
e.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
e.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
e.registerHelper("ellipsis",function(e,t){var r=e.replace(/<([^>]+)>/g,function(e,t){return t})
if(r.length>t){return r.substr(0,t-3)+"..."}else{return r}})
e.registerHelper("formatEvalAnswer",function(t,r){var i=$($.parseHTML(t))
var n=$.makeArray(i.filter("li:not(.pass)"))
var s=$("<div class='eval-guideline'>")
$("<div class='eval-title'>").text(n.length===0?i18n._("This project has passed evaluation."):i18n._("This project needs more work.")).appendTo(s)
var a=i.filter(".overall-eval-info").text()
var o=formatContent(a,true)
if(a.length>0){var l=$("<div class='more-info'>")
l.append($("<strong>").text(i18n._("From the evaluator:"))).append($("<div>").html(o)).appendTo(s)}if(n.length>0){$("<div class='failed-objectives'>").append($("<strong>").text(i18n._("The following objectives need more work:"))).appendTo(s)
var u=$("<ul class='styled-list'>").appendTo(s)
n.map(function(e,t){var r=$(e).find("div")
var i=formatContent(r.text(),true)
var n=r.text().length>0?$("<div class='objective-more-info'>").html(i):[]
r.empty()
var s=$("<li></li>")
s.append($("<strong>").text($(e).text())).append(n)
s.appendTo(u)})}return new e.SafeString(s[0].outerHTML)})
e.registerHelper("arrayLength",function(e){return e.length})
e.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
e.registerHelper("formatTimestamp",function(e){var t=e/1e3
var r=parseInt(t)%60
if(r<10){r="0"+r}return parseInt(t/60)+":"+r})
e.registerHelper("staticUrl",staticUrl)
e.registerHelper("zeroRatedBaseUrl",function(){var e=window.location.href
if(e.indexOf("khanacademy.org")>=0&&e.indexOf("zero.khanacademy.org")===-1){var t=e.split("khanacademy.org")[0]
return t+"zero.khanacademy.org"}else{return"zero.khanacademy.org"}})}(function e(t,r){if((typeof exports==="undefined"?"undefined":babelHelpers.typeof(exports))==="object"&&(typeof module==="undefined"?"undefined":babelHelpers.typeof(module))==="object")module.exports=r()
else if(typeof define==="function"&&define.amd)define([],r)
else if((typeof exports==="undefined"?"undefined":babelHelpers.typeof(exports))==="object")exports["Handlebars"]=r()
else t["Handlebars"]=r()})(this,function(){return function(e){var t={}
function r(i){if(t[i])return t[i].exports
var n=t[i]={exports:{},id:i,loaded:false}
e[i].call(n.exports,n,n.exports,r)
n.loaded=true
return n.exports}r.m=e
r.c=t
r.p=""
return r(0)}([function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(2)
var s=i(n)
var a=r(35)
var o=i(a)
var l=r(36)
var u=r(41)
var c=r(42)
var p=i(c)
var h=r(39)
var f=i(h)
var d=r(34)
var m=i(d)
var v=s["default"].create
function g(){var e=v()
e.compile=function(t,r){return u.compile(t,r,e)}
e.precompile=function(t,r){return u.precompile(t,r,e)}
e.AST=o["default"]
e.Compiler=u.Compiler
e.JavaScriptCompiler=p["default"]
e.Parser=l.parser
e.parse=l.parse
window.Handlebars=e
return e}var y=g()
y.create=g
m["default"](y)
y.Visitor=f["default"]
y["default"]=y
addKAHelpers(y)
t["default"]=y
e.exports=t["default"]},function(e,t){"use strict"
t["default"]=function(e){return e&&e.__esModule?e:{default:e}}
t.__esModule=true},function(e,t,r){"use strict"
var i=r(3)["default"]
var n=r(1)["default"]
t.__esModule=true
var s=r(4)
var a=i(s)
var o=r(21)
var l=n(o)
var u=r(6)
var c=n(u)
var p=r(5)
var h=i(p)
var f=r(22)
var d=i(f)
var m=r(34)
var v=n(m)
function g(){var e=new a.HandlebarsEnvironment
h.extend(e,a)
e.SafeString=l["default"]
e.Exception=c["default"]
e.Utils=h
e.escapeExpression=h.escapeExpression
e.VM=d
e.template=function(t){return d.template(t,e)}
return e}var y=g()
y.create=g
v["default"](y)
y["default"]=y
t["default"]=y
e.exports=t["default"]},function(e,t){"use strict"
t["default"]=function(e){if(e&&e.__esModule){return e}else{var t={}
if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r))t[r]=e[r]}}t["default"]=e
return t}}
t.__esModule=true},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.HandlebarsEnvironment=m
var n=r(5)
var s=r(6)
var a=i(s)
var o=r(10)
var l=r(18)
var u=r(20)
var c=i(u)
var p="4.0.12"
t.VERSION=p
var h=7
t.COMPILER_REVISION=h
var f={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"}
t.REVISION_CHANGES=f
var d="[object Object]"
function m(e,t,r){this.helpers=e||{}
this.partials=t||{}
this.decorators=r||{}
o.registerDefaultHelpers(this)
l.registerDefaultDecorators(this)}m.prototype={constructor:m,logger:c["default"],log:c["default"].log,registerHelper:function e(t,r){if(n.toString.call(t)===d){if(r){throw new a["default"]("Arg not supported with multiple helpers")}n.extend(this.helpers,t)}else{this.helpers[t]=r}},unregisterHelper:function e(t){delete this.helpers[t]},registerPartial:function e(t,r){if(n.toString.call(t)===d){n.extend(this.partials,t)}else{if(typeof r==="undefined"){throw new a["default"]('Attempting to register a partial called "'+t+'" as undefined')}this.partials[t]=r}},unregisterPartial:function e(t){delete this.partials[t]},registerDecorator:function e(t,r){if(n.toString.call(t)===d){if(r){throw new a["default"]("Arg not supported with multiple decorators")}n.extend(this.decorators,t)}else{this.decorators[t]=r}},unregisterDecorator:function e(t){delete this.decorators[t]}}
var v=c["default"].log
t.log=v
t.createFrame=n.createFrame
t.logger=c["default"]},function(e,t){"use strict"
t.__esModule=true
t.extend=a
t.indexOf=c
t.escapeExpression=p
t.isEmpty=h
t.createFrame=f
t.blockParams=d
t.appendContextPath=m
var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"}
var i=/[&<>"'`=]/g,n=/[&<>"'`=]/
function s(e){return r[e]}function a(e){for(var t=1;t<arguments.length;t++){for(var r in arguments[t]){if(Object.prototype.hasOwnProperty.call(arguments[t],r)){e[r]=arguments[t][r]}}}return e}var o=Object.prototype.toString
t.toString=o
var l=function e(t){return typeof t==="function"}
if(l(/x/)){t.isFunction=l=function e(t){return typeof t==="function"&&o.call(t)==="[object Function]"}}t.isFunction=l
var u=Array.isArray||function(e){return e&&(typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"?o.call(e)==="[object Array]":false}
t.isArray=u
function c(e,t){for(var r=0,i=e.length;r<i;r++){if(e[r]===t){return r}}return-1}function p(e){if(typeof e!=="string"){if(e&&e.toHTML){return e.toHTML()}else if(e==null){return""}else if(!e){return e+""}e=""+e}if(!n.test(e)){return e}return e.replace(i,s)}function h(e){if(!e&&e!==0){return true}else if(u(e)&&e.length===0){return true}else{return false}}function f(e){var t=a({},e)
t._parent=e
return t}function d(e,t){e.path=t
return e}function m(e,t){return(e?e+".":"")+t}},function(e,t,r){"use strict"
var i=r(7)["default"]
t.__esModule=true
var n=["description","fileName","lineNumber","message","name","number","stack"]
function s(e,t){var r=t&&t.loc,a=undefined,o=undefined
if(r){a=r.start.line
o=r.start.column
e+=" - "+a+":"+o}var l=Error.prototype.constructor.call(this,e)
for(var u=0;u<n.length;u++){this[n[u]]=l[n[u]]}if(Error.captureStackTrace){Error.captureStackTrace(this,s)}try{if(r){this.lineNumber=a
if(i){Object.defineProperty(this,"column",{value:o,enumerable:true})}else{this.column=o}}}catch(e){}}s.prototype=new Error
t["default"]=s
e.exports=t["default"]},function(e,t,r){e.exports={default:r(8),__esModule:true}},function(e,t,r){var $=r(9)
e.exports=function e(t,r,i){return $.setDesc(t,r,i)}},function(e,t){var r=Object
e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.registerDefaultHelpers=y
var n=r(11)
var s=i(n)
var a=r(12)
var o=i(a)
var l=r(13)
var u=i(l)
var c=r(14)
var p=i(c)
var h=r(15)
var f=i(h)
var d=r(16)
var m=i(d)
var v=r(17)
var g=i(v)
function y(e){s["default"](e)
o["default"](e)
u["default"](e)
p["default"](e)
f["default"](e)
m["default"](e)
g["default"](e)}},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("blockHelperMissing",function(t,r){var n=r.inverse,s=r.fn
if(t===true){return s(this)}else if(t===false||t==null){return n(this)}else if(i.isArray(t)){if(t.length>0){if(r.ids){r.ids=[r.name]}return e.helpers.each(t,r)}else{return n(this)}}else{if(r.data&&r.ids){var a=i.createFrame(r.data)
a.contextPath=i.appendContextPath(r.data.contextPath,r.name)
r={data:a}}return s(t,r)}})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(5)
var s=r(6)
var a=i(s)
t["default"]=function(e){e.registerHelper("each",function(e,t){if(!t){throw new a["default"]("Must pass iterator to #each")}var r=t.fn,i=t.inverse,s=0,o="",l=undefined,u=undefined
if(t.data&&t.ids){u=n.appendContextPath(t.data.contextPath,t.ids[0])+"."}if(n.isFunction(e)){e=e.call(this)}if(t.data){l=n.createFrame(t.data)}function c(t,i,s){if(l){l.key=t
l.index=i
l.first=i===0
l.last=!!s
if(u){l.contextPath=u+t}}o=o+r(e[t],{data:l,blockParams:n.blockParams([e[t],t],[u+t,null])})}if(e&&(typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"){if(n.isArray(e)){for(var p=e.length;s<p;s++){if(s in e){c(s,s,s===e.length-1)}}}else{var h=undefined
for(var f in e){if(e.hasOwnProperty(f)){if(h!==undefined){c(h,s-1)}h=f
s++}}if(h!==undefined){c(h,s-1,true)}}}if(s===0){o=i(this)}return o})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(6)
var s=i(n)
t["default"]=function(e){e.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined}else{throw new s["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("if",function(e,t){if(i.isFunction(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||i.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}})
e.registerHelper("unless",function(t,r){return e.helpers["if"].call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})}
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=function(e){e.registerHelper("log",function(){var t=[undefined],r=arguments[arguments.length-1]
for(var i=0;i<arguments.length-1;i++){t.push(arguments[i])}var n=1
if(r.hash.level!=null){n=r.hash.level}else if(r.data&&r.data.level!=null){n=r.data.level}t[0]=n
e.log.apply(e,t)})}
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
t["default"]=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerHelper("with",function(e,t){if(i.isFunction(e)){e=e.call(this)}var r=t.fn
if(!i.isEmpty(e)){var n=t.data
if(t.data&&t.ids){n=i.createFrame(t.data)
n.contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])}return r(e,{data:n,blockParams:i.blockParams([e],[n&&n.contextPath])})}else{return t.inverse(this)}})}
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.registerDefaultDecorators=a
var n=r(19)
var s=i(n)
function a(e){s["default"](e)}},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
t["default"]=function(e){e.registerDecorator("inline",function(e,t,r,n){var s=e
if(!t.partials){t.partials={}
s=function n(s,a){var o=r.partials
r.partials=i.extend({},o,t.partials)
var n=e(s,a)
r.partials=o
return n}}t.partials[n.args[0]]=n.fn
return s})}
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
var n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function e(t){if(typeof t==="string"){var r=i.indexOf(n.methodMap,t.toLowerCase())
if(r>=0){t=r}else{t=parseInt(t,10)}}return t},log:function e(t){t=n.lookupLevel(t)
if(typeof console!=="undefined"&&n.lookupLevel(n.level)<=t){var r=n.methodMap[t]
if(!console[r]){r="log"}for(var i=arguments.length,s=Array(i>1?i-1:0),a=1;a<i;a++){s[a-1]=arguments[a]}console[r].apply(console,s)}}}
t["default"]=n
e.exports=t["default"]},function(e,t){"use strict"
t.__esModule=true
function r(e){this.string=e}r.prototype.toString=r.prototype.toHTML=function(){return""+this.string}
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(23)["default"]
var n=r(3)["default"]
var s=r(1)["default"]
t.__esModule=true
t.checkRevision=p
t.template=h
t.wrapProgram=f
t.resolvePartial=d
t.invokePartial=m
t.noop=v
var a=r(5)
var o=n(a)
var l=r(6)
var u=s(l)
var c=r(4)
function p(e){var t=e&&e[0]||1,r=c.COMPILER_REVISION
if(t!==r){if(t<r){var i=c.REVISION_CHANGES[r],n=c.REVISION_CHANGES[t]
throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+n+").")}else{throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function h(e,t){if(!t){throw new u["default"]("No environment passed to template")}if(!e||!e.main){throw new u["default"]("Unknown template object: "+(typeof e==="undefined"?"undefined":babelHelpers.typeof(e)))}e.main.decorator=e.main_d
t.VM.checkRevision(e.compiler)
function r(r,i,n){if(n.hash){i=o.extend({},i,n.hash)
if(n.ids){n.ids[0]=true}}r=t.VM.resolvePartial.call(this,r,i,n)
var s=t.VM.invokePartial.call(this,r,i,n)
if(s==null&&t.compile){n.partials[n.name]=t.compile(r,e.compilerOptions,t)
s=n.partials[n.name](i,n)}if(s!=null){if(n.indent){var a=s.split("\n")
for(var l=0,c=a.length;l<c;l++){if(!a[l]&&l+1===c){break}a[l]=n.indent+a[l]}s=a.join("\n")}return s}else{throw new u["default"]("The partial "+n.name+" could not be compiled when running in runtime-only mode")}}var n={strict:function e(t,r){if(!(r in t)){throw new u["default"]('"'+r+'" not defined in '+t)}return t[r]},lookup:function e(t,r){var i=t.length
for(var n=0;n<i;n++){if(t[n]&&t[n][r]!=null){return t[n][r]}}},lambda:function e(t,r){return typeof t==="function"?t.call(r):t},escapeExpression:o.escapeExpression,invokePartial:r,fn:function t(r){var i=e[r]
i.decorator=e[r+"_d"]
return i},programs:[],program:function e(t,r,i,n,s){var a=this.programs[t],o=this.fn(t)
if(r||s||n||i){a=f(this,t,o,r,i,n,s)}else if(!a){a=this.programs[t]=f(this,t,o)}return a},data:function e(t,r){while(t&&r--){t=t._parent}return t},merge:function e(t,r){var i=t||r
if(t&&r&&t!==r){i=o.extend({},r,t)}return i},nullContext:i({}),noop:t.VM.noop,compilerInfo:e.compiler}
function s(t){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
var i=r.data
s._setup(r)
if(!r.partial&&e.useData){i=g(t,i)}var a=undefined,o=e.useBlockParams?[]:undefined
if(e.useDepths){if(r.depths){a=t!=r.depths[0]?[t].concat(r.depths):r.depths}else{a=[t]}}function l(t){return""+e.main(n,t,n.helpers,n.partials,i,o,a)}l=y(e.main,l,n,r.depths||[],i,o)
return l(t,r)}s.isTop=true
s._setup=function(r){if(!r.partial){n.helpers=n.merge(r.helpers,t.helpers)
if(e.usePartial){n.partials=n.merge(r.partials,t.partials)}if(e.usePartial||e.useDecorators){n.decorators=n.merge(r.decorators,t.decorators)}}else{n.helpers=r.helpers
n.partials=r.partials
n.decorators=r.decorators}}
s._child=function(t,r,i,s){if(e.useBlockParams&&!i){throw new u["default"]("must pass block params")}if(e.useDepths&&!s){throw new u["default"]("must pass parent depths")}return f(n,t,e[t],r,0,i,s)}
return s}function f(e,t,r,i,n,s,a){function o(t){var n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
var o=a
if(a&&t!=a[0]&&!(t===e.nullContext&&a[0]===null)){o=[t].concat(a)}return r(e,t,e.helpers,e.partials,n.data||i,s&&[n.blockParams].concat(s),o)}o=y(r,o,e,a,i,s)
o.program=t
o.depth=a?a.length:0
o.blockParams=n||0
return o}function d(e,t,r){if(!e){if(r.name==="@partial-block"){e=r.data["partial-block"]}else{e=r.partials[r.name]}}else if(!e.call&&!r.name){r.name=e
e=r.partials[e]}return e}function m(e,t,r){var i=r.data&&r.data["partial-block"]
r.partial=true
if(r.ids){r.data.contextPath=r.ids[0]||r.data.contextPath}var n=undefined
if(r.fn&&r.fn!==v){(function(){r.data=c.createFrame(r.data)
var e=r.fn
n=r.data["partial-block"]=function t(r){var n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
n.data=c.createFrame(n.data)
n.data["partial-block"]=i
return e(r,n)}
if(e.partials){r.partials=o.extend({},r.partials,e.partials)}})()}if(e===undefined&&n){e=n}if(e===undefined){throw new u["default"]("The partial "+r.name+" could not be found")}else if(e instanceof Function){return e(t,r)}}function v(){return""}function g(e,t){if(!t||!("root"in t)){t=t?c.createFrame(t):{}
t.root=e}return t}function y(e,t,r,i,n,s){if(e.decorator){var a={}
t=e.decorator(t,a,r,i&&i[0],n,s,i)
o.extend(t,a)}return t}},function(e,t,r){e.exports={default:r(24),__esModule:true}},function(e,t,r){r(25)
e.exports=r(30).Object.seal},function(e,t,r){var i=r(26)
r(27)("seal",function(e){return function t(r){return e&&i(r)?e(r):r}})},function(e,t){e.exports=function(e){return(typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"?e!==null:typeof e==="function"}},function(e,t,r){var i=r(28),n=r(30),s=r(33)
e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],a={}
a[e]=t(r)
i(i.S+i.F*s(function(){r(1)}),"Object",a)}},function(e,t,r){var i=r(29),n=r(30),s=r(31),a="prototype"
var o=function e(t,r,o){var l=t&e.F,u=t&e.G,c=t&e.S,p=t&e.P,h=t&e.B,f=t&e.W,d=u?n:n[r]||(n[r]={}),m=u?i:c?i[r]:(i[r]||{})[a],v,g,y
if(u)o=r
for(v in o){g=!l&&m&&v in m
if(g&&v in d)continue
y=g?m[v]:o[v]
d[v]=u&&typeof m[v]!="function"?o[v]:h&&g?s(y,i):f&&m[v]==y?function(e){var t=function t(r){return this instanceof e?new e(r):e(r)}
t[a]=e[a]
return t}(y):p&&typeof y=="function"?s(Function.call,y):y
if(p)(d[a]||(d[a]={}))[v]=y}}
o.F=1
o.G=2
o.S=4
o.P=8
o.B=16
o.W=32
e.exports=o},function(e,t){var r=e.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")()
if(typeof __g=="number")__g=r},function(e,t){var r=e.exports={version:"1.2.6"}
if(typeof __e=="number")__e=r},function(e,t,r){var i=r(32)
e.exports=function(e,t,r){i(e)
if(t===undefined)return e
switch(r){case 1:return function(r){return e.call(t,r)}
case 2:return function(r,i){return e.call(t,r,i)}
case 3:return function(r,i,n){return e.call(t,r,i,n)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!")
return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return true}}},function(e,t){(function(r){"use strict"
t.__esModule=true
t["default"]=function(e){var t=typeof r!=="undefined"?r:window,i=t.Handlebars
e.noConflict=function(){if(t.Handlebars===e){t.Handlebars=i}return e}}
e.exports=t["default"]}).call(t,function(){return this}())},function(e,t){"use strict"
t.__esModule=true
var r={helpers:{helperExpression:function e(t){return t.type==="SubExpression"||(t.type==="MustacheStatement"||t.type==="BlockStatement")&&!!(t.params&&t.params.length||t.hash)},scopedId:function e(t){return/^\.|this\b/.test(t.original)},simpleId:function e(t){return t.parts.length===1&&!r.helpers.scopedId(t)&&!t.depth}}}
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
var n=r(3)["default"]
t.__esModule=true
t.parse=f
var s=r(37)
var a=i(s)
var o=r(38)
var l=i(o)
var u=r(40)
var c=n(u)
var p=r(5)
t.parser=a["default"]
var h={}
p.extend(h,c)
function f(e,t){if(e.type==="Program"){return e}a["default"].yy=h
h.locInfo=function(e){return new h.SourceLocation(t&&t.srcName,e)}
var r=new l["default"](t)
return r.accept(a["default"].parse(e))}},function(e,t){"use strict"
t.__esModule=true
var r=function(){var e={trace:function e(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(t,r,i,n,s,a,o){var l=a.length-1
switch(s){case 1:return a[l-1]
break
case 2:this.$=n.prepareProgram(a[l])
break
case 3:this.$=a[l]
break
case 4:this.$=a[l]
break
case 5:this.$=a[l]
break
case 6:this.$=a[l]
break
case 7:this.$=a[l]
break
case 8:this.$=a[l]
break
case 9:this.$={type:"CommentStatement",value:n.stripComment(a[l]),strip:n.stripFlags(a[l],a[l]),loc:n.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:a[l],value:a[l],loc:n.locInfo(this._$)}
break
case 11:this.$=n.prepareRawBlock(a[l-2],a[l-1],a[l],this._$)
break
case 12:this.$={path:a[l-3],params:a[l-2],hash:a[l-1]}
break
case 13:this.$=n.prepareBlock(a[l-3],a[l-2],a[l-1],a[l],false,this._$)
break
case 14:this.$=n.prepareBlock(a[l-3],a[l-2],a[l-1],a[l],true,this._$)
break
case 15:this.$={open:a[l-5],path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:n.stripFlags(a[l-5],a[l])}
break
case 16:this.$={path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:n.stripFlags(a[l-5],a[l])}
break
case 17:this.$={path:a[l-4],params:a[l-3],hash:a[l-2],blockParams:a[l-1],strip:n.stripFlags(a[l-5],a[l])}
break
case 18:this.$={strip:n.stripFlags(a[l-1],a[l-1]),program:a[l]}
break
case 19:var u=n.prepareBlock(a[l-2],a[l-1],a[l],a[l],false,this._$),c=n.prepareProgram([u],a[l-1].loc)
c.chained=true
this.$={strip:a[l-2].strip,program:c,chain:true}
break
case 20:this.$=a[l]
break
case 21:this.$={path:a[l-1],strip:n.stripFlags(a[l-2],a[l])}
break
case 22:this.$=n.prepareMustache(a[l-3],a[l-2],a[l-1],a[l-4],n.stripFlags(a[l-4],a[l]),this._$)
break
case 23:this.$=n.prepareMustache(a[l-3],a[l-2],a[l-1],a[l-4],n.stripFlags(a[l-4],a[l]),this._$)
break
case 24:this.$={type:"PartialStatement",name:a[l-3],params:a[l-2],hash:a[l-1],indent:"",strip:n.stripFlags(a[l-4],a[l]),loc:n.locInfo(this._$)}
break
case 25:this.$=n.preparePartialBlock(a[l-2],a[l-1],a[l],this._$)
break
case 26:this.$={path:a[l-3],params:a[l-2],hash:a[l-1],strip:n.stripFlags(a[l-4],a[l])}
break
case 27:this.$=a[l]
break
case 28:this.$=a[l]
break
case 29:this.$={type:"SubExpression",path:a[l-3],params:a[l-2],hash:a[l-1],loc:n.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:a[l],loc:n.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:n.id(a[l-2]),value:a[l],loc:n.locInfo(this._$)}
break
case 32:this.$=n.id(a[l-1])
break
case 33:this.$=a[l]
break
case 34:this.$=a[l]
break
case 35:this.$={type:"StringLiteral",value:a[l],original:a[l],loc:n.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(a[l]),original:Number(a[l]),loc:n.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:a[l]==="true",original:a[l]==="true",loc:n.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:n.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:n.locInfo(this._$)}
break
case 40:this.$=a[l]
break
case 41:this.$=a[l]
break
case 42:this.$=n.preparePath(true,a[l],this._$)
break
case 43:this.$=n.preparePath(false,a[l],this._$)
break
case 44:a[l-2].push({part:n.id(a[l]),original:a[l],separator:a[l-1]})
this.$=a[l-2]
break
case 45:this.$=[{part:n.id(a[l]),original:a[l]}]
break
case 46:this.$=[]
break
case 47:a[l-1].push(a[l])
break
case 48:this.$=[a[l]]
break
case 49:a[l-1].push(a[l])
break
case 50:this.$=[]
break
case 51:a[l-1].push(a[l])
break
case 58:this.$=[]
break
case 59:a[l-1].push(a[l])
break
case 64:this.$=[]
break
case 65:a[l-1].push(a[l])
break
case 70:this.$=[]
break
case 71:a[l-1].push(a[l])
break
case 78:this.$=[]
break
case 79:a[l-1].push(a[l])
break
case 82:this.$=[]
break
case 83:a[l-1].push(a[l])
break
case 86:this.$=[]
break
case 87:a[l-1].push(a[l])
break
case 90:this.$=[]
break
case 91:a[l-1].push(a[l])
break
case 94:this.$=[]
break
case 95:a[l-1].push(a[l])
break
case 98:this.$=[a[l]]
break
case 99:a[l-1].push(a[l])
break
case 100:this.$=[a[l]]
break
case 101:a[l-1].push(a[l])
break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function e(t,r){throw new Error(t)},parse:function e(t){var r=this,i=[0],n=[null],s=[],a=this.table,o="",l=0,u=0,c=0,p=2,h=1
this.lexer.setInput(t)
this.lexer.yy=this.yy
this.yy.lexer=this.lexer
this.yy.parser=this
if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={}
var f=this.lexer.yylloc
s.push(f)
var d=this.lexer.options&&this.lexer.options.ranges
if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError
function m(e){i.length=i.length-2*e
n.length=n.length-e
s.length=s.length-e}function v(){var e
e=r.lexer.lex()||1
if(typeof e!=="number"){e=r.symbols_[e]||e}return e}var g,y,k,b,S,P,x={},w,E,C,L
while(true){k=i[i.length-1]
if(this.defaultActions[k]){b=this.defaultActions[k]}else{if(g===null||typeof g=="undefined"){g=v()}b=a[k]&&a[k][g]}if(typeof b==="undefined"||!b.length||!b[0]){var I=""
if(!c){L=[]
for(w in a[k]){if(this.terminals_[w]&&w>2){L.push("'"+this.terminals_[w]+"'")}}if(this.lexer.showPosition){I="Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+L.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{I="Parse error on line "+(l+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(I,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:f,expected:L})}}if(b[0]instanceof Array&&b.length>1){throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+g)}switch(b[0]){case 1:i.push(g)
n.push(this.lexer.yytext)
s.push(this.lexer.yylloc)
i.push(b[1])
g=null
if(!y){u=this.lexer.yyleng
o=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
if(c>0)c--}else{g=y
y=null}break
case 2:E=this.productions_[b[1]][1]
x.$=n[n.length-E]
x._$={first_line:s[s.length-(E||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(E||1)].first_column,last_column:s[s.length-1].last_column}
if(d){x._$.range=[s[s.length-(E||1)].range[0],s[s.length-1].range[1]]}P=this.performAction.call(x,o,u,l,this.yy,b[1],n,s)
if(typeof P!=="undefined"){return P}if(E){i=i.slice(0,-1*E*2)
n=n.slice(0,-1*E)
s=s.slice(0,-1*E)}i.push(this.productions_[b[1]][0])
n.push(x.$)
s.push(x._$)
C=a[i[i.length-2]][i[i.length-1]]
i.push(C)
break
case 3:return true}}return true}}
var t=function(){var e={EOF:1,parseError:function e(t,r){if(this.yy.parser){this.yy.parser.parseError(t,r)}else{throw new Error(t)}},setInput:function e(t){this._input=t
this._more=this._less=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
if(this.options.ranges)this.yylloc.range=[0,0]
this.offset=0
return this},input:function e(){var t=this._input[0]
this.yytext+=t
this.yyleng++
this.offset++
this.match+=t
this.matched+=t
var r=t.match(/(?:\r\n?|\n).*/g)
if(r){this.yylineno++
this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++
this._input=this._input.slice(1)
return t},unput:function e(t){var r=t.length
var i=t.split(/(?:\r\n?|\n)/g)
this._input=t+this._input
this.yytext=this.yytext.substr(0,this.yytext.length-r-1)
this.offset-=r
var n=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1)
this.matched=this.matched.substr(0,this.matched.length-1)
if(i.length-1)this.yylineno-=i.length-1
var s=this.yylloc.range
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-r}
if(this.options.ranges){this.yylloc.range=[s[0],s[0]+this.yyleng-r]}return this},more:function e(){this._more=true
return this},less:function e(t){this.unput(this.match.slice(t))},pastInput:function e(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function e(){var t=this.match
if(t.length<20){t+=this._input.substr(0,20-t.length)}return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function e(){var t=this.pastInput()
var r=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+r+"^"},next:function e(){if(this.done){return this.EOF}if(!this._input)this.done=true
var t,r,i,n,s,a
if(!this._more){this.yytext=""
this.match=""}var o=this._currentRules()
for(var l=0;l<o.length;l++){i=this._input.match(this.rules[o[l]])
if(i&&(!r||i[0].length>r[0].length)){r=i
n=l
if(!this.options.flex)break}}if(r){a=r[0].match(/(?:\r\n?|\n).*/g)
if(a)this.yylineno+=a.length
this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length}
this.yytext+=r[0]
this.match+=r[0]
this.matches=r
this.yyleng=this.yytext.length
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false
this._input=this._input.slice(r[0].length)
this.matched+=r[0]
t=this.performAction.call(this,this.yy,this,o[n],this.conditionStack[this.conditionStack.length-1])
if(this.done&&this._input)this.done=false
if(t)return t
else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function e(){var t=this.next()
if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function e(t){this.conditionStack.push(t)},popState:function e(){return this.conditionStack.pop()},_currentRules:function e(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function e(){return this.conditionStack[this.conditionStack.length-2]},pushState:function e(t){this.begin(t)}}
e.options={}
e.performAction=function e(t,r,i,n){function s(e,t){return r.yytext=r.yytext.substr(e,r.yyleng-t)}var a=n
switch(i){case 0:if(r.yytext.slice(-2)==="\\\\"){s(0,1)
this.begin("mu")}else if(r.yytext.slice(-1)==="\\"){s(0,1)
this.begin("emu")}else{this.begin("mu")}if(r.yytext)return 15
break
case 1:return 15
break
case 2:this.popState()
return 15
break
case 3:this.begin("raw")
return 15
break
case 4:this.popState()
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15}else{r.yytext=r.yytext.substr(5,r.yyleng-9)
return"END_RAW_BLOCK"}break
case 5:return 15
break
case 6:this.popState()
return 14
break
case 7:return 65
break
case 8:return 68
break
case 9:return 19
break
case 10:this.popState()
this.begin("raw")
return 23
break
case 11:return 55
break
case 12:return 60
break
case 13:return 29
break
case 14:return 47
break
case 15:this.popState()
return 44
break
case 16:this.popState()
return 44
break
case 17:return 34
break
case 18:return 39
break
case 19:return 51
break
case 20:return 48
break
case 21:this.unput(r.yytext)
this.popState()
this.begin("com")
break
case 22:this.popState()
return 14
break
case 23:return 48
break
case 24:return 73
break
case 25:return 72
break
case 26:return 72
break
case 27:return 87
break
case 28:break
case 29:this.popState()
return 54
break
case 30:this.popState()
return 33
break
case 31:r.yytext=s(1,2).replace(/\\"/g,'"')
return 80
break
case 32:r.yytext=s(1,2).replace(/\\'/g,"'")
return 80
break
case 33:return 85
break
case 34:return 82
break
case 35:return 82
break
case 36:return 83
break
case 37:return 84
break
case 38:return 81
break
case 39:return 75
break
case 40:return 77
break
case 41:return 72
break
case 42:r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1")
return 72
break
case 43:return"INVALID"
break
case 44:return 5
break}}
e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/]
e.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}}
return e}()
e.lexer=t
function r(){this.yy={}}r.prototype=e
e.Parser=r
return new r}()
t["default"]=r
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(39)
var s=i(n)
function a(){var e=arguments.length<=0||arguments[0]===undefined?{}:arguments[0]
this.options=e}a.prototype=new s["default"]
a.prototype.Program=function(e){var t=!this.options.ignoreStandalone
var r=!this.isRootSeen
this.isRootSeen=true
var i=e.body
for(var n=0,s=i.length;n<s;n++){var a=i[n],p=this.accept(a)
if(!p){continue}var h=o(i,n,r),f=l(i,n,r),d=p.openStandalone&&h,m=p.closeStandalone&&f,v=p.inlineStandalone&&h&&f
if(p.close){u(i,n,true)}if(p.open){c(i,n,true)}if(t&&v){u(i,n)
if(c(i,n)){if(a.type==="PartialStatement"){a.indent=/([ \t]+$)/.exec(i[n-1].original)[1]}}}if(t&&d){u((a.program||a.inverse).body)
c(i,n)}if(t&&m){u(i,n)
c((a.inverse||a.program).body)}}return e}
a.prototype.BlockStatement=a.prototype.DecoratorBlock=a.prototype.PartialBlockStatement=function(e){this.accept(e.program)
this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,i=r,n=r
if(r&&r.chained){i=r.body[0].program
while(n.chained){n=n.body[n.body.length-1].program}}var s={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:l(t.body),closeStandalone:o((i||t).body)}
if(e.openStrip.close){u(t.body,null,true)}if(r){var a=e.inverseStrip
if(a.open){c(t.body,null,true)}if(a.close){u(i.body,null,true)}if(e.closeStrip.open){c(n.body,null,true)}if(!this.options.ignoreStandalone&&o(t.body)&&l(i.body)){c(t.body)
u(i.body)}}else if(e.closeStrip.open){c(t.body,null,true)}return s}
a.prototype.Decorator=a.prototype.MustacheStatement=function(e){return e.strip}
a.prototype.PartialStatement=a.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:true,open:t.open,close:t.close}}
function o(e,t,r){if(t===undefined){t=e.length}var i=e[t-1],n=e[t-2]
if(!i){return r}if(i.type==="ContentStatement"){return(n||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original)}}function l(e,t,r){if(t===undefined){t=-1}var i=e[t+1],n=e[t+2]
if(!i){return r}if(i.type==="ContentStatement"){return(n||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original)}}function u(e,t,r){var i=e[t==null?0:t+1]
if(!i||i.type!=="ContentStatement"||!r&&i.rightStripped){return}var n=i.value
i.value=i.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,"")
i.rightStripped=i.value!==n}function c(e,t,r){var i=e[t==null?e.length-1:t-1]
if(!i||i.type!=="ContentStatement"||!r&&i.leftStripped){return}var n=i.value
i.value=i.value.replace(r?/\s+$/:/[ \t]+$/,"")
i.leftStripped=i.value!==n
return i.leftStripped}t["default"]=a
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(6)
var s=i(n)
function a(){this.parents=[]}a.prototype={constructor:a,mutating:false,acceptKey:function e(t,r){var i=this.accept(t[r])
if(this.mutating){if(i&&!a.prototype[i.type]){throw new s["default"]('Unexpected node type "'+i.type+'" found when accepting '+r+" on "+t.type)}t[r]=i}},acceptRequired:function e(t,r){this.acceptKey(t,r)
if(!t[r]){throw new s["default"](t.type+" requires "+r)}},acceptArray:function e(t){for(var r=0,i=t.length;r<i;r++){this.acceptKey(t,r)
if(!t[r]){t.splice(r,1)
r--
i--}}},accept:function e(t){if(!t){return}if(!this[t.type]){throw new s["default"]("Unknown type: "+t.type,t)}if(this.current){this.parents.unshift(this.current)}this.current=t
var r=this[t.type](t)
this.current=this.parents.shift()
if(!this.mutating||r){return r}else if(r!==false){return t}},Program:function e(t){this.acceptArray(t.body)},MustacheStatement:o,Decorator:o,BlockStatement:l,DecoratorBlock:l,PartialStatement:u,PartialBlockStatement:function e(t){u.call(this,t)
this.acceptKey(t,"program")},ContentStatement:function e(){},CommentStatement:function e(){},SubExpression:o,PathExpression:function e(){},StringLiteral:function e(){},NumberLiteral:function e(){},BooleanLiteral:function e(){},UndefinedLiteral:function e(){},NullLiteral:function e(){},Hash:function e(t){this.acceptArray(t.pairs)},HashPair:function e(t){this.acceptRequired(t,"value")}}
function o(e){this.acceptRequired(e,"path")
this.acceptArray(e.params)
this.acceptKey(e,"hash")}function l(e){o.call(this,e)
this.acceptKey(e,"program")
this.acceptKey(e,"inverse")}function u(e){this.acceptRequired(e,"name")
this.acceptArray(e.params)
this.acceptKey(e,"hash")}t["default"]=a
e.exports=t["default"]},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.SourceLocation=o
t.id=l
t.stripFlags=u
t.stripComment=c
t.preparePath=p
t.prepareMustache=h
t.prepareRawBlock=f
t.prepareBlock=d
t.prepareProgram=m
t.preparePartialBlock=v
var n=r(6)
var s=i(n)
function a(e,t){t=t.path?t.path.original:t
if(e.path.original!==t){var r={loc:e.path.loc}
throw new s["default"](e.path.original+" doesn't match "+t,r)}}function o(e,t){this.source=e
this.start={line:t.first_line,column:t.first_column}
this.end={line:t.last_line,column:t.last_column}}function l(e){if(/^\[.*\]$/.test(e)){return e.substr(1,e.length-2)}else{return e}}function u(e,t){return{open:e.charAt(2)==="~",close:t.charAt(t.length-3)==="~"}}function c(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function p(e,t,r){r=this.locInfo(r)
var i=e?"@":"",n=[],a=0
for(var o=0,l=t.length;o<l;o++){var u=t[o].part,c=t[o].original!==u
i+=(t[o].separator||"")+u
if(!c&&(u===".."||u==="."||u==="this")){if(n.length>0){throw new s["default"]("Invalid path: "+i,{loc:r})}else if(u===".."){a++}}else{n.push(u)}}return{type:"PathExpression",data:e,depth:a,parts:n,original:i,loc:r}}function h(e,t,r,i,n,s){var a=i.charAt(3)||i.charAt(2),o=a!=="{"&&a!=="&"
var l=/\*/.test(i)
return{type:l?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:o,strip:n,loc:this.locInfo(s)}}function f(e,t,r,i){a(e,r)
i=this.locInfo(i)
var n={type:"Program",body:t,strip:{},loc:i}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:n,openStrip:{},inverseStrip:{},closeStrip:{},loc:i}}function d(e,t,r,i,n,o){if(i&&i.path){a(e,i)}var l=/\*/.test(e.open)
t.blockParams=e.blockParams
var u=undefined,c=undefined
if(r){if(l){throw new s["default"]("Unexpected inverse block on decorator",r)}if(r.chain){r.program.body[0].closeStrip=i.strip}c=r.strip
u=r.program}if(n){n=u
u=t
t=n}return{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:u,openStrip:e.strip,inverseStrip:c,closeStrip:i&&i.strip,loc:this.locInfo(o)}}function m(e,t){if(!t&&e.length){var r=e[0].loc,i=e[e.length-1].loc
if(r&&i){t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:i.end.line,column:i.end.column}}}}return{type:"Program",body:e,strip:{},loc:t}}function v(e,t,r,i){a(e,r)
return{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(i)}}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
t.Compiler=c
t.precompile=p
t.compile=h
var n=r(6)
var s=i(n)
var a=r(5)
var o=r(35)
var l=i(o)
var u=[].slice
function c(){}c.prototype={compiler:c,equals:function e(t){var r=this.opcodes.length
if(t.opcodes.length!==r){return false}for(var i=0;i<r;i++){var n=this.opcodes[i],s=t.opcodes[i]
if(n.opcode!==s.opcode||!f(n.args,s.args)){return false}}r=this.children.length
for(var i=0;i<r;i++){if(!this.children[i].equals(t.children[i])){return false}}return true},guid:0,compile:function e(t,r){this.sourceNode=[]
this.opcodes=[]
this.children=[]
this.options=r
this.stringParams=r.stringParams
this.trackIds=r.trackIds
r.blockParams=r.blockParams||[]
var i=r.knownHelpers
r.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,if:true,unless:true,with:true,log:true,lookup:true}
if(i){for(var n in i){this.options.knownHelpers[n]=i[n]}}return this.accept(t)},compileProgram:function e(t){var r=new this.compiler,i=r.compile(t,this.options),n=this.guid++
this.usePartial=this.usePartial||i.usePartial
this.children[n]=i
this.useDepths=this.useDepths||i.useDepths
return n},accept:function e(t){if(!this[t.type]){throw new s["default"]("Unknown type: "+t.type,t)}this.sourceNode.unshift(t)
var r=this[t.type](t)
this.sourceNode.shift()
return r},Program:function e(t){this.options.blockParams.unshift(t.blockParams)
var r=t.body,i=r.length
for(var n=0;n<i;n++){this.accept(r[n])}this.options.blockParams.shift()
this.isSimple=i===1
this.blockParams=t.blockParams?t.blockParams.length:0
return this},BlockStatement:function e(t){d(t)
var r=t.program,i=t.inverse
r=r&&this.compileProgram(r)
i=i&&this.compileProgram(i)
var n=this.classifySexpr(t)
if(n==="helper"){this.helperSexpr(t,r,i)}else if(n==="simple"){this.simpleSexpr(t)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
this.opcode("emptyHash")
this.opcode("blockValue",t.path.original)}else{this.ambiguousSexpr(t,r,i)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
this.opcode("emptyHash")
this.opcode("ambiguousBlockValue")}this.opcode("append")},DecoratorBlock:function e(t){var r=t.program&&this.compileProgram(t.program)
var i=this.setupFullMustacheParams(t,r,undefined),n=t.path
this.useDecorators=true
this.opcode("registerDecorator",i.length,n.original)},PartialStatement:function e(t){this.usePartial=true
var r=t.program
if(r){r=this.compileProgram(t.program)}var i=t.params
if(i.length>1){throw new s["default"]("Unsupported number of partial arguments: "+i.length,t)}else if(!i.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")}else{i.push({type:"PathExpression",parts:[],depth:0})}}var n=t.name.original,a=t.name.type==="SubExpression"
if(a){this.accept(t.name)}this.setupFullMustacheParams(t,r,undefined,true)
var o=t.indent||""
if(this.options.preventIndent&&o){this.opcode("appendContent",o)
o=""}this.opcode("invokePartial",a,n,o)
this.opcode("append")},PartialBlockStatement:function e(t){this.PartialStatement(t)},MustacheStatement:function e(t){this.SubExpression(t)
if(t.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},Decorator:function e(t){this.DecoratorBlock(t)},ContentStatement:function e(t){if(t.value){this.opcode("appendContent",t.value)}},CommentStatement:function e(){},SubExpression:function e(t){d(t)
var r=this.classifySexpr(t)
if(r==="simple"){this.simpleSexpr(t)}else if(r==="helper"){this.helperSexpr(t)}else{this.ambiguousSexpr(t)}},ambiguousSexpr:function e(t,r,i){var n=t.path,s=n.parts[0],a=r!=null||i!=null
this.opcode("getContext",n.depth)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
n.strict=true
this.accept(n)
this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function e(t){var r=t.path
r.strict=true
this.accept(r)
this.opcode("resolvePossibleLambda")},helperSexpr:function e(t,r,i){var n=this.setupFullMustacheParams(t,r,i),a=t.path,o=a.parts[0]
if(this.options.knownHelpers[o]){this.opcode("invokeKnownHelper",n.length,o)}else if(this.options.knownHelpersOnly){throw new s["default"]("You specified knownHelpersOnly, but used the unknown helper "+o,t)}else{a.strict=true
a.falsy=true
this.accept(a)
this.opcode("invokeHelper",n.length,a.original,l["default"].helpers.simpleId(a))}},PathExpression:function e(t){this.addDepth(t.depth)
this.opcode("getContext",t.depth)
var r=t.parts[0],i=l["default"].helpers.scopedId(t),n=!t.depth&&!i&&this.blockParamIndex(r)
if(n){this.opcode("lookupBlockParam",n,t.parts)}else if(!r){this.opcode("pushContext")}else if(t.data){this.options.data=true
this.opcode("lookupData",t.depth,t.parts,t.strict)}else{this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,i)}},StringLiteral:function e(t){this.opcode("pushString",t.value)},NumberLiteral:function e(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function e(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function e(){this.opcode("pushLiteral","undefined")},NullLiteral:function e(){this.opcode("pushLiteral","null")},Hash:function e(t){var r=t.pairs,i=0,n=r.length
this.opcode("pushHash")
for(;i<n;i++){this.pushParam(r[i].value)}while(i--){this.opcode("assignToHash",r[i].key)}this.opcode("popHash")},opcode:function e(t){this.opcodes.push({opcode:t,args:u.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function e(t){if(!t){return}this.useDepths=true},classifySexpr:function e(t){var r=l["default"].helpers.simpleId(t.path)
var i=r&&!!this.blockParamIndex(t.path.parts[0])
var n=!i&&l["default"].helpers.helperExpression(t)
var s=!i&&(n||r)
if(s&&!n){var a=t.path.parts[0],o=this.options
if(o.knownHelpers[a]){n=true}else if(o.knownHelpersOnly){s=false}}if(n){return"helper"}else if(s){return"ambiguous"}else{return"simple"}},pushParams:function e(t){for(var r=0,i=t.length;r<i;r++){this.pushParam(t[r])}},pushParam:function e(t){var r=t.value!=null?t.value:t.original||""
if(this.stringParams){if(r.replace){r=r.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")}if(t.depth){this.addDepth(t.depth)}this.opcode("getContext",t.depth||0)
this.opcode("pushStringParam",r,t.type)
if(t.type==="SubExpression"){this.accept(t)}}else{if(this.trackIds){var i=undefined
if(t.parts&&!l["default"].helpers.scopedId(t)&&!t.depth){i=this.blockParamIndex(t.parts[0])}if(i){var n=t.parts.slice(1).join(".")
this.opcode("pushId","BlockParam",i,n)}else{r=t.original||r
if(r.replace){r=r.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")}this.opcode("pushId",t.type,r)}}this.accept(t)}},setupFullMustacheParams:function e(t,r,i,n){var s=t.params
this.pushParams(s)
this.opcode("pushProgram",r)
this.opcode("pushProgram",i)
if(t.hash){this.accept(t.hash)}else{this.opcode("emptyHash",n)}return s},blockParamIndex:function e(t){for(var r=0,i=this.options.blockParams.length;r<i;r++){var n=this.options.blockParams[r],s=n&&a.indexOf(n,t)
if(n&&s>=0){return[r,s]}}}}
function p(e,t,r){if(e==null||typeof e!=="string"&&e.type!=="Program"){throw new s["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{}
if(!("data"in t)){t.data=true}if(t.compat){t.useDepths=true}var i=r.parse(e,t),n=(new r.Compiler).compile(i,t)
return(new r.JavaScriptCompiler).compile(n,t)}function h(e,t,r){if(t===undefined)t={}
if(e==null||typeof e!=="string"&&e.type!=="Program"){throw new s["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=a.extend({},t)
if(!("data"in t)){t.data=true}if(t.compat){t.useDepths=true}var i=undefined
function n(){var i=r.parse(e,t),n=(new r.Compiler).compile(i,t),s=(new r.JavaScriptCompiler).compile(n,t,undefined,true)
return r.template(s)}function o(e,t){if(!i){i=n()}return i.call(this,e,t)}o._setup=function(e){if(!i){i=n()}return i._setup(e)}
o._child=function(e,t,r,s){if(!i){i=n()}return i._child(e,t,r,s)}
return o}function f(e,t){if(e===t){return true}if(a.isArray(e)&&a.isArray(t)&&e.length===t.length){for(var r=0;r<e.length;r++){if(!f(e[r],t[r])){return false}}return true}}function d(e){if(!e.path.parts){var t=e.path
e.path={type:"PathExpression",data:false,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}},function(e,t,r){"use strict"
var i=r(1)["default"]
t.__esModule=true
var n=r(4)
var s=r(6)
var a=i(s)
var o=r(5)
var l=r(43)
var u=i(l)
function c(e){this.value=e}function p(){}p.prototype={nameLookup:function e(t,r){if(p.isValidJavaScriptVariableName(r)){return[t,".",r]}else{return[t,"[",JSON.stringify(r),"]"]}},depthedLookup:function e(t){return[this.aliasable("container.lookup"),'(depths, "',t,'")']},compilerInfo:function e(){var t=n.COMPILER_REVISION,r=n.REVISION_CHANGES[t]
return[t,r]},appendToBuffer:function e(t,r,i){if(!o.isArray(t)){t=[t]}t=this.source.wrap(t,r)
if(this.environment.isSimple){return["return ",t,";"]}else if(i){return["buffer += ",t,";"]}else{t.appendToBuffer=true
return t}},initializeBuffer:function e(){return this.quotedString("")},compile:function e(t,r,i,n){this.environment=t
this.options=r
this.stringParams=this.options.stringParams
this.trackIds=this.options.trackIds
this.precompile=!n
this.name=this.environment.name
this.isChild=!!i
this.context=i||{decorators:[],programs:[],environments:[]}
this.preamble()
this.stackSlot=0
this.stackVars=[]
this.aliases={}
this.registers={list:[]}
this.hashes=[]
this.compileStack=[]
this.inlineStack=[]
this.blockParams=[]
this.compileChildren(t,r)
this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat
this.useBlockParams=this.useBlockParams||t.useBlockParams
var s=t.opcodes,o=undefined,l=undefined,u=undefined,c=undefined
for(u=0,c=s.length;u<c;u++){o=s[u]
this.source.currentLocation=o.loc
l=l||o.loc
this[o.opcode].apply(this,o.args)}this.source.currentLocation=l
this.pushSource("")
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new a["default"]("Compile completed with content left on stack")}if(!this.decorators.isEmpty()){this.useDecorators=true
this.decorators.prepend("var decorators = container.decorators;\n")
this.decorators.push("return fn;")
if(n){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n")
this.decorators.push("}\n")
this.decorators=this.decorators.merge()}}else{this.decorators=undefined}var p=this.createFunctionContext(n)
if(!this.isChild){var h={compiler:this.compilerInfo(),main:p}
if(this.decorators){h.main_d=this.decorators
h.useDecorators=true}var f=this.context
var d=f.programs
var m=f.decorators
for(u=0,c=d.length;u<c;u++){if(d[u]){h[u]=d[u]
if(m[u]){h[u+"_d"]=m[u]
h.useDecorators=true}}}if(this.environment.usePartial){h.usePartial=true}if(this.options.data){h.useData=true}if(this.useDepths){h.useDepths=true}if(this.useBlockParams){h.useBlockParams=true}if(this.options.compat){h.compat=true}if(!n){h.compiler=JSON.stringify(h.compiler)
this.source.currentLocation={start:{line:1,column:0}}
h=this.objectLiteral(h)
if(r.srcName){h=h.toStringWithSourceMap({file:r.destName})
h.map=h.map&&h.map.toString()}else{h=h.toString()}}else{h.compilerOptions=this.options}return h}else{return p}},preamble:function e(){this.lastContext=0
this.source=new u["default"](this.options.srcName)
this.decorators=new u["default"](this.options.srcName)},createFunctionContext:function e(t){var r=""
var i=this.stackVars.concat(this.registers.list)
if(i.length>0){r+=", "+i.join(", ")}var n=0
for(var s in this.aliases){var a=this.aliases[s]
if(this.aliases.hasOwnProperty(s)&&a.children&&a.referenceCount>1){r+=", alias"+ ++n+"="+s
a.children[0]="alias"+n}}var o=["container","depth0","helpers","partials","data"]
if(this.useBlockParams||this.useDepths){o.push("blockParams")}if(this.useDepths){o.push("depths")}var l=this.mergeSource(r)
if(t){o.push(l)
return Function.apply(this,o)}else{return this.source.wrap(["function(",o.join(","),") {\n  ",l,"}"])}},mergeSource:function e(t){var r=this.environment.isSimple,i=!this.forceBuffer,n=undefined,s=undefined,a=undefined,o=undefined
this.source.each(function(e){if(e.appendToBuffer){if(a){e.prepend("  + ")}else{a=e}o=e}else{if(a){if(!s){n=true}else{a.prepend("buffer += ")}o.add(";")
a=o=undefined}s=true
if(!r){i=false}}})
if(i){if(a){a.prepend("return ")
o.add(";")}else if(!s){this.source.push('return "";')}}else{t+=", buffer = "+(n?"":this.initializeBuffer())
if(a){a.prepend("return buffer + ")
o.add(";")}else{this.source.push("return buffer;")}}if(t){this.source.prepend("var "+t.substring(2)+(n?"":";\n"))}return this.source.merge()},blockValue:function e(t){var r=this.aliasable("helpers.blockHelperMissing"),i=[this.contextName(0)]
this.setupHelperArgs(t,0,i)
var n=this.popStack()
i.splice(1,0,n)
this.push(this.source.functionCall(r,"call",i))},ambiguousBlockValue:function e(){var t=this.aliasable("helpers.blockHelperMissing"),r=[this.contextName(0)]
this.setupHelperArgs("",0,r,true)
this.flushInline()
var i=this.topStack()
r.splice(1,0,i)
this.pushSource(["if (!",this.lastHelper,") { ",i," = ",this.source.functionCall(t,"call",r),"}"])},appendContent:function e(t){if(this.pendingContent){t=this.pendingContent+t}else{this.pendingLocation=this.source.currentLocation}this.pendingContent=t},append:function e(){if(this.isInline()){this.replaceStack(function(e){return[" != null ? ",e,' : ""']})
this.pushSource(this.appendToBuffer(this.popStack()))}else{var t=this.popStack()
this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,undefined,true)," }"])
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])}}},appendEscaped:function e(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function e(t){this.lastContext=t},pushContext:function e(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function e(t,r,i,n){var s=0
if(!n&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(t[s++]))}else{this.pushContext()}this.resolvePath("context",t,s,r,i)},lookupBlockParam:function e(t,r){this.useBlockParams=true
this.push(["blockParams[",t[0],"][",t[1],"]"])
this.resolvePath("context",r,1)},lookupData:function e(t,r,i){if(!t){this.pushStackLiteral("data")}else{this.pushStackLiteral("container.data(data, "+t+")")}this.resolvePath("data",r,0,true,i)},resolvePath:function e(t,r,i,n,s){var a=this
if(this.options.strict||this.options.assumeObjects){this.push(h(this.options.strict&&s,this,r,t))
return}var o=r.length
for(;i<o;i++){this.replaceStack(function(e){var s=a.nameLookup(e,r[i],t)
if(!n){return[" != null ? ",s," : ",e]}else{return[" && ",s]}})}},resolvePossibleLambda:function e(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function e(t,r){this.pushContext()
this.pushString(r)
if(r!=="SubExpression"){if(typeof t==="string"){this.pushString(t)}else{this.pushStackLiteral(t)}}},emptyHash:function e(t){if(this.trackIds){this.push("{}")}if(this.stringParams){this.push("{}")
this.push("{}")}this.pushStackLiteral(t?"undefined":"{}")},pushHash:function e(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function e(){var t=this.hash
this.hash=this.hashes.pop()
if(this.trackIds){this.push(this.objectLiteral(t.ids))}if(this.stringParams){this.push(this.objectLiteral(t.contexts))
this.push(this.objectLiteral(t.types))}this.push(this.objectLiteral(t.values))},pushString:function e(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function e(t){this.pushStackLiteral(t)},pushProgram:function e(t){if(t!=null){this.pushStackLiteral(this.programExpression(t))}else{this.pushStackLiteral(null)}},registerDecorator:function e(t,r){var i=this.nameLookup("decorators",r,"decorator"),n=this.setupHelperArgs(r,t)
this.decorators.push(["fn = ",this.decorators.functionCall(i,"",["fn","props","container",n])," || fn;"])},invokeHelper:function e(t,r,i){var n=this.popStack(),s=this.setupHelper(t,r),a=i?[s.name," || "]:""
var o=["("].concat(a,n)
if(!this.options.strict){o.push(" || ",this.aliasable("helpers.helperMissing"))}o.push(")")
this.push(this.source.functionCall(o,"call",s.callParams))},invokeKnownHelper:function e(t,r){var i=this.setupHelper(t,r)
this.push(this.source.functionCall(i.name,"call",i.callParams))},invokeAmbiguous:function e(t,r){this.useRegister("helper")
var i=this.popStack()
this.emptyHash()
var n=this.setupHelper(0,t,r)
var s=this.lastHelper=this.nameLookup("helpers",t,"helper")
var a=["(","(helper = ",s," || ",i,")"]
if(!this.options.strict){a[0]="(helper = "
a.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))}this.push(["(",a,n.paramsInit?["),(",n.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",n.callParams)," : helper))"])},invokePartial:function e(t,r,i){var n=[],s=this.setupParams(r,1,n)
if(t){r=this.popStack()
delete s.name}if(i){s.indent=JSON.stringify(i)}s.helpers="helpers"
s.partials="partials"
s.decorators="container.decorators"
if(!t){n.unshift(this.nameLookup("partials",r,"partial"))}else{n.unshift(r)}if(this.options.compat){s.depths="depths"}s=this.objectLiteral(s)
n.push(s)
this.push(this.source.functionCall("container.invokePartial","",n))},assignToHash:function e(t){var r=this.popStack(),i=undefined,n=undefined,s=undefined
if(this.trackIds){s=this.popStack()}if(this.stringParams){n=this.popStack()
i=this.popStack()}var a=this.hash
if(i){a.contexts[t]=i}if(n){a.types[t]=n}if(s){a.ids[t]=s}a.values[t]=r},pushId:function e(t,r,i){if(t==="BlockParam"){this.pushStackLiteral("blockParams["+r[0]+"].path["+r[1]+"]"+(i?" + "+JSON.stringify("."+i):""))}else if(t==="PathExpression"){this.pushString(r)}else if(t==="SubExpression"){this.pushStackLiteral("true")}else{this.pushStackLiteral("null")}},compiler:p,compileChildren:function e(t,r){var i=t.children,n=undefined,s=undefined
for(var a=0,o=i.length;a<o;a++){n=i[a]
s=new this.compiler
var l=this.matchExistingProgram(n)
if(l==null){this.context.programs.push("")
var u=this.context.programs.length
n.index=u
n.name="program"+u
this.context.programs[u]=s.compile(n,r,this.context,!this.precompile)
this.context.decorators[u]=s.decorators
this.context.environments[u]=n
this.useDepths=this.useDepths||s.useDepths
this.useBlockParams=this.useBlockParams||s.useBlockParams
n.useDepths=this.useDepths
n.useBlockParams=this.useBlockParams}else{n.index=l.index
n.name="program"+l.index
this.useDepths=this.useDepths||l.useDepths
this.useBlockParams=this.useBlockParams||l.useBlockParams}}},matchExistingProgram:function e(t){for(var r=0,i=this.context.environments.length;r<i;r++){var n=this.context.environments[r]
if(n&&n.equals(t)){return n}}},programExpression:function e(t){var r=this.environment.children[t],i=[r.index,"data",r.blockParams]
if(this.useBlockParams||this.useDepths){i.push("blockParams")}if(this.useDepths){i.push("depths")}return"container.program("+i.join(", ")+")"},useRegister:function e(t){if(!this.registers[t]){this.registers[t]=true
this.registers.list.push(t)}},push:function e(t){if(!(t instanceof c)){t=this.source.wrap(t)}this.inlineStack.push(t)
return t},pushStackLiteral:function e(t){this.push(new c(t))},pushSource:function e(t){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation))
this.pendingContent=undefined}if(t){this.source.push(t)}},replaceStack:function e(t){var r=["("],i=undefined,n=undefined,s=undefined
if(!this.isInline()){throw new a["default"]("replaceStack on non-inline")}var o=this.popStack(true)
if(o instanceof c){i=[o.value]
r=["(",i]
s=true}else{n=true
var l=this.incrStack()
r=["((",this.push(l)," = ",o,")"]
i=this.topStack()}var u=t.call(this,i)
if(!s){this.popStack()}if(n){this.stackSlot--}this.push(r.concat(u,")"))},incrStack:function e(){this.stackSlot++
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function e(){return"stack"+this.stackSlot},flushInline:function e(){var t=this.inlineStack
this.inlineStack=[]
for(var r=0,i=t.length;r<i;r++){var n=t[r]
if(n instanceof c){this.compileStack.push(n)}else{var s=this.incrStack()
this.pushSource([s," = ",n,";"])
this.compileStack.push(s)}}},isInline:function e(){return this.inlineStack.length},popStack:function e(t){var r=this.isInline(),i=(r?this.inlineStack:this.compileStack).pop()
if(!t&&i instanceof c){return i.value}else{if(!r){if(!this.stackSlot){throw new a["default"]("Invalid stack pop")}this.stackSlot--}return i}},topStack:function e(){var t=this.isInline()?this.inlineStack:this.compileStack,r=t[t.length-1]
if(r instanceof c){return r.value}else{return r}},contextName:function e(t){if(this.useDepths&&t){return"depths["+t+"]"}else{return"depth"+t}},quotedString:function e(t){return this.source.quotedString(t)},objectLiteral:function e(t){return this.source.objectLiteral(t)},aliasable:function e(t){var r=this.aliases[t]
if(r){r.referenceCount++
return r}r=this.aliases[t]=this.source.wrap(t)
r.aliasable=true
r.referenceCount=1
return r},setupHelper:function e(t,r,i){var n=[],s=this.setupHelperArgs(r,t,n,i)
var a=this.nameLookup("helpers",r,"helper"),o=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")
return{params:n,paramsInit:s,name:a,callParams:[o].concat(n)}},setupParams:function e(t,r,i){var n={},s=[],a=[],o=[],l=!i,u=undefined
if(l){i=[]}n.name=this.quotedString(t)
n.hash=this.popStack()
if(this.trackIds){n.hashIds=this.popStack()}if(this.stringParams){n.hashTypes=this.popStack()
n.hashContexts=this.popStack()}var c=this.popStack(),p=this.popStack()
if(p||c){n.fn=p||"container.noop"
n.inverse=c||"container.noop"}var h=r
while(h--){u=this.popStack()
i[h]=u
if(this.trackIds){o[h]=this.popStack()}if(this.stringParams){a[h]=this.popStack()
s[h]=this.popStack()}}if(l){n.args=this.source.generateArray(i)}if(this.trackIds){n.ids=this.source.generateArray(o)}if(this.stringParams){n.types=this.source.generateArray(a)
n.contexts=this.source.generateArray(s)}if(this.options.data){n.data="data"}if(this.useBlockParams){n.blockParams="blockParams"}return n},setupHelperArgs:function e(t,r,i,n){var s=this.setupParams(t,r,i)
s=this.objectLiteral(s)
if(n){this.useRegister("options")
i.push("options")
return["options=",s]}else if(i){i.push(s)
return""}else{return s}}};(function(){var e=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield await"+" null true false").split(" ")
var t=p.RESERVED_WORDS={}
for(var r=0,i=e.length;r<i;r++){t[e[r]]=true}})()
p.isValidJavaScriptVariableName=function(e){return!p.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)}
function h(e,t,r,i){var n=t.popStack(),s=0,a=r.length
if(e){a--}for(;s<a;s++){n=t.nameLookup(n,r[s],i)}if(e){return[t.aliasable("container.strict"),"(",n,", ",t.quotedString(r[s]),")"]}else{return n}}t["default"]=p
e.exports=t["default"]},function(e,t,r){"use strict"
t.__esModule=true
var i=r(5)
var n=undefined
try{if(false){n=SourceMap.SourceNode}}catch(e){}if(!n){n=function e(t,r,i,n){this.src=""
if(n){this.add(n)}}
n.prototype={add:function e(t){if(i.isArray(t)){t=t.join("")}this.src+=t},prepend:function e(t){if(i.isArray(t)){t=t.join("")}this.src=t+this.src},toStringWithSourceMap:function e(){return{code:this.toString()}},toString:function e(){return this.src}}}function s(e,t,r){if(i.isArray(e)){var n=[]
for(var s=0,a=e.length;s<a;s++){n.push(t.wrap(e[s],r))}return n}else if(typeof e==="boolean"||typeof e==="number"){return e+""}return e}function a(e){this.srcFile=e
this.source=[]}a.prototype={isEmpty:function e(){return!this.source.length},prepend:function e(t,r){this.source.unshift(this.wrap(t,r))},push:function e(t,r){this.source.push(this.wrap(t,r))},merge:function e(){var t=this.empty()
this.each(function(e){t.add(["  ",e,"\n"])})
return t},each:function e(t){for(var r=0,i=this.source.length;r<i;r++){t(this.source[r])}},empty:function e(){var t=this.currentLocation||{start:{}}
return new n(t.start.line,t.start.column,this.srcFile)},wrap:function e(t){var r=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1]
if(t instanceof n){return t}t=s(t,this,r)
return new n(r.start.line,r.start.column,this.srcFile,t)},functionCall:function e(t,r,i){i=this.generateList(i)
return this.wrap([t,r?"."+r+"(":"(",i,")"])},quotedString:function e(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function e(t){var r=[]
for(var i in t){if(t.hasOwnProperty(i)){var n=s(t[i],this)
if(n!=="undefined"){r.push([this.quotedString(i),":",n])}}}var a=this.generateList(r)
a.prepend("{")
a.add("}")
return a},generateList:function e(t){var r=this.empty()
for(var i=0,n=t.length;i<n;i++){if(i){r.add(",")}r.add(s(t[i],this))}return r},generateArray:function e(t){var r=this.generateList(t)
r.prepend("[")
r.add("]")
return r}}
t["default"]=a
e.exports=t["default"]}])})

});
KAdefine("javascript/corelibs-legacy-package/handlebars-extras.js", function(require, module, exports) {
var i18n=require("../shared-package/i18n.js")
var Autolink=function(){var e=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
return{autolink:function t(r,n){return r.replace(e,function(e){if(!/^https?:\/\//.test(e)){e="http://"+e}var t=n?'rel="nofollow"':""
return"<a "+t+' href="'+e+'">'+e+"</a>"})}}}()
var formatTimestamp_=function e(t,r,n){var a=60*parseInt(r,10)+parseInt(n,10)
return"<span class='youTube' data-seconds='"+a+"'>"+t+"</span>"}
var timestampRegex=/(\d{1,3}):([0-5]\d)/g
var escapeExpression=function e(t){var r=/[&<>"'`=]/g
var n=/[&<>"'`=]/
var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"}
var i=function e(t){return a[t]}
if(typeof t!=="string"){if(t&&t.toHTML){return t.toHTML()}else if(t==null){return""}else if(!t){return t+""}t=""+t}if(!n.test(t)){return t}return t.replace(r,i)}
var formatContent=function e(t,r){t=escapeExpression(t)
t=t.replace(timestampRegex,formatTimestamp_)
var n=/[\n]/g
t=t.replace(n,"<br>")
t=t.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,t,r,n){return t+"<em>"+r+"</em>"+n})
t=t.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,t,r,n){return t+"<b>"+r+"</b>"+n})
t=t.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,t){t=t.replace(/^\s*(<br>)+/,"")
t=t.replace(/(<br>)+\s*$/,"")
return"<pre><code>"+t+"</code></pre>"})
t=t.replace(/&#x60;(.*?)&#x60;/g,function(e,t){return"<code>"+t+"</code>"})
t=Autolink.autolink(t,r)
return t}
var serialCommafy=function e(t,r){if(!Array.isArray(t)){return r}var n=t.length
if(n===0){return r}else if(n===1){return t[0].toString()}else if(n===2){return i18n._("%(item1)s and %(item2)s",{item1:t[0].toString(),item2:t[1].toString()})}else{return i18n._("%(items_with_commas)s, and %(last_item)s",{items_with_commas:t.slice(0,n-1).join(", "),last_item:t[n-1].toString()})}}
var stripProtocol=function e(t){if(!t){return t}if(t.indexOf("http://")===0){return t.substring(5)}else if(t.indexOf("https://")===0){return t.substring(6)}return t}
module.exports={formatContent:formatContent,serialCommafy:serialCommafy,stripProtocol:stripProtocol,timestampRegex:timestampRegex}

});
KAdefine("third_party/javascript-khansrc/moment-khansrc/moment.js", function(require, module, exports) {
(function(e,t){var n=t()
if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=n}e.moment=n})(this,function(){"use strict"
var e
function t(){return e.apply(null,arguments)}function n(t){e=t}function i(e){return Object.prototype.toString.call(e)==="[object Array]"}function r(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function s(e,t){var n=[],i
for(i=0;i<e.length;++i){n.push(t(e[i],i))}return n}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){for(var n in t){if(a(t,n)){e[n]=t[n]}}if(a(t,"toString")){e.toString=t.toString}if(a(t,"valueOf")){e.valueOf=t.valueOf}return e}function u(e,t,n,i){return Ot(e,t,n,i,true).utc()}function l(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function f(e){if(e._pf==null){e._pf=l()}return e._pf}function d(e){if(e._isValid==null){var t=f(e)
e._isValid=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated
if(e._strict){e._isValid=e._isValid&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===undefined}}return e._isValid}function h(e){var t=u(NaN)
if(e!=null){o(f(t),e)}else{f(t).userInvalidated=true}return t}function c(e){return e===void 0}var m=t.momentProperties=[]
function v(e,t){var n,i,r
if(!c(t._isAMomentObject)){e._isAMomentObject=t._isAMomentObject}if(!c(t._i)){e._i=t._i}if(!c(t._f)){e._f=t._f}if(!c(t._l)){e._l=t._l}if(!c(t._strict)){e._strict=t._strict}if(!c(t._tzm)){e._tzm=t._tzm}if(!c(t._isUTC)){e._isUTC=t._isUTC}if(!c(t._offset)){e._offset=t._offset}if(!c(t._pf)){e._pf=f(t)}if(!c(t._locale)){e._locale=t._locale}if(m.length>0){for(n in m){i=m[n]
r=t[i]
if(!c(r)){e[i]=r}}}return e}var y=false
function g(e){v(this,e)
this._d=new Date(e._d!=null?e._d.getTime():NaN)
if(y===false){y=true
t.updateOffset(this)
y=false}}function p(e){return e instanceof g||e!=null&&e._isAMomentObject!=null}function D(e){if(e<0){return Math.ceil(e)}else{return Math.floor(e)}}function M(e){var t=+e,n=0
if(t!==0&&isFinite(t)){n=D(t)}return n}function Y(e,t,n){var i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),s=0,a
for(a=0;a<i;a++){if(n&&e[a]!==t[a]||!n&&M(e[a])!==M(t[a])){s++}}return s+r}function S(){}var w={}
var k
function T(e){return e?e.toLowerCase().replace("_","-"):e}function b(e){var t=0,n,i,r,s
while(t<e.length){s=T(e[t]).split("-")
n=s.length
i=T(e[t+1])
i=i?i.split("-"):null
while(n>0){r=O(s.slice(0,n).join("-"))
if(r){return r}if(i&&i.length>=n&&Y(s,i,true)>=n-1){break}n--}t++}return null}function O(e){var t=null
if(!w[e]&&typeof module!=="undefined"&&module&&module.exports){try{t=k._abbr
require("./locale/"+e+".js")
W(t)}catch(e){}}return w[e]}function W(e,t){var n
if(e){if(c(t)){n=U(e)}else{n=x(e,t)}if(n){k=n}}return k._abbr}function x(e,t){if(t!==null){t.abbr=e
w[e]=w[e]||new S
w[e].set(t)
W(e)
return w[e]}else{delete w[e]
return null}}function U(e){var t
if(e&&e._locale&&e._locale._abbr){e=e._locale._abbr}if(!e){return k}if(!i(e)){t=O(e)
if(t){return t}e=[e]}return b(e)}var G={}
function P(e,t){var n=e.toLowerCase()
G[n]=G[n+"s"]=G[t]=e}function C(e){return typeof e==="string"?G[e]||G[e.toLowerCase()]:undefined}function F(e){var t={},n,i
for(i in e){if(a(e,i)){n=C(i)
if(n){t[n]=e[i]}}}return t}function H(e){return e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function V(e,n){return function(i){if(i!=null){I(this,e,i)
t.updateOffset(this,n)
return this}else{return L(this,e)}}}function L(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function I(e,t,n){if(e.isValid()){e._d["set"+(e._isUTC?"UTC":"")+t](n)}}function N(e,t){var n
if(typeof e==="object"){for(n in e){this.set(n,e[n])}}else{e=C(e)
if(H(this[e])){return this[e](t)}}return this}function A(e,t,n){var i=""+Math.abs(e),r=t-i.length,s=e>=0
return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var R=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
var E=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
var j={}
var z={}
function Z(e,t,n,i){var r=i
if(typeof i==="string"){r=function(){return this[i]()}}if(e){z[e]=r}if(t){z[t[0]]=function(){return A(r.apply(this,arguments),t[1],t[2])}}if(n){z[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)}}}function q(e){if(e.match(/\[[\s\S]/)){return e.replace(/^\[|\]$/g,"")}return e.replace(/\\/g,"")}function J(e){var t=e.match(R),n,i
for(n=0,i=t.length;n<i;n++){if(z[t[n]]){t[n]=z[t[n]]}else{t[n]=q(t[n])}}return function(r){var s=""
for(n=0;n<i;n++){s+=t[n]instanceof Function?t[n].call(r,e):t[n]}return s}}function B(e,t){if(!e.isValid()){return e.localeData().invalidDate()}t=Q(t,e.localeData())
j[t]=j[t]||J(t)
return j[t](e)}function Q(e,t){var n=5
function i(e){return t.longDateFormat(e)||e}E.lastIndex=0
while(n>=0&&E.test(e)){e=e.replace(E,i)
E.lastIndex=0
n-=1}return e}var X=/\d/
var K=/\d\d/
var ee=/\d{3}/
var te=/\d{4}/
var ne=/[+-]?\d{6}/
var ie=/\d\d?/
var re=/\d\d\d\d?/
var se=/\d\d\d\d\d\d?/
var ae=/\d{1,3}/
var oe=/\d{1,4}/
var ue=/[+-]?\d{1,6}/
var le=/\d+/
var fe=/[+-]?\d+/
var de=/Z|[+-]\d\d:?\d\d/gi
var he=/Z|[+-]\d\d(?::?\d\d)?/gi
var ce=/[+-]?\d+(\.\d{1,3})?/
var me=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
var _e={}
function ve(e,t,n){_e[e]=H(t)?t:function(e,i){return e&&n?n:t}}function ye(e,t){if(!a(_e,e)){return new RegExp(ge(e))}return _e[e](t._strict,t._locale)}function ge(e){return pe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r}))}function pe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var De={}
function Me(e,t){var n,i=t
if(typeof e==="string"){e=[e]}if(typeof t==="number"){i=function(e,n){n[t]=M(e)}}for(n=0;n<e.length;n++){De[e[n]]=i}}function Ye(e,t){Me(e,function(e,n,i,r){i._w=i._w||{}
t(e,i._w,i,r)})}function Se(e,t,n){if(t!=null&&a(De,e)){De[e](t,n._a,n,e)}}var we=0
var ke=1
var Te=2
var be=3
var Oe=4
var We=5
var xe=6
var Ue=7
var Ge=8
function Pe(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}Z("M",["MM",2],"Mo",function(){return this.month()+1})
Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)})
Z("MMMM",0,0,function(e){return this.localeData().months(this,e)})
P("month","M")
ve("M",ie)
ve("MM",ie,K)
ve("MMM",function(e,t){return t.monthsShortRegex(e)})
ve("MMMM",function(e,t){return t.monthsRegex(e)})
Me(["M","MM"],function(e,t){t[ke]=M(e)-1})
Me(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict)
if(r!=null){t[ke]=r}else{f(n).invalidMonth=e}})
var Ce=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/
var Fe="January_February_March_April_May_June_July_August_September_October_November_December".split("_")
function He(e,t){return i(this._months)?this._months[e.month()]:this._months[Ce.test(t)?"format":"standalone"][e.month()]}var Ve="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
function Le(e,t){return i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ce.test(t)?"format":"standalone"][e.month()]}function Ie(e,t,n){var i,r,s
if(!this._monthsParse){this._monthsParse=[]
this._longMonthsParse=[]
this._shortMonthsParse=[]}for(i=0;i<12;i++){r=u([2e3,i])
if(n&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i")
this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")}if(!n&&!this._monthsParse[i]){s="^"+this.months(r,"")+"|^"+this.monthsShort(r,"")
this._monthsParse[i]=new RegExp(s.replace(".",""),"i")}if(n&&t==="MMMM"&&this._longMonthsParse[i].test(e)){return i}else if(n&&t==="MMM"&&this._shortMonthsParse[i].test(e)){return i}else if(!n&&this._monthsParse[i].test(e)){return i}}}function Ne(e,t){var n
if(!e.isValid()){return e}if(typeof t==="string"){t=e.localeData().monthsParse(t)
if(typeof t!=="number"){return e}}n=Math.min(e.date(),Pe(e.year(),t))
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)
return e}function Ae(e){if(e!=null){Ne(this,e)
t.updateOffset(this,true)
return this}else{return L(this,"Month")}}function Re(){return Pe(this.year(),this.month())}var Ee=me
function je(e){if(this._monthsParseExact){if(!a(this,"_monthsRegex")){$e.call(this)}if(e){return this._monthsShortStrictRegex}else{return this._monthsShortRegex}}else{return this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex}}var ze=me
function Ze(e){if(this._monthsParseExact){if(!a(this,"_monthsRegex")){$e.call(this)}if(e){return this._monthsStrictRegex}else{return this._monthsRegex}}else{return this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex}}function $e(){function e(e,t){return t.length-e.length}var t=[],n=[],i=[],r,s
for(r=0;r<12;r++){s=u([2e3,r])
t.push(this.monthsShort(s,""))
n.push(this.months(s,""))
i.push(this.months(s,""))
i.push(this.monthsShort(s,""))}t.sort(e)
n.sort(e)
i.sort(e)
for(r=0;r<12;r++){t[r]=pe(t[r])
n[r]=pe(n[r])
i[r]=pe(i[r])}this._monthsRegex=new RegExp("^("+i.join("|")+")","i")
this._monthsShortRegex=this._monthsRegex
this._monthsStrictRegex=new RegExp("^("+n.join("|")+")$","i")
this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")$","i")}function qe(e){var t
var n=e._a
if(n&&f(e).overflow===-2){t=n[ke]<0||n[ke]>11?ke:n[Te]<1||n[Te]>Pe(n[we],n[ke])?Te:n[be]<0||n[be]>24||n[be]===24&&(n[Oe]!==0||n[We]!==0||n[xe]!==0)?be:n[Oe]<0||n[Oe]>59?Oe:n[We]<0||n[We]>59?We:n[xe]<0||n[xe]>999?xe:-1
if(f(e)._overflowDayOfYear&&(t<we||t>Te)){t=Te}if(f(e)._overflowWeeks&&t===-1){t=Ue}if(f(e)._overflowWeekday&&t===-1){t=Ge}f(e).overflow=t}return e}function Je(e){if(t.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+e)}}function Be(e,t){var n=true
return o(function(){if(n){Je(e+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack)
n=false}return t.apply(this,arguments)},t)}var Qe={}
function Xe(e,t){if(!Qe[e]){Je(t)
Qe[e]=true}}t.suppressDeprecationWarnings=false
var Ke=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
var et=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
var tt=/Z|[+-]\d\d(?::?\d\d)?/
var nt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]]
var it=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]]
var rt=/^\/?Date\((\-?\d+)/i
function st(e){var t,n,i=e._i,r=Ke.exec(i)||et.exec(i),s,a,o,u
if(r){f(e).iso=true
for(t=0,n=nt.length;t<n;t++){if(nt[t][1].exec(r[1])){a=nt[t][0]
s=nt[t][2]!==false
break}}if(a==null){e._isValid=false
return}if(r[3]){for(t=0,n=it.length;t<n;t++){if(it[t][1].exec(r[3])){o=(r[2]||" ")+it[t][0]
break}}if(o==null){e._isValid=false
return}}if(!s&&o!=null){e._isValid=false
return}if(r[4]){if(tt.exec(r[4])){u="Z"}else{e._isValid=false
return}}e._f=a+(o||"")+(u||"")
Mt(e)}else{e._isValid=false}}function at(e){var n=rt.exec(e._i)
if(n!==null){e._d=new Date(+n[1])
return}st(e)
if(e._isValid===false){delete e._isValid
t.createFromInputFallback(e)}}t.createFromInputFallback=Be("moment construction falls back to js Date. This is "+"discouraged and will be removed in upcoming major "+"release. Please refer to "+"https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})
function ot(e,t,n,i,r,s,a){var o=new Date(e,t,n,i,r,s,a)
if(e<100&&e>=0&&isFinite(o.getFullYear())){o.setFullYear(e)}return o}function ut(e){var t=new Date(Date.UTC.apply(null,arguments))
if(e<100&&e>=0&&isFinite(t.getUTCFullYear())){t.setUTCFullYear(e)}return t}Z("Y",0,0,function(){var e=this.year()
return e<=9999?""+e:"+"+e})
Z(0,["YY",2],0,function(){return this.year()%100})
Z(0,["YYYY",4],0,"year")
Z(0,["YYYYY",5],0,"year")
Z(0,["YYYYYY",6,true],0,"year")
P("year","y")
ve("Y",fe)
ve("YY",ie,K)
ve("YYYY",oe,te)
ve("YYYYY",ue,ne)
ve("YYYYYY",ue,ne)
Me(["YYYYY","YYYYYY"],we)
Me("YYYY",function(e,n){n[we]=e.length===2?t.parseTwoDigitYear(e):M(e)})
Me("YY",function(e,n){n[we]=t.parseTwoDigitYear(e)})
Me("Y",function(e,t){t[we]=parseInt(e,10)})
function lt(e){return ft(e)?366:365}function ft(e){return e%4===0&&e%100!==0||e%400===0}t.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)}
var dt=V("FullYear",false)
function ht(){return ft(this.year())}function ct(e,t,n){var i=7+t-n,r=(7+ut(e,0,i).getUTCDay()-t)%7
return-r+i-1}function mt(e,t,n,i,r){var s=(7+n-i)%7,a=ct(e,i,r),o=1+7*(t-1)+s+a,u,l
if(o<=0){u=e-1
l=lt(u)+o}else if(o>lt(e)){u=e+1
l=o-lt(e)}else{u=e
l=o}return{year:u,dayOfYear:l}}function _t(e,t,n){var i=ct(e.year(),t,n),r=Math.floor((e.dayOfYear()-i-1)/7)+1,s,a
if(r<1){a=e.year()-1
s=r+vt(a,t,n)}else if(r>vt(e.year(),t,n)){s=r-vt(e.year(),t,n)
a=e.year()+1}else{a=e.year()
s=r}return{week:s,year:a}}function vt(e,t,n){var i=ct(e,t,n),r=ct(e+1,t,n)
return(lt(e)-i+r)/7}function yt(e,t,n){if(e!=null){return e}if(t!=null){return t}return n}function gt(e){var n=new Date(t.now())
if(e._useUTC){return[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]}return[n.getFullYear(),n.getMonth(),n.getDate()]}function pt(e){var t,n,i=[],r,s
if(e._d){return}r=gt(e)
if(e._w&&e._a[Te]==null&&e._a[ke]==null){Dt(e)}if(e._dayOfYear){s=yt(e._a[we],r[we])
if(e._dayOfYear>lt(s)){f(e)._overflowDayOfYear=true}n=ut(s,0,e._dayOfYear)
e._a[ke]=n.getUTCMonth()
e._a[Te]=n.getUTCDate()}for(t=0;t<3&&e._a[t]==null;++t){e._a[t]=i[t]=r[t]}for(;t<7;t++){e._a[t]=i[t]=e._a[t]==null?t===2?1:0:e._a[t]}if(e._a[be]===24&&e._a[Oe]===0&&e._a[We]===0&&e._a[xe]===0){e._nextDay=true
e._a[be]=0}e._d=(e._useUTC?ut:ot).apply(null,i)
if(e._tzm!=null){e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm)}if(e._nextDay){e._a[be]=24}}function Dt(e){var t,n,i,r,s,a,o,u
t=e._w
if(t.GG!=null||t.W!=null||t.E!=null){s=1
a=4
n=yt(t.GG,e._a[we],_t(Wt(),1,4).year)
i=yt(t.W,1)
r=yt(t.E,1)
if(r<1||r>7){u=true}}else{s=e._locale._week.dow
a=e._locale._week.doy
n=yt(t.gg,e._a[we],_t(Wt(),s,a).year)
i=yt(t.w,1)
if(t.d!=null){r=t.d
if(r<0||r>6){u=true}}else if(t.e!=null){r=t.e+s
if(t.e<0||t.e>6){u=true}}else{r=s}}if(i<1||i>vt(n,s,a)){f(e)._overflowWeeks=true}else if(u!=null){f(e)._overflowWeekday=true}else{o=mt(n,i,r,s,a)
e._a[we]=o.year
e._dayOfYear=o.dayOfYear}}t.ISO_8601=function(){}
function Mt(e){if(e._f===t.ISO_8601){st(e)
return}e._a=[]
f(e).empty=true
var n=""+e._i,i,r,s,a,o,u=n.length,l=0
s=Q(e._f,e._locale).match(R)||[]
for(i=0;i<s.length;i++){a=s[i]
r=(n.match(ye(a,e))||[])[0]
if(r){o=n.substr(0,n.indexOf(r))
if(o.length>0){f(e).unusedInput.push(o)}n=n.slice(n.indexOf(r)+r.length)
l+=r.length}if(z[a]){if(r){f(e).empty=false}else{f(e).unusedTokens.push(a)}Se(a,r,e)}else if(e._strict&&!r){f(e).unusedTokens.push(a)}}f(e).charsLeftOver=u-l
if(n.length>0){f(e).unusedInput.push(n)}if(f(e).bigHour===true&&e._a[be]<=12&&e._a[be]>0){f(e).bigHour=undefined}e._a[be]=Yt(e._locale,e._a[be],e._meridiem)
pt(e)
qe(e)}function Yt(e,t,n){var i
if(n==null){return t}if(e.meridiemHour!=null){return e.meridiemHour(t,n)}else if(e.isPM!=null){i=e.isPM(n)
if(i&&t<12){t+=12}if(!i&&t===12){t=0}return t}else{return t}}function St(e){var t,n,i,r,s
if(e._f.length===0){f(e).invalidFormat=true
e._d=new Date(NaN)
return}for(r=0;r<e._f.length;r++){s=0
t=v({},e)
if(e._useUTC!=null){t._useUTC=e._useUTC}t._f=e._f[r]
Mt(t)
if(!d(t)){continue}s+=f(t).charsLeftOver
s+=f(t).unusedTokens.length*10
f(t).score=s
if(i==null||s<i){i=s
n=t}}o(e,n||t)}function wt(e){if(e._d){return}var t=F(e._i)
e._a=s([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)})
pt(e)}function kt(e){var t=new g(qe(Tt(e)))
if(t._nextDay){t.add(1,"d")
t._nextDay=undefined}return t}function Tt(e){var t=e._i,n=e._f
e._locale=e._locale||U(e._l)
if(t===null||n===undefined&&t===""){return h({nullInput:true})}if(typeof t==="string"){e._i=t=e._locale.preparse(t)}if(p(t)){return new g(qe(t))}else if(i(n)){St(e)}else if(n){Mt(e)}else if(r(t)){e._d=t}else{bt(e)}if(!d(e)){e._d=null}return e}function bt(e){var n=e._i
if(n===undefined){e._d=new Date(t.now())}else if(r(n)){e._d=new Date(+n)}else if(typeof n==="string"){at(e)}else if(i(n)){e._a=s(n.slice(0),function(e){return parseInt(e,10)})
pt(e)}else if(typeof n==="object"){wt(e)}else if(typeof n==="number"){e._d=new Date(n)}else{t.createFromInputFallback(e)}}function Ot(e,t,n,i,r){var s={}
if(typeof n==="boolean"){i=n
n=undefined}s._isAMomentObject=true
s._useUTC=s._isUTC=r
s._l=n
s._i=e
s._f=t
s._strict=i
return kt(s)}function Wt(e,t,n,i){return Ot(e,t,n,i,false)}var xt=Be("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var e=Wt.apply(null,arguments)
if(this.isValid()&&e.isValid()){return e<this?this:e}else{return h()}})
var Ut=Be("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var e=Wt.apply(null,arguments)
if(this.isValid()&&e.isValid()){return e>this?this:e}else{return h()}})
function Gt(e,t){var n,r
if(t.length===1&&i(t[0])){t=t[0]}if(!t.length){return Wt()}n=t[0]
for(r=1;r<t.length;++r){if(!t[r].isValid()||t[r][e](n)){n=t[r]}}return n}function Pt(){var e=[].slice.call(arguments,0)
return Gt("isBefore",e)}function Ct(){var e=[].slice.call(arguments,0)
return Gt("isAfter",e)}var Ft=function(){return Date.now?Date.now():+new Date}
function Ht(e){var t=F(e),n=t.year||0,i=t.quarter||0,r=t.month||0,s=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,f=t.millisecond||0
this._milliseconds=+f+l*1e3+u*6e4+o*36e5
this._days=+a+s*7
this._months=+r+i*3+n*12
this._data={}
this._locale=U()
this._bubble()}function Vt(e){return e instanceof Ht}function Lt(e,t){Z(e,0,0,function(){var e=this.utcOffset()
var n="+"
if(e<0){e=-e
n="-"}return n+A(~~(e/60),2)+t+A(~~e%60,2)})}Lt("Z",":")
Lt("ZZ","")
ve("Z",he)
ve("ZZ",he)
Me(["Z","ZZ"],function(e,t,n){n._useUTC=true
n._tzm=Nt(he,e)})
var It=/([\+\-]|\d\d)/gi
function Nt(e,t){var n=(t||"").match(e)||[]
var i=n[n.length-1]||[]
var r=(i+"").match(It)||["-",0,0]
var s=+(r[1]*60)+M(r[2])
return r[0]==="+"?s:-s}function At(e,n){var i,s
if(n._isUTC){i=n.clone()
s=(p(e)||r(e)?+e:+Wt(e))-+i
i._d.setTime(+i._d+s)
t.updateOffset(i,false)
return i}else{return Wt(e).local()}}function Rt(e){return-Math.round(e._d.getTimezoneOffset()/15)*15}t.updateOffset=function(){}
function Et(e,n){var i=this._offset||0,r
if(!this.isValid()){return e!=null?this:NaN}if(e!=null){if(typeof e==="string"){e=Nt(he,e)}else if(Math.abs(e)<16){e=e*60}if(!this._isUTC&&n){r=Rt(this)}this._offset=e
this._isUTC=true
if(r!=null){this.add(r,"m")}if(i!==e){if(!n||this._changeInProgress){un(this,nn(e-i,"m"),1,false)}else if(!this._changeInProgress){this._changeInProgress=true
t.updateOffset(this,true)
this._changeInProgress=null}}return this}else{return this._isUTC?i:Rt(this)}}function jt(e,t){if(e!=null){if(typeof e!=="string"){e=-e}this.utcOffset(e,t)
return this}else{return-this.utcOffset()}}function zt(e){return this.utcOffset(0,e)}function Zt(e){if(this._isUTC){this.utcOffset(0,e)
this._isUTC=false
if(e){this.subtract(Rt(this),"m")}}return this}function $t(){if(this._tzm){this.utcOffset(this._tzm)}else if(typeof this._i==="string"){this.utcOffset(Nt(de,this._i))}return this}function qt(e){if(!this.isValid()){return false}e=e?Wt(e).utcOffset():0
return(this.utcOffset()-e)%60===0}function Jt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bt(){if(!c(this._isDSTShifted)){return this._isDSTShifted}var e={}
v(e,this)
e=Tt(e)
if(e._a){var t=e._isUTC?u(e._a):Wt(e._a)
this._isDSTShifted=this.isValid()&&Y(e._a,t.toArray())>0}else{this._isDSTShifted=false}return this._isDSTShifted}function Qt(){return this.isValid()?!this._isUTC:false}function Xt(){return this.isValid()?this._isUTC:false}function Kt(){return this.isValid()?this._isUTC&&this._offset===0:false}var en=/(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
var tn=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/
function nn(e,t){var n=e,i=null,r,s,o
if(Vt(e)){n={ms:e._milliseconds,d:e._days,M:e._months}}else if(typeof e==="number"){n={}
if(t){n[t]=e}else{n.milliseconds=e}}else if(!!(i=en.exec(e))){r=i[1]==="-"?-1:1
n={y:0,d:M(i[Te])*r,h:M(i[be])*r,m:M(i[Oe])*r,s:M(i[We])*r,ms:M(i[xe])*r}}else if(!!(i=tn.exec(e))){r=i[1]==="-"?-1:1
n={y:rn(i[2],r),M:rn(i[3],r),d:rn(i[4],r),h:rn(i[5],r),m:rn(i[6],r),s:rn(i[7],r),w:rn(i[8],r)}}else if(n==null){n={}}else if(typeof n==="object"&&("from"in n||"to"in n)){o=an(Wt(n.from),Wt(n.to))
n={}
n.ms=o.milliseconds
n.M=o.months}s=new Ht(n)
if(Vt(e)&&a(e,"_locale")){s._locale=e._locale}return s}nn.fn=Ht.prototype
function rn(e,t){var n=e&&parseFloat(e.replace(",","."))
return(isNaN(n)?0:n)*t}function sn(e,t){var n={milliseconds:0,months:0}
n.months=t.month()-e.month()+(t.year()-e.year())*12
if(e.clone().add(n.months,"M").isAfter(t)){--n.months}n.milliseconds=+t-+e.clone().add(n.months,"M")
return n}function an(e,t){var n
if(!(e.isValid()&&t.isValid())){return{milliseconds:0,months:0}}t=At(t,e)
if(e.isBefore(t)){n=sn(e,t)}else{n=sn(t,e)
n.milliseconds=-n.milliseconds
n.months=-n.months}return n}function on(e,t){return function(n,i){var r,s
if(i!==null&&!isNaN(+i)){Xe(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period).")
s=n
n=i
i=s}n=typeof n==="string"?+n:n
r=nn(n,i)
un(this,r,e)
return this}}function un(e,n,i,r){var s=n._milliseconds,a=n._days,o=n._months
if(!e.isValid()){return}r=r==null?true:r
if(s){e._d.setTime(+e._d+s*i)}if(a){I(e,"Date",L(e,"Date")+a*i)}if(o){Ne(e,L(e,"Month")+o*i)}if(r){t.updateOffset(e,a||o)}}var ln=on(1,"add")
var fn=on(-1,"subtract")
function dn(e,t){var n=e||Wt(),i=At(n,this).startOf("day"),r=this.diff(i,"days",true),s=r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"
var a=t&&(H(t[s])?t[s]():t[s])
return this.format(a||this.localeData().calendar(s,this,Wt(n)))}function hn(){return new g(this)}function cn(e,t){var n=p(e)?e:Wt(e)
if(!(this.isValid()&&n.isValid())){return false}t=C(!c(t)?t:"millisecond")
if(t==="millisecond"){return+this>+n}else{return+n<+this.clone().startOf(t)}}function mn(e,t){var n=p(e)?e:Wt(e)
if(!(this.isValid()&&n.isValid())){return false}t=C(!c(t)?t:"millisecond")
if(t==="millisecond"){return+this<+n}else{return+this.clone().endOf(t)<+n}}function _n(e,t,n){return this.isAfter(e,n)&&this.isBefore(t,n)}function vn(e,t){var n=p(e)?e:Wt(e),i
if(!(this.isValid()&&n.isValid())){return false}t=C(t||"millisecond")
if(t==="millisecond"){return+this===+n}else{i=+n
return+this.clone().startOf(t)<=i&&i<=+this.clone().endOf(t)}}function yn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function gn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function pn(e,t,n){var i,r,s,a
if(!this.isValid()){return NaN}i=At(e,this)
if(!i.isValid()){return NaN}r=(i.utcOffset()-this.utcOffset())*6e4
t=C(t)
if(t==="year"||t==="month"||t==="quarter"){a=Dn(this,i)
if(t==="quarter"){a=a/3}else if(t==="year"){a=a/12}}else{s=this-i
a=t==="second"?s/1e3:t==="minute"?s/6e4:t==="hour"?s/36e5:t==="day"?(s-r)/864e5:t==="week"?(s-r)/6048e5:s}return n?a:D(a)}function Dn(e,t){var n=(t.year()-e.year())*12+(t.month()-e.month()),i=e.clone().add(n,"months"),r,s
if(t-i<0){r=e.clone().add(n-1,"months")
s=(t-i)/(i-r)}else{r=e.clone().add(n+1,"months")
s=(t-i)/(r-i)}return-(n+s)}t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ"
function Mn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Yn(){var e=this.clone().utc()
if(0<e.year()&&e.year()<=9999){if(H(Date.prototype.toISOString)){return this.toDate().toISOString()}else{return B(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}else{return B(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}function Sn(e){var n=B(this,e||t.defaultFormat)
return this.localeData().postformat(n)}function wn(e,t){if(this.isValid()&&(p(e)&&e.isValid()||Wt(e).isValid())){return nn({to:this,from:e}).locale(this.locale()).humanize(!t)}else{return this.localeData().invalidDate()}}function kn(e){return this.from(Wt(),e)}function Tn(e,t){if(this.isValid()&&(p(e)&&e.isValid()||Wt(e).isValid())){return nn({from:this,to:e}).locale(this.locale()).humanize(!t)}else{return this.localeData().invalidDate()}}function bn(e){return this.to(Wt(),e)}function On(e){var t
if(e===undefined){return this._locale._abbr}else{t=U(e)
if(t!=null){this._locale=t}return this}}var Wn=Be("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){if(e===undefined){return this.localeData()}else{return this.locale(e)}})
function xn(){return this._locale}function Un(e){e=C(e)
switch(e){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}if(e==="week"){this.weekday(0)}if(e==="isoWeek"){this.isoWeekday(1)}if(e==="quarter"){this.month(Math.floor(this.month()/3)*3)}return this}function Gn(e){e=C(e)
if(e===undefined||e==="millisecond"){return this}return this.startOf(e).add(1,e==="isoWeek"?"week":e).subtract(1,"ms")}function Pn(){return+this._d-(this._offset||0)*6e4}function Cn(){return Math.floor(+this/1e3)}function Fn(){return this._offset?new Date(+this):this._d}function Hn(){var e=this
return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Vn(){var e=this
return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ln(){return this.isValid()?this.toISOString():"null"}function In(){return d(this)}function Nn(){return o({},f(this))}function An(){return f(this).overflow}function Rn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Z(0,["gg",2],0,function(){return this.weekYear()%100})
Z(0,["GG",2],0,function(){return this.isoWeekYear()%100})
function En(e,t){Z(0,[e,e.length],0,t)}En("gggg","weekYear")
En("ggggg","weekYear")
En("GGGG","isoWeekYear")
En("GGGGG","isoWeekYear")
P("weekYear","gg")
P("isoWeekYear","GG")
ve("G",fe)
ve("g",fe)
ve("GG",ie,K)
ve("gg",ie,K)
ve("GGGG",oe,te)
ve("gggg",oe,te)
ve("GGGGG",ue,ne)
ve("ggggg",ue,ne)
Ye(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=M(e)})
Ye(["gg","GG"],function(e,n,i,r){n[r]=t.parseTwoDigitYear(e)})
function jn(e){return qn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zn(e){return qn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Zn(){return vt(this.year(),1,4)}function $n(){var e=this.localeData()._week
return vt(this.year(),e.dow,e.doy)}function qn(e,t,n,i,r){var s
if(e==null){return _t(this,i,r).year}else{s=vt(e,i,r)
if(t>s){t=s}return Jn.call(this,e,t,n,i,r)}}function Jn(e,t,n,i,r){var s=mt(e,t,n,i,r),a=ut(s.year,0,s.dayOfYear)
this.year(a.getUTCFullYear())
this.month(a.getUTCMonth())
this.date(a.getUTCDate())
return this}Z("Q",0,"Qo","quarter")
P("quarter","Q")
ve("Q",X)
Me("Q",function(e,t){t[ke]=(M(e)-1)*3})
function Bn(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Z("w",["ww",2],"wo","week")
Z("W",["WW",2],"Wo","isoWeek")
P("week","w")
P("isoWeek","W")
ve("w",ie)
ve("ww",ie,K)
ve("W",ie)
ve("WW",ie,K)
Ye(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=M(e)})
function Qn(e){return _t(e,this._week.dow,this._week.doy).week}var Xn={dow:0,doy:6}
function Kn(){return this._week.dow}function ei(){return this._week.doy}function ti(e){var t=this.localeData().week(this)
return e==null?t:this.add((e-t)*7,"d")}function ni(e){var t=_t(this,1,4).week
return e==null?t:this.add((e-t)*7,"d")}Z("D",["DD",2],"Do","date")
P("date","D")
ve("D",ie)
ve("DD",ie,K)
ve("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient})
Me(["D","DD"],Te)
Me("Do",function(e,t){t[Te]=M(e.match(ie)[0],10)})
var ii=V("Date",true)
Z("d",0,"do","day")
Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)})
Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)})
Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)})
Z("e",0,0,"weekday")
Z("E",0,0,"isoWeekday")
P("day","d")
P("weekday","e")
P("isoWeekday","E")
ve("d",ie)
ve("e",ie)
ve("E",ie)
ve("dd",me)
ve("ddd",me)
ve("dddd",me)
Ye(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict)
if(r!=null){t.d=r}else{f(n).invalidWeekday=e}})
Ye(["d","e","E"],function(e,t,n,i){t[i]=M(e)})
function ri(e,t){if(typeof e!=="string"){return e}if(!isNaN(e)){return parseInt(e,10)}e=t.weekdaysParse(e)
if(typeof e==="number"){return e}return null}var si="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
function ai(e,t){return i(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]}var oi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
function ui(e){return this._weekdaysShort[e.day()]}var li="Su_Mo_Tu_We_Th_Fr_Sa".split("_")
function fi(e){return this._weekdaysMin[e.day()]}function di(e,t,n){var i,r,s
if(!this._weekdaysParse){this._weekdaysParse=[]
this._minWeekdaysParse=[]
this._shortWeekdaysParse=[]
this._fullWeekdaysParse=[]}for(i=0;i<7;i++){r=Wt([2e3,1]).day(i)
if(n&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".",".?")+"$","i")
this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".",".?")+"$","i")
this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".",".?")+"$","i")}if(!this._weekdaysParse[i]){s="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,"")
this._weekdaysParse[i]=new RegExp(s.replace(".",""),"i")}if(n&&t==="dddd"&&this._fullWeekdaysParse[i].test(e)){return i}else if(n&&t==="ddd"&&this._shortWeekdaysParse[i].test(e)){return i}else if(n&&t==="dd"&&this._minWeekdaysParse[i].test(e)){return i}else if(!n&&this._weekdaysParse[i].test(e)){return i}}}function hi(e){if(!this.isValid()){return e!=null?this:NaN}var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
if(e!=null){e=ri(e,this.localeData())
return this.add(e-t,"d")}else{return t}}function ci(e){if(!this.isValid()){return e!=null?this:NaN}var t=(this.day()+7-this.localeData()._week.dow)%7
return e==null?t:this.add(e-t,"d")}function mi(e){if(!this.isValid()){return e!=null?this:NaN}return e==null?this.day()||7:this.day(this.day()%7?e:e-7)}Z("DDD",["DDDD",3],"DDDo","dayOfYear")
P("dayOfYear","DDD")
ve("DDD",ae)
ve("DDDD",ee)
Me(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)})
function _i(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return e==null?t:this.add(e-t,"d")}function vi(){return this.hours()%12||12}Z("H",["HH",2],0,"hour")
Z("h",["hh",2],0,vi)
Z("hmm",0,0,function(){return""+vi.apply(this)+A(this.minutes(),2)})
Z("hmmss",0,0,function(){return""+vi.apply(this)+A(this.minutes(),2)+A(this.seconds(),2)})
Z("Hmm",0,0,function(){return""+this.hours()+A(this.minutes(),2)})
Z("Hmmss",0,0,function(){return""+this.hours()+A(this.minutes(),2)+A(this.seconds(),2)})
function yi(e,t){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}yi("a",true)
yi("A",false)
P("hour","h")
function gi(e,t){return t._meridiemParse}ve("a",gi)
ve("A",gi)
ve("H",ie)
ve("h",ie)
ve("HH",ie,K)
ve("hh",ie,K)
ve("hmm",re)
ve("hmmss",se)
ve("Hmm",re)
ve("Hmmss",se)
Me(["H","HH"],be)
Me(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e)
n._meridiem=e})
Me(["h","hh"],function(e,t,n){t[be]=M(e)
f(n).bigHour=true})
Me("hmm",function(e,t,n){var i=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i))
f(n).bigHour=true})
Me("hmmss",function(e,t,n){var i=e.length-4
var r=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i,2))
t[We]=M(e.substr(r))
f(n).bigHour=true})
Me("Hmm",function(e,t,n){var i=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i))})
Me("Hmmss",function(e,t,n){var i=e.length-4
var r=e.length-2
t[be]=M(e.substr(0,i))
t[Oe]=M(e.substr(i,2))
t[We]=M(e.substr(r))})
function pi(e){return(e+"").toLowerCase().charAt(0)==="p"}var Di=/[ap]\.?m?\.?/i
function Mi(e,t,n){if(e>11){return n?"pm":"PM"}else{return n?"am":"AM"}}var Yi=V("Hours",true)
Z("m",["mm",2],0,"minute")
P("minute","m")
ve("m",ie)
ve("mm",ie,K)
Me(["m","mm"],Oe)
var Si=V("Minutes",false)
Z("s",["ss",2],0,"second")
P("second","s")
ve("s",ie)
ve("ss",ie,K)
Me(["s","ss"],We)
var wi=V("Seconds",false)
Z("S",0,0,function(){return~~(this.millisecond()/100)})
Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)})
Z(0,["SSS",3],0,"millisecond")
Z(0,["SSSS",4],0,function(){return this.millisecond()*10})
Z(0,["SSSSS",5],0,function(){return this.millisecond()*100})
Z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3})
Z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4})
Z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5})
Z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6})
P("millisecond","ms")
ve("S",ae,X)
ve("SS",ae,K)
ve("SSS",ae,ee)
var ki
for(ki="SSSS";ki.length<=9;ki+="S"){ve(ki,le)}function Ti(e,t){t[xe]=M(("0."+e)*1e3)}for(ki="S";ki.length<=9;ki+="S"){Me(ki,Ti)}var bi=V("Milliseconds",false)
Z("z",0,0,"zoneAbbr")
Z("zz",0,0,"zoneName")
function Oi(){return this._isUTC?"UTC":""}function Wi(){return this._isUTC?"Coordinated Universal Time":""}var xi=g.prototype
xi.add=ln
xi.calendar=dn
xi.clone=hn
xi.diff=pn
xi.endOf=Gn
xi.format=Sn
xi.from=wn
xi.fromNow=kn
xi.to=Tn
xi.toNow=bn
xi.get=N
xi.invalidAt=An
xi.isAfter=cn
xi.isBefore=mn
xi.isBetween=_n
xi.isSame=vn
xi.isSameOrAfter=yn
xi.isSameOrBefore=gn
xi.isValid=In
xi.lang=Wn
xi.locale=On
xi.localeData=xn
xi.max=Ut
xi.min=xt
xi.parsingFlags=Nn
xi.set=N
xi.startOf=Un
xi.subtract=fn
xi.toArray=Hn
xi.toObject=Vn
xi.toDate=Fn
xi.toISOString=Yn
xi.toJSON=Ln
xi.toString=Mn
xi.unix=Cn
xi.valueOf=Pn
xi.creationData=Rn
xi.year=dt
xi.isLeapYear=ht
xi.weekYear=jn
xi.isoWeekYear=zn
xi.quarter=xi.quarters=Bn
xi.month=Ae
xi.daysInMonth=Re
xi.week=xi.weeks=ti
xi.isoWeek=xi.isoWeeks=ni
xi.weeksInYear=$n
xi.isoWeeksInYear=Zn
xi.date=ii
xi.day=xi.days=hi
xi.weekday=ci
xi.isoWeekday=mi
xi.dayOfYear=_i
xi.hour=xi.hours=Yi
xi.minute=xi.minutes=Si
xi.second=xi.seconds=wi
xi.millisecond=xi.milliseconds=bi
xi.utcOffset=Et
xi.utc=zt
xi.local=Zt
xi.parseZone=$t
xi.hasAlignedHourOffset=qt
xi.isDST=Jt
xi.isDSTShifted=Bt
xi.isLocal=Qt
xi.isUtcOffset=Xt
xi.isUtc=Kt
xi.isUTC=Kt
xi.zoneAbbr=Oi
xi.zoneName=Wi
xi.dates=Be("dates accessor is deprecated. Use date instead.",ii)
xi.months=Be("months accessor is deprecated. Use month instead",Ae)
xi.years=Be("years accessor is deprecated. Use year instead",dt)
xi.zone=Be("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",jt)
var Ui=xi
function Gi(e){return Wt(e*1e3)}function Pi(){return Wt.apply(null,arguments).parseZone()}var Ci={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"}
function Fi(e,t,n){var i=this._calendar[e]
return H(i)?i.call(t,n):i}var Hi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"}
function Vi(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
if(t||!n){return t}this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)})
return this._longDateFormat[e]}var Li="Invalid date"
function Ii(){return this._invalidDate}var Ni="%d"
var Ai=/\d{1,2}/
function Ri(e){return this._ordinal.replace("%d",e)}function Ei(e){return e}var ji={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}
function zi(e,t,n,i){var r=this._relativeTime[n]
return H(r)?r(e,t,n,i):r.replace(/%d/i,e)}function Zi(e,t){var n=this._relativeTime[e>0?"future":"past"]
return H(n)?n(t):n.replace(/%s/i,t)}function $i(e){var t,n
for(n in e){t=e[n]
if(H(t)){this[n]=t}else{this["_"+n]=t}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}var qi=S.prototype
qi._calendar=Ci
qi.calendar=Fi
qi._longDateFormat=Hi
qi.longDateFormat=Vi
qi._invalidDate=Li
qi.invalidDate=Ii
qi._ordinal=Ni
qi.ordinal=Ri
qi._ordinalParse=Ai
qi.preparse=Ei
qi.postformat=Ei
qi._relativeTime=ji
qi.relativeTime=zi
qi.pastFuture=Zi
qi.set=$i
qi.months=He
qi._months=Fe
qi.monthsShort=Le
qi._monthsShort=Ve
qi.monthsParse=Ie
qi._monthsRegex=ze
qi.monthsRegex=Ze
qi._monthsShortRegex=Ee
qi.monthsShortRegex=je
qi.week=Qn
qi._week=Xn
qi.firstDayOfYear=ei
qi.firstDayOfWeek=Kn
qi.weekdays=ai
qi._weekdays=si
qi.weekdaysMin=fi
qi._weekdaysMin=li
qi.weekdaysShort=ui
qi._weekdaysShort=oi
qi.weekdaysParse=di
qi.isPM=pi
qi._meridiemParse=Di
qi.meridiem=Mi
function Ji(e,t,n,i){var r=U()
var s=u().set(i,t)
return r[n](s,e)}function Bi(e,t,n,i,r){if(typeof e==="number"){t=e
e=undefined}e=e||""
if(t!=null){return Ji(e,t,n,r)}var s
var a=[]
for(s=0;s<i;s++){a[s]=Ji(e,s,n,r)}return a}function Qi(e,t){return Bi(e,t,"months",12,"month")}function Xi(e,t){return Bi(e,t,"monthsShort",12,"month")}function Ki(e,t){return Bi(e,t,"weekdays",7,"day")}function er(e,t){return Bi(e,t,"weekdaysShort",7,"day")}function tr(e,t){return Bi(e,t,"weekdaysMin",7,"day")}W("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=M(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"
return e+n}})
t.lang=Be("moment.lang is deprecated. Use moment.locale instead.",W)
t.langData=Be("moment.langData is deprecated. Use moment.localeData instead.",U)
var nr=Math.abs
function ir(){var e=this._data
this._milliseconds=nr(this._milliseconds)
this._days=nr(this._days)
this._months=nr(this._months)
e.milliseconds=nr(e.milliseconds)
e.seconds=nr(e.seconds)
e.minutes=nr(e.minutes)
e.hours=nr(e.hours)
e.months=nr(e.months)
e.years=nr(e.years)
return this}function rr(e,t,n,i){var r=nn(t,n)
e._milliseconds+=i*r._milliseconds
e._days+=i*r._days
e._months+=i*r._months
return e._bubble()}function sr(e,t){return rr(this,e,t,1)}function ar(e,t){return rr(this,e,t,-1)}function or(e){if(e<0){return Math.floor(e)}else{return Math.ceil(e)}}function ur(){var e=this._milliseconds
var t=this._days
var n=this._months
var i=this._data
var r,s,a,o,u
if(!(e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0)){e+=or(fr(n)+t)*864e5
t=0
n=0}i.milliseconds=e%1e3
r=D(e/1e3)
i.seconds=r%60
s=D(r/60)
i.minutes=s%60
a=D(s/60)
i.hours=a%24
t+=D(a/24)
u=D(lr(t))
n+=u
t-=or(fr(u))
o=D(n/12)
n%=12
i.days=t
i.months=n
i.years=o
return this}function lr(e){return e*4800/146097}function fr(e){return e*146097/4800}function dr(e){var t
var n
var i=this._milliseconds
e=C(e)
if(e==="month"||e==="year"){t=this._days+i/864e5
n=this._months+lr(t)
return e==="month"?n:n/12}else{t=this._days+Math.round(fr(this._months))
switch(e){case"week":return t/7+i/6048e5
case"day":return t+i/864e5
case"hour":return t*24+i/36e5
case"minute":return t*1440+i/6e4
case"second":return t*86400+i/1e3
case"millisecond":return Math.floor(t*864e5)+i
default:throw new Error("Unknown unit "+e)}}}function hr(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+M(this._months/12)*31536e6}function cr(e){return function(){return this.as(e)}}var mr=cr("ms")
var _r=cr("s")
var vr=cr("m")
var yr=cr("h")
var gr=cr("d")
var pr=cr("w")
var Dr=cr("M")
var Mr=cr("y")
function Yr(e){e=C(e)
return this[e+"s"]()}function Sr(e){return function(){return this._data[e]}}var wr=Sr("milliseconds")
var kr=Sr("seconds")
var Tr=Sr("minutes")
var br=Sr("hours")
var Or=Sr("days")
var Wr=Sr("months")
var xr=Sr("years")
function Ur(){return D(this.days()/7)}var Gr=Math.round
var Pr={s:45,m:45,h:22,d:26,M:11}
function Cr(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function Fr(e,t,n){var i=nn(e).abs()
var r=Gr(i.as("s"))
var s=Gr(i.as("m"))
var a=Gr(i.as("h"))
var o=Gr(i.as("d"))
var u=Gr(i.as("M"))
var l=Gr(i.as("y"))
var f=r<Pr.s&&["s",r]||s<=1&&["m"]||s<Pr.m&&["mm",s]||a<=1&&["h"]||a<Pr.h&&["hh",a]||o<=1&&["d"]||o<Pr.d&&["dd",o]||u<=1&&["M"]||u<Pr.M&&["MM",u]||l<=1&&["y"]||["yy",l]
f[2]=t
f[3]=+e>0
f[4]=n
return Cr.apply(null,f)}function Hr(e,t){if(Pr[e]===undefined){return false}if(t===undefined){return Pr[e]}Pr[e]=t
return true}function Vr(e){var t=this.localeData()
var n=Fr(this,!e,t)
if(e){n=t.pastFuture(+this,n)}return t.postformat(n)}var Lr=Math.abs
function Ir(){var e=Lr(this._milliseconds)/1e3
var t=Lr(this._days)
var n=Lr(this._months)
var i,r,s
i=D(e/60)
r=D(i/60)
e%=60
i%=60
s=D(n/12)
n%=12
var a=s
var o=n
var u=t
var l=r
var f=i
var d=e
var h=this.asSeconds()
if(!h){return"P0D"}return(h<0?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(l||f||d?"T":"")+(l?l+"H":"")+(f?f+"M":"")+(d?d+"S":"")}var Nr=Ht.prototype
Nr.abs=ir
Nr.add=sr
Nr.subtract=ar
Nr.as=dr
Nr.asMilliseconds=mr
Nr.asSeconds=_r
Nr.asMinutes=vr
Nr.asHours=yr
Nr.asDays=gr
Nr.asWeeks=pr
Nr.asMonths=Dr
Nr.asYears=Mr
Nr.valueOf=hr
Nr._bubble=ur
Nr.get=Yr
Nr.milliseconds=wr
Nr.seconds=kr
Nr.minutes=Tr
Nr.hours=br
Nr.days=Or
Nr.weeks=Ur
Nr.months=Wr
Nr.years=xr
Nr.humanize=Vr
Nr.toISOString=Ir
Nr.toString=Ir
Nr.toJSON=Ir
Nr.locale=On
Nr.localeData=xn
Nr.toIsoString=Be("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ir)
Nr.lang=Wn
Z("X",0,0,"unix")
Z("x",0,0,"valueOf")
ve("x",fe)
ve("X",ce)
Me("X",function(e,t,n){n._d=new Date(parseFloat(e,10)*1e3)})
Me("x",function(e,t,n){n._d=new Date(M(e))})
t.version="2.11.1"
n(Wt)
t.fn=Ui
t.min=Pt
t.max=Ct
t.now=Ft
t.utc=u
t.unix=Gi
t.months=Qi
t.isDate=r
t.locale=W
t.invalid=h
t.duration=nn
t.isMoment=p
t.weekdays=Ki
t.parseZone=Pi
t.localeData=U
t.isDuration=Vt
t.monthsShort=Xi
t.weekdaysMin=tr
t.defineLocale=x
t.weekdaysShort=er
t.normalizeUnits=C
t.relativeTimeThreshold=Hr
t.prototype=Ui
var Ar=t
return Ar})

this.moment = moment;
require("./locale/en.js");
});
KAdefine("third_party/javascript-khansrc/moment-khansrc/locale/en.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../moment.js");

});
KAdefine("javascript/corelibs-legacy-package/timeago-util.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var moment=require("moment")
var setTimeAgo=exports.setTimeAgo=function e(t){var r=t.tagName.toLowerCase()==="time"?t.getAttribute("datetime"):t.getAttribute("title")
t.innerText=moment(r).fromNow()}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/corelibs-legacy-package.js.map 