const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    name: {type: String, max: 100},
    email: {type: String},
    birthDay: {type: Date},
    username: String,
    password: String,
});

module.exports = mongoose.model('accounts', AccountSchema);