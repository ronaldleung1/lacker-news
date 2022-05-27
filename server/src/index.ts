import { ApolloServer } from "apollo-server";

import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

const port = 4000; // 3000 in tutorial

server.listen({port}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});