const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://arjitsingh13mongodb:n9W%40htt_mi%40Rdv8@cluster0.pdygrde.mongodb.net/TODO_DB');


const  todoSchema = new mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean

})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}