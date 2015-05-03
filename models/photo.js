var mongoose = require('mongoose');

var BreakPhoto = new mongoose.Schema({
	country : String,
	state : String,
	beach : String,
	city : String,
	comment : String
	src : String
});

module.exports = mongoose.model('BreakPhoto', BreakPhoto);