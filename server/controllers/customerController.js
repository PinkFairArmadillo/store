const db = require("../postgresql.js");


///LEGACY CODE

function getCustomer (req, res, next) {
    db.query('INSERT * FROM "Customer" ')
    .then(cusomerData => {
    res.send(customerData);
})
};

/////LEGACY CODE

module.exports = {
  createUser: (req, res, next) => {
    const username = req.body.username;
    db.one('SELECT * FROM customer WHERE username = $1', username)
      .then(customer => {
          res.json(customer.id) // print user object;
      })
      .catch(error => {
          res.send("Oops")   
      });     
    //let customerId;
    
    // db.one(`INSERT INTO "customer"("username") VALUES($1) RETURNING "id"`, [username])
    //     .then(data => {
    //         //console.log("DATA ID", data.id);
    //         let customerId = data.id
    //         //res.json(data);

    //         db.one(`INSERT INTO "cart"("customerid") VALUES($1) RETURNING "id"`, [customerId])
    //             .then(data => {
    //                 console.log("DATA ID", data); // print new user id;
    //                 res.json(data);
    //             })
    //             .catch(error => {
    //                 console.log('ERROR:', error); // print error;
    //             });



    //     })
    //     .catch(error => {
    //         console.log('ERROR:', error); // print error;
    //     });

    // db.one(`INSERT INTO "Cart"() VALUES() RETURNING "id"`, [])
    //     .then(data => {
    //         console.log("DATA ID", data); // print new user id;
    //         res.json(data);
    //     })
    //     .catch(error => {
    //         console.log('ERROR:', error); // print error;
    //     });



    // db.any(`SELECT * FROM "Customer" WHERE "Email" = $1`, ["bob@gmail.com"])
    // .then(function(data) {
    //     console.log(data);
    //     // success;
    // })
    // .catch(function(error) {
    //     console.log('Error:', error);
    // });
  },
  checkIfUserExists: (req, res, next) => {
      db.one('SELECT * FROM customers WHERE username = $1', username)
          .then(customer => {
          })
          .catch(error => {   
          });  
  }
}