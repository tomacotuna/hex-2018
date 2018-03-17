var mongoose = require('mongoose');

//TODO: add constraints
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  occupation: String,
  gender: {
    type: Boolean,
    required: true
  },
  interests: [String],
  organisations: [String],
  countries: [String],
  skills: [String],
  crisisAvailable: {
    type: Boolean,
    required: true
  }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
