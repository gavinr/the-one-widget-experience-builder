define(["jimu-core","jimu-ui"],(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=551)}({103:function(e,t,r){"use strict";var n=this;Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),i=r(4);t.expreg=/\<exp((?!\<exp).)*((?!\<exp).)*\<\/exp\>/gim,t.areg=/\<a((?!\<a).)*((?!\<a).)*\<\/a\>/gm,t.expressionreg=/data-expression=\"(((?![\=|\>|\"]).)*)["\>|"\s)]/m,t.linkreg=/data-link=\"(((?![\=|\>|\"]).)*)["\>|"\s)]/m,t.uniqueidreg=/data-uniqueid=\"(((?![\=|\s|\>|\"]).)*)[\"\>|"\s)]/m,t.dsidreg=/data-dsid=\"(((?![\=|\>|\"]).)*)[\"\>|"\s)]/gm,t.hrefreg=/href="((?!").)*"/m,t.getDataSourceIds=function(e){return void 0===e&&(e=o.Immutable([])),e.map((function(e){return e.dataSourceId}))},t.getTextFormats=function(e){var t=e&&e.typography.fontFamilyBase||"Avenir Next",r=e&&e.typography.lineHeights.medium||"1.5",n=e&&e.body.color,o=e&&e.typography.fontSizeBase||"14px";return{font:t,linespace:r,color:n,size:o=i.styleUtils.remToPixel(o)}},t.replaceUseDataSourcesFields=function(e,r){if(e)return e.map((function(e){var n=e.dataSourceId,o=r?t.getUseDataSourceById(r,n):null;if(!o)return e.set("fields",[]);var i=o.fields;return e.set("fields",i)}))},t.getUseDataSourceById=function(e,t){return e.filter((function(e){return e.dataSourceId===t}))[0]},t.matchAll=function(e,t){for(var r,n=[];null!==(r=t.exec(e));)n.push(r[0]);return n},t.convertEncodeObject=function(e){try{return e=decodeURIComponent(e),JSON.parse(e)}catch(e){console.error(e)}},t.getUseDataSourceIds=function(e){for(var r,n=t.dsidreg,o=[];null!==(r=n.exec(e));){var i=r[1];i.indexOf(",")>0?(i=i.split(","),o=o.concat(i)):o.push(i)}return o},t.getInvalidDataSourceIds=function(e,r){var o=n.getUseDataSourceIds(e);if(o&&o.length){var i=t.getDataSourceIds(r),a=o.filter((function(e){return i.indexOf(e)<0}));return a.length?a:void 0}},t.getExpressions=function(e){var r=t.matchAll(e,t.expreg),n=o.Immutable({});return r.forEach((function(e){var r=e.match(t.expressionreg),o=e.match(t.uniqueidreg);if(r&&r[1]){var i=r[1],a=t.convertEncodeObject(i),s=o[1];n=n.set(s,a)}})),n},t.getLinks=function(e){var r=t.matchAll(e,t.areg),n=o.Immutable({});return r.forEach((function(e){var r=e.match(t.linkreg),o=e.match(t.uniqueidreg);if(r&&r[1]){var i=r[1],a=t.convertEncodeObject(i),s=o[1];if(!s||!a)return;n=n.set(s,a)}})),n},t.getAllExpressions=function(e){var r=t.getExpressions(e),n=t.getLinks(e);for(var o in n){var i=n[o];i.expression&&(r=r.set(o,i.expression))}return r},t.getExpressionParts=function(e){var t=[];for(var r in e){var n=e[r],o=n&&n.parts;o&&(t=t.concat(o))}return t},t.replaceHtmlExpression=function(e,r){return e.replace(t.expreg,(function(e){var n=e.match(t.uniqueidreg),o=n&&n[1];if(!o)return e;var i=r[o];return void 0!==i?i:e}))},t.replaceHtmlLinkHref=function(e,r,n){return e.replace(t.areg,(function(e){var i=e.match(t.uniqueidreg),a=i&&i[1];if(!a)return e;var s="",u=e.match(t.linkreg);if(u&&u[1]){var p=u[1],c=t.convertEncodeObject(p);return s=c&&c.expression?n[a]||"":o.urlUtils.getHrefFromLinkTo(c,r),e=e.replace(t.hrefreg,'href="'+s+'"')}}))}},175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=["title","height","width","class","style"],i=new(0,n.esri.Sanitizer)({whiteList:{h1:o,h2:o,h3:o,h4:o,h5:o,h6:o,span:o,p:o,s:o,strong:o,em:o,u:o,ol:o,ul:o,li:o,a:["href","target"].concat(o),exp:o},safeAttrValue:function(e,t,r,o){return"a"===e&&"href"===t?n.xss.escapeAttrValue(r):n.xss.safeAttrValue(e,t,r,o)},onIgnoreTagAttr:function(e,t,r,o){if("data-"===t.substr(0,5))return t+'="'+n.xss.escapeAttrValue(r)+'"'},css:{onIgnoreAttr:function(e,t){return"line-height"===e?"line-height: "+n.xss.escapeAttrValue(t):""}}},!0);t.sanitizer=i},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={_widgetLabel:"Text",placeholder:"Double click to edit text"}},3:function(t,r){t.exports=e},4:function(e,r){e.exports=t},551:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var a,s=r(3),u=r(552),p=r(103),c=r(176);!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(a||(a={}));var l,d,f=function(e){function t(t){var r=e.call(this,t)||this;return r.updateWidgteState=function(e,t){var n=r.props.id;r.props.dispatch(s.appActions.widgetStatePropChange(n,e,t))},r.hideExpressionPanel=function(){var e=r.props.id;r.props.dispatch(s.appActions.widgetStatePropChange(e,"showExpression",!1))},r.setRepeatType=function(){var e,t=r.props.repeatedDataSource;e=t?0===t.recordIndex?a.Main:a.Sub:a.None,r.setState({repeat:e})},r.translate=function(e){var t=r.props.intl;return t?t.formatMessage({id:e,defaultMessage:c.default[e]}):""},r.translateDefaultPlaceholder=function(e){return e===c.default.placeholder&&(e=r.translate("placeholder")),e},r.getStyle=function(e){var t=(r.props.config.style||{}).wrap,n=s.css(l||(l=i(["\n     .ql-container {\n        > .ql-runtime,\n        > .ql-editor {\n          white-space: nowrap !important;\n        }\n        > .ql-editor {\n          overflow-x: auto;\n        }\n      }\n    "],["\n     .ql-container {\n        > .ql-runtime,\n        > .ql-editor {\n          white-space: nowrap !important;\n        }\n        > .ql-editor {\n          overflow-x: auto;\n        }\n      }\n    "])));return s.css(d||(d=i(["\n    display: flex;\n    overflow: ",";\n    .ql-container {\n        > .ql-runtime {\n          overflow: hidden;\n        }\n    }\n    ",";\n    "],["\n    display: flex;\n    overflow: ",";\n    .ql-container {\n        > .ql-runtime {\n          overflow: hidden;\n        }\n    }\n    ",";\n    "])),e?"auto":"hidden",!t&&n)},r.isEditable=function(){var e=r.state.repeat;return r.props.active&&e!==a.Sub},r.displayer=function(){var e=r.props,t=e.repeatedDataSource,n=e.useDataSources,o=e.useDataSourcesEnabled,i=r.props.config,a=i.text,p=i.placeholder;return p=r.translateDefaultPlaceholder(p),s.jsx(u.default,{text:a,parentHeight:r.state.height,placeholder:p,useDataSources:o?n:s.Immutable([]),repeatedDataSource:t})},r.onEditorCreate=function(e){r.props.dispatch(s.appActions.widgetMutableStatePropChange(r.props.id,"editor",e))},r.onEditorDestory=function(){r.props.dispatch(s.appActions.widgetMutableStatePropChange(r.props.id,"editor",null))},r.getExpressionParts=function(e){var t=p.getAllExpressions(e);return p.getExpressionParts(t)},r.mergeUseDataSources=function(e){var t=r.props.useDataSources,n=r.getExpressionParts(e),o=s.expressionUtils.getUseDataSourceFromExpParts(n);return p.replaceUseDataSourcesFields(t,o)},r.editor=function(){var e=r.props,t=e.builderSupportModules,n=e.id,o=e.useDataSources,i=e.useDataSourcesEnabled,a=e.isInlineEditing,u=r.props.config,p=u.text,c=u.placeholder;c=r.translateDefaultPlaceholder(c);var l=t.widgetModules.Editor;return s.jsx(l,{widgetId:n,useDataSources:i?o:void 0,enabled:!!a,onEditorCreate:r.onEditorCreate,onEditorDestory:r.onEditorDestory,persistPartialConfig:r.persistPartialConfig,placeholder:c,text:p})},r.state={repeat:2},r.persistPartialConfig=r.persistPartialConfig.bind(r),r.onResize=r.onResize.bind(r),r}return o(t,e),t.prototype.componentDidMount=function(){this.setRepeatType()},t.prototype.componentDidUpdate=function(e){var t=this.props,r=(t.useDataSources,t.id),n=t.isInlineEditing,o=t.appMode,i=(t.useDataSourcesEnabled,t.repeatedDataSource),a=(e.useDataSources,e.useDataSourcesEnabled,e.isInlineEditing),u=e.appMode,p=e.repeatedDataSource;o!==u&&o===s.AppMode.Run&&this.props.dispatch(s.appActions.setWidgetIsInlineEditingState(r,!1)),n!==a&&(n||this.hideExpressionPanel(),this.updateWidgteState("isInlineEditing",n)),i!==p&&this.setRepeatType()},t.prototype.persistPartialConfig=function(e){var t=this.props,r=t.builderSupportModules,n=t.config,o=t.id,i=r&&r.jimuForBuilderLib.getAppConfigAction;if(i){var a=null;e.text&&(a=this.mergeUseDataSources(e.text)),n=n.merge(e);var s=i().editWidgetProperty(o,"config",n);a&&(s=s.editWidgetProperty(o,"useDataSources",a)),s.exec()}},t.prototype.onResize=function(e,t){this.setState({height:t})},t.prototype.render=function(){var e=this.isEditable();return s.jsx("div",{css:this.getStyle(e),className:s.classNames("widget-text jimu-widget p-1")},s.jsx(s.ReactResizeDetector,{handleHeight:!0,onResize:this.onResize}),e&&this.editor(),!e&&this.displayer())},t.mapExtraStateProps=function(e,t){var r=!1,n=e.appRuntimeInfo.selection;if(n&&e.appConfig.layouts[n.layoutId]){var o=e.appConfig.layouts[n.layoutId].content[n.layoutItemId];r=o&&o.widgetId===t.id}var i=e.appContext.isInBuilder,a=e.appRuntimeInfo.appMode;return{active:i&&a===s.AppMode.Design&&r,appMode:a}},t}(s.BaseWidget);t.default=f},552:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),a=r(553),s=r(554),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderProps=function(e){var r=t.props,n=r.placeholder,o=r.parentHeight;return i.jsx(s.default,{text:e,parentHeight:o,placeholder:n})},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.text,r=e.useDataSources,n=e.repeatedDataSource;return i.jsx(a.default,{text:t,useDataSources:r,repeatedDataSource:n},this.renderProps)},t.displayName="Displayer",t}(i.React.PureComponent);t.default=u},553:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),a=r(103),s=function(e){function t(t){var r=e.call(this,t)||this;return r.getRecords=function(e){var t,r=e&&e.record;return(t={})[e&&e.dataSourceId]=r,t},r.resolveTextVariables=function(){var e=r.props,t=e.text,n=e.queryObject,o=r.state.expressionValues;return t?(t=a.replaceHtmlExpression(t,o),t=a.replaceHtmlLinkHref(t,n,o)):""},r.state={expression:i.Immutable({}),records:{},expressionValues:i.Immutable({})},r.dsm=i.DataSourceManager.getInstance(),r.onExpressionResolved=r.onExpressionResolved.bind(r),r}return o(t,e),t.prototype.componentDidMount=function(){var e=a.getAllExpressions(this.props.text),t=this.props.repeatedDataSource,r=this.getRecords(t);this.setState({expression:e,records:r})},t.prototype.componentDidUpdate=function(e){if(this.props.text!==e.text){var t=a.getAllExpressions(this.props.text);this.setState({expression:t})}if(this.props.repeatedDataSource!==e.repeatedDataSource){var r=this.props.repeatedDataSource,n=this.getRecords(r);this.setState({records:n})}},t.prototype.onExpressionResolved=function(e){var t=i.Immutable({});e&&Object.keys(e).forEach((function(r){var n,o=e[r];(null===(n=o)||void 0===n?void 0:n.isSuccessful)&&(t=t.set(r,o.value))})),this.setState({expressionValues:t})},t.prototype.render=function(){var e=this.props,t=e.useDataSources,r=void 0===t?i.Immutable([]):t,n=e.children,o=this.resolveTextVariables();return i.React.createElement(i.React.Fragment,null,i.React.createElement(i.ExpressionResolverComponent,{useDataSources:r,expression:this.state.expression,records:this.state.records,onChange:this.onExpressionResolved}),"function"==typeof n?n(o):n)},t.displayName="_TextResolver",t}(i.React.PureComponent);t._TextResolver=s;t.default=i.ReactRedux.connect((function(e){return{queryObject:e.queryObject}}))(s)},554:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),u=r(175),p=function(e){function t(t){var r=e.call(this,t)||this;return r.isOutOrTopTargetLink=function(e,t){return a.urlUtils.isAbsoluteUrl(e)||"_top"===t},r.getStyle=function(){return a.css(c||(c=i(["\n      width: 100%;\n      height: fit-content;\n      .ql-runtime {\n        width: 100%;\n        height: auto;\n      }\n    "],["\n      width: 100%;\n      height: fit-content;\n      .ql-runtime {\n        width: 100%;\n        height: auto;\n      }\n    "])))},r.getNodeText=function(){return r.node.current&&r.node.current.textContent},r.state={height:0},r.node=a.React.createRef(),r.handleClick=r.handleClick.bind(r),r.onResize=r.onResize.bind(r),r}return o(t,e),t.prototype.handleClick=function(e){var t=this,r=e.target;if("A"===r.nodeName){var n=r.getAttribute("href"),o=r.target;if(this.props.liveView&&this.isOutOrTopTargetLink(n,o))return e.preventDefault(),this.setState({linkHref:r.href,linkNode:r}),void this.setState({showLinkTip:!0},(function(){return setTimeout((function(){return t.setState({showLinkTip:!1})}),3e3)}));if(!(e.defaultPrevented||0!==e.button||o&&"_self"!==o||s.isModifiedEvent(e)||a.urlUtils.isAbsoluteUrl(n))){if(e.preventDefault(),!n)return;a.jimuHistory.browserHistory.push(n)}}},t.prototype.isBlank=function(e){return!e||"<p></p>"===e||"<p>\ufeff</p>"===e||"<p><br></p>"===e},t.prototype.onResize=function(e,t){this.setState({height:t})},t.prototype.render=function(){var e=this.props,t=e.text,r=e.placeholder,n=e.parentHeight;this.isBlank(t)&&r&&(t=r);var o=!!n&&this.state.height>n,i=this.state,p=i.showLinkTip,c=i.linkHref,l=i.linkNode,d=u.sanitizer.sanitize(t);return a.jsx("div",{css:this.getStyle(),className:"ql-container",title:o?this.getNodeText():""},a.jsx(a.ReactResizeDetector,{handleHeight:!0,onResize:this.onResize}),a.jsx("div",{ref:this.node,className:a.classNames("ql-runtime"),dangerouslySetInnerHTML:{__html:d},onClick:this.handleClick}),p&&a.jsx(s.LinkTip,{open:p,href:c,reference:l}))},t.displayName="_TextRenderer",t}(a.React.PureComponent);t._TextRenderer=p;var c;t.default=a.ReactRedux.connect((function(e){var t=e.appContext.isInBuilder,r=e.appRuntimeInfo.appMode;return{liveView:t&&r===a.AppMode.Run}}))(p)}})}));