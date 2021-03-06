import React from 'react';
import SearchBar from './SearchBar';
import logo from '../logo.png';

const Navbar = ({ onSearch }) => (
    <nav className="w-full flex flex-col sm:flex-row sm:items-center justify-between flex-wrap bg-white px-6 py-3">
        <div className="flex items-center flex-no-shrink text-white mr-6">
            <img style={{ width: '120px' }} src={logo} alt="mmartan" />
        </div>

        <div className="block flex-grow flex sm:justify-end mt-2 sm:mt-0">
            <div className="text-sm w-64 float-right">
                <SearchBar onSubmit={onSearch} />
            </div>
        </div>
    </nav>
);

export default Navbar;
