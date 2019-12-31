const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static('static'));

let db;
MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
    db = connection;
    app.listen(3000, () => {
        console.log('App started on port 3000');
    });
}).catch(error => {
    console.log("ERROR", error);
})
