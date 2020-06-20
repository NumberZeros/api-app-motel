const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Receipts = require('../Controllers/Receipts.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Receipts.getAll);
router.get('/:id', Receipts.getInfo);
router.post('/create', Receipts.post);
router.put('/:id', Receipts.put);
router.delete('/:id', Receipts.delete);
module.exports = router;