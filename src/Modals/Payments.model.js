const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PaymentSchema = new Schema({
    name: {type: String, index: true, require: true},
    quantityPower: {type: Number},
    quantityWater: {type: Number},
    prices: Number,
    pricesOther: Number,
    createAt: {
        type: Date,
        default: new Date(),
    },
});

// Export the model
module.exports = mongoose.model('payments', PaymentSchema);