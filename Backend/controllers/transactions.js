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

        const trasaction = await Transaction.create(req.body);
        
        return res.status(201).json({
            success:true,
            data: trasaction
        })
    } catch (error) {
        if(err){
            return res.status(400).json({
                success:false,
                error: "cmon error occured"
            })
        }
        
    }

};

// @desc  delete transactions
// @route Del /api/v1/transactions
// @access Public
exports.deleteTransaction = (req,res, next) => {
    res.send("Delete Transactions")
};