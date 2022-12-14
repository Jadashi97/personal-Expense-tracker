const Transaction = require("../models/Transaction")


// @desc Get all transactions
// @route Get /api/v1/transactions
// @access Public
exports.getTransactions =  async (req,res, next) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions

        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'

        })
    }
    
};

// @desc Post transactions
// @route post /api/v1/transactions
// @access Public
exports.addTransaction = async (req,res, next) => {

    try {
        const {text, amount} = req.body;

        const transaction = await Transaction.create(req.body);
        
        return res.status(201).json({
            success:true,
            data: transaction
        })
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
        
    }

};

// @desc  delete transactions
// @route Del /api/v1/transactions
// @access Public
exports.deleteTransaction = async(req,res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success: false,
                error: "where is the transaction"
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "server error"
        })
    }
};