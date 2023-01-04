"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 4267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getStaticPathsArticle),
/* harmony export */   "F": () => (/* binding */ getStaticPropsArticle)
/* harmony export */ });
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(842);
/* harmony import */ var front_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(front_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3120);


const getStaticPathsArticle = async ()=>{
    let paths;
    if (front_config__WEBPACK_IMPORTED_MODULE_0__.prerenderAll) {
        paths = (await db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.Article.findAll */ .Z.models.Article.findAll()).map((article)=>{
            return {
                params: {
                    pid: article.slug
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
function getStaticPropsArticle(addRevalidate, addComments) {
    return async ({ params: { pid  }  })=>{
        const article = await db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.Article.findOne */ .Z.models.Article.findOne({
            where: {
                slug: pid
            },
            include: [
                {
                    model: db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User */ .Z.models.User,
                    as: 'author'
                }
            ]
        });
        if (!article) {
            return {
                notFound: true
            };
        }
        let comments;
        if (addComments) {
            comments = await article.getComments({
                order: [
                    [
                        'createdAt',
                        'DESC'
                    ]
                ],
                include: [
                    {
                        model: db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].models.User */ .Z.models.User,
                        as: 'author'
                    }
                ]
            });
        }
        const props = {
            article: await article.toJson()
        };
        if (addComments) {
            props.comments = await Promise.all(comments.map((comment)=>comment.toJson()
            ));
        }
        const ret = {
            props
        };
        // We can only add this for getStaticProps, not getServerSideProps.
        if (addRevalidate) {
            ret.revalidate = front_config__WEBPACK_IMPORTED_MODULE_0__.revalidate;
        }
        return ret;
    };
}


/***/ })

};
;