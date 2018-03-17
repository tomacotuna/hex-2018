var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: 'Organisation'},
  title: String,
  text: String,
  //TODO: comment thread
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]

});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
