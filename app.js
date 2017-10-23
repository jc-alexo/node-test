const express = require("express", "4.16.2");
const mongoose = require("mongoose");
// const User = require("./models/user");
// const Author = require("./models/author");
// const Book = require("./models/book");
// const BookInstance = require("./models/bookinstance");
const Genre = require("./models/genre");
const Game = require("./models/game");
const bodyParser = require("body-parser");
const async = require("async");
// const indexHtml = require("./html/index.html");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

const conn = "mongodb://localhost/NodeTestDB";

mongoose.connect(conn, {
	useMongoClient: true
});

app.listen(4560);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "conn error"));

app.get("/", (req, res) => {

	// db.collection("games") ? db.collection("games").find().toArray(
	// 	(err, result) => {
	// 		if (err) return console.log(err);
	// 		renderHtml(res, {games:result}); }) : res.sendFile(__dirname + "./html/index.html");
	res.sendFile(__dirname + "/html/index.html");
});

function renderHtml(res, data) {
	res.render("html/index.html", data);
}



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
