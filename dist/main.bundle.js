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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\n/* harmony import */ var _modules_render_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render/app */ \"./src/modules/render/app.js\");\n\n\n\n\n\n// import renderMeals from './modules/app';\n\nconst mealCounter = document.getElementById('meal-counter');\n\nconst endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\nconst likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';\nconst displayMeals = () => {\n  Promise.all([\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMeals(`${endpoint}`),\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes(likesEndpoint),\n  ]).then((data) => {\n    (0,_modules_render_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data[0], data[1]);\n    const length = _modules_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"].meals(data[0].meals);\n    mealCounter.innerText = length;\n  });\n};\n\nwindow.addEventListener('load', displayMeals);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\nconst counter = {\n  meals: (allMeals) => allMeals.length,\n  comments: (allComments) => allComments.length,\n  // reservation: (allReservations) => allReservations.length,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\nconst API = {\n  getMeals: async (endpoint) => {\n    const res = await fetch(`${endpoint}`, { method: 'GET' });\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.json();\n      return data;\n    }\n  },\n\n  getLikes: async () => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\n      { method: 'GET' },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.json();\n      return data;\n    }\n  },\n\n  postLike: async (itemId) => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: itemId,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.text();\n      return data;\n    }\n  },\n\n  getComments: async (mealId) => {\n    const res = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments?item_id=${mealId}`,\n      { method: 'GET' },\n    );\n    if (!res.ok) {\n      return 'No comments available for this meal';\n    }\n    const data = await res.json();\n    return data;\n  },\n\n  postComment: async (itemId, username, comment) => {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments/',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: itemId,\n          username,\n          comment,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.text();\n      return data;\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable indent */\n/* eslint-disable linebreak-style */\nconst involvement = {\n  likes: (likesData, mealID) => {\n    const mealLikes = likesData.find((i) => i.item_id === mealID);\n    if (mealLikes !== undefined) {\n      return mealLikes.likes;\n    }\n    return 0;\n  },\n\n  comments: (commentsData, mealID) => {\n    const commentLists = commentsData.find((i) => i.item_id === mealID);\n    if (commentLists !== undefined) {\n      return commentLists.comments;\n    }\n    return 0;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvement);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/render/app.js":
/*!***********************************!*\
  !*** ./src/modules/render/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _involvement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../involvement */ \"./src/modules/involvement.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ \"./src/modules/render/comments.js\");\n/* eslint-disable no-undef */\n/* eslint-disable import/extensions */\n/* eslint-disable linebreak-style */\n\n\n\n\nconst ul = document.getElementById('meal-list');\nconst commentModal = document.getElementById('modal-comment');\n\n// const renderModal = (meal) => {\n//   const modalInner = document.createElement('div');\n//   modalInner.className = 'modal-inner';\n\n//   const modalHeader = document.createElement('div');\n//   modalHeader.className = 'modal-header';\n//   modalInner.appendChild(modalHeader);\n\n//   const closeBtn = document.createElement('button');\n//   closeBtn.className = 'close-modal icn-btn';\n//   closeBtn.innerHTML = '&times;';\n//   closeBtn.addEventListener('click', () => {\n//     commentModal.style.display = 'none';\n//   });\n//   modalHeader.appendChild(closeBtn);\n\n//   const modalDetails = document.createElement('div');\n//   modalDetails.className = 'modal-details';\n//   modalInner.appendChild(modalDetails);\n\n//   const modalImg = document.createElement('img');\n//   modalImg.className = 'modal-img';\n//   modalImg.src = meal.strMealThumb;\n//   modalDetails.appendChild(modalImg);\n\n//   const modalMeta = document.createElement('div');\n//   modalMeta.className = 'modal-meta';\n//   modalDetails.appendChild(modalMeta);\n\n//   const modalTitle = document.createElement('h4');\n//   modalTitle.className = 'modal-title';\n//   modalTitle.innerText = meal.strMeal;\n//   modalMeta.appendChild(modalTitle);\n\n//   const modalDesc = document.createElement('p');\n//   modalDesc.className = 'modal-desc';\n//   modalDesc.innerText = meal.strInstructions;\n//   modalMeta.appendChild(modalDesc);\n//   commentModal.appendChild(modalInner);\n// };\n\nconst meals = (mealsData, likesData) => {\n  const { meals } = mealsData;\n\n  meals.forEach((mealItem) => {\n    const li = document.createElement('li');\n    li.className = 'meal-item';\n\n    const img = document.createElement('img');\n    img.src = mealItem.strMealThumb;\n    img.className = 'meal-image';\n    li.appendChild(img);\n\n    const div = document.createElement('div');\n    div.className = 'meal-meta';\n    li.appendChild(div);\n\n    const p = document.createElement('p');\n    p.className = 'meal-title';\n    p.innerText = mealItem.strMeal;\n    div.appendChild(p);\n\n    const likeSection = document.createElement('div');\n    likeSection.className = 'like-section';\n    div.appendChild(likeSection);\n    const likeBtn = document.createElement('button');\n    likeBtn.className = 'icn-btn like-btn';\n\n    likeSection.appendChild(likeBtn);\n    const likeIcon = document.createElement('i');\n    likeIcon.className = 'far fa-heart';\n\n    likeBtn.appendChild(likeIcon);\n    const likeCount = document.createElement('p');\n    likeCount.className = 'like-count';\n    likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\n    likeBtn.onclick = async () => {\n      await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLike(mealItem.idMeal);\n      const likesData = await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes().then((data) => data);\n      likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\n    };\n    likeSection.appendChild(likeCount);\n\n    const commentBtn = document.createElement('button');\n    commentBtn.className = 'btn';\n    commentBtn.innerText = 'Comment';\n    commentBtn.addEventListener('click', () => {\n      if (commentModal.hasChildNodes()) {\n        commentModal.innerHTML = '';\n      } else {\n        (0,_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mealItem);\n        commentModal.style.display = 'block';\n      }\n    });\n    li.appendChild(commentBtn);\n    ul.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meals);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/app.js?");

