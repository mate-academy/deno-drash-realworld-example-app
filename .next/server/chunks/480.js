"use strict";
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 4480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ArticleEditorHoc)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./front/ListErrors.tsx
var ListErrors = __webpack_require__(9608);
// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
;// CONCATENATED MODULE: ./front/TagInput.tsx



const TagInput = ({ tagList , addTag , removeTag  })=>{
    const [tag1, setTag] = external_react_default().useState('');
    const changeTagInput = (e)=>setTag(e.target.value)
    ;
    const handleTagInputKeyDown = (e)=>{
        switch(e.keyCode){
            case 13:
            case 9:
            case 188:
                if (e.keyCode !== 9) e.preventDefault();
                handleAddTag();
                break;
            default:
                break;
        }
    };
    const handleAddTag = ()=>{
        if (tag1) {
            addTag(tag1);
            setTag('');
        }
    };
    const handleRemoveTag = (tag)=>{
        removeTag(tag);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
            className: "form-group",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "form-control",
                    type: "text",
                    placeholder: config.isDemo ? 'Press Enter, Tab or Comma to add a tag' : 'Enter tags',
                    value: tag1,
                    onChange: changeTagInput,
                    onBlur: handleAddTag,
                    onKeyDown: handleTagInputKeyDown
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tag-list",
                    children: tagList.map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "tag-default tag-pill",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ion-close-round",
                                    onClick: ()=>handleRemoveTag(tag)
                                }),
                                tag
                            ]
                        }, index)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const front_TagInput = (TagInput);

// EXTERNAL MODULE: ./front/api/article.ts
var article = __webpack_require__(2280);
// EXTERNAL MODULE: ./front/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(5014);
// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
;// CONCATENATED MODULE: ./front/ArticleEditor.tsx









function editorReducer(state, action) {
    switch(action.type){
        case 'SET_TITLE':
            return {
                ...state,
                title: action.text
            };
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.text
            };
        case 'SET_BODY':
            return {
                ...state,
                body: action.text
            };
        case 'ADD_TAG':
            return {
                ...state,
                tagList: state.tagList.concat(action.tag)
            };
        case 'REMOVE_TAG':
            return {
                ...state,
                tagList: state.tagList.filter((tag)=>tag !== action.tag
                )
            };
        default:
            throw new Error('Unhandled action');
    }
}
function ArticleEditorHoc(isnew = false) {
    return function ArticleEditor({ article: initialArticle  }) {
        let initialState;
        if (initialArticle) {
            initialState = {
                title: initialArticle.title,
                description: initialArticle.description,
                body: initialArticle.body,
                tagList: initialArticle.tagList
            };
        } else {
            initialState = {
                title: '',
                description: '',
                body: '',
                tagList: []
            };
        }
        const [isLoading, setLoading] = external_react_default().useState(false);
        const [errors, setErrors] = external_react_default().useState([]);
        const [posting, dispatch] = external_react_default().useReducer(editorReducer, initialState);
        const loggedInUser = (0,useLoggedInUser/* default */.Z)();
        const router = (0,router_.useRouter)();
        const handleTitle = (e)=>dispatch({
                type: 'SET_TITLE',
                text: e.target.value
            })
        ;
        const handleDescription = (e)=>dispatch({
                type: 'SET_DESCRIPTION',
                text: e.target.value
            })
        ;
        const handleBody = (e)=>dispatch({
                type: 'SET_BODY',
                text: e.target.value
            })
        ;
        const addTag = (tag)=>dispatch({
                type: 'ADD_TAG',
                tag: tag
            })
        ;
        const removeTag = (tag)=>dispatch({
                type: 'REMOVE_TAG',
                tag: tag
            })
        ;
        const handleSubmit = async (e)=>{
            e.preventDefault();
            setLoading(true);
            let data, status;
            if (isnew) {
                ({ data , status  } = await article/* default.create */.Z.create(posting, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token));
            } else {
                ({ data , status  } = await article/* default.update */.Z.update(posting, router.query.pid, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token));
            }
            setLoading(false);
            if (status !== 200) {
                setErrors(data.errors);
            }
            router_default().push(`/article/${data.article.slug}`);
        };
        (0,ts/* useCtrlEnterSubmit */.hy)(handleSubmit);
        const { setTitle  } = external_react_default().useContext(ts/* AppContext */.Il);
        external_react_default().useEffect(()=>{
            setTitle(isnew ? 'New article' : `Editing: ${initialArticle === null || initialArticle === void 0 ? void 0 : initialArticle.title}`);
        }, [
            setTitle,
            initialArticle === null || initialArticle === void 0 ? void 0 : initialArticle.title
        ]);
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "editor-page",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container page",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-10 offset-md-1 col-xs-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ListErrors/* default */.Z, {
                                    errors: errors
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-control form-control-lg",
                                                    type: "text",
                                                    placeholder: "Article Title",
                                                    value: posting.title,
                                                    onChange: handleTitle
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-control",
                                                    type: "text",
                                                    placeholder: "What's this article about?",
                                                    value: posting.description,
                                                    onChange: handleDescription
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                    className: "form-control",
                                                    rows: 8,
                                                    placeholder: "Write your article (in markdown)",
                                                    value: posting.body,
                                                    onChange: handleBody
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(front_TagInput, {
                                                tagList: posting.tagList,
                                                addTag: addTag,
                                                removeTag: removeTag
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "btn btn-lg pull-xs-right btn-primary",
                                                type: "button",
                                                disabled: isLoading,
                                                onClick: handleSubmit,
                                                children: [
                                                    isnew ? 'Publish' : 'Update',
                                                    " Article"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        }));
    };
};


/***/ }),

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


/***/ })

};
;