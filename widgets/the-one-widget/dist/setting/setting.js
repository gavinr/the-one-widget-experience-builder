define(["jimu-core","jimu-for-builder","jimu-ui/setting-components"], function(__WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_setting_components__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/setting.tsx":
/*!******************************************************************************************!*\
  !*** ./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/setting.tsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/** @jsx jsx */\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar jimu_for_builder_1 = __webpack_require__(/*! jimu-for-builder */ \"jimu-for-builder\");\r\nvar setting_components_1 = __webpack_require__(/*! jimu-ui/setting-components */ \"jimu-ui/setting-components\");\r\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/translations/default.ts\");\r\nvar Setting = /** @class */ (function (_super) {\r\n    __extends(Setting, _super);\r\n    function Setting(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.dsManager = jimu_core_1.DataSourceManager.getInstance();\r\n        _this.onAllowOverlapPropertyChange = function (evt) {\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config.set(\"allowOverlap\", evt.currentTarget.checked),\r\n            });\r\n        };\r\n        _this.onMapWidgetSelected = function (useMapWidgetIds) {\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                useMapWidgetIds: useMapWidgetIds,\r\n            });\r\n        };\r\n        _this.onLayerSelected = function (jimuLayerViewInfo) {\r\n            console.log(\"layer selected\", jimuLayerViewInfo);\r\n            var dataSourceId = jimuLayerViewInfo\r\n                ? jimuLayerViewInfo.datasourceId\r\n                : null;\r\n            var dataSource = _this.dsManager.getDataSource(dataSourceId);\r\n            var layer = dataSource ? dataSource.layer : null;\r\n            var layerId = layer ? layer.id : null;\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config\r\n                    .set(\"layerViewInfo\", jimuLayerViewInfo)\r\n                    .set(\"layerId\", layerId),\r\n            });\r\n        };\r\n        _this.onSnappingDistanceChanged = function (event) {\r\n            _this.setState({ snappingDistanceInput: event });\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config.set(\"snappingDistance\", event),\r\n            });\r\n        };\r\n        _this.onMaxAreaChanged = function (event) {\r\n            _this.setState({ maxAreaInput: event });\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config.set(\"maxArea\", event),\r\n            });\r\n        };\r\n        _this.state = {};\r\n        return _this;\r\n    }\r\n    Setting.prototype.render = function () {\r\n        var style = jimu_core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n      .widget-setting-the-one-widget {\\n        .single-row {\\n          display: flex;\\n          justify-content: space-between;\\n          margin-bottom: 8px;\\n        }\\n      }\\n    \"], [\"\\n      .widget-setting-the-one-widget {\\n        .single-row {\\n          display: flex;\\n          justify-content: space-between;\\n          margin-bottom: 8px;\\n        }\\n      }\\n    \"])));\r\n        return (jimu_core_1.jsx(\"div\", { css: style },\r\n            jimu_core_1.jsx(\"div\", { className: \"widget-setting-the-one-widget\" },\r\n                jimu_core_1.jsx(setting_components_1.SettingSection, { className: \"map-selector-section\", title: this.props.intl.formatMessage({\r\n                        id: \"mapWidgetLabel\",\r\n                        defaultMessage: default_1.default.selectMapWidget,\r\n                    }) },\r\n                    jimu_core_1.jsx(setting_components_1.SettingRow, null,\r\n                        jimu_core_1.jsx(setting_components_1.JimuMapViewSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\r\n                jimu_core_1.jsx(setting_components_1.SettingSection, { className: \"map-selector-section\", title: this.props.intl.formatMessage({\r\n                        id: \"layerIdLabel\",\r\n                        defaultMessage: default_1.default.layerId,\r\n                    }) },\r\n                    jimu_core_1.jsx(setting_components_1.SettingRow, null,\r\n                        jimu_core_1.jsx(\"div\", { className: \"w-100\" },\r\n                            jimu_core_1.jsx(setting_components_1.JimuLayerViewSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onLayerSelected, jimuLayerViewInfo: this.props.config && this.props.config.layerViewInfo })))))));\r\n    };\r\n    return Setting;\r\n}(jimu_for_builder_1.BaseWidgetSetting));\r\nexports.default = Setting;\r\nvar templateObject_1;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGUtb25lLXdpZGdldC1leHBlcmllbmNlLWJ1aWxkZXIvd2lkZ2V0cy90aGUtb25lLXdpZGdldC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RoZS1vbmUtd2lkZ2V0LWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL3RoZS1vbmUtd2lkZ2V0L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4P2QwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAgRm9ybWF0dGVkTWVzc2FnZSxcclxuICBjc3MsXHJcbiAganN4LFxyXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxyXG59IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQmFzZVdpZGdldFNldHRpbmcsIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7IFN3aXRjaCwgVGV4dElucHV0LCBOdW1lcmljSW5wdXQgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQge1xyXG4gIEppbXVNYXBWaWV3U2VsZWN0b3IsXHJcbiAgU2V0dGluZ1NlY3Rpb24sXHJcbiAgU2V0dGluZ1JvdyxcclxuICBKaW11TGF5ZXJWaWV3U2VsZWN0b3IsXHJcbn0gZnJvbSBcImppbXUtdWkvc2V0dGluZy1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCB7IElNSmltdUxheWVyVmlld0luZm8gfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBCYXNlV2lkZ2V0U2V0dGluZzxcclxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxyXG4gIElTdGF0ZVxyXG4+IHtcclxuICBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIG9uQWxsb3dPdmVybGFwUHJvcGVydHlDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFwiYWxsb3dPdmVybGFwXCIsIGV2dC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkcyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uTGF5ZXJTZWxlY3RlZCA9IChqaW11TGF5ZXJWaWV3SW5mbzogSU1KaW11TGF5ZXJWaWV3SW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJsYXllciBzZWxlY3RlZFwiLCBqaW11TGF5ZXJWaWV3SW5mbyk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlSWQgPSBqaW11TGF5ZXJWaWV3SW5mb1xyXG4gICAgICA/IGppbXVMYXllclZpZXdJbmZvLmRhdGFzb3VyY2VJZFxyXG4gICAgICA6IG51bGw7XHJcbiAgICBjb25zdCBkYXRhU291cmNlOiBhbnkgPSB0aGlzLmRzTWFuYWdlci5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCk7XHJcbiAgICBjb25zdCBsYXllciA9IGRhdGFTb3VyY2UgPyBkYXRhU291cmNlLmxheWVyIDogbnVsbDtcclxuICAgIGNvbnN0IGxheWVySWQgPSBsYXllciA/IGxheWVyLmlkIDogbnVsbDtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWdcclxuICAgICAgICAuc2V0KFwibGF5ZXJWaWV3SW5mb1wiLCBqaW11TGF5ZXJWaWV3SW5mbylcclxuICAgICAgICAuc2V0KFwibGF5ZXJJZFwiLCBsYXllcklkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uU25hcHBpbmdEaXN0YW5jZUNoYW5nZWQgPSAoZXZlbnQ6IG51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNuYXBwaW5nRGlzdGFuY2VJbnB1dDogZXZlbnQgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcInNuYXBwaW5nRGlzdGFuY2VcIiwgZXZlbnQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25NYXhBcmVhQ2hhbmdlZCA9IChldmVudDogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWF4QXJlYUlucHV0OiBldmVudCB9KTtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFwibWF4QXJlYVwiLCBldmVudCksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgLndpZGdldC1zZXR0aW5nLXRoZS1vbmUtd2lkZ2V0IHtcclxuICAgICAgICAuc2luZ2xlLXJvdyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy10aGUtb25lLXdpZGdldFwiPlxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICBpZDogXCJtYXBXaWRnZXRMYWJlbFwiLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc2VsZWN0TWFwV2lkZ2V0LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPEppbXVNYXBWaWV3U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICBpZDogXCJsYXllcklkTGFiZWxcIixcclxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmxheWVySWQsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8SmltdUxheWVyVmlld1NlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTGF5ZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgamltdUxheWVyVmlld0luZm89e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmxheWVyVmlld0luZm9cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPjwvSmltdUxheWVyVmlld1NlbGVjdG9yPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUVBO0FBT0E7QUFLQTtBQUFBO0FBTUE7QUFBQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTs7QUFDQTtBQWdEQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUFBOzs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/setting.tsx\n");

/***/ }),

/***/ "./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/translations/default.ts":
/*!******************************************************************************************************!*\
  !*** ./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/translations/default.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    selectMapWidget: \"Map\",\r\n    layerId: \"Layer ID\",\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGUtb25lLXdpZGdldC1leHBlcmllbmNlLWJ1aWxkZXIvd2lkZ2V0cy90aGUtb25lLXdpZGdldC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RoZS1vbmUtd2lkZ2V0LWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL3RoZS1vbmUtd2lkZ2V0L3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzP2Q0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlbGVjdE1hcFdpZGdldDogXCJNYXBcIixcclxuICBsYXllcklkOiBcIkxheWVyIElEXCIsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./the-one-widget-experience-builder/widgets/the-one-widget/src/setting/translations/default.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1mb3ItYnVpbGRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtZm9yLWJ1aWxkZXJcIj8xY2IyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-for-builder\n");

/***/ }),

/***/ "jimu-ui/setting-components":
/*!*********************************************!*\
  !*** external "jimu-ui/setting-components" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_setting_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LXVpL3NldHRpbmctY29tcG9uZW50c1wiPzYyYmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfc2V0dGluZ19jb21wb25lbnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/setting-components\n");

/***/ })

/******/ })});;