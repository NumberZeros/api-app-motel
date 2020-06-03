const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Account = require('../Controllers/Account.controler');

router.get('/accounts', Account.get);
router.post('/accounts', Account.post);
router.put('/accounts', Account.put);


module.exports = router