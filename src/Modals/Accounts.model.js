const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    name: {type: String, max: 100},
    email: {type: String},
    birthDay: {type: Date},
    username: String,
    password: String,
    // motel: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     require: true,
    //     ref: "motels"
    // },
    // payment: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     require: true,
    //     ref: "payments"
    // },
});

module.exports = mongoose.model('account', AccountSchema);