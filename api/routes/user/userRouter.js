'use strict';

// router setup
const express = require('express');
const router = express.Router({mergeParams: true});

// controllers
const userController = require('../../controllers/userController/user.controller');

// ENDPOINT: /api/user/ :POST
router.post('/', (req, res, next) => {
  userController.addUser({body: req.body})
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
