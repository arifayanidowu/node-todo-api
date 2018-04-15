//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    const dbconn = db.db("TodoApp");

    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);

    //findOneAndUpdate
    /* dbconn
        .collection("Todos")
        .findOneAndUpdate({
            _id: ObjectID("5ad26f1dba977d421e9373d5")
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(JSON.stringify(results, undefined, 2));
        }, (err) => {
            console.log(err);
        }); */

    dbconn.collection('Users')
        .findOneAndUpdate({
            _id: "123"
        }, {
            $set: {
                name: "Folashade"
            },
            $inc: {
                age: -1
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(JSON.stringify(results, undefined, 2));
        }, (err) => {
            console.log(err);
        });

    //db.close();
});