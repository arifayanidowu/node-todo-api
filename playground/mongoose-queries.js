const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = "5ad3906e6d31e61e6c7d5656";
/* 
let id = "5ad3d6a2afa7c02dc8e39f1911";

if (!ObjectID.isValid(id)) {
    console.log(`ID is invalid`);
}
 */

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log(`Todos`, todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(`Todo`, todo);
});
 */
/* Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log(`Id not found`);
    }
    console.log(`Todo by Id`, todo);
}).catch((e) => {
    console.log(`Invalid Id`, e);
}); */

User.findById(id).then((user) => {
    if (!user) {
        return console.log(`User not found`);
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});