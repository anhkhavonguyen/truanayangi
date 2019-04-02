var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/mongo')[env];

module.exports = () => {
    var envUrl = process.env[config.use_env_variable];
    var localUrl = `mongodb://${config.host}/${config.database}`;
    var mongoUrl = envUrl ? envUrl : localUrl;
    return mongoose.connect(mongoUrl, { useMongoClient: true });
};

////mongodb+srv://truanayangi:<password>@truanayangi-gwvhk.mongodb.net/test?retryWrites=true

// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://truanayangi:<password>@truanayangi-gwvhk.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });