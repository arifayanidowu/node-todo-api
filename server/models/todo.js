const mongoose = require('mongoose');

let Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
/* 
let otherTodo = new Todo({
    text: ' Edit this video '
});

otherTodo.save().then(
    doc => {
        console.log(JSON.stringify(doc, undefined, 2));
    },
    err => {
        console.log(`Unable to save todo: ${err}`);
    }
);
 */

module.exports = {
    Todo
};