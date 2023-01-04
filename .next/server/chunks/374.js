"use strict";
exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_1__);


// https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
// https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs
const handleBrokenImage = (e)=>{
    e.target.src = front_config__WEBPACK_IMPORTED_MODULE_1__.defaultProfileImage;
    e.target.onerror = null;
};
const CustomImage = ({ src , alt , className  })=>{
    const classes = [
        'hide-text'
    ];
    if (className) {
        classes.push(className);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        alt,
        src,
        onError: handleBrokenImage,
        className: classes.join(' ')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomImage);


/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FavoriteArticleButtonContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5014);






const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';
const FavoriteArticleButtonContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext(undefined);
const FavoriteArticleButton = (props)=>{
    const loggedInUser = (0,front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { favorited , setFavorited , favoritesCount , setFavoritesCount  } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(FavoriteArticleButtonContext);
    let buttonText;
    if (props.showText) {
        if (favorited) {
            buttonText = 'Unfavorite';
        } else {
            buttonText = 'Favorite';
        }
        buttonText = ' ' + buttonText + ' Article ';
    } else {
        buttonText = '';
    }
    const handleClickFavorite = async ()=>{
        if (!loggedInUser) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/user/login`);
            return;
        }
        setFavorited((prev)=>!prev
        );
        setFavoritesCount((prev)=>prev + (favorited ? -1 : 1)
        );
        try {
            if (favorited) {
                await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"](`${front_config__WEBPACK_IMPORTED_MODULE_4__.apiPath}/articles/${props.slug}/favorite`, {
                    headers: {
                        Authorization: `Token ${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token}`
                    }
                });
            } else {
                await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_4__.apiPath}/articles/${props.slug}/favorite`, {
                }, {
                    headers: {
                        Authorization: `Token ${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token}`
                    }
                });
            }
        } catch (error) {
            setFavorited((prev)=>!prev
            );
            setFavoritesCount((prev)=>prev + (favorited ? 1 : -1)
            );
        }
    };
    let count = favoritesCount;
    if (props.showText) {
        count = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "counter",
            children: [
                "(",
                count,
                ")"
            ]
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS,
        onClick: ()=>handleClickFavorite()
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "ion-heart"
            }),
            props.showText ? ' ' : '',
            buttonText,
            " ",
            count
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteArticleButton);


/***/ }),

/***/ 9435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoadingSpinner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "loading-spinner"
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);


/***/ }),

/***/ 6209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Maybe = ({ test , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: test && children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Maybe);


/***/ }),

/***/ 8751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Fetcher)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const updateOptions = ()=>{
    if (true) return {
    };
    if (!window.localStorage.user) return {
    };
    if (Object.keys(window.localStorage.user).length === 0) return {
    };
    const user = JSON.parse(window.localStorage.user);
    if (user.token) {
        return {
            headers: {
                Authorization: `Token ${user.token}`
            }
        };
    }
};
function Fetcher(isFallback = false) {
    return async (url)=>{
        if (!isFallback) {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, updateOptions());
            return data;
        }
    };
};


/***/ }),

/***/ 7059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', {
        month: 'long'
    });
    return `${month} ${date.getDate()}, ${date.getFullYear()}`;
}


/***/ })

};
;