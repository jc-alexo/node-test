const express = require("express", "4.16.2");
const mongoose = require("mongoose");
var User = require("./models/user");

const app = express();

var dex = new User({
	name: "Dex",
	username: "dexjackson",
	password: "passc0de"
});

dex.dudify((err, name) => {
	if (err) throw err;

	console.log("Your dude name is: " + name);	
});

dex.save(()=>{
	if (err) throw err;

	console.log("User saved successfully");
});

mongoose.connect("mongodb://localhost/NodeTestDB");



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
