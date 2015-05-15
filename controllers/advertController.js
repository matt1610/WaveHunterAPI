



var Advert = require('../models/advert.js');

exports.createAdvert = function(req, res) {
  var advert = new Advert({
    src: req.query.src,
    link: req.query.link,
    client : req.query.client
  });
  
  advert.save(function(err) {
    if (err) {
      // res.send(err);
      res.json({ message: 'Something went wrong', success : false });
    } else{
      res.json({ message: 'New advert created', success : true });
    }
      

    
  });
};



exports.getAdvert = function(req, res) {
  Advert.find(function(err, adverts) {
    if (err)
      res.send(err);

    res.json(adverts);
  });
};