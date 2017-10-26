//////////// REQUIRES
const express = require("express", "4.16.2");

//////////// DB
const mongoose = require("mongoose");

//////// INPUT PARSER
const bodyParser = require("body-parser");

//////// ASYNC
const async = require("async");

//////// MONGOOSE MODELS
const Genre = require("./models/genre");
const Game = require("./models/game");


//////////// SERVER CONFIG
const app = express();

//////// TEMPLATING
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

//////// DB CONN
const conn = "mongodb://localhost/NodeTestDB";

mongoose.connect(conn, {
	useMongoClient: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "conn error"));
////////////

//////////// ROUTES

app.get("/", (req, res) => {
	db.collection("games") ? db.collection("games").find().toArray(
		(err, results) => {
			res.render("index.ejs", {games: results});
		}) : res.sendFile(__dirname + "./html/index.html");
});

app.post("/add", (req, res) => {

	let attrs = {name: req.body.name, developer: req.body.developer, genre: req.body.genre, year: req.body.year};
	let newGame = new Game(attrs);
	newGame.save(attrs, (err, newGame) => {
		if (err) return console.log(err);
		res.redirect("/");
	});

});

app.post("/upd", (req, res) => {
	
	let attrs = {name: req.body.name, developer: req.body.developer, genre: req.body.genre, year: req.body.year};
	Game.findByIdAndUpdate(req.body._id, attrs, (err) => {
		if (err) return console.log(err);
		res.redirect("/");
	});
});

app.post("/del", (req, res) => {

	Game.findByIdAndRemove(req.body._id, (err) => {
		if (err) return console.log(err);
		res.redirect("/");
	});
});



app.listen(4560);
