'use strict';
const mongoose = require('mongoose');

mongoose.Promise = require('q').Promise;
const Book = mongoose.Schema({
  title: String,
  author: String,
  publishDate: String,
  price: Number,
  quantity: Number
});
module.exports = mongoose.model('book', Book);
