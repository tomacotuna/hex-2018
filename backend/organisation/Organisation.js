var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganisationSchema = new mongoose.Schema({
  name: String,
  address: String,        // expand address
  contact: {
    name: String,
    phone: String
  },
  dateJoined: Date,
  premium: Boolean,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

mongoose.model('Organisation', OrganisationSchema);

module.exports = mongoose.model('Organisation');
