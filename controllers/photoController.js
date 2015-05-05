

var Photo = require('../models/photo.js');

// Post
exports.postPhoto = function(req, res) {

	var photo = new Photo();

	photo.country = req.body.country;
	photo.state = req.body.state;
	photo.break = req.body.break;
	photo.city = req.body.city;
	photo.comment = req.body.comment;
	photo.src = req.body.src;
	photo.date = req.body.date;

	photo.save(function(err) {
		if (err) {
			res.send(err);
		};
		res.json({success : true, message : 'Photo added succesfully'});
	})

};


// Get
exports.getPhotos = function(req, res) {

	var query = {};
	query[req.body.criteria] = req.body.value;

	console.log(query);

	// Photo.find(query, function(err, data) {
	// 	res.json(data);
	// });

Photo.find(query).limit(20).exec(function(err, data) {
		res.json(data);
	});

};