KAdefine("javascript/user-info-store-package/user-info-reducer.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.defaultState=undefined
var _masteryUtils=require("../mastery-utils-package/mastery-utils.js")
var _require=require("./user-info-constants.js"),SET_CURRENT_TOPIC=_require.SET_CURRENT_TOPIC,CLEAR_RECOMMENDATION=_require.CLEAR_RECOMMENDATION,CLEAR_RECOMMENDATIONS=_require.CLEAR_RECOMMENDATIONS,LOAD_USER_INFO=_require.LOAD_USER_INFO,UPDATE_FPM_MASTERY=_require.UPDATE_FPM_MASTERY,UPDATE_FPM_MASTERY_COMPLETE=_require.UPDATE_FPM_MASTERY_COMPLETE,UPDATE_PROGRESS=_require.UPDATE_PROGRESS,UPDATE_STATUS=_require.UPDATE_STATUS,UPDATE_BEST_SCORE=_require.UPDATE_BEST_SCORE,UPDATE_QUIZ_SCORE=_require.UPDATE_QUIZ_SCORE,UPDATE_RECOMMENDATIONS=_require.UPDATE_RECOMMENDATIONS,UPDATE_TASK_STATUS=_require.UPDATE_TASK_STATUS,UPDATE_LAST_SECOND_WATCHED=_require.UPDATE_LAST_SECOND_WATCHED,UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS=_require.UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS
function getUnitMastery(e,r,t){return{percentage:e,pointsEarned:r,pointsAvailable:t}}var defaultState=exports.defaultState={currentTopic:null,bestScoreMap:{},masteryMap:{},unitMastery:{percentage:0,pointsEarned:0,pointsAvailable:0},subjectMastery:{percentage:0,pointsEarned:0,pointsAvailable:0},masteryUpdateComplete:false,quizScores:{},recommendations:[],statusMap:{},taskInProgressMap:{},floatingSidebarProjectLinkMap:{},lastSecondWatchedMap:{}}
var userInfoReducer=function e(r,t){if(t.type===UPDATE_PROGRESS){var s
var a=t.userExercise
var n=a.exerciseModel&&a.exerciseModel.progressKey
var i=n?(s={},s[n]=a.fpmMasteryLevel,s):{}
var o=a.fpmPromotions||{}
var l=(0,_masteryUtils.getUpdatedMasteryPoints)(r.unitMastery,r.masteryMap,o)
var p=(0,_masteryUtils.getUpdatedMasteryPoints)(r.subjectMastery,r.masteryMap,o)
var u=babelHelpers.extends({},r.masteryMap,o,i)
return babelHelpers.extends({},r,{masteryMap:u,subjectMastery:p,unitMastery:l})}else if(t.type===SET_CURRENT_TOPIC){return babelHelpers.extends({},r,{currentTopic:t.topicId})}else if(t.type===UPDATE_FPM_MASTERY_COMPLETE){return babelHelpers.extends({},r,{masteryUpdateComplete:true})}else if(t.type===UPDATE_FPM_MASTERY){return babelHelpers.extends({},r,{masteryMap:t.masteryMap,unitMastery:typeof t.masteryPercentage==="number"?getUnitMastery(t.masteryPercentage,t.masteryPointsEarned||0,t.masteryPointsAvailable||0):r.unitMastery})}else if(t.type===UPDATE_STATUS){var E
var d=r.statusMap[t.progressKey]
if(d!=="complete"&&t.status!=="unstarted"){if(d===t.status){return r}d=t.status}return babelHelpers.extends({},r,{statusMap:babelHelpers.extends({},r.statusMap,(E={},E[t.progressKey]=d,E))})}else if(t.type===UPDATE_TASK_STATUS){var M
return babelHelpers.extends({},r,{taskInProgressMap:babelHelpers.extends({},r.taskInProgressMap,(M={},M[t.taskKey]=t.inProgress,M))})}else if(t.type===UPDATE_BEST_SCORE){var S
var T=t.bestScore
var A=T.numCorrect/T.numAttempted
var c=r.bestScoreMap[t.progressKey]
if(c&&c.numCorrect/c.numAttempted>A){T=c}return babelHelpers.extends({},r,{bestScoreMap:babelHelpers.extends({},r.bestScoreMap,(S={},S[t.progressKey]=T,S))})}else if(t.type===UPDATE_QUIZ_SCORE){var b
return babelHelpers.extends({},r,{quizScores:babelHelpers.extends({},r.quizScores,(b={},b[t.quizKey]=t.quizScore,b))})}else if(t.type===UPDATE_RECOMMENDATIONS){return babelHelpers.extends({},r,{recommendations:t.recommendations})}else if(t.type===CLEAR_RECOMMENDATION){var P=t
return babelHelpers.extends({},r,{recommendations:r.recommendations.filter(function(e){var r=e.contentId,t=e.kind
return t!==P.kind||r!==P.contentId})})}else if(t.type===CLEAR_RECOMMENDATIONS){var y=t
return babelHelpers.extends({},r,{recommendations:r.recommendations.filter(function(e){var r=e.sourceId
return r!==y.sourceId})})}else if(t.type===LOAD_USER_INFO){return babelHelpers.extends({},r,{masteryMap:babelHelpers.extends({},t.userInfo.masteryMap,r.masteryMap),unitMastery:getUnitMastery(t.userInfo.masteryPercentage||r.unitMastery.percentage,t.userInfo.masteryPointsEarned||r.unitMastery.pointsEarned,t.userInfo.masteryPointsAvailable||r.unitMastery.pointsAvailable),subjectMastery:getUnitMastery(t.userInfo.subjectMasteryPercentage,t.userInfo.subjectMasteryPointsEarned,t.userInfo.subjectMasteryPointsAvailable),quizScores:babelHelpers.extends({},t.userInfo.quizScores,r.quizScores),recommendations:t.userInfo.recommendations||r.recommendations,statusMap:babelHelpers.extends({},t.userInfo.statusMap,r.statusMap),taskInProgressMap:babelHelpers.extends({},t.userInfo.taskInProgressMap,r.taskInProgressMap),bestScoreMap:babelHelpers.extends({},t.userInfo.bestScoreMap,r.bestScoreMap)})}else if(t.type===UPDATE_LAST_SECOND_WATCHED){if(t.lastSecondWatched===undefined||t.lastSecondWatched===r.lastSecondWatchedMap[t.readableId]){return r}else{var m
return babelHelpers.extends({},r,{lastSecondWatchedMap:babelHelpers.extends({},r.lastSecondWatchedMap,(m={},m[t.readableId]=t.lastSecondWatched,m))})}}else if(t.type===UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS){var U
return babelHelpers.extends({},r,{floatingSidebarProjectLinkMap:babelHelpers.extends({},r.floatingSidebarProjectLinkMap,(U={},U[t.topicId]=t.floatingSidebarProjectLinks,U))})}else{return r}}
exports.default=userInfoReducer

});
KAdefine("javascript/user-info-store-package/user-info-constants.js", function(require, module, exports) {
module.exports={SET_CURRENT_TOPIC:"SET_CURRENT_TOPIC",CLEAR_RECOMMENDATION:"CLEAR_RECOMMENDATION",CLEAR_RECOMMENDATIONS:"CLEAR_RECOMMENDATIONS",LOAD_USER_INFO:"LOAD_USER_INFO",UPDATE_FPM_MASTERY:"UPDATE_FPM_MASTERY",UPDATE_FPM_MASTERY_COMPLETE:"UPDATE_FPM_MASTERY_COMPLETE",UPDATE_PROGRESS:"UPDATE_PROGRESS",UPDATE_RECOMMENDATIONS:"UPDATE_RECOMMENDATIONS",UPDATE_STATUS:"UPDATE_STATUS",UPDATE_BEST_SCORE:"UPDATE_BEST_SCORE",UPDATE_QUIZ_SCORE:"UPDATE_QUIZ_SCORE",UPDATE_TASK_STATUS:"UPDATE_TASK_STATUS",UPDATE_LAST_SECOND_WATCHED:"UPDATE_LAST_SECOND_WATCHED",UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS:"UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS"}

});
KAdefine("javascript/user-info-store-package/user-info-store.js", function(require, module, exports) {
var _redux=require("redux")
var _userInfoReducer=require("./user-info-reducer.js")
var _userInfoReducer2=babelHelpers.interopRequireDefault(_userInfoReducer)
var _userInfoSideEffects=require("./user-info-side-effects.js")
var _composeEnhancers=require("../utils/compose-enhancers.js")
var compose=(0,_composeEnhancers.createCompose)({reduxDevtoolsOptions:{name:"User Info"}})
var sideEffectHandler=(0,_userInfoSideEffects.handleSideEffects)(_userInfoSideEffects.defaultCallbacks)
var sideEffectsMiddleware=function e(r){return function(e){return function(s){var u=e(s)
sideEffectHandler(e,s,r.getState())
return u}}}
module.exports=(0,_redux.createStore)(_userInfoReducer2.default,_userInfoReducer.defaultState,compose((0,_redux.applyMiddleware)(sideEffectsMiddleware)))

});
KAdefine("javascript/user-info-store-package/user-info-side-effects.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.defaultCallbacks=exports.handleSideEffects=undefined
var _templateObject=babelHelpers.taggedTemplateLiteralLoose(["\n    query getFpmMasteryForTopic($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n        }\n    }\n"],["\n    query getFpmMasteryForTopic($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n        }\n    }\n"])
var _graphqlTag=require("graphql-tag")
var _graphqlTag2=babelHelpers.interopRequireDefault(_graphqlTag)
var _apolloFetch=require("../apollo-package/apollo-fetch.js")
var _apolloFetch2=babelHelpers.interopRequireDefault(_apolloFetch)
var _ka=require("../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _userInfoConstants=require("./user-info-constants.js")
var _userInfoConstants2=babelHelpers.interopRequireDefault(_userInfoConstants)
var _userInfoActions=require("./user-info-actions.js")
var handleSideEffects=exports.handleSideEffects=function e(r){return function(e,t,a){switch(t.type){case _userInfoConstants2.default.SET_CURRENT_TOPIC:r.onSetCurrentTopic&&r.onSetCurrentTopic(e,t.topicId,t.masteryEnabled)
break}}}
var FPM_MASTERY_QUERY=(0,_graphqlTag2.default)(_templateObject)
var defaultCallbacks=exports.defaultCallbacks={onSetCurrentTopic:function e(r,t,a){if(!a||_ka2.default.isPrephantom()){return}(0,_apolloFetch2.default)(FPM_MASTERY_QUERY,{topicId:t}).then(function(e){var t=e.data
var a=t.user.curationItemProgress
var n=a.masteryMap.reduce(function(e,r){var t
var a=r.progressKey,n=r.status
return babelHelpers.extends({},e,(t={},t[a]=n,t))},{})
var s={masteryMap:n,masteryPercentage:a.currentMastery.percentage,masteryPointsEarned:a.currentMastery.pointsEarned,masteryPointsAvailable:a.currentMastery.pointsAvailable}
r((0,_userInfoActions.updateFpmMastery)(s))}).then(function(){r((0,_userInfoActions.updateFpmMasteryComplete)())})}}

});
KAdefine("javascript/user-info-store-package/user-info-actions.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.updateRecommendations=exports.updateProgress=exports.updateFpmMasteryComplete=exports.updateFpmMastery=exports.reportQuizCompletion=exports.startQuiz=exports.retryQuiz=exports.clearForItem=exports.clearForTopic=exports.setCurrentTopic=undefined
var _khanFetch=require("../shared-package/khan-fetch.js")
var _userInfoConstants=require("./user-info-constants.js")
var setCurrentTopic=exports.setCurrentTopic=function e(t,r){return{type:_userInfoConstants.SET_CURRENT_TOPIC,topicId:t,masteryEnabled:r}}
var clearForTopic=exports.clearForTopic=function e(t,r){var n=(0,_khanFetch.encodeParams)({topicId:t,sourceId:r});(0,_khanFetch.khanFetch)("/api/internal/user/recommendations/clear_for_source?"+n,{method:"POST"})
return{type:_userInfoConstants.CLEAR_RECOMMENDATIONS,sourceId:r,topicId:t}}
var clearForItem=exports.clearForItem=function e(t,r){var n=(0,_khanFetch.encodeParams)({topicId:r,contentId:t.contentId,contentKind:t.kind})
if(t.recommended){(0,_khanFetch.khanFetch)("/api/internal/user/recommendations/clear_for_content_item?"+n,{method:"POST"})}return{type:_userInfoConstants.CLEAR_RECOMMENDATION,topicId:r,contentId:t.contentId,kind:t.kind}}
var retryQuiz=exports.retryQuiz=function e(t){return{type:_userInfoConstants.UPDATE_TASK_STATUS,taskKey:t,inProgress:false}}
var startQuiz=exports.startQuiz=function e(t){return{type:_userInfoConstants.UPDATE_TASK_STATUS,taskKey:t,inProgress:true}}
var reportQuizCompletion=exports.reportQuizCompletion=function e(t,r){return{type:_userInfoConstants.UPDATE_QUIZ_SCORE,quizKey:t,quizScore:{completedDate:new Date,numCorrect:r.filter(function(e){return e.correct}).length,numAttempted:r.length}}}
var updateFpmMastery=exports.updateFpmMastery=function e(t){var r=t.masteryMap,n=t.masteryPercentage,o=t.masteryPointsEarned,s=t.masteryPointsAvailable
return{type:_userInfoConstants.UPDATE_FPM_MASTERY,masteryMap:r,masteryPercentage:n,masteryPointsEarned:o,masteryPointsAvailable:s}}
var updateFpmMasteryComplete=exports.updateFpmMasteryComplete=function e(){return{type:_userInfoConstants.UPDATE_FPM_MASTERY_COMPLETE}}
var updateProgress=exports.updateProgress=function e(t){return{type:_userInfoConstants.UPDATE_PROGRESS,userExercise:t}}
var updateRecommendations=exports.updateRecommendations=function e(t){return{type:_userInfoConstants.UPDATE_RECOMMENDATIONS,recommendations:t}}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/user-info-store-package.js.map 