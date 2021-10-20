/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n* a {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\n* ul li {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n/*\\r\\n    ===========================\\r\\n    ******** Global ********\\r\\n    ===========================\\r\\n*/\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: #e5e5e5;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  background-color: hsla(0, 0%, 0%, 0.8);\\r\\n  opacity: 0;\\r\\n  z-index: -5;\\r\\n}\\r\\n\\r\\n.overlay.active {\\r\\n  opacity: 1;\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n/*\\r\\n    ===========================\\r\\n    ******** Layout ********\\r\\n    ===========================\\r\\n*/\\r\\n#header {\\r\\n  width: 100%;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-style: normal;\\r\\n  font-weight: bold;\\r\\n  font-size: 15px;\\r\\n  line-height: 20px;\\r\\n  color: hsl(0, 0%, 11%);\\r\\n}\\r\\n\\r\\n.logo a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 90%;\\r\\n  align-items: center;\\r\\n  margin: 0 auto;\\r\\n  height: 4rem;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  line-height: 4rem;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.d-navbar {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.d-navbar li {\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.d-navbar li a {\\r\\n  color: hsl(0, 0%, 3%);\\r\\n}\\r\\n\\r\\n.a-navbar {\\r\\n  text-decoration: none;\\r\\n  height: 2em;\\r\\n  padding: 0.5em 1em;\\r\\n}\\r\\n\\r\\n.navbar .humberger i {\\r\\n  font-size: 22px;\\r\\n  font-weight: 600;\\r\\n  color: hsl(0, 0%, 4%);\\r\\n}\\r\\n\\r\\n.navbar ul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  gap: 16px;\\r\\n  padding-top: 12px;\\r\\n  padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n/* End Header */\\r\\n\\r\\n.items-container {\\r\\n  width: 90%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  justify-items: center;\\r\\n  gap: 1.5rem;\\r\\n  margin: 2rem auto;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  min-width: 18rem;\\r\\n  max-width: 24rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n  gap: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  box-shadow: 0.25rem 0.25rem 0.5rem hsl(26, 32%, 29%);\\r\\n}\\r\\n\\r\\n.item-card .card-top {\\r\\n  width: 100%;\\r\\n  height: 65%;\\r\\n  position: relative;\\r\\n  background-color: hsl(0, 0%, 75%);\\r\\n}\\r\\n\\r\\n.item-card .card-top .thumbnail-placeholder {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.item-card .card-top img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-card .card-top,\\r\\n.item-card .card-top .thumbnail-placeholder,\\r\\n.item-card .card-top img {\\r\\n  border-top-left-radius: 0.5rem;\\r\\n  border-top-right-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.item-card .card-top p {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  color: hsl(39, 14%, 80%);\\r\\n  background-color: hsla(0, 0%, 13%, 0.7);\\r\\n}\\r\\n\\r\\n.item-card .likes {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  margin: auto;\\r\\n  margin-top: 10px;\\r\\n  flex-shrink: 0;\\r\\n  background-color: white;\\r\\n  bottom: 0;\\r\\n  border-style: solid;\\r\\n}\\r\\n\\r\\n/*\\r\\n    ===========================\\r\\n    ******** PopUp ********\\r\\n    ===========================\\r\\n*/\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 2.75rem;\\r\\n  left: 1rem;\\r\\n  right: 1rem;\\r\\n  border-radius: 1rem;\\r\\n  z-index: 10;\\r\\n  background-color: #fff;\\r\\n  height: unset;\\r\\n  overflow-y: auto;\\r\\n  transform: scale(0);\\r\\n  transition: 600ms ease-in-out;\\r\\n}\\r\\n\\r\\n.modal.active {\\r\\n  transform: scale(1);\\r\\n  transition: 600ms ease-in-out;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.modal.active .image-placeholder {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.modal.active .image-placeholder img {\\r\\n  height: 55vh;\\r\\n}\\r\\n\\r\\n.modal.active .popup-comments {\\r\\n  padding: 1rem;\\r\\n  height: 30vh;\\r\\n}\\r\\n\\r\\n.close_modal {\\r\\n  position: absolute;\\r\\n  right: 1rem;\\r\\n  top: 1rem;\\r\\n}\\r\\n\\r\\n/*\\r\\n    ============================================\\r\\n    ******* MEDIA QUERY *******\\r\\n    ============================================\\r\\n*/\\r\\n\\r\\n@media screen and (max-width: 600px) {\\r\\n  .d-navbar {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 600px) {\\r\\n  .humberger {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 48rem) {\\r\\n  .items-container {\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 64rem) {\\r\\n  .items-container {\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cc-api.js":
/*!***********************!*\
  !*** ./src/cc-api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processPageResult\": () => (/* binding */ processPageResult),\n/* harmony export */   \"getDetailsForItem\": () => (/* binding */ getDetailsForItem)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\r\nconst ccBaseUrl = 'https://api.creativecommons.engineering/v1/images';\r\n\r\nconst fetchPage = async (pageNum) => {\r\n  const result = await fetch(`${ccBaseUrl}?categories=photograph&page=${pageNum}`);\r\n  return result.json();\r\n};\r\n\r\nconst fetchItemDetails = async (id) => {\r\n  const result = await fetch(`${ccBaseUrl}/${id}`);\r\n  return result.json();\r\n};\r\n\r\nconst getPageData = async (pageNum) => {\r\n  const dataFromApi = await fetchPage(pageNum);\r\n  return dataFromApi.results;\r\n};\r\n\r\nconst processPageResult = async (pageNum) => {\r\n  const returnedDataForPage = await getPageData(pageNum);\r\n  return [...returnedDataForPage]\r\n    .map((item) => ({ id: item.id, thumbnailUrl: item.thumbnail, title: item.title }));\r\n};\r\n\r\nconst getDetailsForItem = async (id) => {\r\n  const itemDetails = await fetchItemDetails(id);\r\n  return ({\r\n    title: itemDetails.title,\r\n    url: itemDetails.url,\r\n    creator: itemDetails.creator,\r\n    license: itemDetails.license,\r\n    source: itemDetails.source,\r\n    sourcePageUrl: itemDetails.foreign_landing_url,\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/cc-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _cc_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-api */ \"./src/cc-api.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _involvment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvment-api */ \"./src/involvment-api.js\");\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\n\r\n\r\nconst ulContainer = document.querySelector('[data-list-container]');\r\nconst overlay = document.getElementsByClassName('overlay')[0];\r\n\r\nconst listenAddLikeBtns = (pageNum, buttons) => {\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', async () => {\r\n      await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.postLike(btn.dataset.addLike);\r\n      renderPage(pageNum);\r\n    });\r\n  });\r\n};\r\n\r\nconst listenOpenModalBtns = (buttons) => {\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', async (e) => {\r\n      const { id } = e.target.parentElement;\r\n      const itemDetails = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.getDetailsForItem(id);\r\n      const {\r\n        title, url, creator, license, source, sourcePageUrl,\r\n      } = itemDetails;\r\n      overlay.classList.add('active');\r\n      const modal = document.createElement('div');\r\n      modal.classList.add('modal');\r\n      modal.classList.add('active');\r\n      modal.innerHTML = `\r\n      <p data-close-modal class=\"btn close_modal\"> Close </p>\r\n      <a href=\"${url}\" target=\"_blank\" class=\"image-placeholder\">\r\n          <img src=\"${url}\" alt=\"${title}\">\r\n      </a>\r\n      <p>${title}</p>\r\n      <div class=\"item-details\">\r\n        <p>Creator: ${(creator !== null) ? creator : 'Unknown'}</p>\r\n        <p>License: ${license}</p>      \r\n        <p>Source: ${source}</p>\r\n        <p><a href=\"${sourcePageUrl}\"> Visit Source</a></p>\r\n      </div>\r\n      <div class=\"popup-comments\"> Comments Here\r\n      <p>Comments: ${_involvment_api__WEBPACK_IMPORTED_MODULE_3__.getComments}</p>\r\n      </div>     \r\n      `;\r\n      document.querySelector('body').appendChild(modal);\r\n      listenCloseModalBtn(modal);\r\n    });\r\n  });\r\n};\r\n\r\nconst listenCloseModalBtn = (childToBeRemoved) => {\r\n  document.querySelector('[data-close-modal]').addEventListener('click', () => {\r\n    document.querySelector('body').removeChild(childToBeRemoved);\r\n    overlay.classList.remove('active');\r\n  });\r\n};\r\n\r\nconst renderPage = async (pageNum) => {\r\n  const processedData = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.processPageResult(pageNum);\r\n  const likes = await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.getLikes();\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateListHtml)(processedData, ulContainer, JSON.parse(likes));\r\n  listenAddLikeBtns(pageNum, document.querySelectorAll('[data-add-like]'));\r\n  listenOpenModalBtns(document.querySelectorAll('[data-open-modal]'));\r\n};\r\n\r\nrenderPage(17);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/involvment-api.js":
/*!*******************************!*\
  !*** ./src/involvment-api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\r\nconst involvmentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\nconst appKey = 'A15Lv9pSHXff9hlMtBe4';\r\n\r\nconst getLikes = async () => {\r\n  const likesResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, { method: 'GET' });\r\n  const likes = await likesResult.text();\r\n  return likes;\r\n};\r\n\r\nconst getComments = async () => {\r\n  const commentsResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/comments/`, { method: 'GET' });\r\n  const comments = await commentsResult.text();\r\n  return comments;\r\n};\r\n\r\n\r\nconst postLike = async (itemId) => {\r\n  await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: `${itemId}`,\r\n    }),\r\n  });\r\n};\r\n\r\nconst postComments = async (itemId) => {\r\n  await fetch(`${involvmentBaseUrl}apps/${appKey}/comments/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: `${itemId}`,\r\n    }),\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/involvment-api.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateListHtml\": () => (/* binding */ generateListHtml)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\r\nconst readLikesNum = (likesArray, id) => {\r\n  const likedItem = likesArray.find((likeItem) => likeItem.item_id === id);\r\n  if (!likedItem) {\r\n    return 0;\r\n  }\r\n  return likedItem.likes;\r\n};\r\n\r\n\r\nconst generateListHtml = (list, ulContainer, likesArray) => {\r\n  let ulInner = '';\r\n  list.forEach((item) => {\r\n    const { id, thumbnailUrl, title } = item;\r\n    const likesNum = readLikesNum(likesArray, id);\r\n    ulInner += `\r\n    <li id=\"${id}\" class=\"item-card\">\r\n      <div data-open-modal class=\"card-top\">\r\n        <div class=\"thumbnail-placeholder\">\r\n          <img src=\"${thumbnailUrl}\" alt=\"thumbnail of ${title}\">\r\n        </div>\r\n        <p>${title.substring(0, 20)}...</p>\r\n      </div>\r\n      <div class=\"likes\">\r\n        <p data-add-like='${id}' class=\"btn\">Click to Like</p>\r\n        <p>${likesNum} likes</p>\r\n      </div>\r\n      <p data-open-modal class=\"btn\">Comments</p>\r\n    </li>`;\r\n  });\r\n  ulContainer.innerHTML = ulInner;\r\n};\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;