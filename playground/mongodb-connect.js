//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    const dbconn = db.db("TodoApp");

    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);

    // Warning: collection cannot be directly instantiated

    /* dbconn.collection("Todos").insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log(`Unable to insert todo`, err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
 */
    /*    dbconn.collection("Users").insertOne({
               name: `Ajayi Lekan`,
               age: 30,
               location: `Lagos Nigeria`
           },
           (err, result) => {
               if (err) {
                   return console.log(`Unable to Insert User data`, err);
               }

               console.log(result.ops[0]._id.getTimestamp());
           }
       ); */

    db.close();
});