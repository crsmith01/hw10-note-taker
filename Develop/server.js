// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// pulling data from the db.json file
// let notes = fs.readFileSync('./db/db.json');
// notes = JSON.parse(notes)


// Middleware to set up Express App to handle data parsing - https://expressjs.com/en/guide/using-middleware.html
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// Middleware to load static resources
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));


// Routes - give the server a map of how to respond when users visit or request data from various URLs

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// Listener
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
