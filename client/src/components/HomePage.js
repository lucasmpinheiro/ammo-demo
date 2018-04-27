import React from 'react';
import Navbar from './Navbar';
import SearchTerms from './SearchTerms';
import SearchResults from '../containers/SearchResultsContainer';

const HomePage = ({ filter, onSearch }) => (
    <div className="flex flex-col h-screen font-sans">
        <Navbar onSearch={onSearch} />
        <SearchTerms filter={filter} />
        <SearchResults filter={filter} />
    </div>
);

export default HomePage;
