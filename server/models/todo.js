const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo2 = new Todo({
 text: "true"
})

newTodo2.save().then((doc) => {
  console.log('Saved todo:', doc);
}, (e) => {
  console.log('Unable to save todo');
});

module.exports = {
  Todo
};