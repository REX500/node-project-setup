'use strict';

const path = require('path');
const uuidv4 = require('uuid/v4');

let nameUploadsInAWS = function(filename) {
  let extension = path.parse(filename).ext;
  let fileNameWithoutExtension = path.parse(filename).name;
  let newFileName = fileNameWithoutExtension + '_' + uuidv4();
  let newFileNameWithExtension = newFileName + extension;
  return newFileNameWithExtension;
};

module.exports = {
  nameUploadsInAWS: nameUploadsInAWS
};
