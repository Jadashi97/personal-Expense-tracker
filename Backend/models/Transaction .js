const mongoose = require('mongoose');

const TransactionSchema = new mongoose.schema({
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