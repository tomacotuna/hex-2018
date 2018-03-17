var mongoose = require('mongoose');

//TODO: add constraints
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  dob: String,
  occupation: String,
  gender: String,
  interests: [String],
  organisations: [String],
  countries: [String],
  skills: [String],

  crisisAvailable: Boolean,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
