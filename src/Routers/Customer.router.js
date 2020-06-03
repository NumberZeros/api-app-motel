const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Account = require('../Controllers/Account.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Account.getAll);
router.get('/:id', Account.getInfo);
router.post('/create', Account.post);
router.put('/:id', Account.put);
module.exports = router;