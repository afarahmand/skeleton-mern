//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://<DBuser>:<password>@ds115753.mlab.com:15753/db_men';

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
