!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=211)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(45))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(0),o=e(38).f,i=e(46),c=e(6),u=e(33),a=e(12),f=e(5),s=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,l,p,d,v,y,h,b,m=t.target,x=t.global,g=t.stat,w=t.proto,S=x?r:g?r[m]:(r[m]||{}).prototype,j=x?c:c[m]||(c[m]={}),O=j.prototype;for(p in n)e=!i(x?p:m+(g?".":"#")+p,t.forced)&&S&&f(S,p),v=j[p],e&&(y=t.noTargetGet?(b=o(S,p))&&b.value:S[p]),d=e&&y?y:n[p],e&&typeof v==typeof d||(h=t.bind&&e?u(d,r):t.wrap&&e?s(d):w&&"function"==typeof d?u(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&a(h,"sham",!0),j[p]=h,w&&(f(c,l=m+"Prototype")||a(c,l,{}),c[l][p]=d,t.real&&O&&!O[p]&&a(O,p,d)))}},,function(t,n,e){var r=e(0),o=e(51),i=e(5),c=e(52),u=e(43),a=e(57),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(18),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},,function(t,n,e){var r=e(6);t.exports=function(t){return r[t+"Prototype"]}},,,function(t,n,e){var r=e(32),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(3),o=e(23),i=e(26),c=e(11),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},,function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),c=[];function u(t){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===t){n=e;break}return n}function a(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],f=e[a]||0,s="".concat(a," ").concat(f);e[a]=f+1;var l=u(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function f(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var s,l=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function d(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,y=0;function h(t,n){var e,r,o;if(n.singleton){var i=y++;e=v||(v=f(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=f(n),r=d.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=a(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=u(e[r]);c[o].references--}for(var i=a(t,n),f=0;f<e.length;f++){var s=u(e[f]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}e=i}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3),o=e(1),i=e(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){t.exports=e(67)},,function(t,n,e){var r=e(3),o=e(1),i=e(5),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(1),o=e(24),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(41);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(35);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(6),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){t.exports=e(61)},,function(t,n,e){var r=e(3),o=e(39),i=e(10),c=e(17),u=e(11),a=e(5),f=e(23),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(9),i=e(49),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(11),o=e(18),i=e(10);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n){t.exports=!0},function(t,n,e){var r,o,i=e(0),c=e(34),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},,function(t,n,e){var r=e(48),o=e(56);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},,,function(t,n,e){var r=e(4),o=e(27),i=e(9)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(0),o=e(60),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(43);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(7),o=e(0),i=e(34),c=[].slice,u=function(t){return function(n,e){var r=arguments.length>2,o=r?c.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},,function(t,n,e){var r=e(0),o=e(12);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){e(58);var r=e(6);t.exports=r.setInterval},,,,function(t,n,e){"use strict";var r=e(7),o=e(1),i=e(27),c=e(4),u=e(42),a=e(25),f=e(47),s=e(55),l=e(44),p=e(9),d=e(49),v=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),b=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],b(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r=e(33),o=e(32),i=e(42),c=e(25),u=e(55),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,h){for(var b,m,x=i(d),g=o(x),w=r(v,y,3),S=c(g.length),j=0,O=h||u,C=n?O(d,S):e?O(d,0):void 0;S>j;j++)if((p||j in g)&&(m=w(b=g[j],j,x),t))if(n)C[j]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:a.call(C,b)}else if(s)return!1;return l?-1:f||s?s:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(68);t.exports=r},function(t,n,e){var r=e(69),o=Array.prototype;t.exports=function(t){var n=t.concat;return t===o||t instanceof Array&&n===o.concat?r:n}},function(t,n,e){e(65);var r=e(14);t.exports=r("Array").concat},,,,,,function(t,n){t.exports=function(){}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){t.exports=e(212)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r,o,i,c,u=e(108),a=e.n(u),f=e(29),s=e.n(f),l=e(36),p=e.n(l),d=(e(216),5),v=5,y=10,h=200,b=0;function m(){o.fillStyle="#c0b4b4",o.fillRect(0,0,500,300);for(var t=0;t<i.body.length;t++)o.save(),o.translate(i.body[t][0]*y,i.body[t][1]*y),o.fillStyle=0===t?"DarkGreen":"green",o.fillRect(0,0,y,y),o.restore();o.save(),o.translate(c.x*y,c.y*y),o.fillStyle="OrangeRed",o.fillRect(0,0,y,y),o.restore(),document.getElementsByClassName("score")[0].innerHTML=b,requestAnimationFrame(m)}function x(t,n){this.moving=!0,this.body=[[t,n]],this.direction="right",this.time=null,this.move=function(){var t=this;this.time=p()((function(){for(var n,e,r=s()(n=[]).call(n,t.body[t.body.length-1]),o=t.body.length-1;o>=1;o--)t.body[o][0]=t.body[o-1][0],t.body[o][1]=t.body[o-1][1];switch(t.direction){case"right":t.body[0][0]+=1;break;case"bottom":t.body[0][1]-=1;break;case"left":t.body[0][0]-=1;break;case"top":t.body[0][1]+=1}t.body[0][0]===c.x&&t.body[0][1]===c.y&&t.eat(r),(-1!==a()(e=t.body).call(e,(function(n,e){return 0!==e&&t.body[0][0]===n[0]&&t.body[0][1]===n[1]}))||t.body[0][0]===r[0]&&t.body[0][1]===r[1])&&(alert("你撞到自己了"),t.stop()),(t.body[0][0]<0||t.body[0][0]>49||t.body[0][1]<0||t.body[0][1]>29)&&(alert("你撞墙了"),t.stop())}),h)},this.eat=function(t){this.body.push(t),b+=1,c=new g},this.stop=function(){clearInterval(this.time)}}function g(){this.x=Math.floor(50*Math.random()),this.y=Math.floor(30*Math.random())}window.onload=function(){r=document.getElementById("canvas"),o=r.getContext("2d"),i=new x(d,v),c=new g,document.onkeydown=function(t){var n=t||window.event||arguments.callee.caller.arguments[0];n&&38==n.keyCode&&"top"!==i.direction&&(i.direction="bottom"),n&&37==n.keyCode&&"right"!==i.direction&&(i.direction="left"),n&&39==n.keyCode&&"left"!==i.direction&&(i.direction="right"),n&&40==n.keyCode&&"bottom"!==i.direction&&(i.direction="top")},m(),document.getElementById("start").onclick=function(){i.stop(),i.move()},document.getElementById("stop").onclick=function(){i.stop()},document.getElementById("restart").onclick=function(){i.stop(),i=new x(d,v),c=new g,b=0,i.move()}}},function(t,n,e){var r=e(213);t.exports=r},function(t,n,e){var r=e(214),o=Array.prototype;t.exports=function(t){var n=t.findIndex;return t===o||t instanceof Array&&n===o.findIndex?r:n}},function(t,n,e){e(215);var r=e(14);t.exports=r("Array").findIndex},function(t,n,e){"use strict";var r=e(7),o=e(66).findIndex,i=e(75),c=e(31),u=!0,a=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!a},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,n,e){var r=e(20),o=e(217);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){(n=e(21)(!1)).push([t.i,"body,\nhtml {\n  width: 98%;\n  height: 98%;\n}\n.wrap {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 500px;\n  height: 60px;\n}\nbutton {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n}\n",""]),t.exports=n}]);