"use strict";
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 3120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const models = __webpack_require__(6842);
// TODO sync. But we have to stop the server
// before listen for that. Don't know how to do it.
const sequelize = models.getSequelize(path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequelize);


/***/ }),

/***/ 5158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const slug = __webpack_require__(5843);
const { DataTypes , Op , Transaction  } = __webpack_require__(496);
module.exports = (sequelize)=>{
    const Article = sequelize.define('Article', {
        slug: {
            type: DataTypes.STRING,
            unique: {
                message: 'Slug must be unique.'
            },
            set (v) {
                this.setDataValue('slug', v.toLowerCase());
            },
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING(65536),
            allowNull: false
        }
    }, {
        hooks: {
            beforeValidate: (article)=>{
                if (!article.slug) {
                    article.slug = slug(article.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
                }
            },
            beforeDestroy: async (article, options)=>{
                await article.deleteEmptyTags(options.transaction);
            }
        },
        indexes: [
            {
                fields: [
                    'createdAt'
                ]
            }, 
        ]
    });
    // Delete tags that are only associated to this article, and which will therefore be
    // deleted after this article is deleted.
    Article.prototype.deleteEmptyTags = async function(transaction) {
        // This should alwas be run inside a transaction, as it is an unsafe read modify write loop,
        // otherwise could fail if a new article is created in the middle: we could end up destroying
        // the tag of that article incorrectly. Converting to a single join delete statement
        // would do the trick, but that syntax is not possible in all DBs, and subqueries are impossible
        // without literals in Sequelize:
        // https://stackoverflow.com/questions/45354001/nodejs-sequelize-delete-with-nested-select-query
        // Get all tags that the article has that have exactly 1 article before we deleted
        // this article. We know we can delete those later on.
        const emptyTags = await sequelize.models.Article.findAll({
            attributes: [
                sequelize.col('tags.id'),
                [
                    sequelize.fn('COUNT', sequelize.col('Article.id')),
                    'count'
                ], 
            ],
            raw: true,
            includeIgnoreAttributes: false,
            include: [
                {
                    model: sequelize.models.Tag,
                    as: 'tags',
                    where: {
                        '$Article.id$': this.id
                    },
                    include: [
                        {
                            model: sequelize.models.Article,
                            as: 'taggedArticles',
                            required: false
                        }, 
                    ]
                }, 
            ],
            group: [
                'tags.id'
            ],
            order: [
                [
                    sequelize.col('count'),
                    'DESC'
                ]
            ],
            having: sequelize.where(sequelize.fn('COUNT', sequelize.col('Article.id')), Op.eq, 1),
            transaction
        });
        // Equivalent to the above but in multiple queries. Keeping around in a comments just in case.
        // Should also be converted to promise.
        //const tags = await article.getTags({ transaction: options.transaction })
        //const emptyTags = []
        //for (const tag of tags) {
        //  if ((await tag.countTaggedArticles({ transaction: options.transaction })) === 1) {
        //    emptyTags.push(tag)
        //  }
        //}
        if (emptyTags.length) {
            await sequelize.models.Tag.destroy({
                where: {
                    id: emptyTags.map((tag)=>tag.id
                    )
                },
                transaction
            });
        }
    };
    // This method should always be used instead of the default destroy because it also destroys
    // tags that might now have no articles, and this need to be in a SERIALIZABLE transaction
    // with post + tag creation to prevent a race condition where the tag of a new post gets
    // wrongly deleted before it is assigned to the post.
    Article.prototype.destroy2 = async function() {
        await sequelize.transaction(Transaction.ISOLATION_LEVELS.SERIALIZABLE, async (t)=>{
            await this.destroy({
                transaction: t
            });
        });
    };
    Article.prototype.toJson = async function(user, opts = {
    }) {
        // We first check if those have already been fetched. This is ideally done
        // for example from JOINs on a query that fetches multiple articles like the
        // queries that show article lists on the home page.
        // https://github.com/cirosantilli/node-express-sequelize-nextjs-realworld-example-app/issues/5
        const authorPromise = this.author ? this.author : this.getAuthor();
        const tagPromise = opts.tags ? opts.tags : this.getTags();
        let favoritePromise;
        if (user) {
            favoritePromise = opts.favorited === undefined ? user.hasFavorite(this.id) : opts.favorited;
        } else {
            favoritePromise = false;
        }
        const [tags, favorited, favoritesCount, author] = await Promise.all([
            await tagPromise,
            await favoritePromise,
            this.countFavoritedBy(),
            (await authorPromise).toProfileJSONFor(user), 
        ]);
        return {
            slug: this.slug,
            title: this.title,
            description: this.description,
            body: this.body,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
            tagList: tags.map((tag)=>tag.name
            ),
            favorited,
            favoritesCount,
            author
        };
    };
    return Article;
};


/***/ }),

/***/ 2099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DataTypes  } = __webpack_require__(496);
module.exports = (sequelize)=>{
    const Comment = sequelize.define('Comment', {
        body: DataTypes.STRING
    });
    Comment.prototype.toJson = async function(user) {
        return {
            id: this.id,
            body: this.body,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
            author: await this.author.toProfileJSONFor(user)
        };
    };
    return Comment;
};


