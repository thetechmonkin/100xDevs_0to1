const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saurabh:3hmgXGct7peQgN2k@100xdevs.ahe1t.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}