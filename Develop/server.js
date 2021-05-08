// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;


// Notes array - empty to start, saved notes will be appended to it
// Or should this be pulling data from the db.json file???
const notes = []

// Or should this be pulling data from the db.json file??? In which case it would be
const notes = fs.readFile('./db/db.json');
notes = JSON.parse(notes)


// Middleware - https://expressjs.com/en/guide/using-middleware.html
// Sets up Express App to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// Revisit - Erich said this is needed
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));
// Do I need something for the routes here too? like 
// app.use(htmlRoutes);
// app.use(apiRoutes);


// Routes
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// What's the reasoning behind this format change instead?

// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

// Listener
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
