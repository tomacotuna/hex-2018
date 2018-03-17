var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  text: String,
  //TODO: comment thread
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');
