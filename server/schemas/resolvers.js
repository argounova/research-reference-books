const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find({});
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
  },
  Mutation: {
    saveBook: async (parent, { bookId }) => {
      return Book.create({ bookId });
    },
    deleteBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ _id: bookId });
    },
  },
};

module.exports = resolvers;
