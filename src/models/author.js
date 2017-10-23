var _this = this;

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = Schema({
	first_name: { type: String, required: true, max: 100 },
	family_name: { type: String, required: true, max: 100 },
	date_of_birth: { type: Date },
	date_of_death: { type: Date }
});

AuthorSchema.virtual("name").get(function () {
	return _this.family_name + "," + _this.first_name;
});

AuthorSchema.virtual("url").get(function () {
	return "/catalog/author" + _this._id;
});

module.exports = mongoose.model("Author", AuthorSchema);