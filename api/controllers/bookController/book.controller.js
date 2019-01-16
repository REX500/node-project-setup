'use strict';

const BookModel = require('./../../lib/db/models/book');
const HttpError = require('./../../lib/utils/http-error');

const BookObject = require('./../objects/book.object').Book;
const bookIsSoldDecorator = require('./../objects/book.object').isSold;

const getBooks = async () => {
  let returnArray = [];

  // get all books
  const books = await BookModel.find({});
  if (books) {
    // iterate over them and return book objects
    for (let b of books) {
      const book = new BookObject(b.title, b.author, b.publishDate, b.price, b.quantity);

      returnArray.push(book);
    }
    return returnArray;
  }
};

const getBook = async ({title}) => {
  return BookModel.findOne({title});
};

const addBook = ({body}) => {
  let newBook = new BookModel({
    title: body.title,
    author: body.author,
    publishDate: body.publishDate,
    price: body.price,
    quantity: body.quantity
  });

  return newBook.save();
};

// using the decorator pattern
const sellBook = async ({body}) => {
  // find the book
  const book = await getBook({title: body.title});
  if (book) {
    // create a book object
    let bookObject = new BookObject(book.title, book.author, book.publishDate, book.price, book.quantity);

    // use decorator to add new fields
    bookObject = bookIsSoldDecorator(bookObject);

    // update entry in db
    await BookModel.findByIdAndUpdate(book._id, {
      quantity: bookObject.quantity,
      price: bookObject.price
    });

    // return the book
    return bookObject;
  }
};

module.exports = {
  addBook,
  getBooks,
  sellBook
};
