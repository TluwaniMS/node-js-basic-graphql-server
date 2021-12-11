const { getAllUsers, getUserByEmail } = require("../services/query-services");
const { createUser } = require("../services/mutation-services");

const resolvers = {
  Query: {
    getAllUsers: getAllUsers,
    getUserByEmail: getUserByEmail
  },
  Mutation: {
    createUser: createUser
  }
};

module.exports = {
  resolvers
};
