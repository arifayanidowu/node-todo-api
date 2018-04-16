const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let dbname = "TodoApp";

mongoose.connect(`mongodb://localhost:27017/${dbname}`, err => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
    }
    console.log("Database connection successful");
});

module.exports = {
    mongoose: mongoose
};