/***/ }),

/***/ "./src/modules/render/comments.js":
/*!****************************************!*\
  !*** ./src/modules/render/comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter */ \"./src/modules/counter.js\");\n/* eslint-disable linebreak-style */\n\n\n\nconst modal = document.getElementById('modal-comment');\n\nconst displayComments = (ul, userComment) => {\n  const comment = document.createElement('li');\n  comment.className = 'comment-li';\n  const commentMeta = document.createElement('div');\n  commentMeta.className = 'comment-meta';\n  comment.appendChild(commentMeta);\n  const name = document.createElement('p');\n  name.style.textTransform = 'Capitalize';\n  name.innerText = userComment.username;\n\n  const date = document.createElement('p');\n  date.className = 'no-comments';\n  date.innerText = userComment.creation_date;\n  commentMeta.appendChild(name);\n  commentMeta.appendChild(date);\n  const message = document.createElement('p');\n  message.innerText = userComment.comment;\n  message.style.textTransform = 'Capitalize';\n  comment.appendChild(message);\n  ul.appendChild(comment);\n};\n\nconst commentModal = (meal) => {\n  const modalInner = document.createElement('div');\n  modalInner.className = 'modal-inner';\n  const modalHeader = document.createElement('div');\n  modalHeader.className = 'modal-header';\n  modalInner.appendChild(modalHeader);\n  const closeBtn = document.createElement('button');\n  closeBtn.className = 'close-modal icn-btn';\n  closeBtn.innerHTML = '&times;';\n  closeBtn.addEventListener('click', () => {\n    modal.style.display = 'none';\n  });\n  modalHeader.appendChild(closeBtn);\n  const modalDetails = document.createElement('div');\n  modalDetails.className = 'modal-details';\n  modalInner.appendChild(modalDetails);\n  const modalImg = document.createElement('img');\n  modalImg.className = 'modal-img';\n  modalImg.src = meal.strMealThumb;\n  modalDetails.appendChild(modalImg);\n  const modalMeta = document.createElement('div');\n  modalMeta.className = 'modal-meta';\n  modalDetails.appendChild(modalMeta);\n  const modalTitle = document.createElement('h4');\n  modalTitle.className = 'modal-title';\n  modalTitle.innerText = meal.strMeal;\n  modalMeta.appendChild(modalTitle);\n  const modalDesc = document.createElement('p');\n  modalDesc.className = 'modal-desc';\n  modalDesc.innerText = meal.strInstructions;\n  modalMeta.appendChild(modalDesc);\n\n  const allComments = document.createElement('div');\n  allComments.className = 'all-comments';\n  modalMeta.appendChild(allComments);\n  const allCommentsTitle = document.createElement('h1');\n  allCommentsTitle.className = 'all-comments-title';\n  allCommentsTitle.innerText = 'All Comments';\n  allComments.appendChild(allCommentsTitle);\n  const commentUl = document.createElement('ul');\n  commentUl.className = 'comment-ul';\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\n    if (data === 'No comments available for this meal') {\n      commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n    } else {\n      const commentCounter = _counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].comments(data);\n      allCommentsTitle.innerText = `All Comments(${commentCounter})`;\n      data.forEach((userComment) => {\n        displayComments(commentUl, userComment);\n      });\n    }\n  });\n  allComments.appendChild(commentUl);\n  const form = document.createElement('form');\n  form.className = 'comment-form';\n  modalMeta.appendChild(form);\n  const formTitle = document.createElement('h1');\n  formTitle.className = 'comment-form-title';\n  formTitle.innerText = 'Add a comment';\n  form.appendChild(formTitle);\n  const commenterName = document.createElement('input');\n  commenterName.type = 'text';\n  commenterName.name = 'commenter';\n  commenterName.placeholder = 'Your Name';\n  commenterName.attributes.required = true;\n  form.appendChild(commenterName);\n  const commenterMessage = document.createElement('textarea');\n  commenterMessage.rows = 5;\n  commenterMessage.className = 'comment-message';\n  commenterMessage.placeholder = 'Your Message';\n  form.appendChild(commenterMessage);\n  const formButton = document.createElement('button');\n  formButton.className = 'btn btn-alt';\n  formButton.innerHTML = 'Add Comment';\n  form.appendChild(formButton);\n  formButton.onclick = (e) => {\n    e.preventDefault();\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postComment(\n      meal.idMeal,\n      commenterName.value,\n      commenterMessage.value,\n    ).then(() => {\n      if (commentUl.hasChildNodes()) {\n        commentUl.innerHTML = '';\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\n          if (data === 'No comments available for this meal') {\n            commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\n          } else {\n            data.forEach((userComment) => {\n              displayComments(commentUl, userComment);\n            });\n          }\n        });\n      }\n    });\n    commenterName.value = '';\n    commenterMessage.value = '';\n  };\n\n  modal.appendChild(modalInner);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/comments.js?");

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
/******/ 			// no module.id needed
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