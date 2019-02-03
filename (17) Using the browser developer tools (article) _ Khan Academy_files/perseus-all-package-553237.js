KAdefine("javascript/perseus-all-package/a11y.js", function(require, module, exports) {
var _=require("underscore")
var _require=require("./multi-items.js"),findContentNodesInItem=_require.findContentNodesInItem,inferItemShape=_require.inferItemShape
var Traversal=require("./traversal.jsx")
var Widgets=require("./widgets.js")
function traverseRenderer(e,r){Traversal.traverseRendererDeep(e,null,function(e){if(e.type&&!Widgets.isAccessible(e)){r.push(e.type)}})}module.exports={violatingWidgets:function e(r){var t=[]
if(r._multi){var n=inferItemShape(r)
findContentNodesInItem(r,n,function(e){return traverseRenderer(e,t)})}else{traverseRenderer(r.question,t)}return _.uniq(t)}}

});
KAdefine("javascript/perseus-all-package/article-renderer.jsx", function(require, module, exports) {
"use strict"
var React=require("react")
var PropTypes=require("prop-types")
var classNames=require("classnames")
var Util=require("./util.js")
var ApiOptions=require("./perseus-api.jsx").Options
var ApiClassNames=require("./perseus-api.jsx").ClassNames
var Renderer=require("./renderer.jsx")
var ProvideKeypad=require("./mixins/provide-keypad.jsx")
var Gorgon=require("./gorgon/gorgon.js")
var _require=require("./gorgon/proptypes.js"),linterContextProps=_require.linterContextProps,linterContextDefault=_require.linterContextDefault
var rendererProps=PropTypes.shape({content:PropTypes.string,widgets:PropTypes.object,images:PropTypes.object})
var ArticleRenderer=function(e){babelHelpers.inherits(r,e)
function r(t){babelHelpers.classCallCheck(this,r)
var s=babelHelpers.possibleConstructorReturn(this,e.call(this,t))
s.keypadElement=function(){return ProvideKeypad.keypadElement.call(s)}
s._handleFocusChange=function(e,r){if(e){s._setCurrentFocus(e)}else{s._onRendererBlur(r)}}
s._setCurrentFocus=function(e){var r=s.keypadElement()
var t=s._currentFocus
s._currentFocus=e
var n=false
if(s._currentFocus){var o=s._currentFocus,i=o[0],p=o.slice(1)
var a=s.refs[i].getInputPaths()
n=a.some(function(e){return Util.inputPathsEqual(e,p)})}if(s.props.apiOptions.onFocusChange!=null){s.props.apiOptions.onFocusChange(s._currentFocus,t,n&&r&&r.getDOMNode())}if(r){if(n){r.activate()}else{r.dismiss()}}}
s._onRendererBlur=function(e){var r=s._currentFocus
if(!Util.inputPathsEqual(e,r)){return}setTimeout(function(){if(Util.inputPathsEqual(s._currentFocus,r)){s._setCurrentFocus(null)}})}
s.blur=function(){if(s._currentFocus){var e=s._currentFocus,r=e[0],t=e.slice(1)
s.refs[r].blurPath(t)}}
s._sections=function(){return Array.isArray(s.props.json)?s.props.json:[s.props.json]}
s.state=ProvideKeypad.getInitialState.call(s)
return s}r.prototype.componentDidMount=function e(){ProvideKeypad.componentDidMount.call(this)
this._currentFocus=null}
r.prototype.shouldComponentUpdate=function e(r,t){return r!==this.props||t!==this.state}
r.prototype.componentWillUnmount=function e(){ProvideKeypad.componentWillUnmount.call(this)}
r.prototype.render=function e(){var r,t=this
var s=babelHelpers.extends({},ApiOptions.defaults,this.props.apiOptions,{isArticle:true})
var n=classNames((r={"framework-perseus":true,"perseus-article":true,"bibliotron-article":this.props.useNewStyles},r[ApiClassNames.MOBILE]=s.isMobile,r))
var o=this._sections().map(function(e,r){var n="section-"+r
return React.createElement("div",{key:r,className:"clearfix"},React.createElement(Renderer,babelHelpers.extends({},e,{ref:n,key:r,key_:r,keypadElement:t.keypadElement(),apiOptions:babelHelpers.extends({},s,{onFocusChange:function e(r,s){t._handleFocusChange(r&&[n].concat(r),s&&[n].concat(s))}}),linterContext:Gorgon.pushContextStack(t.props.linterContext,"article"),legacyPerseusLint:t.props.legacyPerseusLint})))})
return React.createElement("div",{className:n},o)}
return r}(React.Component)
ArticleRenderer.propTypes=babelHelpers.extends({},ProvideKeypad.propTypes,{apiOptions:PropTypes.shape({onFocusChange:PropTypes.func,isMobile:PropTypes.bool}),json:PropTypes.oneOfType([rendererProps,PropTypes.arrayOf(rendererProps)]).isRequired,useNewStyles:PropTypes.bool,linterContext:linterContextProps,legacyPerseusLint:PropTypes.arrayOf(PropTypes.string)})
ArticleRenderer.defaultProps={apiOptions:{},useNewStyles:false,linterContext:linterContextDefault}
module.exports=ArticleRenderer

});
KAdefine("javascript/perseus-all-package/basic-widgets.js", function(require, module, exports) {
module.exports=[require("./widgets/radio.jsx"),require("./widgets/input-number.jsx"),require("./widgets/numeric-input.jsx"),require("./widgets/expression.jsx")]

});
KAdefine("javascript/perseus-all-package/components/constants.js", function(require, module, exports) {
var devices={PHONE:"phone",TABLET:"tablet",DESKTOP:"desktop"}
module.exports={devices:devices,lintGutterWidth:36,perseusFrameBorderWidth:1}

});
KAdefine("javascript/perseus-all-package/components/fixed-to-responsive.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var _require=require("../styles/constants.js"),negativePhoneMargin=_require.negativePhoneMargin
var MIN_VIEWPORT_HEIGHT=480
var FixedToResponsive=createReactClass({displayName:"FixedToResponsive",propTypes:{width:PropTypes.number.isRequired,height:PropTypes.number.isRequired,className:PropTypes.string,constrainHeight:PropTypes.bool,allowFullBleed:PropTypes.bool},getDefaultProps:function e(){return{className:"",constrainHeight:false,allowFullBleed:false}},getInitialState:function e(){return{viewportHeight:null,viewportWidth:null}},componentDidMount:function e(){this._isMounted=true
if(window.innerHeight<MIN_VIEWPORT_HEIGHT){setTimeout(this._cacheViewportSize,800)}else{this._cacheViewportSize()}},componentWillUnmount:function e(){this._isMounted=false},_cacheViewportSize:function e(){if(this._isMounted){this.setState({viewportHeight:Math.max(MIN_VIEWPORT_HEIGHT,window.innerHeight),viewportWidth:window.innerWidth})}},render:function e(){var t=this.props.width/this.props.height
var i=React.createElement("div",{style:{paddingBottom:(1/t).toFixed(4)*100+"%"}})
var r=this.props,s=r.width,a=r.height
if(this.props.constrainHeight&&this.state.viewportHeight){var o=2/3*this.state.viewportHeight
if(this.props.height>=o){a=o
s=o*t}}var n={maxWidth:s,maxHeight:a}
var h=classNames("fixed-to-responsive",this.props.className)
var p=React.createElement("div",{className:h,style:n},i,this.props.children)
var l=this.props.allowFullBleed&&this.state.viewportWidth&&s>=this.state.viewportWidth
if(l){return React.createElement("div",{style:{marginLeft:negativePhoneMargin,marginRight:negativePhoneMargin}},p)}else{return p}}})
module.exports=FixedToResponsive

});
KAdefine("javascript/perseus-all-package/components/graph.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var $=require("jquery")
var Util=require("../util.js")
var GraphUtils=require("../util/graph-utils.js")
var _require=require("../styles/constants.js"),interactiveSizes=_require.interactiveSizes
var SvgImage=require("../components/svg-image.jsx")
var defaultBackgroundImage={url:null}
var defaultInstructionsStyle={fontStyle:"italic",fontWeight:"bold",fontSize:"32px",width:"100%",height:"100%",textAlign:"center",backgroundColor:"white",position:"absolute",zIndex:1,transition:"opacity .25s ease-in-out","-moz-transition":"opacity .25s ease-in-out","-webkit-transition":"opacity .25s ease-in-out"}
var instructionsTextStyle={position:"relative",top:"25%"}
function numSteps(e,r){return Math.floor((e[1]-e[0])/r)}var Graph=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,a
babelHelpers.classCallCheck(this,r)
for(var s=arguments.length,p=Array(s),i=0;i<s;i++){p[i]=arguments[i]}return a=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(p))),t),t.reset=function(){t._setupGraphie(false)},t.graphie=function(){return t._graphie},t.pointsFromNormalized=function(e,r){var o=t
return _.map(e,function(e){return _.map(e,function(e,t){var a=o.props.range[t]
if(r){return a[0]+(a[1]-a[0])*e}else{var s=o.props.step[t]
var p=numSteps(a,s)
var i=Math.round(e*p)
return a[0]+s*i}})})},t._setupGraphie=function(e){if(t._hasSetupGraphieThisUpdate){return}var r=ReactDOM.findDOMNode(t.refs.graphieDiv)
$(r).empty()
var o=t.props.labels.map(function(e){return Util.unescapeMathMode(e)})
var a=t.props.range
var s=t._graphie=GraphUtils.createGraphie(r)
var p=t._getGridConfig()
s.snap=t.props.snapStep
if(t.props.markings==="graph"){s.graphInit({range:a,scale:_.pluck(p,"scale"),axisArrows:"<->",labelFormat:function e(r){return"\\small{"+r+"}"},gridStep:t.props.gridStep,tickStep:_.pluck(p,"tickStep"),labelStep:1,unityLabels:_.pluck(p,"unityLabel"),isMobile:t.props.isMobile})
s.label([0,a[1][1]],o[1],t.props.isMobile?"below right":"above")
s.label([a[0][1],0],o[0],t.props.isMobile?"above left":"right")}else if(t.props.markings==="grid"){s.graphInit({range:a,scale:_.pluck(p,"scale"),gridStep:t.props.gridStep,axes:false,ticks:false,labels:false,isMobile:t.props.isMobile})}else if(t.props.markings==="none"){s.init({range:a,scale:_.pluck(p,"scale"),isMobile:t.props.isMobile})}var i=.5
var n=0
var l=void 0
if(t.props.instructions){l=$("<div/>")
_.each(defaultInstructionsStyle,function(e,r){l.css(r,e)})
l.css("opacity",i)
var u=$("<span/>",{text:t.props.instructions})
_.each(instructionsTextStyle,function(e,r){u.css(r,e)})
l.append(u)
$(r).append(l)}else{l=undefined}var c=l||t.props.onMouseDown?_.bind(function(e){if(l){l.remove()
l=null}this.props.onMouseDown(e)},t):null
var h=l?function(){l&&l.css("opacity",n)}:null
var g=l?function(){l&&l.css("opacity",i)}:null
s.addMouseLayer({onClick:t.props.onClick,onMouseDown:c,onMouseOver:h,onMouseOut:g,onMouseUp:t.props.onMouseUp,onMouseMove:t.props.onMouseMove,allowScratchpad:true,setDrawingAreaAvailable:t.props.setDrawingAreaAvailable})
t._updateProtractor()
t._updateRuler()
t._hasSetupGraphieThisUpdate=true
if(!e&&t.props.onGraphieUpdated){t.props.onGraphieUpdated(s)}},t._getGridConfig=function(){var e=t
return _.map(e.props.step,function(r,o){return Util.gridDimensionConfig(r,e.props.range[o],e.props.box[o],e.props.gridStep[o])})},t._updateProtractor=function(){if(t.protractor){t.protractor.remove()}if(t.props.showProtractor){var e=t.pointsFromNormalized([[.5,.05]])[0]
t.protractor=t._graphie.protractor(e)}},t._updateRuler=function(){if(t.ruler){t.ruler.remove()}if(t.props.showRuler){var e=t.pointsFromNormalized([[.5,.25]])[0]
var r=t._graphie.range[0][1]-t._graphie.range[0][0]
t.ruler=t._graphie.ruler({center:e,label:t.props.rulerLabel,pixelsPerUnit:t._graphie.scale[0],ticksPerUnit:t.props.rulerTicks,units:Math.round(.8*r)})}},t.toJSON=function(){return _.pick(t.props,"range","step","markings","labels","backgroundImage","showProtractor","showRuler","rulerLabel","rulerTicks","gridStep","snapStep")},o),babelHelpers.possibleConstructorReturn(t,a)}r.prototype.render=function e(){var r=void 0
var o=this.props.backgroundImage
if(o.url){var t=this.props.box[0]/interactiveSizes.defaultBoxSize
r=React.createElement(SvgImage,{src:o.url,width:o.width,height:o.height,scale:t,responsive:false})}else{r=null}return React.createElement("div",{className:"graphie-container above-scratchpad",style:{width:this.props.box[0],height:this.props.box[1]},onMouseOut:this.onMouseOut,onMouseOver:this.onMouseOver,onClick:this.onClick},r,React.createElement("div",{className:"graphie",ref:"graphieDiv"}))}
r.prototype.componentDidMount=function e(){this._setupGraphie(true)}
r.prototype.componentDidUpdate=function e(){this._hasSetupGraphieThisUpdate=false
if(this._shouldSetupGraphie){this._setupGraphie(false)
this._shouldSetupGraphie=false}}
r.prototype.UNSAFE_componentWillReceiveProps=function e(r){var o=["labels","range","step","markings","showProtractor","showRuler","rulerLabel","rulerTicks","gridStep","snapStep"]
var t=this
_.each(o,function(e){if(!_.isEqual(t.props[e],r[e])){t._shouldSetupGraphie=true}})}
return r}(React.Component)
Graph.propTypes={box:PropTypes.array.isRequired,labels:PropTypes.arrayOf(PropTypes.string),range:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),step:PropTypes.arrayOf(PropTypes.number),gridStep:PropTypes.arrayOf(PropTypes.number),snapStep:PropTypes.arrayOf(PropTypes.number),markings:PropTypes.string,backgroundImage:PropTypes.shape({url:PropTypes.string}),showProtractor:PropTypes.bool,showRuler:PropTypes.bool,rulerLabel:PropTypes.string,rulerTicks:PropTypes.number,onGraphieUpdated:PropTypes.func,instructions:PropTypes.string,onClick:PropTypes.func,setDrawingAreaAvailable:PropTypes.func,isMobile:PropTypes.bool}
Graph.defaultProps={labels:["x","y"],range:[[-10,10],[-10,10]],step:[1,1],gridStep:[1,1],snapStep:[.5,.5],markings:"graph",backgroundImage:defaultBackgroundImage,showProtractor:false,showRuler:false,rulerLabel:"",rulerTicks:10,instructions:null,onGraphieUpdated:null,onClick:null,onMouseDown:null,isMobile:false}
module.exports=Graph

});
KAdefine("javascript/perseus-all-package/components/graphie-classes.jsx", function(require, module, exports) {
var Util=require("../util.js")
var nestedMap=Util.nestedMap
var deepEq=Util.deepEq
var _=require("underscore")
function GraphieMovable(e){_.extend(this,e)}var abstractMethod=function e(){throw new Error("Abstract method! Must be implemented by Graphie Movable"+this.constructor.displayName)}
_.extend(GraphieMovable.prototype,{movableProps:[],add:abstractMethod,modify:abstractMethod,remove:abstractMethod,toFront:function e(){}})
var rewriteProps=function e(t,r){return _.extend({},t,{children:_.filter(_.flatten(r),_.identity)})}
var createClass=function e(t){var r=function e(t){if(!(this instanceof e)){throw new Error("Use createElement or JSX with graphie movables")}this.props=rewriteProps(t,t.children||[])
return this}
t.displayName=t.displayName||_.uniqueId("GraphieClass")
r.displayName=t.displayName
r.prototype=new GraphieMovable(t)
r.prototype.constructor=r
return r}
var createSimpleClass=function e(t){return createClass({displayName:t.name||_.uniqueId("GraphieSimpleClass"),movableProps:["children"],add:function e(r){this._elements=t(r,this.props)
this._prevProps=this.props},modify:function e(t){if(!deepEq(this.props,this._prevProps)){this.remove()
this.add(t)
this._prevProps=this.props
return"reordered"}},remove:function e(){nestedMap(this._elements,function(e){if(e){e.remove()}})
this._elements=null
this._prevProps=null},toFront:function e(){nestedMap(this._elements,function(e){if(_.isFunction(e.toFront)){e.toFront()}})}})}
module.exports={GraphieMovable:GraphieMovable,createClass:createClass,createSimpleClass:createSimpleClass}

});
KAdefine("javascript/perseus-all-package/components/graphie-movables.jsx", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var GraphieClasses=require("./graphie-classes.jsx")
var Interactive2=require("../interactive2.js")
var KA=require("../../shared-package/ka.js")
var KhanColors=require("../util/colors.js")
var _require=require("../jipt-hack.jsx"),maybeUnescape=_require.maybeUnescape
var MovablePoint=GraphieClasses.createClass({displayName:"MovablePoint",movableProps:["children"],_getProps:function e(){if(this.props.isMobile){var t=this.props.isMobile
var a=t?{stroke:"#ffffff","stroke-width":3,fill:KhanColors.INTERACTIVE}:{stroke:KhanColors.INTERACTIVE,fill:KhanColors.INTERACTIVE}
var i=t?Object.assign(a,this.props.mobileStyleOverride||{}):Object.assign(a,this.props.normalStyle)
var r=t?babelHelpers.extends({},a,{"stroke-width":0,scale:.75}):this.props.highlightStyle
var s=Object.assign({normalStyle:i,highlightStyle:r,shadow:t,tooltip:t&&this.props.showTooltips},t?{pointSize:7}:{})
return Object.assign(this.props,s)}else{return this.props}},add:function e(t){this.point=Interactive2.addMovablePoint(t,this._getProps())},modify:function e(){this.point.modify(this._getProps())},remove:function e(){this.point.remove()},toFront:function e(){this.point.toFront()},grab:function e(t){this.point.grab(t)}})
_.extend(MovablePoint,Interactive2.MovablePoint)
var MovableLine=GraphieClasses.createClass({displayName:"MovableLine",movableProps:["children"],add:function e(t){var a=_.pluck(this.props.children,"point")
var i=_.extend({},this.props,{points:a})
this.line=Interactive2.addMovableLine(t,i)},modify:function e(){var t=_.pluck(this.props.children,"point")
var a=_.extend({},this.props,{points:t})
this.line.modify(a)},remove:function e(){this.line.remove()},toFront:function e(){this.line.toFront()}})
_.extend(MovableLine,Interactive2.MovableLine)
function shouldRenderJipt(){return KA.language==="en-pt"}var jiptLabels=[]
if(shouldRenderJipt()){if(!KA.jipt_dom_insert_checks){KA.jipt_dom_insert_checks=[]}KA.jipt_dom_insert_checks.push(function(e,t,a){var i=$(t).data("jipt-label-movables-index")
if(t&&typeof i!=="undefined"){var r=jiptLabels[i],s=r.label,o=r.useMath
s.text("")
e=maybeUnescape(e)
if(o==="undefined"||o){var n=/^\$(.*)\$$/
var l=e.match(n)
var h=l?l[1]:"\\color{red}{\\text{Invalid Math}}"
s.processMath(h,true)}else{s.processText(e)}return false}return e})}var Label=GraphieClasses.createSimpleClass(function(e,t){var a=t.coord
if(t.unscaled){a=e.unscalePoint(a)}var i=null
if(shouldRenderJipt()){i=e.label(a,t.text,t.direction,false,t.style)
$(i).data("jipt-label-movables-index",jiptLabels.length)
jiptLabels.push({label:i,useMath:t.tex})}else{i=e.label(a,t.text,t.direction,t.tex,t.style)}return i})
var Line=GraphieClasses.createClass({displayName:"Line",movableProps:["children"],add:function e(t){var a=this.props
this.graphie=t
this.line=this.graphie.line(a.start,a.end,a.style)},modify:function e(){var t=this.props
var a=this.graphie.svgPath([t.start,t.end])
this.line.attr(_.extend({},t.style,{path:a}))},remove:function e(){this.line.remove()},toFront:function e(){this.line.toFront()}})
var Parabola=GraphieClasses.createClass({displayName:"Parabola",movableProps:["children"],add:function e(t){var a=this.props
this.graphie=t
this.parabola=this.graphie.parabola(a.a,a.b,a.c,a.style)},modify:function e(){var t=this.props
var a=this.graphie.svgParabolaPath(t.a,t.b,t.c)
this.parabola.attr(_.extend({},t.style,{path:a}))},remove:function e(){this.parabola.remove()},toFront:function e(){this.parabola.toFront()}})
var Sinusoid=GraphieClasses.createClass({displayName:"Sinusoid",movableProps:["children"],add:function e(t){var a=this.props
this.graphie=t
this.sinusoid=this.graphie.sinusoid(a.a,a.b,a.c,a.d,a.style)},modify:function e(){var t=this.props
var a=this.graphie.svgSinusoidPath(t.a,t.b,t.c,t.d)
this.sinusoid.attr(_.extend({},t.style,{path:a}))},remove:function e(){this.sinusoid.remove()},toFront:function e(){this.sinusoid.toFront()}})
var Plot=GraphieClasses.createSimpleClass(function(e,t){return e.plot(t.fn,t.range,t.style)})
var PlotParametric=GraphieClasses.createSimpleClass(function(e,t){return e.plotParametric(t.fn,t.range,t.style)})
var Point=GraphieClasses.createSimpleClass(function(e,t){return e.ellipse(t.coord,e.unscaleVector([4,4]),{fill:t.color||KhanColors.BLACK,stroke:t.color||KhanColors.BLACK})})
var Path=GraphieClasses.createClass({displayName:"Path",movableProps:["children"],add:function e(t){var a=this.props
this.graphie=t
this.path=this.graphie.path(a.coords,a.style)},modify:function e(){var t=this.props
var a=this.graphie.svgPath(t.coords)
this.path.attr({path:a})},remove:function e(){this.path.remove()},toFront:function e(){this.path.toFront()}})
var Arc=GraphieClasses.createSimpleClass(function(e,t){var a=t.center
var i=t.radius
if(t.unscaled){a=e.unscalePoint(a)
i=e.unscaleVector(i)}return e.arc(a,i,t.startAngle,t.endAngle,t.sector,t.style)})
var Circle=GraphieClasses.createSimpleClass(function(e,t){return e.circle(t.center,t.radius,t.style)})
var Rect=GraphieClasses.createSimpleClass(function(e,t){return e.rect(t.x,t.y,t.width,t.height,t.style)})
module.exports={Arc:Arc,Circle:Circle,Label:Label,Line:Line,MovableLine:MovableLine,MovablePoint:MovablePoint,Parabola:Parabola,Path:Path,Plot:Plot,PlotParametric:PlotParametric,Point:Point,Sinusoid:Sinusoid,Rect:Rect}

});
KAdefine("javascript/perseus-all-package/components/graphie.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var $=require("jquery")
var GraphieClasses=require("./graphie-classes.jsx")
var Movables=require("./graphie-movables.jsx")
var GraphieMovable=GraphieClasses.GraphieMovable
var deepEq=require("../util.js").deepEq
var nestedMap=require("../util.js").nestedMap
var assert=require("../interactive2/interactive-util.js").assert
var GraphUtils=require("../util/graph-utils.js")
var createGraphie=GraphUtils.createGraphie
var Graphie=function(e){babelHelpers.inherits(r,e)
function r(){var o,a,s
babelHelpers.classCallCheck(this,r)
for(var p=arguments.length,n=Array(p),i=0;i<p;i++){n[i]=arguments[i]}return s=(o=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),a),a.getGraphie=function(){return a._graphie},a._range=function(){return _.map(a.props.range,function(e){if(e[0]>=e[1]){return[-10,10]}else{return e}})},a._box=function(){return _.map(a.props.box,function(e){return e>0?e:340})},a._scale=function(){var e=a._box()
var r=a._range()
return _.map(e,function(e,o){var a=r[o][1]-r[o][0]
return e/a})},a._setupGraphie=function(){a._removeMovables()
var e=ReactDOM.findDOMNode(a.refs.graphieDiv)
$(e).empty()
var r=a._graphie=createGraphie(e)
r.init({range:a._range(),scale:a._scale(),isMobile:a.props.isMobile})
if(a.props.addMouseLayer){r.addMouseLayer({onClick:a.props.onClick,onMouseDown:a.props.onMouseDown,onMouseUp:a.props.onMouseUp,onMouseMove:a.props.onMouseMove,setDrawingAreaAvailable:a.props.setDrawingAreaAvailable})}r.snap=a.props.options.snapStep||[1,1]
if(a.props.responsive){$(e).css({width:"100%",height:"100%"})
r.raphael.setSize("100%","100%")}a.props.setup(r,_.extend({range:a._range(),scale:a._scale()},a.props.options))},a._removeMovables=function(){_.invoke(a._movables,"remove")
a._movables={}},a._renderMovables=function(e,r){var o=r.graphie
var s=r.oldMovables
var p=r.newMovables
var n=function e(o){_.each(o.movableProps,function(e){o.props[e]=a._renderMovables(o.props[e],r)})}
var i=false
return nestedMap(e,function(e){if(!e){r.nextKey++
return e}var t=new e.type(e.props)
assert(t instanceof GraphieMovable,"All children of a Graphie component must be Graphie "+"movables")
var u=e.key
var l=u==null?"_no_id_"+r.nextKey:u
r.nextKey++
var c=e.ref
n(t)
var v=s[l]
if(!v){t.add(o)
i=true
p[l]=t}else if(t.constructor===v.constructor){v.props=t.props
var d=v.modify(o)
if(d==="reordered"){i=true}p[l]=v}else{if(u==null){if(typeof console!=="undefined"&&console.warn){console.warn("Replacing a <Graphie> child with a "+"child of a different type. Please add keys "+"to your <Graphie> children")}}v.remove()
t.add(o)
i=true
p[l]=t}if(i){p[l].toFront()}if(c){a.movables[c]=p[l]}return p[l]})},a._updateMovables=function(){var e=a._graphie
var r=a._movables
var o={}
a._movables=o
a.movables={}
a._renderMovables(a.props.children,{nextKey:1,graphie:e,oldMovables:r,newMovables:o})
_.each(r,function(e,r){if(!o[r]){e.remove()}})},o),babelHelpers.possibleConstructorReturn(a,s)}r.prototype.componentDidMount=function e(){this._setupGraphie()
this._updateMovables()}
r.prototype.shouldComponentUpdate=function e(r){return!_.isEqual(this.props,r)}
r.prototype.componentDidUpdate=function e(r){if(this.props.setup!==r.setup&&window.console&&window.console.warn){window.console.warn("<Graphie> was given a new setup function. "+"This is a bad idea; please refactor your code to give "+"the same setup function reference to <Graphie> on "+"every render.")}if(!deepEq(this.props.options,r.options)||!deepEq(this.props.box,r.box)||!deepEq(this.props.range,r.range)){this._setupGraphie()}this._updateMovables()}
r.prototype.render=function e(){return React.createElement("div",{className:"graphie-container"},React.createElement("div",{className:"graphie",ref:"graphieDiv"}))}
return r}(React.Component)
Graphie.propTypes={addMouseLayer:PropTypes.bool,box:PropTypes.arrayOf(PropTypes.number).isRequired,children:PropTypes.node,isMobile:PropTypes.bool,onClick:PropTypes.func,onMouseDown:PropTypes.func,onMouseMove:PropTypes.func,onMouseUp:PropTypes.func,options:PropTypes.shape({snapStep:PropTypes.arrayOf(PropTypes.number)}),range:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),responsive:PropTypes.bool,setDrawingAreaAvailable:PropTypes.func,setup:PropTypes.func.isRequired}
Graphie.defaultProps={range:[[-10,10],[-10,10]],options:{},responsive:false,addMouseLayer:true}
_.extend(Graphie,GraphieClasses)
_.extend(Graphie,Movables)
module.exports=Graphie

});
KAdefine("javascript/perseus-all-package/components/highlighting/highlightable-content.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var HighlightingUI=require("./ui/highlighting-ui.jsx")
var WordIndexer=require("./word-indexer.jsx")
var _require2=require("./highlights.js"),addHighlight=_require2.addHighlight,buildHighlight=_require2.buildHighlight,deserializeHighlight=_require2.deserializeHighlight,serializeHighlight=_require2.serializeHighlight
var HighlightableContent=function(e){babelHelpers.inherits(t,e)
function t(){var i,r,a
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,h=Array(l),n=0;n<l;n++){h[n]=arguments[n]}return a=(i=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(h))),r),r.state={wordRanges:[]},r._handleAddHighlight=function(e){var t=addHighlight(r._getDOMHighlights(),e)
var i={}
for(var a=Object.keys(t),l=Array.isArray(a),h=0,a=l?a:a[Symbol.iterator]();;){var n
if(l){if(h>=a.length)break
n=a[h++]}else{h=a.next()
if(h.done)break
n=h.value}var s=n
i[s]=serializeHighlight(t[s])}r.props.onSerializedHighlightsUpdate(i)},r._handleRemoveHighlight=function(e){var t=r.props.serializedHighlights
var i=babelHelpers.extends({},t)
delete i[e]
r.props.onSerializedHighlightsUpdate(i)},r._handleWordsUpdate=function(e){r.setState({wordRanges:e})},i),babelHelpers.possibleConstructorReturn(r,a)}t.prototype._buildHighlight=function e(t){return buildHighlight(this._getDOMHighlights(),this.state.wordRanges,t)}
t.prototype._getDOMHighlights=function e(){var t=this.props.serializedHighlights
var i=this.state.wordRanges
var r={}
for(var a=Object.keys(t),l=Array.isArray(a),h=0,a=l?a:a[Symbol.iterator]();;){var n
if(l){if(h>=a.length)break
n=a[h++]}else{h=a.next()
if(h.done)break
n=h.value}var s=n
r[s]=deserializeHighlight(t[s],i)}return r}
t.prototype.render=function e(){var t=this
var i=this._getDOMHighlights()
var r=function e(i){return t._buildHighlight(i)}
return React.createElement("div",{className:css(styles.container),ref:function e(i){return t._container=i}},React.createElement("div",null,this.props.enabled&&this._container&&this._content&&React.createElement(HighlightingUI,{buildHighlight:r,contentNode:this._content,editable:this.props.editable,highlights:i,offsetParent:this._container,zIndexes:{belowContent:0},onAddHighlight:this._handleAddHighlight,onRemoveHighlight:this._handleRemoveHighlight})),React.createElement("div",{className:css(styles.content),ref:function e(i){return t._content=i}},React.createElement(WordIndexer,{onWordsUpdate:this._handleWordsUpdate},this.props.children)))}
return t}(React.PureComponent)
var styles=StyleSheet.create({container:{position:"relative",zIndex:0},content:{position:"relative",zIndex:1}})
module.exports=HighlightableContent

});
KAdefine("javascript/perseus-all-package/components/highlighting/highlights.js", function(require, module, exports) {
var _require=require("./ranges.js"),findFirstAndLastWordIndexes=_require.findFirstAndLastWordIndexes,unionRanges=_require.unionRanges,spanRanges=_require.spanRanges,rangeIncludes=_require.rangeIncludes
function addHighlight(e,r){var i={}
var n=r.domRange
var a=r.firstWordIndex
var d=r.lastWordIndex
for(var t=Object.keys(e),s=Array.isArray(t),o=0,t=s?t:t[Symbol.iterator]();;){var l
if(s){if(o>=t.length)break
l=t[o++]}else{o=t.next()
if(o.done)break
l=o.value}var g=l
var u=e[g]
var f=unionRanges(u.domRange,n)
if(f){n=f
a=Math.min(u.firstWordIndex,a)
d=Math.max(u.lastWordIndex,d)}else{i[g]=u}}var h={firstWordIndex:a,lastWordIndex:d,domRange:n}
var v=Object.keys(i)
var x=createNewUniqueKey(v)
i[x]=h
return i}function buildHighlight(e,r,i){for(var n=Object.keys(e),a=Array.isArray(n),d=0,n=a?n:n[Symbol.iterator]();;){var t
if(a){if(d>=n.length)break
t=n[d++]}else{d=n.next()
if(d.done)break
t=d.value}var s=t
var o=e[s].domRange
if(rangeIncludes(o,i)){return null}}var l=findFirstAndLastWordIndexes(i,r)
if(!l){return null}var g=l[0],u=l[1]
var f=r[g]
var h=r[u]
return{firstWordIndex:g,lastWordIndex:u,domRange:spanRanges(f,h)}}function createNewUniqueKey(e){var r=""+(new Date).getTime()
if(!e.includes(r)){return r}var i=0
var n=void 0
do{n=r+"-"+i
i++}while(e.includes(n))
return n}function deserializeHighlight(e,r){var i=e.range,n=i.firstWordIndex,a=i.lastWordIndex
var d=r[n]
if(!d){throw new Error("first word index "+d+" is out of bounds: "+("must be 0–"+(r.length-1)+" inclusive"))}var t=r[a]
if(!t){throw new Error("last word index "+t+" is out of bounds: "+("must be 0–"+(r.length-1)+" inclusive"))}return{firstWordIndex:n,lastWordIndex:a,domRange:spanRanges(d,t)}}function serializeHighlight(e){var r=e.firstWordIndex,i=e.lastWordIndex
return{range:{type:"word-indexes",firstWordIndex:r,lastWordIndex:i}}}module.exports={addHighlight:addHighlight,buildHighlight:buildHighlight,deserializeHighlight:deserializeHighlight,serializeHighlight:serializeHighlight}

});
KAdefine("javascript/perseus-all-package/components/highlighting/ranges.js", function(require, module, exports) {
function compareRangeBoundaryPoints(n,e,r,a){var t=void 0
if(e==="start"&&a==="start"){t=Range.START_TO_START}else if(e==="start"&&a==="end"){t=Range.END_TO_START}else if(e==="end"&&a==="start"){t=Range.START_TO_END}else{t=Range.END_TO_END}return n.compareBoundaryPoints(t,r)}function spanRanges(n,e){var r=n.cloneRange()
r.setEnd(e.endContainer,e.endOffset)
return r}function rangesOverlap(n,e){var r=compareRangeBoundaryPoints(n,"end",e,"start")<0||compareRangeBoundaryPoints(e,"end",n,"start")<0
return!r}function rangeIncludes(n,e){var r=compareRangeBoundaryPoints(n,"start",e,"start")<=0&&compareRangeBoundaryPoints(n,"end",e,"end")>=0
return r}function intersectRanges(n,e){if(!rangesOverlap(n,e)){return null}var r=compareRangeBoundaryPoints(n,"start",e,"start")>0?n:e
var a=compareRangeBoundaryPoints(n,"end",e,"end")<0?n:e
return spanRanges(r,a)}function unionRanges(n,e){if(!rangesOverlap(n,e)){return null}var r=compareRangeBoundaryPoints(n,"start",e,"start")<0?n:e
var a=compareRangeBoundaryPoints(n,"end",e,"end")>0?n:e
return spanRanges(r,a)}function findBoundaryWordIndex(n,e,r,a,t){var s=-1
var o=a
var d=t
var i=0
while(o<=d){i++
if(i>e.length*2){throw new Error("Assertion error: Binary search isn't terminating? "+("lower="+o+", upper="+d))}var u=Math.floor((o+d)/2)
if(r==="first"){var g=compareRangeBoundaryPoints(e[u],"end",n,"start")
if(g<=0){o=u+1}else{s=u
d=u-1}}else{var l=compareRangeBoundaryPoints(e[u],"start",n,"end")
if(l>=0){d=u-1}else{s=u
o=u+1}}}return s}function findFirstAndLastWordIndexes(n,e){var r=findBoundaryWordIndex(n,e,"first",0,e.length-1)
if(r<0){return null}var a=findBoundaryWordIndex(n,e,"last",r,e.length-1)
if(a<0){return null}return[r,a]}module.exports={findFirstAndLastWordIndexes:findFirstAndLastWordIndexes,rangesOverlap:rangesOverlap,rangeIncludes:rangeIncludes,intersectRanges:intersectRanges,unionRanges:unionRanges,spanRanges:spanRanges}

});
KAdefine("javascript/perseus-all-package/components/highlighting/types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/highlight-renderer.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var _require2=require("./util.js"),getClientRectsForTextInRange=_require2.getClientRectsForTextInRange,getRelativePosition=_require2.getRelativePosition,getRelativeRect=_require2.getRelativeRect
var HighlightRenderer=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,o
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,n=Array(s),a=0;a<s;a++){n[a]=arguments[a]}return o=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),i),i.state={cachedHighlightRects:i._computeRects(i.props),tooltipIsHovered:false},r),babelHelpers.possibleConstructorReturn(i,o)}t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(this.props.highlight!==t.highlight||this.props.offsetParent!==t.offsetParent){this.setState({cachedHighlightRects:this._computeRects(t)})}}
t.prototype._computeRects=function e(t){var r=t.highlight,i=t.offsetParent
var o=getClientRectsForTextInRange(r.domRange)
var s=i.getBoundingClientRect()
var n=o.map(function(e){return getRelativeRect(e,s)})
return n}
t.prototype._rectIsHovered=function e(t,r){var i=getRelativePosition(r,t)
return 0<=i.left&&i.left<t.width&&0<=i.top&&i.top<t.height}
t.prototype.isHovered=function e(t){var r=this
if(!t){return false}var i=this.props.offsetParent
var o=this.state.cachedHighlightRects
var s=i.getBoundingClientRect()
var n=getRelativePosition(t,s)
return o.some(function(e){return r._rectIsHovered(e,n)})}
t.prototype.render=function e(){var t=this
var r=this.state.cachedHighlightRects
return React.createElement("div",null,r.map(function(e,r){return React.createElement("div",{key:r,className:css(styles.highlightRect),style:{position:"absolute",width:e.width,height:e.height,top:e.top,left:e.left,zIndex:t.props.zIndexes.belowContent}})}))}
return t}(React.PureComponent)
var styles=StyleSheet.create({highlightRect:{background:"#fffabe"}})
module.exports=HighlightRenderer

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/highlight-set-renderer.jsx", function(require, module, exports) {
var React=require("react")
var i18n=require("../../../../shared-package/i18n.js")
var HighlightRenderer=require("./highlight-renderer.jsx")
var HighlightTooltip=require("./highlight-tooltip.jsx")
var HighlightSetRenderer=function(e){babelHelpers.inherits(t,e)
function t(){var i,r,o
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,h=Array(n),s=0;s<n;s++){h[s]=arguments[s]}return o=(i=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(h))),r),r.state={hoveredHighlightKey:null,hoveringTooltipFor:null},r._highlightRenderers={},r._handleMouseMove=function(e){var t={left:e.clientX,top:e.clientY}
var i=r._getHoveredHighlightKey(t)
r.setState({hoveredHighlightKey:i})},i),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.componentDidMount=function e(){this._updateEditListeners(false,this.props.editable)}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){this._updateEditListeners(this.props.editable,t.editable)
if(this.state.hoveredHighlightKey!=null&&!(this.state.hoveredHighlightKey in t.highlights)){this.setState({hoveredHighlightKey:null})}if(this.state.hoveringTooltipFor!=null&&!(this.state.hoveringTooltipFor in t.highlights)){this.setState({hoveringTooltipFor:null})}}
t.prototype.componentWillUnmount=function e(){this._updateEditListeners(this.props.editable,false)}
t.prototype._updateEditListeners=function e(t,i){if(!t&&i){window.addEventListener("mousemove",this._handleMouseMove)}else if(t&&!i){window.removeEventListener("mousemove",this._handleMouseMove)
this.setState({hoveredHighlightKey:null,hoveringTooltipFor:null})}}
t.prototype._getHoveredHighlightKey=function e(t){var i=this
var r=this.state.hoveringTooltipFor
if(typeof r==="string"){return r}var o=Object.keys(this.props.highlights)
return o.find(function(e){var r=i._highlightRenderers[e]
return r&&r.isHovered(t)})}
t.prototype._renderTooltip=function e(){var t=this
var i=this.state.hoveredHighlightKey
if(i==null){return null}var r=this.props.highlights[i]
return React.createElement(HighlightTooltip,{label:i18n._("Remove highlight"),focusNode:r.domRange.endContainer,focusOffset:r.domRange.endOffset,offsetParent:this.props.offsetParent,onClick:function e(){return t.props.onRemoveHighlight(i)},onMouseEnter:function e(){return t.setState({hoveringTooltipFor:i})},onMouseLeave:function e(){return t.setState({hoveringTooltipFor:null})}})}
t.prototype.render=function e(){var t=this
return React.createElement("div",null,Object.keys(this.props.highlights).map(function(e){return React.createElement(HighlightRenderer,{ref:function i(r){if(r){t._highlightRenderers[e]=r}else{delete t._highlightRenderers[e]}},key:e,highlight:t.props.highlights[e],highlightKey:e,offsetParent:t.props.offsetParent,zIndexes:t.props.zIndexes})}),this.props.editable&&this._renderTooltip())}
return t}(React.PureComponent)
module.exports=HighlightSetRenderer

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/highlight-tooltip.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _globalStyles=require("../../../../shared-styles-package/global-styles.js")
var _util=require("./util.js")
var _newTooltip=require("../../../../components/new-tooltip-package/new-tooltip.jsx")
var _newTooltip2=babelHelpers.interopRequireDefault(_newTooltip)
var HighlightTooltip=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidUpdate=function e(t){if(this.props.focusNode!==t.focusNode||this.props.focusOffset!==t.focusOffset||this.props.offsetParent!==t.offsetParent){this._tooltip&&this._tooltip.remeasure()}}
t.prototype._getFocusRect=function e(){var t=this.props,o=t.focusNode,r=t.focusOffset,s=t.offsetParent
var i=document.createRange()
i.setStart(o,r)
i.setEnd(o,r)
var l=i.getClientRects()[0]
if(!l){console.warn("[Highlighting] Known bug: Could not determine the focus "+'position, so did not show an "Add Highlight" tooltip. '+"https://app.asana.com/0/329800276300868/413878480039713 "+"(see also /r/asana-links)")
return null}var n=s.getBoundingClientRect()
var a=(0,_util.getRelativeRect)(l,n)
return a}
t.prototype.render=function e(){var t=this
var o=this._getFocusRect()
if(!o){return null}var r=React.createElement("div",{className:(0,_aphrodite.css)(styles.tooltipLabel)},this.props.label)
return React.createElement(_newTooltip2.default,{content:r,color:_globalStyles.colors.kaBlue,inverted:true,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,toggleOnHover:false,showOnMount:true,ref:function e(o){return t._tooltip=o}},React.createElement("div",{style:{position:"absolute",left:o.left,top:o.top,height:o.height}}))}
return t}(React.PureComponent)
var styles=_aphrodite.StyleSheet.create({tooltipLabel:{userSelect:"none"}})
module.exports=HighlightTooltip

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/highlighting-ui.jsx", function(require, module, exports) {
var React=require("react")
var i18n=require("../../../../shared-package/i18n.js")
var HighlightSetRenderer=require("./highlight-set-renderer.jsx")
var HighlightTooltip=require("./highlight-tooltip.jsx")
var _require=require("../ranges.js"),rangesOverlap=_require.rangesOverlap
var SelectionTracker=require("./selection-tracker.jsx")
var HighlightingUI=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype._handleAddHighlight=function e(t){this.props.onAddHighlight(t)
var r=document.getSelection()
if(r){r.collapseToEnd()}}
t.prototype._selectionIsValid=function e(t){if(!t){return false}var r=this.props.contentNode
var i=new Range
i.selectNodeContents(r)
var n=new Range
n.setStart(t.focusNode,t.focusOffset)
n.collapse(true)
var o=rangesOverlap(i,n)
var l=o
return l}
t.prototype.render=function e(){var t=this
return React.createElement(SelectionTracker,{buildHighlight:this.props.buildHighlight,enabled:this.props.editable},function(e,r){return React.createElement("div",null,React.createElement(HighlightSetRenderer,{editable:t.props.editable&&!t._selectionIsValid(e),highlights:t.props.highlights,offsetParent:t.props.offsetParent,onRemoveHighlight:t.props.onRemoveHighlight,zIndexes:t.props.zIndexes}),t._selectionIsValid(e)&&!r&&React.createElement(HighlightTooltip,{label:i18n._("Add highlight"),onClick:function r(){return t._handleAddHighlight(e.proposedHighlight)},focusNode:e.focusNode,focusOffset:e.focusOffset,offsetParent:t.props.offsetParent}))})}
return t}(React.PureComponent)
module.exports=HighlightingUI

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/selection-tracker.jsx", function(require, module, exports) {
var React=require("react")
var SelectionTracker=function(e){babelHelpers.inherits(t,e)
function t(){var n,o,s
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,r=Array(i),a=0;a<i;a++){r[a]=arguments[a]}return s=(n=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(r))),o),o.state={mouseState:"up",trackedSelection:null},o._handleSelectionChange=function(){o._updateTrackedSelection(o.props.buildHighlight)
if(o.state.mouseState==="down"){o.setState({mouseState:"down-and-selecting"})}},o._handleMouseDown=function(){o.setState({mouseState:"down"})},o._handleMouseUp=function(){o.setState({mouseState:"up"})},n),babelHelpers.possibleConstructorReturn(o,s)}t.prototype.componentDidMount=function e(){this._updateListeners(false,this.props.enabled)}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(this.props.buildHighlight!==t.buildHighlight){this._updateTrackedSelection(t.buildHighlight)}this._updateListeners(this.props.enabled,t.enabled)}
t.prototype.componentWillUnmount=function e(){this._updateListeners(this.props.enabled,false)}
t.prototype._updateListeners=function e(t,n){if(!t&&n){window.addEventListener("mousedown",this._handleMouseDown)
window.addEventListener("mouseup",this._handleMouseUp)
document.addEventListener("selectionchange",this._handleSelectionChange)}else if(t&&!n){window.removeEventListener("mousedown",this._handleMouseDown)
window.removeEventListener("mouseup",this._handleMouseUp)
document.removeEventListener("selectionchange",this._handleSelectionChange)
this.setState({mouseState:"up",trackedSelection:null})}}
t.prototype._computeFocusAndRange=function e(){var t=document.getSelection()
if(!t||t.rangeCount===0){return null}var n=t.getRangeAt(0)
if(n.collapsed){return null}var o=t.focusNode
var s=t.focusOffset
return{focusNode:o,focusOffset:s,range:n}}
t.prototype._computeTrackedSelection=function e(t){var n=this._computeFocusAndRange()
if(!n){return null}var o=n.focusNode,s=n.focusOffset,i=n.range
var r=t(i)
if(!r){return null}return{focusNode:o,focusOffset:s,proposedHighlight:r}}
t.prototype._updateTrackedSelection=function e(t){var n=this._computeTrackedSelection(t)
this.setState({trackedSelection:n})}
t.prototype.render=function e(){var t=this.state,n=t.mouseState,o=t.trackedSelection
var s=n==="down-and-selecting"
return this.props.children?React.createElement("div",null,this.props.children(o,s)):null}
return t}(React.PureComponent)
module.exports=SelectionTracker

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/components/highlighting/ui/util.js", function(require, module, exports) {
var _require=require("../ranges.js"),rangesOverlap=_require.rangesOverlap,intersectRanges=_require.intersectRanges
function getRelativePosition(e,t){return{left:e.left-t.left,top:e.top-t.top}}function getRelativeRect(e,t){return babelHelpers.extends({},getRelativePosition(e,t),{width:e.width,height:e.height})}function getClientRectsForTextInRange(e){var t=[]
addClientRectsForTextInNodeAndRange(e.commonAncestorContainer,e,t)
return t}function addClientRectsForTextInNodeAndRange(e,t,r){var n=new Range
n.selectNodeContents(e)
if(e.nodeType===Node.TEXT_NODE){var i=intersectRanges(t,n)
if(i){addClientRectsForText(e,i,r)}}else if(e.nodeType===Node.ELEMENT_NODE){if(!rangesOverlap(t,n)){return}for(var a=Array.from(e.childNodes),o=Array.isArray(a),l=0,a=o?a:a[Symbol.iterator]();;){var s
if(o){if(l>=a.length)break
s=a[l++]}else{l=a.next()
if(l.done)break
s=l.value}var g=s
addClientRectsForTextInNodeAndRange(g,t,r)}}}function addClientRectsForText(e,t,r){var n=e.parentElement
var i=window.getComputedStyle(n)
var a=null
if(typeof i.lineHeight==="string"&&i.lineHeight.endsWith("px")){var o=parseFloat(i.lineHeight)
if(!isNaN(o)){a=o}}var l=Array.from(t.getClientRects())
for(var s=l,g=Array.isArray(s),d=0,s=g?s:s[Symbol.iterator]();;){var v
if(g){if(d>=s.length)break
v=s[d++]}else{d=s.next()
if(d.done)break
v=d.value}var R=v
var f={left:R.left,top:R.top,height:R.height,width:R.width}
if(a!==null){var c=a-f.height
f.top-=c
f.height=a}r.push(f)}}module.exports={getClientRectsForTextInRange:getClientRectsForTextInRange,getRelativePosition:getRelativePosition,getRelativeRect:getRelativeRect}

});
KAdefine("javascript/perseus-all-package/components/highlighting/word-indexer.jsx", function(require, module, exports) {
var React=require("react")
var WordIndexer=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){this._sendWordsUpdate()}
t.prototype.componentDidUpdate=function e(){this._sendWordsUpdate()}
t.prototype._sendWordsUpdate=function e(){this.props.onWordsUpdate(this._getWordRanges())}
t.prototype._getWordRanges=function e(){var t=this._container
if(!t){throw new Error("invariant violation: `this._container` is not defined, but "+"this method is only called after mount/update")}var r=t.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,function(){return NodeFilter.FILTER_ACCEPT},false)
var n=[]
var o=null
while(r.nextNode()){var i=r.currentNode
if(i.nodeType===Node.ELEMENT_NODE){var a=i
if(getComputedStyle(a).display!=="inline"){o=null}}else if(i.nodeType===Node.TEXT_NODE){var d=i.nodeValue
var s=/\S+/g
var l=void 0
var p=null
while((l=s.exec(d))!==null){var u=l.index
var c=l.index+l[0].length
var h=void 0
if(u===0&&o){h=o
h.setEnd(i,c)}else{h=i.ownerDocument.createRange()
h.setStart(i,u)
h.setEnd(i,c)
n.push(h)}if(c===d.length){p=h}}o=p}}return n}
t.prototype.render=function e(){var t=this
return React.createElement("div",{ref:function e(r){return t._container=r}},this.props.children)}
return t}(React.PureComponent)
module.exports=WordIndexer

});
KAdefine("javascript/perseus-all-package/components/hud.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var constants=require("../styles/constants.js")
var HUD=function(e){babelHelpers.inherits(t,e)
function t(){var r,a,n
babelHelpers.classCallCheck(this,t)
for(var l=arguments.length,o=Array(l),i=0;i<l;i++){o[i]=arguments[i]}return n=(r=(a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a),a.renderVisibleIcon=function(){return React.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:css(styles.icon)},React.createElement("defs",null,React.createElement("path",{id:"a",d:"M7.401 10.035c-1.424.748-2.599 1.905-3.544 "+"3.48a1 1 0 0 1-1.714-1.03C4.325 8.849 7.652 7 "+"12 7c4.348 0 7.675 1.848 9.857 5.486a1 1 0 0 "+"1-1.714 1.028c-.945-1.574-2.12-2.73-3.544-"+"3.48a5 5 0 1 1-9.198 0zM12 15a3 3 0 1 0 0-6 3 3 "+"0 0 0 0 6z"})),React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React.createElement("mask",{id:"b",fill:"#fff"},React.createElement("use",{href:"#a"})),React.createElement("use",{fill:"#fff",fillRule:"nonzero",href:"#a"}),React.createElement("g",{fill:"#fff",mask:"url(#b)"},React.createElement("path",{d:"M0 0h24v24H0z"}))))},a.renderHiddenIcon=function(){return React.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:css(styles.icon)},React.createElement("defs",null,React.createElement("path",{id:"a",d:"M8.794 7.38C9.791 7.127 10.86 7 12 7c4.348 0 "+"7.675 1.848 9.857 5.486a1 1 0 0 1-1.714 "+"1.028c-.945-1.574-2.12-2.73-3.544-3.48.258."+"604.401 1.268.401 1.966 0 1.02-.305 "+"1.967-.828 2.757l2.535 2.536a1 1 0 0 "+"1-1.414 1.414l-12-12a1 1 0 0 1 "+"1.414-1.414L8.794 7.38zm5.914 5.913a3 3 0 0 "+"0-4.001-4.001l4 4.001zM6.072 8.486l2.976 "+"2.976a3 3 0 0 0 3.49 3.49l1.579 1.58A5 5 0 "+"0 1 7.4 10.035c-1.424.747-2.599 1.904-3.544 "+"3.478a1 1 0 0 1-1.714-1.028c1.049-1.75 "+"2.363-3.085 3.929-4z"})),React.createElement("g",{fill:"none",fillRule:"evenodd"},React.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React.createElement("mask",{id:"b",fill:"#fff"},React.createElement("use",{href:"#a"})),React.createElement("use",{fill:"#fff",fillRule:"nonzero",href:"#a"}),React.createElement("g",{fill:"#fff",mask:"url(#b)"},React.createElement("path",{d:"M0 0h24v24H0z"}))))},r),babelHelpers.possibleConstructorReturn(a,n)}t.prototype.render=function e(){var t=this
var r=void 0
var a=void 0
if(this.props.enabled){r=styles.enabled
a=this.renderVisibleIcon()}else{r=styles.disabled
a=this.renderHiddenIcon()}return React.createElement("button",{className:css(styles.hud,this.props.fixedPosition&&styles.hudFixedPosition,r),onClick:function e(r){t.props.onClick()}},a,this.props.message)}
return t}(React.Component)
HUD.propTypes={message:PropTypes.string.isRequired,enabled:PropTypes.bool.isRequired,onClick:PropTypes.func.isRequired,fixedPosition:PropTypes.bool}
HUD.defaultProps={fixedPosition:true}
var styles=StyleSheet.create({hud:{boxSizing:"border-box",height:36,padding:"9px 16px",borderRadius:18,fontFamily:constants.boldFontFamily,fontSize:"15px",lineHeight:"18px",color:constants.white,userSelect:"none",borderWidth:0},hudFixedPosition:{bottom:20,position:"fixed",right:20,zIndex:1},icon:{width:24,height:24,marginRight:8,marginTop:-3,verticalAlign:"middle"},enabled:{backgroundColor:constants.warningColor,":hover":{backgroundColor:constants.warningColorHover},":active":{backgroundColor:constants.warningColorActive}},disabled:{backgroundColor:constants.gray76,":hover":{backgroundColor:"#a1a5a9"},":active":{backgroundColor:constants.gray68}}})
module.exports=HUD

});
KAdefine("javascript/perseus-all-package/components/image-loader.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var Status={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed"}
var ImageLoader=function(r){babelHelpers.inherits(t,r)
function t(){var e,o,s
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,n=Array(a),p=0;p<a;p++){n[p]=arguments[p]}return s=(e=(o=babelHelpers.possibleConstructorReturn(this,r.call.apply(r,[this].concat(n))),o),o.state={status:o.props.src?Status.LOADING:Status.PENDING},o.createLoader=function(){o.destroyLoader()
o.img=new Image
o.img.onload=o.handleLoad
o.img.onerror=o.handleError
o.img.src=o.props.src},o.destroyLoader=function(){if(o.img){o.img.onload=null
o.img.onerror=null
o.img=null}},o.handleLoad=function(r){o.destroyLoader()
o.setState({status:Status.LOADED})
if(o.props.onLoad){o.props.onLoad(r)}},o.handleError=function(r){o.destroyLoader()
o.setState({status:Status.FAILED})
if(o.props.onError){o.props.onError(r)}},o.renderImg=function(){var r=o.props,t=r.src,e=r.imgProps
var s={src:t}
for(var a in e){if(e.hasOwnProperty(a)){s[a]=e[a]}}return React.createElement("img",s)},e),babelHelpers.possibleConstructorReturn(o,s)}t.prototype.componentDidMount=function r(){if(this.state.status===Status.LOADING){this.createLoader()}}
t.prototype.UNSAFE_componentWillReceiveProps=function r(t){if(this.props.src!==t.src){this.setState({status:t.src?Status.LOADING:Status.PENDING})}}
t.prototype.componentDidUpdate=function r(t,e){if(this.state.status===Status.LOADING&&!this.img){this.createLoader()}if(e.status!==this.state.status){this.props.onUpdate()}}
t.prototype.componentWillUnmount=function r(){this.destroyLoader()}
t.prototype.render=function r(){switch(this.state.status){case Status.LOADED:return this.renderImg()
case Status.FAILED:if(this.props.children){return this.props.children}break
default:if(this.props.preloader){return this.props.preloader()}}return null}
return t}(React.Component)
ImageLoader.propTypes={children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),PropTypes.node]),imgProps:PropTypes.any,onError:PropTypes.func,onLoad:PropTypes.func,onUpdate:PropTypes.func,preloader:PropTypes.func,src:PropTypes.string}
module.exports=ImageLoader

});
KAdefine("javascript/perseus-all-package/components/info-tip.jsx", function(require, module, exports) {
var React=require("react")
var ReactComponentsInfoTip=require("../../react-components-package/info-tip.jsx")
var InfoTip=function(e){babelHelpers.inherits(t,e)
function t(){var n,r,o
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,s=Array(a),i=0;i<a;i++){s[i]=arguments[i]}return o=(n=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.state={didMount:false},n),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.componentDidMount=function e(){this.setState({didMount:true})}
t.prototype.render=function e(){if(this.state.didMount){return React.createElement(ReactComponentsInfoTip,this.props)}else{return React.createElement("div",null)}}
return t}(React.Component)
module.exports=InfoTip

});
KAdefine("javascript/perseus-all-package/components/inline-icon.jsx", function(require, module, exports) {
var PropTypes=require("prop-types")
var React=require("react")
var InlineIcon=function e(t){var r=t.path,i=t.width,n=t.height,l=t.style,p=l===undefined?{}:l,s=t.title
return React.createElement("svg",{role:"img","aria-hidden":!s,style:babelHelpers.extends({verticalAlign:"middle"},p),width:i/n+"em",height:"1em",viewBox:"0 0 "+i+" "+n},!!s&&React.createElement("title",null,s),React.createElement("path",{d:r,fill:"currentColor"}))}
InlineIcon.propTypes={path:PropTypes.string.isRequired,height:PropTypes.number.isRequired,width:PropTypes.number.isRequired,style:PropTypes.object,title:PropTypes.string}
module.exports=InlineIcon

});
KAdefine("javascript/perseus-all-package/components/input-with-examples.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var Tooltip=require("../../react-components-package/tooltip.jsx")
var _=require("underscore")
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var MathInput=require("./math-input.jsx")
var Renderer=require("../renderer.jsx")
var TextInput=require("./text-input.jsx")
var MathOutput=require("../components/math-output.jsx")
var Gorgon=require("../gorgon/gorgon.js")
var _require=require("../gorgon/proptypes.js"),linterContextProps=_require.linterContextProps,linterContextDefault=_require.linterContextDefault
var captureScratchpadTouchStart=require("../util.js").captureScratchpadTouchStart
var MATH="math"
var TEXT="text"
var TEX="tex"
var InputWithExamples=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,s
babelHelpers.classCallCheck(this,t)
for(var p=arguments.length,n=Array(p),a=0;a<p;a++){n[a]=arguments[a]}return s=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),o),o.state={focused:false,showExamples:false},o._getUniqueId=function(){return"input-with-examples-"+btoa(o.props.id).replace(/=/g,"")},o._getInputClassName=function(){if(o.props.type===TEX){return o.props.className}var e=ApiClassNames.INPUT+" "+ApiClassNames.INTERACTIVE
if(o.state.focused){e+=" "+ApiClassNames.FOCUSED}if(o.props.className){e+=" "+o.props.className}return e},o._getPropsForInputType=function(){var e={"aria-describedby":o._getUniqueId(),ref:"input",className:o._getInputClassName(),labelText:o.props.labelText,value:o.props.value,onFocus:o._handleFocus,onBlur:o._handleBlur,disabled:o.props.disabled}
if(o.props.type===TEX){return e}_.extend(e,{onChange:o.props.onChange,onTouchStart:captureScratchpadTouchStart})
if(o.props.type===MATH){return _.extend({buttonSet:o.props.buttonSet,buttonsVisible:o.props.buttonsVisible,convertDotToTimes:o.props.convertDotToTimes},e)}else if(o.props.type===TEXT){return _.extend({autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false"},e)}},o._getComponentForInputType=function(){switch(o.props.type){case TEX:return MathOutput
case MATH:return MathInput
case TEXT:return TextInput
default:return null}},o._renderInput=function(){var e=o._getPropsForInputType()
var t=o._getComponentForInputType()
return React.createElement(t,e)},o._handleFocus=function(){o.props.onFocus()
o.setState({focused:true,showExamples:true})},o.show=function(){o.setState({showExamples:true})},o.hide=function(){o.setState({showExamples:false})},o._handleBlur=function(){o.props.onBlur()
o.setState({focused:false,showExamples:false})},o.focus=function(){o.refs.input.focus()},o.blur=function(){o.refs.input.blur()},o.handleChange=function(e){o.props.onChange(e.target.value)},r),babelHelpers.possibleConstructorReturn(o,s)}t.prototype.render=function e(){var t=this._renderInput()
if(this.props.type===TEX){return t}var r=_.map(this.props.examples,function(e){return"- "+e}).join("\n")
var o=this.props.shouldShowExamples&&this.state.showExamples
return React.createElement(Tooltip,{ref:"tooltip",className:"perseus-formats-tooltip preview-measure",horizontalPosition:"left",horizontalAlign:"left",verticalPosition:"bottom",arrowSize:10,borderColor:"#ccc",show:o},t,React.createElement("div",{id:this._getUniqueId()},React.createElement(Renderer,{content:r,linterContext:Gorgon.pushContextStack(this.props.linterContext,"input-with-examples")})))}
return t}(React.Component)
InputWithExamples.propTypes={type:PropTypes.oneOf([MATH,TEXT,TEX]),value:PropTypes.string,onChange:PropTypes.func.isRequired,className:PropTypes.string,examples:PropTypes.arrayOf(PropTypes.string).isRequired,shouldShowExamples:PropTypes.bool,convertDotToTimes:PropTypes.bool,buttonSet:PropTypes.string,buttonsVisible:PropTypes.oneOf(["always","never","focused"]),labelText:PropTypes.string,onFocus:PropTypes.func,onBlur:PropTypes.func,disabled:PropTypes.bool,id:PropTypes.string.isRequired,linterContext:linterContextProps}
InputWithExamples.defaultProps={type:TEXT,shouldShowExamples:true,onFocus:function e(){},onBlur:function e(){},disabled:false,linterContext:linterContextDefault}
module.exports=InputWithExamples

});
KAdefine("javascript/perseus-all-package/components/lint.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var constants=require("../styles/constants.js")
var InlineIcon=require("./inline-icon.jsx")
var absoluteLinks=require("../../shared-package/absolute-links.js")
var exclamationIcon={path:"M6 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1z",height:12,width:12}
var Lint=function(e){babelHelpers.inherits(t,e)
function t(){var o,r,n
babelHelpers.classCallCheck(this,t)
for(var i=arguments.length,s=Array(i),a=0;a<i;a++){s[a]=arguments[a]}return n=(o=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),r),r.state={tooltipAbove:true},r.getPosition=function(){var e=ReactDOM.findDOMNode(r).getBoundingClientRect()
r.setState({tooltipAbove:e.top>100})},r.renderLink=function(e){var t=r.state.tooltipAbove
var o=void 0
var n=void 0
var i=void 0
if(r.props.severity===1){o=styles.indicatorError
n="Error"
i=styles.publishBlockingError}else if(r.props.severity===2){o=styles.indicatorWarning
n="Warning"
i=styles.warning}else{o=styles.indicatorGuideline
n="Recommendation"
i=styles.warning}return React.createElement("a",{href:absoluteLinks.safeLinkTo("https://khanacademy.org/r/linter-rules#"+r.props.ruleName),target:"lint-help-window",className:css(e)},React.createElement("span",{className:css(styles.indicator,o)},r.props.severity===1&&React.createElement(InlineIcon,exclamationIcon)),React.createElement("div",{className:css(styles.tooltip,t&&styles.tooltipAbove)},r.props.message.split("\n\n").map(function(e,t){return React.createElement("p",{key:t,className:css(styles.tooltipParagraph)},React.createElement("span",{className:css(i)},n,":"," "),e)}),React.createElement("div",{className:css(styles.tail,t&&styles.tailAbove)})))},o),babelHelpers.possibleConstructorReturn(r,n)}t.prototype.componentDidMount=function e(){this._positionTimeout=window.setTimeout(this.getPosition)}
t.prototype.componentWillUnmount=function e(){window.clearTimeout(this._positionTimeout)}
t.prototype.render=function e(){var t=this.props,o=t.children,r=t.inline,n=t.blockHighlight,i=t.insideTable
if(i){if(r){return React.createElement("span",{"data-lint-inside-table":"true"},o)}else{return React.createElement("div",{"data-lint-inside-table":"true"},o)}}else{if(n){return React.createElement("span",{className:css(styles.lintContainer,styles.lintContainerBlock)},this.renderLink(styles.radioWidgetHoverTarget),React.createElement("span",null,o))}else if(r){return React.createElement("span",{className:css(styles.lintContainer)},this.renderLink(styles.inlineHoverTarget),React.createElement("span",null,o))}else{return React.createElement("div",{className:css(styles.lintContainer)},this.renderLink(styles.hoverTarget),React.createElement("div",null,o))}}}
return t}(React.Component)
Lint.propTypes={children:PropTypes.node,inline:PropTypes.bool,message:PropTypes.string.isRequired,ruleName:PropTypes.string.isRequired,insideTable:PropTypes.bool.isRequired,blockHighlight:PropTypes.bool,severity:PropTypes.number}
var styles=StyleSheet.create({lintContainer:{position:"relative"},lintContainerBlock:{display:"block"},hoverTarget:{position:"absolute",top:0,right:-40,display:"block",width:24,height:24,":hover > span":{backgroundColor:constants.warningColorHover},":hover div":{display:"block"},":hover ~ div":{outline:"1px solid "+constants.warningColor},":hover ~ div div[data-lint-inside-table]":{outline:"1px solid "+constants.warningColor},":hover ~ div span[data-lint-inside-table]":{backgroundColor:constants.warningColor,color:constants.white}},inlineHoverTarget:{float:"right",position:"relative",marginRight:-40,display:"block",width:24,height:24,":hover > span":{backgroundColor:constants.warningColorHover},":hover div":{display:"block"},":hover ~ span":{backgroundColor:constants.warningColor,color:constants.white}},radioWidgetHoverTarget:{position:"absolute",left:-40,display:"block",width:24,height:24,minWidth:264,":hover > span":{backgroundColor:constants.warningColorHover},":hover > div":{display:"block",padding:8,width:280},":hover > div > div":{left:8},":hover ~ span":{backgroundColor:constants.warningColor,color:constants.white}},indicator:{alignItems:"center",borderRadius:4,color:"white",display:"flex",fontSize:12,height:8,justifyContent:"center",margin:8,width:8},indicatorError:{backgroundColor:"#be2612",borderRadius:8,height:16,width:16},indicatorWarning:{backgroundColor:"#f86700"},indicatorGuideline:{backgroundColor:"#ffbe26"},tooltip:{position:"absolute",right:-12,display:"none",zIndex:"1000",color:constants.white,backgroundColor:constants.gray17,opacity:"0.9",fontFamily:constants.baseFontFamily,fontSize:"12px",lineHeight:"15px",width:"320px",borderRadius:"4px"},tooltipAbove:{bottom:32},tail:{position:"absolute",top:-12,right:16,width:0,height:0,borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderBottom:"12px solid "+constants.gray17},tailAbove:{bottom:-12,borderBottom:"none",borderTop:"12px solid "+constants.gray17,top:"auto"},tooltipParagraph:{margin:12},warning:{color:constants.warningColor,fontFamily:constants.boldFontFamily},publishBlockingError:{color:constants.publishBlockingErrorColor}})
module.exports=Lint

});
KAdefine("javascript/perseus-all-package/components/math-input.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var $=require("jquery")
var MathQuill=require("mathquill")
var TexButtons=require("./tex-buttons.jsx")
var PT=PropTypes
var MathInput=function(e){babelHelpers.inherits(t,e)
function t(){var s,o,n
babelHelpers.classCallCheck(this,t)
for(var r=arguments.length,a=Array(r),i=0;i<r;i++){a[i]=arguments[i]}return n=(s=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),o),o.state={focused:false},o.handleFocus=function(){o.setState({focused:true})},o.handleMouseDown=function(e){var t=ReactDOM.findDOMNode(o).contains(e.target)
o.mouseDown=t
if(!t){o.setState({focused:false})}},o.handleMouseUp=function(){if(o.mouseDown){o.focus()}o.mouseDown=false},o.handleBlur=function(){if(!o.mouseDown){o.setState({focused:false})}},o._shouldShowButtons=function(){if(o.props.buttonsVisible==="always"){return true}else if(o.props.buttonsVisible==="never"){return false}else{return o.state.focused}},o.insert=function(e){var t=o.mathField()
if(_(e).isFunction()){e(t)}else if(e[0]==="\\"){t.cmd(e).focus()}else{t.write(e).focus()}t.focus()},o.mathField=function(e){var t=MathQuill.getInterface(2)
return t.MathField(ReactDOM.findDOMNode(o.refs.mathinput),e)},o.focus=function(){o.mathField().focus()
o.setState({focused:true})},o.blur=function(){o.mathField().blur()
o.setState({focused:false})},s),babelHelpers.possibleConstructorReturn(o,n)}t.prototype.render=function e(){var t=classNames({"perseus-math-input":true,"mq-editable-field":true,"mq-math-mode":true})
if(this.props.className){t=t+" "+this.props.className}var s=null
if(this._shouldShowButtons()){s=React.createElement(TexButtons,{sets:this.props.buttonSets,className:"math-input-buttons absolute",convertDotToTimes:this.props.convertDotToTimes,onInsert:this.insert})}return React.createElement("div",{style:{display:"inline-block"}},React.createElement("div",{style:{display:"inline-block"}},React.createElement("span",{className:t,ref:"mathinput","aria-label":this.props.labelText,onFocus:this.handleFocus,onBlur:this.handleBlur})),React.createElement("div",{style:{position:"relative"}},s))}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("mousedown",this.handleMouseDown)
window.removeEventListener("mouseup",this.handleMouseUp)}
t.prototype.componentDidMount=function e(){var t=this
window.addEventListener("mousedown",this.handleMouseDown)
window.addEventListener("mouseup",this.handleMouseUp)
var s=false
this.mathField({autoCommands:"pi theta phi sqrt nthroot",charsThatBreakOutOfSupSub:"+-*/=<>≠≤≥",supSubsRequireOperand:true,spaceBehavesLikeTab:true,handlers:{edited:function e(o){var n=o.latex()
n=n.replace(/<>/g,"\\ne")
if(t.props.convertDotToTimes){n=n.replace(/\\cdot/g,"\\times")
var r=o.__controller.cursor[MathQuill.L]
if(r&&r.ctrlSeq==="\\cdot "){o.__controller.backspace()
o.cmd("\\times")}}else{n=n.replace(/\\times/g,"\\cdot")}if(s&&t.props.value!==n){t.props.onChange(n)}},enter:function e(){$(ReactDOM.findDOMNode(t.refs.mathinput)).submit()},upOutOf:function e(t){t.typedText("^")}}})
this.mathField().latex(this.props.value)
s=true}
t.prototype.componentDidUpdate=function e(){if(!_.isEqual(this.mathField().latex(),this.props.value)){this.mathField().latex(this.props.value)}}
return t}(React.Component)
MathInput.propTypes={value:PT.string,onChange:PT.func.isRequired,convertDotToTimes:PT.bool,buttonsVisible:PT.oneOf(["always","never","focused"]),buttonSets:TexButtons.buttonSetsType.isRequired,labelText:PropTypes.string,onFocus:PT.func,onBlur:PT.func}
MathInput.defaultProps={value:"",convertDotToTimes:false,buttonsVisible:"focused"}
module.exports=MathInput

});
KAdefine("javascript/perseus-all-package/components/math-output.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var TeX=require("../../react-components-package/tex.jsx")
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var ModifyTex=require("../tex-wrangler.js").modifyTex
var $=require("jquery")
var MathOutput=function(e){babelHelpers.inherits(t,e)
function t(){var r,s,a
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,u=Array(n),o=0;o<n;o++){u[o]=arguments[o]}return a=(r=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(u))),s),s.state={focused:false,selectorNamespace:_.uniqueId("math-output")},s._getInputClassName=function(){var e="math-output "+ApiClassNames.INPUT+" "+ApiClassNames.INTERACTIVE
if(s.state.focused){e+=" "+ApiClassNames.FOCUSED}if(s.props.className){e+=" "+s.props.className}return e},s._getDisplayValue=function(e){var t=void 0
if(e!=null){t=""+e}else{t=""}return ModifyTex(t)},s.getValue=function(){return s.props.value},s.focus=function(){if(!s.state.focused){s.props.onFocus()
s._bindBlurHandler()
s.setState({focused:true})}},s.blur=function(){if(s.state.focused){s.props.onBlur()
s._unbindBlurHandler()
s.setState({focused:false})}},s._bindBlurHandler=function(){$(document).bind("vclick."+s.state.selectorNamespace,function(e){var t=$(e.target).closest(ReactDOM.findDOMNode(s))
if(!t.length){s.blur()}})},s._unbindBlurHandler=function(){$(document).unbind("."+s.state.selectorNamespace)},r),babelHelpers.possibleConstructorReturn(s,a)}t.prototype.render=function e(){var t={textAlign:"center"}
return React.createElement("span",{ref:"input",className:this._getInputClassName(),"aria-label":this.props.labelText,onMouseDown:this.focus,onTouchStart:this.focus},React.createElement("div",{style:t},React.createElement(TeX,null,this._getDisplayValue(this.props.value))))}
t.prototype.componentWillUnmount=function e(){this._unbindBlurHandler()}
return t}(React.Component)
MathOutput.propTypes={value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),className:PropTypes.string,labelText:PropTypes.string,onFocus:PropTypes.func,onBlur:PropTypes.func}
MathOutput.defaultProps={value:"",onFocus:function e(){},onBlur:function e(){}}
module.exports=MathOutput

});
KAdefine("javascript/perseus-all-package/components/number-input.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var $=require("jquery")
var firstNumericalParse=require("../util.js").firstNumericalParse
var captureScratchpadTouchStart=require("../util.js").captureScratchpadTouchStart
var knumber=require("kmath").number
var KhanMath=require("../util/math.js")
var toNumericString=KhanMath.toNumericString
var getNumericFormat=KhanMath.getNumericFormat
var NumberInput=function(e){babelHelpers.inherits(r,e)
function r(){var t,n,a
babelHelpers.classCallCheck(this,r)
for(var o=arguments.length,u=Array(o),s=0;s<o;s++){u[s]=arguments[s]}return a=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(u))),n),n.state={format:n.props.format},n.getValue=function(){return n.parseInputValue(ReactDOM.findDOMNode(n.refs.input).value)},n.getStringValue=function(){return ReactDOM.findDOMNode(n.refs.input).value.toString()},n.parseInputValue=function(e){if(e===""){var r=n.props.placeholder
return _.isFinite(r)?+r:null}else{var t=firstNumericalParse(e)
return _.isFinite(t)?t:n.props.value}},n.focus=function(){ReactDOM.findDOMNode(n.refs.input).focus()
n._handleFocus()},n.blur=function(){ReactDOM.findDOMNode(n.refs.input).blur()
n._handleBlur()},n.setSelectionRange=function(e,r){ReactDOM.findDOMNode(n).setSelectionRange(e,r)},n.getSelectionStart=function(){return ReactDOM.findDOMNode(n).selectionStart},n.getSelectionEnd=function(){return ReactDOM.findDOMNode(n).selectionEnd},n._checkValidity=function(e){if(e==null){return true}var r=firstNumericalParse(e)
var t=n.props.checkValidity
return _.isFinite(r)&&t(r)},n._handleChange=function(e){var r=e.target.value
var t=n.parseInputValue(r)
var a=getNumericFormat(r)
n.props.onChange(t)
if(a){n.props.onFormatChange(t,a)
n.setState({format:a})}},n._handleFocus=function(){if(n.props.onFocus){n.props.onFocus()}},n._handleBlur=function(e){if(e&&e.type==="keypress"&&e.keyCode!==13){return}n._setValue(n.props.value,n.state.format)
if(n.props.onBlur){n.props.onBlur()}},n._onKeyDown=function(e){if(n.props.onKeyDown){n.props.onKeyDown(e)}if(!n.props.useArrowKeys||!_.contains(["ArrowUp","ArrowDown"],e.key)){return}var r=n.getValue()
if(r!==Math.floor(r)){return}if(e.key==="ArrowUp"){r=r+1}else if(e.key==="ArrowDown"){r=r-1}if(n._checkValidity(r)){n.props.onChange(r)}},n._setValue=function(e,r){$(ReactDOM.findDOMNode(n.refs.input)).val(toNumericString(e,r))},t),babelHelpers.possibleConstructorReturn(n,a)}r.prototype.render=function e(){var r=classNames({"number-input":true,"invalid-input":!this._checkValidity(this.props.value),mini:this.props.size==="mini",small:this.props.size==="small",normal:this.props.size==="normal"})
if(this.props.className!=null){r=r+" "+this.props.className}var t=this.props,n=t.onFormatChange,a=t.checkValidity,o=t.useArrowKeys,u=babelHelpers.objectWithoutProperties(t,["onFormatChange","checkValidity","useArrowKeys"])
return React.createElement("input",babelHelpers.extends({},u,{className:r,type:"text",ref:"input",onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur,onKeyPress:this._handleBlur,onKeyDown:this._onKeyDown,onTouchStart:captureScratchpadTouchStart,defaultValue:toNumericString(this.props.value,this.state.format),value:undefined}))}
r.prototype.componentDidUpdate=function e(r){if(!knumber.equal(this.getValue(),this.props.value)){this._setValue(this.props.value,this.state.format)}}
return r}(React.Component)
NumberInput.propTypes={value:PropTypes.number,format:PropTypes.string,placeholder:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),onChange:PropTypes.func.isRequired,onFormatChange:PropTypes.func,checkValidity:PropTypes.func,size:PropTypes.string,label:PropTypes.oneOf(["put your labels outside your inputs!"])}
NumberInput.defaultProps={value:null,placeholder:null,format:null,onFormatChange:function e(){return null},checkValidity:function e(){return true},useArrowKeys:false}
module.exports=NumberInput

});
KAdefine("javascript/perseus-all-package/components/possible-answers.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var i18n=require("../../shared-package/i18n.js")
var PossibleAnswers=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=_.uniq(this.props.answers)
var s=_.map(r,function(e){return React.createElement("dd",{key:e},e)})
return React.createElement("dl",{className:"perseus-possible-answers"},React.createElement("dt",null,i18n.doNotTranslate("Correct Answer")),s)}
return r}(React.Component)
PossibleAnswers.propTypes={answers:PropTypes.arrayOf(PropTypes.string)}
module.exports=PossibleAnswers

});
KAdefine("javascript/perseus-all-package/components/prop-check-box.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var _=require("underscore")
var PropCheckBox=createReactClass({displayName:"PropCheckBox",propTypes:{labelAlignment:PropTypes.oneOf(["left","right"])},DEFAULT_PROPS:{label:null,onChange:null,labelAlignment:"left"},getDefaultProps:function e(){return this.DEFAULT_PROPS},propName:function e(){var e=_.find(_.keys(this.props),function(e){return!_.has(this.DEFAULT_PROPS,e)},this)
if(!e){throw new Error("Attempted to create a PropCheckBox with no prop!")}return e},_labelAlignLeft:function e(){return this.props.labelAlignment==="left"},render:function e(){var r=this.propName()
return React.createElement("label",null,this._labelAlignLeft()&&this.props.label,React.createElement("input",{type:"checkbox",checked:this.props[r],onChange:this.toggle}),!this._labelAlignLeft()&&this.props.label)},toggle:function e(){var r=this.propName()
var t={}
t[r]=!this.props[r]
this.props.onChange(t)}})
module.exports=PropCheckBox

});
KAdefine("javascript/perseus-all-package/components/range-input.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var NumberInput=require("../components/number-input.jsx")
var truth=function e(){return true}
var RangeInput=function(e){babelHelpers.inherits(r,e)
function r(){var n,t,a
babelHelpers.classCallCheck(this,r)
for(var p=arguments.length,s=Array(p),o=0;o<p;o++){s[o]=arguments[o]}return a=(n=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),t),t.onChange=function(e,r){var n=t.props.value
if(e===0){t.props.onChange([r,n[1]])}else{t.props.onChange([n[0],r])}},n),babelHelpers.possibleConstructorReturn(t,a)}r.prototype.render=function e(){var r=this.props.value
var n=this.props.checkValidity||truth
return React.createElement("div",{className:"range-input"},React.createElement(NumberInput,babelHelpers.extends({},this.props,{value:r[0],checkValidity:function e(t){return n([t,r[1]])},onChange:this.onChange.bind(this,0),placeholder:this.props.placeholder[0]})),React.createElement(NumberInput,babelHelpers.extends({},this.props,{value:r[1],checkValidity:function e(t){return n([r[0],t])},onChange:this.onChange.bind(this,1),placeholder:this.props.placeholder[1]})))}
return r}(React.Component)
RangeInput.propTypes={value:PropTypes.array.isRequired,onChange:PropTypes.func.isRequired,placeholder:PropTypes.array,checkValidity:PropTypes.func}
RangeInput.defaultProps={placeholder:[null,null]}
module.exports=RangeInput

});
KAdefine("javascript/perseus-all-package/components/simple-keypad-input.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var KeypadInput=require("math-input").components.KeypadInput
var KeypadTypes=require("math-input").consts.KeypadTypes
var keypadElementPropType=require("math-input").propTypes.keypadElementPropType
var SimpleKeypadInput=createReactClass({displayName:"SimpleKeypadInput",propTypes:{keypadElement:keypadElementPropType,onFocus:PropTypes.func,value:PropTypes.oneOfType([PropTypes.string,PropTypes.number])},componentDidMount:function e(){this._isMounted=true},componentWillUnmount:function e(){this._isMounted=false},focus:function e(){this.refs.input.focus()},blur:function e(){this.refs.input.blur()},getValue:function e(){return this.props.value},render:function e(){var p=this
var t=this.props,n=t.keypadElement,r=t.onFocus,u=t.value,a=babelHelpers.objectWithoutProperties(t,["keypadElement","onFocus","value"])
return React.createElement(KeypadInput,babelHelpers.extends({ref:"input",keypadElement:n,onFocus:function e(){if(n){n.configure({keypadType:KeypadTypes.FRACTION},function(){if(p._isMounted){r&&r()}})}else{r&&r()}},value:u==null?"":""+u},a))}})
module.exports=SimpleKeypadInput

});
KAdefine("javascript/perseus-all-package/components/sortable.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var _=require("underscore")
var $=require("jquery")
var Util=require("../util.js")
var Renderer=require("../renderer.jsx")
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var Gorgon=require("../gorgon/gorgon.js")
var _require2=require("../gorgon/proptypes.js"),linterContextProps=_require2.linterContextProps,linterContextDefault=_require2.linterContextDefault
var HORIZONTAL="horizontal"
var VERTICAL="vertical"
var STATIC="static"
var DRAGGING="dragging"
var ANIMATING="animating"
var DISABLED="disabled"
var Placeholder=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this.props.layout
var o=css(styles.card,styles.placeholder,t===HORIZONTAL&&styles.horizontalCard)
var s={width:this.props.width,height:this.props.height}
if(this.props.margin!=null){s.margin=this.props.margin}return React.createElement("li",{className:o,style:s})}
return t}(React.Component)
Placeholder.propTypes={layout:PropTypes.oneOf([HORIZONTAL,VERTICAL]),width:PropTypes.number.isRequired,height:PropTypes.number.isRequired}
var Draggable=function(e){babelHelpers.inherits(t,e)
function t(){var o,s,i
babelHelpers.classCallCheck(this,t)
for(var r=arguments.length,n=Array(r),a=0;a<r;a++){n[a]=arguments[a]}return i=(o=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),s),s.state={startPosition:{left:0,top:0},startMouse:{left:0,top:0},mouse:{left:0,top:0}},s.getCurrentPosition=function(){return{left:s.state.startPosition.left+s.state.mouse.left-s.state.startMouse.left,top:s.state.startPosition.top+s.state.mouse.top-s.state.startMouse.top}},s.bindMouseMoveUp=function(){s.isMouseMoveUpBound=true
$(document).on("mousemove",s.onMouseMove)
$(document).on("mouseup",s.onMouseUp)},s.unbindMouseMoveUp=function(){s.isMouseMoveUpBound=false
$(document).off("mousemove",s.onMouseMove)
$(document).off("mouseup",s.onMouseUp)},s.onMouseDown=function(e){if(s.props.type!==STATIC){return}if(!(e.button===0||e.touches!=null&&e.touches.length===1)){return}e.preventDefault()
var t=Util.extractPointerLocation(e)
if(t){s.setState({startPosition:$(ReactDOM.findDOMNode(s)).position(),startMouse:t,mouse:t,dragging:true},function(){this.bindMouseMoveUp()
this.props.onMouseDown()})}},s.onMouseMove=function(e){var t=s.props.type!==DRAGGING||!s.state.dragging
if(t){return}e.preventDefault()
var o=Util.extractPointerLocation(e)
if(o){s.setState({mouse:o},s.props.onMouseMove)}},s.onMouseUp=function(e){var t=s.props.type!==DRAGGING||!s.state.dragging
if(t){return}e.preventDefault()
var o=Util.extractPointerLocation(e)
if(o){s.setState({dragging:false})
s.unbindMouseMoveUp()
s.props.onMouseUp()}},o),babelHelpers.possibleConstructorReturn(s,i)}t.prototype.componentDidMount=function e(){this.mouseMoveUpBound=false
document.addEventListener("touchmove",this.onMouseMove,Util.supportsPassiveEvents()?{passive:false}:false)}
t.prototype.componentWillUnmount=function e(){if(this.isMouseMoveUpBound){this.unbindMouseMoveUp()}document.removeEventListener("touchmove",this.onMouseMove)}
t.prototype.render=function e(){var t=this.props,o=t.includePadding,s=t.layout,i=t.type
var r=css(styles.card,styles.draggable,s===HORIZONTAL&&styles.horizontalCard,s===VERTICAL&&styles.verticalCard,i===DRAGGING&&styles.dragging,i===ANIMATING&&styles.animating,i===DISABLED&&styles.disabled,!o&&styles.unpaddedCard)+" "+ApiClassNames.INTERACTIVE+" perseus-sortable-draggable"
if(!o){r+=" perseus-sortable-draggable-unpadded"}var n={position:"static"}
if(this.props.type===DRAGGING||this.props.type===ANIMATING){_.extend(n,{position:"absolute"},this.getCurrentPosition())}if(this.props.width){n.width=this.props.width+1}if(this.props.height){n.height=this.props.height}if(this.props.margin!=null){n.margin=this.props.margin}return React.createElement("li",{className:r,style:n,onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown,onTouchMove:this.onMouseMove,onTouchEnd:this.onMouseUp,onTouchCancel:this.onMouseUp},React.createElement(Renderer,{content:this.props.content,linterContext:Gorgon.pushContextStack(this.props.linterContext,"draggable"),onRender:this.props.onRender}))}
t.prototype.componentDidUpdate=function e(t){if(this.props.type===t.type){return}if(this.props.type===ANIMATING){var o=this.getCurrentPosition()
var s=15*Math.sqrt(Math.sqrt(Math.pow(this.props.endPosition.left-o.left,2)+Math.pow(this.props.endPosition.top-o.top,2)))
$(ReactDOM.findDOMNode(this)).animate(this.props.endPosition,{duration:Math.max(s,1),complete:this.props.onAnimationEnd})}else if(this.props.type===STATIC){$(ReactDOM.findDOMNode(this)).finish()}}
return t}(React.Component)
Draggable.propTypes={content:PropTypes.string.isRequired,endPosition:PropTypes.object.isRequired,includePadding:PropTypes.bool,layout:PropTypes.oneOf([HORIZONTAL,VERTICAL]),onAnimationEnd:PropTypes.func.isRequired,onMouseDown:PropTypes.func.isRequired,onMouseMove:PropTypes.func.isRequired,onMouseUp:PropTypes.func.isRequired,onRender:PropTypes.func.isRequired,type:PropTypes.oneOf([STATIC,DRAGGING,ANIMATING,DISABLED]),linterContext:linterContextProps}
Draggable.defaultProps={includePadding:true,type:STATIC,linterContext:linterContextDefault}
var Sortable=createReactClass({displayName:"Sortable",propTypes:{constraints:PropTypes.object,disabled:PropTypes.bool,layout:PropTypes.oneOf([HORIZONTAL,VERTICAL]),margin:PropTypes.number,onChange:PropTypes.func,onMeasure:PropTypes.func,options:PropTypes.array.isRequired,padding:PropTypes.bool,linterContext:linterContextProps},getDefaultProps:function e(){return{layout:HORIZONTAL,padding:true,disabled:false,constraints:{},onMeasure:function e(){},margin:5,onChange:function e(){},linterContext:linterContextDefault}},getInitialState:function e(){return{items:this.itemsFromProps(this.props)}},UNSAFE_componentWillReceiveProps:function e(t){var o=this.props
if(!_.isEqual(t.options,o.options)){this.setState({items:this.itemsFromProps(t)})}else if(t.layout!==o.layout||t.padding!==o.padding||t.disabled!==o.disabled||!_.isEqual(t.constraints,o.constraints)){this.setState({items:this.clearItemMeasurements(this.state.items)})}},componentDidUpdate:function e(){var t=this
if(this.state.items.length&&!this.state.items[0].width){setTimeout(function(){t.measureItems()},0)}},itemsFromProps:function e(t){var o=t.disabled?DISABLED:STATIC
return _.map(t.options,function(e,t){return{option:e,key:t,type:o,endPosition:{},width:0,height:0}})},clearItemMeasurements:function e(t){return _.map(t,function(e){return _.extend(e,{width:0,height:0})})},measureItems:function e(){var t=this
var o=_.clone(this.state.items)
var s=_.map(o,function(e){return $(ReactDOM.findDOMNode(this.refs[e.key]))},this)
var i=_.invoke(s,"outerWidth")
var r=_.invoke(s,"outerHeight")
var n=this.props.constraints
var a=this.props.layout
var p=void 0
if(n.width){p=_.max(i.concat(n.width))}else if(a===VERTICAL){p=_.max(i)}var u=void 0
if(n.height){u=_.max(r.concat(n.height))}else if(a===HORIZONTAL){u=_.max(r)}o=_.map(o,function(e,t){e.width=p||i[t]
e.height=u||r[t]
return e})
this.setState({items:o},function(){t.props.onMeasure({widths:i,heights:r})})},remeasureItems:_.debounce(function(){this.setState({items:this.clearItemMeasurements(this.state.items)})},20),render:function e(){var t=[]
var o=this.props.layout
var s=css(styles.sortable)+" perseus-sortable"
_.each(this.state.items,function(e,s,i){var r=s===i.length-1
var n=e.type===STATIC||e.type===DISABLED
var a=void 0
if(this.props.layout===HORIZONTAL){a="0 "+this.props.margin+"px 0 0"}else if(this.props.layout===VERTICAL){a="0 0 "+this.props.margin+"px 0"}t.push(React.createElement(Draggable,{content:e.option,key:e.key,type:e.type,ref:e.key,width:e.width,height:e.height,layout:o,includePadding:this.props.padding,margin:r&&n?0:a,endPosition:e.endPosition,linterContext:Gorgon.pushContextStack(this.props.linterContext,"sortable"),onRender:this.remeasureItems,onMouseDown:this.onMouseDown.bind(this,e.key),onMouseMove:this.onMouseMove.bind(this,e.key),onMouseUp:this.onMouseUp.bind(this,e.key),onTouchMove:this.onMouseMove.bind(this,e.key),onTouchEnd:this.onMouseUp.bind(this,e.key),onTouchCancel:this.onMouseUp.bind(this,e.key),onAnimationEnd:this.onAnimationEnd.bind(this,e.key)}))
if(e.type===DRAGGING||e.type===ANIMATING){t.push(React.createElement(Placeholder,{key:"placeholder_"+e.key,ref:"placeholder_"+e.key,width:e.width,height:e.height,layout:o,margin:r?0:a}))}},this)
return React.createElement("ul",{className:s},t)},onMouseDown:function e(t){var o=_.map(this.state.items,function(e){if(e.key===t){e.type=DRAGGING}return e})
this.setState({items:o})},onMouseMove:function e(t){var o=$(ReactDOM.findDOMNode(this.refs[t]))
var s=$(ReactDOM.findDOMNode(this))
var i=_.clone(this.state.items)
var r=_.findWhere(this.state.items,{key:t})
var n=this.props.margin
var a=_.indexOf(i,r)
var p=0
i.splice(a,1)
if(this.props.layout===HORIZONTAL){var u=o.offset().left-s.offset().left
var l=0
var d=void 0
_.each(i,function(e){d=e.width
if(u>l+d/2){p+=1}l+=d+n})}else{var h=o.offset().top-s.offset().top
var c=0
var f=void 0
_.each(i,function(e){f=e.height
if(h>c+f/2){p+=1}c+=f+n})}if(p!==a){i.splice(p,0,r)
this.setState({items:i})}},onMouseUp:function e(t){var o=_.map(this.state.items,function(e){if(e.key===t){e.type=ANIMATING
e.endPosition=$(ReactDOM.findDOMNode(this.refs["placeholder_"+t])).position()}return e},this)
this.setState({items:o})
this.props.onChange({})},onAnimationEnd:function e(t){var o=_.map(this.state.items,function(e){if(e.key===t){e.type=STATIC}return e})
this.setState({items:o})},getOptions:function e(){return _.pluck(this.state.items,"option")}})
var styles=StyleSheet.create({sortable:{boxSizing:"border-box",float:"left",padding:0,margin:0},card:{boxSizing:"border-box",background:"#fff",border:"1px solid #ddd",borderRadius:4,cursor:"pointer",minWidth:25,minHeight:44,padding:10,listStyleType:"none",userSelect:"none",touchAction:"none"},placeholder:{background:"#ddd",border:"1px solid #ccc"},draggable:{textAlign:"center"},horizontalCard:{float:"left",cursor:"ew-resize"},verticalCard:{maxWidth:"100%",cursor:"ns-resize"},unpaddedCard:{padding:0},dragging:{background:"#ffedcd",opacity:"0.8"},disabled:{backgroundColor:"inherit",border:"1px solid transparent",cursor:"default"}})
module.exports=Sortable

});
KAdefine("javascript/perseus-all-package/components/stub-tag-editor.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var TextListEditor=require("./text-list-editor.jsx")
var EMPTY_ARRAY=[]
var StubTagEditor=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){return React.createElement("div",null,this.props.showTitle&&React.createElement("div",{style:{fontSize:14}},"Tags:"),React.createElement(TextListEditor,{options:this.props.value||EMPTY_ARRAY,layout:"vertical",onChange:this.props.onChange}))}
return t}(React.Component)
StubTagEditor.propTypes={value:PropTypes.arrayOf(PropTypes.string),onChange:PropTypes.func.isRequired,showTitle:PropTypes.bool.isRequired}
StubTagEditor.defaultProps={value:EMPTY_ARRAY,showTitle:true}
module.exports=StubTagEditor

});
KAdefine("javascript/perseus-all-package/components/svg-image.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var $=require("jquery")
var _=require("underscore")
var KA=require("../../shared-package/ka.js")
var FixedToResponsive=require("../components/fixed-to-responsive.jsx")
var Graphie=require("../components/graphie.jsx")
var ImageLoader=require("../components/image-loader.jsx")
var _require=require("../jipt-hack.jsx"),maybeUnescape=_require.maybeUnescape
var Util=require("../util.js")
var Zoom=require("../zoom.js")
var ZOOMABLE_THRESHOLD=700
var labelDataCache={}
var doJSONP=function e(a,t){t=babelHelpers.extends({callbackName:"callback",success:$.noop,error:$.noop},t)
var s=document.createElement("script")
s.setAttribute("async","")
s.setAttribute("src",a)
function r(){document.head.removeChild(s)
delete window[t.callbackName]}window[t.callbackName]=function(){r()
t.success.apply(null,arguments)}
s.addEventListener("error",function(){r()
t.error.apply(null,arguments)})
document.head.appendChild(s)}
var svgLabelsRegex=/^web\+graphie\:/
var hashRegex=/\/([^\/]+)$/
function isLabeledSVG(e){return svgLabelsRegex.test(e)}function isImageProbablyPhotograph(e){return/\.(jpg|jpeg)$/i.test(e)}function getBaseUrl(e){var a=window.location.protocol==="http:"?"http:":"https:"
return e.replace(svgLabelsRegex,a)}function getSvgUrl(e){return getBaseUrl(e)+".svg"}function getDataUrl(e){return getBaseUrl(e)+"-data.json"}function shouldUseLocalizedData(){return typeof KA!=="undefined"&&KA.language!=="en"}function shouldRenderJipt(){return typeof KA!=="undefined"&&KA.language==="en-pt"}var jiptLabels=[]
if(shouldRenderJipt()){if(!KA.jipt_dom_insert_checks){KA.jipt_dom_insert_checks=[]}KA.jipt_dom_insert_checks.push(function(e,a,t){var s=$(a).data("jipt-label-index")
if(a&&typeof s!=="undefined"){var r=jiptLabels[s],i=r.label,o=r.useMath
i.text("")
e=maybeUnescape(e)
if(o){var n=/^\$(.*)\$$/
var l=e.match(n)
var p=l?l[1]:"\\color{red}{\\text{Invalid Math}}"
i.processMath(p,true)}else{i.processText(e)}return false}return e})}var splitHashRegex=/\/(?=[^\/]+$)/
function getLocalizedDataUrl(e){if(typeof KA!=="undefined"){var a=getBaseUrl(e).split(splitHashRegex),t=a[0],s=a[1]
return t+"/"+KA.language+"/"+s+"-data.json"}else{return getDataUrl(e)}}function getUrlHash(e){var a=e.match(hashRegex)
return a&&a[1]}function defaultPreloader(){return React.createElement("span",{style:{background:"url(/images/spinner.gif) no-repeat",backgroundPosition:"center",width:"100%",height:"100%",position:"absolute",minWidth:"20px"}})}var SvgImage=createReactClass({displayName:"SvgImage",propTypes:{allowFullBleed:PropTypes.bool,alt:PropTypes.string,constrainHeight:PropTypes.bool,extraGraphie:PropTypes.shape({box:PropTypes.array.isRequired,range:PropTypes.array.isRequired,labels:PropTypes.array.isRequired}),height:PropTypes.number,onUpdate:PropTypes.func,preloader:PropTypes.func,responsive:PropTypes.bool,scale:PropTypes.number,src:PropTypes.string.isRequired,title:PropTypes.string,trackInteraction:PropTypes.func,width:PropTypes.number,zoomToFullSizeOnMobile:PropTypes.bool},statics:{getRealImageUrl:function e(a){if(isLabeledSVG(a)){return getSvgUrl(a)}else{return a}}},getDefaultProps:function e(){return{constrainHeight:false,onUpdate:function e(){},responsive:true,src:"",scale:1,zoomToFullSizeOnMobile:false}},getInitialState:function e(){return{imageLoaded:false,imageDimensions:null,dataLoaded:false,labelDataIsLocalized:false,labels:[],range:[[0,0],[0,0]]}},componentDidMount:function e(){this._isMounted=true
if(isLabeledSVG(this.props.src)){this.loadResources()}},UNSAFE_componentWillReceiveProps:function e(a){if(this.props.src!==a.src){this.setState({imageLoaded:false,dataLoaded:false})}},shouldComponentUpdate:function e(a,t){if(!_.isEqual(this.props,a)){return true}if(!isLabeledSVG(a.src)){return false}var s=this.isLoadedInState(this.state)
var r=this.isLoadedInState(t)
return s!==r},componentDidUpdate:function e(){if(isLabeledSVG(this.props.src)&&!this.isLoadedInState(this.state)){this.loadResources()}},componentWillUnmount:function e(){this._isMounted=false},isLoadedInState:function e(a){return a.imageLoaded&&a.dataLoaded},loadResources:function e(){var a=this
var t=getUrlHash(this.props.src)
if(labelDataCache[t]){if(labelDataCache[t].loaded){var s=labelDataCache[t],r=s.data,i=s.localized
this.onDataLoaded(r,i)}else{labelDataCache[t].dataCallbacks.push(this.onDataLoaded)}}else{var o={loaded:false,dataCallbacks:[this.onDataLoaded],data:null,localized:shouldUseLocalizedData()}
labelDataCache[t]=o
var n=function e(a,s){doJSONP(a,{callbackName:"svgData"+t,success:function e(a){o.data=a
o.loaded=true
_.each(o.dataCallbacks,function(e){e(o.data,o.localized)})},error:s})}
if(shouldUseLocalizedData()){n(getLocalizedDataUrl(this.props.src),function(e,t,s){o.localized=false
n(getDataUrl(a.props.src),function(e,t,s){console.error("Data load failed:",getDataUrl(a.props.src),s)})})}else{n(getDataUrl(this.props.src),function(e,t,s){console.error("Data load failed:",getDataUrl(a.props.src),s)})}}},onDataLoaded:function e(a,t){if(this._isMounted&&a.labels&&a.range){this.setState({dataLoaded:true,labelDataIsLocalized:t,labels:a.labels,range:a.range})}},sizeProvided:function e(){return this.props.width!=null&&this.props.height!=null},onImageLoad:function e(){var a=this
if(this.sizeProvided()){this.setState({imageLoaded:true})}else{Util.getImageSize(this.props.src,function(e,t){if(a._isMounted){a.setState({imageLoaded:true,imageDimensions:[e,t]})}})}},setupGraphie:function e(a,t){var s=this
_.map(t.labels,function(e){if(shouldRenderJipt()&&s.state.labelDataIsLocalized){var t=a.label(e.coordinates,e.content,e.alignment,false)
$(t).data("jipt-label-index",jiptLabels.length)
jiptLabels.push({label:t,useMath:e.typesetAsMath})}else if(e.coordinates){var r=a.label(e.coordinates,e.content,e.alignment,e.typesetAsMath,{"font-size":100*s.props.scale+"%"})
var i=r[0].style
var o=s._tryGetPixels(i.top)
var n=s._tryGetPixels(i.left)
if(o===null||n===null){var l=r.position()
o=l.top
n=l.left}var p=s.props.height*s.props.scale
var c=s.props.width*s.props.scale
r.css({top:o/p*100+"%",left:n/c*100+"%"})
_.each(e.style,function(e,a){r.css(a,e)})}})},_tryGetPixels:function e(a){a=a||""
if(!a.endsWith("px")){return null}return parseFloat(a)||null},_handleZoomClick:function e(a){var t=$(a.target)
if(t.width()<this.props.width||this.props.zoomToFullSizeOnMobile){Zoom.ZoomService.handleZoomClick(a,this.props.zoomToFullSizeOnMobile)}this.props.trackInteraction&&this.props.trackInteraction()},render:function e(){var a=this.props.src
var t={alt:this.props.alt,title:this.props.title}
if(this.props.alt){t["aria-hidden"]=true}var s=this.props.width&&this.props.width*this.props.scale
var r=this.props.height&&this.props.height*this.props.scale
var i={width:s,height:r}
var o=this.props.responsive&&!!(s&&r)
var n=void 0
if(this.props.extraGraphie&&this.props.extraGraphie.labels.length){n=React.createElement(Graphie,{box:this.props.extraGraphie.box,range:this.props.extraGraphie.range,options:{labels:this.props.extraGraphie.labels},responsive:true,addMouseLayer:false,setup:this.setupGraphie})}var l=this.props.preloader===undefined?defaultPreloader:this.props.preloader
var p=l?function(){return l(i)}:null
if(!isLabeledSVG(a)){if(o){var c=classNames({zoomable:s>ZOOMABLE_THRESHOLD,"svg-image":true})
t.onClick=this._handleZoomClick
return React.createElement(FixedToResponsive,{className:c,width:s,height:r,constrainHeight:this.props.constrainHeight,allowFullBleed:this.props.allowFullBleed&&isImageProbablyPhotograph(a)},React.createElement(ImageLoader,{src:a,imgProps:t,preloader:p,onUpdate:this.props.onUpdate}),n)}else{t.style=i
return React.createElement(ImageLoader,{src:a,preloader:p,imgProps:t,onUpdate:this.props.onUpdate})}}var d=getSvgUrl(a)
var h=void 0
if(this.isLoadedInState(this.state)){var u=void 0
if(this.sizeProvided()){u=[s,r]}else{u=[this.state.imageDimensions[0]*this.props.scale,this.state.imageDimensions[1]*this.props.scale]}var g=[40*this.props.scale,40*this.props.scale]
h=React.createElement(Graphie,{ref:"graphie",box:u,scale:g,range:this.state.range,options:_.pick(this.state,"labels"),responsive:o,addMouseLayer:false,setup:this.setupGraphie})}if(o){return React.createElement(FixedToResponsive,{className:"svg-image",width:s,height:r,constrainHeight:this.props.constrainHeight},React.createElement(ImageLoader,{src:d,onLoad:this.onImageLoad,onUpdate:this.props.onUpdate,preloader:p,imgProps:t}),h,n)}else{t.style=i
return React.createElement("div",{className:"unresponsive-svg-image",style:i},React.createElement(ImageLoader,{src:d,onLoad:this.onImageLoad,onUpdate:this.props.onUpdate,preloader:p,imgProps:t}),h)}}})
module.exports=SvgImage

});
KAdefine("javascript/perseus-all-package/components/tex-buttons.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var TeX=require("../../react-components-package/tex.jsx")
var i18n=require("../../shared-package/i18n.js")
var prettyBig={fontSize:"150%"}
var slightlyBig={fontSize:"120%"}
var symbStyle={fontSize:"130%"}
var basic=[function(){return[React.createElement("span",{key:"plus",style:slightlyBig},"+"),"+"]},function(){return[React.createElement("span",{key:"minus",style:prettyBig},"-"),"-"]},function(e){if(e.convertDotToTimes){return[React.createElement(TeX,{key:"times",style:prettyBig},i18n.doNotTranslate("\\times")),"\\times"]}else{return[React.createElement(TeX,{key:"times",style:prettyBig},i18n.doNotTranslate("\\cdot")),"\\cdot"]}},function(){return[React.createElement(TeX,{key:"frac",style:prettyBig},i18n.doNotTranslate("\\frac{□}{□}")),function(e){var t=e.latex()
e.typedText("/")
if(e.latex()===t){e.cmd("\\frac")}}]}]
var buttonSets={basic:basic,"basic+div":basic.concat([function(){return[React.createElement(TeX,{key:"div"},i18n.doNotTranslate("\\div")),"\\div"]}]),trig:[function(){return[React.createElement(TeX,{key:"sin"},i18n.doNotTranslate("\\sin")),"\\sin"]},function(){return[React.createElement(TeX,{key:"cos"},i18n.doNotTranslate("\\cos")),"\\cos"]},function(){return[React.createElement(TeX,{key:"tan"},i18n.doNotTranslate("\\tan")),"\\tan"]},function(){return[React.createElement(TeX,{key:"theta",style:symbStyle},i18n.doNotTranslate("\\theta")),"\\theta"]},function(){return[React.createElement(TeX,{key:"pi",style:symbStyle},i18n.doNotTranslate("\\phi")),"\\phi"]}],prealgebra:[function(){return[React.createElement(TeX,{key:"sqrt"},i18n.doNotTranslate("\\sqrt{x}")),"\\sqrt"]},function(){return[React.createElement(TeX,{key:"nthroot"},i18n.doNotTranslate("\\sqrt[3]{x}")),function(e){e.typedText("nthroot3")
e.keystroke("Right")}]},function(){return[React.createElement(TeX,{key:"pow",style:slightlyBig},i18n.doNotTranslate("□^a")),function(e){var t=e.latex()
e.typedText("^")
if(e.latex()===t){e.typedText("a^b")}}]},function(){return[React.createElement(TeX,{key:"pi",style:slightlyBig},i18n.doNotTranslate("\\pi")),"\\pi"]}],logarithms:[function(){return[React.createElement(TeX,{key:"log"},i18n.doNotTranslate("\\log")),"\\log"]},function(){return[React.createElement(TeX,{key:"ln"},i18n.doNotTranslate("\\ln")),"\\ln"]},function(){return[React.createElement(TeX,{key:"log_b"},i18n.doNotTranslate("\\log_b")),function(e){e.typedText("log_")
e.keystroke("Right")
e.typedText("(")
e.keystroke("Left")
e.keystroke("Left")}]}],"basic relations":[function(){return[React.createElement(TeX,{key:"eq"},"="),"="]},function(){return[React.createElement(TeX,{key:"lt"},i18n.doNotTranslate("\\lt")),"\\lt"]},function(){return[React.createElement(TeX,{key:"gt"},i18n.doNotTranslate("\\gt")),"\\gt"]}],"advanced relations":[function(){return[React.createElement(TeX,{key:"neq"},i18n.doNotTranslate("\\neq")),"\\neq"]},function(){return[React.createElement(TeX,{key:"leq"},i18n.doNotTranslate("\\leq")),"\\leq"]},function(){return[React.createElement(TeX,{key:"geq"},i18n.doNotTranslate("\\geq")),"\\geq"]}]}
var buttonSetsType=PropTypes.arrayOf(PropTypes.oneOf(_(buttonSets).keys()))
var TexButtons=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.render=function e(){var t=this
var n=_.sortBy(this.props.sets,function(e){return _.keys(buttonSets).indexOf(e)})
var r=_(n).map(function(e){return buttonSets[e]})
var a=_(r).map(function(e){return e.map(function(e){var n=e(t.props)
return React.createElement("button",{onClick:function e(){return t.props.onInsert(n[1])},className:"tex-button",key:n[0].key,tabIndex:-1,type:"button"},n[0])})})
var o=_(a).map(function(e,n){return React.createElement("div",{className:"clearfix tex-button-row",key:t.props.sets[n]},e)})
return React.createElement("div",{className:this.props.className+" preview-measure"},o)}
return t}(React.Component)
TexButtons.propTypes={sets:buttonSetsType.isRequired,onInsert:PropTypes.func.isRequired}
TexButtons.buttonSets=buttonSets
TexButtons.buttonSetsType=buttonSetsType
module.exports=TexButtons

});
KAdefine("javascript/perseus-all-package/components/text-input.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var TextInput=function(e){babelHelpers.inherits(t,e)
function t(){var r,n,o
babelHelpers.classCallCheck(this,t)
for(var a=arguments.length,l=Array(a),s=0;s<a;s++){l[s]=arguments[s]}return o=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(l))),n),n.focus=function(){ReactDOM.findDOMNode(n).focus()},n.blur=function(){ReactDOM.findDOMNode(n).blur()},n.getValue=function(){return ReactDOM.findDOMNode(n).value},n.getStringValue=function(){return ReactDOM.findDOMNode(n).value.toString()},n.setSelectionRange=function(e,t){ReactDOM.findDOMNode(n).setSelectionRange(e,t)},n.getSelectionStart=function(){return ReactDOM.findDOMNode(n).selectionStart},n.getSelectionEnd=function(){return ReactDOM.findDOMNode(n).selectionEnd},r),babelHelpers.possibleConstructorReturn(n,o)}t.prototype.render=function e(){var t=this
var r=this.props,n=r.labelText,o=babelHelpers.objectWithoutProperties(r,["labelText"])
return React.createElement("input",babelHelpers.extends({},o,{type:"text","aria-label":n,onChange:function e(r){return t.props.onChange(r.target.value)}}))}
return t}(React.Component)
TextInput.propTypes={value:PropTypes.string,onChange:PropTypes.func.isRequired,className:PropTypes.string,labelText:PropTypes.string,onFocus:PropTypes.func,onBlur:PropTypes.func,disabled:PropTypes.bool}
TextInput.defaultProps={value:"",disabled:false}
module.exports=TextInput

});
KAdefine("javascript/perseus-all-package/components/text-list-editor.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var $=require("jquery")
var textWidthCache={}
function getTextWidth(e){if(!textWidthCache[e]){var t=$("<span>").text(e).appendTo("body")
textWidthCache[e]=t.width()+5
t.remove()}return textWidthCache[e]}var TextListEditor=function(e){babelHelpers.inherits(t,e)
function t(){var s,r,i
babelHelpers.classCallCheck(this,t)
for(var n=arguments.length,o=Array(n),a=0;a<n;a++){o[a]=arguments[a]}return i=(s=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),r),r.state={items:r.props.options.concat("")},r.onChange=function(e,t){var s=_.clone(r.state.items)
s[e]=t.target.value
if(e===s.length-1){s=s.concat("")}r.setState({items:s})
r.props.onChange(_.compact(s))},r.onKeyDown=function(e,t){var s=t.nativeEvent.keyCode
if(s===8&&r.state.items[e]===""){t.preventDefault()
var i=_.clone(r.state.items)
var n=e===0?0:e-1
if(e===i.length-1&&(e===0||i[n]!=="")){ReactDOM.findDOMNode(r.refs["input_"+n]).focus()}else{i.splice(e,1)
r.setState({items:i},function(){ReactDOM.findDOMNode(this.refs["input_"+n]).focus()})}}else if(s===8&&r.state.items[e].length===1&&e===r.state.items.length-2){t.preventDefault()
var o=_.clone(r.state.items)
o.splice(e,1)
r.setState({items:o})
r.props.onChange(_.compact(o))}else if(s===13){t.preventDefault()
var a=_.clone(r.state.items)
var p=e+1
if(e===a.length-2){ReactDOM.findDOMNode(r.refs["input_"+p]).focus()}else{a.splice(p,0,"")
r.setState({items:a},function(){ReactDOM.findDOMNode(this.refs["input_"+p]).focus()})}}},s),babelHelpers.possibleConstructorReturn(r,i)}t.prototype.UNSAFE_componentWillReceiveProps=function e(t){this.setState({items:t.options.concat("")})}
t.prototype.render=function e(){var t=["perseus-text-list-editor","perseus-clearfix","layout-"+this.props.layout].join(" ")
var s=_.map(this.state.items,function(e,t){return React.createElement("li",{key:t},React.createElement("input",{ref:"input_"+t,type:"text",value:e,onChange:this.onChange.bind(this,t),onKeyDown:this.onKeyDown.bind(this,t),style:{width:getTextWidth(e)}}))},this)
return React.createElement("ul",{className:t},s)}
return t}(React.Component)
TextListEditor.propTypes={options:PropTypes.array,layout:PropTypes.string,onChange:PropTypes.func.isRequired}
TextListEditor.defaultProps={options:[],layout:"horizontal"}
module.exports=TextListEditor

});
KAdefine("javascript/perseus-all-package/components/zoomable.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var ReactDOM=require("react-dom")
var Zoomable=createReactClass({displayName:"Zoomable",propTypes:{animateHeight:PropTypes.bool,children:PropTypes.element.isRequired,computeChildBounds:PropTypes.func,readyToMeasure:PropTypes.bool},getDefaultProps:function e(){return{animateHeight:false,readyToMeasure:true,computeChildBounds:function e(t){var i=t.firstElementChild
return{width:i.offsetWidth+1,height:i.offsetHeight+1}}}},getInitialState:function e(){return{visible:false,marginBottomPx:0,zoomed:true}},componentDidMount:function e(){this._isMounted=true
this.maybeInitializeMeasuring()},componentDidUpdate:function e(){this.maybeInitializeMeasuring()},componentWillUnmount:function e(){window.removeEventListener("resize",this.reset)
if(this._observer){this._observer.disconnect()}this._isMounted=false},_measuringInitialized:false,reset:function e(){var t=this
if(!this._isMounted){return}if(!this.state.visible){return}this._originalWidth=null
this.setState({visible:false,compactHeight:null,expandedHeight:null,zoomed:true},function(){t.measureAndScaleChildToFit(false)})},maybeInitializeMeasuring:function e(){var t=this
var i=this.props.readyToMeasure&&!this._measuringInitialized
if(this._isMounted&&i){this._measuringInitialized=true
this._node=ReactDOM.findDOMNode(this)
setTimeout(function(){return t.measureAndScaleChildToFit(false)},0)
if(window.MutationObserver){this._observer=new MutationObserver(function(e){if(t._isMounted){for(var i=e,o=Array.isArray(i),r=0,i=o?i:i[Symbol.iterator]();;){var a
if(o){if(r>=i.length)break
a=i[r++]}else{r=i.next()
if(r.done)break
a=r.value}var s=a
if(s.target!==t._node){t.measureAndScaleChildToFit(t.state.zoomed)
break}}}})
this._observer.observe(this._node,{childList:true,subtree:true,attributes:true})}window.addEventListener("resize",this.reset)}},stopPropagationIfZoomed:function e(t){if(!this.state.zoomed){t.stopPropagation()}},measureAndScaleChildToFit:function e(t){var i=this
if(!this._isMounted){return}var o={width:this._node.offsetWidth,height:this._node.offsetHeight}
var r=this.props.computeChildBounds(this._node,o)
var a=r.width
var s=r.height
if(a>o.width){var n=o.width/a
this.setState({scale:n,zoomed:t,compactHeight:Math.ceil(n*s),expandedHeight:s})
setTimeout(function(){if(i._isMounted){i.setState({visible:true})}})}else{this.setState({visible:true})}},handleClickIfZoomed:function e(t){if(!this.state.zoomed){t.stopPropagation()
this.handleClick()}},handleClick:function e(){this.setState({zoomed:!this.state.zoomed})},render:function e(){var t=this.state,i=t.visible,o=t.scale,r=t.compactHeight,a=t.expandedHeight,s=t.zoomed
var n=this.props.animateHeight
var h=n?"opacity transform height":"opacity transform"
var u=i?{transitionProperty:h,WebkitTransitionProperty:h,msTransitionProperty:h,transitionDuration:"0.3s",WebkitTransitionDuration:"0.3s",msTransitionDuration:"0.3s",transitionTimingFunction:"ease-out",WebkitTransitionTimingfunction:"ease-out",msTransitionTmingFunction:"ease-out"}:{}
var d=i?"":" translate(0, 8px)"
var l=s?"scale(1, 1) "+d:"scale("+o+", "+o+") "+d
var c=babelHelpers.extends({display:"block",width:"100%",height:s?a:r,transform:l,WebkitTransform:l,msTransform:l,transformOrigin:"0 0",WebkitTransformOrigin:"0 0",msTransformOrigin:"0 0",opacity:i?1:0,WebkitTapHighlightColor:"transparent"},u)
return React.createElement("span",{onClick:this.handleClick,onClickCapture:this.handleClickIfZoomed,onTouchCancelCapture:this.stopPropagationIfZoomed,onTouchEndCapture:this.stopPropagationIfZoomed,onTouchStartCapture:this.stopPropagationIfZoomed,style:c},this.props.children)}})
module.exports=Zoomable

});
KAdefine("javascript/perseus-all-package/components/zoomable-tex.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _zoomable=require("./zoomable.jsx")
var _zoomable2=babelHelpers.interopRequireDefault(_zoomable)
var _tex=require("../../react-components-package/tex.jsx")
var _tex2=babelHelpers.interopRequireDefault(_tex)
var computeMathBounds=function e(t,r){var a=t.querySelector(".katex-html")||t.querySelector(".MathJax")
var o={width:a.offsetWidth,height:a.offsetHeight}
return{width:Math.max(r.width,o.width),height:Math.max(r.height,o.height)}}
var ZoomableTeX=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this))
r.handleRender=function(){r.setState({isRendered:true})}
r.state={isRendered:false,isLoaded:false}
return r}t.prototype.render=function e(){return React.createElement(_zoomable2.default,{readyToMeasure:this.state.isRendered,computeChildBounds:computeMathBounds},React.createElement(_tex2.default,{onRender:this.handleRender},this.props.children))}
return t}(React.Component)
exports.default=ZoomableTeX

});
KAdefine("javascript/perseus-all-package/gorgon/proptypes.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var PropTypes=require("prop-types")
var linterContextProps=exports.linterContextProps=PropTypes.shape({contentType:PropTypes.string,highlightLint:PropTypes.bool,paths:PropTypes.arrayOf(PropTypes.string),stack:PropTypes.arrayOf(PropTypes.string)})
var linterContextDefault=exports.linterContextDefault={contentType:"",highlightLint:false,paths:[],stack:[]}

});
KAdefine("javascript/perseus-all-package/gorgon/rule.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _selector=require("./selector.js")
var _selector2=babelHelpers.interopRequireDefault(_selector)
var Rule=function(){function e(t,r,n,s,i,a){babelHelpers.classCallCheck(this,e)
if(!n&&!s){throw new Error("Lint rules must have a selector or pattern")}this.name=t||"unnamed rule"
this.severity=r||e.Severity.BULK_WARNING
this.selector=n||e.DEFAULT_SELECTOR
this.pattern=s||null
if(typeof i==="function"){this.lint=i
this.message=null}else{this.lint=this._defaultLintFunction
this.message=i}this.applies=a||function(){return true}}e.makeRule=function t(r){return new e(r.name,r.severity,r.selector?_selector2.default.parse(r.selector):null,e.makePattern(r.pattern),r.lint||r.message,r.applies)}
e.prototype.check=function t(r,n,s,i){var a=this.selector.match(n)
if(!a){return null}var l=void 0
if(this.pattern){l=s.match(this.pattern)}else{l=e.FakePatternMatch(s,s,0)}if(!l){return null}try{var u=this.lint(n,s,a,l,i)
if(!u){return null}else if(typeof u==="string"){return{rule:this.name,severity:this.severity,message:u,start:0,end:s.length}}else{return{rule:this.name,severity:this.severity,message:u.message,start:u.start,end:u.end}}}catch(e){return{rule:"lint-rule-failure",message:"Exception in rule "+this.name+": "+e.message+"\nStack trace:\n"+e.stack,start:0,end:s.length}}}
e.prototype._defaultLintFunction=function e(t,r,n,s){return{message:this.message||"",start:s.index,end:s.index+s[0].length}}
e.makePattern=function e(t){if(!t){return null}else if(t instanceof RegExp){return t}else if(t[0]==="/"){var r=t.lastIndexOf("/")
var n=t.substring(1,r)
var s=t.substring(r+1)
return new RegExp(n,s)}else{return new RegExp(t)}}
e.FakePatternMatch=function e(t,r,n){var s=[r]
s.index=n
s.input=t
return s}
return e}()
Rule.Severity={ERROR:1,WARNING:2,GUIDELINE:3,BULK_WARNING:4}
exports.default=Rule
Rule.DEFAULT_SELECTOR=_selector2.default.parse("text")

});
KAdefine("javascript/perseus-all-package/gorgon/rules/absolute-url.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
var _lintUtils=require("./lint-utils.js")
module.exports=_rule2.default.makeRule({name:"absolute-url",severity:_rule2.default.Severity.GUIDELINE,selector:"link, image",lint:function e(t,r,a,i){var n=a[0].target
var l=(0,_lintUtils.getHostname)(n)
if(l==="khanacademy.org"||l.endsWith(".khanacademy.org")){return"Don't use absolute URLs:\nWhen linking to KA content or images, omit the\nhttps://www.khanacademy.org URL prefix.\nUse a relative URL beginning with / instead."}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/all-rules.js", function(require, module, exports) {
module.exports=[require("./absolute-url.js"),require("./blockquoted-math.js"),require("./blockquoted-widget.js"),require("./double-spacing-after-terminal.js"),require("./extra-content-spacing.js"),require("./heading-level-1.js"),require("./heading-level-skip.js"),require("./heading-sentence-case.js"),require("./heading-title-case.js"),require("./image-alt-text.js"),require("./image-in-table.js"),require("./link-click-here.js"),require("./long-paragraph.js"),require("./math-adjacent.js"),require("./math-align-extra-break.js"),require("./math-align-linebreaks.js"),require("./math-empty.js"),require("./math-font-size.js"),require("./math-frac.js"),require("./math-nested.js"),require("./math-starts-with-space.js"),require("./math-text-empty.js"),require("./nested-lists.js"),require("./table-missing-cells.js"),require("./unescaped-dollar.js"),require("./widget-in-table.js"),require("./profanity.js"),require("./math-without-dollars.js"),require("./unbalanced-code-delimiters.js"),require("./image-spaces-around-urls.js"),require("./image-widget.js")]

});
KAdefine("javascript/perseus-all-package/gorgon/rules/blockquoted-math.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"blockquoted-math",severity:_rule2.default.Severity.WARNING,selector:"blockQuote math, blockQuote blockMath",message:"Blockquoted math:\nmath should not be indented."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/blockquoted-widget.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"blockquoted-widget",severity:_rule2.default.Severity.WARNING,selector:"blockQuote widget",message:"Blockquoted widget:\nwidgets should not be indented."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/double-spacing-after-terminal.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"double-spacing-after-terminal",severity:_rule2.default.Severity.BULK_WARNING,selector:"paragraph",pattern:/[.!\?] {2}/i,message:"Use a single space after a sentence-ending period, or\nany other kind of terminal punctuation."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/extra-content-spacing.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"extra-content-spacing",selector:"paragraph",pattern:/\s+$/,applies:function e(r){return r.contentType==="article"},message:"No extra whitespace at the end of content blocks."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/heading-level-1.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"heading-level-1",severity:_rule2.default.Severity.WARNING,selector:"heading",lint:function e(r,l,u,t){if(u[0].level===1){return"Don't use level-1 headings:\nBegin headings with two or more # characters."}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/heading-level-skip.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"heading-level-skip",severity:_rule2.default.Severity.WARNING,selector:"heading ~ heading",lint:function e(l,r,i,a){var u=i[1]
var v=i[0]
if(u.level>v.level+1){return"Skipped heading level:\nthis heading is level "+u.level+" but\nthe previous heading was level "+v.level}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/heading-sentence-case.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"heading-sentence-case",severity:_rule2.default.Severity.GUIDELINE,selector:"heading",pattern:/^\W*[a-z]/,message:"First letter is lowercase:\nthe first letter of a heading should be capitalized."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/heading-title-case.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
var littleWords={and:true,nor:true,but:true,the:true,for:true}
function isCapitalized(e){var t=e[0]
return t===t.toUpperCase()}module.exports=_rule2.default.makeRule({name:"heading-title-case",severity:_rule2.default.Severity.GUIDELINE,selector:"heading",pattern:/[^\s:]\s+[A-Z]+[a-z]/,locale:"en",lint:function e(t,r,a,i){var n=r.trim()
var l=n.split(/\s+/)
l.shift()
l=l.filter(function(e){return e.length>2&&!littleWords.hasOwnProperty(e)})
if(l.length>=3&&l.every(function(e){return isCapitalized(e)})){return"Title-case heading:\nThis heading appears to be in title-case, but should be sentence-case.\nOnly capitalize the first letter and proper nouns."}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/image-alt-text.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"image-alt-text",severity:_rule2.default.Severity.BULK_WARNING,selector:"image",lint:function e(t,l,a,r){var i=a[0]
if(!i.alt||!i.alt.trim()){return"Images should have alt text:\nfor accessibility, all images should have alt text.\nSpecify alt text inside square brackets after the !."}else if(i.alt.length<8){return"Images should have alt text:\nfor accessibility, all images should have descriptive alt text.\nThis image's alt text is only "+i.alt.length+" characters long."}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/image-in-table.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"image-in-table",severity:_rule2.default.Severity.BULK_WARNING,selector:"table image",message:"Image in table:\ndo not put images inside of tables."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/image-spaces-around-urls.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"image-spaces-around-urls",severity:_rule2.default.Severity.ERROR,selector:"image",lint:function e(r,t,a,n,i){var l=a[0]
var u=l.target
if(i&&i.content){var o=i.content.indexOf(u)
if(o===-1){return}if(i.content[o-1]!=="("||i.content[o+u.length]!==")"){return"Whitespace before or after image url:\nFor images, don't include any space or newlines after '(' or before ')'.\nWhitespace in image URLs causes translation difficulties."}}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/image-widget.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"image-widget",severity:_rule2.default.Severity.BULK_WARNING,selector:"widget",lint:function e(t,i,a,r,l){if(t.currentNode().widgetType!=="image"){return}var n=l&&l.widgets&&l.widgets[t.currentNode().id]
if(!n){return}var s=n.options.alt
if(!s){return'Images should have alt text:\nfor accessibility, all images should have a text description.\nAdd a description in the "Alt Text" box of the image widget.'}if(s.trim().length<8){return"Images should have alt text:\nfor accessibility, all images should have descriptive alt text.\nThis image's alt text is only "+s.trim().length+" characters long."}if(n.options.caption&&n.options.caption.match(/[^\\]\$/)){return"No math in image captions:\nDon't include math expressions in image captions."}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/link-click-here.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"link-click-here",severity:_rule2.default.Severity.WARNING,selector:"link",pattern:/click here/i,message:'Inappropriate link text:\nDo not use the words "click here" in links.'})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/lint-utils.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getHostname=getHostname
exports.isInternalURL=isInternalURL
var HOSTNAME=/\/\/([^\/]+)/
function getHostname(a){if(!a){return""}var e=a.match(HOSTNAME)
return e?e[1]:""}var internalDomains={"khanacademy.org":true,"www.khanacademy.org":true,"kasandbox.org":true,"fastly.kastatic.org":true,"cdn.kastatic.org":true,"KA-youtube-converted.s3.amazonaws.com":true,"KA-share.s3.amazonaws.com":true,"ka-article-iframes.s3.amazonaws.com":true,"ka-cs-algorithms.s3.amazonaws.com":true,"ka-cs-challenge-images.s3.amazonaws.com":true,"ka-cs-scratchpad-audio.s3.amazonaws.com":true,"ka-exercise-screenshots.s3.amazonaws.com":true,"ka-exercise-screenshots-2.s3.amazonaws.com":true,"ka-exercise-screenshots-3.s3.amazonaws.com":true,"ka-learnstorm.s3.amazonaws.com":true,"ka-mobile.s3.amazonaws.com":true,"ka-perseus-graphie.s3.amazonaws.com":true,"ka-perseus-images.s3.amazonaws.com":true}
function isInternalURL(a){var e=getHostname(a)
return e===""||internalDomains.hasOwnProperty(e)}
});
KAdefine("javascript/perseus-all-package/gorgon/rules/long-paragraph.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"long-paragraph",severity:_rule2.default.Severity.GUIDELINE,selector:"paragraph",pattern:/^.{501,}/,lint:function e(r,a,t,l){return"Paragraph too long:\nThis paragraph is "+a.length+" characters long.\nShorten it to 500 characters or fewer."}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-adjacent.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-adjacent",severity:_rule2.default.Severity.WARNING,selector:"blockMath+blockMath",message:"Adjacent math blocks:\ncombine the blocks between \\begin{align} and \\end{align}"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-align-extra-break.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-align-extra-break",severity:_rule2.default.Severity.WARNING,selector:"blockMath",pattern:/(\\{2,})\s*\\end{align}/,message:"Extra space at end of block:\nDon't end an align block with backslashes"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-align-linebreaks.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-align-linebreaks",severity:_rule2.default.Severity.WARNING,selector:"blockMath",pattern:/\\begin{align}[\s\S]*\\\\[\s\S]+\\end{align}/,lint:function e(l,r,n,a){var t=a[0]
while(t.length){var i=t.indexOf("\\\\")
if(i===-1){return null}t=t.substring(i+2)
var u=t.match(/^\s*\\\\\s*(?!\\\\)/)
if(!u){return"Use four backslashes between lines of an align block"}t=t.substring(u[0].length)}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-empty.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-empty",severity:_rule2.default.Severity.WARNING,selector:"math, blockMath",pattern:/^$/,message:"Empty math: don't use $$ in your markdown."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-font-size.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-font-size",severity:_rule2.default.Severity.GUIDELINE,selector:"math, blockMath",pattern:/\\(tiny|Tiny|small|large|Large|LARGE|huge|Huge|scriptsize|normalsize)\s*{/,message:"Math font size:\nDon't change the default font size with \\Large{} or similar commands"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-frac.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-frac",severity:_rule2.default.Severity.GUIDELINE,selector:"math, blockMath",pattern:/\\frac[ {]/,message:"Use \\dfrac instead of \\frac in your math expressions."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-nested.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-nested",severity:_rule2.default.Severity.ERROR,selector:"math, blockMath",pattern:/\\text{[^$}]*\$[^$}]*\$[^}]*}/,message:"Nested math:\nDon't nest math expressions inside \\text{} blocks"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-starts-with-space.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-starts-with-space",severity:_rule2.default.Severity.GUIDELINE,selector:"math, blockMath",pattern:/^\s*(~|\\qquad|\\quad|\\,|\\;|\\:|\\ |\\!|\\enspace|\\phantom)/,message:"Math starts with space:\nmath should not be indented. Do not begin math expressions with\nLaTeX space commands like ~, \\;, \\quad, or \\phantom"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-text-empty.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-text-empty",severity:_rule2.default.Severity.WARNING,selector:"math, blockMath",pattern:/\\text{\s*}/,message:"Empty \\text{} block in math expression"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/math-without-dollars.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"math-without-dollars",severity:_rule2.default.Severity.GUIDELINE,pattern:/\\\w+{[^}]*}|{|}/,message:"This looks like LaTeX:\ndid you mean to put it inside dollar signs?"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/nested-lists.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"nested-lists",severity:_rule2.default.Severity.WARNING,selector:"list list",message:"Nested lists:\nnested lists are hard to read on mobile devices;\ndo not use additional indentation."})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/profanity.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"profanity",pattern:/\b(shit|piss|fuck|cunt|cocksucker|motherfucker|tits)\b/i,message:"Avoid profanity"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/table-missing-cells.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"table-missing-cells",severity:_rule2.default.Severity.WARNING,selector:"table",lint:function e(l,r,a,t){var u=a[0]
var n=u.header.length
var s=u.cells.map(function(e){return e.length})
for(var i=0;i<s.length;i++){if(s[i]!==n){return"Table rows don't match header:\nThe table header has "+n+" cells, but\nRow "+(i+1)+" has "+s[i]+" cells."}}}})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/unbalanced-code-delimiters.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"unbalanced-code-delimiters",severity:_rule2.default.Severity.ERROR,pattern:/[`~]+/,message:"Unbalanced code delimiters:\ncode blocks should begin and end with the same type and number of delimiters"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/unescaped-dollar.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"unescaped-dollar",severity:_rule2.default.Severity.ERROR,selector:"unescapedDollar",message:"Unescaped dollar sign:\nDollar signs must appear in pairs or be escaped as \\$"})

});
KAdefine("javascript/perseus-all-package/gorgon/rules/widget-in-table.js", function(require, module, exports) {
var _rule=require("../rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
module.exports=_rule2.default.makeRule({name:"widget-in-table",severity:_rule2.default.Severity.BULK_WARNING,selector:"table widget",message:"Widget in table:\ndo not put widgets inside of tables."})

});
KAdefine("javascript/perseus-all-package/gorgon/selector.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var Selector=function(){function e(){babelHelpers.classCallCheck(this,e)}e.parse=function e(t){return new Parser(t).parse()}
e.prototype.match=function e(t){throw new Error("Selector subclasses must implement match()")}
e.prototype.toString=function e(){return"Unknown selector class"}
return e}()
exports.default=Selector
var Parser=function(){function e(t){babelHelpers.classCallCheck(this,e)
t=t.trim().replace(/\s+/g," ")
this.tokens=t.match(e.TOKENS)||[]
this.tokenIndex=0}e.prototype.nextToken=function e(){return this.tokens[this.tokenIndex]||""}
e.prototype.consume=function e(){this.tokenIndex++}
e.prototype.isIdentifier=function e(){var t=this.tokens[this.tokenIndex][0]
return t>="a"&&t<="z"||t>="A"&&t<="Z"}
e.prototype.skipSpace=function e(){while(this.nextToken()===" "){this.consume()}}
e.prototype.parse=function e(){var t=this.parseTreeSelector()
var r=this.nextToken()
if(!r){return t}var n=[t]
while(r){if(r===","){this.consume()}else{throw new ParseError("Expected comma")}n.push(this.parseTreeSelector())
r=this.nextToken()}return new SelectorList(n)}
e.prototype.parseTreeSelector=function e(){this.skipSpace()
var t=this.parseNodeSelector()
for(;;){var r=this.nextToken()
if(!r||r===","){break}else if(r===" "){this.consume()
t=new AncestorCombinator(t,this.parseNodeSelector())}else if(r===">"){this.consume()
t=new ParentCombinator(t,this.parseNodeSelector())}else if(r==="+"){this.consume()
t=new PreviousCombinator(t,this.parseNodeSelector())}else if(r==="~"){this.consume()
t=new SiblingCombinator(t,this.parseNodeSelector())}else{throw new ParseError("Unexpected token: "+r)}}return t}
e.prototype.parseNodeSelector=function e(){this.skipSpace()
var t=this.nextToken()
if(t==="*"){this.consume()
return new AnyNode}else if(this.isIdentifier()){this.consume()
return new TypeSelector(t)}throw new ParseError("Expected node type")}
return e}()
Parser.TOKENS=/([a-zA-Z][\w-]*)|(\d+)|[^\s]|(\s(?=[a-zA-Z\*]))/g
var ParseError=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.call(this,r))}return t}(Error)
var SelectorList=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this))
n.selectors=r
return n}t.prototype.match=function e(t){for(var r=0;r<this.selectors.length;r++){var n=this.selectors[r]
var o=n.match(t)
if(o){return o}}return null}
t.prototype.toString=function e(){var t=""
for(var r=0;r<this.selectors.length;r++){t+=r>0?", ":""
t+=this.selectors[r].toString()}return t}
return t}(Selector)
var AnyNode=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.match=function e(t){return[t.currentNode()]}
t.prototype.toString=function e(){return"*"}
return t}(Selector)
var TypeSelector=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this))
n.type=r
return n}t.prototype.match=function e(t){var r=t.currentNode()
if(r.type===this.type){return[r]}else{return null}}
t.prototype.toString=function e(){return this.type}
return t}(Selector)
var SelectorCombinator=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
var o=babelHelpers.possibleConstructorReturn(this,e.call(this))
o.left=r
o.right=n
return o}return t}(Selector)
var AncestorCombinator=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.call(this,r,n))}t.prototype.match=function e(t){var r=this.right.match(t)
if(r){t=t.clone()
while(t.hasParent()){t.goToParent()
var n=this.left.match(t)
if(n){return n.concat(r)}}}return null}
t.prototype.toString=function e(){return this.left.toString()+" "+this.right.toString()}
return t}(SelectorCombinator)
var ParentCombinator=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.call(this,r,n))}t.prototype.match=function e(t){var r=this.right.match(t)
if(r){if(t.hasParent()){t=t.clone()
t.goToParent()
var n=this.left.match(t)
if(n){return n.concat(r)}}}return null}
t.prototype.toString=function e(){return this.left.toString()+" > "+this.right.toString()}
return t}(SelectorCombinator)
var PreviousCombinator=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.call(this,r,n))}t.prototype.match=function e(t){var r=this.right.match(t)
if(r){if(t.hasPreviousSibling()){t=t.clone()
t.goToPreviousSibling()
var n=this.left.match(t)
if(n){return n.concat(r)}}}return null}
t.prototype.toString=function e(){return this.left.toString()+" + "+this.right.toString()}
return t}(SelectorCombinator)
var SiblingCombinator=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.call(this,r,n))}t.prototype.match=function e(t){var r=this.right.match(t)
if(r){t=t.clone()
while(t.hasPreviousSibling()){t.goToPreviousSibling()
var n=this.left.match(t)
if(n){return n.concat(r)}}}return null}
t.prototype.toString=function e(){return this.left.toString()+" ~ "+this.right.toString()}
return t}(SelectorCombinator)

});
KAdefine("javascript/perseus-all-package/gorgon/tree-transformer.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var TreeTransformer=function(){function t(e){babelHelpers.classCallCheck(this,t)
this.root=e}t.isNode=function t(e){return e&&(typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"&&typeof e.type==="string"}
t.isTextNode=function e(r){return t.isNode(r)&&r.type==="text"&&typeof r.content==="string"}
t.prototype.traverse=function t(e){this._traverse(this.root,new TraversalState(this.root),e)}
t.prototype._traverse=function e(r,n,s){var o=this
var i=""
if(t.isNode(r)){var a=r
n._containers.push(a)
n._ancestors.push(a)
if(typeof a.content==="string"){i=a.content}var p=Object.keys(a)
p.forEach(function(t){if(t==="type"){return}var e=a[t]
if(e&&(typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"){n._indexes.push(t)
i+=o._traverse(e,n,s)
n._indexes.pop()}})
n._currentNode=n._ancestors.pop()
n._containers.pop()
s(a,n,i)}else if(Array.isArray(r)){var c=r
n._containers.push(c)
var u=0
while(u<c.length){n._indexes.push(u)
i+=this._traverse(c[u],n,s)
u=n._indexes.pop()+1}n._containers.pop()}return i}
return t}()
exports.default=TreeTransformer
var TraversalState=exports.TraversalState=function(){function t(e){babelHelpers.classCallCheck(this,t)
this.root=e
this._currentNode=null
this._containers=new Stack
this._indexes=new Stack
this._ancestors=new Stack}t.prototype.currentNode=function t(){return this._currentNode||this.root}
t.prototype.parent=function t(){return this._ancestors.top()}
t.prototype.ancestors=function t(){return this._ancestors.values()}
t.prototype.nextSibling=function t(){var e=this._containers.top()
if(!e||!Array.isArray(e)){return null}var r=this._indexes.top()
if(e.length>r+1){return e[r+1]}else{return null}}
t.prototype.previousSibling=function t(){var e=this._containers.top()
if(!e||!Array.isArray(e)){return null}var r=this._indexes.top()
if(r>0){return e[r-1]}else{return null}}
t.prototype.removeNextSibling=function t(){var e=this._containers.top()
if(e&&Array.isArray(e)){var r=this._indexes.top()
if(e.length>r+1){return e.splice(r+1,1)[0]}}return null}
t.prototype.replace=function t(){var e=this._containers.top()
if(!e){throw new Error("Can't replace the root of the tree")}var r=Array.isArray(e)
var n=e
var s=this._indexes.top()
var o=e
var i=this._indexes.top()
for(var a=arguments.length,p=Array(a),c=0;c<a;c++){p[c]=arguments[c]}if(r){n.splice.apply(n,[s,1].concat(p))
this._indexes.pop()
this._indexes.push(s+p.length-1)}else{if(p.length===0){delete o[i]}else if(p.length===1){o[i]=p[0]}else{o[i]=p}}}
t.prototype.hasPreviousSibling=function t(){return Array.isArray(this._containers.top())&&this._indexes.top()>0}
t.prototype.goToPreviousSibling=function t(){if(!this.hasPreviousSibling()){throw new Error("goToPreviousSibling(): node has no previous sibling")}this._currentNode=this.previousSibling()
var e=this._indexes.pop()
this._indexes.push(e-1)}
t.prototype.hasParent=function t(){return this._ancestors.size()!==0}
t.prototype.goToParent=function t(){if(!this.hasParent()){throw new Error("goToParent(): node has no ancestor")}this._currentNode=this._ancestors.pop()
while(this._containers.size()&&this._containers.top()[this._indexes.top()]!==this._currentNode){this._containers.pop()
this._indexes.pop()}}
t.prototype.clone=function e(){var e=new t(this.root)
e._currentNode=this._currentNode
e._containers=this._containers.clone()
e._indexes=this._indexes.clone()
e._ancestors=this._ancestors.clone()
return e}
t.prototype.equals=function t(e){return this.root===e.root&&this._currentNode===e._currentNode&&this._containers.equals(e._containers)&&this._indexes.equals(e._indexes)&&this._ancestors.equals(e._ancestors)}
return t}()
var Stack=function(){function t(e){babelHelpers.classCallCheck(this,t)
this.stack=e?e.slice(0):[]}t.prototype.push=function t(e){this.stack.push(e)}
t.prototype.pop=function t(){return this.stack.pop()}
t.prototype.top=function t(){return this.stack[this.stack.length-1]}
t.prototype.values=function t(){return this.stack.slice(0)}
t.prototype.size=function t(){return this.stack.length}
t.prototype.toString=function t(){return this.stack.toString()}
t.prototype.clone=function e(){return new t(this.stack)}
t.prototype.equals=function t(e){if(!e||!e.stack||e.stack.length!==this.stack.length){return false}for(var r=0;r<this.stack.length;r++){if(this.stack[r]!==e.stack[r]){return false}}return true}
return t}()

});
KAdefine("javascript/perseus-all-package/hint-renderer.jsx", function(require, module, exports) {
var _newHint
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var classnames=require("classnames")
var i18n=require("../shared-package/i18n.js")
var Renderer=require("./renderer.jsx")
var ApiOptions=require("./perseus-api.jsx").Options
var mediaQueries=require("./styles/media-queries.js")
var _require2=require("./styles/constants.js"),baseUnitPx=_require2.baseUnitPx,hintBorderWidth=_require2.hintBorderWidth,kaGreen=_require2.kaGreen,gray97=_require2.gray97
var Gorgon=require("./gorgon/gorgon.js")
var _require3=require("./gorgon/proptypes.js"),linterContextProps=_require3.linterContextProps,linterContextDefault=_require3.linterContextDefault
var HintRenderer=function(e){babelHelpers.inherits(r,e)
function r(){var t,n,s
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,a=Array(i),o=0;o<i;o++){a[o]=arguments[o]}return s=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),n),n.getSerializedState=function(){return n.refs.renderer.getSerializedState()},n.restoreSerializedState=function(e,r){n.refs.renderer.restoreSerializedState(e,r)},t),babelHelpers.possibleConstructorReturn(n,s)}r.prototype.render=function e(){var r=this.props,t=r.apiOptions,n=r.className,s=r.hint,i=r.lastHint,a=r.lastRendered,o=r.pos,l=r.totalHints
var p=t.isMobile
var d=classnames(!p&&"perseus-hint-renderer",p&&css(styles.newHint),p&&a&&css(styles.lastRenderedNewHint),i&&"last-hint",a&&"last-rendered",n)
var u=babelHelpers.extends({},t,{customKeypad:false,staticRender:false})
return React.createElement("div",{className:d,tabIndex:"-1"},!t.isMobile&&React.createElement("span",{className:"perseus-sr-only"},i18n._("Hint #%(pos)s",{pos:o+1})),!t.isMobile&&!t.satStyling&&l&&o!=null&&React.createElement("span",{className:"perseus-hint-label",style:{display:"block",color:t.hintProgressColor}},o+1+" / "+l),React.createElement(Renderer,{ref:"renderer",widgets:s.widgets,content:s.content||"",images:s.images,apiOptions:u,findExternalWidgets:this.props.findExternalWidgets,linterContext:Gorgon.pushContextStack(this.props.linterContext,"hint")}))}
return r}(React.Component)
HintRenderer.propTypes={apiOptions:ApiOptions.propTypes,className:PropTypes.string,hint:PropTypes.any,lastHint:PropTypes.bool,lastRendered:PropTypes.bool,pos:PropTypes.number,totalHints:PropTypes.number,findExternalWidgets:PropTypes.func,linterContext:linterContextProps}
HintRenderer.defaultProps={linterContext:linterContextDefault}
var styles=StyleSheet.create({newHint:(_newHint={marginBottom:1.5*baseUnitPx,borderLeftColor:gray97,borderLeftStyle:"solid",borderLeftWidth:hintBorderWidth},_newHint[mediaQueries.lgOrSmaller]={paddingLeft:baseUnitPx},_newHint[mediaQueries.smOrSmaller]={paddingLeft:0},_newHint[":focus"]={outline:"none"},_newHint),lastRenderedNewHint:{marginBottom:0,borderLeftColor:kaGreen}})
module.exports=HintRenderer

});
KAdefine("javascript/perseus-all-package/hints-renderer.jsx", function(require, module, exports) {
var _mobileHintStylesHint,_mobileHintStylesGetA,_mobileHintStylesPlus
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var classnames=require("classnames")
var _=require("underscore")
var i18n=require("../shared-package/i18n.js")
var HintRenderer=require("./hint-renderer.jsx")
var SvgImage=require("./components/svg-image.jsx")
var ApiOptionsProps=require("./mixins/api-options-props.js")
var mediaQueries=require("./styles/media-queries.js")
var sharedStyles=require("./styles/shared.js")
var _require2=require("./styles/constants.js"),baseUnitPx=_require2.baseUnitPx,hintBorderWidth=_require2.hintBorderWidth,kaGreen=_require2.kaGreen,gray85=_require2.gray85,gray17=_require2.gray17
var Gorgon=require("./gorgon/gorgon.js")
var _require3=require("./gorgon/proptypes.js"),linterContextProps=_require3.linterContextProps,linterContextDefault=_require3.linterContextDefault
var HintsRenderer=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,r
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),a=0;a<s;a++){o[a]=arguments[a]}return r=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),n),n._hintsVisible=function(){if(n.props.hintsVisible==null||n.props.hintsVisible===-1){return n.props.hints.length}else{return n.props.hintsVisible}},n._cacheImagesInHint=function(e){_.each(e.images,function(e,t){var i=new Image
i.src=SvgImage.getRealImageUrl(t)})},n._cacheHintImages=function(){if(n._hintsVisible()>0){_.each(n.props.hints,n._cacheImagesInHint)}else if(n.props.hints.length>0){n._cacheImagesInHint(n.props.hints[0])}},n.getApiOptions=function(){return ApiOptionsProps.getApiOptions.call(n)},n.getSerializedState=function(){return _.times(n._hintsVisible(),function(e){return n.refs["hintRenderer"+e].getSerializedState()})},n.restoreSerializedState=function(e,t){var i=1
var r=function e(){--i
if(t&&i===0){t()}}
_.each(e,function(e,t){var s=n.refs["hintRenderer"+t]
if(s){++i
s.restoreSerializedState(e,r)}})
r()},i),babelHelpers.possibleConstructorReturn(n,r)}t.prototype.componentDidMount=function e(){this._cacheHintImages()}
t.prototype.componentDidUpdate=function e(t,i){if(!_.isEqual(t.hints,this.props.hints)||t.hintsVisible!==this.props.hintsVisible){this._cacheHintImages()}if(t.hintsVisible<this.props.hintsVisible){var n=this.props.hintsVisible-1
ReactDOM.findDOMNode(this.refs["hintRenderer"+n]).focus()}}
t.prototype.render=function e(){var t=this
var i=this.getApiOptions()
var n=this._hintsVisible()
var r=[]
this.props.hints.slice(0,n).forEach(function(e,s){var o=s===t.props.hints.length-1&&!/\*\*/.test(e.content)
var a=s===n-1
var l=React.createElement(HintRenderer,{lastHint:o,lastRendered:a,hint:e,pos:s,totalHints:t.props.hints.length,ref:"hintRenderer"+s,key:"hintRenderer"+s,apiOptions:i,findExternalWidgets:t.props.findExternalWidgets,linterContext:Gorgon.pushContextStack(t.props.linterContext,"hints["+s+"]")})
if(e.replace&&r.length>0){r[r.length-1]=l}else{r.push(l)}})
var s=i.getAnotherHint&&n>0&&n<this.props.hints.length
var o="("+n+"/"+this.props.hints.length+")"
var a=classnames(this.props.className,i.isMobile&&n>0&&css(styles.mobileHintStylesHintsRenderer))
return React.createElement("div",{className:a},i.isMobile&&n>0&&React.createElement("div",{className:css(styles.mobileHintStylesHintTitle,sharedStyles.responsiveLabel)},i18n._("Hints")),r,s&&React.createElement("button",{rel:"button",className:css(styles.linkButton,styles.getAnotherHintButton,i.isMobile&&styles.mobileHintStylesGetAnotherHintButton),onClick:function e(t){t.preventDefault()
t.stopPropagation()
i.getAnotherHint()}},React.createElement("span",{className:css(styles.plusText,i.isMobile&&styles.mobileHintStylesPlusText)},"+"),React.createElement("span",{className:css(styles.getAnotherHintText)},i18n._("Get another hint")," ",o)))}
return t}(React.Component)
HintsRenderer.propTypes=babelHelpers.extends({},ApiOptionsProps.propTypes,{className:PropTypes.string,hints:PropTypes.arrayOf(PropTypes.any),hintsVisible:PropTypes.number,findExternalWidgets:PropTypes.func,linterContext:linterContextProps})
HintsRenderer.defaultProps={linterContext:linterContextDefault}
var hintIndentation=baseUnitPx+hintBorderWidth
var styles=StyleSheet.create({rendererMargins:{marginTop:baseUnitPx},linkButton:{cursor:"pointer",border:"none",backgroundColor:"transparent",fontSize:"100%",fontFamily:"inherit",fontWeight:"bold",color:kaGreen,padding:0,position:"relative"},plusText:{fontSize:20,position:"absolute",top:-3,left:0},getAnotherHintText:{marginLeft:16},mobileHintStylesHintsRenderer:{marginTop:4*baseUnitPx,border:"solid "+gray85,borderWidth:"1px 0 0 0",position:"relative",":before":{content:'""',display:"table",clear:"both"},":after":{content:'""',display:"table",clear:"both"}},mobileHintStylesHintTitle:(_mobileHintStylesHint={fontFamily:"inherit",fontStyle:"normal",fontWeight:"bold",color:gray17,paddingTop:baseUnitPx,paddingBottom:1.5*baseUnitPx},_mobileHintStylesHint[mediaQueries.lgOrSmaller]={paddingLeft:0},_mobileHintStylesHint[mediaQueries.smOrSmaller]={paddingLeft:hintIndentation},_mobileHintStylesHint),getAnotherHintButton:{marginTop:1.5*baseUnitPx},mobileHintStylesGetAnotherHintButton:(_mobileHintStylesGetA={},_mobileHintStylesGetA[mediaQueries.lgOrSmaller]={paddingLeft:0},_mobileHintStylesGetA[mediaQueries.smOrSmaller]={paddingLeft:hintIndentation},_mobileHintStylesGetA),mobileHintStylesPlusText:(_mobileHintStylesPlus={},_mobileHintStylesPlus[mediaQueries.lgOrSmaller]={left:0},_mobileHintStylesPlus[mediaQueries.smOrSmaller]={left:hintIndentation},_mobileHintStylesPlus)})
module.exports=HintsRenderer

});
KAdefine("javascript/perseus-all-package/icon-paths.js", function(require, module, exports) {
module.exports={iconCheck:{path:"M8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.82842712,16.2426407 C10.2207367,16.6349502 10.8574274,16.6328935 11.2471942,16.2380576 L16.7116603,10.7025237 C17.0996535,10.3094846 17.0955629,9.67633279 16.7025237,9.28833966 C16.3094846,8.90034653 15.6763328,8.90443714 15.2883397,9.29747629 L10.5309507,14.1167372 L8.70710678,12.2928932 Z",width:24,height:24},iconCheckMedium:{path:"M6.072 10.4l6.175-7.058a1 1 0 1 1 1.506 1.317L6.769 12.64a1 1 0 0 1-1.55-.054L2.203 8.604a1 1 0 1 1 1.594-1.208L6.072 10.4z",width:16,height:16},iconChevronDown:{path:"M99.669 13.048q0 3.36-2.352 5.712l-41.664 41.664q-2.408 2.408-5.88 2.408t-5.712-2.408l-41.664-41.664q-2.408-2.24-2.408-5.712t2.408-5.88l4.76-4.816q2.52-2.352 5.88-2.352t5.656 2.352l31.136 31.136 31.08-31.136q2.352-2.352 5.712-2.352t5.88 2.352l4.816 4.816q2.352 2.52 2.352 5.88z",width:100,height:63.034},iconChevronRight:{path:"M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z",width:63.034,height:100},iconCircle:{path:"M100.035 50.046q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100},iconCircleArrowDown:{path:"M50.046 83.676q1.767 0 2.907-1.14l29.526-29.526q1.197-1.197 1.197-2.907t-1.197-2.964l-5.928-5.928q-1.197-1.14-2.964-1.14t-2.907 1.14l-12.312 12.312l0-32.661q0-1.71-1.254-2.964t-2.907-1.254l-8.322 0q-1.71 0-2.964 1.254t-1.254 2.964l0 32.661l-12.312-12.312q-1.197-1.254-2.907-1.254t-2.907 1.254l-5.928 5.928q-1.197 1.197-1.197 2.964t1.197 2.907l29.469 29.526q1.197 1.14 2.964 1.14zm49.989-33.63q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100},iconCircleArrowUp:{path:"M54.207 83.391q1.653 0 2.907-1.254t1.254-2.907l0-32.718l12.312 12.312q1.254 1.254 2.964 1.254t2.907-1.254l5.928-5.928q1.197-1.197 1.14-2.964 0-1.767-1.14-2.907l-29.526-29.526q-1.197-1.14-2.907-1.14t-2.964 1.14l-29.469 29.526q-1.197 1.254-1.197 2.964t1.197 2.907l5.928 5.928q1.197 1.197 2.907 1.197t2.907-1.197l12.312-12.312l0 32.718q0 1.653 1.254 2.907t2.964 1.254l8.322 0zm45.828-33.345q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z",width:100,height:100},iconCircleThin:{path:"M50.046 8.322q-8.493 0-16.188 3.306-15.561 6.669-22.173 22.23-3.363 7.695-3.363 16.188t3.306 16.188 8.949 13.281q5.586 5.586 13.281 8.892t16.188 3.306 16.188-3.306 13.281-8.892 8.892-13.281 3.306-16.188-3.306-16.188-8.892-13.281-13.281-8.949q-7.695-3.306-16.188-3.306zm0 91.713q-13.623 0-25.137-6.726t-18.183-18.183q-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.726 25.137-6.726 25.137-18.24 18.126q-11.514 6.726-25.08 6.726z",width:100,height:99.944},iconDesktop:{path:"M94.208 52.119l0-43.746q0-.69-.506-1.15t-1.196-.506l-84.088 0q-.69 0-1.196.506t-.506 1.15l0 43.746q0 .69.506 1.196t1.196.506l84.088 0q.69 0 1.196-.506t.506-1.196zm6.716-43.746l0 57.224q0 3.45-2.484 5.934t-5.934 2.484l-28.566 0q0 3.128 2.53 7.774.828 1.61.828 2.622t-1.012 2.07q-1.012 1.012-2.346.966l-26.91 0q-1.38 0-2.392-1.012t-1.012-2.024q0-1.058 1.656-4.14t1.748-6.256l-28.612 0q-3.45 0-5.934-2.484t-2.484-5.934l0-57.224q0-3.45 2.484-5.934t5.934-2.438l84.088 0q3.45 0 5.98 2.438 2.438 2.484 2.438 5.934z",width:100,height:86.648},iconDropdownArrow:{path:"M9 9.8c0 .5.7 1.7 1.5 2.8 1.5 1.9 1.5 1.9 3 0C15.7 9.7 15.4 9 12 9c-1.6 0-3 .4-3 .8z",width:24,height:24},iconExclamationSign:{path:"M58.368 81.225l0-12.369q0-.912-.57-1.539t-1.425-.627l-12.54 0q-.855-.057-1.482.627t-.684 1.539l0 12.369q-.057.855.627 1.482t1.539.684l12.54 0q.855 0 1.425-.627t.57-1.539zm1.026-62.871q0-1.596-2.223-1.71l-14.307 0q-2.109 0-2.223 1.71l1.14 40.47q0 .627.627 1.14t1.539.456l12.084 0q.912-.057 1.539-.513t.684-1.083zm-9.348-18.354q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.726 25.137-6.726 25.137-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669z",width:100,height:99.944},iconGear:{path:"M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z",width:1792,height:1792},iconMobilePhone:{path:"M36.04 89.557q0-2.584-1.836-4.42t-4.42-1.836-4.352 1.836q-1.836 1.836-1.836 4.42t1.836 4.352 4.42 1.836q2.652-.068 4.42-1.836t1.768-4.352zm16.184-12.444l0-54.74q0-1.088-.748-1.768t-1.768-.68l-39.78 0q-1.088 0-1.768.748t-.68 1.7l0 54.74q0 1.02.748 1.768t1.7.68l39.78 0q1.02-.068 1.768-.748t.748-1.7zm-14.892-65.892q0-1.224-1.292-1.292l-12.444 0q-1.224.068-1.224 1.292t1.224 1.224l12.444 0q1.292 0 1.292-1.224zm22.372-1.292l0 79.628q0 3.944-2.992 6.936t-7.004 2.992l-39.78 0q-4.012 0-7.004-2.924-2.924-2.924-2.924-7.004l0-79.628q0-4.012 2.924-6.936t7.004-2.992l39.78 0q4.012-.068 7.004 2.924t2.992 7.004z",width:60.013,height:100},iconOk:{path:"M37.964 76.048q-2.576 0-4.368-1.792l-31.864-31.864q-1.792-1.792-1.792-4.368t1.792-4.368l8.736-8.68q1.792-1.792 4.368-1.792t4.312 1.792l18.816 18.872 42-42.056q1.792-1.792 4.368-1.792t4.312 1.792l8.736 8.736q1.792 1.792 1.792 4.368t-1.792 4.312l-55.048 55.048q-1.792 1.792-4.368 1.792z",width:100,height:76.637},iconPlus:{path:"M99.758 43.09l0 13.578q0 2.852-1.984 4.836t-4.836 1.984l-29.45 0l0 29.45q0 2.852-1.984 4.836t-4.836 1.984l-13.578 0q-2.852 0-4.836-1.984t-1.984-4.836l0-29.45l-29.45 0q-2.852 0-4.836-1.984t-1.984-4.836l0-13.578q0-2.852 1.984-4.836t4.836-1.984l29.45 0l0-29.45q0-2.852 1.984-4.836t4.836-1.984l13.578 0q2.852 0 4.836 1.984t1.984 4.836l0 29.45l29.45 0q2.852 0 4.836 1.984t1.984 4.836z",width:100,height:100},iconRemove:{path:"M100.464 80.808q0 3.404-2.368 5.772l-11.47 11.544q-2.368 2.368-5.772 2.368t-5.698-2.368l-24.864-24.864-24.864 24.864q-2.368 2.368-5.772 2.368t-5.772-2.368l-11.47-11.544q-2.368-2.368-2.368-5.772t2.368-5.698l24.864-24.864-24.864-24.864q-2.368-2.368-2.368-5.772t2.368-5.772l11.47-11.47q2.368-2.368 5.772-2.368t5.772 2.368l24.864 24.864 24.864-24.864q2.294-2.368 5.698-2.368t5.772 2.368l11.47 11.47q2.368 2.368 2.368 5.772t-2.368 5.772l-24.864 24.864 24.864 24.864q2.368 2.294 2.368 5.698z",width:100,height:100},iconStar:{path:"M15.1052249,9.55978547 L22.0028147,9.55978545 C23.6568673,9.55978545 23.9349557,10.3753626 22.6181351,11.3858845 L16.9943688,15.7015366 L19.2518801,22.8294455 C19.7526645,24.4106317 19.0984455,24.8825885 17.769353,23.8673293 L12.0490577,19.4977438 L6.5116497,23.8422153 C5.20921411,24.8640642 4.53299569,24.4067544 5.00266927,22.8160582 L7.10332364,15.7015366 L1.42794544,11.3634306 C0.110226041,10.3562014 0.383967283,9.54239221 2.0409646,9.54574013 L8.9924676,9.55978547 L11.1485117,2.72669438 C11.6458693,1.15043244 12.4548928,1.15900049 12.9494787,2.72669438 L15.1052249,9.55978547 Z",width:24,height:24},iconTryAgain:{path:"M3.74890556,17.9799506 C2.19251241,16.1970909 1.10103636,13.4971457 1.13090903,11.1491783 C1.17160478,7.95052637 4.01704076,0.865059407 11.7028044,0.865059407 C19.388568,0.865059407 22.3026521,7.35203035 22.3026521,11.5879453 C22.3026521,15.8238603 19.386629,20.5574509 13.6832464,21.7131548 L13.6757539,17.3722171 C17.0812986,16.2190517 18.331158,14.1944123 18.3311578,11.5879451 C18.3311574,8.16554692 15.6664205,5.03476549 11.7028048,5.20494205 C7.73918903,5.37511861 5.59244567,8.66930079 5.59244567,11.1491783 C5.59244567,12.9090077 6.11128139,14.1753512 6.93640437,15.3053215 L8.14052356,14.2949456 C8.98559348,13.5858477 9.6994861,13.9070448 9.73489556,15.0076413 L9.91284941,20.5388014 C9.94832683,21.6415103 9.09967118,22.3514475 8.02194403,22.1254594 L2.60571602,20.9897332 C1.5259204,20.7633114 1.34338662,19.9984207 2.18070755,19.295825 L3.74890556,17.9799506 Z",width:23,height:23},iconTablet:{path:"M45.322 90.706q0-1.86-1.302-3.224-1.364-1.364-3.224-1.364t-3.224 1.364-1.302 3.224q0 1.86 1.364 3.224 1.302 1.364 3.162 1.302 1.86.062 3.224-1.302t1.302-3.224zm27.218-11.346l0-68.014q0-.93-.682-1.612t-1.55-.682l-58.962 0q-.93 0-1.612.682t-.682 1.612l0 68.014q0 .93.682 1.612t1.612.62l58.962 0q.992-.062 1.612-.682t.62-1.55zm9.114-68.014l0 77.066q0 4.65-3.348 7.998t-7.998 3.348l-58.962 0q-4.65 0-7.998-3.348t-3.348-7.998l0-77.066q0-4.65 3.348-7.998t7.998-3.348l58.962 0q4.65 0 7.998 3.348t3.348 7.998z",width:81.852,height:100},iconTrash:{path:"M31.293 37.506q2.052 0 2.052 2.109l0 37.506q0 1.995-2.052 2.109l-4.218 0q-.912-.057-1.482-.627t-.57-1.482l0-37.506q0-2.109 2.052-2.109l4.218 0zm18.753 2.109l0 37.506q0 .912-.57 1.482t-1.539.627l-4.161 0q-1.995 0-2.109-2.109l0-37.506q.057-.912.627-1.482t1.482-.627l4.161 0q.969.057 1.539.627t.57 1.482zm14.592-2.109q2.052 0 2.052 2.109l0 37.506q0 1.995-2.052 2.109l-4.161 0q-.969-.057-1.539-.627t-.57-1.482l0-37.506q0-2.109 2.109-2.109l4.161 0zm10.431 49.248l0-61.731l-58.368 0l0 61.731q.057 2.679.969 3.819t1.083 1.14l54.207 0q.171 0 1.14-1.083t.969-3.876zm-43.776-70.11l29.184 0l-3.135-7.581q-.456-.57-1.14-.741l-20.634 0q-.627.114-1.083.741zm-31.293 2.109q0-1.995 2.109-2.109l20.121 0l4.56-10.83q.969-2.394 3.477-4.104 2.565-1.71 5.187-1.71l20.805 0q2.622 0 5.187 1.71t3.477 4.104l4.56 10.83l20.178 0q.912.057 1.482.627t.57 1.482l0 4.161q0 1.995-2.052 2.109l-6.27 0l0 61.731q0 5.415-3.078 9.348t-7.353 3.933l-54.207 0q-4.275 0-7.353-3.819t-3.078-9.177l0-62.016l-6.213 0q-.969 0-1.539-.57t-.57-1.539l0-4.161z",width:91.681,height:100},iconUndo:{path:"M10,6.6C10,7.2,9.8,8,9.3,9.1c0,0,0,0.1-0.1,0.1S9.2,9.3,9.2,9.4c0,0,0,0.1-0.1,0.1C9,9.6,9,9.6,8.9,9.6 c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1s0-0.1,0-0.1c0-0.3,0-0.5,0-0.7c0-0.4,0-0.7-0.1-1C8.6,7.1,8.5,6.9,8.4,6.7S8.2,6.3,8,6.1C7.8,5.9,7.6,5.8,7.4,5.7S6.9,5.5,6.7,5.5S6.1,5.4,5.8,5.4c-0.3,0-0.6,0-1,0H3.6v1.4c0,0.1,0,0.2-0.1,0.3C3.4,7.1,3.3,7.1,3.2,7.1C3.1,7.1,3,7.1,3,7L0.1,4.1C0,4.1,0,4,0,3.9s0-0.2,0.1-0.3L3,0.8C3,0.7,3.1,0.7,3.2,0.7c0.1,0,0.2,0,0.3,0.1C3.5,0.9,3.6,0.9,3.6,1v1.4h1.2c2.6,0,4.3,0.7,4.9,2.2C9.9,5.2,10,5.8,10,6.6z",width:10,height:10},iconMinus:{path:"M8,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L8,11 C7.44771525,11 7,11.4477153 7,12 C7,12.5522847 7.44771525,13 8,13 Z",width:24,height:24}}

});
KAdefine("javascript/perseus-all-package/init.js", function(require, module, exports) {
var $=require("jquery")
var Widgets=require("./widgets.js")
var init=function e(t){var r=t.skipMathJax
var s=t.loadExtraWidgets===undefined||t.loadExtraWidgets
var a=$.Deferred()
if(t.extraWidgets){Widgets.registerWidgets(t.extraWidgets)
a.resolve()}else if(s){require.dynimport("../perseus-merged-extra-widgets-package/extra-widgets.js").then(function(e){return e.default}).then(function(e){Widgets.registerWidgets(e)
a.resolve()})}else{a.resolve()}var i=$.Deferred()
if(r){i.resolve()}else{MathJax.Hub.Config({messageStyle:"none",skipStartupTypeset:"none","HTML-CSS":{availableFonts:["TeX"],imageFont:null,scale:100,showMathMenu:false}})
MathJax.Hub.Configured()
MathJax.Hub.Queue(i.resolve)}return a.then(function(){return i})}
module.exports=init

});
KAdefine("javascript/perseus-all-package/interactive2/interactive-util.js", function(require, module, exports) {
var _=require("underscore")
var MovableHelperMethods=require("./movable-helper-methods.js")
var prefixedTransform=null
function computePrefixedTransform(){var e=document.createElement("div")
var r=["transform","msTransform","MozTransform","WebkitTransform","OTransform"]
var n=null
_.each(r,function(r){if(typeof e.style[r]!=="undefined"){n=r}})
return n}var canUse3dTransform=null
function computeCanUse3dTransform(){var e=document.createElement("div")
var r=InteractiveUtil.getPrefixedTransform()
e.style[r]="translateZ(0px)"
return!!e.style[r]}var InteractiveUtil={assert:function e(r,n){if(!r){throw new Error("Assertion Error"+(n?": "+n:""))}},createGettersFor:function e(r,n){_.each(_.keys(n),function(e){if(r.prototype[e]===undefined){r.prototype[e]=function(){return this.state[e]}}})},addMovableHelperMethodsTo:function e(r){_.each(MovableHelperMethods,function(e,n){if(r.prototype[n]===undefined){r.prototype[n]=e}})},arrayify:function e(r){if(r==null){return[]}else if(_.isArray(r)){return _.filter(_.flatten(r),_.identity)}else{return[r]}},normalizeOptions:function e(r,n){var t=_.clone(n)
_.each(r,function(e){var r=n[e]
if(r!==undefined){var o=InteractiveUtil.arrayify(r)
t[e]=o}})
return t},getPrefixedTransform:function e(){prefixedTransform=prefixedTransform||computePrefixedTransform()
return prefixedTransform},getCanUse3dTransform:function e(){if(canUse3dTransform==null){canUse3dTransform=computeCanUse3dTransform()}return canUse3dTransform}}
module.exports=InteractiveUtil

});
KAdefine("javascript/perseus-all-package/interactive2/movable-helper-methods.js", function(require, module, exports) {
var _=require("underscore")
var kpoint=require("kmath").point
function getKey(e,t){return e+":"+t}function getEventName(e){return e.split(":")[0]}var MovableHelperMethods={_fireEvent:function e(t,i,n){_.invoke(t,"call",this,i,n)},_applyConstraints:function e(t,i,n){var r=this
var s=false
return _.reduce(this.state.constraints,function(e,t){if(e===false){return false}if(s){return e}var a=t.call(r,e,i,babelHelpers.extends({onSkipRemaining:function e(){s=true}},n))
if(a===false){return false}else if(kpoint.is(a,2)){return a}else if(a===true||a==null){return e}else{throw new Error("Constraint returned invalid result: "+a)}},t,this)},draw:function e(){var t=this.cloneState()
MovableHelperMethods._fireEvent.call(this,this.state.draw,t,this.prevState)
this.prevState=t},listen:function e(t,i,n){this._listenerMap=this._listenerMap||{}
var r=getKey(t,i)
var s=this._listenerMap[r]=this._listenerMap[r]||this.state[t].length
this.state[t][s]=n},unlisten:function e(t,i){this._listenerMap=this._listenerMap||{}
var n=getKey(t,i)
var r=this._listenerMap[n]
if(r!==undefined){this.state[t].splice(r,1)
delete this._listenerMap[n]
var s=_.keys(this._listenerMap)
_.each(s,function(e){if(getEventName(e)===t&&this._listenerMap[e]>r){this._listenerMap[e]--}},this)}}}
module.exports=MovableHelperMethods

});
KAdefine("javascript/perseus-all-package/interactive2/movable-line-options.js", function(require, module, exports) {
var _=require("underscore")
var WrappedLine=require("./wrapped-line.js")
var WrappedPath=require("./wrapped-path.js")
var kvector=require("kmath").vector
var kpoint=require("kmath").point
var KhanMath=require("../util/math.js")
var getScaledAngle=function r(t){var a=t.graphie.scalePoint(t.coord(0))
var e=t.graphie.scalePoint(t.coord(1))
return kvector.polarDegFromCart(kvector.subtract(e,a))[1]}
var getClipPoint=function r(t,a,e){var n=t.range[0][1]-t.range[0][0]
var i=t.range[1][1]-t.range[1][0]
var o=n+i
var s=t.unscaleVector(kvector.cartFromPolarDeg([1,e]))
var v=kvector.scale(kvector.normalize(s),o)
var d=kvector.add(a,v)
var c=kvector.polarDegFromCart(s)[1]
var h=t.constrainToBoundsOnAngle(d,4,c*Math.PI/180)
return h}
var createArrow=function r(t,a){var e=[.75,0]
var n=[[-3,4],[-2.75,2.5],[0,.25],e,[0,-.25],[-2.75,-2.5],[-3,-4]]
var i=1.4
n=_.map(n,function(r){var t=kvector.subtract(r,e)
var a=kvector.scale(t,i)
return kvector.add(e,a)})
var o=function r(t){var a="M"+t[0][0]+" "+t[0][1]
for(var e=1;e<t.length;e+=3){a+="C"+t[e][0]+" "+t[e][1]+" "+t[e+1][0]+" "+t[e+1][1]+" "+t[e+2][0]+" "+t[e+2][1]}return a}
var s=_.map(n,t.unscalePoint)
var v={center:t.unscalePoint(e),createPath:o}
var d=new WrappedPath(t,s,v)
d.attr(_.extend({"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":""},a))
d.toCoordAtAngle=function(r,a){var n=t.scalePoint(getClipPoint(t,r,a))
d.transform("translateX("+(n[0]+i*e[0])+"px) "+"translateY("+(n[1]+i*e[1])+"px) "+"translateZ(0) "+"rotate("+(360-KhanMath.bound(a))+"deg)")}
return d}
var add={draw:function r(){this.draw()},pointsToFront:function r(t){_.invoke(t.points,"toFront")}}
add.standard=[add.draw,add.pointsToFront]
var modify={draw:function r(){this.draw()}}
modify.standard=[modify.draw]
var draw={basic:function r(t){var a=this.graphie
var e=this.coord(0)
var n=this.coord(1)
if(!this.state.visibleShape){var i={thickness:10}
this.state.visibleShape=new WrappedLine(a,e,n,i)
this.state.visibleShape.attr(this.normalStyle())
this.state.visibleShape.toFront()
if(this.mouseTarget()){this.mouseTarget().toFront()}}var o=getScaledAngle(this)
if(t.extendLine){e=getClipPoint(a,e,360-o)
n=getClipPoint(a,n,(540-o)%360)}else if(t.extendRay){n=getClipPoint(a,n,360-o)}var s=[this.state.visibleShape]
if(this.mouseTarget()){s.push(this.mouseTarget())}_.each(s,function(r){r.moveTo(e,n)})},arrows:function r(t){if(this._arrows==null){this._arrows=[]
if(t.extendLine){this._arrows.push(createArrow(this.graphie,this.normalStyle()))
this._arrows.push(createArrow(this.graphie,this.normalStyle()))}else if(t.extendRay){this._arrows.push(createArrow(this.graphie,this.normalStyle()))}}var a=getScaledAngle(this)
var e=[360-a,(540-a)%360]
_.each(this._arrows,function(r,t){r.toCoordAtAngle(this.coord(t),e[t])},this)},highlight:function r(t,a){if(t.isHovering&&!a.isHovering){t.visibleShape.animate(t.highlightStyle,50)}else if(!t.isHovering&&a.isHovering){t.visibleShape.animate(t.normalStyle,50)}}}
draw.standard=[draw.basic,draw.arrows,draw.highlight]
var remove={basic:function r(){if(this.state.visibleShape){this.state.visibleShape.remove()}},arrows:function r(){if(this._arrows!=null){_.invoke(this._arrows,"remove")}this._arrows=null}}
remove.standard=[remove.basic,remove.arrows]
var constraints={fixed:function r(){return function(){return false}},snap:function r(t){return function(r,a){if(t===null){return true}var e=kvector.subtract(r,a)
t=t||this.graphie.snap
e=kpoint.roundTo(e,t)
return kvector.add(a,e)}},bound:function r(t,a,e){if(e===undefined){if(t===undefined){e=10}else{e=0}}return function(r,t){var n=this.graphie
var i=kvector.subtract(r,t)
var o=o||n.range
if(a===undefined){a=n.snap}var s=n.unscalePoint([e,n.ypixels-e])
var v=n.unscalePoint([n.xpixels-e,e])
if(a){s=kpoint.ceilTo(s,a)
v=kpoint.floorTo(v,a)}var d=_.map(this.coords(),function(r,t){var a=kvector.subtract(v,r)
var e=kvector.subtract(s,r)
return[e,a]})
var c=_.reduce(d,function(r,t){var a=t[0]
var e=t[1]
var n=Math.max(a[0],Math.min(e[0],r[0]))
var i=Math.max(a[1],Math.min(e[1],r[1]))
return[n,i]},i)
return kvector.add(t,c)}}}
constraints.standard=null
var onMove={updatePoints:function r(t,a){var e=kvector.subtract(t,a)
_.each(this.state.points,function(r){r.setCoord(kvector.add(r.coord(),e))})}}
onMove.standard=null
module.exports={add:add,modify:modify,draw:draw,remove:remove,onMoveStart:{standard:null},constraints:constraints,onMove:onMove,onMoveEnd:{standard:null}}

});
KAdefine("javascript/perseus-all-package/interactive2/movable-line.js", function(require, module, exports) {
var _=require("underscore")
var MovableLineOptions=require("./movable-line-options.js")
var WrappedLine=require("./wrapped-line.js")
var InteractiveUtil=require("./interactive-util.js")
var objective_=require("./objective_.js")
var assert=InteractiveUtil.assert
var normalizeOptions=InteractiveUtil.normalizeOptions
var kvector=require("kmath").vector
var KhanColors=require("../util/colors.js")
var FUNCTION_ARRAY_OPTIONS=["add","draw","remove","onMoveStart","constraints","onMove","onMoveEnd"]
var DEFAULT_PROPS={points:null,static:false,cursor:"move",normalStyle:null,highlightStyle:null,extendLine:false,extendRay:false}
var DEFAULT_STATE={visibleShape:null,mouseTarget:null}
var MovableLine=function e(t,o,i){assert(t!=null)
assert(i!=null)
_.extend(this,{graphie:t,movable:o,state:{id:_.uniqueId("movableLine")}})
this.modify(_.extend({},DEFAULT_STATE,i))}
_.extend(MovableLine,MovableLineOptions)
InteractiveUtil.createGettersFor(MovableLine,_.extend({},DEFAULT_PROPS,DEFAULT_STATE))
InteractiveUtil.addMovableHelperMethodsTo(MovableLine)
_.extend(MovableLine.prototype,{cloneState:function e(){return _.extend(this.movable.cloneState(),{coords:this.coords()},this.state)},_createDefaultState:function e(){return _.extend({id:this.state.id},normalizeOptions(FUNCTION_ARRAY_OPTIONS,objective_.pluck(MovableLineOptions,"standard")),DEFAULT_PROPS)},modify:function e(t){this.update(_.extend(this._createDefaultState(),t))},update:function e(t){var o=this
var i=this.graphie
var r=o.state=_.extend(o.state,normalizeOptions(FUNCTION_ARRAY_OPTIONS,t))
var a=r.static?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
r.normalStyle=_.extend({stroke:a,"stroke-width":2},r.normalStyle)
r.highlightStyle=_.extend({stroke:KhanColors.INTERACTING,"stroke-width":3},r.highlightStyle)
if(!r.static){if(!r.mouseTarget){var n={thickness:30,mouselayer:true}
r.mouseTarget=new WrappedLine(i,this.coord(0),this.coord(1),n)
r.mouseTarget.attr({fill:"#000",opacity:0})}}if(r.static&&r.mouseTarget){r.mouseTarget.remove()
r.mouseTarget=null}o.movable.modify(_.extend({},r,{mouseTarget:r.mouseTarget,add:null,modify:null,draw:o.draw.bind(o),remove:null,onMoveStart:function e(){o._initialRefCoord=o.coord(0)
o._prevRefCoord=o._initialRefCoord
o._totalDelta=[0,0]
o._fireEvent(o.state.onMoveStart,o.coord(0),o.coord(0))},onMove:function e(t,i){var r=kvector.subtract(t,i)
o._totalDelta=kvector.add(o._totalDelta,r)
var a=kvector.add(o._initialRefCoord,o._totalDelta)
a=o._applyConstraints(a,o._prevRefCoord)
if(a===false){return}o._fireEvent(o.state.onMove,a,o._prevRefCoord)
o._prevRefCoord=a},onMoveEnd:function e(){o._fireEvent(o.state.onMoveEnd,o._prevRefCoord,o._initialRefCoord)}}))
if(!r.added){o.prevState={}
o._fireEvent(r.add,o.cloneState(),o.prevState)
r.added=true
_.invoke(r.points,"listen","onMove",r.id,o.draw.bind(o))
o.prevState=o.cloneState()}o._fireEvent(r.modify,o.cloneState(),o.prevState)},coords:function e(){return _.invoke(this.state.points,"coord")},point:function e(t){return this.state.points[t]},coord:function e(t){return this.point(t).coord()},remove:function e(){this.state.added=false
this._fireEvent(this.state.remove)
if(this.points){_.invoke(this.points,"unlisten","onMove",this.state.id)}if(this.movable){this.movable.remove()}},toBack:function e(){this.movable.toBack()
if(this.state.visibleShape){this.state.visibleShape.toBack()}},toFront:function e(){if(this.state.visibleShape){this.state.visibleShape.toFront()}this.movable.toFront()},isHovering:function e(){return this.movable.isHovering()},isDragging:function e(){return this.movable.isDragging()},mouseTarget:function e(){return this.movable.mouseTarget()}})
module.exports=MovableLine

});
KAdefine("javascript/perseus-all-package/interactive2/movable-point-options.js", function(require, module, exports) {
var _=require("underscore")
var WrappedEllipse=require("./wrapped-ellipse.js")
var kpoint=require("kmath").point
var add={constrain:function i(){this.constrain()}}
add.standard=[add.constrain]
var modify={draw:function i(){this.draw()}}
modify.standard=[modify.draw]
var draw={basic:function i(t,a){var e=this.graphie
if(!this.state.visibleShape){var n=[this.pointSize()/e.scale[0],this.pointSize()/e.scale[1]]
var s={maxScale:Math.max(this.highlightStyle().scale,this.normalStyle().scale),padding:10,shadow:t.shadow}
this.state.visibleShape=new WrappedEllipse(e,this.coord(),n,s)
this.state.visibleShape.attr(_.omit(this.normalStyle(),"scale"))
this.state.visibleShape.toFront()
if(this.mouseTarget()){this.mouseTarget().toFront()}}if(t.normalStyle!==a.normalStyle&&!_.isEqual(t.normalStyle,a.normalStyle)){this.state.visibleShape.attr(this.normalStyle())}this.state.visibleShape.moveTo(this.coord())
if(this.mouseTarget()){this.mouseTarget().moveTo(this.coord())}},highlight:function i(t,a){if(t.isHovering&&!a.isHovering){t.visibleShape.animate(this.highlightStyle(),50)}else if(!t.isHovering&&a.isHovering){t.visibleShape.animate(this.normalStyle(),50)}}}
draw.standard=[draw.basic,draw.highlight]
var remove={basic:function i(){if(this.state.visibleShape){this.state.visibleShape.remove()
this.state.visibleShape=null}}}
remove.standard=remove.basic
var constraints={fixed:function i(){return function(){return false}},snap:function i(t){return function(i){if(t===null){return true}t=t||this.graphie.snap
return kpoint.roundTo(i,t)}},bound:function i(t,a,e){if(e===undefined){if(t===undefined){e=10}else{e=0}}return function(i,n,s){var r=this.graphie
t=t||r.range
if(a===undefined){a=r.snap}var o=r.unscalePoint([e,r.ypixels-e])
var l=r.unscalePoint([r.xpixels-e,e])
if(a){o=kpoint.ceilTo(o,a)
l=kpoint.floorTo(l,a)}if(!!s&&!!s.onOutOfBounds){if(i[0]>l[0]||i[0]<o[0]||i[1]>l[1]||i[1]<o[1]){s.onSkipRemaining()
s.onOutOfBounds()}return i}var d=Math.max(o[0],Math.min(l[0],i[0]))
var h=Math.max(o[1],Math.min(l[1],i[1]))
return[d,h]}}}
constraints.standard=null
module.exports={add:add,modify:modify,draw:draw,remove:remove,onMoveStart:{standard:null},constraints:constraints,onMove:{standard:null},onMoveEnd:{standard:null},onClick:{standard:null}}

});
KAdefine("javascript/perseus-all-package/interactive2/movable-point.jsx", function(require, module, exports) {
var _=require("underscore")
var MovablePointOptions=require("./movable-point-options.js")
var WrappedEllipse=require("./wrapped-ellipse.js")
var InteractiveUtil=require("./interactive-util.js")
var objective_=require("./objective_.js")
var assert=InteractiveUtil.assert
var normalizeOptions=InteractiveUtil.normalizeOptions
var kpoint=require("kmath").point
var kvector=require("kmath").vector
var KhanColors=require("../util/colors.js")
var processMath=require("../util/tex.js").processMath
var _require=require("../icon-paths.js"),iconTrash=_require.iconTrash
var React=require("react")
var ReactDOM=require("react-dom")
var InlineIcon=require("../components/inline-icon.jsx")
var FUNCTION_ARRAY_OPTIONS=_.keys(MovablePointOptions)
var DEFAULT_PROPS={coord:[0,0],pointSize:4,static:false,cursor:"move",normalStyle:null,highlightStyle:null,shadow:false,tooltip:false}
var DEFAULT_STATE={added:false,hasMoved:false,visibleShape:null,outOfBounds:false,mouseTarget:null,touchOffset:null}
var tooltipResetFunctions=[]
var MovablePoint=function t(e,o,i){_.extend(this,{graphie:e,movable:o,state:{id:_.uniqueId("movablePoint")}})
this.modify(_.extend({},DEFAULT_STATE,i))}
_.extend(MovablePoint,MovablePointOptions)
InteractiveUtil.createGettersFor(MovablePoint,_.extend({},DEFAULT_PROPS,DEFAULT_STATE))
InteractiveUtil.addMovableHelperMethodsTo(MovablePoint)
_.extend(MovablePoint.prototype,{cloneState:function t(){return _.extend(this.movable.cloneState(),this.state)},_createDefaultState:function t(){return _.extend({id:this.state.id},normalizeOptions(FUNCTION_ARRAY_OPTIONS,objective_.pluck(MovablePointOptions,"standard")),DEFAULT_PROPS)},modify:function t(e){this.update(_.extend(this._createDefaultState(),e))},_showTooltip:function t(e){var o=this
if(!this._tooltip){this._tooltip=document.createElement("div")
this._tooltip.className="tooltip-content"
this.state.visibleShape.wrapper.className="tooltip"
this.state.visibleShape.wrapper.appendChild(this._tooltip)
tooltipResetFunctions.push(function(){if(o.state.added){o._hideTooltip()}})}if(this._tooltip.firstChild){this._tooltip.removeChild(this._tooltip.firstChild)}this.state.visibleShape.wrapper.className="tooltip visible"
this._tooltip.appendChild(document.createElement("span"))
if(typeof e==="string"){processMath(this._tooltip.firstChild,e,false)}else if(typeof e==="function"){e(this._tooltip.firstChild)}else{this._tooltip.firstChild.appendChild(e)}},_hideTooltip:function t(){if(this._tooltip){this.state.visibleShape.wrapper.className="tooltip"}},update:function t(e){var o=this
var i=this
var s=i.graphie
var a=_.extend(i.state,normalizeOptions(FUNCTION_ARRAY_OPTIONS,e))
assert(kpoint.is(a.coord))
var r=a.static?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
a.normalStyle=_.extend({fill:r,stroke:r,scale:1},a.normalStyle)
a.highlightStyle=_.extend({fill:KhanColors.INTERACTING,stroke:KhanColors.INTERACTING,scale:2},a.highlightStyle)
if(!a.static){if(!a.mouseTarget){var n=i.state.coord
var l=s.unscaleVector(24)
var h={mouselayer:true,padding:0}
a.mouseTarget=new WrappedEllipse(s,n,l,h)
a.mouseTarget.attr({fill:"#000",opacity:0})}}var d=function t(){o._showTooltip(function(t){ReactDOM.render(React.createElement("span",{style:{fontSize:"2em"}},React.createElement(InlineIcon,babelHelpers.extends({},iconTrash,{style:{position:"static",color:KhanColors.INTERACTIVE,marginLeft:9,marginRight:9}}))),t)})}
var c=a.coord
i.movable.modify(_.extend({},a,{add:null,modify:null,draw:i.draw.bind(i),remove:null,onMoveStart:function t(e){a.hasMoved=false
c=a.coord
if(a.touchOffset==null){var s=!("ontouchstart"in window)
a.touchOffset=s?[0,0]:kvector.subtract(c,e)}var r=a.visibleShape.wrapper
if(a.shadow){var n="none"
r.style.webkitFilter=n
r.style.filter=n}if(a.showHairlines){a.showHairlines(a.coord)}tooltipResetFunctions.forEach(function(t){return t()})
if(a.tooltip){if(a.xOnlyTooltip){o._showTooltip(""+a.coord[0])}else{o._showTooltip("("+a.coord[0]+", "+a.coord[1]+")")}if(a.shadow){var l=r.getElementsByClassName("tooltip-content")[0]
var h="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
l.style.webkitFilter=h
l.style.filter=h}}i._fireEvent(a.onMoveStart,c,c)
i.draw()},onMove:function t(e,s){var r=kvector.add(e,a.touchOffset)
i.moveTo(r)
if(a.showHairlines){if(!o.state.outOfBounds){a.showHairlines(a.coord)}else{a.hideHairlines()}}if(a.tooltip){if(!o.state.outOfBounds){if(a.xOnlyTooltip){o._showTooltip(""+a.coord[0])}else{o._showTooltip("("+a.coord[0]+", "+a.coord[1]+")")}}}if(a.onRemove&&o.state.outOfBounds){d()}},onMoveEnd:function t(){if(i.isHovering()&&!a.hasMoved){i._fireEvent(a.onClick,a.coord,c)}var e=a.visibleShape.wrapper
if(a.shadow){var s="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
e.style.webkitFilter=s
e.style.filter=s}if(a.hideHairlines){a.hideHairlines()}if(a.hasMoved){o._hideTooltip()}else if(a.onRemove){d()
var r=e.getElementsByClassName("tooltip-content")[0]
r.style.webkitFilter="none"
r.style.filter="none"
o._tooltip.firstChild.addEventListener("touchstart",function(t){t.stopPropagation()},true)
o._tooltip.firstChild.addEventListener("touchend",function(t){a.onRemove()
t.stopPropagation()},true)}else if(a.tooltip){o._hideTooltip()}if(a.outOfBounds){a.onRemove()}i._fireEvent(a.onMoveEnd,a.coord,c)
a.hasMoved=false
a.touchOffset=null
i.draw()}}))
if(!a.added){i.prevState={}
i._fireEvent(a.add,i.cloneState(),i.prevState)
a.added=true
i.prevState=i.cloneState()}i._fireEvent(a.modify,i.cloneState(),i.prevState)},remove:function t(){this.state.added=false
this._fireEvent(this.state.remove)
if(this.movable){this.movable.remove()}this.state.mouseTarget=null},constrain:function t(){var e=this._applyConstraints(this.coord(),this.coord())
if(kpoint.is(e)){this.setCoord(e)}return e!==false},setCoord:function t(e){assert(kpoint.is(e,2))
this.state.coord=_.clone(e)
this.draw()},setCoordConstrained:function t(e){assert(kpoint.is(e,2))
var o=this._applyConstraints(e,this.coord())
if(o!==false){this.state.coord=_.clone(o)
this.draw()}},moveTo:function t(e){var o=this
var i=this.state
this.state.outOfBounds=false
var s=this._applyConstraints(e,i.coord,i.onRemove?{onOutOfBounds:function t(){o.state.outOfBounds=true}}:{})
if(s===false){return}else if(kpoint.is(s)){e=s}if(!kpoint.equal(e,i.coord)){var a=i.coord
i.coord=e
i.hasMoved=true
this._fireEvent(i.onMove,i.coord,a)
this.draw()}},normalStyle:function t(){return _.clone(this.state.normalStyle)},highlightStyle:function t(){return _.clone(this.state.highlightStyle)},toBack:function t(){this.movable.toBack()
if(this.state.visibleShape){this.state.visibleShape.toBack()}},toFront:function t(){if(this.state.visibleShape){this.state.visibleShape.toFront()}this.movable.toFront()},isHovering:function t(){return this.movable.isHovering()},isDragging:function t(){return this.movable.isDragging()},mouseTarget:function t(){return this.movable.mouseTarget()},grab:function t(e){this.state.touchOffset=[0,0]
this.movable.grab(e)
this.moveTo(e)}})
module.exports=MovablePoint

});
KAdefine("javascript/perseus-all-package/interactive2/movable-polygon-options.js", function(require, module, exports) {
var _=require("underscore")
var kpoint=require("kmath").point
var kvector=require("kmath").vector
function sum(e){return _.reduce(e,function(e,t){return e+t},0)}function clockwise(e){var t=_.zip(e,e.slice(1).concat(e.slice(0,1)))
var a=_.map(t,function(e){var t=e[0]
var a=e[1]
return(a[0]-t[0])*(a[1]+t[1])})
return sum(a)>0}var add={constrain:function e(){this.constrain()},pointsToFront:function e(t){_.invoke(t.points,"toFront")}}
add.standard=[add.constrain,add.pointsToFront]
var modify={draw:function e(){this.draw()}}
modify.standard=[modify.draw]
var draw={basic:function e(t,a){var n=this.graphie
var i=this.path(t)
if(!this.state.visibleShape){this.state.visibleShape=n.raphael.path(i)
this.state.visibleShape.attr(this.normalStyle())}if(t.normalStyle!==a.normalStyle&&!_.isEqual(t.normalStyle,a.normalStyle)){this.state.visibleShape.attr(this.normalStyle())}this.state.visibleShape.attr({path:i})
if(this.mouseTarget()){this.mouseTarget().attr({path:i})}},labels:function e(t,a){var n=this.graphie
var i=this
var l=_.invoke(t.points,"coord")
var r=clockwise(l)
var s=l.length
if(i.state._labelCache!=null){_.invoke(i.state._labelCache,"remove")}i.state._labelCache=[]
if(t.angleLabels.length||t.showRightAngleMarkers.length){if(i.state._labeledAngles==null){i.state._labeledAngles=_.times(Math.max(t.angleLabels.length,t.showRightAngleMarkers.length),function(){return n.label([0,0],"","center",t.labelStyle)})}_.each(i.state._labeledAngles,function(e,a){i.state._labelCache.push(n.labelAngle({point1:l[(a-1+s)%s],vertex:l[a],point3:l[(a+1)%s],label:e,text:t.angleLabels[a],showRightAngleMarker:t.showRightAngleMarkers[a],numArcs:t.numArcs[a],clockwise:r,style:t.labelStyle}))})}if(t.sideLabels.length){if(i.state._labeledSides==null){i.state._labeledSides=_.map(t.sideLabels,function(e){return n.label([0,0],"","center",t.labelStyle)})}_.each(i.state._labeledSides,function(e,a){i.state._labelCache.push(n.labelSide({point1:l[a],point2:l[(a+1)%s],label:e,text:t.sideLabels[a],numArrows:t.numArrows[a],numTicks:t.numTicks[a],clockwise:r,style:t.labelStyle}))})}if(t.vertexLabels.length){if(i.state._labeledVertices==null){i.state._labeledVertices=_.map(t.vertexLabels,function(e){return n.label([0,0],"","center",t.labelStyle)})}_.each(i.state._labeledVertices,function(e,a){i.state._labelCache.push(n.labelVertex({point1:l[(a-1+s)%s],vertex:l[a],point3:l[(a+1)%s],label:e,text:t.vertexLabels[a],clockwise:r,style:t.labelStyle}))})}i.state._labelCache=_.flatten(i.state._labelCache)},highlight:function e(t,a){if(t.isHovering&&!a.isHovering){t.visibleShape.animate(this.highlightStyle(),50)}else if(!t.isHovering&&a.isHovering){t.visibleShape.animate(this.normalStyle(),50)}}}
draw.standard=[draw.basic,draw.labels,draw.highlight]
var remove={basic:function e(){if(this.state.visibleShape){this.state.visibleShape.remove()}},labels:function e(){var e=[this.state._labeledSides,this.state._labeledVertices,this.state._labeledAngles,this.state._labelCache]
_.each(e,function(e){if(e!=null&&e.length){_.invoke(e,"remove")}})}}
remove.standard=[remove.basic,remove.labels]
var constraints={fixed:function e(){return function(){return false}},snap:function e(t){return function(e){if(t===null){return true}t=t||this.graphie.snap
return kpoint.roundTo(e,t)}},bound:function e(t,a,n){if(n===undefined){if(t===undefined){n=10}else{n=0}}return function(e,t){var i=this.graphie
var l=kvector.subtract(e,t)
var r=r||i.range
if(a===undefined){a=i.snap}var s=i.unscalePoint([n,i.ypixels-n])
var o=i.unscalePoint([i.xpixels-n,n])
if(a){s=kpoint.ceilTo(s,a)
o=kpoint.floorTo(o,a)}var c=_.map(this.coords(),function(e,t){var a=kvector.subtract(o,e)
var n=kvector.subtract(s,e)
return[n,a]})
var h=_.reduce(c,function(e,t){var a=t[0]
var n=t[1]
var i=Math.max(a[0],Math.min(n[0],e[0]))
var l=Math.max(a[1],Math.min(n[1],e[1]))
return[i,l]},l)
return kvector.add(t,h)}}}
constraints.standard=null
var onMove={updatePoints:function e(t,a){var n=kvector.subtract(t,a)
_.each(this.state.points,function(e){e.setCoord(kvector.add(e.coord(),n))})}}
onMove.standard=null
module.exports={add:add,modify:modify,draw:draw,remove:remove,onMoveStart:{standard:null},constraints:constraints,onMove:onMove,onMoveEnd:{standard:null},onClick:{standard:null}}

});
KAdefine("javascript/perseus-all-package/interactive2/movable-polygon.js", function(require, module, exports) {
var kvector=require("kmath").vector
var _=require("underscore")
var MovablePolygonOptions=require("./movable-polygon-options.js")
var InteractiveUtil=require("./interactive-util.js")
var objective_=require("./objective_.js")
var assert=InteractiveUtil.assert
var normalizeOptions=InteractiveUtil.normalizeOptions
var KhanColors=require("../util/colors.js")
var GraphUtils=require("../util/graph-utils.js")
var FUNCTION_ARRAY_OPTIONS=_.keys(MovablePolygonOptions)
var DEFAULT_PROPS={points:null,angleLabels:[],showRightAngleMarkers:[],sideLabels:[],vertexLabels:[],numArcs:[],numArrows:[],numTicks:[],closed:true,static:false,cursor:"move",normalStyle:null,highlightStyle:null,labelStyle:null}
var DEFAULT_STATE={added:false,hasMoved:false,visibleShape:null,mouseTarget:null}
var MovablePolygon=function t(e,o,i){assert(e!=null)
assert(i!=null)
_.extend(this,{graphie:e,movable:o,state:{id:_.uniqueId("movablePolygon")}})
this.modify(_.extend({},DEFAULT_STATE,i))}
_.extend(MovablePolygon,MovablePolygonOptions)
InteractiveUtil.createGettersFor(MovablePolygon,_.extend({},DEFAULT_PROPS,DEFAULT_STATE))
InteractiveUtil.addMovableHelperMethodsTo(MovablePolygon)
_.extend(MovablePolygon.prototype,{cloneState:function t(){return _.extend(this.movable.cloneState(),this.state)},_createDefaultState:function t(){return _.extend({id:this.state.id},normalizeOptions(FUNCTION_ARRAY_OPTIONS,objective_.pluck(MovablePolygonOptions,"standard")),DEFAULT_PROPS)},modify:function t(e){this.update(_.extend(this._createDefaultState(),e))},update:function t(e){var o=this
var i=o.graphie
var a=_.extend(o.state,normalizeOptions(FUNCTION_ARRAY_OPTIONS,e))
var n=a.static?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
a.normalStyle=_.extend({},a.normalStyle,{"stroke-width":2,"fill-opacity":0,fill:n,stroke:n},e.normalStyle)
a.highlightStyle=_.extend({},{stroke:KhanColors.INTERACTING,"stroke-width":2,fill:KhanColors.INTERACTING,"fill-opacity":.05},a.highlightStyle)
a.labelStyle=_.extend({},{stroke:KhanColors.DYNAMIC,"stroke-width":1,color:KhanColors.DYNAMIC},a.labelStyle)
if(!a.static){if(!a.mouseTarget){a.mouseTarget=i.mouselayer.path(this.path())
a.mouseTarget.attr({fill:"#000",opacity:0,cursor:"move"})}}o.movable.modify(_.extend({},a,{modify:null,draw:o.draw.bind(o),remove:null,onMoveStart:function t(){o._initialRefCoord=o.coord(0)
o._prevRefCoord=o._initialRefCoord
o._totalDelta=[0,0]
o._fireEvent(o.state.onMoveStart,o.coord(0),o.coord(0))},onMove:function t(e,i){var a=kvector.subtract(e,i)
o._totalDelta=kvector.add(o._totalDelta,a)
var n=kvector.add(o._initialRefCoord,o._totalDelta)
n=o._applyConstraints(n,o._prevRefCoord)
if(n===false){return}o._fireEvent(o.state.onMove,n,o._prevRefCoord)
o._prevRefCoord=n},onMoveEnd:function t(){o._fireEvent(o.state.onMoveEnd,o._prevRefCoord,o._initialRefCoord)}}))
_.invoke(a.points,"listen","onMove",a.id,o.draw.bind(o))
if(!a.added){o.prevState={}
o._fireEvent(a.add,o.cloneState(),o.prevState)
a.added=true
o.prevState=o.cloneState()}o._fireEvent(a.modify,o.cloneState(),o.prevState)},path:function t(e){var o=this.graphie
e=e||this.state
var i=_.map(e.points,function(t){return o.scalePoint(t.coord())})
if(e.closed){i.push(true)}else{i=i.concat(_.clone(i).reverse())}return GraphUtils.unscaledSvgPath(i)},coords:function t(){return _.invoke(this.state.points,"coord")},point:function t(e){return this.state.points[e]},coord:function t(e){return this.point(e).coord()},remove:function t(){this.state.added=false
this._fireEvent(this.state.remove)
if(this.state.points){_.invoke(this.state.points,"unlisten","onMove",this.state.id)}if(this.movable){this.movable.remove()}this.state.mouseTarget=null},constrain:function t(){if(this.points==null||this.points.length===0){return}var e=this.coord(0)
var o=this._applyConstraints(e,e)
if(o!==false){this._fireEvent(this.state.onMove,o,e)}},normalStyle:function t(){return _.clone(this.state.normalStyle)},highlightStyle:function t(){return _.clone(this.state.highlightStyle)},toBack:function t(){this.movable.toBack()
if(this.state.visibleShape){this.state.visibleShape.toBack()}},toFront:function t(){if(this.state.visibleShape){this.state.visibleShape.toFront()}this.movable.toFront()},isHovering:function t(){return this.movable.isHovering()},isDragging:function t(){return this.movable.isDragging()},mouseTarget:function t(){return this.movable.mouseTarget()}})
module.exports=MovablePolygon

});
KAdefine("javascript/perseus-all-package/interactive2/movable.js", function(require, module, exports) {
var _=require("underscore")
var $=require("jquery")
var InteractiveUtil=require("./interactive-util.js")
var normalizeOptions=InteractiveUtil.normalizeOptions
var assert=InteractiveUtil.assert
var kpoint=require("kmath").point
var FUNCTION_ARRAY_OPTIONS=["add","modify","draw","remove","onMoveStart","onMove","onMoveEnd","onClick"]
var DEFAULT_PROPS={cursor:null}
var DEFAULT_STATE={added:false,isHovering:false,isMouseOver:false,isDragging:false,mouseTarget:null}
var Movable=function e(t,r){_.extend(this,{graphie:t,state:{id:_.uniqueId("movable")}})
this.modify(_.extend({},DEFAULT_STATE,r))}
InteractiveUtil.createGettersFor(Movable,_.extend({},DEFAULT_PROPS,DEFAULT_STATE))
InteractiveUtil.addMovableHelperMethodsTo(Movable)
_.extend(Movable.prototype,{cloneState:function e(){return _.clone(this.state)},_createDefaultState:function e(){return _.extend({id:this.state.id,add:[],modify:[],draw:[],remove:[],onMoveStart:[],onMove:[],onMoveEnd:[],onClick:[]},DEFAULT_PROPS)},modify:function e(t){this.update(_.extend({},this._createDefaultState(),t))},grab:function e(t){assert(kpoint.is(t))
var r=this
var a=r.graphie
var o=r.state
o.isHovering=true
o.isDragging=true
a.isDragging=true
var i=t
var n=i
r._fireEvent(o.onMoveStart,i,i)
var s=function e(t){t.preventDefault()
var i=a.getMouseCoord(t)
r._fireEvent(o.onMove,i,n)
r.draw()
n=i}
var u=function e(t){$(document).unbind("vmousemove",s)
$(document).unbind("vmouseup",e)
if(o.isHovering){r._fireEvent(o.onClick,n,i)}o.isHovering=r.state.isMouseOver
o.isDragging=false
a.isDragging=false
r._fireEvent(o.onMoveEnd,n,i)
r.draw()}
$(document).bind("vmousemove",s)
$(document).bind("vmouseup",u)},update:function e(t){var r=this
var a=r.graphie
var o=r.cloneState()
var i=_.extend(r.state,normalizeOptions(FUNCTION_ARRAY_OPTIONS,t))
if(i.mouseTarget&&!o.mouseTarget){var n=void 0
if(i.mouseTarget.getMouseTarget){n=$(i.mouseTarget.getMouseTarget())}else{n=$(i.mouseTarget[0])}var s=!("ontouchstart"in window)
if(s){n.on("vmouseover",function(){i.isMouseOver=true
if(!a.isDragging){i.isHovering=true}if(r.state.added){r.draw()}})
n.on("vmouseout",function(){i.isMouseOver=false
if(!i.isDragging){i.isHovering=false}if(r.state.added){r.draw()}})}n[0].addEventListener("touchstart",function(e){e.preventDefault()},{passive:false})
n.on("vmousedown",function(e){if(e.which!==0&&e.which!==1){return}e.preventDefault()
var t=a.getMouseCoord(e)
r.grab(t)})}if(i.mouseTarget&&i.cursor!==undefined){var u=void 0
if(i.mouseTarget.getMouseTarget){u=$(i.mouseTarget.getMouseTarget())}else{u=$(i.mouseTarget[0])}u.css("cursor",i.cursor||"")}if(!i.added){r._fireEvent(i.modify,r.cloneState(),{})
i.added=true
r.prevState=r.cloneState()}r._fireEvent(i.modify,r.cloneState(),r.prevState)},remove:function e(){this.state.added=false
this._fireEvent(this.state.remove)
if(this.state.mouseTarget){$(this.state.mouseTarget).off()
this.state.mouseTarget.remove()
this.state.mouseTarget=null}},toBack:function e(){if(this.state.mouseTarget){this.state.mouseTarget.toBack()}},toFront:function e(){if(this.state.mouseTarget){this.state.mouseTarget.toFront()}}})
module.exports=Movable

});
KAdefine("javascript/perseus-all-package/interactive2/objective_.js", function(require, module, exports) {
var _=require("underscore")
var pluck=function r(e,c){return _.object(_.map(e,function(r,e){return[e,r[c]]}))}
var mapObject=function r(e,c){var a={}
_.each(_.keys(e),function(r){a[r]=c(e[r],r)})
return a}
var mapObjectFromArray=function r(e,c){var a={}
_.each(e,function(r){a[r]=c(r)})
return a}
module.exports={pluck:pluck,mapObject:mapObject,mapObjectFromArray:mapObjectFromArray}

});
KAdefine("javascript/perseus-all-package/interactive2/wrapped-defaults.js", function(require, module, exports) {
var _=require("underscore")
var InteractiveUtil=require("./interactive-util.js")
var objective_=require("./objective_.js")
var kvector=require("kmath").vector
var $=require("jquery")
var PASS_TO_RAPHAEL=["attr","animate"]
var WrappedDefaults=_.extend({transform:function e(r){var t=InteractiveUtil.getPrefixedTransform()
this.wrapper.style[t]=r},toFront:function e(){var r=this.wrapper.parentNode
if(r){r.appendChild(this.wrapper)}},toBack:function e(){var r=this.wrapper.parentNode
if(r.firstChild!==this.wrapper){r.insertBefore(this.wrapper,r.firstChild)}},remove:function e(){this.visibleShape.remove()
$(this.wrapper).remove()},getMouseTarget:function e(){return this.visibleShape[0]},moveTo:function e(r){var t=kvector.subtract(this.graphie.scalePoint(r),this.graphie.scalePoint(this.initialPoint))
var i=InteractiveUtil.getCanUse3dTransform()
var a="translateX("+t[0]+"px) "+"translateY("+t[1]+"px)"+(i?" translateZ(0)":"")
this.transform(a)},hide:function e(){this.visibleShape.hide()},show:function e(){this.visibleShape.show()}},objective_.mapObjectFromArray(PASS_TO_RAPHAEL,function(e){return function(){var r;(r=this.visibleShape)[e].apply(r,arguments)}}))
module.exports=WrappedDefaults

});
KAdefine("javascript/perseus-all-package/interactive2/wrapped-ellipse.js", function(require, module, exports) {
var _=require("underscore")
var WrappedDefaults=require("./wrapped-defaults.js")
var InteractiveUtil=require("./interactive-util.js")
var kvector=require("kmath").vector
var DEFAULT_OPTIONS={maxScale:1,mouselayer:false,shadow:false,disableMouseEventsOnWrapper:false}
var WrappedEllipse=function e(r,a,t,i){i=_.extend({},DEFAULT_OPTIONS,i)
var s=r.fixedEllipse(a,t,i.maxScale,i.padding)
_.extend(this,s,{graphie:r,initialPoint:a})
if(i.mouselayer){this.wrapper.style.touchAction="none"
this.graphie.addToMouseLayerWrapper(this.wrapper)}else{this.graphie.addToVisibleLayerWrapper(this.wrapper)}if(i.shadow){var p="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
var l=this.wrapper
l.style.webkitFilter=p
l.style.filter=p
this.moveTo=function(e){var r=kvector.subtract(this.graphie.scalePoint(e),this.graphie.scalePoint(this.initialPoint))
var a=InteractiveUtil.getCanUse3dTransform()
var t="translateX("+Math.round(r[0])+"px) "+"translateY("+Math.round(r[1])+"px)"+(a?" translateZ(0)":"")
this.transform(t)}}if(i.disableMouseEventsOnWrapper){this.wrapper.style.pointerEvents="none"
this.visibleShape.node.style.pointerEvents="auto"}}
_.extend(WrappedEllipse.prototype,WrappedDefaults)
module.exports=WrappedEllipse

});
KAdefine("javascript/perseus-all-package/interactive2/wrapped-line.js", function(require, module, exports) {
var _=require("underscore")
var InteractiveUtil=require("./interactive-util.js")
var WrappedDefaults=require("./wrapped-defaults.js")
var kpoint=require("kmath").point
var kvector=require("kmath").vector
var KhanMath=require("../util/math.js")
var DEFAULT_OPTIONS={thickness:2,mouselayer:false}
var WrappedLine=function e(t,a,r,i){i=_.extend({},DEFAULT_OPTIONS,i)
var n=[t.range[0][0],0]
var s=[t.range[0][1],0]
_.extend(this,t.fixedLine(n,s,i.thickness))
this.visibleShape.attr(i.normalStyle)
_.extend(this,{graphie:t,initialPoint:t.scalePoint(n),initialLength:kpoint.distanceToPoint(t.scalePoint(n),t.scalePoint(s))})
if(i.mouselayer){this.wrapper.style.touchAction="none"
this.graphie.addToMouseLayerWrapper(this.wrapper)}else{this.graphie.addToVisibleLayerWrapper(this.wrapper)}this.moveTo(a,r)}
_.extend(WrappedLine.prototype,WrappedDefaults,{getMouseTarget:function e(){return this.wrapper},moveTo:function e(t,a){var r=this.graphie.scalePoint(t)
var i=this.graphie.scalePoint(a)
var n=kvector.polarDegFromCart(kvector.subtract(i,r))
var s=n[0]
var o=KhanMath.bound(n[1])
var p=kvector.subtract(r,this.initialPoint)
var h=KhanMath.bound(s/this.initialLength)
var l=InteractiveUtil.getCanUse3dTransform()
var v="translateX("+p[0]+"px) "+"translateY("+p[1]+"px) "+(l?" translateZ(0)":"")+"rotate("+o+"deg) "+"scaleX("+h+") scaleY(1)"
this.transform(v)}})
module.exports=WrappedLine

});
KAdefine("javascript/perseus-all-package/interactive2/wrapped-path.js", function(require, module, exports) {
var _=require("underscore")
var WrappedDefaults=require("./wrapped-defaults.js")
var DEFAULT_OPTIONS={center:null,createPath:null,mouselayer:false}
var WrappedPath=function e(a,r,t){t=_.extend({},DEFAULT_OPTIONS,t)
_.extend(this,a.fixedPath(r,t.center,t.createPath))
_.extend(this,{graphie:a,initialPoint:a.scalePoint(_.head(r))})
if(t.mouselayer){this.wrapper.style.touchAction="none"
this.graphie.addToMouseLayerWrapper(this.wrapper)}else{this.graphie.addToVisibleLayerWrapper(this.wrapper)}}
_.extend(WrappedPath.prototype,WrappedDefaults)
module.exports=WrappedPath

});
KAdefine("javascript/perseus-all-package/interactive2.js", function(require, module, exports) {
var Movable=require("./interactive2/movable.js")
var MovablePoint=require("./interactive2/movable-point.jsx")
var MovableLine=require("./interactive2/movable-line.js")
var MovablePolygon=require("./interactive2/movable-polygon.js")
var KhanColors=require("./util/colors.js")
var Interactive2={MovablePoint:MovablePoint,addMovablePoint:function e(o,a){var i=new Movable(o,{})
return new MovablePoint(o,i,a)},MovableLine:MovableLine,addMovableLine:function e(o,a){var i=new Movable(o,{})
return new MovableLine(o,i,a)},MovablePolygon:MovablePolygon,addMovablePolygon:function e(o,a){var i=new Movable(o,{})
return new MovablePolygon(o,i,a)},addMaybeMobileMovablePoint:function e(o,a){var i=o.props.apiOptions.isMobile
var l=i?{stroke:"#ffffff","stroke-width":3,fill:KhanColors.INTERACTIVE}:{stroke:KhanColors.INTERACTIVE,fill:KhanColors.INTERACTIVE}
var n=Object.assign(l,a.normalStyle)
var r=Object.assign(i?babelHelpers.extends({},l,{"stroke-width":0,scale:.75}):{},a.highlightStyle)
var t=Object.assign({normalStyle:n,highlightStyle:r,shadow:i,tooltip:i&&o.props.showTooltips,showHairlines:o.showHairlines,hideHairlines:o.hideHairlines},i?{pointSize:7}:{})
return Interactive2.addMovablePoint(o.graphie,Object.assign(a,t))}}
module.exports=Interactive2

});
KAdefine("javascript/perseus-all-package/item-renderer.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _reactDom=require("react-dom")
var ReactDOM=babelHelpers.interopRequireWildcard(_reactDom)
var _underscore=require("underscore")
var _underscore2=babelHelpers.interopRequireDefault(_underscore)
var _jquery=require("jquery")
var _jquery2=babelHelpers.interopRequireDefault(_jquery)
var _perseusApi=require("./perseus-api.jsx")
var _hintsRenderer=require("./hints-renderer.jsx")
var _hintsRenderer2=babelHelpers.interopRequireDefault(_hintsRenderer)
var _renderer=require("./renderer.jsx")
var _renderer2=babelHelpers.interopRequireDefault(_renderer)
var _provideKeypad=require("./mixins/provide-keypad.jsx")
var _provideKeypad2=babelHelpers.interopRequireDefault(_provideKeypad)
var _util=require("./util.js")
var _util2=babelHelpers.interopRequireDefault(_util)
var _objective_=require("./interactive2/objective_.js")
var _gorgon=require("./gorgon/gorgon.js")
var _gorgon2=babelHelpers.interopRequireDefault(_gorgon)
var _proptypes=require("./gorgon/proptypes.js")
var ItemRenderer=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var i=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
i._handleFocusChange=function(e,t){if(e!=null){i._setCurrentFocus(e)}else{i._onRendererBlur(t)}}
i.handleInteractWithWidget=function(e){var t=_underscore2.default.difference(i.state.questionHighlightedWidgets,[e])
i.setState({questionCompleted:false,questionHighlightedWidgets:t})
if(i.props.apiOptions.interactionCallback){i.props.apiOptions.interactionCallback()}}
i.state=babelHelpers.extends({},_provideKeypad2.default.getInitialState.call(i),{hintsVisible:r.initialHintsVisible,questionCompleted:false,questionHighlightedWidgets:[]})
return i}t.prototype.componentDidMount=function e(){_provideKeypad2.default.componentDidMount.call(this)
if(this.props.controlPeripherals&&this.props.apiOptions.setDrawingAreaAvailable){this.props.apiOptions.setDrawingAreaAvailable(true)}this._currentFocus=null
this.update()}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){this.setState({questionHighlightedWidgets:[]})}
t.prototype.componentDidUpdate=function e(){this.update()}
t.prototype.componentWillUnmount=function e(){_provideKeypad2.default.componentWillUnmount.call(this)
ReactDOM.unmountComponentAtNode(document.querySelector(this.props.workAreaSelector))
ReactDOM.unmountComponentAtNode(document.querySelector(this.props.hintsAreaSelector))
if(this.props.controlPeripherals){var t=this.props.item.answerArea||{}
if(t.calculator){(0,_jquery2.default)("#calculator").hide()}if(t.periodicTable){(0,_jquery2.default)(".periodic-table-info-box").hide()}if(t.zTable){(0,_jquery2.default)(".z-table-info-box").hide()}if(t.tTable){(0,_jquery2.default)(".t-table-info-box").hide()}if(t.chi2Table){(0,_jquery2.default)(".chi2-table-info-box").hide()}}}
t.prototype.keypadElement=function e(){return _provideKeypad2.default.keypadElement.call(this)}
t.prototype.update=function e(){var t=this
var r=babelHelpers.extends({},_perseusApi.Options.defaults,this.props.apiOptions,{onFocusChange:this._handleFocusChange})
var i=document.querySelector(this.props.workAreaSelector)
var o=document.querySelector(this.props.hintsAreaSelector)
if(!i||!o){return}ReactDOM.render(React.createElement(_renderer2.default,babelHelpers.extends({ref:function e(i){if(!i){return}t.questionRenderer=i
if(r.answerableCallback){var o=t.questionRenderer.emptyWidgets().length===0
r.answerableCallback(o)}},keypadElement:this.keypadElement(),problemNum:this.props.problemNum,onInteractWithWidget:this.handleInteractWithWidget,highlightedWidgets:this.state.questionHighlightedWidgets,apiOptions:r,questionCompleted:this.state.questionCompleted,reviewMode:this.props.reviewMode,savedState:this.props.savedState,linterContext:_gorgon2.default.pushContextStack(this.props.linterContext,"question")},this.props.item.question,{legacyPerseusLint:this.props.legacyPerseusLint})),i)
ReactDOM.render(React.createElement(_hintsRenderer2.default,{ref:function e(r){if(!r){return}t.hintsRenderer=r},hints:this.props.item.hints,hintsVisible:this.state.hintsVisible,apiOptions:r,linterContext:_gorgon2.default.pushContextStack(this.props.linterContext,"hints")}),o)
var n=this.props.item.answerArea||{}
if(this.props.controlPeripherals){(0,_jquery2.default)("#calculator").toggle(n.calculator||false);(0,_jquery2.default)(".periodic-table-info-box").toggle(n.periodicTable||false);(0,_jquery2.default)(".z-table-info-box").toggle(n.zTable||false);(0,_jquery2.default)(".t-table-info-box").toggle(n.tTable||false);(0,_jquery2.default)(".chi2-table-info-box").toggle(n.chi2Table||false)}else{if(n.calculator){this.props.onShowCalculator&&this.props.onShowCalculator()}if(n.periodicTable){this.props.onShowPeriodicTable&&this.props.onShowPeriodicTable()}if(n.zTable){this.props.onShowZTable&&this.props.onShowZTable()}if(n.tTable){this.props.onShowTTable&&this.props.onShowTTable()}if(n.chi2Table){this.props.onShowChi2Table&&this.props.onShowChi2Table()}}}
t.prototype._setCurrentFocus=function e(t){var r=this
var i=this.keypadElement()
var o=this._currentFocus
this._currentFocus=t
var n=this.getInputPaths()
var s=this._currentFocus&&n.some(function(e){return _util2.default.inputPathsEqual(e,r._currentFocus)})
if(this.props.apiOptions.onFocusChange!=null){this.props.apiOptions.onFocusChange(this._currentFocus,o,s&&i&&i.getDOMNode())}if(i){if(s){i.activate()}else{i.dismiss()}}}
t.prototype._onRendererBlur=function e(t){var r=this
var i=this._currentFocus
if(!_util2.default.inputPathsEqual(t,i)){return}setTimeout(function(){if(_util2.default.inputPathsEqual(r._currentFocus,i)){r._setCurrentFocus(null)}})}
t.prototype._setWidgetProps=function e(t,r,i){this.questionRenderer._setWidgetProps(t,r,i)}
t.prototype.setInputValue=function e(t,r,i){return this.questionRenderer.setInputValue(t,r,i)}
t.prototype.focusPath=function e(t){return this.questionRenderer.focusPath(t)}
t.prototype.blurPath=function e(t){return this.questionRenderer.blurPath(t)}
t.prototype.getDOMNodeForPath=function e(t){return this.questionRenderer.getDOMNodeForPath(t)}
t.prototype.getGrammarTypeForPath=function e(t){return this.questionRenderer.getGrammarTypeForPath(t)}
t.prototype.getInputPaths=function e(){var t=this.questionRenderer.getInputPaths()
return t}
t.prototype.focus=function e(){return this.questionRenderer.focus()}
t.prototype.blur=function e(){if(this._currentFocus){this.blurPath(this._currentFocus)}}
t.prototype.showHint=function e(){if(this.state.hintsVisible<this.getNumHints()){this.setState({hintsVisible:this.state.hintsVisible+1})}}
t.prototype.getNumHints=function e(){return this.props.item.hints.length}
t.prototype.scoreInput=function e(){var t=this.questionRenderer.guessAndScore()
var r=t[0]
var i=t[1]
var o=[r,[]]
var n=_util2.default.keScoreFromPerseusScore(i,o,this.questionRenderer.getSerializedState())
var s=this.questionRenderer.emptyWidgets()
this.setState({questionCompleted:n.correct,questionHighlightedWidgets:s})
return n}
t.prototype.getWidgetIds=function e(){return this.questionRenderer.getWidgetIds()}
t.prototype.scoreWidgets=function e(){var t=this.questionRenderer.scoreWidgets()
var r=this.questionRenderer.getUserInputForWidgets()
var i=this.questionRenderer.getSerializedState()
return(0,_objective_.mapObject)(t,function(e,t){return _util2.default.keScoreFromPerseusScore(e,r[t],i)})}
t.prototype.getSerializedState=function e(){return{question:this.questionRenderer.getSerializedState(),hints:this.hintsRenderer.getSerializedState()}}
t.prototype.restoreSerializedState=function e(t,r){var i=2
var o=function e(){--i
if(r&&i===0){r()}}
this.questionRenderer.restoreSerializedState(t.question,o)
this.hintsRenderer.restoreSerializedState(t.hints,o)}
t.prototype.showRationalesForCurrentlySelectedChoices=function e(){this.questionRenderer.showRationalesForCurrentlySelectedChoices()}
t.prototype.deselectIncorrectSelectedChoices=function e(){this.questionRenderer.deselectIncorrectSelectedChoices()}
t.prototype.render=function e(){return React.createElement("div",null)}
return t}(React.Component)
ItemRenderer.defaultProps={apiOptions:{},controlPeripherals:true,hintsAreaSelector:"#hintsarea",initialHintsVisible:0,workAreaSelector:"#workarea",reviewMode:false,linterContext:_proptypes.linterContextDefault}
module.exports=ItemRenderer

});
KAdefine("javascript/perseus-all-package/jipt-paragraphs.jsx", function(require, module, exports) {
var SimpleMarkdown=require("simple-markdown")
var arrayRules={fence:{match:SimpleMarkdown.defaultRules.fence.match,order:1,parse:function r(a,e,n){return a[3]}},paragraph:{match:SimpleMarkdown.defaultRules.paragraph.match,order:2,parse:function r(a,e,n){return a[1]}}}
var builtArrayParser=SimpleMarkdown.parserFor(arrayRules)
var parseToArray=function r(a){var e=a.replace(/^\n\s*\n/,"")+"\n\n"
return builtArrayParser(e,{inline:false})}
var joinFromArray=function r(a){return a.join("\n\n")}
module.exports={parseToArray:parseToArray,joinFromArray:joinFromArray}

});
KAdefine("javascript/perseus-all-package/json-editor.jsx", function(require, module, exports) {
var React=require("react")
var createReactClass=require("create-react-class")
var _=require("underscore")
var JsonEditor=createReactClass({displayName:"JsonEditor",getInitialState:function e(){return{currentValue:JSON.stringify(this.props.value,null,4),valid:true}},UNSAFE_componentWillReceiveProps:function e(t){var a=!this.state.valid||!_.isEqual(t.value,JSON.parse(this.state.currentValue))
if(a){this.setState(this.getInitialState())}},render:function e(){var t="perseus-json-editor "+(this.state.valid?"valid":"invalid")
return React.createElement("textarea",{className:t,value:this.state.currentValue,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onBlur:this.handleBlur})},handleKeyDown:function e(t){if(t.key==="Tab"){var a=t.target.selectionStart
var r=t.target.value
var n=r.substring(0,a)
var i=r.substring(a,r.length)
t.target.value=n+"    "+i
t.target.selectionStart=n.length+4
t.target.selectionEnd=n.length+4
t.preventDefault()
this.handleChange(t)}},handleChange:function e(t){var a=t.target.value
try{var r=JSON.parse(a)
if(_.isString(r)){r=JSON.parse(r)}this.setState({currentValue:a,valid:true},function(){this.props.onChange(r)})}catch(e){this.setState({currentValue:a,valid:false})}},handleBlur:function e(t){var a=t.target.value
try{var r=JSON.parse(a)
if(_.isString(r)){r=JSON.parse(r)}this.setState({currentValue:JSON.stringify(r,null,4),valid:true},function(){this.props.onChange(r)})}catch(e){this.setState({currentValue:JSON.stringify(this.props.value,null,4),valid:true})}}})
module.exports=JsonEditor

});
KAdefine("javascript/perseus-all-package/keypad-context.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
exports.default=React.createContext({setKeypadElement:function e(t){},keypadElement:null,setRenderer:function e(t){},renderer:null,setScrollableElement:function e(t){},scrollableElement:null})

});
KAdefine("javascript/perseus-all-package/mixins/api-options-props.js", function(require, module, exports) {
var PropTypes=require("prop-types")
var ApiOptions=require("../perseus-api.jsx").Options
var ApiOptionsProps={propTypes:{apiOptions:PropTypes.any},getDefaultProps:function p(){return{apiOptions:{}}},getApiOptions:function p(){return babelHelpers.extends({},ApiOptions.defaults,this.props.apiOptions)}}
module.exports=ApiOptionsProps

});
KAdefine("javascript/perseus-all-package/mixins/changeable.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var PropTypes=require("prop-types")
var _=require("underscore")
var WIDGET_PROP_BLACKLIST=require("./widget-prop-blacklist.jsx")
var USAGE="Usage:\n"+"  this.change({propName: 5}, callback);\n"+'  this.change("propName", 5, callback);\n'+'  this.change("propName")'
var _changeMultiple=function e(r,n,a){var i=_.omit(r.props,WIDGET_PROP_BLACKLIST)
var p=_.extend(i,n)
r.props.onChange(p,a)}
var _changeSingle=function e(r,n,a,i){if(a===undefined){return _.partial(e,r,n)}else{var p={}
p[n]=a
_changeMultiple(r,p,i)}}
var change=exports.change=function e(r,n,a){if(_.isObject(r)&&a===undefined){a=n
return _changeMultiple(this,r,a)}else if(_.isString(r)){return _changeSingle(this,r,n,a)}else{throw new Error("Invalid types sent to this.change(): "+_.toArray(arguments).join()+"\n"+USAGE)}}
var propTypes=exports.propTypes={onChange:PropTypes.func.isRequired}

});
KAdefine("javascript/perseus-all-package/mixins/editor-jsonify.jsx", function(require, module, exports) {
var _=require("underscore")
var WIDGET_PROP_BLACKLIST=require("./widget-prop-blacklist.jsx")
var EditorJsonify={serialize:function r(){return _.omit(this.props,WIDGET_PROP_BLACKLIST)}}
module.exports=EditorJsonify

});
KAdefine("javascript/perseus-all-package/mixins/provide-keypad.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var Keypad=require("math-input").components.Keypad
var ProvideKeypad={propTypes:{apiOptions:PropTypes.shape({customKeypad:PropTypes.bool,nativeKeypadProxy:PropTypes.func}),keypadStyle:PropTypes.any},getInitialState:function e(){var t=this
var p=null
if(this.props.apiOptions&&this.props.apiOptions.customKeypad&&this.props.apiOptions.nativeKeypadProxy){p=this.props.apiOptions.nativeKeypadProxy(function(){return t.blur&&t.blur()})}return{keypadElement:p}},componentDidMount:function e(){var t=this
var p=document,n=p.body
if(n&&this.props.apiOptions&&this.props.apiOptions.customKeypad&&!this.props.apiOptions.nativeKeypadProxy){this._keypadContainer=document.createElement("div")
n.appendChild(this._keypadContainer)
ReactDOM.render(React.createElement(Keypad,{onElementMounted:function e(p){t.setState({keypadElement:p})},onDismiss:function e(){t.blur&&t.blur()},style:this.props.keypadStyle}),this._keypadContainer)}},componentWillUnmount:function e(){if(this._keypadContainer){ReactDOM.unmountComponentAtNode(this._keypadContainer)
if(this._keypadContainer.parentNode){this._keypadContainer.parentNode.removeChild(this._keypadContainer)}this._keypadContainer=null}},keypadElement:function e(){return this.state.keypadElement}}
module.exports=ProvideKeypad

});
KAdefine("javascript/perseus-all-package/mixins/widget-jsonify-deprecated.jsx", function(require, module, exports) {
var WIDGET_PROP_BLACKLIST=require("./widget-prop-blacklist.jsx")
var _=require("underscore")
var WidgetJsonifyDeprecated={getUserInput:function e(){return _.omit(this.props,WIDGET_PROP_BLACKLIST)},getUserInputFromProps:function e(r){return _.omit(r,WIDGET_PROP_BLACKLIST)}}
module.exports=WidgetJsonifyDeprecated

});
KAdefine("javascript/perseus-all-package/mixins/widget-prop-blacklist.jsx", function(require, module, exports) {
module.exports=["key","ref","containerSizeClass","widgetId","onChange","problemNum","apiOptions","questionCompleted","findWidgets","onRemove","id","onBlur","onFocus","trackInteraction","keypadElement"]

});
KAdefine("javascript/perseus-all-package/multi-items/item-types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/multi-items/items.js", function(require, module, exports) {
var _require=require("./trees.js"),buildMapper=_require.buildMapper
var shapes=require("./shapes.js")
function buildEmptyItemTreeForShape(e){if(e.type==="content"){return{__type:"content",content:"",images:{},widgets:{}}}else if(e.type==="hint"){return{__type:"hint",replace:false,content:"",images:{},widgets:{}}}else if(e.type==="tags"){return[]}else if(e.type==="array"){return[]}else if(e.type==="object"){var t=e.shape
var r={}
Object.keys(t).forEach(function(e){r[e]=buildEmptyItemTreeForShape(t[e])})
return r}else{throw new Error("unexpected shape type "+e.type)}}function buildEmptyItemForShape(e){return treeToItem(buildEmptyItemTreeForShape(e))}function findContentNodesInItem(e,t,r){var n=itemToTree(e)
buildMapper().setContentMapper(r).mapTree(n,t)}function findHintNodesInItem(e,t,r){var n=itemToTree(e)
buildMapper().setHintMapper(r).mapTree(n,t)}function inferItemShape(e){var t=itemToTree(e)
return inferItemTreeShape(t)}function inferItemTreeShape(e){if(Array.isArray(e)){if(e.length){if(typeof e[0]==="string"){return shapes.tags}else{return shapes.arrayOf(inferItemTreeShape(e[0]))}}else{return shapes.arrayOf(shapes.content)}}else if((typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"&&(e.__type==="content"||e.__type==="item")){return shapes.content}else if((typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"&&e.__type==="hint"){return shapes.hint}else if((typeof e==="undefined"?"undefined":babelHelpers.typeof(e))==="object"){var t={}
Object.keys(e).forEach(function(r){t[r]=inferItemTreeShape(e[r])})
return shapes.shape(t)}else{throw new Error("unexpected multi-item node "+JSON.stringify(e))}}function itemToTree(e){return e._multi}function treeToItem(e){return{_multi:e}}module.exports={buildEmptyItemTreeForShape:buildEmptyItemTreeForShape,buildEmptyItemForShape:buildEmptyItemForShape,findContentNodesInItem:findContentNodesInItem,findHintNodesInItem:findHintNodesInItem,inferItemShape:inferItemShape,itemToTree:itemToTree,treeToItem:treeToItem}

});
KAdefine("javascript/perseus-all-package/multi-items/multi-renderer.jsx", function(require, module, exports) {
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var lens=require("../../../third_party/javascript-khansrc/hubble/hubble.js")
var React=require("react")
var _require2=require("./items.js"),itemToTree=_require2.itemToTree
var HintsRenderer=require("../hints-renderer.jsx")
var Renderer=require("../renderer.jsx")
var _require3=require("./trees.js"),buildMapper=_require3.buildMapper
var Util=require("../util.js")
var i18n=require("../../shared-package/i18n.js")
var MultiRenderer=function(e){babelHelpers.inherits(r,e)
function r(t){babelHelpers.classCallCheck(this,r)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this,t))
n._handleSerializedStateUpdated=function(e,r){var t=n.props.onSerializedStateUpdated
if(t){var i=n._getSerializedState(n.props.serializedState)
t(lens(i).set(e,r).freeze())}}
n.rendererDataTreeMapper=buildMapper().setContentMapper(function(e,_,r){return n._makeContentRendererData(e,r)}).setHintMapper(function(e){return n._makeHintRendererData(e)}).setTagsMapper(function(e){return null})
n.getRenderersMapper=buildMapper().setContentMapper(function(e){return e.makeRenderer()}).setHintMapper(function(e){return e.makeRenderer()}).setArrayMapper(n._annotateRendererArray.bind(n))
n.state=n._tryMakeRendererState(n.props)
return n}r.prototype.UNSAFE_componentWillReceiveProps=function e(r){if(r.item!==this.props.item){this.setState(this._tryMakeRendererState(r))}}
r.prototype._tryMakeRendererState=function e(r){try{return{rendererDataTree:this._makeRendererDataTree(r.item,r.shape),renderError:null}}catch(e){console.error(e)
return{rendererDataTree:null,renderError:e}}}
r.prototype._getRendererProps=function e(){var r=this.props,t=r.item,n=r.children,i=r.shape,a=babelHelpers.objectWithoutProperties(r,["item","children","shape"])
return a}
r.prototype._makeContentRendererData=function e(r,t){var n=this
var i={ref:null,makeRenderer:null}
var a=function e(r){return i.ref=r}
var s=function e(r){return n._findWidgets(i,r)}
var o=function e(r){return n._handleSerializedStateUpdated(t,r)}
i.makeRenderer=function(){return React.createElement(Renderer,babelHelpers.extends({},n._getRendererProps(),r,{ref:a,findExternalWidgets:s,serializedState:n.props.serializedState?lens(n.props.serializedState).get(t):null,onSerializedStateUpdated:o}))}
return i}
r.prototype._makeHintRendererData=function e(r){var t=this
var n=function e(r){return t._findWidgets({},r)}
return{hint:r,findExternalWidgets:n,ref:null,makeRenderer:function e(){return React.createElement(HintsRenderer,babelHelpers.extends({},t._getRendererProps(),{findExternalWidgets:n,hints:[r]}))}}}
r.prototype._makeRendererDataTree=function e(r,t){var n=itemToTree(r)
return this.rendererDataTreeMapper.mapTree(n,t)}
r.prototype._findWidgets=function e(r,t){var n=[]
this._mapRenderers(function(e){if(r!==e&&e.ref){n.push.apply(n,e.ref.findInternalWidgets(t))}})
return n}
r.prototype._mapRenderers=function e(r){var t=this.state.rendererDataTree
if(!t){return null}var n=buildMapper().setContentMapper(r).setHintMapper(r)
return n.mapTree(t,this.props.shape)}
r.prototype._scoreFromRef=function e(r){if(!r){return null}var t=r.guessAndScore(),n=t[0],i=t[1]
var a=void 0
if(r.getSerializedState){a=r.getSerializedState()}return Util.keScoreFromPerseusScore(i,n,a)}
r.prototype.getScores=function e(){var r=this
return this._mapRenderers(function(e){return r._scoreFromRef(e.ref)})}
r.prototype.score=function e(){var r=[]
var t=[]
var n=this._mapRenderers(function(e){if(!e.ref){return null}if(e.ref.getSerializedState){t.push(e.ref.getSerializedState())}r.push(e.ref.score())
return e.ref.getUserInput()})
var i=r.reduce(Util.combineScores)
return Util.keScoreFromPerseusScore(i,n,t)}
r.prototype._getSerializedState=function e(r){return this._mapRenderers(function(e,_,t){if(e.ref){return e.ref.getSerializedState()}else if(r){return lens(r).get(t)}else{return null}})}
r.prototype.restoreSerializedState=function e(r,t){var n=0
var i=function e(){n--
if(t&&n===0){t()}}
this._mapRenderers(function(e,_,t){if(!e.ref){return}var a=lens(r).get(t)
if(!a){return}n++
e.ref.restoreSerializedState(a,i)})}
r.prototype._annotateRendererArray=function e(r,t,n){var i=this
if(n.elementShape.type==="hint"){var a=t
r=[].concat(r)
r.firstN=function(e){return React.createElement(HintsRenderer,babelHelpers.extends({},i._getRendererProps(),{findExternalWidgets:a[0]?a[0].findExternalWidgets:undefined,hints:a.map(function(e){return e.hint}),hintsVisible:e}))}}return r}
r.prototype._getRenderers=function e(){return this.getRenderersMapper.mapTree(this.state.rendererDataTree,this.props.shape)}
r.prototype.render=function e(){if(this.state.renderError){return React.createElement("div",{className:css(styles.error)},i18n.$_("Error rendering: %(error)s",{error:String(this.state.renderError)}))}return this.props.children({renderers:this._getRenderers()})}
return r}(React.Component)
var styles=StyleSheet.create({error:{color:"red"}})
module.exports=MultiRenderer

});
KAdefine("javascript/perseus-all-package/multi-items/prop-type-builders.js", function(require, module, exports) {
var PropTypes=require("prop-types")
function shapePropType(){var e=PropTypes.oneOfType([PropTypes.shape({type:PropTypes.oneOf(["content"]).isRequired}).isRequired,PropTypes.shape({type:PropTypes.oneOf(["hint"]).isRequired}).isRequired,PropTypes.shape({type:PropTypes.oneOf(["tags"]).isRequired}).isRequired,PropTypes.shape({type:PropTypes.oneOf(["object"]).isRequired,shape:PropTypes.objectOf(shapePropType)}).isRequired,PropTypes.shape({type:PropTypes.oneOf(["array"]).isRequired,elementShape:shapePropType}).isRequired])
return e.apply(undefined,arguments)}function buildPropTypeForShape(e){return PropTypes.oneOfType([PropTypes.shape({_multi:buildTreePropTypeForShape(e)}),PropTypes.oneOf([null,undefined])])}function buildTreePropTypeForShape(e){if(e.type==="content"){return PropTypes.shape({__type:PropTypes.oneOf(["content","item"]).isRequired,content:PropTypes.string,images:PropTypes.objectOf(PropTypes.any),widgets:PropTypes.objectOf(PropTypes.any)})}else if(e.type==="hint"){return PropTypes.shape({__type:PropTypes.oneOf(["hint"]).isRequired,content:PropTypes.string,images:PropTypes.objectOf(PropTypes.any),widgets:PropTypes.objectOf(PropTypes.any),replace:PropTypes.bool})}else if(e.type==="tags"){return PropTypes.arrayOf(PropTypes.string.isRequired)}else if(e.type==="array"){var p=buildTreePropTypeForShape(e.elementShape)
return PropTypes.arrayOf(p.isRequired)}else if(e.type==="object"){var r=e.shape
var o={}
Object.keys(r).forEach(function(e){o[e]=buildTreePropTypeForShape(r[e]).isRequired})
return PropTypes.shape(o)}else{throw new Error("unexpected shape type "+e.type)}}module.exports={shapePropType:shapePropType,buildPropTypeForShape:buildPropTypeForShape}

});
KAdefine("javascript/perseus-all-package/multi-items/shape-types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/multi-items/shapes.js", function(require, module, exports) {
var contentShape={type:"content"}
var hintShape={type:"hint"}
var tagsShape={type:"tags"}
var buildArrayShape=function e(a){return{type:"array",elementShape:a}}
var buildObjectShape=function e(a){return{type:"object",shape:a}}
var hintsShape=buildArrayShape(hintShape)
module.exports={content:contentShape,hint:hintShape,hints:hintsShape,tags:tagsShape,arrayOf:buildArrayShape,shape:buildObjectShape}

});
KAdefine("javascript/perseus-all-package/multi-items/tree-types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/multi-items/trees.js", function(require, module, exports) {
var TreeMapperJustForLeaves=function(){function e(t,r,n){babelHelpers.classCallCheck(this,e)
this.content=t
this.hint=r
this.tags=n
this.array=identity}e.prototype.setContentMapper=function t(r){return new e(r,this.hint,this.tags)}
e.prototype.setHintMapper=function t(r){return new e(this.content,r,this.tags)}
e.prototype.setTagsMapper=function t(r){return new e(this.content,this.hint,r)}
e.prototype.setArrayMapper=function e(t){return new TreeMapperForLeavesAndCollections(this.content,this.hint,this.tags,t)}
e.prototype.mapTree=function e(t,r){return _mapTree(t,r,[],this)}
return e}()
var TreeMapperForLeavesAndCollections=function(){function e(t,r,n,o){babelHelpers.classCallCheck(this,e)
this.content=t
this.hint=r
this.tags=n
this.array=o}e.prototype.setArrayMapper=function t(r){return new e(this.content,this.hint,this.tags,r)}
e.prototype.mapTree=function e(t,r){return _mapTree(t,r,[],this)}
return e}()
function identity(e){return e}function buildMapper(){return new TreeMapperJustForLeaves(identity,identity,identity)}function _mapTree(e,t,r,n){if(t.type==="content"){var o=e
return n.content(o,t,r)}else if(t.type==="hint"){var i=e
return n.hint(i,t,r)}else if(t.type==="tags"){var a=e
return n.tags(a,t,r)}else if(t.type==="array"){var p=e
if(!Array.isArray(p)){throw new Error('Invalid object of type "'+(typeof p==="undefined"?"undefined":babelHelpers.typeof(p))+'" found at path '+(["<root>"].concat(r).join(".")+". Expected array."))}var s=t.elementShape
var c=p.map(function(e,t){return _mapTree(e,s,r.concat(t),n)})
return n.array(c,p,t,r)}else if(t.type==="object"){var h=e
if(h&&(typeof h==="undefined"?"undefined":babelHelpers.typeof(h))!=="object"){throw new Error('Invalid object of type "'+(typeof h==="undefined"?"undefined":babelHelpers.typeof(h))+'" found at '+("path "+["<root>"].concat(r).join(".")+". Expected ")+'"object" type.')}var u=t.shape
if(!u){throw new Error("Unexpected shape "+JSON.stringify(t)+" at path "+(["<root>"].concat(r).join(".")+"."))}var f={}
Object.keys(u).forEach(function(e){if(!(e in h)){throw new Error('Key "'+e+'" is missing from shape at path '+(["<root>"].concat(r).join(".")+"."))}f[e]=_mapTree(h[e],u[e],r.concat(e),n)})
return f}else{throw new Error("unexpected shape type "+t.type)}}module.exports={buildMapper:buildMapper}

});
KAdefine("javascript/perseus-all-package/multi-items.js", function(require, module, exports) {
var _require=require("./multi-items/items.js"),buildEmptyItemForShape=_require.buildEmptyItemForShape,findContentNodesInItem=_require.findContentNodesInItem,findHintNodesInItem=_require.findHintNodesInItem,inferItemShape=_require.inferItemShape
var MultiRenderer=require("./multi-items/multi-renderer.jsx")
var _require2=require("./multi-items/prop-type-builders.js"),buildPropTypeForShape=_require2.buildPropTypeForShape
var shapes=require("./multi-items/shapes.js")
module.exports={MultiRenderer:MultiRenderer,shapes:shapes,buildPropTypeForShape:buildPropTypeForShape,buildEmptyItemForShape:buildEmptyItemForShape,findContentNodesInItem:findContentNodesInItem,findHintNodesInItem:findHintNodesInItem,inferItemShape:inferItemShape}

});
KAdefine("javascript/perseus-all-package/not-gorgon.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _rule=require("./gorgon/rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
var _underscore=require("underscore")
var DEBOUNCE_TIMEOUT=1e3
var NotGorgon=function(){function e(){var t=this
babelHelpers.classCallCheck(this,e)
this.previousContent=null
this.runLinter=(0,_underscore.debounce)(function(e,r){if(typeof KA==="undefined"){return}if(e===t.previousContent){return}t.previousContent=e
if(e===""){r([])
return}fetch("/api/internal/translations/lint_poentry?preview=1&lang=en",{headers:{"Content-Type":"application/json"},body:JSON.stringify({msgid:e,msgstr:e,format:"perseus_text",filename:""}),method:"POST"}).then(function(e){if(e.status>=400){return{status:"error",message:"Could not run i18n linter."}}return e.json()},function(e){return{status:"error",message:"Could not run i18n linter."}}).then(function(e){if(e.status==="error"){r(["Some part of this text makes it untranslatable. "+"The specific message from the i18n linter was: "+e.message.replace(/\n/g," ")])}else{r([])}})},DEBOUNCE_TIMEOUT)}e.prototype.applyLintErrors=function e(t,r){if(r.length){var n=r.join("\n\n")
t.unshift({content:{type:"text",content:""},insideTable:false,message:n,ruleName:"legacy-error",severity:_rule2.default.Severity.ERROR,type:"lint"})}}
return e}()
exports.default=NotGorgon

});
KAdefine("javascript/perseus-all-package/perseus-api.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var StubTagEditor=require("./components/stub-tag-editor.jsx")
module.exports={Options:{propTypes:PropTypes.shape({isArticle:PropTypes.bool.isRequired,satStyling:PropTypes.bool.isRequired,onInputError:PropTypes.func.isRequired,onFocusChange:PropTypes.func.isRequired,staticRender:PropTypes.bool.isRequired,GroupMetadataEditor:PropTypes.func.isRequired,showAlignmentOptions:PropTypes.bool.isRequired,readOnly:PropTypes.bool.isRequired,answerableCallback:PropTypes.func,getAnotherHint:PropTypes.func,interactionCallback:PropTypes.func,groupAnnotator:PropTypes.func.isRequired,imagePlaceholder:PropTypes.node,widgetPlaceholder:PropTypes.node,baseElements:PropTypes.shape({Link:PropTypes.func}),imagePreloader:PropTypes.func,trackInteraction:PropTypes.func,customKeypad:PropTypes.bool,nativeKeypadProxy:PropTypes.func,isMobile:PropTypes.bool,setDrawingAreaAvailable:PropTypes.func,useDraftEditor:PropTypes.bool,styling:PropTypes.shape({radioStyleVersion:PropTypes.oneOf(["intermediate","final"])}),hintProgressColor:PropTypes.string,canScrollPage:PropTypes.bool,inModal:PropTypes.bool,crossOutEnabled:PropTypes.bool,editorChangeDelay:PropTypes.number}).isRequired,defaults:{isArticle:false,isMobile:false,satStyling:false,onInputError:function e(){},onFocusChange:function e(){},staticRender:false,GroupMetadataEditor:StubTagEditor,showAlignmentOptions:false,readOnly:false,groupAnnotator:function e(){return null},baseElements:{Link:function e(r){return React.createElement("a",r)}},setDrawingAreaAvailable:function e(){},useDraftEditor:false,styling:{radioStyleVersion:"final"},canScrollPage:false,inModal:false,crossOutEnabled:false,editorChangeDelay:0}},ClassNames:{RENDERER:"perseus-renderer",TWO_COLUMN_RENDERER:"perseus-renderer-two-columns",RESPONSIVE_RENDERER:"perseus-renderer-responsive",INPUT:"perseus-input",FOCUSED:"perseus-focused",RADIO:{OPTION:"perseus-radio-option",SELECTED:"perseus-radio-selected",OPTION_CONTENT:"perseus-radio-option-content"},INTERACTIVE:"perseus-interactive",CORRECT:"perseus-correct",INCORRECT:"perseus-incorrect",UNANSWERED:"perseus-unanswered",MOBILE:"perseus-mobile"}}

});
KAdefine("javascript/perseus-all-package/perseus-env.js", function(require, module, exports) {
window.icu={getDecimalFormatSymbols:function e(){return{decimal_separator:".",grouping_separator:",",minus:"-"}}}
window.KhanUtil={debugLog:function e(){},localeToFixed:function e(r,n){return r.toFixed(n)}}
window.Exercises={localMode:true,khanExercisesUrlBase:"../",getCurrentFramework:function e(){return"khan-exercises"},PerseusBridge:{cleanupProblem:function e(){return false}}}

});
KAdefine("javascript/perseus-all-package/perseus-markdown.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var SimpleMarkdown=require("simple-markdown")
var TeX=require("../react-components-package/tex.jsx")
var Util=require("./util.js")
var Lint=require("./components/lint.jsx")
var i18n=require("../shared-package/i18n.js")
var mathMatcher=function e(t,r,n){var a=t.length
var l=0
if(n){if(r.inline){return null}while(l<a&&t[l]===" "){l++}}if(!(l<a&&t[l]==="$")){return null}l++
var i=l
var c=0
while(l<a){var u=t[l]
if(u==="\\"){l++}else if(c<=0&&u==="$"){var s=l+1
if(n){var o=/^(?: *\n){2,}/.exec(t.slice(s))
s=o?s+o[0].length:null}if(s){return[t.substring(0,s),t.substring(i,l)]}return null}else if(u==="{"){c++}else if(u==="}"){c--}else if(u==="\n"&&t[l-1]==="\n"){return null}l++}return null}
var mathMatch=function e(t,r){return mathMatcher(t,r,false)}
var blockMathMatch=function e(t,r){return mathMatcher(t,r,true)}
var TITLED_TABLE_REGEX=new RegExp("^\\|\\| +(.*) +\\|\\| *\\n"+"("+SimpleMarkdown.defaultRules.nptable.match.regex.source.substring(1)+")")
var crowdinJiptMatcher=SimpleMarkdown.blockRegex(/^(crwdns.*)\n\s*\n/)
var rules=_.extend({},SimpleMarkdown.defaultRules,{columns:{order:-2,match:SimpleMarkdown.blockRegex(/^([\s\S]*\n\n)={5,}\n\n([\s\S]*)/),parse:function e(t,r,n){return{col1:r(t[1],n),col2:r(t[2],n)}},react:function e(t,r,n){return React.createElement("div",{className:"perseus-two-columns",key:n.key},React.createElement("div",{className:"perseus-column"},React.createElement("div",{className:"perseus-column-content"},r(t.col1,n))),React.createElement("div",{className:"perseus-column"},React.createElement("div",{className:"sat-header-grafting-area"}),React.createElement("div",{className:"perseus-column-content"},React.createElement("div",{className:"sat-skill-subscore-grafting-area"}),r(t.col2,n),React.createElement("div",{className:"sat-grafting-area"}))))}},crowdinId:{order:-1,match:function e(t,r,n){if(r.isJipt){return crowdinJiptMatcher(t,r,n)}else{return null}},parse:function e(t,r,n){return{id:t[1]}},react:function e(t,r,n){return t.id}},titledTable:{order:SimpleMarkdown.defaultRules.nptable.order-.5,match:SimpleMarkdown.blockRegex(TITLED_TABLE_REGEX),parse:function e(t,r,n){var a=SimpleMarkdown.parseInline(r,t[1],n)
var l=_.rest(t,2)
var i=SimpleMarkdown.defaultRules.nptable.parse(l,r,n)
return{title:a,table:i}},react:function e(t,r,n){var a=void 0
if(!t.table){a="//invalid table//"}else{var l=SimpleMarkdown.defaultRules.table.react(t.table,r,n)
var i=React.createElement("caption",{key:"caption",className:"perseus-table-title"},r(t.title,n))
a=React.cloneElement(l,null,[i].concat(l.props.children))}return React.createElement("div",{className:"perseus-titled-table",key:n.key},a)}},widget:{order:SimpleMarkdown.defaultRules.link.order-.75,match:SimpleMarkdown.inlineRegex(Util.rWidgetRule),parse:function e(t,r,n){return{id:t[1],widgetType:t[2]}},react:function e(t,r,n){return React.createElement("em",{key:n.key},i18n.doNotTranslate("[Widget: ",t.id,"]"))}},blockMath:{order:SimpleMarkdown.defaultRules.codeBlock.order+.5,match:blockMathMatch,parse:function e(t,r,n){return{content:t[1]}},react:function e(t,r,n){return React.createElement(TeX,{key:n.key},t.content)}},math:{order:SimpleMarkdown.defaultRules.link.order-.25,match:mathMatch,parse:function e(t,r,n){return{content:t[1]}},react:function e(t,r,n){return React.createElement(TeX,{key:n.key},t.content)}},unescapedDollar:{order:SimpleMarkdown.defaultRules.link.order-.24,match:SimpleMarkdown.inlineRegex(/^(?!\\)\$/),parse:function e(t,r,n){return{}},react:function e(t,r,n){return"$"}},fence:_.extend({},SimpleMarkdown.defaultRules.fence,{parse:function e(t,r,n){var a=SimpleMarkdown.defaultRules.fence.parse(t,r,n)
if(a.lang==="alt"){return{type:"codeBlock",lang:"alt",content:r(a.content+"\n\n",n)}}else{return a}}}),blockQuote:babelHelpers.extends({},SimpleMarkdown.defaultRules.blockQuote,{match:SimpleMarkdown.blockRegex(/^ *>[^\n]+(\n( *>)?[^\n]+)*\n{2,}/)}),link:_.extend({},SimpleMarkdown.defaultRules.link,{react:function e(t,r,n){var a=SimpleMarkdown.defaultRules.link.react(t,r,n)
var l=a.props.href
if(typeof KA!=="undefined"&&KA.isZeroRated){if(l.match(/https?:\/\/[^\/]*khanacademy.org/)){l=l.replace("khanacademy.org","zero.khanacademy.org")}else{l="/zero/external-link?url="+encodeURIComponent(l)}}var i=babelHelpers.extends({},a.props,{href:l})
if(n.baseElements&&n.baseElements.Link){return n.baseElements.Link(i)}else{return React.cloneElement(a,i)}}}),codeBlock:_.extend({},SimpleMarkdown.defaultRules.codeBlock,{react:function e(t,r,n){if(t.lang==="alt"){return React.createElement("div",{key:n.key,className:"perseus-markdown-alt perseus-sr-only"},r(t.content,n))}else{return SimpleMarkdown.defaultRules.codeBlock.react(t,r,n)}}}),list:_.extend({},SimpleMarkdown.defaultRules.list,{match:function e(t,r,n){if(r.isJipt){return null}else{return SimpleMarkdown.defaultRules.list.match(t,r,n)}}}),lint:{order:1e3,match:function e(t){return null},parse:function e(t,r,n){return{}},react:function e(t,r,n){return React.createElement(Lint,{message:t.message,ruleName:t.ruleName,inline:isInline(t.content),blockHighlight:t.blockHighlight,insideTable:t.insideTable,severity:t.severity},r(t.content,n))}}})
function isInline(e){return!!(e&&e.type&&inlineNodeTypes.hasOwnProperty(e.type))}var inlineNodeTypes={text:true,math:true,unescapedDollar:true,link:true,img:true,strong:true,u:true,em:true,del:true,code:true}
var builtParser=SimpleMarkdown.parserFor(rules)
var parse=function e(t,r){var n=t+"\n\n"
return builtParser(n,_.extend({inline:false},r))}
var inlineParser=function e(t,r){return builtParser(t,_.extend({inline:true},r))}
var traverseContent=function e(t,r){if(_.isArray(t)){_.each(t,function(t){return e(t,r)})}else if(_.isObject(t)){r(t)
if(t.type==="table"){e(t.header,r)
e(t.cells,r)}else if(t.type==="list"){e(t.items,r)}else if(t.type==="titledTable"){e(t.table,r)}else if(t.type==="columns"){e(t.col1,r)
e(t.col2,r)}else if(_.isArray(t.content)){e(t.content,r)}}}
var getContent=function e(t){if(_.isArray(t)){return _.flatten(_.map(t,e))}if(t.content&&_.isString(t.content)){if(t.type.toLowerCase().indexOf("code")!==-1){return["",t.content,""]}else{return[t.content.replace(/\s+/g," ")]}}var r=_.chain(t).values().flatten().filter(function(e){return e!=null&&_.has(e,"type")}).value()
if(!r.length){return[]}else{var n=e(r)
if(t.type==="paragraph"&&n.length){n[0]=n[0].replace(/^\s+/,"")
var a=n.length-1
n[a]=n[a].replace(/\s+$/,"")}return n}}
var characterCount=function e(t){var r=parse(t)
var n=getContent(r).join("")
return n.length}
module.exports={characterCount:characterCount,traverseContent:traverseContent,parse:parse,parseInline:inlineParser,reactFor:SimpleMarkdown.reactFor,ruleOutput:SimpleMarkdown.ruleOutput(rules,"react"),basicOutput:SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules,"react")),sanitizeUrl:SimpleMarkdown.sanitizeUrl}

});
KAdefine("javascript/perseus-all-package/perseus.js", function(require, module, exports) {
var version=require("./version.js")
var Widgets=require("./widgets.js")
var basicWidgets=require("./basic-widgets.js")
Widgets.registerWidgets(basicWidgets)
module.exports={apiVersion:version.apiVersion,itemDataVersion:version.itemDataVersion,init:require("./init.js"),ArticleRenderer:require("./article-renderer.jsx"),ItemRenderer:require("./item-renderer.jsx"),ServerItemRenderer:require("./server-item-renderer.jsx"),HintsRenderer:require("./hints-renderer.jsx"),Renderer:require("./renderer.jsx"),MultiItems:require("./multi-items.js")}

});
KAdefine("javascript/perseus-all-package/question-paragraph.jsx", function(require, module, exports) {
var React=require("react")
var QuestionParagraph=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.className?"paragraph "+this.props.className:"paragraph"
return React.createElement("div",{className:r,"data-perseus-component-index":this.props.translationIndex,"data-perseus-paragraph-index":this.props.paragraphIndex},this.props.children)}
return r}(React.Component)
module.exports=QuestionParagraph

});
KAdefine("javascript/perseus-all-package/renderability.jsx", function(require, module, exports) {
var _=require("underscore")
var _require=require("./multi-items.js"),findContentNodesInItem=_require.findContentNodesInItem,inferItemShape=_require.inferItemShape
var Traversal=require("./traversal.jsx")
var Widgets=require("./widgets.js")
var isUpgradedWidgetInfoRenderableBy=function e(r,n){if(n==null){return false}var t=r.version||{major:0,minor:0}
if(n.major>t.major){return true}else if(n.major<t.major){return false}else{return n.minor>=t.minor}}
var isRawWidgetInfoRenderableBy=function e(r,n){if(r==null||r.type==null){return true}var t=Widgets.upgradeWidgetInfoToLatestVersion(r)
return isUpgradedWidgetInfoRenderableBy(t,n[t.type])}
var isRendererContentRenderableBy=function e(r,n){var t=true
Traversal.traverseRendererDeep(r,null,function(e){t=t&&isRawWidgetInfoRenderableBy(e,n)})
return t}
var isItemRenderableBy=function e(r,n){if(r==null||n==null){throw new Error("missing parameter to Perseus.isRenderable.item")}if(r._multi){var t=inferItemShape(r)
var i=true
findContentNodesInItem(r,t,function(e){var r=isRendererContentRenderableBy(e,n)
if(!r){i=false}})
return i}else{return isRendererContentRenderableBy(r.question,n)}}
module.exports={isItemRenderableByVersion:isItemRenderableBy}

});
KAdefine("javascript/perseus-all-package/renderer.jsx", function(require, module, exports) {
var _ravenJs=require("raven-js")
var _ravenJs2=babelHelpers.interopRequireDefault(_ravenJs)
var _zoomableTex=require("./components/zoomable-tex.jsx")
var _zoomableTex2=babelHelpers.interopRequireDefault(_zoomableTex)
var _notGorgon=require("./not-gorgon.js")
var _notGorgon2=babelHelpers.interopRequireDefault(_notGorgon)
var $=require("jquery")
var React=require("react")
var ReactDOM=require("react-dom")
var _=require("underscore")
var classNames=require("classnames")
var KA=require("../shared-package/ka.js")
var JiptParagraphs=require("./jipt-paragraphs.jsx")
var _require=require("./jipt-hack.jsx"),maybeUnescape=_require.maybeUnescape
var PerseusMarkdown=require("./perseus-markdown.jsx")
var QuestionParagraph=require("./question-paragraph.jsx")
var SvgImage=require("./components/svg-image.jsx")
var TeX=require("../react-components-package/tex.jsx")
var WidgetContainer=require("./widget-container.jsx")
var Widgets=require("./widgets.js")
var Util=require("./util.js")
var ApiOptionsProps=require("./mixins/api-options-props.js")
var ApiClassNames=require("./perseus-api.jsx").ClassNames
var Zoomable=require("./components/zoomable.jsx")
var preprocessTex=require("./util/katex-preprocess.js")
var Gorgon=require("./gorgon/gorgon.js")
var _require2=require("./gorgon/proptypes.js"),linterContextDefault=_require2.linterContextDefault
var _require3=require("./interactive2/objective_.js"),mapObject=_require3.mapObject,mapObjectFromArray=_require3.mapObjectFromArray
var rContainsNonWhitespace=/\S/
var rImageURL=/(web\+graphie|https):\/\/[^\s]*/
var noopOnRender=function e(){}
if(typeof KA!=="undefined"&&KA.language==="en-pt"){window.PerseusTranslationComponents=[]
if(!KA.jipt_dom_insert_checks){KA.jipt_dom_insert_checks=[]}KA.jipt_dom_insert_checks.push(function(e,t,r){var n=$(t)
var i=n.data("perseus-component-index")
var s=n.data("perseus-paragraph-index")
if(t&&typeof i!=="undefined"){var a=window.PerseusTranslationComponents[i]
if(!a){return false}e=maybeUnescape(e)
a.replaceJiptContent(e,s)
return false}return e})}var SHOULD_CLEAR_WIDGETS_PROP_LIST=["content","problemNum","widgets"]
var isIdPathPrefix=function e(t,r){if(t===null||r===null){return t===r}return _.every(t,function(e,t){if(r!=null){return _.isEqual(e,r[t])}})}
var InteractionTracker=function(){function e(t,r,n,i){babelHelpers.classCallCheck(this,e)
this._track=function(e){if(this._tracked&&!this.setting){return}this._tracked=true
this.trackApi(babelHelpers.extends({type:this.widgetType,id:this.widgetID},e))}
if(!t){this.track=this._noop}else{this._tracked=false
this.trackApi=t
this.widgetType=r
this.widgetID=n
this.setting=i
this.track=this._track.bind(this)}}e.prototype._noop=function e(){}
return e}()
var ErrorBoundary=function(e){babelHelpers.inherits(t,e)
function t(r){babelHelpers.classCallCheck(this,t)
var n=babelHelpers.possibleConstructorReturn(this,e.call(this,r))
n.state={error:""}
return n}t.prototype.componentDidCatch=function e(t,r){this.setState({error:t.toString()})
_ravenJs2.default.captureException(t,{extra:r})}
t.prototype.render=function e(){if(this.state.error){return React.createElement("svg",{height:"16",width:"16",viewBox:"0 0 16 16"},React.createElement("path",{d:"m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm0-3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1-1 .4477153-1 1 .44771525 1 1 1zm0-9c-.55228475 0-1 .44771525-1 1v4c0 .55228475.44771525 1 1 1s1-.44771525 1-1v-4c0-.55228475-.44771525-1-1-1z",fill:"#d92916",fillRule:"evenodd"}))}return this.props.children}
return t}(React.Component)
var Renderer=function(e){babelHelpers.inherits(t,e)
function t(r,n){babelHelpers.classCallCheck(this,t)
var i=babelHelpers.possibleConstructorReturn(this,e.call(this,r,n))
_initialiseProps.call(i)
i.state=_.extend({jiptContent:null,notGorgon:new _notGorgon2.default,notGorgonLintErrors:[],lastUsedWidgetId:null},i._getInitialWidgetState())
return i}t.prototype.componentDidMount=function e(){this._isMounted=true
this.handleRender({})
this._currentFocus=null
this._rootNode=ReactDOM.findDOMNode(this)
if(this.props.serializedState){this.restoreSerializedState(this.props.serializedState)}if(this.props.linterContext.highlightLint){this.state.notGorgon.runLinter(this.props.content,this.handleNotGorgonLintErrors)}}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(!_.isEqual(_.pick(this.props,SHOULD_CLEAR_WIDGETS_PROP_LIST),_.pick(t,SHOULD_CLEAR_WIDGETS_PROP_LIST))){this.setState(this._getInitialWidgetState(t))}}
t.prototype.shouldComponentUpdate=function e(t,r){if(this.props.alwaysUpdate){return true}var n=!_.isEqual(this.state,r)
var i=!_.isEqual(this.props,t)
return i||n}
t.prototype.UNSAFE_componentWillUpdate=function e(t,r){var n=this.shouldRenderJiptPlaceholder(this.props,this.state)
var i=this.shouldRenderJiptPlaceholder(t,r)
var s=this.getContent(this.props,this.state)
var a=this.getContent(t,r)
var o=this.props.highlightedWidgets
var l=t.highlightedWidgets
this.reuseMarkdown=!n&&!i&&s===a&&_.isEqual(this.state.notGorgonLintErrors,r.notGorgonLintErrors)&&(!this.props.linterContext.highlightLint||_.isEqual(this.props.widgets,t.widgets))&&this.props.linterContext.highlightLint===t.linterContext.highlightLint&&o===l}
t.prototype.componentDidUpdate=function e(t,r){var n=this
this.handleRender(t)
_.each(this.widgetIds,function(e){var t=n.refs["container:"+e]
t.replaceWidgetProps(n.getWidgetProps(e))})
if(this.props.serializedState&&!_.isEqual(this.props.serializedState,this.getSerializedState())){this.restoreSerializedState(this.props.serializedState)}if(this.props.linterContext.highlightLint){this.state.notGorgon.runLinter(this.props.content,this.handleNotGorgonLintErrors)}}
t.prototype.componentWillUnmount=function e(){this.widgetIds=[]
if(this.translationIndex!=null){window.PerseusTranslationComponents[this.translationIndex]=null}this._isMounted=false}
t.prototype.render=function e(){var t
var r=this.getApiOptions()
if(this.reuseMarkdown){return this.lastRenderedMarkdown}var n=this.getContent(this.props,this.state)
this.widgetIds=[]
if(this.shouldRenderJiptPlaceholder(this.props,this.state)){if(!this.translationIndex){this.translationIndex=window.PerseusTranslationComponents.push(this)-1}if(!r.isArticle){return React.createElement("div",{"data-perseus-component-index":this.translationIndex},n)}}this._isTwoColumn=false
var i=PerseusMarkdown.parse(n,{isJipt:this.translationIndex!=null})
if(this.props.linterContext.highlightLint){var s=babelHelpers.extends({content:this.props.content,widgets:this.props.widgets},this.props.linterContext)
Gorgon.runLinter(i,s,true)
this.state.notGorgon.applyLintErrors(i,[].concat(this.state.notGorgonLintErrors,this.props.legacyPerseusLint||[]))}var a=this.outputMarkdown(i,{baseElements:r.baseElements})
var o=classNames((t={},t[ApiClassNames.RENDERER]=true,t[ApiClassNames.RESPONSIVE_RENDERER]=true,t[ApiClassNames.TWO_COLUMN_RENDERER]=this._isTwoColumn,t))
this.lastRenderedMarkdown=React.createElement("div",{className:o},a)
return this.lastRenderedMarkdown}
return t}(React.Component)
Renderer.defaultProps={content:"",widgets:{},images:{},ignoreMissingWidgets:true,highlightedWidgets:[],questionCompleted:false,onRender:noopOnRender,onInteractWithWidget:function e(){},findExternalWidgets:function e(){return[]},alwaysUpdate:false,reviewMode:false,serializedState:null,onSerializedStateUpdated:function e(){},linterContext:linterContextDefault}
var _initialiseProps=function e(){var t=this
this.getApiOptions=function(){return ApiOptionsProps.getApiOptions.call(t)}
this._getInitialWidgetState=function(e){e=e||t.props
var r=t._getAllWidgetsInfo(e)
return{widgetInfo:r,widgetProps:t._getAllWidgetsStartProps(r,e)}}
this._getAllWidgetsInfo=function(e){e=e||t.props
return mapObject(e.widgets,function(e,t){if(!e.type||!e.alignment){var r={}
if(!e.type){r.type=t.split(" ")[0]}if(!e.alignment){r.alignment="default"}e=_.extend({},e,r)}return Widgets.upgradeWidgetInfoToLatestVersion(e)})}
this._getAllWidgetsStartProps=function(e,t){return mapObject(e,function(e){return Widgets.getRendererPropsForWidgetInfo(e,t.problemNum)})}
this._getDefaultWidgetInfo=function(e){var t=Util.rTypeFromWidgetId.exec(e)
if(t==null){return{}}return{type:t[1],graded:true,options:{}}}
this._getWidgetInfo=function(e){return t.state.widgetInfo[e]||t._getDefaultWidgetInfo(e)}
this.renderWidget=function(e,r,n){var i=t.state.widgetInfo[r]
if(i&&i.alignment==="full-width"){n.foundFullWidth=true}if(i||t.props.ignoreMissingWidgets){var s=i&&i.type||e
var a=_.contains(t.props.highlightedWidgets,r)
return React.createElement(ErrorBoundary,{key:"container:"+r},React.createElement(WidgetContainer,{ref:"container:"+r,type:s,initialProps:t.getWidgetProps(r),shouldHighlight:a,linterContext:Gorgon.pushContextStack(t.props.linterContext,"widget")}))}else{return null}}
this.getWidgetProps=function(e){var r=t.getApiOptions()
var n=t.state.widgetProps[e]||{}
var i=null
var s=t.state.widgetInfo[e]
if(t.props.reviewMode&&s){i=s.options}if(!t._interactionTrackers){t._interactionTrackers={}}var a=t._interactionTrackers[e]
if(!a){a=t._interactionTrackers[e]=new InteractionTracker(r.trackInteraction,s&&s.type,e,Widgets.getTracking(s&&s.type))}return babelHelpers.extends({},n,{ref:e,widgetId:e,alignment:s&&s.alignment,static:s&&s.static,problemNum:t.props.problemNum,apiOptions:t.getApiOptions(),keypadElement:t.props.keypadElement,questionCompleted:t.props.questionCompleted,onFocus:_.partial(t._onWidgetFocus,e),onBlur:_.partial(t._onWidgetBlur,e),findWidgets:t.findWidgets,reviewModeRubric:i,onChange:function r(n,i){var s=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false
t._setWidgetProps(e,n,i,s)},trackInteraction:a.track,isLastUsedWidget:e===t.state.lastUsedWidgetId})}
this.getSerializedState=function(e){return mapObject(e||t.state.widgetProps,function(e,r){var n=t.getWidgetInstance(r)
if(n&&n.getSerializedState){return n.getSerializedState()}else{return e}})}
this.restoreSerializedState=function(e,r){var n=_.keys(e)
var i=_.keys(t.state.widgetProps)
if(n.length!==i.length||_.intersection(n,i).length!==n.length){console.error("Refusing to restore bad serialized state:",e,"Current props:",t.state.widgetProps)
return}var s=1
var a=function e(){--s
if(r&&s===0){r()}}
t.setState({widgetProps:mapObject(e,function(e,r){var n=t.getWidgetInstance(r)
if(n&&n.restoreSerializedState){++s
var i=n.restoreSerializedState(e,a)
return _.extend({},t.state.widgetProps[r],i)}else{return e}})},function(){setTimeout(a,0)})}
this.showRationalesForCurrentlySelectedChoices=function(){Object.keys(t.props.widgets).forEach(function(e){var r=t.getWidgetInstance(e)
if(r&&r.showRationalesForCurrentlySelectedChoices){r.showRationalesForCurrentlySelectedChoices(t._getWidgetInfo(e).options)}})}
this.deselectIncorrectSelectedChoices=function(){Object.keys(t.props.widgets).forEach(function(e){var r=t.getWidgetInstance(e)
if(r&&r.deselectIncorrectSelectedChoices){r.deselectIncorrectSelectedChoices()}})}
this.findInternalWidgets=function(e){var r=void 0
if(typeof e==="string"){if(e.indexOf(" ")!==-1){var n=e
r=function e(t,r,i){return t===n}}else{var i=e
r=function e(t,r,n){return r.type===i}}}else{r=e}var s=t.widgetIds.filter(function(e){var n=t._getWidgetInfo(e)
var i=t.getWidgetInstance(e)
return r(e,n,i)}).map(t.getWidgetInstance)
return s}
this.findWidgets=function(e){return[].concat(t.findInternalWidgets(e),t.props.findExternalWidgets(e))}
this.getWidgetInstance=function(e){var r=t.refs["container:"+e]
if(!r){return null}return r.getWidget()}
this._onWidgetFocus=function(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[]
if(!_.isArray(r)){throw new Error("widget props.onFocus focusPath must be an Array, "+"but was"+JSON.stringify(r))}t._setCurrentFocus([e].concat(r))}
this._onWidgetBlur=function(e,r){var n=t._currentFocus
var i=[e].concat(r)
if(!_.isEqual(i,n)){return}_.defer(function(){if(_.isEqual(t._currentFocus,n)){t._setCurrentFocus(null)}})}
this.getContent=function(e,t){return t.jiptContent||e.content}
this.shouldRenderJiptPlaceholder=function(e,t){return typeof KA!=="undefined"&&KA.language==="en-pt"&&t.jiptContent==null&&e.content.indexOf("crwdns")!==-1}
this.replaceJiptContent=function(e,r){if(r==null){t.setState({jiptContent:e})}else{var n=/^\s*(`{3,}|~{3,})\s*(\S+)?\s*\n([\s\S]+?)\s*\1\s*$/
if(n.test(e)){}else if(/\S\n\s*\n\S/.test(e)){e="$\\large{\\red{\\text{Please translate each "+"paragraph to a single paragraph.}}}$"}else if(/^\s*$/.test(e)){e="$\\large{\\red{\\text{Translated paragraph is "+"currently empty}}}$"}var i=t.getContent(t.props,t.state)
var s=JiptParagraphs.parseToArray(i)
s[r]=e
t.setState({jiptContent:JiptParagraphs.joinFromArray(s)})}}
this.outputMarkdown=function(e,r){if(_.isArray(e)){var n=r.key
var i=[]
var s=false
for(var a=0;a<e.length;a++){r.key=a
r.paragraphIndex=a
var o=t.outputMarkdown(e[a],r)
var l=typeof o==="string"
if(typeof o==="string"&&s){i[i.length-1]+=o}else{i.push(o)}s=l}r.key=n
return i}else{t._foundTextNodes=false
r.foundFullWidth=false
var u=t.outputNested(e,r)
var d=void 0
if(t.translationIndex!=null){d=null}else{d=classNames({"perseus-paragraph-centered":!t._foundTextNodes,"perseus-paragraph-full-width":r.foundFullWidth&&e.content.length===1})}return React.createElement(QuestionParagraph,{key:r.key,className:d,translationIndex:t.translationIndex,paragraphIndex:r.paragraphIndex},React.createElement(ErrorBoundary,null,u))}}
this.outputNested=function(e,r){if(_.isArray(e)){var n=r.key
var i=[]
var s=false
for(var a=0;a<e.length;a++){r.key=a
var o=t.outputNested(e[a],r)
var l=typeof o==="string"
if(typeof o==="string"&&s){i[i.length-1]+=o}else{i.push(o)}s=l}r.key=n
return i}else{return t.outputNode(e,t.outputNested,r)}}
this.outputNode=function(e,r,n){var i=t.getApiOptions()
var s=i.imagePlaceholder
if(e.type==="widget"){var a=i.widgetPlaceholder
if(a){return a}t._foundTextNodes=true
if(_.contains(t.widgetIds,e.id)){return React.createElement("span",{key:n.key,className:"renderer-widget-error"},["Widget [[","☃"," ",e.id,"]] already exists."].join(""))}else{t.widgetIds.push(e.id)
return t.renderWidget(e.widgetType,e.id,n)}}else if(e.type==="blockMath"){var o=preprocessTex(e.content)
var l={overflowX:"auto",overflowY:"hidden",paddingTop:10,paddingBottom:10,marginTop:-10,marginBottom:-10}
if(i.isMobile){var u=16
var d={marginLeft:-u,marginRight:-u}
var p={paddingLeft:u,paddingRight:u}
return React.createElement("div",{key:n.key,className:"perseus-block-math",style:d},React.createElement(ErrorBoundary,null,React.createElement("div",{className:"perseus-block-math-inner",style:babelHelpers.extends({},l,p)},React.createElement(_zoomableTex2.default,null,o))))}else{return React.createElement("div",{key:n.key,className:"perseus-block-math"},React.createElement(ErrorBoundary,null,React.createElement("div",{className:"perseus-block-math-inner",style:l},React.createElement(TeX,null,o))))}}else if(e.type==="math"){var c=e.content.replace(/\{align[*]?\}/g,"{aligned}")
return React.createElement("span",{key:n.key,style:{whiteSpace:"nowrap"}},React.createElement(ErrorBoundary,null,React.createElement("span",null),React.createElement(TeX,{onRender:t.props.onRender},c),React.createElement("span",null)))}else if(e.type==="image"){if(s){return s}var g=_.has(t.props.images,e.target)?t.props.images[e.target]:null
var f=!n.inTable
return React.createElement(ErrorBoundary,{key:n.key},React.createElement(SvgImage,babelHelpers.extends({src:PerseusMarkdown.sanitizeUrl(e.target),alt:e.alt,title:e.title,responsive:f,onUpdate:t.props.onRender,zoomToFullSizeOnMobile:i.isMobile&&i.isArticle},g)))}else if(e.type==="columns"){t._isTwoColumn=true
return React.createElement(ErrorBoundary,{key:n.key},PerseusMarkdown.ruleOutput(e,r,n))}else if(e.type==="text"){if(rContainsNonWhitespace.test(e.content)){t._foundTextNodes=true}if(s&&rImageURL.test(e.content)){return s}else{return e.content}}else if(e.type==="table"||e.type==="titledTable"){n.inTable=true
var h=PerseusMarkdown.ruleOutput(e,r,n)
n.inTable=false
if(!i.isMobile){return h}var v=16
var m={marginLeft:-v,marginRight:-v}
var I={paddingLeft:0,paddingRight:0}
var y=React.createElement("div",{style:babelHelpers.extends({},I,{overflowX:"auto"})},React.createElement(ErrorBoundary,null,React.createElement(Zoomable,{animateHeight:true},h)))
return React.createElement("div",{style:m},y)}else{return React.createElement(ErrorBoundary,{key:n.key},PerseusMarkdown.ruleOutput(e,r,n))}}
this.handleRender=function(e){var r=t.props.onRender
var n=e.onRender
if(r!==noopOnRender||n!==noopOnRender){var i=$(ReactDOM.findDOMNode(t)).find("img")
if(n!==noopOnRender){i.off("load",n)}if(r!==noopOnRender){i.on("load",r)}}r()}
this._setCurrentFocus=function(e){var r=t.getApiOptions()
if(!isIdPathPrefix(e,t._currentFocus)){var n=t._currentFocus
if(n){t.blurPath(n)}t._currentFocus=e
if(r.onFocusChange!=null){r.onFocusChange(t._currentFocus,n)}}}
this.focus=function(){var e=void 0
var r=void 0
for(var n=0;n<t.widgetIds.length;n++){var i=t.widgetIds[n]
var s=t.getWidgetInstance(i)
var a=s&&s.focus&&s.focus()
if(a){e=i
r=a
break}}if(e){var o=void 0
if((typeof r==="undefined"?"undefined":babelHelpers.typeof(r))==="object"){o=[e].concat(r.path||[])}else{o=[e]}t._setCurrentFocus(o)
return true}}
this.getDOMNodeForPath=function(e){var r=_.first(e)
var n=_.rest(e)
var i=t.getWidgetInstance(r)
var s=i&&i.getDOMNodeForPath
if(s){return s(n)}else if(n.length===0){return ReactDOM.findDOMNode(i)}}
this.getGrammarTypeForPath=function(e){var r=_.first(e)
var n=_.rest(e)
var i=t.getWidgetInstance(r)
if(i&&i.getGrammarTypeForPath){return i.getGrammarTypeForPath(n)}}
this.getInputPaths=function(){var e=[]
_.each(t.widgetIds,function(r){var n=t.getWidgetInstance(r)
if(n&&n.getInputPaths){var i=n.getInputPaths()
_.each(i,function(t){var n=[r].concat(t)
e.push(n)})}})
return e}
this.focusPath=function(e){if(_.isEqual(t._currentFocus,e)){return}else if(t._currentFocus){t.blurPath(t._currentFocus)}var r=_.first(e)
var n=_.rest(e)
var i=t.getWidgetInstance(r)
if(i&&i.focusInputPath){i.focusInputPath(n)}}
this.blurPath=function(e){if(!_.isEqual(t._currentFocus,e)){return}var r=_.first(e)
var n=_.rest(e)
var i=t.getWidgetInstance(r)
if(i){var s=t.getWidgetInstance(r)
if(s&&s.blurInputPath){s.blurInputPath(n)}}}
this.blur=function(){if(t._currentFocus){t.blurPath(t._currentFocus)}}
this.serialize=function(){var e={}
_.each(t.state.widgetInfo,function(t,r){var n=this.getWidgetInstance(r)
var i=n.serialize()
if(!_.isEmpty(i)){e[r]=i}},t)
return e}
this.emptyWidgets=function(){return _.filter(t.widgetIds,function(e){var r=t._getWidgetInfo(e)
if(r.static){return false}var n=t.getWidgetInstance(e)
if(n&&n.simpleValidate){var i=n.simpleValidate(r.options,null)
return Util.scoreIsEmpty(i)}})}
this._setWidgetProps=function(e,r,n,i){t.setState(function(n){var s
var a=babelHelpers.extends({},n.widgetProps,(s={},s[e]=babelHelpers.extends({},n.widgetProps[e],r),s))
var o=i?n.lastUsedWidgetId:e
if(!i){t.props.onSerializedStateUpdated(t.getSerializedState(a))}return{lastUsedWidgetId:o,widgetProps:a}},function(){setTimeout(function(){var r=n&&n()
if(!i){t.props.onInteractWithWidget(e)}if(r!==false){t._setCurrentFocus([e])}},0)})}
this.setInputValue=function(e,r,n){var i=_.first(e)
var s=_.rest(e)
var a=t.getWidgetInstance(i)
if(a&&a.setInputValue){a.setInputValue(s,r,n)}}
this.getUserInput=function(){return _.map(t.widgetIds,function(e){var r=t.getWidgetInstance(e)
if(r&&r.getUserInput){return r.getUserInput()}})}
this.getWidgetIds=function(){return t.widgetIds}
this.getAllWidgetIds=function(){return _.map(t.getWidgetIds(),function(e){var r="group"
if(e.substring(0,r.length)===r){var n=t.getWidgetInstance(e)
if(n&&n.getRenderer){return{id:e,children:n.getRenderer().getAllWidgetIds()}}}return{id:e,children:[]}})}
this.getUserInputForWidgets=function(){return mapObjectFromArray(t.widgetIds,function(e){var r=t.getWidgetInstance(e)
if(r&&r.getUserInput){return r.getUserInput()}})}
this.scoreWidgets=function(){var e=t.state.widgetInfo
var r=t.getApiOptions().onInputError||function(){}
var n=_.filter(t.widgetIds,function(t){var r=e[t]
var n=r.graded==null||r.graded
var i=r.static
return n&&!i})
var i={}
_.each(n,function(n){var s=e[n]
var a=t.getWidgetInstance(n)
if(a&&a.simpleValidate){i[n]=a.simpleValidate(s.options,r)}})
return i}
this.score=function(){return _.reduce(t.scoreWidgets(),Util.combineScores,Util.noScore)}
this.guessAndScore=function(){var e=t.getUserInput()
var r=t.score()
return[e,r]}
this.examples=function(){var e=t.widgetIds
var r=_.compact(_.map(e,function(e){return e.examples?e.examples():null}))
if(!r.length){return null}var n=_.all(r,function(e){return _.isEqual(r[0],e)})
if(!n){return null}return r[0]}
this.handleNotGorgonLintErrors=function(e){if(!t._isMounted){return}t.setState({notGorgonLintErrors:e})}}
module.exports=Renderer

});
KAdefine("javascript/perseus-all-package/server-item-renderer.jsx", function(require, module, exports) {
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _underscore=require("underscore")
var _underscore2=babelHelpers.interopRequireDefault(_underscore)
var _aphrodite=require("aphrodite")
var _perseusApi=require("./perseus-api.jsx")
var _hintsRenderer=require("./hints-renderer.jsx")
var _hintsRenderer2=babelHelpers.interopRequireDefault(_hintsRenderer)
var _renderer=require("./renderer.jsx")
var _renderer2=babelHelpers.interopRequireDefault(_renderer)
var _util=require("./util.js")
var _util2=babelHelpers.interopRequireDefault(_util)
var _objective_=require("./interactive2/objective_.js")
var ServerItemRenderer=function(e){babelHelpers.inherits(t,e)
function t(){var r,i,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,o=Array(s),u=0;u<s;u++){o[u]=arguments[u]}return n=(r=(i=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),i),i.state={questionCompleted:false,questionHighlightedWidgets:[]},i._handleFocusChange=function(e,t){if(e!=null){i._setCurrentFocus(e)}else{i._onRendererBlur(t)}},i.handleInteractWithWidget=function(e){var t=_underscore2.default.difference(i.state.questionHighlightedWidgets,[e])
i.setState({questionCompleted:false,questionHighlightedWidgets:t})
if(i.props.apiOptions.interactionCallback){i.props.apiOptions.interactionCallback()}},r),babelHelpers.possibleConstructorReturn(i,n)}t.prototype.componentDidMount=function e(){this._isMounted=true
this._currentFocus=null}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){this.setState({questionHighlightedWidgets:[]})}
t.prototype.componentDidUpdate=function e(){if(this.props.apiOptions.answerableCallback){var t=this.questionRenderer.emptyWidgets().length===0
this.props.apiOptions.answerableCallback(t)}}
t.prototype.componentWillUnmount=function e(){this._isMounted=false}
t.prototype._setCurrentFocus=function e(t){var r=this
var i=this.props,n=i.apiOptions,s=n.isMobile,o=n.onFocusChange,u=i.keypadElement
var a=this._currentFocus
this._currentFocus=t
var p=this.getInputPaths()
var l=this._currentFocus&&p.some(function(e){return _util2.default.inputPathsEqual(e,r._currentFocus)})
if(o!=null){o(this._currentFocus,a,l&&u&&u.getDOMNode(),l&&this.questionRenderer.getDOMNodeForPath(t))}if(u&&s){if(l){u.activate()}else{u.dismiss()}}}
t.prototype._onRendererBlur=function e(t){var r=this
var i=this._currentFocus
if(!_underscore2.default.isEqual(t,i)){return}_underscore2.default.defer(function(){if(r._isMounted&&_underscore2.default.isEqual(r._currentFocus,i)){r._setCurrentFocus(null)}})}
t.prototype._setWidgetProps=function e(t,r,i){this.questionRenderer._setWidgetProps(t,r,i)}
t.prototype.setInputValue=function e(t,r,i){return this.questionRenderer.setInputValue(t,r,i)}
t.prototype.focusPath=function e(t){return this.questionRenderer.focusPath(t)}
t.prototype.blurPath=function e(t){return this.questionRenderer.blurPath(t)}
t.prototype.getDOMNodeForPath=function e(t){return this.questionRenderer.getDOMNodeForPath(t)}
t.prototype.getGrammarTypeForPath=function e(t){return this.questionRenderer.getGrammarTypeForPath(t)}
t.prototype.getInputPaths=function e(){var t=this.questionRenderer.getInputPaths()
return t}
t.prototype.focus=function e(){return this.questionRenderer.focus()}
t.prototype.blur=function e(){if(this._currentFocus){this.blurPath(this._currentFocus)}}
t.prototype.getNumHints=function e(){return this.props.item.hints.length}
t.prototype.scoreInput=function e(){var t=this.questionRenderer.guessAndScore()
var r=t[0]
var i=t[1]
var n=[r,[]]
var s=_util2.default.keScoreFromPerseusScore(i,n,this.questionRenderer.getSerializedState())
var o=this.questionRenderer.emptyWidgets()
this.setState({questionCompleted:s.correct,questionHighlightedWidgets:o})
return s}
t.prototype.getWidgetIds=function e(){return this.questionRenderer.getWidgetIds()}
t.prototype.scoreWidgets=function e(){var t=this.questionRenderer.scoreWidgets()
var r=this.questionRenderer.getUserInputForWidgets()
var i=this.questionRenderer.getSerializedState()
return(0,_objective_.mapObject)(t,function(e,t){return _util2.default.keScoreFromPerseusScore(e,r[t],i)})}
t.prototype.getSerializedState=function e(){return{question:this.questionRenderer.getSerializedState(),hints:this.hintsRenderer.getSerializedState()}}
t.prototype.restoreSerializedState=function e(t,r){var i=2
var n=function e(){--i
if(r&&i===0){r()}}
this.questionRenderer.restoreSerializedState(t.question,n)
this.hintsRenderer.restoreSerializedState(t.hints,n)}
t.prototype.showRationalesForCurrentlySelectedChoices=function e(){this.questionRenderer.showRationalesForCurrentlySelectedChoices()}
t.prototype.deselectIncorrectSelectedChoices=function e(){this.questionRenderer.deselectIncorrectSelectedChoices()}
t.prototype.render=function e(){var t=this
var r=babelHelpers.extends({},_perseusApi.Options.defaults,this.props.apiOptions,{onFocusChange:this._handleFocusChange})
var i=React.createElement(_renderer2.default,babelHelpers.extends({keypadElement:this.props.keypadElement,problemNum:this.props.problemNum,onInteractWithWidget:this.handleInteractWithWidget,highlightedWidgets:this.state.questionHighlightedWidgets,apiOptions:r,questionCompleted:this.state.questionCompleted,reviewMode:this.props.reviewMode,ref:function e(r){return t.questionRenderer=r}},this.props.item.question))
var n=React.createElement(_hintsRenderer2.default,{hints:this.props.item.hints,hintsVisible:this.props.hintsVisible,apiOptions:r,ref:function e(r){return t.hintsRenderer=r}})
return React.createElement("div",null,React.createElement("div",null,i),React.createElement("div",{className:r.isMobile?undefined:(0,_aphrodite.css)(styles.hintsContainer)},n))}
return t}(React.Component)
ServerItemRenderer.defaultProps={apiOptions:{}}
var styles=_aphrodite.StyleSheet.create({hintsContainer:{marginLeft:50}})
module.exports=ServerItemRenderer

});
KAdefine("javascript/perseus-all-package/sigfigs.jsx", function(require, module, exports) {
function SignificantFigures(e){this.order=parseOrder(e)
this.mantissa=parseMantissa(e)
this.positive=parseSign(e)
this.sigFigs=this.mantissa.length
this.sigDecs=this.order-this.mantissa.length}function displaySigFigs(e,r,a,s){var i=""+e
var t=parseOrder(i)
var f=parseMantissa(i)
var l=parseSign(i)
var n
var v
var g
var u=false
if(e==0||f==""||f=="0"){f=""
for(k=0;k<r;k++){f+="0"}t=r+a
if(a<0&&-a>=r){u=true}}else{v=t-f.length-a
g=r-f.length
n=Math.min(g,v)
if(n<0){var h=round(f,-n)
if(h.length>f.length+n){t++
if(v>g){h=round(h,1)}}f=h}else if(n>0){for(k=0;k<n;k++){f+="0"}}if(f==""||f=="0"){f="0"
l=true
t=1+a
if(t!=0){u=true}}}var c=s||f.length>20||t>4||t<-2||t-f.length>0&&trailingZeros(f)>0||u
var o=""
if(!l){o+="-"}if(c){o+=f.charAt(0)
if(f.length>1){o+="."+f.substring(1,f.length)}if(t-1!=0){o+=" x 10^"+(t-1)}}else{var p=""
var b=""
var d=true
if(t>0){if(f.length>t){p=f.substring(0,t)
b=f.substring(t,f.length)}else{p=f
d=trailingZeros(f)!=0
for(var k=0;k<t-f.length;k++){p+="0"}}}else{for(k=0;k<-t;k++){b+="0"}b+=f}o+=(p==""?"0":p)+(d?".":"")+b}return o}function trailingZeros(e){var r=0
for(var a=e.length-1;a>=0;a--){var s=e.charAt(a)
if(s=="0"){r++}else{return r}}return r}function parseSign(e){var r=true
var a=false
var s=false
var i=""
var t=""
var f=""
var l=0
var n=0
var v=true
for(var g=0;g<e.length;g++){var u=e.charAt(g)
if(u>="1"&&u<="9"){f+=i+u
i=""
s=true
if(!a){n++
l++}r=false}else if(u=="0"){if(a){if(s){f+=i+u
i=""}else{t+=u
l--}}else{n++
if(s){t+=u
l++
i+=u}else{t+=u}}r=false}else if(!a&&u=="."){f+=i
i=""
a=true
r=false}else if(u=="e"||u=="E"&&g+1<e.length){var h=parseInt(e.substring(g+1,e.length))
l+=h
n+=h
g=e.length}else if(r&&(u=="+"||u=="-")){if(u=="-"){v=!v}}}if(f==""){return true}else{return v}}function parseMantissa(e){var r=true
var a=false
var s=false
var i=""
var t=""
var f=""
var l=0
var n=0
var v=true
for(var g=0;g<e.length;g++){var u=e.charAt(g)
if(u>="1"&&u<="9"){f+=i+u
i=""
s=true
if(!a){n++
l++}r=false}else if(u=="0"){if(a){if(s){f+=i+u
i=""}else{t+=u
l--}}else{n++
if(s){t+=u
l++
i+=u}else{t+=u}}r=false}else if(!a&&u=="."){f+=i
i=""
a=true
r=false}else if(u=="e"||u=="E"&&g+1<e.length){var h=parseInt(e.substring(g+1,e.length))
l+=h
n+=h
g=e.length}else if(r&&(u=="+"||u=="-")){if(u=="-"){v=!v}}}if(f==""){return t}else{return f}}function parseOrder(e){var r=true
var a=false
var s=false
var i=""
var t=""
var f=""
var l=0
var n=0
var v=true
for(var g=0;g<e.length;g++){var u=e.charAt(g)
if(u>="1"&&u<="9"){f+=i+u
i=""
s=true
if(!a){n++
l++}r=false}else if(u=="0"){if(a){if(s){f+=i+u
i=""}else{t+=u
l--}}else{n++
if(s){t+=u
l++
i+=u}else{t+=u}}r=false}else if(!a&&u=="."){f+=i
i=""
a=true
r=false}else if(u=="e"||u=="E"&&g+1<e.length){var h=parseInt(e.substring(g+1,e.length))
l+=h
n+=h
g=e.length}else if(r&&(u=="+"||u=="-")){if(u=="-"){v=!v}}}if(f==""){return n}else{return l}}function round(e,r){var a=e.length-r-1
if(a<0){return""}else if(a>=e.length-1){return e}else{var s=e.charAt(a+1)
var i=e.charAt(a)
var t=false
if(s>"5"){t=true}else if(s=="5"){for(var f=a+2;f<e.length;f++){if(e.charAt(f)!="0"){t=true}}if(i%2==1){t=true}}var l=""
for(var n=a;n>=0;n--){var v=e.charAt(n)
if(t){var g
if(v=="9"){g="0"}else{switch(v){case"0":g="1"
break
case"1":g="2"
break
case"2":g="3"
break
case"3":g="4"
break
case"4":g="5"
break
case"5":g="6"
break
case"6":g="7"
break
case"7":g="8"
break
case"8":g="9"
break}t=false}l=g+l}else{l=v+l}}if(t){l="1"+l}return l}}module.exports={SignificantFigures:SignificantFigures,displaySigFigs:displaySigFigs}

});
KAdefine("javascript/perseus-all-package/simple-button.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var SimpleButton=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props,o=r.children,t=r.color,n=r.onClick,a=babelHelpers.objectWithoutProperties(r,["children","color","onClick"])
return React.createElement("div",babelHelpers.extends({className:css(styles.baseButton,styles[t]),onClick:n},a),o)}
return r}(React.Component)
SimpleButton.propTypes={children:PropTypes.node,color:PropTypes.oneOf(["orange","green"]),onClick:PropTypes.func}
SimpleButton.defaultProps={children:null,color:"green",onClick:function e(){}}
var styles=StyleSheet.create({baseButton:{top:"0",fontSize:"11px",padding:"3px 10px",backgroundRepeat:"repeat-x",borderColor:"\n            rgba(0, 0, 0, 0.1)\n            rgba(0, 0, 0, 0.1)\n            rgba(0, 0, 0, 0.25)\n        ",color:"#ffffff",borderRadius:"3px",lineHeight:"15px",cursor:"pointer",transition:"box-shadow ease-in-out 0.15s",appearance:"none",textDecoration:"none",textAlign:"center",":hover":{boxShadow:"0 1px 1px rgba(0, 0, 0, 0.35),\n                inset 0 0 50px 5px rgba(255, 255, 255, 0.2)"}},green:{border:"1px solid #7fab07",backgroundColor:"#80ac07",backgroundImage:"linear-gradient(to bottom, #8aba08, #719807)",":hover":{borderBottomColor:"#547105",backgroundColor:"#719807"}},orange:{border:"1px solid #d45704",backgroundColor:"#d55704",backgroundImage:"linear-gradient(to bottom, #e35d04, #c04f03)",":hover":{borderBottomColor:"#983e03",bakgroundColor:"#c04f03"}}})
module.exports=SimpleButton

});
KAdefine("javascript/perseus-all-package/styles/constants.js", function(require, module, exports) {
module.exports={baseFontFamily:"'Proxima Nova',sans-serif",boldFontFamily:"'Proxima Nova Semibold',sans-serif",green:"#76A005",kaGreen:"#71B307",blue:"#1C758A",gray:"#AAAAAA",red:"#FFBABA",grayLight:"#AAAAAA",grayLighter:"#DDDDDD",learnstormBlue:"#4898FC",white:"#FFFFFF",gray98:"#FAFAFA",gray97:"#F6F7F7",gray95:"#F0F1F2",gray90:"#E3E5E6",gray85:"#D6D8DA",gray76:"#BABEC2",gray68:"#888D93",gray41:"#626569",gray25:"#3B3e40",gray17:"#21242c",black:"#000000",warning1:"#F86700",warning3:"#C75300",pureSmMin:"568px",pureMdMin:"768px",pureLgMin:"1024px",pureXlMin:"1280px",pureXsMax:"567px",pureSmMax:"767px",pureMdMax:"1023px",pureLgMax:"1279px",tableBackgroundAccent:"#F9F9F9",gtpBlue:"#4c00ff",gtpIncorrectColor:"#babec2",gtpCorrectColor:"#ffbe26",satBlue:"#0084CE",satSelectedBackgroundColor:"#E4F3F9",satActiveBackgroundColor:"#D0EDF4",satCorrectColor:"#009900",satCorrectBorderColor:"#00CC00",satCorrectBackgroundColor:"#E4F7E4",satIncorrectColor:"#990000",satIncorrectBorderColor:"#CC5252",satIncorrectBackgroundColor:"#F2EBEB",zIndexScratchPad:"1",zIndexAboveScratchpad:"2",zIndexInteractiveComponent:"3",zIndexCurrentlyDragging:"4",zIndexCalculator:"5",phoneMargin:16,negativePhoneMargin:-16,hintBorderWidth:4,baseUnitPx:16,interactiveSizes:{defaultBoxSize:400,defaultBoxSizeSmall:288},circleSize:24,radioMarginWidth:2,warningColor:"#f86700",warningColorHover:"#df5c00",warningColorActive:"#c75300",publishBlockingErrorColor:"#be2612"}
module.exports.radioBorderColor=module.exports.gray76
module.exports.checkedColor=module.exports.kaGreen

});
KAdefine("javascript/perseus-all-package/styles/media-queries.js", function(require, module, exports) {
var _require=require("./constants.js"),pureXsMax=_require.pureXsMax,pureSmMin=_require.pureSmMin,pureSmMax=_require.pureSmMax,pureMdMin=_require.pureMdMin,pureMdMax=_require.pureMdMax,pureLgMin=_require.pureLgMin,pureLgMax=_require.pureLgMax,pureXlMin=_require.pureXlMin
module.exports={xs:"@media screen and (max-width: "+pureXsMax+")",sm:"@media screen and (min-width: "+pureSmMin+") and "+("(max-width: "+pureSmMax+")"),md:"@media screen and (min-width: "+pureMdMin+") and "+("(max-width: "+pureMdMax+")"),lg:"@media screen and (min-width: "+pureLgMin+") and "+("(max-width: "+pureLgMax+")"),xl:"@media screen and (min-width: "+pureXlMin+")",smOrSmaller:"@media screen and (max-width: "+pureSmMax+")",mdOrSmaller:"@media screen and (max-width: "+pureMdMax+")",lgOrSmaller:"@media screen and (max-width: "+pureLgMax+")",smOrLarger:"@media screen and (min-width: "+pureSmMin+")",mdOrLarger:"@media screen and (min-width: "+pureMdMin+")",lgOrLarger:"@media screen and (min-width: "+pureLgMin+")"}

});
KAdefine("javascript/perseus-all-package/styles/shared.js", function(require, module, exports) {
var _responsiveLabel
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet
var mediaQueries=require("./media-queries.js")
var _require2=require("./constants.js"),zIndexAboveScratchpad=_require2.zIndexAboveScratchpad,zIndexInteractiveComponent=_require2.zIndexInteractiveComponent,radioBorderColor=_require2.radioBorderColor,checkedColor=_require2.checkedColor,circleSize=_require2.circleSize,radioMarginWidth=_require2.radioMarginWidth
module.exports=StyleSheet.create({perseusInteractive:{zIndex:zIndexInteractiveComponent,position:"relative"},aboveScratchpad:{position:"relative",zIndex:zIndexAboveScratchpad},blankBackground:{backgroundColor:"#FDFDFD"},perseusSrOnly:{border:0,clip:"rect(0,0,0,0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1},responsiveLabel:(_responsiveLabel={},_responsiveLabel[mediaQueries.smOrSmaller]={fontSize:14,lineHeight:1.3},_responsiveLabel[mediaQueries.md]={fontSize:17,lineHeight:1.4},_responsiveLabel[mediaQueries.lgOrLarger]={fontSize:20,lineHeight:1.4},_responsiveLabel),responsiveInput:{display:"inline-block",WebkitAppearance:"none",appearance:"none","::-ms-check":{display:"none"},backgroundColor:"#fff",border:"2px solid #fff",boxShadow:"0 0px 0px 1px "+radioBorderColor,outline:"none",boxSizing:"border-box",flexShrink:0,marginBottom:1,marginLeft:1,marginRight:1,marginTop:1,height:circleSize-2,width:circleSize-2},responsiveRadioInput:{borderRadius:"50%",":checked":{backgroundColor:checkedColor,border:"none",borderRadius:"50%",boxShadow:"inset 0px 0px 0px 2px white, "+("0 0px 0px 2px "+checkedColor),marginTop:radioMarginWidth,marginBottom:radioMarginWidth,marginLeft:radioMarginWidth,marginRight:radioMarginWidth,height:circleSize-2*radioMarginWidth,width:circleSize-2*radioMarginWidth}},responsiveRadioInputActive:{backgroundColor:"#fff",border:"2px solid #fff",borderRadius:"50%",boxShadow:"0 0px 0px 2px "+checkedColor,marginTop:radioMarginWidth,marginBottom:radioMarginWidth,marginLeft:radioMarginWidth,marginRight:radioMarginWidth,height:circleSize-2*radioMarginWidth,width:circleSize-2*radioMarginWidth,":checked":{backgroundColor:"#fff"}},disableTextSelection:{userSelect:"none"}})

});
KAdefine("javascript/perseus-all-package/tex-wrangler.js", function(require, module, exports) {
function findEndpoint(e,r){var n=0
for(var i=r,t=e.length;i<t;i++){var a=e[i]
if(a==="{"){n++}else if(a==="}"){n--}if(n<0){return i}}return e.length}function parseNextExpression(e,r,n){var i=e.indexOf("{",r)
var t=i+1
var a=findEndpoint(e,t)
var f=e.substring(t,a)
var x=walkTex(f,n)
return{endpoint:a,expression:x}}function getNextFracIndex(e,r){var n="\\dfrac"
var i="\\frac"
var t=e.indexOf(i,r)
var a=e.indexOf(n,r)
if(t>-1&&a>-1){return Math.min(t,a)}else if(t>-1){return t}else if(a>-1){return a}else{return-1}}function walkTex(e,r){if(!e){return""}var n=""
var i=0
var t=getNextFracIndex(e,i)
while(t>-1){n+=e.substring(i,t)
i=t
var a=parseNextExpression(e,i,r)
i=a.endpoint+1
var f=parseNextExpression(e,i,r)
i=f.endpoint+1
if(n.length){n+=" "}n+=r(a.expression,f.expression)
t=getNextFracIndex(e,i)}n+=e.slice(i)
return n}function modifyTex(e){function r(e){return e.indexOf("\\frac")>-1||e.indexOf("\\dfrac")>-1}var n=function e(n,i){var t
if(r(n)||r(i)){t="\\dfrac"}else{t="\\frac"}return t+" {"+n+"}{"+i+"}"}
return walkTex(e,n)}function parseTex(e){var r=function e(r,n){return r+"/"+n}
var n=walkTex(e,r)
return n.replace("\\%","%")}module.exports={parseTex:parseTex,modifyTex:modifyTex}

});
KAdefine("javascript/perseus-all-package/traversal.jsx", function(require, module, exports) {
var _=require("underscore")
var objective_=require("./interactive2/objective_.js")
var Widgets=require("./widgets.js")
var noop=function e(){}
var deepCallbackFor=function e(r,n,t){var i=function e(i,a){var o=Widgets.upgradeWidgetInfoToLatestVersion(i)
var v=Widgets.getVersion(o.type)
var d
if(v&&o.version.major===v.major){d=Widgets.traverseChildWidgets(o,function(n){return traverseRenderer(n,r,e,t)})}else{d=o}var u=n(d,a)
if(u!==undefined){return u}else{return d}}
return i}
var traverseRenderer=function e(r,n,t,i){var a=r.content
if(r.content!=null){var o=n(r.content)
if(o!==undefined){a=o}}var v=objective_.mapObject(r.widgets||{},function(e,r){if(e==null||e.type==null){return e}return t(e,r)})
var d=_.extend({},r,{content:a,widgets:v})
var u=i(d)
if(u!==undefined){return u}else{return d}}
var traverseRendererDeep=function e(r,n,t,i){n=n||noop
t=t||noop
i=i||noop
return traverseRenderer(r,n,deepCallbackFor(n,t,i),i)}
module.exports={traverseRendererDeep:traverseRendererDeep}

});
KAdefine("javascript/perseus-all-package/types.js", function(require, module, exports) {

});
KAdefine("javascript/perseus-all-package/util/answer-types.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var i18n=require("../../shared-package/i18n.js")
var KAS=require("../../../third_party/javascript-khansrc/kas/kas.js")
var KhanMath=require("./math.js")
var MAXERROR_EPSILON=Math.pow(2,-42)
var KhanAnswerTypes={predicate:{defaultForms:"integer, proper, improper, mixed, decimal",createValidatorFunctional:function e(r,a){a=_.extend({simplify:"required",ratio:false,forms:KhanAnswerTypes.predicate.defaultForms},a)
var t=void 0
if(!_.isArray(a.forms)){t=a.forms.split(/\s*,\s*/)}else{t=a.forms}if(a.inexact===undefined){a.maxError=0}a.maxError=+a.maxError+MAXERROR_EPSILON
if(_.contains(t,"percent")){t=_.without(t,"percent")
t.push("percent")}var s=function e(r){r=r.replace(/\u2212/,"-").replace(/([+-])\s+/g,"$1").replace(/(^\s*)|(\s*$)/gi,"")
var t=r.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/)
var s=r.match(/^([+-]?)\\frac\{([+-]?\d+)\}\{([+-]?\d+)\}$/)
var i=parseInt(r,10)
if(t||s){var n=void 0
var u=void 0
var l=true
if(t){n=parseFloat(t[1])
u=parseFloat(t[2])}else{n=parseFloat(s[2])
if(s[1]==="-"){if(n<0){l=false}n=-n}u=parseFloat(s[3])}l=l&&u>0&&(a.ratio||u!==1)&&KhanMath.getGCD(n,u)===1
return[{value:n/u,exact:l}]}else if(!isNaN(i)&&""+i===r){return[{value:i,exact:true}]}return[]}
var i={integer:function e(r){var a=i.decimal(r)
var t=i.decimal(r,1)
if(a[0].value!=null&&a[0].value===t[0].value||a[1].value!=null&&a[1].value===t[1].value){return a}return[]},proper:function e(r){return $.map(s(r),function(e){if(Math.abs(e.value)<1){return[e]}else{return[]}})},improper:function e(r){return $.map(s(r),function(e){if(Math.abs(e.value)>=1){return[e]}else{return[]}})},pi:function e(r){var a=void 0
var t=[]
r=r.replace(/\u2212/,"-")
if(a=r.match(/^([+-]?)\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)$/i)){t=[{value:parseFloat(a[1]+"1"),exact:true}]}else if(a=r.match(/^([+-]?\s*\d+\s*(?:\/\s*[+-]?\s*\d+)?)\s*\*?\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)$/i)){t=s(a[1])}else if(a=r.match(/^([+-]?)\s*(\d+)\s*([+-]?\d+)\s*\/\s*([+-]?\d+)\s*\*?\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)$/i)){var n=parseFloat(a[1]+"1")
var u=parseFloat(a[2])
var l=parseFloat(a[3])
var o=parseFloat(a[4])
var c=l<o&&KhanMath.getGCD(l,o)===1
t=[{value:n*(u+l/o),exact:c}]}else if(a=r.match(/^([+-]?\s*\d+)\s*\*?\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)\s*(?:\/\s*([+-]?\s*\d+))?$/i)){t=s(a[1]+"/"+a[3])}else if(a=r.match(/^([+-]?)\s*\*?\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)\s*(?:\/\s*([+-]?\d+))?$/i)){t=s(a[1]+"1/"+a[3])}else if(r==="0"){t=[{value:0,exact:true}]}else if(a=r.match(/^(.+)\s*\*?\s*(\\?pi|p|\u03c0|\\?tau|t|\u03c4|pau)$/i)){t=i.decimal(a[1])}else{t=_.reduce(KhanAnswerTypes.predicate.defaultForms.split(/\s*,\s*/),function(e,a){return e.concat(i[a](r))},[])
var p=false
var f=parseFloat(r)
if(!isNaN(f)&&f!==parseInt(r)){var d=Math.PI/12
var m=d*Math.round(f/d)
if(Math.abs(f-m)<.01){p=true}}else if(r.match(/\/\s*7/)){p=true}if(p){_.each(t,function(e){e.piApprox=true})}return t}var v=Math.PI
if(r.match(/\\?tau|t|\u03c4/)){v=Math.PI*2}if(r.match(/pau/)){v=Math.PI*1.5}$.each(t,function(e,r){r.value*=v})
return t},coefficient:function e(r){var a=[]
r=r.replace(/\u2212/,"-")
if(r===""){a=[{value:1,exact:true}]}else if(r==="-"){a=[{value:-1,exact:true}]}return a},log:function e(r){var a=void 0
var t=[]
r=r.replace(/\u2212/,"-")
r=r.replace(/[ \(\)]/g,"")
if(a=r.match(/^log\s*(\S+)\s*$/i)){t=i.decimal(a[1])}else if(r==="0"){t=[{value:0,exact:true}]}return t},percent:function e(r){r=$.trim(r)
var a=false
if(r.indexOf("%")===r.length-1){r=$.trim(r.substring(0,r.length-1))
a=true}var t=i.decimal(r)
$.each(t,function(e,r){r.exact=a
r.value=r.value/100})
return t},mixed:function e(r){var a=r.replace(/\u2212/,"-").replace(/([+-])\s+/g,"$1").match(/^([+-]?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/)
if(a){var t=parseFloat(a[1]+"1")
var s=parseFloat(a[2])
var i=parseFloat(a[3])
var n=parseFloat(a[4])
var u=i<n&&KhanMath.getGCD(i,n)===1
return[{value:t*(s+i/n),exact:u}]}return[]},decimal:function e(r,t){if(t==null){t=1e10}var s=function e(r){r=$.trim(r)
var s=r.replace(/\u2212/,"-").replace(/([+-])\s+/g,"$1").match(/^([+-]?(?:\d{1,3}(?:[, ]?\d{3})*\.?|\d{0,3}(?:[, ]?\d{3})*\.(?:\d{3}[, ]?)*\d{1,3}))$/)
var i=r.match(/^0[0,]*,/)
if(s&&!i){var n=parseFloat(s[1].replace(/[, ]/g,""))
if(a.inexact===undefined){n=Math.round(n*t)/t}return n}}
var i=function e(r){r=r.replace(/([\.,])/g,function(_,e){return e==="."?",":"."})
return s(r)}
return[{value:s(r),exact:true},{value:i(r),exact:true}]}}
return function(e){var s=a.fallback!=null?""+a.fallback:""
e=$.trim(e)||s
var n={empty:e==="",correct:false,message:null,guess:e}
$.each(t,function(t,s){var u=i[s](e)
for(var l=0,o=u.length;l<o;l++){var c=u[l].value
var p=u[l].exact
var f=u[l].piApprox
if(r(c,a.maxError)){if(p||a.simplify==="optional"){n.correct=true
n.message=a.message||null
n.empty=false}else if(s==="percent"){n.empty=true
n.message=i18n._("Your answer is almost correct, "+"but it is missing a "+"<code>\\%</code> at the end.")}else{if(a.simplify!=="enforced"){n.empty=true}n.message=i18n._("Your answer is almost correct, "+"but it needs to be simplified.")}return false}else if(f&&r(c,Math.abs(c*.001))){n.empty=true
n.message=i18n._("Your answer is close, but you may "+"have approximated pi. Enter your "+"answer as a multiple of pi, like "+"<code>12\\ \\text{pi}</code> or "+"<code>2/3\\ \\text{pi}</code>")}}})
if(n.correct===false){var u=false
_.each(i,function(r){var a=_.any(r(e),function(e){return e.value!=null&&!_.isNaN(e.value)})
if(a){u=true}})
if(!u){n.empty=true
n.message=i18n._("We could not understand your "+"answer. Please check your answer for extra "+"text or symbols.")
return n}}return n}}},number:{convertToPredicate:function e(r,a){var t=parseFloat($.trim(r))
return[function(e,r){return Math.abs(e-t)<r},$.extend({},a,{type:"predicate"})]},createValidatorFunctional:function e(r,a){var t
return(t=KhanAnswerTypes.predicate).createValidatorFunctional.apply(t,KhanAnswerTypes.number.convertToPredicate(r,a))}},expression:{parseSolution:function e(r,a){var t=KAS.parse(r,a)
if(!t.parsed){throw new Error("The provided solution ("+r+") didn't parse.")}else if(a.simplified&&!t.expr.isSimplified()){throw new Error("The provided solution ("+r+") isn't fully expanded and simplified.")}else{t=t.expr}return t},createValidatorFunctional:function e(r,a){return function(e){var t={empty:false,correct:false,message:null,guess:e,ungraded:false}
if(!e){t.empty=true
return t}var s=KAS.parse(e,a)
if(!s.parsed){t.empty=true
return t}if(typeof r==="string"){r=KhanAnswerTypes.expression.parseSolution(r,a)}var i=KAS.compare(s.expr,r,a)
if(i.equal){t.correct=true}else if(i.wrongVariableNames||i.wrongVariableCase){t.ungraded=true
t.message=i.wrongVariableCase?i18n._("Check your variables; one or more are "+" using the wrong case (upper or lower)."):i18n._("Check your variables; you may have used "+"the wrong letter for one or more of them.")}else if(i.message){t.message=i.message}else{var n=KAS.parse(e.replace(/[xX]/g,"*"),a)
if(n.parsed){var u=KAS.compare(n.expr,r,a)
if(u.equal){t.ungraded=true
t.message=i18n._("I'm a computer. I only understand "+"multiplication if you use an asterisk "+"(*) as the multiplication sign.")}else if(u.message){t.message=u.message+" Also, I'm a computer. I only understand "+"multiplication if you use an "+"asterisk (*) as the multiplication "+"sign."}}}return t}}}}
module.exports=KhanAnswerTypes

});
KAdefine("javascript/perseus-all-package/util/colors.js", function(require, module, exports) {
var KhanColors={BLUE:"#6495ED",ORANGE:"#FFA500",PINK:"#FF00AF",GREEN:"#28AE7B",PURPLE:"#9D38BD",RED:"#DF0030",GRAY:"gray",BLACK:"black",LIGHT_BLUE:"#9AB8ED",LIGHT_ORANGE:"#EDD19B",LIGHT_PINK:"#ED9BD3",LIGHT_GREEN:"#9BEDCE",LIGHT_PURPLE:"#DA9BED",LIGHT_RED:"#ED9AAC",LIGHT_GRAY:"#ED9B9B",LIGHT_BLACK:"#ED9B9B",GRAY10:"#D6D6D6",GRAY20:"#CDCDCD",GRAY30:"#B3B3B3",GRAY40:"#9A9A9A",GRAY50:"#808080",GRAY60:"#666666",GRAY70:"#4D4D4D",GRAY80:"#333333",GRAY90:"#1A1A1A",BLUE_A:"#CCFAFF",BLUE_B:"#80F6FF",BLUE_C:"#63D9EA",BLUE_D:"#11ACCD",BLUE_E:"#0C7F99",TEAL_A:"#94FFF5",TEAL_B:"#26EDD5",TEAL_C:"#01D1C1",TEAL_D:"#01A995",TEAL_E:"#208170",GREEN_A:"#B6FFB0",GREEN_B:"#8AF281",GREEN_C:"#74CF70",GREEN_D:"#1FAB54",GREEN_E:"#0D923F",GOLD_A:"#FFD0A9",GOLD_B:"#FFBB71",GOLD_C:"#FF9C39",GOLD_D:"#E07D10",GOLD_E:"#A75A05",RED_A:"#FCA9A9",RED_B:"#FF8482",RED_C:"#F9685D",RED_D:"#E84D39",RED_E:"#BC2612",MAROON_A:"#FFBDE0",MAROON_B:"#FF92C6",MAROON_C:"#ED5FA6",MAROON_D:"#CA337C",MAROON_E:"#9E034E",PURPLE_A:"#DDD7FF",PURPLE_B:"#C6B9FC",PURPLE_C:"#AA87FF",PURPLE_D:"#7854AB",PURPLE_E:"#543B78",MINT_A:"#F5F9E8",MINT_B:"#EDF2DF",MINT_C:"#E0E5CC",GRAY_A:"#F6F7F7",GRAY_B:"#F0F1F2",GRAY_C:"#E3E5E6",GRAY_D:"#D6D8DA",GRAY_E:"#BABEC2",GRAY_F:"#888D93",GRAY_G:"#626569",GRAY_H:"#3B3E40",GRAY_I:"#21242C",KA_BLUE:"#314453",KA_GREEN:"#71B307",_BACKGROUND:"#FDFDFD"}
KhanColors.INTERACTING=KhanColors.KA_GREEN
KhanColors.INTERACTIVE=KhanColors.KA_GREEN
KhanColors.DYNAMIC=KhanColors.BLUE
module.exports=KhanColors

});
KAdefine("javascript/perseus-all-package/util/graph-utils.js", function(require, module, exports) {
var GraphUtils=require("./graphie.js")
require("./interactive.js")
module.exports=GraphUtils

});
KAdefine("javascript/perseus-all-package/util/graphie.js", function(require, module, exports) {
var kpoint=require("kmath").point
var kvector=require("kmath").vector
var _=require("underscore")
var $=require("jquery")
var Raphael=require("../../../third_party/javascript-khansrc/raphael/raphael.js")
var KhanMath=require("./math.js")
var processMath=require("./tex.js").processMath
var KhanColors=require("./colors.js")
function cartToPolar(r,a){var t=Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2))
var e=Math.atan2(r[1],r[0])
if(e<0){e+=2*Math.PI}if(!a){e=e*180/Math.PI}return[t,e]}function polar(r,a){if(typeof r==="number"){r=[r,r]}a=a*Math.PI/180
return[r[0]*Math.cos(a),r[1]*Math.sin(a)]}var GraphUtils={unscaledSvgPath:function r(a){if(a[0]===true){return""}return $.map(a,function(r,a){if(r===true){return"z"}return(a===0?"M":"L")+r[0]+" "+r[1]}).join("")},getDistance:function r(a,t){return kpoint.distanceToPoint(a,t)},coordDiff:function r(a,t){return _.map(t,function(r,e){return t[e]-a[e]})},snapCoord:function r(a,t){return _.map(a,function(r,a){return KhanMath.roundToNearest(t[a],r)})},findAngle:function r(a,t,e){if(e===undefined){var i=a[0]-t[0]
var n=a[1]-t[1]
if(!i&&!n){return 0}return(180+Math.atan2(-n,-i)*180/Math.PI+360)%360}else{return GraphUtils.findAngle(a,e)-GraphUtils.findAngle(t,e)}},graphs:{}}
var Graphie=GraphUtils.Graphie=function(){}
_.extend(Graphie.prototype,{cartToPolar:cartToPolar,polar:polar})
var labelDirections={center:[-.5,-.5],above:[-.5,-1],"above right":[0,-1],right:[0,-.5],"below right":[0,0],below:[-.5,0],"below left":[-1,0],left:[-1,-.5],"above left":[-1,-1]}
var SVG_SPECIFIC_STYLE_MASK={"stroke-width":null}
GraphUtils.createGraphie=function(r){var a=40
var t=40
var e=void 0
var i=void 0
$(r).css("position","relative")
var n=Raphael(r)
$(r).children("div").css("position","absolute")
var o={"stroke-width":2,fill:"none"}
var s=function r(e){if(typeof e==="number"){return r([e,e])}var i=e[0]
var n=e[1]
return[i*a,n*t]}
var l=function r(n){if(typeof n==="number"){return r([n,n])}var o=n[0]
var s=n[1]
return[(o-e[0])*a,(i[1]-s)*t]}
var v=function r(n){if(typeof n==="number"){return r([n,n])}var o=n[0]
var s=n[1]
return[o/a+e[0],i[1]-s/t]}
var u=function r(e){if(typeof e==="number"){return r([e,e])}return[e[0]/a,e[1]/t]}
var h=function r(a,t){var e=$(a)
var i=e.data("labelDirection")
var n=t[0],o=t[1]
if(n===0&&o===0){n=1
o=1
console.warn("Label size was 0x0 in graphie.js; using 1x1 instead")}e.css("visibility","")
if(typeof i==="number"){var s=Math.cos(i)
var l=Math.sin(i)
var v=Math.min(n/2/Math.abs(s),o/2/Math.abs(l))
e.css({marginLeft:-n/2+s*v,marginTop:-o/2-l*v})}else{var u=labelDirections[i||"center"]
e.css({marginLeft:Math.round(n*u[0]),marginTop:Math.round(o*u[1])})}}
var c=function r(a,t){return $.map(a,function(r,a){if(r===true){return"z"}else{var e=t?r:l(r)
return(a===0?"M":"L")+KhanMath.bound(e[0])+" "+KhanMath.bound(e[1])}}).join("")}
var p=function r(a,t,i){var n=function r(e){return(a*e+t)*e+i}
if(a===0){var o=_.map(e,function(r){return[r,n(r)]})
return c(o)}var s=-t/(2*a)
var v=Math.max(Math.abs(s-e[0]),Math.abs(s-e[1]))
var u=s+v
var h=[s,n(s)]
var p=[u,n(u)]
var f=[h[0],h[1]-(p[1]-h[1])]
var d=Math.abs(h[0]-p[0])
var b=[h[0]-d,p[1]]
var M=[h[0]+d,p[1]]
var g=_.map([b,f,M],l)
var m=_.map(_.flatten(g),KhanMath.bound)
return"M"+m[0]+","+m[1]+" Q"+m[2]+","+m[3]+" "+m[4]+","+m[5]}
var f=function r(a,t,i,n){var o=Math.abs(Math.PI/(2*t))
var s=function r(e){return a*Math.sin(t*e-i)+n}
var v=function r(e){return a*t*Math.cos(i-t*e)}
var u=function r(a,t){var e=a+o*t
var i=e+o
var n=[e,e*2/3+i*1/3,e*1/3+i*2/3,i]
var u=[s(e),s(e)+v(e)*(i-e)/3,s(i)-v(i)*(i-e)/3,s(i)]
return _.map(_.zip(n,u),l)}
var h=e[1]-e[0]
var c=Math.ceil(h/o)+1
var p=i/t
var f=p-e[0]
p-=o*Math.ceil(f/o)
var d=u(p,0)
var b="M"+d[0][0]+","+d[0][1]+" C"+d[1][0]+","+d[1][1]+" "+d[2][0]+","+d[2][1]+" "+d[3][0]+","+d[3][1]
for(var M=1;M<c;M++){d=u(p,M)
b+=" C"+d[1][0]+","+d[1][1]+" "+d[2][0]+","+d[2][1]+" "+d[3][0]+","+d[3][1]}return b}
GraphUtils.svgPath=c
var d=function r(o){var v={scale:function r(o){if(typeof o==="number"){o=[o,o]}a=o[0]
t=o[1]
n.setSize((e[1]-e[0])*a,(i[1]-i[0])*t)},clipRect:function r(a){var t=a[0]
var e=a[1]
t[1]+=e[1]
return{"clip-rect":l(t).concat(s(e)).join(" ")}},strokeWidth:function r(a){return{"stroke-width":parseFloat(a)}},rx:function r(a){return{rx:s([a,0])[0]}},ry:function r(a){return{ry:s([0,a])[1]}},r:function r(a){var t=s([a,a])
return{rx:t[0],ry:t[1]}}}
var u={}
$.each(o||{},function(r,a){var t=v[r]
if(typeof t==="function"){$.extend(u,t(a))}else{var e=r.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
u[e]=a}})
return u}
var b=function r(a){var t=a.constructor.prototype
if(t===Raphael.el){if(a.type==="path"&&typeof a.arrowheadsDrawn==="undefined"){var e=a.attr("stroke-width")
var i=.6+.4*e
var o=a.getTotalLength()
var s=n.set()
var l=n.path(g.isMobile?"M-4,4 C-4,4 -0.25,0 -0.25,0 C-0.25,0 -4,-4 -4,-4":"M-3 4 C-2.75 2.5 0 0.25 0.75 0C0 -0.25 -2.75 -2.5 -3 -4")
var v=a.getPointAtLength(o-.4)
var u=a.getPointAtLength(o-.75*i)
var h=Math.atan2(v.y-u.y,v.x-u.x)*180/Math.PI
var c=a.attr()
delete c.path
var p=a.getSubpath(0,o-.75*i)
p=n.path(p).attr(c)
p.arrowheadsDrawn=true
a.remove()
l.rotate(h,g.isMobile?1e-5:.75,0).scale(i,i,.75,0).translate(u.x,u.y).attr(c).attr({"stroke-linejoin":"round","stroke-linecap":"round"})
l.arrowheadsDrawn=true
s.push(p)
s.push(l)
return s}}else if(t===Raphael.st){for(var f=0,d=a.items.length;f<d;f++){r(a.items[f])}}return a}
var M={circle:function r(a,t){return n.ellipse.apply(n,l(a).concat(s([t,t])))},rect:function r(a,t,e,i){var o=l([a,t+i])
var v=s([e,i])
var u=n.rect.apply(n,o.concat(v))
if(g.isMobile){u.node.style.shapeRendering="crispEdges"}return u},ellipse:function r(a,t){return n.ellipse.apply(n,l(a).concat(s(t)))},fixedEllipse:function r(a,t,e,i){var n=l(a)
var o=s(t)
var v=2*o[0]*e+i
var u=2*o[1]*e+i
var h=n[0]-v/2
var c=n[1]-u/2
var p=document.createElement("div")
$(p).css({position:"absolute",width:v+"px",height:u+"px",left:h+"px",top:c+"px"})
var f=Raphael(p,v,u)
var d=f.ellipse(v/2,u/2,o[0],o[1])
return{wrapper:p,visibleShape:d}},arc:function r(a,t,e,i,o){e=(e%360+360)%360
i=(i%360+360)%360
var v=l(a)
var u=s(t)
var h=polar(t,e)
var c=polar(t,i)
var p=l([a[0]+h[0],a[1]+h[1]])
var f=l([a[0]+c[0],a[1]+c[1]])
var d=((i-e)%360+360)%360>180
return n.path("M"+p.join(" ")+"A"+u.join(" ")+" 0 "+(d?1:0)+" 0 "+f.join(" ")+(o?"L"+v.join(" ")+"z":""))},path:function r(a){var t=n.path(c(a))
t.graphiePath=a
return t},fixedPath:function r(a,t,e){a=_.map(a,l)
t=t?l(t):null
e=e||c
var i=_.min(_.pluck(a,0))
var n=_.max(_.pluck(a,0))
var o=_.min(_.pluck(a,1))
var s=_.max(_.pluck(a,1))
var v=[4,4]
var u=[i,o]
a=_.map(a,function(r){return kvector.add(kvector.subtract(r,u),kvector.scale(v,.5))})
var h=n-i+v[0]
var p=s-o+v[1]
var f=u[0]-v[0]/2
var d=u[1]-v[1]/2
var b=document.createElement("div")
$(b).css({position:"absolute",width:h+"px",height:p+"px",left:f+"px",top:d+"px",transformOrigin:t?h/2+t[0]+"px "+(p/2+t[1])+"px":null})
var M=Raphael(b,h,p)
var g=M.path(e(a))
return{wrapper:b,visibleShape:g}},scaledPath:function r(a){var t=n.path(c(a,true))
t.graphiePath=a
return t},line:function r(a,t){var e=this.path([a,t])
if(g.isMobile){e.node.style.shapeRendering="crispEdges"}return e},parabola:function r(a,t,e){return n.path(p(a,t,e))},fixedLine:function r(a,t,e){var i=[e,e]
a=l(a)
t=l(t)
var n=[Math.min(a[0],t[0]),Math.min(a[1],t[1])]
a=kvector.add(kvector.subtract(a,n),kvector.scale(i,.5))
t=kvector.add(kvector.subtract(t,n),kvector.scale(i,.5))
var o=n[0]-i[0]/2
var s=n[1]-i[1]/2
var v=Math.abs(a[0]-t[0])+i[0]
var u=Math.abs(a[1]-t[1])+i[1]
var h=document.createElement("div")
$(h).css({position:"absolute",width:v+"px",height:u+"px",left:o+"px",top:s+"px",transformOrigin:a[0]+"px "+a[1]+"px"})
var c=Raphael(h,v,u)
var p="M"+a[0]+" "+a[1]+" "+"L"+t[0]+" "+t[1]
var f=c.path(p)
f.graphiePath=[a,t]
return{wrapper:h,visibleShape:f}},sinusoid:function r(a,t,e,i){return n.path(f(a,t,e,i))},grid:function r(a,t){var e=o.step||[1,1]
var i=n.set()
var s=e[0]*Math.ceil(a[0]/e[0])
for(;s<=a[1];s+=e[0]){i.push(this.line([s,t[0]],[s,t[1]]))}var l=e[1]*Math.ceil(t[0]/e[1])
for(;l<=t[1];l+=e[1]){i.push(this.line([a[0],l],[a[1],l]))}return i},label:function a(t,e,i,n){n=typeof n==="undefined"||n
var s=$("<span>").addClass("graphie-label")
var v=o["label-distance"]
s.css($.extend({},{position:"absolute",padding:(v!=null?v:7)+"px",color:"black"})).data("labelDirection",i).appendTo(r)
s.setPosition=function(r){var a=l(r)
s.css({left:a[0],top:a[1]})}
s.setPosition(t)
var u=s[0]
s.processMath=function(r,a){processMath(u,r,a,function(){var r=u.scrollWidth
var a=u.scrollHeight
h(u,[r,a])})}
s.processText=function(r){s.html(r)
var a=u.scrollWidth
var t=u.scrollHeight
h(u,[a,t])}
if(n){s.processMath(e,false)}else{s.processText(e)}return s},plotParametric:function r(a,e,i,s){s=s||function(r){return[r,0]}
var l=function r(a){if(Math.abs(a[1])>5e5){return[a[0],Math.min(Math.max(a[1],-5e5),5e5)]}return a}
var v=function r(t){return l(a(t))}
var u=function r(a){return l(s(a))}
if(!o.strokeLinejoin){o.strokeLinejoin="round"}if(!o.strokeLinecap){o.strokeLinecap="round"}var h=e[0]
var c=e[1]
var p=(c-h)/(o["plot-points"]||800)
if(p===0){p=1}var f=n.set()
var d=[]
var b=GraphUtils.coordDiff(v(h),u(h))
var M=h
for(var g=h;g<=c;g+=p){var m=v(g)
var y=u(g)
var x=GraphUtils.coordDiff(m,y)
if(x[1]<0!==b[1]<0&&Math.abs(x[1]-b[1])>2*t||isNaN(x[1])){if(i){d.push(m)
for(var k=g-p;k>=M;k-=p){d.push(u(k))}M=g}f.push(this.path(d))
d=[]
if(i){d.push(m)}}else{d.push(m)}b=x}if(i){for(var w=c-p;w>=M;w-=p){d.push(u(w))}}f.push(this.path(d))
return f},plotPolar:function r(t,e){var i=e[0]
var n=e[1]
if(!o["plot-points"]){o["plot-points"]=2*(n-i)*a}return this.plotParametric(function(r){return polar(t(r),r*180/Math.PI)},e)},plot:function r(t,e,i,n,s){var l=e[0]
var v=e[1]
if(!o["plot-points"]){o["plot-points"]=2*(v-l)*a}if(i){if(s){throw new Error("Can't shade area between functions with swapped axes.")}return this.plotParametric(function(r){return[t(r),r]},e,n)}else{if(s){if(n){return this.plotParametric(function(r){return[r,t(r)]},e,n,function(r){return[r,s(r)]})}else{throw new Error("fn2 should only be set when 'shade' is True.")}}return this.plotParametric(function(r){return[r,t(r)]},e,n)}},plotPiecewise:function r(a,t){var e=n.set()
var i=this
_.times(a.length,function(r){var n=a[r]
var o=t[r]
var s=i.plotParametric(function(r){return[r,n(r)]},o)
_.each(s,function(r){e.push(r)})})
return e},plotEndpointCircles:function r(a){var t=n.set()
var e=this
_.each(a,function(r,a){t.push(e.circle(r,.15))})
return t},plotAsymptotes:function r(a,e){var i=e[0]
var s=e[1]
var l=(s-i)/(o["plot-points"]||800)
var v=n.set()
var u=a(i)
for(var h=i;h<=s;h+=l){var c=a(h)
if(c<0!==u<0&&Math.abs(c-u)>2*t){v.push(this.line([h,t],[h,-t]))}u=c}return v}}
var g=new Graphie
_.extend(g,{raphael:n,init:function o(s){var l=s.scale||[40,40]
l=typeof l==="number"?[l,l]:l
a=l[0]
t=l[1]
if(s.range==null){throw new Error("range should be specified in graph init")}e=s.range[0]
i=s.range[1]
var v=(e[1]-e[0])*a
var u=(i[1]-i[0])*t
n.setSize(v,u)
$(r).css({width:v,height:u})
this.range=s.range
this.scale=l
this.dimensions=[v,u]
this.xpixels=v
this.ypixels=u
this.isMobile=s.isMobile
return this},style:function r(a,t){var e=d(a)
if(typeof t==="function"){var i=o
o=$.extend({},o,e)
var n=t.call(g)
o=i
return n}else{$.extend(o,e)}},scalePoint:l,scaleVector:s,unscalePoint:v,unscaleVector:u,svgPath:c,svgParabolaPath:p,svgSinusoidPath:f})
$.each(M,function(r){g[r]=function(){var a=arguments[arguments.length-1]
var t=o
var e=void 0
if((typeof a==="undefined"?"undefined":babelHelpers.typeof(a))==="object"&&!_.isArray(a)){o=babelHelpers.extends({},o,d(a))
var i=[].slice.call(arguments,0,arguments.length-1)
e=M[r].apply(M,i)}else{o=$.extend({},o)
e=M[r].apply(M,arguments)}var n=e.constructor.prototype
if(n===Raphael.el||n===Raphael.st){e.attr(o)
if(o.arrows){e=b(e)}}else if(e instanceof $){e.css(babelHelpers.extends({},o,SVG_SPECIFIC_STYLE_MASK))}o=t
return e}})
g.graphInit=function(r){r=r||{}
$.each(r,function(a,t){if(!a.match(/.*Opacity$/)&&a!=="range"&&typeof t==="number"){r[a]=[t,t]}if(a==="range"||a==="gridRange"){if(t.constructor===Array){if(t[0].constructor!==Array){r[a]=[[-t[0],t[0]],[-t[1],t[1]]]}}else if(typeof t==="number"){r[a]=[[-t,t],[-t,t]]}}})
var a=r.range||[[-10,10],[-10,10]]
var t=r.gridRange||r.range
var e=r.scale||[20,20]
var i=r.grid!=null?r.grid:true
var n=r.gridOpacity||.1
var o=r.gridStep||[1,1]
var s=r.axes!=null?r.axes:true
var l=r.axisArrows||""
var v=r.axisOpacity||1
var u=r.axisCenter||[Math.min(Math.max(a[0][0],0),a[0][1]),Math.min(Math.max(a[1][0],0),a[1][1])]
var h=r.axisLabels!=null?r.axisLabels:false
var c=r.ticks!=null?r.ticks:true
var p=r.tickStep||[2,2]
var f=r.tickLen||[5,5]
var d=r.tickOpacity||1
var b=r.labels||r.labelStep||false
var M=r.labelStep||[1,1]
var g=r.labelOpacity||1
var m=r.unityLabels||false
var y=r.labelFormat||function(r){return r}
var x=r.xLabelFormat||y
var k=r.yLabelFormat||y
var w=r.smartLabelPositioning!=null?r.smartLabelPositioning:true
var P=[[a[0][0]-(a[0][0]>0?1:0),a[0][1]+(a[0][1]<0?1:0)],[a[1][0]-(a[1][0]>0?1:0),a[1][1]+(a[1][1]<0?1:0)]]
if(!_.isArray(m)){m=[m,m]}if(w){var L=function r(a){return function(r){return(a(r)+"").replace(/-(\d)/g,"\\llap{-}$1")}}
x=L(x)
k=L(k)}this.init({range:P,scale:e,isMobile:r.isMobile})
if(i){this.grid(t[0],t[1],{stroke:r.isMobile?KhanColors.GRAY_C:"#000000",opacity:r.isMobile?1:n,step:o,strokeWidth:r.isMobile?1:2})}if(s){if(l==="<->"||l===true){this.style({stroke:r.isMobile?KhanColors.GRAY_G:"#000000",opacity:r.isMobile?1:v,strokeWidth:r.isMobile?1:2,arrows:"->"},function(){if(a[1][0]<0&&a[1][1]>0){this.path([u,[t[0][0],u[1]]])
this.path([u,[t[0][1],u[1]]])}if(a[0][0]<0&&a[0][1]>0){this.path([u,[u[0],t[1][0]]])
this.path([u,[u[0],t[1][1]]])}})}else if(l==="->"||l===""){this.style({stroke:"#000000",opacity:v,strokeWidth:2,arrows:l},function(){this.path([[t[0][0],u[1]],[t[0][1],u[1]]])
this.path([[u[0],t[1][0]],[u[0],t[1][1]]])})}if(h&&h.length===2){this.label([t[0][1],u[1]],h[0],"right")
this.label([u[0],t[1][1]],h[1],"above")}}if(c){var G=r.isMobile
this.style({stroke:r.isMobile?KhanColors.GRAY_G:"#000000",opacity:r.isMobile?1:d,strokeWidth:1},function(){var r=o[0]*p[0]
var i=f[0]/e[1]
var n=t[0][0]
var s=t[0][1]
if(a[1][0]<0&&a[1][1]>0){for(var v=r+u[0];v<=s;v+=r){if(v<s||!l){this.line([v,-i+u[1]],[v,G?0:i+u[1]])}}for(var h=-r+u[0];h>=n;h-=r){if(h>n||!l){this.line([h,-i+u[1]],[h,G?0:i+u[1]])}}}r=o[1]*p[1]
i=f[1]/e[0]
n=t[1][0]
s=t[1][1]
if(a[0][0]<0&&a[0][1]>0){for(var c=r+u[1];c<=s;c+=r){if(c<s||!l){this.line([-i+u[0],c],[G?0:i+u[0],c])}}for(var d=-r+u[1];d>=n;d-=r){if(d>n||!l){this.line([-i+u[0],d],[G?0:i+u[0],d])}}}})}if(b){this.style({stroke:r.isMobile?KhanColors.GRAY_G:"#000000",opacity:r.isMobile?1:g},function(){var r=o[0]*p[0]*M[0]
var a=t[0][0]
var e=t[0][1]
var i=u[0]<0?"above":"below"
var n=u[0]<0?"right":"left"
var s=u[0]===0&&u[1]!==0
var v=u[0]!==0&&u[1]===0
var h=u[0]!==0||u[1]!==0
var c=m[0]||h
var f=m[1]||h
for(var d=(s?0:r)+u[0];d<=e;d+=r){if(d<e||!l){this.label([d,u[1]],x(d),i)}}for(var b=-r*(c?1:2)+u[0];b>=a;b-=r){if(b>a||!l){this.label([b,u[1]],x(b),i)}}r=o[1]*p[1]*M[1]
a=t[1][0]
e=t[1][1]
for(var g=(v?0:r)+u[1];g<=e;g+=r){if(g<e||!l){this.label([u[0],g],k(g),n)}}for(var y=-r*(f?1:2)+u[1];y>=a;y-=r){if(y>a||!l){this.label([u[0],y],k(y),n)}}})}}
return g}
module.exports=GraphUtils

});
KAdefine("javascript/perseus-all-package/util/interactive.js", function(require, module, exports) {
var _=require("underscore")
var $=require("jquery")
require("../jquery.mobile.vmouse.js")
var Raphael=require("../../../third_party/javascript-khansrc/raphael/raphael.js")
var GraphUtils=require("./graphie.js")
var kvector=require("kmath").vector
var kpoint=require("kmath").point
var kline=require("kmath").line
var WrappedEllipse=require("../interactive2/wrapped-ellipse.js")
var WrappedLine=require("../interactive2/wrapped-line.js")
var WrappedPath=require("../interactive2/wrapped-path.js")
var KhanMath=require("./math.js")
var KhanColors=require("./colors.js")
var _require=require("../interactive2/interactive-util.js"),getCanUse3dTransform=_require.getCanUse3dTransform
function sum(e){return _.reduce(e,function(e,t){return e+t},0)}function clockwise(e){var t=_.zip(e,e.slice(1).concat(e.slice(0,1)))
var r=_.map(t,function(e){var t=e[0]
var r=e[1]
return(r[0]-t[0])*(r[1]+t[1])})
return sum(r)>0}function addPoints(){var e=_.toArray(arguments)
var t=_.zip.apply(_,e)
return _.map(t,sum)}function reverseVector(e){return _.map(e,function(e){return e*-1})}function scaledDistanceFromAngle(e){var t=3.51470560176242*20
var r=.5687298702748785*20
var o=-.037587715462826674
return(t-r)*Math.exp(o*e)+r}function scaledPolarRad(e,t){return[e*Math.cos(t),e*Math.sin(t)*-1]}function scaledPolarDeg(e,t){var r=t*Math.PI/180
return scaledPolarRad(e,r)}var dragging=false
var InteractiveUtils={bogusShape:{animate:function e(){},attr:function e(){},remove:function e(){}}}
_.extend(GraphUtils.Graphie.prototype,{addMouseLayer:function e(t){var r=this
t=_.extend({allowScratchpad:false,setDrawingAreaAvailable:function e(){}},t)
var o=2
r.mouselayer=Raphael(r.raphael.canvas.parentNode,r.xpixels,r.ypixels)
$(r.mouselayer.canvas).css("z-index",o)
if(t.onClick||t.onMouseDown||t.onMouseMove||t.onMouseOver||t.onMouseOut){var a=r.mouselayer.rect(0,0,r.xpixels,r.ypixels).attr({fill:"#000",opacity:0})
var i=false
$(r.mouselayer.canvas).on("vmousedown",function(e){if(e.target===a[0]){if(t.onMouseDown){t.onMouseDown(r.getMouseCoord(e))}i=true
if(t.onMouseMove){$(document).bind("vmousemove.mouseLayer",function(e){if(i){e.preventDefault()
t.onMouseMove(r.getMouseCoord(e))}})}$(document).bind("vmouseup.mouseLayer",function(e){$(document).unbind(".mouseLayer")
if(i&&t.onClick){t.onClick(r.getMouseCoord(e))}i=false})}})
if(t.onMouseOver){$(r.mouselayer.canvas).on("vmouseover",function(e){t.onMouseOver(r.getMouseCoord(e))})}if(t.onMouseOut){$(r.mouselayer.canvas).on("vmouseout",function(e){t.onMouseOut(r.getMouseCoord(e))})}}if(!t.allowScratchpad){t.setDrawingAreaAvailable(false)}r._mouselayerWrapper=document.createElement("div")
$(r._mouselayerWrapper).css({position:"absolute",left:0,top:0,zIndex:o})
r._visiblelayerWrapper=document.createElement("div")
$(r._visiblelayerWrapper).css({position:"absolute",left:0,top:0})
var n=r.raphael.canvas.parentNode
n.appendChild(r._visiblelayerWrapper)
n.appendChild(r._mouselayerWrapper)
r.addToMouseLayerWrapper=function(e){this._mouselayerWrapper.appendChild(e)}
r.addToVisibleLayerWrapper=function(e){this._visiblelayerWrapper.appendChild(e)}},getMousePx:function e(t){var r=this
var o=t.pageX-$(r.raphael.canvas.parentNode).offset().left
var a=t.pageY-$(r.raphael.canvas.parentNode).offset().top
return[o,a]},getMouseCoord:function e(t){return this.unscalePoint(this.getMousePx(t))},labelAngle:function e(t){var r=this
_.defaults(t,{point1:[0,0],vertex:[0,0],point3:[0,0],label:null,numArcs:1,showRightAngleMarker:true,pushOut:0,clockwise:false,style:{}})
var o=t.text===undefined?"":t.text
var a=t.vertex
var i=r.scalePoint(a)
var n=void 0
var s=void 0
if(t.clockwise){n=t.point1
s=t.point3}else{n=t.point3
s=t.point1}var l=GraphUtils.findAngle(n,a)
var c=GraphUtils.findAngle(s,a)
var v=(c+360-l)%360
var h=(l+v/2)%360
var d=5*t.pushOut
var u=d+scaledDistanceFromAngle(v)
var f=[]
if(Math.abs(v-90)<1e-9&&t.showRightAngleMarker){var p=addPoints(i,scaledPolarDeg(u,l))
var g=addPoints(i,scaledPolarDeg(u,c))
u*=Math.SQRT2
var m=addPoints(i,scaledPolarDeg(u,h))
_.each([p,g],function(e){f.push(r.scaledPath([e,m],t.style))})}else{_.times(t.numArcs,function(e){f.push(r.arc(a,r.unscaleVector(u),l,c,t.style))
u+=3})}if(o){var b=o.match(/\$deg(\d)?/)
if(b){var y=b[1]||1
o=o.replace(b[0],KhanMath.toFixedApprox(v,y)+"^{\\circ}")}var x=scaledPolarDeg(u+15,h)
var k=addPoints(i,x)
var M=r.unscalePoint(k)
if(t.label){t.label.setPosition(M)
t.label.processMath(o,true)}else{r.label(M,o,"center",t.style)}}return f},labelSide:function e(t){var r=this
_.defaults(t,{point1:[0,0],point2:[0,0],label:null,text:"",numTicks:0,numArrows:0,clockwise:false,style:{}})
var o=void 0
var a=void 0
if(t.clockwise){o=t.point1
a=t.point2}else{o=t.point2
a=t.point1}var i=[(o[0]+a[0])/2,(o[1]+a[1])/2]
var n=r.scalePoint(i)
var s=Math.atan2(a[1]-o[1],a[0]-o[0])
var l=s+Math.PI/2
var c=[]
var v=0
if(t.numTicks){var h=t.numTicks
var d=5
var u=5
var f=_.extend({},t.style,{strokeWidth:2})
_.times(h,function(e){var t=d*(e-(h-1)/2)
var o=scaledPolarRad(t,s)
var a=scaledPolarRad(u,l)
var i=[addPoints(n,o,a),addPoints(n,o,reverseVector(a))]
c.push(r.scaledPath(i,f))})
v+=d*(h-1)+15}if(t.numArrows){var p=t.numArrows
var g=[o,a].sort(function(e,t){if(e[1]===t[1]){return e[0]-t[0]}else{return e[1]-t[1]}})[0]
var m=r.scalePoint(g)
var b=_.extend({},t.style,{arrows:"->",strokeWidth:2})
var y=5
_.times(p,function(e){var t=v+y*e
var a=scaledPolarRad(t,s)
if(g!==o){a=reverseVector(a)}var i=addPoints(n,a)
c.push(r.scaledPath([m,i],b))})}var x=t.text
if(x){var k=x.match(/\$len(\d)?/)
if(k){var M=GraphUtils.getDistance(o,a)
var A=k[1]||1
x=x.replace(k[0],KhanMath.toFixedApprox(M,A))}var P=20
var S=scaledPolarRad(P,l)
var C=addPoints(n,S)
var T=r.unscalePoint(C)
if(t.label){t.label.setPosition(T)
t.label.processMath(x,true)}else{r.label(T,x,"center",t.style)}}return c},labelVertex:function e(t){var r=this
_.defaults(t,{point1:null,vertex:[0,0],point3:null,label:null,text:"",clockwise:false,style:{}})
if(!t.text){return}var o=t.vertex
var a=r.scalePoint(o)
var i=void 0
var n=void 0
if(t.clockwise){i=t.point1
n=t.point3}else{i=t.point3
n=t.point1}var s=135
var l=void 0
if(i&&n){var c=GraphUtils.findAngle(i,o)
var v=GraphUtils.findAngle(n,o)
s=(v+360-c)%360
l=(c+s/2+180)%360}else if(i){var h=GraphUtils.findAngle(o,i)
l=h+90}else if(n){var d=GraphUtils.findAngle(n,o)
l=d+90}else{l=135}var u=10+scaledDistanceFromAngle(360-s)
var f=scaledPolarDeg(u,l)
var p=addPoints(a,f)
var g=r.unscalePoint(p)
if(t.label){t.label.setPosition(g)
t.label.processMath(t.text,true)}else{r.label(g,t.text,"center",t.style)}},addMovablePoint:function e(t){var r=$.extend(true,{graph:this,coord:[0,0],snapX:0,snapY:0,pointSize:4,highlight:false,dragging:false,visible:true,bounded:true,constraints:{fixed:false,constrainX:false,constrainY:false,fixedAngle:{},fixedDistance:{}},lineStarts:[],lineEnds:[],polygonVertices:[],normalStyle:{},highlightStyle:{fill:KhanColors.INTERACTING,stroke:KhanColors.INTERACTING},labelStyle:{color:KhanColors.INTERACTIVE},vertexLabel:"",mouseTarget:null},t)
var o=r.constraints.fixed?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
r.normalStyle=_.extend({},{fill:o,stroke:o},t.normalStyle)
if(t.coordX!==undefined){r.coord[0]=t.coordX}if(t.coordY!==undefined){r.coord[1]=t.coordY}var a=r.graph
var i=function e(t){if(r.visible&&r.bounded&&!r.constraints.fixed){t=a.constrainToBounds(t,10)}var o=t[0]
var i=t[1]
if(r.snapX!==0){o=Math.round(o/r.snapX)*r.snapX}if(r.snapY!==0){i=Math.round(i/r.snapY)*r.snapY}if(r.constraints.fixedDistance.snapPoints){var n=a.scalePoint(t)
var s=n[0]
var l=n[1]
var c=2*Math.PI/r.constraints.fixedDistance.snapPoints
var v=r.constraints.fixedDistance.dist
var h=r.constraints.fixedDistance.point
var d=(h[0]-a.range[0][0])*a.scale[0]
var u=(-h[1]+a.range[1][1])*a.scale[1]
var f=s-d
var p=-l+u
var g=Math.atan(p/f)
var m=f<0
if(m){g+=Math.PI}g=Math.round(g/c)*c
f=v*Math.cos(g)
p=v*Math.sin(g)
s=f+d
l=-p+u
o=KhanMath.roundTo(5,s/a.scale[0]+a.range[0][0])
i=KhanMath.roundTo(5,a.range[1][1]-l/a.scale[1])}var b=r.applyConstraint([o,i])
return b}
r.applyConstraint=function(e,t,o){var a=e.slice()
var i={}
if(o){$.extend(i,{fixed:false,constrainX:false,constrainY:false,fixedAngle:{},fixedDistance:{}},t)}else{$.extend(i,this.constraints,t)}if(i.constrainX){a=[this.coord[0],e[1]]}else if(i.constrainY){a=[e[0],this.coord[1]]}else if(typeof i.fixedAngle.angle==="number"&&typeof i.fixedDistance.dist==="number"){var n=i.fixedAngle.vertex.coord||i.fixedAngle.vertex
var s=i.fixedAngle.ref.coord||i.fixedAngle.ref
var l=i.fixedDistance.point.coord||i.fixedDistance.point
var c=(i.fixedAngle.angle+GraphUtils.findAngle(s,n))*Math.PI/180
var v=i.fixedDistance.dist
a[0]=v*Math.cos(c)+l[0]
a[1]=v*Math.sin(c)+l[1]}else if(typeof i.fixedAngle.angle==="number"){var h=i.fixedAngle.vertex.coord||i.fixedAngle.vertex
var d=i.fixedAngle.ref.coord||i.fixedAngle.ref
var u=(i.fixedAngle.angle+GraphUtils.findAngle(d,h))*Math.PI/180
var f=GraphUtils.findAngle(e,h)*Math.PI/180
var p=GraphUtils.getDistance(e,h)
var g=p*Math.cos(u-f)
g=g<1?1:g
a[0]=g*Math.cos(u)+h[0]
a[1]=g*Math.sin(u)+h[1]}else if(typeof i.fixedDistance.dist==="number"){var m=i.fixedDistance.point.coord||i.fixedDistance.point
var b=GraphUtils.findAngle(e,m)
var y=i.fixedDistance.dist
b=b*Math.PI/180
a[0]=y*Math.cos(b)+m[0]
a[1]=y*Math.sin(b)+m[1]}else if(i.fixed){a=r.coord}return a}
r.coord=i(r.coord)
var n=2
if(r.visible){a.style(r.normalStyle,function(){var e=[r.pointSize/a.scale[0],r.pointSize/a.scale[1]]
var t={maxScale:n,padding:2}
r.visibleShape=new WrappedEllipse(a,r.coord,e,t)
r.visibleShape.attr(_.omit(r.normalStyle,"scale"))
r.visibleShape.toFront()})}r.normalStyle.scale=1
r.highlightStyle.scale=n
if(r.vertexLabel){r.labeledVertex=this.label([0,0],"","center",r.labelStyle)}r.drawLabel=function(){if(r.vertexLabel){r.graph.labelVertex({vertex:r.coord,label:r.labeledVertex,text:r.vertexLabel,style:r.labelStyle})}}
r.drawLabel()
r.grab=function(e){e=e||[0,0]
$(document).bind("vmousemove.point vmouseup.point",function(t){t.preventDefault()
r.dragging=true
dragging=true
var o=kvector.add(a.getMouseCoord(t),e)
o=i(o)
var n=o[0]
var s=o[1]
var l=void 0
var c=void 0
if(t.type==="vmousemove"){var v=true
if(_.isFunction(r.onMove)){var h=r.onMove(n,s)
if(h===false){v=false}if(_.isArray(h)){n=h[0]
s=h[1]}}l=(n-a.range[0][0])*a.scale[0]
c=(-s+a.range[1][1])*a.scale[1]
if(v){var d=a.unscalePoint([l,c])
r.visibleShape.moveTo(d)
r.mouseTarget.moveTo(d)
r.coord=[n,s]
r.updateLineEnds()
$(r).trigger("move")}r.drawLabel()}else if(t.type==="vmouseup"){$(document).unbind(".point")
r.dragging=false
dragging=false
if(_.isFunction(r.onMoveEnd)){var u=r.onMoveEnd(n,s)
if(_.isArray(u)){n=u[0]
s=u[1]
l=(n-a.range[0][0])*a.scale[0]
c=(-s+a.range[1][1])*a.scale[1]
var f=a.unscalePoint([l,c])
r.visibleShape.moveTo(f)
r.mouseTarget.moveTo(f)
r.coord=[n,s]}}if(!r.highlight){r.visibleShape.animate(r.normalStyle,50)
if(r.onUnhighlight){r.onUnhighlight()}}}})}
if(r.visible&&!r.constraints.fixed){if(!r.mouseTarget){var s=a.unscaleVector(16)
var l={mouselayer:true,padding:0,disableMouseEventsOnWrapper:true}
r.mouseTarget=new WrappedEllipse(a,r.coord,s,l)
r.mouseTarget.attr({fill:"#000",opacity:0})}var c=$(r.mouseTarget.getMouseTarget())
c.css("cursor","move")
c.bind("vmousedown vmouseover vmouseout",function(e){if(e.type==="vmouseover"){r.highlight=true
if(!dragging){r.visibleShape.animate(r.highlightStyle,50)
if(r.onHighlight){r.onHighlight()}}}else if(e.type==="vmouseout"){r.highlight=false
if(!r.dragging&&!dragging){r.visibleShape.animate(r.normalStyle,50)
if(r.onUnhighlight){r.onUnhighlight()}}}else if(e.type==="vmousedown"&&(e.which===1||e.which===0)){e.preventDefault()
var t=r.coord
var o=a.getMouseCoord(e)
var i=!("ontouchstart"in window)
var n=i?[0,0]:kvector.subtract(t,o)
r.grab(n)}})}r.moveTo=function(e,t,o){var a=GraphUtils.getDistance(this.graph.scalePoint([e,t]),this.graph.scalePoint(this.coord))
var i=a*5
var n=o&&function(e){r.coord=e
r.updateLineEnds()}
this.visibleShape.animateTo([e,t],i,n)
this.mouseTarget.animateTo([e,t],i,n)
this.coord=[e,t]
if(_.isFunction(this.onMove)){this.onMove(e,t)}}
r.updateLineEnds=function(){$(this.lineStarts).each(function(){this.coordA=r.coord
this.transform()})
$(this.lineEnds).each(function(){this.coordZ=r.coord
this.transform()})
$(this.polygonVertices).each(function(){this.transform()})}
r.setCoord=function(e){if(this.visible){this.visibleShape.moveTo(e)
if(this.mouseTarget!=null){this.mouseTarget.moveTo(e)}}this.coord=e.slice()}
r.setCoordConstrained=function(e){this.setCoord(i(e))}
r.toBack=function(){if(this.visible){if(this.mouseTarget!=null){this.mouseTarget.toBack()}this.visibleShape.toBack()}}
r.toFront=function(){if(this.visible){if(this.mouseTarget!=null){this.mouseTarget.toFront()}this.visibleShape.toFront()}}
r.remove=function(){if(this.visibleShape){this.visibleShape.remove()}if(this.mouseTarget){this.mouseTarget.remove()}if(this.labeledVertex){this.labeledVertex.remove()}}
return r},addMovableLineSegment:function e(t){var r=$.extend({graph:this,coordA:[0,0],coordZ:[1,1],snapX:0,snapY:0,fixed:false,ticks:0,normalStyle:{},highlightStyle:{stroke:KhanColors.INTERACTING,"stroke-width":6},labelStyle:{stroke:KhanColors.INTERACTIVE,color:KhanColors.INTERACTIVE},highlight:false,dragging:false,tick:[],extendLine:false,extendRay:false,constraints:{fixed:false,constrainX:false,constrainY:false},sideLabel:"",vertexLabels:[],numArrows:0,numTicks:0,movePointsWithLine:false},t)
var o=r.fixed?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
r.normalStyle=_.extend({},{"stroke-width":2,stroke:o},t.normalStyle)
r.arrowStyle=_.extend({},r.normalStyle,{color:r.normalStyle.stroke})
if(t.pointA!==undefined){r.coordA=t.pointA.coord
r.pointA.lineStarts.push(r)}else if(t.coordA!==undefined){r.coordA=t.coordA.slice()}if(t.pointZ!==undefined){r.coordZ=t.pointZ.coord
r.pointZ.lineEnds.push(r)}else if(t.coordA!==undefined){r.coordA=r.coordA.slice()}var a=r.graph
a.style(r.normalStyle)
for(var i=0;i<r.ticks;++i){r.tick[i]=InteractiveUtils.bogusShape}var n=GraphUtils.unscaledSvgPath([[0,0],[1,0]])
for(var s=0;s<r.ticks;++s){var l=.5-(r.ticks-1+s*2)/a.scale[0]
n+=GraphUtils.unscaledSvgPath([[l,-7],[l,7]])}t={thickness:Math.max(r.normalStyle["stroke-width"],r.highlightStyle["stroke-width"])}
r.visibleLine=new WrappedLine(a,[0,0],[1,0],t)
r.visibleLine.attr(r.normalStyle)
if(!r.fixed){var c={thickness:30,mouselayer:true}
r.mouseTarget=new WrappedLine(a,[0,0],[1,0],c)
r.mouseTarget.attr({fill:"#000",opacity:0})}r.transform=function(e){if(e){if(babelHelpers.typeof(this.pointA)==="object"){this.coordA=this.pointA.coord}if(babelHelpers.typeof(this.pointZ)==="object"){this.coordZ=this.pointZ.coord}}var t=function e(t){var r=t.graph.scalePoint(t.coordA)
var o=t.graph.scalePoint(t.coordZ)
return kvector.polarDegFromCart(kvector.subtract(o,r))[1]}
var o=function e(t,o,a){t=r.graph
var i=t.range[0][1]-t.range[0][0]
var n=t.range[1][1]-t.range[1][0]
var s=i+n
var l=t.unscaleVector(kvector.cartFromPolarDeg([1,a]))
var c=kvector.scale(kvector.normalize(l),s)
var v=kvector.add(o,c)
var h=kvector.polarDegFromCart(l)[1]
var d=t.constrainToBoundsOnAngle(v,4,h*Math.PI/180)
return d}
var i=t(this)
var n=this.coordA
var s=this.coordZ
if(this.extendLine){n=o(a,n,360-i)
s=o(a,s,(540-i)%360)}else if(this.extendRay){s=o(a,n,360-i)}var l=[this.visibleLine]
if(!this.fixed){l.push(this.mouseTarget)}_.each(l,function(e){e.moveTo(n,s)})
var c=function e(t,r){var a=[.75,0]
var i=[[-3,4],[-2.75,2.5],[0,.25],a,[0,-.25],[-2.75,-2.5],[-3,-4]]
var n=1.4
i=_.map(i,function(e){var t=kvector.subtract(e,a)
var r=kvector.scale(t,n)
return kvector.add(a,r)})
var s=function e(t){var r="M"+t[0][0]+" "+t[0][1]
for(var o=1;o<t.length;o+=3){r+="C"+t[o][0]+" "+t[o][1]+" "+t[o+1][0]+" "+t[o+1][1]+" "+t[o+2][0]+" "+t[o+2][1]}return r}
var l=_.map(i,t.unscalePoint)
var c={center:t.unscalePoint(a),createPath:s}
var v=new WrappedPath(t,l,c)
v.attr(_.extend({"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":""},r))
v.toCoordAtAngle=function(e,r){var i=t.scalePoint(o(t,e,r))
var s=getCanUse3dTransform()
v.transform("translateX("+(i[0]+n*a[0])+"px) "+"translateY("+(i[1]+n*a[1])+"px) "+(s?"translateZ(0) ":"")+"rotate("+(360-KhanMath.bound(r))+"deg)")}
return v}
if(this._arrows==null){this._arrows=[]
if(this.extendLine){this._arrows.push(c(a,this.normalStyle))
this._arrows.push(c(a,this.normalStyle))}else if(this.extendRay){this._arrows.push(c(a,this.normalStyle))}}var v=[this.coordA,this.coordZ]
var h=[360-i,(540-i)%360]
_.each(this._arrows,function(e,t){e.toCoordAtAngle(v[t],h[t])})
_.invoke(this.temp,"remove")
this.temp=[]
var d=this.coordA[0]<this.coordZ[0]||this.coordA[0]===this.coordZ[0]&&this.coordA[1]>this.coordZ[1]
if(this.sideLabel){this.temp.push(this.graph.labelSide({point1:this.coordA,point2:this.coordZ,label:this.labeledSide,text:this.sideLabel,numArrows:this.numArrows,numTicks:this.numTicks,clockwise:d,style:this.labelStyle}))}if(this.vertexLabels.length){this.graph.labelVertex({vertex:this.coordA,point3:this.coordZ,label:this.labeledVertices[0],text:this.vertexLabels[0],clockwise:d,style:this.labelStyle})
this.graph.labelVertex({point1:this.coordA,vertex:this.coordZ,label:this.labeledVertices[1],text:this.vertexLabels[1],clockwise:d,style:this.labelStyle})}this.temp=_.flatten(this.temp)}
r.toBack=function(){if(!r.fixed){r.mouseTarget.toBack()}r.visibleLine.toBack()}
r.toFront=function(){if(!r.fixed){r.mouseTarget.toFront()}r.visibleLine.toFront()}
r.remove=function(){if(!r.fixed){r.mouseTarget.remove()}r.visibleLine.remove()
if(r.labeledSide){r.labeledSide.remove()}if(r.labeledVertices){_.invoke(r.labeledVertices,"remove")}if(r._arrows){_.invoke(r._arrows,"remove")}if(r.temp.length){_.invoke(r.temp,"remove")}}
r.hide=function(){r.visibleLine.hide()
if(r.temp.length){_.invoke(r.temp,"hide")}if(r._arrows){_.invoke(r._arrows,"hide")}}
r.show=function(){r.visibleLine.show()
if(r.temp.length){_.invoke(r.temp,"show")}if(r._arrows){_.invoke(r._arrows,"show")}}
if(r.sideLabel){r.labeledSide=this.label([0,0],"","center",r.labelStyle)}if(r.vertexLabels.length){r.labeledVertices=_.map(r.vertexLabels,function(e){return this.label([0,0],"","center",r.labelStyle)},this)}if(!r.fixed&&!r.constraints.fixed){var v=$(r.mouseTarget.getMouseTarget())
v.css("cursor","move")
v.bind("vmousedown vmouseover vmouseout",function(e){if(e.type==="vmouseover"){if(!dragging){r.highlight=true
r.visibleLine.animate(r.highlightStyle,50)
r.arrowStyle=_.extend({},r.arrowStyle,{color:r.highlightStyle.stroke,stroke:r.highlightStyle.stroke})
r.transform()}}else if(e.type==="vmouseout"){r.highlight=false
if(!r.dragging){r.visibleLine.animate(r.normalStyle,50)
r.arrowStyle=_.extend({},r.arrowStyle,{color:r.normalStyle.stroke,stroke:r.normalStyle.stroke})
r.transform()}}else if(e.type==="vmousedown"&&(e.which===1||e.which===0)){e.preventDefault()
var t=(e.pageX-$(a.raphael.canvas.parentNode).offset().left)/a.scale[0]+a.range[0][0]
var o=a.range[1][1]-(e.pageY-$(a.raphael.canvas.parentNode).offset().top)/a.scale[1]
if(r.snapX>0){t=Math.round(t/r.snapX)*r.snapX}if(r.snapY>0){o=Math.round(o/r.snapY)*r.snapY}var i=[r.coordA[0]-t,r.coordA[1]-o]
var n=[r.coordZ[0]-t,r.coordZ[1]-o]
var s=-Math.min(a.scaleVector(i)[0],a.scaleVector(n)[0])
var l=Math.max(a.scaleVector(i)[0],a.scaleVector(n)[0])
var c=Math.max(a.scaleVector(i)[1],a.scaleVector(n)[1])
var v=-Math.min(a.scaleVector(i)[1],a.scaleVector(n)[1])
$(document).bind("vmousemove.lineSegment vmouseup.lineSegment",function(e){e.preventDefault()
r.dragging=true
dragging=true
var t=e.pageX-$(a.raphael.canvas.parentNode).offset().left
var o=e.pageY-$(a.raphael.canvas.parentNode).offset().top
t=Math.max(s+10,Math.min(a.xpixels-10-l,t))
o=Math.max(c+10,Math.min(a.ypixels-10-v,o))
var h=t/a.scale[0]+a.range[0][0]
var d=a.range[1][1]-o/a.scale[1]
if(r.snapX>0){h=Math.round(h/r.snapX)*r.snapX}if(r.snapY>0){d=Math.round(d/r.snapY)*r.snapY}if(e.type==="vmousemove"){if(r.constraints.constrainX){h=r.coordA[0]-i[0]}if(r.constraints.constrainY){d=r.coordA[1]-i[1]}var u=h+i[0]-r.coordA[0]
var f=d+i[1]-r.coordA[1]
r.coordA=[h+i[0],d+i[1]]
r.coordZ=[h+n[0],d+n[1]]
r.transform()
if(r.movePointsWithLine){if(babelHelpers.typeof(r.pointA)==="object"){r.pointA.setCoord([r.pointA.coord[0]+u,r.pointA.coord[1]+f])}if(babelHelpers.typeof(r.pointZ)==="object"){r.pointZ.setCoord([r.pointZ.coord[0]+u,r.pointZ.coord[1]+f])}}if(_.isFunction(r.onMove)){r.onMove(u,f)}}else if(e.type==="vmouseup"){$(document).unbind(".lineSegment")
r.dragging=false
dragging=false
if(!r.highlight){r.visibleLine.animate(r.normalStyle,50)
r.arrowStyle=_.extend({},r.arrowStyle,{color:r.normalStyle.stroke,stroke:r.normalStyle.stroke})
r.transform()}if(_.isFunction(r.onMoveEnd)){r.onMoveEnd()}}$(r).trigger("move")})}})}if(r.pointA!==undefined){r.pointA.toFront()}if(r.pointZ!==undefined){r.pointZ.toFront()}r.transform()
return r},addMovablePolygon:function e(t){var r=this
var o=$.extend({snapX:0,snapY:0,fixed:false,constrainToGraph:true,normalStyle:{},highlightStyle:{stroke:KhanColors.INTERACTING,"stroke-width":2,fill:KhanColors.INTERACTING,"fill-opacity":.05},pointHighlightStyle:{fill:KhanColors.INTERACTING,stroke:KhanColors.INTERACTING},labelStyle:{stroke:KhanColors.DYNAMIC,"stroke-width":1,color:KhanColors.DYNAMIC},angleLabels:[],showRightAngleMarkers:[],sideLabels:[],vertexLabels:[],numArcs:[],numArrows:[],numTicks:[],updateOnPointMove:true,closed:true},_.omit(t,"points"))
var a=o.fixed?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
o.normalStyle=_.extend({"stroke-width":2,"fill-opacity":0,fill:a,stroke:a},t.normalStyle)
o.points=t.points
var i=function e(t){return!_.isArray(t)}
o.update=function(){var e=o.points.length
o.coords=_.map(o.points,function(e,t){if(i(e)){return e.coord}else{return e}})
o.left=_.min(_.pluck(o.coords,0))
o.right=_.max(_.pluck(o.coords,0))
o.top=_.max(_.pluck(o.coords,1))
o.bottom=_.min(_.pluck(o.coords,1))
var t=_.map(o.coords,function(e){return r.scalePoint(e)})
if(o.closed){t.push(true)}else{t=t.concat(_.clone(t).reverse())}o.path=GraphUtils.unscaledSvgPath(t)
_.invoke(o.temp,"remove")
o.temp=[]
var a=clockwise(o.coords)
if(o.angleLabels.length||o.showRightAngleMarkers.length){_.each(o.labeledAngles,function(t,i){o.temp.push(r.labelAngle({point1:o.coords[(i-1+e)%e],vertex:o.coords[i],point3:o.coords[(i+1)%e],label:t,text:o.angleLabels[i],showRightAngleMarker:o.showRightAngleMarkers[i],numArcs:o.numArcs[i],clockwise:a,style:o.labelStyle}))})}if(o.sideLabels.length){_.each(o.labeledSides,function(t,i){o.temp.push(r.labelSide({point1:o.coords[i],point2:o.coords[(i+1)%e],label:t,text:o.sideLabels[i],numArrows:o.numArrows[i],numTicks:o.numTicks[i],clockwise:a,style:o.labelStyle}))})}if(o.vertexLabels.length){_.each(o.labeledVertices,function(t,i){r.labelVertex({point1:o.coords[(i-1+e)%e],vertex:o.coords[i],point3:o.coords[(i+1)%e],label:t,text:o.vertexLabels[i],clockwise:a,style:o.labelStyle})})}o.temp=_.flatten(o.temp)}
o.transform=function(){o.update()
o.visibleShape.attr({path:o.path})
if(!o.fixed){o.mouseTarget.attr({path:o.path})}}
o.remove=function(){o.visibleShape.remove()
if(!o.fixed){o.mouseTarget.remove()}if(o.labeledAngles){_.invoke(o.labeledAngles,"remove")}if(o.labeledSides){_.invoke(o.labeledSides,"remove")}if(o.labeledVertices){_.invoke(o.labeledVertices,"remove")}if(o.temp.length){_.invoke(o.temp,"remove")}}
o.toBack=function(){if(!o.fixed){o.mouseTarget.toBack()}o.visibleShape.toBack()}
o.toFront=function(){if(!o.fixed){o.mouseTarget.toFront()}o.visibleShape.toFront()}
if(o.updateOnPointMove){_.each(_.filter(o.points,i),function(e){e.polygonVertices.push(o)})}o.coords=new Array(o.points.length)
if(o.angleLabels.length){var n=Math.max(o.angleLabels.length,o.showRightAngleMarkers.length)
o.labeledAngles=_.times(n,function(){return this.label([0,0],"","center",o.labelStyle)},this)}if(o.sideLabels.length){o.labeledSides=_.map(o.sideLabels,function(e){return this.label([0,0],"","center",o.labelStyle)},this)}if(o.vertexLabels.length){o.labeledVertices=_.map(o.vertexLabels,function(e){return this.label([0,0],"","center",o.labelStyle)},this)}o.update()
o.visibleShape=r.raphael.path(o.path)
o.visibleShape.attr(o.normalStyle)
if(!o.fixed){o.mouseTarget=r.mouselayer.path(o.path)
o.mouseTarget.attr({fill:"#000",opacity:0,cursor:"move"})
$(o.mouseTarget[0]).bind("vmousedown vmouseover vmouseout",function(e){if(e.type==="vmouseover"){if(!dragging||o.dragging){o.highlight=true
o.visibleShape.animate(o.highlightStyle,50)
_.each(_.filter(o.points,i),function(e){e.visibleShape.animate(o.pointHighlightStyle,50)})}}else if(e.type==="vmouseout"){o.highlight=false
if(!o.dragging){o.visibleShape.animate(o.normalStyle,50)
var t=_.filter(o.points,i)
if(!_.any(_.pluck(t,"dragging"))){_.each(t,function(e){e.visibleShape.animate(e.normalStyle,50)})}}}else if(e.type==="vmousedown"&&(e.which===1||e.which===0)){e.preventDefault()
_.each(_.filter(o.points,i),function(e){e.dragging=true})
var a=(e.pageX-$(r.raphael.canvas.parentNode).offset().left)/r.scale[0]+r.range[0][0]
var n=r.range[1][1]-(e.pageY-$(r.raphael.canvas.parentNode).offset().top)/r.scale[1]
if(o.snapX>0){a=Math.round(a/o.snapX)*o.snapX}if(o.snapY>0){n=Math.round(n/o.snapY)*o.snapY}var s=a
var l=n
var c=o.coords.slice()
var v=(a-o.left)*r.scale[0]
var h=(o.right-a)*r.scale[0]
var d=(o.top-n)*r.scale[1]
var u=(n-o.bottom)*r.scale[1]
$(document).bind("vmousemove.polygon vmouseup.polygon",function(e){e.preventDefault()
o.dragging=true
dragging=true
var t=e.pageX-$(r.raphael.canvas.parentNode).offset().left
var f=e.pageY-$(r.raphael.canvas.parentNode).offset().top
if(o.constrainToGraph){t=Math.max(v+10,Math.min(r.xpixels-10-h,t))
f=Math.max(d+10,Math.min(r.ypixels-10-u,f))}var p=t/r.scale[0]+r.range[0][0]
var g=r.range[1][1]-f/r.scale[1]
if(o.snapX>0){p=Math.round(p/o.snapX)*o.snapX}if(o.snapY>0){g=Math.round(g/o.snapY)*o.snapY}if(e.type==="vmousemove"){var m=p-a
var b=g-n
var y=true
if(_.isFunction(o.onMove)){var x=o.onMove(m,b)
if(x===false){y=false}else if(_.isArray(x)){m=x[0]
b=x[1]
p=a+m
g=n+b}}var k=function e(t){return[c[t][0]+m,c[t][1]+b]}
if(y){_.each(o.points,function(e,t){if(i(e)){e.setCoord(k(t))}else{o.points[t]=k(t)}})
o.transform()
$(o).trigger("move")
s=p
l=g}}else if(e.type==="vmouseup"){$(document).unbind(".polygon")
var M=_.filter(o.points,i)
_.each(M,function(e){e.dragging=false})
o.dragging=false
dragging=false
if(!o.highlight){o.visibleShape.animate(o.normalStyle,50)
_.each(M,function(e){e.visibleShape.animate(e.normalStyle,50)})}if(_.isFunction(o.onMoveEnd)){o.onMoveEnd(s-a,l-n)}}})}})}_.invoke(_.filter(o.points,i),"toFront")
return o},constrainToBounds:function e(t,r){var o=this.unscalePoint([r,this.ypixels-r])
var a=this.unscalePoint([this.xpixels-r,r])
var i=Math.max(o[0],Math.min(a[0],t[0]))
var n=Math.max(o[1],Math.min(a[1],t[1]))
return[i,n]},constrainToBoundsOnAngle:function e(t,r,o){var a=this.unscalePoint([r,this.ypixels-r])
var i=this.unscalePoint([this.xpixels-r,r])
var n=t.slice()
if(n[0]<a[0]){n=[a[0],n[1]+(a[0]-n[0])*Math.tan(o)]}else if(n[0]>i[0]){n=[i[0],n[1]-(n[0]-i[0])*Math.tan(o)]}if(n[1]<a[1]){n=[n[0]+(a[1]-n[1])/Math.tan(o),a[1]]}else if(n[1]>i[1]){n=[n[0]-(n[1]-i[1])/Math.tan(o),i[1]]}return n},addMovableAngle:function e(t){return new MovableAngle(this,t)},addCircleGraph:function e(t){var r=this
var o=this
var a=$.extend({center:[0,0],radius:2,snapX:.5,snapY:.5,snapRadius:.5,minRadius:1,centerConstraints:{},centerNormalStyle:{},centerHighlightStyle:{stroke:KhanColors.INTERACTING,fill:KhanColors.INTERACTING},circleNormalStyle:{stroke:KhanColors.INTERACTIVE,"fill-opacity":0},circleHighlightStyle:{stroke:KhanColors.INTERACTING,fill:KhanColors.INTERACTING,"fill-opacity":.05}},t)
var i=a.centerConstraints.fixed?KhanColors.DYNAMIC:KhanColors.INTERACTIVE
var n=t?t.centerNormalStyle:null
a.centerNormalStyle=_.extend({},{fill:i,stroke:i},n)
a.centerPoint=o.addMovablePoint({graph:o,coord:a.center,normalStyle:a.centerNormalStyle,snapX:a.snapX,snapY:a.snapY,constraints:a.centerConstraints})
a.circ=o.circle(a.center,a.radius,a.circleNormalStyle)
a.perim=o.mouselayer.circle(o.scalePoint(a.center)[0],o.scalePoint(a.center)[1],o.scaleVector(a.radius)[0]).attr({"stroke-width":20,opacity:.002})
if(!a.centerConstraints.fixed){$(a.centerPoint.mouseTarget.getMouseTarget()).on("vmouseover vmouseout",function(e){if(a.centerPoint.highlight||a.centerPoint.dragging){a.circ.animate(a.circleHighlightStyle,50)}else{a.circ.animate(a.circleNormalStyle,50)}})}a.toFront=function(){a.circ.toFront()
a.perim.toFront()
a.centerPoint.visibleShape.toFront()
if(!a.centerConstraints.fixed){a.centerPoint.mouseTarget.toFront()}}
a.centerPoint.onMove=function(e,t){a.toFront()
a.circ.attr({cx:o.scalePoint(e)[0],cy:o.scalePoint(t)[1]})
a.perim.attr({cx:o.scalePoint(e)[0],cy:o.scalePoint(t)[1]})
if(a.onMove){a.onMove(e,t)}}
$(a.centerPoint).on("move",function(){a.center=this.coord
$(a).trigger("move")})
a.setCenter=function(e,t){a.centerPoint.setCoord([e,t])
a.centerPoint.onMove(e,t)
a.center=[e,t]}
a.setRadius=function(e){a.radius=e
a.perim.attr({r:o.scaleVector(e)[0]})
a.circ.attr({rx:o.scaleVector(e)[0],ry:o.scaleVector(e)[1]})}
a.remove=function(){a.centerPoint.remove()
a.circ.remove()
a.perim.remove()}
var s=[[Math.PI*-1,Math.PI*-.875,"ew-resize"],[Math.PI*-.875,Math.PI*-.625,"nesw-resize"],[Math.PI*-.625,Math.PI*-.375,"ns-resize"],[Math.PI*-.375,Math.PI*-.125,"nwse-resize"],[Math.PI*-.125,Math.PI*.125,"ew-resize"],[Math.PI*.125,Math.PI*.375,"nesw-resize"],[Math.PI*.375,Math.PI*.625,"ns-resize"],[Math.PI*.625,Math.PI*.875,"nwse-resize"],[Math.PI*.875,Math.PI*1,"ew-resize"]]
$(a.perim.node).on("vmousemove",function(e){var t=r.getMouseCoord(e),o=t[0],i=t[1]
o-=a.center[0]
i-=a.center[1]
var n=Math.atan2(i,o)
s.forEach(function(e){var t=e[0],r=e[1],o=e[2]
if(n>=t&&n<r){$(a.perim.node).css("cursor",o)}})})
$(a.perim.node).css("cursor","nesw-resize")
a.perim.node.addEventListener("touchstart",function(e){e.preventDefault()},{passive:false})
$(a.perim.node).on("vmouseover vmouseout vmousedown",function(e){if(e.type==="vmouseover"){a.highlight=true
if(!dragging){a.circ.animate(a.circleHighlightStyle,50)
a.centerPoint.visibleShape.animate(a.centerHighlightStyle,50)}}else if(e.type==="vmouseout"){a.highlight=false
if(!a.dragging&&!a.centerPoint.dragging){a.circ.animate(a.circleNormalStyle,50)
a.centerPoint.visibleShape.animate(a.centerNormalStyle,50)}}else if(e.type==="vmousedown"&&(e.which===1||e.which===0)){e.preventDefault()
a.toFront()
var t=a.radius
$(document).on("vmousemove vmouseup",function(e){e.preventDefault()
a.dragging=true
dragging=true
if(e.type==="vmousemove"){var r=o.constrainToBounds(o.getMouseCoord(e),10)
var i=GraphUtils.getDistance(a.centerPoint.coord,r)
i=Math.max(a.minRadius,Math.round(i/a.snapRadius)*a.snapRadius)
var n=a.radius
var s=true
if(a.onResize){var l=a.onResize(i,n)
if(_.isNumber(l)){i=l}else if(l===false){s=false}}if(s){a.setRadius(i)
$(a).trigger("move")}}else if(e.type==="vmouseup"){$(document).off("vmousemove vmouseup")
a.dragging=false
dragging=false
if(a.onResizeEnd){a.onResizeEnd(a.radius,t)}}})}})
return a},addRotateHandle:function(){var e=function e(t,r,o,a,i,n,s){var l=function e(a,i){var s=o+i
var l=kvector.cartFromPolarDeg([s,n+a])
var c=kvector.add(r,l)
var v=t.scalePoint(c)
return v[0]+","+v[1]}
var c=t.scaleVector(o-a)
var v=t.scaleVector(o+a)
return t.raphael.path(" M"+l(i,-a)+" L"+l(i,-3*a)+" L"+l(2*i,0)+" L"+l(i,3*a)+" L"+l(i,a)+" A"+v[0]+","+v[1]+",0,0,1,"+l(-i,a)+" L"+l(-i,3*a)+" L"+l(-2*i,0)+" L"+l(-i,-3*a)+" L"+l(-i,-a)+" A"+c[0]+","+c[1]+",0,0,0,"+l(i,-a)+" Z").attr({stroke:null,fill:s?KhanColors.INTERACTING:KhanColors.INTERACTIVE})}
return function(t){var r=this
var o=t.center
var a=t.radius
var i=t.lengthAngle||30
var n=t.hideArrow||false
var s=t.mouseTarget
var l=_.uniqueId("rotateHandle")
if(_.isArray(o)){o={coord:o}}var c=r.addMovablePoint({coord:kpoint.addVector(o.coord,kvector.cartFromPolarDeg(a,t.angleDeg||0)),constraints:{fixedDistance:{dist:a,point:o}},mouseTarget:s})
o.toFront()
var v=o.coord
var h=c.coord
var d=h
var u=false
var f=false
var p=void 0
var g=function a(s){if(n){return}var l=kvector.subtract(s,o.coord)
var c=kvector.polarDegFromCart(l)
var v=c[1]
if(p){p.remove()}p=e(r,o.coord,t.radius,u||f?t.hoverWidth/2:t.width/2,i,v,u||f)}
$(o).on("move."+l,function(){var e=kvector.subtract(o.coord,v)
c.setCoord(kvector.add(c.coord,e))
g(c.coord)
v=o.coord
c.constraints.fixedDistance.point=o
h=c.coord})
c.onMove=function(e,r){if(!u){d=h
u=true}var a=[e,r]
if(t.onMove){var i=kvector.polarDegFromCart(kvector.subtract(h,o.coord))
var n=kvector.polarDegFromCart(kvector.subtract(a,o.coord))
var s=i[1]
var l=n[1]
var c=t.onMove(l,s)
if(c!=null&&c!==true){if(c===false){c=s}a=kvector.add(o.coord,kvector.cartFromPolarDeg([i[0],c]))}}g(a)
h=a
return a}
c.onMoveEnd=function(){u=false
g(c.coord)
if(t.onMoveEnd){var e=kvector.polarDegFromCart(kvector.subtract(d,o.coord))
var r=kvector.polarDegFromCart(kvector.subtract(c.coord,o.coord))
t.onMoveEnd(r[1],e[1])}}
c.visibleShape.remove()
if(!s){c.mouseTarget.attr({scale:2})}var m=$(c.mouseTarget.getMouseTarget())
m.bind("vmouseover",function(e){f=true
g(c.coord)})
m.bind("vmouseout",function(e){f=false
g(c.coord)})
g(c.coord)
var b=c.remove
c.remove=function(){b.call(c)
if(p){p.remove()}$(o).off("move."+l)}
c.update=function(){g(c.coord)}
return c}}(),addReflectButton:function(){var e=function e(t,r,o,a,i,n,s){if(kpoint.equal(o[0],o[1])){o=[o[0],kpoint.addVector(o[0],[1,1])]}var l=kvector.normalize(kvector.subtract(o[1],o[0]))
var c=kvector.scale(l,a/2)
var v=kvector.scale(l,i)
var h=kvector.rotateDeg(v,90)
var d=kvector.rotateDeg(v,-90)
var u=kvector.negate(c)
var f=kvector.rotateDeg(c,90)
var p=kvector.rotateDeg(c,-90)
var g=kpoint.addVectors(r,h)
var m=kpoint.addVectors(r,d)
var b=kpoint.addVectors(r,h,c,f)
var y=kpoint.addVectors(r,h,u,f)
var x=kpoint.addVectors(r,d,c,p)
var k=kpoint.addVectors(r,d,u,p)
var M=t.path([g,b,y,true],n)
var A=t.path([m,x,k,true],s)
return{remove:function e(){M.remove()
A.remove()}}}
return function(t){var r=this
var o=t.line
var a=r.addMovablePoint({constraints:t.constraints,coord:kline.midpoint([o.pointA.coord,o.pointZ.coord]),snapX:r.snap[0],snapY:r.snap[1],onMove:function e(t,r){return false},onMoveEnd:function e(r,o){if(t.onMoveEnd){t.onMoveEnd.call(this,r,o)}}})
var i=false
var n=false
var s=void 0
var l=function e(){return i}
var c=_.map([0,1],function(e){var r=e?t.highlightStyle:t.normalStyle
return _.map([0,1],function(e){return _.defaults({"fill-opacity":e},r)})})
var v=function e(t){if(n){t=!t}return c[+l()][+t]}
var h=function o(a,i){if(s){s.remove()}s=e(r,a,i,l()?t.size*1.5:t.size,l()?t.size*.125:.25,v(0),v(1))}
var d=function e(t,r){t=t||o.pointA.coord
r=r||o.pointZ.coord
var i=kline.midpoint([t,r])
a.setCoord(i)
h(i,[t,r])}
$(o).on("move",_.bind(d,a,null,null))
var u=$(a.mouseTarget.getMouseTarget())
u.on("vclick",function(){var e=t.onClick()
if(e!==false){n=!n
h(a.coord,[o.pointA.coord,o.pointZ.coord])}})
o.pointA.toFront()
o.pointZ.toFront()
a.visibleShape.remove()
var f=r.scaleVector(t.size)[0]/20
a.mouseTarget.attr({scale:1.5*f})
u.css("cursor","pointer")
u.bind("vmouseover",function(e){i=true
h(a.coord,[o.pointA.coord,o.pointZ.coord])})
u.bind("vmouseout",function(e){i=false
h(a.coord,[o.pointA.coord,o.pointZ.coord])})
var p=a.remove
a.remove=function(){s.remove()
p.call(a)}
a.update=d
a.isFlipped=function(){return n}
d()
return a}}(),protractor:function e(t){return new Protractor(this,t)},ruler:function e(t){return new Ruler(this,t||{})},addPoints:addPoints})
function Protractor(e,t){this.set=e.raphael.set()
this.cx=t[0]
this.cy=t[1]
var r=this
var o=e.unscaleVector(180.5)[0]
var a=e.scalePoint([this.cx-o,this.cy+o-e.unscaleVector(10.5)[1]])
var i=e.mouselayer.image("https://ka-perseus-graphie.s3.amazonaws.com/e9d032f2ab8b95979f674fbfa67056442ba1ff6a.png",a[0],a[1],360,180)
this.set.push(i)
i.node.addEventListener("touchstart",function(e){e.preventDefault()},{passive:false})
var n=function r(a,i){var n=e.scaleVector(o)
n[0]-=16
n[1]-=16
var s=e.scalePoint(t)
var l=Math.sin((a+90)*Math.PI/180)*(n[0]+i)+s[0]
var c=Math.cos((a+90)*Math.PI/180)*(n[1]+i)+s[1]
return l+","+c}
var s=e.raphael.path(" M"+n(180,6)+" L"+n(180,2)+" L"+n(183,10)+" L"+n(180,18)+" L"+n(180,14)+" A"+(e.scaleVector(o)[0]+10)+","+(e.scaleVector(o)[1]+10)+",0,0,1,"+n(170,14)+" L"+n(170,18)+" L"+n(167,10)+" L"+n(170,2)+" L"+n(170,6)+" A"+(e.scaleVector(o)[0]+10)+","+(e.scaleVector(o)[1]+10)+",0,0,0,"+n(180,6)+" Z").attr({stroke:null,fill:KhanColors.INTERACTIVE})
this.set.push(s)
this.centerPoint=e.addMovablePoint({coord:t,visible:false})
this.rotateHandle=e.addMovablePoint({bounded:false,coord:[Math.sin(275*Math.PI/180)*o+this.cx,Math.cos(275*Math.PI/180)*o+this.cy],onMove:function e(t,o){var a=Math.atan2(r.centerPoint.coord[1]-o,r.centerPoint.coord[0]-t)*180/Math.PI
r.rotate(-a-5,true)}})
this.rotateHandle.constraints.fixedDistance.dist=o
this.rotateHandle.constraints.fixedDistance.point=this.centerPoint
this.rotateHandle.visibleShape.remove()
this.rotateHandle.mouseTarget.attr({scale:2})
var l=false
var c=false
var v=function e(){return c||l}
var h=this
var d=$(h.rotateHandle.mouseTarget.getMouseTarget())
d.bind("vmousedown",function(e){l=true
d.css("cursor","-webkit-grabbing")
d.css("cursor","grabbing")
s.animate({scale:1.5,fill:KhanColors.INTERACTING},50)
$(document).bind("vmouseup.rotateHandle",function(e){l=false
d.css("cursor","-webkit-grab")
d.css("cursor","grab")
if(!v()){s.animate({scale:1,fill:KhanColors.INTERACTIVE},50)}$(document).unbind("vmouseup.rotateHandle")})})
d.bind("vmouseover",function(e){c=true
s.animate({scale:1.5,fill:KhanColors.INTERACTING},50)})
d.bind("vmouseout",function(e){c=false
if(!v()){s.animate({scale:1,fill:KhanColors.INTERACTIVE},50)}})
var u=$.map(this.set,function(e){return e.node})
this.makeTranslatable=function t(){$(u).css("cursor","move")
d.css("cursor","-webkit-grab")
d.css("cursor","grab")
$(u).bind("vmousedown",function(t){t.preventDefault()
var o=t.pageX-$(e.raphael.canvas.parentNode).offset().left
var a=t.pageY-$(e.raphael.canvas.parentNode).offset().top
$(document).bind("vmousemove.protractor",function(t){var i=t.pageX-$(e.raphael.canvas.parentNode).offset().left
var n=t.pageY-$(e.raphael.canvas.parentNode).offset().top
i=Math.max(10,Math.min(e.xpixels-10,i))
n=Math.max(10,Math.min(e.ypixels-10,n))
var s=i-o
var l=n-a
$.each(r.set.items,function(){this.translate(s,l)})
r.centerPoint.setCoord([r.centerPoint.coord[0]+s/e.scale[0],r.centerPoint.coord[1]-l/e.scale[1]])
r.rotateHandle.setCoord([r.rotateHandle.coord[0]+s/e.scale[0],r.rotateHandle.coord[1]-l/e.scale[1]])
o=i
a=n})
$(document).one("vmouseup",function(e){$(document).unbind("vmousemove.protractor")})})}
this.rotation=0
this.rotate=function(t,r){var o=e.scalePoint(this.centerPoint.coord)
if(r){this.rotation=0}this.set.rotate(this.rotation+t,o[0],o[1])
this.rotation=this.rotation+t
return this}
this.moveTo=function t(o,a){var i=e.scalePoint(r.centerPoint.coord)
var n=e.scalePoint([o,a])
var s=GraphUtils.getDistance(i,n)*2
$({x:i[0],y:i[1]}).animate({x:n[0],y:n[1]},{duration:s,step:function t(o,a){var i=0
var n=0
if(a.prop==="x"){i=o-e.scalePoint(r.centerPoint.coord)[0]}else if(a.prop==="y"){n=o-e.scalePoint(r.centerPoint.coord)[1]}$.each(r.set.items,function(){this.translate(i,n)})
r.centerPoint.setCoord([r.centerPoint.coord[0]+i/e.scale[0],r.centerPoint.coord[1]-n/e.scale[1]])
r.rotateHandle.setCoord([r.rotateHandle.coord[0]+i/e.scale[0],r.rotateHandle.coord[1]-n/e.scale[1]])}})}
this.rotateTo=function e(t){if(Math.abs(this.rotation-t)>180){this.rotation+=360}var a=Math.abs(this.rotation-t)*5
$({0:this.rotation}).animate({0:t},{duration:a,step:function e(t,a){r.rotate(t,true)
r.rotateHandle.setCoord([Math.sin((t+275)*Math.PI/180)*o+r.centerPoint.coord[0],Math.cos((t+275)*Math.PI/180)*o+r.centerPoint.coord[1]])}})}
this.remove=function(){this.set.remove()}
this.makeTranslatable()
return this}function Ruler(e,t){_.defaults(t,{center:[0,0],pixelsPerUnit:40,ticksPerUnit:10,units:10,label:"",style:{fill:null,stroke:KhanColors.GRAY}})
var r=_.extend({},t.style,{strokeWidth:1})
var o=_.extend({},t.style,{strokeWidth:2})
var a=t.units*t.pixelsPerUnit
var i=50
var n=e.unscalePoint(kvector.subtract(e.scalePoint(t.center),kvector.scale([a,-i],.5)))
var s=t.pixelsPerUnit/e.scale[0]
var l=i/e.scale[0]
var c=kvector.add(n,[t.units*s,l])
var v=1
var h=void 0
if(t.ticksPerUnit===10){h={10:v,5:v*.55,1:v*.35}}else{var d=[1,.6,.45,.3]
h={}
for(var u=t.ticksPerUnit;u>=1;u/=2){h[u]=v*(d.shift()||.2)}}var f=_.keys(h).sort(function(e,t){return t-e})
function p(e){for(var t=0;t<f.length;t++){var r=f[t]
if(e%r===0){return h[r]}}}var g=n[0]
var m=n[1]
var b=c[0]
var y=c[1]
var x=t.units*t.ticksPerUnit+1
var k=e.raphael.set()
var M=1/e.scale[0]
k.push(e.line([g-M,m],[b+M,m],o))
k.push(e.line([g-M,y],[b+M,y],o))
_.times(x,function(a){var i=a/t.ticksPerUnit
var n=g+i*s
var c=p(a)*l
var v=a===0||a===x-1?o:r
k.push(e.line([n,m],[n,m+c],v))
if(i%1===0){var h=e.scalePoint([n,y])
var d=void 0
var u=void 0
if(i===0){d=t.label
u={mm:13,cm:11,m:8,km:11,in:8,ft:8,yd:10,mi:10}[d]||3*d.toString().length}else{d=i
u=-3*(i.toString().length+1)}var f=e.raphael.text(h[0]+u,h[1]+10,d)
f.attr({"font-family":"KaTeX_Main","font-size":"12px",color:"#444"})
k.push(f)}})
var A=e.mouselayer.path(GraphUtils.svgPath([n,[g,y],c,[b,m],true]))
A.attr({fill:"#000",opacity:0,stroke:"#000","stroke-width":2})
k.push(A)
A.node.addEventListener("touchstart",function(e){e.preventDefault()},{passive:false})
var P=$.map(k,function(e){return e.node})
$(P).css("cursor","move")
$(P).bind("vmousedown",function(t){t.preventDefault()
var r=t.pageX-$(e.raphael.canvas.parentNode).offset().left
var o=t.pageY-$(e.raphael.canvas.parentNode).offset().top
$(document).bind("vmousemove.ruler",function(t){var a=t.pageX-$(e.raphael.canvas.parentNode).offset().left
var i=t.pageY-$(e.raphael.canvas.parentNode).offset().top
a=Math.max(10,Math.min(e.xpixels-10,a))
i=Math.max(10,Math.min(e.ypixels-10,i))
var n=a-r
var s=i-o
k.translate(n,s)
S.setCoord([S.coord[0]+n/e.scale[0],S.coord[1]-s/e.scale[1]])
C.setCoord([C.coord[0]+n/e.scale[0],C.coord[1]-s/e.scale[1]])
r=a
o=i})
$(document).one("vmouseup",function(e){$(document).unbind("vmousemove.ruler")})})
var S=e.addMovablePoint({coord:n,normalStyle:{fill:KhanColors.INTERACTIVE,"fill-opacity":0,stroke:KhanColors.INTERACTIVE},highlightStyle:{fill:KhanColors.INTERACTING,"fill-opacity":.1,stroke:KhanColors.INTERACTING},pointSize:6,onMove:function t(r,o){var a=C.coord[1]-o
var i=C.coord[0]-r
var n=Math.atan2(a,i)*180/Math.PI
var s=kvector.scale(kvector.add([r,o],C.coord),.5)
var l=e.scalePoint(s)
var c=kvector.scale(kvector.add(S.coord,C.coord),.5)
var v=e.scalePoint(c)
var h=kvector.subtract(l,v)
k.rotate(-n,v[0],v[1])
k.translate(h[0],h[1])}})
var C=e.addMovablePoint({coord:[b,m],normalStyle:{fill:KhanColors.INTERACTIVE,"fill-opacity":0,stroke:KhanColors.INTERACTIVE},highlightStyle:{fill:KhanColors.INTERACTING,"fill-opacity":.1,stroke:KhanColors.INTERACTING},pointSize:6,onMove:function t(r,o){var a=o-S.coord[1]
var i=r-S.coord[0]
var n=Math.atan2(a,i)*180/Math.PI
var s=kvector.scale(kvector.add([r,o],S.coord),.5)
var l=e.scalePoint(s)
var c=kvector.scale(kvector.add(S.coord,C.coord),.5)
var v=e.scalePoint(c)
var h=kvector.subtract(l,v)
k.rotate(-n,v[0],v[1])
k.translate(h[0],h[1])}})
S.constraints.fixedDistance.dist=a/e.scale[0]
S.constraints.fixedDistance.point=C
C.constraints.fixedDistance.dist=a/e.scale[0]
C.constraints.fixedDistance.point=S
this.remove=function(){k.remove()
S.remove()
C.remove()}
return this}function MovableAngle(e,t){this.graphie=e
_.extend(this,t)
_.defaults(this,{normalStyle:{stroke:KhanColors.INTERACTIVE,"stroke-width":2,fill:KhanColors.INTERACTIVE},highlightStyle:{stroke:KhanColors.INTERACTING,"stroke-width":2,fill:KhanColors.INTERACTING},labelStyle:{stroke:KhanColors.DYNAMIC,"stroke-width":1,color:KhanColors.DYNAMIC},angleStyle:{stroke:KhanColors.DYNAMIC,"stroke-width":1,color:KhanColors.DYNAMIC},allowReflex:true})
if(!this.points||this.points.length!==3){throw new Error("MovableAngle requires 3 points")}this.points=_.map(t.points,function(t){if(_.isArray(t)){return e.addMovablePoint({coord:t,visible:false,constraints:{fixed:true},normalStyle:this.normalStyle})}else{return t}},this)
this.coords=_.pluck(this.points,"coord")
if(this.reflex==null){if(this.allowReflex){this.reflex=this._getClockwiseAngle(this.coords)>180}else{this.reflex=false}}this.rays=_.map([0,2],function(t){return e.addMovableLineSegment({pointA:this.points[1],pointZ:this.points[t],fixed:true,extendRay:true})},this)
this.temp=[]
this.labeledAngle=e.label([0,0],"","center",this.labelStyle)
if(!this.fixed){this.addMoveHandlers()
this.addHighlightHandlers()}this.update()}_.extend(MovableAngle.prototype,{points:[],snapDegrees:0,snapOffsetDeg:0,angleLabel:"",numArcs:1,pushOut:0,fixed:false,addMoveHandlers:function e(){var t=this.graphie
function r(e,r){var o=30
var a=GraphUtils.getDistance(t.scalePoint(e),t.scalePoint(r))
return a<o}var o=this.points
o[1].onMove=function(e,a){var i=o[1].coord
var n=[e,a]
var s=addPoints(n,reverseVector(i))
var l=true
var c={}
_.each([0,2],function(e){var a=o[e].coord
var i=addPoints(a,s)
var v=GraphUtils.findAngle(n,i)
v*=Math.PI/180
i=t.constrainToBoundsOnAngle(i,10,v)
c[e]=i
if(r(n,i)){l=false}})
if(l){_.each(c,function(e,t){o[t].setCoord(e)})}return l}
var a=this.snapDegrees
var i=this.snapOffsetDeg
_.each([0,2],function(e){o[e].onMove=function(e,n){var s=[e,n]
var l=o[1].coord
if(r(l,s)){return false}else if(a){var c=GraphUtils.findAngle(s,l)
c=Math.round((c-i)/a)*a+i
var v=GraphUtils.getDistance(s,l)
return addPoints(l,t.polar(v,c))}else{return true}}})
$(o).on("move",function(){this.update()
$(this).trigger("move")}.bind(this))},addHighlightHandlers:function e(){var t=this.points[1]
t.onHighlight=function(){_.each(this.points,function(e){e.visibleShape.animate(this.highlightStyle,50)},this)
_.each(this.rays,function(e){e.visibleLine.animate(this.highlightStyle,50)
e.arrowStyle=_.extend({},e.arrowStyle,{color:this.highlightStyle.stroke,stroke:this.highlightStyle.stroke})},this)
this.angleStyle=_.extend({},this.angleStyle,{color:this.highlightStyle.stroke,stroke:this.highlightStyle.stroke})
this.update()}.bind(this)
t.onUnhighlight=function(){_.each(this.points,function(e){e.visibleShape.animate(this.normalStyle,50)},this)
_.each(this.rays,function(e){e.visibleLine.animate(e.normalStyle,50)
e.arrowStyle=_.extend({},e.arrowStyle,{color:e.normalStyle.stroke,stroke:e.normalStyle.stroke})},this)
this.angleStyle=_.extend({},this.angleStyle,{color:KhanColors.DYNAMIC,stroke:KhanColors.DYNAMIC})
this.update()}.bind(this)},_getClockwiseAngle:function e(t){var r=GraphUtils.findAngle(t[2],t[0],t[1])
var o=r+360%360
return o},isReflex:function e(){return this.reflex},isClockwise:function e(){var t=this._getClockwiseAngle(this.coords)>180
return t===this.reflex},getClockwiseCoords:function e(){if(this.isClockwise()){return _.clone(this.coords)}else{return _.clone(this.coords).reverse()}},update:function e(t){var r=this.coords
this.coords=_.pluck(this.points,"coord")
_.invoke(this.points,"updateLineEnds")
var o=this._getClockwiseAngle(r)
var a=this._getClockwiseAngle(this.coords)
var i=o>180
var n=a>180
if(this.allowReflex){if(t==null){t=i!==n&&Math.abs(a-o)<180}if(t){this.reflex=!this.reflex}}_.invoke(this.temp,"remove")
this.temp=this.graphie.labelAngle({point1:this.coords[0],vertex:this.coords[1],point3:this.coords[2],label:this.labeledAngle,text:this.angleLabel,numArcs:this.numArcs,pushOut:this.pushOut,clockwise:this.reflex===n,style:this.angleStyle})},remove:function e(){_.invoke(this.rays,"remove")
_.invoke(this.temp,"remove")
this.labeledAngle.remove()}})
module.exports=InteractiveUtils

});
KAdefine("javascript/perseus-all-package/util/katex-preprocess.js", function(require, module, exports) {
module.exports=function(e){return e.replace(/\{align[*]?\}/g,"{aligned}").replace(/[\u00a0]/g," ")}

});
KAdefine("javascript/perseus-all-package/util/math.js", function(require, module, exports) {
var _=require("underscore")
var $=require("jquery")
var knumber=require("kmath").number
var KhanMath={cleanMath:function r(e){return typeof e==="string"?e.replace(/\+\s*-/g,"- ").replace(/-\s*-/g,"+ ").replace(/\^1/g,""):e},bound:function r(e){if(e===0){return e}else if(e<0){return-KhanMath.bound(-e)}else{return Math.max(1e-6,Math.min(e,1e20))}},factorial:function r(e){if(e<=1){return e}else{return e*KhanMath.factorial(e-1)}},getGCD:function r(e,t){if(arguments.length>2){var a=[].slice.call(arguments,1)
return KhanMath.getGCD(e,KhanMath.getGCD.apply(KhanMath,a))}else{var n=void 0
e=Math.abs(e)
t=Math.abs(t)
while(t){n=e%t
e=t
t=n}return e}},getLCM:function r(e,t){if(arguments.length>2){var a=[].slice.call(arguments,1)
return KhanMath.getLCM(e,KhanMath.getLCM.apply(KhanMath,a))}else{return Math.abs(e*t)/KhanMath.getGCD(e,t)}},primes:[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],isPrime:function r(e){if(e<=1){return false}else if(e<101){return!!$.grep(KhanMath.primes,function(r,t){return Math.abs(r-e)<=.5}).length}else{if(e<=1||e>2&&e%2===0){return false}else{for(var t=3,a=Math.sqrt(e);t<=a;t+=2){if(e%t===0){return false}}}return true}},getPrimeFactorization:function r(e){if(e===1){return[]}else if(KhanMath.isPrime(e)){return[e]}var t=Math.sqrt(e)
for(var a=2;a<=t;a++){if(e%a===0){return $.merge(KhanMath.getPrimeFactorization(a),KhanMath.getPrimeFactorization(e/a))}}},roundToNearest:function r(e,t){return Math.round(t/e)*e},roundTo:function r(e,t){var a=Math.pow(10,e).toFixed(5)
return Math.round((t*a).toFixed(5))/a},toFixedApprox:function r(e,t){var a=e.toFixed(t)
if(knumber.equal(+a,e)){return a}else{return"\\approx "+a}},roundToApprox:function r(e,t){var a=KhanMath.roundTo(t,e)
if(knumber.equal(a,e)){return String(a)}else{return KhanMath.toFixedApprox(e,t)}},toFraction:function r(e,t){if(t==null){t=Math.pow(2,-46)}if(e<0||e>1){var a=e%1
a+=a<0?1:0
var n=KhanMath.toFraction(a,t)
n[0]+=Math.round(e-a)*n[1]
return n}else if(Math.abs(Math.round(Number(e))-e)<=t){return[Math.round(e),1]}else{var i=0
var u=1
var o=1
var h=1
var l=1
var f=2
while(true){if(Math.abs(Number(l/f)-e)<=t){return[l,f]}else if(l/f<e){i=l
u=f}else{o=l
h=f}l=i+o
f=u+h}}},getNumericFormat:function r(e){e=$.trim(e)
e=e.replace(/\u2212/,"-").replace(/([+-])\s+/g,"$1")
if(e.match(/^[+-]?\d+$/)){return"integer"}else if(e.match(/^[+-]?\d+\s+\d+\s*\/\s*\d+$/)){return"mixed"}var t=e.match(/^[+-]?(\d+)\s*\/\s*(\d+)$/)
if(t){return parseFloat(t[1])>parseFloat(t[2])?"improper":"proper"}else if(e.replace(/[,. ]/g,"").match(/^\d+$/)){return"decimal"}else if(e.match(/(pi?|\u03c0|t(?:au)?|\u03c4|pau)/)){return"pi"}else{return null}},toNumericString:function r(e,t){if(e==null){return""}else if(e===0){return"0"}if(t==="percent"){return e*100+"%"}if(t==="pi"){var a=knumber.toFraction(e/Math.PI)
var n=Math.abs(a[0])
var i=a[1]
if(knumber.isInteger(n)){var u=e<0?"-":""
var o="π"
return u+(n===1?"":n)+o+(i===1?"":"/"+i)}}if(_(["proper","improper","mixed","fraction"]).contains(t)){var h=knumber.toFraction(e)
var l=Math.abs(h[0])
var f=h[1]
var s=e<0?"-":""
if(f===1){return s+l}else if(t==="mixed"){var c=l%f
var M=(l-c)/f
return s+(M?M+" ":"")+c+"/"+f}return s+l+"/"+f}return String(e)}}
module.exports=KhanMath

});
KAdefine("javascript/perseus-all-package/util/sizing-utils.js", function(require, module, exports) {
var _require=require("../styles/constants.js"),interactiveSizes=_require.interactiveSizes
var PropTypes=require("prop-types")
var smMax=512
var mdMax=688
var containerSizeClass={SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"}
module.exports={containerSizeClass:containerSizeClass,containerSizeClassPropType:PropTypes.oneOf(Object.values(containerSizeClass)),getClassFromWidth:function e(i){if(!i){return containerSizeClass.MEDIUM}if(i<=smMax){return containerSizeClass.SMALL}else if(i<=mdMax){return containerSizeClass.MEDIUM}else{return containerSizeClass.LARGE}},getInteractiveBoxFromSizeClass:function e(i){if(i===containerSizeClass.SMALL){return[interactiveSizes.defaultBoxSizeSmall,interactiveSizes.defaultBoxSizeSmall]}else{return[interactiveSizes.defaultBoxSize,interactiveSizes.defaultBoxSize]}}}

});
KAdefine("javascript/perseus-all-package/util/tex.js", function(require, module, exports) {
var $=require("jquery")
var katex=require("katex")
require("../../katex-package/load-mathjax.js")
var KhanMath=require("./math.js")
function findChildOrAdd(a,t){var e=$(a).find("."+t)
if(e.length===0){return $("<span>").addClass(t).appendTo($(a))}else{return e}}function doCallback(a,t){var e=0;(function r(){var i=a.scrollHeight
if(i>18||e>=10){t()}else{e++
setTimeout(r,100)}})()}module.exports={processMath:function a(t,e,r,i){var n=$(t)
if(n.attr("data-math-formula")==null||r){var l=findChildOrAdd(n,"katex-holder")
var o=findChildOrAdd(n,"mathjax-holder")
var u=o.find("script[type='math/tex']")[0]
if(e==null){if(n.attr("data-math-formula")){e=n.attr("data-math-formula")}else if(u){e=u.text||u.textContent}}e=e!=null?e+"":""
e=KhanMath.cleanMath(e)
n.attr("data-math-formula",e)
try{katex.render(e,l[0],{colorIsTextColor:true})
if(n.attr("data-math-type")==="mathjax"){var f=MathJax.Hub.getJaxFor(u)
if(f){var h=f.SourceElement()
if(h.previousSibling&&h.previousSibling.className){f.Remove()}}}n.attr("data-math-type","katex")
if(i){doCallback(t,i)}return}catch(a){if(a.__proto__!==katex.ParseError.prototype){throw a}}n.attr("data-math-type","mathjax")
if(!u){o.append("<script type='math/tex'>"+e.replace(/<\//g,"< /")+"<\/script>")}else{if("text"in u){u.text=e}else{u.textContent=e}}if(typeof MathJax!=="undefined"){MathJax.Hub.Queue(["Reprocess",MathJax.Hub,o[0]])
if(i){MathJax.Hub.Queue(function(){var a=MathJax.Callback(function(){})
doCallback(t,function(){i()
a()})
return a})}}}},cleanupMath:function a(t){var e=$(t)
if(e.attr("data-math-formula")){if(typeof MathJax!=="undefined"){var r=MathJax.Hub.getJaxFor(e.find("script")[0])
if(r){var i=r.SourceElement()
if(i.previousSibling&&i.previousSibling.className){r.Remove()}}}e.text(e.attr("data-math-formula"))
e.attr("data-math-formula",null)
e.attr("data-math-type",null)}return t},retrieveMathFormula:function a(t){return $(t).attr("data-math-formula")}}

});
KAdefine("javascript/perseus-all-package/util.js", function(require, module, exports) {
var _=require("underscore")
var KhanAnswerTypes=require("./util/answer-types.js")
var supportsPassive=false
var nestedMap=function e(t,r,n){if(_.isArray(t)){return _.map(t,function(t){return e(t,r)})}else{return r.call(n,t)}}
var Util={inputPathsEqual:function e(t,r){if(t==null||r==null){return t==null===(r==null)}return t.length===r.length&&t.every(function(e,t){return r[t]===e})},nestedMap:nestedMap,rWidgetRule:/^\[\[\u2603 (([a-z-]+) ([0-9]+))\]\]/,rTypeFromWidgetId:/^([a-z-]+) ([0-9]+)$/,snowman:"☃",noScore:{type:"points",earned:0,total:0,message:null},seededRNG:function e(t){var r=t
return function(){var e=r
e=e+2127912214+(e<<12)&4294967295
e=(e^3345072700^e>>>19)&4294967295
e=e+374761393+(e<<5)&4294967295
e=(e+3550635116^e<<9)&4294967295
e=e+4251993797+(e<<3)&4294967295
e=(e^3042594569^e>>>16)&4294967295
return(r=e&268435455)/268435456}},shuffle:function e(t,r,n){var i=_.clone(t)
if(!i.length||_.all(i,function(e){return _.isEqual(e,i[0])})){return i}var s
if(_.isFunction(r)){s=r}else{s=Util.seededRNG(r)}do{for(var a=i.length;a>0;a--){var o=Math.floor(s()*a),u=i[o]
i[o]=i[a-1]
i[a-1]=u}}while(n&&_.isEqual(t,i))
return i},split:"x".split(/(.)/g).length?function(e,t){return e.split(t)}:function(e,t){var r=[]
var n=t.lastIndex=0
var i
while(i=t.exec(e)){r.push(e.slice(n,i.index))
r.push.apply(r,i.slice(1))
n=i.index+i[0].length}r.push(e.slice(n))
return r},combineScores:function e(t,r){var n
if(t.type==="points"&&r.type==="points"){if(t.message&&r.message&&t.message!==r.message){n=null}else{n=t.message||r.message}return{type:"points",earned:t.earned+r.earned,total:t.total+r.total,message:n}}else if(t.type==="points"&&r.type==="invalid"){return r}else if(t.type==="invalid"&&r.type==="points"){return t}else if(t.type==="invalid"&&r.type==="invalid"){if(t.message&&r.message&&t.message!==r.message){n=null}else{n=t.message||r.message}return{type:"invalid",message:n}}},keScoreFromPerseusScore:function e(t,r,n){if(t.type==="points"){return{empty:false,correct:t.earned>=t.total,message:t.message,guess:r,state:n}}else if(t.type==="invalid"){return{empty:true,correct:false,message:t.message,guess:r,state:n}}else{throw new Error("Invalid score type: "+t.type)}},firstNumericalParse:function e(t){var r
var n=KhanAnswerTypes.predicate.createValidatorFunctional(function(e){r=e
return true},{simplify:"optional",inexact:true,forms:"integer, proper, improper, pi, log, mixed, decimal"})
n(t)
return r},stringArrayOfSize:function e(t){return _(t).times(function(){return""})},gridDimensionConfig:function e(t,r,n,i){var s=Util.scaleFromExtent(r,n)
var a=t*s
var o=a>30
return{scale:s,tickStep:t/i,unityLabel:o}},getGridStep:function e(t,r,n){return _(2).times(function(e){var i=Util.scaleFromExtent(t[e],n)
var s=Util.gridStepFromTickStep(r[e],i)
return s})},snapStepFromGridStep:function e(t){return _.map(t,function(e){return e/2})},scaleFromExtent:function e(t,r){var n=t[1]-t[0]
var i=r/n
return i},tickStepFromExtent:function e(t,r){var n=t[1]-t[0]
var i
if(15<n&&n<=20){i=23}else if(n>100||n<5){i=10}else{i=16}var s=r/500
var a=i*s
return Util.tickStepFromNumTicks(n,a)},gridStepFromTickStep:function e(t,r){var n=t*r
var i=t
var s=Math.pow(10,Math.floor(Math.log(i)/Math.LN10))
var a=Math.floor(i/s)
if(n<25){return t}if(n<50){if(a===5){return t}else{return t/2}}if(a===1){return t/2}if(a===2){return t/4}if(a===5){return t/5}},tickStepFromNumTicks:function e(t,r){var n=Math.pow(10,Math.floor(Math.log(t/r)/Math.LN10))
var i=r/t*n
if(i<=.15){n*=10}else if(i<=.35){n*=5}else if(i<=.75){n*=2}return n},constrainedTickStepsFromTickSteps:function e(t,r){var n=[]
for(var i=0;i<2;i++){var s=r[i][1]-r[i][0]
var a=s/t[i]
if(a<=10){n[i]=t[i]}else if(a<=20){n[i]=t[i]*2}else{n[i]=Util.tickStepFromNumTicks(s,10)}}return n},DeprecationMixin:{UNSAFE_componentWillMount:function e(){var t={}
_.each(this.deprecatedProps,function(e,r){if(_.has(this.props,r)){_.extend(t,e(this.props))}},this)
if(!_.isEmpty(t)){_.extend(this.props,t)
setTimeout(this.props.onChange,0,t)}}},eq:function e(t,r){if(_.isNumber(t)&&_.isNumber(r)){return Math.abs(t-r)<1e-9}else{return t===r}},deepEq:function e(t,r){if(_.isArray(t)&&_.isArray(r)){if(t.length!==r.length){return false}for(var n=0;n<t.length;n++){if(!Util.deepEq(t[n],r[n])){return false}}return true}else if(_.isArray(t)||_.isArray(r)){return false}else if(_.isFunction(t)&&_.isFunction(r)){return Util.eq(t,r)}else if(_.isFunction(t)||_.isFunction(r)){return false}else if(_.isObject(t)&&_.isObject(r)){return t===r||_.all(t,function(e,t){return Util.deepEq(r[t],e)})&&_.all(r,function(e,r){return Util.deepEq(t[r],e)})}else if(_.isObject(t)||_.isObject(r)){return false}else{return Util.eq(t,r)}},parseQueryString:function e(t){t=t||window.location.search.substring(1)
var r={},n,i=/\+/g,s=/([^&=]+)=?([^&]*)/g,a=function e(t){return decodeURIComponent(t.replace(i," "))}
while(n=s.exec(t)){r[a(n[1])]=a(n[2])}return r},updateQueryString:function e(t,r,n){n=encodeURIComponent(n)
var i=new RegExp("([?&])"+r+"=.*?(&|$)","i")
var s=t.indexOf("?")!==-1?"&":"?"
if(t.match(i)){return t.replace(i,"$1"+r+"="+n+"$2")}else{return t+s+r+"="+n}},strongEncodeURIComponent:function e(t){return encodeURIComponent(t).replace(/['()!]/g,window.escape).replace(/\*/g,"%2A")},widgetShouldHighlight:function e(t){if(!t){return false}var r=["measurer","protractor"]
return!_.contains(r,t.type)},scoreIsEmpty:function e(t){return t.type==="invalid"&&(!t.message||t.message.length===0)},touchHandlers:{pointerDown:false,currentTouchIdentifier:null},resetTouchHandlers:function e(){_.extend(Util.touchHandlers,{pointerDown:false,currentTouchIdentifier:null})},extractPointerLocation:function e(t){var r
if(Util.touchHandlers.pointerDown){if(Util.touchHandlers.currentTouchIdentifier!=null){var n=t.changedTouches?t.changedTouches.length:0
for(var i=0;i<n;i++){if(t.changedTouches[i].identifier===Util.touchHandlers.currentTouchIdentifier){r=t.changedTouches[i]}}}else{r=t}var s=t.type==="touchend"||t.type==="touchcancel"
if(r&&s){Util.touchHandlers.pointerDown=false
Util.touchHandlers.currentTouchIdentifier=null}}else{Util.touchHandlers.pointerDown=true
if(t.changedTouches){r=t.changedTouches[0]
Util.touchHandlers.currentTouchIdentifier=r.identifier}else{r=t}}if(r){return{left:r.pageX,top:r.pageY}}},supportsPassiveEvents:function e(){try{var t=Object.defineProperty({},"passive",{get:function e(){supportsPassive=true}})
window.addEventListener("testPassive",null,t)
window.removeEventListener("testPassive",null,t)}catch(e){}return supportsPassive},captureScratchpadTouchStart:function e(t){t.stopPropagation()},getImageSize:function e(t,r){var n=new Image
n.onload=function(){if(n.width===0&&n.height===0){document.body.appendChild(n)
_.defer(function(){r(n.clientWidth,n.clientHeight)
document.body.removeChild(n)})}else{r(n.width,n.height)}}
var i=require("./components/svg-image.jsx")
n.src=i.getRealImageUrl(t)},textarea:{getWordBeforeCursor:function e(t){var r=t.value
var n=t.selectionStart-1
var i=Math.max(r.lastIndexOf("\n",n),r.lastIndexOf(" ",n))+1
return{string:r.substring(i,n+1),pos:{start:i,end:n}}},moveCursor:function e(t,r){t.selectionStart=r
t.selectionEnd=r}},unescapeMathMode:function e(t){return t.startsWith("$")&&t.endsWith("$")?t.slice(1,-1):t}}
Util.random=Util.seededRNG((new Date).getTime()&4294967295)
Util.rWidgetParts=new RegExp(Util.rWidgetRule.source+"$")
module.exports=Util

});
KAdefine("javascript/perseus-all-package/version.js", function(require, module, exports) {
module.exports={apiVersion:{major:11,minor:0},itemDataVersion:{major:0,minor:1}}

});
KAdefine("javascript/perseus-all-package/widget-container.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _require=require("./styles/constants.js"),zIndexInteractiveComponent=_require.zIndexInteractiveComponent
var Widgets=require("./widgets.js")
var _require2=require("./util/sizing-utils.js"),containerSizeClass=_require2.containerSizeClass,getClassFromWidth=_require2.getClassFromWidth
var _require3=require("./gorgon/proptypes.js"),linterContextProps=_require3.linterContextProps,linterContextDefault=_require3.linterContextDefault
var WidgetContainer=function(e){babelHelpers.inherits(t,e)
function t(){var i,r,s
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,n=Array(o),a=0;a<o;a++){n[a]=arguments[a]}return s=(i=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),r),r.state={sizeClass:containerSizeClass.MEDIUM,widgetProps:r.props.initialProps},r.getWidget=function(){return r.refs.widget},r.replaceWidgetProps=function(e){r.setState({widgetProps:e})},i),babelHelpers.possibleConstructorReturn(r,s)}t.prototype.componentDidMount=function e(){if(this.state.widgetProps.apiOptions.isMobile){var t=ReactDOM.findDOMNode(this).offsetWidth
this.setState({sizeClass:getClassFromWidth(t)})}}
t.prototype.render=function e(){var t=classNames({"perseus-widget-container":true,"widget-highlight":this.props.shouldHighlight,"widget-nohighlight":!this.props.shouldHighlight})
var i=this.props.type
var r=Widgets.getWidget(i)
if(r==null){return React.createElement("div",{className:t})}var s=this.state.widgetProps.alignment
if(s==="default"){s=Widgets.getDefaultAlignment(i)}t+=" widget-"+s
var o=this.state.widgetProps.apiOptions
var n=this.state.widgetProps.static||o.readOnly
var a={position:"relative",overflow:"visible"}
var l={width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:zIndexInteractiveComponent}
var p=this.props.linterContext
if(!Widgets.isLintable(i)){p.highlightLint=false}return React.createElement("div",{className:t,style:n?a:{}},React.createElement(r,babelHelpers.extends({},this.state.widgetProps,{linterContext:p,containerSizeClass:this.state.sizeClass,ref:"widget"})),n&&React.createElement("div",{style:l}))}
t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(this.props.type!==t.type){throw new Error("WidgetContainer can't change widget type; set a different "+"key instead to recreate the container.")}}
t.prototype.shouldComponentUpdate=function e(t,i){return this.props.shouldHighlight!==t.shouldHighlight||this.props.type!==t.type||this.state.widgetProps!==i.widgetProps||this.state.sizeClass!==i.sizeClass}
return t}(React.Component)
WidgetContainer.propTypes={shouldHighlight:PropTypes.bool.isRequired,type:PropTypes.string,initialProps:PropTypes.object.isRequired,linterContext:linterContextProps}
WidgetContainer.defaultProps={linterContext:linterContextDefault}
module.exports=WidgetContainer

});
KAdefine("javascript/perseus-all-package/widgets/expression.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var ReactDOM=require("react-dom")
var _=require("underscore")
var KAS=require("../../../third_party/javascript-khansrc/kas/kas.js")
var icu=require("icu")
var Tooltip=require("../../react-components-package/tooltip.jsx")
var ApiOptions=require("../perseus-api.jsx").Options
var Changeable=require("../mixins/changeable.jsx")
var ApiOptions=require("../perseus-api.jsx").Options
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var KhanAnswerTypes=require("../util/answer-types.js")
var InlineIcon=require("../components/inline-icon.jsx")
var InputWithExamples=require("../components/input-with-examples.jsx")
var MathInput=require("../components/math-input.jsx")
var TexButtons=require("../components/tex-buttons.jsx")
var KeypadInput=require("math-input").components.KeypadInput
var _require$propTypes=require("math-input").propTypes,keypadConfigurationPropType=_require$propTypes.keypadConfigurationPropType,keypadElementPropType=_require$propTypes.keypadElementPropType
var KeypadTypes=require("math-input").consts.KeypadTypes
var _require=require("../gorgon/proptypes.js"),linterContextProps=_require.linterContextProps,linterContextDefault=_require.linterContextDefault
var _require2=require("../icon-paths.js"),iconExclamationSign=_require2.iconExclamationSign
var lens=require("../../../third_party/javascript-khansrc/hubble/hubble.js")
var ERROR_MESSAGE=i18n._("Sorry, I don't understand that!")
var NO_ANSWERS_WARNING=["An expression without an answer","is no expression to me.","Who can learn from an input","like the one that I see?","Put something in there","won't you please?","A few digits will do -","might I suggest some threes?"].join("\n")
var NO_CORRECT_ANSWERS_WARNING="This question is probably going to be too "+"hard because the expression has no correct answer."
var SIMPLIFY_WARNING=function e(r){return'"'+r+'" is required to be simplified but is not considered '+"simplified by our fancy computer algebra system. This will be "+"graded as incorrect."}
var PARSE_WARNING=function e(r){return'"'+r+"\" <- you sure that's math?"}
var NOT_SPECIFIED_WARNING=function e(r){return"mind filling in answer "+r+"? (the blank one)"}
var insertBraces=function e(r){return r.replace(/([_^])([^{])/g,"$1{$2}")}
var Expression=createReactClass({displayName:"Expression",propTypes:babelHelpers.extends({},Changeable.propTypes,{apiOptions:ApiOptions.propTypes,buttonSets:TexButtons.buttonSetsType,buttonsVisible:PropTypes.oneOf(["always","never","focused"]),functions:PropTypes.arrayOf(PropTypes.string),keypadConfiguration:keypadConfigurationPropType,keypadElement:keypadElementPropType,times:PropTypes.bool,trackInteraction:PropTypes.func.isRequired,value:PropTypes.string,widgetId:PropTypes.string.isRequired,linterContext:linterContextProps}),getDefaultProps:function e(){return{value:"",times:false,functions:[],buttonSets:["basic","trig","prealgebra","logarithms"],onFocus:function e(){},onBlur:function e(){},apiOptions:ApiOptions.defaults,linterContext:linterContextDefault}},getInitialState:function e(){return{showErrorTooltip:false,showErrorText:false}},change:function e(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++){t[n]=arguments[n]}return Changeable.change.apply(this,t)},parse:function e(r,t){var n=_.pick(t||this.props,"functions")
_.extend(n,icu.getDecimalFormatSymbols())
return KAS.parse(insertBraces(r),n)},render:function e(){var r=this
if(this.props.apiOptions.customKeypad){return React.createElement(KeypadInput,{ref:"input",value:this.props.value,keypadElement:this.props.keypadElement,onChange:this.changeAndTrack,onFocus:function e(){r.props.keypadElement.configure(r.props.keypadConfiguration,function(){if(r._isMounted){r._handleFocus()}})},onBlur:this._handleBlur})}else if(this.props.apiOptions.staticRender){return React.createElement(InputWithExamples,{ref:"input",value:this.props.value,type:"tex",examples:[],shouldShowExamples:false,onChange:this.changeAndTrack,onFocus:this._handleFocus,onBlur:this._handleBlur,id:this.props.widgetId,linterContext:this.props.linterContext})}else{var t=React.createElement("span",{className:"error-tooltip"},React.createElement(Tooltip,{className:"error-text-container",horizontalPosition:"right",horizontalAlign:"left",verticalPosition:"top",arrowSize:10,borderColor:"#fcc335",show:this.state.showErrorText},React.createElement("span",{className:"error-icon",onMouseEnter:function e(){r.setState({showErrorText:true})},onMouseLeave:function e(){r.setState({showErrorText:false})},onClick:function e(){r.setState({showErrorText:!r.state.showErrorText})}},React.createElement(InlineIcon,iconExclamationSign)),React.createElement("div",{className:"error-text"},ERROR_MESSAGE)))
var n=classNames({"perseus-widget-expression":true,"show-error-tooltip":this.state.showErrorTooltip})
return React.createElement("span",{className:n},React.createElement(MathInput,{ref:"input",className:ApiClassNames.INTERACTIVE,value:this.props.value,onChange:this.changeAndTrack,convertDotToTimes:this.props.times,buttonsVisible:this.props.buttonsVisible||"focused",buttonSets:this.props.buttonSets,onFocus:this._handleFocus,onBlur:this._handleBlur}),this.state.showErrorTooltip&&t)}},changeAndTrack:function e(r,t){this.change("value",r,t)
this.props.trackInteraction()},_handleFocus:function e(){this.props.onFocus([])},_handleBlur:function e(){this.props.onBlur([])},errorTimeout:null,UNSAFE_componentWillReceiveProps:function e(r){var t=this
if(!_.isEqual(this.props.value,r.value)||!_.isEqual(this.props.functions,r.functions)){clearTimeout(this.errorTimeout)
if(this.parse(r.value,r).parsed){this.setState({showErrorTooltip:false})}else{this.errorTimeout=setTimeout(function(){var e=t.props.apiOptions.onInputError(null,t.props.value,ERROR_MESSAGE)
if(e!==false){t.setState({showErrorTooltip:true})}},2e3)}}},componentDidMount:function e(){this._isMounted=true},componentWillUnmount:function e(){clearTimeout(this.errorTimeout)
this._isMounted=false},focus:function e(){if(this.props.apiOptions.customKeypad){this.refs.input.focus()}else{}return true},focusInputPath:function e(r){this.refs.input.focus()},blurInputPath:function e(r){this.refs.input.blur()},insert:function e(r){if(!this.props.apiOptions.staticRender){this.refs.input.insert(r)}},getInputPaths:function e(){return[[]]},getGrammarTypeForPath:function e(r){return"expression"},setInputValue:function e(r,t,n){this.props.onChange({value:t},n)},getAcceptableFormatsForInputPath:function e(){return null},getUserInput:function e(){return Expression.getUserInputFromProps(this.props)},simpleValidate:function e(r,t){t=t||function(){}
return Expression.validate(this.getUserInput(),r,t)}})
_.extend(Expression,{validate:function e(r,t,n){var s=_.clone(t)
_.extend(s,icu.getDecimalFormatSymbols())
var o=function e(r){var n=KAS.parse(r.value,t)
if(!n.parsed){console.error("Unable to parse solution answer "+("'"+r.value+"' for expression"),t)
return null}return KhanAnswerTypes.expression.createValidatorFunctional(n.expr,_({}).extend(s,{simplify:r.simplify,form:r.form}))}
var i=void 0
var a=void 0
var p=true
var u=void 0
for(var l=t.answerForms||[],c=Array.isArray(l),f=0,l=c?l:l[Symbol.iterator]();;){var h
if(c){if(f>=l.length)break
h=l[f++]}else{f=l.next()
if(f.done)break
h=f.value}var m=h
var e=o(m)
if(!e){continue}var d=e(r)
if(d.correct){i=m
a=d.message||""
break}p=p&&d.empty
if(m.considered==="correct"&&d.ungraded&&!u){u=d}}if(!i){if(u){return{type:"invalid",message:u.message}}else if(p){return{type:"invalid",message:null}}else{return{type:"points",earned:0,total:1}}}else if(i.considered==="ungraded"){var v=n(null,r,a)
return{type:"invalid",message:v===false?null:a}}else{return{type:"points",earned:i.considered==="correct"?1:0,total:1,message:a}}},getUserInputFromProps:function e(r){return insertBraces(r.value)},getOneCorrectAnswerFromRubric:function e(r){var t
var n=r.answerForms.filter(function(e){return e.considered==="correct"})
if(n.length===0){return t}return n[0].value}})
var keypadConfigurationForProps=function e(r){var t=KeypadTypes.EXPRESSION
var n={}
var s={}
for(var o=r.answerForms,i=Array.isArray(o),a=0,o=i?o:o[Symbol.iterator]();;){var p
if(i){if(a>=o.length)break
p=o[a++]}else{a=o.next()
if(a.done)break
p=a.value}var u=p
var l=KAS.parse(u.value,r)
if(l.parsed){(function(){var e=l.expr
var r=function e(r){return r==="pi"||r==="theta"}
var t=function e(t){return r(t)?t.toUpperCase():t}
for(var o=e.getVars(),i=Array.isArray(o),a=0,o=i?o:o[Symbol.iterator]();;){var p
if(i){if(a>=o.length)break
p=o[a++]}else{a=o.next()
if(a.done)break
p=a.value}var u=p
n[t(u)]=true}for(var c=e.getConsts(),f=Array.isArray(c),h=0,c=f?c:c[Symbol.iterator]();;){var m
if(f){if(h>=c.length)break
m=c[h++]}else{h=c.next()
if(h.done)break
m=h.value}var d=m
s[t(d)]=true}})()}}var c=Object.keys(n)
c.sort()
var f=Object.keys(s)
f.sort()
var h=[].concat(c,f)
if(!h.length){h.push("PI")}return{keypadType:t,extraKeys:h}}
var propUpgrades={1:function _(e){return{times:e.times,buttonSets:e.buttonSets,functions:e.functions,buttonsVisible:e.buttonsVisible,answerForms:[{considered:"correct",form:e.form,simplify:e.simplify,value:e.value,key:0}]}}}
module.exports={name:"expression",displayName:"Expression / Equation",defaultAlignment:"inline-block",widget:Expression,transform:function e(r){var t=r.times,n=r.functions,s=r.buttonSets,o=r.buttonsVisible
return{keypadConfiguration:keypadConfigurationForProps(r),times:t,functions:n,buttonSets:s,buttonsVisible:o}},version:{major:1,minor:0},propUpgrades:propUpgrades,Expression:Expression,isLintable:true}

});
KAdefine("javascript/perseus-all-package/widgets/input-number.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var InputWithExamples=require("../components/input-with-examples.jsx")
var SimpleKeypadInput=require("../components/simple-keypad-input.jsx")
var ParseTex=require("../tex-wrangler.js").parseTex
var PossibleAnswers=require("../components/possible-answers.jsx")
var KhanAnswerTypes=require("../util/answer-types.js")
var keypadElementPropType=require("math-input").propTypes.keypadElementPropType
var _require=require("../gorgon/proptypes.js"),linterContextProps=_require.linterContextProps,linterContextDefault=_require.linterContextDefault
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var ApiOptions=require("../perseus-api.jsx").Options
var answerTypes={number:{name:"Numbers",forms:"integer, decimal, proper, improper, mixed"},decimal:{name:"Decimals",forms:"decimal"},integer:{name:"Integers",forms:"integer"},rational:{name:"Fractions and mixed numbers",forms:"integer, proper, improper, mixed"},improper:{name:"Improper numbers (no mixed)",forms:"integer, proper, improper"},mixed:{name:"Mixed numbers (no improper)",forms:"integer, proper, mixed"},percent:{name:"Numbers or percents",forms:"integer, decimal, proper, improper, mixed, percent"},pi:{name:"Numbers with pi",forms:"pi"}}
var formExamples={integer:function e(r){return i18n._("an integer, like $6$")},proper:function e(r){if(r.simplify==="optional"){return i18n._("a *proper* fraction, like $1/2$ or $6/10$")}else{return i18n._("a *simplified proper* fraction, like $3/5$")}},improper:function e(r){if(r.simplify==="optional"){return i18n._("an *improper* fraction, like $10/7$ or $14/8$")}else{return i18n._("a *simplified improper* fraction, like $7/4$")}},mixed:function e(r){return i18n._("a mixed number, like $1\\ 3/4$")},decimal:function e(r){return i18n._("an *exact* decimal, like $0.75$")},percent:function e(r){return i18n._("a percent, like $12.34\\%$")},pi:function e(r){return i18n._("a multiple of pi, like $12\\ \\text{pi}$ or "+"$2/3\\ \\text{pi}$")}}
var InputNumber=function(e){babelHelpers.inherits(r,e)
function r(){var n,t,s
babelHelpers.classCallCheck(this,r)
for(var i=arguments.length,p=Array(i),a=0;a<i;a++){p[a]=arguments[a]}return s=(n=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(p))),t),t.shouldShowExamples=function(){return t.props.answerType!=="number"&&!t.props.apiOptions.staticRender},t.handleChange=function(e,r){t.props.onChange({currentValue:e},r)},t._getInputType=function(){if(t.props.apiOptions.staticRender){return"tex"}else{return"text"}},t._handleFocus=function(){t.props.onFocus([])
var e=t.props.apiOptions.interactionCallback
if(e){e()}},t._handleBlur=function(){t.props.onBlur([])},t.focus=function(){t.refs.input.focus()
return true},t.focusInputPath=function(e){t.refs.input.focus()},t.blurInputPath=function(e){t.refs.input.blur()},t.getInputPaths=function(){return[[]]},t.getGrammarTypeForPath=function(e){return"number"},t.setInputValue=function(e,r,n){t.props.onChange({currentValue:r},n)},t.getUserInput=function(){return r.getUserInputFromProps(t.props)},t.simpleValidate=function(e,n){n=n||function(){}
return r.validate(t.getUserInput(),e,n)},t.examples=function(){var e=t.props.answerType
var r=answerTypes[e].forms.split(/\s*,\s*/)
var n=_.map(r,function(e){return formExamples[e](this.props)},t)
return[i18n._("**Your answer should be** ")].concat(n)},n),babelHelpers.possibleConstructorReturn(t,s)}r.prototype.render=function e(){if(this.props.apiOptions.customKeypad){return React.createElement(SimpleKeypadInput,{ref:"input",value:this.props.currentValue,keypadElement:this.props.keypadElement,onChange:this.handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur})}else{var r=this.props.reviewModeRubric
var n=null
var t=null
if(this.props.apiOptions.satStyling&&r){var s=this.simpleValidate(r)
n=s.type==="points"&&s.earned===s.total
if(!n){var i=String(r.value)
if(r.inexact&&r.maxError){i+=" ± "+r.maxError}var p=[i]
t=React.createElement(PossibleAnswers,{answers:p})}}var a={}
a["perseus-input-size-"+this.props.size]=true
a[ApiClassNames.CORRECT]=r&&n&&this.props.currentValue
a[ApiClassNames.INCORRECT]=r&&!n&&this.props.currentValue
a[ApiClassNames.UNANSWERED]=r&&!this.props.currentValue
var o=React.createElement(InputWithExamples,{ref:"input",value:this.props.currentValue,onChange:this.handleChange,className:classNames(a),type:this._getInputType(),examples:this.examples(),shouldShowExamples:this.shouldShowExamples(),onFocus:this._handleFocus,onBlur:this._handleBlur,id:this.props.widgetId,disabled:this.props.apiOptions.readOnly,linterContext:this.props.linterContext})
if(t){return React.createElement("span",{className:"perseus-input-with-answer-blurb"},o,t)}else{return o}}}
return r}(React.Component)
InputNumber.propTypes={answerType:PropTypes.oneOf(Object.keys(answerTypes)),currentValue:PropTypes.string,keypadElement:keypadElementPropType,reviewModeRubric:PropTypes.object,widgetId:PropTypes.string.isRequired,linterContext:linterContextProps}
InputNumber.defaultProps={currentValue:"",size:"normal",answerType:"number",apiOptions:ApiOptions.defaults,linterContext:linterContextDefault}
_.extend(InputNumber,{validate:function e(r,n,t){if(n.answerType==null){n.answerType="number"}var s=KhanAnswerTypes.number.createValidatorFunctional(n.value,{simplify:n.simplify,inexact:n.inexact||undefined,maxError:n.maxError,forms:answerTypes[n.answerType].forms})
var i=ParseTex(r.currentValue)
var p=s(i)
if(p.empty){var a=t(null,r.currentValue,p.message)
return{type:"invalid",message:a===false?null:p.message}}else{return{type:"points",earned:p.correct?1:0,total:1,message:p.message}}},getUserInputFromProps:function e(r){return{currentValue:r.currentValue}},getOneCorrectAnswerFromRubric:function e(r){if(!r.value){return}var n=String(r.value)
if(r.inexact&&r.maxError){n+=" ± "+r.maxError}return n}})
var propTransform=function e(r){var n=r.simplify,t=r.size,s=r.answerType
return{simplify:n,size:t,answerType:s}}
module.exports={name:"input-number",displayName:"Number text box (old)",defaultAlignment:"inline-block",hidden:true,widget:InputNumber,transform:propTransform,isLintable:true}

});
KAdefine("javascript/perseus-all-package/widgets/numeric-input.jsx", function(require, module, exports) {
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var styleConstants=require("../styles/constants.js")
var InputWithExamples=require("../components/input-with-examples.jsx")
var SimpleKeypadInput=require("../components/simple-keypad-input.jsx")
var ParseTex=require("../tex-wrangler.js").parseTex
var PossibleAnswers=require("../components/possible-answers.jsx")
var ApiClassNames=require("../perseus-api.jsx").ClassNames
var ApiOptions=require("../perseus-api.jsx").Options
var KhanAnswerTypes=require("../util/answer-types.js")
var KhanMath=require("../util/math.js")
var keypadElementPropType=require("math-input").propTypes.keypadElementPropType
var _require2=require("../gorgon/proptypes.js"),linterContextProps=_require2.linterContextProps,linterContextDefault=_require2.linterContextDefault
var _require3=require("../icon-paths.js"),iconDropdownArrow=_require3.iconDropdownArrow
var InlineIcon=require("../components/inline-icon.jsx")
var i18n=require("../../shared-package/i18n.js")
var answerFormButtons=[{title:"Integers",value:"integer",content:"6"},{title:"Decimals",value:"decimal",content:"0.75"},{title:"Proper fractions",value:"proper",content:"⅗"},{title:"Improper fractions",value:"improper",content:"⁷⁄₄"},{title:"Mixed numbers",value:"mixed",content:"1¾"},{title:"Numbers with π",value:"pi",content:"π"}]
var formExamples={integer:function e(){return i18n._("an integer, like $6$")},proper:function e(r){return r.simplify==="optional"?i18n._("a *proper* fraction, like $1/2$ or $6/10$"):i18n._("a *simplified proper* fraction, like $3/5$")},improper:function e(r){return r.simplify==="optional"?i18n._("an *improper* fraction, like $10/7$ or $14/8$"):i18n._("a *simplified improper* fraction, like $7/4$")},mixed:function e(){return i18n._("a mixed number, like $1\\ 3/4$")},decimal:function e(){return i18n._("an *exact* decimal, like $0.75$")},pi:function e(){return i18n._("a multiple of pi, like $12\\ \\text{pi}$ or "+"$2/3\\ \\text{pi}$")}}
var NumericInput=function(e){babelHelpers.inherits(r,e)
function r(){var t,n,s
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,i=Array(a),o=0;o<a;o++){i[o]=arguments[o]}return s=(t=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.state={numSolutions:"no-solutions",previousValues:[""]},n.getAnswerBlurb=function(e){var r
var t
if(n.props.apiOptions.satStyling&&e){var s=n.simpleValidate(e)
r=s.type==="points"&&s.earned===s.total
if(!r){var a=_.filter(e.answers,function(e){return e.status==="correct"})
var i=_.map(a,function(e){var r="decimal"
if(e.answerForms&&e.answerForms[0]){r=e.answerForms[0]}var t=KhanMath.toNumericString(e.value,r)
if(e.maxError){t+=" ± "+KhanMath.toNumericString(e.maxError,r)}return t})
t=React.createElement(PossibleAnswers,{answers:i})}}return[t,r]},n.getClasses=function(e,r){var t={}
t["perseus-input-size-"+n.props.size]=true
t[ApiClassNames.CORRECT]=r&&e&&n.props.currentValue
t[ApiClassNames.INCORRECT]=r&&!e&&n.props.currentValue
t[ApiClassNames.UNANSWERED]=r&&!n.props.currentValue
return t},n.handleChange=function(e,r){n.props.onChange({currentValue:e},r)
n.props.trackInteraction()},n.handleMultipleInputChange=function(e,r){var t=n.props.currentMultipleValues.slice()
t[e]=r
n.props.onChange({currentMultipleValues:t})
n.props.trackInteraction()},n.handleNumSolutionsChange=function(e){var r=e.target.value
n.setState({numSolutions:r})
if(r==="no-solutions"){n.setState({previousValues:n.props.currentMultipleValues})
n.props.onChange({currentMultipleValues:[]})}else{n.props.onChange({currentMultipleValues:n.state.previousValues})
n.setState({previousValues:[]})}},n._getInputType=function(){if(n.props.apiOptions.staticRender){return"tex"}else{return"text"}},n._handleFocus=function(){n.props.onFocus([])
var e=n.props.apiOptions.interactionCallback
if(e){e()}},n._handleBlur=function(){n.props.onBlur([])},n._addInput=function(){n.props.onChange({currentMultipleValues:n.props.currentMultipleValues.concat([""])})},n._removeInput=function(e,r){var t=n.props.currentMultipleValues.length
var s=n.props.currentMultipleValues.slice(0,e).concat(n.props.currentMultipleValues.slice(e+1,t))
n.props.onChange({currentMultipleValues:s})},n.focus=function(){n.refs.input.focus()
return true},n.focusInputPath=function(e){n.refs.input.focus()},n.blurInputPath=function(e){n.refs.input.blur()},n.getInputPaths=function(){return[[]]},n.getGrammarTypeForPath=function(e){return"number"},n.setInputValue=function(e,r,t){n.props.onChange({currentValue:r},t)},n.getUserInput=function(){return r.getUserInputFromProps(n.props)},n.simpleValidate=function(e){return r.validate(n.getUserInput(),e)},n.shouldShowExamples=function(){var e=n.props.answerForms.length===0
var r=_.uniq(n.props.answerForms.map(function(e){return e.name}))
var t=r.length>=_.size(formExamples)
return!e&&!t},n.examples=function(){var e=n.props.answerForms.length!==0?n.props.answerForms:_.map(_.keys(formExamples),function(e){return{name:e,simplify:"required"}})
var r=_.map(e,function(e){return formExamples[e.name](e)})
r=_.uniq(r)
return[i18n._("**Your answer should be** ")].concat(r)},t),babelHelpers.possibleConstructorReturn(n,s)}r.prototype.render=function e(){var r=this
var t=this.props.reviewModeRubric
var n=this.getAnswerBlurb(t)
var s=n[0]
var a=n[1]
var i=this.getClasses(a,t)
var o=this.props.labelText
if(o==null||o===""){o=i18n._("Your answer:")}var u=classNames({"perseus-widget-dropdown":true})
var p=React.createElement("div",null,React.createElement("select",{onChange:this.handleNumSolutionsChange,className:u+" "+css(styles.dropdown)+" "+ApiClassNames.INTERACTIVE,value:this.state.numSolutions},React.createElement("option",{value:"no-solutions"},i18n._("0 solutions")),React.createElement("option",{value:"finite-solutions"},i18n._("Finite solutions"))),React.createElement(InlineIcon,babelHelpers.extends({},iconDropdownArrow,{style:{marginLeft:-24,height:24,width:24}})))
var l
if(this.props.multipleNumberInput){if(this.state.numSolutions==="no-solutions"){return p}else{var c=React.createElement("div",{className:css(styles.addInputButton),onClick:this._addInput},"+")
l=React.createElement("div",null,this.props.currentMultipleValues.map(function(e,t){return React.createElement("div",{key:t,className:css(styles.numberInputContainer)},t>0&&React.createElement("div",{className:css(styles.removeInputButton),onClick:function e(n){return r._removeInput(t,n)},"aria-label":"Remove this answer"},"-"),r.props.apiOptions.customKeypad?React.createElement(SimpleKeypadInput,{ref:"input",value:r.props.currentMultipleValues[t],keypadElement:r.props.keypadElement,onChange:function e(n){return r.handleMultipleInputChange(t,n)},onFocus:r._handleFocus,onBlur:r._handleBlur}):React.createElement(InputWithExamples,{ref:"input",value:r.props.currentMultipleValues[t],onChange:function e(n){return r.handleMultipleInputChange(t,n)},className:classNames(i,css(styles.numberInput)),labelText:o,type:r._getInputType(),examples:r.examples(),shouldShowExamples:r.shouldShowExamples(),onFocus:r._handleFocus,onBlur:r._handleBlur,id:r.props.widgetId,disabled:r.props.apiOptions.readOnly,highlightLint:r.props.highlightLint}))}),c,i18n._("Add answer"))}}else{if(this.props.apiOptions.customKeypad){return React.createElement(SimpleKeypadInput,{ref:"input",value:this.props.currentValue,keypadElement:this.props.keypadElement,onChange:this.handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur})}else{l=React.createElement(InputWithExamples,{ref:"input",value:this.props.currentValue,onChange:this.handleChange,className:classNames(i),labelText:o,type:this._getInputType(),examples:this.examples(),shouldShowExamples:this.shouldShowExamples(),onFocus:this._handleFocus,onBlur:this._handleBlur,id:this.props.widgetId,disabled:this.props.apiOptions.readOnly,highlightLint:this.props.highlightLint})}}if(s){return React.createElement("span",{className:"perseus-input-with-answer-blurb"},this.props.multipleNumberInput&&p,l,s)}else if(this.props.apiOptions.satStyling){return React.createElement("label",{className:"perseus-input-with-label","aria-hidden":"true"},React.createElement("span",{className:"perseus-input-label"},i18n.doNotTranslate("Answer:")),this.props.multipleNumberInput&&p,l)}else{return React.createElement("div",null,this.props.multipleNumberInput&&p,l)}}
return r}(React.Component)
NumericInput.propTypes={currentValue:PropTypes.string,currentMultipleValues:PropTypes.arrayOf(PropTypes.string),size:PropTypes.oneOf(["normal","small"]),apiOptions:ApiOptions.propTypes,coefficient:PropTypes.bool,answerForms:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string.isRequired,simplify:PropTypes.oneOf(["required","optional"]).isRequired})),keypadElement:keypadElementPropType,labelText:PropTypes.string,reviewModeRubric:PropTypes.object,trackInteraction:PropTypes.func.isRequired,widgetId:PropTypes.string.isRequired,linterContext:linterContextProps,multipleNumberInput:PropTypes.bool}
NumericInput.defaultProps={currentValue:"",currentMultipleValues:[""],size:"normal",apiOptions:ApiOptions.defaults,coefficient:false,answerForms:[],labelText:"",linterContext:linterContextDefault,multipleNumberInput:false}
_.extend(NumericInput,{validate:function e(r,t){var n=_.pluck(answerFormButtons,"value")
var s=function e(r){return KhanAnswerTypes.number.createValidatorFunctional(r.value,{message:r.message,simplify:r.status==="correct"?r.simplify:"optional",inexact:true,maxError:r.maxError,forms:r.strict&&r.answerForms&&r.answerForms.length!==0?r.answerForms:n})}
var a=ParseTex(r.currentValue)
var i=_.where(t.answers,{status:"correct"})
if(r.multInput){var o=a.split(",").sort()
i.sort(function(e,r){return e.value>r.value?1:-1})
if(o.length!==i.length){return{type:"points",earned:0,total:1,message:"Incorrect number of answers"}}var u=true
var p
i.forEach(function(e,r){var n=o[r]
if(t.coefficient){if(!n){n=1}else if(n==="-"){n=-1}}var a=s(e)
var i=a(n)
u=u&&i.correct
if(i.message){p=i.message}})
return{type:"points",earned:u?1:0,total:1,message:p}}else{var l=_.find(_.map(i,function(e){var r=a
if(t.coefficient){if(!r){r=1}else if(r==="-"){r=-1}}var n=s(e)
return n(r)}),function(e){return e.correct||e.empty})
if(!l){var c=[].concat(_.where(t.answers,{status:"ungraded"}),_.where(t.answers,{status:"wrong"}))
var m=_.find(c,function(e){var r=s(e)
return r(a).correct})
l={empty:m?m.status==="ungraded":false,correct:m?m.status==="correct":false,message:m?m.message:null,guess:a}}if(l.empty){return{type:"invalid",message:l.message}}else{return{type:"points",earned:l.correct?1:0,total:1,message:l.message}}}},getUserInputFromProps:function e(r){var t=r.multipleNumberInput
return{multInput:t,currentValue:t?r.currentMultipleValues:r.currentValue}},getOneCorrectAnswerFromRubric:function e(r){var t=_.filter(r.answers,function(e){return e.status==="correct"})
var n=_.map(t,function(e){var r="decimal"
if(e.answerForms&&e.answerForms[0]){r=e.answerForms[0]}var t=KhanMath.toNumericString(e.value,r)
if(e.maxError){t+=" ± "+KhanMath.toNumericString(e.maxError,r)}return t})
if(n.length===0){return}return n[0]}})
var unionAnswerForms=function e(r){var t=function e(r,t){return _.reduce(r,function(e,r){var n=_.find(e,t.bind(null,r))
if(n){return e}else{return e.concat([r])}},[])}
var n=_.flatten(r)
var s=t(n,_.isEqual)
return _.sortBy(s,function(e){return _.keys(formExamples).indexOf(e.name)})}
var propsTransform=function e(r){var t=_.extend(_.omit(r,"answers"),{answerForms:unionAnswerForms(_.map(r.answers,function(e){return _.map(e.answerForms,function(r){return{simplify:e.simplify,name:r}})}))})
return t}
var styles=StyleSheet.create({addInputButton:{cursor:"pointer",display:"inline-block",border:"2px solid "+styleConstants.kaGreen,backgroundColor:styleConstants.kaGreen,color:styleConstants.white,fontSize:20,borderRadius:15,width:18,height:18,marginBottom:7,marginRight:8,marginTop:3,textAlign:"center",paddingTop:1},removeInputButton:{cursor:"pointer",display:"inline-block",border:"2px solid "+styleConstants.red,backgroundColor:styleConstants.red,color:styleConstants.white,fontSize:20,borderRadius:15,width:18,height:18,marginBottom:7,marginRight:8,marginTop:4,textAlign:"center"},dropdown:{width:250,marginBottom:10,appearance:"none",backgroundColor:"transparent",border:"1px solid "+styleConstants.gray76,borderRadius:4,boxShadow:"none",fontFamily:styleConstants.baseFontFamily,padding:"9px 25px 9px 9px",":focus":{outline:"none",border:"2px solid "+styleConstants.kaGreen,padding:"8px 25px 8px 8px"},":focus + svg":{color:""+styleConstants.kaGreen},":disabled":{color:styleConstants.gray68},":disabled + svg":{color:styleConstants.gray68}},numberInput:{float:"right",width:170,marginBottom:10,border:"1px solid "+styleConstants.gray76,borderRadius:4,padding:"9px 25px 9px 9px",":focus":{outline:"none",border:"2px solid "+styleConstants.kaGreen,padding:"8px 25px 8px 8px"}},numberInputContainer:{display:"flex"}})
module.exports={name:"numeric-input",displayName:"Number text box",defaultAlignment:"inline-block",accessible:true,widget:NumericInput,transform:propsTransform,isLintable:true}

});
KAdefine("javascript/perseus-all-package/widgets/passage-ref.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var createReactClass=require("create-react-class")
var _=require("underscore")
var Changeable=require("../mixins/changeable.jsx")
var PerseusMarkdown=require("../perseus-markdown.jsx")
var WidgetJsonifyDeprecated=require("../mixins/widget-jsonify-deprecated.jsx")
var i18n=require("../../shared-package/i18n.js")
var EN_DASH="–"
var PassageRef=createReactClass({displayName:"PassageRef",propTypes:babelHelpers.extends({},Changeable.propTypes,{passageNumber:PropTypes.number,referenceNumber:PropTypes.number,summaryText:PropTypes.string}),getDefaultProps:function e(){return{passageNumber:1,referenceNumber:1,summaryText:""}},getInitialState:function e(){return{lineRange:null,content:null}},shouldComponentUpdate:function e(t,n){return!_.isEqual(this.props,t)||!_.isEqual(this.state,n)},getUserInput:function e(){return WidgetJsonifyDeprecated.getUserInput.call(this)},render:function e(){var t=this.state.lineRange
var n
if(!t){n=i18n.$_("lines %(lineRange)s",{lineRange:"?"+EN_DASH+"?"})}else if(t[0]===t[1]){n=i18n.$_("line %(lineNumber)s",{lineNumber:t[0]})}else{n=i18n.$_("lines %(lineRange)s",{lineRange:t[0]+EN_DASH+t[1]})}var r
if(this.props.summaryText){var a=PerseusMarkdown.parseInline(this.props.summaryText)
r=React.createElement("span",{"aria-hidden":true}," ","(“",PerseusMarkdown.basicOutput(a),"”)")}else{r=null}return React.createElement("span",null,n,r,t&&React.createElement("div",{className:"perseus-sr-only"},this.state.content))},change:function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++){n[r]=arguments[r]}return Changeable.change.apply(this,n)},componentDidMount:function e(){this._isMounted=true
this._deferredUpdateRange()
this._throttledUpdateRange=_.throttle(this._deferredUpdateRange,500)
window.addEventListener("resize",this._throttledUpdateRange)},componentDidUpdate:function e(){this._deferredUpdateRange()},componentWillUnmount:function e(){window.removeEventListener("resize",this._throttledUpdateRange)
this._isMounted=false},_deferredUpdateRange:function e(){_.defer(this._updateRange)},_updateRange:function e(){var t=this.props.findWidgets("passage "+this.props.passageNumber)[0]
var n=null
if(t){n=t.getReference(this.props.referenceNumber)}if(this._isMounted){if(n){this.setState({lineRange:[n.startLine,n.endLine],content:n.content})}else{this.setState({lineRange:null,content:null})}}},simpleValidate:function e(t){return PassageRef.validate(this.getUserInput(),t)}})
_.extend(PassageRef,{validate:function e(t,n){return{type:"points",earned:0,total:0,message:null}}})
module.exports={name:"passage-ref",displayName:"PassageRef (SAT only)",defaultAlignment:"inline",widget:PassageRef,transform:function e(t){return _.pick(t,"passageNumber","referenceNumber","summaryText")},version:{major:0,minor:1}}

});
KAdefine("javascript/perseus-all-package/widgets/radio/base-radio.jsx", function(require, module, exports) {
var _instructionsMobile,_responsiveRadioConta
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var classNames=require("classnames")
var React=require("react")
var PropTypes=require("prop-types")
var ReactDOM=require("react-dom")
var _=require("underscore")
var _require2=require("../../../scroll-utils-package/scroll-utils.js"),scrollElementIntoView=_require2.scrollElementIntoView
var ApiClassNames=require("../../perseus-api.jsx").ClassNames
var Renderer=require("../../renderer.jsx")
var sharedStyles=require("../../styles/shared.js")
var styleConstants=require("../../styles/constants.js")
var mediaQueries=require("../../styles/media-queries.js")
var captureScratchpadTouchStart=require("../../util.js").captureScratchpadTouchStart
var Choice=require("./choice.jsx")
var ChoiceNoneAbove=function(e){babelHelpers.inherits(o,e)
function o(){var r,t,s
babelHelpers.classCallCheck(this,o)
for(var i=arguments.length,a=Array(i),n=0;n<i;n++){a[n]=arguments[n]}return s=(r=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),t),t.focusInput=function(){t._choice.focusInput()},r),babelHelpers.possibleConstructorReturn(t,s)}o.prototype.render=function e(){var o=this
var r=_.extend({},this.props,{className:classNames(this.props.className,"none-of-above"),content:this.props.showContent?this.props.content:React.createElement(Renderer,{key:"noneOfTheAboveRenderer",content:i18n._("None of the above")}),ref:function e(r){return o._choice=r}})
return React.createElement(Choice,r)}
return o}(React.Component)
ChoiceNoneAbove.propTypes={className:PropTypes.string,content:PropTypes.node,showContent:PropTypes.bool}
ChoiceNoneAbove.defaultProps={showContent:true}
var ChoicesType=PropTypes.arrayOf(PropTypes.shape({checked:PropTypes.bool,crossedOut:PropTypes.bool,content:PropTypes.node,rationale:PropTypes.node,hasRationale:PropTypes.bool,showRationale:PropTypes.bool,showCorrectness:PropTypes.bool,correct:PropTypes.bool,originalIndex:PropTypes.number,isNoneOfTheAbove:PropTypes.bool}))
var radioBorderColor=styleConstants.radioBorderColor
var BaseRadio=function(e){babelHelpers.inherits(o,e)
function o(){var r,t,s
babelHelpers.classCallCheck(this,o)
for(var i=arguments.length,a=Array(i),n=0;n<i;n++){a[n]=arguments[n]}return s=(r=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(a))),t),t.state={radioGroupName:_.uniqueId("perseus_radio_")},t.updateChoice=function(e,o){var r=void 0
if(o.checked&&!t.props.multipleSelect){r=t.props.choices.map(function(_){return false})}else{r=t.props.choices.map(function(e){return e.checked})}var s=t.props.choices.map(function(e){return e.crossedOut})
r[e]=o.checked
s[e]=o.crossedOut
t.props.onChange({checked:r,crossedOut:s})},t.focus=function(e){ReactDOM.findDOMNode(t.refs["radio"+(e||0)]).focus()
return true},t.getInstructionsText=function(){if(t.props.multipleSelect){if(t.props.countChoices){return i18n._("Choose %(numCorrect)s answers:",{numCorrect:t.props.numCorrect})}else{return i18n._("Choose all answers that apply:")}}else{return i18n._("Choose 1 answer:")}},t.deselectEnabled=function(){return t.props.apiOptions.isMobile||t.props.deselectEnabled},t.goToChoice=function(e){var o=t.props.choices.length
if(e<0){e+=o}if(e>=o){e-=o}var r=t.refs["radio"+e]
if(!r){console.error("found no choice at index "+e+", even after "+"wrapping it to be within bounds")
return}r.focusInput()
var s=t.props.choices.map(function(e){return e.crossedOut})
var i=t.props.choices.map(function(e){return false})
if(!t.props.choices[e].crossedOut){i[e]=true}t.props.onChange({checked:i,crossedOut:s})},r),babelHelpers.possibleConstructorReturn(t,s)}o.prototype.componentDidUpdate=function e(o){var r=this.props,t=r.apiOptions,s=r.choices,i=r.isLastUsedWidget,a=r.reviewModeRubric
if(t.canScrollPage&&i&&a&&!o.reviewModeRubric){var n=s.findIndex(function(e){return e.checked})
if(n>=0){var c=ReactDOM.findDOMNode(this.refs["radio"+n])
scrollElementIntoView(c)}}}
o.prototype.render=function e(){var r=this.props.multipleSelect?"checkbox":"radio"
var t=this.props.reviewModeRubric
var s=!!t
var i=o.styles
var a=this.props.apiOptions.satStyling
var n=this.props.apiOptions.isMobile
var c=this.props.choices
var p=c[0].highlighted
var l=c[c.length-1].highlighted
var d=classNames("perseus-widget-radio",!this.props.editMode&&"perseus-rendered-radio",css(i.radio,!a&&i.responsiveRadioContainer,!a&&p&&n&&i.radioContainerFirstHighlighted,!a&&l&&n&&i.radioContainerLastHighlighted,a&&i.satRadio))
var h=classNames("instructions",css(i.instructions,n&&i.instructionsMobile))
var u=this.getInstructionsText()
var b=!a
var C=css(i.responsiveFieldset)
var v=React.createElement("fieldset",{className:"perseus-widget-radio-fieldset "+C},React.createElement("legend",{className:"perseus-sr-only"},u),b&&React.createElement("div",{className:h},u),React.createElement("ul",{className:d},this.props.choices.map(function(e,o){var n=this
var c=Choice
var p={ref:"radio"+o,apiOptions:this.props.apiOptions,checked:e.checked,crossedOut:e.crossedOut,previouslyAnswered:e.previouslyAnswered,reviewMode:s,correct:e.correct,rationale:e.rationale,content:e.content,disabled:this.props.apiOptions.readOnly||e.disabled,editMode:this.props.editMode,groupName:this.state.radioGroupName,isLastChoice:o===this.props.choices.length-1,showCorrectness:s||!!e.showCorrectness,showRationale:e.hasRationale&&(s||e.showRationale),type:r,pos:o,deselectEnabled:this.deselectEnabled(),onChange:function e(r){n.updateChoice(o,r)},goToPrevChoice:function e(){return n.goToChoice(o-1)},goToNextChoice:function e(){return n.goToChoice(o+1)}}
if(e.isNoneOfTheAbove){c=ChoiceNoneAbove
_.extend(p,{showContent:e.revealNoneOfTheAbove})}var l=this.props.choices[o+1]
var d=!!l&&l.highlighted
var h=function o(r){var c=a&&s&&r
var p=a&&s&&l&&l.checked
return css(sharedStyles.aboveScratchpad,i.item,!a&&i.responsiveItem,!a&&r&&i.selectedItem,!a&&r&&e.highlighted&&i.aboveBackdrop,!a&&r&&e.highlighted&&n.props.apiOptions.isMobile&&i.aboveBackdropMobile,!a&&d&&n.props.apiOptions.isMobile&&i.nextHighlighted,a&&i.satRadioOption,c&&!e.correct&&i.satRadioOptionIncorrect,c&&e.correct&&i.satRadioOptionCorrect,p&&!l.correct&&i.satRadioOptionNextIncorrect,p&&l.correct&&i.satRadioOptionNextCorrect,a&&t&&i.satReviewRadioOption)}
h(true)
var u=classNames(h(e.checked),ApiClassNames.RADIO.OPTION,e.checked&&ApiClassNames.RADIO.SELECTED,s&&t.choices[o].correct&&ApiClassNames.CORRECT,s&&!t.choices[o].correct&&ApiClassNames.INCORRECT)
var b=null
var C=null
if(this.props.editMode){C=function r(t){var s=t.target
while(s&&s!==b){if(s.getAttribute("data-is-radio-icon")){n.updateChoice(o,{checked:!e.checked})
return}s=s.parentNode}}}return React.createElement("li",{key:o,ref:function e(o){return b=o},className:u,onClick:C,onTouchStart:!this.props.labelWrap?null:captureScratchpadTouchStart},React.createElement(c,p))},this)))
return React.createElement("div",{className:css(!a&&i.responsiveContainer)},v)}
return o}(React.Component)
BaseRadio.propTypes={apiOptions:PropTypes.shape({readOnly:PropTypes.bool,satStyling:PropTypes.bool,isMobile:PropTypes.bool,styling:PropTypes.shape({radioStyleVersion:PropTypes.oneOf(["intermediate","final"])}),canScrollPage:PropTypes.bool}),choices:ChoicesType,deselectEnabled:PropTypes.bool,editMode:PropTypes.bool,labelWrap:PropTypes.bool,countChoices:PropTypes.bool,numCorrect:PropTypes.number,multipleSelect:PropTypes.bool,reviewModeRubric:PropTypes.shape({choices:ChoicesType}),onChange:PropTypes.func,isLastUsedWidget:PropTypes.bool}
BaseRadio.styles=StyleSheet.create({instructions:{display:"block",color:styleConstants.gray17,fontSize:14,lineHeight:1.25,fontStyle:"normal",fontWeight:"bold",marginBottom:16},instructionsMobile:(_instructionsMobile={fontSize:18},_instructionsMobile[mediaQueries.smOrSmaller]={fontSize:16},_instructionsMobile[mediaQueries.xl]={fontSize:20},_instructionsMobile),radio:{width:"100%"},responsiveRadioContainer:(_responsiveRadioConta={borderBottom:"1px solid "+radioBorderColor,borderTop:"1px solid "+radioBorderColor,width:"auto"},_responsiveRadioConta[mediaQueries.smOrSmaller]={marginLeft:styleConstants.negativePhoneMargin,marginRight:styleConstants.negativePhoneMargin},_responsiveRadioConta),radioContainerFirstHighlighted:{borderTop:"1px solid rgba(0, 0, 0, 0)"},radioContainerLastHighlighted:{borderBottom:"1px solid rgba(0, 0, 0, 0)"},satRadio:{background:"none",marginLeft:0,userSelect:"none"},satRadioOption:{margin:0,padding:0,borderBottom:"1px solid #ccc",":first-child":{borderTop:"1px solid #ccc"}},satRadioOptionCorrect:{borderBottomColor:styleConstants.satCorrectBorderColor,":first-child":{borderTopColor:styleConstants.satCorrectBorderColor}},satRadioOptionIncorrect:{borderBottomColor:styleConstants.satIncorrectBorderColor,":first-child":{borderTopColor:styleConstants.satIncorrectBorderColor}},satRadioOptionNextCorrect:{borderBottomColor:styleConstants.satCorrectBorderColor},satRadioOptionNextIncorrect:{borderBottomColor:styleConstants.satIncorrectBorderColor},satReviewRadioOption:{pointerEvents:"none"},item:{marginLeft:20},inlineItem:{display:"inline-block",paddingLeft:20,verticalAlign:"middle"},responsiveItem:{marginLeft:0,padding:0,":not(:last-child)":{borderBottom:"1px solid "+radioBorderColor}},selectedItem:{background:"white"},aboveBackdrop:{position:"relative",zIndex:1062},aboveBackdropMobile:{boxShadow:"0 0 4px 0 rgba(0, 0, 0, 0.2),"+"0 0 2px 0 rgba(0, 0, 0, 0.1)",":not(:last-child)":{borderBottom:"1px solid rgba(0, 0, 0, 0)"}},nextHighlighted:{":not(:last-child)":{borderBottom:"1px solid rgba(0, 0, 0, 0)"}},responsiveContainer:{overflow:"auto",marginLeft:styleConstants.negativePhoneMargin,marginRight:styleConstants.negativePhoneMargin,paddingLeft:styleConstants.phoneMargin},responsiveFieldset:{paddingRight:styleConstants.phoneMargin}})
BaseRadio.defaultProps={editMode:false}
module.exports=BaseRadio

});
KAdefine("javascript/perseus-all-package/widgets/radio/choice-icon.jsx", function(require, module, exports) {
var _react=require("react")
var _react2=babelHelpers.interopRequireDefault(_react)
var _aphrodite=require("aphrodite")
var _util=require("./util.js")
var _iconPaths=require("../../icon-paths.js")
var _inlineIcon=require("../../components/inline-icon.jsx")
var _inlineIcon2=babelHelpers.interopRequireDefault(_inlineIcon)
var _focusRing=require("./focus-ring.jsx")
var _focusRing2=babelHelpers.interopRequireDefault(_focusRing)
var _constants=require("../../styles/constants.js")
var _constants2=babelHelpers.interopRequireDefault(_constants)
var i18n=require("../../../shared-package/i18n.js")
var SAT_ICON_SIZE=25
var SATChoiceIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.constructStyles=function e(t,r,o){var s=void 0
var a=_constants2.default.satBlue
var n=_constants2.default.satBlue
if(t){if(r){a=_constants2.default.satCorrectColor
n=o?_constants2.default.white:_constants2.default.satCorrectColor
s=o?_constants2.default.satCorrectColor:_constants2.default.white}else if(o){a=_constants2.default.satIncorrectColor
n=_constants2.default.white
s=_constants2.default.satIncorrectColor}}else if(o){n=_constants2.default.white
s=_constants2.default.satBlue}return{color:n,backgroundColor:s,borderColor:a}}
t.prototype.render=function e(){var t=this.props,r=t.letter,o=t.a11yText,s=t.reviewMode,a=t.checked,n=t.correct,c=t.crossedOut
var l=this.constructStyles(s,n,a),i=l.color,u=l.backgroundColor,d=l.borderColor
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.iconWrapper)},_react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.satCircle),style:{backgroundColor:u,borderColor:d}}),_react2.default.createElement("div",{style:{color:i},className:(0,_aphrodite.css)(styles.letter)},_react2.default.createElement("span",{className:"perseus-sr-only"},o),_react2.default.createElement("span",{"aria-hidden":"true"},r)),c&&_react2.default.createElement(CrossOutLine,{color:d,sat:true}))}
return t}(_react2.default.Component)
var LIBRARY_ICON_SIZE=24
var LibraryChoiceIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.getChoiceInner=function e(){var t=this.props,r=t.letter,o=t.showCorrectness,s=t.correct
if(!o){return r}else if(s){return _react2.default.createElement(_inlineIcon2.default,babelHelpers.extends({},_iconPaths.iconCheck,{style:{position:"relative",top:-1}}))}else{return _react2.default.createElement(_inlineIcon2.default,_iconPaths.iconMinus)}}
t.prototype.getDynamicStyles=function e(){var t=this.props,r=t.checked,o=t.showCorrectness,s=t.pressed,a=t.primaryProductColor,n=t.correct,c=t.transparentBackground
if(!o&&s){return{borderColor:a,color:a,backgroundColor:c?"transparent":_constants2.default.white}}else if(r){var l=o&&n?_constants2.default.kaGreen:a
return{color:_constants2.default.white,backgroundColor:l,borderColor:l}}else{return{borderColor:_constants2.default.gray68,color:_constants2.default.gray68}}}
t.prototype.render=function e(){var t=this.props,r=t.a11yText,o=t.checked,s=t.crossedOut,a=t.showCorrectness,n=t.correct,c=t.focused,l=t.primaryProductColor,i=t.previouslyAnswered
var u=this.getDynamicStyles()
return _react2.default.createElement("div",{className:(0,_aphrodite.css)(styles.iconWrapper)},_react2.default.createElement(_focusRing2.default,{color:l,visible:c},_react2.default.createElement("div",{style:u,className:(0,_aphrodite.css)(styles.libraryCircle,a&&n&&styles.libraryCircleCorrect,a&&!n&&styles.libraryCircleIncorrect,a&&!n&&(o||i)&&styles.libraryCircleIncorrectAnswered),"data-is-radio-icon":true},_react2.default.createElement("div",{className:"perseus-sr-only"},r),_react2.default.createElement("div",{"aria-hidden":true},this.getChoiceInner()))),s&&_react2.default.createElement(CrossOutLine,{color:u.borderColor}))}
return t}(_react2.default.Component)
var CROSS_OUT_LINE_PADDING=2
var CROSS_OUT_LINE_SIZE=LIBRARY_ICON_SIZE+CROSS_OUT_LINE_PADDING*2
var SAT_CROSS_OUT_LINE_SIZE=SAT_ICON_SIZE+CROSS_OUT_LINE_PADDING*2
function CrossOutLine(e){var t=e.sat?SAT_CROSS_OUT_LINE_SIZE:CROSS_OUT_LINE_SIZE
return _react2.default.createElement("svg",{width:t,height:t,viewBox:"0 0 "+t+" "+t,className:(0,_aphrodite.css)(styles.crossOutLine)},_react2.default.createElement("line",{x1:CROSS_OUT_LINE_PADDING,x2:t-CROSS_OUT_LINE_PADDING,y1:t-CROSS_OUT_LINE_PADDING,y2:CROSS_OUT_LINE_PADDING,stroke:e.color,strokeWidth:"2",strokeLinecap:"round"}))}var ChoiceIcon=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.a11yText=function e(t){var r=this.props,o=r.checked,s=r.correct,a=r.crossedOut,n=r.showCorrectness
if(n&&s){if(o){return i18n._("(Choice %(letter)s, Checked, Correct)",{letter:t})}else if(a){return i18n._("(Choice %(letter)s, Crossed out, Correct)",{letter:t})}else{return i18n._("(Choice %(letter)s, Correct)",{letter:t})}}else if(n&&!s){if(o){return i18n._("(Choice %(letter)s, Checked, Incorrect)",{letter:t})}else if(a){return i18n._("(Choice %(letter)s, Crossed out, Incorrect)",{letter:t})}else{return i18n._("(Choice %(letter)s, Incorrect)",{letter:t})}}else{if(o){return i18n._("(Choice %(letter)s, Checked)",{letter:t})}else if(a){return i18n._("(Choice %(letter)s, Crossed out)",{letter:t})}else{return i18n._("(Choice %(letter)s)",{letter:t})}}}
t.prototype.render=function e(){var t=this.props,r=t.pos,o=t.reviewMode,s=t.checked,a=t.crossedOut,n=t.correct,c=t.product,l=t.showCorrectness,i=t.pressed,u=t.focused,d=t.primaryProductColor,C=t.previouslyAnswered,p=t.transparentBackground
var f=(0,_util.getChoiceLetter)(r)
if(c==="sat"){return _react2.default.createElement(SATChoiceIcon,{letter:f,a11yText:this.a11yText(f),reviewMode:o,checked:s,correct:n,crossedOut:a})}else{return _react2.default.createElement(LibraryChoiceIcon,{letter:f,a11yText:this.a11yText(f),reviewMode:o,checked:s,crossedOut:a,pressed:i,focused:u,correct:n,showCorrectness:l,primaryProductColor:d,previouslyAnswered:C,transparentBackground:p})}}
return t}(_react2.default.Component)
ChoiceIcon.defaultProps={primaryProductColor:_constants2.default.kaGreen}
var styles=_aphrodite.StyleSheet.create({satCircle:{display:"block",borderRadius:SAT_ICON_SIZE,borderStyle:"solid",borderWidth:2,content:"''",height:SAT_ICON_SIZE,width:SAT_ICON_SIZE,top:1,left:1},iconWrapper:{display:"inline-block",position:"relative"},crossOutLine:{position:"absolute",top:"calc(50% - "+CROSS_OUT_LINE_SIZE/2+"px)",left:"calc(50% - "+CROSS_OUT_LINE_SIZE/2+"px)"},libraryCircle:{width:LIBRARY_ICON_SIZE,height:LIBRARY_ICON_SIZE,boxSizing:"border-box",borderRadius:LIBRARY_ICON_SIZE,borderStyle:"solid",borderWidth:2,fontFamily:_constants2.default.baseFontFamily,fontWeight:"bold",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1px"},libraryCircleCorrect:{fontSize:LIBRARY_ICON_SIZE},libraryCircleIncorrect:{fontSize:LIBRARY_ICON_SIZE,borderColor:_constants2.default.gray68,color:_constants2.default.gray68},libraryCircleIncorrectAnswered:{backgroundColor:_constants2.default.warning1,borderColor:_constants2.default.warning1,color:_constants2.default.white},letter:{border:"2px solid transparent",width:SAT_ICON_SIZE,height:SAT_ICON_SIZE,position:"absolute",top:1,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:_constants2.default.boldFontFamily,fontSize:13}})
module.exports=ChoiceIcon

});
KAdefine("javascript/perseus-all-package/widgets/radio/choice.jsx", function(require, module, exports) {
var _nonSatRationale,_intermediateResponsi
var _crossOutMenuWrapper=require("./cross-out-menu-wrapper.jsx")
var _crossOutMenuWrapper2=babelHelpers.interopRequireDefault(_crossOutMenuWrapper)
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var _=require("underscore")
var React=require("react")
var PropTypes=require("prop-types")
var classNames=require("classnames")
var _require2=require("../../perseus-api.jsx"),ClassNames=_require2.ClassNames
var sharedStyles=require("../../styles/shared.js")
var styleConstants=require("../../styles/constants.js")
var mediaQueries=require("../../styles/media-queries.js")
var ToggleableRadioButton=require("./toggleable-radio-button.jsx")
var ChoiceIcon=require("./choice-icon.jsx")
var OptionStatus=require("./option-status.jsx")
var focusedStyleMixin={backgroundColor:styleConstants.satSelectedBackgroundColor,outline:"2px solid "+styleConstants.satBlue,zIndex:1}
var intermediateCheckboxPadding="16px 16px"
var intermediateCheckboxPaddingPhone="12px 16px"
var Choice=function(e){babelHelpers.inherits(s,e)
function s(){var t,o,r
babelHelpers.classCallCheck(this,s)
for(var i=arguments.length,n=Array(i),a=0;a<i;a++){n[a]=arguments[a]}return r=(t=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),o),o.state={isInputFocused:false,isInputActive:false},o.onInputFocus=function(){o.setState({isInputFocused:true})},o.onInputBlur=function(){o.setState({isInputFocused:false})},o.onInputMouseDown=function(e){if(e.type==="mousedown"&&o.justFinishedTouch){return}o.setState({isInputActive:true})
if(o.props.apiOptions.satStyling&&o._input){o._input.focus()}},o.onInputMouseUp=function(e){if(e.type==="mouseup"&&o.justFinishedTouch){return}if(e.type==="touchend"){o.justFinishedTouch=true
setTimeout(function(){o.setState({isInputActive:false})
o.justFinishedTouch=false},10)
return}o.setState({isInputActive:false})
if(o.props.apiOptions.satStyling&&o._input){o._input.focus()}},o.onInputMouseOut=function(){o.setState({isInputActive:false})},o.inputRef=function(e){o._input=e},o.renderOptionStatus=function(){var e=o.props,s=e.correct,t=e.checked,r=e.crossedOut,i=e.reviewMode,n=e.previouslyAnswered
if(o.props.apiOptions.satStyling){return}if(!i&&!n){return}return React.createElement(OptionStatus,{checked:t,correct:s,crossedOut:r,previouslyAnswered:n})},o.renderChoiceIcon=function(){var e=o.props.apiOptions.styling,s=e.radioStyleVersion,t=e.primaryProductColor
var r=typeof s==="undefined"?false:s==="final"
if(!r&&!o.props.apiOptions.satStyling){return null}return React.createElement(ChoiceIcon,{pos:o.props.pos,correct:o.props.correct,crossedOut:o.props.crossedOut,pressed:o.state.isInputActive,focused:o.state.isInputFocused,checked:o.props.checked,showCorrectness:o.props.showCorrectness,reviewMode:o.props.reviewMode,product:o.props.apiOptions.satStyling?"sat":"library",primaryProductColor:t,previouslyAnswered:o.props.previouslyAnswered})},o._setChecked=function(e){if(e){o._sendChange({checked:true,crossedOut:false})}else{o._sendChange({checked:false})}},o._setCrossedOut=function(e){if(e){o._sendChange({checked:false,crossedOut:true})}else{o._sendChange({crossedOut:false})}},o._sendChange=function(e){var s=e.checked!=null?e.checked:o.props.checked
var t=e.crossedOut!=null?e.crossedOut:o.props.crossedOut
o.props.onChange({checked:s,crossedOut:t})},o.focusInput=function(){o._input.focus()},t),babelHelpers.possibleConstructorReturn(o,r)}s.prototype.UNSAFE_componentWillUpdate=function e(s){if(this.state.isInputFocused&&s.disabled){this.setState({isInputFocused:false})}}
s.prototype.render=function e(){var t=this
var o=s.styles
var r=this.props.apiOptions.satStyling
var i=this.props.apiOptions.isMobile
var n=this.props.apiOptions.styling.radioStyleVersion
var a=typeof n==="undefined"?false:n==="final"
var p=classNames(this.props.className,"checkbox-label",css(o.label,i&&sharedStyles.disableTextSelection,!r&&o.responsiveLabel,r&&o.satLabel))
var c=classNames(css(this.state.isInputFocused&&o.satDescriptionInputFocused,this.state.isInputActive&&o.satDescriptionInputActive))
var l=this.props.showCorrectness&&!this.props.correct
var u=this.props.checked&&!l
var d={type:this.props.type,name:this.props.groupName,id:this.props.groupName+"-choice-"+this.props.pos,checked:u,disabled:this.props.disabled,onFocus:this.onInputFocus,onBlur:this.onInputBlur,className:css(!a&&sharedStyles.perseusInteractive,!a&&o.input,!a&&sharedStyles.responsiveInput,!a&&!r&&sharedStyles.responsiveRadioInput,!a&&!r&&this.state.isInputActive&&sharedStyles.responsiveRadioInputActive,a&&sharedStyles.perseusSrOnly,r&&sharedStyles.perseusSrOnly,r&&this.props.reviewMode&&o.satReviewInput)}
var h=null
if(this.props.type==="radio"){h=React.createElement(ToggleableRadioButton,babelHelpers.extends({onChecked:function e(s){return t._setChecked(s)},goToPrevChoice:this.props.goToPrevChoice,goToNextChoice:this.props.goToNextChoice,inputRef:this.inputRef},d))}else{h=React.createElement("input",babelHelpers.extends({onChange:function e(s){return t._setChecked(s.target.checked)},ref:this.inputRef},d))}var y=this.props,C=y.reviewMode,v=y.correct,f=y.checked,b=y.isLastChoice
var m=r&&C&&v
var g=r&&C&&!v&&f
var R=classNames("description",m&&"sat-correct",g&&"sat-incorrect",css(!r&&o.description,r&&o.satDescription,m&&o.satDescriptionCorrect,m&&f&&o.satDescriptionCorrectChecked,g&&o.satDescriptionIncorrectChecked,r&&b&&o.satDescriptionLastChoice))
var O=classNames("checkbox",css(sharedStyles.perseusInteractive,!r&&o.choiceIconWrapper,r&&o.satCheckboxOptionContent))
var k=classNames("checkbox-and-option",css(!r&&o.intermediateResponsiveCheckbox,!r&&C&&o.intermediateResponsiveCheckboxReview))
var S=classNames("perseus-radio-rationale-content",css(o.rationale,!r&&o.nonSatRationale,r&&o.satReviewRationale))
var I=this.props.editMode?"div":"label"
var T=this.props.apiOptions.crossOutEnabled
var x=T&&!this.props.showCorrectness
var P=!r&&!C&&this.props.apiOptions.readOnly||x&&this.props.crossedOut
return React.createElement("div",{className:r?c:undefined},React.createElement(_crossOutMenuWrapper2.default,{enabled:x,pos:this.props.pos,primaryProductColor:this.props.apiOptions.styling.primaryProductColor,crossedOut:this.props.crossedOut,onCrossedOutChange:this._setCrossedOut,isSatProduct:r},React.createElement(I,{htmlFor:!this.props.editMode&&d.id,className:p,style:{opacity:P?.5:1}},React.createElement("div",{className:R,onMouseDown:this.onInputMouseDown,onMouseUp:this.onInputMouseUp,onMouseOut:this.onInputMouseOut,onTouchStart:this.onInputMouseDown,onTouchEnd:this.onInputMouseUp},React.createElement("div",{className:k},React.createElement("span",{className:O},h,this.renderChoiceIcon()),React.createElement("span",{className:classNames(ClassNames.RADIO.OPTION_CONTENT,ClassNames.INTERACTIVE,css(r&&o.satRadioOptionContent,r&&C&&o.satReviewRadioOptionContent)),style:{cursor:"default"}},React.createElement("div",{className:css(o.optionStatusContainer)},this.renderOptionStatus()),React.createElement("div",null,this.props.content))),this.props.showRationale&&React.createElement("div",{className:S},this.props.rationale)))))}
return s}(React.Component)
Choice.propTypes={apiOptions:PropTypes.shape({satStyling:PropTypes.bool,isMobile:PropTypes.bool,styling:PropTypes.shape({radioStyleVersion:PropTypes.oneOf(["intermediate","final"]),primaryProductColor:PropTypes.string}),readOnly:PropTypes.bool}),checked:PropTypes.bool,className:PropTypes.string,rationale:PropTypes.node,content:PropTypes.node,correct:PropTypes.bool,deselectEnabled:PropTypes.bool,disabled:PropTypes.bool,editMode:PropTypes.bool,groupName:PropTypes.string,isLastChoice:PropTypes.bool,pos:PropTypes.number,reviewMode:PropTypes.bool,showRationale:PropTypes.bool,showCorrectness:PropTypes.bool,type:PropTypes.string,crossedOut:PropTypes.bool,previouslyAnswered:PropTypes.bool,onChange:PropTypes.func,goToPrevChoice:PropTypes.func.isRequired,goToNextChoice:PropTypes.func.isRequired}
Choice.styles=StyleSheet.create({pos:{display:"none"},description:{display:"inline-block",width:"100%"},satDescription:{display:"block",position:"relative",boxSizing:"border-box",cursor:"pointer",marginLeft:0,padding:"17px 14px"},satDescriptionInputFocused:babelHelpers.extends({},focusedStyleMixin,{display:"block"}),satDescriptionInputActive:babelHelpers.extends({},focusedStyleMixin,{backgroundColor:styleConstants.satActiveBackgroundColor}),satDescriptionCorrect:{color:styleConstants.satCorrectColor},satDescriptionCorrectChecked:{backgroundColor:styleConstants.satCorrectBackgroundColor},satDescriptionIncorrectChecked:{color:styleConstants.satIncorrectColor,backgroundColor:styleConstants.satIncorrectBackgroundColor},input:{display:"inline-block",width:20,margin:3,marginLeft:-20,marginRight:0,float:"none"},satReviewInput:{pointerEvents:"none"},satRadioOptionContent:{userSelect:"text",display:"block",marginLeft:45,cursor:"inherit"},satReviewRadioOptionContent:{fontWeight:"bold"},satCheckboxOptionContent:{position:"absolute",display:"block",top:"50%",margin:"-16px 0 0 0",width:"auto"},choiceIconWrapper:{display:"flex",marginRight:12,flexShrink:0},optionStatusContainer:{display:"block"},rationale:{display:"block"},nonSatRationale:(_nonSatRationale={padding:intermediateCheckboxPadding,paddingTop:0,marginLeft:44},_nonSatRationale[mediaQueries.smOrSmaller]={padding:intermediateCheckboxPaddingPhone,paddingTop:0},_nonSatRationale),satReviewRationale:{marginTop:13,marginLeft:45},label:{display:"block",transition:"opacity 0.2s ease-out"},responsiveLabel:{WebkitTapHighlightColor:"transparent",display:"flex",alignItems:"stretch"},satLabel:{cursor:"pointer"},intermediateResponsiveCheckbox:(_intermediateResponsi={display:"flex",alignItems:"center",padding:intermediateCheckboxPadding},_intermediateResponsi[mediaQueries.smOrSmaller]={padding:intermediateCheckboxPaddingPhone},_intermediateResponsi),intermediateResponsiveCheckboxReview:{alignItems:"flex-start"}})
Choice.defaultProps={apiOptions:{styling:{}},checked:false,classSet:{},correct:false,disabled:false,editMode:false,onChange:function e(){},showRationale:false,type:"radio",pos:0,previouslyAnswered:false}
module.exports=Choice

});
KAdefine("javascript/perseus-all-package/widgets/radio/cross-out-button.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _wonderBlocksTypographyV=require("@khanacademy/wonder-blocks-typography-v1")
var _globalStyles=require("../../../shared-styles-package/global-styles.js")
var _choiceIcon=require("./choice-icon.jsx")
var _choiceIcon2=babelHelpers.interopRequireDefault(_choiceIcon)
var _util=require("./util.js")
var i18n=require("../../../shared-package/i18n.js")
var CrossOutButton=function(e){babelHelpers.inherits(r,e)
function r(){var o,t,s
babelHelpers.classCallCheck(this,r)
for(var a=arguments.length,n=Array(a),l=0;l<a;l++){n[l]=arguments[l]}return s=(o=(t=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(n))),t),t._handleTooltipButtonRef=function(e){if(e&&t.props.usingKeyboardFocus){e.focus()}},o),babelHelpers.possibleConstructorReturn(t,s)}r.prototype._getAriaLabel=function e(){var r=this.props,o=r.crossedOut,t=r.pos
var s=(0,_util.getChoiceLetter)(t)
if(o){return i18n._("Bring back Choice %(letter)s",{letter:s})}else{return i18n._("Cross out Choice %(letter)s",{letter:s})}}
r.prototype.render=function e(){var r=this
var o=this.props,t=o.crossedOut,s=o.pos,a=o.primaryProductColor,n=o.theme
var l=n==="day"?a:_wonderBlocksColorV2.default.white
return React.createElement("button",{type:"button","aria-label":this._getAriaLabel(),className:(0,_aphrodite.css)([styles.tooltipButton]),onClick:function e(){return r.props.onClick()},onMouseDown:function e(r){return r.preventDefault()},onFocus:function e(){return r.props.onFocus()},onBlur:function e(){return r.props.onBlur()},disabled:this.props.disabled,tabIndex:this.props.tabFocusable?0:-1,ref:this._handleTooltipButtonRef},React.createElement(_choiceIcon2.default,{pos:s,product:"library",crossedOut:!this.props.crossedOut,primaryProductColor:l,pressed:true,checked:false,focused:false,correct:false,showCorrectness:false,reviewMode:false,previouslyAnswered:false,transparentBackground:true}),React.createElement(_wonderBlocksTypographyV.LabelLarge,{style:{color:l}},t?i18n._("Bring back"):i18n._("Cross out")))}
return r}(React.PureComponent)
CrossOutButton.defaultProps={primaryProductColor:_globalStyles.colors.kaGreen}
exports.default=CrossOutButton
var styles=_aphrodite.StyleSheet.create({tooltipButton:{background:"none",border:"none",font:"inherit",padding:0,cursor:"pointer",textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}})

});
KAdefine("javascript/perseus-all-package/widgets/radio/cross-out-menu-wrapper.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _slidingContentEnable,_slidingContentOpen,_menu,_slidePanel
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _aphrodite=require("aphrodite")
var _wonderBlocksColorV=require("@khanacademy/wonder-blocks-color-v1")
var _wonderBlocksColorV2=babelHelpers.interopRequireDefault(_wonderBlocksColorV)
var _icon=require("../../../shared-styles-package/icon.jsx")
var _icon2=babelHelpers.interopRequireDefault(_icon)
var _mediaQueries=require("../../styles/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var _crossOutButton=require("./cross-out-button.jsx")
var _crossOutButton2=babelHelpers.interopRequireDefault(_crossOutButton)
var _crossOutTooltip=require("./cross-out-tooltip.jsx")
var _crossOutTooltip2=babelHelpers.interopRequireDefault(_crossOutTooltip)
var _util=require("./util.js")
var i18n=require("../../../shared-package/i18n.js")
var ellipsisHorizontalIcon={path:"M27.218 6.82l0 13.578q0 2.852-1.984 4.836t-4.836 1.984l-13.578 0q-2.852 0-4.836-1.984t-1.984-4.836l0-13.578q0-2.852 1.984-4.836t4.836-1.984l13.578 0q2.852 0 4.836 1.984t1.984 4.836zm36.27 0l0 13.578q0 2.852-1.984 4.836t-4.836 1.984l-13.578 0q-2.852 0-4.836-1.984t-1.984-4.836l0-13.578q0-2.852 1.984-4.836t4.836-1.984l13.578 0q2.852 0 4.836 1.984t1.984 4.836zm36.27 0l0 13.578q0 2.852-1.984 4.836t-4.836 1.984l-13.578 0q-2.852 0-4.836-1.984t-1.984-4.836l0-13.578q0-2.852 1.984-4.836t4.836-1.984l13.578 0q2.852 0 4.836 1.984t1.984 4.836z",width:100,height:27.284}
var CrossOutMenuWrapper=function(e){babelHelpers.inherits(t,e)
function t(){var n,r,o
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),l=0;l<s;l++){i[l]=arguments[l]}return o=(n=(r=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),r),r.state={hovered:false,opened:false,slidePanelCovered:true,usingKeyboardFocus:false,wasCrossedOutOnLastOpen:false},r._openMenu=function(){var e=r._menu!=null&&r._menu.contains(document.activeElement)
r.setState({opened:true,usingKeyboardFocus:e,wasCrossedOutOnLastOpen:r.props.crossedOut})},r._closeMenu=function(){if(r._crossOutButtonIsFocused&&r._menuButton){r._menuButton.focus()}r.setState({opened:false,slidePanelCovered:true})},r._handleMenuClick=function(e,t){if(t){r._openMenu()}else{r._closeMenu()}e.preventDefault()},r._handleCrossedOutButtonClick=function(e){r.props.onCrossedOutChange(e)
r._closeMenu()},r._handleSlideTransitionEnd=function(){if(r.state.opened){r.setState({slidePanelCovered:false})}},n),babelHelpers.possibleConstructorReturn(r,o)}t.prototype.UNSAFE_componentWillReceiveProps=function e(t){if(!t.enabled){this._closeMenu()}}
t.prototype._getButtonProps=function e(t){var n=this
var r=this.state.wasCrossedOutOnLastOpen
return{onClick:function e(){n._handleCrossedOutButtonClick(!r)},onFocus:function e(){n._crossOutButtonIsFocused=true},onBlur:function e(){n._crossOutButtonIsFocused=false},crossedOut:r,pos:this.props.pos,primaryProductColor:this.props.primaryProductColor,usingKeyboardFocus:this.state.usingKeyboardFocus,theme:t}}
t.prototype._getMenuIconColor=function e(){if(this.state.opened){return this.props.primaryProductColor}else if(this.state.hovered){return _wonderBlocksColorV2.default.offBlack}else{return _wonderBlocksColorV2.default.offBlack50}}
t.prototype._renderMenu=function e(){var t=this
var n=this.props,r=n.pos,o=n.isSatProduct
var s=this.state.opened
var i=(0,_aphrodite.css)(styles.menu,o&&styles.spacing)
return React.createElement("div",{ref:function e(n){return t._menu=n},className:i,onClick:function e(n){return t._handleMenuClick(n,!s)},onMouseEnter:function e(){return t.setState({hovered:true})},onMouseLeave:function e(){return t.setState({hovered:false})}},React.createElement(_crossOutTooltip2.default,{dismissed:!this.state.opened,onDismiss:this._closeMenu,buttonProps:this._getButtonProps("day")},React.createElement("button",{type:"button","aria-label":i18n._("Open menu for Choice %(letter)s",{letter:(0,_util.getChoiceLetter)(r)}),className:(0,_aphrodite.css)([styles.menuButton]),onClick:function e(n){return t._handleMenuClick(n,!s)},onMouseDown:function e(t){return t.preventDefault()},ref:function e(n){return t._menuButton=n}},React.createElement(_icon2.default,{className:(0,_aphrodite.css)(styles.menuIcon),icon:ellipsisHorizontalIcon,size:3,color:this._getMenuIconColor()}))))}
t.prototype._renderSlidePanel=function e(){var t=this._getButtonProps("night")
var n=this.state.slidePanelCovered
return React.createElement("div",{className:(0,_aphrodite.css)(styles.slidePanel,n&&styles.slidePanelCovered),onClick:t.onClick,"aria-hidden":n},React.createElement(_crossOutButton2.default,babelHelpers.extends({},t,{disabled:n,tabFocusable:!n})))}
t.prototype.render=function e(){var t=this.props.enabled
var n=this.state.opened
return React.createElement("div",{className:(0,_aphrodite.css)(styles.wrapper)},React.createElement("div",{className:(0,_aphrodite.css)(styles.slidingContent,t&&styles.slidingContentEnabled,n&&styles.slidingContentOpen),onTransitionEnd:this._handleSlideTransitionEnd},React.createElement("div",{className:(0,_aphrodite.css)(styles.content)},this.props.children),t&&this._renderMenu()),t&&this._renderSlidePanel())}
return t}(React.PureComponent)
exports.default=CrossOutMenuWrapper
var SLIDE_PANEL_WIDTH=96
var styles=_aphrodite.StyleSheet.create({wrapper:{display:"block",position:"relative"},slidingContent:{display:"flex",flexDirection:"row",alignItems:"stretch"},slidingContentEnabled:(_slidingContentEnable={},_slidingContentEnable[_mediaQueries2.default.smOrSmaller]={transition:"transform 0.2s ease-out",backgroundColor:_wonderBlocksColorV2.default.white},_slidingContentEnable),slidingContentOpen:(_slidingContentOpen={},_slidingContentOpen[_mediaQueries2.default.smOrSmaller]={transform:"translateX(-"+SLIDE_PANEL_WIDTH+"px)"},_slidingContentOpen),content:{display:"block",flex:"1 1 0"},menu:(_menu={cursor:"pointer",boxSizing:"border-box",width:32,display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},_menu[_mediaQueries2.default.smOrSmaller]={paddingRight:8},_menu),menuButton:{background:"none",border:"none",font:"inherit",padding:0,textAlign:"inherit",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",height:16},menuIcon:{display:"block"},slidePanel:(_slidePanel={position:"absolute",top:0,right:0,boxSizing:"border-box",width:SLIDE_PANEL_WIDTH,height:"100%",paddingLeft:8,paddingRight:8,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:_wonderBlocksColorV2.default.offBlack50,cursor:"pointer"},_slidePanel[_mediaQueries2.default.mdOrLarger]={display:"none"},_slidePanel),spacing:{paddingRight:12},slidePanelCovered:{zIndex:-1}})

});
KAdefine("javascript/perseus-all-package/widgets/radio/cross-out-tooltip.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _newTooltip=require("../../../components/new-tooltip-package/new-tooltip.jsx")
var _newTooltip2=babelHelpers.interopRequireDefault(_newTooltip)
var _crossOutButton=require("./cross-out-button.jsx")
var _crossOutButton2=babelHelpers.interopRequireDefault(_crossOutButton)
var _mediaQueries=require("../../styles/media-queries.js")
var _mediaQueries2=babelHelpers.interopRequireDefault(_mediaQueries)
var CrossOutTooltip=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),l=0;l<s;l++){i[l]=arguments[l]}return n=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),o),o._handleKeyDown=function(e){if(e.key==="Tab"){o.props.onDismiss()
e.preventDefault()}},r),babelHelpers.possibleConstructorReturn(o,n)}t.prototype._renderTooltipContent=function e(){return React.createElement("div",{onKeyDown:this._handleKeyDown},React.createElement(_crossOutButton2.default,this.props.buttonProps))}
t.prototype.render=function e(){var t=this
return React.createElement("div",null,React.createElement(_newTooltip2.default,{content:this._renderTooltipContent(),offsetFrom:"arrow",offset:10,dismissed:this.props.dismissed,showOnMount:true,toggleOnHover:false,onClick:function e(){return t.props.buttonProps.onClick()},media:_mediaQueries2.default.mdOrLarger},this.props.children),!this.props.dismissed&&React.createElement(GlobalDismissalHandlers,{onDismiss:this.props.onDismiss}))}
return t}(React.PureComponent)
exports.default=CrossOutTooltip
var GlobalDismissalHandlers=function(e){babelHelpers.inherits(t,e)
function t(){var r,o,n
babelHelpers.classCallCheck(this,t)
for(var s=arguments.length,i=Array(s),l=0;l<s;l++){i[l]=arguments[l]}return n=(r=(o=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),o),o._handleGlobalClick=function(){o.props.onDismiss()},o._handleGlobalKeyup=function(e){if(e.key==="Escape"){o.props.onDismiss()}},r),babelHelpers.possibleConstructorReturn(o,n)}t.prototype.componentDidMount=function e(){var t=this
setTimeout(function(){window.addEventListener("click",t._handleGlobalClick)
window.addEventListener("keyup",t._handleGlobalKeyup)},0)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("click",this._handleGlobalClick)
window.removeEventListener("keyup",this._handleGlobalKeyup)}
t.prototype.render=function e(){return null}
return t}(React.PureComponent)

});
KAdefine("javascript/perseus-all-package/widgets/radio/focus-ring.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var styleConstants=require("../../styles/constants.js")
var FocusRing=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype.render=function e(){var r=this.props.visible?this.props.color:"transparent"
var s={borderColor:r}
return React.createElement("span",{className:css(styles.ring),style:s},this.props.children)}
return r}(React.Component)
FocusRing.defaultProps={visible:true,color:styleConstants.kaGreen}
var styles=StyleSheet.create({ring:{margin:"auto",display:"inline-block",borderRadius:"50%",borderWidth:2,padding:2,borderStyle:"solid"}})
module.exports=FocusRing

});
KAdefine("javascript/perseus-all-package/widgets/radio/option-status.jsx", function(require, module, exports) {
var React=require("react")
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var i18n=require("../../../shared-package/i18n.js")
var styleConstants=require("../../styles/constants.js")
var OptionStatus=function(e){babelHelpers.inherits(r,e)
function r(){babelHelpers.classCallCheck(this,r)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}r.prototype._renderText=function e(){var r=this.props,t=r.checked,s=r.correct,n=r.crossedOut
if(s){if(t){return i18n._("Correct (selected)")}else if(n){return i18n._("Correct (but you crossed it out)")}else{return i18n._("Correct")}}else{if(t){return i18n._("Incorrect (selected)")}else{return i18n._("Incorrect")}}}
r.prototype.render=function e(){var r=this.props,t=r.checked,s=r.correct,n=r.previouslyAnswered
var c=void 0
if(s){c=styles.correct}else{if(t||n){c=styles.incorrectAnswered}else{c=styles.incorrect}}return React.createElement("div",{className:css(styles.text,c)},this._renderText())}
return r}(React.Component)
var styles=StyleSheet.create({text:{alignItems:"center",display:"flex",fontSize:12,height:32,textTransform:"uppercase"},correct:{color:styleConstants.kaGreen},incorrectAnswered:{color:styleConstants.warning1},incorrect:{color:styleConstants.gray68}})
module.exports=OptionStatus

});
KAdefine("javascript/perseus-all-package/widgets/radio/toggleable-radio-button.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var ToggleableRadioButton=function(e){babelHelpers.inherits(o,e)
function o(){var r,n,t
babelHelpers.classCallCheck(this,o)
for(var p=arguments.length,i=Array(p),c=0;c<p;c++){i[c]=arguments[c]}return t=(r=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),n),n.handleClick=function(e){n.props.onChecked(!n.props.checked)},n.handleKeyUp=function(e){if(e.key===" "){n.props.onChecked(!n.props.checked)
e.preventDefault()}},n.handleChange=function(e){if(!n.props.checked&&e.target.checked){n.props.onChecked(true)}},n.handleKeyDown=function(e){if(e.key===" "){e.preventDefault()}else if(e.key==="ArrowUp"||e.key==="ArrowLeft"){n.props.goToPrevChoice()
e.preventDefault()}else if(e.key==="ArrowDown"||e.key==="ArrowRight"){n.props.goToNextChoice()
e.preventDefault()}},n.handleRef=function(e){n._inputElement=e
n.props.inputRef&&n.props.inputRef(e)},r),babelHelpers.possibleConstructorReturn(n,t)}o.prototype.render=function e(){var o=this.props,r=o.inputRef,n=o.onChecked,t=o.goToPrevChoice,p=o.goToNextChoice,i=babelHelpers.objectWithoutProperties(o,["inputRef","onChecked","goToPrevChoice","goToNextChoice"])
return React.createElement("input",babelHelpers.extends({},i,{type:"radio",onChange:this.handleChange,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,ref:this.handleRef}))}
return o}(React.Component)
ToggleableRadioButton.propTypes={checked:PropTypes.bool.isRequired,inputRef:PropTypes.func,onChecked:PropTypes.func.isRequired,goToPrevChoice:PropTypes.func.isRequired,goToNextChoice:PropTypes.func.isRequired}
module.exports=ToggleableRadioButton

});
KAdefine("javascript/perseus-all-package/widgets/radio/widget.jsx", function(require, module, exports) {
var React=require("react")
var PropTypes=require("prop-types")
var _=require("underscore")
var Renderer=require("../../renderer.jsx")
var PassageRef=require("../passage-ref.jsx")
var Util=require("../../util.js")
var BaseRadio=require("./base-radio.jsx")
var _require=require("../../gorgon/proptypes.js"),linterContextProps=_require.linterContextProps,linterContextDefault=_require.linterContextDefault
var Radio=function(e){babelHelpers.inherits(r,e)
function r(){var o,s,t
babelHelpers.classCallCheck(this,r)
for(var n=arguments.length,i=Array(n),a=0;a<n;a++){i[a]=arguments[a]}return t=(o=(s=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(i))),s),s._renderRenderer=function(e){e=e||""
var r=1
var o={}
var t=e.replace(/\{\{passage-ref (\d+) (\d+)(?: "([^"]*)")?\}\}/g,function(e,s,t,n){var i="passage-ref "+r
r++
o[i]={type:"passage-ref",graded:false,options:{passageNumber:parseInt(s),referenceNumber:parseInt(t),summaryText:n},version:PassageRef.version}
return"[["+Util.snowman+" "+i+"]]"})
return React.createElement(Renderer,{key:"choiceContentRenderer",content:t,widgets:o,findExternalWidgets:s.props.findWidgets,alwaysUpdate:true,linterContext:babelHelpers.extends({},s.props.linterContext,{blockHighlight:true})})},s.focus=function(e){return s.refs.baseRadio.focus(e)},s.updateChoices=function(e){var r=s.props,o=r.choiceStates,t=r.choices
var n=void 0
if(o){n=o.map(function(e){return babelHelpers.extends({},e)})}else{n=t.map(function(){return{selected:false,crossedOut:false,highlighted:false,rationaleShown:false,correctnessShown:false,previouslyAnswered:false,readOnly:false}})}n.forEach(function(r,o){r.selected=e.checked[o]
r.crossedOut=e.crossedOut[o]})
s.props.onChange({choiceStates:n})
s.props.trackInteraction()},s.getUserInput=function(){return r.getUserInputFromProps(s.props)},s.simpleValidate=function(e){return r.validate(s.getUserInput(),e)},s.enforceOrdering=function(e){var r=_.pluck(e,"content")
if(_.isEqual(r,[i18n._("False"),i18n._("True")])||_.isEqual(r,[i18n._("No"),i18n._("Yes")])){return[e[1]].concat([e[0]])}return e},s.showRationalesForCurrentlySelectedChoices=function(e){if(s.props.choiceStates){var r=s.simpleValidate(e)
var o=r.type==="points"&&r.total===r.earned
var t=s.props.choiceStates.map(function(e){return babelHelpers.extends({},e,{highlighted:e.selected,rationaleShown:e.selected||e.rationaleShown||o,readOnly:e.selected||e.readOnly||o,correctnessShown:e.selected||e.correctnessShown,previouslyAnswered:e.previouslyAnswered||e.selected})})
s.props.onChange({choiceStates:t},null,true)}},s.deselectIncorrectSelectedChoices=function(){if(s.props.choiceStates){var e=s.props.choiceStates.map(function(e,r){return babelHelpers.extends({},e,{selected:e.selected&&!!s.props.choices[r].correct,highlighted:false})})
s.props.onChange({choiceStates:e},null,false)}},o),babelHelpers.possibleConstructorReturn(s,t)}r.prototype.render=function e(){var r=this
var o=this.props.choices
var s=void 0
if(this.props.static){s=_.map(o,function(e){return{selected:e.correct,crossedOut:e.crossedOut,readOnly:true,highlighted:false,rationaleShown:true,correctnessShown:true,previouslyAnswered:false}})}else if(this.props.choiceStates){s=this.props.choiceStates}else if(this.props.values){s=_.map(this.props.values,function(e){return{selected:e,crossedOut:false,readOnly:false,highlighted:false,rationaleShown:false,correctnessShown:false,previouslyAnswered:false}})}else{s=_.map(o,function(){return{selected:false,crossedOut:false,readOnly:false,highlighted:false,rationaleShown:false,correctnessShown:false,previouslyAnswered:false}})}o=_.map(o,function(e,o){var t=e.isNoneOfTheAbove&&!e.content?i18n._("None of the above"):e.content
var n=s[o],i=n.selected,a=n.crossedOut,c=n.rationaleShown,l=n.correctnessShown,p=n.readOnly,u=n.highlighted,d=n.previouslyAnswered
var h=r.props.reviewModeRubric&&r.props.reviewModeRubric.choices[o]
return{content:r._renderRenderer(t),checked:i,correct:typeof e.correct==="undefined"?!!h&&h.correct:e.correct,disabled:p,hasRationale:!!e.clue,rationale:r._renderRenderer(e.clue),showRationale:c,showCorrectness:l,isNoneOfTheAbove:e.isNoneOfTheAbove,revealNoneOfTheAbove:r.props.questionCompleted&&i,crossedOut:a,highlighted:u,previouslyAnswered:d}})
o=this.enforceOrdering(o)
return React.createElement(BaseRadio,{ref:"baseRadio",labelWrap:true,multipleSelect:this.props.multipleSelect,countChoices:this.props.countChoices,numCorrect:this.props.numCorrect,choices:o,onChange:this.updateChoices,reviewModeRubric:this.props.reviewModeRubric,deselectEnabled:this.props.deselectEnabled,apiOptions:this.props.apiOptions,isLastUsedWidget:this.props.isLastUsedWidget})}
return r}(React.Component)
Radio.propTypes={apiOptions:BaseRadio.propTypes.apiOptions,choices:PropTypes.arrayOf(PropTypes.shape({content:PropTypes.string.isRequired,clue:PropTypes.string,correct:PropTypes.bool,isNoneOfTheAbove:PropTypes.bool,originalIndex:PropTypes.number.isRequired}).isRequired).isRequired,deselectEnabled:PropTypes.bool,displayCount:PropTypes.any,findWidgets:PropTypes.func,multipleSelect:PropTypes.bool,countChoices:PropTypes.bool,numCorrect:PropTypes.number,onChange:PropTypes.func.isRequired,questionCompleted:PropTypes.bool,reviewModeRubric:BaseRadio.propTypes.reviewModeRubric,trackInteraction:PropTypes.func.isRequired,values:PropTypes.arrayOf(PropTypes.bool),choiceStates:PropTypes.arrayOf(PropTypes.shape({selected:PropTypes.bool,crossedOut:PropTypes.bool,highlighted:PropTypes.bool,rationaleShown:PropTypes.bool,correctnessShown:PropTypes.bool,readOnly:PropTypes.bool,previouslyAnswered:PropTypes.bool}).isRequired),linterContext:linterContextProps,static:PropTypes.bool,isLastUsedWidget:PropTypes.bool}
Radio.defaultProps={choices:[{}],displayCount:null,multipleSelect:false,countChoices:false,deselectEnabled:false,linterContext:linterContextDefault}
_.extend(Radio,{validate:function e(r,o){var s=_.reduce(r.choicesSelected,function(e,r){return e+(r?1:0)},0)
if(s===0){return{type:"invalid",message:null}}else if(r.countChoices&&s!==r.numCorrect){return{type:"invalid",message:i18n._("Please choose the correct number of answers.")}}else if(r.noneOfTheAboveSelected&&s>1){return{type:"invalid",message:i18n._("'None of the above' may not be selected "+"when other answers are selected.")}}else{var t=_.all(r.choicesSelected,function(e,s){var t=void 0
if(r.noneOfTheAboveIndex===s){t=_.all(o.choices,function(e,r){return s===r||!e.correct})}else{t=!!o.choices[s].correct}return t===e})
return{type:"points",earned:t?1:0,total:1,message:null}}},getUserInputFromProps:function e(r){if(r.choiceStates){var o=null
var s=false
var t=r.choiceStates
var n=t.map(function(){return false})
var i=r.countChoices
var a=r.numCorrect
for(var c=0;c<n.length;c++){var l=r.choices[c].originalIndex
n[l]=t[c].selected
if(r.choices[c].isNoneOfTheAbove){o=l
if(n[c]){s=true}}}return{countChoices:i,choicesSelected:n,numCorrect:a,noneOfTheAboveIndex:o,noneOfTheAboveSelected:s}}else if(r.values){var p=null
var u=false
var d=r.values.slice()
var h=r.countChoices
var f=r.numCorrect
for(var v=0;v<r.values.length;v++){var y=r.choices[v].originalIndex
d[y]=r.values[v]
if(r.choices[v].isNoneOfTheAbove){p=y
if(d[v]){u=true}}}return{choicesSelected:d,noneOfTheAboveIndex:p,noneOfTheAboveSelected:u,countChoices:h,numCorrect:f}}else{return{choicesSelected:_.map(r.choices,function(){return false})}}}})
module.exports=Radio

});
KAdefine("javascript/perseus-all-package/widgets/radio/util.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.getChoiceLetter=getChoiceLetter
var i18n=require("../../../shared-package/i18n.js")
function getChoiceLetter(e){var t=i18n._("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z")
var r=t.split(" ")
if(e<r.length){return r[e]}else{return" "}}
});
KAdefine("javascript/perseus-all-package/widgets/radio.jsx", function(require, module, exports) {
var _2=require("underscore")
var shuffle=require("../util.js").shuffle
var Radio=require("./radio/widget.jsx")
var _choiceTransform=function e(r,o){var c=function e(c){return r.randomize?shuffle(c,o):c}
var n=function e(r){var o=null
var c=_2.reject(r,function(e,r){if(e.isNoneOfTheAbove){o=e
return true}})
if(o){c.push(o)}return c}
var t=r.choices.slice()
t=_2.map(t,function(e,r){return _2.extend({},e,{originalIndex:r,correct:Boolean(e.correct)})})
return n(c(t))}
var transform=function e(r,o){var c=_choiceTransform(r,o)
var n=_2.reduce(r.choices,function(e,r){return r.correct?e+1:e},0)
var t=r.hasNoneOfTheAbove,i=r.multipleSelect,a=r.countChoices,s=r.correctAnswer,u=r.deselectEnabled
return{numCorrect:n,hasNoneOfTheAbove:t,multipleSelect:i,countChoices:a,correctAnswer:s,deselectEnabled:u,choices:c,selectedChoices:_2.pluck(c,"correct")}}
var propUpgrades={1:function _(e){var r
var o
if(!e.noneOfTheAbove){r=e.choices
o=false}else{r=_2.clone(e.choices)
var c=_2.random(0,e.choices.length-1)
var n=_2.extend({},e.choices[c],{isNoneOfTheAbove:true})
r.splice(c,1)
r.push(n)
o=true}return _2.extend(_2.omit(e,"noneOfTheAbove"),{choices:r,hasNoneOfTheAbove:o})}}
module.exports={name:"radio",displayName:"Multiple choice",accessible:true,widget:Radio,transform:transform,staticTransform:transform,version:{major:1,minor:0},propUpgrades:propUpgrades,isLintable:true}

});
KAdefine("javascript/perseus-all-package/widgets.js", function(require, module, exports) {
var _=require("underscore")
var DEFAULT_ALIGNMENT="block"
var DEFAULT_SUPPORTED_ALIGNMENTS=["default"]
var DEFAULT_STATIC=false
var DEFAULT_TRACKING=""
var DEFAULT_LINTABLE=false
var widgets={}
var editors={}
var Widgets={registerWidget:function e(t,r){widgets[t]=r},registerWidgets:function e(t){var r=this
t.forEach(function(e){r.registerWidget(e.name,e)})
this.validateAlignments()},registerEditors:function e(t){t.forEach(function(e){if(!e.widgetName){throw new Error("Editor "+e.displayName+" doesn't have a widgetName property")}editors[e.widgetName]=e})},getWidget:function e(t){if(!_.has(widgets,t)){return null}if(widgets[t].getWidget){return widgets[t].getWidget()}else{return widgets[t].widget}},getEditor:function e(t){return _.has(editors,t)?editors[t]:null},getTransform:function e(t){return _.has(widgets,t)?widgets[t].transform||_.identity:null},getVersion:function e(t){var r=widgets[t]
if(r){return widgets[t].version||{major:0,minor:0}}else{return null}},getVersionVector:function e(){var t={}
_.each(_.keys(widgets),function(e){t[e]=Widgets.getVersion(e)})
return t},getPublicWidgets:function e(){return _.pick(widgets,_.reject(_.keys(widgets),function(e){return widgets[e].hidden}))},isAccessible:function e(t){var r=widgets[t.type].accessible
if(typeof r==="function"){return r(t.options)}else{return!!r}},getAllWidgetTypes:function e(){return _.keys(widgets)},upgradeWidgetInfoToLatestVersion:function e(t){var r=t.type
if(!_.isString(r)){throw new Error("widget type must be a string, but was: "+r)}var i=widgets[r]
if(i==null){return t}var n=t.version||{major:0,minor:0}
var s=i.version||{major:0,minor:0}
if(n.major>s.major||n.major===s.major&&n.minor>s.minor){return t}var o=_.clone(t.options)||{}
var a=i.propUpgrades||{}
if(_.keys(o).length!==0){for(var d=n.major+1;d<=s.major;d++){if(a[d]){o=a[d](o)}else if(typeof console!=="undefined"&&console.warn){console.warn("No upgrade found for widget `"+r+"` from "+"major version `"+(d-1)+"` to "+"major version `"+d+"` found. This "+"is necessary to render this `"+r+"` correctly.")}}}var g=r in editors?editors[r].defaultProps:{}
o=_.extend({},g,o)
var l=t.alignment
if(l==null||l==="default"){l=Widgets.getSupportedAlignments(r)[0]}var u=t.static
if(u==null){u=DEFAULT_STATIC}return _.extend({},t,{version:s,graded:t.graded!=null?t.graded:true,alignment:l,static:u,options:o})},getRendererPropsForWidgetInfo:function e(t,r){var i=t.type
var n=widgets[i]
if(n==null){return t.options}var s
if(t.static){s=this.getStaticTransform(i)||_.identity}else{s=n.transform||_.identity}return s(t.options,r)},traverseChildWidgets:function e(t,r){if(!r){throw new Error("traverseRenderer must be provided, but was not")}if(!t||!t.type||!widgets[t.type]){return t}var i=widgets[t.type]
var n=t.options
if(i.traverseChildWidgets&&n){var s=i.traverseChildWidgets(n,r)
return _.extend({},t,{options:s})}else{return t}},getSupportedAlignments:function e(t){var r=widgets[t]
return r&&r.supportedAlignments||DEFAULT_SUPPORTED_ALIGNMENTS},getDefaultAlignment:function e(t){var r=widgets[t]
var i
if(!r){return DEFAULT_ALIGNMENT}if(r.getDefaultAlignment){i=r.getDefaultAlignment()}else{i=r.defaultAlignment}return i||DEFAULT_ALIGNMENT},validAlignments:["block","inline-block","inline","float-left","float-right","full-width"],validateAlignments:function e(){_.each(widgets,function(e){if(e.defaultAlignment&&!_.contains(Widgets.validAlignments,e.defaultAlignment)){throw new Error("Widget '"+e.displayName+"' has an invalid defaultAlignment value: "+e.defaultAlignment)}if(e.supportedAlignments){var t=_.difference(e.supportedAlignments,Widgets.validAlignments)
if(t.length){throw new Error("Widget '"+e.displayName+"' has an invalid value for supportedAlignments: "+t.join(" "))}}})},supportsStaticMode:function e(t){var r=widgets[t]
return r&&r.staticTransform!=null},getStaticTransform:function e(t){var r=widgets[t]
return r&&r.staticTransform},getTracking:function e(t){var r=widgets[t]
return r&&r.tracking||DEFAULT_TRACKING},isLintable:function e(t){var r=widgets[t]
return r&&r.isLintable||DEFAULT_LINTABLE}}
module.exports=Widgets

});
KAdefine("javascript/perseus-all-package/zoom.js", function(require, module, exports) {
var $=require("jquery")
function transitionEnd(){var t=document.createElement("bootstrap")
var o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var i in o){if(t.style[i]!==undefined){return{end:o[i]}}}return false}$.fn.emulateTransitionEnd=function(t){var o=false
var i=this
$(this).one("bsTransitionEnd",function(){o=true})
var e=function t(){if(!o){$(i).trigger($.support.transition.end)}}
setTimeout(e,t)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition){return}$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function t(o){if($(o.target).is(this)){return o.handleObj.handler.apply(this,arguments)}}}})
function changeViewportTag(t,o){var i=window.scrollX
var e=window.scrollY
var n=document.querySelector("meta[name=viewport]")
if(n){n.setAttribute("content",t)}else{$("head").append('<meta name="viewport" content="'+t+'">')}document.body.style.opacity=.9999
setTimeout(function(){document.body.style.opacity=1
window.scrollTo(i,e)
o&&setTimeout(o,0)},0)}function ZoomService(){}ZoomService.prototype._initialize=function(t){if(this._$document){return}this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null
this._$document=$(document)
this._$window=$(window)
this._$body=$(document.body)
this._boundClick=$.proxy(this._clickHandler,this)
this._enableMobilePinch=t}
ZoomService.prototype.handleZoomClick=function(t,o){var i=this
this._initialize(o)
var e=t.target
if(!e||e.tagName!=="IMG"){return}if(this._$body.hasClass("zoom-overlay-open")){return}if(t.metaKey||t.ctrlKey){return window.open(t.target.src,"_blank")}if(!o&&e.width>=window.innerWidth-Zoom.getOffset()){return}this._activeZoomClose(true)
if(o){changeViewportTag("width=device-width, initial-scale=1, minimum-scale=1",function(){return i._zoom(e)})}else{this._zoom(e)}if(!o){this._$window.on("scroll.zoom",$.proxy(this._scrollHandler,this))
this._$document.on("keyup.zoom",$.proxy(this._keyHandler,this))
this._$document.on("touchstart.zoom",$.proxy(this._touchStart,this))}document.addEventListener("click",this._boundClick,true)
t.stopPropagation()}
ZoomService.prototype._zoom=function(t){this._activeZoom=new Zoom(t,this._enableMobilePinch)
this._activeZoom.zoomImage()}
ZoomService.prototype._activeZoomClose=function(t){var o=this
if(!this._activeZoom){return}if(t){this._activeZoom.dispose()
this._disposeActiveZoom()}else{changeViewportTag("width=device-width, initial-scale=1, minimum-scale=1,\n            maximum-scale=1",function(){if(o._activeZoom){o._activeZoom.close()
o._disposeActiveZoom()}})}}
ZoomService.prototype._disposeActiveZoom=function(){this._$window.off(".zoom")
this._$document.off(".zoom")
document.removeEventListener("click",this._boundClick,true)
this._activeZoom=null}
ZoomService.prototype._scrollHandler=function(t){if(this._initialScrollPosition===null){this._initialScrollPosition=window.scrollY}var o=this._initialScrollPosition-window.scrollY
if(Math.abs(o)>=40){this._activeZoomClose()}}
ZoomService.prototype._keyHandler=function(t){if(t.keyCode===27){this._activeZoomClose()}}
ZoomService.prototype._clickHandler=function(t){t.stopPropagation()
t.preventDefault()
this._activeZoomClose()}
ZoomService.prototype._touchStart=function(t){this._initialTouchPosition=t.originalEvent.touches[0].pageY
$(t.target).on("touchmove.zoom",$.proxy(this._touchMove,this))}
ZoomService.prototype._touchMove=function(t){if(Math.abs(t.originalEvent.touches[0].pageY-this._initialTouchPosition)>10){this._activeZoomClose()
$(t.target).off("touchmove.zoom")}}
function Zoom(t,o){this._fullHeight=this._fullWidth=this._overlay=null
this._targetImage=t
this._enableMobilePinch=o
this._$body=$(document.body)}Zoom._OFFSET=80
Zoom._MAX_WIDTH=2560
Zoom._MAX_HEIGHT=4096
Zoom.getOffset=function(t){return t?0:Zoom._OFFSET}
Zoom.prototype.getOffset=function(){return Zoom.getOffset(this._enableMobilePinch)}
Zoom.prototype.zoomImage=function(){var t=document.createElement("img")
var o=$(t)
t.onload=function(){this._fullHeight=Number(t.height)
this._fullWidth=Number(t.width)
var i=this._imageOffset=$(this._targetImage).offset()
var e=this._left=i.left-$(window).scrollLeft()
var n=this._top=i.top-$(window).scrollTop()
o.css({left:e,top:n,width:this._targetImage.width,height:this._targetImage.height})
this._zoomOriginal()}.bind(this)
t.src=this._targetImage.src
this.$zoomedImage=o}
Zoom.prototype._zoomOriginal=function(){this.$zoomedImage.addClass("zoom-img").attr("data-action","zoom-out")
$(this._targetImage).css("visibility","hidden")
this._backdrop=document.createElement("div")
this._backdrop.className="zoom-backdrop"
document.body.appendChild(this._backdrop)
this._overlay=document.createElement("div")
this._overlay.className="zoom-overlay"
document.body.appendChild(this._overlay)
this._overlay.appendChild(this.$zoomedImage[0])
this._calculateZoom()
this._triggerAnimation()}
Zoom.prototype._calculateZoom=function(){var t=this._fullWidth
var o=this._fullHeight
var i=window.innerHeight-this.getOffset()
var e=window.innerWidth-this.getOffset()
var n=t/this._targetImage.width
var s=t/o
var r=e/i
if(t<e&&o<i){this._imgScaleFactor=n}else if(s<r){this._imgScaleFactor=i/o*n}else{this._imgScaleFactor=e/t*n}}
Zoom.prototype._triggerAnimation=function(){var t=$(window).scrollTop()+window.innerHeight/2
var o=$(window).scrollLeft()+window.innerWidth/2
var i=this._imgScaleFactor
var e=this._imageOffset.top+this._targetImage.height/2
var n=this._imageOffset.left+this._targetImage.width/2
this._translateY=(t-e)/i
this._translateX=(o-n)/i
this._zoomedInTransformString="\n        scale("+i+")\n        translate3d("+this._translateX+"px, "+this._translateY+"px, 0)\n    "
this.$zoomedImage.css({transform:this._zoomedInTransformString}).addClass("zoom-transition").one($.support.transition.end,$.proxy(this._onZoomInFinish,this)).emulateTransitionEnd(300)
this._$body.addClass("zoom-overlay-open")}
Zoom.prototype._onZoomInFinish=function(){var t=this._targetImage.height*this._imgScaleFactor
var o=this._targetImage.width*this._imgScaleFactor
var i=0
var e=0
var n=0
var s=0
var r=0
var a=0
if(o<window.innerWidth){i="50%"
n=-o/2}else{r=(o-window.innerWidth)/2}if(t<window.innerHeight){e="50%"
s=-t/2}else{a=(t-window.innerHeight)/2}this.$zoomedImage.css({height:t,left:i,marginLeft:n,marginTop:s,top:e,transform:"",width:o}).removeClass("zoom-transition")
$(this._overlay).scrollLeft(r).scrollTop(a)}
Zoom.prototype.close=function(){var t=this
this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning")
this.$zoomedImage.css({height:this._targetImage.height,left:this._left,marginLeft:0,marginTop:0,top:this._top,transform:this._zoomedInTransformString,width:this._targetImage.width}).removeClass("zoom-transition")
$(this._overlay).scrollLeft(0).scrollTop(0)
setTimeout(function(){t.$zoomedImage.css({transform:"scale(1)"}).addClass("zoom-transition").one($.support.transition.end,$.proxy(t.dispose,t)).emulateTransitionEnd(300)},10)}
Zoom.prototype.dispose=function(){if(this.$zoomedImage&&this.$zoomedImage[0].parentNode){this.$zoomedImage.remove()
this.$zoomedImage=null
this._overlay.parentNode.removeChild(this._overlay)
this._backdrop.parentNode.removeChild(this._backdrop)
this._$body.removeClass("zoom-overlay-transitioning")}$(this._targetImage).css("visibility","visible")}
exports.ZoomService=new ZoomService

});
KAdefine("third_party/javascript-khansrc/kmath/build/kmath.js", function(require, module, exports) {
(function r(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n(require("underscore"))
else if(typeof define==="function"&&define.amd)define(["underscore"],n)
else if(typeof exports==="object")exports["kmath"]=n(require("underscore"))
else t["kmath"]=n(t["_"])})(this,function(r){return function(r){var t={}
function n(e){if(t[e]){return t[e].exports}var o=t[e]={i:e,l:false,exports:{}}
r[e].call(o.exports,o,o.exports,n)
o.l=true
return o.exports}n.m=r
n.c=t
n.d=function(r,t,e){if(!n.o(r,t)){Object.defineProperty(r,t,{configurable:false,enumerable:true,get:e})}}
n.n=function(r){var t=r&&r.__esModule?function t(){return r["default"]}:function t(){return r}
n.d(t,"a",t)
return t}
n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)}
n.p=""
return n(n.s=4)}([function(r,t,n){var _=n(2)
var e=n(1)
function o(r){return _.reduce(r,function(r,t){return r+t},0)}function a(r){return _.reduce(r,function(r,t){return r*t},1)}var u={is:function(r,t){if(!_.isArray(r)){return false}if(t!==undefined&&r.length!==t){return false}return _.all(r,e.is)},normalize:function(r){return u.scale(r,1/u.length(r))},length:function(r){return Math.sqrt(u.dot(r,r))},dot:function(r,t){var n=_.toArray(arguments)
var e=_.zip.apply(_,n)
var u=_.map(e,a)
return o(u)},add:function(){var r=_.toArray(arguments)
var t=_.zip.apply(_,r)
return _.map(t,o)},subtract:function(r,t){return _.map(_.zip(r,t),function(r){return r[0]-r[1]})},negate:function(r){return _.map(r,function(r){return-r})},scale:function(r,t){return _.map(r,function(r){return r*t})},equal:function(r,t,n){return _.all(_.zip(r,t),function(r){return e.equal(r[0],r[1],n)})},codirectional:function(r,t,n){if(e.equal(u.length(r),0,n)||e.equal(u.length(t),0,n)){return true}r=u.normalize(r)
t=u.normalize(t)
return u.equal(r,t,n)},collinear:function(r,t,n){return u.codirectional(r,t,n)||u.codirectional(r,u.negate(t),n)},polarRadFromCart:function(r){var t=u.length(r)
var n=Math.atan2(r[1],r[0])
if(n<0){n+=2*Math.PI}return[t,n]},polarDegFromCart:function(r){var t=u.polarRadFromCart(r)
return[t[0],t[1]*180/Math.PI]},cartFromPolarRad:function(r,t){if(_.isUndefined(t)){t=r[1]
r=r[0]}return[r*Math.cos(t),r*Math.sin(t)]},cartFromPolarDeg:function(r,t){if(_.isUndefined(t)){t=r[1]
r=r[0]}return u.cartFromPolarRad(r,t*Math.PI/180)},rotateRad:function(r,t){var n=u.polarRadFromCart(r)
var e=n[1]+t
return u.cartFromPolarRad(n[0],e)},rotateDeg:function(r,t){var n=u.polarDegFromCart(r)
var e=n[1]+t
return u.cartFromPolarDeg(n[0],e)},angleRad:function(r,t){return Math.acos(u.dot(r,t)/(u.length(r)*u.length(t)))},angleDeg:function(r,t){return u.angleRad(r,t)*180/Math.PI},projection:function(r,t){var n=u.dot(r,t)/u.dot(t,t)
return u.scale(t,n)},round:function(r,t){return _.map(r,function(r,n){return e.round(r,t[n]||t)})},roundTo:function(r,t){return _.map(r,function(r,n){return e.roundTo(r,t[n]||t)})},floorTo:function(r,t){return _.map(r,function(r,n){return e.floorTo(r,t[n]||t)})},ceilTo:function(r,t){return _.map(r,function(r,n){return e.ceilTo(r,t[n]||t)})}}
r.exports=u},function(r,t,n){var _=n(2)
var e=1e-9
var o=Math.pow(2,-42)
var a={DEFAULT_TOLERANCE:e,EPSILON:o,is:function(r){return _.isNumber(r)&&!_.isNaN(r)},equal:function(r,t,n){if(r==null||t==null){return r===t}if(r===t){return true}if(n==null){n=e}return Math.abs(r-t)<n},sign:function(r,t){return a.equal(r,0,t)?0:Math.abs(r)/r},isInteger:function(r,t){return a.equal(Math.round(r),r,t)},round:function(r,t){var n=Math.pow(10,t)
return Math.round(r*n)/n},roundTo:function(r,t){return Math.round(r/t)*t},floorTo:function(r,t){return Math.floor(r/t)*t},ceilTo:function(r,t){return Math.ceil(r/t)*t},toFraction:function(r,t,n){n=n||1e3
t=t||o
var e=[1,0],u=[0,1]
var i=Math.floor(r),c
var f=r-i
while(u[0]<=n){if(a.equal(e[0]/u[0],r,t)){return[e[0],u[0]]}e=[i*e[0]+e[1],e[0]]
u=[i*u[0]+u[1],u[0]]
i=Math.floor(1/f)
f=1/f-i}return[r,1]}}
r.exports=a},function(t,n){t.exports=r},function(r,t,n){var _=n(2)
var e=n(0)
var o=n(1)
var a={rotateRad:function(r,t,n){if(n===undefined){return e.rotateRad(r,t)}else{return e.add(n,e.rotateRad(e.subtract(r,n),t))}},rotateDeg:function(r,t,n){if(n===undefined){return e.rotateDeg(r,t)}else{return e.add(n,e.rotateDeg(e.subtract(r,n),t))}},distanceToPoint:function(r,t){return e.length(e.subtract(r,t))},distanceToLine:function(r,t){var n=e.subtract(t[1],t[0])
var o=e.subtract(r,t[0])
var a=e.projection(o,n)
var u=e.subtract(a,o)
return e.length(u)},reflectOverLine:function(r,t){var n=e.subtract(t[1],t[0])
var o=e.subtract(r,t[0])
var a=e.projection(o,n)
var u=e.subtract(e.scale(a,2),o)
return e.add(t[0],u)},compare:function(r,t,n){if(r.length!==t.length){return r.length-t.length}for(var e=0;e<r.length;e++){if(!o.equal(r[e],t[e],n)){return r[e]-t[e]}}return 0}}
_.extend(a,{is:e.is,addVector:e.add,addVectors:e.add,subtractVector:e.subtract,equal:e.equal,polarRadFromCart:e.polarRadFromCart,polarDegFromCart:e.polarDegFromCart,cartFromPolarRad:e.cartFromPolarRad,cartFromPolarDeg:e.cartFromPolarDeg,round:e.round,roundTo:e.roundTo,floorTo:e.floorTo,ceilTo:e.ceilTo})
r.exports=a},function(r,t,n){r.exports={number:n(1),vector:n(0),point:n(3),line:n(5),ray:n(6)}},function(r,t,n){var e=n(3)
var o=n(0)
var a={distanceToPoint:function(r,t){return e.distanceToLine(t,r)},reflectPoint:function(r,t){return e.reflectOverLine(t,r)},midpoint:function(r){return[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2]},equal:function(r,t,n){var a=o.subtract(r[1],r[0])
var u=o.subtract(t[1],t[0])
if(!o.collinear(a,u,n)){return false}if(e.equal(r[0],t[0])){return true}var i=o.subtract(t[0],r[0])
return o.collinear(a,i,n)}}
r.exports=a},function(r,t,n){var e=n(0)
var o=n(3)
var a={equal:function(r,t,n){var a=e.subtract(r[1],r[0])
var u=e.subtract(t[1],t[0])
var i=o.equal(r[0],t[0])
var c=e.codirectional(a,u,n)
return i&&c}}
r.exports=a}])})

});
KAdefine("javascript/node_modules/kmath/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/kmath/build/kmath.js")

});
KAdefine("third_party/javascript-khansrc/simple-markdown/simple-markdown.min.js", function(require, module, exports) {
!function(){var e=/\r\n?/g,n=/\t/g,t=/\f/g,r=function(r){return r.replace(e,"\n").replace(t,"").replace(n,"    ")},l=function(e){var n=Object.keys(e)
n.forEach(function(n){var t=e[n].order
"number"==typeof t&&isFinite(t)||"undefined"==typeof console||console.warn("simple-markdown: Invalid order for rule `"+n+"`: "+t)}),n.sort(function(n,t){var r=e[n],l=e[t],o=r.order,u=l.order
if(o!==u)return o-u
var a=r.quality?0:1,c=l.quality?0:1
return a!==c?a-c:n<t?-1:n>t?1:0})
var t=function(r,l){var o=[]
l=l||{}
for(var u="";r;){var a=null,c=null,i=null,p=NaN,f=0,s=n[0],y=e[s]
do{var d=y.order,h=y.match(r,l,u)
if(h){var m=y.quality?y.quality(h,l,u):0
m<=p||(a=s,c=y,i=h,p=m)}s=n[++f],y=e[s]}while(y&&(!i||y.order===d&&y.quality))
if(!i)throw new Error("could not find rule to match content: "+r)
var g=c.parse(i,t,l)
Array.isArray(g)?Array.prototype.push.apply(o,g):(null==g.type&&(g.type=a),o.push(g)),u=i[0],r=r.substring(u.length)}return o}
return function(e,n){return t(r(e),n)}},o=function(e){var n=function(n,t){return t.inline?e.exec(n):null}
return n.regex=e,n},u=function(e){var n=function(n,t){return t.inline?null:e.exec(n)}
return n.regex=e,n},a=function(e){var n=function(n,t){return e.exec(n)}
return n.regex=e,n},c=function(e){var n=function(t,r){if(r=r||{},Array.isArray(t)){for(var l=r.key,o=[],u=!1,a=0;a<t.length;a++){r.key=a
var c=n(t[a],r),i="string"==typeof c
i&&u?o[o.length-1]+=c:o.push(c),u=i}return r.key=l,o}return e(t,n,r)}
return n},i=function(e){var n=function(t,r){return r=r||{},Array.isArray(t)?t.map(function(e){return n(e,r)}).join(""):e(t,n,r)}
return n},p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,f=function(e){return e._store={validated:!0,originalProps:e.props},e},s=function(e,n,t,r){t=t||{},r=void 0===r||r
var l=""
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&(l+=" "+o+'="'+t[o]+'"')
var u="<"+e+l+">"
return r?u+n+"</"+e+">":u},y={},d=function(e){if(null==e)return null
try{if(0===decodeURIComponent(e).replace(/[^A-Za-z0-9\/:]/g,"").toLowerCase().indexOf("javascript:"))return null}catch(e){return null}return e},h=/\\([^0-9A-Za-z\s])/g,m=function(e){return e.replace(h,"$1")},g=function(e,n,t){var r=t.inline||!1
t.inline=!0
var l=e(n,t)
return t.inline=r,l},v=function(e,n,t){var r=t.inline||!1
t.inline=!1
var l=e(n+"\n\n",t)
return t.inline=r,l},$=function(e,n,t){return{content:g(n,e[1],t)}},k=function(){return{}},_="(?:[*+-]|\\d+\\.)",b="( *)("+_+") +",x=new RegExp("^"+b),w=new RegExp(b+"[^\\n]*(?:\\n(?!\\1"+_+" )[^\\n]*)*(\n|$)","gm"),E=/\n{2,}$/,S=E,R=/ *\n+$/,A=new RegExp("^( *)("+_+") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1"+_+" )\\n*|\\s*\n*$)"),O=/^$|\n *$/,q=function(){var e=/^ *| *\| *$/g,n=/^ *|\| *$/g,t=/(?: *\| *)?\n$/,r=/\n$/,l=/^ *\| *| *\| *$/g,o=/ *\| */,u=/^ *-+: *$/,a=/^ *:-+: *$/,c=/^ *:-+ *$/,i=function(e){return u.test(e)?"right":a.test(e)?"center":c.test(e)?"left":null},p=function(n,t,r){return n[1].replace(e,"").split(o).map(function(e){return t(e,r)})},f=function(e,t,r){return e[2].replace(n,"").split(o).map(i)},s=function(e,n,r){return e[3].replace(t,"").split("\n").map(function(e){return e.replace(l,"").split(o).map(function(e){return n(e,r)})})},y=function(e,n,t){return e[3].replace(r,"").split("\n").map(function(e){return e.split(o).map(function(e){return n(e,t)})})}
return{parseTable:function(e,n,t){t.inline=!0
var r=p(e,n,t),l=f(e,n,t),o=s(e,n,t)
return t.inline=!1,{type:"table",header:r,align:l,cells:o}},parseNpTable:function(e,n,t){t.inline=!0
var r=p(e,n,t),l=f(e,n,t),o=y(e,n,t)
return t.inline=!1,{type:"table",header:r,align:l,cells:o}},NPTABLE_REGEX:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/}}(),P="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",j="\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",N=/mailto:/i,B=function(e,n,t){var r=(e[2]||e[1]).replace(/\s+/g," ").toLowerCase()
if(n._defs&&n._defs[r]){var l=n._defs[r]
t.target=l.target,t.title=l.title}return n._refs=n._refs||{},n._refs[r]=n._refs[r]||[],n._refs[r].push(t),t},T={heading:{match:u(/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)+\n/),parse:function(e,n,t){return{level:e[1].length,content:g(n,e[2],t)}},react:function(e,n,t){return f({ref:null,type:"h"+e.level,key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("h"+e.level,n(e.content,t))}},nptable:{match:u(q.NPTABLE_REGEX),regex:q.NPTABLE_REGEX,parse:q.parseNpTable},lheading:{match:u(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),parse:function(e,n,t){return{type:"heading",level:"="===e[2]?1:2,content:g(n,e[1],t)}}},hr:{match:u(/^( *[-*_]){3,} *(?:\n *)+\n/),parse:k,react:function(e,n,t){return f({ref:null,type:"hr",key:t.key,props:y,$$typeof:p,_store:null})},html:function(e,n,t){return"<hr>"}},codeBlock:{match:u(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),parse:function(e,n,t){return{lang:void 0,content:e[0].replace(/^    /gm,"").replace(/\n+$/,"")}},react:function(e,n,t){var r=e.lang?"markdown-code-"+e.lang:void 0
return f({ref:null,type:"pre",key:t.key,props:{children:f({ref:null,type:"code",props:{className:r,children:e.content},$$typeof:p,_store:null})},$$typeof:p,_store:null})},html:function(e,n,t){var r=e.lang?"markdown-code-"+e.lang:void 0,l=s("code",e.content,{class:r})
return s("pre",l)}},fence:{match:u(/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n/),parse:function(e,n,t){return{type:"codeBlock",lang:e[2]||void 0,content:e[3]}}},blockQuote:{match:u(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),parse:function(e,n,t){return{content:n(e[0].replace(/^ *> ?/gm,""),t)}},react:function(e,n,t){return f({ref:null,type:"blockquote",key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("blockquote",n(e.content,t))}},list:{match:function(e,n,t){var r=O.test(t),l=n._list||!n.inline
return r&&l?A.exec(e):null},parse:function(e,n,t){var r=e[2],l=r.length>1,o=l?+r:void 0,u=e[0].replace(S,"\n").match(w),a=!1
return{ordered:l,start:o,items:u.map(function(e,r){var l=x.exec(e)[0].length,o=new RegExp("^ {1,"+l+"}","gm"),c=e.replace(o,"").replace(x,""),i=r===u.length-1,p=-1!==c.indexOf("\n\n")||i&&a
a=p
var f=t.inline,s=t._list
t._list=!0
var y
p?(t.inline=!1,y=c.replace(R,"\n\n")):(t.inline=!0,y=c.replace(R,""))
var d=n(y,t)
return t.inline=f,t._list=s,d})}},react:function(e,n,t){var r=e.ordered?"ol":"ul"
return f({ref:null,type:r,key:t.key,props:{start:e.start,children:e.items.map(function(e,r){return f({ref:null,type:"li",key:r,props:{children:n(e,t)},$$typeof:p,_store:null})})},$$typeof:p,_store:null})},html:function(e,n,t){var r=e.items.map(function(e){return s("li",n(e,t))}).join(""),l=e.ordered?"ol":"ul",o={start:e.start}
return s(l,r,o)}},def:{match:u(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)?/),parse:function(e,n,t){var r=e[1].replace(/\s+/g," ").toLowerCase(),l=e[2],o=e[3]
return t._refs&&t._refs[r]&&t._refs[r].forEach(function(e){e.target=l,e.title=o}),t._defs=t._defs||{},t._defs[r]={target:l,title:o},{def:r,target:l,title:o}},react:function(){return null},html:function(){return null}},table:{match:u(/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/),parse:q.parseTable,react:function(e,n,t){var r=function(n){return null==e.align[n]?{}:{textAlign:e.align[n]}},l=e.header.map(function(e,l){return f({ref:null,type:"th",key:l,props:{style:r(l),scope:"col",children:n(e,t)},$$typeof:p,_store:null})}),o=e.cells.map(function(e,l){return f({ref:null,type:"tr",key:l,props:{children:e.map(function(e,l){return f({ref:null,type:"td",key:l,props:{style:r(l),children:n(e,t)},$$typeof:p,_store:null})})},$$typeof:p,_store:null})})
return f({ref:null,type:"table",key:t.key,props:{children:[f({ref:null,type:"thead",key:"thead",props:{children:f({ref:null,type:"tr",props:{children:l},$$typeof:p,_store:null})},$$typeof:p,_store:null}),f({ref:null,type:"tbody",key:"tbody",props:{children:o},$$typeof:p,_store:null})]},$$typeof:p,_store:null})},html:function(e,n,t){var r=function(n){return null==e.align[n]?"":"text-align:"+e.align[n]+";"},l=e.header.map(function(e,l){return s("th",n(e,t),{style:r(l),scope:"col"})}).join(""),o=e.cells.map(function(e){var l=e.map(function(e,l){return s("td",n(e,t),{style:r(l)})}).join("")
return s("tr",l)}).join(""),u=s("thead",s("tr",l)),a=s("tbody",o)
return s("table",u+a)}},newline:{match:u(/^(?:\n *)*\n/),parse:k,react:function(e,n,t){return"\n"},html:function(e,n,t){return"\n"}},paragraph:{match:u(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),parse:$,react:function(e,n,t){return f({ref:null,type:"div",key:t.key,props:{className:"paragraph",children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){var r={class:"paragraph"}
return s("div",n(e.content,t),r)}},escape:{match:o(/^\\([^0-9A-Za-z\s])/),parse:function(e,n,t){return{type:"text",content:e[1]}}},autolink:{match:o(/^<([^ >]+:\/[^ >]+)>/),parse:function(e,n,t){return{type:"link",content:[{type:"text",content:e[1]}],target:e[1]}}},mailto:{match:o(/^<([^ >]+@[^ >]+)>/),parse:function(e,n,t){var r=e[1],l=e[1]
return N.test(l)||(l="mailto:"+l),{type:"link",content:[{type:"text",content:r}],target:l}}},url:{match:o(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),parse:function(e,n,t){return{type:"link",content:[{type:"text",content:e[1]}],target:e[1],title:void 0}}},link:{match:o(new RegExp("^\\[("+P+")\\]\\("+j+"\\)")),parse:function(e,n,t){return{content:n(e[1],t),target:m(e[2]),title:e[3]}},react:function(e,n,t){return f({ref:null,type:"a",key:t.key,props:{href:d(e.target),title:e.title,children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){var r={href:d(e.target),title:e.title}
return s("a",n(e.content,t),r)}},image:{match:o(new RegExp("^!\\[("+P+")\\]\\("+j+"\\)")),parse:function(e,n,t){return{alt:e[1],target:m(e[2]),title:e[3]}},react:function(e,n,t){return f({ref:null,type:"img",key:t.key,props:{src:d(e.target),alt:e.alt,title:e.title},$$typeof:p,_store:null})},html:function(e,n,t){var r={src:d(e.target),alt:e.alt,title:e.title}
return s("img","",r,!1)}},reflink:{match:o(new RegExp("^\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(e,n,t){return B(e,t,{type:"link",content:n(e[1],t)})}},refimage:{match:o(new RegExp("^!\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(e,n,t){return B(e,t,{type:"image",alt:e[1]})}},em:{match:o(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\s+(?:[^\\*\\s]|\\*\\*)|[^\\s\\*])+?)\\*(?!\\*)")),quality:function(e){return e[0].length+.2},parse:function(e,n,t){return{content:n(e[2]||e[1],t)}},react:function(e,n,t){return f({ref:null,type:"em",key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("em",n(e.content,t))}},strong:{match:o(/^\*\*([\s\S]+?)\*\*(?!\*)/),quality:function(e){return e[0].length+.1},parse:$,react:function(e,n,t){return f({ref:null,type:"strong",key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("strong",n(e.content,t))}},u:{match:o(/^__([\s\S]+?)__(?!_)/),quality:function(e){return e[0].length},parse:$,react:function(e,n,t){return f({ref:null,type:"u",key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("u",n(e.content,t))}},del:{match:o(/^~~(?=\S)([\s\S]*?\S)~~/),parse:$,react:function(e,n,t){return f({ref:null,type:"del",key:t.key,props:{children:n(e.content,t)},$$typeof:p,_store:null})},html:function(e,n,t){return s("del",n(e.content,t))}},inlineCode:{match:o(/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/),parse:function(e,n,t){return{content:e[2]}},react:function(e,n,t){return f({ref:null,type:"code",key:t.key,props:{children:e.content},$$typeof:p,_store:null})},html:function(e,n,t){return s("code",e.content)}},br:{match:a(/^ {2,}\n/),parse:k,react:function(e,n,t){return f({ref:null,type:"br",key:t.key,props:y,$$typeof:p,_store:null})},html:function(e,n,t){return"<br>"}},text:{match:o(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),parse:function(e,n,t){return{content:e[0]}},react:function(e,n,t){return e.content},html:function(e,n,t){return e.content}}}
Object.keys(T).forEach(function(e,n){T[e].order=n}),T.strong.order=T.em.order=T.u.order
var L=function(e,n){return n||"undefined"==typeof console||console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),n=n||"react",function(t,r,l){return e[t.type][n](t,r,l)}},z=l(T),C=function(e){return z(e+"\n\n",{inline:!1})},F=function(e){return z(e,{inline:!0})},I=function(e){return z(e,{inline:!E.test(e)})},Z=c(L(T,"react")),G=i(L(T,"html")),U={defaultRules:T,parserFor:l,ruleOutput:L,reactFor:c,htmlFor:i,inlineRegex:o,blockRegex:u,anyScopeRegex:a,parseInline:g,parseBlock:v,defaultRawParse:z,defaultBlockParse:C,defaultInlineParse:F,defaultImplicitParse:I,defaultReactOutput:Z,defaultHtmlOutput:G,preprocess:r,sanitizeUrl:d,unescapeUrl:m,defaultParse:I,outputFor:c,defaultOutput:Z}
"undefined"!=typeof module&&module.exports?module.exports=U:"undefined"!=typeof global?global.SimpleMarkdown=U:window.SimpleMarkdown=U}()

});
KAdefine("javascript/node_modules/simple-markdown/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/simple-markdown/simple-markdown.min.js")

});
KAdefine("third_party/javascript-khansrc/jsdiff/jsdiff.js", function(require, module, exports) {
var JsDiff=function(){function e(e){return{newPos:e.newPos,components:e.components.slice(0)}}function n(e){var n=[]
for(var t=0;t<e.length;t++){if(e[t]){n.push(e[t])}}return n}function t(e){var n=e
n=n.replace(/&/g,"&amp;")
n=n.replace(/</g,"&lt;")
n=n.replace(/>/g,"&gt;")
n=n.replace(/"/g,"&quot;")
return n}var r=function(e){this.ignoreWhitespace=e}
r.prototype={diff:function(n,t){if(t===n){return[{value:t}]}if(!t){return[{value:n,removed:true}]}if(!n){return[{value:t,added:true}]}t=this.tokenize(t)
n=this.tokenize(n)
var r=t.length,i=n.length
var s=r+i
var o=[{newPos:-1,components:[]}]
var u=this.extractCommon(o[0],t,n,0)
if(o[0].newPos+1>=r&&u+1>=i){return o[0].components}for(var f=1;f<=s;f++){for(var l=-1*f;l<=f;l+=2){var a
var d=o[l-1],h=o[l+1]
u=(h?h.newPos:0)-l
if(d){o[l-1]=undefined}var p=d&&d.newPos+1<r
var v=h&&0<=u&&u<i
if(!p&&!v){o[l]=undefined
continue}if(!p||v&&d.newPos<h.newPos){a=e(h)
this.pushComponent(a.components,n[u],undefined,true)}else{a=e(d)
a.newPos++
this.pushComponent(a.components,t[a.newPos],true,undefined)}var u=this.extractCommon(a,t,n,l)
if(a.newPos+1>=r&&u+1>=i){return a.components}else{o[l]=a}}}},pushComponent:function(e,n,t,r){var i=e[e.length-1]
if(i&&i.added===t&&i.removed===r){e[e.length-1]={value:this.join(i.value,n),added:t,removed:r}}else{e.push({value:n,added:t,removed:r})}},extractCommon:function(e,n,t,r){var i=n.length,s=t.length,o=e.newPos,u=o-r
while(o+1<i&&u+1<s&&this.equals(n[o+1],t[u+1])){o++
u++
this.pushComponent(e.components,n[o],undefined,undefined)}e.newPos=o
return u},equals:function(e,n){var t=/\S/
if(this.ignoreWhitespace&&!t.test(e)&&!t.test(n)){return true}else{return e===n}},join:function(e,n){return e+n},tokenize:function(e){return e}}
var i=new r
var s=new r(true)
var o=new r
s.tokenize=o.tokenize=function(e){return n(e.split(/(\s+|\b)/))}
var u=new r(true)
u.tokenize=function(e){return n(e.split(/([{}:;,]|\s+)/))}
var f=new r
f.tokenize=function(e){var n=[],t=e.split(/^/m)
for(var r=0;r<t.length;r++){var i=t[r],s=t[r-1]
if(i=="\n"&&s&&s[s.length-1]==="\r"){n[n.length-1]+="\n"}else if(i){n.push(i)}}return n}
return{Diff:r,diffChars:function(e,n){return i.diff(e,n)},diffWords:function(e,n){return s.diff(e,n)},diffWordsWithSpace:function(e,n){return o.diff(e,n)},diffLines:function(e,n){return f.diff(e,n)},diffCss:function(e,n){return u.diff(e,n)},createPatch:function(e,n,t,r,i){var s=[]
s.push("Index: "+e)
s.push("===================================================================")
s.push("--- "+e+(typeof r==="undefined"?"":"\t"+r))
s.push("+++ "+e+(typeof i==="undefined"?"":"\t"+i))
var o=f.diff(n,t)
if(!o[o.length-1].value){o.pop()}o.push({value:"",lines:[]})
function u(e){return e.map(function(e){return" "+e})}function l(e,n,t){var r=o[o.length-2],i=n===o.length-2,s=n===o.length-3&&(t.added!==r.added||t.removed!==r.removed)
if(!/\n$/.test(t.value)&&(i||s)){e.push("\\ No newline at end of file")}}var a=0,d=0,h=[],p=1,v=1
for(var c=0;c<o.length;c++){var g=o[c],m=g.lines||g.value.replace(/\n$/,"").split("\n")
g.lines=m
if(g.added||g.removed){if(!a){var w=o[c-1]
a=p
d=v
if(w){h=u(w.lines.slice(-4))
a-=h.length
d-=h.length}}h.push.apply(h,m.map(function(e){return(g.added?"+":"-")+e}))
l(h,c,g)
if(g.added){v+=m.length}else{p+=m.length}}else{if(a){if(m.length<=8&&c<o.length-2){h.push.apply(h,u(m))}else{var P=Math.min(m.length,4)
s.push("@@ -"+a+","+(p-a+P)+" +"+d+","+(v-d+P)+" @@")
s.push.apply(s,h)
s.push.apply(s,u(m.slice(0,P)))
if(m.length<=4){l(s,c,g)}a=0
d=0
h=[]}}p+=m.length
v+=m.length}}return s.join("\n")+"\n"},applyPatch:function(e,n){var t=n.split("\n")
var r=[]
var i=false,s=false
for(var o=t[0][0]==="I"?4:0;o<t.length;o++){if(t[o][0]==="@"){var u=t[o].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/)
r.unshift({start:u[3],oldlength:u[2],oldlines:[],newlength:u[4],newlines:[]})}else if(t[o][0]==="+"){r[0].newlines.push(t[o].substr(1))}else if(t[o][0]==="-"){r[0].oldlines.push(t[o].substr(1))}else if(t[o][0]===" "){r[0].newlines.push(t[o].substr(1))
r[0].oldlines.push(t[o].substr(1))}else if(t[o][0]==="\\"){if(t[o-1][0]==="+"){i=true}else if(t[o-1][0]==="-"){s=true}}}var f=e.split("\n")
for(var o=r.length-1;o>=0;o--){var l=r[o]
for(var a=0;a<l.oldlength;a++){if(f[l.start-1+a]!==l.oldlines[a]){return false}}Array.prototype.splice.apply(f,[l.start-1,+l.oldlength].concat(l.newlines))}if(i){while(!f[f.length-1]){f.pop()}}else if(s){f.push("")}return f.join("\n")},convertChangesToXML:function(e){var n=[]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.added){n.push("<ins>")}else if(i.removed){n.push("<del>")}n.push(t(i.value))
if(i.added){n.push("</ins>")}else if(i.removed){n.push("</del>")}}return n.join("")},convertChangesToDMP:function(e){var n=[],t
for(var r=0;r<e.length;r++){t=e[r]
n.push([t.added?1:t.removed?-1:0,t.value])}return n}}}()
if(typeof module!=="undefined"){module.exports=JsDiff}
});
KAdefine("third_party/javascript-khansrc/hubble/hubble.js", function(require, module, exports) {
(function e(r,t){if(typeof exports==="object"&&typeof module==="object")module.exports=t()
else if(typeof define==="function"&&define.amd)define([],t)
else if(typeof exports==="object")exports["hubble"]=t()
else r["hubble"]=t()})(this,function(){return function(e){var r={}
function t(n){if(r[n]){return r[n].exports}var o=r[n]={i:n,l:false,exports:{}}
e[n].call(o.exports,o,o.exports,t)
o.l=true
return o.exports}t.m=e
t.c=r
t.d=function(e,r,n){if(!t.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:n})}}
t.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e}
t.d(r,"a",r)
return r}
t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}
t.p=""
return t(t.s=1)}([function(e,r){var t=function(e){return e===Object(e)}
var n=function(){var e={}
for(var r=0;r<arguments.length;r++){var t=arguments[r]
if(t){for(var n in t){e[n]=t[n]}}}return e}
var o=function(e){if(!t(e)){return e}return Array.isArray(e)?e.slice():n(e)}
e.exports={isObject:t,merge:n,clone:o}},function(e,r,t){var n=t(0)
var o=n.clone
var i=n.isObject
var a=n.merge
var u=t(2)
var p=t(3)
var f=t(4)
var s=function(e){if(Array.isArray(e)){return u}else if(i(e)){return p}else if(typeof e==="string"){return f}}
var c=function(e){if(e instanceof c){return e}if(!(this instanceof c)){return new c(e)}var r=s(e)
this._wrapped=r.thaw?r.thaw(e):e}
c.prototype.freeze=function(){var e=this._wrapped
var r=s(e)
return r.freeze?r.freeze(e):e}
c.prototype.zoom=function(e){if(this._zoomStack===undefined){this._zoomStack=[]}this._zoomStack.push({zoom:e,wrapped:this._wrapped})
this._wrapped=c(this._wrapped).get(e)
return this}
c.prototype.deZoom=function(){var e=this._zoomStack.pop()
this._wrapped=c(e.wrapped).set(e.zoom,this._wrapped).freeze()
return this}
c.prototype.get=function(e){var r=this._wrapped
for(var t=0;t<e.length;t++){r=s(r).get(r,e[t])}return r}
c.prototype.mod=function(e,r){var t=this._wrapped
var n=o(t)
var i=s(t)
if(e.length===0){this._wrapped=r(this._wrapped)}else if(e.length===1){this._wrapped=i.mod(n,e[0],r)}else{var a=e[0]
var u=e.slice(1)
n[a]=c(t[a]).mod(u,r).freeze()
this._wrapped=n}return this}
c.prototype.merge=function(e,r){this._wrapped=c(this._wrapped).mod(e,function(e){return a(e,r)}).freeze()
return this}
c.prototype.del=function(e){var r=this._wrapped
var t=s(r)
if(e.length===1){this._wrapped=t.del(r,e[0])}else{var n=e[0]
var i=e.slice(1)
var a=o(r)
a[n]=c(r[n]).del(i).freeze()
this._wrapped=a}return this}
c.prototype.set=function(e,r){return this.mod(e,function(){return r})}
e.exports=c},function(e,r){var t=function(e,r){return e[r]}
var n=function(e,r,t){var n=e.splice()
n[r]=t
return n}
var o=function(e,r,t){var n=e.slice()
n[r]=t(e[r])
return n}
var i=function(e,r){var t=e.slice()
t.splice(r,1)
return t}
e.exports={get:t,set:n,mod:o,del:i}},function(e,r,t){var n=t(0).clone
var o=function(e,r){return e[r]}
var i=function(e,r,t){var o=n(e)
o[r]=t
return o}
var a=function(e,r,t){var o=n(e)
o[r]=t(e[r])
return o}
var u=function(e,r){var t=n(e)
delete t[r]
return t}
e.exports={get:o,set:i,mod:a,del:u}},function(e,r){var t=function(e,r){return e[r]}
var n=function(e,r,t){var n=e.splice()
n[r]=t
return n}
var o=function(e,r,t){var n=e.splice()
n[r]=t(e[r])
return n}
var i=function(e,r){var t=e.slice()
t.splice(r)
return t}
e.exports={get:t,set:n,mod:o,del:i}}])})

});
KAdefine("third_party/javascript-khansrc/mathquill/build/mathquill-basic.js", function(require, module, exports) {
var jQuery=require("jquery")
var undefined,mqCmdId="mathquill-command-id",mqBlockId="mathquill-block-id",min=Math.min,max=Math.max
function noop(){}var __slice=[].slice
function variadic(t){var e=t.length-1
return function(){var n=__slice.call(arguments,0,e)
var i=__slice.call(arguments,e)
return t.apply(this,n.concat([i]))}}var send=variadic(function(t,e){return variadic(function(n,i){if(t in n)return n[t].apply(n,e.concat(i))})})
function iterator(t){return variadic(function(e,n){if(typeof e!=="function")e=send(e)
var i=function(t){return e.apply(t,[t].concat(n))}
return t.call(this,i)})}function bind(t){var e=__slice.call(arguments,1)
return function(){return t.apply(this,e)}}function pray(t,e){if(!e)throw new Error("prayer failed: "+t)}var P=function(t,e,n){function i(t){return typeof t==="object"}function a(t){return typeof t==="function"}function r(){}return function s(o,l){if(l===n){l=o
o=Object}function d(){var t=new c
if(a(t.init))t.init.apply(t,arguments)
return t}function c(){}d.Bare=c
var u=r[t]=o[t]
var m=c[t]=d[t]=d.p=new r
var f
m.constructor=d
d.mixin=function(e){c[t]=d[t]=s(d,e)[t]
return d}
return(d.open=function(t){f={}
if(a(t)){f=t.call(d,m,u,d,o)}else if(i(t)){f=t}if(i(f)){for(var n in f){if(e.call(f,n)){m[n]=f[n]}}}if(!a(m.init)){m.init=o}return d})(l)}}("prototype",{}.hasOwnProperty)
var L=-1
var R=1
function prayDirection(t){pray("a direction was passed",t===L||t===R)}var $=P(jQuery,function(_){_.insDirOf=function(t,e){return t===L?this.insertBefore(e.first()):this.insertAfter(e.last())}
_.insAtDirEnd=function(t,e){return t===L?this.prependTo(e):this.appendTo(e)}})
var Point=P(function(_){_.parent=0
_[L]=0
_[R]=0
_.init=function(t,e,n){this.parent=t
this[L]=e
this[R]=n}
this.copy=function(t){return Point(t.parent,t[L],t[R])}})
var Node=P(function(_){_[L]=0
_[R]=0
_.parent=0
var t=0
function e(){return t+=1}this.byId={}
_.init=function(){this.id=e()
Node.byId[this.id]=this
this.ends={}
this.ends[L]=0
this.ends[R]=0}
_.dispose=function(){delete Node.byId[this.id]}
_.toString=function(){return"{{ MathQuill Node #"+this.id+" }}"}
_.jQ=$()
_.jQadd=function(t){return this.jQ=this.jQ.add(t)}
_.jQize=function(t){var t=$(t||this.html())
function e(t){if(t.getAttribute){var n=t.getAttribute("mathquill-command-id")
var i=t.getAttribute("mathquill-block-id")
if(n)Node.byId[n].jQadd(t)
if(i)Node.byId[i].jQadd(t)}for(t=t.firstChild;t;t=t.nextSibling){e(t)}}for(var n=0;n<t.length;n+=1)e(t[n])
return t}
_.createDir=function(t,e){prayDirection(t)
var n=this
n.jQize()
n.jQ.insDirOf(t,e.jQ)
e[t]=n.adopt(e.parent,e[L],e[R])
return n}
_.createLeftOf=function(t){return this.createDir(L,t)}
_.selectChildren=function(t,e){return Selection(t,e)}
_.bubble=iterator(function(t){for(var e=this;e;e=e.parent){var n=t(e)
if(n===false)break}return this})
_.postOrder=iterator(function(t){(function e(n){n.eachChild(e)
t(n)})(this)
return this})
_.isEmpty=function(){return this.ends[L]===0&&this.ends[R]===0}
_.children=function(){return Fragment(this.ends[L],this.ends[R])}
_.eachChild=function(){var t=this.children()
t.each.apply(t,arguments)
return this}
_.foldChildren=function(t,e){return this.children().fold(t,e)}
_.withDirAdopt=function(t,e,n,i){Fragment(this,this).withDirAdopt(t,e,n,i)
return this}
_.adopt=function(t,e,n){Fragment(this,this).adopt(t,e,n)
return this}
_.disown=function(){Fragment(this,this).disown()
return this}
_.remove=function(){this.jQ.remove()
this.postOrder("dispose")
return this.disown()}})
function prayWellFormed(t,e,n){pray("a parent is always present",t)
pray("leftward is properly set up",function(){if(!e)return t.ends[L]===n
return e[R]===n&&e.parent===t}())
pray("rightward is properly set up",function(){if(!n)return t.ends[R]===e
return n[L]===e&&n.parent===t}())}var Fragment=P(function(_){_.init=function(t,e,n){if(n===undefined)n=L
prayDirection(n)
pray("no half-empty fragments",!t===!e)
this.ends={}
if(!t)return
pray("withDir is passed to Fragment",t instanceof Node)
pray("oppDir is passed to Fragment",e instanceof Node)
pray("withDir and oppDir have the same parent",t.parent===e.parent)
this.ends[n]=t
this.ends[-n]=e
var i=this.fold([],function(t,e){t.push.apply(t,e.jQ.get())
return t})
this.jQ=this.jQ.add(i)}
_.jQ=$()
_.withDirAdopt=function(t,e,n,i){return t===L?this.adopt(e,n,i):this.adopt(e,i,n)}
_.adopt=function(t,e,n){prayWellFormed(t,e,n)
var i=this
i.disowned=false
var a=i.ends[L]
if(!a)return this
var r=i.ends[R]
if(e){}else{t.ends[L]=a}if(n){n[L]=r}else{t.ends[R]=r}i.ends[R][R]=n
i.each(function(n){n[L]=e
n.parent=t
if(e)e[R]=n
e=n})
return i}
_.disown=function(){var t=this
var e=t.ends[L]
if(!e||t.disowned)return t
t.disowned=true
var n=t.ends[R]
var i=e.parent
prayWellFormed(i,e[L],e)
prayWellFormed(i,n,n[R])
if(e[L]){e[L][R]=n[R]}else{i.ends[L]=n[R]}if(n[R]){n[R][L]=e[L]}else{i.ends[R]=e[L]}return t}
_.remove=function(){this.jQ.remove()
this.each("postOrder","dispose")
return this.disown()}
_.each=iterator(function(t){var e=this
var n=e.ends[L]
if(!n)return e
for(;n!==e.ends[R][R];n=n[R]){var i=t(n)
if(i===false)break}return e})
_.fold=function(t,e){this.each(function(n){t=e.call(this,t,n)})
return t}})
var LatexCmds={},CharCmds={}
var Cursor=P(Point,function(_){_.init=function(t,e){this.parent=t
this.options=e
var n=this.jQ=this._jQ=$('<span class="mq-cursor">&#8203;</span>')
this.blink=function(){n.toggleClass("mq-blink")}
this.upDownCache={}}
_.show=function(){this.jQ=this._jQ.removeClass("mq-blink")
if("intervalId"in this)clearInterval(this.intervalId)
else{if(this[R]){if(this.selection&&this.selection.ends[L][L]===this[L])this.jQ.insertBefore(this.selection.jQ)
else this.jQ.insertBefore(this[R].jQ.first())}else this.jQ.appendTo(this.parent.jQ)
this.parent.focus()}this.intervalId=setInterval(this.blink,500)
return this}
_.hide=function(){if("intervalId"in this)clearInterval(this.intervalId)
delete this.intervalId
this.jQ.detach()
this.jQ=$()
return this}
_.withDirInsertAt=function(t,e,n,i){var a=this.parent
this.parent=e
this[t]=n
this[-t]=i
if(a!==e&&a.blur)a.blur(this)}
_.insDirOf=function(t,e){prayDirection(t)
this.jQ.insDirOf(t,e.jQ)
this.withDirInsertAt(t,e.parent,e[t],e)
this.parent.jQ.addClass("mq-hasCursor")
return this}
_.insLeftOf=function(t){return this.insDirOf(L,t)}
_.insRightOf=function(t){return this.insDirOf(R,t)}
_.insAtDirEnd=function(t,e){prayDirection(t)
this.jQ.insAtDirEnd(t,e.jQ)
this.withDirInsertAt(t,e,0,e.ends[t])
e.focus()
return this}
_.insAtLeftEnd=function(t){return this.insAtDirEnd(L,t)}
_.insAtRightEnd=function(t){return this.insAtDirEnd(R,t)}
_.jumpUpDown=function(t,e){var n=this
n.upDownCache[t.id]=Point.copy(n)
var i=n.upDownCache[e.id]
if(i){i[R]?n.insLeftOf(i[R]):n.insAtRightEnd(i.parent)}else{var a=n.offset().left
e.seek(a,n)}}
_.offset=function(){var t=this,e=t.jQ.removeClass("mq-cursor").offset()
t.jQ.addClass("mq-cursor")
return e}
_.unwrapGramp=function(){var t=this.parent.parent
var e=t.parent
var n=t[R]
var i=this
var a=t[L]
t.disown().eachChild(function(i){if(i.isEmpty())return
i.children().adopt(e,a,n).each(function(e){e.jQ.insertBefore(t.jQ.first())})
a=i.ends[R]})
if(!this[R]){if(this[L])this[R]=this[L][R]
else{while(!this[R]){this.parent=this.parent[R]
if(this.parent)this[R]=this.parent.ends[L]
else{this[R]=t[R]
this.parent=e
break}}}}if(this[R])this.insLeftOf(this[R])
else this.insAtRightEnd(e)
t.jQ.remove()
if(t[L].siblingDeleted)t[L].siblingDeleted(i.options,R)
if(t[R].siblingDeleted)t[R].siblingDeleted(i.options,L)}
_.startSelection=function(){var t=this.anticursor=Point.copy(this)
var e=t.ancestors={}
for(var n=t;n.parent;n=n.parent){e[n.parent.id]=n}}
_.endSelection=function(){delete this.anticursor}
_.select=function(){var t=this.anticursor
if(this[L]===t[L]&&this.parent===t.parent)return false
for(var e=this;e.parent;e=e.parent){if(e.parent.id in t.ancestors){var n=e.parent
break}}pray("cursor and anticursor in the same tree",n)
var i=t.ancestors[n.id]
var a,r,s=R
if(e[L]!==i){for(var o=e;o;o=o[R]){if(o[R]===i[R]){s=L
a=e
r=i
break}}}if(s===R){a=i
r=e}if(a instanceof Point)a=a[R]
if(r instanceof Point)r=r[L]
this.hide().selection=n.selectChildren(a,r)
this.insDirOf(s,this.selection.ends[s])
this.selectionChanged()
return true}
_.clearSelection=function(){if(this.selection){this.selection.clear()
delete this.selection
this.selectionChanged()}return this}
_.deleteSelection=function(){if(!this.selection)return
this[L]=this.selection.ends[L][L]
this[R]=this.selection.ends[R][R]
this.selection.remove()
this.selectionChanged()
delete this.selection}
_.replaceSelection=function(){var t=this.selection
if(t){this[L]=t.ends[L][L]
this[R]=t.ends[R][R]
delete this.selection}return t}})
var Selection=P(Fragment,function(_,t){_.init=function(){t.init.apply(this,arguments)
this.jQ=this.jQ.wrapAll('<span class="mq-selection"></span>').parent()}
_.adopt=function(){this.jQ.replaceWith(this.jQ=this.jQ.children())
return t.adopt.apply(this,arguments)}
_.clear=function(){this.jQ.replaceWith(this.jQ[0].childNodes)
return this}
_.join=function(t){return this.fold("",function(e,n){return e+n[t]()})}})
var Controller=P(function(_){_.init=function(t,e,n){this.id=t.id
this.data={}
this.root=t
this.container=e
this.options=n
t.controller=this
this.cursor=t.cursor=Cursor(t,n)}
_.handle=function(t,e){var n=this.options.handlers
if(n&&n.fns[t]){var i=n.APIClasses[this.KIND_OF_MQ](this)
if(e===L||e===R)n.fns[t](e,i)
else n.fns[t](i)}}
var t=[]
this.onNotify=function(e){t.push(e)}
_.notify=function(){for(var e=0;e<t.length;e+=1){t[e].apply(this.cursor,arguments)}return this}})
var API={},Options=P(),optionProcessors={},Progenote=P(),EMBEDS={}
function insistOnInterVer(){if(window.console)console.warn("You are using the MathQuill API without specifying an interface version, "+"which will fail in v1.0.0. Easiest fix is to do the following before "+"doing anything else:\n"+"\n"+"    MathQuill = MathQuill.getInterface(1);\n"+"    // now MathQuill.MathField() works like it used to\n"+"\n"+'See also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n'+"  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide")}function MathQuill(t){insistOnInterVer()
return MQ1(t)}MathQuill.prototype=Progenote.p
MathQuill.interfaceVersion=function(t){if(t!==1)throw"Only interface version 1 supported. You specified: "+t
insistOnInterVer=function(){if(window.console)console.warn("You called MathQuill.interfaceVersion(1); to specify the interface "+"version, which will fail in v1.0.0. You can fix this easily by doing "+"this before doing anything else:\n"+"\n"+"    MathQuill = MathQuill.getInterface(1);\n"+"    // now MathQuill.MathField() works like it used to\n"+"\n"+'See also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n'+"  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide")}
insistOnInterVer()
return MathQuill}
MathQuill.getInterface=getInterface
var MIN=getInterface.MIN=1,MAX=getInterface.MAX=2
function getInterface(t){if(!(MIN<=t&&t<=MAX))throw"Only interface versions between "+MIN+" and "+MAX+" supported. You specified: "+t
function e(t){if(!t||!t.nodeType)return null
var e=$(t).children(".mq-root-block").attr(mqBlockId)
var i=e&&Node.byId[e].controller
return i?n[i.KIND_OF_MQ](i):null}var n={}
e.L=L
e.R=R
function i(t,e){if(e&&e.handlers){e.handlers={fns:e.handlers,APIClasses:n}}for(var i in e)if(e.hasOwnProperty(i)){var a=e[i],r=optionProcessors[i]
t[i]=r?r(a):a}}e.config=function(t){i(Options.p,t)
return this}
e.registerEmbed=function(t,e){if(!/^[a-z][a-z0-9]*$/i.test(t)){throw"Embed name must start with letter and be only letters and digits"}EMBEDS[t]=e}
var a=n.AbstractMathQuill=P(Progenote,function(_){_.init=function(t){this.__controller=t
this.__options=t.options
this.id=t.id
this.data=t.data}
_.__mathquillify=function(t){var e=this.__controller,n=e.root,i=e.container
e.createTextarea()
var a=i.addClass(t).contents().detach()
n.jQ=$('<span class="mq-root-block"/>').attr(mqBlockId,n.id).appendTo(i)
this.latex(a.text())
this.revert=function(){return i.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(a)}}
_.config=function(t){i(this.__options,t)
return this}
_.el=function(){return this.__controller.container[0]}
_.text=function(){return this.__controller.exportText()}
_.latex=function(t){if(arguments.length>0){this.__controller.renderLatexMath(t)
if(this.__controller.blurred)this.__controller.cursor.hide().parent.blur()
return this}return this.__controller.exportLatex()}
_.html=function(){return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g,"").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i,"").replace(/ mq-hasCursor|mq-hasCursor ?/,"").replace(/ class=(""|(?= |>))/g,"")}
_.reflow=function(){this.__controller.root.postOrder("reflow")
return this}})
e.prototype=a.prototype
n.EditableField=P(a,function(_,t){_.__mathquillify=function(){t.__mathquillify.apply(this,arguments)
this.__controller.editable=true
this.__controller.delegateMouseEvents()
this.__controller.editablesTextareaEvents()
return this}
_.focus=function(){this.__controller.textarea.focus()
return this}
_.blur=function(){this.__controller.textarea.blur()
return this}
_.write=function(t){this.__controller.writeLatex(t)
this.__controller.scrollHoriz()
if(this.__controller.blurred)this.__controller.cursor.hide().parent.blur()
return this}
_.cmd=function(t){var e=this.__controller.notify(),n=e.cursor
if(/^\\[a-z]+$/i.test(t)){t=t.slice(1)
var i=LatexCmds[t]
if(i){t=i(t)
if(n.selection)t.replaces(n.replaceSelection())
t.createLeftOf(n.show())
this.__controller.scrollHoriz()}else;}else n.parent.write(n,t)
if(e.blurred)n.hide().parent.blur()
return this}
_.select=function(){var t=this.__controller
t.notify("move").cursor.insAtRightEnd(t.root)
while(t.cursor[L])t.selectLeft()
return this}
_.clearSelection=function(){this.__controller.cursor.clearSelection()
return this}
_.moveToDirEnd=function(t){this.__controller.notify("move").cursor.insAtDirEnd(t,this.__controller.root)
return this}
_.moveToLeftEnd=function(){return this.moveToDirEnd(L)}
_.moveToRightEnd=function(){return this.moveToDirEnd(R)}
_.keystroke=function(t){var t=t.replace(/^\s+|\s+$/g,"").split(/\s+/)
for(var e=0;e<t.length;e+=1){this.__controller.keystroke(t[e],{preventDefault:noop})}return this}
_.typedText=function(t){for(var e=0;e<t.length;e+=1)this.__controller.typedText(t.charAt(e))
return this}
_.dropEmbedded=function(t,e,n){var i=t-$(window).scrollLeft()
var a=e-$(window).scrollTop()
var r=document.elementFromPoint(i,a)
this.__controller.seek($(r),t,e)
var s=Embed().setOptions(n)
s.createLeftOf(this.__controller.cursor)}})
e.EditableField=function(){throw"wtf don't call me, I'm 'abstract'"}
e.EditableField.prototype=n.EditableField.prototype
for(var r in API)(function(i,a){var r=n[i]=a(n)
e[i]=function(n,a){var s=e(n)
if(s instanceof r||!n||!n.nodeType)return s
var o=Controller(r.RootBlock(),$(n),Options())
o.KIND_OF_MQ=i
return r(o).__mathquillify(a,t)}
e[i].prototype=r.prototype})(r,API[r])
return e}MathQuill.noConflict=function(){window.MathQuill=origMathQuill
return MathQuill}
var origMathQuill=window.MathQuill
window.MathQuill=MathQuill
function RootBlockMixin(_){var t="moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" ")
for(var e=0;e<t.length;e+=1)(function(t){_[t]=function(e){this.controller.handle(t,e)}})(t[e])
_.reflow=function(){this.controller.handle("reflow")
this.controller.handle("edited")
this.controller.handle("edit")}}var Parser=P(function(_,t,e){function n(t,e){if(t){t="'"+t+"'"}else{t="EOF"}throw"Parse Error: "+e+" at "+t}_.init=function(t){this._=t}
_.parse=function(t){return this.skip(p)._(""+t,e,n)
function e(t,e){return e}}
_.or=function(t){pray("or is passed a parser",t instanceof e)
var n=this
return e(function(e,i,a){return n._(e,i,r)
function r(n){return t._(e,i,a)}})}
_.then=function(t){var n=this
return e(function(i,a,r){return n._(i,s,r)
function s(n,i){var s=t instanceof e?t:t(i)
pray("a parser is returned",s instanceof e)
return s._(n,a,r)}})}
_.many=function(){var t=this
return e(function(e,n,i){var a=[]
while(t._(e,r,s));return n(e,a)
function r(t,n){e=t
a.push(n)
return true}function s(){return false}})}
_.times=function(t,n){if(arguments.length<2)n=t
var i=this
return e(function(e,a,r){var s=[]
var o=true
var l
for(var d=0;d<t;d+=1){o=i._(e,c,u)
if(!o)return r(e,l)}for(;d<n&&o;d+=1){o=i._(e,c,m)}return a(e,s)
function c(t,n){s.push(n)
e=t
return true}function u(t,n){l=n
e=t
return false}function m(t,e){return false}})}
_.result=function(t){return this.then(r(t))}
_.atMost=function(t){return this.times(0,t)}
_.atLeast=function(t){var e=this
return e.times(t).then(function(t){return e.many().map(function(e){return t.concat(e)})})}
_.map=function(t){return this.then(function(e){return r(t(e))})}
_.skip=function(t){return this.then(function(e){return t.result(e)})}
var i=this.string=function(t){var n=t.length
var i="expected '"+t+"'"
return e(function(e,a,r){var s=e.slice(0,n)
if(s===t){return a(e.slice(n),s)}else{return r(e,i)}})}
var a=this.regex=function(t){pray("regexp parser is anchored",t.toString().charAt(1)==="^")
var n="expected "+t
return e(function(e,i,a){var r=t.exec(e)
if(r){var s=r[0]
return i(e.slice(s.length),s)}else{return a(e,n)}})}
var r=e.succeed=function(t){return e(function(e,n){return n(e,t)})}
var s=e.fail=function(t){return e(function(e,_,n){return n(e,t)})}
var o=e.letter=a(/^[a-z]/i)
var l=e.letters=a(/^[a-z]*/i)
var d=e.digit=a(/^[0-9]/)
var c=e.digits=a(/^[0-9]*/)
var u=e.whitespace=a(/^\s+/)
var m=e.optWhitespace=a(/^\s*/)
var f=e.any=e(function(t,e,n){if(!t)return n(t,"expected any character")
return e(t.slice(1),t.charAt(0))})
var h=e.all=e(function(t,e,n){return e("",t)})
var p=e.eof=e(function(t,e,n){if(t)return n(t,"expected EOF")
return e(t,t)})})
var saneKeyboardEvents=function(){var t={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"}
function e(e){var n=e.which||e.keyCode
var i=t[n]
var a
var r=[]
if(e.ctrlKey)r.push("Ctrl")
if(e.originalEvent&&e.originalEvent.metaKey)r.push("Meta")
if(e.altKey)r.push("Alt")
if(e.shiftKey)r.push("Shift")
a=i||String.fromCharCode(n)
if(!r.length&&!i)return a
r.push(a)
return r.join("-")}return function t(n,i){var a=null
var r=null
var s=jQuery(n)
var o=jQuery(i.container||s)
var l=noop,d
function c(t){l=t
clearTimeout(d)
d=setTimeout(t)}o.bind("keydown keypress input keyup focusout paste",function(t){l(t)})
function u(t){l()
l=noop
clearTimeout(d)
s.val(t)
if(t&&s[0].select)s[0].select()
m=!!t}var m=false
function f(){var t=s[0]
if(!("selectionStart"in t))return false
return t.selectionStart!==t.selectionEnd}function h(){i.keystroke(e(a),a)}function p(t){a=t
r=null
if(m)c(function(t){if(!(t&&t.type==="focusout")&&s[0].select){s[0].select()}l=noop
clearTimeout(d)})
h()}function b(t){if(a&&r)h()
r=t
c(L)}function L(){if(f())return
var t=s.val()
if(t.length===1){s.val("")
i.typedText(t)}else if(t&&s[0].select)s[0].select()}function x(){a=r=null}function C(t){s.focus()
c(v)}function v(){var t=s.val()
s.val("")
if(t)i.paste(t)}o.bind({keydown:p,keypress:b,focusout:x,paste:C})
return{select:u}}}()
Controller.open(function(_,t){_.exportText=function(){return this.root.foldChildren("",function(t,e){return t+e.text()})}})
Controller.open(function(_){_.focusBlurEvents=function(){var t=this,e=t.root,n=t.cursor
var i
t.textarea.focus(function(){t.blurred=false
clearTimeout(i)
t.container.addClass("mq-focused")
if(!n.parent)n.insAtRightEnd(e)
if(n.selection){n.selection.jQ.removeClass("mq-blur")
t.selectionChanged()}else n.show()}).blur(function(){t.blurred=true
i=setTimeout(function(){e.postOrder("intentionalBlur")
n.clearSelection().endSelection()
r()})
$(window).on("blur",a)})
function a(){clearTimeout(i)
if(n.selection)n.selection.jQ.addClass("mq-blur")
r()}function r(){n.hide().parent.blur()
t.container.removeClass("mq-focused")
$(window).off("blur",a)}t.blurred=true
n.hide().parent.blur()}})
Controller.open(function(_){_.keystroke=function(t,e){this.cursor.parent.keystroke(t,e,this)}})
Node.open(function(_){_.keystroke=function(t,e,n){var i=n.cursor
switch(t){case"Ctrl-Shift-Backspace":case"Ctrl-Backspace":n.ctrlDeleteDir(L)
break
case"Shift-Backspace":case"Backspace":n.backspace()
break
case"Esc":case"Tab":n.escapeDir(R,t,e)
return
case"Shift-Tab":case"Shift-Esc":n.escapeDir(L,t,e)
return
case"End":n.notify("move").cursor.insAtRightEnd(i.parent)
break
case"Ctrl-End":n.notify("move").cursor.insAtRightEnd(n.root)
break
case"Shift-End":while(i[R]){n.selectRight()}break
case"Ctrl-Shift-End":while(i[R]||i.parent!==n.root){n.selectRight()}break
case"Home":n.notify("move").cursor.insAtLeftEnd(i.parent)
break
case"Ctrl-Home":n.notify("move").cursor.insAtLeftEnd(n.root)
break
case"Shift-Home":while(i[L]){n.selectLeft()}break
case"Ctrl-Shift-Home":while(i[L]||i.parent!==n.root){n.selectLeft()}break
case"Left":n.moveLeft()
break
case"Shift-Left":n.selectLeft()
break
case"Ctrl-Left":break
case"Right":n.moveRight()
break
case"Shift-Right":n.selectRight()
break
case"Ctrl-Right":break
case"Up":n.moveUp()
break
case"Down":n.moveDown()
break
case"Shift-Up":if(i[L]){while(i[L])n.selectLeft()}else{n.selectLeft()}case"Shift-Down":if(i[R]){while(i[R])n.selectRight()}else{n.selectRight()}case"Ctrl-Up":break
case"Ctrl-Down":break
case"Ctrl-Shift-Del":case"Ctrl-Del":n.ctrlDeleteDir(R)
break
case"Shift-Del":case"Del":n.deleteForward()
break
case"Meta-A":case"Ctrl-A":n.notify("move").cursor.insAtRightEnd(n.root)
while(i[L])n.selectLeft()
break
default:return}e.preventDefault()
n.scrollHoriz()}
_.moveOutOf=_.moveTowards=_.deleteOutOf=_.deleteTowards=_.unselectInto=_.selectOutOf=_.selectTowards=function(){pray("overridden or never called on this node")}})
Controller.open(function(_){this.onNotify(function(t){if(t==="move"||t==="upDown")this.show().clearSelection()})
_.escapeDir=function(t,e,n){prayDirection(t)
var i=this.cursor
if(i.parent!==this.root)n.preventDefault()
if(i.parent===this.root)return
i.parent.moveOutOf(t,i)
return this.notify("move")}
optionProcessors.leftRightIntoCmdGoes=function(t){if(t&&t!=="up"&&t!=="down"){throw'"up" or "down" required for leftRightIntoCmdGoes option, '+'got "'+t+'"'}return t}
_.moveDir=function(t){prayDirection(t)
var e=this.cursor,n=e.options.leftRightIntoCmdGoes
if(e.selection){e.insDirOf(t,e.selection.ends[t])}else if(e[t])e[t].moveTowards(t,e,n)
else e.parent.moveOutOf(t,e,n)
return this.notify("move")}
_.moveLeft=function(){return this.moveDir(L)}
_.moveRight=function(){return this.moveDir(R)}
_.moveUp=function(){return t(this,"up")}
_.moveDown=function(){return t(this,"down")}
function t(t,e){var n=t.notify("upDown").cursor
var i=e+"Into",a=e+"OutOf"
if(n[R][i])n.insAtLeftEnd(n[R][i])
else if(n[L][i])n.insAtRightEnd(n[L][i])
else{n.parent.bubble(function(t){var e=t[a]
if(e){if(typeof e==="function")e=t[a](n)
if(e instanceof Node)n.jumpUpDown(t,e)
if(e!==true)return false}})}return t}this.onNotify(function(t){if(t!=="upDown")this.upDownCache={}})
this.onNotify(function(t){if(t==="edit")this.show().deleteSelection()})
_.deleteDir=function(t){prayDirection(t)
var e=this.cursor
var n=e.selection
this.notify("edit")
if(!n){if(e[t])e[t].deleteTowards(t,e)
else e.parent.deleteOutOf(t,e)}if(e[L].siblingDeleted)e[L].siblingDeleted(e.options,R)
if(e[R].siblingDeleted)e[R].siblingDeleted(e.options,L)
e.parent.bubble("reflow")
return this}
_.ctrlDeleteDir=function(t){prayDirection(t)
var e=this.cursor
if(!e[L]||e.selection)return ctrlr.deleteDir()
this.notify("edit")
Fragment(e.parent.ends[L],e[L]).remove()
e.insAtDirEnd(L,e.parent)
if(e[L].siblingDeleted)e[L].siblingDeleted(e.options,R)
if(e[R].siblingDeleted)e[R].siblingDeleted(e.options,L)
e.parent.bubble("reflow")
return this}
_.backspace=function(){return this.deleteDir(L)}
_.deleteForward=function(){return this.deleteDir(R)}
this.onNotify(function(t){if(t!=="select")this.endSelection()})
_.selectDir=function(t){var e=this.notify("select").cursor,n=e.selection
prayDirection(t)
if(!e.anticursor)e.startSelection()
var i=e[t]
if(i){if(n&&n.ends[t]===i&&e.anticursor[-t]!==i){i.unselectInto(t,e)}else i.selectTowards(t,e)}else e.parent.selectOutOf(t,e)
e.clearSelection()
e.select()||e.show()}
_.selectLeft=function(){return this.selectDir(L)}
_.selectRight=function(){return this.selectDir(R)}})
var latexMathParser=function(){function t(t){var e=MathBlock()
t.adopt(e,0,0)
return e}function e(t){var e=t[0]||MathBlock()
for(var n=1;n<t.length;n+=1){t[n].children().adopt(e,e.ends[R],0)}return e}var n=Parser.string
var i=Parser.regex
var a=Parser.letter
var r=Parser.any
var s=Parser.optWhitespace
var o=Parser.succeed
var l=Parser.fail
var d=a.map(function(t){return Letter(t)})
var c=i(/^[^${}\\_^]/).map(function(t){return VanillaSymbol(t)})
var u=i(/^[^\\a-eg-zA-Z]/).or(n("\\").then(i(/^[a-z]+/i).or(i(/^\s+/).result(" ")).or(r))).then(function(t){var e=LatexCmds[t]
if(e){return e(t).parser()}else{return l("unknown command: \\"+t)}})
var m=u.or(d).or(c)
var f=n("{").then(function(){return p}).skip(n("}"))
var h=s.then(f.or(m.map(t)))
var p=h.many().map(e).skip(s)
var b=n("[").then(h.then(function(t){return t.join("latex")!=="]"?o(t):l()}).many().map(e).skip(s)).skip(n("]"))
var L=p
L.block=h
L.optBlock=b
return L}()
Controller.open(function(_,t){_.exportLatex=function(){return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi,"$1")}
_.writeLatex=function(t){var e=this.notify("edit").cursor
var n=Parser.all
var i=Parser.eof
var a=latexMathParser.skip(i).or(n.result(false)).parse(t)
if(a&&!a.isEmpty()){a.children().adopt(e.parent,e[L],e[R])
var r=a.jQize()
r.insertBefore(e.jQ)
e[L]=a.ends[R]
a.finalizeInsert(e.options,e)
if(a.ends[R][R].siblingCreated)a.ends[R][R].siblingCreated(e.options,L)
if(a.ends[L][L].siblingCreated)a.ends[L][L].siblingCreated(e.options,R)
e.parent.bubble("reflow")}return this}
_.renderLatexMath=function(t){var e=this.root,n=this.cursor
var i=Parser.all
var a=Parser.eof
var r=latexMathParser.skip(a).or(i.result(false)).parse(t)
e.eachChild("postOrder","dispose")
e.ends[L]=e.ends[R]=0
if(r){r.children().adopt(e,0,0)}var s=e.jQ
if(r){var o=r.join("html")
s.html(o)
e.jQize(s.children())
e.finalizeInsert(n.options)}else{s.empty()}delete n.selection
n.insAtRightEnd(e)}
_.renderLatexText=function(t){var e=this.root,n=this.cursor
e.jQ.children().slice(1).remove()
e.eachChild("postOrder","dispose")
e.ends[L]=e.ends[R]=0
delete n.selection
n.show().insAtRightEnd(e)
var i=Parser.regex
var a=Parser.string
var r=Parser.eof
var s=Parser.all
var o=a("$").then(latexMathParser).skip(a("$").or(r)).map(function(t){var e=RootMathCommand(n)
e.createBlocks()
var i=e.ends[L]
t.children().adopt(i,0,0)
return e})
var l=a("\\$").result("$")
var d=l.or(i(/^[^$]/)).map(VanillaSymbol)
var c=o.or(d).many()
var u=c.skip(r).or(s.result(false)).parse(t)
if(u){for(var m=0;m<u.length;m+=1){u[m].adopt(e,e.ends[R],0)}e.jQize().appendTo(e.jQ)
e.finalizeInsert(n.options)}}})
Controller.open(function(_){_.delegateMouseEvents=function(){var t=this.root.jQ
this.container.bind("mousedown.mathquill",function(e){var n=$(e.target).closest(".mq-root-block")
var i=Node.byId[n.attr(mqBlockId)||t.attr(mqBlockId)]
var a=i.controller,r=a.cursor,s=r.blink
var o=a.textareaSpan,l=a.textarea
var d
function c(t){d=$(t.target)}function u(t){if(!r.anticursor)r.startSelection()
a.seek(d,t.pageX,t.pageY).cursor.select()
d=undefined}function m(t){r.blink=s
if(!r.selection){if(a.editable){r.show()}else{o.detach()}}n.unbind("mousemove",c)
$(t.target.ownerDocument).unbind("mousemove",u).unbind("mouseup",m)}if(a.blurred){if(!a.editable)n.prepend(o)
l.focus()}e.preventDefault()
e.target.unselectable=true
r.blink=noop
a.seek($(e.target),e.pageX,e.pageY).cursor.startSelection()
n.mousemove(c)
$(e.target.ownerDocument).mousemove(u).mouseup(m)})}})
Controller.open(function(_){_.seek=function(t,e,n){var i=this.notify("select").cursor
if(t){var a=t.attr(mqBlockId)||t.attr(mqCmdId)
if(!a){var r=t.parent()
a=r.attr(mqBlockId)||r.attr(mqCmdId)}}var s=a?Node.byId[a]:this.root
pray("nodeId is the id of some Node that exists",s)
i.clearSelection().show()
s.seek(e,i)
this.scrollHoriz()
return this}})
Controller.open(function(_){_.scrollHoriz=function(){var t=this.cursor,e=t.selection
var n=this.root.jQ[0].getBoundingClientRect()
if(!e){var i=t.jQ[0].getBoundingClientRect().left
if(i>n.right-20)var a=i-(n.right-20)
else if(i<n.left+20)var a=i-(n.left+20)
else return}else{var r=e.jQ[0].getBoundingClientRect()
var s=r.left-(n.left+20)
var o=r.right-(n.right-20)
if(e.ends[L]===t[R]){if(s<0)var a=s
else if(o>0){if(r.left-o<n.left+20)var a=s
else var a=o}else return}else{if(o>0)var a=o
else if(s<0){if(r.right-s>n.right-20)var a=o
else var a=s}else return}}this.root.jQ.stop().animate({scrollLeft:"+="+a},100)}})
Controller.open(function(_){Options.p.substituteTextarea=function(){return $("<textarea autocapitalize=off autocomplete=off autocorrect=off "+"spellcheck=false x-palm-disable-ste-all=true />")[0]}
_.createTextarea=function(){var t=this.textareaSpan=$('<span class="mq-textarea"></span>'),e=this.options.substituteTextarea()
if(!e.nodeType){throw"substituteTextarea() must return a DOM element, got "+e}e=this.textarea=$(e).appendTo(t)
var n=this
n.cursor.selectionChanged=function(){n.selectionChanged()}
n.container.bind("copy",function(){n.setTextareaSelection()})}
_.selectionChanged=function(){var t=this
forceIERedraw(t.container[0])
if(t.textareaSelectionTimeout===undefined){t.textareaSelectionTimeout=setTimeout(function(){t.setTextareaSelection()})}}
_.setTextareaSelection=function(){this.textareaSelectionTimeout=undefined
var t=""
if(this.cursor.selection){t=this.cursor.selection.join("latex")
if(this.options.statelessClipboard){t="$"+t+"$"}}this.selectFn(t)}
_.staticMathTextareaEvents=function(){var t=this,e=t.root,n=t.cursor,i=t.textarea,a=t.textareaSpan
this.container.prepend('<span class="mq-selectable">$'+t.exportLatex()+"$</span>")
t.blurred=true
i.bind("cut paste",false).focus(function(){t.blurred=false}).blur(function(){if(n.selection)n.selection.clear()
setTimeout(r)})
function r(){a.detach()
t.blurred=true}t.selectFn=function(t){i.val(t)
if(t)i.select()}}
_.editablesTextareaEvents=function(){var t=this,e=t.root,n=t.cursor,i=t.textarea,a=t.textareaSpan
var r=saneKeyboardEvents(i,this)
this.selectFn=function(t){r.select(t)}
this.container.prepend(a).on("cut",function(e){if(n.selection){setTimeout(function(){t.notify("edit")
n.parent.bubble("reflow")})}})
this.focusBlurEvents()}
_.typedText=function(t){if(t==="\n")return this.handle("enter")
var e=this.notify().cursor
e.parent.write(e,t)
this.scrollHoriz()}
_.paste=function(t){if(this.options.statelessClipboard){if(t.slice(0,1)==="$"&&t.slice(-1)==="$"){t=t.slice(1,-1)}else{t="\\text{"+t+"}"}}this.writeLatex(t).cursor.show()}})
var MathElement=P(Node,function(_,t){_.finalizeInsert=function(t,e){var n=this
n.postOrder("finalizeTree",t)
n.postOrder("contactWeld",e)
n.postOrder("blur")
n.postOrder("reflow")
if(n[R].siblingCreated)n[R].siblingCreated(t,L)
if(n[L].siblingCreated)n[L].siblingCreated(t,R)
n.bubble("reflow")}})
var MathCommand=P(MathElement,function(_,t){_.init=function(e,n,i){var a=this
t.init.call(a)
if(!a.ctrlSeq)a.ctrlSeq=e
if(n)a.htmlTemplate=n
if(i)a.textTemplate=i}
_.replaces=function(t){t.disown()
this.replacedFragment=t}
_.isEmpty=function(){return this.foldChildren(true,function(t,e){return t&&e.isEmpty()})}
_.parser=function(){var t=latexMathParser.block
var e=this
return t.times(e.numBlocks()).map(function(t){e.blocks=t
for(var n=0;n<t.length;n+=1){t[n].adopt(e,e.ends[R],0)}return e})}
_.createLeftOf=function(e){var n=this
var i=n.replacedFragment
n.createBlocks()
t.createLeftOf.call(n,e)
if(i){i.adopt(n.ends[L],0,0)
i.jQ.appendTo(n.ends[L].jQ)}n.finalizeInsert(e.options)
n.placeCursor(e)}
_.createBlocks=function(){var t=this,e=t.numBlocks(),n=t.blocks=Array(e)
for(var i=0;i<e;i+=1){var a=n[i]=MathBlock()
a.adopt(t,t.ends[R],0)}}
_.placeCursor=function(t){t.insAtRightEnd(this.foldChildren(this.ends[L],function(t,e){return t.isEmpty()?t:e}))}
_.moveTowards=function(t,e,n){var i=n&&this[n+"Into"]
e.insAtDirEnd(-t,i||this.ends[-t])}
_.deleteTowards=function(t,e){if(this.isEmpty())e[t]=this.remove()[t]
else this.moveTowards(t,e,null)}
_.selectTowards=function(t,e){e[-t]=this
e[t]=this[t]}
_.selectChildren=function(){return Selection(this,this)}
_.unselectInto=function(t,e){e.insAtDirEnd(-t,e.anticursor.ancestors[this.id])}
_.seek=function(t,e){function n(t){var e={}
e[L]=t.jQ.offset().left
e[R]=e[L]+t.jQ.outerWidth()
return e}var i=this
var a=n(i)
if(t<a[L])return e.insLeftOf(i)
if(t>a[R])return e.insRightOf(i)
var r=a[L]
i.eachChild(function(s){var o=n(s)
if(t<o[L]){if(t-r<o[L]-t){if(s[L])e.insAtRightEnd(s[L])
else e.insLeftOf(i)}else e.insAtLeftEnd(s)
return false}else if(t>o[R]){if(s[R])r=o[R]
else{if(a[R]-t<t-o[R]){e.insRightOf(i)}else e.insAtRightEnd(s)}}else{s.seek(t,e)
return false}})}
_.numBlocks=function(){var t=this.htmlTemplate.match(/&\d+/g)
return t?t.length:0}
_.html=function(){var t=this
var e=t.blocks
var n=" mathquill-command-id="+t.id
var i=t.htmlTemplate.match(/<[^<>]+>|[^<>]+/g)
pray("no unmatched angle brackets",i.join("")===this.htmlTemplate)
for(var a=0,r=i[0];r;a+=1,r=i[a]){if(r.slice(-2)==="/>"){i[a]=r.slice(0,-2)+n+"/>"}else if(r.charAt(0)==="<"){pray("not an unmatched top-level close tag",r.charAt(1)!=="/")
i[a]=r.slice(0,-1)+n+">"
var s=1
do{a+=1,r=i[a]
pray("no missing close tags",r)
if(r.slice(0,2)==="</"){s-=1}else if(r.charAt(0)==="<"&&r.slice(-2)!=="/>"){s+=1}}while(s>0)}}return i.join("").replace(/>&(\d+)/g,function(t,n){return" mathquill-block-id="+e[n].id+">"+e[n].join("html")})}
_.latex=function(){return this.foldChildren(this.ctrlSeq,function(t,e){return t+"{"+(e.latex()||" ")+"}"})}
_.textTemplate=[""]
_.text=function(){var t=this,e=0
return t.foldChildren(t.textTemplate[e],function(n,i){e+=1
var a=i.text()
if(n&&t.textTemplate[e]==="("&&a[0]==="("&&a.slice(-1)===")")return n+a.slice(1,-1)+t.textTemplate[e]
return n+i.text()+(t.textTemplate[e]||"")})}})
var Symbol=P(MathCommand,function(_,t){_.init=function(e,n,i){if(!i)i=e&&e.length>1?e.slice(1):e
t.init.call(this,e,n,[i])}
_.parser=function(){return Parser.succeed(this)}
_.numBlocks=function(){return 0}
_.replaces=function(t){t.remove()}
_.createBlocks=noop
_.moveTowards=function(t,e){e.jQ.insDirOf(t,this.jQ)
e[-t]=this
e[t]=this[t]}
_.deleteTowards=function(t,e){e[t]=this.remove()[t]}
_.seek=function(t,e){if(t-this.jQ.offset().left<this.jQ.outerWidth()/2)e.insLeftOf(this)
else e.insRightOf(this)}
_.latex=function(){return this.ctrlSeq}
_.text=function(){return this.textTemplate}
_.placeCursor=noop
_.isEmpty=function(){return true}})
var VanillaSymbol=P(Symbol,function(_,t){_.init=function(e,n){t.init.call(this,e,"<span>"+(n||e)+"</span>")}})
var BinaryOperator=P(Symbol,function(_,t){_.init=function(e,n,i){t.init.call(this,e,'<span class="mq-binary-operator">'+n+"</span>",i)}})
var MathBlock=P(MathElement,function(_,t){_.join=function(t){return this.foldChildren("",function(e,n){return e+n[t]()})}
_.html=function(){return this.join("html")}
_.latex=function(){return this.join("latex")}
_.text=function(){return this.ends[L]===this.ends[R]&&this.ends[L]!==0?this.ends[L].text():this.join("text")}
_.keystroke=function(e,n,i){if(i.options.spaceBehavesLikeTab&&(e==="Spacebar"||e==="Shift-Spacebar")){n.preventDefault()
i.escapeDir(e==="Shift-Spacebar"?L:R,e,n)
return}return t.keystroke.apply(this,arguments)}
_.moveOutOf=function(t,e,n){var i=n&&this.parent[n+"Into"]
if(!i&&this[t])e.insAtDirEnd(-t,this[t])
else e.insDirOf(t,this.parent)}
_.selectOutOf=function(t,e){e.insDirOf(t,this.parent)}
_.deleteOutOf=function(t,e){e.unwrapGramp()}
_.seek=function(t,e){var n=this.ends[R]
if(!n||n.jQ.offset().left+n.jQ.outerWidth()<t){return e.insAtRightEnd(this)}if(t<this.ends[L].jQ.offset().left)return e.insAtLeftEnd(this)
while(t<n.jQ.offset().left)n=n[L]
return n.seek(t,e)}
_.chToCmd=function(t){var e
if(t.match(/^[a-eg-zA-Z]$/))return Letter(t)
else if(/^\d$/.test(t))return Digit(t)
else if(e=CharCmds[t]||LatexCmds[t])return e(t)
else return VanillaSymbol(t)}
_.write=function(t,e){var n=this.chToCmd(e)
if(t.selection)n.replaces(t.replaceSelection())
n.createLeftOf(t.show())}
_.focus=function(){this.jQ.addClass("mq-hasCursor")
this.jQ.removeClass("mq-empty")
return this}
_.blur=function(){this.jQ.removeClass("mq-hasCursor")
if(this.isEmpty())this.jQ.addClass("mq-empty")
return this}})
API.StaticMath=function(t){return P(t.AbstractMathQuill,function(_,e){this.RootBlock=MathBlock
_.__mathquillify=function(){e.__mathquillify.call(this,"mq-math-mode")
this.__controller.delegateMouseEvents()
this.__controller.staticMathTextareaEvents()
return this}
_.init=function(){e.init.apply(this,arguments)
this.__controller.root.postOrder("registerInnerField",this.innerFields=[],t.MathField)}
_.latex=function(){var n=e.latex.apply(this,arguments)
if(arguments.length>0){this.__controller.root.postOrder("registerInnerField",this.innerFields=[],t.MathField)}return n}})}
var RootMathBlock=P(MathBlock,RootBlockMixin)
API.MathField=function(t){return P(t.EditableField,function(_,t){this.RootBlock=RootMathBlock
_.__mathquillify=function(e,n){this.config(e)
if(n>1)this.__controller.root.reflow=noop
t.__mathquillify.call(this,"mq-editable-field mq-math-mode")
delete this.__controller.root.reflow
return this}})}
LatexCmds.notin=LatexCmds.cong=LatexCmds.equiv=LatexCmds.oplus=LatexCmds.otimes=P(BinaryOperator,function(_,t){_.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";")}})
LatexCmds["≠"]=LatexCmds.ne=LatexCmds.neq=bind(BinaryOperator,"\\ne ","&ne;")
LatexCmds.ast=LatexCmds.star=LatexCmds.loast=LatexCmds.lowast=bind(BinaryOperator,"\\ast ","&lowast;")
LatexCmds.therefor=LatexCmds.therefore=bind(BinaryOperator,"\\therefore ","&there4;")
LatexCmds.cuz=LatexCmds.because=bind(BinaryOperator,"\\because ","&#8757;")
LatexCmds.prop=LatexCmds.propto=bind(BinaryOperator,"\\propto ","&prop;")
LatexCmds["≈"]=LatexCmds.asymp=LatexCmds.approx=bind(BinaryOperator,"\\approx ","&asymp;")
LatexCmds.isin=LatexCmds["in"]=bind(BinaryOperator,"\\in ","&isin;")
LatexCmds.ni=LatexCmds.contains=bind(BinaryOperator,"\\ni ","&ni;")
LatexCmds.notni=LatexCmds.niton=LatexCmds.notcontains=LatexCmds.doesnotcontain=bind(BinaryOperator,"\\not\\ni ","&#8716;")
LatexCmds.sub=LatexCmds.subset=bind(BinaryOperator,"\\subset ","&sub;")
LatexCmds.sup=LatexCmds.supset=LatexCmds.superset=bind(BinaryOperator,"\\supset ","&sup;")
LatexCmds.nsub=LatexCmds.notsub=LatexCmds.nsubset=LatexCmds.notsubset=bind(BinaryOperator,"\\not\\subset ","&#8836;")
LatexCmds.nsup=LatexCmds.notsup=LatexCmds.nsupset=LatexCmds.notsupset=LatexCmds.nsuperset=LatexCmds.notsuperset=bind(BinaryOperator,"\\not\\supset ","&#8837;")
LatexCmds.sube=LatexCmds.subeq=LatexCmds.subsete=LatexCmds.subseteq=bind(BinaryOperator,"\\subseteq ","&sube;")
LatexCmds.supe=LatexCmds.supeq=LatexCmds.supsete=LatexCmds.supseteq=LatexCmds.supersete=LatexCmds.superseteq=bind(BinaryOperator,"\\supseteq ","&supe;")
LatexCmds.nsube=LatexCmds.nsubeq=LatexCmds.notsube=LatexCmds.notsubeq=LatexCmds.nsubsete=LatexCmds.nsubseteq=LatexCmds.notsubsete=LatexCmds.notsubseteq=bind(BinaryOperator,"\\not\\subseteq ","&#8840;")
LatexCmds.nsupe=LatexCmds.nsupeq=LatexCmds.notsupe=LatexCmds.notsupeq=LatexCmds.nsupsete=LatexCmds.nsupseteq=LatexCmds.notsupsete=LatexCmds.notsupseteq=LatexCmds.nsupersete=LatexCmds.nsuperseteq=LatexCmds.notsupersete=LatexCmds.notsuperseteq=bind(BinaryOperator,"\\not\\supseteq ","&#8841;")
LatexCmds.N=LatexCmds.naturals=LatexCmds.Naturals=bind(VanillaSymbol,"\\mathbb{N}","&#8469;")
LatexCmds.P=LatexCmds.primes=LatexCmds.Primes=LatexCmds.projective=LatexCmds.Projective=LatexCmds.probability=LatexCmds.Probability=bind(VanillaSymbol,"\\mathbb{P}","&#8473;")
LatexCmds.Z=LatexCmds.integers=LatexCmds.Integers=bind(VanillaSymbol,"\\mathbb{Z}","&#8484;")
LatexCmds.Q=LatexCmds.rationals=LatexCmds.Rationals=bind(VanillaSymbol,"\\mathbb{Q}","&#8474;")
LatexCmds.R=LatexCmds.reals=LatexCmds.Reals=bind(VanillaSymbol,"\\mathbb{R}","&#8477;")
LatexCmds.C=LatexCmds.complex=LatexCmds.Complex=LatexCmds.complexes=LatexCmds.Complexes=LatexCmds.complexplane=LatexCmds.Complexplane=LatexCmds.ComplexPlane=bind(VanillaSymbol,"\\mathbb{C}","&#8450;")
LatexCmds.H=LatexCmds.Hamiltonian=LatexCmds.quaternions=LatexCmds.Quaternions=bind(VanillaSymbol,"\\mathbb{H}","&#8461;")
LatexCmds.quad=LatexCmds.emsp=bind(VanillaSymbol,"\\quad ","    ")
LatexCmds.qquad=bind(VanillaSymbol,"\\qquad ","        ")
LatexCmds.diamond=bind(VanillaSymbol,"\\diamond ","&#9671;")
LatexCmds.bigtriangleup=bind(VanillaSymbol,"\\bigtriangleup ","&#9651;")
LatexCmds.ominus=bind(VanillaSymbol,"\\ominus ","&#8854;")
LatexCmds.uplus=bind(VanillaSymbol,"\\uplus ","&#8846;")
LatexCmds.bigtriangledown=bind(VanillaSymbol,"\\bigtriangledown ","&#9661;")
LatexCmds.sqcap=bind(VanillaSymbol,"\\sqcap ","&#8851;")
LatexCmds.triangleleft=bind(VanillaSymbol,"\\triangleleft ","&#8882;")
LatexCmds.sqcup=bind(VanillaSymbol,"\\sqcup ","&#8852;")
LatexCmds.triangleright=bind(VanillaSymbol,"\\triangleright ","&#8883;")
LatexCmds.odot=LatexCmds.circledot=bind(VanillaSymbol,"\\odot ","&#8857;")
LatexCmds.bigcirc=bind(VanillaSymbol,"\\bigcirc ","&#9711;")
LatexCmds.dagger=bind(VanillaSymbol,"\\dagger ","&#0134;")
LatexCmds.ddagger=bind(VanillaSymbol,"\\ddagger ","&#135;")
LatexCmds.wr=bind(VanillaSymbol,"\\wr ","&#8768;")
LatexCmds.amalg=bind(VanillaSymbol,"\\amalg ","&#8720;")
LatexCmds.models=bind(VanillaSymbol,"\\models ","&#8872;")
LatexCmds.prec=bind(VanillaSymbol,"\\prec ","&#8826;")
LatexCmds.succ=bind(VanillaSymbol,"\\succ ","&#8827;")
LatexCmds.preceq=bind(VanillaSymbol,"\\preceq ","&#8828;")
LatexCmds.succeq=bind(VanillaSymbol,"\\succeq ","&#8829;")
LatexCmds.simeq=bind(VanillaSymbol,"\\simeq ","&#8771;")
LatexCmds.mid=bind(VanillaSymbol,"\\mid ","&#8739;")
LatexCmds.ll=bind(VanillaSymbol,"\\ll ","&#8810;")
LatexCmds.gg=bind(VanillaSymbol,"\\gg ","&#8811;")
LatexCmds.parallel=bind(VanillaSymbol,"\\parallel ","&#8741;")
LatexCmds.nparallel=bind(VanillaSymbol,"\\nparallel ","&#8742;")
LatexCmds.bowtie=bind(VanillaSymbol,"\\bowtie ","&#8904;")
LatexCmds.sqsubset=bind(VanillaSymbol,"\\sqsubset ","&#8847;")
LatexCmds.sqsupset=bind(VanillaSymbol,"\\sqsupset ","&#8848;")
LatexCmds.smile=bind(VanillaSymbol,"\\smile ","&#8995;")
LatexCmds.sqsubseteq=bind(VanillaSymbol,"\\sqsubseteq ","&#8849;")
LatexCmds.sqsupseteq=bind(VanillaSymbol,"\\sqsupseteq ","&#8850;")
LatexCmds.doteq=bind(VanillaSymbol,"\\doteq ","&#8784;")
LatexCmds.frown=bind(VanillaSymbol,"\\frown ","&#8994;")
LatexCmds.vdash=bind(VanillaSymbol,"\\vdash ","&#8870;")
LatexCmds.dashv=bind(VanillaSymbol,"\\dashv ","&#8867;")
LatexCmds.nless=bind(VanillaSymbol,"\\nless ","&#8814;")
LatexCmds.ngtr=bind(VanillaSymbol,"\\ngtr ","&#8815;")
LatexCmds.longleftarrow=bind(VanillaSymbol,"\\longleftarrow ","&#8592;")
LatexCmds.longrightarrow=bind(VanillaSymbol,"\\longrightarrow ","&#8594;")
LatexCmds.Longleftarrow=bind(VanillaSymbol,"\\Longleftarrow ","&#8656;")
LatexCmds.Longrightarrow=bind(VanillaSymbol,"\\Longrightarrow ","&#8658;")
LatexCmds.longleftrightarrow=bind(VanillaSymbol,"\\longleftrightarrow ","&#8596;")
LatexCmds.updownarrow=bind(VanillaSymbol,"\\updownarrow ","&#8597;")
LatexCmds.Longleftrightarrow=bind(VanillaSymbol,"\\Longleftrightarrow ","&#8660;")
LatexCmds.Updownarrow=bind(VanillaSymbol,"\\Updownarrow ","&#8661;")
LatexCmds.mapsto=bind(VanillaSymbol,"\\mapsto ","&#8614;")
LatexCmds.nearrow=bind(VanillaSymbol,"\\nearrow ","&#8599;")
LatexCmds.hookleftarrow=bind(VanillaSymbol,"\\hookleftarrow ","&#8617;")
LatexCmds.hookrightarrow=bind(VanillaSymbol,"\\hookrightarrow ","&#8618;")
LatexCmds.searrow=bind(VanillaSymbol,"\\searrow ","&#8600;")
LatexCmds.leftharpoonup=bind(VanillaSymbol,"\\leftharpoonup ","&#8636;")
LatexCmds.rightharpoonup=bind(VanillaSymbol,"\\rightharpoonup ","&#8640;")
LatexCmds.swarrow=bind(VanillaSymbol,"\\swarrow ","&#8601;")
LatexCmds.leftharpoondown=bind(VanillaSymbol,"\\leftharpoondown ","&#8637;")
LatexCmds.rightharpoondown=bind(VanillaSymbol,"\\rightharpoondown ","&#8641;")
LatexCmds.nwarrow=bind(VanillaSymbol,"\\nwarrow ","&#8598;")
LatexCmds.ldots=bind(VanillaSymbol,"\\ldots ","&#8230;")
LatexCmds.cdots=bind(VanillaSymbol,"\\cdots ","&#8943;")
LatexCmds.vdots=bind(VanillaSymbol,"\\vdots ","&#8942;")
LatexCmds.ddots=bind(VanillaSymbol,"\\ddots ","&#8945;")
LatexCmds.surd=bind(VanillaSymbol,"\\surd ","&#8730;")
LatexCmds.triangle=bind(VanillaSymbol,"\\triangle ","&#9651;")
LatexCmds.ell=bind(VanillaSymbol,"\\ell ","&#8467;")
LatexCmds.top=bind(VanillaSymbol,"\\top ","&#8868;")
LatexCmds.flat=bind(VanillaSymbol,"\\flat ","&#9837;")
LatexCmds.natural=bind(VanillaSymbol,"\\natural ","&#9838;")
LatexCmds.sharp=bind(VanillaSymbol,"\\sharp ","&#9839;")
LatexCmds.wp=bind(VanillaSymbol,"\\wp ","&#8472;")
LatexCmds.bot=bind(VanillaSymbol,"\\bot ","&#8869;")
LatexCmds.clubsuit=bind(VanillaSymbol,"\\clubsuit ","&#9827;")
LatexCmds.diamondsuit=bind(VanillaSymbol,"\\diamondsuit ","&#9826;")
LatexCmds.heartsuit=bind(VanillaSymbol,"\\heartsuit ","&#9825;")
LatexCmds.spadesuit=bind(VanillaSymbol,"\\spadesuit ","&#9824;")
LatexCmds.parallelogram=bind(VanillaSymbol,"\\parallelogram ","&#9649;")
LatexCmds.square=bind(VanillaSymbol,"\\square ","&#11036;")
LatexCmds.oint=bind(VanillaSymbol,"\\oint ","&#8750;")
LatexCmds.bigcap=bind(VanillaSymbol,"\\bigcap ","&#8745;")
LatexCmds.bigcup=bind(VanillaSymbol,"\\bigcup ","&#8746;")
LatexCmds.bigsqcup=bind(VanillaSymbol,"\\bigsqcup ","&#8852;")
LatexCmds.bigvee=bind(VanillaSymbol,"\\bigvee ","&#8744;")
LatexCmds.bigwedge=bind(VanillaSymbol,"\\bigwedge ","&#8743;")
LatexCmds.bigodot=bind(VanillaSymbol,"\\bigodot ","&#8857;")
LatexCmds.bigotimes=bind(VanillaSymbol,"\\bigotimes ","&#8855;")
LatexCmds.bigoplus=bind(VanillaSymbol,"\\bigoplus ","&#8853;")
LatexCmds.biguplus=bind(VanillaSymbol,"\\biguplus ","&#8846;")
LatexCmds.lfloor=bind(VanillaSymbol,"\\lfloor ","&#8970;")
LatexCmds.rfloor=bind(VanillaSymbol,"\\rfloor ","&#8971;")
LatexCmds.lceil=bind(VanillaSymbol,"\\lceil ","&#8968;")
LatexCmds.rceil=bind(VanillaSymbol,"\\rceil ","&#8969;")
LatexCmds.opencurlybrace=LatexCmds.lbrace=bind(VanillaSymbol,"\\lbrace ","{")
LatexCmds.closecurlybrace=LatexCmds.rbrace=bind(VanillaSymbol,"\\rbrace ","}")
LatexCmds.lbrack=bind(VanillaSymbol,"[")
LatexCmds.rbrack=bind(VanillaSymbol,"]")
LatexCmds.slash=bind(VanillaSymbol,"/")
LatexCmds.vert=bind(VanillaSymbol,"|")
LatexCmds.perp=LatexCmds.perpendicular=bind(VanillaSymbol,"\\perp ","&perp;")
LatexCmds.nabla=LatexCmds.del=bind(VanillaSymbol,"\\nabla ","&nabla;")
LatexCmds.hbar=bind(VanillaSymbol,"\\hbar ","&#8463;")
LatexCmds.AA=LatexCmds.Angstrom=LatexCmds.angstrom=bind(VanillaSymbol,"\\text\\AA ","&#8491;")
LatexCmds.ring=LatexCmds.circ=LatexCmds.circle=bind(VanillaSymbol,"\\circ ","&#8728;")
LatexCmds.bull=LatexCmds.bullet=bind(VanillaSymbol,"\\bullet ","&bull;")
LatexCmds.setminus=LatexCmds.smallsetminus=bind(VanillaSymbol,"\\setminus ","&#8726;")
LatexCmds.not=LatexCmds["¬"]=LatexCmds.neg=bind(VanillaSymbol,"\\neg ","&not;")
LatexCmds["…"]=LatexCmds.dots=LatexCmds.ellip=LatexCmds.hellip=LatexCmds.ellipsis=LatexCmds.hellipsis=bind(VanillaSymbol,"\\dots ","&hellip;")
LatexCmds.converges=LatexCmds.darr=LatexCmds.dnarr=LatexCmds.dnarrow=LatexCmds.downarrow=bind(VanillaSymbol,"\\downarrow ","&darr;")
LatexCmds.dArr=LatexCmds.dnArr=LatexCmds.dnArrow=LatexCmds.Downarrow=bind(VanillaSymbol,"\\Downarrow ","&dArr;")
LatexCmds.diverges=LatexCmds.uarr=LatexCmds.uparrow=bind(VanillaSymbol,"\\uparrow ","&uarr;")
LatexCmds.uArr=LatexCmds.Uparrow=bind(VanillaSymbol,"\\Uparrow ","&uArr;")
LatexCmds.to=bind(BinaryOperator,"\\to ","&rarr;")
LatexCmds.rarr=LatexCmds.rightarrow=bind(VanillaSymbol,"\\rightarrow ","&rarr;")
LatexCmds.implies=bind(BinaryOperator,"\\Rightarrow ","&rArr;")
LatexCmds.rArr=LatexCmds.Rightarrow=bind(VanillaSymbol,"\\Rightarrow ","&rArr;")
LatexCmds.gets=bind(BinaryOperator,"\\gets ","&larr;")
LatexCmds.larr=LatexCmds.leftarrow=bind(VanillaSymbol,"\\leftarrow ","&larr;")
LatexCmds.impliedby=bind(BinaryOperator,"\\Leftarrow ","&lArr;")
LatexCmds.lArr=LatexCmds.Leftarrow=bind(VanillaSymbol,"\\Leftarrow ","&lArr;")
LatexCmds.harr=LatexCmds.lrarr=LatexCmds.leftrightarrow=bind(VanillaSymbol,"\\leftrightarrow ","&harr;")
LatexCmds.iff=bind(BinaryOperator,"\\Leftrightarrow ","&hArr;")
LatexCmds.hArr=LatexCmds.lrArr=LatexCmds.Leftrightarrow=bind(VanillaSymbol,"\\Leftrightarrow ","&hArr;")
LatexCmds.Re=LatexCmds.Real=LatexCmds.real=bind(VanillaSymbol,"\\Re ","&real;")
LatexCmds.Im=LatexCmds.imag=LatexCmds.image=LatexCmds.imagin=LatexCmds.imaginary=LatexCmds.Imaginary=bind(VanillaSymbol,"\\Im ","&image;")
LatexCmds.part=LatexCmds.partial=bind(VanillaSymbol,"\\partial ","&part;")
LatexCmds.infty=LatexCmds.infin=LatexCmds.infinity=bind(VanillaSymbol,"\\infty ","&infin;")
LatexCmds.alef=LatexCmds.alefsym=LatexCmds.aleph=LatexCmds.alephsym=bind(VanillaSymbol,"\\aleph ","&alefsym;")
LatexCmds.xist=LatexCmds.xists=LatexCmds.exist=LatexCmds.exists=bind(VanillaSymbol,"\\exists ","&exist;")
LatexCmds.nexists=LatexCmds.nexist=bind(VanillaSymbol,"\\nexists ","&#8708;")
LatexCmds.and=LatexCmds.land=LatexCmds.wedge=bind(VanillaSymbol,"\\wedge ","&and;")
LatexCmds.or=LatexCmds.lor=LatexCmds.vee=bind(VanillaSymbol,"\\vee ","&or;")
LatexCmds.o=LatexCmds.O=LatexCmds.empty=LatexCmds.emptyset=LatexCmds.oslash=LatexCmds.Oslash=LatexCmds.nothing=LatexCmds.varnothing=bind(BinaryOperator,"\\varnothing ","&empty;")
LatexCmds.cup=LatexCmds.union=bind(BinaryOperator,"\\cup ","&cup;")
LatexCmds.cap=LatexCmds.intersect=LatexCmds.intersection=bind(BinaryOperator,"\\cap ","&cap;")
LatexCmds.deg=LatexCmds.degree=bind(VanillaSymbol,"\\degree ","&deg;")
LatexCmds.ang=LatexCmds.angle=bind(VanillaSymbol,"\\angle ","&ang;")
LatexCmds.measuredangle=bind(VanillaSymbol,"\\measuredangle ","&#8737;")
var Digit=P(VanillaSymbol,function(_,t){_.createLeftOf=function(e){if(e.options.autoSubscriptNumerals&&e.parent!==e.parent.parent.sub&&(e[L]instanceof Variable&&e[L].isItalic!==false||e[L]instanceof SupSub&&e[L][L]instanceof Variable&&e[L][L].isItalic!==false)){LatexCmds._().createLeftOf(e)
t.createLeftOf.call(this,e)
e.insRightOf(e.parent.parent)}else t.createLeftOf.call(this,e)}})
var Variable=P(Symbol,function(_,t){_.init=function(e,n){t.init.call(this,e,"<var>"+(n||e)+"</var>")}
_.text=function(){var t=this.ctrlSeq
if(this[L]&&!(this[L]instanceof Variable)&&!(this[L]instanceof BinaryOperator)&&this[L].ctrlSeq!=="\\ ")t="*"+t
if(this[R]&&!(this[R]instanceof BinaryOperator)&&!(this[R]instanceof SupSub))t+="*"
return t}})
Options.p.autoCommands={_maxLength:0}
optionProcessors.autoCommands=function(t){if(!/^[a-z]+(?: [a-z]+)*$/i.test(t)){throw'"'+t+'" not a space-delimited list of only letters'}var e=t.split(" "),n={},i=0
for(var a=0;a<e.length;a+=1){var r=e[a]
if(r.length<2){throw'autocommand "'+r+'" not minimum length of 2'}if(LatexCmds[r]===OperatorName){throw'"'+r+'" is a built-in operator name'}n[r]=1
i=max(i,r.length)}n._maxLength=i
return n}
var Letter=P(Variable,function(_,t){_.init=function(e){return t.init.call(this,this.letter=e)}
_.createLeftOf=function(e){t.createLeftOf.apply(this,arguments)
var n=e.options.autoCommands,i=n._maxLength
if(i>0){var a="",r=this,s=0
while(r instanceof Letter&&r.ctrlSeq===r.letter&&s<i){a=r.letter+a,r=r[L],s+=1}while(a.length){if(n.hasOwnProperty(a)){for(var s=1,r=this;s<a.length;s+=1,r=r[L]);Fragment(r,this).remove()
e[L]=r[L]
return LatexCmds[a](a).createLeftOf(e)}a=a.slice(1)}}}
_.italicize=function(t){this.isItalic=t
this.jQ.toggleClass("mq-operator-name",!t)
return this}
_.finalizeTree=_.siblingDeleted=_.siblingCreated=function(t,e){if(e!==L&&this[R]instanceof Letter)return
this.autoUnItalicize(t)}
_.autoUnItalicize=function(t){var n=t.autoOperatorNames
if(n._maxLength===0)return
var i=this.letter
for(var a=this[L];a instanceof Letter;a=a[L])i=a.letter+i
for(var r=this[R];r instanceof Letter;r=r[R])i+=r.letter
Fragment(a[R]||this.parent.ends[L],r[L]||this.parent.ends[R]).each(function(t){t.italicize(true).jQ.removeClass("mq-first mq-last mq-followed-by-supsub")
t.ctrlSeq=t.letter})
t:for(var s=0,o=a[R]||this.parent.ends[L];s<i.length;s+=1,o=o[R]){for(var l=min(n._maxLength,i.length-s);l>0;l-=1){var d=i.slice(s,s+l)
if(n.hasOwnProperty(d)){for(var c=0,u=o;c<l;c+=1,u=u[R]){u.italicize(false)
var m=u}var f=BuiltInOpNames.hasOwnProperty(d)
o.ctrlSeq=(f?"\\":"\\operatorname{")+o.ctrlSeq
m.ctrlSeq+=f?" ":"}"
if(TwoWordOpNames.hasOwnProperty(d))m[L][L][L].jQ.addClass("mq-last")
if(!e(o[L]))o.jQ.addClass("mq-first")
if(!e(m[R])){if(m[R]instanceof SupSub){var h=m[R]
var p=h.siblingCreated=h.siblingDeleted=function(){h.jQ.toggleClass("mq-after-operator-name",!(h[R]instanceof Bracket))}
p()}else{m.jQ.toggleClass("mq-last",!(m[R]instanceof Bracket))}}s+=l-1
o=m
continue t}}}}
function e(t){return!t||t instanceof BinaryOperator||t instanceof SummationNotation}})
var BuiltInOpNames={}
var AutoOpNames=Options.p.autoOperatorNames={_maxLength:9}
var TwoWordOpNames={limsup:1,liminf:1,projlim:1,injlim:1};(function(){var t=("arg deg det dim exp gcd hom inf ker lg lim ln log max min sup"+" limsup liminf injlim projlim Pr").split(" ")
for(var e=0;e<t.length;e+=1){BuiltInOpNames[t[e]]=AutoOpNames[t[e]]=1}var n="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ")
for(var e=0;e<n.length;e+=1){BuiltInOpNames[n[e]]=1}var i="sin cos tan sec cosec csc cotan cot ctg".split(" ")
for(var e=0;e<i.length;e+=1){AutoOpNames[i[e]]=AutoOpNames["arc"+i[e]]=AutoOpNames[i[e]+"h"]=AutoOpNames["ar"+i[e]+"h"]=AutoOpNames["arc"+i[e]+"h"]=1}var a="gcf hcf lcm proj span".split(" ")
for(var e=0;e<a.length;e+=1){AutoOpNames[a[e]]=1}})()
optionProcessors.autoOperatorNames=function(t){if(!/^[a-z]+(?: [a-z]+)*$/i.test(t)){throw'"'+t+'" not a space-delimited list of only letters'}var e=t.split(" "),n={},i=0
for(var a=0;a<e.length;a+=1){var r=e[a]
if(r.length<2){throw'"'+r+'" not minimum length of 2'}n[r]=1
i=max(i,r.length)}n._maxLength=i
return n}
var OperatorName=P(Symbol,function(_,t){_.init=function(t){this.ctrlSeq=t}
_.createLeftOf=function(t){var e=this.ctrlSeq
for(var n=0;n<e.length;n+=1){Letter(e.charAt(n)).createLeftOf(t)}}
_.parser=function(){var t=this.ctrlSeq
var e=MathBlock()
for(var n=0;n<t.length;n+=1){Letter(t.charAt(n)).adopt(e,e.ends[R],0)}return Parser.succeed(e.children())}})
for(var fn in AutoOpNames)if(AutoOpNames.hasOwnProperty(fn)){LatexCmds[fn]=OperatorName}LatexCmds.operatorname=P(MathCommand,function(_){_.createLeftOf=noop
_.numBlocks=function(){return 1}
_.parser=function(){return latexMathParser.block.map(function(t){return t.children()})}})
LatexCmds.f=P(Letter,function(_,t){_.init=function(){Symbol.p.init.call(this,this.letter="f",'<var class="mq-f">f</var>')}
_.italicize=function(e){this.jQ.html("f").toggleClass("mq-f",e)
return t.italicize.apply(this,arguments)}})
LatexCmds[" "]=LatexCmds.space=bind(VanillaSymbol,"\\ ","&nbsp;")
LatexCmds["'"]=LatexCmds.prime=bind(VanillaSymbol,"'","&prime;")
LatexCmds.backslash=bind(VanillaSymbol,"\\backslash ","\\")
if(!CharCmds["\\"])CharCmds["\\"]=LatexCmds.backslash
LatexCmds.$=bind(VanillaSymbol,"\\$","$")
var NonSymbolaSymbol=P(Symbol,function(_,t){_.init=function(e,n){t.init.call(this,e,'<span class="mq-nonSymbola">'+(n||e)+"</span>")}})
LatexCmds["@"]=NonSymbolaSymbol
LatexCmds["&"]=bind(NonSymbolaSymbol,"\\&","&amp;")
LatexCmds["%"]=bind(NonSymbolaSymbol,"\\%","%")
LatexCmds.alpha=LatexCmds.beta=LatexCmds.gamma=LatexCmds.delta=LatexCmds.zeta=LatexCmds.eta=LatexCmds.theta=LatexCmds.iota=LatexCmds.kappa=LatexCmds.mu=LatexCmds.nu=LatexCmds.xi=LatexCmds.rho=LatexCmds.sigma=LatexCmds.tau=LatexCmds.chi=LatexCmds.psi=LatexCmds.omega=P(Variable,function(_,t){_.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";")}})
LatexCmds.phi=bind(Variable,"\\phi ","&#981;")
LatexCmds.phiv=LatexCmds.varphi=bind(Variable,"\\varphi ","&phi;")
LatexCmds.epsilon=bind(Variable,"\\epsilon ","&#1013;")
LatexCmds.epsiv=LatexCmds.varepsilon=bind(Variable,"\\varepsilon ","&epsilon;")
LatexCmds.piv=LatexCmds.varpi=bind(Variable,"\\varpi ","&piv;")
LatexCmds.sigmaf=LatexCmds.sigmav=LatexCmds.varsigma=bind(Variable,"\\varsigma ","&sigmaf;")
LatexCmds.thetav=LatexCmds.vartheta=LatexCmds.thetasym=bind(Variable,"\\vartheta ","&thetasym;")
LatexCmds.upsilon=LatexCmds.upsi=bind(Variable,"\\upsilon ","&upsilon;")
LatexCmds.gammad=LatexCmds.Gammad=LatexCmds.digamma=bind(Variable,"\\digamma ","&#989;")
LatexCmds.kappav=LatexCmds.varkappa=bind(Variable,"\\varkappa ","&#1008;")
LatexCmds.rhov=LatexCmds.varrho=bind(Variable,"\\varrho ","&#1009;")
LatexCmds.pi=LatexCmds["π"]=bind(NonSymbolaSymbol,"\\pi ","&pi;")
LatexCmds.lambda=bind(NonSymbolaSymbol,"\\lambda ","&lambda;")
LatexCmds.Upsilon=LatexCmds.Upsi=LatexCmds.upsih=LatexCmds.Upsih=bind(Symbol,"\\Upsilon ",'<var style="font-family: serif">&upsih;</var>')
LatexCmds.Gamma=LatexCmds.Delta=LatexCmds.Theta=LatexCmds.Lambda=LatexCmds.Xi=LatexCmds.Pi=LatexCmds.Sigma=LatexCmds.Phi=LatexCmds.Psi=LatexCmds.Omega=LatexCmds.forall=P(VanillaSymbol,function(_,t){_.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";")}})
var LatexFragment=P(MathCommand,function(_){_.init=function(t){this.latex=t}
_.createLeftOf=function(t){var e=latexMathParser.parse(this.latex)
e.children().adopt(t.parent,t[L],t[R])
t[L]=e.ends[R]
e.jQize().insertBefore(t.jQ)
e.finalizeInsert(t.options,t)
if(e.ends[R][R].siblingCreated)e.ends[R][R].siblingCreated(t.options,L)
if(e.ends[L][L].siblingCreated)e.ends[L][L].siblingCreated(t.options,R)
t.parent.bubble("reflow")}
_.parser=function(){var t=latexMathParser.parse(this.latex).children()
return Parser.succeed(t)}})
LatexCmds["¹"]=bind(LatexFragment,"^1")
LatexCmds["²"]=bind(LatexFragment,"^2")
LatexCmds["³"]=bind(LatexFragment,"^3")
LatexCmds["¼"]=bind(LatexFragment,"\\frac14")
LatexCmds["½"]=bind(LatexFragment,"\\frac12")
LatexCmds["¾"]=bind(LatexFragment,"\\frac34")
var PlusMinus=P(BinaryOperator,function(_){_.init=VanillaSymbol.prototype.init
_.contactWeld=_.siblingCreated=_.siblingDeleted=function(t,e){if(e===R)return
this.jQ[0].className=!this[L]||this[L]instanceof BinaryOperator||/^[,;:\(\[]$/.test(this[L].ctrlSeq)?"":"mq-binary-operator"
return this}})
LatexCmds["+"]=bind(PlusMinus,"+","+")
LatexCmds["–"]=LatexCmds["-"]=bind(PlusMinus,"-","&minus;")
LatexCmds["±"]=LatexCmds.pm=LatexCmds.plusmn=LatexCmds.plusminus=bind(PlusMinus,"\\pm ","&plusmn;")
LatexCmds.mp=LatexCmds.mnplus=LatexCmds.minusplus=bind(PlusMinus,"\\mp ","&#8723;")
CharCmds["*"]=LatexCmds.sdot=LatexCmds.cdot=bind(BinaryOperator,"\\cdot ","&middot;","*")
var Inequality=P(BinaryOperator,function(_,t){_.init=function(e,n){this.data=e
this.strict=n
var i=n?"Strict":""
t.init.call(this,e["ctrlSeq"+i],e["html"+i],e["text"+i])}
_.swap=function(t){this.strict=t
var e=t?"Strict":""
this.ctrlSeq=this.data["ctrlSeq"+e]
this.jQ.html(this.data["html"+e])
this.textTemplate=[this.data["text"+e]]}
_.deleteTowards=function(e,n){if(e===L&&!this.strict){this.swap(true)
this.bubble("reflow")
return}t.deleteTowards.apply(this,arguments)}})
var less={ctrlSeq:"\\le ",html:"&le;",text:"≤",ctrlSeqStrict:"<",htmlStrict:"&lt;",textStrict:"<"}
var greater={ctrlSeq:"\\ge ",html:"&ge;",text:"≥",ctrlSeqStrict:">",htmlStrict:"&gt;",textStrict:">"}
LatexCmds["<"]=LatexCmds.lt=bind(Inequality,less,true)
LatexCmds[">"]=LatexCmds.gt=bind(Inequality,greater,true)
LatexCmds["≤"]=LatexCmds.le=LatexCmds.leq=bind(Inequality,less,false)
LatexCmds["≥"]=LatexCmds.ge=LatexCmds.geq=bind(Inequality,greater,false)
var Equality=P(BinaryOperator,function(_,t){_.init=function(){t.init.call(this,"=","=")}
_.createLeftOf=function(e){if(e[L]instanceof Inequality&&e[L].strict){e[L].swap(false)
e[L].bubble("reflow")
return}t.createLeftOf.apply(this,arguments)}})
LatexCmds["="]=Equality
LatexCmds["×"]=LatexCmds.times=bind(BinaryOperator,"\\times ","&times;","[x]")
LatexCmds["÷"]=LatexCmds.div=LatexCmds.divide=LatexCmds.divides=bind(BinaryOperator,"\\div ","&divide;","[/]")
CharCmds["~"]=LatexCmds.sim=bind(BinaryOperator,"\\sim ","~","~")
var scale,forceIERedraw=noop,div=document.createElement("div"),div_style=div.style,transformPropNames={transform:1,WebkitTransform:1,MozTransform:1,OTransform:1,msTransform:1},transformPropName
for(var prop in transformPropNames){if(prop in div_style){transformPropName=prop
break}}if(transformPropName){scale=function(t,e,n){t.css(transformPropName,"scale("+e+","+n+")")}}else if("filter"in div_style){forceIERedraw=function(t){t.className=t.className}
scale=function(t,e,n){e/=1+(n-1)/2
t.css("fontSize",n+"em")
if(!t.hasClass("mq-matrixed-container")){t.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>')}var i=t.children().css("filter","progid:DXImageTransform.Microsoft"+".Matrix(M11="+e+",SizingMethod='auto expand')")
function a(){t.css("marginRight",(i.width()-1)*(e-1)/e+"px")}a()
var r=setInterval(a)
$(window).load(function(){clearTimeout(r)
a()})}}else{scale=function(t,e,n){t.css("fontSize",n+"em")}}var Style=P(MathCommand,function(_,t){_.init=function(e,n,i){t.init.call(this,e,"<"+n+" "+i+">&0</"+n+">")}})
LatexCmds.mathrm=bind(Style,"\\mathrm","span",'class="mq-roman mq-font"')
LatexCmds.mathit=bind(Style,"\\mathit","i",'class="mq-font"')
LatexCmds.mathbf=bind(Style,"\\mathbf","b",'class="mq-font"')
LatexCmds.mathsf=bind(Style,"\\mathsf","span",'class="mq-sans-serif mq-font"')
LatexCmds.mathtt=bind(Style,"\\mathtt","span",'class="mq-monospace mq-font"')
LatexCmds.underline=bind(Style,"\\underline","span",'class="mq-non-leaf mq-underline"')
LatexCmds.overline=LatexCmds.bar=bind(Style,"\\overline","span",'class="mq-non-leaf mq-overline"')
LatexCmds.overrightarrow=bind(Style,"\\overrightarrow","span",'class="mq-non-leaf mq-overarrow mq-arrow-right"')
LatexCmds.overleftarrow=bind(Style,"\\overleftarrow","span",'class="mq-non-leaf mq-overarrow mq-arrow-left"')
var TextColor=LatexCmds.textcolor=P(MathCommand,function(_,t){_.setColor=function(t){this.color=t
this.htmlTemplate='<span class="mq-textcolor" style="color:'+t+'">&0</span>'}
_.latex=function(){return"\\textcolor{"+this.color+"}{"+this.blocks[0].latex()+"}"}
_.parser=function(){var e=this
var n=Parser.optWhitespace
var i=Parser.string
var a=Parser.regex
return n.then(i("{")).then(a(/^[#\w\s.,()%-]*/)).skip(i("}")).then(function(n){e.setColor(n)
return t.parser.call(e)})}})
var Class=LatexCmds["class"]=P(MathCommand,function(_,t){_.parser=function(){var e=this,n=Parser.string,i=Parser.regex
return Parser.optWhitespace.then(n("{")).then(i(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then(function(n){e.htmlTemplate='<span class="mq-class '+n+'">&0</span>'
return t.parser.call(e)})}})
var SupSub=P(MathCommand,function(_,t){_.ctrlSeq="_{...}^{...}"
_.createLeftOf=function(e){if(!e[L]&&e.options.supSubsRequireOperand)return
return t.createLeftOf.apply(this,arguments)}
_.contactWeld=function(t){for(var e=L;e;e=e===L?R:false){if(this[e]instanceof SupSub){for(var n="sub";n;n=n==="sub"?"sup":false){var i=this[n],a=this[e][n]
if(!i)continue
if(!a)this[e].addBlock(i.disown())
else if(!i.isEmpty()){i.jQ.children().insAtDirEnd(-e,a.jQ)
var r=i.children().disown()
var s=Point(a,r.ends[R],a.ends[L])
if(e===L)r.adopt(a,a.ends[R],0)
else r.adopt(a,0,a.ends[L])}else var s=Point(a,0,a.ends[L])
this.placeCursor=function(t,n){return function(i){i.insAtDirEnd(-e,t||n)}}(a,i)}this.remove()
if(t&&t[L]===this){if(e===R&&s){s[L]?t.insRightOf(s[L]):t.insAtLeftEnd(s.parent)}else t.insRightOf(this[e])}break}}this.respace()}
Options.p.charsThatBreakOutOfSupSub=""
_.finalizeTree=function(){this.ends[L].write=function(t,e){if(t.options.autoSubscriptNumerals&&this===this.parent.sub){if(e==="_")return
var n=this.chToCmd(e)
if(n instanceof Symbol)t.deleteSelection()
else t.clearSelection().insRightOf(this.parent)
return n.createLeftOf(t.show())}if(t[L]&&!t[R]&&!t.selection&&t.options.charsThatBreakOutOfSupSub.indexOf(e)>-1){t.insRightOf(this.parent)}MathBlock.p.write.apply(this,arguments)}}
_.moveTowards=function(e,n,i){if(n.options.autoSubscriptNumerals&&!this.sup){n.insDirOf(e,this)}else t.moveTowards.apply(this,arguments)}
_.deleteTowards=function(e,n){if(n.options.autoSubscriptNumerals&&this.sub){var i=this.sub.ends[-e]
if(i instanceof Symbol)i.remove()
else if(i)i.deleteTowards(e,n.insAtDirEnd(-e,this.sub))
if(this.sub.isEmpty()){this.sub.deleteOutOf(L,n.insAtLeftEnd(this.sub))
if(this.sup)n.insDirOf(-e,this)}}else t.deleteTowards.apply(this,arguments)}
_.latex=function(){function t(t,e){var n=e&&e.latex()
return e?t+(n.length===1?n:"{"+(n||" ")+"}"):""}return t("_",this.sub)+t("^",this.sup)}
_.respace=_.siblingCreated=_.siblingDeleted=function(t,e){if(e===R)return
this.jQ.toggleClass("mq-limit",this[L].ctrlSeq==="\\int ")}
_.addBlock=function(t){if(this.supsub==="sub"){this.sup=this.upInto=this.sub.upOutOf=t
t.adopt(this,this.sub,0).downOutOf=this.sub
t.jQ=$('<span class="mq-sup"/>').append(t.jQ.children()).attr(mqBlockId,t.id).prependTo(this.jQ)}else{this.sub=this.downInto=this.sup.downOutOf=t
t.adopt(this,0,this.sup).upOutOf=this.sup
t.jQ=$('<span class="mq-sub"></span>').append(t.jQ.children()).attr(mqBlockId,t.id).appendTo(this.jQ.removeClass("mq-sup-only"))
this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>')}for(var e=0;e<2;e+=1)(function(t,e,n,i){t[e].deleteOutOf=function(a,r){r.insDirOf(this[a]?-a:a,this.parent)
if(!this.isEmpty()){var s=this.ends[a]
this.children().disown().withDirAdopt(a,r.parent,r[a],r[-a]).jQ.insDirOf(-a,r.jQ)
r[-a]=s}t.supsub=n
delete t[e]
delete t[i+"Into"]
t[n][i+"OutOf"]=insLeftOfMeUnlessAtEnd
delete t[n].deleteOutOf
if(e==="sub")$(t.jQ.addClass("mq-sup-only")[0].lastChild).remove()
this.remove()}})(this,"sub sup".split(" ")[e],"sup sub".split(" ")[e],"down up".split(" ")[e])}})
function insLeftOfMeUnlessAtEnd(t){var e=this.parent,n=t
do{if(n[R])return t.insLeftOf(e)
n=n.parent.parent}while(n!==e)
t.insRightOf(e)}LatexCmds.subscript=LatexCmds._=P(SupSub,function(_,t){_.supsub="sub"
_.htmlTemplate='<span class="mq-supsub mq-non-leaf">'+'<span class="mq-sub">&0</span>'+'<span style="display:inline-block;width:0">&#8203;</span>'+"</span>"
_.textTemplate=["_"]
_.finalizeTree=function(){this.downInto=this.sub=this.ends[L]
this.sub.upOutOf=insLeftOfMeUnlessAtEnd
t.finalizeTree.call(this)}})
LatexCmds.superscript=LatexCmds.supscript=LatexCmds["^"]=P(SupSub,function(_,t){_.supsub="sup"
_.htmlTemplate='<span class="mq-supsub mq-non-leaf mq-sup-only">'+'<span class="mq-sup">&0</span>'+"</span>"
_.textTemplate=["^"]
_.finalizeTree=function(){this.upInto=this.sup=this.ends[R]
this.sup.downOutOf=insLeftOfMeUnlessAtEnd
t.finalizeTree.call(this)}})
var SummationNotation=P(MathCommand,function(_,t){_.init=function(t,e){var n='<span class="mq-large-operator mq-non-leaf">'+'<span class="mq-to"><span>&1</span></span>'+"<big>"+e+"</big>"+'<span class="mq-from"><span>&0</span></span>'+"</span>"
Symbol.prototype.init.call(this,t,n)}
_.createLeftOf=function(e){t.createLeftOf.apply(this,arguments)
if(e.options.sumStartsWithNEquals){Letter("n").createLeftOf(e)
Equality().createLeftOf(e)}}
_.latex=function(){function t(t){return t.length===1?t:"{"+(t||" ")+"}"}return this.ctrlSeq+"_"+t(this.ends[L].latex())+"^"+t(this.ends[R].latex())}
_.parser=function(){var t=Parser.string
var e=Parser.optWhitespace
var n=Parser.succeed
var i=latexMathParser.block
var a=this
var r=a.blocks=[MathBlock(),MathBlock()]
for(var s=0;s<r.length;s+=1){r[s].adopt(a,a.ends[R],0)}return e.then(t("_").or(t("^"))).then(function(t){var e=r[t==="_"?0:1]
return i.then(function(t){t.children().adopt(e,e.ends[R],0)
return n(a)})}).many().result(a)}
_.finalizeTree=function(){this.downInto=this.ends[L]
this.upInto=this.ends[R]
this.ends[L].upOutOf=this.ends[R]
this.ends[R].downOutOf=this.ends[L]}})
LatexCmds["∑"]=LatexCmds.sum=LatexCmds.summation=bind(SummationNotation,"\\sum ","&sum;")
LatexCmds["∏"]=LatexCmds.prod=LatexCmds.product=bind(SummationNotation,"\\prod ","&prod;")
LatexCmds.coprod=LatexCmds.coproduct=bind(SummationNotation,"\\coprod ","&#8720;")
LatexCmds["∫"]=LatexCmds["int"]=LatexCmds.integral=bind(Symbol,"\\int ","<big>&int;</big>")
var Fraction=LatexCmds.frac=LatexCmds.dfrac=LatexCmds.cfrac=LatexCmds.fraction=P(MathCommand,function(_,t){_.ctrlSeq="\\frac"
_.htmlTemplate='<span class="mq-fraction mq-non-leaf">'+'<span class="mq-numerator">&0</span>'+'<span class="mq-denominator">&1</span>'+'<span style="display:inline-block;width:0">&#8203;</span>'+"</span>"
_.textTemplate=["(",")/(",")"]
_.finalizeTree=function(){this.upInto=this.ends[R].upOutOf=this.ends[L]
this.downInto=this.ends[L].downOutOf=this.ends[R]}})
var LiveFraction=LatexCmds.over=CharCmds["/"]=P(Fraction,function(_,t){_.createLeftOf=function(e){if(!this.replacedFragment){var n=e[L]
while(n&&!(n instanceof BinaryOperator||n instanceof(LatexCmds.text||noop)||n instanceof SummationNotation||n.ctrlSeq==="\\ "||/^[,;:]$/.test(n.ctrlSeq)))n=n[L]
if(n instanceof SummationNotation&&n[R]instanceof SupSub){n=n[R]
if(n[R]instanceof SupSub&&n[R].ctrlSeq!=n.ctrlSeq)n=n[R]}if(n!==e[L]){this.replaces(Fragment(n[R]||e.parent.ends[L],e[L]))
e[L]=n}}t.createLeftOf.call(this,e)}})
var SquareRoot=LatexCmds.sqrt=LatexCmds["√"]=P(MathCommand,function(_,t){_.ctrlSeq="\\sqrt"
_.htmlTemplate='<span class="mq-non-leaf">'+'<span class="mq-scaled mq-sqrt-prefix">&radic;</span>'+'<span class="mq-non-leaf mq-sqrt-stem">&0</span>'+"</span>"
_.textTemplate=["sqrt(",")"]
_.parser=function(){return latexMathParser.optBlock.then(function(t){return latexMathParser.block.map(function(e){var n=NthRoot()
n.blocks=[t,e]
t.adopt(n,0,0)
e.adopt(n,t,0)
return n})}).or(t.parser.call(this))}
_.reflow=function(){var t=this.ends[R].jQ
scale(t.prev(),1,t.innerHeight()/+t.css("fontSize").slice(0,-2)-.1)}})
var Vec=LatexCmds.vec=P(MathCommand,function(_,t){_.ctrlSeq="\\vec"
_.htmlTemplate='<span class="mq-non-leaf">'+'<span class="mq-vector-prefix">&rarr;</span>'+'<span class="mq-vector-stem">&0</span>'+"</span>"
_.textTemplate=["vec(",")"]})
var NthRoot=LatexCmds.nthroot=P(SquareRoot,function(_,t){_.htmlTemplate='<sup class="mq-nthroot mq-non-leaf">&0</sup>'+'<span class="mq-scaled">'+'<span class="mq-sqrt-prefix mq-scaled">&radic;</span>'+'<span class="mq-sqrt-stem mq-non-leaf">&1</span>'+"</span>"
_.textTemplate=["sqrt[","](",")"]
_.latex=function(){return"\\sqrt["+this.ends[L].latex()+"]{"+this.ends[R].latex()+"}"}})
function DelimsMixin(_,t){_.jQadd=function(){t.jQadd.apply(this,arguments)
this.delimjQs=this.jQ.children(":first").add(this.jQ.children(":last"))
this.contentjQ=this.jQ.children(":eq(1)")}
_.reflow=function(){var t=this.contentjQ.outerHeight()/parseFloat(this.contentjQ.css("fontSize"))
scale(this.delimjQs,min(1+.2*(t-1),1.2),1.2*t)}}var Bracket=P(P(MathCommand,DelimsMixin),function(_,t){_.init=function(e,n,i,a,r){t.init.call(this,"\\left"+a,undefined,[n,i])
this.side=e
this.sides={}
this.sides[L]={ch:n,ctrlSeq:a}
this.sides[R]={ch:i,ctrlSeq:r}}
_.numBlocks=function(){return 1}
_.html=function(){this.htmlTemplate='<span class="mq-non-leaf">'+'<span class="mq-scaled mq-paren'+(this.side===R?" mq-ghost":"")+'">'+this.sides[L].ch+"</span>"+'<span class="mq-non-leaf">&0</span>'+'<span class="mq-scaled mq-paren'+(this.side===L?" mq-ghost":"")+'">'+this.sides[R].ch+"</span>"+"</span>"
return t.html.call(this)}
_.latex=function(){return"\\left"+this.sides[L].ctrlSeq+this.ends[L].latex()+"\\right"+this.sides[R].ctrlSeq}
_.oppBrack=function(t,e,n){return e instanceof Bracket&&e.side&&e.side!==-n&&(this.sides[this.side].ch==="|"||e.side===-this.side)&&(!t.restrictMismatchedBrackets||OPP_BRACKS[this.sides[this.side].ch]===e.sides[e.side].ch||{"(":"]","[":")"}[this.sides[L].ch]===e.sides[R].ch)&&e}
_.closeOpposing=function(t){t.side=0
t.sides[this.side]=this.sides[this.side]
t.delimjQs.eq(this.side===L?0:1).removeClass("mq-ghost").html(this.sides[this.side].ch)}
_.createLeftOf=function(e){if(!this.replacedFragment){var n=e.options
var i=this.oppBrack(n,e[L],L)||this.oppBrack(n,e[R],R)||this.oppBrack(n,e.parent.parent)}if(i){var a=this.side=-i.side
this.closeOpposing(i)
if(i===e.parent.parent&&e[a]){Fragment(e[a],e.parent.ends[a],-a).disown().withDirAdopt(-a,i.parent,i,i[a]).jQ.insDirOf(a,i.jQ)
i.bubble("reflow")}}else{i=this,a=i.side
if(i.replacedFragment)i.side=0
else if(e[-a]){i.replaces(Fragment(e[-a],e.parent.ends[-a],a))
e[-a]=0}t.createLeftOf.call(i,e)}if(a===L)e.insAtLeftEnd(i.ends[L])
else e.insRightOf(i)}
_.placeCursor=noop
_.unwrap=function(){this.ends[L].children().disown().adopt(this.parent,this,this[R]).jQ.insertAfter(this.jQ)
this.remove()}
_.deleteSide=function(t,e,n){var i=this.parent,a=this[t],r=i.ends[t]
if(t===this.side){this.unwrap()
a?n.insDirOf(-t,a):n.insAtDirEnd(t,i)
return}var s=n.options,o=!this.side
this.side=-t
if(this.oppBrack(s,this.ends[L].ends[this.side],t)){this.closeOpposing(this.ends[L].ends[this.side])
var l=this.ends[L].ends[t]
this.unwrap()
if(l.siblingCreated)l.siblingCreated(n.options,t)
a?n.insDirOf(-t,a):n.insAtDirEnd(t,i)}else{if(this.oppBrack(s,this.parent.parent,t)){this.parent.parent.closeOpposing(this)
this.parent.parent.unwrap()}else if(e&&o){this.unwrap()
a?n.insDirOf(-t,a):n.insAtDirEnd(t,i)
return}else{this.sides[t]={ch:OPP_BRACKS[this.sides[this.side].ch],ctrlSeq:OPP_BRACKS[this.sides[this.side].ctrlSeq]}
this.delimjQs.removeClass("mq-ghost").eq(t===L?0:1).addClass("mq-ghost").html(this.sides[t].ch)}if(a){var l=this.ends[L].ends[t]
Fragment(a,r,-t).disown().withDirAdopt(-t,this.ends[L],l,0).jQ.insAtDirEnd(t,this.ends[L].jQ.removeClass("mq-empty"))
if(l.siblingCreated)l.siblingCreated(n.options,t)
n.insDirOf(-t,a)}else e?n.insDirOf(t,this):n.insAtDirEnd(t,this.ends[L])}}
_.deleteTowards=function(t,e){this.deleteSide(-t,false,e)}
_.finalizeTree=function(){this.ends[L].deleteOutOf=function(t,e){this.parent.deleteSide(t,true,e)}
this.finalizeTree=this.intentionalBlur=function(){this.delimjQs.eq(this.side===L?1:0).removeClass("mq-ghost")
this.side=0}}
_.siblingCreated=function(t,e){if(e===-this.side)this.finalizeTree()}})
var OPP_BRACKS={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{","&lang;":"&rang;","&rang;":"&lang;","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|"}
function bindCharBracketPair(t,e){var e=e||t,n=OPP_BRACKS[t],i=OPP_BRACKS[e]
CharCmds[t]=bind(Bracket,L,t,n,e,i)
CharCmds[n]=bind(Bracket,R,t,n,e,i)}bindCharBracketPair("(")
bindCharBracketPair("[")
bindCharBracketPair("{","\\{")
LatexCmds.langle=bind(Bracket,L,"&lang;","&rang;","\\langle ","\\rangle ")
LatexCmds.rangle=bind(Bracket,R,"&lang;","&rang;","\\langle ","\\rangle ")
CharCmds["|"]=bind(Bracket,L,"|","|","|","|")
LatexCmds.left=P(MathCommand,function(_){_.parser=function(){var t=Parser.regex
var e=Parser.string
var n=Parser.succeed
var i=Parser.optWhitespace
return i.then(t(/^(?:[([|]|\\\{)/)).then(function(n){var a=n.charAt(0)==="\\"?n.slice(1):n
return latexMathParser.then(function(r){return e("\\right").skip(i).then(t(/^(?:[\])|]|\\\})/)).map(function(t){var e=t.charAt(0)==="\\"?t.slice(1):t
var i=Bracket(0,a,e,n,t)
i.blocks=[r]
r.adopt(i,0,0)
return i})})})}})
LatexCmds.right=P(MathCommand,function(_){_.parser=function(){return Parser.fail("unmatched \\right")}})
var Binomial=LatexCmds.binom=LatexCmds.binomial=P(P(MathCommand,DelimsMixin),function(_,t){_.ctrlSeq="\\binom"
_.htmlTemplate='<span class="mq-non-leaf">'+'<span class="mq-paren mq-scaled">(</span>'+'<span class="mq-non-leaf">'+'<span class="mq-array mq-non-leaf">'+"<span>&0</span>"+"<span>&1</span>"+"</span>"+"</span>"+'<span class="mq-paren mq-scaled">)</span>'+"</span>"
_.textTemplate=["choose(",",",")"]})
var Choose=LatexCmds.choose=P(Binomial,function(_){_.createLeftOf=LiveFraction.prototype.createLeftOf})
LatexCmds.editable=LatexCmds.MathQuillMathField=P(MathCommand,function(_,t){_.ctrlSeq="\\MathQuillMathField"
_.htmlTemplate='<span class="mq-editable-field">'+'<span class="mq-root-block">&0</span>'+"</span>"
_.parser=function(){var e=this,n=Parser.string,i=Parser.regex,a=Parser.succeed
return n("[").then(i(/^[a-z][a-z0-9]*/i)).skip(n("]")).map(function(t){e.name=t}).or(a()).then(t.parser.call(e))}
_.finalizeTree=function(){var t=Controller(this.ends[L],this.jQ,Options())
t.KIND_OF_MQ="MathField"
t.editable=true
t.createTextarea()
t.editablesTextareaEvents()
t.cursor.insAtRightEnd(t.root)
RootBlockMixin(t.root)}
_.registerInnerField=function(t,e){t.push(t[this.name]=e(this.ends[L].controller))}
_.latex=function(){return this.ends[L].latex()}
_.text=function(){return this.ends[L].text()}})
var Embed=LatexCmds.embed=P(Symbol,function(_,t){_.setOptions=function(t){function e(){return""}this.text=t.text||e
this.htmlTemplate=t.htmlString||""
this.latex=t.latex||e
return this}
_.parser=function(){var t=this
string=Parser.string,regex=Parser.regex,succeed=Parser.succeed
return string("{").then(regex(/^[a-z][a-z0-9]*/i)).skip(string("}")).then(function(e){return string("[").then(regex(/^[-\w\s]*/)).skip(string("]")).or(succeed()).map(function(n){return t.setOptions(EMBEDS[e](n))})})}})
var MQ1=getInterface(1)
for(var key in MQ1)(function(t,e){if(typeof e==="function"){MathQuill[t]=function(){insistOnInterVer()
return e.apply(this,arguments)}
MathQuill[t].prototype=e.prototype}else MathQuill[t]=e})(key,MQ1[key])
module.exports=MathQuill

});
KAdefine("javascript/node_modules/mathquill/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/mathquill/build/mathquill-basic.js")

});
KAdefine("third_party/javascript-khansrc/math-input/math-input.js", function(require, module, exports) {
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom"),require("react-redux"),require("aphrodite"),require("react-addons-css-transition-group"),require("katex"),require("redux"),require("jquery"),require("mathquill")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom","react-redux","aphrodite","react-addons-css-transition-group","katex","redux","jquery","mathquill"],t):"object"==typeof exports?exports["math-input"]=t(require("react"),require("prop-types"),require("react-dom"),require("react-redux"),require("aphrodite"),require("react-addons-css-transition-group"),require("katex"),require("redux"),require("jquery"),require("mathquill")):e["math-input"]=t(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(this,function(e,t,n,r,o,i,a,s,c,l){return function(e){function t(r){if(n[r])return n[r].exports
var o=n[r]={exports:{},id:r,loaded:!1}
return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={}
return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict"
var r={Keypad:n(1),KeypadInput:n(95)},o=n(66),i=o.KeypadTypes,a={KeypadTypes:i},s=n(67),c=s.keypadConfigurationPropType,l=s.keypadElementPropType,u={keypadConfigurationPropType:c,keypadElementPropType:l}
e.exports={components:r,consts:a,propTypes:u}},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=n(3),u=n(4),p=n(5),h=p.Provider,f=n(6),d=n(13),y=d.activateKeypad,m=d.dismissKeypad,b=d.configureKeypad,E=d.setCursor,v=d.setKeyHandler,g=n(89),T=function(e){function t(){var n,r,a
o(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=r=i(this,e.call.apply(e,[this].concat(c))),r.activate=function(){r.store.dispatch(y())},r.dismiss=function(){r.store.dispatch(m())},r.configure=function(e,t){r.store.dispatch(b(e)),setTimeout(function(){return t&&t()})},r.setCursor=function(e){r.store.dispatch(E(e))},r.setKeyHandler=function(e){r.store.dispatch(v(e))},r.getDOMNode=function(){return u.findDOMNode(r)},a=n,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){this.store=g()},t.prototype.render=function(){var e=this,t=this.props,n=t.onElementMounted,o=r(t,["onElementMounted"])
return c.createElement(h,{store:this.store},c.createElement(f,s({onElementMounted:function(t){var r=s({},t,{activate:e.activate,dismiss:e.dismiss,configure:e.configure,setCursor:e.setCursor,setKeyHandler:e.setKeyHandler,getDOMNode:e.getDOMNode})
n&&n(r)}},o)))},t}(c.Component)
T.propTypes={onElementMounted:l.func},e.exports=T},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(5),u=l.connect,p=n(7),h=p.StyleSheet,f=n(8),d=f.View,y=n(11),m=n(82),b=n(88),E=n(74),v=n(13),g=v.setPageSize,T=n(67),O=T.keyIdPropType,_=n(66),w=_.KeypadTypes,P=_.LayoutModes,R=n(20),C=R.row,M=R.centered,N=R.fullWidth,S=n(21),k=S.innerBorderColor,x=S.innerBorderStyle,A=S.innerBorderWidthPx,L=S.compactKeypadBorderRadiusPx,I=function(e){function t(){var n,i,a
r(this,t)
for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u]
return n=i=o(this,e.call.apply(e,[this].concat(l))),i.state={hasBeenActivated:!1,viewportWidth:"100vw"},i._throttleResizeHandler=function(){null==i._resizeTimeout&&(i._resizeTimeout=setTimeout(function(){i._resizeTimeout=null,i._onResize()},66))},i._onResize=function(){i.setState({viewportWidth:window.innerWidth}),i.props.onPageSizeChange(window.innerWidth,window.innerHeight)},i.renderKeypad=function(){var e=i.props,t=e.extraKeys,n=e.keypadType,r=e.layoutMode,o=e.navigationPadEnabled,a={extraKeys:t,roundTopLeft:r===P.COMPACT&&!o,roundTopRight:r===P.COMPACT}
switch(n){case w.FRACTION:return s.createElement(y,a)
case w.EXPRESSION:return s.createElement(m,a)
default:throw new Error("Invalid keypad type: "+n)}},a=n,o(i,a)}return i(t,e),t.prototype.componentWillMount=function(){this.props.active&&this.setState({hasBeenActivated:this.props.active})},t.prototype.componentDidMount=function(){this._onResize(),window.addEventListener("resize",this._throttleResizeHandler),window.addEventListener("orientationchange",this._throttleResizeHandler)},t.prototype.componentWillReceiveProps=function(e){!this.state.hasBeenActivated&&e.active&&this.setState({hasBeenActivated:!0})},t.prototype.componentDidUpdate=function(e){e.active&&!this.props.active&&this.props.onDismiss&&this.props.onDismiss()},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this._throttleResizeHandler),window.removeEventListener("orientationchange",this._throttleResizeHandler)},t.prototype.render=function(){var e=this,t=this.props,n=t.active,r=t.layoutMode,o=t.navigationPadEnabled,i=t.onElementMounted,c=t.style,l=this.state.hasBeenActivated,u=a({},n?U.active:U.hidden,n||l?{}:U.invisible),p=[C,M,N,F.keypadContainer].concat(Array.isArray(c)?c:[c]),h=[C,F.keypadBorder,r===P.FULLSCREEN?F.fullscreen:F.compact]
return s.createElement(d,{style:p,dynamicStyle:u,extraClassName:"keypad-container"},s.createElement(d,{style:h,ref:function(t){!e.hasMounted&&t&&(e.hasMounted=!0,i(t))}},o&&s.createElement(b,{roundTopLeft:r===P.COMPACT,style:F.navigationPadContainer}),s.createElement(d,{style:F.keypadLayout},this.renderKeypad())))},t}(s.Component)
I.propTypes={active:c.bool,extraKeys:c.arrayOf(O),keypadType:c.oneOf(Object.keys(w)).isRequired,layoutMode:c.oneOf(Object.keys(P)).isRequired,navigationPadEnabled:c.bool.isRequired,onDismiss:c.func,onElementMounted:c.func,onPageSizeChange:c.func.isRequired,style:c.any}
var j=300,B=1,F=h.create({keypadContainer:{bottom:0,left:0,right:0,position:"fixed",transition:j+"ms ease-out",transitionProperty:"transform",zIndex:E.keypad},keypadBorder:{boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.1)",borderColor:"rgba(0, 0, 0, 0.2)",borderStyle:"solid"},fullscreen:{borderTopWidth:B},compact:{borderTopRightRadius:L,borderTopLeftRadius:L,borderTopWidth:B,borderRightWidth:B,borderLeftWidth:B},navigationPadContainer:{borderRight:A+"px "+x+" "+k,boxSizing:"content-box"},keypadLayout:{flexGrow:1,flexBasis:"0%"}}),U={invisible:{visibility:"hidden"},hidden:{msTransform:"translate3d(0, 100%, 0)",WebkitTransform:"translate3d(0, 100%, 0)",transform:"translate3d(0, 100%, 0)"},active:{msTransform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}},D=function(e){return a({},e.keypad,{layoutMode:e.layout.layoutMode,navigationPadEnabled:e.layout.navigationPadEnabled})},z=function(e){return{onPageSizeChange:function(t,n){e(g(t,n))}}}
e.exports=u(D,z)(I)},function(e,t){e.exports=o},function(e,t,n){"use strict"
e.exports={Text:n(9),View:n(10)}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=c.css,p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.numberOfLines,n=e.style,r=u.apply(void 0,[h.initial].concat(Array.isArray(n)?n:[n],[1===t&&h.singleLineStyle]))
return a.createElement("span",{className:r,style:this.props.dynamicStyle},this.props.children)},t}(a.Component)
p.propTypes={children:s.oneOfType([s.arrayOf(s.node),s.node]),dynamicStyle:s.any,numberOfLines:s.number,style:s.any}
var h=l.create({initial:{color:"inherit",display:"inline",font:"inherit",margin:0,padding:0,textDecorationLine:"none",wordWrap:"break-word"},singleLineStyle:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}})
e.exports=p},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=c.css,p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=u.apply(void 0,[t.styles.initial].concat(Array.isArray(this.props.style)?this.props.style:[this.props.style]))+(this.props.extraClassName?" "+this.props.extraClassName:"")
return a.createElement("div",{className:e,style:this.props.dynamicStyle,onClick:this.props.onClick,onTouchCancel:this.props.onTouchCancel,onTouchEnd:this.props.onTouchEnd,onTouchMove:this.props.onTouchMove,onTouchStart:this.props.onTouchStart,"aria-label":this.props.ariaLabel,role:this.props.role},this.props.children)},t}(a.Component)
p.propTypes={ariaLabel:s.string,children:s.oneOfType([s.arrayOf(s.node),s.node]),dynamicStyle:s.any,extraClassName:s.string,numberOfLines:s.number,onClick:s.func,onTouchCancel:s.func,onTouchEnd:s.func,onTouchMove:s.func,onTouchStart:s.func,role:s.string,style:s.any},p.styles=l.create({initial:{alignItems:"stretch",borderWidth:0,borderStyle:"solid",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",margin:0,padding:0,position:"relative",backgroundColor:"transparent",color:"inherit",font:"inherit",textAlign:"inherit",textDecorationLine:"none",listStyle:"none",maxWidth:"100%",minHeight:0,minWidth:0}}),e.exports=p},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(5),l=c.connect,u=n(8),p=u.View,h=n(12),f=n(77),d=n(20),y=d.row,m=d.roundedTopLeft,b=d.roundedTopRight,E=n(66),v=E.BorderStyles,g=n(71),T=n(67),O=T.cursorContextPropType,_=n(68),w=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.cursorContext,n=e.dynamicJumpOut,r=e.roundTopLeft,o=e.roundTopRight,i=void 0
if(n)switch(t){case g.IN_PARENS:i=_.JUMP_OUT_PARENTHESES
break
case g.IN_SUPER_SCRIPT:i=_.JUMP_OUT_EXPONENT
break
case g.IN_SUB_SCRIPT:i=_.JUMP_OUT_BASE
break
case g.BEFORE_FRACTION:i=_.JUMP_INTO_NUMERATOR
break
case g.IN_NUMERATOR:i=_.JUMP_OUT_NUMERATOR
break
case g.IN_DENOMINATOR:i=_.JUMP_OUT_DENOMINATOR
break
case g.NONE:default:i=_.DISMISS}else i=_.DISMISS
return a.createElement(h,null,a.createElement(p,{style:y},a.createElement(f,{keyConfig:_.NUM_7,borders:v.NONE,style:r&&m}),a.createElement(f,{keyConfig:_.NUM_8,borders:v.NONE}),a.createElement(f,{keyConfig:_.NUM_9,borders:v.NONE}),a.createElement(f,{keyConfig:_.FRAC,disabled:t===g.IN_NUMERATOR||t===g.IN_DENOMINATOR,style:o&&b})),a.createElement(p,{style:y},a.createElement(f,{keyConfig:_.NUM_4,borders:v.NONE}),a.createElement(f,{keyConfig:_.NUM_5,borders:v.NONE}),a.createElement(f,{keyConfig:_.NUM_6,borders:v.NONE}),a.createElement(f,{keyConfig:_.PERCENT})),a.createElement(p,{style:y},a.createElement(f,{keyConfig:_.NUM_1,borders:v.BOTTOM}),a.createElement(f,{keyConfig:_.NUM_2,borders:v.NONE}),a.createElement(f,{keyConfig:_.NUM_3,borders:v.BOTTOM}),a.createElement(f,{keyConfig:_.BACKSPACE,borders:v.LEFT})),a.createElement(p,{style:y},a.createElement(f,{keyConfig:_.NEGATIVE,borders:v.NONE}),a.createElement(f,{keyConfig:_.NUM_0,borders:v.LEFT}),a.createElement(f,{keyConfig:_.DECIMAL,borders:v.LEFT}),a.createElement(f,{keyConfig:i,borders:v.LEFT})))},t}(a.Component)
w.propTypes={cursorContext:O.isRequired,dynamicJumpOut:s.bool,roundTopLeft:s.bool,roundTopRight:s.bool},w.rows=4,w.columns=4,w.maxVisibleRows=5,w.numPages=1
var P=function(e){return{cursorContext:e.input.cursor.context,dynamicJumpOut:!e.layout.navigationPadEnabled}}
e.exports=l(P)(w)},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=n(3),u=n(4),p=n(5),h=p.connect,f=n(13),d=f.removeEcho,y=n(8),m=y.View,b=n(14),E=n(75),v=n(67),g=v.echoPropType,T=v.popoverPropType,O=function(e){function t(){var n,r,a
o(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=r=i(this,e.call.apply(e,[this].concat(c))),r._computeContainer=function(){var e=u.findDOMNode(r)
r._container=e.getBoundingClientRect()},r._updateSizeAndPosition=function(){r._container=null},r._onResize=function(){null==r._resizeTimeout&&(r._resizeTimeout=setTimeout(function(){r._resizeTimeout=null,r._isMounted&&r._updateSizeAndPosition()},66))},a=n,i(r,a)}return a(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,window.addEventListener("resize",this._onResize),this._updateSizeAndPosition()},t.prototype.componentWillReceiveProps=function(e){this._container||!e.popover&&!e.echoes.length||this._computeContainer()},t.prototype.componentWillUnmount=function(){this._isMounted=!1,window.removeEventListener("resize",this._onResize)},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.echoes,i=t.removeEcho,a=t.popover,l=t.style,u=o.map(function(t){var n=t.initialBounds,o=r(t,["initialBounds"])
return s({},o,{initialBounds:{top:n.top-e._container.top,right:n.right-e._container.left,bottom:n.bottom-e._container.top,left:n.left-e._container.left,width:n.width,height:n.height}})}),p=a&&s({},a,{bounds:{bottom:this._container.height-(a.bounds.bottom-this._container.top),left:a.bounds.left-this._container.left,width:a.bounds.width}})
return c.createElement(m,{style:l},n,c.createElement(b,{echoes:u,onAnimationFinish:i}),c.createElement(E,{popover:p}))},t}(c.Component)
O.propTypes={active:l.bool,children:l.oneOfType([l.arrayOf(l.node),l.node]),echoes:l.arrayOf(g).isRequired,popover:T,removeEcho:l.func.isRequired,style:l.any}
var _=function(e){return s({},e.echoes,{active:e.keypad.active,popover:e.gestures.popover})},w=function(e){return{removeEcho:function(t){e(d(t))}}}
e.exports=h(_,w)(O)},function(e,t){"use strict"
e.exports={dismissKeypad:function(){return{type:"DismissKeypad"}},activateKeypad:function(){return{type:"ActivateKeypad"}},configureKeypad:function(e){return{type:"ConfigureKeypad",configuration:e}},setPageSize:function(e,t){return{type:"SetPageSize",pageWidthPx:e,pageHeightPx:t}},removeEcho:function(e){return{type:"RemoveEcho",animationId:e}},setKeyHandler:function(e){return{type:"SetKeyHandler",keyHandler:e}},setCursor:function(e){return{type:"SetCursor",cursor:e}}}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(15),u=n(16),p=n(68),h=n(66),f=h.KeyTypes,d=h.EchoAnimationTypes,y=n(67),m=y.echoPropType,b=y.bordersPropType,E=y.boundingBoxPropType,v=y.keyIdPropType,g=n(74),T=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.animationDurationMs,n=e.onAnimationFinish
setTimeout(function(){return n()},t)},t.prototype.render=function(){var e=this.props,t=e.borders,n=e.id,r=e.initialBounds,o=p[n].icon,i=a({zIndex:g.echo,position:"absolute",pointerEvents:"none"},r)
return s.createElement("div",{style:i},s.createElement(u,{name:n,icon:o,type:f.ECHO,borders:t}))},t}(s.Component)
T.propTypes={animationDurationMs:c.number.isRequired,borders:b,id:v.isRequired,initialBounds:E.isRequired,onAnimationFinish:c.func.isRequired}
var O=function(e){function t(){var n,i,a
r(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=i=o(this,e.call.apply(e,[this].concat(c))),i._animationConfigForType=function(e){var t=void 0,n=void 0
switch(e){case d.SLIDE_AND_FADE:t=400,n="echo-slide-and-fade"
break
case d.FADE_ONLY:t=300,n="echo-fade-only"
break
case d.LONG_FADE_ONLY:t=400,n="echo-long-fade-only"
break
default:throw new Error("Invalid echo animation type:",e)}return{animationDurationMs:t,animationTransitionName:n}},a=n,o(i,a)}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.echoes,r=t.onAnimationFinish
return s.createElement("span",null,Object.keys(d).map(function(t){var o=e._animationConfigForType(t),i=o.animationDurationMs,c=o.animationTransitionName,u=n.filter(function(e){return e.animationType===t})
return s.createElement(l,{transitionName:c,transitionEnter:!0,transitionLeave:!1,transitionEnterTimeout:i,key:t},u.map(function(e){var t=e.animationId
return s.createElement(T,a({key:t,animationDurationMs:i,onAnimationFinish:function(){return r(t)}},e))}))}))},t}(s.Component)
O.propTypes={echoes:c.arrayOf(m),onAnimationFinish:c.func.isRequired},e.exports=O},function(e,t){e.exports=i},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(5),u=l.connect,p=n(7),h=p.StyleSheet,f=p.css,d=n(8),y=d.View,m=n(17),b=n(72),E=n(73),v=n(66),g=v.KeyTypes,T=v.BorderDirections,O=v.BorderStyles,_=n(21),w=_.brightGreen,P=_.innerBorderColor,R=_.innerBorderStyle,C=_.innerBorderWidthPx,M=_.valueGrey,N=_.operatorGrey,S=_.controlGrey,k=_.emptyGrey,x=n(67),A=x.bordersPropType,L=x.iconPropType,I=x.keyConfigPropType,j=function(e){function t(){var n,i,a
r(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=i=o(this,e.call.apply(e,[this].concat(c))),i._preInjectStyles=function(){for(var e=Object.keys(g),t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var r
if(t){if(n>=e.length)break
r=e[n++]}else{if(n=e.next(),n.done)break
r=n.value}var o=r
f.apply(void 0,[y.styles.initial].concat(i._getFocusStyle(o)))
for(var a=Object.values(O),s=Array.isArray(a),c=0,a=s?a:a[Symbol.iterator]();;){var l
if(s){if(c>=a.length)break
l=a[c++]}else{if(c=a.next(),c.done)break
l=c.value}var u=l
f.apply(void 0,[y.styles.initial].concat(i._getButtonStyle(o,u)))}}},i._getFocusStyle=function(e){var t=void 0
return t=e===g.INPUT_NAVIGATION||e===g.KEYPAD_NAVIGATION?U.light:U.bright,[U.focusBox,t]},i._getButtonStyle=function(e,t,n){var r=void 0
switch(e){case g.EMPTY:r=U.empty
break
case g.MANY:case g.VALUE:r=U.value
break
case g.OPERATOR:r=U.operator
break
case g.INPUT_NAVIGATION:case g.KEYPAD_NAVIGATION:r=U.control
break
case g.ECHO:r=null}var o=[]
return t.indexOf(T.LEFT)!==-1&&o.push(U.leftBorder),t.indexOf(T.BOTTOM)!==-1&&o.push(U.bottomBorder),[U.buttonBase,r].concat(o,[e===g.ECHO&&U.echo,i.buttonSizeStyle],Array.isArray(n)?n:[n])},a=n,o(i,a)}return i(t,e),t.prototype.componentWillMount=function(){this.buttonSizeStyle=D(this.props.heightPx,this.props.widthPx)},t.prototype.componentDidMount=function(){this._preInjectStyles()},t.prototype.componentWillUpdate=function(e,t){e.heightPx===this.props.heightPx&&e.widthPx===this.props.widthPx||(this.buttonSizeStyle=D(e.heightPx,e.widthPx),this._preInjectStyles())},t.prototype.render=function(){var e=this.props,t=e.ariaLabel,n=e.borders,r=e.childKeys,o=e.disabled,i=e.focused,c=e.icon,l=e.onTouchCancel,u=e.onTouchEnd,p=e.onTouchMove,h=e.onTouchStart,f=e.popoverEnabled,d=e.style,v=e.type,T=!o&&i||f||v===g.ECHO,O=this._getButtonStyle(v,n,d),_=this._getFocusStyle(v),w=[U.iconWrapper,o&&U.disabled],P={onTouchCancel:l,onTouchEnd:u,onTouchMove:p,onTouchStart:h},R=T&&s.createElement(y,{style:_}),C=!T&&!o&&r&&r.length>0&&s.createElement(E,{style:U.decalInset})
if(v===g.EMPTY)return s.createElement(y,a({style:O},P))
if(v===g.MANY){var M={role:"button",ariaLabel:r[0].ariaLabel},N=r.map(function(e){return e.icon})
return s.createElement(y,a({style:O},P,M),R,s.createElement(y,{style:w},s.createElement(b,{icons:N,focused:T})),C)}var S={role:"button",ariaLabel:t}
return s.createElement(y,a({style:O},P,S),R,s.createElement(y,{style:w},s.createElement(m,{icon:c,focused:T})),C)},t}(s.PureComponent)
j.propTypes={ariaLabel:c.string,borders:A,childKeys:c.arrayOf(I),disabled:c.bool,focused:c.bool,heightPx:c.number.isRequired,icon:L,onTouchCancel:c.func,onTouchEnd:c.func,onTouchMove:c.func,onTouchStart:c.func,popoverEnabled:c.bool,style:c.any,type:c.oneOf(Object.keys(g)).isRequired,widthPx:c.number.isRequired},j.defaultProps={borders:O.ALL,childKeys:[],disabled:!1,focused:!1,popoverEnabled:!1}
var B=4,F=0,U=h.create({buttonBase:{"-webkit-box-flex":"1",flex:1,cursor:"pointer",userSelect:"none",justifyContent:"center",alignItems:"center",borderColor:P,borderStyle:R,boxSizing:"border-box"},decalInset:{top:B,right:B},echo:{borderColor:"transparent"},value:{backgroundColor:M},operator:{backgroundColor:N},control:{backgroundColor:S},empty:{backgroundColor:k,cursor:"default"},bright:{backgroundColor:w},light:{backgroundColor:"rgba(33, 36, 44, 0.1)"},iconWrapper:{zIndex:F+1},focusBox:{position:"absolute",zIndex:F,left:B,right:B,bottom:B,top:B,borderRadius:1},disabled:{opacity:.3},leftBorder:{borderLeftWidth:C},bottomBorder:{borderBottomWidth:C}}),D=function(e,t){return h.create({buttonSize:{height:e,width:t,maxWidth:t}}).buttonSize},z=function(e){return e.layout.buttonDimensions}
e.exports=u(z)(j)},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(18),p=n(22),h=n(65),f=n(66),d=f.IconTypes,y=n(67),m=y.iconPropType,b=n(21),E=b.gray25,v="#FFF",g=E,T=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.focused,n=e.icon,r=e.style,o=[t?O.focused:O.unfocused].concat(Array.isArray(r)?r:[r])
switch(n.type){case d.MATH:return a.createElement(u,{math:n.data,style:o})
case d.SVG:return a.createElement(p,{name:n.data,color:t?v:g})
case d.TEXT:return a.createElement(h,{character:n.data,style:o})}throw new Error("No icon or symbol provided")},t}(a.PureComponent)
T.propTypes={focused:s.bool,icon:m.isRequired,style:s.any}
var O=l.create({unfocused:{color:g},focused:{color:v}})
e.exports=T},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(4),l=n(7),u=l.StyleSheet,p=n(19),h=n(8),f=h.View,d=n(20),y=d.row,m=d.centered,b=n(21),E=b.iconSizeHeightPx,v=b.iconSizeWidthPx,g=function(e){function t(){var n,i,a
r(this,t)
for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u]
return n=i=o(this,e.call.apply(e,[this].concat(l))),i._renderMath=function(){var e=i.props.math
p.render(e,c.findDOMNode(i))},a=n,o(i,a)}return i(t,e),t.prototype.componentDidMount=function(){this._renderMath()},t.prototype.componentDidUpdate=function(e){e.math!==this.props.math&&this._renderMath()},t.prototype.render=function(){var e=this.props.style,t=[y,m,T.size,T.base].concat(Array.isArray(e)?e:[e])
return a.createElement(f,{style:t})},t}(a.Component)
g.propTypes={math:s.string.isRequired,style:s.any}
var T=u.create({size:{height:E,width:v},base:{fontSize:25}})
e.exports=g},function(e,t){e.exports=a},function(e,t,n){"use strict"
var r=n(7),o=r.StyleSheet,i=n(21),a=i.compactKeypadBorderRadiusPx
e.exports=o.create({row:{flexDirection:"row"},column:{flexDirection:"column"},oneColumn:{flexGrow:1},fullWidth:{width:"100%"},stretch:{alignItems:"stretch"},centered:{justifyContent:"center",alignItems:"center"},centeredText:{textAlign:"center"},roundedTopLeft:{borderTopLeftRadius:a},roundedTopRight:{borderTopRightRadius:a}})},function(e,t){"use strict"
var n="#D6D8DA"
e.exports={brightGreen:"#78C008",gray17:"#21242C",gray25:"#3B3E40",gray68:"#888D93",gray76:"#BABEC2",gray85:n,iconSizeHeightPx:48,iconSizeWidthPx:48,compactKeypadBorderRadiusPx:4,cursorHandleRadiusPx:11,cursorHandleDistanceMultiplier:1.41,valueGrey:"#FFF",operatorGrey:"#FAFAFA",controlGrey:"#F6F7F7",emptyGrey:"#F0F1F2",innerBorderColor:n,innerBorderStyle:"solid",innerBorderWidthPx:1,tabletCutoffPx:600,pageIndicatorHeightPx:16,navigationPadWidthPx:192,toolbarHeightPx:60}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(23),l=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.color,n=e.name,r=c[n]
return a.createElement(r,{color:t})},t}(a.Component)
l.propTypes={color:s.string.isRequired,name:s.string.isRequired},e.exports=l},function(e,t,n){"use strict"
e.exports={COS:n(24),LOG:n(25),EQUAL:n(26),BACKSPACE:n(27),SQRT:n(28),EXP:n(29),NEQ:n(30),GEQ:n(31),LN:n(32),DISMISS:n(33),SIN:n(34),LT:n(35),CUBE_ROOT:n(36),PLUS:n(37),TAN:n(38),LEFT:n(39),UP:n(41),DOWN:n(42),LEFT_PAREN:n(43),RIGHT_PAREN:n(44),GT:n(45),DIVIDE:n(46),PERIOD:n(47),PERCENT:n(48),TIMES:n(49),EXP_3:n(50),EXP_2:n(51),RIGHT:n(52),CDOT:n(53),LOG_N:n(54),LEQ:n(55),MINUS:n(56),NEGATIVE:n(56),RADICAL:n(57),FRAC:n(58),JUMP_OUT_PARENTHESES:n(59),JUMP_OUT_EXPONENT:n(60),JUMP_OUT_BASE:n(61),JUMP_INTO_NUMERATOR:n(62),JUMP_OUT_NUMERATOR:n(63),JUMP_OUT_DENOMINATOR:n(64)}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M13 12h24v24H13z"}),a.createElement("path",{d:"M18.182 29.168c1.386 0 2.226-.602 2.674-1.232l-1.162-1.078a1.707 1.707 0 0 1-1.428.728c-1.078 0-1.834-.798-1.834-1.974s.756-1.96 1.834-1.96c.616 0 1.106.252 1.428.728l1.162-1.092c-.448-.616-1.288-1.218-2.674-1.218-2.086 0-3.584 1.47-3.584 3.542 0 2.086 1.498 3.556 3.584 3.556zm6.972 0c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.336 1.582c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M16.776 29v-9.338h-1.778V29h1.778zm4.9.168c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.672 4.158c1.666 0 3.654-.63 3.654-3.206v-6.3H31.21v.868c-.546-.686-1.274-1.036-2.086-1.036-1.708 0-2.982 1.232-2.982 3.444 0 2.254 1.288 3.444 2.982 3.444.826 0 1.554-.392 2.086-1.064v.686c0 1.33-1.008 1.708-1.862 1.708-.854 0-1.568-.238-2.114-.84l-.798 1.288c.854.742 1.75 1.008 2.912 1.008zm.336-4.368c-1.008 0-1.708-.7-1.708-1.862 0-1.162.7-1.862 1.708-1.862.588 0 1.232.322 1.526.77v2.184c-.294.434-.938.77-1.526.77z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M16 21h17M16 27h17",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{d:"M13 24l6 6h14V18H19l-6 6zm-1.414-1.414l6-6A2 2 0 0 1 19 16h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H19a2 2 0 0 1-1.414-.586l-6-6a2 2 0 0 1 0-2.828z",fill:"#888D93"}),r.createElement("path",{d:"M23 21l6 6M29 21l-6 6",stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))}
e.exports=o},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M14 29l4 6 9-14h7"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M28 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM30 18h4v4h-4v-4zM14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M19 33l10-18M16 21h17M16 27h17",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M16 33h16M16 30l16-6-16-6",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M20.836 29v-9.338h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882H22.6V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{d:"M18 21l6 6 6-6",strokeLinecap:"round",strokeWidth:"2",stroke:"#71B307",strokeLinejoin:"round"})))}
e.exports=o},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M18.655 29.168c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05zm5.124-7.658c.588 0 1.064-.476 1.064-1.064 0-.588-.476-1.05-1.064-1.05a1.06 1.06 0 0 0-1.064 1.05c0 .588.49 1.064 1.064 1.064zm.896 7.49v-6.762h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M32 30l-16-6 16-6"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M17.91 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z",fill:this.props.color}),a.createElement("path",{stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M14 29l4 6 9-14h7"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M19 24h10M24 29V19",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M16.93 29.168c.742 0 1.218-.196 1.484-.434l-.378-1.344c-.098.098-.35.196-.616.196-.392 0-.616-.322-.616-.742v-3.052h1.372v-1.554h-1.372V20.39h-1.792v1.848h-1.12v1.554h1.12v3.528c0 1.204.672 1.848 1.918 1.848zM25.232 29v-4.368c0-1.946-1.414-2.562-2.954-2.562-1.064 0-2.128.336-2.954 1.064l.672 1.19c.574-.532 1.246-.798 1.974-.798.896 0 1.484.448 1.484 1.134v.91c-.448-.532-1.246-.826-2.142-.826-1.078 0-2.352.602-2.352 2.184 0 1.512 1.274 2.24 2.352 2.24.882 0 1.68-.322 2.142-.868v.7h1.778zm-3.206-1.036c-.7 0-1.274-.364-1.274-.994 0-.658.574-1.022 1.274-1.022.574 0 1.134.196 1.428.588v.84c-.294.392-.854.588-1.428.588zM33.338 29v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
var r=n(2),o=n(40),i=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement(o,null))}
e.exports=i},function(e,t,n){"use strict"
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),i=function(e){return o.createElement("g",r({fill:"none",fillRule:"evenodd"},e),o.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),o.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),o.createElement("path",{stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M22 18l-6 6 6 6M16 24h16"}))}
e.exports=i},function(e,t,n){"use strict"
var r=n(2),o=n(40),i=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement(o,{transform:"rotate(90 24 24)"}))}
e.exports=i},function(e,t,n){"use strict"
var r=n(2),o=n(40),i=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement(o,{transform:"rotate(270 24 24)"}))}
e.exports=i},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M26 14c-4 6-4 14 0 20",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M23 14c4 6 4 14 0 20",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M16 30l16-6-16-6"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M19 24h10",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("circle",{fill:this.props.color,cx:"24",cy:"19.5",r:"1.5"}),a.createElement("circle",{fill:this.props.color,cx:"24",cy:"28.5",r:"1.5"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("circle",{fill:this.props.color,cx:"24",cy:"30",r:"2"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("g",{transform:"translate(12 12)"},a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.createElement("path",{d:"M16 4L8 20",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("circle",{stroke:this.props.color,strokeWidth:"2",cx:"7",cy:"7",r:"3"}),a.createElement("circle",{stroke:this.props.color,strokeWidth:"2",cx:"17",cy:"17",r:"3"}))))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M20 20l8 8M28 20l-8 8",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM30.92 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM33.67 23v-1.5h-2.44c1.66-1.16 2.39-2.03 2.39-3.05 0-1.34-1.13-2.22-2.7-2.22-.93 0-1.99.33-2.7 1.11l.95 1.14c.48-.45 1.04-.73 1.78-.73.49 0 .92.24.92.7 0 .66-.54 1.12-3.43 3.21V23h5.23z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
var r=n(2),o=n(40),i=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement(o,{transform:"rotate(180 24 24)"}))}
e.exports=i},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("g",{transform:"translate(12 12)"},a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.createElement("circle",{fill:this.props.color,cx:"12",cy:"12",r:"3"}))))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M30 28.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM32 30h4v4h-4v-4zM12.776 29v-9.338h-1.778V29h1.778zm4.9.168c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.672 4.158c1.666 0 3.654-.63 3.654-3.206v-6.3H27.21v.868c-.546-.686-1.274-1.036-2.086-1.036-1.708 0-2.982 1.232-2.982 3.444 0 2.254 1.288 3.444 2.982 3.444.826 0 1.554-.392 2.086-1.064v.686c0 1.33-1.008 1.708-1.862 1.708-.854 0-1.568-.238-2.114-.84l-.798 1.288c.854.742 1.75 1.008 2.912 1.008zm.336-4.368c-1.008 0-1.708-.7-1.708-1.862 0-1.162.7-1.862 1.708-1.862.588 0 1.232.322 1.526.77v2.184c-.294.434-.938.77-1.526.77z",fill:this.props.color})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),a.createElement("path",{d:"M16 33h16M32 30l-16-6 16-6",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M19 24h10",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("path",{d:"M13 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM15 18h4v4h-4v-4z",fill:this.props.color}),a.createElement("path",{stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M14 29l4 6 9-14h7"})))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),a.createElement("g",{transform:"translate(12 12)"},a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.createElement("path",{d:"M8 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997c-.55 0-.997-.453-.997-.997v-6.006zM10 18h4v4h-4v-4z",fill:this.props.color}),a.createElement("rect",{fill:this.props.color,x:"2",y:"11",width:"20",height:"2",rx:"1"}),a.createElement("path",{d:"M8 .997C8 .447 8.453 0 8.997 0h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997C8.447 8 8 7.547 8 7.003V.997zM10 2h4v4h-4V2z",fill:this.props.color}))))},t}(a.Component)
c.propTypes={color:s.string.isRequired},e.exports=c},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),r.createElement("path",{d:"M24 18c3 3 3 9 0 12M18 18c-3 3-3 9 0 12",stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M32 27l3-3-3-3M22 24h12"})))}
e.exports=o},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),r.createElement("path",{d:"M35 19v16M23 19l8 8M31 23v4h-4",stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 12.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM14 14h4v4h-4v-4z",fill:"#888D93"})))}
e.exports=o},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),r.createElement("path",{d:"M12 28.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM14 30h4v4h-4v-4z",fill:"#888D93"}),r.createElement("path",{d:"M35 13v16M23 29l8-8M27 21h4v4",stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))}
e.exports=o},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),r.createElement("path",{d:"M13 16v16M17 22l6-6M23 20v-4h-4",stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M26 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM28 29h4v4h-4v-4z",fill:"#888D93"}),r.createElement("path",{d:"M35 24H25",stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M26 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM28 15h4v4h-4v-4z",fill:"#78C008"})))}
e.exports=o},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),r.createElement("path",{fill:"none",d:"M12 12h24v24H12z"}),r.createElement("path",{stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M33 29l-3 3-3-3M30 18v14"}),r.createElement("path",{d:"M16 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM18 29h4v4h-4v-4z",fill:"#78C008"}),r.createElement("path",{d:"M25 24H15",stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M16 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM18 15h4v4h-4v-4z",fill:"#888D93"})))}
e.exports=o},function(e,t,n){"use strict"
var r=n(2),o=function(){return r.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 0h48v48H0z"}),r.createElement("path",{d:"M12 12h24v24H12z"}),r.createElement("path",{d:"M35 16v16m-4-4v-4h-4m-2 6l6-6",stroke:"#78C008",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M14 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM16 29h4v4h-4v-4z",fill:"#888D93"}),r.createElement("path",{d:"M23 24H13",stroke:"#888D93",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M14 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM16 15h4v4h-4v-4z",fill:"#888D93"})))}
e.exports=o},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=u.Text,f=n(20),d=f.row,y=f.centered,m=n(21),b=m.iconSizeHeightPx,E=m.iconSizeWidthPx,v=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.character,n=e.style,r=[d,y,g.size,g.base].concat(Array.isArray(n)?n:[n])
return a.createElement(p,{style:r},a.createElement(h,null,t))},t}(a.Component)
v.propTypes={character:s.string.isRequired,style:s.any}
var g=l.create({size:{height:b,width:E},base:{fontFamily:"Proxima Nova",fontSize:25}})
e.exports=v},function(e,t){"use strict"
e.exports={KeypadTypes:{FRACTION:"FRACTION",EXPRESSION:"EXPRESSION"},KeyTypes:{EMPTY:"EMPTY",VALUE:"VALUE",OPERATOR:"OPERATOR",INPUT_NAVIGATION:"INPUT_NAVIGATION",KEYPAD_NAVIGATION:"KEYPAD_NAVIGATION",MANY:"MANY",ECHO:"ECHO"},DeviceOrientations:{LANDSCAPE:"LANDSCAPE",PORTRAIT:"PORTRAIT"},DeviceTypes:{PHONE:"PHONE",TABLET:"TABLET"},LayoutModes:{FULLSCREEN:"FULLSCREEN",COMPACT:"COMPACT"},BorderDirections:{LEFT:"LEFT",BOTTOM:"BOTTOM"},BorderStyles:{LEFT:["LEFT"],BOTTOM:["BOTTOM"],ALL:["LEFT","BOTTOM"],NONE:[]},IconTypes:{MATH:"MATH",SVG:"SVG",TEXT:"TEXT"},DecimalSeparators:{COMMA:"COMMA",PERIOD:"PERIOD"},EchoAnimationTypes:{SLIDE_AND_FADE:"SLIDE_AND_FADE",FADE_ONLY:"FADE_ONLY",LONG_FADE_ONLY:"LONG_FADE_ONLY"}}},function(e,t,n){"use strict"
var r=n(3),o=n(68),i=n(71),a=n(66),s=a.BorderDirections,c=a.EchoAnimationTypes,l=a.IconTypes,u=a.KeyTypes,p=a.KeypadTypes,h=r.shape({type:r.oneOf(Object.keys(l)).isRequired,data:r.string.isRequired}),f=r.oneOf(Object.keys(o)),d=r.shape({ariaLabel:r.string,id:f.isRequired,type:r.oneOf(Object.keys(u)).isRequired,childKeyIds:r.arrayOf(f),icon:h.isRequired}),y=r.shape({keypadType:r.oneOf(Object.keys(p)).isRequired,extraKeys:r.arrayOf(f)}),m=r.shape({activate:r.func.isRequired,dismiss:r.func.isRequired,configure:r.func.isRequired,setCursor:r.func.isRequired,setKeyHandler:r.func.isRequired,getDOMNode:r.func.isRequired}),b=r.arrayOf(r.oneOf(Object.keys(s))),E=r.shape({height:r.number,width:r.number,top:r.number,right:r.number,bottom:r.number,left:r.number}),v=r.shape({animationId:r.string.isRequired,animationType:r.oneOf(Object.keys(c)).isRequired,borders:b,id:f.isRequired,initialBounds:E.isRequired}),g=r.oneOf(Object.keys(i)),T=r.shape({parentId:f.isRequired,bounds:E.isRequired,childKeyIds:r.arrayOf(f).isRequired}),O=r.oneOfType([r.arrayOf(r.node),r.node])
e.exports={keyConfigPropType:d,keyIdPropType:f,keypadConfigurationPropType:y,keypadElementPropType:m,bordersPropType:b,boundingBoxPropType:E,echoPropType:v,cursorContextPropType:g,popoverPropType:T,iconPropType:h,childrenPropType:O}},function(e,t,n){"use strict"
var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(69),a=n(66),s=a.DecimalSeparators,c=a.IconTypes,l=a.KeyTypes,u=n(70),p=u.decimalSeparator,h=window.i18n||{_:function(e){return e}},f=(r={},r[i.PLUS]={type:l.OPERATOR,ariaLabel:h._("Plus")},r[i.MINUS]={type:l.OPERATOR,ariaLabel:h._("Minus")},r[i.NEGATIVE]={type:l.VALUE,ariaLabel:h._("Negative")},r[i.TIMES]={type:l.OPERATOR,ariaLabel:h._("Multiply")},r[i.DIVIDE]={type:l.OPERATOR,ariaLabel:h._("Divide")},r[i.DECIMAL]={type:l.VALUE,ariaLabel:h._("Decimal"),icon:p===s.COMMA?{type:c.TEXT,data:","}:{type:c.SVG,data:i.PERIOD}},r[i.PERCENT]={type:l.OPERATOR,ariaLabel:h._("Percent")},r[i.CDOT]={type:l.OPERATOR,ariaLabel:h._("Multiply")},r[i.EQUAL]={type:l.OPERATOR,ariaLabel:h._("Equals sign")},r[i.NEQ]={type:l.OPERATOR,ariaLabel:h._("Not-equals sign")},r[i.GT]={type:l.OPERATOR,ariaLabel:h._("Greater than sign")},r[i.LT]={type:l.OPERATOR,ariaLabel:h._("Less than sign")},r[i.GEQ]={type:l.OPERATOR,ariaLabel:h._("Greater than or equal to sign")},r[i.LEQ]={type:l.OPERATOR,ariaLabel:h._("Less than or equal to sign")},r[i.FRAC_INCLUSIVE]={type:l.OPERATOR,ariaLabel:h._("Fraction, with current expression in numerator")},r[i.FRAC_EXCLUSIVE]={type:l.OPERATOR,ariaLabel:h._("Fraction, excluding the current expression")},r[i.FRAC]={type:l.OPERATOR,ariaLabel:h._("Fraction, excluding the current expression")},r[i.EXP]={type:l.OPERATOR,ariaLabel:h._("Custom exponent")},r[i.EXP_2]={type:l.OPERATOR,ariaLabel:h._("Square")},r[i.EXP_3]={type:l.OPERATOR,ariaLabel:h._("Cube")},r[i.SQRT]={type:l.OPERATOR,ariaLabel:h._("Square root")},r[i.CUBE_ROOT]={type:l.OPERATOR,ariaLabel:h._("Cube root")},r[i.RADICAL]={type:l.OPERATOR,ariaLabel:h._("Radical with custom root")},r[i.LEFT_PAREN]={type:l.OPERATOR,ariaLabel:h._("Left parenthesis")},r[i.RIGHT_PAREN]={type:l.OPERATOR,ariaLabel:h._("Right parenthesis")},r[i.LN]={type:l.OPERATOR,ariaLabel:h._("Natural logarithm")},r[i.LOG]={type:l.OPERATOR,ariaLabel:h._("Logarithm with base 10")},r[i.LOG_N]={type:l.OPERATOR,ariaLabel:h._("Logarithm with custom base")},r[i.SIN]={type:l.OPERATOR,ariaLabel:h._("Sine")},r[i.COS]={type:l.OPERATOR,ariaLabel:h._("Cosine")},r[i.TAN]={type:l.OPERATOR,ariaLabel:h._("Tangent")},r[i.PI]={type:l.VALUE,ariaLabel:h._("Pi"),icon:{type:c.MATH,data:"\\pi"}},r[i.THETA]={type:l.VALUE,ariaLabel:h._("Theta"),icon:{type:c.MATH,data:"\\theta"}},r[i.NOOP]={type:l.EMPTY},r[i.UP]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Up arrow")},r[i.RIGHT]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Right arrow")},r[i.DOWN]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Down arrow")},r[i.LEFT]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Left arrow")},r[i.JUMP_OUT_PARENTHESES]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right out of a set of parentheses")},r[i.JUMP_OUT_EXPONENT]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right out of an exponent")},r[i.JUMP_OUT_BASE]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right out of a base")},r[i.JUMP_INTO_NUMERATOR]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right into the numerator of a fraction")},r[i.JUMP_OUT_NUMERATOR]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right out of the numerator and into the denominator")},r[i.JUMP_OUT_DENOMINATOR]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Navigate right out of the denominator of a fraction")},r[i.BACKSPACE]={type:l.INPUT_NAVIGATION,ariaLabel:h._("Delete")},r[i.DISMISS]={type:l.KEYPAD_NAVIGATION,ariaLabel:h._("Dismiss")},r)
f[i.FRAC_MULTI]={childKeyIds:[i.FRAC_INCLUSIVE,i.FRAC_EXCLUSIVE]},f[i.MANY]={type:l.MANY}
for(var d=[0,1,2,3,4,5,6,7,8,9],y=d,m=Array.isArray(y),b=0,y=m?y:y[Symbol.iterator]();;){var E
if(m){if(b>=y.length)break
E=y[b++]}else{if(b=y.next(),b.done)break
E=b.value}var v=E,g=""+v
f["NUM_"+v]={type:l.VALUE,ariaLabel:g,icon:{type:c.TEXT,data:g}}}for(var T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],O=T,_=Array.isArray(O),w=0,O=_?O:O[Symbol.iterator]();;){var P
if(_){if(w>=O.length)break
P=O[w++]}else{if(w=O.next(),w.done)break
P=w.value}for(var R=P,C=R.toLowerCase(),M=R.toUpperCase(),N=[C,M],S=0;S<N.length;S++){var k=N[S]
f[k]={type:l.VALUE,ariaLabel:k,icon:{type:c.MATH,data:k}}}}for(var x=Object.keys(f),A=Array.isArray(x),L=0,x=A?x:x[Symbol.iterator]();;){var I
if(A){if(L>=x.length)break
I=x[L++]}else{if(L=x.next(),L.done)break
I=L.value}var j=I
f[j]=o({id:j,icon:{type:c.SVG,data:j}},f[j])}e.exports=f},function(e,t){"use strict"
var n={PLUS:"PLUS",MINUS:"MINUS",NEGATIVE:"NEGATIVE",TIMES:"TIMES",DIVIDE:"DIVIDE",DECIMAL:"DECIMAL",PERIOD:"PERIOD",PERCENT:"PERCENT",CDOT:"CDOT",EQUAL:"EQUAL",NEQ:"NEQ",GT:"GT",LT:"LT",GEQ:"GEQ",LEQ:"LEQ",FRAC_INCLUSIVE:"FRAC_INCLUSIVE",FRAC_EXCLUSIVE:"FRAC_EXCLUSIVE",FRAC:"FRAC",EXP:"EXP",EXP_2:"EXP_2",EXP_3:"EXP_3",SQRT:"SQRT",CUBE_ROOT:"CUBE_ROOT",RADICAL:"RADICAL",LEFT_PAREN:"LEFT_PAREN",RIGHT_PAREN:"RIGHT_PAREN",LN:"LN",LOG:"LOG",LOG_N:"LOG_N",SIN:"SIN",COS:"COS",TAN:"TAN",PI:"PI",THETA:"THETA",UP:"UP",RIGHT:"RIGHT",DOWN:"DOWN",LEFT:"LEFT",BACKSPACE:"BACKSPACE",DISMISS:"DISMISS",JUMP_OUT_PARENTHESES:"JUMP_OUT_PARENTHESES",JUMP_OUT_EXPONENT:"JUMP_OUT_EXPONENT",JUMP_OUT_BASE:"JUMP_OUT_BASE",JUMP_INTO_NUMERATOR:"JUMP_INTO_NUMERATOR",JUMP_OUT_NUMERATOR:"JUMP_OUT_NUMERATOR",JUMP_OUT_DENOMINATOR:"JUMP_OUT_DENOMINATOR",NOOP:"NOOP",FRAC_MULTI:"FRAC_MULTI",MANY:"MANY"}
e.exports=n},function(e,t,n){"use strict"
var r=n(66),o=r.DecimalSeparators,i=void 0
i="undefined"!=typeof window&&window.icu&&","===window.icu.getDecimalFormatSymbols().decimal_separator?o.COMMA:o.PERIOD,e.exports={decimalSeparator:i}},function(e,t){"use strict"
e.exports={NONE:"NONE",IN_PARENS:"IN_PARENS",IN_SUPER_SCRIPT:"IN_SUPER_SCRIPT",IN_SUB_SCRIPT:"IN_SUB_SCRIPT",IN_NUMERATOR:"IN_NUMERATOR",IN_DENOMINATOR:"IN_DENOMINATOR",BEFORE_FRACTION:"BEFORE_FRACTION"}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=n(17),f=n(66),d=f.IconTypes,y=n(67),m=y.iconPropType,b=n(20),E=b.row,v=b.column,g=b.centered,T=b.fullWidth,O=n(21),_=O.iconSizeHeightPx,w=O.iconSizeWidthPx,P=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.focused,n=e.icons
if(n.forEach(function(e){if(e.type!==d.MATH)throw new Error("Received invalid icon: type="+e.type+", data="+e.data)}),1===n.length)return a.createElement(h,{icon:n[0],focused:t})
var r=M.base,o=[M.base,M.secondary]
if(2===n.length)return a.createElement(p,{style:[E,M.size]},a.createElement(p,{style:[v,g,T,M.middleLeft]},a.createElement(h,{style:r,icon:n[0],focused:t})),a.createElement(p,{style:[v,g,T,M.middleRight]},a.createElement(h,{style:o,icon:n[1],focused:t})))
if(n.length>=3)return a.createElement(p,{style:[v,M.size]},a.createElement(p,{style:E},a.createElement(p,{style:[g,T,M.topLeft]},a.createElement(h,{style:r,icon:n[0],focused:t})),a.createElement(p,{style:[g,T,M.topRight]},a.createElement(h,{style:o,icon:n[1],focused:t}))),a.createElement(p,{style:E},a.createElement(p,{style:[g,T,M.bottomLeft]},a.createElement(h,{style:o,icon:n[2],focused:t})),a.createElement(p,{style:[g,T,M.bottomRight]},n[3]&&a.createElement(h,{style:o,icon:n[3],focused:t}))))
throw new Error("Invalid number of icons:",n.length)},t}(a.Component)
P.propTypes={focused:s.bool,icons:s.arrayOf(m).isRequired}
var R=2,C=4,M=l.create({size:{height:_,width:w},bottomLeft:{marginBottom:R,marginLeft:C},topLeft:{marginTop:R,marginLeft:C},topRight:{marginTop:R,marginRight:C},bottomRight:{marginBottom:R,marginRight:C},middleLeft:{marginLeft:C},middleRight:{marginRight:C},base:{fontSize:18},secondary:{opacity:.3}})
e.exports=P},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=n(21),f=h.gray25,d=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.style,t=[m.container].concat(Array.isArray(e)?e:[e])
return a.createElement(p,{style:t},a.createElement("svg",{width:y,height:y,viewBox:"4 4 8 8"},a.createElement("path",{fill:f,opacity:"0.3",d:"M5.29289322,5.70710678 L10.2928932,10.7071068 C10.9228581,11.3370716 12,10.8909049 12,10 L12,5 C12,4.44771525 11.5522847,4 11,4 L6,4 C5.10909515,4 4.66292836,5.07714192 5.29289322,5.70710678 Z"})))},t}(a.Component)
d.propTypes={style:s.any}
var y=7,m=l.create({container:{position:"absolute",top:0,right:0,width:y,height:y}})
e.exports=d},function(e,t){"use strict"
e.exports={popover:1,echo:2,keypad:1060}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(15),u=n(68),p=n(76),h=n(67),f=h.boundingBoxPropType,d=h.keyConfigPropType,y=h.popoverPropType,m="popover",b=200,E=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.bounds,n=e.childKeys,r=a({position:"absolute"},t)
return s.createElement("div",{style:r},s.createElement(p,{keys:n}))},t}(s.Component)
E.propTypes={bounds:f.isRequired,childKeys:c.arrayOf(d).isRequired}
var v=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.popover
return s.createElement(l,{transitionName:m,transitionEnter:!0,transitionLeave:!1,transitionEnterTimeout:b},e&&s.createElement(E,{key:e.childKeyIds[0],bounds:e.bounds,childKeys:e.childKeyIds.map(function(e){return u[e]})}))},t}(s.Component)
v.propTypes={popover:y},e.exports=v},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=n(67),f=h.keyConfigPropType,d=n(66),y=d.BorderStyles,m=n(74),b=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.keys,t=n(77)
return a.createElement(p,{style:E.container},e.map(function(e){return a.createElement(t,{key:e.id,keyConfig:e,borders:y.NONE})}))},t}(a.Component)
b.propTypes={keys:s.arrayOf(f)}
var E=l.create({container:{flexDirection:"column-reverse",position:"relative",width:"100%",borderRadius:2,boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",zIndex:m.popover},popoverButton:{backgroundColor:"#FFF",borderWidth:0}})
e.exports=b},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=n(3),u=n(4),p=n(5),h=p.connect,f=n(7),d=f.StyleSheet,y=n(16),m=n(68),b=n(78),E=n(67),v=E.bordersPropType,g=E.keyIdPropType,T=n(66),O=T.KeyTypes,_=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(e){return e.id!==this.props.id||e.gestureManager!==this.props.gestureManager||e.focused!==this.props.focused||e.disabled!==this.props.disabled||e.popoverEnabled!==this.props.popoverEnabled||e.type!==this.props.type||!!e.style},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.gestureManager,n=e.id
t.unregisterDOMNode(n)},t.prototype.render=function(){var e=this.props,t=e.borders,n=e.childKeyIds,o=e.disabled,i=e.gestureManager,a=e.id,l=e.style,p=r(e,["borders","childKeyIds","disabled","gestureManager","id","style"]),h=o?{onTouchStart:function(e){return e.preventDefault()}}:{onTouchStart:function(e){return i.onTouchStart(e,a)},onTouchEnd:function(e){return i.onTouchEnd(e)},onTouchMove:function(e){return i.onTouchMove(e)},onTouchCancel:function(e){return i.onTouchCancel(e)}},f=[].concat(Array.isArray(l)?l:[l],[R.preventScrolls])
return c.createElement(y,s({ref:function(e){return i.registerDOMNode(a,u.findDOMNode(e),n,t)},borders:t,disabled:o,style:f},h,p))},t}(c.Component)
_.propTypes={borders:v,childKeyIds:l.arrayOf(g),disabled:l.bool,focused:l.bool,gestureManager:l.instanceOf(b),id:g.isRequired,popoverEnabled:l.bool,style:l.any,type:l.oneOf(Object.keys(O)).isRequired}
var w=function(e){var t=e.ariaLabel,n=e.icon,r=e.type
return{ariaLabel:t,icon:n,type:r}},P=function(e,t){var n=e.gestures,o=t.keyConfig,i=r(t,["keyConfig"]),a=o.id,c=o.childKeyIds,l=o.type,u=c&&c.map(function(e){return m[e]}),p=l!==O.MANY&&u&&u.length>0
return s({},i,{childKeyIds:c,gestureManager:n.gestureManager,id:a,focused:n.focus===a,popoverEnabled:n.popover&&n.popover.parentId===a,childKeys:u},w(p?u[0]:o))},R=d.create({preventScrolls:{touchAction:"none"}})
e.exports=h(P)(_)},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(79),s=n(80),c=n(81),l=function(e){return[e.changedTouches[0].clientX,e.changedTouches[0].clientY]},u=function(){function e(t,n,l,u){var p=this
o(this,e)
var h=t.swipeEnabled
this.swipeEnabled=h,this.trackEvents=!1,this.nodeManager=new a,this.popoverStateMachine=new s({onActiveNodesChanged:function(e){var t=e.popover,o=r(e,["popover"])
n.onActiveNodesChanged(i({popover:t&&{parentId:t.parentId,bounds:p.nodeManager.layoutPropsForId(t.parentId).initialBounds,childKeyIds:t.childIds}},o))},onClick:function(e,t,r){n.onClick(e,p.nodeManager.layoutPropsForId(t),r)}}),this.gestureStateMachine=new c({onFocus:function(e){p.popoverStateMachine.onFocus(e)},onLongPress:function(e){p.popoverStateMachine.onLongPress(e)},onTouchEnd:function(e){p.popoverStateMachine.onTouchEnd(e)},onBlur:function(){p.popoverStateMachine.onBlur()},onSwipeChange:n.onSwipeChange,onSwipeEnd:n.onSwipeEnd,onTrigger:function(e){p.popoverStateMachine.onTrigger(e)}},{},l,u)}return e.prototype.onTouchStart=function(e,t){if(this.trackEvents){for(var n=l(e),r=n[0],o=0;o<e.changedTouches.length;o++)this.gestureStateMachine.onTouchStart(function(){return t},e.changedTouches[o].identifier,r)
e.preventDefault()}},e.prototype.onTouchMove=function(e){var t=this
if(this.trackEvents)for(var n=this.popoverStateMachine.isPopoverVisible(),r=this.swipeEnabled&&!n,o=l(e),i=o[0],a=o[1],s=0;s<e.changedTouches.length;s++)this.gestureStateMachine.onTouchMove(function(){return t.nodeManager.idForCoords(i,a)},e.changedTouches[s].identifier,i,r)},e.prototype.onTouchEnd=function(e){var t=this
if(this.trackEvents)for(var n=l(e),r=n[0],o=n[1],i=0;i<e.changedTouches.length;i++)this.gestureStateMachine.onTouchEnd(function(){return t.nodeManager.idForCoords(r,o)},e.changedTouches[i].identifier,r)},e.prototype.onTouchCancel=function(e){if(this.trackEvents)for(var t=0;t<e.changedTouches.length;t++)this.gestureStateMachine.onTouchCancel(e.changedTouches[t].identifier)},e.prototype.registerDOMNode=function(e,t,n,r){this.nodeManager.registerDOMNode(e,t,n,r),this.popoverStateMachine.registerPopover(e,n)},e.prototype.unregisterDOMNode=function(e){this.nodeManager.unregisterDOMNode(e),this.popoverStateMachine.unregisterPopover(e)},e.prototype.enableEventTracking=function(){this.trackEvents=!0},e.prototype.disableEventTracking=function(){this.trackEvents=!1},e}()
e.exports=u},function(e,t){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){var t=this
n(this,e),this._nodesById={},this._bordersById={},this._orderedIds=[],this._cachedBoundingBoxesById={},window.addEventListener("resize",function(){t._cachedBoundingBoxesById={}})}return e.prototype.registerDOMNode=function(e,t,n,r){this._nodesById[e]=t,this._bordersById[e]=r
for(var o=[].concat(n||[],[e],this._orderedIds),i=[],a={},s=o,c=Array.isArray(s),l=0,s=c?s:s[Symbol.iterator]();;){var u
if(c){if(l>=s.length)break
u=s[l++]}else{if(l=s.next(),l.done)break
u=l.value}var p=u
a[p]||(i.push(p),a[p]=!0)}this._orderedIds=i},e.prototype.unregisterDOMNode=function(e){delete this._nodesById[e]},e.prototype.idForCoords=function(e,t){for(var n=this._orderedIds,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var i
if(r){if(o>=n.length)break
i=n[o++]}else{if(o=n.next(),o.done)break
i=o.value}var a=i,s=this._nodesById[a]
if(s){var c=s.getBoundingClientRect()
if(c.left<=e&&c.right>e&&c.top<=t&&c.bottom>t)return this._cachedBoundingBoxesById[a]=c,a}}},e.prototype.layoutPropsForId=function(e){return this._cachedBoundingBoxesById[e]||(this._cachedBoundingBoxesById[e]=this._nodesById[e].getBoundingClientRect()),{initialBounds:this._cachedBoundingBoxesById[e],borders:this._bordersById[e]}},e}()
e.exports=r},function(e,t){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(t){n(this,e),this.handlers=t,this.activePopover=null,this.popovers={}}return e.prototype.registerPopover=function(e,t){this.popovers[e]=t},e.prototype.unregisterPopover=function(e){delete this.popovers[e]},e.prototype.isPopoverVisible=function(){return null!=this.activePopover},e.prototype.onBlur=function(){this.activePopover=null,this.handlers.onActiveNodesChanged({popover:null,focus:null})},e.prototype.onFocus=function(e){this.activePopover?this._isNodeInsidePopover(this.activePopover,e)?this.handlers.onActiveNodesChanged({popover:{parentId:this.activePopover,childIds:this.popovers[this.activePopover]},focus:e}):this.handlers.onActiveNodesChanged({popover:{parentId:this.activePopover,childIds:this.popovers[this.activePopover]},focus:null}):(this.activePopover=null,this.handlers.onActiveNodesChanged({popover:null,focus:e}))},e.prototype.onLongPress=function(e){!this.activePopover&&this.popovers[e]&&(this.activePopover=e,this.handlers.onActiveNodesChanged({popover:{parentId:this.activePopover,childIds:this.popovers[this.activePopover]},focus:this._defaultNodeForPopover(this.activePopover)}))},e.prototype.onTrigger=function(e){this.handlers.onClick(e,e,!1)},e.prototype.onTouchEnd=function(e){var t=!!this.activePopover
if(t){if(this._isNodeInsidePopover(this.activePopover,e))this.handlers.onClick(e,e,t)
else if(this.activePopover===e){var n=this._defaultNodeForPopover(e)
this.handlers.onClick(n,n,t)}}else if(this.popovers[e]){var r=this._defaultNodeForPopover(e),o=e
this.handlers.onClick(r,o,t)}else null!=e&&this.onTrigger(e)
this.onBlur()},e.prototype._isNodeInsidePopover=function(e,t){return this.popovers[e].includes(t)},e.prototype._defaultNodeForPopover=function(e){return this.popovers[e][0]},e}()
e.exports=r},function(e,t){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={longPressWaitTimeMs:50,swipeThresholdPx:20,holdIntervalMs:250},i=function(){function e(t,i,a,s){n(this,e),this.handlers=t,this.options=r({},o,i),this.swipeDisabledNodeIds=a||[],this.multiPressableKeys=s||[],this.touchState={},this.swipeState=null}return e.prototype._maybeCancelLongPressForTouch=function(e){var t=this.touchState[e].longPressTimeoutId
t&&(clearTimeout(t),this.touchState[e]=r({},this.touchState[e],{longPressTimeoutId:null}))},e.prototype._maybeCancelPressAndHoldForTouch=function(e){var t=this.touchState[e].pressAndHoldIntervalId
t&&(clearInterval(t),this.touchState[e]=r({},this.touchState[e],{pressAndHoldIntervalId:null}))},e.prototype._cleanupTouchEvent=function(e){this._maybeCancelLongPressForTouch(e),this._maybeCancelPressAndHoldForTouch(e),delete this.touchState[e]},e.prototype._onFocus=function(e,t){var n=this
this._maybeCancelLongPressForTouch(t),this._maybeCancelPressAndHoldForTouch(t),this.touchState[t]=r({},this.touchState[t],{activeNodeId:e}),this.handlers.onFocus(e),e&&(this.multiPressableKeys.includes(e)?(this.handlers.onTrigger(e),this.touchState[t]=r({},this.touchState[t],{pressAndHoldIntervalId:setInterval(function(){n.handlers.onTrigger(e)},this.options.holdIntervalMs)})):this.touchState[t]=r({},this.touchState[t],{longPressTimeoutId:setTimeout(function(){n.handlers.onLongPress(e),n.touchState[t]=r({},n.touchState[t],{longPressTimeoutId:null})},this.options.longPressWaitTimeMs)}))},e.prototype._onSwipeStart=function(){for(var e=Object.keys(this.touchState),t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var r
if(t){if(n>=e.length)break
r=e[n++]}else{if(n=e.next(),n.done)break
r=n.value}var o=r
this._maybeCancelLongPressForTouch(o),this._maybeCancelPressAndHoldForTouch(o)}this.touchState={},this.handlers.onBlur()},e.prototype.onTouchStart=function(e,t,n){if(!this.swipeState&&!this.touchState[t]){var r=e()
this.touchState[t]={swipeLocked:this.swipeDisabledNodeIds.includes(r),startX:n},this._onFocus(r,t)}},e.prototype.onTouchMove=function(e,t,n,r){if(this.swipeState)this.swipeState.touchId===t&&this.handlers.onSwipeChange(n-this.swipeState.startX)
else if(this.touchState[t]){var o=this.touchState[t],i=o.activeNodeId,a=o.startX,s=o.swipeLocked,c=n-a,l=r&&!s&&Math.abs(c)>this.options.swipeThresholdPx
if(l)this._onSwipeStart(),this.swipeState={touchId:t,startX:a},this.handlers.onSwipeChange(n-this.swipeState.startX)
else{var u=e()
u!==i&&this._onFocus(u,t)}}},e.prototype.onTouchEnd=function(e,t,n){if(this.swipeState)this.swipeState.touchId===t&&(this.handlers.onSwipeEnd(n-this.swipeState.startX),this.swipeState=null)
else if(this.touchState[t]){var r=this.touchState[t],o=r.activeNodeId,i=r.pressAndHoldIntervalId
this._cleanupTouchEvent(t)
var a=!!i
a?this.handlers.onBlur():this.handlers.onTouchEnd(o)}},e.prototype.onTouchCancel=function(e){this.swipeState?this.swipeState.touchId===e&&(this.handlers.onSwipeEnd(0),this.swipeState=null):this.touchState[e]&&(this._cleanupTouchEvent(e),this.handlers.onBlur())},e}()
e.exports=i},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(5),l=c.connect,u=n(7),p=u.StyleSheet,h=n(8),f=h.View,d=n(83),y=n(86),m=n(77),b=n(20),E=b.row,v=b.column,g=b.oneColumn,T=b.fullWidth,O=b.roundedTopLeft,_=b.roundedTopRight,w=n(66),P=w.BorderStyles,R=n(21),C=R.valueGrey,M=R.controlGrey,N=n(67),S=N.cursorContextPropType,k=N.keyIdPropType,x=n(68),A=n(71),L=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.cursorContext,r=e.dynamicJumpOut,o=e.extraKeys,i=e.roundTopLeft,s=e.roundTopRight,c=void 0
if(r)switch(n){case A.IN_PARENS:c=x.JUMP_OUT_PARENTHESES
break
case A.IN_SUPER_SCRIPT:c=x.JUMP_OUT_EXPONENT
break
case A.IN_SUB_SCRIPT:c=x.JUMP_OUT_BASE
break
case A.BEFORE_FRACTION:c=x.JUMP_INTO_NUMERATOR
break
case A.IN_NUMERATOR:c=x.JUMP_OUT_NUMERATOR
break
case A.IN_DENOMINATOR:c=x.JUMP_OUT_DENOMINATOR
break
case A.NONE:default:c=x.DISMISS}else c=x.DISMISS
var l=[E,T,I.rightPage,s&&_],u=a.createElement(f,{style:l},a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.NUM_7,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_4,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_1,borders:P.BOTTOM}),a.createElement(y,{keys:o,borders:P.NONE})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.NUM_8,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_5,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_2,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_0,borders:P.LEFT})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.NUM_9,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_6,borders:P.NONE}),a.createElement(m,{keyConfig:x.NUM_3,borders:P.BOTTOM}),a.createElement(m,{keyConfig:x.DECIMAL,borders:P.LEFT})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.DIVIDE,borders:P.LEFT}),a.createElement(m,{keyConfig:x.TIMES,borders:P.LEFT}),a.createElement(m,{keyConfig:x.MINUS,borders:P.LEFT}),a.createElement(m,{keyConfig:x.PLUS,borders:P.LEFT})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.FRAC,style:s&&_}),a.createElement(m,{keyConfig:x.CDOT}),a.createElement(m,{keyConfig:x.BACKSPACE,borders:P.LEFT}),a.createElement(m,{keyConfig:c,borders:P.LEFT}))),p=[E,T,I.leftPage,i&&O],h=a.createElement(f,{style:p},a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.EXP_2,borders:P.NONE,style:i&&O}),a.createElement(m,{keyConfig:x.SQRT,borders:P.NONE}),a.createElement(m,{keyConfig:x.LOG,borders:P.BOTTOM}),a.createElement(m,{keyConfig:x.SIN,borders:P.NONE})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.EXP_3,borders:P.NONE}),a.createElement(m,{keyConfig:x.CUBE_ROOT,borders:P.NONE}),a.createElement(m,{keyConfig:x.LN,borders:P.BOTTOM}),a.createElement(m,{keyConfig:x.COS,borders:P.NONE})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.EXP,borders:P.NONE}),a.createElement(m,{keyConfig:x.RADICAL,borders:P.NONE}),a.createElement(m,{keyConfig:x.LOG_N,borders:P.BOTTOM}),a.createElement(m,{keyConfig:x.TAN,borders:P.NONE})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.GEQ,borders:P.LEFT}),a.createElement(m,{keyConfig:x.EQUAL,borders:P.LEFT}),a.createElement(m,{keyConfig:x.LEQ}),a.createElement(m,{keyConfig:x.LEFT_PAREN,borders:P.LEFT})),a.createElement(f,{style:[v,g]},a.createElement(m,{keyConfig:x.GT,borders:P.NONE}),a.createElement(m,{keyConfig:x.NEQ,borders:P.NONE}),a.createElement(m,{keyConfig:x.LT,borders:P.BOTTOM}),a.createElement(m,{keyConfig:x.RIGHT_PAREN,borders:P.NONE})))
return a.createElement(d,{currentPage:t,rightPage:u,leftPage:h})},t}(a.Component)
L.propTypes={currentPage:s.number.isRequired,cursorContext:S.isRequired,dynamicJumpOut:s.bool,extraKeys:s.arrayOf(k),roundTopLeft:s.bool,roundTopRight:s.bool},L.rows=4,L.columns=5,L.maxVisibleRows=4,L.numPages=2
var I=p.create({rightPage:{backgroundColor:C},leftPage:{backgroundColor:M}}),j=function(e){return{currentPage:e.pager.currentPage,cursorContext:e.input.cursor.context,dynamicJumpOut:!e.layout.navigationPadEnabled}}
e.exports=l(j)(L)},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(5),l=c.connect,u=n(7),p=u.StyleSheet,h=n(12),f=n(84),d=n(85),y=n(8),m=y.View,b=n(20),E=b.column,v=b.row,g=b.fullWidth,T=n(21),O=T.innerBorderColor,_=T.innerBorderStyle,w=T.innerBorderWidthPx,P=T.gray85,R=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.leftPage,r=e.paginationEnabled,o=e.rightPage
return r?a.createElement(h,{style:[E,C.keypad]},a.createElement(d,{numPages:2,currentPage:t}),a.createElement(m,{style:C.borderTop},a.createElement(f,null,n,o))):a.createElement(h,{style:C.keypad},a.createElement(m,{style:v},a.createElement(m,{style:g},n),a.createElement(m,{style:[C.borderLeft,g]},o)))},t}(a.Component)
R.propTypes={currentPage:s.oneOf([0,1]).isRequired,leftPage:s.node.isRequired,paginationEnabled:s.bool.isRequired,rightPage:s.node.isRequired}
var C=p.create({keypad:{backgroundColor:P},borderTop:{borderTop:w+"px "+_+" "+O},borderLeft:{borderLeft:w+"px "+_+" "+O,boxSizing:"content-box"}}),M=function(e){return{paginationEnabled:e.layout.paginationEnabled}}
e.exports=l(M)(R)},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(5),u=l.connect,p=n(7),h=p.StyleSheet,f=n(8),d=f.View,y=n(20),m=y.row,b=n(67),E=b.childrenPropType,v=n(21),g=v.innerBorderColor,T=v.innerBorderStyle,O=v.innerBorderWidthPx,_=function(e){function t(){var n,i,a
r(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=i=o(this,e.call.apply(e,[this].concat(c))),i.state={animationDurationMs:0},a=n,o(i,a)}return i(t,e),t.prototype.componentWillReceiveProps=function(e){var t=void 0
if(e.animateToPosition){var n=e.translateX,r=this.props.translateX
t=Math.abs(n-r)}else t=0
this.setState({animationDurationMs:t})},t.prototype.render=function(){var e=this.props,t=e.children,n=e.pageWidthPx,r=e.translateX,o=this.state.animationDurationMs,i=[m,w.twoPagePager],c={msTransform:"translate3d("+r+"px, 0, 0)",WebkitTransform:"translate3d("+r+"px, 0, 0)",transform:"translate3d("+r+"px, 0, 0)"},l=o?{msTransitionProperty:"transform",WebkitTransitionProperty:"transform",transitionProperty:"transform",msTransitionDuration:o+"ms",WebkitTransitionDuration:o+"ms",transitionDuration:o+"ms",msTransitionTimingFunction:"ease-out",WebkitTransitionTimingFunction:"ease-out",transitionTimingFunction:"ease-out"}:{},u=a({},c,l),p={width:n}
return s.createElement(d,{style:i,dynamicStyle:u},s.createElement(d,{dynamicStyle:p},t[0]),s.createElement(d,{style:w.rightPage,dynamicStyle:p},t[1]))},t}(s.Component)
_.propTypes={animateToPosition:c.bool,children:E,pageWidthPx:c.number.isRequired,translateX:c.number.isRequired}
var w=h.create({twoPagePager:{alignSelf:"flex-start",maxWidth:"250%"},rightPage:{borderLeft:O+"px "+T+" "+g,boxSizing:"content-box"}}),P=function(e){var t=e.pager,n=t.animateToPosition,r=t.currentPage,o=t.dx,i=t.pageWidthPx
return{animateToPosition:n,pageWidthPx:i,translateX:-r*(i+O)+o}}
e.exports=u(P)(_)},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=n(21),f=h.pageIndicatorHeightPx,d=h.gray68,y=h.gray85,m=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.active,n=e.radiusPx,r=t?d:y
return a.createElement("svg",{width:2*n,height:2*n},a.createElement("circle",{cx:n,cy:n,r:n,fill:r}))},t}(a.Component)
m.propTypes={active:s.bool,radiusPx:s.number},m.defaultProps={active:!1,radiusPx:4}
var b=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){for(var e=this.props,t=e.currentPage,n=e.numPages,r=4,o=[],i=0;i<n;i++)o.push(a.createElement(m,{key:i,active:i===t,radiusPx:r}))
var s=2*r*n,c=2*r*(n-1),l={width:s+c}
return a.createElement(p,{style:E.indicatorStrip},a.createElement(p,{style:E.iconStrip,dynamicStyle:l},o))},t}(a.Component)
b.propTypes={currentPage:s.number.isRequired,numPages:s.number.isRequired}
var E=l.create({indicatorStrip:{backgroundColor:"#F0F1F2",flexDirection:"row",justifyContent:"center",alignItems:"center",height:f},iconStrip:{flexDirection:"row",justifyContent:"space-between"}})
e.exports=b},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=n(3),u=n(87),p=n(77),h=n(69),f=n(68),d=n(66),y=d.KeyTypes,m=n(67),b=m.keyIdPropType,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.keys,n=r(e,["keys"])
if(0===t.length)return c.createElement(u,n)
if(1===t.length){var o=f[t[0]]
return c.createElement(p,s({keyConfig:o},n))}var i={id:h.MANY,type:y.MANY,childKeyIds:t}
return c.createElement(p,s({keyConfig:i},n))},t}(c.Component)
E.propTypes={keys:l.arrayOf(b).isRequired},e.exports=E},function(e,t,n){"use strict"
function r(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=n(3),u=n(5),p=u.connect,h=n(78),f=n(68),d=n(16),y=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.gestureManager,n=r(e,["gestureManager"])
return c.createElement(d,s({onTouchStart:function(e){return t.onTouchStart(e)},onTouchEnd:function(e){return t.onTouchEnd(e)},onTouchMove:function(e){return t.onTouchMove(e)},onTouchCancel:function(e){return t.onTouchCancel(e)}},f.NOOP,n))},t}(c.Component)
y.propTypes={gestureManager:l.instanceOf(h)}
var m=function(e){var t=e.gestures
return{gestureManager:t.gestureManager}}
e.exports=p(m)(y)},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(2),s=n(3),c=n(7),l=c.StyleSheet,u=n(8),p=u.View,h=n(77),f=n(20),d=f.row,y=f.column,m=f.centered,b=f.stretch,E=f.roundedTopLeft,v=n(21),g=v.navigationPadWidthPx,T=v.controlGrey,O=v.valueGrey,_=v.gray85,w=n(66),P=w.BorderStyles,R=n(68),C=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.roundTopLeft,n=e.style,r=[y,m,k.container,t&&E].concat(Array.isArray(n)?n:[n])
return a.createElement(p,{style:r},a.createElement(p,{style:[d,m]},a.createElement(h,{keyConfig:R.UP,borders:P.NONE,style:[k.navigationKey,k.topArrow]})),a.createElement(p,{style:[d,m,b]},a.createElement(h,{keyConfig:R.LEFT,borders:P.NONE,style:[k.navigationKey,k.leftArrow]}),a.createElement(p,{style:k.horizontalSpacer}),a.createElement(h,{keyConfig:R.RIGHT,borders:P.NONE,style:[k.navigationKey,k.rightArrow]})),a.createElement(p,{style:[d,m]},a.createElement(h,{keyConfig:R.DOWN,borders:P.NONE,style:[k.navigationKey,k.bottomArrow]})))},t}(a.Component)
C.propTypes={roundTopLeft:s.bool,style:s.any}
var M=48,N=4,S=1,k=l.create({container:{backgroundColor:T,width:g},navigationKey:{borderColor:_,backgroundColor:O,width:M,height:M,boxSizing:"content-box"},topArrow:{borderTopWidth:S,borderLeftWidth:S,borderRightWidth:S,borderTopLeftRadius:N,borderTopRightRadius:N},rightArrow:{borderTopWidth:S,borderRightWidth:S,borderBottomWidth:S,borderTopRightRadius:N,borderBottomRightRadius:N},bottomArrow:{borderBottomWidth:S,borderLeftWidth:S,borderRightWidth:S,borderBottomLeftRadius:N,borderBottomRightRadius:N},leftArrow:{borderTopWidth:S,borderBottomWidth:S,borderLeftWidth:S,borderTopLeftRadius:N,borderBottomLeftRadius:N},horizontalSpacer:{background:O,width:M}})
e.exports=C},function(e,t,n){"use strict"
var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(90),a=n(21),s=a.tabletCutoffPx,c=n(91),l=n(66),u=l.DeviceOrientations,p=l.DeviceTypes,h=l.EchoAnimationTypes,f=l.KeyTypes,d=l.KeypadTypes,y=l.LayoutModes,m=n(69),b=n(68),E=n(71),v=n(78),g=n(92),T=n(11),O=n(82),_=(r={},r[d.FRACTION]=T,r[d.EXPRESSION]=O,r),w=function(){var e={keyHandler:null,cursor:{context:E.NONE}},t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments[1]
switch(n.type){case"SetKeyHandler":return o({},t,{keyHandler:n.keyHandler})
case"PressKey":var r=b[n.key]
return r.type!==f.KEYPAD_NAVIGATION?o({},t,{cursor:t.keyHandler(r.id)}):t
case"SetCursor":return o({},t,{cursor:n.cursor})
default:return t}},n=d.EXPRESSION,r={extraKeys:["x","y",m.THETA,m.PI],keypadType:n,active:!1},a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments[1]
switch(n.type){case"DismissKeypad":return o({},t,{active:!1})
case"ActivateKeypad":return o({},t,{active:!0})
case"ConfigureKeypad":return o({},t,{extraKeys:[]},n.configuration)
case"PressKey":var i=b[n.key]
return i.id===m.DISMISS?e(t,{type:"DismissKeypad"}):t
default:return t}},l=function(e){return e-1},T={animateToPosition:!1,currentPage:l(_[n].numPages),dx:0,numPages:_[n].numPages,pageWidthPx:0,velocityTracker:new g},O=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments[1]
switch(n.type){case"ConfigureKeypad":var r=n.configuration.keypadType,i=_[r].numPages
return o({},t,{numPages:i,animateToPosition:!1,currentPage:l(i),dx:0})
case"SetPageSize":return o({},t,{pageWidthPx:n.pageWidthPx})
case"PressKey":var a=b[n.key]
return a.type===f.VALUE||a.type===f.OPERATOR?e(t,{type:"ResetKeypadPage"}):t
case"ResetKeypadPage":return o({},t,{animateToPosition:!0,currentPage:l(t.numPages),dx:0})
case"PageKeypadRight":var s=Math.min(t.currentPage+1,t.numPages-1)
return o({},t,{animateToPosition:!0,currentPage:s,dx:0})
case"PageKeypadLeft":var c=Math.max(t.currentPage-1,0)
return o({},t,{animateToPosition:!0,currentPage:c,dx:0})
case"OnSwipeChange":return t.velocityTracker.push(n.dx),o({},t,{animateToPosition:!1,dx:n.dx})
case"OnSwipeEnd":var u=t.pageWidthPx,p=t.velocityTracker,h=n.dx,d=p.getVelocity(),y=.1,m=10,E=h<-u/2||d<-y&&h<-m,v=h>u/2||d>y&&h>m
return E?e(t,{type:"PageKeypadRight"}):v?e(t,{type:"PageKeypadLeft"}):o({},t,{animateToPosition:!0,dx:0})
default:return t}},w=function(e){return new v({swipeEnabled:e},{onSwipeChange:function(e){L.dispatch({type:"OnSwipeChange",dx:e})},onSwipeEnd:function(e){L.dispatch({type:"OnSwipeEnd",dx:e})},onActiveNodesChanged:function(e){L.dispatch({type:"SetActiveNodes",activeNodes:e})},onClick:function(e,t,n){L.dispatch(o({type:"PressKey",key:e},t,{inPopover:n}))}},[],[m.BACKSPACE,m.UP,m.RIGHT,m.DOWN,m.LEFT])},P={popover:null,focus:null,gestureManager:w(_[n].numPages>1)},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments[1]
switch(t.type){case"DismissKeypad":return e.gestureManager.disableEventTracking(),e
case"ActivateKeypad":return e.gestureManager.enableEventTracking(),e
case"SetActiveNodes":return o({},e,t.activeNodes)
case"ConfigureKeypad":var n=t.configuration.keypadType,r=_[n].numPages,i=r>1
return{popover:null,focus:null,gestureManager:w(i)}
default:return e}},C=0,M={echoes:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments[1]
switch(t.type){case"PressKey":var n=b[t.key]
return n.type===f.VALUE||n.type===f.OPERATOR?o({},e,{echoes:[].concat(e.echoes,[{animationId:""+C++,animationType:t.inPopover?h.LONG_FADE_ONLY:h.FADE_ONLY,borders:t.borders,id:n.id,initialBounds:t.initialBounds}])}):e
case"RemoveEcho":var r=e.echoes.filter(function(e){return e.animationId!==t.animationId})
return o({},e,{echoes:r})
default:return e}},S={gridDimensions:{numRows:_[n].rows,numColumns:_[n].columns,numMaxVisibleRows:_[n].maxVisibleRows,numPages:_[n].numPages},buttonDimensions:{widthPx:48,heightPx:48},pageDimensions:{pageWidthPx:0,pageHeightPx:0},layoutMode:y.FULLSCREEN,paginationEnabled:!1,navigationPadEnabled:!1},k=function(e,t){var n=e.pageWidthPx,r=e.pageHeightPx,i=n>r?u.LANDSCAPE:u.PORTRAIT,a=Math.min(n,r)>s?p.TABLET:p.PHONE,l=a===p.TABLET,h=a===p.PHONE&&i===u.PORTRAIT,f={deviceOrientation:i,deviceType:a},d={navigationPadEnabled:l,paginationEnabled:h,toolbarEnabled:!0}
return o({},c(t,e,f,d),{navigationPadEnabled:l,paginationEnabled:h})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments[1]
switch(t.type){case"ConfigureKeypad":var n=t.configuration.keypadType,r={numRows:_[n].rows,numColumns:_[n].columns,numMaxVisibleRows:_[n].maxVisibleRows,numPages:_[n].numPages}
return o({},e,k(e.pageDimensions,r),{gridDimensions:r})
case"SetPageSize":var i=t.pageWidthPx,a=t.pageHeightPx,s={pageWidthPx:i,pageHeightPx:a}
return o({},e,k(s,e.gridDimensions),{pageDimensions:s})
default:return e}},A=i.combineReducers({input:t,keypad:a,pager:O,gestures:R,echoes:N,layout:x}),L=i.createStore(A)
return L}
e.exports=w},function(e,t){e.exports=s},function(e,t,n){"use strict"
var r=n(66),o=r.DeviceTypes,i=r.DeviceOrientations,a=r.LayoutModes,s=n(21),c=s.pageIndicatorHeightPx,l=s.toolbarHeightPx,u=s.navigationPadWidthPx,p=s.innerBorderWidthPx,h=48,f=64,d=32,y=44,m=64,b=44,E=y+b,v=b+(m-y),g=320/(480-y),T=function(e,t,n,r){var s=e.numColumns,y=e.numMaxVisibleRows,m=e.numPages,b=t.pageWidthPx,T=t.pageHeightPx,O=n.deviceOrientation,_=n.deviceType,w=r.navigationPadEnabled,P=r.paginationEnabled,R=r.toolbarEnabled,C=P?s:s*m,M=void 0
if(_===o.PHONE){var N=O===i.LANDSCAPE,S=N?E:v,k=d+S+(R?l:0)+(P?c:0),x=b,A=N?T:b/g,L=A-k,I=Math.max(Math.min(L/y,f),h),j=void 0
if(m>1){var B=P?s:s*m
j=x/B}else j=N?f:x/s
M={widthPx:j,heightPx:I}}else{if(_!==o.TABLET)throw new Error("Invalid device type: "+_)
M={widthPx:f,heightPx:f}}var F=(w?1:0)+(P?0:m-1),U=C*M.widthPx+(w?u:0)+F*p
return{buttonDimensions:M,layoutMode:U>=b?a.FULLSCREEN:a.COMPACT}}
e.exports=T},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(93),a=function(){function e(t){r(this,e),this.options=o({velocityTimeout:100},t),this._events=[]}return e.prototype.push=function(e){this._events.push({x:e,t:i()})},e.prototype.getVelocity=function(){var e=this._getEvents()
if(e.length<2)return 0
var t=e[e.length-1],n=e[0],r=t.t-n.t
return(t.x-n.x)/r},e.prototype._getEvents=function(){var e=i()-this.options.velocityTimeout,t=this._events.filter(function(t){return t.t>e})
return this._events=[],t},e}()
e.exports=a},function(e,t,n){(function(t){(function(){var n,r,o
"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e
return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(94))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(u===setTimeout)return setTimeout(e,0)
if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0)
try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e)
if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e)
try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){y&&f&&(y=!1,f.length?d=f.concat(d):m=-1,d.length&&s())}function s(){if(!y){var e=o(a)
y=!0
for(var t=d.length;t;){for(f=d,d=[];++m<t;)f&&f[m].run()
m=-1,t=d.length}f=null,y=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,p,h=e.exports={}
!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}()
var f,d=[],y=!1,m=-1
h.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
d.push(new c(e,t)),1!==d.length||y||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.prependListener=l,h.prependOnceListener=l,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(4),u=n(7),p=u.StyleSheet,h=n(8),f=h.View,d=n(96),y=n(97),m=n(100),b=n(101),E=n(21),v=E.cursorHandleRadiusPx,g=E.cursorHandleDistanceMultiplier,T=E.gray76,O=n(67),_=O.keypadElementPropType,w=n(21),P=w.brightGreen,R=w.gray17,C=window.i18n||{_:function(e){return e}},M=.8,N=function(e){function t(){var n,i,a
r(this,t)
for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l]
return n=i=o(this,e.call.apply(e,[this].concat(c))),i.state={focused:!1,handle:{animateIntoPosition:!1,visible:!1,x:0,y:0}},i._clearKeypadBoundsCache=function(e){i._keypadBounds=null},i._cacheKeypadBounds=function(e){i._keypadBounds=e.getBoundingClientRect()},i._getKeypadBounds=function(){if(!i._keypadBounds){var e=i.props.keypadElement.getDOMNode()
i._cacheKeypadBounds(e)}return i._keypadBounds},i._updateCursorHandle=function(e){var t=i._container.getBoundingClientRect(),n=i._container.querySelector(".mq-cursor"),r=n.getBoundingClientRect(),o=r.width,a=2
i.setState({handle:{visible:!0,animateIntoPosition:e,x:r.left+o/2-t.left,y:r.bottom+a-t.top}})},i._hideCursorHandle=function(){i.setState({handle:{visible:!1,x:0,y:0}})},i.blur=function(){i.mathField.blur(),i.props.onBlur&&i.props.onBlur(),i.setState({focused:!1,handle:{visible:!1}})},i.focus=function(){i.props.keypadElement.setKeyHandler(function(e){var t=i.mathField.pressKey(e),n=function(){i.setState({handle:{visible:!1}})},r=i.mathField.getContent()
return i.props.value!==r?i.props.onChange(r,n):n(),t}),i.mathField.focus(),i.props.onFocus&&i.props.onFocus(),i.setState({focused:!0},function(){setTimeout(function(){if(i._isMounted){var e=i.props.keypadElement&&i.props.keypadElement.getDOMNode()
m(i._container,e)}})})},i._findHitNode=function(e,t,n,r,o){for(;n>=e.top&&n<=e.bottom;){n+=o
for(var a=[[t-r,n],[t,n],[t+r,n]],s=a.map(function(e){var t
return(t=document).elementFromPoint.apply(t,e)}).filter(function(e){return e&&i._root.contains(e)&&(!e.classList.contains("mq-root-block")&&!e.classList.contains("mq-non-leaf")||e.classList.contains("mq-empty")||e.classList.contains("mq-hasCursor"))}),c=null,l=[],u=[],p=0,h={},f={},d=s,y=Array.isArray(d),m=0,d=y?d:d[Symbol.iterator]();;){var b
if(y){if(m>=d.length)break
b=d[m++]}else{if(m=d.next(),m.done)break
b=m.value}var E=b,v=E.getAttribute("mathquill-command-id")
null!=v?(l.push(E),h[v]=(h[v]||0)+1,f[v]=E):u.push(E)}for(var g=Object.entries(h),T=Array.isArray(g),O=0,g=T?g:g[Symbol.iterator]();;){var _
if(T){if(O>=g.length)break
_=g[O++]}else{if(O=g.next(),O.done)break
_=O.value}var w=_,P=w[0],R=w[1]
R>p&&(p=R,c=f[P])}if(null==c&&u.length>0&&(c=u[0]),null!==c)return i.mathField.setCursorPosition(t,n,c),!0}return!1},i._insertCursorAtClosestNode=function(e,t){var n=i.mathField.getCursor()
if(!i._root.hasChildNodes())return void n.insAtLeftEnd(i.mathField.mathField.__controller.root)
t>i._containerBounds.bottom?t=i._containerBounds.bottom:t<i._containerBounds.top&&(t=i._containerBounds.top+10)
var r=void 0
r=-8
var o=5
if(!i._findHitNode(i._containerBounds,e,t,o,r)&&(t=i._containerBounds.top,r=8,!i._findHitNode(i._containerBounds,e,t,o,r))){var a=i._root.firstChild.getBoundingClientRect(),s=i._root.lastChild.getBoundingClientRect(),c=a.left,l=s.right
Math.abs(e-l)<Math.abs(e-c)?n.insAtRightEnd(i.mathField.mathField.__controller.root):n.insAtLeftEnd(i.mathField.mathField.__controller.root),i.props.keypadElement&&i.props.keypadElement.setCursor({context:i.mathField.contextForCursor(n)})}},i.handleTouchStart=function(e){if(e.stopPropagation(),i._hideCursorHandle(),""!==i.mathField.getContent()){i._containerBounds=i._container.getBoundingClientRect()
var t=e.changedTouches[0]
i._insertCursorAtClosestNode(t.clientX,t.clientY)}i.state.focused||i.focus()},i.handleTouchMove=function(e){if(e.stopPropagation(),""!==i.mathField.getContent()&&i.state.focused){var t=e.changedTouches[0]
i._insertCursorAtClosestNode(t.clientX,t.clientY)}},i.handleTouchEnd=function(e){e.stopPropagation(),""!==i.mathField.getContent()&&i.state.focused&&i._updateCursorHandle()},i.onCursorHandleTouchStart=function(e){e.stopPropagation(),e.preventDefault(),i._containerBounds=i._container.getBoundingClientRect()},i._constrainToBound=function(e,t,n,r){return e<t?t+(e-t)*r:e>n?n+(e-n)*r:e},i.onCursorHandleTouchMove=function(e){e.stopPropagation()
var t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY,r=t-i._containerBounds.left,o=n-2*v*g-i._containerBounds.top
i.setState({handle:{animateIntoPosition:!1,visible:!0,x:i._constrainToBound(r,0,i._containerBounds.width,M),y:i._constrainToBound(o,0,i._containerBounds.height,M)}})
var a=22,s=n-a
i._insertCursorAtClosestNode(t,s)},i.onCursorHandleTouchEnd=function(e){e.stopPropagation(),i._updateCursorHandle(!0)},i.onCursorHandleTouchCancel=function(e){e.stopPropagation(),i._updateCursorHandle(!0)},a=n,o(i,a)}return i(t,e),t.prototype.componentDidMount=function(){var e=this
this._isMounted=!0,this.mathField=new y(this._mathContainer,{},{onCursorMove:function(t){e.props.keypadElement&&e.props.keypadElement.setCursor(t)}}),this.mathField.mathField.__controller.container.unbind("mousedown.mathquill"),this.props.scrollable||(this.mathField.mathField.__controller.scrollHoriz=function(){}),this.mathField.setContent(this.props.value),this._container=l.findDOMNode(this),this._root=this._container.querySelector(".mq-root-block"),this._root.style.fontSize=S+"pt",this.touchStartInitialScroll=null,this.recordTouchStartOutside=function(t){if(e.state.focused&&!e._container.contains(t.target)){var n=!1
if(e.props.keypadElement&&e.props.keypadElement.getDOMNode())for(var r=e._getKeypadBounds(),o=0;o<t.changedTouches.length;o++){var i=[t.changedTouches[o].clientX,t.changedTouches[o].clientY],a=i[0],s=i[1]
if(r.left<=a&&r.right>=a&&r.top<=s&&r.bottom>=s||r.bottom<s){n=!0
break}}n||(e.didTouchOutside=!0,e.dragListener&&e.dragListener.detach(),e.dragListener=new b(function(){e.didScroll=!0,e.dragListener.detach()},t),e.dragListener.attach())}},this.blurOnTouchEndOutside=function(t){e.state.focused&&e.didTouchOutside&&!e.didScroll&&e.blur(),e.didTouchOutside=!1,e.didScroll=!1,e.dragListener&&(e.dragListener.detach(),e.removeListeners=null)},window.addEventListener("touchstart",this.recordTouchStartOutside),window.addEventListener("touchend",this.blurOnTouchEndOutside),window.addEventListener("touchcancel",this.blurOnTouchEndOutside),window.addEventListener("resize",this._clearKeypadBoundsCache),window.addEventListener("orientationchange",this._clearKeypadBoundsCache)},t.prototype.componentWillReceiveProps=function(e){this.props.keypadElement!==e.keypadElement&&this._clearKeypadBoundsCache()},t.prototype.componentDidUpdate=function(){this.mathField.getContent()!==this.props.value&&this.mathField.setContent(this.props.value)},t.prototype.componentWillUnmount=function(){this._isMounted=!1,window.removeEventListener("touchstart",this.recordTouchStartOutside),window.removeEventListener("touchend",this.blurOnTouchEndOutside),window.removeEventListener("touchcancel",this.blurOnTouchEndOutside),window.removeEventListener("resize",this._clearKeypadBoundsCache()),window.removeEventListener("orientationchange",this._clearKeypadBoundsCache())},t.prototype.render=function(){var e=this,t=this.state,n=t.focused,r=t.handle,o=this.props.style,i=1,c=2,u=this.state.focused?c:i,p=2,h=x-u-p,y=3,m=1,b={paddingTop:h-m,paddingRight:h,paddingBottom:h-y,paddingLeft:h},E=a({},j.innerContainer,{borderWidth:u},b,n?{borderColor:P}:{},o)
return s.createElement(f,{style:I.input,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onClick:function(e){return e.stopPropagation()},role:"textbox",ariaLabel:C._("Math input box")},s.createElement("div",{className:"keypad-input"},s.createElement("div",{ref:function(t){e._mathContainer=l.findDOMNode(t)},style:E})),n&&r.visible&&s.createElement(d,a({},r,{onTouchStart:this.onCursorHandleTouchStart,onTouchMove:this.onCursorHandleTouchMove,onTouchEnd:this.onCursorHandleTouchEnd,onTouchCancel:this.onCursorHandleTouchCancel})))},t}(s.Component)
N.propTypes={keypadElement:_,onBlur:c.func,onChange:c.func.isRequired,onFocus:c.func,scrollable:c.bool,style:c.any,value:c.string},N.defaultProps={scrollable:!1,style:{},value:""}
var S=18,k=20,x=8,A=k+2*x,L=64,I=p.create({input:{position:"relative",display:"inline-block",verticalAlign:"middle"}}),j={innerContainer:{backgroundColor:"white",display:"flex",minHeight:A,minWidth:L,boxSizing:"border-box",position:"relative",overflow:"hidden",borderStyle:"solid",borderColor:T,borderRadius:4,color:R}}
e.exports=N},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(2),c=n(3),l=n(21),u=l.cursorHandleRadiusPx,p=l.brightGreen,h=l.cursorHandleDistanceMultiplier,f=22,d=2*f,y=2*f,m=u,b=h*m+m,E=2*m,v=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.x,n=e.y,r=e.animateIntoPosition,o=r?{msTransitionDuration:"100ms",WebkitTransitionDuration:"100ms",transitionDuration:"100ms",msTransitionProperty:"transform",WebkitTransitionProperty:"transform",transitionProperty:"transform"}:{},i="translate("+t+"px, "+n+"px)",c=a({position:"absolute",zIndex:4,left:-y/2,top:0,msTransform:i,WebkitTransform:i,transform:i,width:y,height:d,touchAction:"none"},o),l={marginLeft:f-m}
return s.createElement("span",{style:c,onTouchStart:this.props.onTouchStart,onTouchMove:this.props.onTouchMove,onTouchEnd:this.props.onTouchEnd,onTouchCancel:this.props.onTouchCancel},s.createElement("svg",{width:E,height:b,viewBox:"-"+m+" 0 "+E+" "+b,style:l},s.createElement("path",{d:"M 0 0\n                        L -"+.707*m+" "+.707*m+"\n                        A "+m+" "+m+", 0, 1, 0,\n                          "+.707*m+" "+.707*m+"\n                        Z",fill:p})))},t}(s.Component)
v.propTypes={animateIntoPosition:c.bool,onTouchCancel:c.func.isRequired,onTouchEnd:c.func.isRequired,onTouchMove:c.func.isRequired,onTouchStart:c.func.isRequired,visible:c.bool.isRequired,x:c.number.isRequired,y:c.number.isRequired},v.defaultProps={animateIntoPosition:!1,visible:!1,x:0,y:0},e.exports=v},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,i,a,s=n(98),c=window.MathQuill||n(99),l=n(69),u=n(71),p=n(66),h=p.DecimalSeparators,f=n(70),d=f.decimalSeparator,y=d===h.COMMA?",":".",m="write",b="cmd",E="keystroke",v=0,g=(o={},o[l.PLUS]={str:"+",fn:m},o[l.MINUS]={str:"-",fn:m},o[l.NEGATIVE]={str:"-",fn:m},o[l.TIMES]={str:"\\times",fn:m},o[l.DIVIDE]={str:"\\div",fn:m},o[l.DECIMAL]={str:y,fn:m},o[l.EQUAL]={str:"=",fn:m},o[l.NEQ]={str:"\\neq",fn:m},o[l.CDOT]={str:"\\cdot",fn:m},o[l.PERCENT]={str:"%",fn:m},o[l.LEFT_PAREN]={str:"(",fn:b},o[l.RIGHT_PAREN]={str:")",fn:b},o[l.SQRT]={str:"sqrt",fn:b},o[l.PI]={str:"pi",fn:b},o[l.THETA]={str:"theta",fn:b},o[l.RADICAL]={str:"nthroot",fn:b},o[l.LT]={str:"<",fn:m},o[l.LEQ]={str:"\\leq",fn:m},o[l.GT]={str:">",fn:m},o[l.GEQ]={str:"\\geq",fn:m},o[l.UP]={str:"Up",fn:E},o[l.DOWN]={str:"Down",fn:E},o[l.FRAC_INCLUSIVE]={str:"/",fn:b},o),T=(i={},i[l.LOG]="log",i[l.LN]="ln",i[l.SIN]="sin",i[l.COS]="cos",i[l.TAN]="tan",i),O=["+","-","\\cdot","\\times","\\div"],_=["=","\\neq","<","\\leq",">","\\geq"],w=["0","1","2","3","4","5","6","7","8","9"],P=["\\theta","\\pi"],R=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],C=[].concat(w,P,R.map(function(e){return e.toLowerCase()}),R.map(function(e){return e.toUpperCase()})),M=(a={},a[u.IN_PARENS]=l.JUMP_OUT_PARENTHESES,a[u.IN_SUPER_SCRIPT]=l.JUMP_OUT_EXPONENT,a[u.IN_SUB_SCRIPT]=l.JUMP_OUT_BASE,a[u.BEFORE_FRACTION]=l.JUMP_INTO_NUMERATOR,a[u.IN_NUMERATOR]=l.JUMP_OUT_NUMERATOR,a[u.IN_DENOMINATOR]=l.JUMP_OUT_DENOMINATOR,a),N=function(){function e(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})
r(this,e),this.MQ=c.getInterface(2),this.mathField=this.MQ.MathField(t,{substituteTextarea:function(){return document.createElement("span")}}),this.callbacks=n}return e.prototype.focus=function(){var e=this.mathField.__controller
e.cursor.show(),e.blurred=!1},e.prototype.blur=function(){var e=this.mathField.__controller
e.cursor.hide(),e.blurred=!0},e.prototype._writeNormalFunction=function(e){this.mathField.write("\\"+e+"\\left(\\right)"),this.mathField.keystroke("Left")},e.prototype.pressKey=function(e){var t=this.mathField.__controller.cursor
if(e in g){var n=g[e],r=n.str,o=n.fn
r&&o&&this.mathField[o](r)}else if(Object.keys(T).includes(e))this._writeNormalFunction(T[e])
else if(e===l.FRAC_EXCLUSIVE){var i=t[this.MQ.L]===v
this.mathField.cmd("\\frac"),i&&this.mathField.keystroke("Left")}else if(e===l.FRAC){t[this.MQ.L]===v
this.mathField.cmd("\\frac")}else e===l.LOG_N?(this.mathField.write("log_{ }\\left(\\right)"),this.mathField.keystroke("Left"),this.mathField.keystroke("Left"),this.mathField.keystroke("Left")):e===l.CUBE_ROOT?(this.mathField.write("\\sqrt[3]{}"),this.mathField.keystroke("Left")):e===l.EXP||e===l.EXP_2||e===l.EXP_3?this._handleExponent(t,e):e===l.JUMP_OUT_PARENTHESES||e===l.JUMP_OUT_EXPONENT||e===l.JUMP_OUT_BASE||e===l.JUMP_INTO_NUMERATOR||e===l.JUMP_OUT_NUMERATOR||e===l.JUMP_OUT_DENOMINATOR?this._handleJumpOut(t,e):e===l.BACKSPACE?this._handleBackspace(t):e===l.LEFT?this._handleLeftArrow(t):e===l.RIGHT||e===l.JUMP_OUT?this._handleRightArrow(t):/^[a-zA-Z]$/.test(e)?this.mathField[m](e):/^NUM_\d/.test(e)&&this.mathField[m](e[4])
return t.selection||t.show(),this.callbacks.onSelectionChanged&&this.callbacks.onSelectionChanged(t.selection),{context:this.contextForCursor(t)}},e.prototype.setCursorPosition=function(e,t,n){var r=n||document.elementFromPoint(e,t)
if(r){var o=this.getCursor()
if(r.hasAttribute("mq-root-block"))o.insAtRightEnd(this.mathField.__controller.root)
else{var i=this.mathField.__controller,a=e-document.body.scrollLeft,c=t-document.body.scrollTop
i.seek(s(r),a,c).cursor.startSelection()
var l=this._maybeFindCommand(o[this.MQ.L])
l&&l.endNode&&(o.insLeftOf(l.endNode),this.mathField.keystroke("Right"))}this.callbacks.onCursorMove&&this.callbacks.onCursorMove({context:this.contextForCursor(o)})}},e.prototype.getCursor=function(){return this.mathField.__controller.cursor},e.prototype.getSelection=function(){return this.getCursor().selection},e.prototype.getContent=function(){return this.mathField.latex()},e.prototype.setContent=function(e){this.mathField.latex(e)},e.prototype.isEmpty=function(){var e=this.getCursor()
return 1===e.parent.id&&0===e[1]&&0===e[-1]},e.prototype._handleBackspaceInNthRoot=function(e){var t=e[this.MQ.L]===v,n=this._isInsideEmptyNode(e.parent.parent.blocks[0].ends)
t?(this._selectNode(e.parent.parent,e),n&&this.mathField.keystroke("Backspace")):this.mathField.keystroke("Backspace")},e.prototype._handleJumpOut=function(e,t){var n=this.contextForCursor(e)
if(M[n]===t)switch(n){case u.IN_PARENS:e.insRightOf(e.parent.parent)
break
case u.BEFORE_FRACTION:for(var r=void 0,o=e;o[this.MQ.R]!==v;)this._isFraction(o[this.MQ.R])&&(r=o[this.MQ.R]),o=o[this.MQ.R]
e.insLeftOf(r),this.mathField.keystroke("Right")
break
case u.IN_NUMERATOR:for(var i=e.parent.parent.blocks[1];e.parent!==i;)this.mathField.keystroke("Right")
break
case u.IN_DENOMINATOR:e.insRightOf(e.parent.parent)
break
case u.IN_SUB_SCRIPT:e.insRightOf(e.parent.parent),this._isParens(e[this.MQ.R])&&this.mathField.keystroke("Right")
break
case u.IN_SUPER_SCRIPT:e.insRightOf(e.parent.parent)
break
default:throw new Error("Attempted to 'Jump Out' from node, but found no appropriate cursor context: "+n)}},e.prototype._handleBackspace=function(e){if(e.selection)this.mathField.keystroke("Backspace")
else{var t=e.parent,n=t.parent,r=e[this.MQ.L]
this._isFraction(r)?this._selectNode(r,e):this._isSquareRoot(r)?this._selectNode(r,e):this._isNthRoot(r)?this._selectNode(r,e):this._isNthRootIndex(t)?this._handleBackspaceInRootIndex(e):"\\left("===r.ctrlSeq?this._handleBackspaceOutsideParens(e):"\\left("===n.ctrlSeq?this._handleBackspaceInsideParens(e):this._isInsideLogIndex(e)?this._handleBackspaceInLogIndex(e):"\\ge "===r.ctrlSeq||"\\le "===r.ctrlSeq?this._handleBackspaceAfterLigaturedSymbol(e):this._isNthRoot(n)&&r===v?this._handleBackspaceInNthRoot(e):this.mathField.keystroke("Backspace")}},e.prototype._handleLeftArrow=function(e){if(e[this.MQ.L]===v){var t=e.parent,n=t.parent
if("\\left("===n.ctrlSeq){var r=this._maybeFindCommandBeforeParens(n)
if(r)return void e.insLeftOf(r.startNode)}}this.mathField.keystroke("Left")},e.prototype._handleRightArrow=function(e){var t=this._maybeFindCommand(e[this.MQ.R])
t?(e.insLeftOf(t.endNode),this.mathField.keystroke("Right")):this.mathField.keystroke("Right")},e.prototype._handleExponent=function(e,t){var n=[].concat(O,_),r=e[this.MQ.L],o=r===v||n.includes(r.ctrlSeq.trim())
switch(o&&this.mathField.write("\\left(\\right)"),t){case l.EXP:this.mathField.cmd("^")
break
case l.EXP_2:case l.EXP_3:this.mathField.write("^"+(t===l.EXP_2?2:3)),o&&(this.mathField.keystroke("Left"),this.mathField.keystroke("Left"),this.mathField.keystroke("Left"),this.mathField.keystroke("Left"))
break
default:throw new Error("Invalid exponent key: "+t)}},e.prototype._maybeFindCommand=function(e){if(!e)return null
for(var t=/^[a-z]$/,n=/^\\[a-z]$/,r="\\left(",o=["\\log","\\ln","\\cos","\\sin","\\tan"],i="",a=void 0,s=void 0,c=e;0!==c;){var l=c.ctrlSeq.trim()
if(!t.test(l)){if(n.test(l)){i=l+i,a=c
break}break}i=l+i,c=c[this.MQ.L]}if(a){for(c=e[this.MQ.R];0!==c;){var u=c.ctrlSeq.trim()
if(t.test(u))i+=u
else if(u===r){s=c
break}c=c[this.MQ.R]}return o.includes(i)?{name:i,startNode:a,endNode:s}:null}return null},e.prototype._maybeFindCommandBeforeParens=function(e){return this._maybeFindCommand(e[this.MQ.L])},e.prototype._selectNode=function(e,t){t.insLeftOf(e),t.startSelection(),t.insRightOf(e),t.select(),t.endSelection()},e.prototype._isFraction=function(e){return e.jQ&&e.jQ.hasClass("mq-fraction")},e.prototype._isNumerator=function(e){return e.jQ&&e.jQ.hasClass("mq-numerator")},e.prototype._isDenominator=function(e){return e.jQ&&e.jQ.hasClass("mq-denominator")},e.prototype._isSubScript=function(e){return e.jQ&&(e.jQ.hasClass("mq-sub-only")||e.jQ.hasClass("mq-sub"))},e.prototype._isSuperScript=function(e){return e.jQ&&(e.jQ.hasClass("mq-sup-only")||e.jQ.hasClass("mq-sup"))},e.prototype._isParens=function(e){return e&&"\\left("===e.ctrlSeq},e.prototype._isLeaf=function(e){return e&&e.ctrlSeq&&C.includes(e.ctrlSeq.trim())},e.prototype._isSquareRoot=function(e){return e.blocks&&e.blocks[0].jQ&&e.blocks[0].jQ.hasClass("mq-sqrt-stem")},e.prototype._isNthRoot=function(e){return e.blocks&&e.blocks[0].jQ&&e.blocks[0].jQ.hasClass("mq-nthroot")},e.prototype._isNthRootIndex=function(e){return e.jQ&&e.jQ.hasClass("mq-nthroot")},e.prototype._isInsideLogIndex=function(e){var t=e.parent.parent
if(t&&t.jQ.hasClass("mq-supsub")){var n=this._maybeFindCommandBeforeParens(t)
if(n&&"\\log"===n.name)return!0}return!1},e.prototype._isInsideEmptyNode=function(e){return e[this.MQ.L]===v&&e[this.MQ.R]===v},e.prototype._handleBackspaceInRootIndex=function(e){if(this._isInsideEmptyNode(e)){var t=e.parent.parent,n=t.latex(),r=t[this.MQ.L]
this._selectNode(t,e)
var o=""===t.blocks[1].jQ.text()
o?this.mathField.keystroke("Backspace"):(this.mathField.keystroke("Backspace"),this.mathField.write(n.replace(/^\\sqrt\[\]/,"\\sqrt")),r===v?this.mathField.moveToDirEnd(this.MQ.L):e.insRightOf(r))}else e[this.MQ.L]!==v&&this.mathField.keystroke("Backspace")},e.prototype._handleBackspaceInLogIndex=function(e){if(this._isInsideEmptyNode(e)){var t=e.parent.parent,n=this._maybeFindCommandBeforeParens(t)
e.insLeftOf(n.startNode),e.startSelection(),t[this.MQ.R]!==v?e.insRightOf(t[this.MQ.R]):e.insRightOf(t),e.select(),e.endSelection()
var r=""===t[this.MQ.R].contentjQ.text()
r&&this.mathField.keystroke("Backspace")}else this.mathField.keystroke("Backspace")},e.prototype._handleBackspaceOutsideParens=function(e){var t=e[this.MQ.L],n=e[this.MQ.R],r=this._maybeFindCommandBeforeParens(t)
r&&r.startNode?(e.insLeftOf(r.startNode),e.startSelection(),n===v?e.insAtRightEnd(e.parent):e.insLeftOf(n),e.select(),e.endSelection()):(e.startSelection(),e.insLeftOf(t),e.select(),e.endSelection())},e.prototype._handleBackspaceInsideParens=function(e){if(e[this.MQ.L]!==v)return void this.mathField.keystroke("Backspace")
var t=e.parent.parent
if(t[this.MQ.L].sub&&t[this.MQ.L].sub.jQ.text())return void e.insAtRightEnd(t[this.MQ.L].sub)
var n=this._isInsideEmptyNode(e),r=this._maybeFindCommandBeforeParens(t)
e.insLeftOf(r&&r.startNode||t),e.startSelection(),e.insRightOf(t),e.select(),e.endSelection(),n&&this.mathField.keystroke("Backspace")},e.prototype._handleBackspaceAfterLigaturedSymbol=function(e){this.mathField.keystroke("Backspace"),this.mathField.keystroke("Backspace")},e.prototype.contextForCursor=function(e){for(var t=e;t[this.MQ.R]!==v;){if(this._isFraction(t[this.MQ.R]))return u.BEFORE_FRACTION
if(!this._isLeaf(t[this.MQ.R]))break
t=t[this.MQ.R]}return this._isParens(e.parent&&e.parent.parent)?u.IN_PARENS:this._isNumerator(e.parent)?u.IN_NUMERATOR:this._isDenominator(e.parent)?u.IN_DENOMINATOR:this._isSubScript(e.parent)?u.IN_SUB_SCRIPT:this._isSuperScript(e.parent)?u.IN_SUPER_SCRIPT:u.NONE},e.prototype._isAtTopLevel=function(e){return!e.parent.parent},e}()
e.exports=N},function(e,t){e.exports=c},function(e,t){e.exports=l},function(e,t,n){"use strict"
function r(){return"scrollingElement"in document?document.scrollingElement:navigator.userAgent.indexOf("WebKit")!=-1?document.body:document.documentElement}var o=n(21),i=o.toolbarHeightPx,a=function(e,t){var n=e.getBoundingClientRect(),o=n.bottom,a=n.top,s=r(),c=16
if(t){var l=window.innerHeight,u=t.clientHeight,p=l-(u+i)
if(o>p){var h=Math.min(o-p+c,a)
return void(s.scrollTop+=h)}}a<c&&(s.scrollTop-=n.height+c)}
e.exports=a},function(e,t){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=8,o=function(){function e(t,o){n(this,e),this._scrollListener=function(){t()}
for(var i={},a=0;a<o.changedTouches.length;a++){var s=o.changedTouches[a]
i[s.identifier]=[s.clientX,s.clientY]}this._moveListener=function(e){for(var n=0;n<e.changedTouches.length;n++){var o=e.changedTouches[n],a=i[o.identifier]
if(a){var s=[o.clientX,o.clientY],c=s[0]-a[0],l=s[1]-a[1],u=c*c+l*l,p=r*r
u>p&&t()}}},this._endAndCancelListener=function(e){for(var t=0;t<e.changedTouches.length;t++)delete i[e.changedTouches[t].identifier]}}return e.prototype.attach=function(){window.addEventListener("scroll",this._scrollListener),window.addEventListener("touchmove",this._moveListener),window.addEventListener("touchend",this._endAndCancelListener),window.addEventListener("touchcancel",this._endAndCancelListener)},e.prototype.detach=function(){window.removeEventListener("scroll",this._scrollListener),window.removeEventListener("touchmove",this._moveListener),window.removeEventListener("touchend",this._endAndCancelListener),window.removeEventListener("touchcancel",this._endAndCancelListener)},e}()
e.exports=o}])})

});
KAdefine("javascript/node_modules/math-input/index.js", function(require, module, exports) {
module.exports=require("../../../third_party/javascript-khansrc/math-input/math-input.js")

});
KAdefine("javascript/perseus-all-package/jquery.mobile.vmouse.js", function(require, module, exports) {
(function($,e,t,n){if(typeof $==="undefined"){return}var i="virtualMouseBindings",o="virtualTouchID",a="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),r="clientX clientY pageX pageY screenX screenY".split(" "),u=$.event.mouseHooks?$.event.mouseHooks.props:[],s=$.event.props.concat(u),c={},f=0,h=0,l=0,v=false,d=[],p=false,g=false,m="addEventListener"in t,b=$(t),w=1,D=0
$.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500}
function T(e){while(e&&typeof e.originalEvent!=="undefined"){e=e.originalEvent}return e}function k(e,t){var i=e.type,o,a,u,c,f,h,l,v
e=$.Event(e)
e.type=t
o=e.originalEvent
a=$.event.props
if(i.search(/mouse/)>-1){a=s}if(o){for(l=a.length,c;l;){c=a[--l]
e[c]=o[c]}}if(i.search(/mouse(down|up)|click/)>-1&&!e.which){e.which=1}if(i.search(/^touch/)!==-1){u=T(o)
i=u.touches
f=u.changedTouches
h=i&&i.length?i[0]:f&&f.length?f[0]:n
if(h){for(v=0,len=r.length;v<len;v++){c=r[v]
e[c]=h[c]}}}return e}function y(e){var t={},n,o
while(e){n=$.data(e,i)
for(o in n){if(n[o]){t[o]=t.hasVirtualBinding=true}}e=e.parentNode}return t}function P(e,t){var n
while(e){n=$.data(e,i)
if(n&&(!t||n[t])){return e}e=e.parentNode}return null}function X(){g=false}function Y(){g=true}function E(){D=0
d.length=0
p=false
Y()}function I(){X()}function M(){B()
f=setTimeout(function(){f=0
E()},$.vmouse.resetTimerDuration)}function B(){if(f){clearTimeout(f)
f=0}}function N(e,t,n){var i
if(n&&n[e]||!n&&P(t.target,e)){i=k(t,e)
$(t.target).trigger(i)}return i}function x(e){var t=$.data(e.target,o)
if(!p&&(!D||D!==t)){var n=N("v"+e.type,e)
if(n){if(n.isDefaultPrevented()){e.preventDefault()}if(n.isPropagationStopped()){e.stopPropagation()}if(n.isImmediatePropagationStopped()){e.stopImmediatePropagation()}}}}function H(e){var t=T(e).touches,n,i
if(t&&t.length===1){n=e.target
i=y(n)
if(i.hasVirtualBinding){D=w++
$.data(n,o,D)
B()
I()
v=false
var a=T(e).touches[0]
h=a.pageX
l=a.pageY
N("vmouseover",e,i)
N("vmousedown",e,i)}}}function L(e){if(g){return}if(!v){N("vmousecancel",e,y(e.target))}v=true
M()}function S(e){if(g){return}var t=T(e).touches[0],n=v,i=$.vmouse.moveDistanceThreshold
v=v||Math.abs(t.pageX-h)>i||Math.abs(t.pageY-l)>i,flags=y(e.target)
if(v&&!n){N("vmousecancel",e,flags)}N("vmousemove",e,flags)
M()}function V(e){if(g){return}Y()
var t=y(e.target),n
N("vmouseup",e,t)
if(!v){var i=N("vclick",e,t)
if(i&&i.isDefaultPrevented()){n=T(e).changedTouches[0]
d.push({touchID:D,x:n.clientX,y:n.clientY})
p=true}}N("vmouseout",e,t)
v=false
M()}function j(e){var t=$.data(e,i),n
if(t){for(n in t){if(t[n]){return true}}}return false}function Q(){}function q(e){var t=e.substr(1)
return{setup:function n(o,a){if(!j(this)){$.data(this,i,{})}var r=$.data(this,i)
r[e]=true
c[e]=(c[e]||0)+1
if(c[e]===1){b.bind(t,x)}$(this).bind(t,Q)
if(m){c["touchstart"]=(c["touchstart"]||0)+1
if(c["touchstart"]===1){b.bind("touchstart",H).bind("touchend",V).bind("touchmove",S).bind("scroll",L)}}},teardown:function n(o,a){--c[e]
if(!c[e]){b.unbind(t,x)}if(m){--c["touchstart"]
if(!c["touchstart"]){b.unbind("touchstart",H).unbind("touchmove",S).unbind("touchend",V).unbind("scroll",L)}}var r=$(this),u=$.data(this,i)
if(u){u[e]=false}r.unbind(t,Q)
if(!j(this)){r.removeData(i)}}}}for(var z=0;z<a.length;z++){$.event.special[a[z]]=q(a[z])}if(m){t.addEventListener("click",function(e){var t=d.length,n=e.target,i,a,r,u,s,c
if(t){i=e.clientX
a=e.clientY
threshold=$.vmouse.clickDistanceThreshold
r=n
while(r){for(u=0;u<t;u++){s=d[u]
c=0
if(r===n&&Math.abs(s.x-i)<threshold&&Math.abs(s.y-a)<threshold||$.data(r,o)===s.touchID){e.preventDefault()
e.stopPropagation()
return}}r=r.parentNode}}},true)}})(window.jQuery,window,document)

});
KAdefine("third_party/javascript-khansrc/touch-emulator/touch-emulator.js", function(require, module, exports) {
(function(e,t,n,r){"use strict"
var i=false
var o
var u
var c={}
if(!t.createTouch){t.createTouch=function(t,n,i,o,u,c,s,f,h){if(f==r||h==r){f=o-e.pageXOffset
h=u-e.pageYOffset}return new a(n,i,{pageX:o,pageY:u,screenX:c,screenY:s,clientX:f,clientY:h})}}if(!t.createTouchList){t.createTouchList=function(){var e=new s
for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}e.length=arguments.length
return e}}function a(e,t,n,r,i){r=r||0
i=i||0
this.identifier=t
this.target=e
this.clientX=n.clientX+r
this.clientY=n.clientY+i
this.screenX=n.screenX+r
this.screenY=n.screenY+i
this.pageX=n.pageX+r
this.pageY=n.pageY+i}function s(){var e=[]
e.item=function(e){return this[e]||null}
e.identifiedTouch=function(e){return this[e+1]||null}
return e}function f(){var n=[e,t.documentElement]
var i=["ontouchstart","ontouchmove","ontouchcancel","ontouchend"]
for(var o=0;o<n.length;o++){for(var u=0;u<i.length;u++){if(n[o]&&n[o][i[u]]==r){n[o][i[u]]=null}}}}function h(){var t=require("modernizr")
return"ontouchstart"in e||t&&t.touch||(navigator.msMaxTouchPoints||navigator.maxTouchPoints)>2}function d(e){e.preventDefault()
e.stopPropagation()}function l(e){return function(t){d(t)
if(t.which!==1){return}if(t.type=="mousedown"||!u||u&&!u.dispatchEvent){u=t.target}if(i&&!t.shiftKey){p("touchend",t)
i=false}p(e,t)
if(!i&&t.shiftKey){i=true
o={pageX:t.pageX,pageY:t.pageY,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY}
p("touchstart",t)}if(t.type=="mouseup"){o=null
i=false
u=null}}}function p(e,n){var r=t.createEvent("Event")
r.initEvent(e,true,true)
r.altKey=n.altKey
r.ctrlKey=n.ctrlKey
r.metaKey=n.metaKey
r.shiftKey=n.shiftKey
r.which=0
r.touches=m(n,e)
r.targetTouches=m(n,e)
r.changedTouches=g(n,e)
u.dispatchEvent(r)}function v(e){var t=new s
if(i){var n=E.multiTouchOffset
var r=o.pageX-e.pageX
var c=o.pageY-e.pageY
t.push(new a(u,1,o,r*-1-n,c*-1+n))
t.push(new a(u,2,o,r+n,c-n))}else{t.push(new a(u,1,e,0,0))}return t}function m(e,t){if(e.type=="mouseup"){return new s}var n=v(e)
if(i&&e.type!="mouseup"&&t=="touchend"){n.splice(1,1)}return n}function g(e,t){var n=v(e)
if(i&&e.type!="mouseup"&&(t=="touchstart"||t=="touchend")){n.splice(0,1)}return n}function y(e){var n,r,i,o
for(r=0;r<e.touches.length;r++){n=e.touches[r]
i=c[n.identifier]
if(!i){i=c[n.identifier]=t.createElement("div")
t.body.appendChild(i)}o=E.template(n)
for(var u in o){i.style[u]=o[u]}}if(e.type=="touchend"||e.type=="touchcancel"){for(r=0;r<e.changedTouches.length;r++){n=e.changedTouches[r]
i=c[n.identifier]
if(i){i.parentNode.removeChild(i)
delete c[n.identifier]}}}}function E(){if(h()){return}f()
e.addEventListener("mousedown",l("touchstart"),true)
e.addEventListener("mousemove",l("touchmove"),true)
e.addEventListener("mouseup",l("touchend"),true)
e.addEventListener("mouseenter",d,true)
e.addEventListener("mouseleave",d,true)
e.addEventListener("mouseout",d,true)
e.addEventListener("mouseover",d,true)
e.addEventListener("touchstart",y,false)
e.addEventListener("touchmove",y,false)
e.addEventListener("touchend",y,false)
e.addEventListener("touchcancel",y,false)}E.multiTouchOffset=75
E.template=function(e){var t=30
var n="translate("+(e.clientX-t/2)+"px, "+(e.clientY-t/2)+"px)"
return{position:"fixed",left:0,top:0,background:"#fff",border:"solid 1px #999",opacity:.6,borderRadius:"100%",height:t+"px",width:t+"px",padding:0,margin:0,display:"block",overflow:"hidden",pointerEvents:"none",webkitUserSelect:"none",mozUserSelect:"none",userSelect:"none",webkitTransform:n,mozTransform:n,transform:n}}
if(typeof define=="function"&&define.amd){define(function(){return E})}else if(typeof module!="undefined"&&module.exports){module.exports=E}else{e[n]=E}})(window,document,"TouchEmulator")

});
KAdefine("third_party/javascript-khansrc/kas/kas.js", function(require, module, exports) {
var _,KAS={}
if(typeof module==="object"&&module.exports){_=require("underscore")
module.exports=KAS}else{_=window._
window.KAS=KAS}(function(e){var t=function(){var e=function(e,t,n,r){for(n=n||{},r=e.length;r--;n[e[r]]=t);return n},t=[1,7],n=[1,17],r=[1,13],i=[1,14],s=[1,15],a=[1,32],o=[1,22],c=[1,23],u=[1,24],l=[1,25],h=[1,26],f=[1,33],p=[1,27],y=[1,28],v=[1,29],d=[1,30],g=[1,20],m=[1,36],b=[1,37],x=[5,6,8,10,33,35,41,43,45],w=[1,39],k=[1,40],M=[5,6,8,10,12,14,16,19,21,22,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46],I=[10,16,19,21,22,28,29,30,31,32,34,37,39,42,43,44,46],S=[5,6,8,10,12,14,16,18,19,21,22,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46]
var E={trace:function e(){},yy:{},symbols_:{error:2,equation:3,expression:4,SIGN:5,EOF:6,additive:7,"+":8,multiplicative:9,"-":10,triglog:11,"*":12,negative:13,"/":14,trig:15,TRIG:16,trigfunc:17,"^":18,TRIGINV:19,logbase:20,ln:21,log:22,_:23,subscriptable:24,power:25,primitive:26,variable:27,VAR:28,CONST:29,INT:30,FLOAT:31,"{":32,"}":33,"(":34,")":35,function:36,FUNC:37,invocation:38,sqrt:39,"[":40,"]":41,abs:42,"|":43,"LEFT|":44,"RIGHT|":45,FRAC:46,$accept:0,$end:1},terminals_:{2:"error",5:"SIGN",6:"EOF",8:"+",10:"-",12:"*",14:"/",16:"TRIG",18:"^",19:"TRIGINV",21:"ln",22:"log",23:"_",28:"VAR",29:"CONST",30:"INT",31:"FLOAT",32:"{",33:"}",34:"(",35:")",37:"FUNC",39:"sqrt",40:"[",41:"]",42:"abs",43:"|",44:"LEFT|",45:"RIGHT|",46:"FRAC"},productions_:[0,[3,4],[3,2],[3,1],[4,1],[7,3],[7,3],[7,1],[9,2],[9,3],[9,3],[9,1],[13,2],[13,1],[15,1],[17,1],[17,3],[17,1],[20,1],[20,1],[20,3],[11,2],[11,2],[11,1],[25,3],[25,1],[27,1],[24,3],[24,1],[24,1],[24,1],[24,1],[24,3],[24,3],[36,1],[38,4],[38,4],[38,7],[38,4],[38,3],[38,3],[38,4],[26,1],[26,1],[26,7]],performAction:function e(t,n,r,i,s,a,o){var c=a.length-1
switch(s){case 1:return new i.Eq(a[c-3],a[c-2],a[c-1])
break
case 2:return a[c-1]
break
case 3:return new i.Add([])
break
case 4:case 7:case 11:case 13:case 15:case 20:case 23:case 25:case 42:case 43:this.$=a[c]
break
case 5:this.$=i.Add.createOrAppend(a[c-2],a[c])
break
case 6:this.$=i.Add.createOrAppend(a[c-2],i.Mul.handleNegative(a[c],"subtract"))
break
case 8:this.$=i.Mul.fold(i.Mul.createOrAppend(a[c-1],a[c]))
break
case 9:this.$=i.Mul.fold(i.Mul.createOrAppend(a[c-2],a[c]))
break
case 10:this.$=i.Mul.fold(i.Mul.handleDivide(a[c-2],a[c]))
break
case 12:this.$=i.Mul.handleNegative(a[c])
break
case 14:case 17:this.$=[t]
break
case 16:this.$=a[c-2].concat(a[c])
break
case 18:this.$=i.Log.natural()
break
case 19:this.$=i.Log.common()
break
case 21:this.$=i.Trig.create(a[c-1],a[c])
break
case 22:this.$=i.Log.create(a[c-1],a[c])
break
case 24:this.$=new i.Pow(a[c-2],a[c])
break
case 26:case 34:this.$=t
break
case 27:this.$=new i.Var(a[c-2],a[c])
break
case 28:this.$=new i.Var(a[c])
break
case 29:this.$=new i.Const(t.toLowerCase())
break
case 30:this.$=i.Int.create(Number(t))
break
case 31:this.$=i.Float.create(Number(t))
break
case 32:this.$=a[c-1].completeParse()
break
case 33:this.$=a[c-1].completeParse().addHint("parens")
break
case 35:case 36:this.$=i.Pow.sqrt(a[c-1])
break
case 37:this.$=new i.Pow.nthroot(a[c-1],a[c-4])
break
case 38:case 39:case 40:this.$=new i.Abs(a[c-1])
break
case 41:this.$=new i.Func(a[c-3],a[c-1])
break
case 44:this.$=i.Mul.handleDivide(a[c-4],a[c-1])
break}},table:[{3:1,4:2,6:[1,3],7:4,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{1:[3]},{5:[1,34],6:[1,35]},{1:[2,3]},e([5,6],[2,4],{8:m,10:b}),e(x,[2,7],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:w,14:k,16:n,19:r,21:i,22:s,28:a,29:o,30:c,31:u,32:l,34:h,37:f,39:p,42:y,44:d,46:g}),e(M,[2,11]),{10:t,11:8,13:41,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},e(M,[2,13]),{10:t,11:8,13:42,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{10:t,11:8,13:43,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},e(M,[2,23]),e(I,[2,15],{18:[1,44]}),e(I,[2,17]),e(I,[2,18]),e(I,[2,19],{23:[1,45]}),e(M,[2,25],{18:[1,46]}),e([10,16,18,19,21,22,28,29,30,31,32,34,37,39,42,43,44,46],[2,14]),e(S,[2,42]),e(S,[2,43]),{32:[1,47]},e(S,[2,28],{23:[1,48]}),e(S,[2,29]),e(S,[2,30]),e(S,[2,31]),{7:49,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:50,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{32:[1,52],34:[1,51],40:[1,53]},{34:[1,54]},{7:55,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:56,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{34:[1,57]},e([5,6,8,10,12,14,16,18,19,21,22,23,28,29,30,31,32,33,34,35,37,39,41,42,43,44,45,46],[2,26]),{34:[2,34]},{4:58,7:4,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{1:[2,2]},{9:59,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{9:60,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},e(M,[2,8]),{10:t,11:8,13:61,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{10:t,11:8,13:62,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},e(M,[2,12]),e(M,[2,21]),e(M,[2,22]),{10:t,11:8,13:63,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{24:64,27:21,28:a,29:o,30:c,31:u,32:l,34:h},{10:t,11:8,13:65,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:66,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{24:67,27:21,28:a,29:o,30:c,31:u,32:l,34:h},{8:m,10:b,33:[1,68]},{8:m,10:b,35:[1,69]},{7:70,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:71,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:72,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:73,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{8:m,10:b,43:[1,74]},{8:m,10:b,45:[1,75]},{7:76,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{6:[1,77]},e(x,[2,5],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:w,14:k,16:n,19:r,21:i,22:s,28:a,29:o,30:c,31:u,32:l,34:h,37:f,39:p,42:y,44:d,46:g}),e(x,[2,6],{17:9,20:10,25:11,15:12,26:16,24:18,38:19,27:21,36:31,11:38,12:w,14:k,16:n,19:r,21:i,22:s,28:a,29:o,30:c,31:u,32:l,34:h,37:f,39:p,42:y,44:d,46:g}),e(M,[2,9]),e(M,[2,10]),e(I,[2,16]),e(I,[2,20]),e(M,[2,24]),{8:m,10:b,33:[1,78]},e(S,[2,27]),e(S,[2,32]),e(S,[2,33]),{8:m,10:b,35:[1,79]},{8:m,10:b,33:[1,80]},{8:m,10:b,41:[1,81]},{8:m,10:b,35:[1,82]},e(S,[2,39]),e(S,[2,40]),{8:m,10:b,35:[1,83]},{1:[2,1]},{32:[1,84]},e(S,[2,35]),e(S,[2,36]),{32:[1,85]},e(S,[2,38]),e(S,[2,41]),{7:86,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{7:87,9:5,10:t,11:8,13:6,15:12,16:n,17:9,19:r,20:10,21:i,22:s,24:18,25:11,26:16,27:21,28:a,29:o,30:c,31:u,32:l,34:h,36:31,37:f,38:19,39:p,42:y,43:v,44:d,46:g},{8:m,10:b,33:[1,88]},{8:m,10:b,33:[1,89]},e(S,[2,44]),e(S,[2,37])],defaultActions:{3:[2,3],33:[2,34],35:[2,2],77:[2,1]},parseError:function e(t,n){if(n.recoverable){this.trace(t)}else{throw new Error(t)}},parse:function e(t){var n=this,r=[0],i=[],s=[null],a=[],o=this.table,c="",u=0,l=0,h=0,f=2,p=1
var y=a.slice.call(arguments,1)
var v=Object.create(this.lexer)
var d={yy:{}}
for(var g in this.yy){if(Object.prototype.hasOwnProperty.call(this.yy,g)){d.yy[g]=this.yy[g]}}v.setInput(t,d.yy)
d.yy.lexer=v
d.yy.parser=this
if(typeof v.yylloc=="undefined"){v.yylloc={}}var m=v.yylloc
a.push(m)
var b=v.options&&v.options.ranges
if(typeof d.yy.parseError==="function"){this.parseError=d.yy.parseError}else{this.parseError=Object.getPrototypeOf(this).parseError}function x(e){r.length=r.length-2*e
s.length=s.length-e
a.length=a.length-e}function w(){var e
e=v.lex()||p
if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var k,M,I,S,E,A,N={},T,D,P,O
while(true){I=r[r.length-1]
if(this.defaultActions[I]){S=this.defaultActions[I]}else{if(k===null||typeof k=="undefined"){k=w()}S=o[I]&&o[I][k]}if(typeof S==="undefined"||!S.length||!S[0]){var q=""
O=[]
for(T in o[I]){if(this.terminals_[T]&&T>f){O.push("'"+this.terminals_[T]+"'")}}if(v.showPosition){q="Parse error on line "+(u+1)+":\n"+v.showPosition()+"\nExpecting "+O.join(", ")+", got '"+(this.terminals_[k]||k)+"'"}else{q="Parse error on line "+(u+1)+": Unexpected "+(k==p?"end of input":"'"+(this.terminals_[k]||k)+"'")}this.parseError(q,{text:v.match,token:this.terminals_[k]||k,line:v.yylineno,loc:m,expected:O})}if(S[0]instanceof Array&&S.length>1){throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+k)}switch(S[0]){case 1:r.push(k)
s.push(v.yytext)
a.push(v.yylloc)
r.push(S[1])
k=null
if(!M){l=v.yyleng
c=v.yytext
u=v.yylineno
m=v.yylloc
if(h>0){h--}}else{k=M
M=null}break
case 2:D=this.productions_[S[1]][1]
N.$=s[s.length-D]
N._$={first_line:a[a.length-(D||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(D||1)].first_column,last_column:a[a.length-1].last_column}
if(b){N._$.range=[a[a.length-(D||1)].range[0],a[a.length-1].range[1]]}A=this.performAction.apply(N,[c,l,u,d.yy,S[1],s,a].concat(y))
if(typeof A!=="undefined"){return A}if(D){r=r.slice(0,-1*D*2)
s=s.slice(0,-1*D)
a=a.slice(0,-1*D)}r.push(this.productions_[S[1]][0])
s.push(N.$)
a.push(N._$)
P=o[r[r.length-2]][r[r.length-1]]
r.push(P)
break
case 3:return true}}return true}}
var A=function(){var e={EOF:1,parseError:function e(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e,t){this.yy=t||this.yy||{}
this._input=e
this._more=this._backtrack=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0
return this},input:function(){var e=this._input[0]
this.yytext+=e
this.yyleng++
this.offset++
this.match+=e
this.matched+=e
var t=e.match(/(?:\r\n?|\n).*/g)
if(t){this.yylineno++
this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1)
return e},unput:function(e){var t=e.length
var n=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input
this.yytext=this.yytext.substr(0,this.yytext.length-t)
this.offset-=t
var r=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1)
this.matched=this.matched.substr(0,this.matched.length-1)
if(n.length-1){this.yylineno-=n.length-1}var i=this.yylloc.range
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t}
if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}this.yyleng=this.yytext.length
return this},more:function(){this._more=true
return this},reject:function(){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput()
var t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var n,r,i
if(this.options.backtrack_lexer){i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done}
if(this.options.ranges){i.yylloc.range=this.yylloc.range.slice(0)}}r=e[0].match(/(?:\r\n?|\n).*/g)
if(r){this.yylineno+=r.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length}
this.yytext+=e[0]
this.match+=e[0]
this.matches=e
this.yyleng=this.yytext.length
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false
this._backtrack=false
this._input=this._input.slice(e[0].length)
this.matched+=e[0]
n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1])
if(this.done&&this._input){this.done=false}if(n){return n}else if(this._backtrack){for(var s in i){this[s]=i[s]}return false}return false},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var e,t,n,r
if(!this._more){this.yytext=""
this.match=""}var i=this._currentRules()
for(var s=0;s<i.length;s++){n=this._input.match(this.rules[i[s]])
if(n&&(!t||n[0].length>t[0].length)){t=n
r=s
if(this.options.backtrack_lexer){e=this.test_match(n,i[s])
if(e!==false){return e}else if(this._backtrack){t=false
continue}else{return false}}else if(!this.options.flex){break}}}if(t){e=this.test_match(t,i[r])
if(e!==false){return e}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function e(){var t=this.next()
if(t){return t}else{return this.lex()}},begin:function e(t){this.conditionStack.push(t)},popState:function e(){var t=this.conditionStack.length-1
if(t>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},_currentRules:function e(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},topState:function e(t){t=this.conditionStack.length-1-Math.abs(t||0)
if(t>=0){return this.conditionStack[t]}else{return"INITIAL"}},pushState:function e(t){this.begin(t)},stateStackSize:function e(){return this.conditionStack.length},options:{flex:true},performAction:function e(t,n,r,i){var s=i
switch(r){case 0:break
case 1:break
case 2:break
case 3:return"INT"
break
case 4:return"FLOAT"
break
case 5:return"^"
break
case 6:return"*"
break
case 7:return"*"
break
case 8:return"*"
break
case 9:return"*"
break
case 10:return"/"
break
case 11:return"/"
break
case 12:return"-"
break
case 13:return"-"
break
case 14:return"+"
break
case 15:return"^"
break
case 16:return"("
break
case 17:return")"
break
case 18:return"("
break
case 19:return")"
break
case 20:return"["
break
case 21:return"]"
break
case 22:return"{"
break
case 23:return"}"
break
case 24:return"{"
break
case 25:return"}"
break
case 26:return"_"
break
case 27:return"|"
break
case 28:return"LEFT|"
break
case 29:return"RIGHT|"
break
case 30:return"!"
break
case 31:return"SIGN"
break
case 32:n.yytext="<="
return"SIGN"
break
case 33:n.yytext=">="
return"SIGN"
break
case 34:n.yytext="<="
return"SIGN"
break
case 35:n.yytext=">="
return"SIGN"
break
case 36:n.yytext="<>"
return"SIGN"
break
case 37:n.yytext="<>"
return"SIGN"
break
case 38:n.yytext="<>"
return"SIGN"
break
case 39:n.yytext="<>"
return"SIGN"
break
case 40:n.yytext="<="
return"SIGN"
break
case 41:n.yytext=">="
return"SIGN"
break
case 42:return"FRAC"
break
case 43:return"FRAC"
break
case 44:return"sqrt"
break
case 45:return"abs"
break
case 46:return"ln"
break
case 47:return"log"
break
case 48:return"TRIG"
break
case 49:return"TRIG"
break
case 50:return"TRIG"
break
case 51:return"TRIG"
break
case 52:n.yytext="sin"
return"TRIG"
break
case 53:n.yytext="cos"
return"TRIG"
break
case 54:n.yytext="tan"
return"TRIG"
break
case 55:n.yytext="csc"
return"TRIG"
break
case 56:n.yytext="sec"
return"TRIG"
break
case 57:n.yytext="cot"
return"TRIG"
break
case 58:n.yytext="arcsin"
return"TRIG"
break
case 59:n.yytext="arccos"
return"TRIG"
break
case 60:n.yytext="arctan"
return"TRIG"
break
case 61:n.yytext="arccsc"
return"TRIG"
break
case 62:n.yytext="arcsec"
return"TRIG"
break
case 63:n.yytext="arccot"
return"TRIG"
break
case 64:return"TRIGINV"
break
case 65:return"TRIGINV"
break
case 66:n.yytext="sinh"
return"TRIG"
break
case 67:n.yytext="cosh"
return"TRIG"
break
case 68:n.yytext="tanh"
return"TRIG"
break
case 69:n.yytext="csch"
return"TRIG"
break
case 70:n.yytext="sech"
return"TRIG"
break
case 71:n.yytext="tanh"
return"TRIG"
break
case 72:return"CONST"
break
case 73:n.yytext="pi"
return"CONST"
break
case 74:n.yytext="pi"
return"CONST"
break
case 75:return"VAR"
break
case 76:n.yytext="theta"
return"VAR"
break
case 77:n.yytext="theta"
return"VAR"
break
case 78:return"VAR"
break
case 79:n.yytext="phi"
return"VAR"
break
case 80:n.yytext="phi"
return"VAR"
break
case 81:return t.symbolLexer(n.yytext)
break
case 82:return"EOF"
break
case 83:return"INVALID"
break
case 84:console.log(n.yytext)
break}},rules:[/^(?:\s+)/,/^(?:\\space)/,/^(?:\\ )/,/^(?:[0-9]+\.?)/,/^(?:([0-9]+)?\.[0-9]+)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\\cdot|·)/,/^(?:\\times|×)/,/^(?:\\ast)/,/^(?:\/)/,/^(?:\\div|÷)/,/^(?:-)/,/^(?:−)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\\left\()/,/^(?:\\right\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\\left\{)/,/^(?:\\right\})/,/^(?:_)/,/^(?:\|)/,/^(?:\\left\|)/,/^(?:\\right\|)/,/^(?:\!)/,/^(?:<=|>=|<>|<|>|=)/,/^(?:\\le)/,/^(?:\\ge)/,/^(?:\\leq)/,/^(?:\\geq)/,/^(?:=\/=)/,/^(?:\\ne)/,/^(?:\\neq)/,/^(?:≠)/,/^(?:≤)/,/^(?:≥)/,/^(?:\\frac)/,/^(?:\\dfrac)/,/^(?:sqrt|\\sqrt)/,/^(?:abs|\\abs)/,/^(?:ln|\\ln)/,/^(?:log|\\log)/,/^(?:sin|cos|tan)/,/^(?:csc|sec|cot)/,/^(?:sinh|cosh|tanh)/,/^(?:csch|sech|coth)/,/^(?:\\sin)/,/^(?:\\cos)/,/^(?:\\tan)/,/^(?:\\csc)/,/^(?:\\sec)/,/^(?:\\cot)/,/^(?:\\arcsin)/,/^(?:\\arccos)/,/^(?:\\arctan)/,/^(?:\\arccsc)/,/^(?:\\arcsec)/,/^(?:\\arccot)/,/^(?:arcsin|arccos|arctan)/,/^(?:arccsc|arcsec|arccot)/,/^(?:\\sinh)/,/^(?:\\cosh)/,/^(?:\\tanh)/,/^(?:\\csch)/,/^(?:\\sech)/,/^(?:\\coth)/,/^(?:pi)/,/^(?:π)/,/^(?:\\pi)/,/^(?:theta)/,/^(?:θ)/,/^(?:\\theta)/,/^(?:phi)/,/^(?:φ)/,/^(?:\\phi)/,/^(?:[a-zA-Z])/,/^(?:$)/,/^(?:.)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],inclusive:true}}}
return e}()
E.lexer=A
function N(){this.yy={}}N.prototype=E
E.Parser=N
return new N}()
e.parser=t})(KAS);(function(e){var t=function(){var e=function(e,t,n,r){for(n=n||{},r=e.length;r--;n[e[r]]=t);return n},t=[1,11],n=[1,9],r=[8,17],i=[6,11],s=[6,11,13,17]
var a={trace:function e(){},yy:{},symbols_:{error:2,unitvalue:3,magnitude:4,unit:5,EOF:6,float:7,POW:8,int:9,multatoms:10,DIV:11,expatom:12,MUL:13,atom:14,"^":15,nat:16,ATOM:17,FLOAT:18,NAT:19,NEG:20,$accept:0,$end:1},terminals_:{2:"error",6:"EOF",8:"POW",11:"DIV",13:"MUL",15:"^",17:"ATOM",18:"FLOAT",19:"NAT",20:"NEG"},productions_:[0,[3,3],[3,2],[4,3],[4,1],[5,3],[5,1],[10,3],[10,2],[10,1],[12,3],[12,1],[14,1],[7,1],[7,1],[16,1],[9,2],[9,1]],performAction:function e(t,n,r,i,s,a,o){var c=a.length-1
switch(s){case 1:return{type:"unitMagnitude",magnitude:a[c-2],unit:a[c-1]}
break
case 2:return{type:"unitStandalone",unit:a[c-1]}
break
case 3:this.$=a[c-2]+"e"+a[c]
break
case 4:case 13:case 14:case 15:case 17:this.$=a[c]
break
case 5:this.$={num:a[c-2],denom:a[c]}
break
case 6:this.$={num:a[c],denom:null}
break
case 7:this.$=[a[c-2]].concat(a[c])
break
case 8:this.$=[a[c-1]].concat(a[c])
break
case 9:this.$=[a[c]]
break
case 10:this.$={name:a[c-2],pow:a[c]}
break
case 11:this.$={name:a[c],pow:1}
break
case 12:this.$=t
break
case 16:this.$="-"+a[c]
break}},table:[{3:1,4:2,5:3,7:4,10:5,12:8,14:10,16:7,17:t,18:[1,6],19:n},{1:[3]},{5:12,10:5,12:8,14:10,17:t},{6:[1,13]},{8:[1,14],17:[2,4]},{6:[2,6],11:[1,15]},e(r,[2,13]),e(r,[2,14]),e(i,[2,9],{12:8,14:10,10:17,13:[1,16],17:t}),e([6,8,11,13,17],[2,15]),e(s,[2,11],{15:[1,18]}),e([6,11,13,15,17],[2,12]),{6:[1,19]},{1:[2,2]},{9:20,19:[1,22],20:[1,21]},{10:23,12:8,14:10,17:t},{10:24,12:8,14:10,17:t},e(i,[2,8]),{16:25,19:n},{1:[2,1]},{17:[2,3]},{19:[1,26]},{17:[2,17]},{6:[2,5]},e(i,[2,7]),e(s,[2,10]),{17:[2,16]}],defaultActions:{13:[2,2],19:[2,1],20:[2,3],22:[2,17],23:[2,5],26:[2,16]},parseError:function e(t,n){if(n.recoverable){this.trace(t)}else{throw new Error(t)}},parse:function e(t){var n=this,r=[0],i=[],s=[null],a=[],o=this.table,c="",u=0,l=0,h=0,f=2,p=1
var y=a.slice.call(arguments,1)
var v=Object.create(this.lexer)
var d={yy:{}}
for(var g in this.yy){if(Object.prototype.hasOwnProperty.call(this.yy,g)){d.yy[g]=this.yy[g]}}v.setInput(t,d.yy)
d.yy.lexer=v
d.yy.parser=this
if(typeof v.yylloc=="undefined"){v.yylloc={}}var m=v.yylloc
a.push(m)
var b=v.options&&v.options.ranges
if(typeof d.yy.parseError==="function"){this.parseError=d.yy.parseError}else{this.parseError=Object.getPrototypeOf(this).parseError}function x(e){r.length=r.length-2*e
s.length=s.length-e
a.length=a.length-e}function w(){var e
e=v.lex()||p
if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var k,M,I,S,E,A,N={},T,D,P,O
while(true){I=r[r.length-1]
if(this.defaultActions[I]){S=this.defaultActions[I]}else{if(k===null||typeof k=="undefined"){k=w()}S=o[I]&&o[I][k]}if(typeof S==="undefined"||!S.length||!S[0]){var q=""
O=[]
for(T in o[I]){if(this.terminals_[T]&&T>f){O.push("'"+this.terminals_[T]+"'")}}if(v.showPosition){q="Parse error on line "+(u+1)+":\n"+v.showPosition()+"\nExpecting "+O.join(", ")+", got '"+(this.terminals_[k]||k)+"'"}else{q="Parse error on line "+(u+1)+": Unexpected "+(k==p?"end of input":"'"+(this.terminals_[k]||k)+"'")}this.parseError(q,{text:v.match,token:this.terminals_[k]||k,line:v.yylineno,loc:m,expected:O})}if(S[0]instanceof Array&&S.length>1){throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+k)}switch(S[0]){case 1:r.push(k)
s.push(v.yytext)
a.push(v.yylloc)
r.push(S[1])
k=null
if(!M){l=v.yyleng
c=v.yytext
u=v.yylineno
m=v.yylloc
if(h>0){h--}}else{k=M
M=null}break
case 2:D=this.productions_[S[1]][1]
N.$=s[s.length-D]
N._$={first_line:a[a.length-(D||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(D||1)].first_column,last_column:a[a.length-1].last_column}
if(b){N._$.range=[a[a.length-(D||1)].range[0],a[a.length-1].range[1]]}A=this.performAction.apply(N,[c,l,u,d.yy,S[1],s,a].concat(y))
if(typeof A!=="undefined"){return A}if(D){r=r.slice(0,-1*D*2)
s=s.slice(0,-1*D)
a=a.slice(0,-1*D)}r.push(this.productions_[S[1]][0])
s.push(N.$)
a.push(N._$)
P=o[r[r.length-2]][r[r.length-1]]
r.push(P)
break
case 3:return true}}return true}}
var o=function(){var e={EOF:1,parseError:function e(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e,t){this.yy=t||this.yy||{}
this._input=e
this._more=this._backtrack=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0
return this},input:function(){var e=this._input[0]
this.yytext+=e
this.yyleng++
this.offset++
this.match+=e
this.matched+=e
var t=e.match(/(?:\r\n?|\n).*/g)
if(t){this.yylineno++
this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1)
return e},unput:function(e){var t=e.length
var n=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input
this.yytext=this.yytext.substr(0,this.yytext.length-t)
this.offset-=t
var r=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1)
this.matched=this.matched.substr(0,this.matched.length-1)
if(n.length-1){this.yylineno-=n.length-1}var i=this.yylloc.range
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t}
if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}this.yyleng=this.yytext.length
return this},more:function(){this._more=true
return this},reject:function(){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput()
var t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var n,r,i
if(this.options.backtrack_lexer){i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done}
if(this.options.ranges){i.yylloc.range=this.yylloc.range.slice(0)}}r=e[0].match(/(?:\r\n?|\n).*/g)
if(r){this.yylineno+=r.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length}
this.yytext+=e[0]
this.match+=e[0]
this.matches=e
this.yyleng=this.yytext.length
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false
this._backtrack=false
this._input=this._input.slice(e[0].length)
this.matched+=e[0]
n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1])
if(this.done&&this._input){this.done=false}if(n){return n}else if(this._backtrack){for(var s in i){this[s]=i[s]}return false}return false},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var e,t,n,r
if(!this._more){this.yytext=""
this.match=""}var i=this._currentRules()
for(var s=0;s<i.length;s++){n=this._input.match(this.rules[i[s]])
if(n&&(!t||n[0].length>t[0].length)){t=n
r=s
if(this.options.backtrack_lexer){e=this.test_match(n,i[s])
if(e!==false){return e}else if(this._backtrack){t=false
continue}else{return false}}else if(!this.options.flex){break}}}if(t){e=this.test_match(t,i[r])
if(e!==false){return e}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function e(){var t=this.next()
if(t){return t}else{return this.lex()}},begin:function e(t){this.conditionStack.push(t)},popState:function e(){var t=this.conditionStack.length-1
if(t>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},_currentRules:function e(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},topState:function e(t){t=this.conditionStack.length-1-Math.abs(t||0)
if(t>=0){return this.conditionStack[t]}else{return"INITIAL"}},pushState:function e(t){this.begin(t)},stateStackSize:function e(){return this.conditionStack.length},options:{},performAction:function e(t,n,r,i){var s=i
switch(r){case 0:return 11
break
case 1:return"("
break
case 2:return")"
break
case 3:return 8
break
case 4:return 15
break
case 5:return 13
break
case 6:return 18
break
case 7:return 19
break
case 8:return 20
break
case 9:return 17
break
case 10:return 17
break
case 11:return 17
break
case 12:break
case 13:return 6
break}},rules:[/^(?:\/)/,/^(?:\()/,/^(?:\))/,/^(?:(\*|x|\u00d7|\u2219|\u22c5|\u00b7)\s*10\s*\^)/,/^(?:\^)/,/^(?:\*)/,/^(?:[0-9]+\.[0-9]+)/,/^(?:[0-9]+)/,/^(?:-)/,/^(?:\u00b0( ?)[cCfF])/,/^(?:fl\.? oz\.?)/,/^(?:[\u00b5]?([A-Za-z-]+|[\u2103\u2109\u212b]))/,/^(?:\s+)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:true}}}
return e}()
a.lexer=o
function c(){this.yy={}}c.prototype=a
a.Parser=c
return new c}()
e.unitParser=t})(KAS);(function(e){var t=function(){throw new Error("Abstract method - must override for expr: "+this.print())}
var n=function(e){throw new Error(e)}
var r=function(e){return e!==e}
var i=function(e,t){var n=t-e
return Math.random()*n+e}
var s=12
var a=9
function o(){}_.extend(o.prototype,{func:t,args:t,construct:function(e){var t=new this.func
this.func.apply(t,e)
return t},recurse:function(e){var t=Array.prototype.slice.call(arguments,1)
var n=_.map(this.args(),function(n){return _.isString(n)?n:n[e].apply(n,t)})
return this.construct(n)},eval:t,codegen:t,compile:function(){var e=this.codegen()
try{return new Function("vars","return "+e+";")}catch(t){throw new Error("Function did not compile: "+e)}},print:t,tex:t,asTex:function(e){e=e||{}
_.defaults(e,{display:true,dynamic:true,times:false})
var t=this.tex()
if(e.display){t="\\displaystyle "+t}if(e.dynamic){t=t.replace(/\(/g,"\\left(")
t=t.replace(/\)/g,"\\right)")}if(e.times){t=t.replace(/\\cdot/g,"\\times")}return t},name:function(){if(this.func.name){return this.func.name}else{return this.func.toString().match(/^function\s*([^\s(]+)/)[1]}},repr:function(){return this.name()+"("+_.map(this.args(),function(e){return _.isString(e)?e:e.repr()}).join(",")+")"},strip:function(){return this.recurse("strip")},normalize:function(){return this.recurse("normalize")},expand:function(){return this.recurse("expand")},factor:function(e){return this.recurse("factor",e)},collect:function(e){return this.recurse("collect",e)},equals:function(e){return this.normalize().print()===e.normalize().print()},simplify:function(e){e=_.extend({once:false},e)
var t=this.factor(e)
var n=t.collect(e)
if(t.equals(n)){n=this.collect(e)}var r=n.expand(e)
var i=r.collect(e)
if(r.equals(i)){i=n.collect(e)}var s=i
if(e.once||this.equals(s)){return s}else{return s.simplify(e)}},isSimplified:function(){return this.equals(this.simplify())},exprArgs:function(){return _.filter(this.args(),function(e){return e instanceof o})},getVars:function(e){return _.uniq(_.flatten(_.invoke(this.exprArgs(),"getVars",e))).sort()},getConsts:function(){return _.uniq(_.flatten(_.invoke(this.exprArgs(),"getConsts"))).sort()},getUnits:function(){return _.flatten(_.invoke(this.exprArgs(),"getUnits"))},is:function(e){return this instanceof e},has:function(e){if(this instanceof e){return true}return _.any(this.exprArgs(),function(t){return t.has(e)})},raiseToThe:function(e){return new h(this,e)},isSubtract:function(){return false},isDivide:function(){return false},isRoot:function(){return false},needsExplicitMul:function(){return this.args()[0].needsExplicitMul()},sameVars:function(e){var t=this.getVars()
var n=e.getVars()
var r=function(e,t){return!_.difference(e,t).length}
var i=function(e){return _.uniq(_.invoke(e,"toLowerCase")).sort()}
var s=r(t,n)
var a=r(i(t),i(n))
return{equal:s,equalIgnoringCase:a}},compare:function(e){if(e instanceof v){return false}var t=_.union(this.getVars(true),e.getVars(true))
var n=function(e,t){if(Math.abs(e)<1||Math.abs(t)<1){return Math.abs(e-t)}else{return Math.abs(1-e/t)}}
var o=function(e,t){var i=n(e,t)
return e===t||r(e)&&r(t)||i<Math.pow(10,-a)}
if(!t.length&&!this.has(E)&&!e.has(E)){return o(this.eval(),e.eval())}var c=this.collect()
var u=e.collect()
var l=this.getUnits()
var h=e.getUnits()
if(!_.isEqual(l,h)){return false}for(var f=0;f<s;f++){var p={}
var y=Math.pow(10,1+Math.floor(3*f/s))
var d=f%2===0
_.each(t,function(e){p[e]=d?i(-y,y):_.random(-y,y)})
var m
if(c.has(g)||u.has(g)||c.has(E)||u.has(E)){var b=c.partialEval(p)
var x=u.partialEval(p)
m=b.simplify().equals(x.simplify())}else{var b=c.eval(p)
var x=u.eval(p)
m=o(b,x)}if(!m){return false}}return true},partialEval:function(e){if(this instanceof E){return this}else if(!this.has(g)){return new M(this.eval(e).toFixed(a)).collect()}else if(this instanceof g){return new g(this.symbol,this.arg.partialEval(e))}else{return this.recurse("partialEval",e)}},sameForm:function(e){return this.strip().equals(e.strip())},findGCD:function(e){return this.equals(e)?e:x.One},getDenominator:function(){return x.One},asMul:function(){return new l(x.One,this)},isPositive:t,isNegative:function(){return false},asPositiveFactor:function(){return this.isPositive()?this:x.One},addHint:function(e){if(!e){return this}var t=this.construct(this.args())
t.hints=_.clone(this.hints)
t.hints[e]=true
return t},hints:{parens:false},asExpr:function(){return this},completeParse:function(){return this.recurse("completeParse")},abs:t,negate:function(){return new l(x.Neg,this)}})
function c(){}c.prototype=new o
_.extend(c.prototype,{args:function(){return this.terms},normalize:function(){var e=_.sortBy(_.invoke(this.terms,"normalize"),function(e){return e.print()})
return new this.func(e)},expand:function(){return this.recurse("expand").flatten()},partition:function(){var e=_.groupBy(this.terms,function(e){return e instanceof x})
var t=e[true]||[]
var n=e[false]||[]
return[new this.func(t),new this.func(n)]},flatten:function(){var e=this
var t=_.reject(this.terms,function(t){return t.equals(e.identity)})
if(t.length===0){return e.identity}if(t.length===1){return t[0]}var n=_.groupBy(t,function(t){return t instanceof e.func})
var r=n[true]||[]
var i=n[false]||[]
var s=i.concat(_.flatten(_.pluck(r,"terms"),true))
return new e.func(s)},identity:undefined,reduce:t,isPositive:function(){var e=_.invoke(this.terms,"collect")
return _.all(_.invoke(e,"isPositive"))},replace:function(e,t){var n
if(e instanceof o){n=_.indexOf(this.terms,e)}else{n=e}var r=[]
if(_.isArray(t)){r=t}else if(t){r=[t]}var i=this.terms.slice(0,n).concat(r).concat(this.terms.slice(n+1))
return new this.func(i)},remove:function(e){return this.replace(e)},getDenominator:function(){return new l(_.invoke(this.terms,"getDenominator")).flatten()}})
function u(){if(arguments.length===1){this.terms=arguments[0]}else{this.terms=_.toArray(arguments)}}u.prototype=new c
_.extend(u.prototype,{func:u,eval:function(e,t){return _.reduce(this.terms,function(n,r){return n+r.eval(e,t)},0)},codegen:function(){return _.map(this.terms,function(e){return"("+e.codegen()+")"}).join(" + ")||"0"},print:function(){return _.invoke(this.terms,"print").join("+")},tex:function(){var e=""
_.each(this.terms,function(t){if(!e||t.isSubtract()){e+=t.tex()}else{e+="+"+t.tex()}})
return e},collect:function(e){var t=_.invoke(this.terms,"collect",e)
var n=[]
_.each(t,function(t){if(t instanceof l){var r=t.partition()
n.push([r[1].flatten(),r[0].reduce(e)])}else if(t instanceof x){n.push([x.One,t])}else{n.push([t,x.One])}})
var r=_.groupBy(n,function(e){return e[0].normalize().print()})
var i=_.compact(_.map(r,function(t){var n=t[0][0]
var r=new u(_.zip.apply(_,t)[1])
var i=r.reduce(e)
return new l(i,n).collect(e)}))
return new u(i).flatten()},factor:function(e){e=_.extend({keepNegative:false},e)
var t=_.invoke(this.terms,"collect")
var n
if(t[0]instanceof l){n=t[0].terms}else{n=[t[0]]}_.each(_.rest(this.terms),function(e){n=_.map(n,function(t){return e.findGCD(t)})})
if(!e.keepNegative&&this.isNegative()){n.push(x.Neg)}n=new l(n).flatten().collect()
var r=_.map(t,function(e){return l.handleDivide(e,n).simplify()})
r=new u(r).flatten()
return l.createOrAppend(n,r).flatten()},reduce:function(e){return _.reduce(this.terms,function(t,n){return t.add(n,e)},this.identity)},needsExplicitMul:function(){return false},isNegative:function(){var e=_.invoke(this.terms,"collect")
return _.all(_.invoke(e,"isNegative"))},negate:function(){return new u(_.invoke(this.terms,"negate"))}})
function l(){if(arguments.length===1){this.terms=arguments[0]}else{this.terms=_.toArray(arguments)}}l.prototype=new c
_.extend(l.prototype,{func:l,eval:function(e,t){return _.reduce(this.terms,function(n,r){return n*r.eval(e,t)},1)},codegen:function(){return _.map(this.terms,function(e){return"("+e.codegen()+")"}).join(" * ")||"0"},print:function(){return _.map(this.terms,function(e){return e instanceof u?"("+e.print()+")":e.print()}).join("*")},getUnits:function(){var e=_(this.terms).chain().map(function(e){return e.getUnits()}).flatten().value()
e.sort(function(e,t){return e.unit<t.unit})
return e},tex:function(){var e=" \\cdot "
var t=_.groupBy(this.terms,function(e){if(e.isDivide()){return"inverse"}else if(e instanceof x){return"number"}else{return"other"}})
var n=t.inverse||[]
var r=t.number||[]
var i=t.other||[]
var s=""
var a
for(var o=0;o<r.length;o++){var c=r[o]instanceof w&&!(r[o]instanceof k)
if(c&&i.length>0&&n.length>0){var f=r.slice()
f.splice(o,1)
var p=f.concat(n).concat(i)
return r[o].tex()+new l(p).tex()}}r=_.compact(_.map(r,function(e){var t=e instanceof w&&!(e instanceof k)
var r=!e.hints.fraction||n.length>0
if(t&&r){n.push(new h(new k(e.d),x.Div))
var i=new k(e.n)
i.hints=e.hints
return _.any(e.hints)?i:null}else{return e}}))
if(r.length===0&&i.length===1){a=i[0].tex()}else{var y=""
_.each(r,function(t){if(t.hints.subtract&&t.hints.entered){s+="-"
y+=(y?e:"")+t.abs().tex()}else if(t instanceof k&&t.n===-1&&(t.hints.negate||t.hints.subtract)){s+="-"}else{y+=(y?e:"")+t.tex()}})
_.each(i,function(t){if(t.needsExplicitMul()){y+=(y?e:"")+t.tex()}else if(t instanceof u){y+="("+t.tex()+")"}else{y+=t.tex()}})
a=y?y:"1"}if(!n.length){return s+a}else{var v=new l(_.invoke(n,"asDivide")).flatten().tex()
return s+"\\frac{"+a+"}{"+v+"}"}},strip:function(){var e=_.map(this.terms,function(e){return e instanceof x?e.abs():e.strip()})
return new l(e).flatten()},expand:function(){var e=function(e){return e instanceof u}
var t=function(e){return e instanceof h&&e.exp.isNegative()}
var n=function(n){return t(n)&&e(n.base)}
var r=this.recurse("expand").flatten()
var i=_.any(r.terms,e)
var s=_.any(r.terms,n)
if(!(i||s)){return r}var a=_.groupBy(r.terms,t)
var o=a[false]||[]
var c=a[true]||[]
if(i){var f=_.groupBy(o,e)
var p=f[true]||[]
var y=f[false]||[]
var v=_.reduce(p,function(e,t){return _.reduce(e,function(e,n){return e.concat(_.map(t.terms,function(e){return n.concat(e)}))},[])},[[]])
var d=_.map(v,function(e){return new l(y.concat(e)).flatten()})
o=[new u(d)]}if(s){var g=new l(_.invoke(c,"getDenominator")).flatten()
c=[new h(g.expand(),x.Div)]}return new l(o.concat(c)).flatten()},factor:function(e){var t=this.recurse("factor",e).flatten()
if(!(t instanceof l)){return t}var n=_.groupBy(t.terms,function(e){return e instanceof w})
var r=_.reduce(n[true],function(e,t){return{n:e.n*t.n,d:e.d*t.d}},{n:1,d:1})
if(r.d===1){r=new k(r.n)}else{r=new w(r.n,r.d)}return new l((n[false]||[]).concat(r)).flatten()},collect:function(e){var t=this.recurse("collect",e).partition()
var n=t[0].reduce(e)
if(n.eval()===0){return x.Zero}var r=t[1].flatten()
if(!(r instanceof l)){return new l(n,r).flatten()}r=r.terms
var i=[]
_.each(r,function(e){if(e instanceof h){i.push([e.base,e.exp])}else{i.push([e,x.One])}})
var s=_.groupBy(i,function(e){return e[0].normalize().print()})
var a=_.compact(_.map(s,function(t){var n=t[0][0]
var r=new u(_.zip.apply(_,t)[1])
var i=r.collect(e)
if(i instanceof x&&i.eval()===0){return null}else{return[n,i]}}))
var i=_.groupBy(a,function(e){if(e[0]instanceof p&&e[0].isBasic()){return"trig"}else if(e[0]instanceof f){return"log"}else{return"expr"}})
var o=i.trig||[]
var c=i.log||[]
var y=i.expr||[]
if(o.length>1){var v=_.groupBy(o,function(e){return e[0].arg.normalize().print()})
o=[]
_.each(v,function(t){var n=t[0][0].arg
var r={sin:x.Zero,cos:x.Zero}
_.each(t,function(e){r[e[0].type]=e[1]})
if(l.handleNegative(r.sin).collect(e).equals(r.cos)){if(r.cos.isNegative()){r={tan:r.sin}}else{r={cot:r.cos}}}_.each(r,function(e,t){o.push([new p(t,n),e])})})}if(c.length>1){var d=_.groupBy(c,function(e){return e[0].base.normalize().print()})
c=[]
_.each(d,function(t){if(t.length===2&&l.handleNegative(t[0][1]).collect(e).equals(t[1][1])){if(t[0][1].isNegative()){c.push([new f(t[0][0].power,t[1][0].power),t[1][1]])}else{c.push([new f(t[1][0].power,t[0][0].power),t[0][1]])}}else{c=c.concat(t)}})}i=o.concat(c).concat(y)
var g=_.map(i,function(t){return new h(t[0],t[1]).collect(e)})
return new l([n].concat(g)).flatten()},isSubtract:function(){return _.any(this.terms,function(e){return e instanceof x&&e.hints.subtract})},factorIn:function(e){var t=this.partition()
var n=t[0].terms
var r=n.length&&_.all(n,function(e){return e.n>0})
if(r){var i=n[0].negate()
i.hints=n[0].hints
return this.replace(n[0],i.addHint(e))}else{return new l([x.negativeOne(e)].concat(this.terms))}},factorOut:function(){var e=false
var t=_.compact(_.map(this.terms,function(t,n,r){if(!e&&t instanceof x&&t.hints.divide){e=true
return t.n!==-1?t.negate():null}else{return t}}))
if(t.length===1){return t[0]}else{return new l(t)}},reduce:function(e){return _.reduce(this.terms,function(t,n){return t.mul(n,e)},this.identity)},findGCD:function(e){return new l(_.invoke(this.terms,"findGCD",e)).flatten()},asMul:function(){return this},asPositiveFactor:function(){if(this.isPositive()){return this}else{var e=_.invoke(this.collect().terms,"asPositiveFactor")
return new l(e).flatten()}},isNegative:function(){return _.any(_.invoke(this.collect().terms,"isNegative"))},fold:function(){return l.fold(this)},negate:function(){var e=function(e){return e instanceof x}
if(_.any(this.terms,e)){var t=_.find(this.terms,e)
return this.replace(t,t.negate())}else{return new l([x.Neg].concat(this.terms))}}})
_.each([u,l],function(e){_.extend(e,{createOrAppend:function(t,n){if(t instanceof e){return new e(t.terms.concat(n))}else{return new e(t,n)}}})})
_.extend(l,{handleNegative:function(e,t){if(e instanceof x&&e.n>0){var n=e.negate()
n.hints=e.hints
return n.addHint(t)}else if(e instanceof l){return e.factorIn(t)}else{return new l(x.negativeOne(t),e)}},handleDivide:function(e,t){if(t instanceof l){var n=l.handleDivide(e,t.terms[0])
var r=new l(_.rest(t.terms)).flatten()
return l.handleDivide(n,r)}var i=function(e){return e instanceof k}
var s=function(e){return e instanceof w}
if(i(t)&&e instanceof l&&_.any(e.terms,i)){var a=e.terms.slice().reverse()
var o=_.find(a,s)
if(!i(o)){return new l(e.terms.concat([new w(1,t.n).addHint("fraction")]))}var c=new w(o.n,t.n)
c.hints=o.hints
if(o===a[0]){c=c.addHint("fraction")}var u
if(o.n<0&&t.n<0){c.d=-c.d
return e.replace(o,[x.Neg,c])}else{return e.replace(o,c)}}var f=function(e,t){if(t instanceof k){if(e instanceof k){if(e.n<0&&t.n<0){return[x.Neg,new w(e.n,-t.n).addHint("fraction")]}else{return[new w(e.n,t.n).addHint("fraction")]}}else{var n=new w(1,t.eval())
if(t.eval()<0){return[e,n.addHint("negate")]}else{return[e,n]}}}else{var r
if(t instanceof p&&t.exp){var i=t.exp
t.exp=undefined
t=new h(t,i)}if(t instanceof h){r=new h(t.base,l.handleNegative(t.exp,"divide"))}else{r=new h(t,x.Div)}if(e instanceof k&&e.n===1){return[r]}else{return[e,r]}}}
if(e instanceof l){var y=f(_.last(e.terms),t)
return new l(_.initial(e.terms).concat(y))}else{var y=f(e,t)
return new l(y).flatten()}},fold:function(e){if(e instanceof l){var t=_.find(_.initial(e.terms),function(e){return(e instanceof p||e instanceof f)&&e.hints.open})
var n=_.indexOf(e.terms,t)
if(t){var r=_.last(e.terms)
if(t.hints.parens||r.hints.parens||r.has(p)||r.has(f)){t.hints.open=false}else{var i
if(t instanceof p){i=p.create([t.type,t.exp],l.createOrAppend(t.arg,r).fold())}else{i=f.create(t.base,l.createOrAppend(t.power,r).fold())}if(n===0){return i}else{return new l(e.terms.slice(0,n).concat(i)).fold()}}}var s=e.partition()
var a=s[0].terms
var o=function(e){return e.n>0}
var c=function(e){return e.n===-1&&e.hints.negate}
var u=function(e){return o(e)||c(e)}
if(a.length>1&&_.some(a,c)&&_.some(a,o)&&_.every(a,u)){var h=_.indexOf(e.terms,_.find(e.terms,c))
var y=_.indexOf(e.terms,_.find(e.terms,o))
if(h<y){return e.replace(y,e.terms[y].negate()).remove(h)}}}return e}})
function h(e,t){this.base=e
this.exp=t}h.prototype=new o
_.extend(h.prototype,{func:h,args:function(){return[this.base,this.exp]},eval:function(e,t){var n=this.base.eval(e,t)
var r=this.exp.eval(e,t)
if(n<0){var i=this.exp.simplify()
if(i instanceof M){var s=i.n
var a=(s-s.toFixed()).toString().length-2
var o=Math.pow(10,a)
var c=new w(s*o,o)
i=c.simplify()}if(i instanceof w){var u=Math.abs(i.d)%2===1
if(u){var l=Math.abs(i.n)%2===1
var h=l?-1:1
return h*Math.pow(-1*n,r)}}}return Math.pow(n,r)},getUnits:function(){return this.base.getUnits().map(function(e){return{unit:e.unit,pow:e.pow*this.exp.n}}.bind(this))},codegen:function(){return"Math.pow("+this.base.codegen()+", "+this.exp.codegen()+")"},print:function(){var e=this.base.print()
if(this.base instanceof c||this.base instanceof h){e="("+e+")"}return e+"^("+this.exp.print()+")"},tex:function(){if(this.isDivide()){return"\\frac{1}{"+this.asDivide().tex()+"}"}else if(this.isRoot()){if(this.exp.n!==1){n("Node marked with hint 'root' does not have exponent "+"of form 1/x.")}if(this.exp.d===2){return"\\sqrt{"+this.base.tex()+"}"}else{return"\\sqrt["+this.exp.d+"]{"+this.base.tex()+"}"}}else if(this.base instanceof p&&!this.base.isInverse()&&this.exp instanceof x&&this.exp.isSimple()&&this.exp.eval()>=0){var e=this.base.tex({split:true})
return e[0]+"^{"+this.exp.tex()+"}"+e[1]}else{var t=this.base.tex()
if(this.base instanceof c||this.base instanceof h||this.base instanceof x&&!this.base.isSimple()){t="("+t+")"}else if(this.base instanceof p||this.base instanceof f){t="["+t+"]"}return t+"^{"+this.exp.tex()+"}"}},needsExplicitMul:function(){return this.isRoot()?false:this.base.needsExplicitMul()},expand:function(){var e=this.recurse("expand")
if(e.base instanceof l){var t=_.map(e.base.terms,function(t){return new h(t,e.exp)})
return new l(t).expand()}else if(e.base instanceof u&&e.exp instanceof k&&e.exp.abs().eval()>1){var n=e.exp.eval()>0
var r=e.exp.abs().eval()
var i=function(e){return n?e:new h(e,x.Div)}
var s={1:e.base}
for(var a=2;a<=r;a*=2){var o=new l(s[a/2],s[a/2])
s[a]=o.expand().collect()}if(_.has(s,r)){return i(s[r])}var c=_.map(r.toString(2).split(""),function(e,t,n){return Number(e)*Math.pow(2,n.length-t-1)})
c=_.without(c,0)
var o=new l(_.pick(s,c)).expand().collect()
return i(o)}else if(e.exp instanceof u){var t=_.map(e.exp.terms,function(t){return new h(e.base,t).expand()})
return new l(t).expand()}else{return e}},factor:function(){var e=this.recurse("factor")
if(e.base instanceof l){var t=_.map(e.base.terms,function(t){if(t instanceof k&&e.exp.equals(x.Div)){return new w(1,t.n)}else{return new h(t,e.exp)}})
return new l(t)}else{return e}},collect:function(e){if(this.base instanceof h){var t=this.base.base
var n=l.createOrAppend(this.base.exp,this.exp)
return new h(t,n).collect(e)}var r=this.recurse("collect",e)
var i=function(e){return e instanceof f&&e.base.equals(r.base)}
if(r.exp instanceof x&&r.exp.eval()===0){return x.One}else if(r.exp instanceof x&&r.exp.eval()===1){return r.base}else if(i(r.exp)){return r.exp.power}else if(r.exp instanceof l&&_.any(r.exp.terms,i)){var s=_.find(r.exp.terms,i)
var t=s.power
var n=r.exp.remove(s).flatten()
return new h(t,n).collect(e)}else if(r.base instanceof x&&r.exp instanceof x){if(e&&e.preciseFloats){var n=r.exp.asRational()
var a=r.base.getDecimalPlaces()
var o=new h(r.base,new w(1,n.d))
var c=o.collect().getDecimalPlaces()
if(c>a){var u=new h(r.base,new k(n.n)).collect()
return new h(u,new w(1,n.d))}}return r.base.raiseToThe(r.exp,e)}else{return r}},isDivide:function(){var e=function(e){return e instanceof x&&e.hints.divide}
return e(this.exp)||this.exp instanceof l&&_.any(this.exp.terms,e)},asDivide:function(){if(this.exp instanceof x){if(this.exp.eval()===-1){return this.base}else{var e=this.exp.negate()
e.hints=_.clone(this.exp.hints)
e.hints.divide=false
return new h(this.base,e)}}else if(this.exp instanceof l){return new h(this.base,this.exp.factorOut())}else{n("called asDivide() on an Expr that wasn't a Num or Mul")}},isRoot:function(){return this.exp instanceof w&&this.exp.hints.root},isSquaredTrig:function(){return this.base instanceof p&&!this.base.isInverse()&&this.exp instanceof x&&this.exp.eval()===2},getDenominator:function(){if(this.exp instanceof x&&this.exp.eval()===-1){return l.createOrAppend(this.base,this.base.getDenominator()).flatten()}else if(this.exp.isNegative()){var e=new h(this.base,l.handleNegative(this.exp).collect())
return l.createOrAppend(e,e.collect().getDenominator()).flatten()}else if(this.base instanceof x){return new h(this.base.getDenominator(),this.exp).collect()}else{return x.One}},findGCD:function(e){var t,n
if(e instanceof h){t=e.base
n=e.exp}else{t=e
n=x.One}if(this.base.equals(t)){if(this.exp.equals(n)){return this}else if(this.exp instanceof x&&n instanceof x){return new h(this.base,x.min(this.exp,n)).collect()}else if(this.exp instanceof x||n instanceof x){return x.One}var r=this.exp.asMul().partition()
var i=n.asMul().partition()
if(r[1].equals(i[1])){var s=x.min(r[0].reduce(),i[0].reduce())
var a=new l(s,r[1].flatten()).flatten()
return new h(t,a).collect()}}return x.One},isPositive:function(){if(this.base.isPositive()){return true}var e=this.exp.simplify()
return e instanceof k&&e.eval()%2===0},asPositiveFactor:function(){if(this.isPositive()){return this}else{var e=this.exp.simplify()
if(e instanceof k){var t=e.eval()
if(t>2){return new h(this.base,new k(t-1))}else if(t<-2){return new h(this.base,new k(t+1))}}return x.One}}})
_.extend(h,{sqrt:function(e){return new h(e,x.Sqrt)},nthroot:function(e,t){var n=l.fold(l.handleDivide(new k(1),t))
return new h(e,n.addHint("root"))}})
function f(e,t){this.base=e
this.power=t}f.prototype=new o
_.extend(f.prototype,{func:f,args:function(){return[this.base,this.power]},eval:function(e,t){return Math.log(this.power.eval(e,t))/Math.log(this.base.eval(e,t))},codegen:function(){return"(Math.log("+this.power.codegen()+") / Math.log("+this.base.codegen()+"))"},print:function(){var e="("+this.power.print()+")"
if(this.isNatural()){return"ln"+e}else{return"log_("+this.base.print()+") "+e}},tex:function(){var e="("+this.power.tex()+")"
if(this.isNatural()){return"\\ln"+e}else{return"\\log_{"+this.base.tex()+"}"+e}},collect:function(e){var t=this.recurse("collect",e)
if(t.power instanceof x&&t.power.eval()===1){return x.Zero}else if(t.base.equals(t.power)){return x.One}else if(t.power instanceof h&&t.power.base.equals(t.base)){return t.power.exp}else{return t}},expand:function(){var e=this.recurse("expand")
if(e.power instanceof l){var t=_.map(e.power.terms,function(t){return new f(e.base,t).expand()})
return new u(t)}else if(e.power instanceof h){return new l(e.power.exp,new f(e.base,e.power.base).expand()).flatten()}else if(!e.isNatural()){return l.handleDivide(new f(b.e,e.power),new f(b.e,e.base))}else{return e}},hints:_.extend(f.prototype.hints,{open:false}),isPositive:function(){var e=this.collect()
if(e.base instanceof x&&e.power instanceof x){return this.eval()>0}else{return false}},needsExplicitMul:function(){return false},isNatural:function(){return this.base.equals(b.e)}})
_.extend(f,{natural:function(){return b.e},common:function(){return x.Ten},create:function(e,t){var n=new f(e,t)
if(!t.hints.parens){n=n.addHint("open")}return n}})
function p(e,t){this.type=e
this.arg=t}p.prototype=new o
_.extend(p.prototype,{func:p,args:function(){return[this.type,this.arg]},functions:{sin:{eval:Math.sin,codegen:"Math.sin((",tex:"\\sin",expand:function(){return this}},cos:{eval:Math.cos,codegen:"Math.cos((",tex:"\\cos",expand:function(){return this}},tan:{eval:Math.tan,codegen:"Math.tan((",tex:"\\tan",expand:function(){return l.handleDivide(p.sin(this.arg),p.cos(this.arg))}},csc:{eval:function(e){return 1/Math.sin(e)},codegen:"(1/Math.sin(",tex:"\\csc",expand:function(){return l.handleDivide(x.One,p.sin(this.arg))}},sec:{eval:function(e){return 1/Math.cos(e)},codegen:"(1/Math.cos(",tex:"\\sec",expand:function(){return l.handleDivide(x.One,p.cos(this.arg))}},cot:{eval:function(e){return 1/Math.tan(e)},codegen:"(1/Math.tan(",tex:"\\cot",expand:function(){return l.handleDivide(p.cos(this.arg),p.sin(this.arg))}},arcsin:{eval:Math.asin,codegen:"Math.asin((",tex:"\\arcsin"},arccos:{eval:Math.acos,codegen:"Math.acos((",tex:"\\arccos"},arctan:{eval:Math.atan,codegen:"Math.atan((",tex:"\\arctan"},arccsc:{eval:function(e){return Math.asin(1/e)},codegen:"Math.asin(1/(",tex:"\\operatorname{arccsc}"},arcsec:{eval:function(e){return Math.acos(1/e)},codegen:"Math.acos(1/(",tex:"\\operatorname{arcsec}"},arccot:{eval:function(e){return Math.atan(1/e)},codegen:"Math.atan(1/(",tex:"\\operatorname{arccot}"},sinh:{eval:function(e){return(Math.exp(e)-Math.exp(-e))/2},codegen:function(e){return"((Math.exp("+e+") - Math.exp(-("+e+"))) / 2)"},tex:"\\sinh",expand:function(){return this}},cosh:{eval:function(e){return(Math.exp(e)+Math.exp(-e))/2},codegen:function(e){return"((Math.exp("+e+") + Math.exp(-("+e+"))) / 2)"},tex:"\\cosh",expand:function(){return this}},tanh:{eval:function(e){return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))},codegen:function(e){return"("+"(Math.exp("+e+") - Math.exp(-("+e+")))"+" / "+"(Math.exp("+e+") + Math.exp(-("+e+")))"+")"},tex:"\\tanh",expand:function(){return l.handleDivide(p.sinh(this.arg),p.cosh(this.arg))}},csch:{eval:function(e){return 2/(Math.exp(e)-Math.exp(-e))},codegen:function(e){return"(2 / (Math.exp("+e+") - Math.exp(-("+e+"))))"},tex:"\\csch",expand:function(){return l.handleDivide(x.One,p.sinh(this.arg))}},sech:{eval:function(e){return 2/(Math.exp(e)+Math.exp(-e))},codegen:function(e){return"(2 / (Math.exp("+e+") + Math.exp(-("+e+"))))"},tex:"\\sech",expand:function(){return l.handleDivide(x.One,p.cosh(this.arg))}},coth:{eval:function(e){return(Math.exp(e)+Math.exp(-e))/(Math.exp(e)-Math.exp(-e))},codegen:function(e){return"("+"(Math.exp("+e+") + Math.exp(-("+e+")))"+" / "+"(Math.exp("+e+") - Math.exp(-("+e+")))"+")"},tex:"\\coth",expand:function(){return l.handleDivide(p.cosh(this.arg),p.sinh(this.arg))}}},isEven:function(){return _.contains(["cos","sec"],this.type)},isInverse:function(){return this.type.indexOf("arc")===0},isBasic:function(){return _.contains(["sin","cos"],this.type)},eval:function(e,t){var n=this.functions[this.type].eval
var r=this.arg.eval(e,t)
return n(r)},codegen:function(){var e=this.functions[this.type].codegen
if(typeof e==="function"){return e(this.arg.codegen())}else if(typeof e==="string"){return e+this.arg.codegen()+"))"}else{throw new Error("codegen not implemented for "+this.type)}},print:function(){return this.type+"("+this.arg.print()+")"},tex:function(e){var t=this.functions[this.type].tex
var n="("+this.arg.tex()+")"
return e&&e.split?[t,n]:t+n},hints:_.extend(p.prototype.hints,{open:false}),isPositive:function(){var e=this.collect()
if(e.arg instanceof x){return this.eval()>0}else{return false}},completeParse:function(){if(this.exp){var e=new h(this,this.exp)
this.exp=undefined
return e}else{return this}},needsExplicitMul:function(){return false},expand:function(){var e=this.recurse("expand")
if(!e.isInverse()){var t=e.functions[e.type].expand
return _.bind(t,e)()}else{return e}},collect:function(e){var t=this.recurse("collect",e)
if(!t.isInverse()&&t.arg.isNegative()){var n
if(t.arg instanceof x){n=t.arg.abs()}else{n=l.handleDivide(t.arg,x.Neg).collect(e)}if(t.isEven()){return new p(t.type,n)}else{return new l(x.Neg,new p(t.type,n))}}else{return t}}})
_.extend(p,{create:function(e,t){var n=e[0]
var r=e[1]
if(r&&r.equals(x.Neg)){n="arc"+n
r=undefined}var i=new p(n,t)
if(!t.hints.parens){i=i.addHint("open")}if(r){i.exp=r}return i},sin:function(e){return new p("sin",e)},cos:function(e){return new p("cos",e)},sinh:function(e){return new p("sinh",e)},cosh:function(e){return new p("cosh",e)}})
function y(e){this.arg=e}y.prototype=new o
_.extend(y.prototype,{func:y,args:function(){return[this.arg]},eval:function(e,t){return Math.abs(this.arg.eval(e,t))},codegen:function(){return"Math.abs("+this.arg.codegen()+")"},print:function(){return"abs("+this.arg.print()+")"},tex:function(){return"\\left|"+this.arg.tex()+"\\right|"},collect:function(e){var t=this.recurse("collect",e)
if(t.arg.isPositive()){return t.arg}else if(t.arg instanceof x){return t.arg.abs()}else if(t.arg instanceof l){var n=_.groupBy(t.arg.terms,function(e){if(e.isPositive()){return"positive"}else if(e instanceof x){return"number"}else{return"other"}})
var r=n.positive.concat(_.invoke(n.number,"abs"))
if(n.other.length){r.push(new y(new l(n.other).flatten()))}return new l(r).flatten()}else{return t}},expand:function(){var e=this.recurse("expand")
if(e.arg instanceof l){var t=_.map(e.arg.terms,function(e){return new y(e)})
return new l(t)}else{return e}},isPositive:function(){return true}})
function v(e,t,n){this.left=e
this.type=t
this.right=n}v.prototype=new o
_.extend(v.prototype,{func:v,args:function(){return[this.left,this.type,this.right]},needsExplicitMul:function(){return false},print:function(){return this.left.print()+this.type+this.right.print()},signs:{"=":" = ","<":" < ",">":" > ","<>":" \\ne ","<=":" \\le ",">=":" \\ge "},tex:function(){return this.left.tex()+this.signs[this.type]+this.right.tex()},normalize:function(){var e=this.recurse("normalize")
if(_.contains([">",">="],e.type)){return new v(e.right,e.type.replace(">","<"),e.left)}else{return e}},asExpr:function(e){var t=function(e){return e instanceof x&&e.isSimple()&&e.eval()===0}
var n=[]
if(this.left instanceof u){n=_.clone(this.left.terms)}else if(!t(this.left)){n=[this.left]}if(this.right instanceof u){n=n.concat(this.right.negate().terms)}else if(!t(this.right)){n.push(this.right.negate())}var r=!this.isEquality()
n=_.invoke(n,"collect",{preciseFloats:true})
for(var i=0;i<n.length;i++){var s=n[i].getDenominator()
if(r&&!s.isPositive()){s=s.asPositiveFactor()}if(!s.equals(x.One)){n=_.map(n,function(e){return l.createOrAppend(e,s).simplify({once:true,preciseFloats:true})})}}var a=new u(n).flatten()
return e?a:this.divideThrough(a)},divideThrough:function(e){var t=!this.isEquality()
var n=e.simplify({once:true})
var r=n.factor({keepNegative:t})
if(!(r instanceof l)){return e}var i=r.terms
var s=function(e){return e instanceof u}
var a=function(e){return!!e.getVars().length}
var o=function(e){return e.equals(x.One)}
var c=_.groupBy(i,s)
var f=c[true]||[]
var p=c[false]||[]
if(f.length&&this.isEquality()){return new l(f).flatten()}var y=p
if(!f.length){y=_.reject(y,a)}if(t){y=_.invoke(y,"asPositiveFactor")}y=_.reject(y,o)
y=_.map(y,function(e){return new h(e,x.Div)})
var v=new l(i.concat(y)).collect()
if(v.equals(r)){return n}else{return v}},isEquality:function(){return _.contains(["=","<>"],this.type)},compare:function(e){if(!(e instanceof v)){return false}var t=this.normalize()
var n=e.normalize()
if(t.type!==n.type){return false}var r=t.divideThrough(t.asExpr(true).collect())
var i=n.divideThrough(n.asExpr(true).collect())
if(t.isEquality()){return r.compare(i)||r.compare(l.handleNegative(i))}else{return r.compare(i)}},sameForm:function(e){var t=this.normalize()
var n=e.normalize()
var r=t.left.sameForm(n.left)&&t.right.sameForm(n.right)
if(t.isEquality()){return r||t.left.sameForm(n.right)&&t.right.sameForm(n.left)}else{return r}},isSimplified:function(){var e=this.asExpr(true)
var t=this.divideThrough(e).simplify()
return e.equals(t)&&this.left.isSimplified()&&this.right.isSimplified()}})
_.extend(v.prototype,{solveLinearEquationForVariable:function(e){var t=this.asExpr()
if(!t.is(u)||t.terms.length!==2){throw new Error("Can only handle linear equations of the form "+"a + bx (= 0)")}var n=function(t){return t.has(m)&&_.contains(t.getVars(),e.symbol)}
var r,i
if(n(t.terms[0])){r=l.handleNegative(t.terms[1])
i=l.handleDivide(t.terms[0],e)}else{r=l.handleNegative(t.terms[0])
i=l.handleDivide(t.terms[1],e)}return l.handleDivide(r,i).simplify()}})
function d(){}d.prototype=new o
_.extend(d.prototype,{needsExplicitMul:function(){return false},findGCD:function(e){if(e instanceof d||e instanceof x){return this.equals(e)?this:x.One}else{return e.findGCD(this)}}})
function g(e,t){this.symbol=e
this.arg=t}g.prototype=new d
_.extend(g.prototype,{func:g,args:function(){return[this.symbol,this.arg]},print:function(){return this.symbol+"("+this.arg.print()+")"},tex:function(){return this.symbol+"("+this.arg.tex()+")"},eval:function(t,n){var r=this.arg
var i=t[this.symbol]
var s=_.extend(_.clone(t),{x:r.eval(t,n)})
var a=e.parse(i,n)
if(a.parsed){return a.expr.eval(s,n)}return a},codegen:function(){return'vars["'+this.symbol+'"]('+this.arg.codegen()+")"},getUnits:function(){return this.arg.getUnits()},getVars:function(e){if(e){return this.arg.getVars()}else{return _.union(this.arg.getVars(),[this.symbol]).sort()}},getConsts:function(){return this.arg.getConsts()}})
function m(e,t){this.symbol=e
this.subscript=t}m.prototype=new d
_.extend(m.prototype,{func:m,args:function(){return[this.symbol,this.subscript]},exprArgs:function(){return[]},recurse:function(){return this},print:function(){var e=""
if(this.subscript){e="_("+this.subscript.print()+")"}return this.symbol+e},prettyPrint:function(){var e=this.subscript
if(e&&(e instanceof x||e instanceof d)){return this.symbol+"_"+e.print()}else{return this.print()}},tex:function(){var e=""
if(this.subscript){e="_{"+this.subscript.tex()+"}"}var t=this.symbol.length>1?"\\":""
return t+this.symbol+e},repr:function(){return"Var("+this.print()+")"},eval:function(e,t){return e[this.prettyPrint()]},codegen:function(){return'vars["'+this.prettyPrint()+'"]'},getVars:function(){return[this.prettyPrint()]},isPositive:function(){return false}})
function b(e){this.symbol=e}b.prototype=new d
_.extend(b.prototype,{func:b,args:function(){return[this.symbol]},recurse:function(){return this},eval:function(e,t){if(this.symbol==="pi"){return Math.PI}else if(this.symbol==="e"){return Math.E}},codegen:function(){if(this.symbol==="pi"){return"Math.PI"}else if(this.symbol==="e"){return"Math.E"}},print:function(){return this.symbol},tex:function(){if(this.symbol==="pi"){return"\\pi "}else if(this.symbol==="e"){return"e"}},isPositive:function(){return this.eval()>0},abs:function(){if(this.eval()>0){return this}else{return l.handleNegative(this)}},getConsts:function(){return[this.print()]}})
b.e=new b("e")
b.pi=new b("pi")
function x(){}x.prototype=new o
_.extend(x.prototype,{repr:function(){return this.print()},strip:function(){return this.abs()},recurse:function(){return this},codegen:function(){return this.print()},add:t,mul:t,negate:t,isSubtract:function(){return this.hints.subtract},abs:t,needsExplicitMul:function(){return true},findGCD:t,isPositive:function(){return this.eval()>0},isNegative:function(){return this.eval()<0},asPositiveFactor:function(){return this.isPositive()?this:this.abs()},hints:_.extend(x.prototype.hints,{negate:false,subtract:false,divide:false,root:false,fraction:false,entered:false}),isSimple:t,getDecimalPlaces:function(){var e=(""+this.n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
if(e){return Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0))}else{return 0}},asRational:t})
function w(e,t){var n=e
var r=t
if(r<0){n=-n
r=-r}this.n=n
this.d=r}w.prototype=new x
_.extend(w.prototype,{func:w,args:function(){return[this.n,this.d]},eval:function(){return this.n/this.d},print:function(){return this.n.toString()+"/"+this.d.toString()},tex:function(){var e="\\frac{"+Math.abs(this.n).toString()+"}{"+this.d.toString()+"}"
return this.n<0?"-"+e:e},add:function(e,t){if(e instanceof w){return new w(this.n*e.d+this.d*e.n,this.d*e.d).collect()}else{return e.add(this,t)}},mul:function(e,t){if(e instanceof w){return new w(this.n*e.n,this.d*e.d).collect()}else{return e.mul(this,t)}},collect:function(){var e=x.findGCD(this.n,this.d)
var t=this.n/e
var n=this.d/e
if(n===1){return new k(t)}else{return new w(t,n)}},negate:function(){return new w(-this.n,this.d)},abs:function(){return new w(Math.abs(this.n),this.d)},findGCD:function(e){if(e instanceof w){var t=x.findGCD(this.n*e.d,e.n*this.d)
var n=this.d*e.d
return new w(t,n).collect()}else if(e instanceof k){return new w(x.findGCD(this.n,e.n),this.d)}else{return e.findGCD(this)}},raiseToThe:function(e){if(e instanceof k){var t=e.eval()>0
var n=e.abs().eval()
var r=Math.pow(this.n,n)
var i=Math.pow(this.d,n)
if(t){return new w(r,i).collect()}else{return new w(i,r).collect()}}else{return new M(this.eval()).raiseToThe(e)}},getDenominator:function(){return new k(this.d)},isSimple:function(){return false},asRational:function(){return this}})
function k(e){this.n=e}k.prototype=new w(0,1)
_.extend(k.prototype,{func:k,args:function(){return[this.n]},print:function(){return this.n.toString()},tex:function(){return this.n.toString()},negate:function(){return new k(-this.n)},abs:function(){return new k(Math.abs(this.n))},isSimple:function(){return true},findGCD:function(e){if(e instanceof k){return new k(x.findGCD(this.n,e.n))}else{return e.findGCD(this)}}})
_.extend(k,{create:function(e){return new k(e).addHint("entered")}})
function M(e){this.n=e}M.prototype=new x
_.extend(M.prototype,{func:M,args:function(){return[this.n]},eval:function(){return this.n},print:function(){return this.n.toString()},tex:function(){return this.n.toString()},add:function(e,t){if(t&&t.preciseFloats){return M.toDecimalPlaces(this.n+e.eval(),Math.max(this.getDecimalPlaces(),e.getDecimalPlaces()))}else{return new M(this.n+e.eval()).collect()}},mul:function(e,t){if(t&&t.preciseFloats){return M.toDecimalPlaces(this.n*e.eval(),this.getDecimalPlaces()+e.getDecimalPlaces())}else{return new M(this.n*e.eval()).collect()}},collect:function(){return this},negate:function(){return new M(-this.n)},abs:function(){return new M(Math.abs(this.n))},findGCD:function(e){if(e instanceof x){return new M(x.findGCD(this.eval(),e.eval())).collect()}else{return e.findGCD(this)}},raiseToThe:function(e,t){if(t&&t.preciseFloats&&e instanceof k&&e.n>1){return M.toDecimalPlaces(new h(this,e).eval(),this.getDecimalPlaces()*e.n)}else{return new M(new h(this,e).eval()).collect()}},asRational:function(){var e=this.n.toString().split(".")
if(e.length===1){return new w(this.n,1)}else{var t=Number(e.join(""))
var n=Math.pow(10,e[1].length)
return new w(t,n).collect()}},getDenominator:function(){return this.asRational().getDenominator()},isSimple:function(){return true}})
_.extend(M,{create:function(e){return new M(e).addHint("entered")},toDecimalPlaces:function(e,t){return new M(+e.toFixed(Math.min(t,20))).collect()}})
_.extend(x,{negativeOne:function(e){if(e==="subtract"){return x.Sub}else if(e==="divide"){return x.Div}else{return x.Neg}},findGCD:function(e,t){var n
e=Math.abs(e)
t=Math.abs(t)
if(e!==Math.floor(e)||t!==Math.floor(t)){return 1}while(t){n=e%t
e=t
t=n}return e},min:function(){return _.min(_.toArray(arguments),function(e){return e.eval()})},max:function(){return _.max(_.toArray(arguments),function(e){return e.eval()})}})
x.Neg=new k(-1).addHint("negate")
x.Sub=new k(-1).addHint("subtract")
x.Div=new k(-1).addHint("divide")
x.Sqrt=new w(1,2).addHint("root")
x.Zero=new k(0)
x.One=new k(1)
x.Ten=new k(10)
u.prototype.identity=x.Zero
l.prototype.identity=x.One
var I=e.parser
var S=function(e,t){throw new Error(t.loc.first_column)}
I.yy={Add:u,Mul:l,Pow:h,Log:f,Trig:p,Eq:v,Abs:y,Func:g,Const:b,Var:m,Int:k,Float:M,parseError:S,constants:["e"],symbolLexer:function(e){if(_.contains(I.yy.constants,e)){return"CONST"}else if(_.contains(I.yy.functions,e)){return"FUNC"}else{return"VAR"}}}
e.parse=function(e,t){try{if(t&&t.functions){I.yy.functions=_.without(t.functions,"i")}else{I.yy.functions=[]}if(t&&t.decimal_separator){e=e.split(t.decimal_separator).join(".")}var n=I.parse(e).completeParse()
return{parsed:true,expr:n}}catch(e){return{parsed:false,error:e.message}}}
function E(e){this.symbol=e}E.prototype=new d
var A=function(e){if(_(N).has(e)||_(q).has(e)){return new E(e)}var t=_(_(T).keys()).find(function(t){return new RegExp("^"+t).test(e)})
if(t){var n=e.replace(new RegExp("^"+t),"")
if(_(N).has(n)||q[n]&&q[n].prefixes===D){return new l(T[t],new E(n))}else{throw new Error(n+" does not allow prefixes")}}else{return new E(e)}}
e.unitParse=function(t){try{var n=e.unitParser.parse(t)
var r=[]
_(n.unit.num).each(function(e){r.push(new h(A(e.name),new k(e.pow)))})
_(n.unit.denom).each(function(e){r.push(new h(A(e.name),new k(-1*e.pow)))})
var i=new l(r).flatten()
if(n.type==="unitMagnitude"){var s=[new M(+n.magnitude)].concat(r)
var a=new l(s)
return{parsed:true,unit:i,expr:a,coefficient:n.magnitude,type:n.type}}else{return{parsed:true,unit:i,type:n.type}}}catch(e){return{parsed:false,error:e.message}}}
_.extend(E.prototype,{func:E,args:function(){return[this.symbol]},recurse:function(){return this},eval:function(e,t){return 1},getUnits:function(){return[{unit:this.symbol,pow:1}]},codegen:function(){return"1"},print:function(){return this.symbol},tex:function(){return this.symbol},collect:function(e){if(_(N).has(this.symbol)){return this}else if(_(q).has(this.symbol)){return q[this.symbol].conversion}else{throw new Error("could not understand unit: "+this.symbol)}}})
var N={m:new E("m"),g:new E("g"),s:new E("s"),A:new E("A"),K:new E("K"),mol:new E("mol"),cd:new E("cd")}
var T={a:new h(new k(10),new k(-18)),f:new h(new k(10),new k(-15)),p:new h(new k(10),new k(-12)),n:new h(new k(10),new k(-9)),u:new h(new k(10),new k(-6)),m:new h(new k(10),new k(-3)),c:new h(new k(10),new k(-2)),d:new h(new k(10),new k(-1)),da:new k(10),h:new h(new k(10),new k(2)),k:new h(new k(10),new k(3)),M:new h(new k(10),new k(6)),G:new h(new k(10),new k(9)),T:new h(new k(10),new k(12)),P:new h(new k(10),new k(15)),E:new h(new k(10),new k(18)),hella:new h(new k(10),new k(27))}
var D={}
var P={}
var O=function(t,n){var r=t.split("|")
var i=r[0].trim()
var s=r[1].trim()
var a=x.One
if(i!==""){a=e.parse(i).expr}var o=s.split("/")
var c=[a]
if(o[0]){o[0].split(" ").filter(function(e){return e!==""}).map(function(e){c.push(new E(e))})}if(o[1]){o[1].split(" ").filter(function(e){return e!==""}).map(function(e){c.push(new h(new E(e),x.Div))})}return{conversion:new l(c),prefixes:n}}
var q={Da:O("1.6605388628 x 10^-24 | g",D),u:O("| Da",P),meter:O("| m",P),meters:O("| m",P),in:O("254 / 10000 | m",P),ft:O("3048  / 10000 | m",P),yd:O("9144  / 10000 | m",P),mi:O("1609344 / 1000 | m",P),ly:O("9.4607 x 10^15 | m",P),nmi:O("1852 | m",P),"Å":O("10^-10 | m",P),pc:O("3.0857 x 10^16 | m",P),min:O("60 | s",P),hr:O("3600 | s",P),sec:O("| s",P),day:O("86400 | s",P),wk:O("604800 | s",P),fortnight:O("14 | day",P),shake:O("10^-8 | s",P),olympiad:O("126200000 | s",P),"°C":O("1 | K",P),"°F":O("5/9 | K",P),"°R":O("5/9 | K",P),e:O("1.6021765314 x 10^-19 | C",P),c:O("299792458 | m / s",P),kn:O("514/1000 | m / s",P),kt:O("| kn",P),knot:O("| kn",P),J:O("| N m",D),BTU:O("1060 | J",P),cal:O("4184 / 1000 | J",D),eV:O("1.602176514 x 10^-19 | J",D),erg:O("10^−7 | J",D),W:O("| J / s",D),"H-e":O("80 | W",P),N:O("1000 | g m / s s",D),lb:O("4448221615 / 1000000000 | N",P),dyn:O("10^-5 | N",P),Pa:O("1 | N / m m m",D),bar:O("10^5 | Pa",D),"㏔":O("1/1000 | bar",P),"㍴":O("| bar",P),atm:O("101325 | Pa",P),Torr:O("1/760 | atm",P),mmHg:O("| Torr",P),ha:O("10^4 | m m",P),b:O("10^−28 | m m",D),barn:O("| b",D),acre:O("4046.87 | m m",P),skilodge:O("10^-31 | m m",P),outhouse:O("10^-34 | m m",P),shed:O("10^-52 | m m",P),L:O("1/1000 | m m m",D),gal:O("3785/1000 | L",D),cup:O("1/16 | gal",P),qt:O("1/4 | gal",P),quart:O("| qt",P),p:O("1/8 | gal",P),pt:O("| p",P),pint:O("| p",P),"fl oz":O("1/8 | cup",P),"fl. oz.":O("1/8 | cup",P),tbsp:O("1/16 | cup",P),tsp:O("1/3 | tbsp",P),rev:O("2 pi | rad",P),deg:O("180 pi | rad",P),"°":O("| deg",P),arcminute:O("1/60 | deg",P),arcsec:O("1/3600 | deg",P),Hu:O("1000 | dB",D),dozen:O("12 |",P),mol:O("6.0221412927 x 10^23 |",D),"%":O("1/100 |",P),percent:O("| %",P),ppm:O("1/1000000 |",P),V:O("1000 | g m m / s s C",D),C:O("| A s",D),ampere:O("| A",P),"Ω":O("| V / A",D),ohm:O("| Ω",P),F:O("| C / V",D),H:O("| ohm s",D),T:O("1000 | g / C s",D),Wb:O("1000 | g m m / C s",D),lm:O("pi x 10^4 | cd / m m",P),lx:O("| lm / m m",P),nit:O("| cd / m m",P),sb:O("10^4 | cd / m m",P),stilb:O("1 | sb",P),apostilb:O("1 / pi x 10^(-4) | sb",P),blondel:O("| apostilb",P),asb:O("| apostilb",P),la:O("| lm",P),Lb:O("| lm",P),sk:O("10^-7 | lm",P),skot:O("| sk",P),bril:O("10^-11 | lm",P),Hz:O("| / s",D)}
e.Add=u
e.Mul=l
e.Pow=h
e.Log=f
e.Eq=v
e.Trig=p
e.Abs=y
e.Func=g
e.Var=m
e.Const=b
e.Unit=E
e.Rational=w
e.Int=k
e.Float=M
e.Zero=x.Zero
e.One=x.One})(KAS);(function(e){e.compare=function(e,t,n){var r={form:false,simplify:false}
if(n!==undefined){n=_.extend(r,n)}else{n=r}var i=e.sameVars(t)
if(!i.equal){var s
if(i.equalIgnoringCase){s="Check your variables; one or more are using "+"the wrong case (upper or lower)."}else{s="Check your variables; you may have used the wrong "+"letter for one or more of them."}return{equal:false,wrongVariableCase:i.equalIgnoringCase,wrongVariableNames:!i.equalIgnoringCase,message:s}}if(!e.compare(t)){return{equal:false,message:null}}if(n.form&&!e.sameForm(t)){return{equal:false,message:"Your answer is not in the correct form."}}if(n.simplify&&!e.isSimplified()){return{equal:false,message:"Your answer is not fully expanded and simplified."}}return{equal:true,message:null}}})(KAS)

});
KAdefine("javascript/perseus-all-package/gorgon/gorgon.js", function(require, module, exports) {
var _perseusMarkdown=require("../perseus-markdown.jsx")
var _perseusMarkdown2=babelHelpers.interopRequireDefault(_perseusMarkdown)
var _rule=require("./rule.js")
var _rule2=babelHelpers.interopRequireDefault(_rule)
var _treeTransformer=require("./tree-transformer.js")
var _treeTransformer2=babelHelpers.interopRequireDefault(_treeTransformer)
var allLintRules=require("./rules/all-rules.js").filter(function(e){return e.severity<_rule2.default.Severity.BULK_WARNING})
function runLinter(e,r,t,n){n=n||allLintRules
var a=[]
var s=new _treeTransformer2.default(e)
s.traverse(function(e,r,t){if(_treeTransformer2.default.isTextNode(e)){var n=r.nextSibling()
while(_treeTransformer2.default.isTextNode(n)){e.content+=n.content
r.removeNextSibling()
n=r.nextSibling()}}})
var i=[]
var l=false
s.traverse(function(e,s,u){var o=[]
var p=n.filter(function(e){return e.applies(r)})
var f=[].concat(r.stack)
f.push(e.type)
var v=babelHelpers.extends({},r,{stack:f.join(".")})
p.forEach(function(r){var n=r.check(e,s,u,v)
if(n){if(n.start||n.end){n.target=u.substring(n.start,n.end)}a.push(n)
if(t){o.push(n)}}})
if(!t){return}if(e.type==="table"){if(i.length){o.push.apply(o,i)}l=false
i=[]}else if(!l){l=s.ancestors().some(function(e){return e.type==="table"})}if(l&&o.length){var c;(c=i).push.apply(c,o)}if(o.length){o.sort(function(e,r){return e.severity-r.severity})
if(e.type!=="text"||o.length>1){s.replace({type:"lint",content:e,message:o.map(function(e){return e.message}).join("\n\n"),ruleName:o[0].rule,blockHighlight:v.blockHighlight,insideTable:l,severity:o[0].severity})}else{var b=e.content
var h=o[0]
var g=h.start||0
var d=h.end||b.length
var y=b.substring(0,g)
var m=b.substring(g,d)
var x=b.substring(d)
var k=[]
if(y){k.push({type:"text",content:y})}k.push({type:"lint",content:{type:"text",content:m},message:h.message,ruleName:h.rule,insideTable:l,severity:h.severity})
if(x){k.push({type:"text",content:x})}s.replace.apply(s,k)}}})
return a}function pushContextStack(e,r){var t=e.stack||[]
return babelHelpers.extends({},e,{stack:t.concat(r)})}module.exports={runLinter:runLinter,parse:_perseusMarkdown2.default.parse,pushContextStack:pushContextStack,rules:allLintRules}

});
KAdefine("javascript/perseus-all-package/jipt-hack.jsx", function(require, module, exports) {
var MAYBE_LATEX_REGEX=/\\+([ !#$%*,.:;\[\]\^_{|}]|[a-zA-Z]*)/g
var LATEX_MACROS_LIST=[" ","!","#","%","*",",",".",":",";","[","]","^","_","{","|","}","alpha","angle","approx","arccos","arcsin","arctan","arrow","bar","barwedge","begin","beta","bf","big","Big","bigg","Bigg","bigl","Bigl","bigr","Bigr","bigstar","bigtriangledown","bigtriangleup","binom","blacklozenge","blue","blueA","blueB","blueC","blueD","blueE","boldsymbol","Box","boxdot","boxed","bullet","cancel","cap","cdot","cdots","checkmark","chi","circ","circledcirc","clubsuit","colon","color","cong","cos","cot","csc","cup","curvearrowright","dagger","dbinom","ddots","delta","Delta","det","dfrac","diamond","diamondsuit","displaystyle","div","dot","dots","downarrow","Downarrow","ell","end","enspace","epsilon","equiv","eta","fbox","flat","footnotesize","frac","frown","gamma","Gamma","gcf","ge","geq","gg","goldB","goldC","goldD","goldE","gray","grayD","grayE","grayF","green","greenB","greenC","greenD","greenE","gt","hat","hbox","heartsuit","hline","hphantom","huge","Huge","iff","iiint","iint","implies","in","infty","int","intercal","it","kaBlue","kappa","kern","lambda","langle","large","Large","LARGE","lcm","ldots","le","left","leftarrow","leftrightarrow","Leftrightarrow","leftrightharpoons","leftroot","leq","lfloor","lg","lim","limits","llap","ln","log","longrightarrow","Longrightarrow","lozenge","lt","lvert","maroonB","maroonC","maroonD","maroonE","mathbb","mathbf","mathbin","mathcal","mathop","mathrm","mathsf","max","mbox","mid","mp","mu","nabla","ne","nearrow","neq","ngeq","ngtr","nleq","nless","normalsize","not","nu","nx","odot","oint","omega","Omega","operatorname","oplus","orange","oslash","otimes","overbrace","overleftarrow","overleftrightarrow","overline","overrightarrow","overset","parallel","partial","perp","phantom","phi","Phi","pi","pink","pm","prime","propto","psi","Psi","purple","purpleA","purpleC","purpleD","purpleE","qquad","quad","raise","rangle","red","redA","redB","redC","redD","redE","rfloor","rho","right","rightarrow","Rightarrow","rightleftharpoons","rvert","scriptsize","scriptstyle","searrow","sec","setminus","sharp","sigma","Sigma","sim","simeq","sin","small","space","sqrt","square","stackrel","star","substack","sum","swarrow","tan","tan","tau","tealA","tealB","tealC","tealD","tealE","text","textbf","textit","textrm","tfrac","therefore","theta","Theta","tilde","times","tiny","to","triangle","triangleleft","triangleright","underbrace","underline","underset","uparrow","uproot","varphi","vdots","vec","veebar","vert","vphantom","widehat","xi","xrightarrow","Begin","End","inte","lamba","textb"]
var LATEX_MACROS=LATEX_MACROS_LIST.reduce(function(e,r){e[r]=null
return e},{})
var ESCAPE_SEQUENCES={n:"\n",r:"\r",t:"\t","\\":"\\"}
var getLatexLevel=function e(r){var a=0
while(a<r.length&&r[a]==="\\"){a++}if(a===0){return 2}else if(a%2===0){return 3}else{var t=r.substring(a)
if(t==="$"){return a===1?4:1}else{return LATEX_MACROS.hasOwnProperty(t)?6:0}}}
var tryUnescape=function e(r){var a=0
var t=""
while(a<r.length){var n=r[a]
if(n==="\\"){a+=1
if(a===r.length){return null}var l=r[a]
if(ESCAPE_SEQUENCES.hasOwnProperty(l)){t+=ESCAPE_SEQUENCES[l]}else{return null}}else{t+=n}a+=1}return t}
var shouldUnescape=function e(r){if(!r||r.indexOf("\\")<0){return false}var a=0
var t=0
var n=false
var l=false
var o=void 0
MAYBE_LATEX_REGEX.lastIndex=0
while((o=MAYBE_LATEX_REGEX.exec(r))!==null){var i=o[0]
var s=tryUnescape(i)
if(s===null){return false}var g=getLatexLevel(i)
if(g===0){n=true}var c=getLatexLevel(s)
if(c===0){l=true}a+=g
t+=c}if(n!==l){return n}return t>=a}
var maybeUnescape=function e(r){if(shouldUnescape(r)){return tryUnescape(r)}else{return r}}
var maybeUnescapeAccordingToSource=function e(r,a){if(shouldUnescape(r)){return[tryUnescape(r),tryUnescape(a)]}else{return[r,a]}}
module.exports={maybeUnescape:maybeUnescape,maybeUnescapeAccordingToSource:maybeUnescapeAccordingToSource,shouldUnescape:shouldUnescape}

});
; KAdefine.updatePathToPackageMap({"javascript/perseus-merged-extra-widgets-package/extra-widgets.js": "perseus-merged-extra-widgets.js"});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/perseus-all-package.js.map 