exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 3825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pt": () => (/* binding */ getServerSidePropsHoc),
/* harmony export */   "$Z": () => (/* binding */ getStaticPropsHoc)
/* harmony export */ });
/* unused harmony export getLoggedInUser */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9856);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3120);
/* harmony import */ var lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5559);





async function getLoggedOutProps() {
    const articles = await db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].models.Article.findAndCountAll */ .Z.models.Article.findAndCountAll({
        order: [
            [
                'createdAt',
                'DESC'
            ]
        ],
        limit: front_config__WEBPACK_IMPORTED_MODULE_2__.articleLimit
    });
    return {
        articles: await Promise.all(articles.rows.map((article)=>article.toJson()
        )),
        articlesCount: articles.count,
        tags: await (0,lib__WEBPACK_IMPORTED_MODULE_4__/* .getIndexTags */ .Y1)(db__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)
    };
}
async function getLoggedInUser(req, res) {
    const authCookie = (0,front__WEBPACK_IMPORTED_MODULE_1__/* .getCookieFromReq */ .aX)(req, front__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_COOKIE_NAME */ .HI);
    let verifiedUser;
    if (authCookie) {
        try {
            verifiedUser = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(authCookie, front_config__WEBPACK_IMPORTED_MODULE_2__.secret);
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }
    const user = await db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].models.User.findByPk */ .Z.models.User.findByPk(verifiedUser.id);
    if (user === null) {
        res.clearCookie(front__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_COOKIE_NAME */ .HI);
    }
    return user;
}
const getServerSidePropsHoc = async ({ req , res ,  })=>{
    const loggedInUser = await getLoggedInUser(req, res);
    let props;
    if (loggedInUser) {
        const [articles, tags] = await Promise.all([
            loggedInUser.findAndCountArticlesByFollowedToJson(0, front_config__WEBPACK_IMPORTED_MODULE_2__.articleLimit),
            (0,lib__WEBPACK_IMPORTED_MODULE_4__/* .getIndexTags */ .Y1)(req.sequelize), 
        ]);
        props = Object.assign(articles, {
            tags
        });
    } else {
        props = await getLoggedOutProps();
    }
    // Not required by Next, just to factor things out in our demo which has both ISR and SSR.
    props.ssr = true;
    return {
        props
    };
};
const getStaticPropsHoc = async ()=>{
    return {
        props: await getLoggedOutProps(),
        revalidate: front_config__WEBPACK_IMPORTED_MODULE_2__.revalidate
    };
};


/***/ }),

/***/ 1043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ front_IndexPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./front/ArticleList.tsx + 2 modules
var ArticleList = __webpack_require__(3923);
// EXTERNAL MODULE: ./front/Maybe.tsx
var Maybe = __webpack_require__(6209);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./front/api/index.js
var api = __webpack_require__(8751);
// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
// EXTERNAL MODULE: ./front/ErrorMessage.tsx
var ErrorMessage = __webpack_require__(8929);
;// CONCATENATED MODULE: ./front/Tags.tsx






const Tags = ({ tags , ssr , setTab , setPage , setTag  })=>{
    const { data , error  } = external_swr_default()(ssr ? null : `${config.apiPath}/tags`, (0,api/* default */.Z)());
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
        message: "Cannot load popular tags..."
    }));
    if (data) {
        ({ tags  } = data);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tag-list",
        children: tags === null || tags === void 0 ? void 0 : tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "link tag-default tag-pill",
                onClick: ()=>{
                    setTab('tag');
                    setTag(tag);
                    setPage(0);
                },
                children: tag
            }, tag)
        )
    }));
};
/* harmony default export */ const front_Tags = (Tags);

// EXTERNAL MODULE: ./front/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(5014);
// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
;// CONCATENATED MODULE: ./front/IndexPage.tsx









