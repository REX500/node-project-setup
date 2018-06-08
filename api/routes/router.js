'use strict';
const express = require('express');
const router = express.Router();

// ::V1 router
const exampleRouter = require('./client/exampleRouter');

// /api/clients
router.use('/clients', exampleRouter);

module.exports = router;
