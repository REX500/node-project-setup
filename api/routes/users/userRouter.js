'use strict';

// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

// controllers
const userController = require('../../controllers/userController/user.controller');

// ENDPOINT: /api/users/ :GET
router.get('/', (req, res, next) => {
  userController.getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/ :POST
router.post('/', (req, res, next) => {
  userController.createUser({body: req.body})
    .then((result) => res.json(result))
    .catch(next);
});

// // ENDPOINT: /api/example/ :PATCH
// router.patch('/', (req, res, next) => {
//   clientController.testFunctionPatch()
//     .then((result) => res.json(result))
//     .catch(next);
// });

// // ENDPOINT: /api/example/ :DELETE
// router.delete('/', (req, res, next) => {
//   clientController.testFunctionDelete()
//     .then((result) => res.json(result))
//     .catch(next);
// });

module.exports = router;
