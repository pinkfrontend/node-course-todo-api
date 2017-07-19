var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb')
const {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo ({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  //get all the todos
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/12345
//':id' an url parameter (is a variable added to the url to make it dynamic)
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  
  //validate the id using isValid
  if(!ObjectID.isValid(id)) {
    //404 - send back an empty body send()
    return res.status(404).send();
  }
    
  //findById
  Todo.findById(id).then((todo) => {
    if(!todo) {
     return res.status(404).send();
    }

    res.send({todo});

  }).catch ((e) => {
    res.status(400).send();
  });

});

app.delete('/todos/:id', (req, res) => {
  //Get the id
  var id = req.params.id;
  //validate the id  -> if is notvalid return a 404
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };

  //remove todo by id 
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) =>{
    res.status(400).send();
  });
    //success
      //if no doc return 404
      //if doc return doc with a 200
    //err
      //400 with an empty body
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});


module.exports = {
  app
};