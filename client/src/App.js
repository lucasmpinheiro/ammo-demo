import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-client-preset';
import { createHttpLink } from 'apollo-link-http';

import HomePageContainer from './containers/HomePageContainer';

const link = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
        mutate: {
            errorPolicy: 'all',
        },
    },
});

const App = () => (
    <ApolloProvider client={client}>
        <HomePageContainer />
    </ApolloProvider>
);

export default App;
