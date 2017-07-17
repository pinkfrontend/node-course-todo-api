const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  };
  console.log('Connected to mongodb server.');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }) 

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Bianca'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5968d4d817601ecace98a21c')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

});