/***/ }),

/***/ 6842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
const { Sequelize , DataTypes  } = __webpack_require__(496);
const config = __webpack_require__(842);
const { DatabaseError  } = __webpack_require__(496);
function getSequelize(toplevelDir, toplevelBasename) {
    const sequelizeParams = {
        logging: config.verbose ? console.log : false,
        define: {
            freezeTableName: true
        }
    };
    let sequelize;
    if (config.isProduction || config.postgres) {
        sequelizeParams.dialect = config.production.dialect;
        sequelizeParams.dialectOptions = config.production.dialectOptions;
        sequelize = new Sequelize(config.production.url, sequelizeParams);
    } else {
        sequelizeParams.dialect = config.development.dialect;
        let storage;
        if ( false || toplevelDir === undefined) {
            storage = ':memory:';
        } else {
            if (toplevelBasename === undefined) {
                toplevelBasename = config.development.storage;
            }
            storage = path.join(toplevelDir, toplevelBasename);
        }
        sequelizeParams.storage = storage;
        sequelize = new Sequelize(sequelizeParams);
    }
    const Article = __webpack_require__(5158)(sequelize);
    const Comment = __webpack_require__(2099)(sequelize);
    __webpack_require__(6240)(sequelize);
    const Tag = __webpack_require__(4017)(sequelize);
    const User = __webpack_require__(2187)(sequelize);
    // Associations.
    // User follow user (super many to many)
    const UserFollowUser = sequelize.define('UserFollowUser', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        followId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    }, {
        tableName: 'UserFollowUser'
    });
    User.belongsToMany(User, {
        through: UserFollowUser,
        as: 'follows',
        foreignKey: 'userId',
        otherKey: 'followId'
    });
    User.belongsToMany(User, {
        through: UserFollowUser,
        as: 'followed',
        foreignKey: 'followId',
        otherKey: 'userId'
    });
    UserFollowUser.belongsTo(User, {
        foreignKey: 'userId'
    });
    User.hasMany(UserFollowUser, {
        foreignKey: 'followId'
    });
    // User favorite Article (super many to many)
    const UserFavoriteArticle = sequelize.define('UserFavoriteArticle', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        articleId: {
            type: DataTypes.INTEGER,
            references: {
                model: Article,
                key: 'id'
            }
        }
    });
    Article.belongsToMany(User, {
        through: UserFavoriteArticle,
        as: 'favoritedBy',
        foreignKey: 'articleId',
        otherKey: 'userId'
    });
    User.belongsToMany(Article, {
        through: UserFavoriteArticle,
        as: 'favorites',
        foreignKey: 'userId',
        otherKey: 'articleId'
    });
    Article.hasMany(UserFavoriteArticle, {
        foreignKey: 'articleId'
    });
    UserFavoriteArticle.belongsTo(Article, {
        foreignKey: 'articleId'
    });
    User.hasMany(UserFavoriteArticle, {
        foreignKey: 'userId'
    });
    UserFavoriteArticle.belongsTo(User, {
        foreignKey: 'userId'
    });
    // User authors Article
    User.hasMany(Article, {
        as: 'authoredArticles',
        foreignKey: 'authorId',
        onDelete: 'CASCADE',
        hooks: true
    });
    Article.belongsTo(User, {
        as: 'author',
        hooks: true,
        foreignKey: {
            name: 'authorId',
            allowNull: false
        }
    });
    // Article has Comment
    Article.hasMany(Comment, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE'
    });
    Comment.belongsTo(Article, {
        foreignKey: {
            name: 'articleId',
            allowNull: false
        }
    });
    // User authors Comment
    User.hasMany(Comment, {
        foreignKey: 'authorId',
        onDelete: 'CASCADE'
    });
    Comment.belongsTo(User, {
        as: 'author',
        foreignKey: {
            name: 'authorId',
            allowNull: false
        }
    });
    // Tag Article
    Article.belongsToMany(Tag, {
        through: 'ArticleTag',
        as: 'tags',
        foreignKey: 'articleId',
        otherKey: 'tagId'
    });
    Tag.belongsToMany(Article, {
        through: 'ArticleTag',
        as: 'taggedArticles',
        foreignKey: 'tagId',
        otherKey: 'articleId'
    });
    return sequelize;
}
// Do sequelize.sync, and then also populate SequelizeMeta with migrations
// that might not be needed if we've just done a full sync.
async function sync(sequelize, opts = {
}) {
    let dbExists;
    try {
        await sequelize.models.SequelizeMeta.findOne();
        dbExists = true;
    } catch (e) {
        if (e instanceof DatabaseError) {
            dbExists = false;
        }
    }
    await sequelize.sync(opts);
    if (!dbExists || opts.force) {
        await sequelize.models.SequelizeMeta.bulkCreate(fs.readdirSync(path.join(path.dirname(__dirname), 'migrations')).map((basename)=>{
            return {
                name: basename
            };
        }));
    }
    return dbExists;
}
module.exports = {
    getSequelize,
    sync
};


