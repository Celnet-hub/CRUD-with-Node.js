require('dotenv').config();

//exported to app.js
let password = process.env.PASSWORD;
let url = `mongodb+srv://notes:${password}@notesdb.wqdqw.mongodb.net/notes?retryWrites=true&w=majority`;

module.exports = url;
