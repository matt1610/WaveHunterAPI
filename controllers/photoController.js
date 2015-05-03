

var Photo = require('../models/photo.js');

// Post
exports.postPhoto = function(req, res) {

	var photo = new Photo();

	photo.country = req.query.country;
	photo.state = req.query.state;
	photo.beach = req.query.beach;
	photo.city = req.query.city;
	photo.comment = req.query.comment;
	photo.src = req.query.src;

	photo.save(function(err) {
		if (err) {
			res.send(err);
		};
		res.json({success : true, message : 'Photo added succesfully'});
	})

};


// Get
exports.getPhotos = function(req, res) {



};