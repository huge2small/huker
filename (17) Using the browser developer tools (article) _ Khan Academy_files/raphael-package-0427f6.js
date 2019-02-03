KAdefine("third_party/javascript-khansrc/raphael/raphael.js", function(require, module, exports) {
(function(){var t
if("".trim){t=function(t,e,r){t.setAttribute(e,String(r).trim())}}else{t=function(t,e,r){t.setAttribute(e,String(r))}}function e(){if(e.is(arguments[0],R)){var t=arguments[0],r=$t[p](e,t.splice(0,3+e.is(t[0],E))),s=r.set()
for(var n=0,o=t[B];n<o;n++){var l=t[n]||{}
i[a](l.type)&&s[H](r[l.type]().attr(l))}return s}return $t[p](e,arguments)}e.version="1.5.2"
var r=/[, ]+/,i={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},s=/\{(\d+)\}/g,n="prototype",a="hasOwnProperty",o=document,l=window,h={was:Object[n][a].call(l,"Raphael"),is:l.Raphael},f=function(){this.customAttributes={}},c,u="appendChild",p="apply",d="concat",v="createTouch"in o,y="",g=" ",x=String,m="split",b="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[m](g),w={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},k="join",B="length",C=x[n].toLowerCase,A=Math,N=A.max,T=A.min,S=A.abs,M=A.pow,G=A.PI,E="number",z="string",R="array",L="toString",j="fill",q=Object[n][L],V={},H="push",W=/^url\(['"]?([^\)]+?)['"]?\)$/i,F=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,P={NaN:1,Infinity:1,"-Infinity":1},Y=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,D=A.round,X=parseFloat,O=parseInt,I=" progid:DXImageTransform.Microsoft",U=x[n].toUpperCase,Z={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},Q={along:"along",blur:E,"clip-rect":"csv",cx:E,cy:E,fill:"colour","fill-opacity":E,"font-size":E,height:E,opacity:E,path:"path",r:E,rotation:"csv",rx:E,ry:E,scale:"csv",stroke:"colour","stroke-opacity":E,"stroke-width":E,translation:"csv",width:E,x:E,y:E},J="replace",K=/^(from|to|\d+%?)$/,tt=/\s*,\s*/,et={hs:1,rg:1},rt=/,?([achlmqrstvxz]),?/gi,it=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/gi,st=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/gi,nt=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,at=function(t,e){return t.key-e.key}
e.type=l.SVGAngle||o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML"
if(e.type=="VML"){var ot=o.createElement("div"),lt
ot.innerHTML='<v:shape adj="1"/>'
lt=ot.firstChild
lt.style.behavior="url(#default#VML)"
if(!(lt&&typeof lt.adj=="object")){return e.type=null}ot=null}e.svg=!(e.vml=e.type=="VML")
f[n]=e[n]
c=f[n]
e._id=0
e._oid=0
e.fn={}
e.is=function(t,e){e=C.call(e)
if(e=="finite"){return!P[a](+t)}return e=="null"&&t===null||e==typeof t||e=="object"&&t===Object(t)||e=="array"&&Array.isArray&&Array.isArray(t)||q.call(t).slice(8,-1).toLowerCase()==e}
e.angle=function(t,r,i,s,n,a){if(n==null){var o=t-i,l=r-s
if(!o&&!l){return 0}return((o<0)*180+A.atan(-l/-o)*180/G+360)%360}else{return e.angle(t,r,n,a)-e.angle(i,s,n,a)}}
e.rad=function(t){return t%360*G/180}
e.deg=function(t){return t*180/G%360}
e.snapTo=function(t,r,i){i=e.is(i,"finite")?i:10
if(e.is(t,R)){var s=t.length
while(s--)if(S(t[s]-r)<=i){return t[s]}}else{t=+t
var n=r%t
if(n<i){return r-n}if(n>t-i){return r-n+t}}return r}
function ht(){var t=[],e=0
for(;e<32;e++){t[e]=(~~(A.random()*16))[L](16)}t[12]=4
t[16]=(t[16]&3|8)[L](16)
return"r-"+t[k]("")}e.setWindow=function(t){l=t
o=l.document}
var ft=function(t){if(e.vml){var r=/^\s+|\s+$/g
var i
try{var s=new ActiveXObject("htmlfile")
s.write("<body>")
s.close()
i=s.body}catch(t){i=createPopup().document.body}var n=i.createTextRange()
ft=dt(function(t){try{i.style.color=x(t)[J](r,y)
var e=n.queryCommandValue("ForeColor")
e=(e&255)<<16|e&65280|(e&16711680)>>>16
return"#"+("000000"+e[L](16)).slice(-6)}catch(t){return"none"}})}else{var a=o.createElement("i")
a.title="Raphaël Colour Picker"
a.style.display="none"
o.body[u](a)
ft=dt(function(t){a.style.color=t
return o.defaultView.getComputedStyle(a,y).getPropertyValue("color")})}return ft(t)},ct=function(){return"hsb("+[this.h,this.s,this.b]+")"},ut=function(){return"hsl("+[this.h,this.s,this.l]+")"},pt=function(){return this.hex}
e.hsb2rgb=function(t,r,i,s){if(e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t){i=t.b
r=t.s
t=t.h
s=t.o}return e.hsl2rgb(t,r,i/2,s)}
e.hsl2rgb=function(t,r,i,s){if(e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t){i=t.l
r=t.s
t=t.h}if(t>1||r>1||i>1){t/=360
r/=100
i/=100}var n={},a=["r","g","b"],o,l,h,f,c,u
if(!r){n={r:i,g:i,b:i}}else{if(i<.5){o=i*(1+r)}else{o=i+r-i*r}l=2*i-o
for(var p=0;p<3;p++){h=t+1/3*-(p-1)
h<0&&h++
h>1&&h--
if(h*6<1){n[a[p]]=l+(o-l)*6*h}else if(h*2<1){n[a[p]]=o}else if(h*3<2){n[a[p]]=l+(o-l)*(2/3-h)*6}else{n[a[p]]=l}}}n.r*=255
n.g*=255
n.b*=255
n.hex="#"+(16777216|n.b|n.g<<8|n.r<<16).toString(16).slice(1)
e.is(s,"finite")&&(n.opacity=s)
n.toString=pt
return n}
e.rgb2hsb=function(t,r,i){if(r==null&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t){i=t.b
r=t.g
t=t.r}if(r==null&&e.is(t,z)){var s=e.getRGB(t)
t=s.r
r=s.g
i=s.b}if(t>1||r>1||i>1){t/=255
r/=255
i/=255}var n=N(t,r,i),a=T(t,r,i),o,l,h=n
if(a==n){return{h:0,s:0,b:n,toString:ct}}else{var f=n-a
l=f/n
if(t==n){o=(r-i)/f}else if(r==n){o=2+(i-t)/f}else{o=4+(t-r)/f}o/=6
o<0&&o++
o>1&&o--}return{h:o,s:l,b:h,toString:ct}}
e.rgb2hsl=function(t,r,i){if(r==null&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t){i=t.b
r=t.g
t=t.r}if(r==null&&e.is(t,z)){var s=e.getRGB(t)
t=s.r
r=s.g
i=s.b}if(t>1||r>1||i>1){t/=255
r/=255
i/=255}var n=N(t,r,i),a=T(t,r,i),o,l,h=(n+a)/2,f
if(a==n){f={h:0,s:0,l:h}}else{var c=n-a
l=h<.5?c/(n+a):c/(2-n-a)
if(t==n){o=(r-i)/c}else if(r==n){o=2+(i-t)/c}else{o=4+(t-r)/c}o/=6
o<0&&o++
o>1&&o--
f={h:o,s:l,l:h}}f.toString=ut
return f}
e._path2string=function(){return this.join(",")[J](rt,"$1")}
function dt(t,e,r){function i(){var s=Array[n].slice.call(arguments,0),o=s[k]("►"),l=i.cache=i.cache||{},h=i.count=i.count||[]
if(l[a](o)){return r?r(l[o]):l[o]}h[B]>=1e3&&delete l[h.shift()]
h[H](o)
l[o]=t[p](e,s)
return r?r(l[o]):l[o]}return i}e.getRGB=dt(function(t){if(!t||!!((t=x(t)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1}}if(t=="none"){return{r:-1,g:-1,b:-1,hex:"none"}}!(et[a](t.toLowerCase().substring(0,2))||t.charAt()=="#")&&(t=ft(t))
var r,i,s,n,o,l,h,f=t.match(F)
if(f){if(f[2]){n=O(f[2].substring(5),16)
s=O(f[2].substring(3,5),16)
i=O(f[2].substring(1,3),16)}if(f[3]){n=O((l=f[3].charAt(3))+l,16)
s=O((l=f[3].charAt(2))+l,16)
i=O((l=f[3].charAt(1))+l,16)}if(f[4]){h=f[4][m](tt)
i=X(h[0])
h[0].slice(-1)=="%"&&(i*=2.55)
s=X(h[1])
h[1].slice(-1)=="%"&&(s*=2.55)
n=X(h[2])
h[2].slice(-1)=="%"&&(n*=2.55)
f[1].toLowerCase().slice(0,4)=="rgba"&&(o=X(h[3]))
h[3]&&h[3].slice(-1)=="%"&&(o/=100)}if(f[5]){h=f[5][m](tt)
i=X(h[0])
h[0].slice(-1)=="%"&&(i*=2.55)
s=X(h[1])
h[1].slice(-1)=="%"&&(s*=2.55)
n=X(h[2])
h[2].slice(-1)=="%"&&(n*=2.55);(h[0].slice(-3)=="deg"||h[0].slice(-1)=="°")&&(i/=360)
f[1].toLowerCase().slice(0,4)=="hsba"&&(o=X(h[3]))
h[3]&&h[3].slice(-1)=="%"&&(o/=100)
return e.hsb2rgb(i,s,n,o)}if(f[6]){h=f[6][m](tt)
i=X(h[0])
h[0].slice(-1)=="%"&&(i*=2.55)
s=X(h[1])
h[1].slice(-1)=="%"&&(s*=2.55)
n=X(h[2])
h[2].slice(-1)=="%"&&(n*=2.55);(h[0].slice(-3)=="deg"||h[0].slice(-1)=="°")&&(i/=360)
f[1].toLowerCase().slice(0,4)=="hsla"&&(o=X(h[3]))
h[3]&&h[3].slice(-1)=="%"&&(o/=100)
return e.hsl2rgb(i,s,n,o)}f={r:i,g:s,b:n}
f.hex="#"+(16777216|n|s<<8|i<<16).toString(16).slice(1)
e.is(o,"finite")&&(f.opacity=o)
return f}return{r:-1,g:-1,b:-1,hex:"none",error:1}},e)
e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b)
e.h+=.075
if(e.h>1){e.h=0
e.s-=.2
e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})}return r.hex}
e.getColor.reset=function(){delete this.start}
e.parsePathString=dt(function(t){if(!t){return null}var r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},i=[]
if(e.is(t,R)&&e.is(t[0],R)){i=yt(t)}if(!i[B]){x(t)[J](it,function(t,e,s){var n=[],a=C.call(e)
s[J](st,function(t,e){e&&n[H](+e)})
if(a=="m"&&n[B]>2){i[H]([e][d](n.splice(0,2)))
a="l"
e=e=="m"?"l":"L"}while(n[B]>=r[a]){i[H]([e][d](n.splice(0,r[a])))
if(!r[a]){break}}})}i[L]=e._path2string
return i})
e.findDotsAtSegment=function(t,e,r,i,s,n,a,o,l){var h=1-l,f=M(h,3)*t+M(h,2)*3*l*r+h*3*l*l*s+M(l,3)*a,c=M(h,3)*e+M(h,2)*3*l*i+h*3*l*l*n+M(l,3)*o,u=t+2*l*(r-t)+l*l*(s-2*r+t),p=e+2*l*(i-e)+l*l*(n-2*i+e),d=r+2*l*(s-r)+l*l*(a-2*s+r),v=i+2*l*(n-i)+l*l*(o-2*n+i),y=(1-l)*t+l*r,g=(1-l)*e+l*i,x=(1-l)*s+l*a,m=(1-l)*n+l*o,b=90-A.atan((u-d)/(p-v))*180/G;(u>d||p<v)&&(b+=180)
return{x:f,y:c,m:{x:u,y:p},n:{x:d,y:v},start:{x:y,y:g},end:{x:x,y:m},alpha:b}}
var vt=dt(function(t){if(!t){return{x:0,y:0,width:0,height:0}}t=Bt(t)
var e=0,r=0,i=[],s=[],n
for(var a=0,o=t[B];a<o;a++){n=t[a]
if(n[0]=="M"){e=n[1]
r=n[2]
i[H](e)
s[H](r)}else{var l=_t(e,r,n[1],n[2],n[3],n[4],n[5],n[6])
i=i[d](l.min.x,l.max.x)
s=s[d](l.min.y,l.max.y)
e=n[5]
r=n[6]}}var h=T[p](0,i),f=T[p](0,s)
return{x:h,y:f,width:N[p](0,i)-h,height:N[p](0,s)-f}}),yt=function(t){var r=[]
if(!e.is(t,R)||!e.is(t&&t[0],R)){t=e.parsePathString(t)}for(var i=0,s=t[B];i<s;i++){r[i]=[]
for(var n=0,a=t[i][B];n<a;n++){r[i][n]=t[i][n]}}r[L]=e._path2string
return r},gt=dt(function(t){if(!e.is(t,R)||!e.is(t&&t[0],R)){t=e.parsePathString(t)}var r=[],i=0,s=0,n=0,a=0,o=0
if(t[0][0]=="M"){i=t[0][1]
s=t[0][2]
n=i
a=s
o++
r[H](["M",i,s])}for(var l=o,h=t[B];l<h;l++){var f=r[l]=[],c=t[l]
if(c[0]!=C.call(c[0])){f[0]=C.call(c[0])
switch(f[0]){case"a":f[1]=c[1]
f[2]=c[2]
f[3]=c[3]
f[4]=c[4]
f[5]=c[5]
f[6]=+(c[6]-i).toFixed(3)
f[7]=+(c[7]-s).toFixed(3)
break
case"v":f[1]=+(c[1]-s).toFixed(3)
break
case"m":n=c[1]
a=c[2]
default:for(var u=1,p=c[B];u<p;u++){f[u]=+(c[u]-(u%2?i:s)).toFixed(3)}}}else{f=r[l]=[]
if(c[0]=="m"){n=c[1]+i
a=c[2]+s}for(var d=0,v=c[B];d<v;d++){r[l][d]=c[d]}}var y=r[l][B]
switch(r[l][0]){case"z":i=n
s=a
break
case"h":i+=+r[l][y-1]
break
case"v":s+=+r[l][y-1]
break
default:i+=+r[l][y-2]
s+=+r[l][y-1]}}r[L]=e._path2string
return r},0,yt),xt=dt(function(t){if(!e.is(t,R)||!e.is(t&&t[0],R)){t=e.parsePathString(t)}var r=[],i=0,s=0,n=0,a=0,o=0
if(t[0][0]=="M"){i=+t[0][1]
s=+t[0][2]
n=i
a=s
o++
r[0]=["M",i,s]}for(var l=o,h=t[B];l<h;l++){var f=r[l]=[],c=t[l]
if(c[0]!=U.call(c[0])){f[0]=U.call(c[0])
switch(f[0]){case"A":f[1]=c[1]
f[2]=c[2]
f[3]=c[3]
f[4]=c[4]
f[5]=c[5]
f[6]=+(c[6]+i)
f[7]=+(c[7]+s)
break
case"V":f[1]=+c[1]+s
break
case"H":f[1]=+c[1]+i
break
case"M":n=+c[1]+i
a=+c[2]+s
default:for(var u=1,p=c[B];u<p;u++){f[u]=+c[u]+(u%2?i:s)}}}else{for(var d=0,v=c[B];d<v;d++){r[l][d]=c[d]}}switch(f[0]){case"Z":i=n
s=a
break
case"H":i=f[1]
break
case"V":s=f[1]
break
case"M":n=r[l][r[l][B]-2]
a=r[l][r[l][B]-1]
default:i=r[l][r[l][B]-2]
s=r[l][r[l][B]-1]}}r[L]=e._path2string
return r},null,yt),mt=function(t,e,r,i){return[t,e,r,i,r,i]},bt=function(t,e,r,i,s,n){var a=1/3,o=2/3
return[a*t+o*r,a*e+o*i,a*s+o*r,a*n+o*i,s,n]},wt=function(t,e,r,i,s,n,a,o,l,h){var f=G*120/180,c=G/180*(+s||0),u=[],p,v=dt(function(t,e,r){var i=t*A.cos(r)-e*A.sin(r),s=t*A.sin(r)+e*A.cos(r)
return{x:i,y:s}})
if(!h){p=v(t,e,-c)
t=p.x
e=p.y
p=v(o,l,-c)
o=p.x
l=p.y
var y=A.cos(G/180*s),g=A.sin(G/180*s),x=(t-o)/2,b=(e-l)/2
var w=x*x/(r*r)+b*b/(i*i)
if(w>1){w=A.sqrt(w)
r=w*r
i=w*i}var C=r*r,N=i*i,T=(n==a?-1:1)*A.sqrt(S((C*N-C*b*b-N*x*x)/(C*b*b+N*x*x))),M=T*r*b/i+(t+o)/2,E=T*-i*x/r+(e+l)/2,z=A.asin(((e-E)/i).toFixed(9)),R=A.asin(((l-E)/i).toFixed(9))
z=t<M?G-z:z
R=o<M?G-R:R
z<0&&(z=G*2+z)
R<0&&(R=G*2+R)
if(a&&z>R){z=z-G*2}if(!a&&R>z){R=R-G*2}}else{z=h[0]
R=h[1]
M=h[2]
E=h[3]}var L=R-z
if(S(L)>f){var j=R,q=o,V=l
R=z+f*(a&&R>z?1:-1)
o=M+r*A.cos(R)
l=E+i*A.sin(R)
u=wt(o,l,r,i,s,0,a,q,V,[R,j,M,E])}L=R-z
var H=A.cos(z),W=A.sin(z),F=A.cos(R),P=A.sin(R),Y=A.tan(L/4),D=4/3*r*Y,X=4/3*i*Y,O=[t,e],I=[t+D*W,e-X*H],U=[o+D*P,l-X*F],Z=[o,l]
I[0]=2*O[0]-I[0]
I[1]=2*O[1]-I[1]
if(h){return[I,U,Z][d](u)}else{u=[I,U,Z][d](u)[k]()[m](",")
var Q=[]
for(var J=0,K=u[B];J<K;J++){Q[J]=J%2?v(u[J-1],u[J],c).y:v(u[J],u[J+1],c).x}return Q}},kt=function(t,e,r,i,s,n,a,o,l){var h=1-l
return{x:M(h,3)*t+M(h,2)*3*l*r+h*3*l*l*s+M(l,3)*a,y:M(h,3)*e+M(h,2)*3*l*i+h*3*l*l*n+M(l,3)*o}},_t=dt(function(t,e,r,i,s,n,a,o){var l=s-2*r+t-(a-2*s+r),h=2*(r-t)-2*(s-r),f=t-r,c=(-h+A.sqrt(h*h-4*l*f))/2/l,u=(-h-A.sqrt(h*h-4*l*f))/2/l,d=[e,o],v=[t,a],y
S(c)>"1e12"&&(c=.5)
S(u)>"1e12"&&(u=.5)
if(c>0&&c<1){y=kt(t,e,r,i,s,n,a,o,c)
v[H](y.x)
d[H](y.y)}if(u>0&&u<1){y=kt(t,e,r,i,s,n,a,o,u)
v[H](y.x)
d[H](y.y)}l=n-2*i+e-(o-2*n+i)
h=2*(i-e)-2*(n-i)
f=e-i
c=(-h+A.sqrt(h*h-4*l*f))/2/l
u=(-h-A.sqrt(h*h-4*l*f))/2/l
S(c)>"1e12"&&(c=.5)
S(u)>"1e12"&&(u=.5)
if(c>0&&c<1){y=kt(t,e,r,i,s,n,a,o,c)
v[H](y.x)
d[H](y.y)}if(u>0&&u<1){y=kt(t,e,r,i,s,n,a,o,u)
v[H](y.x)
d[H](y.y)}return{min:{x:T[p](0,v),y:T[p](0,d)},max:{x:N[p](0,v),y:N[p](0,d)}}}),Bt=dt(function(t,e){var r=xt(t),i=e&&xt(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},n={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a=function(t,e){var r,i
if(!t){return["C",e.x,e.y,e.x,e.y,e.x,e.y]}!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null)
switch(t[0]){case"M":e.X=t[1]
e.Y=t[2]
break
case"A":t=["C"][d](wt[p](0,[e.x,e.y][d](t.slice(1))))
break
case"S":r=e.x+(e.x-(e.bx||e.x))
i=e.y+(e.y-(e.by||e.y))
t=["C",r,i][d](t.slice(1))
break
case"T":e.qx=e.x+(e.x-(e.qx||e.x))
e.qy=e.y+(e.y-(e.qy||e.y))
t=["C"][d](bt(e.x,e.y,e.qx,e.qy,t[1],t[2]))
break
case"Q":e.qx=t[1]
e.qy=t[2]
t=["C"][d](bt(e.x,e.y,t[1],t[2],t[3],t[4]))
break
case"L":t=["C"][d](mt(e.x,e.y,t[1],t[2]))
break
case"H":t=["C"][d](mt(e.x,e.y,t[1],e.y))
break
case"V":t=["C"][d](mt(e.x,e.y,e.x,t[1]))
break
case"Z":t=["C"][d](mt(e.x,e.y,e.X,e.Y))
break}return t},o=function(t,e){if(t[e][B]>7){t[e].shift()
var s=t[e]
while(s[B]){t.splice(e++,0,["C"][d](s.splice(0,6)))}t.splice(e,1)
f=N(r[B],i&&i[B]||0)}},l=function(t,e,s,n,a){if(t&&e&&t[a][0]=="M"&&e[a][0]!="M"){e.splice(a,0,["M",n.x,n.y])
s.bx=0
s.by=0
s.x=t[a][1]
s.y=t[a][2]
f=N(r[B],i&&i[B]||0)}}
for(var h=0,f=N(r[B],i&&i[B]||0);h<f;h++){r[h]=a(r[h],s)
o(r,h)
i&&(i[h]=a(i[h],n))
i&&o(i,h)
l(r,i,s,n,h)
l(i,r,n,s,h)
var c=r[h],u=i&&i[h],v=c[B],y=i&&u[B]
s.x=c[v-2]
s.y=c[v-1]
s.bx=X(c[v-4])||s.x
s.by=X(c[v-3])||s.y
n.bx=i&&(X(u[y-4])||n.x)
n.by=i&&(X(u[y-3])||n.y)
n.x=i&&u[y-2]
n.y=i&&u[y-1]}return i?[r,i]:r},null,yt),Ct=dt(function(t){var r=[]
for(var i=0,s=t[B];i<s;i++){var n={},a=t[i].match(/^([^:]*):?([\d\.]*)/)
n.color=e.getRGB(a[1])
if(n.color.error){return null}n.color=n.color.hex
a[2]&&(n.offset=a[2]+"%")
r[H](n)}for(i=1,s=r[B]-1;i<s;i++){if(!r[i].offset){var o=X(r[i-1].offset||0),l=0
for(var h=i+1;h<s;h++){if(r[h].offset){l=r[h].offset
break}}if(!l){l=100
h=s}l=X(l)
var f=(l-o)/(h-i+1)
for(;i<h;i++){o+=f
r[i].offset=o+"%"}}}return r}),At=function(t,r,i,s){var n
if(e.is(t,z)||e.is(t,"object")){n=e.is(t,z)?o.getElementById(t):t
if(n.tagName){if(r==null){return{container:n,width:n.style.pixelWidth||n.offsetWidth,height:n.style.pixelHeight||n.offsetHeight}}else{return{container:n,width:r,height:i}}}}else{return{container:1,x:t,y:r,width:i,height:s}}},Nt=function(t,e){var r=this
for(var i in e){if(e[a](i)&&!(i in t)){switch(typeof e[i]){case"function":(function(e){t[i]=t===r?e:function(){return e[p](r,arguments)}})(e[i])
break
case"object":t[i]=t[i]||{}
Nt.call(this,t[i],e[i])
break
default:t[i]=e[i]
break}}}},Tt=function(t,e){t==e.top&&(e.top=t.prev)
t==e.bottom&&(e.bottom=t.next)
t.next&&(t.next.prev=t.prev)
t.prev&&(t.prev.next=t.next)},St=function(t,e){if(e.top===t){return}Tt(t,e)
t.next=null
t.prev=e.top
e.top.next=t
e.top=t},Mt=function(t,e){if(e.bottom===t){return}Tt(t,e)
t.next=e.bottom
t.prev=null
e.bottom.prev=t
e.bottom=t},Gt=function(t,e,r){Tt(t,r)
e==r.top&&(r.top=t)
e.next&&(e.next.prev=t)
t.next=e.next
t.prev=e
e.next=t},Et=function(t,e,r){Tt(t,r)
e==r.bottom&&(r.bottom=t)
e.prev&&(e.prev.next=t)
t.prev=e.prev
e.prev=t
t.next=e},zt=function(t){return function(){throw new Error("Raphaël: you are calling to method “"+t+"” of removed object")}}
e.pathToRelative=gt
if(e.svg){c.svgns="http://www.w3.org/2000/svg"
c.xlink="http://www.w3.org/1999/xlink"
D=function(t){return+t+(~~t===t)*.5}
var $=function(e,r){if(r){for(var i in r){if(r[a](i)){t(e,i,x(r[i]))}}}else{e=o.createElementNS(c.svgns,e)
e.style.webkitTapHighlightColor="rgba(0,0,0,0)"
return e}}
e[L]=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version}
var Rt=function(t,e){var r=$("path")
e.canvas&&e.canvas[u](r)
var i=new Wt(r,e)
i.type="path"
qt(i,{fill:"none",stroke:"#000",path:t})
return i}
var Lt=function(t,e,r){var i="linear",s=.5,n=.5,a=t.style
e=x(e)[J](nt,function(t,e,r){i="radial"
if(e&&r){s=X(e)
n=X(r)
var a=(n>.5)*2-1
M(s-.5,2)+M(n-.5,2)>.25&&(n=A.sqrt(.25-M(s-.5,2))*a+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*a)}return y})
e=e[m](/\s*\-\s*/)
if(i=="linear"){var l=e.shift()
l=-X(l)
if(isNaN(l)){return null}var h=[0,0,A.cos(l*G/180),A.sin(l*G/180)],f=1/(N(S(h[2]),S(h[3]))||1)
h[2]*=f
h[3]*=f
if(h[2]<0){h[0]=-h[2]
h[2]=0}if(h[3]<0){h[1]=-h[3]
h[3]=0}}var c=Ct(e)
if(!c){return null}var p=t.getAttribute(j)
p=p.match(/^url\(#(.*)\)$/)
p&&r.defs.removeChild(o.getElementById(p[1]))
var d=$(i+"Gradient")
d.id=ht()
$(d,i=="radial"?{fx:s,fy:n}:{x1:h[0],y1:h[1],x2:h[2],y2:h[3]})
r.defs[u](d)
for(var v=0,g=c[B];v<g;v++){var b=$("stop")
$(b,{offset:c[v].offset?c[v].offset:!v?"0%":"100%","stop-color":c[v].color||"#fff"})
d[u](b)}$(t,{fill:"url(#"+d.id+")",opacity:1,"fill-opacity":1})
a.fill=y
a.opacity=1
a.fillOpacity=1
return 1}
var jt=function(t){var r=t.getBBox()
$(t.pattern,{patternTransform:e.format("translate({0},{1})",r.x,r.y)})}
var qt=function(i,s){var n={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},l=i.node,h=i.attrs,f=i.rotate(),c=function(t,e){e=n[C.call(e)]
if(e){var r=t.attrs["stroke-width"]||"1",i={round:r,square:r,butt:0}[t.attrs["stroke-linecap"]||s["stroke-linecap"]]||0,a=[]
var o=e[B]
while(o--){a[o]=e[o]*r+(o%2?1:-1)*i}$(l,{"stroke-dasharray":a[k](",")})}}
s[a]("rotation")&&(f=s.rotation)
var p=x(f)[m](r)
if(!(p.length-1)){p=null}else{p[1]=+p[1]
p[2]=+p[2]}X(f)&&i.rotate(0,true)
for(var d in s){if(s[a](d)){if(!Z[a](d)){continue}var v=s[d]
h[d]=v
switch(d){case"blur":i.blur(v)
break
case"rotation":i.rotate(v,true)
break
case"href":case"title":case"target":var b=l.parentNode
if(C.call(b.tagName)!="a"){var w=$("a")
b.insertBefore(w,l)
w[u](l)
b=w}if(d=="target"&&v=="blank"){b.setAttributeNS(i.paper.xlink,"show","new")}else{b.setAttributeNS(i.paper.xlink,d,v)}break
case"cursor":l.style.cursor=v
break
case"clip-rect":var A=x(v)[m](r)
if(A[B]==4){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode)
var N=$("clipPath"),T=$("rect")
N.id=ht()
$(T,{x:A[0],y:A[1],width:A[2],height:A[3]})
N[u](T)
i.paper.defs[u](N)
$(l,{"clip-path":"url(#"+N.id+")"})
i.clip=T}if(!v){var S=o.getElementById(l.getAttribute("clip-path")[J](/(^url\(#|\)$)/g,y))
S&&S.parentNode.removeChild(S)
$(l,{"clip-path":y})
delete i.clip}break
case"path":if(i.type=="path"){$(l,{d:v?h.path=xt(v):"M0,0"})}break
case"width":t(l,d,v)
if(h.fx){d="x"
v=h.x}else{break}case"x":if(h.fx){v=-h.x-(h.width||0)}case"rx":if(d=="rx"&&i.type=="rect"){break}case"cx":p&&(d=="x"||d=="cx")&&(p[1]+=v-h[d])
t(l,d,v)
i.pattern&&jt(i)
break
case"height":t(l,d,v)
if(h.fy){d="y"
v=h.y}else{break}case"y":if(h.fy){v=-h.y-(h.height||0)}case"ry":if(d=="ry"&&i.type=="rect"){break}case"cy":p&&(d=="y"||d=="cy")&&(p[2]+=v-h[d])
t(l,d,v)
i.pattern&&jt(i)
break
case"r":if(i.type=="rect"){$(l,{rx:v,ry:v})}else{t(l,d,v)}break
case"src":if(i.type=="image"){l.setAttributeNS(i.paper.xlink,"href",v)}break
case"stroke-width":l.style.strokeWidth=v
t(l,d,v)
if(h["stroke-dasharray"]){c(i,h["stroke-dasharray"])}break
case"stroke-dasharray":c(i,v)
break
case"translation":var M=x(v)[m](r)
M[0]=+M[0]||0
M[1]=+M[1]||0
if(p){p[1]+=M[0]
p[2]+=M[1]}Ae.call(i,M[0],M[1])
break
case"scale":M=x(v)[m](r)
i.scale(+M[0]||1,+M[1]||+M[0]||1,isNaN(X(M[2]))?null:+M[2],isNaN(X(M[3]))?null:+M[3])
break
case j:var G=x(v).match(W)
if(G){N=$("pattern")
var E=$("image")
N.id=ht()
$(N,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1})
$(E,{x:0,y:0})
E.setAttributeNS(i.paper.xlink,"href",G[1])
N[u](E)
var z=o.createElement("img")
z.style.cssText="position:absolute;left:-9999em;top-9999em"
z.onload=function(){$(N,{width:this.offsetWidth,height:this.offsetHeight})
$(E,{width:this.offsetWidth,height:this.offsetHeight})
o.body.removeChild(this)
i.paper.safari()}
o.body[u](z)
z.src=G[1]
i.paper.defs[u](N)
l.style.fill="url(#"+N.id+")"
$(l,{fill:"url(#"+N.id+")"})
i.pattern=N
i.pattern&&jt(i)
break}var R=e.getRGB(v)
if(!R.error){delete s.gradient
delete h.gradient
!e.is(h.opacity,"undefined")&&e.is(s.opacity,"undefined")&&$(l,{opacity:h.opacity})
!e.is(h["fill-opacity"],"undefined")&&e.is(s["fill-opacity"],"undefined")&&$(l,{"fill-opacity":h["fill-opacity"]})}else if(({circle:1,ellipse:1}[a](i.type)||x(v).charAt()!="r")&&Lt(l,v,i.paper)){h.gradient=v
h.fill="none"
break}R[a]("opacity")&&$(l,{"fill-opacity":R.opacity>1?R.opacity/100:R.opacity})
case"stroke":R=e.getRGB(v)
t(l,d,R.hex)
d=="stroke"&&R[a]("opacity")&&$(l,{"stroke-opacity":R.opacity>1?R.opacity/100:R.opacity})
break
case"gradient":(({circle:1,ellipse:1})[a](i.type)||x(v).charAt()!="r")&&Lt(l,v,i.paper)
break
case"opacity":if(h.gradient&&!h[a]("stroke-opacity")){$(l,{"stroke-opacity":v>1?v/100:v})}case"fill-opacity":if(h.gradient){var L=o.getElementById(l.getAttribute(j)[J](/^url\(#|\)$/g,y))
if(L){var q=L.getElementsByTagName("stop")
t(q[q[B]-1],"stop-opacity",v)}break}default:d=="font-size"&&(v=O(v,10)+"px")
var V=d[J](/(\-.)/g,function(t){return U.call(t.substring(1))})
l.style[V]=v
t(l,d,v)
break}}}Ht(i,s)
if(p){i.rotate(p.join(g))}else{X(f)&&i.rotate(f,true)}}
var Vt=1.2,Ht=function(t,r){if(t.type!="text"||!(r[a]("text")||r[a]("font")||r[a]("font-size")||r[a]("x")||r[a]("y"))){return}var i=t.attrs,s=t.node,n=s.firstChild?O(o.defaultView.getComputedStyle(s.firstChild,y).getPropertyValue("font-size"),10):10
if(r[a]("text")){i.text=r.text
while(s.firstChild){s.removeChild(s.firstChild)}var l=x(r.text)[m]("\n")
for(var h=0,f=l[B];h<f;h++)if(l[h]){var c=$("tspan")
h&&$(c,{dy:n*Vt,x:i.x})
c[u](o.createTextNode(l[h]))
s[u](c)}}else{l=s.getElementsByTagName("tspan")
for(h=0,f=l[B];h<f;h++){h&&$(l[h],{dy:n*Vt,x:i.x})}}$(s,{y:i.y})
var p=t.getBBox(),d=i.y-(p.y+p.height/2)
d&&e.is(d,"finite")&&$(s,{y:i.y+d})},Wt=function(t,r){var i=0,s=0
this[0]=t
this.id=e._oid++
this.node=t
t.raphael=this
this.paper=r
this.attrs=this.attrs||{}
this.transformations=[]
this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1}
!r.bottom&&(r.bottom=this)
this.prev=r.top
r.top&&(r.top.next=this)
r.top=this
this.next=null}
var Ft=Wt[n]
Wt[n].rotate=function(t,i,s){if(this.removed){return this}if(t==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][k](g)}return this._.rt.deg}var n=this.getBBox()
t=x(t)[m](r)
if(t[B]-1){i=X(t[1])
s=X(t[2])}t=X(t[0])
if(i!=null&&i!==false){this._.rt.deg=t}else{this._.rt.deg+=t}s==null&&(i=null)
this._.rt.cx=i
this._.rt.cy=s
i=i==null?n.x+n.width/2:i
s=s==null?n.y+n.height/2:s
if(this._.rt.deg){this.transformations[0]=e.format("rotate({0} {1} {2})",this._.rt.deg,i,s)
this.clip&&$(this.clip,{transform:e.format("rotate({0} {1} {2})",-this._.rt.deg,i,s)})}else{this.transformations[0]=y
this.clip&&$(this.clip,{transform:y})}$(this.node,{transform:this.transformations[k](g)})
return this}
Wt[n].hide=function(){!this.removed&&(this.node.style.display="none")
return this}
Wt[n].show=function(){!this.removed&&(this.node.style.display="")
return this}
Wt[n].remove=function(){if(this.removed){return}Tt(this,this.paper)
this.node.parentNode.removeChild(this.node)
for(var t in this){delete this[t]}this.removed=true}
Wt[n].getBBox=function(){if(this.removed){return this}if(this.type=="path"){return vt(this.attrs.path)}if(this.node.style.display=="none"){this.show()
var t=true}var e={}
try{e=this.node.getBBox()}catch(t){}finally{e=e||{}}if(this.type=="text"){e={x:e.x,y:Infinity,width:0,height:0}
for(var r=0,i=this.node.getNumberOfChars();r<i;r++){var s=this.node.getExtentOfChar(r)
s.y<e.y&&(e.y=s.y)
s.y+s.height-e.y>e.height&&(e.height=s.y+s.height-e.y)
s.x+s.width-e.x>e.width&&(e.width=s.x+s.width-e.x)}}t&&this.hide()
return e}
Wt[n].attr=function(t,r){if(this.removed){return this}if(t==null){var i={}
for(var s in this.attrs)if(this.attrs[a](s)){i[s]=this.attrs[s]}this._.rt.deg&&(i.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(i.scale=this.scale())
i.gradient&&i.fill=="none"&&(i.fill=i.gradient)&&delete i.gradient
return i}if(r==null&&e.is(t,z)){if(t=="translation"){return Ae.call(this)}if(t=="rotation"){return this.rotate()}if(t=="scale"){return this.scale()}if(t==j&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}return this.attrs[t]}if(r==null&&e.is(t,R)){var n={}
for(var o=0,l=t.length;o<l;o++){n[t[o]]=this.attr(t[o])}return n}if(r!=null){var h={}
h[t]=r}else if(t!=null&&e.is(t,"object")){h=t}for(var f in this.paper.customAttributes)if(this.paper.customAttributes[a](f)&&h[a](f)&&e.is(this.paper.customAttributes[f],"function")){var c=this.paper.customAttributes[f].apply(this,[][d](h[f]))
this.attrs[f]=h[f]
for(var u in c)if(c[a](u)){h[u]=c[u]}}qt(this,h)
return this}
Wt[n].toFront=function(){if(this.removed){return this}this.node.parentNode[u](this.node)
var t=this.paper
t.top!=this&&St(this,t)
return this}
Wt[n].toBack=function(){if(this.removed){return this}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild)
Mt(this,this.paper)
var t=this.paper}return this}
Wt[n].insertAfter=function(t){if(this.removed){return this}var e=t.node||t[t.length-1].node
if(e.nextSibling){e.parentNode.insertBefore(this.node,e.nextSibling)}else{e.parentNode[u](this.node)}Gt(this,t,this.paper)
return this}
Wt[n].insertBefore=function(t){if(this.removed){return this}var e=t.node||t[0].node
e.parentNode.insertBefore(this.node,e)
Et(this,t,this.paper)
return this}
Wt[n].blur=function(t){var e=this
if(+t!==0){var r=$("filter"),i=$("feGaussianBlur")
e.attrs.blur=t
r.id=ht()
$(i,{stdDeviation:+t||1.5})
r.appendChild(i)
e.paper.defs.appendChild(r)
e._blur=r
$(e.node,{filter:"url(#"+r.id+")"})}else{if(e._blur){e._blur.parentNode.removeChild(e._blur)
delete e._blur
delete e.attrs.blur}e.node.removeAttribute("filter")}}
var Pt=function(t,e,r,i){var s=$("circle")
t.canvas&&t.canvas[u](s)
var n=new Wt(s,t)
n.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"}
n.type="circle"
$(s,n.attrs)
return n},Yt=function(t,e,r,i,s,n){var a=$("rect")
t.canvas&&t.canvas[u](a)
var o=new Wt(a,t)
o.attrs={x:e,y:r,width:i,height:s,r:n||0,rx:n||0,ry:n||0,fill:"none",stroke:"#000"}
o.type="rect"
$(a,o.attrs)
return o},Dt=function(t,e,r,i,s){var n=$("ellipse")
t.canvas&&t.canvas[u](n)
var a=new Wt(n,t)
a.attrs={cx:e,cy:r,rx:i,ry:s,fill:"none",stroke:"#000"}
a.type="ellipse"
$(n,a.attrs)
return a},Xt=function(t,e,r,i,s,n){var a=$("image")
$(a,{x:r,y:i,width:s,height:n,preserveAspectRatio:"none"})
a.setAttributeNS(t.xlink,"href",e)
t.canvas&&t.canvas[u](a)
var o=new Wt(a,t)
o.attrs={x:r,y:i,width:s,height:n,src:e}
o.type="image"
return o},Ot=function(t,e,r,i){var s=$("text")
$(s,{x:e,y:r,"text-anchor":"middle"})
t.canvas&&t.canvas[u](s)
var n=new Wt(s,t)
n.attrs={x:e,y:r,"text-anchor":"middle",text:i,font:Z.font,stroke:"none",fill:"#000"}
n.type="text"
qt(n,n.attrs)
return n},It=function(e,r){this.width=e||this.width
this.height=r||this.height
t(this.canvas,"width",this.width)
t(this.canvas,"height",this.height)
return this},$t=function(){var t=At[p](0,arguments),r=t&&t.container,i=t.x,s=t.y,n=t.width,a=t.height
if(!r){throw new Error("SVG container not found.")}var l=$("svg")
i=i||0
s=s||0
n=n||512
a=a||342
$(l,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:n,height:a})
if(r==1){l.style.cssText="position:absolute;left:"+i+"px;top:"+s+"px"
o.body[u](l)}else{if(r.firstChild){r.insertBefore(l,r.firstChild)}else{r[u](l)}}r=new f
r.width=n
r.height=a
r.canvas=l
Nt.call(r,r,e.fn)
r.clear()
return r}
c.clear=function(){var t=this.canvas
while(t.firstChild){t.removeChild(t.firstChild)}this.bottom=this.top=null;(this.desc=$("desc"))[u](o.createTextNode("Created with Raphaël"))
t[u](this.desc)
t[u](this.defs=$("defs"))}
c.remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)
for(var t in this){this[t]=zt(t)}}}if(e.vml){var Ut={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},Zt=/([clmz]),?([^clmz]*)/gi,Qt=/ progid:\S+Blur\([^\)]+\)/g,Jt=/-?[^,\s-]+/g,Kt=1e3+g+1e3,te=10,ee={path:1,rect:1},re=function(t){var e=/[ahqstv]/gi,r=xt
x(t).match(e)&&(r=Bt)
e=/[clmz]/g
if(r==xt&&!x(t).match(e)){var i=x(t)[J](Zt,function(t,e,r){var i=[],s=C.call(e)=="m",n=Ut[e]
r[J](Jt,function(t){if(s&&i[B]==2){n+=i+Ut[e=="m"?"l":"L"]
i=[]}i[H](D(t*te))})
return n+i})
return i}var s=r(t),n,a
i=[]
for(var o=0,l=s[B];o<l;o++){n=s[o]
a=C.call(s[o][0])
a=="z"&&(a="x")
for(var h=1,f=n[B];h<f;h++){a+=D(n[h]*te)+(h!=f-1?",":y)}i[H](a)}return i[k](g)}
e[L]=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version}
Rt=function(t,e){var r=se("group")
r.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px"
r.coordsize=e.coordsize
r.coordorigin=e.coordorigin
var i=se("shape"),s=i.style
s.width=e.width+"px"
s.height=e.height+"px"
i.coordsize=Kt
i.coordorigin=e.coordorigin
r[u](i)
var n=new Wt(i,r,e),a={fill:"none",stroke:"#000"}
t&&(a.path=t)
n.type="path"
n.path=[]
n.Path=y
qt(n,a)
e.canvas[u](r)
return n}
qt=function(t,i){t.attrs=t.attrs||{}
var s=t.node,n=t.attrs,l=s.style,h,f=(i.x!=n.x||i.y!=n.y||i.width!=n.width||i.height!=n.height||i.r!=n.r)&&t.type=="rect",c=t
for(var p in i)if(i[a](p)){n[p]=i[p]}if(f){n.path=ie(n.x,n.y,n.width,n.height,n.r)
t.X=n.x
t.Y=n.y
t.W=n.width
t.H=n.height}i.href&&(s.href=i.href)
i.title&&(s.title=i.title)
i.target&&(s.target=i.target)
i.cursor&&(l.cursor=i.cursor)
"blur"in i&&t.blur(i.blur)
if(i.path&&t.type=="path"||f){s.path=re(n.path)}if(i.rotation!=null){t.rotate(i.rotation,true)}if(i.translation){h=x(i.translation)[m](r)
Ae.call(t,h[0],h[1])
if(t._.rt.cx!=null){t._.rt.cx+=+h[0]
t._.rt.cy+=+h[1]
t.setBox(t.attrs,h[0],h[1])}}if(i.scale){h=x(i.scale)[m](r)
t.scale(+h[0]||1,+h[1]||+h[0]||1,+h[2]||null,+h[3]||null)}if("clip-rect"in i){var d=x(i["clip-rect"])[m](r)
if(d[B]==4){d[2]=+d[2]+ +d[0]
d[3]=+d[3]+ +d[1]
var v=s.clipRect||o.createElement("div"),g=v.style,b=s.parentNode
g.clip=e.format("rect({1}px {2}px {3}px {0}px)",d)
if(!s.clipRect){g.position="absolute"
g.top=0
g.left=0
g.width=t.paper.width+"px"
g.height=t.paper.height+"px"
b.parentNode.insertBefore(v,b)
v[u](b)
s.clipRect=v}}if(!i["clip-rect"]){s.clipRect&&(s.clipRect.style.clip=y)}}if(t.type=="image"&&i.src){s.src=i.src}if(t.type=="image"&&i.opacity){s.filterOpacity=I+".Alpha(opacity="+i.opacity*100+")"
l.filter=(s.filterMatrix||y)+(s.filterOpacity||y)}i.font&&(l.font=i.font)
i["font-family"]&&(l.fontFamily='"'+i["font-family"][m](",")[0][J](/^['"]+|['"]+$/g,y)+'"')
i["font-size"]&&(l.fontSize=i["font-size"])
i["font-weight"]&&(l.fontWeight=i["font-weight"])
i["font-style"]&&(l.fontStyle=i["font-style"])
if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){s=t.shape||s
var w=s.getElementsByTagName(j)&&s.getElementsByTagName(j)[0],k=false
!w&&(k=w=se(j))
if("fill-opacity"in i||"opacity"in i){var C=((+n["fill-opacity"]+1||2)-1)*((+n.opacity+1||2)-1)*((+e.getRGB(i.fill).o+1||2)-1)
C=T(N(C,0),1)
w.opacity=C}i.fill&&(w.on=true)
if(w.on==null||i.fill=="none"){w.on=false}if(w.on&&i.fill){var A=i.fill.match(W)
if(A){w.src=A[1]
w.type="tile"}else{w.color=e.getRGB(i.fill).hex
w.src=y
w.type="solid"
if(e.getRGB(i.fill).error&&(c.type in{circle:1,ellipse:1}||x(i.fill).charAt()!="r")&&Lt(c,i.fill)){n.fill="none"
n.gradient=i.fill}}}k&&s[u](w)
var S=s.getElementsByTagName("stroke")&&s.getElementsByTagName("stroke")[0],M=false
!S&&(M=S=se("stroke"))
if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"]){S.on=true}(i.stroke=="none"||S.on==null||i.stroke==0||i["stroke-width"]==0)&&(S.on=false)
var G=e.getRGB(i.stroke)
S.on&&i.stroke&&(S.color=G.hex)
C=((+n["stroke-opacity"]+1||2)-1)*((+n.opacity+1||2)-1)*((+G.o+1||2)-1)
var E=(X(i["stroke-width"])||1)*.75
C=T(N(C,0),1)
i["stroke-width"]==null&&(E=n["stroke-width"])
i["stroke-width"]&&(S.weight=E)
E&&E<1&&(C*=E)&&(S.weight=1)
S.opacity=C
i["stroke-linejoin"]&&(S.joinstyle=i["stroke-linejoin"]||"miter")
S.miterlimit=i["stroke-miterlimit"]||8
i["stroke-linecap"]&&(S.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round")
if(i["stroke-dasharray"]){var z={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"}
S.dashstyle=z[a](i["stroke-dasharray"])?z[i["stroke-dasharray"]]:y}M&&s[u](S)}if(c.type=="text"){l=c.paper.span.style
n.font&&(l.font=n.font)
n["font-family"]&&(l.fontFamily=n["font-family"])
n["font-size"]&&(l.fontSize=n["font-size"])
n["font-weight"]&&(l.fontWeight=n["font-weight"])
n["font-style"]&&(l.fontStyle=n["font-style"])
c.node.string&&(c.paper.span.innerHTML=x(c.node.string)[J](/</g,"&#60;")[J](/&/g,"&#38;")[J](/\n/g,"<br>"))
c.W=n.w=c.paper.span.offsetWidth
c.H=n.h=c.paper.span.offsetHeight
c.X=n.x
c.Y=n.y+D(c.H/2)
switch(n["text-anchor"]){case"start":c.node.style["v-text-align"]="left"
c.bbx=D(c.W/2)
break
case"end":c.node.style["v-text-align"]="right"
c.bbx=-D(c.W/2)
break
default:c.node.style["v-text-align"]="center"
break}}}
Lt=function(t,e){t.attrs=t.attrs||{}
var r=t.attrs,i,s="linear",n=".5 .5"
t.attrs.gradient=e
e=x(e)[J](nt,function(t,e,r){s="radial"
if(e&&r){e=X(e)
r=X(r)
M(e-.5,2)+M(r-.5,2)>.25&&(r=A.sqrt(.25-M(e-.5,2))*((r>.5)*2-1)+.5)
n=e+g+r}return y})
e=e[m](/\s*\-\s*/)
if(s=="linear"){var a=e.shift()
a=-X(a)
if(isNaN(a)){return null}}var o=Ct(e)
if(!o){return null}t=t.shape||t.node
i=t.getElementsByTagName(j)[0]||se(j)
!i.parentNode&&t.appendChild(i)
if(o[B]){i.on=true
i.method="none"
i.color=o[0].color
i.color2=o[o[B]-1].color
var l=[]
for(var h=0,f=o[B];h<f;h++){o[h].offset&&l[H](o[h].offset+g+o[h].color)}i.colors&&(i.colors.value=l[B]?l[k]():"0% "+i.color)
if(s=="radial"){i.type="gradientradial"
i.focus="100%"
i.focussize=n
i.focusposition=n}else{i.type="gradient"
i.angle=(270-a)%360}}return 1}
Wt=function(t,r,i){var s=0,n=0,a=0,o=1
this[0]=t
this.id=e._oid++
this.node=t
t.raphael=this
this.X=0
this.Y=0
this.attrs={}
this.Group=r
this.paper=i
this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1}
!i.bottom&&(i.bottom=this)
this.prev=i.top
i.top&&(i.top.next=this)
i.top=this
this.next=null}
Ft=Wt[n]
Ft.rotate=function(t,e,i){if(this.removed){return this}if(t==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][k](g)}return this._.rt.deg}t=x(t)[m](r)
if(t[B]-1){e=X(t[1])
i=X(t[2])}t=X(t[0])
if(e!=null){this._.rt.deg=t}else{this._.rt.deg+=t}i==null&&(e=null)
this._.rt.cx=e
this._.rt.cy=i
this.setBox(this.attrs,e,i)
this.Group.style.rotation=this._.rt.deg
return this}
Ft.setBox=function(t,e,r){if(this.removed){return this}var i=this.Group.style,s=this.shape&&this.shape.style||this.node.style
t=t||{}
for(var n in t)if(t[a](n)){this.attrs[n]=t[n]}e=e||this._.rt.cx
r=r||this._.rt.cy
var o=this.attrs,l,h,f,c
switch(this.type){case"circle":l=o.cx-o.r
h=o.cy-o.r
f=c=o.r*2
break
case"ellipse":l=o.cx-o.rx
h=o.cy-o.ry
f=o.rx*2
c=o.ry*2
break
case"image":l=+o.x
h=+o.y
f=o.width||0
c=o.height||0
break
case"text":this.textpath.v=["m",D(o.x),", ",D(o.y-2),"l",D(o.x)+1,", ",D(o.y-2)][k](y)
l=o.x-D(this.W/2)
h=o.y-this.H/2
f=this.W
c=this.H
break
case"rect":case"path":if(!this.attrs.path){l=0
h=0
f=this.paper.width
c=this.paper.height}else{var u=vt(this.attrs.path)
l=u.x
h=u.y
f=u.width
c=u.height}break
default:l=0
h=0
f=this.paper.width
c=this.paper.height
break}e=e==null?l+f/2:e
r=r==null?h+c/2:r
var p=e-this.paper.width/2,d=r-this.paper.height/2,v
i.left!=(v=p+"px")&&(i.left=v)
i.top!=(v=d+"px")&&(i.top=v)
this.X=ee[a](this.type)?-p:l
this.Y=ee[a](this.type)?-d:h
this.W=f
this.H=c
if(ee[a](this.type)){s.left!=(v=-p*te+"px")&&(s.left=v)
s.top!=(v=-d*te+"px")&&(s.top=v)}else if(this.type=="text"){s.left!=(v=-p+"px")&&(s.left=v)
s.top!=(v=-d+"px")&&(s.top=v)}else{i.width!=(v=this.paper.width+"px")&&(i.width=v)
i.height!=(v=this.paper.height+"px")&&(i.height=v)
s.left!=(v=l-p+"px")&&(s.left=v)
s.top!=(v=h-d+"px")&&(s.top=v)
s.width!=(v=f+"px")&&(s.width=v)
s.height!=(v=c+"px")&&(s.height=v)}}
Ft.hide=function(){!this.removed&&(this.Group.style.display="none")
return this}
Ft.show=function(){!this.removed&&(this.Group.style.display="block")
return this}
Ft.getBBox=function(){if(this.removed){return this}if(ee[a](this.type)){return vt(this.attrs.path)}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}}
Ft.remove=function(){if(this.removed){return}Tt(this,this.paper)
this.node.parentNode.removeChild(this.node)
this.Group.parentNode.removeChild(this.Group)
this.shape&&this.shape.parentNode.removeChild(this.shape)
for(var t in this){delete this[t]}this.removed=true}
Ft.attr=function(t,r){if(this.removed){return this}if(t==null){var i={}
for(var s in this.attrs)if(this.attrs[a](s)){i[s]=this.attrs[s]}this._.rt.deg&&(i.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(i.scale=this.scale())
i.gradient&&i.fill=="none"&&(i.fill=i.gradient)&&delete i.gradient
return i}if(r==null&&e.is(t,"string")){if(t=="translation"){return Ae.call(this)}if(t=="rotation"){return this.rotate()}if(t=="scale"){return this.scale()}if(t==j&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}return this.attrs[t]}if(this.attrs&&r==null&&e.is(t,R)){var n,o={}
for(s=0,n=t[B];s<n;s++){o[t[s]]=this.attr(t[s])}return o}var l
if(r!=null){l={}
l[t]=r}r==null&&e.is(t,"object")&&(l=t)
if(l){for(var h in this.paper.customAttributes)if(this.paper.customAttributes[a](h)&&l[a](h)&&e.is(this.paper.customAttributes[h],"function")){var f=this.paper.customAttributes[h].apply(this,[][d](l[h]))
this.attrs[h]=l[h]
for(var c in f)if(f[a](c)){l[c]=f[c]}}if(l.text&&this.type=="text"){this.node.string=l.text}qt(this,l)
if(l.gradient&&({circle:1,ellipse:1}[a](this.type)||x(l.gradient).charAt()!="r")){Lt(this,l.gradient)}(!ee[a](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this}
Ft.toFront=function(){!this.removed&&this.Group.parentNode[u](this.Group)
this.paper.top!=this&&St(this,this.paper)
return this}
Ft.toBack=function(){if(this.removed){return this}if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild)
Mt(this,this.paper)}return this}
Ft.insertAfter=function(t){if(this.removed){return this}if(t.constructor==Se){t=t[t.length-1]}if(t.Group.nextSibling){t.Group.parentNode.insertBefore(this.Group,t.Group.nextSibling)}else{t.Group.parentNode[u](this.Group)}Gt(this,t,this.paper)
return this}
Ft.insertBefore=function(t){if(this.removed){return this}if(t.constructor==Se){t=t[0]}t.Group.parentNode.insertBefore(this.Group,t.Group)
Et(this,t,this.paper)
return this}
Ft.blur=function(t){var r=this.node.runtimeStyle,i=r.filter
i=i.replace(Qt,y)
if(+t!==0){this.attrs.blur=t
r.filter=i+g+I+".Blur(pixelradius="+(+t||1.5)+")"
r.margin=e.format("-{0}px 0 0 -{0}px",D(+t||1.5))}else{r.filter=i
r.margin=0
delete this.attrs.blur}}
Pt=function(t,e,r,i){var s=se("group"),n=se("oval"),a=n.style
s.style.cssText="position:absolute;left:0;top:0;width:"+t.width+"px;height:"+t.height+"px"
s.coordsize=Kt
s.coordorigin=t.coordorigin
s[u](n)
var o=new Wt(n,s,t)
o.type="circle"
qt(o,{stroke:"#000",fill:"none"})
o.attrs.cx=e
o.attrs.cy=r
o.attrs.r=i
o.setBox({x:e-i,y:r-i,width:i*2,height:i*2})
t.canvas[u](s)
return o}
function ie(t,r,i,s,n){if(n){return e.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",t+n,r,i-n*2,n,-n,s-n*2,n*2-i,n*2-s)}else{return e.format("M{0},{1}l{2},0,0,{3},{4},0z",t,r,i,s,-i)}}Yt=function(t,e,r,i,s,n){var a=ie(e,r,i,s,n),o=t.path(a),l=o.attrs
o.X=l.x=e
o.Y=l.y=r
o.W=l.width=i
o.H=l.height=s
l.r=n
l.path=a
o.type="rect"
return o}
Dt=function(t,e,r,i,s){var n=se("group"),a=se("oval"),o=a.style
n.style.cssText="position:absolute;left:0;top:0;width:"+t.width+"px;height:"+t.height+"px"
n.coordsize=Kt
n.coordorigin=t.coordorigin
n[u](a)
var l=new Wt(a,n,t)
l.type="ellipse"
qt(l,{stroke:"#000"})
l.attrs.cx=e
l.attrs.cy=r
l.attrs.rx=i
l.attrs.ry=s
l.setBox({x:e-i,y:r-s,width:i*2,height:s*2})
t.canvas[u](n)
return l}
Xt=function(t,e,r,i,s,n){var a=se("group"),o=se("image")
a.style.cssText="position:absolute;left:0;top:0;width:"+t.width+"px;height:"+t.height+"px"
a.coordsize=Kt
a.coordorigin=t.coordorigin
o.src=e
a[u](o)
var l=new Wt(o,a,t)
l.type="image"
l.attrs.src=e
l.attrs.x=r
l.attrs.y=i
l.attrs.w=s
l.attrs.h=n
l.setBox({x:r,y:i,width:s,height:n})
t.canvas[u](a)
return l}
Ot=function(t,r,i,s){var n=se("group"),a=se("shape"),o=a.style,l=se("path"),h=l.style,f=se("textpath")
n.style.cssText="position:absolute;left:0;top:0;width:"+t.width+"px;height:"+t.height+"px"
n.coordsize=Kt
n.coordorigin=t.coordorigin
l.v=e.format("m{0},{1}l{2},{1}",D(r*10),D(i*10),D(r*10)+1)
l.textpathok=true
o.width=t.width
o.height=t.height
f.string=x(s)
f.on=true
a[u](f)
a[u](l)
n[u](a)
var c=new Wt(f,n,t)
c.shape=a
c.textpath=l
c.type="text"
c.attrs.text=s
c.attrs.x=r
c.attrs.y=i
c.attrs.w=1
c.attrs.h=1
qt(c,{font:Z.font,stroke:"none",fill:"#000"})
c.setBox()
t.canvas[u](n)
return c}
It=function(t,e){var r=this.canvas.style
t==+t&&(t+="px")
e==+e&&(e+="px")
r.width=t
r.height=e
r.clip="rect(0 "+t+" "+e+" 0)"
return this}
var se
o.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")
try{!o.namespaces.rvml&&o.namespaces.add("rvml","urn:schemas-microsoft-com:vml")
se=function(t){return o.createElement("<rvml:"+t+' class="rvml">')}}catch(t){se=function(t){return o.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}$t=function(){var t=At[p](0,arguments),r=t.container,i=t.height,s,n=t.width,a=t.x,l=t.y
if(!r){throw new Error("VML container not found.")}var h=new f,c=h.canvas=o.createElement("div"),d=c.style
a=a||0
l=l||0
n=n||512
i=i||342
n==+n&&(n+="px")
i==+i&&(i+="px")
h.width=1e3
h.height=1e3
h.coordsize=te*1e3+g+te*1e3
h.coordorigin="0 0"
h.span=o.createElement("span")
h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"
c[u](h.span)
d.cssText=e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i)
if(r==1){o.body[u](c)
d.left=a+"px"
d.top=l+"px"
d.position="absolute"}else{if(r.firstChild){r.insertBefore(c,r.firstChild)}else{r[u](c)}}Nt.call(h,h,e.fn)
return h}
c.clear=function(){this.canvas.innerHTML=y
this.span=o.createElement("span")
this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"
this.canvas[u](this.span)
this.bottom=this.top=null}
c.remove=function(){this.canvas.parentNode.removeChild(this.canvas)
for(var t in this){this[t]=zt(t)}return true}}var ne=navigator.userAgent.match(/Version\/(.*?)\s/)
if(navigator.vendor=="Apple Computer, Inc."&&(ne&&ne[1]<4||navigator.platform.slice(0,2)=="iP")){c.safari=function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"})
l.setTimeout(function(){t.remove()})}}else{c.safari=function(){}}var ae=function(){this.returnValue=false},oe=function(){return this.originalEvent.preventDefault()},le=function(){this.cancelBubble=true},he=function(){return this.originalEvent.stopPropagation()},fe=function(){if(o.addEventListener){return function(t,e,r,i){var s=v&&w[e]?w[e]:e
var n=function(s){if(v&&w[a](e)){for(var n=0,o=s.targetTouches&&s.targetTouches.length;n<o;n++){if(s.targetTouches[n].target==t){var l=s
s=s.targetTouches[n]
s.originalEvent=l
s.preventDefault=oe
s.stopPropagation=he
break}}}return r.call(i,s)}
t.addEventListener(s,n,false)
return function(){t.removeEventListener(s,n,false)
return true}}}else if(o.attachEvent){return function(t,e,r,i){var s=function(t){t=t||l.event
t.preventDefault=t.preventDefault||ae
t.stopPropagation=t.stopPropagation||le
return r.call(i,t)}
t.attachEvent("on"+e,s)
var n=function(){t.detachEvent("on"+e,s)
return true}
return n}}}(),ce=[],ue=function(t){var e=t.clientX,r=t.clientY,i=o.documentElement.scrollTop||o.body.scrollTop,s=o.documentElement.scrollLeft||o.body.scrollLeft,n,a=ce.length
while(a--){n=ce[a]
if(v){var l=t.touches.length,h
while(l--){h=t.touches[l]
if(h.identifier==n.el._drag.id){e=h.clientX
r=h.clientY;(t.originalEvent?t.originalEvent:t).preventDefault()
break}}}else{t.preventDefault()}e+=s
r+=i
n.move&&n.move.call(n.move_scope||n.el,e-n.el._drag.x,r-n.el._drag.y,e,r,t)}},pe=function(t){e.unmousemove(ue).unmouseup(pe)
var r=ce.length,i
while(r--){i=ce[r]
i.el._drag={}
i.end&&i.end.call(i.end_scope||i.start_scope||i.move_scope||i.el,t)}ce=[]}
for(var de=b[B];de--;){(function(t){e[t]=Wt[n][t]=function(r,i){if(e.is(r,"function")){this.events=this.events||[]
this.events.push({name:t,f:r,unbind:fe(this.shape||this.node||o,t,r,i||this)})}return this}
e["un"+t]=Wt[n]["un"+t]=function(e){var r=this.events,i=r[B]
while(i--)if(r[i].name==t&&r[i].f==e){r[i].unbind()
r.splice(i,1)
!r.length&&delete this.events
return this}return this}})(b[de])}Ft.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)}
Ft.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)}
Ft.drag=function(t,r,i,s,n,a){this._drag={}
this.mousedown(function(l){(l.originalEvent||l).preventDefault()
var h=o.documentElement.scrollTop||o.body.scrollTop,f=o.documentElement.scrollLeft||o.body.scrollLeft
this._drag.x=l.clientX+f
this._drag.y=l.clientY+h
this._drag.id=l.identifier
r&&r.call(n||s||this,l.clientX+f,l.clientY+h,l)
!ce.length&&e.mousemove(ue).mouseup(pe)
ce.push({el:this,move:t,end:i,move_scope:s,start_scope:n,end_scope:a})})
return this}
Ft.undrag=function(t,r,i){var s=ce.length
while(s--){ce[s].el==this&&(ce[s].move==t&&ce[s].end==i)&&ce.splice(s++,1)}!ce.length&&e.unmousemove(ue).unmouseup(pe)}
c.circle=function(t,e,r){return Pt(this,t||0,e||0,r||0)}
c.rect=function(t,e,r,i,s){return Yt(this,t||0,e||0,r||0,i||0,s||0)}
c.ellipse=function(t,e,r,i){return Dt(this,t||0,e||0,r||0,i||0)}
c.path=function(t){t&&!e.is(t,z)&&!e.is(t[0],R)&&(t+=y)
return Rt(e.format[p](e,arguments),this)}
c.image=function(t,e,r,i,s){return Xt(this,t||"about:blank",e||0,r||0,i||0,s||0)}
c.text=function(t,e,r){return Ot(this,t||0,e||0,x(r))}
c.set=function(t){arguments[B]>1&&(t=Array[n].splice.call(arguments,0,arguments[B]))
return new Se(t)}
c.setSize=It
c.top=c.bottom=null
c.raphael=e
function ve(){return this.x+g+this.y}Ft.resetScale=function(){if(this.removed){return this}this._.sx=1
this._.sy=1
this.attrs.scale="1 1"}
Ft.scale=function(e,r,i,s){if(this.removed){return this}if(e==null&&r==null){return{x:this._.sx,y:this._.sy,toString:ve}}r=r||e
!+r&&(r=e)
var n,a,o,l,h=this.attrs
if(e!=0){var f=this.getBBox(),c=f.x+f.width/2,u=f.y+f.height/2,p=S(e/this._.sx),v=S(r/this._.sy)
i=+i||i==0?i:c
s=+s||s==0?s:u
var x=this._.sx>0,m=this._.sy>0,b=~~(e/S(e)),w=~~(r/S(r)),C=p*b,A=v*w,N=this.node.style,T=i+S(c-i)*C*(c>i==x?1:-1),M=s+S(u-s)*A*(u>s==m?1:-1),G=e*b>r*w?v:p
switch(this.type){case"rect":case"image":var E=h.width*p,z=h.height*v
this.attr({height:z,r:h.r*G,width:E,x:T-E/2,y:M-z/2})
break
case"circle":case"ellipse":this.attr({rx:h.rx*p,ry:h.ry*v,r:h.r*G,cx:T,cy:M})
break
case"text":this.attr({x:T,y:M})
break
case"path":var R=gt(h.path),L=true,j=x?C:p,q=m?A:v
for(var V=0,H=R[B];V<H;V++){var W=R[V],F=U.call(W[0])
if(F=="M"&&L){continue}else{L=false}if(F=="A"){W[R[V][B]-2]*=j
W[R[V][B]-1]*=q
W[1]*=p
W[2]*=v
W[5]=+(b+w?!!+W[5]:!+W[5])}else if(F=="H"){for(var P=1,Y=W[B];P<Y;P++){W[P]*=j}}else if(F=="V"){for(P=1,Y=W[B];P<Y;P++){W[P]*=q}}else{for(P=1,Y=W[B];P<Y;P++){W[P]*=P%2?j:q}}}var D=vt(R)
n=T-D.x-D.width/2
a=M-D.y-D.height/2
R[0][1]+=n
R[0][2]+=a
this.attr({path:R})
break}if(this.type in{text:1,image:1}&&(b!=1||w!=1)){if(this.transformations){this.transformations[2]="scale("[d](b,",",w,")")
t(this.node,"transform",this.transformations[k](g))
n=b==-1?-h.x-(E||0):h.x
a=w==-1?-h.y-(z||0):h.y
this.attr({x:n,y:a})
h.fx=b-1
h.fy=w-1}else{this.node.filterMatrix=I+".Matrix(M11="[d](b,", M12=0, M21=0, M22=",w,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')")
N.filter=(this.node.filterMatrix||y)+(this.node.filterOpacity||y)}}else{if(this.transformations){this.transformations[2]=y
t(this.node,"transform",this.transformations[k](g))
h.fx=0
h.fy=0}else{this.node.filterMatrix=y
N.filter=(this.node.filterMatrix||y)+(this.node.filterOpacity||y)}}h.scale=[e,r,i,s][k](g)
this._.sx=e
this._.sy=r}return this}
Ft.clone=function(){if(this.removed){return null}var t=this.attr()
delete t.scale
delete t.translation
return this.paper[this.type]().attr(t)}
var ye={},ge=function(t,r,i,s,n,a,o,l,h){if(t===i&&r===s&&n===o&&a==l){var f=o-t,c=l-r
var u=Math.sqrt(f*f+c*c)
if(h==null){return u}else{var p=h/u
return{start:{x:t,y:r},m:{x:t,y:r},n:{x:o,y:l},end:{x:o,y:l},x:t+p*f,y:r+p*c,alpha:90-A.atan(f/c)*180/G}}}var d=0,v=100,y=[t,r,i,s,n,a,o,l].join(),g=ye[y],x,m
!g&&(ye[y]=g={data:[]})
g.timer&&clearTimeout(g.timer)
g.timer=setTimeout(function(){delete ye[y]},2e3)
if(h!=null){var b=ge(t,r,i,s,n,a,o,l)
v=~~b*10}for(var w=0;w<v+1;w++){if(g.data[h]>w){m=g.data[w*v]}else{m=e.findDotsAtSegment(t,r,i,s,n,a,o,l,w/v)
g.data[w]=m}w&&(d+=M(M(x.x-m.x,2)+M(x.y-m.y,2),.5))
if(h!=null&&d>=h){return m}x=m}if(h==null){return d}},xe=function(t,r){return function(i,s,n){i=Bt(i)
var a,o,l,h,f="",c={},u,p=0
for(var d=0,v=i.length;d<v;d++){l=i[d]
if(l[0]=="M"){a=+l[1]
o=+l[2]}else{h=ge(a,o,l[1],l[2],l[3],l[4],l[5],l[6])
if(p+h>s){if(r&&!c.start){u=ge(a,o,l[1],l[2],l[3],l[4],l[5],l[6],s-p)
f+=["C",u.start.x,u.start.y,u.m.x,u.m.y,u.x,u.y]
if(n){return f}c.start=f
f=["M",u.x,u.y+"C",u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]][k]()
p+=h
a=+l[5]
o=+l[6]
continue}if(!t&&!r){u=ge(a,o,l[1],l[2],l[3],l[4],l[5],l[6],s-p)
return{x:u.x,y:u.y,alpha:u.alpha}}}p+=h
a=+l[5]
o=+l[6]}f+=l}c.end=f
u=t?p:r?c:e.findDotsAtSegment(a,o,l[1],l[2],l[3],l[4],l[5],l[6],1)
u.alpha&&(u={x:u.x,y:u.y,alpha:u.alpha})
return u}}
var me=xe(1),be=xe(),we=xe(0,1)
Ft.getTotalLength=function(){if(this.type!="path"){return}if(this.node.getTotalLength){return this.node.getTotalLength()}return me(this.attrs.path)}
Ft.getPointAtLength=function(t){if(this.type!="path"){return}return be(this.attrs.path,t)}
Ft.getSubpath=function(t,e){if(this.type!="path"){return}if(S(this.getTotalLength()-e)<"1e-6"){return we(this.attrs.path,t).end}var r=we(this.attrs.path,e,1)
return t?we(r,t).end:r}
e.easing_formulas={linear:function(t){return t},"<":function(t){return M(t,3)},">":function(t){return M(t-1,3)+1},"<>":function(t){t=t*2
if(t<1){return M(t,3)/2}t-=2
return(M(t,3)+2)/2},backIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},backOut:function(t){t=t-1
var e=1.70158
return t*t*((e+1)*t+e)+1},elastic:function(t){if(t==0||t==1){return t}var e=.3,r=e/4
return M(2,-10*t)*A.sin((t-r)*(2*G)/e)+1},bounce:function(t){var e=7.5625,r=2.75,i
if(t<1/r){i=e*t*t}else{if(t<2/r){t-=1.5/r
i=e*t*t+.75}else{if(t<2.5/r){t-=2.25/r
i=e*t*t+.9375}else{t-=2.625/r
i=e*t*t+.984375}}}return i}}
var ke=[],_e=function(){var t=+new Date
for(var r=0;r<ke[B];r++){var i=ke[r]
if(i.stop||i.el.removed){continue}var s=t-i.start,n=i.ms,o=i.easing,l=i.from,h=i.diff,f=i.to,c=i.t,u=i.el,p={},d
if(s<n){var v=o(s/n)
for(var x in l)if(l[a](x)){switch(Q[x]){case"along":d=v*n*h[x]
f.back&&(d=f.len-d)
var m=be(f[x],d)
u.translate(h.sx-h.x||0,h.sy-h.y||0)
h.x=m.x
h.y=m.y
u.translate(m.x-h.sx,m.y-h.sy)
f.rot&&u.rotate(h.r+m.alpha,m.x,m.y)
break
case E:d=+l[x]+v*n*h[x]
break
case"colour":d="rgb("+[Ce(D(l[x].r+v*n*h[x].r)),Ce(D(l[x].g+v*n*h[x].g)),Ce(D(l[x].b+v*n*h[x].b))][k](",")+")"
break
case"path":d=[]
for(var b=0,w=l[x][B];b<w;b++){d[b]=[l[x][b][0]]
for(var C=1,A=l[x][b][B];C<A;C++){d[b][C]=+l[x][b][C]+v*n*h[x][b][C]}d[b]=d[b][k](g)}d=d[k](g)
break
case"csv":switch(x){case"translation":var N=v*n*h[x][0]-c.x,T=v*n*h[x][1]-c.y
c.x+=N
c.y+=T
d=N+g+T
break
case"rotation":d=+l[x][0]+v*n*h[x][0]
l[x][1]&&(d+=","+l[x][1]+","+l[x][2])
break
case"scale":d=[+l[x][0]+v*n*h[x][0],+l[x][1]+v*n*h[x][1],2 in f[x]?f[x][2]:y,3 in f[x]?f[x][3]:y][k](g)
break
case"clip-rect":d=[]
b=4
while(b--){d[b]=+l[x][b]+v*n*h[x][b]}break}break
default:var S=[].concat(l[x])
d=[]
b=u.paper.customAttributes[x].length
while(b--){d[b]=+S[b]+v*n*h[x][b]}break}p[x]=d}u.attr(p)
u._run&&u._run.call(u)}else{if(f.along){m=be(f.along,f.len*!f.back)
u.translate(h.sx-(h.x||0)+m.x-h.sx,h.sy-(h.y||0)+m.y-h.sy)
f.rot&&u.rotate(h.r+m.alpha,m.x,m.y)}(c.x||c.y)&&u.translate(-c.x,-c.y)
f.scale&&(f.scale+=y)
u.attr(f)
ke.splice(r--,1)}}e.svg&&u&&u.paper&&u.paper.safari()
ke[B]&&setTimeout(_e)},Be=function(t,r,i,s,n){var a=i-s
r.timeouts.push(setTimeout(function(){e.is(n,"function")&&n.call(r)
r.animate(t,a,t.easing)},s))},Ce=function(t){return N(T(t,255),0)},Ae=function(t,e){if(t==null){return{x:this._.tx,y:this._.ty,toString:ve}}this._.tx+=+t
this._.ty+=+e
switch(this.type){case"circle":case"ellipse":this.attr({cx:+t+this.attrs.cx,cy:+e+this.attrs.cy})
break
case"rect":case"image":case"text":this.attr({x:+t+this.attrs.x,y:+e+this.attrs.y})
break
case"path":var r=gt(this.attrs.path)
r[0][1]+=+t
r[0][2]+=+e
this.attr({path:r})
break}return this}
Ft.animateWith=function(t,e,r,i,s){for(var n=0,a=ke.length;n<a;n++){if(ke[n].el.id==t.id){e.start=ke[n].start}}return this.animate(e,r,i,s)}
Ft.animateAlong=Ne()
Ft.animateAlongBack=Ne(1)
function Ne(t){return function(r,i,s,n){var a={back:t}
e.is(s,"function")?n=s:a.rot=s
r&&r.constructor==Wt&&(r=r.attrs.path)
r&&(a.along=r)
return this.animate(a,i,n)}}function Te(t,e,r,i,s,n){var a=3*e,o=3*(i-e)-a,l=1-a-o,h=3*r,f=3*(s-r)-h,c=1-h-f
function u(t){return((l*t+o)*t+a)*t}function p(t,e){var r=d(t,e)
return((c*r+f)*r+h)*r}function d(t,e){var r,i,s,n,h,f
for(s=t,f=0;f<8;f++){n=u(s)-t
if(S(n)<e){return s}h=(3*l*s+2*o)*s+a
if(S(h)<1e-6){break}s=s-n/h}r=0
i=1
s=t
if(s<r){return r}if(s>i){return i}while(r<i){n=u(s)
if(S(n-t)<e){return s}if(t>n){r=s}else{i=s}s=(i-r)/2+r}return s}return p(t,1/(200*n))}Ft.onAnimation=function(t){this._run=t||0
return this}
Ft.animate=function(t,i,s,n){var o=this
o.timeouts=o.timeouts||[]
if(e.is(s,"function")||!s){n=s||null}if(o.removed){n&&n.call(o)
return o}var l={},h={},f=false,c={}
for(var u in t)if(t[a](u)){if(Q[a](u)||o.paper.customAttributes[a](u)){f=true
l[u]=o.attr(u)
l[u]==null&&(l[u]=Z[u])
h[u]=t[u]
switch(Q[u]){case"along":var p=me(t[u])
var d=be(t[u],p*!!t.back)
var v=o.getBBox()
c[u]=p/i
c.tx=v.x
c.ty=v.y
c.sx=d.x
c.sy=d.y
h.rot=t.rot
h.back=t.back
h.len=p
t.rot&&(c.r=X(o.rotate())||0)
break
case E:c[u]=(h[u]-l[u])/i
break
case"colour":l[u]=e.getRGB(l[u])
var y=e.getRGB(h[u])
c[u]={r:(y.r-l[u].r)/i,g:(y.g-l[u].g)/i,b:(y.b-l[u].b)/i}
break
case"path":var g=Bt(l[u],h[u])
l[u]=g[0]
var b=g[1]
c[u]=[]
for(var w=0,k=l[u][B];w<k;w++){c[u][w]=[0]
for(var C=1,A=l[u][w][B];C<A;C++){c[u][w][C]=(b[w][C]-l[u][w][C])/i}}break
case"csv":var N=x(t[u])[m](r),T=x(l[u])[m](r)
switch(u){case"translation":l[u]=[0,0]
c[u]=[N[0]/i,N[1]/i]
break
case"rotation":l[u]=T[1]==N[1]&&T[2]==N[2]?T:[0,N[1],N[2]]
c[u]=[(N[0]-l[u][0])/i,0,0]
break
case"scale":t[u]=N
l[u]=x(l[u])[m](r)
c[u]=[(N[0]-l[u][0])/i,(N[1]-l[u][1])/i,0,0]
break
case"clip-rect":l[u]=x(l[u])[m](r)
c[u]=[]
w=4
while(w--){c[u][w]=(N[w]-l[u][w])/i}break}h[u]=N
break
default:N=[].concat(t[u])
T=[].concat(l[u])
c[u]=[]
w=o.paper.customAttributes[u][B]
while(w--){c[u][w]=((N[w]||0)-(T[w]||0))/i}break}}}if(!f){var S=[],M
for(var G in t)if(t[a](G)&&K.test(G)){u={value:t[G]}
G=="from"&&(G=0)
G=="to"&&(G=100)
u.key=O(G,10)
S.push(u)}S.sort(at)
if(S[0].key){S.unshift({key:0,value:o.attrs})}for(w=0,k=S[B];w<k;w++){Be(S[w].value,o,i/100*S[w].key,i/100*(S[w-1]&&S[w-1].key||0),S[w-1]&&S[w-1].value.callback)}M=S[S[B]-1].value.callback
if(M){o.timeouts.push(setTimeout(function(){M.call(o)},i))}}else{var z=e.easing_formulas[s]
if(!z){z=x(s).match(Y)
if(z&&z[B]==5){var R=z
z=function(t){return Te(t,+R[1],+R[2],+R[3],+R[4],i)}}else{z=function(t){return t}}}ke.push({start:t.start||+new Date,ms:i,easing:z,from:l,diff:c,to:h,el:o,t:{x:0,y:0}})
e.is(n,"function")&&(o._ac=setTimeout(function(){n.call(o)},i))
ke[B]==1&&setTimeout(_e)}return this}
Ft.stop=function(){for(var t=0;t<ke.length;t++){ke[t].el.id==this.id&&ke.splice(t--,1)}for(t=0,ii=this.timeouts&&this.timeouts.length;t<ii;t++){clearTimeout(this.timeouts[t])}this.timeouts=[]
clearTimeout(this._ac)
delete this._ac
return this}
Ft.translate=function(t,e){return this.attr({translation:t+" "+e})}
Ft[L]=function(){return"Raphaël’s object"}
e.ae=ke
var Se=function(t){this.items=[]
this[B]=0
this.type="set"
if(t){for(var e=0,r=t[B];e<r;e++){if(t[e]&&(t[e].constructor==Wt||t[e].constructor==Se)){this[this.items[B]]=this.items[this.items[B]]=t[e]
this[B]++}}}}
Se[n][H]=function(){var t,e
for(var r=0,i=arguments[B];r<i;r++){t=arguments[r]
if(t&&(t.constructor==Wt||t.constructor==Se)){e=this.items[B]
this[e]=this.items[e]=t
this[B]++}}return this}
Se[n].pop=function(){delete this[this[B]--]
return this.items.pop()}
for(var Me in Ft)if(Ft[a](Me)){Se[n][Me]=function(t){return function(){for(var e=0,r=this.items[B];e<r;e++){this.items[e][t][p](this.items[e],arguments)}return this}}(Me)}Se[n].attr=function(t,r){if(t&&e.is(t,R)&&e.is(t[0],"object")){for(var i=0,s=t[B];i<s;i++){this.items[i].attr(t[i])}}else{for(var n=0,a=this.items[B];n<a;n++){this.items[n].attr(t,r)}}return this}
Se[n].animate=function(t,r,i,s){(e.is(i,"function")||!i)&&(s=i||null)
var n=this.items[B],a=n,o,l=this,h
s&&(h=function(){!--n&&s.call(l)})
i=e.is(i,z)?i:h
o=this.items[--a].animate(t,r,i,h)
while(a--){this.items[a]&&!this.items[a].removed&&this.items[a].animateWith(o,t,r,i,h)}return this}
Se[n].insertAfter=function(t){var e=this.items[B]
while(e--){this.items[e].insertAfter(t)}return this}
Se[n].getBBox=function(){var t=[],e=[],r=[],i=[]
for(var s=this.items[B];s--;){var n=this.items[s].getBBox()
t[H](n.x)
e[H](n.y)
r[H](n.x+n.width)
i[H](n.y+n.height)}t=T[p](0,t)
e=T[p](0,e)
return{x:t,y:e,width:N[p](0,r)-t,height:N[p](0,i)-e}}
Se[n].clone=function(t){t=new Se
for(var e=0,r=this.items[B];e<r;e++){t[H](this.items[e].clone())}return t}
e.registerFont=function(t){if(!t.face){return t}this.fonts=this.fonts||{}
var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"]
for(var i in t.face)if(t.face[a](i)){e.face[i]=t.face[i]}if(this.fonts[r]){this.fonts[r][H](e)}else{this.fonts[r]=[e]}if(!t.svg){e.face["units-per-em"]=O(t.face["units-per-em"],10)
for(var s in t.glyphs)if(t.glyphs[a](s)){var n=t.glyphs[s]
e.glyphs[s]={w:n.w,k:{},d:n.d&&"M"+n.d[J](/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"}
if(n.k){for(var o in n.k)if(n[a](o)){e.glyphs[s].k[o]=n.k[o]}}}}return t}
c.getFont=function(t,r,i,s){s=s||"normal"
i=i||"normal"
r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400
if(!e.fonts){return}var n=e.fonts[t]
if(!n){var o=new RegExp("(^|\\s)"+t[J](/[^\w\d\s+!~.:_-]/g,y)+"(\\s|$)","i")
for(var l in e.fonts)if(e.fonts[a](l)){if(o.test(l)){n=e.fonts[l]
break}}}var h
if(n){for(var f=0,c=n[B];f<c;f++){h=n[f]
if(h.face["font-weight"]==r&&(h.face["font-style"]==i||!h.face["font-style"])&&h.face["font-stretch"]==s){break}}}return h}
c.print=function(t,i,s,n,a,o,l){o=o||"middle"
l=N(T(l||0,1),-1)
var h=this.set(),f=x(s)[m](y),c=0,u=y,p
e.is(n,s)&&(n=this.getFont(n))
if(n){p=(a||16)/n.face["units-per-em"]
var d=n.face.bbox.split(r),v=+d[0],g=+d[1]+(o=="baseline"?d[3]-d[1]+ +n.face.descent:(d[3]-d[1])/2)
for(var b=0,w=f[B];b<w;b++){var k=b&&n.glyphs[f[b-1]]||{},C=n.glyphs[f[b]]
c+=b?(k.w||n.w)+(k.k&&k.k[f[b]]||0)+n.w*l:0
C&&C.d&&h[H](this.path(C.d).attr({fill:"#000",stroke:"none",translation:[c,0]}))}h.scale(p,p,v,g).translate(t-v,i-g)}return h}
e.format=function(t,r){var i=e.is(r,R)?[0][d](r):arguments
t&&e.is(t,z)&&i[B]-1&&(t=t[J](s,function(t,e){return i[++e]==null?y:i[e]}))
return t||y}
e.ninja=function(){h.was?l.Raphael=h.is:Raphael=undefined
return e}
e.el=Ft
e.st=Se[n]
module.exports=e})()

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/raphael-package.js.map 