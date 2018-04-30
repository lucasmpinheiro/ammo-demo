import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SearchResults from '../components/SearchResults';

const ProductsQuery = gql`
    query ProductsQuery($filter: String $skip: Int $limit: Int) {
        products(filter: $filter skip: $skip limit: $limit) {
            totalCount
            edges {
                id
                name
                price
                discountedPrice
                tags
                photos
            }
        }
    }
`;

const SearchResultsContainer = ({ filter = '', pageNumber, itemsPerPage, ...rest }) => (
    <Query
        query={ProductsQuery}
        variables={{
            filter,
            skip: pageNumber * itemsPerPage,
            limit: itemsPerPage,
        }}
        fetchPolicy='cache-and-network'
    >
        {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error: ${error.message}`;

            return <SearchResults
                items={data.products.edges}
                totalCount={data.products.totalCount}
                pageNumber={pageNumber}
                itemsPerPage={itemsPerPage}
                {...rest}
            />;
        }}
    </Query>
);

export default SearchResultsContainer;
