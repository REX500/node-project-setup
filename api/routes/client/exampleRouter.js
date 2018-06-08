'use strict';

// router setup
const express = require('express');
const router = express.Router({mergeParams: true});

// controllers
const clientController = require('../../controllers/exampeClientController/client.controller');

// ENDPOINT: /api/import/ POST
router.get('/', (req, res, next) => {
  clientController.testFunction()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
