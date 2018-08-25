const express = require('express');
const app = express();
const path = require('path');
//const db = require('./db/postgresql.js');
const eventController = require('./db/eventControllers/productEventController.js');
var server = require('http').Server(app);
const db = require('./db/postgresql.js');
const http = require('http');
const socket = require('socket.io');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));


//============> PRODUCT ROUTES <===============\\

app.get('/main',
    eventController.getAllProducts,
)

// app.get('/mens',
//     eventController.filterByMen,
// )

// app.get('/womens',
//     eventController.filterByWomen,
// )

// app.get('/cart',
//     eventController.getCart,
// )




//==================> SOCKETS <=====================\\
server = app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});