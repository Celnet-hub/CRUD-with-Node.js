//importing dependencies
const express = require("express"); 
const { MongoClient } = require("mongodb"); //MongoClient will be used to interact with the database.
const bodyParser = require("body-parser");
const connectToDatabase = require("./config/db.js");
require('dotenv').config();
//initialize app as an instance of express
const app = express();

//creating a bobyparser middleware to parse request from the body of an URL since express cannot handle URLencoded request
app.use(express.urlencoded({ extended: false }));

//create a port for server to listen on
const port = process.env.Port || 1100;
//connect to the database
MongoClient.connect(
	connectToDatabase,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, database) => {
		if (err) {
			console.log(err,connectToDatabase);
		} else {
			console.log("Connected to Database");
		}
		//use th db method and passed in the name of my database (i.e notes)
		const db = database.db("notes"); //bug fixed
		//importing routes exported from index.js
		require("./routes")(app, db); // or const func = require("./routes"); func(app,db);

		//listen on port
		app.listen(port, function () {
			console.log(`We are live on port ${port}`);
		});
	},
);
