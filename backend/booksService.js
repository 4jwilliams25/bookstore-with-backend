const books = require("./books");

exports.getAll = () => {
  return books;
};

exports.addToCart = id => {
  let targetBook = books.find(book => book.id === id);
  let updatedBook = Object.assign(targetBook, { inCart: true });
  return updatedBook;
};

exports.removeFromCart = id => {
  let targetBook = books.find(book => book.id === id);
  let updatedBook = Object.assign(targetBook, { inCart: false });
  return updatedBook;
};

exports.updateBook = (id, update) => {
  let targetBook = books.find(book => book.id === id);
  let updatedBook = Object.assign(targetBook, update);
  return updatedBook;
};

exports.deleteBook = id => {
  let deletedBook = books.find(book => book.id === id);
  let index = books.indexOf(deletedBook);
  books.splice(index, 1);

  return deletedBook;
};
