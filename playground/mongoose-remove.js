const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}) -
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

// Todo.findOneAndRemove()

//Todo.findByIdAndRemove() 
// Todo.findOneAndRemove({_id: '596f31ec04bc1b4b4a432f7e'}).then((todo) => {

// });

// Todo.findByIdAndRemove('596f31ec04bc1b4b4a432f7e').then((todo) => {
//   console.log(todo);
// });