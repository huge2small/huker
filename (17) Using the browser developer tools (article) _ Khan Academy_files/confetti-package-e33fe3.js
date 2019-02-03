KAdefine("javascript/components/confetti-package/confetti.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.defaultProps=undefined
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _confettiShapes=require("./confetti-shapes.js")
var random=function t(e,a){return Math.random()*(a-e)+e}
var sample=function t(e){return e[Math.floor(random(0,e.length))]}
var getDiameter=function t(e,a){return Math.sqrt(e*e+a*a)}
var PIXEL_RATIO=window.devicePixelRatio||1
var defaultProps=exports.defaultProps={shapes:[(0,_confettiShapes.createZigZag)({fill:"#ca337c"}),(0,_confettiShapes.createZigZag)({fill:"#01d1c1"}),(0,_confettiShapes.createZigZag)({fill:"#f4d345"}),(0,_confettiShapes.createCircle)({fill:"#63d9ea"}),(0,_confettiShapes.createCircle)({fill:"#ed5fa6"}),(0,_confettiShapes.createCircle)({fill:"#aa87ff"}),(0,_confettiShapes.createCircle)({fill:"#26edd5"}),(0,_confettiShapes.createTriangle)({fill:"#ed5fa6"}),(0,_confettiShapes.createTriangle)({fill:"#aa87ff"}),(0,_confettiShapes.createTriangle)({fill:"#26edd5"})],numParticles:80,gravity:1600,spin:20,twist:0,minSpeed:225,maxSpeed:675,minScale:.4,maxScale:1,emitDuration:0,height:0,width:0}
var Confetti=function(t){babelHelpers.inherits(e,t)
function e(){var a,r,i
babelHelpers.classCallCheck(this,e)
for(var n=arguments.length,o=Array(n),s=0;s<n;s++){o[s]=arguments[s]}return i=(a=(r=babelHelpers.possibleConstructorReturn(this,t.call.apply(t,[this].concat(o))),r),r.particles=[],r.startConfetti=function(t,e){r.start(t,e)},r.start=function(t,e){if(r.props.shapes.length===0){return}var a=r.canvas.getBoundingClientRect()
var i=t-a.left
var n=e-a.top
if(!r.particles.length){r._tickId=window.requestAnimationFrame(r.tick)}for(var o=0;o<r.props.numParticles;o++){var s=random(r.props.minSpeed,r.props.maxSpeed)
var c=-Math.PI/2+.7*random(-.5,.5)
var l=sample(r.props.shapes),p=l.front,h=l.back
r.particles.push({birth:Date.now()+random(0,r.props.emitDuration),x:i+(r.props.spreadHorizontally?random(-.5,.5)*a.width:0),y:n,spin:r.props.spin*random(-.5,.5),twist:r.props.twist*random(-.5,.5),angle:random(0,2*Math.PI),scale:random(r.props.minScale,r.props.maxScale),vx:Math.cos(c)*s,vy:Math.sin(c)*s,front:p,back:h,width:p.naturalWidth,height:p.naturalHeight})}},r.tick=function(){var t=Date.now()
var e=r.props,a=e.height,i=e.width
r.ctx.clearRect(0,0,i,a)
for(var n=0;n<r.particles.length;n++){var o=r.particles[n]
var s=(t-o.birth)/1e3
if(s<0){continue}var c=o.x+o.vx*s
var l=o.y+o.vy*s+r.props.gravity*s*s/2
var p=getDiameter(o.width*o.scale,o.height*o.scale)
var h=c+p<0||c-p>i||l-p>a
if(h){if(n===r.particles.length-1){r.particles.pop()}else{r.particles[n]=r.particles.pop()
n--}continue}r.ctx.translate(c,l)
var f=o.angle+o.spin*s
r.ctx.rotate(f)
var d=o.twist?Math.cos(o.angle+o.twist*s):1
var u=d>=0?o.front:o.back
r.ctx.scale(d,1)
r.ctx.drawImage(u,u.naturalWidth*o.scale*-.5,u.naturalHeight*o.scale*-.5,u.naturalWidth*o.scale,u.naturalHeight*o.scale)
r.ctx.setTransform(PIXEL_RATIO,0,0,PIXEL_RATIO,0,0)}if(r.particles.length){r._tickId=requestAnimationFrame(r.tick)}else{if(r.props.onComplete){r.props.onComplete()}}},a),babelHelpers.possibleConstructorReturn(r,i)}e.prototype.componentDidMount=function t(){this.ctx=this.canvas.getContext("2d")
this.ctx.setTransform(PIXEL_RATIO,0,0,PIXEL_RATIO,0,0)}
e.prototype.componentWillUnmount=function t(){if(this._tickId){window.cancelAnimationFrame(this._tickId)}}
e.prototype.render=function t(){var e=this
var a=this.props,r=a.height,i=a.width
return React.createElement("canvas",{height:String(r*PIXEL_RATIO),width:String(i*PIXEL_RATIO),style:{width:i,height:r},ref:function t(a){return e.canvas=a}})}
return e}(_react.Component)
Confetti.defaultProps=defaultProps
exports.default=Confetti

});
KAdefine("javascript/components/confetti-package/fullscreen-confetti.jsx", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
var _react=require("react")
var React=babelHelpers.interopRequireWildcard(_react)
var _ka=require("../../shared-package/ka.js")
var _ka2=babelHelpers.interopRequireDefault(_ka)
var _confetti2=require("./confetti.jsx")
var _confetti3=babelHelpers.interopRequireDefault(_confetti2)
var getWindowDimensions=function e(){var t=window.innerWidth
var i=window.innerHeight
if(_ka2.default.isPhone){t=window.screen.width
i=window.screen.height}return{windowWidth:t,windowHeight:i}}
var FullscreenConfetti=function(e){babelHelpers.inherits(t,e)
function t(){var i,n,r
babelHelpers.classCallCheck(this,t)
for(var o=arguments.length,s=Array(o),a=0;a<o;a++){s[a]=arguments[a]}return r=(i=(n=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),n),_initialiseProps.call(n),i),babelHelpers.possibleConstructorReturn(n,r)}t.prototype.componentDidMount=function e(){this.setDimensions()
window.addEventListener("resize",this.setDimensions)}
t.prototype.componentWillUnmount=function e(){window.removeEventListener("resize",this.setDimensions)}
t.prototype.render=function e(){var t=this
var i=this.state.showConfetti?"visible":"hidden"
return React.createElement("div",{style:{visibility:i}},React.createElement(_confetti3.default,babelHelpers.extends({},this.props,{onComplete:this.handleComplete,ref:function e(i){return t.confetti=i},width:this.state.windowWidth,height:this.state.windowHeight})))}
return t}(_react.Component)
FullscreenConfetti.defaultProps=babelHelpers.extends({},_confetti2.defaultProps,{gravity:1100,spin:4,twist:20,emitDuration:3e3,spreadHorizontally:true,minSpeed:200,maxSpeed:600,minScale:1,maxScale:1})
var _initialiseProps=function e(){var t=this
this.state=babelHelpers.extends({},getWindowDimensions(),{showConfetti:false})
this.setDimensions=function(){t.setState(getWindowDimensions())}
this.startConfetti=function(){var e
t.setState({showConfetti:true});(e=t.confetti).startConfetti.apply(e,arguments)}
this.handleComplete=function(){t.setState({showConfetti:false})
if(typeof t.props.onComplete==="function"){var e;(e=t.props).onComplete.apply(e,arguments)}}}
exports.default=FullscreenConfetti

});
KAdefine("javascript/components/confetti-package/confetti-shapes.js", function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:true})
exports.createZigZag=exports.createRectangle=exports.createTriangle=exports.createCircle=exports.createShape=undefined
var _color=require("../../shared-styles-package/color.js")
var createImageElement=function e(r){var n="data:image/svg+xml;base64,"+window.btoa(r)
var a=new Image
a.src=n
return a}
var circleShapeFactory=function e(r){var n=r.size,a=n===undefined?15:n,t=r.fill
return'\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 10 10"\n        width="'+a+'"\n        height="'+a+'"\n    >\n        <circle\n            cx="5"\n            cy="5"\n            r="5"\n            fill="'+(0,_color.format)(t)+'"\n        />\n    </svg>\n'}
var triangleShapeFactory=function e(r){var n=r.size,a=n===undefined?16:n,t=r.fill
return'\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 10 10"\n        width="'+a+'"\n        height="'+a+'"\n    >\n        <polygon\n            fill="'+(0,_color.format)(t)+'"\n            points="0 10 5 0 10 10"\n        />\n    </svg>\n'}
var rectangleShapeFactory=function e(r){var n=r.width,a=n===undefined?6:n,t=r.height,i=t===undefined?12:t,o=r.fill
return'\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 '+a+" "+i+'"\n        width="'+a+'"\n        height="'+i+'"\n    >\n        <rect\n            x="0"\n            y="0"\n            width="'+a+'"\n            height="'+i+'"\n            fill="'+(0,_color.format)(o)+'"\n        />\n    </svg>\n'}
var zigZagShapeFactory=function e(r){var n=r.size,a=n===undefined?20:n,t=r.fill
return'\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 23.74 92.52"\n        width="'+a+'"\n        height="'+a*4+'"\n    >\n        <polygon\n            fill="'+(0,_color.format)(t)+'"\n            points="17.08 31.49 3.56 29.97 10.22 0 23.74 1.52 17.08 31.49"\n        />\n        <polygon\n            fill="'+(0,_color.format)(t)+'"\n            points="13.53 92.52 0 91 6.66 61.03 20.19 62.55 13.53 92.52"\n        />\n        <polygon\n            fill="'+(0,_color.format)((0,_color.mixWithWhite)(t,.35))+'"\n            points="20.19 62.55 6.66 61.03 3.56 29.97 17.08 31.49 20.19 62.55"\n        />\n    </svg>\n'}
var createShape=function e(r){return function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}
var n=e.fill,a=n===undefined?"#000000":n,t=e.backsideDarkenAmount,i=t===undefined?.25:t,o=babelHelpers.objectWithoutProperties(e,["fill","backsideDarkenAmount"])
var c=(0,_color.parse)(a)
var l=void 0
switch(r){case"circle":{l=circleShapeFactory
break}case"triangle":{l=triangleShapeFactory
break}case"rectangle":{l=rectangleShapeFactory
break}case"zigZag":{l=zigZagShapeFactory
break}default:throw new Error("Unrecognized shape passed to `createShape`")}var g=(0,_color.mixWithBlack)(c,i)
var s=l(babelHelpers.extends({fill:c},o))
var p=l(babelHelpers.extends({fill:g},o))
return{front:createImageElement(s),back:createImageElement(p)}}}
exports.createShape=createShape
var createCircle=exports.createCircle=createShape("circle")
var createTriangle=exports.createTriangle=createShape("triangle")
var createRectangle=exports.createRectangle=createShape("rectangle")
var createZigZag=exports.createZigZag=createShape("zigZag")

});
KAdefine("javascript/components/confetti-package/types.js", function(require, module, exports) {

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/confetti-package.js.map 