// Dependencies - include path package to get the correct file path for the html pages
const path = require('path');

// Routes
module.exports = (app) => {
    // html GET requests - each sends the specified html file upon request
    // ***Should these paths be ../public etc.? instead of ./public etc?

    // for homepage
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
    
    // for notes page
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    
    // Redirects to homepage if user types in anything aside from the two aforementioned paths
    app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}