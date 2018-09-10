'use strict';

const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const AWS = require('aws-sdk');
const helpers = require('./../helpers/helper');
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const awsBucket = process.env.AWS_BUCKET;

const pathForUploadPic = path.join(__dirname, './../../../uploads');
// const s3 = new AWS.S3({'accessKeyId': accessKeyId});

AWS.config.update({
  secretAccessKey: secretAccessKey,
  accessKeyId: accessKeyId
});

let s3 = new AWS.S3();

// testfunction for generic implementation of using folders for upload
function uploadToAWS(uploadFolder) {
  // console.log(accessKeyId);
  // console.log(secretAccessKey);
  // console.log(awsBucket);
  // console.log(uploadFolder);
  return multer({
    storage: multerS3({
      s3: s3,
      bucket: awsBucket + '/' + uploadFolder,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'bucket-owner-full-control',
      // onError: function(err, next) {
      //   console.log('error', err);
      //   next(err);
      // },
      // metadata: function(req, file, cb) {
      //   console.log(file);
      //   cb(null, {fieldName: file.fieldname});
      // },
      key: function(req, file, cb) {
        // console.log(file);
        cb(null, helpers.nameUploadsInAWS(file.originalname));
      }
    })
  });
}

function uploadFile(folder, name, file) {
  try {
    const params = {
      Bucket: `${awsBucket}/${folder}`,
      Key: name,
      Body: file
    };
    s3.putObject(params, (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  } catch (err) {
    throw err;
  }
};

async function getObject() {
  return s3.listObjects({
    bucket: awsBucket
  });
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, pathForUploadPic);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploadToLocal = multer({
  storage: storage
});

module.exports = {
  uploadToLocal: uploadToLocal,
  uploadToAWS: uploadToAWS,
  getObject: getObject,
  uploadFile: uploadFile
};
