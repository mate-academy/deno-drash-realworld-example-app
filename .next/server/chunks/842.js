"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 842:
/***/ ((module) => {


let isProduction;
if (process.env.NEXT_PUBLIC_NODE_ENV === undefined) {
    isProduction = "production" === 'production';
} else {
    isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production';
}
let demoMaxObjs;
if (isProduction) {
    demoMaxObjs = 1000;
} else {
    demoMaxObjs = 10;
}
let databaseUrl;
if (false) {} else {
    databaseUrl = process.env.DATABASE_URL;
}
module.exports = {
    apiPath: '/api',
    appName: 'Conduit',
    articleLimit: 10,
    defaultProfileImage: `https://static.productionready.io/images/smiley-cyrus.jpg`,
    demoMaxObjs: demoMaxObjs,
    // If Sequelize were better, we would be able to do much more in individual complex queries.
    // But as things stand, we just have to bring data into memory and do secondary requests.
    maxObjsInMemory: 10000,
    /** @type {boolean | 'blocking'} */ fallback: 'blocking',
    googleAnalyticsId: 'UA-47867706-3',
    isDemo: process.env.NEXT_PUBLIC_DEMO === 'true',
    // Default isProduction check. Affetcs all aspects of the application unless
    // they are individually overridden, including:
    // * is Next.js server dev or prod?
    // * use SQLite or PostgreSQL?
    // * in browser effects, e.g. show Google Analytics or not?
    isProduction,
    // Overrides isProduction for the "is Next.js server dev or prod?" only.
    isProductionNext: process.env.NODE_ENV_NEXT_SERVER_ONLY === undefined ? isProduction : process.env.NODE_ENV_NEXT_SERVER_ONLY === 'production',
    port: process.env.PORT || 80,
    // Makes deployment impossibly slow if there are lots of pages
    // like in a real-world production public website.
    prerenderAll: false,
    postgres: process.env.REALWORLD_PG === 'true',
    revalidate: 10,
    secret: isProduction ? process.env.SECRET : 'secret',
    verbose: process.env.VERBOSE,
    blacklistTags: new Set([
        'cypress'
    ]),
    // Used by sequelize-cli as well as our source code.
    development: {
        dialect: 'sqlite',
        logging: true,
        storage: 'db.sqlite3'
    },
    production: {
        url: databaseUrl || 'postgres://realworld_next_user:a@mateacademy-database-development.cqw7zu22pde8.eu-central-1.rds.amazonaws.com:5432/realworld_next',
        dialect: 'postgres',
        dialectOptions: {
        },
        logging: true
    }
};


/***/ })

};
;