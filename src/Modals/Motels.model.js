const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customers = require("./Customers.model");

let MotelSchema = new Schema({
    name: {type: String, index: true},
    initPower: {type: Number},
    initWater: {type: Number},
    prices: Number,
    notes: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: customers
    }
});

// Export the model
module.exports = mongoose.model('motels', MotelSchema);