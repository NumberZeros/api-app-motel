const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Customer = require('../Controllers/Customers.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Customer.getAll);
router.get('/:id', Customer.getInfo);
router.post('/create', Customer.post);
router.put('/:id', Customer.put);
module.exports = router;