"use strict";
(() => {
var exports = {};
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 8762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _pid_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "marked"
const external_marked_namespaceObject = require("marked");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./front/FavoriteArticleButton.tsx
var FavoriteArticleButton = __webpack_require__(5352);
// EXTERNAL MODULE: ./front/FollowUserButton.tsx
var FollowUserButton = __webpack_require__(8302);
// EXTERNAL MODULE: ./front/CustomLink.tsx
var CustomLink = __webpack_require__(7954);
// EXTERNAL MODULE: ./front/Maybe.tsx
var Maybe = __webpack_require__(6209);
// EXTERNAL MODULE: ./front/api/article.ts
var api_article = __webpack_require__(2280);
// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ./front/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(5014);
// EXTERNAL MODULE: ./front/routes.ts
var routes = __webpack_require__(9139);
;// CONCATENATED MODULE: ./front/ArticleActions.tsx












const ArticleActions = ({ article  })=>{
    var ref;
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    const router = (0,router_.useRouter)();
    const { query: { pid  } ,  } = router;
    const handleDelete = async ()=>{
        if (!loggedInUser) return;
        const result = window.confirm('Do you really want to delete it?');
        if (!result) return;
        await api_article/* default.delete */.Z["delete"](pid, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token);
        (0,external_swr_.trigger)(`${(config_default())}/articles/${pid}`);
        router_default().push(`/`);
    };
    const canModify = loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username) === (article === null || article === void 0 ? void 0 : (ref = article.author) === null || ref === void 0 ? void 0 : ref.username);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                test: !canModify,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FollowUserButton/* default */.Z, {
                            profile: article.author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FavoriteArticleButton/* default */.Z, {
                            favorited: article.favorited,
                            favoritesCount: article.favoritesCount,
                            slug: article.slug,
                            showText: true
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                test: canModify,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomLink/* default */.Z, {
                            href: routes/* default.articleEdit */.Z.articleEdit(article.slug),
                            className: "btn btn-outline-secondary btn-sm",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ion-edit"
                                }),
                                " Edit Article"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "btn btn-outline-danger btn-sm",
                            onClick: handleDelete,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ion-trash-a"
                                }),
                                " Delete Article"
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const front_ArticleActions = (ArticleActions);

// EXTERNAL MODULE: ./front/CustomImage.tsx
var CustomImage = __webpack_require__(297);
// EXTERNAL MODULE: ./front/date.ts
var date = __webpack_require__(7059);
;// CONCATENATED MODULE: ./front/ArticleMeta.tsx







const ArticleMeta = ({ article  })=>{
    var ref, ref1, ref2, ref3;
    if (!article) return;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "article-meta",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                href: routes/* default.userView */.Z.userView(encodeURIComponent((ref = article.author) === null || ref === void 0 ? void 0 : ref.username)),
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                    src: (ref1 = article.author) === null || ref1 === void 0 ? void 0 : ref1.image,
                    alt: "author profile image"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "info",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                        href: routes/* default.userView */.Z.userView(encodeURIComponent((ref2 = article.author) === null || ref2 === void 0 ? void 0 : ref2.username)),
                        className: "author",
                        children: (ref3 = article.author) === null || ref3 === void 0 ? void 0 : ref3.username
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "date",
                        children: (0,date/* formatDate */.p)(article.createdAt)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(front_ArticleActions, {
                article: article
            })
        ]
    }));
};
/* harmony default export */ const front_ArticleMeta = (ArticleMeta);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./front/DeleteButton.tsx






const DeleteButton = ({ commentId: commentId1  })=>{
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    const router = (0,router_.useRouter)();
    const { query: { pid  } ,  } = router;
    const handleDelete = async (commentId)=>{
        await external_axios_default()["delete"](`${config.apiPath}/articles/${pid}/comments/${commentId}`, {
            headers: {
                Authorization: `Token ${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token}`
            }
        });
        (0,external_swr_.trigger)(`${config.apiPath}/articles/${pid}/comments`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "mod-options",
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "ion-trash-a",
            onClick: ()=>handleDelete(commentId1)
        })
    }));
};
/* harmony default export */ const front_DeleteButton = (DeleteButton);

;// CONCATENATED MODULE: ./front/Comment.tsx









