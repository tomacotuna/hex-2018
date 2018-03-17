var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Organisation = require('./Organisation');
var Post = require('../post/Post');

//CREATES A NEW ORGANISATION
router.post("/", function(req,res){
  Organisation.create({
    name: req.body.name,
    address: req.body.address,        // expand address
    contact: {
      name: req.body.contact.name,
      phone: req.body.contact.phone_number
    },
    dateJoined: req.body.dateJoined,
    premium: req.body.premium
  },
  function(err,organisation){
    if(err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(organisation);
  })
})

// RETURNS ALL THE ORGANISATIONS IN THE DATABASE
router.get('/', function (req, res) {
    Organisation.find({}, function (err, organisations) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(organisations);
    });
});

//RETURN A SINGLE ORGANISATION FROM THE DATABASE
  router.get('/:id',function(req,res){
    Organisation.findById({_id: req.query.id},function(err,organisation){
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!organisation) return res.status(404).send("No organisation found.");
      res.status(200).send(organisation);
    })
  })

  // DELETES A ORGANISATION FROM THE DATABASE
  router.delete('/:id', function (req, res) {
      Organisation.findByIdAndRemove({_id: req.query.id }, function (err, organisation) {
          if (err) return res.status(500).send("There was a problem deleting the organisation.");
          res.status(200).send("User: "+ organisation.name +" was deleted.");
      });
  });

  // UPDATES A SINGLE USER IN THE DATABASE
  router.put('/:id', (req, res) => {
      Organisation.findByIdAndUpdate({_id:req.query.id}, req.body, {new: true}, (err, organisation) => {
          if (err) return res.status(500).send("There was a problem updating the organisation.");
          res.status(200).send(organisation);
      });
  });

  //Add a post to an organisation
  router.post('/:id/post', function(req,res){
    Post.create({
      author: req.query.id,
      title: req.body.title,
      text: req.body.text
    },(err,post) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      Organisation.findByIdAndUpdate({_id: post.author}, {$push: {posts: post}}, function(err,organisation){
        if(err) return res.status(500).send("There was a problem returning the organisation.")
        res.status(200).send(organisation);
      })
    })
  });

module.exports = router;
