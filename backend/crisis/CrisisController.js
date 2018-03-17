var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var request = require('request');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Crisis = require('./Crisis');

//Create a New Crisis
router.post("/",(req,res)=>{
  Crisis.create({
    name: req.body.name,
    location: {
      x: req.body.location.x,
      y: req.body.location.y
    },
    onGoing: req.body.onGoing,
    volunteersInvolved: req.body.volunteersInvolved
  },(err,crisis) => {
    if(err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(crisis);
  });
});

// RETURNS ALL THE ORGANISATIONS IN THE DATABASE
router.get('/', function (req, res) {
    Crisis.find({}, function (err, crises) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(crises);
    });
});

//RETURN A SINGLE ORGANISATION FROM THE DATABASE
  router.get('/:id',function(req,res){
    Crisis.findById({_id: req.query.id},function(err,crisis){
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!crisis) return res.status(404).send("No organisation found.");
      res.status(200).send(crisis);
    })
  })

  // DELETES A ORGANISATION FROM THE DATABASE
  router.delete('/:id', function (req, res) {
      Crisis.findByIdAndRemove({_id: req.query.id }, function (err, crisis) {
          if (err) return res.status(500).send("There was a problem deleting the organisation.");
          res.status(200).send("User: "+ crisis.name +" was deleted.");
      });
  });

  // UPDATES A SINGLE USER IN THE DATABASE
  router.put('/:id', (req, res) => {
      Crisis.findByIdAndUpdate({_id:req.query.id}, req.body, {new: true}, (err, crisis) => {
          if (err) return res.status(500).send("There was a problem updating the organisation.");
          res.status(200).send(crisis);
      });
  });

  module.exports = router;