const Comment = ({ comment  })=>{
    var ref;
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    const canModify = loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username) === (comment === null || comment === void 0 ? void 0 : (ref = comment.author) === null || ref === void 0 ? void 0 : ref.username);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-block",
                children: comment.body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                        href: routes/* default.userView */.Z.userView(comment.author.username),
                        className: "comment-author",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                            src: comment.author.image,
                            alt: "author profile image",
                            className: "comment-author-img"
                        })
                    }),
                    "\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                        href: routes/* default.userView */.Z.userView(comment.author.username),
                        className: "comment-author",
                        children: comment.author.username
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "date-posted",
                        children: (0,date/* formatDate */.p)(comment.createdAt)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                        test: canModify,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(front_DeleteButton, {
                            commentId: comment.id
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const front_Comment = (Comment);

// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
;// CONCATENATED MODULE: ./front/CommentInput.tsx











const CommentInput = ()=>{
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    const router = (0,router_.useRouter)();
    const { query: { pid  } ,  } = router;
    const [content, setContent] = external_react_default().useState('');
    const [isLoading, setLoading] = external_react_default().useState(false);
    const handleChange = external_react_default().useCallback((e)=>{
        setContent(e.target.value);
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        await external_axios_default().post(`${config.apiPath}/articles/${encodeURIComponent(String(pid))}/comments`, JSON.stringify({
            comment: {
                body: content
            }
        }), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${encodeURIComponent(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token)}`
            }
        });
        setLoading(false);
        setContent('');
        (0,external_swr_.trigger)(`${config.apiPath}/articles/${pid}/comments`);
    };
    (0,ts/* useCtrlEnterSubmit */.hy)(handleSubmit);
    if (!loggedInUser) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                    href: routes/* default.userLogin */.Z.userLogin(),
                    children: "Sign in"
                }),
                " or",
                ' ',
                /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                    href: routes/* default.userNew */.Z.userNew(),
                    children: "sign up"
                }),
                " to add comments on this article."
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "error-messages"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                className: "card comment-form",
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                rows: 3,
                                className: "form-control",
                                placeholder: "Write a comment...",
                                value: content,
                                onChange: handleChange,
                                disabled: isLoading
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-footer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                                    className: "comment-author-img",
                                    src: loggedInUser.effectiveImage,
                                    alt: "author profile image"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-sm btn-primary",
                                    type: "submit",
                                    children: "Post Comment"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const front_CommentInput = (CommentInput);

// EXTERNAL MODULE: ./front/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(9435);
// EXTERNAL MODULE: ./front/api/index.js
var api = __webpack_require__(8751);
// EXTERNAL MODULE: ./back/ArticlePage.ts
var ArticlePage = __webpack_require__(4267);
;// CONCATENATED MODULE: ./pages/article/[pid].tsx
















// Server only.

const _pid_ArticlePage = ({ article , comments  })=>{
    var ref;
    const router = (0,router_.useRouter)();
    // Fetch user-specific data.
    // Article determines if the curent user favorited the article or not
    const { data: articleApi  } = external_swr_default()(`${config.apiPath}/articles/${article === null || article === void 0 ? void 0 : article.slug}`, (0,api/* default */.Z)(router.isFallback));
    if (articleApi !== undefined) {
        article = articleApi.article;
    }
    // We fetch comments so that the new posted comment will appear immediately after posted.
    // Note that we cannot calculate the exact new coment element because we need the server datetime.
    const { data: commentApi  } = external_swr_default()(`${config.apiPath}/articles/${article === null || article === void 0 ? void 0 : article.slug}/comments`, (0,api/* default */.Z)(router.isFallback));
    if (commentApi !== undefined) {
        comments = commentApi.comments;
    }
    // TODO it is not ideal to have to setup state on every parent of FavoriteUserButton/FollowUserButton,
    // but I just don't know how to avoid it nicely, especially considering that the
    // button shows up on both profile and article pages, and thus comes from different
    // API data, so useSWR is not a clean.
    const [following, setFollowing] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setFollowing(article === null || article === void 0 ? void 0 : article.author.following);
    }, [
        article === null || article === void 0 ? void 0 : article.author.following
    ]);
    const [favorited, setFavorited] = external_react_default().useState(false);
    const [favoritesCount, setFavoritesCount] = external_react_default().useState(article === null || article === void 0 ? void 0 : article.favoritesCount);
    external_react_default().useEffect(()=>{
        setFavorited(article === null || article === void 0 ? void 0 : article.favorited);
        setFavoritesCount(article === null || article === void 0 ? void 0 : article.favoritesCount);
    }, [
        article === null || article === void 0 ? void 0 : article.favorited,
        article === null || article === void 0 ? void 0 : article.favoritesCount
    ]);
    const { setPage , setTab , setTag , setTitle  } = external_react_default().useContext(ts/* AppContext */.Il);
    external_react_default().useEffect(()=>{
        setTitle(article === null || article === void 0 ? void 0 : article.title);
    }, [
        setTitle,
        article === null || article === void 0 ? void 0 : article.title
    ]);
    if (router.isFallback) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner/* default */.Z, {
        }));
    }
    const markup = {
        __html: external_marked_default()(article.body)
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "article-page",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "banner",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: article.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(FavoriteArticleButton/* FavoriteArticleButtonContext.Provider */.F.Provider, {
                                value: {
                                    favorited,
                                    setFavorited,
                                    favoritesCount,
                                    setFavoritesCount
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(FollowUserButton/* FollowUserButtonContext.Provider */.n.Provider, {
                                    value: {
                                        following,
                                        setFollowing
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(front_ArticleMeta, {
                                        article: article
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container page",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row article-content",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: markup
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "tag-list",
                                        children: (ref = article.tagList) === null || ref === void 0 ? void 0 : ref.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "tag-default tag-pill tag-outline",
                                                children: [
                                                    tag,
                                                     false && /*#__PURE__*/ 0
                                                ]
                                            }, tag)
                                        )
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "article-actions",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(FavoriteArticleButton/* FavoriteArticleButtonContext.Provider */.F.Provider, {
                                value: {
                                    favorited,
                                    setFavorited,
                                    favoritesCount,
                                    setFavoritesCount
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(FollowUserButton/* FollowUserButtonContext.Provider */.n.Provider, {
                                    value: {
                                        following,
                                        setFollowing
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(front_ArticleMeta, {
                                        article: article
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xs-12 col-md-8 offset-md-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(front_CommentInput, {
                                        }),
                                        comments === null || comments === void 0 ? void 0 : comments.map((comment)=>/*#__PURE__*/ jsx_runtime_.jsx(front_Comment, {
                                                comment: comment
                                            }, comment.id)
                                        )
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const _pid_ = (_pid_ArticlePage);
const getStaticPaths = ArticlePage/* getStaticPathsArticle */.l;
const getStaticProps = (0,ArticlePage/* getStaticPropsArticle */.F)(true, true);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("slug");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,63,842,682,264,120,374,280,302,267], () => (__webpack_exec__(8762)));
module.exports = __webpack_exports__;

})();