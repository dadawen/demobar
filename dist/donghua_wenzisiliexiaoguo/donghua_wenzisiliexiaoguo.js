!function(n){var e={};function t(p){if(e[p])return e[p].exports;var i=e[p]={i:p,l:!1,exports:{}};return n[p].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,p){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:p})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var p=Object.create(null);if(t.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(p,i,function(e){return n[e]}.bind(null,i));return p},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=117)}({117:function(n,e,t){"use strict";t.r(e);t(118)},118:function(n,e,t){var p=t(16),i=t(119);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};p(i,r);n.exports=i.locals||{}},119:function(n,e,t){(e=t(17)(!1)).push([n.i,".text-tear_wrapper {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  flex-direction: column;\n  color: #ffffff;\n  font-size: 50px;\n  text-align: center;\n  letter-spacing: 10px;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.item-text {\n  position: relative;\n  padding: 10px 50px;\n  transform: scale3d(1, 1, 1);\n  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);\n  color: #ffffff;\n  font-size: 72px;\n  overflow: hidden;\n  line-height: 1;\n  letter-spacing: 0.01em;\n}\n.item-text::before,\n.item-text::after {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);\n  -webkit-clip-path: inset(79px 50px 43px 0px);\n          clip-path: inset(79px 50px 43px 0px);\n  color: #ffffff;\n  overflow: hidden;\n  content: attr(aria-title);\n}\n.item-text::before {\n  left: 7px;\n  animation: glitch-effect 5s infinite linear alternate-reverse;\n  text-shadow: 1px 0 #a1ffce;\n}\n.item-text::after {\n  left: 3px;\n  animation: glitch-effect 4s infinite linear alternate-reverse;\n  text-shadow: -1px 0 #faffd1;\n}\n@keyframes glitch-effect {\n  0% {\n    -webkit-clip-path: inset(4px 50px 61px 0px);\n            clip-path: inset(4px 50px 61px 0px);\n  }\n  5% {\n    -webkit-clip-path: inset(99px 50px 30px 0px);\n            clip-path: inset(99px 50px 30px 0px);\n  }\n  10% {\n    -webkit-clip-path: inset(100px 50px 90px 0px);\n            clip-path: inset(100px 50px 90px 0px);\n  }\n  15% {\n    -webkit-clip-path: inset(69px 50px 98px 0px);\n            clip-path: inset(69px 50px 98px 0px);\n  }\n  20% {\n    -webkit-clip-path: inset(51px 50px 18px 0px);\n            clip-path: inset(51px 50px 18px 0px);\n  }\n  25% {\n    -webkit-clip-path: inset(43px 50px 38px 0px);\n            clip-path: inset(43px 50px 38px 0px);\n  }\n  30% {\n    -webkit-clip-path: inset(67px 50px 71px 0px);\n            clip-path: inset(67px 50px 71px 0px);\n  }\n  35% {\n    -webkit-clip-path: inset(32px 50px 44px 0px);\n            clip-path: inset(32px 50px 44px 0px);\n  }\n  40% {\n    -webkit-clip-path: inset(98px 50px 96px 0px);\n            clip-path: inset(98px 50px 96px 0px);\n  }\n  45% {\n    -webkit-clip-path: inset(92px 50px 93px 0px);\n            clip-path: inset(92px 50px 93px 0px);\n  }\n  50% {\n    -webkit-clip-path: inset(23px 50px 84px 0px);\n            clip-path: inset(23px 50px 84px 0px);\n  }\n  55% {\n    -webkit-clip-path: inset(15px 50px 46px 0px);\n            clip-path: inset(15px 50px 46px 0px);\n  }\n  60% {\n    -webkit-clip-path: inset(53px 50px 9px 0px);\n            clip-path: inset(53px 50px 9px 0px);\n  }\n  65% {\n    -webkit-clip-path: inset(89px 50px 21px 0px);\n            clip-path: inset(89px 50px 21px 0px);\n  }\n  70% {\n    -webkit-clip-path: inset(47px 50px 1px 0px);\n            clip-path: inset(47px 50px 1px 0px);\n  }\n  75% {\n    -webkit-clip-path: inset(98px 50px 55px 0px);\n            clip-path: inset(98px 50px 55px 0px);\n  }\n  80% {\n    -webkit-clip-path: inset(86px 50px 81px 0px);\n            clip-path: inset(86px 50px 81px 0px);\n  }\n  85% {\n    -webkit-clip-path: inset(25px 50px 47px 0px);\n            clip-path: inset(25px 50px 47px 0px);\n  }\n  90% {\n    -webkit-clip-path: inset(49px 50px 87px 0px);\n            clip-path: inset(49px 50px 87px 0px);\n  }\n  95% {\n    -webkit-clip-path: inset(7px 50px 59px 0px);\n            clip-path: inset(7px 50px 59px 0px);\n  }\n  100% {\n    -webkit-clip-path: inset(79px 50px 43px 0px);\n            clip-path: inset(79px 50px 43px 0px);\n  }\n}\n",""]),n.exports=e},16:function(n,e,t){"use strict";var p,i=function(){return void 0===p&&(p=Boolean(window&&document&&document.all&&!window.atob)),p},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function o(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function x(n,e){for(var t={},p=[],i=0;i<n.length;i++){var r=n[i],x=e.base?r[0]+e.base:r[0],c=t[x]||0,s="".concat(x," ").concat(c);t[x]=c+1;var l=o(s),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:s,updater:b(f,e),references:1}),p.push(s)}return p}function c(n){var e=document.createElement("style"),p=n.attributes||{};if(void 0===p.nonce){var i=t.nc;i&&(p.nonce=i)}if(Object.keys(p).forEach((function(n){e.setAttribute(n,p[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,p){var i=t?"":p.media?"@media ".concat(p.media," {").concat(p.css,"}"):p.css;if(n.styleSheet)n.styleSheet.cssText=l(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var p=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(p+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=p;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(p))}}var d=null,h=0;function b(n,e){var t,p,i;if(e.singleton){var r=h++;t=d||(d=c(e)),p=f.bind(null,t,r,!1),i=f.bind(null,t,r,!0)}else t=c(e),p=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return p(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;p(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=x(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var p=0;p<t.length;p++){var i=o(t[p]);a[i].references--}for(var r=x(n,e),c=0;c<t.length;c++){var s=o(t[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=r}}}},17:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",p=n[3];if(!p)return t;if(e&&"function"==typeof btoa){var i=(a=p,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(x," */")),r=p.sources.map((function(n){return"/*# sourceURL=".concat(p.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,o,x;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,p){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(p)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<n.length;o++){var x=[].concat(n[o]);p&&i[x[0]]||(t&&(x[2]?x[2]="".concat(t," and ").concat(x[2]):x[2]=t),e.push(x))}},e}}});