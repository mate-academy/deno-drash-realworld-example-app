"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 9856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HI": () => (/* binding */ AUTH_COOKIE_NAME),
/* harmony export */   "wz": () => (/* binding */ AUTH_LOCAL_STORAGE_NAME),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "aX": () => (/* binding */ getCookieFromReq),
/* harmony export */   "kT": () => (/* binding */ deleteCookie),
/* harmony export */   "uh": () => (/* binding */ setupUserLocalStorage)
/* harmony export */ });
/* unused harmony exports setCookie, setCookies, getCookieFromString, getCookiesFromString */
/* harmony import */ var front_api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7161);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);


const AUTH_COOKIE_NAME = 'auth';
const AUTH_LOCAL_STORAGE_NAME = 'user';
// https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie/38699214#38699214
function setCookie(name, value, days, path = '/') {
    let delta;
    if (days === undefined) {
        delta = Number.MAX_SAFE_INTEGER;
    } else {
        delta = days * 86400000;
    }
    const expires = new Date(Date.now() + delta).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=${path}`;
}
function setCookies(cookieDict, days, path = '/') {
    for(const key in cookieDict){
        setCookie(key, cookieDict[key], days, path);
    }
}
function getCookie(name) {
    return getCookieFromString(document.cookie, name);
}
function getCookieFromReq(req, name) {
    const cookie = req.headers.cookie;
    if (cookie) {
        return getCookieFromString(cookie, name);
    } else {
        return null;
    }
}
function getCookieFromString(s, name) {
    return getCookiesFromString(s)[name];
}
// https://stackoverflow.com/questions/5047346/converting-strings-like-document-cookie-to-objects
function getCookiesFromString(s) {
    return s.split('; ').reduce((prev, current)=>{
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
    }, {
    });
}
function deleteCookie(name, path = '/') {
    setCookie(name, '', -1, path);
}
async function setupUserLocalStorage(data, setErrors) {
    // We fetch from /profiles/:username again because the return from /users/login above
    // does not contain the image placeholder.
    const { data: profileData , status: profileStatus  } = await front_api_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(data.user.username);
    if (profileStatus !== 200) {
        setErrors(profileData.errors);
    }
    data.user.effectiveImage = profileData.profile.image;
    window.localStorage.setItem(AUTH_LOCAL_STORAGE_NAME, JSON.stringify(data.user));
    setCookie(AUTH_COOKIE_NAME, data.user.token);
    (0,swr__WEBPACK_IMPORTED_MODULE_1__.mutate)(AUTH_LOCAL_STORAGE_NAME, data.user);
}


/***/ }),

/***/ 7161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_1__);


const UserAPI = {
    current: async ()=>{
        const user = window.localStorage.getItem('user');
        const token = user === null || user === void 0 ? void 0 : user.token;
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/user`, {
                headers: {
                    Authorization: `Token ${encodeURIComponent(token)}`
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    login: async (email, password)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/users/login`, JSON.stringify({
                user: {
                    email,
                    password
                }
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    register: async (username, email, password)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/users`, JSON.stringify({
                user: {
                    username,
                    email,
                    password
                }
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    save: async (user)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/user`, JSON.stringify({
                user
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    follow: async (username)=>{
        const user = JSON.parse(window.localStorage.getItem('user'));
        const token = user === null || user === void 0 ? void 0 : user.token;
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/profiles/${username}/follow`, {
            }, {
                headers: {
                    Authorization: `Token ${encodeURIComponent(token)}`
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    unfollow: async (username)=>{
        const user = JSON.parse(window.localStorage.getItem('user'));
        const token = user === null || user === void 0 ? void 0 : user.token;
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/profiles/${username}/follow`, {
                headers: {
                    Authorization: `Token ${encodeURIComponent(token)}`
                }
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    get: async (username)=>{
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/profiles/${username}`);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAPI);


/***/ }),

/***/ 4041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkLogin = (loggedInUser)=>{
    return !!loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.constructor) === Object && Object.keys(loggedInUser).length !== 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLogin);


/***/ }),

/***/ 9267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const localStorageHelper = (key)=>{
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageHelper);


/***/ }),

/***/ 1682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Il": () => (/* binding */ AppContext),
/* harmony export */   "p8": () => (/* binding */ resetIndexState),
/* harmony export */   "iz": () => (/* binding */ AppContextProvider),
/* harmony export */   "hy": () => (/* binding */ useCtrlEnterSubmit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5014);



const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    page: 0,
    setPage: undefined,
    tab: '',
    setTab: undefined,
    tag: '',
    setTag: undefined,
    title: '',
    setTitle: undefined
});
function getTabForLoggedInUser(loggedInUser) {
    if (loggedInUser === undefined) {
        return undefined;
    } else {
        return loggedInUser === null ? 'global' : 'feed';
    }
}
const resetIndexState = (setPage, setTab, loggedInUser)=>{
    setPage(0);
    setTab(getTabForLoggedInUser(loggedInUser));
};
// Global state.
const AppContextProvider = ({ children  })=>{
    const loggedInUser = (0,front_useLoggedInUser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    // This state has to be lifted to app tolevel because there
    // are many things that need to set it from outside of article lists,
    // without recreationg the article list, notably Tags list
    // (when you click a tag, the list updates to filter by it,
    // and you want to go to page 0) and Navigation links (if you
    // are in global while logged in, it will move you to feed,
    // and should reset the page to 0).
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(getTabForLoggedInUser(loggedInUser));
    const [tag, setTag] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            page,
            setPage,
            tab,
            setTab,
            tag,
            setTag,
            title,
            setTitle
        },
        children: children
    }));
};
function useCtrlEnterSubmit(handleSubmit) {
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        function ctrlEnterListener(e) {
            if (e.code === 'Enter' && e.ctrlKey) {
                handleSubmit(e);
            }
        }
        document.addEventListener('keydown', ctrlEnterListener);
        return ()=>{
            document.removeEventListener('keydown', ctrlEnterListener);
        };
    });
}


/***/ }),

/***/ 5014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLoggedInUser)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9856);
/* harmony import */ var front_checkLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var front_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9267);




function useLoggedInUser() {
    const { data: authCookie  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('auth/cookie', ()=>{
        const ret = (0,front__WEBPACK_IMPORTED_MODULE_1__/* .getCookie */ .ej)(front__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_COOKIE_NAME */ .HI);
        if (!ret) {
            // E.g. if the test database was nuked, the GET request sees wrong auth,
            // and removes the cookie with a HEADER. And now here we noticed that on
            // the JavaSript, so we get rid of it. Notably, this removes the logged in
            // user from the navbar.
            //
            // This also happens if a user account is rotated on the demo database,
            // and the user comes back some time later.
            window.localStorage.removeItem(front__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_LOCAL_STORAGE_NAME */ .wz);
        }
        return ret;
    });
    const { data: loggedInUser  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(()=>authCookie ? 'user' : null
    , front_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    if (loggedInUser === undefined) return loggedInUser;
    const isLoggedIn = (0,front_checkLogin__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(loggedInUser);
    if (isLoggedIn) {
        return loggedInUser;
    } else {
        return null;
    }
};


/***/ })

};
;