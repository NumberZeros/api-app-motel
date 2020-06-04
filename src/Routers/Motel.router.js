const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Motels = require('../Controllers/Motels.controler');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', Motels.getAll);
router.get('/:id', Motels.getInfo);
router.post('/create', Motels.post);
router.put('/:id', Motels.put);
module.exports = router;