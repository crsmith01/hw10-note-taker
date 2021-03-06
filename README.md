# 11 Express.js: Note Taker

## Task

My task was to modify starter code to create an application called Note Taker that could be used to write, save, and delete notes. This application uses an Express.js back-end and save and retrieves note data from a JSON file.

The application’s front-end was already created, so I just needed to build the back-end, connect the two, and then deploy the entire application to Heroku.

## Table of Contents
1. [Technologies Used](#Technologies-Used)
2. [User Stort](#User-Story)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Mock Up](#Mock-Up)
5. [Test](#Tests)
6. [Contact](#Contact)
7. [License](#License)


## Technologies Used
```
1. JavaScript
2. Express.js
3. Node.js
4. Bootstrap
5. HTML
6. CSS
7. Path
```

## User Story

```
AS A small business owner,
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete.
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality: 
![Homepage](./Assets/1-homepage.png)

![Starting blank notes page](./Assets/2-initial-notes.png)

![Note titled “Workout” reads, “BodyCombat 84 and Core 41 at 2pm”, with other notes listed on the left.](./Assets/3-entering-new-seeing-saved.png)

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/4-several-saved.png)

![Remaining notes on the left with first note having been deleted.](./Assets/5-deleted.png)

The deployed application can be found here:
![GitHub link](https://github.com/crsmith01/hw10-note-taker)
![Heroku link](https://arcane-waters-64970.herokuapp.com/)


## Tests
Tests were written with jest. To run tests, enter the following in your command-line: npm run test

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.