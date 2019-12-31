const MongoClient = require('mongodb').MongoClient;

const connectionURL = "mongodb://127.0.0.1/27017";
const databaseName = "udemy-node-task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client ) => {
    if (error) {
        return console.log("ERROR", error);
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //     name: "Chhaian",
    //     age: 39
    // })

    db.collection("users").insertMany([
        {
            name: "Jane",
            age: 24
        },
        {
            name: "Rafael",
            age: 31
        }
    ], (error, result) => {
        if (error) {
            return console.log("ERROR", error);
        }

        console.log(result.ops);
    })
})