const { users } = require("../sample-data/sample-users-data");

const createUser = (parent, args) => {
  user = { firstName: args.firstName, lastName: args.lastName, email: args.email };
  users.push(user);
  return `User with name ${user.firstName} has been created succesfully`;
};

module.exports = { createUser };
