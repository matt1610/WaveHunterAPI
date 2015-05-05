

var Photo = require('../models/photo.js');

// Post
exports.postPhoto = function(req, res) {

	var photo = new Photo();

	photo.country = req.body.country.toLowerCase();
	photo.state = req.body.state.toLowerCase();
	photo.break = req.body.break.toLowerCase();
	photo.city = req.body.city.toLowerCase();
	photo.comment = req.body.comment;
	photo.src = req.body.src;
	photo.date = req.body.date;
	photo.user = req.body.user;

	photo.save(function(err) {
		if (err) {
			res.send(err);
		};
		res.json({success : true, message : 'Photo added succesfully'});
	})

};


// Get
exports.getPhotos = function(req, res) {

	var reg = req.body.value;

	if (req.body.type == 'Search') {
		Photo.find().or(
			[
				{ 'state': { $regex: reg }},
				{ 'break': { $regex: reg }},
				{ 'city': { $regex: reg }}
			])
			.limit(20)
			.exec(function(err, data) {
		    	res.json(data);
			});
	} else {
		var query = {};
		query[req.body.criteria] = req.body.value;

		console.log(query);

		// Get all
		Photo.find(query).limit(20).exec(function(err, data) {
			res.json(data);
		});
	}

	

	
	

};