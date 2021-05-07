// Can probs delete thsi - likely won't need path package here
// const path = require('path');

// Load data - linking routes to data sources, which hold (arrays - possibly? - that's what db.json looks like - title and text in note array) of information on notes
const { response, request } = require('express');
const noteData = require('../db/db.json');
// const uuid = require('uuid');
// OR is the uuid part like this from https://www.geeksforgeeks.org/node-js-npm-uuid/
const { v4 : uuidv4 } = require('uuid');


// Routes

module.exports = (app) => {
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    // Displays saved api view of notes - function will send json data of the notes upon request
    app.get('/api/notes' = (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            // throw error if an error occurs
            if (err) throw err;
            // otherwise parse the json data
            else {res.json(JSON.parse(data))};
        });
    };

    // * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, 
    // and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved 
    // (look into `npm` packages that could do this for you).
    // ****uuid = creates unique ID = Universally Unique ID

    // Function to actually POST the data to the database (database here is db.json)
    app.post('/api/notes', (req, res) => {

        // Need to first add an object to the notes array - using user input
        const newNote = {
            title: request.body.title,
            text: request.body.text,
            // check that this is the right way to write it in this instance 
            id: uuidv4(),
        };
         
        // will need to go back and forth from JSON to array
        fs.readFile('../db/db.json', (err, data) => {
            // remember: parse() takesa json string and makes it a js object, and stringify() takes a js onject and makes it a json string
            const notes = JSON.parse(data)
            

            // Then need to push that object to the notes array
            // push the new note to the array
            notes.push(newNote);

            // change back to json and add to db.json file
            fs.writeFile('../db/db.json'), JSON.stringify(notes) = (err, res) => {
                // if an error occurs, throw an error
                if (err) throw err;
                 // otherwise parse the json data
                else {res.send(newNote)};
            };   
        })
        // Then end
        response.end();
    });


    // BONUS - DELETE request
    // * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
    // In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
    // and then rewrite the notes to the `db.json` file.
    app.delete('/api/notes/:id', (req, res) => {
        // read all notes from the db.json file

        // remove the note with the given id property

        // rewrite the notes to the db.json file

        // then end
        response.end();
    })
}
