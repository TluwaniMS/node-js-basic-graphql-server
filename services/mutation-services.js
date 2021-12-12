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

const deleteUserByEmail = (parent, args) => {
  const selectedUser = users.filter((user) => user.email === args.email)[0];
  const usersIndex = users.indexOf(selectedUser);
  users.splice(usersIndex, 1);

  return `User has been deleted successfully`;
};

module.exports = { createUser, updateUser, deleteUserByEmail };
