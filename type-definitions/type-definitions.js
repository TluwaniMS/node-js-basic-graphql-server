const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getAllUsers: [User!]!
    getUserByEmail(email: String!): [User!]!
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
  }
`;

module.exports = {
  typeDefs
};
