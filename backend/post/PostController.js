var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Post = require('./Post');
var Comment = require('./Comment');

//CREATES A NEW POST
router.post("/", function(req,res){
  Post.create({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author._id
  },
  function(err,post){
    if(err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(post);
  })
})

// RETURNS ALL THE POST IN THE DATABASE
router.get("/", function (req, res) {
    Post.find({}, function (err, posts) {
        if (err) return res.status(500).send("There was a problem finding the posts.");
        res.status(200).send(posts);
    });
});

//RETURN A SINGLE POST FROM THE DATABASE
  router.get('/:id',function(req,res){
    Post.findById({_id: req.query.id},function(err,post){
      if (err) return res.status(500).send("There was a problem finding the post.");
      if (!post) return res.status(404).send("No post found.");
      res.status(200).send(post);
    });
  });

  //Add a comment to a post
    router.post('/:id/comment',function(req,res){
      Comment.create({
        author: req.body.userId,
        text: req.body.text,
        post: req.query.id
      },(err,comment) => {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        Post.findByIdAndUpdate({_id: comment.post}, {$push: {comments: comment}}, function(err,comment){
          if(err) return res.status(500).send("There was a problem returning the organisation.")
          res.status(200).send(comment);
        });
      });
    });
//
//   // DELETES A ORGANISATION FROM THE DATABASE
//   router.delete('/:id', function (req, res) {
//       Organisation.findByIdAndRemove({_id: req.query.id }, function (err, organisation) {
//           if (err) return res.status(500).send("There was a problem deleting the organisation.");
//           res.status(200).send("User: "+ organisation.name +" was deleted.");
//       });
//   });
//
//   // UPDATES A SINGLE USER IN THE DATABASE
//   router.put('/:id', (req, res) => {
//       Organisation.findByIdAndUpdate({_id:req.query.id}, req.body, {new: true}, (err, organisation) => {
//           if (err) return res.status(500).send("There was a problem updating the organisation.");
//           res.status(200).send(organisation);
//       });
//   });

module.exports = router;
