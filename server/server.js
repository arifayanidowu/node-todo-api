const express = require('express');
const bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.status(200).send(doc);
        }, err => {
            res.status(400).send(err);
        });
});


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});


module.exports = {
    app
};