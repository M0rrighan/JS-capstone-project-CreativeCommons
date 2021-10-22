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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processPageResult\": () => (/* binding */ processPageResult),\n/* harmony export */   \"getDetailsForItem\": () => (/* binding */ getDetailsForItem)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst ccBaseUrl = 'https://api.creativecommons.engineering/v1/images';\nconst header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });\n\nconst fetchPage = async (pageNum) => {\n  const result = await fetch(`${ccBaseUrl}?categories=photograph&page=${pageNum}`, {\n    method: 'GET',\n    headers: header,\n    mode: 'cors',\n  });\n  return result.json();\n};\n\nconst fetchItemDetails = async (id) => {\n  const result = await fetch(`${ccBaseUrl}/${id}`);\n  return result.json();\n};\n\nconst getPageData = async (pageNum) => {\n  const dataFromApi = await fetchPage(pageNum);\n  return dataFromApi.results;\n};\n\nconst processPageResult = async (pageNum) => {\n  const returnedDataForPage = await getPageData(pageNum);\n  return [...returnedDataForPage]\n    .map((item) => ({ id: item.id, thumbnailUrl: item.thumbnail, title: item.title }));\n};\n\nconst getDetailsForItem = async (id) => {\n  const itemDetails = await fetchItemDetails(id);\n  return ({\n    title: itemDetails.title,\n    url: itemDetails.url,\n    creator: itemDetails.creator,\n    license: itemDetails.license,\n    source: itemDetails.source,\n    sourcePageUrl: itemDetails.foreign_landing_url,\n  });\n};\n\n\n//# sourceURL=webpack://JS-Capstone/./src/cc-api.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/counter.js\");\n/* harmony import */ var _involvment_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvment-api */ \"./src/involvment-api.js\");\n\n\n\nconst displayComments = (ul, userComment) => {\n  const comment = document.createElement('li');\n  comment.className = 'comment-li';\n  const commentMeta = document.createElement('div');\n  commentMeta.className = 'comment-meta';\n  comment.appendChild(commentMeta);\n  const name = document.createElement('p');\n  name.style.textTransform = 'Capitalize';\n  name.innerText = userComment.username;\n\n  const date = document.createElement('p');\n  date.className = 'no-comments';\n  date.innerText = userComment.creation_date;\n  commentMeta.appendChild(name);\n  commentMeta.appendChild(date);\n  const message = document.createElement('p');\n  message.innerText = userComment.comment;\n  message.style.textTransform = 'Capitalize';\n  comment.appendChild(message);\n  ul.appendChild(comment);\n};\n\nconst commentModal = (itemID) => {\n  let commentCounter = 0;\n  const modalInner = document.createElement('div');\n  modalInner.className = 'modal-inner';\n  // const modalHeader = document.createElement('div');\n  // modalHeader.className = 'modal-header';\n  // modalInner.appendChild(modalHeader);\n  // const closeBtn = document.createElement('button');\n  // closeBtn.className = 'close-modal icn-btn';\n  // closeBtn.innerHTML = '&times;';\n  // closeBtn.addEventListener('click', () => {\n  //   modal.style.display = 'none';\n  // });\n  // modalHeader.appendChild(closeBtn);\n  const modalDetails = document.createElement('div');\n  modalDetails.className = 'modal-details';\n  modalInner.appendChild(modalDetails);\n  // const modalImg = document.createElement('img');\n  // modalImg.className = 'modal-img';\n  // modalImg.src = meal.strMealThumb;\n  // modalDetails.appendChild(modalImg);\n  const modalMeta = document.createElement('div');\n  modalMeta.className = 'modal-meta';\n  modalDetails.appendChild(modalMeta);\n  // const modalTitle = document.createElement('h4');\n  // modalTitle.className = 'modal-title';\n  // modalTitle.innerText = meal.strMeal;\n  // modalMeta.appendChild(modalTitle);\n  // const modalDesc = document.createElement('p');\n  // modalDesc.className = 'modal-desc';\n  // modalDesc.innerText = meal.strInstructions;\n  // modalMeta.appendChild(modalDesc);\n\n  const allComments = document.createElement('div');\n  allComments.className = 'all-comments';\n  modalMeta.appendChild(allComments);\n  const allCommentsTitle = document.createElement('h1');\n  allCommentsTitle.className = 'all-comments-title';\n  allCommentsTitle.innerText = 'All Comments';\n  allComments.appendChild(allCommentsTitle);\n  const commentUl = document.createElement('ul');\n  commentUl.className = 'comment-ul';\n  _involvment_api__WEBPACK_IMPORTED_MODULE_1__.getComments(itemID).then((data) => {\n    if (data === 'No comments available for this item') {\n      commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n    } else {\n      console.log('data passed to counter.comments', data);\n      commentCounter = _counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].comments(data);\n      allCommentsTitle.innerText = `All Comments(${commentCounter})`;\n      data.forEach((userComment) => {\n        displayComments(commentUl, userComment);\n      });\n    }\n  });\n  allComments.appendChild(commentUl);\n  const form = document.createElement('form');\n  form.className = 'comment-form';\n  modalMeta.appendChild(form);\n  const formTitle = document.createElement('h1');\n  formTitle.className = 'comment-form-title';\n  formTitle.innerText = 'Add a comment';\n  form.appendChild(formTitle);\n  const commenterName = document.createElement('input');\n  commenterName.type = 'text';\n  commenterName.name = 'commenter';\n  commenterName.placeholder = 'Your Name';\n  commenterName.attributes.required = true;\n  form.appendChild(commenterName);\n  const commenterMessage = document.createElement('textarea');\n  commenterMessage.rows = 5;\n  commenterMessage.className = 'comment-message';\n  commenterMessage.placeholder = 'Your Message';\n  form.appendChild(commenterMessage);\n  const formButton = document.createElement('button');\n  formButton.className = 'btn btn-alt';\n  formButton.innerHTML = 'Add Comment';\n  form.appendChild(formButton);\n  formButton.onclick = (e) => {\n    e.preventDefault();\n    _involvment_api__WEBPACK_IMPORTED_MODULE_1__.postComment(\n      itemID,\n      commenterName.value,\n      commenterMessage.value,\n    ).then(() => {\n      if (commentUl.hasChildNodes()) {\n        commentUl.innerHTML = '';\n        _involvment_api__WEBPACK_IMPORTED_MODULE_1__.getComments(itemID).then((data) => {\n          if (data === 'No comments available for this item') {\n            commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n          } else {\n            allCommentsTitle.innerText = `All Comments(${commentCounter + 1})`;\n            data.forEach((userComment) => {\n              displayComments(commentUl, userComment);\n            });\n          }\n        });\n      }\n    });\n    commenterName.value = '';\n    commenterMessage.value = '';\n  };\n  console.log('modalInner in function commentModal-comments.js', modalInner);\n  return modalInner;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/comments.js?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = {\n  comments: (allComments) => allComments.length,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/counter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _cc_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-api */ \"./src/cc-api.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _involvment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvment-api */ \"./src/involvment-api.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments */ \"./src/comments.js\");\n/* eslint-disable no-use-before-define */\n\n\n\n\n\n\nconst ulContainer = document.querySelector('[data-list-container]');\nconst overlay = document.getElementsByClassName('overlay')[0];\n\nconst listenAddLikeBtns = (pageNum, buttons) => {\n  buttons.forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.postLike(btn.dataset.addLike);\n      renderPage(pageNum);\n    });\n  });\n};\n\nconst listenOpenModalBtns = (buttons) => {\n  buttons.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      const { id } = e.target.parentElement;\n      const itemDetails = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.getDetailsForItem(id);\n      const {\n        title, url, creator, license, source, sourcePageUrl,\n      } = itemDetails;\n      overlay.classList.add('active');\n      const modal = document.createElement('div');\n      modal.classList.add('modal');\n      modal.classList.add('active');\n      modal.innerHTML = `\n      <p data-close-modal class=\"btn close_modal\"> Close </p>\n      <a href=\"${url}\" target=\"_blank\" class=\"image-placeholder\">\n          <img src=\"${url}\" alt=\"${title}\">\n      </a>\n      <p>${title}</p>\n      <div class=\"item-details\">\n        <p>Creator: ${(creator !== null) ? creator : 'Unknown'}</p>\n        <p>License: ${license}</p>      \n        <p>Source: ${source}</p>\n        <p><a href=\"${sourcePageUrl}\"> Visit Source</a></p>\n      </div>   \n      `;\n      document.querySelector('body').appendChild(modal);\n      modal.appendChild((0,_comments__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id));\n      listenCloseModalBtn(modal);\n    });\n  });\n};\n\nconst listenCloseModalBtn = (childToBeRemoved) => {\n  document.querySelector('[data-close-modal]').addEventListener('click', () => {\n    document.querySelector('body').removeChild(childToBeRemoved);\n    overlay.classList.remove('active');\n  });\n};\n\nconst renderPage = async (pageNum) => {\n  const processedData = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.processPageResult(pageNum);\n  const likes = await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.getLikes();\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateListHtml)(processedData, ulContainer, JSON.parse(likes));\n  listenAddLikeBtns(pageNum, document.querySelectorAll('[data-add-like]'));\n  listenOpenModalBtns(document.querySelectorAll('[data-open-modal]'));\n};\n\nrenderPage(5);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/involvment-api.js":
/*!*******************************!*\
  !*** ./src/involvment-api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst involvmentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst appKey = 'A15Lv9pSHXff9hlMtBe4';\nconst header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });\n\nconst getLikes = async () => {\n  const likesResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, { method: 'GET' });\n  const likes = await likesResult.text();\n  return likes;\n};\n\nconst postLike = async (itemId) => {\n  await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, {\n    method: 'POST',\n    headers: header,\n    body: JSON.stringify({\n      item_id: `${itemId}`,\n    }),\n  });\n};\n\nconst getComments = async (itemID) => {\n  const res = await fetch(\n    `${involvmentBaseUrl}apps/${appKey}/comments?item_id=${itemID}`,\n    { method: 'GET' },\n  );\n  if (!res.ok) {\n    return 'No comments available for this item';\n  }\n  const data = await res.json();\n  console.log('involvment.getComments returned data', data);\n  return data;\n};\n\nconst postComment = async (itemId, username, comment) => {\n  const res = await fetch(\n    `${involvmentBaseUrl}apps/${appKey}/comments/`,\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: itemId,\n        username,\n        comment,\n      }),\n      headers: header,\n    },\n  );\n  if (!res.ok) {\n    throw new Error(`API error! status: ${res.status}`);\n  } else {\n    const data = await res.text();\n    return data;\n  }\n};\n\n\n//# sourceURL=webpack://JS-Capstone/./src/involvment-api.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateListHtml\": () => (/* binding */ generateListHtml)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst readLikesNum = (likesArray, id) => {\n  const likedItem = likesArray.find((likeItem) => likeItem.item_id === id);\n  if (!likedItem) {\n    return 0;\n  }\n  return likedItem.likes;\n};\n\nconst generateListHtml = (list, ulContainer, likesArray) => {\n  let ulInner = '';\n  list.forEach((item) => {\n    const { id, thumbnailUrl, title } = item;\n    const likesNum = readLikesNum(likesArray, id);\n    ulInner += `\n    <li id=\"${id}\" class=\"item-card\">\n      <div data-open-modal class=\"card-top\">\n        <div class=\"thumbnail-placeholder\">\n          <img src=\"${thumbnailUrl}\" alt=\"thumbnail of ${title}\">\n        </div>\n        <p>${title.substring(0, 20)}...</p>\n      </div>\n      <div class=\"likes\">\n        <p data-add-like='${id}' class=\"btn\">Click to Like</p>\n        <p>${likesNum} likes</p>\n      </div>\n      <p data-open-modal class=\"btn\">Comments</p>\n    </li>`;\n  });\n  ulContainer.innerHTML = ulInner;\n};\n\n\n//# sourceURL=webpack://JS-Capstone/./src/utils.js?");

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