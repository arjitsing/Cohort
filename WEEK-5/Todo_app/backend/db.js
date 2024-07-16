const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://arjitsingh13mongodb:XXXXXXXXXX@cluster0.pdygrde.mongodb.net/TODO_DB');


const  todoSchema = new mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean

})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}