'use strict';

// router setup
const express = require('express');
const router = express.Router({mergeParams: true});

// multer upload middleware
const multer = require('../../lib/middleware/multer.middleware');
// to upload a single file
// const uploadSingle = multer('<yourBucketName>').single('file');
// to upload multiple files
// const uploadMultiple = multer('<yourBucketName>').array('files');

// controllers
const clientController = require('../../controllers/exampeClientController/client.controller');

// ENDPOINT: /api/example/ :GET
router.get('/', (req, res, next) => {
  clientController.testFunctionGet()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :POST
router.post('/', (req, res, next) => {
  clientController.testFunctionPost()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :PATCH
router.patch('/', (req, res, next) => {
  clientController.testFunctionPatch()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :DELETE
router.delete('/', (req, res, next) => {
  clientController.testFunctionDelete()
    .then((result) => res.json(result))
    .catch(next);
});

/*  USING MULTER TO UPLOAD FILES TO AWS  */
// router.post('/upload', uploadMultiple, (req, res, next) => {
//   clientController.testFunctionPostUpload({body: req.body, files: req.files})
//     .then((result) => res.json(result))
//     .catch(next);
// });

module.exports = router;
