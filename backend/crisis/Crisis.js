var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CrisisSchema = new mongoose.Schema({
  name: String,
  Location: String,
  onGoing: Boolean,
  volunteersInvolved: Number
});

mongoose.model('Crisis', CrisisSchema);

module.exports = mongoose.model('Crisis');
