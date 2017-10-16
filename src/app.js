"use strict";

var express = require("express", "4.16.2");
var bodyParser = require("body-parser");
var MongoDb = require("mongodb");

var MongoClient = MongoDb.MongoClient;
var ObjectId = MongoDb.ObjectId;
var app = express();

app.set("view engine", "ejs");

MongoClient.connect("mongodb://localhost:27017/NodeTestDB", function (err, database) {
	if (err) return console.log(err);
	db = database;
	app.listen(58531, function () {
		console.log("connection established with NoSQL database");
	});
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

	if (db.collection("games")) {
		db.collection("games").find().toArray(function (err, result) {
			if (err) return console.log(err);
			renderHtml(res, { games: result });
		});
	} else {
		renderHtml(res);
	}
});

app.post("/del", function (req, res) {
	var _id = req.body._id;

	console.log(req.body);
	db.collection("games").deleteOne({ _id: ObjectId(_id) }, function (err) {
		if (err) return console.log(err);
		console.log(req.body);
		res.redirect("/");
		// console.log('entry deleted')

	});
});

app.post("/add", function (req, res) {
	db.collection("games").save(req.body, function (err, result) {
		if (err) return console.log(err);

		console.log("saved to database");
		res.redirect("/");
	});
});
function renderHtml(res, data) {
	res.render("index.ejs", data);
}

app.listen(4560);