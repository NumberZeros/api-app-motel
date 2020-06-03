const express = require('express');
const mongoose = require('mongoose');

const Account = require('./src/Routers/Account.router');

require("dotenv").config();
require("./src/Modals/connect");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/apis', Account);

mongoose.connect(
    process.env.BASE_URL,
    { dbName: 'MOTEL', useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to db");
    }
);

let port = 9000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});