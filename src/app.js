"use strict";

//////////// REQUIRES
var express = require("express", "4.16.2");

//////////// DB
var mongoose = require("mongoose");

//////// INPUT PARSER
var bodyParser = require("body-parser");

//////// ASYNC
var async = require("async");

//////// MONGOOSE MODELS
var Genre = require("./models/genre");
var Game = require("./models/game");

//////////// SERVER CONFIG
var app = express();

//////// TEMPLATING
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//////// DB CONN
var conn = "mongodb://localhost/NodeTestDB";

mongoose.connect(conn, {
	useMongoClient: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "conn error"));
////////////

//////////// ROUTES

app.get("/", function (req, res) {
	db.collection("games") ? db.collection("games").find().toArray(function (err, results) {
		res.render("index.ejs", { games: results });
	}) : res.sendFile(__dirname + "./html/index.html");
});

app.post("/add", function (req, res) {

	var attrs = { name: req.body.name, developer: req.body.developer, genre: req.body.genre, year: req.body.year };
	var newGame = new Game(attrs);
	newGame.save(attrs, function (err, newGame) {
		if (err) return console.log(err);
		res.redirect("/");
	});
});

app.post("/upd", function (req, res) {

	var attrs = { name: req.body.name, developer: req.body.developer, genre: req.body.genre, year: req.body.year };
	Game.findByIdAndUpdate(req.body._id, attrs, function (err) {
		if (err) return console.log(err);
		res.redirect("/");
	});
});

app.post("/del", function (req, res) {

	Game.findByIdAndRemove(req.body._id, function (err) {
		if (err) return console.log(err);
		res.redirect("/");
	});
});

app.listen(4560);