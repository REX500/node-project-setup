'use strict';

class Book {
  constructor(title, author, publishDate, price, quantity) {
    this._title = title;
    this._author = author;
    this._publishDate = publishDate;
    this.price = price;
    this.quantity = quantity;

    // declaring a method on the object
    this.getDetails = () => {
      return `${this._title} was written by ${this._author}`;
    };
  }
};

// decorators
const isSold = (book) => {
  book.isSold = true;
  book.price += 1;
  book.quantity -= 1;
  return book;
};

// let book = new Book('title', 'author', 'date', 200);
// console.log(book.getDetails());
// book = isSold(book);

// console.log(book);

module.exports = {
  Book,
  isSold
};
