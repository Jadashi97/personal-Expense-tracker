const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: { 
        type: String,
        trim: true,
        required: [true, "Please Add some text"]
    },
    amount: {
        type: Number,
        required: [true, "Please Add a Positive or Negative Number"]

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema);