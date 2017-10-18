var _this = this;

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

var User = mongoose.model("User", userSchema);

module.exports = User;

// const SomeModelSchema = new Schema({
//     a_string: String,
//     a_date: Date
// });

// let SomeModel = mongoose.model("SomeModel", SomeModelSchema);