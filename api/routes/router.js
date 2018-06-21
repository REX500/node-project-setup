'use strict';
const express = require('express');
const router = express.Router();

// ::V1 router
const exampleRouter = require('./example/exampleRouter');

// /api/example
router.use('/example', exampleRouter);

module.exports = router;
