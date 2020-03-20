// step 2
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// step 20
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from '../utils';

// step 3
// this is where the GraphQL server will be running on
const uri = 'http://localhost:4000';
const httpLink = createHttpLink({
  uri
});

// step 21
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

// step 4
const client = new ApolloClient({
  // step 22
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;