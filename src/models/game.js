"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GameSchema = Schema({
	name: { type: String, required: true, max: 100 },
	genre: { type: Schema.ObjectId, ref: "Genre", required: true },
	year: { type: String, required: true, max: 100 }
});

GameSchema.virtual("url").get(function () {
	return "catalog/game/" + this._id;
});

module.exports = mongoose.model("Game", GameSchema);