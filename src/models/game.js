"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GameSchema = Schema({
	name: { type: String, required: true, max: 100 },
	developer: { type: String, required: true, max: 100 },
	genre: { type: Schema.ObjectId, ref: "Genre", required: true },
	year: { type: Number, required: true, max: 100 }
});

GameSchema.virtual("url").get(function () {
	return "catalog/game/" + this._id;
});

GameSchema.pre("save", function (next) {});

module.exports = mongoose.model("Game", GameSchema);