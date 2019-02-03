KAdefine("javascript/google-classroom-package/components/gclassroom-course-selector.jsx", function(require, module, exports) {
var _reactSelect=require("react-select")
var _reactSelect2=babelHelpers.interopRequireDefault(_reactSelect)
var React=require("react")
var i18n=require("../../shared-package/i18n.js")
var GoogleCourseSelector=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,s=Array(n),l=0;l<n;l++){s[l]=arguments[l]}return a=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),o),o.state={selectedOption:o.props.defaultCourseId},r),babelHelpers.possibleConstructorReturn(o,a)}t.prototype.getOptions=function e(){var t=this.props.googleCourses
if(!t){return undefined}return t.map(function(e){return{value:e.id,label:e.name,gCourse:e}})}
t.prototype.handleOptionChange=function e(t){var r=this.props,o=r.googleCourses,a=r.onCourseChanged
var n=o.find(function(e){return e.id===t})
a(n)
this.setState({selectedOption:t})}
t.prototype.render=function e(){var t=this
var r=this.props.isLoading
var o=this.state.selectedOption
var a=this.getOptions()
var n=a&&a.length===0
var s=void 0
if(r){s=i18n._("Fetching classes from Google...")}else if(n){s=i18n._("No Google Classes found!")}else{s=i18n._("Select a Class")}return React.createElement(_reactSelect2.default,{autosize:true,name:"google-course-selector",currentFilters:[],placeholder:s,isLoading:r,options:a,value:o,clearable:false,onChange:function e(r){var o=r.value
return t.handleOptionChange(o)}})}
return t}(React.Component)
module.exports=GoogleCourseSelector

});
KAdefine("javascript/google-classroom-package/components/gclassroom-share-modal.jsx", function(require, module, exports) {
var _button=require("../../components/button-package/button.jsx")
var _button2=babelHelpers.interopRequireDefault(_button)
var _staticUrl=require("../../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var GoogleUtil=require("../../google-classroom-package/googleutil.js")
var GoogleClassSelector=require("../../google-classroom-package/components/gclassroom-course-selector.jsx")
var LabeledField=require("../../shared-components-package/labeled-field.jsx")
var LabeledTextArea=require("../../shared-components-package/labeled-textarea.jsx")
var DeprecatedModal=require("../../shared-components-package/deprecated-modal.jsx")
var Spinner=require("../../shared-components-package/spinner.jsx")
var i18n=require("../../shared-package/i18n.js")
var GoogleClassroomShareModal=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var a=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
a.state={description:"",selectedCourse:undefined,googleCourses:undefined,creatingAssignment:false,title:i18n._("Khan Academy")+": "+r.title}
return a}t.prototype.componentDidMount=function e(){var t=this
GoogleUtil.getCourses().then(function(e){t.setState({googleCourses:e})})}
t.prototype.getMaterial=function e(){var t=this.state.assignment
if(!t||t.materials.length===0){return}return t.materials[0]}
t.prototype.createAssignment=function e(){var t=this
var r=this.props.url
var a=this.state,n=a.selectedCourse,s=a.description,o=a.title
if(!n){return}this.setState({creatingAssignment:true})
GoogleUtil.shareToClassroomApi(n,r,o,s).then(function(e){t.setState({assignment:e,creatingAssignment:false})}).catch(function(){return t.setState({creatingAssignment:false})})}
t.prototype.renderFooter=function e(){var t=this
var r=this.state,a=r.selectedCourse,n=r.title,s=r.creatingAssignment,o=r.assignment
var l=a&&n!==""&&!s
return React.createElement("div",null,s&&React.createElement("div",{className:css(styles.spinner)},React.createElement(Spinner,null)),!o&&React.createElement(_button2.default,{type:"primary",onClick:function e(){return t.createAssignment()},disabled:!l},i18n._("Create Assignment")),o&&React.createElement("span",null,React.createElement("span",{className:css(styles.takeMeThere)},React.createElement(_button2.default,{type:"secondary",href:o.alternateLink,target:"_blank"},i18n._("Take me there"))),React.createElement(_button2.default,{type:"primary",onClick:function e(){return t.modal.handleClose()}},i18n._("Done"))))}
t.prototype.renderAssignmentForm=function e(){var t=this
var r=this.props.url
var a=this.state,n=a.googleCourses,s=a.title
var o=i18n._("Describe your assignment in detail here")
return React.createElement("div",null,React.createElement("div",{className:css(styles.url)},r),React.createElement(GoogleClassSelector,{isLoading:!n,googleCourses:n||[],onCourseChanged:function e(r){return t.setState({selectedCourse:r})}}),React.createElement("div",{className:css(styles.inputFields)},React.createElement(LabeledField,{title:i18n._("Title"),placeholder:i18n._("Please choose a title"),defaultValue:s,onChange:function e(r){return t.setState({title:r.target.value})}}),React.createElement(LabeledTextArea,{title:i18n._("Description"),placeholder:o,onChange:function e(r){return t.setState({description:r.target.value})}})))}
t.prototype.renderComplete=function e(){var t=this.getMaterial()
return React.createElement("div",{className:css(styles.complete)},React.createElement("h2",null,i18n._("Your assignment has been shared to Google Classroom!")),t&&React.createElement("img",{alt:"","aria-hidden":true,src:(0,_staticUrl2.default)(t.link.thumbnailUrl)}))}
t.prototype.render=function e(){var t=this
var r=this.props,a=r.inFixture,n=r.onClose
var s=this.state.assignment
return React.createElement(DeprecatedModal,{title:i18n._("Create a Google Classroom Assignment"),forceTop:true,showCloseButton:true,inline:!!a,footer:this.renderFooter(),onClose:function(e){function t(){return e.apply(this,arguments)}t.toString=function(){return e.toString()}
return t}(function(){return n()}),ref:function e(r){return t.modal=r}},s?this.renderComplete():this.renderAssignmentForm())}
return t}(React.Component)
GoogleClassroomShareModal.defaultProps={inFixture:false}
var styles=StyleSheet.create({inputFields:{marginTop:"1em"},url:{color:"lightgrey",marginTop:"-0.5em",marginBottom:"0.5em"},spinner:{float:"left",height:"2em"},takeMeThere:{marginRight:"1em"},complete:{textAlign:"center"}})
module.exports=GoogleClassroomShareModal

});
KAdefine("javascript/google-classroom-package/components/progress-circle.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _require=require("react"),Component=_require.Component
var check="M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10\n        S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4\n        l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1\n        -0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,\n        10,3.8z"
var ProgressCircle=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidUpdate=function e(){var t=Date.now()
this.path.style.transitionDuration="0.3s, 0.3s"
if(this.prevTimeStamp&&t-this.prevTimeStamp<100){this.path.style.transitionDuration="0s, 0s"}this.prevTimeStamp=Date.now()}
t.prototype.render=function e(){var t=this
var r=this.props,s=r.strokeWidth,a=r.trailWidth,o=r.strokeColor,l=r.trailColor,i=r.checkColor,c=r.className,n=r.style,p=r.percent,h=r.width,d=babelHelpers.objectWithoutProperties(r,["strokeWidth","trailWidth","strokeColor","trailColor","checkColor","className","style","percent","width"])
var k=50-s/2
var m="M 50,50 m 0,-"+k+"\n            a "+k+","+k+" 0 1 1 0,"+2*k+"\n            a "+k+","+k+" 0 1 1 0,-"+2*k
var u=Math.PI*2*k
var C=p>=100
var v=babelHelpers.extends({},styles.path,{strokeDasharray:u+"px "+u+"px",strokeDashoffset:(100-p)/100*u+"px"})
return React.createElement("svg",babelHelpers.extends({className:"progress-circle "+c,width:h,style:n},d,{viewBox:"0 0 100 100"}),React.createElement("path",{className:"progress-circle-trail",d:m,stroke:l,strokeWidth:a||s,style:styles.trail}),React.createElement("path",{className:"progress-circle-path",d:m,stroke:o,strokeWidth:s,ref:function e(r){return t.path=r},style:v}),React.createElement("path",{style:C?styles.checkDone:styles.check,fill:i,transform:"scale(4) translate(7.5, 6.6)",d:check}))}
return t}(Component)
ProgressCircle.defaultProps={strokeWidth:4,strokeColor:"#71b307",trailWidth:4,trailColor:"#d6d8da",checkColor:"#d6d8da",className:"",percent:0,width:70}
var styles={trail:{fillOpacity:0},path:{transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease",strokeLinecap:"square",fillOpacity:0},check:{stroke:"none"},checkDone:{stroke:"none",fill:"#71b307"}}
module.exports=ProgressCircle

});
KAdefine("javascript/google-classroom-package/classroom-integration.js", function(require, module, exports) {
var _require=require("../shared-package/khan-fetch.js"),khanFetch=_require.khanFetch,formUrlencode=_require.formUrlencode
var i18n=require("../shared-package/i18n.js")
var GoogleUtil=require("./googleutil.js")
var ROSTERING="/api/internal/rostering"
var CREATE_FROM_GOOGLE=ROSTERING+"/create_from_google_classroom"
var UPDATE_FROM_GOOGLE=ROSTERING+"/update_from_google_classroom"
var integrations={_fetch:function e(){return khanFetch.apply(undefined,arguments)},allowImport:function e(){return GoogleUtil.canLoadGoogleApi()},createKhanClass:function e(r){return this._fetch("/api/internal/user/studentlists",babelHelpers.extends({method:"POST"},formUrlencode({list_name:r,subscribe_to_updates:1}))).then(function(e){return e.json()})},preloadGoogleAPI:function e(){return GoogleUtil.loadGoogleAPI()},getGoogleCourses:function e(){return GoogleUtil.getCourses()},getGoogleCourse:function e(r){return this.getGoogleCourses().then(function(e){var n=e.find(function(e){return e.id===r})
if(!n){return Promise.reject("Cannot find course: "+r)}return n})},syncGoogleCourseToClass:function e(r,n,o){var t=this
var s=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false
if(!r){return Promise.reject("No Google Course selected")}if(s&&!o){return Promise.reject(i18n._("Existing class names required to overwrite class name"))}return GoogleUtil.getStudents(r.id).then(function(e){var i={google_class_id:r.id,google_class_name:r.name,google_class_url:r.alternateLink,google_class_students:e.map(function(e){return{email:e.profile.emailAddress,nickname:e.profile.name.fullName}})}
var a=CREATE_FROM_GOOGLE
if(n){a=UPDATE_FROM_GOOGLE
i.list_key=n
i.override_class_name=s}i.class_name=t.getUniqueName(r.name,o)
return t._fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.student_list})})},updateGoogleCourseInClass:function e(r){var n=this
if(!r||!r.google_class_id){return Promise.reject("StudentList does not have a google ID")}return this.getGoogleCourse(r.google_class_id).then(function(e){return n.syncGoogleCourseToClass(e,r.key)})},getUniqueName:function e(r,n){if(!n||n.length===0){return r}var o=r
var t=2
while(n.includes(o)){o=r+" "+t++}return o}}
module.exports=integrations

});
KAdefine("javascript/google-classroom-package/googleutil.js", function(require, module, exports) {
require("react")
var absoluteLinks=require("../shared-package/absolute-links.js")
var BigBingo=require("../shared-package/bigbingo.js")
var KA=require("../shared-package/ka.js")
var CLASSROOM_SHARE_URL=absoluteLinks.safeLinkTo("https://classroom.google.com/share")
var GOOGLE_JS_API_URL="https://apis.google.com/js/client.js?onload=__gapi_complete"
var GC_CLIENT_ID=function e(){return KA.IS_DEV_SERVER?"179486897809-nedb177f1iatc8dra55e9g4ei2d908mo.apps.googleusercontent.com":"179486897809-vot6i8d4ohsqvv7rui9vbjd53k6eo5mo.apps.googleusercontent.com"}
var GC_PAGE_SIZE=100
var GC_MAX_PAGE_COUNT=10
function windowGapi(){return window["gapi"]}var ROSTER_SCOPES=["https://www.googleapis.com/auth/classroom.courses.readonly","https://www.googleapis.com/auth/classroom.rosters.readonly","https://www.googleapis.com/auth/classroom.profile.emails"]
var SHARE_SCOPES=["https://www.googleapis.com/auth/classroom.coursework.students"]
function _allScopes(){var e=[].concat(ROSTER_SCOPES)
if(KA.featureFlag("GANDALF_GOOGLE_CLASSROOM_API_SHARE")){e.push.apply(e,SHARE_SCOPES)}return e}var GoogleUtil={ROSTER_SCOPES:ROSTER_SCOPES,SHARE_SCOPES:SHARE_SCOPES,_gapiPromise:undefined,_getHostname:function e(){return document.location.hostname.toLowerCase()},canLoadGoogleApi:function e(){var r=this._getHostname().startsWith("static-")
var o=this._getHostname().startsWith("pubcommit-")
var t=this._getHostname().endsWith(".khanacademy.org")
return KA.IS_DEV_SERVER||t&&!(r||o)},allScopes:function e(){return _allScopes()},_preAuthorize:function e(r){this.authorize(r,true).catch(function(){})},loadGoogleAPI:function e(){var r=this
var o=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_allScopes()
if(!this.canLoadGoogleApi()){return Promise.reject("Google Classroom not enabled for user")}if(!this._gapiPromise){this._gapiPromise=new Promise(function(e){if(windowGapi()){r._preAuthorize(o)
return e(windowGapi())}window.__gapi_complete=function(){delete window.__gapi_complete
r._preAuthorize(o)
return e(windowGapi())}
var t=document.createElement("script")
t.src=GOOGLE_JS_API_URL
document.body.appendChild(t)})}return this._gapiPromise},classroomAPI:function e(){if(KA.isZeroRated){return Promise.reject("Google API not available in Zero Rating!")}var r=windowGapi()
if(!r){return Promise.reject("Google API needs to be loaded. Call loadGoogleAPI")}if(r.client.classroom){return Promise.resolve(r.client.classroom)}return new Promise(function(e,o){r.client.load("classroom","v1",function(t){if(t&&t.error){o(t.error)}e(r.client.classroom)})})},authorize:function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_allScopes()
var o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false
var t=windowGapi()
if(!t){return Promise.reject("Google API needs to be loaded. Call loadGoogleAPI")}function n(e){return e&&e.access_token&&e.status&&e.status.signed_in}return new Promise(function(e,r){var i=t.auth.getToken()
if(n(i)){return e(i)}t.auth.authorize({client_id:GC_CLIENT_ID(),scope:_allScopes().join(" "),immediate:o},function(o){if(n(o)){return e(o)}r(o)})})},_queryPagedList:function e(r,o){var t=this
var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{}
var i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0
if(i>=GC_MAX_PAGE_COUNT){return Promise.resolve([])}var s=babelHelpers.extends({},n,{pageSize:GC_PAGE_SIZE})
return new Promise(function(e,a){r.list(s).execute(function(s){if(!s){return a("Did not receive a response")}if(s.error){return a(s.error)}if(!s.nextPageToken){return e(o(s)||[])}var u=t._queryPagedList(r,o,babelHelpers.extends({},n,{pageToken:s.nextPageToken}),i+1).then(function(e){return[].concat(o(s)||[],e)})
e(u)})})},getCourses:function e(){var r=this
return this.authorize(SHARE_SCOPES).then(function(){return r.classroomAPI()}).then(function(e){return r._queryPagedList(e.courses,function(e){return e.courses},{courseStates:["ACTIVE"],teacherId:"me"})})},getStudents:function e(r){var o=this
if(!r){return Promise.reject("getStudents(courseId) missing parameter!")}function t(e){var r=e.profile.emailAddress
return!!r}function n(e){return!!e.userId}return this.authorize(ROSTER_SCOPES).then(function(){return o.classroomAPI()}).then(function(e){function t(r){return e.userProfiles.get({userId:r.userId}).then(function(e){var o=babelHelpers.extends({},r,{profile:e.result,isPending:true})
delete o.id
return o})}var i=o._queryPagedList(e.courses.students,function(e){return e.students},{courseId:r})
var s=o._queryPagedList(e.invitations,function(e){return e.invitations},{courseId:r}).then(function(e){return Promise.all(e.filter(n).map(t))})
return Promise.all([i,s])}).then(function(e){var r=e[0],o=e[1]
return[].concat(r,o)}).then(function(e){return e.filter(t)})},getShareLink:function e(r){var o=document.createElement("a")
o.href=r
var t=o.protocol+"//"+o.host
return t+"/gclassroom"+o.pathname+o.search},markSharingConversion:function e(r){BigBingo.markConversion("content_shared_to_google_classroom",{shareLink:r})},shareToClassroomApi:function e(r,o,t,n){var i=this
var s=this.getShareLink(o)
this.markSharingConversion(s)
return this.authorize(_allScopes()).then(function(){return i.classroomAPI()}).then(function(e){return e.courses.courseWork.create({courseId:r.id,title:t,description:n,materials:[{link:{url:s}}],workType:"ASSIGNMENT",state:"PUBLISHED"})}).then(function(e){return e.result})},shareToClassroom:function e(r,o,t){var n=this.getShareLink(r)
var i="url="+encodeURIComponent(n)
i+="&title="+encodeURIComponent(o)
i+="&body="+encodeURIComponent(t)
this.markSharingConversion(n)
window.open(CLASSROOM_SHARE_URL+"?"+i,null,"width=640, height=450,toolbar=no, scrollbars=yes")}}
module.exports=GoogleUtil

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/google-classroom-package.js.map 