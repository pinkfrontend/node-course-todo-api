const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5968ee53ab4c53b2c12ef46b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.')
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.')
  // });

  db.collection('Users').find({name: 'Bianca'}).toArray().then((docs) => {
    // console.log(`Users count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users.')
  });
  // db.close();
});