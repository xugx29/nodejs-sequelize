const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
    dbName: 'local_test'
})
var mongoDB = mongoose.connection;
mongoDB.on('error', function () {
    console.log('error')
})
mongoDB.on('open', function () {
    console.log('open')
})