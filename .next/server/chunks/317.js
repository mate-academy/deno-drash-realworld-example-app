"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 3112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getStaticPathsProfile),
/* harmony export */   "X": () => (/* binding */ getStaticPropsProfile)
/* harmony export */ });
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3120);


const getStaticPathsProfile = async ()=>{
    let paths;
    if (front_config__WEBPACK_IMPORTED_MODULE_0__.prerenderAll) {
        paths = (await db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User.findAll */ .Z.models.User.findAll({
            order: [
                [
                    'username',
                    'ASC'
                ]
            ]
        })).map((user)=>{
            return {
                params: {
                    pid: user.username
                }
            };
        });
    } else {
        paths = [];
    }
    return {
        fallback: front_config__WEBPACK_IMPORTED_MODULE_0__.fallback,
        paths
    };
};
function getStaticPropsProfile(tab) {
    return async ({ params: { pid  }  })=>{
        const include = [];
        if (tab === 'my-posts') {
            include.push({
                model: db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User */ .Z.models.User,
                as: 'author',
                where: {
                    username: pid
                }
            });
        } else if (tab === 'favorites') {
            include.push({
                model: db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User */ .Z.models.User,
                as: 'favoritedBy',
                where: {
                    username: pid
                }
            });
        }
        const [articles, user] = await Promise.all([
            db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.Article.findAndCountAll */ .Z.models.Article.findAndCountAll({
                order: [
                    [
                        'createdAt',
                        'DESC'
                    ]
                ],
                limit: front_config__WEBPACK_IMPORTED_MODULE_0__.articleLimit,
                include
            }),
            db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User.findOne */ .Z.models.User.findOne({
                where: {
                    username: pid
                }
            }), 
        ]);
        if (!user) {
            return {
                notFound: true
            };
        }
        return {
            revalidate: front_config__WEBPACK_IMPORTED_MODULE_0__.revalidate,
            props: {
                profile: await user.toProfileJSONFor(),
                articles: await Promise.all(articles.rows.map((article)=>article.toJson()
                )),
                articlesCount: articles.count
            }
        };
    };
}


/***/ }),

/***/ 1343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProfilePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./front/ArticleList.tsx + 2 modules
var ArticleList = __webpack_require__(3923);
// EXTERNAL MODULE: ./front/CustomLink.tsx
var CustomLink = __webpack_require__(7954);
// EXTERNAL MODULE: ./front/CustomImage.tsx
var CustomImage = __webpack_require__(297);
// EXTERNAL MODULE: ./front/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(9435);
// EXTERNAL MODULE: ./front/Maybe.tsx
var Maybe = __webpack_require__(6209);
// EXTERNAL MODULE: ./front/routes.ts
var routes = __webpack_require__(9139);
;// CONCATENATED MODULE: ./front/EditProfileButton.tsx





const EditProfileButton = ({ isCurrentUser  })=>/*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
        test: isCurrentUser,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomLink/* default */.Z, {
            href: routes/* default.userEdit */.Z.userEdit(),
            className: "btn btn-sm btn-outline-secondary action-btn",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "ion-gear-a"
                }),
                " Edit Profile Settings"
            ]
        })
    })
;
/* harmony default export */ const front_EditProfileButton = (EditProfileButton);

// EXTERNAL MODULE: ./front/FollowUserButton.tsx
var FollowUserButton = __webpack_require__(8302);
// EXTERNAL MODULE: ./front/api/index.js
var api = __webpack_require__(8751);
// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
// EXTERNAL MODULE: ./front/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(5014);
// EXTERNAL MODULE: ./front/ts.tsx
var ts = __webpack_require__(1682);
;// CONCATENATED MODULE: ./front/ProfilePage.tsx















const ProfileHoc = (tab)=>{
    return function ProfilePage({ profile , articles , articlesCount  }) {
        const [page, setPage] = external_react_default().useState(0);
        const router = (0,router_.useRouter)();
        const { data: profileApi  } = external_swr_default()(`${config.apiPath}/profiles/${profile === null || profile === void 0 ? void 0 : profile.username}`, (0,api/* default */.Z)(router.isFallback));
        if (profileApi !== undefined) {
            profile = profileApi.profile;
        }
        const username = profile === null || profile === void 0 ? void 0 : profile.username;
        const bio = profile === null || profile === void 0 ? void 0 : profile.bio;
        const image = profile === null || profile === void 0 ? void 0 : profile.image;
        const loggedInUser = (0,useLoggedInUser/* default */.Z)();
        const isCurrentUser = loggedInUser && username === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username);
        const [following, setFollowing] = external_react_default().useState(false);
        external_react_default().useEffect(()=>{
            setFollowing(profile === null || profile === void 0 ? void 0 : profile.following);
        }, [
            profile === null || profile === void 0 ? void 0 : profile.following
        ]);
        const { setTitle  } = external_react_default().useContext(ts/* AppContext */.Il);
        external_react_default().useEffect(()=>{
            setTitle(username);
        }, [
            setTitle,
            username
        ]);
        if (router.isFallback) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner/* default */.Z, {
            }));
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "profile-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "user-info",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-xs-12 col-md-10 offset-md-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                                            src: image,
                                            alt: "User's profile image",
                                            className: "user-img"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: username
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: bio
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(front_EditProfileButton, {
                                            isCurrentUser: isCurrentUser
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(FollowUserButton/* FollowUserButtonContext.Provider */.n.Provider, {
                                            value: {
                                                following,
                                                setFollowing
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FollowUserButton/* default */.Z, {
                                                profile: profile
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-xs-12 col-md-10 offset-md-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "articles-toggle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "nav nav-pills outline-active",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                                        href: routes/* default.userView */.Z.userView(encodeURIComponent(username)),
                                                        className: `nav-link${tab === 'my-posts' ? ' active' : ''}`,
                                                        children: "My Posts"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                                        href: routes/* default.userViewLikes */.Z.userViewLikes(encodeURIComponent(username)),
                                                        className: `nav-link${tab === 'favorites' ? ' active' : ''}`,
                                                        children: "Favorited Posts"
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
                                        ssr: false,
                                        what: tab
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        }));
    };
};
/* harmony default export */ const ProfilePage = (ProfileHoc);


/***/ })

};
;