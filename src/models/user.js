"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	create_at: Date,
	updated_at: Date
});

userSchema.methods.dudify = function () {
	_this.name = _this.name + "-dude";

	return _this.name;
};

userSchema.pre("save", function (next) {
	var currentDate = new Date();

	_this.updated_at = currentDate;

	if (!_this.created_at) _this.created_at = currentDate;

	next();
});
var User = mongoose.model("User", userSchema);

module.exports = User;

// const SomeModelSchema = new Schema({
//     a_string: String,
//     a_date: Date
// });

// let SomeModel = mongoose.model("SomeModel", SomeModelSchema);