const mongoClient = require('mongodb').MongoClient;

mongoClient.connect(process.env.connectionString, function (err, db) {
});
