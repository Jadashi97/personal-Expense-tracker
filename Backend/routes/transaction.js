const express = require("express");
const router = express.Router();
const {getTransactions, addTransaction} = require("../controllers/transactions");


router
    .route("/")
    .get(getTransactions)
    .post(addTransaction)
router
    // .route("/:id")
    // .delete()

module.exports = router;