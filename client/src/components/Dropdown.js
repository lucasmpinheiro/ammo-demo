import React from 'react';

const Dropdown = ({ options }) => (
    <div className='relative h-8'>
        <select className='block appearance-none bg-transparent border border-grey-light text-sm text-grey-darker p-2 pr-8 rounded'>
            {options.map(props => <option key={props.value} {...props} />)}
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 pt-1 text-grey-darker">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
);

export default Dropdown;
