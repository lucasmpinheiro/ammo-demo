import React from 'react';
import Navbar from './Navbar';
import SearchTerms from './SearchTerms';
import SearchResultsContainer from '../containers/SearchResultsContainer';

const HomePage = ({ filter, pageNumber, itemsPerPage, onSearch, onPageChange }) => (
    <div className="flex flex-col items-stretch font-sans">
        <Navbar onSearch={onSearch} />
        <SearchTerms filter={filter} />
        <SearchResultsContainer
            filter={filter}
            pageNumber={pageNumber}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
        />
    </div>
);

export default HomePage;
