const { users } = require("../sample-data/sample-users-data");

const createUser = (parent, args) => {
  user = { firstName: args.firstName, lastName: args.lastName, email: args.email };
  users.push(user);
  return `User with name ${user.firstName} has been created succesfully`;
};

const updateUser = (parent, args) => {
  users.forEach((user) => {
    user.email === args.email ? ((user.firstName = args.firstName), (user.lastName = args.lastName)) : "";
  });

  return `Update for user with email ${args.email} has been completed successfuly.`;
};

module.exports = { createUser, updateUser };
