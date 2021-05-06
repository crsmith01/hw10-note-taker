// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;


// Notes array - empty to start, saved notes will be appended to it
// Or should this be pulling data from the db.json file???
const notes = []

// Or should this be pulling data from the db.json file??? In which case it would be
const notes = fs.readFile('./db/db.json');
notes = JSON.parse(notes)



// Sets up Express App to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// Revisit - Erich said this is needed
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));



// Routes
// html GET requests - each sends the specified html file upon request
// ***Should these paths be ../public etc.? instead of ./public etc?

// for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// Redirects to homepage if user types in anything aside from the two aforementioned paths
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// Displays saved api view of notes - function will send json data of the notes upon request
app.get('/api/notes', (req, res) => res.json(notes));

// Function to actually POST the data to the database



// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
