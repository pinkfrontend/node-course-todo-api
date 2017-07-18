const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '596ce3794467bc177900af2aa';

//Check if the id is valid

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }
//find returns an arrey 
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// //findOne returns an object
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// })

var userId = '596ccc8e0f2a4010f3a2fd9b';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log('User by Id', user);
}, (e) => {
  console.log(e);
});