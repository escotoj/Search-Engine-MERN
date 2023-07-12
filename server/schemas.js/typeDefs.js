// similar to models where we call gql from apollo
const { gql } = require("apollo-server-express");

// must match the models
// QUERYs are GET
// MUTATIONs are POST PUT DELETE
// the ! means its required

// 4 mutations are involved
// login can be seen as a combination of POST and GET.
// addUser is similar to a POST request.
// saveBook can be seen as a combination of PUT and POST.
// removeBook is similar to a DELETE request.

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String!
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image: String, link: String): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
