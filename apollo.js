import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ready-hoops-peel.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export const isLoggedInVar = makeVar(false);
export default client;
