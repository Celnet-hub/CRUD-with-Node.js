/*
 * This module handles all CRUD Routes.
 */

var ObjectID = require("mongodb").ObjectID;


//exported to index.js
module.exports = function (app, db) {
	//CREATE Notes
	app.post("/notes", (req, res) => {
		//notes are created here
		const note = {
			Name: req.body.Name,
			Title: req.body.Title,
			Body: req.body.Body,
			Religion: req.body.Religion,
			Tribe: req.body.Tribe,
			School:req.body.School
		};
		db.collection("my notes").insertOne(note, (err, result) => {
			if (err) {
				res.send({ 'error': "An error has occurred" });
			} else {
				res.send(result.ops[0]);
			}
		});
	});

	//READ Notes
	app.get("/notes/:id", (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) }; //items to be read.

		//create a collection and name it 'my notes'
		db.collection("my notes").findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': "An error has occurred" });
			} else {
				res.send(item);
			}
		});
	});

	//UPDATE
	app.put("/notes/:id", (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) }; //items to be read.
		const note = {
			Name: req.body.Name,
			Title: req.body.Title,
			Body: req.body.body,
			Religion: req.body.Religion,
			Tribe: req.body.Tribe,
		};
		db.collection("my notes").updateOne(details, note, (err,item) => {
			if (err) {
				res.send({ 'error': "An error has occurred" });
			} else {
				res.send(item);
			}
		});
	});

	//DELETE Notes
	app.delete("/notes/:id", (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) }; //items to be read.
		db.collection("my notes").deleteOne(details, (err) => {
			if (err) {
				res.send({ 'error': "An error has occurred" });
			} else {
				res.send("Note with " + id + " has been deleted.");
			}
		});
	});
};
