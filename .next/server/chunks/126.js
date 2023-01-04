"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 3923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ front_ArticleList)
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
// EXTERNAL MODULE: ./front/CustomLink.tsx
var CustomLink = __webpack_require__(7954);
// EXTERNAL MODULE: ./front/CustomImage.tsx
var CustomImage = __webpack_require__(297);
// EXTERNAL MODULE: ./front/FavoriteArticleButton.tsx
var FavoriteArticleButton = __webpack_require__(5352);
// EXTERNAL MODULE: ./front/date.ts
var date = __webpack_require__(7059);
// EXTERNAL MODULE: ./front/routes.ts
var routes = __webpack_require__(9139);
;// CONCATENATED MODULE: ./front/ArticlePreview.tsx







const ArticlePreview = ({ article  })=>{
    const preview = article;
    if (!article) return;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "article-preview",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article-meta",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                        href: routes/* default.userView */.Z.userView(preview.author.username),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                            src: preview.author.image,
                            alt: "author profile image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "info",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                href: routes/* default.userView */.Z.userView(preview.author.username),
                                className: "author",
                                children: preview.author.username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "date",
                                children: (0,date/* formatDate */.p)(preview.createdAt)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pull-xs-right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FavoriteArticleButton/* default */.Z, {
                            favorited: preview.favorited,
                            favoritesCount: preview.favoritesCount,
                            slug: preview.slug
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomLink/* default */.Z, {
                href: routes/* default.articleView */.Z.articleView(preview.slug),
                className: "preview-link",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: preview.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: preview.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Read more..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "tag-list",
                        children: preview.tagList.map((tag, index)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "tag-default tag-pill tag-outline",
                                children: tag
                            }, index));
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const front_ArticlePreview = (ArticlePreview);

// EXTERNAL MODULE: ./front/config.js
var config = __webpack_require__(842);
// EXTERNAL MODULE: ./front/ErrorMessage.tsx
var ErrorMessage = __webpack_require__(8929);
// EXTERNAL MODULE: ./front/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(9435);
// EXTERNAL MODULE: ./front/Maybe.tsx
var Maybe = __webpack_require__(6209);
;// CONCATENATED MODULE: ./front/Pagination.tsx



function PaginationItem(props) {
    const newProps = Object.assign({
    }, props);
    delete newProps.children;
    delete newProps.className;
    let className;
    if (props.className) {
        className = ' ' + props.className;
    } else {
        className = '';
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: `page-item${className}`,
        ...newProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "link page-link",
            children: props.children
        })
    }));
}
function getRange(start, end) {
    return [
        ...Array(end - start + 1)
    ].map((_, i)=>start + i
    );
}
function makeSetPageCallback(setPage, pageIndex) {
    return (e)=>{
        e.preventDefault();
        setPage(pageIndex);
    };
}
const Pagination = ({ articlesCount , articlesPerPage , showPagesMax , currentPage , setCurrentPage  })=>{
    // - totalPages
    // - firstPage: 0-indexed
    // - lastPage: 0-indexed, inclusive
    const totalPages = Math.ceil(articlesCount / articlesPerPage);
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    let firstPage = Math.max(0, currentPage - Math.floor(showPagesMax / 2));
    let lastPage = Math.min(totalPages - 1, currentPage + Math.floor(showPagesMax / 2));
    if (lastPage - firstPage + 1 < showPagesMax) {
        if (currentPage < totalPages / 2) {
            lastPage = Math.min(totalPages - 1, lastPage + (showPagesMax - (lastPage - firstPage)));
        } else {
            firstPage = Math.max(0, firstPage - (showPagesMax - (lastPage - firstPage)));
        }
    }
    if (lastPage - firstPage + 1 > showPagesMax) {
        if (currentPage > totalPages / 2) {
            firstPage = firstPage + 1;
        } else {
            lastPage = lastPage - 1;
        }
    }
    const pages = articlesCount > 0 ? getRange(firstPage, lastPage) : [];
    const handleFirstClick = makeSetPageCallback(setCurrentPage, 0);
    const handlePrevClick = makeSetPageCallback(setCurrentPage, currentPage - 1);
    const handleNextClick = makeSetPageCallback(setCurrentPage, currentPage + 1);
    const handleLastClick = makeSetPageCallback(setCurrentPage, totalPages - 1);
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "pagination",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                    test: firstPage > 0,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                        onClick: handleFirstClick,
                        children: `<<`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                    test: currentPage > 0,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                        onClick: handlePrevClick,
                        children: `<`
                    })
                }),
                pages.map((page)=>{
                    const isCurrent = !currentPage ? page === 0 : page === currentPage;
                    return(/*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                        className: isCurrent && 'active',
                        onClick: makeSetPageCallback(setCurrentPage, page),
                        children: page + 1
                    }, page.toString()));
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                    test: currentPage < totalPages - 1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                        onClick: handleNextClick,
                        children: `>`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                    test: lastPage < totalPages - 1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                        onClick: handleLastClick,
                        children: `>>`
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const front_Pagination = (Pagination);

// EXTERNAL MODULE: ./front/api/index.js
var api = __webpack_require__(8751);
;// CONCATENATED MODULE: ./front/ArticleList.tsx












const ArticleList = ({ articles , articlesCount , loggedInUser , page , setPage , what , ssr , tag =undefined ,  })=>{
    const router = (0,router_.useRouter)();
    const { query  } = router;
    const { pid  } = query;
    // The page can be seen up to date from SSR without refetching,
    // so we skip the fetch.
    const ssrSkipFetch = page === 0 && (loggedInUser && what === 'feed' || !loggedInUser && what === 'global');
    const fetchURL = (()=>{
        if (loggedInUser === undefined || ssr && ssrSkipFetch) {
            // This makes SWR not fetch.
            return null;
        }
        switch(what){
            case 'favorites':
                return `${config.apiPath}/articles?limit=${config.articleLimit}&favorited=${encodeURIComponent(String(pid))}&offset=${page * config.articleLimit}`;
            case 'my-posts':
                return `${config.apiPath}/articles?limit=${config.articleLimit}&author=${encodeURIComponent(String(pid))}&offset=${page * config.articleLimit}`;
            case 'tag':
                return `${config.apiPath}/articles?limit=${config.articleLimit}&tag=${encodeURIComponent(tag)}&offset=${page * config.articleLimit}`;
            case 'feed':
                return `${config.apiPath}/articles/feed?limit=${config.articleLimit}&offset=${page * config.articleLimit}`;
            case 'global':
                return `${config.apiPath}/articles?limit=${config.articleLimit}&offset=${page * config.articleLimit}`;
            case undefined:
                // We haven't decided yet because we haven't decided if we are logged in or out yet.
                return null;
            default:
                throw new Error(`Unknown search: ${what}`);
        }
    })();
    const { data , error  } = external_swr_default()(fetchURL, (0,api/* default */.Z)());
    let showSpinner = true;
    if (data) {
        ({ articles , articlesCount  } = data);
    } else if (// If we used server side data on either of those cases, it would lead to wrong
    // data flickering, either for page 0, for for global feed instead of user following feed
    // since both of those share the `/` URL.
    // Instead, we want the loader to flicker.
    // https://github.com/cirosantilli/node-express-sequelize-nextjs-realworld-example-app/issues/12
    (!ssr && page === 0 && // These don't have their own URLs.
    what !== 'feed' && what !== 'tag') || // SSR has all the data it needs, so for sure we won't show the spinner.
    (ssr && (ssrSkipFetch || loggedInUser === undefined))) {
        showSpinner = false;
    } else {
        [articles, articlesCount] = [
            [],
            0
        ];
    }
    // Favorite article button state.
    const favorited = [];
    const setFavorited = [];
    const favoritesCount = [];
    const setFavoritesCount = [];
    // MUST be articleLimit and not articles.length, because articles.length
    // can happen a variable number of times on index page due to:
    // * load ISR page logged off on global
    // * login, which leads to feed instead of global
    // and calling hooks like useState different number of times is a capital sin
    // in React and makes everything blow up.
    for(let i1 = 0; i1 < config.articleLimit; i1++){
        [favorited[i1], setFavorited[i1]] = external_react_default().useState(false);
        [favoritesCount[i1], setFavoritesCount[i1]] = external_react_default().useState(0);
    }
    external_react_default().useEffect(()=>{
        const nArticles = (articles === null || articles === void 0 ? void 0 : articles.length) || 0;
        for(let i = 0; i < nArticles; i++){
            setFavorited[i](articles[i].favorited);
            setFavoritesCount[i](articles[i].favoritesCount);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, Object.assign(articles.map((a)=>a.favorited
    ).concat(articles.map((a)=>a.favoritesCount
    )), {
        length: config.articleLimit
    }));
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
        message: "Cannot load recent articles..."
    }));
    if (!data && showSpinner) return(/*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner/* default */.Z, {
    }));
    if ((articles === null || articles === void 0 ? void 0 : articles.length) === 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "article-preview",
            children: "No articles are here... yet."
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            articles === null || articles === void 0 ? void 0 : articles.map((article, i)=>/*#__PURE__*/ jsx_runtime_.jsx(FavoriteArticleButton/* FavoriteArticleButtonContext.Provider */.F.Provider, {
                    value: {
                        favorited: favorited[i],
                        setFavorited: setFavorited[i],
                        favoritesCount: favoritesCount[i],
                        setFavoritesCount: setFavoritesCount[i]
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(front_ArticlePreview, {
                        article: article
                    }, article.slug)
                }, article.slug)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(Maybe/* default */.Z, {
                test: articlesCount && articlesCount > config.articleLimit,
                children: /*#__PURE__*/ jsx_runtime_.jsx(front_Pagination, {
                    articlesCount: articlesCount,
                    articlesPerPage: config.articleLimit,
                    showPagesMax: 10,
                    currentPage: page,
                    setCurrentPage: setPage
                })
            })
        ]
    }));
};
/* harmony default export */ const front_ArticleList = (ArticleList);


/***/ }),

/***/ 8929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMessage = ({ message  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "error-message",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "error-message-presenter",
            children: message
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ })

};
;