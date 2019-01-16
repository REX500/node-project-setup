'use strict';

// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

// controllers
const bookController = require('../../controllers/bookController/book.controller');

// ENDPOINT: /api/users/ :GET
router.get('/', (req, res, next) => {
  bookController.getBooks()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/books/ :POST
router.post('/', (req, res, next) => {
  bookController.addBook({ body: req.body })
    .then((result) => res.json(result))
    .catch(next);
});

// // ENDPOINT: /api/example/ :PATCH
router.post('/sellBook', (req, res, next) => {
  bookController.sellBook({body: req.body})
    .then((result) => res.json(result))
    .catch(next);
});

// // ENDPOINT: /api/example/ :DELETE
// router.delete('/', (req, res, next) => {
//   clientController.testFunctionDelete()
//     .then((result) => res.json(result))
//     .catch(next);
// });

module.exports = router;
