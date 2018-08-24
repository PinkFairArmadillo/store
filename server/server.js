const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/postgresql.js');

console.log(db);

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));