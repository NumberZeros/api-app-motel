const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Payments = require('../Controllers/Payments.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Payments.getAll);
router.get('/:id', Payments.getInfo);
router.post('/create', Payments.post);
router.put('/:id', Payments.put);
router.delete('/:id', Payments.delete);
module.exports = router;