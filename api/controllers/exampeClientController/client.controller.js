'use strict';

const testFunctionGet = async () => {
  return true;
};

const testFunctionPost = async () => {
  return true;
};

const testFunctionPatch = async () => {
  return true;
};

const testFunctionDelete = async () => {
  return true;
};

const testFunctionPostUpload = async ({body, files}) => {
  // if uploaded multiple files then `files` is an array
  // url's for uploaded files are in files[0,1,2,3...].location
  let locations = [];
  for (let file of files) {
    locations.push({location: file.location});
  }
  return locations;
};

module.exports = {
  testFunctionGet,
  testFunctionPost,
  testFunctionPatch,
  testFunctionDelete,
  testFunctionPostUpload
};
