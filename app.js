const express = require("express", "4.16.2");
const mongoose = require("mongoose");
// const User = require("./models/user");
// const Author = require("./models/author");
// const Book = require("./models/book");
// const BookInstance = require("./models/bookinstance");
const Genre = require("./models/genre");
const Game = require("./models/game");
// const Genre = mongoose.model("Genre", GenreSchema);
// const Game = mongoose.model("Game", GameSchema);
const bodyParser = require("body-parser");
const async = require("async");
// const indexHtml = require("./html/index.html");

const app = express();

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

const conn = "mongodb://localhost/NodeTestDB";

mongoose.connect(conn, {
	useMongoClient: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "conn error"));

app.get("/", (req, res) => {
	db.collection("game") ? db.collection("game").find().toArray(
		(err, result) => {
			res.render("index.ejs", {game: result});
		}) : res.sendFile(__dirname + "./html/index.html");
});

app.post("/add", (req, res) => {
	
	// let {name, developer, genre: [genre, subgenre], year} = req.body;
	// let attrs = {name: req.name, developer: req.developer, genre: [req.genre, req.subgenre], year: req.year};

	// let attrs = {};
	// let newGame = new Game(attrs);
	// newGame.create(attrs, (err, newGame) => {
	// 	if (err) return console.log(err);
	// 	res.redirect("/");
	// console.log(req.body);

	let attrs = {name: req.body.name, developer: req.body.developer, genre: req.body.genre, year: req.body.year};
	let newGame = new Game(attrs);
	newGame.save(attrs, (err, newGame) => {
		if (err) return console.log(err);
		res.redirect("/");
	});

});

function renderHtml(res, data) {
	res.render("html/index.html", data);
}



function gameCreate(name, developer, genre, year, cb)
{
	let gameAttr = {name: name, developer: developer, genre: genre, year: year};

	let game = new Game(gameAttr);

	game.save(() => {
		
		if (err)
		{
			cb(err, null);
			return;
		}
		
		console.log("New Game! " + "name: " + name + "genre" + genre);
		genre.push(genre);
		cb(null, genre);
	});
}

app.listen(4560);

// let dbConn = mongoose.connect("mongodb://localhost/NodeTestDB");

// var dex = new User({
// 	name: "Ayatollah",
// 	username: "ayatollah",
// 	password: "jihadwarrior"
// });

// dex.dudify((err, name) => {
// 	if (err) throw err;

// 	console.log("Your dude name is: " + name);
// });

// dex.save((err)=>{
// 	if (err) throw err;

// 	console.log("User saved successfully");
// });

// dbConn.disconnect();



// const model = require("./schema.js");

// const mongoDb = "mongodb://localhost/NodeTestDB";

// mongoose.connect(mongoDb, {
// 	useMongoClient: true
// })

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Connection error"));

// const bodyParser = require("body-parser");


// const MongoClient = mongoDb.MongoClient;
// const ObjectId = mongoDb.ObjectId;


// app.set("view engine", "ejs");



// mongoose.connect("mongodb://localhost/test");

// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
// });

// app.get("/", (req, res) => {
// 	res.sendFile(__dirname + "/index.html")
// });

// app.listen(4560);



/////////////////////
// MongoClient.connect("mongodb://localhost:27017/NodeTestDB", (err, database) => {
// 	if (err) return console.log(err);
// 	db = database;
// 	app.listen(58531, () => {
// 		console.log("connection established with NoSQL database");
// 	});
// });

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
    
// 	if (db.collection("games"))
// 	{
// 		db.collection("games").find().toArray((err, result) => {
// 			if (err) return console.log(err);
// 			renderHtml(res, {games: result});     
// 		});
// 	}
// 	else{
// 		renderHtml(res);
// 	}
// });

// app.post("/del", (req, res) => {
// 	const {_id} = req.body;
// 	console.log(req.body);
// 	db.collection("games").deleteOne({_id: ObjectId(_id)}, (err) => {
// 		if (err) return console.log(err);
// 		console.log(req.body);        
// 		res.redirect("/");
// 		// console.log('entry deleted')

           
// 	});
// });

// app.post("/add", (req, res) => {
// 	db.collection("games").save(req.body, (err, result) => {
// 		if (err) return console.log(err);

// 		console.log("saved to database");
// 		res.redirect("/");
// 	});
// });
// function renderHtml (res, data) {
// 	res.render("../index.html", data);
// }
// app.get("/", (req, res) => {
// 	renderHtml(res);
// });

// app.listen(4560);
