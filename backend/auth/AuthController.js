var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var VerifyToken = require('./VerifyToken');

//Register a user, create user in database, return 24hr access token
router.post("/register", function(req,res){
  //var hashedPassword = bcrypt.hashSync(req.body.password,8);

  User.create({
          name : req.body.name,
          email : req.body.email,
          password : req.body.password,
          phone: req.body.phone,
          dob: req.body.dob,
          occupation: req.body.occupation,
          gender: req.body.gender,
          interests: req.body.interests,
          organisations: req.body.organisations,
          countries: req.body.countries,
          skills: req.body.skills,
          crisisAvailable: req.body.crisisAvailable
  },function(err,user){
    if(err) return res.status(500).send("There was a problem registering the user.")

    //create token
    // var token = jwt.sign({id: user._id}, config.secret,{
    //   expiresIn: 86400
    // });

    //res.status(200).send({auth: true, token: token});
    res.status(200).send("Registered");
  })
});

//Login a user, validated entered password with hashed password in database, return 24hr access token if valid
router.post("/login", function(req,res){
  User.findOne({ email: req.body.email }, function(err,user){
    if (err) return res.status(500).send('Error on the server.');
    if (!user) {
      console.log(req.body.email);
      return res.status(404).send('No user found.');
    }
    // var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    // if(!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    // var token = jwt.sign({ id: user._id }, config.secret, {
    //   expiresIn: 86400 // expires in 24 hours
    // });
    //  res.status(200).send({ auth: true, token: token });
    res.status(200).send("Logged In");
  });
});

//Use access token to display user's info - take token, verify it
router.get("/me", VerifyToken, function(req,res){
  var token = req.headers['x-access-token'];
  User.findById(req.userId, {password:0}, function(err,user){
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");

    res.status(200).send(user);
  });
});

module.exports = router;
