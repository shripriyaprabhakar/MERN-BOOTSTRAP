const mongoose = require('mongoose');

const RsvpSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  guests: Number
});

const Rsvp = mongoose.model('Rsvp', RsvpSchema, 'rsvp');

module.exports = {
	Rsvp,
};