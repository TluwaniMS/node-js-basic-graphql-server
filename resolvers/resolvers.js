const { getAllUsers, getUserByEmail } = require("../services/query-services");
const { createUser, updateUser, deleteUserByEmail } = require("../services/mutation-services");

const resolvers = {
  Query: {
    getAllUsers: getAllUsers,
    getUserByEmail: getUserByEmail
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUserByEmail: deleteUserByEmail
  }
};

module.exports = {
  resolvers
};
