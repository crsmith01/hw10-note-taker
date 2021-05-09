// Dependencies
const fs = require('fs');
// uuid = Universally Unique ID - https://www.geeksforgeeks.org/node-js-npm-uuid/
const { v4 : uuidv4 } = require('uuid');


// Routes

module.exports = (app) => {
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    // Displays saved api view of notes - function will send json data of the notes upon request
    app.get('/api/notes', (req, res) => {
        fs.readFile('../db/db.json', (err, data) => {
            // throw error if an error occurs
            if (err) throw err;
            // otherwise parse the json data
            else {res.json(JSON.parse(data))};
        });
    });

    // * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, 
    // and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved 
    // (look into `npm` packages that could do this for you).
    // ****uuid = creates unique ID = Universally Unique ID

    // Function to actually POST the data to the database (database here is db.json)
    app.post('/api/notes', (req, res) => {

        // Need to first add an object to the notes array - using user input
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            // using that unviversally unique identifyer package
            id: uuidv4(),
        };
         
        // will need to go back and forth from JSON to array
        fs.readFile('../db/db.json', (err, data) => {
            // remember: parse() takes a json string and makes it a js object, and stringify() takes a js onject and makes it a json string
            const postNotes = JSON.parse(data);

            // Then need to push that object to the notes array
            postNotes.push(newNote);

            // change back to json and add to db.json file
            fs.writeFile('../db/db.json'), JSON.stringify(postNotes) = (err, res) => {
                // if an error occurs, throw an error
                if (err) throw err;
                 // otherwise parse the json data
                else {res.send(newNote)};
            };   
        });
        // Then end
        response.end();
    });


    // BONUS - DELETE request
    // * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
    // In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
    // and then rewrite the notes to the `db.json` file.
    app.delete('/api/notes/:id', (req, res) => {
        const noteID = parseINT(req.params.id);
        // read all notes from the db.json file
        fs.readFile('../db/db.json', (err, data) => {
            if (err) throw err;

            // remove the note with the given id property. Return is implied in arrow function, right? -???
            const deletingNotes = JSON.parse(data);
            const newNotesArray = deletingNotes.filter((note) => {
                return (note.id !== noteID);
            });

        // rewrite the notes to the db.json file
        fs.writeFile('../db/db.json', JSON.stringify(newNotesArray), (err, res) => {
            if (err) throw err;
        });
        console.log('The selected note has been deleted.')
        // then end
        response.end();
    });
    });
};
