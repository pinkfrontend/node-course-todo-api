const mongoose = require('mongoose');

//new user module 
var User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, 
    trim: true, 
    minlength: 1
  }
})

var newUser = new User({
  name: 'Bianca', 
  email: 'bianca.simion.2@gmail.com'
})

newUser.save().then((doc) => {
  // console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log(err);
})
// email property -require-trim- set type -se min length
//

module.exports = {
  User
};