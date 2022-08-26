import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
