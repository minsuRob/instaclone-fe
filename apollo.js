import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const client = new ApolloClient({
  uri: "https://violet-heads-notice.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");
export default client;
