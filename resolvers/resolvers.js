const { getAllUsers, getUserByEmail } = require("../services/query-services");

const resolvers = {
  Query: {
    getAllUsers: getAllUsers,
    getUserByEmail: getUserByEmail
  }
};

module.exports = {
  resolvers
};
