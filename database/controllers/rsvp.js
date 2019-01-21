const models = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
	// console.log('hi');
    models.Rsvp.create(data, (err, result) => {
      if (err) {
      	console.log('data not here')
        callback(err)
      } else {
      	console.log('data is here')
      callback(err, result);
    };
  });
  
};

module.exports = {
	findRsvpAndUpdate,
};
