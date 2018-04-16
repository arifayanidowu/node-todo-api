const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
/* 
Todo.remove({}).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}); */
//findOneAndRemove({})

Todo.findByIdAndRemove("5ad51eb43e42536a8bb2483b").then((doc) => {
    console.log(`Results:`, JSON.stringify(doc, undefined, 2));
});