const { users } = require("../sample-data/sample-users-data");

const getAllUsers = () => users;
const getUserByEmail = (parent, args) => users.filter((user) => user.email === args.email);

module.exports = {
  getAllUsers,
  getUserByEmail
};
