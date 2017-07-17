// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  //insert new doc into the Users (name, age, location);
  // db.collection('Users').insertOne({
  //   name: 'Bianca', 
  //   age: 23, 
  //   location: 'London'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user.');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});