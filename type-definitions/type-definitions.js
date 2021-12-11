const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getAllDoctors: [Doctor!]!
  }

  type Doctor {
    firstName: String!
    lastName: String!
    gender: String!
    password: String!
    email: String!
    hospital: String!
    specialty: String!
  }
`;

module.exports = {
  typeDefs
};
