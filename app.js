const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const Account = require('./src/Routers/Account.router');
const Motels = require('./src/Routers/Motel.router')
const Customers = require('./src/Modals/Customers.model')

require("dotenv").config();
require("./src/Modals/connect");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

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