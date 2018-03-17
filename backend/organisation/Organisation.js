var mongoose = require("mongoose");

var OrganisationSchema = new mongoose.Schema({
  name: String,
  address: String,        // expand address
  contact: {
    name: String,
    phone: String
  },
  dateJoined: Date,
  premium: Boolean
});

mongoose.model('Organisation', OrganisationSchema);

module.exports = mongoose.model('Organisation');
