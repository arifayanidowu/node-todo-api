const mongoose = require('mongoose');

let User = mongoose.model("User", {
    email: {
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
    }
});

/* let user = new User({
    email: "jane@example.com"
});

user.save().then(
    doc => {
        console.log(JSON.stringify(doc, undefined, 2));
    },
    err => {
        console.log(`Unable to save user: ${err}`);
    }
); */

module.exports = {
    User
};