define(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=605)}({20:function(e,t){e.exports=n},3:function(t,n){t.exports=e},4:function(e,n){e.exports=t},605:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),u=n(20),a=n(606),s=n(4),l=n(607),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.layouts,n=e.id,o=e.intl,r=e.builderSupportModules,d=window.jimuConfig.isInBuilder?r.widgetModules.LayoutBuilder:u.LayoutViewer;return d?i.jsx("div",{className:"widget-fixed-layout d-flex w-100 h-100"},i.jsx(d,{layouts:t[i.DEFAULT_EMBED_LAYOUT_NAME],isInWidget:!0,style:{overflow:"auto",minHeight:"none"}},i.jsx(s.WidgetPlaceholder,{icon:l,widgetId:n,style:{border:"none"},message:o.formatMessage({id:"tips",defaultMessage:a.default.tips})}))):i.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!")},t}(i.BaseWidget);t.default=d},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={_widgetLabel:"Fixed Panel",widgetProperties:"Widget properties",widgetFunctions:"Widget functions",widgetName:"widget name:",widgetProps:"widget properties:",tips:"Fixed Panel"}},607:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1v12a1 1 0 001 1h12a1 1 0 001-1V2zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H3zm7 5h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1zm0 1v3h3v-3h-3z" fill="#000" fill-rule="nonzero"></path></svg>'}})}));