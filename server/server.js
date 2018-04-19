require("./config/config");

const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");
let authenticate = require("./middleware/authenticate");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((todos) => {
        res.status(200).send(todos);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
            res.send({ todos });
        },
        err => {
            res.status(400).send(err);
        });
});

app.get("/todos/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findById(id).then(
        todo => {
            if (!todo) {
                return res.status(404).send({});
            } else {
                res.send({ todo });
            }
        },
        err => {
            res.status(400).send();
        }
    );
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    User.findById(id).then(
        user => {
            if (!user) {
                return res.status(404).send({});
            } else {
                res.send({ user });
            }
        },
        err => {
            res.status(400).send();
        }
    );
});

app.delete("/todos/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            }

            res.send({ todo });
        })
        .catch(e => {
            res.status(400).send();
        });
});

app.patch("/todos/:id", (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            }

            res.send({ todo });
        })
        .catch(e => {
            res.status(400).send();
        });
});

app.post("/users", (req, res) => {
    let body = _.pick(req.body, ["email", "password"]);

    let user = new User(body);

    user.save()
        .then(() => {
            return user.generateAuthToken();
        })
        .then((token) => {
            res.header("x-auth", token).send(user);
        })
        .catch(e => {
            res.status(400).send(e);
        });
});

// Bugs: authentication failed, 404: not found returned instead of 401: request token.
app.get("/users/me", (req, res, next) => {

    let token = req.header("x-auth");

    User.findByToken(token)
        .then(user => {
            if (!user) {
                return Promise.reject();
            }
            req.user = user;
            req.token = token;
            res.send(user);

            next();
        })
        .catch(e => {
            res.status(401).send(e);
        });

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = {
    app
};