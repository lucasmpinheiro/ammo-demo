import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SearchResults from '../components/SearchResults';

const ProductsQuery = gql`
    query ProductsQuery($filter: String!) {
        products(filter: $filter) {
            id
            name
            price
            discountedPrice
            tags
            photos
        }
    }
`;

const SearchResultsContainer = ({ filter = '' }) => (
    <Query
        query={ProductsQuery}
        variables={{
            filter,
        }}
    >
        {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error: ${error.message}`;

            return <SearchResults items={data.products} />;
        }}
    </Query>
);

export default SearchResultsContainer;
