import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `https://funky-boxer-48.hasura.app/v1/graphql`,
  cache: new InMemoryCache(),
});
