// ************
// DEPENDENCIES
// ************
const express = require('express');
const path = require('path');
const fs = require('fs');

// uuid = Universally Unique ID - https://www.geeksforgeeks.org/node-js-npm-uuid/
const { v4 : uuidv4 } = require('uuid');


// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3030;


// ************
// MIDDLEWARE
// ************
// Middleware to set up Express App to handle data parsing - https://expressjs.com/en/guide/using-middleware.html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to load static resources
app.use(express.static('public'));


// ************
// ROUTES
// ************

// HTML GET requests - each sends the specified html file upon request
// for homepage
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// for notes page
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// Redirects to homepage if user types in anything aside from the two aforementioned paths
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});


// API Routes - GET, POST, and DELETE
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// Displays saved api view of notes - function will send json data of the notes upon request
app.get('/api/notes', function (req, res) {
    fs.readFile(path.join(__dirname, '/db/db.json'), function (err, response) {
        const notes = JSON.parse(response);
        res.json(notes);
    });
});


// Function to actually POST the data to the database (database here is db.json)
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved 
app.post('/api/notes', function (req, res) {
    fs.readFile(path.join(__dirname, '/db/db.json'), function (err, response) {
        // remember: parse() takes a json string and makes it a js object, and stringify() takes a js onject and makes it a json string
        const postNotes = JSON.parse(response);
        const noteRequest = req.body;

        // create object for new note
        const newNote = {
            title: noteRequest.title,
            text: noteRequest.text,
            // using that unviversally unique identifyer package
            id: uuidv4(),
        };

        // Then need to push that object to the notes array
        postNotes.push(newNote);
        res.json(newNote);
        // change back to json and add to db.json file
        fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(postNotes, null, 2), function (err) {
            if (err) throw err;
        });
    });
});

// BONUS - DELETE request
// * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
// Need to look into uuid
app.delete('/api/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    
    // read all notes from the db.json file
    fs.readFile(path.join(__dirname, '/db/db.json'), function (err, data) {
        // remove the note with the given id property. 
        const deletingNotes = JSON.parse(data);
        const newNotesArray = deletingNotes.filter((item) => {
            return (item.id !== noteId)
        });
        // rewrite the notes to the db.json file
        fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(newNotesArray, null, 2), function (err) {
            if (err) throw err;
            // then end
            res.end(); 
        });
    });
});


// ************
// LISTENER
// ************
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}.`));