const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MotelSchema = new Schema({
    name: {type: String, index: true},
    initPower: {type: Number},
    initWater: {type: Number},
    prices: Number,
    notes: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: 'customers'
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: 'contacts'
    },
});

// Export the model
module.exports = mongoose.model('motels', MotelSchema);