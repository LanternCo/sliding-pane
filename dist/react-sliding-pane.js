!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("react-modal")):"function"==typeof define&&define.amd?define("ReactSlidingPane",["prop-types","react","react-modal"],t):"object"==typeof exports?exports.ReactSlidingPane=t(require("prop-types"),require("react"),require("react-modal")):e.ReactSlidingPane=t(e[void 0],e.React,e.ReactModal)}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var r=n(1),a=n.n(r),o=n(0),l=n.n(o),i=n(2),c=n.n(i),s=(n(4),500);function u(e){var t=e.isOpen,n=e.title,r=e.subtitle,o=e.onRequestClose,l=e.onAfterOpen,i=e.children,u=e.className,d=e.overlayClassName,p=e.from,f=void 0===p?"right":p,m=e.width,y="slide-pane_from_".concat(f);return a.a.createElement(c.a,{className:"slide-pane ".concat(y," ").concat(u||""),style:{content:{width:m||"80%"}},overlayClassName:"slide-pane__overlay ".concat(d||""),closeTimeoutMS:s,isOpen:t,onAfterOpen:l,onRequestClose:o,contentLabel:'Modal "'.concat(n||"",'"')},a.a.createElement("div",{className:"slide-pane__header"},a.a.createElement("div",{className:"slide-pane__close",onClick:o},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},a.a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))),a.a.createElement("div",{className:"slide-pane__title-wrapper"},a.a.createElement("h2",{className:"slide-pane__title"},n),a.a.createElement("div",{className:"slide-pane__subtitle"},r))),a.a.createElement("div",{className:"slide-pane__content"},i))}u.propTypes={isOpen:l.a.bool.isRequired,title:l.a.any,subtitle:l.a.any,onRequestClose:l.a.func,onAfterOpen:l.a.func,children:l.a.any.isRequired,className:l.a.string,overlayClassName:l.a.string,from:l.a.oneOf(["left","right","bottom"]),width:l.a.string}},function(e,t){}])});