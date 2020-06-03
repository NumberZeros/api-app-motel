const mongoClient = require('mongodb').MongoClient;

mongoClient.connect(process.env.connectionString, function (err, db) {
    if(err){
        console.log(err);
    }else{
        console.log("connect success");
    }
});
