const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const motels = require("./Motels.model")
let MotelSchema = new Schema({
    name: {type: String, index= true},
    quantityPower: {type: Number},
    quantityWater: {type: Number},
    prices: Number,
    pricesOther: String,
    status: Boolean,
    createAt: {
        type: Date,
        default: new Date(),
    },
    motel: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: motels
    }
});

// Export the model
module.exports = mongoose.model('motels', MotelSchema);