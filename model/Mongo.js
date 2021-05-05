const mongoose = require('mongoose');
const schema = require('../schema/mongoSchema');

const User = mongoose.model('User', schema);

module.exports = User;