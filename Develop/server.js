// Dependencies
const express = require('express');
const path = require('path');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;


// notes array???
const notes = []


// Sets up Express App to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// Revisit - Erich said this is needed
app.use(express.static(__dirname + '/public'));
app.listen(express.static(__dirname + '/db'));



// Routes
// basic routes for sending user to AJAX page first
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// displays all saved notes and ____
app.get('/api/tables', (req, res) => res.json(notes));



// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
