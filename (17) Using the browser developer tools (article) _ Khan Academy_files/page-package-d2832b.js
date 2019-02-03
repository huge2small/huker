KAdefine("javascript/page-package/store.js", function(require, module, exports) {
var icepick=require("icepick")
var _require=require("redux"),combineReducers=_require.combineReducers,applyMiddleware=_require.applyMiddleware,createStore=_require.createStore
var thunkMiddleware=require("redux-thunk")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var constants=require("./constants.js")
function transformMissionPercentageData(e){var i={}
e.forEach(function(e){var t=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var a=ExerciseProgressUtils.getProgressPercentage(t)
i[e.slug]=a})
return i}var initialMissionDataState=icepick.freeze({loading:false,missionPercentages:null})
function missionData(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialMissionDataState
var i=arguments[1]
switch(i.type){case constants.LOADING_MISSION_PERCENTAGE_DATA:return icepick.assign(e,{loading:true})
case constants.LOADED_MISSION_PERCENTAGE_DATA:return icepick.assign(e,{loading:false,missionPercentages:transformMissionPercentageData(i.missions)})
default:return e}}var initialNotificationsState=icepick.freeze({newNotificationCount:0,notifications:[],loading:false,everLoaded:false,lastCursor:null,hasMore:true,teaser:null})
function notifications(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialNotificationsState
var i=arguments[1]
switch(i.type){case constants.START_LOADING_NOTIFICATIONS:return icepick.assign(e,{loading:true,everLoaded:true})
case constants.LOADED_NOTIFICATIONS:return icepick.assign(e,{notifications:e.notifications.concat(i.notifications),lastCursor:i.cursor,hasMore:i.hasMore,loading:false})
case constants.NEW_NOTIFICATIONS:return icepick.assign(e,{notifications:!e.everLoaded?e.notifications:i.notifications.concat(e.notifications),newNotificationCount:e.newNotificationCount+i.notifications.length,teaser:i.notifications.length>0?i.notifications[0].translatedTeaser:null})
case constants.CLEAR_NOTIFICATIONS_TEASER:return icepick.assign(e,{teaser:null})
case constants.CLEARED_NEW_NOTIFICATIONS:return icepick.assign(e,{newNotificationCount:0})
default:return e}}var profileDataFromProfile=function e(i){return{hasChildStudents:i.get("hasChildStudents"),hasCoachHomepage:i.get("hasCoachHomepage"),hasParentHomepage:i.get("hasParentHomepage"),hasStudents:i.get("hasStudents"),isChildAccount:i.get("isChildAccount"),isMidsignupPhantom:i.get("isMidsignupPhantom"),isPhantom:i.get("isPhantom"),profileRoot:i.get("profileRoot"),nickname:i.get("nickname"),avatarSrc:i.get("avatarSrc")}}
function userProfileData(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null
var i=arguments[1]
switch(i.type){case constants.UPDATE_PROFILE:return i.profile&&icepick.freeze(profileDataFromProfile(i.profile))
default:return e}}var store=combineReducers({notifications:notifications,userProfileData:userProfileData,missionData:missionData})
var createWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)
var create=function e(i,t){return createWithMiddleware(store,{notifications:icepick.assign(initialNotificationsState,{newNotificationCount:i}),userProfileData:t&&icepick.freeze(t)})}
module.exports={create:create,notifications:notifications,userProfileData:userProfileData,missionData:missionData}

});
KAdefine("javascript/page-package/constants.js", function(require, module, exports) {
function makeConstants(I){var A={}
Object.keys(I).forEach(function(I){A[I]="PAGE."+I})
return A}module.exports=makeConstants({START_LOADING_NOTIFICATIONS:null,LOADED_NOTIFICATIONS:null,NEW_NOTIFICATIONS:null,CLEARED_NEW_NOTIFICATIONS:null,LOADING_MISSION_PERCENTAGE_DATA:null,LOADED_MISSION_PERCENTAGE_DATA:null,UPDATE_PROFILE:null,CLEAR_NOTIFICATIONS_TEASER:null})

});
KAdefine("javascript/page-package/actions.js", function(require, module, exports) {
var _require=require("../shared-package/khan-fetch.js"),khanFetch=_require.khanFetch,encodeParams=_require.encodeParams
var constants=require("./constants.js")
function newNotifications(t){return{type:constants.NEW_NOTIFICATIONS,notifications:t}}function clearNotificationsTeaser(){return{type:constants.CLEAR_NOTIFICATIONS_TEASER}}function gotNewNotifications(t){return function(n,i){n(newNotifications(t))
setTimeout(function(){var t=i()
if(t.notifications.teaser!=null){n(clearNotificationsTeaser())}},5e3)}}function startLoadingNotifications(){return{type:constants.START_LOADING_NOTIFICATIONS}}function loadedNotifications(t,n,i){return{type:constants.LOADED_NOTIFICATIONS,notifications:t,cursor:n,hasMore:i}}function loadMoreNotifications(){return function(t,n){t(startLoadingNotifications())
var i=n()
var o=i.notifications.lastCursor
var e={casing:"camel"}
if(o){e.cursor=o}var a="/api/internal/user/notifications/readable?"+encodeParams(e)
var r=new Promise(function(t){Promise.all([require.dynimport("../notifications-package/notifications.js").then(function(t){return t.default}),require.dynimport("../notifications-package/readable-notification-view.js").then(function(t){return t.default}),require.dynimport("backbone").then(function(t){return t.default}),require.dynimport("jquery").then(function(t){return t.default}),require.dynimport("../../stylesheets/notifications-package/notifications.less")]).then(t)})
Promise.all([khanFetch(a).then(function(t){return t.json()}),r]).then(function(n){var i=n[0],_=n[1]
t(loadedNotifications(i.notifications,i.cursor,i.hasMore))})}}function clearedNotifications(){return{type:constants.CLEARED_NEW_NOTIFICATIONS}}function clearNewNotifications(){return function(t){t(clearedNotifications())
khanFetch("/api/internal/user/notifications/clear_brand_new",{method:"POST"})}}function startLoadingMissionPercentages(){return{type:constants.LOADING_MISSION_PERCENTAGE_DATA}}function loadedMissionPercentages(t){return{type:constants.LOADED_MISSION_PERCENTAGE_DATA,missions:t}}function loadMissionPercentages(){return function(t){t(startLoadingMissionPercentages())
khanFetch("/api/internal/user/missions/progress_info?casing=camel").then(function(t){return t.json()}).then(function(n){t(loadedMissionPercentages(n))})}}function updateProfile(t){return{type:constants.UPDATE_PROFILE,profile:t}}module.exports={gotNewNotifications:gotNewNotifications,loadMoreNotifications:loadMoreNotifications,clearNewNotifications:clearNewNotifications,loadMissionPercentages:loadMissionPercentages,updateProfile:updateProfile}

});
KAdefine("javascript/page-package/urls.js", function(require, module, exports) {
var buildURLWithContinue=function n(t,i){return function(n){if(!n){n=location.pathname+location.search+location.hash}var o=i?i(n):null
return t+"?continue="+encodeURIComponent(o||n)}}
module.exports={getLoginURL:buildURLWithContinue("/login",function(n){switch(n){case"/sat":return"/mission/sat"
case"/signup":var t=/continue=([^&]+)/.exec(location.search)
if(t){return t[1]}}}),getSignupURL:buildURLWithContinue("/signup",function(n){switch(n){case"/sat":return"/mission/sat"
case"/login":var t=/continue=([^&]+)/.exec(location.search)
if(t){return t[1]}}}),getLogoutURL:buildURLWithContinue("/logout")}

});
KAdefine("javascript/page-package/big-bingo-links.js", function(require, module, exports) {
function buildUrlWithoutExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversion_ids="+encodeURIComponent(n.join(",")))}function buildUrlWithExtras(n,e){return"/bigbingo_redirect"+("?continue="+encodeURIComponent(e))+("&conversions_json="+encodeURIComponent(JSON.stringify(n)))}function replaceHref(n,e,t){var r=n.currentTarget
if(r.getAttribute("data-has-big-bingo-href")===null){r.href=t(e,r.href)
r.setAttribute("data-has-big-bingo-href","")}}function handleMouseDown(n,e,t){replaceHref(n,e,t)}function handleKeyDown(n,e,t){if(n.key==="Enter"){replaceHref(n,e,t)}}function handleTouchStart(n,e,t){replaceHref(n,e,t)}function _handlers(n,e){return{onMouseDown:function t(r){return handleMouseDown(r,n,e)},onKeyDown:function t(r){return handleKeyDown(r,n,e)},onTouchStart:function t(r){return handleTouchStart(r,n,e)}}}function handlers(n){return _handlers(n,buildUrlWithoutExtras)}function handlersWithExtras(n){return _handlers(n,buildUrlWithExtras)}module.exports={handlers:handlers,handlersWithExtras:handlersWithExtras,buildUrlWithoutExtras:buildUrlWithoutExtras,buildUrlWithExtras:buildUrlWithExtras}

});
KAdefine("javascript/page-package/footer.jsx", function(require, module, exports) {
var _footerContainer,_mainBlock,_babelHelpers$extends,_missionAndLanguageSe,_babelHelpers$extends2,_mainLinksSection,_socialMediaContainer,_bottomLink,_languagePickerContai
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksSpacingV=require("@khanacademy/wonder-blocks-spacing-v2")
var _wonderBlocksSpacingV2=babelHelpers.interopRequireDefault(_wonderBlocksSpacingV)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var absoluteLinks=require("../shared-package/absolute-links.js")
var Spring=require("../components/layout-package/spring.jsx")
var FooterAttribution=require("./footer-attribution.jsx")
var globalStyles=require("../shared-styles-package/global-styles.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var styleConstants=require("../shared-styles-package/constants.js")
var styleA11y=require("../shared-styles-package/a11y.js")
var Icon=require("../shared-styles-package/icon.jsx")
var i18n=require("../shared-package/i18n.js")
var currentYear=(new Date).getFullYear()
var socialIconSize=24
var twitterUrl=absoluteLinks.safeLinkTo("https://twitter.com/khanacademy")
var facebookUrl=absoluteLinks.safeLinkTo("https://www.facebook.com/khanacademy")
var instagramUrl=absoluteLinks.safeLinkTo("https://instagram.com/khanacademy")
var twitterIcon={width:20,height:20,path:"M18.895 0H1.105C.495 0 0 .495 0 1.105V18.9c0 .605.495 1.1 1.105 1.1H18.9c.61 0 1.105-.495 1.105-1.105V1.105A1.113 1.113 0 0 0 18.895 0zM14.97 7.455c.005.11.005.22.005.33 0 3.385-2.58 7.295-7.295 7.295a7.293 7.293 0 0 1-3.925-1.145A5.142 5.142 0 0 0 7.55 12.87a2.564 2.564 0 0 1-2.395-1.78c.155.03.315.045.48.045.235 0 .46-.03.675-.09A2.57 2.57 0 0 1 4.255 8.53v-.035c.345.19.74.305 1.16.32A2.57 2.57 0 0 1 4.62 5.39a7.28 7.28 0 0 0 5.285 2.68 2.567 2.567 0 0 1 2.5-3.15c.735 0 1.4.31 1.87.81a5.1 5.1 0 0 0 1.63-.62 2.58 2.58 0 0 1-1.13 1.42c.52-.065 1.015-.2 1.475-.405-.345.515-.78.97-1.28 1.33z"}
var facebookIcon={width:15,height:15,path:"M14.172 0H.827A.827.827 0 0 0 0 .828v13.344c0 .458.37.828.828.828h7.184V9.19H6.057V6.925h1.955v-1.67c0-1.938 1.183-2.992 2.913-2.992.827 0 1.54.062 1.747.09v2.025h-1.197c-.94 0-1.123.447-1.123 1.102v1.445h2.243L12.3 9.19h-1.95V15h3.822c.458 0 .828-.37.828-.828V.827A.827.827 0 0 0 14.172 0z"}
var instagramIcon={width:24,height:24,path:"M18.24,7.28a2.67,2.67,0,0,0-1.52-1.52,4.33,4.33,0,0,0-1.49-.27c-.84,0-1.09,0-3.23,0s-2.39,0-3.23,0a4.33,4.33,0,0,0-1.49.27A2.67,2.67,0,0,0,5.76,7.28a4.33,4.33,0,0,0-.27,1.49c0,.84,0,1.09,0,3.23s0,2.39,0,3.23a4.33,4.33,0,0,0,.27,1.49,2.67,2.67,0,0,0,1.52,1.52,4.33,4.33,0,0,0,1.49.27c.84,0,1.09,0,3.23,0s2.39,0,3.23,0a4.33,4.33,0,0,0,1.49-.27,2.67,2.67,0,0,0,1.52-1.52,4.33,4.33,0,0,0,.27-1.49c0-.84,0-1.09,0-3.23s0-2.39,0-3.23A4.33,4.33,0,0,0,18.24,7.28ZM12,16.11A4.11,4.11,0,1,1,16.11,12,4.11,4.11,0,0,1,12,16.11Zm4.27-7.42a1,1,0,1,1,1-1A1,1,0,0,1,16.27,8.69Z M12,9.33A2.67,2.67,0,1,0,14.67,12,2.68,2.68,0,0,0,12,9.33Z M22,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0ZM20,15.3a5.85,5.85,0,0,1-.37,1.94,4,4,0,0,1-2.34,2.34A5.85,5.85,0,0,1,15.3,20c-.85,0-1.13.05-3.3.05S9.55,20,8.7,20a5.85,5.85,0,0,1-1.94-.37,4,4,0,0,1-2.34-2.34,5.85,5.85,0,0,1-.37-1.94c0-.85,0-1.13,0-3.3s0-2.45,0-3.3a5.85,5.85,0,0,1,.37-1.94A4,4,0,0,1,6.76,4.42,5.85,5.85,0,0,1,8.7,4.05C9.55,4,9.83,4,12,4s2.45,0,3.3,0a5.85,5.85,0,0,1,1.94.37,4,4,0,0,1,2.34,2.34A5.85,5.85,0,0,1,20,8.7c0,.85.05,1.13.05,3.3S20,14.45,20,15.3Z"}
var iconDown={path:"M5,6L0,0L10,0",width:10,height:5.6239}
var playStoreUrl=absoluteLinks.safeLinkTo("https://play.google.com/store/apps/details?id=org.khanacademy.android&referrer=utm_source%3Dwebsite%2520footer%26utm_medium%3Dwebsite%2520footer%26utm_campaign%3Dwebsite%2520footer")
var appStoreUrl=absoluteLinks.safeLinkTo("https://itunes.apple.com/app/apple-store/id469863705?pt=698519&ct=website%20footer&mt=8")
var trackGaClick=function e(a){return new Promise(function(e,t){if(window.ga){window.ga("send","event","Click",a,{hitCallback:e})}else{e()}})}
var Footer=function(e){babelHelpers.inherits(a,e)
function a(){var t,s,n
babelHelpers.classCallCheck(this,a)
for(var l=arguments.length,r=Array(l),i=0;i<l;i++){r[i]=arguments[i]}return n=(t=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),s),s.state={curLanguage:s.props.curLanguage},s.handleLanguagePick=function(e){var a=e.target.value
s.setState({curLanguage:a})},t),babelHelpers.possibleConstructorReturn(s,n)}a.addMountListener=function e(t){a._mountListeners.push(t)}
a.removeMountListener=function e(t){a._mountListeners=a._mountListeners.filter(function(e){return e!==t})}
a.prototype.componentDidMount=function e(){this._triggerListenersAfterMount=setTimeout(function(){for(var e=a._mountListeners,t=Array.isArray(e),s=0,e=t?e:e[Symbol.iterator]();;){var n
if(t){if(s>=e.length)break
n=e[s++]}else{s=e.next()
if(s.done)break
n=s.value}var l=n
l()}},0)}
a.prototype.componentWillUnmount=function e(){if(this._triggerListenersAfterMount){clearTimeout(this._triggerListenersAfterMount)}}
a.prototype.getCurLanguageName=function e(){var a=this
var t=this.props.languages.find(function(e){return e[0].toLowerCase()===a.state.curLanguage})
return t?t[1]:this.state.curLanguage}
a.prototype.getSupportCommunityUrl=function e(){switch(this.props.curLanguage){case"es":return absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/es/community/topics")
case"pt-br":return absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/pt-br/community/topics")
default:return absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/en-us/community/topics")}}
a.prototype.renderMainLinks=function e(){var a=this.props.domains
return React.createElement("ul",{className:css(styles.mainLinksSection),role:"navigation"},React.createElement("li",{className:css(styles.linkGroup)},React.createElement("h3",{className:css(styles.li,styles.heading)},React.createElement("a",{className:css(styles.link),href:"/about"},i18n._("About"))),React.createElement("ul",null,React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/blog"},i18n._("News"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/impact"},i18n._("Impact"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/the-team"},i18n._("Our team"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/our-interns"},i18n._("Our interns"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/our-content-specialists"},i18n._("Our content specialists"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/our-board"},i18n._("Our leadership"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/about/our-supporters"},i18n._("Our supporters"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/contribute/credits"},i18n._("Our contributors"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/careers"},i18n._("Careers"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/careers/interns"},i18n._("Internships"))))),React.createElement("li",{className:css(styles.linkGroup)},React.createElement("h3",{className:css(styles.li,styles.heading)},i18n._("Contact")),React.createElement("ul",null,React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/")},i18n._("Help center"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:this.getSupportCommunityUrl()},i18n._("Support community"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:"/stories"},i18n._("Share your story"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:absoluteLinks.safeLinkTo("https://khanacademy.zendesk.com/hc/en-us/articles/202483630")},i18n._("Press"))))),React.createElement("li",{className:css(styles.linkGroup)},React.createElement("h3",{className:css(styles.li,styles.heading)},i18n._("Download our apps")),React.createElement("ul",null,React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:appStoreUrl},i18n._("iOS app"))),React.createElement("li",{className:css(styles.li)},React.createElement("a",{className:css(styles.link),href:playStoreUrl},i18n._("Android app"))))),React.createElement("li",{className:css(styles.linkGroup),key:"g-subjects"},React.createElement("h3",{className:css(styles.li,styles.heading)},i18n._("Courses")),React.createElement("ul",null,a.map(function(e,a){var t=e.title,s=e.href
return React.createElement("li",{className:css(styles.li),key:a},React.createElement("a",{className:css(styles.link),href:s},t))}))))}
a.prototype.renderLanguagePicker=function e(){if(this.props.isUserLoggedIn){return React.createElement("div",{className:css(styles.languagePickerContainer)},React.createElement("a",{className:css(styles.link),href:"/settings/account"},i18n._("Change language")))}else{return React.createElement("form",{className:css(styles.languagePickerContainer)},React.createElement("label",{htmlFor:"language_picker"},i18n._("Language")),React.createElement("div",{className:css(styles.languagePickerInnerContainer)},React.createElement("select",{onChange:this.handleLanguagePick,"data-test-id":"language_picker",id:"language_picker",value:this.state.curLanguage.toLowerCase(),"aria-label":i18n._("Change language"),className:css(styles.languagePicker)},React.createElement("option",{disabled:"disabled",value:"none"},i18n._("View Khan Academy in:")),this.props.languages.map(function(e,a){return React.createElement("option",{key:"lang"+a,value:e[0].toLowerCase(),lang:e[0].toLowerCase()},e[1])})),React.createElement(Icon,{className:css(styles.languagePickerIconDown),color:styleConstants.grayLighter,size:6,icon:iconDown})),React.createElement(_wonderBlocksButtonV2.default,{size:"small",kind:"tertiary",light:"true",style:styles.languagePickerButton,href:"/intl/"+this.state.curLanguage,skipClientNav:true,"aria-label":i18n._("Go to %(language)s version of Khan Academy",{language:this.getCurLanguageName()}),testId:"language_picker_button"},i18n._("Go")))}}
a.prototype.handleSocialMediaClick=function e(a,t){var s=a.currentTarget.href
trackGaClick(t).then(function(){window.location.href=s})}
a.prototype.render=function e(){var a=this
if(this.props.hideFooter){return null}var t=React.createElement("a",{href:"/donate",className:css(styles.linkHeavy)},i18n._("Donate"))
var s=React.createElement("a",{href:"/contribute",className:css(styles.linkHeavy)},i18n._("volunteer"))
return React.createElement("footer",{className:css(styles.rootStyle)},React.createElement("h2",{className:css(styleA11y.srOnly)},i18n._("Site Navigation")),React.createElement("div",{className:css(styles.footerContainer)},this.props.attribution&&React.createElement("div",{className:css(styles.attributionBlock)},React.createElement(FooterAttribution,this.props.attribution)),React.createElement("div",{className:css(styles.mainBlock)},React.createElement("div",{className:css(styles.missionAndLanguageSection)},React.createElement("p",{className:css(styles.missionParagraph)},i18n._("Our mission is to provide a free, world-class education to anyone, anywhere.")),React.createElement("p",{className:css(styles.missionParagraphSpacer)}),React.createElement("p",{className:css(styles.missionParagraph)},i18n._("Khan Academy is a 501(c)(3) nonprofit organization.")," ",i18n.$_("%(donate)s or %(volunteer)s today!",{donate:t,volunteer:s}))),this.renderMainLinks(),this.renderLanguagePicker()),React.createElement("div",{className:css(styles.bottomBlock)},React.createElement("div",{className:css(styles.bottomLink),title:i18n.doNotTranslate("Version: ")+this.props.kaGlobals.version},i18n.doNotTranslate("© "+currentYear+" Khan Academy"),React.createElement("br",null)),React.createElement("div",{className:css(styles.bottomLink)},React.createElement("span",null,React.createElement("a",{className:css(styles.link),href:"/about/tos"},i18n._("Terms of use")))),React.createElement("div",{className:css(styles.bottomLink)},React.createElement("span",null,React.createElement("a",{className:css(styles.link),href:"/about/privacy-policy"},i18n._("Privacy Policy")))),React.createElement(Spring,null),React.createElement("div",{className:css(styles.socialMediaContainer)},React.createElement("a",{href:facebookUrl,"aria-label":i18n._("Follow us on Facebook"),className:css(styles.socialIconLink),onClick:function e(t){a.handleSocialMediaClick(t,"Facebook-Join-Header")}},React.createElement(Icon,{size:socialIconSize,icon:facebookIcon})),React.createElement("a",{href:twitterUrl,"aria-label":i18n._("Follow us on Twitter"),className:css(styles.socialIconLink),onClick:function e(t){a.handleSocialMediaClick(t,"Twitter-Follow-Header")}},React.createElement(Icon,{size:socialIconSize,icon:twitterIcon})),React.createElement("a",{href:instagramUrl,"aria-label":i18n._("Follow us on Instagram"),className:css(styles.socialIconLink),onClick:function e(t){a.handleSocialMediaClick(t,"Instagram-Follow-Header")}},React.createElement(Icon,{size:socialIconSize,icon:instagramIcon}))))))}
return a}(React.Component)
Footer.defaultProps={isUserLoggedIn:false}
Footer._mountListeners=[]
var verticalSpacingBase=20
var linkColorHover="#ACD2F2"
var mainLinkHeight=32
var rootVerticalPadding=12
var styles=StyleSheet.create({rootStyle:{backgroundColor:_wonderBlocksColorV2.default.darkBlue,clear:"both",color:_wonderBlocksColorV2.default.white,position:"relative",padding:rootVerticalPadding+"px 20px",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale","@media print":{display:"none"}},footerContainer:(_footerContainer={boxSizing:"border-box",maxWidth:styleConstants.maxContainerWidth,position:"relative",margin:"0 auto",padding:"0 20px"},_footerContainer[mediaQueries.smOrSmaller]={padding:0},_footerContainer),mainBlock:(_mainBlock={padding:"36px 0 "+verticalSpacingBase+"px",position:"relative",display:"flex",flexDirection:"row"},_mainBlock[mediaQueries.smOrSmaller]={flexDirection:"column",paddingBottom:2*verticalSpacingBase},_mainBlock),attributionBlock:{borderBottom:"1px solid "+styleConstants.grayLighter,paddingBottom:rootVerticalPadding},bottomBlock:babelHelpers.extends({},globalStyles.typography.labelSmall,(_babelHelpers$extends={display:"flex",flexDirection:"row",alignItems:"center",borderTop:"1px solid "+styleConstants.grayLighter,padding:"8px 0"},_babelHelpers$extends[mediaQueries.smOrSmaller]={flexDirection:"column",justifyContent:"center",paddingTop:verticalSpacingBase},_babelHelpers$extends)),li:{paddingRight:8,height:mainLinkHeight,boxSizing:"border-box"},link:babelHelpers.extends({},globalStyles.typography.labelSmall,{color:_wonderBlocksColorV2.default.white,textDecoration:"none",":hover":{textDecoration:"underline",color:linkColorHover}}),linkHeavy:{color:_wonderBlocksColorV2.default.white,textDecoration:"underline",fontWeight:"bold",":hover":{color:linkColorHover}},heading:babelHelpers.extends({},globalStyles.typography.labelSmall,{fontWeight:"bold",marginBottom:0,color:"inherit"}),missionAndLanguageSection:(_missionAndLanguageSe={display:"flex",flexDirection:"column",height:"100%",width:"40%",paddingRight:40,paddingBottom:2*verticalSpacingBase},_missionAndLanguageSe[mediaQueries.smOrSmaller]={width:"auto",height:"auto",paddingTop:verticalSpacingBase,textAlign:"center",paddingRight:0},_missionAndLanguageSe),missionParagraph:babelHelpers.extends({},globalStyles.typography.bodyLarge,(_babelHelpers$extends2={margin:0,maxWidth:440},_babelHelpers$extends2[mediaQueries.smOrSmaller]={margin:"0 auto"},_babelHelpers$extends2)),missionParagraphSpacer:babelHelpers.extends({},globalStyles.typography.bodyLarge,{margin:0,height:"1em"}),mainLinksSection:(_mainLinksSection={position:"relative",flexGrow:1,columnCount:3},_mainLinksSection[mediaQueries.smOrSmaller]={columnCount:2},_mainLinksSection),linkGroup:{breakInside:"avoid-column",paddingBottom:mainLinkHeight},socialMediaContainer:(_socialMediaContainer={},_socialMediaContainer[mediaQueries.smOrSmaller]={marginTop:verticalSpacingBase},_socialMediaContainer),socialIconLink:{color:_wonderBlocksColorV2.default.white,opacity:.6,":not(:first-child)":{marginLeft:8},":hover":{opacity:1},display:"inline-block",height:24,width:24},bottomLink:(_bottomLink={":not(:first-child)":{marginLeft:16}},_bottomLink[mediaQueries.smOrSmaller]={":not(:first-child)":{marginLeft:0},marginTop:6,lineHeight:1.5},_bottomLink),languagePickerContainer:(_languagePickerContai={position:"absolute",left:0,bottom:verticalSpacingBase},_languagePickerContai[mediaQueries.smOrSmaller]={width:"100%",textAlign:"center"},_languagePickerContai),languagePickerInnerContainer:{display:"inline-block",position:"relative",marginLeft:_wonderBlocksSpacingV2.default.small},languagePicker:babelHelpers.extends({},globalStyles.typography.labelSmall,{border:0,color:_wonderBlocksColorV2.default.white,borderRadius:4,height:26,lineHeight:"27px",padding:"0 12px",backgroundColor:"#021e39",appearance:"none","::-ms-expand":{display:"none"}}),languagePickerIconDown:{position:"absolute",right:8,top:10,pointerEvents:"none"},languagePickerButton:{marginLeft:_wonderBlocksSpacingV2.default.small}})
module.exports=Footer

});
KAdefine("javascript/page-package/footer-attribution.jsx", function(require, module, exports) {
var _root,_babelHelpers$extends,_desktopImage,_tabletImage,_mobileImage
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var FooterAttribution=function e(a){return React.createElement("div",{className:(0,_aphrodite.css)(styles.root,!a.imageBaselineAligned&&styles.verticalCenter)},React.createElement("div",{className:(0,_aphrodite.css)(styles.tagline,a.imageBaselineAligned&&styles.baslineAligned),dangerouslySetInnerHTML:{__html:a.taglineHtml}}),React.createElement("img",{className:(0,_aphrodite.css)(styles.desktopImage),alt:a.imageCaption,src:(0,_staticUrl2.default)(a.imageUrl)}),React.createElement("img",{className:(0,_aphrodite.css)(styles.tabletImage),alt:a.imageCaption,src:(0,_staticUrl2.default)(a.tabletImageUrl||a.mobileImageUrl||a.imageUrl)}),React.createElement("img",{className:(0,_aphrodite.css)(styles.mobileImage),alt:a.imageCaption,src:(0,_staticUrl2.default)(a.mobileImageUrl||a.tabletImageUrl||a.imageUrl)}))}
var styles=_aphrodite.StyleSheet.create({root:(_root={display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"36px 0"},_root[_mediaQueries2.default.smOrSmaller]={flexDirection:"column",justifyContent:"initial",alignItems:"center",textAlign:"center"},_root),verticalCenter:{alignItems:"center"},tagline:babelHelpers.extends({},_globalStyles2.default.typography.bodyLarge,(_babelHelpers$extends={color:_globalStyles2.default.colors.white,marginRight:12},_babelHelpers$extends[_mediaQueries2.default.smOrSmaller]={marginRight:0},_babelHelpers$extends[_mediaQueries2.default.xs]=babelHelpers.extends({},_globalStyles2.default.typography.bodySmall),_babelHelpers$extends)),baslineAligned:{marginRight:8},desktopImage:(_desktopImage={display:"block"},_desktopImage[_mediaQueries2.default.smOrSmaller]={display:"none"},_desktopImage),tabletImage:(_tabletImage={display:"none",marginTop:12},_tabletImage[_mediaQueries2.default.smOrSmaller]={display:"block"},_tabletImage[_mediaQueries2.default.xsOrSmaller]={display:"none"},_tabletImage),mobileImage:(_mobileImage={display:"none",marginTop:12},_mobileImage[_mediaQueries2.default.xsOrSmaller]={display:"block"},_mobileImage)})
module.exports=FooterAttribution

});
KAdefine("javascript/page-package/dropdown-button.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var PropTypes=require("prop-types")
var DropdownButton=function(e){babelHelpers.inherits(r,e)
function r(){var n,t,o
babelHelpers.classCallCheck(this,r)
for(var p=arguments.length,s=Array(p),a=0;a<p;a++){s[a]=arguments[a]}return o=(n=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),t),t.handleKeyDown=function(e){var r=t.props,n=r.onClick,o=r.onEscape,p=r.onArrowDown,s=r.onArrowUp
switch(e.key){case"Enter":case" ":e.preventDefault()
n()
return
case"Escape":e.preventDefault()
o()
return
case"Tab":o()
return
case"ArrowDown":p(e)
return
case"ArrowUp":s(e)
return}},n),babelHelpers.possibleConstructorReturn(t,o)}r.prototype.render=function e(){return React.createElement("button",{ref:this.props.innerRef,"data-test-id":this.props.testId,className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.button].concat(this.props.buttonStyles)),"aria-expanded":this.props.dropdownIsOpen,onClick:this.props.onClick,onKeyDown:this.handleKeyDown},this.props.children)}
return r}(_react.Component)
DropdownButton.propTypes={dropdownIsOpen:PropTypes.bool,innerRef:PropTypes.func,buttonStyles:PropTypes.arrayOf(PropTypes.any),children:PropTypes.node,onClick:PropTypes.func,onEscape:PropTypes.func.isRequired,onArrowDown:PropTypes.func.isRequired,onArrowUp:PropTypes.func.isRequired,testId:PropTypes.string}
DropdownButton.defaultProps={innerRef:function e(){},buttonStyles:[],onClick:function e(){},onEscape:function e(){},onArrowDown:function e(){}}
var styles=_aphrodite.StyleSheet.create({notAButton:{backgroundColor:"transparent",border:"none",padding:"none"},button:{alignItems:"center",display:"flex",justifyContent:"center",paddingLeft:0,paddingRight:0,textDecoration:"none"}})
module.exports=DropdownButton

});
KAdefine("javascript/page-package/header-dropdown.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var HeaderDropdown=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r={className:_aphrodite.css.apply(undefined,[styles.dropdown,this.props.visible&&styles.dropdownOpen,this.props.hasBorder&&styles.dropdownBorder].concat(this.props.dropdownStyles)),id:this.props.id,"data-test-id":this.props.testId}
return this.props.hasDivWrapper?_react2.default.createElement("div",r,this.props.children):_react2.default.createElement("ul",r,this.props.children)}
return r}(_react.Component)
HeaderDropdown.propTypes={id:_propTypes2.default.string,children:_propTypes2.default.node,dropdownStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),hasBorder:_propTypes2.default.bool,visible:_propTypes2.default.bool,testId:_propTypes2.default.string,hasDivWrapper:_propTypes2.default.bool}
HeaderDropdown.defaultProps={visible:false,hasBorder:true,hasDivWrapper:false,dropdownStyles:[]}
var styles=_aphrodite.StyleSheet.create({dropdown:{display:"none",position:"absolute",zIndex:_constants2.default.zindexDropdown},dropdownOpen:{display:"block"},dropdownBorder:{border:"1px solid "+_constants2.default.grayLighter,boxShadow:"0 5px 8px rgba(0, 0, 0, 0.5)"}})
module.exports=HeaderDropdown

});
KAdefine("javascript/page-package/header-logo.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksLinkV=require("@khanacademy/wonder-blocks-link-v3")
var _wonderBlocksLinkV2=babelHelpers.interopRequireDefault(_wonderBlocksLinkV)
var HeaderLogo=function(e){babelHelpers.inherits(a,e)
function a(){var r,t,l
babelHelpers.classCallCheck(this,a)
for(var o=arguments.length,c=Array(o),n=0;n<o;n++){c[n]=arguments[n]}return l=(r=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(c))),t),t.renderSvg=function(){return _react2.default.createElement("svg",{className:(0,_aphrodite.css)(styles.logoSvg),"aria-hidden":true,width:"176px",height:"28px",viewBox:"0 0 176 28"},_react2.default.createElement("path",{d:"M33.66,6.5A.54.54,0,0,1,34.21,6h2a.55.55,0,0,1,.55.55v6.2l5.79-6.52A.53.53,0,0,1,43,6h2.3a.48.48,0,0,1,.36.82l-6,6.75,6.43,7.69a.51.51,0,0,1-.41.81h-2.5a.55.55,0,0,1-.42-.16l-6-7.4v7a.56.56,0,0,1-.55.56h-2a.55.55,0,0,1-.55-.56Z"}),_react2.default.createElement("path",{d:"M47.78,6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5v5.63a4.07,4.07,0,0,1,2.7-.9c3.38,0,4.3,2.34,4.3,5v5.32a.53.53,0,0,1-.51.51H55.28a.51.51,0,0,1-.5-.51V16.16c0-1.47-.67-2.36-1.93-2.36a2.18,2.18,0,0,0-2.2,1.86v5.85c0,.3-.14.51-.56.51H48.28a.52.52,0,0,1-.5-.51Z"}),_react2.default.createElement("path",{d:"M63.48,15.31a7.7,7.7,0,0,1,2,.3c0-1.35-.34-2-1.47-2a13.49,13.49,0,0,0-3,.39c-.35.12-.55-.13-.6-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.31,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.51.51h-.78c-.18,0-.32-.07-.46-.37l-.3-.71a4.66,4.66,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C59.25,16.76,60.79,15.31,63.48,15.31Zm.07,4.82A2.27,2.27,0,0,0,65.45,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.4,1.4,0,0,0,63.55,20.13Z"}),_react2.default.createElement("path",{d:"M70.59,11.92a.51.51,0,0,1,.51-.51H72a.42.42,0,0,1,.44.32l.39,1a4.26,4.26,0,0,1,3.42-1.54c3.37,0,4.24,2.27,4.24,4.84v5.49A.52.52,0,0,1,80,22H78.1a.51.51,0,0,1-.51-.51V16c0-1.37-.55-2.22-1.83-2.22a2.34,2.34,0,0,0-2.3,1.65v6.06c0,.39-.16.51-.66.51H71.1a.53.53,0,0,1-.51-.51Z"}),_react2.default.createElement("path",{d:"M85.89,21.42,93,6a.4.4,0,0,1,.39-.25h.23A.39.39,0,0,1,94,6l7.07,15.45a.41.41,0,0,1-.39.6h-2a.66.66,0,0,1-.67-.46l-1.12-2.48H90.07l-1.13,2.48a.69.69,0,0,1-.66.46h-2A.4.4,0,0,1,85.89,21.42Zm9.91-4.89-2.29-5.05h-.07l-2.25,5.05Z"}),_react2.default.createElement("path",{d:"M107,11.18A5.24,5.24,0,0,1,111,13c.23.23.12.53-.11.76l-1,1.06c-.23.25-.48.13-.69-.07a2.84,2.84,0,0,0-2.11-.92,2.78,2.78,0,0,0-2.8,2.91,2.77,2.77,0,0,0,2.78,2.94,2.81,2.81,0,0,0,2.25-1.17.5.5,0,0,1,.66-.07l1,.87c.25.23.37.49.18.76a4.75,4.75,0,0,1-4.2,2.23,5.55,5.55,0,1,1,0-11.09Z"}),_react2.default.createElement("path",{d:"M116.83,15.31a7.82,7.82,0,0,1,2,.3c0-1.35-.35-2-1.47-2a13.5,13.5,0,0,0-3,.39c-.34.12-.55-.13-.59-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.3,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.5.51h-.78c-.19,0-.32-.07-.46-.37l-.3-.71a4.68,4.68,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C112.61,16.76,114.15,15.31,116.83,15.31Zm.07,4.82A2.29,2.29,0,0,0,118.81,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.39,1.39,0,0,0,116.9,20.13Z"}),_react2.default.createElement("path",{d:"M128.62,11.18a7.67,7.67,0,0,1,2.55.44V6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5V21.51a.51.51,0,0,1-.51.51h-.85c-.25,0-.41-.21-.5-.51l-.28-.83a4.55,4.55,0,0,1-3.46,1.59c-2.9,0-5.08-2.34-5.08-5.56A5.21,5.21,0,0,1,128.62,11.18Zm2.55,3.22a4.18,4.18,0,0,0-2.21-.6,2.68,2.68,0,0,0-2.64,2.91c0,1.5.85,2.94,2.51,2.94a2.43,2.43,0,0,0,2.34-1.47Z"}),_react2.default.createElement("path",{d:"M141.22,11.18a4.75,4.75,0,0,1,4.87,4.91c0,.16,0,.53-.05.69a.53.53,0,0,1-.5.48h-6.8a2.55,2.55,0,0,0,2.64,2.46,3.49,3.49,0,0,0,2.27-.78c.26-.21.53-.23.69,0l.9,1.19a.45.45,0,0,1-.05.69,6,6,0,0,1-3.95,1.45,5.37,5.37,0,0,1-5.37-5.56A5.37,5.37,0,0,1,141.22,11.18Zm2,4.2a1.94,1.94,0,0,0-2-1.83,2.11,2.11,0,0,0-2.25,1.83Z"}),_react2.default.createElement("path",{d:"M147.79,11.92a.51.51,0,0,1,.5-.51h.83a.4.4,0,0,1,.43.3l.39,1a4,4,0,0,1,3.24-1.54,3.61,3.61,0,0,1,3.17,1.61,4.53,4.53,0,0,1,3.42-1.61c3.39,0,4.2,2.16,4.2,4.91v5.42a.52.52,0,0,1-.53.51H161.6a.51.51,0,0,1-.5-.51V16c0-1.37-.51-2.22-1.84-2.22a2,2,0,0,0-2,1.1s0,.53,0,1v5.6a.52.52,0,0,1-.5.51H155a.5.5,0,0,1-.51-.51V16c0-1.37-.39-2.22-1.74-2.22a2.1,2.1,0,0,0-2,1.65v6.06a.52.52,0,0,1-.5.51h-1.86a.52.52,0,0,1-.5-.51Z"}),_react2.default.createElement("path",{d:"M165.07,12.1a.47.47,0,0,1,.46-.69h2.2a.42.42,0,0,1,.44.3l1.9,6.33h.05l2.41-6.33c.16-.28.34-.3.67-.3h2a.47.47,0,0,1,.46.69l-6.25,15.06a.53.53,0,0,1-.46.32h-2.2a.48.48,0,0,1-.46-.71l2.13-5.37Z"}),_react2.default.createElement("path",{fill:"#14bf96",d:"M2.31,5.8A3.56,3.56,0,0,0,.66,8.6V19.4a3.56,3.56,0,0,0,1.65,2.8L12,27.62a3.75,3.75,0,0,0,3.3,0L25,22.2a3.56,3.56,0,0,0,1.65-2.8V8.6A3.56,3.56,0,0,0,25,5.8L15.31.38a3.75,3.75,0,0,0-3.3,0Z"}),_react2.default.createElement("path",{fill:"#ffffff",d:"M23.61,11.32c-5.38,0-9.4,4.46-9.4,9.93v.23H13.13v-.23c0-5.47-4-9.91-9.42-9.93,0,.34,0,.69,0,1a9.91,9.91,0,0,0,6.4,9.32,10.47,10.47,0,0,0,3.59.64,10.64,10.64,0,0,0,3.62-.64,9.92,9.92,0,0,0,6.39-9.32C23.66,12,23.64,11.66,23.61,11.32Z"}),_react2.default.createElement("circle",{fill:"#ffffff",cx:"13.66",cy:"8.74",r:"3"}))},r),babelHelpers.possibleConstructorReturn(t,l)}a.prototype.render=function e(){return _react2.default.createElement(_wonderBlocksLinkV2.default,babelHelpers.extends({},this.props.linkAttributes,{"data-test-id":"header-logo",href:"/","aria-label":"Khan Academy",style:[this.props.logoStyles,styles.link,this.props.transparent&&styles.transparent],onClick:this.props.onClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),this.renderSvg())}
return a}(_react2.default.Component)
HeaderLogo.propTypes={linkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),logoStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),onClick:_propTypes2.default.func,transparent:_propTypes2.default.bool}
HeaderLogo.defaultProps={onClick:function e(){}}
var styles=_aphrodite.StyleSheet.create({link:{color:_wonderBlocksColorV2.default.darkBlue,":hover":{color:_wonderBlocksColorV2.default.blue}},transparent:{color:_wonderBlocksColorV2.default.white,"@media print":{color:_wonderBlocksColorV2.default.darkBlue}},logoSvg:{width:175,fill:"currentColor"}})
module.exports=HeaderLogo

});
KAdefine("javascript/page-package/notifications-list.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Spinner=require("../shared-components-package/spinner.jsx")
var i18n=require("../shared-package/i18n.js")
var NotificationsList=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var i=babelHelpers.possibleConstructorReturn(this,e.call(this))
i.state={ReadableNotification:null}
i._hasUnmounted=false
i.navigableChildren=[]
return i}t.prototype.componentDidMount=function e(){var t=this
require.dynimport("../notifications-package/readable-notification.jsx").then(function(e){return e.default}).then(function(e){if(!t._hasUnmounted){t.setState({ReadableNotification:e})}})}
t.prototype.componentWillUnmount=function e(){this._hasUnmounted=true}
t.prototype.setLinkRef=function e(t,i){var n=this.props.captureFirstNavigableChildRef
this.navigableChildren[i]=t
if(i===0&&n){n(t)}}
t.prototype.getClickedNavigableIndex=function e(t){return parseInt(t.target.parentNode.getAttribute("data-navigable-index"))}
t.prototype.handleKeyDownLink=function e(t){var i=this.props.onDropdownClose
if(t.key==="Escape"){t.preventDefault()
if(i){this.onDropdownClose()}}else if(t.key==="Tab"){if(i){this.onDropdownClose()}}else if(t.key==="ArrowDown"){t.preventDefault()
var n=this.getClickedNavigableIndex(t)
if(n===this.navigableChildren.length-1){return}var a=this.navigableChildren[n+1]
a.firstChild.focus()}else if(t.key==="ArrowUp"){t.preventDefault()
var o=this.getClickedNavigableIndex(t)
if(o===0){this.props.navigateToNotificationsSwitch(t)}else{var r=this.navigableChildren[o-1]
r.firstChild.focus()}}}
t.prototype.render=function e(){var t=this
var i=this.props,n=i.loading,a=i.notifications,o=i.tabbable
var r=this.state.ReadableNotification
var s=a.length>0
var l=n||s&&!r
return React.createElement("ul",{"data-test-id":"notifications-dropdown"},!n&&!s&&React.createElement("li",{className:css(styles.empty)},i18n._("No notifications. You can get back to learning!")),r&&a.map(function(e,i){return React.createElement("li",{key:i},React.createElement(r,babelHelpers.extends({},e,{innerRef:function e(n){return t.setLinkRef(n,i)},onKeyDown:function e(i){return t.handleKeyDownLink(i)},indexInNotificationsList:i,tabbable:o})))}),l&&React.createElement("li",{className:css(styles.empty,s&&styles.loadingMore)},React.createElement(Spinner,null)))}
return t}(React.Component)
NotificationsList.propTypes={loading:PropTypes.bool,notifications:PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,onDropdownClose:PropTypes.func,captureFirstNavigableChildRef:PropTypes.func,navigateToNotificationsSwitch:PropTypes.func,tabbable:PropTypes.bool}
NotificationsList.getDefaultProps={loading:false,notifications:[],onDropdownClose:function e(){},captureFirstNavigableChildRef:function e(){},navigateToNotificationsSwitch:function e(){}}
var styles=StyleSheet.create({empty:{alignItems:"center",display:"flex",height:150,justifyContent:"center"},loadingMore:{height:18}})
module.exports=NotificationsList

});
KAdefine("javascript/page-package/notifications-switch.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _iconAngleBracketLeft=require("../shared-styles-package/icon.angleBracketLeft.js")
var _iconAngleBracketLeft2=babelHelpers.interopRequireDefault(_iconAngleBracketLeft)
var i18n=require("../shared-package/i18n.js")
var NotificationsSwitch=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),n=0;n<l;n++){s[n]=arguments[n]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),a),a.handleClick=function(e){var t=a.props.onClick
if(t){e.preventDefault()
t()}},a.handleKeyDown=function(e){var t=a.props,r=t.onClick,o=t.onEscape,l=t.onArrowDown,s=t.onArrowUp
if((e.key==="Enter"||e.key===" ")&&r){e.preventDefault()
r()}else if(e.key==="Escape"&&o){e.preventDefault()
o()}else if(e.key==="Tab"&&o){o()}else if(e.key==="ArrowDown"&&l){e.preventDefault()
l()}else if(e.key==="ArrowUp"&&s){e.preventDefault()
s()}},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.render=function e(){var t=this.props,r=t.buttonStyles,a=t.direction,o=t.notificationCount
return _react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.listItem)},_react2.default.createElement("button",{ref:this.props.innerRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.switch].concat(r)),"data-test-id":"header-notifications-switch"},a==="left"&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchArrow,styles.switchArrowLeft)},_react2.default.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default,size:15,color:_globalStyles2.default.colors.gray17})),_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchText)},i18n._("Notifications"),_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.dot)},"·"),o),a==="right"&&_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.switchArrow,styles.switchArrowRight)},_react2.default.createElement(_icon2.default,{icon:_iconAngleBracketLeft2.default,size:15,color:_globalStyles2.default.colors.gray17}))))}
return t}(_react.Component)
NotificationsSwitch.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),direction:_propTypes2.default.oneOf(["left","right"]).isRequired,notificationCount:_propTypes2.default.number.isRequired,onClick:_propTypes2.default.func,onEscape:_propTypes2.default.func,onArrowDown:_propTypes2.default.func,onArrowUp:_propTypes2.default.func,innerRef:_propTypes2.default.func}
var styles=_aphrodite.StyleSheet.create({notAButton:{background:"transparent",border:"none",padding:"none",width:"100%",textAlign:"left"},dot:{padding:"0 7px"},listItem:{paddingTop:4,backgroundColor:_globalStyles2.default.colors.white,listStyleType:"none"},switch:{alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",boxSizing:"border-box",color:"inherit",display:"flex",justifyContent:"space-around",padding:"8px 16px 12px 16px",textDecoration:"none"},switchText:babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmallBold,{fontSize:15,fontWeight:600,lineHeight:"22px",flexGrow:1}),switchArrow:{alignItems:"center",display:"flex",justifyContent:"center"},switchArrowLeft:{marginRight:24},switchArrowRight:{transform:"scaleX(-1)"}})
module.exports=NotificationsSwitch

});
KAdefine("javascript/page-package/user-dropdown.jsx", function(require, module, exports) {
var _wrapper,_shortTrigger
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _dropdownButton=require("./dropdown-button.jsx")
var _dropdownButton2=babelHelpers.interopRequireDefault(_dropdownButton)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _headerDropdown=require("./header-dropdown.jsx")
var _headerDropdown2=babelHelpers.interopRequireDefault(_headerDropdown)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _notificationsList=require("./notifications-list.jsx")
var _notificationsList2=babelHelpers.interopRequireDefault(_notificationsList)
var _notificationsSwitch=require("./notifications-switch.jsx")
var _notificationsSwitch2=babelHelpers.interopRequireDefault(_notificationsSwitch)
var _userSettings=require("./user-settings.jsx")
var _userSettings2=babelHelpers.interopRequireDefault(_userSettings)
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var UserDropdown=function(e){babelHelpers.inherits(o,e)
function o(){var t,i,r
babelHelpers.classCallCheck(this,o)
for(var a=arguments.length,n=Array(a),s=0;s<a;s++){n[s]=arguments[s]}return r=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),i),i.state={showNotifications:!!i.props.showNotifications},i.dropdownButton=null,i.notificationsSwitch=null,i.focusDropdownButton=function(){if(i.dropdownButton){i.dropdownButton.focus()}},i.handleDropdownClose=function(){i.focusDropdownButton()
i.props.onDropdownClose()},i.handleScroll=function(e){if(!i.state.showNotifications){return}var o=e.target,t=o.scrollHeight,r=o.clientHeight,a=o.scrollTop
var n=2
if(a+r>=t-n){i.props.onScrollToBottom()
e.preventDefault()}},i.handleNavigateToNotificationsSwitch=function(e){if(i.props.showDropdown&&i.notificationsSwitch){e.preventDefault()
i.notificationsSwitch.focus()}else if(!i.props.showDropdown){e.preventDefault()
i.props.onDropdownToggle()}},i.handleToggleClick=function(){i.setState({showNotifications:!i.state.showNotifications})},i.handleArrowDownNotificationsSwitch=function(){if(i.firstNavigableChild&&i.firstNavigableChild.firstChild){i.firstNavigableChild.firstChild.focus()}},i.handleArrowUpNotificationsSwitch=function(){i.handleDropdownClose()},i.handleArrowClose=function(e){e.preventDefault()
i.handleDropdownClose()},t),babelHelpers.possibleConstructorReturn(i,r)}o.prototype.componentDidMount=function e(){if(this.props.showNotifications){this.props.onOpenNotifications()}}
o.prototype.componentDidUpdate=function e(o,t){if(!t.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()
_bigbingo2.default.markConversion("global_nav_open_notifications",{view:"desktop"})}}
o.prototype.render=function e(){var o=this
var t=this.state.showNotifications
var i=this.props,r=i.profileData,a=i.newNotificationCount
var n=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
var s=a>9?"9+":a
return _react2.default.createElement("div",{role:"navigation",className:(0,_aphrodite.css)(styles.wrapper)},_react2.default.createElement(_dropdownButton2.default,{dropdownIsOpen:this.props.showDropdown,innerRef:function e(t){return o.dropdownButton=t},buttonStyles:this.props.buttonStyles,onClick:this.props.onDropdownToggle,onArrowDown:this.handleNavigateToNotificationsSwitch,onArrowUp:this.handleArrowClose,onEscape:this.handleDropdownClose,testId:"user-dropdown"},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.trigger,n&&styles.shortTrigger),"data-test-id":"header-profile-button"},_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.nicknameDisplay)},r.nickName),a>0&&_react2.default.createElement("div",{"aria-label":i18n.ngettext("%(num)s new notification","%(num)s new notifications",a),className:(0,_aphrodite.css)(styles.notificationsBadge)},s))),_react2.default.createElement(_headerDropdown2.default,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown]},_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function e(t){return o.notificationsSwitch=t},direction:t?"left":"right",onClick:this.handleToggleClick,onArrowDown:this.handleArrowDownNotificationsSwitch,onArrowUp:this.handleArrowUpNotificationsSwitch,onEscape:this.handleDropdownClose,notificationCount:a,buttonStyles:[styles.notificationsSwitch]}),_react2.default.createElement("li",{className:(0,_aphrodite.css)(t&&styles.scrollDropdown),onScroll:this.handleScroll},t?_react2.default.createElement(_notificationsList2.default,{notifications:this.props.notifications,loading:this.props.loading,onDropdownClose:this.handleDropdownClose,navigateToNotificationsSwitch:this.handleNavigateToNotificationsSwitch,captureFirstNavigableChildRef:function e(t){return o.firstNavigableChild=t}}):_react2.default.createElement(_userSettings2.default,babelHelpers.extends({signUpUrl:this.props.signUpUrl},this.props.profileData,{profileLinkAttributes:_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"desktop"}}]),onCloseDropdown:this.handleDropdownClose,navigateToNotificationsSwitch:this.handleNavigateToNotificationsSwitch,captureFirstNavigableChildRef:function e(t){return o.firstNavigableChild=t}})))))}
return o}(_react.Component)
UserDropdown.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),currentUrl:_propTypes2.default.string,loading:_propTypes2.default.bool.isRequired,newNotificationCount:_propTypes2.default.number.isRequired,notifications:_notificationsList2.default.propTypes.notifications,onDropdownToggle:_propTypes2.default.func,onDropdownClose:_propTypes2.default.func,onOpenNotifications:_propTypes2.default.func,onScrollToBottom:_propTypes2.default.func,profileData:_propTypes2.default.shape(_userSettings2.default.propTypes),showDropdown:_propTypes2.default.bool,showNotifications:_propTypes2.default.bool,signUpUrl:_propTypes2.default.string,teaser:_propTypes2.default.string}
UserDropdown.defaultProps={showDropdown:false,onDropdownToggle:function e(){},onDropdownClose:function e(){},onOpenNotifications:function e(){},onScrollToBottom:function e(){},buttonStyles:[]}
var BADGE_WIDTH=18
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"inline-block",fontFamily:_globalStyles2.default.fonts.regular,height:"100%",position:"relative"},_wrapper[_mediaQueries2.default.smOrSmaller]={display:"none"},_wrapper),trigger:{maxWidth:205,position:"relative",whiteSpace:"nowrap"},shortTrigger:(_shortTrigger={},_shortTrigger[_mediaQueries2.default.mdOrLarger]={maxWidth:115},_shortTrigger[_mediaQueries2.default.lgOrLarger]={maxWidth:205},_shortTrigger),nicknameDisplay:{maxWidth:"100%",display:"block",overflow:"hidden",textOverflow:"ellipsis"},notificationsBadge:babelHelpers.extends({},_globalStyles2.default.typography.labelSmall,{backgroundColor:_wonderBlocksColorV2.default.blue,borderRadius:BADGE_WIDTH/2,boxSizing:"border-box",color:_globalStyles2.default.colors.white,height:BADGE_WIDTH,lineHeight:BADGE_WIDTH+"px",paddingTop:1,position:"absolute",right:-10,textAlign:"center",top:-7,width:BADGE_WIDTH}),dropdown:{backgroundColor:_globalStyles2.default.colors.gray98,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:3,right:-8,width:300},scrollDropdown:{height:220,overflowY:"scroll"},notificationsSwitch:{backgroundColor:_globalStyles2.default.colors.white,height:45,":hover":{backgroundColor:_globalStyles2.default.colors.gray95}}})
module.exports=UserDropdown

});
KAdefine("javascript/page-package/user-settings.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _absoluteLinks=require("../shared-package/absolute-links.js")
var _absoluteLinks2=babelHelpers.interopRequireDefault(_absoluteLinks)
var _facebookutil=require("../shared-package/facebookutil.js")
var _facebookutil2=babelHelpers.interopRequireDefault(_facebookutil)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _urls=require("./urls.js")
var _urls2=babelHelpers.interopRequireDefault(_urls)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _constants=require("../class-constants-package/constants.js")
var LocalStore=require("../shared-package/local-store.js")
var i18n=require("../shared-package/i18n.js")
var UserSettings=function(e){babelHelpers.inherits(t,e)
function t(){var a,n,r
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),o=0;o<l;o++){i[o]=arguments[o]}return r=(a=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={logoutUrl:""},n.navigableChildren=[],n.setLinkRef=function(e,t){n.navigableChildren[t]=e
if(t===0&&n.props.captureFirstNavigableChildRef){n.props.captureFirstNavigableChildRef(e)}},n.getNavigableIndex=function(e){var t=n.props,a=t.showSignUpToSave,r=t.showLearningHome,l=t.showCoachingLinks,i=t.showSettings
var o=0
if(e==="signIn"){return o}else{if(a){o++}}if(e==="profile"){return o}else{o++}if(e==="learningHome"){return o}else{if(r){o++}}if(e==="coachDashboard"){return o}else{if(l){o++}}if(e==="parentDashboard"){return o}else{if(l){o++}}if(e==="settings"){return o}else{if(i){o++}}if(e==="help"){return o}else{o++}return o},n.getClickedNavigableIndex=function(e){var t=e.target.parentNode.getAttribute("data-navigable-index")
return t===undefined?null:parseInt(t)},n.handleLogoutClick=function(e){e.preventDefault()
_constants.CLASS_CONSTANTS.forEach(function(e){LocalStore.del(e)})
var t=_urls2.default.getLogoutURL(n.props.currentUrl)
_facebookutil2.default.logout(function(){window.location=t})},n.logSignInClicked=function(){_bigbingo2.default.markConversion("global_nav_phantom_signin_clicked")},n.handleArrowDownLink=function(e){e.preventDefault()
var t=n.getClickedNavigableIndex(e)
if(t===n.navigableChildren.length-1){return}var a=n.navigableChildren[t+1]
a.firstChild.focus()},n.handleArrowUpLink=function(e){e.preventDefault()
var t=n.getClickedNavigableIndex(e)
if(t===0){n.props.navigateToNotificationsSwitch(e)}else{var a=n.navigableChildren[t-1]
a.firstChild.focus()}},n.handleLinkClick=function(e,t){var a=n.props.onCloseDropdown
e.preventDefault()
window.location.href=t
if(a){a()}},n.handleKeyDownLink=function(e,t){var a=n.props.onCloseDropdown
if(e.key==="Enter"||e.key===" "){n.handleLinkClick(e,t)}else if(e.key==="Escape"){e.preventDefault()
if(a){a()}}else if(e.key==="Tab"){if(a){a()}}else if(e.key==="ArrowDown"){n.handleArrowDownLink(e)}else if(e.key==="ArrowUp"){n.handleArrowUpLink(e)}},n.handleKeyDownLogSignIn=function(e){var t=n.props.profileUrl
if(e.key==="Enter"||e.key===" "){n.logSignInClicked(e)}n.handleKeyDownLink(e,t)},a),babelHelpers.possibleConstructorReturn(n,r)}t.prototype.componentDidMount=function e(){this.setState({logoutUrl:_urls2.default.getLogoutURL(this.props.currentUrl)})}
t.prototype.render=function e(){var t=this
var a=this.props,n=a.showSettings,r=a.showSignUpToSave,l=a.showLearningHome,i=a.showCoachingLinks,o=a.signUpUrl,s=a.profileUrl,u=a.isPhantom,d=a.tabbable
var c=_absoluteLinks2.default.safeLinkTo("https://khanacademy.zendesk.com")
var p="/coach/dashboard"
var f="/?learn=1"
return _react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.menu),"data-test-id":"header-user-settings"},r&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("signIn"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("signIn"))}},_react2.default.createElement("a",{href:o,className:(0,_aphrodite.css)(styles.item,styles.itemFirst,styles.signIn),onClick:this.logSignInClicked,onKeyDown:this.handleKeyDownLogSignIn,tabIndex:d?0:-1},i18n._("Sign in to claim your points"))),_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("profile"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("profile"))}},_react2.default.createElement("a",babelHelpers.extends({},this.props.profileLinkAttributes,{href:s,onKeyDown:function e(a){return t.handleKeyDownLink(a,s)},className:(0,_aphrodite.css)(styles.item,!r&&styles.itemFirst),tabIndex:d?0:-1,ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("profile"))},"data-test-id":"user-settings-profile-link"}),i18n._("Profile"))),l&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("learningHome"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("learningHome"))}},_react2.default.createElement(_clientLink2.default,{to:"/?learn=1",style:styles.item,onClick:this.props.onCloseDropdown,onKeyDown:function e(a){return t.handleKeyDownLink(a,f)},tabIndex:d?0:-1},i18n._("Learning home"))),i&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("coachDashboard"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("coachDashboard"))}},_react2.default.createElement(_clientLink2.default,{to:"/coach/dashboard",style:styles.item,onClick:this.props.onCloseDropdown,onKeyDown:function e(a){return t.handleKeyDownLink(a,p)},tabIndex:d?0:-1},i18n._("Teacher dashboard"))),i&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("parentDashboard"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("parentDashboard"))}},_react2.default.createElement("a",{href:"/parent",className:(0,_aphrodite.css)(styles.item),tabIndex:d?0:-1,onKeyDown:function e(a){return t.handleKeyDownLink(a,"/parent")}},i18n._("Parent dashboard"))),n&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("settings"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("settings"))}},_react2.default.createElement("a",{href:"/settings/account",className:(0,_aphrodite.css)(styles.item),tabIndex:d?0:-1,onKeyDown:function e(a){return t.handleKeyDownLink(a,"/settings/account")}},i18n._("Settings"))),_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("help"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("help"))}},_react2.default.createElement("a",{href:c,className:(0,_aphrodite.css)(styles.item),tabIndex:d?0:-1,onKeyDown:function e(a){return t.handleKeyDownLink(a,c)}},i18n._("Help"))),!u&&_react2.default.createElement("li",{"data-navigable-index":this.getNavigableIndex("logout"),ref:function e(a){return t.setLinkRef(a,t.getNavigableIndex("logout"))}},_react2.default.createElement("a",{className:(0,_aphrodite.css)(styles.item,styles.itemLast),onClick:this.handleLogoutClick,onKeyDown:function e(a){return t.handleKeyDownLink(a,t.state.logoutUrl)},href:this.state.logoutUrl,rel:"nofollow",tabIndex:d?0:-1,"data-test-id":"user-settings-logout-link"},i18n._("Log out"))))}
return t}(_react2.default.Component)
UserSettings.propTypes={currentUrl:_propTypes2.default.string,hasChildren:_propTypes2.default.bool,hasStudents:_propTypes2.default.bool,profileLinkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),profileUrl:_propTypes2.default.string.isRequired,showCoachingLinks:_propTypes2.default.bool,showLearningHome:_propTypes2.default.bool,showSettings:_propTypes2.default.bool,showSignUpToSave:_propTypes2.default.bool,signUpUrl:_propTypes2.default.string,isPhantom:_propTypes2.default.bool.isRequired,captureFirstNavigableChildRef:_propTypes2.default.func,onCloseDropdown:_propTypes2.default.func,navigateToNotificationsSwitch:_propTypes2.default.func,tabbable:_propTypes2.default.bool}
var styles=_aphrodite.StyleSheet.create({menu:babelHelpers.extends({},_globalStyles2.default.typography.bodyXsmallBold),item:{backgroundColor:_globalStyles2.default.colors.gray98,color:_globalStyles2.default.colors.gray17,display:"block",padding:"8px 16px",textDecoration:"none",":hover":{backgroundColor:_globalStyles2.default.colors.gray95,color:_wonderBlocksColorV2.default.blue,textDecoration:"none"}},itemFirst:{paddingTop:16},itemLast:{paddingBottom:12,marginBottom:4},signIn:{color:_globalStyles2.default.colors.kaGreen}})
module.exports=UserSettings

});
KAdefine("javascript/page-package/header-search-box.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var i18n=require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var _require=require("aphrodite"),css=_require.css
var BibliotronHeaderSearchBox=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,s=r.onEscape,a=r.SearchBox,o=r.searchInputStyles,p=r.searchFormStyles,i=r.spacer,t=r.suggestionSource
var n=i18n._("Search for courses, skills, and videos")
var c={searchSuggestion:t}
return React.createElement(a,{isBibliotron:true,inputClassName:css.apply(undefined,o),formClassName:css.apply(undefined,p),placeholder:n,dataSources:c,initiallyFocused:true,showGoogleResults:!KA.isZeroRated,extraFormArgs:{referer:window.location.pathname},spacer:i,onEscape:s})}
return r}(React.Component)
BibliotronHeaderSearchBox.propTypes={SearchBox:PropTypes.any.isRequired,onEscape:PropTypes.func.isRequired,searchFormStyles:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),searchInputStyles:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),spacer:PropTypes.node.isRequired,suggestionSource:PropTypes.shape({get:PropTypes.func.isRequired}).isRequired}
module.exports=BibliotronHeaderSearchBox

});
KAdefine("javascript/page-package/domain-utils.js", function(require, module, exports) {
var PropTypes=require("prop-types")
var i18n=require("../shared-package/i18n.js")
var domainObjectPropType=PropTypes.shape({translatedTitle:PropTypes.string.isRequired,icon:PropTypes.string,identifier:PropTypes.string.isRequired,href:PropTypes.string,numUntranslatedChildren:PropTypes.number.isRequired,children:PropTypes.arrayOf(PropTypes.shape({identifier:PropTypes.string.isRequired,translatedTitle:PropTypes.string.isRequired,translatedDescription:PropTypes.string,href:PropTypes.string.isRequired,missionSlug:PropTypes.string,gradeMenuTitle:PropTypes.string}).isRequired)})
var domainTransformers={math:function e(r,i){var n=r.childrenByGradeLevel
return["grades","secondary","fundamentals"].map(function(e){var r=n[e]
if(r){var t=r.children
if(e==="secondary"&&i){t=t.concat([{identifier:"all-of-math",translatedTitle:i18n._("All of math"),href:"/mission/math"}])}if(e==="grades"){t=t.map(function(e){return babelHelpers.extends({},e,{translatedTitle:e.gradeMenuTitle})})}return{identifier:e,title:r.header,children:t}}}).filter(function(e){return e})},humanities:function e(r){if(r.otherHumanitiesChildren&&r.artHistoryChildren){return[{identifier:"other-humanities",title:i18n._("Humanities"),children:r.otherHumanitiesChildren},{identifier:"art-history",title:i18n._("Art history"),children:r.artHistoryChildren}]}else{return domainTransformers["default"](r)}},"partner-content":function e(r){return[{identifier:"museum",title:i18n._("Museums"),children:r.museumChildren},{identifier:"other-partner-content",title:i18n._("Partners"),children:r.otherPartnerContentChildren}]},"test-prep":function e(r){return[{identifier:"sat-practice",title:i18n._("Official SAT Practice"),children:r.satChildren},{identifier:"other-test-prep-content",title:i18n._("Other tests"),children:r.otherTestPrepChildren}]},default:function e(r){return[{identifier:r.identifier,title:i18n._("Courses"),children:r.children}]}}
var transformDomainIntoSubgroups=function e(r,i){if(r.identifier in domainTransformers){return domainTransformers[r.identifier](r,i)}else{return domainTransformers["default"](r,i)}}
module.exports={transformDomainIntoSubgroups:transformDomainIntoSubgroups,domainObjectPropType:domainObjectPropType}

});
KAdefine("javascript/page-package/learn-menu.jsx", function(require, module, exports) {
var _wrapper
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _learnMenuContent=require("./learn-menu-content.jsx")
var _learnMenuContent2=babelHelpers.interopRequireDefault(_learnMenuContent)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _dropdownButton=require("./dropdown-button.jsx")
var _dropdownButton2=babelHelpers.interopRequireDefault(_dropdownButton)
var _headerDropdown=require("./header-dropdown.jsx")
var _headerDropdown2=babelHelpers.interopRequireDefault(_headerDropdown)
var i18n=require("../shared-package/i18n.js")
var dropdownIcon="M5,6L0,0L10,0"
var pullupIcon="M5,0L10,6L0,6"
var LearnMenu=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,n
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,l=Array(a),p=0;p<a;p++){l[p]=arguments[p]}return n=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),t),t.firstNavigableChild=null,t.handleLearnMenuClose=function(){if(t.dropdownButton){t.dropdownButton.focus()}t.props.onDropdownClose()},t.handleArrowDown=function(e){if(t.props.showDropdown&&t.firstNavigableChild&&t.firstNavigableChild.firstChild){e.preventDefault()
t.firstNavigableChild.firstChild.focus()}else if(!t.props.showDropdown){e.preventDefault()
t.props.onDropdownToggle()}},t.handleArrowUp=function(e){if(t.props.showDropdown){e.preventDefault()
t.props.onDropdownClose()}},o),babelHelpers.possibleConstructorReturn(t,n)}r.prototype.render=function e(){var r=this
if(this.props.domains.length===0){return _react2.default.createElement("div",null)}return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper)},_react2.default.createElement(_dropdownButton2.default,{onClick:this.props.onDropdownToggle,onEscape:this.props.onDropdownClose,onArrowDown:this.handleArrowDown,onArrowUp:this.handleArrowUp,buttonStyles:this.props.buttonStyles,testId:"learn-menu-dropdown",innerRef:function e(o){return r.dropdownButton=o}},_react2.default.createElement("span",{"data-learn-menu-trigger":true,"data-test-id":"learn-menu-button"},i18n._("Courses"),_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.triangle,this.props.transparent&&styles.transparentTriangle)},_react2.default.createElement(_icon2.default,{icon:this.props.showDropdown?pullupIcon:dropdownIcon,size:10})))),_react2.default.createElement(_headerDropdown2.default,{visible:this.props.showDropdown,hasBorder:false,dropdownStyles:[styles.dropdown,this.props.showWelcome&&styles.dropdownWelcome],hasDivWrapper:true,id:"header-dropdown"},_react2.default.createElement(_learnMenuContent2.default,{domains:this.props.domains,missionPercentages:this.props.missionPercentages,onClickLink:this.props.onDropdownToggle,onEscape:function e(){return r.handleLearnMenuClose()},ref:function e(o){return r.learnMenuContent=o},captureFirstNavigableChildRef:function e(o){return r.firstNavigableChild=o}})))}
return r}(_react2.default.Component)
LearnMenu.propTypes={buttonStyles:_propTypes2.default.arrayOf(_propTypes2.default.any),domains:_learnMenuContent2.default.propTypes.domains,missionPercentages:_propTypes2.default.objectOf(_propTypes2.default.number),onDropdownToggle:_propTypes2.default.func,onDropdownClose:_propTypes2.default.func,showDropdown:_propTypes2.default.bool,showWelcome:_propTypes2.default.bool,transparent:_propTypes2.default.bool}
LearnMenu.defaultProps={onDropdownToggle:function e(){},onDropdownClose:function e(){},showDropdown:false,transparent:false,buttonStyles:[]}
var styles=_aphrodite.StyleSheet.create({wrapper:(_wrapper={display:"inline-block",height:"100%",whiteSpace:"nowrap"},_wrapper[_mediaQueries2.default.smOrSmaller]={display:"none"},_wrapper),dropdown:{background:_globalStyles2.default.colors.gray98,borderBottom:"1px solid "+_globalStyles2.default.colors.gray85,borderTop:"1px solid "+_globalStyles2.default.colors.gray85,left:0,opacity:.99,width:"100%"},dropdownWelcome:{overflowY:"auto"},triangle:{marginLeft:6,position:"relative",top:3},transparentTriangle:{color:"rgba(255, 255, 255, 0.48)"}})
module.exports=LearnMenu

});
KAdefine("javascript/page-package/learn-menu-content.jsx", function(require, module, exports) {
var _domainsFiveColumns
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _domainUtils=require("./domain-utils.js")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var i18n=require("../shared-package/i18n.js")
var LearnMenuContent=function(e){babelHelpers.inherits(n,e)
function n(){var a,t,r
babelHelpers.classCallCheck(this,n)
for(var i=arguments.length,l=Array(i),o=0;o<i;o++){l[o]=arguments[o]}return r=(a=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),t),t.navigableChildren=[],t.setLinkRef=function(e,n){t.navigableChildren[n]=e
if(n===0){t.props.captureFirstNavigableChildRef(e)}},t.getNavigableIndex=function(e,n){if(n===null&&!e){return 0}var a=n!==null?e+1:e
var r=t.props.domains.slice(0,e)
var i=r.reduce(function(e,n){return e+=n.children.length},0)
var l=n||0
return a+i+l},t.getClickedNavigableIndex=function(e){return parseInt(e.target.parentNode.getAttribute("data-navigable-index"))},t.handleKeyDownLink=function(e,n){if(e.key==="Enter"||e.key===" "){e.preventDefault()
window.location.href=n
t.props.onClickLink()}else if(e.key==="Escape"){e.preventDefault()
t.props.onEscape()}else if(e.key==="Tab"){t.props.onEscape()}else if(e.key==="ArrowDown"){e.preventDefault()
var a=t.getClickedNavigableIndex(e)
if(a===t.navigableChildren.length-1){return}var r=t.navigableChildren[a+1]
r.firstChild.focus()}else if(e.key==="ArrowUp"){e.preventDefault()
var i=t.getClickedNavigableIndex(e)
if(i===0){t.props.onEscape()}else{var l=t.navigableChildren[i-1]
l.firstChild.focus()}}},t.isOnHomePage=function(){return window.location.pathname==="/"||window.location.pathname==="/welcome"},t.renderLink=function(e,n,a,r){var i=_ka2.default.getUserProfile()
var l=i&&!i.isPhantom()
var o=!l&&e.loggedOutHref?e.loggedOutHref:e.href
var s=t.props.missionPercentages
var d=s&&s[e.identifier]
var c=t.getNavigableIndex(r,n)
return _react2.default.createElement("li",{key:e.identifier,"data-navigable-index":c,ref:function e(n){return t.setLinkRef(n,c)}},_react2.default.createElement(_clientLink2.default,{onClick:t.props.onClickLink,onKeyDown:function e(n){return t.handleKeyDownLink(n,o)},to:o,forceServer:e.nonContentLink,tabIndex:-1,style:[styles.linkStyle],conversions:[{id:"global_nav_choose_subject",extra:{domain:a.identifier,subject:e.identifier,view:"desktop"}}],"aria-label":e.translatedTitle},_react2.default.createElement("span",null,e.translatedTitle),!!d&&_react2.default.createElement("span",{className:(0,_aphrodite.css)(styles.missionPercentage)},i18n.$_("%(missionPercentage)s%",{missionPercentage:d}))))},t.renderHeaderLink=function(e,n){if(!e.href){return e.translatedTitle}var a=t.getNavigableIndex(n,null)
return _react2.default.createElement("li",{"data-navigable-index":a,ref:function e(n){return t.setLinkRef(n,a)}},_react2.default.createElement(_clientLink2.default,{onClick:t.props.onClickLink,onKeyDown:function n(a){return t.handleKeyDownLink(a,e.href)},tabIndex:-1,to:e.href,style:[styles.headerLinkStyle],conversions:[{id:"global_nav_choose_domain",extra:{domain:e.identifier,view:"desktop"}}]},e.translatedTitle))},t.renderDomain=function(e,n){return _react2.default.createElement("li",{key:n},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.domain)},_react2.default.createElement("h2",{"data-test-learn-menu-domain":e.identifier,className:(0,_aphrodite.css)(styles.headerStyle)},t.renderHeaderLink(e,n)),_react2.default.createElement("ul",{className:(0,_aphrodite.css)(e.children.length&&styles.subjectsList)},e.children.map(function(a,r){return t.renderLink(a,r,e,n)}))))},a),babelHelpers.possibleConstructorReturn(t,r)}n.prototype.render=function e(){var n=this.props.domains.length>=7
return _react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.domains,n&&styles.domainsFiveColumns),"data-test-id":"learn-menu"},this.props.domains.map(this.renderDomain))}
return n}(_react.Component)
LearnMenuContent.propTypes={domains:_propTypes2.default.arrayOf(_domainUtils.domainObjectPropType).isRequired,missionPercentages:_propTypes2.default.objectOf(_propTypes2.default.number),onClickLink:_propTypes2.default.func,onEscape:_propTypes2.default.func,captureFirstNavigableChildRef:_propTypes2.default.func}
var linkFontSize=15
var linkLineHeight=1.75
var gapBetweenStackedDomains=Math.floor(linkFontSize*linkLineHeight)
var styles=_aphrodite.StyleSheet.create({domains:{boxSizing:"border-box",marginLeft:"auto",marginRight:"auto",maxWidth:1200,paddingLeft:20,paddingRight:20,paddingTop:28,paddingBottom:48-gapBetweenStackedDomains,columnCount:4},domainsFiveColumns:(_domainsFiveColumns={},_domainsFiveColumns[_mediaQueries2.default.xl]={columnCount:5},_domainsFiveColumns),domain:{display:"inline-block",marginBottom:gapBetweenStackedDomains-4,paddingTop:4,wordWrap:"break-word",width:"95%"},subjectsList:{borderTop:"1px solid "+_globalStyles2.default.colors.gray85,paddingTop:8},missionPercentage:{color:_globalStyles2.default.colors.gray68,marginLeft:8,textDecoration:"none"},linkStyle:{color:_wonderBlocksColorV2.default.offBlack,fontFamily:_globalStyles2.default.fonts.regular,fontSize:linkFontSize,lineHeight:linkLineHeight,textDecoration:"none",display:"inline-block",width:"100%",":hover":{textDecoration:"none"},":hover span:first-child":{textDecoration:"underline"}},headerStyle:{color:_wonderBlocksColorV2.default.offBlack64,fontFamily:"inherit",fontSize:linkFontSize,fontWeight:"bold",lineHeight:linkLineHeight,paddingBottom:8,marginBottom:0},headerLinkStyle:{color:_wonderBlocksColorV2.default.offBlack64,display:"inline-block",width:"100%"}})
module.exports=LearnMenuContent

});
KAdefine("javascript/page-package/responsive-nav-menu.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _propTypes=require("prop-types")
var _propTypes2=babelHelpers.interopRequireDefault(_propTypes)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _aphroditeCssTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var _aphroditeCssTransitionGroup2=babelHelpers.interopRequireDefault(_aphroditeCssTransitionGroup)
var _a11y=require("../shared-styles-package/a11y.js")
var _a11y2=babelHelpers.interopRequireDefault(_a11y)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var _clientLink=require("../components/client-link-package/client-link.jsx")
var _clientLink2=babelHelpers.interopRequireDefault(_clientLink)
var _facebookutil=require("../shared-package/facebookutil.js")
var _facebookutil2=babelHelpers.interopRequireDefault(_facebookutil)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _icon=require("../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _notificationsList=require("./notifications-list.jsx")
var _notificationsList2=babelHelpers.interopRequireDefault(_notificationsList)
var _notificationsSwitch=require("./notifications-switch.jsx")
var _notificationsSwitch2=babelHelpers.interopRequireDefault(_notificationsSwitch)
var _urls=require("./urls.js")
var _urls2=babelHelpers.interopRequireDefault(_urls)
var _constants=require("../shared-styles-package/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var _userSettings=require("./user-settings.jsx")
var _userSettings2=babelHelpers.interopRequireDefault(_userSettings)
var _domainUtils=require("./domain-utils.js")
var KA=require("../shared-package/ka.js")
var i18n=require("../shared-package/i18n.js")
var angleRightIcon={path:"M58.524 50.16q0 1.32-.968 2.288l-46.904 46.904q-.968.968-2.288.968t-2.376-.968l-5.016-5.104q-.968-.968-.968-2.288t.968-2.288l39.512-39.512-39.512-39.512q-.968-.968-.968-2.376t.968-2.288l5.016-5.016q.968-.968 2.376-.968t2.288.968l46.904 46.816q.968 1.056.968 2.376z",width:58.333,height:100}
var AccordionItem=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),s=0;s<o;s++){r[s]=arguments[s]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.state={linkAttributes:{},open:false},n.handleClick=function(e){var t=n.state.open
if(n.props.children){e.preventDefault()
t=!t
n.setState({open:t})}if(n.props.onClick){n.props.onClick(t,e)}},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function e(){var t=this.props,i=t.children,n=t.href,a=t.linkAttributes,o=t.trigger,r=t.triggerStyles
var s=this.state.open?_wonderBlocksColorV2.default.offblack:_globalStyles2.default.colors.gray76
var l=i?_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.navSectionIcon,this.state.open&&styles.navSectionIconOpen)},_react2.default.createElement(_icon2.default,{icon:angleRightIcon,size:12,color:s})):null
var c=n?_react2.default.createElement("a",babelHelpers.extends({},a,{className:_aphrodite.css.apply(undefined,[styles.navSectionTitle].concat(r)),href:n,onClick:this.handleClick}),o,l):_react2.default.createElement("button",babelHelpers.extends({},a,{className:_aphrodite.css.apply(undefined,[styles.notAButton,styles.navSectionTitle].concat(r)),onClick:this.handleClick}),o,l)
return _react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},c,_react2.default.createElement(_aphroditeCssTransitionGroup2.default,{transitionStyle:{enter:styles.navSectionClosed,enterActive:styles.navSectionOpen,leave:styles.navSectionOpen,leaveActive:styles.navSectionClosed},transitionEnterTimeout:250,transitionLeaveTimeout:250},this.state.open&&i))}
return t}(_react2.default.Component)
AccordionItem.propTypes={children:_propTypes2.default.node,href:_propTypes2.default.string,linkAttributes:_propTypes2.default.objectOf(_propTypes2.default.any),onClick:_propTypes2.default.func,trigger:_propTypes2.default.node.isRequired,triggerStyles:_propTypes2.default.arrayOf(_propTypes2.default.any)}
var NavMenuSection=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),s=0;s<o;s++){r[s]=arguments[s]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.getDomainConversions=function(){return[{id:"global_nav_choose_domain",extra:{domain:n.props.domain.identifier,view:"mobile"}}]},n.handleClick=function(e,t){if(n.props.domain.children.length){if(e){_bigbingo2.default.markConversionsWithExtras(n.getDomainConversions())}}else{}},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.render=function e(){var t=this
var i=this.props.domain
var n=i&&i.children.length!==0
if(!n&&this.props.hideNonSubmenuLinks){return null}var a=i.children.length-1
var o=i.children.map(function(e,n){return _react2.default.createElement("li",{key:e.identifier,className:(0,_aphrodite.css)(styles.navSectionChild)},_react2.default.createElement(_clientLink2.default,{className:(0,_aphrodite.css)(styles.navSectionChildLink,styles.navSectionContentText,n===0&&styles.firstNavSectionChildLink,n===a&&styles.lastNavSectionChildLink),to:e.href,conversions:[{id:"global_nav_choose_subject",extra:{domain:i.identifier,subject:e.identifier,view:"mobile"}}],onClick:t.props.onClickLink},e.translatedTitle))})
var r=i.identifier
var s=null
if(n){s=_react2.default.createElement("ul",{key:r,"data-test-mobile-menu-domain":r,className:(0,_aphrodite.css)(styles.navSectionContents)},o)}var l=i.children.length===0?_bigBingoLinks2.default.handlersWithExtras(this.getDomainConversions()):{}
var c=babelHelpers.extends({},l,{"data-test-mobile-menu-header-domain":r})
return _react2.default.createElement(AccordionItem,{trigger:i.translatedTitle,triggerStyles:[n&&styles.flexSpreadChildren],href:n?null:i.href,onClick:this.handleClick,linkAttributes:c},s)}
return t}(_react2.default.Component)
NavMenuSection.propTypes={domain:_domainUtils.domainObjectPropType,hideNonSubmenuLinks:_propTypes2.default.bool,onClickLink:_propTypes2.default.func}
var BibliotronResponsiveNavMenu=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,a
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,r=Array(o),s=0;s<o;s++){r[s]=arguments[s]}return a=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),n),n.state={showNotifications:false},n.notificationsSwitch=null,n.handleLogout=function(e){e.preventDefault()
var t=_urls2.default.getLogoutURL(n.props.currentUrl)
_facebookutil2.default.logout(function(){window.location=t})},n.handleScroll=function(e){if(!n.state.showNotifications||!n.props.loadNotifications){return}var t=e.target,i=t.scrollHeight,a=t.clientHeight,o=t.scrollTop
var r=2
if(o+a>=i-r){n.props.loadNotifications()
e.preventDefault()}},n.handleUserMenuToggle=function(e){if(e){_bigbingo2.default.markConversion("global_nav_open_user_menu",{view:"mobile"})}},n.handleNotificationsToggle=function(){if(!n.hasOpenedNotifications){n.props.loadNotifications()
n.hasOpenedNotifications=true}var e=!n.state.showNotifications
if(e){_bigbingo2.default.markConversion("global_nav_open_notifications",{view:"mobile"})}n.setState({showNotifications:e},function(){if(n.notificationsSwitch){n.notificationsSwitch.focus()}})},n.renderLoggedInFooter=function(){var e=n.props,t=e.profileData,i=e.notifications
return[_react2.default.createElement(AccordionItem,{key:"user-menu",trigger:t.isPhantom?"New user":t.nickName,triggerStyles:[styles.flexSpreadChildren],onClick:n.handleUserMenuToggle},_react2.default.createElement(_userSettings2.default,babelHelpers.extends({},t,{signUpUrl:"/signup",profileLinkAttributes:_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_visit_profile",extra:{view:"mobile"}}]),tabbable:true,onCloseDropdown:n.props.onClickLink}))),_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function e(t){return n.notificationsSwitch=t},key:"notifications-button",buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"right",onClick:n.handleNotificationsToggle,notificationCount:i.newNotificationCount})]},i),babelHelpers.possibleConstructorReturn(n,a)}t.prototype.componentDidUpdate=function e(t,i){if(!i.showNotifications&&this.state.showNotifications){this.props.onOpenNotifications()}}
t.prototype.render=function e(){var t=this
var i=this.props,n=i.profileData,a=i.hideNonSubmenuLinks,o=i.notifications
if(this.state.showNotifications){return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container),onScroll:this.handleScroll},_react2.default.createElement(_notificationsSwitch2.default,{innerRef:function e(i){return t.notificationsSwitch=i},buttonStyles:[styles.navSectionTitle,styles.flexSpreadChildren],direction:"left",onClick:this.handleNotificationsToggle,notificationCount:o.newNotificationCount}),_react2.default.createElement(_notificationsList2.default,babelHelpers.extends({},o,{tabbable:true})))}var r=!n
var s=!!n&&n.isPhantom===false
var l=!!n&&n.isPhantom!==false
var c=this.props.domains.map(function(e,i){return _react2.default.createElement(NavMenuSection,{domain:e,key:i,hideNonSubmenuLinks:a,onClickLink:t.props.onClickLink})})
var p=[_react2.default.createElement("a",{key:"login",className:(0,_aphrodite.css)(styles.navSectionTitle,styles.splitLoginLink),href:_urls2.default.getLoginURL()},i18n._("Login")),_react2.default.createElement("a",{key:"signup",className:(0,_aphrodite.css)(styles.navSectionTitle,styles.splitLoginLink),href:_urls2.default.getSignupURL()},i18n._("Sign up"))]
var u=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.container)},_react2.default.createElement("ul",{className:(0,_aphrodite.css)(styles.mainList)},(r||l)&&!a&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},p),c,!r&&!a&&this.renderLoggedInFooter(),r&&!a&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},_react2.default.createElement("a",{className:(0,_aphrodite.css)(styles.navSectionTitle,styles.informationLink),href:"/about"},_react2.default.createElement("span",{"aria-hidden":"true"},i18n._("About")),_react2.default.createElement("span",{className:(0,_aphrodite.css)(_a11y2.default.srOnly)},i18n._("About Khan Academy")))),(r||u)&&!a&&_react2.default.createElement("li",{className:(0,_aphrodite.css)(styles.navMenuSection)},_react2.default.createElement(_link2.default,babelHelpers.extends({"data-test-id":"mobile-menu-donate-link",style:[styles.navSectionTitle,styles.informationLink]},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"mobile",isLoggedIn:s,isPhantom:l,kaid:KA.getKaid()}}]),{href:"/donate"}),i18n._("Donate")))))}
return t}(_react2.default.Component)
BibliotronResponsiveNavMenu.propTypes={currentUrl:_propTypes2.default.string,domains:_propTypes2.default.arrayOf(_domainUtils.domainObjectPropType),hideNonSubmenuLinks:_propTypes2.default.bool,loadNotifications:_propTypes2.default.func,notifications:_propTypes2.default.shape({newNotificationCount:_propTypes2.default.number,notifications:_propTypes2.default.arrayOf(_propTypes2.default.any),loading:_propTypes2.default.bool,teaser:_propTypes2.default.string}),onOpenNotifications:_propTypes2.default.func,profileData:_propTypes2.default.shape(_userSettings2.default.propTypes),onClickLink:_propTypes2.default.func}
BibliotronResponsiveNavMenu.defaultProps={onOpenNotifications:function e(){},onClickLink:function e(){}}
var styles=_aphrodite.StyleSheet.create({container:{background:_globalStyles2.default.colors.gray98,height:"calc(100vh - 60px)",overflowY:"auto"},mainList:{paddingTop:0,marginTop:5},navSectionChildLink:{display:"block",fontSize:15,padding:"8px 16px"},firstNavSectionChildLink:{paddingTop:0},lastNavSectionChildLink:{paddingBottom:16},navSectionContentText:{color:_globalStyles2.default.colors.gray25,cursor:"pointer",textDecoration:"none"},navSectionClosed:{overflow:"hidden",transition:"max-height .2s ease-out",maxHeight:0},navSectionOpen:{overflow:"hidden",transition:"max-height .2s ease-in",maxHeight:2e3},notAButton:{width:"100%",fontFamily:"inherit",lineHeight:"inherit",fontSize:"inherit",padding:0,margin:0,backgroundColor:"transparent",border:"none",borderRadius:0},navSectionTitle:{color:_wonderBlocksColorV2.default.offBlack64,cursor:"pointer",display:"block",fontSize:16,fontWeight:"bold",padding:16,textDecoration:"none",":hover":{textDecoration:"underline"}},flexSpreadChildren:{alignItems:"center",display:"flex",justifyContent:"space-between"},navMenuSection:{borderBottom:"1px solid "+_constants2.default.tableBorder},navSectionIcon:{lineHeight:1,transform:"rotate(90deg)",transition:"transform 250ms ease-out"},navSectionIconOpen:{transform:"rotate(-90deg)"},splitLoginLink:{display:"inline-block",width:"50%",backgroundColor:_wonderBlocksColorV2.default.darkBlue,color:_constants2.default.white,fontWeight:"normal",padding:"13px 0",":first-of-type":{textAlign:"right",paddingRight:"8%"},":last-of-type":{textAlign:"left",paddingLeft:"8%"},":hover":{backgroundColor:"auto"}},informationLink:{color:_constants2.default.textColor,fontWeight:"normal",textAlign:"center",padding:"10px 20px"}})
module.exports=BibliotronResponsiveNavMenu

});
KAdefine("javascript/page-package/header.jsx", function(require, module, exports) {
var _headerActive,_logo,_alignLeft,_alignRight,_hideWhenSmall,_responsiveNavMenuWra,_responsiveMenuItemWr
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _bigBingoLinks=require("./big-bingo-links.js")
var _bigBingoLinks2=babelHelpers.interopRequireDefault(_bigBingoLinks)
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var Modernizr=require("modernizr")
var AphroditeCSSTransitionGroup=require("../shared-styles-package/aphrodite-css-transition-group.jsx")
var a11yStyles=require("../shared-styles-package/a11y.js")
var bigBingo=require("../shared-package/bigbingo.js")
var color=require("../shared-styles-package/color.js")
var globalStyles=require("../shared-styles-package/global-styles.js")
var Icon=require("../shared-styles-package/icon.jsx")
var KA=require("../shared-package/ka.js")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var ModalLauncher=require("../components/modal-package/modal-launcher.jsx")
var styleConstants=require("../shared-styles-package/constants.js")
var urls=require("./urls.js")
var HeaderSearchBox=require("./header-search-box.jsx")
var ResponsiveNavMenu=require("./responsive-nav-menu.jsx")
var HeaderLogo=require("./header-logo.jsx")
var LearnMenu=require("./learn-menu.jsx")
var UserDropdown=require("./user-dropdown.jsx")
var i18n=require("../shared-package/i18n.js")
var reorderIcon={path:"M100.035 70.91l0 8.322q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.322q0-1.71 1.254-2.964t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.964zm0-33.402l0 8.379q.057 1.71-1.197 2.964t-2.964 1.197l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.653 1.254-2.907t2.907-1.254l91.713 0q1.71 0 2.964 1.254t1.197 2.907zm0-33.345l0 8.379q.057 1.653-1.197 2.907t-2.964 1.254l-91.713 0q-1.653 0-2.907-1.254t-1.254-2.907l0-8.379q0-1.71 1.254-2.964t2.907-1.197l91.713 0q1.71-.057 2.964 1.197t1.197 2.964z",width:100,height:83.362}
var xThinIcon="M9.9,9.9C9.9,10,9.8,10,9.7,10c-0.1,0-0.2,0-0.2-0.1L5,5.4L0.5,9.9C\n    0.5,10,0.4,10,0.3,10c-0.1,0-0.2,0-0.2-0.1C0,9.8,0,9.6,0.1,9.5L4.6,5L\n    0.1,0.5C0,0.4,0,0.2,0.1,0.1C0.2,0,0.4,0,0.5,0.1L5,4.6l4.4-4.5C9.6,0,\n    9.8,0,9.9,0.1c0.1,0.1,0.1,0.3,0,0.4L5.4,5l4.5,4.5C10,9.6,10,9.8,9.9,\n    9.9z"
var searchIcon="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,\n    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,\n    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,\n    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,\n    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,\n    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,\n    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,\n    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283\n    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,\n    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1\n    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,\n    7.5 L4.25,7.5 Z"
var SkipToMainLink=function(e){babelHelpers.inherits(n,e)
function n(){babelHelpers.classCallCheck(this,n)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}n.prototype.render=function e(){return React.createElement("a",{href:"#main-content","data-skip-to-main":true,className:css(a11yStyles.skipToMain),tabIndex:1},i18n._("Skip to main content"))}
return n}(React.Component)
var LearnMenuSpacer=function(e){babelHelpers.inherits(n,e)
function n(){babelHelpers.classCallCheck(this,n)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}n.prototype.render=function e(){return React.createElement("div",{className:css(styles.pad,styles.navItem,styles.learnMenuSpacer)},i18n._("Courses"))}
return n}(React.Component)
var Header=function(e){babelHelpers.inherits(n,e)
function n(t){babelHelpers.classCallCheck(this,n)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this,t))
a.state={openMenu:a.props.showWelcome?"learn-menu":null,currentUrl:a.props.initialUrl,hovered:false,learnMenuHasBeenClosed:!a.props.showWelcome,signupModal:null,responsiveMenuOpen:false,searchMenuOpen:false,hasLoadedTypeahead:false,SearchBox:null,suggestionSource:null,searchHover:false}
a._isMounted=false
a.handleFocus=function(){if(Modernizr.touchevents){return}if(a._isMounted){a.setState({hovered:true})}}
a.handleBlur=function(e){var n=e.target.getAttribute("data-do-not-blur-header-on-search-bar-close")
if(n){return}if(a._isMounted){a.setState({hovered:false})}}
a.handleBodyClick=function(e){if(!a._isMounted||a.state.openMenu===null||a.props.showWelcome&&!a.state.learnMenuHasBeenClosed){return}var n=ReactDOM.findDOMNode(a.refs.notificationsDropdown)
var t=ReactDOM.findDOMNode(a.refs.profileDropdown)
var r=ReactDOM.findDOMNode(a.refs.learnMenu)
var s=e.target
while(s!==document.body){if(s===n||s===t||s===r){return}s=s.parentNode}if(a.state.openMenu==="learn-menu"){a.hideDashboardSpacer()}if(a._isMounted){a.setState({openMenu:null,learnMenuHasBeenClosed:true})}}
a.handleUserClick=function(){if(!a.hasOpenedNotifications){a.props.onLoadNotifications()
a.hasOpenedNotifications=true}if(a.state.openMenu!=="user"){bigBingo.markConversion("global_nav_open_user_menu",{view:"desktop"})
if(a.state.openMenu==="learn-menu"){a.hideDashboardSpacer()}if(a._isMounted){a.setState({openMenu:"user"})}}else{a.handleUserClose()}}
a.handleUserClose=function(){if(a._isMounted){a.setState({openMenu:null})}}
a.handleLearnMenuClick=function(){if(a.state.openMenu!=="learn-menu"&&!a.props.missionPercentages&&!!a.props.userProfileData){a.props.onRequestMissionPercentages()}if(a.state.openMenu==="learn-menu"){a.handleLearnMenuClose()}else{bigBingo.markConversion("global_nav_open_learn_menu")
if(a._isMounted){a.setState({openMenu:"learn-menu"})}}}
a.handleLearnMenuClose=function(){if(a._isMounted){a.setState({openMenu:null,learnMenuHasBeenClosed:true})}a.hideDashboardSpacer()}
a.handleResponsiveMenuKeyUp=function(e){if(e.key===" "||e.key==="Escape"&&a.state.responsiveMenuOpen){e.preventDefault()
a.handleResponsiveMenuToggle()}}
a.handleResponsiveMenuKeyDown=function(e){if(e.key==="Enter"){e.preventDefault()
a.handleResponsiveMenuToggle()}}
a.handleResponsiveMenuToggle=function(){var e=!a.state.responsiveMenuOpen
var n=window.navigator.userAgent
var t=n.indexOf("Safari")>=0&&n.indexOf("Mobile")>=0&&n.indexOf("Chrome")<0
var r=a.getOuterWrapper()
if(e){document.body.style.overflowY="hidden"
if(t&&r){r.style.overflowY="hidden"
r.style.height="100vh"}}else{document.body.style.overflowY="auto"
if(t&&r){r.style.overflowY="auto"
r.style.height="auto"}}if(e){bigBingo.markConversion("global_nav_open_mobile")}if(a._isMounted){a.setState({responsiveMenuOpen:e})}}
a.handleSearchClick=function(e){e.preventDefault()
bigBingo.markConversion("global_nav_start_search",{view:"desktop"})
if(!a.state.hasLoadedTypeahead){Promise.all([require.dynimport("../typeahead-package/search-box.jsx").then(function(e){return e.default}),require.dynimport("../typeahead-package/suggestion-source.js").then(function(e){return e.default}),require.dynimport("../../stylesheets/typeahead-package/typeahead.less")]).then(function(e){var n=e[0],t=e[1]
if(a._isMounted){a.setState({SearchBox:n,suggestionSource:t,hasLoadedTypeahead:true,searchMenuOpen:true,searchHover:false})}})}else{if(a._isMounted){a.setState({searchMenuOpen:true,searchHover:false})}}}
a.handleSearchExit=function(e){e&&e.preventDefault()
if(a._isMounted){a.setState({searchMenuOpen:false})}}
a.shouldUseLoginModal=function(){bigBingo.markConversion("global_nav_login_clicked")
var e=window.location.pathname==="/login"
var n=window.location.hostname.endsWith(".appspot.com")&&(window.location.hostname.startsWith("vm-dot-")||window.location.hostname.indexOf("-dot-vm-dot")!==-1)
var t=KA.isPhone||e||n
if(t){return false}return true}
a.hideDashboardSpacer=function(){document.body.classList.add("bibliotron-hide-spacer")}
a.getProfileDropdownData=function(){if(!a.props.userProfileData){return null}var e=a.props.userProfileData,n=e.hasChildStudents,t=e.hasCoachHomepage,r=e.hasParentHomepage,s=e.hasStudents,o=e.isChildAccount,i=e.isMidsignupPhantom,l=e.isPhantom,c=e.profileRoot,p=e.nickname,d=e.avatarSrc
return{profileUrl:c,avatarImage:d,nickName:p,isPhantom:l,showSignUpToSave:l&&!i,hasStudents:s,hasChildren:s&&n,showSettings:!l,showLearningHome:t||r,showCoachingLinks:!o}}
a.getBackgroundColor=function(){if(a.getIsOpaque()){return NAV_ITEM_LIGHT_COLOR}else if(a.props.transparent){return"transparent"}else if(a.props.pageDomain&&a.props.allowDomainTheming){return _wonderBlocksColorV2.default.darkBlue}else{return"transparent"}}
a.getSearchBackgroundColor=function(){if(a.state.searchHover){return globalStyles.colors.gray90}else if(a.getIsOpaque()){return globalStyles.colors.gray95}else if(a.props.pageDomain&&a.props.allowDomainTheming){return(0,_wonderBlocksColorV.mix)((0,_wonderBlocksColorV.fade)(_wonderBlocksColorV2.default.white,.08),_wonderBlocksColorV2.default.darkBlue)}else if(a.props.transparent){var e=color.parse(globalStyles.colors.white)
return color.format(color.fade(e,.2))}else{return"transparent"}}
a.getUserIsPhantom=function(){return!!a.props.userProfileData&&a.props.userProfileData.isPhantom!==false}
a.markSigninSignupLinkClicked=function(){bigBingo.markConversion("global_nav_signin_signup_clicked")}
a.markSignupLinkClicked=function(){bigBingo.markConversion("global_nav_signup_clicked")}
a.renderProminentSearchContents=function(){var e=React.createElement(_wonderBlocksCoreV.View,{style:[].concat(a.getNavItemStyles(),[a.getIsOpaque()&&styles.opaqueSearchIcon])},React.createElement(Icon,{icon:searchIcon,size:SEARCH_ICON_SIZE}))
var n=a.getSearchBackgroundColor()
if(a.state.searchMenuOpen){return React.createElement("div",{className:css(styles.headerContents,styles.alignLeft)},a.renderCloseSearchLink(),React.createElement(LearnMenuSpacer,null),React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{appear:styles.enterSearch,appearActive:styles.enterActiveSearch},transitionAppear:true,transitionAppearTimeout:300},React.createElement("div",{className:css(styles.searchWrapper,styles.activeSearchWrapper)},React.createElement("div",{style:{backgroundColor:n},className:css(styles.searchBackground)},React.createElement("div",{className:css(styles.searchBoxContainer)},React.createElement(HeaderSearchBox,{onFocus:a.handleSearchFocus,onEscape:a.handleSearchExit,isBibliotron:true,searchFormStyles:[styles.navItem,styles.navItemWhenOpaque,styles.searchForm,styles.wonderBlocksNavItem].filter(function(e){return!!e}),searchInputStyles:[styles.searchInput,styles.prominentSearchInput,styles.wonderBlocksNavItem].filter(function(e){return!!e}),SearchBox:a.state.SearchBox,spacer:a.renderProminentSearchSpacer(),suggestionSource:a.state.suggestionSource}),e)))))}else{return React.createElement("div",{className:css(styles.headerContents)},React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignLeft,styles.hideOnPrint)},a.renderLearnMenu(),React.createElement("div",{className:css(styles.searchWrapper)},React.createElement("a",{"data-hack-search-button-label":true,"aria-label":i18n._("Search for courses, skills, and videos"),href:"/search",className:css(styles.navItem,a.getIsOpaque()&&styles.searchOpaque,styles.searchBackground),onClick:a.handleSearchClick,onMouseEnter:function e(){if(a._isMounted){a.setState({searchHover:true})}},onMouseLeave:function e(){if(a._isMounted){a.setState({searchHover:false})}},style:{backgroundColor:n},"data-test-id":"navbar-search-button"},React.createElement("div",{className:css(styles.searchBoxContainer)},React.createElement("span",{className:css(styles.inactiveSearch,styles.wonderBlocksNavItem)},i18n._("Search")),e)))),React.createElement("div",{className:css(styles.headerSection)},a.renderLogo()),React.createElement("div",{className:css(styles.headerSection,styles.grow,styles.alignRight,styles.hideOnPrint)},a.getUserIsLoggedIn()?a.renderLoggedInItems():a.renderLoggedOutItems(),a.renderResponsiveMenuItems()))}}
a.renderCloseSearchLink=function(){return React.createElement("a",{href:"javascript:void 0",className:css.apply(undefined,a.getNavItemStyles()),onClick:a.handleSearchExit,"data-test-id":"header-search-close","aria-label":"Close search"},React.createElement(Icon,{icon:xThinIcon,size:15,color:NAV_ITEM_DARK_COLOR}))}
a.renderSearchResultsSpacer=function(){return React.createElement("div",{className:css(styles.searchResultsSpacer)},React.createElement(LearnMenuSpacer,null))}
a.renderProminentSearchSpacer=function(){return React.createElement("div",{className:css(styles.prominentSearchResultsSpacer)},React.createElement(LearnMenuSpacer,null))}
a.renderLogo=function(){return React.createElement(HeaderLogo,{logoStyles:[].concat(a.getNavItemStyles(),[styles.logo]),linkAttributes:_bigBingoLinks2.default.handlers(["global_nav_visit_home"]),transparent:!a.getIsOpaque()})}
a.renderLearnMenu=function(){var e=a.props.domains
return React.createElement(LearnMenu,{ref:"learnMenu",domains:e,missionPercentages:a.props.missionPercentages,onDropdownToggle:a.handleLearnMenuClick,onDropdownClose:a.handleLearnMenuClose,showDropdown:a.state.openMenu==="learn-menu",buttonStyles:a.getNavItemStyles(),transparent:!a.getIsOpaque(),showWelcome:a.props.showWelcome})}
a.renderResponsiveMenuItems=function(){var e=[]
if(!a.props.hideSearchBar){e=e.concat([React.createElement("div",{key:"responsive-search",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("a",babelHelpers.extends({className:css.apply(undefined,a.getNavItemStyles().concat([styles.responsiveMenuLink,styles.responsiveSearchIcon]))},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_start_search",extra:{view:"mobile"}}]),{href:"/search","data-test-id":"mobile-search-button"}),React.createElement("span",{className:css(a11yStyles.srOnly)},i18n._("Search for courses, skills, and videos")),React.createElement(Icon,{icon:searchIcon,size:SEARCH_ICON_SIZE})))])}if(!a.props.showWelcome){var n=a.state.responsiveMenuOpen?i18n._("Close menu button"):i18n._("Open menu button")
e=e.concat([React.createElement("div",{key:"responsive-dropdown-menu",className:css(styles.showWhenSmall,styles.responsiveMenuItemWrapper)},React.createElement("button",{onClick:a.handleResponsiveMenuToggle,onKeyUp:a.handleResponsiveMenuKeyUp,onKeyDown:a.handleResponsiveMenuKeyDown,className:css.apply(undefined,[styles.notAButton].concat(a.getNavItemStyles(),[styles.responsiveMenuLink])),"data-test-id":"mobile-header-menu-button","aria-expanded":a.state.responsiveMenuOpen,"aria-label":n,"aria-controls":a.responsiveNavMenuId},a.state.responsiveMenuOpen?React.createElement(_wonderBlocksCoreV.View,{style:styles.navItemDarkColor},React.createElement(Icon,{icon:xThinIcon,size:17})):React.createElement(Icon,{icon:reorderIcon,size:14})))])}return e}
a.renderResponsiveNavMenu=function(){return React.createElement("div",{className:css(styles.responsiveNavMenuWrapper),"data-test-id":"responsive-nav-menu",id:a.responsiveNavMenuId,role:"menu"},React.createElement(AphroditeCSSTransitionGroup,{transitionStyle:{enter:styles.responsiveNavMenuClosed,enterActive:styles.responsiveNavMenuOpen,leave:styles.responsiveNavMenuOpen,leaveActive:styles.responsiveNavMenuClosed},transitionEnterTimeout:300,transitionLeaveTimeout:300},a.state.responsiveMenuOpen&&React.createElement(ResponsiveNavMenu,{domains:a.props.domains,profileData:a.getProfileDropdownData(),notifications:a.props.notifications,loadNotifications:a.props.onLoadNotifications,onOpenNotifications:a.props.onOpenNotifications,onClickLink:a.handleResponsiveMenuToggle})))}
a.responsiveNavMenuId=t.idGenerator("responsive-nav-menu")
return a}n.prototype.componentDidMount=function e(){var n=this
this._isMounted=true
this.setState({currentUrl:location.pathname+location.hash})
var t=this.props.userProfileData
if(!t||t.isPhantom){require.dynimport("../login-package/signup-modal.jsx").then(function(e){if(n._isMounted){n.setState({signupModal:e})}})}if(this.props.showWelcome&&!this.props.missionPercentages){this.props.onRequestMissionPercentages()}document.body.addEventListener("click",this.handleBodyClick)
this.addSkipToMainToDOM()}
n.prototype.componentWillUnmount=function e(){document.body.removeEventListener("click",this.handleBodyClick)
this._isMounted=false
var n=this._skipToMainMountNode
if(!n){return}ReactDOM.unmountComponentAtNode(n)
if(this.props.rootElement){this.props.rootElement.removeChild(n)}}
n.prototype.getOuterWrapper=function e(){return document.getElementById("outer-wrapper")||document.body}
n.prototype.getNavItemStyles=function e(){return[styles.pad,styles.navItem,this.getIsOpaque()&&styles.navItemWhenOpaque,styles.wonderBlocksNavItem]}
n.prototype.getDonateStyles=function e(){return[].concat(this.getNavItemStyles(),[styles.hideWhenSmall])}
n.prototype.getIsOpaque=function e(){if(!this.props.transparent&&!this.props.pageDomain){return true}return this.state.hovered||this.state.openMenu!==null||this.state.responsiveMenuOpen||this.state.searchMenuOpen}
n.prototype.getUserIsLoggedIn=function e(){return this.props.userProfileData&&this.props.userProfileData.isPhantom===false}
n.prototype.addSkipToMainToDOM=function e(){var n=this.getOuterWrapper()
if(!this.props.showSkipToMain||!n){return null}var t=document.createElement("div")
this._skipToMainMountNode=t
n.insertBefore(t,n.firstChild)
ReactDOM.render(React.createElement(SkipToMainLink,null),this._skipToMainMountNode)}
n.prototype.renderLoginLink=function e(){var n=this
if(this.shouldUseLoginModal()){return React.createElement(ModalLauncher,{ariaLabel:i18n._("Login (Opens a modal)"),focusId:"login-or-signup",key:"signin-link",modal:this.getSignupModal()},function(e,t){return React.createElement("a",{"aria-label":t,href:urls.getLoginURL(),id:"login-or-signup",onClick:e,rel:"nofollow",className:css.apply(undefined,n.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin]))},i18n._("Login"))})}return React.createElement("a",{href:urls.getLoginURL(),id:"login-or-signup",key:"signin-link",rel:"nofollow",className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin]))},i18n._("Login"))}
n.prototype.renderLoggedInItems=function e(){var n=this.props,t=n.notifications,a=n.onLoadNotifications,r=n.signUpUrl
var s=KA.featureFlag("SHOW_LOGGED_IN_DONATE_LINK")
var o=[React.createElement(UserDropdown,babelHelpers.extends({key:"user-dropdown",ref:"profileDropdown",onDropdownToggle:this.handleUserClick,onDropdownClose:this.handleUserClose,showDropdown:this.state.openMenu==="user",buttonStyles:[this.getNavItemStyles(),styles.withLeftMargin],currentUrl:this.state.currentUrl,signUpUrl:r,profileData:this.getProfileDropdownData()},t,{onOpenNotifications:this.props.onOpenNotifications,onScrollToBottom:a}))]
if(s){o.unshift([React.createElement(_link2.default,babelHelpers.extends({key:"donate-link","data-test-id":"header-donate-link"},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"desktop",isLoggedIn:true,isPhantom:false,kaid:KA.getKaid()}}]),{href:"/donate",style:[].concat(this.getDonateStyles())}),i18n._("Donate"))])}return o}
n.prototype.getSignupModal=function e(){if(!this.state.signupModal){return}var n=location.pathname+location.search+location.hash
return React.createElement(this.state.signupModal.default,{continueUrl:n,initialPurpose:"login"})}
n.prototype.renderLoggedOutItems=function e(){return[React.createElement(_link2.default,babelHelpers.extends({key:"donate-link","data-test-id":"header-donate-link"},_bigBingoLinks2.default.handlersWithExtras([{id:"global_nav_donate_clicked",extra:{view:"desktop",isLoggedIn:false,isPhantom:this.getUserIsPhantom(),kaid:KA.getKaid()}}]),{href:"/donate",style:[].concat(this.getDonateStyles())}),i18n._("Donate")),this.renderLoginLink(),React.createElement("a",{key:"signup-link",href:urls.getSignupURL(),rel:"nofollow",className:css.apply(undefined,this.getNavItemStyles().concat([styles.hideWhenSmall,styles.withLeftMargin])),onClick:this.markSignupLinkClicked},i18n._("Sign up"))]}
n.prototype.render=function e(){return React.createElement("div",{className:css(styles.wrapper,this.props.transparent&&styles.wrapperFloat,this.getIsOpaque()&&styles.headerActive),style:{backgroundColor:this.getBackgroundColor()}},React.createElement("nav",{className:css(styles.header,this.props.fullBleed&&styles.headerFullBleed),onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleFocus,onMouseLeave:this.handleBlur,role:"navigation"},this.renderProminentSearchContents()),this.renderResponsiveNavMenu())}
return n}(React.Component)
Header.propTypes={idGenerator:PropTypes.func.isRequired,allowDomainTheming:PropTypes.bool,domains:LearnMenu.propTypes.domains,fullBleed:PropTypes.bool,hideSearchBar:PropTypes.bool,hideSignupInHeader:PropTypes.bool,initialUrl:PropTypes.string,missionPercentages:LearnMenu.propTypes.missionPercentages,notifications:ResponsiveNavMenu.propTypes.notifications,onLoadNotifications:PropTypes.func,onOpenNotifications:PropTypes.func,onRequestMissionPercentages:PropTypes.func,pageDomain:PropTypes.string,showSkipToMain:PropTypes.bool,showWelcome:PropTypes.bool,signUpUrl:PropTypes.string.isRequired,transparent:PropTypes.bool,userProfileData:PropTypes.shape({hasChildStudents:PropTypes.bool,hasCoachHomepage:PropTypes.bool,hasParentHomepage:PropTypes.bool,hasStudents:PropTypes.bool,isChildAccount:PropTypes.bool,isMidsignupPhantom:PropTypes.bool,isPhantom:PropTypes.bool,profileRoot:PropTypes.string,nickname:PropTypes.string,avatarSrc:PropTypes.string})}
Header.defaultProps={hideSearchBar:false,hideSignupInHeader:false,notifications:{newNotificationCount:0,notifications:[],loading:true,teaser:null},onLoadNotifications:function e(){},onOpenNotifications:function e(){},onRequestMissionPercentages:function e(){},showSkipToMain:true,showWelcome:false}
var NAV_ITEM_DARK_COLOR=_wonderBlocksColorV2.default.blue
var NAV_ITEM_LIGHT_COLOR=_wonderBlocksColorV2.default.white
var SEARCH_ICON_LEFT_MARGIN=32
var SEARCH_INPUT_LEFT_MARGIN=20
var SEARCH_ICON_SIZE=20
var PROMINENT_SEARCH_INPUT_LEFT_PADDING=10
var ACTIVE_SEARCH_BAR_WIDTH=400
var styles=StyleSheet.create({wrapper:{borderTop:"1px solid transparent",borderBottom:"1px solid rgba(255, 255, 255, 0.3)",boxSizing:"border-box",height:globalStyles.pageHeaderHeight,left:0,position:"relative",right:0,zIndex:styleConstants.zindexHeader,"@media print":{backgroundColor:_wonderBlocksColorV2.default.white}},wrapperFloat:{position:"absolute"},header:{maxWidth:styleConstants.maxContainerWidth,marginLeft:"auto",marginRight:"auto",width:"100%",height:"100%"},headerContents:{display:"flex",height:"100%",alignItems:"center","@media print":{justifyContent:"center"}},headerActive:(_headerActive={borderTop:"1px solid "+globalStyles.colors.gray85,borderBottom:"1px solid "+globalStyles.colors.gray85},_headerActive[mediaQueries.smOrSmaller]={background:globalStyles.colors.gray98},_headerActive),headerFullBleed:{maxWidth:"none"},headerSection:{alignItems:"center",display:"flex",height:"100%"},hideOnPrint:{"@media print":{display:"none"}},learnMenuSpacer:{paddingRight:16,pointerEvents:"none",visibility:"hidden",whiteSpace:"nowrap"},searchResultsSpacer:{marginLeft:SEARCH_ICON_LEFT_MARGIN+SEARCH_ICON_SIZE+SEARCH_INPUT_LEFT_MARGIN},prominentSearchResultsSpacer:{marginLeft:SEARCH_ICON_LEFT_MARGIN+PROMINENT_SEARCH_INPUT_LEFT_PADDING},logo:(_logo={},_logo[mediaQueries.smOrSmaller]={paddingLeft:globalStyles.pageHeaderHorizontalPaddingMobile},_logo),grow:{flexGrow:1,width:0},alignLeft:(_alignLeft={justifyContent:"flex-start",paddingLeft:globalStyles.pageHeaderHorizontalPadding},_alignLeft[mediaQueries.smOrSmaller]={display:"none"},_alignLeft),alignRight:(_alignRight={justifyContent:"flex-end",paddingRight:globalStyles.pageHeaderHorizontalPadding},_alignRight[mediaQueries.smOrSmaller]={paddingRight:0},_alignRight),pad:{alignItems:"center",display:"flex",height:"100%"},navItem:{color:NAV_ITEM_LIGHT_COLOR,fontFamily:"inherit",fontSize:15,fontWeight:"bold",textDecoration:"none",":hover":{textDecoration:"none"}},navItemWhenOpaque:{color:NAV_ITEM_DARK_COLOR,":hover":{textDecoration:"none"}},navItemDarkColor:{color:NAV_ITEM_DARK_COLOR},searchOpaque:{color:NAV_ITEM_DARK_COLOR},withLeftMargin:{marginLeft:32},searchForm:{flexGrow:1},searchInput:{border:"none",fontFamily:globalStyles.fonts.regular,fontSize:15,height:"auto",marginLeft:SEARCH_INPUT_LEFT_MARGIN,outline:"none",width:300},searchWrapper:{paddingTop:10,paddingBottom:10,marginLeft:SEARCH_ICON_LEFT_MARGIN,marginRight:SEARCH_ICON_LEFT_MARGIN,width:200,boxSizing:"border-box",height:"100%"},activeSearchWrapper:{maxWidth:"none",width:ACTIVE_SEARCH_BAR_WIDTH},enterSearch:{maxWidth:200,transition:"max-width 0.2s ease-out"},enterActiveSearch:{maxWidth:ACTIVE_SEARCH_BAR_WIDTH},searchBackground:{flex:1,height:40,display:"flex",flexDirection:"row",alignItems:"center",borderRadius:4},searchBoxContainer:{flex:1,display:"flex",alignItems:"center",paddingLeft:PROMINENT_SEARCH_INPUT_LEFT_PADDING,paddingRight:10,outline:"1px solid rgba(0,0,0,0)"},prominentSearchInput:{height:"100%",width:"100%",backgroundColor:"transparent",marginLeft:0},inactiveSearch:{flexGrow:1},opaqueSearchIcon:{color:globalStyles.colors.gray68},hideWhenSmall:(_hideWhenSmall={},_hideWhenSmall[mediaQueries.smOrSmaller]={display:"none"},_hideWhenSmall),responsiveNavMenuWrapper:(_responsiveNavMenuWra={background:globalStyles.colors.white,left:0,position:"absolute",right:0},_responsiveNavMenuWra[mediaQueries.mdOrLarger]={display:"none"},_responsiveNavMenuWra),responsiveNavMenuOpen:{maxHeight:1e3,transition:"max-height .3s",overflow:"hidden"},responsiveNavMenuClosed:{maxHeight:0,transition:"max-height .3s",overflow:"hidden"},responsiveMenuItemWrapper:(_responsiveMenuItemWr={alignItems:"stretch",display:"none"},_responsiveMenuItemWr[mediaQueries.smOrSmaller]={display:"flex"},_responsiveMenuItemWr),responsiveMenuLink:{height:"auto",marginRight:globalStyles.pageHeaderHorizontalPaddingMobile},responsiveSearchIcon:{marginRight:25},notAButton:{backgroundColor:"transparent",border:"none"},wonderBlocksNavItem:babelHelpers.extends({},globalStyles.typography.wonderBlocksLabelLarge)})
module.exports=Header

});
KAdefine("javascript/page-package/stateful-header.jsx", function(require, module, exports) {
var _class,_temp2
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _header=require("./header.jsx")
var _header2=babelHelpers.interopRequireDefault(_header)
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("react-redux"),Provider=_require.Provider,connect=_require.connect
var APIActionResults=require("../shared-package/api-action-results.js")
var KA=require("../shared-package/ka.js")
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var urls=require("./urls.js")
var actions=require("./actions.js")
var _require2=require("./store.js"),create=_require2.create
var StatefulHeader=connect(function(e){return e})((_temp2=_class=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,a
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,s=Array(o),n=0;n<o;n++){s[n]=arguments[n]}return a=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i._isMounted=false,i.handleLoadNotifications=function(){if(i.props.notifications.hasMore&&!i.props.notifications.loading){i.props.dispatch(actions.loadMoreNotifications())}},i.handleOpenNotifications=function(){if(i.props.notifications.newNotificationCount>0){i.props.dispatch(actions.clearNewNotifications())
updateDocumentTitle({noteCount:0})}},i.handleRequestMissionPercentages=function(){if(!i.props.missionData.loading){i.props.dispatch(actions.loadMissionPercentages())}},t),babelHelpers.possibleConstructorReturn(i,a)}r.prototype.componentDidMount=function e(){var r=this
this._isMounted=true
updateDocumentTitle()
APIActionResults.register("notifications_added",function(e){if(!r._isMounted){return}var t=e.readable
r.props.dispatch(actions.gotNewNotifications(t))
var i=KA.getUserProfile()
if(i){updateDocumentTitle({noteCount:i.get("countBrandNewNotifications")+t.length})}})
KA.addProfileChangeListener(function(e){r.props.dispatch(actions.updateProfile(e))})
var t=this.props.urgentNotification,i=t.urgentNotes,a=t.continuePath
if(i&&i.length){require.dynimport("../shared-package/urgent-notification.js").then(function(e){return e.default}).then(function(e){e.renderUrgent(i,a)})}if(this.props.footer){var o=window.innerWidth>768
var s=this.props.footer.contentKind
var n=!!KA.isMobile
if(o||!s||!n){Promise.all([require.dynimport("react-dom").then(function(e){return e.default}),require.dynimport("../page-package/footer.jsx").then(function(e){return e.default})]).then(function(e){var t=e[0],i=e[1]
var a=document.getElementById("footer")
if(a){t.render(React.createElement(i,r.props.footer),a)}})}}}
r.prototype.componentWillUnmount=function e(){this._isMounted=false}
r.prototype.render=function e(){return React.createElement(_header2.default,{idGenerator:this.props.idGenerator,allowDomainTheming:this.props.allowDomainTheming,domains:this.props.domains,initialUrl:this.props.initialUrl,hideSignupInHeader:this.props.hideSignupInHeader,hideSearchBar:this.props.hideSearchBar,transparent:this.props.transparent,fullBleed:this.props.fullBleed,showWelcome:this.props.showWelcome,notifications:this.props.notifications,userProfileData:this.props.userProfileData,missionPercentages:this.props.missionData.missionPercentages,onLoadNotifications:this.handleLoadNotifications,onOpenNotifications:this.handleOpenNotifications,onRequestMissionPercentages:this.handleRequestMissionPercentages,signUpUrl:urls.getLoginURL("","/signup"),pageDomain:this.props.pageDomain})}
return r}(React.Component),_class.propTypes={idGenerator:PropTypes.func,allowDomainTheming:PropTypes.bool,dispatch:PropTypes.func,domains:_header2.default.propTypes.domains,fullBleed:_header2.default.propTypes.fullBleed,hideSearchBar:_header2.default.propTypes.hideSearchBar,hideSignupInHeader:_header2.default.propTypes.hideSignupInHeader,initialUrl:_header2.default.propTypes.initialUrl,missionData:PropTypes.shape({loading:PropTypes.bool,missionPercentages:_header2.default.propTypes.missionPercentages}),notifications:_header2.default.propTypes.notifications,pageDomain:PropTypes.string,showWelcome:_header2.default.propTypes.showWelcome,transparent:_header2.default.propTypes.transparent,userProfileData:_header2.default.propTypes.userProfileData,urgentNotification:PropTypes.shape({urgentNotes:PropTypes.arrayOf(PropTypes.any),continuePath:PropTypes.string}),footer:PropTypes.shape({curLanguage:PropTypes.string.isRequired,domains:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string.isRequired,href:PropTypes.string.isRequired}).isRequired).isRequired,kaGlobals:PropTypes.shape({version:PropTypes.string.isRequired}),languages:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,isUserLoggedIn:PropTypes.bool,attribution:PropTypes.any,contentKind:PropTypes.string}),embeddedInWebview:PropTypes.bool},_temp2))
var StatefulHeaderWrapper=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,a
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,s=Array(o),n=0;n<o;n++){s[n]=arguments[n]}return a=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.state={store:create(i.props.initialNotificationCount,i.props.initialUserProfileData)},t),babelHelpers.possibleConstructorReturn(i,a)}r.prototype.render=function e(){var r=this
return React.createElement(Provider,{store:this.state.store},React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{scope:"page-header"},function(e){return React.createElement(StatefulHeader,babelHelpers.extends({},r.props,{idGenerator:e.get}))}))}
return r}(React.Component)
StatefulHeaderWrapper.propTypes={domains:_header2.default.propTypes.domains,fullBleed:_header2.default.propTypes.fullBleed,hideSearchBar:_header2.default.propTypes.hideSearchBar,hideSignupInHeader:_header2.default.propTypes.hideSignupInHeader,initialNotificationCount:PropTypes.number,initialUrl:_header2.default.propTypes.initialUrl,initialUserProfileData:_header2.default.propTypes.userProfileData,showWelcome:_header2.default.propTypes.showWelcome,transparent:_header2.default.propTypes.transparent}
module.exports=StatefulHeaderWrapper

});
; KAdefine.updatePathToPackageMap({"javascript/login-package/signup-modal.jsx": "login.js", "javascript/node_modules/backbone/index.js": "corelibs-legacy.js", "javascript/node_modules/jquery/index.js": "corelibs-legacy.js", "javascript/node_modules/react-dom/index.js": "corelibs.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/notifications-package/readable-notification-view.js": "notifications.js", "javascript/notifications-package/readable-notification.jsx": "notifications.js", "javascript/page-package/footer.jsx": "page.js", "javascript/shared-package/urgent-notification.js": "shared.js", "javascript/typeahead-package/search-box.jsx": "typeahead.js", "javascript/typeahead-package/suggestion-source.js": "typeahead.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/page-package.js.map 