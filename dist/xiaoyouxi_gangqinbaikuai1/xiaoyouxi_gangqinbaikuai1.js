!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=218)}({0:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(45))},1:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},10:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},11:function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},12:function(t,n,r){var e=r(3),o=r(18),i=r(10);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},17:function(t,n,r){var e=r(32),o=r(22);t.exports=function(t){return e(o(t))}},18:function(t,n,r){var e=r(3),o=r(23),i=r(26),c=r(11),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},218:function(t,n,r){"use strict";r.r(n);var e=r(36),o=r.n(e);window.onload=function(){var t=function(t){var n=this;n.canvas=t,n.context=t.getContext("2d"),n.blockArr=[],n.toBeErase=10,n.erase=0;for(var r=0;r<6;r++)n.blockArr[r]=4*Math.random()|0;n.drawGrid(),n.drawBlock(),n.startGame(),t.addEventListener("click",(function(t){switch(n.checkBlock(t.offsetX,t.offsetY)){case 0:alert("game over");break;case 1:break;case 2:n.eraseLastRow()}}))};t.prototype.drawGrid=function(){var t=this.context,n=this.canvas.width/4;t.fillStyle="#000000";for(var r=0;r<5;r++){var e=(r+1)*n;t.beginPath(),t.moveTo(0,e),t.lineTo(this.canvas.width,e),t.stroke(),t.closePath()}for(r=0;r<3;r++){var o=(r+1)*n;t.beginPath(),t.moveTo(o,0),t.lineTo(o,this.canvas.height),t.stroke(),t.closePath()}},t.prototype.drawBlock=function(){var t=this.context;t.fillStyle="#000000";for(var n=this.canvas.width/4,r=0;r<6;r++)if(-1!==this.blockArr[r]){var e=n*r,o=this.blockArr[r]*n;t.fillRect(o,e,n,n)}},t.prototype.checkBlock=function(t,n){var r=this.canvas.width/4,e=t/r|0,o=n/r|0;return this.blockArr[o]!==e?0:o===this.blockArr.length-1?2:1},t.prototype.eraseLastRow=function(){var t=this;t.blockArr.pop(),t.erase<t.toBeErase-6?t.blockArr.unshift(4*Math.random()|0):t.blockArr.unshift(-1),t.context.clearRect(0,0,t.canvas.width,t.canvas.height),t.drawGrid(),t.drawBlock(),++t.erase==t.toBeErase&&(alert("Ending"),clearInterval(t.interval))},t.prototype.startGame=function(){var t=this;t.startTime=new Date,t.interval=o()((function(){var n=new Date-t.startTime;document.querySelector("#divTimer").innerHTML=n/1e3}),100)},t.prototype.clickButton=function(){document.querySelector("button").onclick.startGame()},window.WhiteBlock=t,new WhiteBlock(document.querySelector("canvas"))}},22:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},23:function(t,n,r){var e=r(3),o=r(1),i=r(40);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},24:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},26:function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},3:function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},32:function(t,n,r){var e=r(1),o=r(24),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},33:function(t,n,r){var e=r(41);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},34:function(t,n,r){var e=r(35);t.exports=e("navigator","userAgent")||""},35:function(t,n,r){var e=r(6),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},36:function(t,n,r){t.exports=r(61)},38:function(t,n,r){var e=r(3),o=r(39),i=r(10),c=r(17),u=r(11),a=r(5),f=r(23),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},39:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},4:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},40:function(t,n,r){var e=r(0),o=r(4),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},41:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},45:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},46:function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},5:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},58:function(t,n,r){var e=r(7),o=r(0),i=r(34),c=[].slice,u=function(t){return function(n,r){var e=arguments.length>2,o=e?c.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,r)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},6:function(t,n){t.exports={}},61:function(t,n,r){r(58);var e=r(6);t.exports=e.setInterval},7:function(t,n,r){"use strict";var e=r(0),o=r(38).f,i=r(46),c=r(6),u=r(33),a=r(12),f=r(5),s=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,l,p,v,h,y,d,b,w=t.target,g=t.global,m=t.stat,x=t.proto,k=g?e:m?e[w]:(e[w]||{}).prototype,j=g?c:c[w]||(c[w]={}),T=j.prototype;for(p in n)r=!i(g?p:w+(m?".":"#")+p,t.forced)&&k&&f(k,p),h=j[p],r&&(y=t.noTargetGet?(b=o(k,p))&&b.value:k[p]),v=r&&y?y:n[p],r&&typeof h==typeof v||(d=t.bind&&r?u(v,e):t.wrap&&r?s(v):x&&"function"==typeof v?u(Function.call,v):v,(t.sham||v&&v.sham||h&&h.sham)&&a(d,"sham",!0),j[p]=d,x&&(f(c,l=w+"Prototype")||a(c,l,{}),c[l][p]=v,t.real&&T&&!T[p]&&a(T,p,v)))}}});