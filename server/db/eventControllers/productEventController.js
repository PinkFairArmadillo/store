const db = require("../postgresql.js");

function getAllProducts (req, res, next) {
    db.query('SELECT * FROM "Product" ')
    .then(productData => {
    res.send(productData);
})
};

function filterByMen(req, res, next) {
    db.query(`SELECT * FROM "Product" WHERE "genre" = 'men' `)
    .then(productDataMen => {
        res.send(productDataMen);
    })
};

function filterByWomen(req, res, next) {
    db.query(`SELECT * FROM "Product" WHERE "genre" = 'women' `)
    .then(productDataWomen => {
        res.send(productDataWomen);
    })
};


module.exports = {
    getAllProducts,
    filterByMen,
    filterByWomen
};