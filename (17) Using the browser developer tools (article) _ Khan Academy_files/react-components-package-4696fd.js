KAdefine("javascript/react-components-package/backbone-mixin.jsx", function(require, module, exports) {
var BackboneMixin={_backboneMixinIsMounted:false,componentDidMount:function e(){this._backboneMixinIsMounted=true
this._backboneModels=this.getBackboneModels()
this._validateModelArray(this._backboneModels)
this._bind(this._backboneModels)},componentWillUnmount:function e(){this._backboneMixinIsMounted=false
this._unbind(this._backboneModels)},componentDidUpdate:function e(n,i){var o=this._backboneModels
var t=this._backboneModels=this.getBackboneModels()
var a=[]
var r=[]
for(var s=o,b=Array.isArray(s),d=0,s=b?s:s[Symbol.iterator]();;){var c
if(b){if(d>=s.length)break
c=s[d++]}else{d=s.next()
if(d.done)break
c=d.value}var h=c
if(t.indexOf(h)<0){a.push(h)}}for(var f=t,u=Array.isArray(f),l=0,f=u?f:f[Symbol.iterator]();;){var k
if(u){if(l>=f.length)break
k=f[l++]}else{l=f.next()
if(l.done)break
k=l.value}var M=k
if(o.indexOf(M)<0){r.push(M)}}this._unbind(a)
this._bind(r)},_bind:function e(n){n.map(function(e){e.on("add change remove reset",this._backboneForceUpdate,this)}.bind(this))},_unbind:function e(n){n.map(function(e){e.off("add change remove reset",this._backboneForceUpdate,this)}.bind(this))},_backboneForceUpdate:function e(){if(this._backboneMixinIsMounted){this.forceUpdate()}},_validateModelArray:function e(n){if(!Array.isArray(n)){throw new Error("getBackboneModels must return an array. "+"get this "+n+" out of here.")}}}
module.exports=BackboneMixin

});
KAdefine("javascript/react-components-package/blur-input.jsx", function(require, module, exports) {
var React=require("react")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var BlurInput=createReactClass({displayName:"BlurInput",propTypes:{className:PropTypes.string,style:PropTypes.any,value:PropTypes.string.isRequired,onChange:PropTypes.func.isRequired},getInitialState:function e(){return{value:this.props.value}},UNSAFE_componentWillReceiveProps:function e(t){this.setState({value:t.value})},handleChange:function e(t){this.setState({value:t.target.value})},handleBlur:function e(t){this.props.onChange(t.target.value)},render:function e(){return React.createElement("input",{className:this.props.className,style:this.props.style,type:"text",value:this.state.value,onChange:this.handleChange,onBlur:this.handleBlur})}})
module.exports=BlurInput

});
KAdefine("javascript/react-components-package/button-group.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var styles=require("./styles.js")
var css=require("aphrodite").css
var ButtonGroup=createReactClass({displayName:"ButtonGroup",propTypes:{value:PropTypes.any,buttons:PropTypes.arrayOf(PropTypes.shape({value:PropTypes.any.isRequired,content:PropTypes.node,title:PropTypes.string})).isRequired,onChange:PropTypes.func.isRequired,allowEmpty:PropTypes.bool},getDefaultProps:function e(){return{value:null,allowEmpty:true}},focus:function e(){ReactDOM.findDOMNode(this).focus()
return true},toggleSelect:function e(t){var r=this.props.value
if(this.props.allowEmpty){this.props.onChange(r!==t?t:null)}else{this.props.onChange(t)}},render:function e(){var t=this
var r=this.props.value
var s=this.props.buttons.map(function(e,s){return React.createElement("button",{title:e.title,type:"button",id:""+s,ref:"button"+s,key:""+s,className:css(styles.button.buttonStyle,e.value===r&&styles.button.selectedStyle),onClick:t.toggleSelect.bind(t,e.value)},e.content||""+e.value)})
var o={display:"inline-block"}
return React.createElement("div",{style:o},s)}})
module.exports=ButtonGroup

});
KAdefine("javascript/react-components-package/drag-target.jsx", function(require, module, exports) {
var React=require("react")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var DragTarget=createReactClass({displayName:"DragTarget",propTypes:{onDrop:PropTypes.func.isRequired,component:PropTypes.any,shouldDragHighlight:PropTypes.func,style:PropTypes.any},getDefaultProps:function e(){return{component:"div",shouldDragHighlight:function e(){return true}}},getInitialState:function e(){return{dragHover:false}},handleDrop:function e(r){r.stopPropagation()
r.preventDefault()
this.setState({dragHover:false})
this.props.onDrop(r)},handleDragEnd:function e(){this.setState({dragHover:false})},handleDragOver:function e(r){r.preventDefault()},handleDragLeave:function e(){this.setState({dragHover:false})},handleDragEnter:function e(r){this.setState({dragHover:this.props.shouldDragHighlight(r)})},render:function e(){var r=this.state.dragHover?{opacity:.3}:{}
var t=this.props.component
var a=Object.assign({},this.props)
delete a.component
delete a.shouldDragHighlight
return React.createElement(t,babelHelpers.extends({},a,{style:Object.assign({},this.props.style,r),onDrop:this.handleDrop,onDragEnd:this.handleDragEnd,onDragOver:this.handleDragOver,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave}))}})
module.exports=DragTarget

});
KAdefine("javascript/react-components-package/info-tip.jsx", function(require, module, exports) {
var _staticUrl=require("../shared-package/static-url.js")
var _staticUrl2=babelHelpers.interopRequireDefault(_staticUrl)
var _require=require("aphrodite"),StyleSheet=_require.StyleSheet,css=_require.css
var React=require("react")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var colors={grayLight:"#aaa",basicBorderColor:"#ccc",white:"#fff"}
var triangleBeforeAfter={borderBottom:"9px solid transparent",borderTop:"9px solid transparent",content:'" "',height:"0",position:"absolute",top:"0",width:"0"}
var styles=StyleSheet.create({infoTip:{display:"inline-block",marginLeft:"5px",position:"relative"},infoTipContainer:{position:"absolute",top:"-12px",left:"22px",zIndex:"1000"},infoTipTriangle:{height:"10px",left:"0",position:"absolute",top:"8px",width:"0",zIndex:"1",":before":Object.assign({},triangleBeforeAfter,{borderRight:"9px solid #bbb",right:"0"}),":after":Object.assign({},triangleBeforeAfter,{borderRight:"9px solid "+colors.white,right:"-1px"})},verticalShadow:{border:"1px solid "+colors.basicBorderColor,boxShadow:"0 1px 3px "+colors.basicBorderColor,borderBottom:"1px solid "+colors.grayLight},infoTipContentContainer:{background:colors.white,padding:"5px 10px",width:"240px"}})
var questionMark="data:image/png;base64,"+"iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBB"+"ZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/"+"eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+"+"IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2Jl"+"IFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAg"+"ICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5"+"LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9"+"IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHht"+"bG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy"+"Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHht"+"cE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N2M3NTAxYS04YmVlLTQ0M2Mt"+"YmRiNS04OGM2N2IxN2NhYzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCRTk4"+"Qjc4NjAwMTFFMzg3QUJDNEI4Mzk2QTRGQkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5p"+"aWQ6OUJCRTk4QjY4NjAwMTFFMzg3QUJDNEI4Mzk2QTRGQkQiIHhtcDpDcmVhdG9yVG9v"+"bD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRG"+"cm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGE5ZDI0OTMtODk1NC00OGFkLTlh"+"MTgtZDAwM2MwYWNjNDJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3Yzc1MDFh"+"LThiZWUtNDQzYy1iZGI1LTg4YzY3YjE3Y2FjMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4g"+"PC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqm89uYAAADM"+"SURBVHjaXJA9DoJAEIUH1M4TUHIFsCMGen9OwCGw1YRGW2ntKel0exsojHIBC0ouQAyU"+"viFDstmXfNmZeS+zm7XSNCXRFiRgJf0bXIHixpbhGdxBBJYC1w/xaA424MhNEATkui71"+"fU9KqfEU78UbD9PdbJRlOdae55GmhIP+1NV1TcMwkOM41DSNHvRtMhTHMRVFQW3b6mOL"+"gx99kue5GRp/gIOZuZGvNpTNwjD8oliANU+qqqKu6/TQBdymN57AHjzBT+B6Jx79BRgA"+"vc49kQA4yxgAAAAASUVORK5CYII="
var InfoTip=createReactClass({displayName:"InfoTip",propTypes:{children:PropTypes.node},getInitialState:function e(){return{hover:false}},handleMouseEnter:function e(){this.setState({hover:true})},handleMouseLeave:function e(){this.setState({hover:false})},render:function e(){return React.createElement("div",{className:css(styles.infoTip)},React.createElement("img",{alt:"",width:10,height:10,src:(0,_staticUrl2.default)(questionMark),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),React.createElement("div",{className:css(styles.infoTipContainer),style:{display:this.state.hover?"block":"none"}},React.createElement("div",{className:css(styles.infoTipTriangle)}),React.createElement("div",{className:css(styles.verticalShadow,styles.infoTipContentContainer)},this.props.children)))}})
module.exports=InfoTip

});
KAdefine("javascript/react-components-package/katex-a11y.js", function(require, module, exports) {
var stringMap={"(":"left parenthesis",")":"right parenthesis","[":"open bracket","]":"close bracket","\\{":"left brace","\\}":"right brace","\\lvert":"open vertical bar","\\rvert":"close vertical bar","|":"vertical bar","\\uparrow":"up arrow","\\Uparrow":"up arrow","\\downarrow":"down arrow","\\Downarrow":"down arrow","\\updownarrow":"up down arrow","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow","\\langle":"open angle","\\rangle":"close angle","\\lfloor":"open floor","\\rfloor":"close floor","\\int":"integral","\\intop":"integral","\\lim":"limit","\\ln":"natural log","\\log":"log","\\sin":"sine","\\cos":"cosine","\\tan":"tangent","\\cot":"cotangent","\\sum":"sum","/":"slash",",":"comma",".":"point","-":"negative","+":"plus","~":"tilde",":":"colon","?":"question mark","'":"apostrophe","\\%":"percent"," ":"space","\\ ":"space","\\$":"dollar sign","\\angle":"angle","\\degree":"degree","\\circ":"circle","\\vec":"vector","\\triangle":"triangle","\\pi":"pi","\\prime":"prime","\\infty":"infinity","\\alpha":"alpha","\\beta":"beta","\\gamma":"gamma","\\omega":"omega","\\theta":"theta","\\sigma":"sigma","\\lambda":"lambda","\\tau":"tau","\\Delta":"delta","\\delta":"delta","\\mu":"mu","\\rho":"rho","\\nabla":"del","\\ell":"ell","\\ldots":"dots"}
var powerMap={"\\prime":"prime","\\degree":"degree","\\circ":"degree"}
var openMap={"|":"open vertical bar",".":""}
var closeMap={"|":"close vertical bar",".":""}
var binMap={"+":"plus","-":"minus","\\pm":"plus minus","\\cdot":"dot","*":"times","/":"divided by","\\times":"times","\\div":"divided by","\\circ":"circle","\\bullet":"bullet"}
var relMap={"=":"equals","\\approx":"approximately equals","\\neq":"does not equal","\\ne":"does not equal","\\geq":"is greater than or equal to","\\ge":"is greater than or equal to","\\leq":"is less than or equal to","\\le":"is less than or equal to",">":"is greater than","<":"is less than","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow",":":"colon"}
var buildString=function e(r,n,i){if(!r){return}var t
if(n==="open"){t=r in openMap?openMap[r]:stringMap[r]||r}else if(n==="close"){t=r in closeMap?closeMap[r]:stringMap[r]||r}else if(n==="bin"){t=binMap[r]||r}else if(n==="rel"){t=relMap[r]||r}else{t=stringMap[r]||r}if(t===r&&!/^\w+$/.test(r)){throw new Error("KaTeX a11y "+n+" string not found: "+r)}if(/^\d+$/.test(t)&&i.length>0&&/^\d+$/.test(i[i.length-1])){i[i.length-1]+=t}else if(t){i.push(t)}}
var buildRegion=function e(r,n){var i=[]
r.push(i)
n(i)}
var typeHandlers={accent:function e(r,n){buildRegion(n,function(e){buildA11yStrings(r.value.base,e)
e.push("with")
buildA11yStrings(r.value.label,e)
e.push("on top")})},bin:function e(r,n){buildString(r.value,"bin",n)},close:function e(r,n){buildString(r.value,"close",n)},color:function e(r,n){var e=r.value.color.replace(/katex-/,"")
buildRegion(n,function(n){n.push("start color "+e)
buildA11yStrings(r.value.value,n)
n.push("end color "+e)})},delimsizing:function e(r,n){if(r.value.value&&r.value.value!=="."){buildString(r.value.value,"normal",n)}},genfrac:function e(r,n){buildRegion(n,function(e){if(r.value.hasBarLine){e.push("start fraction")
buildString(r.value.leftDelim,"open",e)
buildA11yStrings(r.value.numer,e)
e.push("divided by")
buildA11yStrings(r.value.denom,e)
buildString(r.value.rightDelim,"close",e)
e.push("end fraction")}else{e.push("start binomial")
buildString(r.value.leftDelim,"open",e)
buildA11yStrings(r.value.numer,e)
e.push("over")
buildA11yStrings(r.value.denom,e)
buildString(r.value.rightDelim,"close",e)
e.push("end binomial")}})},inner:function e(r,n){buildA11yStrings(r.value,n)},katex:function e(r,n){n.push("KaTeX")},kern:function e(r,n){},leftright:function e(r,n){buildRegion(n,function(e){buildString(r.value.left,"open",e)
buildA11yStrings(r.value.body,e)
buildString(r.value.right,"close",e)})},lap:function e(r,n){buildA11yStrings(r.value.body,n)},mathord:function e(r,n){buildA11yStrings(r.value,n)},op:function e(r,n){buildString(r.value.body,"normal",n)},open:function e(r,n){buildString(r.value,"open",n)},ordgroup:function e(r,n){buildA11yStrings(r.value,n)},overline:function e(r,n){buildRegion(n,function(e){e.push("start overline")
buildA11yStrings(r.value.body,e)
e.push("end overline")})},phantom:function e(r,n){n.push("empty space")},punct:function e(r,n){buildString(r.value,"punct",n)},raisebox:function e(r,n){buildA11yStrings(r.value,n)},rel:function e(r,n){buildString(r.value,"rel",n)},rlap:function e(r,n){buildA11yStrings(r.value.body,n)},rule:function e(r,n){n.push("rule")},sizing:function e(r,n){buildA11yStrings(r.value.value,n)},spacing:function e(r,n){n.push("space")},styling:function e(r,n){buildA11yStrings(r.value.value,n)},sqrt:function e(r,n){buildRegion(n,function(e){if(r.value.index){e.push("root")
e.push("start index")
buildA11yStrings(r.value.index,e)
e.push("end index")}e.push("square root of")
buildA11yStrings(r.value.body,e)
e.push("end square root")})},supsub:function e(r,n){if(r.value.base){buildA11yStrings(r.value.base,n)}if(r.value.sub){buildRegion(n,function(e){e.push("start subscript")
buildA11yStrings(r.value.sub,e)
e.push("end subscript")})}var i=r.value.sup
if(i){var t=powerMap[i]
var a=i.value
if(!t&&a){if((typeof a==="undefined"?"undefined":babelHelpers.typeof(a))==="object"&&a.length===1){t=powerMap[a[0].value]}else{t=powerMap[a]}}buildRegion(n,function(e){if(t){e.push(t)
return}e.push("start superscript")
buildA11yStrings(r.value.sup,e)
e.push("end superscript")})}},text:function e(r,n){if(typeof r.value!=="string"){buildA11yStrings(r.value.body,n)}else{buildString(r,"normal",n)}},textord:function e(r,n){buildA11yStrings(r.value,n)}}
var buildA11yStrings=function e(r,n){n=n||[]
if(typeof r==="string"){buildString(r,"normal",n)}else if(r.constructor===Array){for(var i=0;i<r.length;i++){e(r[i],n)}}else{if(!r.type||!(r.type in typeHandlers)){throw new Error("KaTeX a11y un-recognized type: "+r.type)}else{typeHandlers[r.type](r,n)}}return n}
var renderStrings=function e(r,n){var i=n.ownerDocument
for(var t=0;t<r.length;t++){var a=r[t]
if(t>0){n.appendChild(i.createTextNode(", "))}if(typeof a==="string"){n.appendChild(i.createTextNode(a))}else{var l=i.createElement("span")
n.appendChild(l)
e(a,l)}}}
var flattenStrings=function e(r,n){if(!n){n=[]}for(var i=0;i<r.length;i++){var t=r[i]
if(typeof t==="string"){n.push(t)}else{e(t,n)}}return n}
var parseMath=function e(r){return katex.__parse(r,{colorIsTextColor:true})}
var render=function e(r,n){var i=parseMath(r)
var t=buildA11yStrings(i)
renderStrings(t,n)}
var flatten=function e(r){var n=[]
r.forEach(function(r){if(Array.isArray(r)){n=n.concat(e(r))}else{n.push(r)}})
return n}
var renderString=function e(r){var n=parseMath(r)
var i=buildA11yStrings(n)
return flatten(i).join(", ")}
if(typeof module!=="undefined"){module.exports={render:render,renderString:renderString,parseMath:parseMath}}else{this.katexA11yRender=render}
});
KAdefine("javascript/react-components-package/layered-component-mixin.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var LayeredComponentMixin={componentDidMount:function e(){this._layer=document.createElement("div")
document.body.appendChild(this._layer)
this._renderLayer()},componentDidUpdate:function e(){this._renderLayer()},componentWillUnmount:function e(){this._unrenderLayer()
document.body.removeChild(this._layer)},_renderLayer:function e(){var n=this.renderLayer()
if(n===null){ReactDOM.render(React.createElement("noscript",null),this._layer)}else{ReactDOM.render(n,this._layer)}if(this.layerDidMount){this.layerDidMount(this._layer)}},_unrenderLayer:function e(){if(this.layerWillUnmount){this.layerWillUnmount(this._layer)}ReactDOM.unmountComponentAtNode(this._layer)}}
module.exports=LayeredComponentMixin

});
KAdefine("javascript/react-components-package/multi-button-group.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var styles=require("./styles.js")
var css=require("aphrodite").css
var MultiButtonGroup=createReactClass({displayName:"MultiButtonGroup",propTypes:{values:PropTypes.arrayOf(PropTypes.any),buttons:PropTypes.arrayOf(PropTypes.shape({value:PropTypes.any.isRequired,content:PropTypes.node,title:PropTypes.string})).isRequired,onChange:PropTypes.func.isRequired,allowEmpty:PropTypes.bool},getDefaultProps:function e(){return{values:[],allowEmpty:true}},focus:function e(){ReactDOM.findDOMNode(this).focus()
return true},toggleSelect:function e(t){var r=(this.props.values||[]).slice(0)
var s=this.props.allowEmpty
if(r.indexOf(t)>=0&&(r.length>1||s)){r.splice(r.indexOf(t),1)}else{if(r.indexOf(t)<0){r.push(t)}}this.props.onChange(r)},render:function e(){var t=this
var r=this.props.values||[]
var s=this.props.buttons.map(function(e,s){var a=r.indexOf(e.value)>=0
return React.createElement("button",{title:e.title,type:"button",id:""+s,key:""+s,ref:"button"+s,className:css(styles.button.buttonStyle,a&&styles.button.selectedStyle),onClick:t.toggleSelect.bind(t,e.value)},e.content||""+e.value)})
var a={display:"inline-block"}
return React.createElement("div",{style:a},s)}})
module.exports=MultiButtonGroup

});
KAdefine("javascript/react-components-package/set-interval-mixin.jsx", function(require, module, exports) {
var SetIntervalMixin={componentWillMount:function n(){this.intervals=[]},setInterval:function(n){function t(t,i){return n.apply(this,arguments)}t.toString=function(){return n.toString()}
return t}(function(n,t){this.intervals.push(setInterval(n,t))}),componentWillUnmount:function n(){this.intervals.forEach(clearInterval)}}
module.exports=SetIntervalMixin

});
KAdefine("javascript/react-components-package/sortable.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var PT=PropTypes
var SortableArea=createReactClass({displayName:"SortableArea",propTypes:{className:PT.string,components:PT.arrayOf(PT.node).isRequired,onReorder:PT.func.isRequired,style:PT.any,verify:PT.func},getDefaultProps:function e(){return{verify:function e(){return true}}},getInitialState:function e(){return{dragging:null,components:this.props.components}},componentDidMount:function e(){this._setDragEvents()},UNSAFE_componentWillReceiveProps:function e(t){this.setState({components:t.components})},componentDidUpdate:function e(){this._setDragEvents()},onDragStart:function e(t){this.setState({dragging:t})},onDrop:function e(){this.setState({dragging:null})
this.props.onReorder(this.state.components)},onDragEnter:function e(t){if(this.state.dragging===t){return}var r=this.state.components.slice()
var a=r.splice(this.state.dragging,1)
r.splice(t,0,a[0])
var n=this.props.verify(r)
if(n){this.setState({dragging:t,components:r})}return n},_listenEvent:function e(t){t.dataTransfer.setData("hackhackhack","because browsers!")},_cancelEvent:function e(t){t.preventDefault()},_setDragEvents:function e(){this._dragItems=this._dragItems||[]
var t=ReactDOM.findDOMNode(this).querySelectorAll("[draggable=true]")
var r=[]
var a=[]
for(var n=0;n<this._dragItems.length;n++){var s=this._dragItems[n]
if(t.indexOf(s)<0){r.push(s)}}for(var i=0;i<t.length;i++){var o=t[i]
if(this._dragItems.indexOf(o)<0){a.push(o)}}for(var p=0;p<a.length;p++){var c=a[p]
c.addEventListener("dragstart",this._listenEvent)
c.addEventListener("drop",this._cancelEvent)}for(var g=0;g<r.length;g++){var d=r[g]
d.removeEventListener("dragstart",this._listenEvent)
d.removeEventListener("drop",this._cancelEvent)}},render:function e(){var t=this
var r=this.state.components.map(function(e,r){return React.createElement(SortableItem,{index:r,component:e,area:t,key:e.key,draggable:e.props.draggable,dragging:r===t.state.dragging})})
return React.createElement("ol",{className:this.props.className,style:this.props.style},r)}})
var SortableItem=createReactClass({displayName:"SortableItem",propTypes:{area:PT.shape({onDragEnter:PT.func.isRequired,onDragStart:PT.func.isRequired,onDrop:PT.func.isRequired}),component:PT.node.isRequired,dragging:PT.bool.isRequired,draggable:PT.bool.isRequired,index:PT.number.isRequired},handleDragStart:function e(t){t.nativeEvent.dataTransfer.effectAllowed="move"
this.props.area.onDragStart(this.props.index)},handleDrop:function e(){this.props.area.onDrop(this.props.index)},handleDragEnter:function e(t){var r=this.props.area.onDragEnter(this.props.index)
t.nativeEvent.dataTransfer.effectAllowed=r?"move":"none"},handleDragOver:function e(t){t.preventDefault()},render:function e(){var t="sortable-disabled"
if(this.props.dragging){t="sortable-dragging"}else if(this.props.draggable){t="sortable-enabled"}return React.createElement("li",{draggable:this.props.draggable,className:t,onDragStart:this.handleDragStart,onDrop:this.handleDrop,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver},this.props.component)}})
module.exports=SortableArea

});
KAdefine("javascript/react-components-package/state-from-store-mixin.jsx", function(require, module, exports) {
var StateFromStore=function t(e){var a="StateFromStoreMixin"+(new Date).getTime()
var r=false
var n=function t(e,a,n){if(r){var i={}
i[a]=n
e.setState(i)}}
var i=function t(r,n,i,o){o=o||r.props
var s=r[a].fetchParamsCache
var c=e[n]
var f=null
if(c.getFetchParams){f=c.getFetchParams(o)}if(i&&JSON.stringify(s[n])===JSON.stringify(f)){return{stateData:null,didFetch:false}}s[n]=f
var v=c.fetch(c.store,f)
return{stateData:v,didFetch:true}}
var o=function t(e,a){var r=i(e,a,false).stateData
n(e,a,r)}
var s=function t(e,a,r){var o=i(e,a,true,r)
if(o.didFetch){var s=o.stateData
n(e,a,s)}}
var c=function t(r){var n=r[a].changeListeners
var i=function t(a){if(e.hasOwnProperty(a)){var i=e[a]
var s=function t(){return o(r,a)}
n[a]=s
i.store.addChangeListener(s)}}
for(var s in e){i(s)}}
var f=function t(r){var n=r[a].changeListeners
for(var i in e){if(e.hasOwnProperty(i)){var o=e[i]
o.store.removeChangeListener(n[i])
delete n[i]}}}
var v=function t(a,r){Object.keys(e).forEach(function(t){s(a,t,r)})}
return{getInitialState:function t(){this[a]={fetchParamsCache:{},changeListeners:{}}
var r={}
Object.keys(e).forEach(function(t){var e=i(this,t,false).stateData
r[t]=e},this)
return r},componentDidMount:function t(){r=true
c(this)},componentWillUnmount:function t(){f(this)
r=false},componentWillReceiveProps:function t(e){v(this,e)}}}
module.exports=StateFromStore

});
KAdefine("javascript/react-components-package/styles.js", function(require, module, exports) {
var StyleSheet=require("aphrodite").StyleSheet
var button=StyleSheet.create({buttonStyle:{backgroundColor:"white",border:"1px solid #ccc",borderLeft:"0",cursor:"pointer",margin:"0",padding:"5px 10px",position:"relative",":first-child":{borderLeft:"1px solid #ccc",borderTopLeftRadius:"3px",borderBottomLeftRadius:"3px"},":last-child":{borderRight:"1px solid #ccc",borderTopRightRadius:"3px",borderBottomRightRadius:"3px"},":hover":{backgroundColor:"#ccc"},":focus":{zIndex:"2"}},selectedStyle:{backgroundColor:"#ddd"}})
module.exports={button:button}

});
KAdefine("javascript/react-components-package/tex.jsx", function(require, module, exports) {
"use strict"
var PureRenderMixin=require("react-addons-pure-render-mixin")
var React=require("react")
var ReactDOM=require("react-dom")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var katex=require("katex")
var katexA11y=require("./katex-a11y.js")
var pendingScripts=[]
var pendingCallbacks=[]
var needsProcess=false
var describedByIdCounter=0
var _process=function e(t,r){pendingScripts.push(t)
pendingCallbacks.push(r)
if(!needsProcess){needsProcess=true
setTimeout(doProcess,0)}}
var unProcess=function e(t){var r=pendingScripts.indexOf(t)
pendingScripts.splice(r,1)
pendingCallbacks.splice(r,1)}
var loadMathJax=function e(t){if(typeof MathJax!=="undefined"){t()}else{var r=require("../katex-package/load-mathjax.js")
r.then(t)}}
var doProcess=function e(){loadMathJax(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.elementScripts
MathJax.Hub.elementScripts=function(e){return pendingScripts}
try{return MathJax.Hub.Process(null,function(){for(var e=pendingCallbacks,t=Array.isArray(e),r=0,e=t?e:e[Symbol.iterator]();;){var s
if(t){if(r>=e.length)break
s=e[r++]}else{r=e.next()
if(r.done)break
s=r.value}var i=s
i()}pendingScripts=[]
pendingCallbacks=[]
needsProcess=false})}catch(e){throw e}finally{MathJax.Hub.elementScripts=e}})})}
var srOnly={border:0,clip:"rect(0,0,0,0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}
var TeX=createReactClass({displayName:"TeX",propTypes:{children:PropTypes.node,katexOptions:PropTypes.any,onClick:PropTypes.func,onRender:PropTypes.func,style:PropTypes.any},mixins:[PureRenderMixin],getDefaultProps:function e(){return{katexOptions:{colorIsTextColor:true},onRender:function e(){},onClick:null}},getInitialState:function e(){return{mounted:false,katexHtml:this.getKatexHtml(this.props)}},componentDidMount:function e(){var t=this
this._root=ReactDOM.findDOMNode(this)
this.setState({mounted:true})
if(this.refs.katex.childElementCount>0){this.props.onRender(this._root)
return}var r=this.props.children
this.setScriptText(r)
this.process(function(){return t.props.onRender(t._root)})},UNSAFE_componentWillReceiveProps:function e(t){if(t.children!==this.props.children||JSON.stringify(t.katexOptions)!==JSON.stringify(this.props.katexOptions)){this.setState({katexHtml:this.getKatexHtml(t)})}},componentDidUpdate:function e(t,r){var s=this
if(this.props.children!==t.children){this.maybeUnprocess()
if(this.refs.katex.childElementCount>0){if(this.script){loadMathJax(function(){var e=MathJax.Hub.getJaxFor(s.script)
if(e){e.Remove()}})}this.props.onRender()
return}var i=this.props.children
if(this.script){loadMathJax(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.getJaxFor(s.script)
if(e){return e.Text(i,s.props.onRender)}else{s.setScriptText(i)
s.process(s.props.onRender)}})})}else{this.setScriptText(i)
this.process(this.props.onRender)}}},componentWillUnmount:function e(){var t=this
this.maybeUnprocess()
if(this.script){loadMathJax(function(){var e=MathJax.Hub.getJaxFor(t.script)
if(e){e.Remove()}})}},getKatexHtml:function e(t){try{return{__html:katex.renderToString(t.children,t.katexOptions)}}catch(e){return null}},process:function e(t){var r=this
this.hasProcessed=false
_process(this.script,function(){r.hasProcessed=true
t&&t()})},maybeUnprocess:function e(){if(this.script&&!this.hasProcessed){unProcess(this.script)}},setScriptText:function e(t){if(!this.script){this.script=document.createElement("script")
this.script.type="math/tex"
ReactDOM.findDOMNode(this.refs.mathjax).appendChild(this.script)}if("text"in this.script){this.script.text=t}else{this.script.textContent=t}},render:function e(){var t=this.state.katexHtml
var r=null
var s=null
if(t){try{r={__html:katexA11y.renderString(this.props.children)}
if(this.state.mounted){s="katex-"+ ++describedByIdCounter}}catch(e){}}return React.createElement("span",{style:this.props.style,onClick:this.props.onClick},React.createElement("span",{ref:"mathjax"}),React.createElement("span",{ref:"katex",dangerouslySetInnerHTML:t,"aria-hidden":!!r,"aria-describedby":s}),React.createElement("span",{dangerouslySetInnerHTML:r,id:s,style:srOnly}))}})
module.exports=TeX

});
KAdefine("javascript/react-components-package/timeago.jsx", function(require, module, exports) {
var React=require("react")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var SetIntervalMixin=require("./set-interval-mixin.jsx")
var moment=require("moment")
var TimeAgo=createReactClass({displayName:"TimeAgo",propTypes:{refreshMillis:PropTypes.number,time:PropTypes.any.isRequired},mixins:[SetIntervalMixin],componentDidMount:function e(){var r=this.props.refreshMillis||6e4
this.setInterval(this.forceUpdate.bind(this),r)},render:function e(){return React.createElement("span",null,moment(this.props.time).fromNow())}})
module.exports=TimeAgo

});
KAdefine("javascript/react-components-package/tooltip.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var zIndex=10
var Triangle=createReactClass({displayName:"Triangle",propTypes:{color:PropTypes.string.isRequired,left:PropTypes.number.isRequired,top:PropTypes.number.isRequired,width:PropTypes.number.isRequired,height:PropTypes.number.isRequired,horizontalDirection:PropTypes.oneOf(["left","right"]).isRequired,verticalDirection:PropTypes.oneOf(["top","bottom"]).isRequired},render:function t(){var e=void 0
var o=void 0
var r=void 0
var i=void 0
var p=this.props.width+"px solid transparent"
if(this.props.horizontalDirection==="right"){e=p}else{o=p}var s=this.props.height+"px solid "+this.props.color
if(this.props.verticalDirection==="top"){r=s}else{i=s}return React.createElement("div",{style:{display:"block",height:0,width:0,position:"absolute",left:this.props.left,top:this.props["top"],borderLeft:e,borderRight:o,borderTop:r,borderBottom:i}})}})
var TooltipArrow=createReactClass({displayName:"TooltipArrow",propTypes:{position:PropTypes.string,visibility:PropTypes.string,left:PropTypes.number,top:PropTypes.number,color:PropTypes.string.isRequired,border:PropTypes.string.isRequired,width:PropTypes.number.isRequired,height:PropTypes.number.isRequired,horizontalDirection:PropTypes.oneOf(["left","right"]).isRequired,verticalDirection:PropTypes.oneOf(["top","bottom"]).isRequired},getDefaultProps:function t(){return{position:"relative",visibility:"visible",left:0,top:0}},render:function t(){var e=this.props.verticalDirection==="top"
var o=e?0:1
var r=e?0:-1
return React.createElement("div",{style:{display:"block",position:this.props.position,visibility:this.props.visibility,left:this.props.left,top:this.props["top"],width:this.props.width+2,height:this.props.height+1,marginTop:-1,marginBottom:-2,zIndex:zIndex}},React.createElement(Triangle,{horizontalDirection:this.props.horizontalDirection,verticalDirection:this.props.verticalDirection,color:this.props.border,left:0,top:r,width:this.props.width+2,height:this.props.height+2}),React.createElement(Triangle,{horizontalDirection:this.props.horizontalDirection,verticalDirection:this.props.verticalDirection,color:this.props.color,left:1,top:o,width:this.props.width,height:this.props.height}))}})
var VERTICAL_CORNERS={top:{top:"-100%"},bottom:{top:0}}
var HORIZONTAL_CORNERS={left:{targetLeft:0},right:{targetLeft:"100%"}}
var HORIZONTAL_ALIGNMNENTS={left:{tooltipLeft:0,arrowLeft:function t(e){return 0}},right:{tooltipLeft:"-100%",arrowLeft:function t(e){return-e-2}}}
var Tooltip=createReactClass({displayName:"Tooltip",propTypes:{show:PropTypes.bool.isRequired,className:PropTypes.string,arrowSize:PropTypes.number,borderColor:PropTypes.string,verticalPosition:PropTypes.oneOf(Object.keys(VERTICAL_CORNERS)),horizontalPosition:PropTypes.oneOf(Object.keys(HORIZONTAL_CORNERS)),horizontalAlign:PropTypes.oneOf(Object.keys(HORIZONTAL_ALIGNMNENTS)),children:PropTypes.arrayOf(PropTypes.element).isRequired,targetContainerStyle:PropTypes.any},getDefaultProps:function t(){return{className:"",arrowSize:10,borderColor:"#ccc",verticalPosition:"bottom",horizontalPosition:"left",horizontalAlign:"left",targetContainerStyle:{}}},getInitialState:function t(){return{height:null}},componentDidMount:function t(){this._updateHeight()},UNSAFE_componentWillReceiveProps:function t(){this.setState({height:null})},componentDidUpdate:function t(){this._updateHeight()},_renderToolTipDiv:function t(e){var o=Object.assign({},HORIZONTAL_CORNERS[this.props.horizontalPosition],HORIZONTAL_ALIGNMNENTS[this.props.horizontalAlign],VERTICAL_CORNERS[this.props.verticalPosition])
var r=void 0
var i=void 0
if(e){r=React.createElement(TooltipArrow,{verticalDirection:"top",horizontalDirection:this.props.horizontalAlign,position:"absolute",color:"white",border:this.props.borderColor,left:o.arrowLeft(this.props.arrowSize),top:-this.props.arrowSize+2,width:this.props.arrowSize,height:this.props.arrowSize,zIndex:zIndex})
i=React.createElement(TooltipArrow,{verticalDirection:"top",horizontalDirection:this.props.horizontalAlign,visibility:"hidden",color:"white",border:this.props.borderColor,left:o.arrowLeft(this.props.arrowSize),top:-1,width:this.props.arrowSize,height:this.props.arrowSize,zIndex:zIndex})}else{r=React.createElement(TooltipArrow,{verticalDirection:"bottom",horizontalDirection:this.props.horizontalAlign,color:"white",border:this.props.borderColor,left:o.arrowLeft(this.props.arrowSize),top:-1,width:this.props.arrowSize,height:this.props.arrowSize,zIndex:zIndex})
i=null}return React.createElement("div",{style:{position:"relative",height:0,display:this.props.show?"block":"none"}},React.createElement("div",{ref:"tooltipContainer",className:"tooltipContainer",style:{position:"absolute",height:this.state.height||undefined,left:o.targetLeft}},r,React.createElement("div",{className:this.props.className,ref:"tooltipContent",style:{position:"relative",top:o["top"],left:o.tooltipLeft,border:"1px solid "+this.props.borderColor,WebkitBoxShadow:"0 1px 3px "+this.props.borderColor,MozBoxShadow:"0 1px 3px "+this.props.borderColor,boxShadow:"0 1px 3px "+this.props.borderColor,zIndex:zIndex-1}},this.props.children.slice(1)),i))},_updateHeight:function t(){var e=ReactDOM.findDOMNode(this.refs.tooltipContainer).offsetHeight
if(e!==this.state.height){this.setState({height:e})}},render:function t(){var e=this.props.verticalPosition==="top"
return React.createElement("span",null,e&&this._renderToolTipDiv(e),React.createElement("div",{style:this.props.targetContainerStyle},this.props.children[0]),!e&&this._renderToolTipDiv())}})
module.exports=Tooltip

});
KAdefine("javascript/react-components-package/window-drag.jsx", function(require, module, exports) {
var React=require("react")
var createReactClass=require("create-react-class")
var PropTypes=require("prop-types")
var WindowDrag=createReactClass({displayName:"WindowDrag",propTypes:{children:PropTypes.node},getInitialState:function e(){return{dropTargetShown:false}},componentDidMount:function e(){this._collection=[]
window.addEventListener("dragenter",this._handleDragEnter)
window.addEventListener("dragleave",this._handleDragLeave)
window.addEventListener("drop",this._handleDragLeave)},componentWillUnmount:function e(){window.removeEventListener("dragenter",this._handleDragEnter)
window.removeEventListener("dragleave",this._handleDragLeave)
window.removeEventListener("drop",this._handleDragLeave)},handleDrop:function e(t){this.setState({dropTargetShown:false})},_handleDragEnter:function e(t){if(this._collection.length===0){this.setState({dropTargetShown:true})}if(this._collection.indexOf(t.target)<0){this._collection.push(t.target)}},_handleDragLeave:function e(t){if(this._collection.indexOf(t.target)>=0){this._collection.splice(this._collection.indexOf(t.target),1)}if(this._collection.length===0){this.setState({dropTargetShown:false})}},render:function e(){if(this.state.dropTargetShown){return React.createElement("div",{onDrop:this.handleDrop},this.props.children)}else{return React.createElement("div",null)}}})
module.exports=WindowDrag

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/react-components-package.js.map 