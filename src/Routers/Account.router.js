const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Account = require('../Controllers/Account.controler');

router.get('/', Account.get);
router.post('/login', Account.login);
router.put('/:id', Account.put);


module.exports = router