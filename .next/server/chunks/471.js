"use strict";
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ListErrors = ({ errors  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "error-messages",
        children: Object.keys(errors).map((key)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    key,
                    ":",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: errors[key]
                        })
                    })
                ]
            }, key));
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListErrors);


/***/ }),

/***/ 4471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./front/CustomLink.tsx
var CustomLink = __webpack_require__(7954);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./front.ts
var front = __webpack_require__(9856);
// EXTERNAL MODULE: ./front/ListErrors.tsx
var ListErrors = __webpack_require__(9608);
// EXTERNAL MODULE: ./front/api/user.ts
var user = __webpack_require__(7161);
// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
;// CONCATENATED MODULE: ./front/LoginForm.tsx







const LoginForm = ({ register =false  })=>{
    const [isLoading, setLoading] = external_react_default().useState(false);
    const [errors, setErrors] = external_react_default().useState([]);
    const [username, setUsername] = external_react_default().useState('');
    const [email, setEmail] = external_react_default().useState('');
    const [password, setPassword] = external_react_default().useState('');
    const handleUsernameChange = external_react_default().useCallback((e)=>setUsername(e.target.value)
    , [
        setUsername
    ]);
    const handleEmailChange = external_react_default().useCallback((e)=>setEmail(e.target.value)
    , []);
    const handlePasswordChange = external_react_default().useCallback((e)=>setPassword(e.target.value)
    , []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            let data, status;
            if (register) {
                ({ data , status  } = await user/* default.register */.Z.register(username, email, password));
            } else {
                ({ data , status  } = await user/* default.login */.Z.login(email, password));
            }
            if (status !== 200 && (data === null || data === void 0 ? void 0 : data.errors)) {
                setErrors(data.errors);
            }
            if (data === null || data === void 0 ? void 0 : data.user) {
                await (0,front/* setupUserLocalStorage */.uh)(data, setErrors);
                router_default().push('/');
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    (0,ts/* useCtrlEnterSubmit */.hy)(handleSubmit);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ListErrors/* default */.Z, {
                errors: errors
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                    children: [
                        register && /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                            className: "form-group",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-control form-control-lg",
                                type: "text",
                                placeholder: "Username",
                                value: username,
                                onChange: handleUsernameChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                            className: "form-group",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-control form-control-lg",
                                type: "email",
                                placeholder: "Email",
                                value: email,
                                onChange: handleEmailChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                            className: "form-group",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-control form-control-lg",
                                type: "password",
                                placeholder: "Password",
                                value: password,
                                onChange: handlePasswordChange
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-lg btn-primary pull-xs-right",
                            type: "submit",
                            disabled: isLoading,
                            children: `${register ? 'Sign up' : 'Sign in'}`
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const front_LoginForm = (LoginForm);

// EXTERNAL MODULE: ./front/routes.ts
var routes = __webpack_require__(9139);
;// CONCATENATED MODULE: ./front/LoginPage.tsx







const LoginPageHoc = ({ register =false  })=>{
    const title = register ? 'Sign up' : 'Sign in';
    return function Loginpage() {
        const { setTitle  } = external_react_default().useContext(ts/* AppContext */.Il);
        external_react_default().useEffect(()=>{
            setTitle(title);
        }, [
            setTitle
        ]);
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: register ? 'Please register before login' : 'Please login to use fully-featured next-realworld site. (Post articles, comments, and like, follow etc.)'
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "auth-page",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container page",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-6 offset-md-3 col-xs-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-xs-center",
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomLink/* default */.Z, {
                                            href: register ? routes/* default.userLogin */.Z.userLogin() : routes/* default.userNew */.Z.userNew(),
                                            children: [
                                                `${register ? 'Have' : 'Need'}`,
                                                " an account?"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(front_LoginForm, {
                                        register: register
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        }));
    };
};
/* harmony default export */ const LoginPage = (LoginPageHoc);


/***/ })

};
;