"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 8024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
// EXTERNAL MODULE: ./front/CustomLink.tsx
var CustomLink = __webpack_require__(7954);
// EXTERNAL MODULE: ./front/CustomImage.tsx
var CustomImage = __webpack_require__(297);
// EXTERNAL MODULE: ./front/Maybe.tsx
var Maybe = __webpack_require__(6209);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./front/NavLink.tsx




const NavLink = ({ href , onClick , children  })=>{
    const router = (0,router_.useRouter)();
    const { asPath  } = router;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: onClick,
            className: `${encodeURIComponent(asPath) === encodeURIComponent(href) && 'active ' || ''}nav-link`,
            children: children
        })
    }));
};
/* harmony default export */ const front_NavLink = (NavLink);

// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
// EXTERNAL MODULE: ./front/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(5014);
// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
// EXTERNAL MODULE: ./front/routes.ts
var routes = __webpack_require__(9139);
;// CONCATENATED MODULE: ./front/Navbar.tsx










const NavbarItem = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "nav-item",
        children: children
    })
;
const Navbar = ()=>{
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    const { setPage , setTab  } = external_react_default().useContext(ts/* AppContext */.Il);
    const clickHandler = ()=>(0,ts/* resetIndexState */.p8)(setPage, setTab, loggedInUser)
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                    href: routes/* default.home */.Z.home(),
                    onClick: clickHandler,
                    className: "navbar-brand",
                    children: config.appName.toLowerCase()
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "nav navbar-nav pull-xs-right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(front_NavLink, {
                                href: routes/* default.home */.Z.home(),
                                onClick: clickHandler,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Maybe/* default */.Z, {
                            test: loggedInUser,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(front_NavLink, {
                                        href: routes/* default.articleNew */.Z.articleNew(),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "ion-compose"
                                            }),
                                            "\xa0New Article"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(front_NavLink, {
                                        href: routes/* default.userEdit */.Z.userEdit(),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "ion-gear-a"
                                            }),
                                            "\xa0Settings"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(front_NavLink, {
                                        href: routes/* default.userView */.Z.userView(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                                                className: "user-pic",
                                                src: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.effectiveImage,
                                                alt: "your profile image"
                                            }),
                                            loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Maybe/* default */.Z, {
                            test: !loggedInUser,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(front_NavLink, {
                                        href: routes/* default.userLogin */.Z.userLogin(),
                                        children: "Sign in"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(front_NavLink, {
                                        href: routes/* default.userNew */.Z.userNew(),
                                        children: "Sign up"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const front_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.tsx










// Packages.












// In tree


function MyHead() {
    const { title  } = external_react_default().useContext(ts/* AppContext */.Il);
    const realTitle = title === undefined ? '' : title + ' - ';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, maximum-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: realTitle + config.appName
            })
        ]
    }));
}
function handleRouteChange(url) {
    window.gtag('config', config.googleAnalyticsId, {
        page_path: url
    });
}
const MyApp = ({ Component , pageProps  })=>{
    // Google Analytics page switches:
    // https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
    const router = (0,router_.useRouter)();
    external_react_default().useEffect(()=>{
        if (config.isProduction) {
            router.events.on('routeChangeComplete', handleRouteChange);
            return ()=>{
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(ts/* AppContextProvider */.iz, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_swr_.SWRConfig, {
            value: {
                // Do everything to prevent SWR from refreshing pages automatically.
                // When users want to check for new data, they can press F5, otherwise
                // we might overwrite what they were currently looking at.
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                shouldRetryOnError: false
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MyHead, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(front_Navbar, {
                }),
                config.isDemo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    style: {
                        marginBottom: '20px'
                    },
                    children: [
                        "Source code for this website:",
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/cirosantilli/node-express-sequelize-nextjs-realworld-example-app",
                            children: "https://github.com/cirosantilli/node-express-sequelize-nextjs-realworld-example-app"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                href: routes/* default.home */.Z.home(),
                                className: "logo-font",
                                children: config.appName.toLowerCase()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "attribution",
                                children: [
                                    ' ',
                                    "\xa9 2021. An interactive learning project from",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://thinkster.io",
                                        children: "Thinkster"
                                    }),
                                    ". Code licensed under MIT."
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,63,842,682,264], () => (__webpack_exec__(8024)));
module.exports = __webpack_exports__;

})();