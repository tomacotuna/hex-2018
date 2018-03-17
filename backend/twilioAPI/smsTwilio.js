var accountSid = 'AC94a6219c927c9ce9ea270489f03c7070'; //My SID
var authToken = '3410bf1a4fa97bffca6beb01d0b77338';

var twilio = require('twilio');
const client = new twilio(accountSid,authToken);

client.messages.create
({

    body: 'This is an emergency! Volunteeers needed.',
    //to: '+447870966475',
//to: '+447712853881',
    to: '+447736518908',
    from: '+441375351178'

}).then((message) => console.log(message.sid));