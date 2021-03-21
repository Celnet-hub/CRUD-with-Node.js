//This is the master route file. where all routes meet.
const noteRoutes = require('./note_routes');

//exported to app.js
module.exports = function (app,db) {
    noteRoutes(app,db);
};