import * as React from 'react';
// step 1
import { ApolloProvider } from 'react-apollo';

// step 5
import client from './graphql/apolloClient';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      // step 6
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

