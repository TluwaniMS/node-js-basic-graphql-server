const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getAllUsers: [User!]!
    getUserByEmail(email: String!): [User!]!
  }

  type Mutation {
    createUser(email: String!, firstName: String!, lastName: String!): String!
    updateUser(email: String!, firstName: String!, lastName: String!): String!
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
