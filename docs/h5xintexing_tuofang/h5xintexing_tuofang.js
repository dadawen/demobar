!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/demobar/",n(n.s=170)}({170:function(e,t){document.getElementById("drag-box").addEventListener("dragstart",(function(e){console.log("drag"),e.dataTransfer.setData("dragbox",e.target.id)}));var n=document.getElementById("wrap1");n.addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.getData("dragbox");e.target.appendChild(document.getElementById(t))})),n.addEventListener("dragover",(function(e){e.preventDefault()}));var r=document.getElementById("wrap2");r.addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.getData("dragbox");e.target.appendChild(document.getElementById(t))})),r.addEventListener("dragover",(function(e){e.preventDefault()}))}});