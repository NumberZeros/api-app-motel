const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Contacts = require('../Controllers/Contacts.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Contacts.getAll);
router.get('/:id', Contacts.getInfo);
router.post('/create', Contacts.post);
router.put('/:id', Contacts.put);
router.delete('/:id', Contacts.delete);
module.exports = router;