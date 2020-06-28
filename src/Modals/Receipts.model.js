const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ReceiptsSchema = new Schema({
    name: {type: String, index: true},
    quantityPower: {type: Number},
    quantityWater: {type: Number},
    prices: Number,
    pricesOther: Number,
    status: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
    motel: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: "motels"
    }
});

// Export the model
module.exports = mongoose.model('receipts', ReceiptsSchema);