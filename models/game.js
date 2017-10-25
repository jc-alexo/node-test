const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = Schema({
	name: {type: String, required: true, max: 100},
	developer: {type: String, required: true, max: 100},
	// genre: {type: Schema.ObjectId, ref: "Genre", required: true},
	genre: {type: String, required: true},
	year: {type: Number, required: true, min: 1990, max: 2017},
	created_at: {type: Date},
	updated_at: {type: Date}
});

GameSchema
	.virtual("url")
	.get(function(){
		return "catalog/game/" + this._id;
	});

GameSchema.pre("save", function (next) {
	
	let currentDate = new Date();

	this.updated_at = currentDate;

	if (!this.created_at) this.created_at = currentDate;

	next();

});

module.exports = mongoose.model("Game", GameSchema);