const IndexPage = ({ articles , articlesCount , ssr , tags  })=>{
    const { page , setPage , tab , setTab , tag , setTag  } = external_react_default().useContext(ts/* AppContext */.Il);
    const loggedInUser = (0,useLoggedInUser/* default */.Z)();
    external_react_default().useEffect(()=>{
        (0,ts/* resetIndexState */.p8)(setPage, setTab, loggedInUser);
    }, [
        loggedInUser,
        setPage,
        setTab
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "description",
                    content: "Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "home-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                        test: !loggedInUser,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "banner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "logo-font",
                                        children: config.appName.toLowerCase()
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "A place to share your knowledge."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container page",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-9",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "feed-toggle",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "nav nav-pills outline-active",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                                                        test: loggedInUser,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "nav-item",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: `link nav-link${tab === 'feed' ? ' active' : ''}`,
                                                                onClick: ()=>{
                                                                    setPage(0);
                                                                    setTab('feed');
                                                                },
                                                                children: "Your Feed"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: `link nav-link${tab === 'global' ? ' active' : ''}`,
                                                            onClick: ()=>{
                                                                setPage(0);
                                                                setTab('global');
                                                            },
                                                            children: "Global Feed"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                                                        test: tab === 'tag',
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "nav-item",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "link nav-link active",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "ion-pound"
                                                                    }),
                                                                    " ",
                                                                    tag
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ArticleList/* default */.Z, {
                                            articles,
                                            articlesCount,
                                            loggedInUser,
                                            page,
                                            setPage,
                                            what: tab,
                                            ssr,
                                            tag
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "sidebar",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Popular Tags"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(front_Tags, {
                                                tags,
                                                ssr,
                                                setTab,
                                                setTag,
                                                setPage
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const front_IndexPage = (IndexPage);


/***/ }),

/***/ 5559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
const config = __webpack_require__(842);
async function deleteOldestForDemo(Model) {
    if (config.isDemo) {
        // Delete the oldest comments to keep data size limited.
        const old = await Model.findAll({
            order: [
                [
                    'createdAt',
                    'DESC'
                ]
            ],
            offset: config.demoMaxObjs,
            limit: config.maxObjsInMemory,
            attributes: [
                'id'
            ]
        });
        if (old.length) {
            await Model.destroy({
                where: {
                    id: old.map((row)=>row.id
                    )
                }
            });
        }
    }
}
__webpack_unused_export__ = deleteOldestForDemo;
// https://stackoverflow.com/questions/14382725/how-to-get-the-correct-ip-address-of-a-client-into-a-node-socket-io-app-hosted-o/14382990#14382990
// Works on Heroku 2021.
function getClientIp(req) {
    return req.header('x-forwarded-for');
}
__webpack_unused_export__ = getClientIp;
class ValidationError extends Error {
    constructor(errors, status){
        super();
        this.errors = errors;
        this.status = status;
    }
}
__webpack_unused_export__ = ValidationError;
async function getIndexTags(sequelize) {
    return (await sequelize.models.Tag.findAll({
        order: [
            [
                'createdAt',
                'DESC'
            ],
            [
                'name',
                'ASC'
            ], 
        ]
    })).map((tag)=>tag.name
    );
}
exports.Y1 = getIndexTags;
function validatePositiveInteger(s) {
    const i = Number(s);
    let ok = s !== '' && Number.isInteger(i) && i >= 0;
    return [
        i,
        ok
    ];
}
__webpack_unused_export__ = validatePositiveInteger;
function validateParam(obj, prop, validator, defaultValue) {
    let param = obj[prop];
    if (typeof param === 'undefined') {
        return defaultValue;
    } else {
        let [val, ok] = validator(param);
        if (ok) {
            return val;
        } else {
            throw new ValidationError({
                [prop]: [
                    `validator ${validator.name} failed on ${prop} = "${param}"`, 
                ]
            }, 422);
        }
    }
}
__webpack_unused_export__ = validateParam;


/***/ })

};
;