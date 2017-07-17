const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  };
  console.log('Connected to mongodb server.');

  //findOneAndUpdate

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('596c90b604bc1b4b4a42733d')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5968d2b68ed2c4cabde8d152') 
  }, {
    $set: {
      name: 'Bianca'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});