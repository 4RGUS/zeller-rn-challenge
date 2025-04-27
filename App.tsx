import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./src/graphql/client";
import UserListScreen from "./src/screens/UserListScreen";
import RootStack from "./src/RootStack";

const App = () => (
  <ApolloProvider client={client}>
    <RootStack />
  </ApolloProvider>
);

export default App;
