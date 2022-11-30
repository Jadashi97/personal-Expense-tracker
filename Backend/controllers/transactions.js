

// @desc Get all transactions
// @route Get /api/v1/transactions
// @access Public
exports.getTransactions = (req,res, next) => {
    res.send("Get Transactions")
};

// @desc Post transactions
// @route post /api/v1/transactions
// @access Public
exports.addTransaction = (req,res, next) => {
    res.send("Post Transactions")
};

// @desc  delete transactions
// @route Del /api/v1/transactions
// @access Public
exports.deleteTransaction = (req,res, next) => {
    res.send("Delete Transactions")
};