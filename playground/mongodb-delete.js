//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    const dbconn = db.db("TodoApp");

    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);

    //deleteMany
    /* dbconn.collection('Todos').deleteMany({ text: "Cook dinner" })
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        }) */
    //deleteOne
    /* dbconn.collection('Todos').deleteOne({ text: "Cook dinner" })
        .then((result) => {
            console.log(`Result was deleted successfully`, result);
        }) */

    //findOneAndDelete
    /* dbconn.collection('Todos').findOneAndDelete({ completed: false })
        .then((result) => {
            console.log(result);
        }); */

    /*  dbconn
         .collection("Users")
         .findOneAndDelete({ _id: ObjectID("5ad26bd862ea3f0be4eca06b") })
         .then(result => {
             console.log(JSON.stringify(result, undefined, 2));
         }); */

    //db.close();
});