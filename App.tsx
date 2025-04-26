import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./src/graphql/client";
import UserListScreen from "./src/screens/UserListScreen";

const App = () => (
  <ApolloProvider client={client}>
    <UserListScreen />
  </ApolloProvider>
);

export default App;