// This module initializes a connection with out PostgresQL database
const connection = require('./db-path.js')
const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;