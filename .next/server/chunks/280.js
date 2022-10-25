"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_1__);


const getQuery = (limit, page)=>`limit=${limit}&offset=${page ? page * limit : 0}`
;
const ArticleAPI = {
    all: (page, limit = 10)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles?${getQuery(limit, page)}`)
    ,
    byAuthor: (author, page = 0, limit = 5)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles?author=${encodeURIComponent(author)}&${getQuery(limit, page)}`)
    ,
    byTag: (tag, page = 0, limit = 10)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles?tag=${encodeURIComponent(tag)}&${getQuery(limit, page)}`)
    ,
    delete: (id, token)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/${id}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    ,
    favorite: (slug)=>axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/${slug}/favorite`)
    ,
    favoritedBy: (author, page)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles?favorited=${encodeURIComponent(author)}&${getQuery(10, page)}`)
    ,
    feed: (page, limit = 10)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/feed?${getQuery(limit, page)}`)
    ,
    get: (slug)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/${encodeURIComponent(slug)}`)
    ,
    unfavorite: (slug)=>axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/${slug}/favorite`)
    ,
    update: async (article, pid, token)=>{
        const { data , status  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles/${pid}`, JSON.stringify({
            article
        }), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${encodeURIComponent(token)}`
            }
        });
        return {
            data,
            status
        };
    },
    create: async (article, token)=>{
        const { data , status  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${front_config__WEBPACK_IMPORTED_MODULE_1__.apiPath}/articles`, JSON.stringify({
            article
        }), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${encodeURIComponent(token)}`
            }
        });
        return {
            data,
            status
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleAPI);


/***/ })

};
;