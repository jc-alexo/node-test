const express = require("express", "4.16.2");
const bodyParser = require("body-parser");
const MongoDb = require("mongodb");

const MongoClient = MongoDb.MongoClient;
const ObjectId = MongoDb.ObjectId;
const app = express();

app.set("view engine", "ejs");

MongoClient.connect("mongodb://localhost:27017/NodeTestDB", (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(58531, () => {
		console.log("connection established with NoSQL database");
	});
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    
	if (db.collection("games"))
	{
		db.collection("games").find().toArray((err, result) => {
			if (err) return console.log(err);
			renderHtml(res, {games: result});        
		});
	}
	else{
		renderHtml(res);        
	}
});

app.post("/del", (req, res) => {
	const {_id} = req.body;
	console.log(req.body);
	db.collection("games").deleteOne({_id: ObjectId(_id)}, (err) => {
		if (err) return console.log(err);
		console.log(req.body);        
		res.redirect("/");
		// console.log('entry deleted')

           
	});
});

app.post("/add", (req, res) => {
	db.collection("games").save(req.body, (err, result) => {
		if (err) return console.log(err);

		console.log("saved to database");
		res.redirect("/");
	});
});
function renderHtml (res, data) {
	res.render("index.ejs", data);
}

app.listen(4560);
