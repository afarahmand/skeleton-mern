//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://<db_user>:<password>@ds115753.mlab.com:15753/db_men';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
