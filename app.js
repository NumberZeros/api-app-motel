const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const Account = require('./src/Routers/Account.router');
const Motels = require('./src/Routers/Motel.router')
const Customers = require('./src/Routers/Customer.router')

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
 

app.use('/apis/account', Account);
app.use('/apis/motels', Motels);
app.use('/apis/customers', Customers);

mongoose.connect(
    process.env.BASE_URL,
    {  useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to db");
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});