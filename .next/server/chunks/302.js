"use strict";
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 8302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ FollowUserButtonContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var front_api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7161);
/* harmony import */ var front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5014);





const FollowUserButtonContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const FollowUserButton = ({ profile  })=>{
    const loggedInUser = (0,front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { following , setFollowing  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(FollowUserButtonContext);
    const { username  } = profile;
    const isCurrentUser = loggedInUser && username === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username);
    if (loggedInUser && isCurrentUser) {
        return null;
    }
    const handleClick = (e)=>{
        e.preventDefault();
        if (!loggedInUser) {
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/user/login`);
            return;
        }
        if (following) {
            front_api_user__WEBPACK_IMPORTED_MODULE_3__/* ["default"].unfollow */ .Z.unfollow(username);
        } else {
            front_api_user__WEBPACK_IMPORTED_MODULE_3__/* ["default"].follow */ .Z.follow(username);
        }
        setFollowing(!following);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `btn btn-sm action-btn ${following ? 'btn-secondary' : 'btn-outline-secondary'}`,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "ion-plus-round"
            }),
            " \xa0",
            ' ',
            following ? 'Unfollow' : 'Follow',
            " ",
            username
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowUserButton);


/***/ })

};
;