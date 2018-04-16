const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb')

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, err => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id', (req, res) => {

    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    };

    Todo.findById(id).then((todos) => {
        if (!todos) {
            return res.status(404).send({})
        } else {
            res.status(200).send({ todos });
        }
    }, err => {
        res.status(400).send();
    });
});



app.get('/users/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };

    User.findById(id).then((user) => {
        if (!user) {
            return res.status(404).send({});
        } else {
            res.status(200).send({ user });
        }
    }, err => {
        res.status(400).send();
    });
});


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});


module.exports = {
    app
};