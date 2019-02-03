KAdefine("javascript/shared-package/ka.js", function(require, module, exports) {
if(!window.KA){window.KA={}}function assertNotSSR(e){if(window.KA.REACT_SSR){var t="Do not access "+e+" from ka.js during the initial render; "+"this does not work with cached server-side rendering. Use "+"<KAProvider /> instead."
throw new Error(t)}}var ssrSafeVariables={REACT_SSR:true,FB_APP_ID:true,MAX_BIO_LENGTH:true,mathjaxUrl:true,staticUrlBase:true,IS_DEV_SERVER:true,isBibliotronPage:true,isIE10:true,isIE11:true,isIOS:true,isIPad:true,isMobile:true,isPhone:true,isTablet:true,isZeroRated:true,kaLocale:true,language:true,languageIsRtl:true,languageLocalName:true,languageYoutube:true,momentLocale:true,icuLocale:true,loginUrl:true,usePreviewFMS:true}
var _get=function e(t){if(!ssrSafeVariables[t]){assertNotSSR(t)}return window.KA[t]}
var _set=function e(t,n){assertNotSSR(t)
window.KA[t]=n}
var triggerProfileChange=function e(t){(_get("_profileChangeListeners")||[]).forEach(function(e){e(t)})}
var KAGlobalsSingleton=function(){function e(){babelHelpers.classCallCheck(this,e)}e.prototype.currentServerTime=function e(){return _get("serverTime")}
e.prototype.getGlobalPermissions=function e(){var t=this.getUserProfile()
return t&&t.get("globalPermissions")||[]}
e.prototype.getKaid=function e(){return _get("kaid")}
e.prototype.getUserID=function e(){return _get("userId")}
e.prototype.getUserProfile=function e(){var t=require("./profile-model.js")
if(_get("_userProfileData")&&!_get("_userProfileModel")){var n=_get("_userProfileData")
var r=new t(n)
triggerProfileChange(r)
r.on("change",triggerProfileChange)
_set("_userProfileModel",r)}return _get("_userProfileModel")}
e.prototype.setUserProfile=function e(t){var n=require("./profile-model.js")
if(!_get("_userProfileModel")){var r=new n(babelHelpers.extends({},_get("_userProfileData"),t))
triggerProfileChange(r)
r.on("change",triggerProfileChange)
_set("_userProfileModel",r)}else{_get("_userProfileModel").set(t)}return _get("_userProfileModel")}
e.prototype.isDeveloper=function e(){var t=this.getUserProfile()
return t&&t.get("isDeveloper")}
e.prototype.isLoggedIn=function e(){return this.getUserProfile()&&!this.isPhantom()}
e.prototype.isPhantom=function e(){var t=this.getUserProfile()
return!t||t.get("isPhantom")}
e.prototype.isPrephantom=function e(){return!this.getUserProfile()}
e.prototype.noColorInVideos=function e(){return _get("noColorInVideos")}
e.prototype.prefersReducedMotion=function e(){return _get("prefersReducedMotion")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion)").matches}
e.prototype.addProfileChangeListener=function e(t){if(!_get("_profileChangeListeners")){_set("_profileChangeListeners",[])}var n=_get("_profileChangeListeners")
if(n.indexOf(t)===-1){n.push(t)}}
e.prototype.removeProfileChangeListener=function e(t){var n=_get("_profileChangeListeners")||[]
var r=n.indexOf(t)
if(r!==-1){n.splice(r,1)}}
e.prototype.featureFlag=function e(t){return _get(t)}
e.prototype.setFeatureFlag=function e(t,n){_set(t,n)}
babelHelpers.createClass(e,[{key:"REACT_SSR",get:function e(){return _get("REACT_SSR")}},{key:"FB_APP_ID",get:function e(){return _get("FB_APP_ID")},set:function e(t){_set("FB_APP_ID",t)}},{key:"MAX_BIO_LENGTH",get:function e(){return _get("MAX_BIO_LENGTH")},set:function e(t){_set("MAX_BIO_LENGTH",t)}},{key:"commitSHA",get:function e(){return _get("commitSHA")},set:function e(t){_set("commitSHA",t)}},{key:"gaeStatsKeyPrefix",get:function e(){return _get("gaeStatsKeyPrefix")},set:function e(t){_set("gaeStatsKeyPrefix",t)}},{key:"mathjaxUrl",get:function e(){return _get("mathjaxUrl")},set:function e(t){_set("mathjaxUrl",t)}},{key:"sentryRelease",get:function e(){return _get("sentryRelease")},set:function e(t){_set("sentryRelease",t)}},{key:"staticUrlBase",get:function e(){return _get("staticUrlBase")},set:function e(t){_set("staticUrlBase",t)}},{key:"stripePublicKey",get:function e(){return _get("stripePublicKey")},set:function e(t){_set("stripePublicKey",t)}},{key:"staticVersion",get:function e(){return _get("staticVersion")}},{key:"version",get:function e(){return _get("version")},set:function e(t){_set("version",t)}},{key:"IS_DEV_SERVER",get:function e(){return _get("IS_DEV_SERVER")},set:function e(t){_set("IS_DEV_SERVER",t)}},{key:"isBibliotronPage",get:function e(){return _get("isBibliotronPage")},set:function e(t){_set("isBibliotronPage",t)}},{key:"isIE10",get:function e(){return _get("isIE10")},set:function e(t){_set("isIE10",t)}},{key:"isIE11",get:function e(){return _get("isIE11")},set:function e(t){_set("isIE11",t)}},{key:"isIOS",get:function e(){return _get("isIOS")},set:function e(t){_set("isIOS",t)}},{key:"isIPad",get:function e(){return _get("isIPad")},set:function e(t){_set("isIPad",t)}},{key:"isMobile",get:function e(){return _get("isMobile")},set:function e(t){_set("isMobile",t)}},{key:"isPhone",get:function e(){return _get("isPhone")},set:function e(t){_set("isPhone",t)}},{key:"isTablet",get:function e(){return _get("isTablet")},set:function e(t){_set("isTablet",t)}},{key:"isZeroRated",get:function e(){return _get("isZeroRated")},set:function e(t){_set("isZeroRated",t)}},{key:"kaLocale",get:function e(){return _get("kaLocale")},set:function e(t){_set("kaLocale",t)}},{key:"language",get:function e(){return _get("language")},set:function e(t){_set("language",t)}},{key:"languageIsRtl",get:function e(){return _get("languageIsRtl")},set:function e(t){_set("languageIsRtl",t)}},{key:"languageLocalName",get:function e(){return _get("languageLocalName")},set:function e(t){_set("languageLocalName",t)}},{key:"languageYoutube",get:function e(){return _get("languageYoutube")},set:function e(t){_set("languageYoutube",t)}},{key:"momentLocale",get:function e(){return _get("momentLocale")},set:function e(t){_set("momentLocale",t)}},{key:"icuLocale",get:function e(){return _get("icuLocale")},set:function e(t){_set("icuLocale",t)}},{key:"loginUrl",get:function e(){return _get("loginUrl")},set:function e(t){_set("loginUrl",t)}},{key:"perseusNeedsExtraWidgets",get:function e(){return _get("perseusNeedsExtraWidgets")},set:function e(t){_set("perseusNeedsExtraWidgets",t)}},{key:"requestLogId",get:function e(){return _get("requestLogId")},set:function e(t){_set("requestLogId",t)}},{key:"showTutorialNav",get:function e(){return _get("showTutorialNav")},set:function e(t){_set("showTutorialNav",t)}},{key:"usePreviewFMS",get:function e(){return _get("usePreviewFMS")},set:function e(t){_set("usePreviewFMS",t)}},{key:"bingoId",get:function e(){return _get("bingoId")},set:function e(t){_set("bingoId",t)}},{key:"userId",get:function e(){return _get("userId")},set:function e(t){_set("userId",t)}},{key:"vipIssueReporter",get:function e(){return _get("vipIssueReporter")},set:function e(t){_set("vipIssueReporter",t)}},{key:"jipt_dom_insert_checks",get:function e(){return _get("jipt_dom_insert_checks")},set:function e(t){_set("jipt_dom_insert_checks",t)}}])
return e}()
var KA=new KAGlobalsSingleton
module.exports=KA

});
KAdefine("javascript/shared-package/static-url.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.default=staticUrl
exports.cssUrl=cssUrl
exports.absoluteUrlFromPath=absoluteUrlFromPath
exports.contentUrl=contentUrl
var _ka=require("./ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var URL_BASE_REGEX=/^(?:https?:)?\/\/([^\/]*)\//
var KA_DOMAIN_REGEX=/(^|\.)(khanacademy\.(org|dev|test|local)|kastatic\.org|(.*-dot-)?khan-academy\.appspot\.com)/
var STATIC_URL_REGEX=new RegExp("^/((fonts|third_party)/.*\\.(eot$|otf$|svg$|ttf$|woff($|2$))|.well-known/a(pple-app-site-association$|ssetlinks.json$)|admin/extbackup/static/|ckeditor/|downloads/|g(ae_mini_profiler/static/|en(files/|webpack/))|images/|javascript/|s(ounds/|t(atic/|ylesheets/))|third_party/|videos/)")
var PROXIED_S3_BUCKETS=["KA-youtube-converted","KA-share","ka-article-iframes","ka-cs-algorithms","ka-cs-challenge-images","ka-cs-scratchpad-audio","ka-exercise-screenshots","ka-exercise-screenshots-2","ka-exercise-screenshots-3","ka-learnstorm","ka-mobile","ka-perseus-graphie","ka-perseus-images"]
var PROXIED_GCS_BUCKETS=["ka_thumbnails_cache"]
var FASTLY_URL_MAP=[["lh3.googleusercontent.com","cdn.kastatic.org/googleusercontent"]].concat(PROXIED_S3_BUCKETS.map(function(a){return[a+".s3.amazonaws.com","cdn.kastatic.org/"+a]}),PROXIED_S3_BUCKETS.map(function(a){return["s3.amazonaws.com/"+a,"cdn.kastatic.org/"+a]}),PROXIED_GCS_BUCKETS.map(function(a){return[a+".storage.googleapis.com","cdn.kastatic.org/"+a]}),PROXIED_GCS_BUCKETS.map(function(a){return["storage.googleapis.com/"+a,"cdn.kastatic.org/"+a]}))
var _getPageUrlBase=function a(){if(!window.location){return null}else{var t=window.location,e=t.protocol,r=t.hostname,o=t.port
var s=e+"//"+r
return o?s+":"+o:s}}
function staticUrl(a){var t=_ka2.default.staticUrlBase
if(!a||t==null){return a}if(t.indexOf("kastatic")!==-1){for(var e=FASTLY_URL_MAP,r=Array.isArray(e),o=0,e=r?e:e[Symbol.iterator]();;){var s
if(r){if(o>=e.length)break
s=e[o++]}else{o=e.next()
if(o.done)break
s=o.value}var n=s,i=n[0],c=n[1]
a=a.replace(i,c)}}if(_ka2.default.IS_DEV_SERVER||!t){return a}var l=a.match(URL_BASE_REGEX)
var u=t
var p=null
var f=a
if(l){u=l[0]
p=l[1]
u=u.slice(0,-1)
if(!p.match(KA_DOMAIN_REGEX)){return a}f=a.substring(u.length)}if((!p||u===_getPageUrlBase())&&!STATIC_URL_REGEX.test(f)){return a}return t+f}function cssUrl(a){return"url("+staticUrl(a)+")"}function absoluteUrlFromPath(a){var t=window.location,e=t.protocol,r=t.hostname,o=t.port
return e+"//"+r+(o?":"+o:"")+a}function contentUrl(a,t){var e="lang="+a+"&v="+document.location.origin
var r="/api/internal/static/content"+t+"?"+e
if(_ka2.default.IS_DEV_SERVER){return r}return"https://cdn.kastatic.org"+r}
});
KAdefine("javascript/shared-package/console.js", function(require, module, exports) {
var KAConsole={_oldMessages:[],_flushOldMessages:function o(){for(var s=0,l=this._oldMessages.length;s<l;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function o(){this._oldMessages.push(arguments)},_logOrPreserve:function o(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function o(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function o(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function o(){this.log=this._logToBuffer},init:function o(s){if(s){this.enable()}else{this.disable()}}}
KAConsole.init(false)
module.exports=KAConsole

});
KAdefine("javascript/shared-package/i18n.js", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _icu=require("icu")
var _icu2=babelHelpers.interopRequireDefault(_icu)
var _reactAddonsCreateFragment=require("react-addons-create-fragment")
var _reactAddonsCreateFragment2=babelHelpers.interopRequireDefault(_reactAddonsCreateFragment)
var _i18nFaketranslate=require("./i18n-faketranslate.js")
var _i18nFaketranslate2=babelHelpers.interopRequireDefault(_i18nFaketranslate)
var _ref=new _i18nFaketranslate2.default,fakeTranslate=_ref.translate
var likeEnglish=function e(n){return n!=1}
var allPluralForms={accents:likeEnglish,af:likeEnglish,ar:function e(n){return n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11&&n%100<=99?4:5},az:likeEnglish,bg:likeEnglish,bn:likeEnglish,boxes:likeEnglish,ca:likeEnglish,cs:function e(n){return n==1?0:n>=2&&n<=4?1:2},da:likeEnglish,de:likeEnglish,el:likeEnglish,empty:likeEnglish,en:likeEnglish,"en-pt":likeEnglish,es:likeEnglish,et:likeEnglish,fa:function e(n){return 0},"fa-af":function e(n){return 0},fi:likeEnglish,fil:function e(n){return n>1},fr:function e(n){return n>1},fv:function e(n){return n>1},gu:likeEnglish,he:likeEnglish,hi:likeEnglish,hr:function e(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},hu:likeEnglish,hy:likeEnglish,id:function e(n){return 0},it:likeEnglish,ja:function e(n){return 0},ka:likeEnglish,kn:likeEnglish,ko:function e(n){return 0},ky:function e(n){return 0},lol:likeEnglish,lt:function e(n){return n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2},lv:function e(n){return n==0?0:n%10==1&&n%100!=11?1:2},mn:likeEnglish,ms:function e(n){return 0},my:function e(n){return 0},nb:likeEnglish,nl:likeEnglish,nn:likeEnglish,or:likeEnglish,pl:function e(n){return n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},pt:likeEnglish,"pt-pt":likeEnglish,ro:function e(n){return n==1?0:n==0||n%100>0&&n%100<20?1:2},ru:function e(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},si:likeEnglish,"si-LK":likeEnglish,sk:function e(n){return n==1?0:n>=2&&n<=4?1:2},sr:function e(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},sv:likeEnglish,"sv-SE":likeEnglish,sw:likeEnglish,ta:likeEnglish,te:likeEnglish,th:function e(n){return 0},tr:function e(n){return 0},uk:function e(n){return n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2},ur:likeEnglish,uz:function e(n){return n>1},vi:function e(n){return 0},xh:likeEnglish,"zh-hans":function e(n){return 0},"zh-hant":function e(n){return 0},zu:likeEnglish}
var interpolationMarker=/%\(([\w_]+)\)s/g
var interpolateStringToFragment=function e(n,r){r=r||{}
var t=fakeTranslate(n).split(interpolationMarker)
var i={text_0:t[0]}
for(var a=1;a<t.length;a+=2){var l=t[a]
var s=r[l]
if(s===undefined){s="%("+l+")s"}var o=0
while(o+"_"+l in i){o++}i[o+"_"+l]=s
i["text_"+(a+1)]=t[a+1]}return(0,_reactAddonsCreateFragment2.default)(i)}
var internalTranslate=function e(n,r,t){if((typeof n==="undefined"?"undefined":babelHelpers.typeof(n))==="object"&&n.messages){n=n.messages[0]}var i=t(n)
if(r==null){return i}return i.replace(interpolationMarker,function(e,n){var t=r[n]
return t!=null?String(t):e})}
var _=function _(e,n){return internalTranslate(e,n,fakeTranslate)}
var $_=function $_(e,n){return interpolateStringToFragment(e,n)}
var ngettext=function e(n,r,t,i){var a=(typeof n==="undefined"?"undefined":babelHelpers.typeof(n))==="object"?n:{lang:"en",messages:[n,r]},l=a.messages,s=a.lang
var o=(typeof n==="undefined"?"undefined":babelHelpers.typeof(n))==="object"?r:t
var u=((typeof n==="undefined"?"undefined":babelHelpers.typeof(n))==="object"?t:i)||{}
var f=ngetpos(o,s)
var g=f<l.length?l[f]:""
u.num=u.num||o
return _(g,u)}
var ngetpos=function e(n,r){var t=r&&allPluralForms[r]||allPluralForms["en"]
var i=t(n)
return i===true?1:i?i:0}
var doNotTranslate=function e(n,r){return internalTranslate(n,r,function(e){return e})}
var doNotTranslateYet=doNotTranslate
var handlebarsUnderscore=function e(n){return n.fn(this)}
var handlebarsDoNotTranslate=function e(n){return n.fn(this)}
var handlebarsNgettext=function e(n,r,t,i){if(typeof r!=="string"){i=r
r="en"
t=0}this.num=this.num||n
return ngetpos(n)===t?i.fn(this):i.inverse(this)}
var localeToFixed=function e(n,r){var t=_icu2.default.getDecimalFormatSymbols().decimal_separator
var i=n.toFixed(r).replace(".",t)
if(i==="-0"){i="0"}return i}
var API={_:_,$_:$_,ngettext:ngettext,doNotTranslate:doNotTranslate,doNotTranslateYet:doNotTranslateYet,localeToFixed:localeToFixed,handlebarsUnderscore:handlebarsUnderscore,handlebarsNgettext:handlebarsNgettext,handlebarsDoNotTranslate:handlebarsDoNotTranslate}
window.i18n={_:API._,ngettext:API.ngettext,i18nDoNotTranslate:API.doNotTranslate,i18nDoNotTranslateYet:API.doNotTranslateYet}
window.$_=API.$_
module.exports=API

});
KAdefine("javascript/shared-package/i18n-accents.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var ACCENT_MAP={a:"áàăắặâấåäãąā",A:"ÁÀĂẮẶÂẤÅÄÃĄĀ",b:"ƀḃḅ",B:"ɃḂḄ",c:"ćĉčç",C:"ĆĈČÇ",d:"ďđḑ",D:"ĎĐḐ",e:"éèêềěëėęē",E:"ÉÈÊỀĚËĖĘĒ",f:"ḟ",F:"Ḟ",g:"ĝǧģ",G:"ĜǦĢ",h:"ĥȟħḥ",H:"ĤȞĦḤ",i:"íìîïįī",I:"ÎÏÍÌĮĪ",j:"ĵ",J:"Ĵ",k:"ķḱ",K:"ĶḰ",l:"ĺľłļḷ",L:"ĹĽŁĻḶ",m:"ḿṁṃm̃",M:"ḾṀṂM̃",n:"ńňñņŋ",N:"ŃŇÑŅŊ",o:"óòôöőõȯȱøōỏ",O:"ÓÒÔÖŐÕȮȰØŌỏ",p:"ṕṗᵽ",P:"ṔṖⱣ",q:"ʠ",Q:"Ɋ",r:"ŕřŗ",R:"ŔŘŖ",s:"śŝšș",S:"ŚŜŠŞ",t:"ťț",T:"ŤŢ",u:"úùŭûůüųűūư",U:"ÚÙŬÛŮÜŲŰŪƯ",v:"ṽṿ",V:"ṼṾ",w:"ẃẁŵẅ",W:"ẂẀŴẄ",y:"ý",Y:"Ý",x:"ẍẋ",X:"ẌẊ",z:"źžż",Z:"ŹŽŻ"}
var SubstitutionRegex=new RegExp("["+Object.keys(ACCENT_MAP).join("")+"]","g")
var Accents=function e(){var t=this
var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1
babelHelpers.classCallCheck(this,e)
this.translate=function(e){if(!e){return""}var r={}
var a=function e(t){var a=r[t]||0
r[t]=a+1
return a}
return e.replace(SubstitutionRegex,function(e){var r=ACCENT_MAP[e]
var n=a(e)
return r[n%r.length].repeat(t._scaleFactor)})}
if(r<1){throw new Error("Scaling factor must be 1 or greater.")}this._scaleFactor=r}
exports.default=Accents

});
KAdefine("javascript/shared-package/i18n-boxes.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var BoxChar=exports.BoxChar="□"
var AlphaNumRegex=/\w/g
var Boxes=function(){function e(){babelHelpers.classCallCheck(this,e)}e.prototype.translate=function e(r){if(!r){return""}if(r.startsWith("&")){return BoxChar}return r.replace(AlphaNumRegex,BoxChar)}
return e}()
exports.default=Boxes

});
KAdefine("javascript/shared-package/i18n-faketranslate.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.Translators=undefined
var _i18nAccents=require("./i18n-accents.js")
var _i18nAccents2=babelHelpers.interopRequireDefault(_i18nAccents)
var _i18nBoxes=require("./i18n-boxes.js")
var _i18nBoxes2=babelHelpers.interopRequireDefault(_i18nBoxes)
var _parseQueryString=require("./parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var _ka=require("./ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var Translators=exports.Translators={boxes:new _i18nBoxes2.default,accents:new _i18nAccents2.default(2)}
var FakeTranslate=function(){function e(){var r=this
babelHelpers.classCallCheck(this,e)
this.translate=function(e){return r._parseAndTranslate(e)}
var t={translate:function e(r){return r}}
if(_ka2.default.IS_DEV_SERVER){var a=(0,_parseQueryString2.default)()
var n=a["_lang"]||_ka2.default.kaLocale
var s=n&&Translators[n]
this._translator=s||t}}e.prototype._translateSegment=function e(r){var t=this
var a=/((http[s]?|ftp):\/\/)?([\w-]+\.)([\w-.]+)((\/[\w-]+)*)?\/?(#[\w-]*)?(\?[\w-]+(=[\w%"']+)?(&[\w-]+(=[\w%"']+)?)*)?/g
var n=/%\([\w]+\)s/g
var s=new RegExp(a.source+"|"+n.source,"g")
var i=function e(r){return t._translator.translate(r)}
var l=[]
var u=0
var o=s.exec(r)
while(o!==null){if(o.index!==u){l.push(i(r.substring(u,o.index)))}l.push(o[0])
u=o.index+o[0].length
o=s.exec(r)}if(u<r.length){l.push(i(r.substring(u)))}return l.join("")}
e.prototype._parseAndTranslate=function e(r){var t=this
if(!this._translator||r==null){return r}var a=function e(r){var t=document.createElement("template")
t.innerHTML=r
return t}
var n=a(r)
var s=function e(r){for(var a=r.childNodes,n=Array.isArray(a),s=0,a=n?a:a[Symbol.iterator]();;){var i
if(n){if(s>=a.length)break
i=a[s++]}else{s=a.next()
if(s.done)break
i=s.value}var l=i
if(l.nodeType===Node.TEXT_NODE){var u=t._translateSegment(l.textContent)
if(u!=null){var o=document.createTextNode(u)
r.replaceChild(o,l)}}else{switch(l.nodeName){case"CODE":case"PRE":break
default:e(l)
break}}}}
s(n.content)
var i=document.createElement("template")
var l=n.innerHTML.replace(/&(\w+);/g,function(e){i.innerHTML=e
return i.content.textContent})
return l}
return e}()
exports.default=FakeTranslate

});
KAdefine("javascript/shared-package/a11y.js", function(require, module, exports) {
var dom=require("./dom-utils.js")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var cookies=require("./cookies.js")
var parseQueryString=require("./parse-query-string.js")
module.exports={init:function e(){this.externalLink()
this.srOnlyInputFocus()
this.blurOnESC()
var i=parseQueryString()["tota11yk"]
if(i){cookies.createCookie("enable_tota11y",i)}if(KA.isDeveloper()&&cookies.readCookie("enable_tota11y")!=="0"&&!KA.isMobile){require.dynimport("../../third_party/javascript-khansrc/tota11y/build/tota11y.min.js")}},externalLink:function e(){var i="a[target=_blank]:not(.external-link)"
var s=i18n._("(Opens in a new window)")
dom.delegate("focus",i,function(e,i){i.classList.add("external-link")
if(i.title){i.title+=" "+s}i.insertAdjacentHTML("beforeend","<span class='sr-only'>"+s+"</span>")})},srOnlyInputFocus:function e(){dom.delegate("focus",".sr-only input, .sr-only a",function(e,i){var s=dom.closest(i,".sr-only")
if(s){s.classList.toggle("sr-only")
s.classList.toggle("sr-only-visible")}})
dom.delegate("blur",".sr-only-visible input, .sr-only-visible a",function(e,i){var s=dom.closest(i,".sr-only-visible")
if(s){s.classList.toggle("sr-only")
s.classList.toggle("sr-only-visible")}})},blurOnESC:function e(){dom.delegate("keyup","input.blur-on-esc",function(e){if(e.which===27){e.target.blur()}})}}

});
KAdefine("javascript/shared-package/unique-id.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var UniqueIdFactory=function(){function e(r){babelHelpers.classCallCheck(this,e)
r=typeof r==="string"?r:""
var t=r.toLowerCase()
if(!this._hasValidIdChars(t)){throw new Error("Invalid factory name: "+r)}this._uniqueFactoryName="uid-"+t+"-"+e._factoryUniquenessCounter++}e.prototype._hasValidIdChars=function e(r){if(typeof r==="string"){var t=r.replace(/[^\d\w-]/g,"-")
if(r===t){return true}}return false}
e.prototype.get=function e(r){var t=r.toLowerCase()
if(!this._hasValidIdChars(r)){throw new Error("Invalid identifier key: "+r)}return this._uniqueFactoryName+"-"+t}
return e}()
UniqueIdFactory._factoryUniquenessCounter=0
exports.default=UniqueIdFactory

});
KAdefine("javascript/shared-package/package-manager.js", function(require, module, exports) {
var _staticUrl2=require("../shared-package/static-url.js")
var _staticUrl3=babelHelpers.interopRequireDefault(_staticUrl2)
var _=require("../../third_party/javascript-khansrc/lodash/lodash.js")
var dom=require("./dom-utils.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js"),khanFetch=_require.khanFetch
var _staticUrl=function e(t){return(0,_staticUrl3.default)(t).replace(/^https?:/,window.location.protocol)}
var PACKAGE_STATE_DEFINED=1
var PACKAGE_STATE_LOADING=2
var PACKAGE_STATE_LOADED=3
var PACKAGE_STATE_EXECUTED=4
var PACKAGE_LEVEL_NOT_SET=-2
var PACKAGE_LEVEL_CALCULATING=-1
var _packagesByName={}
var _Package=function(){function e(t,a,n){babelHelpers.classCallCheck(this,e)
this._name=t
this._url=_staticUrl(a)
this._dependencyNames=n
this._content=null
this._state=PACKAGE_STATE_DEFINED
this._fetchingPromise=null
this._level=PACKAGE_LEVEL_NOT_SET}e.prototype._getDependencies=function t(){return this._dependencyNames.map(function(t){return e.get(t)})}
e.prototype._getTransitiveDependencies=function e(){var t={}
var a=[this]
while(a.length>0){var n=a.shift()
if(t.hasOwnProperty(n._name)){continue}t[n._name]=n
n._getDependencies().forEach(function(e){return a.push(e)})}return Object.values(t)}
e.prototype._getLevel=function e(){if(this._level===PACKAGE_LEVEL_NOT_SET){this._level=PACKAGE_LEVEL_CALCULATING
var t=this._getDependencies()
if(t.length===0){this._level=0}else{var a=t.map(function(e){return e._getLevel()}).filter(function(e){return e!==PACKAGE_LEVEL_CALCULATING})
this._level=Math.max.apply(Math,a)+1}}return this._level}
e.prototype.markExecuted=function e(){this._state=PACKAGE_STATE_EXECUTED
this._fetchingPromise=Promise.resolve()}
e.prototype._fetch=function e(){var t=this
if(this._state>=PACKAGE_STATE_LOADING){return this._fetchingPromise}this._fetchingPromise=new Promise(function(e){dom.ready().then(function(){khanFetch(t._url).then(function(e){return e.text()}).then(function(a){t._content=a
t._state=PACKAGE_STATE_LOADED
e()})})})
this._state=PACKAGE_STATE_LOADING
return this._fetchingPromise}
e.prototype.isExecuted=function e(){return this._state===PACKAGE_STATE_EXECUTED}
e.prototype._execute=function e(){if(this.isExecuted()){return}if(this._content===null){var t="_Package "+name+" cannot be executed without content."
console.error(t)
throw new Error(t)}var a=this._name.slice(this._name.lastIndexOf(".")+1)
if(a==="js"){this._executeJs()}else if(a==="css"){this._injectCss()}else{throw new Error("Unknown package extension "+a)}this._state=PACKAGE_STATE_EXECUTED}
e.prototype.fetchAndExecute=function e(){var t=this._getTransitiveDependencies().sort(function(e,t){return e._getLevel()-t._getLevel()})
return Promise.all(t.map(function(e){return e._fetch()})).then(function(){t.forEach(function(e){return e._execute()})})}
e.prototype._executeJs=function e(){var t=this._content
var a=this._url
dom.globalEval(t+"\n//# sourceURL="+a+"\n")}
e.prototype._injectCss=function e(){var t=document.getElementsByTagName("head")[0]||document.documentElement
var a=document.createElement("style")
a.setAttribute("data-href",this._url)
a.setAttribute("data-package-name",this._name)
if(a.styleSheet){a.styleSheet.cssText=this._content}else{var n=document.createTextNode(this._content)
a.appendChild(n)}t.appendChild(a)}
e.get=function e(t){var a=_packagesByName[t]
if(!a){throw new Error("Could not find package with name "+t)}return a}
e.define=function t(a,n,r){if(!e.isDefined(a)){_packagesByName[a]=new e(a,n,r)}}
e.isDefined=function e(t){return _packagesByName.hasOwnProperty(t)}
return e}()
window.PackageManager=window.PackageManager||{}
PackageManager._manifestsRegistered=new Promise(function(e){PackageManager._resolveManifestsRegistered=e})
PackageManager.init=function(){if(PackageManager._q){var e;(e=PackageManager).markExecuted.apply(e,PackageManager._q)
delete PackageManager._q}if(KA.IS_DEV_SERVER){dom.ready().then(function(){var e=[]
var t=[]
for(var a=Object.entries(_packagesByName),n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var i
if(n){if(r>=a.length)break
i=a[r++]}else{r=a.next()
if(r.done)break
i=r.value}var c=i,s=c[0],o=c[1]
if(o.isExecuted()){var u=s.split(".").pop()
if(u==="js"){e.push(s)}else{t.push(s)}}}console.info("[PackageManager] %d initial JS package(s): %s",e.length,e.join(", "))
console.info("[PackageManager] %d initial CSS package(s): %s",t.length,t.join(", "))})}}
var logDynamicRequire=function(){var e=[]
var t=_.debounce(function(){console.info("[PackageManager] dynamically loading %d package(s): %s",e.length,e.join(", "))
e=[]},100)
return function(a){e.push(a)
t()}}()
PackageManager.require=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}return Promise.all(t.map(function(e){if(KA.IS_DEV_SERVER){logDynamicRequire(e)}if(_Package.isDefined(e)){return _Package.get(e).fetchAndExecute()}else{return PackageManager._manifestsRegistered.then(function(){return _Package.get(e).fetchAndExecute()})}}))}
var toBeMarkedExecuted={}
PackageManager.markExecuted=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++){t[a]=arguments[a]}t.forEach(function(e){if(_Package.isDefined(e)){_Package.get(e).markExecuted()}else{toBeMarkedExecuted[e]=true}})}
PackageManager.registerDynamic=function(e){var t=e.name
var a=e.url
var n=e.dependencies||[]
_Package.define(t,a,n)
if(toBeMarkedExecuted[t]){_Package.get(t).markExecuted()
delete toBeMarkedExecuted[t]}}
PackageManager.registerManifests=function(e){(e["javascript"]||[]).forEach(PackageManager.registerDynamic);(e["stylesheets"]||[]).forEach(PackageManager.registerDynamic)
PackageManager._resolveManifestsRegistered()}
module.exports=PackageManager

});
KAdefine("third_party/javascript-khansrc/classnames/index.js", function(require, module, exports) {
function classNames(){var e=arguments
var o=[]
for(var r=0;r<e.length;r++){var f=e[r]
if(!f){continue}if("string"===typeof f||"number"===typeof f){o.push(f)}else if("object"===typeof f){for(var n in f){if(f.hasOwnProperty(n)&&f[n]){o.push(n)}}}}return o.join(" ")}if(typeof module!=="undefined"&&module.exports){module.exports=classNames}
});
KAdefine("third_party/javascript-khansrc/aphrodite/dist/aphrodite.js", function(require, module, exports) {
module.exports=function(e){var r={}
function t(n){if(r[n])return r[n].exports
var u=r[n]={exports:{},id:n,loaded:false}
e[n].call(u.exports,u,u.exports,t)
u.loaded=true
return u.exports}t.m=e
t.c=r
t.p=""
return t(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
function n(e){return e&&e.__esModule?e:{default:e}}var u=t(2)
var a=t(19)
var i=n(a)
var o=true
r["default"]=(0,i["default"])(o,u.defaultSelectorHandlers)
e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var n=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(e){u=true
a=e}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
function u(e){return e&&e.__esModule?e:{default:e}}var a=t(3)
var i=u(a)
var o=t(18)
var l=[function e(r,t,n){if(r[0]!==":"){return null}return n(t+r)},function e(r,t,n){if(r[0]!=="@"){return null}var u=n(t)
return r+"{"+u+"}"}]
r.defaultSelectorHandlers=l
var f=function e(r,t){var n=arguments.length<=2||arguments[2]===undefined?[]:arguments[2]
var u=arguments.length<=3||arguments[3]===undefined?{}:arguments[3]
var a=arguments.length<=4||arguments[4]===undefined?true:arguments[4]
var i=t.reduce(o.recursiveMerge)
var l={}
var f=""
Object.keys(i).forEach(function(t){var o=n.some(function(o){var l=o(t,r,function(r){return e(r,[i[t]],n,u,a)})
if(l!=null){f+=l
return true}})
if(!o){l[t]=i[t]}})
return c(r,l,u,a,n)+f}
r.generateCSS=f
var s=function e(r,t,n){var u={}
Object.keys(r).forEach(function(e){if(t&&t.hasOwnProperty(e)){u[e]=t[e](r[e],n)}else{u[e]=r[e]}})
return u}
var c=function e(r,t,u,a,l){var f=s(t,u,l)
var c=(0,i["default"])(f)
var d=(0,o.flatten)((0,o.objectToPairs)(c).map(function(e){var r=n(e,2)
var t=r[0]
var u=r[1]
if(Array.isArray(u)){var a=function(){var e=[]
var r=[]
u.forEach(function(t){if(t.indexOf("-")===0){e.push(t)}else{r.push(t)}})
e.sort()
r.sort()
return{v:e.concat(r).map(function(e){return[t,e]})}}()
if(typeof a==="object")return a.v}return[[t,u]]}))
var v=d.map(function(e){var r=n(e,2)
var t=r[0]
var u=r[1]
var i=(0,o.stringifyValue)(t,u)
var l=(0,o.kebabifyStyleName)(t)+":"+i+";"
return a===false?l:(0,o.importantify)(l)}).join("")
if(v){return r+"{"+v+"}"}else{return""}}
r.generateCSSRuleset=c},function(e,r,t){e.exports=t(4)},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=w
var n=t(5)
var u=k(n)
var a=t(6)
var i=k(a)
var o=t(7)
var l=k(o)
var f=t(10)
var s=k(f)
var c=t(11)
var d=k(c)
var v=t(12)
var m=k(v)
var p=t(13)
var y=k(p)
var h=t(14)
var b=k(h)
var g=t(16)
var x=k(g)
var O=t(17)
var S=k(O)
function k(e){return e&&e.__esModule?e:{default:e}}var j=[l.default,s.default,m.default,y.default,b.default,x.default,S.default,d.default]
function w(e){Object.keys(e).forEach(function(r){var t=e[r]
if(t instanceof Object&&!Array.isArray(t)){e[r]=w(t)}else{Object.keys(u.default).forEach(function(n){var a=u.default[n]
if(a[r]){e[n+(0,i.default)(r)]=t}})}})
Object.keys(e).forEach(function(r){[].concat(e[r]).forEach(function(t,n){j.forEach(function(n){return C(e,n(r,t))})})})
return e}function C(e){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1]
Object.keys(r).forEach(function(t){var n=e[t]
if(Array.isArray(n)){[].concat(r[t]).forEach(function(r){var u=n.indexOf(r)
if(u>-1){e[t].splice(u,1)}e[t].push(r)})}else{e[t]=r[t]}})}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default={Webkit:{transform:true,transformOrigin:true,transformOriginX:true,transformOriginY:true,backfaceVisibility:true,perspective:true,perspectiveOrigin:true,transformStyle:true,transformOriginZ:true,animation:true,animationDelay:true,animationDirection:true,animationFillMode:true,animationDuration:true,animationIterationCount:true,animationName:true,animationPlayState:true,animationTimingFunction:true,appearance:true,userSelect:true,fontKerning:true,textEmphasisPosition:true,textEmphasis:true,textEmphasisStyle:true,textEmphasisColor:true,boxDecorationBreak:true,clipPath:true,maskImage:true,maskMode:true,maskRepeat:true,maskPosition:true,maskClip:true,maskOrigin:true,maskSize:true,maskComposite:true,mask:true,maskBorderSource:true,maskBorderMode:true,maskBorderSlice:true,maskBorderWidth:true,maskBorderOutset:true,maskBorderRepeat:true,maskBorder:true,maskType:true,textDecorationStyle:true,textDecorationSkip:true,textDecorationLine:true,textDecorationColor:true,filter:true,fontFeatureSettings:true,breakAfter:true,breakBefore:true,breakInside:true,columnCount:true,columnFill:true,columnGap:true,columnRule:true,columnRuleColor:true,columnRuleStyle:true,columnRuleWidth:true,columns:true,columnSpan:true,columnWidth:true,flex:true,flexBasis:true,flexDirection:true,flexGrow:true,flexFlow:true,flexShrink:true,flexWrap:true,alignContent:true,alignItems:true,alignSelf:true,justifyContent:true,order:true,transition:true,transitionDelay:true,transitionDuration:true,transitionProperty:true,transitionTimingFunction:true,backdropFilter:true,scrollSnapType:true,scrollSnapPointsX:true,scrollSnapPointsY:true,scrollSnapDestination:true,scrollSnapCoordinate:true,shapeImageThreshold:true,shapeImageMargin:true,shapeImageOutside:true,hyphens:true,flowInto:true,flowFrom:true,regionFragment:true,textSizeAdjust:true,borderImage:true,borderImageOutset:true,borderImageRepeat:true,borderImageSlice:true,borderImageSource:true,borderImageWidth:true,tabSize:true,objectFit:true,objectPosition:true},Moz:{appearance:true,userSelect:true,boxSizing:true,textAlignLast:true,textDecorationStyle:true,textDecorationSkip:true,textDecorationLine:true,textDecorationColor:true,tabSize:true,hyphens:true,fontFeatureSettings:true,breakAfter:true,breakBefore:true,breakInside:true,columnCount:true,columnFill:true,columnGap:true,columnRule:true,columnRuleColor:true,columnRuleStyle:true,columnRuleWidth:true,columns:true,columnSpan:true,columnWidth:true},ms:{flex:true,flexBasis:false,flexDirection:true,flexGrow:false,flexFlow:true,flexShrink:false,flexWrap:true,alignContent:false,alignItems:false,alignSelf:false,justifyContent:false,order:false,transform:true,transformOrigin:true,transformOriginX:true,transformOriginY:true,userSelect:true,wrapFlow:true,wrapThrough:true,wrapMargin:true,scrollSnapType:true,scrollSnapPointsX:true,scrollSnapPointsY:true,scrollSnapDestination:true,scrollSnapCoordinate:true,touchAction:true,hyphens:true,flowInto:true,flowFrom:true,breakBefore:true,breakAfter:true,breakInside:true,regionFragment:true,gridTemplateColumns:true,gridTemplateRows:true,gridTemplateAreas:true,gridTemplate:true,gridAutoColumns:true,gridAutoRows:true,gridAutoFlow:true,grid:true,gridRowStart:true,gridColumnStart:true,gridRowEnd:true,gridRow:true,gridColumn:true,gridColumnEnd:true,gridColumnGap:true,gridRowGap:true,gridArea:true,gridGap:true,textSizeAdjust:true}}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}
e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=l
var n=t(8)
var u=o(n)
var a=t(9)
var i=o(a)
function o(e){return e&&e.__esModule?e:{default:e}}function l(e,r){if(typeof r==="string"&&!(0,i.default)(r)&&r.indexOf("calc(")>-1){return(0,u.default)(e,r,function(e,r){return r.replace(/calc\(/g,e+"calc(")})}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
function t(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}r.default=function(e,r){var n=arguments.length<=2||arguments[2]===undefined?function(e,r){return e+r}:arguments[2]
return t({},e,["-webkit-","-moz-",""].map(function(e){return n(e,r)}))}
e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=function(e){if(Array.isArray(e))e=e.join(",")
return e.match(/-webkit-|-moz-|-ms-/)!==null}
e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=o
var n=t(8)
var u=a(n)
function a(e){return e&&e.__esModule?e:{default:e}}var i={"zoom-in":true,"zoom-out":true,grab:true,grabbing:true}
function o(e,r){if(e==="cursor"&&i[r]){return(0,u.default)(e,r)}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=n
var t={flex:true,"inline-flex":true}
function n(e,r){if(e==="display"&&t[r]){return{display:["-webkit-box","-moz-box","-ms-"+r+"box","-webkit-"+r,r]}}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=l
var n=t(8)
var u=a(n)
function a(e){return e&&e.__esModule?e:{default:e}}var i={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true}
var o={"min-content":true,"max-content":true,"fill-available":true,"fit-content":true,"contain-floats":true}
function l(e,r){if(i[e]&&o[r]){return(0,u.default)(e,r)}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=f
var n=t(8)
var u=o(n)
var a=t(9)
var i=o(a)
function o(e){return e&&e.__esModule?e:{default:e}}var l=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/
function f(e,r){if(typeof r==="string"&&!(0,i.default)(r)&&r.match(l)!==null){return(0,u.default)(e,r)}}e.exports=r["default"]},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=m
var n=t(15)
var u=c(n)
var a=t(6)
var i=c(a)
var o=t(9)
var l=c(o)
var f=t(5)
var s=c(f)
function c(e){return e&&e.__esModule?e:{default:e}}function d(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var v={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true}
function m(e,r){if(typeof r==="string"&&v[e]){var t
var n=p(r)
var u=n.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return e.match(/-moz-|-ms-/)===null}).join(",")
if(e.indexOf("Webkit")>-1){return d({},e,u)}return t={},d(t,"Webkit"+(0,i.default)(e),u),d(t,e,n),t}}function p(e){if((0,l.default)(e)){return e}var r=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
r.forEach(function(e,t){r[t]=Object.keys(s.default).reduce(function(r,t){var n="-"+t.toLowerCase()+"-"
Object.keys(s.default[t]).forEach(function(t){var a=(0,u.default)(t)
if(e.indexOf(a)>-1&&a!=="order"){r=e.replace(a,n+a)+","+r}})
return r},e)})
return r.join(",")}e.exports=r["default"]},function(e,r){"use strict"
var t=/[A-Z]/g
var n=/^ms-/
function u(e){return e.replace(t,"-$&").toLowerCase().replace(n,"-ms-")}e.exports=u},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=a
function t(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var n={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end"}
var u={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msPreferredSize"}
function a(e,r){if(u[e]){return t({},u[e],n[r]||r)}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
r.default=a
function t(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var n={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"}
var u={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines"}
function a(e,r){if(e==="flexDirection"){return{WebkitBoxOrient:r.indexOf("column")>-1?"vertical":"horizontal",WebkitBoxDirection:r.indexOf("reverse")>-1?"reverse":"normal"}}if(u[e]){return t({},u[e],n[r]||r)}}e.exports=r["default"]},function(e,r){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
var t=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(e){u=true
a=e}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
var u=function e(r){return Object.keys(r).map(function(e){return[e,r[e]]})}
r.objectToPairs=u
var a=function e(r){var n={}
r.forEach(function(e){var r=t(e,2)
var u=r[0]
var a=r[1]
n[u]=a})
return n}
var i=function e(r,t){return a(u(r).map(t))}
r.mapObj=i
var o=function e(r){return r.reduce(function(e,r){return e.concat(r)},[])}
r.flatten=o
var l=function e(r){return r.reduce(function(r,t){return r.concat(Array.isArray(t)?e(t):t)},[])}
r.flattenDeep=l
var f=/([A-Z])/g
var s=/^ms-/
var c=function e(r){return r.replace(f,"-$1").toLowerCase()}
var d=function e(r){return c(r).replace(s,"-ms-")}
r.kebabifyStyleName=d
var v=function e(r,t){if(typeof r!=="object"){return t}var u=n({},r)
Object.keys(t).forEach(function(n){if(u.hasOwnProperty(n)){u[n]=e(r[n],t[n])}else{u[n]=t[n]}})
return u}
r.recursiveMerge=v
var m={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true}
function p(e,r){return e+r.charAt(0).toUpperCase()+r.substring(1)}var y=["Webkit","ms","Moz","O"]
Object.keys(m).forEach(function(e){y.forEach(function(r){m[p(r,e)]=m[e]})})
var h=function e(r,t){if(typeof t==="number"){if(m[r]){return""+t}else{return t+"px"}}else{return t}}
r.stringifyValue=h
function b(e){var r=e.length
var t=r
var n=0
var u=undefined
while(r>=4){u=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24
u=(u&65535)*1540483477+(((u>>>16)*1540483477&65535)<<16)
u^=u>>>24
u=(u&65535)*1540483477+(((u>>>16)*1540483477&65535)<<16)
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)^u
r-=4;++n}switch(r){case 3:t^=(e.charCodeAt(n+2)&255)<<16
case 2:t^=(e.charCodeAt(n+1)&255)<<8
case 1:t^=e.charCodeAt(n)&255
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)}t^=t>>>13
t=(t&65535)*1540483477+(((t>>>16)*1540483477&65535)<<16)
t^=t>>>15
return(t>>>0).toString(36)}var g=function e(r){return b(JSON.stringify(r))}
r.hashObject=g
var x=/^([^:]+:.*?)( !important)?;$/
var O=function e(r){return r.replace(x,function(_,e){return e+" !important;"})}
r.importantify=O},function(e,r,t){"use strict"
var n=function(){function e(e,r){var t=[]
var n=true
var u=false
var a=undefined
try{for(var i=e[Symbol.iterator](),o;!(n=(o=i.next()).done);n=true){t.push(o.value)
if(r&&t.length===r)break}}catch(e){u=true
a=e}finally{try{if(!n&&i["return"])i["return"]()}finally{if(u)throw a}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}()
var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e}
var a=t(18)
var i=t(20)
var o={create:function e(r){return(0,a.mapObj)(r,function(e){var r=n(e,2)
var t=r[0]
var u=r[1]
return[t,{_name:t+"_"+(0,a.hashObject)(u),_definition:u}]})},rehydrate:function e(){var r=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];(0,i.addRenderedClassNames)(r)}}
var l={renderStatic:function e(r){(0,i.reset)();(0,i.startBuffering)()
var t=r()
var n=(0,i.flushToString)()
return{html:t,css:{content:n,renderedClassNames:(0,i.getRenderedClassNames)()}}}}
var f={suppressStyleInjection:function e(){(0,i.reset)();(0,i.startBuffering)()},clearBufferAndResumeStyleInjection:function e(){(0,i.reset)()}}
var s=function e(r,t){return{StyleSheet:u({},o,{extend:function n(u){var a=u.map(function(e){return e.selectorHandler}).filter(function(e){return e})
return e(r,t.concat(a))}}),StyleSheetServer:l,StyleSheetTestUtils:f,css:function e(){for(var n=arguments.length,u=Array(n),a=0;a<n;a++){u[a]=arguments[a]}return(0,i.injectAndGetClassName)(r,u,t)}}}
e.exports=s},function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:true})
function n(e){return e&&e.__esModule?e:{default:e}}var u=t(21)
var a=n(u)
var i=t(2)
var o=t(18)
var l=null
var f=function e(r){if(l==null){l=document.querySelector("style[data-aphrodite]")
if(l==null){var t=document.head||document.getElementsByTagName("head")[0]
l=document.createElement("style")
l.type="text/css"
l.setAttribute("data-aphrodite","")
t.appendChild(l)}}if(l.styleSheet){l.styleSheet.cssText+=r}else{l.appendChild(document.createTextNode(r))}}
var s={fontFamily:function e(r){if(Array.isArray(r)){return r.map(e).join(",")}else if(typeof r==="object"){p(r.src,"@font-face",[r],false)
return'"'+r.fontFamily+'"'}else{return r}},animationName:function e(r,t){if(Array.isArray(r)){return r.map(function(r){return e(r,t)}).join(",")}else if(typeof r==="object"){var n="keyframe_"+(0,o.hashObject)(r)
var u="@keyframes "+n+"{"
Object.keys(r).forEach(function(e){u+=(0,i.generateCSS)(e,[r[e]],t,s,false)})
u+="}"
m(n,u)
return n}else{return r}}}
var c={}
var d=""
var v=false
var m=function e(r,t){if(!c[r]){if(!v){if(typeof document==="undefined"){throw new Error("Cannot automatically buffer without a document")}v=true;(0,a["default"])(g)}d+=t
c[r]=true}}
var p=function e(r,t,n,u,a){if(!c[r]){var o=(0,i.generateCSS)(t,n,a,s,u)
m(r,o)}}
r.injectStyleOnce=p
var y=function e(){d=""
c={}
v=false
l=null}
r.reset=y
var h=function e(){if(v){throw new Error("Cannot buffer while already buffering")}v=true}
r.startBuffering=h
var b=function e(){v=false
var r=d
d=""
return r}
r.flushToString=b
var g=function e(){var r=b()
if(r.length>0){f(r)}}
r.flushToStyleTag=g
var x=function e(){return Object.keys(c)}
r.getRenderedClassNames=x
var O=function e(r){r.forEach(function(e){c[e]=true})}
r.addRenderedClassNames=O
var S=function e(r,t,n){t=(0,o.flattenDeep)(t)
var u=t.filter(function(e){return e})
if(u.length===0){return""}var a=u.map(function(e){return e._name}).join("-o_O-")
p(a,"."+a,u.map(function(e){return e._definition}),r,n)
return a}
r.injectAndGetClassName=S},function(e,r,t){"use strict"
var n=t(22)
var u=[]
var a=[]
var i=n.makeRequestCallFromTimer(o)
function o(){if(a.length){throw a.shift()}}e.exports=l
function l(e){var r
if(u.length){r=u.pop()}else{r=new f}r.task=e
n(r)}function f(){this.task=null}f.prototype.call=function(){try{this.task.call()}catch(e){if(l.onerror){l.onerror(e)}else{a.push(e)
i()}}finally{this.task=null
u[u.length]=this}}},function(e,r){(function(r){"use strict"
e.exports=t
function t(e){if(!n.length){a()
u=true}n[n.length]=e}var n=[]
var u=false
var a
var i=0
var o=1024
function l(){while(i<n.length){var e=i
i=i+1
n[e].call()
if(i>o){for(var r=0,t=n.length-i;r<t;r++){n[r]=n[r+i]}n.length-=i
i=0}}n.length=0
i=0
u=false}var f=r.MutationObserver||r.WebKitMutationObserver
if(typeof f==="function"){a=s(l)}else{a=c(l)}t.requestFlush=a
function s(e){var r=1
var t=new f(e)
var n=document.createTextNode("")
t.observe(n,{characterData:true})
return function e(){r=-r
n.data=r}}function c(e){return function r(){var t=setTimeout(u,0)
var n=setInterval(u,50)
function u(){clearTimeout(t)
clearInterval(n)
e()}}}t.makeRequestCallFromTimer=c}).call(r,function(){return this}())}])

});
KAdefine("javascript/node_modules/aphrodite/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/aphrodite/dist/aphrodite.js")

});
KAdefine("javascript/shared-package/local-store.js", function(require, module, exports) {
var LocalStore={version:4,keyPrefix:"ka",cacheKey:function e(o){if(!o){throw new Error("Attempting to use LocalStore without a key")}return[LocalStore.keyPrefix,LocalStore.version,o].join(":")},get:function e(o){if(!LocalStore.isEnabled()){return undefined}try{var r=window.localStorage[LocalStore.cacheKey(o)]
if(r){return JSON.parse(r)}}catch(e){}return undefined},set:function e(o,r){if(!LocalStore.isEnabled()){return null}var t=JSON.stringify(r)
var a=LocalStore.cacheKey(o)
try{window.localStorage[a]=t}catch(e){LocalStore.clearAll()}},del:function e(o){if(!LocalStore.isEnabled()){return null}var r=LocalStore.cacheKey(o)
if(r in window.localStorage){delete window.localStorage[r]}},isEnabled:function e(){var o=String(+new Date)
try{window.sessionStorage[o]=o
var r=window.sessionStorage[o]===o
window.sessionStorage.removeItem(o)
return r}catch(e){return false}},clearAll:function e(){if(!LocalStore.isEnabled()){return null}try{var o=0
while(o<localStorage.length){var r=localStorage.key(o)
if(r.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[r]}else{o++}}}catch(e){}}}
window.LocalStore=LocalStore
module.exports=LocalStore

});
KAdefine("javascript/shared-package/dom-utils.js", function(require, module, exports) {
var globalEval=function e(t){window["eval"].call(window,t)}
if(typeof execScript!=="undefined"){globalEval=function e(t){return execScript(t)}}var domReadyPromise=void 0
module.exports={ready:function e(t){if(!domReadyPromise){domReadyPromise=new Promise(function(e,t){if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){return e()}document.addEventListener("DOMContentLoaded",e,false)
window.addEventListener("load",e)})}return domReadyPromise},globalEval:globalEval,matches:function e(t,o){var e=t.matches||t.matchesSelector
if(e){return e.call(t,o)}var n=document.querySelectorAll(o)
return Array.prototype.indexOf.call(n,t)>=0},closest:function e(t,o){if(t.closest){return t.closest(o)}var n=t
while(n){if(this.matches(n,o)){return n}n=n.parentNode}return null},delegate:function e(t,o,n){var r=this
document.addEventListener(t,function(e){var t=r.closest(e.target,o)
if(t){n(e,t)}},true)}}

});
KAdefine("javascript/shared-package/cookies.js", function(require, module, exports) {
var assertNotSSR=function e(o){if(window.KA&&window.KA.REACT_SSR){var r="Do not "+o+" from cookies.js during the "+"initial render; this does not work with cached server-side "+"rendering. Use <CookiesProvider /> instead."
throw new Error(r)}}
var createCookie=function e(o,r,i,t){assertNotSSR("create cookie-field "+o)
var a=void 0
if(i){var n=new Date
n.setTime(n.getTime()+i*24*60*60*1e3)
a="; expires="+n.toGMTString()}else{a=""}if(t){t="; domain="+t}else{t=""}document.cookie=o+"="+r+a+t+"; path=/"}
var readCookie=function e(o){assertNotSSR("read cookie-field "+o)
var r=o+"="
var i=document.cookie.split(";")
for(var t=0;t<i.length;t++){var a=i[t]
while(a.charAt(0)===" "){a=a.substring(1,a.length)}if(a.indexOf(r)===0){return a.substring(r.length,a.length)}}return null}
var eraseCookie=function e(o,r){assertNotSSR("erase cookie-field "+o)
createCookie(o,"",-1,r)}
var areCookiesEnabled=function e(){assertNotSSR("check if cookies are enabled")
createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
module.exports={createCookie:createCookie,readCookie:readCookie,eraseCookie:eraseCookie,areCookiesEnabled:areCookiesEnabled}

});
KAdefine("third_party/javascript-khansrc/modernizr/index.js", function(require, module, exports) {
(function(e,n){typeof exports==="object"&&typeof module!=="undefined"?module.exports=n():typeof define==="function"&&define.amd?define(n):e.modernizr=n()})(this,function(){"use strict"
var e={touchevents:function(){return"ontouchstart"in window||typeof DocumentTouch!=="undefined"&&document instanceof DocumentTouch}()}
var n=e
return n})

});
KAdefine("javascript/node_modules/modernizr/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/modernizr/index.js")

});
KAdefine("javascript/shared-package/urgent-notification.js", function(require, module, exports) {
module.exports={renderUrgent:function t(n,e){Promise.all([require.dynimport("../notifications-package/notifications.js").then(function(t){return t.default}),require.dynimport("../../stylesheets/notifications-package/notifications.less")]).then(function(t){var i=t[0]
i.renderUrgent(n,e)})}}

});
KAdefine("javascript/shared-package/api-action-results.js", function(require, module, exports) {
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var urgentNotification=require("./urgent-notification.js")
var ZeroRating=require("./zero-rating.js")
var APIActionResults={hooks:[],addLangParam:function e(t,r,i){if(t.indexOf("/api/")>-1||t.indexOf("/profile/graph")>-1||t.indexOf("/goals/new")>-1){var n=!/[?&]lang=/.test(t)&&"lang="+r
var o=i&&!/[?&]preview=/.test(t)&&"preview=1"
if(n||o){var a=[n,o].filter(function(e){return!!e}).join("&")
return t+(/\?/.test(t)?"&":"?")+a}}return t},addCacheParam:function e(t){if(t.indexOf("/api/")>-1){if(!/[\?&]v=/.test(t)){var r=KA.staticVersion+"_"+ +new Date
var i=t.replace(/([?&])_=[^&]*/,"$1_="+r)
return i+(i===t?(/\?/.test(t)?"&":"?")+"_="+r:"")}}return t},addXsrfKey:function e(t,r){var i=t.indexOf(document.location.origin)===0
var n=t[0]==="/"&&t[1]!=="/"
if((i||n)&&t.indexOf("/api/")>-1){var o=Cookies.readCookie("fkey")
if(o){r("X-KA-FKey",o)
return true}else{APIActionResults._apiVersionMismatch()
return false}}return true},checkZeroRating:function e(t){if(KA.isZeroRated){var r=document.createElement("a")
r.href=t
return ZeroRating.hostIsZeroRated(r.hostname)}else{return true}},checkApiVersionMismatch:function e(t){if(t("X-KA-API-Version-Mismatch")){APIActionResults._apiVersionMismatch()}},checkApiResponse:function checkApiResponse(responseBody,getHeaderCallback){if(getHeaderCallback("X-KA-API-Response")&&responseBody){if(responseBody.indexOf("action_results")===-1&&responseBody.indexOf("actionResults")===-1){return}var result=void 0
try{eval("result = "+responseBody)}catch(e){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}},toCamelCase:function e(t){return t.replace(/_([a-z])/g,function(e,t){return t.toUpperCase()})},respondToAction:function e(t){APIActionResults.hooks.forEach(function(e,r){if(typeof t[e.prop]!=="undefined"){e.fxn(t[e.prop])}})},_apiVersionMismatch:function e(){urgentNotification.renderUrgent([{class_:["ApiVersionMismatchNotification"]}])},register:function e(t,r){var i,n=this
var o=[{prop:t,fxn:r},{prop:APIActionResults.toCamelCase(t),fxn:r}];(i=this.hooks).push.apply(i,o)
return function(){for(var e=o,t=Array.isArray(e),r=0,e=t?e:e[Symbol.iterator]();;){var i
if(t){if(r>=e.length)break
i=e[r++]}else{r=e.next()
if(r.done)break
i=r.value}var a=i
var s=n.hooks.indexOf(a)
if(s!==-1){n.hooks.splice(s,1)}}}},addDefaultHooks:function e(){if(window.ScratchpadUI&&ScratchpadUI.trusted&&window!==top){return}APIActionResults.register("notifications_added",function(e){var t=e.urgent,r=e.toast,i=e.continueUrl
if(t&&t.length>0){urgentNotification.renderUrgent([t[0]],i)}if(r&&r.length>0){require.dynimport("../notifications-package/toast-notification.jsx").then(function(e){e.renderToast(r[0])})}})
APIActionResults.register("user_profile",function(e){var t={}
for(var r in e){if(e.hasOwnProperty(r)){t[APIActionResults.toCamelCase(r)]=e[r]}}e=t
KA.setUserProfile(e)})}}
module.exports=APIActionResults

});
KAdefine("javascript/shared-package/facebookutil.js", function(require, module, exports) {
var icu=require("icu")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var LocalStore=require("./local-store.js")
var resolveReady=null
var _isConnected=false
var FacebookUtil={fbLoadStarted_:false,isUsingFbLoginCached_:undefined,facebookID:undefined,_fbReadyPromise:new Promise(function(e){resolveReady=e}),init:function e(){if(!KA.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({version:"v2.7",appId:KA.FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true,kidDirectedSite:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{Cookies.eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=document.getElementById("facepile-holder")
if(!o){return}var i=22
if(o.offsetHeight<=i*1.5){var t=o.getElementsByTagName("iframe")[0]
if(t){t.tabIndex="-1"}return}o.style.opacity=1})
if(resolveReady){resolveReady()}_isConnected=true
FacebookUtil._fbReadyPromise=Promise.resolve()}
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},logout:function e(o){var i=window.location.hostname
if(i.indexOf("local.")===0){i=i.substring(6)}var t=FacebookUtil.isUsingFbLogin()
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID,"."+i)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID,"."+i)
Cookies.eraseCookie("fbl")
if(t){try{FB.logout(o)}catch(e){o()}}else{o()}},isConnected:function e(){return _isConnected},loadFb:function e(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var o=document.createElement("script")
o.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/sdk.js?xfbml=1&kidDirectedSite=1"
var i=document.getElementById("fb-root")
if(i){i.appendChild(o)}},tryFbLoad:function e(o,i){var t=KA.getUserProfile()
var r=!!t&&t.get("isChildAccount")
if(KA.isZeroRated||r){if(i){i()}return}this.loadFb()
this._fbReadyPromise.then(o,i)},getFacebookID:function e(){if(KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function e(o){FacebookUtil.facebookID=o
LocalStore.set("facebookID",o)},isUsingFbLogin:function e(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!Cookies.readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function e(){Cookies.createCookie("fbl",true,30)},setPublishStreamPermission:function e(o){var i=LocalStore.get("fbPublishStream")
if(!i){i={}}var t=FacebookUtil.getFacebookID()
if(t){if(o){i[t]=true}else{delete i[t]}LocalStore.set("fbPublishStream",i)}},hasPublishStreamPermission:function e(){var o=LocalStore.get("fbPublishStream")
if(o&&o[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function e(o){if(Cookies.readCookie("fbsr_"+KA.FB_APP_ID)){return}if(o&&o.signedRequest){Cookies.createCookie("fbsr_"+KA.FB_APP_ID,o.signedRequest)}}}
module.exports=FacebookUtil

});
KAdefine("javascript/shared-package/social.js", function(require, module, exports) {
var absoluteLinks=require("./absolute-links.js")
var dom=require("./dom-utils.js")
var i18n=require("./i18n.js")
var FacebookUtil=require("./facebookutil.js")
var Social={init:function e(){dom.delegate("click",".twitterShare",function(e,t){Social.openTwitterPopup(t.href)
e.preventDefault()})},prepFacebook:function e(){FacebookUtil.tryFbLoad(function(){})},facebookShare:function e(t,a,o){FacebookUtil.tryFbLoad(function(){FB.ui({method:"feed",name:t,link:a,picture:o,caption:"www.khanacademy.org"})})
return false},facebookVideo:function e(t,a,o){FacebookUtil.tryFbLoad(function(){FB.ui({method:"feed",name:t,link:"http://www.khanacademy.org/"+o,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:a,message:i18n._("I just learned about %(title)s on Khan Academy",{title:t})})})
return false},formatMailtoUrl:function e(t){var a=t.subject
var o=t.body
var n="mailto:"+"?Subject="+encodeURIComponent(a)+"&Body="+encodeURIComponent(o)
return n.replace(/\s/g,"+")},emailBadge:function e(t,a){return Social.formatMailtoUrl({subject:i18n._("I just earned the %(badge)s badge on Khan Academy!",{badge:a}),body:i18n._("Check it out at %(url)s.",{url:t})})},openTwitterPopup:function e(t){var a=550
var o=370
var n=document.documentElement.clientWidth
var r=document.documentElement.clientHeight
var i=(n-a)/2
var c=(r-o)/2
var u="status=1"+",width="+a+",height="+o+",top="+c+",left="+i
window.open(t,"twitter",u)},formatTwitterShareUrl:function e(t){var a=t.url
var o=t.text
var n=absoluteLinks.safeLinkTo("http://twitter.com/intent/"+"tweet?url="+encodeURIComponent(a)+"&text="+encodeURIComponent(o)+"&related=khanacademy:Khan Academy")
return n.replace(/\s/g,"+")},twitterBadge:function e(t,a){return Social.formatTwitterShareUrl({url:t,text:i18n._("I just earned the %(badge)s badge on "+"@khanacademy! Check it out at",{badge:a})})}}
module.exports=Social

});
KAdefine("javascript/shared-package/bigbingo.js", function(require, module, exports) {
var _require=require("./khan-fetch.js"),khanFetch=_require.khanFetch,formUrlencode=_require.formUrlencode
var KAConsole=require("./console.js")
var markConversionsURL="/api/internal/_bb/bigbingo/mark_conversions"
var BigBingo={markConversions:function n(e){return khanFetch(markConversionsURL,babelHelpers.extends({method:"POST"},formUrlencode({conversion_ids:e.join(",")}))).catch(function(n){return null})},markConversionsWithExtras:function n(e){return khanFetch(markConversionsURL,babelHelpers.extends({method:"POST"},formUrlencode({conversions:JSON.stringify(e)}))).catch(function(n){return null})},markConversionsWithProduct:function n(e,r){var o="/api/internal/_mt/bigbingo/mark_conversions_with_product"
if(e){o+="?topic_slug="+encodeURIComponent(e)}return khanFetch(o,{method:"POST",body:JSON.stringify({conversions:r}),headers:{"Content-Type":"application/json"}}).catch(function(n){return null})},markConversion:function n(e,r){if(r){return this.markConversionsWithExtras([{id:e,extra:r}])}else{return this.markConversions([e])}},ConversionMarking:function n(e){var r=this
return{markConversion:function n(o,i){if(e){try{i=babelHelpers.extends({},i||{},e.call(this))}catch(n){KAConsole.log("Unable to bind extras to BigBingo conversion")}}return r.markConversion(o,i)}}},abTest:function n(e){return khanFetch("/api/internal/bigbingo/ab_test",babelHelpers.extends({method:"POST"},formUrlencode({experiment_id:e}))).then(function(n){return n.json()})}}
module.exports=BigBingo

});
KAdefine("javascript/shared-package/gtm.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.sendAnEventThatIsNotChildDirectedToAdvertisers=sendAnEventThatIsNotChildDirectedToAdvertisers
window.dataLayer=window.dataLayer||[]
function sendAnEventThatIsNotChildDirectedToAdvertisers(e){window.dataLayer.push(e)}
});
KAdefine("javascript/shared-package/zero-rating.js", function(require, module, exports) {
var ZERO_RATING_DOMAIN="zero"
function hostIsZeroRated(o){return o===document.location.hostname||o===ZERO_RATING_DOMAIN+".khanacademy.org"||o==="fastly.kastatic.org"||o==="cdn.kastatic.org"||o==="kasandbox.org"||RegExp("."+ZERO_RATING_DOMAIN+".khanacademy.org").test(o)||/\.kasandbox\.org$/.test(o)}module.exports={ZERO_RATING_DOMAIN:ZERO_RATING_DOMAIN,hostIsZeroRated:hostIsZeroRated}

});
KAdefine("javascript/shared-package/eduorg-models.js", function(require, module, exports) {
var Backbone=require("../shared-package/backbone-lite.js")
var AffiliationModel=Backbone.Model.extend({url:"/api/internal/user/profile/affiliation",defaults:{eduorgKeyId:"",eduorgName:"",eduorgPostalCode:"",eduorgLocationText:""}})
exports.AffiliationModel=AffiliationModel

});
KAdefine("javascript/shared-package/profile-model.js", function(require, module, exports) {
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(['\n            query getFullUserProfile($kaid: String!) {\n                user(kaid: $kaid) {\n                    id\n                    kaid\n                    key\n                    userId\n                    email\n                    username\n                    profileRoot\n                    childPageRoot\n                    isPhantom\n                    isDeveloper: hasRole(name: "admin")\n                    isCurator: hasRole(\n                        name: "curator"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isCreator: hasRole(\n                        name: "creator"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isPublisher: hasPermission(\n                        name: "can_publish"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isModerator: hasPermission(\n                        name: "can_moderate_users"\n                        scope: GLOBAL\n                    )\n                    isPublic\n                    isDataCollectible\n                    isChild\n                    isOrphan\n                    restrictedDomain\n                    isActivityAccessible\n                    isCoachingLoggedInUser\n                    isParentOfLoggedInUser\n                    canModifyCoaches\n                    nickname\n                    hideVisual\n                    joined\n                    points\n                    countVideosCompleted\n                    publicBadges {\n                        badgeCategory\n                        description\n                        isOwned\n                        isRetired\n                        name\n                        points\n                        absoluteUrl\n                        hideContext\n                        icons {\n                            smallUrl\n                            compactUrl\n                            emailUrl\n                            largeUrl\n                        }\n                        relativeUrl\n                        safeExtendedDescription\n                        slug\n                        translatedDescription\n                        translatedSafeExtendedDescription\n                    }\n                    bio\n                    background {\n                        name\n                        imageSrc\n                    }\n                    schoolAffiliation {\n                        id\n                        name\n                        postalCode\n                        location\n                    }\n                    affiliationCountryCode\n                    soundOn\n                    prefersReducedMotion\n                    noColorInVideos\n                    autocontinueOn\n                    avatar {\n                        name\n                        imageSrc\n                    }\n                    hasChangedAvatar\n                    newNotificationCount\n                    canHellban: hasPermission(\n                        name: "can_ban_users"\n                        scope: GLOBAL\n                    )\n                    canMessageUsers: hasPermission(\n                        name: "can_send_moderator_messages"\n                        scope: GLOBAL\n                    )\n                    canCreateOfficialClarifications: hasPermission(\n                        name: "can_approve_clarifications"\n                        scope: GLOBAL\n                    )\n                    canEvalCsProjects\n                    discussionBanned\n                    isSelf\n                    hasStudents\n                    hasChildren\n                    badgeCounts\n                    homepageUrl\n                    hasCoachHomepage\n                    hasParentHomepage\n                    isMidsignupPhantom\n                    streakLastExtended\n                    streakLastLength\n                }\n            }\n        '],['\n            query getFullUserProfile($kaid: String!) {\n                user(kaid: $kaid) {\n                    id\n                    kaid\n                    key\n                    userId\n                    email\n                    username\n                    profileRoot\n                    childPageRoot\n                    isPhantom\n                    isDeveloper: hasRole(name: "admin")\n                    isCurator: hasRole(\n                        name: "curator"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isCreator: hasRole(\n                        name: "creator"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isPublisher: hasPermission(\n                        name: "can_publish"\n                        scope: ANY_ON_CURRENT_LOCALE\n                    )\n                    isModerator: hasPermission(\n                        name: "can_moderate_users"\n                        scope: GLOBAL\n                    )\n                    isPublic\n                    isDataCollectible\n                    isChild\n                    isOrphan\n                    restrictedDomain\n                    isActivityAccessible\n                    isCoachingLoggedInUser\n                    isParentOfLoggedInUser\n                    canModifyCoaches\n                    nickname\n                    hideVisual\n                    joined\n                    points\n                    countVideosCompleted\n                    publicBadges {\n                        badgeCategory\n                        description\n                        isOwned\n                        isRetired\n                        name\n                        points\n                        absoluteUrl\n                        hideContext\n                        icons {\n                            smallUrl\n                            compactUrl\n                            emailUrl\n                            largeUrl\n                        }\n                        relativeUrl\n                        safeExtendedDescription\n                        slug\n                        translatedDescription\n                        translatedSafeExtendedDescription\n                    }\n                    bio\n                    background {\n                        name\n                        imageSrc\n                    }\n                    schoolAffiliation {\n                        id\n                        name\n                        postalCode\n                        location\n                    }\n                    affiliationCountryCode\n                    soundOn\n                    prefersReducedMotion\n                    noColorInVideos\n                    autocontinueOn\n                    avatar {\n                        name\n                        imageSrc\n                    }\n                    hasChangedAvatar\n                    newNotificationCount\n                    canHellban: hasPermission(\n                        name: "can_ban_users"\n                        scope: GLOBAL\n                    )\n                    canMessageUsers: hasPermission(\n                        name: "can_send_moderator_messages"\n                        scope: GLOBAL\n                    )\n                    canCreateOfficialClarifications: hasPermission(\n                        name: "can_approve_clarifications"\n                        scope: GLOBAL\n                    )\n                    canEvalCsProjects\n                    discussionBanned\n                    isSelf\n                    hasStudents\n                    hasChildren\n                    badgeCounts\n                    homepageUrl\n                    hasCoachHomepage\n                    hasParentHomepage\n                    isMidsignupPhantom\n                    streakLastExtended\n                    streakLastLength\n                }\n            }\n        '])
var Backbone=require("../shared-package/backbone-lite.js")
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var _require=require("./khan-fetch.js"),khanFetch=_require.khanFetch,encodeParams=_require.encodeParams
var getFullUserProfile=function e(n){return Promise.all([require.dynimport("graphql-tag").then(function(e){return e.default}),require.dynimport("../apollo-package/apollo-fetch.js")]).then(function(e){var a=e[0],i=e[1]
var t=a(_templateObject)
return i.default(t,{kaid:n}).then(function(e){var n=e.data.user
if(!n){return null}var a=n.publicBadges.map(function(e){return babelHelpers.extends({},e,{iconSrc:e.icons.smallUrl,icons:{small:e.icons.smallUrl,compact:e.icons.compactUrl,email:e.icons.emailUrl,large:e.icons.largeUrl}})})
var i=babelHelpers.extends({},n,{userKey:n.key,dateJoined:n.joined,avatarName:n.avatar.name,avatarSrc:n.avatar.imageSrc,backgroundName:n.background.name,backgroundSrc:n.background.imageSrc,countBrandNewNotifications:n.newNotificationCount,hasChildStudents:n.hasChildren,isChildAccount:n.isChild,publicBadges:a,badgeCounts:JSON.parse(n.badgeCounts),includesUserDataInfo:true,id:undefined})
if(n.schoolAffiliation){var t=n.schoolAffiliation
i.affiliation={eduorgKeyId:t.id,eduorgName:t.name,eduorgPostalCode:t.postalCode,eduorgLocationText:t.location}}return i})})}
var ProfileModel=Backbone.Model.extend({defaults:{affiliation:null,avatar:{imageSrc:"/images/avatars/svg/leaf-green.svg",thumbnailSrc:"/images/avatars/svg/leaf-green.svg",imagePath:"/images/avatars/svg/leaf-green.svg"},avatarName:"",avatarSrc:"/images/avatars/svg/leaf-green.svg",background:{imageSrc:"/images/profile/backgrounds/bg-blue.jpg",imagePath:"/images/profile/backgrounds/bg-blue.jpg",thumbPath:"/images/profile/backgrounds/bg-blue-preview.png",thumbnailSrc:"/images/profile/backgrounds/bg-blue.jpg",thumbSrc:"/images/profile/backgrounds/bg-blue-preview.png"},backgroundName:"blue",backgroundSrc:"/images/profile/backgrounds/bg-blue.jpg",badgeCounts:{0:0,1:0,2:0,3:0,4:0,5:0},bio:"",countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,profileRoot:"",streakLastLength:0,streakLength:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,isCreator:false,isCurator:false,isPublisher:false,canModifyCoaches:true,hideVisual:false},url:"/api/internal/user/profile",isPhantom:function e(){return this.get("isPhantom")},isCurrentUser:function e(){return KA.getUserProfile()&&KA.getUserProfile().get("kaid")===this.get("kaid")},initialize:function e(n,a){Backbone.Model.prototype.initialize.call(this,n,a)
this._ensureAttrsAreSubmodels()
var i=ProfileModel.SUBMODEL_ATTRS.map(function(e){return"change:"+e}).join(" ")
this.on(i,this._ensureAttrsAreSubmodels,this)},usernameFormatted:function e(){var n=this.get("username")
return n?"@"+n:""},_ensureAttrsAreSubmodels:function e(n){var a=require("./eduorg-models.js").AffiliationModel
var i={}
var t=this.get("affiliation")||new a
i.affiliation=t instanceof a?t:new a(t)
this.set(i,{silent:true})},isPrivate:function e(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function e(){return this.get("isActivityAccessible")},getIdentifier:function e(){return this.get("username")||this.get("email")},isEditable:function e(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function e(){return this.isEditable()&&this.get("isDataCollectible")},isSal:function e(){return this.get("username")==="sal"},toJSON:function e(){var n=this
var a=ProfileModel.__super__.toJSON.call(this)
ProfileModel.COMPUTED_ATTRS.forEach(function(e){a[e]=n[e]()})
ProfileModel.SUBMODEL_ATTRS.forEach(function(e){var i=n.get(e)
if(i.toJSON){a[e]=i.toJSON()}})
return a},getIfUndefined:function e(n,a){if(n&&n[a]!==undefined){return n[a]}return this.get(a)},save:function e(n,a){a=a||{}
a.contentType="application/json"
a.data=JSON.stringify({kaid:this.getIfUndefined(n,"kaid"),userKey:this.getIfUndefined(n,"userKey"),avatarName:this.getIfUndefined(n,"avatarName"),bio:this.getIfUndefined(n,"bio"),backgroundName:this.getIfUndefined(n,"backgroundName"),nickname:(this.getIfUndefined(n,"nickname")||"").trim(),username:this.getIfUndefined(n,"username"),isPublic:this.getIfUndefined(n,"isPublic"),hideVisual:this.getIfUndefined(n,"hideVisual"),affiliation:this.getIfUndefined(n,"affiliation")})
var i=a.success
a.success=function(e,n){e.trigger("savesuccess")
if(i){i(e,n)}}
return Backbone.Model.prototype.save.call(this,n,a)},storeState:function e(){var n=this.toJSON()
this._storedAttrs=Object.keys(n).reduce(function(e,a){if(!ProfileModel.COMPUTED_ATTRS.includes(a)){e[a]=n[a]}return e},{})},restoreState:function e(){var n=this
var a=Object.keys(this._storedAttrs).reduce(function(e,a){if(!ProfileModel.SUBMODEL_ATTRS.includes(a)){e[a]=n._storedAttrs[a]}return e},{})
this.set(a)
var i=Object.keys(this._storedAttrs).reduce(function(e,a){if(ProfileModel.SUBMODEL_ATTRS.includes(a)){e[a]=n._storedAttrs[a]}return e},{})
this.set(i)},fetchFull:function e(){var n=this
if(this.get("includesUserDataInfo")){return Promise.resolve()}return getFullUserProfile(this.get("kaid")).then(function(e){if(e){n.set(e)}})},parse:function e(n,a){if("apiActionResults"in n&&"payload"in n){n=n["payload"]}return Backbone.Model.prototype.parse.call(this,n,a)},validateNickname:function e(n){this.trigger("validate:nickname",(n||"").trim().length>0)},validateUsername:function e(n){var a=this
if(n===this.get("username")){this.trigger("validate:username")
return}n=n.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(n)){khanFetch("/api/internal/signup/check-username?"+encodeParams({username:n})).then(function(){return a.onValidateUsernameResponse_(true)}).catch(function(){return a.onValidateUsernameResponse_(false)})}else{var i=""
if(n.length<3){i=i18n._("Too short.")}else if(/^[^a-z]/.test(n)){i=i18n._("Start with a letter.")}else{i=i18n._("Letters and numbers only.")}this.trigger("validate:username",i,false)}},onValidateUsernameResponse_:function e(n){var a=n?i18n._("Looks good!"):i18n._("Not available.")
this.trigger("validate:username",a,n)}},{COMPUTED_ATTRS:["isEditable","isFullyEditable","isSal","usernameFormatted"],SUBMODEL_ATTRS:["affiliation"]})
module.exports=ProfileModel

});
KAdefine("javascript/shared-package/khan-fetch.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/fetch/fetch.js")
var APIActionResults=require("./api-action-results.js")
var KA=require("./ka.js")
function assertNotSSR(e){if(KA.REACT_SSR){var r="Do not fetch from the network during the initial render; "+"the server-side renderer will never see the results!  Plus, "+("we can't be sure "+e+" doesn't fetch any user-specific ")+"(or request-specific) data.  To fix, surround this call "+"with <WithSSRPlaceholder>."
throw new Error(r)}}function copyRequestWithUrl(e,r){var t=fetch.polyfill?Promise.resolve(r._bodyInit):r.headers.get("Content-Type")?r.blob():Promise.resolve(undefined)
return t.then(function(t){return new Request(e,{body:t,method:r.method,headers:r.headers,referrer:r.referrer,referrerPolicy:r.referrerPolicy,mode:r.mode,credentials:r.credentials,cache:r.cache,redirect:r.redirect,integrity:r.integrity})})}function sendCookies(e){if(e.credentials==="omit"){return new Request(e,{credentials:"same-origin"})}return e}function addLangParam(e){if(KA.language){return copyRequestWithUrl(APIActionResults.addLangParam(e.url,KA.language,KA.usePreviewFMS),e)}else{return e}}function addCacheParam(e){var r=APIActionResults.addCacheParam(e.url)
return copyRequestWithUrl(r,e)}function addXsrfKey(e){var r=new Headers(e.headers)
var t=APIActionResults.addXsrfKey(e.url,function(e,t){return r.set(e,t)})
if(!t){throw new Error("Request cancelled because xsrf key was missing")}return new Request(e,{headers:r})}function checkZeroRating(e){if(!APIActionResults.checkZeroRating(e.url)){throw new Error("Request cancelled - non-zero-rated request to "+e.url+" made in zero-rated environment")}return e}function checkStatus(e){if(e.status>=200&&e.status<300){return e}else{var r=new Error(e.statusText)
r.response=e
throw r}}function checkApiVersionMismatch(e){APIActionResults.checkApiVersionMismatch(function(r){return e.headers.get(r)})
return e}function checkApiResponse(e){e.clone().text().then(function(r){APIActionResults.checkApiResponse(r,function(r){return e.headers.get(r)})})
return e}function khanFetch(e,r){assertNotSSR(e)
return Promise.resolve(new Request(e,r)).then(sendCookies).then(addLangParam).then(addCacheParam).then(addXsrfKey).then(checkZeroRating).then(function(e){return fetch(e)}).then(checkStatus).then(checkApiVersionMismatch).then(checkApiResponse)}function encodeParams(e){var r=""
var t=true
for(var n=Object.entries(e),a=Array.isArray(n),s=0,n=a?n:n[Symbol.iterator]();;){var o
if(a){if(s>=n.length)break
o=n[s++]}else{s=n.next()
if(s.done)break
o=s.value}var i=o,c=i[0],u=i[1]
var d=encodeURIComponent(c)
var h=encodeURIComponent(String(u))
if(!t){r+="&"}r+=d+"="+h
t=false}return r.replace(/%20/g,"+")}function formUrlencode(e){return{body:encodeParams(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}}module.exports={khanFetch:khanFetch,encodeParams:encodeParams,formUrlencode:formUrlencode}

});
KAdefine("javascript/shared-package/import-from-external-script.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.executeExternalScript=executeExternalScript
exports.executeExternalScriptUncached=executeExternalScriptUncached
exports.default=importFromExternalScript
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _apiActionResults=require("./api-action-results.js")
var MODULE_MEMO={}
var EXECUTION_MEMO={}
function executeExternalScript(e,t){var r=t&&t.bustCache
if(r){delete EXECUTION_MEMO[e]}return EXECUTION_MEMO[e]=EXECUTION_MEMO[e]||new Promise(function(t,r){if(_ka2.default.isZeroRated&&!(0,_apiActionResults.checkZeroRating)(e)){r("Did not load "+e+" because is not zero-rated.")
return}var a=document.getElementsByTagName("head")[0]
var n=document.createElement("script")
n.async=true
n.src=e
n.onload=n.onreadystatechange=function(){if(!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null
if(n.parentNode){n.parentNode.removeChild(n)}EXECUTION_MEMO[e]._resolved=true
t()}}
n.onerror=function(){r("Failed to load "+e+".")}
a.insertBefore(n,a.firstChild)})}function executeExternalScriptUncached(e){return executeExternalScript(e,{bustCache:true})}function importFromExternalScript(e,t){var r=e+"#"+(t||"")
return MODULE_MEMO[r]=MODULE_MEMO[r]||new Promise(function(r,a){if(t&&window[t]){r(window[t])}else{executeExternalScript(e).then(function(){return r(window[t])}).catch(function(e){return a(e)})}})}
});
KAdefine("third_party/javascript-khansrc/backbone-lite-src/backbone.js", function(require, module, exports) {
(function(){var t=[]
var e=t.push
var i=t.slice
var r=t.splice
var s=Object.prototype.toString
var n=exports
n.VERSION="1.0.0"
var a=n.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this
this._events||(this._events={})
var r=this._events[t]||(this._events[t]=[])
r.push({callback:e,context:i,ctx:i||this})
return this},once:function(t,e,i){if(!c(this,"once",t,[e,i])||!e)return this
var r=this
var s=false
var n=function(){if(s)return
s=true
r.off(t,n)
e.apply(this,arguments)}
n._callback=e
return this.on(t,n,i)},off:function(t,e,i){var r,s,n,a,u,o,f,h
if(!this._events||!c(this,"off",t,[e,i]))return this
if(!t&&!e&&!i){this._events={}
return this}a=t?[t]:Object.keys(this._events)
for(u=0,o=a.length;u<o;u++){t=a[u]
if(n=this._events[t]){this._events[t]=r=[]
if(e||i){for(f=0,h=n.length;f<h;f++){s=n[f]
if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this
var e=i.call(arguments,1)
if(!c(this,"trigger",t,e))return this
var r=this._events[t]
var s=this._events.all
if(r)o(r,e)
if(s)o(s,arguments)
return this},stopListening:function(t,e,i){var r=this._listeners
if(!r)return this
var s=!e&&!i
if(typeof e==="object")i=this
if(t)(r={})[t._listenerId]=t
for(var n in r){r[n].off(e,i,this)
if(s)delete this._listeners[n]}return this}}
var u=/\s+/
var c=function(t,e,i,r){if(!i)return true
if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u)
for(var a=0,c=n.length;a<c;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true}
var o=function(t,e){var i,r=-1,s=t.length
while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}
a.bind=a.on
a.unbind=a.off
Object.assign(n,a)
var f=function(t,e,i,r){if(t===e)return t!==0||1/t===1/e
if(t==null||e==null)return t===e
var n=s.call(t)
if(n!==s.call(e))return false
switch(n){case"[object RegExp]":case"[object String]":return""+t===""+e
case"[object Number]":if(+t!==+t)return+e!==+e
return+t===0?1/+t===1/e:+t===+e
case"[object Date]":case"[object Boolean]":return+t===+e}var a=n==="[object Array]"
if(!a){if(typeof t!="object"||typeof e!="object")return false
var u=t.constructor,c=e.constructor
if(u!==c&&!(typeof u==="function"&&u instanceof u&&typeof c==="function"&&c instanceof c)&&("constructor"in t&&"constructor"in e)){return false}}i=i||[]
r=r||[]
var o=i.length
while(o--){if(i[o]===t)return r[o]===e}i.push(t)
r.push(e)
if(a){o=t.length
if(o!==e.length)return false
while(o--){if(!f(t[o],e[o],i,r))return false}}else{var h=Object.keys(t),l
o=h.length
if(Object.keys(e).length!==o)return false
while(o--){l=h[o]
if(!(e.hasOwnProperty(l)&&f(t[l],e[l],i,r)))return false}}i.pop()
r.pop()
return true}
var h=0
var l=function(t){var e=++h+""
return t?t+e:e}
var v=n.Model=function(t,e){var i
var r=t||{}
e||(e={})
this.cid=l("c")
this.attributes={}
this.url=e.url||this.url
this.urlRoot=e.urlRoot||this.urlRoot
if(e.parse)r=this.parse(r,e)||{}
i=typeof this.defaults==="function"?this.defaults():this.defaults
if(i){for(var s in i){if(r[s]===undefined){r[s]=i[s]}}}this.set(r,e)
this.changed={}
this.initialize.apply(this,arguments)}
Object.assign(v.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return Object.assign({},this.attributes)},sync:function(){return n.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,u,c,o,h
if(t==null)return this
if(typeof t==="object"){s=t
i=e}else{(s={})[t]=e}i=Object.assign({},i||{})
if(!this._validate(s,i))return false
n=i.unset
u=i.silent
a=[]
c=this._changing
this._changing=true
if(!c){this._previousAttributes=Object.assign({},this.attributes)
this.changed={}}h=this.attributes,o=this._previousAttributes
if(this.idAttribute in s)this.id=s[this.idAttribute]
for(r in s){e=s[r]
if(!f(h[r],e))a.push(r)
if(!f(o[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete h[r]:h[r]=e}if(!u){if(a.length)this._pending=true
for(var l=0,v=a.length;l<v;l++){this.trigger("change:"+a[l],this,h[a[l]],i)}}if(c)return this
if(!u){while(this._pending){this._pending=false
this.trigger("change",this,i)}}this._pending=false
this._changing=false
return this},unset:function(t,e){return this.set(t,void 0,Object.assign({},e,{unset:true}))},clear:function(t){var e={}
for(var i in this.attributes)e[i]=void 0
return this.set(e,Object.assign({},t,{unset:true}))},fetch:function(t){t=t?Object.assign({},t):{}
if(t.parse===void 0)t.parse=true
var e=this
var i=t.success
t.success=function(r){if(!e.set(e.parse(r,t),t))return false
if(i)i(e,r,t)
e.trigger("sync",e,r,t)}
d(this,t)
return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes
if(t==null||typeof t==="object"){r=t
i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false
i=Object.assign({validate:true},i)
if(!this._validate(r,i))return false
if(r&&i.wait){this.attributes=Object.assign({},a,r)}if(i.parse===void 0)i.parse=true
var u=this
var c=i.success
i.success=function(t){u.attributes=a
var e=u.parse(t,i)
if(i.wait)e=Object.assign(r||{},e)
if(typeof e==="object"&&!u.set(e,i)){return false}if(c)c(u,t,i)
u.trigger("sync",u,t,i)}
d(this,i)
s=this.isNew()?"create":i.patch?"patch":"update"
if(s==="patch")i.attrs=r
n=this.sync(s,this,i)
if(r&&i.wait)this.attributes=a
return n},destroy:function(t){t=t?Object.assign({},t):{}
var e=this
var i=t.success
var r=function(){e.trigger("destroy",e,t)}
t.success=function(s){if(t.wait||e.isNew())r()
if(i)i(e,s,t)
if(!e.isNew())e.trigger("sync",e,s,t)}
if(this.isNew()){t.success()
return false}d(this,t)
var s=this.sync("delete",this,t)
if(!t.wait)r()
return s},url:function(){var t=typeof this.urlRoot==="function"?this.urlRoot():this.urlRoot
var e=t||b()
if(this.isNew())return e
return e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},Object.assign(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true
t=Object.assign({},this.attributes,t)
var i=this.validationError=this.validate(t,e)||null
if(!i)return true
this.trigger("invalid",this,i,Object.assign(e||{},{validationError:i}))
return false}})
n.sync=function(t,e,i){var r=p[t]
i=i||{}
var s={type:r,dataType:"json"}
if(!i.url){var a=typeof e.url==="function"?e.url():e.url
s.url=a||b()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json"
s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(s.type!=="GET"){s.processData=false}var u=i.xhr=n.ajax(Object.assign(s,i))
e.trigger("request",e,u,i)
return u}
var p={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}
n.ajax=function(){throw new Error("Please specify an Ajax lib for Backbone.ajax")}
var g=function(t,e){var i=this
var r
if(t&&t.hasOwnProperty("constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}Object.assign(r,i,e)
var s=function(){this.constructor=r}
s.prototype=i.prototype
r.prototype=new s
if(t)Object.assign(r.prototype,t)
r.__super__=i.prototype
return r}
v.extend=g
var b=function(){throw new Error('A "url" property or function must be specified')}
var d=function(t,e){var i=e.error
e.error=function(r){if(i)i(t,r,e)
t.trigger("error",t,r,e)}}}).call(this)

});
KAdefine("javascript/shared-package/backbone-lite.js", function(require, module, exports) {
var _require=require("./khan-fetch.js"),khanFetch=_require.khanFetch
var Backbone=require("../../third_party/javascript-khansrc/backbone-lite-src/backbone.js")
Backbone.ajax=function(e){var r={method:e.type}
if(e.contentType){r.headers={"Content-Type":e.contentType}}if(e.data){r.body=e.data}var t=khanFetch(e.url,r)
if(e.success){t.then(function(e){return e.json()}).then(e.success)}if(e.error){t.catch(e.error)}return t}
module.exports=Backbone

});
KAdefine("javascript/shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var i18n=require("./i18n.js")
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_SLUGS:{unstarted:i18n._("Needs Practice"),practiced:i18n._("Practiced"),mastery1:i18n._("Level One"),mastery2:i18n._("Level Two"),mastery3:i18n._("Mastered")},LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants

});
KAdefine("javascript/mobile-shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants

});
KAdefine("javascript/mobile-shared-package/exercise-progress-utils.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants=require("./exercise-progress-constants.js")
function getCountPerLevel(e){var r={}
ExerciseProgressConstants.LEVEL_NAMES.forEach(function(e){r[e]=0});(e||[]).forEach(function(e){r[e.state]++})
return r}function getProgressPercentage(e){var r=e["mastery3"]*4+e["mastery2"]*3+e["mastery1"]*2+e["practiced"]*1+e["unstarted"]*0
var s=e["mastery3"]*4+e["mastery2"]*4+e["mastery1"]*4+e["practiced"]*4+e["unstarted"]*4
return Math.floor(s&&100*r/s)}var progressCompare=function e(r,s){return ExerciseProgressConstants.LEVEL_VALUES[r]-ExerciseProgressConstants.LEVEL_VALUES[s]}
var ExerciseProgressUtils={getCountPerLevel:getCountPerLevel,getProgressPercentage:getProgressPercentage,progressCompare:progressCompare}
module.exports=ExerciseProgressUtils

});
KAdefine("javascript/shared-package/parse-query-string.js", function(require, module, exports) {
var addition=/\+/g
var regex=/([^&=]+)=?([^&]*)/g
var decode=function e(r){return decodeURIComponent(r.replace(addition," "))}
var parseQueryString=function e(r){if(r==null){r=e.getQueryString()}var n={}
var i=r.charAt(0)==="?"?r.slice(1):r
var t=void 0
while(t=regex.exec(i)){var a=decode(t[1])
var o=decode(t[2])
if(n[a]!==undefined){n[a]=[].concat(n[a],o)}else{n[a]=o}}return n}
parseQueryString.getQueryString=function(){return window.location.search.slice(1)}
module.exports=parseQueryString

});
KAdefine("javascript/shared-package/update-document-title.js", function(require, module, exports) {
var i18n=require("./i18n.js")
var KA=require("./ka.js")
var pageNameWithoutCount=document.title
function updateDocumentTitle(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){pageNameWithoutCount=e.pageName+" | "+i18n._("Khan Academy")}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var n=t?t.get("countBrandNewNotifications"):0
document.title=n>0?"("+n+") "+pageNameWithoutCount:pageNameWithoutCount}module.exports=updateDocumentTitle

});
KAdefine("javascript/shared-package/format-query-string.js", function(require, module, exports) {
var stringifyBool=function r(n){return n?"1":"0"}
var stringify=function r(n){return typeof n==="boolean"?stringifyBool(n):String(n)}
var formatPair=function r(n,t){return n+"="+encodeURIComponent(stringify(t))}
function formatQueryString(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
var t=Object.keys(r)
if(!t.length){return""}else{return(n?"?":"")+t.map(function(n){return Array.isArray(r[n])?r[n].map(function(r){return formatPair(n,r)}).join("&"):formatPair(n,r[n])}).sort().join("&")}}module.exports=formatQueryString

});
KAdefine("javascript/shared-package/site-infra.js", function(require, module, exports) {
var KA=require("./ka.js")
var dom=require("./dom-utils.js")
var APIActionResults=require("./api-action-results.js")
var FacebookUtil=require("./facebookutil.js")
var KAConsole=require("./console.js")
var PackageManager=require("./package-manager.js")
var Social=require("./social.js")
var A11y=require("./a11y.js")
var SiteInfra={init:function i(e){if(this._initDone){return}this._initDone=true
if(KA.REACT_SSR){return}var r=KA.getUserProfile()
KAConsole.init(KA.IS_DEV_SERVER)
if(!window.WEBPACK_BUILD){PackageManager.init()}var a=!!r&&r.get("isChildAccount")
!a&&FacebookUtil.init()
A11y.init()
if(window.KA_ENABLE_RAVENJS){var t=require("./raven-config.js")
t()}dom.ready().then(function(){APIActionResults.addDefaultHooks()
Social.init()
if(e){Promise.all([require.dynimport("../../third_party/gae_mini_profiler-src/static/js/profiler.js").then(function(i){return i.default}),require.dynimport("../../stylesheets/gae-mini-profiler-package/gae-mini-profiler.less")]).then(function(i){var r=i[0]
r.init(e,false)})}})},LegacyRequireIfLoaded:{}}
module.exports=SiteInfra

});
KAdefine("javascript/shared-package/absolute-links.js", function(require, module, exports) {
var KA=require("./ka.js")
var THIRD_PARTY_HOSTED_SUBDOMAINS_RE=new RegExp("^https?://"+"(life.khanacademy.org|schools.khanacademy.org|"+"international.khanacademy.org)")
function safeLinkTo(e){if(KA.isZeroRated){if(e.match(/https?:\/\/[^\/]*khanacademy.org/)){if(e.match(/zero.khanacademy.org/)){return e}else if(e.match(THIRD_PARTY_HOSTED_SUBDOMAINS_RE)){return"/zero/not-supported?url="+encodeURIComponent(e)}else{return e.replace("khanacademy.org","zero.khanacademy.org")}}else if(e.match(/^\s*javascript/)||e.match(/^\s*mailto:/)||e.match(/fastly.kastatic.org/)||e.match(/cdn.kastatic.org/)){return e}else{return"/zero/external-link?url="+encodeURIComponent(e)}}else{return e}}function makeHtmlLinksSafe(e){if(!KA.isZeroRated){return e}var a=/\bhref\s*=\s*['"]\s*(http[^'"]*)['"]/g
return e.replace(a,function(e,a){return'href="'+safeLinkTo(a)+'"'})}module.exports={makeHtmlLinksSafe:makeHtmlLinksSafe,safeLinkTo:safeLinkTo}

});
KAdefine("javascript/shared-package/raven-config.js", function(require, module, exports) {
var _ravenJs=require("raven-js")
var _ravenJs2=babelHelpers.interopRequireDefault(_ravenJs)
var _ka=require("./ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var configRaven=function e(){_ravenJs2.default.config("https://0d3382554dd24dc998a5937351b12379@app.getsentry.com/15744",{release:_ka2.default.sentryRelease,ignoreErrors:["top.GLOBALS","originalCreateNotification","canvas.contentDocument","MyApp_RemoveAllHighlights","http://tt.epicplay.com","Can't find variable: ZiteReader","jigsaw is not defined","ComboSearch is not defined","http://loading.retry.widdit.com/","atomicFindClose","fb_xd_fragment","bmi_SafeAddOnload","EBCallBackMessageReceived","conduitPage","document.getElementsByClassName.ToString is not a function","Can't find variable: didEnterViewPort","u3HU.data.indexOf is not a function","Cannot find function race in object function Promise() { [native code] }","ResizeObserver loop limit exceeded"],ignoreUrls:[/graph\.facebook\.com/i,/connect\.facebook\.net\/en_US\/all\.js/i,/eatdifferent\.com\.woopra-ns\.com/i,/static\.woopra\.com\/js\/woopra\.js/i,/extensions\//i,/^chrome:\/\//i,/^chrome-extension:\/\//i,/127\.0\.0\.1:4001\/isrunning/i,/webappstoolbarba\.texthelp\.com\//i,/metrics\.itunes\.apple\.com\.edgesuite\.net\//i]}).install()
if(_ka2.default.getKaid()){_ravenJs2.default.setUserContext({id:_ka2.default.getKaid()})}}
module.exports=configRaven

});
KAdefine("javascript/shared-package/types.js", function(require, module, exports) {

});
KAdefine("javascript/utils/compose-enhancers.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.createCompose=undefined
var _redux=require("redux")
var DEVTOOLS_NAME="__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
var createCompose=function e(o){var r=window[DEVTOOLS_NAME]
var t=(typeof window==="undefined"?"undefined":babelHelpers.typeof(window))==="object"&&r
return t?r(babelHelpers.extends({},o.reduxDevtoolsOptions||{})):_redux.compose}
exports.createCompose=createCompose

});
; KAdefine.updatePathToPackageMap({"javascript/apollo-package/apollo-fetch.js": "apollo.js", "javascript/node_modules/graphql-tag/index.js": "apollo.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/notifications-package/toast-notification.jsx": "notifications.js", "third_party/gae_mini_profiler-src/static/js/profiler.js": "gae-mini-profiler.js", "third_party/javascript-khansrc/tota11y/build/tota11y.min.js": "tota11y.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/shared-package.js.map 