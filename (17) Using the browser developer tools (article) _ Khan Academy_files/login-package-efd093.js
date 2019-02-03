KAdefine("third_party/javascript-khansrc/mailcheck/mailcheck.js", function(require, module, exports) {
var Kicksend={mailcheck:{threshold:3,defaultDomains:["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com"],defaultTopLevelDomains:["co.uk","com","net","org","info","edu","gov","mil"],run:function(e){e.domains=e.domains||Kicksend.mailcheck.defaultDomains
e.topLevelDomains=e.topLevelDomains||Kicksend.mailcheck.defaultTopLevelDomains
e.distanceFunction=e.distanceFunction||Kicksend.sift3Distance
var n=Kicksend.mailcheck.suggest(encodeURI(e.email),e.domains,e.topLevelDomains,e.distanceFunction)
if(n&&n.domain.indexOf(".")!==-1){if(e.suggested){e.suggested(n)}}else{if(e.empty){e.empty()}}},suggest:function(e,n,i,t){e=e.toLowerCase()
var a=this.splitEmail(e)
var o=this.findClosestDomain(a.domain,n,t)
if(o){if(o!=a.domain){return{address:a.address,domain:o,full:a.address+"@"+o}}}else{var l=this.findClosestDomain(a.topLevelDomain,i)
if(a.domain&&l&&l!=a.topLevelDomain){var s=a.domain
o=s.substring(0,s.lastIndexOf(a.topLevelDomain))+l
return{address:a.address,domain:o,full:a.address+"@"+o}}}return false},findClosestDomain:function(e,n,i){var t
var a=99
var o=null
if(!e||!n){return false}if(!i){i=this.sift3Distance}for(var l=0;l<n.length;l++){if(e===n[l]){return e}t=i(e,n[l])
if(t<a){a=t
o=n[l]}}if(a<=this.threshold&&o!==null){return o}else{return false}},sift3Distance:function(e,n){if(e==null||e.length===0){if(n==null||n.length===0){return 0}else{return n.length}}if(n==null||n.length===0){return e.length}var i=0
var t=0
var a=0
var o=0
var l=5
while(i+t<e.length&&i+a<n.length){if(e.charAt(i+t)==n.charAt(i+a)){o++}else{t=0
a=0
for(var s=0;s<l;s++){if(i+s<e.length&&e.charAt(i+s)==n.charAt(i)){t=s
break}if(i+s<n.length&&e.charAt(i)==n.charAt(i+s)){a=s
break}}}i++}return(e.length+n.length)/2-o},splitEmail:function(e){var n=e.split("@")
if(n.length<2){return false}for(var i=0;i<n.length;i++){if(n[i]===""){return false}}var t=n.pop()
var a=t.split(".")
var o=""
if(a.length==0){return false}else if(a.length==1){o=a[0]}else{for(var i=1;i<a.length;i++){o+=a[i]+"."}if(a.length>=2){o=o.substring(0,o.length-1)}}return{topLevelDomain:o,domain:t,address:n.join("@")}}}}
if(window.jQuery){(function($){$.fn.mailcheck=function(e){var n=this
if(e.suggested){var i=e.suggested
e.suggested=function(e){i(n,e)}}if(e.empty){var t=e.empty
e.empty=function(){t.call(null,n)}}e.email=this.val()
Kicksend.mailcheck.run(e)}})(jQuery)}module.exports=Kicksend

});
KAdefine("javascript/login-package/birthday-picker.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _jquery=require("jquery")
var _jquery2=babelHelpers.interopRequireDefault(_jquery)
var _moment=require("moment")
var _moment2=babelHelpers.interopRequireDefault(_moment)
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var _reactDom2=babelHelpers.interopRequireDefault(_reactDom)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var i18n=require("../shared-package/i18n.js")
var BirthdayPicker=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){var t=this.props,r=t.appearance,a=t.defaultValue,l=t.onChange,i=t.reportNull,o=t.showTitles
var n=a&&(0,_moment2.default)(a).toDate()
var s=(0,_jquery2.default)(_reactDom2.default.findDOMNode(this.refs.birthdayPicker))
s.birthdaypicker({defaultDate:n,placeholder:true,reportNull:!!i,classes:r==="blue-mountain"?(0,_aphrodite.css)(styles.datePickerField):"simple-input ui-corner-all login-input",futureDates:true,hiddenDate:false,onChange:function(e){function t(t){return e.apply(this,arguments)}t.toString=function(){return e.toString()}
return t}(function(e){return l(e&&(0,_moment2.default)(e,"YYYY-MM-DD"))}),yearLabelText:i18n._("Year"),monthLabelText:i18n._("Month"),dayLabelText:i18n._("Day"),labelClasses:"sr-only"}).find("option[value='0']").text("")
if(o){s.find(".birth-month option[value='0']").text(i18n._("Month"))
s.find(".birth-day option[value='0']").text(i18n._("Day"))
s.find(".birth-year option[value='0']").text(i18n._("Year"))}s.find("."+(0,_aphrodite.css)(styles.datePickerField)).slice(0,2).addClass((0,_aphrodite.css)(styles.fieldWithMarginRight))
if(_jquery2.default.browser.webkit){(0,_jquery2.default)("select",_reactDom2.default.findDOMNode(this.refs.birthdayPicker)).css({paddingTop:0,paddingBottom:0})}}
t.prototype.render=function e(){var t=this.props,r=t.appearance,a=t.defaultValue,l=t.onChange,i=t.onFocus
return React.createElement("div",{className:r==="blue-mountain"?(0,_aphrodite.css)(styles.datePicker):"birthday-block_picker pure-u-5-6 pure-u-sm-7-12","data-test-id":"birthday-picker",ref:"birthdayPicker",defaultValue:a,onFocus:i,onChange:l})}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({datePicker:{width:"100%"},datePickerField:{appearance:"none",backgroundImage:"\n            linear-gradient(\n                45deg, transparent 50%, "+_globalStyles2.default.colors.gray76+" 0%),\n            linear-gradient(\n                135deg, "+_globalStyles2.default.colors.gray76+" 50%, transparent 0%),\n            linear-gradient(\n                "+_globalStyles2.default.colors.white+", "+_globalStyles2.default.colors.white+")",backgroundPosition:"\n            right 16px bottom 15px,\n            right 10px bottom 15px,\n            center",backgroundRepeat:"no-repeat",backgroundSize:"6px 6px, 6px 6px, cover",border:"1px solid "+_globalStyles2.default.colors.gray85,borderRadius:_globalStyles2.default.borderRadius,boxShadow:"none",color:_globalStyles2.default.colors.gray17,fontSize:15,height:40,lineHeight:"38px",paddingLeft:15,width:"calc((100% - 16px) / 3)",":focus":{borderColor:_globalStyles2.default.colors.kaGreen}},fieldWithMarginRight:{marginRight:8}})
exports.default=BirthdayPicker

});
KAdefine("javascript/login-package/birthday-and-signup-subform.jsx", function(require, module, exports) {
var _moment=require("moment")
var _moment2=babelHelpers.interopRequireDefault(_moment)
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _button=require("../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _birthdayPicker=require("./birthday-picker.jsx")
var _birthdayPicker2=babelHelpers.interopRequireDefault(_birthdayPicker)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _facebookButton=require("./facebook-button.jsx")
var _facebookButton2=babelHelpers.interopRequireDefault(_facebookButton)
var _googleButton=require("./google-button.jsx")
var _googleButton2=babelHelpers.interopRequireDefault(_googleButton)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var i18n=require("../shared-package/i18n.js")
var futureBirthdateErrorMsg=i18n._("Please select a valid birthdate.")
var envelopeIcon={path:"M8.967 71.687l82.418 0q.735 0 1.274-.539t.539-1.274l0-42.973q-1.813 2.009-3.871 3.675-14.945 11.515-20.825 16.415t-7.693 6.272-4.851 2.695q-3.038 1.372-5.733 1.372l-.098 0q-2.695 0-5.733-1.372t-4.851-2.695q-1.813-1.372-7.693-6.272t-20.825-16.415q-2.058-1.666-3.871-3.675l0 42.973q0 .735.539 1.274t1.274.539zm84.231-62.034q0-2.499-1.813-2.499l-82.418 0q-.735 0-1.274.539t-.539 1.274q0 9.408 8.232 15.925 21.952 17.297 25.676 20.433 5.733 4.851 9.065 4.851l.098 0q2.254 0 5.194-2.009t7.056-5.537q11.662-9.261 22.491-17.738 3.038-2.401 5.635-6.468t2.597-7.399l0-1.372zm7.154-.686l0 60.907q0 3.675-2.646 6.321t-6.321 2.646l-82.418 0q-3.675 0-6.321-2.646t-2.646-6.321l0-60.907q0-3.675 2.646-6.321t6.321-2.646l82.418 0q3.675 0 6.321 2.646t2.646 6.321z",width:100,height:91.88}
var isUnder13User=function e(t,r){var a=_moment2.default.utc().subtract(13,"years")
return _moment2.default.utc(t,"YYYY-MM-DD")>a&&r==="learner"}
var BirthdayAndSignupSubform=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,o
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,l=Array(i),s=0;s<i;s++){l[s]=arguments[s]}return o=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),a),a.state={birthdate:a.props.birthdate||"",birthdateError:"",birthdateFieldInFocus:false},a.updateBirthdateFromDateInput=function(e){a.setState({birthdate:e.target.value,birthdateError:""})},a.validateBirthdateFromDateInput=function(e){var t=e.target.value
var r=t&&(0,_moment2.default)(t,"YYYY-MM-DD")
if(r&&r.isAfter()){a.setState({birthdateError:futureBirthdateErrorMsg})}},a.updateBirthdateFromDatepicker=function(e){if(e){if(e.isAfter()){a.setState({birthdateError:futureBirthdateErrorMsg})}else{var t=e.format("YYYY-MM-DD")
a.setState({birthdate:t,birthdateError:""})}}},a.handleEmailClick=function(e){var t=a.props.role
var r=a.state.birthdate
var o=isUnder13User(r,t)
_bigbingo2.default.markConversion("signup_email_button_clicked")
a.props.onBirthdateChange(r,o)
a.props.updateStep("identify")},r),babelHelpers.possibleConstructorReturn(a,o)}t.prototype.componentDidUpdate=function e(t,r){var a=r.birthdate!==this.state.birthdate
if(a&&!this.state.birthdateError){_bigbingo2.default.markConversion("signup_birthdate_filled",{isIOS:_ka2.default.isIOS})}}
t.prototype.showSignupButtons=function e(){if(this.props.role!=="learner"){return true}return!!(this.state.birthdate&&!this.state.birthdateError)}
t.prototype.setBirthdateFieldInFocus=function e(t){if(t){_bigbingo2.default.markConversion("signup_birthdate_focused",{isIOS:_ka2.default.isIOS})}this.setState({birthdateFieldInFocus:t})}
t.prototype.maybeRenderSignupButtons=function e(){var t=this.props,r=t.continueUrl,a=t.googleContinueUrl,o=t.role,i=t.classCodes,l=t.showFacebookButton
var s=this.state.birthdate
var n=isUnder13User(s,o)
if(!this.showSignupButtons()){return null}var u=n&&!i
return React.createElement("div",{className:(0,_aphrodite.css)(styles.buttons)},!u&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.signupButtonWrapper)},React.createElement(_googleButton2.default,{color:_globalStyles2.default.colors.modernGoogle,hoverColor:_globalStyles2.default.colors.modernGoogleHover,width:"100%",size:"large",role:o,googleContinueUrl:a,postLoginContinueUrl:r,conversionId:"signup_google_button_clicked",classCodes:i,birthdate:s})),!n&&l&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.signupButtonWrapper)},React.createElement(_facebookButton2.default,{color:_globalStyles2.default.colors.modernFacebook,hoverColor:_globalStyles2.default.colors.modernFacebookHover,width:"100%",size:"large",role:o,postLoginContinueUrl:r,conversionId:"signup_facebook_button_clicked",classCodes:i})),React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.signupButtonWrapper)},React.createElement(_button2.default,{"data-test-id":"sign-up-with-email-button",color:n?_wonderBlocksColorV2.default.blue:_globalStyles2.default.colors.kaGreen,hoverColor:n?"#1044a4":_globalStyles2.default.colors.kaGreenHover,width:"100%",size:"large",icon:n?"":envelopeIcon,onClick:this.handleEmailClick},n?i18n._("Sign up by choosing a username"):i18n._("Sign up with Email"))))}
t.prototype.render=function e(){var t=this
var r=this.state,a=r.birthdate,o=r.birthdateError
var i=this.props.role
var l=!this.state.birthdateFieldInFocus&&o
var s=(0,_moment2.default)()
var n=(0,_moment2.default)().subtract(120,"years")
var u=_ka2.default.isIOS?React.createElement("input",{type:"date",min:n.format("YYYY-MM-DD"),max:s.format("YYYY-MM_DD"),className:(0,_aphrodite.css)(styles.dateInput,l&&_sharedStyles2.default.errorInput),value:a,onFocus:function e(r){return t.setBirthdateFieldInFocus(true)},onChange:function e(r){t.updateBirthdateFromDateInput(r)
t.validateBirthdateFromDateInput(r)},onBlur:function e(r){t.setBirthdateFieldInFocus(false)
t.validateBirthdateFromDateInput(r)}}):React.createElement("div",{className:(0,_aphrodite.css)(o&&_sharedStyles2.default.errorInput)},React.createElement(_birthdayPicker2.default,{appearance:"blue-mountain",defaultValue:this.state.birthdate,onChange:this.updateBirthdateFromDatepicker,onFocus:function e(t){_bigbingo2.default.markConversion("signup_birthdate_focused",{isIOS:_ka2.default.isIOS})},reportNull:false,showTitles:true}))
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(i==="learner"?styles.birthdayPickerWrapper:styles.invisibleBirthdayPickerWrapper)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.label)},React.createElement("div",{className:(0,_aphrodite.css)(styles.birthdayPickerPrompt)},i18n._("What is your date of birth?")),u,React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,o?_sharedStyles2.default.fieldError:_sharedStyles2.default.hiddenFieldError)},o))),this.maybeRenderSignupButtons())}
return t}(_react.Component)
BirthdayAndSignupSubform.defaultProps={under13:false,role:"learner",showFacebookButton:true}
var inputHeight=40
var styles=_aphrodite.StyleSheet.create({birthdayPickerWrapper:{display:"block",marginBottom:8,height:95},invisibleBirthdayPickerWrapper:{height:0,opacity:0,visibility:"hidden",overflow:"hidden"},birthdayPickerPrompt:{marginBottom:4},dateInput:{height:inputHeight,fontSize:_styleConstants2.default.BODY_FONT_SIZE,border:"1px solid "+_globalStyles2.default.colors.gray85,borderRadius:_globalStyles.borderRadius,minWidth:"50%",outline:"none",":focus":{borderColor:_globalStyles2.default.colors.kaGreen}},buttons:{animationName:{from:{opacity:0},to:{opacity:1}},animationDuration:"500ms"},login:{marginTop:24,marginBottom:72,textAlign:"center",fontSize:_styleConstants2.default.BODY_FONT_SIZE,color:_globalStyles2.default.colors.kaGreen},link:{":hover":{textDecoration:"none",color:_globalStyles2.default.colors.kaGreenHover}}})
module.exports=BirthdayAndSignupSubform

});
KAdefine("javascript/login-package/signup-actions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.verifyAndLinkOAuthAccount=exports.signupUnder13=exports.signup=exports.makeGoogleContinueObject=exports.login=exports.isUsernameAvailable=exports.isUsernameValid=exports.isEmailValid=exports.getcontinueUrlFromQueryString=undefined
var _formatQueryString=require("../shared-package/format-query-string.js")
var _formatQueryString2=babelHelpers.interopRequireDefault(_formatQueryString)
var _khanFetch=require("../shared-package/khan-fetch.js")
var _parseQueryString=require("../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var FORCE_CONTINUE_URLS=["/coaches"]
var getcontinueUrlFromQueryString=function e(){var r=(0,_parseQueryString2.default)()
var n=r.continue||""
var t=n.replace(location.protocol+"//","").replace(location.host,"")
if(FORCE_CONTINUE_URLS.includes(t)||(0,_parseQueryString2.default)().alwayscontinue){return t}return null}
var makeGoogleContinueObject=function e(){var r=(0,_parseQueryString2.default)()
var n="/postlogin"
var t={type:"google",referral:r.referral?r.referral:""}
var a=r.alwayscontinue
var i=getcontinueUrlFromQueryString()||"/"
return{createchild:n+"?"+(0,_formatQueryString2.default)(babelHelpers.extends({},t,{isparent:1,continue:a?i:"/createchild"})),teacher:n+"?"+(0,_formatQueryString2.default)(babelHelpers.extends({},t,{isteacher:1,continue:a?i:"/coach"})),parent:n+"?"+(0,_formatQueryString2.default)(babelHelpers.extends({},t,{isparent:1,continue:a?i:"/parent"})),default:n+"?"+(0,_formatQueryString2.default)(babelHelpers.extends({},t,{continue:i}))}}
function makeSignup(e,r){return function(n){return new Promise(function(t,a){return(0,_khanFetch.khanFetch)(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,_khanFetch.encodeParams)(r(n))}).then(function(e){return e.json()}).then(function(e){if(e.errors){a(e)}else{t(e)}}).catch(function(e){if(e.response){e.response.json().then(function(e){return a(e)}).catch(function(e){return a(e)})}else{a(e)}})})}}var signupUnder13=makeSignup("/signup/under13",function(e){return e})
var signup=makeSignup("/signup",function(e){return babelHelpers.extends({},e,{isteacher:e.role==="teacher"?1:0,isparent:e.role==="parent"?1:0})})
var login=makeSignup("/login",function(e){return e})
var isEmailValid=function e(r){return r&&/^.+@.+\..+$/.test(r)}
var isUsernameValid=function e(r){return r.charAt(0)!=="."&&/^[a-z][a-z0-9]{2,}$/.test(r.toLowerCase().replace(".",""))}
var isUsernameAvailable=function e(r){return new Promise(function(e,n){return(0,_khanFetch.khanFetch)("/api/internal/signup/check-username?"+(0,_khanFetch.encodeParams)({username:r})).then(function(r){return e(true)}).catch(function(r){var t=r.response
if(t.status===400){e(false)}else{n()}})})}
var verifyAndLinkOAuthAccount=function e(r){return new Promise(function(e,n){return(0,_khanFetch.khanFetch)("/login/oauth/verify",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,_khanFetch.encodeParams)({password:r})}).then(function(){return e(true)}).catch(function(e){var r=e.response
if(r.status===400){n({badRequest:true})}else if(r.status===401){n({unauthorized:true})}else{n({error:true})}})})}
exports.getcontinueUrlFromQueryString=getcontinueUrlFromQueryString
exports.isEmailValid=isEmailValid
exports.isUsernameValid=isUsernameValid
exports.isUsernameAvailable=isUsernameAvailable
exports.login=login
exports.makeGoogleContinueObject=makeGoogleContinueObject
exports.signup=signup
exports.signupUnder13=signupUnder13
exports.verifyAndLinkOAuthAccount=verifyAndLinkOAuthAccount

});
KAdefine("javascript/login-package/reset-password-actions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.requestPasswordReset=exports.resetPassword=undefined
var _khanFetch=require("../shared-package/khan-fetch.js")
var resetPassword=exports.resetPassword=function e(r,t,n){return new Promise(function(e,s){return(0,_khanFetch.khanFetch)("/api/internal/login/reset_password",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,_khanFetch.encodeParams)({token:r,password:t,fkey:n})}).then(function(e){return e.json()}).then(e).catch(function(e){if(e.response){var r=e.response
if(r===401){return s({unauthorized:true})}else if(r===400){return s({badRequest:true})}}s({error:true})})})}
var requestPasswordReset=exports.requestPasswordReset=function e(r){return(0,_khanFetch.khanFetch)("/api/internal/login/reset_password_request",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,_khanFetch.encodeParams)({email:r})})}

});
KAdefine("javascript/login-package/centered-popup-window.js", function(require, module, exports) {
var centeredPopupWindow=function e(n,o,r,i){var w=window.screenLeft?window.screenLeft:window.screenX
var d=window.screenTop?window.screenTop:window.screenY
var t=w+(window.innerWidth-r)/2
var s=d+(window.innerHeight-i)/2
var a="menubar=no, scrollbars=yes, resizable=no, toolbar=no, "+"location=no, directories=no, status=yes, dependent=yes, "+"width="+r+", height="+i+", "+"top="+s+", left="+t
return window.open(n,o,a)}
module.exports=centeredPopupWindow

});
KAdefine("javascript/login-package/create-post-login-url.js", function(require, module, exports) {
function createPostLoginUrl(e){var t="/postlogin?"
t+="type="+e.type
if(e.role==="teacher"){t+="&isteacher=1"}else if(e.role==="parent"){t+="&isparent=1"}if(typeof Intl!=="undefined"){var n=Intl.DateTimeFormat().resolvedOptions().timeZone
if(n){t+="&timezone="+encodeURIComponent(n)}}var o=(new Date).getTimezoneOffset()
t+="&offsetMin="+o
if(e.linkClever){t+="&linkclever=1"}t+="&continue="+encodeURIComponent(e.continueUrl||createContinueUrl())
if(e.referral){t+="&referral="+e.referral}if(e.classCodes){t+="&classCodes="+e.classCodes.join(",")}if(e.birthdate){t+="&birthdate="+e.birthdate}return t}function createContinueUrl(){var e=window.location.pathname+window.location.search+window.location.hash
return e}module.exports=createPostLoginUrl

});
KAdefine("javascript/login-package/shared-styles.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _mainHeading,_description,_subHeadingText
var _aphrodite=require("aphrodite")
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var FIELD_REQ_LINE_HEIGHT=18
var XL_MAX_WIDTH=_styleConstants2.default.MAX_SCREEN_WIDTH-2*_styleConstants2.default.XL_MAX_H_PADDING
var LG_MAX_WIDTH=354
var TEXT_INPUT_H_PADDING=15
exports.default=_aphrodite.StyleSheet.create({fieldWrapper:{display:"flex",width:"100%",":not(:first-of-type)":{marginTop:2}},label:{display:"block",fontSize:15,fontWeight:600,lineHeight:"23px",color:_globalStyles2.default.colors.gray17,width:"100%",":not(:last-of-type)":{marginRight:8}},link:{color:_globalStyles2.default.colors.kaGreen,":hover":{textDecoration:"none",color:_globalStyles2.default.colors.kaGreenHover}},errorInput:{borderColor:_globalStyles2.default.colors.alertRed,":focus":{borderColor:_globalStyles2.default.colors.alertRed}},errorInputShake:{animationName:{from:{transform:"translate(-5px)"},to:{transform:"translate(5px)"}},animationTimingFunction:_globalStyles2.default.standardTransitionExtras,animationDuration:_globalStyles2.default.standardTransitionMs+"ms",animationIterationCount:"3",animationDirection:"alternate",":focus":{borderColor:_globalStyles2.default.colors.alertRed}},fieldRequirement:{fontSize:12,color:_globalStyles2.default.colors.gray17,fontWeight:"normal",lineHeight:FIELD_REQ_LINE_HEIGHT+"px",marginTop:4,marginBottom:4},fieldRequirementContainer:{display:"flex",flexDirection:"column",minHeight:30,boxSizing:"border-box",":last-child":{marginBottom:0}},fieldError:{color:_globalStyles2.default.colors.alertRed,lineHeight:_styleConstants2.default.FIELD_REQ_HEIGHT+"px",maxHeight:"calc(4 * "+FIELD_REQ_LINE_HEIGHT+"px)",transition:_globalStyles2.default.standardTransition,transitionProperty:"max-height, opacity"},hiddenFieldError:{opacity:0,height:_styleConstants2.default.FIELD_REQ_HEIGHT,maxHeight:_styleConstants2.default.FIELD_REQ_HEIGHT},mainHeading:(_mainHeading={color:_globalStyles2.default.colors.white,maxWidth:XL_MAX_WIDTH,fontSize:_styleConstants2.default.HEADING_FONT_SIZE_XL,fontWeight:"bold",lineHeight:1.1,marginTop:_styleConstants2.default.XL_MARGIN_TOP,marginBottom:0},_mainHeading[_mediaQueries2.default.lg]={maxWidth:LG_MAX_WIDTH,fontSize:_styleConstants2.default.HEADING_FONT_SIZE,lineHeight:1.25,marginTop:_styleConstants2.default.LG_MARGIN_TOP,marginLeft:_styleConstants2.default.LG_MIN_H_PADDING,marginRight:_styleConstants2.default.LG_MIN_H_PADDING},_mainHeading[_mediaQueries2.default.mdOrSmaller]={width:_styleConstants2.default.FORM_WIDTH,marginTop:0,marginBottom:0,fontSize:_styleConstants2.default.HEADING_FONT_SIZE,lineHeight:"27px"},_mainHeading[_mediaQueries2.default.xs]={width:"100%"},_mainHeading),description:(_description={color:_globalStyles2.default.colors.white,maxWidth:XL_MAX_WIDTH,fontWeight:400,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",marginTop:16,marginBottom:0},_description[_mediaQueries2.default.lg]={marginLeft:_styleConstants2.default.LG_MIN_H_PADDING,marginRight:_styleConstants2.default.LG_MIN_H_PADDING,marginBottom:0,":first-child":{marginTop:16},":last-child":{marginBottom:96}},_description[_mediaQueries2.default.mdOrSmaller]={width:_styleConstants2.default.FORM_WIDTH,marginTop:16},_description[_mediaQueries2.default.xs]={width:"100%"},_description),subHeadingText:(_subHeadingText={fontSize:_styleConstants2.default.SUBHEADING_FONT_SIZE,lineHeight:1.47},_subHeadingText[_mediaQueries2.default.mdOrSmaller]={display:"none"},_subHeadingText),signupButtonWrapper:{marginTop:4},resetSize:{fontSize:"inherit"},rule:{border:0,background:"none",marginTop:36,marginBottom:36},textInput:{marginTop:4,padding:"0 "+TEXT_INPUT_H_PADDING+"px",height:40,fontSize:_styleConstants2.default.BODY_FONT_SIZE,border:"1px solid "+_globalStyles2.default.colors.gray85,borderRadius:_globalStyles2.default.borderRadius,width:"\n            calc(100% - "+TEXT_INPUT_H_PADDING+"px - "+TEXT_INPUT_H_PADDING+"px)\n        ",outline:"none",flex:1,":focus":{borderColor:_globalStyles2.default.colors.kaGreen}}})

});
KAdefine("javascript/login-package/social.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var FacebookUtil=require("../shared-package/facebookutil.js")
var KA=require("../shared-package/ka.js")
var centeredPopupWindow=require("./centered-popup-window.js")
var LoginWarningModal=React.createFactory(require("../zero-rating-package/login-warning-modal.jsx"))
var showZeroRatingWarning=exports.showZeroRatingWarning=function o(e,n){if(!KA.isZeroRated){return e()}var i=document.getElementById("login-warning-modal-holder")
if(!i){i=document.createElement("div")
i.setAttribute("id","login-warning-modal-holder")
document.body.appendChild(i)}ReactDOM.render(LoginWarningModal({onCancel:function o(){i.innerHTML=""},onAccept:function o(){i.innerHTML=""
e(n)}}),i)}
var redirectToFacebookLogin=function o(e){var n=encodeURIComponent(e)
window.location="/login/facebook?continue="+n}
var createFacebookPostLoginUrl=exports.createFacebookPostLoginUrl=function o(e,n,i){n=n||"/postlogin?type=facebook"
if(e){n+="&continue="+encodeURIComponent(e)}if(i){n+="&isteacher=1"}return n}
var connectWithFacebook=exports.connectWithFacebook=function o(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
if(KA.isZeroRated){showZeroRatingWarning(function(){redirectToFacebookLogin(e)})}else if(n||!FacebookUtil.isConnected()){redirectToFacebookLogin(e)}else{launchFacebookConnection(e)}}
var launchFacebookConnection=exports.launchFacebookConnection=function o(e,n){if(!n){n=function o(e){window.location=e}}var i={scope:"email"}
FB.login(function(o){if(o){FacebookUtil.fixMissingCookie(o)}if(o["status"]==="connected"){FacebookUtil.markUsingFbLogin()
n(e)}},i)}
var connectWithGoogle=exports.connectWithGoogle=function o(e,n,i){showZeroRatingWarning(function(){return launchGoogleConnection(e,n,i)})}
var launchGoogleConnection=function o(e,n,i,t){if(!KA.isPhone&&!KA.isIPad&&!i){t=t||function(){window.location=n}
window.addEventListener("message",function(o){var e=o.data,n=o.origin
if(e==="loginConnectWithGoogleComplete"&&n===window.location.origin){t()}})
window.loginConnectWithGoogleComplete=t
centeredPopupWindow(e,"ConnectWithGoogle",870,585)}else{window.location=e+"?continue="+encodeURIComponent(n)}}

});
KAdefine("javascript/login-package/style-constants.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.default={MAX_SCREEN_WIDTH:534,TRANSITION_DELAY:"1ms",XL_MARGIN_TOP:80,LG_MARGIN_TOP:64,MOBILE_MARGIN_TOP:40,XL_MAX_H_PADDING:100,LG_MIN_H_PADDING:48,XS_MIN_H_PADDING:24,MD_H_PADDING:8,MD_V_MARGIN:16,FORM_WIDTH:368,FIELD_REQ_HEIGHT:22,HEADING_FONT_SIZE_XL:35,HEADING_FONT_SIZE:23,SUBHEADING_FONT_SIZE:17,BODY_FONT_SIZE:15}

});
KAdefine("javascript/login-package/types.js", function(require, module, exports) {

});
KAdefine("javascript/login-package/signup-modal.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _modal
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _modal2=require("../components/modal-package/modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _loginSignupWidget=require("./login-signup-widget.jsx")
var _loginSignupWidget2=babelHelpers.interopRequireDefault(_loginSignupWidget)
var SignupModal=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.componentDidMount=function e(){_bigbingo2.default.markConversion("signup_modal_shown")}
r.prototype.render=function e(){return React.createElement(_modal3.default,{onClose:this.props.onClose,style:styles.modal,hostInBody:true},React.createElement(_loginSignupWidget2.default,{initialPurpose:this.props.initialPurpose,initialRole:this.props.initialRole,isInModal:true,continueUrl:this.props.continueUrl}))}
return r}(_react.Component)
exports.default=SignupModal
var styles=_aphrodite.StyleSheet.create({modal:(_modal={width:_styleConstants2.default.MAX_SCREEN_WIDTH*2,maxWidth:"80%"},_modal[_mediaQueries2.default.smOrSmaller]={maxWidth:"100%"},_modal)})

});
KAdefine("javascript/login-package/facebook-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _social=require("./social.js")
var _button=require("../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var BigBingo=require("../shared-package/bigbingo.js")
var createPostLoginUrl=require("./create-post-login-url.js")
var KA=require("../shared-package/ka.js")
var i18n=require("../shared-package/i18n.js")
var facebookIcon={path:"M14.172 0H.827A.827.827 0 0 0 0 .828v13.344c0 .458.37.828.828.828h7.184V9.19H6.057V6.925h1.955v-1.67c0-1.938 1.183-2.992 2.913-2.992.827 0 1.54.062 1.747.09v2.025h-1.197c-.94 0-1.123.447-1.123 1.102v1.445h2.243L12.3 9.19h-1.95V15h3.822c.458 0 .828-.37.828-.828V.827A.827.827 0 0 0 14.172 0z",width:15,height:15}
var FacebookButton=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,a
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),l=0;l<n;l++){i[l]=arguments[l]}return a=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),t),t.handleClick=function(e){var r=t.props,o=r.postLoginContinueUrl,a=r.linkClever,n=r.role,i=r.classCodes
e.preventDefault()
if(t.props.conversionId){BigBingo.markConversion(t.props.conversionId)}var l=createPostLoginUrl({type:"facebook",role:n,linkClever:a,classCodes:i,continueUrl:o});(0,_social.connectWithFacebook)(l,t.props.forceDirectLink)},o),babelHelpers.possibleConstructorReturn(t,a)}r.prototype.render=function e(){var r=this.props,o=r.color,t=r.disabled,a=r.hoverColor,n=r.width,i=r.grow,l=r.shrink,s=r.size
if(KA.isZeroRated){return null}return React.createElement(_button2.default,{icon:facebookIcon,color:o||_globalStyles.colors.facebook,disabled:t,hoverColor:a,onClick:this.handleClick,width:n,grow:i,shrink:l,size:s},i18n._("Continue with Facebook"))}
return r}(_react.Component)
FacebookButton.defaultProps={forceDirectLink:false}
exports.default=FacebookButton

});
KAdefine("javascript/login-package/google-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _social=require("./social.js")
var _button=require("../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var BigBingo=require("../shared-package/bigbingo.js")
var createPostLoginUrl=require("./create-post-login-url.js")
var i18n=require("../shared-package/i18n.js")
var google2015Icon={path:"M25.5,10.7c0.2,0.9,0.3,1.8,0.3,2.8c0,7.5-5,12.8-12.6,12.8C5.9,26.2,0,20.4,0,13.1S5.9,0,13.1,0c3.5,0,6.5,1.3,8.8,3.4  l-3.7,3.7v0c-1.4-1.3-3.1-2-5.1-2c-4.3,0-7.9,3.7-7.9,8c0,4.3,3.5,8,7.9,8c3.9,0,6.6-2.2,7.2-5.3h-7.2v-5.1L25.5,10.7L25.5,10.7z",width:25,height:28}
var signupUrl="/signup/google"
var GoogleButton=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,l
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,n=Array(i),a=0;a<i;a++){n[a]=arguments[a]}return l=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),t),t.handleClick=function(e){var r=t.props,o=r.forceDirectLink,l=r.googleContinueUrl,i=r.linkClever,n=r.postLoginContinueUrl,a=r.conversionId,s=r.role,c=r.classCodes,u=r.birthdate
e.preventDefault()
if(a){BigBingo.markConversion(a)}var g=void 0
if(n&&n.slice(0,2)!=="/?"&&n!=="/"){g=n}else if(typeof l==="string"){g=l}else if((typeof l==="undefined"?"undefined":babelHelpers.typeof(l))==="object"){g=l[s==="teacher"||s==="parent"?s:"default"]}else{g="/"}var p=createPostLoginUrl({type:"google",role:s,linkClever:i,classCodes:c,birthdate:u,continueUrl:g});(0,_social.connectWithGoogle)(signupUrl,p,o)},o),babelHelpers.possibleConstructorReturn(t,l)}r.prototype.render=function e(){var r=this.props,o=r.color,t=r.disabled,l=r.hoverColor,i=r.width,n=r.grow,a=r.shrink,s=r.size,c=r.textColor
return React.createElement(_button2.default,babelHelpers.extends({icon:google2015Icon,color:o||_globalStyles.colors.google,disabled:t,hoverColor:l,onClick:this.handleClick,width:i,grow:n,shrink:a,size:s},c?{textColor:c}:{}),i18n._("Continue with Google"))}
return r}(_react.Component)
GoogleButton.defaultProps={forceDirectLink:false}
exports.default=GoogleButton

});
KAdefine("javascript/login-package/progress-shell/progress-shell.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.DETAIL_SCREEN_HEIGHT_ON_MOBILE=exports.DETAIL_SCREEN_HEIGHT_ON_TABLET=exports.MAX_SCREEN_HEIGHT=exports.MIN_SCREEN_HEIGHT=undefined
var _progressShell,_standaloneProgressSh,_progressShellPadding,_detailScreen,_detailScreenHeight,_actionScreenContaine,_actionScreenPadding
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _styleConstants=require("../style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var MIN_SCREEN_HEIGHT=exports.MIN_SCREEN_HEIGHT=475
var MAX_SCREEN_HEIGHT=exports.MAX_SCREEN_HEIGHT=800
var DETAIL_SCREEN_HEIGHT_ON_TABLET=exports.DETAIL_SCREEN_HEIGHT_ON_TABLET=292
var DETAIL_SCREEN_HEIGHT_ON_MOBILE=exports.DETAIL_SCREEN_HEIGHT_ON_MOBILE=222
var DETAIL_SCREEN_STANDALONE_HEIGHT=400
var ACTION_SCREEN_STANDALONE_HEIGHT=320
var ProgressShell=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,s
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,i=Array(l),n=0;n<l;n++){i[n]=arguments[n]}return s=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={step:a.props.initialStep},a._isMounted=false,a.handleUpdateStep=function(e){a._isMounted&&a.setState({step:e})},r),babelHelpers.possibleConstructorReturn(a,s)}t.prototype.componentDidMount=function e(){this._isMounted=true}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype.render=function e(){var t=this.props,r=t.includePadding,a=t.embedded
var s=this.props.detailScreen(this.state.step,this.handleUpdateStep)
var l=this.props.actionScreen(this.state.step,this.handleUpdateStep)
return React.createElement("div",{className:(0,_aphrodite.css)(styles.progressShell,!a&&styles.standaloneProgressShell,r&&styles.progressShellPadding)},s&&React.createElement("section",{className:(0,_aphrodite.css)(styles.detailScreen,l?styles.detailScreenHeight:styles.detailScreenStandaloneHeight,r&&styles.detailScreenPadding)},s),l&&React.createElement("section",{className:(0,_aphrodite.css)(styles.actionScreenContainer,s?styles.actionScreenHeight:styles.actionScreenStandaloneHeight,r&&styles.actionScreenPadding)},l))}
return t}(_react.Component)
ProgressShell.defaultProps={includePadding:true,embedded:false}
var styles=_aphrodite.StyleSheet.create({progressShell:(_progressShell={position:"relative",flex:1,display:"flex",flexDirection:"column"},_progressShell[_mediaQueries2.default.lgOrLarger]={flexDirection:"row"},_progressShell[_mediaQueries2.default.xs]={width:"100%",minHeight:"100%"},_progressShell),standaloneProgressShell:(_standaloneProgressSh={maxWidth:"calc("+_styleConstants2.default.MAX_SCREEN_WIDTH+"px * 2)",width:_styleConstants2.default.MAX_SCREEN_WIDTH},_standaloneProgressSh[_mediaQueries2.default.lgOrLarger]={maxHeight:MAX_SCREEN_HEIGHT,width:"80%"},_standaloneProgressSh),progressShellPadding:(_progressShellPadding={},_progressShellPadding[_mediaQueries2.default.lgOrLarger]={paddingBottom:_globalStyles2.default.pageHeaderHeight},_progressShellPadding),detailScreen:(_detailScreen={flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:"100%",backgroundColor:_globalStyles2.default.colors.backgroundBlue,borderRadius:_globalStyles.borderRadius+"px 0 0 "+_globalStyles.borderRadius+"px"},_detailScreen[_mediaQueries2.default.mdOrSmaller]={borderRadius:_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0 0"},_detailScreen[_mediaQueries2.default.xs]={marginTop:0,borderRadius:0},_detailScreen),detailScreenHeight:(_detailScreenHeight={},_detailScreenHeight[_mediaQueries2.default.mdOrSmaller]={height:DETAIL_SCREEN_HEIGHT_ON_TABLET,maxHeight:DETAIL_SCREEN_HEIGHT_ON_TABLET},_detailScreenHeight[_mediaQueries2.default.xs]={height:DETAIL_SCREEN_HEIGHT_ON_MOBILE,maxHeight:DETAIL_SCREEN_HEIGHT_ON_MOBILE},_detailScreenHeight),detailScreenStandaloneHeight:{height:DETAIL_SCREEN_STANDALONE_HEIGHT},detailScreenPadding:{marginTop:50},actionScreenContainer:(_actionScreenContaine={position:"relative",minWidth:_styleConstants2.default.MAX_SCREEN_WIDTH,backgroundColor:"rgba(255, 255, 255, 0.98)",borderRadius:"0 0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px",display:"flex"},_actionScreenContaine[_mediaQueries2.default.lgOrLarger]={borderRadius:"0 "+_globalStyles.borderRadius+"px "+_globalStyles.borderRadius+"px 0"},_actionScreenContaine[_mediaQueries2.default.xs]={minWidth:"100%",borderRadius:0},_actionScreenContaine),actionScreenHeight:{minHeight:MIN_SCREEN_HEIGHT},actionScreenStandaloneHeight:{minHeight:ACTION_SCREEN_STANDALONE_HEIGHT},actionScreenPadding:(_actionScreenPadding={},_actionScreenPadding[_mediaQueries2.default.lgOrLarger]={marginTop:50},_actionScreenPadding)})
exports.default=ProgressShell

});
KAdefine("javascript/login-package/progress-shell/progress-shell-with-background.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _progressShellWithBac,_upperCloud,_lowerCloud
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _kaProvider=require("../../components/ssr-package/ka-provider.jsx")
var _kaProvider2=babelHelpers.interopRequireDefault(_kaProvider)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _progressShell=require("./progress-shell.jsx")
var _progressShell2=babelHelpers.interopRequireDefault(_progressShell)
var ProgressShellWithBackground=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.progressShellWithBackground)},React.createElement(_kaProvider2.default,{mockOnFirstRender:true},function(e){return React.createElement("div",{className:(0,_aphrodite.css)(styles.upperCloud,!e.isIE11&&!e.isIE10&&styles.movingUpperCloud)})}),React.createElement(_kaProvider2.default,{mockOnFirstRender:true},function(e){return React.createElement("div",{className:(0,_aphrodite.css)(styles.lowerCloud,!e.isIE11&&!e.isIE10&&styles.movingLowerCloud)})}),React.createElement(_progressShell2.default,this.props))}
return r}(_react.Component)
var edgeMountainSrc="/images/signup/mountain.svg"
var whiteCloudSrc="/images/signup/cloud_white.svg"
var cloudSrc="/images/signup/cloud.svg"
var starsWhiteSrc="/images/signup/stars_white.svg"
var starsDBlueSrc="/images/signup/stars_dblue.svg"
var starsLBlueSrc="/images/signup/stars_lblue.svg"
var styles=_aphrodite.StyleSheet.create({progressShellWithBackground:(_progressShellWithBac={position:"relative",display:"flex",justifyContent:"center",overflow:"hidden",backgroundImage:"\n            url("+(0,_staticUrl2.default)(edgeMountainSrc)+"),\n            url("+(0,_staticUrl2.default)(starsWhiteSrc)+"),\n            url("+(0,_staticUrl2.default)(starsDBlueSrc)+"),\n            url("+(0,_staticUrl2.default)(starsLBlueSrc)+"),\n            linear-gradient(to bottom, #066ee2, rgba(6, 110, 226, 0.0)),\n            linear-gradient(315deg, #01d1c1, rgba(0, 209, 193, 0.0)),\n            linear-gradient(#63d9ea, #63d9ea)\n        ",backgroundRepeat:"no-repeat",backgroundPosition:"\n            bottom right,\n            left 50% top 60%,\n            center,\n            center,\n            center,\n            center,\n            center\n        ",backgroundSize:"\n            auto 45%,\n            contain,\n            contain,\n            contain,\n            contain,\n            contain,\n            contain\n        ",minHeight:"calc(100vh - "+_globalStyles2.default.pageHeaderHeight+"px)",paddingTop:_globalStyles2.default.pageHeaderHeight},_progressShellWithBac[_mediaQueries2.default.xs]={backgroundColor:_globalStyles2.default.colors.backgroundBlue,backgroundImage:"none"},_progressShellWithBac),upperCloud:(_upperCloud={position:"absolute",width:"100%",height:"100%",backgroundImage:"url("+(0,_staticUrl2.default)(whiteCloudSrc)+")",backgroundRepeat:"no-repeat",backgroundPosition:"left 5% top 27%",backgroundSize:"10% auto"},_upperCloud[_mediaQueries2.default.xs]={display:"none"},_upperCloud),movingUpperCloud:{animationName:{from:{transform:"translateX(0)"},to:{transform:"translateX(100%)"}},animationTimingFunction:"linear",animationDuration:"600s",animationIterationCount:"infinite",animationDirection:"alternate"},lowerCloud:(_lowerCloud={position:"absolute",width:"100%",height:"100%",backgroundImage:"url("+(0,_staticUrl2.default)(cloudSrc)+")",backgroundRepeat:"no-repeat",backgroundPosition:"right 7% bottom 23%",backgroundSize:"8% auto"},_lowerCloud[_mediaQueries2.default.xs]={display:"none"},_lowerCloud),movingLowerCloud:{animationName:{from:{transform:"translateX(0)"},to:{transform:"translateX(-100%)"}},animationTimingFunction:_globalStyles2.default.standardTransitionExtras,animationDuration:"840s",animationIterationCount:"infinite",animationDirection:"alternate"}})
exports.default=ProgressShellWithBackground

});
KAdefine("javascript/login-package/progress-shell/progress-shell-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _actionScreenInner,_proceedButton
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _link=require("../../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _styleConstants=require("../style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var i18n=require("../../shared-package/i18n.js")
var SUBMIT_BUTTON_HEIGHT=40
var SUBMIT_BUTTON_WIDTH=160
var SUBMIT_BUTTON_WIDTH_XS=172
var EDGE_SPACING=8
var PROGRESS_NAV_HEIGHT=SUBMIT_BUTTON_HEIGHT+2*EDGE_SPACING
var PROGRESS_NAV_BACK_MARGIN=2*EDGE_SPACING
var PROGRESS_NAV_PROCEED_MARGIN=EDGE_SPACING
var ProgressShellActionScreen=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,s=Array(l),o=0;o<l;o++){s[o]=arguments[o]}return n=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r._focusTarget=null,a),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.componentDidMount=function e(){if(this._focusTarget){this._focusTarget.focus()}}
t.prototype.render=function e(){var t=this
var a=this.props,r=a.backLabel,n=a.children,l=a.onBackClick,s=a.onProceedClick,o=a.proceedDisabled,i=a.proceedLabel,c=a.showBackButton,u=a.showProceedButton
return React.createElement("div",{className:(0,_aphrodite.css)(styles.actionScreen)},React.createElement("span",{tabIndex:-1,ref:function e(a){return t._focusTarget=a}}),React.createElement("div",{className:(0,_aphrodite.css)(styles.actionScreenInner)},n),(c||u)&&React.createElement("nav",{className:(0,_aphrodite.css)(styles.progressNav)},React.createElement("div",{className:(0,_aphrodite.css)(styles.backLink)},c&&React.createElement(_link2.default,{onClick:l},r||i18n._("Back"))),React.createElement("div",{className:(0,_aphrodite.css)(styles.proceedButton)},u&&React.createElement(_button2.default,{testId:"progress-shell-proceed-button",width:"100%",color:_globalStyles2.default.colors.kaBlueHover,onClick:s,disabled:o},i))))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({actionScreen:{display:"flex",flexDirection:"column",width:"100%"},actionScreenInner:(_actionScreenInner={display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto",flexGrow:1,marginTop:_styleConstants2.default.XL_MARGIN_TOP,width:_styleConstants2.default.FORM_WIDTH,fontSize:_styleConstants2.default.BODY_FONT_SIZE,fontWeight:600,lineHeight:1.53,color:_globalStyles2.default.colors.gray17},_actionScreenInner[_mediaQueries2.default.lg]={marginTop:_styleConstants2.default.LG_MARGIN_TOP},_actionScreenInner[_mediaQueries2.default.mdOrSmaller]={marginTop:_styleConstants2.default.MOBILE_MARGIN_TOP},_actionScreenInner[_mediaQueries2.default.xs]={maxWidth:"calc(100% - 2 * "+_styleConstants2.default.XS_MIN_H_PADDING+"px)",paddingLeft:_styleConstants2.default.XS_MIN_H_PADDING,paddingRight:_styleConstants2.default.XS_MIN_H_PADDING},_actionScreenInner),progressNav:{display:"flex",alignItems:"center",marginTop:"auto",backgroundColor:_globalStyles2.default.colors.white,height:PROGRESS_NAV_HEIGHT,bottom:0,left:0},backLink:{marginLeft:PROGRESS_NAV_BACK_MARGIN,marginRight:"auto",color:_globalStyles2.default.colors.kaGreen,fontSize:_styleConstants2.default.BODY_FONT_SIZE,lineHeight:SUBMIT_BUTTON_HEIGHT+"px",fontWeight:600},proceedButton:(_proceedButton={marginLeft:"auto",marginRight:PROGRESS_NAV_PROCEED_MARGIN,height:SUBMIT_BUTTON_HEIGHT,width:SUBMIT_BUTTON_WIDTH},_proceedButton[_mediaQueries2.default.xs]={width:SUBMIT_BUTTON_WIDTH_XS},_proceedButton)})
exports.default=ProgressShellActionScreen

});
KAdefine("javascript/login-package/progress-shell/progress-shell-detail-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _outer,_inner
var _aphrodite=require("aphrodite")
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _mediaQueries=require("../../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _aphroditeCssTransitionGroup=require("../../shared-styles-package/aphrodite-css-transition-group.jsx")
var _aphroditeCssTransitionGroup2=babelHelpers.interopRequireDefault(_aphroditeCssTransitionGroup)
var _styleConstants=require("../style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _sharedStyles=require("../shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var ProgressShellDetailScreen=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props,a=t.heading,r=t.optionalDetailItems,s=t.detailContent,l=t.transitionKey
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.outer)},_react2.default.createElement(_aphroditeCssTransitionGroup2.default,{transitionStyle:fadeTransition,transitionEnterTimeout:1},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.inner),key:l},_react2.default.createElement("h1",{className:(0,_aphrodite.css)(_sharedStyles2.default.mainHeading)},a),r&&r.map(function(e,t){return _react2.default.createElement("h2",{className:(0,_aphrodite.css)(_sharedStyles2.default.subHeadingText,_sharedStyles2.default.description),key:t},e)}),_react2.default.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.description,styles.after)},s))))}
return t}(_react.Component)
var fadeTransition=_aphrodite.StyleSheet.create({enter:{opacity:0},enterActive:{opacity:1,transition:_globalStyles2.default.standardTransition,transitionProperty:"opacity"},leave:{display:"none"},leaveActive:{display:"none"}})
var styles=_aphrodite.StyleSheet.create({outer:(_outer={height:"100%"},_outer[_mediaQueries2.default.mdOrSmaller]={marginTop:_styleConstants2.default.MD_V_MARGIN,marginBottom:_styleConstants2.default.MD_V_MARGIN,paddingLeft:_styleConstants2.default.MD_H_PADDING,paddingRight:_styleConstants2.default.MD_H_PADDING,overflowY:"auto",overflowX:"hidden","::-webkit-scrollbar":{width:4},"::-webkit-scrollbar-track":{backgroundColor:_globalStyles2.default.colors.gray85,borderRadius:_globalStyles.borderRadius},"::-webkit-scrollbar-thumb":{backgroundColor:_globalStyles2.default.colors.gray41,borderRadius:_globalStyles.borderRadius}},_outer[_mediaQueries2.default.xs]={maxWidth:"calc(100% - 2 * "+_styleConstants2.default.XS_MIN_H_PADDING+"px)",paddingLeft:_styleConstants2.default.XS_MIN_H_PADDING,paddingRight:_styleConstants2.default.XS_MIN_H_PADDING},_outer),inner:(_inner={},_inner[_mediaQueries2.default.mdOrSmaller]={height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},_inner),after:{fontSize:_styleConstants2.default.SUBHEADING_FONT_SIZE,lineHeight:1.47}})
exports.default=ProgressShellDetailScreen

});
KAdefine("javascript/login-package/components/types.js", function(require, module, exports) {

});
KAdefine("javascript/login-package/components/identity-text-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _textField=require("../../components/text-inputs-package/text-field.jsx")
var _textField2=babelHelpers.interopRequireDefault(_textField)
var _sharedStyles=require("../shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var i18n=require("../../shared-package/i18n.js")
var GenericErrors={UNKNOWN:i18n._("An error occured while validating this field."),EMPTY:i18n._("This field cannot be left empty.")}
var IdentityTextField=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,l
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,i=Array(n),s=0;s<n;s++){i[s]=arguments[s]}return l=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={focused:false,validation:null,value:null},a.handleValueChange=function(e){var t=a.props.normalizer
e=t(e)
a.setState({value:e})
a.validate(e)},a.handleChange=function(e){var t=a.props.onChange
if(t){t(e)}a.handleValueChange(e.target.value)},a.handleFocus=function(e){var t=a.props.onFocus
a.setState({focused:true})
if(t){t(e)}},a.handleBlur=function(e){var t=a.props.onBlur
a.setState({focused:false})
a.validate(e.target.value)
if(t){t(e)}},r),babelHelpers.possibleConstructorReturn(a,l)}t.prototype.UNSAFE_componentWillUpdate=function e(t,r){var a=t.value
var l=a===null||a===undefined
if(!l&&t.value!==this.props.value){this.handleValueChange(t.value)}}
t.prototype.validate=function e(t){var r=this
var a=this.props,l=a.allowEmpty,n=a.emptyMessage,i=a.validator
var s=function e(a){var l=r.props.onValidation
if(l){l(!a,t,a)}r.setState({validation:a})}
if(t===""&&!l){s(n||GenericErrors.EMPTY)}else{var o=i(t)
if(o instanceof Promise){o.then(s).catch(function(e){return r.setState({validation:GenericErrors.UNKNOWN})})}else{s(o)}}}
t.prototype.shouldShowError=function e(){var t=this.props,r=t.showValidationWhileFocused,a=t.error
var l=this.state,n=l.focused,i=l.validation
return a||(!n||r)&&i}
t.prototype._internalRender=function e(t){var r=this.props,a=r.error,l=r.fieldType,n=r.label,i=r.notice,s=r.onSubmit,o=r.placeholder,d=r.suggestion,u=r.testId
var c=this.state,p=c.value,h=c.validation,f=c.focused
var v=this.shouldShowError()
var y=v?_sharedStyles2.default.fieldError:d?_sharedStyles2.default.fieldWarning:_sharedStyles2.default.hiddenFieldError
var m=null
if(n){var S=n.toString().toLowerCase().replace(/[^a-zA-Z0-9 ]/g,"").replace(/ /g,"-")
m=t.get(S)}return React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldWrapper,_sharedStyles2.default.label)},React.createElement("label",{htmlFor:m},n),i&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement)},i),React.createElement(_textField2.default,{className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,v&&_sharedStyles2.default.errorInput,v&&!f&&_sharedStyles2.default.errorInputShake),type:l,placeholder:o,value:p||"",width:"100%",onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onSubmit:s,testId:u,inputId:m}),React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,y)},a||h||d)))}
t.prototype.render=function e(){var t=this
return React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{mockOnFirstRender:false,scope:"identity-text-field"},function(e){return t._internalRender(e)})}
return t}(_react.Component)
IdentityTextField.defaultProps={allowEmpty:false,fieldType:"text",normalizer:function e(t){return t},placeholder:"",validateWhileFocused:false,validator:function e(t){return null}}
exports.default=IdentityTextField

});
KAdefine("javascript/login-package/components/email-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _mailcheck=require("../../../third_party/javascript-khansrc/mailcheck/mailcheck.js")
var _mailcheck2=babelHelpers.interopRequireDefault(_mailcheck)
var _globalStyles=require("../../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _signupActions=require("../signup-actions.js")
var _identityTextField=require("./identity-text-field.jsx")
var _identityTextField2=babelHelpers.interopRequireDefault(_identityTextField)
var i18n=require("../../shared-package/i18n.js")
var validationErrors={EMAIL_INVALID:i18n._("This email doesn't appear to be formatted correctly.")}
var normalizeEmail=function e(t){return t.toLowerCase().replace(/\s+/g,"")}
var EmailField=function(e){babelHelpers.inherits(t,e)
function t(){var i,a,r
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,n=Array(l),s=0;s<l;s++){n[s]=arguments[s]}return r=(i=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={pendingSuggestion:null,appliedSuggestion:null},a.handleBlur=function(e){var t=e.target.value
if((0,_signupActions.isEmailValid)(t)){_mailcheck2.default.mailcheck.run({email:t,suggested:a.handleSuggestionFromKicksend,empty:a.handleSuggestionFromKicksend})}},a.validateEmail=function(e){a.setState({appliedSuggestion:null})
if(!(0,_signupActions.isEmailValid)(e)){return validationErrors.EMAIL_INVALID}return null},a.handleSuggestionFromKicksend=function(e){if(e&&e.full){a.setState({pendingSuggestion:e.full})}},a.applySuggestion=function(){return a.setState({appliedSuggestion:a.state.pendingSuggestion,pendingSuggestion:null})},a.resetSuggestion=function(){return a.setState({appliedSuggestion:null})},i),babelHelpers.possibleConstructorReturn(a,r)}t.prototype.renderEmailSuggestion=function e(){var t=this
var i=this.state.pendingSuggestion
return i&&i18n.$_("Did you mean %(suggestionSpan)s?",{suggestionSpan:React.createElement("a",{className:(0,_aphrodite.css)(styles.emailSuggestion),onClick:this.applySuggestion,tabIndex:"0",onKeyPress:function e(i){return i.key==="Enter"&&t.applySuggestion()}},i)})}
t.prototype.render=function e(){return React.createElement(_identityTextField2.default,babelHelpers.extends({label:i18n._("Your email"),allowEmpty:false,emptyMessage:i18n._("Please tell us your email."),fieldType:"email",normalizer:normalizeEmail,validator:this.validateEmail,value:this.state.appliedSuggestion,placeholder:i18n._("example@email.com"),suggestion:this.renderEmailSuggestion()},this.props,{onBlur:this.handleBlur,onChange:this.resetSuggestion}))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({emailSuggestion:{color:_globalStyles2.default.colors.kaGreen,":hover":{cursor:"pointer",textDecoration:"underline"}}})
exports.default=EmailField

});
KAdefine("javascript/login-package/components/name-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _identityTextField=require("./identity-text-field.jsx")
var _identityTextField2=babelHelpers.interopRequireDefault(_identityTextField)
var i18n=require("../../shared-package/i18n.js")
var labelForType=function e(r){if(r==="first"){return i18n._("First name")}else if(r==="last"){return i18n._("Last name")}else if(r==="full"){return i18n._("Your name")}else{return null}}
var emptyMessageForType=function e(r){if(r==="first"){return i18n._("Please tell us your first name.")}else if(r==="last"){return i18n._("Please tell us your last name.")}else if(r==="full"){return i18n._("Please tell us your full name.")}else{return null}}
var validatorForType=function e(r){return function(e){return e.trim().length===0?emptyMessageForType(r):null}}
exports.default=function(e){return React.createElement(_identityTextField2.default,babelHelpers.extends({emptyMessage:emptyMessageForType(e.nameType),label:labelForType(e.nameType),validator:validatorForType(e.nameType)},e))}

});
KAdefine("javascript/login-package/components/password-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _identityTextField=require("./identity-text-field.jsx")
var _identityTextField2=babelHelpers.interopRequireDefault(_identityTextField)
var i18n=require("../../shared-package/i18n.js")
var PASSWORD_MIN_LENGTH=8
var PASSWORD_CREATE_NOTICE=i18n.$_("Passwords should be at least %(length)s characters long and should contain a mixture of letters, numbers, and other characters.",{length:PASSWORD_MIN_LENGTH})
var validationErrors={TOO_SHORT:i18n.$_("Your password must be at least %(minLength)s characters long.",{minLength:PASSWORD_MIN_LENGTH})}
var validatePassword=function e(r){if(r.length<PASSWORD_MIN_LENGTH){return validationErrors.TOO_SHORT}return null}
exports.default=function(e){return React.createElement(_identityTextField2.default,babelHelpers.extends({label:e.isCreating?i18n._("Create a password"):i18n._("Enter your password"),emptyMessage:e.isCreating?i18n._("Please create a password."):i18n._("Please enter your password."),notice:e.isCreating?PASSWORD_CREATE_NOTICE:null,fieldType:"password",validator:e.isCreating?validatePassword:function(){return null}},e))}

});
KAdefine("javascript/login-package/components/username-field.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _signupActions=require("../signup-actions.js")
var _identityTextField=require("./identity-text-field.jsx")
var _identityTextField2=babelHelpers.interopRequireDefault(_identityTextField)
var i18n=require("../../shared-package/i18n.js")
var validationErrors={INVALID:i18n._("Usernames must contain only letters and numbers, start with a letter, and be at least three characters long."),UNAVAILABLE:i18n._("This username is unavailable.")}
var validateUsername=function e(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true
var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true
var r=arguments[2]
if(a&&!(0,_signupActions.isUsernameValid)(r)){return validationErrors.INVALID}else{if(t){return(0,_signupActions.isUsernameAvailable)(r).then(function(e){return e?null:validationErrors.UNAVAILABLE})}else{return null}}}
var UsernameField=function(e){babelHelpers.inherits(a,e)
function a(){var t,r,i
babelHelpers.classCallCheck(this,a)
for(var n=arguments.length,s=Array(n),l=0;l<n;l++){s[l]=arguments[l]}return i=(t=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.state={showValidationWhileFocused:false},r.handleValidation=function(e,a,t){var i=r.props.onValidation
r.setState({showValidationWhileFocused:t===validationErrors.UNAVAILABLE})
if(i){i(e,a,t)}},t),babelHelpers.possibleConstructorReturn(r,i)}a.prototype.render=function e(){var a=this.props,t=a.checkAvailable,r=a.checkValid
var i=this.state.showValidationWhileFocused
return React.createElement(_identityTextField2.default,babelHelpers.extends({label:i18n._("Choose a username"),notice:i18n._("Use letters and numbers only. For safety, don't use your real name.")},this.props,{emptyMessage:i18n._("Please choose a username."),onValidation:this.handleValidation,showValidationWhileFocused:i,validator:function e(a){return validateUsername(t,r,a)}}))}
return a}(_react.Component)
UsernameField.defaultProps={checkAvailable:true,checkValid:true}
exports.default=UsernameField

});
KAdefine("javascript/login-package/login-and-signup-buttons.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var i18n=require("../shared-package/i18n.js")
exports.default=function(e){var r=e.disabled,t=e.onLoginClick,a=e.onSignupClick
return React.createElement(_wonderBlocksCoreV.View,null,React.createElement(_wonderBlocksButtonV2.default,{disabled:r,onClick:a,"data-test-id":"create-account-button"},i18n._("Create a new account")),React.createElement(_wonderBlocksCoreV.View,{style:styles.shim8}),React.createElement(_wonderBlocksButtonV2.default,{disabled:r,kind:"secondary",onClick:t},i18n._("Log in to your existing account")))}
var styles=_aphrodite.StyleSheet.create({shim8:{height:8}})

});
KAdefine("javascript/login-package/login-signup-widget.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _analytics=require("../analytics-package/analytics.js")
var _analytics2=babelHelpers.interopRequireDefault(_analytics)
var _parseQueryString=require("../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var _loginActionScreen=require("./login-action-screen.jsx")
var _loginActionScreen2=babelHelpers.interopRequireDefault(_loginActionScreen)
var _progressShell=require("./progress-shell/progress-shell.jsx")
var _progressShell2=babelHelpers.interopRequireDefault(_progressShell)
var _progressShellDetailScreen=require("./progress-shell/progress-shell-detail-screen.jsx")
var _progressShellDetailScreen2=babelHelpers.interopRequireDefault(_progressShellDetailScreen)
var _progressShellWithBackground=require("./progress-shell/progress-shell-with-background.jsx")
var _progressShellWithBackground2=babelHelpers.interopRequireDefault(_progressShellWithBackground)
var _signupActions=require("./signup-actions.js")
var _signupIntroActionScreen=require("./signup-intro-action-screen.jsx")
var _signupIntroActionScreen2=babelHelpers.interopRequireDefault(_signupIntroActionScreen)
var _signupIdentifyActionScreen=require("./signup-identify-action-screen.jsx")
var _signupIdentifyActionScreen2=babelHelpers.interopRequireDefault(_signupIdentifyActionScreen)
var _signupDetailScreen=require("./signup-detail-screen.jsx")
var _signupDetailScreen2=babelHelpers.interopRequireDefault(_signupDetailScreen)
var _termsOfServiceSignupStatement=require("./terms-of-service-signup-statement.jsx")
var _termsOfServiceSignupStatement2=babelHelpers.interopRequireDefault(_termsOfServiceSignupStatement)
var i18n=require("../shared-package/i18n.js")
var LoginSignupWidget=function(e){babelHelpers.inherits(r,e)
function r(){var t,n,i
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,l=Array(a),s=0;s<a;s++){l[s]=arguments[s]}return i=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),n),n.state={role:n.props.initialRole||"learner",birthdate:"",under13:true},n.handleRoleChange=function(e){return n.setState({role:e})},n.handleBirthdateChange=function(e,r){return n.setState({birthdate:e,under13:r})},t),babelHelpers.possibleConstructorReturn(n,i)}r.prototype.componentDidMount=function e(){switch(this.props.initialPurpose){case"signup":_analytics2.default.reportPageLifecycleTiming("signup_page",{interactive:true,usable:true})
break
case"login":_analytics2.default.reportPageLifecycleTiming("login_page",{interactive:true,usable:true})
break}}
r.prototype.isForZendeskLogin=function e(){var r=(0,_parseQueryString2.default)(window.top.location.search)
return r.purpose==="zendesk"}
r.prototype.getContinueUrl=function e(){var r=this.props,t=r.continueUrl,n=r.alwaysContinue,i=r.initialRole
if(n){return t||""}switch(i){case"parent":return"/createchild"
case"teacher":return"/students"
default:return t||""}}
r.prototype.render=function e(){var r=this
var t=this.props,n=t.continueUrl,i=t.initialPurpose,a=t.isInModal,l=t.referral
var s=function e(t){switch(t){case"login":return React.createElement(_progressShellDetailScreen2.default,{heading:r.isForZendeskLogin()?i18n._("To continue to the Help Center, "+"log in to Khan Academy"):i18n._("Good to see you again!"),detailContent:React.createElement(_termsOfServiceSignupStatement2.default,{purpose:"login"})})
default:return React.createElement(_signupDetailScreen2.default,{role:r.state.role,referral:r.props.referral||"default"})}}
var o=function e(t,i){var a=r.state,s=a.role,o=a.birthdate,u=a.under13
switch(t){case"intro":return React.createElement(_signupIntroActionScreen2.default,{continueUrl:n,googleContinueUrl:(0,_signupActions.makeGoogleContinueObject)(),initialRole:s,birthdate:o,referral:l,onRoleChange:r.handleRoleChange,onBirthdateChange:r.handleBirthdateChange,updateStep:i})
case"identify":return React.createElement(_signupIdentifyActionScreen2.default,{birthdate:o,under13:u,role:s,referral:l||"default",updateStep:i,continueUrl:n})
case"login":return React.createElement(_loginActionScreen2.default,{continueUrl:n,googleContinueUrl:(0,_signupActions.makeGoogleContinueObject)(),role:s,updateStep:i})}}
var u=i==="signup"?"intro":"login"
return a?React.createElement(_progressShell2.default,{embedded:true,initialStep:u,includePadding:false,detailScreen:s,actionScreen:o}):React.createElement(_progressShellWithBackground2.default,{initialStep:u,detailScreen:s,actionScreen:o})}
return r}(_react.Component)
LoginSignupWidget.defaultProps={isInModal:false}
exports.default=LoginSignupWidget

});
KAdefine("javascript/login-package/login-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _button=require("../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _facebookButton=require("./facebook-button.jsx")
var _facebookButton2=babelHelpers.interopRequireDefault(_facebookButton)
var _googleButton=require("./google-button.jsx")
var _googleButton2=babelHelpers.interopRequireDefault(_googleButton)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _identityTextField=require("./components/identity-text-field.jsx")
var _identityTextField2=babelHelpers.interopRequireDefault(_identityTextField)
var _passwordField=require("./components/password-field.jsx")
var _passwordField2=babelHelpers.interopRequireDefault(_passwordField)
var _createPostLoginUrl=require("./create-post-login-url.js")
var _createPostLoginUrl2=babelHelpers.interopRequireDefault(_createPostLoginUrl)
var _signupActions=require("./signup-actions.js")
var Cookies=require("../shared-package/cookies.js")
var i18n=require("../shared-package/i18n.js")
var errorMsgs={identifierMissing:i18n._("An email or username is required to log in. "+"You can also log in with Google or Facebook."),passwordMissing:i18n._("A password is required to log in.")}
var LoginActionScreen=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,i=Array(n),l=0;l<n;l++){i[l]=arguments[l]}return s=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),o),o.state={credentials:{},serverError:null,isSubmitting:false},o.handleSubmit=function(e){e.preventDefault()
var t=o.props.classCodes
var r=o.getCredentials()
if(!r){return}var s=(0,_signupActions.getcontinueUrlFromQueryString)()||o.props.continueUrl||null;(0,_signupActions.login)({identifier:r.identifier,password:r.password,fkey:Cookies.readCookie("fkey"),continue:s}).then(function(e){window.top.location.replace((0,_createPostLoginUrl2.default)({type:"password",continueUrl:s,classCodes:t}))}).catch(function(e){var t=true
if(e&&e.errors&&e.errors.badlogin){t=false
o.setState({serverError:i18n._("Your login or password is incorrect.")})}if(t){o.setState({serverError:i18n._("Error logging in. Please try again.")})}o.setState({isSubmitting:false})})
o.setState({isSubmitting:true})},o.handleSignupClick=function(e){e.preventDefault()
o.props.updateStep("intro")},r),babelHelpers.possibleConstructorReturn(o,s)}t.prototype.getCredentials=function e(){var t=this.state.credentials,r=t.identifier,o=t.password
if(r&&o){return{identifier:r,password:o}}return null}
t.prototype.renderOAuthButtons=function e(){var t=this.props,r=t.classCodes,o=t.continueUrl,s=t.googleContinueUrl,n=t.role
return React.createElement("div",{className:(0,_aphrodite.css)(styles.buttons)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.signupButtonWrapper)},React.createElement(_googleButton2.default,{color:_globalStyles2.default.colors.modernGoogle,hoverColor:_globalStyles2.default.colors.modernGoogleHover,width:"100%",size:"large",role:n,googleContinueUrl:s,postLoginContinueUrl:o,classCodes:r,conversionId:"login_google_button_clicked"})),React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.signupButtonWrapper)},React.createElement(_facebookButton2.default,{color:_globalStyles2.default.colors.modernFacebook,hoverColor:_globalStyles2.default.colors.modernFacebookHover,width:"100%",size:"large",role:n,postLoginContinueUrl:o,classCodes:r,conversionId:"login_facebook_button_clicked"})))}
t.prototype.renderLoginButtonText=function e(){var t=this.state.isSubmitting
return t?i18n._("Logging you in..."):i18n._("Log in")}
t.prototype.renderLoginForm=function e(){var t=this
var r=this.state,o=r.serverError,s=r.isSubmitting
return React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,styles.serverError,_sharedStyles2.default.fieldError)},o),React.createElement(_identityTextField2.default,{testId:"identifier",label:i18n._("Email or username"),emptyMessage:errorMsgs.identifierMissing,onSubmit:this.handleSubmit,onValidation:function e(r,o){return t.setState({credentials:babelHelpers.extends({},t.state.credentials,{identifier:r?o:null})})}}),React.createElement(_passwordField2.default,{testId:"password",emptyMessage:errorMsgs.passwordMissing,label:i18n._("Password"),onSubmit:this.handleSubmit,onValidation:function e(r,o){return t.setState({credentials:babelHelpers.extends({},t.state.credentials,{password:r?o:null})})}}),React.createElement(_link2.default,{href:"/forgotpw",style:[styles.link]},i18n._("Forgot password?")),React.createElement(_button2.default,{width:"100%",size:"large",color:_globalStyles2.default.colors.kaBlueHover,onClick:this.handleSubmit,disabled:!this.getCredentials()||s},this.renderLoginButtonText()),React.createElement("div",{className:(0,_aphrodite.css)(styles.signup)},React.createElement(_link2.default,{href:"/signup",onClick:this.handleSignupClick,style:[styles.link]},i18n._("Create an account"))))}
t.prototype.render=function e(){var t=this.props,r=t.previousStep,o=t.updateStep
return React.createElement(_progressShellActionScreen2.default,{showBackButton:!!r,onBackClick:r&&function(){return o(r)}},this.renderOAuthButtons(),this.renderLoginForm())}
return t}(_react.Component)
LoginActionScreen.defaultProps={role:"learner"}
var styles=_aphrodite.StyleSheet.create({buttons:{marginBottom:40},serverError:{height:24,lineHeight:"24px"},signup:{marginTop:24,marginBottom:72,textAlign:"center"},link:{fontSize:_styleConstants2.default.BODY_FONT_SIZE,color:_globalStyles2.default.colors.kaGreen,":hover":{textDecoration:"none",color:_globalStyles2.default.colors.kaGreenHover}}})
exports.default=LoginActionScreen

});
KAdefine("javascript/login-package/signup-intro-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _deprecatedButtonToggle=require("../components/button-toggle-package/deprecated-button-toggle.jsx")
var _deprecatedButtonToggle2=babelHelpers.interopRequireDefault(_deprecatedButtonToggle)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _birthdayAndSignupSubform=require("./birthday-and-signup-subform.jsx")
var _birthdayAndSignupSubform2=babelHelpers.interopRequireDefault(_birthdayAndSignupSubform)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var i18n=require("../shared-package/i18n.js")
var ROLES=["learner","teacher","parent"]
var ROLE_COPY={learner:i18n._("Learner"),teacher:i18n._("Teacher"),parent:i18n._("Parent")}
var SignupActionIntroScreen=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,o=Array(l),i=0;i<l;i++){o[i]=arguments[i]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.state={role:a.props.initialRole||"learner"},a.updateRole=function(e){var t=ROLES.find(function(t){return e===t})
if(t&&a.state.role!==t){_bigbingo2.default.markConversion("signup_switched_roles",{originalRole:a.state.role,newRole:t})
a.props.onRoleChange(t)
a.setState({role:t})}},a.handleLoginClick=function(e){e.preventDefault()
_bigbingo2.default.markConversion("signup_login_link_clicked")
a.props.updateStep("login")},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.renderRoleSelection=function e(){var t=this.props.referral
var r=this.state.role
var a=i18n._("Join Khan Academy as a")
var n=""
var l=true
var o=false
if(r==="parent"){switch(t){case"parent_approval_success":a=i18n._("Create your parent account")
n=i18n._("We’ll keep you up-to-date with what your child is learning on Khan Academy.")
l=false
o=true
break
case"parent_approval_failed":a=i18n._("Create your parent account")
n=i18n._("We’ll walk you through creating your child’s account and then keep you up-to-date with what they’re learning on Khan Academy.")
l=false
break}}return React.createElement("div",null,React.createElement("div",null,a,o&&React.createElement("span",{className:(0,_aphrodite.css)(styles.preambleOptional)},i18n._("Optional"))),n&&React.createElement("div",{className:(0,_aphrodite.css)(styles.preambleSubText)},n),l&&React.createElement(_deprecatedButtonToggle2.default,{selected:r,options:ROLES.map(function(e){return{value:e,label:ROLE_COPY[e]}}),onToggle:this.updateRole}))}
t.prototype.render=function e(){var t=this.state.role
return React.createElement(_progressShellActionScreen2.default,null,this.renderRoleSelection(),React.createElement(_birthdayAndSignupSubform2.default,{continueUrl:this.props.continueUrl,googleContinueUrl:this.props.googleContinueUrl,role:t,birthdate:this.props.birthdate,onBirthdateChange:this.props.onBirthdateChange,updateStep:this.props.updateStep}),React.createElement("div",{className:(0,_aphrodite.css)(styles.login)},React.createElement(_link2.default,{href:"/login",onClick:this.handleLoginClick,style:[styles.link]},i18n._("Already have an account?"))))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({preambleOptional:{float:"right",fontSize:12,fontStyle:"italic",lineHeight:"22.5px",fontWeight:400},preambleSubText:{fontSize:15,fontWeight:400,marginTop:5,marginBottom:8},login:{marginTop:24,marginBottom:72,textAlign:"center",fontSize:_styleConstants2.default.BODY_FONT_SIZE,color:_globalStyles2.default.colors.kaGreen},link:{":hover":{textDecoration:"none",color:_globalStyles2.default.colors.kaGreenHover}}})
exports.default=SignupActionIntroScreen

});
KAdefine("javascript/login-package/signup-identify-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _emailField=require("./components/email-field.jsx")
var _emailField2=babelHelpers.interopRequireDefault(_emailField)
var _nameField=require("./components/name-field.jsx")
var _nameField2=babelHelpers.interopRequireDefault(_nameField)
var _passwordField=require("./components/password-field.jsx")
var _passwordField2=babelHelpers.interopRequireDefault(_passwordField)
var _usernameField=require("./components/username-field.jsx")
var _usernameField2=babelHelpers.interopRequireDefault(_usernameField)
var _createPostLoginUrl=require("./create-post-login-url.js")
var _createPostLoginUrl2=babelHelpers.interopRequireDefault(_createPostLoginUrl)
var _signupActions=require("./signup-actions.js")
var i18n=require("../shared-package/i18n.js")
var serverErrorsToFieldErrors=function e(r){var t=function e(r){return React.createElement("span",{dangerouslySetInnerHTML:{__html:r}})}
var i={}
var n=["username","email","password"]
for(var a=0;a<n.length;a++){var s=n[a]
var l=s+"_html"
if(r[s]){i[s]=r[s].toString()}if(r[l]){i[s]=t(r[l])}}return i}
var SignupActionIdentifyScreen=function(e){babelHelpers.inherits(r,e)
function r(){var t,i,n
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),l=0;l<a;l++){s[l]=arguments[l]}return n=(t=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),i),i.state={fields:{},fieldErrors:{},isRedirecting:false,isSubmitting:false,serverError:false,signupButtonText:null},i.handleEmailSignupSuccess=function(e){var r=i.props,t=r.onEmailSignupSuccess,n=r.referral,a=r.classCodes
if(t){t()}window.top.location.replace((0,_createPostLoginUrl2.default)({type:"password",continueUrl:e,referral:n,classCodes:a}))},i.handleBackClick=function(e){i.props.updateStep(i.props.previousStep)},i.handleSubmit=function(e){e.preventDefault()
i.submitForm()},i.validationHandler=function(e,r){return function(t,n){var a=t?n:null
i.setState({fields:babelHelpers.extends({},i.state.fields,e(a)),fieldErrors:babelHelpers.extends({},i.state.fieldErrors,r?r(a):{})})}},t),babelHelpers.possibleConstructorReturn(i,n)}r.prototype.getSubmission=function e(){var r=this.state.fields,t=r.email,i=r.firstName,n=r.lastName,a=r.password,s=r.username
var l=this.props,o=l.under13,u=l.classCodes
if(!o&&t&&i&&n&&a){return{under13:o,fields:{email:t,firstName:i,lastName:n,password:a}}}else if(o&&s&&a){if(u){return{fields:{username:s,password:a,email:""},under13:o}}else if(t){return{fields:{username:s,password:a,email:t},under13:o}}}return null}
r.prototype.submitForm=function e(){var r=this
var t=this.getSubmission()
if(t===null){return}var i=this.props,n=i.birthdate,a=i.role,s=i.referral,l=i.classCodes
var o=(0,_signupActions.getcontinueUrlFromQueryString)()||this.props.continueUrl||null
var u=l?l.join(","):""
var d={password:t.fields.password,email:t.fields.email,classCodes:u,continue:o,birthdate:n,referral:s}
var p=t.under13?(0,_signupActions.signupUnder13)(babelHelpers.extends({},d,{parent_email:t.fields.email,username:t.fields.username})):(0,_signupActions.signup)(babelHelpers.extends({},d,{firstname:t.fields.firstName,lastname:t.fields.lastName,role:a}))
p.then(function(e){r.handleEmailSignupSuccess(e.continueUrl)
r.setState({isRedirecting:true})}).catch(function(e){if(e&&e.errors){var t=serverErrorsToFieldErrors(e.errors)
if(Object.keys(t).length===0){r.setState({serverError:true})}r.setState({fieldErrors:t})}r.setState({isSubmitting:false})})
this.setState({isSubmitting:true,serverError:false})}
r.prototype.renderNameFields=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.nameFields)},React.createElement("div",{className:(0,_aphrodite.css)(styles.nameFieldWrapper)},React.createElement(_nameField2.default,{testId:"signup-first-name-field",nameType:"first",onValidation:this.validationHandler(function(e){return{firstName:e}}),onSubmit:this.handleSubmit})),React.createElement("div",{className:(0,_aphrodite.css)(styles.nameFieldWrapper)},React.createElement(_nameField2.default,{testId:"signup-last-name-field",nameType:"last",onValidation:this.validationHandler(function(e){return{lastName:e}}),onSubmit:this.handleSubmit})))}
r.prototype.renderServerError=function e(){var r=this.state.serverError
return r&&i18n._("Sorry, we saw an unexpected error! Please try again later.")}
r.prototype.renderProceedButtonLabel=function e(){var r=this.state,t=r.isRedirecting,i=r.isSubmitting
if(t){return i18n._("Logging you in...")}else if(i){return i18n._("Signing up...")}else{return i18n._("Sign up")}}
r.prototype.renderEmailFieldLabel=function e(){var r=this.props.under13
if(r){return i18n._("Your parent or guardian's email")}else{return i18n._("Your email")}}
r.prototype.renderEmailFieldNotice=function e(){var r=this.props.under13
if(r){return i18n._("You’re under 13 and we think that’s awesome, but we need to notify a caregiver of your account.")}return null}
r.prototype.render=function e(){var r=this.props,t=r.under13,i=r.classCodes
var n=this.state,a=n.fieldErrors,s=n.isSubmitting
var l=t&&i
return React.createElement(_progressShellActionScreen2.default,{showBackButton:true,onBackClick:this.handleBackClick,showProceedButton:true,proceedLabel:this.renderProceedButtonLabel(),proceedDisabled:!this.getSubmission()||s,onProceedClick:this.handleSubmit},!l&&React.createElement(_emailField2.default,{testId:"signup-email-field",label:this.renderEmailFieldLabel(),notice:this.renderEmailFieldNotice(),error:a.email,onValidation:this.validationHandler(function(e){return{email:e}},function(){return{email:null}}),onSubmit:this.handleSubmit}),t?React.createElement(_usernameField2.default,{error:a.username,onValidation:this.validationHandler(function(e){return{username:e}},function(){return{username:null}}),onSubmit:this.handleSubmit}):this.renderNameFields(),React.createElement(_passwordField2.default,{testId:"signup-password-field",isCreating:true,error:a.password,onValidation:this.validationHandler(function(e){return{password:e}},function(){return{password:null}}),onSubmit:this.handleSubmit}),this.renderServerError())}
return r}(_react.Component)
SignupActionIdentifyScreen.defaultProps={previousStep:"intro"}
var styles=_aphrodite.StyleSheet.create({serverError:{marginTop:24,marginBottom:72},nameFields:{display:"flex",alignItems:"top"},nameFieldWrapper:{width:"50%",":first-of-type":{marginRight:4},":last-of-type":{marginLeft:4}}})
exports.default=SignupActionIdentifyScreen

});
KAdefine("javascript/login-package/signup-detail-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _learnStormSignupDeta
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _aphrodite=require("aphrodite")
var _staticUrl=require("../shared-package/static-url.js")
var _progressShellDetailScreen=require("./progress-shell/progress-shell-detail-screen.jsx")
var _progressShellDetailScreen2=babelHelpers.interopRequireDefault(_progressShellDetailScreen)
var _termsOfServiceSignupStatement=require("./terms-of-service-signup-statement.jsx")
var _termsOfServiceSignupStatement2=babelHelpers.interopRequireDefault(_termsOfServiceSignupStatement)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var mediaQueries=require("../shared-styles-package/media-queries.js")
var i18n=require("../shared-package/i18n.js")
var ROLE_COPY=[{role:"learner",copy:[{referral:"default",heading:i18n._("A world class education for anyone, anywhere. 100% free."),description:[i18n._("Join Khan Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.")]}]},{role:"teacher",copy:[{referral:"LearnStorm",heading:i18n._("Sign-up for LearnStorm!"),description:[i18n._("Create a Khan Academy Teacher account. We’ll guide you through creating your classes and adding your students. Then it only takes one click to enroll in LearnStorm!")]},{referral:"default",heading:i18n._("Help every student succeed with personalized practice. 100% free."),description:[_react2.default.createElement("ul",{style:{listStyle:"disc",paddingLeft:_styleConstants2.default.SUBHEADING_FONT_SIZE}},_react2.default.createElement("li",null,i18n._("Find standards-aligned content")),_react2.default.createElement("li",null,i18n._("Assign practice exercises, videos and articles")),_react2.default.createElement("li",null,i18n._("Track student progress")),_react2.default.createElement("li",null,i18n._("Join millions of teachers and students")))]}]},{role:"parent",copy:[{referral:"default",heading:i18n._("First, create your parent account."),description:[i18n._("After that, we'll take you through creating an account for your child."),i18n._("Khan Academy is a great way for your child to get help with what they’re learning in school or to learn something completely new.")]},{referral:"parent_approval_success",heading:i18n._("Thank you for approving your child's account! Next, create your parent account."),description:[]},{referral:"parent_approval_failed",heading:i18n._("Your child's account has expired."),description:[]}]}]
var SignupDetailScreen=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.getRoleCopyFor=function e(r){var t=this
var a={heading:"",description:[]}
var n=ROLE_COPY.find(function(e){return e.role===r})
if(!n){return a}var i=n.copy
return i.find(function(e){return e.referral===t.props.referral})||i.find(function(e){return e.referral==="default"})||a}
r.prototype.render=function e(){var r=this.props,t=r.role,a=r.referral
var n=this.getRoleCopyFor(t)
return _react2.default.createElement(_wonderBlocksCoreV.View,{style:a==="LearnStorm"?styles.learnStormSignupDetails:null},_react2.default.createElement(_progressShellDetailScreen2.default,{transitionKey:t,heading:n.heading,optionalDetailItems:n.description,detailContent:_react2.default.createElement(_termsOfServiceSignupStatement2.default,{purpose:"signup"})}))}
return r}(_react.Component)
var styles=_aphrodite.StyleSheet.create({learnStormSignupDetails:(_learnStormSignupDeta={backgroundColor:"#044760",width:"100%",height:"100%",display:"flex",justifyContent:"center"},_learnStormSignupDeta[mediaQueries.lgOrLarger]={flexDirection:"row",backgroundImage:(0,_staticUrl.cssUrl)("/images/learn-storm-campaigns/learnstorm-signup-banner-2x.png"),backgroundRepeat:"no-repeat",backgroundPosition:"bottom left",backgroundSize:495,minHeight:675},_learnStormSignupDeta)})
exports.default=SignupDetailScreen

});
KAdefine("javascript/login-package/join-widget.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _parseQueryString=require("../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var _birthdayAndSignupSubform=require("./birthday-and-signup-subform.jsx")
var _birthdayAndSignupSubform2=babelHelpers.interopRequireDefault(_birthdayAndSignupSubform)
var _signupIdentifyActionScreen=require("./signup-identify-action-screen.jsx")
var _signupIdentifyActionScreen2=babelHelpers.interopRequireDefault(_signupIdentifyActionScreen)
var _loginActionScreen=require("./login-action-screen.jsx")
var _loginActionScreen2=babelHelpers.interopRequireDefault(_loginActionScreen)
var _joinActionScreen=require("./join-action-screen.jsx")
var _joinActionScreen2=babelHelpers.interopRequireDefault(_joinActionScreen)
var _joinDetailScreen=require("./join-detail-screen.jsx")
var _joinDetailScreen2=babelHelpers.interopRequireDefault(_joinDetailScreen)
var _joinFromUrlActionScreen=require("./join-from-url-action-screen.jsx")
var _joinFromUrlActionScreen2=babelHelpers.interopRequireDefault(_joinFromUrlActionScreen)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _progressShellWithBackground=require("./progress-shell/progress-shell-with-background.jsx")
var _progressShellWithBackground2=babelHelpers.interopRequireDefault(_progressShellWithBackground)
var JoinWidget=function(e){babelHelpers.inherits(r,e)
function r(){var n,t,i
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,s=Array(a),o=0;o<a;o++){s[o]=arguments[o]}return i=(n=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),t),t.state={joiningFromUrl:!!t.props.className,classes:t.props.className&&t.props.classSignupCode?[{name:t.props.className,signupCode:t.props.classSignupCode,domain:""}]:[],birthdate:"",under13:true},t.handleBirthdateChange=function(e,r){return t.setState({birthdate:e,under13:r})},t.handleClassesChange=function(e){if(t.setState){t.setState({classes:e})}},t.getClassCodes=function(){return t.state.classes.map(function(e){return e.signupCode})},t.renderDetailScreen=function(e){var r=t.state,n=r.classes,i=r.joiningFromUrl
return React.createElement(_joinDetailScreen2.default,{step:e,classes:n,showProgress:!i})},t.renderActionScreen=function(e,r){var n=t.state,i=n.birthdate,a=n.under13,s=n.classes,o=n.joiningFromUrl
var l=t.props.className
var c=(0,_parseQueryString2.default)().code
if(e==="signUp"){return React.createElement(_progressShellActionScreen2.default,{onBackClick:function e(){return r("intro")},showBackButton:true},React.createElement(_birthdayAndSignupSubform2.default,{classCodes:t.getClassCodes(),continueUrl:"/",googleContinueUrl:"/",onBirthdateChange:t.handleBirthdateChange,updateStep:r,showFacebookButton:false}))}else if(e==="identify"){return React.createElement(_signupIdentifyActionScreen2.default,{birthdate:i,classCodes:t.getClassCodes(),continueUrl:"/",previousStep:"signUp",role:"learner",under13:a,updateStep:r})}else if(e==="login"){return React.createElement(_loginActionScreen2.default,{continueUrl:"/coaches",googleContinueUrl:"/coaches",previousStep:"intro",role:"learner",updateStep:r,classCodes:t.getClassCodes()})}else if(e==="intro"){if(o&&l){return React.createElement(_joinFromUrlActionScreen2.default,{className:l,onJoinDifferentClass:function e(){t.setState({classes:[],joiningFromUrl:false})
r("intro")},onLoginWithCode:function e(){return r("login")},onSignupWithCode:function e(){return r("signUp")}})}else{return React.createElement(_joinActionScreen2.default,{classes:s,initialClassCode:c,onClassesChange:t.handleClassesChange,under13:a,updateStep:r})}}},n),babelHelpers.possibleConstructorReturn(t,i)}r.prototype.render=function e(){return React.createElement(_progressShellWithBackground2.default,{initialStep:"intro",detailScreen:this.renderDetailScreen,actionScreen:this.renderActionScreen})}
return r}(_react.Component)
exports.default=JoinWidget

});
KAdefine("javascript/login-package/join-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query ClassInfo($classCode: String!) {\n        studentList(classCode: $classCode) {\n            id\n            name\n            signupCode\n            topicTitle\n            topics {\n                id\n                slug\n            }\n        }\n    }\n"],["\n    query ClassInfo($classCode: String!) {\n        studentList(classCode: $classCode) {\n            id\n            name\n            signupCode\n            topicTitle\n            topics {\n                id\n                slug\n            }\n        }\n    }\n"])
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _inputItemWithTitle=require("../components/item-list-package/input-item-with-title.jsx")
var _inputItemWithTitle2=babelHelpers.interopRequireDefault(_inputItemWithTitle)
var _itemList=require("../components/item-list-package/item-list.jsx")
var _itemList2=babelHelpers.interopRequireDefault(_itemList)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _apolloFetch=require("../apollo-package/apollo-fetch.js")
var _apolloFetch2=babelHelpers.interopRequireDefault(_apolloFetch)
var _loginAndSignupButtons=require("./login-and-signup-buttons.jsx")
var _loginAndSignupButtons2=babelHelpers.interopRequireDefault(_loginAndSignupButtons)
var i18n=require("../shared-package/i18n.js")
var TRANSITION_LENGTH=.4
var codeErrorMessages={invalidCode:i18n._("Whoops, we can't find that class. Please double-check the code is correct or ask your teacher for help!"),duplicateCode:i18n._("It looks like you've already have that class! Do you have another class you would like to add?")}
var CLASS_INFO_QUERY=(0,_graphqlTag2.default)(_templateObject)
var JoinWidgetActionScreen=function(e){babelHelpers.inherits(t,e)
function t(){var a,r,s
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),i=0;i<n;i++){o[i]=arguments[i]}return s=(a=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),r),r.state={codeError:null,submitStatus:"ready"},r.onInputChange=function(e){var t=r.props.classes.some(function(t){return t.signupCode===e})
if(t){r.setState({codeError:"duplicateCode"})
return}else{r.setState({codeError:null})}},r.handleCodeSubmission=function(e){r.setState({submitStatus:"inProgress"})
var t={classCode:e};(0,_apolloFetch2.default)(CLASS_INFO_QUERY,t).then(function(e){if(e.errors||!e.data||!e.data.studentList){r.setState({codeError:"invalidCode",submitStatus:"ready"})
return}else{r.setState({codeError:null,submitStatus:"finished"})
var t=e.data.studentList
r.addItem({name:t.name,signupCode:t.signupCode,domain:t.domain})}}).catch(function(e){r.setState({codeError:"invalidCode",submitStatus:"ready"})})},r.addItem=function(e){var t=r.props,a=t.classes,s=t.onClassesChange
var n=[].concat(a,[e])
s(n)},r.removeItemBySignupCode=function(e){var t=r.props,a=t.classes,s=t.onClassesChange
var n=a.filter(function(t){return t&&t.signupCode!==e})
s(n)},a),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.render=function e(){var t=this.props,a=t.updateStep,r=t.classes,s=t.initialClassCode
var n=this.state,o=n.codeError,i=n.submitStatus
var l=o?codeErrorMessages[o]:""
var u=r.length>0
return React.createElement(_progressShellActionScreen2.default,null,u&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.label)},i18n._("Your classes")),React.createElement("div",{className:(0,_aphrodite.css)(styles.itemList)},React.createElement(_itemList2.default,{items:r.map(function(e){return{id:e.signupCode,children:e.name,color:(0,_globalStyles.domainColors)(e.domain).domain1}}),onRemoveItem:this.removeItemBySignupCode}),React.createElement(_inputItemWithTitle2.default,{title:i18n._("Enter your class code"),placeholder:"XXXXXX",defaultValue:s,onAddItem:this.handleCodeSubmission,includeColorPlaceholder:true,autoFocus:true,status:i,onChange:this.onInputChange,submitDisabled:!!o,minCharacterLength:6}),React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,o?_sharedStyles2.default.fieldError:_sharedStyles2.default.hiddenFieldError)},l)),React.createElement(_loginAndSignupButtons2.default,{onLoginClick:function e(){return a("login")},onSignupClick:function e(){return a("signUp")},disabled:!u}))}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({wrapper:{width:"100%"},backButton:{position:"absolute",bottom:0,padding:"0 0 19px 16px"},linkColor:{color:_globalStyles.colors.kaGreenHover,":hover":{color:_globalStyles.colors.kaGreen}},loginButton:{height:128,opacity:1,transition:"\n            opacity "+TRANSITION_LENGTH+"s "+_globalStyles.standardTransitionExtras+",\n            height "+TRANSITION_LENGTH+"s "+_globalStyles.standardTransitionExtras+"\n        "},hideLoginButton:{height:0,opacity:0},removeLoginButton:{display:"none"},noAnimation:{transitionDuration:"0s"},itemList:{marginTop:4}})
exports.default=JoinWidgetActionScreen

});
KAdefine("javascript/login-package/join-detail-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _heading,_progressIndicator
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _termsOfServiceSignupStatement=require("./terms-of-service-signup-statement.jsx")
var _termsOfServiceSignupStatement2=babelHelpers.interopRequireDefault(_termsOfServiceSignupStatement)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var i18n=require("../shared-package/i18n.js")
var JoinDetailScreen=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.step
var a={intro:i18n._("Khan Academy helps connect teachers to students and vice versa!"),signUp:React.createElement(_termsOfServiceSignupStatement2.default,{purpose:"signup"}),identify:i18n._("Join Khan Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress."),login:React.createElement(_termsOfServiceSignupStatement2.default,{purpose:"login"})}
return React.createElement("div",null,React.createElement("h1",{className:(0,_aphrodite.css)(_sharedStyles2.default.mainHeading,styles.heading)},i18n._("Join your class on Khan Academy")),React.createElement("h3",{className:(0,_aphrodite.css)(_sharedStyles2.default.description,_sharedStyles2.default.subHeadingText)},a[r]))}
return r}(_react.Component)
exports.default=JoinDetailScreen
var styles=_aphrodite.StyleSheet.create({heading:(_heading={},_heading[_mediaQueries2.default.md]={marginTop:64},_heading[_mediaQueries2.default.smOrSmaller]={marginTop:46},_heading),progressIndicator:(_progressIndicator={marginTop:24},_progressIndicator[_mediaQueries2.default.lg]={marginLeft:48,marginRight:48},_progressIndicator[_mediaQueries2.default.lgOrLarger]={width:340},_progressIndicator),userClassName:{display:"block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}})

});
KAdefine("javascript/login-package/join-from-url-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _loginAndSignupButtons=require("./login-and-signup-buttons.jsx")
var _loginAndSignupButtons2=babelHelpers.interopRequireDefault(_loginAndSignupButtons)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var i18n=require("../shared-package/i18n.js")
var JoinFromUrlActionScreen=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,n=r.className,o=r.onJoinDifferentClass,l=r.onLoginWithCode,t=r.onSignupWithCode
return React.createElement(_progressShellActionScreen2.default,null,React.createElement(_wonderBlocksCoreV.View,{style:styles.contents},React.createElement(_wonderBlocksTypographyV.HeadingSmall,{style:styles.heading},i18n.$_("Join your class, %(className)s",{className:n})),React.createElement(_loginAndSignupButtons2.default,{onLoginClick:l,onSignupClick:t}),React.createElement(_wonderBlocksTypographyV.Body,{style:styles.notYourClass},i18n._("Not your class?")," ",React.createElement(_link2.default,{onClick:o,style:styles.joinLink},i18n._("Join a different class")))))}
return r}(React.Component)
exports.default=JoinFromUrlActionScreen
var styles=_aphrodite.StyleSheet.create({contents:{textAlign:"left"},heading:{marginBottom:32},joinLink:{color:_wonderBlocksColorV2.default.blue,display:"inline",fontWeight:"bold"},notYourClass:{display:"block",marginTop:16,textAlign:"center"},shim8:{height:8}})

});
KAdefine("javascript/login-package/u13-reminder-modal.jsx", function(require, module, exports) {
var _modal,_detailBody,_babelHelpers$extends,_babelHelpers$extends2,_hourglass
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _modal2=require("../components/modal-package/modal.jsx")
var _modal3=babelHelpers.interopRequireDefault(_modal2)
var _globalStyles=require("../shared-styles-package/global-styles.js")
var _globalStyles2=babelHelpers.interopRequireDefault(_globalStyles)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _khanFetch=require("../shared-package/khan-fetch.js")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _progressShell=require("./progress-shell/progress-shell.jsx")
var _progressShell2=babelHelpers.interopRequireDefault(_progressShell)
var _styleConstants=require("./style-constants.js")
var _styleConstants2=babelHelpers.interopRequireDefault(_styleConstants)
var _progressShellDetailScreen=require("./progress-shell/progress-shell-detail-screen.jsx")
var _progressShellDetailScreen2=babelHelpers.interopRequireDefault(_progressShellDetailScreen)
var _u13ReminderUpdateEmailScreen=require("./u13-reminder-update-email-screen.jsx")
var _u13ReminderUpdateEmailScreen2=babelHelpers.interopRequireDefault(_u13ReminderUpdateEmailScreen)
var i18n=require("../shared-package/i18n.js")
var RESEND_EMAIL_URL="/api/internal/signup/resend_u13_approval_email"
var DetailScreen=function e(a){var t=a.parentEmail,r=a.daysLeftString,l=a.resendEmailSuccess,s=a.onResendEmail,n=a.onClose,i=a.step,d=a.updateStep
var o=function e(){(0,_khanFetch.khanFetch)(RESEND_EMAIL_URL,{method:"POST"}).then(function(e){return d("resendSuccess")}).catch(function(e){return d("initial")})}
var u=void 0
switch(i){case"updateEmail":u=i18n._("Update your parent or guardian's email.")
break
case"updateSuccess":u=i18n._("We sent a new email to your parent or guardian.")
break
case"resendSuccess":u=i18n._("We sent another email to your parent or guardian.")
break
case"initial":u=i18n._("Remind your parent or guardian to check their email.")
break}var c=i==="updateEmail"?React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.detail),dangerouslySetInnerHTML:{__html:i18n._("The original email we sent went to "+"<strong>%(email)s</strong>.",{email:t})}}),React.createElement("div",{className:(0,_aphrodite.css)(styles.detail)},i18n._("Enter an updated email address for them and we'll send them a new email to approve your account."))):React.createElement("div",null,React.createElement("div",{className:(0,_aphrodite.css)(styles.detail),dangerouslySetInnerHTML:{__html:i18n._('They need to click "approve" in the email sent to '+"<strong>%(email)s</strong>.",{email:t})}}),React.createElement("div",{className:(0,_aphrodite.css)(styles.detail)},i18n.$_("If they don’t, your account will be deactivated in %(days)s. You will lose all your badges and energy points.",{days:r})),i==="initial"&&React.createElement("div",{className:(0,_aphrodite.css)(styles.detail)},i18n._("You can "),React.createElement("a",{href:"javascript:void(0);",onClick:function e(a){return d("updateEmail")}},i18n._("update their email")),i18n._(" or "),React.createElement("a",{href:"javascript:void(0);",onClick:o},i18n._("resend the approval email"),".")),n&&React.createElement("a",{href:"javascript:void(0)",tabIndex:"1",onClick:n},i18n._("Close")))
return React.createElement(_progressShellDetailScreen2.default,{heading:u,detailContent:c})}
var RED_BACKGROUND="/images/u13/redbkgd.png"
var ORANGE_BACKGROUND="/images/u13/orangebkgd.png"
var YELLOW_BACKGROUND="/images/u13/yellowbkgd.png"
var BLUE_BACKGROUND="/images/u13/bluebkgd.png"
var ActionScreen=function e(a){var t=a.daysLeft
var r=BACKGROUND_STYLES[t]||styles.redBackground
var l=t===1?"/images/u13/1day.svg":"/images/u13/"+t+"days.svg"
return React.createElement("div",{className:(0,_aphrodite.css)(styles.actionBody,r)},React.createElement("img",{alt:"","aria-hidden":true,className:(0,_aphrodite.css)(styles.hourglass),src:(0,_staticUrl2.default)(l)}))}
var U13ReminderModal=function(e){babelHelpers.inherits(a,e)
function a(){var t,r,l
babelHelpers.classCallCheck(this,a)
for(var s=arguments.length,n=Array(s),i=0;i<s;i++){n[i]=arguments[i]}return l=(t=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),r),r.state={resendEmailSuccess:false,parentEmail:r.props.parentEmail},r._isMounted=false,r.handleResendEmail=function(){(0,_khanFetch.khanFetch)(RESEND_EMAIL_URL,{method:"POST"}).then(function(e){return r.setState({resendEmailSuccess:true})}).catch(function(e){return r.setState({resendEmailSuccess:false})})},t),babelHelpers.possibleConstructorReturn(r,l)}a.prototype.componentDidMount=function e(){this._isMounted=true
_bigbingo2.default.markConversion("u13_reminder_modal_shown")}
a.prototype.componentWillUnmount=function e(){this._isMounted=false}
a.prototype.render=function e(){var a=this
var t=this.props,r=t.daysLeft,l=t.daysLeftString,s=t.initialStep,n=t.onClose
var i=this.state,d=i.parentEmail,o=i.resendEmailSuccess
var u=function e(t,r){if(t==="updateEmail"&&_ka2.default.isPhone){return null}return React.createElement(DetailScreen,{parentEmail:d,daysLeftString:l,resendEmailSuccess:o,onResendEmail:a.handleResendEmail,step:t,updateStep:r})}
var c=function e(t,l){switch(t){case"initial":case"updateSuccess":case"resendSuccess":return _ka2.default.isPhone?null:React.createElement(ActionScreen,{daysLeft:r})
case"updateEmail":return React.createElement(_u13ReminderUpdateEmailScreen2.default,{onUpdateParentEmail:function e(t){a._isMounted&&a.setState({parentEmail:t})
a.props.onUpdateParentEmail(t)},updateStep:l})}}
return React.createElement(_modal3.default,{onClose:n,style:styles.modal},React.createElement(_progressShell2.default,{embedded:true,initialStep:s||"initial",includePadding:false,detailScreen:u,actionScreen:c}))}
return a}(_react.Component)
var styles=_aphrodite.StyleSheet.create({modal:(_modal={width:_styleConstants2.default.MAX_SCREEN_WIDTH*2,maxWidth:"80%"},_modal[_mediaQueries2.default.smOrSmaller]={maxWidth:"100%"},_modal),smallDetailScreen:{backgroundColor:_globalStyles2.default.colors.backgroundBlue},detailBody:(_detailBody={boxSizing:"border-box",padding:"80px 115px 0px",width:534},_detailBody[_mediaQueries2.default.mdOrSmaller]={padding:"24px"},_detailBody[_mediaQueries2.default.smOrSmaller]={width:480},_detailBody[_mediaQueries2.default.xsOrSmaller]={width:400},_detailBody),detail:{":not(:last-child)":{marginBottom:8}},remindHeading:babelHelpers.extends({},_globalStyles2.default.typography.conceptHeadingDesktop,(_babelHelpers$extends={color:_globalStyles2.default.colors.white},_babelHelpers$extends[_mediaQueries2.default.mdOrSmaller]=babelHelpers.extends({},_globalStyles2.default.typography.conceptHeadingMobile),_babelHelpers$extends)),remindBody:babelHelpers.extends({},_globalStyles2.default.typography.bodySmall,(_babelHelpers$extends2={color:_globalStyles2.default.colors.white},_babelHelpers$extends2[_mediaQueries2.default.mdOrSmaller]=babelHelpers.extends({},_globalStyles2.default.typography.smallSubheadingMobile),_babelHelpers$extends2)),actionBody:{display:"flex",flexGrow:1,justifyContent:"center"},redBackground:{backgroundImage:"url("+(0,_staticUrl2.default)(RED_BACKGROUND)+")"},orangeBackground:{backgroundImage:"url("+(0,_staticUrl2.default)(ORANGE_BACKGROUND)+")"},yellowBackground:{backgroundImage:"url("+(0,_staticUrl2.default)(YELLOW_BACKGROUND)+")"},blueBackground:{backgroundImage:"url("+(0,_staticUrl2.default)(BLUE_BACKGROUND)+")"},hourglass:(_hourglass={margin:"40px 0"},_hourglass[_mediaQueries2.default.mdOrSmaller]={margin:0},_hourglass)})
var BACKGROUND_STYLES={0:styles.redBackground,1:styles.redBackground,2:styles.orangeBackground,3:styles.orangeBackground,4:styles.yellowBackground,5:styles.blueBackground,6:styles.blueBackground,7:styles.blueBackground}
module.exports=U13ReminderModal

});
KAdefine("javascript/login-package/u13-reminder-update-email-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _aphrodite=require("aphrodite")
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _formatQueryString=require("../shared-package/format-query-string.js")
var _formatQueryString2=babelHelpers.interopRequireDefault(_formatQueryString)
var _khanFetch=require("../shared-package/khan-fetch.js")
var _wonderBlocksCoreV=require("@khanacademy/wonder-blocks-core-v2")
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _signupActions=require("./signup-actions.js")
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var i18n=require("../shared-package/i18n.js")
var UPDATE_EMAIL_URL="/api/internal/signup/update_u13_parent_email"
var U13ReminderUpdateEmailScreen=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,i
babelHelpers.classCallCheck(this,r)
for(var l=arguments.length,n=Array(l),s=0;s<l;s++){n[s]=arguments[s]}return i=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.state={email:"",emailError:"",emailFocused:false},a.handleBackLinkClick=function(){return a.props.updateStep("initial")},a.updateEmail=function(e){a.setState({email:e.target.value,emailError:""})},a.validateEmail=function(e){var r=e.target.value
if(r&&!(0,_signupActions.isEmailValid)(r)){a.setState({emailError:i18n._("This email doesn't appear to be formatted correctly.")})}},a.handleSubmit=function(e){e.preventDefault()
var r=a.state.email
var t=UPDATE_EMAIL_URL+(0,_formatQueryString2.default)({email:r},true);(0,_khanFetch.khanFetch)(t,{method:"PUT"}).then(function(e){a.props.updateStep("updateSuccess")
a.props.onUpdateParentEmail(r)}).catch(function(e){return a.props.updateStep("initial")})},t),babelHelpers.possibleConstructorReturn(a,i)}r.prototype.submitButtonShouldBeDisabled=function e(){var r=this.state,t=r.email,a=r.emailError
return!!(t.length===0||a)}
r.prototype._internalRender=function e(r){var t=this
var a=this.state,i=a.email,l=a.emailError,n=a.emailFocused
var s=!n&&l
var o=r.get("email-input-field")
return React.createElement(_progressShellActionScreen2.default,{showBackButton:true,onBackClick:this.handleBackLinkClick,showProceedButton:true,proceedDisabled:this.submitButtonShouldBeDisabled(),proceedLabel:i18n._("Send email"),onProceedClick:this.handleSubmit},React.createElement("form",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldWrapper,_sharedStyles2.default.label)},React.createElement("label",{htmlFor:o},i18n._("Your parent or guardian's email")),React.createElement("input",{id:o,autoFocus:true,className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,s&&_sharedStyles2.default.errorInput),type:"email",placeholder:i18n._("example@email.com"),value:i,onFocus:function e(r){return t.setState({emailFocused:true})},onChange:function e(r){t.updateEmail(r)
t.validateEmail(r)},onBlur:function e(r){t.setState({emailFocused:false})
t.validateEmail(r)}}),React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,s?_sharedStyles2.default.fieldError:_sharedStyles2.default.hiddenFieldError)},l))))}
r.prototype.render=function e(){var r=this
return React.createElement(_wonderBlocksCoreV.UniqueIDProvider,{mockOnFirstRender:false,scope:"u13-reminder-update-email-screen"},function(e){return r._internalRender(e)})}
return r}(_react.Component)
exports.default=U13ReminderUpdateEmailScreen

});
KAdefine("javascript/login-package/oauth-verify-widget.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _absoluteLinks=require("../shared-package/absolute-links.js")
var _absoluteLinks2=babelHelpers.interopRequireDefault(_absoluteLinks)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _progressShellDetailScreen=require("./progress-shell/progress-shell-detail-screen.jsx")
var _progressShellDetailScreen2=babelHelpers.interopRequireDefault(_progressShellDetailScreen)
var _progressShellWithBackground=require("./progress-shell/progress-shell-with-background.jsx")
var _progressShellWithBackground2=babelHelpers.interopRequireDefault(_progressShellWithBackground)
var _oauthVerifyActionScreen=require("./oauth-verify-action-screen.jsx")
var _oauthVerifyActionScreen2=babelHelpers.interopRequireDefault(_oauthVerifyActionScreen)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var i18n=require("../shared-package/i18n.js")
var ZENDESK_LINK=_absoluteLinks2.default.safeLinkTo("https://khanacademy.zendesk.com")
exports.default=function(e){return React.createElement(_progressShellWithBackground2.default,{initialStep:"",detailScreen:function r(){return React.createElement(_progressShellDetailScreen2.default,{heading:i18n._("You may already have an account!"),detailContent:React.createElement("div",null,React.createElement("p",{className:(0,_aphrodite.css)(_sharedStyles2.default.resetSize)},i18n.$_("As this is your first time using %(oauth)s to log in as %(email)s, please enter your Khan Academy password.",{email:React.createElement("b",null,e.email),oauth:e.oauthType[0].toUpperCase()+e.oauthType.slice(1)})),React.createElement("p",{className:(0,_aphrodite.css)(_sharedStyles2.default.resetSize)},i18n.$_("If you have any questions about your account, please %(link)s.",{link:React.createElement(_link2.default,{highlighted:true,href:ZENDESK_LINK},i18n._("contact us"))})))})},actionScreen:function r(){return React.createElement(_oauthVerifyActionScreen2.default,{email:e.email})}})}

});
KAdefine("javascript/login-package/oauth-verify-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _button=require("../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _passwordField=require("./components/password-field.jsx")
var _passwordField2=babelHelpers.interopRequireDefault(_passwordField)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _signupActions=require("./signup-actions.js")
var i18n=require("../shared-package/i18n.js")
var errors={PASSWORD_INCORRECT:i18n._("This password is incorrect."),RESET_FAILED:i18n._("Sorry, we couldn't send a password reset email."),GENERIC:i18n._("Sorry, we couldn't complete this action.")}
var OAuthVerifyActionScreen=function(e){babelHelpers.inherits(r,e)
function r(){var t,a,s
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),l=0;l<n;l++){i[l]=arguments[l]}return s=(t=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={password:null,submittingClaim:false,submittingReset:false,claimError:null,resetError:null,resetSucceeded:false,resetUrl:null},a.handlePasswordValidation=function(e,r){a.setState({password:e?r:null,claimError:null})},a.handleClaimClick=function(){var e=a.state.password
if(e){a.setState({submittingClaim:true});(0,_signupActions.verifyAndLinkOAuthAccount)(e).then(a.handleClaimSuccess).catch(a.handleClaimFailure)}},a.handleClaimSuccess=function(){window.location="/postlogin"},a.handleClaimFailure=function(e){a.setState({submittingClaim:false,claimError:e.unauthorized?errors.PASSWORD_INCORRECT:errors.GENERIC})},t),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.renderClaimButton=function e(){var r=this.state,t=r.password,a=r.submittingClaim
var s=!t||a
return React.createElement(_button2.default,{width:"100%",disabled:s,onClick:this.handleClaimClick},a?i18n._("Claiming..."):i18n._("Claim this account"))}
r.prototype.renderResetButton=function e(){return React.createElement(_button2.default,{width:"100%",type:"secondary",onClick:function e(){return window.location.href="/forgotpw"}},i18n._("Send reset email"))}
r.prototype.renderResetOptions=function e(){return React.createElement("label",{className:(0,_aphrodite.css)(_sharedStyles2.default.label)},i18n._("Forgot your password?"),this.renderResetButton())}
r.prototype.render=function e(){var r=this.state.claimError
return React.createElement(_progressShellActionScreen2.default,null,React.createElement(_passwordField2.default,{onValidation:this.handlePasswordValidation,error:r}),this.renderClaimButton(),React.createElement("hr",{className:(0,_aphrodite.css)(_sharedStyles2.default.rule)}),this.renderResetOptions())}
return r}(_react.Component)
exports.default=OAuthVerifyActionScreen

});
KAdefine("javascript/login-package/reset-password-widget.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _progressShellDetailScreen=require("./progress-shell/progress-shell-detail-screen.jsx")
var _progressShellDetailScreen2=babelHelpers.interopRequireDefault(_progressShellDetailScreen)
var _progressShellWithBackground=require("./progress-shell/progress-shell-with-background.jsx")
var _progressShellWithBackground2=babelHelpers.interopRequireDefault(_progressShellWithBackground)
var _resetPasswordActionScreen=require("./reset-password-action-screen.jsx")
var _resetPasswordActionScreen2=babelHelpers.interopRequireDefault(_resetPasswordActionScreen)
var i18n=require("../shared-package/i18n.js")
exports.default=function(e){return React.createElement(_progressShellWithBackground2.default,{initialStep:"reset",detailScreen:function e(){return React.createElement(_progressShellDetailScreen2.default,{heading:i18n._("Reset your password"),detailContent:i18n._("Pick a new password and get right back to learning! For your security, please choose a password you've never used before.")})},actionScreen:function r(){return React.createElement(_resetPasswordActionScreen2.default,{resetToken:e.resetToken})}})}

});
KAdefine("javascript/login-package/reset-password-action-screen.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _link=require("../components/link-package/link.jsx")
var _link2=babelHelpers.interopRequireDefault(_link)
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var _passwordField=require("./components/password-field.jsx")
var _passwordField2=babelHelpers.interopRequireDefault(_passwordField)
var _progressShellActionScreen=require("./progress-shell/progress-shell-action-screen.jsx")
var _progressShellActionScreen2=babelHelpers.interopRequireDefault(_progressShellActionScreen)
var _resetPasswordActions=require("./reset-password-actions.js")
var _signupActions=require("./signup-actions.js")
var Cookies=require("../shared-package/cookies.js")
var i18n=require("../shared-package/i18n.js")
var validationErrors={MATCH_ERROR:i18n._("The passwords do not match.")}
var errors={LOGIN_FAILED:i18n.$_("Your password was successfully changed, but we were unable to log you in automatically. Please %(link)s.",{link:React.createElement(_link2.default,{href:"/login",style:[_sharedStyles2.default.link]},i18n._("click here to log in"))}),RESET_BAD_REQUEST:i18n._("Sorry, this is not a secure enough password."),RESET_UNAUTHORIZED:i18n._("Sorry, we couldn't complete this action."),GENERIC:i18n._("Something went wrong. Please try again.")}
var ResetPasswordRequestScreen=function(e){babelHelpers.inherits(r,e)
function r(){var s,a,t
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),o=0;o<n;o++){i[o]=arguments[o]}return t=(s=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),a),a.state={password:null,passwordConfirm:null,errorMessage:null,submitting:false,redirecting:false},a.validatePasswordConfirm=function(e){var r=a.state.password
if(!r||r===e){return null}return validationErrors.MATCH_ERROR},a.validateForm=function(){var e=a.state,r=e.password,s=e.passwordConfirm
return r&&r===s},a.handlePasswordValidate=function(e,r){a.setState({password:e?r:null,errorMessage:null})},a.handlePasswordConfirmValidate=function(e,r){a.setState({passwordConfirm:e?r:null,errorMessage:null})},a.handleProceed=function(){var e=a.props.resetToken
var r=a.state.password
var s=Cookies.readCookie("fkey")
if(r){a.setState({submitting:true});(0,_resetPasswordActions.resetPassword)(e,r,s).then(function(e){var t=e.identifier
return(0,_signupActions.login)({identifier:t,password:r,fkey:s,continue:"/"}).then(a.handleLoginSuccess).catch(a.handleLoginFailure)}).catch(a.handleResetFailure)}},a.handleResetFailure=function(e){a.setState({submitting:false,errorMessage:e.unauthorized?errors.RESET_UNAUTHORIZED:e.badRequest?errors.RESET_BAD_REQUEST:errors.GENERIC})},a.handleLoginSuccess=function(){window.location.href="/"
a.setState({redirecting:true})},a.handleLoginFailure=function(){a.setState({errorMessage:errors.LOGIN_FAILED,submitting:false})},s),babelHelpers.possibleConstructorReturn(a,t)}r.prototype.render=function e(){var r=this.state,s=r.errorMessage,a=r.submitting,t=r.redirecting
var n=a?t?i18n._("Logging you in..."):i18n._("Resetting..."):i18n._("Reset and log in")
return React.createElement(_progressShellActionScreen2.default,{showBackButton:false,showProceedButton:true,proceedDisabled:a||!this.validateForm(),proceedLabel:n,onProceedClick:this.handleProceed},React.createElement(_passwordField2.default,{isCreating:true,onValidation:this.handlePasswordValidate,label:i18n._("Create a new password")}),React.createElement(_passwordField2.default,{validator:this.validatePasswordConfirm,onValidation:this.handlePasswordConfirmValidate,label:i18n._("Re-enter password"),notice:null}),s)}
return r}(_react.Component)
exports.default=ResetPasswordRequestScreen

});
KAdefine("javascript/login-package/signup-teacher-widget.jsx", function(require, module, exports) {
var _banner,_headerBanner,_columns,_column,_columnMobileLast,_headerContainer,_headerTextContainer,_buttonContainer,_bottomButtonContaine,_signUpContainer,_teachersHeader,_primaryHeader,_howItWorks,_quoteChevron,_quote,_bottomButtonSpacing,_image,_imageLaptop,_visibleLarge,_visibleSmall,_signUpHeaderText,_signUpHeaderLogo
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _bigbingo=require("../shared-package/bigbingo.js")
var _bigbingo2=babelHelpers.interopRequireDefault(_bigbingo)
var _googleButton=require("./google-button.jsx")
var _googleButton2=babelHelpers.interopRequireDefault(_googleButton)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _signupActions=require("./signup-actions.js")
var _mediaQueries=require("../shared-styles-package/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _scrollUtils=require("../scroll-utils-package/scroll-utils.js")
var _sharedStyles=require("./shared-styles.js")
var _sharedStyles2=babelHelpers.interopRequireDefault(_sharedStyles)
var HeaderLogo=require("../page-package/header-logo.jsx")
var Icon=require("../shared-styles-package/icon.jsx")
var i18n=require("../shared-package/i18n.js")
var envelopeIcon={medium:"M4.42566352,6 L12,13.5032627 L19.5743365,6 L4.42566352,6 Z M21,7.40290232 L13.4075315,14.9241269 C12.628036,15.696308 11.371964,15.696308 10.5924685,14.9241269 L3,7.40290232 L3,19 L21,19 L21,7.40290232 Z M3,4 L21,4 C22.1045695,4 23,4.8954305 23,6 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,6 C1,4.8954305 1.8954305,4 3,4 Z"}
var chevronLeft={path:"M-.013 49.84q0-3.416 2.352-5.824l41.72-41.664q2.352-2.352 5.768-2.352t5.824 2.352l4.816 4.816q2.352 2.296 2.352 5.768t-2.352 5.824l-31.136 31.08 31.136 31.08q2.352 2.408 2.352 5.824t-2.352 5.768l-4.816 4.76q-2.296 2.352-5.768 2.352t-5.824-2.352l-41.72-41.664q-2.352-2.352-2.352-5.768z",width:63.069,height:100}
var chevronRight={path:"M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z",width:63.034,height:100}
var TESTIMONIALS=[{author:i18n._("Kimberly Jones"),description:i18n._("Seventh and eighth grade English language arts, Somerset Middle School"),quote:i18n._("I have found Khan Academy to be a great option for homework. It has freed up valuable class time. Instead of making copies, correcting paperwork, and returning paperwork, I have more time to spend with my students teaching them how to write. Lots of benefits.")},{author:i18n._("RAB"),description:i18n._("Teacher using Khan Academy"),quote:i18n._("I use Khan Academy videos and exercises for assignments for both homework and preparation for class. Using these materials allows me to spend more valuable face-to-face time with my students and work on areas where they need help—and they love the materials.")},{author:i18n._("Amelia"),description:i18n._("Student using Khan Academy"),quote:i18n._("I’m sure I would’ve never made it to university without Khan Academy’s resources. I didn’t have access to much support during my high school years and thought the reason I wasn’t doing well was due to my lack of intellect. But, thanks to Khan Academy, I’ve been able to gain confidence in my trickiest subjects—math and chemistry. Khan Academy has opened up worlds of educational possibilities.")},{author:i18n._("Stuart"),description:i18n._("Teacher using Khan Academy"),quote:i18n._("This year we had 20 eighth grade students pass the biology entrance exam and receive high school credit for science. What makes this significant is that we are the only school in South Phoenix to have this accomplishment, and our students prepared by using Khan Academy. Our expectations for next year are even greater as we implement Khan Academy and our curriculum together.")}]
var MAX_TESTIMONIALS=TESTIMONIALS.length
var SignupTeacherWidget=function(e){babelHelpers.inherits(t,e)
function t(){var a,s,r
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,n=Array(i),l=0;l<i;l++){n[l]=arguments[l]}return r=(a=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),s),s.state={email:"",emailError:"",password:"",passwordError:"",firstname:"",firstnameError:"",lastname:"",lastnameError:"",isSubmitting:false,serverError:"",showFullEmailSignup:false,showStickyHeader:false,testimonialIndex:0},s.handleScroll=function(){var e=s.state.showStickyHeader
var t=100
if(e&&window.scrollY<t){s.setState({showStickyHeader:false})}else if(!e&&window.scrollY>=t){s.setState({showStickyHeader:true})}},s.updateField=function(e){return function(t){var a
s.setState((a={},a[e]=t.target.value,a[e+"Error"]="",a))}},s.validateField=function(e){return function(t){var a
var r=t.target.value
!r&&s.setState((a={},a[e+"Error"]=i18n._("Field is missing"),a))}},s.clearErrors=function(){s.setState({emailError:"",passwordError:"",firstnameError:"",lastnameError:""})},s.handleFullEmailClick=function(){s.setState({showFullEmailSignup:true},function(){s.refs.firstnameInput.focus()})},s.resetSignupBoxes=function(){s.setState({showFullEmailSignup:false})},s.submitRegistration=function(){var e=s.state,t=e.email,a=e.password,r=e.firstname,i=e.lastname
var n={email:t,password:a,firstname:r,lastname:i,continue:"/coach/dashboard",role:"teacher"};(0,_signupActions.signup)(n).then(function(e){_bigbingo2.default.markConversion("sign_up_complete").then(function(){window.top.location.assign(e.continueUrl)})}).catch(function(e){var t=true
if(e&&e.errors){Object.entries(e.errors).map(function(e){var a
var r=e[0],i=e[1]
var n=r.replace(/_html$/,"")
t=false
s.setState((a={},a[n+"Error"]=i,a))})}if(t){s.setState({serverError:i18n._("Sorry, we saw an unexpected error! Please try again later.")})}s.setState({isSubmitting:false})})},s.testimonialPrevious=function(){var e=s.state.testimonialIndex
var t=e===0?MAX_TESTIMONIALS-1:e-1
s.setState({testimonialIndex:t})},s.testimonialNext=function(){var e=s.state.testimonialIndex
var t=(e+1)%MAX_TESTIMONIALS
s.setState({testimonialIndex:t})},a),babelHelpers.possibleConstructorReturn(s,r)}t.prototype.componentDidMount=function e(){window.addEventListener("scroll",this.handleScroll)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("scroll",this.handleScroll)}
t.prototype.renderStickyHeader=function e(){var t=this.state.showStickyHeader
if(!t){return null}return React.createElement("div",{className:(0,_aphrodite.css)(styles.stickyHeader)},React.createElement("div",{className:(0,_aphrodite.css)(styles.stickyHeaderContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.signUpHeaderText)},i18n._("Khan Academy for Teachers")),React.createElement("div",{className:(0,_aphrodite.css)(styles.signUpHeaderLogo)},React.createElement(HeaderLogo,{transparent:true})),React.createElement(_wonderBlocksButtonV2.default,{light:true,style:styles.signUpHeaderButton,size:"small",onClick:function e(){return(0,_scrollUtils.scrollToOffset)(0,1e3)}},i18n._("Sign up"))))}
t.prototype.renderSignupBox=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.signUpContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.buttonSpacing)},React.createElement(_googleButton2.default,{color:"#e84d38",conversionId:"continue_with_google",googleContinueUrl:(0,_signupActions.makeGoogleContinueObject)(),hoverColor:"#c1432f",postLoginContinueUrl:"/students",role:"teacher",width:"100%"})," "),React.createElement("div",{className:(0,_aphrodite.css)(styles.columnsNoReorienting)},React.createElement("div",{className:(0,_aphrodite.css)(styles.horizontalBarColumn)},React.createElement("hr",{className:(0,_aphrodite.css)(styles.horizontalBar)})),React.createElement("div",{className:(0,_aphrodite.css)(styles.center,styles.orBar)},i18n._("Or")),React.createElement("div",{className:(0,_aphrodite.css)(styles.horizontalBarColumn)},React.createElement("hr",{className:(0,_aphrodite.css)(styles.horizontalBar)}))),React.createElement("form",null,this.renderEmailAndPasswordSignup()),React.createElement(_wonderBlocksButtonV2.default,{icon:envelopeIcon,style:[styles.fullBtn,styles.buttonSpacingTop],onClick:this.handleFullEmailClick},i18n._("Continue with Email")))}
t.prototype.renderFullEmailSignupFormFields=function e(){var t=this.state,a=t.firstnameError,s=t.lastnameError
var r=React.createElement("a",{href:"/about/tos"},i18n._("Terms of use"))
var i=React.createElement("a",{href:"/about/privacy-policy"},i18n._("Privacy Policy"))
return React.createElement("div",null,React.createElement("form",null,this.renderEmailAndPasswordSignup()),React.createElement("div",{className:(0,_aphrodite.css)(styles.columns,styles.columnsTop)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column)},React.createElement("label",{className:(0,_aphrodite.css)(_sharedStyles2.default.label,styles.label),id:"first-name-label"},i18n._("First name")),React.createElement("div",null,React.createElement("input",{className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,a&&_sharedStyles2.default.errorInput),"aria-labelledby":"first-name",type:"text",value:this.state.firstname,onChange:this.updateField("firstname"),onBlur:this.validateField("firstname"),ref:"firstnameInput"})),a&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,a?_sharedStyles2.default.fieldError:_sharedStyles2.default.zeroHeightFieldError),dangerouslySetInnerHTML:{__html:a}}))),React.createElement("div",{className:(0,_aphrodite.css)(styles.column)},React.createElement("label",{className:(0,_aphrodite.css)(_sharedStyles2.default.label,styles.label),id:"last-name-label"},i18n._("Last name")),React.createElement("div",null,React.createElement("input",{className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,s&&_sharedStyles2.default.errorInput),"aria-labelledby":"last-name",type:"text",value:this.state.lastname,onChange:this.updateField("lastname"),onBlur:this.validateField("lastname")})),s&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,s?_sharedStyles2.default.fieldError:_sharedStyles2.default.zeroHeightFieldError),dangerouslySetInnerHTML:{__html:s}})))),React.createElement(_wonderBlocksButtonV2.default,{style:[styles.buttonSpacingTop,styles.fullBtn],onClick:this.submitRegistration},i18n._("Sign up")),React.createElement("p",null,i18n.$_("By signing up for Khan Academy, you agree to our %(terms_of_use)s and %(privacy_policy)s.",{terms_of_use:r,privacy_policy:i})))}
t.prototype.renderFullEmailSignupBox=function e(t){return React.createElement("div",{className:(0,_aphrodite.css)(styles.signUpContainer,!t&&styles.hidden),ref:"signUpContainer"},React.createElement("div",{className:(0,_aphrodite.css)(styles.visibleLarge)},React.createElement("h1",{className:(0,_aphrodite.css)(styles.signUpWithEmail)},i18n._("Sign up with Email")),React.createElement("img",{height:"16",className:(0,_aphrodite.css)(styles.closeBox),alt:i18n._("Close"),onClick:this.resetSignupBoxes,src:(0,_staticUrl2.default)("/images/signup/icon-close.svg")}))," ",React.createElement("div",{className:(0,_aphrodite.css)(styles.visibleSmall)},React.createElement("img",{height:"16",className:(0,_aphrodite.css)(styles.closeBoxMobile),alt:i18n._("Close"),onClick:this.resetSignupBoxes,src:(0,_staticUrl2.default)("/images/signup/icon-close.svg")}),React.createElement("h1",{className:(0,_aphrodite.css)(styles.signUpWithEmailMobile)},i18n._("Sign up with Email")),React.createElement("hr",{className:(0,_aphrodite.css)(styles.horizontalBar)})),this.renderFullEmailSignupFormFields())}
t.prototype.renderEmailAndPasswordSignup=function e(){var t=this.state,a=t.emailError,s=t.passwordError
return React.createElement("div",null,React.createElement("label",{className:(0,_aphrodite.css)(_sharedStyles2.default.label,styles.label),id:"email-or-username-label"},i18n._("Your email")),React.createElement("div",null,React.createElement("input",{className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,a&&_sharedStyles2.default.errorInput),"aria-labelledby":"email",placeholder:i18n._("example@email.com"),type:"email",value:this.state.email,onChange:this.updateField("email"),onBlur:this.validateField("email"),ref:"emailInput"})),a&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,a?_sharedStyles2.default.fieldError:_sharedStyles2.default.zeroHeightFieldError),dangerouslySetInnerHTML:{__html:a}})),React.createElement("label",{className:(0,_aphrodite.css)(_sharedStyles2.default.label,styles.label)},React.createElement("span",{id:"password-label"},i18n._("Create a password"))),React.createElement("div",null,React.createElement("input",{className:(0,_aphrodite.css)(_sharedStyles2.default.textInput,s&&_sharedStyles2.default.errorInput),"aria-labelledby":"password",type:"password",value:this.state.password,onChange:this.updateField("password"),onBlur:this.validateField("password")})),s&&React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirementContainer)},React.createElement("div",{className:(0,_aphrodite.css)(_sharedStyles2.default.fieldRequirement,s?_sharedStyles2.default.fieldError:_sharedStyles2.default.zeroHeightFieldError),dangerouslySetInnerHTML:{__html:s}})))}
t.prototype.renderHeader=function e(){var t=this.state.showFullEmailSignup
var a=!t
var s=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlightFree)},i18n._("100% free."))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.headerBanner,styles.headerBannerExpanded)},React.createElement("div",{className:(0,_aphrodite.css)(styles.headerContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.headerTextContainer)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.teachersHeader)},i18n._("Khan Academy for Teachers")),React.createElement("h1",{className:(0,_aphrodite.css)(styles.primaryHeader)},i18n.$_("Help every student succeed with personalized practice. %(one_hundred_percent_free)s",{one_hundred_percent_free:s}))),a&&this.renderSignupBox(),this.renderFullEmailSignupBox(t)))}
t.prototype.renderHowItWorks=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.banner,styles.center)},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerContainer)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.bannerTitle)},i18n._("How Khan Academy works")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.bannerTextCloser)},i18n._("Provide remediation, grade-level practice and enrichment today.")),React.createElement("div",{className:(0,_aphrodite.css)(styles.columns,styles.columnsTop)},React.createElement("div",{className:(0,_aphrodite.css)(styles.howItWorks)},React.createElement("img",{height:"56",alt:i18n._("An open book"),src:(0,_staticUrl2.default)("/images/signup/icon-book.svg")}),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedTitle)},i18n._("1. Find standards-aligned content")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedText)},i18n._("Khan Academy offers K-14 content in math, science, history, economics and more."))),React.createElement("div",{className:(0,_aphrodite.css)(styles.howItWorks)},React.createElement("img",{height:"56",alt:i18n._("A pencil"),src:(0,_staticUrl2.default)("/images/signup/icon-pencil.svg")}),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedTitle)},i18n._("2. Make assignments")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedText)},i18n._("More than instructional videos and articles, Khan Academy offers thousands of interactive practice problems."))),React.createElement("div",{className:(0,_aphrodite.css)(styles.howItWorks)},React.createElement("img",{height:"56",alt:i18n._("An arrow hitting a bullseye"),src:(0,_staticUrl2.default)("/images/signup/icon-target.svg")}),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedTitle)},i18n._("3. Track student progress")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText,styles.numberedText)},i18n._("Powerful reports show you student activity, gaps and progress."))))))}
t.prototype.renderInstantFeedback=function e(){var t=React.createElement("a",{href:"/about/impact"},i18n._("learning outcomes"))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.banner,styles.highlightBackground)},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerContainer,styles.columns)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.bannerTitle)},i18n._("Students get instant feedback and build a growth mindset")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText)},i18n._("When students practice their skills on Khan Academy, they get immediate feedback, helpful hints, and encouragement to keep trying—so they can take ownership of their learning.")),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText)},i18n.$_("And results? We’re delighted to share that multiple studies show students get higher-than-expected %(learning_outcomes)s when studying with Khan Academy.",{learning_outcomes:t}))),React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.center)},React.createElement("img",{className:(0,_aphrodite.css)(styles.image),alt:i18n._("A student backpack"),src:(0,_staticUrl2.default)("/images/signup/comp-backpack.svg")}))))}
t.prototype.renderEasyToUse=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.banner)},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerContainer,styles.columns)},React.createElement("div",{className:(0,_aphrodite.css)(styles.column,styles.center,styles.columnMobileLast)},React.createElement("img",{className:(0,_aphrodite.css)(styles.image,styles.imageLaptop),alt:i18n._("A laptop and a stack of books"),src:(0,_staticUrl2.default)("/images/signup/comp-laptop.svg")})),React.createElement("div",{className:(0,_aphrodite.css)(styles.column)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.bannerTitle,styles.noMargin)},i18n._("Easy to use, and 100% free forever")),React.createElement("ul",{className:(0,_aphrodite.css)(styles.bulletedList)},React.createElement("li",{className:(0,_aphrodite.css)(styles.bannerText,styles.bulletedListItem)},i18n._("Integrated with Google Classroom for easy setup")),React.createElement("li",{className:(0,_aphrodite.css)(styles.bannerText,styles.bulletedListItem)},i18n._("Works with the technology you have, whether it’s shared devices, 1:1, tech lab, or mobile phones")),React.createElement("li",{className:(0,_aphrodite.css)(styles.bannerText,styles.bulletedListItem)},i18n._("Number one SAT tool")),React.createElement("li",{className:(0,_aphrodite.css)(styles.bannerText,styles.bulletedListItem)},i18n._("Official practice partner for AP")),React.createElement("li",{className:(0,_aphrodite.css)(styles.bannerText,styles.bulletedListItem)},i18n._("Available in multiple languages"))))))}
t.prototype.renderJoin=function e(){var t=this.state.testimonialIndex
var a=TESTIMONIALS[t]
var s=React.createElement("span",{className:(0,_aphrodite.css)(styles.highlightCounter)},i18n._("millions"))
return React.createElement("div",{className:(0,_aphrodite.css)(styles.banner,styles.center,styles.topDivider)},React.createElement("div",{className:(0,_aphrodite.css)(styles.bannerContainer)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.bannerTitle)},i18n.$_("Join %(millions)s of teachers from around the world",{millions:s})),React.createElement("div",{className:(0,_aphrodite.css)(styles.quoteContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.quoteChevron)},React.createElement("span",{className:(0,_aphrodite.css)(styles.chevron),onClick:this.testimonialPrevious},React.createElement(Icon,{className:(0,_aphrodite.css)(styles.chevron),icon:chevronLeft,size:30,color:"#d6d8da"}))),React.createElement("div",{className:(0,_aphrodite.css)(styles.quote)},React.createElement("div",{className:(0,_aphrodite.css)(styles.quoteMarks)},React.createElement("img",{width:"32",alt:i18n._("Quotation marks"),src:(0,_staticUrl2.default)("/images/signup/icon-quotes.svg")})),React.createElement("p",{className:(0,_aphrodite.css)(styles.bannerText)},a.quote),React.createElement("p",{className:(0,_aphrodite.css)(styles.quoteAuthor)},a.author),React.createElement("p",{className:(0,_aphrodite.css)(styles.quoteDescription)},a.description)),React.createElement("div",{className:(0,_aphrodite.css)(styles.quoteChevron)},React.createElement("span",{className:(0,_aphrodite.css)(styles.chevron),onClick:this.testimonialNext},React.createElement(Icon,{icon:chevronRight,size:30,color:"#d6d8da"}))))))}
t.prototype.renderContinueButtons=function e(){var t=this
return React.createElement("div",{className:(0,_aphrodite.css)(styles.banner,styles.center,styles.highlightBackground)},React.createElement("h2",{className:(0,_aphrodite.css)(styles.bannerTitle)},i18n._("Start differentiating your classroom today.")),React.createElement("div",{className:(0,_aphrodite.css)(styles.bottomButtonContainer)},React.createElement("div",{className:(0,_aphrodite.css)(styles.buttonSpacing,styles.bottomButtonSpacing)},React.createElement(_googleButton2.default,{color:"#e84d38",conversionId:"continue_with_google",googleContinueUrl:(0,_signupActions.makeGoogleContinueObject)(),hoverColor:"#c1432f",postLoginContinueUrl:"/students",role:"teacher",width:"100%"}))," ",React.createElement(_wonderBlocksButtonV2.default,{icon:envelopeIcon,style:[styles.fullBtn,styles.bottomButtonSpacing],onClick:function e(){t.setState({showFullEmailSignup:true},function(){t.clearErrors()
t.refs.emailInput.focus()});(0,_scrollUtils.scrollToOffset)(0,1e3)}},i18n._("Sign up with Email"))))}
t.prototype.render=function e(){return React.createElement("div",{className:(0,_aphrodite.css)(styles.widgetContainer)},this.renderStickyHeader(),this.renderHeader(),this.renderHowItWorks(),this.renderInstantFeedback(),this.renderEasyToUse(),this.renderJoin(),this.renderContinueButtons())}
return t}(_react.Component)
var styles=_aphrodite.StyleSheet.create({widgetContainer:{textAlign:"left"},banner:(_banner={padding:64},_banner[_mediaQueries2.default.mdOrSmaller]={paddingLeft:16,paddingRight:16,paddingTop:48,paddingBottom:48},_banner),bannerContainer:{margin:"auto",maxWidth:1200},headerBanner:(_headerBanner={backgroundColor:_wonderBlocksColorV2.default.darkBlue,paddingBottom:60,paddingTop:132},_headerBanner[_mediaQueries2.default.smOrSmaller]={paddingBottom:0,paddingTop:100},_headerBanner),headerBannerExpanded:{paddingBottom:128},columns:(_columns={alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"auto"},_columns[_mediaQueries2.default.xs]={flexDirection:"column"},_columns),columnsTop:{alignItems:"top"},columnsNoReorienting:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"auto"},column:(_column={width:"47.5%"},_column[_mediaQueries2.default.xs]={width:"100%"},_column),columnMobileLast:(_columnMobileLast={},_columnMobileLast[_mediaQueries2.default.smOrSmaller]={marginTop:32,order:99},_columnMobileLast),horizontalBarColumn:{width:"40%"},horizontalBar:{boxShadow:"none",marginTop:8,marginBottom:8},headerContainer:(_headerContainer={display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"auto",position:"relative",width:904},_headerContainer[_mediaQueries2.default.mdOrSmaller]={width:"100%"},_headerContainer[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_headerContainer),headerTextContainer:(_headerTextContainer={paddingLeft:16,textAlign:"left",width:468},_headerTextContainer[_mediaQueries2.default.md]={width:"calc(50%)"},_headerTextContainer[_mediaQueries2.default.smOrSmaller]={margin:"auto",paddingLeft:0},_headerTextContainer[_mediaQueries2.default.sm]={width:336},_headerTextContainer[_mediaQueries2.default.xs]={width:288},_headerTextContainer),buttonContainer:(_buttonContainer={paddingRight:16,paddingTop:48,textAlign:"center",width:336},_buttonContainer[_mediaQueries2.default.smOrSmaller]={margin:"auto",paddingTop:10,paddingBottom:40,paddingRight:0},_buttonContainer[_mediaQueries2.default.sm]={width:336},_buttonContainer[_mediaQueries2.default.xs]={width:288},_buttonContainer),bottomButtonContainer:(_bottomButtonContaine={display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"auto",maxWidth:560},_bottomButtonContaine[_mediaQueries2.default.md]={maxWidth:620},_bottomButtonContaine[_mediaQueries2.default.smOrSmaller]={flexDirection:"column"},_bottomButtonContaine),signUpContainer:(_signUpContainer={backgroundColor:"#f0f1f2",borderRadius:4,overflow:"auto",right:0,top:-24,padding:16,position:"absolute",width:336},_signUpContainer[_mediaQueries2.default.xs]={margin:"auto",width:"80%"},_signUpContainer[_mediaQueries2.default.smOrSmaller]={borderRadius:0,boxSizing:"border-box",marginTop:40,position:"static",right:"auto",width:"100%"},_signUpContainer[_mediaQueries2.default.mdOrLarger]={paddingLeft:24,paddingRight:24},_signUpContainer),teachersHeader:(_teachersHeader={color:"white",fontSize:"17px",fontWeight:400,lineHeight:1.35,letterSpacing:"0.6px",textTransform:"uppercase"},_teachersHeader[_mediaQueries2.default.smOrSmaller]={fontSize:"12px"},_teachersHeader),primaryHeader:(_primaryHeader={color:"white",fontSize:"35px",fontWeight:400,lineHeight:1.06},_primaryHeader[_mediaQueries2.default.md]={width:"90%"},_primaryHeader[_mediaQueries2.default.smOrSmaller]={fontSize:"23px",lineHeight:1.17},_primaryHeader),howItWorks:(_howItWorks={maxWidth:304,paddingLeft:16,paddingTop:16,paddingRight:16},_howItWorks[_mediaQueries2.default.mdOrSmaller]={paddingTop:24},_howItWorks[_mediaQueries2.default.xs]={maxWidth:"none",paddingLeft:0,paddingRight:0,width:"100%"},_howItWorks),highlightBackground:{backgroundColor:"#f6f7f7"},noMargin:{margin:0},bannerTitle:{fontSize:"23px",fontWeight:600},bannerText:{fontSize:"17px",lineHeight:1.35},bannerTextCloser:{marginTop:-10},numberedTitle:{fontWeight:"bold",marginTop:24,marginBottom:8},numberedText:{marginTop:0},highlightFree:{borderBottom:"solid 4px #66afe9",borderRadius:1},bulletedList:{listStyleImage:"url('/images/signup/icon-bullet.svg')",textAlign:"left"},bulletedListItem:{marginLeft:"1em",paddingLeft:"1em",paddingTop:20},center:{textAlign:"center"},quoteContainer:{alignItems:"center",display:"flex",flexDirection:"row"},quoteChevron:(_quoteChevron={width:32},_quoteChevron[_mediaQueries2.default.smOrSmaller]={display:"none"},_quoteChevron),chevron:{cursor:"pointer"},quote:(_quote={margin:"auto",maxWidth:640,position:"relative",textAlign:"left"},_quote[_mediaQueries2.default.mdOrSmaller]={maxWidth:492},_quote),quoteMarks:{position:"absolute",top:0,left:-48},quoteAuthor:{fontSize:"15px",fontWeight:600,lineHeight:1.47,margin:0,textTransform:"uppercase"},quoteDescription:{fontSize:"12px",lineHeight:1.17,margin:0},topDivider:{borderTop:"1px solid #d6d8da"},buttonSpacing:{marginBottom:16},bottomButtonSpacing:(_bottomButtonSpacing={width:268},_bottomButtonSpacing[_mediaQueries2.default.mdOrSmaller]={marginLeft:"auto",marginRight:"auto",width:288},_bottomButtonSpacing),buttonSpacingTop:{marginTop:16},fullBtn:{width:"100%"},accountExists:{color:"white",marginTop:8,textDecoration:"none",":hover":{cursor:"pointer",textDecoration:"underline"}},highlightCounter:{backgroundColor:"#fbe066"},label:{paddingTop:16},signUpWithEmail:{fontSize:"15px",fontWeight:600,lineHeight:1.47,marginBottom:24,textTransform:"uppercase"},signUpWithEmailMobile:{fontSize:"17px",fontWeight:600,lineHeight:1.47,margin:"auto",textAlign:"center"},image:(_image={boxSizing:"border-box",maxWidth:307,padding:16,width:"100%"},_image[_mediaQueries2.default.xs]={maxWidth:220},_image),imageLaptop:(_imageLaptop={},_imageLaptop[_mediaQueries2.default.lgOrLarger]={maxWidth:390},_imageLaptop),closeBox:{cursor:"pointer",position:"absolute",right:16,top:16},closeBoxMobile:{cursor:"pointer",float:"left",marginTop:4},hidden:{display:"none"},orBar:{textTransform:"uppercase"},visibleLarge:(_visibleLarge={},_visibleLarge[_mediaQueries2.default.smOrSmaller]={display:"none"},_visibleLarge),visibleSmall:(_visibleSmall={},_visibleSmall[_mediaQueries2.default.mdOrLarger]={display:"none"},_visibleSmall),stickyHeader:{backgroundColor:_wonderBlocksColorV2.default.darkBlue,height:60,left:0,position:"fixed",top:0,width:"100%",zIndex:2e3},stickyHeaderContainer:{margin:"auto",maxWidth:1200,paddingRight:12,textAlign:"center"},signUpHeaderText:(_signUpHeaderText={color:"#ffffff",display:"inline-block",fontSize:"23px",marginTop:16,textAlign:"center"},_signUpHeaderText[_mediaQueries2.default.smOrSmaller]={display:"none"},_signUpHeaderText),signUpHeaderLogo:(_signUpHeaderLogo={position:"absolute",top:20,left:10},_signUpHeaderLogo[_mediaQueries2.default.mdOrLarger]={display:"none"},_signUpHeaderLogo),signUpHeaderButton:{float:"right",marginTop:14,minWidth:128}})
module.exports=SignupTeacherWidget

});
KAdefine("javascript/login-package/oauth-approval.jsx", function(require, module, exports) {
var _wonderBlocksButtonV=require("@khanacademy/wonder-blocks-button-v2")
var _wonderBlocksButtonV2=babelHelpers.interopRequireDefault(_wonderBlocksButtonV)
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var PropTypes=require("prop-types")
var ProfileModel=require("../shared-package/profile-model.js")
var i18n=require("../shared-package/i18n.js")
var OAuthApprovalForm=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement("div",{className:"oauth-approval"},React.createElement("div",{className:"logo"},React.createElement("span",{className:"logo-leaf"},"• "),React.createElement("span",{className:"logo-font"},i18n._("KHANacademy"))),React.createElement("div",null,i18n.$_("The application %(consumerName)s is requesting access to your Khan Academy account:",{consumerName:React.createElement("span",{className:"consumer-name"},this.props.consumerName)})),React.createElement(SimpleProfile,{userProfile:this.props.userProfile.toJSON()}),React.createElement("div",{className:"approval-fine-print"},i18n._("By clicking Accept, you give this application access to your personal Khan Academy data (videos watched, exercises done, badges earned, coaches approved, profile information, and other activity).")),React.createElement("form",{method:"POST",action:"/api/auth2/authorize"},React.createElement("input",{type:"hidden",name:"oauth_token",value:this.props.requestToken}),React.createElement("input",{type:"hidden",name:"fkey",value:this.props.fkey}),React.createElement(_wonderBlocksButtonV2.default,{type:"submit",style:{width:"100%"}},i18n._("Accept"))))}
return r}(React.Component)
OAuthApprovalForm.propTypes={consumerName:PropTypes.string.isRequired,requestToken:PropTypes.string.isRequired,fkey:PropTypes.string.isRequired,userProfile:PropTypes.instanceOf(ProfileModel).isRequired}
var SimpleProfile=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){return React.createElement("div",{className:"simple-profile"},React.createElement("img",{alt:"","aria-hidden":true,className:"avatar",src:(0,_staticUrl2.default)(this.props.userProfile.avatarSrc)}),React.createElement("div",{className:"name-container"},React.createElement("div",{className:"nickname"},this.props.userProfile.nickname),React.createElement("div",{className:"username"},this.props.userProfile.usernameFormatted)))}
return r}(React.Component)
SimpleProfile.propTypes={userProfile:PropTypes.shape({avatarSrc:PropTypes.string.isRequired,nickname:PropTypes.string.isRequired,username:PropTypes.string})}
module.exports=OAuthApprovalForm

});
KAdefine("javascript/login-package/terms-of-service-signup-statement.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _parseQueryString=require("../shared-package/parse-query-string.js")
var _parseQueryString2=babelHelpers.interopRequireDefault(_parseQueryString)
var i18n=require("../shared-package/i18n.js")
var TermsOfServiceSignupStatement=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.addAppropriateParams=function e(r){var a=(0,_parseQueryString2.default)(window.location.search)
return a.embedded?r+"?embedded="+a.embedded:r}
r.prototype.render=function e(){var r=this.props.purpose
var a={action:r==="signup"?i18n._("signing up for"):i18n._("logging into"),tos_url:this.addAppropriateParams("/about/tos"),privacy_policy_url:this.addAppropriateParams("/about/privacy-policy"),style:"color: "+this.props.color+";"}
var t=i18n._("By %(action)s Khan Academy, you agree to our "+"<a href='%(tos_url)s' target='_blank' style='%(style)s'>"+"Terms of use"+"</a>"+" and "+"<a href='%(privacy_policy_url)s' "+"target='_blank' "+"style='%(style)s' "+">"+"Privacy Policy"+"</a>"+".",a)
return React.createElement("span",{dangerouslySetInnerHTML:{__html:t}})}
return r}(_react.Component)
TermsOfServiceSignupStatement.defaultProps={color:"inherit"}
module.exports=TermsOfServiceSignupStatement

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/login-package.js.map 