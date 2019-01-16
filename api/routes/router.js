'use strict';
const express = require('express');
const router = express.Router();

// ::V1 router
const exampleRouter = require('./example/exampleRouter');
const userRouter = require('./users/userRouter');
const bookRouter = require('./books/bookRouter');

// /api/example
router.use('/example', exampleRouter);

// /api/users
router.use('/users', userRouter);

// /api/books
router.use('/books', bookRouter);

module.exports = router;
