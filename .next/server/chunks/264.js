"use strict";
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 7954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

/* Helper for a link that accepts parameters such as className */ 

const CustomLink = ({ className , href , onClick , children , shallow  })=>{
    if (shallow === undefined) {
        shallow = false;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: href,
        passHref: true,
        shallow: shallow,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: onClick,
            className: className || '',
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);


/***/ }),

/***/ 9139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    home: ()=>`/`
    ,
    articleEdit: (slug)=>`/editor/${slug}`
    ,
    articleNew: ()=>`/editor`
    ,
    articleView: (slug)=>`/article/${slug}`
    ,
    userEdit: ()=>`/settings`
    ,
    userLogin: ()=>`/user/login`
    ,
    userNew: ()=>`/user/register`
    ,
    userView: (uid)=>`/profile/${uid}`
    ,
    userViewLikes: (uid)=>`/profile/${uid}/favorites`
});


/***/ })

};
;