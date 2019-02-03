KAdefine("javascript/mastery-utils-package/mastery-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getMasteryPointChange=exports.getExerciseLevelChanges=exports.getTotalMasteryPointsAvailable=exports.getTotalMasteryPointsEarned=exports.getExerciseLevels=exports.getMasteredExercises=exports.getProficientExercises=exports.getAllExercises=exports.getContentItems=exports.getLoggedOutMasteryMap=exports.getNewLevel=exports.getLiveMasteryDetails=exports.getNumIncorrect=exports.getNumCorrect=exports.isCourseChallengeComplete=exports.isCourseChallenge=exports.isCourseChallengeType=exports.areAllExercisesProficientOrAboveForQuiz=exports.getMinimumMasteryLevelForQuizOrTest=exports.getMinimumMasteryLevel=exports.getMasteryLevelsForQuizOrTest=exports.achievedMastery=exports.getScoreAndDateText=exports.getPercentCorrect=exports.getRoundedPercent=exports.getNextMasteryLevelDetails=exports.getInProgressMasteryLevel=exports.getNextMasteryLevel=exports.getMasteryDisplay=exports.getMasteryLevelForExerciseFromMap=exports.levelPointsMap=exports.masteryLevelDefinitions=exports.unitMasteryPercentage=exports.exerciseMasteryThresholds=exports.masteryDisplayNames=exports.COURSE_CHALLENGE_COMPLETE_SCORE=exports.TEST_COMPLETE_LEVELS=exports.QUIZ_COMPLETE_LEVELS=exports.masteryLevelComparer=exports.HAS_FULLY_MASTERED_STATE=exports.getLevelIndex=exports.masteryValues=exports.constants=exports.colors=undefined
var _masteryDisplayNames,_exerciseMasteryThres
exports.getMasteryLevel=getMasteryLevel
exports.getNextUnitMasteryLevel=getNextUnitMasteryLevel
exports.getGoalForCount=getGoalForCount
exports.getIndicatorCount=getIndicatorCount
exports.getUpdatedMasteryPoints=getUpdatedMasteryPoints
var _manualStrings=require("./manual-strings.js")
var _practiceTypes=require("../content-types-package/practice-types.js")
var i18n=require("../shared-package/i18n.js")
var ignoreManual=_manualStrings.strings
var colors=exports.colors={coral:"#ff714d"}
var constants=exports.constants={UNFAMILIAR:"unfamiliar",ATTEMPTED:"attempted",FAMILIAR:"familiar",PROFICIENT:"proficient",MASTERED:"mastered",LEVEL1:"level1",LEVEL2:"level2",LEVEL3:"level3",LEVEL4:"level4",LEVEL5:"level5",LEVEL6:"level6",STARTED:"started",COMPLETE:"complete"}
var masteryValues=exports.masteryValues=[constants.UNFAMILIAR,constants.ATTEMPTED,constants.FAMILIAR,constants.PROFICIENT,constants.MASTERED]
var getLevelIndex=exports.getLevelIndex=function e(t){return masteryValues.indexOf(t)}
var HAS_FULLY_MASTERED_STATE=exports.HAS_FULLY_MASTERED_STATE=masteryValues[masteryValues.length-1]
function makeComparer(e){return{lessThan:function t(r,s){return e(r,s)<0},lessThanOrEqual:function t(r,s){return e(r,s)<=0},greaterThan:function t(r,s){return e(r,s)>0},greaterThanOrEqual:function t(r,s){return e(r,s)>=0},equal:function t(r,s){return e(r,s)===0}}}var masteryLevelComparer=exports.masteryLevelComparer=makeComparer(function(e,t){return getLevelIndex(e)-getLevelIndex(t)})
var QUIZ_COMPLETE_LEVELS=exports.QUIZ_COMPLETE_LEVELS=[constants.PROFICIENT,constants.MASTERED]
var TEST_COMPLETE_LEVELS=exports.TEST_COMPLETE_LEVELS=[constants.MASTERED]
var COURSE_CHALLENGE_COMPLETE_SCORE=exports.COURSE_CHALLENGE_COMPLETE_SCORE=90
var masteryDisplayNames=exports.masteryDisplayNames=(_masteryDisplayNames={},_masteryDisplayNames[constants.UNFAMILIAR]=i18n._("No Level"),_masteryDisplayNames[constants.ATTEMPTED]=i18n._("Attempted"),_masteryDisplayNames[constants.FAMILIAR]=i18n._("Familiar"),_masteryDisplayNames[constants.PROFICIENT]=i18n._("Proficient"),_masteryDisplayNames[constants.MASTERED]=i18n._("Mastered"),_masteryDisplayNames)
var exerciseMasteryThresholds=exports.exerciseMasteryThresholds=(_exerciseMasteryThres={},_exerciseMasteryThres[constants.UNFAMILIAR]=0,_exerciseMasteryThres[constants.ATTEMPTED]=0,_exerciseMasteryThres[constants.FAMILIAR]=.7,_exerciseMasteryThres[constants.PROFICIENT]=1,_exerciseMasteryThres[constants.MASTERED]=1,_exerciseMasteryThres)
var unitMasteryPercentage=exports.unitMasteryPercentage=.9
var masteryLevelDefinitions=exports.masteryLevelDefinitions=[{id:constants.LEVEL1,title:i18n._("Level 1"),start:0,end:.25},{id:constants.LEVEL2,title:i18n._("Level 2"),start:.25,end:.5},{id:constants.LEVEL3,title:i18n._("Level 3"),start:.5,end:.75},{id:constants.LEVEL4,title:i18n._("Level 4"),start:.75,end:unitMasteryPercentage},{id:constants.LEVEL5,title:i18n._("Level 5 (Mastered)"),start:unitMasteryPercentage,end:1},{id:constants.LEVEL6,title:i18n._("Level 6"),start:1,end:1}]
var levelPointsMap=exports.levelPointsMap={unfamiliar:0,attempted:0,familiar:50,proficient:80,mastered:100}
function getMasteryLevel(e,t){var r=[].concat(masteryLevelDefinitions).reverse().find(function(r){var s=t*r.start
return e>=s})
return r||masteryLevelDefinitions[0]}var getMasteryLevelForExerciseFromMap=exports.getMasteryLevelForExerciseFromMap=function e(t,r){return r["e"+t.contentId]||constants.UNFAMILIAR}
function getNextUnitMasteryLevel(e,t){var r=getMasteryLevel(e,t)
var s=masteryLevelDefinitions.findIndex(function(e){return e.id===r.id})
return masteryLevelDefinitions[s+1]||masteryLevelDefinitions[masteryLevelDefinitions.length-1]}var getMasteryDisplay=exports.getMasteryDisplay=function e(t){return masteryDisplayNames[t]||i18n._("Unknown")}
function getGoalForCount(e,t){return t===constants.UNFAMILIAR?Math.ceil(e*exerciseMasteryThresholds[constants.FAMILIAR]):e}var getNextMasteryLevel=exports.getNextMasteryLevel=function e(t){var r=masteryValues.indexOf(t)
var s=nextLevelToAspireTo(t,r)
var n=masteryValues[masteryValues.length-1]
return s||n}
var getInProgressMasteryLevel=exports.getInProgressMasteryLevel=function e(t,r,s){var n=t===constants.PROFICIENT||t===constants.MASTERED
if(n){return t}var a=r/s
var o=a>=exerciseMasteryThresholds[constants.PROFICIENT]
if(o){return constants.PROFICIENT}var i=t===constants.FAMILIAR||a>=exerciseMasteryThresholds[constants.FAMILIAR]
if(i){return constants.FAMILIAR}return constants.ATTEMPTED}
var nextLevelToAspireTo=function e(t,r){var s=t===constants.UNFAMILIAR?2:1
return masteryValues[r+s]}
var getNextMasteryLevelDetails=exports.getNextMasteryLevelDetails=function e(t,r,s){if(t===constants.MASTERED){return{inProgressLevel:t,inProgressLeveledUp:false,nextLevelToAttain:t,goalToAttainNextLevel:Math.ceil(exerciseMasteryThresholds[t]*s)}}else{var n=getInProgressMasteryLevel(t,r,s)
var a=getInProgressMasteryLevel(t,r-1,s)
var o=masteryValues.indexOf(n)
var i=nextLevelToAspireTo(n,o)
return{inProgressLevel:n,inProgressLeveledUp:a!==n,nextLevelToAttain:i,goalToAttainNextLevel:Math.ceil(exerciseMasteryThresholds[i]*s)}}}
function getIndicatorCount(e,t){if(t.type==="first_x_or_num_correct_in_a_row"){if(t.first<t.numRequired){if(e.length===t.first){if(e.every(function(e){return e.correct})){return t.first}}}}return t.numRequired}var getRoundedPercent=exports.getRoundedPercent=function e(t,r){if(r<1){return 0}return Math.min(100,Math.round(100*(t/r)))}
var getPercentCorrect=exports.getPercentCorrect=function e(t){return getRoundedPercent(t.numCorrect,t.numAttempted)}
var getScoreAndDateText=exports.getScoreAndDateText=function e(t,r){var s=getPercentCorrect(t)
var n=r?r(t.completedDate).fromNow():null
return{scoreText:s+"%",dateText:n}}
var achievedMastery=exports.achievedMastery=function e(t,r){if(r<1){return false}var s=getMasteryLevel(t,r)
return s.id===constants.LEVEL5||s.id===constants.LEVEL6}
var getMasteryLevelsForQuizOrTest=exports.getMasteryLevelsForQuizOrTest=function e(t,r){var s=(t.tutorials||[]).reduce(function(e,t){return[].concat(e,t.contentItems)},[])
return s.filter(function(e){return e.kind==="Exercise"}).map(function(e){return r["e"+e.contentId]||constants.UNFAMILIAR})}
var getMinimumMasteryLevel=exports.getMinimumMasteryLevel=function e(t){return t.length>0?t.reduce(function(e,t){var r=levelPointsMap[e]
var s=levelPointsMap[t]
return s<r?t:e},constants.MASTERED):constants.UNFAMILIAR}
var getMinimumMasteryLevelForQuizOrTest=exports.getMinimumMasteryLevelForQuizOrTest=function e(t,r){return getMinimumMasteryLevel(getMasteryLevelsForQuizOrTest(t,r))}
var areAllExercisesProficientOrAboveForQuiz=exports.areAllExercisesProficientOrAboveForQuiz=function e(t,r){var s=getMinimumMasteryLevelForQuizOrTest(t,r)
return s===constants.PROFICIENT||s===constants.MASTERED}
var isCourseChallengeType=exports.isCourseChallengeType=function e(t){return t===_practiceTypes.SUBJECT_CHALLENGE_QUIZ_TYPE}
var isCourseChallenge=exports.isCourseChallenge=function e(t){var r=t.type
return isCourseChallengeType(r)}
var isCourseChallengeComplete=exports.isCourseChallengeComplete=function e(t){return!!t&&getPercentCorrect(t)>=COURSE_CHALLENGE_COMPLETE_SCORE}
var isCorrect=function e(t){var r=t.correct
return r}
var isIncorrect=function e(t){var r=t.correct
return!r}
var getNumCorrect=exports.getNumCorrect=function e(t){return t.filter(isCorrect).length}
var getNumIncorrect=exports.getNumIncorrect=function e(t){return t.filter(isIncorrect).length}
var getLiveMasteryDetails=exports.getLiveMasteryDetails=function e(t,r,s){var n=getIndicatorCount(t,r)
var a=getNumCorrect(t)
var o=getNumIncorrect(t)
var i=getNextMasteryLevelDetails(s,a,n)
var l=true
var c=""
var u=false
if(i.nextLevelToAttain===constants.MASTERED||i.inProgressLevel===constants.PROFICIENT){c=i18n._("Skill is %(level)s!",{level:getMasteryDisplay(i.inProgressLevel)})}else if(i.inProgressLeveledUp&&i.inProgressLevel===constants.FAMILIAR&&s===constants.UNFAMILIAR){c=i18n._("Leveled up to %(familiar)s!",{familiar:getMasteryDisplay(constants.FAMILIAR)})
u=true}else if(n-o<i.goalToAttainNextLevel){l=false}else{c=i18n._("Get %(goal)s of %(total)s questions to level up to %(nextLevel)s",{goal:i.goalToAttainNextLevel,total:n,nextLevel:getMasteryDisplay(i.nextLevelToAttain)})}return{showLiveUpdates:l,text:c,levelledUp:u}}
var getMasteryMapFromContentItems=function e(t){return t.reduce(function(e,t){var r
return t.kind==="Exercise"?Object.assign(e,(r={},r[t.progressKey]=constants.UNFAMILIAR,r)):e},{})}
var getNewLevel=exports.getNewLevel=function e(t,r,s){var n=.7
if(t===r){return constants.PROFICIENT}if(s>n){return constants.FAMILIAR}return constants.ATTEMPTED}
var getLoggedOutMasteryMap=exports.getLoggedOutMasteryMap=function e(t){return t.map(function(e){var t=e.contentItems
return getMasteryMapFromContentItems(t)}).reduce(function(e,t){return Object.assign(e,t)},{})}
var getContentItems=exports.getContentItems=function e(t){return t.reduce(function(e,t){return[].concat(e,t.contentItems)},[])}
var getAllExercises=exports.getAllExercises=function e(t){return getContentItems(t).filter(function(e){var t=e.kind
return t==="Exercise"})}
var getProficientExercises=exports.getProficientExercises=function e(t,r){return getAllExercises(t).filter(function(e){var t=e.contentId
return r["e"+t]==="proficient"})}
var getMasteredExercises=exports.getMasteredExercises=function e(t,r){return getAllExercises(t).filter(function(e){var t=e.contentId
return r["e"+t]==="mastered"})}
var getExerciseLevels=exports.getExerciseLevels=function e(t,r){return getAllExercises(t).map(function(e){return r["e"+e.contentId]})}
var getTotalMasteryPointsEarned=exports.getTotalMasteryPointsEarned=function e(t,r){return getExerciseLevels(t,r).reduce(function(e,t){return e+levelPointsMap[t]},0)}
var getTotalMasteryPointsAvailable=exports.getTotalMasteryPointsAvailable=function e(t,r){return getExerciseLevels(t,r).length*levelPointsMap[constants.MASTERED]}
var getExerciseLevelChanges=exports.getExerciseLevelChanges=function e(t,r,s){var n=function e(t){var n=masteryValues.indexOf(getMasteryLevelForExerciseFromMap(t,r))
var a=masteryValues.indexOf(getMasteryLevelForExerciseFromMap(t,s))
if(a>n){return"leveledUp"}else if(a<n){return"leveledDown"}else{return"levelMaintained"}}
return t.reduce(function(e,t){var r
var s=n(t)
return babelHelpers.extends({},e,(r={},r[s]=e[s].concat([t]),r))},{leveledUp:[],leveledDown:[],levelMaintained:[]})}
var getMasteryPointChange=exports.getMasteryPointChange=function e(t,r,s){return t.reduce(function(e,t){var n=getMasteryLevelForExerciseFromMap(t,r)
var a=getMasteryLevelForExerciseFromMap(t,s)
return e+levelPointsMap[a]-levelPointsMap[n]},0)}
function getUpdatedMasteryPoints(e,t,r){if(e.pointsAvailable===0){return e}var s=Object.keys(r)
if(s.length===0){return e}var n=s.reduce(function(e,s){if(!t[s]){return e}var n=levelPointsMap[r[s]]
var a=levelPointsMap[t[s]]
return e+(n-a)},0)
var a=e.pointsAvailable
var o=e.pointsEarned+n
var i=getRoundedPercent(o,a)
return{percentage:i,pointsEarned:o,pointsAvailable:a}}
});
KAdefine("javascript/mastery-utils-package/manual-strings.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var i18n=require("../shared-package/i18n.js")
var strings=exports.strings={1:function _(e){return i18n.ngettext("Continue with %(num)s course","Continue with %(num)s courses",e)},2:function _(e){return i18n.ngettext("Choose %(num)s course to continue","Choose %(num)s courses to continue",e)},3:i18n._("Multiple courses"),4:i18n._("(No course)"),5:i18n._("Every Course"),6:i18n._('Click "Learning home" in the "Courses" menu to try the student experience.'),7:i18n._("Failed to add courses."),8:i18n._("Add course"),9:i18n._("Now, add one or more courses to your class"),10:i18n._("Choose course"),11:i18n._("Choose course for your class"),12:i18n._("My course isn't listed"),13:i18n._("Add course for this class."),14:i18n._("Change courses"),15:i18n._("+ Add a course to create assignments"),16:i18n._("No course"),17:i18n._("Assign a goal to reach 100% mastery in a course"),18:i18n._("Course"),19:i18n._("Try out %(assigning)s personalized, course- specific exercises or videos to each of your students."),20:i18n._("Assign two or more personalized, course- specific exercises or videos to each of your students."),21:i18n._("Review your students’ activity on your course-specific assignments."),22:i18n._("Continue assigning videos and exercises to your students in any course on Khan Academy."),23:i18n._("+ Add a course to view progress"),24:i18n._("Progress coming soon for this course!"),25:i18n._("Sorry, our progress views don't support this course yet. Please contact us if you have any questions."),26:i18n._("% Course Mastery"),27:i18n._("1. Track your students' and class mastery progress at the unit and course level"),28:i18n._("Change course for this class."),29:i18n._("Change course"),30:i18n._("Alas! We can’t track more than 9 courses for you yet."),31:i18n._("No courses match your grade."),32:i18n._("Class name: Class course"),33:i18n._("Class course"),34:i18n._("You can now %(link)s content across courses to students."),35:i18n._("Oops! Looks like we couldn't save your courses. Please try again."),36:i18n._("2. What courses can we help you learn?"),37:i18n._("What courses can we help you learn?"),38:i18n._("Add another course"),39:i18n._("Jump right into your courses and start learning!"),40:i18n._("My courses"),41:i18n._("Choose a course..."),42:i18n._("Ready to learn anything you want for free? Start by choosing your first course!<br><br>Or perhaps, start as a <a href='/createchild?from=welcome-role-picker'>parent</a> or <a href='/coach/roster/?from=welcome-role-picker'>teacher</a>."),43:i18n._("Ready to learn anything you want for free? Start by choosing your first course!"),44:i18n._("Ready to learn anything you want for free? Start by choosing a course or something from our favorite picks below."),45:i18n._("Welcome to your mission dashboard, a personalized way to learn something on Khan Academy. The dashboard gives you an easy way to find the best next things for you to do on Khan Academy. It has a bunch of really cool things designed to help you learn math, and soon other courses, really well on your own or with a coach."),46:i18n._("All courses"),47:i18n._('Khan Academy has math course "missions" from arithmetic through calculus. Each student has their own learning dashboard that uses state-of-the-art, adaptive software to identify gaps and show progress. Students also receive fun badges, energy points, and avatars along their "mission."'),48:i18n._("Go to Course"),49:i18n._("Courses"),50:i18n._("Search for courses, skills, and videos"),51:i18n._("Filter by course..."),52:i18n._("With your ongoing support, we’re able to offer thousands of free videos and exercises on topics ranging from basic math to college-level biology, as well as new courses like grammar and world history. Generous supporters like you have helped us provide more than one billion lessons—and counting!—to learners around the globe."),53:i18n._("With your ongoing support, we're able to offer thousands of free videos and exercises on topics ranging from basic math to college-level biology, as well as new courses like grammar and world history. Generous supporters like you have helped us provide more than one billion lessons -- and counting! -- to learners around the globe."),54:i18n._("With your support, we’re able to offer thousands of free videos and exercises on topics ranging from basic math to college-level biology, as well as new courses like grammar and world history. Generous supporters like you have helped us provide more than one billion lessons—and counting!—to learners around the globe."),55:i18n._("With your support, we're able to offer thousands of free videos and exercises on topics ranging from basic math to college-level biology, as well as new courses like grammar and world history. Generous supporters like you have helped us provide more than one billion lessons -- and counting! -- to learners around the globe."),56:i18n._("...and that's it for now -- but we're always adding more lessons and courses."),57:i18n._("You can learn anything. Expert-created content and resources for every course and level. Always free."),58:i18n._("This view approximates what times your students were actively learning across all courses on Khan Academy."),59:i18n._("Attempted (0 points)"),60:i18n._("If you get less than 70% correct when practicing a skill or if you get questions related to this skill incorrect on a quiz or unit test you’ll be here."),61:i18n._("Attempted"),64:i18n._("Not Started"),65:i18n._("Accelerate your points and earn the badge for this course!"),66:i18n._("The Course challenge is the quickest way to earn points and test your knowledge of all skills in this course. Score 90% or higher to earn the badge for this course!"),67:i18n._("Try again to earn the badge for this course!"),68:i18n._("You got %(numCorrect)s/%(numTotal)s questions correct (%(percentCorrect)s%)."),69:i18n._("Congratulations on earning the badge for this course!"),70:i18n._("Accelerate your points for this course!"),71:i18n._("Great work! Take the Course challenge again to level up on the skills in this course and earn more Mastery points."),72:i18n._("Take Course challenge again"),73:i18n._("Great work! Take the Course challenge again to test your knowledge."),74:i18n._("Great work! Take the Course challenge again to test your knowledge of all skills in this course."),75:i18n._("Crown: %(course)s"),76:i18n._("Achieve 90% or higher on the Course challenge"),77:i18n._("Crown Collector"),78:i18n._("Achieve 90% or higher on 5 unique Course challenges"),79:i18n._("Crown Conductor"),80:i18n._("Achieve 90% or higher on 10 unique Course challenges"),81:i18n._("Crown Champion"),82:i18n._("Achieve 90% or higher on 15 unique Course challenges"),83:i18n._("Test your knowledge of the skills in this course. Have a test coming up? The Course challenge can help you understand what you need to review."),84:i18n._("Nice work completing the Course challenge! Try again to see if you can improve your score."),85:i18n._("Nice work! You're on the right track. Try again to see if you can improve your score."),86:i18n._("Amazing work! Looks like you really know your stuff!"),87:i18n._("Test your knowledge of the skills in this course."),88:i18n._("Try again to see if you can improve your score."),89:i18n._("Amazing work!"),90:i18n._("You scored %(percentage)s% on the Course challenge."),91:i18n._("You scored %(percentage)s% on the Course challenge!"),92:i18n._("You got %(numCorrect)s/%(numTotal)s questions correct."),93:function _(e){return i18n.ngettext("You leveled up on %(num)s skill.","You leveled up on %(num)s skills.",e)},94:function _(e){return i18n.ngettext("Amazing work! You leveled up on %(num)s skill.","Amazing work! You leveled up on %(num)s skills.",e)},95:function _(e,o){return i18n._("You leveled up to %(to)s and collected 50 Mastery points. Get all the questions correct to level up to %(from)s.",{to:e,from:o})},96:function _(e){return i18n._("You leveled up to %(to)s and collected 80 Mastery points",{to:e})},97:function _(e,o,n){return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Practice again to level this skill up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Practice again to level this skill up to %(from)s.",e,{from:o,to:n})},98:function _(e,o){return i18n._("You didnʼt get any mastery points because you were already %(from)s in this skill. Take the Unit Test to level up to %(to)s.",{from:e,to:o})},99:function _(e,o,n){return i18n.ngettext("You leveled down to %(to)s and lost %(num)s Mastery point. Take the Unit Test to level this skill back up to %(from)s.","You leveled down to %(to)s and lost %(num)s Mastery points. Take the Unit Test to level this skill back up to %(from)s.",e,{from:o,to:n})},100:function _(e,o){return i18n.ngettext("You leveled up on %(num)s skill and ","You leveled up on %(num)s skills and ",e)+i18n.ngettext("leveled down on %(num)s skill","leveled down on %(num)s skills",o)},101:function _(e,o){return i18n.ngettext("You maintained your level on %(num)s skill and ","You maintained your level on %(num)s skills and ",e)+i18n.ngettext("leveled down on %(num)s skill","leveled down on %(num)s skills",o)},102:i18n._("You have not received any new badges nor avatars."),103:i18n._("Check for new badges and avatars"),104:i18n._("Checking...")}

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/mastery-utils-package.js.map 