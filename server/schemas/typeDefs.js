const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    bookName: String!
  }

  type Query {
    books: [Book]!
    book(bookId: ID!): Book
  }

  type Mutation {
    saveBook(bookId: ID!, bookName: String!): Book
    deleteBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
