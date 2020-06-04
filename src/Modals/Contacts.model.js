const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactsSchema = new Schema({
    name: {type: String, index: true, require: true},
    linkFile: {type: String},
    createAt: {type: Date},
});

module.exports = mongoose.model("contacts", ContactsSchema);