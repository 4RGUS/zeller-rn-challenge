import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import awsconfig from "./aws-exports";
import { AuthOptions, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

const auth: AuthOptions = {
  type: "API_KEY",
  apiKey: awsconfig.aws_appsync_apiKey,
};

const httpLink = new HttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const link = ApolloLink.from([
  createAuthLink({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth,
  }),
  createSubscriptionHandshakeLink(
    {
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth,
    },
    httpLink
  ),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
