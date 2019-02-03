KAdefine("javascript/components/tabbed-panel-package/tabbed-panel.jsx", function(require, module, exports) {
var React=require("react")
var ReactDOM=require("react-dom")
var _require=require("aphrodite"),css=_require.css,StyleSheet=_require.StyleSheet
var NativeKeyDown=function(e){babelHelpers.inherits(t,e)
function t(){babelHelpers.classCallCheck(this,t)
return babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}t.prototype.componentDidMount=function e(){var t=this.props.onKeyDownHandler
var n=ReactDOM.findDOMNode(this)
if(n){n.addEventListener("keydown",t,false)}}
t.prototype.componentWillUnmount=function e(){var t=this.props.onKeyDownHandler
var n=ReactDOM.findDOMNode(this)
if(n){n.removeEventListener("keydown",t)}}
t.prototype.render=function e(){return this.props.children}
return t}(React.PureComponent)
function getTabForKeyOrDefaultTab(e,t){if(!e.length){throw new Error("TabbedPanel expects at least one tab.")}var n=e.findIndex(function(e){return e.key===t})
return n>=0?e[n]:e[0]}function nextStateFromProps(e){var t=getTabForKeyOrDefaultTab(e.tabs,e.selectedTabKey)
return{selectedTabKey:t.key,suppressTimeoutsCreatedBefore:(new Date).getTime()}}function isControlledComponent(e){return!!e.onTabChanged}var TabbedPanel=function(e){babelHelpers.inherits(t,e)
t.getDerivedStateFromProps=function e(t){if(isControlledComponent(t)){return nextStateFromProps(t)}return null}
function t(n){babelHelpers.classCallCheck(this,t)
var r=babelHelpers.possibleConstructorReturn(this,e.call(this,n))
r.timeout=null
r.state=nextStateFromProps(n)
return r}t.prototype.componentWillUnmount=function e(){this.clearOutstandingTimeout()}
t.prototype.clearOutstandingTimeout=function e(){if(this.timeout){clearTimeout(this.timeout.timeoutId)
this.timeout=null}}
t.prototype.scheduleTimeout=function e(t,n){var r=this
this.clearOutstandingTimeout()
this.timeout={creationTime:(new Date).getTime(),timeoutId:setTimeout(function(){if(r.timeout&&r.timeout.creationTime>r.state.suppressTimeoutsCreatedBefore){t()}r.timeout=null},n)}}
t.prototype.selectTabNow=function e(t){this.clearOutstandingTimeout()
var n=this.props.tabs[t].key
if(n!==this.state.selectedTabKey){if(isControlledComponent(this.props)){if(!this.props.onTabChanged){throw new Error("TabbedPanel is controlled but"+" this.props.onTabChanged is not present."+" Something is wrong.")}this.props.onTabChanged(n)}else{this.setState({selectedTabKey:n})}}}
t.prototype.onTabFocus=function e(t,n){var r=this
this.clearOutstandingTimeout()
var o=this.props,a=o.automaticTabChange,i=o.autoTabChangeDelay
if(a===false){return}if(i){this.scheduleTimeout(function(){return r.selectTabNow(n)},i)}else{this.selectTabNow(n)}}
t.prototype.onTabClick=function e(t,n){this.selectTabNow(n)}
t.prototype.getTabIdentifiers=function e(t){var n=this.props.id
return{tabId:"ka-"+n+"-tabbedpanel-tab-"+t,tabContentId:"ka-"+n+"-tabbedpanel-content"}}
t.prototype.focusTab=function e(t){var n=this.getTabIdentifiers(t),r=n.tabId
var o=document.getElementById(r)
if(!o){throw new Error("Tab not found: "+r)}o.focus()}
t.prototype.getPreviousIndexInTabList=function e(t,n){if(t>0){return t-1}else{return n-1}}
t.prototype.getNextIndexInTabList=function e(t,n){if(t<n-1){return t+1}else{return 0}}
t.prototype.tryKeyAsNavigation=function e(t,n){var r=this.props,o=r.tabs,a=r.orientation
var i=null
switch(t.key){case"ArrowUp":if(a==="vertical"){break}case"ArrowLeft":i=this.getPreviousIndexInTabList(n,o.length)
break
case"ArrowDown":if(a==="vertical"){break}case"ArrowRight":i=this.getNextIndexInTabList(n,o.length)
break
case"Home":i=0
break
case"End":i=o.length-1
break}if(i!==null){t.preventDefault()
t.stopPropagation()
this.focusTab(i)}}
t.prototype.onTabKeyDown=function e(t,n){if(t.key===" "){t.stopPropagation()
t.preventDefault()
this.selectTabNow(n)}else{this.tryKeyAsNavigation(t,n)}}
t.prototype.renderTab=function e(t,n){var r=this
var o=this.getTabIdentifiers(n),a=o.tabId,i=o.tabContentId
var s=t.key===this.state.selectedTabKey
return React.createElement(NativeKeyDown,{key:t.key,onKeyDownHandler:function e(t){return r.onTabKeyDown(t,n)}},t.renderTab(s,{id:a,onClick:function e(t){return r.onTabClick(t,n)},onFocus:function e(t){return r.onTabFocus(t,n)},role:"tab","aria-controls":i,"aria-selected":s,tabIndex:s?undefined:-1,href:"javascript:void 0"}))}
t.prototype.renderTabs=function e(){var t=this
var n=this.props.tabs
for(var r=arguments.length,o=Array(r),a=0;a<r;a++){o[a]=arguments[a]}return React.createElement("div",{key:"tablist",role:"tablist",className:css.apply(undefined,[styles.tablist].concat(o))},n.map(function(e,n){return t.renderTab(e,n)}))}
t.prototype.renderTabContentPanel=function e(){var t=this
var n=this.props.tabs
var r=n.findIndex(function(e){return e.key===t.state.selectedTabKey})
if(r===-1){console.error("Could not find tab")
r=0}var o=this.getTabIdentifiers(r),a=o.tabId,i=o.tabContentId
for(var s=arguments.length,l=Array(s),u=0;u<s;u++){l[u]=arguments[u]}return React.createElement("div",{id:i,key:i,className:css.apply(undefined,[styles.tabContent].concat(l)),role:"tabpanel","aria-labelledby":a},n[r].renderContent())}
t.prototype.render=function e(){var t=this
var n=this.props,r=n.children,o=n.orientation
return React.createElement("div",{style:{height:"100%"},className:css(o==="horizontal"&&styles.horizontal)},r(function(e){return t.renderTabs(e)},function(e){return t.renderTabContentPanel(e)}))}
return t}(React.Component)
TabbedPanel.defaultProps={orientation:"vertical"}
var styles=StyleSheet.create({tablist:{flex:"0 0 auto",display:"flex"},tabContent:{flex:"1 1 auto",overflow:"auto"},collapsedTabContent:{display:"none"},horizontal:{display:"flex",flex:"1 1 0",overflow:"hidden"}})
module.exports=TabbedPanel

});

//# sourceMappingURL=/genfiles/compressed_js_packages_prod/en/tabbed-panel-package.js.map 