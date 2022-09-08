const mongoose = require('mongoose');

const schema = require('../schemas/UserSchema');
const UserModel = mongoose.model('User', schema);

module.exports = UserModel;
