!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-native"),require("react-navigation")):"function"==typeof define&&define.amd?define(["react","prop-types","react-native","react-navigation"],t):"object"==typeof exports?exports["@rnt/flip"]=t(require("react"),require("prop-types"),require("react-native"),require("react-navigation")):e["@rnt/flip"]=t(e.react,e["prop-types"],e["react-native"],e["react-navigation"])}("undefined"!=typeof self?self:this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.FlipNavigation=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c="/Users/igoreschalier/projects/RNT/Flip/src/index.js",p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),l=r(2),d=n(l),g=r(3),v=r(4),y=g.StyleSheet.create({view:{position:"absolute",left:0,right:0,top:0,bottom:0}}),b=t.FlipNavigation=function(e){function t(){var e,r,n,a;o(this,t);for(var p=arguments.length,f=Array(p),l=0;l<p;l++)f[l]=arguments[l];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),n.renderScene=function(e){return function(t){var r=n.props,o=r.navigation,i=r.router,a=o.state.routes,p=e.position,f=t.index,l=p.interpolate({inputRange:[f-1,f,f+1],outputRange:["-180deg","0deg","180deg"]}),d=p.interpolate({inputRange:[f-1,f-.9,f,f+.9,f+1],outputRange:[0,0,1,0,0]}),b={opacity:d,transform:[{perspective:g.Dimensions.get("window").height},{rotateY:l}]},m=i.getComponentForRouteName(t.route.routeName);return s.default.createElement(g.Animated.View,{key:f,style:[y.view,b],__source:{fileName:c,lineNumber:60}},s.default.createElement(m,{navigation:(0,v.addNavigationHelpers)(u({},o,{state:a[f]})),__source:{fileName:c,lineNumber:61}}))}},n.renderScenes=function(e,t){return s.default.createElement(g.View,{style:{flex:1},__source:{fileName:c,lineNumber:73}},e.scenes.map(n.renderScene(e)))},a=r,i(n,a)}return a(t,e),p(t,[{key:"render",value:function(){return s.default.createElement(v.Transitioner,{configureTransition:function(){return{duration:500,easing:g.Easing.out(g.Easing.ease)}},navigation:this.props.navigation,render:this.renderScenes,__source:{fileName:c,lineNumber:80}})}}]),t}(s.default.Component);b.propTypes={navigation:d.default.shape({}).isRequired,router:d.default.shape({}).isRequired},t.default=function(e){var t=(0,v.StackRouter)(e),r=(0,v.createNavigator)(t)(b);return(0,v.createNavigationContainer)(r)}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n}])});