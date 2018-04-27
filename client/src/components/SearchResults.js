import React from 'react';
import ResultList from './ResultList';
import Dropdown from './Dropdown';
import Pagination from './Pagination';

const pageDropdownOptions = [{
    label: '10 produtos por página',
    value: 10,
}, {
    label: '15 produtos por página',
    value: 15,
}, {
    label: '20 produtos por página',
    value: 20,
}, {
    label: '25 produtos por página',
    value: 25,
}];

const SearchResults = ({ items }) => (
    <div className='container mx-auto p-4 flex flex-col items-start bg-white h-full' style={{ minWidth: '800px' }}>
        <div className='border-solid border-yellow-dark border-b-4 pb-2 mb-4 text-sm text-grey-darker uppercase'>
            {items.length > 0
                ? (items.length > 1 ? `${items.length} itens encontrados` : '1 item encontrado')
                : 'Nenhum item encontrado'
            }
        </div>

        <div className='flex flex-col w-full bg-white'>
            <ResultList items={items} />
        </div>

        <hr className='text-grey-lighter bg-grey-lighter w-full h-px my-4' />

        <div className='flex flex-row w-full justify-between items-center pt-2'>
            <Dropdown options={pageDropdownOptions} />
            <Pagination />
        </div>
    </div>
);

export default SearchResults;
