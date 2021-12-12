const { getAllUsers, getUserByEmail } = require("../services/query-services");
const { createUser, updateUser } = require("../services/mutation-services");

const resolvers = {
  Query: {
    getAllUsers: getAllUsers,
    getUserByEmail: getUserByEmail
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser
  }
};

module.exports = {
  resolvers
};
