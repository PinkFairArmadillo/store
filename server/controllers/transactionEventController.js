const db = require("../postgresql.js");

function getOrder (req, res, next) {
    db.query('Select * From "Orders"')
    .then(getOrderData => {
    res.send(customerData);
})
};