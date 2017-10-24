"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GameSchema = Schema({
	name: { type: String, required: true, max: 100 },
	developer: { type: String, required: true, max: 100 },
	genre: { type: Schema.ObjectId, ref: "Genre", required: true },
	year: { type: Number, required: true, max: 100 },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

GameSchema.virtual("url").get(function () {
	return "catalog/game/" + this._id;
});

GameSchema.pre("save", function (next) {

	var currentDate = new Date();

	this.updated_at = currentDate;

	if (!this.created_at) this.created_at = currentDate;
});

module.exports = mongoose.model("Game", GameSchema);