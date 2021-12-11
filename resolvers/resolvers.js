const { getAllDoctors } = require("../services/query-services");

const resolvers = {
  Query: {
    getAllDoctors: getAllDoctors()
  }
};

module.exports = {
  resolvers
};
