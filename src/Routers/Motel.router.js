const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Account = require('../Controllers/Account.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/account',Account.get);
module.exports = router;