const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    name: {type: String, index: true, require: true},
    birthDay: {type: Date},
    note: {type: String},
});

module.exports = mongoose.model('customers', CustomerSchema);