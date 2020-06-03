const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
// const Account = require('../Controllers/Account.controler');
const account = require("../Modals/Accounts.model")

router.get('/account', (req, res) => {
    res.send('we are on account');
});

router.post('/account', async (req, res) => {
    try {
        console.log("try");
        const data = await account.create({
            username: "admin",
            password: "12345"
        });
        console.log(data);
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };

});

module.exports = router