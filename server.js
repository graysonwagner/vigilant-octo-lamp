// START OF SERVER FILE "INCOMPLETE"




const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/Develop/public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});


let notes

const listOfNotes = fs.readFileSync('Develop/db/db.json');
if (listOfNotes) {
    notes = JSON.parse(listOfNotes);
}

app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

