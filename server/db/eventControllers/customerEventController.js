const db = require("../postgresql.js");

function getCustomer (req, res, next) {
    db.query('INSERT * FROM "Customer" ')
    .then(cusomerData => {
    res.send(customerData);
})
};