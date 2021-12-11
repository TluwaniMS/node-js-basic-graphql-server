const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers/resolvers");
const { typeDefs } = require("./type-definitions/type-definitions");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
