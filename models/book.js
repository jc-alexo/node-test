const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BookSchema = Schema({
	title: {type: String, required: true},
	author: {type: Schema.ObjectId, ref: "Author", required: true},
	summary: {type: String, required: true},
	isbn: {type: String, require: true},
	genre: [{type: Schema.OBjectId, ref: "Genre"}]
});

BookSchema
	.virtual("url")
	.get(() => {
		return "/catalog/book" + this._id;
	});

module.exports = mongoose.model("Book", BookSchema);