/***/ }),

/***/ 6240:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DataTypes  } = __webpack_require__(496);
module.exports = (sequelize)=>{
    const SequelizeMeta = sequelize.define('SequelizeMeta', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return SequelizeMeta;
};


/***/ }),

/***/ 4017:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DataTypes  } = __webpack_require__(496);
module.exports = (sequelize)=>{
    const Tag = sequelize.define('Tag', {
        name: {
            type: DataTypes.STRING,
            unique: {
                message: 'Tag name must be unique.'
            }
        }
    }, {
        indexes: [
            {
                fields: [
                    'createdAt'
                ]
            }, 
        ]
    });
    return Tag;
};


/***/ }),

/***/ 2187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const crypto = __webpack_require__(6113);
const jwt = __webpack_require__(9344);
const Sequelize = __webpack_require__(496);
const { DataTypes , Op  } = Sequelize;
const config = __webpack_require__(842);
module.exports = (sequelize)=>{
    let User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            set (v) {
                this.setDataValue('username', v.toLowerCase());
            },
            unique: {
                msg: 'This username is taken.'
            },
            validate: {
                min: {
                    args: 3,
                    msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.'
                },
                max: {
                    args: 40,
                    msg: 'Username must start with a letter, have no spaces, and be at less than 40 characters.'
                },
                is: {
                    args: /^[A-Za-z][A-Za-z0-9-_]+$/i,
                    msg: 'Username must start with a letter, have no spaces, and be 3 - 40 characters.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            set (v) {
                this.setDataValue('email', v.toLowerCase());
            },
            unique: {
                msg: 'This email is taken.'
            },
            validate: {
                isEmail: {
                    msg: 'This email does not seem valid.'
                },
                max: {
                    args: 254,
                    msg: 'This email is too long, the maximum size is 254 characters.'
                }
            }
        },
        bio: DataTypes.STRING,
        image: DataTypes.STRING,
        hash: DataTypes.STRING(1024),
        salt: DataTypes.STRING,
        ip: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        indexes: [
            {
                fields: [
                    'username'
                ]
            },
            {
                fields: [
                    'email'
                ]
            }
        ]
    });
    User.prototype.generateJWT = function() {
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        return jwt.sign({
            id: this.id,
            username: this.username,
            exp: parseInt(exp.getTime() / 1000)
        }, config.secret);
    };
    User.prototype.toAuthJSON = function() {
        return {
            username: this.username,
            email: this.email,
            token: this.generateJWT(),
            bio: this.bio === undefined ? '' : this.bio,
            image: this.image === undefined ? '' : this.image
        };
    };
    User.prototype.toProfileJSONFor = async function(user) {
        let data = {
            username: this.username,
            bio: this.bio === undefined ? '' : this.bio,
            // This one returns the default image if empty, unlike toAuthJSON which returns nothing.
            // Therefore, this one is what you want when viewing profiles, and toAuthJSON is what
            // you want when loading profile settings forms for which we want an empty field.
            image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
            following: user ? await user.hasFollow(this.id) : false
        };
        return data;
    };
    User.prototype.findAndCountArticlesByFollowed = async function(offset, limit) {
        return sequelize.models.Article.findAndCountAll({
            offset: offset,
            limit: limit,
            subQuery: false,
            order: [
                [
                    'createdAt',
                    'DESC'
                ]
            ],
            include: [
                {
                    model: sequelize.models.User,
                    as: 'author',
                    required: true,
                    include: [
                        {
                            model: sequelize.models.UserFollowUser,
                            on: {
                                followId: {
                                    [Op.col]: 'author.id'
                                }
                            },
                            attributes: [],
                            where: {
                                userId: this.id
                            }
                        }, 
                    ]
                }, 
            ]
        });
    };
    User.prototype.findAndCountArticlesByFollowedToJson = async function(offset, limit) {
        const { count: articlesCount , rows: articles  } = await this.findAndCountArticlesByFollowed(offset, limit);
        const articlesJson = await Promise.all(articles.map((article)=>{
            return article.toJson(this);
        }));
        return {
            articles: articlesJson,
            articlesCount
        };
    };
    User.prototype.getArticleCountByFollowed = async function() {
        return (await User.findByPk(this.id, {
            subQuery: false,
            attributes: [
                [
                    Sequelize.fn('COUNT', Sequelize.col('follows.authoredArticles.id')),
                    'count', 
                ], 
            ],
            include: [
                {
                    model: User,
                    as: 'follows',
                    attributes: [],
                    through: {
                        attributes: []
                    },
                    include: [
                        {
                            model: sequelize.models.Article,
                            as: 'authoredArticles',
                            attributes: []
                        }, 
                    ]
                }, 
            ]
        })).dataValues.count;
    };
    User.validPassword = function(user, password) {
        let hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
        return user.hash === hash;
    };
    User.setPassword = function(user, password) {
        user.salt = crypto.randomBytes(16).toString('hex');
        user.hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
    };
    return User;
};


/***/ })

};
;