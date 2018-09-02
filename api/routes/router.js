'use strict';
const express = require('express');
const router = express.Router();

// ::V1 router
const exampleRouter = require('./example/exampleRouter');
const userRouter = require('./user/userRouter');

// /api/example
router.use('/example', exampleRouter);

// /api/user
router.use('/user', userRouter);

module.exports = router;
