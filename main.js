/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: bold;\r\n}\r\n\r\n* a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n* ul li {\r\n  list-style-type: none;\r\n}\r\n\r\n/*\r\n    ===========================\r\n    ******** Global ********\r\n    ===========================\r\n*/\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.8);\r\n  opacity: 0;\r\n  z-index: -5;\r\n}\r\n\r\n.overlay.active {\r\n  opacity: 1;\r\n  z-index: 5;\r\n}\r\n\r\n/*\r\n    ===========================\r\n    ******** Layout ********\r\n    ===========================\r\n*/\r\n#header {\r\n  width: 100%;\r\n  background-color: #fff;\r\n}\r\n\r\n.logo {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  color: hsl(0, 0%, 11%);\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n}\r\n\r\n.header-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 90%;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  height: 4rem;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 4rem;\r\n  height: 100%;\r\n}\r\n\r\n.d-navbar {\r\n  display: flex;\r\n  list-style-type: none;\r\n  height: 100%;\r\n}\r\n\r\n.d-navbar li {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.d-navbar li a {\r\n  color: hsl(0, 0%, 3%);\r\n}\r\n\r\n.a-navbar {\r\n  text-decoration: none;\r\n  height: 2em;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.navbar .humberger i {\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  color: hsl(0, 0%, 4%);\r\n}\r\n\r\n.navbar ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  gap: 16px;\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n/* End Header */\r\n\r\n.items-container {\r\n  width: 90%;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  gap: 1.5rem;\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-card {\r\n  min-width: 18rem;\r\n  max-width: 24rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  gap: 1rem;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0.25rem 0.25rem 0.5rem hsl(26, 32%, 29%);\r\n}\r\n\r\n.item-card .card-top {\r\n  width: 100%;\r\n  height: 65%;\r\n  position: relative;\r\n  background-color: hsl(0, 0%, 75%);\r\n}\r\n\r\n.item-card .card-top .thumbnail-placeholder {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.item-card .card-top img {\r\n  width: 100%;\r\n}\r\n\r\n.item-card .card-top,\r\n.item-card .card-top .thumbnail-placeholder,\r\n.item-card .card-top img {\r\n  border-top-left-radius: 0.5rem;\r\n  border-top-right-radius: 0.5rem;\r\n}\r\n\r\n.item-card .card-top p {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: hsl(39, 14%, 80%);\r\n  background-color: hsla(0, 0%, 13%, 0.7);\r\n}\r\n\r\n.item-card .likes {\r\n  padding: 0.5rem;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  flex-shrink: 0;\r\n  background-color: white;\r\n  bottom: 0;\r\n  border-style: solid;\r\n}\r\n\r\n/*\r\n    ===========================\r\n    ******** PopUp ********\r\n    ===========================\r\n*/\r\n.modal {\r\n  position: fixed;\r\n  top: 2.75rem;\r\n  left: 1rem;\r\n  right: 1rem;\r\n  bottom: 1rem;\r\n  border-radius: 1rem;\r\n  z-index: 10;\r\n  background-color: #fff;\r\n  height: unset;\r\n  overflow-y: auto;\r\n  transform: scale(0);\r\n  transition: 600ms ease-in-out;\r\n}\r\n\r\n.modal.active {\r\n  transform: scale(1);\r\n  transition: 600ms ease-in-out;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.close_modal {\r\n  position: absolute;\r\n  right: 1rem;\r\n  top: 1rem;\r\n}\r\n\r\n.modal.active .image-placeholder {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.modal.active .image-placeholder img {\r\n  height: 55vh;\r\n}\r\n\r\n.modal.active .modal-inner {\r\n  padding: 1rem;\r\n\r\n  /* height: 30vh;\r\n  overflow-y: scroll; */\r\n}\r\n\r\n.modal.active .modal-inner .comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.75rem;\r\n}\r\n\r\n/*\r\n    ============================================\r\n    ******* MEDIA QUERY *******\r\n    ============================================\r\n*/\r\n\r\n@media screen and (max-width: 600px) {\r\n  .d-navbar {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  .humberger {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 48rem) {\r\n  .items-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 64rem) {\r\n  .items-container {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processPageResult": () => (/* binding */ processPageResult),
/* harmony export */   "getDetailsForItem": () => (/* binding */ getDetailsForItem)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const ccBaseUrl = 'https://api.creativecommons.engineering/v1/images';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

const fetchPage = async (pageNum) => {
  const result = await fetch(`${ccBaseUrl}?categories=photograph&page=${pageNum}`, {
    method: 'GET',
    headers: header,
    mode: 'cors',
  });
  return result.json();
};

const fetchItemDetails = async (id) => {
  const result = await fetch(`${ccBaseUrl}/${id}`);
  return result.json();
};

const getPageData = async (pageNum) => {
  const dataFromApi = await fetchPage(pageNum);
  return dataFromApi.results;
};

