const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const Account = require('./src/Routers/Account.router');
const Motels = require('./src/Routers/Motel.router')
const Customers = require('./src/Routers/Customer.router')
const Payments = require('./src/Routers/Payments.router');
const Receipts = require('./src/Routers/Receipts.router')
const Contacts = require('./src/Routers/Contacts.router')

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
 

app.use('/apis/account', Account);
app.use('/apis/motels', Motels);
app.use('/apis/customers', Customers);
app.use('/apis/payments', Payments);
app.use('/apis/receipts', Receipts);
app.use('/apis/contacts', Contacts);

mongoose.connect(
    process.env.BASE_URL,
    {  useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to db");
    }
);

app.listen(process.env.PORT || 9000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});