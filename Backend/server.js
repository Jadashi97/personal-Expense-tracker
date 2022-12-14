const express = require('express');
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');



dotenv.config({path: "./config/config.env"});

connectDB();

const transactions = require('./routes/transaction');

const app = express();

app.use(express.json()); //this allows to use body parser to send data.



app.use("/api/v3/transactions", transactions);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`.yellow.bold)
})