const processPageResult = async (pageNum) => {
  const returnedDataForPage = await getPageData(pageNum);
  return [...returnedDataForPage]
    .map((item) => ({ id: item.id, thumbnailUrl: item.thumbnail, title: item.title }));
};

const getDetailsForItem = async (id) => {
  const itemDetails = await fetchItemDetails(id);
  return ({
    title: itemDetails.title,
    url: itemDetails.url,
    creator: itemDetails.creator,
    license: itemDetails.license,
    source: itemDetails.source,
    sourcePageUrl: itemDetails.foreign_landing_url,
  });
};


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateListHtml": () => (/* binding */ generateListHtml)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const readLikesNum = (likesArray, id) => {
  const likedItem = likesArray.find((likeItem) => likeItem.item_id === id);
  if (!likedItem) {
    return 0;
  }
  return likedItem.likes;
};

const generateListHtml = (list, ulContainer, likesArray) => {
  let ulInner = '';
  list.forEach((item) => {
    const { id, thumbnailUrl, title } = item;
    const likesNum = readLikesNum(likesArray, id);
    ulInner += `
    <li id="${id}" class="item-card">
      <div data-open-modal class="card-top">
        <div class="thumbnail-placeholder">
          <img src="${thumbnailUrl}" alt="thumbnail of ${title}">
        </div>
        <p>${title.substring(0, 20)}...</p>
      </div>
      <div class="likes">
        <p data-add-like='${id}' class="btn">Click to Like</p>
        <p>${likesNum} likes</p>
      </div>
      <p data-open-modal class="btn">Comments</p>
    </li>`;
  });
  ulContainer.innerHTML = ulInner;
};


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const involvmentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appKey = 'A15Lv9pSHXff9hlMtBe4';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

const getLikes = async () => {
  const likesResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, { method: 'GET' });
  const likes = await likesResult.text();
  return likes;
};

const postLike = async (itemId) => {
  await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      item_id: `${itemId}`,
    }),
  });
};

const getComments = async (itemID) => {
  const res = await fetch(
    `${involvmentBaseUrl}apps/${appKey}/comments?item_id=${itemID}`,
    { method: 'GET' },
  );
  if (!res.ok) {
    return 'No comments available for this item';
  }
  const data = await res.json();
  console.log('involvment.getComments returned data', data);
  return data;
};

