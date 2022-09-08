const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null },
});

module.exports = UserSchema;
