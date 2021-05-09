// Dependency
const express = require('express');


// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Middleware to set up Express App to handle data parsing - https://expressjs.com/en/guide/using-middleware.html
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Middleware to load static resources
app.use(express.static('public'));


// Routes - give the server a map of how to respond when users visit or request data from various URLs

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);



// Listener
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));