const postComment = async (itemId, username, comment) => {
  const res = await fetch(
    `${involvmentBaseUrl}apps/${appKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: header,
    },
  );
  if (!res.ok) {
    throw new Error(`API error! status: ${res.status}`);
  } else {
    const data = await res.text();
    return data;
  }
};


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _involvment_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



const displayComments = (ul, userComment) => {
  const comment = document.createElement('li');
  comment.className = 'comment-li';
  const commentMeta = document.createElement('div');
  commentMeta.className = 'comment-meta';
  comment.appendChild(commentMeta);
  const name = document.createElement('p');
  name.style.textTransform = 'Capitalize';
  name.innerText = userComment.username;

  const date = document.createElement('p');
  date.className = 'no-comments';
  date.innerText = userComment.creation_date;
  commentMeta.appendChild(name);
  commentMeta.appendChild(date);
  const message = document.createElement('p');
  message.innerText = userComment.comment;
  message.style.textTransform = 'Capitalize';
  comment.appendChild(message);
  ul.appendChild(comment);
};

const commentModal = (itemID) => {
  let commentCounter = 0;
  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  // const modalHeader = document.createElement('div');
  // modalHeader.className = 'modal-header';
  // modalInner.appendChild(modalHeader);
  // const closeBtn = document.createElement('button');
  // closeBtn.className = 'close-modal icn-btn';
  // closeBtn.innerHTML = '&times;';
  // closeBtn.addEventListener('click', () => {
  //   modal.style.display = 'none';
  // });
  // modalHeader.appendChild(closeBtn);
  const modalDetails = document.createElement('div');
  modalDetails.className = 'modal-details';
  modalInner.appendChild(modalDetails);
  // const modalImg = document.createElement('img');
  // modalImg.className = 'modal-img';
  // modalImg.src = meal.strMealThumb;
  // modalDetails.appendChild(modalImg);
  const modalMeta = document.createElement('div');
  modalMeta.className = 'modal-meta';
  modalDetails.appendChild(modalMeta);
  // const modalTitle = document.createElement('h4');
  // modalTitle.className = 'modal-title';
  // modalTitle.innerText = meal.strMeal;
  // modalMeta.appendChild(modalTitle);
  // const modalDesc = document.createElement('p');
  // modalDesc.className = 'modal-desc';
  // modalDesc.innerText = meal.strInstructions;
  // modalMeta.appendChild(modalDesc);

  const allComments = document.createElement('div');
  allComments.className = 'all-comments';
  modalMeta.appendChild(allComments);
  const allCommentsTitle = document.createElement('h1');
  allCommentsTitle.className = 'all-comments-title';
  allCommentsTitle.innerText = 'All Comments';
  allComments.appendChild(allCommentsTitle);
  const commentUl = document.createElement('ul');
  commentUl.className = 'comment-ul';
  _involvment_api__WEBPACK_IMPORTED_MODULE_1__.getComments(itemID).then((data) => {
    if (data === 'No comments available for this item') {
      commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
    } else {
      console.log('data passed to counter.comments', data);
      commentCounter = _counter__WEBPACK_IMPORTED_MODULE_0__["default"].comments(data);
      allCommentsTitle.innerText = `All Comments(${commentCounter})`;
      data.forEach((userComment) => {
        displayComments(commentUl, userComment);
      });
    }
  });
  allComments.appendChild(commentUl);
  const form = document.createElement('form');
  form.className = 'comment-form';
  modalMeta.appendChild(form);
  const formTitle = document.createElement('h1');
  formTitle.className = 'comment-form-title';
  formTitle.innerText = 'Add a comment';
  form.appendChild(formTitle);
  const commenterName = document.createElement('input');
  commenterName.type = 'text';
  commenterName.name = 'commenter';
  commenterName.placeholder = 'Your Name';
  commenterName.attributes.required = true;
  form.appendChild(commenterName);
  const commenterMessage = document.createElement('textarea');
  commenterMessage.rows = 5;
  commenterMessage.className = 'comment-message';
  commenterMessage.placeholder = 'Your Message';
  form.appendChild(commenterMessage);
  const formButton = document.createElement('button');
  formButton.className = 'btn btn-alt';
  formButton.innerHTML = 'Add Comment';
  form.appendChild(formButton);
  formButton.onclick = (e) => {
    e.preventDefault();
    _involvment_api__WEBPACK_IMPORTED_MODULE_1__.postComment(
      itemID,
      commenterName.value,
      commenterMessage.value,
    ).then(() => {
      if (commentUl.hasChildNodes()) {
        commentUl.innerHTML = '';
        _involvment_api__WEBPACK_IMPORTED_MODULE_1__.getComments(itemID).then((data) => {
          if (data === 'No comments available for this item') {
            commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
          } else {
            allCommentsTitle.innerText = `All Comments(${commentCounter + 1})`;
            data.forEach((userComment) => {
              displayComments(commentUl, userComment);
            });
          }
        });
      }
    });
    commenterName.value = '';
    commenterMessage.value = '';
  };
  console.log('modalInner in function commentModal-comments.js', modalInner);
  return modalInner;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counter = {
  comments: (allComments) => allComments.length,
  loadedItems: (numLoaded) => numLoaded.length,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _cc_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _involvment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* eslint-disable no-use-before-define */







const ulContainer = document.querySelector('[data-list-container]');
const overlay = document.getElementsByClassName('overlay')[0];

const listenAddLikeBtns = (pageNum, buttons) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.postLike(btn.dataset.addLike);
      renderPage(pageNum);
    });
  });
};

const listenOpenModalBtns = (buttons) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { id } = e.target.parentElement;
      const itemDetails = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.getDetailsForItem(id);
      const {
        title, url, creator, license, source, sourcePageUrl,
      } = itemDetails;
      overlay.classList.add('active');
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.classList.add('active');
      modal.innerHTML = `
      <p data-close-modal class="btn close_modal"> Close </p>
      <a href="${url}" target="_blank" class="image-placeholder">
          <img src="${url}" alt="${title}">
      </a>
      <p>${title}</p>
      <div class="item-details">
        <p>Creator: ${(creator !== null) ? creator : 'Unknown'}</p>
        <p>License: ${license}</p>      
        <p>Source: ${source}</p>
        <p><a href="${sourcePageUrl}"> Visit Source</a></p>
      </div>   
      `;
      document.querySelector('body').appendChild(modal);
      modal.appendChild((0,_comments__WEBPACK_IMPORTED_MODULE_4__["default"])(id));
      listenCloseModalBtn(modal);
    });
  });
};

const listenCloseModalBtn = (childToBeRemoved) => {
  document.querySelector('[data-close-modal]').addEventListener('click', () => {
    document.querySelector('body').removeChild(childToBeRemoved);
    overlay.classList.remove('active');
  });
};

const renderPage = async (pageNum) => {
  const processedData = await _cc_api__WEBPACK_IMPORTED_MODULE_1__.processPageResult(pageNum);
  const likes = await _involvment_api__WEBPACK_IMPORTED_MODULE_3__.getLikes();
  const numOfItems = _counter__WEBPACK_IMPORTED_MODULE_5__["default"].loadedItems(processedData);
  const listHeader = document.querySelector('[data-loaded-items]');
  listHeader.textContent = `Category: Photographs.    Items loaded: ${numOfItems}`;
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateListHtml)(processedData, ulContainer, JSON.parse(likes));
  listenAddLikeBtns(pageNum, document.querySelectorAll('[data-add-like]'));
  listenOpenModalBtns(document.querySelectorAll('[data-open-modal]'));
};

renderPage(37);

})();

/******/ })()
;