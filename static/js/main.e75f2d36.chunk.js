(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(32)},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),i=n(15),r=n(2),c=n(4),o=n(5),s=n(8),u=n(6),p=n(9),d="INIT_CELLS",h="TOGGLE_CELL",g="NEXT_TICK",f="UPDATE_SETING",m={initCells:function(t,e){return{type:d,payload:{width:t,height:e}}},toggleCell:function(t,e){return{type:h,payload:{x:t,y:e}}},nextTick:function(){return{type:g}},updateSetting:function(t,e){return{type:f,payload:{key:t,value:e}}}},v=(n(29),{handleCellClick:m.toggleCell}),C=Object(r.b)(function(t){return{cells:t.cells}},v)(function(t){var e=t.cells,n=t.handleCellClick;return l.a.createElement("div",{className:"grid"},e.map(function(t,e){return l.a.createElement("div",{key:e,className:"row"},t.map(function(t,a){return l.a.createElement("div",{key:a,className:"cell ".concat(t?"active":""),onClick:function(){return n(a,e)}})}))}))}),E=(n(30),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={intervalId:null},n.handlePlayClick=function(){n.state.intervalId?n.stop():n.play()},n.stop=function(){var t=n.state.intervalId;clearInterval(t),n.setState({intervalId:null})},n.play=function(){var t=n.props,e=t.nextTick,a=t.settings;n.setState({intervalId:setInterval(e,a.interval)})},n.handleWidthChange=function(t){n.updateDimension("width",t.target.value)},n.handleHeightChange=function(t){n.updateDimension("height",t.target.value)},n.updateDimension=function(t,e){n.stop();var a=parseInt(e,10);a<1||n.props.updateSetting(t,a)},n.handleRandomizeClick=function(){for(var t=n.props,e=t.settings,a=t.toggleCell,l=0;l<e.width;l++)for(var i=0;i<e.height;i++)Math.random()>.5&&a(l,i)},n.render=function(){return l.a.createElement("div",{className:"controls"},l.a.createElement("div",{className:"controls-panel"},l.a.createElement("button",{className:"controls-button",onClick:n.handleRandomizeClick},"Randomize"),l.a.createElement("button",{className:"controls-button",onClick:n.props.nextTick},"Next"),l.a.createElement("button",{className:"controls-button",onClick:n.handlePlayClick},n.state.intervalId?"Stop":"Play")),l.a.createElement("div",{className:"controls-panel"},"Width",l.a.createElement("input",{className:"controls-field",type:"number",onChange:n.handleWidthChange,value:n.props.settings.width}),"Height",l.a.createElement("input",{className:"controls-field",type:"number",onChange:n.handleHeightChange,value:n.props.settings.height})))},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this.props.settings,n=e.width,a=e.height,l=t.settings;n===l.width&&a===l.height||this.props.initCells(a,n)}}]),e}(l.a.Component)),y={nextTick:m.nextTick,updateSetting:m.updateSetting,initCells:m.initCells,toggleCell:m.toggleCell},b=Object(r.b)(function(t){return{settings:t.settings}},y)(E),w=(n(31),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).render=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(b,null),l.a.createElement(C,null))},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.initCells,n=t.settings;e(n.width,n.height)}}]),e}(l.a.Component)),O={initCells:m.initCells},k=Object(r.b)(function(t){return{settings:t.settings}},O)(w),N=n(3),S=n(7),T=n(19),j={SETTINGS:{width:30,height:30,interval:50},CELLS:[]},I=function(t,e){return(t%e+e)%e},_=Object(N.b)({cells:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.CELLS,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case d:return function(t){return new Array(t.width).fill(new Array(t.height).fill(0))}(a);case h:return function(t,e){return t.map(function(t,n){return t.map(function(t,a){return a===e.x&&n===e.y?t?0:1:t})})}(t,a);case g:return function(t){return t.map(function(e,n){return e.map(function(a,l){var i=t[I(n-1,e.length)],r=t[I(n+1,e.length)],c=I(l+1,e.length),o=I(l-1,e.length),s=i[o]+i[l]+i[c]+e[o]+e[c]+r[o]+r[l]+r[c];return s<2||s>3?0:3===s?1:a})})}(t);default:return t}},settings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.SETTINGS,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===f?Object(T.a)({},t,Object(S.a)({},a.key,a.value)):t}}),L=Object(N.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.render)(l.a.createElement(r.a,{store:L},l.a.createElement(k,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e75f2d36.chunk.js.map