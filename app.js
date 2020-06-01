const express = require('express');
const bodyParser = require('body-parser');
const Account = require('./src/Routers/Account.router');

require("dotenv").config();
require("./src/Modals/connect");

const app = express();
app.use('/account', Account);
let port = 9000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});