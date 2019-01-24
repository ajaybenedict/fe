import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRouter } from './router';

/*const uri = 'https://api.github.com/graphql';
const uri = 'https://mpjk0plp9.lp.gql.zone/graphql';
const uri = 'https://t1-digi-as-01:10443/graphql';*/

const graphqlUri= "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: graphqlUri
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
  , document.getElementById('root'));
