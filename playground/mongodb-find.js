//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    const dbconn = db.db("TodoApp");

    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);

    /* dbconn
        .collection("Todos")
        .find({ _id: new ObjectID("5ad26f40ba977d421e9373e1") })
        .toArray()
        .then(docs => {
            console.log("Todos");
            console.log(JSON.stringify(docs, undefined, 2));
        }, err => {
            console.log(`Unable to fetch todos`, err);
        }); */
    /* dbconn
        .collection("Todos")
        .find()
        .count()
        .then(count => {
            console.log(`Todos count: ${count}`);
        }, err => {
            console.log(`Unable to fetch todos`, err);
        }); */

    dbconn
        .collection("Users")
        .find({ name: "Miracle" })
        .toArray()
        .then(docs => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, err => {
            console.log(`Unable to fetch Users`, err);
        });

    //db.close();
});