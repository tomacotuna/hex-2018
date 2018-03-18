var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var accountSid = 'AC94a6219c927c9ce9ea270489f03c7070'; //My SID ss qsd
var authToken = '3410bf1a4fa97bffca6beb01d0b77338';

var twilio = require('twilio');
const client = new twilio(accountSid,authToken);

var User = require('../user/User');

router.post("/",(req,res)=>{
  User.find({crisisAvailable: true},function(err, users){
    users.forEach((user) =>{
      client.messages.create
      ({
          body: req.body.body,
          to: user.phone,
          from: '+441375351178'
      });
    })
  })
})

module.exports = router;
