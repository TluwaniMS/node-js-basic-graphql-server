const { getAllUsers } = require("../services/query-services");

const resolvers = {
  Query: {
    getAllUsers: getAllUsers
  }
};

module.exports = {
  resolvers
};
