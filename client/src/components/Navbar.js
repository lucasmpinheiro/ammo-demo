import React from 'react';
import SearchBar from './SearchBar';
import logo from '../logo.png';

const Navbar = ({ onSearch }) => (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
            <img style={{ width: '120px' }} src={logo} alt="mmartan" />
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <SearchBar onSubmit={onSearch} />
            </div>
        </div>
    </nav>
);

export default Navbar;
